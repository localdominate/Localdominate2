import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Cake, Search, ListChecks, Calendar, Star, Image, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-baeckerei-konditorei";

const LocalSeoBaeckereiKonditorei = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Wie Kunden nach Torten suchen" },
    { id: "anlassseiten", title: "Anlässe als Seiten" },
    { id: "hochzeit", title: "Hochzeitstorten" },
    { id: "bestellprozess", title: "Bestellprozess und Vorlauf" },
    { id: "fotos", title: "Fotos als Verkaufsargument" },
    { id: "saison", title: "Saisonkalender" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wonach suchen Kunden bei Konditoreien konkret?",
      answer:
        "Fast immer nach Anlass plus Ort, etwa Hochzeitstorte, Geburtstagstorte oder Motivtorte in der jeweiligen Stadt. Dazu kommen Anfragen zu Preisen, Vorlaufzeit und Sonderwünschen wie glutenfrei oder vegan. Die Suche startet Wochen bis Monate vor dem Termin, nicht spontan wie im Ladengeschäft.",
    },
    {
      question: "Braucht jeder Anlass eine eigene Seite?",
      answer:
        "Ja, weil sich Preis, Vorlauf und Gestaltungsfragen deutlich unterscheiden. Hochzeitstorte, Geburtstagstorte, Motivtorte, Taufe und Firmenanlass sind eigene Suchintentionen. Eine gemeinsame Tortenseite rankt für keine davon zuverlässig und beantwortet die konkreten Fragen der Besteller nicht.",
    },
    {
      question: "Wie gehe ich mit Preisen bei individuellen Torten um?",
      answer:
        "Mit Preisspannen je Größe und Aufwand statt Festpreisen. Sinnvoll sind ein Preis je Portion, Zuschläge für Etagen, Fondant oder Zuckerblumen sowie zwei bis drei Beispielkalkulationen. Konditoreien ohne jede Preisangabe verlieren Anfragen an Betriebe, die Größenordnungen offen nennen.",
    },
    {
      question: "Wie viel Vorlauf sollte kommuniziert werden?",
      answer:
        "Die Vorlaufzeit gehört sichtbar auf jede Anlassseite: üblich sind wenige Tage für Standardtorten und mehrere Wochen bis Monate für Hochzeits- und Motivtorten. Klare Angaben verhindern unpassende Anfragen und senken den Aufwand für Absagen im Tagesgeschäft erheblich.",
    },
    {
      question: "Welche Rolle spielen Fotos für Konditoreien?",
      answer:
        "Eine entscheidende, weil die Kaufentscheidung visuell fällt. Nötig sind echte Fotos eigener Arbeiten, sortiert nach Anlass, mit Angabe von Größe, Portionen und Preisrahmen. Stockfotos oder fremde Referenzen zerstören Vertrauen und führen zu Enttäuschung bei der Übergabe.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Konditoreien leben von zwei Geschäften gleichzeitig: Laufkundschaft im Laden und geplanten Bestellungen für Anlässe. Der zweite Teil entscheidet sich fast vollständig online — Wochen vor dem Termin, anhand von Bildern, Preisrahmen und Vorlaufzeiten.
      </p>

      <KeyTakeawaysBox
        items={[
          "Jeder Anlass bekommt eine eigene Seite mit Preisspanne und Vorlauf",
          "Hochzeitstorten sind das umsatzstärkste Segment und brauchen eigene Tiefe",
          "Preise als Spanne je Portion statt Schweigen oder Festpreis",
          "Nur eigene Fotos mit Größe, Portionen und Preisrahmen",
          "Saisonale Seiten acht Wochen vor der Nachfragespitze aktualisieren",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie suchen Kunden nach einer Konditorei?
        </h2>
        <AnswerBlock question="Welche Suchanfragen bringen Tortenbestellungen?">
          Anlass plus Ort — Hochzeitstorte, Geburtstagstorte oder Motivtorte in der jeweiligen Stadt — ergänzt um Fragen zu Preis, Vorlaufzeit und Sonderwünschen wie glutenfrei oder vegan. Die Recherche beginnt Wochen bis Monate vor dem Termin und endet mit einer Anfrage, nicht mit einem Ladenbesuch.
        </AnswerBlock>
      </section>

      <section id="anlassseiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Anlassseiten lohnen sich?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Anlass</th>
                <th className="border p-3 text-left">Vorlauf</th>
                <th className="border p-3 text-left">Pflichtinhalt der Seite</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Hochzeitstorte</td><td className="border p-3">3–9 Monate</td><td className="border p-3">Etagen, Portionen, Verkostung, Lieferung</td></tr>
              <tr><td className="border p-3 font-semibold">Geburtstagstorte</td><td className="border p-3">1–3 Wochen</td><td className="border p-3">Größen, Motive, Preisspanne</td></tr>
              <tr><td className="border p-3 font-semibold">Motivtorte</td><td className="border p-3">2–4 Wochen</td><td className="border p-3">Machbarkeit, Aufpreise, Beispiele</td></tr>
              <tr><td className="border p-3 font-semibold">Taufe und Kommunion</td><td className="border p-3">4–8 Wochen</td><td className="border p-3">Saisonzeitraum, Gestaltung, Portionen</td></tr>
              <tr><td className="border p-3 font-semibold">Firmenanlass</td><td className="border p-3">2–6 Wochen</td><td className="border p-3">Mengen, Rechnung, Logo-Gestaltung</td></tr>
              <tr><td className="border p-3 font-semibold">Allergiker und vegan</td><td className="border p-3">wie Basis</td><td className="border p-3">Rezeptur, Grenzen, Kennzeichnung</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="hochzeit" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Cake className="w-7 h-7 text-primary" />
          Warum ist die Hochzeitstorte der wichtigste Hebel?
        </h2>
        <AnswerBlock question="Was gehört auf eine Hochzeitstorten-Seite?">
          Portionsrechner oder Portionstabelle je Etagenzahl, Preisspanne je Portion, Ablauf von Anfrage über Verkostung bis Lieferung, Lieferradius mit Kosten, Aufbau vor Ort sowie eine Galerie eigener Arbeiten mit Größenangabe. Dazu ein Anfrageformular, das Termin, Gästezahl und Location abfragt.
        </AnswerBlock>
        <p className="mt-4">
          Passend dazu: <Link to="/blog/local-seo-hochzeitsdienstleister" className="text-primary underline">Local SEO für Hochzeitsdienstleister</Link>.
        </p>
      </section>

      <section id="bestellprozess" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie gestalte ich den Bestellprozess?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Anfrageformular mit Termin, Gästezahl, Anlass und Wunschmotiv.</li>
          <li>Vorlaufzeit und Annahmeschluss pro Anlass sichtbar nennen.</li>
          <li>Antwortzeit zusagen und einhalten — meist entscheidet der schnellste Rückruf.</li>
          <li>Anzahlung, Stornoregel und Abholzeiten transparent erklären.</li>
        </ol>
      </section>

      <section id="fotos" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Image className="w-7 h-7 text-primary" />
          Wie setze ich Fotos richtig ein?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Ausschließlich eigene Arbeiten zeigen, nach Anlass sortiert.</li>
          <li>Zu jedem Bild Größe, Portionen und Preisrahmen angeben.</li>
          <li>Neutraler Hintergrund, Tageslicht, Torte vollständig im Bild.</li>
          <li>Monatlich neue Arbeiten ergänzen und ins Unternehmensprofil hochladen.</li>
        </ul>
        <p className="mt-4">
          Details: <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline">Fotos im Unternehmensprofil optimieren</Link>.
        </p>
      </section>

      <section id="saison" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-primary" />
          Wie plane ich den Saisonkalender?
        </h2>
        <AnswerBlock question="Wann müssen saisonale Seiten online sein?">
          Spätestens acht Wochen vor der Nachfragespitze, bei Hochzeiten deutlich früher. Kommunion und Konfirmation werden ab Januar recherchiert, Hochzeiten ab Herbst des Vorjahres, Weihnachtsgebäck ab Oktober. Wer erst zur Saison veröffentlicht, verpasst die gesamte Recherchephase.
        </AnswerBlock>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Hauptkategorie Konditorei prüfen, Öffnungszeiten und Fotos aktualisieren, Anfrageformular einrichten.</li>
          <li><strong>Tag 31–60:</strong> Anlassseiten für Hochzeit, Geburtstag und Motivtorte schreiben, Preisspannen und Vorlaufzeiten ergänzen.</li>
          <li><strong>Tag 61–90:</strong> Bewertungen nach jeder Abholung erfragen, Saisonseiten vorbereiten, Anfragequellen auswerten.</li>
        </ol>
        <p className="mt-4">
          Weiterführend: <Link to="/blog/local-seo-baeckerei" className="text-primary underline">Local SEO für Bäckereien</Link> und{" "}
          <Link to="/blog/local-seo-cafe-coffeeshop" className="text-primary underline">Local SEO für Cafés</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoBaeckereiKonditorei;
