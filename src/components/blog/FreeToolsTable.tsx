import { ExternalLink, Star, Zap, Search, BarChart3, Globe, FileText, Image, Link2, Gauge } from "lucide-react";
import { useState } from "react";

interface Tool {
  name: string;
  category: string;
  description: string;
  url: string;
  rating: number;
  features: string[];
}

const freeTools: Tool[] = [
  // Google Tools
  { name: "Google Search Console", category: "Analyse", description: "Offizielle Google-Daten zu Rankings, Klicks & Indexierung", url: "https://search.google.com/search-console", rating: 5, features: ["Keyword-Daten", "Indexierung", "Core Web Vitals"] },
  { name: "Google Analytics 4", category: "Analyse", description: "Komplette Traffic-Analyse und Nutzerverhalten", url: "https://analytics.google.com", rating: 5, features: ["Traffic", "Conversions", "Nutzerfluss"] },
  { name: "Google Business Profile", category: "Local SEO", description: "Dein kostenloses Firmenprofil bei Google", url: "https://business.google.com", rating: 5, features: ["Maps-Eintrag", "Bewertungen", "Posts"] },
  { name: "Google Trends", category: "Keyword", description: "Suchtrends und saisonale Schwankungen erkennen", url: "https://trends.google.com", rating: 4, features: ["Trendanalyse", "Vergleiche", "Regional"] },
  { name: "PageSpeed Insights", category: "Technik", description: "Website-Geschwindigkeit und Core Web Vitals prüfen", url: "https://pagespeed.web.dev", rating: 5, features: ["LCP", "FID", "CLS"] },
  { name: "Rich Results Test", category: "Technik", description: "Schema Markup und Rich Snippets testen", url: "https://search.google.com/test/rich-results", rating: 5, features: ["Schema-Test", "Vorschau", "Fehler"] },
  { name: "Mobile-Friendly Test", category: "Technik", description: "Mobile Optimierung der Website prüfen", url: "https://search.google.com/test/mobile-friendly", rating: 4, features: ["Mobile-Check", "Probleme", "Screenshot"] },
  
  // Keyword Tools
  { name: "Ubersuggest", category: "Keyword", description: "Keyword-Recherche mit Suchvolumen (3 Suchen/Tag kostenlos)", url: "https://neilpatel.com/ubersuggest", rating: 4, features: ["Suchvolumen", "Difficulty", "Content-Ideen"] },
  { name: "AnswerThePublic", category: "Keyword", description: "Fragen und Long-Tail Keywords visualisiert", url: "https://answerthepublic.com", rating: 4, features: ["Fragen", "Präpositionen", "Vergleiche"] },
  { name: "Keyword Surfer", category: "Keyword", description: "Chrome Extension für Suchvolumen direkt in Google", url: "https://surferseo.com/keyword-surfer-extension", rating: 4, features: ["Browser-Extension", "Inline-Daten", "Korrelationen"] },
  { name: "AlsoAsked", category: "Keyword", description: "People Also Ask Fragen visualisieren", url: "https://alsoasked.com", rating: 4, features: ["PAA-Fragen", "Visualisierung", "Export"] },
  
  // Backlink & Analyse
  { name: "Ahrefs Webmaster Tools", category: "Backlinks", description: "Backlink-Analyse für eigene Website (kostenlos)", url: "https://ahrefs.com/webmaster-tools", rating: 4, features: ["Backlinks", "Keywords", "Health-Check"] },
  { name: "Moz Link Explorer", category: "Backlinks", description: "Domain Authority und Backlinks prüfen (10 Suchen/Monat)", url: "https://moz.com/link-explorer", rating: 3, features: ["DA/PA", "Backlinks", "Spam-Score"] },
  { name: "Seobility", category: "Audit", description: "Kostenloser SEO-Check mit Empfehlungen", url: "https://www.seobility.net/de/seocheck", rating: 4, features: ["SEO-Check", "Fehler", "Tipps"] },
  { name: "Screaming Frog", category: "Audit", description: "Website-Crawler (500 URLs kostenlos)", url: "https://www.screamingfrog.co.uk/seo-spider", rating: 5, features: ["Crawling", "Fehler", "Export"] },
  
  // Content & Bilder
  { name: "Canva", category: "Content", description: "Grafiken und Bilder kostenlos erstellen", url: "https://www.canva.com", rating: 5, features: ["Grafiken", "Social Media", "Vorlagen"] },
  { name: "TinyPNG", category: "Bilder", description: "Bilder komprimieren ohne Qualitätsverlust", url: "https://tinypng.com", rating: 5, features: ["Kompression", "PNG/JPG", "API"] },
  { name: "Squoosh", category: "Bilder", description: "Bildoptimierung von Google (WebP-Konvertierung)", url: "https://squoosh.app", rating: 5, features: ["WebP", "AVIF", "Vergleich"] },
  { name: "Hemingway Editor", category: "Content", description: "Lesbarkeit von Texten verbessern", url: "https://hemingwayapp.com", rating: 4, features: ["Lesbarkeit", "Satzstruktur", "Klarheit"] },
  
  // Local SEO
  { name: "BrightLocal", category: "Local SEO", description: "Lokale Rankings checken (kostenlose Tools)", url: "https://www.brightlocal.com/free-local-seo-tools", rating: 4, features: ["GMB Audit", "Citations", "Rankings"] },
  { name: "Whitespark", category: "Local SEO", description: "Lokale Citation-Quellen finden", url: "https://whitespark.ca/local-citation-finder", rating: 4, features: ["Citations", "NAP-Check", "Konkurrenz"] },
  
  // Schema & Technik
  { name: "Schema Markup Generator", category: "Technik", description: "JSON-LD Schema Markup generieren", url: "https://technicalseo.com/tools/schema-markup-generator", rating: 5, features: ["LocalBusiness", "FAQ", "HowTo"] },
  { name: "XML Sitemap Generator", category: "Technik", description: "Sitemap für kleine Websites erstellen", url: "https://www.xml-sitemaps.com", rating: 4, features: ["Sitemap", "500 URLs", "Download"] },
  { name: "GTmetrix", category: "Technik", description: "Detaillierte Performance-Analyse", url: "https://gtmetrix.com", rating: 4, features: ["Waterfall", "Filmstrip", "Monitoring"] },
];

const categories = ["Alle", "Analyse", "Keyword", "Local SEO", "Technik", "Backlinks", "Audit", "Content", "Bilder"];

const categoryIcons: Record<string, React.ReactNode> = {
  "Alle": <Star className="h-4 w-4" />,
  "Analyse": <BarChart3 className="h-4 w-4" />,
  "Keyword": <Search className="h-4 w-4" />,
  "Local SEO": <Globe className="h-4 w-4" />,
  "Technik": <Gauge className="h-4 w-4" />,
  "Backlinks": <Link2 className="h-4 w-4" />,
  "Audit": <FileText className="h-4 w-4" />,
  "Content": <FileText className="h-4 w-4" />,
  "Bilder": <Image className="h-4 w-4" />,
};

const FreeToolsTable = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredTools = activeCategory === "Alle" 
    ? freeTools 
    : freeTools.filter(tool => tool.category === activeCategory);

  return (
    <div className="my-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {categoryIcons[cat]}
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {tool.name}
                  <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                </h4>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                  {tool.category}
                </span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Zap 
                    key={i} 
                    className={`h-3.5 w-3.5 ${i < tool.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {tool.features.map((feature, i) => (
                <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        💡 Zeige {filteredTools.length} von {freeTools.length} kostenlosen SEO-Tools
      </p>
    </div>
  );
};

export default FreeToolsTable;
