import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Sparkles, Mic, Search, Smartphone, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";
import lokaleSeo2026Img from "@/assets/blog/lokale-seo-2026.jpg";

const LokaleSeo2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("lokale-suchmaschinenoptimierung-2026", language)!;

  const content = {
    de: {
      tocItems: [
        { id: "trends", title: "Die wichtigsten Trends 2026" },
        { id: "ki", title: "KI und lokale Suche" },
        { id: "voice", title: "Voice Search Optimierung" },
        { id: "zero-click", title: "Zero-Click-Searches nutzen" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ],
      intro: "Lokale Suchmaschinenoptimierung entwickelt sich rasant weiter. Was 2024 funktioniert hat, ist 2026 vielleicht schon veraltet. Dieser Artikel zeigt dir die neuesten Trends und wie du dein lokales Unternehmen zukunftssicher aufstellst.",
      section1: {
        title: "Die wichtigsten Trends 2026",
        text: "Die lokale Suche verändert sich grundlegend. Diese fünf Trends werden 2026 dominieren:",
        trends: [
          { title: "KI-gestützte Suchergebnisse", desc: "Google AI Overviews beeinflussen, wie lokale Ergebnisse angezeigt werden. Strukturierte Daten werden wichtiger denn je." },
          { title: "Voice Search wächst weiter", desc: "30% aller Suchanfragen erfolgen per Sprache. Natürliche Sprache und Frage-Keywords gewinnen an Bedeutung." },
          { title: "Hyper-lokale Suche", desc: "Suchanfragen werden noch spezifischer: 'Café mit Hafermilch in der Nähe vom Hauptbahnhof' statt nur 'Café'." },
          { title: "Mobile-First ist Standard", desc: "Über 70% der lokalen Suchen erfolgen mobil. Desktop-Optimierung ist nur noch Nebensache." },
          { title: "Bewertungsqualität über Quantität", desc: "Google bewertet den Inhalt von Rezensionen, nicht nur die Anzahl. Detaillierte Reviews zählen mehr." },
        ]
      },
      section2: {
        title: "KI und lokale Suche",
        text: "Künstliche Intelligenz verändert, wie Google lokale Ergebnisse generiert und anzeigt. Das bedeutet neue Chancen und Herausforderungen.",
        sub1: "Google AI Overviews",
        sub1Text: "Googles KI fasst Informationen aus verschiedenen Quellen zusammen und zeigt sie direkt in den Suchergebnissen. Für lokale Unternehmen bedeutet das:",
        sub1List: [
          "Strukturierte Daten (Schema.org) sind entscheidend für die KI-Erkennung",
          "Klare, gut strukturierte Inhalte werden bevorzugt",
          "FAQ-Bereiche auf der Website können von der KI zitiert werden"
        ],
        sub2: "Personalisierte Empfehlungen",
        sub2Text: "Google nutzt KI, um personalisierte lokale Empfehlungen zu geben. Basierend auf Suchhistorie, Standort und Präferenzen werden unterschiedliche Ergebnisse angezeigt.",
        tip: "Stelle sicher, dass dein Google Business Profil alle Attribute enthält, die für deine Zielgruppe relevant sind (z.B. \"kinderfreundlich\", \"hundefreundlich\", \"vegane Optionen\")."
      },
      section3: {
        title: "Voice Search Optimierung",
        text: "\"Hey Google, welcher Friseur in der Nähe hat die besten Bewertungen?\" – Voice Search verändert, wie Menschen suchen.",
        sub1: "Unterschiede zur Text-Suche",
        textSearch: "Text-Suche",
        textExample: "\"Friseur Berlin Mitte\"",
        voiceSearch: "Voice-Suche",
        voiceExample: "\"Welcher Friseur in Berlin Mitte hat heute noch einen Termin frei?\"",
        sub2: "So optimierst du für Voice Search",
        tips: [
          "Beantworte häufige Fragen in deiner Unternehmensbeschreibung",
          "Nutze natürliche Sprache statt Keyword-Stuffing",
          "Füge FAQ-Bereiche mit vollständigen Frage-Antwort-Paaren hinzu",
          "Halte Öffnungszeiten und Kontaktdaten aktuell",
          "Optimiere für lokale Long-Tail-Keywords"
        ]
      },
      section4: {
        title: "Zero-Click-Searches nutzen",
        text: "Über 50% aller Google-Suchen enden ohne Klick auf eine Website. Die Nutzer finden alle Infos direkt in den Suchergebnissen. Das ist keine Bedrohung – es ist eine Chance.",
        sub1: "Warum Zero-Click gut für dich ist",
        sub1Text: "Wenn ein Kunde deine Öffnungszeiten, Telefonnummer oder Adresse direkt in Google sieht, ist das ein Erfolg. Er braucht nicht auf deine Website zu klicken, um zu handeln.",
        optTitle: "Optimierung für Zero-Click:",
        optList: [
          "Google Business Profil vollständig ausfüllen – jede Information zählt",
          "Produkte und Dienstleistungen mit Preisen – Kunden können direkt entscheiden",
          "Reservierungs- und Buchungslinks – direkter Weg zur Conversion",
          "FAQ in Google stellen – selbst Fragen beantworten"
        ],
        sub2: "Die wichtigsten Zero-Click-Aktionen",
        actions: [
          { action: "Anrufen", desc: "Click-to-Call direkt aus Google" },
          { action: "Route", desc: "Navigation zur Adresse starten" },
          { action: "Buchen", desc: "Termin oder Tisch reservieren" },
        ]
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Muss ich meine SEO-Strategie komplett ändern?", a: "Nein, die Grundlagen bleiben gleich: vollständiges Google Profil, gute Bewertungen, konsistente NAP-Daten. Die neuen Trends sind Ergänzungen, keine Ersetzungen." },
          { q: "Wie bereite ich mich auf KI-Suche vor?", a: "Strukturiere deine Inhalte klar, nutze Schema.org Markup und beantworte häufige Fragen direkt auf deiner Website und im Google Profil." },
          { q: "Ist Voice Search wirklich so wichtig?", a: "Für lokale Suchen ja. \"In der Nähe\" und \"jetzt geöffnet\" Anfragen erfolgen oft per Sprache, besonders unterwegs." },
          { q: "Was ist der wichtigste SEO-Trend 2026?", a: "Nutzererfahrung. Google misst immer genauer, ob Kunden bei dir finden, was sie suchen. Zufriedene Kunden = besseres Ranking." },
        ]
      }
    },
    en: {
      tocItems: [
        { id: "trends", title: "The Most Important Trends for 2026" },
        { id: "ki", title: "AI and Local Search" },
        { id: "voice", title: "Voice Search Optimization" },
        { id: "zero-click", title: "Using Zero-Click Searches" },
        { id: "faq", title: "Frequently Asked Questions" },
      ],
      intro: "Local search engine optimization is evolving rapidly. What worked in 2024 may already be outdated in 2026. This article shows you the latest trends and how to future-proof your local business.",
      section1: {
        title: "The Most Important Trends for 2026",
        text: "Local search is fundamentally changing. These five trends will dominate in 2026:",
        trends: [
          { title: "AI-Powered Search Results", desc: "Google AI Overviews influence how local results are displayed. Structured data becomes more important than ever." },
          { title: "Voice Search Continues to Grow", desc: "30% of all searches are voice-based. Natural language and question keywords are gaining importance." },
          { title: "Hyper-Local Search", desc: "Search queries are becoming more specific: 'Café with oat milk near the main station' instead of just 'Café'." },
          { title: "Mobile-First is Standard", desc: "Over 70% of local searches happen on mobile. Desktop optimization is now secondary." },
          { title: "Review Quality Over Quantity", desc: "Google evaluates the content of reviews, not just the number. Detailed reviews count more." },
        ]
      },
      section2: {
        title: "AI and Local Search",
        text: "Artificial intelligence is changing how Google generates and displays local results. This means new opportunities and challenges.",
        sub1: "Google AI Overviews",
        sub1Text: "Google's AI summarizes information from various sources and displays it directly in search results. For local businesses, this means:",
        sub1List: [
          "Structured data (Schema.org) is crucial for AI recognition",
          "Clear, well-structured content is preferred",
          "FAQ sections on your website can be quoted by AI"
        ],
        sub2: "Personalized Recommendations",
        sub2Text: "Google uses AI to provide personalized local recommendations. Based on search history, location, and preferences, different results are shown.",
        tip: "Make sure your Google Business Profile contains all attributes relevant to your target audience (e.g., \"kid-friendly\", \"dog-friendly\", \"vegan options\")."
      },
      section3: {
        title: "Voice Search Optimization",
        text: "\"Hey Google, which hairdresser near me has the best reviews?\" – Voice Search is changing how people search.",
        sub1: "Differences from Text Search",
        textSearch: "Text Search",
        textExample: "\"Hairdresser Berlin Mitte\"",
        voiceSearch: "Voice Search",
        voiceExample: "\"Which hairdresser in Berlin Mitte still has an appointment available today?\"",
        sub2: "How to Optimize for Voice Search",
        tips: [
          "Answer common questions in your business description",
          "Use natural language instead of keyword stuffing",
          "Add FAQ sections with complete question-answer pairs",
          "Keep opening hours and contact information up to date",
          "Optimize for local long-tail keywords"
        ]
      },
      section4: {
        title: "Using Zero-Click Searches",
        text: "Over 50% of all Google searches end without a click on a website. Users find all information directly in search results. This is not a threat – it's an opportunity.",
        sub1: "Why Zero-Click is Good for You",
        sub1Text: "When a customer sees your opening hours, phone number, or address directly in Google, that's a success. They don't need to click on your website to take action.",
        optTitle: "Optimization for Zero-Click:",
        optList: [
          "Fill out Google Business Profile completely – every piece of information counts",
          "Products and services with prices – customers can decide directly",
          "Reservation and booking links – direct path to conversion",
          "Answer FAQs in Google – answer questions yourself"
        ],
        sub2: "The Most Important Zero-Click Actions",
        actions: [
          { action: "Call", desc: "Click-to-call directly from Google" },
          { action: "Directions", desc: "Start navigation to address" },
          { action: "Book", desc: "Reserve appointment or table" },
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Do I need to completely change my SEO strategy?", a: "No, the basics remain the same: complete Google profile, good reviews, consistent NAP data. The new trends are additions, not replacements." },
          { q: "How do I prepare for AI search?", a: "Structure your content clearly, use Schema.org markup, and answer common questions directly on your website and in your Google profile." },
          { q: "Is Voice Search really that important?", a: "For local searches, yes. \"Near me\" and \"open now\" queries are often voice-based, especially on the go." },
          { q: "What is the most important SEO trend for 2026?", a: "User experience. Google measures more precisely whether customers find what they're looking for with you. Satisfied customers = better ranking." },
        ]
      }
    }
  };

  const t = content[language];
  const trendIcons = [Sparkles, Mic, Search, Smartphone, TrendingUp];

  // FAQ Schema for structured data
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <ArticleLayout article={article} tocItems={t.tocItems} additionalSchema={faqSchema}>
      <TableOfContents items={t.tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>{t.intro}</strong>
      </p>

      <KeyTakeawaysBox 
        items={language === "de" ? [
          "Die 5 wichtigsten Local SEO Trends für 2026",
          "Wie KI und AI Overviews die lokale Suche verändern",
          "Voice Search Optimierung für lokale Unternehmen",
          "Zero-Click-Searches als Chance nutzen",
          "Zukunftssichere Local SEO Strategien entwickeln"
        ] : [
          "The 5 most important Local SEO trends for 2026",
          "How AI and AI Overviews are changing local search",
          "Voice Search optimization for local businesses",
          "Using Zero-Click Searches as an opportunity",
          "Developing future-proof Local SEO strategies"
        ]}
      />

      <BlogImage 
        src={lokaleSeo2026Img} 
        alt={language === "de" ? "Lokale SEO Trends 2026" : "Local SEO Trends 2026"}
        caption={language === "de" ? "KI und Voice Search prägen die lokale Suche der Zukunft" : "AI and Voice Search shape the future of local search"}
      />

      <section id="trends" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section1.title}</h2>
        <p className="mb-6">{t.section1.text}</p>

        <div className="space-y-4">
          {t.section1.trends.map((trend, index) => {
            const Icon = trendIcons[index];
            return (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{trend.title}</h3>
                  <p className="text-muted-foreground">{trend.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="ki" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section2.title}</h2>
        <p className="mb-4">{t.section2.text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section2.sub1}</h3>
        <p className="mb-4">{t.section2.sub1Text}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><LexikonLink term="Schema Markup">Strukturierte Daten (Schema.org)</LexikonLink> sind entscheidend für die KI-Erkennung</li>
          <li>Klare, gut strukturierte Inhalte werden bevorzugt</li>
          <li>FAQ-Bereiche auf der Website können von der KI zitiert werden (<LexikonLink term="Featured Snippet" />)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section2.sub2}</h3>
        <p className="mb-4">{t.section2.sub2Text}</p>

        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">{language === 'de' ? 'Praxis-Tipp:' : 'Practical Tip:'}</strong>
              <p className="text-muted-foreground mt-1">{t.section2.tip}</p>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="lokale-suchmaschinenoptimierung-2026" position="middle" />

      <section id="voice" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section3.title}</h2>
        <p className="mb-4">{t.section3.text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.sub1}</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-muted/50 rounded-xl">
            <h4 className="font-medium text-foreground mb-2">{t.section3.textSearch}</h4>
            <p className="text-sm text-muted-foreground">{t.section3.textExample}</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl">
            <h4 className="font-medium text-foreground mb-2">{t.section3.voiceSearch}</h4>
            <p className="text-sm text-muted-foreground">{t.section3.voiceExample}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.sub2}</h3>
        <div className="space-y-3">
          {t.section3.tips.map((tip, index) => (
            <div key={index} className="flex items-center gap-3">
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="zero-click" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section4.title}</h2>
        <p className="mb-4">
          Über 50% aller Google-Suchen enden ohne Klick auf eine Website. Nutzer finden alle Informationen direkt in den <LexikonLink term="SERP">Suchergebnissen</LexikonLink>. 
          Das ist keine Bedrohung – es ist eine Chance.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section4.sub1}</h3>
        <p className="mb-4">{t.section4.sub1Text}</p>

        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">{t.section4.optTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><LexikonLink term="Google Business Profile" /> vollständig ausfüllen – jede Information zählt</li>
            <li>Produkte und Dienstleistungen mit Preisen – Kunden können direkt entscheiden</li>
            <li>Reservierungs- und Buchungslinks – direkter Weg zur <LexikonLink term="Conversion" /></li>
            <li>FAQs bei Google beantworten – beantworte Fragen selbst</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section4.sub2}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {t.section4.actions.map((item, index) => (
            <div key={index} className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="text-xl font-bold text-primary mb-1">{item.action}</div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t.faq.title}</h2>
        <div className="space-y-6">
          {t.faq.items.map((item, index) => (
            <div key={index} className={index < t.faq.items.length - 1 ? "border-b border-border pb-4" : ""}>
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesSection 
        sources={[
          { title: "Google Search Central Blog", url: "https://developers.google.com/search/blog", type: "documentation", description: language === "de" ? "Offizielle Google-Updates zu Suche und SEO" : "Official Google updates on search and SEO" },
          { title: "Google AI Overview Documentation", url: "https://support.google.com/websearch/answer/14901683", type: "documentation", description: language === "de" ? "Informationen zu Google AI Overviews" : "Information about Google AI Overviews" },
          { title: "Schema.org", url: "https://schema.org/", type: "documentation", description: language === "de" ? "Strukturierte Daten Spezifikationen" : "Structured data specifications" },
          { title: "Think with Google", url: "https://www.thinkwithgoogle.com/", type: "article", description: language === "de" ? "Google-Insights zu Suchtrends" : "Google insights on search trends" }
        ]}
      />

      <HelpfulnessWidget articleSlug="lokale-suchmaschinenoptimierung-2026" />

      <BlogCTAABTest articleSlug="lokale-suchmaschinenoptimierung-2026" position="end" />
    </ArticleLayout>
  );
};

export default LokaleSeo2026;
