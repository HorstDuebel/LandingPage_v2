import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryCtaLink } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { LegalPage } from "@/components/legal-page";
import { faqBetriebEntries, faqEntries, type FaqEntry } from "@/lib/faq";
import { getFaqJsonLd } from "@/lib/home-schema";

export const metadata: Metadata = {
  title: {
    absolute: "Fragen zu KI-Beratung und KI-Schulung | Frank Vullhorst",
  },
  description:
    "Antworten auf häufige Fragen zu KI im Betrieb: Schulungspflicht, Kosten, Förderung und wie Sie KI im Unternehmen einführen. KI-Beratung aus Darmstadt.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Fragen zu KI-Beratung und KI-Schulung | Frank Vullhorst",
    description:
      "Antworten auf häufige Fragen zu KI im Betrieb: Schulungspflicht, Kosten, Förderung und wie Sie KI im Unternehmen einführen. KI-Beratung aus Darmstadt.",
    url: "/faq",
    images: [{ url: "/og-share.jpg", width: 1200, height: 630 }],
  },
};

function FaqAnswer({ item }: { item: FaqEntry }) {
  if (item.linkLabel && item.linkHref && item.answer.includes(item.linkLabel)) {
    const [before, after] = item.answer.split(item.linkLabel);
    return (
      <p className="mt-3 copy-small font-light leading-relaxed text-[var(--muted)]">
        {before}
        <Link
          href={item.linkHref}
          className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
        >
          {item.linkLabel}
        </Link>
        {after}
      </p>
    );
  }

  return (
    <p className="mt-3 copy-small font-light leading-relaxed text-[var(--muted)]">
      {item.answer}
    </p>
  );
}

function FaqList({ entries }: { entries: readonly FaqEntry[] }) {
  return (
    <>
      {entries.map((item) => (
        <details key={item.question} className="faq-item group">
          <summary>
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-[var(--brand-dark)] transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <FaqAnswer item={item} />
        </details>
      ))}
    </>
  );
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />
      <LegalPage title="Fragen und Antworten" kicker="FAQ:">
        <div>
          <h2 className="section-title !text-[clamp(1.25rem,2.8vw,1.5rem)] !mb-4">
            Zur Zusammenarbeit
          </h2>
          <FaqList entries={faqEntries} />

          <h2 className="section-title mt-12 !text-[clamp(1.25rem,2.8vw,1.5rem)] !mb-4">
            Fragen zu KI im Betrieb
          </h2>
          <FaqList entries={faqBetriebEntries} />

          <div className="mt-10">
            <PrimaryCtaLink trackLabel="faq_cta">
              Kostenfreies Orientierungsgespräch
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}[ 30 Minuten ]
            </PrimaryCtaLink>
          </div>

          <p className="mt-10 copy-small">
            <Link
              href="/ki-schulung"
              className="font-medium text-[var(--text)] underline hover:text-[var(--brand-orange)]"
            >
              KI-Schulung für Mitarbeiter
            </Link>
          </p>
        </div>
      </LegalPage>
    </>
  );
}
