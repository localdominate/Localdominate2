import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  Layers,
  Target,
  CheckCircle,
  XCircle,
  Search,
  Globe,
  BookOpen,
  TrendingUp,
  Zap,
  Network,
  FileText,
  ArrowRight,
} from "lucide-react";

const SemanticSeoGuide = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("semantic-seo-topical-authority", language);

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-semantic-seo", title: "Was ist Semantic SEO?" },
    { id: "keyword-vs-semantic", title: "Keyword SEO vs. Semantic SEO" },
    { id: "topical-authority", title: "Topical Authority aufbauen" },
    { id: "topic-cluster", title: "Topic-Cluster-Modell" },
    { id: "content-strategie", title: "Content-Strategie für Semantic SEO" },
    { id: "semantische-signale", title: "Semantische Signale für Google" },
    { id: "local-semantic", title: "Semantic SEO für lokale Unternehmen" },
    { id: "ai-semantic", title: "Semantic SEO & AI-Suchmaschinen" },
    { id: "praxis-checkliste", title: "Praxis-Checkliste" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist der Unterschied zwischen Semantic SEO und klassischem SEO?",
      answer:
        "Klassisches SEO optimiert einzelne Seiten für einzelne Keywords. Semantic SEO optimiert ganze Themencluster, damit Google die Bedeutung und den Kontext deiner Inhalte versteht. Es geht nicht darum, ein Keyword zu ranken, sondern als Autorität für ein gesamtes Thema erkannt zu werden.",
    },
    {
      question: "Wie lange dauert es, Topical Authority aufzubauen?",
      answer:
        "Für ein eng definiertes Thema (z.B. 'Zahnreinigung in Berlin') kannst du in 3-6 Monaten mit 10-15 Artikeln Autorität aufbauen. Für breite Themen wie 'Local SEO' braucht es 12-24 Monate und 50+ Inhalte. Die Schlüsselfaktoren sind Tiefe, Vollständigkeit und Konsistenz.",
    },
    {
      question: "Brauche ich hunderte Artikel für Topical Authority?",
      answer:
        "Nein. Qualität schlägt Quantität. Ein gut strukturiertes Topic Cluster mit 10-20 tiefgehenden Artikeln kann mehr Autorität aufbauen als 100 dünne Seiten. Entscheidend ist die vollständige Abdeckung aller Unterthemen und die richtige interne Verlinkung.",
    },
    {
      question: "Wie misst man Topical Authority?",
      answer:
        "Direkt messbar ist sie nicht, aber Indikatoren sind: Rankings für mehrere verwandte Keywords gleichzeitig, Featured Snippets für Themen-Fragen, Knowledge Panel, wachsender organischer Traffic für ein Themencluster und zunehmende Zitierungen durch AI-Suchmaschinen.",
    },
    {
      question: "Ist Semantic SEO auch für kleine lokale Unternehmen relevant?",
      answer:
        "Absolut. Lokale Unternehmen können Topical Authority für ihre Branche + Region aufbauen. Eine Zahnarztpraxis in München kann z.B. durch 10-15 Fachartikel zur Zahngesundheit die regionale Autorität stärken und bei allen zahnmedizinischen Suchanfragen in München besser ranken.",
    },
    {
      question: "Was sind Topic Clusters?",
      answer:
        "Ein Topic Cluster besteht aus einer Pillar Page (umfassender Hauptartikel zu einem Kernthema) und mehreren Cluster-Artikeln (tiefere Beiträge zu Unterthemen), die alle untereinander und zur Pillar Page verlinkt sind. Dieses Modell signalisiert Google thematische Tiefe und Zusammenhang.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "+70%", label: "mehr Rankings mit Topic Clusters" },
          { value: "3x", label: "höhere AI-Zitierrate" },
          { value: "10-20", label: "Artikel pro Cluster ideal" },
          { value: "3-6 Mon.", label: "bis zur Themenautorität" },
        ].map((stat, i) => (
          <Card key={i} className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AutoLexikonParagraph>
        <p className="lead text-xl text-muted-foreground mb-8" id="intro">
          <strong>Google versteht Bedeutung, nicht nur Wörter.</strong> Semantic SEO
          ist der Ansatz, Inhalte so zu erstellen und zu strukturieren, dass
          Suchmaschinen den Kontext, die Zusammenhänge und die Tiefe deines
          Wissens erkennen — und dich als Autorität für ein ganzes Thema
          einstufen.
        </p>
      </AutoLexikonParagraph>

      <KeyTakeawaysBox
        items={[
          "Semantic SEO optimiert für Themen und Bedeutung statt für einzelne Keywords",
          "Topical Authority = Google erkennt dich als Experte für ein gesamtes Themenfeld",
          "Topic Clusters (Pillar Page + Cluster-Artikel) sind das Strukturmodell für Themenautorität",
          "Interne Verlinkung ist das wichtigste Signal für thematischen Zusammenhang",
          "AI-Suchmaschinen bevorzugen Quellen mit nachgewiesener Themenautorität",
        ]}
      />

      <BlogCTAABTest articleSlug="semantic-seo-topical-authority" position="intro" />

      {/* Was ist Semantic SEO */}
      <section id="was-ist-semantic-seo" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Was ist Semantic SEO?
        </h2>

        <p data-featured-snippet="true" data-speakable="true">
          <strong>Semantic SEO</strong> (semantische Suchmaschinenoptimierung)
          bezeichnet die Optimierung von Webinhalten basierend auf Bedeutung,
          Kontext und thematischen Zusammenhängen — statt auf einzelne Keywords.
          Ziel ist es, dass Suchmaschinen die Gesamtheit eines Themas verstehen
          und die Website als autoritative Quelle für dieses Themenfeld einstufen.
        </p>

        <p>
          Google hat sich seit dem <strong>Hummingbird-Update (2013)</strong> und
          dem <strong>BERT-Update (2019)</strong> fundamental verändert: Die
          Suchmaschine analysiert nicht mehr nur, ob ein Keyword auf einer Seite
          vorkommt, sondern versteht die <em>Bedeutung</em> hinter der Suchanfrage
          und bewertet, ob eine Website das Thema <em>umfassend</em> abdeckt.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            Denkmodell
          </p>
          <p className="text-muted-foreground">
            Stell dir vor, du suchst einen Arzt. Vertraust du eher dem Arzt, der
            <strong> einen</strong> guten Artikel über Erkältungen geschrieben hat —
            oder dem, der <strong>50 fundierte Artikel</strong> über Atemwegserkrankungen,
            Vorsorge, Diagnostik und Behandlungsmethoden hat? Google denkt genauso.
          </p>
        </div>
      </section>

      {/* Keyword vs Semantic */}
      <section id="keyword-vs-semantic" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Keyword SEO vs. Semantic SEO
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Aspekt</th>
                <th className="border border-border p-3 text-left">Keyword SEO</th>
                <th className="border border-border p-3 text-left">Semantic SEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Fokus", "Einzelnes Keyword pro Seite", "Themenfeld mit allen Facetten"],
                ["Strategie", "Keyword-Dichte & Platzierung", "Thematische Tiefe & Vollständigkeit"],
                ["Content-Menge", "1 Seite = 1 Keyword", "Cluster aus 10-20+ verknüpften Seiten"],
                ["Interne Links", "Random oder flach", "Hierarchisch: Pillar → Cluster → Detail"],
                ["Ranking-Potenzial", "1 Keyword rankt", "Dutzende verwandte Keywords ranken gleichzeitig"],
                ["Google-Signal", "Relevanz für Suchanfrage", "Autorität für gesamtes Thema"],
                ["AI-Tauglichkeit", "Gering", "Hoch — AI bevorzugt autoritative Quellen"],
                ["Nachhaltigkeit", "Fragil bei Updates", "Resilient — Autorität bleibt stabil"],
              ].map(([aspekt, keyword, semantic], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{aspekt}</td>
                  <td className="border border-border p-3 text-muted-foreground">{keyword}</td>
                  <td className="border border-border p-3 font-medium text-primary">{semantic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Topical Authority */}
      <section id="topical-authority" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Topical Authority aufbauen
        </h2>

        <p data-featured-snippet="true">
          <strong>Topical Authority</strong> (Themenautorität) bedeutet, dass Google
          deine Website als führende Quelle für ein bestimmtes Themenfeld anerkennt.
          Websites mit hoher Topical Authority ranken leichter für neue Keywords
          innerhalb ihres Themas, erhalten häufiger Featured Snippets und werden
          bevorzugt von AI-Suchmaschinen zitiert.
        </p>

        <h3>Die 5 Säulen der Topical Authority</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              icon: Layers,
              title: "1. Thematische Tiefe",
              desc: "Jedes Unterthema wird ausführlich behandelt. Keine Oberfläche, sondern Expertise auf allen Ebenen — von Grundlagen bis Fortgeschritten.",
            },
            {
              icon: Network,
              title: "2. Thematische Breite",
              desc: "Alle verwandten Aspekte eines Themas werden abgedeckt. Keine Lücken im Themenfeld. Google prüft, ob du das 'ganze Bild' zeigst.",
            },
            {
              icon: Globe,
              title: "3. Interne Verlinkung",
              desc: "Alle Inhalte sind hierarchisch verknüpft: Pillar → Hub → Artikel. Die Linkstruktur zeigt Google den thematischen Zusammenhang.",
            },
            {
              icon: BookOpen,
              title: "4. E-E-A-T-Signale",
              desc: "Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit — durch Autorenprofile, Quellen, Zertifikate und konsistente Qualität.",
            },
            {
              icon: TrendingUp,
              title: "5. Aktualität",
              desc: "Regelmäßige Updates und neue Inhalte. Google bevorzugt Quellen, die ihr Themenfeld aktiv pflegen und erweitern.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Topic Cluster */}
      <section id="topic-cluster" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Network className="h-6 w-6 text-primary" />
          Topic-Cluster-Modell
        </h2>

        <p>
          Das Topic-Cluster-Modell ist die praktische Umsetzung von Semantic SEO.
          Es organisiert Inhalte in eine hierarchische Struktur:
        </p>

        <div className="space-y-6 my-8">
          {/* Pillar */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
              🏆 Pillar Page (Säulenseite)
            </h3>
            <p className="text-muted-foreground mb-3">
              Umfassender Hauptartikel (3.000-5.000+ Wörter), der ein Kernthema
              vollständig überblickt. Verlinkt zu allen Cluster-Artikeln.
            </p>
            <p className="text-sm">
              <strong>Beispiel:</strong>{" "}
              <Link
                to="/blog/ultimate-guide-local-seo"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Ultimate Guide: Local SEO
              </Link>
            </p>
          </div>

          {/* Hub */}
          <div className="flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-primary rotate-90" />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
              📚 Hub Pages (Themen-Hubs)
            </h3>
            <p className="text-muted-foreground mb-3">
              Mittlere Ebene, die Artikel zu einem Unterthema bündeln. Verlinken
              nach oben zur Pillar Page und nach unten zu den Cluster-Artikeln.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                { label: "Google Maps SEO Hub", url: "/blog/google-maps-seo-hub" },
                { label: "AI & Zukunft Hub", url: "/blog/ai-zukunft-hub" },
                { label: "Branchen-Guides Hub", url: "/blog/local-seo-branchen-hub" },
              ].map((hub, i) => (
                <Link
                  key={i}
                  to={hub.url}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  {hub.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cluster Articles */}
          <div className="flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-primary rotate-90" />
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
              📄 Cluster-Artikel (Detail-Seiten)
            </h3>
            <p className="text-muted-foreground mb-3">
              Spezialisierte Artikel zu einem einzelnen Unterthema. Verlinken
              nach oben zum Hub und zur Pillar Page sowie seitwärts zu
              verwandten Cluster-Artikeln.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Beispiel:</strong> Dieser Artikel über Semantic SEO ist
              ein Cluster-Artikel im AI & Zukunft Hub, verknüpft mit dem{" "}
              <Link
                to="/blog/entity-seo-guide"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Entity SEO Guide
              </Link>{" "}
              und dem{" "}
              <Link
                to="/blog/ai-search-optimization-2026"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                AI Search Optimization Guide
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <p className="text-sm">
            <strong>🔑 Verlinkungsregel:</strong> Jeder Cluster-Artikel verlinkt
            zur Pillar Page (↑), zum Hub (↑) und zu 2-3 Geschwister-Artikeln (↔).
            Die Pillar Page verlinkt zu allen Hubs. So fließt Link Equity nach
            oben und thematischer Kontext nach unten.
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="semantic-seo-topical-authority" position="middle" />

      {/* Content-Strategie */}
      <section id="content-strategie" className="mb-12">
        <h2 className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Content-Strategie für Semantic SEO
        </h2>

        <h3>Schritt 1: Kernthema definieren</h3>
        <p>
          Wähle ein Thema, für das du Autorität aufbauen willst. Für lokale
          Unternehmen typisch: deine Branche + Region.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <Card className="border-primary/30">
            <CardContent className="pt-4">
              <CheckCircle className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium">Gut gewählt</p>
              <p className="text-sm text-muted-foreground">"Zahngesundheit in München" — spezifisch genug für Autorität, breit genug für 20+ Artikel</p>
            </CardContent>
          </Card>
          <Card className="border-destructive/30">
            <CardContent className="pt-4">
              <XCircle className="h-5 w-5 text-destructive mb-2" />
              <p className="text-sm font-medium">Zu breit / zu eng</p>
              <p className="text-sm text-muted-foreground">"Gesundheit" (zu breit) oder "Zahnreinigungspreise München-Schwabing" (zu eng für Cluster)</p>
            </CardContent>
          </Card>
        </div>

        <h3>Schritt 2: Themen-Map erstellen</h3>
        <p>
          Liste alle Unterthemen auf, die zu deinem Kernthema gehören.
          Nutze dafür:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Google "Ähnliche Fragen"</strong> — zeigt, was Nutzer noch wissen wollen</li>
          <li><strong>"Verwandte Suchanfragen"</strong> — am Ende der Suchergebnisseite</li>
          <li><strong>Google Autocomplete</strong> — Vorschläge während der Eingabe</li>
          <li><strong>Wettbewerber-Analyse</strong> — welche Themen decken Top-Konkurrenten ab?</li>
          <li>
            <strong>Keyword-Tools</strong> — für Suchvolumen und verwandte Begriffe (
            <Link to="/blog/local-seo-keywords-finden" className="text-primary underline decoration-primary/30 hover:decoration-primary">
              Keyword-Recherche Guide
            </Link>
            )
          </li>
        </ul>

        <h3>Schritt 3: Content-Hierarchie festlegen</h3>
        <p>Ordne jedes Unterthema in die Cluster-Hierarchie ein:</p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Ebene</th>
                <th className="border border-border p-3 text-left">Content-Typ</th>
                <th className="border border-border p-3 text-left">Umfang</th>
                <th className="border border-border p-3 text-left">Anzahl</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pillar", "Komplettguide zum Kernthema", "3.000-5.000+ Wörter", "1"],
                ["Hub", "Themenübersicht mit Artikelsammlung", "500-1.000 Wörter", "3-5"],
                ["Cluster", "Spezialisierter Fachartikel", "1.500-3.000 Wörter", "10-30"],
                ["Support", "FAQ, Glossar, Tools", "Variabel", "Nach Bedarf"],
              ].map(([ebene, typ, umfang, anzahl], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{ebene}</td>
                  <td className="border border-border p-3 text-muted-foreground">{typ}</td>
                  <td className="border border-border p-3 text-muted-foreground">{umfang}</td>
                  <td className="border border-border p-3 font-semibold text-primary">{anzahl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Schritt 4: Interne Verlinkung systematisieren</h3>
        <p>
          Die interne Verlinkung ist das wichtigste technische Signal für
          Semantic SEO. Sie zeigt Google, welche Seiten zusammengehören und
          wie sie hierarchisch zueinander stehen.
        </p>
        <div className="bg-muted/30 rounded-lg p-4 my-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Kontextuell verlinken</strong> — Links natürlich im Textfluss platzieren, nicht in generischen "Weiterlesen"-Listen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Anchor-Text optimieren</strong> — beschreibende Begriffe statt "hier klicken"</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Bidirektional verlinken</strong> — Cluster-Artikel → Pillar UND Pillar → Cluster-Artikel</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Geschwister vernetzen</strong> — verwandte Cluster-Artikel untereinander verlinken</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Semantische Signale */}
      <section id="semantische-signale" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Semantische Signale für Google
        </h2>

        <p>
          Neben der Content-Struktur gibt es technische Signale, die Google
          helfen, die semantische Bedeutung deiner Inhalte zu verstehen:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              signal: "Schema Markup (JSON-LD)",
              beschreibung: "Strukturierte Daten machen Entitäten und ihre Beziehungen maschinenlesbar. Besonders Article, FAQPage und LocalBusiness Schema.",
              link: { text: "Schema Guide", url: "/blog/schema-markup-local-seo" },
            },
            {
              signal: "Semantisches HTML",
              beschreibung: "Korrekte H-Tag-Hierarchie (H1 → H2 → H3), <article>, <section>, <nav> — gibt Content Struktur und Bedeutung.",
              link: { text: "Content für AI strukturieren", url: "/blog/website-content-ai-suchmaschinen" },
            },
            {
              signal: "NLP-optimierter Content",
              beschreibung: "Natürliche Sprache mit verwandten Begriffen (LSI Keywords). 'Zahnarzt' + 'Prophylaxe' + 'Karies' + 'Zahnreinigung' zeigt thematische Tiefe.",
            },
            {
              signal: "Entity-Verknüpfungen",
              beschreibung: "sameAs, mentions, about — Properties die zeigen, wie dein Content mit bekannten Entitäten zusammenhängt.",
              link: { text: "Entity SEO Guide", url: "/blog/entity-seo-guide" },
            },
            {
              signal: "Content-Frische-Signale",
              beschreibung: "datePublished und dateModified im Article-Schema. Regelmäßige Updates signalisieren aktive Themenpflege.",
            },
            {
              signal: "Breadcrumb-Navigation",
              beschreibung: "BreadcrumbList-Schema zeigt die hierarchische Position im Topic Cluster. Google nutzt dies für Sitelinks.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <div>
                <h4 className="font-semibold text-sm">{item.signal}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.beschreibung}</p>
                {item.link && (
                  <Link
                    to={item.link.url}
                    className="text-xs text-primary underline decoration-primary/30 hover:decoration-primary mt-1 inline-block"
                  >
                    → {item.link.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Semantic SEO */}
      <section id="local-semantic" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Semantic SEO für lokale Unternehmen
        </h2>

        <p>
          Für lokale Unternehmen bedeutet Semantic SEO: Werde die autoritative
          Quelle für deine <strong>Branche + Region</strong>. Das ist dein
          natürlicher Vorteil gegenüber großen, allgemeinen Websites.
        </p>

        <h3>Lokales Topic-Cluster-Beispiel: Zahnarztpraxis Berlin</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Ebene</th>
                <th className="border border-border p-3 text-left">Inhalt</th>
                <th className="border border-border p-3 text-left">Target Keywords</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pillar", "Komplettguide Zahngesundheit Berlin", "Zahnarzt Berlin, Zahngesundheit Berlin"],
                ["Hub", "Behandlungen Übersicht", "Zahnbehandlung Berlin, Zahnmedizin Berlin"],
                ["Cluster", "Professionelle Zahnreinigung: Ablauf & Kosten", "Zahnreinigung Berlin, PZR Kosten"],
                ["Cluster", "Zahnimplantate: Der komplette Ratgeber", "Zahnimplantate Berlin, Implantologe"],
                ["Cluster", "Angstpatienten: Sanfte Zahnmedizin erklärt", "Zahnarzt Angstpatienten Berlin"],
                ["Cluster", "Kinderzahnarzt: Tipps für den ersten Besuch", "Kinderzahnarzt Berlin"],
                ["Cluster", "Zahnschmerzen Notfall: Was tun?", "Zahnarzt Notdienst Berlin"],
                ["Support", "FAQ: Häufige Fragen zur Zahngesundheit", "Zahnarzt Fragen, Zahnpflege Tipps"],
              ].map(([ebene, inhalt, keywords], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      ebene === "Pillar" ? "bg-primary/15 text-primary" :
                      ebene === "Hub" ? "bg-primary/10 text-primary" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {ebene}
                    </span>
                  </td>
                  <td className="border border-border p-3 font-medium">{inhalt}</td>
                  <td className="border border-border p-3 text-muted-foreground text-xs">{keywords}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Mehr Branchenbeispiele:{" "}
          <Link
            to="/blog/local-seo-branchen-hub"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Branchen-Guides Hub
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/local-content-marketing"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Local Content Marketing
          </Link>
        </p>
      </section>

      {/* AI & Semantic SEO */}
      <section id="ai-semantic" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Semantic SEO & AI-Suchmaschinen
        </h2>

        <p data-featured-snippet="true">
          AI-Suchmaschinen wie Google AI Overviews, ChatGPT und Perplexity
          bewerten <strong>Topical Authority</strong> als primäres Vertrauenssignal.
          Websites, die ein Thema umfassend und tiefgehend abdecken, werden bis
          zu 3x häufiger als Quelle zitiert als einzelne, isolierte Artikel.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardContent className="pt-5">
              <h4 className="font-semibold text-sm mb-2">Warum AI Themenautorität liebt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Multi-Source-Verifizierung: AI kann Fakten gegen deine anderen Artikel prüfen
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Tiefe Expertise erkennbar: Cluster-Struktur zeigt systematisches Wissen
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Konsistente Informationen: Alle Artikel bestätigen sich gegenseitig
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <h4 className="font-semibold text-sm mb-2">So wirst du AI-Quelle</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Fact-first schreiben: Kernaussage im ersten Satz jedes Abschnitts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Definitionen im "X ist..."-Format für AI-Extraktion
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  llms.txt und speakable-Attribute implementieren
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p>
          Weiterführend:{" "}
          <Link
            to="/blog/ai-suche-lokale-unternehmen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            AI-Suche für lokale Unternehmen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/e-e-a-t-lokale-unternehmen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            E-E-A-T Guide
          </Link>
        </p>
      </section>

      {/* Praxis-Checkliste */}
      <section id="praxis-checkliste" className="mb-12">
        <h2 className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          Semantic SEO Praxis-Checkliste
        </h2>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <div className="space-y-3">
            {[
              "Kernthema definiert (Branche + Region oder Fachgebiet)",
              "Themen-Map mit allen Unterthemen erstellt",
              "Pillar Page geschrieben (3.000+ Wörter, Komplettüberblick)",
              "Mindestens 3 Hub-Seiten als Themensammler erstellt",
              "10+ Cluster-Artikel mit Spezialthemen veröffentlicht",
              "Interne Verlinkung: Jeder Artikel → Pillar, Hub + 2-3 Geschwister",
              "Schema Markup auf allen Seiten (Article, FAQPage, BreadcrumbList)",
              "NLP-optimiert: Verwandte Begriffe natürlich eingebaut",
              "Content-Kalender: Regelmäßige neue Artikel und Updates geplant",
              "Erfolgsmessung: Ranking-Tracking für alle Cluster-Keywords eingerichtet",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded border-primary/30" />
                <span className="text-sm group-hover:text-foreground transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection
        sources={[
          {
            title: "Google: How Search Works",
            url: "https://www.google.com/search/howsearchworks/",
            type: "documentation",
            description: "Offizielle Google-Dokumentation zur Funktionsweise der Suche",
          },
          {
            title: "Semrush: Topical Authority Study 2025",
            url: "https://www.semrush.com/blog/topical-authority/",
            type: "study",
            description: "Studie zum Einfluss von Topical Authority auf Rankings",
          },
          {
            title: "Ahrefs: Topic Clusters & Pillar Pages",
            url: "https://ahrefs.com/blog/topic-clusters/",
            type: "article",
            description: "Guide zur Implementierung von Topic Clusters",
          },
          {
            title: "Google: BERT & Natural Language Understanding",
            url: "https://blog.google/products/search/search-language-understanding-bert/",
            type: "documentation",
            description: "Google-Blogpost zum BERT-Update und semantischem Verstehen",
          },
        ]}
      />

      <BlogCTAABTest articleSlug="semantic-seo-topical-authority" position="end" />
      <HelpfulnessWidget articleSlug="semantic-seo-topical-authority" />
    </ArticleLayout>
  );
};

export default SemanticSeoGuide;
