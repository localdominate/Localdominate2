import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import StatisticBox from "@/components/blog/StatisticBox";
import RankingFactorChart from "@/components/blog/RankingFactorChart";
import SeoFlowDiagram from "@/components/blog/SeoFlowDiagram";
import {
  generalLocalSeoStats,
  googleBusinessStats,
  reviewStats,
  mobileSearchStats,
  industryStats,
} from "@/data/industryStatistics";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, TrendingUp, Search, Users, Star, Globe, Smartphone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LocalSeoStatistiken = () => {
  const article = getArticleBySlug("local-seo-statistiken-daten");
  const { language } = useLanguage();

  if (!article) return null;

  const tocItems = [
    { id: "ueberblick", title: "Wie viele Suchen haben lokale Absicht?" },
    { id: "google-business", title: "Welche Kennzahlen hat das Google Business Profil?" },
    { id: "bewertungen", title: "Wie stark beeinflussen Bewertungen das Ranking?" },
    { id: "mobile", title: "Wie wichtig ist Mobile für lokale Suche?" },
    { id: "branchen", title: "Welche Branchen profitieren am meisten von Local SEO?" },
    { id: "ranking-faktoren", title: "Welche Faktoren bestimmen das lokale Ranking 2026?" },
    { id: "trends", title: "Welche Local SEO Trends prägen 2026?" },
    { id: "methodik", title: "Woher stammen diese Daten?" },
  ];

  const faqItems = [
    {
      question: "Wie oft werden die Statistiken auf dieser Seite aktualisiert?",
      answer: "Wir aktualisieren die Daten quartalsweise und ergänzen neue Studien sobald sie verfügbar sind. Die letzte Aktualisierung erfolgte im März 2026.",
    },
    {
      question: "Woher stammen die Daten und wie zuverlässig sind sie?",
      answer: "Unsere Daten stammen aus renommierten Quellen wie Google/Ipsos, BrightLocal, Statista, DEHOGA und branchenspezifischen Verbänden. Jede Statistik ist mit ihrer Originalquelle verlinkt.",
    },
    {
      question: "Kann ich die Statistiken für Präsentationen oder Berichte verwenden?",
      answer: "Ja, alle Statistiken dürfen mit Quellenangabe (localdominate.org) frei verwendet werden. Wir bitten um einen Backlink bei Online-Veröffentlichungen.",
    },
    {
      question: "Welche Branchen werden mit spezifischen Daten abgedeckt?",
      answer: "Wir führen branchenspezifische Statistiken für 22 Branchen, darunter Handwerker, Ärzte, Gastronomie, Anwälte, Immobilienmakler, Fitness, Beauty und mehr.",
    },
    {
      question: "Wie unterscheiden sich die Daten für DACH und internationale Märkte?",
      answer: "Unsere Statistiken fokussieren primär den DACH-Raum. Wo verfügbar, nutzen wir regionale Daten aus Deutschland, Österreich und der Schweiz. Globale Benchmarks (z.B. Google/Ipsos) werden als Kontext ergänzt.",
    },
    {
      question: "Welche Metrik ist am wichtigsten für lokale Unternehmen?",
      answer: "Die wichtigste Metrik variiert je nach Branche: Für Restaurants sind es Bewertungen und Fotos, für Handwerker die Notdienst-Sichtbarkeit, für Ärzte die Profil-Vollständigkeit auf Maps und Portalen.",
    },
    {
      question: "Wie kann ich meine eigenen Local SEO KPIs messen?",
      answer: "Nutze Google Business Profil Insights für Aufrufe, Klicks und Anrufe. Ergänze mit Google Analytics für Website-Traffic und Conversion-Tracking. Unser Reporting-Template hilft beim monatlichen Tracking.",
    },
    {
      question: "Gibt es einen Zusammenhang zwischen Bewertungsanzahl und Umsatz?",
      answer: "Ja – laut BrightLocal steigt der Umsatz durchschnittlich um 9% pro Stern-Verbesserung. Unternehmen mit >50 Bewertungen genießen 70% mehr Vertrauen als solche mit <10 Bewertungen.",
    },
  ];

  const rankingFactors = [
    { factor: "Google Business Profil Signale", weight: "32%", trend: "stabil", description: "Kategorien, Vollständigkeit, Keywords im Titel" },
    { factor: "Bewertungen & Rezensionen", weight: "16%", trend: "steigend", description: "Anzahl, Qualität, Aktualität, Antwortrate" },
    { factor: "On-Page SEO Signale", weight: "19%", trend: "stabil", description: "NAP, Keyword-Optimierung, lokale Landing Pages" },
    { factor: "Link-Signale", weight: "11%", trend: "fallend", description: "Lokale Backlinks, Branchenverzeichnisse, Autorität" },
    { factor: "Verhaltenssignale", weight: "8%", trend: "steigend", description: "CTR, Dwell Time, Mobilfreundlichkeit" },
    { factor: "Citation-Signale", weight: "7%", trend: "fallend", description: "NAP-Konsistenz, Verzeichnis-Qualität" },
    { factor: "Personalisierung", weight: "4%", trend: "steigend", description: "Suchhistorie, Standort-Präzision" },
    { factor: "Social Signale", weight: "3%", trend: "stabil", description: "Social-Media-Engagement, Google Posts" },
  ];

  const trendData = [
    { trend: "AI Overviews in lokaler Suche", impact: "Hoch", timeframe: "2025–2026", description: "Google integriert AI-generierte Antworten in lokale Suchergebnisse. Unternehmen mit strukturierten Daten und klarem E-E-A-T profitieren." },
    { trend: "Zero-Click-Suchen nehmen zu", impact: "Hoch", timeframe: "Bereits aktiv", description: "56% der lokalen Suchen enden ohne Website-Klick – GBP-Optimierung wird damit wichtiger als klassische Website-SEO." },
    { trend: "Voice Search für lokale Anfragen", impact: "Mittel", timeframe: "2025–2027", description: "27% der mobilen Nutzer nutzen Sprachsuche für lokale Anfragen. FAQ-Schema und natürliche Sprache werden Ranking-Faktoren." },
    { trend: "Google Maps wird Social-Plattform", impact: "Mittel", timeframe: "2025–2026", description: "Google investiert in Community-Features, Kurzvideos und Echtzeit-Updates auf Maps. Aktive Profile werden bevorzugt." },
    { trend: "Hyperlokal statt stadtweit", impact: "Hoch", timeframe: "Bereits aktiv", description: "Google verfeinert den Suchradius. Stadtteil- und Kiez-SEO wird wichtiger als Stadt-Level-Optimierung." },
    { trend: "E-E-A-T für lokale Unternehmen", impact: "Mittel", timeframe: "2025–2026", description: "Erfahrung, Expertise, Autorität und Vertrauenswürdigkeit werden auch für lokale Rankings stärker gewichtet." },
  ];

  const industryOrder = [
    "handwerker", "anwaelte", "aerzte", "zahnarzt", "restaurant", "friseur",
    "steuerberater", "immobilienmakler", "autowerkstatt", "apotheke",
    "hotels", "ferienwohnungen", "physiotherapie", "fitness",
    "tattoo", "yoga", "fotograf", "elektrotechnik",
    "tierarzt", "optiker", "baeckerei", "doener",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Local SEO Statistiken & Daten 2026",
    description: "88+ datengestützte Local SEO Statistiken für 22 Branchen. Ranking-Faktoren, Trends und Benchmarks mit Quellenangaben.",
    url: "https://localdominate.org/blog/local-seo-statistiken-daten",
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    author: { "@type": "Organization", name: "LocalDominate" },
    publisher: { "@type": "Organization", name: "LocalDominate" },
  };

  return (
    <ArticleLayout
      article={article}
      additionalSchema={jsonLd}
      faqItems={faqItems}
    >
      <TableOfContents items={tocItems} />

      {/* Hero Stats */}
      <div className="not-prose mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-7 w-7 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">88+ Local SEO Statistiken für 2026</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Die umfassendste Sammlung aktueller Local SEO Daten im deutschsprachigen Raum. Alle Statistiken mit Quellenangaben — für deine Strategie, Präsentationen und Reportings.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">88+</p>
            <p className="text-sm text-muted-foreground">Datenpunkte</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">22</p>
            <p className="text-sm text-muted-foreground">Branchen</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Quellen</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">Q1/2026</p>
            <p className="text-sm text-muted-foreground">Letzte Aktualisierung</p>
          </div>
        </div>
      </div>

      {/* Section 1: General Local SEO Stats */}
      <section id="ueberblick">
        <h2>Wie viele Suchen haben lokale Absicht?</h2>
        <p>
          Fast die Hälfte aller Google-Suchen hat eine lokale Kaufabsicht. Wer als lokales Unternehmen 
          nicht in den Top 3 der lokalen Ergebnisse erscheint, verliert den Großteil potenzieller Kunden. 
          Diese Zahlen zeigen, warum Local SEO keine Option, sondern Pflicht ist.
        </p>
        <StatisticBox data={generalLocalSeoStats} variant="highlight" />
        <p>
          <strong>Was das bedeutet:</strong> Bei 8,5 Milliarden täglichen Google-Suchen entsprechen 46% lokale Suchen 
          rund 3,9 Milliarden Suchanfragen pro Tag mit lokaler Absicht. Die Conversion-Rate von 28% macht lokale 
          Suche zum effektivsten digitalen Marketingkanal für stationäre Unternehmen.
        </p>
      </section>

      {/* Section 2: Google Business Profile */}
      <section id="google-business">
        <h2>Welche Kennzahlen hat das Google Business Profil?</h2>
        <p>
          Das Google Business Profil ist der wichtigste Einzelfaktor für lokale Sichtbarkeit. 
          Diese Statistiken zeigen den messbaren Impact einer professionellen GBP-Optimierung.
        </p>
        <StatisticBox data={googleBusinessStats} variant="highlight" />
        <div className="not-prose my-6">
          <Card className="p-5 border-border/60">
            <h4 className="font-semibold text-foreground mb-3">GBP-Optimierung: Schlüssel-Erkenntnisse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Profile mit über 100 Fotos erhalten 520% mehr Anrufe als Profile ohne Fotos</li>
              <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Unternehmen mit wöchentlichen Google Posts sehen 42% mehr Profilaufrufe</li>
              <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Antworten auf Bewertungen innerhalb von 24h steigern die Conversion um 33%</li>
              <li className="flex gap-2"><TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Vollständig ausgefüllte Profile sind 2.7x wahrscheinlicher als vertrauenswürdig eingestuft</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Section 3: Reviews */}
      <section id="bewertungen">
        <h2>Wie stark beeinflussen Bewertungen das Ranking?</h2>
        <p>
          Online-Bewertungen sind der zweitwichtigste Ranking-Faktor und der wichtigste Vertrauens-Builder 
          für lokale Unternehmen. Diese Zahlen belegen den direkten Zusammenhang zwischen Bewertungen und Umsatz.
        </p>
        <StatisticBox data={reviewStats} variant="highlight" />
        <p>
          <strong>Branchenvergleich:</strong> Die Bedeutung von Bewertungen variiert stark: Während 94% der Restaurant-Gäste 
          Reviews lesen, sind es bei Apotheken nur 58%. Ärzte und Zahnärzte haben mit 91% den höchsten Anteil an 
          bewertungsgetriebenen Entscheidungen im Gesundheitssektor.
        </p>
      </section>

      {/* Section 4: Mobile */}
      <section id="mobile">
        <h2>Wie wichtig ist Mobile für lokale Suche?</h2>
        <p>
          Über 60% aller lokalen Suchen erfolgen mobil. „In der Nähe"-Suchen sind in den letzten 5 Jahren 
          um 400% gestiegen. Mobiloptimierung ist damit Pflicht für jedes lokale Unternehmen.
        </p>
        <StatisticBox data={mobileSearchStats} variant="highlight" />
      </section>

      {/* Section 5: Industry Stats */}
      <section id="branchen">
        <h2>Welche Branchen profitieren am meisten von Local SEO?</h2>
        <p>
          Jede Branche hat eigene Suchgewohnheiten, Conversion-Muster und Wettbewerbsdynamiken. 
          Hier findest du die wichtigsten Datenpunkte für 22 Branchen — von Gastronomie über Gesundheit 
          bis Handwerk und Dienstleistungen.
        </p>

        <div className="not-prose space-y-4">
          {industryOrder.map((key) => {
            const stats = industryStats[key];
            if (!stats || stats.length === 0) return null;
            return stats.map((stat, i) => (
              <StatisticBox key={`${key}-${i}`} data={stat} variant="default" />
            ));
          })}
        </div>

        <div className="not-prose my-8">
          <Card className="p-5 border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3">
              <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Branchenspezifische Guides</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Zu jeder Branche bieten wir einen ausführlichen Local SEO Guide mit Praxisbeispielen, 
                  Implementierungs-Roadmaps und weiteren Statistiken.
                </p>
                <Link
                  to="/blog/local-seo-branchen-hub"
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                >
                  Alle 22 Branchen-Guides anzeigen <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 6: Ranking Factors */}
      <section id="ranking-faktoren">
        <h2>Welche Faktoren bestimmen das lokale Ranking 2026?</h2>
        <p>
          Basierend auf der jährlichen Whitespark/Moz Local Search Ranking Factors Studie und eigenen Analysen 
          zeigt diese Aufstellung die relative Gewichtung der wichtigsten Ranking-Faktoren für das Local Pack.
        </p>

        {/* Visual bar chart */}
        <RankingFactorChart
          title="Ranking-Faktoren Gewichtung – Local Pack 2026"
          factors={rankingFactors.map(rf => ({
            label: rf.factor,
            weight: parseInt(rf.weight),
            trend: rf.trend === "steigend" ? "up" as const : rf.trend === "fallend" ? "down" as const : "stable" as const,
          }))}
          caption="Relative Gewichtung der Local-Pack-Ranking-Signale (Whitespark/Moz, eigene Analyse 2025/2026)"
        />

        {/* Detailed table */}
        <div className="not-prose my-6">
          <Card className="border-border/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Ranking-Faktor</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground">Gewicht</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground">Trend</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingFactors.map((rf, i) => (
                    <tr key={i} className="border-b border-border/40">
                      <td className="px-4 py-3 font-medium text-foreground">{rf.factor}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="font-bold text-primary text-lg">{rf.weight}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge className={
                          rf.trend === "steigend"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                            : rf.trend === "fallend"
                              ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                              : "bg-muted text-muted-foreground"
                        }>
                          {rf.trend === "steigend" ? "↑" : rf.trend === "fallend" ? "↓" : "→"} {rf.trend}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{rf.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2 border-t border-border/40 text-xs text-muted-foreground/70">
              Quelle: Whitespark Local Search Ranking Factors, Moz Local SEO Guide, eigene Analyse (2025/2026)
            </div>
          </Card>
        </div>

        {/* SEO Optimization Workflow */}
        <h3>Local SEO Optimierungs-Workflow</h3>
        <p>
          Dieser Workflow zeigt den empfohlenen Ablauf einer vollständigen Local SEO Optimierung — 
          von der Analyse über die Implementierung bis zum laufenden Monitoring.
        </p>
        <SeoFlowDiagram
          title="Local SEO Implementierungs-Workflow"
          steps={[
            { label: "Audit & Analyse", icon: "🔍", description: "IST-Stand, Wettbewerber, Keywords" },
            { label: "GBP-Optimierung", icon: "📍", description: "Profil, Fotos, Kategorien, Posts", highlight: true },
            { label: "On-Page SEO", icon: "🌐", description: "NAP, Schema, lokale Seiten" },
            { label: "Bewertungen", icon: "⭐", description: "Strategie, Antworten, Monitoring", highlight: true },
            { label: "Monitoring", icon: "📊", description: "Rankings, Traffic, Conversions" },
          ]}
          caption="Empfohlener Workflow für die Local SEO Optimierung lokaler Unternehmen"
        />

        {/* Conversion Funnel */}
        <SeoFlowDiagram
          title="Lokaler Such-Conversion-Funnel"
          steps={[
            { label: "Google-Suche", icon: "🔎", description: "46% aller Suchen lokal" },
            { label: "Local Pack / Maps", icon: "🗺️", description: "Top 3 erhalten 75% Klicks", highlight: true },
            { label: "Profil ansehen", icon: "👁️", description: "Fotos, Bewertungen, Infos" },
            { label: "Aktion", icon: "📞", description: "Anruf, Route, Website", highlight: true },
            { label: "Kauf / Besuch", icon: "🏪", description: "28% Conversion-Rate" },
          ]}
          caption="Der typische Weg vom lokalen Suchbegriff zum Kundenbesuch (Google/Ipsos 2025)"
        />
      </section>

      {/* Section 7: Trends */}
      <section id="trends">
        <h2>Welche Local SEO Trends prägen 2026?</h2>
        <p>
          Diese Entwicklungen werden die lokale Suche in den kommenden 12–24 Monaten am stärksten 
          beeinflussen. Frühzeitige Anpassung sichert Wettbewerbsvorteile.
        </p>

        <div className="not-prose my-6 space-y-3">
          {trendData.map((trend, i) => (
            <Card key={i} className="p-4 border-border/60">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground text-sm">{trend.trend}</h4>
                    <Badge className={
                      trend.impact === "Hoch"
                        ? "bg-primary/10 text-primary text-xs"
                        : "bg-muted text-muted-foreground text-xs"
                    }>
                      Impact: {trend.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{trend.description}</p>
                </div>
                <span className="text-xs text-muted-foreground/70 flex-shrink-0">{trend.timeframe}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 8: Methodology */}
      <section id="methodik">
        <h2>Methodik & Quellenverzeichnis</h2>
        <p>
          Alle Statistiken auf dieser Seite stammen aus öffentlich zugänglichen Studien, offiziellen 
          Branchenberichten und eigenen Datenanalysen. Wir priorisieren primäre Datenquellen und 
          kennzeichnen jede Statistik mit ihrer Originalquelle und dem Erscheinungsjahr.
        </p>
        <p>
          <strong>Aktualisierungszyklus:</strong> Diese Seite wird quartalsweise aktualisiert. 
          Neue Studien und Daten werden innerhalb von 30 Tagen nach Veröffentlichung integriert.
        </p>
        <p>
          <strong>Hinweis:</strong> Branchenspezifische Daten beziehen sich primär auf den DACH-Raum. 
          Wo keine regionalen Daten verfügbar sind, verwenden wir internationale Benchmarks mit entsprechender Kennzeichnung.
        </p>
      </section>

      <SourcesSection
        sources={[
          { title: "Google/Ipsos: Understanding Consumers' Local Search Behavior", url: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-2023/" },
          { title: "BrightLocal: Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
          { title: "Whitespark: Local Search Ranking Factors 2025", url: "https://whitespark.ca/local-search-ranking-factors/" },
          { title: "Moz: The State of Local SEO 2025", url: "https://moz.com/local-search-ranking-factors" },
          { title: "Statista: Suchmaschinennutzung in Deutschland", url: "https://de.statista.com/" },
          { title: "DEHOGA Bundesverband: Digitalisierung in der Gastronomie", url: "https://www.dehoga-bundesverband.de/" },
          { title: "BRAK: Anwaltsmarkt in Zahlen", url: "https://www.brak.de/" },
          { title: "Jameda: Patientenstudie zur Arztsuche", url: "https://www.jameda.de/" },
        ]}
      />

      <HelpfulnessWidget articleSlug="local-seo-statistiken-daten" />
    </ArticleLayout>
  );
};

export default LocalSeoStatistiken;
