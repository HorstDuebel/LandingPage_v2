# CI-Inventur: Farben, Fonts & Logo (Stand 18.07.2026)

Aktiver Stand nach CI-Umstellung (Prompt 11).  
**Quelle Farbcodes & Font:** `Styleguide/Farbgebung/260715_FarbzuordnungFrank02.pdf`  
**Logo/Signatur:** `Styleguide/Logo+Font/` und `web/public/brand/`

---

## 1. Primärfarben (PDF → Tokens)

Ziel laut PDF: Wiedererkennung, Unternehmensbereiche. Einsatz: Logotype, Schrift, Hintergrund.

| Bedeutung | Hex | Token | Einsatz |
|-----------|-----|-------|---------|
| sicher | `#7b7163` | `--brand-taupe` | Wortmarke-Balken „sicher“, warme Flächen |
| strategisch | `#7aafa1` | `--brand-teal` | Wortmarke-Balken „strategisch“, Meta, Teal-Flächen |
| sinnvoll | `#f18825` | `--brand-orange` | Wortmarke-Balken „sinnvoll“, CTAs, Akzente |
| Text / Wortmarke | `#41362a` | `--brand-dark` | Name, Fließtext, Final-CTA-Hintergrund |

Alias: `--color-accent` → `var(--brand-orange)`.

---

## 2. Akzentfarben (PDF)

Ziel: Aufmerksamkeit, Aktivierung. Einsatz: Buttons, CTAs, Hervorhebungen.

| Hex | Token | Rolle |
|-----|-------|--------|
| `#75c2a9` | `--accent-green` | Sekundärer Akzent (sparsam) |
| `#d3da3d` | `--accent-lime` | Sekundärer Akzent (sparsam) |
| `#f18825` | `--brand-orange` | Primärer Button-Fill |

CTA-Regel im Code: `.btn-primary` = Orange, Hover = `color-mix(orange 72%, brand-dark)`.

---

## 3. Sekundär- und Neutralfarben (PDF)

Ziel: Ergänzung / Ausgewogenheit. Einsatz: Grafiken, Hintergrundflächen.

| Hex | Token / Ableitung | Rolle |
|-----|-------------------|--------|
| `#d7cabd` | `--sand` | Sekundär für Grafiken, Basis für helle Flächen |
| `#41362a` | `--brand-dark` | auch als dunkle Sekundär-/Kontrastfläche |
| `#ffffff` | `--surface` / Mix-Basis | Weiß, keine erfundenen Neutraltöne |

### Abgeleitete Flächen (`globals.css`)

| Token | Ableitung |
|-------|-----------|
| `--surface` | `#ffffff` |
| `--surface-muted` | `color-mix(sand 35%, white)` |
| `--surface-warm` | `color-mix(brand-taupe 12%, white)` |
| `--surface-teal` | `color-mix(brand-teal 12%, white)` |
| `--bg` | `color-mix(sand 18%, white)` |
| `--text` | `var(--brand-dark)` |
| `--muted` | `color-mix(brand-dark 62%, white)` |
| `--border` | `color-mix(brand-taupe 24%, white)` |

---

## 4. Fonts (PDF: Barlow Medium / Barlow Light)

| Rolle | Schnitt | Gewicht | Token |
|-------|---------|---------|-------|
| Name, Headlines | Barlow Medium | 500 | `--font-heading` |
| Tagline, Kicker, Subline | Barlow Light | 300 | `--font-subheading` |
| Fließtext | Barlow Light | 300 | `--font-body` |

Einbindung: `next/font/google` in `web/src/app/layout.tsx`, Variable `--font-barlow`, Gewichte **nur 300 und 500**.

---

## 5. Logo / Signatur-Lockup

Laut PDF und Umsetzung in `BrandSignature`:

- **Name:** „Frank Vullhorst“ → Barlow Medium, `--brand-dark`
- **Tagline:** „ki: sicher strategisch sinnvoll“ → Barlow Light
- **Farbbalken unter den Wörtern:**
  - sicher → Taupe `#7b7163`
  - strategisch → Teal `#7aafa1`
  - sinnvoll → Orange `#f18825`

### Assets

| Datei | Status |
|-------|--------|
| `web/public/brand/260715_SignaturFrank.png` | vorhanden |
| `web/public/brand/260715_SignaturFrank.eps` | vorhanden |
| `Styleguide/Logo+Font/260715_SignaturFrank.png` | Quelle |
| `Styleguide/Logo+Font/260715_FarbzuordnungFrank02.png` | visuelle Referenz Lockup |
| SVG-Variante | nicht vorhanden; Web nutzt CSS-Lockup + PNG |

Komponente: `web/src/components/brand-signature.tsx` (Header- und Section-Variante).

---

## 6. Wichtige Einsatzstellen (aktuell)

| Element | Farbe / Token |
|---------|----------------|
| Primär-Buttons | `--brand-orange`, Text weiß |
| Final-CTA-Block | Hintergrund `--brand-dark` |
| Header-Tint | Orange leicht auf Weiß gemischt |
| Offer-Meta / Trust-Link | Teal-Mischungen |
| FAQ-Plus (`/faq`) | `--brand-teal` |
| Portrait-Ecke Expertise | `--brand-orange` |
