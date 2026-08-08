import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, ListChecks, MessageSquare, Images, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "unternehmensprofil-ki-funktionen-2026";

const GbpKiFunktionen2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "grundlage", title: "Was KI aus dem Profil zieht" },
    { id: "felder", title: "Die 7 entscheidenden Profilfelder" },
    { id: "fragen", title: "Fragen & Antworten als Trainingsmaterial" },
    { id: "bilder", title: "Bilder und Beschreibungen" },
    { id: "bewertungen", title: "Bewertungen als Belegquelle" },
    { id: "pflege", title: "Pflegeroutine im Monat" },
    { id: "messung", title: "Wirkung messen" },
  ];

  const faqItems = [
    {
      question: "Welche Profilangaben nutzen KI-gestützte Suchergebnisse am stärksten?",
      answer:
        "Vor allem die Hauptkategorie, die Leistungsliste, die Attribute, die Öffnungszeiten inklusive Sonderzeiten und die Profilbeschreibung. Diese Felder sind strukturiert und eindeutig, deshalb werden sie in zusammenfassenden Antworten deutlich häufiger übernommen als Fließtext auf der Webseite.",
    },
    {
      question: "Wie schreibe ich eine Profilbeschreibung, die KI-Antworten aufgreifen?",
      answer:
        "Im ersten Satz eindeutig benennen, was das Unternehmen ist, für wen es arbeitet und wo. Danach zwei bis drei überprüfbare Besonderheiten wie Fachgebiete, Sprachen oder Terminmodell. Werbefloskeln vermeiden, weil sie sich nicht als Fakt zitieren lassen und in Zusammenfassungen ausgelassen werden.",
    },
    {
      question: "Bringen eigene Fragen und Antworten im Profil etwas für AI-Suche?",
      answer:
        "Ja. Selbst eingestellte Fragen mit sachlichen Antworten liefern genau das Frage-Antwort-Format, das Assistenten bevorzugt übernehmen. Zehn bis fünfzehn echte Kundenfragen mit jeweils zwei bis vier Sätzen decken die häufigsten Anlässe ab: Parken, Barrierefreiheit, Kosten, Termine, Zahlungsarten.",
    },
    {
      question: "Wie oft sollte ein Standortprofil gepflegt werden?",
      answer:
        "Einmal im Monat als feste Routine plus anlassbezogen bei Änderungen. Monatlich: neue Bilder, Beiträge, Antworten auf Bewertungen, Prüfung der Leistungen. Anlassbezogen: Feiertage, geänderte Zeiten, neue Leistungen oder Personalwechsel mit Auswirkung auf die Erreichbarkeit.",
    },
    {
      question: "Wie erkenne ich, ob die Profilpflege in AI-Antworten wirkt?",
      answer:
        "Über einen festen Prompt-Satz, der monatlich in mehreren Assistenten gestellt wird: Nennung des Unternehmens, Richtigkeit der Angaben, verwendete Quelle und Position innerhalb der Empfehlung. Ergänzend die Profilkennzahlen zu Anrufen, Routenanfragen und Website-Klicks als Wirkungsindikator.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        KI-gestützte Suchergebnisse fassen lokale Anbieter inzwischen zusammen, statt sie nur aufzulisten. Die Datengrundlage dafür ist überwiegend das Standortprofil — strukturiert, aktuell und maschinell eindeutig lesbar. Dieser Leitfaden zeigt, welche Felder in Zusammenfassungen landen und wie sie befüllt sein müssen.
      </p>

      <KeyTakeawaysBox
        items={[
          "Strukturierte Profilfelder werden häufiger zitiert als Fließtext auf der Website",
          "Hauptkategorie, Leistungen und Attribute steuern, in welchen Anfragen das Profil erscheint",
          "Eigene Fragen und Antworten liefern zitierfähiges Q&A-Material",
          "Bewertungstexte dienen als Beleg für genannte Stärken",
          "Monatliche Pflegeroutine schlägt seltene große Überarbeitungen",
        ]}
      />

      <section id="grundlage" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-primary" />
          Was ziehen KI-Zusammenfassungen aus dem Standortprofil?
        </h2>
        <AnswerBlock question="Welche Rolle spielt das Unternehmensprofil für AI-Antworten?">
          Es ist die verlässlichste strukturierte Quelle zu einem lokalen Anbieter: Kategorie, Leistungen, Attribute, Zeiten, Adresse und Bewertungen liegen in klar getrennten Feldern vor. Assistenten müssen diese Angaben nicht aus Fließtext interpretieren, deshalb erscheinen sie überproportional häufig in zusammenfassenden Antworten und Empfehlungslisten.
        </AnswerBlock>
      </section>

      <section id="felder" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche 7 Profilfelder entscheiden?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Feld</th>
                <th className="border p-3 text-left">Wirkung</th>
                <th className="border p-3 text-left">Regel</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Hauptkategorie</td><td className="border p-3">Grundzuordnung des Angebots</td><td className="border p-3">Eine präzise statt mehrerer breiter</td></tr>
              <tr><td className="border p-3 font-semibold">Nebenkategorien</td><td className="border p-3">Zusätzliche Anlässe</td><td className="border p-3">Nur tatsächlich erbrachte Leistungen</td></tr>
              <tr><td className="border p-3 font-semibold">Leistungen</td><td className="border p-3">Konkrete Anfragen</td><td className="border p-3">Kundensprache, kein Fachjargon</td></tr>
              <tr><td className="border p-3 font-semibold">Attribute</td><td className="border p-3">Filterbare Merkmale</td><td className="border p-3">Vollständig und ehrlich setzen</td></tr>
              <tr><td className="border p-3 font-semibold">Öffnungszeiten</td><td className="border p-3">Verfügbarkeitsangabe</td><td className="border p-3">Sonderzeiten vorab pflegen</td></tr>
              <tr><td className="border p-3 font-semibold">Beschreibung</td><td className="border p-3">Entitätsklärung</td><td className="border p-3">Erster Satz nennt Was, Für wen, Wo</td></tr>
              <tr><td className="border p-3 font-semibold">Fragen & Antworten</td><td className="border p-3">Zitierfähiges Q&amp;A</td><td className="border p-3">10–15 echte Kundenfragen</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="fragen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MessageSquare className="w-7 h-7 text-primary" />
          Warum sind eigene Fragen und Antworten so wirksam?
        </h2>
        <AnswerBlock question="Welchen Vorteil hat der Q&A-Bereich im Profil?">
          Er liefert Inhalte bereits im Zielformat: eine klare Frage, darunter eine kurze sachliche Antwort. Genau diese Struktur übernehmen Assistenten am liebsten, weil sie ohne Umformulierung verwendbar ist. Zehn bis fünfzehn echte Kundenfragen zu Parken, Kosten, Terminen, Barrierefreiheit und Zahlungsarten decken den Großteil der Anlässe ab.
        </AnswerBlock>
        <p className="mt-4">
          Dieselbe Logik gilt für Texte auf der Webseite — die Vorgaben dazu stehen im <Link to="/blog/geo-content-briefing-vorlage-2026" className="text-primary underline">GEO-Content-Briefing</Link>.
        </p>
      </section>

      <section id="bilder" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Images className="w-7 h-7 text-primary" />
          Wie wirken Bilder und Beschreibungen?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Aktuelle Außenansicht erleichtert das Wiederfinden vor Ort.</li>
          <li>Innenaufnahmen belegen Attribute wie Barrierefreiheit oder Wartebereich.</li>
          <li>Team- und Arbeitsbilder stützen Fachlichkeitsaussagen.</li>
          <li>Dateinamen und Bildkontext beschreiben, was tatsächlich zu sehen ist.</li>
        </ul>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Welche Rolle spielen Bewertungen als Belegquelle?
        </h2>
        <AnswerBlock question="Warum zitieren Assistenten Bewertungstexte?">
          Weil sie Aussagen belegen, die ein Unternehmen über sich selbst nicht glaubwürdig machen kann. Wiederkehrende Formulierungen zu Pünktlichkeit, Beratung oder Sauberkeit werden in Zusammenfassungen als Stärken übernommen. Wichtig sind Regelmäßigkeit neuer Bewertungen und sachliche Antworten des Betriebs, nicht allein der Durchschnittswert.
        </AnswerBlock>
      </section>

      <section id="pflege" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie sieht die monatliche Pflegeroutine aus?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li>Leistungen und Attribute gegen das tatsächliche Angebot prüfen.</li>
          <li>Zwei bis vier neue Bilder ergänzen.</li>
          <li>Neue Bewertungen sachlich beantworten.</li>
          <li>Ein bis zwei Fragen im Q&amp;A-Bereich ergänzen.</li>
          <li>Sonderöffnungszeiten der nächsten sechs Wochen eintragen.</li>
          <li>Angaben gegen Webseite und Verzeichnisse abgleichen.</li>
        </ol>
        <p className="mt-6">
          Weichen Angaben voneinander ab, hilft der Ablauf aus <Link to="/blog/ai-falschangaben-korrigieren-2026" className="text-primary underline">Falschangaben in AI-Antworten korrigieren</Link>.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich die Wirkung?
        </h2>
        <AnswerBlock question="Woran erkenne ich, dass die Profilpflege in AI-Suche wirkt?">
          An zwei Datenreihen: einem festen monatlichen Prompt-Satz, der Nennung, Richtigkeit und Quelle in mehreren Assistenten protokolliert, und den Profilkennzahlen zu Anrufen, Routenanfragen und Website-Klicks. Steigt die Nennung bei gleichbleibenden Kennzahlen, wirkt die Sichtbarkeit noch nicht auf die Nachfrage — dann fehlt meist ein klarer Handlungsweg.
        </AnswerBlock>
        <p className="mt-4">
          Den Messaufbau im Detail beschreibt das <Link to="/blog/ai-zitat-monitoring-local-seo-2026" className="text-primary underline">AI-Zitat-Monitoring 2026</Link>.
        </p>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Standortprofil für AI-Suche aufbereiten lassen</h3>
        <p className="mb-4">
          Wir strukturieren Kategorien, Leistungen, Attribute und Q&amp;A so, dass Assistenten die Angaben direkt übernehmen können — inklusive monatlicher Pflegeroutine.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Profil-Optimierung anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default GbpKiFunktionen2026;
