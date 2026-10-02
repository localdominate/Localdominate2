/**
 * Copy for /industries: four kinds of business ("worlds"), each with its own substance.
 *
 * Rules (Project Bible V4, Hard Rule 06 "Truth first"):
 * - No client names, results, rankings, ratings or market statistics. Each world describes the
 *   situation in plain words, what gets checked first and what gets built.
 * - Offers are referenced by id only. Name, price and delivery time are read from `v4Offers.ts` on
 *   the page, so this file can never disagree with /services. `why` explains the fit in this world
 *   and must stay inside the scope written in `v4Offers.ts`.
 * - The anchor ids are fixed: the home page links to `/industries#<id>` (see WORLDS in v4HomeData.ts).
 * - The four worlds carry equal weight. Hospitality is first in order only.
 */

import type { PillarId } from "@/data/v4PillarIndex";

export type WorldId = "hospitality" | "holiday-rentals" | "trades" | "premium-services";

/** One check, named by the place on the customer's way where it happens. */
export type WorldCheck = { where: string; text: string };

export type WorldOfferRef = {
  /** Id from `v4Offers.ts`. */
  offerId: string;
  /** Why this offer is a sensible start in this world. Scope stays as written in v4Offers.ts. */
  why: string;
};

export type WorldVisualKind = "hotel-photo" | "lake-photo" | "profile-fields" | "locations";

export type World = {
  id: WorldId;
  /** Short name for the world navigation. */
  navLabel: string;
  /** One descriptor under the name (desktop navigation). */
  navNote: string;
  /** Section headline (h2): the name of the world. */
  name: string;
  /** Mono label next to the headline: who exactly is meant. */
  descriptor: string;
  /** The editorial sentence that opens the section. */
  claim: string;
  /** The situation in this world: two or three plain sentences, no statistics. */
  situation: string;
  /** Checks in the order a customer meets them. */
  checks: readonly WorldCheck[];
  builds: readonly string[];
  /** Optional remark under "What we build", for a limit that is specific to this world. */
  buildNote?: string;
  offers: readonly WorldOfferRef[];
  /** The step of the seven-step system that usually comes first here. */
  step: { id: PillarId; why: string };
  /** What to send for the free check, in the words of this world. */
  checkLine: string;
  visual: WorldVisualKind;
};

export const INDUSTRY_WORLDS: readonly World[] = [
  {
    id: "hospitality",
    navLabel: "Hotels and guesthouses",
    navNote: "10 to 60 rooms",
    name: "Hotels and guesthouses",
    descriptor: "Owner-run · 10 to 60 rooms",
    claim: "A full house is not the same as a direct booking.",
    situation:
      "An owner-run hotel fills many of its rooms through booking platforms and pays commission on each of those nights. Guests who look the hotel up by name land on a website that has one job: let them book without leaving. If that page is slow on a phone, or the booking engine looks like a different company, the guest goes back to the platform.",
    checks: [
      {
        where: "On Google",
        text: "What a guest sees when they search your hotel by name: the profile, the photos, the rates shown, and who owns the first booking link.",
      },
      {
        where: "On your website",
        text: "The way from the first screen to a room and a rate on a phone, counted in taps.",
      },
      {
        where: "In the booking engine",
        text: "Whether dates, rates and the final price match what the platforms show, and at which step guests leave.",
      },
      {
        where: "In your numbers",
        text: "Whether your tracking can tell a direct booking from a platform booking.",
      },
    ],
    builds: [
      "A direct-booking website, mobile first, connected to your booking engine",
      "Room and offer pages that answer what guests ask before they book",
      "A complete Google Business Profile that leads to your own website",
      "Tracking that separates direct bookings from platform bookings",
    ],
    offers: [
      {
        offerId: "website-5-days",
        why: "For a hotel without a website that can take a booking. Scope and content are agreed on a call before the week starts.",
      },
      {
        offerId: "conversion-sprint",
        why: "For a booking page that gets visits but too few bookings. One page is audited and five fixes go live once you approve them.",
      },
    ],
    step: {
      id: "grow",
      why: "A hotel of this size usually has guests and a website already. The first thing to fix is what happens between the visit and the booking.",
    },
    checkLine: "Send the link to your hotel website or your Google profile.",
    visual: "hotel-photo",
  },
  {
    id: "holiday-rentals",
    navLabel: "Holiday rentals",
    navNote: "Hosts with several properties",
    name: "Holiday rentals",
    descriptor: "Hosts with several properties · small property managers",
    claim: "Several properties, and no booking page of your own.",
    situation:
      "A host with several properties runs them through platform listings, with one calendar per platform. Guests who want to come back, and people who heard about the place from friends, have nowhere to book except the platform. So commission is paid even on guests you had already won. One booking page for all properties gives them a direct way in.",
    checks: [
      {
        where: "On the platforms",
        text: "How each property is listed today: photos, descriptions and house rules, and what differs from one platform to the next.",
      },
      {
        where: "On Google",
        text: "What appears when someone searches the name of a property or of your rental business.",
      },
      {
        where: "In your calendar",
        text: "How availability is kept in sync, and whether a direct booking fits in without a double booking.",
      },
      {
        where: "In past bookings",
        text: "Which guests came back or came by recommendation. They are the first who could book direct.",
      },
    ],
    builds: [
      "One booking website for all properties, each with its own page",
      "Availability and booking requests connected to the calendar you already use, where your system allows it",
      "A short kit for returning guests: the direct link, a QR code for each property and an email text",
      "A Google Business Profile for the rental business, if it qualifies under Google's rules",
    ],
    buildNote:
      "Google's guidelines exclude single holiday homes from Business Profiles. A rental business with an office can qualify. We check this before any profile work.",
    offers: [
      {
        offerId: "website-5-days",
        why: "The direct-booking site for your properties, built in one focused week. Scope and content are agreed on a call before we start.",
      },
      {
        offerId: "conversion-sprint",
        why: "For hosts who already have a booking page that is visited but rarely used. One page, five fixes, a short written report.",
      },
    ],
    step: {
      id: "build",
      why: "The listings already exist on the platforms. What is missing is the thing a guest can use to book with you: the page itself.",
    },
    checkLine: "Send the link to one of your listings or to your current website.",
    visual: "lake-photo",
  },
  {
    id: "trades",
    navLabel: "Trades",
    navNote: "Heating, electrical, roofing, solar",
    name: "Trades",
    descriptor: "Plumbing and heating · electrical · roofing · solar",
    claim: "A recommended business still gets looked up.",
    situation:
      "Most jobs come by recommendation. Before calling, people look the business up: the Google profile, the reviews, a website that shows the work. Old opening hours, no photos of real jobs and no service area make a recommended business look closed or careless, and that is the moment the customer decides whether to call.",
    checks: [
      {
        where: "On Google Maps",
        text: "Name, category, service area, hours and phone number, compared with your van, your invoice and your website.",
      },
      {
        where: "In the reviews",
        text: "How recent they are, which jobs they mention, and whether anyone answers them.",
      },
      {
        where: "On your website",
        text: "Whether each high-value job has its own page, for example heat pump, bathroom, rewiring, roof or solar, and whether the page names the places you serve.",
      },
      {
        where: "At the first contact",
        text: "What happens after hours: who gets the call or the form, and how fast the customer hears back.",
      },
    ],
    builds: [
      "A corrected, complete Google Business Profile with services and service area",
      "One page per high-value job, with photos of your own work",
      "An enquiry form that asks what you need for a quote: job, place, timing, photos",
      "A simple routine for asking finished customers for a review",
    ],
    offers: [
      {
        offerId: "google-profile",
        why: "The profile is where a recommended business gets checked first. The Quick-Fix corrects the fields that matter for local search.",
      },
      {
        offerId: "conversion-sprint",
        why: "For the page that should turn a visit into an enquiry. One page is audited for mobile view, speed and tracking, and five fixes go live.",
      },
    ],
    step: {
      id: "launch",
      why: "The business and the work are there. What is missing is being found, and being found correctly, by the people who were told your name.",
    },
    checkLine: "Send the link to your Google profile or your website.",
    visual: "profile-fields",
  },
  {
    id: "premium-services",
    navLabel: "Premium local services",
    navNote: "Practices, firms, several locations",
    name: "Premium local services",
    descriptor: "Practices · law and tax firms · several locations",
    claim: "A considered decision is made before the first call.",
    situation:
      "Someone choosing a dentist, a lawyer or a tax adviser compares for a while and decides before making contact. What they compare is what they can see: who works there, what the firm is known for, how others describe it, how easy it is to get an appointment. With several locations, each one has to show the same correct details.",
    checks: [
      {
        where: "In search",
        text: "What appears for your name, and for your field plus your town, checked for each location separately.",
      },
      {
        where: "On each profile",
        text: "Whether name, address, phone, hours and categories match across every location and every directory that matters in your field.",
      },
      {
        where: "On your website",
        text: "Whether people, qualifications and fields of work are shown with enough substance to be believed, and whether each location has its own page.",
      },
      {
        where: "At the first contact",
        text: "How an enquiry is handled: who answers, how fast, and what the person is told next.",
      },
    ],
    builds: [
      "One correct profile per location, with a shared standard for names, categories and hours",
      "Pages for people and fields of work, written to be checked rather than to impress",
      "A page for each location with its own details and directions",
      "An enquiry workflow: the form creates the contact, notifies the right person and confirms to the sender",
    ],
    buildNote:
      "Health, legal and tax professions have their own advertising rules. We leave out any claim about outcomes and ask you to clear the wording with your chamber or adviser where needed.",
    offers: [
      {
        offerId: "google-profile",
        why: "One profile reviewed and corrected so it is complete and consistent. For several locations, the scope is confirmed on the call.",
      },
      {
        offerId: "ai-automation-starter",
        why: "One workflow for incoming enquiries, written down and approved by you first, then built and tested with your real data.",
      },
    ],
    step: {
      id: "position",
      why: "When several firms look alike, the first question is why this one should be chosen. That answer decides what the profile and the website have to prove.",
    },
    checkLine: "Send the link to your website or to the Google profile of one location.",
    visual: "locations",
  },
] as const;

export const INDUSTRY_WORLD_IDS: readonly WorldId[] = INDUSTRY_WORLDS.map((w) => w.id);

/** Anchor of the commission calculator (inside the hospitality section). */
export const CALCULATOR_ANCHOR = "commission-calculator";

/** Every id the page scrolls to when it is opened with a hash. */
export const INDUSTRY_ANCHORS: readonly string[] = [...INDUSTRY_WORLD_IDS, CALCULATOR_ANCHOR];
