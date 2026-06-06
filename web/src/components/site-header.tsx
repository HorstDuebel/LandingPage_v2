"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 72;
const HIDE_DELAY_MS = 350;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const showHeader = useCallback(() => {
    clearHideTimer();
    setRevealed(true);
  }, [clearHideTimer]);

  const scheduleHide = useCallback(() => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => setRevealed(false), HIDE_DELAY_MS);
  }, [clearHideTimer]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);

      if (y <= SCROLL_THRESHOLD) {
        setRevealed(false);
      } else if (y < lastScrollY.current - 8) {
        // Mobile / Touch-Fallback: leicht nach oben scrollen → Header zeigen
        showHeader();
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showHeader]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  const isHidden = scrolled && !revealed;

  const headerClass = [
    "site-header",
    scrolled ? "site-header--fixed" : "",
    isHidden ? "site-header--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {scrolled ? (
        <div
          className="site-header-hotzone"
          aria-hidden="true"
          onMouseEnter={showHeader}
        />
      ) : null}

      <header
        className={headerClass}
        onMouseEnter={showHeader}
        onMouseLeave={scrolled ? scheduleHide : undefined}
        onFocusCapture={showHeader}
        onBlurCapture={(event) => {
          if (
            scrolled &&
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            scheduleHide();
          }
        }}
      >
        <div className="page-container site-header-inner">
          <Link href="/#top" className="site-header-logo">
            <span className="site-header-logo-inner">
              <span className="site-header-name-line">
                <span className="site-header-name-word">Frank</span>
                <span className="site-header-name-between" aria-hidden="true" />
                <span className="site-header-name-word">Vullhorst</span>
              </span>
              <span
                className="site-header-tagline"
                aria-label="KI, Sicher, Sinnvoll, Strategisch"
              >
                <span>KI</span>
                <span aria-hidden="true">•</span>
                <span>Sicher</span>
                <span aria-hidden="true">•</span>
                <span>Sinnvoll</span>
                <span aria-hidden="true">•</span>
                <span>Strategisch</span>
              </span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-5 sm:gap-7">
            {[
              { href: "/#fuer-wen", label: "Für wen" },
              { href: "/#angebot", label: "Angebot" },
              { href: "/#methode", label: "Methode" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#termin", label: "Termin" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
