import { Link } from "react-router-dom";
import { 
  FileText, Bot, Hash, List, Quote, Search, Code, 
  CheckCircle, Sparkles, BookOpen, Layers, MessageSquare,
  Zap, Eye, Target, ArrowRight
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const ContentFormattingGuidelines = () => {
  const { language } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": language === "de" ? "KI-freundliche Content-Richtlinien" : "AI-Friendly Content Guidelines",
    "description": language === "de"
      ? "Unsere Formatierungsrichtlinien für KI-optimierte Inhalte: Strukturierte Daten, Featured Snippets und AI Overviews."
      : "Our formatting guidelines for AI-optimized content: structured data, featured snippets, and AI Overviews.",
    "url": "https://localdominate.org/content-formatting-guidelines",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator",
      "url": "https://localdominate.org"
    }
  };

  const title = language === "de" ? "KI-freundliche Content-Richtlinien" : "AI-Friendly Content Guidelines";
  const metaDesc = language === "de"
    ? "So formatieren wir Inhalte für Google AI Overviews, Featured Snippets und LLM-Extraktion. Unsere Standards für KI-optimierten Content."
    : "How we format content for Google AI Overviews, featured snippets, and LLM extraction. Our standards for AI-optimized content.";

  const principles = language === "de" ? [
    {
      icon: Bot,
      title: "KI-First Content-Architektur",
      description: "Jeder Artikel wird so strukturiert, dass KI-Systeme (Google AI Overviews, Perplexity, ChatGPT) ihn zuverlässig verstehen, zitieren und weiterempfehlen können.",
      rules: [
        "Jeder Abschnitt beginnt mit einer prägnanten Zusammenfassung (40–60 Wörter)",
        "Kernaussagen stehen im ersten Satz – nicht am Ende des Absatzes",
        "Fachbegriffe werden bei der ersten Verwendung inline definiert",
        "Jede Sektion hat eine eigenständig verständliche Kernbotschaft"
      ]
    },
    {
      icon: Hash,
      title: "Semantische Heading-Hierarchie",
      description: "Überschriften bilden eine logische Baumstruktur, die Suchmaschinen und KI-Crawlern eine klare Themen-Taxonomie liefert.",
      rules: [
        "Ein H1 pro Seite – enthält das Primär-Keyword",
        "H2-Überschriften als Frage formuliert (Voice Search & AI Overviews)",
        "H3–H4 für Unterthemen – maximal 3 Ebenen tief",
        "Keine übersprungenen Heading-Levels (H2 → H4 verboten)"
      ]
    },
    {
      icon: Target,
      title: "Featured-Snippet-Optimierung",
      description: "Wir formatieren Inhalte gezielt für die drei Featured-Snippet-Typen: Paragraph, Liste und Tabelle.",
      rules: [
        "Definitions-Paragraphen: 40–60 Wörter, beginnen mit '[Begriff] ist/bezeichnet...'",
        "Listen: Maximal 8 Punkte, jeder Punkt beginnt mit einem Verb oder Schlüsselwort",
        "Tabellen: Klare Spaltenüberschriften, maximal 5 Spalten, vergleichende Daten",
        "data-featured-snippet und data-speakable Attribute für AI-Extraktion"
      ]
    },
    {
      icon: Layers,
      title: "Strukturierte Daten & Schema Markup",
      description: "Jede Seite enthält passende JSON-LD Schema-Markierungen, die KI-Systemen maschinenlesbare Kontextinformationen liefern.",
      rules: [
        "Article-Schema für jeden Blogartikel (Autor, Datum, Publisher)",
        "FAQPage-Schema bei Artikeln mit FAQ-Sektionen",
        "DefinedTerm-Schema für Glossar- und Definitions-Einträge",
        "HowTo-Schema für Schritt-für-Schritt-Anleitungen mit Zeitangaben"
      ]
    },
    {
      icon: Quote,
      title: "Zitierbare Kernaussagen",
      description: "Jeder Artikel enthält 3–5 eigenständig zitierbare Aussagen, die KI-Systeme als Quelle referenzieren können.",
      rules: [
        "Datenbasierte Aussagen mit konkreten Zahlen und Quellen",
        "Definitive Statements statt vager Formulierungen ('X erhöht Y um Z%')",
        "Kurze, abgeschlossene Sätze – keine verschachtelten Nebensätze",
        "Speakable-Markup für Voice-Search-Extraktion"
      ]
    },
    {
      icon: List,
      title: "Scannbare Inhaltsstruktur",
      description: "Lange Fließtexte werden durch strukturierte Elemente aufgelockert, die sowohl für menschliche Leser als auch KI-Crawler optimal parsbar sind.",
      rules: [
        "Absätze maximal 3–4 Sätze – ein Gedanke pro Absatz",
        "Bullet-Listen für Aufzählungen ab 3 Punkten",
        "Vergleichstabellen für Gegenüberstellungen",
        "Callout-Boxen für wichtige Hinweise und Definitionen"
      ]
    },
    {
      icon: Eye,
      title: "Definitions-Dual-Layer-System",
      description: "Ein zweistufiges Definitions-System stellt sicher, dass KI-Systeme Fachbegriffe zuverlässig extrahieren und zuordnen können.",
      rules: [
        "Inline-Definitions-Boxen nach der ersten relevanten H2-Überschrift",
        "Artikel-Glossar am Ende mit allen verwendeten Fachbegriffen",
        "DefinedTerm-Schema für jeden Glossareintrag",
        "Automatische Verlinkung zum SEO-Lexikon für weiterführende Informationen"
      ]
    },
    {
      icon: MessageSquare,
      title: "LLM-Zusammenfassungen",
      description: "Jeder Pillar-Artikel enthält eine maschinenlesbare Zusammenfassung, die LLMs eine strukturierte Extraktion ermöglicht.",
      rules: [
        "Kernfrage + Direktantwort als primäres Extraktionsziel",
        "5–8 Kernfakten als eigenständige, zitierbare Statements",
        "Zielgruppe und verwandte Themen für Kontextualisierung",
        "Sowohl visuell als auch als sr-only für Crawler verfügbar"
      ]
    },
    {
      icon: Zap,
      title: "Technische AI-Signale",
      description: "HTML-Attribute und Meta-Tags signalisieren KI-Crawlern, welche Inhalte besonders relevant und extrahierbar sind.",
      rules: [
        "data-ai-summary Attribut auf zusammenfassenden Elementen",
        "data-speakable auf Voice-Search-optimierten Passagen",
        "data-featured-snippet auf Snippet-optimierten Blöcken",
        "Semantic HTML (article, section, aside, nav) statt generischer divs"
      ]
    }
  ] : [
    {
      icon: Bot,
      title: "AI-First Content Architecture",
      description: "Every article is structured so AI systems (Google AI Overviews, Perplexity, ChatGPT) can reliably understand, cite, and recommend it.",
      rules: [
        "Each section starts with a concise summary (40–60 words)",
        "Key statements appear in the first sentence – not buried at the end",
        "Technical terms are defined inline on first use",
        "Every section carries a self-contained core message"
      ]
    },
    {
      icon: Hash,
      title: "Semantic Heading Hierarchy",
      description: "Headings form a logical tree structure providing search engines and AI crawlers with a clear topic taxonomy.",
      rules: [
        "One H1 per page containing the primary keyword",
        "H2 headings formatted as questions (Voice Search & AI Overviews)",
        "H3–H4 for subtopics – maximum 3 levels deep",
        "No skipped heading levels (H2 → H4 forbidden)"
      ]
    },
    {
      icon: Target,
      title: "Featured Snippet Optimization",
      description: "We format content specifically for the three featured snippet types: paragraph, list, and table.",
      rules: [
        "Definition paragraphs: 40–60 words, starting with '[Term] is/refers to...'",
        "Lists: Maximum 8 items, each starting with a verb or keyword",
        "Tables: Clear column headers, max 5 columns, comparative data",
        "data-featured-snippet and data-speakable attributes for AI extraction"
      ]
    },
    {
      icon: Layers,
      title: "Structured Data & Schema Markup",
      description: "Every page includes appropriate JSON-LD schema markup providing AI systems with machine-readable context.",
      rules: [
        "Article schema for every blog post (author, date, publisher)",
        "FAQPage schema for articles with FAQ sections",
        "DefinedTerm schema for glossary and definition entries",
        "HowTo schema for step-by-step guides with timing"
      ]
    },
    {
      icon: Quote,
      title: "Quotable Key Statements",
      description: "Every article contains 3–5 independently quotable statements that AI systems can reference as sources.",
      rules: [
        "Data-backed claims with specific numbers and sources",
        "Definitive statements over vague phrasing ('X increases Y by Z%')",
        "Short, complete sentences – no nested subclauses",
        "Speakable markup for voice search extraction"
      ]
    },
    {
      icon: List,
      title: "Scannable Content Structure",
      description: "Long prose is broken up with structural elements optimally parsable by both human readers and AI crawlers.",
      rules: [
        "Paragraphs maximum 3–4 sentences – one thought per paragraph",
        "Bullet lists for enumerations of 3+ items",
        "Comparison tables for side-by-side analysis",
        "Callout boxes for important notes and definitions"
      ]
    },
    {
      icon: Eye,
      title: "Dual-Layer Definition System",
      description: "A two-tier definition system ensures AI systems can reliably extract and classify technical terms.",
      rules: [
        "Inline definition boxes after the first relevant H2 heading",
        "Article glossary at the end with all technical terms used",
        "DefinedTerm schema for every glossary entry",
        "Automatic linking to the SEO lexicon for further reading"
      ]
    },
    {
      icon: MessageSquare,
      title: "LLM Summaries",
      description: "Every pillar article includes a machine-readable summary enabling structured extraction by LLMs.",
      rules: [
        "Core question + direct answer as primary extraction target",
        "5–8 key facts as independent, quotable statements",
        "Target audience and related topics for contextualization",
        "Available both visually and as sr-only for crawlers"
      ]
    },
    {
      icon: Zap,
      title: "Technical AI Signals",
      description: "HTML attributes and meta tags signal to AI crawlers which content is particularly relevant and extractable.",
      rules: [
        "data-ai-summary attribute on summarizing elements",
        "data-speakable on voice-search-optimized passages",
        "data-featured-snippet on snippet-optimized blocks",
        "Semantic HTML (article, section, aside, nav) over generic divs"
      ]
    }
  ];

  const checklist = language === "de" ? [
    "✅ Primär-Keyword im H1, Meta-Title (<60 Zeichen) und Meta-Description (<160 Zeichen)",
    "✅ Mindestens eine Definition im Featured-Snippet-Format (40–60 Wörter)",
    "✅ Heading-Hierarchie: H1 → H2 → H3 ohne Sprünge",
    "✅ H2-Überschriften als Fragen formuliert",
    "✅ JSON-LD Schema (Article + FAQPage wenn zutreffend)",
    "✅ 3–5 zitierbare Kernaussagen mit konkreten Daten",
    "✅ LLM-Zusammenfassung für Pillar-Artikel",
    "✅ Glossar mit DefinedTerm-Schema am Artikelende",
    "✅ data-speakable auf Voice-Search-Passagen",
    "✅ Alle Bilder mit beschreibendem Alt-Text"
  ] : [
    "✅ Primary keyword in H1, meta title (<60 chars) and meta description (<160 chars)",
    "✅ At least one definition in featured snippet format (40–60 words)",
    "✅ Heading hierarchy: H1 → H2 → H3 without skips",
    "✅ H2 headings formatted as questions",
    "✅ JSON-LD schema (Article + FAQPage where applicable)",
    "✅ 3–5 quotable key statements with specific data",
    "✅ LLM summary for pillar articles",
    "✅ Glossary with DefinedTerm schema at article end",
    "✅ data-speakable on voice search passages",
    "✅ All images with descriptive alt text"
  ];

  return (
    <>
      <SEOHead
        title={title}
        description={metaDesc}
        canonicalUrl="https://localdominate.org/content-formatting-guidelines"
        lang={language}
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
          <div className="container max-w-4xl py-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Local Dominator
            </Link>
          </div>
        </header>

        <main className="container max-w-3xl py-12 px-4">
          <SiteBreadcrumbs includeSchema />

          {/* Hero */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-1">
                {language === "de"
                  ? "Wie wir Inhalte für KI-Systeme, Voice Search & Featured Snippets optimieren"
                  : "How we optimize content for AI systems, voice search & featured snippets"}
              </p>
            </div>
          </div>

          {/* Intro */}
          <div
            className="bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 rounded-xl p-6 my-8"
            data-ai-summary="true"
            data-speakable="true"
          >
            <p className="text-foreground leading-relaxed">
              {language === "de"
                ? "Diese Richtlinien definieren, wie wir jeden Inhalt auf Local Dominator formatieren, damit er von Google AI Overviews, Perplexity, ChatGPT und anderen KI-Systemen optimal verstanden, extrahiert und als vertrauenswürdige Quelle zitiert wird. Unser Ziel: Maximale Sichtbarkeit in der neuen, KI-gesteuerten Suchlandschaft."
                : "These guidelines define how we format every piece of content on Local Dominator so it can be optimally understood, extracted, and cited as a trustworthy source by Google AI Overviews, Perplexity, ChatGPT, and other AI systems. Our goal: Maximum visibility in the new AI-driven search landscape."}
            </p>
          </div>

          {/* Principles */}
          <div className="space-y-8 mt-10">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <section key={index} className="card-premium p-6" data-ai-summary="true">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        <span className="text-primary/60 text-sm font-mono mr-2">0{index + 1}</span>
                        {principle.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 ml-[52px]">
                    {principle.description}
                  </p>
                  <ul className="space-y-2.5 ml-[52px]">
                    {principle.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          {/* Pre-publish checklist */}
          <section className="mt-12">
            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500/10 via-primary/5 to-cyan-500/10 border-b border-border px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                    <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-lg">
                      {language === "de" ? "Pre-Publish Checkliste" : "Pre-Publish Checklist"}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {language === "de"
                        ? "Jeder Artikel muss diese Punkte erfüllen, bevor er veröffentlicht wird"
                        : "Every article must meet these criteria before publication"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {checklist.map((item, i) => (
                    <li key={i} className="text-sm text-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Code example */}
          <section className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">
                {language === "de" ? "Beispiel: AI-optimierter Definitions-Block" : "Example: AI-Optimized Definition Block"}
              </h2>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 font-mono text-xs text-muted-foreground overflow-x-auto">
              <pre>{`<aside data-featured-snippet="definition"
       data-speakable="true"
       itemScope itemType="https://schema.org/DefinedTerm">
  <h4 itemProp="name">Definition: Local SEO</h4>
  <p itemProp="description">
    Local SEO bezeichnet die Optimierung der 
    Online-Sichtbarkeit eines Unternehmens für 
    standortbezogene Suchanfragen. Ziel ist es, 
    in Google Maps und den lokalen Suchergebnissen 
    prominent zu erscheinen.
  </p>
</aside>`}</pre>
            </div>
          </section>

          {/* Cross-links */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">
              {language === "de" ? "Verwandte Seiten" : "Related Pages"}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/redaktionsrichtlinien" className="text-primary hover:underline text-sm flex items-center gap-1">
                <ArrowRight className="h-3 w-3" />
                {language === "de" ? "Redaktionsrichtlinien" : "Editorial Guidelines"}
              </Link>
              <Link to="/forschungsmethodik" className="text-primary hover:underline text-sm flex items-center gap-1">
                <ArrowRight className="h-3 w-3" />
                {language === "de" ? "Forschungsmethodik" : "Research Methodology"}
              </Link>
              <Link to="/ueber-uns" className="text-primary hover:underline text-sm flex items-center gap-1">
                <ArrowRight className="h-3 w-3" />
                {language === "de" ? "Über uns" : "About Us"}
              </Link>
              <Link to="/blog/ai-visibility-checklist" className="text-primary hover:underline text-sm flex items-center gap-1">
                <ArrowRight className="h-3 w-3" />
                {language === "de" ? "AI Visibility Checklist" : "AI Visibility Checklist"}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContentFormattingGuidelines;
