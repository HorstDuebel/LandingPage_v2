/** Analytics-Vorbereitung, aktiv nur mit NEXT_PUBLIC_ANALYTICS_ENABLED=true */

export type AnalyticsEventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    _paq?: Array<Array<string | number>>;
  }
}

export function isAnalyticsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
}

/** Event senden, No-Op solange Analytics deaktiviert ist */
export function trackEvent(name: string, props?: AnalyticsEventProps): void {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) return;

  const category = String(props?.category ?? "engagement");
  const action = name;
  const label = props?.label != null ? String(props.label) : undefined;

  if (window._paq) {
    const eventArgs: Array<string | number> = ["trackEvent", category, action];
    if (label) eventArgs.push(label);
    window._paq.push(eventArgs);
  }

  window.dispatchEvent(
    new CustomEvent("site-analytics", {
      detail: { name, props },
    }),
  );
}

export function trackCtaClick(
  label: string,
  destination: string,
): void {
  trackEvent("cta_click", {
    category: "CTA",
    label,
    destination,
  });
}
