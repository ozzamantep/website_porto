export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  status: string;
  isLive: boolean;
  role: string;
  focus: string;
  summary: string;
  facts: string[];
  url: string;
  linkLabel: string;
  screenshot?: string;
  screenshotAlt?: string;
  caption?: string;
  todoNote?: string;
}

export const PROFILE = {
  name: 'Muhammad Dzakwan Ikram',
  initials: 'MDI',
  role: 'Mahasiswa Teknik Komputer & Pengembang Web',
  statement:
    'Merancang antarmuka web dan sistem perangkat lunak yang terstruktur, dari eksplorasi UI/UX hingga implementasi kode.',
  location: 'Malang, Jawa Timur',
  institution: 'Fakultas Ilmu Komputer, Universitas Brawijaya',
  program: 'S1 Teknik Komputer — Angkatan 2024',
  photoPath: '/images/foto-pribadi.jpeg',
  photoAlt: 'Foto profil Muhammad Dzakwan Ikram',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'filkom-merch',
    index: '01',
    title: 'FILKOM Merch UB',
    status: 'Produksi — POS & Katalog',
    isLive: true,
    role: 'Website Developer 2',
    focus: 'Ide UI dan UX baru',
    summary:
      'Situs resmi merchandise Fakultas Ilmu Komputer Universitas Brawijaya yang dikelola Creative Enterprise Ministry SGE FILKOM 2026.',
    facts: [
      'Katalog produk resmi: jaket varsity, work jacket, half zip, kaos, tumbler, totebag, dan aksesoris.',
      'Fitur promosi: badge diskon, hitung mundur promo, hero lookbook, halaman Pre-Order, login akun UB, dan halaman pesanan.',
      'Integrasi informasi: FAQ dengan asisten AI maskot "Bara", embed Instagram, serta info lokasi store di Gedung A FILKOM UB.',
      'Arsitektur operasional saat ini difokuskan sebagai POS kasir untuk penjualan langsung di store (tanpa checkout online).',
    ],
    url: 'https://filkommerch.com',
    linkLabel: 'Kunjungi filkommerch.com',
    screenshot: '/images/filkommerch-catalog.png',
    screenshotAlt: 'Tangkapan layar katalog produk situs resmi FILKOM Merch UB',
    caption: 'Tangkapan layar langsung dari filkommerch.com',
  },
  {
    id: 'bluerov2-digital-twin',
    index: '02',
    title: 'Digital Twin Hybrid BlueROV2',
    status: 'Proposal Skripsi',
    isLive: false,
    role: 'Peneliti & Pengembang',
    focus: 'Model Fossen + Box-Jenkins daring',
    summary:
      'Rancangan sistem kembaran digital hibrida untuk wahana bawah air BlueROV2 yang menggabungkan pemodelan dinamika Fossen dengan identifikasi Box-Jenkins secara daring.',
    facts: [
      'Tahap pengerjaan saat ini berada pada status proposal skripsi.',
      'Menggabungkan model fisik Fossen dengan pembaruan parameter Box-Jenkins daring.',
    ],
    url: 'https://github.com/ozzamantep/digitaltwinamarinefilkomub.git',
    linkLabel: 'Buka Repositori GitHub',
    todoNote: 'TODO: Tambahkan diagram arsitektur atau tangkapan layar simulasi setelah tahap implementasi dimulai.',
  },
];

export const SKILLS = [
  {
    title: 'Programming',
    detail: 'Pengembangan aplikasi web, perancangan struktur antarmuka, serta pemrograman sistem.',
    todo: 'TODO: Lengkapi daftar spesifik bahasa pemrograman, framework, dan perangkat keras yang dikuasai.',
  },
  {
    title: 'UI / UX & Eksplorasi Antarmuka',
    detail: 'Perancangan alur pengguna, tata letak katalog, dan pembaruan konsep antarmuka pada proyek FILKOM Merch UB.',
    todo: 'TODO: Tambahkan daftar tools desain (mis. Figma) bila digunakan.',
  },
];

export const EXPERIENCES = [
  {
    role: 'PIC Programming',
    org: 'Motion Amarine',
    period: 'TODO: Periode kepengurusan',
    note: 'TODO: Ringkasan tanggung jawab dan capaian utama.',
  },
  {
    role: 'Vice Chief of Entrepreneurship',
    org: 'Creative Enterprise Ministry — SGE FILKOM UB',
    period: 'TODO: Periode kepengurusan',
    note: 'TODO: Ringkasan tanggung jawab dan program kerja utama.',
  },
];

export const EDUCATIONS = [
  {
    school: 'Universitas Brawijaya — Fakultas Ilmu Komputer',
    program: 'S1 Teknik Komputer',
    period: 'Angkatan 2024 — Sekarang',
  },
  {
    school: 'SMK Telkom Banjarbaru',
    program: 'Pendidikan Menengah Kejuruan',
    period: 'Lulus sebelum 2024',
  },
];

export const CONTACTS = [
  {
    label: 'Email',
    value: 'banjarb97@gmail.com',
    href: 'mailto:banjarb97@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/ozzamantep',
    href: 'https://github.com/ozzamantep',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-dzakwan-ikram-585b40321',
    href: 'https://www.linkedin.com/in/muhammad-dzakwan-ikram-585b40321',
  },
  {
    label: 'Instagram',
    value: '@ozza.athr',
    href: 'https://www.instagram.com/ozza.athr/',
  },
];
