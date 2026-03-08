/**
 * Article definitions data for AI extraction.
 * Each article has:
 * - inlineDefinitions: placed at the start of matching sections via DOM injection
 * - glossary: collected at article end as a mini-glossary
 */

export interface InlineDefinition {
  /** Section ID where this definition appears */
  sectionId: string;
  /** The term being defined */
  term: string;
  /** 1-sentence definition optimized for Featured Snippets (40-60 words) */
  definition: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  /** Optional link to lexikon entry */
  lexikonSlug?: string;
}

export interface ArticleDefinitions {
  inline: InlineDefinition[];
  glossary: GlossaryTerm[];
}

const articleDefinitions: Record<string, ArticleDefinitions> = {
  "ultimate-guide-local-seo": {
    inline: [
      { sectionId: "was-ist-local-seo", term: "Local SEO", definition: "Local SEO bezeichnet die gezielte Optimierung eines Unternehmens für standortbezogene Suchanfragen in Suchmaschinen wie Google. Ziel ist die Sichtbarkeit im Local Pack, in Google Maps und in lokalen organischen Ergebnissen, um Kunden in der unmittelbaren Umgebung zu erreichen." },
      { sectionId: "google-business-profil", term: "Google Business Profil", definition: "Das Google Business Profil (ehemals Google My Business) ist ein kostenloser Unternehmenseintrag bei Google, der in der Google-Suche und auf Google Maps erscheint. Es enthält Geschäftsdaten wie Name, Adresse, Telefonnummer, Öffnungszeiten, Fotos und Kundenbewertungen." },
      { sectionId: "lokale-keywords", term: "Lokale Keywords", definition: "Lokale Keywords sind Suchbegriffe, die eine geografische Komponente enthalten, z.B. 'Zahnarzt München' oder 'Restaurant in der Nähe'. Sie signalisieren Google eine standortbezogene Suchintention und sind die Basis jeder Local-SEO-Strategie." },
      { sectionId: "bewertungen", term: "Bewertungsmanagement", definition: "Bewertungsmanagement umfasst das systematische Sammeln, Überwachen und Beantworten von Online-Kundenbewertungen auf Plattformen wie Google, Yelp und Branchenportalen. Es ist ein Ranking-Faktor (16% Gewichtung) und beeinflusst die Kaufentscheidung von 93% der Verbraucher." },
      { sectionId: "citations", term: "Citations", definition: "Citations (auch NAP-Citations) sind Erwähnungen von Name, Adresse und Telefonnummer eines Unternehmens in Online-Verzeichnissen und Branchenportalen. Konsistente Citations über alle Plattformen sind ein Vertrauenssignal für Google und machen 7% der lokalen Ranking-Faktoren aus." },
      { sectionId: "schema-markup", term: "Schema Markup", definition: "Schema Markup ist ein standardisiertes Datenformat (JSON-LD), das Suchmaschinen strukturierte Informationen über eine Website liefert. Für Local SEO sind LocalBusiness, FAQPage und AggregateRating die wichtigsten Schema-Typen, die Rich Snippets und AI-Sichtbarkeit ermöglichen." },
    ],
    glossary: [
      { term: "Local Pack", definition: "Die drei hervorgehobenen lokalen Ergebnisse mit Karte, die bei lokalen Google-Suchen oben erscheinen.", lexikonSlug: "local-pack" },
      { term: "NAP-Konsistenz", definition: "Die einheitliche Schreibweise von Name, Adresse und Telefonnummer über alle Online-Präsenzen hinweg.", lexikonSlug: "nap-konsistenz" },
      { term: "Local SEO", definition: "Optimierung eines Unternehmens für standortbezogene Suchanfragen in Google und Google Maps.", lexikonSlug: "local-seo" },
      { term: "Google Business Profil", definition: "Kostenloser Unternehmenseintrag bei Google für die Darstellung in Suche und Maps.", lexikonSlug: "google-business-profile" },
      { term: "Rich Snippets", definition: "Erweiterte Suchergebnis-Darstellungen mit Sternen, Preisen oder FAQ dank Schema Markup.", lexikonSlug: "rich-snippets" },
      { term: "E-E-A-T", definition: "Googles Qualitätsbewertung: Experience, Expertise, Authoritativeness, Trustworthiness.", lexikonSlug: "e-e-a-t" },
      { term: "Core Web Vitals", definition: "Googles Metriken für Nutzererfahrung: Ladezeit (LCP), Interaktivität (FID), visuelle Stabilität (CLS).", lexikonSlug: "core-web-vitals" },
    ],
  },
  "lokale-suchmaschinenoptimierung-2026": {
    inline: [
      { sectionId: "ai-overviews", term: "AI Overviews", definition: "AI Overviews sind KI-generierte Zusammenfassungen, die Google über den organischen Suchergebnissen anzeigt. Sie synthetisieren Informationen aus mehreren Quellen und erscheinen 2026 bei über 40% der lokalen Suchanfragen." },
      { sectionId: "zero-click", term: "Zero-Click-Suche", definition: "Eine Zero-Click-Suche ist eine Suchanfrage, bei der der Nutzer die Antwort direkt auf der Google-Ergebnisseite erhält, ohne auf ein Suchergebnis zu klicken. Über 65% aller Google-Suchen sind Zero-Click-Suchen." },
      { sectionId: "voice-search", term: "Voice Search", definition: "Voice Search (Sprachsuche) ist die Suche per Sprachbefehl über Assistenten wie Google Assistant, Alexa oder Siri. Voice-Anfragen sind 3-5x länger als getippte Suchen und verwenden natürliche Frageformulierungen." },
    ],
    glossary: [
      { term: "AI Overviews", definition: "KI-generierte Antwort-Zusammenfassungen über den Google-Suchergebnissen.", lexikonSlug: "ai-overviews" },
      { term: "Zero-Click-Suche", definition: "Suchanfrage, deren Antwort direkt auf der Google-Ergebnisseite erscheint.", lexikonSlug: "zero-click-search" },
      { term: "E-E-A-T", definition: "Googles Qualitätsbewertung: Experience, Expertise, Authoritativeness, Trustworthiness.", lexikonSlug: "e-e-a-t" },
      { term: "Structured Data", definition: "Standardisierte Datenformate (JSON-LD), die Suchmaschinen Inhalte maschinenlesbar machen." },
      { term: "Featured Snippet", definition: "Hervorgehobene Antwortbox über den organischen Google-Ergebnissen (Position 0).", lexikonSlug: "featured-snippet" },
    ],
  },
  "technisches-local-seo-guide": {
    inline: [
      { sectionId: "schema-markup", term: "JSON-LD", definition: "JSON-LD (JavaScript Object Notation for Linked Data) ist das von Google bevorzugte Format für Schema Markup. Es wird als Script-Tag im HTML-Head platziert und liefert Suchmaschinen strukturierte Daten, ohne den sichtbaren Seiteninhalt zu verändern." },
      { sectionId: "core-web-vitals", term: "Core Web Vitals", definition: "Core Web Vitals sind drei von Google definierte Metriken zur Messung der Nutzererfahrung: Largest Contentful Paint (LCP < 2.5s) für Ladezeit, First Input Delay (FID < 100ms) für Interaktivität und Cumulative Layout Shift (CLS < 0.1) für visuelle Stabilität." },
      { sectionId: "mobile-optimierung", term: "Mobile-First Indexierung", definition: "Mobile-First Indexierung bedeutet, dass Google primär die mobile Version einer Website für die Indexierung und das Ranking verwendet. Seit 2021 ist dies der Standard für alle Websites." },
      { sectionId: "crawling", term: "Crawling & Indexierung", definition: "Crawling ist der Prozess, bei dem Suchmaschinen-Bots (Googlebot) Webseiten besuchen und deren Inhalte lesen. Indexierung ist die Aufnahme dieser Inhalte in den Suchindex, aus dem Suchergebnisse generiert werden." },
    ],
    glossary: [
      { term: "JSON-LD", definition: "JavaScript Object Notation for Linked Data — Googles bevorzugtes Format für strukturierte Daten." },
      { term: "LCP", definition: "Largest Contentful Paint — Ladezeit des größten sichtbaren Elements (Ziel: unter 2.5 Sekunden)." },
      { term: "CLS", definition: "Cumulative Layout Shift — Maß für visuelle Stabilität beim Laden (Ziel: unter 0.1)." },
      { term: "Speakable", definition: "Schema-Property, die AI-Systemen und Voice Assistants signalisiert, welche Textabschnitte vorgelesen werden können." },
      { term: "robots.txt", definition: "Textdatei im Root-Verzeichnis, die Suchmaschinen-Crawlern Zugriffsregeln mitteilt." },
      { term: "XML-Sitemap", definition: "Maschinenlesbare Datei, die alle indexierbaren URLs einer Website auflistet." },
    ],
  },
  "local-seo-ranking-faktoren-erklaert": {
    inline: [
      { sectionId: "gbp-signale", term: "GBP-Signale", definition: "GBP-Signale sind alle Ranking-Faktoren, die vom Google Business Profil ausgehen: Kategorien, NAP-Vollständigkeit, Fotos, Posts, Attribute, Q&A und Aktivität. Mit 32% Gewichtung sind sie der stärkste einzelne Ranking-Faktor im Local SEO." },
      { sectionId: "bewertungssignale", term: "Bewertungssignale", definition: "Bewertungssignale umfassen alle bewertungsbezogenen Ranking-Faktoren: Gesamtanzahl der Bewertungen, Durchschnittsbewertung, Aktualität neuer Bewertungen, Antwortrate und Sentiment. Sie machen 16% der lokalen Ranking-Faktoren aus." },
      { sectionId: "link-signale", term: "Link-Signale", definition: "Link-Signale im Local SEO sind Backlinks von anderen Websites, die auf das Unternehmen verweisen. Qualität, lokale Relevanz und Diversität der verlinkenden Domains sind wichtiger als die reine Anzahl." },
    ],
    glossary: [
      { term: "Ranking-Faktoren", definition: "Kriterien, die Googles Algorithmus nutzt, um die Reihenfolge der Suchergebnisse zu bestimmen." },
      { term: "Proximity", definition: "Die räumliche Nähe zwischen Suchendem und Unternehmen — ein nicht beeinflussbarer Ranking-Faktor." },
      { term: "Prominence", definition: "Die Online-Bekanntheit eines Unternehmens, gemessen an Bewertungen, Links und Erwähnungen." },
      { term: "Click-Through-Rate", definition: "Anteil der Nutzer, die auf ein Suchergebnis klicken, im Verhältnis zu allen, die es sehen." },
      { term: "Behavioral Signals", definition: "Nutzerverhaltens-Signale wie Klickrate, Verweildauer und Absprungrate als Ranking-Faktoren." },
    ],
  },
  "ai-suche-lokale-unternehmen": {
    inline: [
      { sectionId: "ai-suche-ueberblick", term: "AI-Suche", definition: "AI-Suche bezeichnet Suchsysteme, die mithilfe von Large Language Models (LLMs) synthetisierte Antworten generieren, statt nur Links aufzulisten. Dazu gehören Google AI Overviews, ChatGPT, Perplexity AI und Microsoft Copilot." },
      { sectionId: "schema-ai", term: "Schema für AI", definition: "Schema Markup für AI-Optimierung umfasst LocalBusiness Schema (Geschäftsdaten), FAQPage Schema (Frage-Antwort-Paare), speakable-Properties (für Voice Search) und sameAs-Links (für Entity-Erkennung). Diese strukturierten Daten ermöglichen AI-Systemen präzise Informationsextraktion." },
      { sectionId: "content-ai", term: "AI-optimierter Content", definition: "AI-optimierter Content ist so strukturiert, dass KI-Systeme ihn korrekt extrahieren und zitieren können: eigenständige Absätze mit 2-3 Sätzen, Definitionen im ersten Absatz, quantifizierte Aussagen mit Quellenangaben und regelmäßige Updates." },
    ],
    glossary: [
      { term: "LLM", definition: "Large Language Model — KI-Modelle wie GPT, Gemini oder Claude, die natürliche Sprache verstehen und generieren." },
      { term: "llms.txt", definition: "Eine Textdatei im Root-Verzeichnis, die AI-Crawlern strukturierte Informationen über die Website liefert." },
      { term: "GPTBot", definition: "OpenAIs Web-Crawler, der Inhalte für ChatGPT und andere OpenAI-Produkte sammelt." },
      { term: "Generative Engine Optimization", definition: "Die Optimierung von Inhalten für KI-gestützte Suchsysteme, die Antworten synthetisieren statt Links aufzulisten." },
      { term: "Speakable", definition: "Schema-Property, die Voice Assistants signalisiert, welche Absätze vorgelesen werden können." },
    ],
  },
  "google-ai-overviews-local-seo": {
    inline: [
      { sectionId: "was-sind-ai-overviews", term: "Google AI Overviews", definition: "Google AI Overviews sind KI-generierte Zusammenfassungen, die Google über den organischen Suchergebnissen einblendet. Sie beantworten Suchanfragen direkt, indem sie Informationen aus 2-5 zitierten Quellen synthetisieren." },
      { sectionId: "content-struktur", term: "AI-extrahierbarer Content", definition: "AI-extrahierbarer Content ist so strukturiert, dass Google AI Overviews ihn als Quelle zitieren kann: direkte Antwort in den ersten 100 Wörtern, eigenständige Absätze und klare Frage-Antwort-Paare." },
    ],
    glossary: [
      { term: "AI Overviews", definition: "KI-generierte Antwort-Zusammenfassungen über den Google-Suchergebnissen.", lexikonSlug: "ai-overviews" },
      { term: "Featured Snippet", definition: "Hervorgehobene Antwortbox über den organischen Google-Ergebnissen (Position 0).", lexikonSlug: "featured-snippet" },
      { term: "FAQPage Schema", definition: "Strukturiertes Datenformat für Frage-Antwort-Paare, das FAQ-Rich-Snippets ermöglicht." },
      { term: "E-E-A-T", definition: "Googles Qualitätsbewertung: Experience, Expertise, Authoritativeness, Trustworthiness.", lexikonSlug: "e-e-a-t" },
    ],
  },
  "schema-markup-local-seo": {
    inline: [
      { sectionId: "warum-schema", term: "Schema Markup", definition: "Schema Markup ist ein standardisiertes Vokabular (schema.org), das als JSON-LD im HTML-Head einer Website eingebettet wird. Es liefert Suchmaschinen maschinenlesbare Informationen über Inhalte, Unternehmen und Entitäten." },
      { sectionId: "wichtige-schemas", term: "LocalBusiness Schema", definition: "LocalBusiness Schema ist ein Schema.org-Typ, der strukturierte Geschäftsdaten wie Name, Adresse, Telefonnummer, Öffnungszeiten und Geo-Koordinaten maschinenlesbar bereitstellt und Rich Snippets in den Suchergebnissen ermöglicht." },
      { sectionId: "validierung", term: "Schema-Validierung", definition: "Schema-Validierung ist die Prüfung von strukturierten Daten auf syntaktische Korrektheit und Google-Konformität mithilfe von Tools wie dem Google Rich Results Test und dem Schema.org Validator." },
    ],
    glossary: [
      { term: "JSON-LD", definition: "JavaScript Object Notation for Linked Data — Googles bevorzugtes Format für Schema Markup." },
      { term: "FAQPage Schema", definition: "Schema-Typ für Frage-Antwort-Paare, der FAQ-Rich-Snippets in den Suchergebnissen erzeugt." },
      { term: "AggregateRating", definition: "Schema-Typ für zusammengefasste Bewertungen mit Sterne-Rating, der Star Ratings in Suchergebnissen anzeigt." },
      { term: "Rich Results Test", definition: "Googles kostenloses Tool zur Validierung von strukturierten Daten und Vorschau von Rich Snippets." },
    ],
  },
  "local-seo-voice-search": {
    inline: [
      { sectionId: "voice-search-basics", term: "Voice Search", definition: "Voice Search (Sprachsuche) ist die Suche per gesprochenem Befehl über digitale Assistenten wie Google Assistant, Amazon Alexa oder Apple Siri. Sprachanfragen sind durchschnittlich 3-5x länger als getippte Suchen und verwenden natürliche Frageformulierungen." },
      { sectionId: "lokale-voice-search", term: "Lokale Sprachsuche", definition: "Lokale Sprachsuche umfasst standortbezogene Voice-Anfragen wie 'Wo ist der nächste Zahnarzt?' oder 'Welches Restaurant hat jetzt geöffnet?'. Sie machen einen wachsenden Anteil aller Voice-Searches aus und haben eine besonders hohe Conversion-Rate." },
    ],
    glossary: [
      { term: "Speakable Schema", definition: "Schema-Property, die Sprachassistenten signalisiert, welche Textabschnitte vorgelesen werden können." },
      { term: "Featured Snippet", definition: "Hervorgehobene Antwortbox bei Google — 70% der Voice Search Antworten stammen hieraus." },
      { term: "Long-Tail-Keywords", definition: "Längere, spezifischere Suchbegriffe mit geringerem Volumen, aber höherer Conversion-Rate." },
      { term: "Conversational Search", definition: "Natürlichsprachliche Suche in Frageform, typisch für Voice Search und AI-Chatbots." },
    ],
  },
  "website-content-ai-suchmaschinen": {
    inline: [
      { sectionId: "content-struktur", term: "AI-Content-Struktur", definition: "AI-Content-Struktur beschreibt die optimale Formatierung von Website-Inhalten für die Extraktion durch KI-Systeme: eigenständige Absätze mit 2-3 Sätzen, Definitionen im ersten Satz jeder Sektion und Frage-Antwort-Paare als H2-Überschrift mit direkter Antwort." },
      { sectionId: "zitierbarkeit", term: "AI-Zitierbarkeit", definition: "AI-Zitierbarkeit ist die Wahrscheinlichkeit, dass KI-Systeme wie ChatGPT, Perplexity oder Google AI Overviews eine Website als Quelle zitieren. Sie hängt ab von E-E-A-T-Signalen, Content-Struktur, Quellenangaben und Schema Markup." },
    ],
    glossary: [
      { term: "data-ai-summary", definition: "HTML-Attribut, das AI-Crawlern signalisiert, dass ein Absatz eine maschinenlesbare Zusammenfassung enthält." },
      { term: "dateModified", definition: "Schema-Property, die das letzte Aktualisierungsdatum eines Inhalts maschinenlesbar angibt." },
      { term: "Generative Engine Optimization", definition: "Optimierung von Inhalten für KI-Suchsysteme, die Antworten synthetisieren statt Links aufzulisten." },
      { term: "Topical Authority", definition: "Thematische Autorität, die durch vollständige Abdeckung eines Themenbereichs entsteht." },
    ],
  },
  "entity-seo-guide": {
    inline: [
      { sectionId: "was-ist-entity-seo", term: "Entity SEO", definition: "Entity SEO ist die Optimierung der digitalen Identität eines Unternehmens als erkennbare Entität in Googles Knowledge Graph. Statt einzelner Keywords werden semantische Beziehungen zwischen Entitäten (Personen, Unternehmen, Orte, Konzepte) optimiert." },
      { sectionId: "knowledge-graph", term: "Knowledge Graph", definition: "Der Google Knowledge Graph ist eine Wissensdatenbank, die Entitäten und ihre Beziehungen zueinander speichert. Er enthält Milliarden von Fakten und ist die Grundlage für Knowledge Panels, AI Overviews und Rich Results." },
    ],
    glossary: [
      { term: "Entity", definition: "Ein eindeutig identifizierbares Objekt (Person, Unternehmen, Ort, Konzept) im Knowledge Graph." },
      { term: "sameAs", definition: "Schema-Property, die alle offiziellen Profile einer Entität verknüpft (Website, Social Media, Wikidata)." },
      { term: "Knowledge Panel", definition: "Info-Box rechts in den Google-Suchergebnissen mit zusammengefassten Fakten über eine Entität." },
      { term: "Wikidata", definition: "Freie Wissensdatenbank der Wikimedia Foundation, die als Quelle für den Knowledge Graph dient." },
    ],
  },
  "semantic-seo-topical-authority": {
    inline: [
      { sectionId: "was-ist-semantic-seo", term: "Semantic SEO", definition: "Semantic SEO ist die Optimierung von Website-Inhalten für thematische Relevanz statt einzelner Keywords. Google versteht semantische Zusammenhänge zwischen Begriffen und belohnt Websites, die ein Thema umfassend und strukturiert abdecken." },
      { sectionId: "topical-authority", term: "Topical Authority", definition: "Topical Authority (thematische Autorität) ist der Grad, in dem Google eine Website als Experte für ein bestimmtes Themengebiet einstuft. Sie entsteht durch vollständige Themenabdeckung mit Pillar Pages, Cluster-Artikeln und strategischer interner Verlinkung." },
      { sectionId: "pillar-cluster", term: "Pillar-Cluster-Modell", definition: "Das Pillar-Cluster-Modell ist eine Content-Architektur, bei der eine umfassende Pillar Page (3.000+ Wörter) als thematisches Zentrum dient und mit 5-10 spezialisierten Cluster-Artikeln über interne Links verbunden ist." },
    ],
    glossary: [
      { term: "Pillar Page", definition: "Umfassende Hauptseite zu einem Kernthema, die als thematisches Zentrum eines Content-Clusters dient." },
      { term: "Content Cluster", definition: "Gruppe thematisch verwandter Artikel, die über interne Links mit einer Pillar Page verbunden sind." },
      { term: "Internal Linking", definition: "Strategische Verlinkung zwischen Seiten derselben Website zur Signalisierung thematischer Zusammenhänge." },
      { term: "Topic Gap", definition: "Thematische Lücke in der Content-Abdeckung, die die Topical Authority schwächt." },
    ],
  },
  "ai-search-vs-traditional-search": {
    inline: [
      { sectionId: "unterschiede", term: "AI-Suche vs. traditionelle Suche", definition: "AI-Suche (ChatGPT, Perplexity) generiert synthetisierte Antworten aus mehreren Quellen, während traditionelle Google-Suche eine Liste von 10 blauen Links zeigt. AI Overviews verschmelzen beide Ansätze in einem hybriden Modell." },
      { sectionId: "dual-optimierung", term: "Dual-Optimierung", definition: "Dual-Optimierung ist die gleichzeitige Optimierung für klassische Suchmaschinen (Google-Rankings) und AI-Suchsysteme (ChatGPT, Perplexity). Sie kombiniert traditionelles SEO mit AI-spezifischen Maßnahmen wie llms.txt und speakable Schema." },
    ],
    glossary: [
      { term: "Perplexity AI", definition: "KI-Suchmaschine, die Antworten mit Quellenangaben generiert und Websites als Referenzen zitiert." },
      { term: "ChatGPT Search", definition: "OpenAIs Web-Suche in ChatGPT, die aktuelle Informationen mit Quellenangaben liefert." },
      { term: "Blue Links", definition: "Traditionelle Google-Suchergebnisse als klickbare Titel-URL-Beschreibung-Kombination." },
      { term: "Hybrid Search", definition: "Suchmodell, das klassische Ergebnislisten mit KI-generierten Antworten kombiniert." },
    ],
  },
  "google-business-profil-optimieren": {
    inline: [
      { sectionId: "grundlagen", term: "Google Business Profil", definition: "Das Google Business Profil (GBP, ehemals Google My Business) ist ein kostenloser Unternehmenseintrag bei Google. Es erscheint in der Google-Suche und auf Google Maps und ist der wichtigste einzelne Ranking-Faktor für das Local Pack (32% Gewichtung)." },
      { sectionId: "fotos", term: "GBP-Fotos", definition: "Fotos im Google Business Profil sind ein unterschätzter Ranking- und Conversion-Faktor. Unternehmen mit 100+ Fotos erhalten 520% mehr Anrufe. Empfohlen werden geo-getaggte Bilder von Innenräumen, Team, Produkten und der Außenansicht." },
      { sectionId: "posts", term: "Google Posts", definition: "Google Posts sind kurze Beiträge (bis 1.500 Zeichen), die im Google Business Profil veröffentlicht werden. Sie signalisieren Google Aktivität und Aktualität und können Angebote, Events, Neuigkeiten oder Produkte bewerben." },
    ],
    glossary: [
      { term: "GBP-Kategorie", definition: "Haupt- und Nebenkategorien im Google Business Profil, die die Branchenzuordnung bestimmen." },
      { term: "Google Maps", definition: "Googles Kartendienst, in dem lokale Unternehmen mit ihrem GBP-Eintrag erscheinen." },
      { term: "Q&A-Sektion", definition: "Frage-Antwort-Bereich im GBP, in dem Nutzer und Inhaber Fragen stellen und beantworten können." },
      { term: "Geo-Tagging", definition: "Das Hinzufügen von GPS-Koordinaten zu Fotos, um deren lokale Relevanz zu signalisieren." },
    ],
  },
  "google-maps-ranking-faktoren": {
    inline: [
      { sectionId: "hauptfaktoren", term: "Google Maps Ranking-Faktoren", definition: "Google Maps Rankings werden von drei Hauptfaktoren bestimmt: Relevanz (wie gut ein Eintrag zur Suchanfrage passt), Entfernung (räumliche Nähe zum Suchenden) und Bekanntheit (Online-Reputation durch Bewertungen, Links und Erwähnungen)." },
      { sectionId: "bekanntheit", term: "Prominence (Bekanntheit)", definition: "Prominence ist einer der drei Google Maps Ranking-Faktoren und beschreibt die Online-Bekanntheit eines Unternehmens. Sie wird gemessen an Bewertungsanzahl und -qualität, Backlinks, Erwähnungen in Medien und der Stärke der gesamten Online-Präsenz." },
    ],
    glossary: [
      { term: "Relevanz", definition: "Wie gut ein GBP-Eintrag zur Suchanfrage passt — beeinflusst durch Kategorie, Beschreibung und Services." },
      { term: "Proximity", definition: "Die räumliche Nähe zwischen Suchendem und Unternehmen — nicht durch SEO beeinflussbar." },
      { term: "Prominence", definition: "Die Online-Bekanntheit eines Unternehmens, gemessen an Reviews, Links und Erwähnungen." },
      { term: "Service Area", definition: "Das definierte Einzugsgebiet eines Unternehmens ohne physischen Kundenstandort." },
    ],
  },
  "google-business-messaging": {
    inline: [
      { sectionId: "was-ist-messaging", term: "Google Business Messaging", definition: "Google Business Messaging ist eine kostenlose Chat-Funktion im Google Business Profil, über die Kunden direkt per Textnachricht mit einem Unternehmen kommunizieren können — ohne Anruf und ohne E-Mail." },
      { sectionId: "automatisierung", term: "Messaging-Automatisierung", definition: "Messaging-Automatisierung im GBP umfasst automatische Willkommensnachrichten, Außerhalb-der-Öffnungszeiten-Antworten und FAQ-Schnellantworten, die eine sofortige Reaktion auf Kundenanfragen sicherstellen." },
    ],
    glossary: [
      { term: "Willkommensnachricht", definition: "Automatische erste Antwort, die Kunden sofort nach ihrer ersten Nachricht erhalten." },
      { term: "Antwortzeit", definition: "Die Zeit zwischen Kundenanfrage und Unternehmensantwort — Google empfiehlt unter 24 Stunden." },
      { term: "Push-Benachrichtigung", definition: "Sofortige Handy-Benachrichtigung bei neuen Kundennachrichten im GBP." },
    ],
  },
  "localbusiness-schema-implementierung": {
    inline: [
      { sectionId: "grundlagen", term: "LocalBusiness Schema", definition: "LocalBusiness Schema ist ein Schema.org-Typ zur strukturierten Beschreibung lokaler Unternehmen. Als JSON-LD im HTML-Head platziert, liefert es Suchmaschinen maschinenlesbare Daten zu Name, Adresse, Telefon, Öffnungszeiten, Geo-Koordinaten und Services." },
      { sectionId: "branchentypen", term: "Schema-Untertypen", definition: "Schema-Untertypen sind branchenspezifische Varianten des LocalBusiness Schema, z.B. Restaurant, Dentist, Attorney, BeautySalon oder AutoRepair. Der spezifischste passende Typ liefert Google die präzisesten Informationen für Rich Snippets." },
    ],
    glossary: [
      { term: "JSON-LD", definition: "JavaScript Object Notation for Linked Data — das von Google empfohlene Format für Schema Markup." },
      { term: "@type", definition: "Schema-Property, die den Typ einer Entität definiert (z.B. LocalBusiness, Restaurant, Dentist)." },
      { term: "openingHoursSpecification", definition: "Schema-Property für strukturierte Öffnungszeiten mit Wochentag und Uhrzeiten." },
      { term: "GeoCoordinates", definition: "Schema-Typ für die Angabe von Breitengrad und Längengrad eines Standorts." },
    ],
  },
  "review-schema-implementierung": {
    inline: [
      { sectionId: "grundlagen", term: "Review Schema", definition: "Review Schema (schema.org/Review) ist ein strukturiertes Datenformat zur Auszeichnung von Kundenbewertungen. Es ermöglicht die Anzeige von Sterne-Ratings in den Google-Suchergebnissen und liefert AI-Systemen maschinenlesbare Bewertungsdaten." },
      { sectionId: "implementierung", term: "AggregateRating", definition: "AggregateRating ist ein Schema.org-Typ, der die Gesamtbewertung eines Unternehmens zusammenfasst: Durchschnittsbewertung (ratingValue), Anzahl der Bewertungen (reviewCount) und maximale Bewertung (bestRating, meist 5)." },
    ],
    glossary: [
      { term: "Review Schema", definition: "Schema-Typ für einzelne Kundenbewertungen mit Author, Rating und Datum." },
      { term: "AggregateRating", definition: "Schema-Typ für zusammengefasste Bewertungen mit Durchschnittswert und Anzahl." },
      { term: "itemReviewed", definition: "Schema-Property, die eine Bewertung mit dem bewerteten Unternehmen (LocalBusiness) verknüpft." },
      { term: "Star Rating", definition: "Sterne-Bewertung in den Suchergebnissen, die durch AggregateRating Schema ermöglicht wird." },
    ],
  },
  "schema-strategie-dokument": {
    inline: [
      { sectionId: "strategie", term: "Schema-Strategie", definition: "Eine Schema-Strategie ist ein systematischer Plan, der für jeden Seitentyp einer Website das optimale Set an Schema Markup definiert. Sie priorisiert die Implementierung nach Traffic-Relevanz und stellt konsistente strukturierte Daten über die gesamte Website sicher." },
    ],
    glossary: [
      { term: "Schema-Mapping", definition: "Zuordnung von Schema-Typen zu Seitentypen (Startseite → Organization, Service → Service+FAQPage)." },
      { term: "Schema-Audit", definition: "Regelmäßige Prüfung aller implementierten Schema Markups auf Fehler und Vollständigkeit." },
      { term: "Speakable-Strategie", definition: "Plan zur gezielten Auszeichnung der wichtigsten Textabschnitte mit speakable-Properties." },
    ],
  },
  "ai-visibility-checklist": {
    inline: [
      { sectionId: "strukturierte-daten", term: "AI-Sichtbarkeit", definition: "AI-Sichtbarkeit beschreibt, wie gut eine Website von KI-Systemen (Google AI Overviews, ChatGPT, Perplexity) gefunden, extrahiert und als Quelle zitiert wird. Sie hängt ab von Schema Markup, Content-Struktur, E-E-A-T-Signalen und technischer AI-Crawler-Zugänglichkeit." },
      { sectionId: "ai-crawler", term: "AI-Crawler", definition: "AI-Crawler sind automatisierte Bots von KI-Unternehmen (GPTBot von OpenAI, PerplexityBot, Google-Extended), die Webseiten besuchen und deren Inhalte für das Training und die Antwortgenerierung von Large Language Models sammeln." },
    ],
    glossary: [
      { term: "GPTBot", definition: "OpenAIs Web-Crawler, der Inhalte für ChatGPT und DALL-E sammelt." },
      { term: "PerplexityBot", definition: "Perplexity AIs Web-Crawler für die Echtzeit-Suche und Antwortgenerierung." },
      { term: "Google-Extended", definition: "Googles Crawler für Gemini AI Training, separat von Googlebot steuerbar." },
      { term: "ai.txt", definition: "Textdatei im .well-known-Verzeichnis mit Nutzungsrichtlinien für AI-Systeme." },
      { term: "llms.txt", definition: "Textdatei im Root-Verzeichnis mit strukturierter Seitenübersicht für AI-Crawler." },
    ],
  },
};

export const getArticleDefinitions = (slug: string): ArticleDefinitions | null => {
  return articleDefinitions[slug] || null;
};

export const getInlineDefinitions = (slug: string): InlineDefinition[] => {
  return articleDefinitions[slug]?.inline || [];
};

export const getGlossaryTerms = (slug: string): GlossaryTerm[] => {
  return articleDefinitions[slug]?.glossary || [];
};
