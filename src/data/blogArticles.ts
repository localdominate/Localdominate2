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
