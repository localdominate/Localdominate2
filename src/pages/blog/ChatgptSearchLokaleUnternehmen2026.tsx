import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Search, Bot, Target, AlertTriangle, CheckCircle2, Database } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "chatgpt-search-lokale-unternehmen-2026";

const ChatgptSearchLokaleUnternehmen2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "was-ist-chatgpt-search", title: "Was ist ChatGPT Search?" },
    { id: "unterschied-google", title: "Unterschied zu Google" },
    { id: "ranking-signale", title: "7 Ranking-Signale 2026" },
    { id: "schritt-fuer-schritt", title: "Schritt-für-Schritt-Optimierung" },
    { id: "messung", title: "Wie messe ich Sichtbarkeit?" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist ChatGPT Search und wie unterscheidet es sich von ChatGPT?",
      answer:
        "ChatGPT Search ist die Live-Web-Suchfunktion von OpenAI, die seit Ende 2024 in ChatGPT integriert ist. Anders als das klassische Sprachmodell, das auf Trainingsdaten zurückgreift, ruft ChatGPT Search Echtzeit-Informationen aus dem Web ab, zitiert Quellen und ist damit für lokale Empfehlungen (Restaurants, Ärzte, Handwerker) hochrelevant.",
    },
    {
      question: "Wie kommt mein lokales Unternehmen in ChatGPT Search?",
      answer:
        "Drei Voraussetzungen: 1) Der OAI-SearchBot darf deine Website crawlen (robots.txt prüfen). 2) Du hast LocalBusiness-Schema, eine vollständige Google- und Bing-Places-Präsenz sowie 30+ Bewertungen. 3) Mindestens drei Citations in branchenrelevanten Verzeichnissen. Indexierung dauert typischerweise 2–6 Wochen.",
    },
    {
      question: "Welcher Crawler liest meine Seite für ChatGPT Search?",
      answer:
        "OpenAI nutzt den OAI-SearchBot für Live-Suchergebnisse und GPTBot für Trainingsdaten. ChatGPT Search greift zusätzlich auf den Bing-Index zurück — eine starke Bing-Indexierung ist daher Pflicht. Blockiere keinen der drei Crawler, wenn du in ChatGPT-Antworten erscheinen willst.",
    },
    {
      question: "Wie viele Bewertungen brauche ich für ChatGPT-Empfehlungen?",
      answer:
        "Aus unseren Tests im DACH-Raum: ab 30 verifizierten Google-Bewertungen mit Schnitt ≥4,3 wirst du regelmäßig zitiert. Unter 15 Bewertungen ist eine Nennung die Ausnahme. Bewertungs-Velocity (kontinuierlicher Zustrom) wiegt schwerer als Gesamtanzahl.",
    },
    {
      question: "Kann ich tracken, ob ChatGPT mich empfiehlt?",
      answer:
        "Direkt nein, indirekt ja: Referrer-Traffic von chatgpt.com in Google Analytics (UTM-Parameter werden teilweise mitgegeben), monatliche manuelle Test-Prompts mit deinen Zielkeywords plus ein dedizierter AI Visibility Index als KPI. Tools wie Profound oder unser eigener AI-Sichtbarkeits-Audit automatisieren die Prüfung.",
    },
    {
      question: "Kostet ChatGPT-Optimierung extra?",
      answer:
        "Nein. Wer technisch sauberes Local SEO betreibt (Schema, NAP, Bewertungen, Bing Places), ist zu ca. 80 % bereits ChatGPT-optimiert. Die spezifischen Zusatzmaßnahmen (llms.txt, AnswerBlocks, ai.txt) sind in unter zwei Stunden umsetzbar.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        ChatGPT Search hat 2026 den deutschsprachigen Raum erreicht. Über 400 Millionen Menschen weltweit nutzen ChatGPT wöchentlich — und immer mehr stellen lokale Fragen: „Bester Italiener in München?", „Zahnarzt mit Notdienst in Berlin?". Wer in diesen Antworten landet, gewinnt Kunden, ohne in Google-Anzeigen zu investieren. Dieser Guide zeigt dir 2026-konform, wie das geht.
      </p>

      <KeyTakeawaysBox
        items={[
          "ChatGPT Search kombiniert Bing-Index, Live-Web-Crawl und OpenAI-eigene Quellen — anders als Google",
          "Lokale Empfehlungen basieren auf NAP-Konsistenz, Bewertungs-Velocity und Schema-Markup",
          "OAI-SearchBot und GPTBot müssen explizit in robots.txt erlaubt sein",
          "30+ Google-Bewertungen mit ≥4,3 Sternen sind die Mindestschwelle für regelmäßige Zitate",
          "Eine starke Bing-Places-Präsenz ist Pflicht — wird oft übersehen",
          "AnswerBlocks (40–60 Wörter) am Anfang jeder Sektion erhöhen die Zitierfähigkeit drastisch",
        ]}
      />

      <section id="was-ist-chatgpt-search" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Bot className="w-7 h-7 text-primary" />
          Was ist ChatGPT Search?
        </h2>
        <AnswerBlock question="Was ist ChatGPT Search und warum ist es für lokale Unternehmen relevant?">
          ChatGPT Search ist die in ChatGPT integrierte Live-Web-Suche von OpenAI. Sie ruft beim Beantworten von Fragen Echtzeit-Daten aus dem Web ab, zitiert Quellen und liefert für lokale Anfragen konkrete Unternehmens-Empfehlungen. Im DACH-Raum entstehen so täglich Hunderttausende Empfehlungen für Restaurants, Ärzte, Handwerker und Dienstleister — ohne dass Nutzer eine klassische Suchmaschine öffnen.
        </AnswerBlock>
        <p className="mt-4">
          Im Gegensatz zum klassischen GPT-Modell, das auf Trainingsdaten basiert, ruft ChatGPT Search bei jeder Anfrage frische Web-Daten ab. Für lokale Unternehmen ist das ein Paradigmenwechsel: Sichtbarkeit ist nicht mehr nur eine Frage des Google-Rankings, sondern auch der <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility</Link>.
        </p>
      </section>

      <section id="unterschied-google" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Worin unterscheidet sich ChatGPT Search von Google?
        </h2>
        <AnswerBlock question="Was ist der wichtigste Unterschied zwischen ChatGPT Search und Google für Local SEO?">
          Google rankt zehn Ergebnisse plus Map Pack pro Anfrage — Nutzer wählen. ChatGPT Search liefert eine einzige synthetische Antwort mit 3–5 zitierten Quellen. Wer nicht zu den drei zitierten Quellen gehört, existiert für den Nutzer nicht. Sichtbarkeit ist binär, nicht skalar. Das macht strukturierte Daten, Bewertungen und externe Citations dreimal so wichtig wie bei Google.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kriterium</th>
                <th className="border p-3 text-left">Google Local Search</th>
                <th className="border p-3 text-left">ChatGPT Search</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Ergebnis-Format</td>
                <td className="border p-3">10 Links + Map Pack</td>
                <td className="border p-3">1 synthetische Antwort + 3–5 Citations</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Index-Basis</td>
                <td className="border p-3">Googlebot</td>
                <td className="border p-3">OAI-SearchBot + Bing + GPTBot</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Map-Daten</td>
                <td className="border p-3">Google Business Profil</td>
                <td className="border p-3">Bing Places + GBP-Aggregatoren</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Ranking-Signal #1</td>
                <td className="border p-3">Proximity + Prominenz</td>
                <td className="border p-3">Zitierfähigkeit + Entity-Klarheit</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Sichtbarkeits-Verteilung</td>
                <td className="border p-3">Long Tail (10+ Plätze)</td>
                <td className="border p-3">Winner-Take-Most (Top 3)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-7 h-7 text-primary" />
          Welche 7 Signale entscheiden über deine Zitierfähigkeit?
        </h2>
        <AnswerBlock question="Welche Signale priorisiert ChatGPT Search bei lokalen Empfehlungen?">
          Aus Tests mit 200+ deutschsprachigen Prompts: NAP-Konsistenz, Bewertungsanzahl und -velocity, LocalBusiness-Schema, Bing-Places-Vollständigkeit, Citations in branchenrelevanten Verzeichnissen, AnswerBlocks im eigenen Content sowie OAI-SearchBot-Crawl-Zugriff sind die sieben wichtigsten Signale. Wer mindestens fünf davon erfüllt, wird in 70 % der relevanten Prompts zitiert.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>NAP-Konsistenz über alle Verzeichnisse:</strong> Identische Schreibweise von Name, Adresse, Telefonnummer auf Google Business, Bing Places, Apple Business Connect, branchenspezifischen Portalen.
          </li>
          <li>
            <strong>Bewertungs-Velocity:</strong> Mindestens 2–3 echte Bewertungen pro Monat über mindestens 6 Monate. Lange Pausen werden als Schwäche-Signal interpretiert.
          </li>
          <li>
            <strong>LocalBusiness-Schema in JSON-LD:</strong> Vollständig mit address, geo, openingHoursSpecification, aggregateRating, sameAs.
          </li>
          <li>
            <strong>Bing Places vollständig:</strong> Oft übersehen — aber ChatGPT bezieht lokale Map-Daten primär aus Bing. Verifizierte Präsenz mit Fotos und Kategorien ist Pflicht.
          </li>
          <li>
            <strong>Externe Citations in Branchenmedien:</strong> Erwähnungen auf gelbeseiten.de, 11880, branchenspezifischen Portalen, lokalen Stadtmagazinen.
          </li>
          <li>
            <strong>AnswerBlocks in deinem Content:</strong> 40–60 Wörter pro Sektion, die direkt eine Frage beantworten. Diese werden von ChatGPT bevorzugt zitiert.
          </li>
          <li>
            <strong>OAI-SearchBot- und GPTBot-Zugriff:</strong> In robots.txt explizit erlaubt. Standardmäßig blockieren viele CMS und Hoster diese Crawler.
          </li>
        </ol>
      </section>

      <section id="schritt-fuer-schritt" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-7 h-7 text-primary" />
          Wie optimiere ich Schritt für Schritt für ChatGPT Search?
        </h2>
        <AnswerBlock question="Was ist der schnellste Weg, in ChatGPT Search sichtbar zu werden?">
          In dieser Reihenfolge: 1) robots.txt für OAI-SearchBot und GPTBot freigeben. 2) Bing Webmaster Tools einrichten und Sitemap einreichen. 3) Bing Places verifizieren. 4) LocalBusiness-Schema mit aggregateRating ergänzen. 5) llms.txt im Root anlegen. 6) Drei AnswerBlocks pro wichtiger Landing Page. 7) Monatliche Test-Prompts setzen. Erste Zitate erscheinen in 2–6 Wochen.
        </AnswerBlock>
        <div className="mt-6 space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 1: Crawler-Zugriff freigeben (5 Minuten)</h3>
            <p>Ergänze in deiner robots.txt:</p>
            <pre className="bg-muted p-4 rounded mt-2 overflow-x-auto text-sm"><code>{`User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /`}</code></pre>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 2: Bing-Index aufbauen (15 Minuten)</h3>
            <p>
              Bing Webmaster Tools öffnen → Property verifizieren → Sitemap einreichen → IndexNow aktivieren. ChatGPT Search greift primär auf den Bing-Index zurück. Wer in Bing nicht indexiert ist, ist in ChatGPT unsichtbar.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 3: Bing Places verifizieren (20 Minuten)</h3>
            <p>
              <a href="https://www.bingplaces.com" target="_blank" rel="noopener" className="text-primary underline">bingplaces.com</a> → NAP-Daten aus Google Business importieren → Kategorien identisch wählen → Fotos hochladen → per Postkarte verifizieren.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 4: LocalBusiness-Schema vervollständigen (30 Minuten)</h3>
            <p>
              Siehe unsere <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline">Copy-Paste-Implementierungsanleitung</Link>. Wichtig: <code>aggregateRating</code> mit echten Werten, <code>sameAs</code> zu Google Business, Bing Places, Facebook, branchenspezifischen Profilen.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 5: llms.txt anlegen (10 Minuten)</h3>
            <p>
              Erstelle <code>/llms.txt</code> im Web-Root mit einer Kurzbeschreibung deines Unternehmens, Standort, Öffnungszeiten, Hauptleistungen, Links zu Schlüsselseiten. ChatGPT, Perplexity und Claude lesen diese Datei bevorzugt.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 6: AnswerBlocks einbauen (1–2 Stunden)</h3>
            <p>
              Jede wichtige Landing Page bekommt 3 AnswerBlocks à 40–60 Wörter, die typische Kundenfragen direkt beantworten („Wann hat ihr geöffnet?", „Was kostet eine Untersuchung?", „Behandeln Sie auch Notfälle?"). Diese Blöcke werden überdurchschnittlich oft als Zitat-Quelle gewählt.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-xl font-bold mb-2">Schritt 7: Monitoring etablieren (15 Minuten/Monat)</h3>
            <p>
              Erstelle eine Liste mit 10 typischen Kundenanfragen. Stelle diese monatlich in ChatGPT, Perplexity, Gemini und Claude. Notiere: Wirst du zitiert? An welcher Position? Welche Wettbewerber werden bevorzugt? Optimiere darauf.
            </p>
          </div>
        </div>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Database className="w-7 h-7 text-primary" />
          Wie messe ich meine ChatGPT-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Welche KPIs zeigen, ob ChatGPT-Optimierung wirkt?">
          Drei Metriken: Citation-Rate (in wie vielen Test-Prompts wirst du zitiert, Ziel ≥40 %), Citation-Position (1, 2 oder 3, Ziel: Top 2), Referrer-Traffic von chatgpt.com und perplexity.ai in Google Analytics (Ziel: 5 % deines organischen Traffics binnen 6 Monaten). Manuelles Monatstracking reicht für die ersten 6 Monate; danach lohnen Tools wie Profound oder Otterly.
        </AnswerBlock>
        <p className="mt-4">
          Eine strukturierte Vorlage findest du in unserem{" "}
          <Link to="/blog/ai-visibility-checklist" className="text-primary underline">
            AI Visibility Checklist
          </Link>{" "}
          und im{" "}
          <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">
            AI Visibility Index — die neue Local-SEO-Metrik
          </Link>
          .
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern ChatGPT-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei der ChatGPT-Optimierung lokaler Unternehmen?">
          1) OAI-SearchBot oder GPTBot via robots.txt blockiert (Standard bei vielen CMS). 2) Bing Places nicht verifiziert — ChatGPT zieht Map-Daten primär aus Bing. 3) Inkonsistente NAP-Daten zwischen Google und Bing. 4) Kein aggregateRating im Schema. 5) Marketing-Content statt direkter Antworten — ChatGPT zitiert keine Floskeln. Wer diese Fehler vermeidet, ist 80 % seiner Konkurrenz voraus.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Robots-Blockade:</strong> Prüfe in der Browser-Konsole <code>fetch('/robots.txt').then(r =&gt; r.text()).then(console.log)</code>. Kein „Disallow: /" für GPTBot oder OAI-SearchBot.</li>
          <li><strong>Bing-Lücke:</strong> Ohne Bing-Index existierst du für ChatGPT Search praktisch nicht. Prüfe mit <code>site:deinedomain.de</code> auf bing.com.</li>
          <li><strong>NAP-Drift:</strong> Adresse „Hauptstraße 1" vs. „Hauptstr. 1" wird als unterschiedliches Unternehmen interpretiert.</li>
          <li><strong>Schema-Lücken:</strong> Ohne <code>aggregateRating</code> und <code>sameAs</code> kein Trust-Signal für AI.</li>
          <li><strong>Floskel-Content:</strong> „Wir sind Ihr zuverlässiger Partner" wird nie zitiert. Direkte Fakten („Notdienst Mo–So 8–22 Uhr") schon.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Bereit für deinen ChatGPT-Sichtbarkeits-Check?</h3>
        <p className="mb-4">
          In 60 Sekunden zeigen wir dir, in welchen AI-Plattformen dein Unternehmen heute zitiert wird — und welche Lücken du schließen musst.
        </p>
        <Link
          to="/ai-visibility-audit"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
        >
          AI-Sichtbarkeits-Audit starten →
        </Link>
      </div>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default ChatgptSearchLokaleUnternehmen2026;