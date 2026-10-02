/**
 * Data of the Insights hub (/insights): a slim list over the existing blog articles.
 *
 * Why a separate list: src/data/blogArticles.ts is about 235 kB with all texts in three languages.
 * The hub only needs slug, title, topic, length and date, so this file carries just that. The table
 * ARTICLES is generated from blogArticles.ts (published articles only, each with a route in
 * src/App.tsx) by `node gen-v4-insights.mjs`, which stops when a published article has no topic.
 * The German titles and keywords used by the search are loaded only when someone types, see
 * src/components/v4/insights/insightsSearchIndex.ts. The topics, the hand-picked FEATURED list and
 * the HELD list below are edited by hand.
 *
 * Truth rule (Dev-Plan 2.3): the hub states no figures of its own. An article is HELD back from the
 * hub when its title promises a customer result or a market figure that is not verified. The article
 * itself stays live at /blog/<slug> and is not touched.
 */

export type InsightTopicId = "hospitality" | "maps" | "ai" | "industries" | "measure" | "strategy";

export type InsightGroupId = "overview" | "trades" | "health" | "services" | "lifestyle" | "cities";

export type InsightTopic = {
  id: InsightTopicId;
  label: string;
  /** One line under the topic name, plain words. */
  blurb: string;
  /** Only the industries topic has sub-groups. The order here is the order on the page. */
  groups?: readonly { id: InsightGroupId; label: string }[];
};

export type InsightArticle = {
  slug: string;
  topic: InsightTopicId;
  group?: InsightGroupId;
  /** FAQ pages and topic overviews are listed like articles but marked. */
  kind?: "faq" | "overview";
  /** English title from the article registry. */
  title: string;
  minutes: number;
  /** Year and month of the last update, "YYYY-MM". */
  updated: string;
  /** True when the article text exists in German only (titles and teasers exist in English). */
  germanOnly?: true;
};

export type FeaturedPick = { slug: string; why: string };

export const INSIGHT_TOPICS: readonly InsightTopic[] = [
  { id: "hospitality", label: "Hospitality", blurb: "Hotels, holiday rentals, restaurants and cafés." },
  { id: "maps", label: "Google Maps and profile", blurb: "Ranking, profile fields, reviews and profile problems." },
  { id: "ai", label: "AI visibility", blurb: "Being found and quoted in ChatGPT, Gemini, Perplexity and Google's AI answers." },
  {
    id: "industries",
    label: "Industries and cities",
    blurb: "Guides for trades, health, services, shops and cities in Germany, Austria and Switzerland.",
    groups: [
      { id: "overview", label: "Overviews" },
      { id: "trades", label: "Trades and site services" },
      { id: "health", label: "Health and care" },
      { id: "services", label: "Professional and personal services" },
      { id: "lifestyle", label: "Fitness, beauty and retail" },
      { id: "cities", label: "Cities and regions" },
    ],
  },
  { id: "measure", label: "Measurement and audits", blurb: "What to track, how to read it, and checklists to find gaps." },
  { id: "strategy", label: "Strategy and website", blurb: "Keywords, content, links, structured data and the basics." },
] as const;

/**
 * Articles held back from the hub, with the reason. Remove an entry once the article is fact-checked.
 * (Many more articles contain example customer cards. That is reported to the owner, see the handover.)
 */
export const HELD: Readonly<Record<string, string>> = {
  "local-seo-case-study-baecker": "Title promises a customer result (+200 % customers) that is not verified.",
  "google-maps-ranking-case-studies": "Title promises six success stories; the customer cases are not verified.",
  "mobile-local-seo": "Title states a market figure (80 % of local searches are mobile) without a source.",
};

/**
 * "Start here": chosen by hand. Each was read before it was picked. None of them contains a customer
 * case, a testimonial or a result figure. The sentence is written for this page, not copied from
 * the article.
 */
export const FEATURED: readonly FeaturedPick[] = [
  {
    slug: "local-seo-cafe-coffeeshop",
    why: "Opening hours, photos and reviews decide the visit. Covers categories, pages for breakfast and cake, and how to present a café as a workspace.",
  },
  {
    slug: "unternehmensprofil-ki-funktionen-2026",
    why: "Which fields of your Google profile end up in AI summaries, and a monthly routine to keep them accurate.",
  },
  {
    slug: "ai-falschangaben-korrigieren-2026",
    why: "ChatGPT or Gemini names a wrong phone number or hours? Trace the source, fix it there, then ask again after two, four and eight weeks.",
  },
  {
    slug: "local-seo-audit-checkliste",
    why: "A checklist for your profile, website, directory entries and reviews. Work through it to see which gaps matter most.",
  },
  {
    slug: "local-seo-tracking-kpis",
    why: "Six figures to review every month, and why profile statistics and website analytics must never be added together.",
  },
  {
    slug: "local-seo-heizung-sanitaer",
    why: "Emergency calls and renovation projects are two different searches. Shows why each needs its own page, category and keywords.",
  },
] as const;

/** Every article, in registry order. Generated, see the header. */
const ARTICLES: readonly InsightArticle[] = [
  { slug: "ultimate-guide-local-seo", topic: "strategy", title: "Local SEO: The Ultimate Guide for Local Businesses 2026", minutes: 25, updated: "2026-03", germanOnly: true },
  { slug: "kostenloses-seo-guide", topic: "strategy", title: "Free SEO: The Ultimate Beginner's Guide 2026", minutes: 28, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-keywords-finden", topic: "strategy", title: "Finding Local SEO Keywords: The Complete Keyword Research Guide 2026", minutes: 18, updated: "2026-01", germanOnly: true },
  { slug: "google-maps-ranking-verbessern", topic: "maps", title: "Improve Google Maps Ranking: 7-Step Action Plan 2026", minutes: 8, updated: "2026-01" },
  { slug: "google-bewertungen-bekommen", topic: "maps", title: "Get Google Reviews: 7 Proven Strategies", minutes: 6, updated: "2026-01" },
  { slug: "local-seo-fuer-restaurants", topic: "hospitality", title: "Local SEO for Restaurants: More Guests Through Google", minutes: 7, updated: "2026-01" },
  { slug: "google-my-business-optimieren", topic: "maps", title: "Optimize Google My Business: Step-by-Step Guide", minutes: 9, updated: "2026-01" },
  { slug: "lokale-suchmaschinenoptimierung-2026", topic: "strategy", title: "Local Search Engine Optimization 2026: What Really Works", minutes: 10, updated: "2026-01" },
  { slug: "nap-konsistenz-local-seo", topic: "maps", title: "NAP Consistency: Why Uniform Data Boosts Your Ranking", minutes: 12, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-handwerker", topic: "industries", group: "trades", title: "Local SEO for Contractors: More Jobs Through Google", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-audit-checkliste", topic: "measure", title: "Local SEO Audit: Status Analysis with 50+ Diagnostic Points & Scoring", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-schweiz", topic: "industries", group: "cities", title: "Local SEO Switzerland: The Complete Guide for SMEs", minutes: 22, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-zuerich", topic: "industries", group: "cities", title: "Local SEO Zurich: How to Dominate the Zurich Market", minutes: 18, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-muenchen", topic: "industries", group: "cities", title: "Local SEO Munich: The Guide for Bavarian Businesses", minutes: 16, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-aerzte-praxen", topic: "industries", group: "health", title: "Local SEO for Doctors & Practices: Patient Acquisition Through Google", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-anwaelte-kanzleien", topic: "industries", group: "services", title: "Local SEO for Lawyers & Law Firms: Winning Clients Through Google", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-hotels", topic: "hospitality", title: "Local SEO for Hotels & Accommodations: Increase Direct Bookings", minutes: 16, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-fitness", topic: "industries", group: "lifestyle", title: "Local SEO for Gyms & Personal Trainers", minutes: 12, updated: "2026-02", germanOnly: true },
  { slug: "schema-markup-local-seo", topic: "strategy", title: "Schema Markup for Local SEO: The Implementation Guide", minutes: 20, updated: "2026-01", germanOnly: true },
  { slug: "mobile-local-seo", topic: "strategy", title: "Mobile Local SEO: Why 80% of Local Searches Are Mobile", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "google-maps-seo-ranking-faktoren", topic: "maps", title: "Google Maps SEO 2026: All 20 Ranking Signals with Weighting", minutes: 18, updated: "2026-01", germanOnly: true },
  { slug: "google-maps-spam-erkennen", topic: "maps", title: "Google Maps Spam Detection & Reporting: Complete Guide", minutes: 14, updated: "2026-03", germanOnly: true },
  { slug: "google-maps-konkurrenzanalyse", topic: "maps", title: "Google Maps Competitor Analysis: How to Analyze Top Rankings", minutes: 16, updated: "2026-03", germanOnly: true },
  { slug: "google-maps-ranking-case-studies", topic: "maps", title: "Google Maps Ranking Case Studies: 6 Industries, 6 Success Stories", minutes: 18, updated: "2026-03", germanOnly: true },
  { slug: "entity-seo-guide", topic: "ai", title: "Entity SEO: How Search Engines Understand Entities", minutes: 15, updated: "2026-03", germanOnly: true },
  { slug: "semantic-seo-topical-authority", topic: "strategy", title: "Semantic SEO & Topical Authority: The Complete Guide", minutes: 16, updated: "2026-03", germanOnly: true },
  { slug: "google-maps-audit-template", topic: "measure", title: "Google Maps Audit Template: Complete Checklist with 75+ Points", minutes: 12, updated: "2026-03", germanOnly: true },
  { slug: "citation-tracking-template", topic: "measure", title: "Citation Tracking Spreadsheet Template: Manage All Directories", minutes: 10, updated: "2026-03", germanOnly: true },
  { slug: "local-keyword-research-template", topic: "strategy", title: "Local Keyword Research Template: Systematic Keyword Research for Local Businesses", minutes: 11, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-monthly-checklist", topic: "strategy", title: "Local SEO Monthly Checklist: The Monthly Routine for Top Rankings", minutes: 10, updated: "2026-03", germanOnly: true },
  { slug: "ai-visibility-checklist", topic: "ai", title: "AI Visibility Checklist: Is Your Website Ready for AI Search?", minutes: 12, updated: "2026-03", germanOnly: true },
  { slug: "google-maps-ranking-tracker", topic: "measure", title: "Google Maps Ranking Tracker: How to Track Your Local Rankings", minutes: 13, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-strategy-planner", topic: "strategy", title: "Local SEO Strategy Planner: 7-Phase Task Plan with Budget & Checklist", minutes: 14, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-roadmap-90-tage", topic: "strategy", title: "Local SEO Weekly Plan: 12-Week Timeline with Gantt Chart & KPI Milestones", minutes: 12, updated: "2026-03", germanOnly: true },
  { slug: "local-link-building", topic: "strategy", title: "Local Link Building: Building Backlinks for Local Businesses", minutes: 16, updated: "2026-01", germanOnly: true },
  { slug: "negative-google-bewertungen", topic: "maps", title: "Negative Google Reviews: How to Respond Professionally", minutes: 12, updated: "2026-01", germanOnly: true },
  { slug: "local-content-marketing", topic: "strategy", title: "Local Content Marketing: Content Strategy for Local Businesses", minutes: 17, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-case-study-baecker", topic: "industries", group: "lifestyle", title: "Local SEO Case Study: How a Bakery Gained 200% More Customers", minutes: 10, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-fehler", topic: "strategy", title: "Local SEO Mistakes: 15 Reasons Why You're Not Found", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-doener-kebab-imbiss", topic: "hospitality", title: "Local SEO for Döner & Kebab Shops: The Ultimate Marketing Guide 2026", minutes: 25, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-friseursalon-beauty", topic: "industries", group: "lifestyle", title: "Local SEO for Hair Salons & Beauty Studios: The Ultimate Guide with Booking Integration 2026", minutes: 25, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-immobilienmakler", topic: "industries", group: "services", title: "Local SEO for Real Estate Agents: Property Inquiries Through Google", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-steuerberater", topic: "industries", group: "services", title: "Local SEO for Tax Consultants & Accountants: Winning Clients", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-autowerkstatt", topic: "industries", group: "trades", title: "Local SEO for Auto Repair Shops & Car Dealerships", minutes: 13, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-tierarzt", topic: "industries", group: "health", title: "Local SEO for Veterinarians & Animal Clinics", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-fotograf", topic: "industries", group: "services", title: "Local SEO for Photographers: More Bookings Through Google", minutes: 13, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-yoga-studios", topic: "industries", group: "lifestyle", title: "Local SEO for Yoga Studios & Pilates", minutes: 12, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-tattoo-studios", topic: "industries", group: "lifestyle", title: "Local SEO for Tattoo Studios & Piercing", minutes: 13, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-apotheken", topic: "industries", group: "health", title: "Local SEO for Pharmacies: Local Healthcare", minutes: 12, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-fahrschule", topic: "industries", group: "services", title: "Local SEO for Driving Schools: Win More Students", minutes: 11, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-hochzeitsdienstleister", topic: "industries", group: "services", title: "Local SEO for Wedding Vendors: Florist to DJ", minutes: 15, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-umzugsunternehmen", topic: "industries", group: "trades", title: "Local SEO for Moving Companies: Being Found in Two Cities", minutes: 11, updated: "2026-08", germanOnly: true },
  { slug: "local-seo-sprachschule", topic: "industries", group: "services", title: "Local SEO for Language Schools & Tutoring Institutes", minutes: 12, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-baeckerei-konditorei", topic: "industries", group: "lifestyle", title: "Local SEO for Pastry Shops & Custom Cake Businesses: Marketing Specialties", minutes: 11, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-cafe-coffeeshop", topic: "hospitality", title: "Local SEO for Cafés & Coffee Shops", minutes: 12, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-hamburg", topic: "industries", group: "cities", title: "Local SEO Hamburg: The Hanseatic Marketing Guide", minutes: 16, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-frankfurt", topic: "industries", group: "cities", title: "Local SEO Frankfurt: Leveraging the Financial Metropolis", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-koeln", topic: "industries", group: "cities", title: "Local SEO Cologne: Rhineland Marketing for Local Businesses", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-wien", topic: "industries", group: "cities", title: "Local SEO Vienna: The Austria Guide for SMEs", minutes: 17, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-stuttgart", topic: "industries", group: "cities", title: "Local SEO Stuttgart: Automotive Region & More", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-duesseldorf", topic: "industries", group: "cities", title: "Local SEO Düsseldorf: Fashion, Trade Fairs & More Customers", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-basel", topic: "industries", group: "cities", title: "Local SEO Basel: Border Region Switzerland-Germany-France", minutes: 16, updated: "2026-02", germanOnly: true },
  { slug: "technisches-local-seo-guide", topic: "strategy", title: "Technical Local SEO: The Complete Guide for Local Businesses 2026", minutes: 25, updated: "2026-03", germanOnly: true },
  { slug: "localbusiness-schema-implementierung", topic: "strategy", title: "Implementing LocalBusiness Schema: Complete Guide with Code Examples", minutes: 22, updated: "2026-03", germanOnly: true },
  { slug: "review-schema-implementierung", topic: "strategy", title: "Implementing Review Schema: Get Star Ratings in Google", minutes: 20, updated: "2026-03", germanOnly: true },
  { slug: "core-web-vitals-local-seo", topic: "strategy", title: "Core Web Vitals for Local Websites: Performance Guide", minutes: 18, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-voice-search", topic: "ai", title: "Local SEO & Voice Search: Hey Google, where is...", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "google-posts-ranking-faktor", topic: "maps", title: "Optimally Using Google Posts: The Underrated Ranking Factor", minutes: 12, updated: "2026-01", germanOnly: true },
  { slug: "lokale-landing-pages", topic: "strategy", title: "Creating Local Landing Pages: One Page Per Location", minutes: 16, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-tracking-kpis", topic: "measure", title: "Local SEO Tracking: Setting Up KPIs and Reporting", minutes: 16, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-vs-organisch", topic: "strategy", title: "Local SEO vs. Organic SEO: The Key Differences", minutes: 12, updated: "2026-02", germanOnly: true },
  { slug: "google-maps-seo-vs-organic-seo", topic: "strategy", title: "Google Maps SEO vs. Organic SEO: Ranking Factors, Strategies & ROI Compared", minutes: 14, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-berlin", topic: "industries", group: "cities", title: "Local SEO Berlin: The Capital City Guide for Businesses", minutes: 17, updated: "2026-01", germanOnly: true },
  { slug: "ki-tools-local-seo", topic: "ai", title: "AI Tools for Local SEO: The Best AI Helpers 2026", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "google-ai-overviews-local-seo", topic: "ai", title: "Google AI Overviews & Local SEO: What's Changing", minutes: 12, updated: "2026-01", germanOnly: true },
  { slug: "seo-toolbox-kostenlose-ressourcen", topic: "strategy", title: "The Ultimate SEO Toolbox: 50+ Free Tools & Resources", minutes: 22, updated: "2026-01", germanOnly: true },
  { slug: "gbp-fotos-optimieren", topic: "maps", title: "Optimize Google Business Photos: The Complete Image Guide", minutes: 14, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-mehrstufig-unternehmen", topic: "strategy", title: "Franchise SEO Strategy: GBP Management & Brand Consistency Across Locations", minutes: 16, updated: "2026-01", germanOnly: true },
  { slug: "e-e-a-t-lokale-unternehmen", topic: "strategy", title: "E-E-A-T for Local Businesses: Prove Expertise & Build Trust", minutes: 15, updated: "2026-01", germanOnly: true },
  { slug: "lokale-seo-fuer-neugruender", topic: "strategy", title: "Local SEO for Startups: From Zero to Local Visibility", minutes: 18, updated: "2026-01", germanOnly: true },
  { slug: "google-business-messaging", topic: "maps", title: "Google Business Messaging: Optimize Customer Communication", minutes: 12, updated: "2026-01", germanOnly: true },
  { slug: "local-seo-physiotherapie", topic: "industries", group: "health", title: "Local SEO for Physical Therapy & Holistic Practitioners: Win Patients", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-notdienst-keywords", topic: "industries", group: "trades", title: "Emergency Service Keywords: When Customers Search Urgently", minutes: 13, updated: "2026-02", germanOnly: true },
  { slug: "google-business-kategorien-guide", topic: "maps", title: "Google Business Categories: Which Fits Your Business?", minutes: 15, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-zahnarzt", topic: "industries", group: "health", title: "Local SEO for Dentists: More Patients Through Google", minutes: 15, updated: "2026-02", germanOnly: true },
  { slug: "lokale-events-marketing", topic: "strategy", title: "Using Local Events for SEO: Sponsorship & Events", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "google-business-produkte-services", topic: "maps", title: "Present Google Business Products & Services Optimally", minutes: 13, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-optiker", topic: "industries", group: "health", title: "Local SEO for Opticians & Hearing Aid Specialists: Win Customers", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "bewertungs-antworten-vorlagen", topic: "maps", title: "Review Response Templates: 50 Templates for Every Situation", minutes: 18, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-elektrotechnik", topic: "industries", group: "trades", title: "Local SEO for Electricians: More Jobs Through Google", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "google-business-insights-verstehen", topic: "measure", title: "Understanding & Using Google Business Insights Correctly", minutes: 15, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-maler-lackierer", topic: "industries", group: "trades", title: "Local SEO for Painters: Win More Jobs Through Google", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "gbp-suspendiert-reaktivieren", topic: "maps", title: "Google Business Profile Suspended – How to Restore It (2026 Guide)", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "gbp-verifizierung-fehlgeschlagen", topic: "maps", title: "Google Business Verification Fails – 8 Solutions for All Problems (2026)", minutes: 12, updated: "2026-02", germanOnly: true },
  { slug: "duplicate-listing-entfernen", topic: "maps", title: "Delete Duplicate Google Listings – Duplicate Listing Guide (2026)", minutes: 11, updated: "2026-02", germanOnly: true },
  { slug: "gbp-bewertung-loeschen-anleitung", topic: "maps", title: "Get Google Review Deleted – Step-by-Step Guide (2026)", minutes: 13, updated: "2026-02", germanOnly: true },
  { slug: "ranking-ploetzlich-verschwunden", topic: "maps", title: "Google Ranking Suddenly Disappeared – Causes & Immediate Help (2026)", minutes: 10, updated: "2026-02", germanOnly: true },
  { slug: "gbp-nicht-in-suche-sichtbar", topic: "maps", title: "Google Business Profile Not Visible in Search – 12 Solutions (2026)", minutes: 11, updated: "2026-02", germanOnly: true },
  { slug: "gbp-mehrere-standorte", topic: "maps", title: "Managing Google Business for Multiple Locations – The Multi-Location Guide (2026)", minutes: 15, updated: "2026-02", germanOnly: true },
  { slug: "gbp-oeffnungszeiten-sondertage", topic: "maps", title: "Setting Google Business Hours & Special Days Correctly (2026)", minutes: 9, updated: "2026-02", germanOnly: true },
  { slug: "gbp-attribute-richtig-nutzen", topic: "maps", title: "Using Google Business Attributes Correctly – All Options Explained (2026)", minutes: 10, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-vs-maps-seo", topic: "maps", title: "Local SEO vs Maps SEO – What's the Difference? (2026)", minutes: 8, updated: "2026-02", germanOnly: true },
  { slug: "local-citations-2025", topic: "maps", title: "Top DACH Directories 2026: Industry-Specific Citation Sources Ranked by Relevance", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-baeckerei", topic: "industries", group: "lifestyle", title: "Local SEO for Bakeries: More Customers Through Google (2026)", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-hannover", topic: "industries", group: "cities", title: "Local SEO Hannover: The Guide for Lower Saxony Businesses", minutes: 16, updated: "2026-02", germanOnly: true },
  { slug: "ai-search-optimization-2026", topic: "ai", title: "AI Search Optimization 2026: How to Be Found in AI Search", minutes: 18, updated: "2026-02", germanOnly: true },
  { slug: "ai-search-vs-traditional-search", topic: "ai", title: "AI Search vs. Traditional Search: The Complete Comparison for Local Businesses", minutes: 16, updated: "2026-03", germanOnly: true },
  { slug: "seo-ferienwohnungen", topic: "hospitality", title: "SEO for Vacation Rentals: Switzerland, Bavaria & Austria – Escape the OTA Trap", minutes: 14, updated: "2026-02", germanOnly: true },
  { slug: "local-seo-reporting-template", topic: "measure", title: "Local SEO Reporting Template: Monthly Report + KPI Template", minutes: 16, updated: "2026-03", germanOnly: true },
  { slug: "google-business-profil-hub", topic: "maps", kind: "overview", title: "Google Business Profile Hub – All Guides & Tutorials", minutes: 5, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-branchen-hub", topic: "industries", group: "overview", kind: "overview", title: "Local SEO Industry Guides – 22+ Industries Overview", minutes: 5, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-staedte-hub", topic: "industries", group: "overview", kind: "overview", title: "Local SEO City Guides – DACH Region", minutes: 5, updated: "2026-03", germanOnly: true },
  { slug: "bewertungen-reputation-hub", topic: "maps", kind: "overview", title: "Reviews & Reputation Hub – All Guides", minutes: 5, updated: "2026-03", germanOnly: true },
  { slug: "website-content-ai-suchmaschinen", topic: "ai", title: "How to Structure Website Content for AI Search Engines: Complete Guide", minutes: 18, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-strategie-kleine-unternehmen", topic: "strategy", title: "Local SEO Strategy for Small Businesses: Complete Action Plan 2026", minutes: 22, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-ranking-faktoren-erklaert", topic: "maps", title: "Local SEO Ranking Factors Explained: All Signals in Detail 2026", minutes: 20, updated: "2026-03", germanOnly: true },
  { slug: "ai-suche-lokale-unternehmen", topic: "ai", title: "AI Search Optimization for Local Businesses: Complete Guide 2026", minutes: 24, updated: "2026-03", germanOnly: true },
  { slug: "local-link-building-blueprint", topic: "strategy", title: "Local Link Building Blueprint: Complete Guide to Local Backlinks 2026", minutes: 22, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-checkliste-komplett", topic: "strategy", title: "Local SEO Implementation Checklist: 80+ Actions in 8 Phases Systematically Executed", minutes: 20, updated: "2026-03", germanOnly: true },
  { slug: "google-maps-seo-hub", topic: "maps", kind: "overview", title: "Google Maps SEO Hub: All Guides for Local Visibility", minutes: 8, updated: "2026-03", germanOnly: true },
  { slug: "wie-google-maps-ranking-funktioniert", topic: "maps", title: "Google Maps Algorithm Explained: Proximity, Relevance & Prominence in Detail", minutes: 18, updated: "2026-03", germanOnly: true },
  { slug: "schema-strategie-dokument", topic: "strategy", title: "Schema Strategy: When to Use Article, FAQPage, HowTo & LocalBusiness", minutes: 14, updated: "2026-03", germanOnly: true },
  { slug: "local-seo-statistiken-daten", topic: "strategy", title: "Local SEO Statistics & Data 2026: 88+ Data Points for 22 Industries", minutes: 18, updated: "2026-03", germanOnly: true },
  { slug: "faq-hub", topic: "strategy", kind: "faq", title: "FAQ Hub: All Local SEO Questions Answered", minutes: 15, updated: "2026-03", germanOnly: true },
  { slug: "faq-local-seo-grundlagen", topic: "strategy", kind: "faq", title: "FAQ: Local SEO Basics", minutes: 8, updated: "2026-03", germanOnly: true },
  { slug: "faq-google-business-profil", topic: "maps", kind: "faq", title: "FAQ: Google Business Profile", minutes: 8, updated: "2026-03", germanOnly: true },
  { slug: "faq-bewertungen-reputation", topic: "maps", kind: "faq", title: "FAQ: Reviews & Reputation", minutes: 6, updated: "2026-03", germanOnly: true },
  { slug: "faq-technisches-seo", topic: "strategy", kind: "faq", title: "FAQ: Technical SEO", minutes: 8, updated: "2026-03", germanOnly: true },
  { slug: "faq-ai-zukunft-local-seo", topic: "ai", kind: "faq", title: "FAQ: AI & Future of Local SEO", minutes: 7, updated: "2026-03", germanOnly: true },
  { slug: "faq-content-marketing-local-seo", topic: "strategy", kind: "faq", title: "FAQ: Content & Marketing for Local SEO", minutes: 7, updated: "2026-03", germanOnly: true },
  { slug: "was-ist-geo-generative-engine-optimization", topic: "ai", title: "What is GEO? Generative Engine Optimization explained", minutes: 9, updated: "2026-05", germanOnly: true },
  { slug: "chatgpt-zitiert-lokale-unternehmen", topic: "ai", title: "How does ChatGPT cite local businesses?", minutes: 8, updated: "2026-05", germanOnly: true },
  { slug: "ai-visibility-index-local-seo-metrik", topic: "ai", title: "AI Visibility Index – the new Local SEO metric 2026", minutes: 8, updated: "2026-05", germanOnly: true },
  { slug: "schema-strategie-ai-retrieval", topic: "ai", title: "Schema Strategy for AI Retrieval: How to be read by LLMs", minutes: 10, updated: "2026-05", germanOnly: true },
  { slug: "perplexity-claude-lokale-sichtbarkeit", topic: "ai", title: "Using Perplexity & Claude for local visibility", minutes: 8, updated: "2026-05", germanOnly: true },
  { slug: "chatgpt-search-lokale-unternehmen-2026", topic: "ai", title: "ChatGPT Search for Local Businesses 2026 — The Complete Optimization Guide", minutes: 11, updated: "2026-05", germanOnly: true },
  { slug: "apple-business-connect-local-seo-2026", topic: "ai", title: "Apple Business Connect: Local SEO for Apple Maps & Siri 2026", minutes: 12, updated: "2026-05", germanOnly: true },
  { slug: "reddit-local-seo-ai-zitate-2026", topic: "ai", title: "Reddit for Local SEO 2026: How to Get Cited in ChatGPT & Perplexity", minutes: 12, updated: "2026-05", germanOnly: true },
  { slug: "google-ai-mode-local-seo-2026", topic: "ai", title: "Google AI Mode 2026: Local SEO for Gemini's Conversational Search", minutes: 13, updated: "2026-05", germanOnly: true },
  { slug: "bing-copilot-local-seo-2026", topic: "ai", title: "Bing & Microsoft Copilot 2026: Local SEO for ChatGPT, Edge & Windows", minutes: 12, updated: "2026-05", germanOnly: true },
  { slug: "tiktok-search-local-seo-2026", topic: "ai", title: "TikTok Search for Local SEO 2026: Get Found by Gen Z", minutes: 12, updated: "2026-05", germanOnly: true },
  { slug: "voice-search-sprachassistenten-local-seo-2026", topic: "ai", title: "Voice Search 2026: Local SEO for Alexa, Siri & Google Assistant", minutes: 12, updated: "2026-05", germanOnly: true },
  { slug: "ai-agents-lokale-buchungen-2026", topic: "ai", title: "AI Agents 2026: How Operator, ChatGPT Agent & Gemini Book Local Services Autonomously", minutes: 13, updated: "2026-05", germanOnly: true },
  { slug: "geo-content-briefing-vorlage-2026", topic: "ai", title: "GEO Content Briefing 2026: Template for Citable AI-Search Content", minutes: 10, updated: "2026-08", germanOnly: true },
  { slug: "ai-falschangaben-korrigieren-2026", topic: "ai", title: "Fixing Wrong Business Data in AI Answers 2026: A 6-Step Process", minutes: 9, updated: "2026-08", germanOnly: true },
  { slug: "unternehmensprofil-ki-funktionen-2026", topic: "ai", title: "Business Profile & AI 2026: Which Fields Reach AI Answers", minutes: 10, updated: "2026-08", germanOnly: true },
  { slug: "local-seo-heizung-sanitaer", topic: "industries", group: "trades", title: "Local SEO for Plumbing & Heating: Emergencies and Projects", minutes: 11, updated: "2026-08", germanOnly: true },
  { slug: "local-seo-gebaeudereinigung", topic: "industries", group: "trades", title: "Local SEO for Commercial Cleaning: Qualified Site Enquiries", minutes: 11, updated: "2026-08", germanOnly: true },
  { slug: "local-seo-garten-landschaftsbau", topic: "industries", group: "trades", title: "Local SEO for Landscaping: Using the Season Correctly", minutes: 11, updated: "2026-08", germanOnly: true },
  { slug: "whatsapp-business-local-seo-2026", topic: "strategy", title: "WhatsApp Business for Local Businesses 2026: Setup, NAP Rules & Compliance", minutes: 10, updated: "2026-08", germanOnly: true },
  { slug: "ai-crawler-steuern-gptbot-claudebot-2026", topic: "ai", title: "Managing AI Crawlers 2026: Configure GPTBot, ClaudeBot & PerplexityBot", minutes: 10, updated: "2026-08", germanOnly: true },
  { slug: "ai-zitat-monitoring-local-seo-2026", topic: "ai", title: "AI Citation Monitoring 2026: Measure Mentions in ChatGPT, Perplexity & Gemini", minutes: 11, updated: "2026-08", germanOnly: true },
  { slug: "llms-txt-lokale-unternehmen-2026", topic: "ai", title: "llms.txt for Local Businesses 2026: Setup, Example & Best Practices", minutes: 11, updated: "2026-05", germanOnly: true },
];

/** Guides that open their topic, in this order. Everything else keeps the registry order. */
const LEAD: readonly string[] = [
  "local-seo-hotels",
  "seo-ferienwohnungen",
  "google-my-business-optimieren",
  "google-maps-ranking-verbessern",
  "ai-suche-lokale-unternehmen",
  "was-ist-geo-generative-engine-optimization",
  "local-seo-audit-checkliste",
  "local-seo-tracking-kpis",
  "ultimate-guide-local-seo",
  "local-seo-strategie-kleine-unternehmen",
];

const leadRank = (slug: string): number => {
  const rank = LEAD.indexOf(slug);
  return rank === -1 ? LEAD.length : rank;
};

/** The articles shown on the hub: all of them except the held ones. */
export const INSIGHT_ARTICLES: readonly InsightArticle[] = ARTICLES.filter((a) => !(a.slug in HELD))
  .map((article, position) => ({ article, position }))
  .sort((a, b) => leadRank(a.article.slug) - leadRank(b.article.slug) || a.position - b.position)
  .map((entry) => entry.article);

const BY_SLUG: ReadonlyMap<string, InsightArticle> = new Map(INSIGHT_ARTICLES.map((a) => [a.slug, a]));

export const insightBySlug = (slug: string): InsightArticle | undefined => BY_SLUG.get(slug);

export const insightPath = (slug: string): string => `/blog/${slug}`;

export const insightTopic = (id: InsightTopicId): InsightTopic => {
  const topic = INSIGHT_TOPICS.find((t) => t.id === id);
  if (!topic) throw new Error(`Unknown insight topic: ${id}`);
  return topic;
};

/** Featured picks that still exist on the hub (a held or removed slug drops out silently). */
export const featuredPicks = (): readonly { article: InsightArticle; why: string }[] =>
  FEATURED.flatMap((pick) => {
    const article = BY_SLUG.get(pick.slug);
    return article ? [{ article, why: pick.why }] : [];
  });

/** Most recent update month on the hub, "YYYY-MM". */
export const LATEST_UPDATE: string = INSIGHT_ARTICLES.reduce((latest, a) => (a.updated > latest ? a.updated : latest), "");

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** "2026-03" becomes "Mar 2026". Plain string handling, so server and browser always agree. */
export const formatUpdated = (yearMonth: string): string => {
  const [year, month] = yearMonth.split("-");
  const name = MONTHS[Number(month) - 1];
  return name ? `${name} ${year}` : yearMonth;
};
