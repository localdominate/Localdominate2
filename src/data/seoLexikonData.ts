export interface RelatedArticle {
  slug: string;
  title: string;
}

export interface BestPracticeExample {
  title: string;
  description: string;
  url: string;
  source: string;
}

export interface SEOTerm {
  letter: string;
  term: string;
  shortDescription: string;
  fullDescription: string;
  /** Concise 40-60 word definition optimized for Google Featured Snippets. Starts with "[Term] ist/bezeichnet/sind..." */
  snippetDefinition: string;
  features: string[];
  statistics: {
    label: string;
    value: string;
    icon: "trending" | "percent" | "users" | "search" | "chart" | "clock";
  }[];
  benefits: string[];
  relatedTerms: string[];
  difficulty: "anfänger" | "fortgeschritten" | "experte";
  importance: 1 | 2 | 3 | 4 | 5;
  relatedArticles?: RelatedArticle[];
  bestPracticeExample?: BestPracticeExample;
}

export const seoLexikonData: SEOTerm[] = [
  // === A ===
  {
    letter: "A",
    term: "Algorithmus-Update",
    shortDescription: "Änderungen am Google-Suchalgorithmus, die Rankings beeinflussen.",
    fullDescription: "Algorithmus-Updates sind Änderungen, die Google an seinem Suchalgorithmus vornimmt. Große Updates wie Core Updates, Helpful Content Update oder Spam Updates können erhebliche Ranking-Veränderungen verursachen. Für lokale Unternehmen ist es wichtig, auf qualitativ hochwertige Inhalte und E-E-A-T zu setzen.",
    features: [
      "Core Updates (mehrmals jährlich)",
      "Helpful Content Update",
      "Spam Updates",
      "Local Search Updates"
    ],
    statistics: [
      { label: "Google Updates pro Jahr", value: "1000+", icon: "chart" },
      { label: "Große Core Updates", value: "3-4x", icon: "trending" },
      { label: "Ranking-Volatilität nach Update", value: "Hoch", icon: "percent" }
    ],
    benefits: [
      "Verständnis für Ranking-Schwankungen",
      "Proaktive SEO-Strategie entwickeln",
      "Qualitätsfokus statt Tricks",
      "Langfristige Stabilität erreichen"
    ],
    relatedTerms: ["E-E-A-T", "Quality Raters", "White Hat SEO", "Technical SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Core Updates verstehen",
      description: "Offizielle Google-Dokumentation über Core Updates und wie man sich darauf vorbereitet.",
      url: "https://developers.google.com/search/updates/core-updates",
      source: "Google Search Central"
    }
  },
  {
    letter: "A",
    term: "Alt-Text",
    shortDescription: "Alternativer Text für Bilder, der von Suchmaschinen gelesen wird.",
    fullDescription: "Alt-Text (Alternativtext) ist eine Beschreibung von Bildern, die im HTML-Code hinterlegt wird. Er hilft Suchmaschinen zu verstehen, was auf einem Bild zu sehen ist, und wird Nutzern mit Sehbehinderungen vorgelesen. Für Local SEO ist Alt-Text besonders wichtig, um lokale Relevanz durch Ortsnamen und Keywords zu signalisieren.",
    features: [
      "Barrierefreiheit für sehbehinderte Nutzer",
      "Bildverständnis für Suchmaschinen",
      "Erscheint bei Ladefehler des Bildes",
      "Lokale Keywords integrierbar"
    ],
    statistics: [
      { label: "Bilder ohne Alt-Text", value: "42%", icon: "percent" },
      { label: "Ranking-Einfluss", value: "Mittel", icon: "trending" },
      { label: "Barrierefreiheits-Score", value: "+35%", icon: "chart" }
    ],
    benefits: [
      "Besseres Ranking in der Google Bildersuche",
      "Erhöhte Barrierefreiheit der Website",
      "Zusätzliche Keyword-Signale für Suchmaschinen",
      "Verbesserte User Experience"
    ],
    relatedTerms: ["Image SEO", "On-Page SEO", "Technical SEO", "Barrierefreiheit"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO: Der ultimative Guide" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google: Bild-SEO Best Practices",
      description: "Offizielle Google-Richtlinien für optimalen Alt-Text und Bilder-SEO mit praktischen Beispielen.",
      url: "https://developers.google.com/search/docs/appearance/google-images",
      source: "Google Search Central"
    }
  },
  {
    letter: "A",
    term: "Anchor Text",
    shortDescription: "Der klickbare Text eines Hyperlinks.",
    fullDescription: "Anchor Text (Ankertext) ist der sichtbare, klickbare Text eines Links. Er gibt Suchmaschinen wichtige Hinweise über den Inhalt der verlinkten Seite. Für SEO ist eine natürliche Variation der Anchor Texte wichtig - zu viele exakte Keywords können als Spam gewertet werden.",
    features: [
      "Signalisiert Themenrelevanz an Google",
      "Verschiedene Typen: Exact Match, Partial Match, Branded, Generic",
      "Interne und externe Verlinkung",
      "Natürliche Variation wichtig"
    ],
    statistics: [
      { label: "Links mit 'Click here' Anchor", value: "65%", icon: "percent" },
      { label: "Einfluss auf Backlink-Wert", value: "Hoch", icon: "trending" },
      { label: "Überoptimierung-Risiko", value: ">3%", icon: "chart" }
    ],
    benefits: [
      "Bessere Keyword-Relevanz signalisieren",
      "Höhere Rankings für verlinkte Seiten",
      "Nutzerführung verbessern",
      "Interne Verlinkungsstrategie optimieren"
    ],
    relatedTerms: ["Backlinks", "Internal Linking", "Link Building", "Off-Page SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Moz: Anchor Text Best Practices",
      description: "Umfassender Guide zur optimalen Verwendung von Anchor Texten für SEO.",
      url: "https://moz.com/learn/seo/anchor-text",
      source: "Moz"
    }
  },
  // === B ===
  {
    letter: "B",
    term: "Backlinks",
    shortDescription: "Eingehende Links von anderen Websites auf deine Seite.",
    fullDescription: "Backlinks sind externe Links, die von anderen Websites auf deine Website verweisen. Sie gelten als eine Art 'Empfehlung' und sind einer der wichtigsten Ranking-Faktoren für Google. Im Local SEO sind lokale Backlinks von regionalen Websites, Zeitungen, Branchenverzeichnissen und Partnern besonders wertvoll.",
    features: [
      "DoFollow vs. NoFollow Links",
      "Domain Authority & Page Authority",
      "Anchor-Text-Optimierung",
      "Lokale Backlink-Quellen"
    ],
    statistics: [
      { label: "Top-3 Ranking-Faktor", value: "#1", icon: "trending" },
      { label: "Websites mit >100 Backlinks", value: "2.2x", icon: "chart" },
      { label: "Lokale Backlink-Wirkung", value: "+67%", icon: "percent" }
    ],
    benefits: [
      "Signifikante Verbesserung der Domain Authority",
      "Höhere Rankings in den Suchergebnissen",
      "Mehr organischer Traffic",
      "Stärkere lokale Relevanz"
    ],
    relatedTerms: ["Link Building", "Domain Authority", "Anchor Text", "Off-Page SEO", "Nofollow Link"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Moz: The Beginner's Guide to Link Building",
      description: "Umfassender Guide zum strategischen Aufbau von Backlinks mit bewährten Methoden und Fallstudien.",
      url: "https://moz.com/beginners-guide-to-link-building",
      source: "Moz"
    }
  },
  {
    letter: "B",
    term: "Black Hat SEO",
    shortDescription: "Manipulative SEO-Methoden, die gegen Google-Richtlinien verstoßen.",
    fullDescription: "Black Hat SEO bezeichnet Optimierungstechniken, die gegen die Webmaster-Richtlinien von Google verstoßen. Dazu gehören Keyword Stuffing, versteckter Text, Linkkauf und Cloaking. Diese Methoden können kurzfristig funktionieren, führen aber oft zu Abstrafungen oder sogar zur Entfernung aus dem Google-Index.",
    features: [
      "Keyword Stuffing (Überoptimierung)",
      "Linkkauf und Linkfarmen",
      "Cloaking (versteckter Inhalt)",
      "Private Blog Networks (PBN)"
    ],
    statistics: [
      { label: "Abstrafungsrisiko", value: "Sehr hoch", icon: "trending" },
      { label: "Recovery-Zeit nach Penalty", value: "6-24 Monate", icon: "clock" },
      { label: "Google-Erkennung", value: "99%+", icon: "percent" }
    ],
    benefits: [
      "Wissen was man vermeiden sollte",
      "Konkurrenz-Analyse möglich",
      "Risikobewertung für Strategien",
      "Langfristigen Erfolg sichern durch Vermeidung"
    ],
    relatedTerms: ["White Hat SEO", "Algorithmus-Update", "Keyword Stuffing", "Link Building"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "B",
    term: "Bounce Rate",
    shortDescription: "Prozentsatz der Besucher, die ohne Interaktion wieder gehen.",
    fullDescription: "Die Bounce Rate (Absprungrate) zeigt den Anteil der Besucher, die eine Website nach nur einer Seite wieder verlassen, ohne weitere Interaktion. Eine hohe Bounce Rate kann auf Probleme mit Content, UX oder Ladezeit hinweisen. Google nutzt Engagement-Signale als Ranking-Faktor.",
    features: [
      "Wird in Google Analytics gemessen",
      "Branchenspezifische Durchschnittswerte",
      "Unterschied zwischen Bounce und Exit",
      "Beeinflusst von Seitentyp und Intent"
    ],
    statistics: [
      { label: "Durchschnittliche Bounce Rate", value: "41-55%", icon: "percent" },
      { label: "E-Commerce Benchmark", value: "20-45%", icon: "chart" },
      { label: "Blog-Artikel typisch", value: "70-90%", icon: "trending" }
    ],
    benefits: [
      "Indikator für Content-Qualität",
      "UX-Probleme identifizieren",
      "Conversion-Optimierung ermöglichen",
      "Engagement messen"
    ],
    relatedTerms: ["User Experience", "Dwell Time", "CTR", "Conversion Rate"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "B",
    term: "Branchenverzeichnis",
    shortDescription: "Online-Verzeichnis zur Eintragung von Unternehmensdaten.",
    fullDescription: "Branchenverzeichnisse sind Online-Plattformen, auf denen Unternehmen ihre Kontaktdaten und Informationen eintragen können. Sie sind eine wichtige Quelle für Citations und stärken die lokale SEO. In Deutschland sind Das Örtliche, Gelbe Seiten, Yelp und branchenspezifische Portale besonders relevant.",
    features: [
      "Strukturierte Unternehmenseinträge",
      "NAP-Daten konsistent halten",
      "Branchenspezifische Verzeichnisse",
      "Regionale Verzeichnisse"
    ],
    statistics: [
      { label: "Wichtige Verzeichnisse DE", value: "50+", icon: "search" },
      { label: "Citation-Einfluss auf Ranking", value: "13%", icon: "percent" },
      { label: "Unternehmen mit Einträgen", value: "68%", icon: "users" }
    ],
    benefits: [
      "Stärkere lokale Präsenz",
      "Mehr Citations aufbauen",
      "Bessere lokale Rankings",
      "Zusätzliche Traffic-Quellen"
    ],
    relatedTerms: ["Citations", "NAP", "Local SEO", "Google Business Profile"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz für Local SEO" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Top Business Directories",
      description: "Übersicht der wichtigsten Branchenverzeichnisse für lokale Unternehmen nach Land.",
      url: "https://www.brightlocal.com/learn/local-citations/",
      source: "BrightLocal"
    }
  },
  // === C ===
  {
    letter: "C",
    term: "Citations",
    shortDescription: "Erwähnungen deines Unternehmens mit NAP-Daten im Web.",
    fullDescription: "Citations sind Online-Erwähnungen deines Unternehmens, die Name, Adresse und Telefonnummer (NAP) enthalten. Sie können auf Branchenverzeichnissen, Social-Media-Profilen, Bewertungsportalen oder lokalen Websites erscheinen. Konsistente Citations sind entscheidend für das lokale Ranking in Google Maps.",
    features: [
      "Strukturierte Citations (Verzeichnisse)",
      "Unstrukturierte Citations (Erwähnungen)",
      "NAP-Konsistenz ist entscheidend",
      "Branchenspezifische Verzeichnisse"
    ],
    statistics: [
      { label: "Einfluss auf Local Pack", value: "13%", icon: "percent" },
      { label: "Wichtige Verzeichnisse DE", value: "50+", icon: "search" },
      { label: "NAP-Fehlerrate", value: "73%", icon: "chart" }
    ],
    benefits: [
      "Stärkere lokale Präsenz aufbauen",
      "Vertrauen bei Google schaffen",
      "Mehr Sichtbarkeit in lokalen Suchergebnissen",
      "Konsistente Unternehmensdaten im Web"
    ],
    relatedTerms: ["NAP", "Branchenverzeichnis", "Google Business Profile", "Local SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Citation Building Guide",
      description: "Praxisnaher Guide zum Aufbau konsistenter Citations für lokale Unternehmen.",
      url: "https://www.brightlocal.com/learn/local-citations/",
      source: "BrightLocal"
    }
  },
  {
    letter: "C",
    term: "Canonical URL",
    shortDescription: "Bevorzugte URL-Version zur Vermeidung von Duplicate Content.",
    fullDescription: "Eine Canonical URL gibt an, welche Version einer Seite die 'Hauptversion' ist. Dies verhindert Duplicate Content-Probleme, wenn derselbe Inhalt unter verschiedenen URLs erreichbar ist (z.B. mit/ohne www, mit Parametern). Das canonical-Tag im HTML-Header zeigt Suchmaschinen die bevorzugte URL.",
    features: [
      "rel='canonical' HTML-Tag",
      "Selbstreferenzierende Canonicals empfohlen",
      "Cross-Domain Canonicals möglich",
      "Hilft bei URL-Parameter-Problemen"
    ],
    statistics: [
      { label: "Websites mit Canonical-Fehlern", value: "30%", icon: "percent" },
      { label: "Duplicate Content vermeiden", value: "100%", icon: "chart" },
      { label: "Von Google bestätigt", value: "Ja", icon: "trending" }
    ],
    benefits: [
      "Duplicate Content eliminieren",
      "PageRank auf eine URL konzentrieren",
      "Crawl-Budget optimieren",
      "Klare Signale an Suchmaschinen"
    ],
    relatedTerms: ["Duplicate Content", "URL-Struktur", "Technical SEO", "Crawling"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ],
    bestPracticeExample: {
      title: "Google: Canonical URLs",
      description: "Offizielle Google-Dokumentation zur korrekten Verwendung von Canonical Tags.",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
      source: "Google Search Central"
    }
  },
  {
    letter: "C",
    term: "Content-Strategie",
    shortDescription: "Planung und Erstellung von Inhalten zur Erreichung von SEO-Zielen.",
    fullDescription: "Eine Content-Strategie definiert, welche Inhalte für welche Zielgruppen erstellt werden, um bestimmte Geschäfts- und SEO-Ziele zu erreichen. Für lokale Unternehmen bedeutet dies die Erstellung von lokalem Content wie Stadtteil-Seiten, lokalen Guides und Branchenwissen.",
    features: [
      "Content-Audit und Gap-Analyse",
      "Keyword-gesteuerte Themenplanung",
      "Content-Formate definieren",
      "Redaktionskalender erstellen"
    ],
    statistics: [
      { label: "Unternehmen mit Strategie", value: "40%", icon: "percent" },
      { label: "ROI mit Content-Marketing", value: "3x", icon: "trending" },
      { label: "Traffic-Steigerung", value: "+55%", icon: "chart" }
    ],
    benefits: [
      "Zielgerichtete Content-Erstellung",
      "Bessere Keyword-Abdeckung",
      "Konsistente Veröffentlichung",
      "Höherer ROI für Content"
    ],
    relatedTerms: ["Keywords", "Search Intent", "On-Page SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-content-marketing", title: "Local Content Marketing" },
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Content Marketing Institute: Strategy Guide",
      description: "Umfassender Leitfaden zur Entwicklung einer erfolgreichen Content-Strategie.",
      url: "https://contentmarketinginstitute.com/developing-a-strategy/",
      source: "Content Marketing Institute"
    }
  },
  {
    letter: "C",
    term: "Conversion Rate",
    shortDescription: "Prozentsatz der Besucher, die eine gewünschte Aktion ausführen.",
    fullDescription: "Die Conversion Rate gibt an, wie viel Prozent der Website-Besucher eine bestimmte Aktion durchführen - z.B. ein Formular ausfüllen, anrufen oder kaufen. Für lokale Unternehmen ist die Optimierung der Conversion Rate entscheidend, um aus Website-Besuchern zahlende Kunden zu machen.",
    features: [
      "Verschiedene Conversion-Typen",
      "Micro- vs. Macro-Conversions",
      "A/B-Testing zur Optimierung",
      "Tracking in Analytics"
    ],
    statistics: [
      { label: "Durchschnittliche CR", value: "2-5%", icon: "percent" },
      { label: "Lokale Landing Pages", value: "5-10%", icon: "trending" },
      { label: "Mobile vs. Desktop", value: "-30%", icon: "chart" }
    ],
    benefits: [
      "Mehr Kunden bei gleichem Traffic",
      "Besserer ROI für Marketing",
      "Datenbasierte Optimierung",
      "Höhere Profitabilität"
    ],
    relatedTerms: ["CTR", "User Experience", "Bounce Rate", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  {
    letter: "C",
    term: "Core Web Vitals",
    shortDescription: "Googles Metriken für Nutzererfahrung (LCP, INP, CLS).",
    fullDescription: "Core Web Vitals sind drei spezifische Metriken, die Google zur Messung der Nutzererfahrung verwendet: LCP (Largest Contentful Paint), INP (Interaction to Next Paint) und CLS (Cumulative Layout Shift). Sie sind seit 2021 ein bestätigter Ranking-Faktor.",
    features: [
      "LCP: Ladezeit des größten Elements (<2.5s)",
      "INP: Reaktionszeit auf Interaktion (<200ms)",
      "CLS: Visuelle Stabilität (<0.1)",
      "Messbar in Search Console und PageSpeed Insights"
    ],
    statistics: [
      { label: "Seiten die alle CWV bestehen", value: "33%", icon: "percent" },
      { label: "Mobile schlechter als Desktop", value: "2x", icon: "chart" },
      { label: "Ranking-Einfluss", value: "Moderat", icon: "trending" }
    ],
    benefits: [
      "Direkter Ranking-Faktor bei Google",
      "Bessere User Experience",
      "Höhere Conversion-Rates",
      "Professioneller Website-Auftritt"
    ],
    relatedTerms: ["PageSpeed", "User Experience", "Technical SEO", "Mobile First Index"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "web.dev: Core Web Vitals Guide",
      description: "Offizielle Google-Dokumentation mit detaillierten Anleitungen zur Optimierung aller Core Web Vitals.",
      url: "https://web.dev/vitals/",
      source: "Google web.dev"
    }
  },
  {
    letter: "C",
    term: "Crawling",
    shortDescription: "Prozess, bei dem Suchmaschinen Websites durchsuchen.",
    fullDescription: "Crawling ist der Vorgang, bei dem Suchmaschinen-Bots (wie Googlebot) Websites besuchen und deren Inhalte lesen. Der Crawler folgt Links, um neue und aktualisierte Seiten zu entdecken. Ein effizientes Crawling ist die Voraussetzung für eine erfolgreiche Indexierung.",
    features: [
      "Googlebot besucht regelmäßig Websites",
      "Crawl-Budget pro Website begrenzt",
      "Steuerung via robots.txt möglich",
      "Sitemap beschleunigt Entdeckung"
    ],
    statistics: [
      { label: "Googlebot crawlt täglich", value: "Mrd. Seiten", icon: "search" },
      { label: "Durchschnittliche Crawl-Frequenz", value: "1-30 Tage", icon: "clock" },
      { label: "Neue Seiten entdeckt", value: "Via Links", icon: "trending" }
    ],
    benefits: [
      "Voraussetzung für Indexierung",
      "Aktuelle Inhalte werden erkannt",
      "Strukturprobleme aufdecken",
      "SEO-Grundlagen verstehen"
    ],
    relatedTerms: ["Indexierung", "Robots.txt", "XML-Sitemap", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "C",
    term: "CTR",
    shortDescription: "Click-Through-Rate - Verhältnis von Klicks zu Impressionen.",
    fullDescription: "Die Click-Through-Rate (CTR) zeigt, wie oft Nutzer auf ein Suchergebnis klicken im Verhältnis zu den Impressionen. Eine hohe CTR signalisiert Google, dass dein Ergebnis relevant ist. Title Tags und Meta Descriptions sind entscheidend für eine gute CTR.",
    features: [
      "Gemessen in Google Search Console",
      "Abhängig von Position und SERP-Features",
      "Beeinflusst durch Title und Description",
      "Branchenspezifische Benchmarks"
    ],
    statistics: [
      { label: "Position 1 CTR", value: "27.6%", icon: "percent" },
      { label: "Position 2 CTR", value: "15.8%", icon: "chart" },
      { label: "Position 10 CTR", value: "2.4%", icon: "trending" }
    ],
    benefits: [
      "Ranking-Signal für Google",
      "Mehr Traffic bei gleichem Ranking",
      "Content-Qualität messen",
      "Optimierungspotenzial erkennen"
    ],
    relatedTerms: ["Title Tag", "Meta-Tags", "SERP", "Conversion Rate"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Backlinko: CTR Study 2024",
      description: "Aktuelle Studie zu organischen CTRs nach Position mit Optimierungstipps.",
      url: "https://backlinko.com/google-ctr-stats",
      source: "Backlinko"
    }
  },
  // === D ===
  {
    letter: "D",
    term: "Domain Authority",
    shortDescription: "Moz-Metrik zur Bewertung der Stärke einer Website.",
    fullDescription: "Domain Authority (DA) ist eine von Moz entwickelte Metrik, die auf einer Skala von 1-100 die Wahrscheinlichkeit vorhersagt, dass eine Website in Suchmaschinen rankt. Sie basiert auf Faktoren wie Backlink-Profil, Alter der Domain und Gesamtqualität. Obwohl kein direkter Google-Ranking-Faktor, ist DA ein guter Indikator für SEO-Stärke.",
    features: [
      "Skala von 1-100",
      "Basiert auf Backlink-Analyse",
      "Vergleichbar mit Wettbewerbern",
      "Entwickelt von Moz"
    ],
    statistics: [
      { label: "Top 10 Durchschnitt", value: "DA 40+", icon: "chart" },
      { label: "Neue Websites starten bei", value: "DA 1", icon: "trending" },
      { label: "Jährlicher Anstieg möglich", value: "5-15", icon: "percent" }
    ],
    benefits: [
      "Benchmark für Website-Stärke",
      "Vergleich mit Wettbewerbern",
      "Tracking des SEO-Fortschritts",
      "Bewertung potenzieller Backlink-Quellen"
    ],
    relatedTerms: ["Backlinks", "Link Building", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  {
    letter: "D",
    term: "Duplicate Content",
    shortDescription: "Identischer oder sehr ähnlicher Inhalt auf mehreren URLs.",
    fullDescription: "Duplicate Content bezeichnet identische oder nahezu identische Inhalte, die unter verschiedenen URLs auffindbar sind. Dies kann durch technische Probleme (URL-Parameter, www/non-www) oder absichtliche Kopien entstehen. Google wertet Duplicate Content ab und wählt eine Version für das Ranking.",
    features: [
      "Interne vs. externe Duplikate",
      "Canonical Tags als Lösung",
      "Erkennung via Screaming Frog",
      "Kein direkter Penalty, aber Rankingverlust"
    ],
    statistics: [
      { label: "Websites mit Duplicate Content", value: "29%", icon: "percent" },
      { label: "Ranking-Einfluss", value: "Negativ", icon: "trending" },
      { label: "Crawl-Budget-Verschwendung", value: "Hoch", icon: "chart" }
    ],
    benefits: [
      "Probleme erkennen und beheben",
      "PageRank nicht verwässern",
      "Crawl-Budget optimieren",
      "Klare Signale an Google senden"
    ],
    relatedTerms: ["Canonical URL", "Robots.txt", "Technical SEO", "Indexierung"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "D",
    term: "Dwell Time",
    shortDescription: "Verweildauer eines Nutzers auf einer Seite nach dem Klick.",
    fullDescription: "Dwell Time ist die Zeit, die ein Nutzer auf einer Website verbringt, nachdem er von den Suchergebnissen geklickt hat, bis er wieder zu Google zurückkehrt. Eine längere Dwell Time signalisiert Google, dass der Inhalt relevant und wertvoll ist. Sie unterscheidet sich von der allgemeinen Verweildauer.",
    features: [
      "Zeit zwischen Klick und Zurück zu SERP",
      "Qualitätssignal für Google",
      "Korreliert mit Content-Qualität",
      "Nicht direkt messbar für Websitebetreiber"
    ],
    statistics: [
      { label: "Gute Dwell Time", value: ">3 Minuten", icon: "clock" },
      { label: "Korrelation mit Rankings", value: "Stark", icon: "trending" },
      { label: "Video-Content Dwell Time", value: "+80%", icon: "chart" }
    ],
    benefits: [
      "Indikator für Content-Qualität",
      "Indirektes Ranking-Signal",
      "Nutzer-Engagement verstehen",
      "Content-Optimierung priorisieren"
    ],
    relatedTerms: ["Bounce Rate", "User Experience", "Search Intent", "CTR"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" }
    ]
  },
  // === E ===
  {
    letter: "E",
    term: "E-E-A-T",
    shortDescription: "Experience, Expertise, Authoritativeness, Trustworthiness - Googles Qualitätskriterien.",
    fullDescription: "E-E-A-T steht für Experience (Erfahrung), Expertise, Authoritativeness (Autorität) und Trustworthiness (Vertrauenswürdigkeit). Diese Kriterien verwendet Google zur Bewertung der Inhaltsqualität, besonders bei YMYL-Themen (Your Money Your Life). Für lokale Unternehmen bedeutet dies: echte Expertise zeigen und Vertrauen aufbauen.",
    features: [
      "Experience: Praktische Erfahrung nachweisen",
      "Expertise: Fachwissen demonstrieren",
      "Authority: Als Autorität etablieren",
      "Trust: Vertrauen durch Transparenz"
    ],
    statistics: [
      { label: "YMYL-Einfluss", value: "Sehr hoch", icon: "trending" },
      { label: "Bewertungen wichtig für Trust", value: "88%", icon: "percent" },
      { label: "Autoren-Profile", value: "+23%", icon: "chart" }
    ],
    benefits: [
      "Höhere Rankings bei kompetitiven Keywords",
      "Mehr Vertrauen bei Nutzern",
      "Bessere Conversion-Rates",
      "Nachhaltige SEO-Strategie"
    ],
    relatedTerms: ["YMYL", "Quality Raters", "Reviews (Bewertungen)", "White Hat SEO", "Algorithmus-Update"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte" },
      { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Google Quality Rater Guidelines",
      description: "Die offiziellen Richtlinien, nach denen Google-Bewerter Websites auf E-E-A-T prüfen.",
      url: "https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf",
      source: "Google"
    }
  },
  // === F ===
  {
    letter: "F",
    term: "Featured Snippet",
    shortDescription: "Hervorgehobene Antwortbox über den organischen Suchergebnissen.",
    fullDescription: "Featured Snippets sind spezielle Suchergebnis-Boxen, die Google direkt über den organischen Ergebnissen anzeigt. Sie beantworten die Suchanfrage direkt und ziehen viel Aufmerksamkeit auf sich. Für lokale Unternehmen können Featured Snippets bei Fragen wie 'Bester Friseur in Berlin' erscheinen.",
    features: [
      "Paragraph-Snippets (Textantworten)",
      "Listen-Snippets (Aufzählungen)",
      "Tabellen-Snippets",
      "Video-Snippets"
    ],
    statistics: [
      { label: "Klickrate", value: "8.6%", icon: "percent" },
      { label: "Aller Suchanfragen", value: "12%", icon: "search" },
      { label: "Aus Top 10 Ergebnissen", value: "99%", icon: "chart" }
    ],
    benefits: [
      "Position 0 in den Suchergebnissen",
      "Erhöhte Sichtbarkeit und Klickrate",
      "Autorität und Expertise demonstrieren",
      "Voice Search Optimierung"
    ],
    relatedTerms: ["SERP", "Voice Search", "Zero-Click Search", "Rich Snippets"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: How to Earn Featured Snippets",
      description: "Strategien zur Optimierung für Featured Snippets mit Praxisbeispielen.",
      url: "https://ahrefs.com/blog/find-featured-snippets/",
      source: "Ahrefs"
    }
  },
  // === G ===
  {
    letter: "G",
    term: "Google Business Profile",
    shortDescription: "Kostenloser Unternehmenseintrag bei Google für lokale Sichtbarkeit.",
    fullDescription: "Google Business Profile (früher Google My Business) ist der wichtigste Faktor für lokales SEO. Es ermöglicht Unternehmen, in Google Maps und im Local Pack zu erscheinen. Ein optimiertes Profil mit Fotos, Öffnungszeiten, Bewertungen und Posts kann die lokale Sichtbarkeit dramatisch erhöhen.",
    features: [
      "Vollständige Unternehmensinformationen",
      "Fotos und Videos hochladen",
      "Kundenbewertungen verwalten",
      "Google Posts erstellen"
    ],
    statistics: [
      { label: "Local Pack Einfluss", value: "36%", icon: "percent" },
      { label: "Klicks auf Unternehmen", value: "+70%", icon: "trending" },
      { label: "Buchungen über GBP", value: "56%", icon: "users" }
    ],
    benefits: [
      "Kostenlose lokale Sichtbarkeit",
      "Direkter Kundenkontakt",
      "Bewertungsmanagement",
      "Insights und Analytics"
    ],
    relatedTerms: ["Local Pack", "NAP", "Google Maps", "Reviews (Bewertungen)", "Local SEO"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Business Profile Optimierung",
      description: "Offizielle Google-Anleitung zur vollständigen Optimierung deines Unternehmensprofils.",
      url: "https://support.google.com/business/answer/7091?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "G",
    term: "Google Maps",
    shortDescription: "Googles Kartendienst mit lokalen Unternehmensergebnissen.",
    fullDescription: "Google Maps ist der meistgenutzte Kartendienst weltweit und eine Hauptquelle für lokale Suchanfragen. Unternehmen mit einem Google Business Profile erscheinen auf Google Maps mit Standort, Bewertungen und Kontaktdaten. Die Optimierung für Google Maps ist ein Kernbestandteil des Local SEO.",
    features: [
      "Karteneinbettung in Websites",
      "Wegbeschreibungen für Kunden",
      "Unternehmensfotos und Street View",
      "Öffnungszeiten in Echtzeit"
    ],
    statistics: [
      { label: "Google Maps Nutzer monatlich", value: "1+ Mrd", icon: "users" },
      { label: "Lokale Suchen auf Maps", value: "46%", icon: "percent" },
      { label: "Maps-Nutzer besuchen Geschäft", value: "76%", icon: "trending" }
    ],
    benefits: [
      "Maximale lokale Sichtbarkeit",
      "Wegführung direkt zum Geschäft",
      "Kundenbewertungen sichtbar",
      "Fotos und Eindrücke zeigen"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "NAP", "Proximity (Entfernung)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ],
    bestPracticeExample: {
      title: "Google: Präsenz in Google Maps verbessern",
      description: "Offizielle Tipps von Google zur Verbesserung der Sichtbarkeit in Google Maps.",
      url: "https://support.google.com/business/answer/7091?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "G",
    term: "Geo-Targeting",
    shortDescription: "Ausrichtung von Inhalten auf bestimmte geografische Regionen.",
    fullDescription: "Geo-Targeting bezeichnet die Optimierung und Ausrichtung von Inhalten auf spezifische geografische Regionen oder Standorte. Für Local SEO bedeutet dies, Inhalte für bestimmte Städte, Stadtteile oder Regionen zu erstellen und zu optimieren, um dort besser zu ranken.",
    features: [
      "Lokale Landing Pages erstellen",
      "Standort-spezifische Keywords",
      "Hreflang für internationale Seiten",
      "IP-basierte Weiterleitung"
    ],
    statistics: [
      { label: "Lokale Suchen zu Ladenbesuch", value: "72%", icon: "users" },
      { label: "Conversion lokaler Suchen", value: "+28%", icon: "trending" },
      { label: "Mobile lokale Suchen", value: "76%", icon: "percent" }
    ],
    benefits: [
      "Höhere Relevanz für lokale Suchen",
      "Bessere Conversion-Rates",
      "Weniger Wettbewerb pro Region",
      "Gezielte lokale Präsenz aufbauen"
    ],
    relatedTerms: ["Local SEO", "Local Pack", "Proximity (Entfernung)", "Hreflang"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" },
      { slug: "local-seo-zuerich", title: "Local SEO Zürich" },
      { slug: "local-seo-muenchen", title: "Local SEO München" },
      { slug: "local-seo-berlin", title: "Local SEO Berlin" }
    ]
  },
  // === H ===
  {
    letter: "H",
    term: "Heading Tags (H1-H6)",
    shortDescription: "HTML-Überschriften zur Strukturierung von Inhalten.",
    fullDescription: "Heading Tags (H1-H6) sind HTML-Elemente, die Überschriften und Unterüberschriften auf Webseiten definieren. H1 ist die wichtigste Überschrift und sollte das Hauptthema der Seite beschreiben. Eine logische Hierarchie der Headings hilft Suchmaschinen und Nutzern, den Inhalt zu verstehen.",
    features: [
      "H1: Eine pro Seite (Hauptthema)",
      "H2-H6: Unterüberschriften in Hierarchie",
      "Keywords natürlich integrieren",
      "Strukturierung für Screenreader"
    ],
    statistics: [
      { label: "Seiten mit H1-H3", value: "+40% Ranking", icon: "trending" },
      { label: "Seiten ohne H1", value: "20%", icon: "percent" },
      { label: "Optimale Länge H1", value: "20-70 Zeichen", icon: "chart" }
    ],
    benefits: [
      "Klare Content-Struktur",
      "Besseres Ranking-Signal",
      "Verbesserte Lesbarkeit",
      "Featured Snippet-Optimierung"
    ],
    relatedTerms: ["On-Page SEO", "Title Tag", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "H",
    term: "Hreflang",
    shortDescription: "HTML-Attribut für mehrsprachige und regionale Website-Versionen.",
    fullDescription: "Das Hreflang-Attribut signalisiert Google, welche Sprach- und Regionalversionen einer Seite existieren. Es verhindert Duplicate Content-Probleme bei mehrsprachigen Websites und sorgt dafür, dass Nutzer die richtige Version für ihre Sprache und Region sehen.",
    features: [
      "Sprach- und Regionalcodes (de, de-CH, de-AT)",
      "Im HTML-Head oder Sitemap",
      "x-default für Fallback-Seite",
      "Bidirektionale Verknüpfung nötig"
    ],
    statistics: [
      { label: "Mehrsprachige Sites mit Hreflang", value: "35%", icon: "percent" },
      { label: "Falsche Implementierung", value: "65%", icon: "chart" },
      { label: "Internationale SEO-Einfluss", value: "Hoch", icon: "trending" }
    ],
    benefits: [
      "Richtige Sprache für Nutzer",
      "Duplicate Content vermeiden",
      "Bessere internationale Rankings",
      "Klare Signale an Google"
    ],
    relatedTerms: ["Geo-Targeting", "Canonical URL", "Technical SEO", "Duplicate Content"],
    difficulty: "experte",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-schweiz", title: "Local SEO Schweiz" },
      { slug: "local-seo-zuerich", title: "Local SEO Zürich" }
    ],
    bestPracticeExample: {
      title: "Google: Hreflang Implementierung",
      description: "Offizielle Dokumentation zur korrekten Verwendung von Hreflang-Tags.",
      url: "https://developers.google.com/search/docs/specialty/international/localized-versions",
      source: "Google Search Central"
    }
  },
  {
    letter: "H",
    term: "HTTPS",
    shortDescription: "Sichere Verschlüsselung der Website-Verbindung.",
    fullDescription: "HTTPS (Hypertext Transfer Protocol Secure) verschlüsselt die Datenübertragung zwischen Browser und Server. Google hat HTTPS als Ranking-Faktor bestätigt und zeigt Warnungen bei unsicheren Seiten an. Für lokale Unternehmen ist HTTPS unerlässlich, um Vertrauen zu schaffen.",
    features: [
      "SSL/TLS-Zertifikat erforderlich",
      "Schloss-Symbol im Browser",
      "Schutz sensibler Daten",
      "Ranking-Signal für Google"
    ],
    statistics: [
      { label: "Top 100 mit HTTPS", value: "95%", icon: "percent" },
      { label: "Nutzervertrauen steigt", value: "+84%", icon: "users" },
      { label: "Ranking-Boost", value: "Gering", icon: "trending" }
    ],
    benefits: [
      "Pflichtvoraussetzung für seriöse Websites",
      "Erhöhtes Nutzervertrauen",
      "Schutz von Kundendaten",
      "Positives Ranking-Signal"
    ],
    relatedTerms: ["SSL-Zertifikat", "Technical SEO", "Core Web Vitals"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === I ===
  {
    letter: "I",
    term: "Image SEO",
    shortDescription: "Optimierung von Bildern für bessere Rankings in der Bildersuche.",
    fullDescription: "Image SEO umfasst alle Maßnahmen zur Optimierung von Bildern für Suchmaschinen. Dazu gehören beschreibende Dateinamen, Alt-Texte, Bildkomprimierung und strukturierte Daten. Für lokale Unternehmen sind optimierte Fotos in Google Business Profile und auf der Website besonders wichtig.",
    features: [
      "Beschreibende Dateinamen",
      "Optimierte Alt-Texte",
      "Bildkomprimierung für PageSpeed",
      "Lazy Loading implementieren"
    ],
    statistics: [
      { label: "Google Images Traffic-Anteil", value: "20%+", icon: "percent" },
      { label: "Bilder ohne Alt-Text", value: "42%", icon: "chart" },
      { label: "Komprimierung spart", value: "60-80%", icon: "trending" }
    ],
    benefits: [
      "Traffic aus Google Bildersuche",
      "Bessere User Experience",
      "Schnellere Ladezeiten",
      "Lokale Relevanz signalisieren"
    ],
    relatedTerms: ["Alt-Text", "PageSpeed", "Core Web Vitals", "On-Page SEO"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google: Image SEO Best Practices",
      description: "Offizielle Richtlinien zur Bildoptimierung für die Google-Suche.",
      url: "https://developers.google.com/search/docs/appearance/google-images",
      source: "Google Search Central"
    }
  },
  {
    letter: "I",
    term: "Indexierung",
    shortDescription: "Aufnahme einer Website in den Google-Suchindex.",
    fullDescription: "Indexierung ist der Prozess, bei dem Google eine Webseite crawlt, analysiert und in seinen Suchindex aufnimmt. Nur indexierte Seiten können in den Suchergebnissen erscheinen. Die Google Search Console zeigt den Indexierungsstatus und hilft bei der Behebung von Problemen.",
    features: [
      "Google Search Console nutzen",
      "Sitemap einreichen",
      "Robots.txt konfigurieren",
      "Canonical Tags setzen"
    ],
    statistics: [
      { label: "Durchschnittliche Indexierungszeit", value: "1-4 Tage", icon: "clock" },
      { label: "Seiten mit Index-Problemen", value: "25%", icon: "percent" },
      { label: "Sitemap-Nutzung", value: "+3x", icon: "trending" }
    ],
    benefits: [
      "Voraussetzung für Rankings",
      "Kontrolle über indexierte Inhalte",
      "Schnellere Aufnahme neuer Seiten",
      "Vermeidung von Duplicate Content"
    ],
    relatedTerms: ["Crawling", "XML-Sitemap", "Robots.txt", "Webmaster Tools / Search Console"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "I",
    term: "Internal Linking",
    shortDescription: "Verlinkung zwischen Seiten der eigenen Website.",
    fullDescription: "Internal Linking bezeichnet die Verlinkung zwischen verschiedenen Seiten derselben Website. Eine durchdachte interne Verlinkungsstrategie verteilt PageRank, hilft Suchmaschinen die Seitenstruktur zu verstehen und führt Nutzer zu relevanten Inhalten.",
    features: [
      "Verteilt PageRank intern",
      "Zeigt thematische Zusammenhänge",
      "Verbessert Crawling-Effizienz",
      "Anchor-Text-Optimierung"
    ],
    statistics: [
      { label: "Top-Seiten haben Links", value: "40+", icon: "chart" },
      { label: "Ranking-Einfluss", value: "Hoch", icon: "trending" },
      { label: "Verweildauer-Steigerung", value: "+40%", icon: "clock" }
    ],
    benefits: [
      "PageRank-Verteilung optimieren",
      "Nutzer länger auf der Seite halten",
      "Themenautorität aufbauen",
      "Crawl-Budget effizient nutzen"
    ],
    relatedTerms: ["Anchor Text", "On-Page SEO", "Crawling", "Link Building"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Internal Linking for SEO",
      description: "Detaillierter Guide zur Optimierung der internen Verlinkung für bessere Rankings.",
      url: "https://ahrefs.com/blog/internal-links-for-seo/",
      source: "Ahrefs"
    }
  },
  // === J ===
  {
    letter: "J",
    term: "JSON-LD",
    shortDescription: "Format für strukturierte Daten zur besseren Google-Verständlichkeit.",
    fullDescription: "JSON-LD (JavaScript Object Notation for Linked Data) ist das von Google bevorzugte Format für strukturierte Daten. Es ermöglicht, Informationen wie Unternehmensname, Öffnungszeiten, Bewertungen und Events maschinenlesbar zu markieren. Local Business Schema ist für lokale SEO besonders wichtig.",
    features: [
      "Von Google empfohlen",
      "Im <head> platzierbar",
      "Schema.org Vokabular",
      "LocalBusiness-Markup"
    ],
    statistics: [
      { label: "Rich Results Steigerung", value: "+30%", icon: "trending" },
      { label: "CTR-Erhöhung", value: "25%", icon: "percent" },
      { label: "Websites mit Schema", value: "33%", icon: "chart" }
    ],
    benefits: [
      "Rich Snippets in Suchergebnissen",
      "Besseres Google-Verständnis",
      "Höhere Klickraten",
      "Voice Search Optimierung"
    ],
    relatedTerms: ["Schema Markup", "Rich Snippets", "Technical SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Strukturierte Daten einführen",
      description: "Offizielle Dokumentation zur Implementierung von JSON-LD strukturierten Daten.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      source: "Google Search Central"
    }
  },
  // === K ===
  {
    letter: "K",
    term: "Keywords",
    shortDescription: "Suchbegriffe, für die eine Website optimiert wird.",
    fullDescription: "Keywords sind die Wörter und Phrasen, die Nutzer in Suchmaschinen eingeben. Im Local SEO kombinieren wir Keywords oft mit Ortsnamen ('Zahnarzt München'). Die Keyword-Recherche identifiziert relevante Suchbegriffe mit gutem Suchvolumen und erreichbarer Konkurrenz.",
    features: [
      "Short-Tail vs. Long-Tail Keywords",
      "Lokale Keywords mit Ortsbezug",
      "Suchintention verstehen",
      "Keyword-Mapping pro Seite"
    ],
    statistics: [
      { label: "Long-Tail Anteil", value: "70%", icon: "percent" },
      { label: "Lokale Suchanfragen täglich", value: "8.5 Mrd", icon: "search" },
      { label: "Conversion bei lokalen Keywords", value: "+78%", icon: "trending" }
    ],
    benefits: [
      "Gezielte Optimierung möglich",
      "Relevanten Traffic anziehen",
      "Wettbewerbsanalyse durchführen",
      "Content-Strategie entwickeln"
    ],
    relatedTerms: ["Long-Tail Keywords", "Search Intent", "Keyword Density", "Content-Strategie"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Complete Keyword Research Guide",
      description: "Umfassender Guide zur Keyword-Recherche mit kostenlosen und Premium-Tools.",
      url: "https://ahrefs.com/blog/keyword-research/",
      source: "Ahrefs"
    }
  },
  {
    letter: "K",
    term: "Keyword Density",
    shortDescription: "Prozentuale Häufigkeit eines Keywords im Text.",
    fullDescription: "Keyword Density bezeichnet den prozentualen Anteil eines Keywords im Verhältnis zur Gesamtwortzahl eines Textes. Früher war dies ein wichtiger Ranking-Faktor, heute bewertet Google semantische Relevanz wichtiger. Übertriebene Keyword-Dichte (Keyword Stuffing) wird abgestraft.",
    features: [
      "Formel: (Keyword-Anzahl / Gesamtwörter) × 100",
      "Optimal: 1-2%",
      "Über 3% gilt als Spam-Risiko",
      "Semantische Variationen wichtiger"
    ],
    statistics: [
      { label: "Optimale Keyword Density", value: "1-2%", icon: "percent" },
      { label: "Spam-Grenze", value: ">3%", icon: "chart" },
      { label: "Bedeutung heute", value: "Gering", icon: "trending" }
    ],
    benefits: [
      "Natürlichen Content schreiben",
      "Keyword Stuffing vermeiden",
      "Semantische SEO verstehen",
      "Content-Qualität priorisieren"
    ],
    relatedTerms: ["Keyword Stuffing", "On-Page SEO", "Keywords", "Search Intent"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "K",
    term: "Keyword Stuffing",
    shortDescription: "Übermäßige Verwendung von Keywords als Spam-Technik.",
    fullDescription: "Keyword Stuffing bezeichnet die übermäßige und unnatürliche Verwendung von Keywords in Texten, Meta-Tags oder verstecktem Text. Diese Black-Hat-Technik wurde früher genutzt, um Rankings zu manipulieren, führt heute aber zu Abstrafungen durch Google.",
    features: [
      "Unnatürliche Keyword-Wiederholung",
      "Versteckte Keywords (weiß auf weiß)",
      "Keyword-Spam in Meta-Tags",
      "Wird von Google erkannt und bestraft"
    ],
    statistics: [
      { label: "Google-Erkennung", value: "99%+", icon: "percent" },
      { label: "Abstrafungsrisiko", value: "Sehr hoch", icon: "trending" },
      { label: "Recovery-Zeit", value: "3-12 Monate", icon: "clock" }
    ],
    benefits: [
      "Wissen was man vermeiden sollte",
      "Natürlichen Content schreiben lernen",
      "Langfristige Rankings sichern",
      "Google-Richtlinien verstehen"
    ],
    relatedTerms: ["Black Hat SEO", "Keyword Density", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" }
    ]
  },
  {
    letter: "K",
    term: "Knowledge Graph",
    shortDescription: "Googles Wissensdatenbank für vernetzte Informationen.",
    fullDescription: "Der Knowledge Graph ist Googles Wissensdatenbank, die Informationen über Personen, Orte, Unternehmen und Konzepte vernetzt. Er speist die Knowledge Panels in den Suchergebnissen. Lokale Unternehmen können durch GBP-Optimierung und strukturierte Daten im Knowledge Graph erscheinen.",
    features: [
      "Über 5 Milliarden Entitäten",
      "Vernetzt Informationen semantisch",
      "Speist Knowledge Panels",
      "Basiert auf verschiedenen Datenquellen"
    ],
    statistics: [
      { label: "Entitäten im Knowledge Graph", value: "5+ Mrd", icon: "chart" },
      { label: "Suchanfragen mit KG-Ergebnis", value: "40%", icon: "percent" },
      { label: "CTR Knowledge Panel", value: "+10%", icon: "trending" }
    ],
    benefits: [
      "Erhöhte Markenbekanntheit",
      "Prominent in Suchergebnissen",
      "Vertrauenswürdigkeit signalisieren",
      "Zero-Click-Präsenz sichern"
    ],
    relatedTerms: ["Knowledge Panel", "Schema Markup", "Google Business Profile", "Zero-Click Search"],
    difficulty: "experte",
    importance: 3,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ]
  },
  {
    letter: "K",
    term: "Knowledge Panel",
    shortDescription: "Infobox rechts neben den Suchergebnissen für Unternehmen/Personen.",
    fullDescription: "Ein Knowledge Panel ist die Infobox, die Google rechts neben den Suchergebnissen anzeigt, wenn nach Unternehmen, Personen oder Marken gesucht wird. Für lokale Unternehmen zeigt es Informationen aus dem Google Business Profile wie Adresse, Öffnungszeiten, Fotos und Bewertungen.",
    features: [
      "Basiert auf Google Business Profile",
      "Zeigt Bewertungen und Fotos",
      "Direkte Interaktionsmöglichkeiten",
      "Claim-Funktion für Unternehmen"
    ],
    statistics: [
      { label: "Klicks auf Knowledge Panel", value: "25%+", icon: "percent" },
      { label: "Conversions über Panel", value: "+35%", icon: "trending" },
      { label: "Mobile Prominenz", value: "Sehr hoch", icon: "chart" }
    ],
    benefits: [
      "Maximale Markenpräsenz",
      "Direkte Kundeninteraktion",
      "Vertrauensaufbau",
      "Kostenlose Premium-Platzierung"
    ],
    relatedTerms: ["Knowledge Graph", "Google Business Profile", "SERP", "Zero-Click Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" }
    ]
  },
  // === L ===
  {
    letter: "L",
    term: "Local SEO",
    shortDescription: "Suchmaschinenoptimierung für lokale Unternehmen und Suchanfragen.",
    fullDescription: "Local SEO ist die Optimierung einer Online-Präsenz, um bei lokalen Suchanfragen besser gefunden zu werden. Es umfasst Google Business Profile, lokale Keywords, Citations, Bewertungen und lokale Backlinks. Ziel ist es, im Local Pack und auf Google Maps prominent zu erscheinen.",
    features: [
      "Google Business Profile optimieren",
      "Lokale Keywords einsetzen",
      "Citations aufbauen und pflegen",
      "Bewertungen aktiv managen"
    ],
    statistics: [
      { label: "Lokale Suchen täglich", value: "8.5 Mrd", icon: "search" },
      { label: "Lokale Suchen zu Kauf", value: "28%", icon: "percent" },
      { label: "Mobile lokale Suchen", value: "76%", icon: "trending" }
    ],
    benefits: [
      "Mehr lokale Kunden gewinnen",
      "Höhere Sichtbarkeit in der Region",
      "Kosteneffizientes Marketing",
      "Direkte Kundenanfragen"
    ],
    relatedTerms: ["Google Business Profile", "Local Pack", "NAP", "Citations", "Reviews (Bewertungen)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" }
    ],
    bestPracticeExample: {
      title: "Moz: Local SEO Learning Center",
      description: "Umfassende Ressource zum Lernen und Anwenden von Local SEO Strategien.",
      url: "https://moz.com/learn/seo/local",
      source: "Moz"
    }
  },
  {
    letter: "L",
    term: "Local Pack",
    shortDescription: "Die 3 lokalen Ergebnisse mit Karte in der Google-Suche.",
    fullDescription: "Das Local Pack (auch 3-Pack genannt) zeigt die drei relevantesten lokalen Unternehmen mit einer Google Maps-Karte in den Suchergebnissen. Es erscheint bei lokalen Suchanfragen und erhält den Großteil der Klicks. Die Optimierung für das Local Pack ist das Hauptziel des Local SEO.",
    features: [
      "Google Business Profile erforderlich",
      "Zeigt Name, Bewertungen, Adresse",
      "Click-to-Call auf Mobilgeräten",
      "Wegbeschreibung direkt verfügbar"
    ],
    statistics: [
      { label: "Klicks auf Local Pack", value: "44%", icon: "percent" },
      { label: "Mobile Suchanfragen lokal", value: "46%", icon: "search" },
      { label: "Conversion-Rate", value: "80%", icon: "trending" }
    ],
    benefits: [
      "Maximale lokale Sichtbarkeit",
      "Direkter Kundenkontakt",
      "Höchste Klickraten bei lokalen Suchen",
      "Kostenlose Premium-Platzierung"
    ],
    relatedTerms: ["Google Business Profile", "Local SEO", "Google Maps", "Proximity (Entfernung)"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ],
    bestPracticeExample: {
      title: "BrightLocal: Local Pack Research 2024",
      description: "Aktuelle Studie zu Klickraten und Nutzerverhalten im Local Pack mit Optimierungstipps.",
      url: "https://www.brightlocal.com/research/local-pack-click-through-study/",
      source: "BrightLocal"
    }
  },
  {
    letter: "L",
    term: "Long-Tail Keywords",
    shortDescription: "Längere, spezifischere Suchanfragen mit weniger Wettbewerb.",
    fullDescription: "Long-Tail Keywords sind längere, spezifischere Suchphrasen (meist 3+ Wörter), die ein geringeres Suchvolumen, aber höhere Conversion-Raten aufweisen. Sie machen 70% aller Suchanfragen aus und sind oft leichter zu ranken als generische Short-Tail Keywords.",
    features: [
      "3+ Wörter typischerweise",
      "Geringeres Suchvolumen",
      "Höhere Conversion-Intent",
      "Weniger Wettbewerb"
    ],
    statistics: [
      { label: "Anteil aller Suchanfragen", value: "70%", icon: "percent" },
      { label: "Conversion-Rate höher", value: "2.5x", icon: "trending" },
      { label: "Wettbewerb niedriger", value: "5-10x", icon: "chart" }
    ],
    benefits: [
      "Leichter zu ranken",
      "Höhere Conversion-Raten",
      "Gezielterer Traffic",
      "Besserer ROI"
    ],
    relatedTerms: ["Keywords", "Search Intent", "Content-Strategie", "Voice Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "L",
    term: "Link Building",
    shortDescription: "Strategischer Aufbau von Backlinks zur Website.",
    fullDescription: "Link Building ist der strategische Prozess, qualitativ hochwertige Backlinks von anderen Websites zu erhalten. Es ist einer der wichtigsten Ranking-Faktoren. Methoden umfassen Gastbeiträge, PR, Broken Link Building und das Erstellen linkwürdiger Inhalte.",
    features: [
      "Qualität vor Quantität",
      "Natürlicher Linkaufbau bevorzugt",
      "Gastbeiträge und PR",
      "Content Marketing Strategie"
    ],
    statistics: [
      { label: "Top-Ranking-Faktor", value: "#1-2", icon: "trending" },
      { label: "Seiten mit 0 Backlinks", value: "66%", icon: "percent" },
      { label: "Kosten pro hochwertigen Link", value: "€100-500", icon: "chart" }
    ],
    benefits: [
      "Höhere Domain Authority",
      "Bessere Rankings",
      "Mehr organischer Traffic",
      "Markenbekanntheit steigern"
    ],
    relatedTerms: ["Backlinks", "Domain Authority", "Anchor Text", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Backlinko: Link Building Guide",
      description: "Umfassender Guide mit 17 bewährten Link Building Strategien.",
      url: "https://backlinko.com/link-building",
      source: "Backlinko"
    }
  },
  // === M ===
  {
    letter: "M",
    term: "Meta Description",
    shortDescription: "Beschreibungstext unter dem Title in Suchergebnissen.",
    fullDescription: "Die Meta Description ist ein HTML-Tag, das den Beschreibungstext unter dem Seitentitel in Suchergebnissen definiert. Obwohl kein direkter Ranking-Faktor, beeinflusst sie die Klickrate erheblich. Eine gute Meta Description enthält einen Call-to-Action und wichtige Keywords.",
    features: [
      "Max. 155-160 Zeichen optimal",
      "Kein direkter Ranking-Faktor",
      "Beeinflusst CTR stark",
      "Google überschreibt oft automatisch"
    ],
    statistics: [
      { label: "Google überschreibt", value: "70%", icon: "percent" },
      { label: "CTR-Steigerung möglich", value: "+30%", icon: "trending" },
      { label: "Seiten ohne Description", value: "25%", icon: "chart" }
    ],
    benefits: [
      "Höhere Klickraten erzielen",
      "Nutzer zum Klicken animieren",
      "Relevanz kommunizieren",
      "Call-to-Action einbauen"
    ],
    relatedTerms: ["Title Tag", "Meta-Tags", "CTR", "SERP"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Yoast: Meta Description Guide",
      description: "Best Practices für überzeugende Meta Descriptions mit Beispielen.",
      url: "https://yoast.com/meta-descriptions/",
      source: "Yoast"
    }
  },
  {
    letter: "M",
    term: "Meta-Tags",
    shortDescription: "HTML-Tags für Titel und Beschreibung in Suchergebnissen.",
    fullDescription: "Meta-Tags sind HTML-Elemente, die Suchmaschinen Informationen über eine Seite geben. Die wichtigsten sind der Title-Tag (Seitentitel in Suchergebnissen) und die Meta-Description (Beschreibungstext). Für Local SEO sollten Ortsnamen und lokale Keywords integriert werden.",
    features: [
      "Title-Tag: Max. 60 Zeichen",
      "Meta-Description: Max. 160 Zeichen",
      "Meta-Robots für Indexierung",
      "Open Graph für Social Media"
    ],
    statistics: [
      { label: "CTR-Steigerung optimierter Titles", value: "+20%", icon: "trending" },
      { label: "Google schreibt Titles um", value: "61%", icon: "percent" },
      { label: "Description beeinflusst CTR", value: "Stark", icon: "chart" }
    ],
    benefits: [
      "Kontrolle über Suchergebnis-Darstellung",
      "Höhere Klickraten erzielen",
      "Lokale Keywords prominent platzieren",
      "Nutzer zum Klicken animieren"
    ],
    relatedTerms: ["Title Tag", "Meta Description", "On-Page SEO", "SERP"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "M",
    term: "Mobile First Index",
    shortDescription: "Google indexiert primär die mobile Version einer Website.",
    fullDescription: "Mobile First Index bedeutet, dass Google primär die mobile Version einer Website für Indexierung und Ranking verwendet. Seit 2021 ist Mobile First für alle Websites aktiv. Eine nicht-mobile-freundliche Website wird schlechter ranken, besonders bei mobilen Suchanfragen.",
    features: [
      "Mobile Version ist maßgeblich",
      "Responsive Design empfohlen",
      "Gleicher Content auf Mobile/Desktop",
      "Mobile Usability Test in Search Console"
    ],
    statistics: [
      { label: "Mobile Traffic weltweit", value: "60%+", icon: "percent" },
      { label: "Mobile lokale Suchen", value: "76%", icon: "search" },
      { label: "Mobile First seit", value: "2021", icon: "clock" }
    ],
    benefits: [
      "Bessere mobile Rankings",
      "Größere Zielgruppe erreichen",
      "Zukunftssichere Website",
      "Bessere User Experience"
    ],
    relatedTerms: ["Responsive Design", "Core Web Vitals", "PageSpeed", "User Experience"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" }
    ],
    bestPracticeExample: {
      title: "Google: Mobile First Indexing",
      description: "Offizielle Dokumentation zu Mobile First Indexing Best Practices.",
      url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
      source: "Google Search Central"
    }
  },
  // === N ===
  {
    letter: "N",
    term: "NAP",
    shortDescription: "Name, Address, Phone - Die Basis lokaler Unternehmensdaten.",
    fullDescription: "NAP steht für Name, Address, Phone und bezeichnet die grundlegenden Kontaktdaten eines Unternehmens. Konsistente NAP-Daten über alle Online-Präsenzen hinweg (Website, Verzeichnisse, Social Media) sind einer der wichtigsten Local SEO Ranking-Faktoren.",
    features: [
      "Exakt gleiche Schreibweise überall",
      "Einheitliche Telefonnummer",
      "Adresse mit Stadtteil",
      "Schema Markup verwenden"
    ],
    statistics: [
      { label: "Unternehmen mit NAP-Fehlern", value: "73%", icon: "percent" },
      { label: "Ranking-Einfluss", value: "Hoch", icon: "trending" },
      { label: "Citations zu prüfen", value: "50+", icon: "search" }
    ],
    benefits: [
      "Konsistentes Markenbild",
      "Bessere lokale Rankings",
      "Vermeidung von Verwirrung",
      "Stärkere lokale Signale"
    ],
    relatedTerms: ["Citations", "Branchenverzeichnis", "Local SEO", "Google Business Profile"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz Guide" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Moz: NAP Consistency Guide",
      description: "Detaillierter Guide zur NAP-Konsistenz mit Checklisten und Audit-Anleitung.",
      url: "https://moz.com/learn/seo/local-citations",
      source: "Moz"
    }
  },
  {
    letter: "N",
    term: "Nofollow Link",
    shortDescription: "Link, der keinen PageRank weitergibt.",
    fullDescription: "Ein Nofollow Link enthält das Attribut rel='nofollow', das Suchmaschinen signalisiert, diesem Link nicht zu folgen und keinen PageRank weiterzugeben. Seit 2020 behandelt Google Nofollow als 'Hinweis' statt als strikte Anweisung. Nofollow wird für bezahlte Links und User-Generated Content verwendet.",
    features: [
      "rel='nofollow' Attribut",
      "Kein direkter PageRank-Transfer",
      "Seit 2020 als Hinweis behandelt",
      "Auch: rel='sponsored', rel='ugc'"
    ],
    statistics: [
      { label: "Backlinks mit Nofollow", value: "30%", icon: "percent" },
      { label: "Indirekter SEO-Wert", value: "Vorhanden", icon: "trending" },
      { label: "Traffic-Wert", value: "100%", icon: "chart" }
    ],
    benefits: [
      "Natürliches Linkprofil aufbauen",
      "Traffic trotz Nofollow erhalten",
      "Markenerwähnungen nutzen",
      "Linkbuilding-Strategie diversifizieren"
    ],
    relatedTerms: ["Backlinks", "Link Building", "Off-Page SEO"],
    difficulty: "fortgeschritten",
    importance: 3
  },
  // === O ===
  {
    letter: "O",
    term: "Off-Page SEO",
    shortDescription: "Alle SEO-Maßnahmen außerhalb der eigenen Website.",
    fullDescription: "Off-Page SEO umfasst alle Optimierungsmaßnahmen, die außerhalb der eigenen Website stattfinden. Der wichtigste Faktor ist Link Building, aber auch Social Signals, Markenerwähnungen, lokale Citations und Online-Reputation zählen dazu.",
    features: [
      "Backlink-Aufbau",
      "Brand Mentions",
      "Social Signals",
      "Lokale Citations"
    ],
    statistics: [
      { label: "Ranking-Einfluss", value: "~50%", icon: "percent" },
      { label: "Backlinks wichtigster Faktor", value: "#1-2", icon: "trending" },
      { label: "Zeit bis Wirkung", value: "3-6 Monate", icon: "clock" }
    ],
    benefits: [
      "Höhere Domain Authority",
      "Bessere Rankings",
      "Mehr Referral-Traffic",
      "Markenbekanntheit steigern"
    ],
    relatedTerms: ["On-Page SEO", "Link Building", "Backlinks", "Citations", "Technical SEO"],
    difficulty: "fortgeschritten",
    importance: 5,
    relatedArticles: [
      { slug: "local-link-building", title: "Local Link Building Strategien" }
    ],
    bestPracticeExample: {
      title: "Ahrefs: Off-Page SEO Guide",
      description: "Umfassender Guide zu allen Off-Page SEO Faktoren und Strategien.",
      url: "https://ahrefs.com/blog/off-page-seo/",
      source: "Ahrefs"
    }
  },
  {
    letter: "O",
    term: "On-Page SEO",
    shortDescription: "Optimierungen direkt auf der eigenen Website.",
    fullDescription: "On-Page SEO umfasst alle Optimierungsmaßnahmen, die direkt auf der Website durchgeführt werden. Dazu gehören Inhaltsoptimierung, technische SEO-Aspekte, interne Verlinkung und User Experience. Für lokale Unternehmen sind lokale Landing Pages und strukturierte Daten besonders wichtig.",
    features: [
      "Content-Optimierung",
      "Technisches SEO",
      "Interne Verlinkung",
      "URL-Struktur optimieren"
    ],
    statistics: [
      { label: "Ranking-Einfluss", value: "~25%", icon: "percent" },
      { label: "Core Web Vitals wichtig", value: "Ja", icon: "trending" },
      { label: "Seiten pro Website", value: "Alle", icon: "chart" }
    ],
    benefits: [
      "Volle Kontrolle über Optimierung",
      "Schnelle Umsetzung möglich",
      "Solide SEO-Grundlage schaffen",
      "Bessere User Experience"
    ],
    relatedTerms: ["Off-Page SEO", "Technical SEO", "Keywords", "Internal Linking", "Title Tag"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Backlinko: On-Page SEO Guide",
      description: "Detaillierter Guide zu allen On-Page SEO Faktoren mit Praxisbeispielen.",
      url: "https://backlinko.com/on-page-seo",
      source: "Backlinko"
    }
  },
  {
    letter: "O",
    term: "Organic Traffic",
    shortDescription: "Unbezahlter Traffic aus organischen Suchergebnissen.",
    fullDescription: "Organic Traffic bezeichnet Besucher, die über unbezahlte Suchergebnisse auf eine Website gelangen - im Gegensatz zu bezahltem Traffic aus Anzeigen. Die Steigerung des organischen Traffics ist das primäre Ziel der Suchmaschinenoptimierung.",
    features: [
      "Kostenlos (keine Klickkosten)",
      "Nachhaltig bei guten Rankings",
      "Messbar in Analytics",
      "Abhängig von SEO-Maßnahmen"
    ],
    statistics: [
      { label: "Durchschnittliche CTR Pos. 1", value: "27.6%", icon: "percent" },
      { label: "Organic vs. Paid Traffic", value: "53% vs 15%", icon: "chart" },
      { label: "Conversion bei Organic", value: "Höher", icon: "trending" }
    ],
    benefits: [
      "Keine laufenden Werbekosten",
      "Nachhaltige Traffic-Quelle",
      "Höheres Nutzervertrauen",
      "Skalierbar durch SEO"
    ],
    relatedTerms: ["SERP", "Keywords", "On-Page SEO", "Off-Page SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === P ===
  {
    letter: "P",
    term: "PageSpeed",
    shortDescription: "Ladegeschwindigkeit einer Website als Ranking-Faktor.",
    fullDescription: "PageSpeed bezeichnet die Ladezeit einer Website und ist ein bestätigter Google Ranking-Faktor. Seit den Core Web Vitals ist die Page Experience noch wichtiger geworden. Langsame Websites verlieren Besucher und ranken schlechter - besonders kritisch für mobile lokale Suchen.",
    features: [
      "Largest Contentful Paint (LCP)",
      "First Input Delay (FID) / INP",
      "Cumulative Layout Shift (CLS)",
      "Time to First Byte (TTFB)"
    ],
    statistics: [
      { label: "Absprung bei >3s Ladezeit", value: "53%", icon: "percent" },
      { label: "Conversion-Steigerung pro Sekunde", value: "+7%", icon: "trending" },
      { label: "Mobile Nutzer erwarten", value: "<3s", icon: "clock" }
    ],
    benefits: [
      "Bessere Rankings erzielen",
      "Höhere Conversion-Rates",
      "Reduzierte Absprungraten",
      "Bessere mobile Erfahrung"
    ],
    relatedTerms: ["Core Web Vitals", "Mobile First Index", "Technical SEO", "User Experience"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ],
    bestPracticeExample: {
      title: "Google PageSpeed Insights",
      description: "Offizielles Tool zur Analyse und Optimierung der Seitengeschwindigkeit.",
      url: "https://pagespeed.web.dev/",
      source: "Google"
    }
  },
  {
    letter: "P",
    term: "Proximity (Entfernung)",
    shortDescription: "Entfernung zwischen Nutzer und Unternehmen als Ranking-Faktor.",
    fullDescription: "Proximity bezeichnet die geografische Nähe zwischen dem Standort des Suchenden und einem lokalen Unternehmen. Es ist einer der drei wichtigsten Local SEO Ranking-Faktoren (neben Relevanz und Prominenz). Google zeigt bevorzugt Unternehmen in der Nähe des Nutzers an.",
    features: [
      "GPS-basiert auf Mobilgeräten",
      "IP-basiert auf Desktop",
      "Stadtteile und Bezirke relevant",
      "Nicht direkt beeinflussbar"
    ],
    statistics: [
      { label: "Im 1km Radius erscheinen", value: "72%", icon: "percent" },
      { label: "Local Pack Einfluss", value: "~25%", icon: "trending" },
      { label: "Mobile Suchen 'in meiner Nähe'", value: "+200%", icon: "chart" }
    ],
    benefits: [
      "Verstehen des Ranking-Faktors",
      "Lokale Landing Pages erstellen",
      "Service Areas definieren",
      "Standortvorteile nutzen"
    ],
    relatedTerms: ["Local Pack", "Local SEO", "Geo-Targeting", "Google Maps"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-maps-ranking-faktoren", title: "Google Maps Ranking Faktoren" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ]
  },
  // === Q ===
  {
    letter: "Q",
    term: "Quality Raters",
    shortDescription: "Menschen, die Suchergebnisqualität für Google bewerten.",
    fullDescription: "Quality Raters sind menschliche Bewerter, die für Google die Qualität von Suchergebnissen einschätzen. Sie arbeiten nach den Quality Rater Guidelines, die E-E-A-T-Kriterien detailliert beschreiben. Ihre Bewertungen fließen in die Algorithmus-Entwicklung ein.",
    features: [
      "Weltweit über 10.000 Bewerter",
      "Arbeiten nach QRG (Guidelines)",
      "Bewerten E-E-A-T",
      "Kein direkter Ranking-Einfluss"
    ],
    statistics: [
      { label: "QRG Seitenzahl", value: "175+", icon: "chart" },
      { label: "Bewertungen täglich", value: "Tausende", icon: "search" },
      { label: "Einfluss auf Algorithmus", value: "Indirekt", icon: "trending" }
    ],
    benefits: [
      "Verständnis für Googles Qualitätskriterien",
      "Einblick in YMYL-Bewertung",
      "Best Practices lernen",
      "Zukünftige Updates antizipieren"
    ],
    relatedTerms: ["E-E-A-T", "YMYL", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "experte",
    importance: 2
  },
  // === R ===
  {
    letter: "R",
    term: "Responsive Design",
    shortDescription: "Website-Design, das sich an alle Bildschirmgrößen anpasst.",
    fullDescription: "Responsive Design ist ein Webdesign-Ansatz, bei dem sich die Website automatisch an verschiedene Bildschirmgrößen und Geräte anpasst. Google empfiehlt Responsive Design als bevorzugte Methode für mobile Websites und es ist Voraussetzung für gute Mobile-Rankings.",
    features: [
      "Automatische Anpassung an Bildschirmgröße",
      "Eine URL für alle Geräte",
      "Fluid Grids und flexible Bilder",
      "CSS Media Queries"
    ],
    statistics: [
      { label: "Mobile Traffic Anteil", value: "60%+", icon: "percent" },
      { label: "Google-Empfehlung", value: "Ja", icon: "trending" },
      { label: "Websites mit Responsive Design", value: "75%", icon: "chart" }
    ],
    benefits: [
      "Beste Mobile-Erfahrung",
      "Von Google empfohlen",
      "Einfachere Wartung (eine Version)",
      "Bessere Rankings auf Mobile"
    ],
    relatedTerms: ["Mobile First Index", "Core Web Vitals", "User Experience", "PageSpeed"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  {
    letter: "R",
    term: "Reviews (Bewertungen)",
    shortDescription: "Kundenbewertungen als wichtiger Local SEO Faktor.",
    fullDescription: "Reviews sind Kundenbewertungen, die auf Google, Facebook, Branchenportalen und anderen Plattformen hinterlassen werden. Sie beeinflussen das Local Pack Ranking erheblich und sind der wichtigste Faktor für die Kaufentscheidung lokaler Kunden.",
    features: [
      "Google-Bewertungen am wichtigsten",
      "Sternebewertung + Rezensionstext",
      "Antworten auf Bewertungen",
      "Review-Management Tools"
    ],
    statistics: [
      { label: "Vertrauen in Online-Bewertungen", value: "88%", icon: "users" },
      { label: "Local Pack Einfluss", value: "17%", icon: "percent" },
      { label: "Kaufentscheidung beeinflusst", value: "93%", icon: "trending" }
    ],
    benefits: [
      "Höhere Rankings im Local Pack",
      "Mehr Vertrauen bei Neukunden",
      "Wertvolles Kundenfeedback",
      "Höhere Conversion-Rates"
    ],
    relatedTerms: ["Google Business Profile", "E-E-A-T", "Local SEO", "Local Pack"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "google-bewertungen-bekommen", title: "Google Bewertungen bekommen" },
      { slug: "negative-google-bewertungen", title: "Negative Google Bewertungen managen" },
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" }
    ],
    bestPracticeExample: {
      title: "Google: Auf Bewertungen antworten",
      description: "Offizielle Anleitung zum professionellen Umgang mit Google-Bewertungen.",
      url: "https://support.google.com/business/answer/3474050?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "R",
    term: "Rich Snippets",
    shortDescription: "Erweiterte Suchergebnisse mit zusätzlichen Informationen.",
    fullDescription: "Rich Snippets sind erweiterte Suchergebnisse, die zusätzliche Informationen wie Bewertungssterne, Preise, Verfügbarkeit oder Rezeptzeiten anzeigen. Sie entstehen durch strukturierte Daten (Schema Markup) und erhöhen die Klickrate deutlich.",
    features: [
      "Bewertungssterne",
      "Produktpreise und Verfügbarkeit",
      "FAQ-Antworten",
      "Event-Informationen"
    ],
    statistics: [
      { label: "CTR-Steigerung", value: "+30%", icon: "trending" },
      { label: "Websites mit Rich Snippets", value: "33%", icon: "percent" },
      { label: "Klickratenerhöhung bei Reviews", value: "+87%", icon: "chart" }
    ],
    benefits: [
      "Höhere Klickraten",
      "Mehr Aufmerksamkeit in SERP",
      "Mehr Informationen vorab zeigen",
      "Vertrauenswürdigkeit steigern"
    ],
    relatedTerms: ["Schema Markup", "JSON-LD", "SERP", "Featured Snippet"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" }
    ]
  },
  {
    letter: "R",
    term: "Robots.txt",
    shortDescription: "Datei zur Steuerung des Suchmaschinen-Crawlings.",
    fullDescription: "Die robots.txt ist eine Textdatei im Stammverzeichnis einer Website, die Suchmaschinen-Crawlern Anweisungen gibt, welche Bereiche sie crawlen dürfen und welche nicht. Sie ist kein Sicherheitsmechanismus, sondern eine Empfehlung an gutartige Bots.",
    features: [
      "Liegt im Root-Verzeichnis",
      "Steuert Crawling (nicht Indexierung)",
      "Disallow und Allow Direktiven",
      "Sitemap-Verweis möglich"
    ],
    statistics: [
      { label: "Websites mit robots.txt", value: "80%", icon: "percent" },
      { label: "Falsch konfiguriert", value: "15%", icon: "chart" },
      { label: "Kann Rankings blockieren", value: "Ja", icon: "trending" }
    ],
    benefits: [
      "Crawl-Budget optimieren",
      "Unwichtige Bereiche ausschließen",
      "Admin-Bereiche verstecken",
      "Duplicate Content vermeiden"
    ],
    relatedTerms: ["Crawling", "Indexierung", "Technical SEO", "XML-Sitemap"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === S ===
  {
    letter: "S",
    term: "Schema Markup",
    shortDescription: "Strukturierte Daten nach Schema.org Standard.",
    fullDescription: "Schema Markup ist eine standardisierte Form strukturierter Daten, die Suchmaschinen hilft, Inhalte besser zu verstehen. Es verwendet das Schema.org Vokabular und kann in verschiedenen Formaten (JSON-LD, Microdata) implementiert werden. Für Local SEO ist das LocalBusiness Schema besonders wichtig.",
    features: [
      "Schema.org Vokabular",
      "LocalBusiness, Product, FAQ, etc.",
      "JSON-LD bevorzugtes Format",
      "Rich Results ermöglichen"
    ],
    statistics: [
      { label: "Websites mit Schema", value: "33%", icon: "percent" },
      { label: "Rich Results wahrscheinlicher", value: "+30%", icon: "trending" },
      { label: "CTR-Steigerung", value: "25%", icon: "chart" }
    ],
    benefits: [
      "Rich Snippets erhalten",
      "Google Verständnis verbessern",
      "Lokale Präsenz stärken",
      "Voice Search optimieren"
    ],
    relatedTerms: ["JSON-LD", "Rich Snippets", "Technical SEO", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "schema-markup-local-seo", title: "Schema Markup für Local SEO" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Google: Strukturierte Daten einführen",
      description: "Offizielle Dokumentation zu allen Schema-Typen und deren Implementierung.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      source: "Google Search Central"
    }
  },
  {
    letter: "S",
    term: "Search Intent",
    shortDescription: "Die Absicht hinter einer Suchanfrage.",
    fullDescription: "Search Intent (Suchintention) beschreibt, was ein Nutzer tatsächlich erreichen möchte, wenn er eine Suchanfrage stellt. Google ordnet jeder Suchanfrage eine Intention zu und bevorzugt Ergebnisse, die diese erfüllen. Die vier Haupttypen sind: informational, navigational, commercial und transactional.",
    features: [
      "Informational: Wissen suchen",
      "Navigational: Bestimmte Seite finden",
      "Commercial: Recherche vor Kauf",
      "Transactional: Direkt kaufen/buchen"
    ],
    statistics: [
      { label: "Informational Suchen", value: "80%", icon: "percent" },
      { label: "Transactional Suchen", value: "10%", icon: "chart" },
      { label: "Intent-Match für Ranking", value: "Kritisch", icon: "trending" }
    ],
    benefits: [
      "Passenden Content erstellen",
      "Bessere Rankings erzielen",
      "Höhere Conversion-Rates",
      "Nutzer zufriedenstellen"
    ],
    relatedTerms: ["Keywords", "Content-Strategie", "Long-Tail Keywords", "User Experience"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "local-seo-keywords-finden", title: "Local SEO Keywords finden" },
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ],
    bestPracticeExample: {
      title: "Backlinko: Search Intent Guide",
      description: "Umfassender Guide zum Verstehen und Nutzen von Suchintentionen.",
      url: "https://backlinko.com/hub/seo/search-intent",
      source: "Backlinko"
    }
  },
  {
    letter: "S",
    term: "SERP",
    shortDescription: "Search Engine Results Page - Die Suchergebnisseite.",
    fullDescription: "SERP (Search Engine Results Page) ist die Seite, die Google nach einer Suchanfrage anzeigt. Sie enthält organische Ergebnisse, Anzeigen, das Local Pack, Featured Snippets und weitere Elemente. Das Verständnis der SERP-Features ist entscheidend für eine erfolgreiche SEO-Strategie.",
    features: [
      "Organische Ergebnisse (10 Blue Links)",
      "Google Ads (bezahlte Anzeigen)",
      "Local Pack / Map Pack",
      "Knowledge Panel & Rich Snippets"
    ],
    statistics: [
      { label: "Klicks auf Position 1", value: "27.6%", icon: "percent" },
      { label: "Klicks auf Page 2", value: "0.63%", icon: "chart" },
      { label: "Zero-Click Searches", value: "65%", icon: "search" }
    ],
    benefits: [
      "Strategische Keyword-Auswahl",
      "SERP-Features gezielt ansteuern",
      "Wettbewerbsanalyse durchführen",
      "Content-Strategie optimieren"
    ],
    relatedTerms: ["Organic Traffic", "Featured Snippet", "Local Pack", "Rich Snippets", "Zero-Click Search"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "google-maps-ranking-verbessern", title: "Google Maps Ranking verbessern" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "S",
    term: "Social Signals",
    shortDescription: "Interaktionen auf Social Media als SEO-Faktor.",
    fullDescription: "Social Signals sind Likes, Shares, Kommentare und andere Interaktionen auf Social-Media-Plattformen. Obwohl sie kein direkter Ranking-Faktor sind, können sie indirekt das SEO verbessern durch mehr Traffic, Backlinks und Markenbekanntheit.",
    features: [
      "Likes und Shares",
      "Kommentare und Erwähnungen",
      "Follower-Zahlen",
      "Engagement-Rate"
    ],
    statistics: [
      { label: "Direkter Ranking-Einfluss", value: "Gering", icon: "trending" },
      { label: "Indirekter Einfluss", value: "Hoch", icon: "chart" },
      { label: "Traffic-Potenzial", value: "Signifikant", icon: "users" }
    ],
    benefits: [
      "Mehr Website-Traffic",
      "Backlink-Potenzial erhöhen",
      "Markenbekanntheit steigern",
      "Content-Distribution"
    ],
    relatedTerms: ["Off-Page SEO", "Link Building", "E-E-A-T"],
    difficulty: "anfänger",
    importance: 2,
    relatedArticles: [
      { slug: "local-content-marketing", title: "Local Content Marketing" }
    ]
  },
  {
    letter: "S",
    term: "SSL-Zertifikat",
    shortDescription: "Verschlüsselungszertifikat für sichere HTTPS-Verbindungen.",
    fullDescription: "Ein SSL-Zertifikat (Secure Sockets Layer) ermöglicht die verschlüsselte Kommunikation zwischen Browser und Server (HTTPS). Es zeigt das Schloss-Symbol im Browser an und ist seit 2014 ein bestätigter Google Ranking-Faktor. Für lokale Unternehmen schafft es Vertrauen bei Kunden.",
    features: [
      "Verschlüsselte Datenübertragung",
      "Schloss-Symbol im Browser",
      "Verschiedene Zertifikatstypen",
      "Kostenlos via Let's Encrypt"
    ],
    statistics: [
      { label: "Top 100 Websites mit SSL", value: "95%", icon: "percent" },
      { label: "Google Chrome Warnung ohne", value: "Ja", icon: "chart" },
      { label: "Ranking-Boost", value: "Leicht", icon: "trending" }
    ],
    benefits: [
      "Pflicht für moderne Websites",
      "Nutzervertrauen steigern",
      "Ranking-Signal",
      "Datenschutz gewährleisten"
    ],
    relatedTerms: ["HTTPS", "Technical SEO", "E-E-A-T"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  // === T ===
  {
    letter: "T",
    term: "Technical SEO",
    shortDescription: "Technische Optimierung der Website-Infrastruktur.",
    fullDescription: "Technical SEO umfasst alle technischen Aspekte, die das Crawling, die Indexierung und das Rendering einer Website beeinflussen. Dazu gehören Seitengeschwindigkeit, Mobile-Freundlichkeit, strukturierte Daten, URL-Struktur und Servereinstellungen.",
    features: [
      "Crawling und Indexierung",
      "Core Web Vitals optimieren",
      "Schema Markup implementieren",
      "Sitemap und robots.txt"
    ],
    statistics: [
      { label: "Websites mit technischen Fehlern", value: "42%", icon: "percent" },
      { label: "Crawl-Probleme", value: "25%", icon: "chart" },
      { label: "PageSpeed unter 3s", value: "Nur 25%", icon: "clock" }
    ],
    benefits: [
      "Solide SEO-Grundlage",
      "Besseres Crawling",
      "Höhere Rankings",
      "Professioneller Auftritt"
    ],
    relatedTerms: ["Core Web Vitals", "Crawling", "Indexierung", "Schema Markup", "PageSpeed"],
    difficulty: "experte",
    importance: 5,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google: Technical SEO Guidelines",
      description: "Offizielle Dokumentation zu allen technischen SEO-Aspekten.",
      url: "https://developers.google.com/search/docs/crawling-indexing",
      source: "Google Search Central"
    }
  },
  {
    letter: "T",
    term: "Title Tag",
    shortDescription: "Der klickbare Seitentitel in den Suchergebnissen.",
    fullDescription: "Der Title Tag ist das HTML-Element, das den Seitentitel definiert und als klickbare Überschrift in den Suchergebnissen erscheint. Er ist einer der wichtigsten On-Page Ranking-Faktoren. Für Local SEO sollten Ortsnamen und primäre Keywords enthalten sein.",
    features: [
      "Max. 60 Zeichen optimal",
      "Primäres Keyword am Anfang",
      "Einzigartigkeit pro Seite",
      "Markenname am Ende"
    ],
    statistics: [
      { label: "Ranking-Einfluss", value: "Sehr hoch", icon: "trending" },
      { label: "Google überschreibt Title", value: "61%", icon: "percent" },
      { label: "CTR-Steigerung möglich", value: "+20%", icon: "chart" }
    ],
    benefits: [
      "Direkter Ranking-Faktor",
      "Kontrolle über Suchergebnis-Darstellung",
      "Höhere Klickraten erzielen",
      "Keywords prominent platzieren"
    ],
    relatedTerms: ["Meta-Tags", "Meta Description", "On-Page SEO", "CTR"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Moz: Title Tag Guide",
      description: "Umfassender Guide zur Optimierung von Title Tags für bessere Rankings.",
      url: "https://moz.com/learn/seo/title-tag",
      source: "Moz"
    }
  },
  // === U ===
  {
    letter: "U",
    term: "URL-Struktur",
    shortDescription: "Aufbau und Formatierung von Website-Adressen.",
    fullDescription: "Die URL-Struktur bezeichnet den Aufbau der Webadressen einer Website. SEO-freundliche URLs sind kurz, beschreibend, enthalten Keywords und folgen einer logischen Hierarchie. Für Local SEO können Ortsnamen in URLs integriert werden.",
    features: [
      "Kurz und beschreibend",
      "Keywords enthalten",
      "Logische Hierarchie",
      "Bindestrich statt Unterstrich"
    ],
    statistics: [
      { label: "Kurze URLs ranken besser", value: "+10%", icon: "trending" },
      { label: "Optimale URL-Länge", value: "50-60 Zeichen", icon: "chart" },
      { label: "Keywords in URL", value: "Wichtig", icon: "percent" }
    ],
    benefits: [
      "Bessere Klickraten",
      "Leicht merkbare URLs",
      "Keyword-Relevanz zeigen",
      "Klare Seitenstruktur"
    ],
    relatedTerms: ["On-Page SEO", "Technical SEO", "Canonical URL"],
    difficulty: "anfänger",
    importance: 3,
    relatedArticles: [
      { slug: "local-seo-fehler", title: "Die häufigsten Local SEO Fehler" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ]
  },
  {
    letter: "U",
    term: "User Experience (UX)",
    shortDescription: "Das Gesamterlebnis eines Nutzers auf der Website.",
    fullDescription: "User Experience beschreibt, wie Nutzer eine Website erleben - von der Ladezeit über Navigation bis zum Content. Google misst UX-Signale wie Verweildauer, Absprungrate und Core Web Vitals. Eine gute UX ist entscheidend für Rankings und Conversions.",
    features: [
      "Core Web Vitals (LCP, FID, CLS)",
      "Mobile Usability",
      "Intuitive Navigation",
      "Klare Call-to-Actions"
    ],
    statistics: [
      { label: "Page Experience Signal", value: "Bestätigt", icon: "trending" },
      { label: "Mobile Traffic Anteil", value: "60%+", icon: "percent" },
      { label: "Conversion bei guter UX", value: "+400%", icon: "chart" }
    ],
    benefits: [
      "Bessere Rankings erzielen",
      "Höhere Conversion-Rates",
      "Längere Verweildauer",
      "Mehr wiederkehrende Besucher"
    ],
    relatedTerms: ["Core Web Vitals", "Mobile First Index", "PageSpeed", "Bounce Rate", "Dwell Time"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "core-web-vitals-local-seo", title: "Core Web Vitals für Local SEO" },
      { slug: "mobile-local-seo", title: "Mobile Local SEO Optimierung" }
    ]
  },
  // === V ===
  {
    letter: "V",
    term: "Voice Search",
    shortDescription: "Sprachsuche über Siri, Google Assistant und Alexa.",
    fullDescription: "Voice Search ermöglicht die Suche per Sprachbefehl über Smartphones, Smart Speaker und andere Geräte. Sprachsuchen sind oft lokal ('Wo ist der nächste Bäcker?') und formuliert als Fragen. Die Optimierung erfordert natürliche Sprache und FAQ-Content.",
    features: [
      "Natürliche Sprache verwenden",
      "Long-Tail Keywords",
      "FAQ-Seiten erstellen",
      "Featured Snippets anzielen"
    ],
    statistics: [
      { label: "Lokale Voice Searches", value: "58%", icon: "percent" },
      { label: "Jährliches Wachstum", value: "+25%", icon: "trending" },
      { label: "Smart Speaker Haushalte DE", value: "35%", icon: "users" }
    ],
    benefits: [
      "Zukunftssicheres SEO",
      "Lokale Anfragen abfangen",
      "Featured Snippets gewinnen",
      "Natürlichen Content erstellen"
    ],
    relatedTerms: ["Featured Snippet", "Long-Tail Keywords", "Local SEO", "Search Intent"],
    difficulty: "fortgeschritten",
    importance: 3,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" }
    ],
    bestPracticeExample: {
      title: "Think with Google: Voice Search",
      description: "Googles Insights zu Voice Search Trends und Optimierungsstrategien.",
      url: "https://www.thinkwithgoogle.com/marketing-strategies/search/voice-search-mobile-use-statistics/",
      source: "Think with Google"
    }
  },
  // === W ===
  {
    letter: "W",
    term: "Webmaster Tools / Search Console",
    shortDescription: "Googles kostenlose Tools zur Website-Analyse.",
    fullDescription: "Google Search Console (früher Webmaster Tools) ist ein kostenloses Tool von Google zur Überwachung und Optimierung der Website-Präsenz in der Suche. Es zeigt Indexierungsstatus, Suchanfragen, Klickdaten, Core Web Vitals und technische Probleme an.",
    features: [
      "Indexierungsstatus überwachen",
      "Suchanfragen und Klicks analysieren",
      "Core Web Vitals prüfen",
      "Sitemaps einreichen"
    ],
    statistics: [
      { label: "Unverzichtbar für SEO", value: "100%", icon: "percent" },
      { label: "Daten bis zu 16 Monate", value: "Ja", icon: "chart" },
      { label: "Kosten", value: "Kostenlos", icon: "trending" }
    ],
    benefits: [
      "Unverzichtbares SEO-Tool",
      "Direkte Google-Daten",
      "Technische Probleme erkennen",
      "Performance überwachen"
    ],
    relatedTerms: ["Indexierung", "Core Web Vitals", "Technical SEO", "Crawling"],
    difficulty: "anfänger",
    importance: 5,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google Search Console Hilfe",
      description: "Offizielle Dokumentation und Tutorials zur Google Search Console.",
      url: "https://support.google.com/webmasters/answer/9128668?hl=de",
      source: "Google Support"
    }
  },
  {
    letter: "W",
    term: "White Hat SEO",
    shortDescription: "Ethische SEO-Methoden gemäß Google-Richtlinien.",
    fullDescription: "White Hat SEO bezeichnet Optimierungsstrategien, die Googles Richtlinien entsprechen und auf langfristigen, nachhaltigen Erfolg ausgerichtet sind. Im Gegensatz zu Black Hat SEO (manipulative Taktiken) setzt White Hat auf Qualitätsinhalte, natürlichen Linkaufbau und technische Exzellenz.",
    features: [
      "Qualitätscontent erstellen",
      "Natürlicher Linkaufbau",
      "Technische Optimierung",
      "User Experience priorisieren"
    ],
    statistics: [
      { label: "Abstrafungsrisiko", value: "0%", icon: "percent" },
      { label: "Langfristiger ROI", value: "Hoch", icon: "trending" },
      { label: "Google-Empfehlung", value: "Ja", icon: "chart" }
    ],
    benefits: [
      "Nachhaltige Rankings",
      "Kein Abstrafungsrisiko",
      "Langfristiger ROI",
      "Vertrauensaufbau"
    ],
    relatedTerms: ["Black Hat SEO", "Algorithmus-Update", "E-E-A-T", "Quality Raters"],
    difficulty: "anfänger",
    importance: 5
  },
  // === X ===
  {
    letter: "X",
    term: "XML-Sitemap",
    shortDescription: "Maschinenlesbare Übersicht aller Website-Seiten.",
    fullDescription: "Eine XML-Sitemap ist eine Datei, die alle wichtigen URLs einer Website auflistet und Suchmaschinen bei der Indexierung hilft. Sie enthält Informationen über Aktualisierungsdatum und Priorität jeder Seite. Die Einreichung erfolgt über die Google Search Console.",
    features: [
      "In Search Console einreichen",
      "Automatische Generierung möglich",
      "Max. 50.000 URLs pro Sitemap",
      "Lastmod-Datum angeben"
    ],
    statistics: [
      { label: "Indexierungsverbesserung", value: "+3x", icon: "trending" },
      { label: "Große Websites benötigen", value: "Pflicht", icon: "chart" },
      { label: "Neue Seiten entdeckt", value: "Schneller", icon: "clock" }
    ],
    benefits: [
      "Schnellere Indexierung",
      "Alle Seiten werden gefunden",
      "Kontrolle über Crawling-Priorität",
      "Technische SEO-Grundlage"
    ],
    relatedTerms: ["Indexierung", "Crawling", "Webmaster Tools / Search Console", "Technical SEO"],
    difficulty: "anfänger",
    importance: 4,
    relatedArticles: [
      { slug: "kostenloses-seo-guide", title: "Kostenloses SEO Guide" },
      { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste" }
    ],
    bestPracticeExample: {
      title: "Google: Sitemap erstellen",
      description: "Offizielle Anleitung zur Erstellung und Einreichung von Sitemaps.",
      url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
      source: "Google Search Central"
    }
  },
  // === Y ===
  {
    letter: "Y",
    term: "YMYL",
    shortDescription: "Your Money Your Life - Inhalte mit hohem Qualitätsanspruch.",
    fullDescription: "YMYL (Your Money Your Life) bezeichnet Inhalte, die Gesundheit, Finanzen, Sicherheit oder wichtige Lebensentscheidungen betreffen. Google bewertet solche Seiten besonders streng nach E-E-A-T-Kriterien. Lokale Dienstleister wie Ärzte, Anwälte oder Finanzberater müssen besonders auf Expertise achten.",
    features: [
      "Gesundheitsthemen",
      "Finanzielle Beratung",
      "Rechtliche Informationen",
      "Sicherheitsrelevante Themen"
    ],
    statistics: [
      { label: "E-E-A-T Bedeutung", value: "Kritisch", icon: "trending" },
      { label: "Ranking-Volatilität", value: "Hoch", icon: "chart" },
      { label: "Qualitätsstandard", value: "Höchster", icon: "percent" }
    ],
    benefits: [
      "Hohes Ranking-Potenzial bei Expertise",
      "Vertrauensaufbau bei Kunden",
      "Schutz vor Algorithmus-Updates",
      "Wettbewerbsvorteil durch Qualität"
    ],
    relatedTerms: ["E-E-A-T", "Quality Raters", "Algorithmus-Update", "White Hat SEO"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "local-seo-aerzte-praxen", title: "Local SEO für Ärzte" },
      { slug: "local-seo-anwaelte-kanzleien", title: "Local SEO für Anwälte" },
      { slug: "local-seo-steuerberater", title: "Local SEO für Steuerberater" }
    ]
  },
  // === Z ===
  {
    letter: "Z",
    term: "Zero-Click Search",
    shortDescription: "Suchanfragen, die ohne Klick auf ein Ergebnis beantwortet werden.",
    fullDescription: "Zero-Click Searches sind Suchanfragen, bei denen Nutzer die Antwort direkt in den Suchergebnissen finden und nicht auf eine Website klicken. Featured Snippets, Knowledge Panels und Google Business Profile zeigen Informationen direkt an. Für lokale Unternehmen ist ein optimiertes GBP daher essenziell.",
    features: [
      "Antwort direkt in SERP",
      "Knowledge Panel",
      "Featured Snippets",
      "Local Pack Informationen"
    ],
    statistics: [
      { label: "Aller Suchanfragen", value: "65%", icon: "percent" },
      { label: "Mobile Anteil höher", value: "+20%", icon: "trending" },
      { label: "Tendenz", value: "Steigend", icon: "chart" }
    ],
    benefits: [
      "Markenbekanntheit steigern",
      "GBP-Optimierung wichtiger",
      "Direkte Kundeninteraktion",
      "Anpassung der SEO-Strategie"
    ],
    relatedTerms: ["SERP", "Featured Snippet", "Google Business Profile", "Knowledge Panel"],
    difficulty: "fortgeschritten",
    importance: 4,
    relatedArticles: [
      { slug: "lokale-seo-2026", title: "Lokale SEO Trends 2026" },
      { slug: "google-my-business-optimieren", title: "Google Business Profile optimieren" }
    ]
  }
];

// Utility functions
export const getAllLetters = (): string[] => {
  const letters = [...new Set(seoLexikonData.map(term => term.letter))];
  return letters.sort();
};

export const getTermsByLetter = (letter: string): SEOTerm[] => {
  return seoLexikonData.filter(term => term.letter.toLowerCase() === letter.toLowerCase());
};

export const getTermByLetter = (letter: string): SEOTerm | undefined => {
  return seoLexikonData.find(term => term.letter.toLowerCase() === letter.toLowerCase());
};

export const getTermByName = (termName: string): SEOTerm | undefined => {
  return seoLexikonData.find(term => term.term.toLowerCase() === termName.toLowerCase());
};

export const searchTerms = (query: string): SEOTerm[] => {
  const lowerQuery = query.toLowerCase();
  return seoLexikonData.filter(
    term =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.shortDescription.toLowerCase().includes(lowerQuery) ||
      term.fullDescription.toLowerCase().includes(lowerQuery)
  );
};

export const getTotalTermsCount = (): number => {
  return seoLexikonData.length;
};

export const getTermsCountByLetter = (letter: string): number => {
  return seoLexikonData.filter(term => term.letter === letter).length;
};

// Helper to generate slug for anchor links
export const getTermSlug = (term: string): string => {
  return term
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9-]/g, '');
};

// Get all terms that reference a specific term
export const getBacklinksToTerm = (termName: string): SEOTerm[] => {
  return seoLexikonData.filter(term => 
    term.relatedTerms.some(related => related.toLowerCase() === termName.toLowerCase())
  );
};
