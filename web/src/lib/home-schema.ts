import { faqEntries } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export function getHomeJsonLd() {
  const { address, url, name, email, phone } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${name}, ${siteConfig.tagline}`,
        description: siteConfig.defaultDescription,
        inLanguage: "de-DE",
      },
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name,
        email,
        telephone: phone,
        jobTitle: "KI-Berater",
        description: siteConfig.defaultDescription,
        url,
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postalCode,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        areaServed: [
          { "@type": "City", name: "Roßdorf" },
          { "@type": "AdministrativeArea", name: "Rhein-Main" },
        ],
        knowsAbout: [
          "Künstliche Intelligenz",
          "EU AI Act",
          "Datenschutz",
          "Prozessoptimierung",
          "KMU",
          "Handwerk",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#service`,
        name: `${name}, KI-Sparring`,
        description: siteConfig.defaultDescription,
        url,
        email,
        telephone: phone,
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          postalCode: address.postalCode,
          addressRegion: address.region,
          addressCountry: address.country,
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
          geoRadius: "80000",
        },
        founder: { "@id": `${url}/#person` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqEntries.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
