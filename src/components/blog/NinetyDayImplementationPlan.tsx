import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight, Copy, Check,
  Calendar, Target, TrendingUp, AlertTriangle, RotateCcw,
  Search, Building2, Globe, MapPin, Star, LinkIcon, BarChart3,
  FileText, Zap, Clock, Flag, Trophy
} from 'lucide-react';
import { toast } from 'sonner';

const STORAGE_KEY = 'ninety-day-plan-progress';

interface WeekTask {
  id: string;
  task: string;
  kpiTarget?: string;
}

interface PlanWeek {
  week: number;
  phase: string;
  phaseIcon: React.ReactNode;
  phaseColorClass: string;
  tasks: WeekTask[];
  milestone?: string;
  expectedOutcome: string;
  weeklyHours: string;
  proTip?: string;
}

const planWeeks: PlanWeek[] = [
  {
    week: 1, phase: 'Analyse & Audit', phaseIcon: <Search className="w-4 h-4" />, phaseColorClass: 'bg-primary/10 text-primary border-primary/20',
    tasks: [
      { id: 'w1-1', task: 'Google Business Profil vollständig auditieren (75+ Checkpunkte)' },
      { id: 'w1-2', task: 'NAP-Konsistenz aller bestehenden Einträge prüfen' },
      { id: 'w1-3', task: 'Top-5 Wettbewerber im Local Pack analysieren' },
      { id: 'w1-4', task: 'Aktuelle Rankings für 10 lokale Keywords dokumentieren' },
    ],
    expectedOutcome: 'Vollständiger Ist-Zustand mit Lücken-Analyse',
    weeklyHours: '3–4 Std',
    milestone: 'Audit Report fertig',
    proTip: 'Nutze unseren Google Maps Audit mit 75+ Prüfpunkten als Vorlage.',
  },
  {
    week: 2, phase: 'Analyse & Audit', phaseIcon: <Search className="w-4 h-4" />, phaseColorClass: 'bg-primary/10 text-primary border-primary/20',
    tasks: [
      { id: 'w2-1', task: 'Keyword-Recherche: 15–20 lokale Keywords mit Suchvolumen' },
      { id: 'w2-2', task: 'Keyword-Map erstellen (Keyword → Zielseite)' },
      { id: 'w2-3', task: 'Website Technical Check: Speed, Mobile, SSL, Crawl-Fehler' },
    ],
    expectedOutcome: 'Keyword-Strategie & technischer Baseline-Report',
    weeklyHours: '3 Std',
  },
  {
    week: 3, phase: 'GBP & Fundament', phaseIcon: <Building2 className="w-4 h-4" />, phaseColorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    tasks: [
      { id: 'w3-1', task: 'GBP vollständig optimieren: Beschreibung, Kategorien, Attribute' },
      { id: 'w3-2', task: 'Min. 15 hochwertige Fotos mit Geo-Tags hochladen' },
      { id: 'w3-3', task: 'NAP auf Website: Footer, Kontaktseite, Impressum vereinheitlichen' },
      { id: 'w3-4', task: 'LocalBusiness JSON-LD Schema Markup implementieren' },
    ],
    expectedOutcome: 'GBP-Optimierungsgrad 100%, Schema live',
    weeklyHours: '4 Std',
    proTip: 'Primärkategorie = umsatzstärkstes Angebot. Sekundärkategorien = alle weiteren Services.',
  },
  {
    week: 4, phase: 'GBP & Fundament', phaseIcon: <Building2 className="w-4 h-4" />, phaseColorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    tasks: [
      { id: 'w4-1', task: 'Title Tags & Meta Descriptions mit [Leistung] + [Stadt] optimieren' },
      { id: 'w4-2', task: 'Google Search Console einrichten & Sitemap einreichen' },
      { id: 'w4-3', task: 'Mobile Ladezeit unter 3 Sekunden bringen (Core Web Vitals)' },
      { id: 'w4-4', task: 'Erster Google Post veröffentlichen (Angebot oder News)' },
    ],
    expectedOutcome: 'Core Web Vitals bestanden, GSC aktiv',
    weeklyHours: '3 Std',
    milestone: 'Digitales Fundament steht',
  },
  {
    week: 5, phase: 'Citations aufbauen', phaseIcon: <MapPin className="w-4 h-4" />, phaseColorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    tasks: [
      { id: 'w5-1', task: 'Tier-1 Verzeichnisse: Google, Bing Places, Apple Maps, Yelp' },
      { id: 'w5-2', task: 'DACH-Verzeichnisse: Gelbe Seiten, Das Örtliche, GoLocal, Herold.at' },
      { id: 'w5-3', task: '3 branchenspezifische Portale mit vollständigem Profil' },
    ],
    expectedOutcome: '10+ aktive Citations mit konsistentem NAP',
    weeklyHours: '3 Std',
    proTip: 'Immer exakt dasselbe NAP-Format verwenden — auch bei Telefonnummer (+49 vs. 0).',
  },
  {
    week: 6, phase: 'Citations aufbauen', phaseIcon: <MapPin className="w-4 h-4" />, phaseColorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    tasks: [
      { id: 'w6-1', task: 'Duplikate in Verzeichnissen suchen und bereinigen' },
      { id: 'w6-2', task: 'Social-Media-Profile NAP aktualisieren (Facebook, Instagram, LinkedIn)' },
      { id: 'w6-3', task: 'Regionale Verzeichnisse: Stadtportal, IHK-Firmenfinder, Gemeinde' },
      { id: 'w6-4', task: 'Citation-Tracking-Sheet anlegen für monatliche Überprüfung' },
    ],
    expectedOutcome: 'NAP 100% konsistent, 20+ Citations',
    weeklyHours: '2.5 Std',
    milestone: 'Citation-Basis komplett',
  },
  {
    week: 7, phase: 'Bewertungen', phaseIcon: <Star className="w-4 h-4" />, phaseColorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    tasks: [
      { id: 'w7-1', task: 'Google-Bewertungslink erstellen & QR-Code generieren' },
      { id: 'w7-2', task: 'Bewertungs-Workflow definieren: Wann, wie, wer fragt' },
      { id: 'w7-3', task: 'Erste 5 zufriedene Kunden persönlich um Bewertung bitten' },
    ],
    expectedOutcome: '5 neue Google-Bewertungen',
    weeklyHours: '2 Std',
    proTip: 'Beste Conversion: Persönlich nach positivem Erlebnis fragen, nicht per Massen-E-Mail.',
  },
  {
    week: 8, phase: 'Bewertungen', phaseIcon: <Star className="w-4 h-4" />, phaseColorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    tasks: [
      { id: 'w8-1', task: 'Antwort-Templates erstellen: 3× positiv, 2× neutral, 2× negativ' },
      { id: 'w8-2', task: 'Auf alle bestehenden Bewertungen antworten (100% Antwort-Rate)' },
      { id: 'w8-3', task: 'QR-Code / NFC-Tag im Geschäft platzieren' },
      { id: 'w8-4', task: 'Review-Schema (AggregateRating) auf Website implementieren' },
    ],
    expectedOutcome: '10+ Bewertungen, 100% Antwort-Rate',
    weeklyHours: '2 Std',
    milestone: 'Bewertungs-System läuft automatisch',
  },
  {
    week: 9, phase: 'Lokaler Content', phaseIcon: <FileText className="w-4 h-4" />, phaseColorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    tasks: [
      { id: 'w9-1', task: 'Lokale Landingpage für Haupt-Service erstellen ([Leistung] in [Stadt])' },
      { id: 'w9-2', task: 'FAQ-Seite mit 10+ lokalen Fragen (Voice-Search optimiert)' },
      { id: 'w9-3', task: 'Google Posts-Kalender für nächste 4 Wochen erstellen' },
    ],
    expectedOutcome: '3 neue lokale Seiten live',
    weeklyHours: '4 Std',
    proTip: 'FAQ-Fragen im Format "Wo finde ich [Leistung] in [Stadt]?" formulieren.',
  },
  {
    week: 10, phase: 'Lokaler Content', phaseIcon: <FileText className="w-4 h-4" />, phaseColorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    tasks: [
      { id: 'w10-1', task: 'Blog-Artikel mit lokalem Bezug veröffentlichen (Event, Guide, Saisonales)' },
      { id: 'w10-2', task: 'Alle Bilder optimieren: Geo-Tags, beschreibende Alt-Texte, Kompression' },
      { id: 'w10-3', task: 'Content-Kalender für 3 Monate erstellen (Blog + Google Posts)' },
    ],
    expectedOutcome: 'Content-Pipeline etabliert',
    weeklyHours: '3.5 Std',
  },
  {
    week: 11, phase: 'Linkbuilding', phaseIcon: <LinkIcon className="w-4 h-4" />, phaseColorClass: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
    tasks: [
      { id: 'w11-1', task: '3 lokale Vereine, Verbände oder Schulen für Sponsoring kontaktieren' },
      { id: 'w11-2', task: 'Gastbeitrag für lokale Zeitung oder Stadt-Blog pitchen' },
      { id: 'w11-3', task: 'Unlinked Mentions finden und Linkaufnahme anfragen' },
      { id: 'w11-4', task: 'IHK / Handwerkskammer Eintrag mit Backlink sichern' },
    ],
    expectedOutcome: '3+ hochwertige lokale Backlinks',
    weeklyHours: '3 Std',
    proTip: 'IHK-Links sind kostenlos, haben hohe Autorität und werden oft vergessen.',
  },
  {
    week: 12, phase: 'Tracking & Review', phaseIcon: <BarChart3 className="w-4 h-4" />, phaseColorClass: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
    tasks: [
      { id: 'w12-1', task: 'Ranking-Report erstellen: Vorher vs. Nachher für alle 15 Keywords' },
      { id: 'w12-2', task: 'GBP Insights analysieren: Aufrufe, Anrufe, Routen-Anfragen' },
      { id: 'w12-3', task: 'Conversion-Tracking auswerten (Leads, Anrufe, Formulare)' },
      { id: 'w12-4', task: 'Strategie für Monat 4–6 planen basierend auf Ergebnissen' },
    ],
    expectedOutcome: 'ROI-Report mit klarem Vorher/Nachher',
    weeklyHours: '3 Std',
    milestone: '90-Tage-Ziel erreicht! 🎯',
  },
];

const kpiTargets = [
  { kpi: 'Local Pack Position', baseline: '—', week4: 'Top 10', week8: 'Top 5', week12: 'Top 3' },
  { kpi: 'GBP-Aufrufe/Monat', baseline: '< 100', week4: '200+', week8: '400+', week12: '600+' },
  { kpi: 'Google-Bewertungen', baseline: '< 5', week4: '5+', week8: '10+', week12: '15+' },
  { kpi: 'Bewertungs-Durchschnitt', baseline: '—', week4: '4.0+', week8: '4.3+', week12: '4.5+' },
  { kpi: 'Citations (Anzahl)', baseline: '< 5', week4: '10+', week8: '20+', week12: '25+' },
  { kpi: 'Lokale Backlinks', baseline: '0', week4: '1', week8: '2', week12: '5+' },
  { kpi: 'Org. Traffic (lokal)', baseline: 'Baseline', week4: '+20%', week8: '+50%', week12: '+100%' },
];

interface Props {
  compact?: boolean;
}

export default function NinetyDayImplementationPlan({ compact = false }: Props) {
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set([1]));
  const [activeView, setActiveView] = useState<'timeline' | 'kpi'>('timeline');
  const [copied, setCopied] = useState(false);

  const displayWeeks = compact ? planWeeks.slice(0, 6) : planWeeks;
  const allTaskIds = displayWeeks.flatMap(w => w.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const completedCount = allTaskIds.filter(id => checked.has(id)).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked]);

  const toggle = useCallback((taskId: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(taskId) ? next.delete(taskId) : next.add(taskId);
      return next;
    });
  }, []);

  const toggleWeek = (week: number) => {
    setExpandedWeeks(prev => {
      const next = new Set(prev);
      next.has(week) ? next.delete(week) : next.add(week);
      return next;
    });
  };

  const resetAll = () => {
    setChecked(new Set());
    toast.success('Plan zurückgesetzt');
  };

  // Group weeks by phase for Gantt
  const phases = Array.from(new Set(planWeeks.map(w => w.phase)));

  const generateTemplate = () => {
    let text = '# 90-Tage Local SEO Implementierungsplan\n\n';
    displayWeeks.forEach(w => {
      const marker = w.milestone ? ` ⭐ ${w.milestone}` : '';
      text += `## Woche ${w.week}: ${w.phase}${marker}\n`;
      text += `Zeitaufwand: ${w.weeklyHours} | Ergebnis: ${w.expectedOutcome}\n`;
      w.tasks.forEach(t => {
        const done = checked.has(t.id) ? '✅' : '⬜';
        text += `${done} ${t.task}\n`;
      });
      if (w.proTip) text += `💡 Tipp: ${w.proTip}\n`;
      text += '\n';
    });
    text += '\n## KPI-Tracking\n';
    text += '| KPI | Baseline | Woche 4 | Woche 8 | Woche 12 |\n';
    text += '|-----|----------|---------|---------|----------|\n';
    kpiTargets.forEach(k => {
      text += `| ${k.kpi} | ${k.baseline} | ${k.week4} | ${k.week8} | ${k.week12} |\n`;
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    toast.success('90-Tage-Plan kopiert!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary="Interactive 90-day Local SEO implementation plan with 12 weeks, 43 tasks, KPI targets, and progress tracking">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              90-Tage Local SEO Implementierungsplan
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {compact ? '6 Wochen' : '12 Wochen'} • {totalTasks} Aufgaben • {compact ? '3' : '6'} Phasen • KPI-Tracking
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{progressPercent}%</div>
            <div className="text-xs text-muted-foreground">{completedCount}/{totalTasks} erledigt</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Phase indicators */}
        <div className="mt-3 flex flex-wrap gap-2">
          {phases.slice(0, compact ? 3 : 6).map(phase => {
            const phaseWeeks = displayWeeks.filter(w => w.phase === phase);
            const phaseTasks = phaseWeeks.flatMap(w => w.tasks.map(t => t.id));
            const phaseComplete = phaseTasks.every(id => checked.has(id));
            return (
              <Badge key={phase} variant="outline" className={`text-xs ${phaseComplete ? 'bg-green-500/10 text-green-700 border-green-500/30' : ''}`}>
                {phaseComplete && <CheckCircle2 className="w-3 h-3 mr-1" />}
                {phase}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* View toggle + actions */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveView('timeline')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeView === 'timeline' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          >
            Wochenplan
          </button>
          {!compact && (
            <button
              onClick={() => setActiveView('kpi')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeView === 'kpi' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              KPI-Ziele
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={resetAll} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-muted text-muted-foreground hover:text-foreground transition-colors">
            <RotateCcw className="w-3 h-3" /> Zurücksetzen
          </button>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Plan kopieren'}
          </button>
        </div>
      </div>

      {/* Timeline view */}
      {activeView === 'timeline' && (
        <div className="space-y-3">
          {/* Mini Gantt */}
          <Card className="overflow-hidden">
            <CardContent className="p-4">
              <div className="space-y-2">
                {phases.slice(0, compact ? 3 : 6).map(phase => {
                  const phaseWeeks = planWeeks.filter(w => w.phase === phase);
                  const startWeek = phaseWeeks[0].week;
                  const endWeek = phaseWeeks[phaseWeeks.length - 1].week;
                  const phaseTasks = phaseWeeks.flatMap(w => w.tasks.map(t => t.id));
                  const phaseChecked = phaseTasks.filter(id => checked.has(id)).length;
                  const phaseTotal = phaseTasks.length;
                  const colorClass = phaseWeeks[0].phaseColorClass;

                  return (
                    <div key={phase} className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-muted-foreground w-28 shrink-0 text-right truncate">
                        {phase}
                      </span>
                      <div className="flex-1 relative h-7 bg-muted/40 rounded">
                        <div
                          className={`absolute h-full rounded flex items-center px-2 border ${colorClass}`}
                          style={{
                            left: `${((startWeek - 1) / 12) * 100}%`,
                            width: `${((endWeek - startWeek + 1) / 12) * 100}%`,
                          }}
                        >
                          <span className="text-[10px] font-medium whitespace-nowrap">
                            W{startWeek}–{endWeek} ({phaseChecked}/{phaseTotal})
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Week markers */}
              <div className="flex mt-2 ml-[7.5rem]">
                {Array.from({ length: compact ? 6 : 12 }, (_, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className="text-[9px] text-muted-foreground">{i + 1}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Week cards */}
          {displayWeeks.map(week => {
            const isExpanded = expandedWeeks.has(week.week);
            const weekDone = week.tasks.every(t => checked.has(t.id));
            const weekChecked = week.tasks.filter(t => checked.has(t.id)).length;

            return (
              <Card key={week.week} className={`transition-colors ${weekDone ? 'border-green-500/30 bg-green-500/5' : ''}`}>
                <CardHeader
                  className="cursor-pointer select-none py-3 px-4"
                  onClick={() => toggleWeek(week.week)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <Badge variant="outline" className={`text-xs ${week.phaseColorClass}`}>
                        {week.phaseIcon}
                        <span className="ml-1">W{week.week}</span>
                      </Badge>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{week.phase}</span>
                        {week.milestone && (
                          <Badge className="ml-2 text-[10px] bg-amber-500/10 text-amber-700 border-amber-500/20" variant="outline">
                            <Trophy className="w-3 h-3 mr-1" />
                            {week.milestone}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {week.weeklyHours}</span>
                      <span>{weekChecked}/{week.tasks.length}</span>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-3">
                    {/* Tasks */}
                    {week.tasks.map(task => {
                      const isDone = checked.has(task.id);
                      return (
                        <div
                          key={task.id}
                          className={`flex gap-3 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                            isDone ? 'bg-green-500/5 border-green-500/20' : 'border-border hover:border-primary/30'
                          }`}
                          onClick={() => toggle(task.id)}
                        >
                          {isDone
                            ? <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            : <Circle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          }
                          <span className={`text-sm ${isDone ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                            {task.task}
                          </span>
                        </div>
                      );
                    })}

                    {/* Expected outcome */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                      <Target className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Ergebnis:</strong> {week.expectedOutcome}</span>
                    </div>

                    {/* Pro tip */}
                    {week.proTip && (
                      <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg px-3 py-2">
                        <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>{week.proTip}</span>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* KPI view */}
      {activeView === 'kpi' && !compact && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              KPI-Meilensteine über 90 Tage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">KPI</th>
                    <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Baseline</th>
                    <th className="text-center py-2 px-3 font-semibold text-foreground">Woche 4</th>
                    <th className="text-center py-2 px-3 font-semibold text-foreground">Woche 8</th>
                    <th className="text-center py-2 px-3 font-semibold text-primary">Woche 12</th>
                  </tr>
                </thead>
                <tbody>
                  {kpiTargets.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-2.5 pr-4 font-medium text-foreground">{row.kpi}</td>
                      <td className="text-center py-2.5 px-3 text-muted-foreground">{row.baseline}</td>
                      <td className="text-center py-2.5 px-3">{row.week4}</td>
                      <td className="text-center py-2.5 px-3">{row.week8}</td>
                      <td className="text-center py-2.5 px-3 font-semibold text-primary">{row.week12}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs bg-amber-500/5 text-amber-700 border border-amber-500/10 rounded-lg p-3">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Hinweis:</strong> KPI-Ziele sind Richtwerte für ein durchschnittliches lokales Unternehmen im DACH-Raum. 
                In wettbewerbsintensiven Branchen (Zahnarzt, Anwalt) können die Zeiträume länger sein.
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Dies zeigt die ersten 6 Wochen. Den vollständigen 90-Tage-Plan mit KPI-Tracking findest du in der{' '}
          <a href="/blog/local-seo-roadmap-90-tage" className="text-primary underline">90-Tage Local SEO Roadmap</a>.
        </p>
      )}
    </div>
  );
}
