/**
 * The seven steps of the LocalDominate system, as shown in the showreel (Hero-Showreel plan, §3):
 * 01 Diagnose, 02 Position, 03 Create, 04 Build, 05 Launch, 06 Grow, 07 Scale.
 *
 * This file is the small index (name, slug, short line, sub-topics). The long page copy lives in
 * `v4Pillars.ts`, which is only loaded by the pages that need it. URLs are built from `slug`
 * and `PILLAR_BASE`, so the URL structure can be changed in this one place.
 */

export const PILLAR_BASE = "/approach";

export type PillarId = "diagnose" | "position" | "create" | "build" | "launch" | "grow" | "scale";

export type PillarIndexEntry = {
  id: PillarId;
  /** "01" … "07", as in the showreel. */
  n: string;
  name: string;
  /** One plain sentence: the question this step answers. */
  question: string;
  /** The sub-topics named in the showreel for this step. */
  parts: readonly string[];
};

export const PILLAR_INDEX: readonly PillarIndexEntry[] = [
  {
    id: "diagnose",
    n: "01",
    name: "Diagnose",
    question: "Where does the business really stand?",
    parts: ["Market", "Audience", "Competition", "Data"],
  },
  {
    id: "position",
    n: "02",
    name: "Position",
    question: "Why should this business be chosen?",
    parts: ["Brand", "Offer", "Differentiation"],
  },
  {
    id: "create",
    n: "03",
    name: "Create",
    question: "What does the business look and sound like?",
    parts: ["Design", "Content", "Experience"],
  },
  {
    id: "build",
    n: "04",
    name: "Build",
    question: "What does the customer actually use?",
    parts: ["Website", "Tools", "Automation"],
  },
  {
    id: "launch",
    n: "05",
    name: "Launch",
    question: "How do the right people find it?",
    parts: ["Campaigns", "SEO", "Social", "PR"],
  },
  {
    id: "grow",
    n: "06",
    name: "Grow",
    question: "What turns visits into customers, and customers into repeat business?",
    parts: ["CRO", "Retention", "Data", "AI"],
  },
  {
    id: "scale",
    n: "07",
    name: "Scale",
    question: "What can be repeated in a new market or a new revenue line?",
    parts: ["New markets", "New revenue"],
  },
] as const;

export const pillarPath = (id: PillarId): string => `${PILLAR_BASE}/${id}`;

export const pillarById = (id: string): PillarIndexEntry | undefined =>
  PILLAR_INDEX.find((p) => p.id === id);
