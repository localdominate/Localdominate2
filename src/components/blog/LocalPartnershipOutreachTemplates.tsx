import { useState } from "react";
import { Copy, Check, Mail, ChevronDown, Sparkles, Handshake, Store, Calendar, Gift, Users, Megaphone, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type PartnershipType = "cross-promo" | "joint-event" | "referral" | "bundle" | "influencer" | "charity" | "coworking";

export interface PartnershipTemplate {
  id: string;
  type: PartnershipType;
  title: string;
  scenario: string;
  targetPartner: string;
  subject: string;
  body: string;
  tip?: string;
  benefit?: string;
}

interface LocalPartnershipOutreachTemplatesProps {
  types?: PartnershipType[];
  title?: string;
  description?: string;
}

const typeMeta: Record<PartnershipType, { label: string; icon: React.ReactNode; color: string }> = {
  "cross-promo": { label: "Cross-Promotion", icon: <Handshake className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  "joint-event": { label: "Gemeinsame Events", icon: <Calendar className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  "referral": { label: "Empfehlungs-Netzwerk", icon: <Users className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  "bundle": { label: "Paket-Angebote", icon: <Gift className="w-4 h-4" />, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  "influencer": { label: "Lokale Influencer", icon: <Megaphone className="w-4 h-4" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  "charity": { label: "Soziales Engagement", icon: <Building2 className="w-4 h-4" />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  "coworking": { label: "Flaechen-Kooperation", icon: <Store className="w-4 h-4" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
};

export const allPartnershipTemplates: PartnershipTemplate[] = [
  // Cross-Promo
  {
    id: "cross-flyer",
    type: "cross-promo",
    title: "Flyer-Austausch & Auslage",
    scenario: "Komplementaeres Geschaeft in der Nachbarschaft",
    targetPartner: "Benachbartes Geschaeft mit aehnlicher Zielgruppe",
    subject: "Nachbarschafts-Idee: Gegenseitige Kunden-Empfehlung",
    body: `Hallo [Name],

ich bin [Dein Name] von [Dein Unternehmen] – wir sind ja praktisch Nachbarn in [Strasse/Stadtteil]!

Ich habe eine Idee, von der wir beide profitieren koennten: Wir legen gegenseitig Flyer/Visitenkarten aus und empfehlen uns bei passenden Kundenanfragen.

Konkret:
• Ihre Flyer/Karten bei uns an der Theke/Empfang
• Unsere Flyer/Karten bei Ihnen
• Optional: Gemeinsamer Rabatt-Gutschein fuer Neukunden (z.B. 10% bei Vorlage)

Unsere Kunden fragen regelmaessig nach [deren Dienstleistung] – und ich wuerde sie gerne zu Ihnen schicken.

Haetten Sie Lust auf einen kurzen Austausch? Gerne auf einen Kaffee bei Ihnen oder bei uns!

Herzliche Gruesse,
[Dein Name]
[Dein Unternehmen]
[Telefon]`,
    tip: "Persoenlich vorbeigehen ist 5x effektiver als eine E-Mail. Bringe gleich ein paar deiner Flyer mit.",
    benefit: "Kosten: 0€ – Wirkung: Gegenseitiger Kundenstrom + lokale Sichtbarkeit",
  },
  {
    id: "cross-social",
    type: "cross-promo",
    title: "Social-Media Cross-Promotion",
    scenario: "Gemeinsame Instagram/Facebook-Aktion",
    targetPartner: "Lokales Unternehmen mit aktiver Social-Media-Praesenz",
    subject: "Social-Media-Kooperation: Gemeinsam mehr Reichweite in [Stadt]",
    body: `Hallo [Name],

ich folge [Unternehmen] schon laenger auf Instagram/Facebook und finde Ihren Content richtig gut – besonders [konkretes Lob].

Ich haette eine Idee fuer eine gemeinsame Social-Media-Aktion:

Option A: Gegenseitiges Feature
• Wir stellen Sie in unserer Story/Post als "Lieblings-[Branche] in [Stadt]" vor
• Sie machen das Gleiche fuer uns
• Beide taggen sich gegenseitig

Option B: Gemeinsames Gewinnspiel
• Gemeinsamer Preis (z.B. Gutschein von Ihnen + Gutschein von uns)
• Teilnahmebedingung: Beiden Accounts folgen
• Laufzeit: 1 Woche

Unsere Reichweite: [X] Follower, vorwiegend aus [Stadt/Region].

Was halten Sie davon?

Beste Gruesse,
[Dein Name]`,
    tip: "Gemeinsame Gewinnspiele bringen im Schnitt 20-40% neue Follower fuer beide Partner.",
    benefit: "+20-40% lokale Follower + gegenseitige Empfehlung",
  },

  // Joint Events
  {
    id: "event-popup",
    type: "joint-event",
    title: "Pop-up-Event / After-Work",
    scenario: "Gemeinsames Event im eigenen oder Partner-Laden",
    targetPartner: "Komplementaeres Unternehmen mit Laufkundschaft",
    subject: "Gemeinsames Event in [Stadt]: [Eventname]-Idee",
    body: `Hallo [Name],

wie waere es, wenn wir gemeinsam ein kleines Event auf die Beine stellen? Ich denke an:

"[Eventname]" – z.B. After-Work, Tasting, Workshop, Open House

Datum: [Vorschlag, z.B. Freitagabend im naechsten Monat]
Location: [Ihr Laden / unser Laden / neutraler Ort]

Was wir einbringen:
• [Konkreter Beitrag: Produkt, Service, Expertise, Catering]
• Bewerbung an unsere [X] Kunden/Newsletter-Abonnenten/Follower
• Gemeinsame Pressemitteilung an lokale Medien

Was ich mir von Ihnen wuenschen wuerde:
• [Z.B. Location, Expertise, Getraenke, Dekoration]
• Bewerbung an Ihre Kontakte

Budget-Vorstellung: [Geteilte Kosten / jeder traegt seinen Teil]

Soll ich einen konkreteren Plan ausarbeiten?

Herzliche Gruesse,
[Dein Name]
[Telefon]`,
    tip: "Events mit 30-50 Gaesten sind ideal fuer lokale Unternehmen – gross genug fuer Wirkung, klein genug fuer persoenlichen Kontakt.",
    benefit: "Lokale Presse-Erwaehnung + neue Kontakte + Google-Post-Content",
  },
  {
    id: "event-workshop",
    type: "joint-event",
    title: "Gemeinsamer Workshop / Kurs",
    scenario: "Wissenstransfer fuer gemeinsame Zielgruppe",
    targetPartner: "Experte aus komplementaerem Fachgebiet",
    subject: "Workshop-Idee: [Thema] fuer [Zielgruppe] in [Stadt]",
    body: `Hallo [Name],

ich bin beeindruckt von Ihrer Expertise in [Fachgebiet] – und habe eine Idee:

Was halten Sie von einem gemeinsamen Workshop fuer [Zielgruppe]?

Thema: "[Konkreter Workshop-Titel]"
Format: [2-3 Stunden / Halbtag / Abendveranstaltung]
Teilnehmer: Max. [20-30] Personen

Aufteilung:
• Ihr Part: [Konkretes Thema, z.B. 45 Min.]
• Mein Part: [Konkretes Thema, z.B. 45 Min.]
• Gemeinsame Q&A-Runde

Einnahmen-Modell:
• Teilnahmegebuehr: [X]€ pro Person (50/50 Aufteilung)
• ODER: Kostenlos als Lead-Magnet (Teilnehmer werden zu Kunden)

Ich kuemmere mich gerne um Eventbrite-Seite + Bewerbung.

Interesse?
[Dein Name]`,
    tip: "Kostenlose Workshops generieren mehr Leads, bezahlte Workshops bessere Lead-Qualitaet. Teste beides.",
    benefit: "Positionierung als Experte + warme Leads + Content fuer Blog/Social Media",
  },

  // Referral
  {
    id: "referral-formal",
    type: "referral",
    title: "Formelles Empfehlungs-Abkommen",
    scenario: "Strukturiertes Weiterempfehlungs-Programm",
    targetPartner: "Dienstleister mit komplementaerem Angebot",
    subject: "Empfehlungs-Partnerschaft: Gemeinsam wachsen in [Stadt]",
    body: `Hallo [Name],

unsere Kunden fragen uns regelmaessig nach [deren Dienstleistung], und ich bin ueberzeugt, dass [Ihr Unternehmen] die beste Empfehlung in [Stadt] waere.

Deshalb moechte ich eine formelle Empfehlungs-Partnerschaft vorschlagen:

So stelle ich mir das vor:
1. Wir empfehlen Sie aktiv an unsere Kunden (ca. [X] Anfragen/Monat)
2. Sie empfehlen uns bei passenden Anfragen
3. Optional: Kleine Vermittlungsprovision ([X]€ oder [X]% pro Abschluss)

Was wir garantieren:
• Nur qualifizierte Empfehlungen (keine kalten Leads)
• Kurze Info-Mail an Sie bei jeder Empfehlung
• Monatliches Update zur Anzahl der Vermittlungen

Vorteile fuer Sie:
• Warme, vorab gefilterte Kundenanfragen
• Null Marketing-Kosten fuer diese Leads
• Staerkung Ihres lokalen Netzwerks

Haetten Sie naechste Woche Zeit fuer ein kurzes Gespraech?

Mit freundlichen Gruessen,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Starte mit 2-3 Testempfehlungen ohne formelles Abkommen. Wenn es funktioniert, formalisiere die Partnerschaft.",
    benefit: "Kostenloses Lead-Netzwerk + hohe Conversion (warme Empfehlungen konvertieren 4x besser)",
  },
  {
    id: "referral-network",
    type: "referral",
    title: "Lokales Empfehlungs-Netzwerk gruenden",
    scenario: "Mehrere lokale Unternehmen vernetzen",
    targetPartner: "5-10 nicht-konkurrierende lokale Unternehmen",
    subject: "Einladung: Lokales Empfehlungs-Netzwerk [Stadt/Stadtteil]",
    body: `Hallo [Name],

ich gruende ein lokales Empfehlungs-Netzwerk fuer Unternehmen in [Stadt/Stadtteil] – und moechte Sie gerne dabei haben.

Die Idee:
• 5-10 nicht-konkurrierende Unternehmen aus verschiedenen Branchen
• Regelmaessige Treffen (1x/Monat, 1 Stunde, z.B. Fruehstueck)
• Gegenseitige Kunden-Empfehlungen
• Gemeinsame Marketing-Aktionen (Stadtfest, Weihnachtsmarkt, etc.)

Bisherige Teilnehmer:
• [Unternehmen 1] – [Branche]
• [Unternehmen 2] – [Branche]
• [Dein Unternehmen] – [Deine Branche]

Erstes Treffen: [Datum], [Uhrzeit], [Location]
Thema: Gegenseitiges Vorstellen + erste Empfehlungs-Ideen

Kosten: Keine (jeder zahlt sein Fruehstueck 😄)

Sind Sie dabei?

Herzliche Gruesse,
[Dein Name]
[Telefon]`,
    tip: "BNI-aehnliche Netzwerke funktionieren am besten mit exakt einer Person pro Branche. Halte die Gruppe klein (5-10).",
    benefit: "Nachhaltiges Empfehlungs-System + lokale Sichtbarkeit + gemeinsame Aktionen",
  },

  // Bundle
  {
    id: "bundle-product",
    type: "bundle",
    title: "Gemeinsames Produkt-/Service-Paket",
    scenario: "Bundle-Angebot mit komplementaerem Anbieter",
    targetPartner: "Anbieter, dessen Service deinen ergaenzt",
    subject: "Paket-Idee: [Dein Service] + [Ihr Service] = Mehr Wert fuer Kunden",
    body: `Hallo [Name],

ich habe eine Idee, die unseren Kunden echten Mehrwert bieten wuerde:

Ein gemeinsames Paket-Angebot:
"[Paketname]" – [Ihr Service] + [Unser Service] zum Vorteilspreis

Beispiel:
• [Ihr Beitrag]: [Konkreter Service/Produkt, Wert: X€]
• [Unser Beitrag]: [Konkreter Service/Produkt, Wert: Y€]
• Paketpreis: [Z€ statt X+Y€]

Vermarktung:
• Beide bewerben das Paket an ihre Kunden
• Gemeinsame Landingpage auf beiden Websites
• Social-Media-Kampagne mit gemeinsamem Branding

Einnahmen: [50/50 oder nach Wertanteil aufgeteilt]

Der Clou: Kunden bekommen mehr Wert, und wir beide erreichen die Kundenbasis des anderen – ohne Werbekosten.

Sollen wir das mal durchrechnen?

Beste Gruesse,
[Dein Name]`,
    tip: "Bundle-Angebote funktionieren besonders gut saisonal (Weihnachten, Valentinstag, Muttertag).",
    benefit: "Zugang zur Partner-Kundenbasis + hoeherer Warenkorbwert + gemeinsame Marketing-Reichweite",
  },

  // Influencer
  {
    id: "influencer-micro",
    type: "influencer",
    title: "Mikro-Influencer Kooperation",
    scenario: "Lokalen Influencer fuer Promotion einladen",
    targetPartner: "Influencer mit 1.000-10.000 lokalen Followern",
    subject: "Einladung: [Erlebnis/Produkt] bei [Dein Unternehmen] in [Stadt]",
    body: `Hallo [Name],

ich verfolge Ihren Content auf [Plattform] und finde besonders [konkreten Post/Story loben] grossartig. Ihre Empfehlungen fuer [Stadt] sind genau das, was unsere Zielgruppe sucht.

Wir wuerden Sie gerne zu [Erlebnis/Produkt] in unser [Geschaeft/Restaurant/Studio] einladen:

Was wir anbieten:
• [Konkretes Angebot: Kostenloses Essen, Treatment, Service etc.]
• [Ggf. Begleitung fuer +1 Person]
• [Ggf. Goody-Bag oder Geschenk]

Was wir uns wuenschen (kein Muss):
• 1 Instagram-Post oder Story ueber Ihre Erfahrung
• Verlinkung von @[Dein Account] und Standort-Tag
• Ehrliche, authentische Meinung (keine Werbesprache)

Wir freuen uns auf Sie – gerne an einem Termin Ihrer Wahl!

Herzliche Gruesse,
[Dein Name]
[Dein Unternehmen]
[Instagram: @deinaccount]`,
    tip: "Mikro-Influencer mit 1-5K lokalen Followern haben hoehere Engagement-Raten und sind oft dankbarer als grosse Accounts.",
    benefit: "Lokale Reichweite + authentischer Content + Social Proof + potentielle Backlinks",
  },

  // Charity
  {
    id: "charity-partnership",
    type: "charity",
    title: "Gemeinsame Charity-Aktion",
    scenario: "Soziales Engagement mit lokaler Organisation",
    targetPartner: "Gemeinnuetzige Organisation oder Verein",
    subject: "Partnerschaft: [Dein Unternehmen] moechte [Organisation] unterstuetzen",
    body: `Hallo [Name],

als lokales Unternehmen in [Stadt] liegt uns die Gemeinschaft am Herzen. Die Arbeit von [Organisation] fuer [Ziel/Mission] beeindruckt uns sehr.

Wir moechten eine Partnerschaft vorschlagen:

Unsere Idee:
• Spendenaktion: [X]% unseres Umsatzes an [Aktionstag/Woche] geht an [Organisation]
• Alternativ: Fuer jeden [Kauf/Termin/Neuanmeldung] spenden wir [X]€
• Gemeinsame Bewerbung der Aktion

Was wir einbringen:
• [Konkreter Betrag oder Leistung]
• Bewerbung an unsere [X] Kunden + Social Media
• Platz in unserem Geschaeft fuer Ihre Infomaterialien

Was wir uns wuenschen:
• Erwaehnung als Partner auf Ihrer Website/Newsletter
• Gemeinsame Pressemitteilung
• Logo-Nutzung: "Offizieller Partner von [Organisation]"

Wann passt Ihnen ein kurzes Gespraech?

Herzliche Gruesse,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Charity-Partnerschaften generieren natuerliche Presse-Erwaehnung und Backlinks – plus echtes Community-Engagement.",
    benefit: "Positives Image + Presse-Coverage + Backlinks + echte Community-Wirkung",
  },

  // Coworking / Space
  {
    id: "coworking-popup",
    type: "coworking",
    title: "Pop-up-Shop / Flaechen-Kooperation",
    scenario: "Gemeinsame Nutzung von Geschaeftsflaeche",
    targetPartner: "Geschaeft mit ungenutzter Flaeche oder komplementaerem Angebot",
    subject: "Pop-up-Idee: [Dein Angebot] in Ihrem [Geschaeft]",
    body: `Hallo [Name],

ich habe eine ungewoehnliche Idee: Was halten Sie von einem Pop-up-Konzept in Ihrem [Geschaeft]?

Die Idee:
• Wir stellen [unser Produkt/Service] an [X] Tagen pro Woche in Ihrem Laden vor
• Ihre Kunden bekommen ein erweitertes Erlebnis
• Wir bringen zusaetzliche Laufkundschaft mit

Konkret:
• Flaeche: [Beschreibung, z.B. "kleiner Tisch/Ecke, ca. 2qm"]
• Zeitraum: [Testphase 4 Wochen, dann Evaluation]
• Tage: [Z.B. Freitag + Samstag]

Kosten-Modell:
• Option A: Umsatzbeteiligung [X]%
• Option B: Feste Monatsmiete [X]€
• Option C: Tauschgeschaeft (wir bieten [Gegenleistung])

Ich wuerde gerne vorbeikommen und die Moeglichkeiten anschauen.

Beste Gruesse,
[Dein Name]
[Telefon]`,
    tip: "Pop-ups sind perfekt, um neue Standorte/Zielgruppen zu testen – bei minimalem Risiko fuer beide Seiten.",
    benefit: "Neue Laufkundschaft + Standort-Test + geteilte Kosten + gegenseitige Kundenerweiterung",
  },
];

const LocalPartnershipOutreachTemplates = ({
  types,
  title = "Partnerschafts-Vorlagen: Lokale Kooperationen starten",
  description = "Kopierfertige E-Mail-Vorlagen fuer lokale Business-Partnerschaften – von Cross-Promotion ueber gemeinsame Events bis zu Empfehlungs-Netzwerken.",
}: LocalPartnershipOutreachTemplatesProps) => {
  const [selectedType, setSelectedType] = useState<PartnershipType | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableTypes = types || (Object.keys(typeMeta) as PartnershipType[]);

  const filtered = allPartnershipTemplates.filter((t) => {
    if (!availableTypes.includes(t.type)) return false;
    if (selectedType !== "all" && t.type !== selectedType) return false;
    return true;
  });

  const copyToClipboard = (template: PartnershipTemplate) => {
    const text = `Betreff: ${template.subject}\n\n${template.body}`;
    navigator.clipboard.writeText(text);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Handshake className="w-6 h-6 text-primary" />
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
          Alle ({allPartnershipTemplates.filter(t => availableTypes.includes(t.type)).length})
        </button>
        {availableTypes.map((type) => {
          const count = allPartnershipTemplates.filter((t) => t.type === type).length;
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
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      Zielpartner: {template.targetPartner}
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

                  {/* Benefit */}
                  {template.benefit && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-foreground">
                        <strong>Nutzen:</strong> {template.benefit}
                      </p>
                    </div>
                  )}

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
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Handshake className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Vorlagen fuer diese Kategorie gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default LocalPartnershipOutreachTemplates;
