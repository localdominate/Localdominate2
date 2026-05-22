import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bot, Search, MapPin, ListChecks, AlertTriangle, Layers, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "bing-copilot-local-seo-2026";

const BingCopilotLocalSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum-bing", title: "Warum Bing wieder wichtig ist" },
    { id: "copilot-grundlagen", title: "Wie funktioniert Microsoft Copilot?" },
    { id: "bing-places", title: "Bing Places korrekt einrichten" },
    { id: "ranking-signale", title: "Ranking-Signale im Copilot" },
    { id: "strategie", title: "7-Schritte-Plan" },
    { id: "messung", title: "Sichtbarkeit messen" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Warum ist Bing 2026 plötzlich wieder relevant für Local SEO?",
      answer:
        'Weil ChatGPT Search, Microsoft Copilot, Edge Copilot, Windows Copilot und das gesamte OpenAI-Ökosystem den Bing-Index als primäre Quelle nutzen. Wer in Bing nicht indexiert ist, taucht in keiner dieser Antworten auf — auch wenn das Google-Ranking exzellent ist. Microsoft hat damit eine eigene AI-Search-Ökonomie aufgebaut, die parallel zu Google läuft.',
    },
    {
      question: "Was ist Microsoft Copilot und wie unterscheidet er sich von ChatGPT?",
      answer:
        'Microsoft Copilot ist die markenseitige Integration des GPT-Modells in Edge, Windows, Office, Teams und Bing. Im Gegensatz zu ChatGPT-Search nutzt Copilot zusätzlich Microsoft-Daten (Outlook, Teams, OneDrive) und blendet im Browser Empfehlungen direkt neben besuchten Seiten ein. Für DACH-Unternehmen ist Copilot besonders relevant, weil viele Unternehmen auf Microsoft 365 standardisiert sind.',
    },
    {
      question: "Wie richte ich Bing Places for Business korrekt ein?",
      answer:
        'Über bingplaces.com mit Microsoft-Konto registrieren, Unternehmen importieren (Google-Business-Profil-Import möglich), alle Felder ausfüllen (NAP, Öffnungszeiten, Kategorien, Fotos, Service-Areas), Verifizierung per Postkarte oder Telefon abschließen. Anschließend Bing Webmaster Tools verbinden, um Indexierung und Performance zu messen. Erstindexierung erfolgt in 7–14 Tagen.',
    },
    {
      question: "Welche Ranking-Signale nutzt Microsoft Copilot für lokale Empfehlungen?",
      answer:
        'Sechs Hauptfaktoren: Bing-Places-Vollständigkeit, Bing-Index-Status der Website (crawlbar, indexiert, schema-valide), strukturierte Daten (LocalBusiness, FAQ, Service), Bewertungssignale (Bing, Yelp, Tripadvisor — Microsoft synthetisiert Drittquellen), Microsoft Reviews-Aggregation und Crawl-Freundlichkeit für den Bingbot. Backlinks zählen weniger als bei Google, semantische Kohärenz mehr.',
    },
    {
      question: "Muss ich Bingbot speziell in der robots.txt erlauben?",
      answer:
        'Ja — explizit. Viele Websites haben unbewusst restriktive robots.txt-Einträge, die Bingbot blockieren. Eine Zeile „User-agent: Bingbot / Allow: /" und ein eingereichter Sitemap-Link über Bing Webmaster Tools sind Pflicht. Zusätzlich solltest du OAI-SearchBot (ChatGPT) und PerplexityBot freigeben, weil sie auf demselben Crawler-Layer aufbauen.',
    },
    {
      question: "Wie messe ich, ob mein Unternehmen in Copilot-Antworten erscheint?",
      answer:
        'Drei Quellen: 1) Bing Webmaster Tools zeigt Impressionen und Klicks. 2) Manuelle Test-Prompts in Copilot (Edge, Bing.com, Windows-App) mit deinen Top-Keywords. 3) Referrer-Traffic von bing.com und edgeservices.bing.com in Analytics. Microsoft hat angekündigt, ab 2026 einen „AI Mentions"-Bericht in Webmaster Tools auszurollen, der explizit Copilot-Citations zählt.',
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Bing war 15 Jahre lang ein Randthema. Mit der Integration von GPT in Microsoft Copilot, Edge, Windows und Microsoft 365 ist Bing 2026 plötzlich die zweitwichtigste Suchquelle der Welt — und gleichzeitig die Datengrundlage für ChatGPT Search und alle Microsoft-AI-Produkte. Wer in Bing nicht indexiert ist, verliert in DACH zweistellige Prozent der AI-Sichtbarkeit. Dieser Guide zeigt, wie du Bing Places einrichtest, Copilot-Ranking-Signale optimierst und systematisch in Microsofts AI-Ökosystem ankommst.
      </p>

      <KeyTakeawaysBox
        items={[
          "Bing-Index ist Datengrundlage für ChatGPT Search, Microsoft Copilot, Edge, Windows und Microsoft 365",
          "Bing Places ist Pflicht — Google-Business-Profil-Import beschleunigt Setup",
          "Bingbot muss in robots.txt explizit erlaubt sein — viele Sites blockieren ihn unbewusst",
          "LocalBusiness- und FAQ-Schema sind die wichtigsten Trust-Signale im Copilot",
          "Microsoft aggregiert Bewertungen aus Bing, Yelp und Tripadvisor — alle drei pflegen",
          "Erste Sichtbarkeit nach 7–14 Tagen Indexierung messbar",
        ]}
      />

      <section id="warum-bing" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          Warum ist Bing 2026 wieder relevant?
        </h2>
        <AnswerBlock question="Welche Rolle spielt Bing im AI-Search-Ökosystem 2026?">
          Bing ist der Index, auf dem ChatGPT Search, Microsoft Copilot, Edge Copilot, Windows Copilot und Microsoft 365 aufbauen. Damit deckt der Bing-Index 2026 schätzungsweise 25–35 % aller AI-gestützten Suchanfragen weltweit ab. Für DACH-Unternehmen mit hoher Microsoft-365-Nutzung ist Bing zur zweiten kritischen Suchquelle nach Google geworden — und im Copilot-Kontext oft sogar wichtiger.
        </AnswerBlock>
        <p className="mt-4">
          Drei strukturelle Verschiebungen machen Bing 2026 unverzichtbar:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>OpenAI-Bing-Allianz:</strong> ChatGPT Search nutzt Bing als primäre Quelle. Ohne Bing-Index keine ChatGPT-Citation.</li>
          <li><strong>Microsoft-365-Integration:</strong> Copilot in Outlook, Teams und Word zieht Bing-Daten in Geschäftskontext.</li>
          <li><strong>Edge-Browser-Wachstum:</strong> Copilot-Sidebar in Edge ist Pflicht-Default und liefert Empfehlungen während des Surfens.</li>
        </ul>
      </section>

      <section id="copilot-grundlagen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Bot className="w-7 h-7 text-primary" />
          Wie funktioniert Microsoft Copilot technisch?
        </h2>
        <AnswerBlock question="Wie generiert Microsoft Copilot lokale Empfehlungen?">
          Copilot kombiniert das GPT-Modell mit dem Bing-Index, Bing-Places-Daten, Microsoft-Reviews-Aggregation (Yelp, Tripadvisor, Bing) und — im Business-Kontext — Microsoft-Graph-Daten aus Outlook und Teams. Eine lokale Anfrage löst parallel Index-, Places- und Reviews-Abfragen aus, die das Modell zu einer empfehlungsorientierten Antwort synthetisiert. Anders als Google AI Mode greift Copilot stärker auf strukturierte Daten zurück.
        </AnswerBlock>
        <p className="mt-4">
          Praxis-Beispiel: Ein Nutzer fragt Copilot in Edge „Welche IT-Berater in Hamburg sind auf Microsoft 365 spezialisiert?". Copilot zerlegt die Anfrage, ruft Bing-Index (Websites mit „IT-Beratung Hamburg" + „Microsoft 365"), Bing Places (Unternehmen in Hamburg, Kategorie IT-Dienstleister) und Reviews (Yelp/Tripadvisor) parallel ab — und synthetisiert eine Top-3-Empfehlung mit Begründungen.
        </p>
      </section>

      <section id="bing-places" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Wie richte ich Bing Places korrekt ein?
        </h2>
        <AnswerBlock question="Was sind die wichtigsten Schritte zur Bing-Places-Einrichtung?">
          1) Auf bingplaces.com mit Microsoft-Konto registrieren. 2) Google-Business-Profil-Import nutzen (spart 80 % der Arbeit). 3) NAP, Öffnungszeiten, Kategorien, Fotos und Service-Areas vollständig pflegen. 4) Verifizierung per Postkarte (7–14 Tage) oder Telefon abschließen. 5) Bing Webmaster Tools verbinden und Sitemap einreichen. 6) Monatliche Updates für Frische-Signal.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Schritt</th>
                <th className="border p-3 text-left">Dauer</th>
                <th className="border p-3 text-left">Effekt</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3">GBP-Import</td><td className="border p-3">15 Min.</td><td className="border p-3">Basisdaten übernommen</td></tr>
              <tr><td className="border p-3">Manuelle Ergänzung</td><td className="border p-3">30 Min.</td><td className="border p-3">Bing-spezifische Felder gefüllt</td></tr>
              <tr><td className="border p-3">Verifizierung</td><td className="border p-3">7–14 Tage</td><td className="border p-3">Listing aktiv und indexierbar</td></tr>
              <tr><td className="border p-3">Webmaster-Tools-Setup</td><td className="border p-3">20 Min.</td><td className="border p-3">Crawl- und Indexstatus messbar</td></tr>
              <tr><td className="border p-3">Sitemap-Einreichung</td><td className="border p-3">5 Min.</td><td className="border p-3">Schnellere Indexierung</td></tr>
              <tr><td className="border p-3">Monatliche Updates</td><td className="border p-3">laufend</td><td className="border p-3">Frische-Signal an Copilot</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Welche Signale gewichtet Microsoft Copilot?
        </h2>
        <AnswerBlock question="Welche Ranking-Signale nutzt Microsoft Copilot für lokale Empfehlungen?">
          Sechs Faktoren: 1) Bing-Places-Vollständigkeit und Verifizierungsstatus. 2) Bing-Index-Status der Website (crawlbar, indexiert, schema-valide). 3) Strukturierte Daten (LocalBusiness, FAQ, Service-Schema). 4) Bewertungssignale aus Bing, Yelp und Tripadvisor. 5) Microsoft-Reviews-Aggregation über alle Drittportale. 6) Crawl-Freundlichkeit für Bingbot und OAI-SearchBot. Backlinks zählen weniger als bei Google, semantische Tiefe und Schema mehr.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Bing Places Vollständigkeit (~25 %):</strong> Alle Felder ausgefüllt, regelmäßige Updates, Service-Areas präzise.</li>
          <li><strong>Index-Status (~20 %):</strong> Indexierbar, schema-valide, keine Crawl-Errors.</li>
          <li><strong>Strukturierte Daten (~20 %):</strong> LocalBusiness + FAQ + Service Schema.</li>
          <li><strong>Reviews (~15 %):</strong> Mindestens 20 Bing-Reviews oder gepflegte Yelp/Tripadvisor-Profile.</li>
          <li><strong>Multi-Source-Konsistenz (~10 %):</strong> NAP über Bing, Yelp, Tripadvisor, Website identisch.</li>
          <li><strong>Crawl-Freundlichkeit (~10 %):</strong> Bingbot in robots.txt erlaubt, schnelle Ladezeit, mobile-ready.</li>
        </ul>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Plan für Microsoft Copilot Sichtbarkeit
        </h2>
        <AnswerBlock question="Wie optimiere ich systematisch für Bing und Microsoft Copilot?">
          1) Bing Places einrichten und verifizieren. 2) Bing Webmaster Tools verbinden und Sitemap einreichen. 3) robots.txt für Bingbot, OAI-SearchBot und PerplexityBot freigeben. 4) LocalBusiness- und FAQ-Schema implementieren. 5) Yelp- und Tripadvisor-Profile pflegen — Microsoft aggregiert beide. 6) Monatliche Bing-Places-Updates für Frische-Signal. 7) Test-Prompts in Copilot durchführen und Lücken schließen.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>Bing Places aktivieren:</strong> bingplaces.com → Microsoft-Konto → Google-Business-Profil-Import → vollständige Pflege → Verifizierung.
          </li>
          <li>
            <strong>Webmaster Tools verbinden:</strong> bing.com/webmasters → Property hinzufügen → Sitemap einreichen → Crawl-Errors prüfen.
          </li>
          <li>
            <strong>robots.txt anpassen:</strong> Bingbot, OAI-SearchBot, PerplexityBot und ClaudeBot explizit erlauben. Vorlage siehe <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link>.
          </li>
          <li>
            <strong>Schema-Audit:</strong> LocalBusiness, FAQ, Service, Review und BreadcrumbList implementieren. Microsoft validiert strenger als Google.
          </li>
          <li>
            <strong>Drittportale pflegen:</strong> Yelp und Tripadvisor aktiv halten. Microsoft aggregiert deren Daten direkt in Copilot.
          </li>
          <li>
            <strong>Monatliche Updates:</strong> Mindestens 1 Foto, 1 Post oder 1 Q&A-Antwort pro Monat in Bing Places.
          </li>
          <li>
            <strong>Test & Iteration:</strong> Monatlich 5 Test-Prompts in Edge-Copilot und bing.com mit deinen Top-Keywords. Lücken sofort schließen.
          </li>
        </ol>
        <p className="mt-6">
          Kombiniere diese Schritte mit der <Link to="/blog/chatgpt-search-lokale-unternehmen-2026" className="text-primary underline">ChatGPT-Search-Optimierung</Link> und der <Link to="/blog/google-ai-mode-local-seo-2026" className="text-primary underline">Google-AI-Mode-Strategie</Link> für ein vollständiges AI-Sichtbarkeits-Setup.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich Copilot-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Welche Metriken zeigen Copilot-Sichtbarkeit?">
          Drei Datenquellen: 1) Bing Webmaster Tools (Impressionen, Klicks, durchschnittliche Position). 2) Manuelle Test-Prompts in Copilot (Edge, Bing, Windows-App) mit Top-10-Keywords. 3) Referrer-Traffic von bing.com und edgeservices.bing.com in Analytics. Microsoft hat den „AI Mentions"-Report für Webmaster Tools angekündigt — ab Mitte 2026 verfügbar.
        </AnswerBlock>
        <p className="mt-4">
          Aggregiere die Daten mit dem <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link>, um Copilot-Performance gegen ChatGPT Search, Perplexity und Google AI Mode zu vergleichen.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern Copilot-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei der Bing- und Copilot-Optimierung?">
          1) Bingbot in robots.txt unbewusst blockiert. 2) Bing Places nicht verifiziert oder unvollständig. 3) Yelp- und Tripadvisor-Profile ignoriert — Microsoft nutzt sie als Hauptquelle. 4) Kein LocalBusiness-Schema oder fehlerhaftes Markup. 5) NAP-Inkonsistenzen zwischen Bing, Google und Drittportalen. Wer alle fünf Punkte beseitigt, wird typisch 4–6 Wochen später in Copilot zitiert.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Bingbot-Blockade:</strong> Pauschale Disallow-Regeln blockieren auch Bingbot — schlecht für AI-Sichtbarkeit.</li>
          <li><strong>Unvollständige Bing Places:</strong> Lücken kosten direkt Ranking im Copilot.</li>
          <li><strong>Yelp/Tripadvisor-Vernachlässigung:</strong> Microsoft synthetisiert beide. Wer dort nicht aktiv ist, fehlt im Sentiment-Signal.</li>
          <li><strong>Schema-Lücken:</strong> Ohne LocalBusiness und FAQ fehlt Copilot der strukturierte Kontext.</li>
          <li><strong>NAP-Inkonsistenz:</strong> Unterschiedliche Adressen oder Öffnungszeiten zwischen Quellen verwirren das Entity-Modell.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Bing- und Copilot-Sichtbarkeit prüfen lassen</h3>
        <p className="mb-4">
          Unser AI-Sichtbarkeits-Audit prüft Bing-Index-Status, Bing Places, Schema, Drittportal-Konsistenz und Copilot-Ranking — mit konkretem Aktionsplan für DACH-Unternehmen.
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

export default BingCopilotLocalSeo2026;