import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoCaseStudy = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-case-study-baecker", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "ausgangssituation", title: "Ausgangssituation" },
    { id: "strategie", title: "Die 6-Monats-Strategie" },
    { id: "massnahmen", title: "Maßnahmen im Detail" },
    { id: "ergebnisse", title: "Ergebnisse" },
    { id: "learnings", title: "Lessons Learned" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Eine authentische 
        Erfolgsgeschichte: Wie eine traditionelle Bäckerei durch Local SEO 
        ihre Kundenfrequenz verdreifachte.
      </p>

      <ArticleCTA />

      <section id="ausgangssituation" className="mb-12">
        <h2>Ausgangssituation</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Unsichtbar bei Google, 
          sinkende Kundenfrequenz, Wettbewerbsdruck.
        </p>
      </section>

      <section id="strategie" className="mb-12">
        <h2>Die 6-Monats-Strategie</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Timeline-Animation 
          der Maßnahmen und Ergebnisse.
        </p>
      </section>

      <section id="massnahmen" className="mb-12">
        <h2>Maßnahmen im Detail</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Google Business Optimierung, 
          Bewertungsstrategie, lokale Backlinks.
        </p>
      </section>

      <section id="ergebnisse" className="mb-12">
        <h2>Ergebnisse mit Zahlen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Rankings, Klicks, 
          Anrufe, Umsatzsteigerung.
        </p>
      </section>

      <section id="learnings" className="mb-12">
        <h2>Lessons Learned</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Was funktioniert hat, 
          was nicht, und was du daraus lernen kannst.
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

export default LocalSeoCaseStudy;
