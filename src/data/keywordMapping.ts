/**
 * Keyword Mapping Document
 * Assigns primary keyword, secondary keywords, and LSI/supporting keywords to each article.
 * Used for on-page SEO alignment, content gap analysis, and internal linking optimization.
 * 
 * Guidelines:
 * - Primary: The single most important keyword to rank for (1 per article)
 * - Secondary: 2-4 closely related keywords with search volume
 * - LSI/Supporting: Long-tail and semantic variations for content depth
 * - Search Intent: informational, navigational, transactional, or commercial
 */

export interface KeywordAssignment {
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  lsiKeywords: string[];
  searchIntent: 'informational' | 'navigational' | 'transactional' | 'commercial';
  targetSearchVolume: 'high' | 'medium' | 'low';
  contentType: 'pillar' | 'hub' | 'cluster' | 'supporting';
  notes?: string;
}

export const keywordMapping: KeywordAssignment[] = [
  // =============================================
  // PILLAR PAGES
  // =============================================
  {
    slug: "ultimate-guide-local-seo",
    primaryKeyword: "local seo",
    secondaryKeywords: ["local seo guide", "lokale suchmaschinenoptimierung", "local seo strategie"],
    lsiKeywords: ["google business profil optimieren", "local seo ranking faktoren", "local seo dach", "lokale suche optimieren", "local seo anleitung"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "pillar",
    notes: "Cornerstone content — targets broadest Local SEO terms"
  },
  {
    slug: "technisches-local-seo-guide",
    primaryKeyword: "technisches local seo",
    secondaryKeywords: ["technical seo lokal", "localbusiness schema", "core web vitals local seo"],
    lsiKeywords: ["schema markup lokale unternehmen", "geo markup", "indexierung local seo", "site speed lokale website", "mobile seo lokal"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar",
    notes: "Technical pillar — covers Schema, CWV, Mobile-First, indexing"
  },
  {
    slug: "local-seo-strategie-kleine-unternehmen",
    primaryKeyword: "local seo strategie kleine unternehmen",
    secondaryKeywords: ["local seo kmu", "local seo kostenlos", "seo für kleine unternehmen"],
    lsiKeywords: ["local seo aktionsplan", "local seo dach", "90 tage seo plan", "lokale seo ohne agentur", "google business profil kmu"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-seo-ranking-faktoren-erklaert",
    primaryKeyword: "local seo ranking faktoren",
    secondaryKeywords: ["lokale ranking faktoren", "google local ranking", "local pack ranking faktoren"],
    lsiKeywords: ["local seo signale 2026", "gbp ranking faktoren", "bewertungen ranking einfluss", "proximity relevance prominence"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "ai-suche-lokale-unternehmen",
    primaryKeyword: "ai search optimization lokale unternehmen",
    secondaryKeywords: ["geo optimierung", "chatgpt local seo", "google ai overviews local"],
    lsiKeywords: ["llms.txt", "ai suchmaschinenoptimierung", "generative engine optimization", "perplexity optimierung lokal"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-link-building-blueprint",
    primaryKeyword: "local link building",
    secondaryKeywords: ["lokale backlinks", "lokales linkbuilding", "backlinks lokale unternehmen"],
    lsiKeywords: ["ihk backlink", "vereinssponsoring seo", "lokale pr linkbuilding", "link building dach", "outreach templates lokal"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-seo-checkliste-komplett",
    primaryKeyword: "local seo checkliste",
    secondaryKeywords: ["local seo checklist", "lokale seo checkliste", "local seo schritt für schritt"],
    lsiKeywords: ["local seo implementierung", "local seo anleitung", "local seo 2026", "seo punkte abarbeiten"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "pillar"
  },

  // =============================================
  // HUB PAGES
  // =============================================
  {
    slug: "google-maps-seo-hub",
    primaryKeyword: "google maps seo",
    secondaryKeywords: ["google maps ranking", "maps optimierung", "google maps marketing"],
    lsiKeywords: ["lokale sichtbarkeit google maps", "maps seo guide", "local pack optimierung"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "hub"
  },
  {
    slug: "google-business-profil-hub",
    primaryKeyword: "google business profil",
    secondaryKeywords: ["gbp optimierung", "google my business guide", "google business hub"],
    lsiKeywords: ["google business profil anlegen", "gbp tipps", "google unternehmensprofil"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "hub"
  },
  {
    slug: "local-seo-branchen-hub",
    primaryKeyword: "local seo branchen",
    secondaryKeywords: ["branchen seo guide", "local seo nach branche", "branchenspezifisches seo"],
    lsiKeywords: ["seo gastronomie", "seo handwerk", "seo gesundheit", "seo dienstleistungen"],
    searchIntent: "navigational",
    targetSearchVolume: "low",
    contentType: "hub"
  },
  {
    slug: "local-seo-staedte-hub",
    primaryKeyword: "local seo städte",
    secondaryKeywords: ["local seo berlin", "local seo münchen", "local seo wien"],
    lsiKeywords: ["städte seo guide", "regionales seo", "local seo dach städte"],
    searchIntent: "navigational",
    targetSearchVolume: "low",
    contentType: "hub"
  },
  {
    slug: "bewertungen-reputation-hub",
    primaryKeyword: "google bewertungen management",
    secondaryKeywords: ["bewertungen strategie", "reputation management", "review management"],
    lsiKeywords: ["bewertungen sammeln", "negative bewertungen", "bewertungen antworten"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "hub"
  },

  // =============================================
  // CLUSTER: GOOGLE MAPS
  // =============================================
  {
    slug: "google-maps-ranking-verbessern",
    primaryKeyword: "google maps ranking verbessern",
    secondaryKeywords: ["maps ranking steigern", "google maps optimierung anleitung", "maps ranking aktionsplan"],
    lsiKeywords: ["google maps platz 1", "7 schritte maps ranking", "maps sichtbarkeit erhöhen"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster",
    notes: "Actionable how-to — differentiated from ranking-faktoren (theory) and algorithmus (explanation)"
  },
  {
    slug: "google-maps-seo-ranking-faktoren",
    primaryKeyword: "google maps ranking signale gewichtung",
    secondaryKeywords: ["ranking signale maps", "local pack signale prozent", "maps seo 2026 gewichtung"],
    lsiKeywords: ["gbp signale 32 prozent", "bewertungen gewichtung", "citations einfluss maps"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Signal weighting deep-dive — differentiated from algorithmus (concept) and verbessern (action)"
  },
  {
    slug: "wie-google-maps-ranking-funktioniert",
    primaryKeyword: "google maps algorithmus erklärt",
    secondaryKeywords: ["maps algorithmus proximity relevance prominence", "local pack algorithmus", "wie google maps funktioniert"],
    lsiKeywords: ["maps ranking erklärung", "drei säulen google maps", "algorithmus verständnis"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Conceptual explainer — differentiated from signale (data) and verbessern (action)"
  },
  {
    slug: "google-maps-spam-erkennen",
    primaryKeyword: "google maps spam erkennen",
    secondaryKeywords: ["spam melden google maps", "fake bewertungen melden", "google business spam"],
    lsiKeywords: ["keyword stuffing maps", "fake einträge melden", "maps betrug erkennen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-konkurrenzanalyse",
    primaryKeyword: "google maps konkurrenzanalyse",
    secondaryKeywords: ["competitor analysis maps", "local pack analyse", "ranking analyse google maps"],
    lsiKeywords: ["wettbewerber maps", "konkurrenz überholen maps", "maps vergleichs template"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-ranking-case-studies",
    primaryKeyword: "google maps ranking case study",
    secondaryKeywords: ["local seo erfolg", "ranking verbessern fallstudie", "maps case study"],
    lsiKeywords: ["ranking von 0 auf 1", "local seo erfolgsgeschichte", "branchenvergleich maps"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-audit-template",
    primaryKeyword: "google maps audit",
    secondaryKeywords: ["maps audit template", "gbp audit checkliste", "google maps checkliste"],
    lsiKeywords: ["local seo audit maps", "maps ranking audit", "google maps prüfpunkte"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-ranking-tracker",
    primaryKeyword: "google maps ranking tracker",
    secondaryKeywords: ["local rank tracking", "grid tracking", "geo grid maps"],
    lsiKeywords: ["maps position tracken", "ranking monitoring lokal", "local falcon alternative"],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: GOOGLE BUSINESS PROFIL
  // =============================================
  {
    slug: "google-my-business-optimieren",
    primaryKeyword: "google my business optimieren",
    secondaryKeywords: ["google business profil optimieren", "gmb optimieren", "gbp anleitung"],
    lsiKeywords: ["google unternehmensprofil einrichten", "google business profil vollständig", "gbp tipps 2026"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "gbp-fotos-optimieren",
    primaryKeyword: "google business fotos optimieren",
    secondaryKeywords: ["gbp bilder", "google maps bilder", "unternehmensfotos google"],
    lsiKeywords: ["foto optimierung gbp", "google business bildgrößen", "maps fotos hochladen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-kategorien-guide",
    primaryKeyword: "google business kategorien",
    secondaryKeywords: ["gbp category", "branchenkategorie google", "kategorie wählen gbp"],
    lsiKeywords: ["unternehmenskategorie google", "haupt nebenkategorie gbp", "google business branche"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-business-messaging",
    primaryKeyword: "google business messaging",
    secondaryKeywords: ["gbp chat", "kundenkommunikation google", "google business nachrichten"],
    lsiKeywords: ["messaging einrichten gbp", "google chat kunden", "gbp messaging best practices"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-produkte-services",
    primaryKeyword: "google business produkte",
    secondaryKeywords: ["gbp services", "google business dienstleistungen", "produkte hinzufügen gbp"],
    lsiKeywords: ["google business angebote", "gbp produkt katalog", "services eintragen google"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-insights-verstehen",
    primaryKeyword: "google business insights",
    secondaryKeywords: ["gbp insights verstehen", "google business statistiken", "gbp performance"],
    lsiKeywords: ["gbp analytics", "google business daten", "profil aufrufe gbp"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-posts-ranking-faktor",
    primaryKeyword: "google posts",
    secondaryKeywords: ["gbp posts", "google business posts", "lokale posts google"],
    lsiKeywords: ["google posts erstellen", "posting frequenz gbp", "google posts ranking"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-oeffnungszeiten-sondertage",
    primaryKeyword: "google business öffnungszeiten",
    secondaryKeywords: ["gbp feiertage", "sonderöffnungszeiten google", "öffnungszeiten ändern gbp"],
    lsiKeywords: ["betriebsferien eintragen", "gbp sondertage", "feiertage google business"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-attribute-richtig-nutzen",
    primaryKeyword: "google business attribute",
    secondaryKeywords: ["gbp attribute nutzen", "ausstattungsmerkmale google", "barrierefreiheit google business"],
    lsiKeywords: ["lgbtq freundlich gbp", "attribute für ranking", "gbp profil merkmale"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "gbp-mehrere-standorte",
    primaryKeyword: "google business mehrere standorte",
    secondaryKeywords: ["multi location gbp", "standortgruppen google", "bulk upload gbp"],
    lsiKeywords: ["filialisten google business", "gbp skalieren", "mehrere profile verwalten"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: BEWERTUNGEN
  // =============================================
  {
    slug: "google-bewertungen-bekommen",
    primaryKeyword: "google bewertungen bekommen",
    secondaryKeywords: ["mehr google bewertungen", "google rezensionen", "bewertungen generieren"],
    lsiKeywords: ["kunden um bewertung bitten", "qr code bewertung", "bewertungslink google", "5 sterne bewertung"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "negative-google-bewertungen",
    primaryKeyword: "negative google bewertungen",
    secondaryKeywords: ["negative bewertung antworten", "schlechte bewertung reagieren", "1 stern bewertung"],
    lsiKeywords: ["bewertung melden", "rufschädigung google", "bewertungsmanagement"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-antworten-vorlagen",
    primaryKeyword: "bewertungen antworten vorlagen",
    secondaryKeywords: ["google bewertung antwort", "review antwort vorlage", "rezension beantworten"],
    lsiKeywords: ["5 sterne antwort", "1 stern antwort vorlage", "bewertung beantworten tipps"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-bewertung-loeschen-anleitung",
    primaryKeyword: "google bewertung löschen",
    secondaryKeywords: ["fake bewertung melden", "bewertung entfernen google", "negative bewertung löschen"],
    lsiKeywords: ["google review löschen", "unangemessene bewertung", "bewertung anwalt"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "review-schema-implementierung",
    primaryKeyword: "review schema markup",
    secondaryKeywords: ["aggregaterating schema", "sterne google suche", "rich snippets bewertungen"],
    lsiKeywords: ["schema markup bewertungen", "json-ld review", "bewertungssterne serp"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: KEYWORDS & CONTENT
  // =============================================
  {
    slug: "local-seo-keywords-finden",
    primaryKeyword: "local seo keywords finden",
    secondaryKeywords: ["lokale keywords recherche", "keyword recherche lokal", "local keywords"],
    lsiKeywords: ["stadt keywords", "branche + ort keywords", "keyword tools kostenlos", "suchvolumen lokal"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-keyword-research-template",
    primaryKeyword: "keyword recherche template",
    secondaryKeywords: ["keyword research template", "lokale keywords vorlage", "keyword mapping template"],
    lsiKeywords: ["keyword spreadsheet", "local seo keywords vorlage", "keyword recherche workflow"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-content-marketing",
    primaryKeyword: "local content marketing",
    secondaryKeywords: ["lokales content marketing", "content strategie lokal", "lokale inhalte"],
    lsiKeywords: ["lokaler blog", "stadteil content", "regionale themen seo"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-notdienst-keywords",
    primaryKeyword: "notdienst keywords seo",
    secondaryKeywords: ["emergency keywords", "sofort hilfe seo", "24 stunden service seo"],
    lsiKeywords: ["dringende suche optimierung", "notfall keywords google", "notdienst google ads"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "lokale-keyword-kannibalisierung",
    primaryKeyword: "keyword kannibalisierung lokal",
    secondaryKeywords: ["duplicate content lokal", "lokale seo probleme", "seiten konkurrenz seo"],
    lsiKeywords: ["kannibalisierung vermeiden", "url konsolidierung", "301 redirect lokal"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: TECHNISCHES SEO
  // =============================================
  {
    slug: "schema-markup-local-seo",
    primaryKeyword: "schema markup local seo",
    secondaryKeywords: ["structured data lokal", "json-ld local seo", "schema markup anleitung"],
    lsiKeywords: ["localbusiness schema", "rich snippets lokal", "schema markup generator"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "localbusiness-schema-implementierung",
    primaryKeyword: "localbusiness schema implementieren",
    secondaryKeywords: ["schema markup code", "json-ld localbusiness", "structured data lokale website"],
    lsiKeywords: ["schema branche", "öffnungszeiten schema", "multi-location schema"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "schema-strategie-dokument",
    primaryKeyword: "schema strategie",
    secondaryKeywords: ["structured data strategie", "schema markup guide", "json-ld strategie"],
    lsiKeywords: ["article schema", "faqpage schema", "howto schema", "localbusiness schema auswahl"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "core-web-vitals-local-seo",
    primaryKeyword: "core web vitals local seo",
    secondaryKeywords: ["page speed lokal", "local seo performance", "lcp fid cls"],
    lsiKeywords: ["website geschwindigkeit lokal", "pagespeed insights", "mobile performance"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "mobile-local-seo",
    primaryKeyword: "mobile local seo",
    secondaryKeywords: ["mobile first seo", "local seo mobile", "mobile seo optimierung"],
    lsiKeywords: ["responsive design seo", "mobile ux lokal", "page speed mobile"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-landing-pages",
    primaryKeyword: "lokale landing pages erstellen",
    secondaryKeywords: ["standort seiten seo", "geo landing pages", "multi location seiten"],
    lsiKeywords: ["stadtteil seiten", "location pages ranking", "lokale landing page template"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "multi-location-seo",
    primaryKeyword: "multi location website architektur",
    secondaryKeywords: ["standortseiten url struktur", "multi location schema markup", "mehrere standorte website"],
    lsiKeywords: ["multi location template", "standort seiten skalieren", "url struktur filialen"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Technical/architecture focus — differentiated from mehrstufig (strategy/GBP management)"
  },

  // =============================================
  // CLUSTER: STRATEGIE & BEST PRACTICES
  // =============================================
  {
    slug: "lokale-suchmaschinenoptimierung-2026",
    primaryKeyword: "lokale suchmaschinenoptimierung 2026",
    secondaryKeywords: ["local seo trends 2026", "lokale seo aktuell", "seo trends lokal"],
    lsiKeywords: ["ki einfluss local seo", "voice search 2026", "ai overviews lokal"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "nap-konsistenz-local-seo",
    primaryKeyword: "nap konsistenz",
    secondaryKeywords: ["nap daten", "name adresse telefon seo", "citations konsistenz"],
    lsiKeywords: ["nap audit", "nap fehler finden", "einheitliche firmendaten"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "citation-strategie-verzeichnisse",
    primaryKeyword: "local citations aufbauen",
    secondaryKeywords: ["branchenverzeichnisse seo", "lokale verzeichnisse", "citation strategie"],
    lsiKeywords: ["nap aufbau", "wichtigste verzeichnisse dach", "citations priorisierung"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "citation-tracking-template",
    primaryKeyword: "citation tracking",
    secondaryKeywords: ["citation spreadsheet", "nap tracking vorlage", "verzeichnis tracking"],
    lsiKeywords: ["citation audit", "local citations template", "citation management"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-citations-2025",
    primaryKeyword: "local citations 2026",
    secondaryKeywords: ["branchenbücher 2026", "verzeichnisse lokal", "citations aufbauen"],
    lsiKeywords: ["nap einträge", "top verzeichnisse dach", "citations nach branche"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-link-building",
    primaryKeyword: "lokaler linkaufbau",
    secondaryKeywords: ["backlinks lokal", "linkbuilding lokal", "link building lokale unternehmen"],
    lsiKeywords: ["sponsoring backlinks", "vereine links", "lokale presse backlinks"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-audit-checkliste",
    primaryKeyword: "local seo audit",
    secondaryKeywords: ["seo audit checkliste", "local seo analyse", "seo prüfung lokal"],
    lsiKeywords: ["local seo check kostenlos", "website audit lokal", "gbp audit"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "wettbewerbsanalyse-local-seo",
    primaryKeyword: "wettbewerbsanalyse local seo",
    secondaryKeywords: ["konkurrenzanalyse seo", "local seo wettbewerb", "konkurrenz analysieren"],
    lsiKeywords: ["wettbewerber ausspionieren seo", "local seo vergleich", "konkurrenz überholen"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-vs-organisch",
    primaryKeyword: "local seo vs organic seo",
    secondaryKeywords: ["unterschied local seo", "local pack vs organic", "lokales vs organisches seo"],
    lsiKeywords: ["wann local seo", "seo vergleich", "local pack erklärt"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-vs-maps-seo",
    primaryKeyword: "local seo vs maps seo",
    secondaryKeywords: ["unterschied local seo maps seo", "google maps seo", "lokale seo erklärt"],
    lsiKeywords: ["maps optimierung vs website seo", "local pack vs organisch"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-automation",
    primaryKeyword: "bewertungen automatisieren",
    secondaryKeywords: ["review generation", "mehr bewertungen automatisch", "rezensionen sammeln"],
    lsiKeywords: ["bewertungs workflow", "automatische bewertungsanfrage", "review funnel"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "e-e-a-t-lokale-unternehmen",
    primaryKeyword: "e-e-a-t lokale unternehmen",
    secondaryKeywords: ["expertise authority trust lokal", "e-a-t seo", "lokale autorität aufbauen"],
    lsiKeywords: ["vertrauen aufbauen seo", "glaubwürdigkeit google", "e-e-a-t signale"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-seo-fuer-neugruender",
    primaryKeyword: "local seo neugründer",
    secondaryKeywords: ["startup local seo", "existenzgründung seo", "neue firma google"],
    lsiKeywords: ["lokales marketing startup", "google business neu anlegen", "seo von null"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-mehrstufig-unternehmen",
    primaryKeyword: "franchise seo gbp management",
    secondaryKeywords: ["gbp management filialen", "markenkonsistenz multi location", "franchise google business"],
    lsiKeywords: ["zentrale gbp steuerung", "nap konsistenz franchise", "lokale autonomie filialen"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-events-marketing",
    primaryKeyword: "lokale events seo",
    secondaryKeywords: ["event marketing seo", "sponsoring seo", "veranstaltungen marketing"],
    lsiKeywords: ["lokale pr events", "event schema markup", "community engagement seo"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "lokale-influencer-kooperationen",
    primaryKeyword: "lokale influencer marketing",
    secondaryKeywords: ["micro influencer lokal", "influencer kooperationen", "lokale reichweite influencer"],
    lsiKeywords: ["influencer finden lokal", "kooperation aufbauen", "micro influencer marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: TOOLS & TEMPLATES
  // =============================================
  {
    slug: "kostenloses-seo-guide",
    primaryKeyword: "kostenloses seo",
    secondaryKeywords: ["seo kostenlos lernen", "gratis seo tools", "seo für anfänger"],
    lsiKeywords: ["local seo kostenlos", "seo lernen", "kostenlose seo strategie"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tools-2026",
    primaryKeyword: "local seo tools",
    secondaryKeywords: ["seo software lokal", "kostenlose seo tools", "seo suite lokal"],
    lsiKeywords: ["local seo tool vergleich", "gbp tools", "ranking tracker tools"],
    searchIntent: "commercial",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "kostenlose-local-seo-audit-tools",
    primaryKeyword: "kostenlose local seo audit tools",
    secondaryKeywords: ["free seo tools", "local seo check kostenlos", "seo analyse kostenlos"],
    lsiKeywords: ["audit tool vergleich", "gratis seo audit", "website check kostenlos"],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "seo-toolbox-kostenlose-ressourcen",
    primaryKeyword: "seo toolbox",
    secondaryKeywords: ["kostenlose seo ressourcen", "seo werkzeuge", "seo hilfsmittel"],
    lsiKeywords: ["seo tools sammlung", "gratis seo hilfe", "seo ressourcen liste"],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-business-api-agenturen",
    primaryKeyword: "google business api",
    secondaryKeywords: ["gbp api", "seo automatisierung api", "agentur tools api"],
    lsiKeywords: ["google business api einrichten", "gbp skalierung", "api für agenturen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-checkliste-pdf",
    primaryKeyword: "local seo checkliste pdf",
    secondaryKeywords: ["seo checkliste download", "checkliste ausdrucken", "kostenlose seo checkliste"],
    lsiKeywords: ["pdf download seo", "checkliste abhaken", "local seo pdf"],
    searchIntent: "transactional",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-qr-codes",
    primaryKeyword: "bewertungs qr code erstellen",
    secondaryKeywords: ["google review qr code", "bewertung link qr", "rezension qr code"],
    lsiKeywords: ["qr code generator bewertung", "bewertung vereinfachen", "qr code design"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-monthly-checklist",
    primaryKeyword: "local seo monatliche checkliste",
    secondaryKeywords: ["monatliche seo routine", "local seo pflege", "seo maintenance"],
    lsiKeywords: ["monatliches seo", "local seo wochenplan", "regelmäßige seo aufgaben"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-strategy-planner",
    primaryKeyword: "local seo strategieplan",
    secondaryKeywords: ["seo strategy planner", "local seo plan", "90 tage seo plan"],
    lsiKeywords: ["local seo roadmap", "seo strategieplan vorlage", "seo phasen plan"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-roadmap-90-tage",
    primaryKeyword: "local seo roadmap",
    secondaryKeywords: ["90 tage local seo plan", "seo fahrplan", "local seo timeline"],
    lsiKeywords: ["seo wochenplan", "lokale seo roadmap", "seo implementierung zeitplan"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-reporting-template",
    primaryKeyword: "local seo reporting",
    secondaryKeywords: ["local seo report vorlage", "seo reporting template", "local seo kpis"],
    lsiKeywords: ["google business report", "local seo metriken", "monatlicher seo report"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tracking-kpis",
    primaryKeyword: "local seo kpis",
    secondaryKeywords: ["seo tracking lokal", "local seo reporting", "google analytics lokal"],
    lsiKeywords: ["kpi dashboard seo", "seo erfolg messen", "gbp insights kpis"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-jahresplanung",
    primaryKeyword: "local seo jahresplan",
    secondaryKeywords: ["seo kalender", "monatliche seo aufgaben", "seo planung"],
    lsiKeywords: ["marketing kalender", "seo jahresplanung vorlage", "saisonales seo"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fehler",
    primaryKeyword: "local seo fehler",
    secondaryKeywords: ["häufige seo fehler", "local seo mistakes", "seo fehler vermeiden"],
    lsiKeywords: ["seo probleme lösen", "typische local seo fehler", "seo anfänger fehler"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: AI & ZUKUNFT
  // =============================================
  {
    slug: "ai-search-optimization-2026",
    primaryKeyword: "ai search optimization",
    secondaryKeywords: ["geo seo", "ai overviews optimierung", "chatgpt seo"],
    lsiKeywords: ["generative engine optimization", "ai suche lokal", "perplexity seo"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "website-content-ai-suchmaschinen",
    primaryKeyword: "website content ai suchmaschinen",
    secondaryKeywords: ["content struktur ai", "schema markup ai", "llms.txt"],
    lsiKeywords: ["website ai optimierung", "chatgpt seo content", "perplexity optimierung"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "entity-seo-guide",
    primaryKeyword: "entity seo",
    secondaryKeywords: ["knowledge graph optimieren", "schema markup entity", "sameAs seo"],
    lsiKeywords: ["structured data entity", "ai seo entität", "knowledge panel optimieren"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "semantic-seo-topical-authority",
    primaryKeyword: "semantic seo",
    secondaryKeywords: ["topical authority", "topic cluster seo", "themenautorität aufbauen"],
    lsiKeywords: ["pillar page strategie", "interne verlinkung semantisch", "semantische signale"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-voice-search",
    primaryKeyword: "voice search local seo",
    secondaryKeywords: ["sprachsuche optimieren", "local seo voice", "alexa siri google seo"],
    lsiKeywords: ["conversational keywords", "featured snippets voice", "voice first strategie"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "ai-overviews-local-seo",
    primaryKeyword: "ai overviews auswirkungen local pack",
    secondaryKeywords: ["ai overviews klickrate", "local pack ctr ai", "ai overviews sichtbarkeit"],
    lsiKeywords: ["ki suche klickraten daten", "ai overviews anpassung", "local pack veränderungen ai"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Impact/data focus — differentiated from google-ai-overviews (optimization strategies)"
  },
  {
    slug: "google-ai-overviews-local-seo",
    primaryKeyword: "google ai overviews optimieren",
    secondaryKeywords: ["ai overviews optimierung strategie", "google ai suche vorbereitung", "ai overviews ranking"],
    lsiKeywords: ["ai overviews lokal optimieren", "google ai ergebnisse strategie", "ki suche google optimierung"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Strategy/optimization focus — differentiated from ai-overviews-local-seo (impact analysis)"
  },
  {
    slug: "ki-tools-local-seo",
    primaryKeyword: "ki tools local seo",
    secondaryKeywords: ["ai seo tools", "ki seo werkzeuge", "automatisierung seo ki"],
    lsiKeywords: ["chatgpt für seo", "ki content erstellung", "ai seo workflow"],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // CLUSTER: TRENDS
  // =============================================
  {
    slug: "local-seo-trends-2027",
    primaryKeyword: "local seo trends 2027",
    secondaryKeywords: ["seo zukunft", "2027 seo trends", "seo prognose"],
    lsiKeywords: ["ai seo zukunft", "ar lokal", "voice search zukunft"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "zero-click-searches-local-pack",
    primaryKeyword: "zero click searches",
    secondaryKeywords: ["no click searches", "local pack zero click", "serp features"],
    lsiKeywords: ["null klick suche", "zero click strategie", "local pack ohne klick"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-sge-lokale-suche",
    primaryKeyword: "google sge prognose vorbereitung",
    secondaryKeywords: ["search generative experience prognose", "sge zeitleiste", "sge vorbereitung lokal"],
    lsiKeywords: ["generative search zukunft", "local seo sge readiness", "sge kmu vorbereitung"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-statistiken-daten",
    primaryKeyword: "local seo statistiken",
    secondaryKeywords: ["local seo daten", "local seo benchmarks", "ranking faktoren statistik"],
    lsiKeywords: ["bewertungsstatistiken", "lokale suche zahlen", "google business profil statistiken", "branchenspezifische seo daten"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // BRANCHEN-GUIDES
  // =============================================
  {
    slug: "local-seo-fuer-restaurants",
    primaryKeyword: "local seo restaurant",
    secondaryKeywords: ["restaurant seo", "gastro marketing google", "restaurant google maps"],
    lsiKeywords: ["speisekarte seo", "restaurant bewertungen", "gastronomie online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-handwerker",
    primaryKeyword: "local seo handwerker",
    secondaryKeywords: ["handwerker marketing google", "contractor seo", "handwerk online marketing"],
    lsiKeywords: ["elektriker seo", "maler seo", "klempner google maps"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-aerzte-praxen",
    primaryKeyword: "local seo ärzte",
    secondaryKeywords: ["arzt seo", "praxis marketing", "patientengewinnung google"],
    lsiKeywords: ["jameda seo", "ymyl arzt", "arztpraxis online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-anwaelte-kanzleien",
    primaryKeyword: "local seo anwälte",
    secondaryKeywords: ["kanzlei marketing", "anwalt seo", "mandantengewinnung google"],
    lsiKeywords: ["anwalt.de seo", "rechtsgebiet keywords", "e-e-a-t anwalt"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hotels",
    primaryKeyword: "local seo hotels",
    secondaryKeywords: ["hotel seo", "direktbuchungen seo", "hotel google maps"],
    lsiKeywords: ["google hotel ads", "booking alternative seo", "hotel bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fitness",
    primaryKeyword: "local seo fitnessstudio",
    secondaryKeywords: ["fitnessstudio marketing", "personal trainer seo", "fitness google maps"],
    lsiKeywords: ["mitgliedergewinnung seo", "gym marketing", "fitness content marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-doener-kebab-imbiss",
    primaryKeyword: "local seo döner imbiss",
    secondaryKeywords: ["imbiss marketing", "döner google maps", "schnellrestaurant seo"],
    lsiKeywords: ["imbiss bewertungen", "döner keywords", "imbiss google business"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-friseursalon-beauty",
    primaryKeyword: "local seo friseur",
    secondaryKeywords: ["friseur marketing", "beauty salon seo", "friseursalon google"],
    lsiKeywords: ["friseur bewertungen", "beauty google maps", "salon online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-immobilienmakler",
    primaryKeyword: "local seo immobilienmakler",
    secondaryKeywords: ["makler marketing", "immobilien seo", "makler google maps"],
    lsiKeywords: ["objektanfragen google", "immobilien content", "makler bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-steuerberater",
    primaryKeyword: "local seo steuerberater",
    secondaryKeywords: ["steuerberater marketing", "buchhalter seo", "mandantengewinnung steuerberater"],
    lsiKeywords: ["steuer keywords", "kanzlei seo", "finanzexperte google"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-autowerkstatt",
    primaryKeyword: "local seo autowerkstatt",
    secondaryKeywords: ["werkstatt marketing", "kfz marketing", "autowerkstatt google"],
    lsiKeywords: ["autohaus seo", "notfall keywords werkstatt", "werkstatt bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tierarzt",
    primaryKeyword: "local seo tierarzt",
    secondaryKeywords: ["tierpraxis marketing", "veterinär seo", "tierarzt google maps"],
    lsiKeywords: ["tierarzt notdienst seo", "tier-portale", "emotionales content marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fotograf",
    primaryKeyword: "local seo fotograf",
    secondaryKeywords: ["fotografen marketing", "fotograf google maps", "hochzeitsfotograf seo"],
    lsiKeywords: ["portfolio seo", "fotograf bewertungen", "fotografie keywords"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-yoga-studios",
    primaryKeyword: "local seo yoga studio",
    secondaryKeywords: ["yoga marketing", "pilates seo", "wellness studio seo"],
    lsiKeywords: ["kurs keywords yoga", "yoga google business", "yoga studio marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tattoo-studios",
    primaryKeyword: "local seo tattoo studio",
    secondaryKeywords: ["tattoo marketing", "piercing studio seo", "tattoo künstler seo"],
    lsiKeywords: ["portfolio optimierung tattoo", "style keywords tattoo", "instagram tattoo seo"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-apotheken",
    primaryKeyword: "local seo apotheke",
    secondaryKeywords: ["apotheken marketing", "notdienst apotheke seo", "pharma seo lokal"],
    lsiKeywords: ["apotheke google business", "gesundheitsberatung content", "stamm-apotheke marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-zahnarzt",
    primaryKeyword: "local seo zahnarzt",
    secondaryKeywords: ["zahnarzt marketing", "dental marketing", "zahnarztpraxis seo"],
    lsiKeywords: ["patientengewinnung zahnarzt", "zahnarzt bewertungen", "behandlungs-keywords"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-physiotherapie",
    primaryKeyword: "local seo physiotherapie",
    secondaryKeywords: ["heilpraktiker marketing", "physiotherapeut seo", "therapie praxis marketing"],
    lsiKeywords: ["behandlungs keywords physio", "gesundheitsportale seo", "wellness marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-optiker",
    primaryKeyword: "local seo optiker",
    secondaryKeywords: ["optiker marketing", "brillen seo", "optiker google maps"],
    lsiKeywords: ["augenoptiker seo", "optiker bewertungen", "optiker online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-elektrotechnik",
    primaryKeyword: "local seo elektrotechnik",
    secondaryKeywords: ["elektriker marketing", "elektrobetrieb seo", "elektrotechnik google"],
    lsiKeywords: ["notdienst elektriker seo", "elektroinstallateur marketing", "elektro bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fahrschule",
    primaryKeyword: "local seo fahrschule",
    secondaryKeywords: ["fahrschule marketing", "fahrschüler gewinnen", "führerschein marketing"],
    lsiKeywords: ["fahrschule bewertungen", "fahrschule keywords", "fahrschule google"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hochzeitsdienstleister",
    primaryKeyword: "local seo hochzeitsdienstleister",
    secondaryKeywords: ["hochzeit marketing", "wedding vendor seo", "hochzeitsplanung seo"],
    lsiKeywords: ["saisonale keywords hochzeit", "hochzeitsportale seo", "emotionale bildsprache"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-umzugsunternehmen",
    primaryKeyword: "local seo umzugsunternehmen",
    secondaryKeywords: ["umzug marketing", "umzugsfirma seo", "entrümpelung seo"],
    lsiKeywords: ["umzugs keywords", "preisrechner seo", "umzug bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-reinigungsunternehmen",
    primaryKeyword: "local seo reinigungsunternehmen",
    secondaryKeywords: ["gebäudereinigung marketing", "putzfirma seo", "reinigung google maps"],
    lsiKeywords: ["service keywords reinigung", "b2b reinigung seo", "reinigung bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-sprachschule",
    primaryKeyword: "local seo sprachschule",
    secondaryKeywords: ["sprachschule marketing", "nachhilfe seo", "bildung seo lokal"],
    lsiKeywords: ["sprach keywords", "kursangebote seo", "saisonale kampagnen bildung"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-baeckerei-konditorei",
    primaryKeyword: "local seo bäckerei",
    secondaryKeywords: ["bäcker marketing", "konditorei seo", "handwerksbäcker seo"],
    lsiKeywords: ["frische keywords", "öffnungszeiten bäckerei", "bäckerei google maps"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-baeckerei",
    primaryKeyword: "bäckerei local seo",
    secondaryKeywords: ["bäcker seo", "bäckerei marketing google", "konditorei google"],
    lsiKeywords: ["sonntagsbrötchen keywords", "food fotos bäckerei", "saisonales marketing bäcker"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-cafe-coffeeshop",
    primaryKeyword: "local seo café",
    secondaryKeywords: ["cafe marketing", "coffeeshop seo", "kaffee seo lokal"],
    lsiKeywords: ["atmosphären keywords", "instagram café seo", "arbeitsplatz café marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-sanitaer-heizung",
    primaryKeyword: "local seo shk betrieb",
    secondaryKeywords: ["sanitär marketing", "heizung seo", "installateur seo"],
    lsiKeywords: ["klima marketing", "shk notdienst seo", "saisonale optimierung shk"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-maler-lackierer",
    primaryKeyword: "local seo maler",
    secondaryKeywords: ["maler marketing", "lackierer seo", "malerbetrieb marketing"],
    lsiKeywords: ["renovierung seo", "maler google maps", "maler bewertungen"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "seo-ferienwohnungen",
    primaryKeyword: "seo ferienwohnungen",
    secondaryKeywords: ["ferienwohnung seo schweiz", "vacation rental seo", "direktbuchungen seo"],
    lsiKeywords: ["google my business ferienwohnung", "local seo tourismus", "ota alternative seo"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-case-study-baecker",
    primaryKeyword: "local seo case study bäcker",
    secondaryKeywords: ["bäckerei seo erfolg", "local seo fallstudie", "bäcker ranking"],
    lsiKeywords: ["seo erfolgsgeschichte", "vorher nachher seo", "bäcker google maps"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },

  // =============================================
  // REGIONALE GUIDES
  // =============================================
  {
    slug: "local-seo-schweiz",
    primaryKeyword: "local seo schweiz",
    secondaryKeywords: ["schweizer seo", "kmu marketing schweiz", "google business schweiz"],
    lsiKeywords: ["lokales marketing schweiz", "schweizer verzeichnisse", "mehrsprachigkeit seo"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-zuerich",
    primaryKeyword: "local seo zürich",
    secondaryKeywords: ["seo zürich", "google ranking zürich", "marketing zürich"],
    lsiKeywords: ["unternehmen zürich google", "zürcher markt seo", "stadtteil seo zürich"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-muenchen",
    primaryKeyword: "local seo münchen",
    secondaryKeywords: ["seo münchen", "google ranking münchen", "marketing münchen"],
    lsiKeywords: ["bayerische unternehmen seo", "stadtteil seo münchen", "münchen google maps"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-berlin",
    primaryKeyword: "local seo berlin",
    secondaryKeywords: ["seo berlin", "google ranking berlin", "marketing berlin"],
    lsiKeywords: ["berliner unternehmen seo", "kiez keywords", "bezirks seo berlin"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hamburg",
    primaryKeyword: "local seo hamburg",
    secondaryKeywords: ["seo hamburg", "marketing hamburg", "google maps hamburg"],
    lsiKeywords: ["hamburger unternehmen seo", "stadtteil seo hamburg", "elbmetropole marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-frankfurt",
    primaryKeyword: "local seo frankfurt",
    secondaryKeywords: ["seo frankfurt", "marketing frankfurt", "google maps frankfurt"],
    lsiKeywords: ["finanzmetropole seo", "b2b keywords frankfurt", "mainmetropole marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-koeln",
    primaryKeyword: "local seo köln",
    secondaryKeywords: ["seo köln", "google ranking köln", "marketing köln"],
    lsiKeywords: ["kölner unternehmen seo", "veedel keywords", "rheinmetropole marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-wien",
    primaryKeyword: "local seo wien",
    secondaryKeywords: ["seo wien", "google ranking wien", "marketing wien"],
    lsiKeywords: ["wiener unternehmen seo", "bezirks keywords wien", "österreich seo"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-stuttgart",
    primaryKeyword: "local seo stuttgart",
    secondaryKeywords: ["seo stuttgart", "google ranking stuttgart", "marketing stuttgart"],
    lsiKeywords: ["schwaben seo", "baden-württemberg seo", "stadtteil seo stuttgart"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-duesseldorf",
    primaryKeyword: "local seo düsseldorf",
    secondaryKeywords: ["seo düsseldorf", "google ranking düsseldorf", "marketing düsseldorf"],
    lsiKeywords: ["nrw seo", "altstadt seo düsseldorf", "rheinland marketing"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-basel",
    primaryKeyword: "local seo basel",
    secondaryKeywords: ["seo basel", "google ranking basel", "marketing basel"],
    lsiKeywords: ["schweiz seo", "dreiländereck marketing", "nordschweiz seo"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hannover",
    primaryKeyword: "local seo hannover",
    secondaryKeywords: ["seo hannover", "marketing hannover", "google ranking hannover"],
    lsiKeywords: ["messe hannover seo", "niedersachsen seo", "hannover google maps"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },

  // =============================================
  // CASE STUDIES
  // =============================================
  {
    slug: "case-study-zahnarzt",
    primaryKeyword: "zahnarzt local seo case study",
    secondaryKeywords: ["local seo erfolg zahnarzt", "ranking erfolg praxis", "zahnarzt marketing ergebnis"],
    lsiKeywords: ["praxis marketing case study", "von seite 3 auf platz 1", "seo timeline zahnarzt"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-restaurant-reservierungen",
    primaryKeyword: "restaurant seo case study",
    secondaryKeywords: ["reservierungen steigern seo", "gastro marketing erfolg", "restaurant google ranking"],
    lsiKeywords: ["local seo erfolg restaurant", "mehr reservierungen google", "gastro online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-handwerker-anfragen",
    primaryKeyword: "handwerker seo case study",
    secondaryKeywords: ["anfragen automatisieren seo", "lead generierung handwerk", "elektriker marketing erfolg"],
    lsiKeywords: ["handwerker google ranking", "anfragen über google", "handwerk online marketing"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-fitnessstudio-corona",
    primaryKeyword: "fitnessstudio seo case study",
    secondaryKeywords: ["corona comeback fitness", "mitglieder gewinnen seo", "fitness marketing erfolg"],
    lsiKeywords: ["gym google ranking", "fitnessstudio online marketing", "nach corona mitglieder"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-hotel-direktbuchungen",
    primaryKeyword: "hotel seo case study",
    secondaryKeywords: ["direktbuchungen steigern", "booking alternative hotel", "hotel marketing erfolg"],
    lsiKeywords: ["boutique hotel seo", "hotel google ranking", "ota unabhängigkeit"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-friseur-stadtteile",
    primaryKeyword: "friseur seo case study",
    secondaryKeywords: ["multi location friseur", "stadtteil seo erfolg", "salon marketing google"],
    lsiKeywords: ["friseur google ranking", "3 standorte seo", "salon platz 1"],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },

  // =============================================
  // TROUBLESHOOTING
  // =============================================
  {
    slug: "gbp-suspendiert-reaktivieren",
    primaryKeyword: "google business profil suspendiert",
    secondaryKeywords: ["gbp suspendiert", "profil reaktivieren google", "suspension beheben"],
    lsiKeywords: ["google appeal", "soft suspension gbp", "hard suspension gbp"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-verifizierung-fehlgeschlagen",
    primaryKeyword: "google business verifizierung fehlgeschlagen",
    secondaryKeywords: ["gbp verifizierung", "postkarte nicht erhalten", "verifizierungscode google"],
    lsiKeywords: ["video verifizierung gbp", "verifizierung probleme", "google verifizierung hilfe"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "duplicate-listing-entfernen",
    primaryKeyword: "doppelte google einträge löschen",
    secondaryKeywords: ["duplicate listing entfernen", "google business duplicate", "mehrere google einträge"],
    lsiKeywords: ["duplicate finden", "doppelter eintrag maps", "einträge zusammenführen"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "ranking-ploetzlich-verschwunden",
    primaryKeyword: "google ranking verschwunden",
    secondaryKeywords: ["ranking einbruch", "google penalty", "ranking verloren plötzlich"],
    lsiKeywords: ["google ranking weg", "ranking diagnose", "algorithmus update ranking"],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "gbp-nicht-in-suche-sichtbar",
    primaryKeyword: "google business profil nicht sichtbar",
    secondaryKeywords: ["gbp nicht angezeigt", "google maps eintrag fehlt", "profil nicht gefunden"],
    lsiKeywords: ["gbp indexierung problem", "google business nicht sichtbar", "maps eintrag verschwunden"],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
];

// =============================================
// UTILITY FUNCTIONS
// =============================================

/** Get keyword assignment for a specific article */
export const getKeywordAssignment = (slug: string): KeywordAssignment | undefined => {
  return keywordMapping.find(k => k.slug === slug);
};

/** Get all articles targeting a specific primary keyword */
export const getArticlesByPrimaryKeyword = (keyword: string): KeywordAssignment[] => {
  return keywordMapping.filter(k => 
    k.primaryKeyword.toLowerCase().includes(keyword.toLowerCase())
  );
};

/** Detect potential keyword cannibalization (multiple articles targeting similar primary keywords) */
export const detectCannibalization = (): { keyword: string; slugs: string[] }[] => {
  const keywordMap = new Map<string, string[]>();
  
  for (const entry of keywordMapping) {
    const normalized = entry.primaryKeyword.toLowerCase().split(' ').sort().join(' ');
    if (!keywordMap.has(normalized)) {
      keywordMap.set(normalized, []);
    }
    keywordMap.get(normalized)!.push(entry.slug);
  }
  
  return Array.from(keywordMap.entries())
    .filter(([, slugs]) => slugs.length > 1)
    .map(([keyword, slugs]) => ({ keyword, slugs }));
};

/** Get all articles grouped by content type */
export const getArticlesByContentType = (): Record<string, KeywordAssignment[]> => {
  return keywordMapping.reduce((acc, entry) => {
    if (!acc[entry.contentType]) acc[entry.contentType] = [];
    acc[entry.contentType].push(entry);
    return acc;
  }, {} as Record<string, KeywordAssignment[]>);
};

/** Get keyword coverage stats */
export const getKeywordCoverageStats = () => {
  const total = keywordMapping.length;
  const byIntent = keywordMapping.reduce((acc, k) => {
    acc[k.searchIntent] = (acc[k.searchIntent] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const byVolume = keywordMapping.reduce((acc, k) => {
    acc[k.targetSearchVolume] = (acc[k.targetSearchVolume] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const byType = keywordMapping.reduce((acc, k) => {
    acc[k.contentType] = (acc[k.contentType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return { total, byIntent, byVolume, byType };
};
