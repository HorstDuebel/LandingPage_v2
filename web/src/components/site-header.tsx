"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandSignature } from "@/components/brand-signature";

const SCROLL_THRESHOLD = 72;
const HIDE_DELAY_MS = 350;

type NavItem = {
  href: string;
  label: string;
  /** In Desktop-Leiste sichtbar (Default: true) */
  desktop?: boolean;
  /** Als CTA-Button in der Desktop-Leiste */
  cta?: boolean;
};

/** Variante B: Desktop schlank + KI-Salon-CTA; Mobile vollständiges Burger-Menü */
const NAV_ITEMS: readonly NavItem[] = [
  { href: "/#nutzen", label: "Nutzen" },
  { href: "/#angebot", label: "Angebot" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#haltung", label: "Haltung" },
  { href: "/#so-arbeiten-wir", label: "So arbeiten wir", desktop: false },
  { href: "/#termin", label: "Termin" },
  { href: "/ki-salon", label: "KI-Salon", cta: true },
  { href: "/faq", label: "FAQ", desktop: false },
];

const DOWNLOAD_NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Zur Startseite", cta: true },
];

type SiteHeaderProps = {
  variant?: "default" | "download";
};

function isHashNav(href: string): href is `/#${string}` {
  return href.startsWith("/#");
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const allNavItems = variant === "download" ? DOWNLOAD_NAV_ITEMS : NAV_ITEMS;
  const desktopNavItems =
    variant === "download"
      ? DOWNLOAD_NAV_ITEMS
      : NAV_ITEMS.filter((item) => item.desktop !== false);
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

      if (!el) {
        closeMenu();
        window.location.assign(href);
        return;
      }

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
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
    window.scrollTo({ top, behavior: "auto" });
    lastScrollY.current = window.scrollY;
  }, []);

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

  const navLinkClass = (item: NavItem, mobile = false) =>
    [
      "nav-link",
      mobile ? "nav-link--mobile" : "",
      item.cta && (variant === "download" || !mobile)
        ? variant === "download"
          ? "nav-link--home-cta"
          : "nav-link--ki-salon-cta"
        : "",
      item.cta && mobile && variant !== "download" ? "nav-link--emphasized" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const renderNavItem = (item: NavItem, mobile: boolean) => {
    const className = navLinkClass(item, mobile);

    if (isHashNav(item.href)) {
      return (
        <a
          key={item.href}
          href={item.href}
          className={className}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(item.href);
          }}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className={className}
        onClick={mobile ? closeMenu : undefined}
      >
        {item.label}
      </Link>
    );
  };

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

            <nav
              className="site-nav site-nav--desktop"
              aria-label="Hauptnavigation"
            >
              {desktopNavItems.map((item) => renderNavItem(item, false))}
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
            {allNavItems.map((item) => renderNavItem(item, true))}
          </div>
        </nav>
      </header>
    </>
  );
}
