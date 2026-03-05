import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Factory } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Gastronomie & Food",
    description: "SEO-Guides für Restaurants, Bäckereien, Imbisse und Ferienwohnungen",
    icon: "🍽️",
    slugs: [
      "local-seo-fuer-restaurants",
      "local-seo-baeckerei",
      "local-seo-doener-kebab-imbiss",
      "seo-ferienwohnungen",
      "local-seo-hotels",
    ],
  },
  {
    title: "Gesundheit & Wellness",
    description: "SEO für Ärzte, Zahnärzte, Physiotherapeuten, Apotheken und mehr",
    icon: "🏥",
    slugs: [
      "local-seo-aerzte-praxen",
      "local-seo-zahnarzt",
      "local-seo-physiotherapie",
      "local-seo-apotheken",
      "local-seo-tierarzt",
      "local-seo-optiker",
    ],
  },
  {
    title: "Handwerk & Technik",
    description: "SEO für Handwerker, Autowerkstätten und Elektrotechniker",
    icon: "🔨",
    slugs: [
      "local-seo-handwerker",
      "local-seo-autowerkstatt",
      "local-seo-elektrotechnik",
    ],
  },
  {
    title: "Dienstleistungen & Freiberufler",
    description: "SEO für Anwälte, Steuerberater, Immobilienmakler und Fotografen",
    icon: "💼",
    slugs: [
      "local-seo-anwaelte-kanzleien",
      "local-seo-steuerberater",
      "local-seo-immobilienmakler",
      "local-seo-fotograf",
    ],
  },
  {
    title: "Beauty, Fitness & Lifestyle",
    description: "SEO für Friseure, Tattoo-Studios, Yoga-Studios und Fitnessstudios",
    icon: "💅",
    slugs: [
      "local-seo-friseursalon-beauty",
      "local-seo-tattoo-studios",
      "local-seo-yoga-studios",
      "local-seo-fitness",
    ],
  },
];

const HubBranchen = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Local SEO Branchen-Guides – Alle Branchen im Überblick",
    description: "22+ branchenspezifische Local SEO Guides für Gastronomie, Gesundheit, Handwerk, Dienstleistungen und Lifestyle.",
    url: "https://localdominate.org/blog/local-seo-branchen-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Local SEO Branchen-Guides"
      metaTitle="Local SEO Branchen-Guides – 22+ Branchen im Überblick 2026"
      metaDescription="Branchenspezifische Local SEO Anleitungen für Gastronomie, Gesundheit, Handwerk, Dienstleistungen und Lifestyle. Finde deinen Guide."
      heroDescription="Jede Branche hat eigene Local SEO Herausforderungen. Finde den passenden Guide für dein Business und setze branchenspezifische Best Practices um."
      heroIcon={<Factory className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "🏙️ Städte-Guides", href: "/blog/local-seo-staedte-hub" },
        { label: "⭐ Bewertungen & Reputation", href: "/blog/bewertungen-reputation-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubBranchen;
