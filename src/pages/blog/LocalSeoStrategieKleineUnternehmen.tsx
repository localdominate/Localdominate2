import ArticleLayout from "@/components/blog/ArticleLayout";
import { ProcessFlow, GradientBarChart } from "@/components/blog/PillarVisuals";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { CheckCircle, AlertTriangle, Target, Wrench } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const LocalSeoStrategieKleineUnternehmen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-strategie-kleine-unternehmen", language)!;

  const tocItems = [
    { id: "was-ist-local-seo-strategie", title: "Was ist eine Local-SEO-Strategie?", level: 2 },
    { id: "warum-kleine-unternehmen", title: "Warum brauchen kleine Unternehmen Local SEO?", level: 2 },
    { id: "grundlagen-checkliste", title: "Grundlagen-Checkliste: Die ersten 7 Tage", level: 2 },
    { id: "google-business-profil", title: "Schritt 1: Google Business Profil einrichten", level: 2 },
    { id: "website-optimierung", title: "Schritt 2: Website für lokale Suche optimieren", level: 2 },
    { id: "nap-citations", title: "Schritt 3: NAP & Citations aufbauen", level: 2 },
    { id: "bewertungen-strategie", title: "Schritt 4: Bewertungs-Strategie entwickeln", level: 2 },
    { id: "lokaler-content", title: "Schritt 5: Lokalen Content erstellen", level: 2 },
    { id: "local-linkbuilding", title: "Schritt 6: Lokales Linkbuilding", level: 2 },
    { id: "technisches-seo", title: "Schritt 7: Technisches SEO prüfen", level: 2 },
    { id: "branchenspezifisch", title: "Strategien nach Branche (DACH)", level: 2 },
    { id: "tools-budget", title: "Tools & Budget-Planung", level: 2 },
    { id: "90-tage-plan", title: "Der 90-Tage-Aktionsplan", level: 2 },
    { id: "fehler-vermeiden", title: "Die 10 häufigsten Fehler", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Eine systematische Local-SEO-Strategie kann den lokalen Traffic kleiner Unternehmen um 200–400 % steigern",
    "Google Business Profil, NAP-Konsistenz und Bewertungen sind die drei Grundpfeiler — kostenlos umsetzbar",
    "Im DACH-Raum gelten besondere Verzeichnisse und Datenschutzanforderungen (DSGVO)",
    "Mit dem 90-Tage-Aktionsplan erreichst du messbare Ergebnisse ohne Agentur",
    "Kleine Unternehmen haben einen natürlichen Vorteil: Lokale Authentizität schlägt große Budgets",
  ];

  const faqItems = [
    {
      question: "Wie viel kostet Local SEO für ein kleines Unternehmen?",
      answer: "Die Grundlagen (Google Business Profil, NAP-Konsistenz, erste Bewertungen) sind komplett kostenlos. Für professionelle Betreuung rechne mit 300–800 € monatlich. Viele Maßnahmen lassen sich mit unserem 90-Tage-Plan selbst umsetzen — ohne Budget."
    },
    {
      question: "Wie lange dauert es, bis Local SEO für kleine Unternehmen wirkt?",
      answer: "Erste Verbesserungen im Local Pack sind nach 4–8 Wochen sichtbar. Stabile Top-3-Positionen erfordern 3–6 Monate konsequente Arbeit. Bewertungen und Citations zeigen oft schon nach 2–3 Wochen Wirkung auf die Sichtbarkeit."
    },
    {
      question: "Kann ich Local SEO selbst machen oder brauche ich eine Agentur?",
      answer: "Kleine Unternehmen können die Grundlagen absolut selbst umsetzen. Google Business Profil, NAP-Pflege, Bewertungsmanagement und lokaler Content erfordern keine technischen Vorkenntnisse. Eine Agentur lohnt sich erst ab mehreren Standorten oder in stark umkämpften Branchen."
    },
    {
      question: "Was ist der wichtigste Local-SEO-Faktor für kleine Unternehmen?",
      answer: "Das vollständig optimierte Google Business Profil ist der wichtigste Einzelfaktor. Laut Google-Studien erhalten vollständige Profile 7× mehr Klicks als unvollständige. Kombiniert mit 20+ positiven Bewertungen und konsistenten NAP-Daten bildet es das Fundament."
    },
    {
      question: "Funktioniert Local SEO auch für Dienstleister ohne Ladengeschäft?",
      answer: "Ja! Google Business bietet die Option 'Einzugsgebiet' für mobile Dienstleister wie Handwerker, Berater oder Reinigungsservices. Du definierst dein Einzugsgebiet statt einer festen Adresse. Service-Area-Businesses (SABs) machen bereits 40 % aller lokalen Suchen aus."
    },
    {
      question: "Welche Verzeichnisse sind für kleine Unternehmen im DACH-Raum wichtig?",
      answer: "Die Top-5 Pflicht-Verzeichnisse sind: Google Business Profil, Yelp, Gelbe Seiten (meinestadt.de), 11880.com und Das Örtliche. Für Österreich: Herold.at, für die Schweiz: local.ch und search.ch. Branchenspezifische Portale wie Jameda (Ärzte) oder TripAdvisor (Gastro) ergänzen."
    },
    {
      question: "Wie messe ich den Erfolg meiner Local-SEO-Strategie?",
      answer: "Die wichtigsten KPIs sind: Google Business Profil Impressionen und Aktionen (Anrufe, Routenanfragen), Local Pack Rankings für 5–10 Kern-Keywords, organischer Traffic aus der Zielregion und Anzahl + Durchschnitt der Google-Bewertungen. Google Business Insights liefert diese Daten kostenlos."
    },
    {
      question: "Wie konkurriere ich als kleines Unternehmen gegen große Ketten?",
      answer: "Kleine Unternehmen haben Vorteile bei Local SEO: persönliche Google-Bewertungen, lokale Relevanz und Nischenkompetenz. Fokussiere auf Long-Tail-Keywords mit Stadtteil-Bezug (z. B. 'Bio-Bäckerei Altstadt'), sammle authentische Bewertungen und erstelle hyper-lokalen Content. Ketten können das nicht für jeden Standort leisten."
    },
  ];

  const sources = [
    { title: "Google: How to improve your local ranking", url: "https://support.google.com/business/answer/7091", type: "documentation" as const },
    { title: "BrightLocal: Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study" as const },
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Google: Strukturierte Daten für lokale Unternehmen", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business", type: "documentation" as const },
    { title: "Moz: The State of Local SEO Industry Report", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
    { title: "BrightLocal: Small Business Local SEO Statistics", url: "https://www.brightlocal.com/learn/local-seo-statistics/", type: "study" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Was ist eine Local-SEO-Strategie? */}
      <section id="was-ist-local-seo-strategie" data-ai-summary="true">
        <h2>Was ist eine Local-SEO-Strategie?</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Eine Local-SEO-Strategie</strong> ist ein systematischer Aktionsplan, mit dem kleine und mittelständische Unternehmen ihre Sichtbarkeit in standortbezogenen Suchergebnissen maximieren. Sie umfasst die Optimierung des Google Business Profils, den Aufbau konsistenter Verzeichniseinträge (Citations), aktives Bewertungsmanagement und die Erstellung lokaler Inhalte — abgestimmt auf die Besonderheiten des DACH-Marktes.
        </p>
        <p>
          Im Gegensatz zu allgemeinen SEO-Maßnahmen fokussiert sich eine Local-SEO-Strategie auf drei konkrete Ziele:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Local Pack (Top 3):</strong> Sichtbarkeit in den Google-Maps-Ergebnissen bei Suchen wie „Friseur in meiner Nähe"</li>
          <li><strong>Lokale organische Rankings:</strong> Top-10-Positionen für ortsbezogene Keywords</li>
          <li><strong>Conversion-Optimierung:</strong> Mehr Anrufe, Routenanfragen und Websitebesuche aus der Zielregion</li>
        </ul>
        <p>
          Für eine umfassende Einführung in alle Aspekte von Local SEO empfehlen wir unseren <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Ultimate Guide Local SEO</Link>, der die theoretischen Grundlagen vertieft. Wenn du wissen willst, wie sich Local SEO von klassischem SEO unterscheidet, lies unseren <Link to="/blog/local-seo-vs-organisch" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Vergleich: Local SEO vs. Organic SEO</Link>.
        </p>
      </section>

      {/* Warum brauchen kleine Unternehmen Local SEO? */}
      <section id="warum-kleine-unternehmen" data-ai-summary="true">
        <h2>Warum brauchen kleine Unternehmen Local SEO?</h2>
        <p>
          Kleine Unternehmen haben gegenüber großen Ketten einen entscheidenden Vorteil: <strong>lokale Authentizität</strong>. Google belohnt echte lokale Relevanz — und genau das können kleine Betriebe besser liefern als Filialisten.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Statistik</TableHead>
              <TableHead className="font-bold">Wert</TableHead>
              <TableHead className="font-bold">Bedeutung für KMU</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Lokale Suchen mit Kaufabsicht</TableCell>
              <TableCell className="font-semibold text-primary">78 %</TableCell>
              <TableCell>Fast 4 von 5 lokalen Suchen führen zu einer Aktion</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>„In meiner Nähe"-Suchen (Wachstum/5 Jahre)</TableCell>
              <TableCell className="font-semibold text-primary">+500 %</TableCell>
              <TableCell>Explosives Wachstum mobiler lokaler Suchen</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nutzer, die lokale Ergebnisse bevorzugen</TableCell>
              <TableCell className="font-semibold text-primary">46 %</TableCell>
              <TableCell>Fast die Hälfte aller Google-Suchen hat lokalen Intent</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kunden, die nach lokaler Suche innerhalb 24h kaufen</TableCell>
              <TableCell className="font-semibold text-primary">76 %</TableCell>
              <TableCell>Höchste Conversion-Rate aller Marketing-Kanäle</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>KMU ohne optimiertes Google Business Profil</TableCell>
              <TableCell className="font-semibold text-primary">56 %</TableCell>
              <TableCell>Über die Hälfte verschenkt lokale Sichtbarkeit</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <Target className="h-5 w-5 text-primary" />
            Kernaussage für kleine Unternehmen
          </p>
          <p className="text-muted-foreground">
            Du brauchst kein großes Budget, um bei Google lokal sichtbar zu werden. Was du brauchst, ist eine <strong>systematische Strategie</strong> — und die bekommst du auf dieser Seite, Schritt für Schritt.
          </p>
        </div>
      </section>

      <ProcessFlow
        title="Local SEO Strategie: Die 7 Schritte im Überblick"
        steps={[
          { number: 1, title: "Google Business Profil einrichten", description: "Profil erstellen, verifizieren und vollständig ausfüllen — der wichtigste Einzelschritt.", timeframe: "Tag 1–2" },
          { number: 2, title: "Website lokal optimieren", description: "Lokale Keywords in Title, H1, Meta Description. Standortseite mit NAP-Daten erstellen.", timeframe: "Tag 3–5" },
          { number: 3, title: "NAP & Citations aufbauen", description: "Name, Adresse, Telefon konsistent in 20+ Verzeichnissen eintragen.", timeframe: "Tag 5–7" },
          { number: 4, title: "Bewertungs-Strategie entwickeln", description: "Systematisch Bewertungen einholen. QR-Code, E-Mail-Vorlage, persönliche Bitte.", timeframe: "Woche 2–4" },
          { number: 5, title: "Lokalen Content erstellen", description: "Blog-Artikel, FAQ-Seiten und Ratgeber mit lokalem Bezug veröffentlichen.", timeframe: "Woche 3–8" },
          { number: 6, title: "Lokales Linkbuilding", description: "IHK, Vereine, Sponsoring, lokale PR. 5–10 hochwertige lokale Backlinks aufbauen.", timeframe: "Monat 2–3" },
          { number: 7, title: "Technisches SEO prüfen", description: "Mobile-First, Core Web Vitals, Schema Markup, Sitemap. Technische Basis sichern.", timeframe: "Laufend" },
        ]}
      />

      <GradientBarChart
        title="ROI-Vergleich: Local SEO vs. andere Marketing-Kanäle für KMU"
        items={[
          { label: "Local SEO (organisch)", value: 92 },
          { label: "Google Ads (lokal)", value: 68 },
          { label: "Social Media Marketing", value: 45 },
          { label: "Print-Werbung lokal", value: 22 },
          { label: "Flyerverteilung", value: 12 },
        ]}
        unit="% ROI-Index"
      />

      {/* Grundlagen-Checkliste */}
      <section id="grundlagen-checkliste">
        <h2>Grundlagen-Checkliste: Die ersten 7 Tage</h2>
        <p>
          Bevor du in die Tiefe gehst, hier die absoluten Basics. Diese Punkte solltest du in der ersten Woche abarbeiten:
        </p>
        <div className="bg-card border border-border rounded-xl p-6 my-6 space-y-3">
          {[
            "Google Business Profil erstellt und verifiziert",
            "NAP-Daten (Name, Adresse, Telefon) überall identisch",
            "Website mit lokalen Keywords im Title und H1",
            "Impressum und Datenschutz DSGVO-konform",
            "Erste 5 Bewertungen aktiv eingeholt",
            "In 3 wichtigsten Branchenverzeichnissen eingetragen",
            "Google Search Console eingerichtet und Sitemap eingereicht",
          ].map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </label>
          ))}
        </div>
        <p>
          Eine detaillierte Checkliste mit 50+ Punkten findest du in unserer <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Audit Checkliste</Link>.
        </p>
      </section>

      {/* Schritt 1: Google Business Profil */}
      <section id="google-business-profil">
        <h2>Schritt 1: Google Business Profil einrichten & optimieren</h2>
        <p data-featured-snippet="true">
          Das Google Business Profil (GBP) ist der wichtigste Einzelfaktor für lokale Rankings. Laut Google erhalten vollständig ausgefüllte Profile <strong>7× mehr Klicks</strong> und <strong>70 % mehr Besuche</strong> als unvollständige Profile.
        </p>

        <h3>GBP-Optimierung in 10 Minuten</h3>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Geschäftsname:</strong> Exakt wie auf deinem Schild — kein Keyword-Stuffing</li>
          <li><strong>Primärkategorie:</strong> Die spezifischste verfügbare wählen (z. B. „Italienisches Restaurant" statt „Restaurant"). Mehr dazu im <Link to="/blog/google-business-kategorien-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Kategorien-Guide</Link></li>
          <li><strong>Adresse/Einzugsgebiet:</strong> Bei Ladengeschäft die Adresse, bei Dienstleistern das Einzugsgebiet definieren</li>
          <li><strong>Telefon:</strong> Lokale Festnetznummer bevorzugen (nicht 0800)</li>
          <li><strong>Öffnungszeiten:</strong> Inklusive Feiertage und Sonderzeiten — siehe <Link to="/blog/gbp-oeffnungszeiten-sondertage" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Öffnungszeiten-Guide</Link></li>
          <li><strong>Beschreibung:</strong> 750 Zeichen mit den wichtigsten lokalen Keywords</li>
          <li><strong>Fotos:</strong> Mindestens 10 hochwertige Bilder (Außen, Innen, Team, Produkte) — <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Foto-Optimierung Guide</Link></li>
          <li><strong>Produkte/Services:</strong> Alle Angebote mit Beschreibung und Preis listen — <Link to="/blog/google-business-produkte-services" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Produkte & Services Guide</Link></li>
          <li><strong>Attribute:</strong> Alle relevanten Attribute aktivieren (barrierefrei, WLAN, etc.) — <Link to="/blog/gbp-attribute-richtig-nutzen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Attribute-Guide</Link></li>
          <li><strong>Google Posts:</strong> Wöchentlich Neuigkeiten, Angebote oder Events posten — <Link to="/blog/google-posts-ranking-faktor" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Posts Guide</Link></li>
        </ol>

        <p>
          Den vollständigen Optimierungsprozess beschreiben wir in unserem <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil Optimierungs-Guide</Link>.
        </p>
      </section>

      {/* Schritt 2: Website-Optimierung */}
      <section id="website-optimierung">
        <h2>Schritt 2: Website für lokale Suche optimieren</h2>
        <p>
          Deine Website ist das Fundament, das Google Vertrauen und Relevanz signalisiert. Für kleine Unternehmen zählen drei Bereiche:
        </p>

        <h3>On-Page Local SEO Essentials</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Element</TableHead>
              <TableHead className="font-bold">Optimierung</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Title Tag</TableCell>
              <TableCell>Keyword + Stadt + USP</TableCell>
              <TableCell className="text-muted-foreground text-sm">„Zahnarzt München | Schmerzfreie Behandlung | Dr. Müller"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">H1</TableCell>
              <TableCell>Hauptkeyword + lokaler Bezug</TableCell>
              <TableCell className="text-muted-foreground text-sm">„Ihr Zahnarzt in München-Schwabing"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Meta Description</TableCell>
              <TableCell>CTA + Leistung + Stadt (max. 155 Zeichen)</TableCell>
              <TableCell className="text-muted-foreground text-sm">„Termin beim Zahnarzt München ✓ Angstpatienten ✓ Samstags geöffnet ✓ Jetzt anrufen"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">NAP im Footer</TableCell>
              <TableCell>Name, Adresse, Telefon auf jeder Seite</TableCell>
              <TableCell className="text-muted-foreground text-sm">Schema-Markup mit LocalBusiness</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lokale Landingpages</TableCell>
              <TableCell>1 Seite pro Service + Stadt</TableCell>
              <TableCell className="text-muted-foreground text-sm">„/zahnreinigung-muenchen", „/implantate-muenchen"</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3>Schema Markup implementieren</h3>
        <p>
          Strukturierte Daten helfen Google, dein Unternehmen eindeutig zu verstehen. Für kleine Unternehmen ist das <code>LocalBusiness</code>-Schema Pflicht:
        </p>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bäckerei Schmidt",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstraße 12",
    "addressLocality": "München",
    "postalCode": "80331",
    "addressCountry": "DE"
  },
  "telephone": "+49-89-12345678",
  "openingHoursSpecification": [...],
  "geo": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.582 },
  "priceRange": "€€"
}`}
        </pre>
        <p>
          Die vollständige Implementierung mit Copy-Paste-Templates findest du im <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">LocalBusiness Schema Guide</Link>.
        </p>
      </section>

      {/* Schritt 3: NAP & Citations */}
      <section id="nap-citations">
        <h2>Schritt 3: NAP-Konsistenz & Citations aufbauen</h2>
        <p data-featured-snippet="true">
          <strong>NAP-Konsistenz</strong> bedeutet, dass Name, Adresse und Telefonnummer deines Unternehmens in allen Online-Verzeichnissen exakt identisch sind. Inkonsistente NAP-Daten sind einer der häufigsten Gründe, warum kleine Unternehmen bei lokalen Suchen nicht ranken.
        </p>

        <h3>Die wichtigsten DACH-Verzeichnisse für KMU</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Verzeichnis</TableHead>
              <TableHead className="font-bold">Land</TableHead>
              <TableHead className="font-bold">Priorität</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Google Business Profil", "DACH", "Pflicht"],
              ["Yelp", "DACH", "Pflicht"],
              ["Gelbe Seiten / meinestadt.de", "DE", "Pflicht"],
              ["Das Örtliche / 11880", "DE", "Hoch"],
              ["Herold.at", "AT", "Pflicht"],
              ["local.ch / search.ch", "CH", "Pflicht"],
              ["Bing Places", "DACH", "Hoch"],
              ["Apple Maps Connect", "DACH", "Hoch"],
              ["Facebook Business", "DACH", "Hoch"],
              ["Branchenspezifische Portale", "DACH", "Mittel"],
            ].map(([name, land, prio], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell>{land}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    prio === "Pflicht" ? "bg-primary/10 text-primary" : 
                    prio === "Hoch" ? "bg-accent/50 text-accent-foreground" : 
                    "bg-muted text-muted-foreground"
                  }`}>
                    {prio}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Detaillierte Listen aller relevanten Verzeichnisse findest du in unserem <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz Guide</Link> und der <Link to="/citation-verzeichnisse" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Citation-Verzeichnisliste für DACH</Link>.
        </p>
      </section>

      {/* Schritt 4: Bewertungen */}
      <section id="bewertungen-strategie">
        <h2>Schritt 4: Bewertungs-Strategie entwickeln</h2>
        <p>
          Bewertungen gehören laut Whitespark zu den <strong>Top-3-Ranking-Faktoren</strong> im Local Pack. Für kleine Unternehmen sind sie zudem der stärkste Trust-Signal gegenüber Neukunden.
        </p>

        <h3>Der 5-Punkte-Bewertungsplan für KMU</h3>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>
            <strong>Aktiv fragen:</strong> Nach jeder positiven Interaktion um eine Google-Bewertung bitten — per QR-Code, E-Mail oder SMS. Details im <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Bewertungs-Guide</Link>
          </li>
          <li>
            <strong>Auf jede Bewertung antworten:</strong> Positive und negative — immer innerhalb von 24–48 Stunden. Vorlagen findest du in unseren <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Antwort-Vorlagen</Link>
          </li>
          <li>
            <strong>Negative Bewertungen managen:</strong> Professionell reagieren, nicht ignorieren. Unser <Link to="/blog/negative-google-bewertungen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Guide für negative Bewertungen</Link> zeigt wie
          </li>
          <li>
            <strong>Review-Schema implementieren:</strong> Aggregate Ratings in den Suchergebnissen anzeigen — <Link to="/blog/review-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Review Schema Guide</Link>
          </li>
          <li>
            <strong>Bewertungsportale diversifizieren:</strong> Nicht nur Google — auch Yelp, Branchenportale und Facebook
          </li>
        </ol>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">🎯 Ziel für kleine Unternehmen</p>
          <p className="text-muted-foreground">
            <strong>20+ Google-Bewertungen</strong> mit einem Durchschnitt von <strong>4,5+ Sternen</strong> innerhalb der ersten 3 Monate. Unternehmen mit diesem Profil erhalten 270 % mehr Klicks als solche mit weniger als 5 Bewertungen.
          </p>
        </div>
      </section>

      {/* Schritt 5: Lokaler Content */}
      <section id="lokaler-content">
        <h2>Schritt 5: Lokalen Content erstellen</h2>
        <p>
          Content mit lokalem Bezug signalisiert Google Relevanz und Expertise. Für kleine Unternehmen gilt: <strong>Qualität vor Quantität</strong>.
        </p>

        <h3>Content-Typen, die lokal ranken</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Content-Typ</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
              <TableHead className="font-bold">SEO-Effekt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Service-Seiten pro Stadtteil</TableCell>
              <TableCell>„Rohrreinigung München-Haidhausen"</TableCell>
              <TableCell>Longtail-Keywords + lokale Relevanz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lokale Ratgeber</TableCell>
              <TableCell>„Die 5 häufigsten Heizungsprobleme in Altbauten in Wien"</TableCell>
              <TableCell>E-E-A-T + Featured Snippets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fallstudien</TableCell>
              <TableCell>„Wie wir einer Bäckerei in Zürich 200 % mehr Laufkundschaft brachten"</TableCell>
              <TableCell>Trust + Conversion</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lokale Event-Berichte</TableCell>
              <TableCell>„Unser Stand auf dem Weihnachtsmarkt Köln 2025"</TableCell>
              <TableCell>Community-Signale + Backlinks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">FAQ-Seiten</TableCell>
              <TableCell>„Häufige Fragen zur Zahnreinigung in Basel"</TableCell>
              <TableCell>Voice Search + Rich Snippets</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Mehr Content-Ideen und Strategien in unserem <Link to="/blog/local-content-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Content Marketing Guide</Link> und dem <Link to="/blog/lokale-events-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">lokale Events Marketing Guide</Link>.
        </p>
      </section>

      {/* Schritt 6: Linkbuilding */}
      <section id="local-linkbuilding">
        <h2>Schritt 6: Lokales Linkbuilding</h2>
        <p>
          Lokale Backlinks von regionalen Websites sind ein starkes Ranking-Signal. Für kleine Unternehmen sind diese Quellen besonders effektiv:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Lokale Zeitungen & Blogs:</strong> Pressemitteilungen, Gastbeiträge, Interviews</li>
          <li><strong>IHK & Handwerkskammer:</strong> Mitgliederverzeichnisse mit Backlink</li>
          <li><strong>Sponsoring:</strong> Lokale Vereine, Schulen, Events</li>
          <li><strong>Kooperationen:</strong> Gegenseitige Verlinkung mit komplementären lokalen Unternehmen</li>
          <li><strong>Lokale Auszeichnungen:</strong> „Bester Handwerker in [Stadt]"-Wettbewerbe</li>
        </ul>

        <p>
          Eine vollständige Linkbuilding-Strategie mit Templates findest du im <Link to="/blog/local-link-building" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Linkbuilding Guide</Link>.
        </p>
      </section>

      {/* Schritt 7: Technisches SEO */}
      <section id="technisches-seo">
        <h2>Schritt 7: Technisches SEO prüfen</h2>
        <p>
          Technische Probleme können alle Content- und Optimierungsarbeit zunichtemachen. Für kleine Unternehmen sind diese Punkte kritisch:
        </p>

        <div className="bg-card border border-border rounded-xl p-6 my-6 space-y-3">
          {[
            { text: "Mobile-Friendly: 60 %+ aller lokalen Suchen kommen vom Smartphone", critical: true },
            { text: "Ladezeit unter 3 Sekunden (Core Web Vitals bestehen)", critical: true },
            { text: "HTTPS aktiv auf allen Seiten", critical: true },
            { text: "XML-Sitemap eingereicht in Search Console", critical: false },
            { text: "Lokales Schema Markup auf allen Seiten", critical: false },
            { text: "Canonical Tags bei duplizierten Inhalten", critical: false },
            { text: "404-Fehler und Broken Links behoben", critical: false },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {item.critical ? (
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              ) : (
                <Wrench className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              <span className="text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <p>
          Den kompletten technischen Check beschreiben wir im <Link to="/blog/technisches-local-seo-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Technisches Local SEO Guide</Link> und im <Link to="/blog/core-web-vitals-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Core Web Vitals Guide</Link>.
        </p>
      </section>

      {/* Branchenspezifisch */}
      <section id="branchenspezifisch">
        <h2>Strategien nach Branche (DACH)</h2>
        <p>
          Jede Branche hat spezifische Local-SEO-Anforderungen. Hier die wichtigsten Unterschiede:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Branche</TableHead>
              <TableHead className="font-bold">Top-Priorität</TableHead>
              <TableHead className="font-bold">Spezial-Guide</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Gastro & Restaurant", "Google-Fotos, Öffnungszeiten, Speisekarte", "/blog/local-seo-fuer-restaurants", "Restaurant-Guide"],
              ["Handwerker", "Einzugsgebiet, Notdienst-Keywords, Bewertungen", "/blog/local-seo-handwerker", "Handwerker-Guide"],
              ["Ärzte & Praxen", "Jameda, Bewertungen, YMYL-Content", "/blog/local-seo-aerzte-praxen", "Ärzte-Guide"],
              ["Anwälte", "E-E-A-T, Fachgebiets-Seiten, YMYL", "/blog/local-seo-anwaelte-kanzleien", "Anwälte-Guide"],
              ["Friseur & Beauty", "Fotos, Instagram-Integration, Booking", "/blog/local-seo-friseursalon-beauty", "Friseur-Guide"],
              ["Fitness & Yoga", "Google-Posts, Events, Kurspläne", "/blog/local-seo-fitness", "Fitness-Guide"],
              ["Hotels & Ferienwohnungen", "Buchungslinks, Saisonale Keywords", "/blog/local-seo-hotels", "Hotel-Guide"],
              ["Steuerberater", "E-E-A-T, Fachbeiträge, Datenschutz", "/blog/local-seo-steuerberater", "Steuerberater-Guide"],
            ].map(([branche, prio, link, label], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{branche}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{prio}</TableCell>
                <TableCell>
                  <Link to={link} className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium text-sm">
                    {label}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Alle Branchen-Guides findest du gesammelt im <Link to="/blog/local-seo-branchen-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Branchen-Hub</Link>.
        </p>
      </section>

      {/* Tools & Budget */}
      <section id="tools-budget">
        <h2>Tools & Budget-Planung für kleine Unternehmen</h2>
        <p>
          Local SEO muss nicht teuer sein. Hier die besten Tools, aufgeteilt nach Budget:
        </p>

        <h3>Kostenlose Tools (0 €)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Google Business Profil:</strong> Kern aller Local-SEO-Aktivitäten</li>
          <li><strong>Google Search Console:</strong> Keyword-Monitoring und technische Fehler</li>
          <li><strong>Google PageSpeed Insights:</strong> Core Web Vitals prüfen</li>
          <li><strong>Ubersuggest (Freemium):</strong> Keyword-Recherche mit 3 Suchen/Tag</li>
          <li><strong>Schema Markup Generator:</strong> JSON-LD ohne Programmierkenntnisse erstellen</li>
        </ul>

        <h3>Budget-Tools (20–100 €/Monat)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>BrightLocal:</strong> Local-SEO-Monitoring, Citation-Audit, Ranking-Tracker</li>
          <li><strong>Whitespark:</strong> Citation Building und Local Rank Tracking</li>
          <li><strong>Semrush/Ahrefs (Basis):</strong> Keyword-Recherche und Backlink-Analyse</li>
        </ul>

        <p>
          Unsere vollständige Tool-Übersicht mit Bewertungen findest du in der <Link to="/blog/seo-toolbox-kostenlose-ressourcen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">SEO Toolbox</Link> und dem <Link to="/blog/ki-tools-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">KI-Tools für Local SEO Guide</Link>.
        </p>
      </section>

      {/* 90-Tage-Plan */}
      <section id="90-tage-plan">
        <h2>Der 90-Tage-Aktionsplan</h2>
        <p>
          Dieser Plan ist für kleine Unternehmen konzipiert, die Local SEO <strong>ohne Agentur</strong> umsetzen möchten. Investiere 2–3 Stunden pro Woche:
        </p>

        <h3>Woche 1–2: Fundament legen</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Google Business Profil erstellen, verifizieren, vollständig ausfüllen</li>
          <li>NAP-Daten standardisieren (ein Format für überall)</li>
          <li>Website-Title und Meta Descriptions mit lokalen Keywords optimieren</li>
          <li>LocalBusiness Schema Markup implementieren</li>
          <li>Google Search Console einrichten</li>
        </ul>

        <h3>Woche 3–4: Citations & Bewertungen</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>In die 10 wichtigsten DACH-Verzeichnisse eintragen</li>
          <li>Erste 10 Kunden aktiv um Google-Bewertung bitten</li>
          <li>Auf alle bestehenden Bewertungen antworten</li>
          <li>Bewertungs-Link erstellen und in E-Mail-Signatur integrieren</li>
        </ul>

        <h3>Woche 5–8: Content & Optimierung</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>2–3 lokale Service-Seiten erstellen (Service + Stadt/Stadtteil)</li>
          <li>1 lokalen Blog-Artikel pro Woche veröffentlichen</li>
          <li>Wöchentlich Google Posts erstellen</li>
          <li>Fotos im GBP aktualisieren (min. 2 neue pro Woche)</li>
        </ul>

        <h3>Woche 9–12: Skalieren & Messen</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Lokale Backlinks aufbauen (IHK, Presse, Kooperationen)</li>
          <li>GBP Insights analysieren und Strategie anpassen</li>
          <li>Ranking-Monitoring für 10 Kern-Keywords einrichten</li>
          <li>Conversion-Tracking (Anrufe, Routenanfragen) auswerten</li>
        </ul>

        <p>
          Für die Erfolgsmessung nutze unser <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Reporting Template</Link> und den <Link to="/blog/google-business-insights-verstehen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Insights Guide</Link>.
        </p>
      </section>

      {/* 10 häufigste Fehler */}
      <section id="fehler-vermeiden">
        <h2>Die 10 häufigsten Local-SEO-Fehler kleiner Unternehmen</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Unvollständiges Google Business Profil</strong> — 56 % aller KMU verschenken hier Potenzial</li>
          <li><strong>Inkonsistente NAP-Daten</strong> — Jede Abweichung kostet Rankings</li>
          <li><strong>Keine Bewertungs-Strategie</strong> — Auf Bewertungen warten statt aktiv einzuholen</li>
          <li><strong>Keyword-Stuffing im Firmennamen</strong> — Verstößt gegen Google-Richtlinien und führt zur Sperrung</li>
          <li><strong>Keine lokalen Landingpages</strong> — „Wir bedienen ganz Deutschland" rankt nirgends lokal</li>
          <li><strong>Fehlende Mobile-Optimierung</strong> — 60 %+ der lokalen Suchen sind mobil</li>
          <li><strong>Kein Schema Markup</strong> — Verschenkte Rich-Snippet-Chancen</li>
          <li><strong>Bewertungen nicht beantworten</strong> — Signalisiert Desinteresse an Kunden</li>
          <li><strong>Duplikate in Verzeichnissen</strong> — Verwirrende Signale an Google. Lösung im <Link to="/blog/duplicate-listing-entfernen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Duplicate-Listing Guide</Link></li>
          <li><strong>Einmalige Optimierung statt Kontinuität</strong> — Local SEO ist ein Marathon, kein Sprint</li>
        </ol>

        <p>
          Alle Fehler im Detail mit Lösungsstrategien in unserem <Link to="/blog/local-seo-fehler" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Fehler Guide</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      {/* FAQ */}
      <section id="faq">
        <h2>Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoStrategieKleineUnternehmen;
