import { useState } from "react";
import { Copy, Check, Mail, ChevronDown, Sparkles, Building2, Newspaper, Users, Heart, GraduationCap, Handshake, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type OutreachCategory = "partnership" | "sponsoring" | "press" | "unlinked" | "event" | "institution" | "guest-post" | "resource";

export interface OutreachTemplate {
  id: string;
  category: OutreachCategory;
  title: string;
  scenario: string;
  subject: string;
  body: string;
  tip?: string;
  successRate?: string;
  followUpDays?: number;
}

interface LinkBuildingOutreachTemplatesProps {
  categories?: OutreachCategory[];
  title?: string;
  description?: string;
}

const categoryMeta: Record<OutreachCategory, { label: string; icon: React.ReactNode; color: string }> = {
  partnership: { label: "Partnerschaften", icon: <Handshake className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  sponsoring: { label: "Sponsoring", icon: <Heart className="w-4 h-4" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  press: { label: "Pressearbeit", icon: <Newspaper className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  unlinked: { label: "Unlinked Mentions", icon: <Link2 className="w-4 h-4" />, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  event: { label: "Events & Community", icon: <Users className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  institution: { label: "IHK & Verbaende", icon: <Building2 className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  "guest-post": { label: "Gastbeitraege", icon: <GraduationCap className="w-4 h-4" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  resource: { label: "Resource Pages", icon: <Sparkles className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
};

export const allOutreachTemplates: OutreachTemplate[] = [
  // Partnership
  {
    id: "partner-cross-promo",
    category: "partnership",
    title: "Gegenseitige Verlinkung / Cross-Promotion",
    scenario: "Komplementaeres lokales Unternehmen ansprechen",
    subject: "Kooperations-Idee: [Dein Unternehmen] x [Ihr Unternehmen]",
    body: `Hallo [Name],

ich bin [Dein Name] von [Dein Unternehmen] in [Stadt/Stadtteil]. Wir sind seit [X] Jahren in der Nachbarschaft und bedienen aehnliche Kunden wie Sie.

Ich hatte eine Idee: Wir koennten uns gegenseitig auf unseren Websites als empfohlene Partner listen. Unsere Kunden fragen regelmaessig nach [deren Service] – und ich wuerde sie gerne zu Ihnen schicken.

Konkret stelle ich mir vor:
• Partnerseite auf unserer Website mit Ihrem Logo + Beschreibung + Link
• Im Gegenzug das Gleiche auf Ihrer Seite

Haetten Sie Interesse an einem kurzen Austausch – vielleicht auf einen Kaffee?

Beste Gruesse,
[Dein Name]
[Dein Unternehmen]
[Telefon]`,
    tip: "Am besten persoenlich vorbeigehen oder anrufen, bevor du die E-Mail schickst. Warme Kontakte haben 3x hoehere Erfolgsrate.",
    successRate: "35-50%",
    followUpDays: 5,
  },
  {
    id: "partner-supplier",
    category: "partnership",
    title: "Lieferanten-/Dienstleister-Verlinkung",
    scenario: "Deinen Lieferanten um einen Backlink bitten",
    subject: "Kundenstimme fuer Ihre Website?",
    body: `Hallo [Name],

wir arbeiten jetzt seit [Zeitraum] mit [Lieferant/Dienstleister] zusammen und sind sehr zufrieden mit [konkretes Lob].

Ich wollte fragen: Haben Sie auf Ihrer Website einen Bereich fuer Kundenstimmen, Referenzen oder Partner? Wir wuerden gerne ein kurzes Testimonial beisteuern – und wuerden uns natuerlich freuen, wenn Sie dabei auf unsere Website verlinken.

Hier ein Vorschlag fuer das Testimonial:
"[Kurzes, authentisches Testimonial, 2-3 Saetze]"

Wuerde das passen?

Herzliche Gruesse,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Lieferanten haben oft Referenzseiten – die einfachste Art, einen hochwertigen Link zu bekommen.",
    successRate: "40-60%",
    followUpDays: 7,
  },

  // Sponsoring
  {
    id: "sponsor-verein",
    category: "sponsoring",
    title: "Vereinssponsoring anfragen",
    scenario: "Lokalen Sport- oder Kulturverein sponsern",
    subject: "Sponsoring-Interesse fuer [Vereinsname]",
    body: `Hallo [Name],

als lokales Unternehmen in [Stadt] moechten wir gerne den [Vereinsname] unterstuetzen. Wir verfolgen Ihre Arbeit schon laenger und finden [konkretes Lob] grossartig.

Wir interessieren uns fuer ein Sponsoring-Paket und haetten besonders Interesse an:
• Logo + Link auf der Vereinswebsite
• Erwaehnung in Ihren Social-Media-Kanaelen
• Logo auf Vereinsmaterialien (Trikots, Flyer, Plakate)

Koennten Sie uns Informationen zu den verfuegbaren Sponsoring-Optionen und Konditionen senden?

Herzliche Gruesse,
[Dein Name]
[Dein Unternehmen]
[Telefon]`,
    tip: "Kleinere Vereine (50-500 Mitglieder) sind oft dankbarer und flexibler als grosse. Frage explizit nach einem DoFollow-Link.",
    successRate: "60-80%",
    followUpDays: 7,
  },
  {
    id: "sponsor-event",
    category: "sponsoring",
    title: "Event-Sponsoring",
    scenario: "Lokales Festival, Lauf oder Markt sponsern",
    subject: "Sponsoring-Anfrage: [Eventname] [Jahr]",
    body: `Hallo [Name],

[Eventname] ist jedes Jahr ein Highlight in [Stadt] – wir moechten dieses Jahr als Sponsor dabei sein!

Ueber [Dein Unternehmen]:
Wir sind [kurze Beschreibung, 1 Satz] und seit [X] Jahren in [Stadt] verwurzelt.

Was uns besonders interessiert:
• Erwaehnung + Link auf der Event-Website
• Stand/Praesenz vor Ort (falls moeglich)
• Logo in der Pressemitteilung zum Event

Welche Sponsoring-Pakete bieten Sie an? Wir freuen uns ueber ein Gespraech!

Mit freundlichen Gruessen,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Event-Websites haben oft hohe Domain Authority und der Link bleibt auch nach dem Event bestehen.",
    successRate: "50-70%",
    followUpDays: 5,
  },

  // Press
  {
    id: "press-story-pitch",
    category: "press",
    title: "Story-Pitch an lokale Zeitung",
    scenario: "Redakteur mit einer lokalen Geschichte ansprechen",
    subject: "[Stadt]: [Kurze, spannende Headline]",
    body: `Hallo [Redakteur-Name],

ich schreibe Ihnen, weil ich eine Geschichte habe, die fuer Ihre Leser in [Stadt/Region] interessant sein koennte:

[1-2 Saetze: Was ist die Story? Warum ist sie relevant?]

Hintergrund:
• [Fakt/Zahl, die Aufmerksamkeit erregt]
• [Lokaler Bezug: Warum betrifft das Menschen in der Region?]
• [Was macht die Geschichte einzigartig?]

Ich stehe Ihnen gerne fuer ein Interview oder weitere Informationen zur Verfuegung. Fotos in Druckqualitaet kann ich ebenfalls liefern.

Mit freundlichen Gruessen,
[Dein Name]
[Dein Unternehmen]
[Telefon]`,
    tip: "Journalisten wollen Geschichten, keine Werbung. Formuliere als Story mit Nachrichtenwert – nicht als Selbstdarstellung.",
    successRate: "10-25%",
    followUpDays: 3,
  },
  {
    id: "press-expert",
    category: "press",
    title: "Experten-Positionierung",
    scenario: "Dich als lokaler Experte fuer Medienanfragen anbieten",
    subject: "Lokaler Experte fuer [Thema] in [Stadt]",
    body: `Hallo [Redakteur-Name],

als [Berufsbezeichnung] mit [X] Jahren Erfahrung in [Stadt] moechte ich mich als Ansprechpartner fuer Ihre Redaktion vorstellen.

Meine Expertise:
• [Fachgebiet 1]
• [Fachgebiet 2]
• [Fachgebiet 3]

Ich stehe gerne fuer Zitate, Hintergrundgespraeche oder Gastbeitraege zur Verfuegung – schnell und unkompliziert. Besonders bei Themen rund um [aktuelles Thema/Trend] kann ich fundierte Einschaetzungen liefern.

Kontakt: [Telefon] (auch kurzfristig erreichbar)

Beste Gruesse,
[Dein Name]
[Position], [Dein Unternehmen]
[Website]`,
    tip: "Sende diese E-Mail proaktiv, nicht erst wenn ein Artikel erscheint. Redaktionen fuehren Expertenlisten.",
    successRate: "15-30%",
    followUpDays: 14,
  },

  // Unlinked Mentions
  {
    id: "unlinked-friendly",
    category: "unlinked",
    title: "Freundliche Verlinkungsbitte",
    scenario: "Website erwaehnt dein Unternehmen ohne Link",
    subject: "Vielen Dank fuer die Erwaehnung!",
    body: `Hallo [Name],

ich habe gesehen, dass Sie [Dein Unternehmen] in Ihrem Artikel "[Artikeltitel]" erwaehnen – das freut uns sehr! Vielen Dank dafuer.

Haetten Sie die Moeglichkeit, unseren Firmennamen mit unserer Website zu verlinken? Der Link waere: [URL]

Das wuerde Ihren Lesern helfen, uns direkt zu finden, und macht den Artikel noch nuetzlicher.

Falls Sie moechten, kann ich Ihnen auch gerne zusaetzliche Informationen oder ein aktuelles Zitat fuer den Artikel liefern.

Vielen Dank und beste Gruesse,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Finde Unlinked Mentions mit Google Alerts oder Tools wie Ahrefs. Erfolgsrate ist hoch, weil der Kontakt schon positiv ist.",
    successRate: "40-65%",
    followUpDays: 5,
  },
  {
    id: "unlinked-correction",
    category: "unlinked",
    title: "Korrektur + Verlinkung",
    scenario: "Artikel mit veralteten/falschen Infos ueber dein Unternehmen",
    subject: "Kleine Korrektur zu Ihrem Artikel ueber [Thema]",
    body: `Hallo [Name],

ich bin auf Ihren Artikel "[Artikeltitel]" gestossen – sehr informativ!

Mir ist aufgefallen, dass die Informationen ueber [Dein Unternehmen] nicht mehr ganz aktuell sind:
• [Aktuelle Info statt veralteter Info]

Waere es moeglich, das zu aktualisieren? Hier sind die korrekten Daten:
• [Korrekte Information]
• Website: [URL]

Gerne kann ich Ihnen auch ein aktuelles Foto oder Logo zur Verfuegung stellen.

Vielen Dank fuer die Muehe!
[Dein Name]`,
    tip: "Biete immer einen Mehrwert (aktuelle Daten, Fotos) – das erhoehen die Chance auf eine Aktualisierung mit Link.",
    successRate: "50-70%",
    followUpDays: 7,
  },

  // Events
  {
    id: "event-speaker",
    category: "event",
    title: "Als Speaker bewerben",
    scenario: "Bei lokalem Business-Event als Redner auftreten",
    subject: "Speaker-Vorschlag fuer [Eventname]: [Thema]",
    body: `Hallo [Organisator],

[Eventname] ist eine grossartige Initiative fuer die lokale Unternehmerszene – Kompliment!

Ich wuerde gerne einen Vortrag oder Workshop anbieten zum Thema:
"[Konkreter Titel, der Mehrwert verspricht]"

Was die Teilnehmer mitnehmen:
• [Konkreter Nutzen 1]
• [Konkreter Nutzen 2]
• [Konkreter Nutzen 3]

Ueber mich: [2-3 Saetze zu Expertise und Erfahrung]

Ich passe mich gerne an Ihr Format an – ob 20-Minuten-Impulsvortrag oder 60-Minuten-Workshop.

Freue mich auf Ihre Rueckmeldung!
[Dein Name]
[Website]`,
    tip: "Speaker werden fast immer auf der Event-Website mit Link gelistet. Plus: Networking-Moeglichkeiten fuer weitere Links.",
    successRate: "20-40%",
    followUpDays: 7,
  },
  {
    id: "event-community",
    category: "event",
    title: "Community-Aktion vorschlagen",
    scenario: "Gemeinsame Aktion mit lokalem Blog oder Community",
    subject: "Gemeinsame Aktion fuer [Stadt/Stadtteil]?",
    body: `Hallo [Name],

ich verfolge [Blog/Community] schon laenger und finde toll, was Sie fuer [Stadt/Stadtteil] machen!

Wir haetten eine Idee fuer eine gemeinsame Aktion:
[Beschreibung der Aktion, z.B. Gewinnspiel, Stadtteil-Guide, Charity-Event]

Was wir einbringen:
• [Konkreter Beitrag: Preis, Location, Expertise]
• Bewerbung an unsere [X] Follower/Kunden

Was wir uns wuenschen:
• Erwaehnung + Link in einem Beitrag ueber die Aktion
• Gemeinsame Social-Media-Bewerbung

Haetten Sie Interesse? Ich freue mich auf ein Gespraech!

Beste Gruesse,
[Dein Name]`,
    tip: "Lokale Blogs und Community-Seiten haben oft engagierte Leser und gute Domain Authority.",
    successRate: "25-45%",
    followUpDays: 5,
  },

  // Institutions
  {
    id: "ihk-eintrag",
    category: "institution",
    title: "IHK/HWK Profil optimieren",
    scenario: "Branchenkammer um Verlinkung bitten",
    subject: "Aktualisierung unseres Mitgliederprofils",
    body: `Sehr geehrte Damen und Herren,

als Mitglied der [IHK/HWK Name] moechten wir unser Mitgliederprofil im Online-Verzeichnis aktualisieren.

Bitte uebernehmen Sie folgende Aenderungen:
• Firmenname: [Exakter Name]
• Website: [URL] (bitte als klickbarer Link)
• Beschreibung: [Kurze Unternehmensbeschreibung, 2-3 Saetze]
• Ansprechpartner: [Name, Position]
• Logo: [Im Anhang / wird nachgeliefert]

Falls ein erweitertes Profil mit Zusatzinformationen moeglich ist, wuerden wir das gerne nutzen.

Mit freundlichen Gruessen,
[Dein Name]
[Mitgliedsnummer: XXXX]`,
    tip: "IHK/HWK-Links haben DA 75-85 – einer der hochwertigsten kostenlosen Links fuer lokale Unternehmen im DACH-Raum.",
    successRate: "80-95%",
    followUpDays: 10,
  },
  {
    id: "verband-mitglied",
    category: "institution",
    title: "Branchenverband-Listung",
    scenario: "Aufnahme in Verbandsverzeichnis anfragen",
    subject: "Mitgliedschaft und Verzeichnis-Eintrag bei [Verband]",
    body: `Sehr geehrte Damen und Herren,

wir interessieren uns fuer eine Mitgliedschaft im [Verbandsname] und moechten uns ueber die Vorteile informieren.

Ueber uns:
• [Dein Unternehmen], gegruendet [Jahr]
• Taetig in: [Fachgebiet/Region]
• [X] Mitarbeiter, [Y] Kunden/Jahr

Besonders interessiert uns:
• Aufnahme in das Online-Mitgliederverzeichnis mit Firmenprofil und Website-Link
• Networking-Moeglichkeiten mit anderen Mitgliedern
• Nutzung des Verbandssiegels auf unserer Website

Koennten Sie uns Informationen zu Mitgliedsbeitraegen und Aufnahmebedingungen senden?

Mit freundlichen Gruessen,
[Dein Name]
[Dein Unternehmen]`,
    tip: "Branchenverbaende bieten oft DA 60-80 Links plus Vertrauenssignal fuer Google (E-E-A-T).",
    successRate: "70-90%",
    followUpDays: 14,
  },

  // Guest Post
  {
    id: "guest-local-blog",
    category: "guest-post",
    title: "Gastbeitrag fuer lokales Blog/Magazin",
    scenario: "Fachartikel auf lokalem Online-Medium anbieten",
    subject: "Gastbeitrag-Idee: [Konkreter Titel]",
    body: `Hallo [Name],

ich lese [Blog/Magazin] regelmaessig und finde besonders [konkreten Artikel loben] sehr gelungen.

Als [Berufsbezeichnung] in [Stadt] moechte ich gerne einen Gastbeitrag beisteuern:

Themenvorschlag: "[Konkreter Titel]"

Was ich abdecken wuerde:
• [Aspekt 1 – mit lokalem Bezug]
• [Aspekt 2 – praktische Tipps fuer Leser]
• [Aspekt 3 – aktuelle Daten/Trends]

Der Artikel waere ca. [X] Woerter lang, einzigartig und exklusiv fuer [Blog/Magazin].

Soll ich einen Entwurf erstellen?

Beste Gruesse,
[Dein Name]
[Website / LinkedIn]`,
    tip: "Biete immer einen fertigen Entwurf an – das reduziert den Aufwand fuer die Redaktion und erhoehen die Chance deutlich.",
    successRate: "15-30%",
    followUpDays: 7,
  },

  // Resource Pages
  {
    id: "resource-page",
    category: "resource",
    title: "Aufnahme in lokale Ressourcen-Seite",
    scenario: "Stadtportal oder Branchenverzeichnis um Aufnahme bitten",
    subject: "Vorschlag fuer Ihre [Ressourcen-/Empfehlungsseite]",
    body: `Hallo [Name],

ich bin auf Ihre Seite "[Seitentitel]" gestossen – eine tolle Ressource fuer [Zielgruppe] in [Stadt]!

Darf ich [Dein Unternehmen] als Ergaenzung vorschlagen? Wir bieten:
• [Hauptleistung mit lokalem Bezug]
• [Alleinstellungsmerkmal / Besonderheit]
• [Relevanz fuer die Zielgruppe der Seite]

Website: [URL]
Kurzbeschreibung: [1-2 Saetze, die auf die Seite passen]

Ich denke, das waere ein wertvoller Beitrag fuer Ihre Leser. Was meinen Sie?

Vielen Dank!
[Dein Name]`,
    tip: "Suche nach 'Stadt + Empfehlungen/Ressourcen/beste [Branche]' – diese Seiten sind oft froh ueber qualitative Ergaenzungen.",
    successRate: "20-40%",
    followUpDays: 7,
  },
  {
    id: "resource-university",
    category: "resource",
    title: "Uni/Hochschule Ressourcen-Link",
    scenario: "Studentische Ressourcenseite oder Career-Page",
    subject: "Praxispartner / Ressource fuer [Fachbereich]-Studierende",
    body: `Sehr geehrte/r [Name],

als [Branche]-Unternehmen in [Stadt] moechten wir uns als Praxispartner fuer [Hochschule/Fachbereich] vorstellen.

Wir bieten:
• [Praktikumsplaetze / Werkstudentenstellen / Kooperationen]
• [Branchenspezifische Einblicke oder Gastvortraege]
• [Rabatte/Angebote fuer Studierende, falls zutreffend]

Waere es moeglich, uns auf Ihrer [Partnerseite / Ressourcenseite / Career-Page] mit einem Link zu listen?

Website: [URL]
Ansprechpartner: [Name, Telefon]

Vielen Dank fuer Ihre Rueckmeldung!
[Dein Name]
[Dein Unternehmen]`,
    tip: ".edu-Links (bzw. .ac.at/.ch) haben extrem hohe Domain Authority. Selbst kleine Fachhochschulen haben oft DA 60+.",
    successRate: "15-30%",
    followUpDays: 14,
  },
];

const LinkBuildingOutreachTemplates = ({
  categories,
  title = "Outreach-Vorlagen: Lokale Backlinks aufbauen",
  description = "15 kopierfertige E-Mail-Vorlagen fuer lokales Link Building. Von Partnerschaften ueber Pressearbeit bis zu Unlinked Mentions.",
}: LinkBuildingOutreachTemplatesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<OutreachCategory | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableCategories = categories || (Object.keys(categoryMeta) as OutreachCategory[]);

  const filtered = allOutreachTemplates.filter((t) => {
    if (!availableCategories.includes(t.category)) return false;
    if (selectedCategory !== "all" && t.category !== selectedCategory) return false;
    return true;
  });

  const copyToClipboard = (template: OutreachTemplate) => {
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

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
            selectedCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Alle ({filtered.length})
        </button>
        {availableCategories.map((cat) => {
          const count = allOutreachTemplates.filter((t) => t.category === cat && availableCategories.includes(t.category)).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {categoryMeta[cat].icon}
              {categoryMeta[cat].label} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {filtered.length} {filtered.length === 1 ? "Vorlage" : "Vorlagen"} gefunden
      </p>

      {/* Template Cards */}
      <div className="space-y-3">
        {filtered.map((template) => (
          <Card key={template.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === template.id ? null : template.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={cn("p-1.5 rounded-lg", categoryMeta[template.category].color)}>
                    {categoryMeta[template.category].icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{template.title}</span>
                      {template.successRate && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          ~{template.successRate} Erfolgsrate
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{template.scenario}</p>
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

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-3">
                    {template.successRate && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        Erfolgsrate: {template.successRate}
                      </div>
                    )}
                    {template.followUpDays && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        <Mail className="w-3 h-3" />
                        Follow-up nach {template.followUpDays} Tagen
                      </div>
                    )}
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
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Mail className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Vorlagen fuer diese Kategorie gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default LinkBuildingOutreachTemplates;
