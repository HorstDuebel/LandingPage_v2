import Link from "next/link";
import type { ReactNode } from "react";

export function TopBar() {
  return (
    <div className="top-bar">
      <div className="nm-container flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm">
        <span className="font-[var(--font-subheading)] font-bold tracking-wide text-[var(--text)]">
          Frank Vullhorst · KI-Sparring
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:+491726689960"
            className="text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            +49 (0)172 6689960
          </a>
          <a
            href="mailto:Frank.Vullhorst@t-online.de"
            className="text-[var(--muted)] transition hover:text-[var(--text)]"
          >
            Frank.Vullhorst@t-online.de
          </a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-30">
      <div className="nm-container flex flex-wrap items-center justify-between gap-6 py-5">
        <Link href="/#top" className="site-logo group">
          <span className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-[var(--text)] sm:text-2xl">
            Frank Vullhorst
            <span className="text-[var(--brand-orange)]">.</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
          {[
            { href: "/#fuer-wen", label: "Für wen" },
            { href: "/#angebot", label: "Angebot" },
            { href: "/#methode", label: "Methode" },
            { href: "/#faq", label: "FAQ" },
            { href: "/termin", label: "Termin" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="nm-container py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-[var(--font-heading)] text-lg font-bold text-[var(--text)]">
              Frank Vullhorst
            </div>
            <div className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Claudiusweg 9
              <br />
              64380 Roßdorf
              <br />
              <a
                className="font-medium text-[var(--text)] hover:underline"
                href="mailto:Frank.Vullhorst@t-online.de"
              >
                Frank.Vullhorst@t-online.de
              </a>
              <br />
              <a
                className="font-medium text-[var(--text)] hover:underline"
                href="tel:+491726689960"
              >
                +49 (0)172 6689960
              </a>
            </div>
          </div>

          <div>
            <div className="section-kicker mb-3">Rechtliches</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="nav-link !text-sm" href="/impressum">
                Impressum
              </Link>
              <Link className="nav-link !text-sm" href="/datenschutz">
                Datenschutz
              </Link>
            </div>
          </div>

          <div>
            <div className="section-kicker mb-3">Kontakt</div>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Rhein-Main · KMU & Handwerk · KI verständlich, sicher,
              strategisch.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Frank Vullhorst. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  kicker,
  title,
  children,
  centered = false,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-3">{title}</h2>
      <p className="section-lead mt-5">{children}</p>
    </div>
  );
}
