import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LegalPage } from "@/components/legal-page";
import { faqEntries } from "@/lib/faq";
import { getFaqJsonLd } from "@/lib/home-schema";

export const metadata: Metadata = {
  title: "Fragen und Antworten",
  description:
    "Antworten zu Erstgespräch, AI-ISCA Audit, Prozess-Erfassung, Datenschutz und EU AI Act sowie zum Claude Cowork Workshop.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Fragen und Antworten | Frank Vullhorst",
    description:
      "Antworten zu Erstgespräch, AI-ISCA Audit, Prozess-Erfassung, Datenschutz und EU AI Act sowie zum Claude Cowork Workshop.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />
      <LegalPage title="Fragen und Antworten" kicker="FAQ:">
        <div>
          {faqEntries.map((item) => (
            <details key={item.question} className="faq-item group">
              <summary>
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-[var(--brand-dark)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 copy-small font-light leading-relaxed text-[var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </LegalPage>
    </>
  );
}
