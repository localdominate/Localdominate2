import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Paintbrush, Search, ListChecks, Images, Star, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-maler-lackierer";

const LocalSeoMalerLackierer = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "auftragsarten", title: "Privat, Gewerbe, Sanierung" },
    { id: "kategorien", title: "Kategorien und Leistungen" },
    { id: "seiten", title: "Seitenstruktur" },
    { id: "galerie", title: "Vorher-Nachher-Galerie" },
    { id: "angebot", title: "Vom Klick zum Aufmaßtermin" },
    { id: "bewertungen", title: "Bewertungen im Handwerk" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Welche Google-Kategorie ist für Malerbetriebe richtig?",
      answer:
        "Maler als Hauptkategorie. Nebenkategorien nach tatsächlichem Angebot: Lackierer, Trockenbauunternehmen, Fassadenbauunternehmen oder Bodenleger. Betriebe mit Schwerpunkt Fassadensanierung sollten das als Nebenkategorie führen, weil sich Auftragswert und Suchverhalten deutlich vom Innenanstrich unterscheiden.",
    },
    {
      question: "Wie viele Leistungsseiten braucht ein Malerbetrieb?",
      answer:
        "Drei bis sechs, je nach Angebot: Innenanstrich, Fassadenanstrich, Tapezierarbeiten, Lackierarbeiten, Bodenbeschichtung und Schimmelsanierung. Jede Seite braucht eigenen Inhalt zu Ablauf, Materialien, Dauer und Preisrahmen. Reine Aufzählungen ohne Detailtiefe ranken nicht und beantworten keine Kundenfrage.",
    },
    {
      question: "Wie wichtig ist eine Vorher-Nachher-Galerie?",
      answer:
        "Sie ist das wichtigste Vertrauenselement, weil Malerarbeiten visuell bewertet werden. Wirksam sind Bildpaare aus derselben Perspektive, ergänzt um Objekttyp, Fläche, verwendete Materialien und Dauer. Diese Angaben machen die Referenz vergleichbar und liefern gleichzeitig Text, den Suchmaschinen und AI-Systeme auswerten können.",
    },
    {
      question: "Soll ich Quadratmeterpreise auf der Website nennen?",
      answer:
        "Preisspannen ja, Festpreise nein. Sinnvoll sind Von-bis-Angaben je Quadratmeter für Standardleistungen plus die Faktoren, die den Preis verändern: Untergrundzustand, Anzahl der Anstriche, Höhe, Gerüstbedarf und Abdeckaufwand. Das reduziert Preisanfragen ohne Substanz und verkürzt den Weg zum Aufmaßtermin.",
    },
    {
      question: "Wie gewinne ich Gewerbeaufträge statt nur Privatkunden?",
      answer:
        "Über eigene Inhalte für Hausverwaltungen, Bauträger und Gewerbeobjekte mit Angaben zu Kapazität, Terminzuverlässigkeit, Versicherungsschutz und Referenzobjekten. Privatkunden entscheiden nach Optik und Preis, gewerbliche Auftraggeber nach Planbarkeit und Abwicklung. Beide Zielgruppen brauchen daher getrennte Seiten.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Malerarbeiten werden mit den Augen gekauft. Wer online nur Leistungen auflistet, konkurriert über den Preis; wer Ergebnisse zeigt und den Ablauf erklärt, gewinnt den Aufmaßtermin — und damit den Auftrag.
      </p>

      <KeyTakeawaysBox
        items={[
          "Privat- und Gewerbeaufträge brauchen getrennte Seiten",
          "Jede Leistung mit Ablauf, Material, Dauer und Preisrahmen beschreiben",
          "Vorher-Nachher-Bildpaare mit Fläche und Objekttyp dokumentieren",
          "Preisspannen statt Festpreise senken unpassende Anfragen",
          "Ziel jeder Seite ist der Aufmaßtermin, nicht der Anruf",
        ]}
      />

      <section id="auftragsarten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Paintbrush className="w-7 h-7 text-primary" />
          Welche Auftragsarten muss ich unterscheiden?
        </h2>
        <AnswerBlock question="Welche Kundengruppen suchen nach Malerbetrieben?">
          Drei Gruppen mit unterschiedlicher Logik: Privatkunden mit Renovierungswunsch entscheiden nach Optik und Preis, Hausverwaltungen und Bauträger nach Kapazität und Terminzuverlässigkeit, Sanierungsfälle nach Verfügbarkeit und Fachkunde. Jede Gruppe braucht eigene Inhalte, weil Suchbegriffe, Auftragswerte und Entscheidungswege auseinanderliegen.
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
                <th className="border p-3 text-left">Sinnvolle Nebenkategorie</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Innenanstrich</td><td className="border p-3">Maler</td><td className="border p-3">Tapezierer</td></tr>
              <tr><td className="border p-3 font-semibold">Fassade</td><td className="border p-3">Maler</td><td className="border p-3">Fassadenbauunternehmen</td></tr>
              <tr><td className="border p-3 font-semibold">Lackierarbeiten</td><td className="border p-3">Lackierer</td><td className="border p-3">Maler</td></tr>
              <tr><td className="border p-3 font-semibold">Trockenbau</td><td className="border p-3">Maler</td><td className="border p-3">Trockenbauunternehmen</td></tr>
              <tr><td className="border p-3 font-semibold">Bodenbeschichtung</td><td className="border p-3">Maler</td><td className="border p-3">Bodenleger</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Auswahllogik und Fallstricke stehen im <Link to="/blog/google-business-kategorien-guide" className="text-primary underline">Kategorien-Guide</Link>.
        </p>
      </section>

      <section id="seiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie baue ich die Seitenstruktur auf?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Leistungsseiten:</strong> je Gewerk eine Seite mit Ablauf, Material, Dauer, Preisrahmen.</li>
          <li><strong>Zielgruppenseiten:</strong> Privatkunden, Hausverwaltung, Gewerbeobjekte.</li>
          <li><strong>Ortsseiten:</strong> nur für real bediente Orte mit eigenen Projekten und Bildern.</li>
          <li><strong>Referenzseiten:</strong> Projektdokumentation mit Bildpaaren und Eckdaten.</li>
        </ul>
      </section>

      <section id="galerie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Images className="w-7 h-7 text-primary" />
          Wie dokumentiere ich Projekte richtig?
        </h2>
        <AnswerBlock question="Was gehört zu jedem Referenzprojekt?">
          Ein Bildpaar aus identischer Perspektive, der Objekttyp, die bearbeitete Fläche in Quadratmetern, die eingesetzten Materialien, die Dauer der Ausführung und die Besonderheit des Projekts. Diese Angaben machen Referenzen vergleichbar und liefern gleichzeitig auswertbaren Text für Suchmaschinen und AI-Systeme.
        </AnswerBlock>
        <p className="mt-4">
          Technische Bildvorgaben unter <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline">Fotos optimieren</Link>.
        </p>
      </section>

      <section id="angebot" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie komme ich vom Klick zum Aufmaßtermin?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Objekttyp und ungefähre Fläche abfragen.</li>
          <li>Gewünschte Leistung konkret auswählen lassen.</li>
          <li>Zustand des Untergrunds und Zeitfenster erfassen.</li>
          <li>Preisspanne offen nennen, bevor der Termin vereinbart wird.</li>
          <li>Aufmaßtermin als klaren nächsten Schritt anbieten.</li>
        </ol>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Welche Bewertungen wirken im Malerhandwerk?
        </h2>
        <AnswerBlock question="Worauf achten Kunden in Bewertungen von Malerbetrieben?">
          Auf Sauberkeit der Baustelle, Termintreue, Kostentreue gegenüber dem Angebot und die Qualität der Kanten und Übergänge. Bewertungen, die diese Punkte konkret benennen, überzeugen stärker als eine hohe Gesamtzahl. Die beste Rücklaufquote entsteht bei der Abnahme, direkt nach der Endreinigung.
        </AnswerBlock>
        <p className="mt-4">
          Vorgehen und Formulierungen: <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline">Bewertungen gewinnen</Link>.
        </p>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Kategorien und Leistungen korrigieren, NAP-Abgleich, erste zehn Projektbilder.</li>
          <li><strong>Tag 31–60:</strong> Leistungsseiten schreiben, Preisspannen veröffentlichen, Anfrageformular qualifizieren.</li>
          <li><strong>Tag 61–90:</strong> Zielgruppenseiten für Hausverwaltungen, Referenzseiten ausbauen, Bewertungsroutine bei Abnahme.</li>
        </ol>
        <p className="mt-6">
          Grundgerüst: <Link to="/blog/local-seo-roadmap-90-tage" className="text-primary underline">90-Tage-Roadmap</Link>, Branchenübersicht unter <Link to="/blog/local-seo-handwerker" className="text-primary underline">Local SEO für Handwerker</Link>.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Aufträge statt Preisanfragen</h3>
        <p className="mb-4">
          Wir strukturieren Profil, Leistungsseiten und Referenzen so, dass qualifizierte Aufmaßtermine entstehen — passend zur eigenen Kapazität.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Analyse anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoMalerLackierer;
