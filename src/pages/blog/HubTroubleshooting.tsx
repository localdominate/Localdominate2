import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { AlertTriangle } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Google Business Profil Probleme",
    description: "Suspendierung, Verifizierung, Duplikate und Sichtbarkeitsprobleme lösen",
    icon: "🔧",
    slugs: [
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
    ],
  },
  {
    title: "Ranking & Sichtbarkeit",
    description: "Plötzliche Ranking-Verluste und häufige SEO-Fehler beheben",
    icon: "📉",
    slugs: [
      "ranking-ploetzlich-verschwunden",
      "local-seo-fehler",
    ],
  },
  {
    title: "Bewertungen & Reputation",
    description: "Unfaire Bewertungen entfernen und mit Kritik umgehen",
    icon: "⭐",
    slugs: [
      "gbp-bewertung-loeschen-anleitung",
      "negative-google-bewertungen",
    ],
  },
];

const HubTroubleshooting = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Troubleshooting Hub – Lokale SEO-Probleme lösen",
    description: "Lösungen für GBP-Suspendierungen, Ranking-Verluste, Duplikate, unfaire Bewertungen und weitere häufige Local SEO Probleme.",
    url: "https://localdominate.org/blog/troubleshooting-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Troubleshooting Hub"
      metaTitle="Local SEO Troubleshooting Hub – Alle Probleme gelöst 2026"
      metaDescription="Lösungen für GBP-Suspendierungen, Verifizierungsprobleme, Ranking-Verluste, Duplikate und unfaire Bewertungen. 8+ Problemlösungs-Guides."
      heroDescription="Probleme mit deinem Google Business Profil oder deinem lokalen Ranking? Hier findest du Schritt-für-Schritt Anleitungen zur Lösung der häufigsten Local SEO Probleme."
      heroIcon={<AlertTriangle className="w-7 h-7 text-primary" />}
      groups={groups}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "⭐ Bewertungen & Reputation", href: "/blog/bewertungen-reputation-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubTroubleshooting;
