import { CHECK_FORM_EN } from "@/data/v4Check";
import type { CheckFormTexts } from "@/data/v4Check";
import { CHECK_REPLY_TIME } from "@/lib/check";
import { SEO_DATE_MODIFIED } from "@/lib/seo-dates";

/**
 * Everything the landing page /creators says: prices, copy, FAQ, form texts and JSON-LD.
 *
 * Prices: owner's instruction of 2 October 2026. This file is their single source for the page
 * (hero, price cards, FAQ, form options, JSON-LD). They are not part of v4Offers.ts.
 *
 * Truth rule: no client names, results, ratings or testimonials. The demo creator Noa Valmère is
 * invented and is called fictional wherever she appears. The only third-party statements are one
 * short quote and three guides, each with its link and date, and the list prices of three tools as
 * checked on their own pages on 2 October 2026.
 */

const SITE = "https://localdominate.org";
export const CREATORS_PATH = "/creators";
export const CREATORS_URL = `${SITE}${CREATORS_PATH}`;

/* ------------------------------------------------------------------ prices */

export const CREATOR_PRICES = {
  careSetup: 0,
  careMonthly: 29,
  careMinimumMonths: 12,
  onePage: 300,
  studioFrom: 2000,
  studioTo: 3000,
} as const;

/** What the care plan costs in the first year. Always shown next to "0 € set-up". */
export const CARE_FIRST_YEAR =
  CREATOR_PRICES.careSetup + CREATOR_PRICES.careMonthly * CREATOR_PRICES.careMinimumMonths;

/** 2000 -> "2,000". Written by hand so the result never depends on the browser's locale data. */
const amount = (value: number): string => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
/** On screen the figure and the euro sign stay on one line (no-break space). */
const eur = (value: number): string => `${amount(value)}\u00A0€`;
/** Plain spaces for meta description, form options and email subject. */
const eurPlain = (value: number): string => `${amount(value)} €`;

const P = CREATOR_PRICES;

/* ------------------------------------------------------------------ anchors */

export const CREATOR_ANCHORS = {
  why: "why",
  demo: "demo",
  included: "included",
  compare: "compare",
  prices: "prices",
  more: "more",
  steps: "steps",
  rules: "rules",
  faq: "faq",
  form: "get-yours",
} as const;

export const CREATOR_ANCHOR_IDS: readonly string[] = Object.values(CREATOR_ANCHORS);

/* ------------------------------------------------------------------ SEO */

export const CREATORS_SEO = {
  title: "Creator Portfolio and Media Kit Pages",
  description: `We build your creator portfolio as a live page: numbers with date and source, audience, past work and a collab planner. ${eurPlain(P.onePage)} once or ${eurPlain(P.careMonthly)} per month.`,
} as const;

/* ------------------------------------------------------------------ demo */

export const DEMO = {
  // The Vite dev server has no directory index for files in public/, the static host has one.
  url: import.meta.env.DEV ? "/creator-demo/index.html" : "/creator-demo/",
  iframeTitle: "Demo portfolio of the fictional creator Noa Valmère",
  address: "noavalmere.example",
  phonePreview: { src: "/creator-demo/preview-phone.webp", width: 780, height: 1560 },
  desktopPreview: { src: "/creator-demo/preview-desktop.webp", small: "/creator-demo/preview-desktop-800.webp", width: 1600, height: 1000 },
  /** Phone still further down the page, where the portrait is in view. Used in the hero only. */
  phonePortrait: {
    src: "/creator-demo/preview-phone-portrait.webp",
    small: "/creator-demo/preview-phone-portrait-390.webp",
    width: 780,
    height: 1560,
  },
  phoneAlt: "First screen of the demo portfolio of the fictional creator Noa Valmère, phone view",
  desktopAlt: "First screen of the demo portfolio of the fictional creator Noa Valmère, desktop view",
  phonePortraitAlt: "Portrait section of the demo portfolio of the fictional creator Noa Valmère, phone view",
} as const;

/* ------------------------------------------------------------------ 1 hero */

export const HERO = {
  label: "For creators · Portfolio and media kit pages",
  titleLines: ["Your media kit as a live page.", "We build it for you."],
  text: "One link that shows a brand who follows you, what you reach, what you have done and how to book you. Nothing goes live until you approve it.",
  primary: "Get my page",
  secondary: "Try the live demo",
  caption: "Demo profile: Noa Valmère, a fictional creator. Photos AI-generated.",
  terms: ["Preview before anything is public", "No password, screenshots are enough", "Your domain, in your name"],
} as const;

/**
 * The three offers in one row. The figure is the typographic part, the note names the offer.
 * "0 € set-up" never stands without the monthly fee and the minimum term.
 */
export const HERO_PRICES: readonly { figure: string; note: string }[] = [
  { figure: `${eur(P.careSetup)} set-up`, note: `Care plan: then ${eur(P.careMonthly)} per month, ${P.careMinimumMonths} months minimum` },
  { figure: `${eur(P.onePage)} once`, note: "One-page" },
  { figure: `from ${eur(P.studioFrom)}`, note: "Studio system" },
];

/* ------------------------------------------------------------------ 2 what brands check */

export const WHY = {
  label: "What brands check",
  title: "A brand wants five answers. A plain link list gives none of them.",
  text: "Guides for creators from Hootsuite, Later and Shopify list the same things a media kit should show. Your page puts them on one screen, each with date and source.",
  answers: [
    {
      title: "Reach and engagement",
      body: "Followers, average reach and engagement rate per platform, each with the date it was checked.",
    },
    { title: "Audience", body: "Countries, age groups and gender from your insights, shown as a chart." },
    { title: "Past work", body: "Collaborations you are allowed to show, and what was delivered." },
    {
      title: "Formats and rates",
      body: "What can be booked: story set, reel, post, stay package. Rates shown or on request, your choice.",
    },
    {
      title: "A way to book",
      body: "A collab planner that turns a brand's idea into a brief, and a clear contact.",
    },
  ],
  quote: {
    text: "“Brands care most about your reach, engagement, and audience demographics.”",
    source: "Hootsuite, September 2025",
    url: "https://blog.hootsuite.com/influencer-media-kit/",
  },
  contrasts: [
    "A PDF answers these once. Then your numbers change.",
    "A plain link list sends fans to your links. It does not answer a brand.",
  ],
  sources: [
    { name: "Hootsuite", date: "Sep 2025", url: "https://blog.hootsuite.com/influencer-media-kit/" },
    { name: "Later", date: "Jun 2025", url: "https://later.com/blog/influencer-media-kit/" },
    { name: "Shopify", date: "2023", url: "https://www.shopify.com/blog/influencer-media-kit" },
  ],
} as const;

/* ------------------------------------------------------------------ 3 live demo */

export const DEMO_SECTION = {
  label: "Live demo",
  title: "Try the page before you ask for yours.",
  text: "This is a complete page for Noa Valmère, a creator we invented for this demo. Her numbers, brands and quotes are examples and her photos are AI-generated. Your page is built from the same parts with your own content. Which parts you need is settled in the written offer.",
  scale: "Noa is drawn as a large travel account. Your page uses your own numbers and rates, at 20K followers or at 2M. Rates can also read “on request”.",
  tryLabel: "Things to try",
  tries: [
    "Pull the ribbon in the first screen.",
    "Change the scarf colour. The whole page follows.",
    "Plan a collab: pick a brand type, a goal and formats, then copy the brief.",
    "Open the travel map and scrub through a hotel stay.",
  ],
  open: "Open the demo in a new tab",
  openShort: "Open the live demo",
  caption: "Fictional creator. Example data. Photos AI-generated.",
  action: "Get a page like this",
  devices: { phone: "Phone", desktop: "Desktop" },
  switchLabel: "Demo size",
} as const;

/* ------------------------------------------------------------------ 4 what is on the page */

export const INCLUDED = {
  label: "What you get",
  title: "What is on your page.",
  cards: [
    {
      icon: "numbers",
      title: "Numbers with sources",
      body: "Every figure shows where it comes from and when it was checked.",
    },
    {
      icon: "signature",
      title: "Your signature",
      body: "What makes your content recognisable becomes the look of the page: colours, type and one playful detail.",
    },
    { icon: "pillars", title: "Content pillars", body: "Three to four themes with your best frames." },
    { icon: "audience", title: "Audience charts", body: "Countries, age and gender from your insights." },
    {
      icon: "map",
      title: "Travel map and stays",
      body: "Where you have been and what a hotel gets from a stay.",
    },
    { icon: "brands", title: "For brands", body: "One tab per brand type with a typical project." },
    {
      icon: "planner",
      title: "Collab planner",
      body: "Brand type, goal and formats give a live estimate and a brief to copy.",
    },
    {
      icon: "contact",
      title: "How it works, FAQ and contact",
      body: "Process, usage rights, timing and one clear way to reach you.",
    },
  ],
  line: "Mobile first, fast, on your own domain. No app and no login for your visitors.",
} as const;

export type PageSectionIcon = (typeof INCLUDED.cards)[number]["icon"];

/* ------------------------------------------------------------------ 5 comparison */

type CompareColumn = { id: string; name: string; ours: boolean; values: readonly string[] };

export const COMPARE = {
  label: "What you use today",
  title: "Keep your link list. Add the page brands need.",
  rows: [
    "Made for",
    "Who builds it",
    "Audience, past work and booking on one screen",
    "Stays current",
    "Own domain",
  ] as readonly string[],
  columns: [
    {
      id: "link-in-bio",
      name: "Link-in-bio tool",
      ours: false,
      values: [
        "Fans who want your links",
        "You",
        "Not in a plain link list. Some tools add a media kit on paid plans.",
        "You update",
        "On paid plans",
      ],
    },
    {
      id: "pdf",
      name: "Media kit as PDF",
      ours: false,
      values: ["One pitch email", "You", "Yes, as a fixed file", "You export it again", "No"],
    },
    {
      id: "builder",
      name: "Website builder",
      ours: false,
      values: ["Anyone with time to build", "You", "If you build it", "You update", "Yes"],
    },
    {
      id: "localdominate",
      name: "Your page by LocalDominate",
      ours: true,
      values: [
        "Brands and hotels deciding on a collaboration",
        "We do",
        "Yes",
        "We update every month with the care plan",
        "Yes, registered in your name",
      ],
    },
  ] as readonly CompareColumn[],
  /** Checked on the providers' own pages on 2 October 2026. Keep the wording exactly. */
  note: {
    intro: "Listed prices on 2 October 2026:",
    beacons: {
      name: "Beacons",
      rest: " has a free plan and paid plans at $10, $30 and $100 per month, with the media kit on paid plans.",
      url: "https://beacons.ai/i/pricing",
    },
    squarespace: {
      name: "Squarespace",
      rest: " starts at $19 per month, billed annually.",
      url: "https://www.squarespace.com/pricing",
    },
    canva: {
      name: "Canva",
      rest: " offers free media kit templates.",
      url: "https://www.canva.com/media-kits/templates/",
    },
  },
} as const;

/* ------------------------------------------------------------------ 6 prices */

export type CreatorTierId = "care" | "one-page" | "studio";

export type CreatorTier = {
  id: CreatorTierId;
  name: string;
  /** Only the care plan carries a label. It names a fact (lowest first payment), not popularity. */
  badge?: string;
  /** The small word (SET-UP / ONCE / FROM) stands above the figure, so the three figures line up. */
  price: { overline: string; figure: string };
  /** Second price line of the care plan: the monthly fee. */
  then?: { prefix: string; figure: string; unit: string };
  terms: string;
  /** Printed in full weight right after the terms: the first-year total of the care plan. */
  total?: string;
  includes: readonly string[];
  ownership?: string;
  cta: string;
  /** The Studio system is scoped in a call, so its card also links to the 15-minute call. */
  callLink?: string;
};

export const PRICES_SECTION = {
  label: "Prices",
  title: "Three ways to get your page.",
  text: "Fixed prices, confirmed in writing before we start.",
  includesLabel: "Included",
  notes: [
    "Not included: the domain itself, about 10 to 15 € per year, registered in your name.",
    "Offer for creators who work with brands as a business.",
  ],
  fitLabel: "Which one fits?",
  fits: [
    { when: "You post for brands now and then:", pick: "One-page." },
    { when: "You pitch every month and do not want to update numbers yourself:", pick: "Care plan." },
    { when: "You run this as a business, with a manager or a team:", pick: "Studio system." },
  ],
} as const;

export const CREATOR_TIERS: readonly CreatorTier[] = [
  {
    id: "care",
    name: "Care plan",
    badge: "Lowest start",
    price: { overline: "set-up", figure: eur(P.careSetup) },
    then: { prefix: "then", figure: eur(P.careMonthly), unit: "per month" },
    terms: `${P.careMinimumMonths}-month minimum term from the day your page goes live, then cancel monthly.`,
    total: `First year: ${eur(CARE_FIRST_YEAR)}.`,
    includes: [
      "Your one-page portfolio, built for you",
      "Live on your own domain",
      "Numbers updated every month from the insights you send",
      "Two content changes per month: a new collaboration, new photos, new text",
      "Hosting and technical care included",
    ],
    ownership: "If you cancel after the first year, you get the page as files at no charge.",
    cta: "Start with the care plan",
  },
  {
    id: "one-page",
    name: "One-page",
    price: { overline: "once", figure: eur(P.onePage) },
    terms: "50 % on order, 50 % on acceptance. One revision round included.",
    includes: [
      "The same one-page portfolio, built for you",
      "Live on your own domain",
      "Handed over on acceptance: the page is yours",
      "Hosting set up in your own account, no monthly fee to us",
      "Updates later: add the care plan or book single changes",
    ],
    ownership: "No subscription. The page is yours from the day you accept it.",
    cta: "Order the one-page",
  },
  {
    id: "studio",
    name: "Studio system",
    price: { overline: "from", figure: eur(P.studioFrom) },
    terms: `Typical range ${amount(P.studioFrom)} to ${eur(P.studioTo)}. Scope and fixed price after a short call.`,
    includes: [
      "Multi-page site with a page per collaboration",
      "Brand inquiry inbox: every request in one list with its status",
      "Outreach system: brand list, pitch templates and follow-up reminders",
      "Media kit PDF generated from the same data as the page",
      "Monthly numbers and a short report",
    ],
    ownership: "Domain, hosting account and code are in your name at hand-over.",
    cta: "Plan the system",
    callLink: "Or book a 15-min call",
  },
];

/* ------------------------------------------------------------------ 7 how it works */

export const STEPS = {
  label: "How it works",
  title: "Four steps. You send, we build.",
  steps: [
    {
      title: "Send your handle",
      body: `Tell us your profile and which option you want. We reply by email within ${CHECK_REPLY_TIME} with a written offer and the list of what we need.`,
    },
    {
      title: "Send your material",
      body: "Insights screenshots of the last 30 days, 8 to 12 photos, a short bio and the collaborations you may show. No password, no account access.",
    },
    {
      title: "We build, you approve",
      body: "You get a preview link. One revision round is included. Nothing goes public without your approval.",
    },
    {
      title: "Live on your domain",
      body: "We connect your domain and hand over. With the care plan we update your numbers every month.",
    },
  ],
  timingLabel: "Timing",
  timing: "Live within five working days after your material is complete.",
} as const;

/* ------------------------------------------------------------------ 8 our rules */

export const RULES = {
  label: "Our rules",
  title: "Only numbers you can show.",
  rules: [
    "Every figure carries its source and date.",
    "No invented testimonials and no brand logos without permission.",
    "We never ask for your password. Screenshots of your insights are enough.",
    "Your domain is registered in your name. Your page stays yours.",
  ],
  closing: {
    linkText: "Later's media kit guide",
    url: "https://later.com/blog/influencer-media-kit/",
    rest: " advises creators to give brands an honest picture of their statistics. We build the page that way.",
  },
} as const;

/* ------------------------------------------------------------------ 9 FAQ */

/** Plain strings on purpose: the same array renders the FAQ and fills the FAQPage JSON-LD. */
export const CREATOR_FAQ: readonly { q: string; a: string }[] = [
  {
    q: "I already have a link in bio. Why another page?",
    a: "Keep it. A link list routes fans to your links. This page is for the brand manager who decides on a collaboration and wants audience, reach and past work on one screen. You can link the page from your link list.",
  },
  {
    q: "A media kit template is free. Why pay?",
    a: "A template is fine if you build and update it yourself. A PDF is out of date as soon as your numbers change, and it cannot take a request. We build the page for you and, with the care plan, keep it current.",
  },
  {
    q: "Why a monthly plan?",
    a: `Because your numbers change every month. The care plan costs ${eur(CARE_FIRST_YEAR)} in the first year, the one-page costs ${eur(P.onePage)} once. Take the plan if you want us to do the updates. If you update rarely, take the one-page.`,
  },
  {
    q: "Who owns the page and the domain?",
    a: "You do. The domain is registered in your name. The one-page is handed over on acceptance. With the care plan you get the page as files when you cancel after the first year.",
  },
  {
    q: "What happens if I stop the care plan?",
    a: `After the ${P.careMinimumMonths}-month minimum you can cancel monthly. You receive the page as files and can host it anywhere. Our updates stop.`,
  },
  {
    q: "Do you need access to my accounts?",
    a: "No. We work from your public profile and the screenshots you send.",
  },
  {
    q: "Which platforms can the page show?",
    a: "Instagram, TikTok and YouTube side by side, each with its own source. Other platforms on request.",
  },
  { q: "How long does it take?", a: "Five working days from the day your material is complete." },
  {
    q: "Is the demo creator real?",
    a: "No. Noa Valmère is invented for this demo, with example numbers and AI-generated photos. Your page shows only your own content and numbers you can prove.",
  },
];

export const FAQ_SECTION = { label: "Questions", title: "Short answers before you start." } as const;

/* ------------------------------------------------------------------ more services */

/**
 * Further services for creators (owner's instruction of 2 October 2026): social media management,
 * social media analytics and custom social media software, all priced on request. Descriptions
 * state scope only: no results, no client names.
 */
export const MORE = {
  label: "Beyond the page",
  title: "More for creators, priced on request.",
  text: "The page is the start. If you want the work behind it done as well, we offer three more services. Scope and price are agreed in writing after a short call.",
  priceLabel: "Price on request",
  services: [
    {
      id: "management",
      name: "Social media management",
      body: "We plan and publish with you: content calendar, captions, scheduling and replies, in your voice. Nothing goes out without your approval.",
      points: ["Monthly content calendar", "Scheduling and publishing", "Community replies by agreed rules"],
    },
    {
      id: "analytics",
      name: "Social media analytics",
      body: "A monthly report that shows what worked: reach, engagement and audience per platform, with source and date, ready to hand to a brand.",
      points: ["Numbers per platform and format", "What to repeat and what to drop", "The same figures feed your page"],
    },
    {
      id: "software",
      name: "Social media software, built for you",
      body: "Software adapted to how you work: for example a content planner, a brand inquiry inbox or a reporting dashboard for you and your team.",
      points: ["Scoped around your channels and workflow", "Built and tested with your real data", "Written hand-over, yours to keep"],
    },
  ],
  action: "Ask for a quote",
} as const;

/* ------------------------------------------------------------------ 10 form */

export const FORM_SECTION = {
  label: "Get your page",
  title: `Send your handle. We answer within ${CHECK_REPLY_TIME}.`,
  text: "You get a written offer and the short list of what we need from you. Sending this costs nothing and commits you to nothing.",
  callTitle: "Prefer to talk first?",
  /** The sentence after the name is taken from the verified copy of /about (PRINCIPLES in v4About.ts). */
  who: { lead: "Behind LocalDominate: Markus Wimböck.", link: "About Markus" },
} as const;

/**
 * The options of the request form. The buttons of the price cards and of "More for creators"
 * choose one of them before they jump to the form (see selectCreatorOption).
 */
export const CREATOR_FORM_OPTIONS = {
  care: `Care plan: ${eurPlain(P.careSetup)} set-up, ${eurPlain(P.careMonthly)} per month, ${P.careMinimumMonths} months minimum`,
  "one-page": `One-page: ${eurPlain(P.onePage)} once`,
  studio: `Studio system: from ${eurPlain(P.studioFrom)}`,
  more: "Social media management, analytics or software: price on request",
  unsure: "Not sure yet",
} as const;

export type CreatorOptionId = keyof typeof CREATOR_FORM_OPTIONS;

const CREATOR_OPTION_EVENT = "creators:option";

/** Called by a button: tells the form which option to show as chosen. */
export const selectCreatorOption = (id: CreatorOptionId): void => {
  window.dispatchEvent(new CustomEvent<string>(CREATOR_OPTION_EVENT, { detail: CREATOR_FORM_OPTIONS[id] }));
};

/** Used by the form section: calls back with the option text whenever a button chose one. */
export const onCreatorOption = (listener: (option: string) => void): (() => void) => {
  const handle = (event: Event) => listener((event as CustomEvent<string>).detail);
  window.addEventListener(CREATOR_OPTION_EVENT, handle);
  return () => window.removeEventListener(CREATOR_OPTION_EVENT, handle);
};

/**
 * Texts of the request form. CheckForm builds the email subject as `${subject}: ${option}` (form
 * service) or `${subject}` (pre-filled email) and the email body from the field labels, so the
 * labels below also name the lines of the email.
 */
export const CREATOR_FORM: CheckFormTexts = {
  ...CHECK_FORM_EN,
  formLabel: "Request your creator page",
  link: "Link to your main profile",
  linkHint: "Instagram, TikTok or YouTube.",
  businessType: "Which option interests you?",
  businessTypePlaceholder: "Please choose",
  businessTypes: Object.values(CREATOR_FORM_OPTIONS),
  goal: "Anything we should know?",
  goalHint: "Optional. For example your niche, your follower range or a deadline.",
  errors: {
    ...CHECK_FORM_EN.errors,
    link: "Please enter the link to your profile.",
    businessType: "Please choose an option.",
  },
  success: {
    title: CHECK_FORM_EN.success.title,
    body: `We reply by email within ${CHECK_REPLY_TIME} with a written offer and the list of material we need.`,
  },
  subject: "Creator page request",
};

/* ------------------------------------------------------------------ JSON-LD */

const ORGANIZATION = { "@id": `${SITE}/#organization` };

const offer = (name: string, description: string, priceSpecification: Record<string, unknown>) => ({
  "@type": "Offer",
  name,
  description,
  priceCurrency: "EUR",
  url: `${CREATORS_URL}#${CREATOR_ANCHORS.prices}`,
  priceSpecification: { priceCurrency: "EUR", ...priceSpecification },
});

/** Only what the page itself states: three offers with their prices, and the FAQ as rendered. */
export const CREATORS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CREATORS_URL}#webpage`,
      url: CREATORS_URL,
      name: CREATORS_SEO.title,
      description: CREATORS_SEO.description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${CREATORS_URL}#service` },
      breadcrumb: { "@id": `${CREATORS_URL}#breadcrumb` },
      dateModified: SEO_DATE_MODIFIED,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CREATORS_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Creators", item: CREATORS_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CREATORS_URL}#service`,
      name: CREATORS_SEO.title,
      serviceType: "Creator portfolio website",
      description: CREATORS_SEO.description,
      url: CREATORS_URL,
      provider: ORGANIZATION,
      offers: [
        offer("One-page", "One-page creator portfolio, built for you and handed over on acceptance. One-off price.", {
          "@type": "PriceSpecification",
          price: P.onePage,
        }),
        offer(
          "Care plan",
          `One-page creator portfolio with monthly updates. No set-up fee, ${P.careMinimumMonths}-month minimum term, then cancel monthly. First year: ${CARE_FIRST_YEAR} EUR.`,
          {
            "@type": "UnitPriceSpecification",
            price: P.careMonthly,
            unitCode: "MON",
            unitText: "MONTH",
            billingIncrement: 1,
          }
        ),
        offer("Studio system", "Multi-page creator site with inquiry inbox and outreach system. Scope and fixed price after a short call.", {
          "@type": "PriceSpecification",
          minPrice: P.studioFrom,
        }),
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CREATORS_URL}#faq`,
      mainEntity: CREATOR_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};
