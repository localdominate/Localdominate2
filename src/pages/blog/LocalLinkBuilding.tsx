import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalLinkBuilding = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-link-building", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "lokale-quellen", title: "Lokale Link-Quellen" },
    { id: "sponsoring", title: "Sponsoring & Vereine" },
    { id: "presse", title: "Lokale Presse" },
    { id: "verbaende", title: "Branchenverbände" },
    { id: "unlinked-mentions", title: "Unlinked Mentions" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Guide für 
        lokales Link Building – mit kreativen Strategien und einem interaktiven 
        Link-Building Ideen Generator.
      </p>

      <BlogCTAABTest articleSlug="local-link-building" position="intro" />

      <section id="lokale-quellen" className="mb-12">
        <h2>Lokale Link-Quellen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Die besten Quellen für 
          lokale Backlinks identifizieren.
        </p>
      </section>

      <section id="sponsoring" className="mb-12">
        <h2>Sponsoring & Vereine</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Sportvereine, lokale Events, 
          gemeinnützige Organisationen.
        </p>
      </section>

      <section id="presse" className="mb-12">
        <h2>Lokale Presse & Blogger</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Pressemitteilungen, 
          lokale Blogger Relations.
        </p>
      </section>

      <section id="verbaende" className="mb-12">
        <h2>Branchenverbände & Kammern</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: IHK, HWK, Berufsverbände 
          und deren Verzeichnisse.
        </p>
      </section>

      <section id="unlinked-mentions" className="mb-12">
        <h2>Unlinked Brand Mentions</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Interaktiver Link-Building 
          Ideen Generator.
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

export default LocalLinkBuilding;
