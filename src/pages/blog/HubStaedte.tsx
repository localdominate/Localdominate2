import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { MapPin } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Deutschland – Großstädte",
    description: "Local SEO Guides für die größten deutschen Städte",
    icon: "🇩🇪",
    slugs: [
      "local-seo-berlin",
      "local-seo-hamburg",
      "local-seo-muenchen",
      "local-seo-koeln",
      "local-seo-frankfurt",
      "local-seo-duesseldorf",
      "local-seo-stuttgart",
      "local-seo-hannover",
    ],
  },
  {
    title: "Österreich",
    description: "Local SEO speziell für den österreichischen Markt",
    icon: "🇦🇹",
    slugs: [
      "local-seo-wien",
    ],
  },
  {
    title: "Schweiz",
    description: "Local SEO für den Schweizer Markt mit Besonderheiten der Mehrsprachigkeit",
    icon: "🇨🇭",
    slugs: [
      "local-seo-schweiz",
      "local-seo-zuerich",
      "local-seo-basel",
    ],
  },
];

const HubStaedte = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Local SEO Städte-Guides – DACH-Region",
    description: "12 stadtspezifische Local SEO Guides für Deutschland, Österreich und die Schweiz.",
    url: "https://localdominate.org/blog/local-seo-staedte-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Local SEO Städte-Guides – DACH-Region"
      metaTitle="Local SEO Städte-Guides – 12 Städte in DACH | 2026"
      metaDescription="Stadtspezifische Local SEO Guides für Berlin, Hamburg, München, Wien, Zürich und mehr. Lokale Besonderheiten und Verzeichnisse für jede Stadt."
      heroDescription="Lokales SEO unterscheidet sich von Stadt zu Stadt. Finde den Guide für deinen Standort mit lokalen Verzeichnissen, Wettbewerbsanalysen und stadtspezifischen Tipps."
      heroIcon={<MapPin className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
        { label: "📍 NAP & Citations", href: "/blog/nap-konsistenz-local-seo" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubStaedte;
