/** 7-Schritte-Fahrplan + Baustein-Cluster, Single Source of Truth */

export type JourneyClusterId =
  | "prozessanalyse"
  | "prozessoptimierung"
  | "trainings"
  | "special";

export type JourneyStep = {
  n: string;
  id: string;
  title: string;
  offerTitle: string;
  offerDesc: string;
  offerMeta: string;
  cluster: JourneyClusterId;
  recommended?: boolean;
  isNew?: boolean;
};

export const journeySteps: JourneyStep[] = [
  {
    n: "01",
    id: "audit",
    title: "Audit",
    offerTitle: "AI-ISCA Audit",
    offerDesc:
      "Strukturierte Bestandsaufnahme: Was wird genutzt, was fehlt, wo liegen Risiken? Ergebnis: eine klare Entscheidungsgrundlage für Ihren Betrieb.",
    offerMeta: "Strukturiert · als Entscheidungsgrundlage",
    cluster: "prozessanalyse",
    recommended: true,
  },
  {
    n: "02",
    id: "ki-leitlinie",
    title: "KI-Leitlinie",
    offerTitle: "KI-Leitlinie",
    offerDesc:
      "Klare Spielregeln für Ihr Team: Was darf genutzt werden, und was nicht. Verständlich formuliert, im Alltag anwendbar.",
    offerMeta: "Praxisnah · für das ganze Team",
    cluster: "trainings",
  },
  {
    n: "03",
    id: "sicherer-hafen",
    title: "Sicherer Hafen",
    offerTitle: "Sicherer Hafen",
    offerDesc:
      "Ihre Daten bekommen die Schutzstufe, die sie brauchen, lokal, in der Cloud oder hybrid. Ohne Bürokratie-Overkill.",
    offerMeta: "Passend zur Datenschutzklasse",
    cluster: "prozessoptimierung",
  },
  {
    n: "04",
    id: "ai-literacy",
    title: "AI Literacy",
    offerTitle: "AI Literacy Workshop",
    offerDesc:
      "KI-Kompetenz, die sitzt: verständlich erklärt, nachweisbar dokumentiert, EU AI Act-konform (Art. 4).",
    offerMeta: "Workshop · Module 1–4",
    cluster: "trainings",
  },
  {
    n: "05",
    id: "prozess-erfassung",
    title: "Prozess-Erfassung",
    offerTitle: "Prozess-Erfassung",
    offerDesc:
      "Prozessanalyse: Das große Ganze sichtbar machen, Abläufe, Verantwortlichkeiten und Reibungspunkte erkennen, als Grundlage für die nächsten Schritte.",
    offerMeta: "Workshop · Prozessaufnahme",
    cluster: "prozessanalyse",
  },
  {
    n: "06",
    id: "pilotprojekt",
    title: "Pilotprojekt",
    offerTitle: "Pilotprojekt",
    offerDesc:
      "Der erste echte Schritt mit KI im Betrieb, kontrolliert, messbar, ausbaufähig. Klein anfangen. Sauber wachsen.",
    offerMeta: "Klein starten · sauber ausbauen",
    cluster: "prozessoptimierung",
  },
  {
    n: "07",
    id: "claude-cowork",
    title: "Claude Cowork",
    offerTitle: "Claude Cowork Workshop",
    offerDesc:
      "Ich unterstütze Sie dabei, Claude Cowork sicher einzuführen und produktive Workflows zu entwickeln, für eine digitale Assistenz, die Sie im Arbeitsalltag spürbar entlastet.",
    offerMeta: "Workshop · Desktop-Agent · befähigend",
    cluster: "special",
    isNew: true,
  },
];

export type JourneyBuildingBlock = {
  id: Exclude<JourneyClusterId, "special">;
  title: string;
  description: string;
  /** Dezent unter dem Kartentext, kein Button */
  formatsHint: string;
  stepIds: readonly string[];
};

/** Drei Bausteine der Orientierungs-Section (ohne Sonderformat) */
export const journeyBuildingBlocks: JourneyBuildingBlock[] = [
  {
    id: "prozessanalyse",
    title: "Prozessanalyse",
    description:
      "Prozesse verstehen. Ich höre zu, stelle Fragen und finde den Kern Ihres Betriebs.",
    formatsHint: "Typische Formate: AI-ISCA Audit, Prozess-Erfassung.",
    stepIds: ["audit", "prozess-erfassung"],
  },
  {
    id: "prozessoptimierung",
    title: "Prozessoptimierung mit und ohne KI",
    description:
      "Entlastungspotenziale finden und heben. KI nur dort, wo sie wirklich trägt.",
    formatsHint: "Typische Formate: Sicherer Hafen, Pilotprojekt.",
    stepIds: ["sicherer-hafen", "pilotprojekt"],
  },
  {
    id: "trainings",
    title: "Trainings / Workshops",
    description:
      "Sie und Ihr Team bei der Einführung begleiten. Befähigung statt Abhängigkeit.",
    formatsHint: "Typische Formate: KI-Leitlinie, AI Literacy Workshop.",
    stepIds: ["ki-leitlinie", "ai-literacy"],
  },
];

/** Sonderkachel außerhalb der Dreier-Logik */
export const journeySpecialFormat = {
  id: "special" as const,
  title: "Claude Cowork Workshop",
  description:
    "Ein Sonderformat für Betriebe, die KI direkt im Arbeitsalltag erleben wollen. Wir arbeiten gemeinsam an Ihren echten Aufgaben, mit Claude als digitalem Mitarbeiter.",
  stepId: "claude-cowork",
};
