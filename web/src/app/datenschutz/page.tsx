import type { Metadata } from "next";
import {
  LegalFootnote,
  LegalPage,
  LegalSection,
} from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Website von Frank Vullhorst, KI-Beratung für KMU und Handwerk.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <LegalSection title="1. Verantwortlicher">
        <p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p>
          Frank Vullhorst
          <br />
          KI. Sicher. Sinnvoll. Strategisch.
          <br />
          Claudiusweg 9
          <br />
          64380 Roßdorf
          <br />
          Deutschland
        </p>
        <p>
          Telefon:{" "}
          <a href="tel:+491726689960">+49 (0)172 6689960</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:Info@FrankVullhorst.de">
            Info@FrankVullhorst.de
          </a>
        </p>
        <p>
          Ein Datenschutzbeauftragter ist nicht bestellt. Als Einzelunternehmer
          mit weniger als 20 Mitarbeitern, der keine sensiblen Daten im Sinne
          von Art. 9 DSGVO systematisch verarbeitet, besteht hierfür keine
          gesetzliche Pflicht (§ 38 BDSG).
        </p>
      </LegalSection>

      <LegalSection title="2. Grundsätzliches zur Datenverarbeitung">
        <p>
          Ich verarbeite personenbezogene Daten nur, soweit dies für den Betrieb
          dieser Website und die Erbringung meiner Leistungen erforderlich ist.
          Eine Weitergabe an Dritte erfolgt nur, soweit dies zur
          Vertragserfüllung notwendig ist oder eine gesetzliche Verpflichtung
          besteht.
        </p>
        <p>Rechtsgrundlagen der Verarbeitung sind:</p>
        <ul>
          <li>
            <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Vertragserfüllung oder
            vorvertragliche Maßnahmen
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — berechtigte Interessen
            des Verantwortlichen
          </li>
          <li>
            <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> — Erfüllung einer
            rechtlichen Verpflichtung
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Hosting durch Netlify">
        <p>Diese Website wird gehostet von:</p>
        <p>
          Netlify, Inc.
          <br />
          512 2nd Street, Suite 200
          <br />
          San Francisco, CA 94107, USA
        </p>
        <p>
          Beim Aufruf dieser Website erfasst Netlify automatisch sogenannte
          Server-Logfiles. Diese enthalten:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit des Abrufs</li>
          <li>Aufgerufene URL</li>
          <li>Übertragene Datenmenge</li>
          <li>Browsertyp und Betriebssystem</li>
          <li>HTTP-Statuscode</li>
        </ul>
        <p>
          Diese Daten sind technisch erforderlich, um die Website korrekt
          auszuliefern und die Sicherheit des Betriebs zu gewährleisten. Eine
          Zusammenführung dieser Daten mit anderen Datenquellen findet nicht
          statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse am sicheren und störungsfreien Betrieb der Website).
        </p>
        <p>
          <strong>Datenübermittlung in die USA:</strong> Netlify ist ein
          US-amerikanisches Unternehmen. Die Datenübermittlung erfolgt auf
          Grundlage von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2
          lit. c DSGVO. Es besteht ein Auftragsverarbeitungsvertrag (Data
          Processing Agreement) mit Netlify gemäß Art. 28 DSGVO.
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.netlify.com/privacy/
          </a>
        </p>
      </LegalSection>

      <LegalSection title="4. Kontaktaufnahme per E-Mail oder Telefon">
        <p>
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich
          die von Ihnen übermittelten Angaben (Name, E-Mail-Adresse,
          Telefonnummer, Nachrichteninhalt), um Ihre Anfrage zu bearbeiten und
          zu beantworten.
        </p>
        <p>
          Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an der Bearbeitung von Anfragen).
        </p>
        <p>
          Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
          ist und keine gesetzliche Aufbewahrungspflicht entgegensteht.
        </p>
      </LegalSection>

      <LegalSection title="5. Terminbuchung über Google Calendar">
        <p>
          Die Buchung von Terminen auf der Seite „Termin buchen&quot; erfolgt
          über Google Calendar Appointment Schedules. Dabei werden Daten
          verarbeitet von:
        </p>
        <p>
          Google Ireland Limited
          <br />
          Gordon House, Barrow Street
          <br />
          Dublin 4, Irland
        </p>
        <p>
          Wenn Sie einen Termin buchen, verarbeitet Google mindestens folgende
          Daten: Name, E-Mail-Adresse sowie den gewählten Terminzeitpunkt. Je
          nach Eingabe können weitere Angaben hinzukommen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
          sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
          reibungslosen Terminverwaltung).
        </p>
        <p>
          <strong>Datenübermittlung in die USA:</strong> Google kann Daten in
          die USA übermitteln. Die Übermittlung erfolgt auf Grundlage von
          Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.
        </p>
        <p>
          Weitere Informationen zur Datenverarbeitung durch Google:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          Diese Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies.
          Es werden ausschließlich technisch notwendige Cookies eingesetzt, die
          für den ordnungsgemäßen Betrieb der Website erforderlich sind. Diese
          Cookies erfordern keine Einwilligung gemäß § 25 Abs. 2 TDDDG.
        </p>
      </LegalSection>

      <LegalSection title="7. Keine Analyse- und Tracking-Dienste">
        <p>
          Diese Website verwendet kein Google Analytics, kein Meta Pixel und
          keine sonstigen Analyse- oder Tracking-Dienste. Es werden keine
          Nutzerprofile erstellt und kein Verhalten über diese Website hinaus
          verfolgt.
        </p>
      </LegalSection>

      <LegalSection title="8. Ihre Rechte als betroffene Person">
        <p>
          Sie haben gegenüber mir als Verantwortlichem folgende Rechte
          hinsichtlich Ihrer personenbezogenen Daten:
        </p>
        <p>
          <strong>Auskunft (Art. 15 DSGVO)</strong>
          <br />
          Sie können jederzeit Auskunft darüber verlangen, welche Daten ich über
          Sie verarbeite, zu welchem Zweck und auf welcher Rechtsgrundlage.
        </p>
        <p>
          <strong>Berichtigung (Art. 16 DSGVO)</strong>
          <br />
          Sie können die Berichtigung unrichtiger oder die Vervollständigung
          unvollständiger Daten verlangen.
        </p>
        <p>
          <strong>Löschung (Art. 17 DSGVO)</strong>
          <br />
          Sie können die Löschung Ihrer Daten verlangen, sofern keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
        <p>
          <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong>
          <br />
          Sie können unter bestimmten Voraussetzungen verlangen, dass die
          Verarbeitung Ihrer Daten eingeschränkt wird.
        </p>
        <p>
          <strong>Datenübertragbarkeit (Art. 20 DSGVO)</strong>
          <br />
          Sie haben das Recht, Ihre Daten in einem gängigen, maschinenlesbaren
          Format zu erhalten oder deren Übertragung an einen anderen
          Verantwortlichen zu verlangen, sofern die Verarbeitung auf einer
          Einwilligung oder einem Vertrag beruht und automatisiert erfolgt.
        </p>
        <p>
          <strong>Widerspruch (Art. 21 DSGVO)</strong>
          <br />
          Sie können der Verarbeitung Ihrer Daten widersprechen, soweit diese
          auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) gestützt wird.
          Ich verarbeite die Daten dann nicht mehr, es sei denn, es liegen
          zwingende schutzwürdige Gründe vor, die Ihre Interessen überwiegen.
        </p>
        <p>
          <strong>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</strong>
          <br />
          Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie
          diese jederzeit mit Wirkung für die Zukunft widerrufen. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt
          davon unberührt.
        </p>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich per E-Mail an:{" "}
          <a href="mailto:Info@FrankVullhorst.de">
            Info@FrankVullhorst.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="9. Beschwerderecht bei der Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
          zu beschweren (Art. 77 DSGVO). Zuständige Behörde für Hessen ist:
        </p>
        <p>
          Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
          (HBDI)
          <br />
          Gustav-Stresemann-Ring 1
          <br />
          65189 Wiesbaden
        </p>
        <p>
          Telefon: +49 611 1408-0
          <br />
          E-Mail:{" "}
          <a href="mailto:poststelle@datenschutz.hessen.de">
            poststelle@datenschutz.hessen.de
          </a>
          <br />
          Website:{" "}
          <a
            href="https://datenschutz.hessen.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://datenschutz.hessen.de
          </a>
        </p>
      </LegalSection>

      <LegalSection title="10. Automatisierte Entscheidungsfindung">
        <p>
          Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne
          von Art. 22 DSGVO findet auf dieser Website nicht statt.
        </p>
      </LegalSection>

      <LegalSection title="11. Aktualität dieser Datenschutzerklärung">
        <p>
          Diese Datenschutzerklärung ist aktuell gültig. Mit der
          Weiterentwicklung dieser Website oder bei Änderungen in den
          gesetzlichen Anforderungen kann es notwendig werden, die
          Datenschutzerklärung anzupassen. Die jeweils aktuelle Version ist
          jederzeit unter{" "}
          <a
            href="https://frankvullhorst.de/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://frankvullhorst.de/datenschutz
          </a>{" "}
          abrufbar.
        </p>
      </LegalSection>

      <LegalFootnote>Stand: Juni 2026</LegalFootnote>
    </LegalPage>
  );
}
