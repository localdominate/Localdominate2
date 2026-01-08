import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const GoogleMapsRankingFaktoren = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-seo-ranking-faktoren", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "proximity", title: "Proximity" },
    { id: "relevance", title: "Relevance" },
    { id: "prominence", title: "Prominence" },
    { id: "20-faktoren", title: "Die 20 Faktoren" },
    { id: "negative-faktoren", title: "Negative Faktoren" },
    { id: "case-study", title: "Case Study" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Die 20 wichtigsten 
        Ranking-Faktoren für Google Maps im Detail – mit interaktivem 
        Ranking-Faktor Gewichtungs-Slider.
      </p>

      <ArticleCTA 
        title="Google Maps Optimierung"
        description="Erreichen Sie Platz 1 im Local Pack."
      />

      <section id="proximity" className="mb-12">
        <h2>Proximity (Nähe)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Wie Google die Entfernung 
          zum Suchenden bewertet.
        </p>
      </section>

      <section id="relevance" className="mb-12">
        <h2>Relevance (Relevanz)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Wie Google die Übereinstimmung 
          mit der Suchanfrage bewertet.
        </p>
      </section>

      <section id="prominence" className="mb-12">
        <h2>Prominence (Bekanntheit)</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Bewertungen, Links, 
          Erwähnungen und Authority.
        </p>
      </section>

      <section id="20-faktoren" className="mb-12">
        <h2>Die 20 wichtigsten Faktoren</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Interaktiver Ranking-Faktor 
          Gewichtungs-Slider.
        </p>
      </section>

      <section id="negative-faktoren" className="mb-12">
        <h2>Negative Ranking-Faktoren</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Was dein Ranking 
          verschlechtert.
        </p>
      </section>

      <section id="case-study" className="mb-12">
        <h2>Case Study: Von Platz 15 auf Platz 1</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Echte Erfolgsgeschichte 
          mit Zahlen.
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

export default GoogleMapsRankingFaktoren;
