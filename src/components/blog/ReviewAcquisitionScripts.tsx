import { useState } from "react";
import { Copy, Check, ChevronDown, MessageSquare, Mail, Phone, QrCode, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type ScriptChannel = "inperson" | "email" | "sms" | "whatsapp" | "qrcode" | "phone";
export type ScriptIndustry = "restaurant" | "handwerker" | "arzt" | "zahnarzt" | "anwalt" | "friseur" | "fitness" | "hotel" | "auto" | "steuerberater" | "general";

export interface AcquisitionScript {
  id: string;
  industry: ScriptIndustry;
  channel: ScriptChannel;
  scenario: string;
  timing: string;
  script: string;
  tip?: string;
}

interface ReviewAcquisitionScriptsProps {
  industries?: ScriptIndustry[];
  channels?: ScriptChannel[];
  title?: string;
  description?: string;
}

const industryLabels: Record<ScriptIndustry, { label: string; icon: string }> = {
  restaurant: { label: "Restaurant / Gastronomie", icon: "\uD83C\uDF7D\uFE0F" },
  handwerker: { label: "Handwerk / Sanitaer", icon: "\uD83D\uDD27" },
  arzt: { label: "Arztpraxis / Gesundheit", icon: "\uD83C\uDFE5" },
  zahnarzt: { label: "Zahnarzt", icon: "\uD83E\uDEB7" },
  anwalt: { label: "Anwalt / Kanzlei", icon: "\u2696\uFE0F" },
  friseur: { label: "Friseur / Beauty", icon: "\u2702\uFE0F" },
  fitness: { label: "Fitness / Yoga", icon: "\uD83C\uDFCB\uFE0F" },
  hotel: { label: "Hotel / Ferienwohnung", icon: "\uD83C\uDFE8" },
  auto: { label: "Autowerkstatt / KFZ", icon: "\uD83D\uDE97" },
  steuerberater: { label: "Steuerberater", icon: "\uD83D\uDCCA" },
  general: { label: "Allgemein", icon: "\uD83C\uDFEA" },
};

const channelMeta: Record<ScriptChannel, { label: string; icon: React.ReactNode; color: string }> = {
  inperson: { label: "Vor Ort", icon: <MessageSquare className="w-3.5 h-3.5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  email: { label: "E-Mail", icon: <Mail className="w-3.5 h-3.5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  sms: { label: "SMS", icon: <Phone className="w-3.5 h-3.5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  whatsapp: { label: "WhatsApp", icon: <MessageSquare className="w-3.5 h-3.5" />, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  qrcode: { label: "QR-Code", icon: <QrCode className="w-3.5 h-3.5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  phone: { label: "Telefonisch", icon: <Phone className="w-3.5 h-3.5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
};

export const allAcquisitionScripts: AcquisitionScript[] = [
  // Restaurant
  {
    id: "rest-inperson",
    industry: "restaurant",
    channel: "inperson",
    scenario: "Nach dem Essen am Tisch",
    timing: "Direkt nach dem Bezahlen",
    script: "Es freut mich, dass es Ihnen geschmeckt hat! Wir wuerden uns riesig ueber eine kurze Google-Bewertung freuen - das hilft anderen Gaesten, uns zu finden. Hier ist ein kleiner QR-Code auf der Rechnung, der Sie direkt dorthin bringt. Dauert nur 30 Sekunden!",
    tip: "QR-Code auf Rechnungsbeilage oder Tischaufsteller platzieren. Zeitpunkt: Nur wenn der Gast sichtbar zufrieden ist.",
  },
  {
    id: "rest-email",
    industry: "restaurant",
    channel: "email",
    scenario: "Follow-up nach Reservierung",
    timing: "24 Stunden nach dem Besuch",
    script: "Liebe/r [Name],\n\nvielen Dank fuer Ihren Besuch bei [Restaurant] gestern Abend! Wir hoffen, [Gericht/Anlass] hat Ihnen gefallen.\n\nWenn Sie einen Moment Zeit haben, wuerden wir uns sehr ueber eine kurze Bewertung freuen:\n[Bewertungslink]\n\nIhr Feedback hilft anderen Gaesten in [Stadt], uns zu entdecken.\n\nBis bald!\n[Name], [Restaurant]",
  },
  {
    id: "rest-sms",
    industry: "restaurant",
    channel: "sms",
    scenario: "SMS nach Online-Bestellung",
    timing: "2 Stunden nach Lieferung",
    script: "Hallo [Name]! Danke fuer Ihre Bestellung bei [Restaurant]. Hat alles geschmeckt? Wir freuen uns ueber Ihr Feedback: [Kurzlink] - Dauert nur 30 Sek. Danke! Ihr [Restaurant]-Team",
    tip: "Nur bei Kunden mit SMS-Einwilligung senden. Kurzlink verwenden (z.B. bit.ly).",
  },

  // Handwerker
  {
    id: "hw-inperson",
    industry: "handwerker",
    channel: "inperson",
    scenario: "Nach Abschluss der Arbeit",
    timing: "Bei der Abnahme/Uebergabe",
    script: "Sind Sie zufrieden mit der Arbeit? Das freut mich! Als kleiner Handwerksbetrieb in [Stadt] sind Google-Bewertungen fuer uns Gold wert. Wenn Sie kurz 2 Minuten Zeit haetten - hier ist ein QR-Code, der Sie direkt zur Bewertung bringt. Das wuerde uns wirklich sehr helfen!",
    tip: "Visitenkarte mit QR-Code hinterlassen. Bester Zeitpunkt: Wenn der Kunde die fertige Arbeit sieht und zufrieden ist.",
  },
  {
    id: "hw-whatsapp",
    industry: "handwerker",
    channel: "whatsapp",
    scenario: "WhatsApp-Nachricht nach Auftrag",
    timing: "1-2 Tage nach Fertigstellung",
    script: "Hallo [Name], hier ist [Vorname] von [Firma]. Ich hoffe, mit [Arbeit, z.B. der neuen Heizung] ist alles in Ordnung! Falls Sie zufrieden sind, wuerde uns eine kurze Google-Bewertung sehr helfen. Hier ist der direkte Link: [Link]. Vielen Dank und bei Fragen melden Sie sich jederzeit!",
  },
  {
    id: "hw-email",
    industry: "handwerker",
    channel: "email",
    scenario: "E-Mail mit Rechnung",
    timing: "Mit der Rechnungsstellung",
    script: "Sehr geehrte/r [Name],\n\nim Anhang finden Sie die Rechnung fuer [Arbeit].\n\nWir hoffen, Sie sind mit unserer Arbeit zufrieden. Als lokaler Betrieb in [Stadt] freuen wir uns ueber jede Bewertung, die anderen Kunden bei der Entscheidung hilft:\n\n[Bewertungslink]\n\nBei Fragen stehen wir Ihnen jederzeit zur Verfuegung.\n\nMit freundlichen Gruessen\n[Name], [Firma]",
    tip: "Bewertungslink in die Rechnungs-E-Mail integrieren - wird fast immer geoeffnet.",
  },

  // Arzt
  {
    id: "arzt-inperson",
    industry: "arzt",
    channel: "inperson",
    scenario: "Am Empfang nach Behandlung",
    timing: "Beim Verlassen der Praxis",
    script: "Schoen, dass alles gut gelaufen ist! Wenn Sie mit Ihrem Besuch bei uns zufrieden waren, wuerden wir uns ueber eine Google-Bewertung sehr freuen. Hier am Empfang haben wir einen QR-Code - das geht ganz schnell. Natuerlich nur, wenn Sie moechten!",
    tip: "DSGVO beachten: Nie nach spezifischen Behandlungsdetails in der Bewertung fragen. Karte mit QR-Code am Empfang auslegen.",
  },
  {
    id: "arzt-email",
    industry: "arzt",
    channel: "email",
    scenario: "Terminerinnerungs-Follow-up",
    timing: "48 Stunden nach dem Termin",
    script: "Sehr geehrte/r [Name],\n\nvielen Dank fuer Ihren Besuch in unserer Praxis. Wir hoffen, Sie waren zufrieden.\n\nIhre Meinung hilft anderen Patienten in [Stadt], den richtigen Arzt zu finden. Wenn Sie einen Moment Zeit haben:\n[Bewertungslink]\n\nHerzliche Gruesse\nIhr Praxisteam [Praxisname]",
    tip: "Keine medizinischen Details erwaehnen. Allgemeine Zufriedenheit abfragen, nicht Behandlungsergebnisse.",
  },

  // Zahnarzt
  {
    id: "zahn-inperson",
    industry: "zahnarzt",
    channel: "inperson",
    scenario: "Nach erfolgreicher Behandlung",
    timing: "Am Empfang beim Checkout",
    script: "Alles bestens verlaufen! Wenn Sie zufrieden waren, hilft uns eine kurze Google-Bewertung sehr - viele neue Patienten suchen online nach einem guten Zahnarzt in [Stadt]. Hier ist unser QR-Code, dauert nur eine Minute!",
  },
  {
    id: "zahn-sms",
    industry: "zahnarzt",
    channel: "sms",
    scenario: "SMS nach Prophylaxe-Termin",
    timing: "Am selben Abend",
    script: "Hallo [Name], danke fuer Ihren Besuch bei [Praxis] heute! Sind Sie zufrieden? Eine kurze Bewertung hilft uns sehr: [Link]. Ihr naechster Termin: [Datum]. Herzliche Gruesse!",
    tip: "Prophylaxe-Termine eignen sich besonders gut - Patienten sind entspannt und zufrieden.",
  },

  // Anwalt
  {
    id: "anw-email",
    industry: "anwalt",
    channel: "email",
    scenario: "Nach erfolgreichem Mandatsabschluss",
    timing: "1 Woche nach Abschluss",
    script: "Sehr geehrte/r [Name],\n\nwir freuen uns, dass wir Ihr Anliegen erfolgreich bearbeiten konnten.\n\nWenn Sie mit unserer Beratung zufrieden waren, wuerden wir uns ueber eine Bewertung auf Google freuen. Selbstverstaendlich muessen Sie keine Details Ihres Falls erwaehnen - eine allgemeine Einschaetzung unserer Kanzlei genuegt voellig:\n\n[Bewertungslink]\n\nVielen Dank fuer Ihr Vertrauen.\n\nMit freundlichen Gruessen\n[Name], Rechtsanwalt\n[Kanzlei]",
    tip: "Schweigepflicht beachten: Explizit darauf hinweisen, dass keine Falldetails noetig sind. Nur bei positiv abgeschlossenen Mandaten anfragen.",
  },
  {
    id: "anw-phone",
    industry: "anwalt",
    channel: "phone",
    scenario: "Telefonisches Follow-up",
    timing: "Bei Abschlussgespraech",
    script: "Herr/Frau [Name], es hat mich gefreut, Sie in dieser Sache beraten zu duerfen. Wenn Sie zufrieden waren, darf ich Sie um einen kleinen Gefallen bitten? Eine Google-Bewertung unserer Kanzlei wuerde uns sehr helfen. Sie muessen natuerlich keine Details nennen - ein allgemeiner Eindruck reicht voellig. Ich schicke Ihnen den Link gerne per E-Mail.",
  },

  // Friseur
  {
    id: "fris-inperson",
    industry: "friseur",
    channel: "inperson",
    scenario: "Nach dem Styling",
    timing: "An der Kasse",
    script: "Und, zufrieden mit dem neuen Look? Das freut mich! Wenn Sie Lust haben, schreiben Sie uns doch eine kurze Bewertung auf Google - das hilft uns als Salon in [Stadt] wirklich sehr. Hier auf dem Spiegel ist ein QR-Code, geht ganz fix!",
    tip: "QR-Code auf Spiegel-Aufkleber oder Kassenbereich. Kunden koennen waehrend der Wartezeit auf den naechsten Kunden bewerten.",
  },
  {
    id: "fris-whatsapp",
    industry: "friseur",
    channel: "whatsapp",
    scenario: "Follow-up nach Termin",
    timing: "Am naechsten Tag",
    script: "Hey [Name]! Hoffe, du bist immer noch happy mit deiner neuen Frisur! Falls ja, wuerde uns eine kurze Google-Bewertung mega freuen: [Link]. Danke dir! Dein [Salon]-Team",
  },

  // Fitness
  {
    id: "fit-email",
    industry: "fitness",
    channel: "email",
    scenario: "Nach Probetraining / Ersttermin",
    timing: "24 Stunden nach Probetraining",
    script: "Hallo [Name],\n\ntoll, dass du gestern bei uns trainiert hast! Wie war dein erstes Training bei [Studio]?\n\nWenn es dir gefallen hat, hilft uns eine kurze Google-Bewertung, noch mehr Sportbegeisterte in [Stadt] zu erreichen:\n[Bewertungslink]\n\nSportliche Gruesse\nDein [Studio]-Team",
    tip: "Probetrainings-Teilnehmer haben hohe Conversion: Sie sind motiviert und haben frische Eindruecke.",
  },
  {
    id: "fit-inperson",
    industry: "fitness",
    channel: "inperson",
    scenario: "Nach Meilenstein (z.B. 50. Training)",
    timing: "Bei persoenlicher Gratulation",
    script: "Glueckwunsch zu deinem 50. Training bei uns! Das ist eine tolle Leistung. Hey, du bist ja schon richtig dabei - wenn du eine Minute hast, wuerde uns eine Bewertung auf Google total helfen. Unsere App hat einen direkten Link dazu!",
  },

  // Hotel
  {
    id: "hotel-email",
    industry: "hotel",
    channel: "email",
    scenario: "Check-out Follow-up",
    timing: "Am Tag nach Abreise",
    script: "Liebe/r [Name],\n\nvielen Dank fuer Ihren Aufenthalt im [Hotel] in [Stadt]! Wir hoffen, Sie hatten eine wunderbare Zeit.\n\nIhr Feedback hilft uns und anderen Reisenden. Wenn Sie einen Moment Zeit haben:\n[Bewertungslink]\n\nWir freuen uns, Sie bald wieder begruessen zu duerfen!\n\nHerzliche Gruesse\n[Hotel]-Team",
  },
  {
    id: "hotel-inperson",
    industry: "hotel",
    channel: "inperson",
    scenario: "Beim Check-out an der Rezeption",
    timing: "Waehrend des Auscheckvorgangs",
    script: "Wir hoffen, Sie hatten einen angenehmen Aufenthalt! Wenn es Ihnen bei uns gefallen hat, wuerden wir uns ueber eine Bewertung auf Google sehr freuen - hier auf unserer Karte ist der direkte Link. Das hilft anderen Reisenden, uns in [Stadt] zu finden!",
  },

  // Autowerkstatt
  {
    id: "auto-inperson",
    industry: "auto",
    channel: "inperson",
    scenario: "Bei Fahrzeugabholung",
    timing: "Wenn der Kunde das Auto abholt",
    script: "So, Ihr [Auto] ist wieder fit! Alles erledigt wie besprochen. Wenn Sie zufrieden sind - wir als Werkstatt in [Stadt] freuen uns ueber jede Google-Bewertung. Hier auf der Rechnung ist ein QR-Code. Wuerde uns sehr helfen!",
  },
  {
    id: "auto-sms",
    industry: "auto",
    channel: "sms",
    scenario: "SMS nach Reparatur",
    timing: "2 Tage nach Abholung",
    script: "Hallo [Name], laeuft Ihr [Auto] wieder einwandfrei? Wir hoffen, alles ist bestens! Eine kurze Google-Bewertung wuerde uns helfen: [Link]. Danke! [Werkstatt] [Stadt]",
  },

  // Steuerberater
  {
    id: "stb-email",
    industry: "steuerberater",
    channel: "email",
    scenario: "Nach Steuererklaerung / Jahresabschluss",
    timing: "1 Woche nach Zustellung des Bescheids",
    script: "Sehr geehrte/r [Name],\n\nIhr Steuerbescheid ist eingetroffen und wir freuen uns, dass wir ein gutes Ergebnis fuer Sie erzielen konnten.\n\nWenn Sie mit unserer Beratung zufrieden sind, wuerden wir uns ueber eine Google-Bewertung freuen. Das hilft anderen Mandanten in [Stadt], den passenden Steuerberater zu finden:\n\n[Bewertungslink]\n\nVielen Dank fuer Ihr Vertrauen.\n\nMit freundlichen Gruessen\n[Name], Steuerberater\n[Kanzlei]",
    tip: "Idealer Zeitpunkt: Wenn der Bescheid positiv ausgefallen ist (Erstattung). Dann ist die Zufriedenheit am hoechsten.",
  },

  // General
  {
    id: "gen-qrcode",
    industry: "general",
    channel: "qrcode",
    scenario: "QR-Code Aufsteller / Aufkleber",
    timing: "Dauerhaft sichtbar",
    script: "[QR-Code-Design-Vorlage]\n\nUeberschrift: Wie war Ihr Besuch?\nText: Scannen Sie den QR-Code und teilen Sie Ihre Erfahrung mit [Firmenname].\nUntertitel: Dauert nur 30 Sekunden - hilft uns sehr!\n\n[QR-Code zum Google-Bewertungslink]\n\nPlatzierung: Kassenbereich, Eingang, Wartezimmer, Tische, Tresen",
    tip: "QR-Code-Groesse: Mindestens 3x3 cm. Testen Sie den Code vor dem Drucken. Verwenden Sie einen URL-Shortener fuer Tracking.",
  },
  {
    id: "gen-email-signature",
    industry: "general",
    channel: "email",
    scenario: "E-Mail-Signatur Ergaenzung",
    timing: "Dauerhaft in jeder E-Mail",
    script: "---\n[Name] | [Position]\n[Firmenname] | [Stadt]\nTel: [Nummer] | [Website]\n\nZufrieden mit unserem Service? Wir freuen uns ueber Ihr Feedback:\n[Bewertungslink-als-Button oder Sterne-Grafik]",
    tip: "Subtil aber effektiv: Jede E-Mail wird zur passiven Bewertungs-Aufforderung.",
  },
];

const ReviewAcquisitionScripts: React.FC<ReviewAcquisitionScriptsProps> = ({
  industries,
  channels,
  title = "Bewertungs-Scripts nach Branche & Kanal",
  description = "Kopierfertige Texte fuer die Bewertungs-Akquise. Waehle deine Branche, passe [Platzhalter] an und nutze sie sofort.",
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<ScriptIndustry | "all">("all");
  const [activeChannel, setActiveChannel] = useState<ScriptChannel | "all">("all");

  let scripts = allAcquisitionScripts;
  if (industries) scripts = scripts.filter((s) => industries.includes(s.industry));
  if (channels) scripts = scripts.filter((s) => channels.includes(s.channel));
  if (activeIndustry !== "all") scripts = scripts.filter((s) => s.industry === activeIndustry);
  if (activeChannel !== "all") scripts = scripts.filter((s) => s.channel === activeChannel);

  const availableIndustries = industries || [...new Set(allAcquisitionScripts.map((s) => s.industry))];
  const availableChannels = channels || [...new Set(allAcquisitionScripts.map((s) => s.channel))];

  const copyScript = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="my-10 not-prose" data-ai-summary="review-acquisition-scripts">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>

      {/* Industry filter */}
      <div className="mb-3">
        <span className="text-xs font-medium text-muted-foreground mb-2 block">Branche:</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveIndustry("all")}
            className={cn(
              "px-3 py-1.5 text-xs rounded-full font-medium border transition-all",
              activeIndustry === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/30"
            )}
          >
            Alle
          </button>
          {availableIndustries.map((ind) => {
            const meta = industryLabels[ind];
            return (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full font-medium border transition-all",
                  activeIndustry === ind
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30"
                )}
              >
                {meta.icon} {meta.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Channel filter */}
      <div className="mb-6">
        <span className="text-xs font-medium text-muted-foreground mb-2 block">Kanal:</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveChannel("all")}
            className={cn(
              "px-3 py-1.5 text-xs rounded-full font-medium border transition-all",
              activeChannel === "all"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/30"
            )}
          >
            Alle
          </button>
          {availableChannels.map((ch) => {
            const meta = channelMeta[ch];
            return (
              <button
                key={ch}
                onClick={() => setActiveChannel(ch)}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full font-medium border transition-all flex items-center gap-1",
                  activeChannel === ch
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30"
                )}
              >
                {meta.icon} {meta.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Script cards */}
      <div className="space-y-3">
        {scripts.map((script) => {
          const indMeta = industryLabels[script.industry];
          const chMeta = channelMeta[script.channel];
          const isExpanded = expandedId === script.id;
          const isCopied = copiedId === script.id;

          return (
            <Card key={script.id} className="overflow-hidden border-border hover:border-primary/20 transition-all">
              <button
                onClick={() => setExpandedId(isExpanded ? null : script.id)}
                className="w-full p-4 flex items-center gap-3 text-left"
              >
                <span className="text-lg flex-shrink-0">{indMeta.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-foreground">{script.scenario}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {script.timing}
                  </div>
                </div>
                <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 flex items-center gap-1", chMeta.color)}>
                  {chMeta.icon} {chMeta.label}
                </span>
                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform flex-shrink-0", isExpanded && "rotate-180")} />
              </button>

              {isExpanded && (
                <CardContent className="pt-0 px-4 pb-4">
                  <div className="bg-muted/50 rounded-lg p-4 relative group">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                      {script.script}
                    </pre>
                    <button
                      onClick={() => copyScript(script.id, script.script)}
                      className={cn(
                        "absolute top-2 right-2 p-2 rounded-lg border transition-all",
                        isCopied
                          ? "bg-green-100 border-green-300 text-green-700"
                          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                      )}
                      title="Script kopieren"
                    >
                      {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {script.tip && (
                    <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <MessageSquare className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{script.tip}</span>
                    </div>
                  )}

                  <p className="mt-2 text-xs text-muted-foreground">
                    Ersetze alle <code className="bg-muted px-1 rounded text-primary">[Platzhalter]</code> mit deinen echten Daten.
                  </p>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {scripts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground text-sm">
          Keine Scripts fuer diese Kombination gefunden.
        </div>
      )}

      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border text-xs text-muted-foreground">
        <strong className="text-foreground">Wichtig:</strong> Biete niemals Gegenleistungen fuer Bewertungen an (Rabatte, Geschenke). Das verstoesst gegen Googles Richtlinien. Frage nur zufriedene Kunden und respektiere, wenn jemand ablehnt.
      </div>
    </div>
  );
};

export default ReviewAcquisitionScripts;
