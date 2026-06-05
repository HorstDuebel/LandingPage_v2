import Image from "next/image";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
} from "@/components/cta-buttons";
import { SectionIntro, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cta, triggers } from "@/lib/copy";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero – Einladung wie susannevolkwein.de */}
        <section className="section-block bg-[var(--surface)] pt-28 md:pt-32">
          <div className="page-container">
            <div className="prose-width">
              <p className="section-kicker">Meine Einladung:</p>
              <h1 className="display-title">
                <span className="display-title-line">Ein Erstgespräch.</span>
                <span className="display-title-line">30 Minuten aus der Vogelperspektive.</span>
              </h1>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <PrimaryCtaLink className="btn-primary !w-auto sm:max-w-none">
                  {cta.primary.hero}
                </PrimaryCtaLink>
              </div>

              <p className="microcopy mt-6 max-w-md">
                Wir beleuchten Ihre aktuelle Situation. Ich höre zu und gebe Impulse.
                <br />
                30 Minuten. Erst schauen, ob es menschlich und fachlich passt.
              </p>
            </div>
          </div>
        </section>

        {/* Über mich */}
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
              <SectionIntro kicker="Über mich:" title="Mein Name ist Frank.">
                Ich arbeite mit Inhabern und Geschäftsführern im Handwerk und in
                KMU, die KI nicht als Hype, sondern als echte Entlastung im
                Alltag verstehen wollen: verständlich, sicher und praxisnah.
              </SectionIntro>

              <p className="body-text mt-8">
                KI soll nicht zusätzlich belasten, sondern im Alltag spürbar
                entlasten. Ich unterstütze Betriebe dabei, KI sicher und
                nachvollziehbar in ihre Abläufe zu integrieren, auf Basis von
                über 30 Jahren Praxis in Technik, Prozessen und Umsetzung.
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

        {/* Für wen */}
        <section id="fuer-wen" className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <SectionIntro
              kicker="Für wen:"
              title="Für Entscheider in Handwerk und KMU,"
              titleLine2="die Klarheit statt KI-Hype-Begriffe wollen."
            >
              Für Inhaber, Geschäftsführer und Verantwortliche, die Innovationen
              voranbringen und KI verständlich, sicher und pragmatisch
              einordnen wollen.
            </SectionIntro>

            <div className="prose-width mt-10 space-y-6">
              <p className="body-text">
                Für Interessierte, die wissen wollen, wie KI entlastet: Was muss
                vorbereitet und analysiert werden, damit der nächste Schritt
                wirklich sinnvoll ist? Keine Tool-Show, sondern ein klarer
                Fahrplan für den Betrieb.
              </p>
              <p className="body-text-muted">
                Wenn Sie im Tagesgeschäft wenig Zeit haben, Klarheit suchen,
                Schatten-KI einordnen und Datenschutz sowie den EU AI Act
                pragmatisch angehen wollen, sind Sie hier richtig.
              </p>
            </div>
          </div>
        </section>

        {/* Angebot */}
        <section id="angebot" className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <SectionIntro
              kicker="Mein Angebot:"
              title="Ihr Einstieg."
              titleLine2="Schritt für Schritt."
            >
              Keine lange Checkliste, sondern durchdachte Module, die im Alltag
              wirklich weiterhelfen.
            </SectionIntro>

            <div className="offer-grid mt-14">
              {[
                {
                  title: "Erstgespräch",
                  desc: "Wir bringen Ihre Ideen und Vorhaben auf den Tisch, schauen gemeinsam hin und ich gebe Ihnen erste Impulse.",
                  meta: "30 Minuten · kostenfrei",
                },
                {
                  title: "Potenzial-Scan",
                  desc: "Wo KI heute entlastet und welcher nächste Schritt wirtschaftlich sinnvoll ist.",
                  meta: "Individuell · online oder vor Ort",
                },
                {
                  title: "AI-ISCA Audit",
                  desc: "Nachvollziehbare Bestandsaufnahme: KI-Nutzung, Datenschutz, Compliance, Kompetenz.",
                  meta: "Strukturiert · als Entscheidungsgrundlage",
                },
                {
                  title: "KI-Leitlinie & Sicherer Hafen",
                  desc: "Klare Regeln fürs Team – und die passende Schutzstufe für Ihre Daten.",
                  meta: "Praxisnah · ohne Overkill",
                },
                {
                  title: "AI Literacy Workshop",
                  desc: "Kompetenz im Team – verständlich, nachweisbar, rechtssicher (Art. 4 EU AI Act).",
                  meta: "Module 1–4",
                },
                {
                  title: "Pilotprojekt",
                  desc: "Erster messbarer Nutzen im Betrieb, kontrolliert und auswertbar.",
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
              <p className="section-kicker !text-[var(--brand-orange)]">
                {triggers.angebotTitle}
              </p>
              <p className="body-text mt-3">{triggers.angebotBody}</p>
              <p className="microcopy mt-3">{triggers.angebotProof}</p>
            </div>
          </div>
        </section>

        {/* Methode */}
        <section id="methode" className="section-block bg-[var(--surface-blue)]">
          <div className="page-container">
            <SectionIntro
              kicker="Wie ich arbeite:"
              title="Ich höre hin, nehme auf mit dem Blick auf das Wesentliche"
              titleLine2="Praxisnah und strukturiert."
            >
              Fünf Schritte – praxisnah, verständlich und in Ihrem Tempo
              einsetzbar.
            </SectionIntro>

            <div className="prose-width mt-12 lg:max-w-2xl">
              {[
                {
                  n: "01",
                  title: "Audit",
                  text: "Sie sehen klar: Was läuft, was fehlt, wo Risiko steckt.",
                },
                {
                  n: "02",
                  title: "KI-Leitlinie",
                  text: "Ihr Team weiß: Was darf genutzt werden – und was nicht.",
                },
                {
                  n: "03",
                  title: "Sicherer Hafen",
                  text: "Daten bekommen die Schutzstufe, die sie brauchen – ohne Overkill.",
                },
                {
                  n: "04",
                  title: "AI Literacy",
                  text: "Kompetenz im Team – nachweisbar, rechtssicher (Art. 4 EU AI Act).",
                },
                {
                  n: "05",
                  title: "Pilotprojekt",
                  text: "Erster messbarer Nutzen im Betrieb, kontrolliert und auswertbar.",
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

        {/* Versprechen */}
        <section className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <SectionIntro
              kicker="Ihr KI Vorhaben:"
              title="von ChatGPT zu"
              titleLine2="sicherer, professioneller KI-Nutzung."
            >
              Klarheit entsteht, wenn wir aktuelle Prozesse betrachten. Sie
              erkennen Reibungspunkte, die Sie schon ahnen, und die nächsten
              Schritte werden sichtbar.
            </SectionIntro>

            <div className="prose-width mt-10 space-y-6">
              <p className="body-text">
                Damit Sie erkennen, wo KI heute sinnvoll entlastet, welche
                Lösungen zu Ihrem Unternehmen passen und welcher nächste Schritt
                sinnvoll ist.
              </p>
              <p className="body-text-muted italic">
                Nach unserem Gespräch gewinnen Sie einen neuen Blick auf die
                Technologie und eine klare Orientierung in Richtung
                KI-Möglichkeiten. Ziel ist es, Ihnen mehr Zeit für Ihre
                unternehmerische Leidenschaft zurückzugeben.
              </p>
            </div>
          </div>
        </section>

        {/* Vertrauen */}
        <section className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <SectionIntro
              kicker="Vertrauen:"
              title="Warum Entscheider"
              titleLine2="mir vertrauen."
            >
              Ich bin Werkzeugmacher, Informatiker, Handwerker,
              3D-Druck-Spezialist und Führungskraft. Ich kenne Betriebe von
              innen und nehme Menschen mit.
            </SectionIntro>

            <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-0">
                {[
                  "30+ Jahre Praxis – Technik, Prozesse, Umsetzung in der Industrie",
                  "KI-Manager Certificate (Cert-IT), Nr. KI001220 · 02/2026",
                  "27 Jahre bei 3D Systems – internationale Projekte bis €1,5M Budget",
                  "Fokus: verständlich, sicher, umsetzbar (EU AI Act & DSGVO)",
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
                    »Frank bringt Struktur und Klarheit in komplexe Themen – und
                    schafft einen Raum, in dem man offen reflektieren kann,
                    ohne bewertet zu werden.«
                  </p>
                  <cite>Führungskraft, Produktionsbetrieb · KI-Einstieg</cite>
                </blockquote>
                <blockquote className="quote-block">
                  <p>
                    »Endlich jemand, der KI nicht als Hype verkauft, sondern
                    pragmatisch einordnet – mit Blick auf Datenschutz und
                    Alltag im Betrieb.«
                  </p>
                  <cite>Inhaber, Handwerksbetrieb · Potenzial-Scan</cite>
                </blockquote>
              </div>
            </div>

            <div className="prose-width mt-14">
              <p className="section-kicker">Erstgespräch</p>
              <h3 className="section-title !text-2xl">
                Was Sie im Erstgespräch bekommen
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    t: "Klarheit",
                    d: "Worum es bei Ihnen wirklich geht – ohne Nebel.",
                  },
                  {
                    t: "Einordnung",
                    d: "Was sinnvoll ist – und was Sie (noch) lassen können.",
                  },
                  {
                    t: "Nächster Schritt",
                    d: "Eine saubere Empfehlung für den kleinsten sinnvollen Einstieg.",
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

        {/* FAQ */}
        <section id="faq" className="section-block bg-[var(--surface)]">
          <div className="page-container">
            <SectionIntro kicker="Fragen & Antworten:" title="FAQ">
              Kurz, verständlich, entscheidungsfreundlich.
            </SectionIntro>

            <div className="prose-width mt-12 lg:max-w-2xl">
              {[
                {
                  q: "Was passiert im Erstgespräch?",
                  a: "Wir klären Ihre Ausgangslage, ordnen Chancen und Risiken ein und definieren den nächsten sinnvollen Schritt, ohne Tool‑Show und ohne Druck.",
                },
                {
                  q: "Muss ich etwas vorbereiten?",
                  a: "Nein. Hilfreich ist nur ein grober Überblick: Welche Aufgaben kosten Zeit? Wo wird schon KI genutzt? Welche Daten sind sensibel? Wie speichern Sie Daten?",
                },
                {
                  q: "Was ist AI‑ISCA?",
                  a: "Ein strukturiertes Assessment (Audit): KI‑Nutzung, Datenschutz, Compliance und Kompetenz im Betrieb als nachvollziehbare Grundlage für Entscheidungen.",
                },
                {
                  q: "Wie ist das mit Datenschutz und EU AI Act?",
                  a: "Wir arbeiten pragmatisch: wenig Daten, klare Regeln, passende Schutzstufe. Fachbegriffe erkläre ich kurz und verständlich.",
                },
                {
                  q: "Für wen ist das Angebot nicht geeignet?",
                  a: "Wenn Sie nur eine Tool‑Demo oder „Hype‑Beratung“ suchen. Es geht um umsetzbare Entlastung im Alltag.",
                },
                {
                  q: "Was ist der nächste Schritt nach dem Gespräch?",
                  a: "Typisch sind ein Potenzial‑Scan, ein AI‑ISCA Audit oder ein passender Workshop‑Einstieg (Modul 1). Immer klein starten, sauber ausbauen.",
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

        {/* Final CTA */}
        <section className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <div className="prose-width mx-auto text-center">
              <SectionIntro
                kicker="Gemeinsam starten:"
                title="Statt Unsicherheit:"
                titleLine2="ein klarer nächster Schritt."
                centered
              >
                In 30 Minuten wissen Sie, was bei Ihnen sinnvoll ist. Sicher,
                nachvollziehbar, umsetzbar. Ohne Hype, ohne Verpflichtung.
              </SectionIntro>

              <ClickTrigger className="microcopy mt-8 !text-[var(--text)]">
                {triggers.finalBefore}
              </ClickTrigger>
              <PrimaryCtaLink className="btn-primary mx-auto mt-6 !w-auto">
                {cta.primary.final}
              </PrimaryCtaLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
