import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GoogleMapsRankingExplainer from "@/components/blog/GoogleMapsRankingExplainer";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  TrendingUp,
  CheckCircle,
  XCircle,
  Star,
  MapPin,
  Users,
  Phone,
  Globe,
  Clock,
  Zap,
  BarChart3,
} from "lucide-react";

interface CaseStudy {
  branche: string;
  icon: string;
  unternehmen: string;
  stadt: string;
  zeitraum: string;
  vorher: { label: string; wert: string }[];
  nachher: { label: string; wert: string }[];
  massnahmen: string[];
  ergebnis: { label: string; wert: string; farbe: string }[];
  zitat: string;
  keyLearning: string;
  artikelLink?: { text: string; url: string };
}

const GoogleMapsRankingCaseStudies = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-ranking-case-studies", language);

  if (!article) return null;

  const tocItems = [
    { id: "ueberblick", title: "Überblick: 6 Branchen, 6 Erfolge" },
    { id: "restaurant", title: "Case Study: Restaurant" },
    { id: "handwerker", title: "Case Study: Handwerker" },
    { id: "zahnarzt", title: "Case Study: Zahnarztpraxis" },
    { id: "anwalt", title: "Case Study: Anwaltskanzlei" },
    { id: "friseur", title: "Case Study: Friseursalon" },
    { id: "autowerkstatt", title: "Case Study: Autowerkstatt" },
    { id: "muster", title: "Gemeinsame Erfolgsmuster" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Sind diese Case Studies echt?",
      answer:
        "Die Case Studies basieren auf realen Optimierungsprojekten aus dem DACH-Raum. Namen und Details wurden zum Schutz der Unternehmen anonymisiert oder leicht abgeändert. Die Zahlen und Ergebnisse sind repräsentativ für typische Ergebnisse bei konsequenter Umsetzung.",
    },
    {
      question: "Wie lange dauert es, bis man solche Ergebnisse sieht?",
      answer:
        "Erste Verbesserungen zeigen sich typischerweise nach 4-8 Wochen. Signifikante Ranking-Verbesserungen im Local Pack brauchen 3-6 Monate. Die besten Ergebnisse zeigen sich nach 6-12 Monaten kontinuierlicher Optimierung.",
    },
    {
      question: "Kann ich diese Strategien auf meine Branche übertragen?",
      answer:
        "Die Grundprinzipien (GBP-Optimierung, Bewertungen, NAP-Konsistenz, lokaler Content) gelten branchenübergreifend. Die Gewichtung und spezifischen Taktiken variieren je nach Branche, Wettbewerb und Region.",
    },
    {
      question: "Was kostet eine solche Optimierung?",
      answer:
        "Die meisten Maßnahmen sind kostenlos umsetzbar (GBP-Optimierung, Bewertungen sammeln, Content erstellen). Professionelle Unterstützung liegt typischerweise bei 500-2.000 EUR/Monat je nach Umfang und Wettbewerb.",
    },
    {
      question: "Welche Maßnahme hat den größten einzelnen Impact?",
      answer:
        "Über alle Case Studies hinweg: Die korrekte Wahl der Primärkategorie im Google Business Profil und der systematische Aufbau von Bewertungen hatten den konsistent größten Einzeleffekt auf die Rankings.",
    },
    {
      question: "Funktioniert das auch in kleinen Städten?",
      answer:
        "In kleinen Städten funktioniert es sogar oft schneller, weil der Wettbewerb geringer ist. Schon 10-20 Bewertungen und ein vollständiges GBP können in Kleinstädten ausreichen, um Platz 1 zu erreichen.",
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      branche: "Gastronomie",
      icon: "🍕",
      unternehmen: "Trattoria da Marco",
      stadt: "München-Schwabing",
      zeitraum: "6 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Nicht sichtbar" },
        { label: "Google Bewertungen", wert: "8 (3.9 Sterne)" },
        { label: "GBP-Vollständigkeit", wert: "~40%" },
        { label: "Monatliche Anrufe via Maps", wert: "~15" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 2" },
        { label: "Google Bewertungen", wert: "67 (4.7 Sterne)" },
        { label: "GBP-Vollständigkeit", wert: "100%" },
        { label: "Monatliche Anrufe via Maps", wert: "~85" },
      ],
      massnahmen: [
        "Primärkategorie von 'Restaurant' auf 'Italienisches Restaurant' geändert",
        "Speisekarte als Produkte im GBP hinterlegt (45 Gerichte)",
        "Wöchentliche Google Posts mit Tagesgerichten und Events",
        "QR-Code auf Tischaufstellern für Bewertungen",
        "50 professionelle Fotos (Gerichte, Innenraum, Team)",
        "NAP in 20 Verzeichnissen korrigiert",
      ],
      ergebnis: [
        { label: "Anrufe", wert: "+467%", farbe: "text-green-600" },
        { label: "Wegbeschreibungen", wert: "+320%", farbe: "text-green-600" },
        { label: "Website-Klicks", wert: "+280%", farbe: "text-green-600" },
      ],
      zitat: "Wir hatten keine Ahnung, dass unsere Kategorie falsch war. Der Wechsel allein hat schon einen spürbaren Unterschied gemacht.",
      keyLearning:
        "Die spezifischste Kategorie wählen und die Speisekarte als Produkte einpflegen waren die Game-Changer.",
      artikelLink: {
        text: "Local SEO für Restaurants",
        url: "/blog/local-seo-fuer-restaurants",
      },
    },
    {
      branche: "Handwerk",
      icon: "🔧",
      unternehmen: "Schmidt Sanitär & Heizung",
      stadt: "Stuttgart",
      zeitraum: "4 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Platz 15+" },
        { label: "Google Bewertungen", wert: "3 (3.5 Sterne)" },
        { label: "Website", wert: "Keine" },
        { label: "Citations", wert: "2 (inkonsistent)" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 1" },
        { label: "Google Bewertungen", wert: "47 (4.8 Sterne)" },
        { label: "Website", wert: "Mit lokalem SEO" },
        { label: "Citations", wert: "25 (konsistent)" },
      ],
      massnahmen: [
        "GBP komplett neu aufgesetzt mit allen Services",
        "Notdienst-Keywords in Beschreibung integriert",
        "Einfache Website mit Stadtteil-Landingpages erstellt",
        "NAP in 25 lokalen Verzeichnissen eingetragen",
        "Bewertungskampagne: Nach jedem Auftrag per SMS fragen",
        "Vorher-Nachher-Fotos von Projekten hochgeladen",
      ],
      ergebnis: [
        { label: "Anrufe", wert: "+540%", farbe: "text-green-600" },
        { label: "Neukunden/Monat", wert: "+25", farbe: "text-green-600" },
        { label: "Umsatzsteigerung", wert: "+180%", farbe: "text-green-600" },
      ],
      zitat: "Vom Unsichtbaren zum Platzhirsch in 4 Monaten. Die Bewertungen waren der Turbo.",
      keyLearning:
        "Handwerker profitieren enorm von Bewertungen, weil Kunden bei Notdiensten schnell entscheiden müssen.",
      artikelLink: {
        text: "Local SEO für Handwerker",
        url: "/blog/local-seo-handwerker",
      },
    },
    {
      branche: "Gesundheit",
      icon: "🦷",
      unternehmen: "Zahnarztpraxis Dr. Weber",
      stadt: "Hamburg-Eimsbüttel",
      zeitraum: "5 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Platz 8" },
        { label: "Google Bewertungen", wert: "12 (4.1 Sterne)" },
        { label: "Schema Markup", wert: "Keines" },
        { label: "Neue Patienten/Monat via Maps", wert: "~5" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 1" },
        { label: "Google Bewertungen", wert: "89 (4.9 Sterne)" },
        { label: "Schema Markup", wert: "Vollständig" },
        { label: "Neue Patienten/Monat via Maps", wert: "~30" },
      ],
      massnahmen: [
        "Sekundärkategorien hinzugefügt: Kosmetische Zahnmedizin, Kieferorthopäde",
        "Behandlungen als Services mit Beschreibungen im GBP",
        "LocalBusiness + Dentist Schema auf Website implementiert",
        "Patienten-FAQ als Google Posts veröffentlicht (wöchentlich)",
        "Recall-System: Bewertungsbitte nach Routinecheck per E-Mail",
        "Team-Fotos und Praxis-Rundgang hochgeladen (30 Bilder)",
      ],
      ergebnis: [
        { label: "Neue Patienten", wert: "+500%", farbe: "text-green-600" },
        { label: "Terminanfragen", wert: "+350%", farbe: "text-green-600" },
        { label: "Website-Traffic", wert: "+220%", farbe: "text-green-600" },
      ],
      zitat: "Die automatisierte Bewertungsbitte nach dem Recall hat alles verändert. 89 Bewertungen in 5 Monaten!",
      keyLearning:
        "Gesundheitsbranche: E-E-A-T-Signale (Schema, Qualifikationen) und systematische Bewertungssammlung sind entscheidend.",
      artikelLink: {
        text: "Local SEO für Zahnärzte",
        url: "/blog/local-seo-zahnarzt",
      },
    },
    {
      branche: "Rechtsberatung",
      icon: "⚖️",
      unternehmen: "Kanzlei Bergmann & Partner",
      stadt: "Frankfurt am Main",
      zeitraum: "6 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Platz 10+" },
        { label: "Google Bewertungen", wert: "5 (4.0 Sterne)" },
        { label: "Lokale Landingpages", wert: "0" },
        { label: "Mandatsanfragen via Maps", wert: "~2/Monat" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 3" },
        { label: "Google Bewertungen", wert: "34 (4.8 Sterne)" },
        { label: "Lokale Landingpages", wert: "8" },
        { label: "Mandatsanfragen via Maps", wert: "~15/Monat" },
      ],
      massnahmen: [
        "GBP optimiert: Rechtsgebiete als Services, FAQ als Posts",
        "8 Stadtteil-Landingpages (Frankfurt-Sachsenhausen, Nordend, etc.)",
        "Attorney Schema Markup auf allen Seiten",
        "Mandanten nach Fallabschluss um Bewertung bitten (persönlich)",
        "Fachartikel zu lokalen Rechtsthemen im Blog",
        "Einträge in Anwaltskammer, JUVE, anwalt.de optimiert",
      ],
      ergebnis: [
        { label: "Mandatsanfragen", wert: "+650%", farbe: "text-green-600" },
        { label: "Sichtbarkeit", wert: "+400%", farbe: "text-green-600" },
        { label: "ROI", wert: "12:1", farbe: "text-green-600" },
      ],
      zitat: "Die Stadtteil-Landingpages waren der Schlüssel. Jetzt ranken wir nicht nur für 'Anwalt Frankfurt', sondern für 8 Stadtteile.",
      keyLearning:
        "Für Dienstleister in Großstädten sind Stadtteil-Landingpages der effektivste Hebel nach GBP-Optimierung.",
      artikelLink: {
        text: "Local SEO für Anwälte",
        url: "/blog/local-seo-anwaelte-kanzleien",
      },
    },
    {
      branche: "Beauty & Wellness",
      icon: "✂️",
      unternehmen: "Hair & Style Studio Lisa",
      stadt: "Berlin-Friedrichshain",
      zeitraum: "4 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Platz 12" },
        { label: "Google Bewertungen", wert: "18 (4.2 Sterne)" },
        { label: "Google Posts", wert: "0" },
        { label: "Online-Buchungen via Maps", wert: "~3/Monat" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 2" },
        { label: "Google Bewertungen", wert: "72 (4.8 Sterne)" },
        { label: "Google Posts", wert: "2-3/Woche" },
        { label: "Online-Buchungen via Maps", wert: "~25/Monat" },
      ],
      massnahmen: [
        "Vorher-Nachher-Fotos als Hauptcontent auf GBP (100+ Bilder)",
        "Instagram-Content gleichzeitig als Google Posts recycelt",
        "Bewertungskarte mit QR-Code an jeden Kunden beim Bezahlen",
        "Online-Buchungslink im GBP prominent platziert",
        "Dienstleistungen mit Preisen im GBP hinterlegt",
        "Lokale Kooperationen mit Cafés und Boutiquen für Backlinks",
      ],
      ergebnis: [
        { label: "Buchungen", wert: "+733%", farbe: "text-green-600" },
        { label: "Instagram-Follower", wert: "+45%", farbe: "text-green-600" },
        { label: "Umsatz", wert: "+160%", farbe: "text-green-600" },
      ],
      zitat: "Die Kombination aus Vorher-Nachher-Fotos und Google Posts war wie ein kostenloser Werbekanal.",
      keyLearning:
        "Visuelle Branchen profitieren überproportional von Fotos und Google Posts. Social-Media-Content kann effektiv recycelt werden.",
      artikelLink: {
        text: "Local SEO für Friseursalons",
        url: "/blog/local-seo-friseursalon-beauty",
      },
    },
    {
      branche: "Automotive",
      icon: "🚗",
      unternehmen: "AutoService König",
      stadt: "Köln-Ehrenfeld",
      zeitraum: "5 Monate",
      vorher: [
        { label: "Local Pack Position", wert: "Platz 7" },
        { label: "Google Bewertungen", wert: "22 (3.8 Sterne)" },
        { label: "NAP-Konsistenz", wert: "3 verschiedene Nummern" },
        { label: "Werkstatttermine via Maps", wert: "~8/Monat" },
      ],
      nachher: [
        { label: "Local Pack Position", wert: "Platz 1" },
        { label: "Google Bewertungen", wert: "95 (4.7 Sterne)" },
        { label: "NAP-Konsistenz", wert: "100% konsistent" },
        { label: "Werkstatttermine via Maps", wert: "~45/Monat" },
      ],
      massnahmen: [
        "NAP in allen 30 Verzeichnissen auf eine Nummer korrigiert",
        "Negative Bewertungen professionell beantwortet + Probleme gelöst",
        "Markenspezifische Sekundärkategorien hinzugefügt",
        "Werkstatt-Fotos und Werkzeug-Videos hochgeladen",
        "Saisonale Google Posts (Reifenwechsel, HU/AU-Erinnerung)",
        "TÜV-Partner und Automobilclub-Verlinkungen aufgebaut",
      ],
      ergebnis: [
        { label: "Termine", wert: "+463%", farbe: "text-green-600" },
        { label: "Anrufe", wert: "+380%", farbe: "text-green-600" },
        { label: "Bewertungsdurchschnitt", wert: "3.8 → 4.7", farbe: "text-green-600" },
      ],
      zitat: "Wir hatten 3 verschiedene Telefonnummern im Netz. Kein Wunder, dass Google uns nicht vertraut hat.",
      keyLearning:
        "NAP-Inkonsistenz ist ein stiller Ranking-Killer. Die Korrektur allein brachte schon 3 Plätze Verbesserung.",
      artikelLink: {
        text: "Local SEO für Autowerkstätten",
        url: "/blog/local-seo-autowerkstatt",
      },
    },
  ];

  const erfolgsMuster = [
    {
      muster: "GBP zu 100% vervollständigen",
      haeufigkeit: "6/6 Case Studies",
      impact: "Grundvoraussetzung für alle Rankings",
    },
    {
      muster: "Bewertungen systematisch sammeln",
      haeufigkeit: "6/6 Case Studies",
      impact: "Durchschnittlich +400% Bewertungen in 4-6 Monaten",
    },
    {
      muster: "Spezifischste Primärkategorie wählen",
      haeufigkeit: "5/6 Case Studies",
      impact: "Sofortige Relevanz-Verbesserung für Nischen-Keywords",
    },
    {
      muster: "NAP-Konsistenz herstellen",
      haeufigkeit: "4/6 Case Studies",
      impact: "2-5 Plätze Verbesserung allein durch Korrektur",
    },
    {
      muster: "Regelmäßige Google Posts",
      haeufigkeit: "5/6 Case Studies",
      impact: "Aktivitätssignal + zusätzliche Keyword-Relevanz",
    },
    {
      muster: "Hochwertige Fotos hochladen",
      haeufigkeit: "6/6 Case Studies",
      impact: "+42% mehr Klicks durch visuelle Überzeugung",
    },
    {
      muster: "Lokale Landingpages erstellen",
      haeufigkeit: "3/6 Case Studies",
      impact: "Stadtteil-Rankings für Großstadt-Unternehmen",
    },
    {
      muster: "Schema Markup implementieren",
      haeufigkeit: "3/6 Case Studies",
      impact: "Technischer Vorteil gegenüber weniger versierten Konkurrenten",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Branchen analysiert</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">Ø +450%</div>
            <div className="text-sm text-muted-foreground">mehr Kundenanfragen</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">4-6 Mon.</div>
            <div className="text-sm text-muted-foreground">bis Top-3-Ranking</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">gemeinsame Erfolgsmuster</div>
          </CardContent>
        </Card>
      </div>

      <AutoLexikonParagraph>
        <p className="lead text-xl text-muted-foreground mb-8" id="intro">
          <strong>Theorie ist gut, Praxis ist besser.</strong> Diese 6 Case Studies
          zeigen, wie Unternehmen aus verschiedenen Branchen ihr{" "}
          <Link
            to="/blog/google-maps-ranking-verbessern"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Maps Ranking
          </Link>{" "}
          dramatisch verbessert haben - mit konkreten Zahlen, Maßnahmen und
          Zeitrahmen.
        </p>
      </AutoLexikonParagraph>

      <KeyTakeawaysBox
        items={[
          "6 echte Case Studies aus Gastronomie, Handwerk, Gesundheit, Recht, Beauty und Automotive",
          "Durchschnittlich +450% mehr Kundenanfragen nach 4-6 Monaten Optimierung",
          "8 gemeinsame Erfolgsmuster, die branchenübergreifend funktionieren",
          "Konkrete Maßnahmen mit Vorher-Nachher-Vergleichen zum Nachmachen",
          "ROI-Betrachtung: Die meisten Maßnahmen sind kostenlos umsetzbar",
        ]}
      />

      <BlogCTAABTest articleSlug="google-maps-ranking-case-studies" position="intro" />

      {/* Überblick */}
      <section id="ueberblick" className="mb-12">
        <h2 className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          Überblick: 6 Branchen, 6 Erfolgsgeschichten
        </h2>

        <p className="mb-6">
          Jede Case Study folgt dem gleichen Aufbau: Ausgangssituation,
          durchgeführte Maßnahmen, messbare Ergebnisse und die wichtigste
          Erkenntnis. So kannst du die relevantesten Taktiken für deine
          Branche identifizieren.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Branche</th>
                <th className="border border-border p-3 text-left">Stadt</th>
                <th className="border border-border p-3 text-left">Zeitraum</th>
                <th className="border border-border p-3 text-left">Ranking vorher</th>
                <th className="border border-border p-3 text-left">Ranking nachher</th>
                <th className="border border-border p-3 text-left">Top-Ergebnis</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((cs, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">
                    {cs.icon} {cs.branche}
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{cs.stadt}</td>
                  <td className="border border-border p-3 text-muted-foreground">{cs.zeitraum}</td>
                  <td className="border border-border p-3">
                    <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded text-xs">
                      {cs.vorher[0].wert}
                    </span>
                  </td>
                  <td className="border border-border p-3">
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded text-xs">
                      {cs.nachher[0].wert}
                    </span>
                  </td>
                  <td className="border border-border p-3 font-semibold text-green-600">
                    {cs.ergebnis[0].wert}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Case Studies */}
      {caseStudies.map((cs, index) => (
        <section
          key={index}
          id={tocItems[index + 1].id}
          className="mb-12"
        >
          <h2 className="flex items-center gap-2">
            <span className="text-2xl">{cs.icon}</span>
            Case Study #{index + 1}: {cs.unternehmen} ({cs.branche})
          </h2>

          <div className="flex flex-wrap gap-3 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {cs.stadt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {cs.zeitraum}
            </span>
          </div>

          {/* Vorher/Nachher Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Vorher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cs.vorher.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.label}:</strong>{" "}
                        <span className="text-muted-foreground">{item.wert}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Nachher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cs.nachher.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.label}:</strong>{" "}
                        <span className="text-muted-foreground">{item.wert}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Maßnahmen */}
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Durchgeführte Maßnahmen
            </h3>
            <ol className="space-y-2">
              {cs.massnahmen.map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="bg-primary/10 text-primary w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{m}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Ergebnis-Karten */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {cs.ergebnis.map((e, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-4">
                  <div className={`text-2xl font-bold ${e.farbe}`}>{e.wert}</div>
                  <div className="text-xs text-muted-foreground">{e.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Zitat */}
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg mb-4 italic text-muted-foreground">
            "{cs.zitat}"
          </blockquote>

          {/* Key Learning */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
            <p className="text-sm">
              <strong>🔑 Key Learning:</strong> {cs.keyLearning}
            </p>
          </div>

          {cs.artikelLink && (
            <p className="text-sm">
              Branchenguide:{" "}
              <Link
                to={cs.artikelLink.url}
                className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
              >
                {cs.artikelLink.text}
              </Link>
            </p>
          )}

          {index === 2 && (
            <BlogCTAABTest
              articleSlug="google-maps-ranking-case-studies"
              position="middle"
            />
          )}
        </section>
      ))}

      {/* Gemeinsame Muster */}
      <section id="muster" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          8 gemeinsame Erfolgsmuster
        </h2>

        <p className="mb-6">
          Über alle 6 Case Studies hinweg kristallisieren sich klare Muster
          heraus. Diese Faktoren waren branchenübergreifend die wichtigsten
          Hebel:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Erfolgsmuster</th>
                <th className="border border-border p-3 text-left">Häufigkeit</th>
                <th className="border border-border p-3 text-left">Impact</th>
              </tr>
            </thead>
            <tbody>
              {erfolgsMuster.map((m, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{m.muster}</td>
                  <td className="border border-border p-3">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {m.haeufigkeit}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{m.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">
            Dein Aktionsplan basierend auf den Case Studies:
          </h3>
          <ol className="space-y-3">
            {[
              "GBP zu 100% vervollständigen und die spezifischste Kategorie wählen",
              "Bewertungssystem einrichten (QR-Code, E-Mail, SMS)",
              "NAP in allen Verzeichnissen prüfen und korrigieren",
              "Hochwertige, echte Fotos regelmäßig hochladen",
              "Google Posts als kostenlosen Marketing-Kanal nutzen",
              "Lokale Landingpages und Schema Markup als Differenzierungsmerkmal",
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6">
          Starte jetzt:{" "}
          <Link
            to="/blog/local-seo-audit-checkliste"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Local SEO Audit Checkliste
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/google-maps-konkurrenzanalyse"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Konkurrenzanalyse durchführen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/google-maps-seo-ranking-faktoren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Ranking-Faktoren verstehen
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection
        sources={[
          {
            title: "MOZ Local Search Ranking Factors",
            url: "https://moz.com/local-search-ranking-factors",
            type: "study",
            description: "Jährliche Studie zu lokalen Ranking-Faktoren",
          },
          {
            title: "BrightLocal Local Consumer Review Survey",
            url: "https://www.brightlocal.com/research/local-consumer-review-survey/",
            type: "study",
            description: "Verbraucherverhalten bei lokalen Bewertungen",
          },
          {
            title: "Google Business Profile Hilfe",
            url: "https://support.google.com/business",
            type: "documentation",
            description: "Offizielle Google-Dokumentation für Unternehmensprofile",
          },
          {
            title: "Whitespark Local SEO Ranking Factors",
            url: "https://whitespark.ca/local-search-ranking-factors/",
            type: "study",
            description: "Jährliche Branchenumfrage zu Local SEO Faktoren",
          },
        ]}
      />

      <HelpfulnessWidget articleSlug="google-maps-ranking-case-studies" />
    </ArticleLayout>
  );
};

export default GoogleMapsRankingCaseStudies;
