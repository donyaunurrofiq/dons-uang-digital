import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Check,
  ChevronRight,
  Download,
  FileText,
  Heart,
  Headphones,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { Rating } from "@/components/Rating";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatRupiah, getProduk, produkList } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/produk/$slug")({
  loader: ({ params }) => {
    const produk = getProduk(params.slug);
    if (!produk) throw notFound();
    return { produk };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produk tidak ditemukan — DONS BANYAK UANG" }, { name: "robots", content: "noindex" }],
      };
    }
    const { produk } = loaderData;
    const judul = `${produk.nama} — DONS BANYAK UANG`;
    return {
      meta: [
        { title: judul },
        { name: "description", content: produk.deskripsi },
        { property: "og:title", content: judul },
        { property: "og:description", content: produk.deskripsi },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DetailProduk,
});

const fitur = [
  "Responsive",
  "Modern Design",
  "Mudah Dikustomisasi",
  "SEO Friendly",
  "Dokumentasi Lengkap",
];

const isiFile = ["index.html", "style.css", "assets", "documentation", "images"];

const ulasanDummy = [
  {
    nama: "Rizky Pratama",
    rating: 5,
    tanggal: "12 Agustus 2026",
    isi: "Kualitas desainnya rapi banget dan gampang diedit. Sangat membantu untuk proyek klien saya.",
  },
  {
    nama: "Anisa Rahmawati",
    rating: 5,
    tanggal: "28 Juli 2026",
    isi: "Harga terjangkau tapi hasilnya premium. Filenya lengkap dan dokumentasinya jelas.",
  },
  {
    nama: "Bagas Setiawan",
    rating: 4,
    tanggal: "3 Juli 2026",
    isi: "Proses download instan, langsung bisa dipakai. Semoga variasi templatenya makin banyak.",
  },
];

function DetailProduk() {
  const { produk } = Route.useLoaderData();
  const [aktifGambar, setAktifGambar] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  const galeri = [produk.gambar, produk.gambar, produk.gambar, produk.gambar];
  const diskon = produk.hargaCoret
    ? Math.round(((produk.hargaCoret - produk.harga) / produk.hargaCoret) * 100)
    : 0;

  const terkait = produkList
    .filter((p) => p.slug !== produk.slug && p.kategori === produk.kategori)
    .concat(produkList.filter((p) => p.slug !== produk.slug && p.kategori !== produk.kategori))
    .slice(0, 4);

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-4 text-sm text-muted-foreground sm:px-6 lg:px-8"
        >
          <Link to="/" className="hover:text-primary">
            Beranda
          </Link>
          <ChevronRight size={14} />
          <Link to="/produk" className="hover:text-primary">
            Produk
          </Link>
          <ChevronRight size={14} />
          <Link to="/produk" search={{ kategori: produk.kategori }} className="hover:text-primary">
            {produk.kategori}
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-foreground">{produk.nama}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Kiri */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src={galeri[aktifGambar]}
                alt={produk.nama}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galeri.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAktifGambar(i)}
                  aria-label={`Preview ${i + 1}`}
                  className={cn(
                    "overflow-hidden rounded-xl border-2 transition-all",
                    aktifGambar === i ? "border-primary" : "border-border hover:border-primary/40",
                  )}
                >
                  <img
                    src={g}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Kanan */}
          <div>
            <span className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">
              {produk.kategori}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              {produk.nama}
            </h1>
            <div className="mt-3">
              <Rating value={produk.rating} count={produk.ulasan} size="md" />
            </div>
            <p className="mt-4 text-muted-foreground">{produk.deskripsi}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold text-foreground">
                {formatRupiah(produk.harga)}
              </span>
              {produk.hargaCoret && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatRupiah(produk.hargaCoret)}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    Hemat {diskon}%
                  </span>
                </>
              )}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Format", produk.format],
                ["Ukuran", produk.ukuran],
                ["File", produk.jumlahFile],
                ["Lisensi", produk.lisensi],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={() => toast.success("Terima kasih! Fitur pembelian segera hadir.")}
              >
                <Zap />
                Beli Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => toast("Produk ditambahkan ke keranjang (demo).")}
              >
                <ShoppingCart />
                Tambah ke Keranjang
              </Button>
            </div>

            <button
              type="button"
              onClick={() => {
                setWishlist((v) => !v);
                toast(wishlist ? "Dihapus dari wishlist." : "Ditambahkan ke wishlist.");
              }}
              className={cn(
                "mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors",
                wishlist ? "text-primary" : "text-muted-foreground hover:text-primary",
              )}
            >
              <Heart size={16} className={cn(wishlist && "fill-primary")} />
              Tambahkan ke Wishlist
            </button>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                [Download, "Download Instan"],
                [ShieldCheck, "Pembayaran Aman"],
                [Headphones, "Support Pelanggan"],
              ].map(([Icon, teks]) => {
                const I = Icon as typeof Download;
                return (
                  <li
                    key={teks as string}
                    className="flex items-center gap-2 rounded-xl bg-surface px-3 py-3 text-sm text-foreground"
                  >
                    <I size={16} className="text-primary" />
                    {teks as string}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="deskripsi" className="mt-14">
          <TabsList className="h-auto flex-wrap gap-1 rounded-full bg-surface p-1">
            <TabsTrigger value="deskripsi" className="rounded-full px-5 py-2">
              Deskripsi
            </TabsTrigger>
            <TabsTrigger value="fitur" className="rounded-full px-5 py-2">
              Fitur
            </TabsTrigger>
            <TabsTrigger value="file" className="rounded-full px-5 py-2">
              Isi File
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deskripsi" className="mt-6">
            <div className="space-y-4 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
              <p>{produk.deskripsi}</p>
              <p>
                Produk ini dirancang agar mudah digunakan bahkan oleh pemula. Seluruh elemen dapat
                disesuaikan dengan identitas brand Anda, mulai dari warna, tipografi, hingga
                struktur kontennya.
              </p>
              <p>
                Setelah pembelian, Anda akan langsung mendapatkan akses download beserta dokumentasi
                lengkap agar proses penggunaan berjalan cepat dan tanpa hambatan.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="fitur" className="mt-6">
            <ul className="grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2">
              {fitur.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={16} className="text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="file" className="mt-6">
            <ul className="grid gap-3 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2">
              {isiFile.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <FileText size={16} className="text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        {/* Ulasan */}
        <section className="mt-16">
          <SectionHeader title="Ulasan Pelanggan" />
          <div className="mt-6 grid gap-5 lg:grid-cols-[260px_1fr]">
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="text-4xl font-extrabold text-foreground">
                {produk.rating.toFixed(1)}
                <span className="text-lg text-muted-foreground"> / 5</span>
              </p>
              <div className="mt-3 flex justify-center">
                <Rating value={produk.rating} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{produk.ulasan} ulasan</p>
            </div>
            <ul className="grid gap-4">
              {ulasanDummy.map((u) => (
                <li key={u.nama} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface font-bold text-primary">
                        {u.nama.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">{u.nama}</p>
                        <Rating value={u.rating} />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{u.tanggal}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{u.isi}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Produk terkait */}
        <section className="mt-16">
          <SectionHeader title="Produk Yang Mungkin Anda Suka" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {terkait.map((p) => (
              <ProductCard key={p.slug} produk={p} />
            ))}
          </div>
        </section>
      </section>
    </SiteLayout>
  );
}
