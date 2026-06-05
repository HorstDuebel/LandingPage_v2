import Image from "next/image";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
  SecondaryCtaLink,
} from "@/components/cta-buttons";
import {
  SectionIntro,
  SiteFooter,
  SiteHeader,
  TopBar,
} from "@/components/site-chrome";
import { cta, triggers } from "@/lib/copy";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <TopBar />
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero – neomesh: Eyebrow + große Headline + Fließtext */}
        <section className="section-block bg-[var(--surface)]">
          <div className="hero-layout nm-container">
            {/* Porträt: oben rechts, ~80 % kleiner als zuvor */}
            <div className="hero-portrait-anchor pointer-events-none flex justify-end md:pointer-events-auto">
              <div className="hero-portrait pointer-events-auto overflow-hidden border border-[var(--border)] bg-[var(--surface-muted)] p-1">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/frank.jpg"
                    alt="Frank Vullhorst"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 88px, 136px"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="hero-content flex w-full flex-col">
              <p className="hero-eyebrow">ki-sparring für kmu &amp; handwerk</p>

              <div className="mt-4 w-full max-w-xl">
                <h1 className="hero-name-line font-[var(--font-heading)] text-[2.25rem] font-bold leading-none text-[var(--text)] sm:text-4xl md:text-[2.75rem]">
                  <span className="hero-name-word">Frank</span>
                  <span className="hero-name-between" aria-hidden="true" />
                  <span className="hero-name-word">Vullhorst</span>
                </h1>
                <p
                  className="hero-tagline mt-3"
                  aria-label="KI, sicher, sinnvoll, strategisch"
                >
                  <span>KI</span>
                  <span aria-hidden="true">•</span>
                  <span>Sicher</span>
                  <span aria-hidden="true">•</span>
                  <span>Sinnvoll</span>
                  <span aria-hidden="true">•</span>
                  <span>Strategisch</span>
                </p>
              </div>

              <div className="mt-8 max-w-2xl space-y-6">
                <p className="font-[var(--font-body)] text-lg font-light leading-[1.75] text-[var(--text)] sm:text-xl">
                  KI sollte nicht zusätzlich belasten, sondern im Alltag wirklich
                  helfen. Ich unterstütze Handwerksbetriebe und KMU dabei, KI
                  verständlich, sicher und praxisnah in ihre Abläufe zu
                  integrieren.
                </p>

                <div>
                  <p className="nm-card-title">Damit Sie klar erkennen:</p>
                  <ul className="mt-3 space-y-2.5 font-[var(--font-body)] text-base font-light leading-relaxed text-[var(--muted)]">
                    {[
                      "wo KI heute bereits sinnvoll entlastet",
                      "welche Lösungen wirklich zu Ihrem Unternehmen passen",
                      "und welcher nächste Schritt wirtschaftlich sinnvoll ist",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="border-l-[3px] border-[var(--brand-blue)] bg-[var(--surface-blue)] py-3 pl-4 font-[var(--font-body)] text-base font-light italic leading-[1.7] text-[var(--muted)]">
                  Nach unserem Gespräch haben Sie keine Buzzwords mehr — sondern
                  Orientierung, konkrete Möglichkeiten und eine realistische
                  Einschätzung für Ihr Unternehmen.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                {["30+ Jahre Praxis", "KI-Manager Cert-IT", "EU AI Act & DSGVO"].map(
                  (label) => (
                    <div
                      key={label}
                      className="border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 font-[var(--font-subheading)] text-[11px] font-bold text-[var(--text)] sm:text-xs"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 flex w-full max-w-md flex-col gap-3">
                <PrimaryCtaLink>{cta.primary.hero}</PrimaryCtaLink>
                <SecondaryCtaLink href="#angebot">
                  {cta.secondary}
                </SecondaryCtaLink>
              </div>

              <ClickTrigger className="mt-4 max-w-md text-sm leading-relaxed">
                {triggers.heroAfter}
              </ClickTrigger>
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section id="fuer-wen" className="section-block bg-[var(--surface-muted)]">
          <div className="nm-container">
            <SectionIntro
              kicker="Was Sie beschäftigt"
              title="Wenn das bei Ihnen vertraut klingt"
            >
              Sie sind nicht allein – und Sie brauchen keine Tool-Show. Sie
              brauchen Klarheit, die im Betrieb wirklich trägt.
            </SectionIntro>

            <div className="mt-12 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
              {[
                {
                  title: "Zu wenig Zeit im Tagesgeschäft",
                  text: "KI soll entlasten – nicht neue Baustellen eröffnen.",
                },
                {
                  title: "Unsicherheit bei KI-Nutzung",
                  text: "Was ist sinnvoll – und was ist riskant oder unnötig?",
                },
                {
                  title: "Schatten-KI im Betrieb",
                  text: "Wenn Tools genutzt werden, ohne Regeln, ohne Überblick.",
                },
                {
                  title: "Fehlender Fahrplan",
                  text: "Sie wollen wissen, welcher nächste Schritt wirklich passt.",
                },
                {
                  title: "Unklare Datenschutzlage",
                  text: "DSGVO, EU AI Act und Praxis müssen zusammenpassen.",
                },
                {
                  title: "Entlastung statt Komplexität",
                  text: "Pragmatische Lösungen, die im Alltag funktionieren.",
                },
              ].map((card) => (
                <div key={card.title} className="nm-card !border-0 bg-[var(--surface)]">
                  <h3 className="nm-card-title">{card.title}</h3>
                  <p className="nm-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Angebot – 4-Spalten wie neomesh */}
        <section id="angebot" className="section-block bg-[var(--surface)]">
          <div className="nm-container">
            <SectionIntro
              kicker="Was macht das Angebot aus?"
              title="Was Sie bekommen – Schritt für Schritt"
              centered
            >
              Kein Leistungskatalog zum Durchklicken, sondern ein klarer Weg:
              erst Orientierung, dann der Baustein, der bei Ihnen wirklich Nutzen
              bringt.
            </SectionIntro>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "K",
                  tone: "orange" as const,
                  title: "Klarheit in 45 Minuten",
                  text: "Sie wissen danach, wo KI entlastet – und welcher nächste Schritt sinnvoll ist.",
                },
                {
                  icon: "S",
                  tone: "blue" as const,
                  title: "Sicherheit (AI-ISCA)",
                  text: "Nachvollziehbare Bestandsaufnahme: KI, Datenschutz, Compliance, Kompetenz.",
                },
                {
                  icon: "T",
                  tone: "gray" as const,
                  title: "Kompetenz fürs Team",
                  text: "Module 1–4: KI verstehen, EU AI Act, Datenschutz – mit Nachweis.",
                },
                {
                  icon: "E",
                  tone: "orange" as const,
                  title: "Entlastung im Alltag",
                  text: "Weniger manuelle Arbeit, klare Verantwortung, messbarer Nutzen.",
                },
              ].map((item) => (
                <div key={item.title} className="nm-icon-tile">
                  <span className={`nm-icon nm-icon--${item.tone}`}>
                    {item.icon}
                  </span>
                  <h3 className="nm-card-title">{item.title}</h3>
                  <p className="nm-card-text">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="cta-band mt-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-lg">
                <p className="section-kicker !text-[var(--brand-orange)]">
                  {triggers.angebotTitle}
                </p>
                <p className="mt-2 text-base leading-relaxed text-[var(--text)]">
                  {triggers.angebotBody}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[var(--brand-gray)]">
                  {triggers.angebotProof}
                </p>
              </div>
              <PrimaryCtaInline>{cta.primary.angebot}</PrimaryCtaInline>
            </div>
          </div>
        </section>

        {/* Methode */}
        <section id="methode" className="section-block bg-[var(--surface-blue)]">
          <div className="nm-container">
            <SectionIntro
              kicker="Denken wir neu"
              title="So kommen Sie sicher von der Idee zur Umsetzung"
            >
              Fünf Schritte – nicht als Theorie, sondern als Fahrplan, den Sie in
              Ihrem Tempo und mit Ihrem Team gehen können.
            </SectionIntro>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-5">
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
                  text: "Erster messbarer Nutzen im Betrieb – kontrolliert und auswertbar.",
                },
              ].map((step) => (
                <div key={step.n} className="nm-card">
                  <div className="text-xs font-bold tracking-[0.2em] text-[var(--brand-blue)]">
                    {step.n}
                  </div>
                  <h3 className="nm-card-title mt-2">{step.title}</h3>
                  <p className="nm-card-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vertrauen */}
        <section className="section-block bg-[var(--surface-muted)]">
          <div className="nm-container grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionIntro
                kicker="Vertrauen"
                title="Warum Entscheider mir vertrauen"
              >
                Keine Show, keine Buzzwords – sondern jemand, der Betrieb von
                innen kennt und KI so erklärt, dass Sie handeln können.
              </SectionIntro>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  "30+ Jahre Praxis – Technik, Prozesse, Umsetzung in der Industrie",
                  "KI-Manager Certificate (Cert-IT), Nr. KI001220 · 02/2026",
                  "27 Jahre bei 3D Systems – internationale Projekte bis €1,5M Budget",
                  "Fokus: verständlich, sicher, umsetzbar (EU AI Act & DSGVO)",
                ].map((line) => (
                  <div
                    key={line}
                    className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="nm-card">
              <p className="section-kicker">Erstgespräch</p>
              <h3 className="section-title mt-2 !text-2xl">
                Was Sie im Erstgespräch bekommen
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-3">
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
                  <div
                    key={item.t}
                    className="border border-[var(--border)] bg-[var(--surface-muted)] p-4"
                  >
                    <div className="text-sm font-bold text-[var(--text)]">
                      {item.t}
                    </div>
                    <div className="mt-1 text-sm font-light text-[var(--muted)]">
                      {item.d}
                    </div>
                  </div>
                ))}
              </div>

              <PrimaryCtaLink className="btn-primary mt-6 w-full">
                {cta.primary.vertrauen}
              </PrimaryCtaLink>
              <ClickTrigger className="mt-3 text-center text-sm">
                {triggers.vertrauenAfter}
              </ClickTrigger>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-block bg-[var(--surface)]">
          <div className="nm-container">
            <SectionIntro kicker="Fragen & Antworten" title="FAQ">
              Kurz, verständlich, entscheidungsfreundlich.
            </SectionIntro>

            <div className="mt-12 grid grid-cols-1 gap-3">
            {[
              {
                q: "Was passiert im Erstgespräch?",
                a: "Wir klären Ihre Ausgangslage, ordnen Chancen und Risiken ein und definieren den nächsten sinnvollen Schritt – ohne Tool‑Show und ohne Druck.",
              },
              {
                q: "Muss ich etwas vorbereiten?",
                a: "Nein. Hilfreich ist nur ein grober Überblick: Welche Aufgaben kosten Zeit? Wo wird schon KI genutzt? Welche Daten sind sensibel?",
              },
              {
                q: "Was ist AI‑ISCA?",
                a: "Ein strukturiertes Assessment (Audit): KI‑Nutzung, Datenschutz, Compliance und Kompetenz im Betrieb – als nachvollziehbare Grundlage für Entscheidungen.",
              },
              {
                q: "Wie ist das mit Datenschutz und EU AI Act?",
                a: "Wir arbeiten pragmatisch: wenig Daten, klare Regeln, passende Schutzstufe. Fachbegriffe erkläre ich kurz und verständlich.",
              },
              {
                q: "Für wen ist das Angebot nicht geeignet?",
                a: "Wenn Sie nur eine Tool‑Demo oder „Hype‑Beratung“ suchen. Es geht um umsetzbare Entlastung im Alltag – nicht um Buzzwords.",
              },
              {
                q: "Was ist der nächste Schritt nach dem Gespräch?",
                a: "Typisch sind ein Potenzial‑Scan, ein AI‑ISCA Audit oder ein passender Workshop‑Einstieg (Modul 1). Immer klein starten, sauber ausbauen.",
              },
            ].map((item) => (
              <details key={item.q} className="group nm-card !py-5">
                <summary className="cursor-pointer list-none font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
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
          <div className="nm-container">
            <div className="cta-band">
              <SectionIntro
                kicker="Gemeinsam starten"
                title="Statt Unsicherheit: ein klarer nächster Schritt für Ihren Betrieb"
              >
                In 45 Minuten wissen Sie, was bei Ihnen sinnvoll ist – sicher,
                nachvollziehbar, umsetzbar. Ohne Hype, ohne Verpflichtung.
              </SectionIntro>
              <div className="mt-8 flex max-w-xl flex-col gap-4">
                <ClickTrigger className="text-base font-semibold text-[var(--text)]">
                  {triggers.finalBefore}
                </ClickTrigger>
                <PrimaryCtaLink className="btn-primary sm:max-w-md">
                  {cta.primary.final}
                </PrimaryCtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
