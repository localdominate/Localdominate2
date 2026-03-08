import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import ContentUpgradeSection from "@/components/blog/ContentUpgradeSection";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import { contentUpgradeConfigs } from "@/data/contentUpgradeData";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Copy, CheckCircle2, Bot, Sparkles, Eye, FileText, Target,
  Clock, Globe, Search, Mic, MessageSquare, Shield, Code,
  BookOpen, Zap, Star, BarChart3, Link as LinkIcon
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "ai-visibility-checklist-progress";

interface ChecklistTask {
  text: string;
  priority: "kritisch" | "hoch" | "mittel";
  timeEstimate: string;
  aiImpact: "sehr hoch" | "hoch" | "mittel";
}

interface ChecklistSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: ChecklistTask[];
}

const sections: ChecklistSection[] = [
  {
    id: "structured-data",
    title: "Strukturierte Daten & Schema Markup",
    icon: <Code className="h-5 w-5 text-primary" />,
    description: "Schema Markup ist die Sprache, die AI-Systeme am besten verstehen. Ohne strukturierte Daten bist du für AI Overviews praktisch unsichtbar.",
    tasks: [
      { text: "LocalBusiness Schema implementiert mit allen Pflichtfeldern (Name, Adresse, Telefon, Öffnungszeiten)", priority: "kritisch", timeEstimate: "30 Min", aiImpact: "sehr hoch" },
      { text: "FAQPage Schema auf allen Seiten mit FAQ-Bereichen", priority: "hoch", timeEstimate: "20 Min", aiImpact: "sehr hoch" },
      { text: "Review/AggregateRating Schema für Bewertungen implementiert", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Article Schema mit author, datePublished, dateModified auf Blog-Seiten", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Speakable Schema auf den wichtigsten Absätzen markiert", priority: "mittel", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "HowTo Schema auf Anleitungs-Seiten implementiert", priority: "mittel", timeEstimate: "15 Min", aiImpact: "mittel" },
      { text: "BreadcrumbList Schema für Navigation implementiert", priority: "mittel", timeEstimate: "10 Min", aiImpact: "mittel" },
      { text: "Schema Markup fehlerfrei validiert (Rich Results Test)", priority: "kritisch", timeEstimate: "10 Min", aiImpact: "sehr hoch" },
    ],
  },
  {
    id: "content-structure",
    title: "Content-Struktur für AI-Extraktion",
    icon: <FileText className="h-5 w-5 text-primary" />,
    description: "AI-Systeme extrahieren Inhalte basierend auf Klarheit, Struktur und Informationsdichte. Dein Content muss 'zitierbar' sein.",
    tasks: [
      { text: "Jede Seite hat eine klare, faktische Definition im ersten Absatz", priority: "kritisch", timeEstimate: "15 Min", aiImpact: "sehr hoch" },
      { text: "Klare H2/H3-Hierarchie mit aussagekräftigen Überschriften", priority: "hoch", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "Kurze, eigenständige Absätze (2-3 Sätze), die als Snippet extrahierbar sind", priority: "hoch", timeEstimate: "30 Min", aiImpact: "sehr hoch" },
      { text: "Nummerierte Listen und Schritt-für-Schritt-Anleitungen vorhanden", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Vergleichstabellen mit klaren Kategorien und Daten", priority: "mittel", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "Statistiken und Zahlen mit Quellenangaben und Jahreszahl inline", priority: "hoch", timeEstimate: "15 Min", aiImpact: "sehr hoch" },
      { text: "Eindeutige Frage-Antwort-Paare auf der Seite (nicht nur im FAQ)", priority: "mittel", timeEstimate: "20 Min", aiImpact: "hoch" },
    ],
  },
  {
    id: "eeat-signals",
    title: "E-E-A-T Signale für AI-Vertrauen",
    icon: <Shield className="h-5 w-5 text-primary" />,
    description: "AI-Systeme bewerten Autorität und Vertrauenswürdigkeit als Hauptfaktor für Zitierungen. E-E-A-T ist der Schlüssel zur AI-Sichtbarkeit.",
    tasks: [
      { text: "Autoreninfo mit Name, Qualifikation und Link zu Profil auf jeder Seite", priority: "kritisch", timeEstimate: "20 Min", aiImpact: "sehr hoch" },
      { text: "Quellenangaben zu Studien, Daten und Statistiken vorhanden", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Praxis-Erfahrung erkennbar (Fallstudien, Screenshots, Ergebnisse)", priority: "hoch", timeEstimate: "30 Min", aiImpact: "hoch" },
      { text: "Impressum und Kontaktseite vollständig und auffindbar", priority: "kritisch", timeEstimate: "10 Min", aiImpact: "hoch" },
      { text: "About-Seite mit Unternehmensgeschichte und Teamvorstellung", priority: "mittel", timeEstimate: "30 Min", aiImpact: "mittel" },
      { text: "Regelmäßige Content-Updates (dateModified aktuell)", priority: "hoch", timeEstimate: "10 Min", aiImpact: "hoch" },
      { text: "Vertrauenssignale: Zertifikate, Mitgliedschaften, Auszeichnungen sichtbar", priority: "mittel", timeEstimate: "15 Min", aiImpact: "mittel" },
    ],
  },
  {
    id: "voice-search",
    title: "Voice Search & Conversational AI",
    icon: <Mic className="h-5 w-5 text-primary" />,
    description: "Voice Search nutzt natürliche Sprache und erwartet direkte, prägnante Antworten. Optimierung hier zahlt direkt auf AI-Sichtbarkeit ein.",
    tasks: [
      { text: "FAQ-Seite mit natürlichen Frage-Antwort-Paaren erstellt", priority: "hoch", timeEstimate: "30 Min", aiImpact: "sehr hoch" },
      { text: "Antworten in Satz 1-2 direkt und vollständig formuliert", priority: "kritisch", timeEstimate: "20 Min", aiImpact: "sehr hoch" },
      { text: "Long-Tail-Keywords in natürlicher Frageform eingebaut", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Lokale Fragen abgedeckt ('Wer/Was/Wo in [Stadt]')", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Öffnungszeiten und Kontaktdaten in sprechbarem Format", priority: "mittel", timeEstimate: "10 Min", aiImpact: "mittel" },
      { text: "Speakable-optimierte Zusammenfassungen auf Hauptseiten", priority: "mittel", timeEstimate: "20 Min", aiImpact: "hoch" },
    ],
  },
  {
    id: "ai-crawlers",
    title: "AI-Crawler & Technische Zugänglichkeit",
    icon: <Bot className="h-5 w-5 text-primary" />,
    description: "AI-Crawler (GPTBot, Google-Extended, Anthropic, Perplexity) müssen deine Inhalte lesen können. Technische Barrieren = AI-Unsichtbarkeit.",
    tasks: [
      { text: "robots.txt erlaubt GPTBot, Google-Extended, PerplexityBot, Anthropic-AI", priority: "kritisch", timeEstimate: "10 Min", aiImpact: "sehr hoch" },
      { text: "llms.txt im Stammverzeichnis mit Unternehmensinfo erstellt", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: ".well-known/ai.txt mit Crawler-Regeln erstellt", priority: "mittel", timeEstimate: "15 Min", aiImpact: "mittel" },
      { text: "Seiten sind ohne JavaScript lesbar (SSR/SSG oder Fallback)", priority: "hoch", timeEstimate: "30 Min", aiImpact: "hoch" },
      { text: "Keine Paywall oder Login-Barriere für Hauptinhalte", priority: "kritisch", timeEstimate: "5 Min", aiImpact: "sehr hoch" },
      { text: "Ladezeit unter 3 Sekunden (LCP < 2.5s)", priority: "hoch", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "Canonical Tags korrekt gesetzt (keine Duplikate für AI)", priority: "mittel", timeEstimate: "10 Min", aiImpact: "mittel" },
      { text: "XML-Sitemap aktuell und an Google und Bing submitted", priority: "hoch", timeEstimate: "10 Min", aiImpact: "hoch" },
    ],
  },
  {
    id: "llm-optimization",
    title: "LLM-Optimierung & Zitierbarkeit",
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    description: "Optimiere deinen Content so, dass ChatGPT, Perplexity und Gemini dich als autoritative Quelle erkennen und zitieren.",
    tasks: [
      { text: "Einzigartige Daten, Frameworks oder Methoden veröffentlicht", priority: "hoch", timeEstimate: "60 Min", aiImpact: "sehr hoch" },
      { text: "Klare Marken-Positionierung: 'Laut [Marke]...' formulierbar", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Definitive Aussagen statt vager Empfehlungen ('X kostet Y' statt 'Preise variieren')", priority: "hoch", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "Umfassende Topic Coverage: Alle Unterthemen abgedeckt", priority: "kritisch", timeEstimate: "60 Min", aiImpact: "sehr hoch" },
      { text: "Content regelmäßig aktualisiert (mind. quartalsweise)", priority: "hoch", timeEstimate: "30 Min", aiImpact: "hoch" },
      { text: "Backlinks von autoritativen Quellen aufgebaut", priority: "mittel", timeEstimate: "60 Min", aiImpact: "hoch" },
      { text: "Brand-Erwähnungen in relevanten Verzeichnissen und Foren", priority: "mittel", timeEstimate: "30 Min", aiImpact: "mittel" },
    ],
  },
  {
    id: "ai-overviews",
    title: "Google AI Overviews Optimierung",
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    description: "Google AI Overviews sind die neue Position Zero. Wer hier erscheint, gewinnt den Löwenanteil der Klicks.",
    tasks: [
      { text: "Content beantwortet die Suchintention in den ersten 100 Wörtern", priority: "kritisch", timeEstimate: "15 Min", aiImpact: "sehr hoch" },
      { text: "Direkte Antworten auf 'Was ist', 'Wie funktioniert', 'Warum' Fragen", priority: "hoch", timeEstimate: "20 Min", aiImpact: "sehr hoch" },
      { text: "Aufzählungen und Listen für Multi-Step-Antworten genutzt", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Featured-Snippet-optimierte Absätze (40-60 Wörter, eigenständig)", priority: "hoch", timeEstimate: "20 Min", aiImpact: "hoch" },
      { text: "Semantisch verwandte Begriffe und Entitäten im Content", priority: "mittel", timeEstimate: "15 Min", aiImpact: "mittel" },
      { text: "People Also Ask Fragen als eigene Abschnitte beantwortet", priority: "hoch", timeEstimate: "20 Min", aiImpact: "hoch" },
    ],
  },
  {
    id: "monitoring",
    title: "AI-Sichtbarkeits-Monitoring",
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    description: "Was du nicht misst, kannst du nicht verbessern. Richte systematisches Tracking deiner AI-Sichtbarkeit ein.",
    tasks: [
      { text: "Manuelle Tests: Kern-Keywords monatlich in ChatGPT, Perplexity, Gemini prüfen", priority: "hoch", timeEstimate: "30 Min", aiImpact: "hoch" },
      { text: "Google Search Console: AI Overview Impressions tracken", priority: "hoch", timeEstimate: "10 Min", aiImpact: "hoch" },
      { text: "Brand-Monitoring für AI-Erwähnungen eingerichtet", priority: "mittel", timeEstimate: "15 Min", aiImpact: "mittel" },
      { text: "Referral-Traffic von AI-Quellen in Analytics identifiziert", priority: "hoch", timeEstimate: "15 Min", aiImpact: "hoch" },
      { text: "Schema-Validierung monatlich wiederholt", priority: "mittel", timeEstimate: "10 Min", aiImpact: "mittel" },
      { text: "Monatlicher AI-Sichtbarkeitsbericht erstellt", priority: "mittel", timeEstimate: "20 Min", aiImpact: "mittel" },
    ],
  },
];

const totalTasks = sections.reduce((sum, s) => sum + s.tasks.length, 0);

const copyTemplate = `AI VISIBILITY CHECKLIST FÜR WEBSITES
======================================
Datum: [Datum]
Website: [URL]
Unternehmen: [Name]

1. STRUKTURIERTE DATEN & SCHEMA MARKUP
☐ LocalBusiness Schema implementiert
☐ FAQPage Schema auf FAQ-Seiten
☐ Review/AggregateRating Schema
☐ Article Schema auf Blog-Seiten
☐ Speakable Schema markiert
☐ HowTo Schema auf Anleitungen
☐ BreadcrumbList Schema
☐ Schema fehlerfrei validiert

2. CONTENT-STRUKTUR FÜR AI-EXTRAKTION
☐ Klare Definition im ersten Absatz
☐ H2/H3-Hierarchie aussagekräftig
☐ Kurze, eigenständige Absätze (2-3 Sätze)
☐ Nummerierte Listen vorhanden
☐ Vergleichstabellen mit Daten
☐ Statistiken mit Quellen und Jahreszahl
☐ Frage-Antwort-Paare im Content

3. E-E-A-T SIGNALE
☐ Autoreninfo auf jeder Seite
☐ Quellenangaben vorhanden
☐ Praxis-Erfahrung erkennbar
☐ Impressum vollständig
☐ About-Seite vorhanden
☐ Content regelmäßig aktualisiert
☐ Vertrauenssignale sichtbar

4. VOICE SEARCH & CONVERSATIONAL AI
☐ FAQ mit natürlichen Frage-Antworten
☐ Direkte Antworten in Satz 1-2
☐ Long-Tail-Keywords in Frageform
☐ Lokale Fragen abgedeckt
☐ Öffnungszeiten in sprechbarem Format
☐ Speakable Zusammenfassungen

5. AI-CRAWLER & TECHNISCHE ZUGÄNGLICHKEIT
☐ robots.txt erlaubt AI-Bots
☐ llms.txt erstellt
☐ ai.txt erstellt
☐ Seiten ohne JS lesbar
☐ Keine Paywall auf Hauptinhalten
☐ Ladezeit < 3 Sekunden
☐ Canonical Tags korrekt
☐ XML-Sitemap aktuell

6. LLM-OPTIMIERUNG & ZITIERBARKEIT
☐ Einzigartige Daten/Frameworks
☐ Klare Marken-Positionierung
☐ Definitive Aussagen statt vager Empfehlungen
☐ Umfassende Topic Coverage
☐ Content regelmäßig aktualisiert
☐ Autoritative Backlinks
☐ Brand-Erwähnungen aufgebaut

7. GOOGLE AI OVERVIEWS
☐ Suchintention in ersten 100 Wörtern
☐ Direkte Antworten auf W-Fragen
☐ Listen für Multi-Step-Antworten
☐ Featured-Snippet-optimierte Absätze
☐ Semantische Entitäten im Content
☐ People Also Ask beantwortet

8. AI-SICHTBARKEITS-MONITORING
☐ Manuelle AI-Tests monatlich
☐ GSC AI Overview Impressions
☐ Brand-Monitoring eingerichtet
☐ Referral-Traffic von AI identifiziert
☐ Schema monatlich validiert
☐ Monatlicher Bericht erstellt

ERGEBNIS: ___/${totalTasks} Punkte
AI-Score: ___%
Top-Priorität: ___________`;

const AiVisibilityChecklist = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ai-visibility-checklist", language)!;

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
    toast.success("Checkliste zurückgesetzt!");
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(copyTemplate);
    toast.success("AI Visibility Checkliste in Zwischenablage kopiert!");
  };

  const percentage = Math.round((checked.size / totalTasks) * 100);

  const getScoreLabel = (pct: number) => {
    if (pct >= 90) return { label: "AI-Ready 🚀", color: "text-green-700" };
    if (pct >= 70) return { label: "Gut aufgestellt 💪", color: "text-primary" };
    if (pct >= 50) return { label: "Grundlagen vorhanden ⚡", color: "text-amber-600" };
    if (pct >= 25) return { label: "Handlungsbedarf 🔧", color: "text-orange-600" };
    return { label: "Dringend optimieren ⚠️", color: "text-destructive" };
  };

  const scoreInfo = getScoreLabel(percentage);

  const impactStyle = (impact: string) =>
    impact === "sehr hoch" ? "text-violet-700 bg-violet-100 dark:text-violet-300 dark:bg-violet-900/30" :
    impact === "hoch" ? "text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30" :
    "text-muted-foreground bg-muted";

  const priorityStyle = (p: string) =>
    p === "kritisch" ? "text-destructive bg-destructive/10" :
    p === "hoch" ? "text-primary bg-primary/10" :
    "text-muted-foreground bg-muted";

  const tocItems = [
    { id: "ai-score", title: "Dein AI-Visibility-Score", level: 2 },
    ...sections.map(s => ({ id: s.id, title: s.title, level: 2 })),
    { id: "template", title: "Checkliste zum Kopieren", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    `${totalTasks} Prüfpunkte in 8 Bereichen für maximale AI-Sichtbarkeit`,
    "Interaktive Checkliste mit automatischer Fortschrittsspeicherung",
    "AI-Impact-Score zeigt, welche Maßnahmen den größten Effekt haben",
    "Schema Markup und Content-Struktur sind die wichtigsten Hebel für AI Overviews",
    "Copy-ready Vorlage für Website-Audits und Kundenberichte",
  ];

  const faqItems = [
    { question: "Was bedeutet AI-Sichtbarkeit für Websites?", answer: "AI-Sichtbarkeit beschreibt, wie gut eine Website in AI-gestützten Suchergebnissen (Google AI Overviews, ChatGPT, Perplexity, Gemini) erscheint und zitiert wird. Im Gegensatz zu klassischem SEO geht es nicht nur um Rankings, sondern darum, ob AI-Systeme deine Inhalte als autoritativ erkennen und als Antwort verwenden." },
    { question: "Welche Punkte der Checkliste sind am wichtigsten?", answer: "Die kritischen Punkte mit 'sehr hohem' AI-Impact: Schema Markup (vor allem LocalBusiness und FAQPage), klare Definitionen im ersten Absatz, robots.txt für AI-Crawler, und umfassende Topic Coverage. Diese 4 Bereiche machen etwa 60% deiner AI-Sichtbarkeit aus." },
    { question: "Wie lange dauert die vollständige Umsetzung?", answer: "Die einmalige Implementierung dauert je nach Website-Größe 2-5 Tage für ein kleines KMU. Die kritischen Punkte (Schema, Content-Struktur, robots.txt) können in 3-4 Stunden erledigt werden. Monitoring und Content-Updates sind dann laufende Aufgaben (ca. 2-3 Stunden/Monat)." },
    { question: "Brauche ich eine llms.txt Datei?", answer: "Eine llms.txt ist 2026 noch kein offizieller Standard, wird aber bereits von einigen AI-Crawlern gelesen. Der Aufwand für die Erstellung ist minimal (15-30 Minuten), und der potenzielle Vorteil groß. Wir empfehlen sie als zukunftssichere Maßnahme." },
    { question: "Wie messe ich meine AI-Sichtbarkeit?", answer: "Aktuell gibt es kein einheitliches Tool. Kombination aus: 1) Manuelle Suche in ChatGPT/Perplexity nach deinen Keywords, 2) Google Search Console für AI Overview Daten, 3) Brand-Monitoring für Erwähnungen, 4) Referral-Traffic-Analyse. Dokumentiere monatlich und vergleiche Trends." },
  ];

  const sources = [
    { title: "Google: AI Overviews & Search Generative Experience", url: "https://blog.google/products/search/generative-ai-search/", type: "article" as const },
    { title: "Schema.org: Speakable Specification", url: "https://schema.org/speakable", type: "article" as const },
    { title: "BrightLocal: Local SEO & AI Search Study 2025", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Moz: How AI is Changing Search", url: "https://moz.com/blog/ai-search", type: "article" as const },
    { title: "Google: Helpful Content System", url: "https://developers.google.com/search/docs/appearance/helpful-content-system", type: "article" as const },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "AI Visibility Checklist für Websites",
    description: `Interaktive AI-Sichtbarkeits-Checkliste mit ${totalTasks} Prüfpunkten in 8 Bereichen.`,
    step: sections.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.tasks.map(t => t.text).join(". "),
    })),
  };

  return (
    <ArticleLayout article={article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox title="Auf einen Blick" items={keyTakeaways} />

      {/* AI Score Header */}
      <section id="ai-score" className="mb-10">
        <Card className="border-primary/20 bg-gradient-to-br from-violet-500/5 via-primary/5 to-cyan-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">AI Visibility Score</h2>
                  <p className="text-sm text-muted-foreground">{totalTasks} Prüfpunkte in 8 Bereichen</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className={`text-3xl font-bold ${scoreInfo.color}`}>{percentage}%</span>
                  <p className={`text-sm font-medium ${scoreInfo.color}`}>{scoreInfo.label}</p>
                </div>
                <button onClick={resetAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors underline">
                  Reset
                </button>
              </div>
            </div>

            <div className="w-full h-4 bg-muted rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full transition-all duration-700 bg-gradient-to-r from-violet-500 via-primary to-cyan-500"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive inline-block" /> Kritisch
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Hoch
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" /> Mittel
              </span>
              <span className="ml-auto flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-violet-500" /> AI-Impact
              </span>
            </div>

            {/* Section Mini Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {sections.map(s => {
                const sChecked = s.tasks.filter((_, i) => checked.has(`${s.id}-${i}`)).length;
                const sComplete = sChecked === s.tasks.length;
                const sPct = Math.round((sChecked / s.tasks.length) * 100);
                return (
                  <a key={s.id} href={`#${s.id}`} className="block">
                    <div className={`text-center p-2 rounded-lg border transition-colors hover:border-primary/40 ${sComplete ? 'border-green-300 bg-green-50 dark:bg-green-900/10' : 'border-border bg-card'}`}>
                      <div className="flex justify-center mb-1">{s.icon}</div>
                      <p className="text-[10px] font-medium text-foreground leading-tight">{s.title.split(' ')[0]}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sPct}%</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      <p className="text-muted-foreground mb-8">
        Diese interaktive Checkliste prüft deine Website auf <strong className="text-foreground">AI-Sichtbarkeit</strong> — 
        wie gut du in <strong className="text-foreground">Google AI Overviews</strong>, <strong className="text-foreground">ChatGPT</strong>, 
        <strong className="text-foreground">Perplexity</strong> und <strong className="text-foreground">Voice Search</strong> erscheinst.
        Jeder Punkt hat eine <strong className="text-foreground">Prioritätsstufe</strong> und einen <strong className="text-foreground">AI-Impact-Score</strong>, 
        damit du weißt, wo du zuerst ansetzen solltest.
      </p>

      {/* Sections */}
      {sections.map((section, sIdx) => {
        const sChecked = section.tasks.filter((_, i) => checked.has(`${section.id}-${i}`)).length;
        const sComplete = sChecked === section.tasks.length;
        const sPct = Math.round((sChecked / section.tasks.length) * 100);

        return (
          <section key={section.id} id={section.id} className="mb-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {sChecked}/{section.tasks.length}
                </Badge>
                {sComplete && (
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-400">✓ Erledigt</Badge>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{section.description}</p>

            <div className="space-y-2">
              {section.tasks.map((task, i) => {
                const key = `${section.id}-${i}`;
                const isChecked = checked.has(key);
                return (
                  <button
                    key={key}
                    onClick={() => toggle(key)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 text-left group ${
                      isChecked
                        ? 'bg-green-50 border-green-300 hover:bg-green-100 dark:bg-green-900/10 dark:border-green-800 dark:hover:bg-green-900/20'
                        : 'bg-card border-border hover:bg-muted/50 hover:border-primary/30'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all mt-0.5 ${
                      isChecked ? 'bg-green-500 border-green-500' : 'border-muted-foreground/30 group-hover:border-primary/50'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`flex-1 text-sm ${isChecked ? 'text-green-700 dark:text-green-400 line-through' : 'text-foreground'}`}>
                      {task.text}
                    </span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground hidden sm:inline">{task.timeEstimate}</span>
                      <Badge variant="outline" className={`text-[10px] ${impactStyle(task.aiImpact)}`}>
                        AI: {task.aiImpact}
                      </Badge>
                      <Badge variant="outline" className={`text-[10px] ${priorityStyle(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </Badge>
                    </div>
                  </button>
                );
              })}
            </div>

            {sIdx === 3 && <BlogCTAABTest articleSlug="ai-visibility-checklist" position="middle" />}
          </section>
        );
      })}

      {/* Scoring Summary */}
      <Card className="mb-8 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 border-primary/20">
        <CardContent className="pt-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" /> Dein AI Visibility Ergebnis
          </h3>
          <div className="flex items-center gap-6">
            <span className={`text-5xl font-bold ${scoreInfo.color}`}>{percentage}%</span>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">{scoreInfo.label}</p>
              <p>{checked.size} von {totalTasks} Prüfpunkten erledigt</p>
              <p className="mt-2">
                {percentage >= 90 ? 'Deine Website ist optimal für AI-Suche aufgestellt. Halte die Standards aufrecht und monitore regelmäßig.' :
                 percentage >= 70 ? 'Starke Basis! Fokussiere auf die verbleibenden kritischen Punkte und das LLM-Optimierungs-Modul.' :
                 percentage >= 50 ? 'Gute Grundlagen gelegt. Priorisiere Schema Markup und Content-Struktur als nächste Schritte.' :
                 percentage >= 25 ? 'Es gibt noch viel Potenzial. Starte mit den technischen Basics: Schema, robots.txt und Content-Struktur.' :
                 'Dringend handeln! Beginne mit Schema Markup, FAQs und den kritischen Punkten für sofortigen AI-Sichtbarkeitsgewinn.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Copy Template */}
      <section id="template" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Checkliste zum Kopieren</h2>
        <p className="text-muted-foreground mb-4">
          Kopiere die Vorlage für Website-Audits, Kundenberichte oder dein eigenes Projektmanagement-Tool.
        </p>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> AI Visibility Checklist Template
              </h3>
              <Button onClick={handleCopyTemplate} variant="outline" size="sm" className="gap-2">
                <Copy className="h-4 w-4" /> Kopieren
              </Button>
            </div>
            <pre className="text-xs text-muted-foreground bg-background p-4 rounded-lg border overflow-x-auto whitespace-pre max-h-80 overflow-y-auto">
              {copyTemplate}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Related Resources */}
      <Card className="mb-8 bg-muted/30">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-3">📚 Weiterführende Ressourcen</h3>
          <ul className="space-y-2 text-sm">
            <li>→ <Link to="/blog/ai-suche-lokale-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary">AI-Suche für lokale Unternehmen: Vollständiger Guide</Link></li>
            <li>→ <Link to="/blog/google-ai-overviews-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google AI Overviews: So wirst du sichtbar</Link></li>
            <li>→ <Link to="/blog/schema-markup-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Schema Markup für Local SEO</Link></li>
            <li>→ <Link to="/blog/local-seo-voice-search" className="text-primary underline decoration-primary/30 hover:decoration-primary">Voice Search Optimierung</Link></li>
            <li>→ <Link to="/blog/technisches-local-seo-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary">Technisches Local SEO: Der komplette Guide</Link></li>
            <li>→ <Link to="/blog/ai-zukunft-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary">AI & Zukunft Hub: Alle AI-Guides</Link></li>
          </ul>
        </CardContent>
      </Card>

      <BlogFAQSection faqs={faqItems} />
      <SourcesSection sources={sources} />
      <ArticleCTA />
      <HelpfulnessWidget articleSlug="ai-visibility-checklist" />
    </ArticleLayout>
  );
};

export default AiVisibilityChecklist;
