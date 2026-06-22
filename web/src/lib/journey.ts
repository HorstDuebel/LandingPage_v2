/** 7-Schritte-Fahrplan, Single Source of Truth für die Angebot-Section */

export type JourneyStep = {
  n: string;
  id: string;
  title: string;
  offerTitle: string;
  offerDesc: string;
  offerMeta: string;
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
  },
  {
    n: "03",
    id: "sicherer-hafen",
    title: "Sicherer Hafen",
    offerTitle: "Sicherer Hafen",
    offerDesc:
      "Ihre Daten bekommen die Schutzstufe, die sie brauchen, lokal, in der Cloud oder hybrid. Ohne Bürokratie-Overkill.",
    offerMeta: "Passend zur Datenschutzklasse",
  },
  {
    n: "04",
    id: "ai-literacy",
    title: "AI Literacy",
    offerTitle: "AI Literacy Workshop",
    offerDesc:
      "KI-Kompetenz, die sitzt: verständlich erklärt, nachweisbar dokumentiert, EU AI Act-konform (Art. 4).",
    offerMeta: "Workshop · Module 1–4",
  },
  {
    n: "05",
    id: "prozess-erfassung",
    title: "Prozess-Erfassung",
    offerTitle: "Prozess-Erfassung",
    offerDesc:
      "Prozessanalyse: Das große Ganze sichtbar machen, Abläufe, Verantwortlichkeiten und Reibungspunkte erkennen, als Grundlage für die nächsten Schritte.",
    offerMeta: "Workshop · Prozessaufnahme",
  },
  {
    n: "06",
    id: "pilotprojekt",
    title: "Pilotprojekt",
    offerTitle: "Pilotprojekt",
    offerDesc:
      "Der erste echte Schritt mit KI im Betrieb, kontrolliert, messbar, ausbaufähig. Klein anfangen. Sauber wachsen.",
    offerMeta: "Klein starten · sauber ausbauen",
  },
  {
    n: "07",
    id: "claude-cowork",
    title: "Claude Cowork",
    offerTitle: "Claude Cowork Workshop",
    offerDesc:
      "Ich unterstütze Sie dabei, Claude Cowork sicher einzuführen und produktive Workflows zu entwickeln, für eine digitale Assistenz, die Sie im Arbeitsalltag spürbar entlastet.",
    offerMeta: "Workshop · Desktop-Agent · befähigend",
    isNew: true,
  },
];
