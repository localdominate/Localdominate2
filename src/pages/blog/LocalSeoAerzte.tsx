import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoAerzte = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-aerzte-praxen", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "ymyl", title: "YMYL-Anforderungen" },
    { id: "arztportale", title: "Arzt-Bewertungsportale" },
    { id: "keywords", title: "Fachgebiets-Keywords" },
    { id: "google-business", title: "Google Business für Praxen" },
    { id: "bewertungen", title: "Medizinische Bewertungen" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der komplette Guide 
        für Ärzte und medizinische Praxen – mit YMYL-Anforderungen, Arztportalen 
        und Strategien zur Patientengewinnung.
      </p>

      <ArticleCTA />

      <section id="ymyl" className="mb-12">
        <h2>YMYL-Anforderungen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Your Money Your Life – besondere Anforderungen 
          für medizinische Inhalte.
        </p>
      </section>

      <section id="arztportale" className="mb-12">
        <h2>Arzt-Bewertungsportale</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Jameda, Sanego, DocFinder – Profile optimieren 
          und Bewertungen managen.
        </p>
      </section>

      <section id="keywords" className="mb-12">
        <h2>Fachgebiets-Keywords</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Keywords nach Fachgebiet und Behandlungen.
        </p>
      </section>

      <section id="google-business" className="mb-12">
        <h2>Google Business für Praxen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Spezielle Kategorien und Attribute 
          für Arztpraxen.
        </p>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2>Medizinische Bewertungen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Umgang mit Patientenbewertungen, 
          Datenschutz und rechtliche Aspekte.
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

export default LocalSeoAerzte;
