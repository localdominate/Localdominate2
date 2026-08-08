import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { AlertTriangle, Search, ListChecks, ShieldCheck, BarChart3, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "ai-falschangaben-korrigieren-2026";

const AiFalschangabenKorrigieren2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "problem", title: "Warum AI-Assistenten Falsches behaupten" },
    { id: "typen", title: "Die 5 häufigsten Fehlertypen" },
    { id: "ursache", title: "Ursache lokalisieren" },
    { id: "korrektur", title: "6-Schritte-Korrekturprozess" },
    { id: "primaerquellen", title: "Primärquellen absichern" },
    { id: "dauer", title: "Wie lange Korrekturen brauchen" },
    { id: "praevention", title: "Prävention" },
  ];

  const faqItems = [
    {
      question: "Warum nennen ChatGPT oder Gemini falsche Angaben zu meinem Unternehmen?",
      answer:
        "Meist nicht aus einer Halluzination heraus, sondern weil widersprüchliche Quellen existieren: veraltete Branchenverzeichnisse, doppelte Standortprofile, alte Öffnungszeiten auf einer Unterseite oder Angaben aus einem früheren Firmennamen. Assistenten wählen dann eine Variante — häufig die, die mehrfach im Netz auftaucht, nicht die aktuelle.",
    },
    {
      question: "Wie finde ich heraus, woher eine falsche Angabe stammt?",
      answer:
        "Frage den Assistenten direkt nach der Quelle und lass dir die verwendeten URLs nennen. Prüfe anschließend die eigene Webseite, das Standortprofil, die zehn wichtigsten Verzeichnisse und alte Unterseiten auf dieselbe Falschangabe. In den meisten Fällen findet sich der Ursprung in einem dieser vier Bereiche.",
    },
    {
      question: "Kann ich eine falsche Angabe direkt beim Anbieter melden?",
      answer:
        "Teilweise. Mehrere Assistenten bieten Feedback-Funktionen an einzelnen Antworten an, und Standortprofile lassen Korrekturen zu. Verlässlicher ist jedoch die Korrektur an der Quelle: Wenn die widersprüchliche Angabe im Netz verschwindet, verschwindet sie mittelfristig auch aus den Antworten.",
    },
    {
      question: "Wie lange dauert es, bis eine Korrektur in AI-Antworten ankommt?",
      answer:
        "Bei Assistenten mit Live-Retrieval oft wenige Tage bis drei Wochen, sobald die Primärquellen konsistent sind. Bei modellinternem Wissen ohne Websuche kann es deutlich länger dauern, weil die Angabe erst mit einem neuen Trainingsstand ersetzt wird. Deshalb zählt vor allem die Konsistenz der öffentlichen Quellen.",
    },
    {
      question: "Was tun, wenn ein Assistent eine geschlossene Filiale weiterhin nennt?",
      answer:
        "Das Standortprofil offiziell als dauerhaft geschlossen kennzeichnen statt es zu löschen, die zugehörige Unterseite mit einem klaren Hinweis versehen oder korrekt weiterleiten, Einträge in Verzeichnissen aktualisieren und die Adresse aus Impressum und Kontaktseite entfernen. Ein gelöschtes Profil hinterlässt Datenreste, ein geschlossenes sendet ein eindeutiges Signal.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Eine falsche Telefonnummer in einer ChatGPT-Antwort kostet mehr Aufträge als eine schlechte Ranking-Position — sie erreicht den Kunden im Moment der Entscheidung. Dieser Leitfaden zeigt, wie sich fehlerhafte Angaben in AI-Antworten systematisch aufspüren, an der Quelle korrigieren und dauerhaft verhindern lassen.
      </p>

      <KeyTakeawaysBox
        items={[
          "Falsche AI-Angaben stammen meist aus widersprüchlichen Quellen, nicht aus Erfindung",
          "Korrigiert wird immer an der Primärquelle, nicht in der Antwort selbst",
          "Vier Prüfbereiche: eigene Seite, Standortprofil, Verzeichnisse, alte Unterseiten",
          "Geschlossene Standorte kennzeichnen statt löschen",
          "Bei Live-Retrieval wirken Korrekturen typischerweise in wenigen Wochen",
        ]}
      />

      <section id="problem" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Warum behaupten Assistenten Falsches über lokale Unternehmen?
        </h2>
        <AnswerBlock question="Woher stammen falsche Angaben in AI-Antworten?">
          In den meisten Fällen aus dem offenen Netz: veraltete Verzeichniseinträge, doppelte oder verwaiste Standortprofile, alte Öffnungszeiten auf einer Unterseite, frühere Firmennamen oder Adressen. Der Assistent erfindet die Angabe nicht, er wählt zwischen widersprüchlichen Quellen — und häufig gewinnt die Variante, die am häufigsten wiederholt wird.
        </AnswerBlock>
      </section>

      <section id="typen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Welche 5 Fehlertypen treten am häufigsten auf?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Fehlertyp</th>
                <th className="border p-3 text-left">Typische Ursache</th>
                <th className="border p-3 text-left">Erste Maßnahme</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Falsche Rufnummer</td><td className="border p-3">Alte Nummer in Verzeichnissen</td><td className="border p-3">NAP-Abgleich über alle Einträge</td></tr>
              <tr><td className="border p-3 font-semibold">Veraltete Öffnungszeiten</td><td className="border p-3">Unterseite nicht gepflegt</td><td className="border p-3">Zeiten zentral pflegen</td></tr>
              <tr><td className="border p-3 font-semibold">Geschlossene Filiale</td><td className="border p-3">Profil gelöscht statt geschlossen</td><td className="border p-3">Status korrekt setzen</td></tr>
              <tr><td className="border p-3 font-semibold">Falsche Leistungen</td><td className="border p-3">Alte Leistungsseite online</td><td className="border p-3">Seite aktualisieren oder weiterleiten</td></tr>
              <tr><td className="border p-3 font-semibold">Verwechslung</td><td className="border p-3">Ähnlicher Firmenname am Ort</td><td className="border p-3">Entität eindeutig beschreiben</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ursache" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Workflow className="w-7 h-7 text-primary" />
          Wie lokalisiere ich die Ursache?
        </h2>
        <AnswerBlock question="Welche Quellen muss ich prüfen, wenn eine AI-Antwort falsch ist?">
          Vier Bereiche in dieser Reihenfolge: die eigene Webseite inklusive alter Unterseiten und strukturierter Daten, das Standortprofil samt Duplikaten, die wichtigsten Branchenverzeichnisse der Region und Portale mit Bewertungen. Lass dir zusätzlich vom Assistenten die verwendeten Quell-URLs nennen — häufig zeigt schon dieser Hinweis den Ursprung.
        </AnswerBlock>
      </section>

      <section id="korrektur" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          6-Schritte-Korrekturprozess
        </h2>
        <ol className="list-decimal pl-6 space-y-4 mt-2">
          <li><strong>Fehler dokumentieren:</strong> Prompt, Plattform, Datum und die falsche Aussage festhalten.</li>
          <li><strong>Quellen abfragen:</strong> Den Assistenten nach den verwendeten URLs fragen.</li>
          <li><strong>Primärquelle korrigieren:</strong> Angabe auf der eigenen Seite und im Standortprofil richtigstellen.</li>
          <li><strong>Sekundärquellen bereinigen:</strong> Verzeichnisse und Portale aktualisieren, Duplikate zusammenführen.</li>
          <li><strong>Eindeutigkeit erhöhen:</strong> Strukturierte Daten und Kontaktangaben konsistent halten.</li>
          <li><strong>Nachmessen:</strong> Nach zwei, vier und acht Wochen denselben Prompt erneut stellen.</li>
        </ol>
        <p className="mt-6">
          Führe die Nachmessung im Rahmen des <Link to="/blog/ai-zitat-monitoring-local-seo-2026" className="text-primary underline">AI-Zitat-Monitorings</Link> durch und prüfe die Datenbasis mit den <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline">NAP-Konsistenz-Regeln</Link>.
        </p>
      </section>

      <section id="primaerquellen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Wie sichere ich die Primärquellen ab?
        </h2>
        <AnswerBlock question="Was macht die eigene Webseite zur verlässlichsten Quelle?">
          Eindeutigkeit und Widerspruchsfreiheit: Name, Adresse und Rufnummer stehen identisch im Impressum, auf der Kontaktseite, in den strukturierten Daten und im Standortprofil. Öffnungszeiten werden an einer Stelle gepflegt und überall referenziert. Alte Standort- oder Leistungsseiten werden entfernt oder weitergeleitet, statt unverlinkt online zu bleiben.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Identische Schreibweise von Name, Adresse und Rufnummer an allen Stellen.</li>
          <li>Strukturierte Daten decken sich mit dem sichtbaren Text.</li>
          <li>Veraltete Unterseiten entfernen oder korrekt weiterleiten.</li>
          <li>Standortprofil-Duplikate zusammenführen.</li>
        </ul>
      </section>

      <section id="dauer" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie lange dauert es, bis die Korrektur wirkt?
        </h2>
        <AnswerBlock question="Ab wann zeigen Assistenten die korrigierten Angaben?">
          Bei Antworten mit Live-Websuche typischerweise nach wenigen Tagen bis drei Wochen, sobald alle öffentlichen Quellen übereinstimmen. Greift ein Assistent auf modellinternes Wissen ohne Websuche zurück, bleibt die alte Angabe länger bestehen. Genau deshalb ist Quellenkonsistenz die einzige verlässliche Stellschraube — nicht das Melden einzelner Antworten.
        </AnswerBlock>
      </section>

      <section id="praevention" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Wie beuge ich neuen Falschangaben vor?
        </h2>
        <ul className="list-disc pl-6 space-y-3 mt-2">
          <li><strong>Änderungsroutine:</strong> Bei jeder Änderung von Nummer, Adresse oder Zeiten eine feste Update-Liste abarbeiten.</li>
          <li><strong>Quartalsprüfung:</strong> Verzeichnisse und Standortprofile viermal jährlich abgleichen.</li>
          <li><strong>Duplikate vermeiden:</strong> Kein zweites Profil für dieselbe Adresse anlegen.</li>
          <li><strong>Klare Entität:</strong> Firmenname und Fachgebiet auf der Startseite eindeutig benennen.</li>
          <li><strong>Monitoring:</strong> Faktentreue als feste Kennzahl im monatlichen Bericht führen.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Falschangaben in AI-Antworten bereinigen lassen</h3>
        <p className="mb-4">
          Wir prüfen Webseite, Standortprofile und Verzeichnisse auf widersprüchliche Angaben, korrigieren die Quellen und messen die Wirkung über acht Wochen nach.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Datenbereinigung anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default AiFalschangabenKorrigieren2026;
