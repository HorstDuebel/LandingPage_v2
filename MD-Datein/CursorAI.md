# Technischer Grundaufbau
- Das Projekt liegt im Ordner `web/` und ist eine Next.js 16 App mit React 19 und TypeScript.
- Styling über Tailwind CSS 4 plus eine eigene Schicht in `globals.css` mit Design-Tokens (Farben, Abstände, Typografie-Klassen).
- Deployment: Push auf `main` bei GitHub, Hosting bei IONOS (Deploy Now / GitHub Actions unter `.github/workflows/`).
- Produktions-URL: https://frankvullhorst.de (konfigurierbar über `NEXT_PUBLIC_SITE_URL` in `site.ts`). E-Mail: Info@FrankVullhorst.de.
- Kein schweres UI-Framework, keine CMS-Anbindung. Bewusst schlank und wartbar.

# Seitenstruktur (Informationsarchitektur), Stand 01.10.2026
- Hauptseite (`/`) ist ein One-Pager mit Anker-Navigation.
- **Desktop-Nav:** Nutzen · Angebot · Über mich · Haltung · Termin · KI-Salon (CTA)
- **Mobile zusätzlich:** So arbeiten wir · FAQ
- Unterseiten als eigene Routen:
  - `/termin`: Google-Appointment-Buchung (iframe)
  - `/ki-salon`: Veranstaltungsseite KI-Salon
  - `/faq`: FAQ
  - `/impressum`, `/datenschutz`: Rechtstexte
  - `/d/[slug]`: Download-Gate (robots: noindex)
- **Section-Reihenfolge Startseite (verbindlich live):**
  1. Header / Hero (`#top`)
  2. Nutzen (`#nutzen`): Überschrift „Was Sie davon haben.“
  3. Das Angebot (`#angebot`): farbige Tagline sicher / strategisch / sinnvoll
  4. Expertise (`#ueber-mich`): Überschrift „Wofür ich brenne.“ Surface: Teal
  5. Haltung (`#haltung`): Überschrift „Nüchtern hinsehen statt hypen.“
  6. Vertrauen (`#vertrauen`): Überschrift „Worauf Sie sich verlassen können.“
  7. So arbeiten wir zusammen (`#so-arbeiten-wir`): 3 Flip-Karten + Claude-Cowork-Kachel
  8. Jetzt den ersten Schritt machen (`#termin`): dunkler Final-CTA
  9. Fußzeile

# Code-Architektur: Trennung von Inhalt und Darstellung
- `page.tsx` ist die Kompositions-Schicht: Sections, Layout, Reihenfolge; Fließtexte der Startseite liegen weitgehend inline (Stand 01.10.2026).
- Zentrale Daten-Dateien in `lib/`:
  - `journey.ts`: Baustein-Karten + Claude-Cowork-Sonderkachel (Front/Back)
  - `copy.ts`: Final-CTA-Texte (`finalCta`) und Termin-Trigger (`triggers.terminIntro`); sichtbare Hero-/Final-Buttons sind in `page.tsx` hart verdrahtet
  - `faq.ts`, `site.ts`, `booking.ts`, `home-schema.ts`, `analytics.ts`
- Wiederverwendbare Komponenten u. a.:
  - `site-header.tsx`: Navigation (Desktop + Burger)
  - `site-chrome.tsx`: Footer, SectionKicker
  - `flip-offer-card.tsx`: Flip-Karten inkl. Claude Cowork
  - `cta-buttons.tsx`: PrimaryCtaLink → `/termin`
  - `brand-signature.tsx`: Wortmarke + Dreifarb-Balken
  - `problem.tsx` / `methode.tsx`: existieren, sind auf der Startseite **nicht** eingebunden

# Design- und UX-Prinzipien
- Markenfarben Taupe/Teal/Orange auf Basis-Dunkel; Fonts Barlow Medium/Light. Tokens siehe unten.
- Surfaces: `--surface-lime`, `--surface-muted`, `--surface-warm`, `--surface-teal` (Expertise), Final-CTA `--brand-dark`.
- Section-Muster: kleiner Kicker + große `section-title` / `display-title` + Fließtext; abgesetzte Schlusssätze als `.body-text-note`.
- **CTA-Prinzip (live):** Genau **zwei** Gesprächs-Buttons auf der Startseite: Hero und Final-CTA. Text beider: `Kostenfreies Orientierungsgespräch [ 30 Minuten ]` (mit geschützten Leerzeichen). Ziel: `/termin`. KI-Salon-Nav ist ein eigener Pfad (`/ki-salon`).
- Flip-Karten: drei Bausteine + Claude Cowork im gleichen Grid; oranger linker Streifen nur auf Hover; Claude-Rückseite groß, bleibt innerhalb von `#so-arbeiten-wir` (überdeckt Kacheln, nicht den dunklen Final-CTA).
- Header: fixiert/reveal beim Scrollen; stört nicht beim Lesen.

# Inhaltliche Arbeitsweise
- Textquelle für den großen Umbau 30.09./01.10.2026: `2026-09-30_Landingpage_Texte_final.md` (Projektroot).
- Tonalität: Deutsch, „Sie“, KMU/Handwerk, pragmatisch, ohne Hype.
- Nutzen-Punkte live: Strategischer KI-Weitblick · Branchenwissen · Freiraum für Ihr Kerngeschäft.
- Expertise: Intro neben Portrait; ab „Sie bleiben Chef der Technik…“ Fortsetzung unter dem Bild volle Breite.
- Haltung: eigener Abschnitt zwischen Expertise und Vertrauen.

# SEO, Technik und Compliance
- Metadata in `layout.tsx` und pro Seite.
- `robots.ts` und `sitemap.ts` aus `siteRoutes` (`/`, `/termin`, `/ki-salon`, `/faq`, `/impressum`, `/datenschutz`).
- Live geprüft: `https://frankvullhorst.de/robots.txt` und `/sitemap.xml` liefern 200; robots verweist auf die Sitemap.
- Search Console: Sitemap `sitemap.xml` eingereicht und erfolgreich verarbeitet; Google hat 6 Seiten erkannt.
- Analytics vorbereitet, standardmäßig aus.

# Arbeitsprinzipien bei der Entwicklung
- Minimale, fokussierte Änderungen; Konventionen der Codebase fortführen.
- Single Source of Truth wo möglich (`journey.ts`, `faq.ts`, `site.ts`).
- Conversion-Fokus: Nutzen → Angebot → Expertise/Haltung/Vertrauen → Zusammenarbeit → Termin.
- Nach größeren Änderungen: `npm run build`.

# Kurzfassung in einem Satz
Landingpage v3 ist ein schlanker Next.js-One-Pager mit Nutzen zuerst, neuem Abschnitt Haltung, zwei Orientierungsgespräch-CTAs, Flip-Karten inkl. Claude Cowork, Terminbuchung als Hauptziel und automatischer Sitemap. Styleguide-konform, Deploy über GitHub nach IONOS.

# Design-Tokens & Fonts (Stand 15.07.2026, Code bestätigt 01.10.2026)
Primär: Taupe `#7b7163`, Teal `#7aafa1`, Orange `#f18825`, Basis-Dunkel `#41362a`.
Akzent: `#75c2a9`, `#d3da3d`, `#ffffff`.
Sekundär/Sand: `#d7cabd`.
Fonts: Barlow Medium (Name/Headlines), Barlow Light (Tagline/Subline).
Signatur: Lockup „Frank Vullhorst“ + „ki: sicher strategisch sinnvoll“ + Dreifarb-Balken wortlängenbezogen (sicher/strategisch/sinnvoll).
CTA-Buttons: Orange-Fill, Text brand-dark.
