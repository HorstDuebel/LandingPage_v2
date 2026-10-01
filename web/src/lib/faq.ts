/** FAQ, gemeinsam für Seite und JSON-LD */

export type FaqEntry = {
  question: string;
  answer: string;
  linkLabel?: string;
  linkHref?: string;
};

export const faqEntries: readonly FaqEntry[] = [
  {
    question: "Was passiert im Orientierungsgespräch?",
    answer:
      "Wir schauen gemeinsam auf Ihre Ausgangslage: Was läuft, was fehlt, wo KI heute helfen kann, und was Sie noch lassen sollten. Kein Pitch, keine Agenda.",
  },
  {
    question: "Muss ich mich vorbereiten?",
    answer:
      "Nein. Es hilft, grob zu wissen: Welche Aufgaben kosten gerade Zeit? Wo wird KI schon genutzt, bewusst oder unbewusst? Mehr braucht es nicht.",
  },
  {
    question: "Was ist der AI-ISCA Audit?",
    answer:
      "Eine strukturierte Bestandsaufnahme: Wo wird KI genutzt? Was fehlt beim Datenschutz? Wo liegt Compliance-Risiko? Ergebnis: eine klare, dokumentierte Grundlage für Entscheidungen.",
  },
  {
    question: "Was ist Prozess-Erfassung?",
    answer:
      "Die Aufnahme Ihres Ist-Ablaufs, mit SIPOC oder Swimlane-Diagramm. Ziel: Rollen, Übergaben und Reibungspunkte sichtbar machen, bevor automatisiert oder KI eingesetzt wird. Keine Personenbewertung, sondern Verständnis für den Betrieb.",
  },
  {
    question: "Was ist der Claude Cowork Workshop?",
    answer:
      "Ein praxisnaher Workshop, in dem Ihr Team Claude Cowork sicher einrichtet und nutzt, vom ersten Word-Dokument bis zu wiederkehrenden Workflows. Technisch und inhaltlich befähigend, mit klaren Sicherheitsregeln.",
  },
  {
    question: "Wie halte ich es mit Datenschutz und EU AI Act?",
    answer:
      "Pragmatisch: klare Regeln, passende Schutzstufe, kein Bürokratie-Overkill. Fachbegriffe erkläre ich so, dass sie im Betrieb ankommen.",
  },
  {
    question: "Für wen ist das nichts?",
    answer:
      "Wenn Sie eine Tool-Demo wollen oder Berater*innen suchen, die Ihnen sagen, was trendy ist. Hier geht es um echte, umsetzbare Entlastung im Betriebsalltag.",
  },
  {
    question: "Was kommt nach dem Orientierungsgespräch?",
    answer:
      "Je nach Situation: ein AI-ISCA Audit, Prozess-Erfassung, ein AI Literacy Workshop, ein Pilotprojekt oder der Claude Cowork Workshop. Viele starten mit einem Potenzial-Scan, ich empfehle das, was zu Ihrem Betrieb passt, kein Standardpaket.",
  },
];

export const faqBetriebEntries: readonly FaqEntry[] = [
  {
    question: "Muss ich meine Mitarbeiter in KI schulen?",
    answer:
      "Ja, wenn in Ihrem Betrieb KI genutzt wird, auch Werkzeuge wie ChatGPT oder Copilot. Artikel 4 der KI-Verordnung verlangt, dass Sie Maßnahmen ergreifen, um die KI-Kompetenz Ihres Personals zu fördern. Seit Juli 2026 ist diese Pflicht entschärft, aber nicht abgeschafft. Was genau gilt, steht auf der Seite „KI-Schulung für Mitarbeiter“.",
    linkLabel: "KI-Schulung für Mitarbeiter",
    linkHref: "/ki-schulung",
  },
  {
    question: "Unsere Mitarbeiter wurden schon geschult. Reicht das?",
    answer:
      "Oft nicht. Wenn nach einer Schulung einer dem nächsten zeigt, wie es geht, wird das Wissen mit jeder Weitergabe dünner. Entscheidend ist, wie tief es heute im Betrieb sitzt und bei wem. Mein Grundsatz: Jeder darf damit arbeiten. Einer muss es beherrschen.",
  },
  {
    question: "Was kostet eine KI-Beratung?",
    answer:
      "Das hängt davon ab, wo Sie stehen und was Sie vorhaben. Das Orientierungsgespräch ist kostenfrei. Danach bekommen Sie ein festes Angebot, meist für einen kleinen, klar umrissenen ersten Schritt statt für ein großes Paket.",
  },
  {
    question: "Gibt es eine Förderung für KI-Schulungen?",
    answer:
      "Für kurze Schulungen kaum. Die Weiterbildungsförderung der Agentur für Arbeit setzt mindestens 120 Unterrichtsstunden voraus, der DIGI-Zuschuss Hessen fördert Software und Technik, keine Schulungen. Mehr dazu auf der Seite „KI-Schulung für Mitarbeiter“.",
    linkLabel: "KI-Schulung für Mitarbeiter",
    linkHref: "/ki-schulung",
  },
  {
    question: "Wie führe ich KI im Unternehmen ein?",
    answer:
      "Erst der Betrieb, dann die KI. Zuerst klären wir, wo KI bei Ihnen schon genutzt wird, oft mehr als gedacht. Dann folgen klare Regeln für Ihr Team und eine Schulung. Danach setzen wir KI an einer einzigen Stelle um, mit einem messbaren Ergebnis, bevor es in die Breite geht. Klein anfangen, sauber wachsen.",
  },
  {
    question: "Was bringt KI einem Handwerksbetrieb?",
    answer:
      "Vor allem Entlastung im Büro. Typische Einsatzfelder sind Angebote und Schreiben vorbereiten, E-Mails sortieren und beantworten, Dokumentationen erstellen und Informationen schneller finden. KI ersetzt dabei kein Fachwissen. Sie nimmt Routinearbeit ab, und der Mensch prüft und entscheidet.",
  },
  {
    question:
      "Das Mittelstand-Digital Zentrum berät kostenlos. Warum sollte ich Sie bezahlen?",
    answer:
      "Das ist ein gutes Angebot, und es zeigt Ihnen, was möglich ist. Meine Arbeit fängt da an, wo es darum geht, dass es in Ihrem Betrieb auch wirklich passiert. Und dass ich in einem Jahr noch erreichbar bin, wenn etwas klemmt.",
  },
  {
    question: "Arbeiten Sie nur in Darmstadt?",
    answer:
      "Ich sitze in Roßdorf bei Darmstadt und komme zu Ihnen in den Betrieb, in Südhessen und im Rhein-Main-Gebiet, etwa nach Frankfurt, Wiesbaden, Mainz oder Aschaffenburg, gern auch Deutschland und DACH weit.",
  },
];

export const allFaqEntries: readonly FaqEntry[] = [
  ...faqEntries,
  ...faqBetriebEntries,
];
