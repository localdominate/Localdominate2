import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const MobileLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("mobile-local-seo", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "mobile-first", title: "Mobile-First Indexing" },
    { id: "click-to-call", title: "Click-to-Call" },
    { id: "page-speed", title: "Page Speed" },
    { id: "mobile-ux", title: "Mobile UX" },
    { id: "amp", title: "AMP für Local" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Guide für 
        Mobile Local SEO – warum 80% der lokalen Suchen mobil sind und wie 
        du dafür optimierst.
      </p>

      <ArticleCTA 
        title="Mobile Optimierung"
        description="Machen Sie Ihre lokale Präsenz mobil-freundlich."
      />

      <section id="mobile-first" className="mb-12">
        <h2>Mobile-First Indexing</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Was Mobile-First für lokale 
          Unternehmen bedeutet.
        </p>
      </section>

      <section id="click-to-call" className="mb-12">
        <h2>Click-to-Call & Maps</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Telefon-Links, Maps-Integration, 
          Wegbeschreibungen.
        </p>
      </section>

      <section id="page-speed" className="mb-12">
        <h2>Page Speed Optimierung</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Core Web Vitals für lokale Seiten, 
          Interaktiver Mobile Speed Test.
        </p>
      </section>

      <section id="mobile-ux" className="mb-12">
        <h2>Mobile UX</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Thumb-friendly Design, 
          mobile Formulare, lokale Landingpages.
        </p>
      </section>

      <section id="amp" className="mb-12">
        <h2>AMP für lokale Websites</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Wann AMP sinnvoll ist 
          und wann nicht.
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

export default MobileLocalSeo;
