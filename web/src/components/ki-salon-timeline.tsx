import { kiSalonTimeline } from "@/lib/ki-salon";

export function KiSalonTimeline() {
  const { steps, footnote } = kiSalonTimeline;

  return (
    <div className="ki-salon-timeline">
      <ol className="ki-salon-timeline__list" aria-label="Session-Ablauf">
        {steps.map((step) => (
          <li key={step.n} className="ki-salon-timeline__step">
            <div className="ki-salon-timeline__marker" aria-hidden="true">
              <span className="ki-salon-timeline__number">{step.n}</span>
            </div>
            <div className="ki-salon-timeline__content">
              <div className="ki-salon-timeline__header">
                <h3 className="ki-salon-timeline__title">{step.title}</h3>
                <span className="ki-salon-timeline__duration">{step.duration}</span>
              </div>
              <p className="ki-salon-timeline__text copy-small">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <aside className="ki-salon-timeline__footnote mt-10 border-t border-[var(--border)] pt-8">
        <p className="offer-card__title !text-base">{footnote.title}</p>
        <p className="body-text-note !mt-3">{footnote.text}</p>
      </aside>
    </div>
  );
}
