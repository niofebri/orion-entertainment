import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, unlinkSync } from 'fs';
import path from 'path';

const IMAGES_DIR = path.resolve('public/images');
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;

function walk(dir, files = []) {
    for (const entry of readdirSync(dir)) {
        const fullPath = path.join(dir, entry);
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath, files);
        } else if (/\.(jpg|jpeg|png)$/i.test(entry)) {
            files.push(fullPath);
        }
    }
    return files;
}

async function optimize() {
    const files = walk(IMAGES_DIR);
    console.log(`Ditemukan ${files.length} gambar\n`);

    let totalBefore = 0;
    let totalAfter = 0;
    const failed = [];

    for (const file of files) {
        try {
            const before = statSync(file).size;
            const image = sharp(file);
            const metadata = await image.metadata();

            let pipeline = image;
            if (metadata.width && metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }
            pipeline = pipeline.webp({ quality: WEBP_QUALITY });

            const buffer = await pipeline.toBuffer();
            const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');

            writeFileSync(webpPath, buffer);
            unlinkSync(file);

            totalBefore += before;
            totalAfter += buffer.length;

            console.log(
                `OK  ${path.relative(IMAGES_DIR, file)} → .webp: ${(before / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB`
            );
        } catch (err) {
            console.log(`GAGAL ${path.relative(IMAGES_DIR, file)}: ${err.message}`);
            failed.push(file);
        }
    }

    console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
    if (failed.length > 0) {
        console.log(`\n${failed.length} file gagal (coba tutup program yang membuka file ini, lalu jalankan ulang script):`);
        failed.forEach((f) => console.log(' -', f));
    }
}

optimize();