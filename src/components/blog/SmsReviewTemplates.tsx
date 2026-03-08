import { useState } from "react";
import { Copy, Check, Smartphone, Clock, Star, Sparkles, ChevronDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type SmsIndustry = "restaurant" | "handwerker" | "arzt" | "zahnarzt" | "anwalt" | "friseur" | "fitness" | "hotel" | "auto" | "steuerberater" | "general";
export type SmsTiming = "same-day" | "next-day" | "follow-up";
export type SmsLength = "kurz" | "mittel";

export interface SmsReviewTemplate {
  id: string;
  industry: SmsIndustry;
  timing: SmsTiming;
  length: SmsLength;
  scenario: string;
  message: string;
  charCount: number;
  tip?: string;
  expectedRate?: string;
}

interface SmsReviewTemplatesProps {
  industries?: SmsIndustry[];
  title?: string;
  description?: string;
}

const industryLabels: Record<SmsIndustry, { label: string; icon: string }> = {
  restaurant: { label: "Restaurant", icon: "🍽️" },
  handwerker: { label: "Handwerk", icon: "🔧" },
  arzt: { label: "Arztpraxis", icon: "🏥" },
  zahnarzt: { label: "Zahnarzt", icon: "🦷" },
  anwalt: { label: "Kanzlei", icon: "⚖️" },
  friseur: { label: "Friseur", icon: "✂️" },
  fitness: { label: "Fitness", icon: "🏋️" },
  hotel: { label: "Hotel", icon: "🏨" },
  auto: { label: "Autowerkstatt", icon: "🚗" },
  steuerberater: { label: "Steuerberater", icon: "📊" },
  general: { label: "Allgemein", icon: "🏪" },
};

const timingLabels: Record<SmsTiming, { label: string; icon: React.ReactNode }> = {
  "same-day": { label: "Gleicher Tag", icon: <Clock className="w-3.5 h-3.5" /> },
  "next-day": { label: "Naechster Tag", icon: <Smartphone className="w-3.5 h-3.5" /> },
  "follow-up": { label: "Erinnerung", icon: <Sparkles className="w-3.5 h-3.5" /> },
};

const lengthColors: Record<SmsLength, string> = {
  kurz: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  mittel: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
};

export const allSmsTemplates: SmsReviewTemplate[] = [
  // Restaurant
  {
    id: "rest-same-short",
    industry: "restaurant",
    timing: "same-day",
    length: "kurz",
    scenario: "Kurz nach dem Besuch",
    message: "Hallo [Name], danke fuer Ihren Besuch im [Restaurant]! 🍽️ Wir freuen uns ueber eine kurze Bewertung: [Link] – Dauert nur 1 Min. Danke!",
    charCount: 139,
    tip: "Innerhalb von 1-2 Stunden nach dem Besuch senden.",
    expectedRate: "30-40%",
  },
  {
    id: "rest-same-med",
    industry: "restaurant",
    timing: "same-day",
    length: "mittel",
    scenario: "Nach dem Restaurantbesuch mit Anreiz",
    message: "Hallo [Name], vielen Dank fuer Ihren Besuch im [Restaurant]! Hat es Ihnen geschmeckt? Wir freuen uns riesig ueber eine Google-Bewertung: [Link] – Als Dankeschoen gibt's beim naechsten Besuch ein Dessert aufs Haus! 🍰",
    charCount: 218,
    tip: "Incentives erhoehen die Antwortrate um bis zu 50%.",
    expectedRate: "35-45%",
  },
  {
    id: "rest-follow",
    industry: "restaurant",
    timing: "follow-up",
    length: "kurz",
    scenario: "Erinnerung nach 3 Tagen",
    message: "Hi [Name], kurze Erinnerung: Ihre Meinung zum [Restaurant] hilft uns sehr! ⭐ Hier bewerten: [Link] – Danke!",
    charCount: 112,
    tip: "Maximal eine Erinnerung senden.",
    expectedRate: "10-15%",
  },

  // Handwerker
  {
    id: "hw-next-short",
    industry: "handwerker",
    timing: "next-day",
    length: "kurz",
    scenario: "Nach Auftragsabschluss",
    message: "Hallo [Name], Ihr Auftrag bei [Firma] ist erledigt! Zufrieden? Eine kurze Bewertung hilft uns sehr: [Link] Danke! 🔧",
    charCount: 123,
    tip: "Am besten direkt nach der Rechnungsstellung.",
    expectedRate: "25-35%",
  },
  {
    id: "hw-next-med",
    industry: "handwerker",
    timing: "next-day",
    length: "mittel",
    scenario: "Nach Reparatur/Installation",
    message: "Hallo [Name], wir hoffen, Sie sind mit der [Arbeit] zufrieden! Ihre Google-Bewertung hilft anderen Kunden, einen zuverlaessigen Handwerker zu finden: [Link] – Dauert nur 2 Min. Vielen Dank! 👍",
    charCount: 198,
    tip: "Personalisierung mit konkreter Arbeit erhoehen die Rate.",
    expectedRate: "28-38%",
  },
  {
    id: "hw-follow",
    industry: "handwerker",
    timing: "follow-up",
    length: "kurz",
    scenario: "Erinnerung nach 5 Tagen",
    message: "Hi [Name], laeuft alles mit der [Arbeit]? Falls ja, freuen wir uns ueber Ihre Bewertung: [Link] Danke! 🙏",
    charCount: 111,
    tip: "Follow-up mit Nachfrage zur Zufriedenheit kombinieren.",
    expectedRate: "12-18%",
  },

  // Arzt
  {
    id: "arzt-next-short",
    industry: "arzt",
    timing: "next-day",
    length: "kurz",
    scenario: "Nach dem Praxisbesuch",
    message: "Hallo [Name], danke fuer Ihren Besuch in der [Praxis]. Ihre Meinung hilft anderen Patienten: [Link] – Bitte keine Gesundheitsdetails erwaehnen. Danke!",
    charCount: 160,
    tip: "Datenschutzhinweis ist bei medizinischen Praxen Pflicht.",
    expectedRate: "18-25%",
  },
  {
    id: "arzt-next-med",
    industry: "arzt",
    timing: "next-day",
    length: "mittel",
    scenario: "Nach erfolgreicher Behandlung",
    message: "Hallo [Name], wir hoffen, es geht Ihnen gut! Wenn Sie mit der Betreuung in unserer Praxis zufrieden waren, wuerden wir uns ueber eine Bewertung freuen: [Link] – Allgemeine Eindruecke zu Wartezeit & Atmosphaere reichen voellig. Danke! 💙",
    charCount: 243,
    tip: "Erst nach Behandlungsabschluss senden, nicht waehrend laufender Therapie.",
    expectedRate: "15-22%",
  },

  // Zahnarzt
  {
    id: "zahn-same-short",
    industry: "zahnarzt",
    timing: "same-day",
    length: "kurz",
    scenario: "Nach der Zahnreinigung",
    message: "Hallo [Name], danke fuer Ihren Besuch! 😁 Eine kurze Bewertung hilft uns sehr: [Link] – Wie war die Atmosphaere? Danke!",
    charCount: 127,
    tip: "Nach schmerzfreien Behandlungen ist die Bewertungsbereitschaft am hoechsten.",
    expectedRate: "25-35%",
  },
  {
    id: "zahn-follow",
    industry: "zahnarzt",
    timing: "follow-up",
    length: "mittel",
    scenario: "Erinnerung + naechster Kontrolltermin",
    message: "Hallo [Name], alles gut nach Ihrem letzten Besuch? 🦷 Falls Sie noch keine Bewertung hinterlassen haben: [Link] – Und denken Sie an Ihren naechsten Termin in 6 Monaten! 📅",
    charCount: 181,
    tip: "Bewertungsbitte mit Terminerinnerung kombinieren.",
    expectedRate: "12-18%",
  },

  // Anwalt
  {
    id: "anwalt-next",
    industry: "anwalt",
    timing: "next-day",
    length: "mittel",
    scenario: "Nach Mandatsabschluss",
    message: "Sehr geehrte/r [Name], vielen Dank fuer Ihr Vertrauen. Ihre Bewertung hilft anderen, den richtigen Anwalt zu finden: [Link] – Bitte keine Falldetails erwaehnen. Mit freundlichen Gruessen, [Kanzlei]",
    charCount: 205,
    tip: "Nur nach positivem Ausgang. Mandantengeheimnis beachten.",
    expectedRate: "10-18%",
  },

  // Friseur
  {
    id: "friseur-same-short",
    industry: "friseur",
    timing: "same-day",
    length: "kurz",
    scenario: "Nach dem Friseurbesuch",
    message: "Hey [Name]! ✂️ Happy mit dem neuen Style? Eine Bewertung wuerde uns mega freuen: [Link] Danke! 💛",
    charCount: 103,
    tip: "Lockerer Ton passt zur Friseur-Branche und erhoehen die Rate.",
    expectedRate: "30-40%",
  },
  {
    id: "friseur-same-med",
    industry: "friseur",
    timing: "same-day",
    length: "mittel",
    scenario: "Nach Styling oder Coloration",
    message: "Hey [Name], wir hoffen du liebst deinen neuen Look! 💇 Wenn du zufrieden bist, wuerdest du uns einen riesigen Gefallen tun – eine kurze Google-Bewertung: [Link] Erzaehl einfach was dir gefallen hat. Danke! ✨",
    charCount: 213,
    tip: "Direkt nach dem Termin senden, solange die Begeisterung frisch ist.",
    expectedRate: "32-42%",
  },

  // Fitness
  {
    id: "fitness-next",
    industry: "fitness",
    timing: "next-day",
    length: "kurz",
    scenario: "Nach dem Probetraining",
    message: "Hey [Name]! 💪 Wie war dein erstes Training bei [Studio]? Teile deine Erfahrung: [Link] – Hilft anderen, den richtigen Fitnesspartner zu finden!",
    charCount: 153,
    tip: "Nach Probetraining oder erstem Kurs senden.",
    expectedRate: "22-30%",
  },
  {
    id: "fitness-follow",
    industry: "fitness",
    timing: "follow-up",
    length: "mittel",
    scenario: "Nach dem ersten Monat",
    message: "Hi [Name], schon einen Monat bei [Studio] – stark! 🏋️ Wuerdest du deine Erfahrung teilen? Eine Bewertung hilft uns und neuen Mitgliedern: [Link] Danke dir!",
    charCount: 163,
    tip: "Nach dem ersten Monat haben Mitglieder genug Erfahrung fuer eine fundierte Bewertung.",
    expectedRate: "15-22%",
  },

  // Hotel
  {
    id: "hotel-same",
    industry: "hotel",
    timing: "same-day",
    length: "mittel",
    scenario: "Am Abreisetag",
    message: "Liebe/r [Name], vielen Dank fuer Ihren Aufenthalt im [Hotel]! 🏨 Wir hoffen, Sie hatten eine schoene Zeit. Eine kurze Bewertung hilft zukuenftigen Gaesten: [Link] – Wir freuen uns auf Ihren naechsten Besuch!",
    charCount: 215,
    tip: "Am Abreisetag senden, nicht waehrend des Aufenthalts.",
    expectedRate: "18-28%",
  },

  // Autowerkstatt
  {
    id: "auto-next-short",
    industry: "auto",
    timing: "next-day",
    length: "kurz",
    scenario: "Nach Reparatur/Inspektion",
    message: "Hallo [Name], laeuft Ihr [Auto] wieder? 🚗 Wir freuen uns ueber eine Bewertung: [Link] – Hilft anderen Autofahrern! Danke!",
    charCount: 131,
    tip: "Personalisierung mit Automarke/Modell erhoehen die Oeffnungsrate.",
    expectedRate: "22-30%",
  },
  {
    id: "auto-follow",
    industry: "auto",
    timing: "follow-up",
    length: "mittel",
    scenario: "Zufriedenheits-Check + Bewertung",
    message: "Hallo [Name], ist nach der [Reparatur] alles in Ordnung mit Ihrem [Auto]? Falls ja, hilft eine kurze Bewertung anderen Kunden: [Link] Bei Fragen sind wir da! 📞 [Tel]",
    charCount: 174,
    tip: "Follow-up mit Service-Check kombinieren zeigt Kundenorientierung.",
    expectedRate: "15-22%",
  },

  // Steuerberater
  {
    id: "steuer-next",
    industry: "steuerberater",
    timing: "next-day",
    length: "mittel",
    scenario: "Nach Einreichung der Steuererklaerung",
    message: "Hallo [Name], Ihre Steuererklaerung ist eingereicht! Wenn Sie mit unserer Betreuung zufrieden sind, freuen wir uns ueber Ihre Bewertung: [Link] – Hilft anderen, einen kompetenten Berater zu finden. Danke! 📊",
    charCount: 214,
    tip: "Ideal nach Einreichung oder positivem Steuerbescheid.",
    expectedRate: "15-22%",
  },

  // General
  {
    id: "gen-same-short",
    industry: "general",
    timing: "same-day",
    length: "kurz",
    scenario: "Universell – kurz",
    message: "Hallo [Name], danke fuer Ihr Vertrauen! ⭐ Eine Bewertung hilft uns sehr: [Link] – Dauert nur 1 Minute. Danke!",
    charCount: 115,
    tip: "Kurze SMS haben die hoechste Antwortrate.",
    expectedRate: "25-35%",
  },
  {
    id: "gen-same-med",
    industry: "general",
    timing: "same-day",
    length: "mittel",
    scenario: "Universell – mit Kontext",
    message: "Hallo [Name], vielen Dank, dass Sie sich fuer [Firma] entschieden haben! Ihre Meinung ist uns wichtig – eine kurze Google-Bewertung hilft anderen Kunden und uns: [Link] Herzlichen Dank! 🙏",
    charCount: 196,
    tip: "An die jeweilige Branche und Tonalitaet anpassen.",
    expectedRate: "20-30%",
  },
  {
    id: "gen-follow",
    industry: "general",
    timing: "follow-up",
    length: "kurz",
    scenario: "Sanfte Erinnerung",
    message: "Hi [Name], kurze Erinnerung: Ihre Bewertung macht einen Unterschied fuer uns! ⭐ [Link] – Nur 1 Minute. Vielen Dank!",
    charCount: 120,
    tip: "Maximal eine Erinnerung senden – mehr wirkt aufdringlich.",
    expectedRate: "8-12%",
  },
];

const SmsReviewTemplates = ({
  industries,
  title = "SMS-Vorlagen: Bewertungen per Kurznachricht anfragen",
  description = "Kopierfertige SMS-Templates mit Zeichenzaehler. Kurz, direkt und effektiv – SMS haben die hoechste Oeffnungsrate aller Kanaele (98%).",
}: SmsReviewTemplatesProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<SmsIndustry | "all">("all");
  const [selectedTiming, setSelectedTiming] = useState<SmsTiming | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableIndustries = industries || (Object.keys(industryLabels) as SmsIndustry[]);

  const filtered = allSmsTemplates.filter((t) => {
    if (!availableIndustries.includes(t.industry)) return false;
    if (selectedIndustry !== "all" && t.industry !== selectedIndustry) return false;
    if (selectedTiming !== "all" && t.timing !== selectedTiming) return false;
    return true;
  });

  const copyToClipboard = (template: SmsReviewTemplate) => {
    navigator.clipboard.writeText(template.message);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Smartphone className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex items-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <MessageSquare className="w-4 h-4" />
            98% Oeffnungsrate
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            90% innerhalb 3 Min. gelesen
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="w-4 h-4" />
            Bis zu 45% Antwortrate
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {availableIndustries.length > 1 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedIndustry("all")}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                selectedIndustry === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Alle Branchen
            </button>
            {availableIndustries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  selectedIndustry === ind
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {industryLabels[ind].icon} {industryLabels[ind].label}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTiming("all")}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
              selectedTiming === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            Alle Zeitpunkte
          </button>
          {(Object.keys(timingLabels) as SmsTiming[]).map((timing) => (
            <button
              key={timing}
              onClick={() => setSelectedTiming(timing)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1",
                selectedTiming === timing
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {timingLabels[timing].icon}
              {timingLabels[timing].label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {filtered.length} {filtered.length === 1 ? "Vorlage" : "Vorlagen"} gefunden
      </p>

      {/* Template Cards */}
      <div className="space-y-3">
        {filtered.map((template) => (
          <Card key={template.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === template.id ? null : template.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-xl">{industryLabels[template.industry].icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{template.scenario}</span>
                      <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", lengthColors[template.length])}>
                        {template.length === "kurz" ? "Kurz" : "Mittel"} · {template.charCount} Zeichen
                      </span>
                      {template.expectedRate && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          ~{template.expectedRate}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {template.message.substring(0, 60)}...
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform shrink-0",
                    expandedId === template.id && "rotate-180"
                  )}
                />
              </div>

              {/* Expanded Content */}
              {expandedId === template.id && (
                <div className="border-t border-border">
                  <div className="p-4 space-y-4">
                    {/* SMS Preview */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">SMS-Vorschau</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">
                            {template.charCount} / {template.charCount <= 160 ? "160" : "306"} Zeichen
                            {template.charCount > 160 ? " (2 SMS)" : " (1 SMS)"}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(template);
                            }}
                            className={cn(
                              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                              copiedId === template.id
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-primary text-primary-foreground hover:bg-primary/90"
                            )}
                          >
                            {copiedId === template.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" /> Kopiert!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Kopieren
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      {/* Phone mockup */}
                      <div className="bg-muted/30 rounded-2xl p-4 max-w-sm mx-auto">
                        <div className="bg-background rounded-xl p-4 shadow-sm border border-border">
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground">[Firmenname]</span>
                          </div>
                          <div className="bg-primary/5 rounded-lg p-3 text-sm text-foreground leading-relaxed">
                            {template.message}
                          </div>
                          <div className="text-right mt-2">
                            <span className="text-xs text-muted-foreground">Jetzt</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Character count bar */}
                    <div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>Zeichenverbrauch</span>
                        <span>{template.charCount <= 160 ? "1 SMS-Segment" : "2 SMS-Segmente"}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={cn(
                            "h-2 rounded-full transition-all",
                            template.charCount <= 160 ? "bg-green-500" : "bg-amber-500"
                          )}
                          style={{ width: `${Math.min((template.charCount / 306) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Tip */}
                    {template.tip && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                        <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                          <strong>Tipp:</strong> {template.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Smartphone className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Vorlagen fuer diese Filterauswahl gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default SmsReviewTemplates;
