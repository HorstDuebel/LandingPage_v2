import Link from "next/link";
import type { ReactNode } from "react";

export { SiteHeader } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <p className="section-kicker">Ich bin erreichbar, in Roßdorf und überall sonst:</p>
        <h2 className="contact-hero mt-2">
          Rufen Sie an. Oder schreiben. Beides funktioniert.
        </h2>
        <a href="tel:+491726689960" className="contact-link">
          +49 (0)172 6689960
        </a>
        <a
          href="mailto:Info@FrankVullhorst.de"
          className="contact-link !text-[clamp(1rem,2.5vw,1.375rem)]"
        >
          Info@FrankVullhorst.de
        </a>

        <div className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <Link href="/impressum" className="nav-link !text-sm">
            Impressum
          </Link>
          <Link href="/datenschutz" className="nav-link !text-sm">
            Datenschutz
          </Link>
          <span className="ml-auto text-xs">
            © 2026 Frank Vullhorst     KI. Sicher. Sinnvoll. Strategisch.
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  kicker,
  title,
  titleLine2,
  children,
  centered = false,
  wide = false,
}: {
  kicker: string;
  title: ReactNode;
  titleLine2?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
  wide?: boolean;
}) {
  const titleBlock = (
    <>
      <p className="section-kicker">{kicker}</p>
      <h2 className={`section-title ${wide ? "section-title--two-lines" : ""}`}>
        <span className="display-title-line">{title}</span>
        {titleLine2 ? (
          <span className="display-title-line">{titleLine2}</span>
        ) : null}
      </h2>
    </>
  );

  const widthClass = centered ? " mx-auto" : "";

  return (
    <div className={centered ? "text-center" : ""}>
      {wide ? titleBlock : <div className={widthClass}>{titleBlock}</div>}
      {children ? (
        <p className={`section-lead mt-6${widthClass}`}>{children}</p>
      ) : null}
    </div>
  );
}
