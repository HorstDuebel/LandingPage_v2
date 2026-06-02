# k_Wissen_Modul4_5Schritte.md
# Modul 4: Der 5-Schritte-Fahrplan – Wissensdatei

Stand: Mai 2026 | Quelle: Modul_4 - Der 5-Schritte-Fahrplan (v3).pdf

---

## Zweck des Moduls

Abschlussmodul der Workshopreihe. Überführt Wissen aus Modul 1–3 in einen konkreten, priorisierten Umsetzungsplan. Zeigt, wie Betriebe sicher und schrittweise KI einführen.

Format: Halbtagsworkshop | Preis: 680 €

---

## Der 5-Schritte-Fahrplan (Überblick)

```
Schritt 1 → Schritt 2 → Schritt 3 → Schritt 4 → Schritt 5
AI-ISCA     KI-Leit-    Sicherer    AI           Pilot-
Audit       linie       Hafen       Literacy     projekt
```

---

## Schritt 1: AI-ISCA Audit

**Was:** Strukturiertes Assessment der aktuellen KI-Situation im Betrieb.

**Inhalt:**
- KI-Inventur (welche Tools werden genutzt?)
- Datenschutz-Prüfung (DSGVO, Schatten-KI)
- Compliance-Check (EU AI Act, Risikoklassen)
- Kompetenzbewertung (wer kann was mit KI?)

**Ergebnis:** Klarer Bericht mit Stärken, Lücken und priorisierten Maßnahmen.

**Preis:** 750 € (eigenständige Leistung, auch ohne Modulreihe buchbar)

---

## Schritt 2: KI-Leitlinie

**Was:** Interne Betriebsanweisung für den sicheren KI-Einsatz.

**Inhalt einer KI-Leitlinie:**
- Welche KI-Tools sind freigegeben?
- Was darf in KI-Tools eingegeben werden (und was nicht)?
- Wer ist für KI-Entscheidungen verantwortlich?
- Wie werden KI-Outputs geprüft (Human-in-the-Loop)?
- Kennzeichnungspflichten für KI-generierte Inhalte

**Zweck:** Schatten-KI verhindern, Compliance sicherstellen, Mitarbeiter schützen.

---

## Schritt 3: Sicherer Hafen

**Was:** Technische und organisatorische Absicherung des KI-Einsatzes.

**Maßnahmen je nach Datenschutzklasse:**

| Datenschutzklasse | Beschreibung | Empfohlene Infrastruktur |
|---|---|---|
| **Hoch** (vertraulich, personenbezogen) | Kundendaten, HR-Daten, Finanzdaten | Lokale KI (z.B. Ollama) — Daten verlassen nie das Unternehmen |
| **Mittel** (intern, nicht öffentlich) | interne Prozesse, Planungsdaten | OpenAI Enterprise (mit AVV und Datenschutzvertrag) |
| **Niedrig** (öffentlich oder unkritisch) | allgemeine Texte, Übersetzungen | n8n Automatisierung, DeepL, Standard-SaaS |

**Schlüsselkonzept:** Nicht alle Daten brauchen die gleiche Schutzinfrastruktur. Richtige Einordnung spart Kosten und Aufwand.

---

## Schritt 4: AI Literacy (Kompetenzaufbau)

**Was:** Systematische Schulung der Mitarbeiter — rechtliche Pflicht nach Art. 4 EU AI Act.

**Inhalte:**
- Grundlagen KI (Modul 1)
- EU AI Act Pflichten (Modul 2)
- Datenschutz und sichere Nutzung (Modul 3)
- Praktische Anwendung im eigenen Arbeitsbereich

**Nachweis:** Teilnahmebestätigung, Dokumentation als Compliance-Nachweis.

**Frank Vullhorst (KI-Sparring)-Lösung:** Module 1–3 als Schulungsreihe, Zertifikat als Kompetenznachweis nach Art. 4.

---

## Schritt 5: Pilotprojekt

**Was:** Erster konkreter KI-Einsatz im Betrieb — kontrolliert, begrenzt, auswertbar.

**Merkmale eines guten Pilotprojekts:**
- Klar abgegrenzter Anwendungsfall
- Messbarer Nutzen (Zeit, Qualität, Kosten)
- Human-in-the-Loop sichergestellt
- Aus Erfahrungen wird gelernt und dokumentiert

**Beispiele:**
- KI-gestützte Angebotserstellung (mit Vorlage + menschliche Prüfung)
- Interne Wissensdatenbank (RAG) für häufige Kundenfragen
- Automatisierte Terminbestätigung oder E-Mail-Vorlagen

---

## Infrastruktur-Entscheidungslogik

**Frage vor jedem KI-Einsatz:** Welche Datenschutzklasse haben die Daten?

```
Vertraulich / personenbezogen?
  → Lokale KI (Ollama, lokales LLM)
  → Daten bleiben im eigenen Netzwerk

Intern / nicht öffentlich?
  → Enterprise-Vertrag (OpenAI Enterprise o.ä. mit AVV)
  → Datenschutzvertrag prüfen

Öffentlich / unkritisch?
  → Standard-SaaS-Tools (DeepL, n8n, ChatGPT ohne sensible Daten)
  → Kostengünstig, geringer Aufwand
```

---

## Kompetenznachweis nach Art. 4 EU AI Act

**Was Frank Vullhorst (KI-Sparring) liefert:**
- Teilnahmebestätigung für Module 1–4
- Dokumentierter Schulungsnachweis
- Grundlage für Compliance-Nachweis gegenüber Behörden oder Partnern

**Format:** Schriftliche Bestätigung, kann in Personalakte / Compliance-Dokumentation aufgenommen werden.

---

## Verbindung zur AI-ISCA Leistung

Modul 4 ist der konzeptionelle Rahmen. Das AI-ISCA Audit ist die praktische Umsetzung von Schritt 1: Strukturiertes Assessment als externer Dienstleister von Frank Vullhorst (KI-Sparring).

Nach dem Audit folgt idealerweise: Modul 1–4 als Schulungsreihe → KI-Leitlinie → Pilotprojekt-Begleitung.

---

## Verbindung zu anderen Modulen

- Modul 1 (KI Grundlagen): Technisches Fundament für Schritt 4 (AI Literacy)
- Modul 2 (EU AI Act): Art. 4 als Pflichtgrundlage für Schritt 4
- Modul 3 (Datenschutz): Sicherer Hafen als Umsetzung von Schritt 3
- AI-ISCA Audit: Umsetzung von Schritt 1
- Automatisierungsberatung (950 €): Vertiefung für Schritt 5 (Pilotprojekt)
