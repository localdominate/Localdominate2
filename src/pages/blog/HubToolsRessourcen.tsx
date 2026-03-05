import TopicHubLayout, { HubArticleGroup } from "@/components/blog/TopicHubLayout";
import { Wrench } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "SEO-Tools & Software",
    description: "Kostenlose und Premium-Tools für lokales SEO",
    icon: "🧰",
    slugs: [
      "seo-toolbox-kostenlose-ressourcen",
      "ki-tools-local-seo",
    ],
  },
  {
    title: "Checklisten & Templates",
    description: "Sofort einsetzbare Vorlagen für Audits, Reports und Optimierung",
    icon: "📋",
    slugs: [
      "local-seo-audit-checkliste",
      "local-seo-reporting-template",
      "bewertungs-antworten-vorlagen",
    ],
  },
  {
    title: "Kostenlose Guides",
    description: "Umfassende Einsteiger-Ressourcen zum Selbstlernen",
    icon: "📚",
    slugs: [
      "kostenloses-seo-guide",
      "lokale-seo-fuer-neugruender",
      "local-seo-case-study-baecker",
    ],
  },
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
