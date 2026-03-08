import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, Users, Search, FileText, RefreshCw, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const Redaktionsrichtlinien = () => {
  const { language } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": language === "de" ? "Redaktionsrichtlinien" : "Editorial Guidelines",
    "description": language === "de" 
      ? "Unsere redaktionellen Standards für Qualität, Genauigkeit und Transparenz im Bereich Local SEO."
      : "Our editorial standards for quality, accuracy and transparency in Local SEO.",
    "url": "https://localdominate.org/redaktionsrichtlinien",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator",
      "url": "https://localdominate.org"
    }
  };

  const sections = language === "de" ? [
    {
      icon: Shield,
      title: "Unser Qualitätsversprechen",
      content: "Jeder Artikel auf Local Dominator durchläuft einen mehrstufigen Qualitätsprozess. Wir veröffentlichen nur Inhalte, die auf verifzierbaren Fakten, aktuellen Daten und praxiserprobten Strategien basieren. Unser Ziel: Die zuverlässigste deutschsprachige Ressource für lokale Suchmaschinenoptimierung."
    },
    {
      icon: Users,
      title: "Wer schreibt unsere Inhalte?",
      content: "Unsere Artikel werden von einem Redaktionsteam mit über 5 Jahren Erfahrung in Local SEO verfasst. Jedes Teammitglied hat nachweisbare Expertise in der Optimierung lokaler Unternehmen – von Restaurants über Handwerksbetriebe bis zu Arztpraxen. Wir arbeiten täglich mit Google Business Profilen, lokalen Suchstrategien und Ranking-Analysen."
    },
    {
      icon: Search,
      title: "Recherche-Standards",
      items: [
        "Primärquellen: Wir zitieren offizielle Google-Dokumentation, Patente und Richtlinien als Grundlage",
        "Datenbasiert: Aussagen zu Rankings, Klickraten oder Conversion-Werten basieren auf eigenen Analysen oder zitierten Studien",
        "Praxisvalidiert: Strategien werden an realen Kundenprojekten getestet, bevor wir sie empfehlen",
        "Peer-Review: Jeder Fachartikel wird von mindestens einem weiteren SEO-Experten gegengelesen"
      ]
    },
    {
      icon: FileText,
      title: "Quellenrichtlinien",
      items: [
        "Offizielle Google-Quellen (Search Central, GBP-Hilfe) haben höchste Priorität",
        "Branchenstudien von anerkannten SEO-Tools (Moz, BrightLocal, Whitespark) werden als sekundäre Quellen verwendet",
        "Behauptungen ohne Quellenangabe werden als Meinung/Erfahrungswert gekennzeichnet",
        "Alle Quellen werden am Ende jedes Artikels transparent aufgelistet"
      ]
    },
    {
      icon: RefreshCw,
      title: "Aktualisierungsprozess",
      content: "Local SEO entwickelt sich ständig weiter. Deshalb überprüfen wir unsere Artikel regelmäßig auf Aktualität. Jeder Artikel zeigt das Veröffentlichungsdatum und das letzte Aktualisierungsdatum. Bei Google-Algorithmus-Updates werden betroffene Artikel innerhalb von 14 Tagen aktualisiert."
    },
    {
      icon: Award,
      title: "E-E-A-T Verpflichtung",
      content: "Wir orientieren uns an Googles E-E-A-T-Framework (Experience, Expertise, Authoritativeness, Trustworthiness). Das bedeutet: Unsere Autoren haben direkte Erfahrung mit den Themen, über die sie schreiben. Wir belegen unsere Expertise durch Fallstudien und nachweisbare Ergebnisse. Und wir sind transparent über unsere Methoden und Geschäftsbeziehungen."
    }
  ] : [
    {
      icon: Shield,
      title: "Our Quality Promise",
      content: "Every article on Local Dominator goes through a multi-step quality process. We only publish content based on verifiable facts, current data, and field-tested strategies. Our goal: To be the most reliable resource for local search engine optimization."
    },
    {
      icon: Users,
      title: "Who Writes Our Content?",
      content: "Our articles are written by an editorial team with over 5 years of experience in Local SEO. Every team member has proven expertise in optimizing local businesses – from restaurants to trades to medical practices. We work daily with Google Business Profiles, local search strategies, and ranking analyses."
    },
    {
      icon: Search,
      title: "Research Standards",
      items: [
        "Primary Sources: We cite official Google documentation, patents, and guidelines as our foundation",
        "Data-Driven: Claims about rankings, click rates, or conversion values are based on our own analyses or cited studies",
        "Practice-Validated: Strategies are tested on real client projects before we recommend them",
        "Peer-Reviewed: Every technical article is reviewed by at least one additional SEO expert"
      ]
    },
    {
      icon: FileText,
      title: "Source Guidelines",
      items: [
        "Official Google sources (Search Central, GBP Help) take highest priority",
        "Industry studies from recognized SEO tools (Moz, BrightLocal, Whitespark) serve as secondary sources",
        "Claims without citations are marked as opinion/experience-based",
        "All sources are transparently listed at the end of each article"
      ]
    },
    {
      icon: RefreshCw,
      title: "Update Process",
      content: "Local SEO is constantly evolving. That's why we regularly review our articles for accuracy. Each article displays its publication date and last update date. When Google algorithm updates occur, affected articles are updated within 14 days."
    },
    {
      icon: Award,
      title: "E-E-A-T Commitment",
      content: "We align with Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness). This means: Our authors have direct experience with the topics they write about. We demonstrate our expertise through case studies and provable results. And we are transparent about our methods and business relationships."
    }
  ];

  const title = language === "de" ? "Redaktionsrichtlinien" : "Editorial Guidelines";
  const metaDesc = language === "de"
    ? "Unsere redaktionellen Standards für Qualität, Genauigkeit und Transparenz. So stellen wir sicher, dass unsere Local SEO Inhalte verlässlich sind."
    : "Our editorial standards for quality, accuracy, and transparency. How we ensure our Local SEO content is reliable.";

  return (
    <>
      <SEOHead
        title={title}
        description={metaDesc}
        canonicalUrl="https://localdominate.org/redaktionsrichtlinien"
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
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {language === "de" ? "Zurück zur Startseite" : "Back to Homepage"}
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-1">
                {language === "de" ? "Transparenz & Qualität in jedem Artikel" : "Transparency & quality in every article"}
              </p>
            </div>
          </div>

          <div className="space-y-8 mt-10">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="card-premium p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                  </div>
                  {section.content && (
                    <p className="text-muted-foreground leading-relaxed ml-9">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3 ml-9">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Cross-links */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">
              {language === "de" ? "Weitere Informationen" : "More Information"}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/forschungsmethodik" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Unsere Forschungsmethodik" : "→ Our Research Methodology"}
              </Link>
              <Link to="/ueber-uns" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Über das Team" : "→ About the Team"}
              </Link>
              <Link to="/impressum" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Impressum" : "→ Legal Notice"}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Redaktionsrichtlinien;
