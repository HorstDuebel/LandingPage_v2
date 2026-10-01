# CorporateIdentity.md: Tracking der CI-Entscheidungen
*Dynamische Tracking-Datei. Neue Einträge: Datum einmal pro Tag (`# TT.MM.JJJJ`), Uhrzeit bei jedem Eintrag (`## HH:MM Uhr`). Erledigte Punkte mit `Done: ` kennzeichnen. Claude ignoriert alle `Done:`-Zeilen.*

---

# 15.06.2026

## 12:30 Uhr

### Markenidentität
- Markenauftritt als Person: **Frank Vullhorst** (nicht VerstehWerk)
- Wortmarke: „Frank Vullhorst ki: sicher strategisch sinnvoll"
- Tagline: ki: sicher strategisch sinnvoll

### Aktueller CI-Stand (aus Codebase)
- Hintergrundfarbe: Weiß (`#ffffff`)
- Farbpalette: Grau, Orange, Blau (laut globals.css Design-Tokens)
- Fonts: Manrope (Headlines), Carlito (Subheadings), Mukta (Fließtext)
- Tonalität: Sachlich-warm, kein Hochglanz, kein Consulting-Sprech
- Layout-Referenz: editorial, ruhig, viel Weißraum (Referenz: susannevolkwein-inspiriert)

### Offene CI-Entscheidungen
- Done: Logo: noch kein finales Logo vorhanden – muss entwickelt werden
- Done: Wortmarke typografisch ausbauen und prominent einsetzen
- Done: Zertifikats-Badge Cert-IT KI-Manager visuell gestalten und platzieren
- Done: Bildwelt: weitere Fotos (Gesprächssituation, Workshop) beschaffen

---

# 22.06.2026

## 10:00 Uhr

- Done: Domain FrankVullhorst.de live – Hosting IONOS.de
- Done: E-Mail Info@FrankVullhorst.de aktiv

### Festgelegte Entscheidungen
- Done: E-Mail: Info@FrankVullhorst.de (aktiv)
- Done: Domain: FrankVullhorst.de (live, Hosting IONOS.de)

---

# 15.07.2026

## 18:22 Uhr

### Neues Corporate-Design-Paket übernommen (Quelle: Ordner 2026-07-15_Updates)
Grundlage: `260715_FarbzuordnungFrank02.pdf` / `.png` (Farbsystem und Typografie) sowie `260715_SignaturFrank.eps` / `.png` (Signatur).
Diese Festlegungen lösen die frühere Palette „Grau, Orange, Blau" und die Fonts Manrope / Carlito / Mukta ab (siehe Eintrag 15.06.2026).

### Farbsystem
Wort zu Farbe (Markenkern „sicher strategisch sinnvoll"):
- sicher = Taupe `#7b7163`
- strategisch = Teal `#7aafa1`
- sinnvoll = Orange `#f18825`
- Basis / Dunkel (Wortmarke „Frank Vullhorst", Text) = `#41362a`

**Primärfarben**. Ziel: Wiedererkennung, Unternehmensbereiche. Einsatz: Logotype, Schrift, Hintergrund.
- `#7b7163`, `#7aafa1`, `#f18825` (Basis-Dunkel `#41362a`)

**Akzentfarben**. Ziel: Aufmerksamkeit, Aktivierung. Einsatz: Buttons, Call-to-Actions, wichtige Informationen, Hervorhebungen.
- `#75c2a9`, `#d3da3d`, `#ffffff`

**Sekundärfarben**. Ziel: Ergänzung der Primärfarben. Einsatz: Grafiken.
- `#d7cabd`, `#41362a`

**Neutralfarben**. Ziel: Ausgewogenheit, Flexibilität. Einsatz: Grafiken, Hintergrundflächen.
- Helle Tönungen der Primär- und Akzentfarben (Teal, Taupe, Orange, Lime jeweils aufgehellt). Im Quelldokument nur als Farbfelder ohne Hex-Werte dargestellt. Konkrete Hex-Werte bei Bedarf aus den Assets ableiten, nicht schätzen.

**Farbwelten**. Ziel: Nähe, Erreichbarkeit, Professionalität. Einsatz: Illustrationen, Fotografien, Abbildungen.

### Typografie
- Barlow Medium: „Frank Vullhorst" (Name, Headlines)
- Barlow Light: „ki: sicher strategisch sinnvoll" (Tagline, Subline)
- Löst Manrope / Carlito / Mukta ab.

### Signatur / Logo-Lockup
- Zeile 1 „Frank Vullhorst" (Barlow Medium, `#41362a`), Zeile 2 „ki: sicher strategisch sinnvoll" (Barlow Light)
- Darunter eine feine Trennlinie mit Dreifarb-Balken: Taupe `#7b7163`, Teal `#7aafa1`, Orange `#f18825`
- Zwei Varianten im Quelldokument: schlicht (nur Text) und mit Dreifarb-Signatur
- Assets: `260715_SignaturFrank.eps` (Vektor, für Druck und freie Skalierung), `260715_SignaturFrank.png` (Web)

### Damit als vorhanden markiert (aus früher offenen CI-Punkten)
- Logo / Signatur nun vorhanden (Lockup mit Dreifarb-Balken)
- Wortmarke typografisch definiert (Barlow Medium / Light)
- Hinweis: „final" erst nach ausdrücklicher Freigabe durch Frank kennzeichnen.

---

# 17.07.2026

## 09:00 Uhr

### CI-Paket ins Regelwerk übernommen (Dokumentation, nicht Code)
- Neue Palette (Taupe / Teal / Orange auf Basis-Dunkel) und Fonts (Barlow Medium / Light) sind jetzt in `CLAUDE.md` (Kurzreferenz) und in der führenden Tonalitäts-Datei `z_FrankV/e_Tonalitaet_und_Fachsprache.md` als aktuelle Vorgabe verankert. Alte Palette Grau/Orange/Blau und Fonts Manrope/Carlito/Mukta gelten nur noch als Historie (Einträge 15.06.2026) und im Archiv `z_Alt`.
- Gedankenstrich-Verbot als unmissverständliche Hartregel ergänzt (in `CLAUDE.md` und `e_Tonalitaet_und_Fachsprache.md`): keine „–", „—" oder als Gedankenstrich genutzte „-"; stattdessen Komma, Punkt oder Doppelpunkt. Bindestriche in zusammengesetzten Wörtern bleiben erlaubt.
- Done: technische Umsetzung im Code (`globals.css`, Fonts, Signatur-SVG), am 01.10.2026 am Live-Stand bestätigt.

---

# 20.07.2026

## 11:00 Uhr

### Style Guide ist jetzt führende CI-Quelle
- Style Guide erstellt (19.07.2026) und von Frank überarbeitet (20.07.2026): `StyleGuide\StyleGuide_FrankVullhorst_2026-07-19.pdf` (Version 1.0, Status: Entwurf zur Freigabe). Er fasst Marke, Logo, Farben, Typografie, Sprache, CTA-Regeln, Bildwelt, Website-Anwendung, SEO und Stammdaten zusammen und ist für CI-Fragen führend. Diese Datei bleibt das Tracking der CI-Entscheidungen.
- Präzisierung Dreifarb-Balken (Änderung durch Frank): Die drei Segmente sind nicht gleich breit. Jedes Segment ist genauso lang wie das zugehörige Wort der Tagline: Taupe `#7b7163` unter „sicher", Teal `#7aafa1` unter „strategisch", Orange `#f18825` unter „sinnvoll".
- Assets umgezogen: Farbzuordnung und Signatur-Dateien (`260715_FarbzuordnungFrank02.pdf`, `260715_SignaturFrank.eps`, `260715_SignaturFrank.png`) liegen jetzt im Ordner `StyleGuide\`. Pfadangaben mit `2026-07-15_Updates` sind Historie.
- Markenkern mit fester Farbzuordnung dokumentiert: sicher = Taupe, strategisch = Teal, sinnvoll = Orange.
- Done: Prüfauftrag an die Website: Der Dreifarb-Balken im Header- und Footer-Lockup setzt die Wortlängen-Segmente um (bestätigt 01.10.2026).

---

# 01.10.2026

## 09:20 Uhr

### CI am Live-Stand bestätigt
- Done: Signatur-Lockup (Header/Footer/Expertise) mit Wortmarke und wortlängenbezogenem Dreifarb-Balken im Code aktiv.
- Done: Surfaces und Brand-Tokens in `globals.css` wie CI 15.07.2026 (Taupe/Teal/Orange/`#41362a`); Expertise-Section nutzt `--surface-teal` zur Abgrenzung von Haltung (`--surface-muted`).
- Done: Angebots-Tagline „sicher / strategisch / sinnvoll“ farbig (Taupe/Teal/Orange), bewusst ohne „ki:“ in der großen Überschrift.
- Done: Primäre CTAs orange, Text brand-dark; zwei Orientierungsgespräch-Buttons auf der Startseite.

### Damit als erledigt (Abgleich 01.10.2026 mit Optimierung 20.07.)
- Done: Bildwelt: weitere Fotos (Gespräch/Workshop) beschaffen.
- Done: Zertifikats-Badge Cert-IT: finale visuelle Form.
- Done: OG-Share-Bild an aktuelle Wortmarke/Farbwelt.
