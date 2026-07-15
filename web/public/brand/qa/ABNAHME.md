# Abnahmecheck CI-Rebrand (15.07.2026)

## 1. Suche Alt-Werte (aktiv vs. inaktiv)

### Aktiv (`web/src/**`) — **keine Treffer**
Geprüft: `77b3cf`, `1a3a6b`, `a99eac`, `e8650a`, `f89921`, `dddfeC`, `brand-blue`, `brand-gray`, `brand-text-soft`, `surface-blue`, Manrope, Carlito, Mukta.

### Nur Dokumentation (nicht runtime)
- `web/docs/ci-inventur-farben.md` — historische Inventur mit alten Werten. **Kein Einfluss auf Build.** Kann archiviert/aktualisiert werden.

## 2. Kontrast WCAG AA (Normtext ≥ 4.5:1)

| Paar | Ratio | AA |
|------|------:|----|
| `--brand-dark` auf Weiß | 11.76 | OK |
| `--brand-dark` auf `--bg` (#f8f5f3) | 10.83 | OK |
| `--brand-dark` auf `--surface-muted` (#f1ece8) | 10.03 | OK |
| Weiß auf `--brand-dark` (Footer/CTA) | 11.76 | OK |
| Taupe auf Weiß (Tagline „sicher“) | 4.79 | OK |
| **Weiß auf `--brand-orange` (CTA)** | **2.53** | **Unterschreitung** |
| **`--muted` (#89827b) auf Weiß** | **3.79** | **Unterschreitung** |
| **Teal FAQ-Plus auf Weiß** | **2.48** | **Unterschreitung** (Icon; UI ≥ 3:1 ideal) |

### Vorschläge für Frank
1. **CTA:** Weißer Text auf Orange `#f18825` scheitert. Optionen:
   - Text `--brand-dark` auf Orange (bereits ~4.64:1), oder
   - Button-Fill abdunkeln auf ca. `color-mix(orange 60%, brand-dark)` → ~#ab6727 (≈4.47:1 mit Weiß).
2. **Muted-Text:** `--muted` dunkler mischen, z. B. `color-mix(brand-dark 70%, white)` → ~#7a726a (≈4.73:1).
3. **FAQ-Plus:** bei Teal eher dekorativ; für AA besser `--brand-dark` oder abgedunkeltes Teal.

## 3. Responsive (Fakten aus `qa-notes.json`)

| Viewport | Offer-Grid | Lockup | Footer / Final-CTA | Button |
|----------|------------|--------|--------------------|--------|
| 390 (Mobil) | **1 Spalte** | sichtbar | `--brand-dark` | Orange / Weiß |
| 640–1023 | **2 Spalten** | sichtbar | `--brand-dark` | Orange / Weiß |
| ≥1024 (Desktop) | **3 Spalten** | sichtbar | `--brand-dark` | Orange / Weiß |

Messwerte: FAQ-Plus = `rgb(122, 175, 161)` = `--brand-teal`; Button-Fill = `#f18825`.

## 4. Build
`npm run build` — **erfolgreich** (Next.js 16.2.7, alle Routen statisch).

## 5. Screenshots
Pfad: `web/public/brand/qa/`

Desktop: `desktop-hero.png`, `desktop-angebot.png`, `desktop-faq.png`, `desktop-abschluss-cta.png`, `desktop-footer.png`  
Mobile: `mobile-hero.png`, `mobile-angebot.png`, `mobile-faq.png`, `mobile-abschluss-cta.png`, `mobile-footer.png`

## Offene Punkte für Frank
1. CTA-Kontrast entscheiden (dunklerer Orange-Fill **oder** dunkler Text).
2. Muted-Text ggf. etwas dunkler.
3. FAQ-Plus: Teal belassen oder auf Dark wechseln.
4. Farblich kodierte Tagline-Wörter (sicher/strategisch/sinnvoll) freigeben oder wieder monochrom.
5. Inventur-Doc `web/docs/ci-inventur-farben.md` aktualisieren oder entfernen.
6. Optional: Playwright war nur temporary für Screenshots (`--no-save`); package-lock ggf. prüfen.
