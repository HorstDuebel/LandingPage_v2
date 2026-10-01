/** Conversion-Copy: Wert statt Handlung, Einladung statt Befehl */

export const cta = {
  /** Primärer Button, Endresultat betonen */
  primary: {
    hero: "Kostenfreies Erstgespräch: 30 Minuten Orientierung für Ihr Unternehmen",
    angebot: "Diese Klarheit für meinen Betrieb holen",
    vertrauen: "Mein kostenloses Erstgespräch buchen",
    final: "Kostenfreies Orientierungsgespräch\n[ 30 Minuten ]",
    footer: "Klarheit für meinen Betrieb holen",
  },
  secondary: "Zuerst sehen, welcher Weg zu mir passt",
  offerInline: "Termin wählen",
} as const;

/** Einziger Abschluss-CTA (Section 8) */
export const finalCta = {
  headline: "Jetzt den ersten Schritt machen",
  body: "Ich erkläre Ihnen KI nicht nur. Ich baue mit Ihnen KI-Kompetenz auf, die im Betrieb bleibt, wenn ich wieder weg bin.",
  bodyLine2: "Sie bleiben Chef der KI, nicht abhängig von ihr.",
} as const;

export const triggers = {
  heroAfter:
    "Kostenloses Erstgespräch · Keine Vorbereitung · Kein Verkaufsdruck · 30+ Jahre Praxis",
  angebotBody:
    "Nach 30 Minuten wissen Sie: Was passt zu Ihrem Betrieb, und was können Sie sich (noch) sparen.",
  angebotProof:
    "Zertifizierung: KI-Manager*in (Cert-IT, Nr. KI001220) · Fokus: KMU & Handwerk",
  vertrauenAfter:
    "So starten die meisten Entscheider*innen: erst Klarheit, dann der passende nächste Baustein.",
  footerBody:
    "Viele Inhaber*innen und Geschäftsführer*innen starten mit einem kurzen Gespräch, und wissen danach, ob und wie es weitergeht.",
  terminIntro:
    "Freie Termine · Erstgespräch kostenlos · Keine Vorbereitung nötig",
} as const;
