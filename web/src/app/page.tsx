import type { Metadata } from "next";
import Image from "next/image";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { Methode } from "@/components/methode";
import { Problem } from "@/components/problem";
import { SectionIntro, SiteFooter, SiteHeader } from "@/components/site-chrome";
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
        <section className="hero-section section-block bg-[var(--surface)]">
          <div className="page-container">
            <div>
              <h1 className="display-title">
                <span className="display-title-line">
                  Kein Betrieb lässt Mitarbeitende ohne
                </span>
                <span className="display-title-line">
                  Einweisung an eine neue Maschine.
                </span>
                <span className="display-title-line display-title-line--gap">
                  Bei KI Anwendungen passiert genau dies, täglich.
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
            <SectionIntro
              kicker="Für wen:"
              wide
              title="Für Inhaber*innen und Geschäftsführer*innen"
              titleLine2="im Handwerk und KMU."
            >
              Für Inhaber*innen und Führungspersonen, die KI nicht als Hype,
              sondern als echtes Werkzeug sehen und sicher einsetzen wollen.    
            </SectionIntro>

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
            <div className="about-portrait mx-auto lg:mx-0">
              <Image
                src="/frank.jpg"
                alt="Frank Vullhorst"
                fill
                className="object-cover object-[center_20%]"
                sizes="256px"
                priority
              />
            </div>

            <div>
              <SectionIntro
                kicker="Wer ich bin:"
                title="30 Jahre Betrieb. Technik, Menschen, Verantwortung."
              >
                Ich bin Werkzeugmacher, Informatiker und war in leitender
                Position bei 3D Systems mit 30 Jahren internationaler
                Projekterfahrung. Ich kenne Betriebe von innen, die Sprache der
                Werkstatt genauso wie die Sprache des Managements.
              </SectionIntro>

              <p className="body-text mt-8">
                KI ist für mich kein Trend und keine Theorie. Es ist das
                Werkzeug, das ich Inhaber*innen und ihren Teams zugänglich
                machen will, verständlich, rechtssicher und ohne Abhängigkeit.
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
            <SectionIntro
              kicker="Mein Angebot:"
              wide
              title="Sieben Bausteine."
              titleLine2="Klar strukturiert, ohne Umwege."
            >
              Sieben flexibel kombinierbare Module, von der ersten Orientierung
              bis zur produktiven Nutzung. Die Module können einzeln gebucht
              oder zu einem durchgängigen Vorgehen kombiniert werden. Viele
              Unternehmen starten mit einem kostenlosen Erstgespräch oder
              Potenzial-Scan und wählen anschließend die Schritte, die zu ihrer
              aktuellen Situation passen.
            </SectionIntro>

            <div className="offer-grid offer-grid--seven mt-14">
              {journeySteps.map((item) => (
                <article key={item.id} className="offer-card">
                  <p className="step-number">{item.n}</p>
                  <h3 className="offer-card__title">{item.offerTitle}</h3>
                  <p className="offer-card__desc">{item.offerDesc}</p>
                  <p className="offer-card__meta">{item.offerMeta}</p>
                  <PrimaryCtaInline trackLabel={`offer_${item.id}`}>
                    {cta.offerInline}
                  </PrimaryCtaInline>
                </article>
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
            <SectionIntro
              kicker="Warum Entscheider*innen mir vertrauen:"
              title="Das, was ich mitbringe und was Sie davon haben."
            >
              30 Jahre Betrieb, Technik und Verantwortung: Als Werkzeugmacher,
              Informatiker und leitende Kraft habe ich internationale Projekte umgesetzt. 
              Ich kenne Betriebe von innen, die Werkstatt genauso wie das Büro und die Führungsebene.
            </SectionIntro>

            <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-0">
                {[
                  "30 Jahre Praxis in Technik, Prozessen und Führung, in der Industrie",
                  "Zertifizierung: KI-Manager*in (Cert-IT, Nr. KI001220, Februar 2026)",
                  "27 Jahre bei 3D Systems: internationale Projekte bis 1,5 Mio. € Budget",
                  "Fokus: verständlich erklären, sicher einführen, nachhaltig verankern",
                ].map((line) => (
                  <p
                    key={line}
                    className="border-b border-[var(--border)] py-4 copy-small text-[var(--text)]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-8 lg:mt-0">
                <blockquote className="quote-block">
                  <p>
                    »Frank bringt Struktur und Klarheit in komplexe Themen und
                    schafft einen Raum, in dem man offen reden kann.«
                  </p>
                  <cite>, Führungskraft, Produktionsbetrieb</cite>
                </blockquote>
                <blockquote className="quote-block">
                  <p>
                    »Endlich jemand*, der*die KI nicht als Hype verkauft, sondern
                    pragmatisch einordnet, mit echtem Blick auf Datenschutz und
                    Nutzen.«
                  </p>
                  <cite>, Inhaber*in, Handwerksbetrieb</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Erstgespräch-CTA */}
        <section id="termin" className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <div>
              <p className="section-kicker">Jetzt starten:</p>
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
            <SectionIntro
              kicker="Fragen & Antworten:"
              title="Das fragen Entscheider*innen vor dem ersten Schritt"
            >
              Kurz. Direkt. Damit Sie entscheiden können.
            </SectionIntro>

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
        <section className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <SectionIntro
              kicker="Jetzt den ersten Schritt machen:"
              title="Statt warten:"
              titleLine2="ein klares Gespräch."
            >
              Nach 30 Minuten wissen Sie, wo Sie stehen und was der kleinste,
              sinnvolle nächste Schritt für Ihren Betrieb ist.
            </SectionIntro>

            <ClickTrigger className="microcopy mt-8 !text-[var(--text)]">
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
