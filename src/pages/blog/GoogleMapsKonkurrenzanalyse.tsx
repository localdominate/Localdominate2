import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  Search,
  BarChart3,
  Star,
  CheckCircle,
  Eye,
  TrendingUp,
  Users,
  Globe,
  MapPin,
  Zap,
  FileText,
} from "lucide-react";

const GoogleMapsKonkurrenzanalyse = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-konkurrenzanalyse", language);

  if (!article) return null;

  const tocItems = [
    { id: "warum-analyse", title: "Warum Konkurrenzanalyse?" },
    { id: "5-schritte", title: "5-Schritte-Framework" },
    { id: "profil-analyse", title: "GBP-Profil analysieren" },
    { id: "bewertungen-analyse", title: "Bewertungen der Konkurrenz" },
    { id: "keywords-analyse", title: "Keywords & Content vergleichen" },
    { id: "citations-backlinks", title: "Citations & Backlinks prüfen" },
    { id: "tools", title: "Kostenlose Tools" },
    { id: "aktionsplan", title: "Aktionsplan erstellen" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Wie oft sollte ich eine Konkurrenzanalyse durchführen?",
      answer:
        "Eine umfassende Analyse sollte quartalsweise erfolgen. Monatliche Spot-Checks der Top-3-Konkurrenten (neue Bewertungen, Ranking-Veränderungen) reichen dazwischen. Bei Ranking-Veränderungen sofort analysieren.",
    },
    {
      question: "Welche Tools brauche ich für eine Google Maps Konkurrenzanalyse?",
      answer:
        "Für den Anfang reichen kostenlose Tools: Google Maps selbst, Google Suche (inkognito), Pleper Local SEO Tools und der GMB Everywhere Browser-Extension. Fortgeschrittene nutzen BrightLocal, Whitespark oder SEMrush.",
    },
    {
      question: "Wie viele Konkurrenten sollte ich analysieren?",
      answer:
        "Fokussiere dich auf die Top 5 im Local Pack für deine wichtigsten Keywords. Ergänze 2-3 indirekte Konkurrenten, die zwar nicht im Local Pack sind, aber organisch stark ranken.",
    },
    {
      question: "Was mache ich, wenn alle Konkurrenten besser sind?",
      answer:
        "Das ist eine gute Ausgangslage! Analysiere, was sie gemeinsam haben (wahrscheinlich die Hygiene-Faktoren) und suche nach Lücken. Oft gibt es Nischen-Keywords, Stadtteil-Fokus oder Bewertungs-Schwächen, die du nutzen kannst.",
    },
    {
      question: "Darf ich die Strategie meiner Konkurrenten kopieren?",
      answer:
        "Sich inspirieren lassen: ja. Exakt kopieren: nein. Analysiere, was funktioniert, und adaptiere es für dein Unternehmen. Eigene USPs und authentischer Content sind langfristig erfolgreicher als Kopien.",
    },
    {
      question: "Wie erkenne ich, ob ein Konkurrent Spam betreibt?",
      answer:
        "Achte auf Keyword-Stuffing im Firmennamen, unrealistisch viele Bewertungen in kurzer Zeit, gefälschte Standorte oder doppelte Listings. Lies unseren Guide zu Google Maps Spam erkennen für Details.",
    },
  ];

  const analyseDimensionen = [
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "1. Profil-Vollständigkeit",
      beschreibung: "Wie vollständig und optimiert ist das GBP des Konkurrenten?",
      checkpunkte: [
        "Geschäftsname (Keywords enthalten?)",
        "Primär- und Sekundärkategorien",
        "Beschreibung (Länge, Keywords, Call-to-Action)",
        "Fotos (Anzahl, Qualität, Aktualität)",
        "Attribute und Highlights",
        "Produkte und Services gelistet",
        "Google Posts Frequenz",
        "Öffnungszeiten und Sondertage",
      ],
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "2. Bewertungsprofil",
      beschreibung: "Stärke und Qualität der Bewertungen analysieren.",
      checkpunkte: [
        "Gesamtanzahl der Bewertungen",
        "Durchschnittliche Sternebewertung",
        "Bewertungen der letzten 3 Monate (Velocity)",
        "Antwortrate des Unternehmens",
        "Qualität der Antworten",
        "Keywords in Bewertungstexten",
        "Bewertungen auf Drittplattformen (Yelp, Trustpilot)",
        "Negative Bewertungen und Muster",
      ],
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "3. Website & SEO",
      beschreibung: "Organische Sichtbarkeit und technische Qualität prüfen.",
      checkpunkte: [
        "Domain Authority / Domain Rating",
        "Lokale Landingpages vorhanden?",
        "Schema Markup (LocalBusiness)",
        "Core Web Vitals / Page Speed",
        "Mobile-Friendliness",
        "Content-Qualität und -Umfang",
        "Interne Verlinkung",
        "Blog / Ressourcen-Seiten",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "4. Citations & Verzeichnisse",
      beschreibung: "Wo ist der Konkurrent überall gelistet?",
      checkpunkte: [
        "Anzahl lokaler Citations",
        "NAP-Konsistenz prüfen",
        "Branchenspezifische Verzeichnisse",
        "Regionale Verzeichnisse",
        "Kammer-Einträge (IHK, HWK)",
        "Social-Media-Profile",
        "Presseerwähnungen",
        "Backlink-Profil (Anzahl & Qualität)",
      ],
    },
  ];

  const vergleichsTemplate = [
    { faktor: "Bewertungen (Anzahl)", gewicht: "25%" },
    { faktor: "Bewertungen (Durchschnitt)", gewicht: "15%" },
    { faktor: "GBP-Vollständigkeit", gewicht: "15%" },
    { faktor: "Website-SEO", gewicht: "15%" },
    { faktor: "Citations/NAP", gewicht: "10%" },
    { faktor: "Backlinks", gewicht: "10%" },
    { faktor: "Content-Qualität", gewicht: "5%" },
    { faktor: "Google Posts Aktivität", gewicht: "5%" },
  ];

  const kostenloseTools = [
    {
      name: "Google Maps (Inkognito)",
      zweck: "Rankings prüfen, Profile vergleichen",
      tipp: "Verschiedene Suchbegriffe testen, Standort variieren",
    },
    {
      name: "Pleper Local SEO Tools",
      zweck: "GBP-Audit, Kategorie-Recherche",
      tipp: "Kostenloser GBP-Audit zeigt fehlende Felder",
    },
    {
      name: "GMB Everywhere (Chrome Extension)",
      zweck: "GBP-Daten direkt in der Suche sehen",
      tipp: "Zeigt Kategorien, Bewertungen, Posts auf einen Blick",
    },
    {
      name: "Google PageSpeed Insights",
      zweck: "Website-Performance vergleichen",
      tipp: "Konkurrenz-URLs eingeben und Core Web Vitals prüfen",
    },
    {
      name: "Schema Markup Validator",
      zweck: "Structured Data der Konkurrenz prüfen",
      tipp: "URL eingeben und LocalBusiness Schema vergleichen",
    },
    {
      name: "Ubersuggest (Free Tier)",
      zweck: "Domain-Vergleich, Keyword-Overlap",
      tipp: "3 kostenlose Suchen pro Tag, Domain Authority vergleichen",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">Top 3</div>
            <div className="text-sm text-muted-foreground">bekommen 75% der Klicks</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">8 Faktoren</div>
            <div className="text-sm text-muted-foreground">im Vergleichs-Framework</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">6 Tools</div>
            <div className="text-sm text-muted-foreground">kostenlos verfügbar</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">5 Schritte</div>
            <div className="text-sm text-muted-foreground">zum Analyse-Framework</div>
          </CardContent>
        </Card>
      </div>

      <AutoLexikonParagraph>
        <p className="lead text-xl text-muted-foreground mb-8" id="intro">
          <strong>Wer seine Konkurrenz nicht kennt, optimiert blind.</strong>{" "}
          Eine systematische Google Maps Konkurrenzanalyse zeigt dir genau, warum
          bestimmte Unternehmen im{" "}
          <Link
            to="/blog/wie-google-maps-ranking-funktioniert"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Local Pack
          </Link>{" "}
          vor dir ranken - und was du tun musst, um sie zu überholen.
        </p>
      </AutoLexikonParagraph>

      <KeyTakeawaysBox
        items={[
          "Systematisches 5-Schritte-Framework zur Konkurrenzanalyse",
          "4 Analyse-Dimensionen: Profil, Bewertungen, SEO, Citations",
          "Gewichtetes Vergleichs-Template zum Ausfüllen",
          "6 kostenlose Tools für deine Analyse",
          "Konkrete Aktionspläne basierend auf den Ergebnissen",
        ]}
      />

      <BlogCTAABTest articleSlug="google-maps-konkurrenzanalyse" position="intro" />

      {/* Warum Analyse */}
      <section id="warum-analyse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Warum eine Konkurrenzanalyse unverzichtbar ist
        </h2>

        <AutoLexikonParagraph>
          <p className="mb-6">
            Google Maps zeigt im Local Pack nur <strong>3 Ergebnisse</strong>.
            Diese 3 Plätze bekommen rund 75% aller Klicks. Um dort
            hinzukommen, musst du verstehen, was die aktuellen Top-Ergebnisse
            richtig machen - und wo ihre Schwächen liegen.
          </p>
        </AutoLexikonParagraph>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">Lücken finden</h3>
              <p className="text-sm text-muted-foreground">
                Entdecke Bereiche, in denen Konkurrenten schwach sind:
                fehlende Fotos, wenig Bewertungen, schlechte Website.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">Prioritäten setzen</h3>
              <p className="text-sm text-muted-foreground">
                Investiere Zeit dort, wo der größte Abstand besteht -
                maximaler Impact bei minimalem Aufwand.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">Benchmarks setzen</h3>
              <p className="text-sm text-muted-foreground">
                Definiere konkrete Ziele: "50 Bewertungen erreichen" statt
                vage "mehr Bewertungen sammeln".
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5-Schritte-Framework */}
      <section id="5-schritte" className="mb-12">
        <h2 className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          Das 5-Schritte Analyse-Framework
        </h2>

        <p className="mb-6">
          Folge diesem strukturierten Prozess für eine vollständige
          Konkurrenzanalyse:
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              schritt: "1. Konkurrenten identifizieren",
              beschreibung:
                "Suche deine 5 wichtigsten Keywords in Google Maps (Inkognito-Modus). Notiere die Top-5-Ergebnisse für jedes Keyword. Deine Hauptkonkurrenten sind die, die am häufigsten erscheinen.",
              tipp: "Variiere den Standort mit Google Maps: Zoome auf verschiedene Stadtteile, um zu sehen, wer wo rankt.",
            },
            {
              schritt: "2. Daten sammeln",
              beschreibung:
                "Erstelle eine Tabelle mit allen Konkurrenten und den 8 Vergleichsfaktoren (siehe Template unten). Gehe systematisch durch jedes Profil.",
              tipp: "Nutze GMB Everywhere, um Kategorien und Metriken schnell zu erfassen.",
            },
            {
              schritt: "3. Stärken & Schwächen identifizieren",
              beschreibung:
                "Bewerte jeden Konkurrenten auf einer Skala von 1-10 für jeden Faktor. Markiere Faktoren, bei denen du deutlich zurückliegst (rot) oder vorne bist (grün).",
              tipp: "Sei ehrlich bei der Selbstbewertung - Schönfärberei hilft nicht.",
            },
            {
              schritt: "4. Quick Wins finden",
              beschreibung:
                "Suche nach Faktoren, bei denen alle Konkurrenten schwach sind. Das sind deine Quick Wins - leicht zu verbessern, großer relativer Vorteil.",
              tipp: "Häufige Quick Wins: Google Posts (die meisten nutzen sie nicht), vollständige Attribute, Produkte/Services.",
            },
            {
              schritt: "5. Aktionsplan erstellen",
              beschreibung:
                "Priorisiere Maßnahmen nach Impact und Aufwand. Starte mit den Quick Wins und arbeite dich zu den aufwändigeren Themen vor.",
              tipp: "Setze klare Deadlines und überprüfe den Fortschritt monatlich.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
            >
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{item.schritt}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.beschreibung}
                </p>
                <div className="bg-primary/5 rounded p-2 text-xs text-muted-foreground">
                  <strong>💡 Tipp:</strong> {item.tipp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Profil-Analyse */}
      <section id="profil-analyse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          GBP-Profil der Konkurrenz analysieren
        </h2>

        <p className="mb-6">
          Das{" "}
          <Link
            to="/blog/google-my-business-optimieren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Business Profil
          </Link>{" "}
          ist der wichtigste Ranking-Faktor. Analysiere diese Elemente bei
          jedem Konkurrenten:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {analyseDimensionen.slice(0, 2).map((dim, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {dim.icon}
                  {dim.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {dim.beschreibung}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dim.checkpunkte.map((punkt, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-maps-konkurrenzanalyse" position="middle" />

      {/* Bewertungen Analyse */}
      <section id="bewertungen-analyse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          Bewertungsprofil der Konkurrenz durchleuchten
        </h2>

        <p className="mb-6">
          <Link
            to="/blog/google-bewertungen-bekommen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Bewertungen
          </Link>{" "}
          sind einer der stärksten Ranking-Faktoren. Analysiere nicht nur die
          Anzahl, sondern auch die Qualität:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Metrik</th>
                <th className="border border-border p-3 text-left">Was analysieren</th>
                <th className="border border-border p-3 text-left">Warum wichtig</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  metrik: "Gesamtanzahl",
                  was: "Absolute Zahl aller Bewertungen",
                  warum: "Mehr Bewertungen = mehr Vertrauen + besseres Ranking",
                },
                {
                  metrik: "Durchschnitt",
                  was: "Sterne-Durchschnitt (z.B. 4.6)",
                  warum: "Unter 4.0 verlieren Unternehmen signifikant Kunden",
                },
                {
                  metrik: "Velocity",
                  was: "Neue Bewertungen pro Monat",
                  warum: "Google bevorzugt aktuelle, kontinuierliche Bewertungen",
                },
                {
                  metrik: "Antwortrate",
                  was: "% der beantworteten Bewertungen",
                  warum: "100% Antwortrate zeigt Engagement, beeinflusst Ranking",
                },
                {
                  metrik: "Keyword-Nennungen",
                  was: "Branchenbegriffe in Bewertungstexten",
                  warum: "Keywords in Reviews stärken die Relevanz-Signale",
                },
                {
                  metrik: "Negative Muster",
                  was: "Wiederkehrende Beschwerden identifizieren",
                  warum: "Schwachstellen der Konkurrenz = deine USP-Chance",
                },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{row.metrik}</td>
                  <td className="border border-border p-3 text-muted-foreground">{row.was}</td>
                  <td className="border border-border p-3 text-muted-foreground">{row.warum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>💡 Profi-Tipp:</strong> Lies die negativen Bewertungen
            deiner Konkurrenten sorgfältig. Wenn viele Kunden über lange
            Wartezeiten, schlechten Service oder fehlende Parkplätze klagen,
            kannst du genau diese Punkte als USP in deinem eigenen Profil
            hervorheben.
          </p>
        </div>
      </section>

      {/* Keywords & Content */}
      <section id="keywords-analyse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Keywords & Content vergleichen
        </h2>

        <p className="mb-6">
          Analysiere, für welche{" "}
          <Link
            to="/blog/local-seo-keywords-finden"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            lokalen Keywords
          </Link>{" "}
          deine Konkurrenten sichtbar sind und welchen Content sie erstellen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {analyseDimensionen.slice(2).map((dim, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {dim.icon}
                  {dim.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {dim.beschreibung}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dim.checkpunkte.map((punkt, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Citations & Backlinks */}
      <section id="citations-backlinks" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Citations & Backlinks der Konkurrenz prüfen
        </h2>

        <p className="mb-6">
          <Link
            to="/blog/local-citations-2025"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Citations
          </Link>{" "}
          und{" "}
          <Link
            to="/blog/local-link-building"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Backlinks
          </Link>{" "}
          stärken die Prominence-Signale. Vergleiche dein Profil mit der
          Konkurrenz:
        </p>

        {/* Vergleichs-Template */}
        <div className="overflow-x-auto mb-8">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Gewichtetes Vergleichs-Template
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Faktor</th>
                <th className="border border-border p-3 text-left">Gewichtung</th>
                <th className="border border-border p-3 text-center">Du</th>
                <th className="border border-border p-3 text-center">Konkurrent A</th>
                <th className="border border-border p-3 text-center">Konkurrent B</th>
                <th className="border border-border p-3 text-center">Konkurrent C</th>
              </tr>
            </thead>
            <tbody>
              {vergleichsTemplate.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{row.faktor}</td>
                  <td className="border border-border p-3">
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {row.gewicht}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-center text-muted-foreground">
                    _/10
                  </td>
                  <td className="border border-border p-3 text-center text-muted-foreground">
                    _/10
                  </td>
                  <td className="border border-border p-3 text-center text-muted-foreground">
                    _/10
                  </td>
                  <td className="border border-border p-3 text-center text-muted-foreground">
                    _/10
                  </td>
                </tr>
              ))}
              <tr className="bg-primary/5 font-semibold">
                <td className="border border-border p-3">Gewichteter Score</td>
                <td className="border border-border p-3">100%</td>
                <td className="border border-border p-3 text-center">_</td>
                <td className="border border-border p-3 text-center">_</td>
                <td className="border border-border p-3 text-center">_</td>
                <td className="border border-border p-3 text-center">_</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>💡 So nutzt du das Template:</strong> Bewerte jeden
            Faktor auf einer Skala von 1-10. Multipliziere mit der Gewichtung.
            Summiere für den Gesamtscore. Dein Ziel: In jedem Faktor
            mindestens so gut sein wie der beste Konkurrent.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          6 kostenlose Tools für deine Analyse
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {kostenloseTools.map((tool, index) => (
            <Card key={index}>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {tool.zweck}
                    </p>
                    <p className="text-xs text-primary/80">
                      💡 {tool.tipp}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          Mehr Tools:{" "}
          <Link
            to="/blog/seo-toolbox-kostenlose-ressourcen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            SEO Toolbox: Kostenlose Ressourcen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/ki-tools-local-seo"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            KI-Tools für Local SEO
          </Link>
          .
        </p>
      </section>

      {/* Aktionsplan */}
      <section id="aktionsplan" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Vom Analyse-Ergebnis zum Aktionsplan
        </h2>

        <p className="mb-6">
          Die beste Analyse nützt nichts ohne Umsetzung. So verwandelst du
          deine Erkenntnisse in konkrete Maßnahmen:
        </p>

        <div className="space-y-6 mb-8">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                🔴 Sofort (Woche 1-2): Hygiene-Faktoren schließen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted-foreground">
              <p>• GBP zu 100% vervollständigen (alle Felder, die Konkurrenten haben)</p>
              <p>• Richtige Kategorien wählen (primär + sekundär wie Top-Konkurrenten)</p>
              <p>• NAP-Inkonsistenzen korrigieren</p>
              <p>• Fehlende Fotos hochladen (mindestens so viele wie der Branchendurchschnitt)</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                🟡 Kurzfristig (Monat 1-2): Lücken schließen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted-foreground">
              <p>• Bewertungskampagne starten (Ziel: Konkurrenz-Durchschnitt erreichen)</p>
              <p>• Google Posts starten (wöchentlich, wenn Konkurrenten es nicht tun)</p>
              <p>• Fehlende Citations aufbauen (Verzeichnisse, die Konkurrenten haben)</p>
              <p>• Produkte/Services im GBP pflegen</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                🟢 Mittelfristig (Monat 3-6): Wettbewerbsvorteile aufbauen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1 text-muted-foreground">
              <p>• Lokale Landingpages erstellen (Stadtteile, die Konkurrenten nicht abdecken)</p>
              <p>• Content-Lücken füllen (Blog, FAQ-Seiten, Guides)</p>
              <p>• Lokale Backlinks aufbauen (Vereine, Sponsoring, PR)</p>
              <p>• Schema Markup implementieren (wenn Konkurrenten es nicht haben)</p>
            </CardContent>
          </Card>
        </div>

        <p>
          Detaillierte Optimierung:{" "}
          <Link
            to="/blog/google-maps-ranking-verbessern"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Maps Ranking verbessern
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/local-seo-audit-checkliste"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Local SEO Audit Checkliste
          </Link>
          .
        </p>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Wissen ist Macht</h2>

        <p className="mb-4">
          Eine gründliche Konkurrenzanalyse ist kein einmaliges Projekt,
          sondern ein kontinuierlicher Prozess. Wer seine Konkurrenz kennt,
          optimiert gezielt statt blind - und spart dabei Zeit und Geld.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">
            Dein Analyse-Rhythmus:
          </h3>
          <ol className="space-y-3">
            {[
              "Wöchentlich: Top-3 Keywords in Google Maps prüfen (wer rankt?)",
              "Monatlich: Bewertungs-Velocity der Top-5-Konkurrenten tracken",
              "Quartalsweise: Vollständige 5-Schritte-Analyse durchführen",
              "Bei Ranking-Verlust: Sofort-Analyse - was hat sich bei der Konkurrenz geändert?",
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
            description: "Studie zum Einfluss von Bewertungen auf Kaufentscheidungen",
          },
          {
            title: "Google Business Profile Hilfe",
            url: "https://support.google.com/business",
            type: "documentation",
            description: "Offizielle Google-Dokumentation",
          },
          {
            title: "Whitespark Local SEO Guide",
            url: "https://whitespark.ca/local-seo-guide/",
            type: "article",
            description: "Umfassender Guide zu Local SEO Strategien",
          },
        ]}
      />

      <HelpfulnessWidget articleSlug="google-maps-konkurrenzanalyse" />
    </ArticleLayout>
  );
};

export default GoogleMapsKonkurrenzanalyse;
