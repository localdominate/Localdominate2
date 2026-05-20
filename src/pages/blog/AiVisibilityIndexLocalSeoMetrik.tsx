import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const AiVisibilityIndexLocalSeoMetrik = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ai-visibility-index-local-seo-metrik", language);
  if (!article) return null;

  const tocItems = [
    { id: "definition", title: "Was ist der AI Visibility Index?" },
    { id: "pillars", title: "Die 5 Pillars" },
    { id: "berechnung", title: "Berechnung & Skala" },
    { id: "verbessern", title: "So verbesserst du deinen Index" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Ist der AI Visibility Index eine offizielle Google-Metrik?", answer: "Nein. Es ist eine proprietäre Metrik von Local Dominator, die die Sichtbarkeit über alle relevanten AI-Suchmaschinen in einer einzigen Skala bündelt." },
    { question: "Welcher Wert ist gut?", answer: "Über 70/100 gilt als stark, 50–70 als solide Basis mit Optimierungspotenzial, unter 50 als kritisch." },
    { question: "Wie oft sollte ich den Index messen?", answer: "Monatlich. AI-Plattformen ändern Crawl- und Ranking-Logik schneller als klassisches Google-SEO." },
    { question: "Ersetzt der Index mein Google-Ranking-Tracking?", answer: "Nein, er ergänzt es. Klassische Rankings bleiben relevant — der Index zeigt zusätzlich die AI-Search-Dimension." },
  ];

  const pillars = [
    { name: "Entity Authority", desc: "Klarheit & Konsistenz deiner Unternehmensidentität", weight: "25 %" },
    { name: "Citation Density", desc: "Erwähnungen in Verzeichnissen & Branchenportalen", weight: "20 %" },
    { name: "Review Velocity", desc: "Tempo & Qualität neuer Bewertungen", weight: "20 %" },
    { name: "Schema Coverage", desc: "Anteil korrekt strukturierter Daten", weight: "20 %" },
    { name: "AI Retrievability", desc: "Wie leicht LLMs deine Inhalte zitieren können", weight: "15 %" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Klassische Rankings reichen 2026 nicht mehr. Wer wissen will, wie sichtbar das eigene Unternehmen in <strong>Google AI Overviews, ChatGPT, Gemini, Perplexity und Claude</strong> ist, braucht eine neue Metrik. Der <strong>AI Visibility Index™</strong> bündelt alle relevanten Signale in einer einzigen 0–100-Skala.
      </p>

      <KeyTakeawaysBox items={[
        "Der AI Visibility Index misst Sichtbarkeit über alle AI-Suchmaschinen",
        "Skala: 0–100, basierend auf 5 gewichteten Pillars",
        "Über 70 = stark, unter 50 = akuter Handlungsbedarf",
        "Monatliche Messung empfohlen",
        "Ergänzt — ersetzt nicht — klassisches Ranking-Tracking"
      ]} />

      <section id="definition" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Gauge className="w-7 h-7 text-primary" />Was ist der AI Visibility Index?</h2>
        <AnswerBlock question="Was misst der AI Visibility Index?">
          Der AI Visibility Index ist eine zusammengesetzte Metrik (Skala 0–100), die misst, wie sichtbar ein lokales Unternehmen in AI-generierten Antworten von ChatGPT, Gemini, Perplexity, Claude und Google AI Overviews ist. Er kombiniert fünf gewichtete Pillars: Entity Authority, Citation Density, Review Velocity, Schema Coverage und AI Retrievability.
        </AnswerBlock>
      </section>

      <section id="pillars" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 5 Pillars</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map(p => (
            <div key={p.name} className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">{p.name}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{p.weight}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="berechnung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><BarChart3 className="w-7 h-7 text-primary" />Berechnung & Skala</h2>
        <p className="mb-4">Jeder Pillar wird auf 0–100 normiert und anschließend mit seinem Gewicht multipliziert. Die Summe ergibt den Gesamt-Index. Beispiel: Wer in allen Pillars 80/100 erreicht, hat einen AI Visibility Index von 80.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>0–49:</strong> Critical — Unsichtbar in AI-Suche</li>
          <li><strong>50–69:</strong> Foundational — Basis vorhanden, kein konstantes Zitieren</li>
          <li><strong>70–84:</strong> Strong — Regelmäßige AI-Citations</li>
          <li><strong>85–100:</strong> Dominant — Kategorie-Autorität in AI-Antworten</li>
        </ul>
      </section>

      <section id="verbessern" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">So verbesserst du deinen Index</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Schema-Coverage auf 90 %+ ausbauen (alle Service-Seiten + FAQPage)</li>
          <li>Review Velocity steigern: 4+ neue Bewertungen pro Monat</li>
          <li>Citations über Branchenportale ausweiten</li>
          <li>AnswerBlocks in jeden wichtigen Blogartikel integrieren</li>
          <li>Entity Authority durch konsistente NAP + Wikidata-Eintrag stärken</li>
        </ol>
        <p className="mt-6">Berechne deinen aktuellen Index mit unserem kostenlosen <Link to="/ai-visibility-audit" className="text-primary underline">AI-Sichtbarkeits-Audit</Link>.</p>
      </section>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default AiVisibilityIndexLocalSeoMetrik;