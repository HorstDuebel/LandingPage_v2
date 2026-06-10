/** 7-Schritte-Fahrplan — Single Source of Truth für Angebot & Methode */

export type JourneyStep = {
  n: string;
  id: string;
  title: string;
  offerTitle: string;
  offerDesc: string;
  offerMeta: string;
  methodText: string;
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
    methodText:
      "Sie sehen klar: Was heute läuft, was fehlt — und wo ein Risiko versteckt liegt.",
  },
  {
    n: "02",
    id: "ki-leitlinie",
    title: "KI-Leitlinie",
    offerTitle: "KI-Leitlinie",
    offerDesc:
      "Klare Spielregeln für Ihr Team: Was darf genutzt werden — und was nicht. Verständlich formuliert, im Alltag anwendbar.",
    offerMeta: "Praxisnah · für das ganze Team",
    methodText:
      "Ihr Team weiß, was erlaubt ist — und was nicht. Keine Grauzone, keine Ausreden.",
  },
  {
    n: "03",
    id: "sicherer-hafen",
    title: "Sicherer Hafen",
    offerTitle: "Sicherer Hafen",
    offerDesc:
      "Ihre Daten bekommen die Schutzstufe, die sie brauchen — lokal, in der Cloud oder hybrid. Ohne Bürokratie-Overkill.",
    offerMeta: "Passend zur Datenschutzklasse",
    methodText:
      "Ihre Daten bekommen die Schutzstufe, die sie brauchen. Nicht mehr — aber auch nicht weniger.",
  },
  {
    n: "04",
    id: "ai-literacy",
    title: "AI Literacy",
    offerTitle: "AI Literacy Workshop",
    offerDesc:
      "KI-Kompetenz, die sitzt: verständlich erklärt, nachweisbar dokumentiert, EU AI Act-konform (Art. 4).",
    offerMeta: "Workshop · Module 1–4",
    methodText:
      "Das Team kann KI einsetzen — nachweisbar, sicher, EU AI Act-konform.",
  },
  {
    n: "05",
    id: "prozess-erfassung",
    title: "Prozess-Erfassung",
    offerTitle: "Prozess-Erfassung",
    offerDesc:
      "IST-Aufnahme mit SIPOC und Swimlane: Wie läuft Ihr Ablauf wirklich — Rollen, Übergaben, Reibungspunkte. Bevor KI ins Spiel kommt.",
    offerMeta: "Workshop · Handwerk & KMU",
    methodText:
      "Sie sehen, wie Ihr Ablauf wirklich läuft — Rollen, Übergaben und Reibungspunkte auf einen Blick. Grundlage für sinnvolle Automatisierung.",
  },
  {
    n: "06",
    id: "pilotprojekt",
    title: "Pilotprojekt",
    offerTitle: "Pilotprojekt",
    offerDesc:
      "Der erste echte Schritt mit KI im Betrieb — kontrolliert, messbar, ausbaufähig. Klein anfangen. Sauber wachsen.",
    offerMeta: "Klein starten · sauber ausbauen",
    methodText:
      "Erster echter Nutzen im Betrieb. Kontrolliert gestartet, sauber ausgebaut.",
  },
  {
    n: "07",
    id: "claude-cowork",
    title: "Claude Cowork",
    offerTitle: "Claude Cowork Workshop",
    offerDesc:
      "Ihr Team lernt Claude Cowork sicher einzusetzen — Dateien, Skills und Workflows im eigenen Betrieb. Claude schlägt vor, Sie prüfen und geben frei.",
    offerMeta: "Workshop · Desktop-Agent · befähigend",
    methodText:
      "Ihr Team nutzt Claude Cowork sicher und produktiv — mit klaren Regeln, praxisnahen Workflows und voller Kontrolle.",
  },
];
