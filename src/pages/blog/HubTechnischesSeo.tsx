import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Settings } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Schema Markup & Strukturierte Daten",
    description: "JSON-LD, LocalBusiness Schema und Rich Snippets für lokale Unternehmen",
    icon: "🏷️",
    slugs: [
      "schema-markup-local-seo",
      "localbusiness-schema-implementierung",
      "review-schema-implementierung",
    ],
  },
  {
    title: "Core Web Vitals & Performance",
    description: "Ladegeschwindigkeit, mobile Optimierung und technische SEO-Grundlagen",
    icon: "⚡",
    slugs: [
      "core-web-vitals-local-seo",
      "mobile-local-seo",
    ],
  },
  {
    title: "Lokale Ranking-Faktoren",
    description: "NAP-Konsistenz, Citations und Maps-Optimierung",
    icon: "📍",
    slugs: [
      "nap-konsistenz-local-seo",
      "local-citations-2025",
      "local-seo-vs-maps-seo",
      "google-maps-seo-ranking-faktoren",
    ],
  },
  {
    title: "Analyse & Reporting",
    description: "Audits, Reports und Keyword-Recherche",
    icon: "📊",
    slugs: [
      "local-seo-audit-checkliste",
      "local-seo-reporting-template",
      "local-seo-keywords-finden",
    ],
  },
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
    <TopicHubLayout
      title="Technisches Local SEO Hub"
      metaTitle="Technisches Local SEO Hub – Schema, Performance & mehr 2026"
      metaDescription="Alle technischen SEO-Guides: Schema Markup, Core Web Vitals, NAP-Konsistenz, Citations und Ranking-Faktoren. 12+ Artikel."
      heroDescription="Die technische Grundlage deiner lokalen Sichtbarkeit. Von strukturierten Daten über Ladezeiten bis hin zu NAP-Konsistenz – hier findest du alle technischen Guides."
      heroIcon={<Settings className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Technisches Local SEO Guide", href: "/blog/technisches-local-seo-guide" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "⭐ Bewertungen & Reputation", href: "/blog/bewertungen-reputation-hub" },
        { label: "🤖 AI & Zukunft", href: "/blog/ai-zukunft-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubTechnischesSeo;
