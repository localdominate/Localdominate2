import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, Search, ListChecks, AlertTriangle, Table2, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "ai-zitat-monitoring-local-seo-2026";

const AiZitatMonitoring2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum", title: "Warum AI-Zitate messen?" },
    { id: "kennzahlen", title: "Die 5 Kennzahlen" },
    { id: "prompt-set", title: "Prompt-Set aufbauen" },
    { id: "tracking", title: "Tracking-Tabelle" },
    { id: "routine", title: "Monatliche Routine" },
    { id: "interpretation", title: "Ergebnisse interpretieren" },
    { id: "fehler", title: "Typische Fehler" },
  ];

  const faqItems = [
    {
      question: "Was ist AI-Zitat-Monitoring?",
      answer:
        "AI-Zitat-Monitoring ist die systematische Messung, wie oft und mit welchen URLs ein Unternehmen in Antworten von ChatGPT, Perplexity, Gemini und Copilot genannt wird. Statt Rankings zählt hier die Erwähnungsrate: Wird die Marke bei typischen Kundenfragen genannt, wird korrekt verlinkt und stimmen die genannten Fakten wie Adresse, Leistungen und Öffnungszeiten.",
    },
    {
      question: "Welche Kennzahlen sind beim AI-Monitoring wichtig?",
      answer:
        "Fünf Kennzahlen reichen: Erwähnungsrate (Anteil der Prompts mit Nennung), Zitatposition (erste, mittlere oder letzte Nennung), Link-Genauigkeit (verlinkt der Assistent die passende Unterseite), Faktentreue (stimmen Adresse, Leistungen, Preise) und Wettbewerbsanteil (wie oft erscheinen Mitbewerber im selben Prompt).",
    },
    {
      question: "Wie viele Prompts braucht ein aussagekräftiges Monitoring?",
      answer:
        "Für ein lokales Unternehmen genügen 20 bis 30 Prompts, verteilt auf drei Gruppen: Kategorie-Fragen ohne Marke, Standort-Fragen mit Stadtbezug und Vergleichs- oder Auswahlfragen. Dieses Set einmal pro Monat auf denselben Plattformen durchzugehen liefert einen stabilen Trend ohne großen Aufwand.",
    },
    {
      question: "Wie oft sollte man AI-Zitate prüfen?",
      answer:
        "Monatlich. Antworten von Assistenten schwanken kurzfristig stark, deshalb sind Tagesmessungen wenig aussagekräftig. Ein fester Messtag pro Monat, gleiche Prompts, gleiche Reihenfolge und Neustart der Sitzung ohne vorherigen Chatverlauf erzeugen vergleichbare Werte.",
    },
    {
      question: "Was tun, wenn ein Assistent falsche Informationen nennt?",
      answer:
        "Zuerst die Quelle identifizieren: meist ein veraltetes Branchenverzeichnis, ein altes Standortprofil oder eine widersprüchliche Angabe auf der eigenen Seite. Danach die Primärquellen korrigieren, NAP-Daten vereinheitlichen und die betroffene Seite mit eindeutigen, strukturierten Angaben versehen. Korrekturen brauchen typischerweise mehrere Wochen, bis sie in Antworten ankommen.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Klassische Rankings verraten 2026 immer weniger darüber, ob ein lokales Unternehmen gefunden wird. Entscheidend ist, ob ChatGPT, Perplexity, Gemini und Copilot es bei echten Kundenfragen nennen. Dieser Leitfaden zeigt ein schlankes Monitoring-System mit fünf Kennzahlen, einem festen Prompt-Set und einer monatlichen Routine, die in unter 60 Minuten läuft.
      </p>

      <KeyTakeawaysBox
        items={[
          "Erwähnungsrate ersetzt das Ranking als Leitkennzahl in AI-Suche",
          "20–30 feste Prompts in drei Gruppen genügen für stabile Trends",
          "Immer in einer neuen Sitzung ohne Chatverlauf messen",
          "Neben der Nennung zählen Link-Genauigkeit und Faktentreue",
          "Monatlicher Rhythmus, gleicher Messtag, gleiche Reihenfolge",
        ]}
      />

      <section id="warum" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Warum reicht Ranking-Tracking nicht mehr?
        </h2>
        <AnswerBlock question="Warum sollten lokale Unternehmen AI-Zitate statt nur Rankings messen?">
          Weil ein wachsender Teil der Kundenfragen in einem Assistenten endet, der genau eine Empfehlung ausspricht. Dort gibt es keine zehn blauen Links, sondern zwei bis vier genannte Anbieter. Wer nicht genannt wird, ist unsichtbar — unabhängig davon, ob die Seite in der klassischen Suche auf Position drei steht. Zitat-Monitoring macht diese neue Realität messbar.
        </AnswerBlock>
      </section>

      <section id="kennzahlen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Welche 5 Kennzahlen zählen?
        </h2>
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kennzahl</th>
                <th className="border p-3 text-left">Definition</th>
                <th className="border p-3 text-left">Zielwert</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Erwähnungsrate</td><td className="border p-3">Anteil der Prompts mit Nennung</td><td className="border p-3">über 40 %</td></tr>
              <tr><td className="border p-3 font-semibold">Zitatposition</td><td className="border p-3">Reihenfolge in der Antwort</td><td className="border p-3">Platz 1–2</td></tr>
              <tr><td className="border p-3 font-semibold">Link-Genauigkeit</td><td className="border p-3">Passende Unterseite statt Startseite</td><td className="border p-3">über 60 %</td></tr>
              <tr><td className="border p-3 font-semibold">Faktentreue</td><td className="border p-3">Korrekte Adresse, Leistungen, Zeiten</td><td className="border p-3">100 %</td></tr>
              <tr><td className="border p-3 font-semibold">Wettbewerbsanteil</td><td className="border p-3">Eigene Nennungen vs. Mitbewerber</td><td className="border p-3">steigend</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="prompt-set" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Wie baue ich ein belastbares Prompt-Set?
        </h2>
        <AnswerBlock question="Welche Prompts gehören in ein lokales AI-Monitoring-Set?">
          Drei Gruppen zu je etwa zehn Fragen: Kategorie-Prompts ohne Markenname („guter Zahnarzt für Angstpatienten in Köln“), Standort-Prompts mit Stadtteil oder Region, und Auswahl-Prompts, die vergleichen („welche Praxis in Köln bietet Termine am Samstag?“). Markenprompts dienen nur der Faktenkontrolle, nicht der Sichtbarkeitsmessung.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Kategorie:</strong> Leistung + Stadt, ohne Marke.</li>
          <li><strong>Standort:</strong> Stadtteil, Nachbarort, Region.</li>
          <li><strong>Auswahl:</strong> Vergleich, Verfügbarkeit, Preisrahmen.</li>
          <li><strong>Marke:</strong> Kontrolle von Adresse, Zeiten, Leistungen.</li>
        </ul>
      </section>

      <section id="tracking" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Table2 className="w-7 h-7 text-primary" />
          Tracking-Tabelle zum Übernehmen
        </h2>
        <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm mt-2"><code>{`Monat | Plattform   | Prompt-Gruppe | Prompt            | Genannt | Position | Verlinkte URL        | Fakten ok | Mitbewerber
2026-08 | ChatGPT   | Kategorie     | Zahnarzt Köln ...  | ja      | 2        | /leistungen/vorsorge | ja        | 3
2026-08 | Perplexity| Standort      | Zahnarzt Ehrenfeld | nein    | -        | -                    | -         | 4
2026-08 | Gemini    | Auswahl       | Samstagstermin ... | ja      | 1        | /termin              | nein      | 2`}</code></pre>
        <p className="mt-4">
          Die Spaltenlogik lässt sich direkt in eine Tabellenkalkulation übertragen. Aggregiere pro Monat die fünf Kennzahlen und führe sie im <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> zusammen.
        </p>
      </section>

      <section id="routine" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Repeat className="w-7 h-7 text-primary" />
          Die monatliche Routine in 6 Schritten
        </h2>
        <ol className="list-decimal pl-6 space-y-4 mt-2">
          <li><strong>Messtag festlegen:</strong> Immer derselbe Werktag im Monat.</li>
          <li><strong>Sitzung zurücksetzen:</strong> Neue Chats ohne Verlauf und ohne Personalisierung.</li>
          <li><strong>Prompt-Set abarbeiten:</strong> Gleiche Reihenfolge auf allen Plattformen.</li>
          <li><strong>Antworten dokumentieren:</strong> Nennung, Position, URL, Faktenfehler notieren.</li>
          <li><strong>Kennzahlen berechnen:</strong> Fünf Werte je Plattform aggregieren.</li>
          <li><strong>Maßnahmen ableiten:</strong> Schwächste Kennzahl bestimmt die Aufgabe des Monats.</li>
        </ol>
      </section>

      <section id="interpretation" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie interpretiere ich die Ergebnisse?
        </h2>
        <AnswerBlock question="Welche Maßnahme folgt aus welchem Messergebnis?">
          Niedrige Erwähnungsrate deutet auf fehlende Quellen und Erwähnungen Dritter hin — hier helfen Verzeichnisse, Presse und Fachportale. Schwache Link-Genauigkeit ist ein Struktur- und Schema-Problem: klare Service-Seiten, saubere Überschriften und eine Inhaltskarte per llms.txt. Faktenfehler stammen fast immer aus veralteten externen Profilen. Ein schwacher Wettbewerbsanteil zeigt, dass Mitbewerber inhaltlich präziser auf die Fragen antworten.
        </AnswerBlock>
        <p className="mt-4">
          Für die technische Grundlage siehe den <Link to="/blog/schema-strategie-ai-retrieval" className="text-primary underline">Schema-Retrieval-Guide</Link> und die Konfiguration der <Link to="/blog/ai-crawler-steuern-gptbot-claudebot-2026" className="text-primary underline">AI-Crawler in der robots.txt</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche Fehler verzerren die Messung?
        </h2>
        <ul className="list-disc pl-6 space-y-3 mt-2">
          <li><strong>Chatverlauf aktiv:</strong> Personalisierte Antworten verfälschen das Bild.</li>
          <li><strong>Wechselnde Prompts:</strong> Ohne feste Formulierung kein Trend.</li>
          <li><strong>Zu häufige Messung:</strong> Tageswerte schwanken stark und erzeugen Fehlschlüsse.</li>
          <li><strong>Nur Markenprompts:</strong> Misst Bekanntheit, nicht Sichtbarkeit bei Neukunden.</li>
          <li><strong>Keine Faktenkontrolle:</strong> Nennung mit falscher Adresse schadet mehr, als sie nutzt.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">AI-Zitat-Monitoring aufsetzen lassen</h3>
        <p className="mb-4">
          Wir erstellen dein Prompt-Set, die Tracking-Tabelle und die erste Messung über ChatGPT, Perplexity, Gemini und Copilot — inklusive Maßnahmenempfehlung.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Monitoring anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default AiZitatMonitoring2026;
