import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { CHECK_REPLY_TIME } from "@/lib/check";
import type { FaqEntry } from "@/lib/seoFaq";

/**
 * Short FAQ blocks of the main pages (Home, Services, About, Work, Industries, Free check).
 *
 * Rules:
 * - Every answer is made only of text that is already published on the site (v4HowWeWork.ts,
 *   v4Check.ts, v4About.ts, v4Cases.ts, v4Industries.ts, v4Offers.ts and the page bodies). No new
 *   promise, figure or claim may enter here (Hard Rule 06 "Truth first").
 * - Plain strings, plus at most one trailing link. The same array renders the visible list and
 *   fills the FAQPage JSON-LD (see `faqEntries`), so the two always read the same.
 */
export type Faq = {
  q: string;
  a: string;
  /** Rendered after the answer text, as in "... starts. See the seven steps." */
  link?: { to: string; text: string };
};

/** The visible answer as one string: the JSON-LD text. */
export const faqText = (faq: Faq): string => (faq.link ? `${faq.a} ${faq.link.text}.` : faq.a);

export const faqEntries = (items: readonly Faq[]): FaqEntry[] => items.map((f) => ({ q: f.q, a: faqText(f) }));

/** Shared by Home and Services, so the two pages cannot drift apart. */
const AFTER_CHECK: Faq = {
  q: "What happens after the free check?",
  a: `You get up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}. If one of the four offers fits, we say which one and why. You then decide whether to fix the points yourself or have us do it at a fixed price.`,
};

const OWNERSHIP: Faq = {
  q: "Who owns the website and the Google profile?",
  a: "You do. The website and the Google profile are yours.",
};

export const SERVICES_FAQ: readonly Faq[] = [
  AFTER_CHECK,
  {
    q: "Are the prices final?",
    a: "Prices marked “from” are starting prices. In every case you get the exact scope and a fixed price in writing before any work starts. Nothing is billed that was not agreed.",
  },
  OWNERSHIP,
  {
    q: "Can I cancel?",
    a: "Ongoing care can be cancelled monthly. The four offers on this page are single jobs with a fixed scope and a fixed price, not subscriptions.",
  },
  {
    q: "Do you promise rankings or bookings?",
    a: "No. We do not promise positions or revenue. You get a written list of what we changed and why.",
  },
  {
    q: "What if I need more than one offer?",
    a: "Then it becomes a full growth project: strategy, brand, website and marketing from one team, in the steps your business needs. Scope and price are set in writing before work starts.",
    link: { to: PILLAR_BASE, text: "See the seven steps" },
  },
];

export const HOME_FAQ: readonly Faq[] = [
  {
    q: "What does LocalDominate do?",
    a: "LocalDominate plans, builds and markets your brand, your website and your Google presence as one project instead of four separate jobs. You can order the full project or start with one fixed-price offer.",
  },
  AFTER_CHECK,
  {
    q: "Who is responsible for my project?",
    a: "One person is responsible for your project from the first check to the hand-over. AI is used for research and routine work. A person decides and edits what goes live.",
  },
  { ...OWNERSHIP, a: "You do. The website and the Google profile are yours. Ongoing care can be cancelled monthly." },
];

export const ABOUT_FAQ: readonly Faq[] = [
  {
    q: "Who runs LocalDominate?",
    a: "Markus Wimböck runs LocalDominate: over seven years in hospitality and digital marketing, and one person responsible for your project from check to hand-over.",
  },
  {
    q: "Where does Markus Wimböck come from professionally?",
    a: "From hotels: hotel management school, resort operations, then the digital and e-commerce side of a grand hotel in St. Moritz.",
  },
  {
    q: "Are the hotels in the career timeline clients of LocalDominate?",
    a: "No. They are places where Markus Wimböck worked or trained, not clients of LocalDominate.",
  },
  {
    q: "How can I get in touch?",
    a: `Send the link to your Google profile or website. You get up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}. No obligation. You can also write to info@localdominate.org. Meetings are by video, in German or English.`,
  },
];

export const WORK_FAQ: readonly Faq[] = [
  {
    q: "How are the projects labelled?",
    a: "Each project is labelled for what it is: client work, a platform build, a role or a concept. You see the task, the scope and the status.",
  },
  {
    q: "Why does the page show no results or figures?",
    a: "We publish results only when we can document them. Until then each project shows its task, its scope, what was built and where it stands today, and the steps of our system it covered.",
  },
  {
    q: "Is every project client work?",
    a: "No. Not every project here is client work, and the label says which is which. Aurelian Grand, for example, is a fictional luxury hotel brand, built as a digital proof of concept. Not a client.",
  },
  {
    q: "How do I start a project like these?",
    a: `Send the link to your website or Google profile. You get up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}. No obligation.`,
  },
];

export const INDUSTRIES_FAQ: readonly Faq[] = [
  {
    q: "Which kinds of business does LocalDominate work for?",
    a: "Hotels and guesthouses (owner-run, 10 to 60 rooms), holiday rentals (hosts with several properties and small property managers), trades (plumbing and heating, electrical, roofing, solar) and premium local services (practices, law and tax firms, several locations).",
  },
  {
    q: "Which offer is a sensible start for a hotel?",
    a: "For a hotel without a website that can take a booking: Website in 5 Days, with scope and content agreed on a call before the week starts. For a booking page that gets visits but too few bookings: the 72h Conversion / Booking Sprint, where one page is audited and five fixes go live once you approve them.",
  },
  {
    q: "Can a single holiday home have a Google Business Profile?",
    a: "Google's guidelines exclude single holiday homes from Business Profiles. A rental business with an office can qualify. We check this before any profile work.",
  },
  {
    q: "Do you make outcome claims for medical, legal and tax practices?",
    a: "No. Health, legal and tax professions have their own advertising rules. We leave out any claim about outcomes and ask you to clear the wording with your chamber or adviser where needed.",
  },
];

export const START_FAQ: readonly Faq[] = [
  {
    q: "What do I get from the free check?",
    a: "We look at your Google Business Profile or your website the way a new customer would. You get up to three concrete points to fix first, each with a short explanation.",
  },
  {
    q: "What do I need to send?",
    a: "Name, email, the link and the type of business. That is all we need.",
  },
  {
    q: "Who looks at it, and how fast do I get an answer?",
    a: `A person looks at the profile or page. No automated score, no generic report. You get the points by email within ${CHECK_REPLY_TIME}.`,
  },
  {
    q: "Does the free check cost anything?",
    a: "You owe us nothing for it. No obligation. If one of our fixed-price offers fits, we say which one and why. If none fits, we say that too.",
  },
];
