import Image from "next/image";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { Problem } from "@/components/problem";
import { SectionIntro, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cta, triggers } from "@/lib/copy";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* 1. Hero */}
        <section className="section-block bg-[var(--surface)] pt-28 md:pt-32">
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

              <p className="section-lead prose-width mt-6">
                Ich ändere das. Mit Ihnen, in Ihrem Tempo.
              </p>

              <div className="prose-width mt-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <PrimaryCtaLink className="btn-primary !w-auto sm:max-w-none">
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
              Für Inhaber*innen und Führungskräfte, die KI nicht als Hype,
              sondern als echtes Werkzeug sehen und sicher einsetzen wollen.    
            </SectionIntro>

            <div className="prose-width mt-10 space-y-6">
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

            <div className="prose-width lg:max-w-none">
              <SectionIntro
                kicker="Wer ich bin:"
                title="30 Jahre Betrieb. Technik, Menschen, Verantwortung."
              >
                Ich bin Werkzeugmacher, Informatiker und ehemaliger
                3D-Systems-Manager mit 30 Jahren internationaler
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

        {/* 5. Angebot */}
        <section id="angebot" className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <SectionIntro
              kicker="Mein Angebot:"
              wide
              title="Ihr Einstieg."
              titleLine2="Klar strukturiert, ohne Umwege."
            >
              Flexibele Module, je nachdem wo Sie stehen. Manche Betriebe starten
              mit dem Erstgespräch. Andere brauchen zuerst den Überblick. Beides
              ist richtig.
            </SectionIntro>

            <div className="offer-grid mt-14">
              {[
                {
                  title: "Erstgespräch",
                  desc: "Wir schauen gemeinsam hin: Was läuft, was fehlt, wo der nächste sinnvolle Schritt liegt.",
                  meta: "30 Minuten · kostenfrei",
                },
                {
                  title: "Potenzial-Scan",
                  desc: "Wo KI heute im Betrieb wirklich entlastet — und welcher Schritt wirtschaftlich Sinn ergibt.",
                  meta: "Individuell · online oder vor Ort",
                },
                {
                  title: "AI-ISCA Audit",
                  desc: "Strukturierte Bestandsaufnahme: Was wird genutzt, was fehlt, wo liegen Risiken? Ergebnis: eine klare Entscheidungsgrundlage.",
                  meta: "Strukturiert · als Entscheidungsgrundlage",
                },
                {
                  title: "KI-Leitlinie & Sicherer Hafen",
                  desc: "Klare Spielregeln für das Team: Was darf genutzt werden — und was nicht. Dazu die richtige Schutzstufe. Ohne Bürokratie-Overkill.",
                  meta: "Praxisnah · ohne Overkill",
                },
                {
                  title: "AI Literacy Workshop",
                  desc: "KI-Kompetenz, die sitzt: verständlich erklärt, nachweisbar dokumentiert, EU AI Act-konform (Art. 4).",
                  meta: "Module 1–4",
                },
                {
                  title: "Pilotprojekt",
                  desc: "Der erste echte Schritt mit KI im Betrieb — kontrolliert, messbar, ausbaufähig. Klein anfangen. Sauber wachsen.",
                  meta: "Klein starten · sauber ausbauen",
                },
              ].map((item) => (
                <article key={item.title} className="offer-card">
                  <h3 className="offer-card__title">{item.title}</h3>
                  <p className="offer-card__desc">{item.desc}</p>
                  <p className="offer-card__meta">{item.meta}</p>
                  <PrimaryCtaInline>{cta.offerInline}</PrimaryCtaInline>
                </article>
              ))}
            </div>

            <div className="prose-width mt-16">
              <p className="body-text">{triggers.angebotBody}</p>
              <p className="microcopy mt-3">{triggers.angebotProof}</p>
            </div>
          </div>
        </section>

        {/* 6. Methode */}
        <section id="methode" className="section-block bg-[var(--surface-blue)]">
          <div className="page-container">
            <div className="prose-width">
              <p className="section-kicker">Wie ich arbeite:</p>
              <h2 className="section-title">
                <span className="display-title-line">Ich höre zuerst zu.</span>
                <span className="display-title-line display-title-line--gap">
                  Dann der Strukturübersicht
                </span>
                <span className="display-title-line">
                  und die Analyse, praxisnah
                </span>
                <span className="display-title-line">in Ihrem Tempo.</span>
              </h2>
              <p className="section-lead mt-6">Fünf Schritte:</p>
            </div>

            <div className="prose-width mt-12 lg:max-w-2xl">
              {[
                {
                  n: "01",
                  title: "Audit",
                  text: "Sie sehen klar: Was heute läuft, was fehlt — und wo ein Risiko versteckt liegt.",
                },
                {
                  n: "02",
                  title: "KI-Leitlinie",
                  text: "Ihr Team weiß, was erlaubt ist — und was nicht. Keine Grauzone, keine Ausreden.",
                },
                {
                  n: "03",
                  title: "Sicherer Hafen",
                  text: "Ihre Daten bekommen die Schutzstufe, die sie brauchen. Nicht mehr — aber auch nicht weniger.",
                },
                {
                  n: "04",
                  title: "AI Literacy",
                  text: "Das Team kann KI einsetzen — nachweisbar, sicher, EU AI Act-konform.",
                },
                {
                  n: "05",
                  title: "Pilotprojekt",
                  text: "Erster echter Nutzen im Betrieb. Kontrolliert gestartet, sauber ausgebaut.",
                },
              ].map((step) => (
                <div key={step.n} className="step-item">
                  <span className="step-number">{step.n}</span>
                  <h3 className="offer-card__title mt-2">{step.title}</h3>
                  <p className="offer-card__desc !mt-2">{step.text}</p>
                </div>
              ))}
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
                  "30 Jahre Praxis in Technik, Prozessen und Führung — in der Industrie",
                  "Zertifizierter KI-Manager (Cert-IT, Nr. KI001220, Februar 2026)",
                  "27 Jahre bei 3D Systems: internationale Projekte bis 1,5 Mio. € Budget",
                  "Fokus: verständlich erklären, sicher einführen, nachhaltig verankern",
                ].map((line) => (
                  <p
                    key={line}
                    className="border-b border-[var(--border)] py-4 text-sm text-[var(--text)]"
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
                  <cite>— Führungskraft, Produktionsbetrieb</cite>
                </blockquote>
                <blockquote className="quote-block">
                  <p>
                    »Endlich jemand, der KI nicht als Hype verkauft, sondern
                    pragmatisch einordnet, mit echtem Blick auf Datenschutz und
                    Nutzen.«
                  </p>
                  <cite>— Inhaberin / Inhaber, Handwerksbetrieb</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Erstgespräch-CTA */}
        <section className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <div className="prose-width">
              <p className="section-kicker">Jetzt starten:</p>
              <h3 className="section-title !text-2xl">
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
                    <span className="body-text-muted mt-1 block text-sm">
                      {item.d}
                    </span>
                  </li>
                ))}
              </ul>

              <PrimaryCtaLink className="btn-primary mt-8 !w-auto">
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

            <div className="prose-width mt-12 lg:max-w-2xl">
              {[
                {
                  q: "Was passiert im Erstgespräch?",
                  a: "Wir schauen gemeinsam auf Ihre Ausgangslage: Was läuft, was fehlt, wo KI heute helfen kann — und was Sie noch lassen sollten. Kein Pitch, keine Agenda.",
                },
                {
                  q: "Muss ich mich vorbereiten?",
                  a: "Nein. Es hilft, grob zu wissen: Welche Aufgaben kosten gerade Zeit? Wo wird KI schon genutzt — bewusst oder unbewusst? Mehr braucht es nicht.",
                },
                {
                  q: "Was ist der AI-ISCA Audit?",
                  a: "Eine strukturierte Bestandsaufnahme: Wo wird KI genutzt? Was fehlt beim Datenschutz? Wo liegt Compliance-Risiko? Ergebnis: eine klare, dokumentierte Grundlage für Entscheidungen.",
                },
                {
                  q: "Wie halte ich es mit Datenschutz und EU AI Act?",
                  a: "Pragmatisch: klare Regeln, passende Schutzstufe, kein Bürokratie-Overkill. Fachbegriffe erkläre ich so, dass sie im Betrieb ankommen.",
                },
                {
                  q: "Für wen ist das nichts?",
                  a: "Wenn Sie eine Tool-Demo wollen oder Berater suchen, die Ihnen sagen, was trendy ist. Hier geht es um echte, umsetzbare Entlastung im Betriebsalltag.",
                },
                {
                  q: "Was kommt nach dem Erstgespräch?",
                  a: "Je nach Situation: ein Potenzial-Scan, ein AI-ISCA Audit oder Modul 1 des AI Literacy Workshops. Ich empfehle das, was zu Ihrem Betrieb passt — kein Standardpaket.",
                },
              ].map((item) => (
                <details key={item.q} className="faq-item group">
                  <summary>
                    <span className="flex items-center justify-between gap-4">
                      {item.q}
                      <span className="text-[var(--brand-blue)] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">
                    {item.a}
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

            <ClickTrigger className="microcopy mt-8 !text-[var(--text)] prose-width">
              {triggers.finalBefore}
            </ClickTrigger>
            <PrimaryCtaLink className="btn-primary mt-6 !w-auto">
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
