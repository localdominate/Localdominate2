/**
 * Short AI-extractable summaries for each major section of long articles.
 * Keyed by articleSlug → sectionId → summary text.
 * Designed for AI crawlers, voice search, and quick scanning.
 */

export interface SectionSummaryData {
  /** The TOC section id */
  sectionId: string;
  /** 1-2 sentence TL;DR optimized for AI extraction (40-60 words) */
  summary: string;
}

export const sectionSummaries: Record<string, SectionSummaryData[]> = {
  // ========== PILLAR PAGES ==========
  "ultimate-guide-local-seo": [
    { sectionId: "was-ist-local-seo", summary: "Local SEO ist die Optimierung eines Unternehmens für standortbezogene Suchanfragen. 46% aller Google-Suchen haben lokale Intention — wer hier nicht sichtbar ist, verliert täglich potenzielle Kunden an die Konkurrenz." },
    { sectionId: "warum-local-seo", summary: "Local SEO ist für KMU der effektivste Marketing-Kanal: 88% der mobilen lokalen Suchen führen innerhalb von 24 Stunden zu einem Besuch oder Anruf. Die Investition zahlt sich schneller aus als jede andere Online-Marketing-Maßnahme." },
    { sectionId: "google-business-profil", summary: "Das Google Business Profil ist der #1 Ranking-Faktor (32% Gewichtung). Vollständig ausgefüllte Profile erhalten 7x mehr Klicks. Kritisch sind: korrekte Kategorie, vollständige NAP-Daten, regelmäßige Posts und hochwertige Fotos." },
    { sectionId: "lokale-keywords", summary: "Lokale Keywords kombinieren Suchbegriff + Standort (z.B. 'Zahnarzt München Schwabing'). Sie gehören in Title Tags, H1, Meta Descriptions und die ersten 100 Wörter jeder Service-Seite." },
    { sectionId: "onpage-seo", summary: "On-Page SEO für lokale Unternehmen umfasst lokale Title Tags, standortbezogene Meta Descriptions, NAP-Daten im Footer, und eine separate Landing Page für jeden Standort oder Service-Bereich." },
    { sectionId: "bewertungen", summary: "Bewertungen machen 16% der lokalen Ranking-Faktoren aus. Unternehmen mit 4.0+ Sternen und 100+ Bewertungen erhalten 3x mehr Klicks. Systematisches Bewertungsmanagement mit zeitnahen Antworten ist entscheidend." },
    { sectionId: "citations", summary: "Citations sind Nennungen von Name, Adresse und Telefonnummer (NAP) in Online-Verzeichnissen. Konsistente NAP-Daten über alle Plattformen sind ein starkes Vertrauenssignal für Google." },
    { sectionId: "schema-markup", summary: "Schema Markup als JSON-LD im HTML-Head liefert Google strukturierte Daten über das Unternehmen. LocalBusiness, FAQPage und AggregateRating Schema sind die drei wichtigsten Typen für lokale Unternehmen." },
    { sectionId: "content-strategie", summary: "Lokaler Content-Marketing umfasst Blogbeiträge zu lokalen Themen, Service-Seiten mit Standortbezug und FAQ-Seiten. Regelmäßige Veröffentlichung (2-4x/Monat) stärkt die thematische Autorität." },
    { sectionId: "faq", summary: "Die häufigsten Fragen zu Local SEO betreffen Kosten (oft kostenlos startbar), Zeitrahmen (erste Ergebnisse nach 3-6 Monaten) und ob Local SEO auch ohne physischen Standort möglich ist (ja, mit Service-Area-Business)." },
  ],
  "lokale-suchmaschinenoptimierung-2026": [
    { sectionId: "trends-2026", summary: "Die wichtigsten Local SEO Trends 2026: AI Overviews bei 40%+ lokaler Suchen, Zero-Click-Ergebnisse über 65%, Voice Search +20% jährlich, und E-E-A-T als entscheidender Ranking-Faktor." },
    { sectionId: "ai-overviews", summary: "Google AI Overviews erscheinen über den organischen Ergebnissen und synthetisieren Antworten aus mehreren Quellen. Für lokale Unternehmen bedeutet das: strukturierte Daten und direkte Antworten sind Pflicht." },
    { sectionId: "zero-click", summary: "Über 65% der Google-Suchen enden ohne Klick auf ein Ergebnis. Lokale Unternehmen müssen ihre Sichtbarkeit im Local Pack, in Knowledge Panels und in AI Overviews maximieren." },
    { sectionId: "voice-search", summary: "Voice Search Anfragen für lokale Unternehmen wachsen um 20% jährlich. Optimierung erfordert natürliche Sprache, FAQ-Strukturen und Speakable Schema Markup." },
    { sectionId: "strategie", summary: "Die optimale Local SEO Strategie 2026 kombiniert klassisches Local SEO (GBP, Citations, Reviews) mit AI-Optimierung (Schema, speakable, llms.txt) für maximale Sichtbarkeit in allen Suchkanälen." },
    { sectionId: "faq", summary: "Häufige Fragen zu Local SEO 2026: AI Overviews sind kein Ersatz für organisches SEO, sondern ein zusätzlicher Kanal. Kleine Unternehmen können durch schnelle Anpassung an AI-Trends sogar Vorteile gegenüber großen Wettbewerbern haben." },
  ],
  "technisches-local-seo-guide": [
    { sectionId: "schema-markup", summary: "Schema Markup ist die technische Grundlage für Rich Snippets und AI-Sichtbarkeit. JSON-LD im HTML-Head ist das empfohlene Format. Die drei wichtigsten Typen: LocalBusiness, FAQPage und AggregateRating." },
    { sectionId: "core-web-vitals", summary: "Core Web Vitals sind offizielle Ranking-Faktoren: LCP unter 2.5 Sekunden, FID unter 100ms, CLS unter 0.1. Mobile Performance ist besonders kritisch, da 70%+ der lokalen Suchen mobil erfolgen." },
    { sectionId: "mobile-optimierung", summary: "Mobile-First Indexierung bedeutet: Google bewertet primär die mobile Version. Responsive Design, schnelle Ladezeiten und touch-freundliche Navigation sind Pflicht für lokale Websites." },
    { sectionId: "crawling", summary: "Technische Zugänglichkeit umfasst: saubere URL-Struktur, XML-Sitemap, robots.txt (auch für AI-Bots), und eine optimierte interne Verlinkung für effizientes Crawling." },
    { sectionId: "faq", summary: "Technisches SEO erfordert keine Programmierkenntnisse — viele CMS bieten Schema-Plugins. Core Web Vitals lassen sich kostenlos mit Google PageSpeed Insights prüfen und optimieren." },
  ],
  "local-seo-ranking-faktoren-erklaert": [
    { sectionId: "ranking-faktoren", summary: "Die fünf wichtigsten Local SEO Ranking-Faktoren nach Gewichtung: GBP-Signale (32%), On-Page-Signale (19%), Bewertungen (16%), Link-Signale (11%), Verhaltens-Signale (8%). Die restlichen 14% verteilen sich auf Citations und Personalisierung." },
    { sectionId: "gbp-signale", summary: "Google Business Profil Signale (32%): Kategorie, NAP-Vollständigkeit, Fotos, Posts, Attribute und Q&A. Ein vollständig optimiertes GBP ist der einzelne wirkungsvollste Hebel im Local SEO." },
    { sectionId: "onpage-signale", summary: "On-Page-Signale (19%): Lokale Keywords in Title, H1, Meta Description und Content. NAP im Footer, standortbezogene Landing Pages und interne Verlinkung." },
    { sectionId: "bewertungssignale", summary: "Bewertungssignale (16%): Gesamtanzahl, Durchschnittsbewertung, Aktualität und Antwortrate. Unternehmen mit 4.0+ Sternen und regelmäßigen neuen Bewertungen ranken deutlich besser." },
    { sectionId: "link-signale", summary: "Link-Signale (11%): Qualität und lokale Relevanz von Backlinks. Links von lokalen Nachrichtenmedien, Branchenverzeichnissen und Partnerunternehmen sind besonders wertvoll." },
    { sectionId: "faq", summary: "Der wichtigste Ranking-Faktor ist das Google Business Profil (32%). Für schnelle Verbesserungen sollten Unternehmen zuerst GBP optimieren, dann Bewertungen sammeln, dann On-Page SEO verbessern." },
  ],
  "ai-suche-lokale-unternehmen": [
    { sectionId: "ai-suche-ueberblick", summary: "AI-Suchsysteme wie Google AI Overviews, ChatGPT und Perplexity verändern, wie lokale Unternehmen gefunden werden. Statt 10 blaue Links bekommen Nutzer eine synthetisierte Antwort — und nur zitierte Quellen profitieren." },
    { sectionId: "optimierung", summary: "AI-Optimierung für lokale Unternehmen basiert auf drei Säulen: strukturierte Daten (Schema), E-E-A-T-Signale (Bewertungen, Autorenschaft) und technische AI-Zugänglichkeit (llms.txt, robots.txt für GPTBot)." },
    { sectionId: "schema-ai", summary: "Schema Markup ist die Brücke zwischen Website-Content und AI-Systemen. LocalBusiness Schema mit vollständigen Geschäftsdaten, FAQPage Schema für Frage-Antwort-Paare und speakable-Properties für Voice Search sind essentiell." },
    { sectionId: "content-ai", summary: "AI-optimierter Content braucht eigenständige Absätze (2-3 Sätze), Definitionen im ersten Absatz, quantifizierte Aussagen mit Quellenangaben und regelmäßige Updates mit sichtbarem dateModified." },
    { sectionId: "monitoring", summary: "AI-Sichtbarkeit messen: Brand-Mentions in ChatGPT und Perplexity tracken, Referral-Traffic von AI-Quellen monitoren und regelmäßig die eigene Zitierbarkeit mit AI-Anfragen testen." },
    { sectionId: "faq", summary: "AI-Suche ersetzt klassisches SEO nicht, sondern ergänzt es. Die Grundlagen (GBP, Reviews, Content) bleiben wichtig — AI-Optimierung ist eine zusätzliche Schicht für maximale Sichtbarkeit." },
  ],
  "local-seo-checkliste-komplett": [
    { sectionId: "gbp-checkliste", summary: "Google Business Profil Checkliste: Alle Kategorien auswählen, vollständige NAP-Daten, Beschreibung mit Keywords, 10+ Fotos, Öffnungszeiten, Services/Produkte, regelmäßige Posts (min. 2x/Monat)." },
    { sectionId: "onpage-checkliste", summary: "On-Page SEO Checkliste: Lokale Keywords in Title Tags, Meta Descriptions, H1-H3, URL-Struktur. NAP im Footer, separate Standort-Seiten, FAQ-Abschnitte auf Service-Seiten." },
    { sectionId: "technisch-checkliste", summary: "Technische SEO Checkliste: Schema Markup (LocalBusiness + FAQPage), Mobile Responsive, Core Web Vitals optimieren, SSL, XML-Sitemap, robots.txt, strukturierte Daten validieren." },
    { sectionId: "bewertungen-checkliste", summary: "Bewertungs-Checkliste: Bewertungslink erstellen und teilen, nach jedem Kundenkontakt um Feedback bitten, alle Bewertungen innerhalb von 24h beantworten, negative Bewertungen professionell behandeln." },
    { sectionId: "citations-checkliste", summary: "Citations Checkliste: Top-20 Branchenverzeichnisse eintragen, NAP-Konsistenz über alle Plattformen sicherstellen, branchenspezifische Verzeichnisse nutzen, regelmäßig auf Duplikate prüfen." },
    { sectionId: "faq", summary: "Eine vollständige Local SEO Checkliste umfasst 80+ Punkte. Für den Start genügt die Fokussierung auf die kritischen Elemente: GBP-Optimierung, NAP-Konsistenz und Bewertungsmanagement." },
  ],
  "kostenloses-seo-guide": [
    { sectionId: "kostenlose-tools", summary: "Die wichtigsten kostenlosen SEO-Tools: Google Business Profil, Google Search Console, Google Analytics, PageSpeed Insights, Schema Markup Generator und Google Keyword Planner." },
    { sectionId: "gbp-kostenlos", summary: "Google Business Profil ist komplett kostenlos und der wichtigste SEO-Hebel. Ein vollständig optimiertes GBP kann ohne Budget für 80%+ der lokalen Suchanfragen Sichtbarkeit schaffen." },
    { sectionId: "content-kostenlos", summary: "Content-Marketing ohne Budget: Blog-Beiträge zu lokalen Themen schreiben, FAQ-Seiten erstellen, Kundenstimmen sammeln und auf der Website veröffentlichen." },
    { sectionId: "routine", summary: "30-Minuten-Wochenroutine für kostenloses SEO: Bewertungen beantworten, einen GBP-Post veröffentlichen, Search Console auf Fehler prüfen, und einen Blogartikel pro Monat planen." },
    { sectionId: "faq", summary: "SEO ist grundsätzlich kostenlos machbar. Die drei wichtigsten kostenlosen Maßnahmen: Google Business Profil pflegen, Bewertungen sammeln und lokalen Content erstellen." },
  ],
  "local-seo-statistiken-daten": [
    { sectionId: "suchverhalten", summary: "46% aller Google-Suchen haben lokale Intention. 88% der mobilen lokalen Suchen führen innerhalb von 24h zu einem Besuch. 76% der lokalen Suchen resultieren in einem Anruf am selben Tag." },
    { sectionId: "local-pack", summary: "Das Local Pack erhält 44% aller Klicks bei lokalen Suchen. Unternehmen auf Position 1 im Local Pack erhalten 24,4% der Klicks, Position 2 nur 13,6% und Position 3 nur 9,4%." },
    { sectionId: "bewertungen-stats", summary: "93% der Verbraucher lesen Online-Bewertungen vor einer Kaufentscheidung. Unternehmen mit 4.0+ Sternen erhalten 70% mehr Klicks. 97% lesen auch die Antworten des Unternehmens auf Bewertungen." },
    { sectionId: "mobile-stats", summary: "70%+ der lokalen Suchen erfolgen mobil. Mobile Nutzer haben eine 5x höhere Conversion-Rate bei lokalen Suchanfragen. Seiten mit Ladezeiten über 3 Sekunden verlieren 53% der mobilen Besucher." },
    { sectionId: "faq", summary: "Die wirkungsvollste Statistik für Überzeugungsarbeit: 88% der mobilen lokalen Suchen führen innerhalb von 24 Stunden zu einem Besuch oder Anruf — das macht Local SEO zum effektivsten KMU-Marketing-Kanal." },
  ],
  // ========== KEY CLUSTER ARTICLES ==========
  "google-ai-overviews-local-seo": [
    { sectionId: "was-sind-ai-overviews", summary: "Google AI Overviews sind KI-generierte Zusammenfassungen über den organischen Suchergebnissen. Sie erscheinen bei 40%+ der lokalen Suchanfragen und zitieren 2-5 Quellen pro Antwort." },
    { sectionId: "optimierung", summary: "Für AI Overviews optimieren: direkte Antworten in den ersten 100 Wörtern, vollständiges Schema Markup (LocalBusiness + FAQPage), und starke E-E-A-T-Signale wie Autorenschaft und Quellenangaben." },
    { sectionId: "content-struktur", summary: "Ideale Content-Struktur für AI Overviews: Frage als H2, direkte Antwort (40-60 Wörter) im ersten Absatz, dann vertiefende Details. Eigenständige Absätze, die ohne Kontext verständlich sind." },
    { sectionId: "faq", summary: "AI Overviews sind kein Ersatz für organische Rankings, sondern ein zusätzlicher Sichtbarkeitskanal. Websites mit strukturierten Daten und klaren Antworten werden bevorzugt zitiert." },
  ],
  "schema-markup-local-seo": [
    { sectionId: "warum-schema", summary: "Schema Markup hilft Google, Website-Inhalte als strukturierte Daten zu verstehen. Es ermöglicht Rich Snippets, verbessert die AI-Sichtbarkeit und erhöht die Click-Through-Rate um bis zu 30%." },
    { sectionId: "wichtige-schemas", summary: "Die drei wichtigsten Schema-Typen für Local SEO: LocalBusiness (Geschäftsdaten), FAQPage (Frage-Antwort-Paare) und AggregateRating (Gesamtbewertung mit Sternen)." },
    { sectionId: "implementierung", summary: "Schema Markup wird als JSON-LD Script im HTML-Head platziert. Für WordPress gibt es Plugins wie Rank Math oder Schema Pro. Ohne CMS wird JSON-LD manuell eingebettet." },
    { sectionId: "validierung", summary: "Schema validieren mit dem Google Rich Results Test und Schema.org Validator. Regelmäßige Prüfung ist nötig, da Schema-Fehler Rich Snippets verhindern können." },
    { sectionId: "faq", summary: "Schema Markup ist kostenlos implementierbar und erfordert keine Programmierkenntnisse. Mit einem WordPress Plugin dauert die Einrichtung unter 30 Minuten." },
  ],
  "local-seo-voice-search": [
    { sectionId: "voice-search-basics", summary: "Voice Search Anfragen sind 3-5x länger als getippte Suchen und verwenden natürliche Sprache. 70% der Voice Search Antworten stammen aus Featured Snippets." },
    { sectionId: "optimierung", summary: "Voice Search Optimierung: FAQ-Seiten mit natürlichen Frage-Antwort-Paaren, Antworten in 29-42 Wörtern, Speakable Schema Markup und lokale Long-Tail-Keywords in Frageform." },
    { sectionId: "lokale-voice-search", summary: "Lokale Voice Search Anfragen folgen dem Muster 'Wo ist der nächste...' oder 'Welcher ... hat geöffnet'. FAQ-Strukturen mit diesen Frageformaten verbessern die Sichtbarkeit deutlich." },
    { sectionId: "faq", summary: "Voice Search Optimierung ist besonders für lokale Unternehmen relevant, da Sprachsuchen häufig standortbezogen sind. FAQ-Seiten sind der schnellste Weg zur Voice Search Sichtbarkeit." },
  ],
  "website-content-ai-suchmaschinen": [
    { sectionId: "content-struktur", summary: "AI-optimierter Content nutzt eigenständige 2-3-Satz-Absätze, die ohne Kontext verständlich und zitierbar sind. Definitionen gehören in den ersten Absatz jeder Sektion." },
    { sectionId: "zitierbarkeit", summary: "Für maximale AI-Zitierbarkeit: quantifizierte Aussagen mit Quellenangaben, klare Autorenschaft, regelmäßige Updates und data-ai-summary Attribute an Schlüsselabsätzen." },
    { sectionId: "technische-optimierung", summary: "Technische Maßnahmen für AI-Content: llms.txt und ai.txt für Crawler-Instruktionen, robots.txt für GPTBot/PerplexityBot erlauben, Schema Markup mit speakable-Properties." },
    { sectionId: "faq", summary: "AI-optimierter Content ist gleichzeitig nutzerfreundlich: klare Struktur, direkte Antworten und verifizierte Fakten kommen sowohl AI-Systemen als auch menschlichen Lesern zugute." },
  ],
  "entity-seo-guide": [
    { sectionId: "was-ist-entity-seo", summary: "Entity SEO optimiert die digitale Identität eines Unternehmens als erkennbare Entität im Knowledge Graph. Es geht um Beziehungen zwischen Entitäten statt einzelner Keywords." },
    { sectionId: "knowledge-graph", summary: "Der Google Knowledge Graph verknüpft Entitäten (Personen, Unternehmen, Orte) miteinander. Starke Entity-Erkennung führt zu Knowledge Panels in den Suchergebnissen." },
    { sectionId: "implementierung", summary: "Entity SEO implementieren: sameAs-Schema zu allen offiziellen Profilen, konsistente NAP-Daten, Wikidata-Eintrag erstellen, und Brand-Mentions auf autoritativen Plattformen aufbauen." },
    { sectionId: "faq", summary: "Entity SEO ist die fortgeschrittenste Form der Suchmaschinenoptimierung. Für lokale Unternehmen beginnt es mit konsistenten NAP-Daten und sameAs-Links zu allen offiziellen Profilen." },
  ],
  "semantic-seo-topical-authority": [
    { sectionId: "was-ist-semantic-seo", summary: "Semantic SEO optimiert für Themenbereiche statt einzelner Keywords. Google versteht thematische Zusammenhänge und belohnt Websites, die ein Thema umfassend abdecken." },
    { sectionId: "topical-authority", summary: "Topical Authority entsteht durch vollständige Themenabdeckung: eine Pillar Page als Hauptseite, 5-10 Cluster-Artikel zu Unterthemen, verbunden durch strategische interne Verlinkung." },
    { sectionId: "pillar-cluster", summary: "Das Pillar-Cluster-Modell: Eine umfassende Pillar Page (3.000+ Wörter) verlinkt auf spezialisierte Cluster-Artikel. Jeder Cluster-Artikel verlinkt zurück zur Pillar Page." },
    { sectionId: "faq", summary: "Topical Authority aufzubauen dauert 6-12 Monate. Der schnellste Weg: mit 5 Cluster-Artikeln um eine Pillar Page starten, dann systematisch Content-Lücken schließen." },
  ],
  "ai-search-vs-traditional-search": [
    { sectionId: "unterschiede", summary: "AI-Suche (ChatGPT, Perplexity) generiert synthetisierte Antworten aus mehreren Quellen. Traditionelle Google-Suche zeigt 10 blaue Links. AI Overviews verschmelzen beide Ansätze." },
    { sectionId: "dual-optimierung", summary: "Dual-Optimierung ist die beste Strategie: klassisches SEO als Basis (Keywords, Links, Content) plus AI-spezifische Maßnahmen (llms.txt, speakable Schema, eigenständige Absätze)." },
    { sectionId: "zukunft", summary: "Die Zukunft der Suche ist hybrid: AI-generierte Antworten für informationelle Anfragen, klassische Ergebnisse für transaktionale und navigationale Suchen. Beide Kanäle bleiben relevant." },
    { sectionId: "faq", summary: "AI-Suche ersetzt Google nicht, sondern ergänzt es. Lokale Unternehmen sollten für beide Kanäle optimieren, um keine Sichtbarkeit zu verlieren." },
  ],
  "google-business-profil-optimieren": [
    { sectionId: "grundlagen", summary: "Das Google Business Profil ist der wichtigste Ranking-Faktor für das Local Pack (32% Gewichtung). Vollständig ausgefüllte Profile erhalten 7x mehr Klicks als unvollständige." },
    { sectionId: "optimierung-schritte", summary: "GBP-Optimierung in 10 Schritten: Kategorie wählen, NAP-Daten, Beschreibung mit Keywords, 10+ Fotos, Öffnungszeiten, Services, Produkte, Posts, Q&A, Bewertungsmanagement." },
    { sectionId: "fotos", summary: "Fotos sind ein unterschätzter Ranking-Faktor: Unternehmen mit 100+ Fotos erhalten 520% mehr Anrufe. Geo-getaggte Fotos von Innenräumen, Team und Produkten hochladen." },
    { sectionId: "posts", summary: "Google Posts halten das Profil aktuell und signalisieren Aktivität. Mindestens 2 Posts pro Monat, idealerweise mit Bild, CTA und lokalen Keywords." },
    { sectionId: "faq", summary: "GBP-Optimierung ist die wichtigste und gleichzeitig kostenloseste Local SEO Maßnahme. Ein vollständig optimiertes Profil kann innerhalb von 2-4 Wochen sichtbare Ranking-Verbesserungen bringen." },
  ],
  "google-maps-ranking-faktoren": [
    { sectionId: "hauptfaktoren", summary: "Google Maps Rankings basieren auf drei Hauptfaktoren: Relevanz (Übereinstimmung mit Suchanfrage), Entfernung (Distanz zum Suchenden) und Bekanntheit (Online-Reputation und Autorität)." },
    { sectionId: "relevanz", summary: "Relevanz optimieren: richtige Haupt- und Nebenkategorien wählen, Beschreibung mit lokalen Keywords, Services und Produkte vollständig eintragen, und regelmäßig Q&A beantworten." },
    { sectionId: "bekanntheit", summary: "Bekanntheit (Prominence) steigern: Bewertungen sammeln, lokale Backlinks aufbauen, Erwähnungen in Medien und Branchenverzeichnissen, und aktive Social-Media-Präsenz." },
    { sectionId: "faq", summary: "Der einzige Faktor, den man nicht beeinflussen kann, ist Entfernung. Relevanz und Bekanntheit lassen sich durch systematische Optimierung deutlich verbessern." },
  ],
  "google-business-messaging": [
    { sectionId: "was-ist-messaging", summary: "Google Business Messaging ist eine kostenlose Chat-Funktion im Google Business Profil. Kunden können über den 'Nachricht'-Button direkt mit dem Unternehmen kommunizieren — ohne Anruf oder E-Mail." },
    { sectionId: "einrichten", summary: "Messaging einrichten in 4 Schritten: GBP Manager öffnen, Chat aktivieren, automatische Willkommensnachricht einrichten, Push-Benachrichtigungen auf dem Handy aktivieren." },
    { sectionId: "best-practices", summary: "Antwort-Best-Practices: Innerhalb von 24 Stunden (besser: unter 1 Stunde) antworten, freundlich und professionell kommunizieren, konkrete nächste Schritte anbieten (Termin, Anruf)." },
    { sectionId: "automatisierung", summary: "Automatische Nachrichten nutzen: Willkommensnachricht für sofortige Reaktion, Außerhalb-der-Öffnungszeiten-Nachricht, und FAQ-Schnellantworten für häufig gestellte Fragen." },
    { sectionId: "faq", summary: "Messaging ist komplett kostenlos und kann jederzeit deaktiviert werden. Schnelle Antwortzeiten können indirekt das Ranking verbessern, da sie positive Nutzersignale senden." },
  ],
  "localbusiness-schema-implementierung": [
    { sectionId: "grundlagen", summary: "LocalBusiness Schema wird als JSON-LD im HTML-Head implementiert. Es liefert Google strukturierte Geschäftsdaten wie Name, Adresse, Telefon, Öffnungszeiten und Zahlungsmethoden." },
    { sectionId: "branchentypen", summary: "Branchenspezifische Schema-Typen nutzen: Restaurant, Dentist, Attorney, BeautySalon, AutoRepair etc. Der spezifischste passende Typ liefert die besten Rich Snippets." },
    { sectionId: "pflichtfelder", summary: "Pflichtfelder im LocalBusiness Schema: @type, name, address (streetAddress, addressLocality, postalCode), telephone und openingHoursSpecification." },
    { sectionId: "faq", summary: "LocalBusiness Schema kann mit WordPress-Plugins in unter 30 Minuten implementiert werden. Für manuelle Implementierung bietet Schema.org einen kostenlosen JSON-LD Generator." },
  ],
  "review-schema-implementierung": [
    { sectionId: "grundlagen", summary: "Review Schema zeigt Sterne-Bewertungen direkt in den Suchergebnissen. AggregateRating fasst alle Bewertungen zusammen, Review Schema zeigt einzelne Kundenstimmen." },
    { sectionId: "implementierung", summary: "Implementierung: AggregateRating mit ratingValue, reviewCount und bestRating als JSON-LD. Muss mit LocalBusiness Schema über itemReviewed verknüpft werden." },
    { sectionId: "best-practices", summary: "Best Practices: Bewertungsdaten regelmäßig aktualisieren, nur echte Kundenbewertungen markieren, Mindestens 5 Reviews für AggregateRating, und Google Guidelines für Review Markup einhalten." },
    { sectionId: "faq", summary: "Review Schema darf nur für echte, verifizierte Kundenbewertungen verwendet werden. Fake-Reviews im Schema können zu manuellen Strafen durch Google führen." },
  ],
  "ai-visibility-checklist": [
    { sectionId: "strukturierte-daten", summary: "Strukturierte Daten sind die technische Basis für AI-Sichtbarkeit. JSON-LD Schema Markup (LocalBusiness, FAQPage, Article) ermöglicht AI-Systemen die präzise Extraktion von Geschäftsinformationen." },
    { sectionId: "content-struktur", summary: "AI-optimierte Content-Struktur: Frage als Überschrift, direkte Antwort in 40-60 Wörtern, eigenständige Absätze, Definitionen im ersten Satz und quantifizierte Aussagen mit Quellen." },
    { sectionId: "eeat", summary: "E-E-A-T-Signale für AI-Zitierbarkeit: sichtbare Autorenprofile, transparente Quellenangaben, regelmäßige Content-Updates mit dateModified, und verifizierbare Fakten." },
    { sectionId: "voice-search", summary: "Voice Search Optimierung: FAQ-Strukturen mit natürlichen Fragen, Antworten in 29-42 Wörtern, Speakable Schema Markup und lokale Long-Tail-Keywords in Frageform." },
    { sectionId: "ai-crawler", summary: "AI-Crawler Zugänglichkeit: llms.txt mit Seitenstruktur, ai.txt mit Nutzungsrichtlinien, robots.txt für GPTBot und PerplexityBot erlauben, und sitemap.xml aktuell halten." },
    { sectionId: "faq", summary: "Die AI Visibility Checklist umfasst 57+ Prüfpunkte. Für den Einstieg: zuerst Schema Markup implementieren, dann Content-Struktur optimieren, dann AI-Crawler erlauben." },
  ],
};

export const getSectionSummaries = (slug: string): SectionSummaryData[] => {
  return sectionSummaries[slug] || [];
};
