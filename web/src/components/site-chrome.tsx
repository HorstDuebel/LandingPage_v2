import Link from "next/link";
import type { ReactNode } from "react";

export { SiteHeader } from "@/components/site-header";

export function SectionKicker({ children }: { children: string }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <div
        className="w-5 shrink-0"
        style={{ height: "2px", background: "var(--brand-orange)" }}
        aria-hidden="true"
      />
      <p className="section-kicker !mb-0 text-xs uppercase tracking-widest">
        {children}
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <SectionKicker>Ich bin erreichbar, in Roßdorf und überall sonst:</SectionKicker>
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

        <div className="site-footer-legal">
          <div className="site-footer-legal__links">
            <Link href="/impressum" className="site-footer-legal__link">
              Impressum
            </Link>
            <Link href="/datenschutz" className="site-footer-legal__link">
              Datenschutz
            </Link>
          </div>
          <p className="site-footer-legal__copy">
            © 2026 Frank Vullhorst · ki: sicher strategisch sinnvoll
          </p>
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
      <SectionKicker>{kicker}</SectionKicker>
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
