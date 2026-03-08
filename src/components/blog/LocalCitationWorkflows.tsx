import { useState } from "react";
import { CheckCircle, Circle, ChevronDown, MapPin, Globe, Search, Shield, AlertTriangle, Clock, Copy, Check, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type WorkflowPhase = "audit" | "setup" | "submit" | "verify" | "maintain";

interface CitationTask {
  text: string;
  priority: "kritisch" | "hoch" | "mittel";
  timeEstimate: string;
  notes?: string;
}

interface WorkflowStep {
  id: WorkflowPhase;
  icon: React.ReactNode;
  title: string;
  timeframe: string;
  description: string;
  tasks: CitationTask[];
  pitfalls?: string[];
  tools?: string[];
}

interface LocalCitationWorkflowsProps {
  compact?: boolean;
}

const priorityStyles: Record<string, string> = {
  kritisch: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  hoch: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  mittel: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

const workflows: WorkflowStep[] = [
  {
    id: "audit",
    icon: <Search className="w-5 h-5" />,
    title: "Phase 1: Citation-Audit & Bestandsaufnahme",
    timeframe: "Tag 1–3",
    description: "Bevor du neue Citations erstellst, pruefe den Ist-Zustand. Falsche oder doppelte Eintraege schaden mehr als fehlende.",
    tasks: [
      { text: "Google-Suche: \"[Firmenname]\" + \"[Stadt]\" – alle Ergebnisse auf Seite 1-3 dokumentieren", priority: "kritisch", timeEstimate: "30 Min." },
      { text: "NAP-Daten festlegen: Exakte Schreibweise von Name, Adresse, Telefon definieren", priority: "kritisch", timeEstimate: "15 Min.", notes: "Einmal festlegen, nie variieren. Z.B. 'Strasse' vs. 'Str.' – entscheide dich fuer eine Version." },
      { text: "Bestehende Eintraege in Tabelle erfassen (Name, URL, NAP korrekt? Link vorhanden?)", priority: "kritisch", timeEstimate: "1-2 Std." },
      { text: "Doppelte Eintraege identifizieren und zum Loeschen/Zusammenfuehren markieren", priority: "hoch", timeEstimate: "30 Min." },
      { text: "Wettbewerber-Citations pruefen: Wo sind die Top-3 Konkurrenten gelistet, du aber nicht?", priority: "hoch", timeEstimate: "45 Min." },
      { text: "Branchenspezifische Verzeichnisse recherchieren (z.B. Jameda fuer Aerzte, TheFork fuer Gastro)", priority: "mittel", timeEstimate: "30 Min." },
    ],
    pitfalls: [
      "Alte Telefonnummern oder Adressen in vergessenen Eintraegen",
      "Keyword-Stuffing im Firmennamen (z.B. 'Baeckerei Mueller – Beste Broetchen Berlin')",
      "Doppelte Eintraege durch frueheren Inhaber oder Agentur",
    ],
    tools: ["Google-Suche (kostenlos)", "BrightLocal Citation Tracker", "Whitespark Local Citation Finder", "Eigene Tabelle / Citation-Tracking-Template"],
  },
  {
    id: "setup",
    icon: <Shield className="w-5 h-5" />,
    title: "Phase 2: NAP-Standard & Materialien vorbereiten",
    timeframe: "Tag 3–4",
    description: "Erstelle ein Master-Dokument mit allen Daten, die du fuer Eintraege brauchst. Das spart enorm Zeit bei der Einreichung.",
    tasks: [
      { text: "Master-NAP-Dokument erstellen mit exakter Schreibweise", priority: "kritisch", timeEstimate: "20 Min.", notes: "Name, Adresse, Telefon, Website, E-Mail – exakt wie auf der eigenen Website und im Google Business Profil." },
      { text: "Kurzbeschreibung (150 Zeichen) und Langbeschreibung (300 Zeichen) schreiben", priority: "hoch", timeEstimate: "30 Min." },
      { text: "5-10 Fotos in verschiedenen Groessen vorbereiten (Logo, Aussen, Innen, Team)", priority: "hoch", timeEstimate: "30 Min." },
      { text: "Oeffnungszeiten standardisieren (identisch mit GBP)", priority: "kritisch", timeEstimate: "10 Min." },
      { text: "Kategorien/Branchen-Keywords fuer verschiedene Verzeichnisse festlegen", priority: "hoch", timeEstimate: "20 Min." },
      { text: "Separate E-Mail-Adresse fuer Verzeichnis-Registrierungen einrichten", priority: "mittel", timeEstimate: "10 Min.", notes: "z.B. listings@firma.de – haelt dein Haupt-Postfach sauber und erleichtert Passwoerter-Management." },
    ],
    pitfalls: [
      "Unterschiedliche Beschreibungstexte in verschiedenen Verzeichnissen",
      "Fotos mit falscher Groesse/Format werden abgelehnt",
      "Oeffnungszeiten weichen von GBP ab → Verwirrung bei Google",
    ],
    tools: ["Google Docs/Notion fuer Master-Dokument", "Canva fuer Bild-Anpassung", "Passwort-Manager fuer Login-Daten"],
  },
  {
    id: "submit",
    icon: <Globe className="w-5 h-5" />,
    title: "Phase 3: Systematische Einreichung",
    timeframe: "Tag 5–14",
    description: "Arbeite die Verzeichnisse in Prioritaets-Reihenfolge ab. Qualitaet vor Quantitaet – lieber 20 perfekte als 50 halbfertige Eintraege.",
    tasks: [
      { text: "Prioritaet 1 (Pflicht): Google Business, Yelp, Gelbe Seiten, Das Oertliche, Bing Places, Apple Maps", priority: "kritisch", timeEstimate: "2-3 Std.", notes: "Diese 6 Verzeichnisse decken 80% des Citation-Werts ab." },
      { text: "Prioritaet 2 (Wichtig): meinestadt.de, 11880, GoLocal, Cylex, Foursquare, Facebook Business", priority: "hoch", timeEstimate: "2-3 Std." },
      { text: "Prioritaet 3 (Laenderspezifisch): Herold.at (AT), local.ch/search.ch (CH), WKO (AT)", priority: "hoch", timeEstimate: "1-2 Std.", notes: "Nur relevant wenn du im jeweiligen Land aktiv bist." },
      { text: "Prioritaet 4 (Branchenspezifisch): Jameda, TheFork, MyHammer, Anwalt.de etc.", priority: "hoch", timeEstimate: "1-2 Std." },
      { text: "Jeden Eintrag in der Tracking-Tabelle dokumentieren (Datum, Status, Login-Daten)", priority: "kritisch", timeEstimate: "fortlaufend" },
      { text: "Verifizierung abschliessen (Postkarte, Telefon, E-Mail) – sofort erledigen!", priority: "kritisch", timeEstimate: "1-5 Tage Wartezeit" },
    ],
    pitfalls: [
      "Zu viele Eintraege auf einmal → unvollstaendige Profile",
      "Verifizierungs-Mails ignoriert → Eintrag wird nicht freigeschaltet",
      "Premium-Upgrades kaufen, die man nicht braucht",
    ],
    tools: ["Citation-Tracking-Tabelle", "Passwort-Manager", "Separate E-Mail fuer Verifizierungen"],
  },
  {
    id: "verify",
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Phase 4: Qualitaetskontrolle & Korrektur",
    timeframe: "Tag 15–21",
    description: "Pruefe jeden Eintrag nach Freischaltung. Verzeichnisse aendern manchmal Daten oder formatieren Adressen um.",
    tasks: [
      { text: "Alle freigeschalteten Eintraege einzeln pruefen: NAP exakt korrekt?", priority: "kritisch", timeEstimate: "1-2 Std." },
      { text: "Links pruefen: Verweist der Link auf die richtige URL? HTTP vs. HTTPS?", priority: "hoch", timeEstimate: "30 Min." },
      { text: "Kategorien pruefen: Wurden deine Kategorien uebernommen oder angepasst?", priority: "mittel", timeEstimate: "20 Min." },
      { text: "Fotos pruefen: Wurden alle Bilder akzeptiert und korrekt angezeigt?", priority: "mittel", timeEstimate: "20 Min." },
      { text: "Doppelte Eintraege endgueltig loeschen/zusammenfuehren", priority: "hoch", timeEstimate: "30-60 Min." },
      { text: "Google-Suche erneut durchfuehren: Tauchen neue Eintraege in den Ergebnissen auf?", priority: "mittel", timeEstimate: "15 Min." },
    ],
    pitfalls: [
      "Verzeichnisse kuerzen manchmal Adressen ab ('Str.' statt 'Strasse')",
      "Automatische Telefonnummern-Formatierung aendert das Format",
      "Kategorien werden von Verzeichnissen 'korrigiert' und stimmen nicht mehr",
    ],
    tools: ["Eigene Tracking-Tabelle", "BrightLocal (automatischer NAP-Check)", "Google-Suche"],
  },
  {
    id: "maintain",
    icon: <Clock className="w-5 h-5" />,
    title: "Phase 5: Laufende Pflege & Monitoring",
    timeframe: "Monatlich / Quartalsweise",
    description: "Citations sind kein einmaliges Projekt. Regelmaessige Pflege sichert langfristige NAP-Konsistenz und Ranking-Signale.",
    tasks: [
      { text: "Monatlicher NAP-Check: Stichprobe von 5 Verzeichnissen auf Korrektheit pruefen", priority: "hoch", timeEstimate: "15 Min./Monat" },
      { text: "Quartalsweise: Neue relevante Verzeichnisse recherchieren und eintragen", priority: "mittel", timeEstimate: "1 Std./Quartal" },
      { text: "Bei Aenderungen (Umzug, neue Nummer): ALLE Eintraege sofort aktualisieren", priority: "kritisch", timeEstimate: "2-4 Std. einmalig", notes: "Nutze deine Tracking-Tabelle als Checkliste – kein Eintrag darf vergessen werden." },
      { text: "Bewertungen in Verzeichnissen beantworten (nicht nur Google!)", priority: "hoch", timeEstimate: "15 Min./Woche" },
      { text: "Jaehrlicher Komplett-Audit: Alle Eintraege durchgehen, verwaiste loeschen", priority: "mittel", timeEstimate: "2-3 Std./Jahr" },
      { text: "Wettbewerber-Monitoring: Neue Verzeichnisse der Konkurrenz pruefen", priority: "mittel", timeEstimate: "30 Min./Quartal" },
    ],
    pitfalls: [
      "Verzeichnis-Websites werden eingestellt → toter Link zu deinem Eintrag",
      "Dritte aendern deine Daten (z.B. bei Google/Yelp durch 'Nutzervorschlaege')",
      "Neue Mitarbeiter nutzen andere NAP-Varianten bei Neueintraegen",
    ],
    tools: ["Google Alerts fuer Firmenname", "BrightLocal Citation Tracker", "Kalender-Reminder fuer Quartals-Checks"],
  },
];

const napTemplate = `CITATION MASTER-DOKUMENT
========================

FIRMENNAME (exakt):
[Firmenname wie auf Website & GBP]

ADRESSE (exakt):
[Strasse Hausnummer]
[PLZ Stadt]
[Land]

TELEFON:
[+49 XXX XXXXXXX] (E.164-Format)

WEBSITE:
[https://www.beispiel.de] (mit https://)

E-MAIL:
[info@beispiel.de]

OEFFNUNGSZEITEN:
Mo-Fr: [09:00-18:00]
Sa: [10:00-14:00]
So: Geschlossen

KURZBESCHREIBUNG (max. 150 Zeichen):
[Ihr Elevator Pitch hier]

LANGBESCHREIBUNG (max. 300 Zeichen):
[Ausfuehrlichere Beschreibung mit Keywords]

KATEGORIEN:
Haupt: [z.B. Baeckerei]
Neben: [z.B. Cafe, Konditorei]

SOCIAL MEDIA:
Facebook: [URL]
Instagram: [URL]
LinkedIn: [URL]`;

const LocalCitationWorkflows = ({ compact = false }: LocalCitationWorkflowsProps) => {
  const [expandedPhase, setExpandedPhase] = useState<WorkflowPhase | null>(compact ? null : "audit");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const toggleTask = (taskKey: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskKey)) next.delete(taskKey);
      else next.add(taskKey);
      return next;
    });
  };

  const totalTasks = workflows.reduce((sum, w) => sum + w.tasks.length, 0);
  const completedCount = completedTasks.size;
  const progress = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const displayed = compact ? workflows.slice(0, 3) : workflows;

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Citation-Building Workflow: Schritt fuer Schritt</h2>
        </div>
        <p className="text-muted-foreground">
          Systematischer 5-Phasen-Workflow fuer den Aufbau und die Pflege lokaler Citations – mit Checklisten, Zeitschaetzungen und Fehler-Warnungen.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-muted/50 rounded-xl p-4 mb-6 border border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">Fortschritt</span>
          <span className="text-sm text-muted-foreground">{completedCount} / {totalTasks} Aufgaben ({progress}%)</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        {displayed.map((step, stepIdx) => {
          const stepCompleted = step.tasks.every((_, i) => completedTasks.has(`${step.id}-${i}`));
          const stepPartial = step.tasks.some((_, i) => completedTasks.has(`${step.id}-${i}`));

          return (
            <Card key={step.id} className={cn("border overflow-hidden", stepCompleted && "border-primary/30")}>
              <CardContent className="p-0">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedPhase(expandedPhase === step.id ? null : step.id)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Timeline dot */}
                    <div className={cn(
                      "p-2 rounded-lg shrink-0",
                      stepCompleted ? "bg-primary/10 text-primary" :
                      stepPartial ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {step.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground text-sm">{step.title}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{step.timeframe}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform shrink-0", expandedPhase === step.id && "rotate-180")} />
                </div>

                {expandedPhase === step.id && (
                  <div className="border-t border-border p-4 space-y-4">
                    {/* Tasks */}
                    <div className="space-y-2">
                      {step.tasks.map((task, i) => {
                        const taskKey = `${step.id}-${i}`;
                        const done = completedTasks.has(taskKey);
                        return (
                          <div
                            key={i}
                            className={cn("flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors", done ? "bg-primary/5" : "bg-muted/30 hover:bg-muted/50")}
                            onClick={() => toggleTask(taskKey)}
                          >
                            {done ? (
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={cn("text-sm", done && "line-through text-muted-foreground")}>{task.text}</span>
                                <span className={cn("text-xs px-1.5 py-0.5 rounded-full font-medium", priorityStyles[task.priority])}>{task.priority}</span>
                                <span className="text-xs text-muted-foreground">⏱ {task.timeEstimate}</span>
                              </div>
                              {task.notes && (
                                <p className="text-xs text-muted-foreground mt-1 flex items-start gap-1">
                                  <Lightbulb className="w-3 h-3 shrink-0 mt-0.5" /> {task.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Pitfalls */}
                    {step.pitfalls && step.pitfalls.length > 0 && (
                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                          <span className="text-xs font-semibold text-red-700 dark:text-red-400 uppercase tracking-wider">Haeufige Fehler</span>
                        </div>
                        <ul className="space-y-1">
                          {step.pitfalls.map((p, i) => (
                            <li key={i} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                              <span className="shrink-0">•</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools */}
                    {step.tools && step.tools.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Empfohlene Tools</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {step.tools.map((tool, i) => (
                            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{tool}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* NAP Master Template */}
      {!compact && (
        <div className="mt-8 bg-muted/50 rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              NAP Master-Dokument Vorlage
            </h3>
            <button
              onClick={() => {
                navigator.clipboard.writeText(napTemplate);
                setCopiedTemplate(true);
                setTimeout(() => setCopiedTemplate(false), 2000);
              }}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                copiedTemplate
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              {copiedTemplate ? <><Check className="w-3.5 h-3.5" /> Kopiert!</> : <><Copy className="w-3.5 h-3.5" /> Kopieren</>}
            </button>
          </div>
          <pre className="bg-background rounded-lg p-4 text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed border border-border overflow-x-auto">
            {napTemplate}
          </pre>
        </div>
      )}
    </section>
  );
};

export default LocalCitationWorkflows;
