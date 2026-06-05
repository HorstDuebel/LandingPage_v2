import Link from "next/link";
import { ClickTrigger } from "@/components/cta-buttons";
import { SiteFooter, SiteHeader, TopBar } from "@/components/site-chrome";
import { triggers } from "@/lib/copy";
import { GOOGLE_APPOINTMENT_SCHEDULE_URL } from "@/lib/booking";

export const metadata = {
  title: "Erstgespräch – Klarheit in 45 Minuten | Frank Vullhorst",
  description:
    "Kostenloses Erstgespräch: Wo KI in Ihrem Betrieb entlastet – und welcher nächste Schritt passt.",
};

export default function TerminPage() {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <SiteHeader />

      <main className="flex-1 section-block bg-[var(--surface)]">
        <div className="nm-container max-w-4xl">
          <Link href="/" className="nav-link !text-sm">
            ← Zurück zur Startseite
          </Link>

          <p className="section-kicker mt-8">Termin wählen</p>
          <h1 className="section-title mt-3">Ihre 45 Minuten Klarheit</h1>
          <p className="section-lead mt-5">
            Wählen Sie einen Termin, der in Ihren Kalender passt. Danach wissen
            Sie,{" "}
            <strong className="font-semibold text-[var(--text)]">
              wo KI in Ihrem Betrieb entlastet
            </strong>{" "}
            – und welcher nächste Schritt wirklich sinnvoll ist.
          </p>

          <ClickTrigger className="mt-4 text-sm font-semibold text-[var(--text)]">
            {triggers.terminIntro}
          </ClickTrigger>

          <div className="mt-8 overflow-hidden border border-[var(--border)] bg-[var(--surface-muted)] p-3">
            <iframe
              src={GOOGLE_APPOINTMENT_SCHEDULE_URL}
              title="Terminwahl – Erstgespräch Frank Vullhorst"
              className="w-full border-0 bg-white"
              style={{ minHeight: "700px", height: "75vh" }}
              loading="lazy"
            />
          </div>

          <p className="mt-6 text-sm font-light leading-relaxed text-[var(--muted)]">
            Kalender lädt nicht?{" "}
            <a
              className="font-medium text-[var(--text)] underline hover:text-[var(--brand-orange)]"
              href={GOOGLE_APPOINTMENT_SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terminwahl in neuem Tab öffnen
            </a>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
