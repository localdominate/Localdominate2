/**
 * Centralized article conclusions with summary and next-step recommendations.
 * Rendered automatically by ArticleLayout via ArticleConclusion component.
 */

export interface ArticleConclusionData {
  de: {
    summary: string;
    nextSteps: string[];
  };
  en: {
    summary: string;
    nextSteps: string[];
  };
}

export const articleConclusions: Record<string, ArticleConclusionData> = {
  // === PILLAR PAGES ===
  "ultimate-guide-local-seo": {
    de: {
      summary: "Local SEO ist kein einmaliges Projekt, sondern ein fortlaufender Prozess. Die Kombination aus optimiertem Google Business Profil, konsistenten NAP-Daten, aktiven Bewertungen und lokalem Content bildet das Fundament für nachhaltige Sichtbarkeit im Local Pack.",
      nextSteps: [
        "Führe den Local SEO Audit durch, um deinen aktuellen Status zu kennen",
        "Optimiere dein Google Business Profil mit allen 10 Schritten aus diesem Guide",
        "Starte mit der monatlichen SEO-Routine für kontinuierliche Verbesserung",
        "Prüfe deine NAP-Konsistenz in allen wichtigen Verzeichnissen"
      ]
    },
    en: {
      summary: "Local SEO isn't a one-time project but an ongoing process. The combination of an optimized Google Business Profile, consistent NAP data, active reviews and local content forms the foundation for sustainable Local Pack visibility.",
      nextSteps: [
        "Run the Local SEO audit to know your current status",
        "Optimize your Google Business Profile with all 10 steps from this guide",
        "Start the monthly SEO routine for continuous improvement",
        "Check your NAP consistency across all important directories"
      ]
    }
  },
  "kostenloses-seo-guide": {
    de: {
      summary: "SEO ohne Budget ist absolut möglich — mit den richtigen Tools und einer klaren Strategie. Die 50+ kostenlosen Ressourcen in diesem Guide decken alles ab, vom Google Business Profil bis zur technischen Optimierung.",
      nextSteps: [
        "Richte dein Google Business Profil ein — der wichtigste kostenlose Hebel",
        "Nutze die Google Search Console für deine ersten Keyword-Insights",
        "Erstelle deine erste lokale Landingpage mit den vorgestellten Templates",
        "Setze die wöchentliche 30-Minuten-SEO-Routine um"
      ]
    },
    en: {
      summary: "SEO without budget is absolutely possible — with the right tools and a clear strategy. The 50+ free resources in this guide cover everything from Google Business Profile to technical optimization.",
      nextSteps: [
        "Set up your Google Business Profile — the most important free lever",
        "Use Google Search Console for your first keyword insights",
        "Create your first local landing page with the templates provided",
        "Implement the weekly 30-minute SEO routine"
      ]
    }
  },
  "local-seo-strategie-kleine-unternehmen": {
    de: {
      summary: "Kleine Unternehmen haben einen entscheidenden Vorteil: lokale Authentizität. Mit dem 90-Tage-Aktionsplan und den priorisierten Maßnahmen kannst du auch ohne Agentur eine professionelle Local-SEO-Strategie umsetzen.",
      nextSteps: [
        "Starte mit Phase 1 des 90-Tage-Plans: Google Business Profil optimieren",
        "Identifiziere deine Top-5-Keywords mit der Keyword-Recherche-Vorlage",
        "Baue systematisch Bewertungen auf mit der Bewertungs-Strategie",
        "Plane dein monatliches SEO-Budget mit dem Budget-Planer"
      ]
    },
    en: {
      summary: "Small businesses have a decisive advantage: local authenticity. With the 90-day action plan and prioritized measures, you can implement a professional Local SEO strategy without an agency.",
      nextSteps: [
        "Start with Phase 1 of the 90-day plan: Optimize Google Business Profile",
        "Identify your top 5 keywords with the keyword research template",
        "Build reviews systematically with the review strategy",
        "Plan your monthly SEO budget with the budget planner"
      ]
    }
  },
  "local-seo-ranking-faktoren-erklaert": {
    de: {
      summary: "Die 6 Ranking-Faktor-Kategorien — GBP (36 %), On-Page (18 %), Bewertungen (17 %), Links (13 %), Citations (7 %) und Verhalten (9 %) — zeigen klar, wo der größte Hebel liegt. Fokussiere deine Ressourcen auf GBP und Bewertungen für den schnellsten ROI.",
      nextSteps: [
        "Priorisiere GBP-Optimierung — sie hat die höchste Gewichtung",
        "Starte eine systematische Bewertungskampagne für den zweitgrößten Hebel",
        "Überprüfe deine On-Page-Faktoren mit dem Technical SEO Guide",
        "Baue 5 lokale Backlinks pro Monat auf mit dem Link Building Blueprint"
      ]
    },
    en: {
      summary: "The 6 ranking factor categories — GBP (36%), on-page (18%), reviews (17%), links (13%), citations (7%) and behavior (9%) — clearly show where the biggest leverage lies. Focus your resources on GBP and reviews for the fastest ROI.",
      nextSteps: [
        "Prioritize GBP optimization — it has the highest weighting",
        "Start a systematic review campaign for the second-biggest lever",
        "Check your on-page factors with the Technical SEO Guide",
        "Build 5 local backlinks per month with the Link Building Blueprint"
      ]
    }
  },
  "ai-suche-lokale-unternehmen": {
    de: {
      summary: "AI Search verändert die lokale Suche fundamental. Google AI Overviews, ChatGPT und Perplexity folgen anderen Regeln als die klassische Suche — strukturierte Daten, E-E-A-T und zitierfähige Inhalte sind der Schlüssel zur Sichtbarkeit.",
      nextSteps: [
        "Implementiere vollständiges Schema Markup mit dem Schema-Strategie-Dokument",
        "Erstelle eine llms.txt-Datei für AI-Crawler",
        "Strukturiere deine Inhalte nach dem Fact-First-Prinzip",
        "Monitore deine Erwähnungen in AI-Plattformen monatlich"
      ]
    },
    en: {
      summary: "AI Search is fundamentally changing local search. Google AI Overviews, ChatGPT and Perplexity follow different rules than traditional search — structured data, E-E-A-T and citable content are the key to visibility.",
      nextSteps: [
        "Implement complete Schema Markup with the Schema Strategy Document",
        "Create an llms.txt file for AI crawlers",
        "Structure your content using the fact-first principle",
        "Monitor your mentions on AI platforms monthly"
      ]
    }
  },

  // === KEYWORDS & STRATEGIE ===
  "local-seo-keywords-finden": {
    de: {
      summary: "Die lokale Keyword-Recherche ist das Fundament jeder SEO-Strategie. Wer die richtigen Suchbegriffe kennt — transaktional, informational und mit lokalem Bezug — investiert seine Zeit dort, wo der ROI am höchsten ist.",
      nextSteps: [
        "Erstelle deine Keyword-Map mit der kostenlosen Vorlage",
        "Priorisiere transaktionale Keywords mit hoher Kaufabsicht",
        "Baue für deine Top-5-Keywords je eine optimierte Landingpage",
        "Tracke deine Rankings monatlich mit dem Ranking-Tracker-Guide"
      ]
    },
    en: {
      summary: "Local keyword research is the foundation of every SEO strategy. Those who know the right search terms — transactional, informational and with local relevance — invest their time where ROI is highest.",
      nextSteps: [
        "Create your keyword map with the free template",
        "Prioritize transactional keywords with high buying intent",
        "Build an optimized landing page for each of your top 5 keywords",
        "Track your rankings monthly with the ranking tracker guide"
      ]
    }
  },
  "google-maps-ranking-verbessern": {
    de: {
      summary: "Google Maps Rankings verbessern sich nicht über Nacht, aber mit dem 7-Schritte-Plan erzielst du in 30 Tagen messbare Fortschritte. Der Schlüssel: vollständiges GBP, regelmäßige Aktivität und authentische Bewertungen.",
      nextSteps: [
        "Vervollständige dein Google Business Profil zu 100 %",
        "Starte die wöchentliche Google-Posts-Routine",
        "Bitte 3 zufriedene Kunden pro Woche um eine Bewertung",
        "Überprüfe dein Ranking mit Grid-Tracking nach 30 Tagen"
      ]
    },
    en: {
      summary: "Google Maps rankings don't improve overnight, but with the 7-step plan you'll achieve measurable progress in 30 days. The key: complete GBP, regular activity and authentic reviews.",
      nextSteps: [
        "Complete your Google Business Profile to 100%",
        "Start the weekly Google Posts routine",
        "Ask 3 satisfied customers per week for a review",
        "Check your ranking with grid tracking after 30 days"
      ]
    }
  },
  "google-bewertungen-bekommen": {
    de: {
      summary: "Bewertungen sind der sichtbarste Vertrauensbeweis für potenzielle Kunden. Mit den 7 ethischen Strategien baust du systematisch eine Bewertungsbasis auf, die dein Ranking und deine Conversion-Rate nachhaltig steigert.",
      nextSteps: [
        "Erstelle deinen persönlichen Google-Bewertungslink",
        "Drucke QR-Code-Aufsteller für deinen Kassenbereich",
        "Integriere Bewertungs-Anfragen in deinen Kundenprozess",
        "Beantworte alle bestehenden Bewertungen innerhalb von 48 Stunden"
      ]
    },
    en: {
      summary: "Reviews are the most visible proof of trust for potential customers. With these 7 ethical strategies, you'll systematically build a review base that sustainably boosts your ranking and conversion rate.",
      nextSteps: [
        "Create your personal Google review link",
        "Print QR code stands for your checkout area",
        "Integrate review requests into your customer process",
        "Respond to all existing reviews within 48 hours"
      ]
    }
  },
  "google-my-business-optimieren": {
    de: {
      summary: "Ein vollständig optimiertes Google Business Profil ist der wichtigste Einzelfaktor für lokale Sichtbarkeit. Die 10 Schritte in diesem Guide verwandeln dein Profil von einer Visitenkarte in einen Kundenmagneten.",
      nextSteps: [
        "Überprüfe die Vollständigkeit deines Profils mit unserer Checkliste",
        "Lade mindestens 20 hochwertige Fotos mit Geotagging hoch",
        "Richte Google Business Messaging für direkte Kundenanfragen ein",
        "Plane wöchentliche Google Posts für die nächsten 4 Wochen vor"
      ]
    },
    en: {
      summary: "A fully optimized Google Business Profile is the single most important factor for local visibility. The 10 steps in this guide turn your profile from a business card into a customer magnet.",
      nextSteps: [
        "Check your profile completeness with our checklist",
        "Upload at least 20 high-quality photos with geotagging",
        "Set up Google Business Messaging for direct customer inquiries",
        "Schedule weekly Google Posts for the next 4 weeks"
      ]
    }
  },
  "lokale-suchmaschinenoptimierung-2026": {
    de: {
      summary: "2026 verändert AI Overviews, Voice Search und Zero-Click die Spielregeln. Die Grundlagen bleiben wichtig, aber nur wer die neuen Trends integriert, bleibt langfristig sichtbar.",
      nextSteps: [
        "Implementiere Schema Markup für AI-Kompatibilität",
        "Optimiere FAQ-Inhalte für Voice Search und Featured Snippets",
        "Erstelle einen AI-Search-Optimierungsplan mit dem AI-Hub",
        "Überprüfe monatlich die Auswirkungen von AI Overviews auf deine CTR"
      ]
    },
    en: {
      summary: "In 2026, AI Overviews, Voice Search and Zero-Click are changing the rules. The fundamentals remain important, but only those who integrate new trends stay visible long-term.",
      nextSteps: [
        "Implement Schema Markup for AI compatibility",
        "Optimize FAQ content for Voice Search and Featured Snippets",
        "Create an AI search optimization plan with the AI Hub",
        "Monthly check the impact of AI Overviews on your CTR"
      ]
    }
  },
  "nap-konsistenz-local-seo": {
    de: {
      summary: "NAP-Konsistenz klingt simpel, ist aber einer der häufigsten Ranking-Killer. Jede Abweichung in Name, Adresse oder Telefonnummer verwirrt Google und kostet dich Positionen. Die gute Nachricht: Es ist vollständig reparierbar.",
      nextSteps: [
        "Erstelle ein NAP-Master-Dokument als zentrale Referenz",
        "Prüfe deine Einträge in den 20 wichtigsten DACH-Verzeichnissen",
        "Korrigiere alle Abweichungen innerhalb der nächsten 2 Wochen",
        "Setze einen vierteljährlichen NAP-Audit-Reminder"
      ]
    },
    en: {
      summary: "NAP consistency sounds simple but is one of the most common ranking killers. Every deviation in name, address or phone number confuses Google and costs you positions. The good news: It's fully repairable.",
      nextSteps: [
        "Create a NAP master document as central reference",
        "Check your listings in the 20 most important DACH directories",
        "Correct all deviations within the next 2 weeks",
        "Set a quarterly NAP audit reminder"
      ]
    }
  },
  "local-seo-audit-checkliste": {
    de: {
      summary: "Ein gründlicher Local SEO Audit ist der erste Schritt zur Verbesserung. Die 50+ Diagnose-Punkte decken systematisch jede Schwachstelle auf und geben dir eine klare Prioritätenliste für die nächsten Optimierungsschritte.",
      nextSteps: [
        "Führe den vollständigen Audit mit der Checkliste durch",
        "Priorisiere die Ergebnisse nach Impact-Score: Hoch zuerst",
        "Erstelle einen 30-Tage-Aktionsplan für die kritischsten Punkte",
        "Wiederhole den Audit nach 90 Tagen für den Fortschrittsbericht"
      ]
    },
    en: {
      summary: "A thorough Local SEO audit is the first step to improvement. The 50+ diagnostic points systematically uncover every weakness and give you a clear priority list for next optimization steps.",
      nextSteps: [
        "Run the full audit with the checklist",
        "Prioritize results by impact score: High first",
        "Create a 30-day action plan for the most critical points",
        "Repeat the audit after 90 days for the progress report"
      ]
    }
  },
  "local-seo-fehler": {
    de: {
      summary: "Die 15 häufigsten Local SEO Fehler sind vermeidbar — wenn man sie kennt. Von inkonsistenten NAP-Daten über fehlende Bewertungsantworten bis zu technischen Mängeln: Jeder behobene Fehler bringt dich der Spitzenposition näher.",
      nextSteps: [
        "Nutze das Diagnose-Quiz, um deine persönlichen Fehlerquellen zu finden",
        "Behebe die 3 kritischsten Fehler innerhalb dieser Woche",
        "Richte automatische Alerts für neue Bewertungen ein",
        "Plane einen monatlichen Check der häufigsten Fehlerquellen"
      ]
    },
    en: {
      summary: "The 15 most common Local SEO mistakes are avoidable — if you know them. From inconsistent NAP data to missing review responses to technical issues: Every fixed mistake brings you closer to the top position.",
      nextSteps: [
        "Use the diagnosis quiz to find your personal error sources",
        "Fix the 3 most critical mistakes within this week",
        "Set up automatic alerts for new reviews",
        "Schedule a monthly check of the most common error sources"
      ]
    }
  },

  // === BRANCHEN-GUIDES ===
  "local-seo-fuer-restaurants": {
    de: {
      summary: "Restaurants leben von Laufkundschaft und Empfehlungen — beides beginnt heute bei Google. Speisekarten-SEO, Foto-Strategie und aktives Bewertungsmanagement sind die drei Säulen für volle Tische.",
      nextSteps: [
        "Lade deine aktuelle Speisekarte als strukturierten Text hoch",
        "Fotografiere 10 Gerichte professionell für Google Business",
        "Richte einen QR-Code für Bewertungen auf jedem Tisch ein",
        "Erstelle saisonale Google Posts für aktuelle Angebote"
      ]
    },
    en: {
      summary: "Restaurants thrive on walk-in customers and recommendations — both start on Google today. Menu SEO, photo strategy and active review management are the three pillars for full tables.",
      nextSteps: [
        "Upload your current menu as structured text",
        "Professionally photograph 10 dishes for Google Business",
        "Set up a QR code for reviews on each table",
        "Create seasonal Google Posts for current offers"
      ]
    }
  },
  "local-seo-handwerker": {
    de: {
      summary: "Handwerker brauchen keine komplexe SEO-Strategie — aber eine effektive. Notdienst-Keywords, Projektfotos und lokale Bewertungen sind der kürzeste Weg zu mehr Aufträgen ohne Vermittlungsportale.",
      nextSteps: [
        "Optimiere dein GBP für Notdienst-Keywords deines Gewerks",
        "Dokumentiere jedes Projekt mit Vorher-Nachher-Fotos",
        "Bitte nach jedem abgeschlossenen Auftrag um eine Bewertung",
        "Erstelle eine Landingpage für deinen wichtigsten Service + Stadtteil"
      ]
    },
    en: {
      summary: "Contractors don't need a complex SEO strategy — but an effective one. Emergency keywords, project photos and local reviews are the shortest path to more jobs without referral portals.",
      nextSteps: [
        "Optimize your GBP for emergency keywords of your trade",
        "Document every project with before-and-after photos",
        "Ask for a review after every completed job",
        "Create a landing page for your main service + district"
      ]
    }
  },
  "local-seo-aerzte-praxen": {
    de: {
      summary: "Ärzte unterliegen besonderen YMYL-Anforderungen bei Google. E-E-A-T, medizinische Qualifikationen im Profil und patientenfreundliche Inhalte sind entscheidend. Wer diese Punkte erfüllt, wird zur vertrauenswürdigsten Praxis der Region.",
      nextSteps: [
        "Ergänze alle medizinischen Qualifikationen in deinem GBP",
        "Registriere dich auf Jameda, Doctolib und weiteren Arztportalen",
        "Erstelle Patientenratgeber zu deinen häufigsten Behandlungen",
        "Implementiere FAQ-Schema für Patientenfragen"
      ]
    },
    en: {
      summary: "Doctors face special YMYL requirements from Google. E-E-A-T, medical qualifications in the profile and patient-friendly content are decisive. Those who meet these points become the most trusted practice in the region.",
      nextSteps: [
        "Add all medical qualifications to your GBP",
        "Register on Jameda, Doctolib and other medical portals",
        "Create patient guides for your most common treatments",
        "Implement FAQ schema for patient questions"
      ]
    }
  },
  "local-seo-anwaelte-kanzleien": {
    de: {
      summary: "Mandanten suchen Anwälte in Krisenmomenten — schnell und vertrauensbasiert. Rechtsgebiet-spezifische Keywords, E-E-A-T-Signale und prominente Erreichbarkeit sind die drei Hebel für Kanzleien im digitalen Zeitalter.",
      nextSteps: [
        "Erstelle Landingpages für jedes Rechtsgebiet mit lokaler Ausrichtung",
        "Baue dein Anwaltsprofil auf anwalt.de und Kanzlei-Portalen aus",
        "Veröffentliche monatlich einen Rechtsratgeber zu aktuellen Themen",
        "Optimiere deine Click-to-Call-Buttons für mobile Mandanten"
      ]
    },
    en: {
      summary: "Clients search for lawyers in crisis moments — quickly and trust-based. Legal area keywords, E-E-A-T signals and prominent accessibility are the three levers for law firms in the digital age.",
      nextSteps: [
        "Create landing pages for each practice area with local focus",
        "Build your profile on lawyer portals and directories",
        "Publish a monthly legal guide on current topics",
        "Optimize click-to-call buttons for mobile clients"
      ]
    }
  },
  "local-seo-hotels": {
    de: {
      summary: "Direktbuchungen über Google bringen 20-25 % mehr Gewinn als Portalvermittlungen. Die Kombination aus Google Hotel Ads, einem optimierten GBP und aktiver Bewertungsstrategie ist der Schlüssel zur Portal-Unabhängigkeit.",
      nextSteps: [
        "Aktiviere den Buchungslink in deinem Google Business Profil",
        "Antworte auf alle Bewertungen — besonders die internationalen",
        "Erstelle eine lokale Attractions-Seite für Hotelgäste",
        "Nutze saisonale Google Posts für Events und Angebote"
      ]
    },
    en: {
      summary: "Direct bookings via Google bring 20-25% more profit than portal referrals. The combination of Google Hotel Ads, an optimized GBP and active review strategy is the key to portal independence.",
      nextSteps: [
        "Activate the booking link in your Google Business Profile",
        "Respond to all reviews — especially international ones",
        "Create a local attractions page for hotel guests",
        "Use seasonal Google Posts for events and offers"
      ]
    }
  },
  "local-seo-fitness": {
    de: {
      summary: "Fitnessstudios haben ein saisonales Geschäft — Januar-Boom und Sommerflaute. Wer saisonale Keywords, Vorher-Nachher-Content und eine Bewertungsstrategie kombiniert, füllt sein Studio das ganze Jahr.",
      nextSteps: [
        "Erstelle saisonale Landingpages für Januar und September",
        "Starte eine Foto-Galerie mit Mitglieder-Erfolgsgeschichten",
        "Integriere Online-Probetraining-Buchung in dein GBP",
        "Plane Google Posts passend zum saisonalen Fitness-Kalender"
      ]
    },
    en: {
      summary: "Gyms have a seasonal business — January boom and summer slump. Those who combine seasonal keywords, before-after content and a review strategy fill their studio year-round.",
      nextSteps: [
        "Create seasonal landing pages for January and September",
        "Start a photo gallery with member success stories",
        "Integrate online trial training booking in your GBP",
        "Plan Google Posts matching the seasonal fitness calendar"
      ]
    }
  },
  "local-seo-doener-kebab-imbiss": {
    de: {
      summary: "Der Döner-Markt ist hyper-lokal und stark umkämpft. Wer sein Google Business Profil optimiert, auf Lieferportalen präsent ist und Stammkunden-Bewertungen sammelt, hebt sich von 18.000 Konkurrenten ab.",
      nextSteps: [
        "Optimiere deinen Lieferando- und Wolt-Eintrag parallel zum GBP",
        "Fotografiere deine Top-10-Gerichte mit Smartphone-Profitipps",
        "Drucke QR-Code-Aufkleber für Verpackungen und Tresen",
        "Erstelle eine 'Unser Döner'-Story für dein Google Business Profil"
      ]
    },
    en: {
      summary: "The döner market is hyper-local and fiercely competitive. Those who optimize their Google Business Profile, are present on delivery platforms and collect regular customer reviews stand out from 18,000 competitors.",
      nextSteps: [
        "Optimize your delivery platform listings alongside GBP",
        "Photograph your top 10 dishes with smartphone pro tips",
        "Print QR code stickers for packaging and counter",
        "Create an 'Our Döner' story for your Google Business Profile"
      ]
    }
  },
  "local-seo-friseursalon-beauty": {
    de: {
      summary: "Friseursalons und Beauty-Studios verkaufen Vertrauen. Online-Buchungsintegration, Portfolio-Fotos und eine konstante Bewertungsbasis sind die drei Erfolgsfaktoren für volle Terminkalender.",
      nextSteps: [
        "Verknüpfe dein Buchungssystem mit dem Google Business Profil",
        "Baue ein Vorher-Nachher-Portfolio mit 20+ Looks auf",
        "Starte eine Empfehlungsaktion für bestehende Kunden",
        "Poste wöchentlich aktuelle Looks und Trends als Google Posts"
      ]
    },
    en: {
      summary: "Hair salons and beauty studios sell trust. Online booking integration, portfolio photos and a consistent review base are the three success factors for full appointment calendars.",
      nextSteps: [
        "Connect your booking system with Google Business Profile",
        "Build a before-and-after portfolio with 20+ looks",
        "Start a referral promotion for existing customers",
        "Post weekly current looks and trends as Google Posts"
      ]
    }
  },
  "local-seo-immobilienmakler": {
    de: {
      summary: "Immobilienmakler profitieren massiv von lokaler Sichtbarkeit — Stadtteil-Expertise und Marktkenntnis sind die stärksten Verkaufsargumente. Wer lokal als Experte wahrgenommen wird, bekommt die besten Objekte.",
      nextSteps: [
        "Erstelle Stadtteil-Guides für deine Kerngebiete",
        "Veröffentliche monatliche Marktberichte als Google Posts",
        "Sammle Bewertungen von zufriedenen Käufern und Verkäufern",
        "Optimiere dein Profil auf ImmobilienScout24 und Immonet"
      ]
    },
    en: {
      summary: "Real estate agents massively benefit from local visibility — district expertise and market knowledge are the strongest selling points. Those perceived as local experts get the best properties.",
      nextSteps: [
        "Create district guides for your core areas",
        "Publish monthly market reports as Google Posts",
        "Collect reviews from satisfied buyers and sellers",
        "Optimize your profile on major property portals"
      ]
    }
  },
  "local-seo-steuerberater": {
    de: {
      summary: "Steuerberater gewinnen Mandanten durch Vertrauen und Erreichbarkeit. E-E-A-T-Signale, Fachportale und saisonale Inhalte rund um Steuererklärung und Jahresabschluss sind der Schlüssel zu konstantem Mandantenzufluss.",
      nextSteps: [
        "Ergänze alle Qualifikationen und Zertifizierungen im GBP",
        "Erstelle saisonale Inhalte zu Steuerterminen und -änderungen",
        "Registriere dich auf datev.de und Steuerberater-Portalen",
        "Veröffentliche monatlich einen Steuer-Tipp als Google Post"
      ]
    },
    en: {
      summary: "Tax consultants win clients through trust and accessibility. E-E-A-T signals, professional portals and seasonal content around tax filing and year-end are the key to constant client flow.",
      nextSteps: [
        "Add all qualifications and certifications to GBP",
        "Create seasonal content for tax deadlines and changes",
        "Register on professional tax consultant portals",
        "Publish monthly tax tips as Google Posts"
      ]
    }
  },
  "local-seo-autowerkstatt": {
    de: {
      summary: "Autowerkstätten leben von Vertrauen und Erreichbarkeit. Notdienst-SEO, transparente Preise und Kundenbewertungen verwandeln Google-Sucher in Stammkunden — ohne teure Portale.",
      nextSteps: [
        "Optimiere für Notdienst-Keywords: 'Autowerkstatt sofort' + Stadt",
        "Zeige Preise und Services transparent im Google Business Profil",
        "Dokumentiere abgeschlossene Reparaturen mit Fotos",
        "Antworte auf jede Bewertung innerhalb von 24 Stunden"
      ]
    },
    en: {
      summary: "Auto workshops thrive on trust and accessibility. Emergency SEO, transparent pricing and customer reviews turn Google searchers into regulars — without expensive portals.",
      nextSteps: [
        "Optimize for emergency keywords: 'auto repair now' + city",
        "Show prices and services transparently in Google Business Profile",
        "Document completed repairs with photos",
        "Respond to every review within 24 hours"
      ]
    }
  },
  "local-seo-tierarzt": {
    de: {
      summary: "Tierbesitzer suchen in Notfällen panisch — und bleiben nach dem ersten Besuch oft treu. Notdienst-SEO, empathische Bewertungsantworten und tiermedizinische E-E-A-T-Signale machen deine Praxis zur ersten Wahl.",
      nextSteps: [
        "Ergänze Notdienst-Öffnungszeiten im Google Business Profil",
        "Erstelle Landingpages für häufige Tierarten und Behandlungen",
        "Registriere dich auf Tierarzt-Portalen und -Verzeichnissen",
        "Poste Tiergesundheits-Tipps als wöchentliche Google Posts"
      ]
    },
    en: {
      summary: "Pet owners search frantically in emergencies — and often stay loyal after the first visit. Emergency SEO, empathetic review responses and veterinary E-E-A-T signals make your practice the first choice.",
      nextSteps: [
        "Add emergency opening hours to Google Business Profile",
        "Create landing pages for common animal types and treatments",
        "Register on veterinary portals and directories",
        "Post pet health tips as weekly Google Posts"
      ]
    }
  },
  "local-seo-zahnarzt": {
    de: {
      summary: "Zahnarztpraxen stehen im härtesten lokalen Wettbewerb. Bewertungen, Behandlungsspezifische Keywords und YMYL-konforme Inhalte entscheiden darüber, welche Praxis die Neupatienten bekommt.",
      nextSteps: [
        "Erstelle Behandlungsseiten für Implantate, Bleaching und Prophylaxe",
        "Sammle systematisch Bewertungen mit der QR-Code-Strategie",
        "Ergänze Qualifikationen und Fortbildungen im GBP",
        "Optimiere für 'Zahnarzt Notdienst' + deine Stadt"
      ]
    },
    en: {
      summary: "Dental practices face the toughest local competition. Reviews, treatment-specific keywords and YMYL-compliant content determine which practice gets the new patients.",
      nextSteps: [
        "Create treatment pages for implants, whitening and prophylaxis",
        "Systematically collect reviews with the QR code strategy",
        "Add qualifications and continuing education to GBP",
        "Optimize for 'dentist emergency' + your city"
      ]
    }
  },
  "local-seo-physiotherapie": {
    de: {
      summary: "Physiotherapeuten haben einen natürlichen SEO-Vorteil: Wiederkehrende Patienten und Überweisungs-Netzwerke. Wer diese offline-Stärke online sichtbar macht, baut eine uneinholbare lokale Präsenz auf.",
      nextSteps: [
        "Erstelle Behandlungsseiten für deine Spezialisierungen",
        "Bitte Patienten nach Behandlungsabschluss um eine Bewertung",
        "Kooperiere mit Ärzten für gegenseitige Online-Empfehlungen",
        "Poste Übungs-Tipps und Gesundheitsratgeber als Google Posts"
      ]
    },
    en: {
      summary: "Physical therapists have a natural SEO advantage: returning patients and referral networks. Those who make this offline strength visible online build an unbeatable local presence.",
      nextSteps: [
        "Create treatment pages for your specializations",
        "Ask patients for a review after treatment completion",
        "Cooperate with doctors for mutual online referrals",
        "Post exercise tips and health guides as Google Posts"
      ]
    }
  },
  "local-seo-optiker": {
    de: {
      summary: "Optiker und Hörakustiker haben den Vorteil persönlicher Beratung — online sichtbar zu sein, bringt genau die Kunden, die diese Beratung suchen. Produktkatalog, Marken-Keywords und lokale Sichtbarkeit sind der Schlüssel.",
      nextSteps: [
        "Pflege den Produktkatalog im Google Business Profil",
        "Erstelle Landingpages für Top-Marken + deine Stadt",
        "Biete Online-Terminbuchung über dein GBP an",
        "Poste saisonale Angebote als Google Posts (z.B. Sonnenbrillen-Saison)"
      ]
    },
    en: {
      summary: "Opticians and hearing aid specialists have the advantage of personal consultation — being visible online brings exactly the customers looking for that advice. Product catalog, brand keywords and local visibility are the key.",
      nextSteps: [
        "Maintain the product catalog in Google Business Profile",
        "Create landing pages for top brands + your city",
        "Offer online appointment booking through your GBP",
        "Post seasonal offers as Google Posts (e.g., sunglasses season)"
      ]
    }
  },
  "local-seo-elektrotechnik": {
    de: {
      summary: "Elektriker profitieren von Notdienst-SEO — die Conversion-Rate bei 'Elektriker Notdienst' liegt bei über 40 %. Wer hier sichtbar ist und schnell reagiert, baut sich ein planbares Auftragspolster auf.",
      nextSteps: [
        "Optimiere aggressiv für 'Elektriker Notdienst + Stadt'",
        "Zeige 24h-Erreichbarkeit prominent im GBP",
        "Erstelle eine Seite für Notfall-Services mit Click-to-Call",
        "Dokumentiere abgeschlossene Projekte für das Portfolio"
      ]
    },
    en: {
      summary: "Electricians benefit from emergency SEO — the conversion rate for 'electrician emergency' is over 40%. Those visible here who respond quickly build a predictable job pipeline.",
      nextSteps: [
        "Aggressively optimize for 'electrician emergency + city'",
        "Show 24h availability prominently in GBP",
        "Create an emergency services page with click-to-call",
        "Document completed projects for the portfolio"
      ]
    }
  },
  "local-seo-apotheken": {
    de: {
      summary: "Apotheken haben durch Notdienst-Pflicht, Gesundheitsberatung und Stammkunden einen einzigartigen lokalen Vorteil. Wer diesen Vorteil digital sichtbar macht, gewinnt gegen Online-Versand und Filialisten.",
      nextSteps: [
        "Pflege Notdienst-Kalender und Sonderöffnungszeiten im GBP",
        "Erstelle Gesundheitsratgeber für häufige Beschwerden",
        "Registriere dich auf aponet.de und Apotheken-Portalen",
        "Bewerbe Zusatzservices wie Impfungen und Blutdruckmessung"
      ]
    },
    en: {
      summary: "Pharmacies have a unique local advantage through emergency service obligations, health consultations and regular customers. Those who make this advantage digitally visible win against online retail and chains.",
      nextSteps: [
        "Maintain emergency schedule and special hours in GBP",
        "Create health guides for common complaints",
        "Register on pharmacy portals and directories",
        "Promote additional services like vaccinations and blood pressure checks"
      ]
    }
  },
  "local-seo-fotograf": {
    de: {
      summary: "Fotografen verkaufen visuelles Vertrauen. Ein professionelles Portfolio, Nischen-Keywords und aktive Präsenz auf Hochzeits- und Event-Portalen sind die drei Säulen für eine volle Auftragsliste.",
      nextSteps: [
        "Erstelle Nischen-Landingpages: Hochzeit, Business, Event + Stadt",
        "Lade deine besten 30 Fotos mit Alt-Tags ins Google Business Profil",
        "Registriere dich auf Hochzeitsportalen für deine Region",
        "Poste wöchentlich aktuelle Shootings als Google Posts"
      ]
    },
    en: {
      summary: "Photographers sell visual trust. A professional portfolio, niche keywords and active presence on wedding and event portals are the three pillars for a full booking list.",
      nextSteps: [
        "Create niche landing pages: wedding, business, event + city",
        "Upload your best 30 photos with alt tags to Google Business Profile",
        "Register on wedding portals for your region",
        "Post weekly current shoots as Google Posts"
      ]
    }
  },
  "local-seo-yoga-studios": {
    de: {
      summary: "Yoga-Schüler suchen nach Nähe, Stil und Atmosphäre. Wer diese drei Faktoren online kommuniziert — durch Keywords, Fotos und Bewertungen — füllt seine Kurse ohne teure Werbung.",
      nextSteps: [
        "Erstelle Landingpages für jeden Yoga-Stil den du anbietest",
        "Fotografiere dein Studio für eine warme, einladende Atmosphäre",
        "Biete eine kostenlose Probestunde über dein GBP an",
        "Bitte Kursteilnehmer nach der Stunde um eine Bewertung"
      ]
    },
    en: {
      summary: "Yoga students search for proximity, style and atmosphere. Those who communicate these three factors online — through keywords, photos and reviews — fill their classes without expensive advertising.",
      nextSteps: [
        "Create landing pages for each yoga style you offer",
        "Photograph your studio for a warm, inviting atmosphere",
        "Offer a free trial class through your GBP",
        "Ask class participants for a review after class"
      ]
    }
  },
  "local-seo-tattoo-studios": {
    de: {
      summary: "Tattoo-Studios verkaufen eine lebenslange Entscheidung. Portfolio-Qualität, Stil-spezifische Keywords und authentische Bewertungen sind die Entscheidungsfaktoren — und alle drei lassen sich online optimieren.",
      nextSteps: [
        "Pflege ein umfassendes Portfolio sortiert nach Stilen",
        "Erstelle Landingpages für deine Spezialisierungen + Stadt",
        "Poste wöchentlich frische Arbeiten als Google Posts",
        "Antworte persönlich auf jede Bewertung mit Dankbarkeit"
      ]
    },
    en: {
      summary: "Tattoo studios sell a lifelong decision. Portfolio quality, style-specific keywords and authentic reviews are the deciding factors — and all three can be optimized online.",
      nextSteps: [
        "Maintain a comprehensive portfolio sorted by styles",
        "Create landing pages for your specializations + city",
        "Post weekly fresh work as Google Posts",
        "Respond personally to every review with gratitude"
      ]
    }
  },
  "local-seo-baeckerei": {
    de: {
      summary: "Bäckereien haben die höchste Conversion-Rate aller lokalen Suchen — wer 'Bäckerei in der Nähe' sucht, kauft fast immer. Sichtbarkeit bei Google ist für Bäckereien bares Geld.",
      nextSteps: [
        "Pflege Öffnungszeiten akkurat — besonders Sonn- und Feiertage",
        "Fotografiere deine beliebtesten Produkte appetitlich",
        "Erstelle saisonale Google Posts für Stollen, Berliner, etc.",
        "Bitte Stammkunden am Tresen um eine Bewertung"
      ]
    },
    en: {
      summary: "Bakeries have the highest conversion rate of all local searches — those searching 'bakery near me' almost always buy. Google visibility is cash money for bakeries.",
      nextSteps: [
        "Keep opening hours accurate — especially Sundays and holidays",
        "Photograph your most popular products appetizingly",
        "Create seasonal Google Posts for holiday specialties",
        "Ask regular customers at the counter for a review"
      ]
    }
  },
  "local-seo-sanitaer-heizung": {
    de: {
      summary: "SHK-Betriebe profitieren massiv von Notdienst-SEO im Winter und Klima-Keywords im Sommer. Saisonale Optimierung kombiniert mit dauerhafter Präsenz ergibt ganzjährig volle Auftragsbücher.",
      nextSteps: [
        "Erstelle separate Landingpages für Heizung, Sanitär und Klima",
        "Optimiere saisonal: Heizungsnotdienst (Winter), Klimaanlagen (Sommer)",
        "Dokumentiere abgeschlossene Installationen mit Fotos",
        "Kooperiere mit Hausverwaltungen für regelmäßige Empfehlungen"
      ]
    },
    en: {
      summary: "HVAC businesses massively benefit from emergency SEO in winter and cooling keywords in summer. Seasonal optimization combined with permanent presence results in year-round full order books.",
      nextSteps: [
        "Create separate landing pages for heating, plumbing and cooling",
        "Optimize seasonally: heating emergency (winter), AC (summer)",
        "Document completed installations with photos",
        "Cooperate with property managers for regular referrals"
      ]
    }
  },
  "local-seo-case-study-baecker": {
    de: {
      summary: "Diese Case Study beweist: Local SEO funktioniert auch für kleine Betriebe mit begrenztem Budget. Die Kombination aus GBP-Optimierung, Bewertungsstrategie und lokalem Content führte zu messbaren Ergebnissen.",
      nextSteps: [
        "Wende die gleichen 7 Schritte auf dein Unternehmen an",
        "Starte mit der GBP-Optimierung als Quick Win",
        "Setze dir ein realistisches 90-Tage-Ziel für Bewertungen",
        "Dokumentiere deine eigenen Ergebnisse für den ROI-Nachweis"
      ]
    },
    en: {
      summary: "This case study proves: Local SEO works even for small businesses with limited budgets. The combination of GBP optimization, review strategy and local content led to measurable results.",
      nextSteps: [
        "Apply the same 7 steps to your business",
        "Start with GBP optimization as a quick win",
        "Set a realistic 90-day goal for reviews",
        "Document your own results for ROI proof"
      ]
    }
  },

  // === REGIONEN ===
  "local-seo-schweiz": {
    de: {
      summary: "Die Schweiz ist ein eigener SEO-Markt — Mehrsprachigkeit, .ch-Domain, eigene Verzeichnisse und kantonale Besonderheiten erfordern eine maßgeschneiderte Strategie. Wer deutsch-SEO 1:1 kopiert, verschenkt Potenzial.",
      nextSteps: [
        "Richte dein GBP für den Schweizer Markt ein (CHF, Schweizer Nummer)",
        "Registriere dich bei local.ch und search.ch",
        "Prüfe, ob du mehrsprachige Landingpages brauchst (DE/FR/IT)",
        "Optimiere für Schweizer Suchbegriffe (Coiffeur statt Friseur)"
      ]
    },
    en: {
      summary: "Switzerland is its own SEO market — multilingualism, .ch domain, unique directories and cantonal specifics require a tailored strategy. Those who copy German SEO 1:1 waste potential.",
      nextSteps: [
        "Set up your GBP for the Swiss market (CHF, Swiss number)",
        "Register on local.ch and search.ch",
        "Check if you need multilingual landing pages (DE/FR/IT)",
        "Optimize for Swiss search terms"
      ]
    }
  },
  "local-seo-zuerich": {
    de: {
      summary: "Zürich bietet die höchste Kaufkraft der Schweiz — und den härtesten Wettbewerb. Stadtteil-spezifische Keywords und Premium-Positionierung sind der Weg zum Zürcher Local Pack.",
      nextSteps: [
        "Erstelle Landingpages für Kreis 1-12 mit lokalen Keywords",
        "Positioniere dich als Premium-Anbieter passend zur Zürcher Kaufkraft",
        "Registriere dich bei Zürich-spezifischen Verzeichnissen",
        "Nutze Events wie Züri Fäscht für saisonale SEO-Kampagnen"
      ]
    },
    en: {
      summary: "Zurich offers Switzerland's highest purchasing power — and the toughest competition. District-specific keywords and premium positioning are the path to the Zurich Local Pack.",
      nextSteps: [
        "Create landing pages for districts 1-12 with local keywords",
        "Position yourself as a premium provider matching Zurich's purchasing power",
        "Register on Zurich-specific directories",
        "Use events like Züri Fäscht for seasonal SEO campaigns"
      ]
    }
  },
  "local-seo-muenchen": {
    de: {
      summary: "München hat 25 Stadtbezirke — und jeder hat eigene Suchmuster. Wer bayerische Begriffe, Stadtteil-Keywords und die lokale Kaufkraft versteht, dominiert die Münchner Suchergebnisse.",
      nextSteps: [
        "Erstelle Landingpages für deine 3-5 wichtigsten Stadtteile",
        "Integriere bayerische Begriffe natürlich in deine Inhalte",
        "Registriere dich bei muenchen.de und dem Münchner Branchenbuch",
        "Nutze Oktoberfest und Starkbierzeit für saisonale Google Posts"
      ]
    },
    en: {
      summary: "Munich has 25 districts — and each has its own search patterns. Those who understand Bavarian terms, district keywords and local purchasing power dominate Munich search results.",
      nextSteps: [
        "Create landing pages for your 3-5 most important districts",
        "Naturally integrate Bavarian terms into your content",
        "Register on munich.de and the Munich business directory",
        "Use Oktoberfest and strong beer season for seasonal Google Posts"
      ]
    }
  },
  "local-seo-hamburg": {
    de: {
      summary: "Hamburg hat 104 Stadtteile — von der Schanze bis Blankenese mit völlig unterschiedlichen Zielgruppen. Wer die hanseatische Suchkultur versteht, gewinnt in Deutschlands zweitgrößter Stadt.",
      nextSteps: [
        "Identifiziere deine Top-3-Stadtteile nach Kundenpotenzial",
        "Erstelle lokalisierte Landingpages für diese Stadtteile",
        "Registriere dich bei hamburg.de und Hamburger Verzeichnissen",
        "Nutze Hafengeburtstag und DOM für saisonale Kampagnen"
      ]
    },
    en: {
      summary: "Hamburg has 104 neighborhoods — from Schanze to Blankenese with completely different target groups. Those who understand Hanseatic search culture win in Germany's second-largest city.",
      nextSteps: [
        "Identify your top 3 districts by customer potential",
        "Create localized landing pages for these districts",
        "Register on hamburg.de and Hamburg directories",
        "Use Harbor Birthday and DOM for seasonal campaigns"
      ]
    }
  },
  "local-seo-berlin": {
    de: {
      summary: "Berlin ist Deutschlands größter und diversester lokaler Markt. 96 Ortsteile, internationale Zielgruppen und starker Wettbewerb — aber wer die Kiez-Kultur versteht, hat einen unschlagbaren Vorteil.",
      nextSteps: [
        "Fokussiere auf 3-5 Kieze statt auf ganz Berlin",
        "Erwäge englischsprachige Inhalte für internationale Kunden",
        "Registriere dich bei berlin.de und Berliner Branchenverzeichnissen",
        "Nutze Berliner Events für lokale Content-Kampagnen"
      ]
    },
    en: {
      summary: "Berlin is Germany's largest and most diverse local market. 96 neighborhoods, international audiences and strong competition — but those who understand neighborhood culture have an unbeatable advantage.",
      nextSteps: [
        "Focus on 3-5 neighborhoods instead of all of Berlin",
        "Consider English content for international customers",
        "Register on berlin.de and Berlin business directories",
        "Use Berlin events for local content campaigns"
      ]
    }
  },
  "local-seo-koeln": {
    de: {
      summary: "Köln ist 'Veedel'-Stadt — lokaler geht es kaum. Wer kölsche Kultur, Karneval-SEO und die richtigen Veedel-Keywords kombiniert, wird Teil der Stadt statt nur ein Google-Eintrag.",
      nextSteps: [
        "Erstelle Landingpages für deine wichtigsten Veedel",
        "Nutze Karneval und Weihnachtsmärkte für saisonale Inhalte",
        "Registriere dich bei koeln.de und kölschen Verzeichnissen",
        "Integriere kölsche Begriffe natürlich in deine Texte"
      ]
    },
    en: {
      summary: "Cologne is a 'Veedel' city — it doesn't get more local. Those who combine Cologne culture, carnival SEO and the right neighborhood keywords become part of the city, not just a Google listing.",
      nextSteps: [
        "Create landing pages for your most important neighborhoods",
        "Use Carnival and Christmas markets for seasonal content",
        "Register on koeln.de and Cologne directories",
        "Naturally integrate Cologne terms into your texts"
      ]
    }
  },
  "local-seo-wien": {
    de: {
      summary: "Wien hat 23 Bezirke mit eigenen Identitäten. Österreichisches Deutsch, eigene Verzeichnisse und die Wiener Suchkultur unterscheiden sich deutlich vom deutschen Markt — dieser Guide berücksichtigt das.",
      nextSteps: [
        "Erstelle Bezirks-spezifische Landingpages für deine Kerngebiete",
        "Nutze österreichische Suchbegriffe statt deutsche",
        "Registriere dich bei herold.at und Wiener Verzeichnissen",
        "Optimiere für Wiener Institutionen und Kulturveranstaltungen"
      ]
    },
    en: {
      summary: "Vienna has 23 districts with their own identities. Austrian German, unique directories and Viennese search culture differ significantly from the German market — this guide accounts for that.",
      nextSteps: [
        "Create district-specific landing pages for your core areas",
        "Use Austrian search terms instead of German ones",
        "Register on herold.at and Viennese directories",
        "Optimize for Viennese institutions and cultural events"
      ]
    }
  },
  "local-seo-basel": {
    de: {
      summary: "Basel im Dreiländereck bietet einzigartige Chancen: Kunden aus drei Ländern, zwei Sprachen und die Pharma-Kaufkraft. Wer mehrsprachig und grenzüberschreitend optimiert, verdreifacht seine Reichweite.",
      nextSteps: [
        "Erstelle Landingpages für deutsche und französische Keywords",
        "Registriere dich bei local.ch und auch bei deutschen Verzeichnissen",
        "Nutze Art Basel und Fasnacht für saisonale SEO-Kampagnen",
        "Erwäge englische Inhalte für die internationale Pharma-Community"
      ]
    },
    en: {
      summary: "Basel in the tri-border area offers unique opportunities: customers from three countries, two languages and pharma purchasing power. Those who optimize multilingually and cross-border triple their reach.",
      nextSteps: [
        "Create landing pages for German and French keywords",
        "Register on local.ch and also German directories",
        "Use Art Basel and Fasnacht for seasonal SEO campaigns",
        "Consider English content for the international pharma community"
      ]
    }
  },
  "local-seo-frankfurt": {
    de: {
      summary: "Frankfurts Finanzsektor bringt B2B-Kunden mit hohem Budget und internationale Fachkräfte, die auf Englisch suchen. Wer beides bedient, spielt in einer anderen Liga.",
      nextSteps: [
        "Erstelle zweisprachige Landingpages (DE/EN) für internationale Kunden",
        "Fokussiere auf B2B-Keywords für den Finanzsektor",
        "Registriere dich bei IHK Frankfurt und lokalen Netzwerken",
        "Nutze Messen und Konferenzen für saisonale Content-Kampagnen"
      ]
    },
    en: {
      summary: "Frankfurt's financial sector brings B2B clients with high budgets and international professionals who search in English. Those who serve both play in a different league.",
      nextSteps: [
        "Create bilingual landing pages (DE/EN) for international clients",
        "Focus on B2B keywords for the financial sector",
        "Register with IHK Frankfurt and local networks",
        "Use trade fairs and conferences for seasonal content campaigns"
      ]
    }
  },
  "local-seo-stuttgart": {
    de: {
      summary: "Stuttgart als Automobilhauptstadt bietet B2B- und B2C-Potenzial gleichermaßen. Industrienahe Keywords, schwäbische Suchkultur und die starke regionale Kaufkraft machen die Stadt zum SEO-Goldmine.",
      nextSteps: [
        "Identifiziere Industrie-nahe Keywords für dein Gewerk",
        "Erstelle Stadtbezirk-Landingpages für deine Kerngebiete",
        "Registriere dich bei der IHK Stuttgart und Region",
        "Nutze schwäbische Begriffe natürlich in deinen Texten"
      ]
    },
    en: {
      summary: "Stuttgart as automotive capital offers both B2B and B2C potential. Industry-related keywords, Swabian search culture and strong regional purchasing power make the city an SEO goldmine.",
      nextSteps: [
        "Identify industry-related keywords for your trade",
        "Create district landing pages for your core areas",
        "Register with IHK Stuttgart and region",
        "Use Swabian terms naturally in your texts"
      ]
    }
  },
  "local-seo-duesseldorf": {
    de: {
      summary: "Düsseldorf vereint Mode, Messe und Medien — drei Branchen, die massiv von lokaler Sichtbarkeit profitieren. Von der Kö bis Flingern: Stadtteil-SEO und Premium-Positionierung sind der Schlüssel.",
      nextSteps: [
        "Erstelle Landingpages für Altstadt, Kö und deine Kerngebiete",
        "Nutze Düsseldorfer Messen für saisonale SEO-Kampagnen",
        "Registriere dich bei duesseldorf.de und lokalen Netzwerken",
        "Positioniere dich passend zur Düsseldorfer Kaufkraft"
      ]
    },
    en: {
      summary: "Düsseldorf combines fashion, trade fairs and media — three industries that massively benefit from local visibility. From the Kö to Flingern: district SEO and premium positioning are the key.",
      nextSteps: [
        "Create landing pages for Altstadt, Kö and your core areas",
        "Use Düsseldorf trade fairs for seasonal SEO campaigns",
        "Register on duesseldorf.de and local networks",
        "Position yourself matching Düsseldorf's purchasing power"
      ]
    }
  },
  "local-seo-hannover": {
    de: {
      summary: "Hannover ist Messemetropole und Versicherungsstandort — beides bringt saisonales und dauerhaftes SEO-Potenzial. Wer Messe-Traffic und lokale B2B-Suche kombiniert, gewinnt doppelt.",
      nextSteps: [
        "Erstelle Messe-spezifische Landingpages für Großveranstaltungen",
        "Optimiere für B2B-Keywords der Versicherungsbranche",
        "Registriere dich bei hannover.de und der IHK Hannover",
        "Nutze Maschseefest und Schützenfest für saisonale Inhalte"
      ]
    },
    en: {
      summary: "Hannover is a trade fair metropolis and insurance hub — both bring seasonal and permanent SEO potential. Those who combine trade fair traffic and local B2B search win twice.",
      nextSteps: [
        "Create trade fair-specific landing pages for major events",
        "Optimize for B2B keywords in the insurance industry",
        "Register on hannover.de and IHK Hannover",
        "Use Maschseefest and Schützenfest for seasonal content"
      ]
    }
  },

  // === TECHNIK ===
  "schema-markup-local-seo": {
    de: {
      summary: "Schema Markup ist der technische Hebel, den die meisten lokalen Unternehmen ignorieren. Korrekt implementierte strukturierte Daten bringen Rich Snippets, bessere CTR und Vorteile in der AI-Suche.",
      nextSteps: [
        "Implementiere LocalBusiness Schema auf deiner Homepage",
        "Ergänze FAQ Schema auf deinen meistbesuchten Seiten",
        "Teste dein Markup mit dem Google Rich Results Test",
        "Erweitere mit Review und Event Schema wo passend"
      ]
    },
    en: {
      summary: "Schema Markup is the technical lever most local businesses ignore. Correctly implemented structured data brings Rich Snippets, better CTR and advantages in AI search.",
      nextSteps: [
        "Implement LocalBusiness Schema on your homepage",
        "Add FAQ Schema to your most visited pages",
        "Test your markup with Google Rich Results Test",
        "Extend with Review and Event Schema where applicable"
      ]
    }
  },
  "mobile-local-seo": {
    de: {
      summary: "Mobile ist nicht die Zukunft, sondern die Gegenwart der lokalen Suche. 80 % aller lokalen Suchen sind mobil — und Google rankt Mobile-First. Wer hier nicht optimiert, ist für den Großteil der Kunden unsichtbar.",
      nextSteps: [
        "Teste deine Website mit Google PageSpeed Insights",
        "Implementiere Click-to-Call auf jeder Seite",
        "Optimiere Ladezeiten unter 3 Sekunden",
        "Prüfe die mobile Nutzererfahrung auf 3 verschiedenen Geräten"
      ]
    },
    en: {
      summary: "Mobile isn't the future, it's the present of local search. 80% of all local searches are mobile — and Google ranks Mobile-First. Not optimizing here makes you invisible to most customers.",
      nextSteps: [
        "Test your website with Google PageSpeed Insights",
        "Implement click-to-call on every page",
        "Optimize load times under 3 seconds",
        "Check mobile user experience on 3 different devices"
      ]
    }
  },
  "core-web-vitals-local-seo": {
    de: {
      summary: "Core Web Vitals sind messbar, optimierbar und direkt Ranking-relevant. LCP, FID/INP und CLS sind keine abstrakten Metriken — sie bestimmen, ob Google deine Seite für Suchende empfiehlt.",
      nextSteps: [
        "Messe deine aktuellen Core Web Vitals mit PageSpeed Insights",
        "Optimiere LCP durch Bildkomprimierung und Lazy Loading",
        "Reduziere CLS durch feste Dimensionen für Bilder und Ads",
        "Überprüfe die Werte monatlich in der Google Search Console"
      ]
    },
    en: {
      summary: "Core Web Vitals are measurable, optimizable and directly ranking-relevant. LCP, FID/INP and CLS aren't abstract metrics — they determine whether Google recommends your page to searchers.",
      nextSteps: [
        "Measure your current Core Web Vitals with PageSpeed Insights",
        "Optimize LCP through image compression and lazy loading",
        "Reduce CLS through fixed dimensions for images and ads",
        "Check values monthly in Google Search Console"
      ]
    }
  },
  "entity-seo-guide": {
    de: {
      summary: "Entity SEO ist die Brücke zwischen klassischem SEO und AI-Suche. Wer als Entität erkannt wird, erhält Knowledge Panels, wird in AI Overviews zitiert und baut nachhaltige Autorität auf.",
      nextSteps: [
        "Erstelle oder aktualisiere deinen Wikipedia/Wikidata-Eintrag",
        "Implementiere Organization Schema mit allen Entity-Verknüpfungen",
        "Baue konsistente Erwähnungen über mehrere autoritative Quellen auf",
        "Verknüpfe alle Social-Media-Profile in deinem Schema Markup"
      ]
    },
    en: {
      summary: "Entity SEO is the bridge between classic SEO and AI search. Those recognized as entities receive Knowledge Panels, get cited in AI Overviews and build sustainable authority.",
      nextSteps: [
        "Create or update your Wikipedia/Wikidata entry",
        "Implement Organization Schema with all entity connections",
        "Build consistent mentions across multiple authoritative sources",
        "Link all social media profiles in your Schema Markup"
      ]
    }
  },

  // === BEWERTUNGEN ===
  "negative-google-bewertungen": {
    de: {
      summary: "Negative Bewertungen sind unvermeidlich — aber deine Reaktion entscheidet, ob sie Kunden abschrecken oder Professionalität demonstrieren. Die richtige Antwort kann einen Kritiker zum Fürsprecher machen.",
      nextSteps: [
        "Antworte auf alle negativen Bewertungen innerhalb von 24 Stunden",
        "Nutze unsere Antwort-Vorlagen als Ausgangspunkt",
        "Überprüfe, ob Bewertungen gegen Richtlinien verstoßen (Löschantrag)",
        "Implementiere ein Frühwarnsystem für neue negative Bewertungen"
      ]
    },
    en: {
      summary: "Negative reviews are inevitable — but your response determines whether they deter customers or demonstrate professionalism. The right answer can turn a critic into an advocate.",
      nextSteps: [
        "Respond to all negative reviews within 24 hours",
        "Use our response templates as a starting point",
        "Check if reviews violate guidelines (deletion request)",
        "Implement an early warning system for new negative reviews"
      ]
    }
  },
  "bewertungs-antworten-vorlagen": {
    de: {
      summary: "Professionelle Bewertungsantworten stärken dein Ranking und dein Image. Die 50 Vorlagen decken jede Situation ab — von der begeisterten 5-Sterne-Rezension bis zur unberechtigten 1-Stern-Beschwerde.",
      nextSteps: [
        "Beantworte alle unbeantworteten Bewertungen mit den passenden Vorlagen",
        "Passe die Vorlagen an deine Branche und Tonalität an",
        "Richte Benachrichtigungen für neue Bewertungen ein",
        "Erstelle eine interne Richtlinie für Bewertungsantworten"
      ]
    },
    en: {
      summary: "Professional review responses strengthen your ranking and image. The 50 templates cover every situation — from enthusiastic 5-star reviews to unwarranted 1-star complaints.",
      nextSteps: [
        "Respond to all unanswered reviews with matching templates",
        "Customize templates to your industry and tone",
        "Set up notifications for new reviews",
        "Create an internal guideline for review responses"
      ]
    }
  },

  // === GOOGLE BUSINESS ===
  "google-business-kategorien-guide": {
    de: {
      summary: "Die richtige Kategorie ist einer der stärksten Ranking-Hebel — und kostet null Euro. Haupt- und Nebenkategorien strategisch zu wählen, kann deine Sichtbarkeit um bis zu 41 % steigern.",
      nextSteps: [
        "Überprüfe deine aktuelle Hauptkategorie mit unserem Guide",
        "Ergänze 2-3 relevante Nebenkategorien",
        "Analysiere die Kategorien deiner Top-3-Konkurrenten",
        "Passe Kategorien saisonal an, falls dein Business es erfordert"
      ]
    },
    en: {
      summary: "The right category is one of the strongest ranking levers — and costs zero euros. Strategically choosing primary and secondary categories can boost your visibility by up to 41%.",
      nextSteps: [
        "Check your current primary category with our guide",
        "Add 2-3 relevant secondary categories",
        "Analyze the categories of your top 3 competitors",
        "Adjust categories seasonally if your business requires it"
      ]
    }
  },
  "gbp-fotos-optimieren": {
    de: {
      summary: "Fotos sind der am meisten unterschätzte Ranking-Faktor bei Google Business. Hochwertige, regelmäßig aktualisierte Bilder signalisieren Aktivität und steigern die Klickrate messbar.",
      nextSteps: [
        "Lade mindestens 25 Fotos in verschiedenen Kategorien hoch",
        "Benenne alle Dateien mit Keywords vor dem Upload",
        "Aktualisiere Fotos monatlich für frische Signale",
        "Reagiere auf Kunden-Fotos mit Kommentaren"
      ]
    },
    en: {
      summary: "Photos are the most underrated ranking factor on Google Business. High-quality, regularly updated images signal activity and measurably increase click-through rates.",
      nextSteps: [
        "Upload at least 25 photos in various categories",
        "Name all files with keywords before uploading",
        "Update photos monthly for fresh signals",
        "Respond to customer photos with comments"
      ]
    }
  },

  // === TROUBLESHOOTING ===
  "gbp-suspendiert-reaktivieren": {
    de: {
      summary: "Eine GBP-Suspendierung ist ärgerlich, aber in den meisten Fällen reversibel. Schnelles, korrektes Handeln und die richtigen Beweise sind entscheidend für eine erfolgreiche Reaktivierung.",
      nextSteps: [
        "Identifiziere den Suspendierungsgrund mit unserer Checkliste",
        "Bereite alle Nachweisdokumente vor (Gewerbeschein, Mietvertrag)",
        "Reiche den Widerspruch über das offizielle Formular ein",
        "Kontaktiere den Google Business Support bei Verzögerungen"
      ]
    },
    en: {
      summary: "A GBP suspension is annoying but reversible in most cases. Quick, correct action and the right evidence are crucial for successful reactivation.",
      nextSteps: [
        "Identify the suspension reason with our checklist",
        "Prepare all proof documents (business license, lease)",
        "Submit the appeal through the official form",
        "Contact Google Business Support for delays"
      ]
    }
  },
  "ranking-ploetzlich-verschwunden": {
    de: {
      summary: "Ein plötzlicher Ranking-Verlust hat immer eine Ursache — und meistens ist sie behebbar. Von Google-Updates über technische Probleme bis zu Konkurrenz-Aktionen: Systematische Diagnose führt zur Lösung.",
      nextSteps: [
        "Prüfe die Google Search Console auf manuelle Maßnahmen",
        "Überprüfe, ob ein Google-Algorithmus-Update stattgefunden hat",
        "Scanne deine Website auf technische Fehler (404s, Indexierung)",
        "Vergleiche dein GBP mit den Top-3-Konkurrenten"
      ]
    },
    en: {
      summary: "A sudden ranking loss always has a cause — and it's usually fixable. From Google updates to technical issues to competitor actions: Systematic diagnosis leads to the solution.",
      nextSteps: [
        "Check Google Search Console for manual actions",
        "Verify if a Google algorithm update occurred",
        "Scan your website for technical errors (404s, indexing)",
        "Compare your GBP with the top 3 competitors"
      ]
    }
  },

  // === TOOLS ===
  "seo-toolbox-kostenlose-ressourcen": {
    de: {
      summary: "50+ kostenlose SEO-Tools — sortiert, bewertet und mit direkten Links. Diese Toolbox ist deine zentrale Anlaufstelle für jede SEO-Aufgabe, ohne Budget ausgeben zu müssen.",
      nextSteps: [
        "Bookmarke diese Seite als SEO-Referenz",
        "Richte Google Search Console und Analytics ein, falls noch nicht geschehen",
        "Teste 3 neue Tools aus der Liste für deine häufigsten Aufgaben",
        "Erstelle einen SEO-Workflow mit deinen Lieblings-Tools"
      ]
    },
    en: {
      summary: "50+ free SEO tools — sorted, rated and with direct links. This toolbox is your central hub for every SEO task without spending any budget.",
      nextSteps: [
        "Bookmark this page as your SEO reference",
        "Set up Google Search Console and Analytics if not done yet",
        "Test 3 new tools from the list for your most common tasks",
        "Create an SEO workflow with your favorite tools"
      ]
    }
  },
  "ki-tools-local-seo": {
    de: {
      summary: "KI-Tools revolutionieren Local SEO: Content-Erstellung, Analyse und Optimierung in einem Bruchteil der Zeit. Die Kunst liegt darin, die richtigen Tools für die richtigen Aufgaben einzusetzen.",
      nextSteps: [
        "Teste ChatGPT für die Erstellung von Google Posts und Bewertungsantworten",
        "Nutze AI für die Keyword-Recherche und Wettbewerbsanalyse",
        "Erstelle Schema Markup mit AI-Unterstützung",
        "Integriere AI-Tools in deine monatliche SEO-Routine"
      ]
    },
    en: {
      summary: "AI tools are revolutionizing Local SEO: content creation, analysis and optimization in a fraction of the time. The art lies in using the right tools for the right tasks.",
      nextSteps: [
        "Test ChatGPT for creating Google Posts and review responses",
        "Use AI for keyword research and competitive analysis",
        "Create Schema Markup with AI assistance",
        "Integrate AI tools into your monthly SEO routine"
      ]
    }
  },
  "google-ai-overviews-local-seo": {
    de: {
      summary: "Google AI Overviews verändern die lokale Suche fundamental. Wer als Quelle zitiert wird, gewinnt massiv an Sichtbarkeit. Wer nicht, verliert Klicks an die AI-generierten Antworten.",
      nextSteps: [
        "Implementiere vollständiges Schema Markup auf deiner Website",
        "Strukturiere Inhalte nach dem Fact-First-Prinzip",
        "Baue E-E-A-T-Signale systematisch auf",
        "Monitore, ob dein Unternehmen in AI Overviews erscheint"
      ]
    },
    en: {
      summary: "Google AI Overviews are fundamentally changing local search. Those cited as sources gain massive visibility. Those who aren't lose clicks to AI-generated answers.",
      nextSteps: [
        "Implement complete Schema Markup on your website",
        "Structure content using the fact-first principle",
        "Build E-E-A-T signals systematically",
        "Monitor whether your business appears in AI Overviews"
      ]
    }
  },
  "local-seo-voice-search": {
    de: {
      summary: "Voice Search wächst bei lokalen Anfragen um 25 % jährlich. Gesprochene Suchen sind länger, natürlicher und stärker auf sofortige Antworten ausgerichtet — wer darauf optimiert, sichert sich die Zukunft.",
      nextSteps: [
        "Erstelle FAQ-Inhalte mit natürlichen Frage-Antwort-Paaren",
        "Implementiere Speakable Schema auf deinen wichtigsten Seiten",
        "Optimiere für 'in der Nähe'-Anfragen und Öffnungszeiten",
        "Teste deine Inhalte mit Sprachassistenten (Google, Siri, Alexa)"
      ]
    },
    en: {
      summary: "Voice search grows 25% annually for local queries. Spoken searches are longer, more natural and more focused on immediate answers — optimizing for them secures your future.",
      nextSteps: [
        "Create FAQ content with natural question-answer pairs",
        "Implement Speakable Schema on your most important pages",
        "Optimize for 'near me' queries and opening hours",
        "Test your content with voice assistants (Google, Siri, Alexa)"
      ]
    }
  },
  "e-e-a-t-lokale-unternehmen": {
    de: {
      summary: "E-E-A-T ist Googles Qualitätsmaßstab — und für lokale YMYL-Branchen (Ärzte, Anwälte, Finanzen) besonders kritisch. Wer Erfahrung, Expertise, Autorität und Vertrauen aufbaut, wird zur vertrauenswürdigsten Quelle in der Region.",
      nextSteps: [
        "Ergänze Qualifikationen und Zertifizierungen auf deiner Website",
        "Sammle Backlinks von lokalen Autoritäten (IHK, Universität)",
        "Veröffentliche Experten-Inhalte mit Autorenbox und Quellenangaben",
        "Baue eine 'Über uns'-Seite mit echten Fotos und Geschichte"
      ]
    },
    en: {
      summary: "E-E-A-T is Google's quality standard — and especially critical for local YMYL industries (doctors, lawyers, finance). Those who build experience, expertise, authority and trust become the most trustworthy source in the region.",
      nextSteps: [
        "Add qualifications and certifications to your website",
        "Collect backlinks from local authorities (chamber, university)",
        "Publish expert content with author box and source citations",
        "Build an 'About us' page with real photos and history"
      ]
    }
  },
  "lokale-seo-fuer-neugruender": {
    de: {
      summary: "Neugründer starten bei null — aber haben den Vorteil, alles von Anfang an richtig zu machen. Der 90-Tage-Plan gibt dir eine klare Prioritätenreihenfolge, die sofort Ergebnisse bringt.",
      nextSteps: [
        "Woche 1: Google Business Profil erstellen und verifizieren",
        "Woche 2-4: Die 10 wichtigsten Verzeichnis-Einträge anlegen",
        "Monat 2: Website mit lokalen Landingpages launchen",
        "Monat 3: Erste Bewertungskampagne starten"
      ]
    },
    en: {
      summary: "Startups begin at zero — but have the advantage of doing everything right from the start. The 90-day plan gives you a clear priority order that delivers immediate results.",
      nextSteps: [
        "Week 1: Create and verify Google Business Profile",
        "Week 2-4: Create the 10 most important directory listings",
        "Month 2: Launch website with local landing pages",
        "Month 3: Start first review campaign"
      ]
    }
  },
  "local-seo-notdienst-keywords": {
    de: {
      summary: "Notdienst-Keywords haben die höchste Conversion-Rate aller lokalen Suchen. Wer für 'Notdienst + Gewerk + Stadt' sichtbar ist, generiert die profitabelsten Aufträge — Tag und Nacht.",
      nextSteps: [
        "Erstelle eine dedizierte Notdienst-Landingpage mit Click-to-Call",
        "Optimiere dein GBP für 24h-Erreichbarkeit und Notdienst-Attribute",
        "Erwäge Google Ads für Notdienst-Keywords als Sofort-Maßnahme",
        "Pflege Notdienst-Öffnungszeiten akkurat im Google Business Profil"
      ]
    },
    en: {
      summary: "Emergency keywords have the highest conversion rate of all local searches. Those visible for 'emergency + trade + city' generate the most profitable jobs — day and night.",
      nextSteps: [
        "Create a dedicated emergency landing page with click-to-call",
        "Optimize your GBP for 24h availability and emergency attributes",
        "Consider Google Ads for emergency keywords as immediate measure",
        "Keep emergency hours accurate in Google Business Profile"
      ]
    }
  },
  "local-content-marketing": {
    de: {
      summary: "Lokaler Content ist der Schlüssel zu nachhaltigem organischem Traffic. Stadtteil-Guides, Event-Kalender und Nachbarschafts-Stories schaffen Relevanz, Backlinks und Kundenbindung gleichzeitig.",
      nextSteps: [
        "Erstelle einen Stadtteil-Guide für deinen Kernstandort",
        "Plane einen lokalen Event-Kalender für die nächsten 3 Monate",
        "Interviewe lokale Partner oder Nachbarn für Community-Stories",
        "Teile lokale Inhalte als Google Posts und auf Social Media"
      ]
    },
    en: {
      summary: "Local content is the key to sustainable organic traffic. District guides, event calendars and neighborhood stories create relevance, backlinks and customer loyalty simultaneously.",
      nextSteps: [
        "Create a district guide for your core location",
        "Plan a local event calendar for the next 3 months",
        "Interview local partners or neighbors for community stories",
        "Share local content as Google Posts and on social media"
      ]
    }
  },
  "local-link-building": {
    de: {
      summary: "Lokale Backlinks sind für kleine Unternehmen einfacher zu bekommen als viele denken. IHK, Vereine, lokale Presse und Sponsorings bieten natürliche Linkquellen mit hoher regionaler Relevanz.",
      nextSteps: [
        "Registriere dich bei der IHK und Handwerkskammer",
        "Identifiziere 5 lokale Sponsoring-Möglichkeiten",
        "Erstelle eine Pressemitteilung für die lokale Presse",
        "Baue 3 Backlinks pro Monat als nachhaltiges Ziel auf"
      ]
    },
    en: {
      summary: "Local backlinks are easier for small businesses to get than many think. Chambers of commerce, clubs, local press and sponsorships offer natural link sources with high regional relevance.",
      nextSteps: [
        "Register with the chamber of commerce and trade association",
        "Identify 5 local sponsorship opportunities",
        "Create a press release for local media",
        "Build 3 backlinks per month as a sustainable goal"
      ]
    }
  },
  "lokale-events-marketing": {
    de: {
      summary: "Lokale Events sind eine Goldgrube für SEO: Backlinks, Presseerwähnungen, Social-Media-Content und Kundenakquise — alles in einem. Der Schlüssel liegt in der strategischen Auswahl und Nachbereitung.",
      nextSteps: [
        "Identifiziere 3 relevante lokale Events für die nächsten 6 Monate",
        "Plane Sponsoring oder Teilnahme mit SEO-Zielen im Hinterkopf",
        "Erstelle Content vor, während und nach jedem Event",
        "Sichere dir Backlinks von Event-Websites und lokaler Presse"
      ]
    },
    en: {
      summary: "Local events are a goldmine for SEO: backlinks, press mentions, social media content and customer acquisition — all in one. The key is strategic selection and follow-up.",
      nextSteps: [
        "Identify 3 relevant local events for the next 6 months",
        "Plan sponsorship or participation with SEO goals in mind",
        "Create content before, during and after each event",
        "Secure backlinks from event websites and local press"
      ]
    }
  },
  "lokale-influencer-kooperationen": {
    de: {
      summary: "Mikro-Influencer mit lokaler Reichweite sind für lokale Unternehmen wertvoller als große Creator. Authentische Kooperationen bringen Backlinks, Social Proof und Neukunden zu überschaubaren Kosten.",
      nextSteps: [
        "Recherchiere 5 Mikro-Influencer in deiner Stadt und Branche",
        "Kontaktiere sie mit einem konkreten Kooperationsangebot",
        "Vereinbare einen Backlink als Teil jeder Kooperation",
        "Messe den ROI jeder Kooperation über trackbare Links"
      ]
    },
    en: {
      summary: "Micro-influencers with local reach are more valuable for local businesses than big creators. Authentic partnerships bring backlinks, social proof and new customers at manageable costs.",
      nextSteps: [
        "Research 5 micro-influencers in your city and industry",
        "Contact them with a concrete partnership offer",
        "Agree on a backlink as part of every partnership",
        "Measure the ROI of each partnership via trackable links"
      ]
    }
  },
  "seo-ferienwohnungen": {
    de: {
      summary: "Ferienwohnungen können sich von Portal-Abhängigkeit befreien: Direktbuchungen über Google bringen 20-25 % mehr Gewinn. Lokale Keywords, Erlebnis-Content und Bewertungen sind der Weg.",
      nextSteps: [
        "Erstelle eine eigene Buchungswebsite mit lokalen Landingpages",
        "Optimiere für 'Ferienwohnung + Ort + Besonderheit'",
        "Baue einen Erlebnis-Guide für deine Region auf",
        "Sammle systematisch Bewertungen auf Google und deiner Website"
      ]
    },
    en: {
      summary: "Vacation rentals can break free from portal dependency: direct bookings via Google bring 20-25% more profit. Local keywords, experience content and reviews are the way.",
      nextSteps: [
        "Create your own booking website with local landing pages",
        "Optimize for 'vacation rental + location + feature'",
        "Build an experience guide for your region",
        "Systematically collect reviews on Google and your website"
      ]
    }
  },
  "ai-search-optimization-2026": {
    de: {
      summary: "GEO (Generative Engine Optimization) ist 2026 keine Option mehr, sondern Pflicht. Wer in AI-Plattformen als verlässliche Quelle erscheinen will, braucht strukturierte Daten, zitierfähige Fakten und E-E-A-T-Signale.",
      nextSteps: [
        "Implementiere Schema Markup nach der Schema-Strategie",
        "Erstelle eine llms.txt-Datei im Root-Verzeichnis",
        "Strukturiere Inhalte mit klaren Fakten und Quellenangaben",
        "Teste, ob AI-Plattformen dein Unternehmen bereits empfehlen"
      ]
    },
    en: {
      summary: "GEO (Generative Engine Optimization) is no longer optional in 2026. Those who want to appear as a reliable source in AI platforms need structured data, citable facts and E-E-A-T signals.",
      nextSteps: [
        "Implement Schema Markup following the schema strategy",
        "Create an llms.txt file in the root directory",
        "Structure content with clear facts and source citations",
        "Test whether AI platforms already recommend your business"
      ]
    }
  },
  "website-content-ai-suchmaschinen": {
    de: {
      summary: "AI-Suchmaschinen lesen deine Website anders als Menschen. Semantisches HTML, strukturierte Daten und zitierfähige Absätze entscheiden, ob dein Content in AI-Antworten erscheint.",
      nextSteps: [
        "Implementiere semantisches HTML auf allen Seiten",
        "Erstelle eine llms.txt und llms-full.txt für AI-Crawler",
        "Markiere Schlüsselfakten mit data-ai-summary Attributen",
        "Teste deine Seiten mit verschiedenen AI-Plattformen"
      ]
    },
    en: {
      summary: "AI search engines read your website differently than humans. Semantic HTML, structured data and citable paragraphs determine whether your content appears in AI answers.",
      nextSteps: [
        "Implement semantic HTML on all pages",
        "Create an llms.txt and llms-full.txt for AI crawlers",
        "Mark key facts with data-ai-summary attributes",
        "Test your pages with different AI platforms"
      ]
    }
  },
  "google-posts-ranking-faktor": {
    de: {
      summary: "Google Posts sind kostenlose Werbefläche direkt in den Suchergebnissen — mit messbarem Ranking-Einfluss. Regelmäßigkeit schlägt Perfektion: Ein Post pro Woche signalisiert Aktivität und Relevanz.",
      nextSteps: [
        "Erstelle einen Redaktionsplan für wöchentliche Google Posts",
        "Nutze eine Mischung aus Angeboten, Events und Updates",
        "Füge immer einen CTA-Button hinzu (Anrufen, Website, Buchen)",
        "Analysiere die Post-Performance monatlich in GBP Insights"
      ]
    },
    en: {
      summary: "Google Posts are free ad space right in search results — with measurable ranking impact. Consistency beats perfection: One post per week signals activity and relevance.",
      nextSteps: [
        "Create an editorial calendar for weekly Google Posts",
        "Use a mix of offers, events and updates",
        "Always add a CTA button (Call, Website, Book)",
        "Analyze post performance monthly in GBP Insights"
      ]
    }
  },
  "google-maps-seo-ranking-faktoren": {
    de: {
      summary: "Die 20 Google Maps Ranking-Signale mit Gewichtung geben dir eine klare Priorisierung. GBP-Signale (32 %) und Bewertungen (16 %) zusammen machen fast die Hälfte aus — hier solltest du anfangen.",
      nextSteps: [
        "Fokussiere zuerst auf GBP-Optimierung (32 % Gewichtung)",
        "Baue eine systematische Bewertungsstrategie auf (16 %)",
        "Prüfe deine On-Page-Faktoren und Citations",
        "Setze ein monatliches Ranking-Tracking auf"
      ]
    },
    en: {
      summary: "The 20 Google Maps ranking signals with weighting give you a clear prioritization. GBP signals (32%) and reviews (16%) together make up almost half — this is where you should start.",
      nextSteps: [
        "Focus first on GBP optimization (32% weighting)",
        "Build a systematic review strategy (16%)",
        "Check your on-page factors and citations",
        "Set up monthly ranking tracking"
      ]
    }
  },
  "local-seo-vs-maps-seo": {
    de: {
      summary: "Local SEO und Maps SEO überschneiden sich, haben aber unterschiedliche Schwerpunkte. Wer die Nuancen kennt und für beide optimiert, deckt das gesamte lokale Suchspektrum ab.",
      nextSteps: [
        "Optimiere dein GBP für Maps SEO (Kategorien, Fotos, Posts)",
        "Erstelle lokale Landingpages für organisches Local SEO",
        "Sorge für NAP-Konsistenz als gemeinsame Grundlage",
        "Tracke Rankings separat für organische und Maps-Ergebnisse"
      ]
    },
    en: {
      summary: "Local SEO and Maps SEO overlap but have different focus areas. Those who know the nuances and optimize for both cover the entire local search spectrum.",
      nextSteps: [
        "Optimize your GBP for Maps SEO (categories, photos, posts)",
        "Create local landing pages for organic Local SEO",
        "Ensure NAP consistency as a common foundation",
        "Track rankings separately for organic and Maps results"
      ]
    }
  },
  "local-seo-mehrstufig-unternehmen": {
    de: {
      summary: "Multi-Location SEO braucht System, nicht Chaos. Zentrales Management mit lokaler Anpassung, skalierbare Prozesse und einheitliches Branding sind die drei Pfeiler für Unternehmen mit mehreren Standorten.",
      nextSteps: [
        "Erstelle ein zentrales NAP-Master-Dokument für alle Standorte",
        "Implementiere eine skalierbare GBP-Verwaltungsstruktur",
        "Entwickle Templates für standortspezifische Landingpages",
        "Richte standortübergreifendes Bewertungs-Monitoring ein"
      ]
    },
    en: {
      summary: "Multi-location SEO needs system, not chaos. Central management with local adaptation, scalable processes and consistent branding are the three pillars for multi-location businesses.",
      nextSteps: [
        "Create a central NAP master document for all locations",
        "Implement a scalable GBP management structure",
        "Develop templates for location-specific landing pages",
        "Set up cross-location review monitoring"
      ]
    }
  },
  "local-seo-statistiken-daten": {
    de: {
      summary: "88+ Datenpunkte aus 22 Branchen geben dir eine solide Grundlage für datenbasierte Entscheidungen. Ob du deinen Chef überzeugen oder deine Strategie untermauern willst — hier findest du die Zahlen.",
      nextSteps: [
        "Bookmarke diese Seite als Daten-Referenz für Präsentationen",
        "Vergleiche deine KPIs mit den Branchen-Benchmarks",
        "Nutze die Statistiken für Business Cases und Budget-Anträge",
        "Überprüfe quartalsweise, ob sich die Benchmarks verändert haben"
      ]
    },
    en: {
      summary: "88+ data points from 22 industries give you a solid foundation for data-driven decisions. Whether you want to convince your boss or back up your strategy — here you'll find the numbers.",
      nextSteps: [
        "Bookmark this page as a data reference for presentations",
        "Compare your KPIs with industry benchmarks",
        "Use statistics for business cases and budget requests",
        "Check quarterly whether benchmarks have changed"
      ]
    }
  },
  "google-maps-spam-erkennen": {
    de: {
      summary: "Maps-Spam verzerrt den Wettbewerb — aber Google bietet Werkzeuge, um dagegen vorzugehen. Wer Spam erkennt und meldet, schützt sein eigenes Ranking und sorgt für faire Bedingungen.",
      nextSteps: [
        "Scanne deine Top-5-Konkurrenten auf die 8 Spam-Arten",
        "Melde offensichtliche Spam-Einträge über das Google-Formular",
        "Dokumentiere Spam-Fälle mit Screenshots als Nachweis",
        "Überprüfe quartalsweise, ob neue Spam-Profile aufgetaucht sind"
      ]
    },
    en: {
      summary: "Maps spam distorts competition — but Google provides tools to fight back. Those who identify and report spam protect their own ranking and ensure fair conditions.",
      nextSteps: [
        "Scan your top 5 competitors for the 8 spam types",
        "Report obvious spam listings through the Google form",
        "Document spam cases with screenshots as evidence",
        "Check quarterly whether new spam profiles have appeared"
      ]
    }
  },
  "google-maps-konkurrenzanalyse": {
    de: {
      summary: "Konkurrenzanalyse ist keine Spionage — sie ist systematische Marktforschung. Wer versteht, warum Wettbewerber besser ranken, kann gezielt an den richtigen Stellschrauben drehen.",
      nextSteps: [
        "Analysiere die GBP-Profile deiner Top-3-Konkurrenten",
        "Vergleiche Bewertungsanzahl, -schnitt und -frequenz",
        "Identifiziere Lücken in den Kategorien und Services deiner Wettbewerber",
        "Erstelle einen Aktionsplan basierend auf den gefundenen Chancen"
      ]
    },
    en: {
      summary: "Competitive analysis isn't espionage — it's systematic market research. Those who understand why competitors rank better can precisely turn the right levers.",
      nextSteps: [
        "Analyze the GBP profiles of your top 3 competitors",
        "Compare review count, average and frequency",
        "Identify gaps in competitors' categories and services",
        "Create an action plan based on the opportunities found"
      ]
    }
  },
  "google-maps-ranking-case-studies": {
    de: {
      summary: "6 echte Case Studies aus 6 Branchen beweisen: Local SEO funktioniert systematisch und wiederholbar. Die dokumentierten Maßnahmen und Ergebnisse kannst du direkt auf dein Unternehmen übertragen.",
      nextSteps: [
        "Finde die Case Study deiner Branche und übernimm die Strategie",
        "Setze die 3 wirkungsvollsten Maßnahmen innerhalb von 2 Wochen um",
        "Dokumentiere deine eigenen Ergebnisse als Fortschrittsbericht",
        "Teile deine Erfolge als Google Posts und Social Media Content"
      ]
    },
    en: {
      summary: "6 real case studies from 6 industries prove: Local SEO works systematically and repeatably. The documented measures and results can be directly transferred to your business.",
      nextSteps: [
        "Find the case study for your industry and adopt the strategy",
        "Implement the 3 most impactful measures within 2 weeks",
        "Document your own results as a progress report",
        "Share your successes as Google Posts and social media content"
      ]
    }
  },
  "semantic-seo-topical-authority": {
    de: {
      summary: "Einzelne Artikel ranken instabil — vernetzte Themenwelten ranken dauerhaft. Topical Authority entsteht durch systematische Content-Cluster, die Google zeigen, dass du das Thema vollständig abdeckst.",
      nextSteps: [
        "Identifiziere deine 3 Kernthemen und erstelle eine Content-Map",
        "Verlinke alle Artikel eines Clusters strategisch untereinander",
        "Erstelle eine Pillar Page als zentralen Einstieg pro Cluster",
        "Erweitere Cluster monatlich um 1-2 neue Unterthemen"
      ]
    },
    en: {
      summary: "Individual articles rank unstably — interconnected topic clusters rank permanently. Topical Authority comes from systematic content clusters that show Google you fully cover the topic.",
      nextSteps: [
        "Identify your 3 core topics and create a content map",
        "Strategically interlink all articles within a cluster",
        "Create a pillar page as central entry point per cluster",
        "Expand clusters monthly by 1-2 new subtopics"
      ]
    }
  },
  "localbusiness-schema-implementierung": {
    de: {
      summary: "LocalBusiness Schema ist die technische Grundlage für Rich Snippets und AI-Sichtbarkeit. Korrekt implementiert, zeigt Google Öffnungszeiten, Bewertungen und Kontaktdaten direkt in den Suchergebnissen.",
      nextSteps: [
        "Kopiere das passende JSON-LD Template für deine Branche",
        "Passe alle Felder an dein Unternehmen an",
        "Teste das Markup mit dem Google Rich Results Test",
        "Erweitere schrittweise um weitere Schema-Typen (FAQ, Review)"
      ]
    },
    en: {
      summary: "LocalBusiness Schema is the technical foundation for Rich Snippets and AI visibility. Correctly implemented, Google shows opening hours, reviews and contact details right in search results.",
      nextSteps: [
        "Copy the matching JSON-LD template for your industry",
        "Customize all fields to your business",
        "Test the markup with Google Rich Results Test",
        "Gradually extend with additional schema types (FAQ, Review)"
      ]
    }
  },
  "review-schema-implementierung": {
    de: {
      summary: "Review Schema bringt Bewertungssterne direkt in die Suchergebnisse — und steigert die CTR um bis zu 35 %. Die Implementierung ist technisch einfach, muss aber Googles Richtlinien exakt folgen.",
      nextSteps: [
        "Implementiere AggregateRating Schema auf deiner Bewertungsseite",
        "Stelle sicher, dass Bewertungen auf der Seite sichtbar sind",
        "Teste die Implementierung mit dem Rich Results Test",
        "Verbinde Review Schema mit deinem LocalBusiness Schema"
      ]
    },
    en: {
      summary: "Review Schema brings review stars directly into search results — increasing CTR by up to 35%. Implementation is technically simple but must exactly follow Google's guidelines.",
      nextSteps: [
        "Implement AggregateRating Schema on your review page",
        "Ensure reviews are visible on the page",
        "Test the implementation with Rich Results Test",
        "Connect Review Schema with your LocalBusiness Schema"
      ]
    }
  },
  "wie-google-maps-ranking-funktioniert": {
    de: {
      summary: "Der Google Maps Algorithmus basiert auf drei Säulen: Nähe, Relevanz und Bekanntheit. Du kannst die Nähe nicht ändern, aber Relevanz und Bekanntheit systematisch aufbauen — und damit den Algorithmus für dich arbeiten lassen.",
      nextSteps: [
        "Maximiere die Relevanz durch vollständige Kategorie- und Keyword-Optimierung",
        "Steigere die Bekanntheit durch Bewertungen, Links und Citations",
        "Verstehe, wie Nähe deine Rankings in verschiedenen Stadtteilen beeinflusst",
        "Nutze Grid-Tracking, um deinen Einflussradius zu visualisieren"
      ]
    },
    en: {
      summary: "The Google Maps algorithm is based on three pillars: proximity, relevance and prominence. You can't change proximity, but you can systematically build relevance and prominence — making the algorithm work for you.",
      nextSteps: [
        "Maximize relevance through complete category and keyword optimization",
        "Increase prominence through reviews, links and citations",
        "Understand how proximity affects your rankings in different districts",
        "Use grid tracking to visualize your influence radius"
      ]
    }
  },
  "local-seo-reporting-template": {
    de: {
      summary: "Was du nicht misst, kannst du nicht verbessern. Ein strukturiertes Reporting-Template macht deine SEO-Erfolge sichtbar — für dich, deine Kunden und dein Team.",
      nextSteps: [
        "Richte die Google Search Console als Datenquelle ein",
        "Erstelle dein erstes Monatsreporting mit dem Template",
        "Definiere 5 KPIs, die du monatlich trackst",
        "Automatisiere das Reporting so weit wie möglich"
      ]
    },
    en: {
      summary: "What you don't measure, you can't improve. A structured reporting template makes your SEO successes visible — for you, your clients and your team.",
      nextSteps: [
        "Set up Google Search Console as a data source",
        "Create your first monthly report with the template",
        "Define 5 KPIs that you track monthly",
        "Automate reporting as much as possible"
      ]
    }
  },
  "google-maps-ranking-tracker": {
    de: {
      summary: "Dein Maps-Ranking ändert sich Straßenblock für Straßenblock. Nur Grid-Tracking zeigt das vollständige Bild — wo du dominant bist und wo du Potenzial verschenkst.",
      nextSteps: [
        "Wähle ein Grid-Tracking-Tool aus dem 7-Tool-Vergleich",
        "Richte ein monatliches Grid-Tracking für deine Top-Keywords ein",
        "Analysiere die Ergebnisse nach Stadtteilen und Entfernung",
        "Passe deine Strategie basierend auf den Grid-Daten an"
      ]
    },
    en: {
      summary: "Your Maps ranking changes block by block. Only grid tracking shows the complete picture — where you're dominant and where you're wasting potential.",
      nextSteps: [
        "Choose a grid tracking tool from the 7-tool comparison",
        "Set up monthly grid tracking for your top keywords",
        "Analyze results by districts and distance",
        "Adjust your strategy based on grid data"
      ]
    }
  },
  "schema-strategie-dokument": {
    de: {
      summary: "Die richtige Schema-Strategie verhindert Fehler und maximiert Rich Snippets. Article, FAQPage, HowTo und LocalBusiness haben jeweils klare Einsatzgebiete — die Entscheidungsmatrix macht die Wahl einfach.",
      nextSteps: [
        "Nutze die Entscheidungsmatrix für jede Seite deiner Website",
        "Implementiere die priorisierten Schema-Typen stufenweise",
        "Teste jede Implementierung mit dem Rich Results Test",
        "Dokumentiere deine Schema-Strategie für das Team"
      ]
    },
    en: {
      summary: "The right schema strategy prevents mistakes and maximizes Rich Snippets. Article, FAQPage, HowTo and LocalBusiness each have clear use cases — the decision matrix makes choosing easy.",
      nextSteps: [
        "Use the decision matrix for each page of your website",
        "Implement prioritized schema types in stages",
        "Test every implementation with Rich Results Test",
        "Document your schema strategy for the team"
      ]
    }
  },
  "gbp-verifizierung-fehlgeschlagen": {
    de: {
      summary: "Verifizierungsprobleme sind häufig, aber lösbar. Google bietet mehrere Verifizierungswege — wenn einer scheitert, gibt es Alternativen. Hartnäckigkeit und die richtige Kontaktaufnahme zum Support zahlen sich aus.",
      nextSteps: [
        "Probiere einen alternativen Verifizierungsweg (Video statt Postkarte)",
        "Kontaktiere den Google Business Support direkt",
        "Stelle sicher, dass alle Unternehmensdaten zu 100 % korrekt sind",
        "Dokumentiere den gesamten Verifizierungsprozess für Nachfragen"
      ]
    },
    en: {
      summary: "Verification issues are common but solvable. Google offers multiple verification paths — if one fails, there are alternatives. Persistence and the right contact with support pays off.",
      nextSteps: [
        "Try an alternative verification method (video instead of postcard)",
        "Contact Google Business Support directly",
        "Ensure all business data is 100% correct",
        "Document the entire verification process for follow-ups"
      ]
    }
  },
  "duplicate-listing-entfernen": {
    de: {
      summary: "Jedes Duplikat-Listing kostet dich Ranking-Power und Bewertungen. Die Bereinigung ist ein einmaliger Aufwand, der sich sofort auszahlt — in konzentrierter Sichtbarkeit und stärkeren Signalen.",
      nextSteps: [
        "Suche nach Duplikaten mit der vorgestellten Methode",
        "Melde alle gefundenen Duplikate über das Google-Tool",
        "Konsolidiere Bewertungen von Duplikaten wenn möglich",
        "Überprüfe quartalsweise, ob neue Duplikate entstanden sind"
      ]
    },
    en: {
      summary: "Every duplicate listing costs you ranking power and reviews. Cleanup is a one-time effort that pays off immediately — in concentrated visibility and stronger signals.",
      nextSteps: [
        "Search for duplicates using the method presented",
        "Report all found duplicates through the Google tool",
        "Consolidate reviews from duplicates if possible",
        "Check quarterly whether new duplicates have appeared"
      ]
    }
  },
  "gbp-bewertung-loeschen-anleitung": {
    de: {
      summary: "Nicht jede negative Bewertung kann gelöscht werden — aber Fake-Reviews und Richtlinienverstöße schon. Die richtige Begründung und der richtige Weg zum Google-Support machen den Unterschied.",
      nextSteps: [
        "Prüfe, ob die Bewertung gegen Google-Richtlinien verstößt",
        "Flagge die Bewertung mit der passenden Begründung",
        "Eskaliere über den Google Business Support bei Ablehnung",
        "Antworte professionell auf die Bewertung, solange sie sichtbar ist"
      ]
    },
    en: {
      summary: "Not every negative review can be deleted — but fake reviews and guideline violations can. The right justification and the right path to Google support make the difference.",
      nextSteps: [
        "Check if the review violates Google guidelines",
        "Flag the review with the appropriate justification",
        "Escalate through Google Business Support if declined",
        "Respond professionally to the review while it's visible"
      ]
    }
  },
  "gbp-nicht-in-suche-sichtbar": {
    de: {
      summary: "Wenn dein GBP unsichtbar ist, hat das meist eine technische oder administrative Ursache. Die 12 häufigsten Gründe und Lösungen bringen dich systematisch zurück in die Suchergebnisse.",
      nextSteps: [
        "Gehe die 12 Ursachen systematisch durch",
        "Prüfe Verifizierungsstatus und Suspendierung zuerst",
        "Überprüfe die Richtigkeit deiner Adresse und Kategorie",
        "Kontaktiere den Support, wenn keine Ursache gefunden wird"
      ]
    },
    en: {
      summary: "When your GBP is invisible, it usually has a technical or administrative cause. The 12 most common reasons and solutions systematically bring you back to search results.",
      nextSteps: [
        "Go through the 12 causes systematically",
        "Check verification status and suspension first",
        "Verify the accuracy of your address and category",
        "Contact support if no cause is found"
      ]
    }
  },
  "gbp-mehrere-standorte": {
    de: {
      summary: "Multi-Location Management wird mit den richtigen Tools und Prozessen zum System statt zum Chaos. Bulk-Uploads, Standortgruppen und standardisierte Workflows sparen Stunden pro Woche.",
      nextSteps: [
        "Richte Standortgruppen für deine Regionen ein",
        "Erstelle standardisierte Templates für alle Standorte",
        "Nutze Bulk-Upload für gleichzeitige Aktualisierungen",
        "Delegiere Standort-spezifische Aufgaben an lokale Teams"
      ]
    },
    en: {
      summary: "Multi-location management becomes a system instead of chaos with the right tools and processes. Bulk uploads, location groups and standardized workflows save hours per week.",
      nextSteps: [
        "Set up location groups for your regions",
        "Create standardized templates for all locations",
        "Use bulk upload for simultaneous updates",
        "Delegate location-specific tasks to local teams"
      ]
    }
  },
  "gbp-oeffnungszeiten-sondertage": {
    de: {
      summary: "Falsche Öffnungszeiten sind der schnellste Weg, Kunden zu verlieren und negative Bewertungen zu kassieren. Die korrekte Pflege inklusive Feiertagen und Sonderöffnungen ist eine der einfachsten und wirkungsvollsten SEO-Maßnahmen.",
      nextSteps: [
        "Aktualisiere alle Öffnungszeiten in deinem GBP",
        "Trage alle Feiertage und Sondertage für die nächsten 6 Monate ein",
        "Richte einen Kalender-Reminder für saisonale Änderungen ein",
        "Prüfe monatlich, ob Google Änderungsvorschläge gemacht hat"
      ]
    },
    en: {
      summary: "Wrong opening hours are the fastest way to lose customers and receive negative reviews. Correct maintenance including holidays and special hours is one of the simplest and most effective SEO measures.",
      nextSteps: [
        "Update all opening hours in your GBP",
        "Enter all holidays and special days for the next 6 months",
        "Set a calendar reminder for seasonal changes",
        "Check monthly if Google has made change suggestions"
      ]
    }
  },
  "gbp-attribute-richtig-nutzen": {
    de: {
      summary: "Google Business Attribute sind kostenlose Filter, die passende Kunden direkt zu dir leiten. Von Barrierefreiheit bis Zahlungsmethoden — jedes relevante Attribut steigert deine Sichtbarkeit für spezifische Zielgruppen.",
      nextSteps: [
        "Überprüfe alle verfügbaren Attribute für deine Branche",
        "Aktiviere alle zutreffenden Attribute in deinem GBP",
        "Aktualisiere Attribute bei Änderungen sofort",
        "Erwähne herausragende Attribute in deinen Google Posts"
      ]
    },
    en: {
      summary: "Google Business attributes are free filters that direct matching customers to you. From accessibility to payment methods — every relevant attribute increases your visibility for specific target groups.",
      nextSteps: [
        "Check all available attributes for your industry",
        "Activate all applicable attributes in your GBP",
        "Update attributes immediately when changes occur",
        "Mention outstanding attributes in your Google Posts"
      ]
    }
  },
  "google-business-messaging": {
    de: {
      summary: "Google Business Messaging verwandelt passive Suchende in aktive Kunden — in Echtzeit. Die Einrichtung dauert 5 Minuten, die Wirkung ist sofort messbar in mehr Anfragen und höherer Conversion.",
      nextSteps: [
        "Aktiviere Messaging in deinem Google Business Profil",
        "Erstelle automatische Willkommensnachrichten",
        "Richte schnelle Antworten für häufige Fragen ein",
        "Anworte auf Nachrichten innerhalb von 5 Minuten"
      ]
    },
    en: {
      summary: "Google Business Messaging turns passive searchers into active customers — in real time. Setup takes 5 minutes, the impact is immediately measurable in more inquiries and higher conversion.",
      nextSteps: [
        "Activate Messaging in your Google Business Profile",
        "Create automatic welcome messages",
        "Set up quick replies for common questions",
        "Respond to messages within 5 minutes"
      ]
    }
  },
  "google-business-produkte-services": {
    de: {
      summary: "Der Produktkatalog und die Service-Liste in Google Business sind kostenlose Verkaufsflächen direkt in den Suchergebnissen. Unternehmen, die sie nutzen, bekommen nachweislich 2x mehr Klicks.",
      nextSteps: [
        "Füge alle deine Hauptprodukte oder -services hinzu",
        "Ergänze Beschreibungen mit relevanten Keywords",
        "Aktualisiere Preise und Angebote monatlich",
        "Nutze hochwertige Fotos für jedes Produkt/Service"
      ]
    },
    en: {
      summary: "The product catalog and service list in Google Business are free retail space right in search results. Businesses that use them demonstrably get 2x more clicks.",
      nextSteps: [
        "Add all your main products or services",
        "Add descriptions with relevant keywords",
        "Update prices and offers monthly",
        "Use high-quality photos for each product/service"
      ]
    }
  },
  "google-business-insights-verstehen": {
    de: {
      summary: "Google Business Insights liefert kostenlose Performance-Daten, die den meisten Unternehmen verborgen bleiben. Wer die Metriken richtig liest, trifft bessere Entscheidungen und misst den ROI seiner SEO-Arbeit.",
      nextSteps: [
        "Exportiere deine aktuellen Insights-Daten als Basislinie",
        "Vergleiche Suchanfragen-Kategorien (direkt vs. Discovery)",
        "Identifiziere die profitabelsten Kundenaktionen",
        "Richte ein monatliches Insights-Reporting ein"
      ]
    },
    en: {
      summary: "Google Business Insights delivers free performance data hidden from most businesses. Those who read metrics correctly make better decisions and measure the ROI of their SEO work.",
      nextSteps: [
        "Export your current Insights data as a baseline",
        "Compare search query categories (direct vs. discovery)",
        "Identify the most profitable customer actions",
        "Set up monthly Insights reporting"
      ]
    }
  },
  "local-citations-2025": {
    de: {
      summary: "Nicht jedes Verzeichnis ist gleich viel wert. Die nach Branche sortierte Liste mit Relevanz-Scores zeigt dir, wo du deine begrenzte Zeit investieren solltest — und welche Einträge du ignorieren kannst.",
      nextSteps: [
        "Erstelle Einträge in den Top-10-Verzeichnissen für deine Branche",
        "Prüfe bestehende Einträge auf NAP-Konsistenz",
        "Entferne oder aktualisiere veraltete Listings",
        "Plane quartalsweise einen Citation-Audit"
      ]
    },
    en: {
      summary: "Not every directory is equally valuable. The industry-sorted list with relevance scores shows where to invest your limited time — and which listings you can ignore.",
      nextSteps: [
        "Create listings in the top 10 directories for your industry",
        "Check existing listings for NAP consistency",
        "Remove or update outdated listings",
        "Schedule a quarterly citation audit"
      ]
    }
  },

  // === COMPARISON ===
  "local-seo-vs-organisch": {
    de: {
      summary: "Local SEO und Organic SEO sind keine Gegensätze — sie ergänzen sich. Lokale Unternehmen profitieren am meisten, wenn sie 60-70% ihrer Ressourcen in Local SEO investieren und den Rest in fundiertes Organic SEO für langfristige Autorität.",
      nextSteps: [
        "Optimiere zuerst dein Google Business Profile vollständig",
        "Erstelle lokale Landingpages mit Stadtbezug und Schema Markup",
        "Baue lokale Backlinks auf (Vereine, Zeitungen, Handelskammern)",
        "Starte ein Bewertungsmanagement mit Antwortvorlagen",
        "Nutze das Google Maps Audit Template für eine Bestandsaufnahme"
      ]
    },
    en: {
      summary: "Local SEO and Organic SEO aren't opposites — they complement each other. Local businesses benefit most by investing 60-70% of resources in Local SEO and the rest in solid Organic SEO for long-term authority.",
      nextSteps: [
        "First, fully optimize your Google Business Profile",
        "Create local landing pages with city references and schema markup",
        "Build local backlinks (clubs, newspapers, chambers of commerce)",
        "Start review management with response templates",
        "Use the Google Maps Audit Template for a baseline assessment"
      ]
    }
  },
};

/**
 * Get conclusion data for a given article slug and language.
 */
export const getArticleConclusion = (
  slug: string,
  language: "de" | "en" = "de"
): { summary: string; nextSteps: string[] } | null => {
  const data = articleConclusions[slug];
  if (!data) return null;
  return data[language] || data.de;
};
