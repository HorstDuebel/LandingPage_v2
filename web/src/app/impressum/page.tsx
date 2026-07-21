import type { Metadata } from "next";
import {
  LegalFootnote,
  LegalPage,
  LegalSection,
} from "@/components/legal-page";
import { ProtectedEmail } from "@/components/protected-email";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Frank Vullhorst, KI-Beratung für KMU und Handwerk, Roßdorf (Rhein-Main).",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LegalSection title="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)">
        <p>
          Frank Vullhorst
          <br />
          ki: sicher strategisch sinnvoll
          <br />
          <br />
          Claudiusweg 9
          <br />
          64380 Roßdorf
          <br />
          Deutschland
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon:{" "}
          <a href="tel:+491726689960">+49 (0)172 6689960</a>
          <br />
          E-Mail: <ProtectedEmail />
        </p>
      </LegalSection>

      <LegalSection title="Steuerliche Angaben">
        <p>
          Kleinunternehmer gemäß § 19 UStG — es wird keine Umsatzsteuer erhoben
          und ausgewiesen.
          <br />
          Steuernummer: 007/878/61615
        </p>
      </LegalSection>

      <LegalSection title="Berufsbezeichnung">
        <p>KI-Beratung</p>
        <p>
          Die Tätigkeit in der KI-Beratung ist in Deutschland kein reglementierter
          Beruf. Es bestehen keine gesetzlichen berufsrechtlichen
          Sonderregelungen und keine zuständige Aufsichtsbehörde im Sinne des §
          5 Abs. 1 Nr. 5 DDG.
        </p>
      </LegalSection>

      <LegalSection title="Redaktionell verantwortlich">
        <p>
          Frank Vullhorst
          <br />
          Claudiusweg 9
          <br />
          64380 Roßdorf
        </p>
      </LegalSection>

      <LegalSection title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br />
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>Meine E-Mail-Adresse finden Sie oben im Impressum.</p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Ich bin nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
          entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich
          daher keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
          der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links
          umgehend entfernen.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch mich erstellten Inhalte und Werke auf dieser Website
          unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden, werden
          die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet.
          Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam
          werden, bitte ich um einen Hinweis. Bei Bekanntwerden von
          Rechtsverletzungen werde ich entsprechende Inhalte umgehend entfernen.
        </p>
      </LegalSection>

      <LegalFootnote>Stand: Juni 2026</LegalFootnote>
    </LegalPage>
  );
}
