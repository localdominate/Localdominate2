import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, BookOpen } from "lucide-react";

const caseStudyGroups = [
  {
    title: "Gastronomie & Food",
    icon: "🍽️",
    keys: ["restaurant", "baeckerei", "doener"],
    description: "Wie Restaurants, Bäckereien und Imbisse durch Local SEO mehr Laufkundschaft gewinnen.",
  },
  {
    title: "Gesundheit & Wellness",
    icon: "🏥",
    keys: ["aerzte", "zahnarzt", "physiotherapie", "apotheke", "tierarzt", "optiker"],
    description: "Praxen und Gesundheitsdienstleister steigern Patientenzahlen durch gezielte Sichtbarkeit.",
  },
  {
    title: "Handwerk & Technik",
    icon: "🔨",
    keys: ["handwerker", "elektrotechnik", "autowerkstatt"],
    description: "Handwerksbetriebe und Werkstätten erzielen mehr Aufträge über lokale Suchergebnisse.",
  },
  {
    title: "Dienstleistungen & Freiberufler",
    icon: "💼",
    keys: ["anwaelte", "steuerberater", "immobilienmakler", "fotograf"],
    description: "Anwälte, Steuerberater und Makler gewinnen Mandanten und Kunden über Google.",
  },
  {
    title: "Beauty, Fitness & Lifestyle",
    icon: "💅",
    keys: ["friseur", "tattoo", "yoga", "fitness"],
    description: "Studios und Salons bauen eine starke lokale Präsenz auf.",
  },
  {
    title: "Tourismus & Gastgewerbe",
    icon: "🏨",
    keys: ["hotels", "ferienwohnungen"],
    description: "Hotels und Ferienwohnungen reduzieren OTA-Abhängigkeit durch Direktbuchungen.",
  },
  {
    title: "Strategievergleiche",
    icon: "⚖️",
    keys: ["local-seo-vs-organisch", "google-maps-seo-vs-organic-seo", "ai-search-vs-traditional-search"],
    description: "Fallstudien zeigen, wie Unternehmen verschiedene SEO-Strategien kombinieren.",
  },
];

const HubCaseStudies = () => {
  // Case studies are published only for real, approved client results (see data/industryCaseStudies.ts).
  const hasCaseStudies = Object.values(industryCaseStudies).some((studies) => studies.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Local SEO Fallstudien – Praxisbeispiele aus 22+ Branchen",
    description: "Hypothetische Fallstudien zeigen, wie lokale Unternehmen durch gezielte SEO-Maßnahmen ihre Rankings, Anfragen und Umsätze verbessern.",
    url: "https://localdominate.org/blog/case-studies-hub",
  };

  return (
    <>
      <SEOHead
        title="Local SEO Fallstudien Hub – Praxisbeispiele aus 22+ Branchen | 2026"
        description="Entdecke hypothetische Fallstudien aus Gastronomie, Gesundheit, Handwerk und mehr. Lerne, wie lokale Unternehmen durch SEO wachsen."
        canonicalUrl="https://localdominate.org/blog/case-studies-hub"
        jsonLd={jsonLd}
      />
      <StickyHeader />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SiteBreadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Fallstudien Hub" },
            ]}
          />

          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Fallstudien Hub
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Local SEO Fallstudien & Praxisbeispiele
            </h1>
            {hasCaseStudies && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fallstudien zeigen, wie lokale Unternehmen aus verschiedenen Branchen
                ihre Google-Sichtbarkeit, Kundenanfragen und Umsätze durch gezielte SEO-Maßnahmen steigern.
              </p>
            )}
          </div>

          {hasCaseStudies ? (
            <>
              {/* Quick Nav */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-foreground mb-3">Springe zu einer Branche</h2>
                  <div className="flex flex-wrap gap-2">
                    {caseStudyGroups.map((group) => (
                      <a
                        key={group.title}
                        href={`#${group.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {group.icon} {group.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Case Study Groups */}
              {caseStudyGroups.map((group) => {
                const studies = group.keys.flatMap((key) => industryCaseStudies[key] || []);
                if (studies.length === 0) return null;

                return (
                  <section
                    key={group.title}
                    id={group.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                    className="mb-16"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{group.icon}</span>
                      <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{group.description}</p>

                    {studies.map((study, i) => (
                      <CaseStudyCard key={i} study={study} />
                    ))}
                  </section>
                );
              })}

              {/* Key Insights */}
              <Card className="mb-12 border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Was alle Fallstudien gemeinsam haben
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Google Business Profil</strong> ist der wichtigste erste Schritt für jede Branche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Bewertungen</strong> sind der stärkste Vertrauensfaktor – aktives Bewertungsmanagement zahlt sich immer aus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Spezialisierung</strong> auf Nischen-Keywords bringt schnellere Ergebnisse als Kampf um generische Begriffe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Lokaler Content</strong> mit Ortsbezug schlägt generischen Content in der lokalen Suche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Ergebnisse</strong> sind typischerweise in 3–6 Monaten sichtbar, mit dem größten Hebel in den ersten 90 Tagen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="mb-12">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Hier erscheinen Fallstudien, sobald echte Kundenergebnisse mit schriftlicher Freigabe vorliegen.
                  Bis dahin zeigen wir keine Beispiele.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Related Hubs & Resources */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="font-bold text-foreground mb-4">Weiterführende Hubs & Ressourcen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "🏢 Google Business Profil Hub", href: "/blog/google-business-profil-hub" },
                  { label: "🏭 Branchen-Guides Hub", href: "/blog/local-seo-branchen-hub" },
                  { label: "⭐ Bewertungen & Reputation Hub", href: "/blog/bewertungen-reputation-hub" },
                  { label: "🗺️ Google Maps SEO Hub", href: "/blog/google-maps-seo-hub" },
                  { label: "🛠️ Tools & Ressourcen Hub", href: "/blog/tools-ressourcen-hub" },
                  { label: "📖 Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
                  >
                    <span className="text-sm text-foreground">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default HubCaseStudies;
