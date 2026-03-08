import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogImage from "@/components/blog/BlogImage";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import SourcesSection from "@/components/blog/SourcesSection";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Bot, FileCode, Layers, ListChecks, Quote, Search, Shield,
  Sparkles, Target, Type, Zap, Globe, BookOpen, Code, CheckCircle, XCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import websiteAiImg from "@/assets/blog/website-content-ai-suchmaschinen.jpg";

const WebsiteContentAiSuchmaschinen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("website-content-ai-suchmaschinen", language);

  if (!article) return null;

  const tocItems = [
    { id: "warum-ai-content-struktur", title: "Warum Content-Struktur für AI entscheidend ist" },
    { id: "grundprinzipien", title: "5 Grundprinzipien der AI-optimierten Struktur" },
    { id: "semantisches-html", title: "Semantisches HTML richtig einsetzen" },
    { id: "schema-markup", title: "Schema Markup für AI-Crawler" },
    { id: "content-hierarchie", title: "Content-Hierarchie aufbauen" },
    { id: "llms-txt", title: "llms.txt & ai.txt einrichten" },
    { id: "speakable", title: "Speakable & Data-Attribute" },
    { id: "checkliste", title: "Praxis-Checkliste" },
    { id: "fehler", title: "Häufige Fehler vermeiden" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Muss ich meinen gesamten Content für AI umschreiben?", answer: "Nein. Die wichtigsten Änderungen sind struktureller Natur: semantisches HTML, Schema Markup und klare Hierarchien. Der eigentliche Content bleibt – er wird nur besser maschinenlesbar gemacht." },
    { question: "Was ist der Unterschied zwischen SEO und GEO?", answer: "SEO optimiert für traditionelle Suchmaschinen (Google-Ranking). GEO (Generative Engine Optimization) optimiert dafür, von AI-Systemen als Quelle zitiert zu werden. Beide ergänzen sich – gutes SEO ist die Basis für GEO." },
    { question: "Welche AI-Suchmaschinen sollte ich priorisieren?", answer: "Google AI Overviews hat den größten Marktanteil. Danach kommen ChatGPT Search, Perplexity und Microsoft Copilot. Gute Nachricht: Strukturierte Daten helfen bei allen gleichzeitig." },
    { question: "Wie schnell sehe ich Ergebnisse?", answer: "Schema Markup wirkt innerhalb von 2–4 Wochen nach dem nächsten Crawl. Inhaltliche Optimierungen brauchen 1–3 Monate. AI-Zitierungen steigen graduell mit wachsender Autorität." },
    { question: "Ist llms.txt ein offizieller Standard?", answer: "llms.txt ist ein Community-Standard, kein offizieller W3C-Standard. Er wird aber bereits von mehreren AI-Crawlern respektiert und ist vergleichbar mit robots.txt in seiner Entstehungsphase." },
    { question: "Brauche ich als lokales Unternehmen AI-optimierten Content?", answer: "Ja, besonders für informationelle Suchanfragen zu deinen Leistungen. Wenn Nutzer AI-Assistenten fragen 'Welcher Zahnarzt in München bietet Invisalign an?', willst du als Quelle zitiert werden." },
  ];

  const howToSchema = {
    "@type": "HowTo",
    name: "Website-Content für AI-Suchmaschinen strukturieren",
    description: "Schritt-für-Schritt Anleitung zur Optimierung von Website-Inhalten für AI-gestützte Suchmaschinen wie ChatGPT, Perplexity und Google AI Overviews.",
    totalTime: "PT4H",
    step: [
      { "@type": "HowToStep", name: "Semantisches HTML implementieren", text: "Ersetze generische div-Elemente durch semantische HTML5-Tags wie article, section, nav, aside und main.", position: 1 },
      { "@type": "HowToStep", name: "Schema Markup hinzufügen", text: "Implementiere JSON-LD Schema Markup für Article, FAQPage, HowTo, LocalBusiness und Organization.", position: 2 },
      { "@type": "HowToStep", name: "Content-Hierarchie aufbauen", text: "Strukturiere Inhalte in einer klaren H1-H6 Hierarchie mit einer einzigen H1 pro Seite.", position: 3 },
      { "@type": "HowToStep", name: "llms.txt und ai.txt erstellen", text: "Erstelle maschinenlesbare Zusammenfassungen deiner wichtigsten Inhalte in llms.txt und ai.txt.", position: 4 },
      { "@type": "HowToStep", name: "Speakable und Data-Attribute setzen", text: "Markiere zitierbare Fakten und Kernaussagen mit data-ai-summary und speakable Attributen.", position: 5 },
    ],
  };

  return (
    <ArticleLayout article={article} tocItems={tocItems} additionalSchema={howToSchema} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src={websiteAiImg}
        alt="Website-Content wird von AI-Suchmaschinen analysiert und strukturiert"
        caption="AI-Suchmaschinen bevorzugen klar strukturierte, maschinenlesbare Inhalte"
      />

      <KeyTakeawaysBox items={[
        "AI-Suchmaschinen lesen Content anders als Google – Struktur schlägt Keywords",
        "Semantisches HTML + Schema Markup = Grundlage für AI-Zitierungen",
        "llms.txt und ai.txt geben AI-Crawlern gezielte Informationen",
        "Speakable-Attribute markieren zitierbare Kernaussagen",
        "Klare Hierarchie und faktische Antworten erhöhen die Citation-Rate um bis zu 40%",
      ]} />

      <AutoLexikonText>
        <p className="text-lg leading-relaxed mb-8">
          <strong>2026 generieren AI-Suchmaschinen bereits 25% aller Suchantworten.</strong> ChatGPT, Perplexity, Google AI Overviews und Microsoft Copilot scannen deine Website – aber sie lesen anders als klassische Suchmaschinen. Wer seinen Content nicht für AI strukturiert, wird schlicht nicht zitiert. Dieser Guide zeigt dir Schritt für Schritt, wie du deine Website-Inhalte maschinenlesbar, zitierfähig und AI-ready machst.
        </p>
      </AutoLexikonText>

      {/* Section 1 */}
      <section id="warum-ai-content-struktur" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Warum Content-Struktur für AI entscheidend ist</h2>
        <AutoLexikonText>
          <p className="mb-4">
            Klassisches SEO optimiert für <strong>Rankings</strong> – du willst auf Position 1 erscheinen. AI-Optimierung (GEO) zielt auf <strong>Zitierungen</strong>: Du willst, dass AI-Systeme dein Unternehmen als Quelle nennen und verlinken.
          </p>
        </AutoLexikonText>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-destructive/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Unstrukturierter Content</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fließtext ohne Zwischenüberschriften</li>
                <li>• Keine Schema-Auszeichnung</li>
                <li>• Generische div-Container</li>
                <li>• Keine maschinenlesbare Zusammenfassung</li>
                <li className="text-destructive font-medium">→ AI ignoriert oder halluziniert</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-300">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-foreground">AI-optimierter Content</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Klare H1→H2→H3 Hierarchie</li>
                <li>• JSON-LD Schema Markup</li>
                <li>• Semantische HTML5-Elemente</li>
                <li>• llms.txt + speakable Attribute</li>
                <li className="text-green-600 font-medium">→ AI zitiert mit Quellenangabe</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6" data-ai-summary="true">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Kernaussage</p>
              <p className="text-muted-foreground text-sm">
                AI-Suchmaschinen bewerten nicht nur den Inhalt, sondern vor allem <strong>wie</strong> der Inhalt strukturiert ist. Eine Studie der Princeton University zeigt: Websites mit Schema Markup und klarer Hierarchie werden 40% häufiger als Quelle in AI-Antworten zitiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="grundprinzipien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">5 Grundprinzipien der AI-optimierten Content-Struktur</h2>

        {[
          { icon: Layers, title: "1. Hierarchie statt Fließtext", desc: "Jede Seite braucht exakt eine H1 und darunter eine logische H2→H3→H4-Struktur. AI-Systeme nutzen Überschriften als semantische Anker, um den Kontext von Abschnitten zu verstehen." },
          { icon: FileCode, title: "2. Fakten in den ersten 2 Sätzen", desc: "AI extrahiert bevorzugt die ersten Sätze eines Absatzes. Stelle die wichtigste Information immer an den Anfang – das Inverted-Pyramid-Prinzip aus dem Journalismus." },
          { icon: Quote, title: "3. Zitierbare Einheiten schaffen", desc: "Markiere Kernaussagen, Statistiken und Definitionen so, dass AI sie als eigenständige Fakten extrahieren kann. Nutze data-ai-summary Attribute und klare Satzstrukturen." },
          { icon: Code, title: "4. Maschinenlesbare Metadaten", desc: "JSON-LD Schema Markup ist die Sprache, die AI-Systeme am besten verstehen. Jede Seite sollte mindestens Article, Organization und BreadcrumbList Schema haben." },
          { icon: Globe, title: "5. Dedizierte AI-Dateien bereitstellen", desc: "llms.txt und ai.txt sind wie ein Briefing für AI-Crawler: kurz, strukturiert und mit den wichtigsten Fakten zu deinem Unternehmen und deinen Inhalten." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Section 3 */}
      <section id="semantisches-html" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Semantisches HTML richtig einsetzen</h2>
        <AutoLexikonText>
          <p className="mb-4">
            Semantisches HTML gibt AI-Crawlern Kontext darüber, welche Rolle jeder Inhaltsblock spielt. Statt alles in generische &lt;div&gt;-Elemente zu packen, nutze spezialisierte HTML5-Tags.
          </p>
        </AutoLexikonText>

        <div className="bg-muted/50 rounded-xl p-6 my-6 font-mono text-sm overflow-x-auto">
          <p className="text-muted-foreground mb-2 font-sans text-xs uppercase tracking-wider">✅ Richtig: Semantisches HTML</p>
          <pre className="text-foreground whitespace-pre-wrap">{`<article itemscope itemtype="https://schema.org/Article">
  <header>
    <h1 itemprop="headline">Titel des Artikels</h1>
    <time itemprop="datePublished">2026-03-05</time>
  </header>
  <section id="einleitung">
    <h2>Einleitung</h2>
    <p data-ai-summary="true">Kernaussage hier...</p>
  </section>
  <aside aria-label="Verwandte Inhalte">
    <nav>Breadcrumbs, Related Articles</nav>
  </aside>
</article>`}</pre>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 my-6 font-mono text-sm overflow-x-auto">
          <p className="text-destructive mb-2 font-sans text-xs uppercase tracking-wider">❌ Falsch: Div-Suppe</p>
          <pre className="text-muted-foreground whitespace-pre-wrap">{`<div class="article">
  <div class="title">Titel des Artikels</div>
  <div class="content">
    <div class="section">
      <div class="heading">Einleitung</div>
      <div class="text">Kernaussage hier...</div>
    </div>
  </div>
</div>`}</pre>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">HTML-Element</th>
                <th className="text-left p-3 font-semibold text-foreground">AI-Kontext</th>
                <th className="text-left p-3 font-semibold text-foreground">Verwendung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["<article>", "Eigenständiger Inhalt", "Blog-Posts, Guides, Nachrichtenartikel"],
                ["<section>", "Thematische Gruppierung", "Kapitel, Abschnitte innerhalb eines Artikels"],
                ["<nav>", "Navigation", "Menüs, Breadcrumbs, Inhaltsverzeichnisse"],
                ["<aside>", "Ergänzende Info", "Sidebar, Callout-Boxen, verwandte Artikel"],
                ["<main>", "Hauptinhalt", "Zentraler Content-Bereich (1x pro Seite)"],
                ["<header>", "Kopfbereich", "Überschrift + Meta-Infos eines Artikels"],
                ["<footer>", "Fußbereich", "Quellen, Autor-Info, Copyright"],
                ["<figure>", "Medien + Beschriftung", "Bilder, Diagramme mit Bildunterschrift"],
                ["<time>", "Zeitangabe", "Veröffentlichungs- und Aktualisierungsdatum"],
              ].map(([el, context, usage], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-3 font-mono text-primary">{el}</td>
                  <td className="p-3 text-muted-foreground">{context}</td>
                  <td className="p-3 text-muted-foreground">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="website-content-ai-suchmaschinen" position="intro" />

      {/* Section 4 */}
      <section id="schema-markup" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Schema Markup für AI-Crawler</h2>
        <AutoLexikonText>
          <p className="mb-4">
            JSON-LD Schema Markup ist die universelle Sprache für AI-Systeme. Es übersetzt menschenlesbaren Content in maschinenlesbare Datenstrukturen. Die wichtigsten Schema-Typen für AI-Sichtbarkeit:
          </p>
        </AutoLexikonText>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { type: "Article", desc: "Für Blog-Posts und Guides. Enthält Autor, Datum, Headline.", priority: "Pflicht" },
            { type: "FAQPage", desc: "Frage-Antwort-Paare. Werden direkt in AI-Antworten eingebettet.", priority: "Pflicht" },
            { type: "HowTo", desc: "Schritt-für-Schritt Anleitungen mit Zeitangaben.", priority: "Empfohlen" },
            { type: "LocalBusiness", desc: "Standort, Öffnungszeiten, Kontakt für lokale Unternehmen.", priority: "Pflicht" },
            { type: "Organization", desc: "Unternehmensname, Logo, Social Profiles.", priority: "Pflicht" },
            { type: "BreadcrumbList", desc: "Seitenhierarchie und Navigationspfad.", priority: "Empfohlen" },
          ].map((schema, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-sm font-semibold text-primary">{schema.type}</code>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    schema.priority === "Pflicht" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {schema.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{schema.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl p-6 my-6 font-mono text-sm overflow-x-auto">
          <p className="text-muted-foreground mb-2 font-sans text-xs uppercase tracking-wider">Beispiel: FAQPage Schema</p>
          <pre className="text-foreground whitespace-pre-wrap">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wie strukturiere ich Content für AI?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nutze semantisches HTML, Schema Markup
        und klare H1-H6 Hierarchien..."
    }
  }]
}
</script>`}</pre>
        </div>
      </section>

      {/* Section 5 */}
      <section id="content-hierarchie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Content-Hierarchie aufbauen</h2>
        <AutoLexikonText>
          <p className="mb-4">
            Eine durchdachte Content-Hierarchie hilft AI-Systemen, den Gesamtkontext deiner Website zu verstehen. Das Pillar-Hub-Spoke-Modell ist ideal:
          </p>
        </AutoLexikonText>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 my-6">
          <h3 className="font-bold text-foreground mb-4">Das Pillar-Hub-Spoke-Modell</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">P</div>
              <div>
                <p className="font-semibold text-foreground">Pillar Page (Hauptseite)</p>
                <p className="text-sm text-muted-foreground">Umfassender Überblick über ein Kernthema. Z.B. „Lokale SEO 2026"</p>
              </div>
            </div>
            <div className="flex items-start gap-3 ml-6">
              <div className="w-8 h-8 bg-primary/70 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">H</div>
              <div>
                <p className="font-semibold text-foreground">Hub Pages (Themenseiten)</p>
                <p className="text-sm text-muted-foreground">Kategorisieren Unterthemen. Z.B. „Google Business Profil Hub", „Bewertungen Hub"</p>
              </div>
            </div>
            <div className="flex items-start gap-3 ml-12">
              <div className="w-8 h-8 bg-primary/40 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">S</div>
              <div>
                <p className="font-semibold text-foreground">Spoke Pages (Einzelartikel)</p>
                <p className="text-sm text-muted-foreground">Detaillierte Guides zu spezifischen Themen. Z.B. „GBP Fotos optimieren"</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 border-t border-primary/20 pt-3">
            <strong>Warum das für AI funktioniert:</strong> AI-Systeme crawlen Verlinkungen zwischen Seiten, um thematische Autorität zu erkennen. Ein vernetztes Pillar-Hub-Spoke-System signalisiert: „Diese Website ist die Autorität für dieses Thema."
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="llms-txt" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">llms.txt & ai.txt einrichten</h2>
        <AutoLexikonText>
          <p className="mb-4">
            Diese beiden Dateien im Root-Verzeichnis deiner Website dienen als dedizierte Briefings für AI-Crawler – vergleichbar mit robots.txt, aber speziell für Large Language Models.
          </p>
        </AutoLexikonText>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <FileCode className="h-4 w-4 text-primary" />
                llms.txt
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Maschinenlesbare Zusammenfassung deiner Website-Inhalte. Enthält:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Unternehmensbeschreibung</li>
                <li>• Kernthemen & Expertise</li>
                <li>• Wichtigste Seiten mit Zusammenfassungen</li>
                <li>• Kontaktinformationen</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                .well-known/ai.txt
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Regeln und Präferenzen für AI-Crawler. Enthält:
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Crawling-Erlaubnisse & Einschränkungen</li>
                <li>• Bevorzugte Zitierweise</li>
                <li>• Lizenzinformationen</li>
                <li>• Kontakt für AI-bezogene Anfragen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 my-6 font-mono text-sm overflow-x-auto">
          <p className="text-muted-foreground mb-2 font-sans text-xs uppercase tracking-wider">Beispiel: llms.txt Struktur</p>
          <pre className="text-foreground whitespace-pre-wrap">{`# LocalDominate.org

> Local SEO Agentur für den DACH-Raum.
> Spezialisiert auf Google Business Profil
> Optimierung, Bewertungsmanagement und
> lokales Content Marketing.

## Kernthemen
- Local SEO Strategien
- Google Business Profil Optimierung
- Bewertungsmanagement
- Schema Markup & Technical SEO

## Wichtigste Guides
- [Lokale SEO 2026](/blog/lokale-seo-2026)
- [Google Maps Ranking](/blog/google-maps-ranking)
- [Google Bewertungen](/blog/google-bewertungen)`}</pre>
        </div>
      </section>

      <BlogCTAABTest articleSlug="website-content-ai-suchmaschinen" position="middle" />

      {/* Section 7 */}
      <section id="speakable" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Speakable & Data-Attribute für AI</h2>
        <AutoLexikonText>
          <p className="mb-4">
            Google's Speakable Markup und custom Data-Attribute helfen AI-Systemen, die wichtigsten Fakten auf einer Seite zu identifizieren und korrekt zu zitieren.
          </p>
        </AutoLexikonText>

        <div className="space-y-4 my-6">
          {[
            { attr: 'data-ai-summary="true"', desc: "Markiert Absätze mit Kernaussagen, die AI als Zusammenfassung nutzen kann", example: '<p data-ai-summary="true">93% der Verbraucher lesen Bewertungen vor dem Kauf.</p>' },
            { attr: 'data-ai-extractable="true"', desc: "Kennzeichnet Fakten, Statistiken und Definitionen für die AI-Extraktion", example: '<span data-ai-extractable="true">Local SEO steigert die Sichtbarkeit um ø 300%</span>' },
            { attr: 'data-speakable="true"', desc: "Google Speakable: Inhalte, die für Voice Search optimiert und vorlesbar sind", example: '<section data-speakable="true">Kurze, klare Antwort...</section>' },
          ].map((item, i) => (
            <div key={i} className="bg-muted/50 rounded-xl p-5">
              <code className="text-sm text-primary font-semibold">{item.attr}</code>
              <p className="text-sm text-muted-foreground mt-1 mb-3">{item.desc}</p>
              <div className="bg-background rounded-lg p-3 font-mono text-xs text-muted-foreground">
                {item.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 - Checklist */}
      <section id="checkliste" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Praxis-Checkliste: AI-optimierte Content-Struktur</h2>

        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 my-6">
          {[
            { category: "HTML & Struktur", items: ["Genau eine H1 pro Seite", "Logische H2→H3→H4 Hierarchie", "Semantische HTML5-Elemente (article, section, nav, aside)", "figure + figcaption für alle Bilder", "time-Element für Datumsangaben"] },
            { category: "Schema Markup", items: ["Article Schema auf jedem Blog-Post", "FAQPage Schema bei FAQ-Sektionen", "BreadcrumbList für Navigation", "LocalBusiness Schema auf der Hauptseite", "Organization Schema sitewide"] },
            { category: "AI-Dateien", items: ["llms.txt im Root-Verzeichnis", ".well-known/ai.txt konfiguriert", "llms-full.txt mit erweiterten Inhalten"] },
            { category: "Content-Attribute", items: ["data-ai-summary auf Kernaussagen", "data-speakable auf Voice-optimierten Texten", "alt-Texte auf allen Bildern (beschreibend, nicht keyword-stuffed)"] },
            { category: "Verlinkung", items: ["Pillar→Hub→Spoke Hierarchie implementiert", "Jeder Artikel verlinkt zum Pillar", "3–5 laterale Links pro Artikel", "Breadcrumbs auf jeder Seite"] },
          ].map((group, i) => (
            <div key={i} className={i > 0 ? "mt-5 pt-5 border-t border-primary/10" : ""}>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary" />
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9 - Common mistakes */}
      <section id="fehler" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Häufige Fehler vermeiden</h2>

        <div className="space-y-3 my-6">
          {[
            { mistake: "Keyword-Stuffing statt Struktur", fix: "AI bewertet Kontext und Semantik, nicht Keyword-Dichte. Fokus auf klare Antworten." },
            { mistake: "Schema Markup ohne valide Daten", fix: "Teste Schema immer mit dem Google Rich Results Test. Invalides Markup wird ignoriert." },
            { mistake: "Alle Inhalte als speakable markieren", fix: "Nur die 2–3 wichtigsten Kernaussagen pro Seite markieren – Qualität vor Quantität." },
            { mistake: "llms.txt als SEO-Spam nutzen", fix: "AI-Crawler erkennen aufgeblähte oder irreführende Zusammenfassungen. Sei präzise und ehrlich." },
            { mistake: "Content nur für AI schreiben", fix: "Schreibe zuerst für Menschen, strukturiere dann für Maschinen. User Experience bleibt der primäre Ranking-Faktor." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">{item.mistake}</p>
                <p className="text-sm text-muted-foreground mt-1">→ {item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div key={i} className={i < faqItems.length - 1 ? "border-b border-border pb-4" : ""}>
              <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesSection sources={[
        { title: "Google: Speakable Structured Data", url: "https://developers.google.com/search/docs/appearance/structured-data/speakable", type: "documentation", description: "Offizielle Google-Dokumentation zu Speakable Schema" },
        { title: "Schema.org Article Type", url: "https://schema.org/Article", type: "documentation", description: "Schema.org Spezifikation für Article Markup" },
        { title: "Princeton GEO Study", url: "https://arxiv.org/abs/2311.09735", type: "study", description: "Studie zu Generative Engine Optimization (GEO)" },
        { title: "llms.txt Standard", url: "https://llmstxt.org/", type: "documentation", description: "Community-Standard für AI-Crawler-Informationen" },
      ]} />

      <HelpfulnessWidget articleSlug="website-content-ai-suchmaschinen" />
      <BlogCTAABTest articleSlug="website-content-ai-suchmaschinen" position="end" />
    </ArticleLayout>
  );
};

export default WebsiteContentAiSuchmaschinen;
