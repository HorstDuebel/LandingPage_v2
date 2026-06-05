import Image from "next/image";
import Link from "next/link";
import {
  ClickTrigger,
  PrimaryCtaInline,
  PrimaryCtaLink,
  SecondaryCtaLink,
} from "@/components/cta-buttons";
import { cta, triggers } from "@/lib/copy";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_92%,white)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-6 px-6 py-5">
          <a
            href="#top"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--surface-2)] shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
            aria-label="Zum Seitenanfang"
          >
            <span className="font-[var(--font-heading)] text-sm font-semibold tracking-tight text-[var(--text)]">
              FV
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-5 sm:gap-8">
            <a
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="#fuer-wen"
            >
              Für wen
            </a>
            <a
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="#angebot"
            >
              Angebot
            </a>
            <a
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="#methode"
            >
              Methode
            </a>
            <a
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="#faq"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--surface)]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16">
            {/* Links: Text & Buttons – eine Spalte, linksbündig */}
            <div className="flex w-full max-w-xl flex-col">
              <h1 className="hero-name-line font-[var(--font-heading)] text-[2.75rem] font-bold leading-none text-[var(--text)] sm:text-5xl md:text-[3.25rem]">
                <span className="hero-name-word">Frank</span>
                <span className="hero-name-between" aria-hidden="true" />
                <span className="hero-name-word">Vullhorst</span>
              </h1>
              <p
                className="mt-4 flex w-full justify-between font-[var(--font-subheading)] text-base font-bold uppercase tracking-wide text-[var(--text)] sm:text-lg"
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

              <div className="mt-8 space-y-5 font-[var(--font-subheading)] text-lg font-bold leading-snug text-[var(--text)] sm:text-xl">
                <p>
                  KI sollte nicht zusätzlich belasten, sondern im Alltag wirklich
                  helfen. Ich unterstütze Handwerksbetriebe und KMU dabei, KI
                  verständlich, sicher und praxisnah in ihre Abläufe zu
                  integrieren.
                </p>
                <div>
                  <p>Damit Sie klar erkennen:</p>
                  <ul className="mt-3 list-none space-y-2 pl-0 text-[var(--text)]">
                    <li className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>wo KI heute bereits sinnvoll entlastet</span>
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>
                        welche Lösungen wirklich zu Ihrem Unternehmen passen
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>
                        und welcher nächste Schritt wirtschaftlich sinnvoll ist
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="font-bold leading-relaxed">
                  Nach unserem Gespräch haben Sie keine Buzzwords mehr — sondern
                  Orientierung, konkrete Möglichkeiten und eine realistische
                  Einschätzung für Ihr Unternehmen.
                </p>
              </div>

              <div className="mt-8 flex w-full flex-col gap-4">
                <PrimaryCtaLink>{cta.primary.hero}</PrimaryCtaLink>
                <SecondaryCtaLink href="#angebot">
                  {cta.secondary}
                </SecondaryCtaLink>
              </div>

              <ClickTrigger className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {triggers.heroAfter}
              </ClickTrigger>
            </div>

            {/* Rechts: Porträt + Trust-Badges darunter */}
            <div className="flex w-full flex-col md:max-w-md md:justify-self-end lg:max-w-lg">
              <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-blue)_35%,white)] bg-[color-mix(in_srgb,var(--brand-blue)_12%,white)] p-3 shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/frank.jpg"
                    alt="Frank Vullhorst"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="mt-4 grid w-full grid-cols-3 gap-2 sm:gap-3">
                {["30+ Jahre Praxis", "KI-Manager Cert-IT", "EU AI Act & DSGVO"].map(
                  (label) => (
                    <div
                      key={label}
                      className="flex items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--text)_22%,white)] bg-[var(--surface)] px-2 py-2.5 text-center font-[var(--font-subheading)] text-[11px] font-bold leading-tight text-[var(--text)] sm:px-3 sm:py-3 sm:text-xs"
                    >
                      {label}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section id="fuer-wen" className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
                Wenn das bei Ihnen vertraut klingt
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                Sie sind nicht allein – und Sie brauchen keine Tool‑Show. Sie
                brauchen Klarheit, die im Betrieb wirklich trägt.
              </p>
            </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Zu wenig Zeit im Tagesgeschäft",
                text: "KI soll entlasten – nicht neue Baustellen eröffnen.",
              },
              {
                title: "Unsicherheit bei KI‑Nutzung",
                text: "Was ist sinnvoll – und was ist riskant oder unnötig?",
              },
              {
                title: "Schatten‑KI im Betrieb",
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
              <div
                key={card.title}
                className="rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
              >
                <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                  {card.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Angebot */}
        <section
          id="angebot"
          className="bg-[color-mix(in_srgb,var(--brand-blue)_8%,white)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
                Was Sie bekommen – Schritt für Schritt
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                Kein Leistungskatalog zum Durchklicken, sondern ein klarer Weg:
                erst Orientierung, dann der Baustein, der bei Ihnen wirklich
                Nutzen bringt.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  title: "Klarheit in 45 Minuten",
                  text: "Sie wissen danach, wo KI bei Ihnen entlastet – und welcher nächste Schritt sinnvoll ist. Kostenlos, ohne Druck.",
                },
                {
                  title: "Sicherheit statt Bauchgefühl (AI‑ISCA)",
                  text: "Eine nachvollziehbare Bestandsaufnahme: KI‑Nutzung, Datenschutz, Compliance und Kompetenz – als Grundlage für Entscheidungen.",
                },
                {
                  title: "Kompetenz fürs Team (Module 1–4)",
                  text: "Ihr Team versteht KI, EU AI Act und Datenschutz – praxisnah, verständlich, mit dokumentierbarem Nachweis.",
                },
                {
                  title: "Entlastung im Alltag",
                  text: "Weniger manuelle Arbeit, klare Verantwortung, messbarer Nutzen – ohne neue Komplexität im Tagesgeschäft.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                      {card.title}
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[var(--brand-gray)]" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)] sm:flex-row sm:items-center">
              <div className="max-w-lg">
                <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                  {triggers.angebotTitle}
                </div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {triggers.angebotBody}
                </div>
                <div className="mt-3 text-xs font-semibold tracking-wide text-[var(--brand-gray)] uppercase">
                  {triggers.angebotProof}
                </div>
              </div>
              <PrimaryCtaInline>{cta.primary.angebot}</PrimaryCtaInline>
            </div>
          </div>
        </section>

        {/* Methode */}
        <section id="methode" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
              So kommen Sie sicher von der Idee zur Umsetzung
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Fünf Schritte – nicht als Theorie, sondern als Fahrplan, den Sie
              in Ihrem Tempo und mit Ihrem Team gehen können.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-5">
            {[
              {
                n: "01",
                title: "Audit",
                text: "Sie sehen klar: Was läuft, was fehlt, wo Risiko steckt.",
              },
              {
                n: "02",
                title: "KI‑Leitlinie",
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
              <div
                key={step.n}
                className="rounded-2xl bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
              >
                <div className="text-xs font-semibold tracking-widest text-[var(--brand-gray)]">
                  {step.n}
                </div>
                <div className="mt-2 font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                  {step.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vertrauen */}
        <section className="bg-[var(--surface-2)]">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
            <div>
              <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
                Warum Entscheider mir vertrauen
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                Keine Show, keine Buzzwords – sondern jemand, der Betrieb von
                innen kennt und KI so erklärt, dass Sie handeln können.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  "30+ Jahre Praxis – Technik, Prozesse, Umsetzung in der Industrie",
                  "KI‑Manager Certificate (Cert‑IT), Nr. KI001220 · 02/2026",
                  "27 Jahre bei 3D Systems – internationale Projekte bis €1,5M Budget",
                  "Fokus: verständlich, sicher, umsetzbar (EU AI Act & DSGVO)",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]"
                  >
                    <div className="text-sm text-[var(--text)]">{line}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
              <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                Was Sie im Erstgespräch bekommen
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3">
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
                    className="rounded-2xl bg-[var(--surface-2)] p-4 ring-1 ring-[var(--border)]"
                  >
                    <div className="text-sm font-semibold text-[var(--text)]">
                      {item.t}
                    </div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      {item.d}
                    </div>
                  </div>
                ))}
              </div>

              <PrimaryCtaLink className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center text-base font-semibold leading-snug text-[var(--text)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-orange)_35%,black)] hover:brightness-[0.98] active:brightness-[0.96]">
                {cta.primary.vertrauen}
              </PrimaryCtaLink>
              <ClickTrigger className="mt-3 text-center text-sm">
                {triggers.vertrauenAfter}
              </ClickTrigger>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
              FAQ
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Kurz, verständlich, entscheidungsfreundlich.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4">
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
              <details
                key={item.q}
                className="group rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
              >
                <summary className="cursor-pointer list-none font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-[var(--brand-gray)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="rounded-[var(--radius-lg)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand-orange)_20%,white),white)] p-10 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
              <div className="max-w-3xl">
                <h2 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--text)]">
                  Statt Unsicherheit: ein klarer nächster Schritt für Ihren
                  Betrieb
                </h2>
                <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                  In 45 Minuten wissen Sie, was bei Ihnen sinnvoll ist – sicher,
                  nachvollziehbar, umsetzbar. Ohne Hype, ohne Verpflichtung.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:max-w-xl">
                <ClickTrigger className="text-base font-semibold text-[var(--text)]">
                  {triggers.finalBefore}
                </ClickTrigger>
                <PrimaryCtaLink className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3 text-center text-base font-semibold leading-snug text-[var(--text)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-orange)_35%,black)] hover:brightness-[0.98] active:brightness-[0.96] sm:w-auto sm:min-w-[20rem]">
                  {cta.primary.final}
                </PrimaryCtaLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                Frank Vullhorst
              </div>
              <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Claudiusweg 9
                <br />
                64380 Roßdorf
                <br />
                <a
                  className="font-medium text-[var(--text)] hover:underline"
                  href="mailto:Frank.Vullhorst@t-online.de"
                >
                  Frank.Vullhorst@t-online.de
                </a>
                <br />
                <a
                  className="font-medium text-[var(--text)] hover:underline"
                  href="tel:+491726689960"
                >
                  +49 (0)172 6689960
                </a>
              </div>
            </div>

            <div>
              <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                Links
              </div>
              <div className="mt-2 grid gap-2 text-sm">
                <a className="text-[var(--muted)] hover:underline" href="/impressum">
                  Impressum
                </a>
                <a className="text-[var(--muted)] hover:underline" href="/datenschutz">
                  Datenschutz
                </a>
              </div>
            </div>

            <div>
              <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
                Noch unsicher?
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {triggers.footerBody}
              </p>
              <Link
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 py-2 text-center text-sm font-semibold leading-snug text-[var(--text)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-orange)_35%,black)] hover:brightness-[0.98] active:brightness-[0.96]"
                href="/termin"
              >
                {cta.primary.footer}
              </Link>
            </div>
          </div>

          <div className="mt-10 text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Frank Vullhorst. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
