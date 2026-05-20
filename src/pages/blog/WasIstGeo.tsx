import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, Search, Bot, Target } from "lucide-react";
import { Link } from "react-router-dom";

const WasIstGeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("was-ist-geo-generative-engine-optimization", language);
  if (!article) return null;

  const tocItems = [
    { id: "definition", title: "Definition: Was ist GEO?" },
    { id: "geo-vs-seo", title: "GEO vs. SEO" },
    { id: "wie-funktioniert", title: "Wie funktioniert GEO?" },
    { id: "massnahmen", title: "Konkrete GEO-Maßnahmen" },
    { id: "lokale-unternehmen", title: "GEO für lokale Unternehmen" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Was ist GEO?", answer: "GEO (Generative Engine Optimization) ist die Disziplin, Inhalte für AI-Suchmaschinen wie ChatGPT, Gemini, Perplexity und Google AI Overviews zu optimieren, sodass diese Plattformen die eigenen Inhalte in ihren Antworten zitieren." },
    { question: "Ist GEO dasselbe wie SEO?", answer: "Nein. SEO optimiert für Rankings in klassischen Suchergebnissen, GEO optimiert für Zitate und Empfehlungen in AI-generierten Antworten. GEO ergänzt SEO — es ersetzt es nicht." },
    { question: "Brauchen lokale Unternehmen GEO?", answer: "Ja. Über 30% der lokalen Suchanfragen liefern bereits AI Overviews. Lokale Unternehmen, die in diesen Antworten nicht erscheinen, verlieren systematisch Anfragen an die Konkurrenz." },
    { question: "Welche AI-Plattformen sind für GEO am wichtigsten?", answer: "Aktuell: Google AI Overviews (höchster Marktanteil), ChatGPT (schnell wachsend), Gemini (Google-Integration), Perplexity (zitatfreundlich) und Claude (qualitativ stark)." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Klassisches SEO optimiert für blaue Links. Aber 2026 beantworten AI-Suchmaschinen Anfragen direkt — ohne dass Nutzer noch klicken müssen. <strong>GEO (Generative Engine Optimization)</strong> ist die Antwort darauf: die Disziplin, Inhalte so zu strukturieren, dass ChatGPT, Gemini, Perplexity und Google AI Overviews sie in ihren Antworten zitieren.
      </p>

      <KeyTakeawaysBox items={[
        "GEO = Optimierung für AI-Suchmaschinen, nicht für klassische Rankings",
        "Über 30 % der Google-Suchen zeigen 2026 AI Overviews",
        "Strukturierte Daten (JSON-LD) sind die wichtigste GEO-Währung",
        "Lokale Unternehmen profitieren überdurchschnittlich von GEO",
        "GEO ergänzt SEO — beide laufen parallel"
      ]} />

      <section id="definition" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Sparkles className="w-7 h-7 text-primary" />Definition: Was ist GEO?</h2>
        <AnswerBlock question="Was bedeutet Generative Engine Optimization (GEO)?">
          GEO bezeichnet die systematische Optimierung von Webseiten, strukturierten Daten und Off-Page-Signalen mit dem Ziel, in den Antworten generativer AI-Suchmaschinen wie ChatGPT, Google AI Overviews, Gemini, Perplexity und Claude zitiert oder empfohlen zu werden. GEO ergänzt klassisches SEO und setzt auf maschinenlesbare Klarheit, Entity-Authorität und zitatfähige Antwortblöcke.
        </AnswerBlock>
        <p className="mb-4">Der Begriff GEO wurde 2023 von einem Forscherteam der Princeton University geprägt und hat sich seitdem als Standard etabliert. Während klassisches SEO Pagerank, Backlinks und Keyword-Optimierung in den Mittelpunkt stellt, fokussiert GEO auf:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Zitierbarkeit:</strong> kurze, präzise Antwortblöcke (40–60 Wörter)</li>
          <li><strong>Entity Authority:</strong> Klarheit darüber, wer du bist und wofür</li>
          <li><strong>Schema-Markup:</strong> JSON-LD für maschinelle Interpretation</li>
          <li><strong>Quellen-Vertrauen:</strong> Citations aus etablierten Domains</li>
        </ul>
      </section>

      <section id="geo-vs-seo" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">GEO vs. SEO – der Unterschied</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-muted"><th className="border p-3 text-left">Dimension</th><th className="border p-3 text-left">Klassisches SEO</th><th className="border p-3 text-left">GEO</th></tr></thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Ziel</td><td className="border p-3">Top-Ranking in Google</td><td className="border p-3">Zitiert werden in AI-Antworten</td></tr>
              <tr><td className="border p-3 font-semibold">Erfolgsmessung</td><td className="border p-3">Klicks, Positionen, Impressions</td><td className="border p-3">Citations, Mentions, AI Visibility Index</td></tr>
              <tr><td className="border p-3 font-semibold">Kerntechnik</td><td className="border p-3">Backlinks, Content-Tiefe</td><td className="border p-3">Strukturierte Daten, Entity-Klarheit</td></tr>
              <tr><td className="border p-3 font-semibold">Content-Format</td><td className="border p-3">Long-Form, Pillar Pages</td><td className="border p-3">Antwortblöcke + tiefe Belege</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="wie-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wie funktioniert GEO?</h2>
        <p className="mb-4">AI-Suchmaschinen arbeiten in drei Phasen: <strong>Retrieval</strong> (welche Quellen werden überhaupt durchsucht), <strong>Ranking</strong> (welche Quellen sind am vertrauenswürdigsten) und <strong>Generierung</strong> (wie wird die Antwort formuliert und mit Zitaten versehen). GEO optimiert für alle drei Phasen gleichzeitig.</p>
      </section>

      <section id="massnahmen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Target className="w-7 h-7 text-primary" />Konkrete GEO-Maßnahmen</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>AnswerBlocks einfügen:</strong> 40–60-Wörter-Antworten am Anfang jedes Hauptabschnitts</li>
          <li><strong>JSON-LD ausbauen:</strong> Organization, LocalBusiness, FAQPage, Article, Service</li>
          <li><strong>llms.txt + ai.txt</strong> für saubere Crawler-Kommunikation hinterlegen</li>
          <li><strong>Entity Authority stärken:</strong> Wikidata-Eintrag, konsistente NAP-Daten</li>
          <li><strong>Citations sichern:</strong> Erwähnungen auf Branchenportalen und in Fachartikeln</li>
        </ol>
      </section>

      <section id="lokale-unternehmen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">GEO für lokale Unternehmen</h2>
        <p className="mb-4">Für lokale Unternehmen ist GEO besonders relevant, weil AI Overviews bei Suchen wie „bester Zahnarzt in Berlin" sofort 3–5 Empfehlungen ausspielen. Wer dort nicht erscheint, verliert systematisch Anfragen. Mit unserem <Link to="/ai-visibility-audit" className="text-primary underline">AI-Sichtbarkeits-Audit</Link> erfährst du, wo dein Unternehmen aktuell steht.</p>
      </section>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default WasIstGeo;