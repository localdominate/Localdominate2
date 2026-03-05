import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Code, Smartphone, Zap, Shield, Search, Globe, FileCode, Settings,
  ArrowRight, CheckCircle2, AlertTriangle, Gauge, Brain, Eye, Lock,
  Server, Database, Layers, Monitor, TrendingUp, BookOpen
} from "lucide-react";

const TechnischesLocalSeoGuide = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("technisches-local-seo-guide", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "warum-technical-seo", title: "Warum Technical SEO?" },
    { id: "hub-artikel", title: "Alle Technical-SEO-Guides" },
    { id: "core-web-vitals", title: "Core Web Vitals" },
    { id: "schema-markup", title: "Schema Markup" },
    { id: "mobile-optimierung", title: "Mobile Optimierung" },
    { id: "eeat", title: "E-E-A-T Signale" },
    { id: "ai-seo", title: "AI & Zukunft" },
    { id: "checkliste", title: "Technische Checkliste" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was ist Technical SEO für lokale Unternehmen?", answer: "Technical SEO umfasst alle technischen Maßnahmen, die Suchmaschinen das Crawlen, Indexieren und Verstehen Ihrer Website erleichtern. Für lokale Unternehmen sind besonders Core Web Vitals, Schema Markup (LocalBusiness), Mobile-Optimierung und E-E-A-T-Signale entscheidend." },
    { question: "Welche Core Web Vitals sind am wichtigsten für Local SEO?", answer: "Alle drei Metriken sind wichtig: LCP (Largest Contentful Paint) unter 2,5 Sekunden, INP (Interaction to Next Paint) unter 200ms, und CLS (Cumulative Layout Shift) unter 0,1. Da 92% der lokalen Suchen mobil sind, ist besonders die mobile Performance kritisch." },
    { question: "Brauche ich Schema Markup für mein lokales Unternehmen?", answer: "Ja, unbedingt. LocalBusiness Schema Markup hilft Google, Ihre Geschäftsdaten (Name, Adresse, Öffnungszeiten, Bewertungen) korrekt zu verstehen und in Rich Snippets anzuzeigen. Es ist einer der stärksten technischen Ranking-Faktoren für lokale Suchergebnisse." },
    { question: "Wie wichtig ist Mobile-Optimierung für lokale Suchen?", answer: "Extrem wichtig. Google nutzt den Mobile-First-Index, d.h. die mobile Version Ihrer Website wird für das Ranking herangezogen. 92% der lokalen Suchen kommen vom Smartphone, und 53% der Nutzer verlassen Seiten, die länger als 3 Sekunden laden." },
    { question: "Was bedeutet E-E-A-T für lokale Unternehmen?", answer: "E-E-A-T steht für Experience, Expertise, Authoritativeness und Trustworthiness. Für lokale Unternehmen bedeutet das: Zeigen Sie echte Erfahrung (Fotos, Fallstudien), Fachwissen (Zertifikate, Qualifikationen), Autorität (Bewertungen, Erwähnungen) und Vertrauenswürdigkeit (HTTPS, Impressum, Datenschutz)." },
    { question: "Wie beeinflusst AI die technische lokale SEO?", answer: "Google AI Overviews und andere KI-Features verändern, wie lokale Suchergebnisse dargestellt werden. Strukturierte Daten, FAQ-Schemas und speakable-Properties werden wichtiger, damit KI-Systeme Ihre Inhalte korrekt zitieren können." },
    { question: "Welche technischen SEO-Fehler kosten lokale Rankings?", answer: "Die häufigsten Fehler: fehlende mobile Optimierung, kein Schema Markup, langsame Ladezeiten (schlechte Core Web Vitals), fehlendes HTTPS, nicht indexierbare Seiten, doppelte Inhalte, und fehlende XML-Sitemap mit hreflang für mehrsprachige Regionen." },
    { question: "Wie oft sollte ich ein technisches SEO-Audit durchführen?", answer: "Mindestens vierteljährlich für ein vollständiges Audit. Core Web Vitals und Crawl-Errors sollten monatlich überwacht werden. Nach Website-Änderungen (Relaunch, Plugin-Updates) immer sofort prüfen." }
  ];

  const technicalArticles = [
    {
      slug: "core-web-vitals-local-seo",
      title: "Core Web Vitals für lokale Websites",
      description: "LCP, INP & CLS optimieren für bessere Rankings und Conversions",
      icon: <Gauge className="h-6 w-6" />,
      category: "Performance",
      color: "from-green-500/10 to-green-500/5 border-green-500/20",
      iconColor: "text-green-500"
    },
    {
      slug: "schema-markup-local-seo",
      title: "Schema Markup für Local SEO",
      description: "LocalBusiness, FAQ & HowTo Schema richtig implementieren",
      icon: <Code className="h-6 w-6" />,
      category: "Strukturierte Daten",
      color: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
      iconColor: "text-blue-500"
    },
    {
      slug: "mobile-local-seo",
      title: "Mobile Local SEO Optimierung",
      description: "Mobile-First-Index, AMP & responsive Design für lokale Suchen",
      icon: <Smartphone className="h-6 w-6" />,
      category: "Mobile",
      color: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
      iconColor: "text-purple-500"
    },
    {
      slug: "e-e-a-t-lokale-unternehmen",
      title: "E-E-A-T für lokale Unternehmen",
      description: "Experience, Expertise, Authority & Trust aufbauen",
      icon: <Shield className="h-6 w-6" />,
      category: "Trust & Authority",
      color: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
      iconColor: "text-amber-500"
    },
    {
      slug: "ki-tools-local-seo",
      title: "KI-Tools für Local SEO",
      description: "Die besten AI-Tools für lokale Suchmaschinenoptimierung",
      icon: <Brain className="h-6 w-6" />,
      category: "KI & Automatisierung",
      color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
      iconColor: "text-cyan-500"
    },
    {
      slug: "ai-search-optimization-2026",
      title: "AI Search Optimization 2026",
      description: "Optimierung für AI Overviews, SGE & KI-Suchmaschinen",
      icon: <Search className="h-6 w-6" />,
      category: "AI Search",
      color: "from-rose-500/10 to-rose-500/5 border-rose-500/20",
      iconColor: "text-rose-500"
    },
    {
      slug: "google-ai-overviews-local-seo",
      title: "Google AI Overviews & Local SEO",
      description: "Wie AI Overviews lokale Suchergebnisse verändern",
      icon: <Eye className="h-6 w-6" />,
      category: "AI Search",
      color: "from-indigo-500/10 to-indigo-500/5 border-indigo-500/20",
      iconColor: "text-indigo-500"
    }
  ];

  const checklistItems = [
    { category: "Crawling & Indexierung", items: ["XML-Sitemap vorhanden & in Search Console eingereicht", "Robots.txt korrekt konfiguriert", "Canonical Tags auf allen Seiten", "Keine orphan pages (verwaiste Seiten)", "Hreflang für mehrsprachige Seiten (CH/AT)"] },
    { category: "Performance", items: ["LCP unter 2,5 Sekunden", "INP unter 200ms", "CLS unter 0,1", "TTFB unter 800ms", "Bilder in WebP/AVIF mit lazy loading"] },
    { category: "Strukturierte Daten", items: ["LocalBusiness Schema implementiert", "FAQ Schema auf relevanten Seiten", "Breadcrumb Schema", "Review/AggregateRating Schema", "Speakable Properties für AI"] },
    { category: "Mobile & Sicherheit", items: ["Responsive Design (Mobile-First)", "Touch-freundliche Buttons (min. 48px)", "HTTPS auf allen Seiten", "Kein Mixed Content", "Schnelle mobile Ladezeit (<3s)"] },
    { category: "E-E-A-T Signale", items: ["Impressum & Datenschutzerklärung", "Über-uns-Seite mit Team-Fotos", "Kundenbewertungen sichtbar eingebunden", "Branchenrelevante Zertifikate/Auszeichnungen", "Regelmäßig aktualisierte Inhalte"] }
  ];

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-3 text-center">
            <Gauge className="h-6 w-6 mx-auto mb-1 text-green-500" />
            <div className="text-2xl font-bold text-green-600">7</div>
            <p className="text-xs text-muted-foreground">Technical Guides</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-3 text-center">
            <Code className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <div className="text-2xl font-bold text-blue-600">25+</div>
            <p className="text-xs text-muted-foreground">Code-Beispiele</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-3 text-center">
            <Layers className="h-6 w-6 mx-auto mb-1 text-purple-500" />
            <div className="text-2xl font-bold text-purple-600">5</div>
            <p className="text-xs text-muted-foreground">Themencluster</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
          <CardContent className="p-3 text-center">
            <CheckCircle2 className="h-6 w-6 mx-auto mb-1 text-amber-500" />
            <div className="text-2xl font-bold text-amber-600">25</div>
            <p className="text-xs text-muted-foreground">Checklisten-Punkte</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Technisches Local SEO: Die unsichtbare Grundlage Ihres Ranking-Erfolgs</h2>
        <AutoLexikonParagraph>
          <p className="text-lg mb-4" data-ai-summary="true">
            <strong>Technisches SEO</strong> ist das Fundament jeder erfolgreichen lokalen Online-Präsenz. Während Content und Backlinks die sichtbaren Säulen sind, entscheidet die technische Infrastruktur darüber, ob Google Ihre Website überhaupt korrekt crawlen, indexieren und verstehen kann.
          </p>
        </AutoLexikonParagraph>
        <p className="mb-4">
          Für lokale Unternehmen ist technisches SEO besonders kritisch: <strong>92% der lokalen Suchen</strong> kommen vom Smartphone, was perfekte Mobile-Performance voraussetzt. Gleichzeitig nutzt Google strukturierte Daten wie <LexikonLink term="Schema Markup" />, um Ihre Geschäftsinformationen in den <LexikonLink term="Local Pack">Local Pack</LexikonLink> und <LexikonLink term="Rich Snippets" /> korrekt darzustellen.
        </p>
        <p className="mb-6">
          Dieser Hub-Artikel verknüpft alle technischen SEO-Themen für lokale Unternehmen zu einem umfassenden Wissens-Netzwerk. Von <LexikonLink term="Core Web Vitals" /> über <LexikonLink term="Schema Markup" /> bis hin zu AI-Optimierung – hier finden Sie den Einstieg in jeden technischen Aspekt.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="technisches-local-seo-guide" />

      {/* Warum Technical SEO */}
      <section id="warum-technical-seo">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Warum technisches SEO für lokale Unternehmen unverzichtbar ist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Ranking-Vorteile</h3>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Core Web Vitals sind offizieller Ranking-Faktor seit 2021</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Schema Markup ermöglicht Rich Snippets mit Sternen & Öffnungszeiten</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Mobile-First-Index priorisiert technisch optimierte Seiten</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> HTTPS ist Vertrauenssignal und Ranking-Faktor</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <h3 className="font-semibold">Kosten bei Vernachlässigung</h3>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> 53% verlassen Seiten, die &gt;3 Sek. laden</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> 1 Sek. langsamer = 7% weniger Conversions</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Fehlende Indexierung = komplette Unsichtbarkeit</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" /> Ohne Schema keine Rich Snippets = weniger Klicks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              So nutzen Sie diesen Hub
            </h4>
            <p className="text-sm text-muted-foreground">
              Dieser Artikel gibt Ihnen einen Überblick über alle technischen SEO-Aspekte für lokale Unternehmen. Jedes Thema wird kurz vorgestellt und verlinkt auf den detaillierten Deep-Dive-Artikel. Am Ende finden Sie eine komplette technische Checkliste zum Abhaken.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Hub Article Grid */}
      <section id="hub-artikel">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Alle Technical-SEO-Guides im Überblick</h2>
        <p className="text-muted-foreground mb-6">
          Klicken Sie auf einen Guide, um zum vollständigen Deep-Dive-Artikel zu gelangen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {technicalArticles.map((article) => (
            <Link key={article.slug} to={`/blog/${article.slug}`} className="block group">
              <Card className={`bg-gradient-to-br ${article.color} hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] h-full`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className={`${article.iconColor} mt-1 shrink-0`}>
                      {article.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      </div>
                      <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.description}</p>
                      <div className="flex items-center gap-1 mt-2 text-primary text-sm font-medium">
                        Zum Guide <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <BlogCTAABTest position="middle" articleSlug="technisches-local-seo-guide" />

      {/* Core Web Vitals Teaser */}
      <section id="core-web-vitals">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <LexikonLink term="Core Web Vitals" />: Performance als Ranking-Faktor
        </h2>
        <AutoLexikonParagraph>
          <p className="mb-4">
            Core Web Vitals messen drei Aspekte der Nutzererfahrung: <strong>Ladegeschwindigkeit (LCP)</strong>, <strong>Interaktivität (INP)</strong> und <strong>visuelle Stabilität (CLS)</strong>. Seit 2021 sind sie ein offizieller Google-Ranking-Faktor – und für lokale Unternehmen mit überwiegend mobilen Nutzern besonders relevant.
          </p>
        </AutoLexikonParagraph>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-green-600">&lt;2.5s</div>
            <p className="text-xs text-muted-foreground">LCP (Laden)</p>
          </Card>
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-blue-600">&lt;200ms</div>
            <p className="text-xs text-muted-foreground">INP (Reaktion)</p>
          </Card>
          <Card className="text-center p-3">
            <div className="text-2xl font-bold text-purple-600">&lt;0.1</div>
            <p className="text-xs text-muted-foreground">CLS (Stabilität)</p>
          </Card>
        </div>

        <Link to="/blog/core-web-vitals-local-seo" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6">
          → Zum vollständigen Core Web Vitals Guide
        </Link>
      </section>

      {/* Schema Markup Teaser */}
      <section id="schema-markup" className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <LexikonLink term="Schema Markup" />: Strukturierte Daten für lokale Unternehmen
        </h2>
        <AutoLexikonParagraph>
          <p className="mb-4">
            Schema Markup ist <strong>der unsichtbare Turbo für Ihre lokale Sichtbarkeit</strong>. Mit strukturierten Daten wie LocalBusiness, FAQPage und AggregateRating helfen Sie Google, Ihre Geschäftsdaten korrekt zu interpretieren und in erweiterten Suchergebnissen (Rich Snippets) darzustellen.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">Wichtigste Schema-Typen für lokale Unternehmen:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>LocalBusiness</strong> – Adresse, Telefon, Öffnungszeiten</div>
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>FAQPage</strong> – Häufig gestellte Fragen</div>
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>AggregateRating</strong> – Bewertungs-Sterne</div>
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>HowTo</strong> – Schritt-für-Schritt Anleitungen</div>
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>Product/Service</strong> – Angebote & Preise</div>
              <div className="flex items-center gap-2"><FileCode className="h-4 w-4 text-blue-500" /> <strong>Event</strong> – Lokale Veranstaltungen</div>
            </div>
          </CardContent>
        </Card>

        <Link to="/blog/schema-markup-local-seo" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6">
          → Zum vollständigen Schema Markup Guide mit Code-Beispielen
        </Link>
      </section>

      {/* Mobile SEO Teaser */}
      <section id="mobile-optimierung" className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Mobile Optimierung: Der wichtigste Kanal für lokale Suchen</h2>
        <AutoLexikonParagraph>
          <p className="mb-4">
            Seit Google den <LexikonLink term="Mobile First Index" /> verwendet, ist die mobile Version Ihrer Website die primäre Bewertungsgrundlage. Für lokale Unternehmen ist das besonders relevant: <strong>„In der Nähe"-Suchen kommen fast ausschließlich von Smartphones</strong>, oft in zeitkritischen Situationen.
          </p>
        </AutoLexikonParagraph>
        
        <Card className="bg-muted/50 mb-4">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Mobile-Optimierung in Zahlen:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>📱 <strong>92%</strong> der lokalen Suchen kommen vom Smartphone</li>
              <li>⚡ <strong>53%</strong> verlassen Seiten mit &gt;3 Sek. Ladezeit</li>
              <li>📞 <strong>76%</strong> der „in der Nähe"-Sucher besuchen innerhalb 24h ein Geschäft</li>
              <li>🔍 <strong>28%</strong> der mobilen lokalen Suchen führen zu einem Kauf</li>
            </ul>
          </CardContent>
        </Card>

        <Link to="/blog/mobile-local-seo" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6">
          → Zum vollständigen Mobile Local SEO Guide
        </Link>
      </section>

      {/* E-E-A-T Teaser */}
      <section id="eeat" className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">E-E-A-T: Vertrauen & Autorität aufbauen</h2>
        <AutoLexikonParagraph>
          <p className="mb-4">
            <LexikonLink term="E-E-A-T" /> (Experience, Expertise, Authoritativeness, Trustworthiness) beschreibt Googles Qualitätskriterien für Websites. Für lokale Unternehmen – besonders in YMYL-Branchen wie Gesundheit oder Finanzen – sind E-E-A-T-Signale <strong>entscheidend für die Ranking-Position</strong>.
          </p>
        </AutoLexikonParagraph>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <Card className="text-center p-3">
            <div className="text-xl font-bold">🎯</div>
            <p className="text-xs font-medium mt-1">Experience</p>
            <p className="text-xs text-muted-foreground">Echte Erfahrung</p>
          </Card>
          <Card className="text-center p-3">
            <div className="text-xl font-bold">🎓</div>
            <p className="text-xs font-medium mt-1">Expertise</p>
            <p className="text-xs text-muted-foreground">Fachwissen</p>
          </Card>
          <Card className="text-center p-3">
            <div className="text-xl font-bold">🏆</div>
            <p className="text-xs font-medium mt-1">Authority</p>
            <p className="text-xs text-muted-foreground">Autorität</p>
          </Card>
          <Card className="text-center p-3">
            <div className="text-xl font-bold">🔒</div>
            <p className="text-xs font-medium mt-1">Trust</p>
            <p className="text-xs text-muted-foreground">Vertrauen</p>
          </Card>
        </div>

        <Link to="/blog/e-e-a-t-lokale-unternehmen" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6">
          → Zum vollständigen E-E-A-T Guide für lokale Unternehmen
        </Link>
      </section>

      {/* AI SEO Teaser */}
      <section id="ai-seo" className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AI & die Zukunft der lokalen Suche</h2>
        <AutoLexikonParagraph>
          <p className="mb-4">
            Künstliche Intelligenz verändert die lokale Suche grundlegend. <strong>Google AI Overviews</strong> fassen Suchergebnisse zusammen, und KI-Suchmaschinen wie Perplexity oder ChatGPT Search werden zu neuen Traffic-Quellen. Technisch optimierte Websites mit strukturierten Daten und <code>speakable</code>-Properties haben hier einen klaren Vorteil.
          </p>
        </AutoLexikonParagraph>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link to="/blog/ki-tools-local-seo" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            → KI-Tools für Local SEO
          </Link>
          <Link to="/blog/ai-search-optimization-2026" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            → AI Search Optimization 2026
          </Link>
          <Link to="/blog/google-ai-overviews-local-seo" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            → Google AI Overviews Guide
          </Link>
        </div>
      </section>

      <BlogCTAABTest position="end" articleSlug="technisches-local-seo-guide" />

      {/* Technical Checklist */}
      <section id="checkliste" className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Technische SEO-Checkliste für lokale Unternehmen</h2>
        <p className="text-muted-foreground mb-6">
          Prüfen Sie die folgenden 25 Punkte für eine technisch einwandfreie lokale Website:
        </p>

        <div className="space-y-4 mb-8">
          {checklistItems.map((section, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Weiterführende Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link to="/blog/local-seo-audit-checkliste" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold text-sm">Local SEO Audit Checkliste</h4>
                  <p className="text-xs text-muted-foreground">50+ Punkte für maximale Sichtbarkeit</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/seo-toolbox-kostenlose-ressourcen" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">🧰</span>
                <div>
                  <h4 className="font-semibold text-sm">SEO Toolbox</h4>
                  <p className="text-xs text-muted-foreground">Kostenlose Tools & Ressourcen</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/lokale-suchmaschinenoptimierung-2026" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-sm">Lokale SEO 2026</h4>
                  <p className="text-xs text-muted-foreground">Was wirklich funktioniert</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/kostenloses-seo-guide" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-sm">Kostenloses SEO Guide</h4>
                  <p className="text-xs text-muted-foreground">50+ Gratis-Strategien & Tools</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <HelpfulnessWidget articleSlug="technisches-local-seo-guide" />
    </ArticleLayout>
  );
};

export default TechnischesLocalSeoGuide;
