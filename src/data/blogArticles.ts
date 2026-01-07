export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
  icon: string;
  category: string;
  keywords: string[];
  featured?: boolean;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "local-seo-keywords-finden",
    title: "Local SEO Keywords finden: Der komplette Keyword-Recherche Guide 2026",
    metaTitle: "Local SEO Keywords finden: Keyword-Recherche Guide 2026",
    metaDescription: "Finde die perfekten lokalen Keywords für dein Unternehmen. Kostenlose Tools, Schritt-für-Schritt Anleitung und 10 Fehler die du vermeiden musst.",
    excerpt: "Der komplette Guide zur lokalen Keyword-Recherche. Lerne welche Keywords Kunden bringen und wie du sie findest.",
    readingTime: 18,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🔍",
    category: "Strategie",
    keywords: ["local seo keywords", "keyword recherche", "lokale keywords finden"],
    featured: true
  },
  {
    slug: "google-maps-ranking-verbessern",
    title: "Google Maps Ranking verbessern: Der ultimative Guide 2026",
    metaTitle: "Google Maps Ranking verbessern: Ultimativer Guide 2026",
    metaDescription: "Verbessere dein Google Maps Ranking in 7 Schritten. Lokale SEO-Strategien, die wirklich funktionieren. Jetzt mehr Kunden gewinnen!",
    excerpt: "Erfahre, wie du mit bewährten Strategien dein Google Maps Ranking verbesserst und mehr lokale Kunden gewinnst.",
    readingTime: 8,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📍",
    category: "Local SEO",
    keywords: ["google maps ranking", "local seo", "google maps optimierung"],
    featured: true
  },
  {
    slug: "google-bewertungen-bekommen",
    title: "Google Bewertungen bekommen: 7 bewährte Strategien",
    metaTitle: "Google Bewertungen bekommen: 7 Strategien für 2026",
    metaDescription: "So bekommst du mehr Google Bewertungen! 7 ethische Strategien für mehr Rezensionen. Mit Vorlagen und QR-Code Tipps.",
    excerpt: "Lerne 7 bewährte Methoden, um mehr authentische Google Bewertungen von zufriedenen Kunden zu erhalten.",
    readingTime: 6,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "⭐",
    category: "Bewertungen",
    keywords: ["google bewertungen", "rezensionen bekommen", "kundenbewertungen"]
  },
  {
    slug: "local-seo-fuer-restaurants",
    title: "Local SEO für Restaurants: Mehr Gäste durch Google",
    metaTitle: "Local SEO für Restaurants: Mehr Gäste 2026",
    metaDescription: "Local SEO speziell für Restaurants erklärt. Von Speisekarten-Optimierung bis Bilder-Strategie. Jetzt mehr Reservierungen!",
    excerpt: "Speziell für Gastronomen: So optimierst du dein Restaurant für lokale Suchanfragen und füllst mehr Tische.",
    readingTime: 7,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🍽️",
    category: "Gastronomie",
    keywords: ["restaurant seo", "local seo restaurant", "gastro marketing"]
  },
  {
    slug: "google-my-business-optimieren",
    title: "Google My Business optimieren: Schritt-für-Schritt Anleitung",
    metaTitle: "Google My Business optimieren: Anleitung 2026",
    metaDescription: "Google My Business Profil optimieren in 10 Schritten. Vollständige Anleitung mit Screenshots. Mehr Sichtbarkeit garantiert!",
    excerpt: "Die komplette Anleitung zur Optimierung deines Google Business Profils für maximale lokale Sichtbarkeit.",
    readingTime: 9,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📊",
    category: "Google Business",
    keywords: ["google my business", "gmb optimieren", "google unternehmensprofil"]
  },
  {
    slug: "lokale-suchmaschinenoptimierung-2026",
    title: "Lokale Suchmaschinenoptimierung 2026: Was wirklich funktioniert",
    metaTitle: "Lokale SEO 2026: Trends & Strategien die funktionieren",
    metaDescription: "Lokale Suchmaschinenoptimierung 2026: Die neuesten Trends, KI-Einfluss und Voice Search. Bleib der Konkurrenz voraus!",
    excerpt: "Die wichtigsten Trends und Strategien für lokale SEO im Jahr 2026. Bleibe deiner Konkurrenz einen Schritt voraus.",
    readingTime: 10,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🚀",
    category: "Trends",
    keywords: ["lokale seo", "suchmaschinenoptimierung", "local seo 2026"],
    featured: true
  },
  {
    slug: "nap-konsistenz-local-seo",
    title: "NAP-Konsistenz: Warum einheitliche Daten dein Ranking boosten",
    metaTitle: "NAP-Konsistenz für Local SEO: Der ultimative Guide 2026",
    metaDescription: "NAP (Name, Adresse, Telefon) konsistent halten für bessere Rankings. Kompletter Guide mit Checkliste und 15+ FAQ.",
    excerpt: "Erfahre, warum einheitliche Unternehmensdaten (NAP) für dein lokales Ranking entscheidend sind.",
    readingTime: 12,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "📋",
    category: "Local SEO",
    keywords: ["nap konsistenz", "citations", "branchenverzeichnisse", "local seo"]
  },
  {
    slug: "local-seo-handwerker",
    title: "Local SEO für Handwerker: Mehr Aufträge durch Google",
    metaTitle: "Local SEO für Handwerker: Komplette Anleitung 2026",
    metaDescription: "Local SEO speziell für Handwerksbetriebe. Von Elektriker bis Maler - so gewinnst du mehr lokale Aufträge durch Google.",
    excerpt: "Speziell für Handwerksbetriebe: So optimierst du deine Online-Präsenz für mehr lokale Kundenanfragen.",
    readingTime: 14,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "🔧",
    category: "Branchen",
    keywords: ["handwerker seo", "local seo handwerk", "handwerker marketing"]
  },
  {
    slug: "local-seo-audit-checkliste",
    title: "Local SEO Audit Checkliste: 50+ Punkte für mehr Sichtbarkeit",
    metaTitle: "Local SEO Audit Checkliste 2026: 50+ Prüfpunkte",
    metaDescription: "Komplette Local SEO Audit Checkliste mit 50+ Punkten. Google Business, Website, Citations, Bewertungen - alles prüfen!",
    excerpt: "Die ultimative Checkliste für dein Local SEO Audit. Prüfe alle wichtigen Faktoren für maximale lokale Sichtbarkeit.",
    readingTime: 15,
    publishedAt: "2026-01-07",
    updatedAt: "2026-01-07",
    icon: "✅",
    category: "Strategie",
    keywords: ["local seo audit", "seo checkliste", "local seo analyse"],
    featured: true
  }
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentSlug: string, count: number = 3): BlogArticle[] => {
  const current = getArticleBySlug(currentSlug);
  if (!current) {
    return blogArticles.filter(a => a.slug !== currentSlug).slice(0, count);
  }
  
  // Prioritize same category, then different categories
  const sameCategory = blogArticles.filter(
    a => a.slug !== currentSlug && a.category === current.category
  );
  const otherCategory = blogArticles.filter(
    a => a.slug !== currentSlug && a.category !== current.category
  );
  
  return [...sameCategory, ...otherCategory].slice(0, count);
};

export const getCategories = (): string[] => {
  const categories = new Set(blogArticles.map(a => a.category));
  return Array.from(categories);
};

export const getArticleCountByCategory = (): Record<string, number> => {
  return blogArticles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};
