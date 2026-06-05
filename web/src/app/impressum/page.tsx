import Link from "next/link";
import { SiteFooter, SiteHeader, TopBar } from "@/components/site-chrome";

export default function ImpressumPage() {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface)]">
        <div className="nm-container max-w-3xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zur Startseite
          </Link>
          <p className="section-kicker mt-8">Rechtliches</p>
          <h1 className="section-title mt-3">Impressum</h1>
          <p className="section-lead mt-4">Angaben gemäß § 5 TMG</p>

          <div className="nm-card mt-8">
            <div className="nm-card-title">Frank Vullhorst</div>
            <div className="nm-card-text !mt-3">
              Claudiusweg 9
              <br />
              64380 Roßdorf
              <br />
              Deutschland
            </div>
            <div className="mt-6 text-sm leading-7 text-[var(--muted)]">
              <div className="font-bold text-[var(--text)]">Kontakt</div>
              <a
                className="font-medium text-[var(--text)] hover:text-[var(--brand-orange)]"
                href="mailto:Frank.Vullhorst@t-online.de"
              >
                Frank.Vullhorst@t-online.de
              </a>
              <br />
              <a
                className="font-medium text-[var(--text)] hover:text-[var(--brand-orange)]"
                href="tel:+491726689960"
              >
                +49 (0)172 6689960
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm font-light leading-relaxed text-[var(--muted)]">
            Hinweis: Dieses Impressum ist eine schlanke Basisseite für den
            Projektstart. Falls weitere rechtliche Angaben benötigt werden,
            können sie ergänzt werden.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
