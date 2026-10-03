export interface ContentUpgrade {
  title: string;
  description: string;
  href: string;
  type: "guide" | "tool" | "checklist" | "template" | "hub";
  badge?: string;
}

export interface ContentUpgradeConfig {
  headline: string;
  subline: string;
  upgrades: ContentUpgrade[];
}

const commonGuides: Record<string, ContentUpgrade> = {
  gbpOptimieren: {
    title: "Google Business Profil optimieren",
    description: "Der ultimative Leitfaden für maximale Sichtbarkeit in Google Maps & der lokalen Suche.",
    href: "/blog/google-my-business-optimieren",
    type: "guide",
    badge: "Pillar Guide",
  },
  napKonsistenz: {
    title: "NAP-Konsistenz sicherstellen",
    description: "Warum einheitliche Firmendaten überall entscheidend für dein Ranking sind.",
    href: "/blog/nap-konsistenz-local-seo",
    type: "guide",
  },
  bewertungenStrategie: {
    title: "Google Bewertungen Strategie",
    description: "Systematisch mehr & bessere Bewertungen für dein Unternehmen gewinnen.",
    href: "/blog/google-bewertungen-bekommen",
    type: "guide",
  },
  localSeoChecklist: {
    title: "Local SEO Checkliste",
    description: "45+ Punkte, die du für eine lückenlose lokale Optimierung abhaken solltest.",
    href: "/blog/local-seo-checkliste-komplett",
    type: "checklist",
    badge: "Interaktiv",
  },
  mapsAudit: {
    title: "Google Maps Audit Template",
    description: "75+ Prüfpunkte für ein vollständig optimiertes Google Maps Profil.",
    href: "/blog/google-maps-audit-template",
    type: "tool",
    badge: "Kostenlos",
  },
  citationTracking: {
    title: "Citation Tracking Template",
    description: "Alle wichtigen DACH-Verzeichnisse tracken und konsistent halten.",
    href: "/blog/citation-tracking-template",
    type: "tool",
  },
  keywordRecherche: {
    title: "Lokale Keyword-Recherche",
    description: "In 5 Schritten die besten lokalen Suchbegriffe für deine Branche finden.",
    href: "/blog/local-keyword-research-template",
    type: "template",
  },
  seoStrategyPlanner: {
    title: "SEO Strategy Planner",
    description: "7-Phasen-Plan mit Budget-Vergleich für deine lokale SEO-Strategie.",
    href: "/blog/local-seo-strategy-planner",
    type: "tool",
  },
  monatlicheWartung: {
    title: "Monatliche SEO-Wartung",
    description: "45+ Aufgaben für die laufende Pflege deiner lokalen Sichtbarkeit.",
    href: "/blog/local-seo-monthly-checklist",
    type: "checklist",
  },
  rankingTracker: {
    title: "Google Maps Ranking Tracker",
    description: "Geo-Grid Heatmap: Dein Ranking an verschiedenen Standorten visualisieren.",
    href: "/blog/google-maps-ranking-tracker",
    type: "tool",
  },
  technischesSeo: {
    title: "Technisches Local SEO",
    description: "Schema Markup, Core Web Vitals und technische Grundlagen für lokale Seiten.",
    href: "/blog/technisches-local-seo-guide",
    type: "guide",
  },
  bewertungsHub: {
    title: "Bewertungen & Reputation Hub",
    description: "Alles zum Thema Online-Bewertungen: Strategien, Templates und Best Practices.",
    href: "/blog/bewertungen-reputation-hub",
    type: "hub",
  },
};

export const contentUpgradeConfigs: Record<string, ContentUpgradeConfig> = {
  aerzte: {
    headline: "📘 Weiterführende Guides für Ärzte & Praxen",
    subline: "Vertiefen Sie Ihr Local SEO Wissen mit diesen spezialisierten Ressourcen:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.technischesSeo,
    ],
  },
  anwaelte: {
    headline: "📘 Weiterführende Guides für Anwälte & Kanzleien",
    subline: "Bauen Sie Ihre lokale Online-Präsenz strategisch auf:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.napKonsistenz,
      commonGuides.bewertungenStrategie,
      commonGuides.localSeoChecklist,
      commonGuides.citationTracking,
      commonGuides.keywordRecherche,
    ],
  },
  handwerker: {
    headline: "📘 Weiterführende Guides für Handwerksbetriebe",
    subline: "Mehr lokale Aufträge mit diesen bewährten SEO-Ressourcen:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.mapsAudit,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.rankingTracker,
    ],
  },
  restaurant: {
    headline: "📘 Weiterführende Guides für Restaurants & Gastronomie",
    subline: "Mehr Gäste durch systematische lokale Optimierung:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.bewertungsHub,
    ],
  },
  hotels: {
    headline: "📘 Weiterführende Guides für Hotels & Unterkünfte",
    subline: "Direkte Buchungen steigern mit gezieltem Local SEO:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.keywordRecherche,
      commonGuides.technischesSeo,
      commonGuides.seoStrategyPlanner,
    ],
  },
  fitness: {
    headline: "📘 Weiterführende Guides für Fitnessstudios",
    subline: "Neue Mitglieder gewinnen mit lokaler Online-Sichtbarkeit:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.localSeoChecklist,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.rankingTracker,
    ],
  },
  friseur: {
    headline: "📘 Weiterführende Guides für Friseure & Beauty-Salons",
    subline: "Mehr Terminbuchungen mit starker lokaler Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.citationTracking,
    ],
  },
  steuerberater: {
    headline: "📘 Weiterführende Guides für Steuerberater",
    subline: "Qualifizierte Mandanten durch professionelle Online-Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.napKonsistenz,
      commonGuides.bewertungenStrategie,
      commonGuides.technischesSeo,
      commonGuides.seoStrategyPlanner,
      commonGuides.localSeoChecklist,
    ],
  },
  autowerkstatt: {
    headline: "📘 Weiterführende Guides für Autowerkstätten",
    subline: "Mehr Kunden in Ihrer Werkstatt mit gezieltem Local SEO:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.napKonsistenz,
    ],
  },
  immobilienmakler: {
    headline: "📘 Weiterführende Guides für Immobilienmakler",
    subline: "Mehr Objekte und Kunden durch lokale Sichtbarkeit:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.seoStrategyPlanner,
      commonGuides.technischesSeo,
      commonGuides.localSeoChecklist,
    ],
  },
  doenerladen: {
    headline: "📘 Weiterführende Guides für Döner-Imbisse",
    subline: "Mehr hungrige Kunden mit starker Google-Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.rankingTracker,
    ],
  },
  yoga: {
    headline: "📘 Weiterführende Guides für Yoga-Studios",
    subline: "Neue Yogis gewinnen durch gezielte lokale Optimierung:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.localSeoChecklist,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.citationTracking,
    ],
  },
  tattoo: {
    headline: "📘 Weiterführende Guides für Tattoo-Studios",
    subline: "Mehr Anfragen und Terminbuchungen durch Local SEO:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.keywordRecherche,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
    ],
  },
  apotheke: {
    headline: "📘 Weiterführende Guides für Apotheken",
    subline: "Mehr Laufkundschaft und Online-Sichtbarkeit für Ihre Apotheke:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.technischesSeo,
    ],
  },
  tierarzt: {
    headline: "📘 Weiterführende Guides für Tierärzte",
    subline: "Mehr Tierbesitzer erreichen mit lokaler Online-Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.localSeoChecklist,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.bewertungsHub,
    ],
  },
  zahnarzt: {
    headline: "📘 Weiterführende Guides für Zahnärzte",
    subline: "Mehr Neupatienten durch professionelle lokale Sichtbarkeit:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.technischesSeo,
      commonGuides.localSeoChecklist,
      commonGuides.napKonsistenz,
    ],
  },
  optiker: {
    headline: "📘 Weiterführende Guides für Optiker",
    subline: "Mehr Kunden für Ihr Fachgeschäft mit Local SEO:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.mapsAudit,
      commonGuides.keywordRecherche,
    ],
  },
  physiotherapie: {
    headline: "📘 Weiterführende Guides für Physiotherapie-Praxen",
    subline: "Mehr Patienten durch gezielte lokale Online-Optimierung:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.localSeoChecklist,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.technischesSeo,
    ],
  },
  fotograf: {
    headline: "📘 Weiterführende Guides für Fotografen",
    subline: "Mehr Buchungen und Anfragen mit starker lokaler Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.seoStrategyPlanner,
      commonGuides.localSeoChecklist,
      commonGuides.napKonsistenz,
    ],
  },
  elektrotechnik: {
    headline: "📘 Weiterführende Guides für Elektrotechnik-Betriebe",
    subline: "Mehr Aufträge durch professionelle lokale Sichtbarkeit:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.mapsAudit,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.napKonsistenz,
    ],
  },
  baeckerei: {
    headline: "📘 Weiterführende Guides für Bäckereien",
    subline: "Mehr Stammkunden und Laufkundschaft mit Local SEO:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.mapsAudit,
      commonGuides.napKonsistenz,
      commonGuides.localSeoChecklist,
      commonGuides.rankingTracker,
    ],
  },
  sanitaer: {
    headline: "📘 Weiterführende Guides für Sanitär & Heizungsbetriebe",
    subline: "Mehr Notfall- und Planaufträge mit starker Google-Präsenz:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.mapsAudit,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.monatlicheWartung,
      commonGuides.napKonsistenz,
    ],
  },
  ferienwohnungen: {
    headline: "📘 Weiterführende Guides für Ferienwohnungen",
    subline: "Mehr Direktbuchungen durch gezielte lokale Sichtbarkeit:",
    upgrades: [
      commonGuides.gbpOptimieren,
      commonGuides.bewertungenStrategie,
      commonGuides.keywordRecherche,
      commonGuides.technischesSeo,
      commonGuides.seoStrategyPlanner,
      commonGuides.localSeoChecklist,
    ],
  },
};
