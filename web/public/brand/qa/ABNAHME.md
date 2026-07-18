# Abnahmecheck CI-Rebrand (Stand 18.07.2026, Prompt 13)

Referenz: `Styleguide/Farbgebung/260715_FarbzuordnungFrank02.pdf`  
Inventur: `web/docs/ci-inventur-farben.md`

---

## 1. Aktives CI (Soll = Ist)

### Primärfarben
| Bedeutung | Hex | Token |
|-----------|-----|-------|
| sicher | `#7b7163` | `--brand-taupe` |
| strategisch | `#7aafa1` | `--brand-teal` |
| sinnvoll | `#f18825` | `--brand-orange` |
| Text / Wortmarke | `#41362a` | `--brand-dark` |

### Akzent / Sekundär
| Hex | Token |
|-----|-------|
| `#75c2a9` | `--accent-green` |
| `#d3da3d` | `--accent-lime` |
| `#d7cabd` | `--sand` |
| `#ffffff` | `--surface` / Mix-Basis |

### Fonts
| Rolle | Schnitt |
|-------|---------|
| Name, Headlines | Barlow Medium (500) |
| Tagline, Subline, Fließtext | Barlow Light (300) |

### Logo
CSS-Lockup `BrandSignature`: Name, Tagline, drei gleich breite Farbbalken.

---

## 2. Kontrast WCAG AA (Prompt 13)

Normtext ≥ 4.5:1. Messungen nach Fixes.

### Besteht AA

| Paar | Ratio | Status |
|------|------:|--------|
| `--brand-dark` auf Weiß | 11.76 | OK |
| `--brand-dark` auf `--bg` | 10.83 | OK |
| `--brand-dark` auf `--surface-muted` | 10.03 | OK |
| `--brand-dark` auf `--surface-warm` | 10.14 | OK |
| `--brand-dark` auf `--surface-teal` | 10.66 | OK |
| Weiß auf `--brand-dark` (Final-CTA / Footer) | 11.76 | OK |
| Taupe auf Weiß | 4.79 | OK |
| `--muted` (75 % dark) auf Weiß | 5.48 | OK |
| `--muted` auf `--bg` | 5.05 | OK |
| `--muted` auf `--surface-muted` | 4.67 | OK |
| `--muted` auf `--surface-warm` | 4.72 | OK |
| `--muted` auf `--surface-teal` | 4.97 | OK |
| **`--brand-dark` auf Orange-CTA** | **4.64** | **OK (Fix)** |
| **`--brand-dark` auf CTA-Hover** (Orange 85 % Weiß) | **5.33** | **OK (Fix)** |
| Microcopy Final-CTA (~70 % Weiß auf Dark) | ~5.3 | OK |

### Behoben in Prompt 13

| Vorher | Problem | Fix |
|--------|---------|-----|
| Weiß auf Orange `#f18825` | 2.53 | Button-Text → `--brand-dark` |
| Hover Weiß auf abgedunkeltes Orange | 3.73 | Hover → Orange aufgehellt, Text bleibt dark |
| `--muted` 62 % dark | 3.79 auf Weiß, schlechter auf Flächen | `--muted` → 75 % dark |
| Offer-Meta Teal-Mix | 2.87–3.37 | Farbe → `--muted` |
| Trust-Link Teal | 2.48 | Farbe → `--brand-dark` |
| FAQ-Plus Teal | 2.48 | Farbe → `--brand-dark` |

### Bewusst nicht als Fließtext genutzt (dekorativ / Grafik)

| Farbe | Ratio auf Weiß | Hinweis |
|-------|---------------:|---------|
| Teal `#7aafa1` | 2.48 | nur Farbbalken / Flächen |
| Green `#75c2a9` | 2.09 | sparsame Akzentfläche |
| Lime `#d3da3d` | 1.51 | sparsame Akzentfläche |

---

## 3. Mobile & Layout (Prompt 13)

| Check | Ergebnis |
|-------|----------|
| Hero-Abstand unter Header | angepasst (`7.25rem` / `7.75rem` Desktop) |
| Offer-Grid 1 → 2 → 3 Spalten | bestätigt (`1fr` / `640px` / `1024px`) |
| Sonderkachel volle Breite | `width: 100%` |
| Click-Trigger / Microcopy | `max-width: 40rem`, `text-wrap: pretty`, Umbruch erlaubt |
| Lange CTA-Buttons | `white-space: normal`, `text-wrap: balance` |
| Hamburger-Anker | `#angebot`, `#so-arbeiten-wir`, `#ueber-mich`, `#nutzen`, `#termin`, `/faq` |
| Tablet-Nav (6 Einträge) | engere Gaps / kleinere Schrift 768–1023px |

---

## 4. Typografie

| Token | Verwendung |
|-------|------------|
| `--type-display` / `--type-display-mobile` | Hero-Headline, Barlow Medium |
| `--type-section` | Section-Titles |
| `--type-lead` | Sublines / Leads, Barlow Light |
| `--type-body` | Fließtext, Barlow Light |
| `--prose: 40rem` | `max-width` auf `.section-lead` und `.body-text` |

---

## 5. Build
`npm run build` — siehe letzter Lauf nach Prompt 13.

---

## 6. Screenshots
Pfad: `web/public/brand/qa/` — für finale Abnahme neu erzeugen empfohlen (Funnel + Kontrast-Fixes).

---

## Offene Punkte für Frank
1. Visuelles Review: dunkler CTA-Text auf Orange (statt Weiß) freigeben.
2. QA-Screenshots neu erzeugen.
