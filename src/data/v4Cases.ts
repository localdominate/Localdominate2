/**
 * V4 cases — single source of truth for the /work page and the home-page teaser.
 *
 * Rules (Project Bible V4, Hard Rule 06 "Truth first"):
 * - A case renders only when `published` is true. `publishBasis` records why naming it is allowed
 *   (written consent, own platform, own role, own concept). Unpublished cases stay in this file so
 *   they can be switched on once the owner has confirmed.
 * - A metric renders only when `verified` is true AND `source` names the evidence. All metrics
 *   below are unverified, so none is shown. Figures come from the owner's portfolio page and are
 *   kept here only so they can be verified later.
 * - Describe scope and status, never promise or imply results.
 */

export type CaseKind = "Client" | "Consulting" | "Platform build" | "Role" | "Concept";

export type CaseStatus = "Pre-launch" | "Live" | "Completed" | "Concept";

export type CaseMetric = {
  value: string;
  label: string;
  /** Where the evidence lives. Empty until the owner supplies it. */
  source: string;
  verified: boolean;
};

export type WorkCase = {
  id: string;
  name: string;
  title: string;
  kind: CaseKind;
  status: CaseStatus;
  period: string;
  summary: string;
  scope: readonly string[];
  /** Public URL of the live project, if there is one and it may be linked. */
  url?: string;
  metric?: CaseMetric;
  /** Only set when the case has a video on the site. */
  hasVideo?: boolean;
  published: boolean;
  /** Why naming this project on the site is allowed. */
  publishBasis: string;
};

export const CASES: readonly WorkCase[] = [
  {
    id: "dadication",
    name: "Dadication",
    title: "US e-commerce brand launch",
    kind: "Client",
    status: "Pre-launch",
    period: "2026",
    summary:
      "End-to-end build of a new US e-commerce brand: positioning, brand direction, messaging, Shopify store, UX, content structure and launch system, from the first briefing to a market-ready store.",
    scope: ["Brand strategy", "Shopify", "UX / UI", "Copy", "Product positioning", "Content", "Launch"],
    metric: {
      value: "1 sprint",
      label: "from briefing to finished store",
      source: "",
      verified: false,
    },
    hasVideo: true,
    published: true,
    publishBasis: "Owner confirmed Dadication's consent on 2026-09-30; screenshot to be filed in the Beleg-Checkliste.",
  },
  {
    id: "explore-saudi",
    name: "Explore Saudi",
    title: "AI-native travel platform",
    kind: "Platform build",
    status: "Live",
    period: "Since 2025",
    summary:
      "A scalable travel platform with AI-assisted content production and its own publishing architecture: model routing, automated QA gates, SEO intent checks, i18n and RTL controls and deterministic release processes.",
    scope: ["AI architecture", "Content engine", "SEO", "QA automation", "RTL / i18n", "Publishing system"],
    url: "https://explore-saudi.com",
    metric: {
      value: "~800k",
      label: "impressions in 2026",
      source: "",
      verified: false,
    },
    published: true,
    publishBasis: "Platform built and run by the owner's own team (to be confirmed by the owner).",
  },
  {
    id: "do-good",
    name: "DO GOOD International",
    title: "Digital platform and growth infrastructure",
    kind: "Role",
    status: "Live",
    period: "Since 12/2025",
    summary:
      "Website and digital infrastructure for an international non-profit initiative: storytelling structure, engagement journeys for donors, volunteers and partners, and the foundation for new partnership, event and fundraising formats. Role: Director Web & IT.",
    scope: ["Web strategy", "UX", "Storytelling", "Digital infrastructure", "Partnerships", "Conversion journeys"],
    url: "https://dogood.world",
    published: true,
    publishBasis: "Owner's own role as Director Web & IT.",
  },
  {
    id: "aurelian-grand",
    name: "Aurelian Grand",
    title: "Luxury hospitality digital showcase",
    kind: "Concept",
    status: "Concept",
    period: "2025",
    summary:
      "A fictional luxury hotel brand, built as a digital proof of concept: positioning, information architecture, premium UX, direct-booking logic and revenue journey. It shows what a hotel website built for direct booking looks like. Not a client.",
    scope: ["Brand concept", "Hospitality UX", "Booking journey", "CRO", "SEO architecture"],
    url: "https://aureliangrand.com",
    published: true,
    publishBasis: "Owner's own fictional concept; labelled as a concept on the page.",
  },
  {
    id: "klovers",
    name: "KLOVERS",
    title: "AI-native Korean learning platform",
    kind: "Consulting",
    status: "Live",
    period: "2026",
    summary:
      "Strategic consulting for a digital language-learning platform: positioning, UX, conversion structure, curriculum logic from Hangeul with a TOPIK-oriented learning path, character design, a gamified learning world and a multilingual architecture including English and Arabic.",
    scope: ["Product strategy", "UX / UI", "Brand", "Gamification", "Multilingual architecture"],
    url: "https://kloversegy.com",
    published: false,
    publishBasis: "Client consent to be confirmed by the owner before publishing.",
  },
  {
    id: "kempinski",
    name: "Grand Hotel des Bains Kempinski",
    title: "Digital commerce and growth, St. Moritz",
    kind: "Role",
    status: "Completed",
    period: "2023–2025",
    summary:
      "Responsibility for central parts of the digital customer journey of an international five-star hotel: website and CMS, analytics, paid media, CRO, CRM and campaigns across markets and segments.",
    scope: ["Digital strategy", "E-commerce", "Paid media", "Analytics", "CRO", "CRM"],
    metric: {
      value: "2×",
      label: "online revenue, two years in a row",
      source: "",
      verified: false,
    },
    published: false,
    publishBasis: "Former employer; naming and any figures need the owner's confirmation and evidence.",
  },
] as const;

export const publishedCases = (): readonly WorkCase[] => CASES.filter((c) => c.published);

/** The metric of a case, only when it is verified and has a named source. */
export const verifiedMetric = (c: WorkCase): CaseMetric | undefined =>
  c.metric && c.metric.verified && c.metric.source.trim().length > 0 ? c.metric : undefined;

/** "Kind · Status · Period", without repeating the kind when it equals the status (Concept). */
export const caseLabel = (c: WorkCase, withPeriod = true): string =>
  [c.kind, c.kind === c.status ? undefined : c.status, withPeriod ? c.period : undefined]
    .filter(Boolean)
    .join(" · ");
