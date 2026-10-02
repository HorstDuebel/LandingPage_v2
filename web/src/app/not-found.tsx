import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: { absolute: "Seite nicht gefunden | Frank Vullhorst" },
  description: "Diese Seite gibt es nicht.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface-lime)] pt-28 md:pt-32">
        <div className="page-container max-w-3xl">
          <h1 className="display-title">
            <span className="display-title-line">Diese Seite gibt es nicht.</span>
          </h1>
          <p className="body-text mt-8 !max-w-none">
            Vielleicht hilft Ihnen einer dieser Wege weiter:
          </p>
          <ul className="body-text mt-6 list-disc space-y-2 pl-6 !max-w-none">
            <li>
              <Link
                href="/"
                className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                href="/ki-schulung/"
                className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
              >
                KI-Schulung für Mitarbeiter
              </Link>
            </li>
            <li>
              <Link
                href="/faq/"
                className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
              >
                Fragen und Antworten
              </Link>
            </li>
            <li>
              <Link
                href="/termin/"
                className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
              >
                Orientierungsgespräch
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
