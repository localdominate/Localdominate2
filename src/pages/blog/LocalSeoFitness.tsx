import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoFitness = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-fitness", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "saisonale-keywords", title: "Saisonale Keywords" },
    { id: "google-business", title: "Google Business" },
    { id: "content", title: "Foto & Video" },
    { id: "bewertungen", title: "Bewertungen" },
    { id: "partnerschaften", title: "Lokale Partner" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Branchenguide 
        für Fitnessstudios und Personal Trainer – mit saisonalen Keywords, 
        Foto-Strategien und Tipps zur Mitgliedergewinnung.
      </p>

      <ArticleCTA 
        title="Local SEO für Ihr Studio"
        description="Füllen Sie Ihr Fitnessstudio mit neuen Mitgliedern."
      />

      <section id="saisonale-keywords" className="mb-12">
        <h2>Saisonale Keywords nutzen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Neujahr, Sommer-Body – 
          saisonale Keyword-Strategien.
        </p>
      </section>

      <section id="google-business" className="mb-12">
        <h2>Google Business für Fitnessstudios</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Kategorien, Attribute, 
          Öffnungszeiten und Posts.
        </p>
      </section>

      <section id="content" className="mb-12">
        <h2>Foto & Video Strategie</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Vorher-Nachher Content, 
          Trainer-Videos, Studio-Fotos.
        </p>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2>Bewertungen & Testimonials</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Mitglieder-Bewertungen sammeln 
          und Erfolgsgeschichten teilen.
        </p>
      </section>

      <section id="partnerschaften" className="mb-12">
        <h2>Lokale Partnerschaften</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Kooperationen mit lokalen 
          Unternehmen und Vereinen.
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

export default LocalSeoFitness;
