import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Sparkles } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "AI Search & Sichtbarkeit",
    description: "Wie AI Overviews, ChatGPT und Perplexity lokale Suche verändern",
    icon: "🤖",
    slugs: [
      "was-ist-geo-generative-engine-optimization",
      "chatgpt-zitiert-lokale-unternehmen",
      "chatgpt-search-lokale-unternehmen-2026",
      "ai-visibility-index-local-seo-metrik",
      "schema-strategie-ai-retrieval",
      "perplexity-claude-lokale-sichtbarkeit",
      "google-ai-overviews-local-seo",
      "ai-search-optimization-2026",
      "website-content-ai-suchmaschinen",
      "entity-seo-guide",
      "semantic-seo-topical-authority",
    ],
  },
  {
    title: "KI-Tools für SEO",
    description: "AI-gestützte Tools und Workflows für lokales SEO",
    icon: "🛠️",
    slugs: ["ki-tools-local-seo"],
  },
  {
    title: "Voice Search & neue Kanäle",
    description: "Sprachsuche, E-E-A-T und zukunftssichere SEO-Strategien",
    icon: "🎙️",
    slugs: ["local-seo-voice-search", "e-e-a-t-lokale-unternehmen"],
  },
];

const summary: HubSummary = {
  text: "Die Suchlandschaft verändert sich rasant: Google AI Overviews erscheinen bereits bei 30 % der lokalen Suchanfragen, ChatGPT und Perplexity gewinnen Marktanteile, und Voice Search wächst bei mobilen lokalen Suchen um 25 % jährlich. Dieser Hub zeigt, wie du dein Local SEO für die KI-Zukunft aufstellst — ohne die bewährten Grundlagen zu vernachlässigen.",
  stats: [
    { label: "AI-Plattformen abgedeckt", value: "4+" },
    { label: "AI Overview bei lokaler Suche", value: "30 %" },
    { label: "Voice Search Wachstum/Jahr", value: "25 %" },
    { label: "Zukunfts-Strategien", value: "8" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "AI-Suchplattformen im Vergleich für lokale Unternehmen",
  headers: ["Plattform", "Marktanteil", "Lokaler Fokus", "Optimierungs-Strategie", "Dringlichkeit"],
  rows: [
    { label: "Google AI Overviews", cells: ["~90 %", "Stark", "Schema, E-E-A-T, Fact-first", "🔴 Sofort"] },
    { label: "ChatGPT Search", cells: ["~5 %", "Mittel", "Strukturierte Daten, llms.txt", "🟡 2026"] },
    { label: "Apple Intelligence", cells: ["iOS-Nutzer", "Stark (Maps)", "Apple Business Connect", "🟡 2026"] },
    { label: "Perplexity", cells: ["~2 %", "Gering", "Zitierbare Fakten, Quellen", "🟢 Beobachten"] },
    { label: "Voice Assistants", cells: ["Wachsend", "Sehr stark", "Speakable Schema, FAQ", "🟡 2026"] },
  ],
  footnote: "Marktanteile basieren auf Schätzungen für den DACH-Raum, Stand Anfang 2026.",
};

const resources: HubResource[] = [
  { label: "AI Search Optimization: Kompletter Guide", href: "/blog/ai-suche-lokale-unternehmen", type: "pillar" },
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Schema-Strategie-Dokument", href: "/blog/schema-strategie-dokument", type: "guide" },
  { label: "LocalBusiness Schema implementieren", href: "/blog/localbusiness-schema-implementierung", type: "guide" },
  { label: "E-E-A-T für lokale Unternehmen", href: "/blog/e-e-a-t-lokale-unternehmen", type: "guide" },
  { label: "KI-Tools für Local SEO", href: "/blog/ki-tools-local-seo", type: "tool" },
];

const HubAiZukunft = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI & Zukunft Hub – Local SEO im AI-Zeitalter",
    description: "AI Overviews, ChatGPT-Optimierung, KI-Tools und Voice Search: Alle Guides zur Zukunft des lokalen SEO.",
    url: "https://localdominate.org/blog/ai-zukunft-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="AI & Zukunft Hub"
      metaTitle="AI & Zukunft Hub – Local SEO im KI-Zeitalter 2026"
      metaDescription="Alle Guides zu AI Overviews, ChatGPT-Optimierung, KI-Tools und Voice Search. Mach dein lokales SEO fit für die Zukunft. 6+ Artikel."
      heroDescription="Die Suchlandschaft verändert sich rasant. AI Overviews, ChatGPT und Voice Search stellen lokales SEO vor neue Herausforderungen. Hier findest du alle Strategien für die Zukunft."
      heroIcon={<Sparkles className="w-7 h-7 text-primary" />}
      groups={groups}
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
        { label: "🧰 Tools & Ressourcen", href: "/blog/tools-ressourcen-hub" },
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubAiZukunft;
