import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Search, ListChecks, MapPin, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "lokale-landing-pages";

const LokaleLandingPages = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "wann", title: "Wann sich eine Standortseite lohnt" },
    { id: "aufbau", title: "Pflichtbausteine einer Seite" },
    { id: "urls", title: "URL-Struktur und Verlinkung" },
    { id: "inhalte", title: "Einzigartige Inhalte statt Ortstausch" },
    { id: "fehler", title: "Typische Fehler" },
    { id: "messung", title: "Erfolg messen" },
  ];

  const faqItems = [
    {
      question: "Wann braucht ein Unternehmen eine eigene lokale Landing Page?",
      answer:
        "Sobald es an einem Ort eine reale Präsenz oder ein regelmäßig bedientes Einsatzgebiet gibt und dort eigenständige Inhalte möglich sind. Eine Seite ohne Adresse, ohne Referenzen und ohne ortsbezogene Informationen erzeugt keinen Mehrwert und wird von Suchmaschinen als dünner Inhalt eingestuft.",
    },
    {
      question: "Wie viele Standortseiten sind sinnvoll?",
      answer:
        "So viele, wie mit eigenständigen Inhalten gefüllt werden können. Fünf gut belegte Seiten mit Referenzen, Ansprechpartnern und Anfahrtsangaben schlagen fünfzig automatisch erzeugte Ortsvarianten. Die Grenze liegt dort, wo die Redaktion keine echten Unterschiede mehr beschreiben kann.",
    },
    {
      question: "Welche URL-Struktur ist für Standortseiten am besten?",
      answer:
        "Ein flaches Muster wie /standorte/stadt oder /leistung-stadt. Wichtig sind Konsistenz, sprechende Wörter und ein Verzicht auf Parameter. Jede Seite gehört in die Sitemap und wird aus einer Standortübersicht sowie aus thematisch passenden Leistungsseiten verlinkt.",
    },
    {
      question: "Warum ranken viele Standortseiten nicht?",
      answer:
        "Weil sie sich nur im Ortsnamen unterscheiden. Google erkennt Vorlagentexte zuverlässig und wertet sie als Duplikate. Ranking entsteht erst durch ortsspezifische Belege: Projekte, Bilder, Ansprechpartner, Öffnungszeiten, Anfahrt und Bewertungen aus genau diesem Umfeld.",
    },
    {
      question: "Wie misst man den Erfolg lokaler Landing Pages?",
      answer:
        "Pro Seite getrennt: Impressionen und Klicks in der Search Console, Anrufe und Formularabsendungen aus dem jeweiligen Formular sowie die Position für die Kombination aus Leistung und Ort. Erst der Vergleich über mehrere Seiten zeigt, welches Muster tatsächlich funktioniert.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Lokale Landing Pages sind der Hebel für Sichtbarkeit außerhalb der eigenen Adresse — aber nur, wenn jede Seite etwas beschreibt, das es nur an diesem Ort gibt.
      </p>

      <KeyTakeawaysBox
        items={[
          "Eine Seite pro Ort nur bei echter Präsenz oder echtem Einsatzgebiet",
          "Pflichtbausteine: Adresse oder Gebiet, Ansprechpartner, Referenzen, Anfahrt",
          "Flache URL-Struktur, Standortübersicht als Verteilerseite",
          "Ortstausch in Vorlagentexten erzeugt Duplikate statt Rankings",
          "Messung getrennt je Seite, sonst bleibt das Muster unbewiesen",
        ]}
      />

      <section id="wann" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wann lohnt sich eine eigene Standortseite?
        </h2>
        <AnswerBlock question="Wann ist eine lokale Landing Page sinnvoll?">
          Wenn am Ort eine Filiale, ein Ansprechpartner oder ein regelmäßig bedientes Einsatzgebiet existiert und mindestens drei ortsspezifische Belege vorliegen: abgeschlossene Projekte, Bilder, Bewertungen oder Anfahrtsdetails. Ohne diese Belege bleibt die Seite dünn und schadet der gesamten Domain.
        </AnswerBlock>
      </section>

      <section id="aufbau" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Bausteine gehören auf jede Seite?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Baustein</th>
                <th className="border p-3 text-left">Zweck</th>
                <th className="border p-3 text-left">Mindestumfang</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">H1 mit Leistung und Ort</td><td className="border p-3">Suchintention treffen</td><td className="border p-3">Eine Zeile, keine Keyword-Kette</td></tr>
              <tr><td className="border p-3 font-semibold">Adresse oder Einsatzgebiet</td><td className="border p-3">Lokale Relevanz belegen</td><td className="border p-3">NAP identisch zum Profil</td></tr>
              <tr><td className="border p-3 font-semibold">Ansprechpartner</td><td className="border p-3">Vertrauen und Kontaktweg</td><td className="border p-3">Name, Foto, Durchwahl</td></tr>
              <tr><td className="border p-3 font-semibold">Referenzen vor Ort</td><td className="border p-3">Einzigartigkeit</td><td className="border p-3">Zwei bis fünf Projekte</td></tr>
              <tr><td className="border p-3 font-semibold">Anfahrt und Parken</td><td className="border p-3">Praktische Frage klären</td><td className="border p-3">Karte plus Textbeschreibung</td></tr>
              <tr><td className="border p-3 font-semibold">Formular mit Ortsfeld</td><td className="border p-3">Messbarkeit</td><td className="border p-3">Quelle je Seite kennzeichnen</td></tr>
              <tr><td className="border p-3 font-semibold">LocalBusiness Schema</td><td className="border p-3">Maschinenlesbarkeit</td><td className="border p-3">JSON-LD je Standort</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Grundlagen dazu: <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline">LocalBusiness Schema implementieren</Link>.
        </p>
      </section>

      <section id="urls" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Wie strukturiere ich URLs und interne Links?
        </h2>
        <AnswerBlock question="Welche URL-Struktur ist für Standortseiten richtig?">
          Ein flaches, konsistentes Muster wie /standorte/stadt oder /leistung-stadt, ohne Parameter und ohne tiefe Verschachtelung. Jede Seite wird aus einer Standortübersicht, aus der passenden Leistungsseite und aus der Sitemap verlinkt — so entsteht ein nachvollziehbarer Pfad für Nutzer und Crawler.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Eine Übersichtsseite als Verteiler für alle Standorte.</li>
          <li>Querverlinkung nur zwischen benachbarten, thematisch passenden Orten.</li>
          <li>Keine Fußzeilenliste mit Dutzenden Ortslinks.</li>
        </ul>
      </section>

      <section id="inhalte" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-7 h-7 text-primary" />
          Wie werden Inhalte wirklich einzigartig?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Je Seite mindestens zwei abgeschlossene Projekte mit Ort, Aufgabe und Ergebnis beschreiben.</li>
          <li>Eigene Bilder verwenden, keine Stockmotive mit austauschbarem Hintergrund.</li>
          <li>Ortsbezogene Besonderheiten aufgreifen: Bebauung, Anfahrtslage, typische Aufträge.</li>
          <li>Bewertungen aus dem Umfeld zitieren, mit Zustimmung und Datum.</li>
          <li>Häufige Fragen aus genau diesem Gebiet beantworten.</li>
        </ol>
        <p className="mt-4">
          Ergänzend: <Link to="/blog/local-content-marketing" className="text-primary underline">lokales Content-Marketing</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche Fehler kosten am meisten Sichtbarkeit?
        </h2>
        <AnswerBlock question="Warum ranken Standortseiten oft nicht?">
          Weil sie aus einer Vorlage stammen, in der nur der Ortsname getauscht wurde. Solche Seiten konkurrieren untereinander um dieselben Begriffe, verwässern die interne Verlinkung und werden als Duplikate behandelt. Weniger Seiten mit echten Belegen liefern verlässlich bessere Ergebnisse.
        </AnswerBlock>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich den Erfolg je Seite?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Search Console: Impressionen, Klicks und Position je URL, monatlich verglichen.</li>
          <li>Formularquelle und Rufnummernklick je Seite getrennt erfassen.</li>
          <li>Nach 90 Tagen entscheiden: ausbauen, zusammenlegen oder entfernen.</li>
        </ul>
        <p className="mt-4">
          Passende Kennzahlen: <Link to="/blog/local-seo-tracking-kpis" className="text-primary underline">Local SEO Tracking und KPIs</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LokaleLandingPages;