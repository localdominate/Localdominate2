import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown, ChevronRight, Eye, Target, BarChart3, Star,
  Globe, AlertTriangle, Lightbulb, TrendingUp, Clock, Zap,
  CheckCircle2, Copy, Check, Users, FileText, Camera, MessageSquare,
  Link2, Search, Shield, Bell
} from 'lucide-react';

interface TrackingArea {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  whatToTrack: string[];
  frequency: string;
  tools: { name: string; cost: string }[];
  alertTriggers: string[];
  actionTemplate: string;
}

const trackingAreas: TrackingArea[] = [
  {
    id: 'gbp-activity',
    title: 'GBP-Profil Aktivitäten',
    icon: <Eye className="w-4 h-4" />,
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    whatToTrack: [
      'Neue Google Posts (Frequenz, Themen, Angebote)',
      'Profil-Änderungen (Kategorien, Beschreibung, Attribute)',
      'Neue Fotos und Videos (Anzahl, Qualität, Typ)',
      'Öffnungszeiten-Änderungen (saisonale Anpassungen)',
      'Neue Produkte/Services im GBP',
    ],
    frequency: 'Wöchentlich',
    tools: [
      { name: 'Google Maps (manuell)', cost: 'Kostenlos' },
      { name: 'BrightLocal', cost: 'Ab $39/Mo' },
      { name: 'LocalViking', cost: 'Ab $33/Mo' },
    ],
    alertTriggers: [
      'Konkurrent startet plötzlich 4+ Posts/Woche',
      'Neue primäre Kategorie hinzugefügt',
      'Massiver Foto-Upload (20+ neue Bilder)',
    ],
    actionTemplate: 'GBP Post-Frequenz auf mindestens gleiches Niveau erhöhen → Fehlende Attribute ergänzen → Foto-Strategie anpassen',
  },
  {
    id: 'review-velocity',
    title: 'Bewertungs-Velocity & Sentiment',
    icon: <Star className="w-4 h-4" />,
    colorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    whatToTrack: [
      'Neue Bewertungen pro Woche/Monat (Velocity)',
      'Durchschnittliche Sternebewertung (Trend)',
      'Antwort-Rate und Antwort-Geschwindigkeit',
      'Sentiment-Analyse: Häufig gelobte/kritisierte Aspekte',
      'Fake-Review-Verdacht (plötzliche Spikes, generische Texte)',
    ],
    frequency: 'Wöchentlich',
    tools: [
      { name: 'Google Maps (manuell)', cost: 'Kostenlos' },
      { name: 'GatherUp', cost: 'Ab $60/Mo' },
      { name: 'ReviewTrackers', cost: 'Auf Anfrage' },
    ],
    alertTriggers: [
      'Konkurrent gewinnt 10+ Bewertungen/Woche (ungewöhnlich hoch)',
      'Rating-Drop um 0.3+ Sterne in einem Monat',
      'Konkurrent überholt dich bei Gesamtanzahl der Bewertungen',
    ],
    actionTemplate: 'Eigene Bewertungs-Kampagne starten → Antwort-Rate auf 100% bringen → Negative Bewertungen identifizieren und strategisch beantworten',
  },
  {
    id: 'citation-backlinks',
    title: 'Citations & Backlink-Profil',
    icon: <Link2 className="w-4 h-4" />,
    colorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    whatToTrack: [
      'Neue Verzeichnis-Einträge (Branchenverzeichnisse, Portale)',
      'NAP-Konsistenz der Konkurrenz (Name, Adresse, Telefon)',
      'Neue Backlinks (lokale Medien, Sponsoring, Events)',
      'Domain Authority / Domain Rating Entwicklung',
      'Lokale Partnerschaften und Kooperationen',
    ],
    frequency: 'Monatlich',
    tools: [
      { name: 'BrightLocal (Citations)', cost: 'Ab $39/Mo' },
      { name: 'Ahrefs (Backlinks)', cost: 'Ab $99/Mo' },
      { name: 'Ubersuggest', cost: 'Ab $29/Mo' },
    ],
    alertTriggers: [
      'Konkurrent gewinnt 5+ neue Backlinks in einem Monat',
      'Neue lokale Presse-Erwähnung eines Konkurrenten',
      'Konkurrent erscheint in neuem Premium-Verzeichnis',
    ],
    actionTemplate: 'Fehlende Verzeichnisse identifizieren und eintragen → Lokale Linkbuilding-Kampagne starten → PR/Event-basierte Backlinks aufbauen',
  },
  {
    id: 'content-strategy',
    title: 'Content & Keyword-Strategie',
    icon: <FileText className="w-4 h-4" />,
    colorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    whatToTrack: [
      'Neue Blog-Artikel und Landing Pages',
      'Keyword-Rankings für eure gemeinsamen Keywords',
      'Lokale Landingpages (Stadtteil-/Bezirks-Seiten)',
      'FAQ-Bereiche und Schema Markup Nutzung',
      'Social Media Aktivität und lokaler Content',
    ],
    frequency: 'Monatlich',
    tools: [
      { name: 'SE Ranking', cost: 'Ab $52/Mo' },
      { name: 'Semrush', cost: 'Ab $130/Mo' },
      { name: 'Google Alerts', cost: 'Kostenlos' },
    ],
    alertTriggers: [
      'Konkurrent veröffentlicht Stadtteil-Landingpages',
      'Neue FAQ-Schema auf Konkurrenz-Seite entdeckt',
      'Konkurrent rankt plötzlich für dein Haupt-Keyword',
    ],
    actionTemplate: 'Content-Gap-Analyse durchführen → Eigene lokale Landingpages erstellen → Schema Markup erweitern → Überholstrategie für verlorene Keywords',
  },
  {
    id: 'pricing-offers',
    title: 'Preise, Angebote & Aktionen',
    icon: <Zap className="w-4 h-4" />,
    colorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    whatToTrack: [
      'Google Posts mit Angeboten und Aktionen',
      'Preisänderungen auf der Website',
      'Saisonale Kampagnen und Sonderaktionen',
      'Neue Dienstleistungen oder Produkte',
      'Coupon- und Rabatt-Strategien',
    ],
    frequency: '2× pro Monat',
    tools: [
      { name: 'Google Maps & Website (manuell)', cost: 'Kostenlos' },
      { name: 'Visualping (Website-Monitoring)', cost: 'Ab $10/Mo' },
      { name: 'Google Alerts', cost: 'Kostenlos' },
    ],
    alertTriggers: [
      'Aggressive Preissenkung bei einem Konkurrenten',
      'Neues Produkt/Service das du nicht anbietest',
      'Saisonale Kampagne die du verpasst hast',
    ],
    actionTemplate: 'Eigene Angebots-Strategie überarbeiten → Differenzierung statt Preiskrieg → Alleinstellungsmerkmale stärker kommunizieren',
  },
];

const monitoringSchedule = [
  { task: 'Local Pack Position prüfen (Top-3 Keywords)', freq: 'Wöchentlich', priority: 'critical' as const, minutes: 5 },
  { task: 'Konkurrenz-Bewertungen scannen', freq: 'Wöchentlich', priority: 'high' as const, minutes: 10 },
  { task: 'GBP-Posts der Konkurrenz überprüfen', freq: 'Wöchentlich', priority: 'high' as const, minutes: 10 },
  { task: 'Keyword-Rankings vergleichen', freq: '2× Monat', priority: 'high' as const, minutes: 15 },
  { task: 'Backlink-Profil Vergleich', freq: 'Monatlich', priority: 'medium' as const, minutes: 20 },
  { task: 'Citation-Audit durchführen', freq: 'Monatlich', priority: 'medium' as const, minutes: 15 },
  { task: 'Content-Gap-Analyse aktualisieren', freq: 'Monatlich', priority: 'medium' as const, minutes: 30 },
  { task: 'Vollständige Wettbewerber-Scorecard aktualisieren', freq: 'Monatlich', priority: 'high' as const, minutes: 45 },
  { task: 'Strategie-Review & Anpassungen', freq: 'Quartalsweise', priority: 'critical' as const, minutes: 60 },
];

const priorityStyles = {
  critical: 'bg-destructive/10 text-destructive border-destructive/20',
  high: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  medium: 'bg-muted text-muted-foreground border-border',
};

interface Props {
  compact?: boolean;
}

export default function CompetitorTrackingStrategy({ compact = false }: Props) {
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set(['gbp-activity']));
  const [activeTab, setActiveTab] = useState<'areas' | 'schedule' | 'scorecard'>('areas');
  const [copied, setCopied] = useState(false);

  const displayAreas = compact ? trackingAreas.slice(0, 3) : trackingAreas;

  const toggleArea = (id: string) => {
    setExpandedAreas(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const totalMinutesMonth = monitoringSchedule.reduce((sum, t) => {
    const multiplier = t.freq === 'Wöchentlich' ? 4 : t.freq === '2× Monat' ? 2 : t.freq === 'Quartalsweise' ? 0.33 : 1;
    return sum + t.minutes * multiplier;
  }, 0);

  const generateTemplate = () => {
    let text = '# Wettbewerber-Tracking Strategie\n\n';
    text += '## Tracking-Bereiche\n\n';
    displayAreas.forEach(a => {
      text += `### ${a.title}\n`;
      text += `Frequenz: ${a.frequency}\n`;
      text += `Was tracken:\n`;
      a.whatToTrack.forEach(w => text += `  ☐ ${w}\n`);
      text += `⚠️ Alarm bei:\n`;
      a.alertTriggers.forEach(t => text += `  - ${t}\n`);
      text += `→ Maßnahme: ${a.actionTemplate}\n\n`;
    });
    if (!compact) {
      text += '## Monitoring-Zeitplan\n\n';
      monitoringSchedule.forEach(s => {
        text += `☐ ${s.task} (${s.freq}, ~${s.minutes} Min.)\n`;
      });
      text += `\nGeschätzter Zeitaufwand: ~${Math.round(totalMinutesMonth)} Min./Monat\n`;
    }
    text += '\n## Scorecard-Vorlage\n\n';
    text += '| Metrik | Du | Konk. 1 | Konk. 2 | Konk. 3 |\n';
    text += '|--------|----|---------|---------|---------|\n';
    ['Bewertungen', 'Rating', 'Citations', 'GBP %', 'Backlinks', 'Posts/Mo', 'Fotos', 'Antwort-%'].forEach(m => {
      text += `| ${m} | _ | _ | _ | _ |\n`;
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary="Interactive competitor tracking strategy with 5 monitoring areas, alert triggers, scheduling, and scorecard template">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border border-rose-500/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-rose-600" />
              Wettbewerber-Tracking Strategie
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {compact ? '3' : '5'} Monitoring-Bereiche • Alarm-Trigger • Zeitplan • Scorecard-Vorlage
            </p>
          </div>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-rose-500/10 text-rose-700 hover:bg-rose-500/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Strategie kopieren'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['areas', 'schedule', 'scorecard'] as const)
          .filter(t => !compact || t === 'areas')
          .map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              {tab === 'areas' ? 'Monitoring-Bereiche' : tab === 'schedule' ? 'Zeitplan' : 'Scorecard'}
            </button>
          ))}
      </div>

      {/* Areas tab */}
      {activeTab === 'areas' && (
        <div className="space-y-3">
          {displayAreas.map(area => {
            const isExpanded = expandedAreas.has(area.id);
            return (
              <Card key={area.id}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleArea(area.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <Badge variant="outline" className={`text-xs ${area.colorClass}`}>{area.icon}</Badge>
                      <span className="text-sm font-semibold text-foreground">{area.title}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      <Clock className="w-2.5 h-2.5 mr-0.5" /> {area.frequency}
                    </Badge>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-4">
                    {/* What to track */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-primary" /> Was tracken
                      </h4>
                      <div className="space-y-1.5">
                        {area.whatToTrack.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Alert triggers */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-destructive" /> Alarm-Trigger
                      </h4>
                      <div className="space-y-1.5">
                        {area.alertTriggers.map((trigger, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs bg-destructive/5 text-destructive border border-destructive/10 rounded-lg px-2.5 py-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                            {trigger}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2">🔧 Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.tools.map((t, i) => (
                          <Badge key={i} variant="outline" className={`text-[10px] ${t.cost === 'Kostenlos' ? 'bg-green-500/10 text-green-700 border-green-500/20' : ''}`}>
                            {t.name} — {t.cost}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action template */}
                    <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div><strong>Maßnahme: </strong>{area.actionTemplate}</div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Schedule tab */}
      {activeTab === 'schedule' && !compact && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            Geschätzter Gesamtaufwand: <strong className="text-foreground">~{Math.round(totalMinutesMonth)} Min./Monat</strong> (~{Math.round(totalMinutesMonth / 60 * 10) / 10} Std.)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 font-semibold text-foreground">Aufgabe</th>
                  <th className="text-center py-2 px-2 font-semibold text-foreground">Frequenz</th>
                  <th className="text-center py-2 px-2 font-semibold text-foreground">Priorität</th>
                  <th className="text-right py-2 pl-2 font-semibold text-foreground">~Min.</th>
                </tr>
              </thead>
              <tbody>
                {monitoringSchedule.map((item, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-2 pr-3 text-foreground">{item.task}</td>
                    <td className="text-center py-2 px-2 text-muted-foreground">{item.freq}</td>
                    <td className="text-center py-2 px-2">
                      <Badge variant="outline" className={`text-[10px] ${priorityStyles[item.priority]}`}>
                        {item.priority === 'critical' ? 'Kritisch' : item.priority === 'high' ? 'Hoch' : 'Mittel'}
                      </Badge>
                    </td>
                    <td className="text-right py-2 pl-2 text-muted-foreground">{item.minutes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Scorecard tab */}
      {activeTab === 'scorecard' && !compact && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Fülle diese Scorecard monatlich aus, um Fortschritte und Lücken auf einen Blick zu sehen:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 font-semibold text-foreground">Metrik</th>
                  <th className="text-center py-2 px-2 font-semibold text-primary">Du</th>
                  <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Konk. 1</th>
                  <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Konk. 2</th>
                  <th className="text-center py-2 px-2 font-semibold text-muted-foreground">Konk. 3</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Bewertungen (Anzahl)', icon: <Star className="w-3 h-3 text-amber-500" /> },
                  { metric: 'Durchschnittliches Rating', icon: <Star className="w-3 h-3 text-amber-500" /> },
                  { metric: 'Antwort-Rate (%)', icon: <MessageSquare className="w-3 h-3 text-primary" /> },
                  { metric: 'GBP Vollständigkeit (%)', icon: <CheckCircle2 className="w-3 h-3 text-green-600" /> },
                  { metric: 'Citations (Anzahl)', icon: <Globe className="w-3 h-3 text-violet-600" /> },
                  { metric: 'Backlinks', icon: <Link2 className="w-3 h-3 text-primary" /> },
                  { metric: 'Fotos im GBP', icon: <Camera className="w-3 h-3 text-rose-600" /> },
                  { metric: 'Posts pro Monat', icon: <FileText className="w-3 h-3 text-green-600" /> },
                  { metric: 'Local Pack Position', icon: <TrendingUp className="w-3 h-3 text-primary" /> },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-2 pr-3 text-foreground flex items-center gap-1.5">
                      {row.icon} {row.metric}
                    </td>
                    <td className="text-center py-2 px-2 bg-primary/5 font-medium text-foreground">—</td>
                    <td className="text-center py-2 px-2 text-muted-foreground">—</td>
                    <td className="text-center py-2 px-2 text-muted-foreground">—</td>
                    <td className="text-center py-2 px-2 text-muted-foreground">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div><strong>Tipp:</strong> Nutze die "Strategie kopieren"-Funktion oben, um diese Scorecard als Markdown-Vorlage in dein Reporting-Dokument einzufügen.</div>
          </div>
        </div>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Kurzversion mit 3 von 5 Bereichen. Die vollständige Strategie mit Zeitplan und Scorecard findest du in der{' '}
          <a href="/blog/google-maps-konkurrenzanalyse" className="text-primary underline">Google Maps Konkurrenzanalyse</a>.
        </p>
      )}
    </div>
  );
}
