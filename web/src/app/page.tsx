import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/animate-in";
import { BrandSignature } from "@/components/brand-signature";
import {
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { BuildingBlockFlipGrid } from "@/components/flip-offer-card";
import { JsonLd } from "@/components/json-ld";
import { SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { finalCta } from "@/lib/copy";
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
    images: [{ url: "/og-share.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullTitle,
    description: siteConfig.defaultDescription,
    images: ["/og-share.jpg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <JsonLd data={getHomeJsonLd()} />
      <SiteHeader />

      <main id="top" className="landing-page flex-1">
        {/* 1. Header / Hero */}
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
                <div className="section-lead hero-lead-cta__text !max-w-none space-y-4">
                  <p>
                    Fortschritt entsteht nicht dadurch, Risiken zu vermeiden. Er
                    entsteht dadurch, sie zu verstehen und bewusst zu
                    entscheiden, welche Sie eingehen. Bei KI gilt nichts anderes.
                  </p>
                  <p>
                    Genau dabei arbeite ich mit Ihnen: Chancen nutzen, an den
                    richtigen Stellen genau hinsehen, klar entscheiden. So wächst
                    KI-Kompetenz in Ihrem Team, und es entsteht eine Strategie,
                    die Ihr Betrieb versteht, trägt und sich dann ohne mich
                    weiterentwickelt.
                  </p>
                </div>

                <PrimaryCtaLink
                  className="btn-primary hero-lead-cta__button mt-10 w-full"
                  trackLabel="hero"
                >
                  Kostenfreies Orientierungsgespräch{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}[ 30 Minuten ]
                </PrimaryCtaLink>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Nutzen */}
        <section id="nutzen" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Nutzen</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">
                  Was Sie davon haben.
                </span>
              </h2>
              <p className="section-lead mt-6">
                Wenn Sie im Tagesgeschäft kaum Zeit haben und trotzdem nicht
                hinter der Entwicklung herlaufen wollen.
              </p>
            </AnimateIn>

            <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
              {(
                [
                  {
                    title: "Strategischer Weitblick",
                    text: "Die KI-Entwicklung ist schneller als jede Brancheninnovation. Ich ordne für Sie ein, was zählt und was Sie ignorieren können.",
                  },
                  {
                    title: "Branchenwissen",
                    text: "Sie müssen mir Ihr Geschäft nicht lange erklären. Ich spreche die Sprache von Werkstatt und Management.",
                  },
                  {
                    title: "Freiraum für Ihr Kerngeschäft",
                    text: "Weil Sie sich nicht selbst durch Kurse und Videos arbeiten müssen, bleibt Ihre Zeit für das, was den Betrieb wirklich voranbringt.",
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

        {/* 3. Das Angebot */}
        <section id="angebot" className="section-block bg-[var(--surface-lime)]">
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
                  So wird aus einzelnen Versuchen ein sicherer, geplanter
                  Einsatz. Auch Schatten-KI kommt ans Licht: nicht durch Verbote,
                  sondern durch Klarheit und{" "}
                  <Link
                    href="/ki-schulung/"
                    className="font-medium text-[var(--text)] hover:text-[var(--brand-orange)]"
                  >
                    Kompetenz
                  </Link>
                  . Ihre Maßnahmen sind dabei nachvollziehbar dokumentiert, auch
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

        {/* 4. Expertise */}
        <section
          id="ueber-mich"
          className="section-block bg-[var(--surface-teal)]"
        >
          <div className="page-container about-layout">
            <div className="about-portrait">
              <Image
                src="/frank.webp"
                alt="Frank Vullhorst, KI-Beratung in Darmstadt"
                width={1200}
                height={1200}
                className="h-auto w-full"
                sizes="(min-width: 900px) 22.25rem, (min-width: 700px) 38vw, 70vw"
                priority
              />
            </div>

            <div className="about-copy">
              <AnimateIn>
                <SectionKicker>Expertise</SectionKicker>
                <h2 className="section-title">
                  <span className="display-title-line">Wofür ich brenne.</span>
                </h2>
              </AnimateIn>

              <p className="body-text mt-6">
                Neue Technik in Betriebe bringen, das ist seit 1994 der rote
                Faden. Damals war es der 3D-Druck: Systeme, die kaum jemand
                verstand und die trotzdem zuverlässig funktionieren mussten.
                Heute ist es KI. Das Prinzip und die Herausforderungen sind
                ähnlich geblieben.
              </p>
            </div>

            <div className="about-continuation">
              <div className="space-y-6">
                <p className="body-text about-continuation__text">
                  <strong className="font-semibold text-[var(--text)]">
                    Sie bleiben Chef der Technik und werden nicht zum Bediener der
                    Technik.
                  </strong>
                </p>
                <p className="body-text about-continuation__text">
                  Werkzeugmacher, Informatiker, viele Jahre in leitender Funktion
                  bei 3D Systems.
                  <br />
                  Mehr als 30 Jahre Erfahrung in Technik, Führung und
                  internationalen Projekten.
                </p>
                <p className="body-text about-continuation__text">
                  Das Besondere ist die Verbindung von Werkstatt und
                  Geschäftsleitung. Ich verstehe technische Prozesse, aber auch
                  Strategie, Führung, Projekte und wirtschaftliche Entscheidungen.
                  <br />
                  Der Kundendienst im 3D-Druck führte mich in Hunderte von
                  Betrieben: Dental, Automobil, Landmaschinen, Medizintechnik,
                  Weißwaren, Kunst und Mode. Mal Chefetage, mal Werkhalle.
                </p>
                <p className="body-text about-continuation__text !mt-8">
                  <strong className="font-semibold text-[var(--text)]">
                    Beide Sprachen sind meine.
                  </strong>
                </p>
              </div>

              <BrandSignature variant="section" className="mt-8" />
              <p className="body-text-note italic !mt-4">
                Klar in der Sache, mit einer leisen nordischen Note im Ton.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Haltung */}
        <section id="haltung" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Haltung</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">
                  Nüchtern hinsehen statt hypen.
                </span>
              </h2>
            </AnimateIn>

            <div className="mt-10 space-y-5">
              <p className="body-text !max-w-none">
                Ein Betrieb braucht nicht möglichst viel KI. Entscheidend ist,
                dass Menschen die Technik verstehen, einordnen und beherrschen,
                ohne das eigene Denken an sie abzugeben.
              </p>
              <p className="body-text !max-w-none">
                KI wird erst durch Menschen, Prozesse und Entscheidungen wirksam.
                Deshalb braucht es einen gesunden Blick ohne Hype auf das, was KI
                kann, was sie nicht kann und was sie mit uns macht.
              </p>
              <p className="body-text !max-w-none">
                Wer KI nutzt, muss den eigenen Kopf im Training halten, genau wie
                einen Muskel. Antworten prüfen, Zusammenhänge verstehen,
                Verantwortung behalten.
              </p>
              <p className="body-text !max-w-none">
                Die entscheidende Frage ist deshalb nicht nur: Was kann KI heute?
                <br />
                Sondern auch: Wer beherrscht das System heute und wer lernt heute,
                es in zehn Jahren zu beherrschen? Was braucht es dafür?
              </p>
            </div>
            <p className="body-text-note">
              Mein Ziel ist, KI gezielt und gekonnt dort einzusetzen, wo sie
              wirklich etwas verbessert,
              <br />
              und dabei die Souveränität im Betrieb zu erhalten.
            </p>
          </div>
        </section>

        {/* 6. Vertrauen */}
        <section id="vertrauen" className="section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>Vertrauen</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">
                  Worauf Sie sich verlassen können.
                </span>
              </h2>
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
                    Vom 3D-Druck zur KI: Neue Technik in Betriebe zu bringen ist
                    mein Beruf.
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
                      „Frank bringt Struktur und Klarheit in komplexe Themen und
                      schafft einen Raum, in dem man offen reden kann.“
                    </p>
                    <cite>— Führungskraft, Produktionsbetrieb</cite>
                  </blockquote>
                </AnimateIn>
                <AnimateIn delay={120}>
                  <blockquote className="quote-block testimonial-card">
                    <p>
                      „Endlich jemand, der KI nicht als Hype verkauft, sondern
                      pragmatisch einordnet, mit echtem Blick auf Datenschutz und
                      Nutzen.“
                    </p>
                    <cite>— Inhaber*in, Handwerksbetrieb</cite>
                  </blockquote>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* 7. So arbeiten wir zusammen */}
        <section
          id="so-arbeiten-wir"
          className="section-block bg-[var(--surface-muted)]"
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
          </div>
        </section>

        {/* 8. Abschluss-CTA */}
        <section id="termin" className="final-cta section-block">
          <div className="page-container">
            <AnimateIn>
              <h2 className="section-title">
                <span className="display-title-line">{finalCta.headline}</span>
              </h2>
              <p className="section-lead mt-6">{finalCta.body}</p>
              <p className="section-lead mt-4">
                Ich sitze in Roßdorf bei Darmstadt und komme zu Ihnen in den
                Betrieb.
                <span className="final-cta-region">
                  {" "}
                  In Südhessen und im Rhein-Main-Gebiet
                </span>
              </p>
            </AnimateIn>

            <PrimaryCtaLink
              className="btn-primary hero-lead-cta__button mt-10 w-full"
              trackLabel="final"
            >
              Kostenfreies Orientierungsgespräch{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}[ 30 Minuten ]
            </PrimaryCtaLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
