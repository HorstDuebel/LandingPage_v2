import type { ReactNode } from "react";
import Link from "next/link";
import { TERMIN_PAGE_PATH } from "@/lib/booking";

const primaryClasses =
  "btn-primary inline-flex min-h-[3.25rem] w-full items-center justify-center px-8 py-3 text-center text-base font-bold leading-snug sm:text-[1.05rem]";

const primaryInlineClasses =
  "btn-primary inline-flex min-h-12 items-center justify-center px-8 py-3 text-center text-base font-semibold leading-snug whitespace-nowrap";

const secondaryClasses =
  "btn-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center px-8 py-3 text-center text-base font-bold leading-snug sm:text-[1.05rem]";

export function PrimaryCtaLink({
  children,
  className = primaryClasses,
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <Link href={TERMIN_PAGE_PATH} className={className}>
      {children}
    </Link>
  );
}

export function PrimaryCtaInline({ children }: { children: ReactNode }) {
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
  className = "text-sm leading-relaxed text-[var(--muted)]",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}
