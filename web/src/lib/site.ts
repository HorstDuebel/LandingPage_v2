/** Zentrale Site-Konfiguration für SEO, Canonical URLs und Analytics */

export const siteConfig = {
  name: "Frank Vullhorst",
  shortName: "Frank Vullhorst",
  tagline: "ki: sicher strategisch sinnvoll",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://frankvullhorst.de",
  locale: "de_DE",
  defaultTitle:
    "KI Beratung Darmstadt: KI-Strategie für KMU und Handwerk | Frank Vullhorst",
  fullTitle:
    "KI Beratung Darmstadt: KI-Strategie für KMU und Handwerk | Frank Vullhorst",
  defaultDescription:
    "KI-Kompetenz und KI-Strategie für KMU und Handwerk in Darmstadt und Rhein-Main. EU AI Act pragmatisch umgesetzt. Kostenfreies 30-Minuten-Erstgespräch.",
  ogDescription:
    "KI-Kompetenz und KI-Strategie für KMU und Handwerk in Darmstadt und Rhein-Main. EU AI Act pragmatisch umgesetzt. Kostenfreies 30-Minuten-Erstgespräch.",
  phone: "+49-172-6689960",
  /** LinkedIn-Profil-URL */
  linkedinUrl: "https://www.linkedin.com/in/frankvullhorst/",
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
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
];
