/**
 * LLM-friendly page summaries designed for AI crawler extraction.
 * Each entry provides a structured, machine-readable summary of a long page.
 */

export interface LlmPageSummary {
  /** One-line page purpose */
  pageType: string;
  /** 2-3 sentence summary for AI extraction */
  summary: string;
  /** Key facts as bullet points (AI-extractable) */
  keyFacts: string[];
  /** Who this content is for */
  targetAudience: string;
  /** Related topics for entity linking */
  relatedTopics: string[];
  /** Primary question this page answers */
  primaryQuestion: string;
  /** Direct answer to the primary question (40-60 words, speakable) */
  directAnswer: string;
}

export const llmPageSummaries: Record<string, LlmPageSummary> = {
  // === PILLAR PAGES ===
  "ultimate-guide-local-seo": {
    pageType: "Comprehensive Guide (Pillar)",
    summary: "Der ultimative Guide zu Local SEO für Unternehmen im DACH-Raum. Behandelt Google Business Profil Optimierung, lokale Keywords, NAP-Konsistenz, Bewertungsmanagement, Schema Markup und Content-Strategie — mit über 50 umsetzbaren Taktiken.",
    keyFacts: [
      "46% aller Google-Suchen haben lokale Intention",
      "Google Business Profil ist der #1 Ranking-Faktor für das Local Pack",
      "NAP-Konsistenz (Name, Adresse, Telefon) beeinflusst 16% der lokalen Rankings",
      "Unternehmen mit 100+ Bewertungen erhalten 3x mehr Klicks",
      "Schema Markup erhöht die Click-Through-Rate um bis zu 30%",
      "Local SEO ist ein fortlaufender Prozess, kein einmaliges Projekt",
    ],
    targetAudience: "Lokale Unternehmen, KMU, Marketingverantwortliche und SEO-Einsteiger im deutschsprachigen Raum",
    relatedTopics: ["Google Business Profil", "Local Pack", "NAP-Konsistenz", "Lokale Keywords", "Schema Markup", "Bewertungsmanagement"],
    primaryQuestion: "Was ist Local SEO und wie optimiere ich mein Unternehmen für die lokale Suche?",
    directAnswer: "Local SEO ist die Optimierung eines Unternehmens für standortbezogene Suchanfragen. Die drei wichtigsten Schritte sind: Google Business Profil vollständig ausfüllen und regelmäßig pflegen, NAP-Daten (Name, Adresse, Telefon) über alle Online-Verzeichnisse konsistent halten, und aktiv Kundenbewertungen sammeln und beantworten.",
  },
  "lokale-suchmaschinenoptimierung-2026": {
    pageType: "Trend Analysis (Pillar)",
    summary: "Aktuelle Local SEO Trends und Strategien für 2026, mit Fokus auf AI Overviews, Zero-Click-Ergebnisse, Voice Search und die Verschmelzung von klassischer und KI-gestützter Suche.",
    keyFacts: [
      "AI Overviews erscheinen bei 40%+ der lokalen Suchanfragen (2026)",
      "Zero-Click-Suchen machen über 65% aller Google-Suchen aus",
      "Voice Search wächst jährlich um 20% bei lokalen Anfragen",
      "E-E-A-T-Signale werden zum entscheidenden Ranking-Faktor",
      "Strukturierte Daten sind Voraussetzung für AI-Sichtbarkeit",
    ],
    targetAudience: "SEO-Profis und Marketingverantwortliche, die ihre Local-SEO-Strategie zukunftssicher machen wollen",
    relatedTopics: ["AI Overviews", "Zero-Click Search", "Voice Search", "E-E-A-T", "Structured Data"],
    primaryQuestion: "Was ändert sich bei Local SEO im Jahr 2026?",
    directAnswer: "Local SEO 2026 wird dominiert von AI Overviews, die bei über 40% der lokalen Suchen erscheinen. Unternehmen müssen für KI-Extraktion optimieren — mit strukturierten Daten, E-E-A-T-Signalen und Content, der direkte Fragen beantwortet. Voice Search und Zero-Click-Ergebnisse machen traditionelle Rankings weniger relevant.",
  },
  "technisches-local-seo-guide": {
    pageType: "Technical Reference (Pillar)",
    summary: "Technischer Leitfaden für Local SEO: Schema Markup Implementierung, Core Web Vitals Optimierung, Mobile-First Indexierung und strukturierte Daten für lokale Unternehmen.",
    keyFacts: [
      "LocalBusiness Schema ist die technische Basis für Rich Snippets",
      "Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1",
      "Mobile Traffic macht 70%+ der lokalen Suchen aus",
      "JSON-LD ist das bevorzugte Format für Schema Markup",
      "Speakable Schema verbessert die Voice Search Sichtbarkeit",
    ],
    targetAudience: "Webentwickler, technische SEOs und Agenturen, die Local SEO implementieren",
    relatedTopics: ["Schema Markup", "Core Web Vitals", "JSON-LD", "Mobile Optimization", "Speakable", "LocalBusiness Schema"],
    primaryQuestion: "Welche technischen Grundlagen brauche ich für Local SEO?",
    directAnswer: "Technisches Local SEO erfordert drei Kernelemente: LocalBusiness Schema Markup als JSON-LD im Head-Bereich, optimierte Core Web Vitals (LCP unter 2.5 Sekunden), und eine mobile-first optimierte Website. Zusätzlich verbessern FAQPage Schema und speakable-Properties die Sichtbarkeit in AI Overviews und Voice Search.",
  },
  "local-seo-ranking-faktoren-erklaert": {
    pageType: "Data Analysis (Pillar)",
    summary: "Detaillierte Aufschlüsselung aller Local SEO Ranking-Faktoren mit gewichteten Prozentwerten, basierend auf aktuellen Studien und Branchendaten.",
    keyFacts: [
      "Google Business Profil Signale: 32% Gewichtung",
      "On-Page Signale: 19% Gewichtung",
      "Bewertungssignale: 16% Gewichtung",
      "Link-Signale: 11% Gewichtung",
      "Verhaltens-Signale: 8% Gewichtung",
      "Citation-Signale: 7% Gewichtung",
    ],
    targetAudience: "SEO-Strategen und Marketingverantwortliche, die ihre Optimierung priorisieren wollen",
    relatedTopics: ["Ranking-Faktoren", "Google Business Profil", "On-Page SEO", "Bewertungen", "Backlinks", "Citations"],
    primaryQuestion: "Was sind die wichtigsten Local SEO Ranking-Faktoren?",
    directAnswer: "Die fünf wichtigsten Local SEO Ranking-Faktoren sind: Google Business Profil Signale (32%), On-Page Signale wie lokale Keywords (19%), Bewertungssignale wie Anzahl und Qualität (16%), Link-Signale von lokalen Quellen (11%) und Verhaltens-Signale wie Click-Through-Rate (8%).",
  },
  "ai-suche-lokale-unternehmen": {
    pageType: "Strategy Guide (Pillar)",
    summary: "Vollständiger Guide zur Optimierung lokaler Unternehmen für AI-gestützte Suchsysteme: Google AI Overviews, ChatGPT, Perplexity und Voice Search.",
    keyFacts: [
      "AI Overviews zitieren bevorzugt Inhalte mit strukturierten Daten",
      "ChatGPT und Perplexity nutzen Backlinks als Autoritätssignal",
      "llms.txt und ai.txt verbessern die AI-Crawler-Zugänglichkeit",
      "E-E-A-T ist der wichtigste Faktor für AI-Zitierungen",
      "Lokale Unternehmen mit vollständigem Schema werden 2x häufiger in AI-Antworten erwähnt",
    ],
    targetAudience: "Lokale Unternehmen und Agenturen, die ihre AI-Sichtbarkeit systematisch aufbauen wollen",
    relatedTopics: ["AI Overviews", "ChatGPT", "Perplexity", "LLM Optimization", "Voice Search", "Structured Data"],
    primaryQuestion: "Wie optimiere ich mein Unternehmen für AI-Suche?",
    directAnswer: "AI-Suche-Optimierung für lokale Unternehmen basiert auf drei Säulen: strukturierte Daten (LocalBusiness Schema, FAQPage Schema), E-E-A-T-Signale (Autorenschaft, Bewertungen, Quellenangaben), und AI-Crawler-Zugänglichkeit (llms.txt, robots.txt für GPTBot). Content muss in eigenständigen, zitierfähigen Absätzen strukturiert sein.",
  },
  "local-seo-checkliste-komplett": {
    pageType: "Interactive Checklist (Pillar)",
    summary: "Interaktive Local SEO Checkliste mit über 80 Prüfpunkten in den Bereichen Google Business Profil, On-Page SEO, technisches SEO, Bewertungen, Citations und Content.",
    keyFacts: [
      "80+ Prüfpunkte in 8 Hauptkategorien",
      "Prioritätsstufen: Kritisch, Hoch, Mittel für effiziente Priorisierung",
      "Interaktiv mit localStorage-basierter Fortschrittsspeicherung",
      "Kopierbare Vorlage für Kunden-Audits und Projektmanagement",
      "Durchschnittliche Ersteinrichtung: 2-5 Tage für ein KMU",
    ],
    targetAudience: "SEO-Einsteiger, KMU-Inhaber und Agenturen für Client-Audits",
    relatedTopics: ["Local SEO Audit", "Google Business Profil", "NAP-Konsistenz", "Schema Markup", "Content-Strategie"],
    primaryQuestion: "Was muss ich bei Local SEO alles beachten?",
    directAnswer: "Eine vollständige Local SEO Checkliste umfasst über 80 Punkte: Google Business Profil optimieren (Fotos, Posts, Attribute), On-Page SEO (lokale Keywords, Title Tags, Meta Descriptions), technisches SEO (Schema Markup, Core Web Vitals, Mobile), Bewertungsmanagement, NAP-Konsistenz in Verzeichnissen und lokale Content-Erstellung.",
  },
  "kostenloses-seo-guide": {
    pageType: "Resource Guide (Pillar)",
    summary: "Umfassender Guide für SEO ohne Budget: 50+ kostenlose Tools, Strategien und Schritt-für-Schritt-Anleitungen für lokale Unternehmen mit begrenzten Ressourcen.",
    keyFacts: [
      "Google Business Profil ist kostenlos und der wichtigste Local-SEO-Hebel",
      "Google Search Console liefert kostenlose Keyword-Insights",
      "30-Minuten-Wochenroutine reicht für grundlegende SEO-Pflege",
      "Kostenlose Tools: Google Lighthouse, PageSpeed Insights, Schema Markup Generator",
      "Bewertungsmanagement kostet kein Geld, nur Zeit und Konsequenz",
    ],
    targetAudience: "KMU-Inhaber und Solo-Selbstständige ohne SEO-Budget",
    relatedTopics: ["Kostenloses SEO", "Google Business Profil", "Google Search Console", "Kostenlose SEO-Tools", "DIY SEO"],
    primaryQuestion: "Wie kann ich kostenlos SEO machen?",
    directAnswer: "Kostenloses SEO beginnt mit drei Schritten: Google Business Profil vollständig einrichten und wöchentlich pflegen, Google Search Console aktivieren für Keyword-Daten und technische Fehler, und systematisch Kundenbewertungen sammeln. Diese drei Maßnahmen decken die wichtigsten Ranking-Faktoren ab — komplett ohne Budget.",
  },
  "local-seo-statistiken-daten": {
    pageType: "Data Collection (Pillar)",
    summary: "Umfassendste deutschsprachige Sammlung von Local SEO Statistiken und Daten mit quellenverifizierten Kennzahlen zu Suchverhalten, Conversion-Raten und Branchentrends.",
    keyFacts: [
      "46% aller Google-Suchen haben lokale Intention",
      "88% der mobilen lokalen Suchen führen innerhalb von 24h zu einem Besuch",
      "76% der lokalen Suchen führen zu einem Anruf am selben Tag",
      "Unternehmen mit 4.0+ Sternen erhalten 70% mehr Klicks",
      "Local Pack Ergebnisse erhalten 44% aller Klicks bei lokalen Suchen",
    ],
    targetAudience: "SEO-Profis, Agenturen und Marketingverantwortliche, die datenbasiert argumentieren müssen",
    relatedTopics: ["Local SEO Daten", "Suchverhalten", "Conversion-Raten", "Mobile Suche", "Google Maps Statistiken"],
    primaryQuestion: "Welche Local SEO Statistiken sollte man kennen?",
    directAnswer: "Die wichtigsten Local SEO Statistiken: 46% aller Google-Suchen sind lokal, 88% der mobilen lokalen Sucher besuchen ein Geschäft innerhalb von 24 Stunden, 76% rufen noch am selben Tag an. Unternehmen mit 4.0+ Sternen erhalten 70% mehr Klicks als solche mit niedrigerer Bewertung.",
  },
  // === KEY CLUSTER ARTICLES ===
  "google-ai-overviews-local-seo": {
    pageType: "Strategy Guide (Cluster)",
    summary: "Praxisguide zur Optimierung für Google AI Overviews im lokalen Kontext. Erklärt, wie AI-generierte Antworten funktionieren und wie lokale Unternehmen darin erscheinen.",
    keyFacts: [
      "AI Overviews erscheinen über den organischen Ergebnissen",
      "Strukturierte Daten erhöhen die Zitierwahrscheinlichkeit um 50%+",
      "Direkte Antworten in den ersten 100 Wörtern werden bevorzugt extrahiert",
      "FAQ-Schema ist das effektivste Schema für AI Overviews",
    ],
    targetAudience: "Lokale Unternehmen und SEOs, die in AI-generierten Suchergebnissen sichtbar werden wollen",
    relatedTopics: ["AI Overviews", "Featured Snippets", "Schema Markup", "E-E-A-T", "Content-Struktur"],
    primaryQuestion: "Wie werde ich in Google AI Overviews angezeigt?",
    directAnswer: "Um in Google AI Overviews zu erscheinen, muss dein Content drei Kriterien erfüllen: direkte Antworten auf Suchfragen in den ersten 100 Wörtern, vollständiges Schema Markup (LocalBusiness + FAQPage), und starke E-E-A-T-Signale wie Autorenschaft, Quellenangaben und regelmäßige Content-Updates.",
  },
  "schema-markup-local-seo": {
    pageType: "Technical Implementation Guide",
    summary: "Vollständiger Implementierungsguide für Schema Markup im Local SEO: JSON-LD Templates, Validierung, Best Practices und kopierbare Code-Beispiele für alle relevanten Schema-Typen.",
    keyFacts: [
      "JSON-LD ist Googles bevorzugtes Format für Schema Markup",
      "LocalBusiness, FAQPage und AggregateRating sind die drei wichtigsten Schemas",
      "Schema-Fehler können Rich Snippets verhindern — regelmäßige Validierung nötig",
      "Speakable Schema verbessert Voice Search Ergebnisse",
    ],
    targetAudience: "Webentwickler und technische SEOs, die Schema Markup implementieren",
    relatedTopics: ["JSON-LD", "LocalBusiness Schema", "FAQPage Schema", "Rich Snippets", "Speakable", "Schema Validation"],
    primaryQuestion: "Wie implementiere ich Schema Markup für Local SEO?",
    directAnswer: "Schema Markup für Local SEO wird als JSON-LD im HTML-Head implementiert. Die drei wichtigsten Typen sind LocalBusiness (Geschäftsdaten), FAQPage (häufige Fragen) und AggregateRating (Bewertungen). Nutze den Google Rich Results Test zur Validierung und aktualisiere die Daten regelmäßig.",
  },
  "local-seo-voice-search": {
    pageType: "Optimization Guide (Cluster)",
    summary: "Guide zur Voice Search Optimierung für lokale Unternehmen. Erklärt, wie Sprachsuche funktioniert und welche Content-Strategien für Alexa, Google Assistant und Siri optimieren.",
    keyFacts: [
      "Voice Search Anfragen sind 3-5x länger als getippte Suchen",
      "70% der Voice Search Antworten kommen aus Featured Snippets",
      "Ideale Voice-Antwort: 29-42 Wörter, natürliche Sprache",
      "FAQ-Seiten sind die beste Content-Form für Voice Search",
    ],
    targetAudience: "Lokale Unternehmen, die über Sprachsuche gefunden werden wollen",
    relatedTopics: ["Voice Search", "Sprachassistenten", "FAQ-Seiten", "Speakable Schema", "Conversational Search"],
    primaryQuestion: "Wie optimiere ich meine Website für Voice Search?",
    directAnswer: "Voice Search Optimierung erfordert: FAQ-Seiten mit natürlichen Frage-Antwort-Paaren, direkte Antworten in 29-42 Wörtern, Speakable Schema Markup auf den wichtigsten Absätzen, und lokale Long-Tail-Keywords in Frageform wie 'Welcher Zahnarzt in München hat samstags auf?'.",
  },
  "website-content-ai-suchmaschinen": {
    pageType: "Strategy Guide (Cluster)",
    summary: "Anleitung zur Content-Optimierung für AI-Suchmaschinen. Zeigt, wie Website-Inhalte strukturiert werden müssen, damit ChatGPT, Perplexity und Google AI sie korrekt zitieren.",
    keyFacts: [
      "AI-Systeme extrahieren bevorzugt eigenständige 2-3-Satz-Absätze",
      "Definitionen im ersten Absatz erhöhen die Zitierwahrscheinlichkeit",
      "data-ai-summary Attribute helfen AI-Crawlern bei der Extraktion",
      "Regelmäßige Content-Updates signalisieren Aktualität und Relevanz",
    ],
    targetAudience: "Content-Ersteller und Marketingverantwortliche, die AI-sichtbaren Content produzieren wollen",
    relatedTopics: ["AI Content Optimization", "Content-Struktur", "LLM-Zitierbarkeit", "Generative Engine Optimization"],
    primaryQuestion: "Wie optimiere ich Website-Content für AI-Suchmaschinen?",
    directAnswer: "AI-optimierter Content braucht klare Definitionen im ersten Absatz, eigenständige Absätze mit 2-3 Sätzen, die ohne Kontext verständlich sind, strukturierte Daten via Schema Markup, und regelmäßige Aktualisierungen mit sichtbarem dateModified. Quantifizierte Aussagen mit Quellenangaben werden bevorzugt zitiert.",
  },
  "entity-seo-guide": {
    pageType: "Advanced Guide (Cluster)",
    summary: "Fortgeschrittener Guide zu Entity SEO: Wie Unternehmen ihre digitale Identität im Knowledge Graph aufbauen und als erkennbare Entität für AI-Systeme optimieren.",
    keyFacts: [
      "Entity SEO optimiert Beziehungen zwischen Entitäten statt einzelner Keywords",
      "sameAs-Property im Schema verknüpft alle offiziellen Profile",
      "Knowledge Panel erscheint bei starker Entity-Erkennung durch Google",
      "NAP-Konsistenz ist die Grundlage für Entity-Erkennung",
    ],
    targetAudience: "Fortgeschrittene SEOs und Agenturen, die Entity-basierte Strategien implementieren",
    relatedTopics: ["Knowledge Graph", "Entity Recognition", "sameAs Schema", "Brand Identity", "Topical Authority"],
    primaryQuestion: "Was ist Entity SEO und warum ist es wichtig?",
    directAnswer: "Entity SEO ist die Optimierung der digitalen Identität eines Unternehmens als erkennbare Entität in Googles Knowledge Graph. Statt einzelner Keywords werden Beziehungen zwischen Entitäten optimiert — über konsistente NAP-Daten, sameAs-Schema-Links und systematischen Aufbau von Brand-Signalen auf autoritativen Plattformen.",
  },
  "semantic-seo-topical-authority": {
    pageType: "Advanced Guide (Cluster)",
    summary: "Guide zum Aufbau von Topical Authority durch semantisches SEO: Pillar-Cluster-Modell, interne Verlinkung und systematische Themenabdeckung für AI-Erkennung.",
    keyFacts: [
      "Topical Authority entsteht durch vollständige Themenabdeckung",
      "Pillar-Cluster-Modell: 1 Hauptseite + 5-10 Vertiefungsartikel",
      "Interne Verlinkung signalisiert thematische Zusammenhänge",
      "AI-Systeme erkennen Topic Clusters als Expertensignal",
    ],
    targetAudience: "Content-Strategen und SEOs, die systematisch Themenautorität aufbauen wollen",
    relatedTopics: ["Topical Authority", "Content Clusters", "Pillar Pages", "Internal Linking", "Semantic SEO"],
    primaryQuestion: "Wie baue ich Topical Authority auf?",
    directAnswer: "Topical Authority wird durch das Pillar-Cluster-Modell aufgebaut: Eine umfassende Pillar Page als Hauptseite, ergänzt durch 5-10 Cluster-Artikel zu Unterthemen, verbunden durch strategische interne Verlinkung. Regelmäßige Content-Updates und die systematische Schließung von Themenlücken stärken die Autorität über Zeit.",
  },
  "ai-search-vs-traditional-search": {
    pageType: "Comparison Guide (Cluster)",
    summary: "Vergleich zwischen AI-Suche und traditioneller Google-Suche. Erklärt die Unterschiede in Funktionsweise, Optimierung und Strategie für lokale Unternehmen.",
    keyFacts: [
      "AI-Suche synthetisiert Antworten aus mehreren Quellen",
      "Traditionelle Suche zeigt 10 blaue Links als Ergebnisse",
      "AI Overviews verschmelzen beide Ansätze zunehmend",
      "Dual-Optimierung für beide Kanäle ist die optimale Strategie",
    ],
    targetAudience: "Marketingverantwortliche und SEOs, die beide Suchkanäle verstehen und bedienen wollen",
    relatedTopics: ["AI Search", "Traditional SEO", "Google AI Overviews", "ChatGPT", "Perplexity", "Dual Optimization"],
    primaryQuestion: "Was ist der Unterschied zwischen AI-Suche und klassischer Google-Suche?",
    directAnswer: "AI-Suche (ChatGPT, Perplexity) generiert synthetisierte Antworten aus mehreren Quellen, während Google traditionell 10 blaue Links zeigt. Mit AI Overviews verschmelzen beide Ansätze. Optimale Sichtbarkeit erfordert Dual-Optimierung: klassisches SEO als Basis plus AI-spezifische Maßnahmen wie llms.txt und speakable Schema.",
  },
  "ai-visibility-checklist": {
    pageType: "Interactive Tool (Cluster)",
    summary: "Interaktive AI-Sichtbarkeits-Checkliste mit 57+ Prüfpunkten in 8 Bereichen. Bewertet die AI-Readiness einer Website mit Scoring-System und kopierbarer Audit-Vorlage.",
    keyFacts: [
      "57+ Prüfpunkte in 8 Bereichen für AI-Sichtbarkeit",
      "AI-Impact-Score zeigt den Effekt jeder Maßnahme",
      "Kritische Punkte: Schema Markup, Content-Struktur, AI-Crawler-Zugang",
      "Fortschrittsspeicherung via localStorage",
    ],
    targetAudience: "SEOs, Agenturen und Website-Betreiber, die ihre AI-Sichtbarkeit systematisch prüfen wollen",
    relatedTopics: ["AI Visibility", "Schema Markup", "Voice Search", "LLM Optimization", "AI Overviews", "E-E-A-T"],
    primaryQuestion: "Wie prüfe ich, ob meine Website für AI-Suche optimiert ist?",
    directAnswer: "Die AI Visibility Checklist prüft 57+ Punkte in 8 Bereichen: strukturierte Daten, Content-Struktur, E-E-A-T-Signale, Voice Search, AI-Crawler-Zugänglichkeit, LLM-Optimierung, Google AI Overviews und Monitoring. Die kritischsten Punkte sind Schema Markup, robots.txt für AI-Bots und eigenständige Content-Absätze.",
  },
  "google-business-profil-optimieren": {
    pageType: "Step-by-Step Guide (Cluster)",
    summary: "Vollständige Anleitung zur Optimierung des Google Business Profils in 10 Schritten. Deckt alle Bereiche von Grunddaten über Fotos bis zu Posts und Bewertungsmanagement ab.",
    keyFacts: [
      "GBP ist der #1 Ranking-Faktor für das Local Pack (32%)",
      "Vollständig ausgefüllte Profile erhalten 7x mehr Klicks",
      "Mindestens 2 Google Posts pro Monat empfohlen",
      "Geo-getaggte Fotos verbessern die lokale Sichtbarkeit",
    ],
    targetAudience: "Lokale Unternehmen und KMU, die ihr Google Business Profil optimieren wollen",
    relatedTopics: ["Google Business Profil", "Local Pack", "Google Maps", "GBP Posts", "Bewertungen"],
    primaryQuestion: "Wie optimiere ich mein Google Business Profil?",
    directAnswer: "Google Business Profil optimieren in 10 Schritten: Korrekte Kategorie wählen, vollständige NAP-Daten eintragen, Beschreibung mit lokalen Keywords verfassen, mindestens 10 hochwertige Fotos hochladen, Öffnungszeiten aktuell halten, Services und Produkte eintragen, Google Posts regelmäßig veröffentlichen, Bewertungen aktiv sammeln und beantworten.",
  },
  "google-maps-ranking-faktoren": {
    pageType: "Analysis Guide (Cluster)",
    summary: "Detaillierte Analyse der Google Maps Ranking-Faktoren: Relevanz, Entfernung und Bekanntheit als Hauptfaktoren mit konkreten Optimierungsstrategien.",
    keyFacts: [
      "Drei Hauptfaktoren: Relevanz, Entfernung, Bekanntheit (Prominence)",
      "Entfernung kann nicht beeinflusst werden — Relevanz und Bekanntheit schon",
      "Bewertungsanzahl und -qualität sind stärkste Bekanntheitssignale",
      "GBP-Vollständigkeit korreliert direkt mit Relevanz-Score",
    ],
    targetAudience: "Lokale Unternehmen und SEOs, die ihr Google Maps Ranking verbessern wollen",
    relatedTopics: ["Google Maps", "Local Pack", "Ranking-Faktoren", "Relevanz", "Prominence", "Bewertungen"],
    primaryQuestion: "Welche Faktoren beeinflussen das Google Maps Ranking?",
    directAnswer: "Google Maps Rankings basieren auf drei Hauptfaktoren: Relevanz (wie gut ein Eintrag zur Suchanfrage passt), Entfernung (Distanz zum Suchenden) und Bekanntheit (Online-Reputation durch Bewertungen, Links, Erwähnungen). Nur Relevanz und Bekanntheit lassen sich durch Optimierung beeinflussen.",
  },
  "localbusiness-schema-implementierung": {
    pageType: "Technical Implementation Guide",
    summary: "Schritt-für-Schritt-Anleitung zur Implementierung von LocalBusiness Schema Markup mit kopierbaren JSON-LD Templates für verschiedene Branchen.",
    keyFacts: [
      "JSON-LD im <head> ist die empfohlene Implementierungsmethode",
      "Branchenspezifische @type-Varianten (Restaurant, Dentist, Attorney etc.)",
      "Pflichtfelder: name, address, telephone, openingHours",
      "Optionale Felder wie priceRange und paymentAccepted verbessern die Rich Snippets",
    ],
    targetAudience: "Webentwickler und technische SEOs bei der Schema-Implementierung",
    relatedTopics: ["LocalBusiness Schema", "JSON-LD", "Rich Snippets", "Schema.org", "Structured Data"],
    primaryQuestion: "Wie implementiere ich LocalBusiness Schema Markup?",
    directAnswer: "LocalBusiness Schema wird als JSON-LD im HTML-Head platziert. Nutze den passenden Untertyp (@type: Restaurant, Dentist etc.), fülle alle Pflichtfelder aus (name, address, telephone, openingHours) und ergänze optionale Felder wie priceRange, paymentAccepted und sameAs-Links zu offiziellen Profilen.",
  },
  "review-schema-implementierung": {
    pageType: "Technical Implementation Guide",
    summary: "Implementierungsanleitung für Review und AggregateRating Schema Markup mit JSON-LD Templates, Validierung und Integration mit Bewertungsplattformen.",
    keyFacts: [
      "AggregateRating zeigt Sterne-Rating in den Suchergebnissen",
      "Review Schema für einzelne Kundenbewertungen nutzbar",
      "itemReviewed muss mit LocalBusiness Schema verknüpft werden",
      "Regelmäßige Aktualisierung von reviewCount und ratingValue nötig",
    ],
    targetAudience: "Webentwickler, die Bewertungs-Rich-Snippets implementieren wollen",
    relatedTopics: ["Review Schema", "AggregateRating", "Rich Snippets", "Bewertungen", "Star Ratings"],
    primaryQuestion: "Wie implementiere ich Review Schema Markup?",
    directAnswer: "Review Schema Markup nutzt @type Review mit author, reviewRating und datePublished für einzelne Bewertungen. Für die Gesamtbewertung wird AggregateRating mit ratingValue, reviewCount und bestRating eingesetzt. Beide werden als JSON-LD im HTML-Head platziert und müssen regelmäßig mit aktuellen Daten aktualisiert werden.",
  },
  "schema-strategie-dokument": {
    pageType: "Strategy Template (Tool)",
    summary: "Interaktives Schema-Strategie-Dokument als Blueprint für die systematische Schema Markup Implementierung über alle Seitentypen einer lokalen Website.",
    keyFacts: [
      "Schema-Mapping: Jeder Seitentyp bekommt sein optimales Schema-Set",
      "Priorisierung nach Seitentyp: Startseite → Services → Blog → Kontakt",
      "Speakable-Strategie für die Top-10-Seiten nach Traffic",
      "Quartalsweise Schema-Audits als Qualitätssicherung",
    ],
    targetAudience: "SEO-Manager und Agenturen, die Schema Markup strategisch planen",
    relatedTopics: ["Schema Strategy", "Schema Mapping", "Structured Data", "Technical SEO", "Implementation Plan"],
    primaryQuestion: "Wie erstelle ich eine Schema-Strategie für meine Website?",
    directAnswer: "Eine Schema-Strategie definiert für jeden Seitentyp das optimale Schema-Set: Startseite (Organization + LocalBusiness), Service-Seiten (Service + FAQPage), Blog (Article + speakable), Kontakt (ContactPoint). Die Implementierung erfolgt priorisiert nach Traffic-Relevanz, mit quartalsweiser Validierung.",
  },
};

export const getLlmSummary = (slug: string): LlmPageSummary | null => {
  return llmPageSummaries[slug] || null;
};
