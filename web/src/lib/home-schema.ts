import { allFaqEntries } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

const businessDescription =
  "KI-Beratung und KI-Schulungen für Betriebe aus Handwerk und Mittelstand in Darmstadt, Südhessen und Rhein-Main.";

const areaServed = [
  { "@type": "City" as const, name: "Darmstadt" },
  { "@type": "City" as const, name: "Roßdorf" },
  {
    "@type": "AdministrativeArea" as const,
    name: "Landkreis Darmstadt-Dieburg",
  },
  { "@type": "City" as const, name: "Frankfurt am Main" },
  { "@type": "City" as const, name: "Offenbach am Main" },
  { "@type": "City" as const, name: "Wiesbaden" },
  { "@type": "City" as const, name: "Mainz" },
  { "@type": "City" as const, name: "Aschaffenburg" },
  { "@type": "AdministrativeArea" as const, name: "Landkreis Bergstraße" },
  { "@type": "AdministrativeArea" as const, name: "Groß-Gerau" },
];

export function getHomeJsonLd() {
  const { address, url, name, phone, linkedinUrl } = siteConfig;
  const businessId = `${url}/#business`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: `${url}/`,
        name: `${name}, ${siteConfig.tagline}`,
        description: siteConfig.defaultDescription,
        inLanguage: "de-DE",
        publisher: { "@id": businessId },
      },
      {
        "@type": ["Person", "LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: "Frank Vullhorst",
        jobTitle: "KI-Berater",
        description: businessDescription,
        url: `${url}/`,
        telephone: phone,
        image: `${url}/frank.webp`,
        logo: `${url}/brand/260715_SignaturFrank.png`,
        sameAs: [linkedinUrl],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: phone,
          contactType: "customer service",
          availableLanguage: "German",
          url: `${url}/impressum/`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postalCode,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        areaServed,
      },
    ],
  };
}

export function getFaqJsonLd() {
  const { url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}/faq/#faq`,
    mainEntity: allFaqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getKiSchulungBreadcrumbJsonLd() {
  const { url } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "KI-Schulung",
        item: `${url}/ki-schulung/`,
      },
    ],
  };
}
