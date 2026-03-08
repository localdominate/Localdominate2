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
  // =============================================
  // PILLAR PAGES
  // =============================================
  {
    slug: "ultimate-guide-local-seo",
    primaryKeyword: "local seo",
    secondaryKeywords: ["local seo guide", "lokale suchmaschinenoptimierung", "local seo strategie"],
    lsiKeywords: [
      "google business profil optimieren", "local seo ranking faktoren", "local seo dach",
      "lokale suche optimieren", "local seo anleitung", "lokale auffindbarkeit verbessern",
      "standortbezogene suchergebnisse", "local pack optimierung tipps",
      "regionale sichtbarkeit steigern", "google maps eintrag pflegen",
      "citations und nap daten pflegen", "lokale kundenakquise online"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "pillar",
    notes: "Cornerstone content — targets broadest Local SEO terms"
  },
  {
    slug: "technisches-local-seo-guide",
    primaryKeyword: "technisches local seo",
    secondaryKeywords: ["technical seo lokal", "localbusiness schema", "core web vitals local seo"],
    lsiKeywords: [
      "schema markup lokale unternehmen", "geo markup", "indexierung local seo",
      "site speed lokale website", "mobile seo lokal", "crawlbarkeit lokale seiten",
      "xml sitemap lokale urls", "robots.txt optimierung", "hreflang lokale sprachen",
      "server response time lokal", "lazy loading bilder lokal", "canonical tags standortseiten"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar",
    notes: "Technical pillar — covers Schema, CWV, Mobile-First, indexing"
  },
  {
    slug: "local-seo-strategie-kleine-unternehmen",
    primaryKeyword: "local seo strategie kleine unternehmen",
    secondaryKeywords: ["local seo kmu", "local seo kostenlos", "seo für kleine unternehmen"],
    lsiKeywords: [
      "local seo aktionsplan", "local seo dach", "90 tage seo plan",
      "lokale seo ohne agentur", "google business profil kmu",
      "bootstrapping seo strategie", "seo prioritäten kleines budget",
      "organische reichweite aufbauen", "lokale marktdurchdringung",
      "wettbewerbsvorteil durch seo", "diy seo für anfänger", "seo roi kleine unternehmen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-seo-ranking-faktoren-erklaert",
    primaryKeyword: "local seo ranking faktoren",
    secondaryKeywords: ["lokale ranking faktoren", "google local ranking", "local pack ranking faktoren"],
    lsiKeywords: [
      "local seo signale 2026", "gbp ranking faktoren", "bewertungen ranking einfluss",
      "proximity relevance prominence", "on-page signale lokal", "link signale lokale suche",
      "verhaltens-signale nutzer", "personalisierung suchergebnisse",
      "branchenspezifische gewichtung", "google algorithmus lokal aktualisiert",
      "click-through-rate lokales ranking", "dwell time einfluss local pack"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "ai-suche-lokale-unternehmen",
    primaryKeyword: "ai search optimization lokale unternehmen",
    secondaryKeywords: ["geo optimierung", "chatgpt local seo", "google ai overviews local"],
    lsiKeywords: [
      "llms.txt", "ai suchmaschinenoptimierung", "generative engine optimization",
      "perplexity optimierung lokal", "large language model optimierung",
      "structured data für ki", "zitierbare quellen erstellen",
      "answer engine optimization", "conversational search optimierung",
      "ki-gestützte suchergebnisse", "ai citation building", "maschinenlesbare inhalte"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-link-building-blueprint",
    primaryKeyword: "local link building",
    secondaryKeywords: ["lokale backlinks", "lokales linkbuilding", "backlinks lokale unternehmen"],
    lsiKeywords: [
      "ihk backlink", "vereinssponsoring seo", "lokale pr linkbuilding",
      "link building dach", "outreach templates lokal", "gastbeiträge lokale medien",
      "branchenverband verlinkung", "linkwürdige lokale inhalte erstellen",
      "broken link building lokal", "resource page outreach",
      "digitale pr kampagne regional", "lokale kooperationen backlinks"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "pillar"
  },
  {
    slug: "local-seo-checkliste-komplett",
    primaryKeyword: "local seo implementierung",
    secondaryKeywords: ["local seo maßnahmen", "lokale seo umsetzung", "local seo schritt für schritt"],
    lsiKeywords: [
      "seo implementierungsplan", "local seo phasen", "seo maßnahmen priorisiert",
      "onboarding checkliste seo", "quick wins local seo",
      "technische grundlagen prüfen", "gbp profil vervollständigen",
      "content audit durchführen", "backlink profil analysieren",
      "wöchentliche seo routine", "monatliche seo überprüfung", "seo fortschritt dokumentieren"
    ],
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
    lsiKeywords: [
      "lokale sichtbarkeit google maps", "maps seo guide", "local pack optimierung",
      "google maps algorithmus verstehen", "maps listing optimieren",
      "standort prominenz maps", "geo grid analyse",
      "maps fotos und bewertungen", "kartensuche optimierung",
      "google maps für unternehmen", "maps snippet optimierung", "lokale kartenanzeige"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "hub"
  },
  {
    slug: "google-business-profil-hub",
    primaryKeyword: "google business profil",
    secondaryKeywords: ["gbp optimierung", "google my business guide", "google business hub"],
    lsiKeywords: [
      "google business profil anlegen", "gbp tipps", "google unternehmensprofil",
      "gbp vollständigkeit score", "unternehmensbeschreibung optimieren",
      "gbp beiträge erstellen", "öffnungszeiten pflegen",
      "kategorien und attribute gbp", "produkte und dienstleistungen gbp",
      "gbp insights auswerten", "verifizierung abschließen", "fotos hochladen gbp"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "hub"
  },
  {
    slug: "local-seo-branchen-hub",
    primaryKeyword: "local seo branchen",
    secondaryKeywords: ["branchen seo guide", "local seo nach branche", "branchenspezifisches seo"],
    lsiKeywords: [
      "seo gastronomie", "seo handwerk", "seo gesundheit", "seo dienstleistungen",
      "branchenspezifische keywords", "wettbewerb nach branche",
      "nischenstrategien lokal", "saisonale branchenoptimierung",
      "branchenverzeichnisse spezifisch", "branchenportale nutzen",
      "lokale marktanalyse branche", "zielgruppe pro branche"
    ],
    searchIntent: "navigational",
    targetSearchVolume: "low",
    contentType: "hub"
  },
  {
    slug: "local-seo-staedte-hub",
    primaryKeyword: "local seo städte",
    secondaryKeywords: ["local seo berlin", "local seo münchen", "local seo wien"],
    lsiKeywords: [
      "städte seo guide", "regionales seo", "local seo dach städte",
      "stadtteil seo optimierung", "regionale suchvolumina",
      "stadtspezifische keywords", "metropol vs kleinstadt seo",
      "stadtviertel targeting", "lokale wettbewerbslandschaft",
      "geo-modifizierte suchanfragen", "regionale verzeichnisse", "stadtkarte seo"
    ],
    searchIntent: "navigational",
    targetSearchVolume: "low",
    contentType: "hub"
  },
  {
    slug: "bewertungen-reputation-hub",
    primaryKeyword: "google bewertungen management",
    secondaryKeywords: ["bewertungen strategie", "reputation management", "review management"],
    lsiKeywords: [
      "bewertungen sammeln", "negative bewertungen", "bewertungen antworten",
      "sterne-durchschnitt verbessern", "bewertungsportale überblick",
      "kundenvertrauen aufbauen", "rezensionsstrategie entwickeln",
      "social proof generieren", "bewertungsmarketing automatisieren",
      "reputation monitoring tools", "sentiment analyse bewertungen", "bewertungsvolumen steigern"
    ],
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
    lsiKeywords: [
      "google maps platz 1", "7 schritte maps ranking", "maps sichtbarkeit erhöhen",
      "gbp profil vollständig ausfüllen", "bewertungen aktiv einholen",
      "fotos regelmäßig hochladen", "lokale backlinks aufbauen",
      "google posts veröffentlichen", "nap konsistenz sicherstellen",
      "kategorien korrekt wählen", "radius sichtbarkeit erweitern", "engagement signale stärken"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster",
    notes: "Actionable how-to — differentiated from ranking-faktoren (theory) and algorithmus (explanation)"
  },
  {
    slug: "google-maps-seo-ranking-faktoren",
    primaryKeyword: "google maps ranking signale gewichtung",
    secondaryKeywords: ["ranking signale maps", "local pack signale prozent", "maps seo 2026 gewichtung"],
    lsiKeywords: [
      "gbp signale 32 prozent", "bewertungen gewichtung", "citations einfluss maps",
      "on-page signale gewichtung", "link signale gewichtung prozent",
      "verhaltens-signale local pack", "proximity gewichtung entfernung",
      "relevanz signale kategorie", "personalisierung google maps",
      "historische daten rankingeinfluss", "saisonale signalveränderungen", "signal-korrelation studien"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Signal weighting deep-dive — differentiated from algorithmus (concept) and verbessern (action)"
  },
  {
    slug: "wie-google-maps-ranking-funktioniert",
    primaryKeyword: "google maps algorithmus erklärt",
    secondaryKeywords: ["maps algorithmus proximity relevance prominence", "local pack algorithmus", "wie google maps funktioniert"],
    lsiKeywords: [
      "maps ranking erklärung", "drei säulen google maps", "algorithmus verständnis",
      "proximity berechnung entfernung", "relevanz bestimmung google",
      "bekanntheit online offline", "crawling indexierung maps",
      "maschinelles lernen google maps", "nutzersignale algorithmus",
      "lokaler suchalgorithmus evolution", "ranking modell vereinfacht", "algorithmische transparenz"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Conceptual explainer — differentiated from signale (data) and verbessern (action)"
  },
  {
    slug: "google-maps-spam-erkennen",
    primaryKeyword: "google maps spam erkennen",
    secondaryKeywords: ["spam melden google maps", "fake bewertungen melden", "google business spam"],
    lsiKeywords: [
      "keyword stuffing maps", "fake einträge melden", "maps betrug erkennen",
      "manipulierte fotos erkennen", "gefälschte standorte identifizieren",
      "spam fighting community", "google maps richtlinien verstöße",
      "wettbewerber spam melden", "spam auswirkung eigenes ranking",
      "google business profil richtlinien", "redressal formular google", "spam monitoring tools"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-konkurrenzanalyse",
    primaryKeyword: "google maps konkurrenzanalyse",
    secondaryKeywords: ["competitor analysis maps", "local pack analyse", "ranking analyse google maps"],
    lsiKeywords: [
      "wettbewerber maps", "konkurrenz überholen maps", "maps vergleichs template",
      "geo grid wettbewerber vergleich", "bewertungslücke analyse",
      "backlink profil vergleich lokal", "keyword gap analyse lokal",
      "gbp profil benchmarking", "marktanteil local pack",
      "wettbewerber stärken schwächen", "ranking position tracking", "share of local pack"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-ranking-case-studies",
    primaryKeyword: "google maps ranking case study",
    secondaryKeywords: ["local seo erfolg", "ranking verbessern fallstudie", "maps case study"],
    lsiKeywords: [
      "ranking von 0 auf 1", "local seo erfolgsgeschichte", "branchenvergleich maps",
      "vorher nachher ranking daten", "zeitrahmen ranking verbesserung",
      "maßnahmen und ergebnisse", "roi local seo messbar",
      "traffic steigerung lokal", "kundenanfragen wachstum",
      "umsatzsteigerung durch maps", "real world seo ergebnisse", "reproduzierbare strategien"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-audit-template",
    primaryKeyword: "google maps audit",
    secondaryKeywords: ["maps audit template", "gbp audit checkliste", "google maps checkliste"],
    lsiKeywords: [
      "local seo audit maps", "maps ranking audit", "google maps prüfpunkte",
      "profilvollständigkeit prüfen", "bewertungsprofil analysieren",
      "foto qualität bewerten", "nap konsistenz überprüfen",
      "kategorie audit gbp", "posting frequenz audit",
      "wettbewerber audit vorlage", "schwachstellen identifizieren", "audit scoring system"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-maps-ranking-tracker",
    primaryKeyword: "google maps ranking tracker",
    secondaryKeywords: ["local rank tracking", "grid tracking", "geo grid maps"],
    lsiKeywords: [
      "maps position tracken", "ranking monitoring lokal", "local falcon alternative",
      "bright local tracking", "geo grid radius analyse",
      "ranking schwankungen überwachen", "wöchentliches ranking reporting",
      "keyword position maps", "ranking alerts einrichten",
      "historische ranking daten", "multi standort tracking", "competitive tracking lokal"
    ],
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
    lsiKeywords: [
      "google unternehmensprofil einrichten", "google business profil vollständig", "gbp tipps 2026",
      "unternehmensbeschreibung keywords", "primäre sekundäre kategorien",
      "servicebereiche definieren", "attribute vollständig nutzen",
      "regelmäßige beiträge veröffentlichen", "fragen und antworten gbp",
      "website url optimiert verlinken", "buchungs-links hinzufügen", "profil performance steigern"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "gbp-fotos-optimieren",
    primaryKeyword: "google business fotos optimieren",
    secondaryKeywords: ["gbp bilder", "google maps bilder", "unternehmensfotos google"],
    lsiKeywords: [
      "foto optimierung gbp", "google business bildgrößen", "maps fotos hochladen",
      "coverphoto auswählen", "innenaufnahmen geschäft",
      "team fotos hochladen", "vorher nachher bilder",
      "bildqualität anforderungen gbp", "exif daten geo-tagging",
      "foto kategorien gbp", "visueller ersteindruck", "bildfrequenz ranking einfluss"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-kategorien-guide",
    primaryKeyword: "google business kategorien",
    secondaryKeywords: ["gbp category", "branchenkategorie google", "kategorie wählen gbp"],
    lsiKeywords: [
      "unternehmenskategorie google", "haupt nebenkategorie gbp", "google business branche",
      "kategorie relevanz ranking", "versteckte kategorien finden",
      "wettbewerber kategorien analysieren", "branchenspezifische kategorien",
      "multi-service kategorien", "dienstleistungs-kategorien gbp",
      "kategorie ändern auswirkung", "optimale kategorie kombination", "kategorie planner tool"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-business-messaging",
    primaryKeyword: "google business messaging",
    secondaryKeywords: ["gbp chat", "kundenkommunikation google", "google business nachrichten"],
    lsiKeywords: [
      "messaging einrichten gbp", "google chat kunden", "gbp messaging best practices",
      "antwortzeit messaging", "automatische begrüßung gbp",
      "lead generierung messaging", "kundenbindung chat",
      "messaging conversion rate", "nachrichtenvorlagen erstellen",
      "messaging benachrichtigungen", "datenschutz messaging", "chat-to-conversion funnel"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-produkte-services",
    primaryKeyword: "google business produkte",
    secondaryKeywords: ["gbp services", "google business dienstleistungen", "produkte hinzufügen gbp"],
    lsiKeywords: [
      "google business angebote", "gbp produkt katalog", "services eintragen google",
      "produktbeschreibung seo", "preise anzeigen gbp",
      "kategorisierung produkte gbp", "service area business produkte",
      "dienstleistungen strukturieren", "produktfotos optimieren",
      "saisonale angebote pflegen", "call to action produkte", "produkt sichtbarkeit maps"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "google-business-insights-verstehen",
    primaryKeyword: "google business insights",
    secondaryKeywords: ["gbp insights verstehen", "google business statistiken", "gbp performance"],
    lsiKeywords: [
      "gbp analytics", "google business daten", "profil aufrufe gbp",
      "suchanfragen auswertung gbp", "kundenaktionen insights",
      "foto-views analyse", "wegbeschreibung anfragen",
      "anruf-tracking gbp", "performance benchmark branche",
      "monatliche insights trends", "direkt vs discovery suche", "gbp traffic attribution"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-posts-ranking-faktor",
    primaryKeyword: "google posts",
    secondaryKeywords: ["gbp posts", "google business posts", "lokale posts google"],
    lsiKeywords: [
      "google posts erstellen", "posting frequenz gbp", "google posts ranking",
      "angebots-post erstellen", "event post gbp",
      "update post best practices", "call to action posts",
      "posts reichweite messen", "visueller content posts",
      "saisonale posting strategie", "posts und conversion", "automatisierte posts"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-oeffnungszeiten-sondertage",
    primaryKeyword: "google business öffnungszeiten",
    secondaryKeywords: ["gbp feiertage", "sonderöffnungszeiten google", "öffnungszeiten ändern gbp"],
    lsiKeywords: [
      "betriebsferien eintragen", "gbp sondertage", "feiertage google business",
      "vorübergehend geschlossen gbp", "saisonale öffnungszeiten",
      "abweichende öffnungszeiten feiertag", "mehr öffnungszeiten gbp",
      "frühaufsteher öffnung", "nachtöffnung eintragen",
      "öffnungszeiten konsistenz", "automatische feiertags-warnung", "stille stunden"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-attribute-richtig-nutzen",
    primaryKeyword: "google business attribute",
    secondaryKeywords: ["gbp attribute nutzen", "ausstattungsmerkmale google", "barrierefreiheit google business"],
    lsiKeywords: [
      "lgbtq freundlich gbp", "attribute für ranking", "gbp profil merkmale",
      "zahlungsarten attribut", "wifi vorhanden attribut",
      "rollstuhlzugänglich gbp", "frauengeführt attribut",
      "attribute nach branche", "gesundheits-attribute",
      "neue attribute frühzeitig nutzen", "attribut sichtbarkeit suche", "differenzierung durch attribute"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "gbp-mehrere-standorte",
    primaryKeyword: "google business mehrere standorte",
    secondaryKeywords: ["multi location gbp", "standortgruppen google", "bulk upload gbp"],
    lsiKeywords: [
      "filialisten google business", "gbp skalieren", "mehrere profile verwalten",
      "standortgruppen organisieren", "bulk verifizierung gbp",
      "zentrale verwaltung filialen", "konsistenz multi location",
      "individuelle standort-anpassung", "performance vergleich standorte",
      "api integration gbp", "location group management", "markenrichtlinien standorte"
    ],
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
    lsiKeywords: [
      "kunden um bewertung bitten", "qr code bewertung", "bewertungslink google", "5 sterne bewertung",
      "bewertungs-funnel erstellen", "email nach besuch senden",
      "sms bewertungsanfrage", "persönlich um bewertung bitten",
      "bewertungsrate erhöhen", "zeitpunkt bewertungsanfrage",
      "incentivierung grenzen", "authentische rezensionen fördern"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "negative-google-bewertungen",
    primaryKeyword: "negative google bewertungen",
    secondaryKeywords: ["negative bewertung antworten", "schlechte bewertung reagieren", "1 stern bewertung"],
    lsiKeywords: [
      "bewertung melden", "rufschädigung google", "bewertungsmanagement",
      "krisenmanagement reputation", "deeskalation technik bewertung",
      "konstruktive antwort formulieren", "aus kritik lernen",
      "negativspirale durchbrechen", "sentiment umkehren",
      "reputationsschutz strategie", "proaktives beschwerdemanagement", "öffentliche entschuldigung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-antworten-vorlagen",
    primaryKeyword: "bewertungen antworten vorlagen",
    secondaryKeywords: ["google bewertung antwort", "review antwort vorlage", "rezension beantworten"],
    lsiKeywords: [
      "5 sterne antwort", "1 stern antwort vorlage", "bewertung beantworten tipps",
      "antwort personalisieren", "dankesantwort vorlage",
      "beschwerden professionell beantworten", "branchenspezifische antwortvorlagen",
      "antwortzeit optimieren", "seo-optimierte bewertungsantwort",
      "keywords in antwort einbauen", "tonalität bewertungsantwort", "follow-up nach negativer bewertung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-bewertung-loeschen-anleitung",
    primaryKeyword: "google bewertung löschen",
    secondaryKeywords: ["fake bewertung melden", "bewertung entfernen google", "negative bewertung löschen"],
    lsiKeywords: [
      "google review löschen", "unangemessene bewertung", "bewertung anwalt",
      "richtlinienverstoß google bewertung", "support ticket bewertung",
      "eskalation google support", "social media beschwerde google",
      "rechtliche schritte bewertung", "abmahnung fake bewertung",
      "nachweis erbringen google", "löschquote einschätzen", "alternative zu löschen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "review-schema-implementierung",
    primaryKeyword: "review schema markup",
    secondaryKeywords: ["aggregaterating schema", "sterne google suche", "rich snippets bewertungen"],
    lsiKeywords: [
      "schema markup bewertungen", "json-ld review", "bewertungssterne serp",
      "review snippet validierung", "schema testing tool bewertungen",
      "product review schema", "local business review schema",
      "sterne snippets ctr einfluss", "bewertungszähler anzeige",
      "google richtlinien review schema", "self-serving review vermeiden", "aggregated rating berechnung"
    ],
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
    lsiKeywords: [
      "stadt keywords", "branche + ort keywords", "keyword tools kostenlos", "suchvolumen lokal",
      "geo-modifizierte suchbegriffe", "implizite lokale suchanfragen",
      "keyword schwierigkeit lokal", "near me suchanfragen",
      "long tail lokal", "saisonale keywords identifizieren",
      "wettbewerber keywords ausspionieren", "suchintention lokal verstehen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-keyword-research-template",
    primaryKeyword: "keyword recherche template",
    secondaryKeywords: ["keyword research template", "lokale keywords vorlage", "keyword mapping template"],
    lsiKeywords: [
      "keyword spreadsheet", "local seo keywords vorlage", "keyword recherche workflow",
      "keyword clustering vorlage", "suchvolumen datenbank",
      "keyword priorisierung matrix", "wettbewerbs-analyse keywords",
      "keyword tracking spreadsheet", "content plan nach keywords",
      "keyword lücken identifizieren", "quarterly keyword review", "keyword opportunity score"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-content-marketing",
    primaryKeyword: "local content marketing",
    secondaryKeywords: ["lokales content marketing", "content strategie lokal", "lokale inhalte"],
    lsiKeywords: [
      "lokaler blog", "stadteil content", "regionale themen seo",
      "community storytelling", "lokale events berichten",
      "nachbarschafts-guide erstellen", "lokale expertise zeigen",
      "user generated content lokal", "saisonale content kalender",
      "lokale partnerschaften content", "stadtteil portrait", "lokale nachrichtenthemen aufgreifen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-notdienst-keywords",
    primaryKeyword: "notdienst keywords seo",
    secondaryKeywords: ["emergency keywords", "sofort hilfe seo", "24 stunden service seo"],
    lsiKeywords: [
      "dringende suche optimierung", "notfall keywords google", "notdienst google ads",
      "sofortige verfügbarkeit signalisieren", "notdienst landing page",
      "click-to-call optimierung", "notfall schema markup",
      "bereitschaftsdienst keywords", "wochenend notdienst seo",
      "schnelle reaktionszeit hervorheben", "emergency service radius", "akut-suche intent"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "lokale-keyword-kannibalisierung",
    primaryKeyword: "keyword kannibalisierung lokal",
    secondaryKeywords: ["duplicate content lokal", "lokale seo probleme", "seiten konkurrenz seo"],
    lsiKeywords: [
      "kannibalisierung vermeiden", "url konsolidierung", "301 redirect lokal",
      "content zusammenführen", "canonical tag strategie",
      "keyword überlappung erkennen", "search console kannibalisierung",
      "ranking schwankungen diagnose", "interne verlinkung kannibalisierung",
      "content audit durchführen", "themen entflechten", "seitenarchitektur bereinigen"
    ],
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
    lsiKeywords: [
      "localbusiness schema", "rich snippets lokal", "schema markup generator",
      "schema typen auswahl lokal", "service schema markup",
      "öffnungszeiten schema", "geo coordinates schema",
      "sameAs schema verknüpfung", "schema verschachtelung",
      "schema validierung google", "schema testing tool", "schema und ai suche"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "localbusiness-schema-implementierung",
    primaryKeyword: "localbusiness schema implementieren",
    secondaryKeywords: ["schema markup code", "json-ld localbusiness", "structured data lokale website"],
    lsiKeywords: [
      "schema branche", "öffnungszeiten schema", "multi-location schema",
      "schema code beispiele", "json-ld generator lokal",
      "address schema postal", "telephone schema format",
      "area served schema", "price range schema",
      "payment accepted schema", "department schema multi", "schema debugging anleitung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "schema-strategie-dokument",
    primaryKeyword: "schema strategie",
    secondaryKeywords: ["structured data strategie", "schema markup guide", "json-ld strategie"],
    lsiKeywords: [
      "article schema", "faqpage schema", "howto schema", "localbusiness schema auswahl",
      "schema entscheidungsmatrix", "rich results maximieren",
      "schema stack empfehlung", "schema pro seitentyp",
      "schema rollout priorisierung", "schema monitoring",
      "wettbewerber schema analyse", "schema roi messen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "core-web-vitals-local-seo",
    primaryKeyword: "core web vitals local seo",
    secondaryKeywords: ["page speed lokal", "local seo performance", "lcp fid cls"],
    lsiKeywords: [
      "website geschwindigkeit lokal", "pagespeed insights", "mobile performance",
      "largest contentful paint optimieren", "cumulative layout shift vermeiden",
      "interaction to next paint", "bildkomprimierung lokal",
      "lazy loading strategie", "critical css rendering",
      "cdn für lokale website", "third party script optimierung", "performance budget setzen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "mobile-local-seo",
    primaryKeyword: "mobile local seo",
    secondaryKeywords: ["mobile first seo", "local seo mobile", "mobile seo optimierung"],
    lsiKeywords: [
      "responsive design seo", "mobile ux lokal", "page speed mobile",
      "tap target optimierung", "mobile first indexierung",
      "mobile suche unterwegs", "click to call mobile",
      "amp lokale seiten", "mobile checkout optimierung",
      "touch freundliche navigation", "mobile bounce rate reduzieren", "mobile serp features"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-landing-pages",
    primaryKeyword: "lokale landing pages erstellen",
    secondaryKeywords: ["standort seiten seo", "geo landing pages", "multi location seiten"],
    lsiKeywords: [
      "stadtteil seiten", "location pages ranking", "lokale landing page template",
      "einzigartige inhalte pro standort", "lokale referenzen einbauen",
      "stadtteil spezifische informationen", "hero image lokal",
      "conversion optimierung lokal", "vertrauenselemente einbauen",
      "lokale testimonials anzeigen", "anfahrt und kontakt prominent", "lokale handlungsaufforderung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "multi-location-seo",
    primaryKeyword: "multi location website architektur",
    secondaryKeywords: ["standortseiten url struktur", "multi location schema markup", "mehrere standorte website"],
    lsiKeywords: [
      "multi location template", "standort seiten skalieren", "url struktur filialen",
      "subdomain vs subfolder standorte", "location page template",
      "skalierbare seitenarchitektur", "programmatische standortseiten",
      "canonical strategie multi location", "interne verlinkung standorte",
      "standort-spezifischer content", "hreflang multi region", "location hub seite"
    ],
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
    lsiKeywords: [
      "ki einfluss local seo", "voice search 2026", "ai overviews lokal",
      "zero click entwicklung", "hyper-lokale suche",
      "google business profil updates 2026", "suchverhalten änderungen",
      "lokale suche mobile first", "datenschutz einfluss seo",
      "personalisierte suchergebnisse lokal", "ar in lokaler suche", "social search lokal"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "nap-konsistenz-local-seo",
    primaryKeyword: "nap konsistenz",
    secondaryKeywords: ["nap daten", "name adresse telefon seo", "citations konsistenz"],
    lsiKeywords: [
      "nap audit", "nap fehler finden", "einheitliche firmendaten",
      "inkonsistente daten erkennen", "nap über verzeichnisse abgleichen",
      "adressformat standardisieren", "telefonnummer format einheitlich",
      "firmennamen schreibweise", "historische nap einträge bereinigen",
      "nap monitoring automatisieren", "daten aggregatoren abgleich", "nap score berechnen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "citation-strategie-verzeichnisse",
    primaryKeyword: "local citations aufbauen",
    secondaryKeywords: ["branchenverzeichnisse seo", "lokale verzeichnisse", "citation strategie"],
    lsiKeywords: [
      "nap aufbau", "wichtigste verzeichnisse dach", "citations priorisierung",
      "primäre daten aggregatoren", "branchenspezifische verzeichnisse",
      "citation velocity", "strukturierte vs unstrukturierte citations",
      "citation qualität vs quantität", "manuelle vs automatische einträge",
      "tier 1 tier 2 verzeichnisse", "google data partner", "citation audit workflow"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "citation-tracking-template",
    primaryKeyword: "citation tracking",
    secondaryKeywords: ["citation spreadsheet", "nap tracking vorlage", "verzeichnis tracking"],
    lsiKeywords: [
      "citation audit", "local citations template", "citation management",
      "verzeichnis status übersicht", "login daten verzeichnisse pflegen",
      "nap korrekturen dokumentieren", "citation score berechnen",
      "quartals review citations", "priorität nach domain authority",
      "citation lücken identifizieren", "automatisiertes citation monitoring", "duplikat einträge erkennen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-citations-2025",
    primaryKeyword: "top verzeichnisse dach 2026",
    secondaryKeywords: ["branchenbücher relevanz 2026", "citation quellen branche", "verzeichnis ranking"],
    lsiKeywords: [
      "nap einträge branche", "verzeichnis domain authority", "branchenspezifische citations",
      "gelbeseiten relevanz 2026", "yelp deutschland einfluss",
      "tripadvisor gastro citation", "jameda ärzte verzeichnis",
      "handwerker portale seo", "meinestadt relevanz",
      "apple maps connect", "bing places eintrag", "branchenportal auswahl matrix"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-link-building",
    primaryKeyword: "lokaler linkaufbau",
    secondaryKeywords: ["backlinks lokal", "linkbuilding lokal", "link building lokale unternehmen"],
    lsiKeywords: [
      "sponsoring backlinks", "vereine links", "lokale presse backlinks",
      "community engagement links", "gastbeiträge lokale blogs",
      "bildungseinrichtungen partnerschaften", "kammer und verband links",
      "lokale resource pages", "charity und sponsoring backlinks",
      "business netzwerk verlinkung", "lokale event-seiten links", "nachbarschafts-kooperationen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-audit-checkliste",
    primaryKeyword: "local seo audit diagnose",
    secondaryKeywords: ["seo ist-analyse", "local seo scoring", "seo diagnose tool"],
    lsiKeywords: [
      "local seo check", "website audit lokal", "gbp audit scoring",
      "technischer seo check lokal", "on-page audit checkliste",
      "backlink profil bewertung", "citation audit durchführen",
      "bewertungs-analyse diagnose", "content gap identifizieren",
      "wettbewerber benchmark audit", "prioritäten aus audit ableiten", "audit report erstellen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "wettbewerbsanalyse-local-seo",
    primaryKeyword: "wettbewerbsanalyse local seo",
    secondaryKeywords: ["konkurrenzanalyse seo", "local seo wettbewerb", "konkurrenz analysieren"],
    lsiKeywords: [
      "wettbewerber ausspionieren seo", "local seo vergleich", "konkurrenz überholen",
      "gbp profil vergleich", "bewertungs gap analyse",
      "backlink gap wettbewerber", "content gap konkurrenz",
      "keyword overlap analyse", "share of voice lokal",
      "wettbewerber monitoring tools", "strategische differenzierung", "lokale marktposition bestimmen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-vs-organisch",
    primaryKeyword: "local seo vs organic seo",
    secondaryKeywords: ["unterschied local seo", "local pack vs organic", "lokales vs organisches seo"],
    lsiKeywords: [
      "wann local seo", "seo vergleich", "local pack erklärt",
      "organische ergebnisse vs karte", "budget verteilung local vs organic",
      "synergie effekte kombiniert", "ranking faktoren unterschiede",
      "klickverhalten local pack vs organisch", "conversion rate vergleich",
      "sichtbarkeit beides nutzen", "hybrid seo strategie", "roi vergleich local organic"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-vs-maps-seo",
    primaryKeyword: "local seo vs maps seo",
    secondaryKeywords: ["unterschied local seo maps seo", "google maps seo", "lokale seo erklärt"],
    lsiKeywords: [
      "maps optimierung vs website seo", "local pack vs organisch",
      "gbp optimierung vs on-page", "maps spezifische signale",
      "website seo für lokales ranking", "zusammenspiel maps und website",
      "local finder vs local pack", "maps alleinig reicht nicht",
      "ganzheitliche lokale strategie", "serp feature vergleich", "touchpoints lokale suche"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-automation",
    primaryKeyword: "bewertungen automatisieren",
    secondaryKeywords: ["review generation", "mehr bewertungen automatisch", "rezensionen sammeln"],
    lsiKeywords: [
      "bewertungs workflow", "automatische bewertungsanfrage", "review funnel",
      "email drip campaign bewertung", "sms follow-up kunden",
      "crm integration bewertung", "timing bewertungsanfrage",
      "a/b test bewertungsmail", "bewertungsrate optimieren",
      "multi-plattform bewertungen", "bewertung incentivierung ethisch", "review gating vermeiden"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "e-e-a-t-lokale-unternehmen",
    primaryKeyword: "e-e-a-t lokale unternehmen",
    secondaryKeywords: ["expertise authority trust lokal", "e-a-t seo", "lokale autorität aufbauen"],
    lsiKeywords: [
      "vertrauen aufbauen seo", "glaubwürdigkeit google", "e-e-a-t signale",
      "experience signal lokal", "expertise nachweisen website",
      "authority durch backlinks", "trust durch bewertungen",
      "autoren-profile erstellen", "über-uns seite e-e-a-t",
      "zertifizierungen anzeigen", "referenzen und fallstudien", "lokale presseerwähnungen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-seo-fuer-neugruender",
    primaryKeyword: "local seo neugründer",
    secondaryKeywords: ["startup local seo", "existenzgründung seo", "neue firma google"],
    lsiKeywords: [
      "lokales marketing startup", "google business neu anlegen", "seo von null",
      "domain auswahl neugründung", "erste backlinks aufbauen",
      "schnellstart local seo", "gbp sofort einrichten",
      "erste bewertungen bekommen", "budget planung seo startup",
      "sichtbarkeit von anfang an", "branchenauswahl neugründer", "grundlagen vor fortgeschritten"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-mehrstufig-unternehmen",
    primaryKeyword: "franchise seo gbp management",
    secondaryKeywords: ["gbp management filialen", "markenkonsistenz multi location", "franchise google business"],
    lsiKeywords: [
      "zentrale gbp steuerung", "nap konsistenz franchise", "lokale autonomie filialen",
      "franchise marketing richtlinien", "standortübergreifende strategie",
      "markenbild einheitlich halten", "individuelle standort-anpassung erlauben",
      "performance benchmark filialen", "zentrale vs dezentrale steuerung",
      "franchise-partner schulen", "skalierbares review management", "multi standort reporting"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "lokale-events-marketing",
    primaryKeyword: "lokale events seo",
    secondaryKeywords: ["event marketing seo", "sponsoring seo", "veranstaltungen marketing"],
    lsiKeywords: [
      "lokale pr events", "event schema markup", "community engagement seo",
      "event landing page erstellen", "lokale presse event ankündigung",
      "social media event promotion", "event nachbereitung content",
      "sponsoring sichtbarkeit seo", "workshop marketing lokal",
      "networking events unternehmen", "event-backlinks gewinnen", "community aufbau events"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "lokale-influencer-kooperationen",
    primaryKeyword: "lokale influencer marketing",
    secondaryKeywords: ["micro influencer lokal", "influencer kooperationen", "lokale reichweite influencer"],
    lsiKeywords: [
      "influencer finden lokal", "kooperation aufbauen", "micro influencer marketing",
      "nano influencer strategie", "content creation kooperation",
      "instagram stories lokal", "tiktok lokales marketing",
      "influencer roi messen", "authentische partnerschaften",
      "food blogger kooperation", "lokale meinungsführer", "user generated content influencer"
    ],
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
    lsiKeywords: [
      "local seo kostenlos", "seo lernen", "kostenlose seo strategie",
      "google search console kostenlos", "google analytics einrichten",
      "pagespeed insights gratis", "keyword recherche kostenlos",
      "seo grundlagen anfänger", "schritt für schritt seo lernen",
      "kostenlose seo bildung", "diy seo ressourcen", "open source seo tools"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tools-2026",
    primaryKeyword: "local seo tools",
    secondaryKeywords: ["seo software lokal", "kostenlose seo tools", "seo suite lokal"],
    lsiKeywords: [
      "local seo tool vergleich", "gbp tools", "ranking tracker tools",
      "bright local alternative", "whitespark tools", "semrush lokal",
      "moz local", "citation finder tools", "review monitoring software",
      "local seo dashboard", "all-in-one local seo plattform", "tool stack empfehlung"
    ],
    searchIntent: "commercial",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "kostenlose-local-seo-audit-tools",
    primaryKeyword: "kostenlose local seo audit tools",
    secondaryKeywords: ["free seo tools", "local seo check kostenlos", "seo analyse kostenlos"],
    lsiKeywords: [
      "audit tool vergleich", "gratis seo audit", "website check kostenlos",
      "google lighthouse lokal", "screaming frog free version",
      "schema validator kostenlos", "mobile friendly test",
      "pagespeed check gratis", "backlink checker free",
      "citation consistency checker", "serp preview tool", "sitemap generator gratis"
    ],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "seo-toolbox-kostenlose-ressourcen",
    primaryKeyword: "seo toolbox",
    secondaryKeywords: ["kostenlose seo ressourcen", "seo werkzeuge", "seo hilfsmittel"],
    lsiKeywords: [
      "seo tools sammlung", "gratis seo hilfe", "seo ressourcen liste",
      "lesezeichen sammlung seo", "seo browser extensions",
      "chrome extensions seo", "seo bookmarks organisieren",
      "workflow optimierung seo", "produktivität seo tools",
      "kostenloser seo werkzeugkasten", "seo learning ressourcen", "community foren seo"
    ],
    searchIntent: "commercial",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-business-api-agenturen",
    primaryKeyword: "google business api",
    secondaryKeywords: ["gbp api", "seo automatisierung api", "agentur tools api"],
    lsiKeywords: [
      "google business api einrichten", "gbp skalierung", "api für agenturen",
      "mybusiness api documentation", "batch updates api",
      "review api zugriff", "insights api daten",
      "location management api", "api authentifizierung oauth",
      "api rate limits gbp", "programmatisches gbp management", "white-label gbp tools"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-checkliste-pdf",
    primaryKeyword: "local seo checkliste pdf",
    secondaryKeywords: ["seo checkliste download", "checkliste ausdrucken", "kostenlose seo checkliste"],
    lsiKeywords: [
      "pdf download seo", "checkliste abhaken", "local seo pdf",
      "druckbare seo checkliste", "offline seo referenz",
      "checkliste für team teilen", "onboarding dokument seo",
      "mitarbeiter schulung seo", "quick reference card",
      "pocket guide local seo", "checkliste laminieren büro", "action items abhaken"
    ],
    searchIntent: "transactional",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "bewertungs-qr-codes",
    primaryKeyword: "bewertungs qr code erstellen",
    secondaryKeywords: ["google review qr code", "bewertung link qr", "rezension qr code"],
    lsiKeywords: [
      "qr code generator bewertung", "bewertung vereinfachen", "qr code design",
      "aufsteller bewertungs-qr", "tischkarte mit qr code",
      "kassenbereich qr code", "visitenkarte review link",
      "qr code tracking bewertung", "dynamischer qr code",
      "branding qr code", "scan-to-review workflow", "qr code platzierung tipps"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-monthly-checklist",
    primaryKeyword: "local seo monatliche checkliste",
    secondaryKeywords: ["monatliche seo routine", "local seo pflege", "seo maintenance"],
    lsiKeywords: [
      "monatliches seo", "local seo wochenplan", "regelmäßige seo aufgaben",
      "gbp monatlich aktualisieren", "bewertungen monatlich prüfen",
      "ranking monatlich tracken", "content kalender pflegen",
      "citation check monatlich", "performance review monatlich",
      "wettbewerber check routine", "saisonale anpassungen", "seo routine automatisieren"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-strategy-planner",
    primaryKeyword: "local seo aufgabenplan",
    secondaryKeywords: ["seo strategy planner", "seo aufgaben checkliste", "local seo budget planung"],
    lsiKeywords: [
      "seo phasen plan", "49 aufgaben seo", "seo budget schätzung",
      "aufgaben priorisieren impact effort", "team verantwortlichkeiten seo",
      "zeitaufwand pro aufgabe schätzen", "meilensteine definieren",
      "ressourcenplanung seo projekt", "seo projektmanagement",
      "agile seo planung", "sprint basierte seo umsetzung", "seo backlog erstellen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-roadmap-90-tage",
    primaryKeyword: "local seo roadmap",
    secondaryKeywords: ["90 tage local seo plan", "seo fahrplan", "local seo timeline"],
    lsiKeywords: [
      "seo wochenplan", "lokale seo roadmap", "seo implementierung zeitplan",
      "phase 1 grundlagen", "phase 2 content aufbau",
      "phase 3 link building", "wochen-meilensteine seo",
      "gantt chart seo projekt", "fortschritt visualisieren",
      "erste ergebnisse erwarten", "realistic timeline seo", "quick wins erste wochen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-reporting-template",
    primaryKeyword: "local seo reporting",
    secondaryKeywords: ["local seo report vorlage", "seo reporting template", "local seo kpis"],
    lsiKeywords: [
      "google business report", "local seo metriken", "monatlicher seo report",
      "stakeholder reporting seo", "dashboard erstellen seo",
      "visualisierung ranking daten", "roi berechnung seo bericht",
      "executive summary seo", "vorher nachher vergleich report",
      "client reporting template", "automatisiertes reporting", "kpi trends visualisieren"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tracking-kpis",
    primaryKeyword: "local seo kpis",
    secondaryKeywords: ["seo tracking lokal", "local seo reporting", "google analytics lokal"],
    lsiKeywords: [
      "kpi dashboard seo", "seo erfolg messen", "gbp insights kpis",
      "conversion tracking lokal", "telefon anruf tracking",
      "wegbeschreibung anfragen messen", "website klicks gbp tracken",
      "ranking position als kpi", "bewertungswachstum kpi",
      "organischer traffic lokal", "cost per acquisition lokal", "customer lifetime value seo"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-jahresplanung",
    primaryKeyword: "local seo jahresplan",
    secondaryKeywords: ["seo kalender", "monatliche seo aufgaben", "seo planung"],
    lsiKeywords: [
      "marketing kalender", "seo jahresplanung vorlage", "saisonales seo",
      "quartalsziele seo definieren", "saisonale content planung",
      "feiertage marketing kalender", "budget quartalsweise planen",
      "seo review quartalsweise", "jahresend audit vorbereiten",
      "neujahr seo ziele setzen", "branchenspezifische hochsaison", "off-season optimierung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fehler",
    primaryKeyword: "local seo fehler",
    secondaryKeywords: ["häufige seo fehler", "local seo mistakes", "seo fehler vermeiden"],
    lsiKeywords: [
      "seo probleme lösen", "typische local seo fehler", "seo anfänger fehler",
      "nap inkonsistenz fehler", "fehlende bewertungs-strategie",
      "duplicate listings übersehen", "schema markup vergessen",
      "mobile optimierung vernachlässigen", "keyword stuffing vermeiden",
      "gbp unvollständig lassen", "interne verlinkung ignorieren", "analytics nicht einrichten"
    ],
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
    lsiKeywords: [
      "generative engine optimization", "ai suche lokal", "perplexity seo",
      "answer engine optimization strategie", "llm ranking faktoren",
      "zitierbarkeit inhalte optimieren", "strukturierte antworten bereitstellen",
      "conversational query optimierung", "ai assistant sichtbarkeit",
      "maschinenlesbarer content", "entity disambiguation", "knowledge graph integration ai"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "website-content-ai-suchmaschinen",
    primaryKeyword: "website content ai suchmaschinen",
    secondaryKeywords: ["content struktur ai", "schema markup ai", "llms.txt"],
    lsiKeywords: [
      "website ai optimierung", "chatgpt seo content", "perplexity optimierung",
      "fact-first content erstellen", "direkte antworten strukturieren",
      "zitierbare absätze schreiben", "data-ai-summary attribute",
      "speakable content erstellen", "maschinen-freundliche formatierung",
      "tabellen und listen für ai", "definitionsboxen ai optimiert", "zusammenfassung am anfang"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "entity-seo-guide",
    primaryKeyword: "entity seo",
    secondaryKeywords: ["knowledge graph optimieren", "schema markup entity", "sameAs seo"],
    lsiKeywords: [
      "structured data entity", "ai seo entität", "knowledge panel optimieren",
      "entitäten verknüpfung schema", "wikidata eintrag erstellen",
      "brand entity aufbauen", "lokale entität google",
      "co-occurrence entitäten", "entity salience scoring",
      "disambiguierung optimieren", "entity authority aufbauen", "knowledge vault integration"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "semantic-seo-topical-authority",
    primaryKeyword: "semantic seo",
    secondaryKeywords: ["topical authority", "topic cluster seo", "themenautorität aufbauen"],
    lsiKeywords: [
      "pillar page strategie", "interne verlinkung semantisch", "semantische signale",
      "topic cluster architektur", "content gap semantisch füllen",
      "themenabdeckung vollständig", "co-occurrence keywords",
      "natural language processing seo", "tf-idf optimierung",
      "semantische relevanz messen", "content tiefe vs breite", "topical map erstellen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-voice-search",
    primaryKeyword: "voice search local seo",
    secondaryKeywords: ["sprachsuche optimieren", "local seo voice", "alexa siri google seo"],
    lsiKeywords: [
      "conversational keywords", "featured snippets voice", "voice first strategie",
      "natürliche sprache content", "frage-antwort format optimieren",
      "position zero erreichen", "speakable schema markup",
      "voice assistant optimierung", "long tail voice queries",
      "lokale sprachsuche unterwegs", "voice commerce lokal", "action queries voice"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "ai-overviews-local-seo",
    primaryKeyword: "ai overviews auswirkungen local pack",
    secondaryKeywords: ["ai overviews klickrate", "local pack ctr ai", "ai overviews sichtbarkeit"],
    lsiKeywords: [
      "ki suche klickraten daten", "ai overviews anpassung", "local pack veränderungen ai",
      "traffic verlust ai overviews", "ctr rückgang messung",
      "branded queries ai impact", "informational queries betroffen",
      "featured snippet kannibaliserung ai", "serp real estate verschiebung",
      "nutzerverhaltens änderung ai", "scroll tiefe ai overviews", "impressionen vs klicks ai"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Impact/data focus — differentiated from google-ai-overviews (optimization strategies)"
  },
  {
    slug: "google-ai-overviews-local-seo",
    primaryKeyword: "google ai overviews optimieren",
    secondaryKeywords: ["ai overviews optimierung strategie", "google ai suche vorbereitung", "ai overviews ranking"],
    lsiKeywords: [
      "ai overviews lokal optimieren", "google ai ergebnisse strategie", "ki suche google optimierung",
      "zitierquelle werden ai", "fact-first content strategie",
      "strukturierte daten ai overviews", "autorität für ai zitation",
      "e-e-a-t für ai ranking", "lokale expertise ai signals",
      "ai overview source analyse", "content format ai optimiert", "snippet bait für ai"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster",
    notes: "Strategy/optimization focus — differentiated from ai-overviews-local-seo (impact analysis)"
  },
  {
    slug: "ki-tools-local-seo",
    primaryKeyword: "ki tools local seo",
    secondaryKeywords: ["ai seo tools", "ki seo werkzeuge", "automatisierung seo ki"],
    lsiKeywords: [
      "chatgpt für seo", "ki content erstellung", "ai seo workflow",
      "automatisierte keyword recherche ki", "content optimierung ai tools",
      "ki-gestützte wettbewerbsanalyse", "ai audit tools",
      "review analyse ki", "schema generator ki",
      "ki reporting automatisierung", "prompt engineering seo", "ai workflow effizienz"
    ],
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
    lsiKeywords: [
      "ai seo zukunft", "ar lokal", "voice search zukunft",
      "augmented reality lokale suche", "social commerce lokal",
      "multimodale suche trends", "video seo lokal",
      "privacy first seo", "cookieless tracking lokal",
      "generative search evolution", "hyper-personalisierung", "predictive search lokal"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "zero-click-searches-local-pack",
    primaryKeyword: "zero click searches",
    secondaryKeywords: ["no click searches", "local pack zero click", "serp features"],
    lsiKeywords: [
      "null klick suche", "zero click strategie", "local pack ohne klick",
      "direct answer box", "knowledge panel informationen",
      "featured snippet sättigung", "serp feature dominanz",
      "impression ohne klick nutzen", "brand awareness zero click",
      "telefon-klick statt website", "maps aktion direkt", "conversion ohne website-besuch"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "google-sge-lokale-suche",
    primaryKeyword: "google sge prognose vorbereitung",
    secondaryKeywords: ["search generative experience prognose", "sge zeitleiste", "sge vorbereitung lokal"],
    lsiKeywords: [
      "generative search zukunft", "local seo sge readiness", "sge kmu vorbereitung",
      "conversational search journey", "ai integration google suche",
      "sge rollout timeline dach", "content anpassung sge",
      "lokale fragen sge beantworten", "sge source werden",
      "fact-checked content sge", "multi-step queries lokal", "sge auswirkung kmu"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-statistiken-daten",
    primaryKeyword: "local seo statistiken",
    secondaryKeywords: ["local seo daten", "local seo benchmarks", "ranking faktoren statistik"],
    lsiKeywords: [
      "bewertungsstatistiken", "lokale suche zahlen", "google business profil statistiken",
      "branchenspezifische seo daten", "conversion rate lokal benchmarks",
      "mobile suche anteil lokal", "near me suchanfragen wachstum",
      "durchschnittliche klickrate local pack", "bewertungen durchschnitt branche",
      "ranking verbesserung zeitraum", "roi statistiken local seo", "studien lokale suche"
    ],
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
    lsiKeywords: [
      "speisekarte seo", "restaurant bewertungen", "gastronomie online marketing",
      "menu schema markup", "tischreservierung online",
      "food fotografie seo", "restaurant social media",
      "delivery keywords restaurant", "saisonale speisekarte content",
      "lieferservice seo lokal", "restaurant event marketing", "gastro influencer kooperation"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-handwerker",
    primaryKeyword: "local seo handwerker",
    secondaryKeywords: ["handwerker marketing google", "contractor seo", "handwerk online marketing"],
    lsiKeywords: [
      "elektriker seo", "maler seo", "klempner google maps",
      "notdienst handwerker keywords", "vorher nachher projekte zeigen",
      "handwerker bewertungen strategie", "service area business handwerk",
      "saisonale aufträge handwerk", "referenzprojekte als content",
      "handwerker portal profile", "meisterbetrieb hervorheben", "handwerker leadgenerierung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-aerzte-praxen",
    primaryKeyword: "local seo ärzte",
    secondaryKeywords: ["arzt seo", "praxis marketing", "patientengewinnung google"],
    lsiKeywords: [
      "jameda seo", "ymyl arzt", "arztpraxis online marketing",
      "patienten bewertungen verwalten", "datenschutz arzt website",
      "behandlungsspektrum content", "online terminbuchung seo",
      "gesundheitsportal profile", "ärzte e-e-a-t anforderungen",
      "medizinische fachsprache seo", "patientenaufklärung content", "praxis team vorstellen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-anwaelte-kanzleien",
    primaryKeyword: "local seo anwälte",
    secondaryKeywords: ["kanzlei marketing", "anwalt seo", "mandantengewinnung google"],
    lsiKeywords: [
      "anwalt.de seo", "rechtsgebiet keywords", "e-e-a-t anwalt",
      "ymyl rechtsberatung", "mandatsanfragen online steigern",
      "rechtsgebiet landing pages", "anwalt bewertungen strategie",
      "kanzlei blog rechtstipps", "anwalt schema markup",
      "erstberatung als conversion", "juristische fachsprache seo", "lokalrichter radius"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hotels",
    primaryKeyword: "local seo hotels",
    secondaryKeywords: ["hotel seo", "direktbuchungen seo", "hotel google maps"],
    lsiKeywords: [
      "google hotel ads", "booking alternative seo", "hotel bewertungen",
      "lodging business schema", "direkt buchungs-widget",
      "saisonale preisgestaltung content", "hotel fotos optimieren",
      "reisende zielgruppe keywords", "concierge content erstellen",
      "hotel amenities hervorheben", "location guide hotel", "hotel meta search optimierung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fitness",
    primaryKeyword: "local seo fitnessstudio",
    secondaryKeywords: ["fitnessstudio marketing", "personal trainer seo", "fitness google maps"],
    lsiKeywords: [
      "mitgliedergewinnung seo", "gym marketing", "fitness content marketing",
      "kursplan als content", "transformation stories zeigen",
      "probetraining als conversion", "fitness equipment keywords",
      "personal training keywords", "fitnessstudio bewertungen",
      "community aufbau fitness", "saisonale fitness kampagnen", "neujahr fitness marketing"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-doener-kebab-imbiss",
    primaryKeyword: "local seo döner imbiss",
    secondaryKeywords: ["imbiss marketing", "döner google maps", "schnellrestaurant seo"],
    lsiKeywords: [
      "imbiss bewertungen", "döner keywords", "imbiss google business",
      "take-away keywords lokal", "lieferradius optimierung",
      "imbiss fotos appetitlich", "preisleistung hervorheben",
      "street food marketing", "mittagsangebot keywords",
      "imbiss öffnungszeiten spätabend", "multi-sprache imbiss content", "stammkunden marketing"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-friseursalon-beauty",
    primaryKeyword: "local seo friseur",
    secondaryKeywords: ["friseur marketing", "beauty salon seo", "friseursalon google"],
    lsiKeywords: [
      "friseur bewertungen", "beauty google maps", "salon online marketing",
      "vorher nachher bilder haare", "online terminbuchung salon",
      "styling keywords saisonal", "braut-styling keywords",
      "produkt verkauf salon", "instagram portfolio friseur",
      "salon atmosphere fotos", "haar-trend content", "team expertise zeigen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-immobilienmakler",
    primaryKeyword: "local seo immobilienmakler",
    secondaryKeywords: ["makler marketing", "immobilien seo", "makler google maps"],
    lsiKeywords: [
      "objektanfragen google", "immobilien content", "makler bewertungen",
      "stadtteil guide immobilien", "marktbericht als content",
      "immobilienbewertung tool seo", "expose online optimieren",
      "luxus immobilien keywords", "gewerbeimmobilien seo",
      "makler e-e-a-t vertrauen", "immobilien schema markup", "virtuelle besichtigung seo"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-steuerberater",
    primaryKeyword: "local seo steuerberater",
    secondaryKeywords: ["steuerberater marketing", "buchhalter seo", "mandantengewinnung steuerberater"],
    lsiKeywords: [
      "steuer keywords", "kanzlei seo", "finanzexperte google",
      "steuertipps als content marketing", "ymyl steuerberatung",
      "mandanten bewertungen sammeln", "steuer-saisonalität nutzen",
      "erstberatung als lead magnet", "branchenspezifische steuerberatung",
      "digitale kanzlei marketing", "datev partner hervorheben", "steuerrecht expertise zeigen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-autowerkstatt",
    primaryKeyword: "local seo autowerkstatt",
    secondaryKeywords: ["werkstatt marketing", "kfz marketing", "autowerkstatt google"],
    lsiKeywords: [
      "autohaus seo", "notfall keywords werkstatt", "werkstatt bewertungen",
      "hu au keywords saisonal", "reifenwechsel saisonal marketing",
      "pannenhilfe notdienst seo", "werkstatt vertrauen aufbauen",
      "preistransparenz werkstatt", "fahrzeugmarken keywords",
      "elektroauto werkstatt zukunft", "fleet management b2b", "werkstatt online termin"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tierarzt",
    primaryKeyword: "local seo tierarzt",
    secondaryKeywords: ["tierpraxis marketing", "veterinär seo", "tierarzt google maps"],
    lsiKeywords: [
      "tierarzt notdienst seo", "tier-portale", "emotionales content marketing",
      "tiergesundheit ratgeber content", "notfall tierarzt keywords",
      "tierart spezifische keywords", "impfung vorsorge content",
      "haustier community aufbauen", "tierarzt bewertungen emotional",
      "praxis team tier-fotos", "ernährungsberatung tier content", "telemedizin tier keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fotograf",
    primaryKeyword: "local seo fotograf",
    secondaryKeywords: ["fotografen marketing", "fotograf google maps", "hochzeitsfotograf seo"],
    lsiKeywords: [
      "portfolio seo", "fotograf bewertungen", "fotografie keywords",
      "bildgalerie optimierung", "foto stil keywords",
      "hochzeit fotograf saisonalität", "event fotografie marketing",
      "headshot business fotografie", "image alt text fotograf",
      "instagram portfolio verlinken", "preisliste fotograf seo", "lokale shooting locations"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-yoga-studios",
    primaryKeyword: "local seo yoga studio",
    secondaryKeywords: ["yoga marketing", "pilates seo", "wellness studio seo"],
    lsiKeywords: [
      "kurs keywords yoga", "yoga google business", "yoga studio marketing",
      "kursplan als seo content", "yoga stil keywords",
      "meditation wellness keywords", "community events yoga",
      "teacher profile expertise", "probestunde als conversion",
      "yoga retreat marketing", "online yoga hybrid keywords", "wellness lifestyle content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-tattoo-studios",
    primaryKeyword: "local seo tattoo studio",
    secondaryKeywords: ["tattoo marketing", "piercing studio seo", "tattoo künstler seo"],
    lsiKeywords: [
      "portfolio optimierung tattoo", "style keywords tattoo", "instagram tattoo seo",
      "tattoo stil nische keywords", "walk-in vs termin keywords",
      "hygiene standards hervorheben", "künstler profil seiten",
      "flash design content", "tattoo pflege ratgeber",
      "piercing nachsorge content", "convention und events", "tattoo trend content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-apotheken",
    primaryKeyword: "local seo apotheke",
    secondaryKeywords: ["apotheken marketing", "notdienst apotheke seo", "pharma seo lokal"],
    lsiKeywords: [
      "apotheke google business", "gesundheitsberatung content", "stamm-apotheke marketing",
      "notdienst apotheke keywords", "medikamenten beratung content",
      "impfservice apotheke hervorheben", "kosmetik sortiment apotheke",
      "gesundheitstage als content", "ymyl pharma anforderungen",
      "vertrauenssignale apotheke", "digital health apotheke", "lieferservice apotheke keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-zahnarzt",
    primaryKeyword: "local seo zahnarzt",
    secondaryKeywords: ["zahnarzt marketing", "dental marketing", "zahnarztpraxis seo"],
    lsiKeywords: [
      "patientengewinnung zahnarzt", "zahnarzt bewertungen", "behandlungs-keywords",
      "zahnimplantate keywords", "invisalign keywords lokal",
      "angstpatienten content", "vorsorge als content strategie",
      "praxis-tour video seo", "zahnarzt notdienst keywords",
      "ästhetische zahnmedizin keywords", "kinderzahnarzt spezialisierung", "zahnarzt team vertrauen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-physiotherapie",
    primaryKeyword: "local seo physiotherapie",
    secondaryKeywords: ["heilpraktiker marketing", "physiotherapeut seo", "therapie praxis marketing"],
    lsiKeywords: [
      "behandlungs keywords physio", "gesundheitsportale seo", "wellness marketing",
      "übungen ratgeber content", "reha content marketing",
      "krankenkassen zusammenarbeit", "spezialisierung keywords physio",
      "sport physiotherapie keywords", "rücken nacken keywords",
      "prävention als content thema", "patientenstimmen als trust", "therapie methoden erklären"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-optiker",
    primaryKeyword: "local seo optiker",
    secondaryKeywords: ["optiker marketing", "brillen seo", "optiker google maps"],
    lsiKeywords: [
      "augenoptiker seo", "optiker bewertungen", "optiker online marketing",
      "kontaktlinsen keywords", "sehtest als conversion",
      "brillentrends als content", "designer brillen keywords",
      "kinder brillen spezialisierung", "sportbrillen keywords",
      "gleitsichtgläser beratung content", "optiker vertrauen aufbauen", "digitale sehberatung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-elektrotechnik",
    primaryKeyword: "local seo elektrotechnik",
    secondaryKeywords: ["elektriker marketing", "elektrobetrieb seo", "elektrotechnik google"],
    lsiKeywords: [
      "notdienst elektriker seo", "elektroinstallateur marketing", "elektro bewertungen",
      "smart home installation keywords", "photovoltaik elektriker",
      "wallbox installation keywords", "e-check keywords",
      "elektro notdienst 24h", "energieberatung content",
      "elektro sicherheit content", "gewerbliche elektroinstallation", "elektriker meisterbetrieb"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-fahrschule",
    primaryKeyword: "local seo fahrschule",
    secondaryKeywords: ["fahrschule marketing", "fahrschüler gewinnen", "führerschein marketing"],
    lsiKeywords: [
      "fahrschule bewertungen", "fahrschule keywords", "fahrschule google",
      "führerschein klasse b keywords", "intensivkurs fahrschule",
      "motorrad führerschein keywords", "fahrschule preisvergleich seo",
      "erste fahrstunde als content", "theorieunterricht online keywords",
      "fahrlehrer vorstellung", "bestehensquote hervorheben", "fahrschule social media"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hochzeitsdienstleister",
    primaryKeyword: "local seo hochzeitsdienstleister",
    secondaryKeywords: ["hochzeit marketing", "wedding vendor seo", "hochzeitsplanung seo"],
    lsiKeywords: [
      "saisonale keywords hochzeit", "hochzeitsportale seo", "emotionale bildsprache",
      "hochzeitslocation keywords", "brautmode keywords",
      "real wedding content", "hochzeitsmessen marketing",
      "paket-angebote hochzeit seo", "referenz-hochzeiten zeigen",
      "hochzeits-blog content", "pinterest hochzeit seo", "video highlight reel seo"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-umzugsunternehmen",
    primaryKeyword: "local seo umzugsunternehmen",
    secondaryKeywords: ["umzug marketing", "umzugsfirma seo", "entrümpelung seo"],
    lsiKeywords: [
      "umzugs keywords", "preisrechner seo", "umzug bewertungen",
      "umzugstipps als content", "checkliste umzug content",
      "umzugskosten rechner tool", "firmenumzug keywords",
      "fernumzug keywords", "möbellager keywords",
      "entrümpelung und entsorgung", "umzug wochenende keywords", "versicherung umzug content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-reinigungsunternehmen",
    primaryKeyword: "local seo reinigungsunternehmen",
    secondaryKeywords: ["gebäudereinigung marketing", "putzfirma seo", "reinigung google maps"],
    lsiKeywords: [
      "service keywords reinigung", "b2b reinigung seo", "reinigung bewertungen",
      "büroreinigung keywords", "fensterreinigung keywords",
      "grundreinigung keywords", "teppichreinigung spezialisierung",
      "desinfektion keywords", "reinigungsplan als content",
      "gewerbliche reinigung b2b seo", "hausmeisterservice keywords", "nachhaltigkeit reinigung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-sprachschule",
    primaryKeyword: "local seo sprachschule",
    secondaryKeywords: ["sprachschule marketing", "nachhilfe seo", "bildung seo lokal"],
    lsiKeywords: [
      "sprach keywords", "kursangebote seo", "saisonale kampagnen bildung",
      "deutsch als fremdsprache keywords", "business english keywords",
      "prüfungsvorbereitung content", "online hybrid kurse keywords",
      "intensivkurs keywords", "sprachzertifikat keywords",
      "kinder sprachkurs keywords", "firmentraining sprache b2b", "lehrmethodik als content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-baeckerei-konditorei",
    primaryKeyword: "local seo konditorei",
    secondaryKeywords: ["konditorei marketing", "tortenbetrieb seo", "hochzeitstorte keywords"],
    lsiKeywords: [
      "spezialitäten marketing", "konditorei google maps", "torten bestellungen seo",
      "motivtorte keywords", "hochzeitstorte bestellen lokal",
      "patisserie content marketing", "saisonale torten content",
      "glutenfrei vegan spezialitäten", "torte online bestellen",
      "konditor meisterwerk portfolio", "instagram torte portfolio", "custom cake keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-baeckerei",
    primaryKeyword: "bäckerei local seo",
    secondaryKeywords: ["bäcker seo", "bäckerei marketing google", "konditorei google"],
    lsiKeywords: [
      "sonntagsbrötchen keywords", "food fotos bäckerei", "saisonales marketing bäcker",
      "handwerksbäckerei hervorheben", "bio bäckerei keywords",
      "frühstücks angebot marketing", "brot lieferservice lokal",
      "backstube transparenz content", "bäcker tradition storytelling",
      "regionale zutaten hervorheben", "bäckerei café kombi keywords", "wochenmarkt präsenz seo"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-cafe-coffeeshop",
    primaryKeyword: "local seo café",
    secondaryKeywords: ["cafe marketing", "coffeeshop seo", "kaffee seo lokal"],
    lsiKeywords: [
      "atmosphären keywords", "instagram café seo", "arbeitsplatz café marketing",
      "specialty coffee keywords", "wifi café keywords",
      "brunch café keywords", "café events community",
      "kaffee herkunft storytelling", "coworking café nische",
      "kuchen hausgemacht keywords", "vegane optionen café", "café einrichtung als content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-sanitaer-heizung",
    primaryKeyword: "local seo shk betrieb",
    secondaryKeywords: ["sanitär marketing", "heizung seo", "installateur seo"],
    lsiKeywords: [
      "klima marketing", "shk notdienst seo", "saisonale optimierung shk",
      "wärmepumpe installation keywords", "heizungsmodernisierung content",
      "rohrbruch notdienst keywords", "badezimmer renovierung seo",
      "solarthermie keywords", "klima anlage installation",
      "energieeffizienz beratung content", "shk förderung content", "wartungsvertrag als conversion"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-maler-lackierer",
    primaryKeyword: "local seo maler",
    secondaryKeywords: ["maler marketing", "lackierer seo", "malerbetrieb marketing"],
    lsiKeywords: [
      "renovierung seo", "maler google maps", "maler bewertungen",
      "fassadenanstrich keywords", "tapezieren keywords",
      "wärmedämmung maler keywords", "vorher nachher projekte maler",
      "farbberatung als content", "gewerbe malerei b2b",
      "schimmel sanierung keywords", "denkmalschutz maler spezialisierung", "maler meisterbetrieb"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "seo-ferienwohnungen",
    primaryKeyword: "seo ferienwohnungen",
    secondaryKeywords: ["ferienwohnung seo schweiz", "vacation rental seo", "direktbuchungen seo"],
    lsiKeywords: [
      "google my business ferienwohnung", "local seo tourismus", "ota alternative seo",
      "ferienhaus portal unabhängigkeit", "saisonale preise content",
      "gästebewertungen direkt sammeln", "reiseführer als content",
      "ferienwohnung fotos optimieren", "auslastung maximieren seo",
      "umgebungstipps als lokaler content", "buchungswidget website seo", "multi-sprache ferienwohnung"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-case-study-baecker",
    primaryKeyword: "local seo case study bäcker",
    secondaryKeywords: ["bäckerei seo erfolg", "local seo fallstudie", "bäcker ranking"],
    lsiKeywords: [
      "seo erfolgsgeschichte", "vorher nachher seo", "bäcker google maps",
      "handwerksbäckerei ranking journey", "gbp optimierung bäckerei ergebnis",
      "bewertungen wachstum dokumentiert", "foto strategie bäckerei ergebnis",
      "umsatzsteigerung durch seo bäcker", "ranking timeline bäckerei",
      "kundenfrequenz steigerung messbar", "filialen ranking verbesserung", "local pack platz 1 bäcker"
    ],
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
    lsiKeywords: [
      "lokales marketing schweiz", "schweizer verzeichnisse", "mehrsprachigkeit seo",
      "local.ch eintrag", "search.ch optimierung",
      "kantone seo strategie", "schweizer marktplatz online",
      "deutsch französisch italienisch seo", "swisscom directories",
      "kmu digital schweiz", "schweizer datenschutz seo", "e-commerce schweiz lokal"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-zuerich",
    primaryKeyword: "local seo zürich",
    secondaryKeywords: ["seo zürich", "google ranking zürich", "marketing zürich"],
    lsiKeywords: [
      "unternehmen zürich google", "zürcher markt seo", "stadtteil seo zürich",
      "kreis 1-12 keywords", "zürich altstadt vs agglo",
      "winterthur einzugsgebiet", "zürich see umgebung",
      "premium markt zürich seo", "startup szene zürich",
      "gastronomie zürich keywords", "dienstleistungen zürich lokal", "wettbewerb zürich analyse"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-muenchen",
    primaryKeyword: "local seo münchen",
    secondaryKeywords: ["seo münchen", "google ranking münchen", "marketing münchen"],
    lsiKeywords: [
      "bayerische unternehmen seo", "stadtteil seo münchen", "münchen google maps",
      "schwabing maxvorstadt keywords", "münchen innenstadt vs umland",
      "oktoberfest saisonales marketing", "premium markt münchen",
      "gastro münchen keywords", "handwerker münchen stark umkämpft",
      "münchen vs augsburg einzugsgebiet", "bayerische verzeichnisse", "münchen startup marketing"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-berlin",
    primaryKeyword: "local seo berlin",
    secondaryKeywords: ["seo berlin", "google ranking berlin", "marketing berlin"],
    lsiKeywords: [
      "berliner unternehmen seo", "kiez keywords", "bezirks seo berlin",
      "kreuzberg friedrichshain keywords", "berlin mitte vs neukölln",
      "multikulti content berlin", "startup hub berlin seo",
      "gastronomie szene berlin", "handwerk berlin umkämpft",
      "berlin umland potsdam", "zweisprachig english content", "berlin tourismus keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hamburg",
    primaryKeyword: "local seo hamburg",
    secondaryKeywords: ["seo hamburg", "marketing hamburg", "google maps hamburg"],
    lsiKeywords: [
      "hamburger unternehmen seo", "stadtteil seo hamburg", "elbmetropole marketing",
      "hafen city keywords", "winterhude eppendorf keywords",
      "hamburg altona schanze", "norddeutsch content marketing",
      "maritime keywords hamburg", "harburg bergedorf einzugsgebiet",
      "fischmarkt saisonales marketing", "hamburger gastronomie szene", "elbe umland keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-frankfurt",
    primaryKeyword: "local seo frankfurt",
    secondaryKeywords: ["seo frankfurt", "marketing frankfurt", "google maps frankfurt"],
    lsiKeywords: [
      "finanzmetropole seo", "b2b keywords frankfurt", "mainmetropole marketing",
      "sachsenhausen nordend keywords", "frankfurt innenstadt vs offenbach",
      "messe frankfurt marketing", "international business frankfurt",
      "rhein main gebiet einzugsgebiet", "gastronomie frankfurt apfelwein",
      "english speaking audience", "frankfurter startup szene", "pendler einzugsgebiet rhein-main"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-koeln",
    primaryKeyword: "local seo köln",
    secondaryKeywords: ["seo köln", "google ranking köln", "marketing köln"],
    lsiKeywords: [
      "kölner unternehmen seo", "veedel keywords", "rheinmetropole marketing",
      "ehrenfeld südstadt keywords", "köln innenstadt deutz",
      "karneval saisonales marketing", "kölsch kultur content",
      "bonn einzugsgebiet", "rheinland gastronomie",
      "medien standort köln", "messe köln events", "multikulti content köln"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-wien",
    primaryKeyword: "local seo wien",
    secondaryKeywords: ["seo wien", "google ranking wien", "marketing wien"],
    lsiKeywords: [
      "wiener unternehmen seo", "bezirks keywords wien", "österreich seo",
      "1. bezirk innere stadt", "herold.at verzeichnis",
      "wiener gastro kaffeehauskultur", "tourismus wien marketing",
      "österreichische suchgewohnheiten", "wien umland niederösterreich",
      "mehrsprachig wien international", "startup hub wien", "kultur events wien content"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-stuttgart",
    primaryKeyword: "local seo stuttgart",
    secondaryKeywords: ["seo stuttgart", "google ranking stuttgart", "marketing stuttgart"],
    lsiKeywords: [
      "schwaben seo", "baden-württemberg seo", "stadtteil seo stuttgart",
      "bad cannstatt vaihingen keywords", "automobile branche stuttgart",
      "mittelstand stuttgart seo", "kessel topografie keywords",
      "esslingen ludwigsburg einzugsgebiet", "messe stuttgart marketing",
      "startup hub stuttgart", "wasen saisonales marketing", "ingenieur dienstleistungen keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-duesseldorf",
    primaryKeyword: "local seo düsseldorf",
    secondaryKeywords: ["seo düsseldorf", "google ranking düsseldorf", "marketing düsseldorf"],
    lsiKeywords: [
      "nrw seo", "altstadt seo düsseldorf", "rheinland marketing",
      "flingern bilk keywords", "mode branche düsseldorf",
      "japan community düsseldorf", "messe düsseldorf events",
      "krefeld neuss einzugsgebiet", "luxus shopping keywords",
      "medienhafen content", "düsseldorf vs köln vergleich", "b2b marketing düsseldorf"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "local-seo-basel",
    primaryKeyword: "local seo basel",
    secondaryKeywords: ["seo basel", "google ranking basel", "marketing basel"],
    lsiKeywords: [
      "schweiz seo", "dreiländereck marketing", "nordschweiz seo",
      "kleinbasel grossbasel keywords", "pharma standort basel",
      "dreisprachig grenzregion", "art basel messe marketing",
      "lörrach weil am rhein einzugsgebiet", "basler fasnacht saisonal",
      "life sciences keywords", "grenzgänger zielgruppe", "basel tourismus keywords"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "cluster"
  },
  {
    slug: "local-seo-hannover",
    primaryKeyword: "local seo hannover",
    secondaryKeywords: ["seo hannover", "marketing hannover", "google ranking hannover"],
    lsiKeywords: [
      "messe hannover seo", "niedersachsen seo", "hannover google maps",
      "linden nordstadt keywords", "expo gelände marketing",
      "messe saisonales marketing", "b2b hannover keywords",
      "braunschweig einzugsgebiet", "region hannover einzugsgebiet",
      "schützenfest saisonales marketing", "mittelstand hannover", "universität hannover keywords"
    ],
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
    lsiKeywords: [
      "praxis marketing case study", "von seite 3 auf platz 1", "seo timeline zahnarzt",
      "patientengewinnung messbar", "gbp optimierung zahnarzt ergebnis",
      "bewertungs strategie dental resultat", "local pack zahnarzt platzierung",
      "schema markup praxis auswirkung", "roi berechnung zahnarzt seo",
      "neue patienten monatlich", "sichtbarkeit radius vergrößert", "conversion tracking praxis"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-restaurant-reservierungen",
    primaryKeyword: "restaurant seo case study",
    secondaryKeywords: ["reservierungen steigern seo", "gastro marketing erfolg", "restaurant google ranking"],
    lsiKeywords: [
      "local seo erfolg restaurant", "mehr reservierungen google", "gastro online marketing",
      "tischreservierung steigerung messbar", "food fotografie einfluss",
      "google posts restaurant ergebnis", "bewertungsvolumen gastro wachstum",
      "umsatzsteigerung gastronomie", "sichtbarkeit abend-suche",
      "menu schema auswirkung", "delivery anfragen wachstum", "stammgäste durch online präsenz"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-handwerker-anfragen",
    primaryKeyword: "handwerker seo case study",
    secondaryKeywords: ["anfragen automatisieren seo", "lead generierung handwerk", "elektriker marketing erfolg"],
    lsiKeywords: [
      "handwerker google ranking", "anfragen über google", "handwerk online marketing",
      "lead quality verbesserung", "notdienst anfragen steigerung",
      "service area expansion", "gbp fotos handwerk ergebnis",
      "bewertungen handwerker roi", "saisonale anfragen peaks",
      "cost per lead handwerker", "telefonanrufe tracking", "auftragsbuch füllen seo"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-fitnessstudio-corona",
    primaryKeyword: "fitnessstudio seo case study",
    secondaryKeywords: ["corona comeback fitness", "mitglieder gewinnen seo", "fitness marketing erfolg"],
    lsiKeywords: [
      "gym google ranking", "fitnessstudio online marketing", "nach corona mitglieder",
      "mitgliedergewinnung digital", "online fitness pivot seo",
      "wiedereröffnung marketing strategie", "probetraining conversion tracking",
      "community aufbau fitness digital", "hybrid fitness keywords",
      "retention durch seo sichtbarkeit", "brand awareness lokal", "fitness challenge marketing"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-hotel-direktbuchungen",
    primaryKeyword: "hotel seo case study",
    secondaryKeywords: ["direktbuchungen steigern", "booking alternative hotel", "hotel marketing erfolg"],
    lsiKeywords: [
      "boutique hotel seo", "hotel google ranking", "ota unabhängigkeit",
      "direkt buchungsrate steigerung", "ota kommission einsparen",
      "hotel website conversion", "gästebewertungen direkt ergebnis",
      "saisonale auslastung verbessern", "hotel schema markup ergebnis",
      "lokale attraktion content roi", "google hotel pack platzierung", "revenue per available room"
    ],
    searchIntent: "informational",
    targetSearchVolume: "low",
    contentType: "supporting"
  },
  {
    slug: "case-study-friseur-stadtteile",
    primaryKeyword: "friseur seo case study",
    secondaryKeywords: ["multi location friseur", "stadtteil seo erfolg", "salon marketing google"],
    lsiKeywords: [
      "friseur google ranking", "3 standorte seo", "salon platz 1",
      "multi location expansion tracking", "standort übergreifende strategie ergebnis",
      "salon bewertungen wachstum pro standort", "gbp individualisierung filialen",
      "team portfolio seo auswirkung", "buchungen online steigerung",
      "neukunden pro standort tracking", "stadtteil dominanz strategie", "brand consistency multi salon"
    ],
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
    lsiKeywords: [
      "google appeal", "soft suspension gbp", "hard suspension gbp",
      "richtlinienverstoß identifizieren", "reinstatement formular ausfüllen",
      "suspension vermeiden best practices", "video verifizierung nach suspension",
      "wartezeit reaktivierung", "gbp support kontaktieren",
      "suspension grund herausfinden", "alternative während suspension", "prävention suspension"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "gbp-verifizierung-fehlgeschlagen",
    primaryKeyword: "google business verifizierung fehlgeschlagen",
    secondaryKeywords: ["gbp verifizierung", "postkarte nicht erhalten", "verifizierungscode google"],
    lsiKeywords: [
      "video verifizierung gbp", "verifizierung probleme", "google verifizierung hilfe",
      "postkarte erneut anfordern", "telefon verifizierung gbp",
      "email verifizierung option", "verifizierung dauert lange",
      "adresse postkarte nicht zustellbar", "instant verifizierung voraussetzungen",
      "search console verifizierung alternative", "verifizierung mehrere standorte", "bulk verifizierung beantragen"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "duplicate-listing-entfernen",
    primaryKeyword: "doppelte google einträge löschen",
    secondaryKeywords: ["duplicate listing entfernen", "google business duplicate", "mehrere google einträge"],
    lsiKeywords: [
      "duplicate finden", "doppelter eintrag maps", "einträge zusammenführen",
      "ownership claim doppelter eintrag", "suggest an edit duplicate",
      "google support duplicate melden", "auswirkung duplicate ranking",
      "duplicate vermeiden bei umzug", "historische einträge bereinigen",
      "maps eintrag ownership übertragen", "phantom listings erkennen", "nap bereinigung nach merge"
    ],
    searchIntent: "informational",
    targetSearchVolume: "medium",
    contentType: "cluster"
  },
  {
    slug: "ranking-ploetzlich-verschwunden",
    primaryKeyword: "google ranking verschwunden",
    secondaryKeywords: ["ranking einbruch", "google penalty", "ranking verloren plötzlich"],
    lsiKeywords: [
      "google ranking weg", "ranking diagnose", "algorithmus update ranking",
      "manual action google", "core update betroffen",
      "ranking recovery strategie", "search console fehlermeldungen prüfen",
      "backlink profil toxisch", "content qualität prüfen",
      "technischer fehler ausschließen", "indexierung überprüfen", "ranking drop timeline analysieren"
    ],
    searchIntent: "informational",
    targetSearchVolume: "high",
    contentType: "cluster"
  },
  {
    slug: "gbp-nicht-in-suche-sichtbar",
    primaryKeyword: "google business profil nicht sichtbar",
    secondaryKeywords: ["gbp nicht angezeigt", "google maps eintrag fehlt", "profil nicht gefunden"],
    lsiKeywords: [
      "gbp indexierung problem", "google business nicht sichtbar", "maps eintrag verschwunden",
      "verifizierung status prüfen", "profil deaktiviert automatisch",
      "richtlinien verstoß unsichtbar", "adresse prüfen korrekt",
      "kategorie falsch gewählt", "wettbewerb verdrängt profil",
      "gbp qualität score niedrig", "inaktivität profil ausgeblendet", "sichtbarkeit radius zu klein"
    ],
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
