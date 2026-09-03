/** KI-Salon: Inhalte aus Flyer, Sie-Form, Single Source of Truth */

export const KI_SALON_INTERVIEW_URL =
  "https://ki-salon-fragen.netlify.app/" as const;

export const kiSalonMeta = {
  title: "KI-Salon – Klarheit statt Dauer-KI-Rauschen",
  description:
    "Kuratiertes Gesprächsformat für Menschen in Verantwortung: 6 Monate, 6 Sessions à 90 Minuten, max. 8 Teilnehmende. Mit Susanne Volkwein und Frank Vullhorst in Darmstadt.",
} as const;

export const kiSalonHero = {
  kicker: "KI-Salon",
  headline: "Klarheit statt Dauer-KI-Rauschen.",
  lead:
    "Ein Gesprächsformat für Menschen in Verantwortung, die KI nicht nur technisch betrachten, sondern besser verstehen möchten, was sie für das eigene Unternehmen und die Menschen darin bedeutet.",
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
  headline: "Es gibt sehr viel KI-Input, jedoch zu wenig Orientierung und Klarheit.",
  paragraphs: [
    "KI ist überall. Fast jede Woche kommt etwas Neues dazu: ein neues Werkzeug, eine neue Meldung, eine neue Prognose. Im Wald vor lauter Bäumen den Überblick zu halten – irgendwann weiß man mehr als vorher und trotzdem irgendwie ohne Durchblick.",
    "Auch in Unternehmen ist es oft nicht viel anders. Die einen wollen möglichst schnell loslegen. Andere hoffen, dass das Thema wieder vorbeigeht. Dazwischen sitzen Menschen, die Verantwortung tragen und Fragen haben, für die es im Alltag kaum einen guten Ort zum Austausch gibt.",
  ],
  quote:
    "KI nicht nur als Werkzeug betrachten, sondern als Veränderung, die auch Menschen und Zusammenarbeit betrifft.",
} as const;

export const kiSalonFormat = {
  kicker: "Das Angebot",
  headline: "Der KI-Salon – ein anderes Format.",
  highlight: "Keine Schulung. Kein Vortrag. Keine Tool-Demo.",
  body:
    "Der KI-Salon ist ein festes, kuratiertes Gesprächsformat für Menschen in Verantwortung. Klein, vertraulich, dialogisch. Impulse, die öffnen. Sie bringen Ihre eigenen Fragen und echte Situationen aus Ihrem Arbeitsalltag mit – in einen geschützten Rahmen.",
  subtitle: "Der Resonanzraum für Menschen in Verantwortung",
  stats: [
    "6 Monate",
    "6 Sessions",
    "90 Minuten",
    "max. 8 Personen",
    "monatlich",
    "Präsenz in Darmstadt",
  ],
  note: "Mind. 4× in Präsenz, 2× online möglich",
} as const;

export const kiSalonBenefits = {
  kicker: "Was Sie mitnehmen",
  headline: "Mehr Sicherheit in der eigenen Haltung und im Denken – für Entscheidungen.",
  items: [
    {
      title: "Eigene Haltung",
      text: "Sie schärfen Ihre Haltung zu KI, die zu Ihnen und zu Ihrem Unternehmen passt.",
    },
    {
      title: "Prioritäten erkennen",
      text: "Sie können besser unterscheiden, was gerade wichtig ist und was nur laut ist.",
    },
    {
      title: "Persönliches Logbuch",
      text: "Am Ende jeder Session formulieren Sie einen nächsten Schritt – nicht für irgendwann, sondern bis zum nächsten Treffen.",
    },
    {
      title: "Ihr eigener Weg",
      text: "Am Ende steht keine allgemeine KI-Strategie, sondern Ihr eigener Weg im Umgang mit dem Thema.",
    },
    {
      title: "Einordnung",
      text: "Was KI kann, wo ihre Grenzen liegen, was rechtlich und organisatorisch wichtig wird – und welche Begriffe Sie kennen sollten.",
    },
  ],
} as const;

export const kiSalonAudience = {
  kicker: "Für wen",
  headline: "Der richtige Ort für Sie, wenn …",
  body:
    "… Sie Verantwortung tragen, KI als kulturelle Herausforderung erleben und keinen Frontalvortrag suchen, sondern einen vertraulichen Raum für echte Fragen und gemeinsame Antworten.",
  roles: [
    "Geschäftsführer:innen KMU",
    "Bereichsleitungen",
    "Personalverantwortliche",
    "Transformationsbeauftragte",
    "Leitende Referent:innen",
  ],
  note: "Die Besetzung ist Teil des Formats: keine zwei aus derselben Branche.",
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
      text: "Wir beginnen nicht mit KI, sondern mit der Frage: Wo stehen Sie gerade? Neugierig? Genervt? Überfordert? Pragmatisch? Vielleicht auch anders als noch vor vier Wochen. Und: Was ist seit dem letzten Treffen passiert?",
    },
    {
      n: "2",
      title: "Resonanzfunke",
      duration: "5–10 Min",
      text: "Ein Gedanke, eine Beobachtung, eine aktuelle Entwicklung. Wir ordnen ein, geben einen Funken und öffnen damit das Gespräch – nicht mit dem Anspruch, ein Thema vollständig zu erklären, sondern damit etwas in Bewegung kommt.",
    },
    {
      n: "3",
      title: "Gesprächsräume",
      duration: "60 Min",
      text: "Moderierter Dialog mit Leitfragen. Reihum bringt eine Person einen Fall aus dem eigenen Unternehmen mit. Die anderen hören zu, fragen nach, spiegeln, widersprechen und denken mit. Susanne und Frank führen gemeinsam durch das Gespräch: aufmerksam in der Haltung und klar in der Struktur.",
    },
    {
      n: "4",
      title: "Integration",
      duration: "5–10 Min",
      text: "Abschluss: Was nehmen Sie mit? Was möchten Sie bis zum nächsten Treffen ausprobieren, beobachten oder klären? Dieser Funken kommt ins Logbuch. Beim nächsten KI-Salon schauen wir wieder darauf.",
    },
  ] satisfies KiSalonTimelineStep[],
  footnote: {
    title: "Was KI wirklich kostet",
    text: "Ein KI-Abonnement ist günstig. Aber das ist nicht unbedingt der entscheidende Preis. Was kostet Unsicherheit? Was kostet unkontrollierte Nutzung? Was passiert, wenn Mitarbeitende ihr Wissen in Systeme geben und sich gleichzeitig fragen, was danach mit ihrer eigenen Rolle geschieht?",
  },
} as const;

export const kiSalonHosts = {
  kicker: "Wer wir sind",
  headline: "Zwei Perspektiven. Ein Format.",
  hosts: [
    {
      name: "Susanne Volkwein",
      role: "Systemische Coachin, KI-Managerin (IHK)",
      bio: "22 Jahre Konzernerfahrung in Personal- und Organisationsentwicklung, Change-Management, 4 Jahre Führungskraft. Sie kennt die Welt der Zielgruppe von innen. Sie hält den Raum – vertraulich und tief.",
      website: "https://www.susannevolkwein.de/",
      image: "/susanne-volkwein.png",
    },
    {
      name: "Frank Vullhorst",
      role: "Senior Project Manager, KI-Manager (Cert-IT)",
      bio: "30 Jahre Erfahrung in technischer Beratung, Schulungen und Transformation. EU AI Act, KI-Ethik, Change-Management. Er kennt die Herausforderungen. Er bringt die Einordnung – konkret, strategisch.",
      website: "https://frankvullhorst.de/",
      image: "/frank.png",
    },
  ],
} as const;

export const kiSalonPricing = {
  kicker: "Jetzt anfragen",
  headline: "Für den Start des 1. KI-Salons im September",
  founderLead:
    "Wir starten mit einem einmaligen Gründerpreis für 6 Sessions",
  regularPrice: "925,00 €",
  regularLabel: "Normalpreis ab der 2. Runde für 6 Sessions",
  taxNote: "pro Person, zzgl. MwSt.",
  body:
    "Lassen Sie uns kurz miteinander sprechen, um zu sehen, ob der KI-Salon zu Ihnen passt und wir zu Ihnen.",
  cta: "Zum Interviewbogen",
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
