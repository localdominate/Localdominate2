import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const SchemaMarkupLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("schema-markup-local-seo", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "local-business", title: "LocalBusiness Schema" },
    { id: "oeffnungszeiten", title: "Öffnungszeiten" },
    { id: "faq-schema", title: "FAQ Schema" },
    { id: "review-schema", title: "Review Schema" },
    { id: "testing", title: "Testing & Debugging" },
    { id: "generator", title: "Schema Generator" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der komplette 
        Implementierungsguide für Schema Markup – mit Code-Beispielen, 
        Testing-Tools und einem interaktiven Schema Generator.
      </p>

      <ArticleCTA />

      <section id="local-business" className="mb-12">
        <h2>LocalBusiness Schema</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Alle LocalBusiness-Varianten erklärt 
          (Restaurant, Store, LocalBusiness, etc.).
        </p>
      </section>

      <section id="oeffnungszeiten" className="mb-12">
        <h2>Öffnungszeiten, Service-Areas</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: OpeningHoursSpecification, 
          areaServed, priceRange.
        </p>
      </section>

      <section id="faq-schema" className="mb-12">
        <h2>FAQ Schema</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: FAQPage Schema für lokale Seiten 
          mit Code-Beispielen.
        </p>
      </section>

      <section id="review-schema" className="mb-12">
        <h2>Review Schema</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: AggregateRating und Review Schema 
          richtig einsetzen.
        </p>
      </section>

      <section id="testing" className="mb-12">
        <h2>Testing & Debugging</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Rich Results Test, 
          Schema Markup Validator nutzen.
        </p>
      </section>

      <section id="generator" className="mb-12">
        <h2>Interaktiver Schema Generator</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Schema Generator Tool 
          (LocalBusiness, FAQ, Reviews).
        </p>
      </section>

      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen</h2>
        <p className="text-muted-foreground">
          FAQ-Sektion wird ergänzt.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default SchemaMarkupLocalSeo;
