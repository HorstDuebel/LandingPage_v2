/** Conversion-Copy: Wert statt Handlung, Einladung statt Befehl */

export const cta = {
  /** Primärer Button, Endresultat betonen */
  primary: {
    hero: "Kostenfreies Erstgespräch: 30 Minuten Orientierung für Ihr Unternehmen",
    angebot: "Diese Klarheit für meinen Betrieb holen",
    vertrauen: "Mein kostenloses Erstgespräch buchen",
    final: "Kostenfreies 30-Minuten-Erstgespräch reservieren",
    footer: "Klarheit für meinen Betrieb holen",
  },
  secondary: "Zuerst sehen, welcher Weg zu mir passt",
  offerInline: "Termin wählen",
} as const;

/** Einziger Abschluss-CTA (Section 7) */
export const finalCta = {
  headline: "Jetzt den ersten Schritt machen",
  body: "Kostenfreies Erstgespräch für Ihre Orientierung reservieren. Nach dem Austausch haben Sie eine Vorstellung davon, was für Ihr Unternehmen heute sinnvoll ist und was ein sinnvoller nächster Schritt sein kann.",
  microcopy:
    "kostenfrei, 30 Minuten, unverbindlich, Video oder Telefonat, keine Vorbereitung nötig",
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
  finalBefore: finalCta.microcopy,
  footerBody:
    "Viele Inhaber*innen und Geschäftsführer*innen starten mit einem kurzen Gespräch, und wissen danach, ob und wie es weitergeht.",
  terminIntro:
    "Freie Termine · Erstgespräch kostenlos · Keine Vorbereitung nötig",
} as const;
