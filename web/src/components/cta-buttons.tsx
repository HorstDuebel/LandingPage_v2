"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";
import { TERMIN_PAGE_PATH } from "@/lib/booking";

const primaryClasses =
  "btn-primary inline-flex items-center justify-center text-center leading-snug";

const primaryInlineClasses =
  "btn-primary inline-flex items-center justify-center text-center text-sm font-semibold leading-snug mt-4";

export function PrimaryCtaLink({
  children,
  className = primaryClasses,
  trackLabel = "primary_cta",
}: {
  children: ReactNode;
  className?: string;
  trackLabel?: string;
}) {
  return (
    <Link
      href={TERMIN_PAGE_PATH}
      className={className}
      onClick={() => trackCtaClick(trackLabel, TERMIN_PAGE_PATH)}
    >
      {children}
    </Link>
  );
}

export function PrimaryCtaInline({
  children,
  trackLabel = "offer_inline_cta",
}: {
  children: ReactNode;
  trackLabel?: string;
}) {
  return (
    <Link
      href={TERMIN_PAGE_PATH}
      className={primaryInlineClasses}
      onClick={() => trackCtaClick(trackLabel, TERMIN_PAGE_PATH)}
    >
      {children}
    </Link>
  );
}

export function SecondaryCtaLink({
  children,
  href = "#angebot",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a href={href} className="btn-secondary inline-flex items-center justify-center">
      {children}
    </a>
  );
}

export function ClickTrigger({
  children,
  className = "microcopy",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}
