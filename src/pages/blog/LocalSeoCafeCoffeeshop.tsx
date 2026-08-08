import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Coffee, Search, Image, Clock, Star, BarChart3, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-cafe-coffeeshop";

const LocalSeoCafeCoffeeshop = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Wie Gäste nach Cafés suchen" },
    { id: "profil", title: "Profil und Kategorien" },
    { id: "anlaesse", title: "Anlässe als Seiten" },
    { id: "arbeiten", title: "Arbeiten im Café" },
    { id: "fotos", title: "Fotos und Atmosphäre" },
    { id: "bewertungen", title: "Bewertungen" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wonach suchen Gäste, bevor sie ein Café auswählen?",
      answer:
        "Fast immer nach Café plus Stadtteil, nach Öffnungszeiten und nach konkreten Anlässen wie Frühstück, Brunch oder Kuchen. Ein wachsender Anteil sucht nach Eigenschaften wie WLAN, Steckdosen, hundefreundlich oder veganen Optionen. Die Suche passiert mobil und meist weniger als fünfzehn Minuten vor dem Besuch.",
    },
    {
      question: "Welche Kategorie ist für ein Café die richtige?",
      answer:
        "Die Hauptkategorie beschreibt das Kerngeschäft, meist Café oder Coffee Shop. Wer schwerpunktmäßig frühstückt, backt oder Mittagsgerichte verkauft, ergänzt Frühstücksrestaurant, Konditorei oder Bistro als Zweitkategorie. Falsche Hauptkategorien kosten Sichtbarkeit bei genau den Suchanfragen, die Umsatz bringen.",
    },
    {
      question: "Wie wichtig sind Öffnungszeiten für Cafés?",
      answer:
        "Sie sind der häufigste Grund für Enttäuschung und schlechte Bewertungen. Öffnungszeiten müssen tagesgenau stimmen, Feiertage und Sonderzeiten sind vorab zu hinterlegen, und eine abweichende Küchenzeit für Frühstück oder Mittag gehört sichtbar auf die Website und ins Profil.",
    },
    {
      question: "Lohnt sich die Positionierung als Arbeitsplatz?",
      answer:
        "Ja, wenn Kapazität und Geschäftsmodell dazu passen. Suchanfragen nach Café mit WLAN oder Laptop erlaubt sind eindeutig und wenig umkämpft. Wichtig sind klare Regeln zu Zeitfenstern, Mindestverzehr und Steckdosen, damit Erwartung und Realität übereinstimmen.",
    },
    {
      question: "Wie viele Fotos braucht ein Café-Profil?",
      answer:
        "Mindestens zwanzig aktuelle Fotos, die Innenraum, Außenbereich, Theke, Kaffee, Speisen und Menschen zeigen. Entscheidend ist Aktualität statt Menge: monatlich einige neue Bilder halten das Profil lebendig und beantworten die Atmosphärenfrage, die vor jedem Besuch gestellt wird.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Cafés werden selten geplant besucht. Die Entscheidung fällt unterwegs, auf dem Smartphone, innerhalb weniger Minuten — anhand von Öffnungszeiten, Fotos und Bewertungen. Wer diese drei Signale sauber pflegt, gewinnt Laufkundschaft, die sonst zum Nachbarn geht.
      </p>

      <KeyTakeawaysBox
        items={[
          "Öffnungszeiten tagesgenau pflegen, inklusive Feiertagen",
          "Anlässe wie Frühstück, Brunch und Kuchen bekommen eigene Seiten",
          "Eigenschaften wie WLAN, hundefreundlich, vegan explizit benennen",
          "Monatlich neue Fotos statt einmaliger Bilderflut",
          "Bewertungen im Rhythmus sammeln, nicht in Wellen",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie suchen Gäste nach einem Café?
        </h2>
        <AnswerBlock question="Welche Suchanfragen entscheiden über den Besuch?">
          Café plus Stadtteil, Frühstück in der Nähe, Brunch am Sonntag sowie Eigenschaften wie WLAN, vegan oder hundefreundlich. Die Suche findet mobil und kurz vor dem Besuch statt. Entschieden wird anhand von Öffnungszeiten, Bewertungssternen und dem ersten Foto — in dieser Reihenfolge.
        </AnswerBlock>
      </section>

      <section id="profil" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Coffee className="w-7 h-7 text-primary" />
          Welche Kategorien und Attribute gehören ins Profil?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Schwerpunkt</th>
                <th className="border p-3 text-left">Hauptkategorie</th>
                <th className="border p-3 text-left">Sinnvolle Ergänzung</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Kaffee und Kuchen</td><td className="border p-3">Café</td><td className="border p-3">Konditorei, Dessertlokal</td></tr>
              <tr><td className="border p-3 font-semibold">Spezialitätenkaffee</td><td className="border p-3">Coffee Shop</td><td className="border p-3">Kaffeerösterei, Kaffeehandel</td></tr>
              <tr><td className="border p-3 font-semibold">Frühstück und Brunch</td><td className="border p-3">Frühstücksrestaurant</td><td className="border p-3">Café, Bistro</td></tr>
              <tr><td className="border p-3 font-semibold">Mittagsgeschäft</td><td className="border p-3">Bistro</td><td className="border p-3">Café, Mittagsrestaurant</td></tr>
              <tr><td className="border p-3 font-semibold">Backwaren zum Mitnehmen</td><td className="border p-3">Bäckerei</td><td className="border p-3">Café</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Kategorienlogik im Detail: <Link to="/blog/google-business-profile-optimieren" className="text-primary underline">Profil optimieren</Link>.
        </p>
      </section>

      <section id="anlaesse" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-7 h-7 text-primary" />
          Warum brauchen Anlässe eigene Seiten?
        </h2>
        <AnswerBlock question="Welche Anlassseiten lohnen sich für ein Café?">
          Frühstück, Sonntagsbrunch, Kuchen und Torten, Mittagstisch sowie Catering und private Feiern. Jede dieser Seiten beantwortet eigene Fragen zu Zeiten, Preisen und Reservierung. Eine einzelne Speisekartenseite kann das nicht leisten und verliert gegen Wettbewerber mit anlassbezogenen Inhalten.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Jede Anlassseite nennt Zeitfenster, Preisrahmen und Reservierungsweg.</li>
          <li>Saisonales wie Eiskaffee oder Weihnachtsgebäck rechtzeitig ergänzen.</li>
          <li>Allergene und vegane Optionen sichtbar auszeichnen.</li>
        </ul>
      </section>

      <section id="arbeiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Laptop className="w-7 h-7 text-primary" />
          Wie positioniere ich mich als Arbeitsplatz?
        </h2>
        <AnswerBlock question="Was muss ein Laptop-freundliches Café kommunizieren?">
          WLAN-Verfügbarkeit, Steckdosen, ruhige Bereiche, erlaubte Aufenthaltsdauer und ein fairer Mindestverzehr. Diese Angaben gehören auf eine eigene Seite und ins Profil. Klare Regeln verhindern Konflikte an vollen Tagen und ziehen Gäste an, die gezielt nach Café mit WLAN suchen.
        </AnswerBlock>
      </section>

      <section id="fotos" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Image className="w-7 h-7 text-primary" />
          Welche Fotos überzeugen wirklich?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Innenraum bei Tageslicht, aus Augenhöhe, ohne Weitwinkelverzerrung.</li>
          <li>Außenbereich und Eingang, damit Gäste den Ort wiedererkennen.</li>
          <li>Kaffee und Speisen so, wie sie tatsächlich serviert werden.</li>
          <li>Team an der Theke — Menschen erzeugen Vertrauen.</li>
          <li>Monatlich nachlegen statt einmalig hochladen.</li>
        </ol>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Wie sammle ich Bewertungen im Tagesgeschäft?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>QR-Code auf Tischaufsteller und Kassenbon, ohne Gegenleistung.</li>
          <li>Bitten in ruhigen Momenten statt in der Stoßzeit aussprechen.</li>
          <li>Kritik zu Wartezeit oder Lautstärke sachlich beantworten.</li>
          <li>Gleichmäßiger Zufluss über das Jahr statt Kampagnenwellen.</li>
        </ul>
        <p className="mt-4">
          Vorlagen: <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline">Antwortvorlagen für Bewertungen</Link>.
        </p>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Kategorien korrigieren, Öffnungszeiten und Feiertage pflegen, zwanzig aktuelle Fotos hochladen.</li>
          <li><strong>Tag 31–60:</strong> Anlassseiten für Frühstück, Brunch und Kuchen schreiben, Attribute wie WLAN und vegan ergänzen.</li>
          <li><strong>Tag 61–90:</strong> Bewertungsroutine etablieren, saisonale Beiträge planen, Nachfrage nach Anlässen auswerten.</li>
        </ol>
        <p className="mt-4">
          Weiterführend: <Link to="/blog/local-seo-fuer-restaurants" className="text-primary underline">Local SEO für Restaurants</Link> und{" "}
          <Link to="/blog/local-seo-baeckerei" className="text-primary underline">Local SEO für Bäckereien</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoCafeCoffeeshop;
