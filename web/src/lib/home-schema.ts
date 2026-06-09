import { siteConfig } from "@/lib/site";

const faqEntries = [
  {
    question: "Was passiert im Erstgespräch?",
    answer:
      "Wir schauen gemeinsam auf Ihre Ausgangslage: Was läuft, was fehlt, wo KI heute helfen kann — und was Sie noch lassen sollten. Kein Pitch, keine Agenda.",
  },
  {
    question: "Muss ich mich vorbereiten?",
    answer:
      "Nein. Es hilft, grob zu wissen: Welche Aufgaben kosten gerade Zeit? Wo wird KI schon genutzt — bewusst oder unbewusst? Mehr braucht es nicht.",
  },
  {
    question: "Was ist der AI-ISCA Audit?",
    answer:
      "Eine strukturierte Bestandsaufnahme: Wo wird KI genutzt? Was fehlt beim Datenschutz? Wo liegt Compliance-Risiko? Ergebnis: eine klare, dokumentierte Grundlage für Entscheidungen.",
  },
  {
    question: "Wie halte ich es mit Datenschutz und EU AI Act?",
    answer:
      "Pragmatisch: klare Regeln, passende Schutzstufe, kein Bürokratie-Overkill. Fachbegriffe erkläre ich so, dass sie im Betrieb ankommen.",
  },
  {
    question: "Für wen ist das nichts?",
    answer:
      "Wenn Sie eine Tool-Demo wollen oder Berater suchen, die Ihnen sagen, was trendy ist. Hier geht es um echte, umsetzbare Entlastung im Betriebsalltag.",
  },
  {
    question: "Was kommt nach dem Erstgespräch?",
    answer:
      "Je nach Situation: ein Potenzial-Scan, ein AI-ISCA Audit oder Modul 1 des AI Literacy Workshops. Ich empfehle das, was zu Ihrem Betrieb passt — kein Standardpaket.",
  },
];

export function getHomeJsonLd() {
  const { address, url, name, email, phone } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: `${name} – ${siteConfig.tagline}`,
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
          "KMU",
          "Handwerk",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#service`,
        name: `${name} – KI-Sparring`,
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
