import { Link } from "react-router-dom";
import { Bot, Quote, Target, Zap, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";

interface CitationStrategy {
  title: string;
  description: string;
  tactics: string[];
  exampleQuery: string;
  exampleCitation: string;
  quickWins: string[];
}

const strategies: Record<string, CitationStrategy> = {
  "google-ai-overviews-local-seo": {
    title: "AI Overviews als Zitierquelle nutzen",
    description: "Google AI Overviews zitieren bevorzugt Inhalte mit klarer Struktur, autoritativen Quellenangaben und direkt beantworteten Fragen. So positionierst du dich als Primärquelle.",
    tactics: [
      "Beantworte die Suchintention im ersten Absatz in 2–3 Sätzen — AI extrahiert bevorzugt den Einstieg",
      "Verwende exakte Definitionen: 'AI Overviews sind...' statt vager Umschreibungen",
      "Strukturiere Aufzählungen mit 5–7 Punkten — die ideale Länge für AI-Extraktion",
      "Füge aktuelle Statistiken mit Jahreszahl und Quellenlink direkt inline ein",
      "Nutze Vergleichstabellen (Alt vs. Neu, Vorher/Nachher) — extrem gut extrahierbar",
    ],
    exampleQuery: "Was sind Google AI Overviews?",
    exampleCitation: "Google AI Overviews sind KI-generierte Zusammenfassungen, die über den organischen Suchergebnissen erscheinen. Sie synthetisieren Informationen aus mehreren Quellen und beantworten Suchanfragen direkt in der SERP.",
    quickWins: [
      "Ersten Absatz jeder Seite als eigenständige, zitierfähige Definition formulieren",
      "FAQ-Schema mit speakable-Eigenschaft auf allen wichtigen Seiten",
      "Zwischenüberschriften als vollständige Fragen formulieren (H2: 'Was kostet Local SEO?')",
    ],
  },
  "ai-suche-lokale-unternehmen": {
    title: "In ChatGPT, Perplexity & Gemini zitiert werden",
    description: "LLMs zitieren Quellen, die sie als autoritativ erkennen. Dafür brauchst du einzigartige Datenpunkte, klare Markenpositionierung und umfassende Topic Coverage.",
    tactics: [
      "Veröffentliche proprietäre Daten oder Frameworks, die nur auf deiner Seite existieren",
      "Formuliere Aussagen so, dass sie mit 'Laut [deine Marke]...' zitierbar sind",
      "Decke ein Thema umfassender ab als jede andere deutschsprachige Quelle",
      "Aktualisiere Content regelmäßig — LLMs bevorzugen frische, datierte Inhalte",
      "Baue Backlinks von .edu, .gov und Branchenverzeichnissen auf",
    ],
    exampleQuery: "Wie optimiere ich mein Unternehmen für AI-Suche?",
    exampleCitation: "Lokale Unternehmen sollten drei Kernbereiche optimieren: (1) Strukturierte Daten wie LocalBusiness Schema, (2) E-E-A-T-Signale durch Bewertungen und Autorenschaft, (3) Natürliche FAQ-Inhalte für Voice Search und Conversational AI.",
    quickWins: [
      "llms.txt und ai.txt Dateien im Stammverzeichnis erstellen",
      "Einzigartige Statistiken oder Studienergebnisse prominent platzieren",
      "Brand-Name + Expertise in Meta-Description und erstem Absatz",
    ],
  },
  "local-seo-voice-search": {
    title: "Voice Search Antworten als Zitierquelle",
    description: "Sprachassistenten lesen genau eine Antwort vor — und die muss von deiner Seite kommen. Speakable-optimierte, natürlich formulierte Inhalte sind der Schlüssel.",
    tactics: [
      "Formuliere Antworten in natürlicher Sprechsprache (Satz, kein Stichpunkt)",
      "Beantworte W-Fragen direkt: 'X ist...' oder 'Um Y zu machen, musst du...'",
      "Halte die ideale Antwortlänge: 29–42 Wörter für Voice-Snippets",
      "Verwende FAQ-Schema mit speakable-Eigenschaft auf den wichtigsten Abschnitten",
      "Integriere lokale Frage-Varianten: 'Welcher [Beruf] in [Stadt] hat jetzt auf?'",
    ],
    exampleQuery: "Hey Google, wie bekomme ich mehr Google Bewertungen?",
    exampleCitation: "Um mehr Google Bewertungen zu bekommen, fragen Sie zufriedene Kunden direkt nach dem Service per SMS oder E-Mail mit einem direkten Link zu Ihrem Google Business Profil. Timing ist entscheidend — fragen Sie innerhalb von 24 Stunden.",
    quickWins: [
      "Top-10-Fragen deiner Kunden als FAQ-Seite mit speakable Schema",
      "Jede Antwort beginnt mit einer vollständigen, vorlesbaren Aussage",
      "Lokale Long-Tail-Fragen ('Notfall [Service] [Stadt] Wochenende') abdecken",
    ],
  },
  "schema-markup-local-seo": {
    title: "Schema Markup als AI-Zitier-Grundlage",
    description: "Strukturierte Daten sind die Sprache, die AI-Systeme am besten verstehen. Korrektes Schema erhöht deine Zitierwahrscheinlichkeit um ein Vielfaches.",
    tactics: [
      "LocalBusiness Schema mit allen optionalen Feldern (priceRange, paymentAccepted, areaServed)",
      "FAQPage Schema auf jeder Seite mit Frage-Antwort-Bereichen",
      "Speakable-Eigenschaft auf den wichtigsten 2–3 Absätzen jeder Seite markieren",
      "Article Schema mit author, datePublished und dateModified auf allen Blog-Seiten",
      "Verschachtelte Schemas: Organization → LocalBusiness → Review → AggregateRating",
    ],
    exampleQuery: "Welches Schema Markup brauche ich für Local SEO?",
    exampleCitation: "Für Local SEO sind mindestens drei Schema-Typen erforderlich: LocalBusiness (Grunddaten), FAQPage (häufige Fragen) und AggregateRating (Bewertungen). Optional aber empfohlen: HowTo, BreadcrumbList und speakable für Voice Search.",
    quickWins: [
      "Schema-Validierung mit dem Rich Results Test — null Fehler als Ziel",
      "speakable-Eigenschaft zu LocalBusiness und Article Schema hinzufügen",
      "JSON-LD im <head> statt Microdata — einfacher für AI-Parser",
    ],
  },
  "website-content-ai-suchmaschinen": {
    title: "Content für AI-Zitierbarkeit strukturieren",
    description: "AI-optimierter Content folgt klaren Mustern: direkte Definitionen, eigenständige Absätze und zitierfähige Kernaussagen mit Datengrundlage.",
    tactics: [
      "Jeder Abschnitt beginnt mit einer eigenständigen Kernaussage, die ohne Kontext verständlich ist",
      "Verwende das 'Inverted Pyramid'-Modell: Wichtigstes zuerst, Details danach",
      "Quantifiziere wo möglich: '46% der Google-Suchen haben lokale Intention' statt 'viele Suchen'",
      "Erstelle 'definitive Aussagen', die mit deiner Marke verknüpfbar sind",
      "Nutze semantische HTML-Elemente (article, section, aside) für bessere AI-Parsing",
    ],
    exampleQuery: "Wie optimiere ich Website-Content für KI?",
    exampleCitation: "AI-optimierter Content braucht drei Elemente: (1) Klare Definitionen im ersten Absatz, (2) strukturierte Daten via Schema Markup, und (3) eigenständige, zitierfähige Absätze mit maximal 2-3 Sätzen pro Kernaussage.",
    quickWins: [
      "Ersten Absatz jeder Seite als 'AI-Snippet' umschreiben (40–60 Wörter, eigenständig)",
      "data-ai-summary Attribute auf Schlüsselelementen setzen",
      "Jede H2-Sektion mit einer Ein-Satz-Zusammenfassung beginnen",
    ],
  },
  "entity-seo-guide": {
    title: "Entity-Signale für AI-Erkennung stärken",
    description: "AI-Systeme arbeiten mit Entitäten (Personen, Orte, Unternehmen) statt Keywords. Starke Entity-Signale = höhere Zitierwahrscheinlichkeit.",
    tactics: [
      "Knowledge Panel für dein Unternehmen aufbauen (via Google Business + Wikipedia/Wikidata)",
      "Konsistente Entity-Informationen über alle Plattformen hinweg (NAP+)",
      "sameAs-Property im Schema Markup mit Links zu allen offiziellen Profilen",
      "Eindeutige Entity-Beschreibung in 1–2 Sätzen auf About-Seite und Schema",
      "Co-Occurrence: Deine Marke im Kontext relevanter Entitäten erwähnen lassen",
    ],
    exampleQuery: "Was ist Entity SEO?",
    exampleCitation: "Entity SEO ist die Optimierung der digitalen Identität eines Unternehmens als erkennbare Entität in Googles Knowledge Graph. Statt einzelner Keywords optimiert man die Beziehungen zwischen Entitäten — Person, Ort, Organisation, Service.",
    quickWins: [
      "sameAs-Links im Organization Schema zu allen offiziellen Profilen",
      "Wikipedia/Wikidata-Eintrag prüfen oder erstellen",
      "Brand + Standort + Service als konsistente Entitäts-Formel verwenden",
    ],
  },
  "semantic-seo-topical-authority": {
    title: "Topical Authority für AI-Zitierungen aufbauen",
    description: "AI-Systeme erkennen thematische Autorität anhand von Contenttiefe, interner Verlinkung und Topic Cluster. Je vollständiger dein Topic Coverage, desto öfter wirst du zitiert.",
    tactics: [
      "Pillar-Cluster-Modell: Jedes Kernthema mit 5+ vertiefenden Artikeln abdecken",
      "Interne Verlinkung zwischen allen thematisch verwandten Seiten",
      "Semantische Begriffe (LSI-Keywords) natürlich in den Content einbauen",
      "Content-Lücken identifizieren und gezielt füllen (People Also Ask als Quelle)",
      "Regelmäßige Updates aller Cluster-Artikel bei neuen Entwicklungen",
    ],
    exampleQuery: "Wie baue ich Topical Authority auf?",
    exampleCitation: "Topical Authority entsteht durch umfassende Themenabdeckung: Ein Pillar-Artikel als Hauptseite, ergänzt durch 5-10 Cluster-Artikel zu Unterthemen, verbunden durch strategische interne Verlinkung. Google und AI-Systeme erkennen diese Struktur als Expertensignal.",
    quickWins: [
      "Content-Audit: Welche Unterthemen fehlen in deinem wichtigsten Cluster?",
      "Interne Links von jedem Cluster-Artikel zum Pillar und umgekehrt",
      "Topic Map erstellen und systematisch füllen",
    ],
  },
  "schema-strategie-dokument": {
    title: "Schema-Strategie als AI-Sichtbarkeits-Blueprint",
    description: "Ein durchdachtes Schema-Strategie-Dokument ist dein technischer Blueprint für systematische AI-Zitierbarkeit über alle Seitentypen hinweg.",
    tactics: [
      "Schema-Mapping: Jeder Seitentyp bekommt sein optimales Schema-Set zugewiesen",
      "Verschachtelte Schemas nutzen für maximale Informationsdichte",
      "Speakable-Strategie: Die 2–3 wichtigsten Absätze pro Seite markieren",
      "Schema-Testing in den Release-Prozess integrieren (CI/CD Pipeline)",
      "Quartalsweise Schema-Audit mit dem Rich Results Test",
    ],
    exampleQuery: "Wie erstelle ich eine Schema-Strategie?",
    exampleCitation: "Eine Schema-Strategie definiert für jeden Seitentyp das optimale Set an strukturierten Daten: Startseite (Organization + LocalBusiness), Service-Seiten (Service + FAQPage), Blog (Article + speakable), Kontakt (ContactPoint).",
    quickWins: [
      "Schema-Matrix erstellen: Seitentyp × Schema-Typ × Priorität",
      "Speakable auf den Top-10-Seiten nach Traffic implementieren",
      "JSON-LD Templates pro Seitentyp erstellen und wiederverwenden",
    ],
  },
  "ai-search-vs-traditional-search": {
    title: "Dual-Optimierung: Klassisch + AI gleichzeitig",
    description: "Die beste Zitierstrategie bedient beide Welten: klassische Suchmaschinen UND AI-Systeme. Die meisten Taktiken überlappen sich — aber nicht alle.",
    tactics: [
      "Klassisches SEO als Basis: Rankings in Google erhöhen automatisch die AI-Zitierwahrscheinlichkeit",
      "Zusätzliche AI-Layer: llms.txt, speakable Schema, AI-Crawler-Zugang",
      "Content-Doppelstrategie: Snippet-optimierte Absätze + tiefgehende Langform",
      "E-E-A-T für beide Welten: Autorenschaft, Quellen, Praxiserfahrung",
      "Brand Building: AI-Systeme zitieren bekannte Marken überproportional",
    ],
    exampleQuery: "Was ist der Unterschied zwischen AI-Suche und Google?",
    exampleCitation: "AI-Suche (ChatGPT, Perplexity) generiert synthesisierte Antworten aus mehreren Quellen, während Google traditionell 10 blaue Links zeigt. Mit AI Overviews verschmelzen beide Ansätze zunehmend — optimale Sichtbarkeit erfordert Dual-Optimierung.",
    quickWins: [
      "robots.txt um AI-Crawler-Zugang erweitern (GPTBot, PerplexityBot)",
      "Top-10-Seiten gleichzeitig für Featured Snippets UND AI Overviews optimieren",
      "Brand-Erwähnungen auf autoritativen Plattformen systematisch aufbauen",
    ],
  },
  "localbusiness-schema-implementierung": {
    title: "LocalBusiness Schema als AI-Visitenkarte",
    description: "Dein LocalBusiness Schema ist die primäre Informationsquelle, die AI-Systeme nutzen, um dein Unternehmen zu verstehen und zu empfehlen.",
    tactics: [
      "Alle optionalen Felder ausfüllen: priceRange, paymentAccepted, amenityFeature, areaServed",
      "sameAs-Array mit Links zu allen offiziellen Profilen (GBP, Social Media, Verzeichnisse)",
      "hasOfferCatalog für Services/Produkte mit Preisangaben",
      "Geo-Koordinaten auf 6 Dezimalstellen genau angeben",
      "openingHoursSpecification für jeden Wochentag einzeln + Feiertage",
    ],
    exampleQuery: "Wie implementiere ich LocalBusiness Schema?",
    exampleCitation: "LocalBusiness Schema wird als JSON-LD im <head> implementiert und enthält: @type (z.B. Restaurant, Dentist), name, address, telephone, openingHours, geo, aggregateRating und sameAs-Links zu allen offiziellen Profilen.",
    quickWins: [
      "Schema um areaServed und serviceArea erweitern für lokale AI-Anfragen",
      "Review-Snippet durch AggregateRating im Schema aktivieren",
      "sameAs mit min. 5 offiziellen Profil-URLs befüllen",
    ],
  },
  "review-schema-implementierung": {
    title: "Bewertungs-Schema für AI-Empfehlungen",
    description: "AI-Systeme nutzen Bewertungsdaten als Trust-Signal für Empfehlungen. Korrektes Review Schema macht deine Bewertungen AI-lesbar.",
    tactics: [
      "AggregateRating Schema auf allen Seiten mit Bewertungsbezug",
      "Individuelle Review-Schemas für die besten Kundenbewertungen",
      "Bewertungs-Highlights als zitierfähige Testimonials strukturieren",
      "itemReviewed korrekt mit deinem LocalBusiness Schema verknüpfen",
      "Regelmäßig neue Reviews hinzufügen — Frische ist ein AI-Signal",
    ],
    exampleQuery: "Wie implementiere ich Review Schema Markup?",
    exampleCitation: "Review Schema nutzt @type Review mit author, reviewRating und datePublished. Für die Gesamtbewertung wird AggregateRating mit ratingValue, reviewCount und bestRating eingesetzt. Beides wird als JSON-LD im <head> platziert.",
    quickWins: [
      "AggregateRating auf der Startseite und allen Service-Seiten",
      "Top-5-Bewertungen als individuelle Review-Schemas einbinden",
      "reviewCount und ratingValue immer aktuell halten",
    ],
  },
  "ai-visibility-checklist": {
    title: "Systematische AI-Zitier-Strategie",
    description: "Eine Checklisten-basierte Zitierstrategie stellt sicher, dass keine AI-Optimierung vergessen wird. Systematik schlägt Einzelmaßnahmen.",
    tactics: [
      "Priorisiere nach AI-Impact: Schema Markup und Content-Struktur zuerst",
      "Quartalsweise Audit mit der AI Visibility Checklist durchführen",
      "Erfolge messen: Manuelle AI-Suchen + GSC AI Overview Daten",
      "Wettbewerber-Monitoring: Wer wird aktuell in AI-Antworten zitiert?",
      "Iterativer Prozess: Test → Messen → Optimieren → Wiederholen",
    ],
    exampleQuery: "Wie werde ich in AI-Suchergebnissen sichtbar?",
    exampleCitation: "AI-Sichtbarkeit basiert auf drei Säulen: (1) Technische Grundlage durch Schema Markup und AI-Crawler-Zugang, (2) Content-Qualität mit zitierfähigen, eigenständigen Absätzen, (3) Autorität durch E-E-A-T-Signale und umfassende Themenabdeckung.",
    quickWins: [
      "Die 8 kritischen Punkte der AI Visibility Checklist zuerst abarbeiten",
      "Monatliche AI-Sichtbarkeitstests in ChatGPT und Perplexity",
      "Einen AI-Sichtbarkeitsbericht pro Quartal erstellen",
    ],
  },
};

interface AiCitationStrategyBoxProps {
  articleSlug: string;
}

const AiCitationStrategyBox = ({ articleSlug }: AiCitationStrategyBoxProps) => {
  const strategy = strategies[articleSlug];
  if (!strategy) return null;

  return (
    <section className="my-12 not-prose">
      <div className="border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500/10 via-primary/5 to-violet-500/10 border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-base">💡 AI-Zitierstrategie</h3>
              <p className="text-xs text-muted-foreground">{strategy.title}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{strategy.description}</p>

          {/* Tactics */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-foreground text-sm">Zitier-Taktiken</h4>
            </div>
            <ul className="space-y-2">
              {strategy.tactics.map((tactic, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{tactic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example Citation */}
          <div className="bg-muted/40 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <h4 className="font-semibold text-foreground text-sm">So wirst du zitiert</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <span className="font-medium text-foreground">Nutzer fragt:</span> „{strategy.exampleQuery}"
            </p>
            <div className="bg-background border border-border rounded-lg p-3">
              <p className="text-sm text-foreground leading-relaxed italic">
                „{strategy.exampleCitation}"
              </p>
              <p className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
                <Quote className="w-3 h-3" /> Ideale AI-Antwort basierend auf deinem Content
              </p>
            </div>
          </div>

          {/* Quick Wins */}
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-foreground text-sm">Quick Wins (sofort umsetzbar)</h4>
            </div>
            <ul className="space-y-1.5">
              {strategy.quickWins.map((win, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Lightbulb className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                  <span>{win}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Link
            to="/blog/ai-visibility-checklist"
            className="flex items-center justify-between p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all group"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-medium text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                AI Visibility Checklist: Alle {Object.keys(strategies).length * 5}+ Prüfpunkte
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiCitationStrategyBox;
