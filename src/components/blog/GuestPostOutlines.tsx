import { useState } from "react";
import { Copy, Check, ChevronDown, FileText, Lightbulb, Building2, Utensils, Wrench, Scale, Heart, ShoppingBag, Dumbbell, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export type OutlineCategory = "general" | "gastronomy" | "craft" | "legal" | "health" | "retail" | "fitness" | "beauty";

export interface GuestPostOutline {
  id: string;
  category: OutlineCategory;
  title: string;
  targetPublication: string;
  wordCount: string;
  angle: string;
  outline: { heading: string; content: string; tips?: string }[];
  cta: string;
  seoNotes: string;
}

interface GuestPostOutlinesProps {
  categories?: OutlineCategory[];
  title?: string;
  description?: string;
}

const catMeta: Record<OutlineCategory, { label: string; icon: React.ReactNode; color: string }> = {
  general: { label: "Allgemein", icon: <FileText className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  gastronomy: { label: "Gastronomie", icon: <Utensils className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  craft: { label: "Handwerk", icon: <Wrench className="w-4 h-4" />, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  legal: { label: "Recht & Finanzen", icon: <Scale className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  health: { label: "Gesundheit", icon: <Heart className="w-4 h-4" />, color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  retail: { label: "Einzelhandel", icon: <ShoppingBag className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  fitness: { label: "Fitness & Sport", icon: <Dumbbell className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  beauty: { label: "Beauty & Wellness", icon: <Scissors className="w-4 h-4" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
};

const outlines: GuestPostOutline[] = [
  {
    id: "general-local-guide",
    category: "general",
    title: "Der ultimative [Stadt/Stadtteil]-Guide fuer [Thema]",
    targetPublication: "Stadtmagazin, lokaler Blog, Stadtteil-Portal",
    wordCount: "1.200–1.800 Woerter",
    angle: "Positionierung als lokaler Insider mit echtem Mehrwert fuer die Leser des Zielmediums.",
    outline: [
      { heading: "Einleitung: Warum [Thema] in [Stadt] besonders ist", content: "Persoenlicher Einstieg mit lokalem Bezug. Warum dieses Thema gerade jetzt relevant ist. Kurzer Ueberblick, was der Leser erfaehrt.", tips: "Erwaehne ein lokales Wahrzeichen oder Event als Aufhaenger." },
      { heading: "[3–5 konkrete Tipps/Empfehlungen]", content: "Jeder Tipp als eigener Absatz mit Unterueberschrift. Lokale Beispiele und Adressen einbauen. Praktisch und sofort umsetzbar.", tips: "Verlinke auf eigene Website nur 1x – bei der relevantesten Stelle." },
      { heading: "Insider-Tipp: Was die meisten nicht wissen", content: "Exklusives Wissen, das den Artikel von generischen Inhalten abhebt. Zeigt deine lokale Expertise.", tips: "Dieser Abschnitt macht den Unterschied zwischen 'nett' und 'teilenswert'." },
      { heading: "Fazit + Handlungsempfehlung", content: "Zusammenfassung der wichtigsten Punkte. Konkreter naechster Schritt fuer den Leser.", tips: "Autor-Bio mit Link zu deiner Website kommt unter den Artikel – nicht im Text." },
    ],
    cta: "Autor-Bio: '[Name] ist [Berufsbezeichnung] in [Stadt] und hilft seit [X] Jahren [Zielgruppe]. Mehr auf [Website].'",
    seoNotes: "Ziel-Keyword im Titel + H2. 1 Backlink in der Autorenbox, max. 1 kontextueller Link im Text. Natuerlicher Ankertext.",
  },
  {
    id: "general-seasonal",
    category: "general",
    title: "[Saisonales Thema] in [Stadt]: Was [Zielgruppe] jetzt wissen muss",
    targetPublication: "Lokale Online-Zeitung, Veranstaltungsportal",
    wordCount: "800–1.200 Woerter",
    angle: "Saisonaler Content mit Aktualitaets-Bonus – perfekt fuer Fruehling, Sommer, Herbst oder Weihnachts-Specials.",
    outline: [
      { heading: "Einleitung: Die Saison in [Stadt]", content: "Was macht diese Saison in [Stadt] besonders? Lokale Traditionen oder Trends aufgreifen.", tips: "Verknuepfe mit lokalen Events (Weihnachtsmarkt, Stadtfest, etc.)." },
      { heading: "[X] Dinge, die Sie diesen [Saison] in [Stadt] tun sollten", content: "Listicle-Format mit 5-7 konkreten Empfehlungen. Mix aus bekannten und Geheimtipps.", tips: "Baue deinen eigenen Service/Ort als einen der Tipps ein – aber dezent." },
      { heading: "Kosten & Planung: So budgetieren Sie richtig", content: "Praktische Preis-Infos und Planungstipps. Lokale Besonderheiten bei Kosten.", tips: "Preistransparenz schafft Vertrauen und Shares." },
      { heading: "Unser Fazit fuer [Stadt]", content: "Persoenliche Empfehlung. Call-to-Action zum Teilen.", tips: "Frage die Redaktion, ob sie Social-Media-Promotion machen." },
    ],
    cta: "Autor-Bio mit saisonalem Bezug: '[Name] bereitet sich und seine Kunden seit [X] Jahren auf [Saison] in [Stadt] vor.'",
    seoNotes: "Saisonale Keywords + Stadt-Name im Titel. Frueh veroeffentlichen (4-6 Wochen vor Saisonstart). Evergreen-Potenzial durch jaehrliche Aktualisierung.",
  },
  {
    id: "gastro-food-guide",
    category: "gastronomy",
    title: "[Kueche/Gericht] in [Stadt]: Ein Gastronom verraet seine Geheimnisse",
    targetPublication: "Food-Blog, Stadtmagazin, Lifestyle-Portal",
    wordCount: "1.000–1.500 Woerter",
    angle: "Insider-Wissen eines Gastronomen – authentisch, persoenlich, mit Rezept oder Geheimtipp.",
    outline: [
      { heading: "Warum [Kueche] in [Stadt] booming ist", content: "Trend-Einordnung mit lokalen Zahlen/Beobachtungen. Persoenliche Geschichte: Warum du dieses Restaurant/Cafe eroeffnet hast.", tips: "Food-Blogger lieben persoenliche Geschichten mehr als Fakten." },
      { heading: "Meine [3] Lieblings-Zutaten aus der Region", content: "Lokale Lieferanten und Produzenten vorstellen. Warum regionale Zutaten besser sind. Konkrete Bezugsquellen nennen (Wochenmarkt, Hofladen).", tips: "Cross-Promotion mit lokalen Lieferanten = weitere Backlinks." },
      { heading: "Rezept zum Nachmachen: [Gericht]", content: "Einfaches Signature-Rezept fuer Zuhause. Schritt-fuer-Schritt mit Profi-Tipps. Variationen fuer verschiedene Ernaehrungsformen.", tips: "Rezepte werden extrem oft geteilt und gepinnt – hohe Viralitaet." },
      { heading: "Wo Sie in [Stadt] am besten [Kueche] essen", content: "3-5 Empfehlungen (inkl. deinem eigenen Restaurant – als eine von mehreren). Faire, ehrliche Bewertung.", tips: "Andere Restaurants zu empfehlen zeigt Grosszuegigkeit und wird von Redaktionen geschaetzt." },
    ],
    cta: "Autor-Bio: '[Name], Kuechenchef/Inhaber von [Restaurant] in [Stadtteil], kocht seit [X] Jahren [Kueche].'",
    seoNotes: "'[Kueche] [Stadt]' als Hauptkeyword. Recipe-Schema moeglich falls Rezept enthalten. Fotos in hoher Qualitaet mitliefern.",
  },
  {
    id: "craft-diy-guide",
    category: "craft",
    title: "[Handwerks-Thema] selbst machen vs. Profi beauftragen: Ehrlicher Ratgeber",
    targetPublication: "Heimwerker-Blog, lokale Zeitung, Immobilienportal",
    wordCount: "1.200–1.800 Woerter",
    angle: "Ehrliche Einschaetzung eines Handwerkers – wann DIY sinnvoll ist und wann nicht. Baut enormes Vertrauen auf.",
    outline: [
      { heading: "Wann Sie [Thema] selbst machen koennen", content: "3-4 Szenarien, in denen DIY funktioniert. Benoetigte Werkzeuge und Materialien. Geschaetzte Kosten und Zeitaufwand.", tips: "Ehrlichkeit hier ist dein groesster Vertrauens-Booster." },
      { heading: "Schritt-fuer-Schritt: [Einfache Variante] selbst gemacht", content: "Konkrete Anleitung fuer eine einfache Version. Fotos oder Skizzen. Typische Fehler und wie man sie vermeidet.", tips: "Zeige auch was schiefgehen kann – das macht den Artikel authentisch." },
      { heading: "Wann Sie einen Profi brauchen (und warum)", content: "Situationen, in denen DIY riskant/teurer wird. Sicherheitshinweise und gesetzliche Vorgaben. Was ein Profi anders/besser macht.", tips: "Keine Angstmacherei – sachlich und fair argumentieren." },
      { heading: "Kosten-Vergleich: DIY vs. Profi in [Stadt]", content: "Realistische Preistabelle fuer [Stadt/Region]. Material + Arbeitszeit + Werkzeug vs. Handwerker-Rechnung. Versteckte Kosten bei DIY (Fehler, Nachbesserung).", tips: "Preistransparenz ist der #1 Grund, warum Handwerker-Artikel geteilt werden." },
      { heading: "Checkliste: Den richtigen Handwerker finden", content: "5-7 Kriterien (Meisterbrief, Bewertungen, Festpreis-Angebot, etc.). Warnzeichen fuer unserioeser Anbieter.", tips: "Generisch halten – dein Link kommt in die Autorenbox." },
    ],
    cta: "Autor-Bio: '[Name], Meister im [Gewerk] aus [Stadt], fuehrt seinen Betrieb seit [X] Jahren in [Stadtteil].'",
    seoNotes: "'[Handwerk] Kosten [Stadt]' als Keyword. How-To-Schema moeglich. Preistabellen erhoehen die Chance auf Featured Snippets.",
  },
  {
    id: "legal-rights",
    category: "legal",
    title: "[Rechtsthema]: Was [Zielgruppe] in [Stadt/Bundesland] wissen muss",
    targetPublication: "Regionaler Ratgeber-Blog, IHK-Magazin, lokale Zeitung",
    wordCount: "1.500–2.000 Woerter",
    angle: "Komplexes Rechtsthema verstaendlich erklaert – mit lokalem Bezug und praktischen Handlungsempfehlungen.",
    outline: [
      { heading: "Das Problem: Warum [Thema] viele [Zielgruppe] betrifft", content: "Haeufigkeit des Problems mit Zahlen. Typisches Szenario aus der Praxis (anonymisiert). Warum viele zu spat handeln.", tips: "Ein konkretes Fallbeispiel macht abstrakte Rechtsthemen greifbar." },
      { heading: "Die Rechtslage: Was das Gesetz sagt", content: "Relevante Paragraphen in einfacher Sprache. Besonderheiten in [Bundesland] falls relevant. Aktuelle Aenderungen oder Urteile.", tips: "Vermeide Juristendeutsch – schreibe fuer Laien." },
      { heading: "[3-5] Schritte: So schuetzen Sie sich", content: "Konkrete Handlungsanweisungen. Fristen und Termine. Benoetigte Dokumente.", tips: "Nummerierte Schritte funktionieren besser als Fliesstext." },
      { heading: "Haeufige Fehler (und teure Konsequenzen)", content: "3-4 typische Fehler mit realen Kostenbeispielen. Wie man sie vermeidet.", tips: "Fehler-Abschnitte haben die hoechste Engagement-Rate." },
      { heading: "Wann Sie einen Anwalt brauchen", content: "Klare Kriterien, wann Selbsthilfe reicht und wann nicht. Was ein Erstgespraech kostet. Rechtsschutzversicherung: ja oder nein?", tips: "Ehrliche Einschaetzung – nicht jeder Fall braucht einen Anwalt." },
    ],
    cta: "Autor-Bio: 'RA [Name] ist Fachanwalt fuer [Gebiet] in [Stadt] und beraet seit [X] Jahren [Zielgruppe]. Erstberatung: [Website].'",
    seoNotes: "'[Rechtsthema] [Stadt/Bundesland]' als Keyword. FAQ-Schema fuer haeufige Fragen. Disclamer: 'Keine Rechtsberatung' am Ende.",
  },
  {
    id: "health-prevention",
    category: "health",
    title: "[Gesundheitsthema]: [X] Tipps von Ihrem [Arzt/Zahnarzt] aus [Stadt]",
    targetPublication: "Gesundheits-Blog, lokales Stadtmagazin, Krankenkassen-Magazin",
    wordCount: "1.000–1.500 Woerter",
    angle: "Medizinische Expertise verstaendlich vermittelt – praeventiv, nicht werblich.",
    outline: [
      { heading: "Warum [Thema] haeufiger ist als Sie denken", content: "Statistiken und lokale Relevanz. Risikogruppen identifizieren. Warnsignale, die man nicht ignorieren sollte.", tips: "Beginne mit einer ueberraschenden Statistik." },
      { heading: "[X] Praeventions-Tipps fuer den Alltag", content: "Praktische, sofort umsetzbare Tipps. Ernaehrung, Bewegung, Gewohnheiten. Kosten: Was kostenlos, was kostet etwas?", tips: "Einfache Tipps werden oefter geteilt als komplexe Behandlungen." },
      { heading: "Mythen vs. Fakten: Was wirklich stimmt", content: "3-4 verbreitete Irrtuemer aufklaeren. Evidenzbasiert argumentieren. Quellen nennen.", tips: "Mythen-Formate performen ueberdurchschnittlich auf Social Media." },
      { heading: "Wann Sie zum [Arzt/Zahnarzt] gehen sollten", content: "Klare Symptom-Checkliste. Was bei der Untersuchung passiert (Angst nehmen). Kassenleistung vs. Selbstzahler.", tips: "Transparenz bei Kosten schafft Vertrauen." },
    ],
    cta: "Autor-Bio: 'Dr. [Name] praktiziert seit [X] Jahren als [Facharzt] in [Stadt-Stadtteil]. Terminvereinbarung: [Website].'",
    seoNotes: "'[Symptom/Behandlung] [Stadt]' als Keyword. MedicalWebPage-Schema moeglich. Disclaimer: 'Ersetzt keine aerztliche Beratung.'",
  },
  {
    id: "retail-trend",
    category: "retail",
    title: "[Produkt-Trend] in [Stadt]: Warum lokaler Einkauf zurueckkommt",
    targetPublication: "Stadtmagazin, Nachhaltigkeits-Blog, Stadtteil-Portal",
    wordCount: "800–1.200 Woerter",
    angle: "Lokaler Einzelhandel vs. Online – emotionaler Appell mit konkretem Mehrwert fuer Konsumenten.",
    outline: [
      { heading: "Der Trend: Warum [Produkt/Kategorie] wieder lokal gekauft wird", content: "Trend-Daten und Beobachtungen. Gruende: Nachhaltigkeit, Qualitaet, Erlebnis. Lokale Beispiele.", tips: "Positive Framing – nicht gegen Online wettern, sondern fuer lokal argumentieren." },
      { heading: "Was lokale Haendler besser koennen als Amazon", content: "Beratung, Haptik, Sofort-Verfuegbarkeit. Individuelle Anpassung und Service. Community-Aspekt.", tips: "Konkrete Beispiele aus deinem Laden einbauen." },
      { heading: "[Stadt]-Guide: Wo Sie [Produkt] am besten finden", content: "5-7 lokale Empfehlungen (inkl. deinem Geschaeft). Stadtteil-Sortierung. Besonderheiten jedes Ladens.", tips: "Andere Haendler einbeziehen – die teilen den Artikel dann auch." },
      { heading: "So unterstuetzen Sie Ihren Stadtteil", content: "Konkreter Call-to-Action. Aktionen wie 'Kauf-lokal'-Tage. Social-Media-Hashtags.", tips: "Community-Aufruf am Ende erhoet Sharing-Rate deutlich." },
    ],
    cta: "Autor-Bio: '[Name] fuehrt [Geschaeft] in [Stadtteil] seit [X] Jahren und setzt auf [USP].'",
    seoNotes: "'[Produkt] kaufen [Stadt]' als Keyword. LocalBusiness-Schema auf eigener Website. Kooperations-Links zu anderen genannten Laeden anfragen.",
  },
  {
    id: "fitness-local",
    category: "fitness",
    title: "Outdoor-Fitness in [Stadt]: Die besten [Aktivitaeten] fuer jedes Level",
    targetPublication: "Sport-Blog, Stadtmagazin, Gesundheitsportal",
    wordCount: "1.000–1.500 Woerter",
    angle: "Lokaler Fitness-Guide mit konkreten Orten, Strecken und Tipps – positioniert dich als aktiven Teil der Community.",
    outline: [
      { heading: "Warum [Stadt] perfekt fuer [Aktivitaet] ist", content: "Lokale Gegebenheiten: Parks, Wege, Infrastruktur. Community und Gruppen. Wetter und beste Jahreszeiten.", tips: "Nenne spezifische Orte mit Google-Maps-Links." },
      { heading: "[3-5] Top-Spots fuer [Aktivitaet] in [Stadt]", content: "Detaillierte Beschreibung jedes Spots. Schwierigkeitsgrad, Laenge, Besonderheiten. Anfahrt und Parken.", tips: "Fotos machen den Artikel 3x teilenswerter." },
      { heading: "Trainingsplan: [X] Wochen fuer Einsteiger", content: "Einfacher Plan zum Ausdrucken. Aufwaermung, Hauptteil, Cooldown. Steigerung ueber die Wochen.", tips: "Kostenloser Mehrwert = Vertrauen = spaetere Kunden." },
      { heading: "Community & Gruppen in [Stadt]", content: "Lokale Laufgruppen, Bootcamps, Vereine. Social-Media-Gruppen und Meetups. Dein eigenes Angebot (dezent) einbauen.", tips: "Community-Infos machen den Artikel zur Referenz-Ressource." },
    ],
    cta: "Autor-Bio: '[Name] ist [Trainer/Inhaber] bei [Studio/Verein] in [Stadtteil] und trainiert seit [X] Jahren [Zielgruppe].'",
    seoNotes: "'[Aktivitaet] [Stadt]' als Keyword. Hohe Sharing-Wahrscheinlichkeit. Kann jaehrlich aktualisiert werden.",
  },
  {
    id: "beauty-trends",
    category: "beauty",
    title: "[Beauty-Trend] in [Stadt]: Was [Experte] empfiehlt",
    targetPublication: "Lifestyle-Blog, Frauenmagazin, lokales Stadtmagazin",
    wordCount: "800–1.200 Woerter",
    angle: "Trendiges Thema mit professioneller Einordnung – was funktioniert wirklich und was ist Hype.",
    outline: [
      { heading: "Der Trend: Was hinter [Trend] steckt", content: "Erklaerung des Trends fuer Laien. Herkunft und Verbreitung. Warum es gerade jetzt beliebt ist.", tips: "Social-Media-Beispiele (TikTok/Instagram) als Aufhaenger nutzen." },
      { heading: "Profi-Meinung: Was ich meinen Kunden empfehle", content: "Ehrliche Einschaetzung: Fuer wen geeignet? Moegliche Risiken oder Nebenwirkungen. Realistische Ergebnisse vs. Social-Media-Versprechen.", tips: "Ehrlichkeit ueber Trends baut mehr Vertrauen auf als Hype." },
      { heading: "DIY vs. Profi: Was Sie zuhause tun koennen", content: "Einfache Heimanwendungen. Produkt-Empfehlungen (ohne Affiliate – authentisch). Wann ein Profi-Besuch sinnvoll ist.", tips: "Produkt-Tipps in verschiedenen Preisklassen." },
      { heading: "[Trend] in [Stadt]: Wo Sie die besten Ergebnisse bekommen", content: "Kurzer Ueberblick lokaler Anbieter. Worauf bei der Auswahl achten? Preisrahmen in [Stadt].", tips: "Nenne 2-3 andere Studios neben deinem – zeigt Fairness." },
    ],
    cta: "Autor-Bio: '[Name] ist [Titel] bei [Salon/Studio] in [Stadtteil] mit Spezialisierung auf [Bereich].'",
    seoNotes: "'[Treatment] [Stadt]' als Keyword. Trend-Content hat kurze Halbwertszeit – schnell veroeffentlichen.",
  },
];

const GuestPostOutlines = ({
  categories,
  title = "Gastbeitrag-Outlines: Content fuer lokale PR-Kampagnen",
  description = "Fertige Artikel-Gliederungen fuer Gastbeitraege auf lokalen Blogs, Stadtmagazinen und Fachportalen – nach Branche sortiert.",
}: GuestPostOutlinesProps) => {
  const [selectedCat, setSelectedCat] = useState<OutlineCategory | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const availableCats = categories || (Object.keys(catMeta) as OutlineCategory[]);
  const filtered = outlines.filter((o) => {
    if (!availableCats.includes(o.category)) return false;
    if (selectedCat !== "all" && o.category !== selectedCat) return false;
    return true;
  });

  const copyOutline = (outline: GuestPostOutline) => {
    const text = [
      `GASTBEITRAG-OUTLINE: ${outline.title}`,
      `Zielmedium: ${outline.targetPublication}`,
      `Wortanzahl: ${outline.wordCount}`,
      `Angle: ${outline.angle}`,
      "",
      "GLIEDERUNG:",
      ...outline.outline.flatMap((s, i) => [
        `${i + 1}. ${s.heading}`,
        `   ${s.content}`,
        s.tips ? `   → Tipp: ${s.tips}` : "",
        "",
      ]),
      `AUTOR-BIO / CTA: ${outline.cta}`,
      `SEO-HINWEISE: ${outline.seoNotes}`,
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopiedId(outline.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCat("all")}
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
            selectedCat === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          Alle ({outlines.filter(o => availableCats.includes(o.category)).length})
        </button>
        {availableCats.map((cat) => {
          const count = outlines.filter((o) => o.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
                selectedCat === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {catMeta[cat].icon}
              {catMeta[cat].label} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((outline) => (
          <Card key={outline.id} className="border border-border overflow-hidden">
            <CardContent className="p-0">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedId(expandedId === outline.id ? null : outline.id)}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={cn("p-1.5 rounded-lg", catMeta[outline.category].color)}>
                    {catMeta[outline.category].icon}
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-foreground text-sm block">{outline.title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {outline.targetPublication} · {outline.wordCount}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform shrink-0",
                    expandedId === outline.id && "rotate-180"
                  )}
                />
              </div>

              {expandedId === outline.id && (
                <div className="border-t border-border p-4 space-y-4">
                  {/* Angle */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground"><strong>Angle:</strong> {outline.angle}</p>
                  </div>

                  {/* Outline Steps */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Gliederung</span>
                    {outline.outline.map((section, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                            {i + 1}
                          </span>
                          <h4 className="font-semibold text-foreground text-sm">{section.heading}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground ml-8">{section.content}</p>
                        {section.tips && (
                          <p className="text-xs text-amber-700 dark:text-amber-400 ml-8 mt-2 flex items-center gap-1">
                            <Lightbulb className="w-3 h-3 shrink-0" /> {section.tips}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA / Bio */}
                  <div className="bg-muted/50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Autor-Bio / CTA</span>
                    <p className="text-sm text-foreground mt-1">{outline.cta}</p>
                  </div>

                  {/* SEO Notes */}
                  <div className="bg-muted/50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">SEO-Hinweise</span>
                    <p className="text-sm text-foreground mt-1">{outline.seoNotes}</p>
                  </div>

                  {/* Copy */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyOutline(outline);
                    }}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all w-full justify-center",
                      copiedId === outline.id
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    {copiedId === outline.id ? (
                      <><Check className="w-4 h-4" /> Outline kopiert!</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Komplettes Outline kopieren</>
                    )}
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <FileText className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p>Keine Outlines fuer diese Kategorie gefunden.</p>
        </div>
      )}
    </section>
  );
};

export default GuestPostOutlines;
