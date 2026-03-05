import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, BarChart3, Database, Globe, Eye, GitBranch, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const Forschungsmethodik = () => {
  const { language } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": language === "de" ? "Forschungsmethodik" : "Research Methodology",
    "description": language === "de"
      ? "Wie wir unsere Local SEO Daten erheben, analysieren und in umsetzbare Strategien umwandeln."
      : "How we collect, analyze and transform our Local SEO data into actionable strategies.",
    "url": "https://localdominate.org/forschungsmethodik",
    "publisher": {
      "@type": "Organization",
      "name": "Local Dominator",
      "url": "https://localdominate.org"
    }
  };

  const steps = language === "de" ? [
    {
      icon: Database,
      step: "01",
      title: "Datenerhebung",
      description: "Wir sammeln Daten aus mehreren Quellen, um ein vollständiges Bild der lokalen Suchlandschaft zu erhalten.",
      details: [
        "Google Business Profile Insights von über 500 betreuten Unternehmen",
        "Google Search Console Daten für lokale Suchanfragen",
        "Ranking-Tracking über spezialisierte Local SEO Tools (BrightLocal, Whitespark)",
        "Analyse von Google Maps Pack Ergebnissen in über 50 Städten im DACH-Raum",
        "Auswertung von Bewertungsprofilen und Antwortverhalten"
      ]
    },
    {
      icon: BarChart3,
      step: "02",
      title: "Analyse & Muster-Erkennung",
      description: "Rohdaten allein reichen nicht. Wir identifizieren statistisch signifikante Muster und Korrelationen.",
      details: [
        "A/B-Tests für verschiedene GBP-Optimierungsstrategien",
        "Vergleichsanalysen zwischen Branchen (Gastronomie vs. Handwerk vs. Gesundheitswesen)",
        "Langzeitbeobachtung über mindestens 6 Monate pro Strategie",
        "Statistische Signifikanz-Prüfung vor jeder Veröffentlichung einer Empfehlung",
        "Korrelationsanalysen zwischen Ranking-Faktoren und tatsächlichen Ergebnissen"
      ]
    },
    {
      icon: FlaskConical,
      step: "03",
      title: "Praxisvalidierung",
      description: "Jede Strategie wird an echten Kundenprojekten getestet, bevor sie als Empfehlung veröffentlicht wird.",
      details: [
        "Pilotprojekte mit ausgewählten Kunden in verschiedenen Branchen",
        "Kontrollgruppen-Vergleich: optimiert vs. nicht-optimiert",
        "Dokumentation aller Variablen und Einflussfaktoren",
        "Mindestens 3 erfolgreiche Implementierungen vor einer generellen Empfehlung",
        "Regelmäßige Nachkontrolle der Ergebnisse nach 3, 6 und 12 Monaten"
      ]
    },
    {
      icon: Eye,
      step: "04",
      title: "Peer-Review & Qualitätssicherung",
      description: "Bevor ein Artikel veröffentlicht wird, durchläuft er einen strengen Review-Prozess.",
      details: [
        "Fachliche Prüfung durch mindestens einen weiteren SEO-Experten",
        "Faktencheck aller genannten Zahlen und Statistiken",
        "Überprüfung der Quellenangaben auf Aktualität und Gültigkeit",
        "Verständlichkeitstest: Ist der Artikel für die Zielgruppe umsetzbar?",
        "Finale Freigabe durch die Redaktionsleitung"
      ]
    },
    {
      icon: RefreshIcon,
      step: "05",
      title: "Kontinuierliche Aktualisierung",
      description: "Unsere Arbeit endet nicht mit der Veröffentlichung. Wir halten alle Inhalte aktuell.",
      details: [
        "Quartalsweise Überprüfung aller Kernartikel",
        "Sofortige Aktualisierung bei bestätigten Google-Algorithmus-Updates",
        "Neue Daten und Erkenntnisse werden in bestehende Artikel integriert",
        "Veraltete Empfehlungen werden als solche markiert oder entfernt",
        "Transparente Änderungshistorie durch Update-Datum im Artikel"
      ]
    }
  ] : [
    {
      icon: Database,
      step: "01",
      title: "Data Collection",
      description: "We collect data from multiple sources to build a complete picture of the local search landscape.",
      details: [
        "Google Business Profile Insights from 500+ managed businesses",
        "Google Search Console data for local search queries",
        "Rank tracking via specialized Local SEO tools (BrightLocal, Whitespark)",
        "Analysis of Google Maps Pack results across 50+ cities in DACH region",
        "Evaluation of review profiles and response patterns"
      ]
    },
    {
      icon: BarChart3,
      step: "02",
      title: "Analysis & Pattern Recognition",
      description: "Raw data alone isn't enough. We identify statistically significant patterns and correlations.",
      details: [
        "A/B tests for various GBP optimization strategies",
        "Comparative analyses across industries (gastronomy vs. trades vs. healthcare)",
        "Long-term observation over a minimum of 6 months per strategy",
        "Statistical significance testing before publishing any recommendation",
        "Correlation analyses between ranking factors and actual results"
      ]
    },
    {
      icon: FlaskConical,
      step: "03",
      title: "Practice Validation",
      description: "Every strategy is tested on real client projects before being published as a recommendation.",
      details: [
        "Pilot projects with selected clients across different industries",
        "Control group comparison: optimized vs. non-optimized",
        "Documentation of all variables and influencing factors",
        "Minimum 3 successful implementations before a general recommendation",
        "Regular follow-up on results at 3, 6, and 12 months"
      ]
    },
    {
      icon: Eye,
      step: "04",
      title: "Peer Review & Quality Assurance",
      description: "Before an article is published, it undergoes a rigorous review process.",
      details: [
        "Technical review by at least one additional SEO expert",
        "Fact-checking all cited numbers and statistics",
        "Verification of source accuracy and currency",
        "Readability test: Is the article actionable for the target audience?",
        "Final approval by editorial leadership"
      ]
    },
    {
      icon: RefreshIcon,
      step: "05",
      title: "Continuous Updates",
      description: "Our work doesn't end at publication. We keep all content current.",
      details: [
        "Quarterly review of all core articles",
        "Immediate updates upon confirmed Google algorithm changes",
        "New data and insights are integrated into existing articles",
        "Outdated recommendations are marked or removed",
        "Transparent change history via update dates in articles"
      ]
    }
  ];

  const title = language === "de" ? "Unsere Forschungsmethodik" : "Our Research Methodology";
  const metaDesc = language === "de"
    ? "Wie Local Dominator SEO-Daten erhebt, analysiert und validiert. Unser 5-Stufen-Prozess für verlässliche, praxiserprobte Empfehlungen."
    : "How Local Dominator collects, analyzes and validates SEO data. Our 5-step process for reliable, field-tested recommendations.";

  return (
    <>
      <SEOHead
        title={title}
        description={metaDesc}
        canonicalUrl="https://localdominate.org/forschungsmethodik"
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
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-1">
                {language === "de" ? "Vom Datenpunkt zur verlässlichen Empfehlung" : "From data point to reliable recommendation"}
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
            <p className="text-foreground leading-relaxed">
              {language === "de"
                ? "Unsere Empfehlungen basieren nicht auf Vermutungen. Wir folgen einem strukturierten 5-Stufen-Prozess, der sicherstellt, dass jede Strategie, die wir empfehlen, auf Daten basiert und in der Praxis validiert wurde."
                : "Our recommendations aren't based on guesswork. We follow a structured 5-step process that ensures every strategy we recommend is data-backed and validated in practice."}
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[27px] top-[72px] bottom-0 w-px bg-border" />
                  )}
                  <div className="card-premium p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {(language === "de" ? [
              { label: "500+", desc: "Betreute Unternehmen" },
              { label: "50+", desc: "Analysierte Städte" },
              { label: "5+ Jahre", desc: "Praxiserfahrung" }
            ] : [
              { label: "500+", desc: "Managed Businesses" },
              { label: "50+", desc: "Cities Analyzed" },
              { label: "5+ Years", desc: "Hands-on Experience" }
            ]).map((badge, i) => (
              <div key={i} className="text-center p-4 bg-muted/30 rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">{badge.label}</div>
                <div className="text-sm text-muted-foreground">{badge.desc}</div>
              </div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">
              {language === "de" ? "Weitere Informationen" : "More Information"}
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/redaktionsrichtlinien" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Redaktionsrichtlinien" : "→ Editorial Guidelines"}
              </Link>
              <Link to="/ueber-uns" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Über das Team" : "→ About the Team"}
              </Link>
              <Link to="/blog" className="text-primary hover:underline text-sm">
                {language === "de" ? "→ Alle Artikel" : "→ All Articles"}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

// Simple refresh icon component to avoid import issues
const RefreshIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

export default Forschungsmethodik;
