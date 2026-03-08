import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Copy, CheckCircle2, Search, MapPin, Target, FileText,
  AlertTriangle, Zap, BarChart3, Globe, Star, Eye,
  TrendingUp, Lightbulb, Users, ArrowRight
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import LocalKeywordFramework from "@/components/blog/LocalKeywordFramework";

const STORAGE_KEY = "keyword-research-template-progress";

// ─── Keyword categories ──────────────────────────────────
interface KeywordCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  pattern: string;
  examples: string[];
}

const keywordCategories: KeywordCategory[] = [
  {
    id: "core-service",
    title: "1. Core Service Keywords",
    icon: <Target className="h-5 w-5 text-primary" />,
    description: "Deine Hauptdienstleistungen + Stadt/Region",
    pattern: "[Dienstleistung] + [Stadt]",
    examples: [
      "zahnarzt münchen",
      "friseur berlin mitte",
      "steuerberater hamburg",
      "autowerkstatt köln ehrenfeld",
      "italienisches restaurant wien",
    ],
  },
  {
    id: "near-me",
    title: "2. Near-Me & Proximity Keywords",
    icon: <MapPin className="h-5 w-5 text-primary" />,
    description: "Suchanfragen mit Standortbezug",
    pattern: "[Dienstleistung] + in der Nähe / near me",
    examples: [
      "zahnarzt in der nähe",
      "restaurant in meiner nähe",
      "notdienst apotheke in der nähe",
      "bäckerei geöffnet jetzt in der nähe",
      "tankstelle in der nähe offen",
    ],
  },
  {
    id: "long-tail",
    title: "3. Long-Tail & Informational Keywords",
    icon: <Search className="h-5 w-5 text-primary" />,
    description: "Spezifische Fragen und Nischen-Keywords",
    pattern: "[Frage/Attribut] + [Dienstleistung] + [Stadt]",
    examples: [
      "bester zahnarzt für angstpatienten münchen",
      "veganes restaurant mit terrasse berlin",
      "günstige autowerkstatt tüv köln",
      "notdienst schlüsseldienst samstag wien",
      "hundefreundliches café zürich",
    ],
  },
  {
    id: "competitor",
    title: "4. Competitor & Alternative Keywords",
    icon: <Users className="h-5 w-5 text-primary" />,
    description: "Keywords, für die Wettbewerber ranken",
    pattern: "[Wettbewerber-Name] + Alternative / Bewertung",
    examples: [
      "[Konkurrent] bewertungen",
      "[Konkurrent] alternative [Stadt]",
      "bester [Branche] vs [Konkurrent]",
      "[Branche] vergleich [Stadt]",
      "[Branche] empfehlung [Stadtteil]",
    ],
  },
  {
    id: "seasonal",
    title: "5. Saisonale & Event Keywords",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    description: "Zeitabhängige und Event-bezogene Suchanfragen",
    pattern: "[Saison/Event] + [Dienstleistung] + [Stadt]",
    examples: [
      "weihnachtsmenü restaurant münchen 2026",
      "sommerterrasse café berlin",
      "heizung notdienst winter hamburg",
      "pollenallergie arzt frühling wien",
      "winterreifen wechsel angebot köln",
    ],
  },
  {
    id: "reputation",
    title: "6. Reputation & Trust Keywords",
    icon: <Star className="h-5 w-5 text-primary" />,
    description: "Bewertungs- und Vertrauens-Suchanfragen",
    pattern: "bester / top / empfohlener + [Dienstleistung] + [Stadt]",
    examples: [
      "bester zahnarzt münchen bewertungen",
      "top restaurants berlin 2026",
      "empfohlener anwalt familienrecht hamburg",
      "ausgezeichneter friseur wien",
      "höchstbewerteter handwerker zürich",
    ],
  },
];

// ─── Research steps ──────────────────────────────────────
interface ResearchStep {
  id: string;
  title: string;
  description: string;
  tasks: string[];
}

const researchSteps: ResearchStep[] = [
  {
    id: "brainstorm",
    title: "Schritt 1: Seed-Keywords sammeln",
    description: "Erstelle eine Liste aller Services, Produkte und Spezialisierungen deines Unternehmens.",
    tasks: [
      "Alle Dienstleistungen / Produkte auflisten",
      "Branchen-Synonyme sammeln (z.B. Zahnarzt = Dentist = Zahnmediziner)",
      "Stadtteile und Nachbarstädte notieren",
      "Umgangssprache / regionale Begriffe berücksichtigen",
      "Google Autocomplete für erste Ideen nutzen",
    ],
  },
  {
    id: "expand",
    title: "Schritt 2: Keywords erweitern",
    description: "Nutze Tools und Methoden, um deine Seed-Keywords zu erweitern.",
    tasks: [
      "Google Keyword Planner abfragen (kostenlos mit Google Ads Konto)",
      "Google 'Ähnliche Suchanfragen' & 'People Also Ask' notieren",
      "Ubersuggest für Keyword-Varianten nutzen",
      "Konkurrenten-Websites analysieren (Title Tags, H1s)",
      "Google Search Console: Bestehende Impressions prüfen",
    ],
  },
  {
    id: "evaluate",
    title: "Schritt 3: Keywords bewerten",
    description: "Priorisiere Keywords nach Suchvolumen, Schwierigkeit und Relevanz.",
    tasks: [
      "Suchvolumen pro Keyword erfassen",
      "Keyword Difficulty (KD) einschätzen",
      "Suchintention bestimmen (transaktional vs informational)",
      "Lokale Relevanz bewerten (passt es zu deinem Einzugsgebiet?)",
      "Conversion-Potenzial einschätzen (bringt es Kunden?)",
    ],
  },
  {
    id: "map",
    title: "Schritt 4: Keywords zuordnen (Keyword Mapping)",
    description: "Ordne jedes Keyword einer bestimmten Seite deiner Website zu.",
    tasks: [
      "Primäres Keyword pro Seite festlegen (1 Keyword = 1 Seite)",
      "Sekundäre Keywords als LSI-Support zuordnen",
      "Landingpages für Stadtteil-Keywords planen",
      "Blog-Content für informational Keywords planen",
      "FAQ-Seiten für Frage-Keywords erstellen",
    ],
  },
  {
    id: "track",
    title: "Schritt 5: Rankings tracken",
    description: "Richte Tracking ein und messe den Erfolg deiner Keyword-Strategie.",
    tasks: [
      "Ranking-Tracker einrichten (lokal, mit PLZ)",
      "Baseline-Rankings dokumentieren",
      "Monatliche Ranking-Entwicklung verfolgen",
      "Search Console Performance regelmäßig prüfen",
      "Keyword-Strategie quartalsweise überprüfen und anpassen",
    ],
  },
];

const totalTasks = researchSteps.reduce((sum, s) => sum + s.tasks.length, 0);

// ─── Spreadsheet template ────────────────────────────────
const spreadsheetTemplate = `LOCAL KEYWORD RESEARCH TEMPLATE
================================

UNTERNEHMENSDATEN:
──────────────────
Firmenname:        [Name]
Branche:           [z.B. Zahnarztpraxis]
Stadt:             [z.B. München]
Stadtteile:        [z.B. Schwabing, Maxvorstadt, Bogenhausen]
Einzugsgebiet:     [z.B. 15 km Radius]

KEYWORD-LISTE:
──────────────
| # | Keyword | Suchvolumen | KD | Intention | Zielseite | Aktuelles Ranking | Priorität |
|---|---------|-------------|----|-----------|-----------|--------------------|-----------|
| 1 | [branche] [stadt] | XXX | XX | Transaktional | Startseite | — | Hoch |
| 2 | [branche] in der nähe | XXX | XX | Transaktional | Startseite | — | Hoch |
| 3 | bester [branche] [stadt] | XXX | XX | Transaktional | Startseite | — | Mittel |
| 4 | [service 1] [stadt] | XXX | XX | Transaktional | /service-1 | — | Hoch |
| 5 | [service 2] [stadt] | XXX | XX | Transaktional | /service-2 | — | Hoch |
| 6 | [branche] [stadtteil 1] | XXX | XX | Transaktional | /stadtteil-1 | — | Mittel |
| 7 | [branche] [stadtteil 2] | XXX | XX | Transaktional | /stadtteil-2 | — | Mittel |
| 8 | [branche] bewertungen [stadt] | XXX | XX | Informational | /bewertungen | — | Mittel |
| 9 | [frage zu service] | XXX | XX | Informational | /blog/artikel | — | Niedrig |
| 10 | [branche] kosten [stadt] | XXX | XX | Transaktional | /preise | — | Hoch |

KEYWORD MAPPING:
────────────────
| Seite | Primäres Keyword | Sekundäre Keywords | Status |
|-------|------------------|--------------------|--------|
| Startseite | [branche] [stadt] | [branche] in der nähe, bester [branche] | ⬜ |
| /service-1 | [service 1] [stadt] | [service 1] kosten, [service 1] termin | ⬜ |
| /service-2 | [service 2] [stadt] | [service 2] erfahrungen | ⬜ |
| /stadtteil-1 | [branche] [stadtteil] | [service] [stadtteil] | ⬜ |
| /ueber-uns | [branche] [stadt] erfahrung | team [branche], qualifikation | ⬜ |
| /kontakt | [branche] termin [stadt] | [branche] öffnungszeiten | ⬜ |

RANKING-TRACKER (monatlich):
───────────────────────────
| Keyword | Jan | Feb | Mär | Apr | Mai | Jun | Jul | Aug | Sep | Okt | Nov | Dez |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| [kw 1]  |  —  |     |     |     |     |     |     |     |     |     |     |     |
| [kw 2]  |  —  |     |     |     |     |     |     |     |     |     |     |     |
| [kw 3]  |  —  |     |     |     |     |     |     |     |     |     |     |     |

NOTIZEN:
────────
- Letzte Überprüfung: TT.MM.JJJJ
- Nächste Überprüfung: TT.MM.JJJJ
- Wichtige Erkenntnisse: [Notizen]`;

const LocalKeywordResearchTemplate = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-keyword-research-template", language)!;

  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked]);

  const toggle = useCallback((key: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const resetAll = () => {
    setChecked(new Set());
    toast.success("Fortschritt zurückgesetzt");
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(spreadsheetTemplate);
    toast.success("Template in Zwischenablage kopiert!");
  };

  const percentage = Math.round((checked.size / totalTasks) * 100);

  const tocItems = [
    { id: "warum-keyword-research", title: "Warum lokale Keyword-Recherche?", level: 2 },
    { id: "keyword-typen", title: "6 Keyword-Typen für Local SEO", level: 2 },
    { id: "research-workflow", title: "5-Schritte Research Workflow", level: 2 },
    { id: "template-kopieren", title: "Spreadsheet-Vorlage kopieren", level: 2 },
    { id: "tools", title: "Kostenlose Tools", level: 2 },
    { id: "pro-tipps", title: "Pro-Tipps für DACH", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "6 Keyword-Typen: Core Service, Near-Me, Long-Tail, Competitor, Saisonal, Reputation",
    "5-Schritte-Workflow mit interaktiver Checkliste und Fortschrittsspeicherung",
    "Copy-ready Spreadsheet-Vorlage mit Keyword-Mapping und Ranking-Tracker",
    "Lokale Keywords haben oft weniger Volumen, aber 3-5× höhere Conversion-Rate",
    "DACH-spezifische Tipps: Dialekt, Umlaute und regionale Unterschiede beachten",
  ];

  const faqItems = [
    { question: "Wie viele Keywords sollte ich pro Seite optimieren?", answer: "Ein primäres Keyword und 2-4 sekundäre Keywords pro Seite. Jede Seite sollte ein einzigartiges primäres Keyword haben — keine Keyword-Kannibalisierung. Für Local SEO: Kombiniere dein Service-Keyword immer mit dem Standort (z.B. 'Zahnarzt München')." },
    { question: "Sind Near-Me-Keywords noch relevant, wenn Google den Standort automatisch erkennt?", answer: "Ja, aber anders. Google ordnet viele Suchanfragen automatisch lokal zu. Trotzdem suchen ~46% der Nutzer explizit mit 'in der Nähe'. Optimiere für beide Varianten: dein Service-Keyword + Stadt UND dein Service-Keyword allein (mit lokalen Signalen auf der Seite)." },
    { question: "Welches Suchvolumen ist für lokale Keywords 'gut genug'?", answer: "Lokale Keywords haben naturgemäß weniger Volumen als nationale. Schon 10-50 monatliche Suchanfragen können wertvoll sein, wenn die Kaufabsicht hoch ist. 'Notdienst Schlüsseldienst Hamburg' mit 30 Suchen/Monat kann wertvoller sein als 'Schlüsseldienst' mit 10.000 Suchen." },
    { question: "Sollte ich für jeden Stadtteil eine eigene Seite erstellen?", answer: "Nur wenn du dort tatsächlich Kunden bedienst und relevanten, einzigartigen Content bieten kannst. Thin Content (gleicher Text, nur Stadt getauscht) schadet mehr als es nützt. Fokussiere auf 3-5 Hauptstadtteile mit echtem lokalen Bezug." },
    { question: "Wie oft sollte ich meine Keyword-Recherche aktualisieren?", answer: "Quartalsweise: Prüfe Rankings, neue Keyword-Chancen und Suchvolumen-Veränderungen. Saisonale Keywords (Weihnachten, Sommer) 2-3 Monate vorher vorbereiten. Nach Google-Updates: Prüfe, ob sich Rankings verschoben haben." },
  ];

  const sources = [
    { title: "Google: Keyword Planner Help", url: "https://support.google.com/google-ads/answer/7337243", type: "article" as const },
    { title: "Ahrefs: Local Keyword Research Guide", url: "https://ahrefs.com/blog/local-keyword-research/", type: "article" as const },
    { title: "BrightLocal: Local Consumer Search Behavior 2024", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Moz: Local SEO Ranking Factors", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Local Keyword Research Template",
    description: "Systematische lokale Keyword-Recherche in 5 Schritten mit Vorlage.",
    step: researchSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <ArticleLayout article={article} additionalSchema={jsonLd} faqItems={faqItems}>

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* Progress Bar */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Research-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{totalTasks} Aufgaben ({percentage}%)
              </span>
              <button onClick={resetAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors underline">
                Zurücksetzen
              </button>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
          </div>
        </CardContent>
      </Card>

      {/* Why */}
      <section id="warum-keyword-research" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Warum lokale Keyword-Recherche?</h2>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">46% aller Google-Suchen haben einen lokalen Bezug</strong> — aber die meisten lokalen Unternehmen
          optimieren nur für 2-3 offensichtliche Keywords. Systematische Keyword-Recherche deckt Chancen auf,
          die deine Konkurrenten übersehen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary mb-1">46%</p>
              <p className="text-sm text-muted-foreground">aller Google-Suchen haben lokalen Bezug</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary mb-1">3-5×</p>
              <p className="text-sm text-muted-foreground">höhere Conversion-Rate bei lokalen Keywords</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-primary mb-1">78%</p>
              <p className="text-sm text-muted-foreground">der lokalen Suchen führen zu Offline-Kauf</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Keyword Types */}
      <section id="keyword-typen" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">6 Keyword-Typen für Local SEO</h2>
        <p className="text-muted-foreground mb-6">
          Jeder Typ hat eine andere Suchintention. Eine ausgewogene Mischung deckt den gesamten Kundenweg ab —
          von der ersten Recherche bis zur Buchung.
        </p>

        <div className="space-y-6">
          {keywordCategories.map(cat => (
            <Card key={cat.id}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  {cat.icon}
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{cat.description}</p>
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                    Muster: {cat.pattern}
                  </Badge>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Beispiele:</p>
                  <ul className="space-y-1">
                    {cat.examples.map((ex, i) => (
                      <li key={i} className="text-sm text-foreground flex items-center gap-2">
                        <span className="text-primary">→</span> {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-keyword-research-template" position="middle" />

      {/* Research Workflow */}
      <section id="research-workflow" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">5-Schritte Research Workflow</h2>
        <p className="text-muted-foreground mb-6">
          Arbeite die Schritte der Reihe nach ab. Dein Fortschritt wird automatisch gespeichert.
        </p>

        {researchSteps.map((step, stepIdx) => {
          const stepChecked = step.tasks.filter((_, i) => checked.has(`${step.id}-${i}`)).length;
          const stepComplete = stepChecked === step.tasks.length;
          return (
            <div key={step.id} className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {stepIdx + 1}
                  </span>
                  {step.title}
                </h3>
                {stepComplete && (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">✓ Komplett</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3 ml-9">{step.description}</p>
              <div className="space-y-2 ml-9">
                {step.tasks.map((task, i) => {
                  const key = `${step.id}-${i}`;
                  const isChecked = checked.has(key);
                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 text-left group ${
                        isChecked
                          ? 'bg-green-50 border-green-300 hover:bg-green-100'
                          : 'bg-card border-border hover:bg-muted/50 hover:border-primary/30'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${
                        isChecked ? 'bg-green-500 border-green-500' : 'border-muted-foreground/30 group-hover:border-primary/50'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`flex-1 text-sm ${isChecked ? 'text-green-700 line-through' : 'text-foreground'}`}>
                        {task}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* Copy Template */}
      <section id="template-kopieren" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Spreadsheet-Vorlage kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere diese Vorlage in Google Sheets, Excel oder Notion. Sie enthält Keyword-Liste, Keyword Mapping und monatlichen Ranking-Tracker.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Local Keyword Research Template
              </h3>
              <Button onClick={copyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Template kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {spreadsheetTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Kostenlose Tools für Keyword-Recherche</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tool</TableHead>
                <TableHead>Kosten</TableHead>
                <TableHead>Beste für</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Google Keyword Planner", cost: "Kostenlos (mit Ads-Konto)", use: "Suchvolumen, Keyword-Ideen" },
                { name: "Google Search Console", cost: "Kostenlos", use: "Bestehende Rankings & Impressions" },
                { name: "Google Autocomplete", cost: "Kostenlos", use: "Echtzeit-Suchvorschläge" },
                { name: "Ubersuggest", cost: "3 Abfragen/Tag gratis", use: "Keyword-Varianten, KD-Score" },
                { name: "AnswerThePublic", cost: "Begrenzt kostenlos", use: "Frage-Keywords visualisiert" },
                { name: "AlsoAsked", cost: "Begrenzt kostenlos", use: "People Also Ask Clustering" },
                { name: "Keyword Surfer (Chrome)", cost: "Kostenlos", use: "Suchvolumen direkt in Google SERPs" },
              ].map(t => (
                <TableRow key={t.name}>
                  <TableCell className="font-medium">{t.name}</TableCell>
                  <TableCell className="text-sm">{t.cost}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{t.use}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Pro Tips */}
      <section id="pro-tipps" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Pro-Tipps für den DACH-Markt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" /> Umlaute & Schreibweisen
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• „Frisör" vs „Friseur" — beide Varianten prüfen</li>
                <li>• „Zürich" vs „Zuerich" — Umlaute werden oft ohne ü gesucht</li>
                <li>• „Straße" vs „Strasse" — CH-Schreibweise beachten</li>
                <li>• Dialekt: „Metzger" (Süd) vs „Fleischer" (Nord)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> Regionale Unterschiede
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Deutschland: PLZ + Stadt üblich in Suchen</li>
                <li>• Österreich: Bezirke statt Stadtteile (z.B. „1. Bezirk Wien")</li>
                <li>• Schweiz: Kanton-Angabe relevant (z.B. „Zürich ZH")</li>
                <li>• Grenzregionen: Mehrsprachig optimieren (DE/FR/IT)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" /> Häufige Fehler
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Nur auf High-Volume Keywords fokussieren</li>
                <li>• Keyword-Kannibalisierung (gleiche Keywords auf mehreren Seiten)</li>
                <li>• Stadtteil-Seiten ohne einzigartigen Content</li>
                <li>• Suchintention ignorieren (informational ≠ transaktional)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" /> Quick Wins
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Search Console: Keywords auf Pos. 11-20 → schnelle Verbesserung</li>
                <li>• „Fragen"-Keywords für FAQ-Schema nutzen</li>
                <li>• Saisonale Keywords 2 Monate vorher optimieren</li>
                <li>• Google Maps Suchanfragen separat tracken</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/local-seo-keywords-finden" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Keywords finden – Der komplette Guide</Link></li>
            <li>→ <Link to="/blog/local-content-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local Content Marketing Strategien</Link></li>
            <li>→ <Link to="/blog/local-seo-notdienst-keywords" className="text-primary underline decoration-primary/30 hover:decoration-primary">Notdienst-Keywords für Local SEO</Link></li>
            <li>→ <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Audit Checkliste</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="local-keyword-research-template" />
    </ArticleLayout>
  );
};

export default LocalKeywordResearchTemplate;
