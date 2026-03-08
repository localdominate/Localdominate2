import TopicHubLayout, { HubArticleGroup, HubSummary, HubComparisonTable, HubResource } from "@/components/blog/TopicHubLayout";
import { Building2, Store, Camera, Star, FileText, MapPin, Settings, MessageSquare, Search } from "lucide-react";
import StepByStepProcess, { type ProcessStep } from "@/components/blog/StepByStepProcess";

const groups: HubArticleGroup[] = [
  {
    title: "Profil-Optimierung",
    description: "Grundlagen und fortgeschrittene Techniken zur GBP-Optimierung",
    icon: "🏢",
    slugs: [
      "google-my-business-optimieren",
      "google-business-kategorien-guide",
      "google-business-produkte-services",
      "gbp-fotos-optimieren",
      "gbp-attribute-richtig-nutzen",
      "gbp-oeffnungszeiten-sondertage",
    ],
  },
  {
    title: "Bewertungen & Reputation",
    description: "Strategien für mehr Bewertungen und professionelles Reputationsmanagement",
    icon: "⭐",
    slugs: [
      "google-bewertungen-bekommen",
      "bewertungs-antworten-vorlagen",
      "negative-google-bewertungen",
      "gbp-bewertung-loeschen-anleitung",
      "review-schema-implementierung",
    ],
  },
  {
    title: "Insights & Performance",
    description: "Daten verstehen und für Wachstum nutzen",
    icon: "📊",
    slugs: [
      "google-business-insights-verstehen",
      "google-maps-ranking-verbessern",
      "google-maps-seo-ranking-faktoren",
      "local-seo-reporting-template",
    ],
  },
  {
    title: "Erweiterte Funktionen",
    description: "Posts, Messaging und Multi-Standort-Management",
    icon: "🚀",
    slugs: [
      "google-posts-ranking-faktor",
      "google-business-messaging",
      "gbp-mehrere-standorte",
      "local-seo-mehrstufig-unternehmen",
    ],
  },
  {
    title: "Fehlerbehebung",
    description: "Lösungen für häufige GBP-Probleme",
    icon: "🛠️",
    slugs: [
      "gbp-suspendiert-reaktivieren",
      "gbp-verifizierung-fehlgeschlagen",
      "gbp-nicht-in-suche-sichtbar",
      "duplicate-listing-entfernen",
      "ranking-ploetzlich-verschwunden",
    ],
  },
];

const summary: HubSummary = {
  text: "Dein Google Business Profil ist der wichtigste Ranking-Faktor im Local Pack (36 % Gewichtung). Vollständig optimierte Profile erhalten 7× mehr Klicks, 70 % mehr Besuche und 50 % mehr Kaufbereitschaft als unvollständige Einträge. Dieser Hub deckt alle GBP-Bereiche von der Ersteinrichtung bis zur Fehlerbehebung ab.",
  stats: [
    { label: "Artikel in diesem Hub", value: "24+" },
    { label: "Ranking-Gewichtung GBP", value: "36 %" },
    { label: "Mehr Klicks bei Optimierung", value: "7×" },
    { label: "Guides für Problemlösung", value: "5" },
  ],
};

const comparisonTable: HubComparisonTable = {
  title: "Vergleich: GBP-Optimierungsbereiche nach Impact",
  headers: ["Bereich", "Ranking-Impact", "Aufwand", "Zeitbedarf", "Priorität"],
  rows: [
    { label: "Kategorien & Infos", cells: ["Sehr hoch", "Gering", "1–2 Stunden", "🔴 Kritisch"] },
    { label: "Bewertungen sammeln", cells: ["Hoch (17 %)", "Mittel", "Laufend", "🔴 Kritisch"] },
    { label: "Fotos & Medien", cells: ["Mittel-hoch", "Mittel", "2–4 Stunden", "🟡 Hoch"] },
    { label: "Google Posts", cells: ["Mittel", "Gering", "30 Min./Woche", "🟡 Hoch"] },
    { label: "Attribute & Extras", cells: ["Gering-mittel", "Gering", "30 Minuten", "🟢 Empfohlen"] },
    { label: "Messaging einrichten", cells: ["Gering (indirekt)", "Gering", "15 Minuten", "🟢 Empfohlen"] },
    { label: "Produkte & Services", cells: ["Mittel", "Mittel", "1–3 Stunden", "🟡 Hoch"] },
    { label: "Multi-Standort-Setup", cells: ["Hoch", "Hoch", "1–2 Tage", "🔴 Kritisch*"] },
  ],
  footnote: "* Multi-Standort nur relevant für Unternehmen mit mehreren Filialen.",
};

const resources: HubResource[] = [
  { label: "Ultimate Guide Local SEO", href: "/blog/ultimate-guide-local-seo", type: "pillar" },
  { label: "Local SEO Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar" },
  { label: "Google Maps Audit Template", href: "/blog/google-maps-audit-template", type: "tool" },
  { label: "Local SEO Checkliste (80+ Punkte)", href: "/blog/local-seo-checkliste-komplett", type: "checklist" },
  { label: "LocalBusiness Schema implementieren", href: "/blog/localbusiness-schema-implementierung", type: "guide" },
  { label: "90-Tage Local SEO Roadmap", href: "/blog/local-seo-roadmap-90-tage", type: "tool" },
];

/* Step-by-step GBP optimization frameworks */

const gbpSetupSteps: ProcessStep[] = [
  {
    title: "Google Business Profil erstellen oder beanspruchen",
    description: "Suche dein Unternehmen auf Google Maps. Falls es bereits existiert, klicke auf 'Dieses Unternehmen beanspruchen'. Falls nicht, erstelle ein neues Profil ueber business.google.com.",
    duration: "15 Min.",
    icon: Store,
    tip: "Verwende exakt den rechtlichen Firmennamen - keine Keywords oder Ortsangaben hinzufuegen, sonst riskierst du eine Suspendierung.",
  },
  {
    title: "Verifizierung abschliessen",
    description: "Waehle die Verifizierungsmethode (Postkarte, Telefon, E-Mail oder Video). Bei Postkarte: Adresse exakt wie im Handelsregister eingeben. Der Code kommt in 5-14 Tagen.",
    duration: "5-14 Tage",
    icon: MapPin,
    warning: "Aendere keine Profilinformationen waehrend der Verifizierung - das kann den Prozess zuruecksetzen.",
  },
  {
    title: "Primaere & sekundaere Kategorien festlegen",
    description: "Waehle die spezifischste Kategorie als primaere (z.B. 'Italienisches Restaurant' statt 'Restaurant'). Fuege 3-5 passende sekundaere Kategorien hinzu. Analysiere die Kategorien deiner Top-3-Konkurrenten.",
    duration: "30 Min.",
    icon: Settings,
    tip: "Die primaere Kategorie hat den groessten Einfluss auf dein Ranking im Local Pack. Nutze tools.gmb.pizza fuer die Kategorien-Recherche.",
  },
  {
    title: "NAP-Daten & Beschreibung optimieren",
    description: "Trage Firmenname, Adresse und Telefonnummer (NAP) exakt so ein, wie sie auf deiner Website stehen. Schreibe eine 750-Zeichen-Beschreibung mit deinen wichtigsten lokalen Keywords.",
    duration: "45 Min.",
    icon: FileText,
    tip: "Integriere 3-5 lokale Keywords natuerlich in die Beschreibung: Branche + Stadt + Stadtteil.",
  },
  {
    title: "Fotos & Medien hochladen",
    description: "Lade mindestens 10 hochwertige Fotos hoch: Logo (250x250px), Titelbild (1080x608px), Innenraum, Aussenansicht, Team und Produkte/Services. Geo-tagge alle Bilder mit deinem Standort.",
    duration: "1-2 Std.",
    icon: Camera,
    tip: "Profile mit 100+ Fotos erhalten 520% mehr Anrufe und 2.717% mehr Wegbeschreibungen als der Durchschnitt.",
  },
  {
    title: "Bewertungsstrategie aktivieren",
    description: "Erstelle deinen direkten Bewertungslink (Suche deinen Firmennamen auf Maps, dann Teilen und Link kopieren). Integriere den Link in E-Mail-Signaturen, Rechnungen und QR-Codes am Standort.",
    duration: "30 Min.",
    icon: Star,
    warning: "Biete niemals Gegenleistungen fuer Bewertungen an - das verstoesst gegen Googles Richtlinien und kann zur Entfernung aller Bewertungen fuehren.",
  },
  {
    title: "Google Posts & regelmaessige Updates starten",
    description: "Erstelle deinen ersten Google Post (Angebot, Event oder Update). Plane woechentliche Posts mit lokalen Keywords. Posts bleiben 7 Tage prominent sichtbar.",
    duration: "30 Min./Woche",
    icon: MessageSquare,
    tip: "Posts mit Bildern erhalten 10x mehr Engagement. Fuege immer einen CTA-Button hinzu (Jetzt buchen, Mehr erfahren).",
  },
];

const gbpMonthlyMaintenanceSteps: ProcessStep[] = [
  {
    title: "Insights & Performance analysieren",
    description: "Pruefe im GBP-Dashboard: Suchanfragen (direkt vs. discovery), Foto-Aufrufe, Anruf-Klicks und Wegbeschreibungen. Vergleiche mit dem Vormonat.",
    duration: "20 Min.",
    icon: Search,
    tip: "Steigen Discovery-Suchen? Dann funktioniert deine Keyword-Strategie. Sinken sie? Pruefe deine Kategorien und Beschreibung.",
  },
  {
    title: "Neue Fotos & Medien hochladen",
    description: "Fuege mindestens 5 neue, geo-getaggte Fotos hinzu. Zeige saisonale Angebote, neue Produkte oder Team-Updates. Loesche veraltete oder minderwertige Bilder.",
    duration: "30 Min.",
    icon: Camera,
  },
  {
    title: "Alle neuen Bewertungen beantworten",
    description: "Beantworte jede Bewertung innerhalb von 48 Stunden - positiv und negativ. Integriere natuerlich Keywords: 'Vielen Dank fuer Ihren Besuch in unserer [Branche] in [Stadt]!'",
    duration: "15 Min.",
    icon: Star,
    warning: "Verwende nie Copy-Paste-Antworten fuer alle Bewertungen. Google erkennt Muster und wertet einzigartige Antworten hoeher.",
  },
  {
    title: "4 Google Posts erstellen und einplanen",
    description: "Plane woechentliche Posts: 1x Angebot, 1x Neuigkeit, 1x FAQ-Antwort, 1x Behind-the-Scenes. Jeder Post mit Bild und CTA-Button.",
    duration: "1 Std.",
    icon: MessageSquare,
    tip: "Nutze saisonale Events und lokale Bezuege fuer hoeheres Engagement: Stadtfeste, Feiertage, lokale Nachrichten.",
  },
  {
    title: "NAP-Konsistenz ueberpruefen",
    description: "Gleiche deine NAP-Daten auf GBP, Website, und den Top-10-Verzeichnissen ab. Korrigiere Abweichungen sofort - besonders nach Umzug, Nummernwechsel oder Namensaenderung.",
    duration: "30 Min.",
    icon: MapPin,
  },
  {
    title: "Konkurrenz-Check durchfuehren",
    description: "Analysiere die Top-3 Konkurrenten im Local Pack: Neue Bewertungen? Neue Fotos? Neue Kategorien? Notiere Aenderungen und passe deine Strategie an.",
    duration: "20 Min.",
    icon: Search,
    tip: "Nutze die 'In der Naehe'-Suche mit deinem Hauptkeyword, um deine aktuelle Position im Local Pack zu pruefen.",
  },
];

const gbpAdvancedOptimizationSteps: ProcessStep[] = [
  {
    title: "Produkte & Services vollstaendig einpflegen",
    description: "Erstelle fuer jeden Service/Produkt einen eigenen Eintrag mit Beschreibung (300 Zeichen), Preis und Link zur entsprechenden Unterseite. Nutze lokale Keywords in den Beschreibungen.",
    duration: "1-2 Std.",
    icon: Store,
    tip: "Services mit Preisangaben erhalten 25% mehr Klicks. Verlinke auf dedizierte Landing Pages statt auf die Startseite.",
  },
  {
    title: "Alle Attribute aktivieren und optimieren",
    description: "Gehe durch saemtliche verfuegbaren Attribute: Barrierefreiheit, Zahlungsmethoden, Besonderheiten (z.B. 'Von Frauen gefuehrt', 'LGBTQ+-freundlich'). Jedes relevante Attribut aktivieren.",
    duration: "20 Min.",
    icon: Settings,
    tip: "Attribute erscheinen prominent im Profil und helfen bei Filtersuchen. Restaurants: Speisekarte, Reservierung, Lieferoptionen nicht vergessen.",
  },
  {
    title: "FAQ-Bereich proaktiv befuellen",
    description: "Stelle und beantworte 10-15 haeufige Fragen im Q&A-Bereich deines Profils. Integriere lokale Keywords und verlinke auf relevante Website-Seiten in den Antworten.",
    duration: "45 Min.",
    icon: MessageSquare,
    warning: "Wenn du den Q&A-Bereich nicht selbst befuellst, koennen Konkurrenten oder unzufriedene Kunden falsche Informationen posten.",
  },
  {
    title: "Messaging & Booking einrichten",
    description: "Aktiviere Google Messaging fuer direkte Kundenanfragen. Richte Auto-Antworten ein und verbinde dein Buchungssystem (falls vorhanden) ueber den Reservierungen-Bereich.",
    duration: "30 Min.",
    icon: MessageSquare,
    tip: "Reagiere innerhalb von 24 Stunden auf Nachrichten - andernfalls deaktiviert Google die Funktion automatisch.",
  },
  {
    title: "UTM-Tracking fuer alle GBP-Links einrichten",
    description: "Fuege UTM-Parameter zu deiner Website-URL hinzu: ?utm_source=google&utm_medium=organic&utm_campaign=gbp. So trackst du GBP-Traffic separat in Google Analytics.",
    duration: "15 Min.",
    icon: Search,
  },
  {
    title: "Schema Markup mit GBP synchronisieren",
    description: "Stelle sicher, dass dein LocalBusiness-Schema auf der Website exakt mit den GBP-Daten uebereinstimmt: Name, Adresse, Telefon, Oeffnungszeiten, Koordinaten, Kategorien.",
    duration: "30 Min.",
    icon: FileText,
    warning: "Inkonsistenzen zwischen Schema und GBP-Daten koennen das Vertrauen von Google reduzieren und dein Ranking negativ beeinflussen.",
  },
];

const HubGoogleBusinessProfil = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Google Business Profil Hub - Alle Guides & Anleitungen",
    description: "Komplette Sammlung aller Google Business Profil Guides: Optimierung, Bewertungen, Insights, Fehlerbehebung und mehr.",
    url: "https://localdominate.org/blog/google-business-profil-hub",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: groups.reduce((s, g) => s + g.slugs.length, 0),
    },
  };

  return (
    <>
      <TopicHubLayout
        title="Google Business Profil Hub"
        metaTitle="Google Business Profil Hub - Alle Guides & Anleitungen 2026"
        metaDescription="Komplette Sammlung aller Google Business Profil Guides: Profil-Optimierung, Bewertungen, Insights, erweiterte Funktionen und Fehlerbehebung. 24+ Artikel."
        heroDescription="Dein zentrales Nachschlagewerk fuer alle Google Business Profil Themen. Von der Ersteinrichtung ueber Bewertungsmanagement bis zur Fehlerbehebung."
        heroIcon={<Building2 className="w-7 h-7 text-primary" />}
        groups={groups}
        summary={summary}
        comparisonTable={comparisonTable}
        resources={resources}
        pillarLink={{ label: "Lokale SEO 2026", href: "/blog/lokale-suchmaschinenoptimierung-2026" }}
        relatedHubs={[
          { label: "Branchen-Guides", href: "/blog/local-seo-branchen-hub" },
          { label: "Staedte-Guides", href: "/blog/local-seo-staedte-hub" },
          { label: "Technisches SEO", href: "/blog/technisches-local-seo-guide" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Step-by-Step GBP Optimization Frameworks */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Schritt-für-Schritt GBP-Optimierung
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drei praxiserprobte Frameworks für die Ersteinrichtung, monatliche Wartung und fortgeschrittene Optimierung deines Google Business Profils.
          </p>
        </div>

        <StepByStepProcess
          title="Framework 1: GBP Ersteinrichtung & Grundoptimierung"
          steps={gbpSetupSteps}
        />

        <StepByStepProcess
          title="Framework 2: Monatliche GBP-Wartung"
          steps={gbpMonthlyMaintenanceSteps}
        />

        <StepByStepProcess
          title="Framework 3: Fortgeschrittene GBP-Optimierung"
          steps={gbpAdvancedOptimizationSteps}
        />
      </section>
    </>
  );
};

export default HubGoogleBusinessProfil;
