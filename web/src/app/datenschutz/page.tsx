export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--text)]">
        Datenschutz
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
        Kurzhinweis zum Datenschutz (DSGVO)
      </p>

      <div className="mt-8 rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
        <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
          Verantwortlicher
        </div>
        <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Frank Vullhorst
          <br />
          Claudiusweg 9, 64380 Roßdorf
          <br />
          E‑Mail:{" "}
          <a
            className="font-medium text-[var(--text)] hover:underline"
            href="mailto:Frank.Vullhorst@t-online.de"
          >
            Frank.Vullhorst@t-online.de
          </a>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[var(--surface-2)] p-6 ring-1 ring-[var(--border)]">
        <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
          Terminbuchung über Google
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Die Terminbuchung erfolgt über Google Calendar Appointment Schedules.
          Wenn Sie auf „Termin buchen“ klicken, werden Sie zu Google
          weitergeleitet. Dabei können durch Google personenbezogene Daten
          verarbeitet werden. Details finden Sie in den Datenschutzhinweisen von
          Google.
        </p>
      </div>

      <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
        Hinweis: Diese Datenschutzseite ist bewusst kurz gehalten und kann
        bei Bedarf um vollständige Informationen (z. B. Hosting, Server-Logs,
        Cookies/Tracking, Rechte der Betroffenen, Auftragsverarbeitung) ergänzt
        werden.
      </p>
    </main>
  );
}

