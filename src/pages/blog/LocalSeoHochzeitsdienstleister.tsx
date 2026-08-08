import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Heart, Search, MapPin, ListChecks, Calendar, Star, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "local-seo-hochzeitsdienstleister";

const LocalSeoHochzeitsdienstleister = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "suchverhalten", title: "Der lange Buchungszyklus" },
    { id: "gewerkeseiten", title: "Seiten je Gewerk" },
    { id: "locations", title: "Location-Seiten" },
    { id: "preise", title: "Preise und Pakete" },
    { id: "saison", title: "Saison und Vorlauf" },
    { id: "vertrauen", title: "Referenzen und Bewertungen" },
    { id: "plan", title: "90-Tage-Plan" },
  ];

  const faqItems = [
    {
      question: "Wie lange dauert der Buchungszyklus bei Hochzeiten?",
      answer:
        "Zwischen sechs und achtzehn Monaten. Location und Fotograf werden zuerst gebucht, danach Catering, Floristik, Musik und Trauredner. Wer erst wenige Wochen vor dem Termin sichtbar wird, erreicht ausschließlich kurzfristige Restanfragen und verpasst das eigentliche Buchungsfenster vollständig.",
    },
    {
      question: "Welche Seiten braucht ein Hochzeitsdienstleister?",
      answer:
        "Eine Seite je Gewerk und Leistungsumfang, Seiten für die wichtigsten Locations im Einzugsgebiet, eine Preis- und Paketseite sowie eine echte Referenzgalerie. Eine einzelne Startseite mit Bildergalerie beantwortet weder Verfügbarkeit noch Preisrahmen und verliert gegen spezialisierte Anbieter.",
    },
    {
      question: "Warum sind Location-Seiten so wirksam?",
      answer:
        "Weil Brautpaare nach der bereits gebuchten Location suchen, etwa nach Hochzeits-DJ für ein bestimmtes Schloss oder Gut. Eine Seite je Location mit echten Bildern von dort, Angaben zu Aufbau, Technik und Ablauf trifft genau diese Suchanfrage und hat kaum Wettbewerb.",
    },
    {
      question: "Sollten Hochzeitsdienstleister Preise nennen?",
      answer:
        "Ja, mindestens als Startpreis oder Paketspanne. Brautpaare planen mit festem Budget und sortieren Anbieter ohne Preisangabe früh aus. Ein Ab-Preis mit klar beschriebenem Leistungsumfang reduziert unpassende Anfragen und erhöht die Qualität der verbleibenden Gespräche deutlich.",
    },
    {
      question: "Welche Bewertungen helfen bei Hochzeiten am meisten?",
      answer:
        "Solche, die Ablauf, Zuverlässigkeit und Umgang mit Zwischenfällen konkret beschreiben, idealerweise mit Nennung von Jahreszeit und Gästezahl. Der beste Zeitpunkt für die Bitte liegt ein bis zwei Wochen nach der Hochzeit, gemeinsam mit der Übergabe von Bildern oder Unterlagen.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Hochzeitsdienstleister verkaufen einen Termin, der nur einmal stattfindet — und werden ein Jahr im Voraus ausgewählt. Sichtbarkeit muss deshalb dann bestehen, wenn geplant wird, nicht wenn gefeiert wird.
      </p>

      <KeyTakeawaysBox
        items={[
          "Buchungsfenster liegt sechs bis achtzehn Monate vor dem Termin",
          "Je Gewerk und Leistungsumfang eine eigene Seite",
          "Location-Seiten treffen die Suche nach bereits gebuchten Orten",
          "Startpreise nennen statt Anfragen ohne Budgetpassung sammeln",
          "Bewertungen ein bis zwei Wochen nach der Hochzeit erfragen",
        ]}
      />

      <section id="suchverhalten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Wie läuft der Buchungszyklus einer Hochzeit ab?
        </h2>
        <AnswerBlock question="Wann suchen Brautpaare nach Dienstleistern?">
          Zwischen sechs und achtzehn Monaten vor dem Termin, in klarer Reihenfolge: zuerst Location und Fotograf, danach Catering, Floristik, Musik und Trauredner. Die Suchspitze liegt im Winter für Sommerhochzeiten. Wer erst kurzfristig sichtbar ist, erreicht nur Restanfragen.
        </AnswerBlock>
      </section>

      <section id="gewerkeseiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche Seiten braucht welches Gewerk?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Gewerk</th>
                <th className="border p-3 text-left">Kernfrage der Brautpaare</th>
                <th className="border p-3 text-left">Pflichtinhalt</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Fotograf</td><td className="border p-3">Stil und Umfang</td><td className="border p-3">Ganze Hochzeiten statt Einzelbilder, Lieferzeit, Pakete</td></tr>
              <tr><td className="border p-3 font-semibold">DJ und Band</td><td className="border p-3">Technik und Ablauf</td><td className="border p-3">Repertoire, Technikumfang, Aufbauzeit</td></tr>
              <tr><td className="border p-3 font-semibold">Floristik</td><td className="border p-3">Stil und Saison</td><td className="border p-3">Saisonblumen, Preisrahmen, Lieferung</td></tr>
              <tr><td className="border p-3 font-semibold">Catering</td><td className="border p-3">Menü und Personal</td><td className="border p-3">Menüs, Allergene, Personalschlüssel</td></tr>
              <tr><td className="border p-3 font-semibold">Trauredner</td><td className="border p-3">Sprache und Ablauf</td><td className="border p-3">Vorgespräch, Dauer, Sprachen</td></tr>
              <tr><td className="border p-3 font-semibold">Hochzeitsplanung</td><td className="border p-3">Umfang und Kosten</td><td className="border p-3">Teil- vs. Vollplanung, Honorarmodell</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="locations" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Wie baue ich Location-Seiten auf?
        </h2>
        <AnswerBlock question="Was gehört auf eine Location-Seite?">
          Der Name der Location, eigene Bilder von genau dort, Erfahrungen mit Ablauf, Licht, Technik und Aufbauzeiten sowie Hinweise zu Anfahrt und Parken. Nur Locations aufnehmen, an denen tatsächlich gearbeitet wurde — erfundene Referenzen fallen im Erstgespräch sofort auf.
        </AnswerBlock>
        <p className="mt-4">
          Ergänzend: <Link to="/blog/local-content-marketing" className="text-primary underline">lokales Content-Marketing</Link>.
        </p>
      </section>

      <section id="preise" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie kommuniziere ich Preise und Pakete?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Startpreis oder Paketspanne offen nennen, mit klarem Leistungsumfang.</li>
          <li>Anfahrt, Überstunden und Zusatzleistungen einzeln ausweisen.</li>
          <li>Anzahlung, Stornostaffel und Ausfallregelung transparent erklären.</li>
          <li>Beispielkalkulation für eine typische Hochzeit ergänzen.</li>
        </ul>
      </section>

      <section id="saison" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-primary" />
          Wie plane ich Saison und Verfügbarkeit?
        </h2>
        <AnswerBlock question="Wie zeige ich freie Termine sinnvoll?">
          Mit einer schlichten Verfügbarkeitsübersicht je Saison statt eines vollständigen Kalenders. Freie Wochenenden der kommenden zwei Saisons, klar gekennzeichnete Restplätze und ein Hinweis auf typische Vorlaufzeiten reichen aus, um Anfragen zu qualifizieren und Rückfragen zu vermeiden.
        </AnswerBlock>
      </section>

      <section id="vertrauen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-7 h-7 text-primary" />
          Welche Vertrauenssignale wirken?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Vollständige Hochzeiten als Referenz zeigen, nicht nur Höhepunkte.</li>
          <li>Bewertungen ein bis zwei Wochen nach dem Termin erfragen.</li>
          <li>Kooperationspartner gegenseitig verlinken — Fotograf, DJ, Floristik.</li>
          <li>Einverständnis der Paare für Bilder schriftlich einholen.</li>
        </ol>
        <p className="mt-4">
          Antwortmuster: <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline">Antwortvorlagen für Bewertungen</Link>.
        </p>
      </section>

      <section id="plan" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie sieht ein 90-Tage-Plan aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Tag 1–30:</strong> Unternehmensprofil und Kategorie prüfen, Referenzen sortieren, Startpreise festlegen.</li>
          <li><strong>Tag 31–60:</strong> Seiten je Gewerk und die fünf wichtigsten Location-Seiten veröffentlichen.</li>
          <li><strong>Tag 61–90:</strong> Bewertungsroutine einführen, Partnerverlinkungen aufbauen, Anfragen nach Quelle auswerten.</li>
        </ol>
        <p className="mt-4">
          Weiterführend: <Link to="/blog/local-seo-fotograf" className="text-primary underline">Local SEO für Fotografen</Link> und{" "}
          <Link to="/blog/local-seo-baeckerei-konditorei" className="text-primary underline">Local SEO für Konditoreien</Link>.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoHochzeitsdienstleister;
