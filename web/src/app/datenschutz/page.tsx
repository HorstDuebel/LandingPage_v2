import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface)] pt-28 md:pt-32">
        <div className="page-container max-w-3xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zur Startseite
          </Link>
          <p className="section-kicker mt-8">Rechtliches:</p>
          <h1 className="section-title mt-2">Datenschutz</h1>
          <p className="section-lead mt-4">
            Kurzhinweis zum Datenschutz (DSGVO)
          </p>

          <div className="mt-10 border-t border-[var(--border)] pt-8">
            <h2 className="offer-card__title">Verantwortlicher</h2>
            <p className="body-text-muted mt-3">
              Frank Vullhorst
              <br />
              Claudiusweg 9, 64380 Roßdorf
              <br />
              E-Mail:{" "}
              <a
                className="font-medium text-[var(--text)] hover:text-[var(--brand-orange)]"
                href="mailto:Frank.Vullhorst@t-online.de"
              >
                Frank.Vullhorst@t-online.de
              </a>
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <h2 className="offer-card__title">Terminbuchung über Google</h2>
            <p className="body-text-muted mt-3">
              Die Terminbuchung erfolgt über Google Calendar Appointment
              Schedules, eingebettet auf der Seite „Termin buchen“ (iframe).
              Dabei können durch Google personenbezogene Daten verarbeitet
              werden.
            </p>
          </div>

          <p className="microcopy mt-10">
            Hinweis: Diese Datenschutzseite kann bei Bedarf um vollständige
            Informationen ergänzt werden.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
