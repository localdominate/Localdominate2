import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { useLanguage } from "@/i18n/LanguageContext";

const LocalSeoHotels = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-hotels", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "direktbuchungen", title: "Gegen Booking.com" },
    { id: "hotel-ads", title: "Google Hotel Ads" },
    { id: "saisonale-keywords", title: "Saisonale Keywords" },
    { id: "bewertungen", title: "Bewertungsportale" },
    { id: "schema", title: "Hotel Schema" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Guide für Hotels 
        und Unterkünfte – mit Strategien gegen Buchungsportale, Google Hotel Ads 
        und Tipps für mehr Direktbuchungen.
      </p>

      <BlogCTAABTest articleSlug="local-seo-hotels" position="intro" />

      <section id="direktbuchungen" className="mb-12">
        <h2>Der Kampf gegen Booking.com</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Strategien für mehr Direktbuchungen, 
          Unabhängigkeit von OTAs.
        </p>
      </section>

      <section id="hotel-ads" className="mb-12">
        <h2>Google Hotel Ads</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Free Booking Links, Google Hotel Ads 
          einrichten und optimieren.
        </p>
      </section>

      <section id="saisonale-keywords" className="mb-12">
        <h2>Saisonale Keywords</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Keyword-Strategien für Haupt- und 
          Nebensaison.
        </p>
      </section>

      <section id="bewertungen" className="mb-12">
        <h2>Bewertungsportale</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: TripAdvisor, Google, HolidayCheck – 
          Bewertungen strategisch managen.
        </p>
      </section>

      <section id="schema" className="mb-12">
        <h2>Hotel Schema Markup</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Interaktiver Hotel-SEO Score Calculator.
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

export default LocalSeoHotels;
