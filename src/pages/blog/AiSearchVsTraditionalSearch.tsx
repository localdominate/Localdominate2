import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Bot, Search, Zap, Eye, Shield, TrendingUp, Globe, MessageSquare, FileText, BarChart3 } from "lucide-react";

const AiSearchVsTraditionalSearch = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ai-search-vs-traditional-search", language)!;

  const tocItems = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse", level: 2 },
    { id: "was-ist-was", title: "AI-Suche vs. traditionelle Suche erklärt", level: 2 },
    { id: "vergleich", title: "Vergleichstabelle", level: 2 },
    { id: "wie-ai-suche-funktioniert", title: "Wie AI-Suche funktioniert", level: 2 },
    { id: "auswirkungen-local-seo", title: "Auswirkungen auf Local SEO", level: 2 },
    { id: "zero-click", title: "Das Zero-Click-Problem", level: 2 },
    { id: "optimierung", title: "Optimierung für beide Welten", level: 2 },
    { id: "ai-strategie", title: "AI-Readiness Strategie", level: 3 },
    { id: "traditional-strategie", title: "Traditionelle SEO-Basis", level: 3 },
    { id: "zukunft", title: "Was kommt als Nächstes?", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "AI-Suchen (ChatGPT, Perplexity, Google AI Overviews) liefern direkte Antworten statt 10 blauer Links",
    "Bis 2026 haben 40% der Google-Suchen AI Overviews — Tendenz steigend",
    "AI-Suche bevorzugt strukturierte Daten, E-E-A-T und klare Fakten",
    "Traditionelle SEO bleibt die Basis — ohne Rankings wirst du auch in AI nicht zitiert",
    "Lokale Unternehmen brauchen jetzt eine duale Strategie: SEO + GEO (Generative Engine Optimization)",
  ];

  const faqItems = [
    {
      question: "Ersetzt AI-Suche die traditionelle Google-Suche?",
      answer: "Nein, aber sie ergänzt sie massiv. Google AI Overviews erscheinen bei ~40% der Suchen. Die traditionellen 10 blauen Links bleiben, rutschen aber nach unten. Beide Kanäle werden auf absehbare Zeit koexistieren."
    },
    {
      question: "Wie kommt mein Unternehmen in ChatGPT-Antworten?",
      answer: "ChatGPT zitiert Quellen mit hoher E-E-A-T (Expertise, Erfahrung, Autorität, Vertrauenswürdigkeit). Stelle sicher, dass dein Unternehmen auf autoritativen Seiten erwähnt wird, ein vollständiges Google Business Profile hat und strukturierte Daten nutzt."
    },
    {
      question: "Was ist GEO (Generative Engine Optimization)?",
      answer: "GEO ist die Optimierung für AI-gestützte Suchmaschinen. Während SEO auf Rankings in Suchergebnissen abzielt, optimiert GEO dafür, in AI-generierten Antworten als Quelle zitiert zu werden."
    },
    {
      question: "Brauche ich als lokales Unternehmen GEO?",
      answer: "Ja, zunehmend. AI-Assistenten werden immer häufiger für lokale Empfehlungen genutzt ('Welcher Zahnarzt in München ist gut?'). Wer jetzt GEO-Basics umsetzt, hat einen Vorsprung gegenüber der Konkurrenz."
    },
    {
      question: "Was sind Zero-Click-Suchen und warum sind sie problematisch?",
      answer: "Bei Zero-Click-Suchen erhält der Nutzer die Antwort direkt in den Suchergebnissen (z.B. AI Overviews) ohne auf eine Website zu klicken. Das reduziert den Website-Traffic — macht aber Markennennung und Sichtbarkeit in AI-Antworten umso wichtiger."
    },
    {
      question: "Welche Rolle spielt Schema Markup für AI-Suche?",
      answer: "Schema Markup ist ein Schlüsselfaktor. AI-Systeme nutzen strukturierte Daten, um Inhalte zu verstehen und korrekt zu zitieren. LocalBusiness, FAQPage, HowTo und Review Schema sind besonders wichtig."
    },
    {
      question: "Kann ich messen, ob AI-Suchmaschinen meine Inhalte nutzen?",
      answer: "Teilweise. Google Search Console zeigt AI Overview Impressionen. Für ChatGPT und Perplexity gibt es noch wenig direkte Analytics. Du kannst aber deine Marke in AI-Antworten manuell überprüfen und Referral-Traffic aus AI-Quellen tracken."
    },
    {
      question: "Was ist eine llms.txt Datei?",
      answer: "Ähnlich wie robots.txt für Suchmaschinen ist llms.txt eine Datei, die AI-Crawlern Hinweise gibt, welche Inhalte sie nutzen dürfen und wie dein Unternehmen zitiert werden soll. Sie ist freiwillig, aber ein Vorteil für AI-Sichtbarkeit."
    },
  ];

  const sources = [
    { title: "Google Blog: AI Overviews Update 2026", url: "https://blog.google/products/search/" },
    { title: "Semrush: State of Search 2026", url: "https://www.semrush.com/blog/future-of-search/" },
    { title: "BrightLocal: AI and Local Search Report", url: "https://www.brightlocal.com/research/" },
    { title: "SearchEngineLand: GEO Strategies", url: "https://searchengineland.com/" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Intro */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
        <AutoLexikonText>
          Die Suche verändert sich fundamental: ChatGPT, Google AI Overviews und Perplexity liefern 
          direkte Antworten statt Linklisten. Für lokale Unternehmen bedeutet das: Wer nur auf 
          klassisches SEO setzt, verliert Sichtbarkeit. Dieser Vergleich zeigt, wie sich AI-Suche 
          und traditionelle Suche unterscheiden — und wie du beide Kanäle optimal bedienst.
        </AutoLexikonText>
      </p>

      {/* Key Takeaways */}
      <section id="key-takeaways" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />
      </section>

      {/* Was ist was */}
      <section id="was-ist-was" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">AI-Suche vs. traditionelle Suche erklärt</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-bold text-foreground text-lg">AI-Suche</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              <strong className="text-foreground">Direkte Antworten</strong> basierend auf 
              Synthese mehrerer Quellen. Der Nutzer stellt Fragen in natürlicher Sprache.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-primary" /><span>Konversationell & kontextuell</span></div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /><span>Direkte Antwort statt Linkliste</span></div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /><span>Quellen werden synthetisiert</span></div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-primary" /><span>Oft Zero-Click (kein Website-Besuch)</span></div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              <strong>Plattformen:</strong> Google AI Overviews, ChatGPT, Perplexity, Gemini, Copilot
            </p>
          </div>

          <div className="p-6 bg-muted/50 border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                <Search className="h-5 w-5 text-foreground" />
              </span>
              <h3 className="font-bold text-foreground text-lg">Traditionelle Suche</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              <strong className="text-foreground">10 blaue Links</strong> gerankt nach Relevanz, 
              Autorität und technischer Qualität. Der Nutzer klickt und besucht Websites.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Search className="h-4 w-4 text-muted-foreground" /><span>Keyword-basiert & algorithmisch</span></div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-foreground" /><span>Link-basierte Ergebnisse</span></div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-muted-foreground" /><span>Rankings messbar & optimierbar</span></div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-muted-foreground" /><span>Klick → Website-Besuch → Conversion</span></div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              <strong>Plattformen:</strong> Google Search, Bing, DuckDuckGo, Ecosia
            </p>
          </div>
        </div>

        <InsightCalloutBox variant="stat" statValue="40%" statLabel="der Google-Suchen zeigen bereits AI Overviews">
          Tendenz steigend. Für informationelle Anfragen liegt der Anteil bei über 60%. Bei lokalen Suchen 
          mit klarer Transaktionsabsicht sind es bisher ~20%.
        </InsightCalloutBox>
      </section>

      {/* Vergleichstabelle */}
      <section id="vergleich" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">AI-Suche vs. Traditionelle Suche: Der Vergleich</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">Aspekt</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">🤖 AI-Suche</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">🔍 Traditionelle Suche</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ergebnis-Format", "Synthesierte Antwort mit Quellenangaben", "10 blaue Links + Snippets"],
                ["Nutzer-Interaktion", "Frage in natürlicher Sprache", "Keyword-Eingabe"],
                ["Klick-Verhalten", "Oft Zero-Click (Antwort direkt)", "Klick auf Ergebnisse erwartet"],
                ["Ranking-Logik", "E-E-A-T, Strukturierte Daten, Faktentreue", "Backlinks, Content, Technik"],
                ["Personalisierung", "Hoch (Kontext, Verlauf, Standort)", "Mittel (Standort, Suchhistorie)"],
                ["Lokale Suchen", "AI empfiehlt direkt (\"Geh zu X\")", "Local Pack + organische Ergebnisse"],
                ["Messbarkeit", "Schwierig (wenig Analytics)", "Gut (GSC, Rankings, CTR)"],
                ["Monetarisierung", "Noch wenig Ads", "Voll entwickeltes Ad-System"],
                ["Content-Typ bevorzugt", "Fakten, Listen, Definitionen, Schema", "Lange Guides, Backlink-starke Seiten"],
                ["Update-Geschwindigkeit", "Teilweise verzögert (Training Data)", "Nahezu Echtzeit (Indexierung)"],
                ["Vertrauen des Nutzers", "Hoch (\"Die AI sagt es\")", "Mittel (Nutzer prüft mehrere Quellen)"],
                ["Zukunftstrend", "Stark wachsend", "Stabil, aber Marktanteil sinkt"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="p-3 border-b border-border font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[1]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="ai-search-vs-traditional-search" position="middle" />

      {/* Wie AI-Suche funktioniert */}
      <section id="wie-ai-suche-funktioniert" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Wie AI-Suche funktioniert</h2>

        <p className="text-muted-foreground mb-6">
          AI-Suchmaschinen arbeiten fundamental anders als traditionelle Crawler-basierte Suche:
        </p>

        <div className="space-y-4 mb-8">
          {[
            {
              step: "1",
              title: "Frage verstehen",
              desc: "Die AI analysiert den Intent der Frage – nicht nur Keywords, sondern den semantischen Kontext. \"Welcher Zahnarzt in München ist gut für Angstpatienten?\" wird als lokale Empfehlungsanfrage mit spezifischem Bedürfnis verstanden.",
              icon: MessageSquare,
            },
            {
              step: "2",
              title: "Quellen auswählen",
              desc: "Das System durchsucht seinen Wissensstand (Training Data) und ggf. aktuelle Webdaten. Bevorzugt werden: etablierte Verzeichnisse, hoch-autoritative Websites, Google Business Daten und strukturierte Informationen.",
              icon: Search,
            },
            {
              step: "3",
              title: "Antwort synthetisieren",
              desc: "Die AI kombiniert Informationen aus mehreren Quellen zu einer kohärenten Antwort. Dabei werden Fakten geprüft, Widersprüche aufgelöst und eine Empfehlung formuliert.",
              icon: Bot,
            },
            {
              step: "4",
              title: "Quellen zitieren",
              desc: "Seriöse AI-Suchmaschinen (Perplexity, Google AI Overviews) nennen ihre Quellen. Hier wird entschieden, WER zitiert wird — und wer nicht. Nur ~3-5 Quellen werden typischerweise genannt.",
              icon: FileText,
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <span className="shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {item.step}
              </span>
              <div>
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <InsightCalloutBox variant="important">
          <strong>Nur 3-5 Quellen werden in AI-Antworten zitiert.</strong> Im Vergleich dazu zeigt die traditionelle 
          Suche 10+ Ergebnisse auf Seite 1. Der Wettbewerb um AI-Zitierungen ist also deutlich intensiver.
        </InsightCalloutBox>
      </section>

      {/* Auswirkungen auf Local SEO */}
      <section id="auswirkungen-local-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Auswirkungen auf Local SEO</h2>

        <p className="text-muted-foreground mb-6">
          Für lokale Unternehmen verändert die AI-Suche das Spielfeld:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "AI empfiehlt direkt",
              desc: "\"Geh zum Restaurant X\" statt \"Hier sind 10 Restaurants\". Eine einzige Empfehlung statt einer Liste.",
              impact: "winner-takes-all",
              color: "border-primary/30 bg-primary/5",
            },
            {
              title: "Bewertungen werden wichtiger",
              desc: "AI-Systeme nutzen Review-Daten als Vertrauenssignal für Empfehlungen. Anzahl UND Qualität zählen.",
              impact: "hoch",
              color: "border-primary/30 bg-primary/5",
            },
            {
              title: "Strukturierte Daten entscheidend",
              desc: "Schema Markup (LocalBusiness, FAQPage) hilft der AI, dein Unternehmen korrekt zu verstehen und zu empfehlen.",
              impact: "hoch",
              color: "border-primary/30 bg-primary/5",
            },
            {
              title: "Weniger Website-Besuche",
              desc: "Zero-Click steigt. Deine Conversion muss bereits in der AI-Antwort beginnen (Telefonnummer, Adresse).",
              impact: "risiko",
              color: "border-destructive/20 bg-destructive/5",
            },
            {
              title: "NAP-Konsistenz noch kritischer",
              desc: "Widersprüchliche Daten verwirren nicht nur Google, sondern auch ChatGPT und Perplexity.",
              impact: "hoch",
              color: "border-primary/30 bg-primary/5",
            },
            {
              title: "Content muss AI-lesbar sein",
              desc: "Klare Struktur, Fakten-erste Formulierung, Speakable-Markup und llms.txt werden zum Standard.",
              impact: "neu",
              color: "border-border bg-muted/30",
            },
          ].map((item, i) => (
            <div key={i} className={`p-4 border rounded-xl ${item.color}`}>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zero-Click */}
      <section id="zero-click" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Das Zero-Click-Problem</h2>

        <p className="text-muted-foreground mb-6">
          Die größte Veränderung durch AI-Suche: Nutzer bekommen Antworten ohne auf eine Website zu klicken. 
          Das betrifft lokale Unternehmen direkt:
        </p>

        <div className="p-6 bg-muted/50 border border-border rounded-xl mb-6">
          <h4 className="font-bold text-foreground mb-4">Zero-Click-Anteil nach Suchtyp</h4>
          <div className="space-y-3">
            {[
              { type: "Informationelle Suchen", percent: 65, example: "\"Was ist Local SEO?\"" },
              { type: "Navigationssuchen", percent: 45, example: "\"Pizzeria Roma Öffnungszeiten\"" },
              { type: "Lokale Empfehlungen", percent: 35, example: "\"Bester Friseur in meiner Nähe\"" },
              { type: "Transaktionale Suchen", percent: 15, example: "\"Handwerker beauftragen München\"" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="shrink-0 w-12 text-right font-bold text-primary text-sm">{item.percent}%</span>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
                <div className="w-52 hidden md:block">
                  <span className="text-foreground text-xs font-medium">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Geschätzte Werte basierend auf Semrush/SparkToro Studien, 2025-2026</p>
        </div>

        <InsightCalloutBox variant="warning">
          <strong>Zero-Click bedeutet nicht Zero-Wert.</strong> Auch wenn der Nutzer nicht klickt, sieht er 
          deinen Firmennamen, Adresse und Bewertung. Markenbekanntheit und Vertrauen werden in der 
          AI-Suche oft VOR dem Website-Besuch aufgebaut.
        </InsightCalloutBox>
      </section>

      {/* Optimierung */}
      <section id="optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Optimierung für beide Welten</h2>

        <p className="text-muted-foreground mb-8">
          Die klügste Strategie deckt sowohl traditionelle als auch AI-Suche ab. 
          Hier die konkreten Maßnahmen:
        </p>

        <div id="ai-strategie" className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            AI-Readiness Strategie (GEO)
          </h3>
          <div className="space-y-3">
            {[
              { task: "Schema Markup implementieren", desc: "LocalBusiness, FAQPage, HowTo, Review — strukturierte Daten sind das #1 Signal für AI", priority: "Kritisch" },
              { task: "llms.txt erstellen", desc: "Anweisungen für AI-Crawler: Was darf zitiert werden, wie soll dein Business genannt werden", priority: "Hoch" },
              { task: "Content faktenbasiert formulieren", desc: "Klare Aussagen, Zahlen, Listen — AI bevorzugt eindeutige, zitierbare Statements", priority: "Hoch" },
              { task: "Speakable Markup hinzufügen", desc: "Markiere Absätze, die von Sprachassistenten vorgelesen werden sollen", priority: "Mittel" },
              { task: "E-E-A-T maximieren", desc: "Autorenprofile, Quellenangaben, Expertise-Nachweise — Vertrauenssignale für AI", priority: "Hoch" },
              { task: "Erwähnungen auf autoritativen Seiten", desc: "AI lernt aus dem Web: Je öfter dein Business auf vertrauenswürdigen Seiten erwähnt wird, desto eher wird es empfohlen", priority: "Mittel" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 border border-primary/10 rounded-lg">
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                  item.priority === "Kritisch" ? "bg-destructive/10 text-destructive" :
                  item.priority === "Hoch" ? "bg-primary/10 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {item.priority}
                </span>
                <div>
                  <span className="font-medium text-foreground text-sm">{item.task}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="traditional-strategie">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-foreground" />
            Traditionelle SEO-Basis (weiterhin unverzichtbar)
          </h3>
          <div className="space-y-3">
            {[
              { task: "Google Business Profile optimieren", desc: "Vollständig, aktuell, aktiv — die Basis für Local Pack UND AI-Empfehlungen" },
              { task: "Lokale Landingpages erstellen", desc: "1 Seite pro Service + Stadt — rankt organisch und liefert AI Kontext" },
              { task: "Bewertungen systematisch sammeln", desc: "Review-Strategie aufbauen: Mehr Bewertungen = bessere Rankings + AI-Vertrauen" },
              { task: "Backlinks aufbauen", desc: "Lokale Links von Zeitungen, Vereinen, Kammern stärken Autorität für beide Kanäle" },
              { task: "Technisches SEO sicherstellen", desc: "Core Web Vitals, Mobile, HTTPS — Grundvoraussetzung für jeden Kanal" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 border border-border rounded-lg">
                <span className="shrink-0 h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <span className="font-medium text-foreground text-sm">{item.task}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <InsightCalloutBox variant="pro-tip">
          <strong>Die Formel für 2026:</strong> Starkes traditionelles SEO (Rankings) + GEO-Optimierung 
          (AI-Zitierungen) = maximale lokale Sichtbarkeit. Starte mit der traditionellen Basis und 
          layer GEO-Maßnahmen darüber.
        </InsightCalloutBox>
      </section>

      {/* Zukunft */}
      <section id="zukunft" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Was kommt als Nächstes?</h2>

        <div className="space-y-4">
          {[
            { year: "2026", trend: "AI Overviews bei 50%+ der Suchen", desc: "Google expandiert AI Overviews auf immer mehr Suchtypen, inkl. lokale Empfehlungen." },
            { year: "2026-27", trend: "AI-Assistenten für lokale Buchungen", desc: "ChatGPT und Gemini werden direkte Buchungen ermöglichen (\"Buche mir einen Termin beim Friseur\")." },
            { year: "2027", trend: "Voice + AI verschmelzen", desc: "Sprachassistenten nutzen AI-Suche für lokale Empfehlungen — \"Hey Google, welcher Zahnarzt hat heute auf?\"" },
            { year: "2027+", trend: "Personalisierte lokale AI", desc: "AI-Assistenten kennen deine Vorlieben und empfehlen proaktiv lokale Businesses." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-border rounded-xl">
              <span className="shrink-0 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                {item.year}
              </span>
              <div>
                <h4 className="font-semibold text-foreground">{item.trend}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="mb-12 p-6 bg-muted/30 rounded-xl">
        <h3 className="font-bold text-foreground mb-4">Weiterführende Artikel</h3>
        <ul className="space-y-2 text-sm">
          <li>→ <Link to="/blog/ai-suche-lokale-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary">AI Search Optimization für lokale Unternehmen (Pillar Guide)</Link></li>
          <li>→ <Link to="/blog/ai-search-optimization-2026" className="text-primary underline decoration-primary/30 hover:decoration-primary">AI Search Optimization 2026: Der GEO-Guide</Link></li>
          <li>→ <Link to="/blog/website-content-ai-suchmaschinen" className="text-primary underline decoration-primary/30 hover:decoration-primary">Website-Content für AI-Suchmaschinen optimieren</Link></li>
          <li>→ <Link to="/blog/google-ai-overviews" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google AI Overviews: Was lokale Unternehmen wissen müssen</Link></li>
          <li>→ <Link to="/blog/schema-markup-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Schema Markup für Local SEO</Link></li>
          <li>→ <Link to="/blog/local-seo-vs-organisch" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO vs. Organic SEO</Link></li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <HelpfulnessWidget articleSlug="ai-search-vs-traditional-search" />

      <SourcesSection sources={sources} />

      <BlogCTAABTest articleSlug="ai-search-vs-traditional-search" position="end" />
    </ArticleLayout>
  );
};

export default AiSearchVsTraditionalSearch;
