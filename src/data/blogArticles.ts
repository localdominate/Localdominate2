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
  // === PILLAR PAGE: ULTIMATE GUIDE LOCAL SEO ===
  {
    slug: "ultimate-guide-local-seo",
    de: {
      title: "Local SEO: Der ultimative Leitfaden für lokale Unternehmen 2026",
      metaTitle: "Local SEO Guide 2026: Komplett-Anleitung für Top-Rankings",
      metaDescription: "Der umfassendste Local-SEO-Guide im DACH-Raum: Ranking-Faktoren, Google Business Profil, Bewertungen, NAP, Schema Markup & 10-Schritte-Strategie. Mit Beispielen aus DE, AT & CH.",
      excerpt: "Alles über Local SEO in einem Guide: Von Google Business über Ranking-Faktoren bis zur 10-Schritte-Strategie — mit Praxisbeispielen aus Deutschland, Österreich und der Schweiz.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO: The Ultimate Guide for Local Businesses 2026",
      metaTitle: "Local SEO Guide 2026: Complete Guide for Top Rankings",
      metaDescription: "The most comprehensive Local SEO guide for the DACH region: ranking factors, Google Business Profile, reviews, NAP, Schema Markup & 10-step strategy.",
      excerpt: "Everything about Local SEO in one guide: From Google Business to ranking factors and a 10-step strategy — with examples from Germany, Austria and Switzerland.",
      category: "Strategy"
    },
    readingTime: 25,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🏆",
    keywords: ["local seo", "local seo guide", "lokale suchmaschinenoptimierung", "local seo strategie", "google business profil", "local seo ranking faktoren", "local seo dach"],
    featured: true
  },
  // === FEATURED: KOSTENLOSES SEO GUIDE ===
  {
    slug: "kostenloses-seo-guide",
    de: {
      title: "Kostenloses SEO: Der ultimative Guide für Einsteiger 2026",
      metaTitle: "Kostenloses SEO: 50+ Gratis-Strategien & Tools | Guide 2026",
      metaDescription: "Lerne SEO komplett kostenlos! 50+ Gratis-Tools, Schritt-für-Schritt Anleitungen und bewährte Strategien. Der umfassendste kostenlose SEO-Guide im deutschsprachigen Raum.",
      excerpt: "Alles was du über SEO wissen musst - ohne einen Cent auszugeben. Von Google Business bis Technical SEO, mit 50+ kostenlosen Tools.",
      category: "Strategie"
    },
    en: {
      title: "Free SEO: The Ultimate Beginner's Guide 2026",
      metaTitle: "Free SEO: 50+ Free Strategies & Tools | Guide 2026",
      metaDescription: "Learn SEO completely free! 50+ free tools, step-by-step instructions and proven strategies. The most comprehensive free SEO guide.",
      excerpt: "Everything you need to know about SEO - without spending a cent. From Google Business to Technical SEO.",
      category: "Strategy"
    },
    readingTime: 28,
    publishedAt: "2026-01-09",
    updatedAt: "2026-01-09",
    icon: "💡",
    keywords: ["kostenloses seo", "seo kostenlos", "gratis seo tools", "seo für anfänger", "local seo kostenlos", "seo lernen"],
    featured: true
  },
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
  {
    slug: "google-maps-spam-erkennen",
    de: {
      title: "Google Maps Spam erkennen & melden: Der komplette Guide",
      metaTitle: "Google Maps Spam erkennen & melden | Anleitung 2026",
      metaDescription: "Lerne die 8 häufigsten Spam-Arten auf Google Maps zu erkennen und effektiv zu melden. Mit Checklisten, Beispielen und Schritt-für-Schritt Anleitungen.",
      excerpt: "Gefälschte Einträge, Keyword-Stuffing, Fake-Bewertungen: So erkennst und meldest du Google Maps Spam und schützt dein eigenes Profil.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Spam Detection & Reporting: Complete Guide",
      metaTitle: "Google Maps Spam Detection & Reporting | Guide 2026",
      metaDescription: "Learn to identify the 8 most common Google Maps spam types and report them effectively. With checklists, examples, and step-by-step instructions.",
      excerpt: "Fake listings, keyword stuffing, fake reviews: How to detect and report Google Maps spam and protect your own profile.",
      category: "Google Maps"
    },
    readingTime: 14,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🛡️",
    keywords: ["google maps spam", "spam melden", "fake bewertungen", "keyword stuffing", "google business spam", "spam erkennen"],
    featured: false
  },
  {
    slug: "google-maps-konkurrenzanalyse",
    de: {
      title: "Google Maps Konkurrenzanalyse: So analysierst du Top-Rankings",
      metaTitle: "Google Maps Konkurrenzanalyse | Framework & Tools 2026",
      metaDescription: "Systematische Google Maps Konkurrenzanalyse in 5 Schritten. Mit gewichtetem Vergleichs-Template, kostenlosen Tools und konkretem Aktionsplan.",
      excerpt: "Lerne, wie du die Google Maps Rankings deiner Konkurrenten systematisch analysierst und gezielte Maßnahmen ableitest, um sie zu überholen.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Competitor Analysis: How to Analyze Top Rankings",
      metaTitle: "Google Maps Competitor Analysis | Framework & Tools 2026",
      metaDescription: "Systematic Google Maps competitor analysis in 5 steps. With weighted comparison template, free tools, and concrete action plan.",
      excerpt: "Learn how to systematically analyze your competitors' Google Maps rankings and derive targeted actions to outrank them.",
      category: "Google Maps"
    },
    readingTime: 16,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🔍",
    keywords: ["konkurrenzanalyse", "competitor analysis", "google maps", "local pack", "ranking analyse", "wettbewerber"],
    featured: false
  },
  {
    slug: "google-maps-ranking-case-studies",
    de: {
      title: "Google Maps Ranking Case Studies: 6 Branchen, 6 Erfolge",
      metaTitle: "Google Maps Case Studies | 6 Branchen-Erfolgsgeschichten 2026",
      metaDescription: "6 echte Google Maps Ranking Case Studies aus Gastronomie, Handwerk, Gesundheit, Recht, Beauty und Automotive. Mit konkreten Zahlen und Maßnahmen.",
      excerpt: "Von unsichtbar zu Platz 1: Wie Unternehmen aus 6 verschiedenen Branchen ihr Google Maps Ranking dramatisch verbessert haben.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps Ranking Case Studies: 6 Industries, 6 Success Stories",
      metaTitle: "Google Maps Case Studies | 6 Industry Success Stories 2026",
      metaDescription: "6 real Google Maps ranking case studies from gastronomy, trades, healthcare, legal, beauty, and automotive. With concrete numbers and measures.",
      excerpt: "From invisible to #1: How businesses from 6 different industries dramatically improved their Google Maps ranking.",
      category: "Google Maps"
    },
    readingTime: 18,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🏆",
    keywords: ["case study", "google maps ranking", "local seo erfolg", "ranking verbessern", "fallstudie", "branchenvergleich"],
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
  },

  // === NEUER MEGA-ARTIKEL: DÖNER ===
  {
    slug: "local-seo-doener-kebab-imbiss",
    de: {
      title: "Local SEO für Döner & Kebab-Imbisse: Der ultimative Marketing-Guide 2026",
      metaTitle: "Local SEO für Döner-Läden | Der ultimative Kebab-Marketing Guide 2026",
      metaDescription: "Der längste SEO-Guide für Döner-Läden im deutschsprachigen Internet. Keywords, Google Business, Bewertungen, Lieferportale, Social Media und mehr. Mit 3 interaktiven Tools!",
      excerpt: "Von Keywords über Bewertungen bis Lieferportale: Alles was Döner-Imbisse brauchen, um bei Google gefunden zu werden.",
      category: "Gastronomie"
    },
    en: {
      title: "Local SEO for Döner & Kebab Shops: The Ultimate Marketing Guide 2026",
      metaTitle: "Local SEO for Döner Shops | The Ultimate Kebab Marketing Guide 2026",
      metaDescription: "The longest SEO guide for Döner shops on the internet. Keywords, Google Business, reviews, delivery platforms, social media and more. With 3 interactive tools!",
      excerpt: "From keywords to reviews to delivery platforms: Everything Döner shops need to be found on Google.",
      category: "Restaurants"
    },
    readingTime: 25,
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",
    icon: "🥙",
    keywords: ["döner seo", "kebab marketing", "imbiss google", "döner laden mehr kunden", "döner bewertungen", "döner lieferando", "türkisches restaurant seo"],
    featured: true
  },
  {
    slug: "local-seo-friseursalon-beauty",
    de: {
      title: "Local SEO für Friseursalons & Beauty-Studios: Der ultimative Guide mit Buchungsintegration 2026",
      metaTitle: "Local SEO für Friseure & Beauty-Studios | Der ultimative Guide 2026",
      metaDescription: "Der längste SEO-Guide für Friseursalons, Kosmetikstudios & Barbershops. Mit Buchungsintegration, Keyword-Generator und Portfolio-Tipps. 6.000+ Worte!",
      excerpt: "Von Keywords über Buchungssysteme bis Social Media: Alles was Friseure und Beauty-Studios brauchen, um bei Google gefunden zu werden.",
      category: "Beauty & Wellness"
    },
    en: {
      title: "Local SEO for Hair Salons & Beauty Studios: The Ultimate Guide with Booking Integration 2026",
      metaTitle: "Local SEO for Hair Salons & Beauty Studios | The Ultimate Guide 2026",
      metaDescription: "The longest SEO guide for hair salons, beauty studios & barbershops. With booking integration, keyword generator and portfolio tips. 6,000+ words!",
      excerpt: "From keywords to booking systems to social media: Everything hair salons and beauty studios need to be found on Google.",
      category: "Beauty & Wellness"
    },
    readingTime: 25,
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",
    icon: "💇",
    keywords: ["friseur seo", "beauty marketing", "friseursalon google", "kosmetikstudio marketing", "friseur mehr kunden", "buchungssystem friseur"],
    featured: true
  },

  // === CONTENT PLAN: JANUAR - APRIL 2026 (55 neue Artikel) ===

  // BRANCHEN-SPEZIFISCHE GUIDES
  {
    slug: "local-seo-immobilienmakler",
    de: {
      title: "Local SEO für Immobilienmakler: Objektanfragen durch Google",
      metaTitle: "Local SEO für Immobilienmakler | Mehr Anfragen 2026",
      metaDescription: "Wie Immobilienmakler durch Local SEO mehr Objektanfragen generieren. Stadtteil-Keywords, Immobilienportale und Google Business für Makler.",
      excerpt: "So werden Immobilienkäufer und Verkäufer auf Ihr Maklerbüro aufmerksam.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Real Estate Agents: Property Inquiries Through Google",
      metaTitle: "Local SEO for Real Estate Agents | More Inquiries 2026",
      metaDescription: "How real estate agents generate more property inquiries through Local SEO. District keywords, property portals and Google Business for agents.",
      excerpt: "How property buyers and sellers discover your real estate office.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-01-11",
    updatedAt: "2026-01-11",
    icon: "🏠",
    keywords: ["immobilienmakler seo", "makler marketing", "local seo immobilien", "objektanfragen"],
    featured: false
  },
  {
    slug: "local-seo-steuerberater",
    de: {
      title: "Local SEO für Steuerberater & Buchhalter: Mandanten gewinnen",
      metaTitle: "Local SEO für Steuerberater | Mandantengewinnung 2026",
      metaDescription: "Wie Steuerberater und Buchhalter durch Local SEO neue Mandanten gewinnen. Steuer-Keywords, Branchenportale und E-E-A-T für Finanzexperten.",
      excerpt: "Der Branchenguide für Steuerberater: So finden potenzielle Mandanten Ihre Kanzlei.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Tax Consultants & Accountants: Winning Clients",
      metaTitle: "Local SEO for Tax Consultants | Client Acquisition 2026",
      metaDescription: "How tax consultants and accountants win new clients through Local SEO. Tax keywords, industry portals and E-E-A-T for financial experts.",
      excerpt: "The industry guide for tax consultants: How potential clients find your practice.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    icon: "📊",
    keywords: ["steuerberater seo", "buchhalter marketing", "local seo steuerberater", "mandantengewinnung"],
    featured: false
  },
  {
    slug: "local-seo-autowerkstatt",
    de: {
      title: "Local SEO für Autowerkstätten & KFZ-Betriebe",
      metaTitle: "Local SEO für Autowerkstätten | KFZ Marketing 2026",
      metaDescription: "Wie Autowerkstätten durch Local SEO mehr Kunden gewinnen. Notfall-Keywords, Google Business für KFZ-Betriebe und Bewertungsstrategien.",
      excerpt: "So wird Ihre Werkstatt zur ersten Wahl bei Autoproblemen in der Region.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Auto Repair Shops & Car Dealerships",
      metaTitle: "Local SEO for Auto Repair Shops | Automotive Marketing 2026",
      metaDescription: "How auto repair shops win more customers through Local SEO. Emergency keywords, Google Business for automotive businesses and review strategies.",
      excerpt: "How your workshop becomes the first choice for car problems in the region.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-19",
    updatedAt: "2026-01-19",
    icon: "🚗",
    keywords: ["autowerkstatt seo", "kfz marketing", "local seo werkstatt", "autohaus seo"],
    featured: false
  },
  {
    slug: "local-seo-tierarzt",
    de: {
      title: "Local SEO für Tierärzte & Tierpraxen",
      metaTitle: "Local SEO für Tierärzte | Praxis-Marketing 2026",
      metaDescription: "Wie Tierarztpraxen durch Local SEO mehr Patienten gewinnen. Notfall-Keywords, Tier-Portale und emotionales Content-Marketing.",
      excerpt: "Der komplette Guide für Tierärzte zur lokalen Patientengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Veterinarians & Animal Clinics",
      metaTitle: "Local SEO for Veterinarians | Practice Marketing 2026",
      metaDescription: "How veterinary practices win more patients through Local SEO. Emergency keywords, pet portals and emotional content marketing.",
      excerpt: "The complete guide for veterinarians for local patient acquisition.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-01-23",
    updatedAt: "2026-01-23",
    icon: "🐕",
    keywords: ["tierarzt seo", "tierpraxis marketing", "local seo tierarzt", "veterinär marketing"],
    featured: false
  },
  {
    slug: "local-seo-fotograf",
    de: {
      title: "Local SEO für Fotografen: Mehr Buchungen durch Google",
      metaTitle: "Local SEO für Fotografen | Mehr Buchungen 2026",
      metaDescription: "Wie Fotografen durch Local SEO mehr Buchungen generieren. Portfolio-SEO, Hochzeits-Keywords und Google Business für Fotografen.",
      excerpt: "So werden Sie der gefragteste Fotograf in Ihrer Region.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Photographers: More Bookings Through Google",
      metaTitle: "Local SEO for Photographers | More Bookings 2026",
      metaDescription: "How photographers generate more bookings through Local SEO. Portfolio SEO, wedding keywords and Google Business for photographers.",
      excerpt: "How to become the most sought-after photographer in your region.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-29",
    updatedAt: "2026-01-29",
    icon: "📸",
    keywords: ["fotograf seo", "fotografen marketing", "local seo fotograf", "hochzeitsfotograf seo"],
    featured: false
  },
  {
    slug: "local-seo-yoga-studios",
    de: {
      title: "Local SEO für Yoga-Studios & Pilates",
      metaTitle: "Local SEO für Yoga-Studios | Mehr Teilnehmer 2026",
      metaDescription: "Wie Yoga- und Pilates-Studios durch Local SEO mehr Teilnehmer gewinnen. Kurs-Keywords, Wellness-Content und Community-Building.",
      excerpt: "Der Guide für Yoga-Studios: So füllen Sie Ihre Kurse mit lokalen Suchenden.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Yoga Studios & Pilates",
      metaTitle: "Local SEO for Yoga Studios | More Participants 2026",
      metaDescription: "How yoga and pilates studios win more participants through Local SEO. Course keywords, wellness content and community building.",
      excerpt: "The guide for yoga studios: How to fill your classes with local searchers.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-02-02",
    updatedAt: "2026-02-02",
    icon: "🧘",
    keywords: ["yoga studio seo", "pilates marketing", "local seo yoga", "wellness studio seo"],
    featured: false
  },
  {
    slug: "local-seo-tattoo-studios",
    de: {
      title: "Local SEO für Tattoo-Studios & Piercing",
      metaTitle: "Local SEO für Tattoo-Studios | Mehr Kunden 2026",
      metaDescription: "Wie Tattoo- und Piercing-Studios durch Local SEO mehr Kunden gewinnen. Portfolio-Optimierung, Style-Keywords und Instagram-Integration.",
      excerpt: "Der ultimative Guide für Tattoo-Künstler zur lokalen Kundengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Tattoo Studios & Piercing",
      metaTitle: "Local SEO for Tattoo Studios | More Customers 2026",
      metaDescription: "How tattoo and piercing studios win more customers through Local SEO. Portfolio optimization, style keywords and Instagram integration.",
      excerpt: "The ultimate guide for tattoo artists for local customer acquisition.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-02-08",
    updatedAt: "2026-02-08",
    icon: "🎨",
    keywords: ["tattoo studio seo", "piercing marketing", "local seo tattoo", "tattoo künstler seo"],
    featured: false
  },
  {
    slug: "local-seo-apotheken",
    de: {
      title: "Local SEO für Apotheken: Lokale Gesundheitsversorgung",
      metaTitle: "Local SEO für Apotheken | Gesundheits-Marketing 2026",
      metaDescription: "Wie Apotheken durch Local SEO mehr Kunden gewinnen. Notdienst-Keywords, Gesundheitsberatung-Content und lokale Positionierung.",
      excerpt: "Der Guide für Apotheken: So werden Sie zur Stamm-Apotheke in Ihrer Region.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Pharmacies: Local Healthcare",
      metaTitle: "Local SEO for Pharmacies | Health Marketing 2026",
      metaDescription: "How pharmacies win more customers through Local SEO. Emergency service keywords, health advice content and local positioning.",
      excerpt: "The guide for pharmacies: How to become the go-to pharmacy in your region.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-02-14",
    updatedAt: "2026-02-14",
    icon: "💊",
    keywords: ["apotheke seo", "apotheken marketing", "local seo apotheke", "notdienst apotheke"],
    featured: false
  },
  {
    slug: "local-seo-fahrschule",
    de: {
      title: "Local SEO für Fahrschulen: Mehr Fahrschüler gewinnen",
      metaTitle: "Local SEO für Fahrschulen | Mehr Fahrschüler 2026",
      metaDescription: "Wie Fahrschulen durch Local SEO mehr Fahrschüler gewinnen. Führerschein-Keywords, Preisgestaltung und Bewertungsmanagement.",
      excerpt: "Der komplette Guide für Fahrschulen zur lokalen Schülergewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Driving Schools: Win More Students",
      metaTitle: "Local SEO for Driving Schools | More Students 2026",
      metaDescription: "How driving schools win more students through Local SEO. License keywords, pricing and review management.",
      excerpt: "The complete guide for driving schools for local student acquisition.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    icon: "🚦",
    keywords: ["fahrschule seo", "fahrschüler gewinnen", "local seo fahrschule", "führerschein marketing"],
    featured: false
  },
  {
    slug: "local-seo-hochzeitsdienstleister",
    de: {
      title: "Local SEO für Hochzeitsdienstleister: Florist bis DJ",
      metaTitle: "Local SEO Hochzeitsdienstleister | Mehr Buchungen 2026",
      metaDescription: "Wie Hochzeitsdienstleister durch Local SEO mehr Buchungen bekommen. Saisonale Keywords, Hochzeitsportale und Emotionale Bildsprache.",
      excerpt: "Der Guide für alle Hochzeitsdienstleister: Floristen, DJs, Caterer und mehr.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Wedding Vendors: Florist to DJ",
      metaTitle: "Local SEO Wedding Vendors | More Bookings 2026",
      metaDescription: "How wedding vendors get more bookings through Local SEO. Seasonal keywords, wedding portals and emotional imagery.",
      excerpt: "The guide for all wedding vendors: Florists, DJs, caterers and more.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-02-26",
    updatedAt: "2026-02-26",
    icon: "💒",
    keywords: ["hochzeitsdienstleister seo", "hochzeit marketing", "local seo hochzeit", "wedding vendor seo"],
    featured: false
  },
  {
    slug: "local-seo-umzugsunternehmen",
    de: {
      title: "Local SEO für Umzugsunternehmen & Entrümpelungen",
      metaTitle: "Local SEO für Umzugsunternehmen | Mehr Aufträge 2026",
      metaDescription: "Wie Umzugsunternehmen durch Local SEO mehr Aufträge generieren. Umzugs-Keywords, Preisrechner-Integration und Bewertungsstrategien.",
      excerpt: "Der Guide für Umzugsunternehmen: So bekommen Sie mehr Anfragen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Moving Companies & Clearances",
      metaTitle: "Local SEO for Moving Companies | More Jobs 2026",
      metaDescription: "How moving companies generate more jobs through Local SEO. Moving keywords, price calculator integration and review strategies.",
      excerpt: "The guide for moving companies: How to get more inquiries.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-03-04",
    updatedAt: "2026-03-04",
    icon: "📦",
    keywords: ["umzugsunternehmen seo", "umzug marketing", "local seo umzug", "entrümpelung seo"],
    featured: false
  },
  {
    slug: "local-seo-reinigungsunternehmen",
    de: {
      title: "Local SEO für Reinigungsunternehmen & Gebäudereinigung",
      metaTitle: "Local SEO für Reinigungsunternehmen | Mehr Kunden 2026",
      metaDescription: "Wie Reinigungsunternehmen durch Local SEO mehr Kunden gewinnen. Service-Keywords, B2B-Content und lokale Positionierung.",
      excerpt: "Der Guide für Reinigungsunternehmen: So gewinnen Sie mehr Aufträge.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Cleaning Companies & Building Maintenance",
      metaTitle: "Local SEO for Cleaning Companies | More Customers 2026",
      metaDescription: "How cleaning companies win more customers through Local SEO. Service keywords, B2B content and local positioning.",
      excerpt: "The guide for cleaning companies: How to win more contracts.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    icon: "🧹",
    keywords: ["reinigungsunternehmen seo", "gebäudereinigung marketing", "local seo reinigung", "putzfirma seo"],
    featured: false
  },
  {
    slug: "local-seo-sprachschule",
    de: {
      title: "Local SEO für Sprachschulen & Nachhilfe-Institute",
      metaTitle: "Local SEO für Sprachschulen | Mehr Schüler 2026",
      metaDescription: "Wie Sprachschulen durch Local SEO mehr Schüler gewinnen. Sprach-Keywords, Kursangebote und saisonale Kampagnen.",
      excerpt: "Der Guide für Sprachschulen: So füllen Sie Ihre Kurse.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Language Schools & Tutoring Institutes",
      metaTitle: "Local SEO for Language Schools | More Students 2026",
      metaDescription: "How language schools win more students through Local SEO. Language keywords, course offerings and seasonal campaigns.",
      excerpt: "The guide for language schools: How to fill your courses.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-16",
    icon: "📚",
    keywords: ["sprachschule seo", "nachhilfe marketing", "local seo sprachschule", "bildung seo"],
    featured: false
  },
  {
    slug: "local-seo-baeckerei-konditorei",
    de: {
      title: "Local SEO für Bäckereien & Konditoreien",
      metaTitle: "Local SEO für Bäckereien | Mehr Kunden 2026",
      metaDescription: "Wie Bäckereien durch Local SEO mehr Kunden gewinnen. Frische-Keywords, Öffnungszeiten-Optimierung und lokale Traditionspositionierung.",
      excerpt: "Der Guide für Bäckereien: So werden Sie zur Lieblingsbäckerei im Viertel.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Bakeries & Pastry Shops",
      metaTitle: "Local SEO for Bakeries | More Customers 2026",
      metaDescription: "How bakeries win more customers through Local SEO. Freshness keywords, opening hours optimization and local tradition positioning.",
      excerpt: "The guide for bakeries: How to become the favorite bakery in the neighborhood.",
      category: "Industries"
    },
    readingTime: 11,
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    icon: "🥖",
    keywords: ["bäckerei seo", "konditorei marketing", "local seo bäckerei", "handwerksbäcker seo"],
    featured: false
  },
  {
    slug: "local-seo-cafe-coffeeshop",
    de: {
      title: "Local SEO für Cafés & Coffee Shops",
      metaTitle: "Local SEO für Cafés | Mehr Gäste 2026",
      metaDescription: "Wie Cafés durch Local SEO mehr Gäste gewinnen. Atmosphären-Keywords, Instagram-Integration und Arbeitsplatz-Positionierung.",
      excerpt: "Der Guide für Cafés: So werden Sie zum Treffpunkt der Nachbarschaft.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Cafés & Coffee Shops",
      metaTitle: "Local SEO for Cafés | More Guests 2026",
      metaDescription: "How cafés win more guests through Local SEO. Atmosphere keywords, Instagram integration and workspace positioning.",
      excerpt: "The guide for cafés: How to become the neighborhood meeting spot.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    icon: "☕",
    keywords: ["cafe seo", "coffeeshop marketing", "local seo cafe", "kaffee seo"],
    featured: false
  },

  // REGIONALE GUIDES
  {
    slug: "local-seo-hamburg",
    de: {
      title: "Local SEO Hamburg: Der Hanseatische Marketing-Guide",
      metaTitle: "Local SEO Hamburg | Der Hansestadt-Guide 2026",
      metaDescription: "Local SEO speziell für Hamburg. Stadtteil-Keywords von Altona bis Winterhude, Hamburger Verzeichnisse und Strategien für die Elbmetropole.",
      excerpt: "Von der Reeperbahn bis zur Hafencity: So werden Sie in Hamburg gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Hamburg: The Hanseatic Marketing Guide",
      metaTitle: "Local SEO Hamburg | The Hanseatic City Guide 2026",
      metaDescription: "Local SEO specifically for Hamburg. District keywords from Altona to Winterhude, Hamburg directories and strategies for the Elbe metropolis.",
      excerpt: "From Reeperbahn to Hafencity: How to be found in Hamburg.",
      category: "Regions"
    },
    readingTime: 16,
    publishedAt: "2026-01-13",
    updatedAt: "2026-01-13",
    icon: "⚓",
    keywords: ["local seo hamburg", "seo hamburg", "marketing hamburg", "hamburger unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-frankfurt",
    de: {
      title: "Local SEO Frankfurt: Finanzmetropole richtig nutzen",
      metaTitle: "Local SEO Frankfurt | Finance-Hub Guide 2026",
      metaDescription: "Local SEO speziell für Frankfurt am Main. B2B-Keywords, Finanzdienstleister-Strategien und lokale Sichtbarkeit in der Mainmetropole.",
      excerpt: "So nutzen Sie das Potenzial der Finanzmetropole für Ihr Unternehmen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Frankfurt: Leveraging the Financial Metropolis",
      metaTitle: "Local SEO Frankfurt | Finance Hub Guide 2026",
      metaDescription: "Local SEO specifically for Frankfurt am Main. B2B keywords, financial services strategies and local visibility in the Main metropolis.",
      excerpt: "How to leverage the potential of the financial metropolis for your business.",
      category: "Regions"
    },
    readingTime: 15,
    publishedAt: "2026-01-21",
    updatedAt: "2026-01-21",
    icon: "🏦",
    keywords: ["local seo frankfurt", "seo frankfurt", "marketing frankfurt", "frankfurter unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-koeln",
    de: {
      title: "Local SEO Köln: Rheinland-Marketing für lokale Unternehmen",
      metaTitle: "Local SEO Köln | Rheinland-Guide 2026",
      metaDescription: "Local SEO speziell für Köln und das Rheinland. Kölsche Keywords, Veedel-Strategien und lokale Sichtbarkeit am Dom.",
      excerpt: "Von Ehrenfeld bis Deutz: So werden Sie in ganz Köln gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Cologne: Rhineland Marketing for Local Businesses",
      metaTitle: "Local SEO Cologne | Rhineland Guide 2026",
      metaDescription: "Local SEO specifically for Cologne and the Rhineland. Cologne keywords, neighborhood strategies and local visibility at the cathedral.",
      excerpt: "From Ehrenfeld to Deutz: How to be found throughout Cologne.",
      category: "Regions"
    },
    readingTime: 15,
    publishedAt: "2026-01-27",
    updatedAt: "2026-01-27",
    icon: "🎭",
    keywords: ["local seo köln", "seo köln", "marketing köln", "kölner unternehmen"],
    featured: false
  },
  {
    slug: "local-seo-wien",
    de: {
      title: "Local SEO Wien: Der Österreich-Guide für KMUs",
      metaTitle: "Local SEO Wien | Österreich-Guide 2026",
      metaDescription: "Local SEO speziell für Wien und Österreich. Bezirks-Keywords, österreichische Verzeichnisse und Strategien für die Donaumetropole.",
      excerpt: "Der komplette Guide für Wiener Unternehmen zur lokalen Sichtbarkeit.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Vienna: The Austria Guide for SMEs",
      metaTitle: "Local SEO Vienna | Austria Guide 2026",
      metaDescription: "Local SEO specifically for Vienna and Austria. District keywords, Austrian directories and strategies for the Danube metropolis.",
      excerpt: "The complete guide for Viennese businesses for local visibility.",
      category: "Regions"
    },
    readingTime: 17,
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    icon: "🇦🇹",
    keywords: ["local seo wien", "seo wien", "marketing wien", "österreich seo"],
    featured: false
  },
  {
    slug: "local-seo-stuttgart",
    de: {
      title: "Local SEO Stuttgart: Automobilregion & mehr",
      metaTitle: "Local SEO Stuttgart | Baden-Württemberg Guide 2026",
      metaDescription: "Local SEO speziell für Stuttgart und die Region. Industrie-Keywords, Zulieferer-Strategien und lokale Sichtbarkeit im Ländle.",
      excerpt: "So werden Sie in der Automobilhauptstadt Deutschlands gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Stuttgart: Automotive Region & More",
      metaTitle: "Local SEO Stuttgart | Baden-Württemberg Guide 2026",
      metaDescription: "Local SEO specifically for Stuttgart and the region. Industry keywords, supplier strategies and local visibility in the Ländle.",
      excerpt: "How to be found in Germany's automotive capital.",
      category: "Regions"
    },
    readingTime: 14,
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    icon: "🚙",
    keywords: ["local seo stuttgart", "seo stuttgart", "marketing stuttgart", "schwaben seo"],
    featured: false
  },
  {
    slug: "local-seo-duesseldorf",
    de: {
      title: "Local SEO Düsseldorf: Mode, Messe & mehr Kunden",
      metaTitle: "Local SEO Düsseldorf | NRW-Guide 2026",
      metaDescription: "Local SEO speziell für Düsseldorf. Fashion-Keywords, Messe-Strategien und lokale Sichtbarkeit in der Landeshauptstadt NRW.",
      excerpt: "Der Guide für Düsseldorfer Unternehmen: Von der Kö bis Flingern.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Düsseldorf: Fashion, Trade Fairs & More Customers",
      metaTitle: "Local SEO Düsseldorf | NRW Guide 2026",
      metaDescription: "Local SEO specifically for Düsseldorf. Fashion keywords, trade fair strategies and local visibility in the NRW capital.",
      excerpt: "The guide for Düsseldorf businesses: From the Kö to Flingern.",
      category: "Regions"
    },
    readingTime: 14,
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-18",
    icon: "👔",
    keywords: ["local seo düsseldorf", "seo düsseldorf", "marketing düsseldorf", "nrw seo"],
    featured: false
  },
  {
    slug: "local-seo-basel",
    de: {
      title: "Local SEO Basel: Grenzregion Schweiz-Deutschland-Frankreich",
      metaTitle: "Local SEO Basel | Dreiländereck-Guide 2026",
      metaDescription: "Local SEO für Basel und das Dreiländereck. Mehrsprachige Keywords, Pharma-Branche und grenzüberschreitendes Marketing.",
      excerpt: "Der einzigartige Guide für Basler Unternehmen im Dreiländereck.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Basel: Border Region Switzerland-Germany-France",
      metaTitle: "Local SEO Basel | Tri-Border Guide 2026",
      metaDescription: "Local SEO for Basel and the tri-border region. Multilingual keywords, pharma industry and cross-border marketing.",
      excerpt: "The unique guide for Basel businesses in the tri-border region.",
      category: "Regions"
    },
    readingTime: 16,
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    icon: "🌉",
    keywords: ["local seo basel", "seo basel", "marketing basel", "dreiländereck seo"],
    featured: false
  },
  {
    slug: "local-seo-leipzig-dresden",
    de: {
      title: "Local SEO Leipzig & Dresden: Ostdeutschland-Guide",
      metaTitle: "Local SEO Leipzig Dresden | Sachsen-Guide 2026",
      metaDescription: "Local SEO für Leipzig, Dresden und Sachsen. Aufstrebende Städte, Start-up-Szene und regionale Besonderheiten.",
      excerpt: "Der Guide für sächsische Unternehmen: Zwei Städte, ein Ziel.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Leipzig & Dresden: East Germany Guide",
      metaTitle: "Local SEO Leipzig Dresden | Saxony Guide 2026",
      metaDescription: "Local SEO for Leipzig, Dresden and Saxony. Emerging cities, start-up scene and regional specifics.",
      excerpt: "The guide for Saxon businesses: Two cities, one goal.",
      category: "Regions"
    },
    readingTime: 15,
    publishedAt: "2026-03-02",
    updatedAt: "2026-03-02",
    icon: "🎵",
    keywords: ["local seo leipzig", "local seo dresden", "seo sachsen", "ostdeutschland seo"],
    featured: false
  },

  // === PILLAR PAGE: TECHNISCHES LOCAL SEO GUIDE ===
  {
    slug: "technisches-local-seo-guide",
    de: {
      title: "Technisches Local SEO: Der komplette Guide für lokale Unternehmen 2026",
      metaTitle: "Technisches Local SEO Guide | Schema, Speed, Mobile & Indexierung 2026",
      metaDescription: "Der umfassendste Technical-Local-SEO-Guide: LocalBusiness Schema, Geo-Markup, Core Web Vitals, Mobile-First, interne Verlinkung & Indexierung. Mit 40-Punkte-Checkliste & Code-Beispielen.",
      excerpt: "Alles über technisches Local SEO: Von LocalBusiness Schema und Geo-Markup über Core Web Vitals und Mobile-Optimierung bis zu interner Verlinkung und Indexierungsstrategien — mit 40-Punkte-Checkliste.",
      category: "Technik"
    },
    en: {
      title: "Technical Local SEO: The Complete Guide for Local Businesses 2026",
      metaTitle: "Technical Local SEO Guide | Schema, Speed, Mobile & Indexing 2026",
      metaDescription: "The most comprehensive Technical Local SEO guide: LocalBusiness Schema, Geo Markup, Core Web Vitals, Mobile-First, internal linking & indexing strategies. With 40-point checklist.",
      excerpt: "Everything about technical Local SEO: From LocalBusiness Schema and Geo Markup to Core Web Vitals, mobile optimization, internal linking and indexing strategies.",
      category: "Technical"
    },
    readingTime: 25,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-08",
    icon: "⚙️",
    keywords: ["technical seo", "technisches seo", "localbusiness schema", "schema markup", "core web vitals", "mobile seo", "interne verlinkung local seo", "geo markup", "indexierung local seo", "site speed lokale website"],
    featured: true
  },

  {
    slug: "localbusiness-schema-implementierung",
    de: {
      title: "LocalBusiness Schema implementieren: Komplette Anleitung mit Code-Beispielen",
      metaTitle: "LocalBusiness Schema Markup | Implementierung Guide 2026",
      metaDescription: "LocalBusiness Schema Markup richtig implementieren: JSON-LD Code-Beispiele für jede Branche, Öffnungszeiten, Bewertungen & Multi-Location. Kopierfertig!",
      excerpt: "Schritt-für-Schritt Anleitung zur LocalBusiness Schema Implementierung mit kopierfertigen JSON-LD Code-Beispielen für alle Branchen.",
      category: "Technik"
    },
    en: {
      title: "Implementing LocalBusiness Schema: Complete Guide with Code Examples",
      metaTitle: "LocalBusiness Schema Markup | Implementation Guide 2026",
      metaDescription: "Implement LocalBusiness Schema Markup correctly: JSON-LD code examples for every industry, opening hours, reviews & multi-location. Copy-ready!",
      excerpt: "Step-by-step guide to LocalBusiness Schema implementation with copy-ready JSON-LD code examples for all industries.",
      category: "Technical"
    },
    readingTime: 22,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "🏢",
    keywords: ["localbusiness schema", "schema markup", "json-ld", "structured data", "local seo schema", "rich snippets"],
    featured: false
  },

  {
    slug: "review-schema-implementierung",
    de: {
      title: "Review Schema implementieren: Bewertungssterne in Google bekommen",
      metaTitle: "Review Schema Markup | Sterne in Google Suche 2026",
      metaDescription: "Review & AggregateRating Schema richtig implementieren: JSON-LD Code-Beispiele, Google-Richtlinien und Branchenbeispiele. Sterne in den SERPs!",
      excerpt: "So implementieren Sie Review Schema korrekt und bekommen Bewertungssterne in den Google-Suchergebnissen – mit kopierfertigen Code-Beispielen.",
      category: "Technik"
    },
    en: {
      title: "Implementing Review Schema: Get Star Ratings in Google",
      metaTitle: "Review Schema Markup | Stars in Google Search 2026",
      metaDescription: "Implement Review & AggregateRating Schema correctly: JSON-LD code examples, Google guidelines and industry examples. Stars in SERPs!",
      excerpt: "How to implement Review Schema correctly and get star ratings in Google search results – with copy-ready code examples.",
      category: "Technical"
    },
    readingTime: 20,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "⭐",
    keywords: ["review schema", "aggregaterating", "sterne google", "rich snippets bewertungen", "schema markup bewertungen", "json-ld review"],
    featured: false
  },

  // TECHNISCHE DEEP-DIVES
  {
    slug: "core-web-vitals-local-seo",
    de: {
      title: "Core Web Vitals für lokale Websites: Performance-Guide",
      metaTitle: "Core Web Vitals Local SEO | Performance 2026",
      metaDescription: "Wie lokale Unternehmen ihre Core Web Vitals optimieren. LCP, FID, CLS für bessere Rankings und mehr Conversions.",
      excerpt: "Der technische Guide zur Website-Performance für lokale Rankings.",
      category: "Technik"
    },
    en: {
      title: "Core Web Vitals for Local Websites: Performance Guide",
      metaTitle: "Core Web Vitals Local SEO | Performance 2026",
      metaDescription: "How local businesses optimize their Core Web Vitals. LCP, FID, CLS for better rankings and more conversions.",
      excerpt: "The technical guide to website performance for local rankings.",
      category: "Technical"
    },
    readingTime: 18,
    publishedAt: "2026-01-17",
    updatedAt: "2026-01-17",
    icon: "⚡",
    keywords: ["core web vitals", "page speed", "local seo performance", "lcp fid cls"],
    featured: false
  },
  {
    slug: "local-seo-voice-search",
    de: {
      title: "Local SEO & Voice Search: Hey Google, wo ist...",
      metaTitle: "Voice Search Local SEO | Sprachsuche 2026",
      metaDescription: "Wie lokale Unternehmen für Sprachsuche optimieren. Conversational Keywords, Featured Snippets und Voice-First-Strategien.",
      excerpt: "So werden Sie gefunden, wenn Kunden Alexa, Siri oder Google fragen.",
      category: "Technik"
    },
    en: {
      title: "Local SEO & Voice Search: Hey Google, where is...",
      metaTitle: "Voice Search Local SEO | Voice Search 2026",
      metaDescription: "How local businesses optimize for voice search. Conversational keywords, featured snippets and voice-first strategies.",
      excerpt: "How to be found when customers ask Alexa, Siri or Google.",
      category: "Technical"
    },
    readingTime: 14,
    publishedAt: "2026-01-25",
    updatedAt: "2026-01-25",
    icon: "🎤",
    keywords: ["voice search", "sprachsuche", "local seo voice", "alexa siri google"],
    featured: false
  },
  {
    slug: "google-posts-ranking-faktor",
    de: {
      title: "Google Posts optimal nutzen: Der unterschätzte Ranking-Faktor",
      metaTitle: "Google Posts | Unterschätzter Ranking-Faktor 2026",
      metaDescription: "Wie Google Posts Ihr lokales Ranking verbessern. Content-Strategien, Posting-Frequenz und Conversion-Optimierung.",
      excerpt: "Der vergessene Hebel für lokale Rankings: Google Posts richtig nutzen.",
      category: "Technik"
    },
    en: {
      title: "Optimally Using Google Posts: The Underrated Ranking Factor",
      metaTitle: "Google Posts | Underrated Ranking Factor 2026",
      metaDescription: "How Google Posts improve your local ranking. Content strategies, posting frequency and conversion optimization.",
      excerpt: "The forgotten lever for local rankings: Using Google Posts correctly.",
      category: "Technical"
    },
    readingTime: 12,
    publishedAt: "2026-01-31",
    updatedAt: "2026-01-31",
    icon: "📝",
    keywords: ["google posts", "gbp posts", "google business posts", "lokale posts"],
    featured: false
  },
  {
    slug: "lokale-landing-pages",
    de: {
      title: "Lokale Landing Pages erstellen: One-Page pro Standort",
      metaTitle: "Lokale Landing Pages | Standort-Seiten 2026",
      metaDescription: "Wie Sie effektive lokale Landing Pages erstellen. Stadteil-Seiten, Geo-Keywords und Conversion-Optimierung für Multi-Location.",
      excerpt: "Der Guide zur Erstellung von Location-Pages, die ranken und konvertieren.",
      category: "Technik"
    },
    en: {
      title: "Creating Local Landing Pages: One Page Per Location",
      metaTitle: "Local Landing Pages | Location Pages 2026",
      metaDescription: "How to create effective local landing pages. District pages, geo-keywords and conversion optimization for multi-location.",
      excerpt: "The guide to creating location pages that rank and convert.",
      category: "Technical"
    },
    readingTime: 16,
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    icon: "🎯",
    keywords: ["lokale landing pages", "standort seiten", "geo landing pages", "multi location seo"],
    featured: false
  },
  {
    slug: "multi-location-seo",
    de: {
      title: "Multi-Location SEO: Mehrere Standorte richtig optimieren",
      metaTitle: "Multi-Location SEO | Filial-Marketing 2026",
      metaDescription: "Wie Unternehmen mit mehreren Standorten ihre Local SEO skalieren. Zentrale vs. dezentrale Strategien und Best Practices.",
      excerpt: "Der Guide für Unternehmen mit 2 bis 200 Standorten.",
      category: "Technik"
    },
    en: {
      title: "Multi-Location SEO: Properly Optimizing Multiple Locations",
      metaTitle: "Multi-Location SEO | Branch Marketing 2026",
      metaDescription: "How businesses with multiple locations scale their Local SEO. Central vs. decentralized strategies and best practices.",
      excerpt: "The guide for businesses with 2 to 200 locations.",
      category: "Technical"
    },
    readingTime: 18,
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    icon: "📍",
    keywords: ["multi location seo", "filialen seo", "franchise seo", "mehrere standorte"],
    featured: false
  },
  {
    slug: "lokale-keyword-kannibalisierung",
    de: {
      title: "Lokale Keyword-Kannibalisierung vermeiden",
      metaTitle: "Keyword-Kannibalisierung Local SEO | Guide 2026",
      metaDescription: "Wie Sie Keyword-Kannibalisierung bei lokalen Seiten vermeiden. Diagnose, Lösung und Prävention für bessere Rankings.",
      excerpt: "Wenn Ihre eigenen Seiten gegeneinander kämpfen: So lösen Sie das Problem.",
      category: "Technik"
    },
    en: {
      title: "Avoiding Local Keyword Cannibalization",
      metaTitle: "Keyword Cannibalization Local SEO | Guide 2026",
      metaDescription: "How to avoid keyword cannibalization with local pages. Diagnosis, solution and prevention for better rankings.",
      excerpt: "When your own pages fight against each other: How to solve the problem.",
      category: "Technical"
    },
    readingTime: 14,
    publishedAt: "2026-03-06",
    updatedAt: "2026-03-06",
    icon: "🦈",
    keywords: ["keyword kannibalisierung", "duplicate content", "lokale seo probleme", "seiten konkurrenz"],
    featured: false
  },
  {
    slug: "ai-overviews-local-seo",
    de: {
      title: "AI-Overviews & Local SEO: Wie KI die lokale Suche verändert",
      metaTitle: "AI-Overviews Local SEO | KI-Suche 2026",
      metaDescription: "Wie AI-Overviews (SGE) die lokale Suche verändern. Optimierungsstrategien für die KI-gesteuerte Suchergebnisseite.",
      excerpt: "Die Zukunft der lokalen Suche: Was AI-Overviews für Ihr Unternehmen bedeuten.",
      category: "Technik"
    },
    en: {
      title: "AI Overviews & Local SEO: How AI is Changing Local Search",
      metaTitle: "AI Overviews Local SEO | AI Search 2026",
      metaDescription: "How AI Overviews (SGE) are changing local search. Optimization strategies for the AI-powered search results page.",
      excerpt: "The future of local search: What AI Overviews mean for your business.",
      category: "Technical"
    },
    readingTime: 15,
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    icon: "🤖",
    keywords: ["ai overviews", "sge local seo", "ki suche", "google ai"],
    featured: true
  },
  {
    slug: "local-seo-tracking-kpis",
    de: {
      title: "Local SEO Tracking: KPIs und Reporting richtig aufsetzen",
      metaTitle: "Local SEO KPIs | Tracking & Reporting 2026",
      metaDescription: "Die wichtigsten KPIs für Local SEO und wie Sie sie messen. Google Analytics, Search Console und GBP Insights richtig nutzen.",
      excerpt: "Was messen, wie messen, wie berichten: Der KPI-Guide für Local SEO.",
      category: "Technik"
    },
    en: {
      title: "Local SEO Tracking: Setting Up KPIs and Reporting",
      metaTitle: "Local SEO KPIs | Tracking & Reporting 2026",
      metaDescription: "The most important KPIs for Local SEO and how to measure them. Properly using Google Analytics, Search Console and GBP Insights.",
      excerpt: "What to measure, how to measure, how to report: The KPI guide for Local SEO.",
      category: "Technical"
    },
    readingTime: 16,
    publishedAt: "2026-03-30",
    updatedAt: "2026-03-30",
    icon: "📈",
    keywords: ["local seo kpis", "seo tracking", "local seo reporting", "google analytics lokal"],
    featured: false
  },

  // STRATEGIE & BEST PRACTICES
  {
    slug: "wettbewerbsanalyse-local-seo",
    de: {
      title: "Wettbewerbsanalyse im Local SEO: Konkurrenz ausstechen",
      metaTitle: "Wettbewerbsanalyse Local SEO | Konkurrenz 2026",
      metaDescription: "Wie Sie Ihre lokale Konkurrenz analysieren und übertreffen. Tools, Methoden und Strategien für den lokalen Wettbewerbsvorteil.",
      excerpt: "Lernen Sie von der Konkurrenz und werden Sie besser.",
      category: "Strategie"
    },
    en: {
      title: "Competitive Analysis in Local SEO: Outperforming the Competition",
      metaTitle: "Competitive Analysis Local SEO | Competition 2026",
      metaDescription: "How to analyze and outperform your local competition. Tools, methods and strategies for local competitive advantage.",
      excerpt: "Learn from the competition and become better.",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    icon: "🔎",
    keywords: ["wettbewerbsanalyse", "konkurrenzanalyse", "local seo wettbewerb", "konkurrenz ausspähen"],
    featured: false
  },
  {
    slug: "citation-strategie-verzeichnisse",
    de: {
      title: "Lokale Citation-Strategie: Die 50 wichtigsten Verzeichnisse",
      metaTitle: "Citation-Strategie | 50 Verzeichnisse 2026",
      metaDescription: "Die wichtigsten lokalen Verzeichnisse für DACH und wie Sie Ihre Citations optimal aufbauen. Mit vollständiger Verzeichnisliste.",
      excerpt: "Die Blaupause für Ihren Citation-Aufbau in Deutschland, Österreich und Schweiz.",
      category: "Strategie"
    },
    en: {
      title: "Local Citation Strategy: The 50 Most Important Directories",
      metaTitle: "Citation Strategy | 50 Directories 2026",
      metaDescription: "The most important local directories for DACH and how to optimally build your citations. With complete directory list.",
      excerpt: "The blueprint for your citation building in Germany, Austria and Switzerland.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    icon: "📒",
    keywords: ["citations", "branchenverzeichnisse", "lokale verzeichnisse", "nap aufbau"],
    featured: false
  },
  {
    slug: "bewertungs-automation",
    de: {
      title: "Bewertungs-Automation: Systematisch mehr Reviews generieren",
      metaTitle: "Bewertungs-Automation | Mehr Reviews 2026",
      metaDescription: "Wie Sie systematisch und automatisiert mehr Google-Bewertungen sammeln. Tools, Workflows und ethische Methoden.",
      excerpt: "Von 10 auf 100 Bewertungen: Der systematische Ansatz für mehr Reviews.",
      category: "Strategie"
    },
    en: {
      title: "Review Automation: Systematically Generate More Reviews",
      metaTitle: "Review Automation | More Reviews 2026",
      metaDescription: "How to systematically and automatically collect more Google reviews. Tools, workflows and ethical methods.",
      excerpt: "From 10 to 100 reviews: The systematic approach for more reviews.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-02-15",
    updatedAt: "2026-02-15",
    icon: "⚙️",
    keywords: ["bewertungen automatisieren", "review generation", "mehr bewertungen", "rezensionen sammeln"],
    featured: false
  },
  {
    slug: "local-seo-vs-organisch",
    de: {
      title: "Local SEO vs. organisches SEO: Die wichtigsten Unterschiede",
      metaTitle: "Local SEO vs Organic SEO | Unterschiede 2026",
      metaDescription: "Was unterscheidet Local SEO von klassischem SEO? Gemeinsamkeiten, Unterschiede und wann Sie welche Strategie brauchen.",
      excerpt: "Local Pack vs. Organische Suche: Verstehen Sie die Unterschiede.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO vs. Organic SEO: The Key Differences",
      metaTitle: "Local SEO vs Organic SEO | Differences 2026",
      metaDescription: "What distinguishes Local SEO from classic SEO? Similarities, differences and when you need which strategy.",
      excerpt: "Local Pack vs. Organic Search: Understand the differences.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2026-02-21",
    updatedAt: "2026-02-21",
    icon: "⚖️",
    keywords: ["local seo vs seo", "organische suche", "local pack", "seo unterschiede"],
    featured: false
  },
  {
    slug: "saisonales-local-seo",
    de: {
      title: "Saisonales Local SEO: Weihnachten, Sommer & Co.",
      metaTitle: "Saisonales Local SEO | Jahreszeiten 2026",
      metaDescription: "Wie Sie saisonale Schwankungen für Ihr Local SEO nutzen. Vorausplanung, Keyword-Strategien und zeitgebundene Optimierung.",
      excerpt: "Die richtige Strategie für jede Jahreszeit: Saisonales Local SEO.",
      category: "Strategie"
    },
    en: {
      title: "Seasonal Local SEO: Christmas, Summer & Co.",
      metaTitle: "Seasonal Local SEO | Seasons 2026",
      metaDescription: "How to leverage seasonal fluctuations for your Local SEO. Advance planning, keyword strategies and time-bound optimization.",
      excerpt: "The right strategy for every season: Seasonal Local SEO.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-02-27",
    updatedAt: "2026-02-27",
    icon: "🎄",
    keywords: ["saisonales seo", "weihnachten seo", "sommer marketing", "jahreszeiten local seo"],
    featured: false
  },
  {
    slug: "local-seo-budget-planen",
    de: {
      title: "Local SEO Budget planen: Was kostet gutes Marketing?",
      metaTitle: "Local SEO Budget | Kosten & Planung 2026",
      metaDescription: "Was kostet Local SEO wirklich? Budget-Planung, ROI-Berechnung und Prioritäten für kleine und mittlere Unternehmen.",
      excerpt: "Der ehrliche Guide zu Local SEO Kosten und Investitionen.",
      category: "Strategie"
    },
    en: {
      title: "Planning Local SEO Budget: What Does Good Marketing Cost?",
      metaTitle: "Local SEO Budget | Costs & Planning 2026",
      metaDescription: "What does Local SEO really cost? Budget planning, ROI calculation and priorities for small and medium businesses.",
      excerpt: "The honest guide to Local SEO costs and investments.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "💰",
    keywords: ["local seo kosten", "seo budget", "marketing budget", "seo investition"],
    featured: false
  },
  {
    slug: "diy-local-seo",
    de: {
      title: "DIY Local SEO: Was kannst du selbst, wann brauchst du Profis?",
      metaTitle: "DIY Local SEO | Selbst vs. Agentur 2026",
      metaDescription: "Was können Sie selbst bei Local SEO machen und wann lohnt sich eine Agentur? Der ehrliche Vergleich mit Zeitaufwand.",
      excerpt: "Die Wahrheit: Was Sie selbst machen können und wo Sie Hilfe brauchen.",
      category: "Strategie"
    },
    en: {
      title: "DIY Local SEO: What Can You Do Yourself, When Do You Need Pros?",
      metaTitle: "DIY Local SEO | Self vs. Agency 2026",
      metaDescription: "What can you do yourself with Local SEO and when is an agency worth it? The honest comparison with time investment.",
      excerpt: "The truth: What you can do yourself and where you need help.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    icon: "🛠️",
    keywords: ["diy seo", "seo selbst machen", "seo agentur", "local seo lernen"],
    featured: false
  },
  {
    slug: "lokales-social-media-marketing",
    de: {
      title: "Lokales Social Media Marketing: Facebook, Instagram & TikTok",
      metaTitle: "Lokales Social Media | Marketing 2026",
      metaDescription: "Wie lokale Unternehmen Social Media für mehr Sichtbarkeit nutzen. Plattform-Strategien, lokaler Content und Community-Aufbau.",
      excerpt: "Social Media für lokale Unternehmen: Was funktioniert wirklich?",
      category: "Strategie"
    },
    en: {
      title: "Local Social Media Marketing: Facebook, Instagram & TikTok",
      metaTitle: "Local Social Media | Marketing 2026",
      metaDescription: "How local businesses use social media for more visibility. Platform strategies, local content and community building.",
      excerpt: "Social media for local businesses: What actually works?",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-03-17",
    updatedAt: "2026-03-17",
    icon: "📱",
    keywords: ["lokales social media", "instagram lokal", "facebook lokal", "tiktok lokal"],
    featured: false
  },
  {
    slug: "lokale-pr-pressearbeit",
    de: {
      title: "Lokale PR & Pressearbeit: Zeitungen, Blogs & Radio",
      metaTitle: "Lokale PR | Pressearbeit 2026",
      metaDescription: "Wie lokale Unternehmen durch PR und Pressearbeit Sichtbarkeit gewinnen. Pressemitteilungen, Blogger-Relations und lokale Medien.",
      excerpt: "Der Guide zur lokalen Öffentlichkeitsarbeit für mehr Reichweite.",
      category: "Strategie"
    },
    en: {
      title: "Local PR & Press Work: Newspapers, Blogs & Radio",
      metaTitle: "Local PR | Press Work 2026",
      metaDescription: "How local businesses gain visibility through PR and press work. Press releases, blogger relations and local media.",
      excerpt: "The guide to local public relations for more reach.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-03-23",
    updatedAt: "2026-03-23",
    icon: "📰",
    keywords: ["lokale pr", "pressearbeit", "pressemitteilung", "lokale medien"],
    featured: false
  },
  {
    slug: "google-business-fotos",
    de: {
      title: "Google Business Fotos: Der visuelle Ranking-Boost",
      metaTitle: "Google Business Fotos | Visuelles SEO 2026",
      metaDescription: "Wie Fotos Ihr Google Business Ranking verbessern. Bildoptimierung, Geotagging und Strategien für mehr Klicks.",
      excerpt: "Der unterschätzte Ranking-Faktor: Bilder in Ihrem Google Business Profil.",
      category: "Strategie"
    },
    en: {
      title: "Google Business Photos: The Visual Ranking Boost",
      metaTitle: "Google Business Photos | Visual SEO 2026",
      metaDescription: "How photos improve your Google Business ranking. Image optimization, geotagging and strategies for more clicks.",
      excerpt: "The underrated ranking factor: Images in your Google Business Profile.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    icon: "📷",
    keywords: ["google business fotos", "bilder seo", "gbp fotos", "visuelles marketing"],
    featured: false
  },

  // CASE STUDIES & ERFOLGSGESCHICHTEN
  {
    slug: "case-study-zahnarzt",
    de: {
      title: "Case Study: Zahnarztpraxis von Seite 3 auf Platz 1",
      metaTitle: "Case Study Zahnarzt | Local SEO Erfolg",
      metaDescription: "Wie eine Zahnarztpraxis durch Local SEO von Seite 3 auf Platz 1 kam. Mit Zahlen, Maßnahmen und Timeline.",
      excerpt: "Eine echte Erfolgsgeschichte: 6 Monate Local SEO für eine Zahnarztpraxis.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Dental Practice from Page 3 to Position 1",
      metaTitle: "Case Study Dentist | Local SEO Success",
      metaDescription: "How a dental practice went from page 3 to position 1 through Local SEO. With numbers, measures and timeline.",
      excerpt: "A real success story: 6 months of Local SEO for a dental practice.",
      category: "Case Study"
    },
    readingTime: 10,
    publishedAt: "2026-03-07",
    updatedAt: "2026-03-07",
    icon: "🦷",
    keywords: ["zahnarzt case study", "local seo erfolg", "ranking erfolg", "praxis marketing"],
    featured: false
  },
  {
    slug: "case-study-restaurant-reservierungen",
    de: {
      title: "Case Study: Restaurant verdreifacht Reservierungen",
      metaTitle: "Case Study Restaurant | 3x Reservierungen",
      metaDescription: "Wie ein Restaurant durch Local SEO seine Reservierungen verdreifachte. Konkrete Maßnahmen und messbare Ergebnisse.",
      excerpt: "Von halb leer zu ausgebucht: Die Local SEO Transformation eines Restaurants.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Restaurant Triples Reservations",
      metaTitle: "Case Study Restaurant | 3x Reservations",
      metaDescription: "How a restaurant tripled its reservations through Local SEO. Concrete measures and measurable results.",
      excerpt: "From half empty to fully booked: The Local SEO transformation of a restaurant.",
      category: "Case Study"
    },
    readingTime: 11,
    publishedAt: "2026-03-13",
    updatedAt: "2026-03-13",
    icon: "🍴",
    keywords: ["restaurant case study", "reservierungen steigern", "gastro marketing", "local seo erfolg"],
    featured: false
  },
  {
    slug: "case-study-handwerker-anfragen",
    de: {
      title: "Case Study: Handwerker-Firma automatisiert Anfragen",
      metaTitle: "Case Study Handwerker | Automatisierte Anfragen",
      metaDescription: "Wie eine Handwerker-Firma durch Local SEO automatisiert Anfragen generiert. Vom Telefon-Chaos zum Lead-System.",
      excerpt: "Wie ein Elektriker-Betrieb heute 80% seiner Anfragen über Google bekommt.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Contractor Automates Inquiries",
      metaTitle: "Case Study Contractor | Automated Inquiries",
      metaDescription: "How a contractor automated inquiries through Local SEO. From phone chaos to lead system.",
      excerpt: "How an electrical contractor now gets 80% of inquiries through Google.",
      category: "Case Study"
    },
    readingTime: 12,
    publishedAt: "2026-03-19",
    updatedAt: "2026-03-19",
    icon: "🔨",
    keywords: ["handwerker case study", "anfragen automatisieren", "lead generierung", "elektriker marketing"],
    featured: false
  },
  {
    slug: "case-study-fitnessstudio-corona",
    de: {
      title: "Case Study: Fitnessstudio nach Corona-Comeback",
      metaTitle: "Case Study Fitnessstudio | Corona-Comeback",
      metaDescription: "Wie ein Fitnessstudio nach Corona durch Local SEO wieder durchstartete. Mitgliedergewinnung und Repositionierung.",
      excerpt: "Vom Lockdown zum vollen Studio: Die Comeback-Story eines Fitnessstudios.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Gym's Post-Corona Comeback",
      metaTitle: "Case Study Gym | Corona Comeback",
      metaDescription: "How a gym restarted through Local SEO after Corona. Member acquisition and repositioning.",
      excerpt: "From lockdown to full studio: The comeback story of a gym.",
      category: "Case Study"
    },
    readingTime: 11,
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    icon: "💪",
    keywords: ["fitnessstudio case study", "corona comeback", "mitglieder gewinnen", "fitness marketing"],
    featured: false
  },
  {
    slug: "case-study-hotel-direktbuchungen",
    de: {
      title: "Case Study: Hotel steigert Direktbuchungen um 150%",
      metaTitle: "Case Study Hotel | 150% mehr Direktbuchungen",
      metaDescription: "Wie ein Boutique-Hotel seine Direktbuchungen um 150% steigerte. Strategie gegen Booking.com und Co.",
      excerpt: "Unabhängigkeit von Buchungsportalen: So schaffte es ein Hotel.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Hotel Increases Direct Bookings by 150%",
      metaTitle: "Case Study Hotel | 150% More Direct Bookings",
      metaDescription: "How a boutique hotel increased its direct bookings by 150%. Strategy against Booking.com and Co.",
      excerpt: "Independence from booking portals: How a hotel did it.",
      category: "Case Study"
    },
    readingTime: 12,
    publishedAt: "2026-03-31",
    updatedAt: "2026-03-31",
    icon: "🛎️",
    keywords: ["hotel case study", "direktbuchungen", "booking alternative", "hotel marketing"],
    featured: false
  },
  {
    slug: "case-study-friseur-stadtteile",
    de: {
      title: "Case Study: Friseursalon dominiert 3 Stadtteile",
      metaTitle: "Case Study Friseur | Multi-Location Erfolg",
      metaDescription: "Wie ein Friseursalon in 3 Stadtteilen die lokale Suche dominiert. Multi-Location-Strategie in der Praxis.",
      excerpt: "Ein Salon, drei Standorte, überall auf Platz 1: Die Friseur-Success-Story.",
      category: "Case Study"
    },
    en: {
      title: "Case Study: Hair Salon Dominates 3 Districts",
      metaTitle: "Case Study Hair Salon | Multi-Location Success",
      metaDescription: "How a hair salon dominates local search in 3 districts. Multi-location strategy in practice.",
      excerpt: "One salon, three locations, position 1 everywhere: The salon success story.",
      category: "Case Study"
    },
    readingTime: 10,
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    icon: "✂️",
    keywords: ["friseur case study", "multi location", "stadtteil seo", "salon marketing"],
    featured: false
  },

  // TOOLS, CHECKLISTEN & RESSOURCEN
  {
    slug: "local-seo-tools-2026",
    de: {
      title: "Die 25 besten Local SEO Tools 2026: Kostenlos bis Premium",
      metaTitle: "Local SEO Tools 2026 | 25 beste Tools",
      metaDescription: "Die besten Local SEO Tools im Vergleich. Von kostenlosen Google-Tools bis Premium-Suites - für jedes Budget.",
      excerpt: "Der ultimative Tool-Guide für Local SEO: Alle Tools die Sie brauchen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "The 25 Best Local SEO Tools 2026: Free to Premium",
      metaTitle: "Local SEO Tools 2026 | 25 Best Tools",
      metaDescription: "The best Local SEO tools compared. From free Google tools to premium suites - for every budget.",
      excerpt: "The ultimate tool guide for Local SEO: All the tools you need.",
      category: "Tools & Resources"
    },
    readingTime: 22,
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-08",
    icon: "🧰",
    keywords: ["local seo tools", "seo software", "kostenlose seo tools", "seo suite"],
    featured: true
  },
  {
    slug: "google-business-api-agenturen",
    de: {
      title: "Google Business API: Automatisierung für Agenturen",
      metaTitle: "Google Business API | Agentur-Automatisierung",
      metaDescription: "Wie Agenturen die Google Business API für Skalierung nutzen. Technische Einrichtung, Use Cases und Best Practices.",
      excerpt: "Der technische Guide zur GBP-Automatisierung für SEO-Agenturen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Google Business API: Automation for Agencies",
      metaTitle: "Google Business API | Agency Automation",
      metaDescription: "How agencies use the Google Business API for scaling. Technical setup, use cases and best practices.",
      excerpt: "The technical guide to GBP automation for SEO agencies.",
      category: "Tools & Resources"
    },
    readingTime: 18,
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-10",
    icon: "🔌",
    keywords: ["google business api", "gbp api", "seo automatisierung", "agentur tools"],
    featured: false
  },
  {
    slug: "local-seo-checkliste-pdf",
    de: {
      title: "Local SEO Checkliste zum Ausdrucken (PDF Download)",
      metaTitle: "Local SEO Checkliste PDF | Download",
      metaDescription: "Kostenlose Local SEO Checkliste als PDF Download. Alle wichtigen Punkte zum Abhaken für Ihr Unternehmen.",
      excerpt: "Die praktische Checkliste für Ihren Schreibtisch: Jetzt herunterladen!",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Local SEO Checklist for Printing (PDF Download)",
      metaTitle: "Local SEO Checklist PDF | Download",
      metaDescription: "Free Local SEO checklist as PDF download. All important points to check off for your business.",
      excerpt: "The practical checklist for your desk: Download now!",
      category: "Tools & Resources"
    },
    readingTime: 5,
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-12",
    icon: "✅",
    keywords: ["local seo checkliste", "seo pdf", "checkliste download", "kostenlose ressourcen"],
    featured: false
  },
  {
    slug: "kostenlose-local-seo-audit-tools",
    de: {
      title: "Kostenlose Local SEO Audit-Tools im Vergleich",
      metaTitle: "Kostenlose Local SEO Audit Tools | Vergleich",
      metaDescription: "Die besten kostenlosen Tools für Ihren Local SEO Audit. Detaillierter Vergleich mit Stärken und Schwächen.",
      excerpt: "SEO-Audit ohne Budget: Diese kostenlosen Tools helfen wirklich.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Free Local SEO Audit Tools Compared",
      metaTitle: "Free Local SEO Audit Tools | Comparison",
      metaDescription: "The best free tools for your Local SEO audit. Detailed comparison with strengths and weaknesses.",
      excerpt: "SEO audit without budget: These free tools really help.",
      category: "Tools & Resources"
    },
    readingTime: 14,
    publishedAt: "2026-04-14",
    updatedAt: "2026-04-14",
    icon: "🔍",
    keywords: ["kostenlose audit tools", "free seo tools", "local seo check", "seo analyse kostenlos"],
    featured: false
  },
  {
    slug: "bewertungs-qr-codes",
    de: {
      title: "Bewertungs-QR-Codes erstellen: Anleitung & Best Practices",
      metaTitle: "Bewertungs-QR-Codes | Anleitung 2026",
      metaDescription: "Wie Sie QR-Codes für Google-Bewertungen erstellen. Schritt-für-Schritt Anleitung mit Design-Tipps und Platzierungsideen.",
      excerpt: "Der einfachste Weg zu mehr Bewertungen: QR-Codes richtig einsetzen.",
      category: "Tools & Ressourcen"
    },
    en: {
      title: "Creating Review QR Codes: Guide & Best Practices",
      metaTitle: "Review QR Codes | Guide 2026",
      metaDescription: "How to create QR codes for Google reviews. Step-by-step guide with design tips and placement ideas.",
      excerpt: "The easiest way to more reviews: Using QR codes correctly.",
      category: "Tools & Resources"
    },
    readingTime: 10,
    publishedAt: "2026-04-16",
    updatedAt: "2026-04-16",
    icon: "📱",
    keywords: ["qr code bewertung", "google review qr", "bewertung link", "rezension qr code"],
    featured: false
  },

  // ZUKUNFT & TRENDS
  {
    slug: "local-seo-trends-2027",
    de: {
      title: "Local SEO Trends 2027: Was kommt als Nächstes?",
      metaTitle: "Local SEO Trends 2027 | Zukunft Prognose",
      metaDescription: "Die Local SEO Trends für 2027 und darüber hinaus. AI, AR, Voice und was Sie jetzt schon vorbereiten sollten.",
      excerpt: "Ein Blick in die Zukunft: Worauf Sie sich jetzt vorbereiten sollten.",
      category: "Trends"
    },
    en: {
      title: "Local SEO Trends 2027: What's Coming Next?",
      metaTitle: "Local SEO Trends 2027 | Future Forecast",
      metaDescription: "The Local SEO trends for 2027 and beyond. AI, AR, Voice and what you should prepare for now.",
      excerpt: "A look into the future: What you should prepare for now.",
      category: "Trends"
    },
    readingTime: 16,
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-18",
    icon: "🔮",
    keywords: ["local seo trends", "seo zukunft", "2027 trends", "seo prognose"],
    featured: true
  },
  {
    slug: "zero-click-searches-local-pack",
    de: {
      title: "Zero-Click-Searches & Local Pack: Die neue Realität",
      metaTitle: "Zero-Click-Searches | Local SEO Realität",
      metaDescription: "Wie Zero-Click-Searches Local SEO verändern. Strategien für die neue SERP-Realität und wie Sie trotzdem gewinnen.",
      excerpt: "Wenn niemand mehr klickt: Wie Sie dennoch erfolgreich sein können.",
      category: "Trends"
    },
    en: {
      title: "Zero-Click Searches & Local Pack: The New Reality",
      metaTitle: "Zero-Click Searches | Local SEO Reality",
      metaDescription: "How zero-click searches are changing Local SEO. Strategies for the new SERP reality and how you still win.",
      excerpt: "When no one clicks anymore: How you can still succeed.",
      category: "Trends"
    },
    readingTime: 14,
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-20",
    icon: "0️⃣",
    keywords: ["zero click", "no click searches", "local pack", "serp features"],
    featured: false
  },
  {
    slug: "google-sge-lokale-suche",
    de: {
      title: "Google SGE & lokale Suche: Wie AI die SERPs verändert",
      metaTitle: "Google SGE Local SEO | AI-Suche 2026",
      metaDescription: "Wie Googles Search Generative Experience die lokale Suche revolutioniert. Vorbereitung auf die AI-Ära der Suche.",
      excerpt: "Die AI-Revolution in der Suche: Was lokale Unternehmen wissen müssen.",
      category: "Trends"
    },
    en: {
      title: "Google SGE & Local Search: How AI is Changing SERPs",
      metaTitle: "Google SGE Local SEO | AI Search 2026",
      metaDescription: "How Google's Search Generative Experience is revolutionizing local search. Preparing for the AI era of search.",
      excerpt: "The AI revolution in search: What local businesses need to know.",
      category: "Trends"
    },
    readingTime: 15,
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-22",
    icon: "🧠",
    keywords: ["google sge", "ai suche", "generative search", "local seo ai"],
    featured: true
  },

  // Zusätzliche Local SEO Grundlagen Berlin (für SEO-Abdeckung)
  {
    slug: "local-seo-berlin",
    de: {
      title: "Local SEO Berlin: Der Hauptstadt-Guide für Unternehmen",
      metaTitle: "Local SEO Berlin | Hauptstadt-Guide 2026",
      metaDescription: "Local SEO speziell für Berlin. Kiez-Keywords, Bezirks-Strategien und lokale Sichtbarkeit in Deutschlands größter Stadt.",
      excerpt: "Von Mitte bis Neukölln: So werden Sie in ganz Berlin gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Berlin: The Capital City Guide for Businesses",
      metaTitle: "Local SEO Berlin | Capital City Guide 2026",
      metaDescription: "Local SEO specifically for Berlin. Neighborhood keywords, district strategies and local visibility in Germany's largest city.",
      excerpt: "From Mitte to Neukölln: How to be found throughout Berlin.",
      category: "Regions"
    },
    readingTime: 17,
    publishedAt: "2026-01-09",
    updatedAt: "2026-01-09",
    icon: "🐻",
    keywords: ["local seo berlin", "seo berlin", "marketing berlin", "berliner unternehmen"],
    featured: true
  },

  // === NEUE ARTIKEL: JANUAR 2026 ===
  {
    slug: "local-seo-koeln",
    de: {
      title: "Local SEO Köln: Mehr Kunden in der Domstadt gewinnen",
      metaTitle: "Local SEO Köln | Kölner Unternehmen Guide 2026",
      metaDescription: "Local SEO für Kölner Unternehmen. Veedel-Keywords, lokale Verzeichnisse und Strategien für die Rheinmetropole. Jetzt mehr lokale Kunden!",
      excerpt: "Von der Südstadt bis Ehrenfeld: So werden Sie in ganz Köln bei Google gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Cologne: Win More Customers in the Cathedral City",
      metaTitle: "Local SEO Cologne | Cologne Business Guide 2026",
      metaDescription: "Local SEO for Cologne businesses. Neighborhood keywords, local directories and strategies for the Rhine metropolis.",
      excerpt: "From Südstadt to Ehrenfeld: How to be found throughout Cologne on Google.",
      category: "Regions"
    },
    readingTime: 18,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🏛️",
    keywords: ["local seo köln", "seo köln", "google ranking köln", "marketing köln", "kölner unternehmen"],
    featured: true
  },
  {
    slug: "local-seo-wien",
    de: {
      title: "Local SEO Wien: Der Guide für Wiener Unternehmen",
      metaTitle: "Local SEO Wien | Österreich-Guide 2026",
      metaDescription: "Local SEO speziell für Wien und Österreich. Bezirks-Keywords, österreichische Verzeichnisse und lokale Sichtbarkeit in der Bundeshauptstadt.",
      excerpt: "Vom 1. bis zum 23. Bezirk: So werden Sie in ganz Wien bei Google gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Vienna: The Guide for Viennese Businesses",
      metaTitle: "Local SEO Vienna | Austria Guide 2026",
      metaDescription: "Local SEO specifically for Vienna and Austria. District keywords, Austrian directories and local visibility in the federal capital.",
      excerpt: "From the 1st to the 23rd district: How to be found throughout Vienna on Google.",
      category: "Regions"
    },
    readingTime: 20,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🎻",
    keywords: ["local seo wien", "seo wien", "google ranking wien", "marketing wien", "österreich seo"],
    featured: true
  },
  {
    slug: "local-seo-tierarzt",
    de: {
      title: "Local SEO für Tierärzte: Mehr Patienten durch Google",
      metaTitle: "Local SEO Tierarzt | Tierarztpraxis Marketing 2026",
      metaDescription: "Local SEO speziell für Tierärzte und Tierkliniken. Notdienst-Keywords, Tier-Portale und Google Business für Veterinäre.",
      excerpt: "So finden Tierbesitzer Ihre Praxis bei Google - von Routineuntersuchungen bis Notfälle.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Veterinarians: More Patients Through Google",
      metaTitle: "Local SEO Veterinarian | Vet Practice Marketing 2026",
      metaDescription: "Local SEO specifically for veterinarians and animal clinics. Emergency keywords, pet portals and Google Business for vets.",
      excerpt: "How pet owners find your practice on Google - from routine checkups to emergencies.",
      category: "Industries"
    },
    readingTime: 16,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🐾",
    keywords: ["tierarzt seo", "veterinär marketing", "tierklinik google", "tierarzt local seo", "tierarztpraxis"],
    featured: false
  },
  {
    slug: "ki-tools-local-seo",
    de: {
      title: "KI-Tools für Local SEO: Die besten AI-Helfer 2026",
      metaTitle: "KI-Tools Local SEO | AI-Helfer Guide 2026",
      metaDescription: "Die besten KI-Tools für lokale Suchmaschinenoptimierung. Von ChatGPT bis Gemini - so nutzen Sie AI für Ihr Local SEO.",
      excerpt: "Wie künstliche Intelligenz Ihr Local SEO auf das nächste Level hebt.",
      category: "Tools"
    },
    en: {
      title: "AI Tools for Local SEO: The Best AI Helpers 2026",
      metaTitle: "AI Tools Local SEO | AI Helper Guide 2026",
      metaDescription: "The best AI tools for local search engine optimization. From ChatGPT to Gemini - how to use AI for your Local SEO.",
      excerpt: "How artificial intelligence takes your Local SEO to the next level.",
      category: "Tools"
    },
    readingTime: 14,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🤖",
    keywords: ["ki tools seo", "ai local seo", "chatgpt seo", "künstliche intelligenz seo", "ai marketing"],
    featured: true
  },
  {
    slug: "google-ai-overviews-local-seo",
    de: {
      title: "Google AI Overviews & Local SEO: Was sich ändert",
      metaTitle: "Google AI Overviews | Local SEO Auswirkungen 2026",
      metaDescription: "Wie Google AI Overviews die lokale Suche verändern. Strategien für Unternehmen, um in der neuen AI-Ära sichtbar zu bleiben.",
      excerpt: "Die AI-Revolution bei Google: Was lokale Unternehmen jetzt wissen und tun müssen.",
      category: "Trends"
    },
    en: {
      title: "Google AI Overviews & Local SEO: What's Changing",
      metaTitle: "Google AI Overviews | Local SEO Impact 2026",
      metaDescription: "How Google AI Overviews are changing local search. Strategies for businesses to stay visible in the new AI era.",
      excerpt: "The AI revolution at Google: What local businesses need to know and do now.",
      category: "Trends"
    },
    readingTime: 12,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "✨",
    keywords: ["google ai overviews", "ai suche", "sge local seo", "google ki", "generative search"],
    featured: true
  },
  {
    slug: "seo-toolbox-kostenlose-ressourcen",
    de: {
      title: "Die ultimative SEO-Toolbox: 50+ kostenlose Tools & Ressourcen",
      metaTitle: "SEO Toolbox | 50+ Kostenlose Tools & Links 2026",
      metaDescription: "Deine komplette SEO-Toolbox: Über 50 kostenlose Tools für Local SEO, GEO, Google Business & mehr. Mit direkten Links und Anleitungen.",
      excerpt: "Alle Tools, die du für erfolgreiches SEO brauchst - komplett kostenlos und sofort einsetzbar.",
      category: "Tools"
    },
    en: {
      title: "The Ultimate SEO Toolbox: 50+ Free Tools & Resources",
      metaTitle: "SEO Toolbox | 50+ Free Tools & Links 2026",
      metaDescription: "Your complete SEO toolbox: Over 50 free tools for Local SEO, GEO, Google Business & more. With direct links and guides.",
      excerpt: "All the tools you need for successful SEO - completely free and ready to use.",
      category: "Tools"
    },
    readingTime: 22,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🧰",
    keywords: ["seo tools", "kostenlose seo tools", "seo toolbox", "local seo tools", "geo tools", "google business tools"],
    featured: true
  },

  // === NEUE ARTIKEL: STÄDTE-GUIDES (Januar 2026) ===
  {
    slug: "local-seo-stuttgart",
    de: {
      title: "Local SEO Stuttgart: Der Guide für schwäbische Unternehmen",
      metaTitle: "Local SEO Stuttgart | Baden-Württemberg Guide 2026",
      metaDescription: "Local SEO speziell für Stuttgart und Region. Von Bad Cannstatt bis Vaihingen - so wirst du in der Landeshauptstadt gefunden.",
      excerpt: "Wie Stuttgarter Unternehmen durch lokale SEO mehr Kunden in der Schwabenmetropole gewinnen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Stuttgart: The Guide for Swabian Businesses",
      metaTitle: "Local SEO Stuttgart | Baden-Württemberg Guide 2026",
      metaDescription: "Local SEO specifically for Stuttgart and region. From Bad Cannstatt to Vaihingen - get found in the state capital.",
      excerpt: "How Stuttgart businesses can win more customers through local SEO.",
      category: "Regions"
    },
    readingTime: 16,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🚗",
    keywords: ["local seo stuttgart", "seo stuttgart", "google ranking stuttgart", "marketing stuttgart", "schwaben seo"],
    featured: false
  },
  {
    slug: "local-seo-duesseldorf",
    de: {
      title: "Local SEO Düsseldorf: Der Guide für rheinische Unternehmen",
      metaTitle: "Local SEO Düsseldorf | NRW Guide 2026",
      metaDescription: "Local SEO speziell für Düsseldorf und das Rheinland. Von der Altstadt bis Oberkassel - so dominierst du den Düsseldorfer Markt.",
      excerpt: "Wie Düsseldorfer Unternehmen durch lokale SEO mehr Kunden in der Landeshauptstadt NRW gewinnen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Düsseldorf: The Guide for Rhenish Businesses",
      metaTitle: "Local SEO Düsseldorf | NRW Guide 2026",
      metaDescription: "Local SEO specifically for Düsseldorf and the Rhineland. From Altstadt to Oberkassel - dominate the Düsseldorf market.",
      excerpt: "How Düsseldorf businesses can win more customers through local SEO.",
      category: "Regions"
    },
    readingTime: 17,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🌉",
    keywords: ["local seo düsseldorf", "seo düsseldorf", "google ranking düsseldorf", "marketing düsseldorf", "nrw seo"],
    featured: false
  },
  {
    slug: "local-seo-basel",
    de: {
      title: "Local SEO Basel: Der Guide für Basler Unternehmen",
      metaTitle: "Local SEO Basel | Nordschweiz Guide 2026",
      metaDescription: "Local SEO speziell für Basel und die Nordschweiz. Dreiländereck-Marketing, Basler Verzeichnisse und regionale Strategien.",
      excerpt: "Wie Basler Unternehmen durch lokale SEO mehr Kunden im Dreiländereck gewinnen.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Basel: The Guide for Basel Businesses",
      metaTitle: "Local SEO Basel | Northern Switzerland Guide 2026",
      metaDescription: "Local SEO specifically for Basel and Northern Switzerland. Tri-border marketing, Basel directories and regional strategies.",
      excerpt: "How Basel businesses can win more customers through local SEO in the tri-border area.",
      category: "Regions"
    },
    readingTime: 15,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🎭",
    keywords: ["local seo basel", "seo basel", "google ranking basel", "marketing basel", "schweiz seo", "dreiländereck"],
    featured: false
  },

  // === NEUE ARTIKEL: BRANCHEN-GUIDES (Januar 2026) ===
  {
    slug: "local-seo-yoga-studios",
    de: {
      title: "Local SEO für Yoga-Studios: Mehr Teilnehmer durch Google",
      metaTitle: "Local SEO für Yoga-Studios | Wellness-Marketing 2026",
      metaDescription: "Local SEO speziell für Yoga-Studios und Wellness-Anbieter. Kurse vermarkten, Google Business optimieren und mehr Buchungen erhalten.",
      excerpt: "Der komplette Guide für Yoga-Studios zur lokalen Kundengewinnung durch Suchmaschinenoptimierung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Yoga Studios: More Participants Through Google",
      metaTitle: "Local SEO for Yoga Studios | Wellness Marketing 2026",
      metaDescription: "Local SEO specifically for yoga studios and wellness providers. Market classes, optimize Google Business and get more bookings.",
      excerpt: "The complete guide for yoga studios to win local customers through search engine optimization.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🧘",
    keywords: ["yoga studio seo", "local seo yoga", "wellness marketing", "yoga google business", "yoga studio marketing"],
    featured: false
  },
  {
    slug: "local-seo-tattoo-studios",
    de: {
      title: "Local SEO für Tattoo-Studios: Mehr Kunden durch Google",
      metaTitle: "Local SEO für Tattoo-Studios | Tattoo-Marketing 2026",
      metaDescription: "Local SEO speziell für Tattoo-Studios und Piercing-Shops. Portfolio-Optimierung, Stilrichtungs-Keywords und Instagram-Integration.",
      excerpt: "Der komplette Guide für Tattoo-Studios zur lokalen Kundengewinnung durch Suchmaschinenoptimierung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Tattoo Studios: More Clients Through Google",
      metaTitle: "Local SEO for Tattoo Studios | Tattoo Marketing 2026",
      metaDescription: "Local SEO specifically for tattoo studios and piercing shops. Portfolio optimization, style keywords and Instagram integration.",
      excerpt: "The complete guide for tattoo studios to win local clients through search engine optimization.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "🎨",
    keywords: ["tattoo studio seo", "local seo tattoo", "tattoo marketing", "tattoo google business", "piercing studio marketing"],
    featured: false
  },
  {
    slug: "local-seo-apotheken",
    de: {
      title: "Local SEO für Apotheken: Mehr Kunden durch Google",
      metaTitle: "Local SEO für Apotheken | Pharma-Marketing 2026",
      metaDescription: "Local SEO speziell für Apotheken. Notdienst-SEO, Gesundheitsportal-Strategie und lokale Vertrauensbildung für maximale Sichtbarkeit.",
      excerpt: "Der komplette Guide für Apotheken zur lokalen Kundengewinnung durch Suchmaschinenoptimierung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Pharmacies: More Customers Through Google",
      metaTitle: "Local SEO for Pharmacies | Pharma Marketing 2026",
      metaDescription: "Local SEO specifically for pharmacies. Emergency service SEO, health portal strategy and local trust building.",
      excerpt: "The complete guide for pharmacies to win local customers through search engine optimization.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    icon: "💊",
    keywords: ["apotheke seo", "local seo apotheke", "pharma marketing", "apotheke google business", "notdienst seo"],
    featured: false
  },

  // === NEUE ARTIKEL: JANUAR-FEBRUAR 2026 CONTENT-PLAN ===
  {
    slug: "gbp-fotos-optimieren",
    de: {
      title: "Google Business Fotos optimieren: Der komplette Bilder-Guide",
      metaTitle: "Google Business Fotos optimieren | Bilder-Guide 2026",
      metaDescription: "So optimierst du Fotos für dein Google Business Profil. Bildgrößen, Kategorien, Alt-Texte und Best Practices für mehr Klicks.",
      excerpt: "Der ultimative Guide zur Foto-Optimierung für Google Business Profile.",
      category: "Google Business"
    },
    en: {
      title: "Optimize Google Business Photos: The Complete Image Guide",
      metaTitle: "Optimize Google Business Photos | Image Guide 2026",
      metaDescription: "How to optimize photos for your Google Business Profile. Image sizes, categories, alt texts and best practices.",
      excerpt: "The ultimate guide to photo optimization for Google Business Profiles.",
      category: "Google Business"
    },
    readingTime: 14,
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    icon: "📸",
    keywords: ["google business fotos", "gbp bilder", "google maps bilder", "unternehmensfotos", "foto optimierung"],
    featured: false
  },
  {
    slug: "local-seo-mehrstufig-unternehmen",
    de: {
      title: "Local SEO für Franchise & Filialunternehmen: Multi-Location Guide",
      metaTitle: "Local SEO Multi-Location | Franchise & Filialen 2026",
      metaDescription: "Wie Franchise-Unternehmen und Filialisten Local SEO skalieren. Multi-Location-Strategie, Konsistenz und zentrale Steuerung.",
      excerpt: "Der Guide für Unternehmen mit mehreren Standorten zur lokalen Suchmaschinenoptimierung.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Franchise & Multi-Location Businesses: Complete Guide",
      metaTitle: "Local SEO Multi-Location | Franchise Guide 2026",
      metaDescription: "How franchise and multi-location businesses scale Local SEO. Multi-location strategy, consistency and central management.",
      excerpt: "The guide for multi-location businesses on local search engine optimization.",
      category: "Strategy"
    },
    readingTime: 16,
    publishedAt: "2026-01-14",
    updatedAt: "2026-01-14",
    icon: "🏢",
    keywords: ["franchise seo", "multi location seo", "filialunternehmen", "mehrere standorte", "skalierung local seo"],
    featured: false
  },
  {
    slug: "e-e-a-t-lokale-unternehmen",
    de: {
      title: "E-E-A-T für lokale Unternehmen: Expertise beweisen & Vertrauen aufbauen",
      metaTitle: "E-E-A-T für lokale Unternehmen | Trust-Guide 2026",
      metaDescription: "Wie lokale Unternehmen E-E-A-T (Experience, Expertise, Authority, Trust) für bessere Google Rankings nutzen.",
      excerpt: "So baust du als lokales Unternehmen Glaubwürdigkeit und Autorität für bessere Rankings auf.",
      category: "Strategie"
    },
    en: {
      title: "E-E-A-T for Local Businesses: Prove Expertise & Build Trust",
      metaTitle: "E-E-A-T for Local Businesses | Trust Guide 2026",
      metaDescription: "How local businesses use E-E-A-T (Experience, Expertise, Authority, Trust) for better Google rankings.",
      excerpt: "How to build credibility and authority as a local business for better rankings.",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-01-18",
    updatedAt: "2026-01-18",
    icon: "🏆",
    keywords: ["e-e-a-t", "expertise", "authority", "trust", "lokale autorität", "vertrauen aufbauen"],
    featured: false
  },
  {
    slug: "lokale-seo-fuer-neugruender",
    de: {
      title: "Local SEO für Neugründer: Von Null zur lokalen Sichtbarkeit",
      metaTitle: "Local SEO für Neugründer | Startup Guide 2026",
      metaDescription: "Der komplette Local SEO Guide für Gründer und neue Unternehmen. Von der ersten Minute an lokal sichtbar werden.",
      excerpt: "So startest du als Neugründer mit Local SEO durch - Schritt für Schritt von Null an.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Startups: From Zero to Local Visibility",
      metaTitle: "Local SEO for Startups | Beginner Guide 2026",
      metaDescription: "The complete Local SEO guide for founders and new businesses. Become locally visible from day one.",
      excerpt: "How to succeed with Local SEO as a startup - step by step from zero.",
      category: "Strategy"
    },
    readingTime: 18,
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-20",
    icon: "🚀",
    keywords: ["neugründer seo", "startup local seo", "existenzgründung", "neue firma", "lokales marketing startup"],
    featured: false
  },
  {
    slug: "google-business-messaging",
    de: {
      title: "Google Business Messaging: Kundenkommunikation optimal nutzen",
      metaTitle: "Google Business Messaging | Chat-Guide 2026",
      metaDescription: "So nutzt du Google Business Messaging für bessere Kundenkommunikation. Einrichtung, Best Practices und Automatisierung.",
      excerpt: "Der komplette Guide zur Nutzung von Google Business Messaging für mehr Kundeninteraktion.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Messaging: Optimize Customer Communication",
      metaTitle: "Google Business Messaging | Chat Guide 2026",
      metaDescription: "How to use Google Business Messaging for better customer communication. Setup, best practices and automation.",
      excerpt: "The complete guide to using Google Business Messaging for more customer interaction.",
      category: "Google Business"
    },
    readingTime: 12,
    publishedAt: "2026-01-30",
    updatedAt: "2026-01-30",
    icon: "💬",
    keywords: ["google business messaging", "gbp chat", "kundenkommunikation", "google chat", "messaging einrichten"],
    featured: false
  },
  {
    slug: "local-seo-physiotherapie",
    de: {
      title: "Local SEO für Physiotherapie & Heilpraktiker: Patienten gewinnen",
      metaTitle: "Local SEO Physiotherapie | Heilpraktiker Marketing 2026",
      metaDescription: "Local SEO speziell für Physiotherapeuten und Heilpraktiker. Von Behandlungs-Keywords bis zu Gesundheitsportalen.",
      excerpt: "Der branchenspezifische Guide für Physiotherapeuten zur lokalen Patientengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Physical Therapy & Holistic Practitioners: Win Patients",
      metaTitle: "Local SEO Physical Therapy | Practitioner Marketing 2026",
      metaDescription: "Local SEO specifically for physical therapists and holistic practitioners. From treatment keywords to health portals.",
      excerpt: "The industry-specific guide for physical therapists on local patient acquisition.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-01",
    icon: "🏃",
    keywords: ["physiotherapie seo", "heilpraktiker marketing", "local seo therapie", "patientengewinnung", "wellness marketing"],
    featured: false
  },
  {
    slug: "local-seo-notdienst-keywords",
    de: {
      title: "Notdienst-Keywords: Wenn Kunden dringend suchen",
      metaTitle: "Notdienst-Keywords optimieren | Emergency SEO 2026",
      metaDescription: "So optimierst du für Notdienst-Suchanfragen. Keywords, Google Ads und lokale Sichtbarkeit für dringende Kundenanfragen.",
      excerpt: "Der Guide zur Optimierung für Notdienst- und Sofortbedarf-Suchanfragen.",
      category: "Strategie"
    },
    en: {
      title: "Emergency Service Keywords: When Customers Search Urgently",
      metaTitle: "Emergency Service Keywords | SEO Guide 2026",
      metaDescription: "How to optimize for emergency search queries. Keywords, Google Ads and local visibility for urgent customer needs.",
      excerpt: "The guide to optimizing for emergency and immediate need search queries.",
      category: "Strategy"
    },
    readingTime: 13,
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    icon: "🚨",
    keywords: ["notdienst seo", "emergency keywords", "sofort hilfe", "24 stunden service", "dringende suche"],
    featured: false
  },
  {
    slug: "google-business-kategorien-guide",
    de: {
      title: "Google Business Kategorien: Welche passt zu deinem Unternehmen?",
      metaTitle: "Google Business Kategorien | Vollständiger Guide 2026",
      metaDescription: "Die richtige Google Business Kategorie wählen. Haupt- und Nebenkategorien, Branchenübersicht und Optimierungstipps.",
      excerpt: "Der komplette Guide zur Auswahl der richtigen Google Business Kategorien.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Categories: Which Fits Your Business?",
      metaTitle: "Google Business Categories | Complete Guide 2026",
      metaDescription: "Choosing the right Google Business category. Primary and secondary categories, industry overview and optimization tips.",
      excerpt: "The complete guide to choosing the right Google Business categories.",
      category: "Google Business"
    },
    readingTime: 15,
    publishedAt: "2026-02-05",
    updatedAt: "2026-02-05",
    icon: "📁",
    keywords: ["google business kategorien", "gbp category", "branchenkategorie", "kategorie wählen", "unternehmenskategorie"],
    featured: false
  },
  {
    slug: "local-seo-zahnarzt",
    de: {
      title: "Local SEO für Zahnärzte: Mehr Patienten durch Google",
      metaTitle: "Local SEO Zahnarzt | Zahnarzt Marketing 2026",
      metaDescription: "Local SEO speziell für Zahnarztpraxen. Von Behandlungs-Keywords über Arztbewertungsportale bis zur Website-Optimierung.",
      excerpt: "Der branchenspezifische Guide für Zahnärzte zur lokalen Patientengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Dentists: More Patients Through Google",
      metaTitle: "Local SEO Dentist | Dental Marketing 2026",
      metaDescription: "Local SEO specifically for dental practices. From treatment keywords to doctor review portals to website optimization.",
      excerpt: "The industry-specific guide for dentists on local patient acquisition.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-02-08",
    updatedAt: "2026-02-08",
    icon: "🦷",
    keywords: ["zahnarzt seo", "dental marketing", "local seo zahnarzt", "patientengewinnung zahnarzt", "zahnarztpraxis marketing"],
    featured: false
  },
  {
    slug: "lokale-events-marketing",
    de: {
      title: "Lokale Events für SEO nutzen: Sponsoring & Veranstaltungen",
      metaTitle: "Lokale Events für SEO | Event-Marketing 2026",
      metaDescription: "Wie du lokale Events und Sponsoring für bessere Local SEO nutzt. Backlinks, Markenbekanntheit und lokale Autorität aufbauen.",
      excerpt: "Der Guide zur Nutzung lokaler Events für mehr Sichtbarkeit und bessere Rankings.",
      category: "Strategie"
    },
    en: {
      title: "Using Local Events for SEO: Sponsorship & Events",
      metaTitle: "Local Events for SEO | Event Marketing 2026",
      metaDescription: "How to use local events and sponsorship for better Local SEO. Build backlinks, brand awareness and local authority.",
      excerpt: "The guide to using local events for more visibility and better rankings.",
      category: "Strategy"
    },
    readingTime: 14,
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    icon: "🎉",
    keywords: ["lokale events seo", "sponsoring marketing", "veranstaltungen", "lokale autorität", "event backlinks"],
    featured: false
  },
  {
    slug: "google-business-produkte-services",
    de: {
      title: "Google Business Produkte & Services optimal präsentieren",
      metaTitle: "Google Business Produkte & Services | Guide 2026",
      metaDescription: "So nutzt du Produkte und Services in deinem Google Business Profil. Katalog erstellen, Preise, Beschreibungen und mehr.",
      excerpt: "Der komplette Guide zur optimalen Nutzung von Produkten und Services im GBP.",
      category: "Google Business"
    },
    en: {
      title: "Present Google Business Products & Services Optimally",
      metaTitle: "Google Business Products & Services | Guide 2026",
      metaDescription: "How to use products and services in your Google Business Profile. Create catalogs, prices, descriptions and more.",
      excerpt: "The complete guide to optimal use of products and services in GBP.",
      category: "Google Business"
    },
    readingTime: 13,
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    icon: "🛍️",
    keywords: ["google business produkte", "gbp services", "produktkatalog", "dienstleistungen präsentieren", "preise google"],
    featured: false
  },
  {
    slug: "local-seo-optiker",
    de: {
      title: "Local SEO für Optiker & Hörakustiker: Kunden gewinnen",
      metaTitle: "Local SEO Optiker & Hörakustiker | Marketing 2026",
      metaDescription: "Local SEO speziell für Optiker und Hörakustiker. Von Produktkatalog bis Terminbuchung - alles für mehr lokale Kunden.",
      excerpt: "Der branchenspezifische Guide für Optiker und Hörakustiker zur lokalen Kundengewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Opticians & Hearing Aid Specialists: Win Customers",
      metaTitle: "Local SEO Opticians | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for opticians and hearing aid specialists. From product catalog to appointment booking.",
      excerpt: "The industry-specific guide for opticians on local customer acquisition.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-02-14",
    updatedAt: "2026-02-14",
    icon: "👓",
    keywords: ["optiker seo", "hörakustiker marketing", "local seo optiker", "brillen marketing", "augenoptik seo"],
    featured: false
  },
  {
    slug: "bewertungs-antworten-vorlagen",
    de: {
      title: "Bewertungs-Antworten: 50 Vorlagen für jede Situation",
      metaTitle: "Bewertungs-Antworten Vorlagen | 50 Templates 2026",
      metaDescription: "50 Vorlagen für professionelle Antworten auf Google Bewertungen. Positive, negative und neutrale Rezensionen richtig beantworten.",
      excerpt: "Die ultimative Sammlung von Antwort-Vorlagen für alle Arten von Google Bewertungen.",
      category: "Bewertungen"
    },
    en: {
      title: "Review Response Templates: 50 Templates for Every Situation",
      metaTitle: "Review Response Templates | 50 Templates 2026",
      metaDescription: "50 templates for professional responses to Google reviews. How to respond to positive, negative and neutral reviews.",
      excerpt: "The ultimate collection of response templates for all types of Google reviews.",
      category: "Reviews"
    },
    readingTime: 18,
    publishedAt: "2026-02-16",
    updatedAt: "2026-02-16",
    icon: "📝",
    keywords: ["bewertungen antworten", "review response", "antwort vorlagen", "google rezensionen", "kundenfeedback"],
    featured: true
  },
  {
    slug: "local-seo-elektrotechnik",
    de: {
      title: "Local SEO für Elektriker & Elektrotechniker: Mehr Aufträge",
      metaTitle: "Local SEO Elektriker | Elektrotechnik Marketing 2026",
      metaDescription: "Local SEO speziell für Elektriker und Elektrotechnik-Betriebe. Notdienst-SEO, Projektbilder und lokale Sichtbarkeit.",
      excerpt: "Der branchenspezifische Guide für Elektriker zur lokalen Auftragsgewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Electricians: More Jobs Through Google",
      metaTitle: "Local SEO Electricians | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for electricians and electrical businesses. Emergency service SEO, project images and local visibility.",
      excerpt: "The industry-specific guide for electricians on local job acquisition.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-18",
    icon: "⚡",
    keywords: ["elektriker seo", "elektrotechnik marketing", "local seo elektriker", "elektro notdienst", "elektrofirma marketing"],
    featured: false
  },
  {
    slug: "google-business-insights-verstehen",
    de: {
      title: "Google Business Insights richtig verstehen & nutzen",
      metaTitle: "Google Business Insights | Analytics Guide 2026",
      metaDescription: "So interpretierst du Google Business Insights richtig. Alle Metriken erklärt, Benchmarks und Optimierungstipps.",
      excerpt: "Der komplette Guide zum Verstehen und Nutzen von Google Business Insights.",
      category: "Google Business"
    },
    en: {
      title: "Understanding & Using Google Business Insights Correctly",
      metaTitle: "Google Business Insights | Analytics Guide 2026",
      metaDescription: "How to interpret Google Business Insights correctly. All metrics explained, benchmarks and optimization tips.",
      excerpt: "The complete guide to understanding and using Google Business Insights.",
      category: "Google Business"
    },
    readingTime: 15,
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    icon: "📊",
    keywords: ["google business insights", "gbp analytics", "statistiken verstehen", "performance messen", "google metriken"],
    featured: false
  },
  {
    slug: "local-seo-maler-lackierer",
    de: {
      title: "Local SEO für Maler & Lackierer: Mehr Aufträge gewinnen",
      metaTitle: "Local SEO Maler & Lackierer | Marketing 2026",
      metaDescription: "Local SEO speziell für Malerbetriebe und Lackierer. Vorher-Nachher-Galerie, Farbberatungs-Keywords und lokale Sichtbarkeit.",
      excerpt: "Der branchenspezifische Guide für Maler zur lokalen Auftragsgewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Painters: Win More Jobs Through Google",
      metaTitle: "Local SEO Painters | Marketing Guide 2026",
      metaDescription: "Local SEO specifically for painting businesses. Before-after gallery, color consultation keywords and local visibility.",
      excerpt: "The industry-specific guide for painters on local job acquisition.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    icon: "🎨",
    keywords: ["maler seo", "lackierer marketing", "local seo maler", "malerbetrieb marketing", "renovierung seo"],
    featured: false
  },
  {
    slug: "lokale-influencer-kooperationen",
    de: {
      title: "Lokale Influencer-Marketing: Kooperationen aufbauen",
      metaTitle: "Lokale Influencer Marketing | Kooperations-Guide 2026",
      metaDescription: "Wie lokale Unternehmen mit Mikro-Influencern kooperieren. Von der Suche bis zur erfolgreichen Kampagne.",
      excerpt: "Der Guide für lokale Unternehmen zum Aufbau von Influencer-Kooperationen.",
      category: "Strategie"
    },
    en: {
      title: "Local Influencer Marketing: Building Partnerships",
      metaTitle: "Local Influencer Marketing | Partnership Guide 2026",
      metaDescription: "How local businesses partner with micro-influencers. From finding to successful campaigns.",
      excerpt: "The guide for local businesses to build influencer partnerships.",
      category: "Strategy"
    },
    readingTime: 15,
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    icon: "🤳",
    keywords: ["lokale influencer", "micro influencer", "influencer marketing", "kooperationen", "lokale reichweite"],
    featured: false
  },
  {
    slug: "local-seo-sanitaer-heizung",
    de: {
      title: "Local SEO für SHK-Betriebe: Sanitär, Heizung, Klima",
      metaTitle: "Local SEO SHK | Sanitär Heizung Klima 2026",
      metaDescription: "Local SEO speziell für SHK-Betriebe. Von Notdienst-SEO über Markenpartnerschaften bis zur saisonalen Optimierung.",
      excerpt: "Der branchenspezifische Guide für SHK-Betriebe zur lokalen Auftragsgewinnung.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for HVAC Businesses: Plumbing, Heating, Cooling",
      metaTitle: "Local SEO HVAC | Plumbing Heating Cooling 2026",
      metaDescription: "Local SEO specifically for HVAC businesses. From emergency service SEO to brand partnerships to seasonal optimization.",
      excerpt: "The industry-specific guide for HVAC businesses on local job acquisition.",
      category: "Industries"
    },
    readingTime: 15,
    publishedAt: "2026-02-26",
    updatedAt: "2026-02-26",
    icon: "🔧",
    keywords: ["shk seo", "sanitär marketing", "heizung seo", "klima marketing", "installateur seo"],
    featured: false
  },
  {
    slug: "local-seo-jahresplanung",
    de: {
      title: "Local SEO Jahresplanung: 12-Monats-Kalender für lokale Unternehmen",
      metaTitle: "Local SEO Jahresplanung | 12-Monats-Kalender 2026",
      metaDescription: "Der komplette Jahresplan für Local SEO. Monatliche Aufgaben, saisonale Optimierung und strategische Meilensteine.",
      excerpt: "Der strukturierte 12-Monats-Plan für nachhaltige Local SEO Erfolge.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Annual Planning: 12-Month Calendar for Local Businesses",
      metaTitle: "Local SEO Annual Planning | 12-Month Calendar 2026",
      metaDescription: "The complete annual plan for Local SEO. Monthly tasks, seasonal optimization and strategic milestones.",
      excerpt: "The structured 12-month plan for sustainable Local SEO success.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-02-28",
    updatedAt: "2026-02-28",
    icon: "📅",
    keywords: ["local seo jahresplan", "seo kalender", "monatliche aufgaben", "seo planung", "marketing kalender"],
    featured: true
  },
  // === TROUBLESHOOTING ARTIKEL ===
  {
    slug: "gbp-suspendiert-reaktivieren",
    de: {
      title: "Google Business Profil suspendiert – So stellst du es wieder her (2026 Anleitung)",
      metaTitle: "GBP Suspendiert? So reaktivierst du dein Profil | Anleitung 2026",
      metaDescription: "Dein Google Business Profil wurde suspendiert? Erfahre Schritt für Schritt, wie du eine Soft oder Hard Suspension erkennst und dein Profil erfolgreich reaktivierst.",
      excerpt: "Der komplette Guide zur Reaktivierung eines suspendierten Google Business Profils mit Diagnose-Tool und Appeal-Vorlagen.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Profile Suspended – How to Restore It (2026 Guide)",
      metaTitle: "GBP Suspended? How to Reactivate Your Profile | 2026 Guide",
      metaDescription: "Your Google Business Profile was suspended? Learn step by step how to identify a soft or hard suspension and successfully reactivate your profile.",
      excerpt: "The complete guide to reactivating a suspended Google Business Profile with diagnostic tool and appeal templates.",
      category: "Troubleshooting"
    },
    readingTime: 14,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🚫",
    keywords: ["gbp suspendiert", "google business suspendiert", "profil reaktivieren", "suspension beheben", "google appeal"]
  },
  {
    slug: "gbp-verifizierung-fehlgeschlagen",
    de: {
      title: "Google Business Verifizierung schlägt fehl – 8 Lösungen für alle Probleme (2026)",
      metaTitle: "GBP Verifizierung fehlgeschlagen? 8 Lösungen | Guide 2026",
      metaDescription: "Deine Google Business Verifizierung klappt nicht? Postkarte nicht erhalten, Code ungültig oder Video abgelehnt? Unser Problemlöser-Wizard zeigt dir die passende Lösung.",
      excerpt: "Der komplette Troubleshooting-Guide für alle Google Business Verifizierungsprobleme mit interaktivem Problemlöser.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Verification Fails – 8 Solutions for All Problems (2026)",
      metaTitle: "GBP Verification Failed? 8 Solutions | 2026 Guide",
      metaDescription: "Your Google Business verification isn't working? Postcard not received, code invalid or video rejected? Our problem solver wizard shows you the right solution.",
      excerpt: "The complete troubleshooting guide for all Google Business verification problems with interactive problem solver.",
      category: "Troubleshooting"
    },
    readingTime: 12,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "✅",
    keywords: ["gbp verifizierung", "google verifizierung fehlgeschlagen", "postkarte nicht erhalten", "verifizierungscode", "video verifizierung"]
  },
  {
    slug: "duplicate-listing-entfernen",
    de: {
      title: "Doppelte Google-Einträge löschen – Duplicate Listing Anleitung (2026)",
      metaTitle: "Duplicate Listing entfernen: Doppelte Google-Einträge löschen | 2026",
      metaDescription: "Hast du mehrere Google Business Einträge für denselben Standort? Lerne wie du Duplicates findest, richtig entfernst und zukünftige Dopplungen verhinderst.",
      excerpt: "Der komplette Guide zum Finden und Entfernen von doppelten Google Business Einträgen mit interaktiver Checkliste.",
      category: "Troubleshooting"
    },
    en: {
      title: "Delete Duplicate Google Listings – Duplicate Listing Guide (2026)",
      metaTitle: "Remove Duplicate Listing: Delete Duplicate Google Listings | 2026",
      metaDescription: "Do you have multiple Google Business listings for the same location? Learn how to find duplicates, properly remove them and prevent future duplications.",
      excerpt: "The complete guide to finding and removing duplicate Google Business listings with interactive checklist.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "📋",
    keywords: ["duplicate listing", "doppelte einträge", "google business duplicate", "duplicate entfernen", "mehrere google einträge"]
  },
  {
    slug: "gbp-bewertung-loeschen-anleitung",
    de: {
      title: "Google Bewertung löschen lassen – Schritt-für-Schritt Anleitung (2026)",
      metaTitle: "Google Bewertung löschen: Anleitung zum Melden & Entfernen | 2026",
      metaDescription: "Fake-Bewertung oder Verleumdung auf Google? Lerne welche Bewertungen entfernt werden können und wie du erfolgreich gegen unfaire Reviews vorgehst.",
      excerpt: "Der komplette Guide zum Entfernen von unangemessenen Google Bewertungen mit Erfolgsstrategien und rechtlichen Optionen.",
      category: "Troubleshooting"
    },
    en: {
      title: "Get Google Review Deleted – Step-by-Step Guide (2026)",
      metaTitle: "Delete Google Review: Guide to Reporting & Removal | 2026",
      metaDescription: "Fake review or defamation on Google? Learn which reviews can be removed and how to successfully take action against unfair reviews.",
      excerpt: "The complete guide to removing inappropriate Google reviews with success strategies and legal options.",
      category: "Troubleshooting"
    },
    readingTime: 13,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🗑️",
    keywords: ["google bewertung löschen", "fake bewertung melden", "bewertung entfernen", "negative bewertung löschen", "google review löschen"]
  },
  {
    slug: "ranking-ploetzlich-verschwunden",
    de: {
      title: "Google Ranking plötzlich verschwunden – Ursachen & Soforthilfe (2026)",
      metaTitle: "Ranking verschwunden? Diagnose & Soforthilfe | Guide 2026",
      metaDescription: "Dein Google Ranking ist plötzlich weg? Finde heraus ob es an einem Update, einer Penalty oder technischen Problemen liegt. Mit Diagnose-Flowchart.",
      excerpt: "Schnelle Diagnose und Lösungen wenn dein lokales Google Ranking plötzlich einbricht oder verschwindet.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Ranking Suddenly Disappeared – Causes & Immediate Help (2026)",
      metaTitle: "Ranking Disappeared? Diagnosis & Immediate Help | 2026 Guide",
      metaDescription: "Your Google ranking suddenly gone? Find out if it's due to an update, penalty or technical issues. With diagnostic flowchart.",
      excerpt: "Quick diagnosis and solutions when your local Google ranking suddenly drops or disappears.",
      category: "Troubleshooting"
    },
    readingTime: 10,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "📉",
    keywords: ["ranking verschwunden", "google ranking weg", "ranking einbruch", "google penalty", "ranking verloren"]
  },
  {
    slug: "gbp-nicht-in-suche-sichtbar",
    de: {
      title: "Google Business Profil nicht in Suche sichtbar – 12 Lösungen (2026)",
      metaTitle: "GBP nicht sichtbar in Google? 12 Lösungen | Guide 2026",
      metaDescription: "Dein Google Business Profil taucht nicht in der Suche auf? Finde heraus warum und wie du wieder sichtbar wirst. Mit Diagnose-Tool.",
      excerpt: "Alle Gründe warum dein GBP in Google nicht angezeigt wird und wie du das Problem behebst.",
      category: "Troubleshooting"
    },
    en: {
      title: "Google Business Profile Not Visible in Search – 12 Solutions (2026)",
      metaTitle: "GBP Not Visible in Google? 12 Solutions | 2026 Guide",
      metaDescription: "Your Google Business Profile doesn't appear in search? Find out why and how to become visible again. With diagnostic tool.",
      excerpt: "All reasons why your GBP isn't showing in Google and how to fix the problem.",
      category: "Troubleshooting"
    },
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "👁️",
    keywords: ["gbp nicht sichtbar", "google business nicht gefunden", "profil nicht angezeigt", "maps eintrag fehlt", "gbp indexierung"]
  },
  {
    slug: "gbp-mehrere-standorte",
    de: {
      title: "Google Business für mehrere Standorte verwalten – Der Multi-Location Guide (2026)",
      metaTitle: "GBP mehrere Standorte verwalten | Multi-Location Guide 2026",
      metaDescription: "Wie du mehrere Google Business Profile effizient verwaltest. Bulk-Uploads, Standortgruppen und Best Practices für Filialisten.",
      excerpt: "Der komplette Guide zur Verwaltung mehrerer Google Business Standorte mit Bulk-Tools und Organisationstipps.",
      category: "Google Business"
    },
    en: {
      title: "Managing Google Business for Multiple Locations – The Multi-Location Guide (2026)",
      metaTitle: "Manage GBP Multiple Locations | Multi-Location Guide 2026",
      metaDescription: "How to efficiently manage multiple Google Business Profiles. Bulk uploads, location groups and best practices for multi-location businesses.",
      excerpt: "The complete guide to managing multiple Google Business locations with bulk tools and organization tips.",
      category: "Google Business"
    },
    readingTime: 15,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🏢",
    keywords: ["gbp mehrere standorte", "multi location seo", "standortgruppen", "bulk upload", "filialisten google"]
  },
  {
    slug: "gbp-oeffnungszeiten-sondertage",
    de: {
      title: "Google Business Öffnungszeiten & Sondertage richtig einstellen (2026)",
      metaTitle: "GBP Öffnungszeiten & Feiertage einstellen | Guide 2026",
      metaDescription: "Wie du Öffnungszeiten, Feiertage und Sonderöffnungszeiten in Google Business korrekt einstellst. Mit saisonalen Tipps.",
      excerpt: "Der komplette Guide zu Öffnungszeiten in Google Business inkl. Feiertage, Betriebsferien und Sonderöffnungen.",
      category: "Google Business"
    },
    en: {
      title: "Setting Google Business Hours & Special Days Correctly (2026)",
      metaTitle: "Setting GBP Hours & Holidays | 2026 Guide",
      metaDescription: "How to correctly set opening hours, holidays and special hours in Google Business. With seasonal tips.",
      excerpt: "The complete guide to opening hours in Google Business incl. holidays, vacation periods and special hours.",
      category: "Google Business"
    },
    readingTime: 9,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🕐",
    keywords: ["gbp öffnungszeiten", "google business feiertage", "sonderöffnungszeiten", "betriebsferien eintragen", "öffnungszeiten ändern"]
  },
  {
    slug: "gbp-attribute-richtig-nutzen",
    de: {
      title: "Google Business Attribute richtig nutzen – Alle Optionen erklärt (2026)",
      metaTitle: "GBP Attribute richtig nutzen | Alle Optionen erklärt 2026",
      metaDescription: "Von LGBTQ+-freundlich bis Rollstuhlzugang: Welche Google Business Attribute es gibt und wie du sie für mehr Sichtbarkeit nutzt.",
      excerpt: "Der komplette Überblick über alle Google Business Attribute und wie sie dein Ranking und deine Kundenansprache verbessern.",
      category: "Google Business"
    },
    en: {
      title: "Using Google Business Attributes Correctly – All Options Explained (2026)",
      metaTitle: "Using GBP Attributes Correctly | All Options Explained 2026",
      metaDescription: "From LGBTQ+-friendly to wheelchair access: What Google Business attributes exist and how to use them for more visibility.",
      excerpt: "The complete overview of all Google Business attributes and how they improve your ranking and customer appeal.",
      category: "Google Business"
    },
    readingTime: 10,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🏷️",
    keywords: ["gbp attribute", "google business attribute", "barrierefreiheit", "lgbtq freundlich", "ausstattungsmerkmale"]
  },
  {
    slug: "local-seo-vs-maps-seo",
    de: {
      title: "Local SEO vs Maps SEO – Was ist der Unterschied? (2026)",
      metaTitle: "Local SEO vs Maps SEO: Der Unterschied erklärt | 2026",
      metaDescription: "Was ist der Unterschied zwischen Local SEO und Google Maps SEO? Wann brauchst du was und wie optimierst du für beides?",
      excerpt: "Die Unterschiede und Gemeinsamkeiten von Local SEO und Maps SEO verständlich erklärt mit konkreten Optimierungstipps.",
      category: "Local SEO"
    },
    en: {
      title: "Local SEO vs Maps SEO – What's the Difference? (2026)",
      metaTitle: "Local SEO vs Maps SEO: The Difference Explained | 2026",
      metaDescription: "What's the difference between Local SEO and Google Maps SEO? When do you need what and how do you optimize for both?",
      excerpt: "The differences and similarities of Local SEO and Maps SEO explained clearly with specific optimization tips.",
      category: "Local SEO"
    },
    readingTime: 8,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🗺️",
    keywords: ["local seo vs maps seo", "unterschied local seo", "google maps seo", "lokale seo", "maps optimierung"]
  },
  {
    slug: "local-citations-2025",
    de: {
      title: "Local Citations 2026: Die wichtigsten Branchenbücher & Verzeichnisse",
      metaTitle: "Local Citations 2026: Top Branchenbücher & Verzeichnisse | Guide",
      metaDescription: "Welche Branchenbücher und Verzeichnisse sind 2026 noch relevant? Der komplette Guide zu Citations mit Priorisierung nach Branche.",
      excerpt: "Die wichtigsten Local Citations für 2026 mit branchenspezifischen Empfehlungen und Priorisierung.",
      category: "Local SEO"
    },
    en: {
      title: "Local Citations 2026: The Most Important Directories & Listings",
      metaTitle: "Local Citations 2026: Top Directories & Listings | Guide",
      metaDescription: "Which business directories and listings are still relevant in 2026? The complete guide to citations with prioritization by industry.",
      excerpt: "The most important Local Citations for 2026 with industry-specific recommendations and prioritization.",
      category: "Local SEO"
    },
    readingTime: 14,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "📚",
    keywords: ["local citations", "branchenbücher", "verzeichnisse", "citations aufbauen", "nap einträge"]
  },
  {
    slug: "local-link-building",
    de: {
      title: "Local Link Building: Backlinks für lokale Unternehmen aufbauen (2026)",
      metaTitle: "Local Link Building: Backlinks für lokale Unternehmen | Guide 2026",
      metaDescription: "Wie du als lokales Unternehmen hochwertige Backlinks aufbaust. Lokale Strategien, Sponsorings und Community-Links für bessere Rankings.",
      excerpt: "Der komplette Guide zum Aufbau lokaler Backlinks mit praktischen Strategien für kleine und mittlere Unternehmen.",
      category: "Local SEO"
    },
    en: {
      title: "Local Link Building: Building Backlinks for Local Businesses (2026)",
      metaTitle: "Local Link Building: Backlinks for Local Businesses | 2026 Guide",
      metaDescription: "How to build quality backlinks as a local business. Local strategies, sponsorships and community links for better rankings.",
      excerpt: "The complete guide to building local backlinks with practical strategies for small and medium businesses.",
      category: "Local SEO"
    },
    readingTime: 16,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "🔗",
    keywords: ["local link building", "lokale backlinks", "backlinks aufbauen", "community links", "lokale seo links"]
  },
  {
    slug: "schema-markup-local-seo",
    de: {
      title: "Schema Markup für Local SEO: Strukturierte Daten für lokale Unternehmen (2026)",
      metaTitle: "Schema Markup Local SEO: Strukturierte Daten | Guide 2026",
      metaDescription: "Wie du Schema Markup für dein lokales Unternehmen implementierst. LocalBusiness Schema, FAQPage und mehr für Rich Snippets.",
      excerpt: "Der technische Guide zu strukturierten Daten für lokale Unternehmen mit Code-Beispielen und Generator.",
      category: "Technical SEO"
    },
    en: {
      title: "Schema Markup for Local SEO: Structured Data for Local Businesses (2026)",
      metaTitle: "Schema Markup Local SEO: Structured Data | 2026 Guide",
      metaDescription: "How to implement Schema Markup for your local business. LocalBusiness Schema, FAQPage and more for Rich Snippets.",
      excerpt: "The technical guide to structured data for local businesses with code examples and generator.",
      category: "Technical SEO"
    },
    readingTime: 18,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "📝",
    keywords: ["schema markup", "strukturierte daten", "local business schema", "rich snippets", "json-ld"]
  },
  {
    slug: "local-content-marketing",
    de: {
      title: "Local Content Marketing: Inhalte für lokale Zielgruppen erstellen (2026)",
      metaTitle: "Local Content Marketing: Lokale Inhalte erstellen | Guide 2026",
      metaDescription: "Wie du Inhalte erstellst, die deine lokale Zielgruppe ansprechen. Lokale Stories, Events und Community-Content für mehr Reichweite.",
      excerpt: "Der Strategie-Guide für lokales Content Marketing mit Ideen und Best Practices für lokale Unternehmen.",
      category: "Content"
    },
    en: {
      title: "Local Content Marketing: Creating Content for Local Audiences (2026)",
      metaTitle: "Local Content Marketing: Creating Local Content | 2026 Guide",
      metaDescription: "How to create content that appeals to your local audience. Local stories, events and community content for more reach.",
      excerpt: "The strategy guide for local content marketing with ideas and best practices for local businesses.",
      category: "Content"
    },
    readingTime: 14,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "✍️",
    keywords: ["local content marketing", "lokaler content", "lokale inhalte", "community content", "lokale stories"]
  },
  {
    slug: "local-seo-mehrstufig-unternehmen",
    de: {
      title: "Local SEO für mehrstufige Unternehmen: Multi-Location Strategien (2026)",
      metaTitle: "Local SEO Multi-Location: Strategien für Filialisten | Guide 2026",
      metaDescription: "Wie Unternehmen mit mehreren Standorten ihre lokale SEO skalieren. Zentrale Verwaltung, lokale Anpassung und einheitliches Branding.",
      excerpt: "Der Enterprise-Guide für Multi-Location Local SEO mit Skalierungsstrategien und Best Practices.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Multi-Location Businesses: Scaling Strategies (2026)",
      metaTitle: "Local SEO Multi-Location: Strategies for Franchises | 2026 Guide",
      metaDescription: "How multi-location businesses scale their local SEO. Central management, local adaptation and consistent branding.",
      excerpt: "The enterprise guide for multi-location Local SEO with scaling strategies and best practices.",
      category: "Strategy"
    },
    readingTime: 17,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "🏬",
    keywords: ["multi location seo", "mehrstufige unternehmen", "filialisten seo", "franchise seo", "standort seo"]
  },
  {
    slug: "local-seo-neugruender",
    de: {
      title: "Local SEO für Neugründer: Der Starter-Guide (2026)",
      metaTitle: "Local SEO für Neugründer: Starter-Guide | 2026",
      metaDescription: "Du hast gerade gegründet? So baust du von Anfang an deine lokale Online-Präsenz auf. Mit 90-Tage-Plan und Prioritäten-Guide.",
      excerpt: "Der perfekte Einstieg in Local SEO für Neugründer mit konkretem Zeitplan und Prioritäten.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO for Startups: The Starter Guide (2026)",
      metaTitle: "Local SEO for Startups: Starter Guide | 2026",
      metaDescription: "Just started your business? How to build your local online presence from the beginning. With 90-day plan and priority guide.",
      excerpt: "The perfect introduction to Local SEO for startups with concrete timeline and priorities.",
      category: "Strategy"
    },
    readingTime: 12,
    publishedAt: "2025-01-11",
    updatedAt: "2025-01-11",
    icon: "🚀",
    keywords: ["local seo neugründer", "startup seo", "gründer marketing", "neue firma seo", "existenzgründung seo"]
  },
  {
    slug: "local-seo-optiker",
    de: {
      title: "Local SEO für Optiker & Hörakustiker: Mehr Kunden durch Google (2026)",
      metaTitle: "Local SEO für Optiker & Hörakustiker | Branchenguide 2026",
      metaDescription: "Wie Optiker und Hörakustiker durch lokale SEO mehr Kunden gewinnen. Branchenspezifische Keywords, Portale und Google Business Tipps.",
      excerpt: "Der Branchenguide für Optiker und Hörakustiker mit spezifischen SEO-Strategien und Portallisten.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Opticians & Hearing Aid Specialists: More Customers Through Google (2026)",
      metaTitle: "Local SEO for Opticians & Hearing Aid Specialists | Industry Guide 2026",
      metaDescription: "How opticians and hearing aid specialists win more customers through local SEO. Industry-specific keywords, portals and Google Business tips.",
      excerpt: "The industry guide for opticians and hearing aid specialists with specific SEO strategies and portal lists.",
      category: "Industries"
    },
    readingTime: 13,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "👓",
    keywords: ["optiker seo", "hörakustiker marketing", "brillen local seo", "optiker google", "hörakustiker seo"]
  },
  {
    slug: "local-seo-notdienst-keywords",
    de: {
      title: "Notdienst Keywords: So wirst du bei Notfällen gefunden (2026)",
      metaTitle: "Notdienst Keywords: Bei Notfällen gefunden werden | Guide 2026",
      metaDescription: "Wie du für Notfall-Suchen rankst. Schlüsseldienst, Notarzt, Klempner Notdienst - die richtigen Keywords und Strategien.",
      excerpt: "Der Spezial-Guide für Notdienst-Keywords und die Optimierung für dringende Suchanfragen.",
      category: "Strategie"
    },
    en: {
      title: "Emergency Service Keywords: How to Be Found in Emergencies (2026)",
      metaTitle: "Emergency Service Keywords: Being Found in Emergencies | 2026 Guide",
      metaDescription: "How to rank for emergency searches. Locksmith, emergency doctor, emergency plumber - the right keywords and strategies.",
      excerpt: "The special guide for emergency service keywords and optimization for urgent search queries.",
      category: "Strategy"
    },
    readingTime: 11,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "🚨",
    keywords: ["notdienst keywords", "notfall seo", "schlüsseldienst seo", "24h service ranking", "emergency keywords"]
  },
  {
    slug: "local-seo-physiotherapie",
    de: {
      title: "Local SEO für Physiotherapeuten: Mehr Patienten durch Google (2026)",
      metaTitle: "Local SEO für Physiotherapeuten | Branchenguide 2026",
      metaDescription: "Wie Physiotherapie-Praxen durch lokale SEO mehr Patienten gewinnen. Spezialisierungen, Kassenzulassung und lokale Keywords.",
      excerpt: "Der Branchenguide für Physiotherapeuten mit spezifischen SEO-Strategien und Keyword-Listen.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Physical Therapists: More Patients Through Google (2026)",
      metaTitle: "Local SEO for Physical Therapists | Industry Guide 2026",
      metaDescription: "How physical therapy practices win more patients through local SEO. Specializations, insurance approval and local keywords.",
      excerpt: "The industry guide for physical therapists with specific SEO strategies and keyword lists.",
      category: "Industries"
    },
    readingTime: 12,
    publishedAt: "2025-01-11",
    updatedAt: "2026-02-08",
    icon: "💪",
    keywords: ["physiotherapie seo", "physio marketing", "krankengymnastik local seo", "physiotherapeut google", "praxis marketing physio"]
  },
  // === NEUE ARTIKEL: Februar 2026 ===
  {
    slug: "local-seo-baeckerei",
    de: {
      title: "Local SEO für Bäckereien: Mehr Kunden durch Google (2026)",
      metaTitle: "Local SEO für Bäckereien | Branchenguide 2026",
      metaDescription: "Wie Bäckereien durch Local SEO mehr Kunden gewinnen. Öffnungszeiten, Food-Fotos, Sonntagsbrötchen-Keywords und saisonales Marketing.",
      excerpt: "Der Branchenguide für Bäckereien und Konditoreien mit spezifischen SEO-Strategien für mehr Laufkundschaft.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO for Bakeries: More Customers Through Google (2026)",
      metaTitle: "Local SEO for Bakeries | Industry Guide 2026",
      metaDescription: "How bakeries win more customers through Local SEO. Opening hours, food photos, keywords and seasonal marketing.",
      excerpt: "The industry guide for bakeries and pastry shops with specific SEO strategies for more walk-in customers.",
      category: "Industries"
    },
    readingTime: 14,
    publishedAt: "2026-02-16",
    updatedAt: "2026-02-16",
    icon: "🥐",
    keywords: ["bäckerei seo", "bäcker local seo", "bäckerei marketing", "konditorei google", "brot seo"]
  },
  {
    slug: "local-seo-hannover",
    de: {
      title: "Local SEO Hannover: Der Guide für niedersächsische Unternehmen",
      metaTitle: "Local SEO Hannover | Städte-Guide 2026",
      metaDescription: "Local SEO speziell für Hannover und Region. Stadtteile, Messe-SEO, lokale Verzeichnisse und Strategien für die Landeshauptstadt.",
      excerpt: "Von Linden bis Südstadt: So wirst du in ganz Hannover bei Google gefunden.",
      category: "Regionen"
    },
    en: {
      title: "Local SEO Hannover: The Guide for Lower Saxony Businesses",
      metaTitle: "Local SEO Hannover | City Guide 2026",
      metaDescription: "Local SEO specifically for Hannover and region. Districts, trade fair SEO, local directories and strategies for the state capital.",
      excerpt: "From Linden to Südstadt: How to be found throughout Hannover on Google.",
      category: "Regions"
    },
    readingTime: 16,
    publishedAt: "2026-02-16",
    updatedAt: "2026-02-16",
    icon: "🏛️",
    keywords: ["local seo hannover", "seo hannover", "marketing hannover", "google ranking hannover", "messe hannover seo"],
    featured: true
  },
  {
    slug: "ai-search-optimization-2026",
    de: {
      title: "AI Search Optimization 2026: So wirst du in der KI-Suche gefunden",
      metaTitle: "AI Search Optimization 2026 | GEO Guide für Local SEO",
      metaDescription: "Wie du dein Unternehmen für Google AI Overviews, ChatGPT und Perplexity optimierst. Der komplette GEO-Guide für lokale Unternehmen.",
      excerpt: "Die Suche verändert sich: AI Overviews, ChatGPT Search und Zero-Click. So bleibst du als lokales Unternehmen sichtbar.",
      category: "Trends"
    },
    en: {
      title: "AI Search Optimization 2026: How to Be Found in AI Search",
      metaTitle: "AI Search Optimization 2026 | GEO Guide for Local SEO",
      metaDescription: "How to optimize your business for Google AI Overviews, ChatGPT and Perplexity. The complete GEO guide for local businesses.",
      excerpt: "Search is changing: AI Overviews, ChatGPT Search and Zero-Click. How to stay visible as a local business.",
      category: "Trends"
    },
    readingTime: 18,
    publishedAt: "2026-02-16",
    updatedAt: "2026-02-16",
    icon: "🤖",
    keywords: ["ai search optimization", "geo seo", "ai overviews optimierung", "chatgpt seo", "generative engine optimization"],
    featured: true
  },
  {
    slug: "seo-ferienwohnungen",
    de: {
      title: "SEO für Ferienwohnungen: Schweiz, Bayern & Österreich – Raus aus der OTA-Falle",
      metaTitle: "SEO Ferienwohnungen Schweiz, Bayern & Österreich | Direktbuchungen statt OTA",
      metaDescription: "Wie Ferienwohnungen durch SEO bis zu 13.500 CHF OTA-Provisionen sparen. Google My Business, AI Search & regionale Strategien für St. Moritz, Zermatt, Bayern.",
      excerpt: "15 % OTA-Provision bei jeder Buchung? SEO für Ferienwohnungen bringt Direktbuchungen, reduziert Abhängigkeit und steigert die Marge.",
      category: "Branche"
    },
    en: {
      title: "SEO for Vacation Rentals: Switzerland, Bavaria & Austria – Escape the OTA Trap",
      metaTitle: "Vacation Rental SEO Switzerland, Bavaria & Austria | Direct Bookings",
      metaDescription: "How vacation rentals save up to 13,500 CHF in OTA commissions through SEO. Google My Business, AI Search & regional strategies for St. Moritz, Zermatt, Bavaria.",
      excerpt: "15% OTA commission per booking? SEO for vacation rentals drives direct bookings, reduces dependency and boosts margins.",
      category: "Industry"
    },
    readingTime: 14,
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    icon: "🏔️",
    keywords: ["seo ferienwohnungen", "ferienwohnung seo schweiz", "vacation rental seo", "direktbuchungen seo", "google my business ferienwohnung", "local seo tourismus"]
  },
  {
    slug: "local-seo-reporting-template",
    de: {
      title: "Local SEO Reporting Template: Monatlicher Report + KPI-Vorlage",
      metaTitle: "Local SEO Reporting Template | Monatliche Vorlage + KPIs 2026",
      metaDescription: "Kostenlose Local SEO Report-Vorlage mit 10 KPIs, wöchentlicher Checkliste und ROI-Berechnung. Monatlichen Report erstellen wie ein Profi.",
      excerpt: "Die komplette Vorlage für professionelles Local SEO Reporting: 10 KPIs, monatlicher Report-Aufbau, Wettbewerber-Vergleich und ROI-Berechnung.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Reporting Template: Monthly Report + KPI Template",
      metaTitle: "Local SEO Reporting Template | Monthly Template + KPIs 2026",
      metaDescription: "Free Local SEO report template with 10 KPIs, weekly checklist and ROI calculation. Create monthly reports like a pro.",
      excerpt: "The complete template for professional Local SEO reporting: 10 KPIs, monthly report structure, competitor comparison and ROI calculation.",
      category: "Strategy"
    },
    readingTime: 16,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "📊",
    keywords: ["local seo reporting", "local seo report vorlage", "local seo kpis", "seo reporting template", "google business report", "local seo metriken"]
  },
  // === TOPIC HUB PAGES ===
  {
    slug: "google-business-profil-hub",
    de: {
      title: "Google Business Profil Hub – Alle Guides & Anleitungen",
      metaTitle: "Google Business Profil Hub – Alle Guides & Anleitungen 2026",
      metaDescription: "Komplette Sammlung aller Google Business Profil Guides: Profil-Optimierung, Bewertungen, Insights, erweiterte Funktionen und Fehlerbehebung.",
      excerpt: "Dein zentrales Nachschlagewerk für alle Google Business Profil Themen. 24+ Artikel zu Optimierung, Bewertungen und Fehlerbehebung.",
      category: "Google Business"
    },
    en: {
      title: "Google Business Profile Hub – All Guides & Tutorials",
      metaTitle: "Google Business Profile Hub – All Guides & Tutorials 2026",
      metaDescription: "Complete collection of all Google Business Profile guides: profile optimization, reviews, insights, advanced features and troubleshooting.",
      excerpt: "Your central reference for all Google Business Profile topics. 24+ articles on optimization, reviews and troubleshooting.",
      category: "Google Business"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "🏢",
    keywords: ["google business profil", "gbp optimierung", "google my business guide", "google business hub"]
  },
  {
    slug: "local-seo-branchen-hub",
    de: {
      title: "Local SEO Branchen-Guides – 22+ Branchen im Überblick",
      metaTitle: "Local SEO Branchen-Guides – 22+ Branchen im Überblick 2026",
      metaDescription: "Branchenspezifische Local SEO Anleitungen für Gastronomie, Gesundheit, Handwerk, Dienstleistungen und Lifestyle.",
      excerpt: "Jede Branche hat eigene Local SEO Herausforderungen. Finde den passenden Guide für dein Business.",
      category: "Branchen"
    },
    en: {
      title: "Local SEO Industry Guides – 22+ Industries Overview",
      metaTitle: "Local SEO Industry Guides – 22+ Industries Overview 2026",
      metaDescription: "Industry-specific Local SEO guides for gastronomy, health, crafts, services and lifestyle.",
      excerpt: "Every industry has unique Local SEO challenges. Find the right guide for your business.",
      category: "Industries"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "🏭",
    keywords: ["local seo branchen", "branchen seo guide", "local seo nach branche", "branchenspezifisches seo"]
  },
  {
    slug: "local-seo-staedte-hub",
    de: {
      title: "Local SEO Städte-Guides – DACH-Region",
      metaTitle: "Local SEO Städte-Guides – 12 Städte in DACH | 2026",
      metaDescription: "Stadtspezifische Local SEO Guides für Berlin, Hamburg, München, Wien, Zürich und mehr. Lokale Besonderheiten für jede Stadt.",
      excerpt: "Stadtspezifische Local SEO Guides mit lokalen Verzeichnissen, Wettbewerbsanalysen und regionalen Tipps.",
      category: "Städte"
    },
    en: {
      title: "Local SEO City Guides – DACH Region",
      metaTitle: "Local SEO City Guides – 12 Cities in DACH | 2026",
      metaDescription: "City-specific Local SEO guides for Berlin, Hamburg, Munich, Vienna, Zurich and more.",
      excerpt: "City-specific Local SEO guides with local directories, competitor analysis and regional tips.",
      category: "Cities"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "🏙️",
    keywords: ["local seo städte", "local seo berlin", "local seo münchen", "local seo wien", "städte seo guide"]
  },
  {
    slug: "bewertungen-reputation-hub",
    de: {
      title: "Bewertungen & Reputation Hub – Alle Guides",
      metaTitle: "Bewertungen & Reputation Hub – Alle Guides 2026",
      metaDescription: "Alle Guides zu Google Bewertungen: Generierung, Antwort-Vorlagen, negative Bewertungen, Review-Schema und Ranking-Impact.",
      excerpt: "Alle Strategien zu Bewertungen – von der Generierung über den Umgang mit Kritik bis zur technischen Implementierung.",
      category: "Bewertungen"
    },
    en: {
      title: "Reviews & Reputation Hub – All Guides",
      metaTitle: "Reviews & Reputation Hub – All Guides 2026",
      metaDescription: "All guides on Google reviews: generation, response templates, negative reviews, review schema and ranking impact.",
      excerpt: "All review strategies – from generation to handling criticism to technical implementation.",
      category: "Reviews"
    },
    readingTime: 5,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "⭐",
    keywords: ["google bewertungen", "bewertungen management", "reputation management", "review strategie", "bewertungen hub"]
  },
  {
    slug: "website-content-ai-suchmaschinen",
    de: {
      title: "Website-Content für AI-Suchmaschinen strukturieren: Der komplette Guide",
      metaTitle: "Website-Content für AI-Suchmaschinen strukturieren | Guide 2026",
      metaDescription: "Lerne wie du deinen Website-Content für ChatGPT, Perplexity und Google AI Overviews optimierst. Semantisches HTML, Schema Markup, llms.txt und AI-Attribute.",
      excerpt: "Schritt-für-Schritt: So machst du deine Website-Inhalte maschinenlesbar und zitierfähig für AI-Suchmaschinen.",
      category: "Technisches SEO"
    },
    en: {
      title: "How to Structure Website Content for AI Search Engines: Complete Guide",
      metaTitle: "Structure Website Content for AI Search Engines | Guide 2026",
      metaDescription: "Learn how to optimize your website content for ChatGPT, Perplexity and Google AI Overviews. Semantic HTML, Schema Markup, llms.txt and AI attributes.",
      excerpt: "Step by step: How to make your website content machine-readable and citable for AI search engines.",
      category: "Technical SEO"
    },
    readingTime: 18,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-05",
    icon: "🤖",
    keywords: ["ai suchmaschinen", "content struktur ai", "geo optimierung", "schema markup ai", "llms.txt", "website ai optimierung", "chatgpt seo", "perplexity optimierung"]
  },
  // === PILLAR PAGE: LOCAL SEO STRATEGIE FÜR KLEINE UNTERNEHMEN ===
  {
    slug: "local-seo-strategie-kleine-unternehmen",
    de: {
      title: "Local SEO Strategie für kleine Unternehmen: Der komplette Aktionsplan 2026",
      metaTitle: "Local SEO Strategie für kleine Unternehmen | Aktionsplan 2026",
      metaDescription: "Die komplette Local-SEO-Strategie für KMU im DACH-Raum: 90-Tage-Plan, Checklisten, Tools & Branchenbeispiele. Kostenlos umsetzbar — ohne Agentur.",
      excerpt: "Schritt-für-Schritt Local-SEO-Strategie für kleine Unternehmen: Google Business Profil, Bewertungen, Citations, Content & Linkbuilding — mit 90-Tage-Aktionsplan für den DACH-Markt.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Strategy for Small Businesses: Complete Action Plan 2026",
      metaTitle: "Local SEO Strategy for Small Businesses | Action Plan 2026",
      metaDescription: "The complete Local SEO strategy for SMBs in the DACH region: 90-day plan, checklists, tools & industry examples. Free to implement — no agency needed.",
      excerpt: "Step-by-step Local SEO strategy for small businesses: Google Business Profile, reviews, citations, content & link building — with a 90-day action plan for the DACH market.",
      category: "Strategy"
    },
    readingTime: 22,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🏪",
    keywords: ["local seo strategie", "local seo kleine unternehmen", "local seo kmu", "lokale seo strategie", "local seo aktionsplan", "local seo dach", "local seo kostenlos", "seo für kleine unternehmen"],
    featured: true
  },
  // === PILLAR PAGE: LOCAL SEO RANKING-FAKTOREN ERKLÄRT ===
  {
    slug: "local-seo-ranking-faktoren-erklaert",
    de: {
      title: "Local SEO Ranking-Faktoren erklärt: Alle Signale im Detail 2026",
      metaTitle: "Local SEO Ranking-Faktoren 2026: Vollständige Analyse & Vergleich",
      metaDescription: "Alle Local SEO Ranking-Faktoren erklärt: GBP-Signale (36 %), On-Page (18 %), Bewertungen (17 %), Links (13 %), Citations (7 %). Mit Vergleichstabellen & Aktionsplan.",
      excerpt: "Die vollständige Analyse aller lokalen Ranking-Faktoren: Google Business Profil, On-Page, Bewertungen, Links, Citations und Verhaltens-Signale — mit Gewichtung und Vergleichstabellen.",
      category: "Strategie"
    },
    en: {
      title: "Local SEO Ranking Factors Explained: All Signals in Detail 2026",
      metaTitle: "Local SEO Ranking Factors 2026: Complete Analysis & Comparison",
      metaDescription: "All Local SEO ranking factors explained: GBP signals (36%), on-page (18%), reviews (17%), links (13%), citations (7%). With comparison tables & action plan.",
      excerpt: "Complete analysis of all local ranking factors: Google Business Profile, on-page, reviews, links, citations and behavioral signals — with weighting and comparison tables.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "📊",
    keywords: ["local seo ranking faktoren", "lokale ranking faktoren", "google local ranking", "local pack ranking faktoren", "local seo signale", "ranking faktoren local seo 2026", "gbp ranking faktoren"],
    featured: true
  },
  // === PILLAR PAGE: AI-SUCHE FÜR LOKALE UNTERNEHMEN ===
  {
    slug: "ai-suche-lokale-unternehmen",
    de: {
      title: "AI Search Optimization für lokale Unternehmen: Der komplette Guide 2026",
      metaTitle: "AI Search Optimization für lokale Unternehmen | Guide 2026",
      metaDescription: "Wie AI-Suchmaschinen Quellen auswählen und wie lokale Unternehmen in AI-Empfehlungen erscheinen. GEO-Strategien, Schema Markup, llms.txt & Praxis-Checkliste für den DACH-Raum.",
      excerpt: "Alles über AI Search Optimization für lokale Unternehmen: Wie ChatGPT, Google AI Overviews und Perplexity Quellen auswählen — und wie du dein Business dort sichtbar machst.",
      category: "AI & Zukunft"
    },
    en: {
      title: "AI Search Optimization for Local Businesses: Complete Guide 2026",
      metaTitle: "AI Search Optimization for Local Businesses | Guide 2026",
      metaDescription: "How AI search engines choose sources and how local businesses can appear in AI-generated recommendations. GEO strategies, Schema Markup, llms.txt & practical checklist.",
      excerpt: "Everything about AI Search Optimization for local businesses: How ChatGPT, Google AI Overviews and Perplexity choose sources — and how to make your business visible.",
      category: "AI & Future"
    },
    readingTime: 24,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🤖",
    keywords: ["ai search optimization", "geo optimierung", "ai suche lokale unternehmen", "chatgpt local seo", "google ai overviews local", "llms.txt", "ai suchmaschinenoptimierung", "generative engine optimization"],
    featured: true
  },
  // === PILLAR PAGE: LOCAL LINK BUILDING BLUEPRINT ===
  {
    slug: "local-link-building-blueprint",
    de: {
      title: "Local Link Building Blueprint: Der komplette Leitfaden für lokale Backlinks 2026",
      metaTitle: "Local Link Building Blueprint | Alle Strategien für lokale Backlinks 2026",
      metaDescription: "Der umfassendste Local-Linkbuilding-Guide im DACH-Raum: Partnerschaften, Sponsoring, PR, Events, IHK-Links, Outreach-Templates & 90-Tage-Plan. Mit DACH-spezifischen Quellen.",
      excerpt: "Alle lokalen Linkbuilding-Strategien in einem Blueprint: Von IHK-Links über Vereinssponsoring und lokale PR bis zu Outreach-Templates — mit 90-Tage-Aktionsplan für den DACH-Markt.",
      category: "Content & Marketing"
    },
    en: {
      title: "Local Link Building Blueprint: Complete Guide to Local Backlinks 2026",
      metaTitle: "Local Link Building Blueprint | All Strategies for Local Backlinks 2026",
      metaDescription: "The most comprehensive local link building guide: partnerships, sponsorships, PR, events, chamber of commerce links, outreach templates & 90-day plan.",
      excerpt: "All local link building strategies in one blueprint: From chamber of commerce links to sponsorships, local PR and outreach templates — with a 90-day action plan.",
      category: "Content & Marketing"
    },
    readingTime: 22,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🔗",
    keywords: ["local link building", "lokale backlinks", "lokales linkbuilding", "ihk backlink", "vereinssponsoring seo", "lokale pr linkbuilding", "backlinks lokale unternehmen", "link building dach"],
    featured: true
  },
  // === PILLAR PAGE: COMPLETE LOCAL SEO CHECKLIST ===
  {
    slug: "local-seo-checkliste-komplett",
    de: {
      title: "Die komplette Local SEO Checkliste 2026: 80+ Punkte in 8 Phasen",
      metaTitle: "Local SEO Checkliste 2026 | 80+ Punkte Schritt-für-Schritt",
      metaDescription: "Die umfassendste Local SEO Checkliste: 80+ Punkte in 8 Phasen — von GBP-Setup über Schema Markup, Citations und Bewertungen bis Reporting. Mit 90-Tage-Implementierungsplan.",
      excerpt: "Die komplette Schritt-für-Schritt Local SEO Checkliste: 80+ Massnahmen in 8 Phasen systematisch abarbeiten — mit Prioritäten, Zeitplan und branchenspezifischen Empfehlungen.",
      category: "Strategie"
    },
    en: {
      title: "The Complete Local SEO Checklist 2026: 80+ Steps in 8 Phases",
      metaTitle: "Local SEO Checklist 2026 | 80+ Steps Step-by-Step",
      metaDescription: "The most comprehensive Local SEO checklist: 80+ steps in 8 phases — from GBP setup to Schema Markup, citations, reviews and reporting. With 90-day implementation plan.",
      excerpt: "The complete step-by-step Local SEO checklist: 80+ actions in 8 phases systematically executed — with priorities, timeline and industry-specific recommendations.",
      category: "Strategy"
    },
    readingTime: 20,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "📋",
    keywords: ["local seo checkliste", "local seo checklist", "lokale seo checkliste", "local seo schritt für schritt", "local seo implementierung", "local seo anleitung", "local seo 2026"],
    featured: true
  },
  // === HUB PAGE: GOOGLE MAPS SEO ===
  {
    slug: "google-maps-seo-hub",
    de: {
      title: "Google Maps SEO Hub: Alle Guides für lokale Sichtbarkeit",
      metaTitle: "Google Maps SEO Hub – Alle Guides für Top-Rankings 2026",
      metaDescription: "Das umfassendste Google Maps SEO Hub: Rankings verbessern, GBP optimieren, Bewertungen managen, Insights analysieren und Probleme lösen. 25+ Artikel.",
      excerpt: "Dein zentraler Einstiegspunkt für Google Maps SEO: Rankings, GBP-Optimierung, Bewertungen, Analyse und Troubleshooting — 25+ verlinkte Guides.",
      category: "Google Maps"
    },
    en: {
      title: "Google Maps SEO Hub: All Guides for Local Visibility",
      metaTitle: "Google Maps SEO Hub – All Guides for Top Rankings 2026",
      metaDescription: "The most comprehensive Google Maps SEO hub: improve rankings, optimize GBP, manage reviews, analyze insights and fix issues. 25+ articles.",
      excerpt: "Your central entry point for Google Maps SEO: rankings, GBP optimization, reviews, analysis and troubleshooting — 25+ linked guides.",
      category: "Google Maps"
    },
    readingTime: 8,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🗺️",
    keywords: ["google maps seo", "google maps ranking", "maps optimierung", "google maps marketing", "lokale sichtbarkeit google maps"],
    featured: true
  },
  // === ARTICLE: WIE GOOGLE MAPS RANKING FUNKTIONIERT ===
  {
    slug: "wie-google-maps-ranking-funktioniert",
    de: {
      title: "Wie Google Maps Ranking funktioniert: Nähe, Relevanz & Bekanntheit erklärt",
      metaTitle: "Wie Google Maps Ranking funktioniert | Proximity, Relevanz, Prominence 2026",
      metaDescription: "So bestimmt Google dein Maps-Ranking: Die 3 Hauptfaktoren Nähe, Relevanz und Bekanntheit erklärt mit Praxis-Beispielen, Ranking-Signalen und Optimierungstipps.",
      excerpt: "Google Maps Rankings basieren auf 3 Faktoren: Nähe, Relevanz und Bekanntheit. Erfahre wie sie zusammenspielen — mit Praxis-Beispielen, Signaltabellen und konkretem Aktionsplan.",
      category: "Google Maps"
    },
    en: {
      title: "How Google Maps Ranking Works: Proximity, Relevance & Prominence Explained",
      metaTitle: "How Google Maps Ranking Works | Proximity, Relevance, Prominence 2026",
      metaDescription: "How Google determines your Maps ranking: The 3 main factors proximity, relevance and prominence explained with practical examples and optimization tips.",
      excerpt: "Google Maps rankings are based on 3 factors: proximity, relevance and prominence. Learn how they interact — with practical examples and an action plan.",
      category: "Google Maps"
    },
    readingTime: 18,
    publishedAt: "2026-03-08",
    updatedAt: "2026-03-08",
    icon: "🗺️",
    keywords: ["google maps ranking", "wie google maps ranking funktioniert", "proximity relevance prominence", "local pack ranking", "maps seo faktoren", "google maps algorithmus"],
    featured: true
  },
];

// Slugs that have actual page components and routes
const PUBLISHED_SLUGS = new Set([
  "kostenloses-seo-guide",
  "local-seo-keywords-finden",
  "google-maps-ranking-verbessern",
  "google-bewertungen-bekommen",
  "local-seo-fuer-restaurants",
  "google-my-business-optimieren",
  "lokale-suchmaschinenoptimierung-2026",
  "nap-konsistenz-local-seo",
  "local-seo-handwerker",
  "local-seo-audit-checkliste",
  "local-seo-schweiz",
  "local-seo-zuerich",
  "local-seo-muenchen",
  "local-seo-aerzte-praxen",
  "local-seo-anwaelte-kanzleien",
  "local-seo-hotels",
  "local-seo-fitness",
  "schema-markup-local-seo",
  "mobile-local-seo",
  "google-maps-seo-ranking-faktoren",
  "local-link-building",
  "negative-google-bewertungen",
  "local-content-marketing",
  "local-seo-case-study-baecker",
  "local-seo-fehler",
  "local-seo-doener-kebab-imbiss",
  "local-seo-friseursalon-beauty",
  "local-seo-immobilienmakler",
  "local-seo-hamburg",
  "local-seo-steuerberater",
  "local-seo-autowerkstatt",
  "local-seo-frankfurt",
  "core-web-vitals-local-seo",
  "local-seo-berlin",
  "local-seo-koeln",
  "local-seo-wien",
  "local-seo-tierarzt",
  "ki-tools-local-seo",
  "google-ai-overviews-local-seo",
  "seo-toolbox-kostenlose-ressourcen",
  "local-seo-stuttgart",
  "local-seo-duesseldorf",
  "local-seo-basel",
  "local-seo-yoga-studios",
  "local-seo-tattoo-studios",
  "local-seo-apotheken",
  "gbp-fotos-optimieren",
  "local-seo-mehrstufig-unternehmen",
  "e-e-a-t-lokale-unternehmen",
  "lokale-seo-fuer-neugruender",
  "google-business-messaging",
  "local-seo-physiotherapie",
  "local-seo-notdienst-keywords",
  "google-business-kategorien-guide",
  "local-seo-zahnarzt",
  "lokale-events-marketing",
  "google-business-produkte-services",
  "local-seo-optiker",
  "bewertungs-antworten-vorlagen",
  "local-seo-elektrotechnik",
  "google-business-insights-verstehen",
  "local-seo-fotograf",
  "local-seo-voice-search",
  "google-posts-ranking-faktor",
  "gbp-suspendiert-reaktivieren",
  "gbp-verifizierung-fehlgeschlagen",
  "duplicate-listing-entfernen",
  "gbp-bewertung-loeschen-anleitung",
  "ranking-ploetzlich-verschwunden",
  "gbp-nicht-in-suche-sichtbar",
  "gbp-mehrere-standorte",
  "gbp-oeffnungszeiten-sondertage",
  "gbp-attribute-richtig-nutzen",
  "local-seo-vs-maps-seo",
  "local-citations-2025",
  "local-seo-baeckerei",
  "local-seo-hannover",
  "ai-search-optimization-2026",
  "seo-ferienwohnungen",
  "technisches-local-seo-guide",
  "localbusiness-schema-implementierung",
  "review-schema-implementierung",
  "local-seo-reporting-template",
  "google-business-profil-hub",
  "local-seo-branchen-hub",
  "local-seo-staedte-hub",
  "bewertungen-reputation-hub",
  "website-content-ai-suchmaschinen",
  "local-seo-strategie-kleine-unternehmen",
  "local-seo-ranking-faktoren-erklaert",
  "ai-suche-lokale-unternehmen",
  "local-link-building-blueprint",
  "local-seo-checkliste-komplett",
  "google-maps-seo-hub",
  "wie-google-maps-ranking-funktioniert",
  "google-maps-spam-erkennen",
  "google-maps-konkurrenzanalyse",
  "google-maps-ranking-case-studies",
]);

// Get only published articles (with pages), deduplicated
const getPublishedArticles = (): BlogArticle[] => {
  const seen = new Set<string>();
  return blogArticles.filter(a => {
    if (!PUBLISHED_SLUGS.has(a.slug) || seen.has(a.slug)) return false;
    seen.add(a.slug);
    return true;
  });
};

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
  return getPublishedArticles().map(a => resolveArticle(a, language));
};

export const getRelatedArticles = (currentSlug: string, count: number = 3, language: Language = "de"): ResolvedBlogArticle[] => {
  const published = getPublishedArticles();
  const current = published.find(a => a.slug === currentSlug);
  if (!current) {
    return published.filter(a => a.slug !== currentSlug).slice(0, count).map(a => resolveArticle(a, language));
  }
  
  const currentCategory = current[language].category;
  
  const sameCategory = published.filter(
    a => a.slug !== currentSlug && a[language].category === currentCategory
  );
  const otherCategory = published.filter(
    a => a.slug !== currentSlug && a[language].category !== currentCategory
  );
  
  return [...sameCategory, ...otherCategory].slice(0, count).map(a => resolveArticle(a, language));
};

export const getCategories = (language: Language = "de"): string[] => {
  const categories = new Set(getPublishedArticles().map(a => a[language].category));
  return Array.from(categories);
};

export const getArticleCountByCategory = (language: Language = "de"): Record<string, number> => {
  return getPublishedArticles().reduce((acc, article) => {
    const category = article[language].category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};
