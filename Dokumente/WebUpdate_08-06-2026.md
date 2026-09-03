# WebUpdate – frankvullhorst.de
# Vollständige Textänderungen und Strukturänderungen für Cursor.AI
# Stand: Juni 2026 | Grundlage: Webseite_Analyse_und_Optimierung.docx

---

## TECHNISCHER KONTEXT

- **Framework:** Next.js (React)
- **Hosting:** Netlify
- **Sprache:** Deutsch
- **Seitenstruktur:** Single Page mit Section-Ankern (#fuer-wen, #angebot, #methode, #faq, #termin)
- **Buchungssystem:** Verlinkung auf /termin (separat, nicht ändern)

---

## 1. NEUE SEITENREIHENFOLGE

Die Sections müssen in dieser neuen Reihenfolge erscheinen:

1. Hero (bestehend, Texte geändert)
2. NEU: Section "Das Problem" (komplett neu einfügen)
3. "Für wen" (bestehend, Texte geändert)
4. "Über mich" (bestehend, Texte geändert)
5. Angebot (bestehend, Texte geändert)
6. Methode (bestehend, Texte geändert + Layout-Bug fixen)
7. Vertrauen (bestehend, Texte geändert)
8. Erstgespräch-CTA (bestehend, Texte geändert)
9. FAQ (bestehend, Texte geändert)
10. Abschluss-CTA (bestehend, Texte geändert)
11. Footer (bestehend, Texte geändert)

**Aktuelle falsche Reihenfolge:** Hero → Über mich → Für wen
**Neu korrekt:** Hero → Das Problem → Für wen → Über mich

---

## 2. ALLE TEXTÄNDERUNGEN

### HERO

**Label:** ENTFERNEN (war: "Meine Einladung:")

**H1 Headline:**
ALT: "Ein Erstgespräch. Erst aus Klarheit entsteht echte Effizienz."
NEU: "Kein Betrieb lässt Mitarbeitende ohne Einweisung an eine neue Maschine. Bei KI passiert genau das — täglich."

**Subline (NEU HINZUFÜGEN, unter H1):**
"Ich ändere das. Mit Ihnen, in Ihrem Tempo, ohne IT-Sprache."

**Button:**
ALT: "eine erste Orientierung"
NEU: "Kostenloses Erstgespräch wählen"

**Body:**
ALT: "Wir beleuchten Ihre aktuelle Situation. Ich höre zu und gebe Impulse. 30 Minuten. Erst schauen, ob es menschlich und fachlich passt."
NEU: "30 Minuten. Kostenlos. Kein Pitch — nur Klarheit für Ihren nächsten Schritt."

---

### NEU: SECTION "DAS PROBLEM" (zwischen Hero und Für wen einfügen)

id="problem"

**Label:** "Warum das dringend ist:"

**H2:** "KI läuft bereits in Ihrem Betrieb. Die Frage ist: kontrolliert oder unkontrolliert?"

**Absatz 1:** "Mitarbeitende nutzen KI-Tools — manche produktiv, manche riskant, die meisten ohne klare Regeln. Datenschutzverstöße, Haftungslücken und falsche Ergebnisse entstehen nicht aus böser Absicht. Sie entstehen, weil niemand eingewiesen hat."

**Absatz 2:** "Der EU AI Act (Art. 4) macht KI-Kompetenz im Unternehmen seit 2025 zur Pflicht. Das ist keine Bürokratie — das ist Ihr Schutz."

**Hervorgehobener Satz (fett oder Zitatformatierung):**
"Sie kommen zu mir, weil ich so arbeite, dass ich keine Abhängigkeit erzeuge — sondern befähige."

---

### FÜR WEN (#fuer-wen)

**H2:**
ALT: "Für Entscheider in Handwerk und Unternehmen, die Klarheit statt KI-Hype-Begriffe wollen."
NEU: "Für Inhaber*innen und Geschäftsführer*innen im Handwerk und in KMU, die Klarheit statt KI-Hype wollen."

**Absatz 1:**
ALT: "Für Inhaber, Geschäftsführer und Verantwortliche, die Innovationen voranbringen und KI verständlich, sicher und pragmatisch einordnen wollen."
NEU: "Für Inhaber*innen und Führungskräfte, die KI nicht als Hype, sondern als echtes Werkzeug verstehen und sicher einsetzen wollen — ohne IT-Abteilung und ohne Berater-Abhängigkeit."

**Absatz 2:**
ALT: "Für Interessierte, die wissen wollen, wie KI entlastet..."
NEU: "Für alle, die wissen wollen: Wo entlastet KI heute wirklich? Was muss vorbereitet sein, damit der Einstieg sauber gelingt?"

**Absatz 3:**
ALT: "Wenn Sie im Tagesgeschäft wenig Zeit haben..."
NEU: "Wenn Sie im Tagesgeschäft kaum Zeit haben — und trotzdem nicht hinter der Entwicklung herlaufen wollen."

---

### ÜBER MICH

**Label:**
ALT: "Über mich:"
NEU: "Wer ich bin:"

**H2:**
ALT: "Mein Name ist Frank."
NEU: "30 Jahre Betrieb. Technik, Menschen, Verantwortung. Jetzt: KI."

**Absatz 1:**
ALT: "Ich arbeite mit Inhabern und Geschäftsführern im Handwerk und in KMU..."
NEU: "Ich bin Werkzeugmacher, Informatiker und ehemaliger 3D-Systems-Manager mit 27 Jahren internationaler Projekterfahrung. Ich kenne Betriebe von innen — die Sprache der Werkstatt genauso wie die Sprache des Managements."

**Absatz 2:**
ALT: "KI soll nicht zusätzlich belasten..."
NEU: "KI ist für mich kein Trend und keine Theorie. Es ist das Werkzeug, das ich Inhaber*innen und ihren Teams zugänglich machen will — verständlich, rechtssicher und ohne Abhängigkeit."

---

### ANGEBOT (#angebot)

**H2:**
ALT: "Ihr Einstieg. Schritt für Schritt."
NEU: "Ihr Einstieg. Klar strukturiert, ohne Umwege."

**Intro:**
ALT: "Keine lange Checkliste, sondern durchdachte Module, die im Alltag wirklich weiterhelfen."
NEU: "Sechs Module — je nachdem, wo Sie stehen. Manche Betriebe starten mit dem Erstgespräch. Andere brauchen zuerst den Überblick. Beides ist richtig."

**Karte Erstgespräch:**
ALT: "Wir bringen Ihre Ideen und Vorhaben auf den Tisch, schauen gemeinsam hin und ich gebe Ihnen erste Impulse."
NEU: "Wir schauen gemeinsam hin: Was läuft, was fehlt, wo der nächste sinnvolle Schritt liegt."

**Karte Potenzial-Scan:**
ALT: "Wo KI heute entlastet und welcher nächste Schritt wirtschaftlich sinnvoll ist."
NEU: "Wo KI heute im Betrieb wirklich entlastet — und welcher Schritt wirtschaftlich Sinn ergibt."

**Karte AI-ISCA Audit:**
ALT: "Nachvollziehbare Bestandsaufnahme: KI-Nutzung, Datenschutz, Compliance, Kompetenz."
NEU: "Strukturierte Bestandsaufnahme: Was wird genutzt, was fehlt, wo liegen Risiken? Ergebnis: eine klare Entscheidungsgrundlage."

**Karte KI-Leitlinie & Sicherer Hafen:**
ALT: "Klare Regeln fürs Team – und die passende Schutzstufe für Ihre Daten."
NEU: "Klare Spielregeln für das Team: Was darf genutzt werden — und was nicht. Dazu die richtige Schutzstufe. Ohne Bürokratie-Overkill."

**Karte AI Literacy Workshop:**
ALT: "Kompetenz im Team – verständlich, nachweisbar, rechtssicher (Art. 4 EU AI Act)."
NEU: "KI-Kompetenz, die sitzt: verständlich erklärt, nachweisbar dokumentiert, EU AI Act-konform (Art. 4)."

**Karte Pilotprojekt:**
ALT: "Erster messbarer Nutzen im Betrieb, kontrolliert und auswertbar."
NEU: "Der erste echte Schritt mit KI im Betrieb — kontrolliert, messbar, ausbaufähig. Klein anfangen. Sauber wachsen."

**Text nach Karten:**
ALT: "Was Sie nach 30 Minuten haben — Eine konkrete Einschätzung..."
NEU: "Nach 30 Minuten wissen Sie: Was passt zu Ihrem Betrieb — und was können Sie sich (noch) sparen."

**Zertifikat-Zeile:**
ALT: "Cert-IT KI-Manager · Rhein-Main · KMU & Handwerk"
NEU: "Zertifizierter KI-Manager (Cert-IT, Nr. KI001220) · Fokus: KMU & Handwerk · Rhein-Main"

---

### METHODE (#methode) — LAYOUT-BUG FIXEN

**H2 (BUGFIX — zusammengelaufener Text):**
ALT (fehlerhaft): "Ich höre hin, nehme auf mit dem Blick auf das WesentlichePraxisnah und strukturiert."
NEU: "Ich höre zuerst zu. Dann bringe ich Struktur. Praxisnah und in Ihrem Tempo."

**Intro:**
ALT: "Fünf Schritte – praxisnah, verständlich und in Ihrem Tempo einsetzbar."
NEU: "Fünf Schritte — keine Theorie, kein Overkill. Was Sie nach jedem Schritt haben, steht fest."

**Schritt 01 Audit:**
ALT: "Sie sehen klar: Was läuft, was fehlt, wo Risiko steckt."
NEU: "Sie sehen klar: Was heute läuft, was fehlt — und wo ein Risiko versteckt liegt."

**Schritt 02 KI-Leitlinie:**
ALT: "Ihr Team weiß: Was darf genutzt werden – und was nicht."
NEU: "Ihr Team weiß, was erlaubt ist — und was nicht. Keine Grauzone, keine Ausreden."

**Schritt 03 Sicherer Hafen:**
ALT: "Daten bekommen die Schutzstufe, die sie brauchen – ohne Overkill."
NEU: "Ihre Daten bekommen die Schutzstufe, die sie brauchen. Nicht mehr — aber auch nicht weniger."

**Schritt 04 AI Literacy:**
ALT: "Kompetenz im Team – nachweisbar, rechtssicher (Art. 4 EU AI Act)."
NEU: "Das Team kann KI einsetzen — nachweisbar, sicher, EU AI Act-konform."

**Schritt 05 Pilotprojekt:**
ALT: "Erster messbarer Nutzen im Betrieb, kontrolliert und auswertbar."
NEU: "Erster echter Nutzen im Betrieb. Kontrolliert gestartet, sauber ausgebaut."

---

### VORHABEN-SEKTION

**Label:**
ALT: "Ihr KI Vorhaben:"
NEU: "Der Unterschied, den es macht:"

**H2:**
ALT: "von ChatGPT zu sicherer, professioneller KI-Nutzung."
NEU: "Von 'wir probieren mal' zu gesteuerter, sicherer KI-Nutzung im Betrieb."

**Absatz 1:**
NEU: "Viele Betriebe nutzen KI bereits — aber unkoordiniert. Jede*r macht irgendwas, niemand weiß genau was. Und wenn etwas schiefgeht, fragt keiner mehr nach dem Werkzeug."

**Absatz 2:**
NEU: "Das ändert sich, wenn KI strukturiert eingeführt wird: mit klaren Regeln, nachweisbarer Kompetenz — und einer Strategie, die zum Betrieb passt. Nicht zum nächsten Trend."

**Absatz 3:**
NEU: "Nach unserem Gespräch wissen Sie genau: Was ist sinnvoll für Sie, was können Sie lassen — und womit fangen Sie morgen an."

---

### VERTRAUEN

**Label:**
ALT: "Vertrauen:"
NEU: "Warum Entscheider*innen mir vertrauen:"

**H2:**
ALT: "Warum Entscheider mir vertrauen."
NEU: "Das, was ich mitbringe — und was Sie davon haben."

**Bio-Text:**
ALT: "Ich bin Werkzeugmacher, Informatiker, Handwerker, 3D-Druck-Spezialist und Führungskraft. Ich kenne Betriebe von innen und nehme Menschen mit."
NEU: "30 Jahre Betrieb, Technik und Verantwortung: Als Werkzeugmacher, Informatiker und leitende Kraft bei 3D Systems habe ich internationale Projekte bis 1,5 Millionen Euro Budget umgesetzt. Ich kenne Betriebe von innen — die Werkstatt genauso wie das Büro."

**Bullet 1:**
ALT: "30+ Jahre Praxis – Technik, Prozesse, Umsetzung in der Industrie"
NEU: "30 Jahre Praxis in Technik, Prozessen und Führung — in der Industrie"

**Bullet 2:**
ALT: "KI-Manager Certificate (Cert-IT), Nr. KI001220 · 02/2026"
NEU: "Zertifizierter KI-Manager (Cert-IT, Nr. KI001220, Februar 2026)"

**Bullet 3:**
ALT: "27 Jahre bei 3D Systems – internationale Projekte bis €1,5M Budget"
NEU: "27 Jahre bei 3D Systems: internationale Projekte bis 1,5 Mio. € Budget"

**Bullet 4:**
ALT: "Fokus: verständlich, sicher, umsetzbar (EU AI Act & DSGVO)"
NEU: "Fokus: verständlich erklären, sicher einführen, nachhaltig verankern"

**Testimonial 1:**
ALT: "»Frank bringt Struktur und Klarheit in komplexe Themen – und schafft einen Raum, in dem man offen reflektieren kann, ohne bewertet zu werden.«"
NEU: "»Frank bringt Struktur und Klarheit in komplexe Themen — und schafft einen Raum, in dem man offen reden kann.«"
Quelle NEU: "— Führungskraft, Produktionsbetrieb"

**Testimonial 2:**
ALT: "»Endlich jemand, der KI nicht als Hype verkauft, sondern pragmatisch einordnet – mit Blick auf Datenschutz und Alltag im Betrieb.«"
NEU: "»Endlich jemand, der KI nicht als Hype verkauft, sondern pragmatisch einordnet — mit echtem Blick auf Datenschutz und Nutzen.«"
Quelle NEU: "— Inhaberin / Inhaber, Handwerksbetrieb"

---

### ERSTGESPRÄCH-CTA

**Label:** "Jetzt starten:" (war: "Erstgespräch")
**H3:** "Was Sie nach 30 Minuten mitnehmen" (war: "Was Sie im Erstgespräch bekommen")

**Punkt 1 Text:**
ALT: "Worum es bei Ihnen wirklich geht – ohne Nebel."
NEU: "Worum es bei Ihnen wirklich geht. Ohne Nebel, ohne Vorwissen nötig."

**Punkt 2 Text:**
ALT: "Was sinnvoll ist – und was Sie (noch) lassen können."
NEU: "Was für Ihren Betrieb heute sinnvoll ist. Und was Sie (noch) lassen können."

**Punkt 3 Text:**
ALT: "Eine saubere Empfehlung für den kleinsten sinnvollen Einstieg."
NEU: "Eine saubere, konkrete Empfehlung. Kein Paket, das verkauft werden will."

**Button:**
ALT: "Mein kostenloses Erstgespräch wählen"
NEU: "Mein kostenloses Erstgespräch buchen"

**Hinweis:**
ALT: "So starten viele Entscheider: erst Klarheit, dann der passende Baustein."
NEU: "So starten die meisten Entscheider*innen: erst Klarheit — dann der passende nächste Baustein."

---

### FAQ (#faq)

**H2:**
ALT: "FAQ"
NEU: "Das fragen Entscheider*innen vor dem ersten Schritt"

**Intro:**
ALT: "Kurz, verständlich, entscheidungsfreundlich."
NEU: "Kurz. Direkt. Damit Sie entscheiden können."

**FAQ 1 – Antwort:**
NEU: "Wir schauen gemeinsam auf Ihre Ausgangslage: Was läuft, was fehlt, wo KI heute helfen kann — und was Sie noch lassen sollten. Kein Pitch, keine Agenda."

**FAQ 2 – Frage:** "Muss ich mich vorbereiten?"
**FAQ 2 – Antwort:** "Nein. Es hilft, grob zu wissen: Welche Aufgaben kosten gerade Zeit? Wo wird KI schon genutzt — bewusst oder unbewusst? Mehr braucht es nicht."

**FAQ 3 – Frage:** "Was ist der AI-ISCA Audit?"
**FAQ 3 – Antwort:** "Eine strukturierte Bestandsaufnahme: Wo wird KI genutzt? Was fehlt beim Datenschutz? Wo liegt Compliance-Risiko? Ergebnis: eine klare, dokumentierte Grundlage für Entscheidungen."

**FAQ 4 – Frage:** "Wie halte ich es mit Datenschutz und EU AI Act?"
**FAQ 4 – Antwort:** "Pragmatisch: klare Regeln, passende Schutzstufe, kein Bürokratie-Overkill. Fachbegriffe erkläre ich so, dass sie im Betrieb ankommen."

**FAQ 5 – Frage:** "Für wen ist das nichts?"
**FAQ 5 – Antwort:** "Wenn Sie eine Tool-Demo wollen oder Berater suchen, die Ihnen sagen, was trendy ist. Hier geht es um echte, umsetzbare Entlastung im Betriebsalltag."

**FAQ 6 – Frage:** "Was kommt nach dem Erstgespräch?"
**FAQ 6 – Antwort:** "Je nach Situation: ein Potenzial-Scan, ein AI-ISCA Audit oder Modul 1 des AI Literacy Workshops. Ich empfehle das, was zu Ihrem Betrieb passt — kein Standardpaket."

---

### ABSCHLUSS-CTA

**Label:** "Jetzt den ersten Schritt machen:" (war: "Gemeinsam starten:")

**H2:**
ALT: "Statt Unsicherheit: ein klarer nächster Schritt."
NEU: "Statt warten: ein klares Gespräch."

**Absatz 1:**
NEU: "Nach 30 Minuten wissen Sie, wo Sie stehen — und was der kleinste, sinnvolle nächste Schritt für Ihren Betrieb ist."

**Absatz 2:**
NEU: "Kostenlos, unverbindlich — und in Ihrem Kalender, wenn Sie wollen."

**Button:**
ALT: "Meinen nächsten sinnvollen Schritt klären"
NEU: "Meinen Termin wählen"

---

### FOOTER

**Intro:** "Ich bin erreichbar — in Roßdorf und überall sonst:"
**Headline:** "Rufen Sie an. Oder schreiben. Beides funktioniert."
**Copyright:** "© 2026 Frank Vullhorst · KI. Sicher. Sinnvoll. Strategisch."

---

## 3. DESIGN-REGELN (nicht ändern)

- Farbpalette, Schriften, Abstände: unverändert lassen
- Alle /termin-Links: unverändert lassen
- Foto frank.jpg: unverändert lassen
- Bestehende Anker-IDs (#fuer-wen, #angebot, #methode, #faq, #termin): unverändert lassen
- Impressum und Datenschutz: unverändert lassen

---

## 4. GENDERING — GLOBAL ANWENDEN

| Alt | Neu |
|-----|-----|
| Inhaber | Inhaber*innen |
| Geschäftsführer | Geschäftsführer*innen |
| Entscheider | Entscheider*innen |
| Mitarbeiter | Mitarbeitende |
| Nutzer | Nutzende oder "das Team" |

---

Stand: Juni 2026
