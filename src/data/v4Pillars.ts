/**
 * Page copy for the seven step pages (/approach/<step>).
 *
 * Rules (Project Bible V4, Hard Rule 06 "Truth first"):
 * - No results, rankings, client names or figures. Steps describe what happens and what it produces.
 * - `caseNotes` may only say what the case's own summary and scope in `v4Cases.ts` already state.
 *   A case renders only when it is published there, so switching a case on in one place is enough.
 *   Unpublished cases (KLOVERS, Kempinski) are deliberately not mapped here yet.
 * - Offers come from `v4Offers.ts`; nothing is priced here.
 * - Copy rules: plain words, concrete nouns, no em dashes, no "unlock / elevate / seamless" language.
 */

import { publishedCases } from "./v4Cases";
import type { WorkCase } from "./v4Cases";
import { OFFERS } from "./v4Offers";
import type { Offer } from "./v4Offers";
import type { PillarId } from "./v4PillarIndex";

export type PillarPart = { name: string; text: string };
export type PillarFaq = { q: string; a: string };
export type PillarLink = { to: string; label: string };
export type PillarCaseNote = { caseId: string; note: string };

export type PillarCopy = {
  /** <title>, about 60 characters. */
  seoTitle: string;
  /** Meta description, at most about 155 characters. */
  seoDescription: string;
  h1: string;
  lead: string;
  /** One sentence shown under "Where this step sits". */
  place: string;
  parts: readonly PillarPart[];
  produces: readonly string[];
  signs: readonly string[];
  /** Ids from `v4Offers.ts` that start or contain this step. */
  offerIds: readonly string[];
  caseNotes: readonly PillarCaseNote[];
  faq: readonly PillarFaq[];
  related: readonly PillarLink[];
};

export const PILLAR_COPY: Record<PillarId, PillarCopy> = {
  diagnose: {
    seoTitle: "Diagnose: Market, Audience and Data Audit | Local Dominator",
    seoDescription:
      "Step 1 of 7: a written diagnosis of your market, audience, competitors and tracking data, so later spending rests on facts instead of assumptions.",
    h1: "Diagnose the business before you fix it.",
    lead:
      "Most projects start with a solution. This step starts with the facts: who buys, who else competes for them, and what your own numbers already show.",
    place: "First step. Everything after it uses what it finds.",
    parts: [
      {
        name: "Market",
        text: "The size and shape of the demand you can reach: which searches, which segments, which seasons. We use public search data and your own booking or sales records.",
      },
      {
        name: "Audience",
        text: "Who books or buys, why they chose you, and where they drop out. The sources are your analytics, your reviews and conversations with customers, not personas invented in a workshop.",
      },
      {
        name: "Competition",
        text: "Who the customer compares you with, what they offer, at what price, and where their offer is weak. We look at what a customer sees: Google, maps and booking platforms.",
      },
      {
        name: "Data",
        text: "What is tracked, what is not, and whether the numbers can be trusted. Broken tracking gets fixed first, because every later decision relies on it.",
      },
    ],
    produces: [
      "A written summary of findings, ranked by effect and effort",
      "A list of what is measured today and what is missing",
      "A recommendation for the next step, including the option to stop here",
    ],
    signs: [
      "You spend on marketing but cannot say which part brings bookings or orders.",
      "Traffic looks fine, but few people enquire.",
      "You are about to rebuild the website and nobody has checked why the current one underperforms.",
    ],
    offerIds: ["conversion-sprint", "google-profile"],
    caseNotes: [],
    faq: [
      {
        q: "How long does a diagnosis take?",
        a: "The 72h Conversion Sprint audits one page in 72 hours. A wider diagnosis depends on how many channels and markets it covers. We agree scope and price in writing before we start.",
      },
      {
        q: "Do we need this if we already know what to fix?",
        a: "If you have current data and a clear priority, skip it. We will tell you on the call if that is the case.",
      },
    ],
    related: [
      { to: "/ai-visibility-audit", label: "AI Visibility Audit" },
      { to: "/blog", label: "Insights on local search" },
    ],
  },

  position: {
    seoTitle: "Position: Brand, Offer and Differentiation | Local Dominator",
    seoDescription:
      "Step 2 of 7: define who the offer is for, what it promises and why a customer should pick it. Brand, offer structure and claims you can back up.",
    h1: "Position the business so the right customers choose it.",
    lead:
      "Positioning decides what you say no to. It fixes who the offer is for, what it promises, and why a customer should pick it over the next option.",
    place: "Second step. It turns the diagnosis into a decision about audience, promise and proof.",
    parts: [
      {
        name: "Brand",
        text: "The name, the claim and the tone, derived from the diagnosis rather than from taste. The brand has to fit the offer and the customer, not only the founder.",
      },
      {
        name: "Offer",
        text: "What is sold, in which packages and at what price, written so a customer can compare it in under a minute. For a hotel, this includes the direct-booking offer next to the platform rate.",
      },
      {
        name: "Differentiation",
        text: "The one or two reasons you are different that a customer can check for themselves. A claim that cannot be checked stays out.",
      },
    ],
    produces: [
      "A one-page positioning statement: audience, promise, proof and tone",
      "The offer structure and the logic behind the prices",
      "A list of claims you may use, with the evidence for each",
    ],
    signs: [
      "Customers compare you on price only.",
      "Team members describe the business in different ways.",
      "The website text could belong to any of your competitors.",
    ],
    offerIds: [],
    caseNotes: [
      { caseId: "dadication", note: "Brand strategy and product positioning for a new US e-commerce brand." },
      { caseId: "do-good", note: "Storytelling structure for an international non-profit initiative." },
      { caseId: "aurelian-grand", note: "Brand concept and positioning for a fictional luxury hotel." },
    ],
    faq: [
      {
        q: "Is positioning the same as a logo?",
        a: "No. A logo is one expression of it. Positioning is the decision about audience, promise and proof that the logo, the text and the website then follow.",
      },
      {
        q: "Can we position without a diagnosis first?",
        a: "You can, but it then rests on assumptions. If you already have current data on customers and competitors, we use that instead of repeating the work.",
      },
    ],
    related: [{ to: "/services", label: "Services and prices" }],
  },

  create: {
    seoTitle: "Create: Design, Content and Experience | Local Dominator",
    seoDescription:
      "Step 3 of 7: visual identity, copy and the customer journey that carry your positioning, designed mobile first and written in your customers' words.",
    h1: "Create the design, content and experience that carry the position.",
    lead:
      "Once the position is clear, it has to be visible and readable. This step produces the look, the words and the path a customer follows from first contact to decision.",
    place: "Third step. It gives the position a form that the build step can turn into a working product.",
    parts: [
      {
        name: "Design",
        text: "Visual identity and interface design that follow the position: type, colour, imagery and layout rules that your team can apply without us.",
      },
      {
        name: "Content",
        text: "Copy, product descriptions, page structure and media, written for the questions a customer has at each point of the decision. We write in the customer's words and keep claims verifiable.",
      },
      {
        name: "Experience",
        text: "How the pieces work in sequence: the path from first search to booking or checkout, designed for the phone first, including what happens on a slow connection.",
      },
    ],
    produces: [
      "Design basics: type, colour and components",
      "Written and structured content for the pages in scope",
      "Page and flow designs that are ready to build",
    ],
    signs: [
      "The design looks fine but does not say what you offer.",
      "Texts were written by several people and read like it.",
      "Mobile pages are a shrunk copy of the desktop pages.",
    ],
    offerIds: [],
    caseNotes: [
      { caseId: "dadication", note: "Brand direction, messaging, copy and content structure for the store." },
      { caseId: "do-good", note: "Storytelling and UX for donors, volunteers and partners." },
      { caseId: "aurelian-grand", note: "Premium hospitality UX for a fictional hotel brand." },
    ],
    faq: [
      {
        q: "Do you use AI to write the copy?",
        a: "AI helps with research, first drafts and consistency checks. A person edits every text before it goes live, and every claim is checked against evidence.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. If the brand holds up in the diagnosis, we build on it and change only what blocks the offer.",
      },
    ],
    related: [{ to: "/work", label: "Selected work" }],
  },

  build: {
    seoTitle: "Build: Websites, Tools and Automation | Local Dominator",
    seoDescription:
      "Step 4 of 7: fast mobile-first websites and stores, connected booking and CRM tools, and automations that remove manual work. Scope agreed in writing.",
    h1: "Build the website, tools and automation that customers and staff use.",
    lead:
      "This is where the design and the copy become something that works: a site or store on your own accounts, connected to the tools behind it, with tracking that records what matters.",
    place: "Fourth step. It turns the created material into a working product and sets up the measurement that the later steps use.",
    parts: [
      {
        name: "Website",
        text: "Fast, mobile-first sites and stores, such as Shopify for shops and custom React for content platforms. Structure for search and tracking is in place from day one.",
      },
      {
        name: "Tools",
        text: "Booking, forms, payment, CRM and reporting connected so data moves without copying. We choose tools that you own and can run without us.",
      },
      {
        name: "Automation",
        text: "Routine steps such as a form that creates a CRM contact, notifies the team and sends the first reply. Each workflow is written down and approved by you before it is built.",
      },
    ],
    produces: [
      "A working site or store on your domain and accounts",
      "Tracking that records the actions that matter: bookings, orders, enquiries",
      "A short written hand-over",
    ],
    signs: [
      "Enquiries arrive by email and get copied by hand.",
      "The site is slow on mobile.",
      "Nobody knows which form or button produced a booking.",
    ],
    offerIds: ["website-5-days", "ai-automation-starter"],
    caseNotes: [
      { caseId: "dadication", note: "Shopify store and UX / UI for a new US e-commerce brand." },
      {
        caseId: "explore-saudi",
        note: "Own publishing architecture with model routing, automated QA gates and deterministic release processes.",
      },
      { caseId: "do-good", note: "Website and digital infrastructure for an international non-profit initiative." },
      { caseId: "aurelian-grand", note: "Direct-booking logic and SEO architecture for a fictional hotel." },
    ],
    faq: [
      {
        q: "Which platform do you build on?",
        a: "It depends on the job: Shopify for stores, a custom React site for content platforms, and your existing CMS when it already works. The choice is part of the scope we confirm before starting.",
      },
      {
        q: "Who owns the site after hand-over?",
        a: "You do. Domain, hosting account and code are in your name at hand-over.",
      },
    ],
    related: [{ to: "/services", label: "Website in 5 Days and other offers" }],
  },

  launch: {
    seoTitle: "Launch: Campaigns, SEO, Social and PR | Local Dominator",
    seoDescription:
      "Step 5 of 7: a launch plan with campaigns, local and technical SEO, social and PR, with tracking in place so you can read what the launch did.",
    h1: "Launch with campaigns, SEO and PR that reach the right people.",
    lead:
      "A finished site does not bring visitors by itself. This step puts the business in front of the people who are looking for it, through a small set of channels that can be measured.",
    place: "Fifth step. It needs the tracking from the build step, so that launch results can be read.",
    parts: [
      {
        name: "Campaigns",
        text: "Paid and owned campaigns with one goal each, a budget cap and tracking in place before the first euro is spent.",
      },
      {
        name: "SEO",
        text: "Technical SEO, local SEO and Google Business Profile, plus structured data so that search engines and AI assistants can read who you are, where you are and what you offer.",
      },
      {
        name: "Social",
        text: "A few channels where your customers already are, with a posting plan that your team can realistically keep up.",
      },
      {
        name: "PR",
        text: "Mentions and links from places that customers and search engines trust: local press, industry sites and partner pages.",
      },
    ],
    produces: [
      "A launch plan with channels, budget and dates",
      "SEO and profile fixes, applied",
      "Tracking set up so the launch results can be read",
    ],
    signs: [
      "The site is live but hardly anyone visits.",
      "Your Google profile is incomplete or inconsistent.",
      "Campaigns run, but nobody can say what they returned.",
    ],
    offerIds: ["google-profile"],
    caseNotes: [
      { caseId: "dadication", note: "Launch system for a new e-commerce brand, from briefing to a market-ready store." },
      { caseId: "explore-saudi", note: "SEO intent checks built into the publishing flow of a travel platform." },
    ],
    faq: [
      {
        q: "How long until SEO shows results?",
        a: "Fixes to a Google profile can show within days. Content and link work usually takes months. We do not promise rankings. We report what changed so that you can measure it with your own numbers.",
      },
      {
        q: "Do you run paid campaigns?",
        a: "Campaign work is scoped per project. We do not start paid campaigns without a written budget cap and agreed tracking.",
      },
    ],
    related: [
      { to: "/ai-visibility-audit", label: "AI Visibility Audit" },
      { to: "/seo-lexikon", label: "SEO Lexicon A to Z" },
      { to: "/blog", label: "Insights on local search" },
    ],
  },

  grow: {
    seoTitle: "Grow: CRO, Retention, Data and AI | Local Dominator",
    seoDescription:
      "Step 6 of 7: fix the pages where people decide, bring past customers back and read the few numbers that drive decisions. Every change is documented.",
    h1: "Grow by fixing what happens after the visit.",
    lead:
      "Traffic is only useful if people book, buy or get in touch. This step works on the points where visitors decide, and on what happens after they do.",
    place: "Sixth step. It runs on the data that the earlier steps set up, and it repeats.",
    parts: [
      {
        name: "CRO",
        text: "Testing and fixing the pages where people decide: clarity of the offer, form length, page speed, trust signals, and the booking or checkout steps.",
      },
      {
        name: "Retention",
        text: "Email, CRM and follow-up so that past customers and guests come back, without inventing discounts.",
      },
      {
        name: "Data",
        text: "One reporting view with the few numbers that drive decisions, reviewed on a fixed rhythm.",
      },
      {
        name: "AI",
        text: "AI for analysis and routine work: sorting enquiries, summarising reviews, drafting replies that a person approves.",
      },
    ],
    produces: [
      "A ranked list of changes with expected effect and effort",
      "Changes live and documented",
      "A monthly or quarterly view of the numbers that matter",
    ],
    signs: [
      "Many visitors, few bookings or orders.",
      "Past customers never hear from you again.",
      "Reports contain many numbers and no decision.",
    ],
    offerIds: ["conversion-sprint"],
    caseNotes: [
      { caseId: "aurelian-grand", note: "Revenue journey and CRO thinking for a fictional hotel concept." },
      { caseId: "do-good", note: "Engagement journeys for donors, volunteers and partners." },
      { caseId: "explore-saudi", note: "AI-assisted content production with automated QA gates." },
    ],
    faq: [
      {
        q: "What do you change first?",
        a: "The step that loses the most people. That is usually a page close to the decision, such as booking or checkout, but we confirm it with your data first.",
      },
      {
        q: "Do you promise conversion gains?",
        a: "No. We document every change so that you can compare before and after with your own numbers.",
      },
    ],
    related: [
      { to: "/services", label: "72h Conversion Sprint" },
      { to: "/blog", label: "Insights on local search" },
    ],
  },

  scale: {
    seoTitle: "Scale: New Markets and New Revenue | Local Dominator",
    seoDescription:
      "Step 7 of 7: take what works into a new country, language or revenue line without starting over. Multilingual setup, RTL support and small pilots first.",
    h1: "Scale into new markets and new revenue without starting over.",
    lead:
      "When one market works, the next one should start from what you already have. This step decides where to go next and what can be reused.",
    place: "Last step. It only makes sense once the earlier steps produce repeatable results.",
    parts: [
      {
        name: "New markets",
        text: "Language versions, local search setup, and payment and legal basics for each additional country. Right-to-left languages such as Arabic need their own layout and review, which we include.",
      },
      {
        name: "New revenue",
        text: "Additional offers on the same base: packages, memberships, B2B lines, partnerships or events, tested small before they get a budget.",
      },
    ],
    produces: [
      "A market-by-market shortlist with effort and risk",
      "A reusable template for the next market",
      "A pilot plan with a clear stop rule",
    ],
    signs: [
      "The first market works, but the next one starts from zero.",
      "You receive international enquiries that your site cannot serve.",
      "Revenue depends on a single channel or a single offer.",
    ],
    offerIds: [],
    caseNotes: [
      { caseId: "explore-saudi", note: "Multilingual publishing with i18n and RTL controls." },
      {
        caseId: "do-good",
        note: "Digital foundation for new partnership, event and fundraising formats.",
      },
    ],
    faq: [
      {
        q: "When is a business ready to scale?",
        a: "When the first market shows repeatable results from known channels. If it does not, scaling copies the problem, and we will say so.",
      },
      {
        q: "Do you handle translation?",
        a: "We set up the multilingual structure and review quality. Every language we publish in gets a native-language review.",
      },
    ],
    related: [{ to: "/work", label: "Selected work" }],
  },
};

/** Published cases that touch a step, with what each did in that step. Unpublished cases never appear. */
export const pillarCases = (id: PillarId): readonly { case: WorkCase; note: string }[] =>
  PILLAR_COPY[id].caseNotes.flatMap(({ caseId, note }) => {
    const c = publishedCases().find((x) => x.id === caseId);
    return c ? [{ case: c, note }] : [];
  });

/** The offers that start or contain a step. */
export const pillarOffers = (id: PillarId): readonly Offer[] =>
  PILLAR_COPY[id].offerIds.flatMap((offerId) => OFFERS.filter((o) => o.id === offerId));
