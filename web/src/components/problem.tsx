import { AnimateIn } from "@/components/animate-in";
import { SectionKicker } from "@/components/site-chrome";

export function Problem() {
  return (
    <section id="problem" className="section-block bg-[var(--surface-muted)]">
      <div className="page-container">
        <div>
          <AnimateIn>
            <>
              <SectionKicker>Warum das dringend ist:</SectionKicker>
              <h2 className="section-title section-title--problem">
                <span className="display-title-line display-title-line--single">
                  KI läuft bereits in Ihrem Betrieb.
                </span>
                <span className="display-title-line display-title-line--gap">
                  Die Frage ist:
                </span>
                <span className="display-title-line display-title-line--single">
                  kontrolliert oder unkontrolliert?
                </span>
              </h2>
            </>
          </AnimateIn>

          <div className="mt-10 space-y-6">
            <p className="body-text">
              Mitarbeitende nutzen KI-Tools, manche produktiv, manche riskant, die
              meisten ohne klare Regeln. Datenschutzverstöße, Haftungslücken und
              falsche Ergebnisse entstehen nicht aus böser Absicht. Sie entstehen,
              weil es bisher keine Einweisung gab.
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
      </div>
    </section>
  );
}
