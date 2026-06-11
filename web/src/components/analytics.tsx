"use client";

import Script from "next/script";
import { isAnalyticsEnabled } from "@/lib/analytics";

/**
 * Matomo-Skript, wird nur geladen wenn NEXT_PUBLIC_ANALYTICS_ENABLED=true
 * und NEXT_PUBLIC_MATOMO_URL + NEXT_PUBLIC_MATOMO_SITE_ID gesetzt sind.
 */
export function Analytics() {
  if (!isAnalyticsEnabled()) return null;

  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL?.replace(/\/$/, "");
  const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

  if (!matomoUrl || !siteId) return null;

  return (
    <Script id="matomo-init" strategy="afterInteractive">
      {`
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="${matomoUrl}/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '${siteId}']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `}
    </Script>
  );
}
