import ArticleLayout from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/blogArticles";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Wrench, Search, MapPin, BarChart3, FileText, Link2, Globe, Star, CheckCircle2, Gauge, Sparkles, Bot, Building2, MessageSquare } from "lucide-react";
import seoToolboxImage from "@/assets/blog/seo-toolbox.jpg";

const SeoToolbox = () => {
  const article = getArticleBySlug("seo-toolbox-kostenlose-ressourcen");

  if (!article) return null;

  const tocItems = [
    { id: "einfuehrung", title: "Warum diese Toolbox?" },
    { id: "google-tools", title: "Google Tools (Offiziell)" },
    { id: "keyword-tools", title: "Keyword-Recherche" },
    { id: "local-seo-tools", title: "Local SEO Tools" },
    { id: "geo-tools", title: "GEO & AI-Optimierung" },
    { id: "technik-tools", title: "Technische SEO Tools" },
    { id: "content-tools", title: "Content & Bilder" },
    { id: "backlink-tools", title: "Backlink-Analyse" },
    { id: "monitoring-tools", title: "Monitoring & Alerts" },
    { id: "checkliste", title: "Starter-Checkliste" },
    { id: "faq", title: "Häufige Fragen" },
  ];

  const keyTakeaways = [
    "50+ kostenlose Tools für SEO, Local SEO, GEO & Google Business",
    "Direkte Links zu allen Tools - sofort einsetzbar",
    "Kategorisiert nach Anwendungsfall: Analyse, Keywords, Local, Technik, Content",
    "Offizielle Google-Tools sind oft besser als kostenpflichtige Alternativen",
    "GEO-Optimierung wird 2026 genauso wichtig wie klassisches SEO"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "Google Search Central - Dokumentation", url: "https://developers.google.com/search" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" },
    { title: "Moz - The Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo" },
    { title: "Ahrefs Blog - SEO Tools", url: "https://ahrefs.com/blog/free-seo-tools/" },
    { title: "Search Engine Journal - Local SEO", url: "https://www.searchenginejournal.com/local-seo/" }
  ];

  const faqItems = [
    {
      question: "Welche SEO-Tools sind wirklich kostenlos?",
      answer: "Google Search Console, Google Analytics 4, Google Business Profile, PageSpeed Insights und viele andere Google-Tools sind vollständig kostenlos. Andere Tools wie Ubersuggest, Ahrefs Webmaster Tools oder Screaming Frog bieten kostenlose Versionen mit Einschränkungen (z.B. 3 Suchen/Tag oder 500 URLs)."
    },
    {
      question: "Brauche ich kostenpflichtige SEO-Tools?",
      answer: "Für die meisten kleinen und mittleren Unternehmen reichen kostenlose Tools völlig aus. Kostenpflichtige Tools wie Ahrefs, Semrush oder Sistrix lohnen sich erst, wenn Sie mehrere Websites betreuen oder professionelles SEO für Kunden machen."
    },
    {
      question: "Was ist der Unterschied zwischen SEO und GEO?",
      answer: "SEO (Search Engine Optimization) optimiert für klassische Suchmaschinen wie Google. GEO (Generative Engine Optimization) optimiert für KI-basierte Suchsysteme wie ChatGPT, Perplexity oder Google AI Overviews, die generative Antworten liefern."
    },
    {
      question: "Welche Tools brauche ich für Local SEO?",
      answer: "Die wichtigsten sind: Google Business Profile (Pflicht!), Google Search Console, ein Citation-Tool wie Whitespark oder BrightLocal, und ein Schema Markup Generator für LocalBusiness-Daten. Optional: Bewertungs-Management-Tools."
    },
    {
      question: "Wie oft sollte ich meine SEO-Daten prüfen?",
      answer: "Search Console: Wöchentlich für Rankings und Fehler. Analytics: Wöchentlich für Traffic-Trends. Google Business Profile: Täglich für neue Bewertungen. Core Web Vitals: Monatlich. Technisches Audit: Quartalsweise."
    },
    {
      question: "Gibt es kostenlose KI-Tools für SEO?",
      answer: "Ja! ChatGPT (Free), Claude, Google Gemini und Perplexity bieten kostenlose Versionen. Diese helfen bei Content-Erstellung, Keyword-Ideen, Meta-Descriptions und FAQ-Generierung. Für Bildoptimierung gibt es Canva (Free) und DALL-E (begrenzt)."
    },
    {
      question: "Was ist das wichtigste Tool für Anfänger?",
      answer: "Google Search Console ist das wichtigste Tool. Es zeigt Ihnen, für welche Keywords Sie ranken, wie oft Sie geklickt werden, und welche technischen Probleme Ihre Website hat - alles kostenlos und mit echten Google-Daten."
    },
    {
      question: "Wie verbessere ich meine Core Web Vitals?",
      answer: "Nutzen Sie PageSpeed Insights für die Analyse, TinyPNG/Squoosh für Bildkomprimierung, und prüfen Sie mit GTmetrix die Ladezeit. Die häufigsten Probleme: Zu große Bilder, langsamer Server, zu viel JavaScript."
    },
    {
      question: "Welche Verzeichnisse sind für Local SEO wichtig?",
      answer: "In Deutschland: Google Business Profile, Bing Places, Apple Maps, Yelp, Gelbe Seiten, Das Örtliche, GoLocal. In der Schweiz: local.ch, search.ch. In Österreich: Herold.at. Branchenspezifische Portale je nach Bereich."
    },
    {
      question: "Wie tracke ich meine lokalen Rankings?",
      answer: "Google Search Console zeigt Impressions und Klicks. Für präzise lokale Rankings nutzen Sie BrightLocal (kostenlose Tools verfügbar), Whitespark oder die manuelle Methode: Inkognito-Suche mit Standort-Angabe."
    }
  ];

  const toolCategories = [
    {
      id: "google-tools",
      title: "Google Tools (Offiziell)",
      icon: <Globe className="h-6 w-6 text-primary" />,
      description: "Die wichtigsten Tools direkt von Google - kostenlos und mit echten Daten",
      tools: [
        { name: "Google Search Console", url: "https://search.google.com/search-console", description: "Rankings, Klicks, Indexierung & technische Fehler", rating: 5, essential: true },
        { name: "Google Analytics 4", url: "https://analytics.google.com", description: "Traffic-Analyse, Conversions & Nutzerverhalten", rating: 5, essential: true },
        { name: "Google Business Profile", url: "https://business.google.com", description: "Ihr kostenloses Unternehmensprofil bei Google Maps", rating: 5, essential: true },
        { name: "PageSpeed Insights", url: "https://pagespeed.web.dev", description: "Core Web Vitals & Performance-Analyse", rating: 5, essential: true },
        { name: "Google Trends", url: "https://trends.google.com", description: "Suchtrends & saisonale Schwankungen", rating: 4, essential: false },
        { name: "Rich Results Test", url: "https://search.google.com/test/rich-results", description: "Schema Markup & Rich Snippets testen", rating: 5, essential: false },
        { name: "Mobile-Friendly Test", url: "https://search.google.com/test/mobile-friendly", description: "Mobile Optimierung prüfen", rating: 4, essential: false },
        { name: "Merchant Center", url: "https://merchants.google.com", description: "Produktdaten für Google Shopping", rating: 4, essential: false }
      ]
    },
    {
      id: "keyword-tools",
      title: "Keyword-Recherche",
      icon: <Search className="h-6 w-6 text-primary" />,
      description: "Finden Sie die richtigen Keywords für Ihre Zielgruppe",
      tools: [
        { name: "Google Keyword Planner", url: "https://ads.google.com/intl/de_de/home/tools/keyword-planner", description: "Suchvolumen & Wettbewerb (Google Ads Account nötig)", rating: 4, essential: true },
        { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest", description: "Keyword-Ideen mit Suchvolumen (3 Suchen/Tag kostenlos)", rating: 4, essential: false },
        { name: "AnswerThePublic", url: "https://answerthepublic.com", description: "Fragen & Long-Tail Keywords visualisiert", rating: 4, essential: false },
        { name: "Keyword Surfer", url: "https://surferseo.com/keyword-surfer-extension", description: "Chrome Extension für Suchvolumen in Google", rating: 4, essential: false },
        { name: "AlsoAsked", url: "https://alsoasked.com", description: "People Also Ask Fragen finden", rating: 4, essential: false },
        { name: "Keywordtool.io", url: "https://keywordtool.io", description: "Keyword-Vorschläge für Google, YouTube, Amazon", rating: 3, essential: false },
        { name: "Soovle", url: "https://soovle.com", description: "Autocomplete-Vorschläge von mehreren Suchmaschinen", rating: 3, essential: false }
      ]
    },
    {
      id: "local-seo-tools",
      title: "Local SEO Tools",
      icon: <MapPin className="h-6 w-6 text-primary" />,
      description: "Speziell für lokale Sichtbarkeit und Google Maps",
      tools: [
        { name: "BrightLocal Free Tools", url: "https://www.brightlocal.com/free-local-seo-tools", description: "GMB Audit, Citation Tracker, Ranking Checker", rating: 4, essential: true },
        { name: "Whitespark", url: "https://whitespark.ca/local-citation-finder", description: "Citation-Quellen finden & NAP prüfen", rating: 4, essential: true },
        { name: "Moz Local Check", url: "https://moz.com/local/search", description: "Lokale Sichtbarkeit & Listings prüfen", rating: 4, essential: false },
        { name: "GMB Everywhere", url: "https://gmbeverywhere.com", description: "Chrome Extension für GMB-Insights", rating: 3, essential: false },
        { name: "PlePer", url: "https://pleper.com", description: "Google Business Profile Insights & Analyse", rating: 4, essential: false },
        { name: "Local Viking", url: "https://localviking.com/free-tools", description: "Kostenlose lokale SEO-Tools", rating: 3, essential: false }
      ]
    },
    {
      id: "geo-tools",
      title: "GEO & AI-Optimierung",
      icon: <Bot className="h-6 w-6 text-primary" />,
      description: "Für ChatGPT, Perplexity & Google AI Overviews optimieren",
      tools: [
        { name: "ChatGPT", url: "https://chat.openai.com", description: "Content-Ideen, Meta-Descriptions, FAQ-Generierung", rating: 5, essential: true },
        { name: "Claude", url: "https://claude.ai", description: "Alternative zu ChatGPT für längere Texte", rating: 5, essential: false },
        { name: "Google Gemini", url: "https://gemini.google.com", description: "Googles KI für SEO-Recherche", rating: 4, essential: false },
        { name: "Perplexity", url: "https://perplexity.ai", description: "KI-Suche mit Quellenangaben - testen Sie Ihre Sichtbarkeit", rating: 5, essential: true },
        { name: "Google AI Test Tool", url: "https://search.google.com/test/rich-results", description: "Testen Sie, ob Ihre Daten für AI Overviews geeignet sind", rating: 4, essential: false },
        { name: "Originality.ai", url: "https://originality.ai", description: "KI-Content erkennen & Plagiat prüfen (begrenzt kostenlos)", rating: 3, essential: false }
      ]
    },
    {
      id: "technik-tools",
      title: "Technische SEO Tools",
      icon: <Gauge className="h-6 w-6 text-primary" />,
      description: "Performance, Crawling & technische Optimierung",
      tools: [
        { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider", description: "Website-Crawler (500 URLs kostenlos)", rating: 5, essential: true },
        { name: "GTmetrix", url: "https://gtmetrix.com", description: "Detaillierte Performance-Analyse", rating: 4, essential: false },
        { name: "WebPageTest", url: "https://www.webpagetest.org", description: "Erweiterte Ladezeit-Analyse", rating: 4, essential: false },
        { name: "Schema Markup Generator", url: "https://technicalseo.com/tools/schema-markup-generator", description: "JSON-LD für LocalBusiness, FAQ, HowTo", rating: 5, essential: true },
        { name: "XML Sitemap Generator", url: "https://www.xml-sitemaps.com", description: "Sitemap erstellen (500 URLs)", rating: 4, essential: false },
        { name: "Robots.txt Tester", url: "https://en.ryte.com/free-tools/robots-txt", description: "Robots.txt prüfen", rating: 4, essential: false },
        { name: "Redirect Checker", url: "https://httpstatus.io", description: "HTTP Status & Redirects prüfen", rating: 4, essential: false },
        { name: "SSL Labs", url: "https://www.ssllabs.com/ssltest", description: "SSL-Zertifikat testen", rating: 4, essential: false }
      ]
    },
    {
      id: "content-tools",
      title: "Content & Bilder",
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: "Content erstellen, optimieren & Bilder komprimieren",
      tools: [
        { name: "Canva", url: "https://www.canva.com", description: "Grafiken & Social Media Bilder erstellen", rating: 5, essential: true },
        { name: "TinyPNG", url: "https://tinypng.com", description: "Bilder komprimieren (PNG/JPG)", rating: 5, essential: true },
        { name: "Squoosh", url: "https://squoosh.app", description: "Bildoptimierung von Google (WebP/AVIF)", rating: 5, essential: true },
        { name: "Remove.bg", url: "https://remove.bg", description: "Hintergrund entfernen (1 Bild/Tag kostenlos)", rating: 4, essential: false },
        { name: "Hemingway Editor", url: "https://hemingwayapp.com", description: "Lesbarkeit verbessern", rating: 4, essential: false },
        { name: "Grammarly", url: "https://www.grammarly.com", description: "Rechtschreibung & Grammatik (Englisch)", rating: 4, essential: false },
        { name: "LanguageTool", url: "https://languagetool.org", description: "Rechtschreibung Deutsch/Englisch", rating: 4, essential: true },
        { name: "Headline Analyzer", url: "https://coschedule.com/headline-analyzer", description: "Überschriften optimieren", rating: 3, essential: false }
      ]
    },
    {
      id: "backlink-tools",
      title: "Backlink-Analyse",
      icon: <Link2 className="h-6 w-6 text-primary" />,
      description: "Backlinks analysieren & neue Linkquellen finden",
      tools: [
        { name: "Ahrefs Webmaster Tools", url: "https://ahrefs.com/webmaster-tools", description: "Backlinks für eigene Website (kostenlos)", rating: 5, essential: true },
        { name: "Moz Link Explorer", url: "https://moz.com/link-explorer", description: "DA/PA & Backlinks (10 Suchen/Monat)", rating: 4, essential: false },
        { name: "Ubersuggest Backlinks", url: "https://neilpatel.com/ubersuggest", description: "Backlink-Übersicht (begrenzt)", rating: 3, essential: false },
        { name: "Majestic", url: "https://majestic.com", description: "Trust Flow & Citation Flow (begrenzt)", rating: 3, essential: false },
        { name: "OpenLinkProfiler", url: "https://openlinkprofiler.org", description: "Kostenlose Backlink-Analyse", rating: 3, essential: false },
        { name: "Disavow Tool", url: "https://search.google.com/search-console/disavow-links", description: "Schädliche Links entwerten (GSC)", rating: 4, essential: false }
      ]
    },
    {
      id: "monitoring-tools",
      title: "Monitoring & Alerts",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      description: "Website überwachen & bei Problemen benachrichtigt werden",
      tools: [
        { name: "Google Alerts", url: "https://www.google.com/alerts", description: "Benachrichtigungen für Keywords & Markenname", rating: 4, essential: true },
        { name: "UptimeRobot", url: "https://uptimerobot.com", description: "Website-Verfügbarkeit überwachen (50 Monitore kostenlos)", rating: 5, essential: true },
        { name: "Visualping", url: "https://visualping.io", description: "Website-Änderungen tracken", rating: 3, essential: false },
        { name: "IFTTT", url: "https://ifttt.com", description: "Automatisierungen für Marketing", rating: 4, essential: false },
        { name: "Mention", url: "https://mention.com", description: "Social Media & Web Monitoring (begrenzt)", rating: 3, essential: false },
        { name: "Siteliner", url: "https://www.siteliner.com", description: "Duplicate Content finden", rating: 4, essential: false }
      ]
    }
  ];

  const directoryList = [
    { category: "Deutschland", entries: ["Google Business Profile", "Bing Places", "Apple Maps", "Yelp", "Gelbe Seiten", "Das Örtliche", "GoLocal", "Stadtbranchenbuch", "11880", "Cylex"] },
    { category: "Österreich", entries: ["Herold.at", "Firmen ABC", "WKO Firmen A-Z", "Tupalo", "Firmenabc.at"] },
    { category: "Schweiz", entries: ["local.ch", "search.ch", "Swisscom Directories", "Yelp Schweiz", "Cylex.ch"] },
    { category: "Branchen-Portale", entries: ["Jameda (Ärzte)", "Anwalt.de", "Houzz (Handwerker)", "TripAdvisor (Hotels)", "TheFork (Restaurants)", "Treatwell (Beauty)", "MyHammer (Handwerker)"] }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} />
        ))}
      </div>
    );
  };

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <BlogImage
        src={seoToolboxImage}
        alt="SEO Toolbox - Alle wichtigen Tools für SEO, Local SEO und GEO"
        priority
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Einführung */}
      <section id="einfuehrung" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Wrench className="h-6 w-6 text-primary" />
          Warum diese Toolbox?
        </h2>
        <p className="mb-4 text-muted-foreground">
          Im SEO-Dschungel verliert man schnell den Überblick. Hunderte Tools versprechen bessere Rankings - 
          doch welche brauchen Sie wirklich? Diese Toolbox sammelt <strong>über 50 kostenlose Tools</strong>, 
          die tatsächlich funktionieren.
        </p>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 my-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Diese Toolbox ist für Sie, wenn Sie:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Ein lokales Unternehmen betreiben und mehr Kunden über Google gewinnen wollen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>SEO ohne teure Agenturen oder Software selbst machen möchten</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Für 2026 auch auf KI-Suche (GEO) vorbereitet sein wollen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Eine zentrale Sammlung aller wichtigen SEO-Links suchen</span>
            </li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest 
        articleSlug="seo-toolbox-kostenlose-ressourcen"
        position="middle"
      />

      {/* Tool Categories */}
      {toolCategories.map((category) => (
        <section key={category.id} id={category.id} className="mb-12 scroll-mt-20">
          <h2 className="flex items-center gap-3 text-2xl font-bold mb-2">
            {category.icon}
            {category.title}
          </h2>
          <p className="text-muted-foreground mb-6">{category.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            {category.tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
              >
                {tool.essential && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                    Essential
                  </span>
                )}
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {tool.name}
                    <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                  </h4>
                  {renderStars(tool.rating)}
                </div>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Verzeichnisse */}
      <section id="verzeichnisse" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Building2 className="h-6 w-6 text-primary" />
          Wichtige Verzeichnisse für Local SEO
        </h2>
        <p className="text-muted-foreground mb-6">
          Diese Verzeichnisse sollten Sie für Ihre NAP-Konsistenz (Name, Adresse, Telefon) nutzen:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {directoryList.map((dir, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                {dir.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {dir.entries.map((entry, i) => (
                  <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {entry}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checkliste */}
      <section id="checkliste" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          Starter-Checkliste: Die ersten 7 Schritte
        </h2>
        
        <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-xl p-6">
          <ol className="space-y-4">
            {[
              { step: "Google Search Console einrichten", desc: "Verifizieren Sie Ihre Website und erhalten Sie echte Ranking-Daten", url: "https://search.google.com/search-console" },
              { step: "Google Business Profile anlegen/optimieren", desc: "Ihr kostenloses Firmenprofil bei Google Maps", url: "https://business.google.com" },
              { step: "Google Analytics 4 installieren", desc: "Verstehen Sie, woher Ihre Besucher kommen", url: "https://analytics.google.com" },
              { step: "PageSpeed Insights prüfen", desc: "Testen Sie Ihre Website-Geschwindigkeit", url: "https://pagespeed.web.dev" },
              { step: "Schema Markup hinzufügen", desc: "LocalBusiness JSON-LD für Rich Snippets", url: "https://technicalseo.com/tools/schema-markup-generator" },
              { step: "In 5-10 Verzeichnisse eintragen", desc: "Starten Sie mit Google, Bing, Yelp, Gelbe Seiten", url: "#verzeichnisse" },
              { step: "Erste Keyword-Recherche", desc: "Finden Sie lokale Keywords mit Ubersuggest oder Google Keyword Planner", url: "https://neilpatel.com/ubersuggest" }
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <a 
                    href={item.url} 
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.step}
                    {item.url.startsWith("http") && <ExternalLink className="h-3 w-3" />}
                  </a>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BlogCTAABTest 
        articleSlug="seo-toolbox-kostenlose-ressourcen"
        position="end"
      />

      {/* FAQ */}
      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <MessageSquare className="h-6 w-6 text-primary" />
          Häufige Fragen zur SEO-Toolbox
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="seo-toolbox-kostenlose-ressourcen" />

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default SeoToolbox;