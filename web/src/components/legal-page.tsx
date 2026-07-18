import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export function LegalPage({
  title,
  kicker = "Rechtliches:",
  children,
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface)] pt-28 md:pt-32">
        <div className="page-container max-w-3xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zur Startseite
          </Link>
          <p className="section-kicker mt-8">{kicker}</p>
          <h1 className="section-title mt-2">{title}</h1>
          <div className="legal-content mt-10 border-t border-[var(--border)] pt-8">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <h2 className="legal-section__title">{title}</h2>
      <div className="legal-section__body">{children}</div>
    </section>
  );
}

export function LegalFootnote({ children }: { children: ReactNode }) {
  return <p className="legal-footnote">{children}</p>;
}
