"use client";

import {
  useCallback,
  useEffect,
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
};

function FlipOfferCard({ block, flipped, onToggle }: FlipOfferCardProps) {
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
    <div className={`flip-card${flipped ? " flip-card--open" : ""}`}>
      <div className="flip-card__slot" aria-hidden="true">
        <div className="flip-card__face flip-card__face--front">{front}</div>
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

  const close = useCallback(() => setOpenId(null), []);

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

      <div className="offer-grid mt-14">
        {journeyBuildingBlocks.map((block) => (
          <FlipOfferCard
            key={block.id}
            block={block}
            flipped={openId === block.id}
            onToggle={() =>
              setOpenId((current) => (current === block.id ? null : block.id))
            }
          />
        ))}
      </div>
    </>
  );
}
