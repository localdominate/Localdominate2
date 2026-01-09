export interface SEOTerm {
  letter: string;
  term: string;
  shortDescription: string;
  fullDescription: string;
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
}

export const seoLexikonData: SEOTerm[] = [
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
    relatedTerms: ["Bild-SEO", "On-Page SEO", "Barrierefreiheit"],
    difficulty: "anfänger",
    importance: 3
  },
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
    relatedTerms: ["Link Building", "Domain Authority", "Anchor Text"],
    difficulty: "fortgeschritten",
    importance: 5
  },
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
    relatedTerms: ["NAP", "Branchenverzeichnis", "Google Business Profile"],
    difficulty: "anfänger",
    importance: 4
  },
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
    relatedTerms: ["Backlinks", "Page Authority", "Trust Flow"],
    difficulty: "fortgeschritten",
    importance: 3
  },
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
    relatedTerms: ["YMYL", "Quality Raters", "Content Quality"],
    difficulty: "fortgeschritten",
    importance: 5
  },
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
    relatedTerms: ["SERP", "Voice Search", "Zero-Click Search"],
    difficulty: "fortgeschritten",
    importance: 3
  },
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
    relatedTerms: ["Local Pack", "NAP", "Google Maps"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["SSL-Zertifikat", "Website-Sicherheit", "Core Web Vitals"],
    difficulty: "anfänger",
    importance: 4
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
    relatedTerms: ["Crawling", "Sitemap", "Robots.txt"],
    difficulty: "anfänger",
    importance: 5
  },
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
    relatedTerms: ["Schema Markup", "Rich Snippets", "Strukturierte Daten"],
    difficulty: "fortgeschritten",
    importance: 4
  },
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
    relatedTerms: ["Keyword-Recherche", "Suchintention", "Long-Tail Keywords"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["Google Business Profile", "Local SEO", "Google Maps"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["Title-Tag", "On-Page SEO", "SERP"],
    difficulty: "anfänger",
    importance: 4
  },
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
    relatedTerms: ["Citations", "Branchenverzeichnis", "Local SEO"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["Off-Page SEO", "Technical SEO", "Content SEO"],
    difficulty: "anfänger",
    importance: 5
  },
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
    relatedTerms: ["Core Web Vitals", "Mobile First", "Technical SEO"],
    difficulty: "fortgeschritten",
    importance: 4
  },
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
    relatedTerms: ["E-E-A-T", "YMYL", "Algorithmus-Update"],
    difficulty: "experte",
    importance: 2
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
    relatedTerms: ["Reputation Management", "Google Business Profile", "Social Proof"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["Organische Suche", "Featured Snippet", "Local Pack"],
    difficulty: "anfänger",
    importance: 4
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
    relatedTerms: ["Meta-Tags", "On-Page SEO", "CTR"],
    difficulty: "anfänger",
    importance: 5
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
    relatedTerms: ["Core Web Vitals", "Mobile First", "PageSpeed"],
    difficulty: "fortgeschritten",
    importance: 4
  },
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
    relatedTerms: ["Featured Snippet", "Long-Tail Keywords", "Local SEO"],
    difficulty: "fortgeschritten",
    importance: 3
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
    relatedTerms: ["Black Hat SEO", "Google-Richtlinien", "Algorithmus-Update"],
    difficulty: "anfänger",
    importance: 5
  },
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
    relatedTerms: ["Indexierung", "Crawling", "Google Search Console"],
    difficulty: "anfänger",
    importance: 4
  },
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
    relatedTerms: ["E-E-A-T", "Quality Raters", "Content Quality"],
    difficulty: "fortgeschritten",
    importance: 4
  },
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
    relatedTerms: ["SERP", "Featured Snippet", "Google Business Profile"],
    difficulty: "fortgeschritten",
    importance: 4
  }
];

export const getAllLetters = () => {
  return seoLexikonData.map(term => term.letter);
};

export const getTermByLetter = (letter: string) => {
  return seoLexikonData.find(term => term.letter.toLowerCase() === letter.toLowerCase());
};

export const searchTerms = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return seoLexikonData.filter(
    term =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.shortDescription.toLowerCase().includes(lowerQuery) ||
      term.fullDescription.toLowerCase().includes(lowerQuery)
  );
};
