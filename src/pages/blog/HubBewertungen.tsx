import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Star } from "lucide-react";

const groups: HubArticleGroup[] = [
  {
    title: "Bewertungen generieren",
    description: "Strategien, Workflows und Vorlagen für mehr authentische Google-Bewertungen",
    icon: "⭐",
    slugs: ["google-bewertungen-bekommen", "bewertungs-antworten-vorlagen"],
  },
  {
    title: "Negative Bewertungen managen",
    description: "Professioneller Umgang mit Kritik und unfairen Bewertungen",
    icon: "🛡️",
    slugs: ["negative-google-bewertungen", "gbp-bewertung-loeschen-anleitung"],
  },
  {
    title: "Technische Implementierung",
    description: "Review-Schema, Rich Snippets und technische Integration",
    icon: "💻",
    slugs: ["review-schema-implementierung", "schema-markup-local-seo"],
  },
  {
    title: "Bewertungen & Ranking",
    description: "Wie Bewertungen das lokale Ranking beeinflussen",
    icon: "📈",
    slugs: ["google-maps-seo-ranking-faktoren", "google-maps-ranking-verbessern", "local-seo-reporting-template"],
  },
];

const summary: HubSummary = {
  text: "Google-Bewertungen machen 17 % der Local Pack Ranking-Faktoren aus und sind das stärkste Vertrauenssignal für potenzielle Kunden. 98 % der Konsumenten lesen Online-Bewertungen für lokale Unternehmen. Dieser Hub deckt den gesamten Bewertungs-Zyklus ab: von der Generierung über das Management bis zur technischen Schema-Implementierung für Rich Snippets.",
  stats: [
    { label: "Ranking-Gewichtung", value: "17 %" },
    { label: "Konsumenten lesen Reviews", value: "98 %" },
    { label: "Mehr Vertrauen bei 4,5+ ⭐", value: "72 %" },
    { label: "Antwort-Vorlagen enthalten", value: "15+" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Vergleich: Bewertungs-Strategien nach Effektivität",
  headers: ["Strategie", "Erfolgsrate", "Aufwand", "Kosten", "Empfehlung"],
  rows: [
    { label: "Persönliche Bitte nach Service", cells: ["60–80 %", "Gering", "Kostenlos", "🔴 Beste Methode"] },
    { label: "Follow-up SMS/WhatsApp", cells: ["30–50 %", "Gering", "Kostenlos", "🔴 Sehr effektiv"] },
    { label: "QR-Code auf Visitenkarte", cells: ["10–20 %", "Einmalig", "5–20 €", "🟡 Gut ergänzend"] },
    { label: "E-Mail-Nachfassaktion", cells: ["5–15 %", "Automatisiert", "Kostenlos", "🟡 Skalierbar"] },
    { label: "Bewertungs-Aufsteller im Laden", cells: ["5–10 %", "Einmalig", "10–30 €", "🟢 Passiv"] },
    { label: "Social Media Aufruf", cells: ["2–5 %", "Gering", "Kostenlos", "🟢 Ergänzend"] },
  ],
  footnote: "Erfolgsraten basieren auf Branchendurchschnitten. Kombination mehrerer Strategien empfohlen.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
  { label: "Google Business Profil optimieren", href: "/blog/google-my-business-optimieren", type: "guide" },
  { label: "Review Schema implementieren", href: "/blog/review-schema-implementierung", type: "guide" },
  { label: "Local SEO Reporting Template", href: "/blog/local-seo-reporting-template", type: "tool" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
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
      summary={summary}
      comparisonTable={comparisonTable}
      resources={resources}
      pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
      relatedHubs={[
        { label: "🏢 Google Business Profil", href: "/blog/google-business-profil-hub" },
        { label: "🏭 Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
        { label: "⚙️ Technisches SEO", href: "/blog/technisches-seo-hub" },
      ]}
      jsonLd={jsonLd}
    />
  );
};

export default HubBewertungen;
