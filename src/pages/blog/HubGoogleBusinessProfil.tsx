import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Building2 } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Profil-Optimierung",
    description: "Grundlagen und fortgeschrittene Techniken zur GBP-Optimierung",
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
    description: "Strategien für mehr Bewertungen und professionelles Reputationsmanagement",
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
    title: "Insights & Performance",
    description: "Daten verstehen und für Wachstum nutzen",
    icon: "📊",
    slugs: [
      "google-business-insights-verstehen",
      "google-maps-ranking-verbessern",
      "google-maps-seo-ranking-faktoren",
      "local-seo-reporting-template",
    ],
  },
  {
    title: "Erweiterte Funktionen",
    description: "Posts, Messaging und Multi-Standort-Management",
    icon: "🚀",
    slugs: [
      "google-posts-ranking-faktor",
      "google-business-messaging",
      "gbp-mehrere-standorte",
      "local-seo-mehrstufig-unternehmen",
    ],
  },
  {
    title: "Fehlerbehebung",
    description: "Lösungen für häufige GBP-Probleme",
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

const HubGoogleBusinessProfil = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Google Business Profil Hub – Alle Guides & Anleitungen",
    description: "Komplette Sammlung aller Google Business Profil Guides: Optimierung, Bewertungen, Insights, Fehlerbehebung und mehr.",
    url: "https://localdominate.org/blog/google-business-profil-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Google Business Profil Hub"
      metaTitle="Google Business Profil Hub – Alle Guides & Anleitungen 2026"
      metaDescription="Komplette Sammlung aller Google Business Profil Guides: Profil-Optimierung, Bewertungen, Insights, erweiterte Funktionen und Fehlerbehebung. 24+ Artikel."
      heroDescription="Dein zentrales Nachschlagewerk für alle Google Business Profil Themen. Von der Ersteinrichtung über Bewertungsmanagement bis zur Fehlerbehebung."
      heroIcon={<Building2 className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
        { label: "🏙️ Städte-Guides", href: "/blog/local-seo-staedte-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-local-seo-guide" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubGoogleBusinessProfil;
