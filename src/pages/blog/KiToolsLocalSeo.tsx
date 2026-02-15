import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import kiToolsLocalSeoImg from "@/assets/blog/ki-tools-local-seo.jpg";
import { 
  CheckCircle, 
  Bot,
  Sparkles,
  Zap,
  MessageSquare,
  Camera,
  FileText,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Star
} from "lucide-react";

const KiToolsLocalSeo = () => {
  const article = getArticleBySlug("ki-tools-local-seo");

  if (!article) return null;

  const tocItems = [
    { id: "ki-revolution", title: "Die KI-Revolution im Local SEO" },
    { id: "chatgpt-local-seo", title: "ChatGPT für Local SEO nutzen" },
    { id: "ki-content-erstellung", title: "KI für Content-Erstellung" },
    { id: "ki-bewertungsmanagement", title: "KI für Bewertungsmanagement" },
    { id: "ki-bildgenerierung", title: "KI-Bildgenerierung für Unternehmen" },
    { id: "ki-tools-uebersicht", title: "Die besten KI-Tools 2026" },
    { id: "risiken-grenzen", title: "Risiken & Grenzen" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Kann KI meine Google Business Beschreibung schreiben?",
      answer: "Ja, KI-Tools wie ChatGPT können hervorragende Entwürfe für deine Google Business Beschreibung erstellen. Gib Details zu deinem Unternehmen, Standort und Zielgruppe an. Wichtig: Überprüfe und personalisiere den Output, damit er authentisch klingt und lokale Keywords enthält."
    },
    {
      question: "Erkennt Google KI-generierte Inhalte?",
      answer: "Google hat erklärt, dass sie nicht grundsätzlich gegen KI-generierte Inhalte vorgehen, solange diese hilfreich und für Nutzer wertvoll sind. Schlechter, generischer KI-Content wird jedoch abgestraft. Die Qualität zählt, nicht die Herstellungsweise."
    },
    {
      question: "Welches KI-Tool ist am besten für lokale Unternehmen?",
      answer: "Für die meisten lokalen Unternehmen ist ChatGPT (Free oder Plus) der beste Einstieg. Es kann Texte schreiben, Antworten auf Bewertungen formulieren und bei der Keyword-Recherche helfen. Für speziellere Aufgaben gibt es Tools wie Jasper oder Copy.ai."
    },
    {
      question: "Kann KI auf Google-Bewertungen antworten?",
      answer: "KI kann Antwort-Entwürfe erstellen, die du dann personalisierst. Tools wie ChatGPT können basierend auf dem Bewertungsinhalt professionelle, empathische Antworten formulieren. Du solltest sie aber immer überprüfen und anpassen."
    },
    {
      question: "Sind KI-generierte Bilder für Google Business geeignet?",
      answer: "Generierte Bilder solltest du nur für Illustrationen oder generische Grafiken verwenden. Für dein Google Business Profil sind echte Fotos von deinem Geschäft, Team und Produkten wichtig – Kunden wollen Authentizität sehen."
    },
    {
      question: "Wie kann KI bei der Keyword-Recherche helfen?",
      answer: "KI-Tools können Keyword-Ideen brainstormen, Long-Tail-Keywords vorschlagen und lokale Suchintentionen analysieren. Sie ersetzen keine professionellen SEO-Tools wie SEMrush, aber sie sind ein guter Startpunkt für kleine Unternehmen."
    },
    {
      question: "Kostet der Einsatz von KI-Tools viel?",
      answer: "Viele KI-Tools bieten kostenlose Versionen. ChatGPT Free reicht für die meisten Grundaufgaben. Für intensivere Nutzung kostet ChatGPT Plus 20€/Monat. Spezialisierte Marketing-KI-Tools kosten 30-100€/Monat."
    },
    {
      question: "Kann KI lokale SEO-Strategien entwickeln?",
      answer: "KI kann dir helfen, eine Strategie zu entwickeln, indem sie Best Practices erklärt und personalisierte Tipps gibt. Aber sie ersetzt keine professionelle Beratung für komplexe Fälle. Nutze KI als Unterstützung, nicht als Ersatz für Expertise."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const kiTools = [
    { 
      name: "ChatGPT", 
      anbieter: "OpenAI", 
      preis: "Kostenlos / 20€/Monat",
      useCases: ["Content-Erstellung", "Bewertungsantworten", "Keyword-Ideen", "FAQ-Erstellung"],
      rating: 5
    },
    { 
      name: "Claude", 
      anbieter: "Anthropic", 
      preis: "Kostenlos / 20€/Monat",
      useCases: ["Längere Texte", "Analysen", "Strategieentwicklung"],
      rating: 5
    },
    { 
      name: "Jasper", 
      anbieter: "Jasper AI", 
      preis: "Ab 39€/Monat",
      useCases: ["Marketing-Texte", "Social Media", "Ads"],
      rating: 4
    },
    { 
      name: "Copy.ai", 
      anbieter: "Copy.ai", 
      preis: "Kostenlos / 36€/Monat",
      useCases: ["Kurze Texte", "Produktbeschreibungen", "E-Mails"],
      rating: 4
    },
    { 
      name: "Canva Magic Write", 
      anbieter: "Canva", 
      preis: "In Canva Pro (11€/Monat)",
      useCases: ["Social Media Posts", "Präsentationen", "Grafiken mit Text"],
      rating: 4
    },
    { 
      name: "Midjourney", 
      anbieter: "Midjourney", 
      preis: "Ab 10$/Monat",
      useCases: ["Bildgenerierung", "Illustrationen", "Social Media Grafiken"],
      rating: 5
    }
  ];

  const chatgptPrompts = [
    {
      titel: "Google Business Beschreibung",
      prompt: "Schreibe eine 750 Zeichen lange Google Business Beschreibung für [Branche] in [Stadt]. Fokus auf [Alleinstellungsmerkmal]. Integriere Keywords: [Keyword 1], [Keyword 2].",
      beispiel: "Schreibe eine 750 Zeichen lange Google Business Beschreibung für einen Friseursalon in München. Fokus auf Bio-Produkte und Nachhaltigkeit. Integriere Keywords: Friseur München, Bio-Friseur."
    },
    {
      titel: "Bewertungsantwort",
      prompt: "Schreibe eine professionelle, empathische Antwort auf diese [positive/negative] Bewertung: '[Bewertungstext]'. Bedanke dich, gehe auf das Feedback ein und lade den Kunden zur Rückkehr ein.",
      beispiel: "Schreibe eine professionelle Antwort auf: 'Super Haarschnitt, aber musste 20 Minuten warten.' – Bedanke dich, entschuldige die Wartezeit, erkläre ggf. warum."
    },
    {
      titel: "FAQ-Generierung",
      prompt: "Erstelle 10 häufige Fragen und Antworten für eine [Branche] in [Stadt]. Fokussiere auf lokale Aspekte wie Öffnungszeiten, Parkmöglichkeiten, Preise und Besonderheiten.",
      beispiel: "Erstelle 10 FAQs für eine Pizzeria in Berlin. Themen: Liefergebiet, vegane Optionen, Reservierungen, etc."
    },
    {
      titel: "Lokaler Blog-Artikel",
      prompt: "Schreibe einen 800-Wort-Blogpost über '[lokales Thema]' für [Branche] in [Stadt]. Integriere lokale Bezüge und Keywords. Struktur: Einleitung, 3-5 Hauptpunkte, Fazit.",
      beispiel: "Schreibe einen Blogpost über 'Die besten Hochzeitslocations in Hamburg' für einen Fotografen."
    }
  ];

  const sources: { title: string; url: string; type: "article" | "documentation" | "study" | "tool" }[] = [
    { title: "OpenAI - ChatGPT", url: "https://openai.com/chatgpt", type: "tool" },
    { title: "Google Search Central - AI Content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", type: "documentation" },
    { title: "Anthropic - Claude", url: "https://www.anthropic.com/claude", type: "tool" }
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Künstliche Intelligenz revolutioniert die Art, wie lokale Unternehmen Marketing betreiben. 
        Von ChatGPT über Midjourney bis zu spezialisierten SEO-Tools – KI macht professionelles 
        <LexikonLink term="Local SEO" /> auch für kleine Betriebe zugänglich. Dieser Guide zeigt dir, 
        welche KI-Tools 2026 wirklich helfen und wie du sie richtig einsetzt.
      </p>

      <KeyTakeawaysBox 
        items={[
          "ChatGPT für Content-Erstellung, Bewertungsantworten und FAQs nutzen",
          "KI-generierte Inhalte immer personalisieren und prüfen",
          "Echte Fotos bleiben für Google Business wichtiger als KI-Bilder",
          "KI als Unterstützung, nicht als Ersatz für Expertise nutzen",
          "Viele KI-Tools sind kostenlos oder günstig verfügbar"
        ]}
      />

      <BlogImage 
        src={kiToolsLocalSeoImg} 
        alt="KI-gestütztes Local SEO Dashboard mit Roboterhand"
        caption="KI-Tools machen professionelles Local SEO für alle zugänglich"
      />

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">73%</div>
          <p className="text-xs text-muted-foreground">der Marketer nutzen KI</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">5x</div>
          <p className="text-xs text-muted-foreground">schnellere Content-Erstellung</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">0€</div>
          <p className="text-xs text-muted-foreground">Einstiegskosten möglich</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">80%</div>
          <p className="text-xs text-muted-foreground">Zeitersparnis bei Antworten</p>
        </div>
      </div>

      {/* KI Revolution */}
      <section id="ki-revolution" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          Die KI-Revolution im Local SEO
        </h2>

        <p className="text-muted-foreground mb-6">
          2026 ist KI keine Zukunftsmusik mehr – sie ist Gegenwart. Für lokale Unternehmen 
          bedeutet das: Aufgaben, die früher teuer oder zeitaufwändig waren, können jetzt 
          schnell und günstig erledigt werden:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Content-Erstellung</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Beschreibungen, Blog-Posts, FAQs – KI schreibt in Minuten, was früher Stunden dauerte.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Bewertungsantworten</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Professionelle, empathische Antworten auf Kundenbewertungen in Sekunden.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Bildgenerierung</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Illustrationen und Grafiken für Social Media ohne Designkenntnisse.
            </p>
          </div>
        </div>
      </section>

      {/* ChatGPT Prompts */}
      <section id="chatgpt-local-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Bot className="h-6 w-6 text-primary" />
          ChatGPT für Local SEO nutzen
        </h2>

        <p className="text-muted-foreground mb-6">
          ChatGPT ist das vielseitigste KI-Tool für lokale Unternehmen. Mit den richtigen 
          Prompts bekommst du professionelle Ergebnisse:
        </p>

        <div className="space-y-6 mb-6">
          {chatgptPrompts.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                {item.titel}
              </h3>
              <div className="bg-muted rounded-lg p-4 mb-3">
                <p className="text-sm font-mono text-foreground">{item.prompt}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Beispiel:</strong> {item.beispiel}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Prompt-Tipp</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Je mehr Kontext du gibst, desto besser der Output. Nenne immer: Branche, Stadt, 
                Zielgruppe, Alleinstellungsmerkmal und gewünschte Keywords.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Content Erstellung */}
      <section id="ki-content-erstellung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          KI für Content-Erstellung
        </h2>

        <p className="text-muted-foreground mb-6">
          So nutzt du KI für verschiedene Content-Typen im Local SEO:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Google Business Beschreibung</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Lass KI einen Entwurf mit Keywords erstellen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Personalisiere mit lokalen Details und deiner Stimme
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Prüfe die Zeichenbegrenzung (750 Zeichen)
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Lokale Blog-Artikel</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Nutze KI für Gliederung und ersten Entwurf
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Füge eigene Erfahrungen und lokales Wissen hinzu
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Überprüfe Fakten und lokale Bezüge
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">FAQ-Seiten</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Lass KI typische Kundenfragen generieren
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Ergänze spezifische Fragen, die du häufig hörst
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Strukturiere als FAQ-Schema für <LexikonLink term="Rich Snippets" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bewertungsmanagement */}
      <section id="ki-bewertungsmanagement" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          KI für Bewertungsmanagement
        </h2>

        <p className="text-muted-foreground mb-6">
          Antworten auf Google-Bewertungen sind wichtig für dein Ranking. KI kann helfen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Positive Bewertungen</h3>
            <p className="text-green-700 dark:text-green-300 text-sm mb-3">
              "Schreibe eine herzliche, persönliche Antwort auf diese 5-Sterne-Bewertung. 
              Bedanke dich, erwähne das spezifische Lob und lade zur Rückkehr ein."
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              Tipp: Personalisiere immer mit dem Kundennamen und konkretem Bezug
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">Negative Bewertungen</h3>
            <p className="text-red-700 dark:text-red-300 text-sm mb-3">
              "Schreibe eine professionelle, empathische Antwort auf diese Kritik. 
              Entschuldige dich falls angebracht, zeige Verständnis und biete eine Lösung an."
            </p>
            <p className="text-xs text-red-600 dark:text-red-400">
              Tipp: Nie defensiv werden, immer Kontakt anbieten
            </p>
          </div>
        </div>
      </section>

      {/* KI Tools Übersicht */}
      <section id="ki-tools-uebersicht" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Die besten KI-Tools für Local SEO 2026
        </h2>

        <div className="space-y-4 mb-6">
          {kiTools.map((tool, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.anbieter}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{tool.preis}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < tool.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tool.useCases.map((useCase, i) => (
                  <span key={i} className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Risiken */}
      <section id="risiken-grenzen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-primary" />
          Risiken & Grenzen von KI im Local SEO
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">Generischer Content</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              KI-Content ohne Personalisierung klingt austauschbar. Immer lokale Details, 
              persönliche Erfahrungen und deine Stimme hinzufügen.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">Faktenfehler</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              KI kann "halluzinieren" – falsche Fakten erfinden. Überprüfe alle Angaben, 
              besonders bei Öffnungszeiten, Preisen und lokalen Informationen.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">Fehlende Authentizität</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              Für Google Business Fotos sind echte Bilder Pflicht. KI-Bilder eignen sich 
              nur für Illustrationen und Grafiken, nicht für Unternehmensfotos.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Die goldene Regel</p>
              <p className="text-muted-foreground text-sm">
                Nutze KI als Ausgangspunkt und Assistenten, nicht als Ersatz für dein 
                Fachwissen und deine lokale Expertise. Der beste Content entsteht durch 
                die Kombination von KI-Effizienz und menschlicher Authentizität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu KI-Tools im Local SEO
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <HelpfulnessWidget articleSlug="ki-tools-local-seo" />

      <SourcesSection sources={sources} />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default KiToolsLocalSeo;
