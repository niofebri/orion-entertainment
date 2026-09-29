export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  year: string;
  description?: string;
  heroImage?: string;
  heroVideo?: string;
  thumbnail?: string;
  gallery?: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "the-patra-hotel-resort",
    title: "The Patra Hotel & Resort",
    category: "Video Production",
    location: "The Patra Hotel",
    date: "18 Juni 2024",
    year: "2024",
    thumbnail: "/images/patra/patra.webp",
    heroVideo: "/images/patra/patra.mp4",
    description:
      'Menghadirkan cerita visual tentang fasilitas, layanan, dan pengalaman di hotel Patra di berbagai wilayah Indonesia.',
    gallery: [
      '/images/patra/patra.mp4',
      '/images/patra/patra2.mp4',
      '/images/patra/patra3.mp4',
    ]
  },
  {
    id: 2,
    slug: "intecs-golf-tournament-2024",
    title: "PT. Intecs Golf Tournament 2024",
    category: "Event Production",
    location: "Bali National Golf Club, Nusa Dua",
    date: "24 Agustus 2024",
    year: "2024",
    description:
      'PT. Intecs Golf Tournament 2024, sebuah ajang golf yang mempertemukan para direktur perusahaan, mitra, sponsor, dan penggemar golf dalam suasana kompetitif dan penuh kebersamaan.',
    thumbnail: "/images/intecs/intecs.webp",
    heroImage: "/images/intecs/intecs.webp",
  },
  {
    id: 3,
    slug: "peresmian-pasar-toboali",
    title: "Peresmian Pasar Toboali Bangka Belitung",
    category: "Event Production",
    location: "Pasar Toboali, Bangka Belitung",
    date: "9 September 2024",
    year: "2024",
    description:
      'Proyek revitalisasi Pasar Toboali oleh Kementerian PUPR, menghadirkan ruang perdagangan yang modern sekaligus mendukung perkembangan UMKM di Bangka Belitung.',
    thumbnail: "/images/toboali/toboali.webp",
    heroImage: "/images/toboali/toboali.webp",
  },
  {
    id: 4,
    slug: "hari-habitat-dunia-2024",
    title: "Malam Puncak Hari Habitat Dunia & Hari Kota Dunia 2024",
    category: "Event & Video Production",
    location: "GIK UGM, DI.Yogyakarta",
    date: "12 Oktober 2024",
    year: "2024",
    description:
      'Penyelenggaraan Puncak Hari Habitat Dunia dan Hari Kota Dunia 2024 oleh Kementerian PUPR di GIK UGM, Yogyakarta, dengan fokus pada aksi pemuda dan pembangunan berkelanjutan.',
    thumbnail: "/images/habitat/habitat.webp",
    heroImage: "/images/habitat/habitat.webp",
  },
  {
    id: 5,
    slug: "talkshow-microtunneling",
    title: "Talkshow Microtunneling Jakarta Metro",
    category: "Event Production",
    location: "GIK UGM, DI Yogyakarta",
    date: "12 Oktober 2024",
    year: "2024",
    description:
      'Penyelenggaraan Talkshow Microtunneling oleh BPPW Jakarta Metropolitan yang membahas teknologi konstruksi bawah tanah modern sebagai solusi pembangunan infrastruktur perkotaan dengan minim gangguan terhadap aktivitas masyarakat.',
    thumbnail: "/images/talkshow/talkshow.webp",
    heroImage: "/images/talkshow/talkshow.webp",
    gallery: [
      '/images/talkshow/talkshow.webp',
      '/images/talkshow/talkshow2.webp',
      '/images/talkshow/talkshow3.webp',
      '/images/talkshow/talkshow4.webp',
      '/images/talkshow/talkshow5.webp',
      '/images/talkshow/talkshow6.webp',]
  },
  {
    id: 6,
    slug: "revitalisasi-pasar-natar",
    title: "Peresmian Revitalisasi Pasar Natar Lampung Selatan",
    category: "Event Production",
    location: "Lampung Selatan",
    date: "15 November 2024",
    year: "2024",
    description:
      'Revitalisasi Pasar Natar, Lampung Selatan, menjadi pasar modern yang lebih tertata, bersih, dan inklusif, dengan fasilitas baru yang mendukung aktivitas perdagangan dan kenyamanan masyarakat.',
    thumbnail: "/images/natar/natar.webp",
    heroImage: "/images/natar/natar.webp"
  },
  {
    id: 7,
    slug: "rakor-akhir-tahun-2024",
    title: "Rapat Koordinasi di Lingkungan Direktorat Prasarana Strategis, Kementerian Pekerjaan Umum",
    category: "Event & Video Production",
    location: "Bandung",
    date: "8–10 Desember 2024",
    year: "2024",
    description:
      'Penyelenggaraan rapat koordinasi untuk mengevaluasi pelaksanaan program Tahun Anggaran 2024 sekaligus mempersiapkan pelaksanaan program dan kegiatan Tahun Anggaran 2025 di lingkungan Direktorat Prasarana Strategis, Kementerian Pekerjaan Umum.',
    thumbnail: "/images/rakor/rakor.webp",
    heroVideo: "/images/rakor/rakor.mp4",
    gallery: [
      '/images/rakor/rakor.mp4',
      '/images/rakor/rakor1.webp']
  },
  {
    id: 8,
    slug: "outbond-dit-ps-2024",
    title: "Team Bulding & Outbound di Lingkungan Direktorat Prasarana Strategis",
    category: "Event & VIdeo Production",
    location: "Bandung",
    date: "8–10 Desember 2024",
    year: "2024",
    description:
      'Penyelenggaraan rapat koordinasi untuk mengevaluasi pelaksanaan program Tahun Anggaran 2024 sekaligus mempersiapkan pelaksanaan program dan kegiatan Tahun Anggaran 2025 di lingkungan Direktorat Prasarana Strategis, Kementerian Pekerjaan Umum.',
    thumbnail: "/images/outbond/outbond1.webp",
    heroVideo: "/images/outbond/outbond1.mp4",
    gallery: [
      '/images/outbond/outbond1.mp4',
      '/images/outbond/outbond2.webp',
      '/images/outbond/outbond3.webp',
      '/images/outbond/outbond4.webp',
      '/images/outbond/outbond5.webp',]
  },
  {
    id: 9,
    slug: "peresmian-fia-ui",
    title: "Peresmian Gedung Fakultas Ilmu Administrasi Universitas Indonesia",
    category: "Event Production",
    location: "Universitas Indonesia",
    date: "10 Januari 2025",
    year: "2025",
    description:
      ' Dibangun melalui kerja sama dengan Kementerian Pekerjaan Umum (PU) serta melibatkan PT Adhi Karya dan PT Virama Karya. Mengusung konsep green building yang ramah lingkungan dengan penerapan prinsip ESG (Environmental, Social, and Governance), panel surya, serta fasilitas pintar (smart building).',
    thumbnail: "/images/ui/ui.webp",
    heroImage: "/images/ui/ui.webp",

  },
  {
    id: 10,
    slug: "grand-opening-yuwell",
    title: "Grand Opening PT. Yuwell Medical Indonesia",
    category: "Event Production",
    location: "Soho Capital, Jakarta Barat",
    date: "13 September 2025",
    year: "2025",
    description:
      'Grand Opening PT Yuwell Medical Indonesia sebagai momen peresmian operasional di Indonesia sekaligus memperkenalkan produk perangkat homecare dan peralatan medis kepada mitra, tenaga kesehatan, dan masyarakat.',
    thumbnail: "/images/yuwell/yuwell.webp",
    heroImage: "/images/yuwell/yuwell.webp",
    heroVideo: "/images/yuwell/yuwell.mp4",
    gallery: [
      '/images/yuwell/yuwell.mp4',
      '/images/yuwell/yuwell.webp',
    ]
  },
  {
    id: 11,
    slug: "hut-komnas-perempuan-27",
    title: "Peringatan HUT Ke-27 Komnas Perempuan",
    category: "Event Production",
    location: "Kantor Pusat Komnas Perempuan",
    date: "15 Oktober 2025",
    year: "2025",
    description:
      'Penyelenggaraan Peringatan HUT ke-27 Komnas Perempuan pada 15 Oktober 2025 di Jakarta, dengan tema “Teguhkan Mandat, Menolak Penyangkalan Kekerasan Seksual Mei 1998” sebagai ruang refleksi dan peneguhan mandat Komnas Perempuan.',
    thumbnail: "/images/komnas/komnas.webp",
    heroImage: "/images/komnas/komnas.webp",
  },
  {
    id: 12,
    slug: "water-adventure-pamsimas-2025",
    title: "Water Adventure PAMSIMAS 2025",
    category: "Event & Video Production",
    location: "Bumi Perkemahan Bongohulawa, Gorontalo",
    date: "2–7 November 2025",
    year: "2025",
    thumbnail: "/images/wa/wa.webp",
    heroImage: "/images/wa/wa.webp",
    heroVideo: "/images/wa/wa.mp4",
    description:
      'Pamsimas Water Adventure 2025 oleh Kementerian Pekerjaan Umum di Bumi Perkemahan Bongohulawa, Gorontalo, yang menghadirkan kegiatan edukatif dan interaktif tentang air minum, sanitasi, serta kerja sama tim.',
    gallery: [
      '/images/wa/wa1.webp',
      '/images/wa/wa2.webp',
      '/images/wa/wa3.webp',
      '/images/wa/wa4.webp',
      '/images/wa/wa5.webp',
      '/images/wa/wa6.webp',
      '/images/wa/wa7.webp',]
  },
  {
    id: 13,
    slug: "peresmian-huntara-2026",
    title: "Peresmian Hunian Sementara (Huntara) di Kabupaten Aceh Tamiang",
    category: "Event & Production",
    location: "Kabupaten Taming, Aceh",
    date: "22 Januari 2026",
    year: "2026",
    description:
      'Peresmian dan penyerahan Hunian Sementara (Huntara) bagi warga terdampak bencana di Kabupaten Aceh Tamiang sebagai bagian dari proses pemulihan masyarakat.',
    thumbnail: "/images/huntara/huntara1.webp",
    heroImage: "/images//huntara/huntara1.webp",
    heroVideo: "/images/huntara/huntara.mp4",
    gallery: [
      '/images/huntara/huntara1.webp',
      '/images/huntara/huntara2.webp',
      '/images/huntara/huntara3.webp',
      '/images/huntara/huntara4.webp',
      '/images/huntara/huntara5.webp',
      '/images/huntara/huntara6.webp',]
  },
  {
    id: 14,
    slug: "senam-sehat-pam-jaya-2026",
    title: "Program Senam Sehat PAM JAYA 2026",
    category: "Event Production",
    location: "Cililitan Kalibata, Jakarta Timur",
    date: "13 Juni 2026",
    year: "2026",
    description:
      'Program Senam Sehat PAM JAYA 2026 sebagai kegiatan kebugaran dan edukasi kesehatan bagi masyarakat Jakarta, yang menghadirkan senam bersama, pemeriksaan kesehatan gratis, serta berbagai aktivitas interaktif.',
    thumbnail: "/images/pam/pam.webp",
    heroImage: "/images/pam/pam.webp",
  },
  {
    id: 15,
    slug: "gathering-arutmin-2026",
    title: "Company Gathering & Gala Dinner PT. Arutmin Indonesia 2026",
    category: "Event & Video Production",
    location: "Bali",
    date: "26-30 Juni 2026",
    year: "2026",
    thumbnail: "/images/arutmin/arutmin.webp",
    heroImage: "/images/arutmin/arutmin.webp",
    heroVideo: "/images/arutmin/arutmin.mp4",
    description:
      'Penyelenggaraan Company Gathering dan Gala Dinner PT Arutmin Indonesia bertema “Safe Sustain Stronger” di Bali, yang menghadirkan rangkaian team building, perayaan bersama, serta pemberian penghargaan bagi karyawan.',
    gallery: [
      '/images/arutmin/arutmin1.webp',
      '/images/arutmin/arutmin2.webp',
      '/images/arutmin/arutmin3.webp',
      '/images/arutmin/arutmin4.webp',
      '/images/arutmin/arutmin5.webp',
      '/images/arutmin/arutmin6.webp',
      '/images/arutmin/arutmin7.webp',
      '/images/arutmin/arutmin8.webp']
  },
  {
    id: 16,
    slug: "workshop-dit-ps",
    title: "Workshop Direktorat Prasarana Strategis Kementerian Pekerjaan Umum",
    category: "Event & Video Production",
    location: "Novotel BSD, Tangerang",
    date: "27-29 Agustus 2026",
    year: "2026",
    thumbnail: "/images/workshop/workshop.webp",
    heroImage: "/images/workshop/workshop.webp",
    heroVideo: "/images/workshop/workshop.mp4",
    description:
      'Workshop P3DN dan Tata Cara Pengajuan Izin Penggunaan Barang Impor di lingkungan Direktorat Jenderal Prasarana Strategis, dengan fokus pada penerapan kebijakan penggunaan produk dalam negeri dan perhitungan TKDN.',
    gallery: [
      '/images/workshop/workshop1.webp',
      '/images/workshop/workshop2.webp',
      '/images/workshop/workshop3.webp',
      '/images/workshop/workshop4.webp',
      '/images/workshop/workshop5.webp']
  },
];

export const featuredProjectIds = [16, 15, 13, 12, 6, 5];

export const services = [
  { num: "01", title: "Event Production", image: "/images/services/eventproduction.webp", imageOpacity: 50 },
  { num: "02", title: "Event Management", image: "/images/services/eventmanagement.webp", imageOpacity: 50 },
  { num: "03", title: "Video Production", image: "/images/services/videoproduction.webp", imageOpacity: 50 },
  { num: "04", title: "Creative Production", image: "/images/services/creativeproduction.webp", imageOpacity: 50 },
  { num: "05", title: "Event Documentation", image: "/images/services/eventdocumentation.webp", imageOpacity: 50 },
  { num: "06", title: "Post Production", image: "/images/services/postpro.webp", imageOpacity: 50 },
];

export interface Client {
  name: string;
  logo?: string;
  logoHeight?: string
}

export const clients: Client[] = [
  { name: "Kementerian Pekerjaan Umum", logo: "/images/logos/pu.webp", logoHeight: "56px" },
  { name: "Komnas Perempuan", logo: "/images/logos/komnas.webp", logoHeight: "1200px" },
  { name: "PAM JAYA", logo: "/images/logos/pamjaya.webp", logoHeight: "90px" },
  { name: "PT. Yuwell Medical Indonesia", logo: "/images/logos/yuwell.webp" },
  { name: "PT. Arutmin Indonesia", logo: "/images/logos/arutmin.webp", logoHeight: "1200px" },
  { name: "PT. Intecs", logo: "/images/logos/intecs.webp" },
  { name: "The Patra Hotel & Resort", logo: "/images/logos/patra.webp" },
];

