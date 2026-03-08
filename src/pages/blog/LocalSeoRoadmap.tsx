import NinetyDayImplementationPlan from "@/components/blog/NinetyDayImplementationPlan";
import CompetitiveAnalysisFramework from "@/components/blog/CompetitiveAnalysisFramework";
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
  Copy, CheckCircle2, Target, Calendar, MapPin, Star,
  Search, FileText, BarChart3, Zap, Clock, Milestone,
  Building2, TrendingUp, Users, ArrowRight, LinkIcon,
  Flag, Trophy, Rocket, Eye
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "local-seo-roadmap-progress";

interface RoadmapWeek {
  week: number;
  phase: string;
  phaseColor: string;
  tasks: string[];
  kpiTarget: string;
  milestone?: string;
}

const roadmapWeeks: RoadmapWeek[] = [
  { week: 1, phase: "Analyse", phaseColor: "bg-blue-500", tasks: ["Google Business Profil auditieren", "NAP-Konsistenz aller Einträge prüfen", "Wettbewerber-Analyse: Top 5 im Local Pack"], kpiTarget: "Ist-Zustand dokumentiert", milestone: "Audit Report fertig" },
  { week: 2, phase: "Analyse", phaseColor: "bg-blue-500", tasks: ["Keyword-Recherche: 15 lokale Keywords", "Baseline-Rankings dokumentieren", "Website Technical Check (Speed, Mobile, SSL)"], kpiTarget: "Keyword-Map erstellt" },
  { week: 3, phase: "Fundament", phaseColor: "bg-emerald-500", tasks: ["GBP vollständig optimieren (Fotos, Beschreibung, Kategorien)", "NAP auf Website: Footer + Kontaktseite", "LocalBusiness Schema Markup implementieren"], kpiTarget: "GBP-Score 100%" },
  { week: 4, phase: "Fundament", phaseColor: "bg-emerald-500", tasks: ["Title Tags & Meta Descriptions optimieren", "Google Search Console + Analytics einrichten", "Mobile Ladezeit unter 3 Sekunden"], kpiTarget: "Core Web Vitals bestanden", milestone: "Fundament steht" },
  { week: 5, phase: "Citations", phaseColor: "bg-amber-500", tasks: ["Top-5 Verzeichnisse eintragen (Gelbe Seiten, Das Örtliche, etc.)", "Bing Places + Apple Business Connect", "3 branchenspezifische Verzeichnisse"], kpiTarget: "10+ Citations aktiv" },
  { week: 6, phase: "Citations", phaseColor: "bg-amber-500", tasks: ["Duplikate suchen und bereinigen", "Social-Media-Profile NAP aktualisieren", "Citation-Tracking starten"], kpiTarget: "NAP 100% konsistent", milestone: "Citation-Basis steht" },
  { week: 7, phase: "Bewertungen", phaseColor: "bg-rose-500", tasks: ["Bewertungs-Link erstellen und testen", "Bewertungs-Workflow definieren", "Erste 5 Kunden aktiv um Bewertung bitten"], kpiTarget: "5 neue Bewertungen" },
  { week: 8, phase: "Bewertungen", phaseColor: "bg-rose-500", tasks: ["Antwort-Templates erstellen (positiv + negativ)", "QR-Code / NFC-Tag im Geschäft", "Review-Schema auf Website"], kpiTarget: "100% Antwort-Rate", milestone: "Bewertungs-System läuft" },
  { week: 9, phase: "Content", phaseColor: "bg-violet-500", tasks: ["Lokale Landingpage für Haupt-Service erstellen", "FAQ-Seite mit 10+ lokalen Fragen", "Erster Google Post veröffentlichen"], kpiTarget: "3 neue Seiten live" },
  { week: 10, phase: "Content", phaseColor: "bg-violet-500", tasks: ["Blog-Artikel zu lokalem Thema veröffentlichen", "Bildoptimierung: Geo-Tags + Alt-Texte", "Google Posts-Kalender für 3 Monate"], kpiTarget: "Content-Kalender steht" },
  { week: 11, phase: "Linkbuilding", phaseColor: "bg-orange-500", tasks: ["3 lokale Vereine/Verbände kontaktieren", "Lokale Sponsoring-Möglichkeiten prüfen", "Gastbeitrag für lokales Medium pitchen"], kpiTarget: "3+ lokale Backlinks" },
  { week: 12, phase: "Tracking", phaseColor: "bg-cyan-500", tasks: ["Ranking-Report erstellen (Vorher/Nachher)", "GBP Insights analysieren", "Strategie für Monat 4-6 planen"], kpiTarget: "ROI-Report erstellt", milestone: "90-Tage-Ziel erreicht! 🎯" },
];

const kpiMilestones = [
  { label: "Woche 2", metric: "Audit abgeschlossen", icon: <Search className="h-4 w-4" /> },
  { label: "Woche 4", metric: "GBP + Website optimiert", icon: <Building2 className="h-4 w-4" /> },
  { label: "Woche 6", metric: "15+ Citations aktiv", icon: <LinkIcon className="h-4 w-4" /> },
  { label: "Woche 8", metric: "10+ Bewertungen (Ø 4,5+)", icon: <Star className="h-4 w-4" /> },
  { label: "Woche 10", metric: "5+ lokale Content-Seiten", icon: <FileText className="h-4 w-4" /> },
  { label: "Woche 12", metric: "Top-5 für Haupt-Keyword", icon: <Trophy className="h-4 w-4" /> },
];

const roadmapTemplate = `LOCAL SEO 90-TAGE ROADMAP
=========================
Unternehmen: [Name]
Branche: [Branche]
Stadt / Region: [Stadt]
Startdatum: [TT.MM.JJJJ]

WOCHE 1-2: ANALYSE & AUDIT
───────────────────────────
☐ GBP auditieren
☐ NAP-Konsistenz prüfen
☐ Top-5 Wettbewerber analysieren
☐ 15 lokale Keywords recherchieren
☐ Baseline-Rankings dokumentieren
☐ Website Technical Check
→ Meilenstein: Audit Report fertig
→ KPI: Ist-Zustand vollständig dokumentiert

WOCHE 3-4: FUNDAMENT
─────────────────────
☐ GBP vollständig optimieren
☐ NAP auf Website platzieren
☐ LocalBusiness Schema implementieren
☐ Title Tags & Meta Descriptions
☐ Search Console + Analytics
☐ Mobile Performance < 3 Sek.
→ Meilenstein: Fundament steht
→ KPI: GBP-Score 100%, Core Web Vitals bestanden

WOCHE 5-6: CITATIONS
─────────────────────
☐ Top-5 Verzeichnisse eintragen
☐ Bing Places + Apple Business Connect
☐ 3 Branchenverzeichnisse
☐ Duplikate bereinigen
☐ Social-Media NAP aktualisieren
→ Meilenstein: Citation-Basis steht
→ KPI: 15+ Citations, NAP 100% konsistent

WOCHE 7-8: BEWERTUNGEN
───────────────────────
☐ Bewertungs-Link erstellen
☐ Workflow definieren (wann, wie, wer)
☐ Erste 5 Kunden um Bewertung bitten
☐ Antwort-Templates erstellen
☐ QR-Code im Geschäft
☐ Review-Schema implementieren
→ Meilenstein: Bewertungs-System läuft
→ KPI: 10+ Bewertungen, 100% Antwort-Rate

WOCHE 9-10: CONTENT
────────────────────
☐ Lokale Landingpage für Haupt-Service
☐ FAQ-Seite (10+ Fragen)
☐ Erster Google Post
☐ Blog-Artikel zu lokalem Thema
☐ Bildoptimierung (Geo-Tags, Alt-Texte)
☐ Google Posts-Kalender (3 Monate)
→ KPI: 5+ neue lokale Seiten live

WOCHE 11-12: LINKBUILDING & REVIEW
───────────────────────────────────
☐ 3 lokale Vereine/Verbände kontaktieren
☐ Sponsoring-Möglichkeiten prüfen
☐ Gastbeitrag pitchen
☐ Ranking-Report (Vorher/Nachher)
☐ GBP Insights analysieren
☐ Strategie für Monat 4-6 planen
→ Meilenstein: 90-Tage-Ziel erreicht! 🎯
→ KPI: Top-5 für Haupt-Keyword, 3+ lokale Backlinks

ERGEBNIS-TRACKING:
──────────────────
| KPI | Baseline | Woche 4 | Woche 8 | Woche 12 |
|-----|----------|---------|---------|----------|
| Local Pack Position | — | — | — | — |
| GBP-Aufrufe/Monat | — | — | — | — |
| Bewertungen (Anzahl) | — | — | — | — |
| Bewertungs-Ø | — | — | — | — |
| Website-Besucher (lokal) | — | — | — | — |
| Anrufe über GBP | — | — | — | — |
| Citations (Anzahl) | — | — | — | — |`;

const totalTasks = roadmapWeeks.reduce((sum, w) => sum + w.tasks.length, 0);

const LocalSeoRoadmap = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-roadmap-90-tage", language)!;

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
    toast.success("Roadmap zurückgesetzt");
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(roadmapTemplate);
    toast.success("Roadmap Template kopiert!");
  };

  const percentage = Math.round((checked.size / totalTasks) * 100);

  // Group weeks by phase for the visual timeline
  const phases = Array.from(new Set(roadmapWeeks.map(w => w.phase)));
  const phaseColors: Record<string, string> = {};
  roadmapWeeks.forEach(w => { phaseColors[w.phase] = w.phaseColor; });

  const tocItems = [
    { id: "visual-roadmap", title: "Visuelle 90-Tage-Roadmap", level: 2 },
    { id: "kpi-meilensteine", title: "KPI-Meilensteine", level: 2 },
    { id: "wochenplan", title: "Woche-für-Woche Aktionsplan", level: 2 },
    { id: "template", title: "Roadmap Template kopieren", level: 2 },
    { id: "tipps", title: "Umsetzungs-Tipps", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `12 Wochen, 6 Phasen, ${totalTasks} Aufgaben — strukturierte Roadmap von Analyse bis ROI-Review`,
    "Visuelle Gantt-Timeline mit Wochen-Blöcken und Meilenstein-Markern",
    "KPI-Targets pro Phase: Messbare Ziele statt vager Vorsätze",
    "Copy-ready Roadmap-Template mit integriertem Ergebnis-Tracking",
    "Realistische Zeitplanung für KMU mit begrenzten Ressourcen",
  ];

  const faqItems = [
    { question: "Was unterscheidet die Roadmap vom Strategy Planner?", answer: "Die Roadmap ist wochenbasiert und zeigt dir visuell, welche Aufgaben wann dran sind — wie ein Gantt-Chart. Der Strategy Planner gruppiert nach Phasen mit Prioritäten. Beide ergänzen sich: Nutze den Planner für die Detailplanung und die Roadmap für den Überblick." },
    { question: "Kann ich die 90 Tage auf 60 oder 120 Tage anpassen?", answer: "Ja! Die Phasen Analyse + Fundament (Woche 1-4) solltest du beibehalten. Citations und Bewertungen kannst du komprimieren oder ausdehnen. Content und Linkbuilding sind die flexibelsten Phasen — bei weniger Zeit fokussiere auf GBP-Optimierung und Bewertungen für den schnellsten ROI." },
    { question: "Was mache ich nach den 90 Tagen?", answer: "Ab Monat 4: Monatliches Review (Rankings, GBP Insights, Bewertungen), Content weiter ausbauen (2-4 Seiten/Monat), Bewertungs-Akquise fortsetzen, und Linkbuilding-Beziehungen pflegen. Nutze unser Monthly Checklist Template für den laufenden Betrieb." },
    { question: "Welche Phase bringt den schnellsten ROI?", answer: "GBP-Optimierung (Woche 3-4) und erste Bewertungen (Woche 7-8) zeigen den schnellsten Impact. Viele Unternehmen sehen erste Ranking-Verbesserungen schon nach 2-4 Wochen GBP-Optimierung." },
    { question: "Brauche ich bezahlte Tools für die Roadmap?", answer: "Nein! Die Basis-Umsetzung funktioniert komplett kostenlos mit Google Business, Search Console und Analytics. Tracking-Tools (ab ~30€/Monat) machen die Erfolgsmessung einfacher, sind aber nicht zwingend nötig." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Local SEO Industry Report 2024", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Google: Business Profile Hilfe", url: "https://support.google.com/business/answer/7091", type: "article" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Local SEO 90-Tage Roadmap",
    description: `Strukturierte 90-Tage-Roadmap mit ${totalTasks} Aufgaben in 12 Wochen für lokale Suchmaschinenoptimierung.`,
    totalTime: "P90D",
    step: roadmapWeeks.map((w, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Woche ${w.week}: ${w.phase}`,
      text: w.tasks.join(", "),
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
              <Rocket className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Roadmap-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{totalTasks} ({percentage}%)
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

      {/* Competitive Baseline */}
      <CompetitiveAnalysisFramework data={{
        competitors: [
          { name: "Dein Start", isYou: true, reviews: 8, rating: 4.0, citations: 5, gbpComplete: 40, backlinks: 10, responseRate: 20, photos: 3, postsPerMonth: 0 },
          { name: "Local Pack #1", reviews: 95, rating: 4.7, citations: 55, gbpComplete: 100, backlinks: 150, responseRate: 95, photos: 40, postsPerMonth: 4 },
          { name: "Local Pack #2", reviews: 65, rating: 4.5, citations: 40, gbpComplete: 90, backlinks: 90, responseRate: 80, photos: 25, postsPerMonth: 2 },
          { name: "Local Pack #3", reviews: 40, rating: 4.3, citations: 30, gbpComplete: 75, backlinks: 45, responseRate: 65, photos: 18, postsPerMonth: 1 },
        ],
        insight: "Die Roadmap adressiert alle 8 Metriken systematisch: Wochen 1-2 schließen GBP-Lücken, Wochen 3-6 Citations, Wochen 7-8 Bewertungen, Wochen 9-12 Content und Backlinks.",
      }} />

      {/* Visual Gantt-style Roadmap */}
      <section id="visual-roadmap" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Visuelle 90-Tage-Roadmap</h2>
        <p className="text-muted-foreground mb-6">
          Dein <strong className="text-foreground">Woche-für-Woche Fahrplan</strong> — von der Analyse bis zum messbaren Ergebnis.
          Jeder Block zeigt dir, woran du gerade arbeiten solltest.
        </p>

        <Card className="bg-muted/20 overflow-hidden">
          <CardContent className="pt-6 pb-4">
            {/* Phase lanes */}
            <div className="space-y-3">
              {phases.map(phase => {
                const phaseWeeks = roadmapWeeks.filter(w => w.phase === phase);
                const startWeek = phaseWeeks[0].week;
                const endWeek = phaseWeeks[phaseWeeks.length - 1].week;
                const phaseTasks = phaseWeeks.flatMap((w, wi) => w.tasks.map((_, ti) => `w${w.week}-${ti}`));
                const phaseChecked = phaseTasks.filter(k => checked.has(k)).length;
                const phaseComplete = phaseChecked === phaseTasks.length && phaseTasks.length > 0;

                return (
                  <div key={phase} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground w-24 shrink-0 text-right">
                      {phase}
                    </span>
                    <div className="flex-1 relative h-8">
                      <div className="absolute inset-0 bg-muted/40 rounded" />
                      <div
                        className={`absolute h-full rounded flex items-center px-3 transition-all ${phaseColors[phase]} ${phaseComplete ? 'opacity-100' : 'opacity-80'}`}
                        style={{
                          left: `${((startWeek - 1) / 12) * 100}%`,
                          width: `${((endWeek - startWeek + 1) / 12) * 100}%`,
                        }}
                      >
                        <span className="text-xs font-medium text-white truncate">
                          W{startWeek}-{endWeek} {phaseComplete && "✓"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground w-10 shrink-0">
                      {phaseChecked}/{phaseTasks.length}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Week markers */}
            <div className="flex mt-4 ml-[calc(6rem+0.75rem)]">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="text-[10px] text-muted-foreground">W{i + 1}</span>
                </div>
              ))}
            </div>

            {/* Milestone markers */}
            <div className="flex mt-1 ml-[calc(6rem+0.75rem)]">
              {Array.from({ length: 12 }, (_, i) => {
                const week = roadmapWeeks.find(w => w.week === i + 1);
                return (
                  <div key={i} className="flex-1 text-center">
                    {week?.milestone && (
                      <Flag className="h-3 w-3 text-primary mx-auto" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* KPI Milestones */}
      <section id="kpi-meilensteine" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">KPI-Meilensteine</h2>
        <p className="text-muted-foreground mb-6">
          Konkrete, messbare Ziele pro Phase — so weißt du immer, ob du auf Kurs bist.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {kpiMilestones.map((kpi, i) => (
            <Card key={i} className="text-center p-4 hover:border-primary/30 transition-colors">
              <div className="flex justify-center mb-2 text-primary">{kpi.icon}</div>
              <Badge variant="outline" className="mb-2 text-xs">{kpi.label}</Badge>
              <p className="text-sm font-medium text-foreground">{kpi.metric}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Week-by-week action plan */}
      <section id="wochenplan" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Woche-für-Woche Aktionsplan</h2>
        <p className="text-muted-foreground mb-6">
          Klicke auf jede Aufgabe, um sie als erledigt zu markieren. Dein Fortschritt wird automatisch gespeichert.
        </p>

        <div className="space-y-4">
          {roadmapWeeks.map(week => {
            const weekTasks = week.tasks.map((_, i) => `w${week.week}-${i}`);
            const weekChecked = weekTasks.filter(k => checked.has(k)).length;
            const weekComplete = weekChecked === week.tasks.length;

            return (
              <Card key={week.week} className={`transition-all ${weekComplete ? 'border-green-300 bg-green-50/50' : ''}`}>
                <CardContent className="pt-5 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${week.phaseColor}`}>
                        {week.week}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground text-sm">Woche {week.week}</span>
                        <Badge variant="outline" className="ml-2 text-xs">{week.phase}</Badge>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{weekChecked}/{week.tasks.length}</span>
                  </div>

                  <div className="space-y-2 ml-11">
                    {week.tasks.map((task, i) => {
                      const key = `w${week.week}-${i}`;
                      const done = checked.has(key);
                      return (
                        <button
                          key={key}
                          onClick={() => toggle(key)}
                          className={`w-full flex items-start gap-2 p-2 rounded-lg text-left transition-all text-sm ${
                            done
                              ? 'bg-green-50 text-green-700 line-through'
                              : 'hover:bg-muted/50 text-foreground'
                          }`}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-all ${
                            done ? 'bg-green-500 border-green-500' : 'border-muted-foreground/30'
                          }`}>
                            {done && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                          {task}
                        </button>
                      );
                    })}
                  </div>

                  {/* KPI target & milestone */}
                  <div className="ml-11 mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                      <Target className="h-3 w-3" /> {week.kpiTarget}
                    </span>
                    {week.milestone && (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full flex items-center gap-1">
                        <Flag className="h-3 w-3" /> {week.milestone}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Interactive Implementation Plan */}
      <NinetyDayImplementationPlan />

      {/* Copy Template */}
      <section id="template" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Roadmap Template kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere die komplette 90-Tage-Roadmap als Textvorlage — inklusive KPI-Tracking-Tabelle.
        </p>
        <Button onClick={copyTemplate} size="lg" className="gap-2">
          <Copy className="h-4 w-4" /> Roadmap Template kopieren
        </Button>
      </section>

      {/* Tips */}
      <section id="tipps" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Umsetzungs-Tipps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: <Clock className="h-5 w-5 text-primary" />, title: "Zeitplanung", text: "Plane 3-5 Stunden pro Woche ein. Lieber konsequent wenig als sporadisch viel." },
            { icon: <Target className="h-5 w-5 text-primary" />, title: "Quick Wins zuerst", text: "GBP-Optimierung und erste Bewertungen bringen den schnellsten sichtbaren Impact." },
            { icon: <BarChart3 className="h-5 w-5 text-primary" />, title: "Messen, nicht raten", text: "Dokumentiere Baseline-Rankings in Woche 1. Ohne Vorher-Daten kein messbarer Erfolg." },
            { icon: <Users className="h-5 w-5 text-primary" />, title: "Team einbinden", text: "Bewertungs-Akquise ist Teamarbeit. Briefende alle Mitarbeiter mit Kundenkontakt." },
          ].map((tip, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-start gap-3">
                {tip.icon}
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { label: "Strategy Planner (7-Phasen-Detail)", href: "/blog/local-seo-strategy-planner" },
              { label: "Monthly Checklist (laufender Betrieb)", href: "/blog/local-seo-monthly-checklist" },
              { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste" },
              { label: "Reporting Template", href: "/blog/local-seo-reporting-template" },
            ].map(link => (
              <Link key={link.href} to={link.href} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowRight className="h-3 w-3" /> {link.label}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <BlogCTAABTest articleSlug="local-seo-roadmap-90-tage" position="middle" />

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />

      <ArticleCTA />

      <HelpfulnessWidget articleSlug="local-seo-roadmap-90-tage" />
    </ArticleLayout>
  );
};

export default LocalSeoRoadmap;
