import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

const menu = [
  { label: "Beranda", to: "/" as const },
  { label: "Produk", to: "/produk" as const },
  { label: "Tentang Kami", to: "/" as const, hash: "tentang" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [cari, setCari] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-soft backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-sm font-black text-primary-foreground">
            D
          </span>
          <span className="text-sm font-extrabold leading-none tracking-tight text-foreground sm:text-base">
            DONS <span className="text-primary">BANYAK UANG</span>
          </span>
        </Link>

        <ul className="ml-6 hidden items-center gap-1 md:flex">
          {menu.map((m) => (
            <li key={m.label}>
              <Link
                to={m.to}
                {...(m.hash ? { hash: m.hash } : {})}
                activeOptions={{ exact: m.to === "/", includeHash: false }}
                activeProps={{ className: "text-primary bg-surface" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cari"
            onClick={() => setCari((v) => !v)}
            className="text-muted-foreground hover:text-primary"
          >
            <Search />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Keranjang"
            className="relative text-muted-foreground hover:text-primary"
          >
            <ShoppingCart />
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </Button>
          <Button variant="default" size="sm" className="hidden sm:inline-flex">
            <User />
            Masuk
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {cari && (
        <div className="border-t border-border bg-background px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SearchBar />
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {menu.map((m) => (
              <li key={m.label}>
                <Link
                  to={m.to}
                  {...(m.hash ? { hash: m.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-primary"
                >
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="mt-2 w-full sm:hidden">
            <User />
            Masuk
          </Button>
        </div>
      )}
    </header>
  );
}
