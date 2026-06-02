import Link from "next/link";
import { GOOGLE_APPOINTMENT_SCHEDULE_URL } from "@/lib/booking";

export const metadata = {
  title: "Termin buchen – Frank Vullhorst",
  description:
    "45-minütiges Erstgespräch buchen – eingebettet, ohne Weiterleitung zur Google-Startseite.",
};

export default function TerminPage() {
  return (
    <div className="flex min-h-full flex-col bg-[var(--surface)]">
      <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_92%,white)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-6 px-6 py-5">
          <Link
            href="/"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--surface-2)] shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]"
            aria-label="Zur Startseite"
          >
            <span className="font-[var(--font-heading)] text-sm font-semibold tracking-tight text-[var(--text)]">
              FV
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-5 sm:gap-8">
            <Link
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="/#fuer-wen"
            >
              Für wen
            </Link>
            <Link
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="/#angebot"
            >
              Angebot
            </Link>
            <Link
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="/#methode"
            >
              Methode
            </Link>
            <Link
              className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)] hover:opacity-80"
              href="/#faq"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] hover:underline"
          >
            ← Zurück zur Startseite
          </Link>

          <h1 className="mt-6 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Termin buchen
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Wählen Sie unten einen freien Termin für Ihr{" "}
            <strong className="font-semibold text-[var(--text)]">
              45-minütiges Erstgespräch
            </strong>
            . Die Buchung läuft über Google Calendar – Sie bleiben auf dieser
            Seite.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--brand-blue)_35%,white)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
            <iframe
              src={GOOGLE_APPOINTMENT_SCHEDULE_URL}
              title="Terminbuchung – Google Calendar"
              className="w-full rounded-xl border-0 bg-white"
              style={{ minHeight: "700px", height: "75vh" }}
              loading="lazy"
            />
          </div>

          <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
            Probleme mit der Anzeige?{" "}
            <a
              className="font-medium text-[var(--text)] underline hover:opacity-80"
              href={GOOGLE_APPOINTMENT_SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terminbuchung in neuem Tab öffnen
            </a>
          </p>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Frank Vullhorst</span>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:underline" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
