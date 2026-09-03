import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Download, Wallet, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/Rating";
import { kategoriList, produkTerlaris, formatRupiah } from "@/data/products";
import heroWebsite from "@/assets/cat-website.jpg";
import heroEbook from "@/assets/cat-ebook.jpg";
import heroCanva from "@/assets/cat-canva.jpg";
import heroDesain from "@/assets/cat-desain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DONS BANYAK UANG — Toko Produk Digital Siap Pakai" },
      {
        name: "description",
        content:
          "Temukan template website, template Canva, ebook, template CV, dan desain grafis siap pakai untuk bisnis dan kreativitas Anda.",
      },
      { property: "og:title", content: "DONS BANYAK UANG — Toko Produk Digital Siap Pakai" },
      {
        property: "og:description",
        content: "Produk digital berkualitas untuk membantu bisnis, pekerjaan, dan kreativitas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const keunggulan = [
  {
    icon: BadgeCheck,
    judul: "Produk Berkualitas",
    teks: "Produk digital dengan desain profesional.",
  },
  {
    icon: Wallet,
    judul: "Harga Terjangkau",
    teks: "Produk berkualitas dengan harga yang bersahabat.",
  },
  { icon: Download, judul: "Download Instan", teks: "Dapatkan produk dengan cepat setelah pembelian." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
              <Sparkles size={14} />
              Produk digital siap pakai
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Produk Digital
              <br />
              Untuk Membantu Anda
              <br />
              <span className="text-primary">Banyak Uang</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Temukan berbagai produk digital siap pakai untuk membantu bisnis, pekerjaan, dan
              kreativitas Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/produk">
                  Jelajahi Produk
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/" hash="terlaris">
                  Lihat Produk Terlaris
                </Link>
              </Button>
            </div>
            <dl className="mt-10 flex flex-wrap gap-8">
              {[
                ["120+", "Produk Digital"],
                ["5.000+", "Pelanggan"],
                ["4.9", "Rating Rata-rata"],
              ].map(([a, b]) => (
                <div key={b}>
                  <dt className="text-2xl font-extrabold text-foreground">{a}</dt>
                  <dd className="text-sm text-muted-foreground">{b}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mockup visual */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <MockCard label="Template Website" gambar={heroWebsite} eager />
              <MockCard label="Ebook" gambar={heroEbook} />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <MockCard label="Template Canva" gambar={heroCanva} />
              <MockCard label="Desain Grafis" gambar={heroDesain} />
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          align="center"
          title="Jelajahi Kategori"
          description="Temukan produk digital sesuai kebutuhan Anda."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kategoriList.map((k) => (
            <CategoryCard key={k.nama} nama={k.nama} deskripsi={k.deskripsi} gambar={k.gambar} />
          ))}
        </div>
      </section>

      {/* PRODUK TERLARIS */}
      <section id="terlaris" className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Produk Terlaris"
            description="Produk paling banyak dibeli oleh pelanggan kami."
            action={
              <Button asChild variant="outline">
                <Link to="/produk">
                  Lihat Semua Produk
                  <ArrowRight />
                </Link>
              </Button>
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {produkTerlaris.map((p) => (
              <ProductCard key={p.slug} produk={p} />
            ))}
          </div>
        </div>
      </section>

      {/* KENAPA */}
      <section id="tentang" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          align="center"
          title="Kenapa Belanja di DONS BANYAK UANG?"
          description="Kami fokus pada kualitas, kemudahan, dan kepuasan pelanggan."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {keunggulan.map((k) => (
            <div
              key={k.judul}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary">
                <k.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{k.judul}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{k.teks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-primary px-6 py-14 text-center shadow-card">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Siap Menemukan Produk Digital yang Tepat?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Jelajahi koleksi produk digital pilihan kami.
          </p>
          <Button asChild size="lg" className="mt-8 bg-background text-primary hover:bg-background/90">
            <Link to="/produk">
              Jelajahi Produk
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}

function MockCard({
  label,
  gambar,
  eager,
}: {
  label: string;
  gambar: string;
  eager?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card transition-transform duration-300 hover:-translate-y-1">
      <img
        src={gambar}
        alt={label}
        width={800}
        height={600}
        loading={eager ? "eager" : "lazy"}
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />
      <div className="flex items-center justify-between px-1 pb-1 pt-3">
        <div>
          <p className="text-xs font-bold text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{formatRupiah(79000)}</p>
        </div>
        <Rating value={4.9} />
      </div>
    </div>
  );
}
