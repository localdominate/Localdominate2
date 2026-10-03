import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, BookOpen, ArrowRight, HelpCircle } from "lucide-react";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { faqCategories, getTotalFAQCount } from "@/data/faqHubData";

const FaqHub = () => {
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());

  const totalCount = getTotalFAQCount();

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return faqCategories;
    const q = search.toLowerCase();
    return faqCategories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [search]);

  const toggleFaq = (key: string) => {
    setExpandedFaqs((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      }))
    ),
  };

  return (
    <>
      <SEOHead
        title="FAQ Hub: Alle Local SEO Fragen beantwortet"
        description={`${totalCount}+ häufig gestellte Fragen zu Local SEO — von Grundlagen über Google Business Profil bis AI-Optimierung. Sofortige Antworten für DACH-Unternehmen.`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyHeader />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <SiteBreadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "FAQ Hub" }]} includeSchema />
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  FAQ Hub: Alle Local SEO Fragen
                </h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                  {totalCount}+ Antworten auf die häufigsten Fragen zu Local SEO — von Grundlagen bis AI-Optimierung, speziell für den DACH-Raum.
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative mt-8 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Frage suchen — z. B. 'Bewertungen', 'Schema Markup', 'Kosten'..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Category navigation */}
        <nav className="border-b border-border sticky top-16 bg-background/95 backdrop-blur z-30">
          <div className="container mx-auto px-4 max-w-5xl overflow-x-auto">
            <div className="flex gap-1 py-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="whitespace-nowrap px-3 py-1.5 text-sm rounded-full border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {cat.icon} {cat.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Category grid overview */}
        <div className="container mx-auto px-4 max-w-5xl py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {faqCategories.map((cat) => (
              <Link key={cat.id} to={`/blog/${cat.slug}`}>
                <Card className="h-full hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{cat.icon}</span>
                      <h2 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{cat.faqs.length} Fragen</span>
                      <span className="text-xs text-primary flex items-center gap-0.5 group-hover:gap-1 transition-all">
                        Alle Fragen <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* All FAQs by category */}
          <div className="space-y-10">
            {filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-32">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.title}
                    <span className="text-sm font-normal text-muted-foreground">({cat.faqs.length})</span>
                  </h2>
                  <Link
                    to={`/blog/${cat.slug}`}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Alle anzeigen <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  {cat.faqs.map((faq, fi) => {
                    const key = `${cat.id}-${fi}`;
                    const isOpen = expandedFaqs.has(key);
                    return (
                      <div
                        key={key}
                        className="border border-border rounded-xl bg-card overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(key)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                        >
                          <span className="font-medium text-foreground text-sm pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 border-t border-border/50">
                            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* No results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Keine Fragen gefunden</h3>
              <p className="text-muted-foreground text-sm">
                Versuche einen anderen Suchbegriff oder{" "}
                <button onClick={() => setSearch("")} className="text-primary underline">
                  zeige alle Fragen
                </button>
              </p>
            </div>
          )}

          {/* Related hubs */}
          <section className="border-t border-border pt-12 mt-16">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Verwandte Ressourcen
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "🏆 Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo" },
                { label: "📊 Ranking-Faktoren", href: "/blog/local-seo-ranking-faktoren-erklaert" },
                { label: "✅ Checkliste Komplett", href: "/blog/local-seo-checkliste-komplett" },
                { label: "🧰 Tools & Ressourcen", href: "/blog/tools-ressourcen-hub" },
                { label: "🤖 AI & Zukunft Hub", href: "/blog/ai-zukunft-hub" },
              ].map((hub, i) => (
                <Link
                  key={i}
                  to={hub.href}
                  className="px-4 py-2 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                >
                  {hub.label} →
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

export default FaqHub;
