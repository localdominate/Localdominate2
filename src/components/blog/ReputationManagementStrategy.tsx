import { useState } from "react";
import { Shield, TrendingUp, AlertTriangle, CheckCircle2, Clock, Target, BarChart3, Users, Star, ChevronDown, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type StrategyPhase = "prevention" | "monitoring" | "response" | "recovery" | "growth";

interface StrategyStep {
  title: string;
  description: string;
  actions: string[];
  kpi?: string;
  tools?: string[];
  frequency?: string;
}

interface StrategyPhaseData {
  id: StrategyPhase;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  steps: StrategyStep[];
}

interface ReputationManagementStrategyProps {
  focus?: StrategyPhase[];
  title?: string;
  description?: string;
  compact?: boolean;
}

const phases: StrategyPhaseData[] = [
  {
    id: "prevention",
    title: "1. Praevention",
    subtitle: "Probleme verhindern, bevor sie entstehen",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
    steps: [
      {
        title: "Kundenzufriedenheit systematisch messen",
        description: "Identifiziere unzufriedene Kunden, bevor sie oeffentlich bewerten.",
        actions: [
          "NPS-Score oder Zufriedenheitsbefragung nach jeder Dienstleistung",
          "Interne Feedback-Kanaele einrichten (QR-Code zum Beschwerdeformular)",
          "Service-Recovery-Protokoll: Bei Score < 7 sofort persoenlich nachfassen",
          "Mitarbeiter-Schulung zu Beschwerdemanagement (quartalsweise)"
        ],
        kpi: "NPS > 50, Beschwerdequote < 5%",
        frequency: "Laufend",
      },
      {
        title: "Google Business Profil optimieren",
        description: "Ein vollstaendiges, aktuelles Profil reduziert Missverstaendnisse und falsche Erwartungen.",
        actions: [
          "Oeffnungszeiten, Feiertage und Sonderzeiten aktuell halten",
          "Leistungsbeschreibungen klar und ehrlich formulieren",
          "Haeufig gestellte Fragen im Q&A-Bereich beantworten",
          "Aktuelle Fotos hochladen (mind. 1x pro Monat)"
        ],
        kpi: "Profil-Vollstaendigkeit 100%",
        frequency: "Woechentlich",
      },
    ],
  },
  {
    id: "monitoring",
    title: "2. Monitoring",
    subtitle: "Alles im Blick behalten",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
    steps: [
      {
        title: "Bewertungs-Alerts einrichten",
        description: "Werde sofort benachrichtigt, wenn neue Bewertungen eingehen.",
        actions: [
          "Google Business Benachrichtigungen aktivieren",
          "Google Alerts fuer Firmennamen + Bewertung einrichten",
          "Woechentlicher Review-Report im Team besprechen",
          "Bewertungstrends monatlich analysieren (Durchschnitt, Volumen, Sentiment)"
        ],
        kpi: "Reaktionszeit < 24 Stunden",
        tools: ["Google Alerts", "Google Business App", "BrightLocal"],
        frequency: "Taeglich pruefen",
      },
      {
        title: "Wettbewerber-Benchmarking",
        description: "Vergleiche deine Reputation mit den Top-3-Wettbewerbern.",
        actions: [
          "Bewertungsdurchschnitt und -anzahl der Top-3-Konkurrenten tracken",
          "Analysiere wiederkehrende Kritikpunkte bei Wettbewerbern",
          "Identifiziere Differenzierungsmoeglichkeiten aus Bewertungen",
          "Quartals-Report: Eigene Position im lokalen Markt"
        ],
        kpi: "Durchschnitt >= Wettbewerber + 0.2 Sterne",
        frequency: "Monatlich",
      },
    ],
  },
  {
    id: "response",
    title: "3. Reaktion",
    subtitle: "Professionell auf jede Bewertung antworten",
    icon: <Users className="w-5 h-5" />,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800/30",
    steps: [
      {
        title: "Positive Bewertungen wertschaetzen",
        description: "Jede positive Bewertung verdient eine persoenliche Antwort.",
        actions: [
          "Innerhalb von 24h antworten – persoenlich, nicht generisch",
          "Konkretes Detail aus der Bewertung aufgreifen",
          "Einladung zum erneuten Besuch aussprechen",
          "Bei 5-Sterne-Bewertungen: Weiterempfehlung subtil erwaehnen"
        ],
        kpi: "100% Antwortrate auf positive Bewertungen",
        frequency: "Taeglich",
      },
      {
        title: "Negative Bewertungen deeskalieren",
        description: "Kritik ist eine Chance – wenn du richtig reagierst.",
        actions: [
          "Ruhe bewahren – nie emotional antworten",
          "Entschuldigung + Loesung anbieten (konkret, nicht pauschal)",
          "Gespraech offline verlagern (Telefon/E-Mail anbieten)",
          "Nach Loesung: Hoeflich um Aktualisierung der Bewertung bitten"
        ],
        kpi: "30% der 1-2 Sterne Bewertungen werden aktualisiert",
        frequency: "Innerhalb von 4 Stunden",
      },
      {
        title: "Fake-Bewertungen identifizieren & melden",
        description: "Nicht jede negative Bewertung ist berechtigt.",
        actions: [
          "Pruefe: Ist der Bewertende ein echter Kunde? (Buchungssystem abgleichen)",
          "Dokumentiere Belege fuer Fake-Bewertung (Screenshots, Kundendaten)",
          "Bei Google melden mit detaillierter Begruendung",
          "Bei Erfolglosigkeit: Anwaltliche Abmahnung als letztes Mittel"
        ],
        kpi: "Fake-Erkennungsrate > 90%",
        frequency: "Bei Verdacht sofort",
      },
    ],
  },
  {
    id: "recovery",
    title: "4. Wiederherstellung",
    subtitle: "Nach einer Krise zurueck auf Kurs",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/30",
    steps: [
      {
        title: "Bewertungsdurchschnitt gezielt verbessern",
        description: "Nach negativen Phasen systematisch neue positive Bewertungen generieren.",
        actions: [
          "Happy-Customer-Kampagne starten: Zufriedene Kunden aktiv ansprechen",
          "SMS/E-Mail-Sequenz nach positiven Erfahrungen automatisieren",
          "QR-Codes an Touchpoints platzieren (Kasse, Rechnung, Visitenkarte)",
          "Team-Challenge: Mitarbeiter motivieren, Kunden um Bewertungen zu bitten"
        ],
        kpi: "Mind. 5 neue Bewertungen pro Woche",
        frequency: "4-8 Wochen Intensivphase",
      },
      {
        title: "Ursachenanalyse durchfuehren",
        description: "Verstehe, warum negative Bewertungen entstanden sind.",
        actions: [
          "Alle negativen Bewertungen der letzten 6 Monate kategorisieren",
          "Top-3-Kritikpunkte identifizieren (z.B. Wartezeit, Service, Qualitaet)",
          "Massnahmenplan pro Kritikpunkt erstellen mit Verantwortlichkeiten",
          "Fortschritt monatlich messen und im Team besprechen"
        ],
        kpi: "Wiederkehrende Kritikpunkte um 50% reduzieren",
        frequency: "Einmalig + monatliches Review",
      },
    ],
  },
  {
    id: "growth",
    title: "5. Wachstum",
    subtitle: "Reputation als Wettbewerbsvorteil nutzen",
    icon: <Star className="w-5 h-5" />,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/30",
    steps: [
      {
        title: "Social Proof strategisch einsetzen",
        description: "Nutze deine besten Bewertungen als Marketing-Asset.",
        actions: [
          "Top-Bewertungen auf der Website einbinden (mit Schema Markup)",
          "Testimonials in Social Media teilen (mit Kundengenehmigung)",
          "Bewertungs-Highlights in E-Mail-Signatur und Angebote integrieren",
          "Google-Sterne in Google Ads anzeigen (Seller Ratings)"
        ],
        kpi: "CTR +15% durch Social Proof",
        frequency: "Laufend",
      },
      {
        title: "Review-Funnel optimieren",
        description: "Mache Bewertungen zum festen Bestandteil der Customer Journey.",
        actions: [
          "Automatische Review-Anfrage in CRM/Buchungssystem integrieren",
          "A/B-Test verschiedener Zeitpunkte (gleicher Tag vs. naechster Tag)",
          "Multi-Kanal-Strategie: SMS + E-Mail + Vor-Ort kombinieren",
          "Vierteljahres-Analyse: Welcher Kanal bringt die meisten Bewertungen?"
        ],
        kpi: "Review-Conversion-Rate > 15%",
        frequency: "Kontinuierliche Optimierung",
      },
    ],
  },
];

const ReputationManagementStrategy = ({
  focus,
  title = "Reputation Management Strategie",
  description = "Dein 5-Phasen-Framework fuer systematisches Bewertungsmanagement – von der Praevention bis zum Wachstum.",
  compact = false,
}: ReputationManagementStrategyProps) => {
  const [expandedPhase, setExpandedPhase] = useState<StrategyPhase | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  const displayPhases = focus
    ? phases.filter((p) => focus.includes(p.id))
    : phases;

  const toggleStep = (stepKey: string) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepKey)) next.delete(stepKey);
      else next.add(stepKey);
      return next;
    });
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Overview stats */}
      {!compact && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {displayPhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              className={cn(
                "p-3 rounded-xl border text-center transition-all hover:shadow-md",
                expandedPhase === phase.id
                  ? "ring-2 ring-primary shadow-md"
                  : "",
                phase.color
              )}
            >
              <div className="flex justify-center mb-1">{phase.icon}</div>
              <span className="text-xs font-semibold">{phase.title.replace(/^\d\.\s/, "")}</span>
            </button>
          ))}
        </div>
      )}

      {/* Phase cards */}
      <div className="space-y-4">
        {displayPhases
          .filter((p) => !expandedPhase || expandedPhase === p.id)
          .map((phase) => (
            <Card key={phase.id} className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg border", phase.color)}>
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      {phase.steps.length} {phase.steps.length === 1 ? "Massnahme" : "Massnahmen"}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        expandedPhase === phase.id && "rotate-180"
                      )}
                    />
                  </div>
                </div>

                {expandedPhase === phase.id && (
                  <div className="border-t border-border p-4 space-y-3">
                    {phase.steps.map((step, idx) => {
                      const stepKey = `${phase.id}-${idx}`;
                      const isOpen = expandedSteps.has(stepKey);
                      return (
                        <div
                          key={stepKey}
                          className="rounded-lg border border-border overflow-hidden"
                        >
                          <button
                            className="w-full flex items-center justify-between p-3 hover:bg-muted/30 transition-colors text-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStep(stepKey);
                            }}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="font-semibold text-sm text-foreground">{step.title}</span>
                            </div>
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 text-muted-foreground shrink-0 transition-transform",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4 space-y-3">
                              <p className="text-sm text-muted-foreground">{step.description}</p>

                              <ul className="space-y-1.5">
                                {step.actions.map((action, aIdx) => (
                                  <li key={aIdx} className="flex items-start gap-2 text-sm text-foreground">
                                    <span className="text-primary mt-1 shrink-0">•</span>
                                    {action}
                                  </li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap gap-3 pt-2">
                                {step.kpi && (
                                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    <Target className="w-3 h-3" />
                                    KPI: {step.kpi}
                                  </div>
                                )}
                                {step.frequency && (
                                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                                    <Clock className="w-3 h-3" />
                                    {step.frequency}
                                  </div>
                                )}
                              </div>

                              {step.tools && step.tools.length > 0 && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Lightbulb className="w-3 h-3" />
                                  Tools: {step.tools.join(", ")}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Bottom CTA */}
      {!compact && (
        <div className="mt-8 p-5 rounded-xl bg-muted/50 border border-border">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">
                Wichtig: Reputation Management ist ein Marathon, kein Sprint.
              </p>
              <p className="text-sm text-muted-foreground">
                Plane mindestens 3-6 Monate fuer messbare Ergebnisse. Konsistenz schlaegt Intensitaet – 
                lieber taeglich 10 Minuten investieren als einmal im Monat 5 Stunden.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Link
                  to="/blog/google-bewertungen-bekommen"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  → Bewertungen generieren
                </Link>
                <Link
                  to="/blog/negative-google-bewertungen"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  → Negative Bewertungen managen
                </Link>
                <Link
                  to="/blog/bewertungs-antworten-vorlagen"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  → Antwort-Vorlagen
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReputationManagementStrategy;
