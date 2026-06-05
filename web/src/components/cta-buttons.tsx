import type { ReactNode } from "react";
import Link from "next/link";
import { TERMIN_PAGE_PATH } from "@/lib/booking";

const primaryClasses =
  "inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center text-base font-bold leading-snug text-[var(--text)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-orange)_35%,black)] hover:brightness-[0.98] active:brightness-[0.96] sm:text-lg";

const primaryInlineClasses =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-center text-base font-semibold leading-snug text-[var(--text)] shadow-[var(--shadow-soft)] ring-1 ring-[color-mix(in_srgb,var(--brand-orange)_35%,black)] hover:brightness-[0.98] active:brightness-[0.96]";

const secondaryClasses =
  "inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-[color-mix(in_srgb,var(--brand-gray)_55%,white)] bg-[var(--surface)] px-6 py-3 text-center text-base font-bold leading-snug text-[var(--text)] hover:bg-[var(--surface-2)] sm:text-lg";

export function PrimaryCtaLink({
  children,
  className = primaryClasses,
  fullWidth = true,
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <Link
      href={TERMIN_PAGE_PATH}
      className={`${className}${fullWidth ? "" : ""}`}
    >
      {children}
    </Link>
  );
}

export function PrimaryCtaInline({ children }: { children: React.ReactNode }) {
  return (
    <Link href={TERMIN_PAGE_PATH} className={primaryInlineClasses}>
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
    <a href={href} className={secondaryClasses}>
      {children}
    </a>
  );
}

export function ClickTrigger({
  children,
  className = "text-sm leading-6 text-[var(--muted)]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}
