"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandSignature } from "@/components/brand-signature";

const SCROLL_THRESHOLD = 72;
const HIDE_DELAY_MS = 350;

const NAV_ITEMS = [
  { href: "/#angebot", label: "Angebot" },
  { href: "/#so-arbeiten-wir", label: "So arbeiten wir" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#nutzen", label: "Nutzen" },
  { href: "/#termin", label: "Termin" },
  { href: "/faq", label: "FAQ" },
] as const;

const DOWNLOAD_NAV_ITEMS = [{ href: "/", label: "Zur Startseite" }] as const;

type SiteHeaderProps = {
  variant?: "default" | "download";
};

function isHashNav(href: string): href is `/#${string}` {
  return href.startsWith("/#");
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const navItems = variant === "download" ? DOWNLOAD_NAV_ITEMS : NAV_ITEMS;
  const [scrolled, setScrolled] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const lockHeaderRef = useRef(false);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const showHeader = useCallback(() => {
    if (lockHeaderRef.current) return;
    clearHideTimer();
    setRevealed(true);
  }, [clearHideTimer]);

  const scheduleHide = useCallback(() => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => setRevealed(false), HIDE_DELAY_MS);
  }, [clearHideTimer]);

  const hideHeaderNow = useCallback(() => {
    clearHideTimer();
    setRevealed(false);
  }, [clearHideTimer]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const scrollToSection = useCallback(
    (href: string) => {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (!el) return;

      closeMenu();
      lockHeaderRef.current = true;
      hideHeaderNow();

      const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      window.scrollTo({ top, behavior: "auto" });
      window.history.pushState(null, "", href);

      window.setTimeout(() => {
        lockHeaderRef.current = false;
        lastScrollY.current = window.scrollY;
      }, 400);
    },
    [closeMenu, hideHeaderNow],
  );

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
    variant === "download" ? "site-header--download" : "",
    scrolled ? "site-header--fixed" : "",
    isHidden ? "site-header--hidden" : "",
    menuOpen ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navLinkClass = (mobile = false) =>
    [
      "nav-link",
      mobile ? "nav-link--mobile" : "",
      variant === "download" ? "nav-link--home-cta" : "",
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
        <div className="page-container">
          <div
            className={
              variant === "download"
                ? "download-layout__column site-header-inner site-header-inner--download"
                : "site-header-inner"
            }
          >
          <Link
            href="/"
            className="site-header-logo"
            aria-label="Zum Seitenanfang"
            onClick={(event) => {
              closeMenu();
              if (window.location.pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (window.location.hash) {
                  window.history.replaceState(null, "", "/");
                }
              }
            }}
          >
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
            {navItems.map((item) =>
              isHashNav(item.href) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkClass()}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={navLinkClass()}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          </div>
        </div>

        <nav
          id="site-nav-mobile"
          className={`site-nav site-nav--mobile${menuOpen ? " site-nav--mobile-open" : ""}`}
          aria-label="Mobile Navigation"
          hidden={!menuOpen}
        >
          <div className="page-container site-nav--mobile-inner">
            {navItems.map((item) =>
              isHashNav(item.href) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(true)}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(true)}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
