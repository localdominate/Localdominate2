import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
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
    slugs: ["ranking-ploetzlich-verschwunden", "local-seo-fehler"],
  },
  {
    title: "Bewertungen & Reputation",
    description: "Unfaire Bewertungen entfernen und mit Kritik umgehen",
    icon: "⭐",
    slugs: ["gbp-bewertung-loeschen-anleitung", "negative-google-bewertungen"],
  },
];

const summary: HubSummary = {
  text: "Wenn dein lokales Ranking plötzlich einbricht oder dein Google Business Profil suspendiert wird, zählt schnelles Handeln. Dieser Hub bietet Sofort-Hilfe für die häufigsten Local SEO Probleme: Von der GBP-Reaktivierung über Duplicate-Listing-Bereinigung bis zur professionellen Reaktion auf unfaire Bewertungen.",
  stats: [
    { label: "Problemlösungs-Guides", value: "8" },
    { label: "GBP-Troubleshooting", value: "4" },
    { label: "Ranking-Rettung", value: "2" },
    { label: "Bewertungs-Guides", value: "2" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Häufige Probleme: Ursache, Lösung & Zeitrahmen",
  headers: ["Problem", "Häufigste Ursache", "Lösungszeit", "Schwierigkeit", "Guide"],
  rows: [
    { label: "GBP suspendiert", cells: ["Richtlinienverstoß", "3–21 Tage", "Hoch", "→ Reaktivierungs-Guide"] },
    { label: "Verifizierung schlägt fehl", cells: ["Adressfehler / Postcard", "1–4 Wochen", "Mittel", "→ Verifizierungs-Guide"] },
    { label: "GBP nicht sichtbar", cells: ["Nicht indexiert / neu", "1–6 Wochen", "Mittel", "→ Sichtbarkeits-Guide"] },
    { label: "Duplikat-Einträge", cells: ["Umzug / Mitbewerber", "1–4 Wochen", "Mittel", "→ Duplikat-Guide"] },
    { label: "Ranking plötzlich weg", cells: ["Algo-Update / Penalty", "2–12 Wochen", "Hoch", "→ Ranking-Rettung"] },
    { label: "Negative Fake-Bewertung", cells: ["Wettbewerber / Troll", "3–30 Tage", "Mittel-hoch", "→ Bewertungs-Guide"] },
  ],
  footnote: "Lösungszeiten variieren je nach Schwere des Problems und Google-Support-Reaktionszeit.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Google Business Profil optimieren", href: "/blog/google-my-business-optimieren", type: "guide" },
  { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste", type: "checklist" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "Local SEO Fehler vermeiden", href: "/blog/local-seo-fehler", type: "guide" },
  { label: "Google Maps Ranking verbessern", href: "/blog/google-maps-ranking-verbessern", type: "guide" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
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
