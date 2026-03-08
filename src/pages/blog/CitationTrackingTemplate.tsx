import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import LocalCitationWorkflows from "@/components/blog/LocalCitationWorkflows";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Copy, CheckCircle2, LinkIcon, MapPin, Globe, Search,
  AlertTriangle, Star, Shield, FileText, Target, Clock,
  Building2, Smartphone, BarChart3, Zap, Eye
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "citation-tracking-progress";

// ─── Citation directory data ────────────────────────────
interface CitationDirectory {
  name: string;
  url: string;
  category: "essential" | "general" | "industry" | "regional" | "social" | "maps";
  priority: "kritisch" | "hoch" | "mittel";
  notes: string;
}

const directories: CitationDirectory[] = [
  // Essential
  { name: "Google Business Profile", url: "https://business.google.com", category: "essential", priority: "kritisch", notes: "Wichtigstes Verzeichnis – Basis für Maps-Ranking" },
  { name: "Bing Places", url: "https://www.bingplaces.com", category: "essential", priority: "hoch", notes: "Microsoft-Ökosystem, Cortana, Edge" },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", category: "essential", priority: "hoch", notes: "Apple Maps, Siri, Safari" },
  { name: "Yelp", url: "https://biz.yelp.com", category: "essential", priority: "hoch", notes: "Hohe Domain Authority, internationale Sichtbarkeit" },
  // General DE/AT/CH
  { name: "Gelbe Seiten", url: "https://www.gelbeseiten.de", category: "general", priority: "hoch", notes: "Größtes deutsches Branchenverzeichnis" },
  { name: "Das Örtliche", url: "https://www.dasoertliche.de", category: "general", priority: "hoch", notes: "Lokales Telefonbuch & Branchenbuch" },
  { name: "11880.com", url: "https://www.11880.com", category: "general", priority: "mittel", notes: "Telefonauskunft mit Online-Präsenz" },
  { name: "GoYellow", url: "https://www.goyellow.de", category: "general", priority: "mittel", notes: "Branchenbuch mit Bewertungen" },
  { name: "Cylex", url: "https://www.cylex.de", category: "general", priority: "mittel", notes: "Internationales Branchenverzeichnis" },
  { name: "Hotfrog", url: "https://www.hotfrog.de", category: "general", priority: "mittel", notes: "KMU-Branchenverzeichnis" },
  { name: "Herold.at", url: "https://www.herold.at", category: "general", priority: "hoch", notes: "Wichtigstes österreichisches Verzeichnis" },
  { name: "local.ch", url: "https://www.local.ch", category: "general", priority: "hoch", notes: "Wichtigstes Schweizer Verzeichnis" },
  // Maps & Navigation
  { name: "TomTom Places", url: "https://places.tomtom.com", category: "maps", priority: "mittel", notes: "Navigationsdaten für viele Auto-Navis" },
  { name: "Here WeGo", url: "https://wego.here.com", category: "maps", priority: "mittel", notes: "Alternative Karten-Plattform" },
  // Social
  { name: "Facebook Business", url: "https://www.facebook.com/business", category: "social", priority: "hoch", notes: "Social Signal + lokale Suche" },
  { name: "Instagram Business", url: "https://business.instagram.com", category: "social", priority: "mittel", notes: "Visuelle Präsenz, lokale Hashtags" },
  { name: "LinkedIn Unternehmensseite", url: "https://www.linkedin.com", category: "social", priority: "mittel", notes: "B2B-Sichtbarkeit & Authority" },
  // Industry examples
  { name: "Jameda", url: "https://www.jameda.de", category: "industry", priority: "hoch", notes: "Ärzte, Zahnärzte, Therapeuten" },
  { name: "Treatwell", url: "https://www.treatwell.de", category: "industry", priority: "mittel", notes: "Friseure, Beauty, Wellness" },
  { name: "MyHammer", url: "https://www.my-hammer.de", category: "industry", priority: "mittel", notes: "Handwerker aller Gewerke" },
  { name: "Booking.com", url: "https://www.booking.com", category: "industry", priority: "hoch", notes: "Hotels, Ferienwohnungen" },
  { name: "TripAdvisor", url: "https://www.tripadvisor.de", category: "industry", priority: "hoch", notes: "Gastronomie, Hotels, Tourismus" },
  { name: "Lieferando", url: "https://www.lieferando.de", category: "industry", priority: "mittel", notes: "Restaurants mit Lieferservice" },
];

const categoryLabel: Record<string, string> = {
  essential: "Essenziell",
  general: "Allgemein (DACH)",
  maps: "Karten & Navigation",
  social: "Social Media",
  industry: "Branchenspezifisch",
};

// ─── NAP Template ────────────────────────────────────────
const napTemplate = `CITATION TRACKING SPREADSHEET
============================

UNTERNEHMENSDATEN (Master-NAP):
─────────────────────────────
Firmenname:      [Exakter Name]
Straße:          [Straße + Hausnummer]
PLZ + Ort:       [PLZ] [Stadt]
Telefon:         [+49 xxx xxxxxxx]
Website:         [https://www.example.com]
E-Mail:          [info@example.com]
Primäre Kategorie: [z.B. Restaurant]

VERZEICHNIS-TRACKING:
─────────────────────
| # | Verzeichnis | URL | Status | NAP korrekt? | Letzte Prüfung | Anmerkungen |
|---|-------------|-----|--------|-------------|----------------|-------------|
| 1 | Google Business Profile | business.google.com | ✅ Aktiv | ✅ Ja | TT.MM.JJJJ | Verifiziert |
| 2 | Bing Places | bingplaces.com | ✅ Aktiv | ✅ Ja | TT.MM.JJJJ | |
| 3 | Apple Business Connect | businessconnect.apple.com | ⬜ Offen | — | — | Noch einrichten |
| 4 | Yelp | yelp.de | ✅ Aktiv | ⚠️ Prüfen | TT.MM.JJJJ | Telefon aktualisieren |
| 5 | Gelbe Seiten | gelbeseiten.de | ✅ Aktiv | ✅ Ja | TT.MM.JJJJ | |
| 6 | Das Örtliche | dasoertliche.de | ✅ Aktiv | ✅ Ja | TT.MM.JJJJ | |
| 7 | [Verzeichnis] | [URL] | [Status] | [Ja/Nein] | [Datum] | [Notizen] |

STATUS-LEGENDE:
✅ Aktiv & korrekt
⚠️ Aktiv, NAP-Fehler gefunden
⬜ Noch nicht eingetragen
❌ Eintrag entfernen / Duplikat

QUARTALS-AUDIT-LOG:
──────────────────
| Quartal | Geprüft am | Einträge gesamt | NAP korrekt | Fehler gefunden | Korrigiert |
|---------|-----------|-----------------|-------------|-----------------|------------|
| Q1 2026 | TT.MM.JJJJ | XX | XX | XX | XX |
| Q2 2026 | | | | | |
| Q3 2026 | | | | | |
| Q4 2026 | | | | | |`;

const CitationTrackingTemplate = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("citation-tracking-template", language)!;

  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked]);

  const toggle = useCallback((key: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }, []);

  const resetAll = () => {
    setChecked(new Set());
    toast.success("Fortschritt zurückgesetzt");
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(napTemplate);
    toast.success("Template in Zwischenablage kopiert!");
  };

  const percentage = Math.round((checked.size / directories.length) * 100);

  const tocItems = [
    { id: "warum-tracking", title: "Warum Citation Tracking?", level: 2 },
    { id: "master-nap", title: "Master-NAP festlegen", level: 2 },
    { id: "verzeichnis-checkliste", title: "Verzeichnis-Checkliste", level: 2 },
    { id: "template-kopieren", title: "Spreadsheet-Vorlage kopieren", level: 2 },
    { id: "audit-workflow", title: "Quartals-Audit Workflow", level: 2 },
    { id: "fehler-finden", title: "NAP-Fehler finden & korrigieren", level: 2 },
    { id: "tools", title: "Kostenlose Tools", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `${directories.length} Verzeichnisse in 5 Kategorien — priorisiert für DACH-Markt`,
    "Interaktive Checkliste mit Fortschrittsspeicherung im Browser",
    "Copy-ready Spreadsheet-Vorlage für Google Sheets / Excel",
    "NAP-Konsistenz ist der #1 Ranking-Faktor nach GBP-Optimierung",
    "Quartals-Audit-Workflow für nachhaltige Citation-Qualität",
  ];

  const faqItems = [
    { question: "Wie viele Citations brauche ich für ein gutes lokales Ranking?", answer: "Qualität schlägt Quantität. Die Top-10 wichtigsten Verzeichnisse (Google, Bing, Apple, Yelp, Gelbe Seiten, Das Örtliche + 3-4 branchenspezifische) sind wichtiger als 100 Einträge in Spam-Verzeichnissen. Für die meisten KMU reichen 15-25 hochwertige Citations." },
    { question: "Wie oft sollte ich meine Citations überprüfen?", answer: "Mindestens quartalsweise ein vollständiges Audit. Nach Adress- oder Telefon-Änderungen sofort alle Einträge aktualisieren. Tipp: Richte Google Alerts für deinen Firmennamen ein, um neue (unerwünschte) Einträge zu entdecken." },
    { question: "Was ist schlimmer: fehlende Citations oder falsche NAP-Daten?", answer: "Falsche NAP-Daten sind deutlich schlimmer. Inkonsistente Daten verwirren Google und schaden dem Ranking aktiv. Ein fehlender Eintrag schadet nicht — er nutzt nur nicht. Priorität: Erst bestehende Einträge korrigieren, dann neue anlegen." },
    { question: "Soll ich kostenpflichtige Citation-Tools nutzen?", answer: "Für 1-3 Standorte reicht manuelles Tracking mit dieser Vorlage. Ab 5+ Standorten lohnen sich Tools wie BrightLocal (ab 29$/Monat) oder Semrush Local (ab 40€/Monat) für automatisches Monitoring und Bulk-Updates." },
    { question: "Wie finde ich branchenspezifische Verzeichnisse?", answer: "Google deine Branche + Stadt + 'Verzeichnis' oder 'Branchenbuch'. Schau dir die Top-3 Konkurrenten an — wo sind sie gelistet? Tools wie Whitespark Local Citation Finder helfen zusätzlich, branchenrelevante Quellen zu finden." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Citation Trust & Accuracy Study", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Moz: Local Citations for SEO", url: "https://moz.com/learn/seo/local-citations", type: "article" as const },
    { title: "Google: Business Profile Help Center", url: "https://support.google.com/business/", type: "article" as const },
  ];

  const priorityStyle = (p: string) =>
    p === "kritisch" ? "text-destructive bg-destructive/10" :
    p === "hoch" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Citation Tracking Spreadsheet Template",
    description: `Systematisches Citation-Tracking mit ${directories.length} Verzeichnissen für den DACH-Markt.`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Master-NAP festlegen", text: "Definiere die exakten NAP-Daten als Referenz." },
      { "@type": "HowToStep", position: 2, name: "Essenzielle Verzeichnisse eintragen", text: "Google, Bing, Apple und Yelp als erste Priorität." },
      { "@type": "HowToStep", position: 3, name: "Allgemeine Verzeichnisse ergänzen", text: "DACH-spezifische Branchenbücher hinzufügen." },
      { "@type": "HowToStep", position: 4, name: "Branchenspezifische Einträge", text: "Relevante Fachverzeichnisse für deine Branche." },
      { "@type": "HowToStep", position: 5, name: "Quartals-Audit durchführen", text: "NAP-Konsistenz regelmäßig prüfen und korrigieren." },
    ],
  };

  const categoryGroups = Object.entries(
    directories.reduce<Record<string, CitationDirectory[]>>((acc, d) => {
      (acc[d.category] = acc[d.category] || []).push(d);
      return acc;
    }, {})
  );

  return (
    <ArticleLayout article={article} additionalSchema={jsonLd} faqItems={faqItems}>

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* Progress Bar */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Citation-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{directories.length} Verzeichnisse ({percentage}%)
              </span>
              <button onClick={resetAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors underline">
                Zurücksetzen
              </button>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
          </div>
        </CardContent>
      </Card>

      {/* Why Citation Tracking */}
      <section id="warum-tracking" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Warum Citation Tracking?</h2>
        <p className="text-muted-foreground mb-4">
          Citations (Nennungen deines Firmennamens, deiner Adresse und Telefonnummer in Online-Verzeichnissen) sind laut
          <strong className="text-foreground"> Whitespark 2024</strong> der <strong className="text-foreground">drittwichtigste Ranking-Faktor</strong> für
          das Local Pack. Aber: Inkonsistente NAP-Daten schaden mehr als fehlende Einträge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <Search className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Sichtbarkeit</p>
              <p className="text-sm text-muted-foreground mt-1">Mehr Verzeichnisse = mehr Touchpoints für Kunden und Suchmaschinen</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Vertrauen</p>
              <p className="text-sm text-muted-foreground mt-1">Konsistente Daten signalisieren Google: „Dieses Unternehmen ist real und verlässlich"</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Ranking</p>
              <p className="text-sm text-muted-foreground mt-1">Top-3 im Local Pack haben durchschnittlich 85% NAP-Konsistenz</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Master NAP */}
      <section id="master-nap" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Master-NAP festlegen</h2>
        <p className="text-muted-foreground mb-4">
          Bevor du Einträge anlegst oder prüfst, definiere deine <strong className="text-foreground">Master-NAP-Daten</strong> — die exakte Schreibweise,
          die in <em>jedem</em> Verzeichnis identisch sein muss.
        </p>
        <Card className="bg-muted/30 mb-6">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" /> Häufige NAP-Fehler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-destructive mb-1">❌ Falsch</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• „Bäckerei Müller GmbH" vs „Baeckerei Mueller"</li>
                  <li>• „Hauptstr. 5" vs „Hauptstraße 5"</li>
                  <li>• „089 12345678" vs „+49 89 12345678"</li>
                  <li>• „muellers-baeckerei.de" vs „www.muellers-baeckerei.de"</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-primary mb-1">✅ Richtig</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Immer exakt gleicher Firmenname</li>
                  <li>• Straße immer ausgeschrieben oder immer abgekürzt</li>
                  <li>• Einheitliches Telefon-Format (mit Vorwahl)</li>
                  <li>• URL immer mit oder ohne www</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Directory Checklist */}
      <section id="verzeichnis-checkliste" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Verzeichnis-Checkliste ({directories.length} Einträge)</h2>
        <p className="text-muted-foreground mb-6">
          Hake ab, wo du bereits eingetragen bist. Dein Fortschritt wird automatisch gespeichert.
        </p>

        {categoryGroups.map(([cat, dirs]) => {
          const catChecked = dirs.filter(d => checked.has(d.name)).length;
          const catComplete = catChecked === dirs.length;
          return (
            <div key={cat} className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {categoryLabel[cat] || cat}
                  <span className="text-sm font-normal text-muted-foreground ml-2">({catChecked}/{dirs.length})</span>
                </h3>
                {catComplete && (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">✓ Komplett</Badge>
                )}
              </div>
              <div className="space-y-2">
                {dirs.map(d => {
                  const isChecked = checked.has(d.name);
                  return (
                    <button
                      key={d.name}
                      onClick={() => toggle(d.name)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 text-left group ${
                        isChecked
                          ? 'bg-green-50 border-green-300 hover:bg-green-100'
                          : 'bg-card border-border hover:bg-muted/50 hover:border-primary/30'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${
                        isChecked ? 'bg-green-500 border-green-500' : 'border-muted-foreground/30 group-hover:border-primary/50'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-sm font-medium ${isChecked ? 'text-green-700 line-through' : 'text-foreground'}`}>
                            {d.name}
                          </span>
                          <a
                            href={d.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="text-xs text-primary hover:underline"
                          >
                            ↗ öffnen
                          </a>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{d.notes}</p>
                      </div>
                      <Badge variant="outline" className={`flex-shrink-0 text-xs ${priorityStyle(d.priority)}`}>
                        {d.priority.charAt(0).toUpperCase() + d.priority.slice(1)}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <BlogCTAABTest articleSlug="citation-tracking-template" position="middle" />

      {/* Copy Template */}
      <section id="template-kopieren" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Spreadsheet-Vorlage kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere diese Vorlage in Google Sheets, Excel oder Notion und tracke deine Citations systematisch.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Citation Tracking Template
              </h3>
              <Button onClick={copyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Template kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {napTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Audit Workflow */}
      <section id="audit-workflow" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quartals-Audit Workflow</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "NAP-Daten prüfen", desc: "Gehe jeden Eintrag durch und vergleiche mit deinen Master-NAP-Daten. Prüfe: Name exakt? Adresse identisch? Telefon gleich? Website korrekt?", icon: <Eye className="h-4 w-4 text-primary" /> },
            { step: "2", title: "Fehler korrigieren", desc: "Logge dich in jedes Verzeichnis ein und korrigiere abweichende Daten. Dokumentiere jede Korrektur in deinem Spreadsheet mit Datum.", icon: <AlertTriangle className="h-4 w-4 text-primary" /> },
            { step: "3", title: "Duplikate entfernen", desc: "Suche nach doppelten Einträgen (besonders nach Umzug oder Umbenennung). Beantrage Löschung oder Zusammenführung beim jeweiligen Verzeichnis.", icon: <Shield className="h-4 w-4 text-primary" /> },
            { step: "4", title: "Neue Quellen hinzufügen", desc: "Prüfe, ob es neue relevante Verzeichnisse gibt. Schaue bei Top-Konkurrenten — wo sind sie gelistet, du aber nicht?", icon: <Zap className="h-4 w-4 text-primary" /> },
            { step: "5", title: "Ergebnis dokumentieren", desc: "Trage Gesamtzahl der Einträge, NAP-Konsistenz-Quote und offene Punkte im Audit-Log ein. Setze Reminder für nächstes Quartal.", icon: <BarChart3 className="h-4 w-4 text-primary" /> },
          ].map(item => (
            <Card key={item.step}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{item.step}</span>
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Finding NAP Errors */}
      <section id="fehler-finden" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">NAP-Fehler finden & korrigieren</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">🔍 So findest du Fehler</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Google: „Firmenname" + „Stadt" suchen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Alte Telefonnummer googlen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Alte Adresse googlen (nach Umzug)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> BrightLocal Free Citation Check nutzen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Moz Local kostenlos scannen</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">🛠️ So korrigierst du Fehler</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Einloggen und selbst korrigieren</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Support kontaktieren bei gesperrten Einträgen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> „Änderung vorschlagen" bei Google Maps</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Duplikat-Entfernung beantragen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Alte Einträge deaktivieren lassen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Kostenlose Tools für Citation-Tracking</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tool</TableHead>
                <TableHead>Kosten</TableHead>
                <TableHead>Funktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "BrightLocal Free Citation Check", cost: "Kostenlos", fn: "Citations finden, NAP prüfen" },
                { name: "Moz Local Check", cost: "Kostenlos (Scan)", fn: "Lokale Sichtbarkeit & Listings prüfen" },
                { name: "Whitespark Citation Finder", cost: "Ab $17/Monat", fn: "Branchenspezifische Citation-Quellen finden" },
                { name: "Semrush Listing Management", cost: "Ab 40€/Monat", fn: "Automatisches NAP-Monitoring, Bulk-Updates" },
                { name: "Yext", cost: "Ab 199€/Jahr", fn: "Zentrale Steuerung vieler Verzeichnisse" },
              ].map(t => (
                <TableRow key={t.name}>
                  <TableCell className="font-medium">{t.name}</TableCell>
                  <TableCell className="text-sm">{t.cost}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{t.fn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">NAP-Konsistenz: Der komplette Guide</Link></li>
            <li>→ <Link to="/blog/local-citations-2025" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local Citations 2026: Was zählt wirklich</Link></li>
            <li>→ <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Audit Checkliste</Link></li>
            <li>→ <Link to="/blog/google-maps-audit-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Audit Template</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
            <li>→ <Link to="/citation-verzeichnisse" className="text-primary underline decoration-primary/30 hover:decoration-primary">Citation-Verzeichnisse Übersicht</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="citation-tracking-template" />
    </ArticleLayout>
  );
};

export default CitationTrackingTemplate;
