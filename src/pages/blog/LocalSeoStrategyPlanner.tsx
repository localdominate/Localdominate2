import CompetitiveAnalysisFramework from "@/components/blog/CompetitiveAnalysisFramework";
import type { CompetitiveFrameworkData } from "@/components/blog/CompetitiveAnalysisFramework";
import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Copy, CheckCircle2, Target, Calendar, MapPin, Star,
  Globe, Search, FileText, BarChart3, Zap, Eye, Clock,
  Building2, TrendingUp, AlertTriangle, Users, Lightbulb,
  ArrowRight, Shield, LinkIcon
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "local-seo-strategy-planner-progress";

interface PlannerPhase {
  id: string;
  title: string;
  icon: React.ReactNode;
  timeline: string;
  description: string;
  tasks: { text: string; priority: "kritisch" | "hoch" | "mittel" }[];
}

const phases: PlannerPhase[] = [
  {
    id: "analyse",
    title: "Phase 1: Analyse & Audit",
    icon: <Search className="h-5 w-5 text-primary" />,
    timeline: "Woche 1-2",
    description: "Ist-Zustand erfassen, Wettbewerber analysieren, Chancen identifizieren.",
    tasks: [
      { text: "Google Business Profil vollständig auditieren", priority: "kritisch" },
      { text: "Website auf lokale SEO-Grundlagen prüfen (NAP, Schema, Speed)", priority: "kritisch" },
      { text: "Keyword-Recherche: 10-15 lokale Ziel-Keywords definieren", priority: "kritisch" },
      { text: "Top-5 Wettbewerber im Local Pack analysieren", priority: "hoch" },
      { text: "Bestehende Citations & NAP-Konsistenz prüfen", priority: "hoch" },
      { text: "Bewertungs-Situation bewerten (Anzahl, Durchschnitt, Antwortrate)", priority: "hoch" },
      { text: "Baseline-Rankings dokumentieren (Local Pack + organisch)", priority: "hoch" },
      { text: "SWOT-Analyse: Stärken, Schwächen, Chancen, Risiken", priority: "mittel" },
    ],
  },
  {
    id: "fundament",
    title: "Phase 2: Fundament legen",
    icon: <Building2 className="h-5 w-5 text-primary" />,
    timeline: "Woche 2-4",
    description: "Die technische und inhaltliche Basis für lokale Sichtbarkeit schaffen.",
    tasks: [
      { text: "GBP vollständig optimieren (Kategorien, Beschreibung, Fotos)", priority: "kritisch" },
      { text: "NAP auf Website prominent platzieren (Footer, Kontakt)", priority: "kritisch" },
      { text: "LocalBusiness Schema Markup implementieren", priority: "hoch" },
      { text: "Mobile Performance optimieren (< 3 Sek. Ladezeit)", priority: "hoch" },
      { text: "SSL-Zertifikat & HTTPS sicherstellen", priority: "kritisch" },
      { text: "Google Search Console & Analytics einrichten", priority: "hoch" },
      { text: "Google Maps Embed auf Kontaktseite einbinden", priority: "mittel" },
      { text: "Title Tags & Meta Descriptions mit lokalen Keywords versehen", priority: "hoch" },
    ],
  },
  {
    id: "citations",
    title: "Phase 3: Citations & Verzeichnisse",
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    timeline: "Woche 3-6",
    description: "Konsistente Präsenz in den wichtigsten Verzeichnissen aufbauen.",
    tasks: [
      { text: "Google Business Profil verifizieren (falls nicht geschehen)", priority: "kritisch" },
      { text: "Bing Places einrichten", priority: "hoch" },
      { text: "Apple Business Connect einrichten", priority: "hoch" },
      { text: "Top-5 allgemeine Verzeichnisse eintragen (Gelbe Seiten etc.)", priority: "hoch" },
      { text: "3-5 branchenspezifische Verzeichnisse eintragen", priority: "mittel" },
      { text: "Social-Media-Profile mit korrektem NAP anlegen/aktualisieren", priority: "mittel" },
      { text: "Duplikate in Verzeichnissen suchen und entfernen", priority: "hoch" },
    ],
  },
  {
    id: "bewertungen",
    title: "Phase 4: Bewertungs-Strategie",
    icon: <Star className="h-5 w-5 text-primary" />,
    timeline: "Woche 4-8 (fortlaufend)",
    description: "Systematisch Bewertungen sammeln und professionell managen.",
    tasks: [
      { text: "Bewertungs-Link erstellen und testen", priority: "hoch" },
      { text: "Bewertungs-Anfrage-Workflow definieren (wann, wie, wer)", priority: "hoch" },
      { text: "Antwort-Templates für positive Bewertungen erstellen", priority: "mittel" },
      { text: "Antwort-Templates für negative Bewertungen erstellen", priority: "hoch" },
      { text: "Erste 5 Bewertungen von bestehenden Kunden anfragen", priority: "kritisch" },
      { text: "QR-Code / NFC-Tag für Bewertungen im Geschäft aufstellen", priority: "mittel" },
      { text: "Review-Schema auf Website implementieren", priority: "mittel" },
    ],
  },
  {
    id: "content",
    title: "Phase 5: Content-Strategie",
    icon: <FileText className="h-5 w-5 text-primary" />,
    timeline: "Woche 6-12 (fortlaufend)",
    description: "Lokalen Content erstellen, der Rankings stärkt und Kunden gewinnt.",
    tasks: [
      { text: "Lokale Landingpages für Top-Services erstellen", priority: "hoch" },
      { text: "Stadtteil-/Einzugsgebiet-Seiten planen (nur mit echtem Content)", priority: "mittel" },
      { text: "Blog-Content-Kalender für 3 Monate erstellen", priority: "hoch" },
      { text: "FAQ-Seite mit lokalen Fragen anlegen", priority: "mittel" },
      { text: "Google Posts-Kalender erstellen (mind. 2x/Monat)", priority: "hoch" },
      { text: "Lokale Case Studies / Referenzen veröffentlichen", priority: "mittel" },
      { text: "Bildoptimierung: Geo-Tags, Alt-Texte, lokale Dateinamen", priority: "mittel" },
    ],
  },
  {
    id: "linkbuilding",
    title: "Phase 6: Lokales Linkbuilding",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    timeline: "Monat 2-3 (fortlaufend)",
    description: "Lokale Autorität durch qualitative Backlinks aufbauen.",
    tasks: [
      { text: "Lokale Vereine, Verbände und Kammern für Verlinkung kontaktieren", priority: "hoch" },
      { text: "Lokale Sponsoring-Möglichkeiten prüfen (Events, Vereine)", priority: "mittel" },
      { text: "Gastbeiträge für lokale Blogs / Medien anbieten", priority: "mittel" },
      { text: "Pressearbeit: Lokale Story-Ideen an Medien pitchen", priority: "mittel" },
      { text: "Partnerschaften mit komplementären lokalen Unternehmen", priority: "mittel" },
      { text: "Broken-Link-Analyse bei lokalen Websites", priority: "mittel" },
    ],
  },
  {
    id: "tracking",
    title: "Phase 7: Tracking & Optimierung",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    timeline: "Fortlaufend (monatlich)",
    description: "Ergebnisse messen, analysieren und die Strategie kontinuierlich verbessern.",
    tasks: [
      { text: "Ranking-Tracker einrichten (Local Pack + organisch)", priority: "hoch" },
      { text: "Monatliches Reporting-Template einrichten", priority: "hoch" },
      { text: "KPIs definieren: Rankings, GBP-Aufrufe, Anrufe, Bewertungen", priority: "hoch" },
      { text: "Quartals-Review: Strategie anpassen basierend auf Daten", priority: "mittel" },
      { text: "A/B-Tests für GBP-Beschreibung, Fotos, Posts", priority: "mittel" },
      { text: "Wettbewerber-Monitoring monatlich durchführen", priority: "mittel" },
    ],
  },
];

const totalTasks = phases.reduce((sum, p) => sum + p.tasks.length, 0);

const strategyTemplate = `LOCAL SEO STRATEGY PLANNER
==========================
Unternehmen: [Name]
Branche: [Branche]
Stadt / Region: [Stadt]
Startdatum: [TT.MM.JJJJ]
Verantwortlich: [Name / Agentur]

ZIELE (SMART):
──────────────
1. Top-3 Local Pack für "[Branche] [Stadt]" innerhalb von 3 Monaten
2. 20+ Google-Bewertungen mit Ø 4,5+ Sternen innerhalb von 6 Monaten
3. 50% mehr Website-Besucher aus lokaler Suche innerhalb von 6 Monaten
4. [Eigenes Ziel]

ZIEL-KEYWORDS:
──────────────
| # | Keyword | Suchvolumen | Aktuelle Pos. | Ziel-Pos. | Zielseite |
|---|---------|-------------|---------------|-----------|-----------|
| 1 | [branche] [stadt] | XXX | — | Top 3 | Startseite |
| 2 | [service] [stadt] | XXX | — | Top 5 | /service |
| 3 | [branche] in der nähe | XXX | — | Top 3 | Startseite |
| 4 | bester [branche] [stadt] | XXX | — | Top 5 | Startseite |
| 5 | [Keyword] | XXX | — | — | — |

90-TAGE AKTIONSPLAN:
───────────────────
WOCHE 1-2: ANALYSE & AUDIT
☐ GBP auditieren
☐ Website-Check (NAP, Schema, Speed)
☐ Keyword-Recherche
☐ Wettbewerber-Analyse
☐ Baseline-Rankings dokumentieren

WOCHE 2-4: FUNDAMENT
☐ GBP optimieren
☐ NAP auf Website
☐ Schema Markup
☐ Mobile Performance
☐ Search Console + Analytics

WOCHE 3-6: CITATIONS
☐ Top-Verzeichnisse eintragen
☐ Branchenverzeichnisse
☐ Duplikate entfernen
☐ Social Media NAP

WOCHE 4-8: BEWERTUNGEN
☐ Bewertungs-Workflow definieren
☐ Erste 5 Bewertungen sammeln
☐ Antwort-Templates erstellen
☐ QR-Code / NFC aufstellen

WOCHE 6-12: CONTENT
☐ Lokale Landingpages
☐ Blog-Kalender (3 Monate)
☐ Google Posts (2x/Monat)
☐ FAQ-Seite erstellen

MONAT 2-3: LINKBUILDING
☐ Lokale Verlinkungen anfragen
☐ Sponsoring prüfen
☐ Pressearbeit starten

FORTLAUFEND: TRACKING
☐ Ranking-Tracker einrichten
☐ Monatliches Reporting
☐ Quartals-Review

BUDGET-PLANUNG:
──────────────
| Posten | Monatlich | Einmalig | Notizen |
|--------|----------|---------|---------|
| Tools (Tracking etc.) | €XX | — | |
| Content-Erstellung | €XX | — | |
| Fotografie | — | €XX | Geo-getaggt |
| Verzeichnis-Einträge | — | €XX | Einmalig |
| Linkbuilding | €XX | — | |
| GESAMT | €XX | €XX | |

MEILENSTEINE:
────────────
| Datum | Meilenstein | Status |
|-------|-------------|--------|
| +2 Wochen | Audit abgeschlossen | ⬜ |
| +4 Wochen | GBP + Website optimiert | ⬜ |
| +6 Wochen | Citations aufgebaut | ⬜ |
| +8 Wochen | 10+ Bewertungen | ⬜ |
| +12 Wochen | Top-5 für Haupt-Keyword | ⬜ |
| +6 Monate | Top-3 Local Pack | ⬜ |`;

const LocalSeoStrategyPlanner = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-strategy-planner", language)!;

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
    toast.success("Strategie-Planner zurückgesetzt");
  };

  const copyTemplate = () => {
    navigator.clipboard.writeText(strategyTemplate);
    toast.success("Strategy Planner Template kopiert!");
  };

  const percentage = Math.round((checked.size / totalTasks) * 100);

  const priorityStyle = (p: string) =>
    p === "kritisch" ? "text-destructive bg-destructive/10" :
    p === "hoch" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const tocItems = [
    { id: "ueberblick", title: "Überblick: 7-Phasen-Strategie", level: 2 },
    ...phases.map(p => ({ id: p.id, title: p.title, level: 2 })),
    { id: "timeline", title: "90-Tage Timeline", level: 2 },
    { id: "template", title: "Strategy Planner kopieren", level: 2 },
    { id: "budget", title: "Budget-Rahmen für KMU", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `7 Phasen mit ${totalTasks} Aufgaben — vom Audit bis zum laufenden Tracking`,
    "90-Tage-Plan: Realistische Timeline mit klaren Meilensteinen",
    "Copy-ready Strategy Planner mit Zielen, Keywords, Budget und Meilensteinen",
    "Priorisierung: Kritische Fundament-Aufgaben vor Content und Linkbuilding",
    "Geeignet für KMU mit 1-5 Standorten, anpassbar für jede Branche",
  ];

  const faqItems = [
    { question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?", answer: "Erste Verbesserungen (GBP-Aufrufe, Impressions) nach 2-4 Wochen. Ranking-Verbesserungen im Local Pack nach 4-12 Wochen. Stabile Top-3 Positionen typischerweise nach 3-6 Monaten — abhängig von Wettbewerb und Branche. Die schnellsten Wins kommen durch GBP-Optimierung und erste Bewertungen." },
    { question: "Kann ich die Strategie selbst umsetzen oder brauche ich eine Agentur?", answer: "Die Phasen 1-4 (Audit, Fundament, Citations, Bewertungen) können die meisten Unternehmer selbst umsetzen. Für technisches SEO (Schema Markup, Core Web Vitals), Content-Erstellung und Linkbuilding ist Fachwissen hilfreich. Ein Hybrid-Ansatz (Basics selbst + Agentur für Technik/Content) ist oft das beste Preis-Leistungs-Verhältnis." },
    { question: "Welches Budget brauche ich für Local SEO?", answer: "Minimal-Budget (DIY): 0-100€/Monat für Tools. Mittleres Budget: 300-800€/Monat für Tools + Teil-Agentur. Premium: 1.000-3.000€/Monat für Full-Service. Der ROI ist typischerweise 3-10x innerhalb von 6-12 Monaten bei konsequenter Umsetzung." },
    { question: "Was sind die häufigsten Fehler bei der Local-SEO-Strategie?", answer: "1) Zu viel auf einmal starten (Fokus verlieren). 2) GBP-Optimierung überspringen und direkt mit Content beginnen. 3) Bewertungen ignorieren. 4) NAP-Inkonsistenzen nicht beheben. 5) Keine Baseline-Rankings dokumentieren (Erfolg nicht messbar). 6) Nach 4 Wochen aufgeben, weil 'nichts passiert'." },
    { question: "Wie passe ich den Plan an meine Branche an?", answer: "Die 7 Phasen gelten für jede Branche. Unterschiede: Gastro braucht mehr Fotos und Bewertungen. Handwerker brauchen Service-Area-Seiten statt Standort-Seiten. Ärzte/Anwälte brauchen E-E-A-T-Signale. Passe die Keyword-Recherche und Content-Strategie an deine Branche an — die Tools & Templates bleiben gleich." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Local Marketing ROI Study", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Google: Business Profile Best Practices", url: "https://support.google.com/business/answer/7091", type: "article" as const },
    { title: "Moz: The Essential Local SEO Strategy Guide", url: "https://moz.com/learn/seo/local", type: "article" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Local SEO Strategy Planner – 7-Phasen-Plan",
    description: `Systematischer Local SEO Strategieplan mit ${totalTasks} Aufgaben in 7 Phasen und 90-Tage-Timeline.`,
    totalTime: "P90D",
    step: phases.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
      text: p.description,
    })),
  };

  return (
    <ArticleLayout article={article} additionalSchema={jsonLd} faqItems={faqItems}>

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* Competitive Analysis Framework */}
      <CompetitiveAnalysisFramework data={{
        competitors: [
          { name: "Dein Unternehmen", isYou: true, reviews: 12, rating: 4.2, citations: 15, gbpComplete: 65, backlinks: 20, responseRate: 50, photos: 5, postsPerMonth: 0 },
          { name: "Konkurrent A", reviews: 85, rating: 4.6, citations: 45, gbpComplete: 95, backlinks: 120, responseRate: 90, photos: 35, postsPerMonth: 4 },
          { name: "Konkurrent B", reviews: 60, rating: 4.4, citations: 38, gbpComplete: 85, backlinks: 80, responseRate: 75, photos: 22, postsPerMonth: 2 },
          { name: "Konkurrent C", reviews: 35, rating: 4.3, citations: 30, gbpComplete: 70, backlinks: 50, responseRate: 60, photos: 15, postsPerMonth: 1 },
        ],
        swot: {
          strengths: [
            { text: "Echte lokale Verwurzelung und Stammkunden-Basis" },
            { text: "Flexibilität bei Öffnungszeiten und Service" },
            { text: "Persönlicher Kundenkontakt = authentische Bewertungen" },
          ],
          weaknesses: [
            { text: "Wenige Bewertungen im Vergleich zu Top-Konkurrenten" },
            { text: "GBP-Profil unvollständig (65%)" },
            { text: "Keine regelmäßigen Google Posts" },
          ],
          opportunities: [
            { text: "Konkurrent C hat ähnlich wenige Backlinks — überholbar" },
            { text: "Kein Konkurrent nutzt Video-Content im GBP" },
            { text: "Bewertungs-Lücke durch aktive Strategie schließbar (12 → 50 in 6 Monaten)" },
          ],
          threats: [
            { text: "Konkurrent A investiert aktiv in Content und Linkbuilding" },
            { text: "Neue Filialisten / Franchises im Einzugsgebiet" },
            { text: "Google-Algorithmus-Updates können Karten neu mischen" },
          ],
        },
        insight: "Fokussiere die ersten 4 Wochen auf GBP-Vollständigkeit (65% → 100%) und Bewertungen. Diese Quick-Wins schließen die größten Lücken zu Konkurrent B und C. Backlinks und Content folgen in Phase 5-6.",
      }} />

      {/* Progress */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Strategie-Fortschritt</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {checked.size}/{totalTasks} Aufgaben ({percentage}%)
              </span>
              <button onClick={resetAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors underline">
                Zurücksetzen
              </button>
            </div>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
          </div>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive inline-block" /> Kritisch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block" /> Hoch</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" /> Mittel</span>
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <section id="ueberblick" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Überblick: 7-Phasen-Strategie</h2>
        <p className="text-muted-foreground mb-6">
          Dieser Strategie-Planner führt dich in <strong className="text-foreground">7 aufeinander aufbauenden Phasen</strong> von
          der Analyse bis zum laufenden Tracking. Jede Phase hat klare Aufgaben, Zeitrahmen und Prioritäten —
          so verlierst du nie den Fokus.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {phases.map(p => {
            const pChecked = p.tasks.filter((_, i) => checked.has(`${p.id}-${i}`)).length;
            const pComplete = pChecked === p.tasks.length;
            return (
              <a key={p.id} href={`#${p.id}`} className="block">
                <Card className={`text-center p-3 hover:border-primary/40 transition-colors ${pComplete ? 'border-green-300 bg-green-50' : ''}`}>
                  <div className="flex justify-center mb-1">{p.icon}</div>
                  <p className="text-xs font-medium text-foreground leading-tight">{p.title.replace(/^Phase \d+: /, '')}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pChecked}/{p.tasks.length}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Quick timeline bar */}
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> 90-Tage Übersicht
            </h3>
            <div className="space-y-2">
              {phases.map(p => (
                <div key={p.id} className="flex items-center gap-3 text-sm">
                  <span className="w-24 text-xs text-muted-foreground shrink-0">{p.timeline}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 rounded-full" style={{
                      width: `${(p.tasks.filter((_, i) => checked.has(`${p.id}-${i}`)).length / p.tasks.length) * 100}%`
                    }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-16 text-right shrink-0">{p.title.replace(/^Phase \d+: /, '')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Phase sections */}
      {phases.map((phase, phaseIdx) => {
        const pChecked = phase.tasks.filter((_, i) => checked.has(`${phase.id}-${i}`)).length;
        const pComplete = pChecked === phase.tasks.length;

        return (
          <section key={phase.id} id={phase.id} className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {phase.icon} {phase.title}
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" /> {phase.timeline}
                </Badge>
                {pComplete && (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">✓ Komplett</Badge>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>

            <div className="space-y-2">
              {phase.tasks.map((task, i) => {
                const key = `${phase.id}-${i}`;
                const isChecked = checked.has(key);
                return (
                  <button
                    key={key}
                    onClick={() => toggle(key)}
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
                    <span className={`flex-1 text-sm ${isChecked ? 'text-green-700 line-through' : 'text-foreground'}`}>
                      {task.text}
                    </span>
                    <Badge variant="outline" className={`flex-shrink-0 text-xs ${priorityStyle(task.priority)}`}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <BlogCTAABTest articleSlug="local-seo-strategy-planner" position="middle" />

      {/* Timeline visual */}
      <section id="timeline" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">90-Tage Timeline</h2>
        <div className="space-y-4">
          {[
            { period: "Woche 1-2", label: "Quick Wins", desc: "Audit, GBP optimieren, NAP fixieren. Erste sichtbare Verbesserungen in GBP Insights.", color: "border-destructive/30 bg-destructive/5" },
            { period: "Woche 3-6", label: "Basis aufbauen", desc: "Citations, Schema Markup, erste Bewertungen. Google beginnt neue Signale zu verarbeiten.", color: "border-primary/30 bg-primary/5" },
            { period: "Woche 6-12", label: "Wachstum", desc: "Content-Strategie, Linkbuilding, regelmäßige Posts. Rankings verbessern sich kontinuierlich.", color: "border-green-300 bg-green-50" },
            { period: "Ab Monat 4", label: "Skalieren & Optimieren", desc: "Datenbasiert optimieren, Strategie verfeinern, Wettbewerber überholen. Top-3 Local Pack anstreben.", color: "border-primary/30 bg-primary/5" },
          ].map(item => (
            <Card key={item.period} className={item.color}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="shrink-0 text-xs">{item.period}</Badge>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Template */}
      <section id="template" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Strategy Planner kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere den vollständigen Strategieplan inkl. Zielen, Keywords, 90-Tage-Aktionsplan, Budget und Meilensteinen.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Local SEO Strategy Planner
              </h3>
              <Button onClick={copyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Template kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {strategyTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Budget */}
      <section id="budget" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Budget-Rahmen für KMU</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-foreground mb-1">DIY</p>
              <p className="text-lg font-semibold text-primary mb-2">0-100€/Monat</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Eigene Umsetzung mit Templates</li>
                <li>• Kostenlose Tools (GSC, GA4)</li>
                <li>• 5-10 Stunden/Monat Zeitaufwand</li>
                <li>• Ideal für 1 Standort</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="pt-6 text-center">
              <Badge className="mb-2 bg-primary text-primary-foreground">Empfohlen</Badge>
              <p className="text-2xl font-bold text-foreground mb-1">Hybrid</p>
              <p className="text-lg font-semibold text-primary mb-2">300-800€/Monat</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Basics selbst, Technik/Content extern</li>
                <li>• Premium-Tools inklusive</li>
                <li>• 2-4 Stunden/Monat eigener Aufwand</li>
                <li>• Ideal für 1-3 Standorte</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-foreground mb-1">Full-Service</p>
              <p className="text-lg font-semibold text-primary mb-2">1.000-3.000€/Monat</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Komplette Agentur-Betreuung</li>
                <li>• Content, Technik, Linkbuilding</li>
                <li>• Monatliches Reporting inklusive</li>
                <li>• Ideal für 3+ Standorte</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scoring */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" /> Dein Strategie-Fortschritt
          </h3>
          <div className="flex items-center gap-4">
            <span className={`text-4xl font-bold ${
              percentage >= 80 ? 'text-green-700' : percentage >= 50 ? 'text-primary' : 'text-destructive'
            }`}>{percentage}%</span>
            <div className="text-sm text-muted-foreground">
              <p>{checked.size} von {totalTasks} Aufgaben umgesetzt</p>
              <p className="mt-1">
                {percentage >= 80 ? '🎉 Ausgezeichnet! Deine Local-SEO-Strategie ist umfassend umgesetzt.' :
                 percentage >= 50 ? '💪 Gute Basis! Fokussiere auf die verbleibenden kritischen Punkte.' :
                 '🚀 Starte mit Phase 1 und 2 — das Fundament ist der wichtigste Schritt.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Strategie für kleine Unternehmen</Link></li>
            <li>→ <Link to="/blog/local-seo-checkliste-komplett" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Checkliste: 80+ Punkte</Link></li>
            <li>→ <Link to="/blog/local-seo-monthly-checklist" className="text-primary underline decoration-primary/30 hover:decoration-primary">Monatliche Local SEO Checkliste</Link></li>
            <li>→ <Link to="/blog/local-keyword-research-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local Keyword Research Template</Link></li>
            <li>→ <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Reporting Template</Link></li>
            <li>→ <Link to="/blog/google-maps-ranking-tracker" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking Tracker</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="local-seo-strategy-planner" />
    </ArticleLayout>
  );
};

export default LocalSeoStrategyPlanner;
