import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Star, Copy, CheckCircle2, AlertTriangle, FileCode, TestTube,
  MessageSquare, TrendingUp, Eye, Shield, ThumbsUp, ThumbsDown,
  BookOpen, ArrowRight, Zap, Users, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ReviewSchemaImplementierung = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("review-schema-implementierung", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "schema-typen", title: "Review vs. AggregateRating" },
    { id: "aggregate-rating", title: "AggregateRating implementieren" },
    { id: "einzelne-reviews", title: "Einzelne Reviews auszeichnen" },
    { id: "localbusiness-integration", title: "Integration in LocalBusiness" },
    { id: "google-richtlinien", title: "Google-Richtlinien" },
    { id: "first-party-reviews", title: "First-Party vs. Third-Party" },
    { id: "branchenbeispiele", title: "Branchenbeispiele" },
    { id: "rich-results", title: "Rich Results & Sterne" },
    { id: "testing", title: "Testen & Validieren" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was ist Review Schema Markup?", answer: "Review Schema Markup ist ein strukturiertes Datenformat (JSON-LD), das Google hilft, Kundenbewertungen auf Ihrer Website zu verstehen. Es gibt zwei Haupttypen: 'Review' für einzelne Bewertungen und 'AggregateRating' für zusammengefasste Bewertungsdaten (Durchschnitt, Anzahl). Korrekt implementiert, können dadurch Sternebewertungen in den Google-Suchergebnissen erscheinen." },
    { question: "Wie bekomme ich Sterne in den Google-Suchergebnissen?", answer: "Durch korrekte Implementierung von AggregateRating-Schema auf Ihrer Seite. Die Bewertungen müssen echt sein, auf der Seite sichtbar angezeigt werden, und die Schema-Daten müssen mit den sichtbaren Daten übereinstimmen. Google entscheidet letztlich, ob und wann Sterne angezeigt werden – es gibt keine Garantie." },
    { question: "Darf ich Google-Bewertungen im Schema verwenden?", answer: "Ja, aber mit Einschränkungen. Sie können Ihre Google-Bewertungsdaten (Durchschnitt, Anzahl) im AggregateRating verwenden, aber die einzelnen Reviews sollten auf Ihrer Seite sichtbar eingebunden sein. Reine Third-Party-Bewertungen ohne Anzeige auf der eigenen Seite verstoßen gegen Googles Richtlinien." },
    { question: "Was ist der Unterschied zwischen Review und AggregateRating?", answer: "'Review' beschreibt eine einzelne Bewertung mit Autor, Bewertungstext und Sternezahl. 'AggregateRating' fasst mehrere Bewertungen zusammen: Durchschnittswert, Gesamtanzahl und Skala. Für Rich Snippets in den SERPs ist AggregateRating am effektivsten – es zeigt Sterne und Anzahl auf einen Blick." },
    { question: "Können Bewertungs-Sterne mein Ranking verbessern?", answer: "Sterne im Schema sind kein direkter Ranking-Faktor, aber sie erhöhen die Klickrate (CTR) nachweislich um 20-35%. Eine höhere CTR ist ein indirektes Ranking-Signal. Außerdem steigern sichtbare Sterne das Vertrauen und die Conversion-Rate deutlich." },
    { question: "Wie viele Bewertungen brauche ich für Rich Snippets?", answer: "Google gibt keine Mindestanzahl vor, aber in der Praxis zeigen sich Rich Snippets zuverlässiger ab ca. 5-10 Bewertungen. Ein einzelnes Review kann theoretisch ausreichen, ein AggregateRating mit nur 1-2 Bewertungen wirkt wenig vertrauenswürdig und wird seltener angezeigt." },
    { question: "Darf ich selbst geschriebene Bewertungen im Schema verwenden?", answer: "Nein, absolut nicht. Google verbietet ausdrücklich selbst verfasste, gefälschte oder manipulierte Bewertungen im Schema. Verstöße können zu einer manuellen Strafe führen und Rich Snippets dauerhaft deaktivieren. Verwenden Sie nur echte Kundenbewertungen." },
    { question: "Wie halte ich die Bewertungsdaten aktuell?", answer: "Am besten automatisiert: Nutzen Sie ein Plugin oder Script, das die aggregateRating-Werte dynamisch aus Ihrer Bewertungsdatenbank generiert. Manuelle Pflege ist fehleranfällig. Aktualisieren Sie mindestens monatlich, idealerweise bei jeder neuen Bewertung." },
    { question: "Funktioniert Review Schema auch für Dienstleister ohne Ladengeschäft?", answer: "Ja, Review Schema funktioniert für alle Unternehmenstypen. Service-Area-Businesses (Handwerker, Reinigungsdienste etc.) profitieren sogar besonders, weil Sterne-Rich-Snippets Vertrauen schaffen, bevor der Kunde den Dienstleister persönlich trifft." },
    { question: "Was passiert, wenn meine Schema-Daten nicht mit der Seite übereinstimmen?", answer: "Google ignoriert das Schema oder verhängt eine manuelle Strafe. Die Bewertungsdaten im JSON-LD müssen exakt mit den auf der Seite sichtbaren Bewertungen übereinstimmen. Diskrepanzen werden als Spam gewertet und können zum Verlust aller Rich Snippets führen." }
  ];

  const CopyButton = ({ code, label }: { code: string; label?: string }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      toast.success("Code kopiert!");
    };
    return (
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        <Copy className="h-3.5 w-3.5" /> {label || "Kopieren"}
      </Button>
    );
  };

  const aggregateRatingBasic = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#business",
  "name": "Muster Handwerk GmbH",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 42",
    "addressLocality": "München",
    "postalCode": "80331",
    "addressCountry": "DE"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "142",
    "ratingCount": "142"
  }
}`;

  const singleReviewSchema = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#business",
  "name": "Muster Handwerk GmbH",
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria S."
      },
      "datePublished": "2026-02-15",
      "reviewBody": "Sehr professionelle Arbeit! Der Elektriker war pünktlich, freundlich und hat alles sauber hinterlassen. Absolut empfehlenswert.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Thomas K."
      },
      "datePublished": "2026-01-28",
      "reviewBody": "Schnelle Terminvergabe und faire Preise. Kleine Kommunikationsprobleme, aber insgesamt zufrieden.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "reviewCount": "142"
  }
}`;

  const restaurantReviewSchema = `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://example.com/#restaurant",
  "name": "Trattoria Bella Italia",
  "servesCuisine": "Italian",
  "priceRange": "€€",
  "address": { ... },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "reviewCount": "318"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Lisa M." },
      "datePublished": "2026-02-20",
      "reviewBody": "Authentische italienische Küche! Die hausgemachte Pasta ist ein Traum. Gemütliches Ambiente und freundlicher Service.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}`;

  const doctorReviewSchema = `{
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://example.com/#praxis",
  "name": "Dr. med. Anna Schmidt – Hausärztin",
  "medicalSpecialty": "GeneralPractice",
  "address": { ... },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "87"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Patient" },
      "datePublished": "2026-03-01",
      "reviewBody": "Sehr einfühlsame Ärztin, die sich Zeit nimmt. Kurze Wartezeiten und kompetente Beratung.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}`;

  const lawyerReviewSchema = `{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://example.com/#kanzlei",
  "name": "Kanzlei Müller & Partner",
  "address": { ... },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "reviewCount": "53"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Mandant" },
      "datePublished": "2026-02-10",
      "reviewBody": "Hervorragende Beratung im Mietrecht. Kompetent, transparent bei den Kosten und immer erreichbar.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}`;

  const reviewWidgetSchema = `<!-- Bewertungen sichtbar auf der Seite einbinden -->
<section class="reviews" itemscope itemtype="https://schema.org/LocalBusiness">
  <h2>Kundenbewertungen</h2>
  
  <!-- Zusammenfassung -->
  <div class="rating-summary">
    <span class="stars">★★★★★</span>
    <strong>4.8 von 5</strong> basierend auf 
    <strong>142 Bewertungen</strong>
  </div>
  
  <!-- Einzelne Bewertung -->
  <div class="review-card">
    <div class="review-author">Maria S.</div>
    <div class="review-date">15. Februar 2026</div>
    <div class="review-stars">★★★★★</div>
    <p class="review-text">
      Sehr professionelle Arbeit! Absolut empfehlenswert.
    </p>
  </div>
</section>

<!-- Dazu das passende JSON-LD Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "...",
  "aggregateRating": { ... },
  "review": [ ... ]
}
</script>`;

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
          <CardContent className="p-3 text-center">
            <Star className="h-6 w-6 mx-auto mb-1 text-amber-500" />
            <div className="text-2xl font-bold text-amber-600">+35%</div>
            <p className="text-xs text-muted-foreground">Höhere CTR</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-3 text-center">
            <TrendingUp className="h-6 w-6 mx-auto mb-1 text-green-500" />
            <div className="text-2xl font-bold text-green-600">+25%</div>
            <p className="text-xs text-muted-foreground">Mehr Conversions</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-3 text-center">
            <FileCode className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <div className="text-2xl font-bold text-blue-600">5+</div>
            <p className="text-xs text-muted-foreground">Code-Beispiele</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-3 text-center">
            <Users className="h-6 w-6 mx-auto mb-1 text-purple-500" />
            <div className="text-2xl font-bold text-purple-600">93%</div>
            <p className="text-xs text-muted-foreground">Lesen Bewertungen</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Review Schema: Bewertungssterne in die Google-Suche bringen</h2>
        <AutoLexikonParagraph>
          <p className="text-lg mb-4" data-ai-summary="true">
            <strong>Review Schema Markup</strong> ist der technische Schlüssel zu den begehrten <LexikonLink term="Rich Snippets">Bewertungssternen</LexikonLink> in den Google-Suchergebnissen. Studien zeigen: <strong>93% der Verbraucher</strong> lesen Online-Bewertungen vor einer Kaufentscheidung, und Suchergebnisse mit Sternen erzielen eine bis zu <strong>35% höhere Klickrate</strong>.
          </p>
        </AutoLexikonParagraph>
        <p className="mb-4">
          Für lokale Unternehmen sind Bewertungen das stärkste Vertrauenssignal. Während Ihr <LexikonLink term="Google Business Profil" /> die Bewertungen auf Google Maps zeigt, können Sie mit Review Schema die Sterne auch in den <strong>organischen Suchergebnissen</strong> auf Ihrer eigenen Website darstellen.
        </p>
        <p className="mb-6">
          Dieser Guide zeigt Ihnen, wie Sie <code>Review</code> und <code>AggregateRating</code> Schema korrekt implementieren – mit kopierfertigen Code-Beispielen für verschiedene Branchen und unter Beachtung der strengen Google-Richtlinien.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="review-schema-implementierung" />

      {/* Review vs AggregateRating */}
      <section id="schema-typen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Review vs. AggregateRating: Die zwei Schema-Typen</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="border-blue-500/30">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-lg">Review</h3>
              </div>
              <p className="text-sm mb-3">Eine <strong>einzelne Kundenbewertung</strong> mit allen Details.</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✦ Autor (Person)</li>
                <li>✦ Bewertungstext (reviewBody)</li>
                <li>✦ Sternezahl (reviewRating)</li>
                <li>✦ Datum (datePublished)</li>
              </ul>
              <div className="mt-3">
                <Badge variant="secondary">Detailliert</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-amber-500/30">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="h-6 w-6 text-amber-500" />
                <h3 className="font-bold text-lg">AggregateRating</h3>
              </div>
              <p className="text-sm mb-3"><strong>Zusammenfassung aller Bewertungen</strong> als Durchschnitt.</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>⭐ Durchschnittswert (ratingValue)</li>
                <li>⭐ Anzahl Bewertungen (reviewCount)</li>
                <li>⭐ Beste/schlechteste Wertung</li>
                <li>⭐ Anzahl Ratings (ratingCount)</li>
              </ul>
              <div className="mt-3">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">→ Rich Snippets</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Beste Praxis: Beide kombinieren
            </h4>
            <p className="text-sm text-muted-foreground">
              Verwenden Sie <strong>AggregateRating</strong> für die Gesamtübersicht (löst Rich Snippets aus) und <strong>Review</strong> für 3-5 ausgewählte, repräsentative Einzelbewertungen. So bekommt Google ein vollständiges Bild und Nutzer sehen echte Stimmen.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* AggregateRating */}
      <section id="aggregate-rating">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AggregateRating richtig implementieren</h2>

        <AutoLexikonParagraph>
          <p className="mb-4">
            Das <code>AggregateRating</code>-Schema ist der <strong>wichtigste Review-Schema-Typ für Rich Snippets</strong>. Es fasst alle Bewertungen in einem kompakten Format zusammen, das Google als Sterne in den SERPs darstellen kann.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                AggregateRating in LocalBusiness (JSON-LD)
              </h4>
              <CopyButton code={`<script type="application/ld+json">\n${aggregateRatingBasic}\n</script>`} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{aggregateRatingBasic}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Properties erklärt</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div><code className="text-primary">ratingValue</code> – Durchschnittliche Bewertung (z.B. "4.8")</div>
              <div><code className="text-primary">bestRating</code> – Höchstmögliche Bewertung (meist "5")</div>
              <div><code className="text-primary">worstRating</code> – Niedrigste mögliche Bewertung ("1")</div>
              <div><code className="text-primary">reviewCount</code> – Anzahl schriftlicher Bewertungen</div>
              <div><code className="text-primary">ratingCount</code> – Anzahl aller Ratings (inkl. ohne Text)</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Einzelne Reviews */}
      <section id="einzelne-reviews">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Einzelne Reviews im Schema auszeichnen</h2>

        <p className="mb-4">
          Neben dem Gesamtdurchschnitt können Sie <strong>einzelne Kundenstimmen</strong> als <code>Review</code>-Objekte einbetten. Dies gibt Google mehr Kontext und kann die Darstellung in AI Overviews verbessern.
        </p>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Reviews + AggregateRating kombiniert
              </h4>
              <CopyButton code={singleReviewSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{singleReviewSchema}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="border-amber-500/30 bg-amber-500/5 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Wichtig: Sichtbarkeit auf der Seite
            </h4>
            <p className="text-sm text-muted-foreground">
              Jede Bewertung, die Sie im Schema auszeichnen, <strong>muss auch sichtbar auf der Seite</strong> angezeigt werden. Google vergleicht die Schema-Daten mit dem sichtbaren Content. Unsichtbare oder nur im Schema vorhandene Reviews verstoßen gegen die Richtlinien.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* LocalBusiness Integration */}
      <section id="localbusiness-integration">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Integration in das LocalBusiness Schema</h2>

        <AutoLexikonParagraph>
          <p className="mb-4">
            Review Schema sollte <strong>nicht isoliert stehen</strong>, sondern als Teil Ihres <Link to="/blog/localbusiness-schema-implementierung" className="text-primary hover:underline">LocalBusiness Schemas</Link> implementiert werden. So verknüpft Google die Bewertungen direkt mit Ihrem Unternehmen.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">Empfohlene Schema-Struktur</h4>
            <div className="bg-muted rounded-lg p-4 text-sm font-mono space-y-1">
              <p>LocalBusiness <span className="text-muted-foreground">(Ihr Unternehmen)</span></p>
              <p className="pl-4">├── name, address, telephone, geo</p>
              <p className="pl-4">├── openingHoursSpecification</p>
              <p className="pl-4">├── <strong className="text-primary">aggregateRating</strong> <span className="text-muted-foreground">(Gesamtbewertung)</span></p>
              <p className="pl-4">├── <strong className="text-primary">review[]</strong> <span className="text-muted-foreground">(3-5 Einzelbewertungen)</span></p>
              <p className="pl-4">└── sameAs <span className="text-muted-foreground">(Social Media)</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Tipp: @id-Verknüpfung
            </h4>
            <p className="text-sm text-muted-foreground">
              Verwenden Sie die gleiche <code>@id</code> für Ihr LocalBusiness auf allen Seiten. So erkennt Google, dass die Bewertungen auf der Startseite und die Geschäftsdaten auf der Kontaktseite zum <strong>selben Unternehmen</strong> gehören.
            </p>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="middle" articleSlug="review-schema-implementierung" />

      {/* Google-Richtlinien */}
      <section id="google-richtlinien">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Google-Richtlinien für Review Schema</h2>

        <p className="mb-4">
          Google hat <strong>strenge Regeln</strong> für Review Schema Markup. Verstöße können zum Verlust aller Rich Snippets und sogar zu manuellen Strafen führen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="border-green-500/30">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-green-500" />
                Erlaubt ✓
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Echte Kundenbewertungen mit sichtbarer Anzeige</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> AggregateRating mit korrekten, aktuellen Zahlen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Mix aus positiven und kritischen Reviews</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Reviews von verifizierten Kunden</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Automatisch aktualisierte Bewertungsdaten</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-500/30">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <ThumbsDown className="h-5 w-5 text-red-500" />
                Verboten ✗
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Selbst geschriebene oder gefälschte Bewertungen</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Schema-Daten ohne sichtbare Bewertungen auf der Seite</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Überhöhte oder manipulierte ratingValue-Werte</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Nur positive Reviews auswählen (Cherry-Picking)</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Reviews auf Seiten ohne Bezug zum Unternehmen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-red-500/30 bg-red-500/5 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-500" />
              Manuelle Strafe vermeiden
            </h4>
            <p className="text-sm text-muted-foreground">
              Google kann bei Schema-Missbrauch eine <strong>manuelle Maßnahme</strong> in der Search Console verhängen. Das bedeutet: Alle Rich Snippets werden für Ihre gesamte Domain deaktiviert – nicht nur für die betroffene Seite. Die Wiederherstellung kann Wochen bis Monate dauern.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* First-Party vs Third-Party */}
      <section id="first-party-reviews">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">First-Party vs. Third-Party Reviews</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kriterium</th>
                <th className="border p-3 text-left">First-Party (eigene Website)</th>
                <th className="border p-3 text-left">Third-Party (Google, Trustpilot etc.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Kontrolle</td>
                <td className="border p-3">Volle Kontrolle über Darstellung</td>
                <td className="border p-3">Begrenzte Einflussnahme</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Schema-Nutzung</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Empfohlen</Badge></td>
                <td className="border p-3"><Badge className="bg-amber-100 text-amber-800">Mit Einschränkungen</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Vertrauen</td>
                <td className="border p-3">Niedriger (vom Unternehmen kontrolliert)</td>
                <td className="border p-3">Höher (unabhängige Plattform)</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Rich Snippets</td>
                <td className="border p-3">Möglich bei korrekter Implementierung</td>
                <td className="border p-3">Google zeigt oft eigene Sterne</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Beste Strategie</td>
                <td colSpan={2} className="border p-3 text-center font-medium">
                  Beides kombinieren: Third-Party für Vertrauen, First-Party für Schema & Kontrolle
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AutoLexikonParagraph>
          <p className="mb-6">
            Die beste Strategie: Sammeln Sie Bewertungen auf <strong>Google und anderen Plattformen</strong> (für Vertrauen und GBP-Rankings) und binden Sie ausgewählte Bewertungen <strong>auf Ihrer Website</strong> ein (für Schema-Rich-Snippets in den organischen Ergebnissen). Lesen Sie mehr über <Link to="/blog/google-bewertungen-bekommen" className="text-primary hover:underline">Strategien zum Sammeln von Google-Bewertungen</Link>.
          </p>
        </AutoLexikonParagraph>
      </section>

      {/* Branchenbeispiele */}
      <section id="branchenbeispiele">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Branchenspezifische Review-Schema-Beispiele</h2>

        <p className="mb-4">
          Verschiedene Branchen haben unterschiedliche Schema-Typen und Bewertungskontexte. Hier sind kopierfertige Beispiele:
        </p>

        {/* Restaurant */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                🍽️ Restaurant mit Bewertungen
              </h4>
              <CopyButton code={restaurantReviewSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{restaurantReviewSchema}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Arzt */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                🏥 Arztpraxis mit Patientenbewertungen
              </h4>
              <CopyButton code={doctorReviewSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{doctorReviewSchema}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Anwalt */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                ⚖️ Kanzlei mit Mandantenbewertungen
              </h4>
              <CopyButton code={lawyerReviewSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{lawyerReviewSchema}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Rich Results */}
      <section id="rich-results">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Rich Results: So erscheinen Sterne in der Google-Suche</h2>

        <AutoLexikonParagraph>
          <p className="mb-4">
            Nicht jede Seite mit Review Schema bekommt automatisch Sterne in den SERPs. Google entscheidet basierend auf mehreren Faktoren, ob <LexikonLink term="Rich Snippets" /> angezeigt werden:
          </p>
        </AutoLexikonParagraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Voraussetzungen für Sterne</h4>
              <ul className="text-sm space-y-1.5 text-muted-foreground">
                <li>✓ Syntaktisch korrektes JSON-LD Schema</li>
                <li>✓ Bewertungen sichtbar auf der Seite</li>
                <li>✓ Konsistenz zwischen Schema und sichtbarem Content</li>
                <li>✓ Vertrauenswürdige Domain (keine Spam-Historie)</li>
                <li>✓ Mindestens 5+ echte Bewertungen (empfohlen)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Wann Google Sterne NICHT zeigt</h4>
              <ul className="text-sm space-y-1.5 text-muted-foreground">
                <li>✗ Schema ohne sichtbare Bewertungen</li>
                <li>✗ Nur 1-2 Bewertungen (geringe Aussagekraft)</li>
                <li>✗ Verdacht auf Manipulation (nur 5-Sterne)</li>
                <li>✗ Seite hat manuelle Maßnahme</li>
                <li>✗ Suchanfrage passt nicht zum Review-Kontext</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Bewertungen sichtbar einbinden
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Google verlangt, dass die Bewertungsdaten im Schema auch <strong>für Nutzer sichtbar</strong> auf der Seite stehen. Hier ist ein Beispiel, wie Sie beides kombinieren:
            </p>
            <pre className="bg-muted rounded-lg p-3 overflow-x-auto text-xs leading-relaxed">
              <code>{reviewWidgetSchema}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Testing */}
      <section id="testing">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Review Schema testen & validieren</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TestTube className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold text-sm">Rich Results Test</h4>
              </div>
              <p className="text-xs text-muted-foreground">Prüft Rich-Snippet-Fähigkeit</p>
              <p className="text-xs font-mono mt-1 text-muted-foreground">search.google.com/test/rich-results</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h4 className="font-semibold text-sm">Schema Validator</h4>
              </div>
              <p className="text-xs text-muted-foreground">Syntaktische Korrektheit</p>
              <p className="text-xs font-mono mt-1 text-muted-foreground">validator.schema.org</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <h4 className="font-semibold text-sm">Search Console</h4>
              </div>
              <p className="text-xs text-muted-foreground">Monitoring & Fehlerberichte</p>
              <p className="text-xs font-mono mt-1 text-muted-foreground">Verbesserungen → Review Snippets</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Test-Checkliste</h4>
            <ol className="text-sm space-y-1.5 text-muted-foreground list-decimal pl-5">
              <li>Schema-Code implementieren oder aktualisieren</li>
              <li><strong>Schema Validator</strong>: Auf Syntaxfehler prüfen</li>
              <li><strong>Rich Results Test</strong>: URL eingeben → "Review snippet" muss grün sein</li>
              <li><strong>Seite prüfen</strong>: Sind Bewertungen sichtbar auf der Seite?</li>
              <li><strong>NAP abgleichen</strong>: Stimmen Daten mit GBP überein?</li>
              <li><strong>Search Console</strong>: Nach 1-2 Wochen "Verbesserungen" prüfen</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Häufige Fehler */}
      <section id="fehler">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">8 häufige Review-Schema-Fehler</h2>

        <div className="space-y-3 mb-6">
          {[
            { error: "Bewertungen nicht sichtbar auf der Seite", fix: "Jede im Schema referenzierte Bewertung muss für Nutzer sichtbar sein – Google vergleicht Schema mit Content" },
            { error: "Gefälschte oder selbst geschriebene Reviews", fix: "Nur echte Kundenbewertungen verwenden – Google erkennt Muster und bestraft Manipulation" },
            { error: "ratingValue stimmt nicht mit Realität überein", fix: "Den tatsächlichen Durchschnitt angeben, nicht aufrunden – 4.78 statt 5.0" },
            { error: "reviewCount wird nicht aktualisiert", fix: "Automatisieren Sie die Aktualisierung – veraltete Zahlen wirken unseriös und verstoßen gegen Richtlinien" },
            { error: "Nur 5-Sterne-Reviews auswählen", fix: "Auch 3-4 Sterne Reviews einbinden – ein natürlicher Mix erhöht die Glaubwürdigkeit" },
            { error: "Review Schema auf falschen Seiten", fix: "Review Schema gehört auf die Startseite und Standortseiten – nicht auf jeden Blogpost" },
            { error: "Fehlende author-Property bei Reviews", fix: "Jedes Review braucht einen Autor (@type: Person) – anonyme Reviews werden oft ignoriert" },
            { error: "AggregateRating ohne LocalBusiness-Kontext", fix: "Betten Sie AggregateRating immer in ein LocalBusiness-Schema ein, nicht als eigenständiges Element" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-3 flex items-start gap-3">
                <Badge variant="destructive" className="shrink-0 mt-0.5">{i + 1}</Badge>
                <div>
                  <h4 className="font-semibold text-sm">{item.error}</h4>
                  <p className="text-xs text-muted-foreground">{item.fix}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BlogCTAABTest position="end" articleSlug="review-schema-implementierung" />

      {/* Related Articles */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Weiterführende Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link to="/blog/localbusiness-schema-implementierung" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">🏢</span>
                <div>
                  <h4 className="font-semibold text-sm">LocalBusiness Schema implementieren</h4>
                  <p className="text-xs text-muted-foreground">Komplette Anleitung mit Code</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/google-bewertungen-bekommen" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-semibold text-sm">Google Bewertungen bekommen</h4>
                  <p className="text-xs text-muted-foreground">7 bewährte Strategien</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/bewertungs-antworten-vorlagen" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold text-sm">Bewertungs-Antworten Vorlagen</h4>
                  <p className="text-xs text-muted-foreground">Professionell auf Reviews reagieren</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/technisches-local-seo-guide" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold text-sm">Technisches Local SEO Hub</h4>
                  <p className="text-xs text-muted-foreground">Alle Technical-SEO-Guides</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <AiCitationStrategyBox articleSlug="review-schema-implementierung" />
      <HelpfulnessWidget articleSlug="review-schema-implementierung" />
    </ArticleLayout>
  );
};

export default ReviewSchemaImplementierung;
