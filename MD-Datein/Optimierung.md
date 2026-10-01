# Optimierung.md: Tracking der UX/UI- und Design-Aufgaben

*Dynamische Tracking-Datei. Neue Einträge: Datum einmal pro Tag (`# TT.MM.JJJJ`), Uhrzeit bei jedem Eintrag (`## HH:MM Uhr`). Erledigte Punkte mit `Done: ` kennzeichnen. Claude ignoriert alle `Done:`-Zeilen.*

*Hinweis 20.07.2026: Datei neu aufgesetzt nach Umstrukturierung des Ordners. Ältere Stände liegen in `z\_Alt\\`.*

\---

# 20.07.2026

## 11:15 Uhr

### Seitenstruktur (aktuell live)

Hero → Angebot/Lösung → Orientierung (3 Flip-Karten + Sonderkachel Claude Cowork) → Expertise → Vertrauen → Nutzen → Abschluss-CTA → Footer. FAQ als Unterseite /faq. CTA-Prinzip: Wert statt Handlung, ein Conversion-Pfad, Ziel /termin.

### alle Offene punkte von UX/UI-Aufgaben: DONE

* Done: Dreifarb-Balken in Header- und Footer-Lockup auf Wortlängen-Segmente umstellen bzw. prüfen (Style Guide 20.07.2026: Taupe so lang wie „sicher", Teal wie „strategisch", Orange wie „sinnvoll"). Regel in CursorAI.md.
* Done: Flip-Karten: DOM-Duplikate klären (aria-hidden/inert), Mobile-Verhalten testen (Tap, Kartenhöhen).
* Done: Kontrastprüfung WCAG AA nach CI-Umstellung als Liste dokumentieren.
* Done: Mobile-Gesamtdurchgang auf echtem Gerät (Hero-Abstände, Karten-Grid, Sonderkachel volle Breite, Hamburger-Menü).
* Done: OG-Bild auf neuer Farbwelt mit Signatur-Lockup erzeugen und einbinden.
* Done: Zertifikats-Badge: finale visuelle Form (Rahmen/Fläche) und ggf. Datum „Februar 2026".

\---

# 27.08.2026

## 11:30 Uhr

### Setup-Wartung durchgeführt

Die 15 lokalen Kopien der Kunden-Wissensdateien, der lokale `StyleGuide\\`-Ordner und `Analyse-Input.md` wurden gelöscht. Seitdem gilt: keine Kopien, nur Verweise. Master-Ordner für CI-Assets ist `Kunden\\z\_Strategie\\09\_StyleGuide\\`. Befundbericht (aktuell): `Wartungsbericht_myWebpage_2026-10-01.md` (Nachfolger des August-Entwurfs).

Die offenen Punkte aus `Analyse-Input.md` sind hierher übernommen worden, weil diese Datei entfallen ist.

### Offene Website-Aufgaben, am 27.08.2026 am Live-HTML gegengeprüft

Grundlage: Abruf von `frankvullhorst.de` und `frankvullhorst.de/termin` am 27.08.2026. Die vier Punkte sind belegt, nicht vermutet.

* Done um 11:40 am 27.08.2026: **W1 Metadaten auf `/termin` korrigieren.** `og:description` lautet dort „Kostenloses Erstgespräch: Klarheit für Ihren Betrieb, sicher, sinnvoll, strategisch." Die Reihenfolge ist falsch, verbindlich ist sicher, strategisch, sinnvoll. Zusätzlich zeigen `twitter:title` und `twitter:description` auf `/termin` weiterhin die Texte der Startseite. Gleiches auf `/faq` prüfen. **Höchste Priorität, weil diese Felder beim Teilen in sozialen Netzwerken sichtbar sind.**
* Done um 11:40 am 27.08.2026: **W2 `meta-keywords` bereinigen.** Enthält auf Startseite und `/termin` weiterhin „KI-Sparring". Der Begriff ist abgelöst. Ersetzen durch das Keyword-Set aus dem Style Guide: KI Beratung Darmstadt, KI Strategie Unternehmen, KI Training Handwerk, EU AI Act KMU, KI Kompetenz Unternehmen, KI Beratung Rhein-Main.
* Done um 11:40 am 27.08.2026: **W3 Signatur-Lockup im Markup entzerren.** Der zugängliche Text lautet aktuell „Frank Vullhorst ki: sicher strategisch sinnvoll ki: sicher strategisch sinnvoll". Die Tagline steht doppelt und ohne Leerzeichen, an vier Stellen der Startseite und zweimal auf `/termin`. Screenreader lesen das als eine unverständliche Zeichenkette vor. Doppelung entfernen und Wortabstände im zugänglichen Text sicherstellen.
* Done um 11:40 am 27.08.2026: **W4 Flip-Karten entdoppeln.** Jede der drei Baustein-Karten erscheint dreimal im ausgelieferten Text (Vorderseite doppelt plus Rückseite). Duplikate mit `aria-hidden` oder `inert` ausblenden, sonst liest ein Screenreader alle Inhalte mehrfach.

### Erledigt und am Live-HTML bestätigt

* Done: Vertrauens-Section zeigt die freigegebene Kurzform „Vom 3D-Druck zur KI: Neue Technologie in Betriebe zu bringen ist mein Beruf." ohne doppelte Jahreszahl.

\---

# 01.10.2026

## 09:20 Uhr

### Seitenstruktur (aktuell live)

Hero → **Nutzen** → Das Angebot → Expertise → **Haltung** → Vertrauen → So arbeiten wir zusammen (3 Flip-Karten + Claude Cowork) → Final-CTA „Jetzt den ersten Schritt machen“ → Footer.

FAQ / Impressum / Datenschutz / KI-Salon / Termin bleiben Unterseiten. Nav: Nutzen · Angebot · Über mich · Haltung · Termin · KI-Salon (Desktop); mobil zusätzlich So arbeiten wir · FAQ.

### Content- und UX-Umbau (Done, live auf frankvullhorst.de)

* Done: Texte und Reihenfolge aus `2026-09-30_Landingpage_Texte_final.md` übernommen; neuer Abschnitt Haltung zwischen Expertise und Vertrauen.
* Done: Nutzen nach oben; Punkte: Strategischer KI-Weitblick, Branchenwissen, Freiraum für Ihr Kerngeschäft (ersetzt Zeitersparnis).
* Done: Section-Überschriften ergänzt (Nutzen, Expertise, Haltung, Vertrauen) im Stil von Angebot / So-arbeiten-wir.
* Done: Genau zwei Gesprächs-CTAs (Hero + Final), Text: Kostenfreies Orientierungsgespräch [ 30 Minuten ]; mittlerer Button unter Claude entfernt.
* Done: Claude-Cowork-Front wie Baustein-Karten (gleicher Grid, Hover-Streifen); Rückseite groß, Öffnen bleibt oberhalb des dunklen Final-CTA.
* Done: Expertise-Fluss: Intro neben Portrait, Fortsetzung ab „Sie bleiben Chef…“ unter dem Bild; Surface Expertise = Teal für Kontrast zu Haltung.
* Done: Push auf `main` (Commit u. a. „Startseite neu ordnen…“); Sitemap `/sitemap.xml` und `robots.txt` live 200.
* Done: Search Console: Sitemap `sitemap.xml` eingereicht und erfolgreich verarbeitet; Google hat 6 Seiten erkannt.
* Done: OG-Bild erzeugen und einbinden (siehe auch Eintrag 20.07.2026).
* Done: Ungenutzte CTA-Strings in `copy.ts` bereinigt (nur noch `finalCta` und `triggers.terminIntro`).

### Offen / nächste Schritte

* Done: Meta-Description, OG- und Twitter-Texte: „Erstgespräch“ durch „Orientierungsgespräch“ ersetzen (Entscheidung Frank 01.10.2026), damit Google-Ergebnis und Buttons gleich lauten.
* Done: Vertrauen, Punkt 2: Jahreszahl entfernen. Neuer Wortlaut: „Vom 3D-Druck zur KI: Neue Technik in Betriebe zu bringen ist mein Beruf.“ Die Entscheidung vom 27.08.2026 (keine doppelte Jahreszahl) gilt weiter, „seit 1994“ steht nur in der Expertise.
* ToDo: Bühnenclown auf der Website: Entscheidung offen.

