import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-sm font-black text-primary-foreground">
                D
              </span>
              <span className="font-extrabold text-foreground">
                DONS <span className="text-primary">BANYAK UANG</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Toko produk digital untuk membantu Anda berkarya, bekerja, dan berkembang.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-bold text-foreground">Navigasi</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/produk" className="transition-colors hover:text-primary">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/" hash="tentang" className="transition-colors hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 DONS BANYAK UANG. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
