import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CategoryCard({
  nama,
  deskripsi,
  gambar,
}: {
  nama: string;
  deskripsi: string;
  gambar: string;
}) {
  return (
    <Link
      to="/produk"
      search={{ kategori: nama }}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
    >
      <img
        src={gambar}
        alt={nama}
        loading="lazy"
        width={800}
        height={600}
        className="h-16 w-16 shrink-0 rounded-xl border border-border object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-bold text-foreground group-hover:text-primary">{nama}</h3>
        <p className="truncate text-sm text-muted-foreground">{deskripsi}</p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
      />
    </Link>
  );
}
