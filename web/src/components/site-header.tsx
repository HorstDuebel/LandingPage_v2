"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandSignature } from "@/components/brand-signature";

const SCROLL_THRESHOLD = 72;
const HIDE_DELAY_MS = 350;

const NAV_ITEMS = [
  { href: "/#fuer-wen", label: "Für wen" },
  { href: "/#methode", label: "Methode" },
  { href: "/#angebot", label: "Angebot" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#termin", label: "Termin" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLL_THRESHOLD);

      if (y <= SCROLL_THRESHOLD) {
        setRevealed(false);
      } else if (y < lastScrollY.current - 8) {
        showHeader();
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showHeader]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  const isHidden = scrolled && !revealed;

  const headerClass = [
    "site-header",
    scrolled ? "site-header--fixed" : "",
    isHidden ? "site-header--hidden" : "",
    menuOpen ? "site-header--menu-open" : "",
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
          <Link href="/#top" className="site-header-logo" onClick={closeMenu}>
            <BrandSignature variant="header" />
          </Link>

          <button
            type="button"
            className="site-nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-nav-toggle__bar" aria-hidden="true" />
            <span className="site-nav-toggle__bar" aria-hidden="true" />
            <span className="site-nav-toggle__bar" aria-hidden="true" />
          </button>

          <nav className="site-nav site-nav--desktop" aria-label="Hauptnavigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <nav
          id="site-nav-mobile"
          className={`site-nav site-nav--mobile${menuOpen ? " site-nav--mobile-open" : ""}`}
          aria-label="Mobile Navigation"
          hidden={!menuOpen}
        >
          <div className="page-container site-nav--mobile-inner">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link nav-link--mobile"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
