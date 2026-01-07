export const pages = [
  "global",
  "beranda",
  "Page Detail Layanan Custom Merchandise",
  "Page Detail Layanan Logo Design",
  "Page Detail layanan Social Media",
  "halaman-careers",
  "halaman-lowongan-kerja",
  "halaman-program-magang",
  "page detail layanan web&apk",
  "page layanan detail ui_ux",
  "page-about",
  "page-contact",
  "page-layanan",
  "page-portfolio",
];

export const pageLabels = {
  "global": "Global",
  "beranda": "Beranda",
  "page-layanan": "Layanan",
  "page layanan detail ui_ux": "UI/UX Design",
  "page detail layanan web&apk": "Website & Aplikasi",
  "Page Detail Layanan Logo Design": "Logo Design",
  "Page Detail layanan Social Media": "Social Media",
  "Page Detail Layanan Custom Merchandise": "Custom Merchandise",
  "page-portfolio": "Portfolio",
  "halaman-careers": "Karir",
  "page-contact": "Kontak",
  "page-about": "Tentang",
  "halaman-lowongan-kerja": "Lowongan Kerja",
  "halaman-program-magang": "Program Magang",
};

export const getPageLabel = (p) => pageLabels[p] || p;

export const navStructure = [
  { 
    label: 'Menu Utama',
    items: [
      { id: 'global', label: 'Global' },
      { id: 'beranda', label: 'Beranda' },
    ]
  },
  {
    label: 'Layanan',
    items: [
      { id: 'page-layanan', label: 'Overview Layanan' },
      { id: 'page layanan detail ui_ux', label: 'UI/UX Design' },
      { id: 'page detail layanan web&apk', label: 'Website & Aplikasi' },
      { id: 'Page Detail Layanan Logo Design', label: 'Logo Design' },
      { id: 'Page Detail layanan Social Media', label: 'Social Media' },
      { id: 'Page Detail Layanan Custom Merchandise', label: 'Custom Merchandise' },
    ]
  },
  {
    label: 'Halaman Lain',
    items: [
      { id: 'page-portfolio', label: 'Portfolio' },
      { id: 'halaman-careers', label: 'Karir' },
      { id: 'page-contact', label: 'Kontak' },
      { id: 'page-about', label: 'Tentang' },
    ]
  }
];
