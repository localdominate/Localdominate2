import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Sparkles } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "AI Search & Sichtbarkeit",
    description: "Wie AI Overviews, ChatGPT und Perplexity lokale Suche verändern",
    icon: "🤖",
    slugs: [
      "google-ai-overviews-local-seo",
      "ai-search-optimization-2026",
      "website-content-ai-suchmaschinen",
      "entity-seo-guide",
    ],
  },
  {
    title: "KI-Tools für SEO",
    description: "AI-gestützte Tools und Workflows für lokales SEO",
    icon: "🛠️",
    slugs: [
      "ki-tools-local-seo",
    ],
  },
  {
    title: "Voice Search & neue Kanäle",
    description: "Sprachsuche, E-E-A-T und zukunftssichere SEO-Strategien",
    icon: "🎙️",
    slugs: [
      "local-seo-voice-search",
      "e-e-a-t-lokale-unternehmen",
    ],
  },
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
