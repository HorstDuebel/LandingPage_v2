# CI-Inventur: Farben & Tokens (Stand Vorbereitung 15.07.2026)

Vorbereitung für Rebrand. **Sichtbares Design unverändert.**  
Referenz geplant: `CursorAI.md` → Abschnitt „Design-Tokens & Fonts (Stand 15.07.2026)“ — Datei im Repo **nicht gefunden**.

---

## 1. Zentrale Tokens (`web/src/app/globals.css` → `:root`)

| Token | Wert | Rolle |
|-------|------|--------|
| `--brand-gray` | `#a99eac` | Basis Grau/Lila, muted, Borders |
| `--brand-orange` | `#f89921` | Primär-Orange (Buttons, Hover, Header-Tint) |
| `--color-accent` | `#e8650a` | Akzent-Orange (dunkler, Kickers, CTAs, Hover-Linien) |
| `--brand-blue` | `#77b3cf` | Blau/Teal (Meta, Step-Numbers, FAQ-Plus) |
| `--brand-text-soft` | `#dddfeC` | Hintergrund-Mix-Basis |
| `--bg` | `color-mix(… --brand-text-soft 12%, white)` | Seitenhintergrund |
| `--surface` | `#ffffff` | Weiße Flächen |
| `--surface-muted` | `color-mix(… --brand-text-soft 48%, white)` | Abwechselnde Sections, Footer |
| `--surface-blue` | `color-mix(… --brand-blue 11%, white)` | Methode-Section |
| `--surface-warm` | `color-mix(… --brand-orange 8%, white)` | Angebot-Section |
| `--text` | `color-mix(… --brand-gray 78%, black)` | Fließtext, Headlines |
| `--muted` | `var(--brand-gray)` | Sekundärtext, Kickers, Footer-Legal |
| `--border` | `color-mix(… --brand-gray 22%, white)` | Trennlinien |

### Hardcodierte Hex-Werte in `globals.css` (nicht als Token)

| Wert | Verwendung |
|------|------------|
| `#1a3a6b` | `.final-cta` Hintergrund (Navy) |
| `#ffffff` / `#fff` | Button-Hover, Final-CTA Text |
| `rgb(255 255 255 / 0.5)` | `.final-cta .section-kicker` |
| `rgb(255 255 255 / 0.7)` | `.final-cta .section-lead`, `.microcopy` |

---

## 2. Blau- / Navy-Fundstellen (Priorität Rebrand)

### Navy `#1a3a6b` / `#1A3A6B`

| Datei | Zeile(n) | Kontext |
|-------|----------|---------|
| `web/src/app/globals.css` | 626–628 | `.final-cta { background: #1a3a6b; }` — Abschluss-CTA „Jetzt den ersten Schritt machen“ |
| `web/src/app/page.tsx` | 149 | Cert-Badge Über-mich: `style={{ background: "#1A3A6B" }}` |

### Blau-Token `--brand-blue` (`#77b3cf`)

| Datei | Zeile(n) | Kontext |
|-------|----------|---------|
| `web/src/app/globals.css` | 8, 14 | Token-Definition, `--surface-blue` |
| `web/src/app/globals.css` | 518 | `.offer-card__meta` — `color-mix(… --brand-blue 70%, black)` |
| `web/src/app/globals.css` | 687 | `.step-number` — Modul-Nummern 01–07 |
| `web/src/app/page.tsx` | 368 | FAQ-Plus-Icon: `text-[var(--brand-blue)]` |
| `web/src/components/methode.tsx` | 21 | Section-Hintergrund: `bg-[var(--surface-blue)]` |

---

## 3. Grau-Textfarben & Muted

### Token-Kette

- `--text` → abgeleitet aus `--brand-gray`
- `--muted` → direkt `--brand-gray` (`#a99eac`)

### `globals.css`

| Selektor / Bereich | Token/Farbe |
|--------------------|-------------|
| `.section-kicker` | `var(--muted)` |
| `.section-lead` | `var(--muted)` |
| `.body-text-muted` | `var(--muted)` |
| `.nav-link` | `var(--muted)` |
| `.btn-secondary` | `var(--muted)` |
| `.microcopy` | `var(--muted)` |
| `.offer-card__desc` | `var(--muted)` |
| `.legal-section__body` | `var(--muted)` |
| `.faq-item p` | `var(--muted)` |
| `.site-footer-legal`, `__link` | `var(--muted)` |
| `.site-header-tagline` (legacy) | `var(--brand-gray)` |
| `.hero-tagline` | `var(--brand-gray)` |
| Wordmark-Hover Tagline | `var(--muted)` |

### Komponenten / Pages (Tailwind `var(--…)`)

| Datei | Verwendung |
|-------|------------|
| `web/src/app/page.tsx` | `body-text-muted`, FAQ-Antworten `text-[var(--muted)]` |
| `web/src/components/problem.tsx` | — (nur `surface-muted` BG) |
| `web/src/app/termin/page.tsx` | — (hauptsächlich `--text`) |

### Footer-Band

| Datei | Zeile(n) | Hinweis |
|-------|----------|---------|
| `web/src/app/globals.css` | 722–724 | `.site-footer { background: var(--surface-muted); }` — **kein Navy**, warmes Grau-Beige |
| `web/src/components/site-chrome.tsx` | 23–52 | Footer-Inhalt; Legal-Zeile nutzt `.site-footer-legal` → `muted` |

---

## 4. Orange / Akzent (Kurzreferenz)

| Token | Fundstellen (Auswahl) |
|-------|------------------------|
| `--color-accent` | Kicker-Strich (`site-chrome.tsx`), Hero „Maschine.“, Offer-Badges, Scroll-Progress, Offer-Card-Hover, Testimonial-Quote |
| `--brand-orange` | Header-BG, Buttons `.btn-primary`, Nav-Hover, Contact-Link-Hover, Methode-Kicker |

---

## 5. Vorbereitung Barlow (ohne Aktivierung)

| Datei | Änderung |
|-------|----------|
| `web/src/app/layout.tsx` | `Barlow` via `next/font/google`, Gewichte 300/400/500, Variable `--font-barlow` auf `<html>` — **nicht** in `body`/globals.css verwendet |

Aktive Fonts unverändert: Manrope (`--font-heading`), Carlito (`--font-subheading`), Mukta (`--font-body`).

---

## 6. Signatur-Assets

| Ziel | Status |
|------|--------|
| `web/public/brand/260715_SignaturFrank.png` | Kopiert |
| `web/public/brand/260715_SignaturFrank.eps` | Kopiert |
| `web/public/brand/260715_SignaturFrank.svg` | **Nicht erstellt** — Inkscape, ImageMagick, Ghostscript lokal nicht verfügbar; EPS→SVG sauber nicht konvertierbar. Web-Fallback: PNG. |

**Quelle:** `Styleguide/Logo+Font/` (Ordner `2026-07-15_Updates` im Repo nicht vorhanden).

---

## 7. Rebrand-relevante Mappings (für nächsten Schritt)

| Alt | Typische Stellen |
|-----|------------------|
| `#77b3cf` / `--brand-blue` | Methode-BG, Step-Numbers, Offer-Meta, FAQ-Plus |
| `#1a3a6b` | Final-CTA, Cert-Badge |
| `#a99eac` / `--muted` | Fließtext sekundär, Footer-Legal, Kickers |
| `#e8650a` / `#f89921` | Akzente, CTAs, Header |
