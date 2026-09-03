import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { produkList, kategoriList } from "@/data/products";
import { cn } from "@/lib/utils";

type Search = { kategori?: string };

export const Route = createFileRoute("/produk/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    kategori: typeof search.kategori === "string" ? search.kategori : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Semua Produk Digital — DONS BANYAK UANG" },
      {
        name: "description",
        content:
          "Katalog lengkap produk digital: template website, template Canva, ebook, template CV, desain grafis, dan social media.",
      },
      { property: "og:title", content: "Semua Produk Digital — DONS BANYAK UANG" },
      {
        property: "og:description",
        content: "Temukan berbagai produk digital pilihan untuk kebutuhan Anda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProdukPage,
});

const urutanOptions = [
  { value: "terbaru", label: "Terbaru" },
  { value: "termurah", label: "Harga Terendah" },
  { value: "termahal", label: "Harga Tertinggi" },
  { value: "rating", label: "Rating Tertinggi" },
];

function ProdukPage() {
  const { kategori } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");
  const [urutan, setUrutan] = useState("terbaru");

  const aktif = kategori ?? "Semua";

  const hasil = useMemo(() => {
    let list = produkList.filter(
      (p) =>
        (aktif === "Semua" || p.kategori === aktif) &&
        p.nama.toLowerCase().includes(query.trim().toLowerCase()),
    );
    list = [...list];
    if (urutan === "termurah") list.sort((a, b) => a.harga - b.harga);
    if (urutan === "termahal") list.sort((a, b) => b.harga - a.harga);
    if (urutan === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [aktif, query, urutan]);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Semua Produk</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Temukan berbagai produk digital pilihan untuk kebutuhan Anda.
          </p>
          <div className="mx-auto mt-8 max-w-xl">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex flex-wrap gap-2 px-1">
            {["Semua", ...kategoriList.map((k) => k.nama)].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() =>
                  navigate({ search: { kategori: k === "Semua" ? undefined : k } })
                }
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  aktif === k
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {k}
              </button>
            ))}
          </div>

          <label className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
            Urutkan:
            <select
              value={urutan}
              onChange={(e) => setUrutan(e.target.value)}
              className="h-10 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary"
            >
              {urutanOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Menampilkan <span className="font-semibold text-foreground">{hasil.length}</span> produk
        </p>

        {hasil.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="font-semibold text-foreground">Produk tidak ditemukan</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hasil.map((p) => (
              <ProductCard key={p.slug} produk={p} />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
