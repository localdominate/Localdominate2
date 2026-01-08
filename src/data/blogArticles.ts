import { Language } from "@/i18n/translations";

export interface BlogArticleContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
}

export interface BlogArticle {
  slug: string;
  de: BlogArticleContent;
  en: BlogArticleContent;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  icon: string;
  keywords: string[];
  featured?: boolean;
}

// Helper type for components that need resolved content
export interface ResolvedBlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  icon: string;
  keywords: string[];
  featured?: boolean;
}

export const blogArticles: BlogArticle[] = [
  // === BESTEHENDE ARTIKEL ===
  {
    slug: "local-seo-keywords-finden",
    de: {
      title: "Local SEO Keywords finden: Der komplette Keyword-Recherche Guide 2026",
      metaTitle: "Local SEO Keywords finden: Keyword-Recherche Guide 2026",
      metaDescription: "Finde die perfekten lokalen Keywords für dein Unternehmen. Kostenlose Tools, Schritt-für-Schritt Anleitung und 10 Fehler die du vermeiden musst.",
      excerpt: "Der komplette Guide zur lokalen Keyword-Recherche. Lerne welche Keywords Kunden bringen und wie du sie findest.",
      category: "Strategie",
    },
    en: {
      title: "Finding Local SEO Keywords: The Complete Keyword Research Guide 2026",
      metaTitle: "Finding Local SEO Keywords: Keyword Research Guide 2026",
      metaDescription: "Find the perfect local keywords for your business. Free tools, step-by-step guide, and 10 mistakes you must avoid.",
      excerpt: "The complete guide to local keyword research. Learn which keywords bring customers and how to find them.",
      category: "Strategy",
    },
    readingTime: 18,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🔍",
    keywords: ["local seo keywords", "keyword research", "local keywords"],
    featured: true
  },
  {
    slug: "google-maps-ranking-verbessern",
    de: {
      title: "Google Maps Ranking verbessern: Der ultimative Guide 2026",
      metaTitle: "Google Maps Ranking verbessern: Ultimativer Guide 2026",
      metaDescription: "Verbessere dein Google Maps Ranking in 7 Schritten. Lokale SEO-Strategien, die wirklich funktionieren. Jetzt mehr Kunden gewinnen!",
      excerpt: "Erfahre, wie du mit bewährten Strategien dein Google Maps Ranking verbesserst und mehr lokale Kunden gewinnst.",
      category: "Local SEO",
    },
    en: {
      title: "Improve Google Maps Ranking: The Ultimate Guide 2026",
      metaTitle: "Improve Google Maps Ranking: Ultimate Guide 2026",
      metaDescription: "Improve your Google Maps ranking in 7 steps. Local SEO strategies that actually work. Get more customers now!",
      excerpt: "Learn how to improve your Google Maps ranking with proven strategies and win more local customers.",
      category: "Local SEO",
    },
    readingTime: 8,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📍",
    keywords: ["google maps ranking", "local seo", "google maps optimization"],
    featured: true
  },
  {
    slug: "google-bewertungen-bekommen",
    de: {
      title: "Google Bewertungen bekommen: 7 bewährte Strategien",
      metaTitle: "Google Bewertungen bekommen: 7 Strategien für 2026",
      metaDescription: "So bekommst du mehr Google Bewertungen! 7 ethische Strategien für mehr Rezensionen. Mit Vorlagen und QR-Code Tipps.",
      excerpt: "Lerne 7 bewährte Methoden, um mehr authentische Google Bewertungen von zufriedenen Kunden zu erhalten.",
      category: "Bewertungen",
    },
    en: {
      title: "Get Google Reviews: 7 Proven Strategies",
      metaTitle: "Get Google Reviews: 7 Strategies for 2026",
      metaDescription: "Get more Google reviews! 7 ethical strategies for more reviews. With templates and QR code tips.",
      excerpt: "Learn 7 proven methods to get more authentic Google reviews from satisfied customers.",
      category: "Reviews",
    },
    readingTime: 6,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "⭐",
    keywords: ["google reviews", "get reviews", "customer reviews"]
  },
  {
    slug: "local-seo-fuer-restaurants",
    de: {
      title: "Local SEO für Restaurants: Mehr Gäste durch Google",
      metaTitle: "Local SEO für Restaurants: Mehr Gäste 2026",
      metaDescription: "Local SEO speziell für Restaurants erklärt. Von Speisekarten-Optimierung bis Bilder-Strategie. Jetzt mehr Reservierungen!",
      excerpt: "Speziell für Gastronomen: So optimierst du dein Restaurant für lokale Suchanfragen und füllst mehr Tische.",
      category: "Gastronomie",
    },
    en: {
      title: "Local SEO for Restaurants: More Guests Through Google",
      metaTitle: "Local SEO for Restaurants: More Guests 2026",
      metaDescription: "Local SEO explained specifically for restaurants. From menu optimization to image strategy. Get more reservations now!",
      excerpt: "Specifically for restaurateurs: How to optimize your restaurant for local searches and fill more tables.",
      category: "Restaurants",
    },
    readingTime: 7,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🍽️",
    keywords: ["restaurant seo", "local seo restaurant", "gastro marketing"]
  },
  {
    slug: "google-my-business-optimieren",
    de: {
      title: "Google My Business optimieren: Schritt-für-Schritt Anleitung",
      metaTitle: "Google My Business optimieren: Anleitung 2026",
      metaDescription: "Google My Business Profil optimieren in 10 Schritten. Vollständige Anleitung mit Screenshots. Mehr Sichtbarkeit garantiert!",
      excerpt: "Die komplette Anleitung zur Optimierung deines Google Business Profils für maximale lokale Sichtbarkeit.",
      category: "Google Business",
    },
    en: {
      title: "Optimize Google My Business: Step-by-Step Guide",
      metaTitle: "Optimize Google My Business: Guide 2026",
      metaDescription: "Optimize your Google My Business profile in 10 steps. Complete guide with screenshots. More visibility guaranteed!",
      excerpt: "The complete guide to optimizing your Google Business Profile for maximum local visibility.",
      category: "Google Business",
    },
    readingTime: 9,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📊",
    keywords: ["google my business", "gmb optimize", "google business profile"]
  },
  {
    slug: "lokale-suchmaschinenoptimierung-2026",
    de: {
      title: "Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert",
      metaTitle: "Lokale SEO 2026: Trends & Strategien die funktionieren",
      metaDescription: "Lokale Suchmaschinenoptimierung 2026: Die neuesten Trends, KI-Einfluss und Voice Search. Bleib der Konkurrenz voraus!",
      excerpt: "Die wichtigsten Trends und Strategien für lokale SEO im Jahr 2026. Bleibe deiner Konkurrenz einen Schritt voraus.",
      category: "Trends",
    },
    en: {
      title: "Local Search Engine Optimization 2026: What Really Works",
      metaTitle: "Local SEO 2026: Trends & Strategies That Work",
      metaDescription: "Local search engine optimization 2026: Latest trends, AI influence, and voice search. Stay ahead of the competition!",
      excerpt: "The most important trends and strategies for local SEO in 2026. Stay one step ahead of your competition.",
      category: "Trends",
    },
    readingTime: 10,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🚀",
    keywords: ["local seo", "search engine optimization", "local seo 2026"],
    featured: true
  },
  {
    slug: "nap-konsistenz-local-seo",
    de: {
      title: "NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten",
      metaTitle: "NAP-Konsistenz für Local SEO: Der ultimative Guide 2026",
      metaDescription: "NAP (Name, Adresse, Telefon) konsistent halten für bessere Rankings. Kompletter Guide mit Checkliste und 15+ FAQ.",
      excerpt: "Erfahre, warum einheitliche Unternehmensdaten (NAP) für dein lokales Ranking entscheidend sind.",
      category: "Local SEO",
    },
    en: {
      title: "NAP Consistency: Why Uniform Data Boosts Your Ranking",
      metaTitle: "NAP Consistency for Local SEO: The Ultimate Guide 2026",
      metaDescription: "Keep NAP (Name, Address, Phone) consistent for better rankings. Complete guide with checklist and 15+ FAQ.",
      excerpt: "Learn why consistent business data (NAP) is crucial for your local ranking.",
      category: "Local SEO",
    },
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📋",
    keywords: ["nap consistency", "citations", "business directories", "local seo"]
  },
  {
    slug: "local-seo-handwerker",
    de: {
      title: "Local SEO für Handwerker: Mehr Aufträge durch Google",
      metaTitle: "Local SEO für Handwerker: Komplette Anleitung 2026",
      metaDescription: "Local SEO speziell für Handwerksbetriebe. Von Elektriker bis Maler - so gewinnst du mehr lokale Aufträge durch Google.",
      excerpt: "Speziell für Handwerksbetriebe: So optimierst du deine Online-Präsenz für mehr lokale Kundenanfragen.",
      category: "Branchen",
    },
    en: {
      title: "Local SEO for Contractors: More Jobs Through Google",
      metaTitle: "Local SEO for Contractors: Complete Guide 2026",
      metaDescription: "Local SEO specifically for contractors. From electricians to painters - get more local jobs through Google.",
      excerpt: "Specifically for contractors: How to optimize your online presence for more local customer inquiries.",
      category: "Industries",
    },
    readingTime: 14,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🔧",
    keywords: ["contractor seo", "local seo contractors", "contractor marketing"]
  },
  {
    slug: "local-seo-audit-checkliste",
    de: {
      title: "Local SEO Audit Checkliste: 50+ Punkte für mehr Sichtbarkeit",
      metaTitle: "Local SEO Audit Checkliste 2026: 50+ Prüfpunkte",
      metaDescription: "Komplette Local SEO Audit Checkliste mit 50+ Punkten. Google Business, Website, Citations, Bewertungen - alles prüfen!",
      excerpt: "Die ultimative Checkliste für dein Local SEO Audit. Prüfe alle wichtigen Faktoren für maximale lokale Sichtbarkeit.",
      category: "Strategie",
    },
    en: {
      title: "Local SEO Audit Checklist: 50+ Points for More Visibility",
      metaTitle: "Local SEO Audit Checklist 2026: 50+ Check Points",
      metaDescription: "Complete Local SEO audit checklist with 50+ points. Google Business, website, citations, reviews - check everything!",
      excerpt: "The ultimate checklist for your Local SEO audit. Check all important factors for maximum local visibility.",
      category: "Strategy",
    },
    readingTime: 15,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "✅",
    keywords: ["local seo audit", "seo checklist", "local seo analysis"],
    featured: true
  },

  // === NEUE ARTIKEL: REGIONEN ===
  {
    slug: "local-seo-schweiz",
    de: {
      title: "Local SEO Schweiz: Der komplette Leitfaden für KMUs",
      metaTitle: "Local SEO Schweiz | KMU-Leitfaden 2026",
      metaDescription: "Der nationale Local SEO Guide für Schweizer Unternehmen. Mehrsprachigkeit, Schweizer Verzeichnisse und Google Business für alle Kantone.",
      excerpt: "Wie Schweizer KMUs durch lokale Suchmaschinenoptimierung mehr Kunden in ihrer Region gewinnen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Switzerland: The Complete Guide for SMEs",
      metaTitle: "Local SEO Switzerland | SME Guide 2026",
      metaDescription: "The national Local SEO guide for Swiss companies. Multilingualism, Swiss directories and Google Business for all cantons.",
      excerpt: "How Swiss SMEs can attract more customers in their region through local search engine optimization.",
      category: "Regions"
    },
    readingTime: 22,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🇨🇭",
    keywords: ["local seo schweiz", "schweizer seo", "kmu marketing", "google business schweiz", "lokales marketing schweiz"],
    featured: true
  },
  {
    slug: "local-seo-zuerich",
    de: {
      title: "Local SEO Zürich: So dominierst du den Zürcher Markt",
      metaTitle: "Local SEO Zürich | Kompletter Guide 2026",
      metaDescription: "Der ultimative Local SEO Guide für Zürcher Unternehmen. Stadtteile, Keywords, Verzeichnisse und Strategien für die größte Schweizer Stadt.",
      excerpt: "Wie du als Zürcher Unternehmen bei lokalen Google-Suchen auf Platz 1 kommst.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Zurich: How to Dominate the Zurich Market",
      metaTitle: "Local SEO Zurich | Complete Guide 2026",
      metaDescription: "The ultimate Local SEO guide for Zurich businesses. Districts, keywords, directories and strategies for Switzerland's largest city.",
      excerpt: "How to reach position 1 in local Google searches as a Zurich business.",
      category: "Regions"
    },
    readingTime: 18,
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    icon: "🏔️",
    keywords: ["local seo zürich", "seo zürich", "google ranking zürich", "marketing zürich", "unternehmen zürich"],
    featured: true
  },
  {
    slug: "local-seo-muenchen",
    de: {
      title: "Local SEO München: Der Guide für bayerische Unternehmen",
      metaTitle: "Local SEO München | Bayern-Guide 2026",
      metaDescription: "Local SEO speziell für München und Bayern. Stadtteil-Keywords, lokale Verzeichnisse und Strategien für die bayerische Landeshauptstadt.",
      excerpt: "Von Schwabing bis Giesing: So wirst du in ganz München bei Google gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Munich: The Guide for Bavarian Businesses",
      metaTitle: "Local SEO Munich | Bavaria Guide 2026",
      metaDescription: "Local SEO specifically for Munich and Bavaria. District keywords, local directories and strategies for the Bavarian capital.",
      excerpt: "From Schwabing to Giesing: How to be found throughout Munich on Google.",
      category: "Regions"
    },
    readingTime: 16,
    publishedAt: "2026-01-14",
    updatedAt: "2026-01-14",
    icon: "🥨",
    keywords: ["local seo münchen", "seo münchen", "google ranking münchen", "marketing münchen", "bayerische unternehmen"],
    featured: true
  },

  // === NEUE ARTIKEL: BRANCHEN ===
  {
    slug: "local-seo-aerzte-praxen",
    de: {
      title: "Local SEO für Ärzte & Praxen: Patientengewinnung durch Google",
      metaTitle: "Local SEO für Ärzte | Praxis-Marketing 2026",
      metaDescription: "Wie Arztpraxen durch Local SEO mehr Patienten gewinnen. Arzt-Portale, YMYL-Anforderungen und Google Business für medizinische Praxen.",
      excerpt: "Der komplette Guide für Ärzte, Zahnärzte und medizinische Praxen zur lokalen Patientengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Doctors & Practices: Patient Acquisition Through Google",
      metaTitle: "Local SEO for Doctors | Practice Marketing 2026",
      metaDescription: "How medical practices can attract more patients through Local SEO. Doctor portals, YMYL requirements and Google Business for medical practices.",
      excerpt: "The complete guide for doctors, dentists and medical practices for local patient acquisition.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-01-18",
    updatedAt: "2026-01-18",
    icon: "🏥",
    keywords: ["arzt seo", "praxis marketing", "local seo ärzte", "patientengewinnung", "jameda"],
    featured: false
  },
  {
    slug: "local-seo-anwaelte-kanzleien",
    de: {
      title: "Local SEO für Anwälte & Kanzleien: Mandanten durch Google gewinnen",
      metaTitle: "Local SEO für Anwälte | Kanzlei-Marketing 2026",
      metaDescription: "Wie Anwaltskanzleien durch Local SEO mehr Mandanten gewinnen. Rechtsgebiets-Keywords, Anwaltsportale und E-E-A-T für Juristen.",
      excerpt: "Der Branchenguide für Anwälte: So werden potenzielle Mandanten auf deine Kanzlei aufmerksam.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Lawyers & Law Firms: Winning Clients Through Google",
      metaTitle: "Local SEO for Lawyers | Law Firm Marketing 2026",
      metaDescription: "How law firms can attract more clients through Local SEO. Legal area keywords, lawyer portals and E-E-A-T for legal professionals.",
      excerpt: "The industry guide for lawyers: How potential clients discover your law firm.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-01-30",
    updatedAt: "2026-01-30",
    icon: "⚖️",
    keywords: ["anwalt seo", "kanzlei marketing", "local seo anwälte", "mandantengewinnung", "anwalt.de"],
    featured: false
  },
  {
    slug: "local-seo-hotels",
    de: {
      title: "Local SEO für Hotels & Unterkünfte: Direktbuchungen steigern",
      metaTitle: "Local SEO für Hotels | Mehr Direktbuchungen 2026",
      metaDescription: "Wie Hotels durch Local SEO mehr Direktbuchungen generieren. Google Hotel Ads, Bewertungsmanagement und Strategien gegen Booking.com.",
      excerpt: "So gewinnen Hotels den Kampf gegen Buchungsportale und steigern ihre Direktbuchungen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Hotels & Accommodations: Increase Direct Bookings",
      metaTitle: "Local SEO for Hotels | More Direct Bookings 2026",
      metaDescription: "How hotels can generate more direct bookings through Local SEO. Google Hotel Ads, review management and strategies against Booking.com.",
      excerpt: "How hotels win the battle against booking portals and increase their direct bookings.",
      category: "Industries"
    },
    readingTime: 16,
    publishedAt: "2026-01-24",
    updatedAt: "2026-01-24",
    icon: "🏨",
    keywords: ["hotel seo", "direktbuchungen", "local seo hotels", "google hotel ads", "booking alternative"],
    featured: false
  },
  {
    slug: "local-seo-fitness",
    de: {
      title: "Local SEO für Fitnessstudios & Personal Trainer",
      metaTitle: "Local SEO für Fitness | Studio-Marketing 2026",
      metaDescription: "Wie Fitnessstudios und Personal Trainer durch Local SEO mehr Mitglieder gewinnen. Saisonale Keywords, Vorher-Nachher-Content und Google Business.",
      excerpt: "Der Fitness-Branchenguide: So füllst du dein Studio mit neuen Mitgliedern.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Gyms & Personal Trainers",
      metaTitle: "Local SEO for Fitness | Studio Marketing 2026",
      metaDescription: "How gyms and personal trainers can attract more members through Local SEO. Seasonal keywords, before-after content and Google Business.",
      excerpt: "The fitness industry guide: How to fill your studio with new members.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-02-04",
    updatedAt: "2026-02-04",
    icon: "💪",
    keywords: ["fitnessstudio seo", "personal trainer marketing", "local seo fitness", "mitgliedergewinnung"],
    featured: false
  },

  // === NEUE ARTIKEL: TECHNIK ===
  {
    slug: "schema-markup-local-seo",
    de: {
      title: "Schema Markup für Local SEO: Der Implementierungsguide",
      metaTitle: "Schema Markup Local SEO | Technik-Guide 2026",
      metaDescription: "Kompletter Guide zur Schema Markup Implementierung für lokale Unternehmen. LocalBusiness, FAQ, Reviews und mehr mit Code-Beispielen.",
      excerpt: "Wie du mit strukturierten Daten deine lokale Sichtbarkeit in den Suchergebnissen steigerst.",
      category: "Technik"
    },
    en: {
      title: "Schema Markup for Local SEO: The Implementation Guide",
      metaTitle: "Schema Markup Local SEO | Technical Guide 2026",
      metaDescription: "Complete guide to Schema Markup implementation for local businesses. LocalBusiness, FAQ, Reviews and more with code examples.",
      excerpt: "How to increase your local visibility in search results with structured data.",
      category: "Technical"
    },
    readingTime: 20,
    publishedAt: "2026-01-16",
    updatedAt: "2026-01-16",
    icon: "🏗️",
    keywords: ["schema markup", "strukturierte daten", "local business schema", "rich snippets", "json-ld"],
    featured: false
  },
  {
    slug: "mobile-local-seo",
    de: {
      title: "Mobile Local SEO: Warum 80% der lokalen Suchen mobil sind",
      metaTitle: "Mobile Local SEO | Optimierung 2026",
      metaDescription: "Warum Mobile-First für lokale Unternehmen entscheidend ist. Page Speed, Click-to-Call, Maps-Integration und mobile UX optimieren.",
      excerpt: "So optimierst du deine lokale Präsenz für die mobile Suche – wo die meisten deiner Kunden suchen.",
      category: "Technik"
    },
    en: {
      title: "Mobile Local SEO: Why 80% of Local Searches Are Mobile",
      metaTitle: "Mobile Local SEO | Optimization 2026",
      metaDescription: "Why Mobile-First is crucial for local businesses. Optimize Page Speed, Click-to-Call, Maps integration and mobile UX.",
      excerpt: "How to optimize your local presence for mobile search – where most of your customers are searching.",
      category: "Technical"
    },
    readingTime: 14,
    publishedAt: "2026-01-26",
    updatedAt: "2026-01-26",
    icon: "📱",
    keywords: ["mobile seo", "mobile first", "local seo mobile", "page speed", "mobile ux"],
    featured: false
  },
  {
    slug: "google-maps-seo-ranking-faktoren",
    de: {
      title: "Google Maps SEO 2026: Die 20 wichtigsten Ranking-Faktoren",
      metaTitle: "Google Maps Ranking-Faktoren | SEO 2026",
      metaDescription: "Die 20 wichtigsten Ranking-Faktoren für Google Maps im Detail erklärt. Proximity, Relevance, Prominence und alle Signale, die zählen.",
      excerpt: "Verstehe genau, welche Faktoren dein Google Maps Ranking beeinflussen und wie du sie optimierst.",
      category: "Local SEO"
    },
    en: {
      title: "Google Maps SEO 2026: The 20 Most Important Ranking Factors",
      metaTitle: "Google Maps Ranking Factors | SEO 2026",
      metaDescription: "The 20 most important ranking factors for Google Maps explained in detail. Proximity, Relevance, Prominence and all the signals that matter.",
      excerpt: "Understand exactly which factors influence your Google Maps ranking and how to optimize them.",
      category: "Local SEO"
    },
    readingTime: 18,
    publishedAt: "2026-01-28",
    updatedAt: "2026-01-28",
    icon: "🗺️",
    keywords: ["google maps ranking", "ranking faktoren", "local pack", "maps seo", "proximity relevance prominence"],
    featured: true
  },

  // === NEUE ARTIKEL: STRATEGIE ===
  {
    slug: "local-link-building",
    de: {
      title: "Local Link Building: Backlinks für lokale Unternehmen aufbauen",
      metaTitle: "Local Link Building | Backlinks 2026",
      metaDescription: "Wie lokale Unternehmen qualitative Backlinks aufbauen. Sponsoring, Vereine, lokale Presse und kreative Strategien für mehr Authority.",
      excerpt: "Die besten Strategien, um als lokales Unternehmen wertvolle Backlinks zu gewinnen.",
      category: "Strategie"
    },
    en: {
      title: "Local Link Building: Building Backlinks for Local Businesses",
      metaTitle: "Local Link Building | Backlinks 2026",
      metaDescription: "How local businesses build quality backlinks. Sponsoring, associations, local press and creative strategies for more authority.",
      excerpt: "The best strategies for local businesses to gain valuable backlinks.",
      category: "Strategy"
    },
    readingTime: 16,
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    icon: "🔗",
    keywords: ["local link building", "lokale backlinks", "linkaufbau", "backlink strategie", "local authority"],
    featured: false
  },
  {
    slug: "negative-google-bewertungen",
    de: {
      title: "Negative Google Bewertungen: So reagierst du professionell",
      metaTitle: "Negative Bewertungen beantworten | Guide 2026",
      metaDescription: "Wie du auf negative Google Bewertungen professionell reagierst. Antwort-Strategien, Löschung beantragen und Prävention für dein Unternehmen.",
      excerpt: "Die Kunst, aus negativen Bewertungen positive Kundenerlebnisse zu machen.",
      category: "Bewertungen"
    },
    en: {
      title: "Negative Google Reviews: How to Respond Professionally",
      metaTitle: "Responding to Negative Reviews | Guide 2026",
      metaDescription: "How to respond professionally to negative Google reviews. Response strategies, requesting deletion and prevention for your business.",
      excerpt: "The art of turning negative reviews into positive customer experiences.",
      category: "Reviews"
    },
    readingTime: 12,
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-20",
    icon: "😤",
    keywords: ["negative bewertungen", "bewertungen beantworten", "reputation management", "schlechte bewertung", "bewertung löschen"],
    featured: false
  },
  {
    slug: "local-content-marketing",
    de: {
      title: "Local Content Marketing: Content-Strategie für lokale Unternehmen",
      metaTitle: "Local Content Marketing | Strategie 2026",
      metaDescription: "Wie lokale Unternehmen durch gezieltes Content Marketing mehr Kunden gewinnen. Lokale Guides, Stadtteil-Seiten und Community-Content.",
      excerpt: "Content-Ideen speziell für lokale Unternehmen, die wirklich Kunden bringen.",
      category: "Strategie"
    },
    en: {
      title: "Local Content Marketing: Content Strategy for Local Businesses",
      metaTitle: "Local Content Marketing | Strategy 2026",
      metaDescription: "How local businesses attract more customers through targeted content marketing. Local guides, district pages and community content.",
      excerpt: "Content ideas specifically for local businesses that actually bring customers.",
      category: "Strategy"
    },
    readingTime: 17,
    publishedAt: "2026-01-26",
    updatedAt: "2026-01-26",
    icon: "✍️",
    keywords: ["local content", "content marketing", "lokaler content", "stadtteil seiten", "lokale guides"],
    featured: false
  },

  // === NEUE ARTIKEL: CASE STUDIES ===
  {
    slug: "local-seo-case-study-baecker",
    de: {
      title: "Local SEO Case Study: Wie ein Bäcker 200% mehr Kunden gewann",
      metaTitle: "Local SEO Case Study Bäcker | Erfolgsgeschichte",
      metaDescription: "Echte Case Study: Wie eine traditionelle Bäckerei durch Local SEO ihre Kundenfrequenz verdreifachte. Mit Zahlen, Maßnahmen und Learnings.",
      excerpt: "Eine authentische Erfolgsgeschichte: Von unsichtbar bei Google zu Platz 1 im Local Pack.",
      category: "Case Study"
    },
    en: {
      title: "Local SEO Case Study: How a Bakery Gained 200% More Customers",
      metaTitle: "Local SEO Case Study Bakery | Success Story",
      metaDescription: "Real case study: How a traditional bakery tripled its customer frequency through Local SEO. With numbers, measures and learnings.",
      excerpt: "An authentic success story: From invisible on Google to position 1 in the Local Pack.",
      category: "Case Study"
    },
    readingTime: 10,
    publishedAt: "2026-02-02",
    updatedAt: "2026-02-02",
    icon: "🥐",
    keywords: ["local seo case study", "erfolgsgeschichte", "bäckerei marketing", "local seo beispiel", "kundengewinnung"],
    featured: true
  },
  {
    slug: "local-seo-fehler",
    de: {
      title: "Local SEO Fehler: 15 Gründe warum du nicht gefunden wirst",
      metaTitle: "Local SEO Fehler vermeiden | 15 Probleme 2026",
      metaDescription: "Die 15 häufigsten Local SEO Fehler und wie du sie vermeidest. Mit interaktivem Diagnose-Quiz und Lösungen für jedes Problem.",
      excerpt: "Finde heraus, welche Fehler dich unsichtbar machen – und wie du sie sofort behebst.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Mistakes: 15 Reasons Why You're Not Found",
      metaTitle: "Avoid Local SEO Mistakes | 15 Problems 2026",
      metaDescription: "The 15 most common Local SEO mistakes and how to avoid them. With interactive diagnosis quiz and solutions for each problem.",
      excerpt: "Find out which mistakes are making you invisible – and how to fix them immediately.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    icon: "🚫",
    keywords: ["local seo fehler", "seo probleme", "nicht gefunden werden", "seo diagnose", "ranking probleme"],
    featured: true
  }
];

// Resolve article content based on language
export const resolveArticle = (article: BlogArticle, language: Language): ResolvedBlogArticle => {
  const content = article[language];
  return {
    slug: article.slug,
    title: content.title,
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    excerpt: content.excerpt,
    category: content.category,
    readingTime: article.readingTime,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    icon: article.icon,
    keywords: article.keywords,
    featured: article.featured,
  };
};

export const getArticleBySlug = (slug: string, language: Language = "de"): ResolvedBlogArticle | undefined => {
  const article = blogArticles.find(a => a.slug === slug);
  if (!article) return undefined;
  return resolveArticle(article, language);
};

export const getAllArticles = (language: Language = "de"): ResolvedBlogArticle[] => {
  return blogArticles.map(a => resolveArticle(a, language));
};

export const getRelatedArticles = (currentSlug: string, count: number = 3, language: Language = "de"): ResolvedBlogArticle[] => {
  const current = blogArticles.find(a => a.slug === currentSlug);
  if (!current) {
    return blogArticles.filter(a => a.slug !== currentSlug).slice(0, count).map(a => resolveArticle(a, language));
  }
  
  const currentCategory = current[language].category;
  
  // Prioritize same category, then different categories
  const sameCategory = blogArticles.filter(
    a => a.slug !== currentSlug && a[language].category === currentCategory
  );
  const otherCategory = blogArticles.filter(
    a => a.slug !== currentSlug && a[language].category !== currentCategory
  );
  
  return [...sameCategory, ...otherCategory].slice(0, count).map(a => resolveArticle(a, language));
};

export const getCategories = (language: Language = "de"): string[] => {
  const categories = new Set(blogArticles.map(a => a[language].category));
  return Array.from(categories);
};

export const getArticleCountByCategory = (language: Language = "de"): Record<string, number> => {
  return blogArticles.reduce((acc, article) => {
    const category = article[language].category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};
