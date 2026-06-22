import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { Methode } from "@/components/methode";
import { Problem } from "@/components/problem";
import { SectionIntro, SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cta, triggers } from "@/lib/copy";
import { faqEntries } from "@/lib/faq";
import { getHomeJsonLd } from "@/lib/home-schema";
import { journeySteps } from "@/lib/journey";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.fullTitle },
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.fullTitle,
    description: siteConfig.ogDescription,
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <JsonLd data={getHomeJsonLd()} />
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* 1. Hero */}
        <section className="hero-section hero-pattern section-block bg-[var(--surface)]">
          <div className="page-container">
            <div>
              <h1 className="display-title">
                <span className="display-title-line">
                  Kein Betrieb lässt Mitarbeitende ohne
                </span>
                <span className="display-title-line">
                  Einweisung an eine neue{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    Maschine.
                  </span>
                </span>
                <span className="display-title-line display-title-line--gap">
                  Bei KI-Anwendungen passiert genau dies, täglich.
                </span>
              </h1>

              <p className="section-lead mt-6">
                Ich ändere das. Mit Ihnen, in Ihrem Tempo.
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

        {/* 2. Das Problem */}
        <Problem />

        {/* 3. Für wen */}
        <section id="fuer-wen" className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <AnimateIn>
              <SectionIntro
                kicker="Für wen:"
                wide
                title="Für Inhaber*innen und Geschäftsführer*innen"
                titleLine2="im Handwerk und KMU."
              >
                Für Inhaber*innen und Führungspersonen, die KI nicht als Hype,
                sondern als echtes Werkzeug sehen und sicher einsetzen wollen.    
              </SectionIntro>
            </AnimateIn>

            <div className="mt-10 space-y-6">
              <p className="body-text">
                Für alle, die wissen wollen: Wo entlastet KI heute wirklich? Was
                muss vorbereitet sein, damit der Einstieg sauber gelingt?
              </p>
              <p className="body-text-muted">
                Wenn Sie im Tagesgeschäft kaum Zeit haben und trotzdem nicht
                hinter der Entwicklung herlaufen wollen.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Über mich */}
        <section className="section-block bg-[var(--surface-muted)]">
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
                    background: "var(--color-accent)",
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>
              <div
                title="KI-Manager · Cert-IT · Nr. KI001220 · Feb. 2026"
                className="absolute -top-3 -right-3 flex items-center justify-center rounded-full border-2 border-white text-center font-semibold text-white"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#1A3A6B",
                  fontSize: "9px",
                  lineHeight: 1.2,
                }}
              >
                KI
                <br />
                Cert
              </div>
            </div>

            <div>
              <AnimateIn>
                <SectionIntro
                  kicker="Wer ich bin:"
                  title="30 Jahre Betrieb. Technik, Menschen, Verantwortung."
                >
                  Ich bin Werkzeugmacher, Informatiker und habe über viele Jahre
                  in leitender Funktion bei 3D Systems gearbeitet. Mit mehr als
                  30 Jahren Erfahrung in Technik, Führung und internationalen
                  Projekten kenne ich Betriebe von innen, von der Werkstatt bis
                  ins Management.
                </SectionIntro>
              </AnimateIn>

              <p className="body-text mt-8">
                KI ist für mich kein Hype, sondern ein Werkzeug, das
                verständlich, sicher und praktisch nutzbar sein muss.
              </p>

              <p className="hero-tagline mt-8 max-w-md">
                <span>KI</span>
                <span aria-hidden="true">•</span>
                <span>Sicher</span>
                <span aria-hidden="true">•</span>
                <span>Sinnvoll</span>
                <span aria-hidden="true">•</span>
                <span>Strategisch</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. Wie ich arbeite */}
        <Methode />

        {/* 6. Angebot */}
        <section id="angebot" className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <AnimateIn>
              <SectionIntro
                kicker="Mein Angebot:"
                wide
                title="Sieben Bausteine."
                titleLine2="Klar strukturiert, ohne Umwege."
              >
                Sieben flexibel kombinierbare Module, von der ersten Orientierung
                bis zur produktiven Nutzung. Die Module können einzeln gebucht
                oder zu einem durchgängigen Vorgehen kombiniert werden. Viele
                Unternehmen starten mit einem kostenlosen Erstgespräch und wählen anschließend die Schritte, die zu ihrer
                aktuellen Situation passen.
              </SectionIntro>
            </AnimateIn>

            <div className="offer-grid offer-grid--seven mt-14">
              {journeySteps.map((item, i) => (
                <AnimateIn key={item.id} delay={i * 60} className="h-full">
                  <article className="offer-card h-full">
                    <div className="flex items-center justify-between gap-3">
                      <p className="step-number">{item.n}</p>
                      {item.recommended || item.isNew ? (
                        <span
                          className={`shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white${
                            item.isNew ? " mr-2" : ""
                          }`}
                          style={{ background: "var(--color-accent)" }}
                        >
                          {item.recommended ? "Empfohlen" : "N E U"}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="offer-card__title">{item.offerTitle}</h3>
                    <p className="offer-card__desc">{item.offerDesc}</p>
                    <p className="offer-card__meta">{item.offerMeta}</p>
                    <PrimaryCtaInline trackLabel={`offer_${item.id}`}>
                      {cta.offerInline}
                    </PrimaryCtaInline>
                  </article>
                </AnimateIn>
              ))}
            </div>

            <div className="mt-16">
              <p className="body-text">{triggers.angebotBody}</p>
              <p className="microcopy mt-3">{triggers.angebotProof}</p>
            </div>
          </div>
        </section>

        {/* 7. Vertrauen */}
        <section className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionIntro
                kicker="Warum Entscheider*innen mir vertrauen:"
                title="Das, was ich mitbringe und was Sie davon haben."
              >
                30 Jahre Betrieb, Technik und Verantwortung: Als Werkzeugmacher,
                Informatiker und leitende Kraft habe ich internationale Projekte umgesetzt. 
                Ich kenne Betriebe von innen, die Werkstatt genauso wie das Büro und die Führungsebene.
              </SectionIntro>
            </AnimateIn>

            <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-0">
                {[
                  "30 Jahre Praxis in Technik, Prozessen und Führung, in der Industrie erprobt.",
                  "Zertifizierung: KI-Manager*in (Cert-IT, Nr. KI001220, Februar 2026)",
                  "27 Jahre bei 3D Systems: internationale Projekte bis 1,5 Mio. € Budget",
                  "Fokus: verständlich erklären, sicher einführen, nachhaltig verankern",
                ].map((line, i) => (
                  <AnimateIn key={line} delay={i * 80}>
                    <p className="border-b border-[var(--border)] py-4 copy-small text-[var(--text)]">
                      {line}
                    </p>
                  </AnimateIn>
                ))}
              </div>

              <div className="mt-8 lg:mt-0">
                <AnimateIn delay={0}>
                  <blockquote className="quote-block testimonial-card">
                    <p>
                      »Frank bringt Struktur und Klarheit in komplexe Themen und
                      schafft einen Raum, in dem man offen reden kann.«
                    </p>
                    <cite>Führungskraft, Produktionsbetrieb</cite>
                  </blockquote>
                </AnimateIn>
                <AnimateIn delay={120}>
                  <blockquote className="quote-block testimonial-card">
                    <p>
                      »Endlich jemand*, der*die KI nicht als Hype verkauft, sondern
                      pragmatisch einordnet, mit echtem Blick auf Datenschutz und
                      Nutzen.«
                    </p>
                    <cite>Inhaber*in, Handwerksbetrieb</cite>
                  </blockquote>
                </AnimateIn>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Erstgespräch-CTA */}
        <section id="termin" className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <div>
              <SectionKicker>Jetzt starten:</SectionKicker>
              <h3 className="section-title !text-xl">
                Was Sie nach 30 Minuten mitnehmen
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    t: "Klarheit",
                    d: "Worum es bei Ihnen wirklich geht. Ohne Nebel, ohne Vorwissen nötig.",
                  },
                  {
                    t: "Einordnung",
                    d: "Was für Ihren Betrieb heute sinnvoll ist. Und was Sie (noch) lassen können.",
                  },
                  {
                    t: "Nächster Schritt",
                    d: "Eine saubere, konkrete Empfehlung. Kein Paket, das verkauft werden will.",
                  },
                ].map((item) => (
                  <li key={item.t} className="border-b border-[var(--border)] pb-4">
                    <span className="font-[var(--font-subheading)] font-bold text-[var(--text)]">
                      {item.t}
                    </span>
                    <span className="body-text-muted mt-1 block copy-small">
                      {item.d}
                    </span>
                  </li>
                ))}
              </ul>

              <PrimaryCtaLink
                className="btn-primary mt-8 !w-auto"
                trackLabel="erstgespraech_cta"
              >
                {cta.primary.vertrauen}
              </PrimaryCtaLink>
              <ClickTrigger className="microcopy mt-4">
                {triggers.vertrauenAfter}
              </ClickTrigger>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionIntro
                kicker="Fragen & Antworten:"
                title="Das fragen Entscheider*innen vor dem ersten Schritt"
              >
                Kurz. Direkt. Damit Sie entscheiden können.
              </SectionIntro>
            </AnimateIn>

            <div className="mt-12">
              {faqEntries.map((item) => (
                <details key={item.question} className="faq-item group">
                  <summary>
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-[var(--brand-blue)] transition-transform group-open:rotate-45">
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
          </div>
        </section>

        {/* 10. Abschluss-CTA */}
        <section className="final-cta section-block">
          <div className="page-container">
            <AnimateIn>
              <SectionIntro
                kicker="Jetzt den ersten Schritt machen:"
                title="Statt warten:"
                titleLine2="ein klares Gespräch."
              >
                Nach 30 Minuten wissen Sie, wo Sie stehen und was der kleinste,
                sinnvolle nächste Schritt für Ihren Betrieb ist.
              </SectionIntro>
            </AnimateIn>

            <ClickTrigger className="microcopy mt-8">
              {triggers.finalBefore}
            </ClickTrigger>
            <PrimaryCtaLink
              className="btn-primary mt-6 !w-auto"
              trackLabel="final"
            >
              {cta.primary.final}
            </PrimaryCtaLink>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <SiteFooter />
    </div>
  );
}
