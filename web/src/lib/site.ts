/** Zentrale Site-Konfiguration für SEO, Canonical URLs und Analytics */

export const siteConfig = {
  name: "Frank Vullhorst",
  shortName: "Frank Vullhorst",
  tagline: "KI. Sicher. Sinnvoll. Strategisch.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://frank-vu.netlify.app",
  locale: "de_DE",
  defaultTitle: "KI-Beratung für KMU & Handwerk, KI. Sicher. Sinnvoll. Strategisch.",
  fullTitle:
    "KI-Beratung für KMU & Handwerk | Frank Vullhorst, KI. Sicher. Sinnvoll. Strategisch.",
  defaultDescription:
    "KI-Sparring für Inhaber*innen und Geschäftsführer*innen in KMU und Handwerk: KI sicher einführen, EU AI Act pragmatisch umsetzen, kostenloses Erstgespräch in Roßdorf und Rhein-Main.",
  ogDescription:
    "Praxisnah, nachvollziehbar und an EU AI Act sowie DSGVO orientiert, KI-Beratung für KMU und Handwerk.",
  email: "Frank.Vullhorst@t-online.de",
  phone: "+49-172-6689960",
  address: {
    street: "Claudiusweg 9",
    city: "Roßdorf",
    postalCode: "64380",
    region: "Hessen",
    country: "DE",
  },
  geo: {
    latitude: 49.8722,
    longitude: 8.7467,
  },
} as const;

export const siteRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/termin", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
];
