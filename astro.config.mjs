// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://orion-entertainment-u9zq.vercel.app',
  integrations: [sitemap()],
  // ...konfigurasi lain yang sudah ada, jangan dihapus
});