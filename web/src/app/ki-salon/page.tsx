import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { KiSalonCtaLink } from "@/components/ki-salon-cta-link";
import { KiSalonTimeline } from "@/components/ki-salon-timeline";
import { SectionKicker, SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  kiSalonAudience,
  kiSalonBenefits,
  kiSalonFormat,
  kiSalonHero,
  kiSalonHosts,
  kiSalonMeta,
  kiSalonPartner,
  kiSalonPricing,
  kiSalonProblem,
  kiSalonTimeline,
} from "@/lib/ki-salon";

export const metadata: Metadata = {
  title: kiSalonMeta.title,
  description: kiSalonMeta.description,
  alternates: { canonical: "/ki-salon" },
  openGraph: {
    title: `${kiSalonMeta.title} | Frank Vullhorst`,
    description: kiSalonMeta.description,
    url: "/ki-salon",
  },
  twitter: {
    title: `${kiSalonMeta.title} | Frank Vullhorst`,
    description: kiSalonMeta.description,
  },
};

export default function KiSalonPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main id="top" className="ki-salon-page landing-page flex-1">
        {/* 1. Hero */}
        <section className="hero-section hero-pattern section-block bg-[var(--surface-lime)] pt-28 md:pt-32">
          <div className="page-container">
            <div className="ki-salon-hero__intro">
              <AnimateIn className="ki-salon-hero__kicker">
                <SectionKicker>{kiSalonHero.kicker}</SectionKicker>
              </AnimateIn>
              <div className="ki-salon-partner">
                <a
                  href={kiSalonPartner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={kiSalonPartner.imageSrc}
                    alt={kiSalonPartner.alt}
                    className="ki-salon-partner__logo"
                    decoding="async"
                  />
                </a>
              </div>
            </div>

            <AnimateIn>
              <h1 className="display-title mt-2">
                <span className="display-title-line">{kiSalonHero.headline}</span>
              </h1>
              <p className="section-lead mt-6">{kiSalonHero.lead}</p>
            </AnimateIn>
          </div>
        </section>

        {/* 2. Die Herausforderung */}
        <section id="problem" className="section-block bg-[var(--surface-muted)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonProblem.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonProblem.headline}</span>
              </h2>
            </AnimateIn>

            <div className="mt-10 space-y-6">
              {kiSalonProblem.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body-text">
                  {paragraph}
                </p>
              ))}
              <blockquote className="quote-block">
                <p>{kiSalonProblem.quote}</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 3. Das Format */}
        <section id="format" className="section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonFormat.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonFormat.headline}</span>
              </h2>
            </AnimateIn>

            <p className="section-title mt-8 !text-[clamp(1.125rem,2.5vw,1.5rem)] !font-medium">
              {kiSalonFormat.highlight}
            </p>

            <p className="body-text mt-6">{kiSalonFormat.body}</p>

            <ul className="ki-salon-stats" aria-label="Format-Kennzahlen">
              {kiSalonFormat.stats.map((stat) => (
                <li key={stat} className="ki-salon-stats__item">
                  {stat}
                </li>
              ))}
            </ul>

            <p className="body-text-note mt-4">{kiSalonFormat.note}</p>
          </div>
        </section>

        {/* 4. Was Sie mitnehmen */}
        <section id="mitnehmen" className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonBenefits.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonBenefits.headline}</span>
              </h2>
            </AnimateIn>

            <ul className="mt-10 list-disc space-y-3 pl-6 body-text">
              {kiSalonBenefits.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="offer-card__title mt-10">{kiSalonBenefits.slogan}</p>
          </div>
        </section>

        {/* 5. Für wen */}
        <section id="fuer-wen" className="section-block bg-[var(--surface-lime)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonAudience.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonAudience.headline}</span>
              </h2>
            </AnimateIn>

            <div className="mt-8 space-y-5">
              {kiSalonAudience.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="body-text-note mt-8">{kiSalonAudience.note}</p>
          </div>
        </section>

        {/* 6. Session-Ablauf */}
        <section id="ablauf" className="section-block bg-[var(--surface-teal)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonTimeline.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonTimeline.headline}</span>
              </h2>
            </AnimateIn>

            <div className="mt-12">
              <KiSalonTimeline />
            </div>
          </div>
        </section>

        {/* 7. Zwei Perspektiven */}
        <section id="team" className="section-block bg-[var(--surface-warm)]">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonHosts.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonHosts.headline}</span>
              </h2>
            </AnimateIn>

            <div className="mt-12 space-y-16">
              {kiSalonHosts.hosts.map((host, i) => (
                <AnimateIn key={host.name} delay={i * 80}>
                  <div
                    className={
                      host.image
                        ? "about-layout ki-salon-host"
                        : "ki-salon-host ki-salon-host--text-only"
                    }
                  >
                    {host.image ? (
                      <div className="about-portrait">
                        <Image
                          src={host.image}
                          alt={host.name}
                          width={1254}
                          height={1254}
                          className="h-auto w-full"
                          sizes="(min-width: 900px) 22.25rem, (min-width: 700px) 38vw, 70vw"
                        />
                      </div>
                    ) : null}

                    <div className={host.image ? "about-copy" : ""}>
                      <h3 className="offer-card__title">{host.name}</h3>
                      <p className="trust-badge mt-2">{host.role}</p>
                      <p className="body-text mt-4">{host.bio}</p>
                      <a
                        href={host.website}
                        className="trust-link mt-4 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {host.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </a>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Anfrage / CTA */}
        <section id="anfrage" className="final-cta section-block">
          <div className="page-container">
            <AnimateIn>
              <SectionKicker>{kiSalonPricing.kicker}</SectionKicker>
              <h2 className="section-title">
                <span className="display-title-line">{kiSalonPricing.headline}</span>
              </h2>
            </AnimateIn>

            <p className="section-lead mt-8">{kiSalonPricing.body}</p>

            <KiSalonCtaLink className="btn-primary mt-8 !w-auto">
              {kiSalonPricing.cta}
            </KiSalonCtaLink>
          </div>
        </section>
      </main>

      <SiteFooter variant="ki-salon" />
    </div>
  );
}
