import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
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
      "local-seo-heizung-sanitaer",
      "local-seo-gebaeudereinigung",
      "local-seo-garten-landschaftsbau",
      "local-seo-umzugsunternehmen",
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

const summary: HubSummary = {
  text: "Jede Branche hat eigene Suchgewohnheiten, Wettbewerbsdynamiken und Plattform-Schwerpunkte. Während ein Restaurant 80 % seiner lokalen Sichtbarkeit über Google Maps und Bewertungen erzielt, brauchen Anwälte und Steuerberater starke On-Page-Inhalte und E-E-A-T-Signale. Finde den Guide für deine Branche und setze branchenspezifische Strategien um.",
  stats: [
    { label: "Branchen-Guides", value: "22+" },
    { label: "Branchen-Kategorien", value: "5" },
    { label: "Ø Lesezeit pro Guide", value: "12 Min." },
    { label: "Branchenspezifische Tipps", value: "200+" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Branchenvergleich: Wichtigste Local SEO Faktoren",
  headers: ["Branche", "Top-Kanal", "Bewertungs-Gewicht", "Wettbewerb", "Besonderheit"],
  rows: [
    { label: "Gastronomie", cells: ["Google Maps", "Sehr hoch", "Hoch", "Fotos & Speisekarte entscheidend"] },
    { label: "Ärzte & Zahnärzte", cells: ["Organisch + Maps", "Hoch", "Mittel-hoch", "E-E-A-T & Jameda-Profil"] },
    { label: "Handwerker", cells: ["Maps + Notdienst", "Hoch", "Mittel", "Notdienst-Keywords & SAB-Profil"] },
    { label: "Anwälte & Steuerberater", cells: ["Organisch", "Mittel", "Hoch", "Content-Tiefe & Vertrauen"] },
    { label: "Friseure & Beauty", cells: ["Maps + Instagram", "Sehr hoch", "Hoch", "Vorher/Nachher-Fotos"] },
    { label: "Fitness & Yoga", cells: ["Maps + Social", "Hoch", "Mittel", "Kurspläne & Community"] },
    { label: "Immobilienmakler", cells: ["Organisch + Portale", "Mittel", "Sehr hoch", "Stadtteil-Content"] },
    { label: "Ferienwohnungen", cells: ["OTAs + Maps", "Sehr hoch", "Hoch", "Saisonale Optimierung"] },
  ],
  footnote: "Ranking-Faktoren variieren je nach Standort und lokalem Wettbewerb.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Strategie für kleine Unternehmen", href: "/blog/local-seo-strategie-kleine-unternehmen", type: "pillar" },
  { label: "Google Business Profil optimieren", href: "/blog/google-my-business-optimieren", type: "guide" },
  { label: "Google Bewertungen bekommen", href: "/blog/google-bewertungen-bekommen", type: "guide" },
  { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste", type: "checklist" },
  { label: "Lokale Keyword-Recherche Template", href: "/blog/local-keyword-research-template", type: "tool" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
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
