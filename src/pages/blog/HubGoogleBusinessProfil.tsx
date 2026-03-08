import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Building2 } from "lucide-react";
import StepByStepProcess, { type ProcessStep } from "@/components/blog/StepByStepProcess";
import { Store, Camera, Star, FileText, MapPin, Settings, MessageSquare, Search } from "lucide-react";

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

const summary: HubSummary = {
  text: "Dein Google Business Profil ist der wichtigste Ranking-Faktor im Local Pack (36 % Gewichtung). Vollständig optimierte Profile erhalten 7× mehr Klicks, 70 % mehr Besuche und 50 % mehr Kaufbereitschaft als unvollständige Einträge. Dieser Hub deckt alle GBP-Bereiche von der Ersteinrichtung bis zur Fehlerbehebung ab.",
  stats: [
    { label: "Artikel in diesem Hub", value: "24+" },
    { label: "Ranking-Gewichtung GBP", value: "36 %" },
    { label: "Mehr Klicks bei Optimierung", value: "7×" },
    { label: "Guides für Problemlösung", value: "5" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Vergleich: GBP-Optimierungsbereiche nach Impact",
  headers: ["Bereich", "Ranking-Impact", "Aufwand", "Zeitbedarf", "Priorität"],
  rows: [
    { label: "Kategorien & Infos", cells: ["Sehr hoch", "Gering", "1–2 Stunden", "🔴 Kritisch"] },
    { label: "Bewertungen sammeln", cells: ["Hoch (17 %)", "Mittel", "Laufend", "🔴 Kritisch"] },
    { label: "Fotos & Medien", cells: ["Mittel-hoch", "Mittel", "2–4 Stunden", "🟡 Hoch"] },
    { label: "Google Posts", cells: ["Mittel", "Gering", "30 Min./Woche", "🟡 Hoch"] },
    { label: "Attribute & Extras", cells: ["Gering-mittel", "Gering", "30 Minuten", "🟢 Empfohlen"] },
    { label: "Messaging einrichten", cells: ["Gering (indirekt)", "Gering", "15 Minuten", "🟢 Empfohlen"] },
    { label: "Produkte & Services", cells: ["Mittel", "Mittel", "1–3 Stunden", "🟡 Hoch"] },
    { label: "Multi-Standort-Setup", cells: ["Hoch", "Hoch", "1–2 Tage", "🔴 Kritisch*"] },
  ],
  footnote: "* Multi-Standort nur relevant für Unternehmen mit mehreren Filialen.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
  { label: "Google Maps Audit Template", href: "/blog/google-maps-audit-template", type: "tool" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "LocalBusiness Schema implementieren", href: "/blog/localbusiness-schema-implementierung", type: "guide" },
  { label: "90-Tage Local SEO Roadmap", href: "/blog/local-seo-roadmap-90-tage", type: "tool" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
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
