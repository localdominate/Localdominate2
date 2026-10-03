/**
 * Maps pillar page slugs to relevant checklists, templates, and tools.
 * Used by PillarChecklistLinks component to auto-render download CTAs.
 */

export interface ChecklistLink {
  slug: string;
  title: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
  type: "checklist" | "template" | "tracker" | "planner" | "audit";
  icon: "checklist" | "template" | "tracker" | "planner" | "audit";
}

export const pillarChecklistLinks: Record<string, ChecklistLink[]> = {
  // Ultimate Guide Local SEO
  "ultimate-guide-local-seo": [
    {
      slug: "local-seo-checkliste-komplett",
      title: { de: "Local SEO Checkliste (80+ Punkte)", en: "Local SEO Checklist (80+ Points)" },
      description: { de: "Vollständige Checkliste aller Local SEO Maßnahmen", en: "Complete checklist of all Local SEO measures" },
      type: "checklist",
      icon: "checklist",
    },
    {
      slug: "google-maps-audit-template",
      title: { de: "Google Maps Audit Template", en: "Google Maps Audit Template" },
      description: { de: "75+ Punkte für dein Google Maps Profil", en: "75+ points for your Google Maps profile" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "local-seo-strategy-planner",
      title: { de: "Local SEO Strategy Planner", en: "Local SEO Strategy Planner" },
      description: { de: "7-Phasen Strategieplan mit Budget-Vergleich", en: "7-phase strategy plan with budget comparison" },
      type: "planner",
      icon: "planner",
    },
    {
      slug: "local-seo-roadmap-90-tage",
      title: { de: "90-Tage Local SEO Roadmap", en: "90-Day Local SEO Roadmap" },
      description: { de: "Gantt-Zeitplan für die ersten 90 Tage", en: "Gantt timeline for the first 90 days" },
      type: "template",
      icon: "template",
    },
  ],

  // Technisches Local SEO Guide
  "technisches-local-seo-guide": [
    {
      slug: "local-seo-audit-checkliste",
      title: { de: "Local SEO Audit Checkliste", en: "Local SEO Audit Checklist" },
      description: { de: "Technische Prüfpunkte für Website & GBP", en: "Technical checkpoints for website & GBP" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "schema-strategie-dokument",
      title: { de: "Schema Markup Strategie", en: "Schema Markup Strategy" },
      description: { de: "JSON-LD Templates für alle Schema-Typen", en: "JSON-LD templates for all schema types" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-monthly-checklist",
      title: { de: "Monatliche SEO Wartung", en: "Monthly SEO Maintenance" },
      description: { de: "45+ Aufgaben für die laufende Pflege", en: "45+ tasks for ongoing maintenance" },
      type: "checklist",
      icon: "checklist",
    },
  ],

  // Local SEO Strategie für kleine Unternehmen
  "local-seo-strategie-kleine-unternehmen": [
    {
      slug: "local-seo-checkliste-komplett",
      title: { de: "Local SEO Checkliste (80+ Punkte)", en: "Local SEO Checklist (80+ Points)" },
      description: { de: "Vollständige Checkliste aller Local SEO Maßnahmen", en: "Complete checklist of all Local SEO measures" },
      type: "checklist",
      icon: "checklist",
    },
    {
      slug: "local-seo-strategy-planner",
      title: { de: "Local SEO Strategy Planner", en: "Local SEO Strategy Planner" },
      description: { de: "7-Phasen Strategieplan mit Budget-Vergleich", en: "7-phase strategy plan with budget comparison" },
      type: "planner",
      icon: "planner",
    },
    {
      slug: "local-seo-roadmap-90-tage",
      title: { de: "90-Tage Local SEO Roadmap", en: "90-Day Local SEO Roadmap" },
      description: { de: "Gantt-Zeitplan für die ersten 90 Tage", en: "Gantt timeline for the first 90 days" },
      type: "template",
      icon: "template",
    },
  ],

  // Local SEO Ranking-Faktoren erklärt
  "local-seo-ranking-faktoren-erklaert": [
    {
      slug: "google-maps-audit-template",
      title: { de: "Google Maps Audit Template", en: "Google Maps Audit Template" },
      description: { de: "75+ Punkte für dein Google Maps Profil", en: "75+ points for your Google Maps profile" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "google-maps-ranking-tracker",
      title: { de: "Google Maps Ranking Tracker", en: "Google Maps Ranking Tracker" },
      description: { de: "Ranking-Entwicklung systematisch verfolgen", en: "Systematically track ranking development" },
      type: "tracker",
      icon: "tracker",
    },
    {
      slug: "local-keyword-research-template",
      title: { de: "Local Keyword Research Template", en: "Local Keyword Research Template" },
      description: { de: "5-Schritt Workflow für lokale Keywords", en: "5-step workflow for local keywords" },
      type: "template",
      icon: "template",
    },
  ],

  // AI-Suche für lokale Unternehmen
  "ai-suche-lokale-unternehmen": [
    {
      slug: "schema-strategie-dokument",
      title: { de: "Schema Markup Strategie", en: "Schema Markup Strategy" },
      description: { de: "JSON-LD Templates für AI-Readiness", en: "JSON-LD templates for AI readiness" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-checkliste-komplett",
      title: { de: "Local SEO Checkliste (80+ Punkte)", en: "Local SEO Checklist (80+ Points)" },
      description: { de: "Inkl. AI-Optimierungspunkte", en: "Incl. AI optimization points" },
      type: "checklist",
      icon: "checklist",
    },
  ],

  // Local Link Building Blueprint
  "local-link-building-blueprint": [
    {
      slug: "citation-tracking-template",
      title: { de: "Citation Tracking Template", en: "Citation Tracking Template" },
      description: { de: "DACH Verzeichnisse im Überblick", en: "DACH directories overview" },
      type: "tracker",
      icon: "tracker",
    },
    {
      slug: "local-seo-monthly-checklist",
      title: { de: "Monatliche SEO Wartung", en: "Monthly SEO Maintenance" },
      description: { de: "Inkl. Link-Building Aufgaben", en: "Incl. link building tasks" },
      type: "checklist",
      icon: "checklist",
    },
  ],

  // Local SEO Checkliste komplett (self-referencing tools)
  "local-seo-checkliste-komplett": [
    {
      slug: "google-maps-audit-template",
      title: { de: "Google Maps Audit Template", en: "Google Maps Audit Template" },
      description: { de: "75+ Punkte für dein Google Maps Profil", en: "75+ points for your Google Maps profile" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "local-seo-monthly-checklist",
      title: { de: "Monatliche SEO Wartung", en: "Monthly SEO Maintenance" },
      description: { de: "45+ Aufgaben für die laufende Pflege", en: "45+ tasks for ongoing maintenance" },
      type: "checklist",
      icon: "checklist",
    },
    {
      slug: "local-seo-roadmap-90-tage",
      title: { de: "90-Tage Local SEO Roadmap", en: "90-Day Local SEO Roadmap" },
      description: { de: "Gantt-Zeitplan für die ersten 90 Tage", en: "Gantt timeline for the first 90 days" },
      type: "template",
      icon: "template",
    },
  ],

  // Google My Business optimieren
  "google-my-business-optimieren": [
    {
      slug: "google-maps-audit-template",
      title: { de: "Google Maps Audit Template", en: "Google Maps Audit Template" },
      description: { de: "75+ Punkte für dein Google Maps Profil", en: "75+ points for your Google Maps profile" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "local-seo-checkliste-komplett",
      title: { de: "Local SEO Checkliste (80+ Punkte)", en: "Local SEO Checklist (80+ Points)" },
      description: { de: "Vollständige Checkliste aller Maßnahmen", en: "Complete checklist of all measures" },
      type: "checklist",
      icon: "checklist",
    },
  ],

  // Google Maps Ranking verbessern
  "google-maps-ranking-verbessern": [
    {
      slug: "google-maps-audit-template",
      title: { de: "Google Maps Audit Template", en: "Google Maps Audit Template" },
      description: { de: "75+ Punkte für dein Profil", en: "75+ points for your profile" },
      type: "audit",
      icon: "audit",
    },
    {
      slug: "google-maps-ranking-tracker",
      title: { de: "Google Maps Ranking Tracker", en: "Google Maps Ranking Tracker" },
      description: { de: "Rankings systematisch verfolgen", en: "Systematically track rankings" },
      type: "tracker",
      icon: "tracker",
    },
    {
      slug: "local-keyword-research-template",
      title: { de: "Local Keyword Research Template", en: "Local Keyword Research Template" },
      description: { de: "Die richtigen Keywords finden", en: "Find the right keywords" },
      type: "template",
      icon: "template",
    },
  ],

  // Local Citations 2025
  "local-citations-2025": [
    {
      slug: "citation-tracking-template",
      title: { de: "Citation Tracking Template", en: "Citation Tracking Template" },
      description: { de: "DACH Verzeichnisse im Überblick", en: "DACH directories overview" },
      type: "tracker",
      icon: "tracker",
    },
    {
      slug: "local-seo-audit-checkliste",
      title: { de: "Local SEO Audit Checkliste", en: "Local SEO Audit Checklist" },
      description: { de: "NAP-Konsistenz prüfen", en: "Check NAP consistency" },
      type: "audit",
      icon: "audit",
    },
  ],

  // NAP Konsistenz
  "nap-konsistenz": [
    {
      slug: "citation-tracking-template",
      title: { de: "Citation Tracking Template", en: "Citation Tracking Template" },
      description: { de: "Alle Einträge im Überblick", en: "All listings at a glance" },
      type: "tracker",
      icon: "tracker",
    },
    {
      slug: "local-seo-audit-checkliste",
      title: { de: "Local SEO Audit Checkliste", en: "Local SEO Audit Checklist" },
      description: { de: "NAP systematisch prüfen", en: "Systematically check NAP" },
      type: "audit",
      icon: "audit",
    },
  ],

  // Schema Markup Local SEO
  "schema-markup-local-seo": [
    {
      slug: "schema-strategie-dokument",
      title: { de: "Schema Markup Strategie", en: "Schema Markup Strategy" },
      description: { de: "JSON-LD Templates für alle Typen", en: "JSON-LD templates for all types" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-audit-checkliste",
      title: { de: "Local SEO Audit Checkliste", en: "Local SEO Audit Checklist" },
      description: { de: "Schema-Implementierung prüfen", en: "Check schema implementation" },
      type: "audit",
      icon: "audit",
    },
  ],

  // Google Bewertungen
  "google-bewertungen": [
    {
      slug: "bewertungs-antworten-vorlagen",
      title: { de: "Bewertungs-Antworten Vorlagen", en: "Review Response Templates" },
      description: { de: "Copy-ready Antworten für alle Situationen", en: "Copy-ready responses for all situations" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-monthly-checklist",
      title: { de: "Monatliche SEO Wartung", en: "Monthly SEO Maintenance" },
      description: { de: "Inkl. Bewertungs-Management", en: "Incl. review management" },
      type: "checklist",
      icon: "checklist",
    },
  ],

  // Negative Google Bewertungen
  "negative-google-bewertungen": [
    {
      slug: "bewertungs-antworten-vorlagen",
      title: { de: "Bewertungs-Antworten Vorlagen", en: "Review Response Templates" },
      description: { de: "Professionell auf Kritik reagieren", en: "Respond professionally to criticism" },
      type: "template",
      icon: "template",
    },
  ],

  // Local SEO Keywords
  "local-seo-keywords": [
    {
      slug: "local-keyword-research-template",
      title: { de: "Local Keyword Research Template", en: "Local Keyword Research Template" },
      description: { de: "5-Schritt Workflow für lokale Keywords", en: "5-step workflow for local keywords" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-strategy-planner",
      title: { de: "Local SEO Strategy Planner", en: "Local SEO Strategy Planner" },
      description: { de: "Keywords in Strategie integrieren", en: "Integrate keywords into strategy" },
      type: "planner",
      icon: "planner",
    },
  ],

  // Lokale Suchmaschinenoptimierung 2026
  "lokale-suchmaschinenoptimierung-2026": [
    {
      slug: "local-seo-checkliste-komplett",
      title: { de: "Local SEO Checkliste (80+ Punkte)", en: "Local SEO Checklist (80+ Points)" },
      description: { de: "Alle 2026 Best Practices", en: "All 2026 best practices" },
      type: "checklist",
      icon: "checklist",
    },
    {
      slug: "local-seo-roadmap-90-tage",
      title: { de: "90-Tage Local SEO Roadmap", en: "90-Day Local SEO Roadmap" },
      description: { de: "Zeitplan für 2026", en: "Timeline for 2026" },
      type: "template",
      icon: "template",
    },
    {
      slug: "local-seo-strategy-planner",
      title: { de: "Local SEO Strategy Planner", en: "Local SEO Strategy Planner" },
      description: { de: "Strategieplan mit Budget", en: "Strategy plan with budget" },
      type: "planner",
      icon: "planner",
    },
  ],
};

export const getChecklistsForArticle = (slug: string): ChecklistLink[] => {
  return pillarChecklistLinks[slug] || [];
};
