const principles = [
  {
    kicker: "Ich verkaufe keine KI.",
    text: "Ich verstehe in der Zusammenarbeit zuerst Ihre Prozesse und Abläufe. Dann zeige ich auf, wo KI konkret entlasten kann, dort, wo Menschen täglich wiederkehrende Aufgaben haben. Wenn jemand sagt: „Das nimmt mir genau die Sisyphusarbeit ab“, dann ist der Punkt erreicht. Entscheidend ist dabei: Die Lösung muss fachlich sinnvoll, menschlich tragfähig und ethisch vertretbar sein.",
  },
  {
    kicker: "Ich kenne Widerstand. Von innen.",
    text: "Über 30 Jahre Einführung neuer Technologie, angefangen mit 3D-Druck zu einer Zeit, als das kaum jemand kannte. Internationale Projekte, echte Führungsverantwortung, Veränderungsprozesse unter Druck. Ich weiß, wie Menschen auf neue Technik reagieren. Das ist keine Hürde für mich. Das ist mein Terrain. Ich achte dabei darauf, dass KI transparent bleibt, nachvollziehbar ist und nicht gegen Teams arbeitet.",
  },
  {
    kicker: "Mein Maßstab: Mitarbeitende wollen es selbst.",
    text: "Wenn Mitarbeitende KI nutzen, weil das Unternehmen sie einführt, ist das ein Anfang. Wenn sie KI nutzen, weil sie selbst merken, dass der Job mit dem Werkzeug besser geht, entsteht Nachhaltigkeit. Mein Ziel ist, das KI-Werkzeug zu nutzen, ohne Menschen zu entmündigen. Verantwortungsvoll, sicher und mit klaren Grenzen.",
  },
] as const;

export function Methode() {
  return (
    <section id="methode" className="section-block bg-[var(--surface-blue)]">
      <div className="page-container">
        <div>
          <p className="section-kicker">Wie ich arbeite:</p>
          <h2 className="section-title">
            <span className="display-title-line">
              „Nie im Leben.« Das höre ich gern.
            </span>
          </h2>
          <p className="section-lead mt-6">
            KI-Skepsis ist kein Problem. Sie zeigt, dass Menschen Verantwortung
            ernst nehmen und Fragen stellen, bevor sie handeln. Dieses
            abzuholen, im Unternehmerischen Kontext, das ist mein Anfang.
          </p>
        </div>

        <div className="mt-12">
          {principles.map((principle, index) => (
            <div
              key={principle.kicker}
              className={`${index > 0 ? "pt-10" : ""} ${
                index < principles.length - 1
                  ? "border-b border-[var(--border)] pb-10"
                  : ""
              }`}
            >
              <p className="font-[var(--font-subheading)] text-base font-bold text-[var(--brand-orange)] sm:text-lg">
                {principle.kicker}
              </p>
              <p className="body-text mt-4">{principle.text}</p>
            </div>
          ))}

          <blockquote className="quote-block mt-12">
            <p className="section-title !text-lg italic leading-snug sm:!text-xl">
              „Den Schulterschluss mit Ihrem Team nicht als Hindernis zu sehen,
              sondern als den eigentlichen Weg. Das ist meine Arbeit.«
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
