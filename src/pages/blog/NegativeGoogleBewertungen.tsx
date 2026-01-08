import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";

const NegativeGoogleBewertungen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("negative-google-bewertungen", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "psychologie", title: "Psychologie" },
    { id: "antwort-struktur", title: "Die perfekte Antwort" },
    { id: "loeschen", title: "Bewertung löschen" },
    { id: "fake-bewertungen", title: "Fake-Bewertungen" },
    { id: "praevention", title: "Prävention" },
    { id: "generator", title: "Antwort-Generator" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Content wird in Kürze veröffentlicht.</strong> Der Guide zum 
        Umgang mit negativen Bewertungen – mit Antwort-Vorlagen und einem 
        interaktiven Antwort-Generator.
      </p>

      <ArticleCTA />

      <section id="psychologie" className="mb-12">
        <h2>Psychologie negativer Bewertungen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Warum Menschen negative 
          Bewertungen schreiben.
        </p>
      </section>

      <section id="antwort-struktur" className="mb-12">
        <h2>Die perfekte Antwort-Struktur</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: HEART-Methode mit 
          vielen Beispielen.
        </p>
      </section>

      <section id="loeschen" className="mb-12">
        <h2>Wann Löschen möglich ist</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Google-Richtlinien, 
          Meldeprozess, rechtliche Möglichkeiten.
        </p>
      </section>

      <section id="fake-bewertungen" className="mb-12">
        <h2>Fake-Bewertungen erkennen</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Anzeichen für gefälschte 
          Bewertungen und wie man sie meldet.
        </p>
      </section>

      <section id="praevention" className="mb-12">
        <h2>Prävention</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Negative Erfahrungen 
          vor der Bewertung abfangen.
        </p>
      </section>

      <section id="generator" className="mb-12">
        <h2>Interaktiver Antwort-Generator</h2>
        <p className="text-muted-foreground">
          Inhalte folgen: Tool zum Generieren 
          professioneller Antworten.
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

export default NegativeGoogleBewertungen;
