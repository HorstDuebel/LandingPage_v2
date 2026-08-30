"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  journeyBuildingBlocks,
  journeySpecialFormat,
  type JourneyBuildingBlock,
} from "@/lib/journey";

type FlipOfferCardProps = {
  block: JourneyBuildingBlock;
  flipped: boolean;
  onToggle: () => void;
  minHeight: number;
};

function FlipOfferCard({
  block,
  flipped,
  onToggle,
  minHeight,
}: FlipOfferCardProps) {
  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  const front = (
    <>
      <h3 className="offer-card__title">{block.title}</h3>
      <p className="offer-card__desc">{block.description}</p>
      <p className="flip-card__hint">Mehr erfahren</p>
    </>
  );

  return (
    <div
      className={`flip-card${flipped ? " flip-card--open" : ""}`}
      style={minHeight > 0 && !flipped ? { minHeight } : undefined}
    >
      <div className="flip-card__slot">
        <div className="flip-card__measure" data-flip-slot="">
          <div className="flip-card__face flip-card__face--front">{front}</div>
        </div>
      </div>

      <div
        className="flip-card__flyout"
        role="button"
        tabIndex={0}
        aria-expanded={flipped}
        aria-label={`${block.title}: ${flipped ? "Details schließen" : "Mehr erfahren"}`}
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        onKeyDown={onKeyDown}
      >
        <div className="flip-card__inner">
          <div className="flip-card__face flip-card__face--front">{front}</div>
          <div
            className="flip-card__face flip-card__face--back"
            aria-hidden={!flipped}
          >
            <h3 className="offer-card__title">{block.title}</h3>
            <div className="flip-card__modules">
              {block.backModules.map((mod) => (
                <div key={mod.title} className="flip-card__module">
                  <p className="flip-card__module-title">{mod.title}</p>
                  <p className="offer-card__desc !mt-2">{mod.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecialFormatFlipCard({
  flipped,
  onToggle,
}: {
  flipped: boolean;
  onToggle: () => void;
}) {
  const backMeasureRef = useRef<HTMLDivElement>(null);
  const [openMinHeight, setOpenMinHeight] = useState(0);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  const syncOpenHeight = useCallback(() => {
    const measure = backMeasureRef.current;
    if (!measure) return;
    setOpenMinHeight(measure.scrollHeight);
  }, []);

  useLayoutEffect(() => {
    if (!flipped) {
      setOpenMinHeight(0);
      return;
    }
    syncOpenHeight();
  }, [flipped, syncOpenHeight]);

  useEffect(() => {
    if (!flipped) return;

    const measure = backMeasureRef.current;
    if (!measure) return;

    const ro = new ResizeObserver(() => syncOpenHeight());
    ro.observe(measure);
    window.addEventListener("resize", syncOpenHeight);

    if (document.fonts?.ready) {
      void document.fonts.ready.then(syncOpenHeight);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncOpenHeight);
    };
  }, [flipped, syncOpenHeight]);

  const front = (
    <>
      <h3 className="offer-card__title offer-special__title">
        {journeySpecialFormat.title}
      </h3>
      <p className="offer-card__desc">{journeySpecialFormat.intro}</p>
      <p className="offer-card__desc">
        <strong>Mein Angebot:</strong> {journeySpecialFormat.offerBody}
      </p>
      <p className="offer-card__desc offer-special__closing">
        {journeySpecialFormat.closing}
      </p>
      <p className="flip-card__hint">Mehr erfahren</p>
    </>
  );

  const back = (
    <>
      <h3 className="offer-card__title offer-special__title">
        {journeySpecialFormat.title}
      </h3>
      <p className="flip-card-special__subtitle">
        {journeySpecialFormat.back.subtitle}
      </p>
      <p className="offer-card__desc">{journeySpecialFormat.back.lead}</p>
      <ul className="flip-card-special__list">
        {journeySpecialFormat.back.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="offer-card__desc">
        {journeySpecialFormat.back.afterBullets}
        <br />
        {journeySpecialFormat.back.afterBulletsLine2}
      </p>
      {journeySpecialFormat.back.paragraphs.map((paragraph) => (
        <p key={paragraph.body} className="offer-card__desc">
          {paragraph.label ? (
            <>
              <strong>{paragraph.label}</strong> {paragraph.body}
            </>
          ) : (
            paragraph.body
          )}
        </p>
      ))}
    </>
  );

  return (
    <div
      className={`flip-card flip-card-special${flipped ? " flip-card--open" : ""}`}
    >
      <div
        ref={backMeasureRef}
        className="flip-card-special__back-measure"
        aria-hidden="true"
      >
        <div className="flip-card__face flip-card__face--special">{back}</div>
      </div>

      <div className="flip-card__slot">
        <div className="flip-card__measure" data-flip-slot-special="">
          <div className="flip-card__face flip-card__face--front flip-card__face--special">
            {front}
          </div>
        </div>
      </div>

      <div
        className="flip-card__flyout"
        role="button"
        tabIndex={0}
        aria-expanded={flipped}
        aria-label={`${journeySpecialFormat.title}: ${flipped ? "Details schließen" : "Mehr erfahren"}`}
        style={
          flipped && openMinHeight > 0
            ? { minHeight: openMinHeight }
            : undefined
        }
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        onKeyDown={onKeyDown}
      >
        <div className="flip-card__inner">
          <div className="flip-card__face flip-card__face--front flip-card__face--special">
            {front}
          </div>
          <div
            className="flip-card__face flip-card__face--back flip-card__face--special"
            aria-hidden={!flipped}
          >
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BuildingBlockFlipGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [minHeight, setMinHeight] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpenId(null), []);

  const syncHeights = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const slots = grid.querySelectorAll<HTMLElement>("[data-flip-slot]");
    let max = 0;
    slots.forEach((slot) => {
      max = Math.max(max, slot.scrollHeight);
    });
    setMinHeight(max);
  }, []);

  useLayoutEffect(() => {
    syncHeights();
  }, [syncHeights, openId]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ro = new ResizeObserver(() => syncHeights());
    grid.querySelectorAll("[data-flip-slot]").forEach((el) => ro.observe(el));
    window.addEventListener("resize", syncHeights);

    if (document.fonts?.ready) {
      void document.fonts.ready.then(syncHeights);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, [syncHeights]);

  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openId, close]);

  return (
    <div className="orientation-flip-zone">
      {openId ? (
        <div
          className="flip-card__backdrop"
          aria-hidden="true"
          onClick={close}
        />
      ) : null}

      <div ref={gridRef} className="offer-grid mt-14">
        {journeyBuildingBlocks.map((block) => (
          <FlipOfferCard
            key={block.id}
            block={block}
            flipped={openId === block.id}
            minHeight={minHeight}
            onToggle={() =>
              setOpenId((current) => (current === block.id ? null : block.id))
            }
          />
        ))}
      </div>

      <SpecialFormatFlipCard
        flipped={openId === journeySpecialFormat.id}
        onToggle={() =>
          setOpenId((current) =>
            current === journeySpecialFormat.id ? null : journeySpecialFormat.id,
          )
        }
      />
    </div>
  );
}
