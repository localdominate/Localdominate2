import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoFehler = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-fehler", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "technische-fehler", title: "Technische Fehler" },
    { id: "google-business", title: "Google Business Fehler" },
    { id: "content-fehler", title: "Content-Fehler" },
    { id: "bewertungs-fehler", title: "Bewertungs-Fehler" },
    { id: "quiz", title: "Fehler-Diagnose Quiz" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Die 15 häufigsten 
        Local SEO Fehler – mit interaktivem Diagnose-Quiz und sofortigen 
        Lösungen für jedes Problem.
      </p>

      <ArticleCTA />

      <section id="technische-fehler" className="mb-12">
        <h2>Technische Fehler (1-5)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Mobile-Optimierung, 
          Page Speed, Schema Markup, HTTPS.
        </p>
      </section>

      <section id="google-business" className="mb-12">
        <h2>Google Business Fehler (6-10)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Unvollständiges Profil, 
          falsche Kategorie, keine Posts, etc.
        </p>
      </section>

      <section id="content-fehler" className="mb-12">
        <h2>Content-Fehler (11-13)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Fehlende lokale Keywords, 
          dünner Content, keine lokalen Seiten.
        </p>
      </section>

      <section id="bewertungs-fehler" className="mb-12">
        <h2>Bewertungs-Fehler (14-15)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Keine Bewertungsstrategie, 
          unbeantwortete Bewertungen.
        </p>
      </section>

      <section id="quiz" className="mb-12">
        <h2>Interaktives Fehler-Diagnose Quiz</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Quiz-Komponente mit 
          personalisierten Empfehlungen.
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

export default LocalSeoFehler;
