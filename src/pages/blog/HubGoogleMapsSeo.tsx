import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { MapPin } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Google Maps Ranking & Optimierung",
    description: "Rankings verbessern, Ranking-Faktoren verstehen und Maps-SEO von organischem SEO abgrenzen",
    icon: "📍",
    slugs: [
      "google-maps-ranking-verbessern",
      "google-maps-seo-ranking-faktoren",
      "local-seo-vs-maps-seo",
    ],
  },
  {
    title: "Google Business Profil optimieren",
    description: "GBP-Profil einrichten, Kategorien wählen, Fotos und Attribute nutzen",
    icon: "🏢",
    slugs: [
      "google-my-business-optimieren",
      "google-business-kategorien-guide",
      "google-business-produkte-services",
      "gbp-fotos-optimieren",
      "gbp-attribute-richtig-nutzen",
      "gbp-oeffnungszeiten-sondertage",
    ],
  },
  {
    title: "Bewertungen & Reputation",
    description: "Google-Bewertungen sammeln, professionell antworten und negative Reviews managen",
    icon: "⭐",
    slugs: [
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
      "review-schema-implementierung",
    ],
  },
  {
    title: "Analyse & Reporting",
    description: "GBP Insights auswerten, Rankings tracken und Reports erstellen",
    icon: "📊",
    slugs: [
      "google-business-insights-verstehen",
      "local-seo-reporting-template",
      "local-seo-audit-checkliste",
      "google-maps-audit-template",
    ],
  },
  {
    title: "Erweiterte Maps-Funktionen",
    description: "Google Posts, Messaging, mehrere Standorte und Maps-spezifische Features",
    icon: "🚀",
    slugs: [
      "google-posts-ranking-faktor",
      "google-business-messaging",
      "gbp-mehrere-standorte",
    ],
  },
  {
    title: "Troubleshooting",
    description: "Suspendierungen, Verifizierungsprobleme, Duplikate und Ranking-Verluste beheben",
    icon: "🔧",
    slugs: [
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
      "ranking-ploetzlich-verschwunden",
    ],
  },
];

const HubGoogleMapsSeo = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Google Maps SEO Hub – Alle Guides für lokale Sichtbarkeit",
    description: "Das zentrale Content-Hub für Google Maps SEO: Rankings, Bewertungen, GBP-Optimierung, Analyse und Troubleshooting. 25+ Artikel.",
    url: "https://localdominate.org/blog/google-maps-seo-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Google Maps SEO Hub"
      metaTitle="Google Maps SEO Hub – Alle Guides für Top-Rankings 2026"
      metaDescription="Das umfassendste Google Maps SEO Hub: Rankings verbessern, GBP optimieren, Bewertungen managen, Insights analysieren und Probleme lösen. 25+ Artikel."
      heroDescription="Alles, was du über Google Maps SEO wissen musst — von der Profil-Optimierung über Ranking-Faktoren und Bewertungsstrategien bis hin zu Troubleshooting. Dein zentraler Einstiegspunkt für maximale Maps-Sichtbarkeit."
      heroIcon={<MapPin className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil Hub", href: "/blog/google-business-profil-hub" },
        { label: "⭐ Bewertungen & Reputation", href: "/blog/bewertungen-reputation-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubGoogleMapsSeo;
