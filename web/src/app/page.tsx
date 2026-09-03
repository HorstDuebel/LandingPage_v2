import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { BrandSignature } from "@/components/brand-signature";
import {
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { BuildingBlockFlipGrid } from "@/components/flip-offer-card";
import { JsonLd } from "@/components/json-ld";
import { SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cta, finalCta } from "@/lib/copy";
import { getHomeJsonLd } from "@/lib/home-schema";
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

      <main id="top" className="landing-page flex-1">
        {/* 1. Hero */}
        <section className="hero-section hero-pattern section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <div>
              <h1 className="display-title">
                <span className="display-title-line">
                  Wer sein Unternehmen voranbringt,
                </span>
                <span className="display-title-line">geht Risiken ein.</span>
                <span className="display-title-line display-title-line--gap">
                  Bei KI sollten Sie wissen, welche.
                </span>
              </h1>

              <div className="hero-lead-cta mt-6">
                <p className="section-lead hero-lead-cta__text !max-w-none">
                  Fortschritt entsteht, wenn Risiken erkannt, abgewogen und
                  bewusst eingegangen werden. Bei KI gilt nichts anderes. Ich
                  begleite Sie bei Ihrer{" "}
                  <span className="whitespace-nowrap">KI-Einführung</span>{" "}
                  dabei: Chancen nutzen, mutig vorangehen und an kritischen
                  Stellen bewusst entscheiden. So entstehen KI-Kompetenzen und
                  eine{" "}
                  <span className="whitespace-nowrap">KI-Strategie</span>, die
                  im Unternehmen verstanden und von der Belegschaft mitgetragen
                  wird.
                </p>

                <PrimaryCtaLink
                  className="btn-primary hero-lead-cta__button mt-10 w-full"
                  trackLabel="hero"
                >
                  {cta.primary.hero}
                </PrimaryCtaLink>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Angebot / Lösung */}
        <section id="angebot" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Das Angebot</SectionKicker>
              <h2 className="display-title">
                <span className="display-title-line">
                  KI-Strategie für Ihr Unternehmen.
                </span>
                <span className="display-title-line display-title-tagline mt-[0.4em]">
                  <span
                    className="display-title-tagline__word display-title-tagline__word--taupe"
                    style={{ color: "var(--brand-taupe)" }}
                  >
                    sicher
                  </span>
                  <span
                    className="display-title-tagline__word display-title-tagline__word--teal"
                    style={{ color: "var(--brand-teal)" }}
                  >
                    strategisch
                  </span>
                  <span
                    className="display-title-tagline__word display-title-tagline__word--orange"
                    style={{ color: "var(--brand-orange)" }}
                  >
                    sinnvoll
                  </span>
                </span>
              </h2>
            </AnimateIn>

            <div className="mt-10 space-y-5">
              <p className="body-text !max-w-none">
                KI-Einführung beginnt bei den Menschen, die damit arbeiten. In
                vielen Teams ist der Antrieb längst da: Mitarbeitende probieren
                aus, suchen bessere, schnellere Wege und entdecken sinnvolle
                Einsatzmöglichkeiten.
              </p>
              <div className="body-text !max-w-none space-y-3">
                <p>
                  Ich greife diesen Antrieb auf und gebe ihm einen klaren Rahmen:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Wo schafft KI echten Nutzen?</li>
                  <li>Welche Kompetenzen, Regeln und Grenzen braucht es?</li>
                </ul>
                <p>
                  So wird aus einzelnen Versuchen ein sicherer, steuerbarer{" "}
                  <span className="whitespace-nowrap">KI-Einsatz</span>.
                  Schatten-KI wird dabei sichtbar und steuerbar. Nicht durch
                  Verbote, sondern durch Klarheit und Kompetenz. Gleichzeitig
                  erhalten Sie eine nachvollziehbare Dokumentation Ihrer
                  Maßnahmen zur{" "}
                  <span className="whitespace-nowrap">KI-Kompetenz</span>, auch
                  mit Blick auf den EU AI Act.
                </p>
              </div>
              <p className="body-text !max-w-none">
                Das ist nicht nur Compliance. Das ist Befähigung.
              </p>
            </div>
            <p className="body-text-note">
              Ich vermittle KI-Kompetenz und stelle Ihnen die Unterlagen bereit,
              mit denen Sie das Kompetenztraining nachvollziehbar dokumentieren
              können.
            </p>
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
                  Erst verstehen: Dann sinnvoll umsetzen.
                </span>
              </h2>
            </AnimateIn>

            <BuildingBlockFlipGrid />

            <div className="mt-12">
              <PrimaryCtaLink
                className="btn-primary hero-lead-cta__button w-full"
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
          <div className="page-container about-layout">
            <div className="about-portrait">
              <Image
                src="/frank.png"
                alt="Frank Vullhorst"
                width={1254}
                height={1254}
                className="h-auto w-full"
                sizes="(min-width: 900px) 22.25rem, (min-width: 700px) 38vw, 70vw"
                priority
              />
            </div>

            <div className="about-copy">
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
              <p className="section-lead mt-6">
                {finalCta.body}
                <br />
                {finalCta.bodyLine2}
              </p>
            </AnimateIn>

            <PrimaryCtaLink
              className="btn-primary mt-8 !w-auto"
              trackLabel="final"
            >
              {cta.primary.final}
            </PrimaryCtaLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
