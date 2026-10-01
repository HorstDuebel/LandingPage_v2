# Wartungsbericht myWebpage

**Status: Aktuell.** Erstellt/aktualisiert am 01.10.2026 durch Cursor Agent.
**Bezug:** Live-Website https://frankvullhorst.de und Code in `LandingPage_v3/web`.
**Vorläufer:** August-Entwurf (Doppelkopien in z_FrankV/z_Wissen) war Historie; laut Eintrag 27.08.2026 in `Optimierung.md` bereits bereinigt (Kopien gelöscht, nur noch Verweise). Diese Datei heißt seit 01.10.2026 `Wartungsbericht_myWebpage_2026-10-01.md`.

---

## Gesamtbild 01.10.2026

Die Startseite wurde inhaltlich und strukturell neu geordnet und ist live. Technik (Next.js 16, Deploy von GitHub nach IONOS) ist stabil. SEO-Grundlagen (robots.txt, sitemap.xml) sind vorhanden und antworten mit HTTP 200. Die Sitemap ist in der Search Console eingereicht und erfolgreich verarbeitet; Google hat 6 Seiten erkannt.

Leitdokumente im Ordner `MD-Datein/` wurden am 01.10.2026 an diesen Stand angeglichen: `CursorAI.md`, `Optimierung.md`, `CorporateIdentity.md`, dieses Wartungsdokument, sowie Abgleiche in Profilblatt und Positionierungsstrategie.

---

## A: Website-Stand (abgeschlossen)

| Nr | Thema | Stand |
| - | - | - |
| A1 | Section-Reihenfolge | Hero → Nutzen → Angebot → Expertise → Haltung → Vertrauen → So arbeiten wir → Final-CTA → Footer |
| A2 | Neuer Abschnitt Haltung | Live zwischen Expertise und Vertrauen; Überschrift „Nüchtern hinsehen statt hypen.“ |
| A3 | Nutzen | Nach oben; Punkte Strategischer KI-Weitblick / Branchenwissen / Freiraum für Ihr Kerngeschäft |
| A4 | CTAs | Genau zwei Gesprächs-Buttons (Hero + Final): „Kostenfreies Orientierungsgespräch [ 30 Minuten ]“ → `/termin` |
| A5 | Flip-Karten / Claude Cowork | Front wie Bausteine; Hover-Streifen; Rückseite groß, bleibt im Abschnitt So-arbeiten-wir |
| A6 | Deploy | Push `main` (GitHub → IONOS), live geprüft (u. a. Haltung, Freiraum-Texte) |

---

## B: SEO / Search Console

| Nr | Thema | Befund | Stand |
| - | - | - | - |
| B1 | robots.txt | Live 200; `Sitemap: https://frankvullhorst.de/sitemap.xml`; Disallow `/d/` | belassen |
| B2 | sitemap.xml | Live 200; Routen aus `site.ts` | Done: in GSC eingereicht und erfolgreich verarbeitet |
| B3 | WordPress-Sitemaps | nicht vorhanden (Next.js) | nicht verwenden |
| B4 | Indexierung | Startseite laut Frank bereits indexiert; Sitemap: Google hat 6 Seiten erkannt | Done |

---

## C: Offene Punkte (nicht blockierend)

| Nr | Thema | Prio |
| - | - | - |
| C1 | ~~Sitemap in Google Search Console absenden~~ | Done 01.10.2026: eingereicht, verarbeitet, 6 Seiten erkannt |
| C2 | ~~OG-Bild erzeugen und einbinden~~ | Done (Abgleich Optimierung 20.07. / 01.10.) |
| C3 | ~~Ungenutzte CTA-Strings in `copy.ts` bereinigen~~ | Done 01.10.2026 |
| C4 | ~~Bildwelt: weitere Fotos (Gespräch/Workshop) beschaffen~~ | Done (CI 01.10.) |
| C5 | ~~Zertifikats-Badge finale Form~~ | Done (Abgleich Optimierung 20.07. / CI 01.10.) |
| C6 | ~~Meta-Description, OG- und Twitter-Texte: „Orientierungsgespräch“ statt „Erstgespräch“ (Entscheidung 01.10.2026)~~ | Done 01.10.2026 |
| C7 | Bühnenclown auf der Website: Entscheidung (ToDo) | offen |
| C8 | ~~Vertrauen, Punkt 2 ohne „seit 1994“ (Entscheidung 27.08.2026 gilt weiter)~~ | Done 01.10.2026 |


---

## D: Dokumentenpflege MD-Datein/

| Datei | Aktion 01.10.2026 |
| - | - |
| `CursorAI.md` | Neu auf aktuellen Stand geschrieben (IA, Nav, Surfaces, CTAs, Sitemap, Hosting GitHub/IONOS) |
| `Optimierung.md` | Eintrag 01.10.2026 ergänzt |
| `CorporateIdentity.md` | Eintrag 01.10.2026 ergänzt |
| `Profilblatt_Frank_Vullhorst.md` | Website-Abgleich / offene Punkte aktualisiert; Kern-Satz an führende Positionierung angeglichen, EQUIPP3D als Referenz entfernt |
| `Positionierungsstrategie_Venn_Drei_Welten.md` | Kurzer Live-Bezug ergänzt; Kern-Satz an führende Positionierung angeglichen; Kopie in 06_PinPong gelöscht, diese Datei ist die einzige Fassung |
| dieses Dokument | `Wartungsbericht_myWebpage_2026-10-01.md` (ersetzt den August-Entwurf als führenden Wartungsstand) |

---

*Aktualisiert 01.10.2026. Quelle: Live-Code und Deploy auf frankvullhorst.de*
