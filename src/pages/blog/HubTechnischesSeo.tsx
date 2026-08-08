import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Settings } from "lucide-react";
import TechnicalSeoAuditFramework, { technicalFoundationAudit, localSignalsAudit, reviewReputationAudit } from "@/components/blog/TechnicalSeoAuditFramework";

const groups: HubArticleGroup[] = [
  {
    title: "Schema Markup & Strukturierte Daten",
    description: "JSON-LD, LocalBusiness Schema und Rich Snippets für lokale Unternehmen",
    icon: "🏷️",
    slugs: ["schema-markup-local-seo", "localbusiness-schema-implementierung", "review-schema-implementierung"],
  },
  {
    title: "Core Web Vitals & Performance",
    description: "Ladegeschwindigkeit, mobile Optimierung und technische SEO-Grundlagen",
    icon: "⚡",
    slugs: ["core-web-vitals-local-seo", "mobile-local-seo"],
  },
  {
    title: "Lokale Ranking-Faktoren",
    description: "NAP-Konsistenz, Citations und Maps-Optimierung",
    icon: "📍",
    slugs: ["nap-konsistenz-local-seo", "local-citations-2025", "local-seo-vs-maps-seo", "google-maps-seo-ranking-faktoren"],
  },
  {
    title: "Analyse & Reporting",
    description: "Audits, Reports und Keyword-Recherche",
    icon: "📊",
    slugs: ["local-seo-audit-checkliste", "local-seo-reporting-template", "local-seo-keywords-finden", "local-seo-tracking-kpis", "lokale-landing-pages"],
  },
];

const summary: HubSummary = {
  text: "Technisches SEO bildet das Fundament deiner lokalen Sichtbarkeit. Seiten mit strukturierten Daten werden 40 % häufiger in Rich Results angezeigt, gute Core Web Vitals senken die Absprungrate um 24 %, und korrekte NAP-Konsistenz ist Voraussetzung für Google-Vertrauen. Dieser Hub umfasst alle technischen Aspekte von Schema Markup bis Performance-Optimierung.",
  stats: [
    { label: "Schema-Guides", value: "3" },
    { label: "Performance-Guides", value: "2" },
    { label: "Ranking-Faktor-Artikel", value: "4" },
    { label: "Audit & Report Tools", value: "3" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Technische SEO-Maßnahmen: Impact vs. Aufwand",
  headers: ["Maßnahme", "Ranking-Impact", "Umsetzung", "Zeitbedarf", "Priorität"],
  rows: [
    { label: "LocalBusiness Schema", cells: ["Hoch", "Einfach (JSON-LD)", "30–60 Min.", "🔴 Kritisch"] },
    { label: "NAP-Konsistenz prüfen", cells: ["Sehr hoch", "Manuell/Tool", "2–4 Stunden", "🔴 Kritisch"] },
    { label: "Core Web Vitals (LCP)", cells: ["Mittel-hoch", "Technisch", "2–8 Stunden", "🟡 Hoch"] },
    { label: "Mobile Responsive", cells: ["Sehr hoch", "Technisch", "Variabel", "🔴 Kritisch"] },
    { label: "HTTPS/SSL einrichten", cells: ["Mittel", "Einfach", "30 Min.", "🔴 Kritisch"] },
    { label: "FAQ Schema (FAQPage)", cells: ["Mittel", "Einfach", "15–30 Min.", "🟡 Hoch"] },
    { label: "Review Schema", cells: ["Mittel", "Einfach", "30 Min.", "🟡 Hoch"] },
    { label: "XML-Sitemap + robots.txt", cells: ["Gering-mittel", "Einfach", "15 Min.", "🟢 Empfohlen"] },
    { label: "Interne Verlinkung", cells: ["Mittel-hoch", "Strategie", "Laufend", "🟡 Hoch"] },
  ],
  footnote: "Impact-Bewertung basiert auf Whitespark Local Search Ranking Factors 2024.",
};

const resources: HubResource[] = [
  { label: "Technisches Local SEO: Kompletter Guide", href: "/blog/technisches-local-seo-guide", type: "pillar" },
  { label: "Local SEO Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
  { label: "Schema-Strategie-Dokument", href: "/blog/schema-strategie-dokument", type: "guide" },
  { label: "Google Maps Audit Template", href: "/blog/google-maps-audit-template", type: "tool" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste", type: "checklist" },
];

const HubTechnischesSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Technisches Local SEO Hub – Alle Guides",
    description: "Schema Markup, Core Web Vitals, NAP-Konsistenz, Citations und technische SEO-Grundlagen für lokale Unternehmen.",
    url: "https://localdominate.org/blog/technisches-seo-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <>
      <TopicHubLayout
        title="Technisches Local SEO Hub"
        metaTitle="Technisches Local SEO Hub – Schema, Performance & mehr 2026"
        metaDescription="Alle technischen SEO-Guides: Schema Markup, Core Web Vitals, NAP-Konsistenz, Citations und Ranking-Faktoren. 12+ Artikel."
        heroDescription="Die technische Grundlage deiner lokalen Sichtbarkeit. Von strukturierten Daten über Ladezeiten bis hin zu NAP-Konsistenz – hier findest du alle technischen Guides."
        heroIcon={<Settings className="w-7 h-7 text-primary" />}
        groups={groups}
        summary={summary}
        comparisonTable={comparisonTable}
        resources={resources}
        pillarLink={{ label: "Technisches Local SEO Guide", href: "/blog/technisches-local-seo-guide" }}
        relatedHubs={[
          { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
          { label: "⭐ Bewertungen & Reputation", href: "/blog/bewertungen-reputation-hub" },
          { label: "🤖 AI & Zukunft", href: "/blog/ai-zukunft-hub" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Audit Frameworks Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Interaktive Audit Frameworks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nutze diese drei Audit-Frameworks, um dein technisches Local SEO systematisch zu bewerten. Hake Punkte ab und verfolge deinen Fortschritt.
          </p>
        </div>

        <TechnicalSeoAuditFramework {...technicalFoundationAudit} />
        <TechnicalSeoAuditFramework {...localSignalsAudit} />
        <TechnicalSeoAuditFramework {...reviewReputationAudit} />
      </section>
    </>
  );
};

export default HubTechnischesSeo;
