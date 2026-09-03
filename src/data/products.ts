import catWebsite from "@/assets/cat-website.jpg";
import catCanva from "@/assets/cat-canva.jpg";
import catEbook from "@/assets/cat-ebook.jpg";
import catCv from "@/assets/cat-cv.jpg";
import catDesain from "@/assets/cat-desain.jpg";
import catSosmed from "@/assets/cat-sosmed.jpg";

export type Kategori =
  | "Template Website"
  | "Template Canva"
  | "Ebook"
  | "Template CV"
  | "Desain Grafis"
  | "Social Media";

export const kategoriList: { nama: Kategori; deskripsi: string; gambar: string }[] = [
  { nama: "Template Website", deskripsi: "Landing page & website siap pakai", gambar: catWebsite },
  { nama: "Template Canva", deskripsi: "Desain editable untuk semua kebutuhan", gambar: catCanva },
  { nama: "Ebook", deskripsi: "Panduan praktis untuk berkembang", gambar: catEbook },
  { nama: "Template CV", deskripsi: "CV profesional yang menonjol", gambar: catCv },
  { nama: "Desain Grafis", deskripsi: "Aset grafis berkualitas tinggi", gambar: catDesain },
  { nama: "Social Media", deskripsi: "Konten sosial media yang menjual", gambar: catSosmed },
];

const gambarKategori: Record<Kategori, string> = {
  "Template Website": catWebsite,
  "Template Canva": catCanva,
  Ebook: catEbook,
  "Template CV": catCv,
  "Desain Grafis": catDesain,
  "Social Media": catSosmed,
};

export type Produk = {
  slug: string;
  nama: string;
  kategori: Kategori;
  harga: number;
  hargaCoret?: number;
  rating: number;
  ulasan: number;
  terlaris?: boolean;
  gambar: string;
  deskripsi: string;
  format: string;
  ukuran: string;
  jumlahFile: string;
  lisensi: string;
};

type Seed = Omit<Produk, "gambar">;

const seed: Seed[] = [
  {
    slug: "landing-page-business",
    nama: "Landing Page Business",
    kategori: "Template Website",
    harga: 79000,
    hargaCoret: 99000,
    rating: 4.9,
    ulasan: 128,
    terlaris: true,
    deskripsi:
      "Template landing page profesional untuk bisnis, startup, freelancer, dan kebutuhan promosi online.",
    format: "HTML / CSS / React",
    ukuran: "25 MB",
    jumlahFile: "12 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "template-cv-profesional",
    nama: "Template CV Profesional",
    kategori: "Template CV",
    harga: 39000,
    hargaCoret: 59000,
    rating: 4.8,
    ulasan: 214,
    terlaris: true,
    deskripsi:
      "Kumpulan template CV modern yang ATS friendly dan mudah dikustomisasi untuk melamar kerja.",
    format: "DOCX / PDF / Canva",
    ukuran: "12 MB",
    jumlahFile: "8 Files",
    lisensi: "Personal Use",
  },
  {
    slug: "social-media-canva-pack",
    nama: "Social Media Canva Pack",
    kategori: "Template Canva",
    harga: 49000,
    rating: 4.7,
    ulasan: 96,
    terlaris: true,
    deskripsi:
      "Paket template Canva untuk feed, story, dan promosi produk dengan gaya visual yang konsisten.",
    format: "Canva Template",
    ukuran: "18 MB",
    jumlahFile: "40 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "ebook-digital-marketing",
    nama: "Ebook Digital Marketing",
    kategori: "Ebook",
    harga: 59000,
    hargaCoret: 89000,
    rating: 4.9,
    ulasan: 175,
    terlaris: true,
    deskripsi:
      "Panduan lengkap strategi digital marketing untuk pemula hingga pemilik bisnis yang ingin bertumbuh.",
    format: "PDF / EPUB",
    ukuran: "9 MB",
    jumlahFile: "3 Files",
    lisensi: "Personal Use",
  },
  {
    slug: "website-ui-kit",
    nama: "Website UI Kit",
    kategori: "Desain Grafis",
    harga: 89000,
    rating: 4.8,
    ulasan: 84,
    terlaris: true,
    deskripsi:
      "UI Kit lengkap berisi komponen, section, dan style guide untuk mempercepat proses desain website.",
    format: "Figma / Sketch",
    ukuran: "48 MB",
    jumlahFile: "60 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "instagram-template-pack",
    nama: "Instagram Template Pack",
    kategori: "Social Media",
    harga: 45000,
    hargaCoret: 65000,
    rating: 4.6,
    ulasan: 132,
    terlaris: true,
    deskripsi:
      "Template Instagram siap pakai untuk meningkatkan engagement dan menjaga identitas visual brand Anda.",
    format: "Canva / PSD",
    ukuran: "22 MB",
    jumlahFile: "30 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "business-presentation",
    nama: "Business Presentation",
    kategori: "Desain Grafis",
    harga: 69000,
    rating: 4.7,
    ulasan: 71,
    terlaris: true,
    deskripsi:
      "Template presentasi bisnis profesional untuk pitching, laporan, dan proposal kepada klien.",
    format: "PPTX / Google Slides",
    ukuran: "31 MB",
    jumlahFile: "50 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "modern-portfolio-template",
    nama: "Modern Portfolio Template",
    kategori: "Template Website",
    harga: 75000,
    hargaCoret: 95000,
    rating: 4.9,
    ulasan: 63,
    terlaris: true,
    deskripsi:
      "Template portfolio modern untuk desainer, developer, dan kreator yang ingin tampil profesional.",
    format: "HTML / CSS / React",
    ukuran: "20 MB",
    jumlahFile: "14 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "ebook-produktivitas-harian",
    nama: "Ebook Produktivitas Harian",
    kategori: "Ebook",
    harga: 35000,
    rating: 4.5,
    ulasan: 58,
    deskripsi:
      "Ebook praktis berisi sistem kerja harian agar Anda lebih fokus, konsisten, dan produktif.",
    format: "PDF",
    ukuran: "6 MB",
    jumlahFile: "2 Files",
    lisensi: "Personal Use",
  },
  {
    slug: "canva-branding-kit",
    nama: "Canva Branding Kit",
    kategori: "Template Canva",
    harga: 55000,
    hargaCoret: 79000,
    rating: 4.8,
    ulasan: 47,
    deskripsi:
      "Kit branding lengkap di Canva: logo, palet warna, kartu nama, hingga template promosi.",
    format: "Canva Template",
    ukuran: "15 MB",
    jumlahFile: "25 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "cv-kreatif-designer",
    nama: "CV Kreatif Designer",
    kategori: "Template CV",
    harga: 42000,
    rating: 4.6,
    ulasan: 39,
    deskripsi:
      "Template CV kreatif untuk desainer dan pekerja industri kreatif yang ingin tampil beda.",
    format: "AI / PSD / PDF",
    ukuran: "14 MB",
    jumlahFile: "9 Files",
    lisensi: "Personal Use",
  },
  {
    slug: "toko-online-template",
    nama: "Toko Online Template",
    kategori: "Template Website",
    harga: 99000,
    hargaCoret: 129000,
    rating: 4.9,
    ulasan: 52,
    deskripsi:
      "Template website toko online yang rapi, cepat, dan siap dipakai untuk berjualan produk apa pun.",
    format: "HTML / CSS / React",
    ukuran: "34 MB",
    jumlahFile: "18 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "icon-pack-bisnis",
    nama: "Icon Pack Bisnis",
    kategori: "Desain Grafis",
    harga: 29000,
    rating: 4.4,
    ulasan: 28,
    deskripsi: "Ratusan ikon bertema bisnis dan keuangan dalam format vektor yang mudah diedit.",
    format: "SVG / PNG",
    ukuran: "11 MB",
    jumlahFile: "120 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "story-promo-pack",
    nama: "Story Promo Pack",
    kategori: "Social Media",
    harga: 39000,
    hargaCoret: 55000,
    rating: 4.7,
    ulasan: 66,
    deskripsi:
      "Template story promosi untuk flash sale, testimoni, dan pengumuman produk baru Anda.",
    format: "Canva / PSD",
    ukuran: "17 MB",
    jumlahFile: "24 Files",
    lisensi: "Personal & Commercial",
  },
  {
    slug: "ebook-jualan-online",
    nama: "Ebook Jualan Online",
    kategori: "Ebook",
    harga: 49000,
    rating: 4.8,
    ulasan: 111,
    deskripsi:
      "Strategi praktis memulai dan mengembangkan bisnis online dari nol hingga menghasilkan.",
    format: "PDF / EPUB",
    ukuran: "8 MB",
    jumlahFile: "3 Files",
    lisensi: "Personal Use",
  },
  {
    slug: "canva-presentation-pack",
    nama: "Canva Presentation Pack",
    kategori: "Template Canva",
    harga: 52000,
    rating: 4.5,
    ulasan: 34,
    deskripsi: "Template presentasi Canva yang clean dan mudah diedit untuk kebutuhan apa pun.",
    format: "Canva Template",
    ukuran: "19 MB",
    jumlahFile: "35 Files",
    lisensi: "Personal & Commercial",
  },
];

export const produkList: Produk[] = seed.map((p) => ({ ...p, gambar: gambarKategori[p.kategori] }));

export const produkTerlaris = produkList.filter((p) => p.terlaris).slice(0, 8);

export const getProduk = (slug: string) => produkList.find((p) => p.slug === slug);

export const formatRupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");
