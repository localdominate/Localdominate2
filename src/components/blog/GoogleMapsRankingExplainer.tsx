import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown, ChevronRight, MapPin, Target, BarChart3, Search,
  Globe, Eye, AlertTriangle, Lightbulb, TrendingUp, TrendingDown,
  Grid3X3, Navigation, Clock, Zap, CheckCircle2, Copy, Check,
  Smartphone, Star, Layers
} from 'lucide-react';

interface TrackingMethod {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  whatItMeasures: string;
  howItWorks: string;
  tools: { name: string; cost: string; bestFor: string }[];
  frequency: string;
  limitations: string;
  proTip: string;
  metrics: { label: string; description: string }[];
}

const trackingMethods: TrackingMethod[] = [
  {
    id: 'local-pack',
    title: 'Local Pack Position Tracking',
    icon: <MapPin className="w-4 h-4" />,
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    whatItMeasures: 'Deine Position im Google Maps 3-Pack (die Top-3 Ergebnisse über den organischen Suchergebnissen).',
    howItWorks: 'Du suchst nach deinen Ziel-Keywords und dokumentierst, ob du im 3-Pack erscheinst und auf welcher Position (1, 2 oder 3). Wichtig: Position 4–7 sind nur sichtbar nach Klick auf "Mehr Orte".',
    tools: [
      { name: 'Google Search Console', cost: 'Kostenlos', bestFor: 'Grundlegendes Keyword-Tracking' },
      { name: 'BrightLocal', cost: 'Ab $39/Mo', bestFor: 'Professionelles Local Pack Tracking' },
      { name: 'SE Ranking', cost: 'Ab $52/Mo', bestFor: 'Kombination aus Local + organischem Tracking' },
    ],
    frequency: 'Wöchentlich',
    limitations: 'Local Pack Ergebnisse variieren stark nach Standort des Suchenden. Ein Tracking von einem festen Standort zeigt nur eine Perspektive.',
    proTip: 'Tracke immer von mindestens 2 verschiedenen Standorten — z.B. dein Geschäftsstandort und der Stadtrand.',
    metrics: [
      { label: 'Pack Position (1–3)', description: 'Deine Position im sichtbaren 3-Pack' },
      { label: 'Pack Position (4–7)', description: 'Sichtbar nach "Mehr Orte" Klick' },
      { label: 'Nicht sichtbar', description: 'Außerhalb der Top-7 oder nicht gelistet' },
      { label: 'CTR-Benchmark', description: 'Position 1: ~30% CTR, Position 2: ~18%, Position 3: ~12%' },
    ],
  },
  {
    id: 'geo-grid',
    title: 'Geo-Grid Ranking (Heatmap)',
    icon: <Grid3X3 className="w-4 h-4" />,
    colorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    whatItMeasures: 'Dein Ranking aus verschiedenen geografischen Punkten rund um deinen Standort — dargestellt als Heatmap.',
    howItWorks: 'Ein Raster (z.B. 5×5 oder 7×7) wird um deinen Standort gelegt. Für jeden Rasterpunkt wird dein Ranking für ein Keyword gemessen. Ergebnis: Eine Karte die zeigt, wo du stark bist und wo nicht.',
    tools: [
      { name: 'Local Falcon', cost: 'Ab $25/Mo', bestFor: 'Dediziertes Geo-Grid Tool, beste Visualisierung' },
      { name: 'BrightLocal (Local Search Grid)', cost: 'Ab $39/Mo', bestFor: 'All-in-One mit Geo-Grid Feature' },
      { name: 'Places Scout', cost: 'Ab $20/Mo', bestFor: 'Budget-Option für Geo-Grid Tracking' },
    ],
    frequency: 'Monatlich (wöchentlich bei aktiven Optimierungen)',
    limitations: 'Verbraucht Credits schnell bei großen Rastern. Ein 7×7 Grid = 49 Messpunkte pro Keyword. Kosten steigen mit der Anzahl der Keywords.',
    proTip: 'Starte mit einem 5×5 Grid (25 Punkte) im 5km Radius für dein wichtigstes Keyword. Erweitere erst bei Bedarf.',
    metrics: [
      { label: 'Durchschnittliche Grid-Position', description: 'Mittelwert aller Messpunkte (z.B. Ø 3.2)' },
      { label: 'Top-3 Abdeckung', description: '% der Rasterpunkte, an denen du im 3-Pack bist' },
      { label: 'Sichtbarkeitsradius', description: 'Maximale Entfernung mit Top-3 Ranking in km' },
      { label: 'Schwachstellen-Zonen', description: 'Richtungen/Bereiche mit Position >7' },
    ],
  },
  {
    id: 'gbp-insights',
    title: 'GBP Performance Insights',
    icon: <BarChart3 className="w-4 h-4" />,
    colorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    whatItMeasures: 'Wie Nutzer dein Google Business Profil finden und damit interagieren — direkte Daten von Google.',
    howItWorks: 'Google Business Profil Dashboard → Performance. Zeigt Suchanfragen, Profilaufrufe, Aktionen (Anrufe, Routen, Website-Klicks) über Zeit.',
    tools: [
      { name: 'GBP Dashboard (Insights)', cost: 'Kostenlos', bestFor: 'Offizielle Daten direkt von Google' },
      { name: 'Google Business Profile API', cost: 'Kostenlos (technisch)', bestFor: 'Automatisiertes Reporting für mehrere Standorte' },
    ],
    frequency: 'Wöchentlich',
    limitations: 'GBP Insights zeigen nicht die exakte Ranking-Position, sondern nur Impressionen und Interaktionen. Daten haben 2–3 Tage Verzögerung.',
    proTip: 'Die Suchanfragen-Übersicht ist Gold wert: Sie zeigt dir, welche Keywords Nutzer tatsächlich verwenden, um dich zu finden — oft anders als vermutet.',
    metrics: [
      { label: 'Suchanfragen', description: 'Keywords, über die Nutzer dein Profil gefunden haben' },
      { label: 'Profilaufrufe (Suche vs. Maps)', description: 'Wie viele Nutzer dein Profil sehen' },
      { label: 'Aktionen', description: 'Anrufe, Routen-Anfragen, Website-Klicks' },
      { label: 'Foto-Aufrufe', description: 'Wie oft deine Fotos angesehen werden (vs. Wettbewerber)' },
    ],
  },
  {
    id: 'organic-local',
    title: 'Organisches lokales Ranking',
    icon: <Search className="w-4 h-4" />,
    colorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    whatItMeasures: 'Deine Position in den regulären (organischen) Suchergebnissen für lokale Keywords — unterhalb des Local Packs.',
    howItWorks: 'Google Search Console → Leistung → nach Suchanfragen filtern. Oder externe Rank-Tracker mit lokalem Standort konfigurieren.',
    tools: [
      { name: 'Google Search Console', cost: 'Kostenlos', bestFor: 'Echte Google-Daten, durchschnittliche Position' },
      { name: 'SE Ranking', cost: 'Ab $52/Mo', bestFor: 'Tägliches Tracking mit Standort-Filterung' },
      { name: 'Ubersuggest', cost: 'Ab $29/Mo', bestFor: 'Budget-freundlich mit lokalem Tracking' },
    ],
    frequency: 'Wöchentlich (GSC) / Täglich (externe Tools)',
    limitations: 'GSC zeigt Durchschnittspositionen über einen Zeitraum, nicht tagesaktuelle Positionen. Externe Tools können von echten Google-Ergebnissen abweichen.',
    proTip: 'In GSC kannst du nach Land und Gerät filtern. "Mobil" + "Deutschland" gibt dir die realistischste Einschätzung lokaler Rankings.',
    metrics: [
      { label: 'Durchschnittliche Position', description: 'Mittelwert über den Tracking-Zeitraum' },
      { label: 'Impressionen', description: 'Wie oft du in Suchergebnissen erscheinst' },
      { label: 'CTR (Klickrate)', description: 'Klicks / Impressionen — Ziel: >5% für lokale Keywords' },
      { label: 'Klicks', description: 'Tatsächliche Besucher über die organische Suche' },
    ],
  },
  {
    id: 'competitor-gap',
    title: 'Wettbewerber-Ranking-Vergleich',
    icon: <Eye className="w-4 h-4" />,
    colorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    whatItMeasures: 'Wie dein Ranking im Vergleich zu deinen Top-Wettbewerbern im Local Pack aussieht.',
    howItWorks: 'Tracke die gleichen Keywords für dich und 3–5 Wettbewerber. Vergleiche Local Pack Positionen, Bewertungsanzahl, Antwort-Rate und Foto-Anzahl.',
    tools: [
      { name: 'BrightLocal', cost: 'Ab $39/Mo', bestFor: 'Wettbewerber-Vergleich mit Citation-Tracking' },
      { name: 'Semrush (Position Tracking)', cost: 'Ab $130/Mo', bestFor: 'Umfassendes Wettbewerber-Tracking' },
      { name: 'Manuelle Analyse', cost: 'Kostenlos', bestFor: 'Monatlicher Quick-Check für 1–2 Keywords' },
    ],
    frequency: 'Monatlich',
    limitations: 'Manuelle Analyse ist zeitaufwändig und nicht reproduzierbar. Automatisierte Tools zeigen nicht alle GBP-Änderungen der Konkurrenz.',
    proTip: 'Erstelle eine "Wettbewerber-Scorecard" mit: Bewertungen, Antwort-Rate, Foto-Anzahl, Post-Frequenz, Backlinks. Monatlich aktualisieren.',
    metrics: [
      { label: 'Ranking-Differenz', description: 'Positionen Unterschied zu jedem Wettbewerber' },
      { label: 'Bewertungs-Gap', description: 'Differenz bei Anzahl & Durchschnitt der Bewertungen' },
      { label: 'Citation-Gap', description: 'Verzeichnisse, in denen Wettbewerber gelistet sind, du aber nicht' },
      { label: 'Content-Gap', description: 'Keywords, für die Wettbewerber ranken, du aber nicht' },
    ],
  },
];

const interpretationGuide = [
  {
    scenario: 'Ranking steigt kontinuierlich über 4+ Wochen',
    icon: <TrendingUp className="w-4 h-4 text-green-600" />,
    meaning: 'Deine Optimierungen greifen. Google vertraut deinem Profil zunehmend.',
    action: 'Weiter optimieren. Neue Keywords angreifen. Bewertungs-Tempo beibehalten.',
  },
  {
    scenario: 'Ranking fällt plötzlich um 5+ Positionen',
    icon: <TrendingDown className="w-4 h-4 text-destructive" />,
    meaning: 'Mögliche Ursachen: Algorithmus-Update, GBP-Änderung, technisches Problem, Wettbewerber-Offensive.',
    action: 'Sofort prüfen: GSC Manuelle Maßnahmen → GBP auf Änderungen → Core Web Vitals → Wettbewerber im Local Pack.',
  },
  {
    scenario: 'Ranking schwankt täglich um 2–3 Positionen',
    icon: <Navigation className="w-4 h-4 text-amber-600" />,
    meaning: 'Normal — Google testet verschiedene Ergebnisse. Wird "Ranking Flux" oder "Google Dance" genannt.',
    action: 'Keine Panik. Wöchentliche Durchschnitte betrachten statt tägliche Schwankungen. Erst handeln bei Trend über 2+ Wochen.',
  },
  {
    scenario: 'Geo-Grid zeigt starke Position nahe, schwach am Stadtrand',
    icon: <Grid3X3 className="w-4 h-4 text-primary" />,
    meaning: 'Typisch für Einzelstandorte. Proximity (Nähe) ist der stärkste Faktor — je weiter weg, desto schwerer rankst du.',
    action: 'Lokale Landingpages für Stadtteil-Keywords erstellen. Citations in Stadtteil-Verzeichnissen aufbauen. Lokale Backlinks aus der Zielzone.',
  },
  {
    scenario: 'GBP Impressionen hoch, aber Aktionen niedrig',
    icon: <Eye className="w-4 h-4 text-violet-600" />,
    meaning: 'Nutzer sehen dein Profil, interagieren aber nicht. Profil ist nicht überzeugend genug.',
    action: 'Mehr Fotos hochladen → Beschreibung optimieren → Google Posts aktiv nutzen → Bewertungs-Score verbessern.',
  },
  {
    scenario: 'Wettbewerber hat dich überholt trotz besserer Bewertungen',
    icon: <Star className="w-4 h-4 text-amber-500" />,
    meaning: 'Bewertungen sind nur EIN Faktor. Der Wettbewerber hat vermutlich bessere Backlinks, mehr Citations oder relevantere GBP-Kategorien.',
    action: 'Vollständigen Wettbewerber-Audit durchführen. Backlink-Profile vergleichen. GBP-Optimierung überprüfen.',
  },
];

interface Props {
  compact?: boolean;
}

export default function GoogleMapsRankingExplainer({ compact = false }: Props) {
  const [expandedMethods, setExpandedMethods] = useState<Set<string>>(new Set(['local-pack']));
  const [activeTab, setActiveTab] = useState<'methods' | 'interpret'>('methods');
  const [copied, setCopied] = useState(false);

  const displayMethods = compact ? trackingMethods.slice(0, 3) : trackingMethods;

  const toggleMethod = (id: string) => {
    setExpandedMethods(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const generateTemplate = () => {
    let text = '# Google Maps Ranking Tracking Guide\n\n';
    text += '## Tracking-Methoden\n\n';
    displayMethods.forEach(m => {
      text += `### ${m.title}\n`;
      text += `Was es misst: ${m.whatItMeasures}\n`;
      text += `Frequenz: ${m.frequency}\n`;
      text += `Tools:\n`;
      m.tools.forEach(t => text += `  - ${t.name} (${t.cost}) — ${t.bestFor}\n`);
      text += `💡 Tipp: ${m.proTip}\n`;
      text += `Metriken:\n`;
      m.metrics.forEach(met => text += `  - ${met.label}: ${met.description}\n`);
      text += '\n';
    });
    if (!compact) {
      text += '## Interpretation\n\n';
      interpretationGuide.forEach(g => {
        text += `Szenario: ${g.scenario}\n`;
        text += `Bedeutung: ${g.meaning}\n`;
        text += `Maßnahme: ${g.action}\n\n`;
      });
    }
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary="Interactive Google Maps ranking tracking guide with 5 methods, tool comparisons, and data interpretation framework">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Google Maps Ranking Tracking erklärt
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {compact ? '3' : '5'} Tracking-Methoden • Tool-Vergleiche • Daten richtig interpretieren
            </p>
          </div>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Guide kopieren'}
          </button>
        </div>
      </div>

      {/* Tab toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('methods')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'methods' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
        >
          Tracking-Methoden
        </button>
        {!compact && (
          <button
            onClick={() => setActiveTab('interpret')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'interpret' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          >
            Daten interpretieren
          </button>
        )}
      </div>

      {/* Methods view */}
      {activeTab === 'methods' && (
        <div className="space-y-3">
          {displayMethods.map(method => {
            const isExpanded = expandedMethods.has(method.id);

            return (
              <Card key={method.id}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleMethod(method.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <Badge variant="outline" className={`text-xs ${method.colorClass}`}>{method.icon}</Badge>
                      <span className="text-sm font-semibold text-foreground">{method.title}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      <Clock className="w-2.5 h-2.5 mr-0.5" /> {method.frequency}
                    </Badge>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-4">
                    {/* What & How */}
                    <div className="space-y-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-primary" /> Was es misst
                        </h4>
                        <p className="text-sm text-muted-foreground">{method.whatItMeasures}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-primary" /> So funktioniert's
                        </h4>
                        <p className="text-sm text-muted-foreground">{method.howItWorks}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2">📊 Wichtige Metriken</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {method.metrics.map((m, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs border border-border rounded-lg p-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium text-foreground">{m.label}</span>
                              <p className="text-muted-foreground mt-0.5">{m.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools comparison */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2">🔧 Empfohlene Tools</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-1.5 pr-3 font-semibold text-foreground">Tool</th>
                              <th className="text-center py-1.5 px-2 font-semibold text-foreground">Kosten</th>
                              <th className="text-left py-1.5 pl-2 font-semibold text-foreground">Am besten für</th>
                            </tr>
                          </thead>
                          <tbody>
                            {method.tools.map((t, i) => (
                              <tr key={i} className="border-b border-border/50 last:border-0">
                                <td className="py-1.5 pr-3 font-medium text-foreground">{t.name}</td>
                                <td className="text-center py-1.5 px-2">
                                  <Badge variant="outline" className={`text-[10px] ${t.cost === 'Kostenlos' ? 'bg-green-500/10 text-green-700 border-green-500/20' : ''}`}>
                                    {t.cost}
                                  </Badge>
                                </td>
                                <td className="py-1.5 pl-2 text-muted-foreground">{t.bestFor}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Limitation + Pro tip */}
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="flex items-start gap-2 text-xs bg-amber-500/5 text-amber-700 border border-amber-500/10 rounded-lg p-3">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div><strong>Einschränkung: </strong>{method.limitations}</div>
                      </div>
                      <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
                        <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div><strong>Profi-Tipp: </strong>{method.proTip}</div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Interpretation view */}
      {activeTab === 'interpret' && !compact && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Ranking-Daten sind nur nützlich, wenn du sie richtig interpretierst. Hier die häufigsten Szenarien und was sie bedeuten:
          </p>
          {interpretationGuide.map((guide, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted flex-shrink-0 mt-0.5">
                    {guide.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground">{guide.scenario}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{guide.meaning}</p>
                    <div className="mt-2 flex items-start gap-1.5 text-xs bg-green-500/5 text-green-700 border border-green-500/10 rounded px-2.5 py-1.5">
                      <TrendingUp className="w-3 h-3 flex-shrink-0 mt-0.5" />
                      <span><strong>Maßnahme:</strong> {guide.action}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Kurzversion mit 3 von 5 Tracking-Methoden. Den vollständigen Guide mit Daten-Interpretation findest du im{' '}
          <a href="/blog/google-maps-ranking-tracker" className="text-primary underline">Google Maps Ranking Tracker</a>.
        </p>
      )}
    </div>
  );
}
