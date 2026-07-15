/** Zentrale Site-Konfiguration für SEO, Canonical URLs und Analytics */

export const siteConfig = {
  name: "Frank Vullhorst",
  shortName: "Frank Vullhorst",
  tagline: "ki: sicher strategisch sinnvoll",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://frankvullhorst.de",
  locale: "de_DE",
  defaultTitle: "KI-Beratung für KMU & Handwerk, ki: sicher strategisch sinnvoll",
  fullTitle:
    "KI-Beratung für KMU & Handwerk | Frank Vullhorst, ki: sicher strategisch sinnvoll",
  defaultDescription:
    "KI-Sparring für Inhaber*innen und Geschäftsführer*innen in KMU und Handwerk: KI sicher einführen, EU AI Act pragmatisch umsetzen, kostenloses Erstgespräch in Roßdorf und Rhein-Main.",
  ogDescription:
    "Praxisnah, nachvollziehbar und an EU AI Act sowie DSGVO orientiert, KI-Beratung für KMU und Handwerk.",
  email: "Info@FrankVullhorst.de",
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
