import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/Rating";
import { formatRupiah, type Produk } from "@/data/products";

export function ProductCard({ produk }: { produk: Produk }) {
  const diskon = produk.hargaCoret
    ? Math.round(((produk.hargaCoret - produk.harga) / produk.hargaCoret) * 100)
    : 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
      <Link
        to="/produk/$slug"
        params={{ slug: produk.slug }}
        className="relative block overflow-hidden bg-surface"
      >
        <img
          src={produk.gambar}
          alt={produk.nama}
          loading="lazy"
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold text-primary shadow-soft">
          {produk.kategori}
        </span>
        {diskon > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
            -{diskon}%
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link to="/produk/$slug" params={{ slug: produk.slug }}>
          <h3 className="line-clamp-2 font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
            {produk.nama}
          </h3>
        </Link>
        <Rating value={produk.rating} count={produk.ulasan} />
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-foreground">
            {formatRupiah(produk.harga)}
          </span>
          {produk.hargaCoret && (
            <span className="text-sm text-muted-foreground line-through">
              {formatRupiah(produk.hargaCoret)}
            </span>
          )}
        </div>
        <Button asChild variant="soft" size="sm" className="w-full">
          <Link to="/produk/$slug" params={{ slug: produk.slug }}>
            Lihat Produk
          </Link>
        </Button>
      </div>
    </article>
  );
}
