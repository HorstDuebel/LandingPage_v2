import Link from "next/link";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container site-header-inner">
        <Link href="/#top" className="nav-link !font-[var(--font-heading)] !text-lg !text-[var(--text)]">
          Frank Vullhorst
        </Link>
        <nav className="flex flex-wrap items-center gap-5 sm:gap-7">
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
      <div className="page-container">
        <p className="section-kicker">Ich bin da, in Roßdorf und darüber hinaus:</p>
        <h2 className="contact-hero mt-2">
          Rufen Sie mich an oder schreiben Sie mir direkt.
        </h2>
        <a href="tel:+491726689960" className="contact-link">
          +49 (0)172 6689960
        </a>
        <a
          href="mailto:Frank.Vullhorst@t-online.de"
          className="contact-link !text-[clamp(1rem,2.5vw,1.375rem)]"
        >
          Frank.Vullhorst@t-online.de
        </a>

        <div className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <Link href="/impressum" className="nav-link !text-sm">
            Impressum
          </Link>
          <Link href="/datenschutz" className="nav-link !text-sm">
            Datenschutz
          </Link>
          <span className="ml-auto text-xs">
            © {new Date().getFullYear()} Frank Vullhorst · KI-Sparring
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  kicker,
  title,
  titleLine2,
  children,
  centered = false,
}: {
  kicker: string;
  title: ReactNode;
  titleLine2?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`prose-width ${centered ? "mx-auto text-center" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">
        <span className="display-title-line">{title}</span>
        {titleLine2 ? (
          <span className="display-title-line">{titleLine2}</span>
        ) : null}
      </h2>
      {children ? <p className="section-lead mt-6">{children}</p> : null}
    </div>
  );
}
