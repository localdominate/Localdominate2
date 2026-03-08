import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
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
    slugs: ["local-seo-wien"],
  },
  {
    title: "Schweiz",
    description: "Local SEO für den Schweizer Markt mit Besonderheiten der Mehrsprachigkeit",
    icon: "🇨🇭",
    slugs: ["local-seo-schweiz", "local-seo-zuerich", "local-seo-basel"],
  },
];

const summary: HubSummary = {
  text: "Lokales SEO unterscheidet sich von Stadt zu Stadt erheblich: Suchvolumen, Wettbewerbsdichte, relevante Verzeichnisse und lokale Medienlandschaft variieren stark. Ein Friseur in München kämpft gegen andere Faktoren als einer in Basel. Diese Guides liefern stadtspezifische Verzeichnislisten, Wettbewerbsanalysen und Stadtteil-Strategien für 12 DACH-Städte.",
  stats: [
    { label: "Städte-Guides", value: "12" },
    { label: "Länder abgedeckt", value: "3" },
    { label: "Lokale Verzeichnisse", value: "100+" },
    { label: "Stadtteile analysiert", value: "80+" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Städtevergleich: Wettbewerb & Besonderheiten",
  headers: ["Stadt", "Wettbewerb", "Top-Verzeichnisse", "Besonderheit", "Sprache"],
  rows: [
    { label: "Berlin", cells: ["Sehr hoch", "Yelp, Qype, BerlinOnline", "Kiez-Marketing, Multikulti", "DE"] },
    { label: "Hamburg", cells: ["Hoch", "Hamburg.de, meinestadt.de", "Hafenwirtschaft, Stadtteil-Identität", "DE"] },
    { label: "München", cells: ["Sehr hoch", "muenchen.de, Gelbe Seiten", "Hohe Kaufkraft, Tourismus", "DE"] },
    { label: "Köln", cells: ["Hoch", "koeln.de, 11880", "Veedel-Kultur, Events", "DE"] },
    { label: "Frankfurt", cells: ["Hoch", "Frankfurt.de, meinestadt", "Finanzsektor, Internationalität", "DE"] },
    { label: "Düsseldorf", cells: ["Mittel-hoch", "duesseldorf.de, Das Örtliche", "Mode, Kö-Umgebung", "DE"] },
    { label: "Wien", cells: ["Hoch", "Herold.at, Google Maps AT", "Bezirk-System, AT-Verzeichnisse", "DE"] },
    { label: "Zürich", cells: ["Mittel-hoch", "local.ch, search.ch", "Mehrsprachigkeit, hohe Preise", "DE/EN"] },
    { label: "Basel", cells: ["Mittel", "local.ch, bs.ch", "Dreiländereck, FR/DE", "DE/FR"] },
  ],
  footnote: "Wettbewerbsintensität basiert auf durchschnittlicher Keyword Difficulty für lokale Suchbegriffe.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "NAP-Konsistenz für Local SEO", href: "/blog/nap-konsistenz-local-seo", type: "guide" },
  { label: "Local Citations 2025", href: "/blog/local-citations-2025", type: "guide" },
  { label: "Citation Tracking Template", href: "/blog/citation-tracking-template", type: "tool" },
  { label: "Lokale Keyword-Recherche Template", href: "/blog/local-keyword-research-template", type: "tool" },
  { label: "Google Business Profil optimieren", href: "/blog/google-my-business-optimieren", type: "guide" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
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
