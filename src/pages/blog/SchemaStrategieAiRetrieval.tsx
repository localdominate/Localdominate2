import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Code2, Database } from "lucide-react";
import { Link } from "react-router-dom";

const SchemaStrategieAiRetrieval = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("schema-strategie-ai-retrieval", language);
  if (!article) return null;

  const tocItems = [
    { id: "warum", title: "Warum Schema für AI?" },
    { id: "must-have", title: "Must-have Schema-Typen" },
    { id: "beispiele", title: "Copy-Paste JSON-LD" },
    { id: "fehler", title: "Typische Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Liest ChatGPT JSON-LD?", answer: "Ja. JSON-LD ist das bevorzugte Format für strukturierte Daten und wird von allen großen LLMs verstanden und priorisiert." },
    { question: "Reicht LocalBusiness-Schema?", answer: "Nein. Ergänze immer FAQPage, Service und Article. Diese Kombination liefert die höchste AI-Retrievability." },
    { question: "Wie validiere ich mein Schema?", answer: "Mit dem Schema.org-Validator (validator.schema.org) und dem Google Rich Results Test. Beide sind kostenlos." },
    { question: "Schadet zu viel Schema?", answer: "Nein — solange jedes Markup tatsächlich zum Seiteninhalt passt. Spammy oder irreführende Markup-Inhalte werden bestraft." },
  ];

  const localBusinessJson = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#business",
  "name": "Beispiel-Unternehmen",
  "image": "https://example.com/logo.jpg",
  "url": "https://example.com",
  "telephone": "+49 30 12345678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstr. 1",
    "addressLocality": "Berlin",
    "postalCode": "10115",
    "addressCountry": "DE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.52, "longitude": 13.405 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "127" }
}`;

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        AI-Suchmaschinen wie ChatGPT, Gemini und Perplexity bevorzugen Inhalte, die <strong>maschinenlesbar strukturiert</strong> sind. Schema-Markup (JSON-LD) ist die Brücke zwischen deinem Content und der AI-Interpretation. Hier ist die komplette Strategie — inklusive Copy-Paste-Vorlagen.
      </p>

      <KeyTakeawaysBox items={[
        "JSON-LD ist das bevorzugte Format für AI-Suchmaschinen",
        "5 Must-have Typen: LocalBusiness, Service, FAQPage, Article, BreadcrumbList",
        "Kombiniere Schemas via @id-Verknüpfungen für Entity-Klarheit",
        "Schema validieren: schema.org-Validator + Google Rich Results Test",
        "Falsches oder spammy Markup kann zu Penalties führen"
      ]} />

      <section id="warum" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Database className="w-7 h-7 text-primary" />Warum Schema für AI?</h2>
        <AnswerBlock question="Warum ist Schema-Markup für AI-Suchmaschinen so wichtig?">
          AI-Suchmaschinen müssen aus Web-Inhalten in Millisekunden faktische Antworten generieren. Strukturierte Daten via JSON-LD geben dem Modell maschinenlesbare Fakten: Wer du bist, was du anbietest, wo, zu welchen Zeiten und mit welcher Reputation. Ohne Schema muss die AI raten — mit Schema zitiert sie direkt.
        </AnswerBlock>
      </section>

      <section id="must-have" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Must-have Schema-Typen</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>LocalBusiness</strong> (oder spezifischer Subtyp wie Dentist, Restaurant)</li>
          <li><strong>Service</strong> für jede angebotene Leistung</li>
          <li><strong>FAQPage</strong> mit den 5–8 wichtigsten Kundenfragen</li>
          <li><strong>Article</strong> für jeden Blogbeitrag inkl. Author + datePublished</li>
          <li><strong>BreadcrumbList</strong> für saubere Hierarchie-Signale</li>
        </ol>
      </section>

      <section id="beispiele" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Code2 className="w-7 h-7 text-primary" />Copy-Paste JSON-LD</h2>
        <p className="mb-3 text-sm text-muted-foreground">Minimal-Setup für ein lokales Unternehmen:</p>
        <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto"><code>{localBusinessJson}</code></pre>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Typische Fehler</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Schema enthält Daten, die auf der Seite nicht sichtbar sind</li>
          <li>Mehrere LocalBusiness-Einträge ohne @id-Verknüpfung</li>
          <li>FAQPage mit Marketing-Antworten statt echten Fragen</li>
          <li>Veraltete Schema-Properties (z. B. legacy Review-Format)</li>
        </ul>
        <p className="mt-6">Lass dein Schema-Setup im <Link to="/ai-visibility-audit" className="text-primary underline">AI-Sichtbarkeits-Audit</Link> kostenlos prüfen.</p>
      </section>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default SchemaStrategieAiRetrieval;