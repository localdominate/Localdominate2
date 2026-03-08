import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GoogleMapsRankingExplainer from "@/components/blog/GoogleMapsRankingExplainer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Copy, MapPin, Target, BarChart3, Search, Globe, Eye,
  AlertTriangle, Zap, TrendingUp, FileText, Clock, Star,
  CheckCircle2, Smartphone, Navigation, Grid3X3, Layers
} from "lucide-react";
import { toast } from "sonner";

const rankingTemplate = `GOOGLE MAPS RANKING TRACKER
============================
Unternehmen: [Name]
Stadt: [Stadt]
Mess-Standort: [PLZ / Koordinaten]
Aktualisierung: [Wöchentlich / Monatlich]

KEYWORD-RANKINGS:
─────────────────
| # | Keyword | Pack-Pos. | Org.-Pos. | Vormonat | Trend | Notizen |
|---|---------|-----------|-----------|----------|-------|---------|
| 1 | [branche] [stadt] | — | — | — | — | Haupt-Keyword |
| 2 | [branche] in der nähe | — | — | — | — | Near-Me |
| 3 | bester [branche] [stadt] | — | — | — | — | Reputation |
| 4 | [service 1] [stadt] | — | — | — | — | Service |
| 5 | [service 2] [stadt] | — | — | — | — | Service |
| 6 | [branche] [stadtteil] | — | — | — | — | Stadtteil |

GRID-TRACKING (Standortbasiert):
────────────────────────────────
Keyword: [Haupt-Keyword]
Radius: 5 km um Standort
Messzeitpunkt: [Datum]

  | NW | N  | NO |
  | W  | ★  | O  |
  | SW | S  | SO |

★ = Dein Standort
Trage in jede Zelle deine Maps-Position ein (1-20 oder —)

MONATLICHE ENTWICKLUNG:
──────────────────────
| Monat | Avg. Pack-Pos. | Im Pack? | GBP-Aufrufe | Aktionen | Bewertungen |
|-------|---------------|----------|-------------|----------|-------------|
| Jan   |               |          |             |          |             |
| Feb   |               |          |             |          |             |
| Mär   |               |          |             |          |             |
| Apr   |               |          |             |          |             |
| Mai   |               |          |             |          |             |
| Jun   |               |          |             |          |             |

WETTBEWERBER-VERGLEICH:
──────────────────────
| Keyword | Du | Konkurrent 1 | Konkurrent 2 | Konkurrent 3 |
|---------|-----|-------------|-------------|-------------|
| [kw 1]  |     |             |             |             |
| [kw 2]  |     |             |             |             |
| [kw 3]  |     |             |             |             |

RANKING-FAKTOREN-CHECK:
──────────────────────
☐ GBP vollständig optimiert
☐ NAP 100% konsistent
☐ Bewertungen > Konkurrenz
☐ Antwortrate 100%
☐ Regelmäßige Google Posts
☐ Website mobile-optimiert
☐ Schema Markup fehlerfrei
☐ Core Web Vitals bestanden`;

const GoogleMapsRankingTracker = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-ranking-tracker", language)!;

  const copyTemplate = () => {
    navigator.clipboard.writeText(rankingTemplate);
    toast.success("Ranking-Tracker Template in Zwischenablage kopiert!");
  };

  const tocItems = [
    { id: "warum-tracking", title: "Warum Maps-Rankings tracken?", level: 2 },
    { id: "herausforderungen", title: "Die Herausforderung: Lokale Rankings sind relativ", level: 2 },
    { id: "tracking-methoden", title: "4 Tracking-Methoden im Vergleich", level: 2 },
    { id: "grid-tracking", title: "Grid-Tracking erklärt", level: 2 },
    { id: "welche-keywords", title: "Welche Keywords tracken?", level: 2 },
    { id: "tools", title: "Tools für Maps Rank Tracking", level: 2 },
    { id: "template", title: "Ranking-Tracker Template", level: 2 },
    { id: "interpretation", title: "Rankings richtig interpretieren", level: 2 },
    { id: "aktionsplan", title: "Was tun bei Ranking-Verlust?", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Google Maps Rankings sind standortabhängig — gleiche Suche, anderer Ort, anderes Ergebnis",
    "Grid-Tracking zeigt deine Sichtbarkeit in einem geografischen Raster um deinen Standort",
    "Tracke Local Pack (Maps) und organische Rankings getrennt — sie haben verschiedene Faktoren",
    "5-10 Keywords reichen für die meisten KMU — Qualität vor Quantität",
    "Copy-ready Tracker-Template mit Keyword-, Grid-, Wettbewerber- und Monats-Tracking",
  ];

  const faqItems = [
    { question: "Warum zeigt mir Google Maps verschiedene Ergebnisse je nach Standort?", answer: "Google personalisiert Maps-Ergebnisse basierend auf dem Standort des Suchenden (Proximity-Faktor). Ein Zahnarzt in München-Schwabing rankt für Nutzer in Schwabing besser als für Nutzer in Pasing. Deshalb ist Grid-Tracking so wichtig — es zeigt deine Sichtbarkeit aus verschiedenen Richtungen." },
    { question: "Wie oft sollte ich meine Maps-Rankings prüfen?", answer: "Wöchentlich für deine Top-5-Keywords, monatlich für alle Keywords. Nach Google-Updates oder GBP-Änderungen sofort prüfen. Tipp: Immer am gleichen Wochentag und zur gleichen Uhrzeit messen, da Rankings leicht schwanken können." },
    { question: "Reicht die Google Search Console für lokales Ranking-Tracking?", answer: "Teilweise. Die GSC zeigt organische Rankings, aber keine Maps/Local-Pack-Positionen. Für vollständiges lokales Tracking brauchst du ein Tool, das Maps-Rankings separat misst (z.B. BrightLocal, LocalFalcon oder manuelles Grid-Tracking)." },
    { question: "Was ist der Unterschied zwischen Local Pack und organischen Rankings?", answer: "Das Local Pack sind die 3 Maps-Ergebnisse oben in der Suche — hauptsächlich beeinflusst durch GBP, Nähe, Bewertungen und NAP. Organische Rankings sind die normalen Website-Ergebnisse darunter — beeinflusst durch Website-SEO, Content und Backlinks. Beide brauchen unterschiedliche Strategien." },
    { question: "Mein Ranking schwankt täglich — ist das normal?", answer: "Ja, leichte Schwankungen (1-3 Positionen) sind normal. Google testet verschiedene Ergebnisse. Besorgniserregend wird es erst bei dauerhaften Verlusten über 2+ Wochen oder plötzlichem Verschwinden aus dem Local Pack. Dann systematisch die Ranking-Faktoren prüfen." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Google: How local results work", url: "https://support.google.com/business/answer/7091", type: "article" as const },
    { title: "BrightLocal: Local SEO Tools & Resources", url: "https://www.brightlocal.com/", type: "tool" as const },
    { title: "Moz: Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Google Maps Ranking Tracker – Konzept & Anleitung",
    description: "Wie lokale Unternehmen ihre Google Maps Rankings systematisch tracken, mit Grid-Tracking, Tool-Vergleich und kostenloser Vorlage.",
    author: { "@type": "Organization", name: "LocalDominate" },
  };

  return (
    <ArticleLayout article={article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* Why track */}
      <section id="warum-tracking" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Warum Maps-Rankings tracken?</h2>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">Das Local Pack (die 3 Maps-Ergebnisse) erhält 42% aller Klicks</strong> bei lokalen Suchen.
          Wenn du nicht weißt, wo du stehst, kannst du nicht gezielt optimieren. Ranking-Tracking ist die Grundlage für datengetriebenes Local SEO.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Fortschritt messen</p>
              <p className="text-sm text-muted-foreground mt-1">Sehe, ob deine Optimierungen tatsächlich Rankings verbessern</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Wettbewerber beobachten</p>
              <p className="text-sm text-muted-foreground mt-1">Erkenne, wenn Konkurrenten dich überholen — und reagiere sofort</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6 text-center">
              <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Probleme früh erkennen</p>
              <p className="text-sm text-muted-foreground mt-1">Ranking-Verluste sofort bemerken, bevor Umsatz verloren geht</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Challenge */}
      <section id="herausforderungen" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Die Herausforderung: Lokale Rankings sind relativ</h2>
        <p className="text-muted-foreground mb-4">
          Anders als bei normalem SEO gibt es bei Google Maps <strong className="text-foreground">kein festes Ranking</strong>.
          Deine Position hängt davon ab, <em>wo</em> der Suchende sich befindet:
        </p>
        <Card className="bg-muted/30 mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> Proximity-Effekt
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nutzer 500m entfernt → du bist #1</li>
                  <li>• Nutzer 3km entfernt → du bist #5</li>
                  <li>• Nutzer 10km entfernt → du bist nicht sichtbar</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" /> Konsequenz
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ein einzelner Ranking-Check reicht nicht</li>
                  <li>• Du brauchst Messungen von verschiedenen Standorten</li>
                  <li>• Grid-Tracking löst dieses Problem</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4 Methods */}
      <section id="tracking-methoden" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">4 Tracking-Methoden im Vergleich</h2>
        <div className="overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Methode</TableHead>
                <TableHead>Genauigkeit</TableHead>
                <TableHead>Aufwand</TableHead>
                <TableHead>Kosten</TableHead>
                <TableHead>Empfohlen für</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Manuell googlen</TableCell>
                <TableCell><Badge variant="outline" className="text-destructive bg-destructive/10">Niedrig</Badge></TableCell>
                <TableCell>Hoch</TableCell>
                <TableCell>Kostenlos</TableCell>
                <TableCell className="text-sm text-muted-foreground">Schnell-Check, nicht für Monitoring</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Google Search Console</TableCell>
                <TableCell><Badge variant="outline" className="text-primary bg-primary/10">Mittel</Badge></TableCell>
                <TableCell>Niedrig</TableCell>
                <TableCell>Kostenlos</TableCell>
                <TableCell className="text-sm text-muted-foreground">Organische Rankings (kein Maps Pack)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Punkt-basiertes Tracking</TableCell>
                <TableCell><Badge variant="outline" className="text-primary bg-primary/10">Mittel</Badge></TableCell>
                <TableCell>Niedrig</TableCell>
                <TableCell>Ab 29$/Monat</TableCell>
                <TableCell className="text-sm text-muted-foreground">KMU mit 1 Standort</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Grid-Tracking</TableCell>
                <TableCell><Badge variant="outline" className="text-green-700 bg-green-50">Hoch</Badge></TableCell>
                <TableCell>Niedrig (Tool)</TableCell>
                <TableCell>Ab 29$/Monat</TableCell>
                <TableCell className="text-sm text-muted-foreground">Beste Methode — zeigt gesamtes Einzugsgebiet</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Grid Tracking */}
      <section id="grid-tracking" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Grid-Tracking erklärt</h2>
        <p className="text-muted-foreground mb-4">
          Grid-Tracking (auch „Geo-Grid" oder „Heatmap Tracking") misst dein Maps-Ranking an
          <strong className="text-foreground"> vielen Punkten gleichzeitig</strong> in einem Raster um deinen Standort.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Grid3X3 className="h-4 w-4 text-primary" /> So funktioniert es
              </h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>Definiere einen Radius (z.B. 5 km) um deinen Standort</li>
                <li>Das Tool legt ein Raster mit Messpunkten darüber (z.B. 5×5 = 25 Punkte)</li>
                <li>An jedem Punkt wird dein Maps-Ranking für ein Keyword gemessen</li>
                <li>Das Ergebnis ist eine Heatmap deiner lokalen Sichtbarkeit</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" /> Was du daraus lernst
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">Stärkezonen:</strong> Wo rankst du im Top-3?</li>
                <li>• <strong className="text-foreground">Schwächezonen:</strong> Wo bist du unsichtbar?</li>
                <li>• <strong className="text-foreground">Reichweite:</strong> Wie weit reicht deine Sichtbarkeit?</li>
                <li>• <strong className="text-foreground">Wettbewerber:</strong> Wer dominiert in deinen Schwächezonen?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Visual Grid Example */}
        <Card className="bg-muted/30 mb-6">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-4 text-center">Beispiel: Grid-Ergebnis für „Zahnarzt München"</h3>
            <div className="max-w-xs mx-auto">
              <div className="grid grid-cols-5 gap-1 text-center text-xs font-mono">
                {[
                  [8, 5, 3, 4, 7],
                  [6, 3, 1, 2, 5],
                  [4, 2, "★", 1, 3],
                  [5, 3, 1, 2, 4],
                  [7, 5, 3, 4, 6],
                ].flat().map((val, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded font-semibold ${
                      val === "★" ? 'bg-primary text-primary-foreground' :
                      typeof val === 'number' && val <= 3 ? 'bg-green-100 text-green-800' :
                      typeof val === 'number' && val <= 5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-destructive/10 text-destructive'
                    }`}
                  >
                    {val}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-100 inline-block" /> Top 3</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-100 inline-block" /> Pos. 4-5</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-destructive/10 inline-block" /> Pos. 6+</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary inline-block" /> Standort</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Die Zahlen zeigen deine Maps-Position an jedem Messpunkt. Je niedriger, desto besser.
            </p>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest articleSlug="google-maps-ranking-tracker" position="middle" />

      {/* Which keywords */}
      <section id="welche-keywords" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Welche Keywords tracken?</h2>
        <p className="text-muted-foreground mb-4">
          Für die meisten KMU reichen <strong className="text-foreground">5-10 Keywords</strong>. Wähle eine Mischung aus:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">✅ Tracken</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> 2-3 Haupt-Keywords: [Branche] + [Stadt]</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> 1-2 Near-Me-Keywords: [Branche] in der Nähe</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> 2-3 Service-Keywords: [Spezial-Service] + [Stadt]</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> 1-2 Stadtteil-Keywords: [Branche] + [Stadtteil]</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">❌ Nicht tracken</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Generische Keywords ohne Standort</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Keywords mit 0 Suchvolumen</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> 50+ Keywords (unübersichtlich, teuer)</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Nur branded Keywords (eigener Name)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Tools für Maps Rank Tracking</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tool</TableHead>
                <TableHead>Grid-Tracking</TableHead>
                <TableHead>Preis</TableHead>
                <TableHead>Besonderheit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "LocalFalcon", grid: "✅ Ja", price: "Ab 29$/Monat", note: "Bestes Grid-Tracking, visuelle Heatmaps" },
                { name: "BrightLocal", grid: "✅ Ja", price: "Ab 39$/Monat", note: "All-in-One Local SEO Suite" },
                { name: "Local Viking", grid: "✅ Ja", price: "Ab 39$/Monat", note: "GBP-Posting + Rank Tracking" },
                { name: "Whitespark", grid: "✅ Ja", price: "Ab 33$/Monat", note: "Kanadischer Anbieter, starke Daten" },
                { name: "GeoRanker", grid: "✅ Ja", price: "Ab 29$/Monat", note: "Budget-freundlich" },
                { name: "Semrush Local", grid: "⚠️ Begrenzt", price: "Ab 40€/Monat", note: "Teil der Semrush-Suite" },
                { name: "Google Search Console", grid: "❌ Nein", price: "Kostenlos", note: "Nur organisch, kein Maps Pack" },
              ].map(t => (
                <TableRow key={t.name}>
                  <TableCell className="font-medium">{t.name}</TableCell>
                  <TableCell>{t.grid}</TableCell>
                  <TableCell className="text-sm">{t.price}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{t.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Template */}
      <section id="template" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Ranking-Tracker Template</h2>
        <p className="text-muted-foreground mb-4">
          Nutze diese Vorlage als Basis — ob in Google Sheets, Excel oder deinem Projektmanagement-Tool.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Google Maps Ranking Tracker
              </h3>
              <Button onClick={copyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Template kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {rankingTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Interpretation */}
      <section id="interpretation" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Rankings richtig interpretieren</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-2">🟢 Position 1-3 (Local Pack)</h3>
              <p className="text-sm text-muted-foreground">
                Du bist in den Top-3 Maps-Ergebnissen sichtbar. <strong className="text-foreground">Das ist das Ziel.</strong> Fokus: Position halten durch
                regelmäßige Posts, Bewertungen und Content. Tracke wöchentlich, um Veränderungen sofort zu bemerken.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-2">🟡 Position 4-10</h3>
              <p className="text-sm text-muted-foreground">
                Du bist in der erweiterten Maps-Liste, aber nicht im sichtbaren 3er-Pack. <strong className="text-foreground">Nahe am Durchbruch.</strong> Fokus:
                Bewertungsanzahl steigern, GBP vollständig optimieren, Citations prüfen. Oft reichen 2-3 Optimierungen für den Sprung in die Top-3.
              </p>
            </CardContent>
          </Card>
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-2">🔴 Position 11+ oder nicht sichtbar</h3>
              <p className="text-sm text-muted-foreground">
                Du bist praktisch unsichtbar auf Google Maps. <strong className="text-foreground">Grundlegende Optimierung nötig.</strong> Starte mit dem
                Google Maps Audit: GBP verifizieren, primäre Kategorie prüfen, NAP-Konsistenz sicherstellen, erste Bewertungen sammeln.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Action plan for ranking loss */}
      <section id="aktionsplan" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Was tun bei Ranking-Verlust?</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Ruhe bewahren", desc: "Tägliche Schwankungen (1-3 Positionen) sind normal. Erst bei Verlusten über 2+ Wochen handeln." },
            { step: "2", title: "GBP prüfen", desc: "Profil suspendiert? Bewertung gelöscht? Kategorie geändert? Öffnungszeiten falsch? Häufigste Ursache für plötzliche Verluste." },
            { step: "3", title: "Google Updates prüfen", desc: "Gab es ein Core Update oder Local Update? Google Search Central Blog und SEO-Foren checken." },
            { step: "4", title: "Wettbewerber analysieren", desc: "Hat ein Konkurrent aufgeholt? Neue Bewertungen, bessere Website, mehr Content?" },
            { step: "5", title: "NAP-Audit durchführen", desc: "Sind alle Verzeichnisse noch korrekt? Besonders nach Adress- oder Telefon-Änderungen." },
            { step: "6", title: "Technische Checks", desc: "Website erreichbar? SSL gültig? Core Web Vitals bestanden? Schema Markup fehlerfrei?" },
          ].map(item => (
            <Card key={item.step}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{item.step}</span>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground ml-8">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/google-maps-ranking-verbessern" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking verbessern</Link></li>
            <li>→ <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking-Faktoren erklärt</Link></li>
            <li>→ <Link to="/blog/google-maps-audit-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Audit Template</Link></li>
            <li>→ <Link to="/blog/ranking-ploetzlich-verschwunden" className="text-primary underline decoration-primary/30 hover:decoration-primary">Ranking plötzlich verschwunden — was tun?</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
            <li>→ <Link to="/blog/google-maps-konkurrenzanalyse" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Konkurrenzanalyse</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="google-maps-ranking-tracker" />
    </ArticleLayout>
  );
};

export default GoogleMapsRankingTracker;
