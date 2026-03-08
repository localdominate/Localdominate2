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
  Copy, CheckCircle2, Calendar, MapPin, Star, Globe, Search,
  FileText, Target, Clock, Building2, BarChart3, Zap, Eye,
  Camera, MessageSquare, LinkIcon, AlertTriangle, TrendingUp
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "local-seo-monthly-checklist-progress";

interface ChecklistSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  frequency: string;
  tasks: { text: string; priority: "kritisch" | "hoch" | "mittel"; timeEstimate: string }[];
}

const sections: ChecklistSection[] = [
  {
    id: "gbp-pflege",
    title: "Google Business Profil Pflege",
    icon: <Building2 className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "Öffnungszeiten auf Aktualität prüfen (inkl. Feiertage)", priority: "hoch", timeEstimate: "5 Min" },
      { text: "Mindestens 2 neue Google Posts veröffentlichen", priority: "hoch", timeEstimate: "20 Min" },
      { text: "3-5 neue Fotos hochladen (Geo-getaggt)", priority: "hoch", timeEstimate: "15 Min" },
      { text: "Neue Produkte / Services aktualisieren", priority: "mittel", timeEstimate: "10 Min" },
      { text: "Q&A-Bereich prüfen und beantworten", priority: "mittel", timeEstimate: "10 Min" },
      { text: "GBP Insights / Performance-Daten notieren", priority: "hoch", timeEstimate: "10 Min" },
    ],
  },
  {
    id: "bewertungen",
    title: "Bewertungsmanagement",
    icon: <Star className="h-5 w-5 text-primary" />,
    frequency: "Wöchentlich / Monatlich",
    tasks: [
      { text: "Alle neuen Bewertungen beantworten (positiv & negativ)", priority: "kritisch", timeEstimate: "15 Min" },
      { text: "Keywords in Bewertungs-Antworten verwenden", priority: "mittel", timeEstimate: "5 Min" },
      { text: "3-5 neue Bewertungen aktiv anfragen", priority: "hoch", timeEstimate: "15 Min" },
      { text: "Bewertungs-Durchschnitt und Anzahl dokumentieren", priority: "hoch", timeEstimate: "5 Min" },
      { text: "Fake- oder Spam-Bewertungen melden", priority: "hoch", timeEstimate: "5 Min" },
      { text: "Bewertungen auf anderen Plattformen prüfen (Yelp, Jameda etc.)", priority: "mittel", timeEstimate: "10 Min" },
    ],
  },
  {
    id: "content",
    title: "Content & On-Page SEO",
    icon: <FileText className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "1 neuen lokalen Blog-Artikel veröffentlichen", priority: "hoch", timeEstimate: "2-4 Std" },
      { text: "Bestehende Seiten auf aktuelle Infos prüfen", priority: "mittel", timeEstimate: "30 Min" },
      { text: "Title Tags & Meta Descriptions optimieren (wenn nötig)", priority: "mittel", timeEstimate: "15 Min" },
      { text: "Interne Verlinkung neuer Inhalte sicherstellen", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Lokale Events / News als Content nutzen", priority: "mittel", timeEstimate: "30 Min" },
    ],
  },
  {
    id: "technisch",
    title: "Technisches SEO",
    icon: <Globe className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "Core Web Vitals prüfen (PageSpeed Insights)", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Mobile Darstellung testen", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Broken Links prüfen und beheben", priority: "mittel", timeEstimate: "15 Min" },
      { text: "Schema Markup validieren (Rich Results Test)", priority: "mittel", timeEstimate: "10 Min" },
      { text: "Search Console auf Fehler & Warnungen prüfen", priority: "hoch", timeEstimate: "10 Min" },
      { text: "XML-Sitemap auf Vollständigkeit prüfen", priority: "mittel", timeEstimate: "5 Min" },
    ],
  },
  {
    id: "citations",
    title: "Citations & NAP-Konsistenz",
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    frequency: "Monatlich / Quartalsweise",
    tasks: [
      { text: "NAP-Daten in Top-5 Verzeichnissen prüfen", priority: "hoch", timeEstimate: "15 Min" },
      { text: "Neue Citation-Möglichkeiten identifizieren", priority: "mittel", timeEstimate: "15 Min" },
      { text: "Duplikate in Verzeichnissen suchen und melden", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Social-Media-Profile auf NAP-Konsistenz prüfen", priority: "mittel", timeEstimate: "10 Min" },
    ],
  },
  {
    id: "tracking",
    title: "Tracking & Reporting",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "Lokale Keyword-Rankings dokumentieren", priority: "hoch", timeEstimate: "15 Min" },
      { text: "Google Analytics: Lokalen Traffic auswerten", priority: "hoch", timeEstimate: "15 Min" },
      { text: "GBP-Aktionen tracken (Anrufe, Routen, Website-Klicks)", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Conversion-Daten erfassen (Formulare, Anrufe)", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Monatlichen Report erstellen", priority: "mittel", timeEstimate: "30 Min" },
      { text: "Vormonat vergleichen und Trends erkennen", priority: "mittel", timeEstimate: "15 Min" },
    ],
  },
  {
    id: "linkbuilding",
    title: "Lokales Linkbuilding",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "1-2 lokale Backlink-Möglichkeiten recherchieren", priority: "mittel", timeEstimate: "20 Min" },
      { text: "Lokale Kooperationen / Sponsoring prüfen", priority: "mittel", timeEstimate: "15 Min" },
      { text: "Pressearbeit: Lokale Medien für Stories kontaktieren", priority: "mittel", timeEstimate: "30 Min" },
      { text: "Bestehende Backlinks auf Qualität prüfen", priority: "mittel", timeEstimate: "10 Min" },
    ],
  },
  {
    id: "wettbewerb",
    title: "Wettbewerber-Monitoring",
    icon: <Eye className="h-5 w-5 text-primary" />,
    frequency: "Monatlich",
    tasks: [
      { text: "Top-3 Konkurrenten im Local Pack beobachten", priority: "hoch", timeEstimate: "10 Min" },
      { text: "Neue Bewertungen der Konkurrenz checken", priority: "mittel", timeEstimate: "10 Min" },
      { text: "Konkurrenz-GBP auf neue Posts / Fotos prüfen", priority: "mittel", timeEstimate: "10 Min" },
      { text: "Keyword-Rankings der Konkurrenz vergleichen", priority: "mittel", timeEstimate: "15 Min" },
    ],
  },
];

const totalTasks = sections.reduce((sum, s) => sum + s.tasks.length, 0);

const monthlyTemplate = `LOCAL SEO MONTHLY CHECKLIST
===========================
Monat: [Monat Jahr]
Unternehmen: [Name]

GOOGLE BUSINESS PROFIL:
☐ Öffnungszeiten geprüft
☐ 2+ Google Posts veröffentlicht
☐ 3-5 neue Fotos hochgeladen
☐ Produkte / Services aktualisiert
☐ Q&A beantwortet
☐ GBP Insights dokumentiert

BEWERTUNGEN:
☐ Alle Bewertungen beantwortet
☐ Keywords in Antworten verwendet
☐ 3-5 neue Bewertungen angefragt
☐ Bewertungs-Score dokumentiert
☐ Spam-Bewertungen gemeldet
☐ Andere Plattformen geprüft

CONTENT & ON-PAGE:
☐ 1 lokaler Blog-Artikel veröffentlicht
☐ Bestehende Seiten aktualisiert
☐ Title Tags / Meta optimiert
☐ Interne Verlinkung geprüft
☐ Lokale Events/News genutzt

TECHNISCHES SEO:
☐ Core Web Vitals geprüft
☐ Mobile Darstellung getestet
☐ Broken Links behoben
☐ Schema Markup validiert
☐ Search Console geprüft
☐ XML-Sitemap geprüft

CITATIONS & NAP:
☐ Top-5 Verzeichnisse geprüft
☐ Neue Citations identifiziert
☐ Duplikate gemeldet
☐ Social Media NAP geprüft

TRACKING & REPORTING:
☐ Rankings dokumentiert
☐ Lokalen Traffic ausgewertet
☐ GBP-Aktionen getrackt
☐ Conversions erfasst
☐ Monatsbericht erstellt
☐ Vormonats-Vergleich

LINKBUILDING:
☐ 1-2 Backlink-Chancen recherchiert
☐ Lokale Kooperationen geprüft
☐ Lokale Medien kontaktiert
☐ Backlink-Qualität geprüft

WETTBEWERBER:
☐ Top-3 Local Pack beobachtet
☐ Konkurrenz-Bewertungen gecheckt
☐ Konkurrenz-GBP geprüft
☐ Ranking-Vergleich erstellt

ZUSAMMENFASSUNG:
Erledigte Punkte: __/${totalTasks}
Wichtigste Erkenntnis: ___________
Top-Priorität nächster Monat: ___________`;

const LocalSeoMonthlyChecklist = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-monthly-checklist", language)!;

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
    toast.success("Checkliste zurückgesetzt — bereit für den neuen Monat!");
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(monthlyTemplate);
    toast.success("Monatliche Checkliste in Zwischenablage kopiert!");
  };

  const percentage = Math.round((checked.size / totalTasks) * 100);
  const totalTimeMin = sections.reduce((sum, s) => sum + s.tasks.reduce((ts, t) => {
    const match = t.timeEstimate.match(/(\d+)/);
    return ts + (match ? parseInt(match[1]) : 0);
  }, 0), 0);

  const priorityStyle = (p: string) =>
    p === "kritisch" ? "text-destructive bg-destructive/10" :
    p === "hoch" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const tocItems = [
    { id: "ueberblick", title: "Überblick: 8 Bereiche", level: 2 },
    ...sections.map(s => ({ id: s.id, title: s.title, level: 2 })),
    { id: "zeitplan", title: "Zeitplan: Wann was erledigen", level: 2 },
    { id: "template", title: "Checkliste zum Kopieren", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `${totalTasks} Aufgaben in 8 Bereichen — ca. ${Math.round(totalTimeMin / 60)} Stunden pro Monat`,
    "Interaktive Checkliste mit automatischer Fortschrittsspeicherung",
    "Priorisiert nach Kritisch / Hoch / Mittel mit Zeitschätzung pro Aufgabe",
    "GBP-Pflege und Bewertungsmanagement haben den höchsten ROI",
    "Copy-ready Vorlage für wiederkehrende monatliche Nutzung",
  ];

  const faqItems = [
    { question: "Wie viel Zeit sollte ich monatlich für Local SEO einplanen?", answer: `Die komplette Checkliste benötigt ca. ${Math.round(totalTimeMin / 60)} Stunden pro Monat. Für KMU mit begrenztem Budget: Fokussiere auf GBP-Pflege (1 Std), Bewertungen (1 Std) und Tracking (1 Std) — das sind die 3 Stunden mit dem höchsten ROI.` },
    { question: "Was ist der Unterschied zur großen Local SEO Checkliste?", answer: "Die große Checkliste ist ein einmaliger Audit / Setup-Guide mit 80+ Punkten. Diese monatliche Checkliste ist für die laufende Pflege — die wiederkehrenden Aufgaben, die dein Ranking langfristig sichern und verbessern." },
    { question: "Welche Aufgaben kann ich automatisieren?", answer: "Ranking-Tracking, Core Web Vitals Monitoring, Broken-Link-Checks und Bewertungs-Benachrichtigungen lassen sich automatisieren. Google Alerts für deinen Firmennamen ist kostenlos. Für den Rest (Antworten, Content, Fotos) ist menschliche Qualität wichtig." },
    { question: "Sollte ich die Checkliste jeden Monat komplett abarbeiten?", answer: "Idealerweise ja. In der Praxis: Kritische und hohe Prioritäten jeden Monat, mittlere Prioritäten mindestens alle 2 Monate. Das Wichtigste ist Konsistenz — lieber jeden Monat 70% als einmal im Quartal 100%." },
    { question: "Brauche ich für jeden Standort eine eigene Checkliste?", answer: "Ja, jeder Standort braucht individuelle Pflege (eigene Fotos, Bewertungs-Antworten, Posts). Technisches SEO und Content können standortübergreifend erledigt werden. Bei 5+ Standorten lohnt sich ein Teamkalender." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Local SEO Industry Survey 2024", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Google: Business Profile Best Practices", url: "https://support.google.com/business/answer/7091", type: "article" as const },
    { title: "Moz: The Local SEO Checklist", url: "https://moz.com/learn/seo/local", type: "article" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Local SEO Monthly Checklist",
    description: `Monatliche Local SEO Checkliste mit ${totalTasks} Aufgaben in 8 Bereichen.`,
    totalTime: `PT${Math.round(totalTimeMin / 60)}H`,
    step: sections.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.tasks.map(t => t.text).join(". "),
    })),
  };

  return (
    <ArticleLayout article={article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* Progress */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Monats-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{totalTasks} Aufgaben ({percentage}%)
              </span>
              <button onClick={resetAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors underline">
                Neuer Monat
              </button>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
          </div>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive inline-block" /> Kritisch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block" /> Hoch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" /> Mittel</span>
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <section id="ueberblick" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Überblick: 8 Bereiche, {totalTasks} Aufgaben</h2>
        <p className="text-muted-foreground mb-6">
          Diese monatliche Checkliste deckt alle wiederkehrenden Local-SEO-Aufgaben ab, die dein Ranking langfristig sichern.
          Jede Aufgabe hat eine <strong className="text-foreground">Zeitschätzung</strong> und <strong className="text-foreground">Priorität</strong>,
          damit du auch bei knapper Zeit die wichtigsten Punkte erledigst.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {sections.map(s => {
            const sChecked = s.tasks.filter((_, i) => checked.has(`${s.id}-${i}`)).length;
            const sComplete = sChecked === s.tasks.length;
            return (
              <a key={s.id} href={`#${s.id}`} className="block">
                <Card className={`text-center p-3 hover:border-primary/40 transition-colors ${sComplete ? 'border-green-300 bg-green-50' : ''}`}>
                  <div className="flex justify-center mb-1">{s.icon}</div>
                  <p className="text-xs font-medium text-foreground leading-tight">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{sChecked}/{s.tasks.length}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* Sections */}
      {sections.map(section => {
        const sChecked = section.tasks.filter((_, i) => checked.has(`${section.id}-${i}`)).length;
        const sComplete = sChecked === section.tasks.length;
        const sTime = section.tasks.reduce((sum, t) => {
          const m = t.timeEstimate.match(/(\d+)/);
          return sum + (m ? parseInt(m[1]) : 0);
        }, 0);

        return (
          <section key={section.id} id={section.id} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" /> ~{sTime} Min
                </Badge>
                {sComplete && (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">✓ Erledigt</Badge>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {section.tasks.map((task, i) => {
                const key = `${section.id}-${i}`;
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
                      {task.text}
                    </span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground hidden sm:inline">{task.timeEstimate}</span>
                      <Badge variant="outline" className={`text-xs ${priorityStyle(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </Badge>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <BlogCTAABTest articleSlug="local-seo-monthly-checklist" position="middle" />

      {/* Time plan */}
      <section id="zeitplan" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Zeitplan: Wann was erledigen</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" /> Woche 1: Bewertungen & GBP
              </h3>
              <p className="text-sm text-muted-foreground">
                Bewertungen beantworten, neue anfragen. GBP-Öffnungszeiten prüfen, ersten Google Post veröffentlichen. (~1,5 Std)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" /> Woche 2: Content & Technik
              </h3>
              <p className="text-sm text-muted-foreground">
                Blog-Artikel erstellen oder aktualisieren. Technische Checks (Core Web Vitals, Search Console, Broken Links). (~2-3 Std)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" /> Woche 3: Citations & Linkbuilding
              </h3>
              <p className="text-sm text-muted-foreground">
                NAP in Verzeichnissen prüfen, neue Citations anlegen. Lokale Backlink-Chancen recherchieren, Kooperationen prüfen. (~1,5 Std)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" /> Woche 4: Tracking & Reporting
              </h3>
              <p className="text-sm text-muted-foreground">
                Rankings dokumentieren, Traffic auswerten, Monatsbericht erstellen. Wettbewerber checken. Prioritäten für nächsten Monat setzen. (~1,5 Std)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Copy Template */}
      <section id="template" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Checkliste zum Kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere die Vorlage in dein Projektmanagement-Tool, Notion oder Google Docs und nutze sie jeden Monat erneut.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Monthly Checklist Template
              </h3>
              <Button onClick={copyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {monthlyTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Scoring */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" /> Dein Monats-Ergebnis
          </h3>
          <div className="flex items-center gap-4">
            <span className={`text-4xl font-bold ${
              percentage >= 80 ? 'text-green-700' : percentage >= 50 ? 'text-primary' : 'text-destructive'
            }`}>{percentage}%</span>
            <div className="text-sm text-muted-foreground">
              <p>{checked.size} von {totalTasks} Aufgaben erledigt</p>
              <p className="mt-1">
                {percentage >= 80 ? '🎉 Ausgezeichnet! Du hältst dein Local SEO konsistent am Laufen.' :
                 percentage >= 50 ? '💪 Gute Arbeit! Versuche nächsten Monat die kritischen Punkte zuerst.' :
                 '🚀 Starte mit GBP-Pflege und Bewertungen — das bringt die schnellsten Ergebnisse.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/local-seo-checkliste-komplett" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Checkliste: 80+ Punkte (Einmaliger Setup)</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
            <li>→ <Link to="/blog/google-maps-audit-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Audit Template</Link></li>
            <li>→ <Link to="/blog/citation-tracking-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Citation Tracking Spreadsheet</Link></li>
            <li>→ <Link to="/blog/local-keyword-research-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local Keyword Research Template</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="local-seo-monthly-checklist" />
    </ArticleLayout>
  );
};

export default LocalSeoMonthlyChecklist;
