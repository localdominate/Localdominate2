import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Clock, LayoutDashboard, Image, Code, Smartphone, TrendingUp, AlertTriangle, CheckCircle2, Settings, Gauge, Monitor } from "lucide-react";

const CoreWebVitalsLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("core-web-vitals-local-seo", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "was-sind-cwv", title: "Was sind Core Web Vitals?" },
    { id: "lcp", title: "LCP: Largest Contentful Paint" },
    { id: "fid-inp", title: "FID/INP: Interaktivität" },
    { id: "cls", title: "CLS: Cumulative Layout Shift" },
    { id: "messen", title: "Core Web Vitals messen" },
    { id: "optimierung", title: "Optimierungsstrategien" },
    { id: "local-seo", title: "Bedeutung für Local SEO" },
    { id: "mobile", title: "Mobile Performance" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was sind Core Web Vitals?", answer: "Core Web Vitals sind von Google definierte Kennzahlen für die Nutzererfahrung auf Websites. Sie messen Ladegeschwindigkeit (LCP), Interaktivität (INP, früher FID) und visuelle Stabilität (CLS). Seit 2021 sind sie ein offizieller Ranking-Faktor." },
    { question: "Wie wichtig sind Core Web Vitals für Local SEO?", answer: "Sehr wichtig, besonders für mobile Nutzer. 92% der lokalen Suchen kommen vom Smartphone. Langsame Websites verlieren 53% der mobilen Besucher nach 3 Sekunden. Gute Core Web Vitals verbessern Rankings und Conversion-Raten gleichermaßen." },
    { question: "Was ist ein guter LCP-Wert?", answer: "Ein guter LCP-Wert liegt unter 2,5 Sekunden. Werte zwischen 2,5 und 4 Sekunden müssen verbessert werden, über 4 Sekunden gilt als schlecht. Für lokale Unternehmen mit vielen mobilen Besuchern ist LCP besonders kritisch." },
    { question: "Was ist der Unterschied zwischen FID und INP?", answer: "FID (First Input Delay) maß nur die erste Interaktion. INP (Interaction to Next Paint) ersetzt FID seit März 2024 und misst alle Interaktionen während des gesamten Besuchs. INP ist aussagekräftiger für die tatsächliche Nutzererfahrung." },
    { question: "Wie messe ich meine Core Web Vitals?", answer: "Die wichtigsten Tools sind: Google PageSpeed Insights (schnelle Analyse), Google Search Console (reale Nutzerdaten), Chrome DevTools (detaillierte Analyse), und Lighthouse (umfassende Audits). Nutzen Sie Field-Daten für reale Werte." },
    { question: "Wie verbessere ich meinen LCP-Wert?", answer: "Die wichtigsten Maßnahmen: Bilder optimieren und lazy-loaden, Hero-Bild preloaden, Server-Response-Zeit verbessern, kritisches CSS inline einbinden, unnötiges JavaScript entfernen, CDN verwenden, Caching aktivieren." },
    { question: "Was verursacht schlechte CLS-Werte?", answer: "Häufige Ursachen: Bilder ohne Größenangaben, dynamisch eingefügte Werbung, Webfonts ohne font-display, nachladende Inhalte über dem Viewport. Lösung: Platzhalter reservieren und Größen immer angeben." },
    { question: "Wie wirken sich Core Web Vitals auf die Conversion aus?", answer: "Stark. Studien zeigen: 1 Sekunde schnellere Ladezeit = 7% mehr Conversions. Bei lokalen Suchen ist der Effekt noch stärker, weil Nutzer oft in Eile sind (Notfälle, 'in der Nähe'-Suchen)." },
    { question: "Welche Plugins verlangsamen meine WordPress-Website?", answer: "Typische Bremsen: Social-Media-Plugins, komplexe Page-Builder, schlecht konfigurierte Slider, Chat-Widgets, Analytics mit vielen Tracking-Scripts. Deaktivieren Sie ungenutzte Plugins und ersetzen Sie schwere durch leichte Alternativen." },
    { question: "Ist ein Hosting-Wechsel nötig für bessere Core Web Vitals?", answer: "Oft ja. Günstiges Shared-Hosting hat langsame Server-Response-Zeiten (TTFB). Für lokale Unternehmen empfehlen wir mindestens Managed WordPress Hosting oder einen deutschen Server für kurze Latenz." },
    { question: "Wie wichtig ist HTTPS für Core Web Vitals?", answer: "Sehr wichtig. HTTPS ist Voraussetzung für HTTP/2, was paralleles Laden ermöglicht und die Geschwindigkeit verbessert. Außerdem ist HTTPS ein eigenständiger Ranking-Faktor und schafft Vertrauen bei Nutzern." },
    { question: "Wie optimiere ich Bilder für bessere Core Web Vitals?", answer: "Verwenden Sie moderne Formate (WebP, AVIF), komprimieren Sie Bilder, geben Sie immer width/height an, nutzen Sie responsive Bilder mit srcset, und laden Sie Bilder below-the-fold mit lazy loading." },
    { question: "Was ist der Unterschied zwischen Lab- und Field-Daten?", answer: "Lab-Daten werden in kontrollierten Testumgebungen gemessen (Lighthouse). Field-Daten stammen von echten Nutzern (Chrome User Experience Report). Google verwendet Field-Daten für Rankings. Beide sind wichtig: Lab für Debugging, Field für reale Performance." },
    { question: "Wie lange dauert es, bis sich Verbesserungen auswirken?", answer: "Google sammelt Field-Daten über 28 Tage. Nach technischen Verbesserungen dauert es also mindestens einen Monat, bis sich die Werte in der Search Console aktualisieren. Lab-Daten verbessern sich sofort nach den Änderungen." },
    { question: "Können schlechte Core Web Vitals meine Rankings zerstören?", answer: "Core Web Vitals sind ein Ranking-Faktor, aber nicht der einzige. Relevanter Content bleibt wichtiger. Allerdings: Bei gleichwertigen Seiten gewinnt die schnellere. Und schlechte Performance kostet definitiv Conversions und damit indirekt Rankings." }
  ];


  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-3xl font-bold text-green-600">&lt;2.5s</div>
            <p className="text-sm text-muted-foreground">Guter LCP-Wert</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-4 text-center">
            <Zap className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-3xl font-bold text-blue-600">&lt;200ms</div>
            <p className="text-sm text-muted-foreground">Guter INP-Wert</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-4 text-center">
            <LayoutDashboard className="h-8 w-8 mx-auto mb-2 text-purple-500" />
            <div className="text-3xl font-bold text-purple-600">&lt;0.1</div>
            <p className="text-sm text-muted-foreground">Guter CLS-Wert</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Warum <LexikonLink term="Core Web Vitals" /> für lokale Unternehmen entscheidend sind</h2>
        <p className="text-lg mb-4" data-featured-snippet="true" data-speakable="true">
          <strong>Core Web Vitals</strong> sind drei von Google definierte Metriken zur Messung der Nutzererfahrung: LCP (Largest Contentful Paint) misst die Ladezeit, INP (Interaction to Next Paint) die Reaktionsgeschwindigkeit und CLS (Cumulative Layout Shift) die visuelle Stabilität. Sie sind seit 2021 ein offizieller Ranking-Faktor. Nur 33 % aller Websites bestehen alle drei Werte – für lokale Unternehmen mit 92 % mobilem Traffic ist die Optimierung besonders kritisch.
        </p>
        <p className="mb-4">
          Studien zeigen: <strong>53% der mobilen Nutzer</strong> verlassen eine Website, die länger als 3 Sekunden zum Laden braucht. Bei Notfall-Suchen wie "Zahnarzt Notdienst" oder "Autowerkstatt in der Nähe" ist die Geduld noch geringer – hohe <LexikonLink term="Bounce Rate" /> ist die Folge.
        </p>
        <p className="mb-6">
          Dieser Guide erklärt Ihnen, was Core Web Vitals sind, wie Sie sie messen und – am wichtigsten – wie Sie sie <strong>für Ihre lokale Website optimieren</strong> und damit Ihre <LexikonLink term="User Experience (UX)" /> verbessern.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="core-web-vitals-local-seo" />

      {/* Was sind Core Web Vitals? */}
      <section id="was-sind-cwv">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Was sind <LexikonLink term="Core Web Vitals" />?</h2>
        
        <p className="mb-4">
          <LexikonLink term="Core Web Vitals" /> sind drei von Google definierte <strong>Metriken für die <LexikonLink term="User Experience (UX)">Nutzererfahrung</LexikonLink></strong> und Teil des <LexikonLink term="Technical SEO" />:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-green-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-6 w-6 text-green-500" />
                <h3 className="font-bold text-lg">LCP</h3>
              </div>
              <p className="text-sm font-medium mb-1">Largest Contentful Paint</p>
              <p className="text-sm text-muted-foreground">Wie schnell wird der Hauptinhalt sichtbar?</p>
              <div className="mt-3">
                <Badge className="bg-green-100 text-green-800">Gut: &lt;2.5s</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-lg">INP</h3>
              </div>
              <p className="text-sm font-medium mb-1">Interaction to Next Paint</p>
              <p className="text-sm text-muted-foreground">Wie schnell reagiert die Seite auf Klicks?</p>
              <div className="mt-3">
                <Badge className="bg-blue-100 text-blue-800">Gut: &lt;200ms</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-purple-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <LayoutDashboard className="h-6 w-6 text-purple-500" />
                <h3 className="font-bold text-lg">CLS</h3>
              </div>
              <p className="text-sm font-medium mb-1">Cumulative Layout Shift</p>
              <p className="text-sm text-muted-foreground">Wie stabil bleibt das Layout beim Laden?</p>
              <div className="mt-3">
                <Badge className="bg-purple-100 text-purple-800">Gut: &lt;0.1</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Von FID zu INP: Der neue Interaktivitäts-Standard</h3>
            <p className="text-muted-foreground">
              Im März 2024 hat Google <strong>FID (First Input Delay) durch INP</strong> ersetzt. INP misst alle Interaktionen während des gesamten Besuchs, nicht nur die erste. Wenn Ihre alten Ressourcen noch von FID sprechen – INP ist der neue Standard.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* LCP */}
      <section id="lcp">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">LCP: Largest Contentful Paint optimieren</h2>
        
        <p className="mb-4">
          LCP misst, wann das <strong>größte sichtbare Element</strong> im Viewport geladen ist. Das kann ein Hero-Bild, eine große Überschrift oder ein Video-Thumbnail sein. Gute LCP-Werte verbessern auch dein <LexikonLink term="PageSpeed" /> Ranking.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">LCP-Wert</th>
                <th className="border p-3 text-left">Bewertung</th>
                <th className="border p-3 text-left">Auswirkung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">&lt;2,5 Sekunden</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Gut</Badge></td>
                <td className="border p-3 text-sm">Keine negativen Ranking-Effekte</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">2,5 – 4 Sekunden</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Verbesserungsbedürftig</Badge></td>
                <td className="border p-3 text-sm">Potenzieller Ranking-Nachteil</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">&gt;4 Sekunden</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Schlecht</Badge></td>
                <td className="border p-3 text-sm">Definitiver Ranking-Nachteil, hohe Absprungrate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">LCP-Optimierungsstrategien</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <Image className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Bilder für schnelleren LCP optimieren</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• WebP/AVIF-Format verwenden</li>
                <li>• Bilder komprimieren (TinyPNG, ShortPixel)</li>
                <li>• Hero-Bild mit <code>preload</code> laden</li>
                <li>• Responsive Bilder mit <code>srcset</code></li>
                <li>• CDN für Bildauslieferung nutzen</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Code className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Server & Code für besseren LCP optimieren</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• TTFB unter 800ms halten</li>
                <li>• Kritisches CSS inline einbinden</li>
                <li>• Render-blocking Resources entfernen</li>
                <li>• JavaScript defer/async verwenden</li>
                <li>• Browser-Caching aktivieren</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Praxis-Tipp: Hero-Bild für LCP preloaden
            </h4>
            <div className="bg-muted rounded p-3 text-sm font-mono">
              &lt;link rel="preload" as="image" href="/hero.webp" /&gt;
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Fügen Sie diesen Tag im Head-Bereich Ihrer Seite ein, damit das Hero-Bild priorisiert geladen wird.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FID/INP */}
      <section id="fid-inp">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">INP: Interaction to Next Paint optimieren</h2>
        
        <p className="mb-4">
          INP misst, wie schnell Ihre Website auf <strong>Nutzer-Interaktionen reagiert</strong> (Klicks, Tippen, Tastatureingaben). Anders als FID misst INP alle Interaktionen während des gesamten Besuchs.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">INP-Wert</th>
                <th className="border p-3 text-left">Bewertung</th>
                <th className="border p-3 text-left">Nutzerwahrnehmung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">&lt;200ms</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Gut</Badge></td>
                <td className="border p-3 text-sm">Seite fühlt sich reaktiv an</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">200 – 500ms</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Verbesserungsbedürftig</Badge></td>
                <td className="border p-3 text-sm">Spürbare Verzögerung</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">&gt;500ms</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Schlecht</Badge></td>
                <td className="border p-3 text-sm">Seite fühlt sich träge an</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">INP-Optimierungsstrategien</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Long Tasks aufbrechen:</strong> JavaScript-Aufgaben über 50ms in kleinere Chunks teilen</li>
          <li><strong>Third-Party-Scripts reduzieren:</strong> Tracking, Ads und Widgets belasten den Main Thread</li>
          <li><strong>Event-Handler optimieren:</strong> Komplexe Berechnungen mit requestAnimationFrame oder Web Workers auslagern</li>
          <li><strong>Input-Handler debounce/throttle:</strong> Scroll- und Resize-Events nicht bei jedem Pixel feuern</li>
        </ul>
      </section>

      <BlogCTAABTest position="middle" articleSlug="core-web-vitals-local-seo" />

      {/* CLS */}
      <section id="cls">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">CLS: Cumulative Layout Shift optimieren</h2>
        
        <p className="mb-4">
          CLS misst, wie oft sich Elemente <strong>unerwartet verschieben</strong>, während die Seite lädt. Jeder hat es erlebt: Man will auf einen Link klicken, und plötzlich springt der Inhalt weg.
        </p>

        <Card className="bg-orange-50 border-orange-200 mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Typisches CLS-Problem bei lokalen Websites
            </h3>
            <p className="text-muted-foreground">
              Nutzer will auf "Termin buchen" klicken → Werbebanner lädt → Button springt nach unten → Nutzer klickt auf Werbung statt Button = Frustration und verlorene Conversion.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-3">CLS-Ursachen und Lösungen für lokale Websites</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Ursache</th>
                <th className="border p-3 text-left">Lösung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Bilder ohne Größenangaben</td>
                <td className="border p-3 text-sm">Immer <code>width</code> und <code>height</code> angeben</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">Dynamische Werbung</td>
                <td className="border p-3 text-sm">Festen Platzhalter reservieren</td>
              </tr>
              <tr>
                <td className="border p-3">Webfonts ohne font-display</td>
                <td className="border p-3 text-sm"><code>font-display: swap</code> verwenden</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">Nachladende Inhalte oben</td>
                <td className="border p-3 text-sm">Skeleton-Loader oder feste Höhe setzen</td>
              </tr>
              <tr>
                <td className="border p-3">Cookie-Banner ohne Platz</td>
                <td className="border p-3 text-sm">Position: fixed verwenden</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Messen */}
      <section id="messen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Web Vitals messen & analysieren</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <Gauge className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-2">PageSpeed Insights für Web Vitals</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Googles offizielles Tool zeigt Lab- und Field-Daten sowie konkrete Optimierungsvorschläge.
              </p>
              <Badge variant="secondary">pagespeed.web.dev</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Monitor className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-2">Google Search Console Web Vitals Report</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Zeigt Core Web Vitals für alle Ihre Seiten basierend auf echten Nutzerdaten (Field-Daten).
              </p>
              <Badge variant="secondary">search.google.com/search-console</Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Lab-Daten vs. Field-Daten: Was zählt für Rankings?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Lab-Daten (Lighthouse)</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Kontrollierte Testumgebung</li>
                  <li>• Sofort verfügbar</li>
                  <li>• Gut zum Debuggen</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Field-Daten (CrUX)</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Echte Nutzerdaten (28 Tage)</li>
                  <li>• Für Rankings relevant</li>
                  <li>• Zeigt reale Performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Optimierungsstrategien */}
      <section id="optimierung">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ganzheitliche Core Web Vitals Optimierung</h2>
        
        <h3 className="text-xl font-semibold mb-3">1. Web-Hosting für schnelle Ladezeiten</h3>
        <p className="mb-4">
          Günstiges Shared-Hosting ist oft der <strong>größte Bremser</strong>. Für lokale Unternehmen empfehlen wir:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Managed WordPress Hosting (z.B. Raidboxes, WP Engine)</li>
          <li>Server in Deutschland für kurze Latenz</li>
          <li>TTFB (Time to First Byte) unter 800ms</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">2. Browser-Caching & Server-Caching aktivieren</h3>
        <p className="mb-4">
          Browser-Caching und Server-Caching reduzieren Ladezeiten für wiederkehrende Besucher drastisch.
        </p>

        <h3 className="text-xl font-semibold mb-3">3. Kritischen Rendering-Pfad für LCP optimieren</h3>
        <p className="mb-6">
          Alles, was für den ersten sichtbaren Bildschirminhalt nötig ist, sollte priorisiert laden. Alles andere kann warten.
        </p>
      </section>

      {/* Bedeutung für Local SEO */}
      <section id="local-seo">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Web Vitals Bedeutung für Local SEO</h2>
        
        <p className="mb-4">
          Core Web Vitals sind für lokale Unternehmen <strong>besonders relevant</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="bg-primary/5">
            <CardContent className="p-4">
              <Smartphone className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-2">Mobile-First Indexing & lokale Suchen</h3>
              <p className="text-sm text-muted-foreground">
                92% der lokalen Suchen kommen vom Smartphone. Mobile Core Web Vitals sind wichtiger als Desktop.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="p-4">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <h3 className="font-semibold mb-2">Core Web Vitals bei Notfall-Suchen</h3>
              <p className="text-sm text-muted-foreground">
                Bei "Zahnarzt Notdienst" oder "Autowerkstatt in der Nähe" zählt jede Sekunde. Langsame Seiten verlieren.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Conversion-Impact schnellerer Ladezeiten
            </h3>
            <p className="text-muted-foreground">
              <strong>1 Sekunde schnellere Ladezeit = 7% mehr Conversions.</strong> Für ein lokales Restaurant mit 1.000 monatlichen Website-Besuchern bedeutet das potenziell 70 zusätzliche Reservierungen pro Monat.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Mobile Performance */}
      <section id="mobile">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Mobile Performance für lokale SEO optimieren</h2>
        
        <p className="mb-4">
          Google verwendet <strong>Mobile-First-Indexing</strong>. Ihre mobilen Core Web Vitals sind entscheidend:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Touch-Targets:</strong> Buttons mindestens 48x48 Pixel groß</li>
          <li><strong>Above-the-Fold:</strong> Wichtigste Infos (Telefon, Adresse) sofort sichtbar</li>
          <li><strong>Click-to-Call:</strong> Telefonnummer als klickbarer Link</li>
          <li><strong>Karten-Einbettung:</strong> Google Maps lazy-loaden</li>
          <li><strong>Bilder:</strong> Responsive mit srcset, passende Größen für jedes Gerät</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQ: Core Web Vitals & Local SEO</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="core-web-vitals-local-seo" />

      <BlogCTAABTest position="end" articleSlug="core-web-vitals-local-seo" />

      {/* Final CTA */}
      <ArticleCTA />
    </ArticleLayout>
  );
};

export default CoreWebVitalsLocalSeo;
