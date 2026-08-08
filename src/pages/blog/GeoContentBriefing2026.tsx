import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { FileText, ListChecks, AlertTriangle, BarChart3, Layers, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "geo-content-briefing-vorlage-2026";

const GeoContentBriefing2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "unterschied", title: "GEO-Briefing vs. SEO-Briefing" },
    { id: "bausteine", title: "Die 8 Bausteine" },
    { id: "vorlage", title: "Vorlage zum Kopieren" },
    { id: "antwortblock", title: "Der Antwortblock" },
    { id: "quellen", title: "Belege und Quellenlage" },
    { id: "qualitaet", title: "Qualitätskontrolle vor Freigabe" },
    { id: "fehler", title: "Typische Fehler" },
  ];

  const faqItems = [
    {
      question: "Was ist ein GEO-Content-Briefing?",
      answer:
        "Ein GEO-Content-Briefing ist eine Schreibanweisung, die einen Text nicht nur für Suchmaschinen, sondern für die Zitierbarkeit durch AI-Assistenten auslegt. Es definiert die konkrete Nutzerfrage, einen 40–60 Wörter langen Antwortblock direkt unter jeder Frage-Überschrift, überprüfbare Fakten mit Quelle sowie die Entitäten, die im Text eindeutig benannt werden müssen.",
    },
    {
      question: "Worin unterscheidet sich ein GEO-Briefing von einem klassischen SEO-Briefing?",
      answer:
        "Ein SEO-Briefing optimiert auf Keyword-Abdeckung, Wortzahl und interne Verlinkung. Ein GEO-Briefing optimiert zusätzlich auf Extrahierbarkeit: eine Frage pro Abschnitt, eine kurze direkte Antwort zuerst, danach die Begründung. Außerdem verlangt es explizite Entitäten (Ort, Marke, Fachbegriff), belegte Zahlen und eine Struktur, die ein Assistent ohne Interpretation übernehmen kann.",
    },
    {
      question: "Wie lang sollte ein Antwortblock für AI-Suche sein?",
      answer:
        "40 bis 60 Wörter. Diese Länge passt in typische Antwortfenster von Assistenten und lässt sich vollständig zitieren, ohne gekürzt zu werden. Kürzere Blöcke wirken unvollständig, längere werden gekürzt oder umformuliert — dabei geht die Zuordnung zur Quelle häufig verloren.",
    },
    {
      question: "Welche Angaben machen einen Text für AI-Assistenten zitierfähig?",
      answer:
        "Eindeutige Entitäten (Unternehmensname, Ort, Fachbegriff), belegte Zahlen mit Datum und Quelle, klar abgegrenzte Abschnitte mit Frage-Überschriften, konsistente Terminologie und keine widersprüchlichen Angaben zwischen Text, Schema-Daten und Standortprofil. Vage Formulierungen ohne Beleg werden von Assistenten übergangen.",
    },
    {
      question: "Wer sollte ein GEO-Briefing schreiben?",
      answer:
        "Idealerweise die Person mit fachlicher Nähe zum Thema, nicht die Redaktion allein. Das Briefing braucht echte Praxisangaben: typische Kundenfragen, konkrete Abläufe, Preisrahmen, regionale Besonderheiten. Ohne diese Substanz entsteht austauschbarer Text, den kein Assistent bevorzugt zitiert.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Texte, die in ChatGPT, Perplexity oder Gemini zitiert werden, entstehen selten zufällig — sie folgen einem Briefing, das auf Extrahierbarkeit ausgelegt ist. Diese Vorlage zeigt die acht Bausteine eines GEO-Content-Briefings, den Aufbau eines zitierfähigen Antwortblocks und eine Qualitätskontrolle, die vor jeder Freigabe läuft.
      </p>

      <KeyTakeawaysBox
        items={[
          "Eine Frage pro Abschnitt, Antwort zuerst, Begründung danach",
          "Antwortblöcke mit 40–60 Wörtern sind vollständig zitierbar",
          "Entitäten (Marke, Ort, Fachbegriff) müssen ausgeschrieben werden",
          "Jede Zahl braucht Datum und Quelle, sonst wird sie übergangen",
          "Text, Schema-Daten und Standortprofil dürfen sich nicht widersprechen",
        ]}
      />

      <section id="unterschied" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          Was unterscheidet ein GEO-Briefing vom SEO-Briefing?
        </h2>
        <AnswerBlock question="Warum reicht ein klassisches SEO-Briefing für AI-Suche nicht aus?">
          Ein SEO-Briefing zielt auf Rankings: Keywords, Wortzahl, Struktur. Ein GEO-Briefing zielt auf Zitierbarkeit: Der Text muss so gebaut sein, dass ein Assistent einen abgeschlossenen Absatz übernehmen kann, ohne ihn umzuschreiben. Das verlangt Frage-Überschriften, kurze direkte Antworten, eindeutige Entitäten und belegte Fakten statt allgemeiner Formulierungen.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kriterium</th>
                <th className="border p-3 text-left">SEO-Briefing</th>
                <th className="border p-3 text-left">GEO-Briefing</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Ziel</td><td className="border p-3">Ranking-Position</td><td className="border p-3">Zitat in AI-Antwort</td></tr>
              <tr><td className="border p-3 font-semibold">Überschriften</td><td className="border p-3">Keyword-Phrasen</td><td className="border p-3">Echte Nutzerfragen</td></tr>
              <tr><td className="border p-3 font-semibold">Einstieg</td><td className="border p-3">Hinführung</td><td className="border p-3">Direkte Antwort zuerst</td></tr>
              <tr><td className="border p-3 font-semibold">Fakten</td><td className="border p-3">Optional</td><td className="border p-3">Mit Datum und Quelle</td></tr>
              <tr><td className="border p-3 font-semibold">Entitäten</td><td className="border p-3">Implizit</td><td className="border p-3">Ausgeschrieben und konsistent</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="bausteine" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Welche 8 Bausteine gehören in jedes Briefing?
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mt-2">
          <li><strong>Leitfrage:</strong> Die eine Frage, die der Text vollständig beantwortet.</li>
          <li><strong>Suchintention:</strong> Information, Vergleich, Anleitung oder Beauftragung.</li>
          <li><strong>Zielgruppe und Region:</strong> Wer fragt, in welcher Stadt, mit welchem Vorwissen.</li>
          <li><strong>Frage-Gliederung:</strong> 5–9 H2-Überschriften, jede als vollständige Frage.</li>
          <li><strong>Antwortblöcke:</strong> Je Abschnitt 40–60 Wörter direkte Antwort.</li>
          <li><strong>Entitätenliste:</strong> Marke, Ort, Fachbegriffe, verwandte Konzepte.</li>
          <li><strong>Belege:</strong> Zahlen mit Datum, Quelle und Erhebungskontext.</li>
          <li><strong>Interne Verlinkung:</strong> Ein Pillar-Link plus zwei thematisch benachbarte Artikel.</li>
        </ol>
      </section>

      <section id="vorlage" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-7 h-7 text-primary" />
          Vorlage zum Kopieren
        </h2>
        <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm mt-2"><code>{`LEITFRAGE:      Wie finde ich einen Zahnarzt für Angstpatienten in Köln?
SUCHINTENTION:  Auswahl / Beauftragung
ZIELGRUPPE:     Erwachsene mit Behandlungsangst, Köln und Umland
REGION:         Köln, Stadtteile Ehrenfeld, Nippes, Innenstadt

GLIEDERUNG (H2 = Frage, darunter 40-60 Wörter Antwort):
1. Was zeichnet eine Praxis für Angstpatienten aus?
2. Welche Behandlungsmethoden reduzieren Angst?
3. Was kostet eine Behandlung unter Sedierung?
4. Woran erkenne ich eine seriöse Praxis?
5. Wie läuft der erste Termin ab?

ENTITÄTEN:      Zahnarztpraxis, Köln, Dentalphobie, Sedierung, Lachgas
BELEGE:         Kostenrahmen mit Datum, Quelle der Angabe benennen
INTERNE LINKS:  1 Pillar + 2 thematisch benachbarte Artikel
NICHT ERLAUBT:  Heilversprechen, unbelegte Erfolgsquoten, Superlative`}</code></pre>
      </section>

      <section id="antwortblock" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <PenLine className="w-7 h-7 text-primary" />
          Wie baue ich einen zitierfähigen Antwortblock?
        </h2>
        <AnswerBlock question="Welche Struktur macht einen Absatz für Assistenten übernehmbar?">
          Erster Satz: die direkte Antwort auf die Überschrift. Zweiter und dritter Satz: die entscheidende Bedingung oder Einschränkung. Vierter Satz: der konkrete nächste Schritt. Insgesamt 40–60 Wörter, keine Rückverweise wie „siehe oben“, keine Pronomen ohne Bezug — der Block muss außerhalb der Seite eigenständig verständlich bleiben.
        </AnswerBlock>
      </section>

      <section id="quellen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie gehe ich mit Zahlen und Belegen um?
        </h2>
        <AnswerBlock question="Welche Anforderungen gelten für Fakten in GEO-Texten?">
          Jede Zahl braucht drei Angaben: Wert, Erhebungszeitpunkt und Quelle. Fehlt eine davon, gehört die Aussage nicht in den Text. Eigene Erfahrungswerte sind zulässig, müssen aber als solche gekennzeichnet werden. Erfundene Statistiken, Bewertungen oder Erfolgsquoten sind ausgeschlossen — sie sind rechtlich riskant und beschädigen die Quellenbewertung dauerhaft.
        </AnswerBlock>
      </section>

      <section id="qualitaet" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Qualitätskontrolle vor der Freigabe
        </h2>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Jede H2 ist eine vollständige Frage.</li>
          <li>Unter jeder H2 steht ein Antwortblock mit 40–60 Wörtern.</li>
          <li>Jede Zahl hat Datum und Quelle.</li>
          <li>Ort, Marke und Fachbegriffe sind ausgeschrieben und einheitlich.</li>
          <li>Keine Widersprüche zu Schema-Daten und Standortprofil.</li>
          <li>Ein Pillar-Link und zwei Sibling-Links sind gesetzt.</li>
        </ul>
        <p className="mt-6">
          Prüfe die technische Seite ergänzend mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link> und miss die Wirkung über das <Link to="/blog/ai-zitat-monitoring-local-seo-2026" className="text-primary underline">AI-Zitat-Monitoring</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche Fehler verhindern Zitate?
        </h2>
        <ul className="list-disc pl-6 space-y-3 mt-2">
          <li><strong>Hinführende Einleitungen:</strong> Die Antwort steht erst im dritten Absatz.</li>
          <li><strong>Pronomen ohne Bezug:</strong> Der Absatz ist außerhalb der Seite unverständlich.</li>
          <li><strong>Unbelegte Zahlen:</strong> Werden von Assistenten übergangen.</li>
          <li><strong>Wechselnde Begriffe:</strong> Dieselbe Leistung heißt in jedem Abschnitt anders.</li>
          <li><strong>Kein Ortsbezug:</strong> Der Text ist nicht als lokal erkennbar.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">GEO-Briefings für dein Team</h3>
        <p className="mb-4">
          Wir erstellen Briefing-Vorlagen für deine wichtigsten Leistungsseiten — inklusive Frage-Gliederung, Entitätenliste und Prüfliste für die Freigabe.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Briefing-Set anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default GeoContentBriefing2026;
