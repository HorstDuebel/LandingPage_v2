import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/cta-buttons";
import { SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { kiSchulungContent, kiSchulungMeta } from "@/lib/ki-schulung";

const EU_REG_LABEL = "Verordnung (EU) 2026/1744";
const EU_REG_HREF =
  "https://eur-lex.europa.eu/eli/reg/2026/1744/oj?locale=de";

function renderParagraphLines(paragraph: string): ReactNode {
  return paragraph.split("\n").map((line, lineIndex) => {
    const content = line.includes(EU_REG_LABEL)
      ? (() => {
          const [before, after] = line.split(EU_REG_LABEL);
          return (
            <>
              {before}
              <a
                href={EU_REG_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--text)] underline underline-offset-2 hover:text-[var(--brand-orange)]"
              >
                {EU_REG_LABEL}
              </a>
              {after}
            </>
          );
        })()
      : line;

    return (
      <span key={`${paragraph}-${lineIndex}`}>
        {lineIndex > 0 ? <br /> : null}
        {content}
      </span>
    );
  });
}

export const metadata: Metadata = {
  title: { absolute: kiSchulungMeta.title },
  description: kiSchulungMeta.description,
  alternates: { canonical: kiSchulungMeta.path },
  openGraph: {
    title: kiSchulungMeta.title,
    description: kiSchulungMeta.description,
    url: kiSchulungMeta.path,
  },
};

const sectionSurfaces = [
  "bg-[var(--surface-muted)]",
  "bg-[var(--surface-lime)]",
  "bg-[var(--surface-teal)]",
  "bg-[var(--surface-muted)]",
  "bg-[var(--surface-lime)]",
  "bg-[var(--surface-teal)]",
  "bg-[var(--surface-muted)]",
  "bg-[var(--surface-lime)]",
] as const;

export default function KiSchulungPage() {
  const { kicker, headline, intro, sections, disclaimer } = kiSchulungContent;

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="hero-section hero-pattern section-block bg-[var(--surface-lime)] pt-28 md:pt-32">
          <div className="page-container max-w-3xl">
            <Link href="/" className="nav-link !text-sm">
              ← Zurück zur Startseite
            </Link>

            <div className="mt-8">
              <SectionKicker>{kicker}</SectionKicker>
            </div>
            <h1 className="display-title mt-2">
              {headline.map((line) => (
                <span key={line} className="display-title-line">
                  {line}
                </span>
              ))}
            </h1>

            <p className="body-text mt-8 !max-w-none">{intro}</p>
          </div>
        </section>

        {sections.map((section, index) => {
          const isLast = index === sections.length - 1;

          return (
            <section
              key={section.heading}
              className={`section-block ${sectionSurfaces[index % sectionSurfaces.length]}`}
            >
              <div className="page-container max-w-3xl">
                <h2 className="section-title !text-[clamp(1.35rem,3vw,1.75rem)]">
                  {section.heading}
                </h2>

                {"paragraphs" in section && section.paragraphs
                  ? section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="body-text mt-4 !max-w-none"
                      >
                        {renderParagraphLines(paragraph)}
                      </p>
                    ))
                  : null}

                {"bullets" in section && section.bullets ? (
                  <ul className="body-text mt-4 list-disc space-y-1 pl-6 !max-w-none">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {"afterBullets" in section && section.afterBullets ? (
                  <p className="body-text mt-4 !max-w-none">
                    {section.afterBullets}
                  </p>
                ) : null}

                {"steps" in section && section.steps ? (
                  <ol className="body-text mt-4 list-decimal space-y-3 pl-6 !max-w-none">
                    {section.steps.map((step) => (
                      <li key={step.lead}>
                        <strong className="font-semibold text-[var(--text)]">
                          {step.lead}
                        </strong>{" "}
                        {step.body}
                      </li>
                    ))}
                  </ol>
                ) : null}

                {isLast ? (
                  <>
                    <div className="mt-10">
                      <PrimaryCtaLink trackLabel="ki_schulung_cta">
                        Kostenfreies Orientierungsgespräch
                        {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}[ 30 Minuten ]
                      </PrimaryCtaLink>
                    </div>
                    <p className="microcopy mt-10">{disclaimer}</p>
                  </>
                ) : null}
              </div>
            </section>
          );
        })}
      </main>

      <SiteFooter />
    </div>
  );
}
