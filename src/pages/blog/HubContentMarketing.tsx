import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { PenTool } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Content-Strategie",
    description: "Lokale Inhalte erstellen, die ranken und konvertieren",
    icon: "✍️",
    slugs: ["local-content-marketing", "lokale-events-marketing", "lokale-influencer-kooperationen", "e-e-a-t-lokale-unternehmen"],
  },
  {
    title: "Link Building & Citations",
    description: "Backlinks und Erwähnungen für lokale Autorität aufbauen",
    icon: "🔗",
    slugs: ["local-link-building", "local-citations-2025", "nap-konsistenz-local-seo"],
  },
  {
    title: "Keyword-Strategie",
    description: "Die richtigen lokalen Keywords finden und einsetzen",
    icon: "🔍",
    slugs: ["local-seo-keywords-finden", "local-seo-notdienst-keywords", "local-seo-vs-maps-seo"],
  },
  {
    title: "Starter & Grundlagen",
    description: "Einstieg ins lokale SEO für Neugründer und Einsteiger",
    icon: "🚀",
    slugs: ["lokale-seo-fuer-neugruender", "kostenloses-seo-guide", "local-seo-fehler", "local-seo-case-study-baecker"],
  },
];

const summary: HubSummary = {
  text: "Content und Marketing machen 34 % der organischen lokalen Ranking-Faktoren aus. Lokale Inhalte mit Stadtbezug ranken 3× besser als generische Inhalte. Dieser Hub verbindet Content-Strategie, Link Building, Keyword-Recherche und Einsteiger-Ressourcen zu einem vollständigen Marketing-Framework für lokale Unternehmen.",
  stats: [
    { label: "Content-Strategien", value: "4" },
    { label: "Link-Building-Guides", value: "3" },
    { label: "Keyword-Guides", value: "3" },
    { label: "Einsteiger-Ressourcen", value: "4" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Content-Typen für Local SEO im Vergleich",
  headers: ["Content-Typ", "SEO-Wirkung", "Aufwand", "Lebensdauer", "Beispiel"],
  rows: [
    { label: "Stadtteil-Landingpages", cells: ["Sehr hoch", "Mittel", "Langfristig", "„Zahnarzt München Schwabing""] },
    { label: "Lokale Guides & Listen", cells: ["Hoch", "Hoch", "Langfristig", "„Top 10 Cafés in Köln-Ehrenfeld""] },
    { label: "Case Studies & Referenzen", cells: ["Mittel-hoch", "Mittel", "Langfristig", "„Wie wir Bäckerei Schmidt halfen""] },
    { label: "Event-Content", cells: ["Mittel", "Gering", "Kurzfristig", "„Weihnachtsmarkt-Guide 2026""] },
    { label: "FAQ-Seiten", cells: ["Mittel-hoch", "Gering", "Langfristig", "„Häufige Fragen zu Zahnarztbesuchen""] },
    { label: "Google Posts", cells: ["Gering-mittel", "Gering", "7–14 Tage", "„Angebot: 20 % auf Erstberatung""] },
    { label: "Influencer-Kooperationen", cells: ["Mittel", "Hoch", "Mittelfristig", "„Zusammenarbeit mit Food-Blogger""] },
  ],
  footnote: "SEO-Wirkung kombiniert Ranking-Impact, Traffic-Potenzial und Conversion-Rate.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local Link Building Blueprint", href: "/blog/local-link-building-blueprint", type: "pillar" },
  { label: "Local SEO Strategie für kleine Unternehmen", href: "/blog/local-seo-strategie-kleine-unternehmen", type: "pillar" },
  { label: "Lokale Keyword-Recherche Template", href: "/blog/local-keyword-research-template", type: "tool" },
  { label: "SEO Strategie-Planner", href: "/blog/local-seo-strategy-planner", type: "tool" },
  { label: "90-Tage Local SEO Roadmap", href: "/blog/local-seo-roadmap-90-tage", type: "tool" },
];

const HubContentMarketing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Content & Marketing Hub – Alle Guides",
    description: "Lokale Content-Strategie, Link Building, Keyword-Recherche und Einsteiger-Guides für Local SEO.",
    url: "https://localdominate.org/blog/content-marketing-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Content & Marketing Hub"
      metaTitle="Content & Marketing Hub – Lokale Strategien 2026"
      metaDescription="Alle Guides zu lokaler Content-Strategie, Link Building, Keyword-Recherche und Einsteiger-Tipps. 13+ Artikel für maximale lokale Sichtbarkeit."
      heroDescription="Content ist König – auch im lokalen SEO. Hier findest du alle Strategien für lokale Inhalte, Backlinks, Keyword-Recherche und den perfekten Einstieg."
      heroIcon={<PenTool className="w-7 h-7 text-primary" />}
      groups={groups}
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubContentMarketing;
