export function Problem() {
  return (
    <section id="problem" className="section-block bg-[var(--surface-muted)]">
      <div className="page-container">
        <div className="prose-width">
          <p className="section-kicker">Warum das dringend ist:</p>
          <h2 className="section-title section-title--stacked">
            <span className="display-title-line">
              KI läuft bereits in Ihrem Betrieb.
            </span>
            <span className="display-title-line">Die Frage ist:</span>
            <span className="display-title-line">
              kontrolliert oder unkontrolliert?
            </span>
          </h2>
        </div>

        <div className="prose-width mt-10 space-y-6">
          <p className="body-text">
            Mitarbeitende nutzen KI-Tools, manche produktiv, manche riskant, die
            meisten ohne klare Regeln. Datenschutzverstöße, Haftungslücken und
            falsche Ergebnisse entstehen nicht aus böser Absicht. Sie entstehen,
            weil niemand eingewiesen hat.
          </p>
          <p className="body-text">
            Der EU AI Act (Art. 4) macht KI-Kompetenz im Unternehmen seit 2025 zur
            Pflicht. Das ist keine Bürokratie, das ist Ihr Schutz.
          </p>
          <blockquote className="quote-block">
            <p>
              Sie kommen zu mir, weil ich so arbeite, dass ich keine Abhängigkeit
              erzeuge, sondern befähige.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
