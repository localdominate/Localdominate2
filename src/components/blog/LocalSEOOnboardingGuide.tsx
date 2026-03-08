import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight,
  Building2, Globe, MapPin, Star, LinkIcon, BarChart3,
  Clock, AlertTriangle, Lightbulb, Copy, Check,
  Utensils, Scissors, Wrench, Heart, ShoppingBag, Dumbbell, Briefcase, Scale
} from 'lucide-react';

type Industry = 'gastronomy' | 'beauty' | 'crafts' | 'health' | 'retail' | 'fitness' | 'services' | 'legal';

interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  priority: 'critical' | 'high' | 'medium';
  industryNotes?: Partial<Record<Industry, string>>;
}

interface OnboardingPhase {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  timeframe: string;
  tasks: OnboardingTask[];
  milestones: string[];
  commonMistake: string;
}

const industries: { key: Industry; label: string; icon: React.ReactNode }[] = [
  { key: 'gastronomy', label: 'Gastronomie', icon: <Utensils className="w-4 h-4" /> },
  { key: 'beauty', label: 'Beauty & Wellness', icon: <Scissors className="w-4 h-4" /> },
  { key: 'crafts', label: 'Handwerk', icon: <Wrench className="w-4 h-4" /> },
  { key: 'health', label: 'Gesundheit', icon: <Heart className="w-4 h-4" /> },
  { key: 'retail', label: 'Einzelhandel', icon: <ShoppingBag className="w-4 h-4" /> },
  { key: 'fitness', label: 'Fitness', icon: <Dumbbell className="w-4 h-4" /> },
  { key: 'services', label: 'Dienstleistung', icon: <Briefcase className="w-4 h-4" /> },
  { key: 'legal', label: 'Recht & Beratung', icon: <Scale className="w-4 h-4" /> },
];

const phases: OnboardingPhase[] = [
  {
    id: 'foundation',
    title: 'Phase 1: Fundament',
    subtitle: 'Google Business Profil & NAP-Standard',
    icon: <Building2 className="w-5 h-5" />,
    timeframe: 'Tag 1–3',
    milestones: [
      'GBP-Profil erstellt & Verifizierung gestartet',
      'NAP-Daten im einheitlichen Format dokumentiert',
      'Primär- und Sekundärkategorien gesetzt',
    ],
    commonMistake: 'Keywords im Firmennamen einfügen — führt zur Sperrung des Profils.',
    tasks: [
      {
        id: 'gbp-create',
        title: 'Google Business Profil erstellen',
        description: 'Firmenname exakt wie auf dem Schild, korrekte Adresse, Verifizierung starten.',
        timeEstimate: '30 Min',
        priority: 'critical',
        industryNotes: {
          gastronomy: 'Primärkategorie: "Restaurant" — Sekundär: Küchen-Art (z.B. "Italienisches Restaurant")',
          health: 'Primärkategorie exakt: "Zahnarzt", "Orthopäde" etc. — nicht zu allgemein wählen',
          crafts: 'Servicebereiche statt Adresse nutzen, falls kein Ladenlokal vorhanden',
          legal: '"Rechtsanwalt" oder "Steuerberater" als Primärkategorie — Fachgebiete als Sekundär',
        },
      },
      {
        id: 'nap-standardize',
        title: 'NAP-Master-Dokument anlegen',
        description: 'Name, Adresse, Telefon in exakt einem Format festlegen. Dieses Format überall verwenden.',
        timeEstimate: '15 Min',
        priority: 'critical',
      },
      {
        id: 'gbp-photos',
        title: 'Mindestens 10 Fotos hochladen',
        description: 'Logo, Außenansicht, Innenbereich, Team, Produkte/Leistungen. EXIF-Daten mit Standort.',
        timeEstimate: '45 Min',
        priority: 'high',
        industryNotes: {
          gastronomy: 'Gerichte, Speisekarte, Terrasse, Küche — min. 25 Fotos für Restaurants empfohlen',
          beauty: 'Vorher/Nachher-Bilder (mit Einwilligung), Behandlungsräume, Produkte',
          fitness: 'Gerätepark, Kursräume, Trainer-Team, Außenansicht',
        },
      },
      {
        id: 'gbp-details',
        title: 'Öffnungszeiten & Attribute ausfüllen',
        description: 'Reguläre + besondere Zeiten. Alle relevanten Attribute (WLAN, Rollstuhl, Parkplätze).',
        timeEstimate: '20 Min',
        priority: 'high',
      },
    ],
  },
  {
    id: 'website',
    title: 'Phase 2: Website-Basis',
    subtitle: 'Technisches SEO & lokale Signale',
    icon: <Globe className="w-5 h-5" />,
    timeframe: 'Tag 4–7',
    milestones: [
      'Kontaktseite mit NAP-Daten live',
      'LocalBusiness Schema Markup implementiert',
      'Meta-Titles mit Stadt-Keywords optimiert',
    ],
    commonMistake: 'Stadtname fehlt in Title-Tags und H1-Überschriften der wichtigsten Seiten.',
    tasks: [
      {
        id: 'contact-page',
        title: 'Kontakt- & Standortseite optimieren',
        description: 'NAP prominent sichtbar, Google Maps einbetten, Anfahrtsbeschreibung, Parkhinweise.',
        timeEstimate: '1 Std',
        priority: 'critical',
      },
      {
        id: 'schema-markup',
        title: 'LocalBusiness Schema Markup',
        description: 'JSON-LD mit @type, Name, Adresse, Geo-Koordinaten, Öffnungszeiten, Telefon.',
        timeEstimate: '45 Min',
        priority: 'critical',
        industryNotes: {
          gastronomy: '@type: "Restaurant" mit servesCuisine, menu, acceptsReservations',
          health: '@type: "Dentist" / "Physician" mit medicalSpecialty',
          legal: '@type: "LegalService" / "Attorney" mit practiceArea',
          fitness: '@type: "ExerciseGym" / "SportsActivityLocation"',
        },
      },
      {
        id: 'meta-optimize',
        title: 'Title & Meta-Descriptions optimieren',
        description: 'Muster: "[Leistung] in [Stadt] | [Firmenname]" — unter 60 Zeichen für Title.',
        timeEstimate: '1 Std',
        priority: 'high',
      },
      {
        id: 'mobile-check',
        title: 'Mobile-Optimierung prüfen',
        description: 'Google Mobile-Friendly Test, Click-to-Call, Core Web Vitals unter 2.5s LCP.',
        timeEstimate: '30 Min',
        priority: 'high',
      },
      {
        id: 'ssl-sitemap',
        title: 'SSL & Sitemap einrichten',
        description: 'HTTPS erzwingen, XML-Sitemap erstellen, in Google Search Console einreichen.',
        timeEstimate: '30 Min',
        priority: 'high',
      },
    ],
  },
  {
    id: 'citations',
    title: 'Phase 3: Citations aufbauen',
    subtitle: 'Branchenverzeichnisse & Konsistenz',
    icon: <MapPin className="w-5 h-5" />,
    timeframe: 'Woche 2',
    milestones: [
      'Top-10 Tier-1 Verzeichnisse eingereicht',
      'Branchenspezifische Portale abgedeckt',
      'NAP-Konsistenz über alle Einträge geprüft',
    ],
    commonMistake: 'Verschiedene Schreibweisen der Adresse (Str. vs. Straße, Tel.-Format).',
    tasks: [
      {
        id: 'tier1-directories',
        title: 'Tier-1 Verzeichnisse eintragen',
        description: 'Google, Bing Places, Apple Maps, Yelp, Das Örtliche, Gelbe Seiten, GoLocal.',
        timeEstimate: '2 Std',
        priority: 'critical',
      },
      {
        id: 'industry-directories',
        title: 'Branchenspezifische Portale',
        description: 'Die 5 wichtigsten Portale deiner Branche mit vollständigen Profilen bespielen.',
        timeEstimate: '1.5 Std',
        priority: 'high',
        industryNotes: {
          gastronomy: 'TripAdvisor, Lieferando, OpenTable, Restaurant-Kritik.de',
          health: 'Jameda, Doctolib, Sanego, DocInsider',
          crafts: 'MyHammer, Houzz, Bauhandwerk-Portal',
          legal: 'anwalt.de, Kanzlei-Kompass, Legal500',
          beauty: 'Treatwell, Booksy, Beauty24',
          fitness: 'FitnessFinder, ClassPass, Urban Sports Club',
          retail: 'Trustpilot, Shopvote, eKomi',
          services: 'ProvenExpert, WerKenntDenBesten, Cylex',
        },
      },
      {
        id: 'regional-directories',
        title: 'Regionale Verzeichnisse',
        description: 'Stadtportal, IHK-Firmenfinder, regionale Branchenbücher, Gemeinde-Website.',
        timeEstimate: '1 Std',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'reviews',
    title: 'Phase 4: Bewertungen starten',
    subtitle: 'Bewertungsstrategie & Reputation',
    icon: <Star className="w-5 h-5" />,
    timeframe: 'Woche 2–3',
    milestones: [
      'Bewertungs-Link erstellt & geteilt',
      'Erste 5 Google-Bewertungen erhalten',
      'Antwort-Templates für Bewertungen erstellt',
    ],
    commonMistake: 'Fake-Bewertungen kaufen — führt zur Löschung aller Bewertungen und GBP-Sperrung.',
    tasks: [
      {
        id: 'review-link',
        title: 'Google-Bewertungslink erstellen',
        description: 'Kurz-URL generieren, QR-Code erstellen, auf Visitenkarten und Rechnungen drucken.',
        timeEstimate: '20 Min',
        priority: 'critical',
      },
      {
        id: 'review-strategy',
        title: 'Systematische Bewertungsanfrage',
        description: '3–5 zufriedene Bestandskunden pro Woche persönlich ansprechen. Timing: nach positivem Erlebnis.',
        timeEstimate: '30 Min/Woche',
        priority: 'high',
        industryNotes: {
          gastronomy: 'QR-Code auf Tischaufsteller, Bewertungs-Bitte auf Rechnung',
          health: 'Nach erfolgreicher Behandlung persönlich ansprechen — nicht per Mail',
          crafts: 'Nach Auftragsabschluss mit Handschlag und Bewertungs-Karte',
          services: 'Follow-up E-Mail 24h nach Dienstleistung mit direktem Link',
        },
      },
      {
        id: 'review-responses',
        title: 'Antwort-Templates erstellen',
        description: 'Je 3 Varianten für positive, neutrale und negative Bewertungen. Personalisiert antworten.',
        timeEstimate: '45 Min',
        priority: 'high',
      },
    ],
  },
  {
    id: 'content-links',
    title: 'Phase 5: Content & Links',
    subtitle: 'Lokaler Content & Linkaufbau',
    icon: <LinkIcon className="w-5 h-5" />,
    timeframe: 'Woche 3–4',
    milestones: [
      'Lokale Landingpage für Hauptleistung erstellt',
      'Erster lokaler Blogbeitrag veröffentlicht',
      '3+ lokale Backlinks aufgebaut',
    ],
    commonMistake: 'Nur allgemeinen Content ohne lokalen Bezug erstellen — kein Ranking-Signal für Local SEO.',
    tasks: [
      {
        id: 'local-landing',
        title: 'Lokale Leistungsseiten erstellen',
        description: '"[Leistung] in [Stadt]" Seiten mit lokalem Bezug, Testimonials, Anfahrt.',
        timeEstimate: '2 Std/Seite',
        priority: 'high',
        industryNotes: {
          health: 'Pro Behandlung eine Seite: "Zahnimplantate München", "Kieferorthopädie München"',
          legal: 'Pro Rechtsgebiet eine Seite: "Mietrecht Anwalt Berlin", "Arbeitsrecht Hamburg"',
          crafts: 'Pro Leistung + Einzugsgebiet: "Sanitär Notdienst Köln", "Heizung Wartung Bonn"',
        },
      },
      {
        id: 'local-blog',
        title: 'Lokalen Blogbeitrag schreiben',
        description: 'Lokaler Bezug: Events, Partnerschaften, Stadtteil-Guides, saisonale Themen.',
        timeEstimate: '2 Std',
        priority: 'medium',
      },
      {
        id: 'local-links',
        title: 'Lokale Backlinks aufbauen',
        description: 'Sponsoring lokaler Vereine, Gastbeiträge auf Stadt-Blogs, Kooperationen mit Nachbar-Geschäften.',
        timeEstimate: '2 Std/Woche',
        priority: 'medium',
      },
    ],
  },
  {
    id: 'tracking',
    title: 'Phase 6: Tracking & Optimierung',
    subtitle: 'Erfolgsmessung & kontinuierliche Verbesserung',
    icon: <BarChart3 className="w-5 h-5" />,
    timeframe: 'Ab Woche 4 (laufend)',
    milestones: [
      'Google Search Console konfiguriert',
      'GBP Insights wöchentlich geprüft',
      'Monatlicher Reporting-Rhythmus etabliert',
    ],
    commonMistake: 'Keine Erfolgsmessung — ohne Daten keine gezielte Optimierung möglich.',
    tasks: [
      {
        id: 'gsc-setup',
        title: 'Google Search Console konfigurieren',
        description: 'Property verifizieren, Sitemap einreichen, lokale Keywords monitoren.',
        timeEstimate: '30 Min',
        priority: 'critical',
      },
      {
        id: 'gbp-insights',
        title: 'GBP Insights wöchentlich checken',
        description: 'Suchanfragen, Aufrufe, Routen-Anfragen, Anrufe — Trends erkennen.',
        timeEstimate: '15 Min/Woche',
        priority: 'high',
      },
      {
        id: 'monthly-report',
        title: 'Monatliches Reporting aufsetzen',
        description: 'KPIs: Rankings, Traffic, Bewertungen, Citations. Vergleich zum Vormonat.',
        timeEstimate: '1 Std/Monat',
        priority: 'medium',
      },
    ],
  },
];

const priorityConfig = {
  critical: { label: 'Kritisch', className: 'bg-destructive/10 text-destructive border-destructive/20' },
  high: { label: 'Hoch', className: 'bg-orange-500/10 text-orange-700 border-orange-500/20' },
  medium: { label: 'Mittel', className: 'bg-primary/10 text-primary border-primary/20' },
};

interface Props {
  compact?: boolean;
}

export default function LocalSEOOnboardingGuide({ compact = false }: Props) {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(['foundation']));
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [copied, setCopied] = useState(false);

  const displayPhases = compact ? phases.slice(0, 3) : phases;
  const allTaskIds = displayPhases.flatMap(p => p.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const completedCount = allTaskIds.filter(id => completedTasks.has(id)).length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      return next;
    });
  };

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => {
      const next = new Set(prev);
      if (next.has(phaseId)) next.delete(phaseId);
      else next.add(phaseId);
      return next;
    });
  };

  const generateChecklistText = () => {
    let text = '# Local SEO Onboarding Checkliste\n\n';
    if (selectedIndustry) {
      const ind = industries.find(i => i.key === selectedIndustry);
      text += `Branche: ${ind?.label}\n\n`;
    }
    displayPhases.forEach(phase => {
      text += `## ${phase.title} (${phase.timeframe})\n`;
      phase.tasks.forEach(task => {
        const done = completedTasks.has(task.id) ? '✅' : '⬜';
        text += `${done} ${task.title} (${task.timeEstimate})\n`;
        if (selectedIndustry && task.industryNotes?.[selectedIndustry]) {
          text += `   → ${task.industryNotes[selectedIndustry]}\n`;
        }
      });
      text += '\n';
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateChecklistText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6" data-ai-summary="Interactive Local SEO onboarding guide with 6 phases, industry-specific tips, and task tracking">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Local SEO Onboarding-Guide
            </h3>
            <p className="text-muted-foreground mt-1">
              {compact ? '3 Phasen' : '6 Phasen'} • {totalTasks} Aufgaben • Schritt-für-Schritt zum lokalen Ranking
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{progressPercent}%</div>
            <div className="text-xs text-muted-foreground">{completedCount}/{totalTasks} erledigt</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Industry selector */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-muted-foreground self-center mr-1">Branche:</span>
        {industries.map(ind => (
          <button
            key={ind.key}
            onClick={() => setSelectedIndustry(selectedIndustry === ind.key ? null : ind.key)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-colors ${
              selectedIndustry === ind.key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-muted-foreground border-border hover:border-primary/50'
            }`}
          >
            {ind.icon}
            {ind.label}
          </button>
        ))}
      </div>

      {/* Phases */}
      <div className="space-y-4">
        {displayPhases.map((phase, phaseIndex) => {
          const isExpanded = expandedPhases.has(phase.id);
          const phaseCompleted = phase.tasks.every(t => completedTasks.has(t.id));
          const phaseTasksDone = phase.tasks.filter(t => completedTasks.has(t.id)).length;

          return (
            <Card key={phase.id} className={`transition-colors ${phaseCompleted ? 'border-green-500/30 bg-green-500/5' : ''}`}>
              <CardHeader
                className="cursor-pointer select-none"
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">{phase.icon}</div>
                    <div>
                      <CardTitle className="text-base font-semibold">{phase.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {phase.timeframe}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">
                      {phaseTasksDone}/{phase.tasks.length}
                    </span>
                  </div>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-0 space-y-4">
                  {/* Tasks */}
                  <div className="space-y-3">
                    {phase.tasks.map(task => {
                      const isDone = completedTasks.has(task.id);
                      const industryNote = selectedIndustry ? task.industryNotes?.[selectedIndustry] : null;

                      return (
                        <div
                          key={task.id}
                          className={`flex gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                            isDone ? 'bg-green-500/5 border-green-500/20' : 'bg-card border-border hover:border-primary/30'
                          }`}
                          onClick={() => toggleTask(task.id)}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            {isDone
                              ? <CheckCircle2 className="w-5 h-5 text-green-600" />
                              : <Circle className="w-5 h-5 text-muted-foreground" />
                            }
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`font-medium text-sm ${isDone ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                {task.title}
                              </span>
                              <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${priorityConfig[task.priority].className}`}>
                                {priorityConfig[task.priority].label}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {task.timeEstimate}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                            {industryNote && (
                              <div className="mt-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded px-2 py-1.5 flex items-start gap-1.5">
                                <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                {industryNote}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Milestones */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">✅ Meilensteine dieser Phase</h4>
                    <ul className="space-y-1">
                      {phase.milestones.map((m, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common mistake */}
                  <div className="flex items-start gap-2 text-xs bg-destructive/5 text-destructive border border-destructive/10 rounded-lg p-3">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Häufiger Fehler: </span>
                      {phase.commonMistake}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Copy checklist */}
      <div className="flex justify-end">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Kopiert!' : 'Checkliste kopieren'}
        </button>
      </div>

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Dies ist die Kurzversion mit 3 von 6 Phasen. Den vollständigen Onboarding-Guide mit allen Phasen 
          findest du in unserem <a href="/blog/lokale-seo-fuer-neugruender" className="text-primary underline">Neugründer-Guide</a>.
        </p>
      )}
    </div>
  );
}
