import { useState } from "react";
import { Copy, Check, Mail, ChevronDown, Sparkles, Newspaper, Mic, Trophy, Calendar, Heart, TrendingUp, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type PressType = "opening" | "event" | "award" | "charity" | "expert" | "milestone" | "trend" | "followup";

export interface PressTemplate {
  id: string;
  type: PressType;
  title: string;
  scenario: string;
  targetMedia: string;
  subject: string;
  body: string;
  tip?: string;
  successRate?: string;
}

interface PressOutreachTemplatesProps {
  types?: PressType[];
  title?: string;
  description?: string;
}

const typeMeta: Record<PressType, { label: string; icon: React.ReactNode; color: string }> = {
  opening: { label: "Eroeffnung / Neuigkeit", icon: <Newspaper className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  event: { label: "Event / Aktion", icon: <Calendar className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  award: { label: "Auszeichnung", icon: <Trophy className="w-4 h-4" />, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  charity: { label: "Soziales Engagement", icon: <Heart className="w-4 h-4" />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  expert: { label: "Experten-Positionierung", icon: <Mic className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  milestone: { label: "Jubilaeum / Meilenstein", icon: <TrendingUp className="w-4 h-4" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  trend: { label: "Branchen-Trend", icon: <Lightbulb className="w-4 h-4" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  followup: { label: "Follow-up", icon: <Mail className="w-4 h-4" />, color: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400" },
};

export const allPressTemplates: PressTemplate[] = [
  {
    id: "press-opening",
    type: "opening",
    title: "Geschaeftseroeffnung / Neueroeffnung",
    scenario: "Neues Geschaeft oder neuer Standort eroeffnet",
    targetMedia: "Lokalzeitung, Stadtmagazin, Lokalradio",
    subject: "Pressemitteilung: [Unternehmen] eroeffnet [neu/zweiten Standort] in [Stadtteil]",
    body: `Sehr geehrte/r [Name der Redaktion / des Journalisten],

am [Datum] eroeffnet [Unternehmen] [sein neues Geschaeft / seinen zweiten Standort] in [Strasse, Stadtteil].

Die wichtigsten Fakten:
• Was: [Art des Geschaefts, z.B. "handwerkliche Baeckerei mit Bio-Zutaten"]
• Wo: [Genaue Adresse + Stadtteil]
• Wann: Eroeffnung am [Datum] um [Uhrzeit]
• Besonderheit: [Was macht dieses Geschaeft einzigartig? Z.B. "einziges glutenfreies Angebot im Stadtteil"]

Zur Eroeffnung gibt es:
• [Aktion, z.B. "Kostenlose Verkostung fuer die ersten 100 Besucher"]
• [Ggf. prominente Gaeste / Schirmherrschaft]

Hintergrund:
[2-3 Saetze zur Gruendungsgeschichte. Z.B.: "Inhaberin Maria Schmidt hat 10 Jahre in Pariser Baeckereien gearbeitet und bringt diese Expertise jetzt nach [Stadt]."]

Wir laden Sie herzlich zur Eroeffnung ein – gerne auch vorab fuer einen exklusiven Blick hinter die Kulissen.

Fotos in Druckqualitaet: [Link zu Pressefotos]
Website: [URL]

Mit freundlichen Gruessen,
[Name]
[Telefon]
[E-Mail]`,
    tip: "Laden Sie den Journalisten 2-3 Tage VOR der offiziellen Eroeffnung ein – exklusive Vorab-Berichterstattung ist attraktiver.",
    successRate: "40-60%",
  },
  {
    id: "press-event",
    type: "event",
    title: "Lokales Event / Aktionstag",
    scenario: "Eigenes Event oder Teilnahme an Stadtteilfest",
    targetMedia: "Veranstaltungskalender, Lokalzeitung, Stadtmagazin",
    subject: "[Event-Name]: [Unternehmen] laedt ein am [Datum] in [Stadtteil]",
    body: `Sehr geehrte Redaktion,

am [Datum] veranstaltet [Unternehmen] [Event-Name] in [Stadtteil/Location].

Worum es geht:
[2-3 Saetze, die den Nachrichtenwert klar machen. Was ist besonders? Warum sollte die Redaktion berichten?]

Fakten zum Event:
• Datum & Uhrzeit: [Datum], [Uhrzeit] – [Endzeit]
• Ort: [Genaue Adresse]
• Eintritt: [Kostenlos / Preis]
• Erwartete Besucher: [Zahl]
• Programm-Highlights:
  – [Highlight 1, z.B. "Live-Kochen mit Sternekoch XY"]
  – [Highlight 2, z.B. "Kinderprogramm mit Bastelstation"]
  – [Highlight 3, z.B. "Tombola zugunsten [Verein]"]

Pressevertreter sind herzlich eingeladen. Gerne reservieren wir Ihnen einen Platz und organisieren Interviewpartner.

Bildmaterial: [Link oder "Senden wir Ihnen gerne zu"]
Anmeldung Presse: [Kontakt]

Mit freundlichen Gruessen,
[Name]
[Unternehmen]
[Telefon]`,
    tip: "Versende die Einladung 2-3 Wochen vorher. Eine Woche vorher nochmals nachfassen. Am Tag danach: Fotos + kurzen Nachbericht senden.",
    successRate: "30-50%",
  },
  {
    id: "press-award",
    type: "award",
    title: "Auszeichnung / Zertifizierung",
    scenario: "Branchenpreis, Qualitaetssiegel oder Zertifikat erhalten",
    targetMedia: "Lokalzeitung, Fachpresse, Branchenportale",
    subject: "[Unternehmen] aus [Stadt] erhaelt [Name der Auszeichnung]",
    body: `Sehr geehrte/r [Name],

[Unternehmen] aus [Stadt/Stadtteil] wurde mit [Name der Auszeichnung] ausgezeichnet.

Was die Auszeichnung bedeutet:
• [Kurze Erklaerung der Auszeichnung – wer vergibt sie, wie bekannt ist sie?]
• [Wie viele Bewerber/Teilnehmer gab es?]
• [Jury-Begruendung in 1-2 Saetzen]

Warum das fuer [Stadt] relevant ist:
"[Zitat des Inhabers/der Inhaberin – emotional, mit lokalem Bezug. Z.B.: 'Diese Auszeichnung zeigt, dass man auch als kleines Unternehmen in [Stadtteil] Grossartiges leisten kann. Wir sind stolz, [Stadt] zu repraesentieren.']"

Hintergrund:
• [Unternehmen] ist seit [Jahr] in [Stadt] ansaessig
• [Mitarbeiterzahl] Mitarbeiter
• [Besonderheit / USP]

Fuer Rueckfragen oder ein Interview stehe ich gerne zur Verfuegung.

Foto der Preisverleihung: [Link]

Herzliche Gruesse,
[Name]
[Telefon]`,
    tip: "Auszeichnungen haben den hoechsten Nachrichtenwert innerhalb der ersten 48 Stunden. Sofort versenden!",
    successRate: "50-70%",
  },
  {
    id: "press-charity",
    type: "charity",
    title: "Soziales Engagement / Spendenaktion",
    scenario: "Unterstuetzung lokaler Organisation oder Spendenaktion",
    targetMedia: "Lokalzeitung, Anzeigenblaetter, Lokalradio",
    subject: "[Unternehmen] unterstuetzt [Organisation/Zweck] mit [konkrete Aktion]",
    body: `Sehr geehrte/r [Name],

[Unternehmen] aus [Stadtteil] engagiert sich fuer [Zweck/Organisation] mit einer besonderen Aktion:

Die Aktion:
• [Beschreibung, z.B. "Fuer jedes verkaufte [Produkt] im [Monat] spenden wir [X]€ an [Organisation]"]
• Ziel: [Konkretes Spendenziel, z.B. "5.000€ fuer neue Spielgeraete im Kindergarten [Name]"]
• Zeitraum: [Startdatum] bis [Enddatum]

Warum wir das tun:
"[Persoenliches Zitat – authentisch und emotional. Z.B.: 'Meine eigenen Kinder gehen in diesen Kindergarten. Wenn wir als lokales Unternehmen hier nicht helfen, wer dann?']"

So koennen Kunden mitmachen:
• [Konkreter Aufruf, z.B. "Einfach bei uns einkaufen – wir spenden automatisch"]
• [Ggf. zusaetzliche Spendenmoeglichkeit]

Die Story in Zahlen:
• Bisherige Spenden: [Falls vorhanden]
• Betroffene/Profiteure: [Z.B. "120 Kinder"]
• Partner: [Weitere beteiligte Unternehmen/Vereine]

Fuer einen Vor-Ort-Termin oder Fotos stehen wir jederzeit zur Verfuegung.

Herzliche Gruesse,
[Name]
[Unternehmen]
[Telefon]`,
    tip: "Charity-Storys mit echtem persoenlichem Bezug werden 3x haeufiger aufgegriffen als reine Unternehmens-PR.",
    successRate: "45-65%",
  },
  {
    id: "press-expert",
    type: "expert",
    title: "Experten-Positionierung / Fachkommentar",
    scenario: "Sich als lokaler Experte fuer ein Thema anbieten",
    targetMedia: "Lokalzeitung, Fachmagazine, Branchenportale, Podcasts",
    subject: "Expertenangebot: [Thema] – Einschaetzung von [Name] aus [Stadt]",
    body: `Sehr geehrte/r [Name],

als [Berufsbezeichnung] mit [X] Jahren Erfahrung in [Stadt] moechte ich mich Ihnen als Ansprechpartner fuer [Fachthema] anbieten.

Meine Expertise:
• [Qualifikation 1, z.B. "Meisterbetrieb seit 2005"]
• [Qualifikation 2, z.B. "Pruefer bei der IHK [Stadt]"]
• [Qualifikation 3, z.B. "Spezialisierung auf [Nische]"]

Themen, zu denen ich Stellung nehmen kann:
1. [Aktuelles Thema 1, z.B. "Energetische Sanierung – was Hausbesitzer in [Stadt] jetzt wissen muessen"]
2. [Aktuelles Thema 2, z.B. "Fachkraeftemangel im Handwerk – lokale Perspektive"]
3. [Aktuelles Thema 3, z.B. "Trends in [Branche] 2025"]

Format-Optionen:
• Kurzes Telefoninterview (10-15 Min.)
• Vor-Ort-Termin in unserem Betrieb
• Schriftlicher Fachkommentar (liefere ich innerhalb 24h)
• Podcast-/Video-Interview

Ich bin kurzfristig erreichbar unter [Telefon] – auch abends und am Wochenende.

Mit freundlichen Gruessen,
[Name]
[Unternehmen]
[Website]`,
    tip: "Reagiere auf aktuelle Nachrichten: Wenn ein relevantes Thema in den Medien ist, sofort eine Experten-Stellungnahme anbieten.",
    successRate: "20-35%",
  },
  {
    id: "press-milestone",
    type: "milestone",
    title: "Jubilaeum / Geschaefts-Meilenstein",
    scenario: "Firmenjubilaeum, Kundenmeilenstein, Mitarbeiterjubilaeum",
    targetMedia: "Lokalzeitung, Stadtmagazin, IHK-Magazin",
    subject: "[X] Jahre [Unternehmen] in [Stadtteil] – vom [Anfang] zum [Heute]",
    body: `Sehr geehrte/r [Name],

[Unternehmen] in [Stadtteil] feiert [Jubilaeum/Meilenstein]: [Konkret, z.B. "25 Jahre", "10.000. Kunde", "50. Mitarbeiter"].

Die Geschichte in Kuerze:
• [Gruendungsjahr]: [Wie alles begann – persoenlich und greifbar]
• [Wichtiger Meilenstein]: [Z.B. "2010: Umzug in die heutigen Raeume"]
• [Weiterer Meilenstein]: [Z.B. "2018: Erweiterung um [Geschaeftsbereich]"]
• [Heute]: [Aktuelle Zahlen – Mitarbeiter, Kunden, Umsatz wenn gewuenscht]

Zitat [Inhaber/in]:
"[Persoenliche Rueckschau + Ausblick. Z.B.: 'Als ich [Jahr] in der kleinen Werkstatt angefangen habe, haette ich nie gedacht, dass wir heute [X] Mitarbeiter beschaeftigen. [Stadt/Stadtteil] ist nicht nur unser Standort – es ist unser Zuhause.']"

Wie wir feiern:
• [Aktion fuer Kunden, z.B. "[X]% Jubilaeumsrabatt am [Datum]"]
• [Ggf. Event / Tag der offenen Tuer]
• [Ggf. Spendenaktion]

Bildmaterial: [Link zu historischen + aktuellen Fotos]

Fuer eine Reportage kommen wir gerne mit [Gruender/in] ins Gespraech.

Herzliche Gruesse,
[Name]
[Telefon]`,
    tip: "Historische Vorher/Nachher-Fotos machen die Story visuell spannend und erhoehen die Chance auf eine ausfuehrliche Reportage.",
    successRate: "45-60%",
  },
  {
    id: "press-trend",
    type: "trend",
    title: "Lokaler Branchen-Trend / Studie",
    scenario: "Eigene Daten oder Beobachtungen als Nachricht aufbereiten",
    targetMedia: "Lokalzeitung, Fachpresse, Online-Magazine",
    subject: "[Trend/Erkenntnis]: So veraendert sich [Branche] in [Stadt] – Zahlen von [Unternehmen]",
    body: `Sehr geehrte/r [Name],

als [Berufsbezeichnung] in [Stadt] beobachten wir einen spannenden Trend, der Ihre Leser interessieren koennte:

[Headline der Erkenntnis]:
[Z.B. "Die Nachfrage nach veganen Backwaren in [Stadt] hat sich in 2 Jahren verdreifacht"]

Unsere Zahlen:
• [Datenpunkt 1, z.B. "2023: 5% unseres Umsatzes mit veganen Produkten"]
• [Datenpunkt 2, z.B. "2025: 18% – Tendenz steigend"]
• [Datenpunkt 3, z.B. "Staerkste Nachfrage: [Stadtteil] und [Stadtteil]"]

Was das fuer [Stadt] bedeutet:
"[Einordnung als Experte – 2-3 Saetze]"

Moegliche Story-Winkel:
• Verbraucher-Perspektive: Was aendert sich fuer Kunden in [Stadt]?
• Branchen-Perspektive: Wie reagieren andere [Branche] darauf?
• Politik-Perspektive: Braucht es Foerderung / Regulierung?

Fuer Zahlen, Grafiken oder ein Interview stehe ich gerne zur Verfuegung.

Beste Gruesse,
[Name]
[Unternehmen]
[Telefon]`,
    tip: "Eigene Daten und Zahlen sind Gold wert fuer Journalisten. Selbst kleine Stichproben sind besser als reine Meinungen.",
    successRate: "25-40%",
  },
  {
    id: "press-followup",
    type: "followup",
    title: "Follow-up nach Erstanfrage",
    scenario: "Nachfassen nach 5-7 Tagen ohne Antwort",
    targetMedia: "Alle Medien",
    subject: "Kurze Nachfrage: [Urspruengliches Thema]",
    body: `Hallo [Vorname],

ich hatte Ihnen letzte Woche eine Pressemitteilung zu [Thema kurz beschreiben] geschickt und wollte kurz nachfragen, ob das fuer Sie interessant sein koennte.

Falls das Thema gerade nicht passt – kein Problem. Ich stehe Ihnen aber auch gerne fuer andere Themen als lokaler Ansprechpartner fuer [Branche/Fachgebiet] zur Verfuegung.

Kurze Zusammenfassung:
• [1 Satz: Was ist die Nachricht?]
• [1 Satz: Warum ist das fuer Ihre Leser relevant?]

Falls Sie Fragen haben oder einen anderen Blickwinkel bevorzugen, melden Sie sich gerne.

Beste Gruesse,
[Name]
[Telefon – direkt]`,
    tip: "Halte das Follow-up kurz (max. 5-6 Saetze). Biete einen neuen Blickwinkel an, wiederhole nicht einfach die alte Mail.",
    successRate: "15-25% zusaetzlich",
  },
];

const PressOutreachTemplates = ({
  types,
  title = "Presse-Vorlagen: Lokale PR-Arbeit starten",
  description = "Kopierfertige E-Mail-Vorlagen fuer die lokale Pressearbeit – von Eroeffnungen ueber Charity bis zur Experten-Positionierung.",
}: PressOutreachTemplatesProps) => {
  const [selectedType, setSelectedType] = useState<PressType | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableTypes = types || (Object.keys(typeMeta) as PressType[]);

  const filtered = allPressTemplates.filter((t) => {
    if (!availableTypes.includes(t.type)) return false;
    if (selectedType !== "all" && t.type !== selectedType) return false;
    return true;
  });

  const copyToClipboard = (template: PressTemplate) => {
    const text = `Betreff: ${template.subject}\n\n${template.body}`;
    navigator.clipboard.writeText(text);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Newspaper className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedType("all")}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
            selectedType === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Alle ({allPressTemplates.filter(t => availableTypes.includes(t.type)).length})
        </button>
        {availableTypes.map((type) => {
          const count = allPressTemplates.filter((t) => t.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
                selectedType === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {typeMeta[type].icon}
              {typeMeta[type].label} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {filtered.length} {filtered.length === 1 ? "Vorlage" : "Vorlagen"} gefunden
      </p>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((template) => (
          <Card key={template.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === template.id ? null : template.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={cn("p-1.5 rounded-lg", typeMeta[template.type].color)}>
                    {typeMeta[template.type].icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{template.title}</span>
                      {template.successRate && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Erfolgsrate: {template.successRate}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      Zielmedien: {template.targetMedia}
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

              {expandedId === template.id && (
                <div className="border-t border-border p-4 space-y-4">
                  {/* Scenario */}
                  <div className="text-sm text-muted-foreground">
                    <strong>Anlass:</strong> {template.scenario}
                  </div>

                  {/* Subject */}
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
                          <><Check className="w-3.5 h-3.5" /> Kopiert!</>
                        ) : (
                          <><Copy className="w-3.5 h-3.5" /> Kopieren</>
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
                        <strong>Profi-Tipp:</strong> {template.tip}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Newspaper className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Vorlagen fuer diese Kategorie gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default PressOutreachTemplates;
