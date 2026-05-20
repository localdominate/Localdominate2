import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PerplexityClaudeLokaleSichtbarkeit = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("perplexity-claude-lokale-sichtbarkeit", language);
  if (!article) return null;

  const tocItems = [
    { id: "perplexity", title: "Perplexity verstehen" },
    { id: "claude", title: "Claude verstehen" },
    { id: "vergleich", title: "Vergleich: Perplexity vs. Claude" },
    { id: "optimierung", title: "Optimierungs-Strategie" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Lohnt sich Perplexity für lokale Unternehmen?", answer: "Ja, besonders für YMYL-Branchen (Gesundheit, Recht, Finanzen). Perplexity zeigt Quellen sehr prominent — wer zitiert wird, gewinnt direkt Vertrauen." },
    { question: "Empfiehlt Claude lokale Unternehmen?", answer: "Ja, vor allem über das Web-Search-Feature. Claude bevorzugt strukturierte, faktenbasierte Inhalte mit klarer Quellenangabe." },
    { question: "Brauche ich unterschiedliche Optimierungen für beide?", answer: "Nein. Die Basis-Optimierung (Schema, NAP, AnswerBlocks, llms.txt) wirkt für beide. Unterschiede liegen eher in der Content-Tiefe." },
    { question: "Wachsen Perplexity und Claude weiter?", answer: "Ja. Beide gewinnen 2026 deutlich an Nutzerzahlen — insbesondere bei recherche-affinen Zielgruppen." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Neben ChatGPT und Gemini gewinnen <strong>Perplexity</strong> und <strong>Claude</strong> 2026 deutlich an Bedeutung. Beide funktionieren anders als Google — und erfordern eine eigene Optimierungs-Strategie für lokale Sichtbarkeit.
      </p>

      <KeyTakeawaysBox items={[
        "Perplexity zeigt Quellen prominent — Citations sind Pflicht",
        "Claude bevorzugt strukturierte, faktenbasierte Antworten",
        "Beide Plattformen lesen llms.txt und Schema-Markup",
        "AnswerBlocks mit Quellenangabe erhöhen Zitierbarkeit",
        "Tracking via Referrer-Traffic in Analytics"
      ]} />

      <section id="perplexity" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Globe className="w-7 h-7 text-primary" />Perplexity verstehen</h2>
        <AnswerBlock question="Wie wählt Perplexity lokale Quellen aus?">
          Perplexity nutzt eine Kombination aus eigener Web-Crawling-Infrastruktur und Bing-Index. Für lokale Empfehlungen priorisiert die Plattform Inhalte mit klaren Faktenstrukturen, transparenten Autoren-Angaben und etablierten Citations. Jede Antwort zeigt direkte Quellenlinks — wer zitiert wird, gewinnt sofort Traffic.
        </AnswerBlock>
      </section>

      <section id="claude" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><BookOpen className="w-7 h-7 text-primary" />Claude verstehen</h2>
        <p className="mb-4">Claude (von Anthropic) ist qualitativ eines der stärksten Modelle — besonders bei nuancierten Empfehlungen. Mit Web-Search-Feature greift Claude auf Live-Inhalte zu. Für lokale Sichtbarkeit zählen klar strukturierte Inhalte, vollständige NAP-Daten und faktenbasierte AnswerBlocks.</p>
      </section>

      <section id="vergleich" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Vergleich: Perplexity vs. Claude</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead><tr className="bg-muted"><th className="border p-3 text-left">Dimension</th><th className="border p-3 text-left">Perplexity</th><th className="border p-3 text-left">Claude</th></tr></thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Quellen-Anzeige</td><td className="border p-3">Sehr prominent</td><td className="border p-3">Bei Web-Search aktiv</td></tr>
              <tr><td className="border p-3 font-semibold">Lokale Tiefe</td><td className="border p-3">Mittel</td><td className="border p-3">Mittel</td></tr>
              <tr><td className="border p-3 font-semibold">Optimierungs-Hebel</td><td className="border p-3">Citations, Faktendichte</td><td className="border p-3">Strukturierte Antworten</td></tr>
              <tr><td className="border p-3 font-semibold">Traffic-Wert</td><td className="border p-3">Direkter Klick-Traffic</td><td className="border p-3">Brand Awareness</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="optimierung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Optimierungs-Strategie</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>llms.txt + ai.txt im Root hinterlegen (Crawler-Zugriff klären)</li>
          <li>AnswerBlocks mit Quellenangabe in jeden Blogartikel einbauen</li>
          <li>Schema-Markup vollständig pflegen (LocalBusiness + FAQPage + Article)</li>
          <li>Citations auf Branchenportalen und in Fachmedien ausbauen</li>
          <li>Referrer-Traffic von perplexity.ai und claude.ai monatlich tracken</li>
        </ol>
        <p className="mt-6">Starte mit unserem <Link to="/ai-visibility-audit" className="text-primary underline">AI-Sichtbarkeits-Audit</Link>, um deine Basis-Werte zu erfassen.</p>
      </section>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default PerplexityClaudeLokaleSichtbarkeit;