# j_Wissen_Modul3_Datenschutz.md
# Modul 3: Datenschutz & KI-Anwendung – Wissensdatei

Stand: Mai 2026 | Quelle: Modul_3 - Datenschutz Anwendung (v3).pdf

---

## Zweck des Moduls

Verbindet Datenschutzrecht (DSGVO) mit KI-Compliance (EU AI Act) und technischen Schutzmaßnahmen (RAG, XAI). Zeigt Betrieben, wie sie KI verantwortungsvoll und sicher einsetzen.

Format: Halbtagsworkshop | Preis: 680 €

---

## Das 3-Schichten-Modell

Frank Vullhorst (KI-Sparring) erklärt Datenschutz + KI über drei Ebenen, die aufeinander aufbauen:

```
┌─────────────────────────────────┐
│       EU AI Act                 │  Risikoklassen, Art. 4 Kompetenz
├─────────────────────────────────┤
│       ISO 42001                 │  KI-Managementsystem, Prozesse
├─────────────────────────────────┤
│       DSGVO                     │  Personenbezogene Daten, Grundlage
└─────────────────────────────────┘
```

**Leserichtung:** DSGVO ist die Basis. ISO 42001 fügt Managementprozesse hinzu. EU AI Act ergänzt risikobasierte Pflichten.

---

## 3 Grundregeln für datenschutzkonforme KI-Nutzung

### Regel 1: Datensparsamkeit
Nur die Daten verwenden, die wirklich notwendig sind. Keine überflüssigen Eingaben in KI-Systeme — besonders keine personenbezogenen Daten, wenn nicht erforderlich.

DSGVO-Grundlage: Art. 5 Abs. 1 lit. c (Datenminimierung)

### Regel 2: RAG-Nachweis (Nachvollziehbarkeit)
Wenn KI mit internen Dokumenten arbeitet (RAG), muss nachvollziehbar sein, welche Quellen verwendet wurden und wie die Antwort zustande kam.

Zweck: Transparenz, Prüfbarkeit, Fehlerkorrektur.

### Regel 3: Transparenz & VVT
KI-Einsatz mit personenbezogenen Daten muss im **Verzeichnis der Verarbeitungstätigkeiten (VVT)** dokumentiert werden.

Pflicht nach: DSGVO Art. 30

---

## RAG – Retrieval-Augmented Generation (technisch)

**Was es ist:** KI-Architektur, bei der die KI zuerst in einer lokalen Wissensbasis sucht, bevor sie antwortet.

**Ablauf:**
1. Nutzer stellt Frage
2. System sucht relevante Dokumente in der internen Wissensbasis
3. KI formuliert Antwort auf Basis dieser Dokumente
4. Antwort bleibt nachvollziehbar und quellengebunden

**Vorteil für Datenschutz:**
- Unternehmensdaten verlassen nicht das eigene System
- Keine Weitergabe an externe KI-Dienste nötig
- Halluzination wird reduziert (KI antwortet aus echten Quellen)

**Einsatzbeispiel:** Internes FAQ-System, Kundenservice auf Basis eigener Handbücher, Angebotserstellung aus vorhandenen Vorlagen.

---

## XAI und Bias im Datenschutzkontext

**XAI (Explainable AI):**
KI-Entscheidungen müssen erklärbar sein — besonders wenn sie Personen betreffen.
DSGVO-Grundlage: Art. 22 (automatisierte Entscheidungen), Recht auf Erklärung.

**Bias-Typen (Auswahl):**

| Bias-Typ | Beschreibung |
|---|---|
| Historischer Bias | Trainingsdaten spiegeln vergangene Ungleichheiten wider |
| Repräsentationsbias | Bestimmte Gruppen sind in Trainingsdaten unterrepräsentiert |
| Algorithmischer Bias | Das Modell selbst verstärkt Verzerrungen |
| Bestätigungsbias | KI bestätigt vorhandene Annahmen statt zu hinterfragen |

**Relevanz:** Wenn KI bei Personalentscheidungen, Kreditvergabe oder Kundenklassifizierung eingesetzt wird → Bias-Prüfung erforderlich.

---

## Human-in-the-Loop – Rechtliche Grundlage

**Was es bedeutet:** Ein Mensch prüft und genehmigt KI-Entscheidungen, bevor sie wirksam werden.

**Rechtliche Basis:**
- **EU AI Act Art. 13:** Transparenz von Hochrisiko-KI-Systemen
- **EU AI Act Art. 14:** Menschliche Aufsicht bei Hochrisiko-KI
- **DSGVO Art. 22:** Recht auf menschliche Überprüfung automatisierter Entscheidungen

**Praxis:** KI macht Vorschlag → Mensch prüft → Mensch entscheidet. Keine vollautomatische Entscheidung bei Hochrisiko-Anwendungen oder personenbezogenen Daten.

---

## Schatten-KI und Datenschutz

Nicht autorisierter KI-Einsatz (Schatten-KI) ist nicht nur ein Compliance-Problem, sondern ein direktes Datenschutzrisiko:
- Mitarbeiter geben unwissentlich Kundendaten in öffentliche KI-Tools ein
- Keine Auftragsverarbeitungsverträge (AVV) mit dem KI-Anbieter
- Keine Dokumentation im VVT
- Mögliche DSGVO-Verstöße mit Bußgeldrisiko

**Lösung:** KI-Leitlinie + Schulung (Modul 1 & 2) + klare Freigabeprozesse.

---

## Verbindung zu anderen Modulen

- Modul 1 (KI Grundlagen): RAG, XAI, Human-in-the-Loop als technische Konzepte
- Modul 2 (EU AI Act): Rechtlicher Rahmen, Risikoklassen, Art. 4
- Modul 4 (5-Schritte-Fahrplan): „Sicherer Hafen" als Umsetzungsschritt
- AI-ISCA Audit: Datenschutz-Prüfpunkte im Audit
