import { useState, useEffect, useCallback } from "react";
import { Check, RotateCcw, ClipboardList, Clock, Users, Mail, QrCode, Star, MessageSquare, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  id: string;
  text: string;
  tip?: string;
}

interface WorkflowChecklist {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  timeEstimate: string;
  frequency: string;
  items: ChecklistItem[];
}

const STORAGE_KEY = "review-workflow-checklists";

const workflowChecklists: WorkflowChecklist[] = [
  {
    id: "setup",
    title: "Einmaliges Setup",
    description: "Grundlagen für systematische Bewertungsgenerierung schaffen",
    icon: ClipboardList,
    timeEstimate: "2–3 Stunden",
    frequency: "Einmalig",
    items: [
      { id: "setup-1", text: "Google Business Profil Bewertungslink erstellen und kürzen", tip: "Nutze g.page/[dein-name]/review für einen kurzen Link" },
      { id: "setup-2", text: "QR-Code mit Bewertungslink generieren" },
      { id: "setup-3", text: "QR-Code auf Visitenkarten, Rechnungen und Kassenzettel drucken" },
      { id: "setup-4", text: "Aufsteller/Schild für Kassenbereich oder Empfang gestalten" },
      { id: "setup-5", text: "E-Mail-Vorlage für Follow-up Bewertungsanfrage erstellen" },
      { id: "setup-6", text: "SMS-Vorlage für Bewertungsanfrage vorbereiten" },
      { id: "setup-7", text: "Team-Schulung: Wann und wie nach Bewertungen fragen" },
      { id: "setup-8", text: "Antwort-Vorlagen für positive, neutrale und negative Bewertungen erstellen" },
    ],
  },
  {
    id: "daily",
    title: "Tägliche Routine",
    description: "Tägliche Aufgaben für kontinuierlichen Bewertungszuwachs",
    icon: Clock,
    timeEstimate: "10–15 Minuten",
    frequency: "Täglich",
    items: [
      { id: "daily-1", text: "Neue Bewertungen prüfen und innerhalb von 24h antworten" },
      { id: "daily-2", text: "Zufriedene Kunden persönlich um Bewertung bitten (mind. 2 pro Tag)", tip: "Der beste Zeitpunkt: direkt nach einer positiven Interaktion" },
      { id: "daily-3", text: "Bewertungslink bei Rechnungsversand anhängen" },
      { id: "daily-4", text: "Negative Bewertungen intern an Team weiterleiten" },
    ],
  },
  {
    id: "weekly",
    title: "Wöchentliche Aufgaben",
    description: "Wöchentliche Analyse und Optimierung der Review-Strategie",
    icon: Star,
    timeEstimate: "30–45 Minuten",
    frequency: "Wöchentlich",
    items: [
      { id: "weekly-1", text: "Bewertungsstatistik prüfen: Anzahl, Durchschnitt, Trend" },
      { id: "weekly-2", text: "Follow-up E-Mails an Kunden der letzten Woche senden" },
      { id: "weekly-3", text: "Wiederkehrende Kritikpunkte identifizieren und intern besprechen" },
      { id: "weekly-4", text: "Team-Performance besprechen: Wer hat wie viele Bewertungen generiert?" },
      { id: "weekly-5", text: "Social Media: Beste Bewertung der Woche teilen (mit Erlaubnis)" },
    ],
  },
  {
    id: "monthly",
    title: "Monatliche Review-Analyse",
    description: "Monatlicher Deep-Dive in Bewertungskennzahlen",
    icon: Megaphone,
    timeEstimate: "1–2 Stunden",
    frequency: "Monatlich",
    items: [
      { id: "monthly-1", text: "Monatlichen Review-Report erstellen: Anzahl, Rating, Antwortrate" },
      { id: "monthly-2", text: "Wettbewerber-Bewertungen analysieren (Anzahl, Rating, Trends)" },
      { id: "monthly-3", text: "Top-Keywords aus Bewertungen extrahieren und für SEO nutzen" },
      { id: "monthly-4", text: "E-Mail-Vorlagen A/B-testen und optimieren" },
      { id: "monthly-5", text: "Neue Touchpoints für Bewertungsanfragen identifizieren" },
      { id: "monthly-6", text: "ROI berechnen: Bewertungen vs. Neukunden-Zuwachs" },
    ],
  },
];

const ReviewWorkflowChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [expandedChecklist, setExpandedChecklist] = useState<string>("setup");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setCheckedItems(new Set(parsed));
      }
    } catch (e) {
      console.error("Error loading review checklist progress:", e);
    }
  }, []);

  useEffect(() => {
    if (checkedItems.size > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedItems]));
      } catch (e) {
        console.error("Error saving review checklist progress:", e);
      }
    }
  }, [checkedItems]);

  const toggleItem = useCallback((itemId: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }, []);

  const resetChecklist = useCallback((checklistId: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      const checklist = workflowChecklists.find((c) => c.id === checklistId);
      checklist?.items.forEach((item) => next.delete(item.id));
      return next;
    });
  }, []);

  const getProgress = (checklist: WorkflowChecklist) => {
    const checked = checklist.items.filter((i) => checkedItems.has(i.id)).length;
    return { checked, total: checklist.items.length, pct: Math.round((checked / checklist.items.length) * 100) };
  };

  const totalChecked = workflowChecklists.reduce(
    (sum, cl) => sum + cl.items.filter((i) => checkedItems.has(i.id)).length,
    0
  );
  const totalItems = workflowChecklists.reduce((sum, cl) => sum + cl.items.length, 0);
  const totalPct = Math.round((totalChecked / totalItems) * 100);

  return (
    <div className="my-10 space-y-6">
      {/* Overall progress */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-foreground flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Review-Generierung Workflow-Checklisten
          </h3>
          <span className="text-sm font-medium text-primary">{totalChecked}/{totalItems} erledigt</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${totalPct}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Dein Fortschritt wird automatisch gespeichert.
        </p>
      </div>

      {/* Checklists */}
      <div className="grid gap-4">
        {workflowChecklists.map((checklist) => {
          const { checked, total, pct } = getProgress(checklist);
          const isExpanded = expandedChecklist === checklist.id;
          const isComplete = pct === 100;
          const Icon = checklist.icon;

          return (
            <Card
              key={checklist.id}
              className={cn(
                "transition-all border",
                isComplete ? "border-green-300 bg-green-50/50" : "border-border"
              )}
            >
              <CardHeader className="pb-2">
                <button
                  onClick={() => setExpandedChecklist(isExpanded ? "" : checklist.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center",
                      isComplete ? "bg-green-100" : "bg-primary/10"
                    )}>
                      <Icon className={cn("h-5 w-5", isComplete ? "text-green-600" : "text-primary")} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{checklist.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {checklist.frequency} · {checklist.timeEstimate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      isComplete ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                    )}>
                      {checked}/{total}
                    </span>
                    <svg
                      className={cn("w-4 h-4 text-muted-foreground transition-transform", isExpanded && "rotate-180")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-4">{checklist.description}</p>

                  <div className="space-y-2">
                    {checklist.items.map((item) => {
                      const isChecked = checkedItems.has(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={cn(
                            "w-full flex items-start gap-3 p-3 rounded-lg border text-left transition-all group",
                            isChecked
                              ? "bg-green-50 border-green-300"
                              : "bg-background border-border hover:border-primary/30 hover:bg-muted/50"
                          )}
                        >
                          <div className={cn(
                            "flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-all",
                            isChecked ? "bg-green-500 border-green-500" : "border-muted-foreground/30 group-hover:border-primary/50"
                          )}>
                            {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className={cn(
                              "text-sm transition-all",
                              isChecked ? "text-green-700 line-through" : "text-foreground"
                            )}>
                              {item.text}
                            </span>
                            {item.tip && (
                              <p className="text-xs text-muted-foreground mt-1 italic">💡 {item.tip}</p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => resetChecklist(checklist.id)}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      <RotateCcw className="w-3 h-3 mr-1" />
                      Zurücksetzen
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewWorkflowChecklist;
