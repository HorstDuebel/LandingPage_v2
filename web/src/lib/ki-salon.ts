/** KI-Salon: Inhalte aus Flyer 29.09.2026, Sie-Form, Single Source of Truth */

export const KI_SALON_INTERVIEW_URL =
  "https://ki-salon-fragen.netlify.app/" as const;

export const kiSalonMeta = {
  title: "KI-Salon: Klarheit statt Dauer-KI-Rauschen",
  description:
    "Vertraulicher Gesprächsraum für Menschen in Verantwortung: 6 Sessions in 6 Monaten, max. 10 Teilnehmende, im Atelier Löwentor in Darmstadt.",
} as const;

export const kiSalonHero = {
  kicker: "KI-Salon",
  headline: "Klarheit statt Dauer-KI-Rauschen.",
  lead:
    "Ein Gesprächsformat für Menschen in Verantwortung, die KI nicht nur technisch betrachten, sondern besser verstehen möchten, was sie für das eigene Umfeld und die Menschen darin bedeutet.",
} as const;

export const kiSalonPartner = {
  href: "https://www.loewentor.de/",
  imageSrc: "/powered-by-atelier-loewentor.png",
  imageWidth: 747,
  imageHeight: 130,
  alt: "powered by Atelier Löwentor",
  /**
   * BW-Datei (747×130) hat mehr Leerraum als die farbige Originalversion (615×73).
   * Breite so gewählt, dass die sichtbare Schrift wie auf ki-salon-fragen.netlify.app wirkt.
   */
  displayWidth: 320,
  displayWidthMobile: 250,
} as const;

export const kiSalonProblem = {
  kicker: "Die Herausforderung",
  headline:
    "Wie verändert KI das, was Ihre Arbeit, Ihr Unternehmen besonders macht?",
  paragraphs: [
    "Die meisten beantworten diese Frage allein, weil der Overload des Tagesgeschäfts keinen Raum lässt, sie wirklich zu durchdenken. Der KI-Salon ist ein geschützter Raum, den Entscheiderinnen und Entscheider dafür nutzen können.",
  ],
  quote:
    "KI nicht nur als Werkzeug betrachten, sondern als Veränderung, die auch Menschen und Zusammenarbeit betrifft.",
} as const;

export const kiSalonFormat = {
  kicker: "Das Angebot",
  headline: "Der KI-Salon: ein neues Format.",
  highlight: "Kein Vortrag. Keine Schulung. Keine Tool-Demo.",
  body:
    "Der KI-Salon ist ein fester, vertraulicher Gesprächsraum für Menschen in Verantwortung. Sie bringen reale Fragen und Situationen aus Ihrem Bereich mit. Wir ordnen ein, hinterfragen, spiegeln und entwickeln gemeinsam tragfähige Standpunkte.",
  stats: [
    "6 Monate",
    "6 Sessions",
    "max. 10 Personen",
    "90 Minuten",
    "monatlich",
    "Atelier Löwentor, Darmstadt",
  ],
  note: [
    "Eine verbindliche Gruppe. Je 90 Minuten, monatlich im Atelier Löwentor in Darmstadt",
    "(mind. 4× in Präsenz, 2× online möglich).",
  ],
} as const;

export const kiSalonBenefits = {
  kicker: "Was Sie mitnehmen",
  headline:
    "Ein Podcast gibt Ihnen Wissen. Der KI-Salon gibt Ihnen dazu Haltung, belastbare Standpunkte und Sicherheit.",
  items: [
    "Klare Sprache für KI-Gespräche, intern wie extern.",
    "Fundierte Einordnung Ihrer konkreten Herausforderungen.",
    "Orientierung: Was KI kann, was sie darf, was sie mit uns macht und was daraus entstehen kann.",
    "Strategische Klarheit: Was heute entschieden werden sollte und wo bewusst was offenbleiben darf.",
    "Konkrete Impulse für die Arbeit am Unternehmen, um es stabil in die Industrie 5.0 zu führen.",
  ],
  slogan: "Kern bewahren. Wandel verstehen. Zukunft gestalten.",
} as const;

export const kiSalonAudience = {
  kicker: "Für wen",
  headline: "Für Menschen, die Verantwortung tragen und etwas zu sagen haben.",
  paragraphs: [
    "Mit Erfahrung, eigener Haltung und Neugier auf andere Perspektiven.",
    "Für alle, die KI nicht nur beobachten, sondern einordnen, hinterfragen und mitgestalten wollen.",
  ],
  note: "Kuratiert: maximal 10 Menschen, maximal zwei aus derselben Branche.",
} as const;

export type KiSalonTimelineStep = {
  n: string;
  title: string;
  duration: string;
  text: string;
};

export const kiSalonTimeline = {
  kicker: "Session-Ablauf",
  headline: "90 Minuten, klar strukturiert",
  steps: [
    {
      n: "1",
      title: "Ankommen",
      duration: "10 Min",
      text: "Wo stehen Sie gerade? Was hat sich seit dem letzten Salon verändert?",
    },
    {
      n: "2",
      title: "Resonanzfunke",
      duration: "5 bis 10 Min",
      text: "Ein Gedanke, eine Beobachtung oder aktuelle Entwicklung öffnet das Thema.",
    },
    {
      n: "3",
      title: "Gesprächsraum",
      duration: "60 Min",
      text: "Moderierter Dialog mit Leitfragen. Ein realer Fall aus der Gruppe. Fragen, Spiegeln, Widerspruch, neue Perspektiven.",
    },
    {
      n: "4",
      title: "Integration",
      duration: "5 bis 10 Min",
      text: "Was nehmen Sie mit? Was klären oder erproben Sie bis zum nächsten Treffen?",
    },
  ] satisfies KiSalonTimelineStep[],
  footnote: {
    title: "Was kostet KI wirklich?",
    text: "Nicht nur die Lizenz. Was kostet Unsicherheit? Unkontrollierte Nutzung? Verlust von Wissen? De-Skilling? Und was passiert mit Menschen, wenn sich ihre Rolle verändert?",
  },
} as const;

export const kiSalonHosts = {
  kicker: "Wer wir sind",
  headline: "Zwei Perspektiven. Ein Format.",
  hosts: [
    {
      name: "Susanne Volkwein",
      role: "Systemische Coachin, KI-Managerin (IHK)",
      bio: "22 Jahre Personal- und Organisationsentwicklung, Change und Führung. Sie hält den Raum: vertraulich und tief.",
      website: "https://www.susannevolkwein.de/",
      image: "/susanne-volkwein.png",
    },
    {
      name: "Frank Vullhorst",
      role: "Senior Project Manager, KI-Manager (Cert-IT)",
      bio: "30 Jahre technische Beratung, Transformation und Veränderung. Er bringt die Einordnung, konkret, strategisch.",
      website: "https://frankvullhorst.de/",
      image: "/frank.png",
    },
  ],
} as const;

export const kiSalonPricing = {
  kicker: "Interesse am KI-Salon?",
  headline: "Die Termine stehen fest für 2027, es gibt noch Plätze.",
  body:
    "Erklären Sie jetzt Ihren Teilnahmewunsch. Nach Eingang Ihres Fragebogens melden wir uns persönlich bei Ihnen.",
  cta: "Zum Fragebogen",
} as const;

export const kiSalonContact = {
  kicker: "Wir sind erreichbar:",
  headline: "Rufen Sie an. Oder schreiben. Beides funktioniert.",
  hosts: [
    {
      name: "Susanne Volkwein",
      logo: "/susanne-volkwein-logo.png",
      logoAlt: "Susanne Volkwein Reflexionsräume",
      phoneDisplay: "+49 (0) 179 4587680",
      phoneHref: "tel:+491794587680",
      email: "resonanz@susannevolkwein.de",
    },
    {
      name: "Frank Vullhorst",
      phoneDisplay: "+49 (0)172 6689960",
      phoneHref: "tel:+491726689960",
    },
  ],
} as const;
