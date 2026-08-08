import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bot, ShieldCheck, ListChecks, AlertTriangle, BarChart3, Server } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "ai-crawler-steuern-gptbot-claudebot-2026";

const AiCrawlerSteuern2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "grundlagen", title: "Was sind AI-Crawler?" },
    { id: "uebersicht", title: "Alle relevanten AI-User-Agents" },
    { id: "entscheidung", title: "Zulassen oder blockieren?" },
    { id: "robots", title: "robots.txt richtig konfigurieren" },
    { id: "setup", title: "6-Schritte-Setup" },
    { id: "fehler", title: "Typische Fehler" },
    { id: "messung", title: "Crawler-Zugriffe messen" },
  ];

  const faqItems = [
    {
      question: "Welche AI-Crawler besuchen lokale Webseiten 2026?",
      answer:
        "Die wichtigsten sind GPTBot und ChatGPT-User (OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended (Gemini-Training) und Applebot-Extended. Dazu kommen Bingbot als Zulieferer für Copilot sowie kleinere Indexierer wie MistralBot und Amazonbot. Jeder dieser Agents verhält sich anders: Manche crawlen für Training, andere holen Inhalte live beim Beantworten einer Nutzerfrage.",
    },
    {
      question: "Sollte ein lokales Unternehmen AI-Crawler blockieren?",
      answer:
        "In der Regel nein. Wer in ChatGPT, Perplexity oder Gemini empfohlen werden will, muss lesbar sein. Sinnvoll ist eine differenzierte Regelung: Live-Retrieval-Bots wie ChatGPT-User und PerplexityBot zulassen, reine Trainings-Crawler optional einschränken, und interne Bereiche wie Login, Warenkorb oder Account-Seiten für alle sperren.",
    },
    {
      question: "Wie unterscheiden sich Trainings-Crawler und Retrieval-Crawler?",
      answer:
        "Trainings-Crawler (GPTBot, Google-Extended, Applebot-Extended) sammeln Inhalte für Modelltraining — der Effekt auf Sichtbarkeit ist indirekt und langfristig. Retrieval-Crawler (ChatGPT-User, PerplexityBot, ClaudeBot bei Websuche) holen Seiten in dem Moment, in dem ein Nutzer fragt. Wer Retrieval-Bots blockiert, verschwindet sofort aus AI-Antworten.",
    },
    {
      question: "Was gehört in die robots.txt für AI-Crawler?",
      answer:
        "Pro Bot ein eigener User-agent-Block mit expliziten Allow- und Disallow-Regeln, dazu ein Verweis auf sitemap.xml und optional auf /llms.txt. Gesperrt gehören /admin, /login, Checkout- und Account-Routen sowie API-Endpunkte. Öffentliche Service-, Standort- und Blogseiten sollten ausdrücklich erlaubt sein.",
    },
    {
      question: "Wie prüfe ich, ob AI-Crawler meine Seite tatsächlich lesen?",
      answer:
        "Über Server- oder CDN-Logs: Filtere nach den User-Agent-Strings GPTBot, ClaudeBot, PerplexityBot und ChatGPT-User und werte Trefferzahl, Statuscodes und die häufigsten Pfade aus. Ergänzend hilft ein monatlicher Testlauf mit echten Fragen in ChatGPT und Perplexity, um zu sehen, welche URLs zitiert werden.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Ob ein lokales Unternehmen 2026 in ChatGPT, Perplexity oder Gemini empfohlen wird, entscheidet sich lange vor dem Content: bei der Frage, ob die AI-Crawler die Seite überhaupt lesen dürfen. Dieser Leitfaden zeigt alle relevanten User-Agents, eine belastbare Zulassen-oder-Blockieren-Logik und eine vollständige robots.txt-Vorlage für lokale Webseiten.
      </p>

      <KeyTakeawaysBox
        items={[
          "AI-Crawler teilen sich in Trainings-Bots und Retrieval-Bots — die Behandlung unterscheidet sich",
          "Retrieval-Bots (ChatGPT-User, PerplexityBot) niemals blockieren, sonst keine AI-Zitate",
          "Interne Routen (Login, Checkout, Account, API) für alle Bots sperren",
          "robots.txt sollte sitemap.xml und /llms.txt referenzieren",
          "Wirkung über Server-Logs und User-Agent-Filter messen",
        ]}
      />

      <section id="grundlagen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Bot className="w-7 h-7 text-primary" />
          Was sind AI-Crawler überhaupt?
        </h2>
        <AnswerBlock question="Was macht ein AI-Crawler anders als der klassische Googlebot?">
          Der Googlebot indexiert Seiten für eine Ergebnisliste. AI-Crawler sammeln Inhalte entweder für das Modelltraining oder holen sie live, während ein Assistent eine Nutzerfrage beantwortet. Für lokale Unternehmen zählt vor allem der zweite Fall: Wird die Seite in dem Moment gelesen, in dem jemand nach einem Anbieter in seiner Stadt fragt, kann sie zitiert und verlinkt werden.
        </AnswerBlock>
      </section>

      <section id="uebersicht" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Server className="w-7 h-7 text-primary" />
          Welche AI-User-Agents sind 2026 relevant?
        </h2>
        <AnswerBlock question="Welche Bots sollte man in der robots.txt namentlich behandeln?">
          Sechs Agents decken den Großteil des AI-Traffics ab: GPTBot und ChatGPT-User (OpenAI), ClaudeBot (Anthropic), PerplexityBot, Google-Extended (Gemini) und Applebot-Extended. Alle anderen lassen sich über den Standard-Block abdecken. Wichtig ist die Trennung nach Zweck, weil Training und Live-Retrieval unterschiedliche Konsequenzen für die Sichtbarkeit haben.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">User-Agent</th>
                <th className="border p-3 text-left">Betreiber</th>
                <th className="border p-3 text-left">Zweck</th>
                <th className="border p-3 text-left">Empfehlung</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">GPTBot</td><td className="border p-3">OpenAI</td><td className="border p-3">Training</td><td className="border p-3">Zulassen</td></tr>
              <tr><td className="border p-3 font-semibold">ChatGPT-User</td><td className="border p-3">OpenAI</td><td className="border p-3">Live-Retrieval</td><td className="border p-3">Immer zulassen</td></tr>
              <tr><td className="border p-3 font-semibold">ClaudeBot</td><td className="border p-3">Anthropic</td><td className="border p-3">Training + Retrieval</td><td className="border p-3">Zulassen</td></tr>
              <tr><td className="border p-3 font-semibold">PerplexityBot</td><td className="border p-3">Perplexity</td><td className="border p-3">Live-Retrieval</td><td className="border p-3">Immer zulassen</td></tr>
              <tr><td className="border p-3 font-semibold">Google-Extended</td><td className="border p-3">Google</td><td className="border p-3">Gemini-Training</td><td className="border p-3">Zulassen</td></tr>
              <tr><td className="border p-3 font-semibold">Applebot-Extended</td><td className="border p-3">Apple</td><td className="border p-3">Siri/Apple Intelligence</td><td className="border p-3">Zulassen</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="entscheidung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-primary" />
          Zulassen oder blockieren — was ist richtig?
        </h2>
        <AnswerBlock question="Wann ist es sinnvoll, einen AI-Crawler auszusperren?">
          Blockieren lohnt sich nur bei schützenswerten Inhalten: Kundenportale, Preislisten hinter Login, personenbezogene Daten oder lizenzierte Fremdinhalte. Für öffentliche Service-, Standort- und Ratgeberseiten gilt das Gegenteil — jede Sperre kostet potenzielle Empfehlungen. Wer Trainings-Crawler aus urheberrechtlichen Gründen ausschließen möchte, sollte Retrieval-Bots trotzdem offen lassen.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Immer offen:</strong> Startseite, Leistungen, Standorte, Blog, Kontakt, Bewertungen.</li>
          <li><strong>Immer gesperrt:</strong> /admin, /login, /checkout, /konto, /api.</li>
          <li><strong>Fallabhängig:</strong> PDF-Downloads, Preislisten, geschützte Studien.</li>
        </ul>
      </section>

      <section id="robots" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          Vorlage: robots.txt für lokale Unternehmen
        </h2>
        <AnswerBlock question="Wie sieht eine produktionsreife robots.txt mit AI-Crawler-Regeln aus?">
          Ein sauberer Aufbau umfasst einen Standard-Block für alle Bots, je einen Block für die sechs relevanten AI-Agents und am Ende Verweise auf sitemap.xml und llms.txt. Die folgende Vorlage ist direkt übertragbar — Domain und interne Pfade anpassen, sonst nichts ändern.
        </AnswerBlock>
        <pre className="bg-muted/50 border rounded-lg p-4 overflow-x-auto text-sm mt-6"><code>{`User-agent: *
Allow: /
Disallow: /admin
Disallow: /login
Disallow: /checkout
Disallow: /konto
Disallow: /api/

User-agent: GPTBot
Allow: /
Disallow: /admin
Disallow: /konto

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /
Disallow: /admin

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://deine-domain.de/sitemap.xml
# AI-Inhaltskarte: https://deine-domain.de/llms.txt`}</code></pre>
      </section>

      <section id="setup" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          6-Schritte-Setup
        </h2>
        <ol className="list-decimal pl-6 space-y-4 mt-2">
          <li><strong>Bestand prüfen:</strong> Aktuelle robots.txt aufrufen und alle bestehenden Disallow-Regeln notieren.</li>
          <li><strong>Interne Routen sammeln:</strong> Admin-, Auth-, Checkout- und API-Pfade auflisten.</li>
          <li><strong>Blöcke ergänzen:</strong> Die sechs AI-Agents namentlich aufnehmen.</li>
          <li><strong>Referenzen setzen:</strong> Sitemap und llms.txt am Dateiende verlinken.</li>
          <li><strong>Deployment:</strong> Datei unter public/robots.txt ablegen und im Browser prüfen.</li>
          <li><strong>Monitoring:</strong> Nach zwei Wochen Server-Logs auf AI-User-Agents auswerten.</li>
        </ol>
        <p className="mt-6">
          Ergänze die robots.txt anschließend um eine <Link to="/blog/llms-txt-lokale-unternehmen-2026" className="text-primary underline">spec-konforme llms.txt</Link> und prüfe die Gesamtlage mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link>.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche Fehler kosten AI-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten robots.txt-Fehler im AI-Kontext?">
          1) Pauschales Disallow für alle unbekannten Bots — sperrt auch Retrieval-Crawler aus. 2) Sitemap fehlt oder verweist auf eine alte Domain. 3) Wichtige Service-Seiten liegen versehentlich unter einem gesperrten Pfad. 4) Staging-Regeln (Disallow: /) landen im Live-Deployment. 5) Keine Kontrolle nach Relaunches, obwohl sich Pfade geändert haben.
        </AnswerBlock>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich AI-Crawler-Zugriffe?
        </h2>
        <AnswerBlock question="Welche Kennzahlen zeigen, dass AI-Crawler die Seite verarbeiten?">
          Drei Kennzahlen genügen: Anzahl der Requests je AI-User-Agent pro Monat, Anteil der Antworten mit Status 200 und die Liste der zehn meistgelesenen Pfade. Steigen die Requests, während die Zitatrate stagniert, liegt das Problem nicht am Zugriff, sondern an Struktur und Inhalt der Seiten.
        </AnswerBlock>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">AI-Crawler-Audit für deine Webseite</h3>
        <p className="mb-4">
          Wir prüfen robots.txt, llms.txt, Statuscodes und interne Routen und liefern eine fertige Konfiguration inklusive Log-Auswertung.
        </p>
        <Link to="/decision" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
          Audit anfragen
        </Link>
      </div>
    </ArticleLayout>
  );
};

export default AiCrawlerSteuern2026;
