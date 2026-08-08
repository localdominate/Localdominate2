import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Truck, Search, ListChecks, Star, ShieldCheck, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-umzugsunternehmen";

const LocalSeoUmzugsunternehmen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "doppelort", title: "Das Zwei-Städte-Problem" },
    { id: "seiten", title: "Seitenstruktur für Routen" },
    { id: "profil", title: "Profil und Servicegebiet" },
    { id: "keywords", title: "Keywords nach Umzugsart" },
    { id: "vertrauen", title: "Vertrauen und Preistransparenz" },
    { id: "bewertungen", title: "Bewertungen nach dem Umzug" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wie werde ich als Umzugsunternehmen in zwei Städten gefunden?",
      answer:
        "Über getrennte Seiten für Auszugs- und Zielregion plus, wo sinnvoll, eigene Routenseiten für häufige Verbindungen. Das Standortprofil rankt vor allem am Betriebsstandort; die zweite Region wird über Website-Inhalte, lokale Erwähnungen und konkrete Routenbeschreibungen abgedeckt.",
    },
    {
      question: "Welche Google-Kategorie ist richtig?",
      answer:
        "Umzugsunternehmen als Hauptkategorie. Nebenkategorien je nach Angebot: Lagerhaus, Möbeltransport, Entrümpelungsdienst oder Klaviertransport. Ein Betrieb, der überwiegend Firmenumzüge abwickelt, sollte das in Leistungen und Seitentiteln klar benennen, weil sich Zielgruppe und Auftragswert deutlich unterscheiden.",
    },
    {
      question: "Sollte ich Preise auf der Website nennen?",
      answer:
        "Preisspannen ja, Festpreise nein. Sinnvoll sind Beispielkalkulationen nach Wohnungsgröße und Entfernung sowie eine klare Auflistung, was Zuschläge auslöst: Etagen ohne Aufzug, Halteverbotszone, Verpackungsservice, Klavier oder Termin am Monatsende. Das reduziert Preisdiskussionen und unpassende Anfragen.",
    },
    {
      question: "Wie wichtig sind Bewertungen für Umzugsunternehmen?",
      answer:
        "Sehr wichtig, weil Kunden fremden Personen ihren gesamten Hausrat anvertrauen. Entscheidend sind Aktualität und Inhalt: Bewertungen, die Pünktlichkeit, Sorgfalt und Preistreue benennen, wirken stärker als eine hohe Gesamtzahl. Eine Erinnerung ein bis zwei Tage nach dem Umzug erzielt die beste Rücklaufquote.",
    },
    {
      question: "Lohnen sich eigene Seiten für einzelne Umzugsrouten?",
      answer:
        "Ja, wenn die Verbindung regelmäßig gefahren wird und echte Inhalte möglich sind: typische Dauer, Halteverbotsregelungen in beiden Städten, Parksituation und Preisrahmen. Reine Ortsplatzhalter ohne eigenen Inhalt schaden dagegen, weil sie als dünne Seiten bewertet werden.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Umzugsunternehmen haben ein Sichtbarkeitsproblem, das kaum eine andere lokale Branche kennt: Der Kunde sucht an zwei Orten gleichzeitig — dort, wo er wohnt, und dort, wo er hinzieht. Wer nur den eigenen Standort bedient, verliert die Hälfte des Marktes.
      </p>

      <KeyTakeawaysBox
        items={[
          "Auszugs- und Zielregion brauchen getrennte Inhalte",
          "Routenseiten nur mit echtem Inhalt, nie als Ortsplatzhalter",
          "Preisspannen und Zuschlagsgründe offen benennen",
          "Bewertungen ein bis zwei Tage nach dem Umzug erfragen",
          "Firmenumzüge getrennt von Privatumzügen darstellen",
        ]}
      />

      <section id="doppelort" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Truck className="w-7 h-7 text-primary" />
          Warum reicht der eigene Standort nicht aus?
        </h2>
        <AnswerBlock question="Warum suchen Umzugskunden an zwei Orten?">
          Weil ein Umzug immer zwei Adressen verbindet. Viele Interessenten suchen bereits vom Zielort aus nach einem Anbieter, andere vom Wohnort. Das Standortprofil wirkt hauptsächlich am Betriebsstandort, deshalb muss die zweite Region über Website-Inhalte, Routenseiten und lokale Erwähnungen abgedeckt werden.
        </AnswerBlock>
      </section>

      <section id="seiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie strukturiere ich die Seiten?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Seitentyp</th>
                <th className="border p-3 text-left">Zweck</th>
                <th className="border p-3 text-left">Pflichtinhalt</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Standortseite</td><td className="border p-3">Heimatmarkt</td><td className="border p-3">Team, Fuhrpark, Einsatzgebiet</td></tr>
              <tr><td className="border p-3 font-semibold">Zielregionsseite</td><td className="border p-3">Zuzugsmarkt</td><td className="border p-3">Ablauf, Dauer, Referenzen</td></tr>
              <tr><td className="border p-3 font-semibold">Routenseite</td><td className="border p-3">Häufige Verbindung</td><td className="border p-3">Dauer, Halteverbot, Preisrahmen</td></tr>
              <tr><td className="border p-3 font-semibold">Leistungsseite</td><td className="border p-3">Umzugsart</td><td className="border p-3">Umfang, Zuschläge, Ausstattung</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie richte ich Profil und Servicegebiet ein?
        </h2>
        <AnswerBlock question="Welche Profileinstellungen sind für Umzugsfirmen wichtig?">
          Hauptkategorie Umzugsunternehmen, Servicegebiet realistisch auf die tatsächlich bedienten Regionen begrenzt, Bilder von Fahrzeugen, Packmaterial und Team statt Symbolfotos, Erreichbarkeitszeiten des Büros korrekt hinterlegt. Ohne Kundenverkehr am Standort wird die Adresse verborgen und das Einsatzgebiet gepflegt.
        </AnswerBlock>
        <p className="mt-4">
          Details zum Servicegebiet stehen im <Link to="/blog/google-my-business-optimieren" className="text-primary underline">Profil-Guide</Link>.
        </p>
      </section>

      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Welche Keywords gehören zu welcher Umzugsart?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Privatumzug:</strong> Umzugsfirma plus Ort, Umzug Kosten, Umzugshelfer.</li>
          <li><strong>Fernumzug:</strong> Umzug von Stadt A nach Stadt B, Fernumzug Preise.</li>
          <li><strong>Firmenumzug:</strong> Büroumzug, Betriebsumzug, IT-Umzug.</li>
          <li><strong>Zusatz:</strong> Entrümpelung, Einlagerung, Klaviertransport, Halteverbotszone.</li>
        </ul>
      </section>

      <section id="vertrauen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Wie schaffe ich Vertrauen und Preisklarheit?
        </h2>
        <AnswerBlock question="Wie viel Preistransparenz ist sinnvoll?">
          Preisspannen nach Wohnungsgröße und Entfernung plus eine offene Liste der Zuschlagsgründe: Etagen ohne Aufzug, Halteverbotszone, Verpackungsservice, Sperrgut und Termine am Monatsende. Festpreise ohne Besichtigung sind unseriös, aber eine nachvollziehbare Kalkulationslogik senkt Absprünge und unpassende Anfragen deutlich.
        </AnswerBlock>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wann und wie frage ich Bewertungen ab?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Ein bis zwei Tage nach dem Umzug, wenn die Erleichterung noch frisch ist.</li>
          <li>Kurzer Link per Nachricht statt mündlicher Bitte im Trubel.</li>
          <li>Kritische Bewertungen sachlich und lösungsorientiert beantworten.</li>
          <li>Auf Aktualität achten: laufender Zufluss statt einmaliger Kampagne.</li>
        </ul>
        <p className="mt-4">
          Formulierungshilfen: <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline">Antwortvorlagen</Link> und <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline">Bewertungen gewinnen</Link>.
        </p>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Profil und Servicegebiet klären, NAP-Abgleich, Preisspannen veröffentlichen.</li>
          <li><strong>Tag 31–60:</strong> Leistungsseiten je Umzugsart, zwei bis drei echte Routenseiten, Bewertungsroutine einführen.</li>
          <li><strong>Tag 61–90:</strong> Zielregionsseiten ausbauen, interne Verlinkung, Auswertung von Anfragen je Region.</li>
        </ol>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">In beiden Städten gefunden werden</h3>
        <p className="mb-4">
          Wir bauen Standort-, Zielregions- und Routenseiten mit echtem Inhalt auf und machen sichtbar, aus welcher Region welche Anfragen kommen.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoUmzugsunternehmen;
