import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function ImpressumPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface)] pt-28 md:pt-32">
        <div className="page-container max-w-3xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zur Startseite
          </Link>
          <p className="section-kicker mt-8">Rechtliches:</p>
          <h1 className="section-title mt-2">Impressum</h1>
          <p className="section-lead mt-4">Angaben gemäß § 5 TMG</p>

          <div className="mt-10 border-t border-[var(--border)] pt-8">
            <h2 className="offer-card__title">Frank Vullhorst</h2>
            <p className="body-text-muted mt-3">
              Claudiusweg 9
              <br />
              64380 Roßdorf
              <br />
              Deutschland
            </p>
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

          <p className="microcopy mt-10">
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
