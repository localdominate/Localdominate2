import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoAnwaelte = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-anwaelte-kanzleien", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "rechtsgebiete", title: "Rechtsgebiets-Keywords" },
    { id: "anwaltsportale", title: "Anwaltsportale" },
    { id: "eeat", title: "E-E-A-T für Juristen" },
    { id: "bewertungen", title: "Bewertungsmanagement" },
    { id: "content", title: "Rechtstipps & FAQs" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Branchenguide 
        für Anwaltskanzleien – mit Rechtsgebiets-Keywords, Anwaltsportalen 
        und E-E-A-T-Strategien.
      </p>

      <ArticleCTA />

      <section id="rechtsgebiete" className="mb-12">
        <h2>Rechtsgebiets-Keywords</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Keywords für Familienrecht, Arbeitsrecht, 
          Strafrecht und weitere Rechtsgebiete.
        </p>
      </section>

      <section id="anwaltsportale" className="mb-12">
        <h2>Anwaltsportale</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: anwalt.de, advocado, BRAK – 
          Profile optimieren und nutzen.
        </p>
      </section>

      <section id="eeat" className="mb-12">
        <h2>E-E-A-T für Juristen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Expertise, Experience, Authority, Trust 
          für rechtliche Inhalte.
        </p>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2>Bewertungsmanagement</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Mandantenbewertungen ethisch sammeln 
          und professionell managen.
        </p>
      </section>

      <section id="content" className="mb-12">
        <h2>Rechtstipps & FAQs</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Content-Strategie für Kanzleien, 
          rechtliche Ratgeber erstellen.
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

export default LocalSeoAnwaelte;
