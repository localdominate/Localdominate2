import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown, ChevronRight, Search, Target, MapPin, Users,
  Lightbulb, Clock, CheckCircle2, Copy, Check, TrendingUp,
  Zap, FileText, Globe, Star, MessageSquare, ShoppingCart,
  Phone, AlertTriangle, ArrowRight
} from 'lucide-react';

interface KeywordCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  description: string;
  pattern: string;
  examples: string[];
  searchIntent: string;
  conversionRate: string;
  volume: string;
  difficulty: string;
  whereTo: string;
}

const keywordCategories: KeywordCategory[] = [
  {
    id: 'service-location',
    title: 'Service + Standort Keywords',
    icon: <MapPin className="w-4 h-4" />,
    colorClass: 'bg-primary/10 text-primary border-primary/20',
    description: 'Die Grundlage jeder lokalen Keyword-Strategie. Kombiniere deine Dienstleistung mit dem Standort.',
    pattern: '[Dienstleistung] + [Stadt/Stadtteil]',
    examples: ['Zahnarzt München Schwabing', 'Steuerberater Hamburg Altona', 'Friseur Berlin Kreuzberg', 'Rechtsanwalt Köln Innenstadt'],
    searchIntent: 'Transaktional — Nutzer sucht aktiv einen Anbieter',
    conversionRate: 'Sehr hoch (8–15%)',
    volume: 'Mittel (50–500/Monat)',
    difficulty: 'Mittel bis hoch',
    whereTo: 'Homepage Title, GBP-Beschreibung, Service-Seiten H1',
  },
  {
    id: 'near-me',
    title: '"In der Nähe" Keywords',
    icon: <Globe className="w-4 h-4" />,
    colorClass: 'bg-green-500/10 text-green-700 border-green-500/20',
    description: 'Mobile Suchanfragen mit Standort-Intent. Google entscheidet basierend auf GPS, welche Ergebnisse gezeigt werden.',
    pattern: '[Dienstleistung] + in der Nähe / in meiner Nähe',
    examples: ['Restaurant in der Nähe', 'Schlüsseldienst in meiner Nähe', 'Apotheke in der Nähe geöffnet', 'Tankstelle in der Nähe'],
    searchIntent: 'Navigational + Transaktional — Sofortige Handlungsabsicht',
    conversionRate: 'Sehr hoch (10–20%)',
    volume: 'Hoch (500–5.000/Monat)',
    difficulty: 'Hoch (GBP-Optimierung entscheidend)',
    whereTo: 'GBP-Profil (wird automatisch getriggert), Schema Markup, Mobile-optimierte Seiten',
  },
  {
    id: 'problem-solution',
    title: 'Problem/Frage Keywords',
    icon: <MessageSquare className="w-4 h-4" />,
    colorClass: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    description: 'Nutzer beschreiben ein Problem statt eine Lösung zu suchen. Perfekt für Content-Marketing und FAQ-Seiten.',
    pattern: '[Problem/Frage] + [optional: Standort]',
    examples: ['Wasserhahn tropft was tun', 'Zahnschmerzen am Wochenende', 'Schimmel in der Wohnung entfernen', 'Steuererklärung Frist verpasst'],
    searchIntent: 'Informational — Nutzer sucht Antworten, wird oft zum Kunden',
    conversionRate: 'Mittel (3–8%)',
    volume: 'Hoch (200–2.000/Monat)',
    difficulty: 'Niedrig bis mittel',
    whereTo: 'Blog-Artikel, FAQ-Bereich, Google Posts, GBP Q&A',
  },
  {
    id: 'qualifier',
    title: 'Qualifier Keywords',
    icon: <Star className="w-4 h-4" />,
    colorClass: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    description: 'Suchbegriffe mit Bewertungs- oder Vergleichsabsicht. Der Nutzer ist bereits in der Entscheidungsphase.',
    pattern: '[Qualifier] + [Dienstleistung] + [Standort]',
    examples: ['bester Zahnarzt München', 'günstigster Schlüsseldienst Berlin', 'Friseur Bewertungen Hamburg', 'Top Steuerberater Köln'],
    searchIntent: 'Kommerziell — Vergleicht aktiv Anbieter',
    conversionRate: 'Hoch (6–12%)',
    volume: 'Mittel (30–300/Monat)',
    difficulty: 'Mittel',
    whereTo: 'Testimonial-Seiten, Bewertungs-Strategie, GBP-Bewertungen, Title-Tags',
  },
  {
    id: 'long-tail-local',
    title: 'Long-Tail lokale Keywords',
    icon: <Target className="w-4 h-4" />,
    colorClass: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    description: 'Spezifische, längere Suchphrasen mit weniger Volumen aber höchster Relevanz und geringstem Wettbewerb.',
    pattern: '[Spezifische Dienstleistung] + [Merkmal] + [Standort]',
    examples: ['veganes Restaurant mit Terrasse Hamburg', 'Zahnarzt Angstpatienten München Sendling', 'Schlüsseldienst Sonntag Notdienst Berlin', 'Steuerberater für Freelancer Köln'],
    searchIntent: 'Hochspezifisch transaktional — weiß genau was er will',
    conversionRate: 'Sehr hoch (12–25%)',
    volume: 'Niedrig (10–100/Monat)',
    difficulty: 'Niedrig',
    whereTo: 'Spezialisierte Landingpages, Blog-Content, GBP-Posts, Service-Unterseiten',
  },
  {
    id: 'seasonal-event',
    title: 'Saisonale & Event Keywords',
    icon: <Clock className="w-4 h-4" />,
    colorClass: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
    description: 'Zeitgebundene Keywords rund um Feiertage, Events und Jahreszeiten. Müssen frühzeitig vorbereitet werden.',
    pattern: '[Event/Saison] + [Dienstleistung] + [Standort]',
    examples: ['Weihnachtsfeier Restaurant München', 'Heizung Wartung Herbst Berlin', 'Osterbrunch Hamburg', 'Steuerberatung Jahresende'],
    searchIntent: 'Zeitgebunden transaktional — Deadline-getrieben',
    conversionRate: 'Hoch (8–15%)',
    volume: 'Saisonal schwankend (Peaks: 500+/Monat)',
    difficulty: 'Niedrig bis mittel (oft unterschätzt)',
    whereTo: 'Saisonale Landingpages, Google Posts (2-3 Monate vorher), GBP-Angebote, Blog-Content',
  },
];

const researchSteps = [
  {
    step: 1,
    title: 'Brainstorming: Kernbegriffe sammeln',
    time: '20 Min.',
    description: 'Liste alle Dienstleistungen, Produkte, Spezialisierungen und Stadtteil-Varianten auf.',
    tools: ['Eigenes Wissen', 'Team-Input', 'Kundengespräche'],
    output: '20–30 Kernbegriffe als Startpunkt',
  },
  {
    step: 2,
    title: 'Google Suggest & Verwandte Suchen',
    time: '30 Min.',
    description: 'Tippe jeden Kernbegriff in Google ein und notiere alle Vorschläge + "Verwandte Suchanfragen" am Seitenende.',
    tools: ['Google Suche', 'Google Maps Suche', 'AnswerThePublic (kostenlos)'],
    output: '50–80 erweiterte Keyword-Ideen',
  },
  {
    step: 3,
    title: 'Suchvolumen & Wettbewerb prüfen',
    time: '30 Min.',
    description: 'Prüfe das monatliche Suchvolumen und die Wettbewerbsstärke für deine Keywords.',
    tools: ['Google Keyword Planner (kostenlos)', 'Ubersuggest (begrenzt kostenlos)', 'Google Trends'],
    output: 'Keyword-Liste mit Volumen-Daten und Prioritäten',
  },
  {
    step: 4,
    title: 'Keywords kategorisieren & priorisieren',
    time: '20 Min.',
    description: 'Ordne alle Keywords den 6 Kategorien zu. Priorisiere nach: Relevanz × Volumen × Machbarkeit.',
    tools: ['Spreadsheet/Tabelle', 'Die 6 Kategorien oben als Framework'],
    output: 'Priorisierte Keyword-Map mit Zuordnung zu Seiten',
  },
  {
    step: 5,
    title: 'Content-Plan erstellen',
    time: '15 Min.',
    description: 'Ordne jedes priorisierte Keyword einer Seite/Aktion zu: Homepage, Service-Seite, Blog, GBP-Post, FAQ.',
    tools: ['Content-Kalender', 'Keyword-Map → Seiten-Zuordnung'],
    output: 'Umsetzungsplan mit klaren Zuweisungen',
  },
];

const industryExamples = [
  {
    industry: 'Gastronomie',
    icon: '🍽️',
    keywords: ['italienisches Restaurant [Stadt]', '[Küche] Lieferdienst [Stadtteil]', 'Mittagstisch [Stadt] günstig', 'Restaurant mit Biergarten [Stadt]'],
  },
  {
    industry: 'Handwerk',
    icon: '🔧',
    keywords: ['Elektriker Notdienst [Stadt]', 'Bad renovieren Kosten [Stadt]', 'Heizung installieren [Stadtteil]', 'Maler Angebot [Stadt]'],
  },
  {
    industry: 'Gesundheit',
    icon: '⚕️',
    keywords: ['Zahnarzt Angstpatienten [Stadt]', 'Orthopäde ohne Termin [Stadt]', 'Physiotherapie [Stadtteil]', 'Hausarzt Notdienst [Stadt]'],
  },
  {
    industry: 'Recht & Finanzen',
    icon: '⚖️',
    keywords: ['Anwalt Mietrecht [Stadt]', 'Steuerberater Freiberufler [Stadt]', 'Erstberatung kostenlos Anwalt [Stadt]', 'Scheidungsanwalt [Stadt]'],
  },
];

interface Props {
  compact?: boolean;
}

export default function LocalKeywordFramework({ compact = false }: Props) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['service-location']));
  const [activeTab, setActiveTab] = useState<'categories' | 'workflow' | 'industries'>('categories');
  const [copied, setCopied] = useState(false);

  const displayCategories = compact ? keywordCategories.slice(0, 3) : keywordCategories;

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const generateTemplate = () => {
    let text = '# Lokale Keyword-Recherche Framework\n\n';
    text += '## 6 Keyword-Kategorien\n\n';
    keywordCategories.forEach(c => {
      text += `### ${c.title}\n`;
      text += `Muster: ${c.pattern}\n`;
      text += `Suchintention: ${c.searchIntent}\n`;
      text += `Conversion-Rate: ${c.conversionRate}\n`;
      text += `Beispiele:\n`;
      c.examples.forEach(e => text += `  - ${e}\n`);
      text += `Wo einsetzen: ${c.whereTo}\n\n`;
    });
    text += '## 5-Schritte Workflow\n\n';
    researchSteps.forEach(s => {
      text += `${s.step}. ${s.title} (~${s.time})\n`;
      text += `   ${s.description}\n`;
      text += `   Output: ${s.output}\n\n`;
    });
    text += '## Branchen-Beispiele\n\n';
    industryExamples.forEach(ie => {
      text += `${ie.icon} ${ie.industry}:\n`;
      ie.keywords.forEach(k => text += `  - ${k}\n`);
      text += '\n';
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary="Interactive local keyword research framework with 6 categories, 5-step workflow, industry examples, and conversion metrics">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Keyword-Recherche Framework für lokale Unternehmen
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              6 Keyword-Kategorien • 5-Schritte Workflow • Branchen-Beispiele • Conversion-Benchmarks
            </p>
          </div>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Framework kopieren'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['categories', 'workflow', 'industries'] as const)
          .filter(t => !compact || t === 'categories')
          .map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              {tab === 'categories' ? 'Keyword-Kategorien' : tab === 'workflow' ? '5-Schritte Workflow' : 'Branchen-Beispiele'}
            </button>
          ))}
      </div>

      {/* Categories tab */}
      {activeTab === 'categories' && (
        <div className="space-y-3">
          {displayCategories.map(cat => {
            const isExpanded = expandedCategories.has(cat.id);
            return (
              <Card key={cat.id}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleCategory(cat.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <Badge variant="outline" className={`text-xs ${cat.colorClass}`}>{cat.icon}</Badge>
                      <span className="text-sm font-semibold text-foreground">{cat.title}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> {cat.conversionRate}
                    </Badge>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-4">
                    <p className="text-sm text-muted-foreground">{cat.description}</p>

                    {/* Pattern */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-foreground mb-1">📐 Muster</h4>
                      <code className="text-sm text-primary font-mono">{cat.pattern}</code>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2">💡 Beispiele</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.examples.map((ex, i) => (
                          <Badge key={i} variant="outline" className="text-[10px] font-normal">{ex}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { label: 'Suchintention', value: cat.searchIntent.split('—')[0].trim(), icon: <Target className="w-3 h-3" /> },
                        { label: 'Suchvolumen', value: cat.volume, icon: <TrendingUp className="w-3 h-3" /> },
                        { label: 'Schwierigkeit', value: cat.difficulty, icon: <AlertTriangle className="w-3 h-3" /> },
                        { label: 'Conversion', value: cat.conversionRate, icon: <ShoppingCart className="w-3 h-3" /> },
                      ].map((m, i) => (
                        <div key={i} className="border border-border rounded-lg p-2 text-center">
                          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">{m.icon}<span className="text-[10px]">{m.label}</span></div>
                          <div className="text-xs font-medium text-foreground">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Where to use */}
                    <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <div><strong>Wo einsetzen: </strong>{cat.whereTo}</div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Workflow tab */}
      {activeTab === 'workflow' && !compact && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Gesamtdauer: <strong className="text-foreground">~2 Stunden</strong> für eine vollständige lokale Keyword-Recherche.
          </p>
          {researchSteps.map((step, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                      <Badge variant="outline" className="text-[10px]">
                        <Clock className="w-2.5 h-2.5 mr-0.5" /> {step.time}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {step.tools.map((t, ti) => (
                        <Badge key={ti} variant="outline" className="text-[10px] bg-muted">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-green-700">
                      <ArrowRight className="w-3 h-3" />
                      <span><strong>Output:</strong> {step.output}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Industries tab */}
      {activeTab === 'industries' && !compact && (
        <div className="grid gap-3 sm:grid-cols-2">
          {industryExamples.map((ie, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {ie.icon} {ie.industry}
                </h4>
                <div className="space-y-1.5">
                  {ie.keywords.map((kw, ki) => (
                    <div key={ki} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <code className="font-mono text-foreground">{kw}</code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="sm:col-span-2">
            <CardContent className="p-4">
              <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div><strong>Tipp:</strong> Ersetze [Stadt] und [Stadtteil] mit deinem tatsächlichen Standort. Erstelle für die Top-5 Keywords jeweils eine eigene optimierte Seite.</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Kurzversion mit 3 von 6 Kategorien. Das vollständige Framework mit Workflow und Branchen-Beispielen findest du im{' '}
          <a href="/blog/local-seo-keywords-finden" className="text-primary underline">Keyword-Recherche Guide</a>.
        </p>
      )}
    </div>
  );
}
