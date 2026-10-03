import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle, ArrowLeft, BookOpen } from "lucide-react";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { faqCategories, type FAQCategory } from "@/data/faqHubData";
import { InternalResourceBox, type ResourceItem } from "@/components/blog/InternalResourceBox";

const subHubResources: Record<string, ResourceItem[]> = {
  grundlagen: [
    { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
    { label: "Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
    { label: "Strategie für kleine Unternehmen", href: "/blog/local-seo-strategie-kleine-unternehmen", type: "guide" },
    { label: "Checkliste Komplett", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  ],
  "google-business": [
    { label: "GBP optimieren", href: "/blog/google-my-business-optimieren", type: "checklist" },
    { label: "GBP-Fotos optimieren", href: "/blog/gbp-fotos-optimieren", type: "guide" },
    { label: "GBP-Kategorien Guide", href: "/blog/google-business-kategorien-guide", type: "guide" },
    { label: "Google Business Profil Hub", href: "/blog/google-business-profil-hub", type: "hub" },
  ],
  bewertungen: [
    { label: "Bewertungen bekommen", href: "/blog/google-bewertungen-bekommen", type: "guide" },
    { label: "Negative Bewertungen", href: "/blog/negative-google-bewertungen", type: "guide" },
    { label: "Antwort-Vorlagen", href: "/blog/bewertungs-antworten-vorlagen", type: "tool" },
    { label: "Bewertungen Hub", href: "/blog/bewertungen-reputation-hub", type: "hub" },
  ],
  "technisches-seo": [
    { label: "Technisches Local SEO", href: "/blog/technisches-local-seo-guide", type: "pillar" },
    { label: "Schema Markup Guide", href: "/blog/schema-markup-local-seo", type: "guide" },
    { label: "Core Web Vitals", href: "/blog/core-web-vitals-local-seo", type: "guide" },
    { label: "Technisches SEO Hub", href: "/blog/technisches-seo-hub", type: "hub" },
  ],
  "ai-zukunft": [
    { label: "AI-Suche für Unternehmen", href: "/blog/ai-suche-lokale-unternehmen", type: "pillar" },
    { label: "Google AI Overviews", href: "/blog/google-ai-overviews-local-seo", type: "guide" },
    { label: "Voice Search Guide", href: "/blog/local-seo-voice-search", type: "guide" },
    { label: "AI & Zukunft Hub", href: "/blog/ai-zukunft-hub", type: "hub" },
  ],
  "content-marketing": [
    { label: "Local Linkbuilding Blueprint", href: "/blog/local-link-building-blueprint", type: "pillar" },
    { label: "Local Content Marketing", href: "/blog/local-content-marketing", type: "guide" },
    { label: "Lokale Events Marketing", href: "/blog/lokale-events-marketing", type: "guide" },
    { label: "Content & Marketing Hub", href: "/blog/content-marketing-hub", type: "hub" },
  ],
};

const FaqSubHub = () => {
  const location = useLocation();
  const slug = location.pathname.split("/blog/")[1];
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());

  const category = faqCategories.find((c) => c.slug === slug);
  if (!category) return null;

  const toggleFaq = (idx: number) => {
    setExpandedFaqs((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const expandAll = () => setExpandedFaqs(new Set(category.faqs.map((_, i) => i)));
  const collapseAll = () => setExpandedFaqs(new Set());

  const otherCategories = faqCategories.filter((c) => c.id !== category.id);
  const resources = subHubResources[category.id] || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <SEOHead
        title={`FAQ: ${category.title} — ${category.faqs.length} Antworten`}
        description={`${category.faqs.length} häufig gestellte Fragen zu ${category.title}. ${category.description}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyHeader />

      <main className="min-h-screen bg-background">
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <SiteBreadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: "FAQ Hub", href: "/blog/faq-hub" },
                { label: category.title },
              ]}
              includeSchema
            />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-3xl">
                {category.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  FAQ: {category.title}
                </h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                  {category.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-4">
              <HelpCircle className="w-4 h-4" />
              <span>{category.faqs.length} Fragen beantwortet</span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl py-10">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/blog/faq-hub"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Zurück zum FAQ Hub
            </Link>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted/50 text-muted-foreground transition-colors"
              >
                Alle öffnen
              </button>
              <button
                onClick={collapseAll}
                className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-muted/50 text-muted-foreground transition-colors"
              >
                Alle schließen
              </button>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            {category.faqs.map((faq, i) => {
              const isOpen = expandedFaqs.has(i);
              return (
                <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-border/50">
                      <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Resource box */}
          {resources.length > 0 && (
            <InternalResourceBox
              title={`📚 Weiterführende Guides: ${category.title}`}
              variant="grid"
              resources={resources}
            />
          )}

          {/* Other FAQ categories */}
          <section className="border-t border-border pt-10 mt-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Weitere FAQ-Themen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/blog/${cat.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                      {cat.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{cat.faqs.length} Fragen</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FaqSubHub;
