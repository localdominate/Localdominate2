import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoKeywordsImg from "@/assets/blog/local-seo-keywords.jpg";
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  MapPin, 
  Lightbulb, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  BarChart3,
  Zap,
  Globe,
  MessageSquare,
  Building2,
  Compass
} from "lucide-react";

const LocalSeoKeywords = () => {
  const article = getArticleBySlug("local-seo-keywords-finden");
  
  if (!article) {
    return <div>Artikel nicht gefunden</div>;
  }

  const tocItems = [
    { id: "was-sind-lokale-keywords", title: "Was sind lokale Keywords?" },
    { id: "keyword-typen", title: "Die 5 Keyword-Typen für lokale Unternehmen" },
    { id: "kostenlose-tools", title: "Kostenlose Tools für Keyword-Recherche" },
    { id: "schritt-fuer-schritt", title: "Keyword-Recherche Schritt für Schritt" },
    { id: "suchintention", title: "Keywords nach Suchintention kategorisieren" },
    { id: "wettbewerber-analyse", title: "Wettbewerber-Keywords analysieren" },
    { id: "keywords-einsetzen", title: "Keywords in der Praxis einsetzen" },
    { id: "haeufige-fehler", title: "10 häufige Keyword-Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was sind lokale Keywords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lokale Keywords sind Suchbegriffe mit lokalem Bezug, z.B. 'Zahnarzt München' oder 'Restaurant in meiner Nähe'. Sie zeigen Google, dass der Suchende ein lokales Ergebnis erwartet."
        }
      },
      {
        "@type": "Question",
        "name": "Wie finde ich die besten lokalen Keywords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nutze Google Autocomplete, Google Keyword Planner, analysiere Wettbewerber und frage deine Kunden, wonach sie gesucht haben. Kombiniere deine Dienstleistung mit Stadtteilen und 'in meiner Nähe'."
        }
      },
      {
        "@type": "Question",
        "name": "Wie viele Keywords sollte ich pro Seite verwenden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fokussiere dich auf 1 Haupt-Keyword und 2-4 semantisch verwandte Nebenkeywords pro Seite. Qualität schlägt Quantität - Keyword-Stuffing schadet dem Ranking."
        }
      },
      {
        "@type": "Question",
        "name": "Sind 'in meiner Nähe'-Keywords wichtig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, sehr! 'In meiner Nähe'-Suchen haben in den letzten Jahren um über 500% zugenommen. Sie signalisieren hohe Kaufabsicht und unmittelbaren Bedarf."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte ich meine Keywords aktualisieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Überprüfe deine Keywords quartalsweise. Suchtrends ändern sich, neue Wettbewerber kommen hinzu, und saisonale Keywords werden relevant."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Short-Tail und Long-Tail Keywords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short-Tail Keywords sind kurz (1-2 Wörter) mit hohem Suchvolumen aber hoher Konkurrenz. Long-Tail Keywords sind länger (3+ Wörter) mit weniger Suchen aber höherer Conversion-Rate und weniger Wettbewerb."
        }
      },
      {
        "@type": "Question",
        "name": "Soll ich für jeden Stadtteil eine eigene Seite erstellen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wenn du dort tatsächlich Kunden bedienst. Erstelle für jeden relevanten Stadtteil eine eigene Landingpage mit einzigartigem Content über diesen Bereich."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wichtig ist das Suchvolumen bei lokalen Keywords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weniger wichtig als bei nationalen Keywords. Ein lokales Keyword mit 50 monatlichen Suchen kann sehr wertvoll sein, wenn die Suchenden kaufbereit sind."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist Keyword-Kannibalisierung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keyword-Kannibalisierung passiert, wenn mehrere Seiten für dasselbe Keyword ranken wollen. Google weiß nicht, welche Seite relevant ist, und beide verlieren Rankings."
        }
      },
      {
        "@type": "Question",
        "name": "Wie finde ich Keywords mit geringem Wettbewerb?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nutze Long-Tail-Varianten, kombiniere mit spezifischen Stadtteilen statt nur der Stadt, und suche nach Fragen die deine Zielgruppe stellt. Tools wie AlsoAsked helfen dabei."
        }
      },
      {
        "@type": "Question",
        "name": "Sind Voice Search Keywords anders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja! Voice Search verwendet natürliche Sprache und Fragen. Statt 'Friseur Berlin' sagen Menschen 'Wo ist der nächste Friseur?' Optimiere für Frage-Keywords."
        }
      },
      {
        "@type": "Question",
        "name": "Wie messe ich den Erfolg meiner Keywords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nutze Google Search Console für Rankings und Klicks, Google Analytics für Traffic und Conversions, und Google Business Insights für lokale Suchanfragen."
        }
      }
    ]
  };

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      {/* Intro */}
      <p className="text-xl leading-relaxed mb-8">
        <strong>Keywords sind das Fundament jeder erfolgreichen Local SEO Strategie.</strong> Wenn du die falschen Keywords wählst, 
        verschwendest du Zeit und Geld – selbst wenn du auf Platz 1 rankst. In diesem umfassenden Guide lernst du, 
        wie du die <strong>perfekten lokalen Keywords</strong> für dein Unternehmen findest und gezielt einsetzt.
      </p>

      <BlogImage 
        src={localSeoKeywordsImg} 
        alt="Lokale Keyword-Recherche"
        caption="Die richtige Keyword-Recherche ist der Grundstein für lokale SEO-Erfolge"
      />

      {/* Key Takeaways Box */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Das lernst du in diesem Guide:
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span>Die 5 verschiedenen lokalen Keyword-Typen und wann du sie einsetzt</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span>Kostenlose Tools für die Keyword-Recherche (ohne teure SEO-Software)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span>Schritt-für-Schritt Anleitung zur systematischen Keyword-Recherche</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span>Wie du Wettbewerber-Keywords analysierst und für dich nutzt</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span>10 häufige Fehler, die dein Ranking kosten</span>
          </li>
        </ul>
      </div>

      <TableOfContents items={tocItems} />

      {/* Section 1 */}
      <section id="was-sind-lokale-keywords" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <MapPin className="h-7 w-7 text-primary" />
          Was sind lokale Keywords?
        </h2>
        
        <p>
          <strong>Lokale Keywords</strong> sind Suchbegriffe, bei denen der Nutzer ein Ergebnis in seiner Nähe erwartet. 
          Sie unterscheiden sich fundamental von nationalen Keywords und erfordern eine andere Strategie.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Nationales Keyword
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              "Beste Laufschuhe 2026"
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Nutzer will Informationen</li>
              <li>• Standort ist irrelevant</li>
              <li>• Online-Shops ranken</li>
              <li>• Hohe Konkurrenz bundesweit</li>
            </ul>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Lokales Keyword
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              "Laufschuhe kaufen Köln"
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Nutzer will lokales Geschäft</li>
              <li>• Standort ist entscheidend</li>
              <li>• Google Maps Ergebnisse</li>
              <li>• Konkurrenz nur lokal</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          Warum lokale Keywords so wertvoll sind
        </h3>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary">78%</div>
            <div className="text-sm text-muted-foreground">der lokalen Suchen führen zu Offline-Käufen</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary">28%</div>
            <div className="text-sm text-muted-foreground">kaufen innerhalb von 24 Stunden</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-3xl font-bold text-primary">500%</div>
            <div className="text-sm text-muted-foreground">Anstieg "in meiner Nähe"-Suchen</div>
          </div>
        </div>

        <p>
          Die <strong>Kaufabsicht bei lokalen Suchen</strong> ist deutlich höher als bei generischen Suchen. 
          Wer "Zahnarzt Notdienst Berlin" sucht, braucht jetzt einen Zahnarzt – nicht morgen, nicht in einer Woche. 
          Diese hohe Dringlichkeit macht lokale Keywords so wertvoll für dein Geschäft.
        </p>
      </section>

      {/* Section 2 */}
      <section id="keyword-typen" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Target className="h-7 w-7 text-primary" />
          Die 5 Keyword-Typen für lokale Unternehmen
        </h2>

        <p>
          Nicht alle lokalen Keywords sind gleich. Je nach Typ unterscheiden sich Suchvolumen, 
          Wettbewerb und Conversion-Rate erheblich. Hier sind die 5 wichtigsten Typen:
        </p>

        {/* Type 1 */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Explizit lokale Keywords
          </h3>
          <p className="text-muted-foreground mb-4">
            Der Nutzer gibt den Standort direkt in der Suche an. Dies sind die offensichtlichsten lokalen Keywords.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground mb-2">Beispiele:</p>
            <div className="flex flex-wrap gap-2">
              {["Friseur Hamburg", "Pizzeria Berlin Mitte", "Autowerkstatt Köln Ehrenfeld", "Steuerberater Frankfurt"].map((keyword) => (
                <span key={keyword} className="bg-background border border-border rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-foreground">Suchvolumen</div>
              <div className="text-muted-foreground">Mittel-Hoch</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Wettbewerb</div>
              <div className="text-muted-foreground">Mittel</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Conversion</div>
              <div className="text-muted-foreground">Hoch</div>
            </div>
          </div>
        </div>

        {/* Type 2 */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Implizit lokale Keywords
          </h3>
          <p className="text-muted-foreground mb-4">
            Der Nutzer gibt keinen Ort an, aber Google versteht, dass ein lokales Ergebnis gewünscht ist.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground mb-2">Beispiele:</p>
            <div className="flex flex-wrap gap-2">
              {["Zahnarzt Notdienst", "Restaurant italienisch", "Handwerker Sanitär", "Tierarzt Öffnungszeiten"].map((keyword) => (
                <span key={keyword} className="bg-background border border-border rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
            <p className="text-sm flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <span><strong>Wichtig:</strong> Google erkennt diese Suchen als lokal und zeigt das Local Pack. 
              Du konkurrierst hier automatisch mit lokalen Anbietern.</span>
            </p>
          </div>
        </div>

        {/* Type 3 */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
            "In meiner Nähe"-Keywords
          </h3>
          <p className="text-muted-foreground mb-4">
            Diese Keywords sind explodiert: +500% Anstieg in den letzten Jahren. Sie zeigen höchste Kaufabsicht.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground mb-2">Beispiele:</p>
            <div className="flex flex-wrap gap-2">
              {["Tankstelle in meiner Nähe", "Apotheke in der Nähe", "Bäcker in der Nähe jetzt offen", "Geldautomat in meiner Nähe"].map((keyword) => (
                <span key={keyword} className="bg-background border border-border rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-foreground">Suchvolumen</div>
              <div className="text-muted-foreground">Sehr Hoch</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Wettbewerb</div>
              <div className="text-muted-foreground">Hoch (standortbasiert)</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Conversion</div>
              <div className="text-muted-foreground">Sehr Hoch</div>
            </div>
          </div>
        </div>

        {/* Type 4 */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Long-Tail lokale Keywords
          </h3>
          <p className="text-muted-foreground mb-4">
            Längere, spezifischere Suchanfragen mit weniger Suchvolumen aber höherer Conversion-Rate.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground mb-2">Beispiele:</p>
            <div className="flex flex-wrap gap-2">
              {["Veganes Restaurant mit Außenbereich München", "24h Schlüsseldienst Köln günstig", "Kinderzahnarzt angstfrei Hamburg Altona"].map((keyword) => (
                <span key={keyword} className="bg-background border border-border rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
            <p className="text-sm flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span><strong>Goldgrube:</strong> Long-Tail Keywords haben oft wenig Wettbewerb und sehr spezifische Suchintention. 
              Wer "veganes Restaurant mit Außenbereich München" sucht, weiß genau was er will!</span>
            </p>
          </div>
        </div>

        {/* Type 5 */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
            Frage-Keywords (Voice Search)
          </h3>
          <p className="text-muted-foreground mb-4">
            Mit Voice Search suchen Menschen in ganzen Sätzen und Fragen. Diese Keywords werden immer wichtiger.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="font-medium text-foreground mb-2">Beispiele:</p>
            <div className="flex flex-wrap gap-2">
              {["Wo ist der nächste Tierarzt?", "Welcher Italiener hat jetzt geöffnet?", "Was kostet ein Haarschnitt bei einem guten Friseur?"].map((keyword) => (
                <span key={keyword} className="bg-background border border-border rounded-full px-3 py-1 text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tools */}
      <section id="kostenlose-tools" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Search className="h-7 w-7 text-primary" />
          Kostenlose Tools für Keyword-Recherche
        </h2>

        <p>
          Du brauchst keine teuren SEO-Tools wie Ahrefs oder Semrush. Diese kostenlosen Tools reichen für 
          eine professionelle lokale Keyword-Recherche völlig aus:
        </p>

        {/* Tool Cards */}
        <div className="space-y-6 my-8">
          {/* Google Autocomplete */}
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google Autocomplete</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Die Vorschläge die Google beim Tippen anzeigt basieren auf echten Suchanfragen.
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium mb-2">So nutzt du es:</p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Öffne ein Inkognito-Fenster (wichtig!)</li>
                    <li>2. Tippe deine Branche + Stadt</li>
                    <li>3. Notiere alle Vorschläge</li>
                    <li>4. Probiere verschiedene Buchstaben am Ende</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Google Keyword Planner */}
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google Keyword Planner</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Zeigt Suchvolumen und Wettbewerb. Du brauchst ein Google Ads Konto (kostenlos).
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium mb-2">Vorteile:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Echte Suchvolumen-Daten von Google</li>
                    <li>• Lokale Filterung nach Stadt/Region möglich</li>
                    <li>• Keyword-Ideen basierend auf deiner Website</li>
                    <li>• Saisonale Trends sichtbar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Google Trends */}
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google Trends</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Zeigt wie sich das Suchinteresse über Zeit entwickelt. Perfekt für saisonale Keywords.
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium mb-2">Ideal für:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Saisonale Trends erkennen (z.B. "Winterreifen wechseln" im Oktober)</li>
                    <li>• Keyword-Varianten vergleichen</li>
                    <li>• Regionale Unterschiede analysieren</li>
                    <li>• Aufkommende Trends früh erkennen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AnswerThePublic */}
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">AnswerThePublic</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Zeigt welche Fragen Menschen zu deinem Thema stellen. Perfekt für FAQ-Content.
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm font-medium mb-2">Generiert Fragen wie:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "Was kostet ein [Dienstleistung] in [Stadt]?"</li>
                    <li>• "Wie finde ich einen guten [Beruf]?"</li>
                    <li>• "Wann hat [Branche] geöffnet?"</li>
                    <li>• "Welcher [Anbieter] ist der beste?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Google Search Console */}
          <div className="bg-muted/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Google Search Console</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Zeigt für welche Keywords deine Website bereits gefunden wird – auch wenn du noch nicht auf Seite 1 rankst.
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Goldgrube:</strong> Keywords auf Position 11-20 sind "Low Hanging Fruits" – 
                    ein bisschen Optimierung bringt sie auf Seite 1!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Step by Step */}
      <section id="schritt-fuer-schritt" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Compass className="h-7 w-7 text-primary" />
          Keyword-Recherche Schritt für Schritt
        </h2>

        <p className="mb-6">
          Folge dieser systematischen 7-Schritte-Anleitung für eine vollständige lokale Keyword-Recherche:
        </p>

        {/* Step 1 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            1
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Seed-Keywords sammeln</h3>
          <p className="text-muted-foreground mb-4">
            Starte mit deinen Basis-Keywords: Deine Dienstleistungen, Produkte und Branche.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Fragen zur Ideenfindung:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Wie würde ein Kunde nach dir suchen?</li>
              <li>• Welche Begriffe verwenden Kunden am Telefon?</li>
              <li>• Was bieten deine Wettbewerber an?</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            2
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Lokale Varianten erstellen</h3>
          <p className="text-muted-foreground mb-4">
            Kombiniere deine Seed-Keywords mit lokalen Modifikatoren.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Kombiniere mit:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Stadt (z.B. "Friseur Hamburg")</li>
                <li>✓ Stadtteil (z.B. "Friseur Hamburg Altona")</li>
                <li>✓ Region (z.B. "Friseur Hamburger Westen")</li>
              </ul>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ "in meiner Nähe"</li>
                <li>✓ "in der Nähe"</li>
                <li>✓ Postleitzahl</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Google Autocomplete nutzen</h3>
          <p className="text-muted-foreground mb-4">
            Gib deine Keywords in Google ein und notiere alle Vorschläge.
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-sm flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <span><strong>Pro-Tipp:</strong> Nutze den Unterstrich (_) als Platzhalter. "Friseur _ Hamburg" zeigt 
              was Menschen zwischen dem Keyword und der Stadt suchen.</span>
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            4
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Suchvolumen prüfen</h3>
          <p className="text-muted-foreground mb-4">
            Nutze den Google Keyword Planner um das monatliche Suchvolumen zu ermitteln.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Wichtig bei lokalem Suchvolumen:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Niedrige Zahlen sind normal – 50 Suchen/Monat können sehr wertvoll sein</li>
              <li>• Filtere nach deiner Stadt/Region</li>
              <li>• Beachte saisonale Schwankungen</li>
            </ul>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            5
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Wettbewerb analysieren</h3>
          <p className="text-muted-foreground mb-4">
            Suche deine Keywords und analysiere wer bereits rankt.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Prüfe für die Top-3 Ergebnisse:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Haben sie viele Bewertungen?</li>
              <li>• Ist ihre Website professionell?</li>
              <li>• Nutzen sie das Keyword im Title?</li>
              <li>• Wie alt sind die Websites?</li>
            </ul>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            6
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Keywords kategorisieren</h3>
          <p className="text-muted-foreground mb-4">
            Sortiere deine Keywords nach Suchintention und Priorität.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-medium">Priorität</th>
                  <th className="text-left p-3 font-medium">Kriterien</th>
                  <th className="text-left p-3 font-medium">Aktion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3"><span className="text-green-500 font-medium">Hoch</span></td>
                  <td className="p-3">Hohe Kaufabsicht, erreichbarer Wettbewerb</td>
                  <td className="p-3">Sofort optimieren</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-3"><span className="text-yellow-500 font-medium">Mittel</span></td>
                  <td className="p-3">Gutes Volumen, starker Wettbewerb</td>
                  <td className="p-3">Langfristig aufbauen</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3"><span className="text-red-500 font-medium">Niedrig</span></td>
                  <td className="p-3">Geringe Relevanz oder zu starker Wettbewerb</td>
                  <td className="p-3">Beobachten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step 7 */}
        <div className="relative pl-8 pb-8">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            7
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Keyword-Map erstellen</h3>
          <p className="text-muted-foreground mb-4">
            Ordne jedem Keyword eine Zielseite zu. Ein Keyword = Eine Seite.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Beispiel Keyword-Map:</p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><strong>Startseite:</strong> "Friseur Hamburg" (Haupt-Keyword)</li>
              <li><strong>/leistungen/herrenschnitt:</strong> "Herrenfriseur Hamburg"</li>
              <li><strong>/leistungen/damenschnitt:</strong> "Damenfriseur Hamburg"</li>
              <li><strong>/stadtteil/altona:</strong> "Friseur Hamburg Altona"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Suchintention */}
      <section id="suchintention" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Users className="h-7 w-7 text-primary" />
          Keywords nach Suchintention kategorisieren
        </h2>

        <p className="mb-6">
          Die <strong>Suchintention</strong> ist entscheidend. Ein Keyword mit hohem Suchvolumen bringt nichts, 
          wenn die Intention nicht zu deinem Angebot passt.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* Informational */}
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Informational</h3>
                <p className="text-sm text-muted-foreground">Nutzer sucht Informationen</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Beispiele:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "Wie oft zum Zahnarzt?"</li>
                <li>• "Was kostet ein Friseur?"</li>
                <li>• "Heizung macht Geräusche"</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Nutze für:</strong> Blog-Artikel, FAQ-Seiten
              </p>
            </div>
          </div>

          {/* Navigational */}
          <div className="border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Compass className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Navigational</h3>
                <p className="text-sm text-muted-foreground">Nutzer sucht bestimmte Website</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Beispiele:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "[Markenname] Hamburg"</li>
                <li>• "[Firmenname] Öffnungszeiten"</li>
                <li>• "[Firmenname] Bewertungen"</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Nutze für:</strong> Markenaufbau, Reputation
              </p>
            </div>
          </div>

          {/* Transactional */}
          <div className="border border-primary/30 rounded-xl p-6 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Transactional</h3>
                <p className="text-sm text-muted-foreground">Nutzer will kaufen/buchen</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Beispiele:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "Friseur Termin buchen Hamburg"</li>
                <li>• "Sanitär Notdienst jetzt"</li>
                <li>• "Zahnarzt Termin heute"</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Höchste Priorität!</strong> Direkt auf Conversion-Seiten
              </p>
            </div>
          </div>

          {/* Local */}
          <div className="border border-primary/30 rounded-xl p-6 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Local</h3>
                <p className="text-sm text-muted-foreground">Nutzer sucht lokales Ergebnis</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Beispiele:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• "Bester Friseur Hamburg"</li>
                <li>• "Restaurant in meiner Nähe"</li>
                <li>• "Autowerkstatt Köln Ehrenfeld"</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Dein Fokus!</strong> Optimiere Google Business + Website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Wettbewerber */}
      <section id="wettbewerber-analyse" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Building2 className="h-7 w-7 text-primary" />
          Wettbewerber-Keywords analysieren
        </h2>

        <p className="mb-6">
          Deine Wettbewerber haben bereits die Vorarbeit gemacht. Nutze ihre Keywords als Inspiration – 
          aber kopiere nicht blind, sondern finde Lücken.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
          So findest du Wettbewerber-Keywords (kostenlos)
        </h3>

        <div className="space-y-4 my-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">1. Google Maps analysieren</h4>
            <p className="text-sm text-muted-foreground">
              Suche dein Haupt-Keyword auf Google Maps. Die Top-3 sind deine direkten Wettbewerber. 
              Analysiere ihre Profile: Welche Kategorien nutzen sie? Welche Keywords stehen in der Beschreibung?
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">2. Website-Titel analysieren</h4>
            <p className="text-sm text-muted-foreground">
              Der Title-Tag verrät das Haupt-Keyword. Schau im Browser-Tab oder im Quellcode 
              (Rechtsklick → Seitenquelltext → suche nach &lt;title&gt;).
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">3. Seiten-Struktur studieren</h4>
            <p className="text-sm text-muted-foreground">
              Welche Unterseiten haben sie? Jede Seite targetiert meist ein Keyword. 
              z.B. /leistungen/herrenschnitt = "Herrenschnitt [Stadt]"
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">4. Bewertungen lesen</h4>
            <p className="text-sm text-muted-foreground">
              In Google Bewertungen stehen oft die Begriffe, die Kunden verwenden. 
              "Der beste Kinderfriseur!" → Keyword-Idee: "Kinderfriseur [Stadt]"
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Keyword-Lücken finden
          </h4>
          <p className="text-muted-foreground mb-4">
            Suche nach Keywords, die deine Wettbewerber <strong>nicht</strong> nutzen:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Stadtteile die niemand targetiert</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Spezielle Dienstleistungen (z.B. "Barber Hamburg" statt nur "Friseur Hamburg")</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Frage-Keywords für Blog-Content</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span>Kombinationen mit Modifikatoren ("günstig", "Notdienst", "24h")</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 7: Keywords einsetzen */}
      <section id="keywords-einsetzen" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <Zap className="h-7 w-7 text-primary" />
          Keywords in der Praxis einsetzen
        </h2>

        <p className="mb-6">
          Du hast deine Keywords – jetzt musst du sie richtig platzieren. Hier sind die wichtigsten Stellen:
        </p>

        {/* Google Business Profile */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Google Business Profil
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Unternehmensname</p>
                <p className="text-sm text-muted-foreground">Nur der echte Firmenname – keine Keywords hinzufügen!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Kategorie</p>
                <p className="text-sm text-muted-foreground">Wähle die passendste Hauptkategorie + 2-5 Nebenkategorien</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Beschreibung</p>
                <p className="text-sm text-muted-foreground">Natürlich geschrieben mit 2-3 wichtigen Keywords</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Leistungen/Produkte</p>
                <p className="text-sm text-muted-foreground">Jede Leistung ist eine Keyword-Chance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="border border-border rounded-xl p-6 my-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Website-Optimierung
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-medium">Element</th>
                  <th className="text-left p-3 font-medium">Keyword-Platzierung</th>
                  <th className="text-left p-3 font-medium">Beispiel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Title-Tag</td>
                  <td className="p-3">Am Anfang, max. 60 Zeichen</td>
                  <td className="p-3 text-muted-foreground">Friseur Hamburg – Salon Müller</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-3 font-medium">Meta Description</td>
                  <td className="p-3">1-2x natürlich einbauen</td>
                  <td className="p-3 text-muted-foreground">Ihr Friseur in Hamburg Altona...</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">H1-Überschrift</td>
                  <td className="p-3">Einmal pro Seite, mit Keyword</td>
                  <td className="p-3 text-muted-foreground">Friseur Hamburg – Termine online</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-3 font-medium">URL</td>
                  <td className="p-3">Kurz und mit Keyword</td>
                  <td className="p-3 text-muted-foreground">/friseur-hamburg-altona</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 font-medium">Bild-Alt-Texte</td>
                  <td className="p-3">Beschreibend mit Keyword</td>
                  <td className="p-3 text-muted-foreground">Salon Müller Friseur Hamburg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Keyword-Stuffing vermeiden!
          </h4>
          <p className="text-muted-foreground">
            Schreibe für Menschen, nicht für Suchmaschinen. Ein Keyword pro 100 Wörter ist genug. 
            Google erkennt Überoptimierung und straft sie ab.
          </p>
        </div>
      </section>

      {/* Section 8: Häufige Fehler */}
      <section id="haeufige-fehler" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <AlertTriangle className="h-7 w-7 text-primary" />
          10 häufige Keyword-Fehler
        </h2>

        <p className="mb-6">
          Diese Fehler kosten dich Rankings und Kunden. Vermeide sie um jeden Preis:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              title: "1. Keywords im Firmennamen bei Google",
              desc: "Verstößt gegen Google-Richtlinien und führt zur Sperrung deines Profils."
            },
            {
              title: "2. Nur auf ein Keyword fokussieren",
              desc: "Diversifiziere! Wenn ein Keyword wegbricht, stehst du nicht mit leeren Händen da."
            },
            {
              title: "3. Suchvolumen überbewerten",
              desc: "50 Suchen mit hoher Kaufabsicht sind mehr wert als 5.000 ohne."
            },
            {
              title: "4. Lokalen Bezug vergessen",
              desc: "Für 'Friseur' wirst du nie ranken. Für 'Friseur Hamburg Altona' schon."
            },
            {
              title: "5. Keyword-Kannibalisierung",
              desc: "Wenn 3 Seiten für dasselbe Keyword konkurrieren, verlieren alle."
            },
            {
              title: "6. Keywords nicht tracken",
              desc: "Ohne Tracking weißt du nicht, was funktioniert. Nutze die Search Console."
            },
            {
              title: "7. Veraltete Keywords nutzen",
              desc: "Suchtrends ändern sich. Prüfe quartalsweise ob deine Keywords noch relevant sind."
            },
            {
              title: "8. Long-Tail ignorieren",
              desc: "Long-Tail Keywords haben weniger Wettbewerb und höhere Conversion-Raten."
            },
            {
              title: "9. Voice Search vergessen",
              desc: "Optimiere auch für Frage-Keywords wie 'Wo finde ich einen guten Friseur?'"
            },
            {
              title: "10. Mobile Suche unterschätzen",
              desc: "60%+ der lokalen Suchen sind mobil. 'In meiner Nähe' ist mobil noch wichtiger."
            }
          ].map((error, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-1">{error.title}</h4>
              <p className="text-sm text-muted-foreground">{error.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-keywords-finden" position="end" />

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mt-12 mb-6">
          <MessageSquare className="h-7 w-7 text-primary" />
          FAQ – Häufige Fragen zu lokalen Keywords
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Was sind lokale Keywords?",
              a: "Lokale Keywords sind Suchbegriffe mit lokalem Bezug, z.B. 'Zahnarzt München' oder 'Restaurant in meiner Nähe'. Sie zeigen Google, dass der Suchende ein lokales Ergebnis erwartet."
            },
            {
              q: "Wie finde ich die besten lokalen Keywords?",
              a: "Nutze Google Autocomplete, Google Keyword Planner, analysiere Wettbewerber und frage deine Kunden, wonach sie gesucht haben. Kombiniere deine Dienstleistung mit Stadtteilen und 'in meiner Nähe'."
            },
            {
              q: "Wie viele Keywords sollte ich pro Seite verwenden?",
              a: "Fokussiere dich auf 1 Haupt-Keyword und 2-4 semantisch verwandte Nebenkeywords pro Seite. Qualität schlägt Quantität – Keyword-Stuffing schadet dem Ranking."
            },
            {
              q: "Sind 'in meiner Nähe'-Keywords wichtig?",
              a: "Ja, sehr! 'In meiner Nähe'-Suchen haben in den letzten Jahren um über 500% zugenommen. Sie signalisieren hohe Kaufabsicht und unmittelbaren Bedarf."
            },
            {
              q: "Wie oft sollte ich meine Keywords aktualisieren?",
              a: "Überprüfe deine Keywords quartalsweise. Suchtrends ändern sich, neue Wettbewerber kommen hinzu, und saisonale Keywords werden relevant."
            },
            {
              q: "Was ist der Unterschied zwischen Short-Tail und Long-Tail Keywords?",
              a: "Short-Tail Keywords sind kurz (1-2 Wörter) mit hohem Suchvolumen aber hoher Konkurrenz. Long-Tail Keywords sind länger (3+ Wörter) mit weniger Suchen aber höherer Conversion-Rate und weniger Wettbewerb."
            },
            {
              q: "Soll ich für jeden Stadtteil eine eigene Seite erstellen?",
              a: "Ja, wenn du dort tatsächlich Kunden bedienst. Erstelle für jeden relevanten Stadtteil eine eigene Landingpage mit einzigartigem Content über diesen Bereich."
            },
            {
              q: "Wie wichtig ist das Suchvolumen bei lokalen Keywords?",
              a: "Weniger wichtig als bei nationalen Keywords. Ein lokales Keyword mit 50 monatlichen Suchen kann sehr wertvoll sein, wenn die Suchenden kaufbereit sind."
            },
            {
              q: "Was ist Keyword-Kannibalisierung?",
              a: "Keyword-Kannibalisierung passiert, wenn mehrere Seiten für dasselbe Keyword ranken wollen. Google weiß nicht, welche Seite relevant ist, und beide verlieren Rankings."
            },
            {
              q: "Wie finde ich Keywords mit geringem Wettbewerb?",
              a: "Nutze Long-Tail-Varianten, kombiniere mit spezifischen Stadtteilen statt nur der Stadt, und suche nach Fragen die deine Zielgruppe stellt. Tools wie AlsoAsked helfen dabei."
            },
            {
              q: "Sind Voice Search Keywords anders?",
              a: "Ja! Voice Search verwendet natürliche Sprache und Fragen. Statt 'Friseur Berlin' sagen Menschen 'Wo ist der nächste Friseur?' Optimiere für Frage-Keywords."
            },
            {
              q: "Wie messe ich den Erfolg meiner Keywords?",
              a: "Nutze Google Search Console für Rankings und Klicks, Google Analytics für Traffic und Conversions, und Google Business Insights für lokale Suchanfragen."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mt-12">
        <h3 className="font-semibold text-foreground mb-3">Fazit: Keywords sind der erste Schritt zum Erfolg</h3>
        <p className="text-muted-foreground mb-4">
          Die richtige Keyword-Strategie ist das Fundament jeder erfolgreichen Local SEO Kampagne. 
          Nimm dir die Zeit für eine gründliche Recherche – es zahlt sich mehrfach aus.
        </p>
        <p className="text-muted-foreground">
          <strong>Dein nächster Schritt:</strong> Erstelle deine eigene Keyword-Liste mit der 7-Schritte-Methode. 
          Starte mit 10 Keywords und erweitere kontinuierlich.
        </p>
      </div>

      <SourcesSection 
        sources={[
          { title: "Google Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/", type: "tool", description: "Kostenloser Keyword-Recherche-Tool von Google" },
          { title: "MOZ Keyword Research Guide", url: "https://moz.com/beginners-guide-to-seo/keyword-research", type: "article", description: "Umfassender Leitfaden zur Keyword-Recherche" },
          { title: "Google Trends", url: "https://trends.google.de/", type: "tool", description: "Suchtrends und Saisonalität analysieren" },
          { title: "AlsoAsked", url: "https://alsoasked.com/", type: "tool", description: "Fragen-Tool für Long-Tail Keywords" },
          { title: "AnswerThePublic", url: "https://answerthepublic.com/", type: "tool", description: "Visualisierung von Suchanfragen und Fragen" }
        ]}
      />

      <HelpfulnessWidget articleSlug="local-seo-keywords" />
    </ArticleLayout>
  );
};

export default LocalSeoKeywords;