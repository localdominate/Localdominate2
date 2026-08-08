import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Flame, Search, ListChecks, Star, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-heizung-sanitaer";

const LocalSeoHeizungSanitaer = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Wie Kunden SHK-Betriebe suchen" },
    { id: "kategorien", title: "Kategorien und Leistungen" },
    { id: "keywords", title: "Keywords mit Auftragswert" },
    { id: "notdienst", title: "Notdienst-Sichtbarkeit" },
    { id: "waermepumpe", title: "Wärmepumpe und Förderung" },
    { id: "bewertungen", title: "Bewertungen im Handwerk" },
    { id: "website", title: "Website-Struktur" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Welche Google-Kategorie ist für einen SHK-Betrieb richtig?",
      answer:
        "Als Hauptkategorie eignet sich meist Klempner oder Heizungsinstallateur, je nach Auftragsschwerpunkt. Ergänzend passen Nebenkategorien wie Sanitärinstallateur, Badezimmerbau, Notdienst und Solaranlageninstallateur. Entscheidend ist, dass die Hauptkategorie den Umsatzschwerpunkt abbildet, nicht das breiteste Angebot.",
    },
    {
      question: "Welche Keywords bringen im SHK-Handwerk die besten Aufträge?",
      answer:
        "Dringlichkeitsbegriffe wie Rohrbruch, Heizung ausgefallen oder verstopfter Abfluss bringen sofortige Anfragen. Projektbegriffe wie Badsanierung, Wärmepumpe nachrüsten oder Heizungstausch bringen höhere Auftragswerte bei längerer Entscheidungsdauer. Ein Betrieb braucht beide Gruppen, jeweils mit eigener Landingpage.",
    },
    {
      question: "Lohnt sich eine eigene Seite für den Notdienst?",
      answer:
        "Ja. Notdienst-Anfragen haben eine völlig andere Erwartung: Erreichbarkeit, Einsatzgebiet, Anfahrtszeit und Preisrahmen müssen sofort sichtbar sein. Eine eigene Seite mit klarer Rufnummer im ersten Bildschirmbereich konvertiert deutlich besser als ein Abschnitt auf der Startseite.",
    },
    {
      question: "Wie gehe ich mit Wärmepumpen-Anfragen um?",
      answer:
        "Mit einer eigenen Leistungsseite, die Ablauf, Voraussetzungen im Bestand, typische Dauer und den Umgang mit Förderanträgen beschreibt. Keine Förderhöhen oder Zusagen versprechen, sondern den Prozess erklären und auf die offiziellen Programme verweisen. Das erzeugt qualifizierte Anfragen statt reiner Preisabfragen.",
    },
    {
      question: "Wie viele Bewertungen braucht ein Handwerksbetrieb?",
      answer:
        "Wichtiger als eine Zielzahl ist Regelmäßigkeit: einige neue Bewertungen pro Monat wirken stärker als viele alte auf einmal. Eine feste Routine nach Auftragsabschluss, ein kurzer Bewertungslink und sachliche Antworten auf jede Bewertung reichen in den meisten Betrieben aus.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        SHK-Betriebe haben ein ungewöhnliches Suchprofil: hochdringliche Notfälle und langfristige Sanierungsprojekte liegen im selben Kundenstamm. Wer beide Anlässe getrennt bedient, gewinnt kurzfristige Einsätze und planbare Projektaufträge gleichzeitig.
      </p>

      <KeyTakeawaysBox
        items={[
          "Notfall und Projekt sind zwei getrennte Suchanlässe mit eigenen Seiten",
          "Die Hauptkategorie bildet den Umsatzschwerpunkt ab, nicht das breiteste Angebot",
          "Wärmepumpe und Heizungstausch sind die wertvollsten Projektthemen",
          "Regelmäßige Bewertungen schlagen viele alte Bewertungen",
          "Einsatzgebiet und Anfahrtszeit gehören sichtbar auf jede Seite",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie suchen Kunden nach Heizung und Sanitär?
        </h2>
        <AnswerBlock question="Welche Suchanlässe gibt es im SHK-Handwerk?">
          Zwei klar getrennte: der Notfall und das Projekt. Beim Notfall zählen Erreichbarkeit, Einsatzgebiet und Anfahrtszeit, die Entscheidung fällt in Minuten. Beim Projekt wie Badsanierung oder Heizungstausch vergleichen Kunden über Wochen Referenzen, Ablauf und Beratungsqualität. Beide Anlässe brauchen eigene Seiten mit eigener Ansprache.
        </AnswerBlock>
      </section>

      <section id="kategorien" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Kategorien und Leistungen gehören ins Profil?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Schwerpunkt</th>
                <th className="border p-3 text-left">Hauptkategorie</th>
                <th className="border p-3 text-left">Sinnvolle Nebenkategorien</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Sanitär und Reparatur</td><td className="border p-3">Klempner</td><td className="border p-3">Notdienst, Rohrreinigung</td></tr>
              <tr><td className="border p-3 font-semibold">Heizungsbau</td><td className="border p-3">Heizungsinstallateur</td><td className="border p-3">Klempner, Solaranlagen</td></tr>
              <tr><td className="border p-3 font-semibold">Badsanierung</td><td className="border p-3">Badezimmerbau</td><td className="border p-3">Klempner, Fliesenleger</td></tr>
              <tr><td className="border p-3 font-semibold">Klima und Lüftung</td><td className="border p-3">Klimatechnik</td><td className="border p-3">Heizungsinstallateur</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          Die Auswahllogik im Detail erklärt der <Link to="/blog/google-business-kategorien-guide" className="text-primary underline">Kategorien-Guide</Link>.
        </p>
      </section>

      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Flame className="w-7 h-7 text-primary" />
          Welche Keywords haben den höchsten Auftragswert?
        </h2>
        <AnswerBlock question="Auf welche Suchbegriffe sollte ein SHK-Betrieb optimieren?">
          Auf zwei Gruppen parallel: Dringlichkeitsbegriffe wie Rohrbruch, Heizungsausfall oder verstopfter Abfluss für sofortige Einsätze, und Projektbegriffe wie Badsanierung, Heizungstausch oder Wärmepumpe nachrüsten für hohe Auftragswerte. Jede Gruppe bekommt eine eigene Landingpage, weil Erwartung und Entscheidungsdauer völlig unterschiedlich sind.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Notfall:</strong> Rohrbruch, Wasserschaden, Heizung ausgefallen, Abfluss verstopft.</li>
          <li><strong>Projekt:</strong> Badsanierung, Heizungstausch, Wärmepumpe, Fußbodenheizung.</li>
          <li><strong>Wartung:</strong> Heizungswartung, Thermenwartung, Trinkwasserprüfung.</li>
          <li><strong>Ort:</strong> jede Gruppe kombiniert mit Stadt und relevanten Ortsteilen.</li>
        </ul>
      </section>

      <section id="notdienst" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wie baue ich Notdienst-Sichtbarkeit auf?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Eigene Notdienstseite mit Rufnummer im ersten Bildschirmbereich.</li>
          <li>Einsatzgebiet und realistische Anfahrtszeit benennen.</li>
          <li>Preisrahmen für Anfahrt und Stundensatz transparent angeben.</li>
          <li>Erreichbarkeitszeiten korrekt im Standortprofil hinterlegen.</li>
          <li>Keine Verfügbarkeit versprechen, die nicht dauerhaft haltbar ist.</li>
        </ol>
        <p className="mt-6">
          Vertiefend: <Link to="/blog/local-seo-notdienst-keywords" className="text-primary underline">Notdienst-Keywords richtig einsetzen</Link>.
        </p>
      </section>

      <section id="waermepumpe" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Globe className="w-7 h-7 text-primary" />
          Wie gewinne ich Wärmepumpen-Projekte?
        </h2>
        <AnswerBlock question="Wie sieht eine gute Wärmepumpen-Leistungsseite aus?">
          Sie erklärt den Ablauf von der Bestandsaufnahme über die Auslegung bis zur Inbetriebnahme, benennt Voraussetzungen im Altbau, nennt typische Projektdauern und beschreibt, wie der Betrieb beim Förderantrag unterstützt. Keine Förderhöhen versprechen, sondern auf offizielle Programme verweisen — das erzeugt qualifizierte Anfragen statt reiner Preisabfragen.
        </AnswerBlock>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wie sammle ich Bewertungen im Handwerksalltag?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Kurzer Bewertungslink direkt nach Auftragsabschluss per Nachricht.</li>
          <li>Monteure erinnern beim Abschlussgespräch, ohne Druck.</li>
          <li>Jede Bewertung sachlich beantworten, auch kritische.</li>
          <li>Regelmäßigkeit vor Menge: wenige neue pro Monat genügen.</li>
        </ul>
        <p className="mt-4">
          Formulierungen liefern die <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline">Antwortvorlagen</Link>.
        </p>
      </section>

      <section id="website" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Globe className="w-7 h-7 text-primary" />
          Wie strukturiere ich die Website?
        </h2>
        <AnswerBlock question="Welche Seiten braucht ein SHK-Betrieb mindestens?">
          Eine Seite je Kernleistung (Heizung, Sanitär, Bad, Wartung, Notdienst), eine Seite je Hauptstandort im Einsatzgebiet, eine Referenzseite mit echten Projektbildern und eine Kontaktseite mit identischen Angaben wie im Standortprofil. Diese Struktur deckt beide Suchanlässe ab und bleibt für kleine Betriebe pflegbar.
        </AnswerBlock>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Standortprofil vollständig, Kategorien korrigiert, NAP-Abgleich, Notdienstseite online.</li>
          <li><strong>Tag 31–60:</strong> Leistungsseiten für Heizung, Bad und Wärmepumpe, Referenzbilder, Bewertungsroutine starten.</li>
          <li><strong>Tag 61–90:</strong> Ortsseiten für das Einsatzgebiet, interne Verlinkung, Auswertung von Anrufen und Routenanfragen.</li>
        </ol>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Sichtbarkeit für Ihren SHK-Betrieb</h3>
        <p className="mb-4">
          Wir strukturieren Standortprofil, Notdienstseite und Projektseiten so, dass beide Suchanlässe sauber bedient werden — mit klarer Messung von Anrufen und Anfragen.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoHeizungSanitaer;
