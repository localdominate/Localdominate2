import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight,
  BarChart3, AlertTriangle, Lightbulb, Copy, Check,
  TrendingDown, TrendingUp, Eye, Bell, Calendar,
  Search, MapPin, Star, Globe, Clock, Zap, Target, Shield
} from 'lucide-react';

interface MonitoringTask {
  id: string;
  title: string;
  description: string;
  frequency: string;
  tool: string;
  alertThreshold?: string;
}

interface MonitoringStrategy {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  description: string;
  tasks: MonitoringTask[];
  warningSign: string;
  recoveryAction: string;
}

const strategies: MonitoringStrategy[] = [
  {
    id: 'keyword-tracking',
    title: 'Keyword-Ranking Monitoring',
    icon: <Search className="w-4 h-4" />,
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    description: 'Lokale Keywords systematisch überwachen und Trends erkennen, bevor es zu spät ist.',
    tasks: [
      {
        id: 'kt-1',
        title: '10–15 Kern-Keywords wöchentlich tracken',
        description: 'Haupt-Service + Stadt Kombinationen. Separate Tracking-Gruppen für Local Pack vs. organische Rankings.',
        frequency: 'Wöchentlich',
        tool: 'Google Search Console / SE Ranking',
        alertThreshold: 'Verlust von 3+ Positionen innerhalb einer Woche',
      },
      {
        id: 'kt-2',
        title: 'Local Pack Position dokumentieren',
        description: 'Top-3, Top-7 oder nicht sichtbar? Separate Spalte für Local Pack vs. organische Position.',
        frequency: 'Wöchentlich',
        tool: 'Local Falcon / BrightLocal',
      },
      {
        id: 'kt-3',
        title: 'Keyword-Kannibalisierung prüfen',
        description: 'Ranken mehrere eigene Seiten für dasselbe Keyword? GSC → Leistung → nach Seite filtern.',
        frequency: 'Monatlich',
        tool: 'Google Search Console',
      },
      {
        id: 'kt-4',
        title: 'Neue Keyword-Chancen identifizieren',
        description: 'GSC „Suchanfragen" nach Impressionen sortieren — hohe Impressionen, niedrige CTR = Optimierungspotential.',
        frequency: 'Monatlich',
        tool: 'Google Search Console',
      },
    ],
    warningSign: 'Plötzlicher Verlust von 5+ Positionen bei mehreren Keywords gleichzeitig → Algorithmus-Update oder technisches Problem.',
    recoveryAction: 'GSC auf manuelle Maßnahmen prüfen → Core Web Vitals checken → Indexierungsstatus überprüfen → Wettbewerber-Analyse.',
  },
  {
    id: 'gbp-monitoring',
    title: 'Google Business Profil Monitoring',
    icon: <MapPin className="w-4 h-4" />,
    colorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    description: 'Dein GBP ist dein wichtigstes lokales Asset. Überwache Änderungen und Performance lückenlos.',
    tasks: [
      {
        id: 'gbp-1',
        title: 'GBP Insights wöchentlich auswerten',
        description: 'Aufrufe, Suchanfragen, Anrufe, Routen-Anfragen, Foto-Aufrufe. Vergleich zur Vorwoche.',
        frequency: 'Wöchentlich',
        tool: 'GBP Dashboard / Insights',
        alertThreshold: 'Rückgang >20% bei Aufrufen ohne saisonalen Grund',
      },
      {
        id: 'gbp-2',
        title: 'Profil auf ungewollte Änderungen prüfen',
        description: 'Google oder Nutzer können Infos ändern (Öffnungszeiten, Kategorie, Beschreibung). Wöchentlich verifizieren.',
        frequency: 'Wöchentlich',
        tool: 'GBP Dashboard',
      },
      {
        id: 'gbp-3',
        title: 'Neue Bewertungen monitoren & beantworten',
        description: 'Innerhalb von 24h auf jede Bewertung antworten. Negative Bewertungen eskalieren, nicht ignorieren.',
        frequency: 'Täglich',
        tool: 'GBP App / E-Mail-Benachrichtigungen',
        alertThreshold: 'Negative Bewertung mit konkretem Vorwurf → sofort reagieren',
      },
      {
        id: 'gbp-4',
        title: 'Q&A-Bereich auf Spam prüfen',
        description: 'Unbeantwortete Fragen und falsche Antworten von Drittnutzern entfernen/korrigieren.',
        frequency: 'Wöchentlich',
        tool: 'Google Maps / GBP',
      },
      {
        id: 'gbp-5',
        title: 'Google Posts regelmäßig veröffentlichen',
        description: 'Min. 1 Post pro Woche (Angebot, News, Event). Posts verfallen nach 7 Tagen — Regelmäßigkeit zählt.',
        frequency: 'Wöchentlich',
        tool: 'GBP Dashboard',
      },
    ],
    warningSign: 'Profil zeigt plötzlich als "Dauerhaft geschlossen" oder Kategorie wurde geändert → sofort handeln.',
    recoveryAction: 'GBP Support kontaktieren → Profil-Änderung rückgängig machen → Verifizierung erneut durchführen falls nötig.',
  },
  {
    id: 'technical-health',
    title: 'Technische Website-Gesundheit',
    icon: <Globe className="w-4 h-4" />,
    colorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    description: 'Technische Probleme sind der häufigste Grund für plötzliche Ranking-Verluste.',
    tasks: [
      {
        id: 'th-1',
        title: 'Core Web Vitals monatlich prüfen',
        description: 'LCP <2.5s, FID <100ms, CLS <0.1. Verschlechterungen sofort untersuchen.',
        frequency: 'Monatlich',
        tool: 'PageSpeed Insights / GSC',
        alertThreshold: 'LCP >4s oder CLS >0.25 = dringend beheben',
      },
      {
        id: 'th-2',
        title: 'Indexierungsstatus in GSC überwachen',
        description: 'Seiten → Indexierung. Plötzlich nicht indexierte Seiten = Alarmzeichen.',
        frequency: 'Wöchentlich',
        tool: 'Google Search Console',
        alertThreshold: 'Anstieg "Nicht indexiert" um >10 Seiten',
      },
      {
        id: 'th-3',
        title: 'SSL-Zertifikat & Uptime monitoren',
        description: 'SSL-Ablauf rechtzeitig erneuern. Uptime unter 99.5% = Host-Wechsel prüfen.',
        frequency: 'Automatisch',
        tool: 'UptimeRobot (kostenlos)',
      },
      {
        id: 'th-4',
        title: 'Crawl-Fehler & 404-Seiten beheben',
        description: 'GSC → Abdeckung → Fehler. Wichtige 404s per 301-Redirect umleiten.',
        frequency: '2x pro Monat',
        tool: 'Google Search Console',
      },
    ],
    warningSign: 'Plötzlicher Anstieg von Crawl-Fehlern oder "Nicht indexiert" Status → Server-Problem oder versehentliches noindex.',
    recoveryAction: 'robots.txt prüfen → Meta-Robots Tags checken → Server-Logs analysieren → GSC URL-Prüfung für betroffene Seiten.',
  },
  {
    id: 'citation-nap',
    title: 'Citation & NAP-Konsistenz',
    icon: <Shield className="w-4 h-4" />,
    colorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    description: 'Inkonsistente NAP-Daten sind ein schleichender Ranking-Killer.',
    tasks: [
      {
        id: 'cn-1',
        title: 'NAP-Konsistenz-Check über alle Verzeichnisse',
        description: 'Top-20 Verzeichnisse auf exakte Übereinstimmung prüfen: Name, Adresse, Telefon.',
        frequency: 'Monatlich',
        tool: 'Moz Local / BrightLocal',
      },
      {
        id: 'cn-2',
        title: 'Neue Duplicate Listings suchen',
        description: 'Google Maps + Bing + Apple Maps nach doppelten Einträgen durchsuchen.',
        frequency: 'Monatlich',
        tool: 'Manuelle Suche + Tools',
        alertThreshold: 'Neues Duplikat gefunden → sofort Löschung beantragen',
      },
      {
        id: 'cn-3',
        title: 'Unlinked Mentions tracken',
        description: 'Erwähnungen deines Business ohne Link finden → Linkaufnahme anfragen.',
        frequency: 'Monatlich',
        tool: 'Google Alerts / Ahrefs',
      },
    ],
    warningSign: 'Adresse oder Telefonnummer in einem großen Verzeichnis falsch → kann sich auf Dutzende Aggregator-Quellen ausbreiten.',
    recoveryAction: 'Fehler sofort korrigieren → bei Datenaggregaten (Factual, Foursquare) melden → in 2–4 Wochen erneut prüfen.',
  },
  {
    id: 'competitor-watch',
    title: 'Wettbewerber-Monitoring',
    icon: <Eye className="w-4 h-4" />,
    colorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    description: 'Dein Ranking hängt auch davon ab, was deine Wettbewerber tun.',
    tasks: [
      {
        id: 'cw-1',
        title: 'Top-3 Wettbewerber im Local Pack tracken',
        description: 'Welche Positionen haben sie? Bewertungsanzahl, Antwort-Rate, Post-Frequenz, neue Fotos.',
        frequency: 'Monatlich',
        tool: 'Manuelle Analyse / BrightLocal',
      },
      {
        id: 'cw-2',
        title: 'Backlink-Profile der Wettbewerber prüfen',
        description: 'Neue Backlinks der Konkurrenz = potenzielle Linkquellen für dich.',
        frequency: 'Monatlich',
        tool: 'Ahrefs / Ubersuggest (kostenlos)',
      },
      {
        id: 'cw-3',
        title: 'Content-Gap Analyse durchführen',
        description: 'Für welche Keywords ranken Wettbewerber, du aber nicht? → Content-Lücken schließen.',
        frequency: 'Quartalsweise',
        tool: 'Ahrefs Content Gap / GSC',
      },
    ],
    warningSign: 'Neuer Wettbewerber taucht plötzlich im Local Pack auf mit aggressiver Bewertungs-Strategie.',
    recoveryAction: 'Eigene Bewertungs-Offensive starten → GBP-Optimierung intensivieren → Lokale Backlinks ausbauen.',
  },
  {
    id: 'alert-system',
    title: 'Frühwarnsystem einrichten',
    icon: <Bell className="w-4 h-4" />,
    colorClass: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
    description: 'Automatische Alerts, die dich warnen bevor ein Problem eskaliert.',
    tasks: [
      {
        id: 'as-1',
        title: 'Google Alerts für Firmennamen',
        description: 'Brand Monitoring: Neue Erwähnungen, Fake-Bewertungen, Negativ-Presse sofort erkennen.',
        frequency: 'Automatisch',
        tool: 'Google Alerts (kostenlos)',
      },
      {
        id: 'as-2',
        title: 'GSC E-Mail-Benachrichtigungen aktivieren',
        description: 'Manuelle Maßnahmen, Indexierungs-Probleme, Sicherheitswarnungen sofort erhalten.',
        frequency: 'Automatisch',
        tool: 'Google Search Console',
      },
      {
        id: 'as-3',
        title: 'Uptime-Monitoring mit Benachrichtigung',
        description: 'Sofortige Benachrichtigung bei Server-Ausfall (E-Mail, SMS, Slack).',
        frequency: 'Automatisch',
        tool: 'UptimeRobot / Pingdom',
      },
      {
        id: 'as-4',
        title: 'Monatlichen Monitoring-Report-Termin blocken',
        description: 'Fester Termin im Kalender: 1h für die Analyse aller Monitoring-Daten und Trendauswertung.',
        frequency: 'Monatlich',
        tool: 'Kalender-Eintrag',
      },
    ],
    warningSign: 'Keine Alerts = keine Frühwarnung. Ranking-Verluste werden oft erst nach Wochen bemerkt.',
    recoveryAction: 'Alle 6 Alert-Kanäle einrichten → wöchentliche 15-Min-Routine für Quick-Check → monatliche Tiefenanalyse.',
  },
];

const monitoringSchedule = [
  { task: 'Bewertungen checken & beantworten', frequency: 'Täglich', time: '5 Min', priority: 'critical' as const },
  { task: 'GBP auf Änderungen prüfen', frequency: 'Wöchentlich', time: '10 Min', priority: 'high' as const },
  { task: 'Keyword-Rankings checken', frequency: 'Wöchentlich', time: '15 Min', priority: 'high' as const },
  { task: 'Google Post veröffentlichen', frequency: 'Wöchentlich', time: '15 Min', priority: 'high' as const },
  { task: 'GBP Insights auswerten', frequency: 'Wöchentlich', time: '10 Min', priority: 'medium' as const },
  { task: 'GSC Indexierungsstatus', frequency: '2x/Monat', time: '10 Min', priority: 'high' as const },
  { task: 'NAP-Konsistenz prüfen', frequency: 'Monatlich', time: '30 Min', priority: 'high' as const },
  { task: 'Core Web Vitals Check', frequency: 'Monatlich', time: '15 Min', priority: 'medium' as const },
  { task: 'Wettbewerber-Analyse', frequency: 'Monatlich', time: '30 Min', priority: 'medium' as const },
  { task: 'Vollständiger SEO-Report', frequency: 'Monatlich', time: '60 Min', priority: 'critical' as const },
];

const priorityStyles = {
  critical: 'bg-destructive/10 text-destructive border-destructive/20',
  high: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  medium: 'bg-primary/10 text-primary border-primary/20',
};

interface Props {
  compact?: boolean;
}

export default function RankingMonitoringStrategy({ compact = false }: Props) {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [expandedStrategies, setExpandedStrategies] = useState<Set<string>>(new Set(['keyword-tracking']));
  const [activeTab, setActiveTab] = useState<'strategies' | 'schedule'>('strategies');
  const [copied, setCopied] = useState(false);

  const displayStrategies = compact ? strategies.slice(0, 3) : strategies;
  const allTaskIds = displayStrategies.flatMap(s => s.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const completedCount = allTaskIds.filter(id => completedTasks.has(id)).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const next = new Set(prev);
      next.has(taskId) ? next.delete(taskId) : next.add(taskId);
      return next;
    });
  };

  const toggleStrategy = (stratId: string) => {
    setExpandedStrategies(prev => {
      const next = new Set(prev);
      next.has(stratId) ? next.delete(stratId) : next.add(stratId);
      return next;
    });
  };

  const generateTemplate = () => {
    let text = '# Ranking Monitoring Checkliste\n\n';
    text += '## Monitoring-Zeitplan\n';
    monitoringSchedule.forEach(s => {
      text += `⬜ ${s.task} | ${s.frequency} | ${s.time}\n`;
    });
    text += '\n## Strategien im Detail\n\n';
    displayStrategies.forEach(s => {
      text += `### ${s.title}\n`;
      s.tasks.forEach(t => {
        text += `⬜ ${t.title} (${t.frequency}) — Tool: ${t.tool}\n`;
        if (t.alertThreshold) text += `   ⚠️ Alert: ${t.alertThreshold}\n`;
      });
      text += `⚠️ Warnsignal: ${s.warningSign}\n`;
      text += `✅ Sofortmaßnahme: ${s.recoveryAction}\n\n`;
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary="Interactive ranking monitoring strategy with 6 areas, alert system, and monitoring schedule">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Ranking-Monitoring Strategie
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {compact ? '3' : '6'} Überwachungsbereiche • {totalTasks} Aufgaben • Frühwarnsystem
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{progressPercent}%</div>
            <div className="text-xs text-muted-foreground">{completedCount}/{totalTasks} eingerichtet</div>
          </div>
        </div>
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Tab toggle */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('strategies')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'strategies' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          >
            Strategien
          </button>
          {!compact && (
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'schedule' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              Zeitplan
            </button>
          )}
        </div>
        <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Kopiert!' : 'Checkliste kopieren'}
        </button>
      </div>

      {/* Strategies view */}
      {activeTab === 'strategies' && (
        <div className="space-y-3">
          {displayStrategies.map(strategy => {
            const isExpanded = expandedStrategies.has(strategy.id);
            const stratDone = strategy.tasks.every(t => completedTasks.has(t.id));
            const stratChecked = strategy.tasks.filter(t => completedTasks.has(t.id)).length;

            return (
              <Card key={strategy.id} className={`transition-colors ${stratDone ? 'border-green-500/30 bg-green-500/5' : ''}`}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleStrategy(strategy.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <Badge variant="outline" className={`text-xs ${strategy.colorClass}`}>
                        {strategy.icon}
                      </Badge>
                      <span className="text-sm font-semibold text-foreground">{strategy.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{stratChecked}/{strategy.tasks.length}</span>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-3">
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>

                    {/* Tasks */}
                    {strategy.tasks.map(task => {
                      const isDone = completedTasks.has(task.id);
                      return (
                        <div
                          key={task.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${isDone ? 'bg-green-500/5 border-green-500/20' : 'border-border hover:border-primary/30'}`}
                          onClick={() => toggleTask(task.id)}
                        >
                          <div className="flex gap-3">
                            {isDone
                              ? <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              : <Circle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            }
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`font-medium text-sm ${isDone ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                  {task.title}
                                </span>
                                <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                                  <Clock className="w-2.5 h-2.5 mr-0.5" /> {task.frequency}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                <span className="text-[10px] text-muted-foreground bg-muted rounded px-1.5 py-0.5">🔧 {task.tool}</span>
                                {task.alertThreshold && (
                                  <span className="text-[10px] text-amber-700 bg-amber-500/10 rounded px-1.5 py-0.5">
                                    ⚠️ {task.alertThreshold}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Warning + Recovery */}
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-start gap-2 text-xs bg-destructive/5 text-destructive border border-destructive/10 rounded-lg p-3">
                        <TrendingDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div><strong>Warnsignal: </strong>{strategy.warningSign}</div>
                      </div>
                      <div className="flex items-start gap-2 text-xs bg-green-500/5 text-green-700 border border-green-500/10 rounded-lg p-3">
                        <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div><strong>Sofortmaßnahme: </strong>{strategy.recoveryAction}</div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Schedule view */}
      {activeTab === 'schedule' && !compact && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Monitoring-Zeitplan
            </CardTitle>
            <p className="text-sm text-muted-foreground">Zeitaufwand gesamt: ca. 2–3 Stunden pro Monat bei wöchentlicher Routine.</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-foreground">Aufgabe</th>
                    <th className="text-center py-2 px-3 font-semibold text-foreground">Häufigkeit</th>
                    <th className="text-center py-2 px-3 font-semibold text-foreground">Zeitaufwand</th>
                    <th className="text-center py-2 px-3 font-semibold text-foreground">Priorität</th>
                  </tr>
                </thead>
                <tbody>
                  {monitoringSchedule.map((item, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="py-2.5 pr-4 text-foreground">{item.task}</td>
                      <td className="text-center py-2.5 px-3 text-muted-foreground">{item.frequency}</td>
                      <td className="text-center py-2.5 px-3 text-muted-foreground">{item.time}</td>
                      <td className="text-center py-2.5 px-3">
                        <Badge variant="outline" className={`text-[10px] ${priorityStyles[item.priority]}`}>
                          {item.priority === 'critical' ? 'Kritisch' : item.priority === 'high' ? 'Hoch' : 'Mittel'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
              <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Profi-Tipp:</strong> Blocke jeden Montag 15 Minuten für den Quick-Check (Bewertungen, GBP, Rankings) 
                und den ersten Freitag im Monat für die Tiefenanalyse (60 Min).
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Kurzversion mit 3 von 6 Monitoring-Bereichen. Die vollständige Strategie mit Zeitplan findest du in unserem{' '}
          <a href="/blog/ranking-ploetzlich-verschwunden" className="text-primary underline">Ranking-Diagnose Guide</a>.
        </p>
      )}
    </div>
  );
}
