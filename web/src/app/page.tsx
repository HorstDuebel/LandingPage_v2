import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { BrandSignature } from "@/components/brand-signature";
import {
  ClickTrigger,
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { BuildingBlockFlipGrid } from "@/components/flip-offer-card";
import { JsonLd } from "@/components/json-ld";
import { SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cta, finalCta } from "@/lib/copy";
import { getHomeJsonLd } from "@/lib/home-schema";
import { journeySpecialFormat } from "@/lib/journey";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.fullTitle },
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.fullTitle,
    description: siteConfig.defaultDescription,
    url: "/",
  },
  twitter: {
    title: siteConfig.fullTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <JsonLd data={getHomeJsonLd()} />
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* 1. Hero */}
        <section className="hero-section hero-pattern section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <div>
              <h1 className="display-title">
                <span className="display-title-line">
                  KI im Unternehmen ohne KI-Kompetenz?
                </span>
                <span className="display-title-line">
                  Das ist ein Sicherheitsrisiko.
                </span>
                <span className="display-title-line display-title-line--gap">
                  Und verschenktes Potenzial.
                </span>
              </h1>

              <p className="section-lead mt-6">
                Ich baue mit Ihnen KI-Kompetenz auf und entwickle Ihre
                KI-Strategie. Sicher. Strategisch. Sinnvoll. Für KMU und
                Handwerksbetriebe.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <PrimaryCtaLink
                  className="btn-primary !w-auto sm:max-w-none"
                  trackLabel="hero"
                >
                  {cta.primary.hero}
                </PrimaryCtaLink>
              </div>

              <p className="microcopy mt-6 max-w-md">
                30 Minuten. Kostenlos. Klarheit für Ihren nächsten Schritt.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Angebot / Lösung */}
        <section id="angebot" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Das Angebot</SectionKicker>
              <h2 className="section-title section-title--two-lines">
                <span className="display-title-line">
                  KI-Strategie für Ihr Unternehmen.
                </span>
                <span className="display-title-line">
                  Sicher, strategisch, sinnvoll.
                </span>
              </h2>
            </AnimateIn>

            <div className="mt-10">
              <p className="body-text !max-w-none">
                Schatten-KI ist in vielen Unternehmen bereits ein Thema.
                Mitarbeitende nutzen mitunter private oder nicht klar geregelte
                KI-Tools, teils produktiv, teils mit Risiken.
                Datenschutzverstöße, Haftungslücken und falsche Ergebnisse
                entstehen selten aus böser Absicht. Sie entstehen dort, wo klare
                Regeln, Einweisung und ein passender Kompetenzaufbau fehlen. Der
                EU AI Act verlangt deshalb geeignete Maßnahmen zur KI-Kompetenz
                im Team. Entscheidend ist dabei nicht die Größe des Betriebs,
                sondern wie KI im Unternehmen eingesetzt wird. Das ist keine
                Bürokratie. Das ist Ihr Schutz.
              </p>
              <p className="body-text-note italic">
                Ich vermittle KI-Kompetenz und stelle Ihnen die Unterlagen
                bereit, mit denen Sie das Kompetenztraining nachvollziehbar
                dokumentieren können.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Orientierung */}
        <section
          id="so-arbeiten-wir"
          className="section-block bg-[var(--surface-lime)]"
        >
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>So arbeiten wir zusammen</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">
                  Die Bausteine, der rote Faden.
                </span>
              </h2>
            </AnimateIn>

            <BuildingBlockFlipGrid />

            <AnimateIn delay={200}>
              <article className="offer-special">
                <h3 className="offer-card__title">{journeySpecialFormat.title}</h3>
                <p className="offer-card__desc">
                  {journeySpecialFormat.description}
                </p>
              </article>
            </AnimateIn>

            <div className="mt-12">
              <PrimaryCtaLink
                className="btn-primary !w-auto sm:max-w-none"
                trackLabel="orientierung"
              >
                {cta.primary.hero}
              </PrimaryCtaLink>
            </div>
          </div>
        </section>

        {/* 4. Expertise */}
        <section
          id="ueber-mich"
          className="section-block bg-[var(--surface-warm)]"
        >
          <div className="page-container grid grid-cols-1 items-start gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <div className="relative mx-auto inline-block lg:mx-0">
              <div className="about-portrait">
                <Image
                  src="/frank.jpg"
                  alt="Frank Vullhorst"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="256px"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 z-10 h-14 w-14"
                  style={{
                    background: "var(--brand-orange)",
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
            </div>

            <div>
              <AnimateIn>
                <SectionKicker>Expertise</SectionKicker>
                <h2 className="sr-only">Expertise</h2>
              </AnimateIn>

              <div className="mt-6 space-y-6">
                <p className="body-text">
                  Ich bin Werkzeugmacher, Informatiker und habe über viele Jahre
                  in leitender Funktion bei 3D Systems gearbeitet. Mit mehr als
                  30 Jahren Erfahrung in Technik, Führung und internationalen
                  Projekten kenne ich Betriebe von innen, von der Werkstatt bis
                  ins Management.
                </p>
                <p className="body-text">
                  Das Besondere ist die Verbindung aus Praxis und Struktur.
                  Werkstattverständnis trifft auf die Logik eines Informatikers.
                  Der Kundendienst im 3D-Druck hat mich in hunderte Betriebe
                  geführt: Dental, Automobil, Landmaschinen, Medizintechnik,
                  Weißwaren, bis hin zu Kunst und Mode. Mein Arbeitsplatz war
                  dabei mal in den Chefetagen, mal in den Werkhallen und
                  Produktionen. Ich bewege mich gekonnt auf
                  Geschäftsleitungsebene und packe an der Werkbank geschickt mit
                  an. Beide Sprachen sind meine.
                </p>
              </div>

              <BrandSignature variant="section" className="mt-8" />
              <p className="body-text-note italic !mt-4">
                Klar in der Sache, mit einer leisen nordischen Note im Ton.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Vertrauen */}
        <section id="vertrauen" className="section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Vertrauen</SectionKicker>
              <h2 className="sr-only">Vertrauen</h2>
            </AnimateIn>

            <div className="mt-10 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-16">
              <div>
                <AnimateIn delay={0}>
                  <p className="border-b border-[var(--border)] py-4 copy-small text-[var(--text)]">
                    30 Jahre Praxis in Technik, Prozessen und Führung in
                    Industrie und Handwerk
                  </p>
                </AnimateIn>
                <AnimateIn delay={80}>
                  <p className="border-b border-[var(--border)] py-4 copy-small text-[var(--text)]">
                    Vom 3D-Druck zur KI: Neue Technologie in Betriebe zu bringen ist mein
                    Beruf.
                  </p>
                </AnimateIn>
                <AnimateIn delay={160}>
                  <div className="border-b border-[var(--border)] py-4">
                    <p className="trust-badge">
                      KI-Manager, Cert-IT, Nr. KI001220
                    </p>
                  </div>
                </AnimateIn>
                <AnimateIn delay={240}>
                  {siteConfig.linkedinUrl ? (
                    <a
                      href={siteConfig.linkedinUrl}
                      className="trust-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn-Profil
                    </a>
                  ) : (
                    <p className="border-b border-[var(--border)] py-4 copy-small text-[var(--muted)]">
                      LinkedIn-Profil
                    </p>
                  )}
                </AnimateIn>
              </div>

              <div className="mt-8 lg:mt-0">
                <AnimateIn delay={0}>
                  <blockquote className="quote-block testimonial-card">
                    <p>
                      Frank bringt Struktur und Klarheit in komplexe Themen und
                      schafft einen Raum, in dem man offen reden kann.
                    </p>
                    <cite>Führungskraft, Produktionsbetrieb</cite>
                  </blockquote>
                </AnimateIn>
                <AnimateIn delay={120}>
                  <blockquote className="quote-block testimonial-card">
                    <p>
                      Endlich jemand, der KI nicht als Hype verkauft, sondern
                      pragmatisch einordnet, mit echtem Blick auf Datenschutz und
                      Nutzen.
                    </p>
                    <cite>Inhaber*in, Handwerksbetrieb</cite>
                  </blockquote>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Nutzen / Vorteile */}
        <section id="nutzen" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Nutzen</SectionKicker>
              <h2 className="sr-only">Nutzen</h2>
              <p className="section-lead mt-6">
                Wenn Sie im Tagesgeschäft kaum Zeit haben und trotzdem nicht
                hinter der Entwicklung herlaufen wollen.
              </p>
            </AnimateIn>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
              {(
                [
                  {
                    title: "Zeitersparnis",
                    text: "Sie müssen sich nicht selbst durch Kurse und Videos arbeiten. Das setzt Ressourcen für Ihr Kerngeschäft frei.",
                  },
                  {
                    title: "Strategischer KI-Weitblick",
                    text: "Die KI-Entwicklung ist schneller als jede Brancheninnovation. Ich ordne für Sie ein, was zählt und was Sie ignorieren können.",
                  },
                  {
                    title: "Branchenwissen",
                    text: "Sie müssen mir Ihr Geschäft nicht lange erklären. Ich spreche die Sprache von Werkstatt und Management.",
                  },
                ] as const
              ).map((item, i) => (
                <AnimateIn key={item.title} delay={i * 60}>
                  <article>
                    <h3 className="offer-card__title">{item.title}</h3>
                    <p className="offer-card__desc">{item.text}</p>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Abschluss-CTA */}
        <section id="termin" className="final-cta section-block">
          <div className="page-container">
            <AnimateIn>
              <h2 className="section-title">
                <span className="display-title-line">{finalCta.headline}</span>
              </h2>
              <p className="section-lead mt-6">{finalCta.body}</p>
            </AnimateIn>

            <PrimaryCtaLink
              className="btn-primary mt-8 !w-auto"
              trackLabel="final"
            >
              {cta.primary.final}
            </PrimaryCtaLink>
            <ClickTrigger className="microcopy mt-4">
              {finalCta.microcopy}
            </ClickTrigger>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
