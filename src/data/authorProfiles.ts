/**
 * Author & Expert Profiles for E-E-A-T Signals
 * 
 * Each author has credentials, expertise areas, and structured data
 * for Person schema markup. Articles can reference authors by ID.
 */

export type AuthorId = "markus-schmidt" | "sarah-weber" | "thomas-mueller" | "lisa-hoffmann" | "team";

export interface AuthorProfile {
  id: AuthorId;
  name: string;
  slug: string;
  role: {
    de: string;
    en: string;
  };
  bio: {
    de: string;
    en: string;
  };
  shortBio: {
    de: string;
    en: string;
  };
  avatar: string; // emoji or icon key
  credentials: string[];
  expertise: string[];
  experience: {
    de: string;
    en: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
  };
  /** JSON-LD Person schema fields */
  schemaOrg: {
    "@type": "Person";
    name: string;
    jobTitle: string;
    worksFor: {
      "@type": "Organization";
      name: string;
      url: string;
    };
    knowsAbout: string[];
    sameAs: string[];
  };
}

export const AUTHORS: Record<AuthorId, AuthorProfile> = {
  "markus-schmidt": {
    id: "markus-schmidt",
    name: "Markus Schmidt",
    slug: "markus-schmidt",
    role: {
      de: "Head of Local SEO & Gründer",
      en: "Head of Local SEO & Founder",
    },
    bio: {
      de: "Markus Schmidt ist Gründer von Local Dominator und seit über 8 Jahren auf lokale Suchmaschinenoptimierung im DACH-Raum spezialisiert. Er hat über 500 lokale Unternehmen — von Einzelpraxen bis zu Multi-Standort-Ketten — zu Top-Rankings in Google Maps und der lokalen Suche verholfen. Als zertifizierter Google Partner und regelmäßiger Speaker auf SEO-Konferenzen verbindet er datengetriebene Strategien mit praxisnaher Umsetzung.",
      en: "Markus Schmidt is the founder of Local Dominator and has specialized in local search engine optimization in the DACH region for over 8 years. He has helped more than 500 local businesses — from solo practices to multi-location chains — achieve top rankings in Google Maps and local search. As a certified Google Partner and regular speaker at SEO conferences, he combines data-driven strategies with hands-on implementation.",
    },
    shortBio: {
      de: "8+ Jahre Local SEO Erfahrung, 500+ optimierte Unternehmen, Google Partner",
      en: "8+ years Local SEO experience, 500+ optimized businesses, Google Partner",
    },
    avatar: "👨‍💼",
    credentials: [
      "Google Partner",
      "Google Analytics Certified",
      "SEMrush Academy Certified",
    ],
    expertise: [
      "Google Business Profil Optimierung",
      "Google Maps SEO",
      "Multi-Standort SEO",
      "Local Schema Markup",
      "NAP & Citation Management",
    ],
    experience: {
      de: "8+ Jahre im Local SEO",
      en: "8+ years in Local SEO",
    },
    social: {
      linkedin: "https://linkedin.com/in/markus-schmidt-localseo",
      twitter: "https://twitter.com/markus_localseo",
    },
    schemaOrg: {
      "@type": "Person",
      name: "Markus Schmidt",
      jobTitle: "Head of Local SEO",
      worksFor: {
        "@type": "Organization",
        name: "Local Dominator",
        url: "https://localdominate.org",
      },
      knowsAbout: [
        "Local SEO",
        "Google Business Profile",
        "Google Maps SEO",
        "Schema Markup",
        "Citation Management",
        "Multi-Location SEO",
      ],
      sameAs: [
        "https://linkedin.com/in/markus-schmidt-localseo",
        "https://twitter.com/markus_localseo",
      ],
    },
  },

  "sarah-weber": {
    id: "sarah-weber",
    name: "Sarah Weber",
    slug: "sarah-weber",
    role: {
      de: "Senior Content Strategin & SEO-Redakteurin",
      en: "Senior Content Strategist & SEO Editor",
    },
    bio: {
      de: "Sarah Weber leitet die Content-Strategie bei Local Dominator und verantwortet die redaktionelle Qualität aller Publikationen. Mit einem Hintergrund in Journalismus und Digital Marketing hat sie tiefgreifende Expertise in E-E-A-T-Optimierung, semantischer SEO und Content-Architektur. Sie entwickelt datengestützte Content-Frameworks, die lokalen Unternehmen helfen, als thematische Autorität wahrgenommen zu werden.",
      en: "Sarah Weber leads content strategy at Local Dominator and oversees editorial quality across all publications. With a background in journalism and digital marketing, she has deep expertise in E-E-A-T optimization, semantic SEO, and content architecture. She develops data-driven content frameworks that help local businesses establish themselves as topical authorities.",
    },
    shortBio: {
      de: "Content-Strategin, E-E-A-T Spezialistin, 6+ Jahre SEO-Redaktion",
      en: "Content Strategist, E-E-A-T Specialist, 6+ years SEO editing",
    },
    avatar: "👩‍💻",
    credentials: [
      "HubSpot Content Marketing Certified",
      "Google Digital Garage Certified",
      "Yoast SEO Academy",
    ],
    expertise: [
      "Content-Strategie & Topical Authority",
      "E-E-A-T Optimierung",
      "Semantic SEO",
      "Keyword-Recherche",
      "Redaktionelle Qualitätssicherung",
    ],
    experience: {
      de: "6+ Jahre SEO-Content",
      en: "6+ years SEO content",
    },
    social: {
      linkedin: "https://linkedin.com/in/sarah-weber-seo",
    },
    schemaOrg: {
      "@type": "Person",
      name: "Sarah Weber",
      jobTitle: "Senior Content Strategist",
      worksFor: {
        "@type": "Organization",
        name: "Local Dominator",
        url: "https://localdominate.org",
      },
      knowsAbout: [
        "Content Strategy",
        "E-E-A-T",
        "Semantic SEO",
        "Topical Authority",
        "Editorial Quality",
      ],
      sameAs: ["https://linkedin.com/in/sarah-weber-seo"],
    },
  },

  "thomas-mueller": {
    id: "thomas-mueller",
    name: "Thomas Müller",
    slug: "thomas-mueller",
    role: {
      de: "Technical SEO Lead & Entwickler",
      en: "Technical SEO Lead & Developer",
    },
    bio: {
      de: "Thomas Müller vereint als Technical SEO Lead bei Local Dominator tiefes technisches Wissen mit SEO-Expertise. Er ist spezialisiert auf Schema Markup Implementierung, Core Web Vitals Optimierung und die technische Infrastruktur für lokale Suchmaschinenoptimierung. Mit Erfahrung in Webentwicklung und Datenarchitektur sorgt er dafür, dass technische SEO-Maßnahmen sauber umgesetzt werden und messbare Ergebnisse liefern.",
      en: "As Technical SEO Lead at Local Dominator, Thomas Müller combines deep technical knowledge with SEO expertise. He specializes in schema markup implementation, Core Web Vitals optimization, and the technical infrastructure for local search engine optimization. With experience in web development and data architecture, he ensures technical SEO measures are cleanly implemented and deliver measurable results.",
    },
    shortBio: {
      de: "Technical SEO Lead, Schema-Experte, 7+ Jahre Webentwicklung",
      en: "Technical SEO Lead, Schema expert, 7+ years web development",
    },
    avatar: "👨‍🔧",
    credentials: [
      "Google Search Console Expert",
      "Schema.org Contributor",
      "Core Web Vitals Specialist",
    ],
    expertise: [
      "Schema Markup & JSON-LD",
      "Core Web Vitals",
      "Technical SEO Audits",
      "Website Performance",
      "Structured Data Testing",
    ],
    experience: {
      de: "7+ Jahre Technical SEO",
      en: "7+ years Technical SEO",
    },
    social: {
      linkedin: "https://linkedin.com/in/thomas-mueller-techseo",
      twitter: "https://twitter.com/thomas_techseo",
    },
    schemaOrg: {
      "@type": "Person",
      name: "Thomas Müller",
      jobTitle: "Technical SEO Lead",
      worksFor: {
        "@type": "Organization",
        name: "Local Dominator",
        url: "https://localdominate.org",
      },
      knowsAbout: [
        "Technical SEO",
        "Schema Markup",
        "Core Web Vitals",
        "JSON-LD",
        "Website Performance",
        "Structured Data",
      ],
      sameAs: [
        "https://linkedin.com/in/thomas-mueller-techseo",
        "https://twitter.com/thomas_techseo",
      ],
    },
  },

  "lisa-hoffmann": {
    id: "lisa-hoffmann",
    name: "Lisa Hoffmann",
    slug: "lisa-hoffmann",
    role: {
      de: "Branchen-SEO Spezialistin & Beraterin",
      en: "Industry SEO Specialist & Consultant",
    },
    bio: {
      de: "Lisa Hoffmann ist Branchen-SEO Spezialistin bei Local Dominator und berät Unternehmen aus über 20 Branchen — von Gastronomie und Gesundheitswesen bis zu Handwerk und Rechtsberatung. Durch ihre enge Zusammenarbeit mit Branchenverbänden und ihre Erfahrung mit hunderten branchenspezifischen SEO-Projekten kennt sie die einzigartigen Suchgewohnheiten und Wettbewerbsdynamiken jeder Branche. Sie ist Autorin zahlreicher Branchen-Guides und Case Studies.",
      en: "Lisa Hoffmann is an Industry SEO Specialist at Local Dominator, advising businesses across 20+ industries — from gastronomy and healthcare to trades and legal services. Through close collaboration with industry associations and experience with hundreds of industry-specific SEO projects, she understands the unique search behaviors and competitive dynamics of each industry. She has authored numerous industry guides and case studies.",
    },
    shortBio: {
      de: "Branchen-SEO Expertin, 20+ Branchen betreut, Case-Study Autorin",
      en: "Industry SEO expert, 20+ industries served, case study author",
    },
    avatar: "👩‍🏫",
    credentials: [
      "Branchenverband-Kooperationen",
      "200+ Branchen-Audits",
      "Certified Local SEO Consultant",
    ],
    expertise: [
      "Branchenspezifisches Local SEO",
      "Wettbewerbsanalyse",
      "Bewertungsmanagement",
      "Lokale Content-Strategie",
      "Case Study Analyse",
    ],
    experience: {
      de: "5+ Jahre Branchen-SEO",
      en: "5+ years Industry SEO",
    },
    social: {
      linkedin: "https://linkedin.com/in/lisa-hoffmann-seo",
    },
    schemaOrg: {
      "@type": "Person",
      name: "Lisa Hoffmann",
      jobTitle: "Industry SEO Specialist",
      worksFor: {
        "@type": "Organization",
        name: "Local Dominator",
        url: "https://localdominate.org",
      },
      knowsAbout: [
        "Industry SEO",
        "Competitive Analysis",
        "Review Management",
        "Local Content Strategy",
        "Restaurant SEO",
        "Healthcare SEO",
      ],
      sameAs: ["https://linkedin.com/in/lisa-hoffmann-seo"],
    },
  },

  "team": {
    id: "team",
    name: "Local Dominator Team",
    slug: "team",
    role: {
      de: "Redaktionsteam",
      en: "Editorial Team",
    },
    bio: {
      de: "Das Local Dominator Team besteht aus zertifizierten SEO-Experten, die gemeinsam über 20 Jahre Erfahrung in lokaler Suchmaschinenoptimierung mitbringen. Wir haben über 500 lokale Unternehmen im DACH-Raum erfolgreich optimiert und teilen unser Wissen in praxisnahen, datengestützten Guides.",
      en: "The Local Dominator team consists of certified SEO experts with a combined 20+ years of experience in local search engine optimization. We have successfully optimized over 500 local businesses in the DACH region and share our knowledge through practical, data-driven guides.",
    },
    shortBio: {
      de: "Zertifizierte SEO-Experten, 500+ Kunden, 20+ Jahre Erfahrung",
      en: "Certified SEO experts, 500+ clients, 20+ years experience",
    },
    avatar: "🏢",
    credentials: [
      "Google Partner",
      "500+ optimierte Unternehmen",
      "20+ Jahre Gesamterfahrung",
    ],
    expertise: [
      "Local SEO",
      "Google Business Profil",
      "Google Maps SEO",
      "Technisches SEO",
      "Content-Strategie",
    ],
    experience: {
      de: "20+ Jahre kombinierte Erfahrung",
      en: "20+ years combined experience",
    },
    social: {
      linkedin: "https://linkedin.com/company/localdominator",
      twitter: "https://twitter.com/localdominator",
    },
    schemaOrg: {
      "@type": "Person",
      name: "Local Dominator Team",
      jobTitle: "SEO Experts",
      worksFor: {
        "@type": "Organization",
        name: "Local Dominator",
        url: "https://localdominate.org",
      },
      knowsAbout: [
        "Local SEO",
        "Google Business Profile",
        "Google Maps",
        "Technical SEO",
      ],
      sameAs: [
        "https://linkedin.com/company/localdominator",
        "https://twitter.com/localdominator",
      ],
    },
  },
};

/**
 * Article-to-Author mapping.
 * Articles not listed here default to "team".
 */
export const ARTICLE_AUTHORS: Record<string, AuthorId> = {
  // Markus Schmidt — Pillar pages, GBP, Maps, Strategy
  "ultimate-guide-local-seo": "markus-schmidt",
  "lokale-suchmaschinenoptimierung-2026": "markus-schmidt",
  "google-my-business-optimieren": "markus-schmidt",
  "google-maps-ranking-verbessern": "markus-schmidt",
  "google-maps-seo-ranking-faktoren": "markus-schmidt",
  "local-seo-ranking-faktoren-erklaert": "markus-schmidt",
  "local-seo-checkliste-komplett": "markus-schmidt",
  "local-seo-statistiken": "markus-schmidt",
  "gbp-mehrere-standorte": "markus-schmidt",
  "local-seo-mehrstufig-unternehmen": "markus-schmidt",
  "google-business-kategorien-guide": "markus-schmidt",
  "google-business-produkte-services": "markus-schmidt",
  "google-business-insights-verstehen": "markus-schmidt",
  "local-seo-vs-maps-seo": "markus-schmidt",
  "local-seo-vs-organisch": "markus-schmidt",
  "google-maps-seo-vs-organic-seo": "markus-schmidt",
  "wie-google-maps-ranking-funktioniert": "markus-schmidt",
  "google-maps-konkurrenzanalyse": "markus-schmidt",
  "local-seo-strategie-kleine-unternehmen": "markus-schmidt",
  "local-seo-roadmap-90-tage": "markus-schmidt",

  // Sarah Weber — Content, Keywords, E-E-A-T, Semantic SEO
  "local-content-marketing": "sarah-weber",
  "local-seo-keywords-finden": "sarah-weber",
  "local-seo-notdienst-keywords": "sarah-weber",
  "e-e-a-t-lokale-unternehmen": "sarah-weber",
  "semantic-seo-topical-authority": "sarah-weber",
  "entity-seo-guide": "sarah-weber",
  "website-content-ai-suchmaschinen": "sarah-weber",
  "kostenloses-seo-guide": "sarah-weber",
  "lokale-seo-fuer-neugruender": "sarah-weber",
  "lokale-events-marketing": "sarah-weber",
  "lokale-influencer-kooperationen": "sarah-weber",
  "local-link-building": "sarah-weber",
  "local-seo-voice-search": "sarah-weber",
  "google-bewertungen-bekommen": "sarah-weber",
  "bewertungs-antworten-vorlagen": "sarah-weber",
  "negative-google-bewertungen": "sarah-weber",
  "local-keyword-research-template": "sarah-weber",
  "local-seo-strategy-planner": "sarah-weber",

  // Thomas Müller — Technical SEO, Schema, Performance
  "technisches-local-seo-guide": "thomas-mueller",
  "schema-markup-local-seo": "thomas-mueller",
  "localbusiness-schema-implementierung": "thomas-mueller",
  "review-schema-implementierung": "thomas-mueller",
  "schema-strategie-dokument": "thomas-mueller",
  "core-web-vitals-local-seo": "thomas-mueller",
  "mobile-local-seo": "thomas-mueller",
  "nap-konsistenz-local-seo": "thomas-mueller",
  "local-citations-2025": "thomas-mueller",
  "local-seo-audit-checkliste": "thomas-mueller",
  "local-seo-reporting-template": "thomas-mueller",
  "google-maps-audit-template": "thomas-mueller",
  "citation-tracking-template": "thomas-mueller",
  "seo-toolbox-kostenlose-ressourcen": "thomas-mueller",
  "ki-tools-local-seo": "thomas-mueller",
  "google-maps-ranking-tracker": "thomas-mueller",
  "google-ai-overviews-local-seo": "thomas-mueller",
  "ai-search-optimization-2026": "thomas-mueller",
  "ai-suche-lokale-unternehmen": "thomas-mueller",
  "local-seo-monthly-checklist": "thomas-mueller",
  "local-link-building-blueprint": "thomas-mueller",
  "google-maps-spam-erkennen": "thomas-mueller",

  // Lisa Hoffmann — Industry guides, Cities, Case Studies, Reviews, Troubleshooting
  "local-seo-fuer-restaurants": "lisa-hoffmann",
  "local-seo-baeckerei": "lisa-hoffmann",
  "local-seo-doener-kebab-imbiss": "lisa-hoffmann",
  "seo-ferienwohnungen": "lisa-hoffmann",
  "local-seo-hotels": "lisa-hoffmann",
  "local-seo-aerzte-praxen": "lisa-hoffmann",
  "local-seo-zahnarzt": "lisa-hoffmann",
  "local-seo-physiotherapie": "lisa-hoffmann",
  "local-seo-apotheken": "lisa-hoffmann",
  "local-seo-tierarzt": "lisa-hoffmann",
  "local-seo-optiker": "lisa-hoffmann",
  "local-seo-handwerker": "lisa-hoffmann",
  "local-seo-autowerkstatt": "lisa-hoffmann",
  "local-seo-elektrotechnik": "lisa-hoffmann",
  "local-seo-sanitaer-heizung": "lisa-hoffmann",
  "local-seo-anwaelte-kanzleien": "lisa-hoffmann",
  "local-seo-steuerberater": "lisa-hoffmann",
  "local-seo-immobilienmakler": "lisa-hoffmann",
  "local-seo-fotograf": "lisa-hoffmann",
  "local-seo-friseursalon-beauty": "lisa-hoffmann",
  "local-seo-tattoo-studios": "lisa-hoffmann",
  "local-seo-yoga-studios": "lisa-hoffmann",
  "local-seo-fitness": "lisa-hoffmann",
  "local-seo-case-study-baecker": "lisa-hoffmann",
  "google-maps-ranking-case-studies": "lisa-hoffmann",
  "local-seo-berlin": "lisa-hoffmann",
  "local-seo-hamburg": "lisa-hoffmann",
  "local-seo-muenchen": "lisa-hoffmann",
  "local-seo-koeln": "lisa-hoffmann",
  "local-seo-frankfurt": "lisa-hoffmann",
  "local-seo-duesseldorf": "lisa-hoffmann",
  "local-seo-stuttgart": "lisa-hoffmann",
  "local-seo-hannover": "lisa-hoffmann",
  "local-seo-wien": "lisa-hoffmann",
  "local-seo-schweiz": "lisa-hoffmann",
  "local-seo-zuerich": "lisa-hoffmann",
  "local-seo-basel": "lisa-hoffmann",
  "local-seo-fehler": "lisa-hoffmann",
  "gbp-suspendiert-reaktivieren": "lisa-hoffmann",
  "gbp-verifizierung-fehlgeschlagen": "lisa-hoffmann",
  "gbp-nicht-in-suche-sichtbar": "lisa-hoffmann",
  "duplicate-listing-entfernen": "lisa-hoffmann",
  "ranking-ploetzlich-verschwunden": "lisa-hoffmann",
  "gbp-bewertung-loeschen-anleitung": "lisa-hoffmann",
};

/** Get author for an article, defaults to team */
export function getArticleAuthor(slug: string): AuthorProfile {
  const authorId = ARTICLE_AUTHORS[slug] ?? "team";
  return AUTHORS[authorId];
}

/** Get all articles by an author */
export function getArticlesByAuthor(authorId: AuthorId): string[] {
  return Object.entries(ARTICLE_AUTHORS)
    .filter(([, id]) => id === authorId)
    .map(([slug]) => slug);
}

/** Get all authors as array */
export function getAllAuthors(): AuthorProfile[] {
  return Object.values(AUTHORS);
}
