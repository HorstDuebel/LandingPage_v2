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
      <div className="flip-card__slot" aria-hidden="true">
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
    <>
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
    </>
  );
}
