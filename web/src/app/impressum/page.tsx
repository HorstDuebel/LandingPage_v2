export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold tracking-tight text-[var(--text)]">
        Impressum
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
        Angaben gemäß § 5 TMG
      </p>

      <div className="mt-8 rounded-2xl bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ring-1 ring-[var(--border)]">
        <div className="font-[var(--font-subheading)] text-base font-bold text-[var(--text)]">
          Frank Vullhorst
        </div>
        <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Claudiusweg 9
          <br />
          64380 Roßdorf
          <br />
          Deutschland
        </div>

        <div className="mt-6 text-sm leading-6 text-[var(--muted)]">
          <div className="font-semibold text-[var(--text)]">Kontakt</div>
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

      <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
        Hinweis: Dieses Impressum ist eine schlanke Basisseite für den
        Projektstart. Falls weitere rechtliche Angaben (z. B. USt‑ID,
        Aufsichtsbehörde, Berufsrecht) benötigt werden, können sie ergänzt
        werden.
      </p>
    </main>
  );
}

