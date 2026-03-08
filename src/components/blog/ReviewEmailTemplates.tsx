import { useState } from "react";
import { Copy, Check, Mail, Clock, Star, Sparkles, Building2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type EmailIndustry = "restaurant" | "handwerker" | "arzt" | "zahnarzt" | "anwalt" | "friseur" | "fitness" | "hotel" | "auto" | "steuerberater" | "general";
export type EmailTiming = "same-day" | "next-day" | "follow-up" | "seasonal";
export type EmailTone = "formal" | "casual" | "warm";

export interface ReviewEmailTemplate {
  id: string;
  industry: EmailIndustry;
  timing: EmailTiming;
  tone: EmailTone;
  scenario: string;
  subject: string;
  body: string;
  tip?: string;
  expectedRate?: string;
}

interface ReviewEmailTemplatesProps {
  industries?: EmailIndustry[];
  title?: string;
  description?: string;
}

const industryLabels: Record<EmailIndustry, { label: string; icon: string }> = {
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

const timingLabels: Record<EmailTiming, { label: string; icon: React.ReactNode }> = {
  "same-day": { label: "Gleicher Tag", icon: <Clock className="w-3.5 h-3.5" /> },
  "next-day": { label: "Naechster Tag", icon: <Mail className="w-3.5 h-3.5" /> },
  "follow-up": { label: "Follow-up", icon: <Sparkles className="w-3.5 h-3.5" /> },
  "seasonal": { label: "Saisonal", icon: <Star className="w-3.5 h-3.5" /> },
};

const toneColors: Record<EmailTone, string> = {
  formal: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  casual: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  warm: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const toneLabels: Record<EmailTone, string> = {
  formal: "Formell",
  casual: "Locker",
  warm: "Herzlich",
};

export const allEmailTemplates: ReviewEmailTemplate[] = [
  // Restaurant
  {
    id: "rest-same-day",
    industry: "restaurant",
    timing: "same-day",
    tone: "warm",
    scenario: "Nach dem Restaurantbesuch",
    subject: "Danke fuer Ihren Besuch bei [Restaurant-Name]! 🍽️",
    body: `Liebe/r [Kundenname],

vielen Dank, dass Sie heute bei uns im [Restaurant-Name] zu Gast waren! Wir hoffen, dass Ihnen [Gericht/Erlebnis] geschmeckt hat.

Ihre Meinung ist uns sehr wichtig – sie hilft anderen Gaesten, uns zu entdecken, und uns, noch besser zu werden.

Wuerden Sie sich 2 Minuten Zeit nehmen, um Ihre Erfahrung zu teilen?

👉 [Google-Bewertungslink]

Herzlichen Dank und bis bald!

Ihr Team vom [Restaurant-Name]

P.S. Als Dankeschoen erwartet Sie bei Ihrem naechsten Besuch ein kleines Dessert aufs Haus! 🍰`,
    tip: "Innerhalb von 2 Stunden nach dem Besuch senden – die Erinnerung ist dann am frischesten.",
    expectedRate: "25-35%",
  },
  {
    id: "rest-follow-up",
    industry: "restaurant",
    timing: "follow-up",
    tone: "casual",
    scenario: "Erinnerung nach 3 Tagen",
    subject: "Wie war's bei uns? Wir sind gespannt! ⭐",
    body: `Hallo [Kundenname],

vor ein paar Tagen waren Sie bei uns im [Restaurant-Name] – wir hoffen, es hat Ihnen gefallen!

Falls Sie es noch nicht getan haben: Wir wuerden uns riesig ueber eine kurze Bewertung freuen. Das dauert nur 1-2 Minuten und hilft uns enorm.

⭐ Jetzt bewerten: [Google-Bewertungslink]

Vielen Dank!

Herzliche Gruesse
[Vorname] vom [Restaurant-Name]-Team`,
    tip: "Nur senden, wenn die erste E-Mail nicht zu einer Bewertung gefuehrt hat.",
    expectedRate: "10-15%",
  },

  // Handwerker
  {
    id: "hw-next-day",
    industry: "handwerker",
    timing: "next-day",
    tone: "formal",
    scenario: "Nach Abschluss eines Auftrags",
    subject: "Ihr Auftrag ist abgeschlossen – Ihre Meinung zaehlt!",
    body: `Sehr geehrte/r [Kundenname],

wir freuen uns, dass wir [Beschreibung der Arbeit] erfolgreich fuer Sie abschliessen konnten. Ihre Zufriedenheit ist unser hoechstes Ziel.

Duerfen wir Sie um einen kurzen Moment bitten? Eine Google-Bewertung hilft anderen Kunden, einen zuverlaessigen Handwerker zu finden – und uns, unseren Service staendig zu verbessern.

📝 Bewertung abgeben: [Google-Bewertungslink]

Es dauert nur 2 Minuten und macht einen grossen Unterschied fuer unser kleines Unternehmen.

Mit freundlichen Gruessen
[Name]
[Firmenname]
[Telefonnummer]`,
    tip: "Am besten direkt nach der Rechnungsstellung senden, wenn der Kunde zufrieden ist.",
    expectedRate: "20-30%",
  },
  {
    id: "hw-seasonal",
    industry: "handwerker",
    timing: "seasonal",
    tone: "warm",
    scenario: "Jahresrueckblick / Fruehjahrsaktion",
    subject: "Ein Jahr voller Projekte – Danke fuer Ihr Vertrauen! 🏠",
    body: `Liebe/r [Kundenname],

das Jahr neigt sich dem Ende zu und wir moechten uns herzlich bei Ihnen bedanken, dass Sie uns mit [Projekt/Arbeit] vertraut haben.

Wenn Sie mit unserer Arbeit zufrieden waren, wuerden wir uns sehr ueber eine kurze Bewertung freuen. Jede Sternebewertung hilft uns, auch im neuen Jahr fuer Sie und andere Kunden da zu sein.

⭐ Hier bewerten: [Google-Bewertungslink]

Wir wuenschen Ihnen frohe Feiertage!

Ihr Team von [Firmenname]`,
    tip: "Ideal im Dezember oder Januar versenden – Kunden sind in reflektierender Stimmung.",
    expectedRate: "15-20%",
  },

  // Arzt
  {
    id: "arzt-next-day",
    industry: "arzt",
    timing: "next-day",
    tone: "formal",
    scenario: "Nach einem Arzttermin",
    subject: "Vielen Dank fuer Ihren Besuch in unserer Praxis",
    body: `Sehr geehrte/r [Patientenname],

vielen Dank fuer Ihren Besuch in der [Praxisname]. Wir hoffen, dass Sie sich bei uns gut aufgehoben gefuehlt haben.

Ihre Erfahrungen helfen anderen Patienten, die richtige Praxis zu finden. Falls Sie einen Moment Zeit haben, wuerden wir uns ueber Ihre Einschaetzung sehr freuen.

📝 Bewertung abgeben: [Google-Bewertungslink]

Bitte beachten Sie: Teilen Sie keine gesundheitsbezogenen Details in der Bewertung – allgemeine Eindruecke zur Atmosphaere, Wartezeit und Betreuung sind ideal.

Mit freundlichen Gruessen
Das Team der [Praxisname]`,
    tip: "Datenschutz beachten: Niemals Diagnosen oder Behandlungen in der Bewertungsanfrage erwaehnen.",
    expectedRate: "15-25%",
  },
  {
    id: "arzt-follow-up",
    industry: "arzt",
    timing: "follow-up",
    tone: "warm",
    scenario: "Nach erfolgreicher Behandlung",
    subject: "Wie geht es Ihnen? Wir denken an Sie 💙",
    body: `Liebe/r [Patientenname],

wir hoffen, dass es Ihnen nach Ihrem letzten Besuch bei uns gut geht!

Wenn Sie mit Ihrer Betreuung zufrieden waren, wuerden wir uns ueber eine kurze Bewertung freuen. Damit helfen Sie anderen Menschen, eine vertrauensvolle Praxis zu finden.

⭐ Jetzt bewerten: [Google-Bewertungslink]

Natuerlich stehen wir Ihnen bei weiteren Fragen jederzeit zur Verfuegung.

Herzliche Gruesse
[Arztname] und das gesamte Praxisteam`,
    tip: "Erst nach Abschluss einer Behandlungsserie senden, nicht waehrend laufender Therapie.",
    expectedRate: "10-18%",
  },

  // Zahnarzt
  {
    id: "zahn-same-day",
    industry: "zahnarzt",
    timing: "same-day",
    tone: "warm",
    scenario: "Nach der Zahnreinigung",
    subject: "Strahlend saubere Zaehne – und Ihre Meinung? 😁",
    body: `Liebe/r [Patientenname],

wir hoffen, Sie fuehlen sich nach Ihrer professionellen Zahnreinigung heute rundum wohl!

Ihre Bewertung hilft anderen Patienten, eine Zahnarztpraxis zu finden, in der sie sich gut aufgehoben fuehlen. Wuerden Sie uns 2 Minuten Ihrer Zeit schenken?

⭐ Hier bewerten: [Google-Bewertungslink]

Vielen herzlichen Dank – und denken Sie an Ihre naechste Kontrolle in 6 Monaten! 📅

Ihr Praxisteam [Praxisname]`,
    tip: "Nach schmerzfreien Eingriffen wie Zahnreinigung ist die Bewertungsbereitschaft am hoechsten.",
    expectedRate: "20-30%",
  },

  // Anwalt
  {
    id: "anwalt-next-day",
    industry: "anwalt",
    timing: "next-day",
    tone: "formal",
    scenario: "Nach Mandatsabschluss",
    subject: "Ihr Anliegen wurde erfolgreich abgeschlossen",
    body: `Sehr geehrte/r [Mandantenname],

wir freuen uns, dass wir Sie in der Angelegenheit [allgemeine Beschreibung] erfolgreich vertreten konnten.

Ihre Erfahrungen mit unserer Kanzlei koennen anderen Menschen helfen, in einer aehnlichen Situation den richtigen Anwalt zu finden. Falls Sie einen Moment Zeit haben, wuerden wir uns ueber eine Bewertung freuen.

📝 Bewertung abgeben: [Google-Bewertungslink]

Wichtig: Bitte teilen Sie keine vertraulichen Falldetails. Allgemeine Eindruecke zu Kommunikation, Erreichbarkeit und Kompetenz sind ideal.

Mit freundlichen Gruessen
[Anwaltsname]
[Kanzleiname]`,
    tip: "Nur nach positivem Ausgang versenden. Mandantengeheimnis in der Anfrage beachten.",
    expectedRate: "12-20%",
  },

  // Friseur
  {
    id: "friseur-same-day",
    industry: "friseur",
    timing: "same-day",
    tone: "casual",
    scenario: "Nach dem Friseurbesuch",
    subject: "Neuer Look, neue Energie! Wie gefaellt's? ✂️",
    body: `Hey [Kundenname]!

Wir hoffen, du bist happy mit deinem neuen Style! 💇

Wenn du zufrieden bist, wuerdest du uns einen riesigen Gefallen tun: Eine kurze Google-Bewertung hilft uns total und dauert nur 1 Minute.

⭐ Hier bewerten: [Google-Bewertungslink]

Erzaehl einfach, was dir gefallen hat – ob der Schnitt, die Beratung oder die Atmosphaere.

Bis zum naechsten Mal!
Dein Team vom [Salonname] 💛`,
    tip: "Direkt nach dem Termin senden, solange die Begeisterung frisch ist.",
    expectedRate: "25-35%",
  },
  {
    id: "friseur-follow-up",
    industry: "friseur",
    timing: "follow-up",
    tone: "warm",
    scenario: "Terminerinnerung + Bewertungsbitte",
    subject: "Zeit fuer einen neuen Termin? Und eine kleine Bitte... 💇‍♀️",
    body: `Hallo [Kundenname],

dein letzter Besuch bei uns ist schon [X Wochen] her – wird es Zeit fuer ein Refresh? 😊

Falls du noch keine Bewertung hinterlassen hast: Wir wuerden uns riesig freuen! Dein Feedback hilft uns und neuen Kunden.

⭐ Schnell bewerten: [Google-Bewertungslink]

Und wenn du gleich einen Termin buchen moechtest:
📅 [Buchungslink]

Wir freuen uns auf dich!
[Salonname]`,
    tip: "Kombiniere Bewertungsbitte mit Terminbuchung fuer hoeheren Nutzen.",
    expectedRate: "12-18%",
  },

  // Fitness
  {
    id: "fitness-next-day",
    industry: "fitness",
    timing: "next-day",
    tone: "casual",
    scenario: "Nach dem Probetraining",
    subject: "Wie war dein erstes Training bei uns? 💪",
    body: `Hey [Kundenname],

mega cool, dass du gestern zum Probetraining bei uns warst! Wir hoffen, es hat dir gefallen.

Deine Meinung hilft anderen, den richtigen Fitnesspartner zu finden. Wuerdest du uns eine kurze Bewertung dalassen?

⭐ Hier bewerten: [Google-Bewertungslink]

Schreib einfach, was dir aufgefallen ist – Ausstattung, Trainer, Atmosphaere, alles zaehlt!

Sportliche Gruesse
Dein [Studioname]-Team 🏋️`,
    tip: "Am besten nach positiven Ersterfahrungen senden – z.B. Probetraining oder erstes Kursformat.",
    expectedRate: "20-28%",
  },

  // Hotel
  {
    id: "hotel-same-day",
    industry: "hotel",
    timing: "same-day",
    tone: "formal",
    scenario: "Nach dem Check-out",
    subject: "Vielen Dank fuer Ihren Aufenthalt im [Hotelname]! 🏨",
    body: `Sehr geehrte/r [Gastname],

wir bedanken uns herzlich fuer Ihren Aufenthalt vom [Datum] bis [Datum] im [Hotelname].

Ihre Erfahrungen sind fuer uns und zukuenftige Gaeste von grossem Wert. Wuerden Sie sich einen Moment Zeit nehmen, Ihren Aufenthalt zu bewerten?

⭐ Bewertung abgeben: [Google-Bewertungslink]

Ob Zimmerkomfort, Service, Fruehstueck oder Lage – jedes Detail hilft!

Wir wuerden uns freuen, Sie bald wieder bei uns begruessen zu duerfen.

Mit herzlichen Gruessen
[Name], Hotelleitung
[Hotelname]`,
    tip: "Am Abreisetag senden – nicht waehrend des Aufenthalts (stoert das Urlaubserlebnis).",
    expectedRate: "15-25%",
  },

  // Autowerkstatt
  {
    id: "auto-next-day",
    industry: "auto",
    timing: "next-day",
    tone: "warm",
    scenario: "Nach der Reparatur / Inspektion",
    subject: "Ihr Auto ist fertig – und Ihre Meinung? 🚗",
    body: `Hallo [Kundenname],

wir hoffen, Ihr [Automarke/Modell] laeuft nach der [Inspektion/Reparatur] wieder einwandfrei!

Wenn Sie mit unserem Service zufrieden waren, wuerden wir uns ueber eine kurze Bewertung freuen. Das hilft anderen Autofahrern, eine vertrauenswuerdige Werkstatt zu finden.

⭐ Jetzt bewerten: [Google-Bewertungslink]

Vielen Dank fuer Ihr Vertrauen!

Ihr Team von [Werkstattname]
📞 [Telefonnummer]`,
    tip: "Nach groesseren Reparaturen oder wenn Kunden positives Feedback geben.",
    expectedRate: "18-25%",
  },

  // Steuerberater
  {
    id: "steuer-seasonal",
    industry: "steuerberater",
    timing: "seasonal",
    tone: "formal",
    scenario: "Nach der Steuererklaerung",
    subject: "Ihre Steuererklaerung ist eingereicht – Ihre Meinung zaehlt!",
    body: `Sehr geehrte/r [Mandantenname],

wir freuen uns, Ihnen mitteilen zu koennen, dass Ihre Steuererklaerung fuer [Jahr] erfolgreich beim Finanzamt eingereicht wurde.

Wenn Sie mit unserer Betreuung zufrieden sind, wuerden wir uns sehr ueber eine Bewertung freuen. Ihre Empfehlung hilft anderen, einen kompetenten Steuerberater zu finden.

📝 Bewertung abgeben: [Google-Bewertungslink]

Selbstverstaendlich stehen wir Ihnen weiterhin fuer alle steuerlichen Fragen zur Verfuegung.

Mit freundlichen Gruessen
[Name]
[Kanzleiname]`,
    tip: "Ideal direkt nach Einreichung oder nach Erhalt eines positiven Steuerbescheids.",
    expectedRate: "15-22%",
  },

  // General
  {
    id: "gen-same-day",
    industry: "general",
    timing: "same-day",
    tone: "warm",
    scenario: "Universell – nach Kauf oder Dienstleistung",
    subject: "Vielen Dank – Ihre Meinung ist uns wichtig! ⭐",
    body: `Liebe/r [Kundenname],

herzlichen Dank fuer Ihr Vertrauen in [Firmenname]! Wir hoffen, Sie sind mit [Produkt/Dienstleistung] zufrieden.

Wuerden Sie sich 2 Minuten Zeit nehmen, Ihre Erfahrung mit anderen zu teilen? Jede Bewertung hilft uns, besser zu werden.

⭐ Jetzt bewerten: [Google-Bewertungslink]

Vielen Dank!

Herzliche Gruesse
Ihr [Firmenname]-Team`,
    tip: "Anpassen an die jeweilige Branche fuer hoehere Antwortrate.",
    expectedRate: "15-25%",
  },
  {
    id: "gen-follow-up",
    industry: "general",
    timing: "follow-up",
    tone: "casual",
    scenario: "Sanfte Erinnerung (7 Tage spaeter)",
    subject: "Kurze Erinnerung: Wir freuen uns auf Ihr Feedback! 😊",
    body: `Hallo [Kundenname],

letzte Woche haben wir Sie um eine kurze Bewertung gebeten – falls Sie noch nicht dazu gekommen sind, kein Problem!

Hier nochmal der direkte Link (dauert nur 1-2 Minuten):

⭐ [Google-Bewertungslink]

Jede einzelne Bewertung macht einen Unterschied fuer unser kleines Unternehmen. Danke, dass Sie sich die Zeit nehmen!

Beste Gruesse
[Firmenname]`,
    tip: "Maximal eine Erinnerung senden. Mehr wirkt aufdringlich und schadet der Kundenbeziehung.",
    expectedRate: "8-12%",
  },
  {
    id: "gen-seasonal",
    industry: "general",
    timing: "seasonal",
    tone: "warm",
    scenario: "Jubilaeum / Meilenstein",
    subject: "[Firmenname] wird [X] Jahre – und Sie waren Teil davon! 🎉",
    body: `Liebe/r [Kundenname],

[Firmenname] feiert [X]-jaehriges Jubilaeum – und das verdanken wir Kunden wie Ihnen!

Anlaeesslich dieses Meilensteins haben wir eine Bitte: Wuerden Sie Ihre Erfahrung mit uns in einer kurzen Google-Bewertung teilen? Jede Stimme zaehlt und hilft uns, auch die naechsten [X] Jahre fuer Sie da zu sein.

⭐ Hier bewerten: [Google-Bewertungslink]

Als Dankeschoen erhalten alle Bewerter [Rabatt/Geschenk/Vorteil].

Herzlichen Dank!
Ihr [Firmenname]-Team 🎉`,
    tip: "Jubilaeen und Meilensteine erzeugen emotionale Verbindung – ideal fuer Bewertungsaktionen.",
    expectedRate: "18-28%",
  },
];

const ReviewEmailTemplates = ({
  industries,
  title = "E-Mail-Vorlagen: Bewertungen aktiv anfragen",
  description = "Kopierfertige E-Mail-Templates fuer verschiedene Branchen und Anlaesse. Betreffzeile + Textkoerper – einfach anpassen und versenden.",
}: ReviewEmailTemplatesProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<EmailIndustry | "all">("all");
  const [selectedTiming, setSelectedTiming] = useState<EmailTiming | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableIndustries = industries || (Object.keys(industryLabels) as EmailIndustry[]);

  const filtered = allEmailTemplates.filter((t) => {
    if (!availableIndustries.includes(t.industry)) return false;
    if (selectedIndustry !== "all" && t.industry !== selectedIndustry) return false;
    if (selectedTiming !== "all" && t.timing !== selectedTiming) return false;
    return true;
  });

  const copyToClipboard = (template: ReviewEmailTemplate) => {
    const text = `Betreff: ${template.subject}\n\n${template.body}`;
    navigator.clipboard.writeText(text);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
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
          {(Object.keys(timingLabels) as EmailTiming[]).map((timing) => (
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
      <div className="space-y-4">
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
                      <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", toneColors[template.tone])}>
                        {toneLabels[template.tone]}
                      </span>
                      {template.expectedRate && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          ~{template.expectedRate} Antwortrate
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      Betreff: {template.subject}
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
                    {/* Subject Line */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Betreffzeile</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3 font-medium text-foreground text-sm">
                        {template.subject}
                      </div>
                    </div>

                    {/* Body */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-Mail-Text</span>
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
                      <pre className="bg-muted/50 rounded-lg p-4 text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                        {template.body}
                      </pre>
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
          <Mail className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Vorlagen fuer diese Filterauswahl gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default ReviewEmailTemplates;
