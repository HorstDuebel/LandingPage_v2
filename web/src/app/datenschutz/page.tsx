import Link from "next/link";
import { SiteFooter, SiteHeader, TopBar } from "@/components/site-chrome";

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <SiteHeader />
      <main className="section-block flex-1 bg-[var(--surface)]">
        <div className="nm-container max-w-3xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zur Startseite
          </Link>
          <p className="section-kicker mt-8">Rechtliches</p>
          <h1 className="section-title mt-3">Datenschutz</h1>
          <p className="section-lead mt-4">Kurzhinweis zum Datenschutz (DSGVO)</p>

          <div className="nm-card mt-8">
            <div className="nm-card-title">Verantwortlicher</div>
            <div className="nm-card-text !mt-3">
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
            </div>
          </div>

          <div className="nm-card mt-4 !bg-[var(--surface-muted)]">
            <div className="nm-card-title">Terminbuchung über Google</div>
            <p className="nm-card-text">
              Die Terminbuchung erfolgt über Google Calendar Appointment
              Schedules, eingebettet auf der Seite „Termin buchen“ (iframe).
              Dabei können durch Google personenbezogene Daten verarbeitet
              werden.
            </p>
          </div>

          <p className="mt-8 text-sm font-light leading-relaxed text-[var(--muted)]">
            Hinweis: Diese Datenschutzseite kann bei Bedarf um vollständige
            Informationen ergänzt werden.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
