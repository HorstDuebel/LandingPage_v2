import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProtectedEmail } from "@/components/protected-email";
import { BrandSignature } from "@/components/brand-signature";
import { kiSalonContact } from "@/lib/ki-salon";

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

type SiteFooterProps = {
  variant?: "default" | "ki-salon";
};

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const isKiSalon = variant === "ki-salon";
  const [susanne, frank] = kiSalonContact.hosts;

  return (
    <footer className="site-footer">
      <div className="page-container">
        {isKiSalon ? null : (
          <BrandSignature variant="footer" className="mb-12" />
        )}

        {isKiSalon ? (
          <div className="ki-salon-contact-block">
            <SectionKicker>{kiSalonContact.kicker}</SectionKicker>
            <div className="ki-salon-contact-align">
              <h2 className="contact-hero mt-2">{kiSalonContact.headline}</h2>

              <div className="ki-salon-contact">
                <div className="ki-salon-contact__col">
                  <Image
                    src={susanne.logo}
                    alt={susanne.logoAlt}
                    width={560}
                    height={440}
                    className="ki-salon-contact__logo"
                  />
                  <a href={susanne.phoneHref} className="contact-link ki-salon-contact__link">
                    {susanne.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${susanne.email}`}
                    className="contact-link ki-salon-contact__link"
                  >
                    {susanne.email}
                  </a>
                </div>

                <div className="ki-salon-contact__col ki-salon-contact__col--frank">
                  <BrandSignature
                    variant="section"
                    className="ki-salon-contact__signature"
                  />
                  <a href={frank.phoneHref} className="contact-link ki-salon-contact__link">
                    {frank.phoneDisplay}
                  </a>
                  <ProtectedEmail className="contact-link ki-salon-contact__link" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <SectionKicker>
              Ich bin erreichbar, in Roßdorf und überall sonst:
            </SectionKicker>
            <h2 className="contact-hero mt-2">
              Rufen Sie an. Oder schreiben. Beides funktioniert.
            </h2>
            <a href="tel:+491726689960" className="contact-link">
              +49 (0)172 6689960
            </a>
            <ProtectedEmail className="contact-link !text-[clamp(1rem,2.5vw,1.375rem)]" />
          </>
        )}

        <div className="site-footer-legal">
          <p className="site-footer-legal__note">
            KI-Beratung und KI-Schulungen für Betriebe in Darmstadt, Frankfurt,
            Wiesbaden und ganz Hessen.
          </p>
          <div className="site-footer-legal__row">
            <nav
              className="site-footer-legal__links"
              aria-label="Rechtliche und weiterführende Seiten"
            >
              <Link href="/ki-schulung" className="site-footer-legal__link">
                KI-Schulung für Mitarbeiter
              </Link>
              <span className="site-footer-legal__sep" aria-hidden="true">
                ·
              </span>
              <Link href="/faq" className="site-footer-legal__link">
                FAQ
              </Link>
              <span className="site-footer-legal__sep" aria-hidden="true">
                ·
              </span>
              <Link href="/impressum" className="site-footer-legal__link">
                Impressum
              </Link>
              <span className="site-footer-legal__sep" aria-hidden="true">
                ·
              </span>
              <Link href="/datenschutz" className="site-footer-legal__link">
                Datenschutz
              </Link>
              <span className="site-footer-legal__sep" aria-hidden="true">
                ·
              </span>
              <span className="site-footer-legal__copy">
                © 2026 Frank Vullhorst · ki: sicher strategisch sinnvoll
              </span>
            </nav>
          </div>
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
