import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { PenTool } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Content-Strategie",
    description: "Lokale Inhalte erstellen, die ranken und konvertieren",
    icon: "✍️",
    slugs: [
      "local-content-marketing",
      "lokale-events-marketing",
      "e-e-a-t-lokale-unternehmen",
    ],
  },
  {
    title: "Link Building & Citations",
    description: "Backlinks und Erwähnungen für lokale Autorität aufbauen",
    icon: "🔗",
    slugs: [
      "local-link-building",
      "local-citations-2025",
      "nap-konsistenz-local-seo",
    ],
  },
  {
    title: "Keyword-Strategie",
    description: "Die richtigen lokalen Keywords finden und einsetzen",
    icon: "🔍",
    slugs: [
      "local-seo-keywords-finden",
      "local-seo-notdienst-keywords",
      "local-seo-vs-maps-seo",
    ],
  },
  {
    title: "Starter & Grundlagen",
    description: "Einstieg ins lokale SEO für Neugründer und Einsteiger",
    icon: "🚀",
    slugs: [
      "lokale-seo-fuer-neugruender",
      "kostenloses-seo-guide",
      "local-seo-fehler",
      "local-seo-case-study-baecker",
    ],
  },
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
