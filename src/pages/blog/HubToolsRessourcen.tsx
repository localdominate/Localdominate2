import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Wrench } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "SEO-Tools & Software",
    description: "Kostenlose und Premium-Tools für lokales SEO",
    icon: "🧰",
    slugs: ["seo-toolbox-kostenlose-ressourcen", "ki-tools-local-seo", "google-maps-ranking-tracker"],
  },
  {
    title: "Checklisten & Templates",
    description: "Sofort einsetzbare Vorlagen für Audits, Reports und Optimierung",
    icon: "📋",
    slugs: [
      "local-seo-audit-checkliste",
      "local-seo-reporting-template",
      "bewertungs-antworten-vorlagen",
      "google-maps-audit-template",
      "citation-tracking-template",
      "local-keyword-research-template",
      "local-seo-monthly-checklist",
      "local-seo-strategy-planner",
      "local-seo-roadmap-90-tage",
    ],
  },
  {
    title: "Kostenlose Guides",
    description: "Umfassende Einsteiger-Ressourcen zum Selbstlernen",
    icon: "📚",
    slugs: ["kostenloses-seo-guide", "lokale-seo-fuer-neugruender", "local-seo-case-study-baecker"],
  },
];

const summary: HubSummary = {
  text: "Die richtigen Tools sparen dir Stunden bei der Local SEO Optimierung. Dieser Hub sammelt alle interaktiven Templates, Checklisten und Tool-Guides an einem Ort — von der Keyword-Recherche über den Citation-Audit bis zum monatlichen Wartungsplan. Alle Templates speichern deinen Fortschritt lokal und sind sofort einsatzbereit.",
  stats: [
    { label: "Interaktive Templates", value: "9" },
    { label: "Tool-Reviews", value: "3" },
    { label: "Kostenlose Guides", value: "3" },
    { label: "Checklisten-Punkte gesamt", value: "300+" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Tool-Vergleich: Kostenlos vs. Premium für Local SEO",
  headers: ["Funktion", "Kostenloses Tool", "Premium-Alternative", "Empfehlung"],
  rows: [
    { label: "Keyword-Recherche", cells: ["Google Keyword Planner", "Semrush / Ahrefs", "KWP für Basis, Premium bei Skalierung"] },
    { label: "Ranking-Tracking", cells: ["Google Search Console", "BrightLocal / Semrush", "GSC reicht für 1 Standort"] },
    { label: "Citation-Audit", cells: ["Manuell + Google", "Whitespark / Moz Local", "Manuell bei <20 Citations"] },
    { label: "Bewertungs-Management", cells: ["GBP Manager", "BrightLocal / Podium", "GBP Manager für Einzel-Standorte"] },
    { label: "Technisches Audit", cells: ["PageSpeed Insights", "Screaming Frog / Ahrefs", "PSI für Quick-Checks"] },
    { label: "Wettbewerbsanalyse", cells: ["Google Maps manuell", "Semrush / BrightLocal", "Premium bei >5 Konkurrenten"] },
  ],
  footnote: "Für kleine Unternehmen mit 1 Standort reichen kostenlose Tools meist aus. Premium lohnt ab 3+ Standorten oder in umkämpften Märkten.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "Technisches Local SEO Guide", href: "/blog/technisches-local-seo-guide", type: "pillar" },
  { label: "Local SEO Strategie für kleine Unternehmen", href: "/blog/local-seo-strategie-kleine-unternehmen", type: "pillar" },
  { label: "Local SEO Fehler vermeiden", href: "/blog/local-seo-fehler", type: "guide" },
  { label: "Schema-Strategie-Dokument", href: "/blog/schema-strategie-dokument", type: "guide" },
];

const HubToolsRessourcen = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tools & Ressourcen Hub – Alle SEO-Werkzeuge",
    description: "SEO-Tools, Checklisten, Templates und kostenlose Guides für lokales SEO.",
    url: "https://localdominate.org/blog/tools-ressourcen-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <TopicHubLayout
      title="Tools & Ressourcen Hub"
      metaTitle="Local SEO Tools & Ressourcen Hub – Checklisten & Templates 2026"
      metaDescription="Alle SEO-Tools, Checklisten, Reporting-Templates und kostenlose Guides für lokales SEO an einem Ort. 8+ Ressourcen."
      heroDescription="Die besten Werkzeuge für dein lokales SEO. Von kostenlosen Tools über Audit-Checklisten bis hin zu Reporting-Templates – alles an einem Ort."
      heroIcon={<Wrench className="w-7 h-7 text-primary" />}
      groups={groups}
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
        { label: "🤖 AI & Zukunft", href: "/blog/ai-zukunft-hub" },
        { label: "✍️ Content & Marketing", href: "/blog/content-marketing-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubToolsRessourcen;
