"use client";

import { useEffect, useState } from "react";
import { decodeProtectedEmail } from "@/lib/email-obfuscation";

type ProtectedEmailProps = {
  className?: string;
};

/**
 * Zeigt die Kontakt-E-Mail lesbar an, ohne sie im HTML-Quelltext zu hinterlegen.
 */
export function ProtectedEmail({ className }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(decodeProtectedEmail());
  }, []);

  if (!email) {
    return (
      <span className={className} aria-hidden="true">
        &nbsp;
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
