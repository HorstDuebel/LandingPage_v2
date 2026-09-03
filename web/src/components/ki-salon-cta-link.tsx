"use client";

import type { ReactNode } from "react";
import { trackCtaClick } from "@/lib/analytics";
import { KI_SALON_INTERVIEW_URL } from "@/lib/ki-salon";

const defaultClasses =
  "btn-primary inline-flex items-center justify-center text-center leading-snug";

export function KiSalonCtaLink({
  children,
  className = defaultClasses,
  trackLabel = "ki_salon_interview",
}: {
  children: ReactNode;
  className?: string;
  trackLabel?: string;
}) {
  return (
    <a
      href={KI_SALON_INTERVIEW_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(trackLabel, KI_SALON_INTERVIEW_URL)}
    >
      {children}
    </a>
  );
}
