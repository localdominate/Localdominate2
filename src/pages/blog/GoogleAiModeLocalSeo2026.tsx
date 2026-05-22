import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, Search, Layers, MapPin, AlertTriangle, ListChecks, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "google-ai-mode-local-seo-2026";

const GoogleAiModeLocalSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "was-ist-ai-mode", title: "Was ist Google AI Mode?" },
    { id: "unterschied-overviews", title: "AI Mode vs. AI Overviews" },
    { id: "wie-funktioniert", title: "Wie funktioniert Query Fan-Out?" },
    { id: "ranking-signale", title: "Ranking-Signale im AI Mode" },
    { id: "strategie", title: "7-Schritte-Optimierung" },
    { id: "messung", title: "Wie messe ich AI-Mode-Sichtbarkeit?" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist Google AI Mode und wie unterscheidet er sich von AI Overviews?",
      answer:
        'Google AI Mode ist ein dedizierter, Gemini-gestützter Suchmodus, der mehrstufige Fragen in einem Chat-ähnlichen Interface beantwortet. Im Gegensatz zu AI Overviews (kurze Antwortblöcke über klassischen Suchergebnissen) führt AI Mode komplette Konversationen mit Follow-up-Fragen, vergleichenden Tabellen und tiefer lokaler Kontextualisierung. AI Mode rollt 2025/2026 schrittweise in der DACH-Region aus.',
    },
    {
      question: "Wird mein Unternehmen automatisch im Google AI Mode erscheinen?",
      answer:
        'Nein. Nur Unternehmen mit konsistenten Entity-Daten (Google Business Profil + Schema + Wikidata), strukturierten Inhalten (FAQ-Schema, Listicles, klare Antwortabsätze) und hoher topischer Autorität werden vom Query-Fan-Out-Algorithmus aufgegriffen. Klassisches Top-3-Ranking reicht nicht — Gemini bewertet semantische Relevanz, nicht Backlink-Stärke allein.',
    },
    {
      question: "Welche Signale nutzt Google AI Mode für lokale Empfehlungen?",
      answer:
        'Sechs Hauptsignale: 1) Google Business Profil-Vollständigkeit und Aktualität. 2) Bewertungsvolumen und Sentiment-Analyse. 3) LocalBusiness/FAQ-Schema. 4) Entity-Konsistenz über Wikidata, Wikipedia und Branchenportale. 5) Strukturierte Antwortabsätze (40–60 Wörter). 6) Topische Tiefe der Website (Hub & Spoke-Architektur). Frische Inhalte werden bevorzugt — Gemini gewichtet Aktualisierungsdatum stärker als klassische Suche.',
    },
    {
      question: "Verliere ich Traffic, wenn AI Mode meine Antworten zeigt?",
      answer:
        'Kurzfristig sinken Klickraten auf Informational-Queries um 15–25 %, weil Nutzer direkte Antworten erhalten. Mittelfristig profitieren Unternehmen, die im AI Mode genannt werden — die verbleibenden Klicks sind höher qualifiziert und konvertieren 2–3-mal besser. Strategie: weniger Top-of-Funnel-Content, mehr Bottom-of-Funnel (Vergleich, Preise, Standortdetails).',
    },
    {
      question: "Wie schnell muss ich auf AI Mode reagieren?",
      answer:
        'Sofort. Google rollt AI Mode 2026 in DACH global aus, und Optimierungen wirken mit 4–8 Wochen Verzögerung. Wer jetzt strukturierte Inhalte, Schema und ein vollständiges Google Business Profil aufbaut, ist sichtbar, sobald AI Mode bei deinen Kunden aktiviert wird. Wer wartet, verliert Marktanteile an proaktive Wettbewerber.',
    },
    {
      question: "Welche Inhaltsformate funktionieren im AI Mode am besten?",
      answer:
        'Vergleichstabellen, FAQ-Sektionen, Schritt-für-Schritt-Anleitungen, „Wie funktioniert X?"-Erklärungen und Preisübersichten. AI Mode extrahiert Tabellen besonders gut. Vermeide reine Marketing-Texte ohne Daten — Gemini bewertet diese als „Low Information Density" und ignoriert sie.',
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Google AI Mode ist der bisher tiefste Umbruch der Suchmaschine seit ihrer Einführung. Während klassische Suche Links liefert und AI Overviews kurze Zusammenfassungen, führt der von Gemini gestützte AI Mode komplette Konversationen — mit Follow-up-Fragen, Vergleichstabellen und lokal kontextualisierten Empfehlungen. Für DACH-Unternehmen wird er 2026 zur kritischen Sichtbarkeitsquelle. Dieser Guide zeigt, wie du jetzt vorbereitest, was Gemini bewertet und welche 7 Schritte deine AI-Mode-Sichtbarkeit messbar steigern.
      </p>

      <KeyTakeawaysBox
        items={[
          "Google AI Mode ist ein Gemini-gestützter, konversationaler Suchmodus mit Query Fan-Out",
          "Im Gegensatz zu AI Overviews führt AI Mode mehrstufige Dialoge mit Vergleichen und Tabellen",
          "Klassisches Top-3-Ranking reicht nicht — Gemini bewertet Entity-Konsistenz und semantische Tiefe",
          "FAQ-Schema, LocalBusiness-Schema und Wikidata-Verknüpfungen sind die wichtigsten Trust-Signale",
          "Aktualisierungsdatum wird stärker gewichtet als in klassischer Suche — Frische schlägt Backlinks",
          "Klickraten sinken kurzfristig 15–25 %, verbleibende Klicks konvertieren 2–3× besser",
        ]}
      />

      <section id="was-ist-ai-mode" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Brain className="w-7 h-7 text-primary" />
          Was ist Google AI Mode genau?
        </h2>
        <AnswerBlock question="Was ist der Google AI Mode und wie funktioniert er?">
          Google AI Mode ist ein dedizierter Suchmodus, der von Googles Gemini-Modell gesteuert wird. Statt Linklisten oder kurzer AI-Overview-Blöcke liefert er konversationale Antworten mit Follow-up-Fragen, integrierten Vergleichen, Karten und kontextueller Lokalisierung. Nutzer aktivieren ihn über einen „AI Mode"-Tab in der Google-Suche oder direkt über die Google-App. Der Rollout in DACH erfolgt schrittweise 2025/2026.
        </AnswerBlock>
        <p className="mt-4">
          Im AI Mode tippt ein Nutzer in München beispielsweise: „Ich suche einen Steuerberater, der sich auf Freiberufler spezialisiert hat, in der Nähe vom Marienplatz, mit guten Bewertungen und der digital arbeitet." Gemini zerlegt diese Anfrage in mehrere Teilfragen (Query Fan-Out), recherchiert parallel und liefert eine strukturierte Empfehlungsliste mit 3–5 Anbietern, Begründungen und direkter Vergleichsmöglichkeit.
        </p>
      </section>

      <section id="unterschied-overviews" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          Wie unterscheidet sich AI Mode von AI Overviews?
        </h2>
        <AnswerBlock question="Was ist der Unterschied zwischen Google AI Mode und AI Overviews?">
          AI Overviews sind kurze, automatisch generierte Antwortblöcke über klassischen Suchergebnissen — eine Ergänzung der Suche. AI Mode ist ein eigener Modus mit konversationalem Interface, mehrstufigen Dialogen, Vergleichen und vollständig integrierten lokalen Daten. Overviews zeigen 3–5 Quellen, AI Mode kann 10–20 Quellen synthetisieren. Beide laufen parallel, optimieren sich aber unterschiedlich.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Merkmal</th>
                <th className="border p-3 text-left">AI Overviews</th>
                <th className="border p-3 text-left">AI Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Interface</td><td className="border p-3">Block über Suchergebnissen</td><td className="border p-3">Eigener Chat-Modus</td></tr>
              <tr><td className="border p-3 font-semibold">Antwortlänge</td><td className="border p-3">3–5 Sätze</td><td className="border p-3">Mehrere Absätze + Tabellen</td></tr>
              <tr><td className="border p-3 font-semibold">Follow-ups</td><td className="border p-3">Nein</td><td className="border p-3">Ja, mehrstufig</td></tr>
              <tr><td className="border p-3 font-semibold">Quellenanzahl</td><td className="border p-3">3–5</td><td className="border p-3">10–20+</td></tr>
              <tr><td className="border p-3 font-semibold">Lokaler Kontext</td><td className="border p-3">Begrenzt</td><td className="border p-3">Tiefe Maps-Integration</td></tr>
              <tr><td className="border p-3 font-semibold">Vergleichstabellen</td><td className="border p-3">Selten</td><td className="border p-3">Standard</td></tr>
              <tr><td className="border p-3 font-semibold">Modell</td><td className="border p-3">Gemini Flash</td><td className="border p-3">Gemini Pro / Thinking</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">Stand Mai 2026, basierend auf öffentlichen Google-Ankündigungen und eigenen Tests.</p>
        </div>
      </section>

      <section id="wie-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Search className="w-7 h-7 text-primary" />
          Was ist Query Fan-Out und warum ist es wichtig?
        </h2>
        <AnswerBlock question="Wie funktioniert Query Fan-Out im Google AI Mode?">
          Query Fan-Out ist die Technik, mit der Gemini eine komplexe Nutzeranfrage in 5–15 parallele Teilanfragen zerlegt. Für „Italiener in Berlin mit Außenplätzen und guten veganen Optionen" werden separate Searches für Italiener, Außenplätze, vegane Karten, Bewertungen, Öffnungszeiten und Lage parallel ausgeführt. Das Ergebnis wird synthetisiert. Konsequenz: Wer nur für ein Keyword rankt, wird nicht zitiert — gefragt ist topische Tiefe.
        </AnswerBlock>
        <p className="mt-4">
          Das verändert Local SEO grundlegend: Ein Restaurant muss nicht nur für „Italiener Berlin" auffindbar sein, sondern auch für jede Eigenschaft, die ein Kunde fragen könnte — Außenplätze, Allergene, Reservierungsmöglichkeit, Parkplatz, barrierefrei. Jede dieser Eigenschaften muss in strukturierten Daten und auf der Website beantwortet werden. Hier hilft die <Link to="/blog/schema-strategie-ai-retrieval" className="text-primary underline">Schema-Strategie für AI Retrieval</Link>.
        </p>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Welche Signale nutzt der AI Mode für lokale Empfehlungen?
        </h2>
        <AnswerBlock question="Welche Ranking-Faktoren gewichtet Google AI Mode für lokale Suchergebnisse?">
          Sechs Hauptsignale: Google Business Profil-Vollständigkeit, Bewertungssentiment, LocalBusiness/FAQ-Schema, Entity-Konsistenz (Wikidata + Branchenportale), strukturierte Antwortabsätze (40–60 Wörter) und topische Tiefe der Website. Frische Inhalte gewichtet Gemini deutlich höher als klassische Suche — Artikel älter als 12 Monate werden seltener zitiert. Backlinks bleiben relevant, aber semantische Relevanz hat sie überholt.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>GBP-Vollständigkeit (Gewichtung ~25%):</strong> Alle Felder ausgefüllt, regelmäßige Updates, Q&A aktiv beantwortet.</li>
          <li><strong>Bewertungssentiment (~20%):</strong> Mindestens 30 Bewertungen, Durchschnitt ≥4,2, professionelle Antworten.</li>
          <li><strong>Strukturierte Daten (~20%):</strong> LocalBusiness + FAQ + Service Schema vollständig implementiert.</li>
          <li><strong>Entity-Konsistenz (~15%):</strong> NAP über Wikidata, Branchenportale und Website identisch.</li>
          <li><strong>Content-Frische (~10%):</strong> Aktualisierungsdatum &lt; 12 Monate, regelmäßiges Review.</li>
          <li><strong>Topische Tiefe (~10%):</strong> Hub-and-Spoke-Architektur mit klaren Pillar-Seiten.</li>
        </ul>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Optimierung für den Google AI Mode
        </h2>
        <AnswerBlock question="Wie optimiere ich meine Website systematisch für den Google AI Mode?">
          1) Google Business Profil zu 100 % vervollständigen. 2) LocalBusiness- und FAQ-Schema implementieren. 3) Wikidata-Eintrag erstellen oder pflegen. 4) Bestehende Inhalte mit Antwortblöcken (40–60 Wörter) strukturieren. 5) Vergleichstabellen und Listicles ergänzen. 6) Alle Top-Seiten innerhalb von 12 Monaten überarbeiten. 7) Q&A-Sektion auf GBP aktiv beantworten. Erste Effekte nach 4–8 Wochen messbar.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>GBP-Vervollständigung:</strong> Jede Attribut-Frage beantworten, Fotos monatlich aktualisieren, Service-Areas präzise definieren, Q&A proaktiv beantworten.
          </li>
          <li>
            <strong>Schema-Audit:</strong> LocalBusiness, FAQ, Service, Review und BreadcrumbList Schema implementieren. Test via <a href="https://search.google.com/test/rich-results" className="text-primary underline" target="_blank" rel="noreferrer">Google Rich Results Test</a>.
          </li>
          <li>
            <strong>Wikidata-Entity:</strong> Eintrag mit Adresse, Branche, Gründungsjahr, Inhaber und Sitelink zur eigenen Website erstellen. Wikidata-QID ist Goldstandard der Entity-Konsistenz.
          </li>
          <li>
            <strong>Content-Strukturierung:</strong> Jede Seite mit klaren H2-Fragen und 40–60-Wort-Antwortabsätzen. Gemini extrahiert genau diese Format-Muster.
          </li>
          <li>
            <strong>Vergleichstabellen ergänzen:</strong> Preise, Leistungen, Standorte, Öffnungszeiten in HTML-Tabellen — Gemini liebt Tabellen.
          </li>
          <li>
            <strong>Content-Refresh:</strong> Alle ranking-relevanten Seiten innerhalb von 12 Monaten überarbeiten. Aktualisierungsdatum sichtbar im Header und im Schema.
          </li>
          <li>
            <strong>GBP-Q&A:</strong> Eigene Q&A-Einträge erstellen (transparent als Inhaber) und Nutzerfragen innerhalb von 24 h beantworten.
          </li>
        </ol>
        <p className="mt-6">
          Wer diese Schritte mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link> und der <Link to="/blog/chatgpt-search-lokale-unternehmen-2026" className="text-primary underline">ChatGPT-Search-Optimierung</Link> kombiniert, deckt 80 % aller AI-Suchquellen ab.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-primary" />
          Wie messe ich AI-Mode-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Mit welchen Metriken kontrolliere ich meine Sichtbarkeit im Google AI Mode?">
          Drei Datenquellen: 1) Google Search Console — neuer „AI Mode"-Filter ab 2026 verfügbar. 2) Monatliche Test-Prompts im AI Mode mit deinen Top-10-Keywords — wirst du genannt? 3) Referrer-Traffic von google.com mit AI-Mode-Parametern (ai_mode=true). Ergänze diese Daten mit dem AI Visibility Index für ein vollständiges Bild über alle AI-Plattformen hinweg.
        </AnswerBlock>
        <p className="mt-4">
          Für einen umfassenden Überblick nutze den <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> — er aggregiert AI-Mode, ChatGPT Search, Perplexity, Claude und AI Overviews in einer einzigen Metrik.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern AI-Mode-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei der Optimierung für Google AI Mode?">
          1) Veraltete Inhalte ohne Aktualisierungsdatum — Gemini ignoriert sie. 2) Reine Marketing-Texte ohne Daten oder Tabellen. 3) Fehlendes oder fehlerhaftes Schema. 4) GBP-Profil mit Lücken (Service-Areas, Attribute, Q&A). 5) Keyword-Fokus statt Themen-Tiefe — Query Fan-Out fordert breite topische Abdeckung. Wer diese Fehler eliminiert, gewinnt 4–8 Wochen nach Optimierung sichtbare Reichweite.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Veralteter Content:</strong> Artikel ohne Update-Datum &gt; 12 Monate werden im AI Mode kaum zitiert.</li>
          <li><strong>Marketing-Floskeln:</strong> „Wir sind die Besten" hat keine Information Density — Gemini ignoriert es.</li>
          <li><strong>Fehlendes Schema:</strong> Ohne LocalBusiness und FAQ-Schema fehlt Gemini der strukturierte Kontext.</li>
          <li><strong>GBP-Lücken:</strong> Unausgefüllte Felder kosten direkt Sichtbarkeit im AI Mode.</li>
          <li><strong>Single-Keyword-Fokus:</strong> Wer nur für ein Keyword rankt, scheitert am Query Fan-Out.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Bereit für den Google AI Mode?</h3>
        <p className="mb-4">
          Unser AI-Sichtbarkeits-Audit prüft, ob deine Website, dein Google Business Profil und deine Entity-Daten für AI Mode, ChatGPT Search und Perplexity optimiert sind — mit konkretem 7-Punkte-Plan.
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

export default GoogleAiModeLocalSeo2026;