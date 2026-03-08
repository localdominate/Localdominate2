import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { MapPin } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Google Maps Ranking & Optimierung",
    description: "Rankings verbessern, Ranking-Faktoren verstehen und Maps-SEO von organischem SEO abgrenzen",
    icon: "📍",
    slugs: ["google-maps-ranking-verbessern", "google-maps-seo-ranking-faktoren", "local-seo-vs-maps-seo"],
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
      "google-maps-ranking-tracker",
    ],
  },
  {
    title: "Erweiterte Maps-Funktionen",
    description: "Google Posts, Messaging, mehrere Standorte und Maps-spezifische Features",
    icon: "🚀",
    slugs: ["google-posts-ranking-faktor", "google-business-messaging", "gbp-mehrere-standorte"],
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

const summary: HubSummary = {
  text: "Google Maps ist der wichtigste Kanal für lokale Sichtbarkeit: 86 % der Konsumenten nutzen Maps, um lokale Unternehmen zu finden. Das Local Pack erscheint bei 93 % aller lokalen Suchanfragen. Dieser Hub ist die umfassendste Ressource für Google Maps SEO — von Ranking-Faktoren über GBP-Optimierung bis zu Troubleshooting.",
  stats: [
    { label: "Artikel in diesem Hub", value: "25+" },
    { label: "Nutzer finden Firmen via Maps", value: "86 %" },
    { label: "Lokale Suchen mit Local Pack", value: "93 %" },
    { label: "Themen-Kategorien", value: "6" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Google Maps SEO vs. Organisches Local SEO",
  headers: ["Faktor", "Google Maps / Local Pack", "Organische lokale Ergebnisse", "Beide"],
  rows: [
    { label: "Stärkster Ranking-Faktor", cells: ["GBP-Signale (36 %)", "On-Page (34 %)", "—"] },
    { label: "Bewertungen", cells: ["17 % Gewichtung", "5 % Gewichtung", "Immer wichtig"] },
    { label: "Backlinks", cells: ["11 % Gewichtung", "31 % Gewichtung", "Immer wichtig"] },
    { label: "Proximity (Entfernung)", cells: ["14 % – sehr stark", "Gering", "—"] },
    { label: "Schema Markup", cells: ["Indirekt (GBP)", "Direkt (Rich Results)", "Immer empfohlen"] },
    { label: "Content-Tiefe", cells: ["Gering (GBP-Beschreibung)", "Sehr hoch", "—"] },
    { label: "Optimierungs-Fokus", cells: ["GBP, Fotos, Posts", "Website, Content, Links", "NAP-Konsistenz"] },
  ],
  footnote: "Gewichtungen basieren auf Whitespark Local Search Ranking Factors 2024.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
  { label: "Google Maps Audit Template", href: "/blog/google-maps-audit-template", type: "tool" },
  { label: "Google Maps Ranking Tracker", href: "/blog/google-maps-ranking-tracker", type: "tool" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "LocalBusiness Schema implementieren", href: "/blog/localbusiness-schema-implementierung", type: "guide" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
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
