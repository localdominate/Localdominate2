/**
 * Content of /about. Every fact here comes from the owner's own CV (package DEV-B, 2026-10-02).
 * Do not add stations, dates, clients or result figures that the owner has not confirmed.
 * Kempinski and VAYA are stations of his career, never clients of LocalDominate.
 */
import portraitSrc from "@/assets/v4/markus-wimboeck.webp";

/** The one place to swap the portrait. Width and height fix the aspect ratio of its container. */
export const PORTRAIT = {
  src: portraitSrc,
  width: 560,
  height: 830,
  alt: "Markus Wimböck",
} as const;

export const ABOUT_PATH = "/about";
export const ABOUT_TITLE = "About Markus Wimböck";
export const ABOUT_DESCRIPTION =
  "Markus Wimböck runs LocalDominate: over seven years in hospitality and digital marketing, and one person responsible for your project from check to hand-over.";

export const CONTACT = {
  email: "info@localdominate.org",
  linkedIn: "https://www.linkedin.com/in/markus-w-3981a1148/",
} as const;

/** The short facts under the hero. `Contact` is rendered separately because it holds links. */
export const HERO_FACTS: readonly { term: string; detail: string }[] = [
  { term: "Background", detail: "Over seven years in hospitality and digital marketing" },
  { term: "Where", detail: "Works remotely. Meetings by video." },
  { term: "Languages", detail: "German (native), English (fluent)" },
] as const;

/** "What I bring from hotels": what the station was, and what it changes for the customer. */
export const HOTEL_LESSONS: readonly { title: string; then: string; now: string }[] = [
  {
    title: "I learned the trade before the tools",
    then: "I trained in hotel management in Austria and later helped run a newly opened resort as deputy resort manager.",
    now: "I know that your project comes on top of a full working day. I prepare each decision so that it takes little of your time.",
  },
  {
    title: "I have carried all the digital parts at once",
    then: "At a grand hotel in St. Moritz I was solely responsible for digital and e-commerce: search, the booking path, advertising, guest communication and reporting.",
    now: "I plan your website, your Google profile and your marketing as one project, because I have seen how each part depends on the others.",
  },
  {
    title: "I read numbers like an operator",
    then: "Revenue reporting in the resort and automated reporting in the hotel were part of my job, not an extra.",
    now: "I judge a change by what it does for enquiries and bookings. You get a written list of what was changed and why.",
  },
  {
    title: "I know both sides of the table",
    then: "I worked inside hotels and, as a freelance consultant, from the outside for hotels, tourism and e-commerce businesses.",
    now: "I know what an owner needs from a supplier: a fixed scope, a fixed price and one person who answers.",
  },
] as const;

export type CareerStation = {
  id: string;
  /** Large, readable years. */
  years: string;
  /** Exact months where the CV gives them. */
  period?: string;
  role: string;
  organisation: string;
  place?: string;
  /** One line of what the job was. */
  summary: string;
  /** Still running today. */
  current?: boolean;
  /** Set for the hotel and hospitality stations; the text is the tag shown on the card. */
  hospitality?: string;
  /** Own products of the founder station. */
  items?: readonly { name: string; note: string }[];
};

/** Newest first. */
export const CAREER: readonly CareerStation[] = [
  {
    id: "founder",
    years: "Since 2025",
    period: "09/2025 to today",
    role: "Founder and product lead",
    organisation: "Own travel-tech and web products",
    place: "Remote",
    summary: "I plan, build and run my own products.",
    current: true,
    items: [
      { name: "Explore-Saudi.com", note: "Travel discovery platform for Saudi Arabia in five languages." },
      { name: "Aurelian Grand", note: "My own concept showcase of a fictional five-star hotel. A concept, not a client." },
      { name: "LocalDominate", note: "The growth studio you are reading about." },
    ],
  },
  {
    id: "do-good",
    years: "Since 2025",
    period: "12/2025 to today",
    role: "Director of Web & IT",
    organisation: "DO GOOD International, a US non-profit",
    place: "Remote",
    summary: "Responsible for web and IT of the organisation.",
    current: true,
  },
  {
    id: "kempinski",
    years: "2023 to 2025",
    period: "07/2023 to 10/2025",
    role: "Assistant Manager eCommerce & Digital Strategy",
    organisation: "Grand Hotel des Bains Kempinski",
    place: "St. Moritz, Switzerland",
    summary:
      "Solely responsible for digital and e-commerce: SEO, booking funnel, paid media, CRM and reporting automation.",
    hospitality: "Hotel",
  },
  {
    id: "freelance",
    years: "2020 to 2023",
    period: "09/2020 to 06/2023",
    role: "Freelance consultant, digital marketing and e-commerce",
    organisation: "Self-employed",
    place: "Remote",
    summary:
      "Worked for hotels, tourism and e-commerce businesses in the German-speaking countries and in the Middle East and North Africa.",
  },
  {
    id: "vaya",
    years: "2019 to 2020",
    period: "11/2019 to 03/2020",
    role: "Deputy Resort Manager",
    organisation: "VAYA Resort",
    place: "Galtür, Austria",
    summary: "Operations, direct marketing and revenue reporting of a newly opened resort.",
    hospitality: "Resort",
  },
  {
    id: "startups",
    years: "2017 to 2020",
    role: "Founder of start-ups",
    organisation: "DappList and Crypto Horse",
    summary: "Start-ups of my own in blockchain and AI.",
  },
  {
    id: "klessheim",
    years: "2004 to 2006",
    role: "Education in hotel management",
    organisation: "Tourismusschulen Klessheim",
    place: "Austria",
    summary: "Where it started: training in the hotel trade.",
    hospitality: "Hotel school",
  },
] as const;

/** Working principles that the four written commitments (`HowWeWork`) do not already cover. */
export const PRINCIPLES: readonly { title: string; body: string; forYou: string }[] = [
  {
    title: "Truth first",
    body: "No invented numbers. A result is published only when it is documented.",
    forYou: "What you read here and in an offer is what you get. If I cannot show something yet, I say so.",
  },
  {
    title: "One person on the project",
    body: "From the first check to the hand-over, one person is responsible for your project.",
    forYou: "You explain your business once, and you always know who to ask.",
  },
  {
    title: "AI for the routine, a person for the decision",
    body: "AI is used for research and routine work. A person decides and edits what goes live.",
    forYou: "Nothing is published in your name that a person has not read and approved.",
  },
] as const;

/** What LocalDominate is today, as three ways into the site. */
export const TODAY_LINKS: readonly { to: string; label: string; title: string; body: string }[] = [
  {
    to: "/approach",
    label: "Approach",
    title: "The seven steps",
    body: "How strategy, brand, website and marketing run as one sequence, from diagnosis to scale.",
  },
  {
    to: "/services",
    label: "Services",
    title: "What you can order",
    body: "The full growth project and the fixed-price offers, each with scope, price and delivery time.",
  },
  {
    to: "/work",
    label: "Work",
    title: "What exists so far",
    body: "The projects, each labelled for what it is: client work, own product or concept.",
  },
] as const;
