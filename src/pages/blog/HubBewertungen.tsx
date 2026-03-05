import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Star } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Bewertungen generieren",
    description: "Strategien, Workflows und Vorlagen für mehr authentische Google-Bewertungen",
    icon: "⭐",
    slugs: [
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
    ],
  },
  {
    title: "Negative Bewertungen managen",
    description: "Professioneller Umgang mit Kritik und unfairen Bewertungen",
    icon: "🛡️",
    slugs: [
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
    ],
  },
  {
    title: "Technische Implementierung",
    description: "Review-Schema, Rich Snippets und technische Integration",
    icon: "💻",
    slugs: [
      "review-schema-implementierung",
      "schema-markup-local-seo",
    ],
  },
  {
    title: "Bewertungen & Ranking",
    description: "Wie Bewertungen das lokale Ranking beeinflussen",
    icon: "📈",
    slugs: [
      "google-maps-seo-ranking-faktoren",
      "google-maps-ranking-verbessern",
      "local-seo-reporting-template",
    ],
  },
];

const HubBewertungen = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bewertungen & Reputation Hub – Alle Guides",
    description: "Komplette Sammlung aller Bewertungs-Guides: Generierung, Management, Technik und Ranking-Impact.",
    url: "https://localdominate.org/blog/bewertungen-reputation-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Bewertungen & Reputation Hub"
      metaTitle="Bewertungen & Reputation Hub – Alle Guides 2026"
      metaDescription="Alle Guides zu Google Bewertungen: Generierung, Antwort-Vorlagen, negative Bewertungen, Review-Schema und Ranking-Impact. 11+ Artikel."
      heroDescription="Bewertungen sind der stärkste lokale Ranking-Faktor und Vertrauenssignal. Hier findest du alle Strategien – von der Generierung über den Umgang mit Kritik bis zur technischen Implementierung."
      heroIcon={<Star className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-local-seo-guide" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubBewertungen;
