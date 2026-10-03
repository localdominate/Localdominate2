import ArticleLayout from "@/components/blog/ArticleLayout";
import { ComparisonRadar, GradientBarChart, ProcessFlow } from "@/components/blog/PillarVisuals";
import { InternalResourceBox } from "@/components/blog/InternalResourceBox";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiSearchOptNote from "@/components/blog/AiSearchOptNote";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bot, Search, Globe, CheckCircle, XCircle, Sparkles, Target, Eye, Brain, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const AiSucheLokaleUnternehmen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ai-suche-lokale-unternehmen", language)!;

  const tocItems = [
    { id: "ai-suche-revolution", title: "Die AI-Suche-Revolution: Was sich verändert", level: 2 },
    { id: "wie-ai-quellen-waehlt", title: "Wie AI-Assistenten Quellen auswählen", level: 2 },
    { id: "plattformen-vergleich", title: "AI-Plattformen im Vergleich", level: 2 },
    { id: "content-struktur", title: "Content für AI-Antworten strukturieren", level: 2 },
    { id: "schema-markup-ai", title: "Schema Markup: Die Sprache der AI", level: 2 },
    { id: "llms-txt-ai-txt", title: "llms.txt & ai.txt: Direkte AI-Kommunikation", level: 2 },
    { id: "lokale-ai-optimierung", title: "Lokale Unternehmen in AI-Empfehlungen", level: 2 },
    { id: "geo-vs-seo", title: "GEO vs. SEO: Was sich ändert, was bleibt", level: 2 },
    { id: "branchenspezifisch", title: "AI-Optimierung nach Branche", level: 2 },
    { id: "messung-tracking", title: "AI-Traffic messen & tracken", level: 2 },
    { id: "checkliste", title: "Praxis-Checkliste: AI-ready in 7 Tagen", level: 2 },
    { id: "fehler", title: "Die 8 größten Fehler bei AI-Optimierung", level: 2 },
    { id: "zukunft", title: "Ausblick: AI-Suche 2027 und darüber hinaus", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "30 %+ aller Google-Suchen enthalten bereits AI-generierte Antworten (AI Overviews)",
    "AI-Systeme bevorzugen strukturierte, faktische Inhalte mit klarer Autorenschaft (E-E-A-T)",
    "Lokale Unternehmen mit vollständigem Schema Markup werden 3x häufiger in AI-Antworten zitiert",
    "GEO (Generative Engine Optimization) ergänzt SEO — ersetzt es aber nicht",
    "llms.txt und speakable-Markup sind die neuen Pflicht-Elemente für AI-Sichtbarkeit",
  ];

  const faqItems = [
    {
      question: "Was ist AI Search Optimization (GEO)?",
      answer: "AI Search Optimization, auch Generative Engine Optimization (GEO) genannt, umfasst alle Maßnahmen, die darauf abzielen, von AI-gestützten Suchmaschinen wie Google AI Overviews, ChatGPT Search und Perplexity als Quelle zitiert und empfohlen zu werden. Es ergänzt klassisches SEO um maschinenlesbare Strukturen, Autorenschaftsnachweise und spezialisierte Markup-Formate."
    },
    {
      question: "Verlieren lokale Unternehmen Traffic durch AI-Suche?",
      answer: "Für informationelle Suchen (Was ist...?) sinkt der Click-Through um bis zu 40 %. Für lokale transaktionale Suchen (Friseur in meiner Nähe) ist der Verlust mit 5-10 % deutlich geringer, da Nutzer zum Handeln motiviert sind. Unternehmen, die in AI-Antworten zitiert werden, können sogar Traffic gewinnen."
    },
    {
      question: "Muss ich meinen gesamten Content für AI umschreiben?",
      answer: "Nein. Die wichtigsten Änderungen sind struktureller Natur: semantisches HTML, Schema Markup, klare Hierarchien und llms.txt. Der eigentliche Content bleibt — er wird nur besser maschinenlesbar gemacht. Fokus auf Fact-first-Schreibstil und klare Definitionen."
    },
    {
      question: "Welche AI-Suchplattform ist für lokale Unternehmen am wichtigsten?",
      answer: "Google AI Overviews hat mit ~90 % den größten Marktanteil und ist daher die wichtigste Plattform. Danach kommen ChatGPT Search (~5 %, wachsend), Apple Intelligence (alle iPhone-Nutzer) und Perplexity (~2 %). Die gute Nachricht: Strukturierte Daten helfen bei allen gleichzeitig."
    },
    {
      question: "Wie erkenne ich, ob meine Inhalte von AI zitiert werden?",
      answer: "Google Search Console zeigt seit 2025 Impressionen und Klicks aus AI Overviews. Für ChatGPT und Perplexity: Überwache Referrer in deiner Analytics (perplexity.ai, chatgpt.com). Tools wie BrandMentions oder Mention tracken AI-Zitationen automatisch."
    },
    {
      question: "Was ist llms.txt und brauche ich das als lokales Unternehmen?",
      answer: "llms.txt ist ein standardisiertes Format, das AI-Crawlern strukturierte Unternehmensinformationen bereitstellt — vergleichbar mit robots.txt für Suchmaschinen. Für lokale Unternehmen: Ja, es lohnt sich. Trage dort Unternehmensdaten, Leistungen, Öffnungszeiten und FAQs ein."
    },
    {
      question: "Reicht gutes SEO nicht aus, um in AI-Antworten zu erscheinen?",
      answer: "Gutes SEO ist die Basis, aber nicht ausreichend. AI-Systeme priorisieren zusätzlich: strukturierte Daten (Schema Markup), faktische Klarheit (Definitionen, Zahlen), Autorenschaftsnachweise (E-E-A-T) und maschinenlesbare Formate (llms.txt, speakable). SEO + GEO zusammen ergeben die optimale Strategie."
    },
    {
      question: "Wie optimiere ich für Google AI Overviews als lokales Unternehmen?",
      answer: "Fokussiere auf klare Definitionen, Fakt-zuerst-Schreibstil, strukturierte Daten (LocalBusiness, FAQPage) und E-E-A-T-Signale. Beantworte häufige Fragen direkt im ersten Absatz. Seiten mit Schema Markup werden 40 % häufiger als AI-Quelle zitiert als Seiten ohne."
    },
  ];

  const sources = [
    { title: "Google: AI Overviews and Local Search", url: "https://blog.google/products/search/ai-overviews-update-2025/", type: "documentation" as const },
    { title: "Search Engine Journal: GEO – Generative Engine Optimization Guide", url: "https://www.searchenginejournal.com/generative-engine-optimization/", type: "article" as const },
    { title: "BrightLocal: AI Search Impact on Local Businesses 2025", url: "https://www.brightlocal.com/research/ai-search-local/", type: "study" as const },
    { title: "Perplexity: How We Choose Sources", url: "https://blog.perplexity.ai/", type: "documentation" as const },
    { title: "OpenAI: ChatGPT Search Methodology", url: "https://openai.com/research/", type: "documentation" as const },
    { title: "Schema.org: Speakable Specification", url: "https://schema.org/speakable", type: "documentation" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Die AI-Suche-Revolution */}
      <section id="ai-suche-revolution" data-ai-summary="true">
        <h2>Die AI-Suche-Revolution: Was sich für lokale Unternehmen verändert</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>AI Search Optimization</strong> (auch GEO — Generative Engine Optimization) beschreibt die Optimierung von Webinhalten, damit sie von AI-gestützten Suchmaschinen wie Google AI Overviews, ChatGPT, Perplexity und Apple Intelligence als Quelle ausgewählt und zitiert werden. Für lokale Unternehmen bedeutet das: Wer nicht AI-lesbar ist, wird in Zukunft unsichtbar.
        </p>
        <p>
          Die Zahlen machen die Dringlichkeit deutlich:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Kennzahl</TableHead>
              <TableHead className="font-bold">Wert 2026</TableHead>
              <TableHead className="font-bold">Bedeutung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Google-Suchen mit AI Overviews</TableCell>
              <TableCell className="font-semibold text-primary">30 %+</TableCell>
              <TableCell className="text-muted-foreground">Fast jede 3. Suche hat AI-Antwort</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lokale Suchen mit AI-Empfehlung</TableCell>
              <TableCell className="font-semibold text-primary">18 %</TableCell>
              <TableCell className="text-muted-foreground">Tendenz stark steigend</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CTR-Rückgang bei AI-Antworten (informationell)</TableCell>
              <TableCell className="font-semibold text-destructive">-40 %</TableCell>
              <TableCell className="text-muted-foreground">Deutlich weniger Klicks auf Websites</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CTR-Rückgang bei AI-Antworten (lokal/transaktional)</TableCell>
              <TableCell className="font-semibold text-primary">-5–10 %</TableCell>
              <TableCell className="text-muted-foreground">Lokale Suchen weniger betroffen</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nutzer, die AI-Empfehlungen vertrauen</TableCell>
              <TableCell className="font-semibold text-primary">62 %</TableCell>
              <TableCell className="text-muted-foreground">Vertrauen in AI-Auswahl wächst</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Für einen tieferen Einstieg in AI Search insgesamt: <Link to="/blog/ai-search-optimization-2026" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">AI Search Optimization 2026</Link>. Wie sich AI-Suche von der klassischen Suche unterscheidet: <Link to="/blog/ai-search-vs-traditional-search" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">AI-Suche vs. Traditionelle Suche</Link>. Die Grundlagen von Local SEO: <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Ultimate Guide Local SEO</Link>.
        </p>
      </section>

      <ComparisonRadar
        title="AI Source Selection: SEO vs. GEO Faktoren"
        labelA="Traditionelles SEO"
        labelB="GEO (AI-Optimierung)"
        data={[
          { subject: "Backlinks", A: 90, B: 30 },
          { subject: "Schema Markup", A: 40, B: 95 },
          { subject: "E-E-A-T", A: 70, B: 90 },
          { subject: "Content-Länge", A: 80, B: 40 },
          { subject: "Aktualität", A: 50, B: 85 },
          { subject: "Zitierbarkeit", A: 20, B: 95 },
          { subject: "Keyword-Dichte", A: 75, B: 25 },
          { subject: "Semantik/Struktur", A: 60, B: 90 },
        ]}
      />

      <GradientBarChart
        title="AI-Plattformen: Marktanteil bei lokalen Suchen (2026)"
        items={[
          { label: "Google AI Overviews", value: 88 },
          { label: "ChatGPT Search", value: 5 },
          { label: "Apple Intelligence", value: 3 },
          { label: "Perplexity", value: 2 },
          { label: "Bing Copilot", value: 2 },
        ]}
      />

      {/* Wie AI Quellen auswählt */}
      <section id="wie-ai-quellen-waehlt" data-ai-summary="true">
        <h2>Wie AI-Assistenten Quellen auswählen</h2>
        <p data-featured-snippet="true">
          AI-Suchsysteme wählen Quellen nach einem <strong>mehrstufigen Bewertungsprozess</strong>: Zunächst werden Webseiten nach Relevanz zum Suchanfrage-Intent gefiltert, dann nach Vertrauenswürdigkeit (E-E-A-T-Signale) und Maschinenlesbarkeit (Schema Markup, semantisches HTML) priorisiert, und schließlich nach Aktualität und Zitierbarkeit der Informationen gerankt.
        </p>

        <h3>Die 6 Kriterien, nach denen AI Quellen bewertet</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { icon: Target, title: "1. Relevanz-Match", desc: "Beantwortet die Seite die Frage direkt und vollständig? AI bevorzugt Inhalte mit klaren Definitionen und fact-first Struktur." },
            { icon: Shield, title: "2. Autorenschaft (E-E-A-T)", desc: "Wer steht hinter dem Inhalt? Schema Author Markup, Impressum, Über-uns-Seite und Fachexpertise-Nachweise zahlen ein." },
            { icon: Brain, title: "3. Maschinenlesbarkeit", desc: "Strukturierte Daten (JSON-LD), semantisches HTML, klare Heading-Hierarchie und speakable-Attribute erleichtern die Extraktion." },
            { icon: Sparkles, title: "4. Faktische Klarheit", desc: "Zahlen, Statistiken, konkrete Aussagen mit Quellenangaben. AI vermeidet vage, werbliche Sprache." },
            { icon: Eye, title: "5. Aktualität", desc: "Regelmäßig aktualisierte Inhalte mit dateModified-Signal werden bevorzugt. Veraltete Daten werden abgestraft." },
            { icon: Globe, title: "6. Zitierbarkeit", desc: "llms.txt, Creative-Commons-Lizenz und explizite Zitierlaubnis (creditText im Schema) erhöhen die Zitierhäufigkeit." },
          ].map((item, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <Bot className="h-5 w-5 text-primary" />
            Kernregel für AI-Sichtbarkeit
          </p>
          <p className="text-muted-foreground">
            Schreibe so, dass ein <strong>klüger Praktikant deine Kernaussage in 10 Sekunden extrahieren</strong> kann. Wenn ein Mensch sie schnell findet, findet sie auch die AI. Das bedeutet: Kernaussage im ersten Satz, Fakten vor Meinungen, Struktur vor Prosa.
          </p>
        </div>
      </section>

      {/* AI-Plattformen im Vergleich */}
      <section id="plattformen-vergleich" data-ai-summary="true">
        <h2>AI-Plattformen im Vergleich: Wo lokale Suche stattfindet</h2>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Plattform</TableHead>
              <TableHead className="font-bold">Marktanteil</TableHead>
              <TableHead className="font-bold">Lokale Relevanz</TableHead>
              <TableHead className="font-bold">Quellenauswahl</TableHead>
              <TableHead className="font-bold">Optimierungshebel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Google AI Overviews", "~90 %", "Kritisch", "Google-Index + Knowledge Graph", "GBP + Schema + E-E-A-T"],
              ["ChatGPT Search", "~5 %", "Wachsend", "Bing-Index + Web-Crawl", "Strukturierte Daten + llms.txt"],
              ["Perplexity AI", "~2 %", "Mittel", "Eigener Index + Multi-Source", "Faktische Klarheit + Citations"],
              ["Apple Intelligence", "iOS-Nutzer", "Hoch", "Apple Maps + Web", "Apple Maps Eintrag + Schema"],
              ["Bing Copilot", "~3 %", "Mittel", "Bing-Index + GPT", "Bing Places + Schema Markup"],
            ].map(([plattform, anteil, relevanz, quellen, hebel], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{plattform}</TableCell>
                <TableCell>{anteil}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    relevanz === "Kritisch" ? "bg-primary/15 text-primary" :
                    relevanz === "Hoch" || relevanz === "Wachsend" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {relevanz}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{quellen}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{hebel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Content für AI strukturieren */}
      <section id="content-struktur" data-ai-summary="true">
        <h2>Content für AI-Antworten strukturieren</h2>
        <p>
          AI-Systeme extrahieren Informationen anders als Menschen. Sie suchen nach <strong>klar abgrenzbaren Informationseinheiten</strong>. Hier die Regeln:
        </p>

        <h3>Fact-First-Schreibstil</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-destructive/30">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <span className="font-semibold text-destructive text-sm">Schlecht (für AI)</span>
              </div>
              <p className="text-muted-foreground text-sm italic">
                „In der heutigen digitalen Welt ist es wichtiger denn je, online gefunden zu werden. Viele Unternehmen fragen sich, wie sie ihre Sichtbarkeit verbessern können. Es gibt verschiedene Ansätze..."
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary text-sm">Gut (für AI)</span>
              </div>
              <p className="text-muted-foreground text-sm italic">
                „Local SEO steigert die Sichtbarkeit in standortbezogenen Suchergebnissen. Die drei wichtigsten Ranking-Faktoren sind: Google Business Profil (36 %), On-Page SEO (18 %) und Bewertungen (17 %)."
              </p>
            </CardContent>
          </Card>
        </div>

        <h3>Die 5 Content-Strukturregeln für AI</h3>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>
            <strong>Kernaussage im ersten Satz:</strong> Jeder Abschnitt beginnt mit der Hauptinformation — nicht mit einer Einleitung
          </li>
          <li>
            <strong>Definitionen im „X ist/bezeichnet..."-Format:</strong> AI extrahiert bevorzugt Sätze, die mit dem Suchbegriff beginnen und direkt definieren
          </li>
          <li>
            <strong>Zahlen und Fakten vor Meinungen:</strong> Statistiken, Prozentwerte und konkrete Daten werden häufiger zitiert als subjektive Aussagen
          </li>
          <li>
            <strong>Klare Heading-Hierarchie (H2 → H3 → H4):</strong> AI nutzt Überschriften zur thematischen Zuordnung — keine Ebene überspringen
          </li>
          <li>
            <strong>Listen und Tabellen für Vergleiche:</strong> Strukturierte Formate werden 2-3x häufiger für Featured Snippets und AI-Antworten extrahiert
          </li>
        </ol>

        <p>
          Vollständige Content-Strukturierungsanleitung: <Link to="/blog/website-content-ai-suchmaschinen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Website-Content für AI-Suchmaschinen strukturieren</Link>.
        </p>
      </section>

      {/* Schema Markup */}
      <section id="schema-markup-ai" data-ai-summary="true">
        <h2>Schema Markup: Die Sprache der AI</h2>
        <p data-featured-snippet="true">
          <strong>Schema Markup</strong> ist für AI-Suchsysteme, was eine Visitenkarte für Menschen ist: Es liefert strukturierte, maschinenlesbare Informationen über dein Unternehmen. Lokale Unternehmen mit vollständigem Schema Markup werden laut Studien <strong>3x häufiger</strong> in AI-generierten Antworten zitiert als solche ohne.
        </p>

        <h3>Die 5 wichtigsten Schemas für lokale AI-Sichtbarkeit</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Schema-Typ</TableHead>
              <TableHead className="font-bold">AI-Relevanz</TableHead>
              <TableHead className="font-bold">Funktion</TableHead>
              <TableHead className="font-bold">Guide</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">LocalBusiness</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">Pflicht</span></TableCell>
              <TableCell className="text-muted-foreground text-sm">NAP, Öffnungszeiten, Geo-Koordinaten, Preisbereich</TableCell>
              <TableCell>
                <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium text-sm">Schema Guide</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">FAQPage</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">Pflicht</span></TableCell>
              <TableCell className="text-muted-foreground text-sm">Häufige Fragen — bevorzugte Quelle für AI-Antworten</TableCell>
              <TableCell>
                <Link to="/blog/schema-markup-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium text-sm">Markup Guide</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Review / AggregateRating</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span></TableCell>
              <TableCell className="text-muted-foreground text-sm">Bewertungen als Trust-Signal für AI-Empfehlungen</TableCell>
              <TableCell>
                <Link to="/blog/review-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium text-sm">Review Guide</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Speakable</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span></TableCell>
              <TableCell className="text-muted-foreground text-sm">Markiert vorlesbare Abschnitte für Voice Search + AI</TableCell>
              <TableCell className="text-muted-foreground text-sm">schema.org/speakable</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Article + Author</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/50 text-accent-foreground">Mittel</span></TableCell>
              <TableCell className="text-muted-foreground text-sm">E-E-A-T Signale für Blog-Content und Ratgeber</TableCell>
              <TableCell>
                <Link to="/blog/e-e-a-t-lokale-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium text-sm">E-E-A-T Guide</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3>AI-spezifische Schema-Erweiterungen</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pizzeria da Luigi",
  
  // AI-spezifische Felder:
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".business-description"]
  },
  "usageInfo": "https://example.com/llms.txt",
  "creditText": "Quelle: Pizzeria da Luigi (example.com)",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}`}
        </pre>
      </section>

      {/* llms.txt & ai.txt */}
      <section id="llms-txt-ai-txt">
        <h2>llms.txt & ai.txt: Direkte Kommunikation mit AI-Crawlern</h2>
        <p>
          Neben Schema Markup gibt es zwei neue Datei-Standards, mit denen du AI-Systemen direkt Informationen bereitstellst:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <Card className="border border-border/50">
            <CardContent className="p-5">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                llms.txt
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Strukturierte Übersicht deiner wichtigsten Inhalte für LLMs. Wie eine Sitemap, aber für AI.
              </p>
              <pre className="bg-muted/50 rounded p-3 text-xs overflow-x-auto">
{`# Pizzeria da Luigi
> Authentische italienische Küche
> in München-Schwabing seit 1995.

## Über uns
Familienbetrieb mit 30 Jahren 
Erfahrung. Preisgekrönte Pizza 
und hausgemachte Pasta.

## Leistungen
- Pizza (Holzofen)
- Pasta (hausgemacht)
- Catering (ab 10 Personen)

## Kontakt
Leopoldstr. 42, 80802 München
Tel: 089-12345678`}
              </pre>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardContent className="p-5">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                .well-known/ai.txt
              </h4>
              <p className="text-muted-foreground text-sm mb-3">
                Anweisungen für AI-Crawler: Was darf zitiert werden, wie soll die Quellenangabe aussehen?
              </p>
              <pre className="bg-muted/50 rounded p-3 text-xs overflow-x-auto">
{`# AI Crawler Instructions
User-agent: *
Allow: /
Preferred-citation: "Pizzeria 
  da Luigi (pizzeria-luigi.de)"
  
# Kontaktdaten
Business-name: Pizzeria da Luigi
Business-type: Restaurant
Location: München, Deutschland
Language: de

# Zitierlaubnis
License: CC-BY-4.0
Attribution-required: yes`}
              </pre>
            </CardContent>
          </Card>
        </div>

        <p>
          Ausführliche Anleitung zur Implementierung: <Link to="/blog/website-content-ai-suchmaschinen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Website-Content für AI-Suchmaschinen strukturieren</Link>.
        </p>
      </section>

      {/* Lokale AI-Optimierung */}
      <section id="lokale-ai-optimierung" data-ai-summary="true">
        <h2>Lokale Unternehmen in AI-Empfehlungen bringen</h2>
        <p>
          Wenn ein Nutzer fragt: <em>„Was ist der beste Italiener in München-Schwabing?"</em> — wie stellst du sicher, dass die AI <strong>dich</strong> empfiehlt?
        </p>

        <h3>Die 7 Hebel für lokale AI-Sichtbarkeit</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Hebel</TableHead>
              <TableHead className="font-bold">Warum AI das nutzt</TableHead>
              <TableHead className="font-bold">Priorität</TableHead>
              <TableHead className="font-bold">Zeitaufwand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Google Business Profil (vollständig)", "Primäre Datenquelle für lokale AI-Antworten", "Pflicht", "1–2 Std."],
              ["50+ Google-Bewertungen (4,5+ Sterne)", "AI zitiert Bewertungen als Social Proof", "Pflicht", "Laufend"],
              ["LocalBusiness Schema Markup", "Maschinenlesbare Unternehmens-Metadaten", "Pflicht", "1 Std."],
              ["FAQ-Seite mit Schema", "Direkte Antwort-Quelle für AI", "Hoch", "2 Std."],
              ["llms.txt Datei", "Strukturierte Info für LLM-Crawler", "Hoch", "30 Min."],
              ["Lokale Content-Seiten", "Topische Autorität für Region + Branche", "Mittel", "4+ Std."],
              ["Citations in 20+ Verzeichnissen", "Bestätigung über mehrere Quellen", "Mittel", "3–4 Std."],
            ].map(([hebel, warum, prio, zeit], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{hebel}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{warum}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    prio === "Pflicht" ? "bg-primary/15 text-primary" :
                    prio === "Hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {prio}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{zeit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          GBP-Optimierung im Detail: <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil Guide</Link> | Bewertungsstrategie: <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Bewertungs-Guide</Link>.
        </p>
      </section>

      {/* GEO vs. SEO */}
      <section id="geo-vs-seo" data-ai-summary="true">
        <h2>GEO vs. SEO: Was sich ändert, was bleibt</h2>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold text-center">Klassisches SEO</TableHead>
              <TableHead className="font-bold text-center">GEO (AI-Optimierung)</TableHead>
              <TableHead className="font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Ziel</TableCell>
              <TableCell className="text-center text-sm">Top-10 bei Google</TableCell>
              <TableCell className="text-center text-sm">Als Quelle in AI-Antwort zitiert</TableCell>
              <TableCell className="text-sm"><span className="text-primary font-medium">Ergänzend</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Keywords</TableCell>
              <TableCell className="text-center text-sm">Exakte & Long-Tail-Keywords</TableCell>
              <TableCell className="text-center text-sm">Natürliche Sprache, Frage-Antwort</TableCell>
              <TableCell className="text-sm"><span className="text-primary font-medium">Erweitert</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Content-Stil</TableCell>
              <TableCell className="text-center text-sm">Umfassend, keyword-optimiert</TableCell>
              <TableCell className="text-center text-sm">Fact-first, klar, extrahierbar</TableCell>
              <TableCell className="text-sm"><span className="text-primary font-medium">Ändert sich</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Technisch</TableCell>
              <TableCell className="text-center text-sm">Schema, Sitemap, robots.txt</TableCell>
              <TableCell className="text-center text-sm">Schema + llms.txt + speakable</TableCell>
              <TableCell className="text-sm"><span className="text-primary font-medium">Erweitert</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Links</TableCell>
              <TableCell className="text-center text-sm">Backlinks als Ranking-Signal</TableCell>
              <TableCell className="text-center text-sm">Citations als Vertrauens-Signal</TableCell>
              <TableCell className="text-sm"><span className="text-muted-foreground">Bleibt</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bewertungen</TableCell>
              <TableCell className="text-center text-sm">Ranking-Faktor im Local Pack</TableCell>
              <TableCell className="text-center text-sm">Trust-Signal für AI-Empfehlungen</TableCell>
              <TableCell className="text-sm"><span className="text-muted-foreground">Bleibt</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Messung</TableCell>
              <TableCell className="text-center text-sm">Rankings, Traffic, CTR</TableCell>
              <TableCell className="text-center text-sm">Citations, Brand Mentions, AI-Referrals</TableCell>
              <TableCell className="text-sm"><span className="text-primary font-medium">Erweitert</span></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">📊 Strategische Erkenntnis</p>
          <p className="text-muted-foreground">
            GEO ersetzt SEO nicht — es <strong>baut darauf auf</strong>. Wer heute gutes Local SEO betreibt, hat bereits 70 % der Arbeit für AI-Optimierung erledigt. Die fehlenden 30 % sind: Fact-first Content, Schema-Erweiterungen und llms.txt.
          </p>
        </div>

        <p>
          Alle Ranking-Faktoren im Detail: <Link to="/blog/local-seo-ranking-faktoren-erklaert" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Ranking-Faktoren erklärt</Link>.
        </p>
      </section>

      {/* Branchenspezifisch */}
      <section id="branchenspezifisch">
        <h2>AI-Optimierung nach Branche</h2>
        <p>
          Verschiedene Branchen sind unterschiedlich stark von AI-Suche betroffen:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Branche</TableHead>
              <TableHead className="font-bold">AI-Impact</TableHead>
              <TableHead className="font-bold">Typische AI-Frage</TableHead>
              <TableHead className="font-bold">Top-Optimierung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Ärzte & Gesundheit", "Sehr hoch", "Welcher Zahnarzt in Wien nimmt neue Patienten?", "FAQ-Schema + Jameda + E-E-A-T"],
              ["Anwälte & Berater", "Sehr hoch", "Brauche ich einen Fachanwalt für Mietrecht in Berlin?", "Fachseiten + Article Schema + E-E-A-T"],
              ["Gastronomie", "Hoch", "Bestes italienisches Restaurant mit Terrasse in Zürich?", "GBP-Fotos + Bewertungen + Speisekarte"],
              ["Handwerk", "Mittel", "Wer repariert Heizungen am Wochenende in München?", "Notdienst-Keywords + Einzugsgebiet"],
              ["Einzelhandel", "Mittel", "Wo gibt es Bio-Lebensmittel in Basel?", "GBP-Produkte + Lagerverfügbarkeit"],
              ["Hotels", "Hoch", "Familienfreundliches Hotel am Bodensee unter 150 EUR?", "Bewertungen + Preise + Booking-Schema"],
            ].map(([branche, impact, frage, optimierung], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{branche}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    impact === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    impact === "Hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {impact}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm italic">{frage}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{optimierung}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Branchenspezifische Guides: <Link to="/blog/local-seo-branchen-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Alle Branchen-Guides</Link>.
        </p>
      </section>

      {/* Messung & Tracking */}
      <section id="messung-tracking">
        <h2>AI-Traffic messen & tracken</h2>
        <p>
          Die Messung von AI-generiertem Traffic erfordert neue Metriken und Tools:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Metrik</TableHead>
              <TableHead className="font-bold">Tool</TableHead>
              <TableHead className="font-bold">Was es zeigt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["AI Overview Impressionen", "Google Search Console", "Wie oft du in AI-Antworten erscheinst"],
              ["AI-Referral-Traffic", "Google Analytics (Referrer)", "Traffic von perplexity.ai, chatgpt.com"],
              ["Brand Mentions in AI", "BrandMentions, Mention", "Wie oft AI-Systeme dich zitieren"],
              ["Citation Frequency", "Manuelles Monitoring", "In welchen AI-Antworten du als Quelle genannt wirst"],
              ["Voice Search Queries", "Search Console (Frage-Keywords)", "Konversationelle Suchanfragen zu deinem Business"],
            ].map(([metrik, tool, bedeutung], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{metrik}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{tool}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{bedeutung}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Reporting-Grundlagen: <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Reporting Template</Link> | GBP-Metriken: <Link to="/blog/google-business-insights-verstehen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Insights Guide</Link>.
        </p>
      </section>

      {/* Checkliste */}
      <section id="checkliste">
        <h2>Praxis-Checkliste: AI-ready in 7 Tagen</h2>
        <div className="bg-card border border-border rounded-xl p-6 my-6 space-y-3">
          {[
            { day: "Tag 1", task: "Google Business Profil vollständig ausfüllen (Beschreibung, Kategorien, Fotos, Produkte)" },
            { day: "Tag 2", task: "LocalBusiness Schema Markup auf der Website implementieren" },
            { day: "Tag 3", task: "FAQ-Seite erstellen mit FAQPage Schema (10+ Fragen)" },
            { day: "Tag 4", task: "llms.txt Datei erstellen und unter /llms.txt bereitstellen" },
            { day: "Tag 5", task: "Speakable-Markup auf Hauptseiten + Key-Content hinzufugen" },
            { day: "Tag 6", task: "Content audit: Kernaussagen in ersten Satz jedes Abschnitts verschieben" },
            { day: "Tag 7", task: "Apple Maps + Bing Places Einträge prüfen/erstellen, Monitoring einrichten" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded flex-shrink-0 mt-0.5">
                {item.day}
              </span>
              <span className="text-muted-foreground">{item.task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fehler */}
      <section id="fehler">
        <h2>Die 8 großten Fehler bei AI-Optimierung</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>AI ignorieren und nur auf klassisches SEO setzen</strong> — 30 %+ der Suchen haben bereits AI-Antworten</li>
          <li><strong>Content für AI umschreiben statt strukturieren</strong> — Es geht um Maschinenlesbarkeit, nicht um Neufassung</li>
          <li><strong>Schema Markup vergessen</strong> — Ohne strukturierte Daten ist dein Content für AI schwer extrahierbar</li>
          <li><strong>Vage, werbliche Sprache statt Fakten</strong> — AI bevorzugt konkrete Zahlen und klare Definitionen</li>
          <li><strong>E-E-A-T vernachlässigen</strong> — Autorenschaft und Expertise-Nachweise sind für AI-Vertrauen kritisch</li>
          <li><strong>Nur Google optimieren</strong> — ChatGPT, Perplexity und Apple Intelligence wachsen stark</li>
          <li><strong>Bewertungen nicht aktiv managen</strong> — AI nutzt Bewertungen als primäre Trust-Quelle für lokale Empfehlungen</li>
          <li><strong>Erfolg nicht messen</strong> — Ohne AI-spezifisches Tracking weißt du nicht, ob deine Maßnahmen wirken</li>
        </ol>
      </section>

      {/* Zukunft */}
      <section id="zukunft">
        <h2>Ausblick: AI-Suche 2027 und darüber hinaus</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Multimodale Suche:</strong> Nutzer fotografieren ein Problem und fragen: „Wer repariert das in meiner Nähe?" — Bild + Text + Standort</li>
          <li><strong>Echtzeit-Verfügbarkeit:</strong> AI zeigt nicht nur Unternehmen, sondern auch aktuelle Wartezeiten, freie Termine und Lagerbestände</li>
          <li><strong>Proaktive Empfehlungen:</strong> AI-Assistenten empfehlen Unternehmen bevor der Nutzer fragt — basierend auf Kontext und Gewohnheiten</li>
          <li><strong>Voice-Commerce lokal:</strong> „Hey Google, bestell mir eine Pizza bei Luigi" — direkter Abschluss über Voice + AI</li>
          <li><strong>AI-Bewertungsanalyse:</strong> AI fasst Bewertungen zusammen statt einzelne anzuzeigen — „Gäste loben die Pizza, kritisieren die Wartezeit"</li>
        </ul>

        <p>
          Mehr zu AI-Trends: <Link to="/blog/google-ai-overviews-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google AI Overviews Guide</Link> | <Link to="/blog/local-seo-voice-search" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Voice Search Guide</Link> | <Link to="/blog/ai-zukunft-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">AI & Zukunft Hub</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      <InternalResourceBox
        title="🤖 Weitere AI & Zukunft Ressourcen"
        variant="grid"
        resources={[
          { label: "Google AI Overviews Guide", href: "/blog/google-ai-overviews-local-seo", type: "guide", description: "AI in SERPs verstehen" },
          { label: "E-E-A-T für lokale Unternehmen", href: "/blog/e-e-a-t-lokale-unternehmen", type: "guide", description: "Trust-Signale aufbauen" },
          { label: "Schema Markup Local SEO", href: "/blog/schema-markup-local-seo", type: "guide", description: "Strukturierte Daten" },
          { label: "Voice Search Local SEO", href: "/blog/local-seo-voice-search", type: "guide", description: "Sprachsuche optimieren" },
          { label: "AI & Zukunft Hub", href: "/blog/ai-zukunft-hub", type: "hub", description: "Alle AI-Guides" },
          { label: "Technisches Local SEO", href: "/blog/technisches-local-seo-guide", type: "pillar", description: "Technische Basis" },
        ]}
      />

      <AiSearchOptNote articleSlug="ai-suche-lokale-unternehmen" />

      <AiCitationStrategyBox articleSlug="ai-suche-lokale-unternehmen" />
      <HelpfulnessWidget articleSlug="ai-suche-lokale-unternehmen" />

      {/* FAQ */}
      <section id="faq">
        <h2>Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default AiSucheLokaleUnternehmen;
