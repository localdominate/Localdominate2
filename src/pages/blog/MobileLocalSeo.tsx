import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import MobileSpeedCalculator from "@/components/blog/MobileSpeedCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Smartphone, Phone, Zap, Layout, FileCode, AlertTriangle, ThumbsUp } from "lucide-react";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";

const MobileLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("mobile-local-seo", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "mobile-first", title: "Was bedeutet Mobile-First Indexing für dein Unternehmen?" },
    { id: "click-to-call", title: "Wie implementierst du Click-to-Call und Maps?" },
    { id: "page-speed", title: "Wie verbesserst du die mobile Ladezeit?" },
    { id: "mobile-ux", title: "Welche Mobile UX Best Practices steigern Conversions?" },
    { id: "amp", title: "Brauchst du noch AMP für Local SEO?" },
    { id: "checkliste", title: "Ist dein Mobile Local SEO komplett?" },
    { id: "faq", title: "Häufig gestellte Fragen" }
  ];

  const faqItems = [
    { question: "Warum ist Mobile SEO für lokale Unternehmen wichtig?", answer: "Über 80% aller lokalen Suchanfragen erfolgen mobil. Mobile Nutzer haben eine hohe Kaufabsicht – 76% besuchen innerhalb von 24 Stunden ein Geschäft nach einer mobilen lokalen Suche." },
    { question: "Was ist Mobile-First Indexing?", answer: "Mobile-First Indexing bedeutet, dass Google primär die mobile Version deiner Website für die Indexierung und das Ranking verwendet. Die Desktop-Version ist sekundär." },
    { question: "Wie schnell sollte eine mobile Seite laden?", answer: "Google empfiehlt eine Ladezeit unter 3 Sekunden. Jede Sekunde Verzögerung reduziert die Conversion-Rate um ca. 7%. Ideal sind unter 2 Sekunden." },
    { question: "Was ist ein Click-to-Call Button?", answer: "Ein Click-to-Call Button ermöglicht es mobilen Nutzern, mit einem Tippen anzurufen. Er wird mit dem tel:-Protokoll implementiert: <a href='tel:+491234567890'>Jetzt anrufen</a>" },
    { question: "Brauche ich noch AMP für Local SEO?", answer: "AMP ist seit 2021 kein Ranking-Faktor mehr für lokale Unternehmen. Moderne, schnelle Websites mit guten Core Web Vitals sind wichtiger als AMP-Implementierung." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Einführung */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-4" data-featured-snippet="true" data-speakable="true">
          <strong>Mobile Local SEO</strong> bezeichnet die Optimierung einer lokalen Unternehmenswebsite für Smartphone-Nutzer, einschließlich Mobile-First-Indexing, Core Web Vitals, Click-to-Call-Buttons und responsivem Design. Über 80 % aller lokalen Suchanfragen erfolgen mobil, und 76 % dieser Nutzer besuchen innerhalb von 24 Stunden ein Geschäft. Websites, die länger als 3 Sekunden laden, verlieren 53 % der mobilen Besucher.
        </p>

        <KeyTakeawaysBox 
          items={[
            "Mobile-First Indexing verstehen und richtig umsetzen",
            "Click-to-Call und Google Maps optimal integrieren",
            "Core Web Vitals für mobile lokale Websites optimieren",
            "Mobile UX Best Practices für höhere Conversions",
            "Komplette Mobile Local SEO Checkliste zum Abhaken"
          ]}
        />

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Mobile Local SEO Fakten 2026
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>76% der mobilen Suchanfragen</strong> führen innerhalb von 24 Stunden zu einem Geschäftsbesuch</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>53% der mobilen Nutzer</strong> verlassen Seiten, die länger als 3 Sekunden laden</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>"In meiner Nähe"-Suchen</strong> haben um 500% zugenommen in den letzten Jahren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span><strong>Mobile Conversion-Rate</strong> liegt bei lokalen Suchen 3x höher als bei nicht-lokalen</span>
            </li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="mobile-local-seo" position="intro" />

      {/* Mobile-First Indexing */}
      <section id="mobile-first" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Was bedeutet Mobile-First Indexing für dein Unternehmen?</h2>
        
        <p className="mb-6">
          Seit März 2021 verwendet Google ausschließlich <strong>Mobile-First Indexing</strong> für alle Websites. Das bedeutet: Google betrachtet primär die mobile Version deiner Website, um Ranking und Indexierung zu bestimmen. Die Desktop-Version ist nur noch sekundär relevant.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-green-600">✅ Was Mobile-First bedeutet</h3>
            <ul className="space-y-2 text-sm">
              <li>• Google crawlt primär die mobile Version</li>
              <li>• Mobile Inhalte bestimmen das Ranking</li>
              <li>• Mobile Page Speed ist Ranking-Faktor</li>
              <li>• Mobile Usability wird bewertet</li>
              <li>• Structured Data muss mobil vorhanden sein</li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-red-600">❌ Häufige Mobile-First Fehler</h3>
            <ul className="space-y-2 text-sm">
              <li>• Weniger Inhalte auf Mobile als Desktop</li>
              <li>• Versteckte Texte per CSS (display:none)</li>
              <li>• Fehlende strukturierte Daten mobil</li>
              <li>• Langsame mobile Ladezeiten</li>
              <li>• Nicht anklickbare Elemente</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Responsive Design vs. Separate Mobile Site</h3>
        
        <p className="mb-4">
          Google empfiehlt eindeutig <strong>Responsive Design</strong> statt separater mobiler Websites (m.beispiel.de). Hier die Gründe:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Kriterium</th>
                <th className="border p-3 text-left">Responsive Design</th>
                <th className="border p-3 text-left">Separate Mobile Site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Google-Empfehlung</td>
                <td className="border p-3 text-green-600">✅ Empfohlen</td>
                <td className="border p-3 text-orange-600">⚠️ Akzeptiert</td>
              </tr>
              <tr>
                <td className="border p-3">Wartungsaufwand</td>
                <td className="border p-3 text-green-600">✅ Eine Codebase</td>
                <td className="border p-3 text-red-600">❌ Zwei Versionen pflegen</td>
              </tr>
              <tr>
                <td className="border p-3">SEO-Komplexität</td>
                <td className="border p-3 text-green-600">✅ Eine URL pro Seite</td>
                <td className="border p-3 text-red-600">❌ Canonical-Tags nötig</td>
              </tr>
              <tr>
                <td className="border p-3">Link-Building</td>
                <td className="border p-3 text-green-600">✅ Links auf eine URL</td>
                <td className="border p-3 text-red-600">❌ Links werden aufgeteilt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 shrink-0" />
            <span><strong>Wichtig:</strong> Prüfe in der Google Search Console unter "Indexierung" → "Seiten", ob alle wichtigen Seiten mobil indexiert sind. Nutze den URL-Prüftool, um die mobile Version zu analysieren.</span>
          </p>
        </div>
      </section>

      {/* Click-to-Call & Maps */}
      <section id="click-to-call" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wie implementierst du Click-to-Call und Maps?</h2>
        
        <p className="mb-6">
          Mobile Nutzer erwarten <strong>sofortige Aktionsmöglichkeiten</strong>. Die wichtigsten sind: Direkt anrufen und Wegbeschreibung erhalten. Hier erfährst du, wie du beides optimal implementierst.
        </p>

        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          Click-to-Call Implementation
        </h3>

        <p className="mb-4">
          Ein Click-to-Call Button ermöglicht es Nutzern, mit einem einzigen Tippen anzurufen. Die Implementation ist einfach:
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`<!-- Einfacher Click-to-Call Link -->
<a href="tel:+491234567890" class="cta-button">
  Jetzt anrufen: 0123 456 7890
</a>

<!-- Mit Tracking für Analytics -->
<a href="tel:+491234567890" 
   onclick="gtag('event', 'click_to_call', {
     'event_category': 'contact',
     'event_label': 'header_phone'
   })">
  📞 Jetzt anrufen
</a>

<!-- Nur auf Mobile anzeigen -->
<a href="tel:+491234567890" class="md:hidden">
  Anrufen
</a>`}</code></pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">Best Practices Click-to-Call</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Internationales Format verwenden (+49...)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Button groß genug (min. 48x48px)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Öffnungszeiten daneben anzeigen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>Tracking für Conversion-Messung</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold mb-3">Placement-Empfehlungen</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 <strong>Header:</strong> Sticky, immer sichtbar</li>
              <li>📍 <strong>Hero-Bereich:</strong> Prominent platziert</li>
              <li>📍 <strong>Kontaktseite:</strong> Mehrfach</li>
              <li>📍 <strong>Footer:</strong> Mit Adresse kombiniert</li>
              <li>📍 <strong>Sticky Bar:</strong> Am unteren Rand</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Google Maps Integration</h3>

        <p className="mb-4">
          Neben dem Anruf ist die <strong>Wegbeschreibung</strong> die zweithäufigste Aktion mobiler Nutzer. So integrierst du Google Maps optimal:
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm"><code>{`<!-- Direktlink zu Google Maps Wegbeschreibung -->
<a href="https://www.google.com/maps/dir/?api=1&destination=Musterstraße+1,+80331+München">
  📍 Wegbeschreibung anzeigen
</a>

<!-- Mit aktueller Position als Start -->
<a href="https://www.google.com/maps/dir/?api=1&origin=current+location&destination=Musterstraße+1,+80331+München">
  🧭 Route von meinem Standort
</a>

<!-- Eingebettete Karte (Lazy Loading!) -->
<iframe 
  loading="lazy"
  src="https://www.google.com/maps/embed?pb=..."
  width="100%" 
  height="300"
  style="border:0;" 
  allowfullscreen="" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`}</code></pre>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <p className="flex items-start gap-2">
            <ThumbsUp className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <span><strong>Pro-Tipp:</strong> Lade eingebettete Google Maps per Lazy Loading und zeige initial nur ein statisches Kartenbild. Das verbessert die Ladezeit um 1-2 Sekunden.</span>
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="mobile-local-seo" position="middle" />

      {/* Page Speed */}
      <section id="page-speed" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Zap className="h-8 w-8 text-primary" />
          Mobile Page Speed Optimierung
        </h2>
        
        <p className="mb-6">
          Geschwindigkeit ist der <strong>kritischste Faktor</strong> für mobile lokale Websites. Google's Core Web Vitals messen die Nutzererfahrung und beeinflussen dein Ranking direkt.
        </p>

        <h3 className="text-xl font-semibold mb-4">Core Web Vitals für lokale Websites</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-2">LCP</div>
            <div className="font-semibold mb-1">Largest Contentful Paint</div>
            <div className="text-sm text-muted-foreground mb-2">Wann erscheint der Hauptinhalt?</div>
            <div className="text-sm">
              <span className="text-green-600">✅ Gut: &lt;2.5s</span><br/>
              <span className="text-orange-600">⚠️ Okay: &lt;4s</span><br/>
              <span className="text-red-600">❌ Schlecht: &gt;4s</span>
            </div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-2">INP</div>
            <div className="font-semibold mb-1">Interaction to Next Paint</div>
            <div className="text-sm text-muted-foreground mb-2">Wie schnell reagiert die Seite?</div>
            <div className="text-sm">
              <span className="text-green-600">✅ Gut: &lt;200ms</span><br/>
              <span className="text-orange-600">⚠️ Okay: &lt;500ms</span><br/>
              <span className="text-red-600">❌ Schlecht: &gt;500ms</span>
            </div>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-2">CLS</div>
            <div className="font-semibold mb-1">Cumulative Layout Shift</div>
            <div className="text-sm text-muted-foreground mb-2">Verschiebt sich der Inhalt?</div>
            <div className="text-sm">
              <span className="text-green-600">✅ Gut: &lt;0.1</span><br/>
              <span className="text-orange-600">⚠️ Okay: &lt;0.25</span><br/>
              <span className="text-red-600">❌ Schlecht: &gt;0.25</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Interaktiver Mobile Speed Rechner</h3>
        
        <MobileSpeedCalculator />

        <h3 className="text-xl font-semibold mb-4 mt-8">10 Speed-Optimierungen für lokale Websites</h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <strong>Bilder optimieren</strong>
              <p className="text-sm text-muted-foreground">Nutze WebP-Format, komprimiere auf 80% Qualität, definiere width/height Attribute für alle Bilder.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <strong>Lazy Loading aktivieren</strong>
              <p className="text-sm text-muted-foreground">Bilder unterhalb des sichtbaren Bereichs erst bei Bedarf laden: loading="lazy"</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <strong>CSS/JS minimieren</strong>
              <p className="text-sm text-muted-foreground">Entferne ungenutztes CSS, kombiniere Dateien, nutze Minifizierung für Produktion.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <strong>Browser-Caching nutzen</strong>
              <p className="text-sm text-muted-foreground">Cache-Header für statische Ressourcen setzen (mind. 1 Jahr für Assets).</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
            <div>
              <strong>CDN einsetzen</strong>
              <p className="text-sm text-muted-foreground">Cloudflare oder ähnliche CDNs reduzieren Ladezeiten weltweit um 50%+.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">6</span>
            <div>
              <strong>Kritisches CSS inlinen</strong>
              <p className="text-sm text-muted-foreground">Above-the-fold CSS direkt im HTML einbetten für schnelleres First Paint.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">7</span>
            <div>
              <strong>Fonts optimieren</strong>
              <p className="text-sm text-muted-foreground">Nur benötigte Schriftschnitte laden, font-display: swap verwenden.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">8</span>
            <div>
              <strong>Third-Party Scripts reduzieren</strong>
              <p className="text-sm text-muted-foreground">Jedes externe Script (Chat-Widgets, Analytics) kostet Ladezeit. Nur das Nötige laden.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">9</span>
            <div>
              <strong>GZIP/Brotli Kompression</strong>
              <p className="text-sm text-muted-foreground">Server-Kompression aktivieren für 70%+ kleinere Textdateien.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">10</span>
            <div>
              <strong>Preconnect/Preload nutzen</strong>
              <p className="text-sm text-muted-foreground">Verbindungen zu wichtigen Domains früh aufbauen für schnelleres Laden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile UX */}
      <section id="mobile-ux" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layout className="h-8 w-8 text-primary" />
          Mobile UX Best Practices
        </h2>
        
        <p className="mb-6">
          Eine schnelle Website nützt nichts, wenn die <strong>Nutzerführung</strong> schlecht ist. Mobile Nutzer haben besondere Anforderungen – hier die wichtigsten UX-Prinzipien für lokale Websites.
        </p>

        <h3 className="text-xl font-semibold mb-4">Thumb-Friendly Design</h3>

        <p className="mb-4">
          Die meisten Nutzer bedienen ihr Smartphone mit dem Daumen. Wichtige Elemente müssen in der "Daumenzone" liegen:
        </p>

        <div className="bg-card border rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">✅ Empfohlene Platzierung</h4>
              <ul className="space-y-2 text-sm">
                <li>• CTA-Buttons unten mittig</li>
                <li>• Navigation am unteren Rand</li>
                <li>• Wichtigste Aktionen in Daumenreichweite</li>
                <li>• Große Touch-Targets (min. 48px)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">❌ Zu vermeiden</h4>
              <ul className="space-y-2 text-sm">
                <li>• Wichtige Buttons oben links/rechts</li>
                <li>• Kleine, eng beieinanderliegende Links</li>
                <li>• Hover-Effekte als einzige Interaktion</li>
                <li>• Horizontales Scrollen erforderlich</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Mobile Formulare optimieren</h3>

        <p className="mb-4">
          Formulare auf lokalen Websites (Kontakt, Reservierung, Anfrage) müssen <strong>mobilfreundlich</strong> sein:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Do's</h4>
            <ul className="text-sm space-y-1">
              <li>✓ Große Input-Felder (min. 44px Höhe)</li>
              <li>✓ Richtigen Input-Type nutzen (tel, email)</li>
              <li>✓ Autofill aktivieren</li>
              <li>✓ Labels über den Feldern</li>
              <li>✓ Fehler sofort anzeigen</li>
              <li>✓ Fortschritt bei mehrstufigen Forms</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400">Don'ts</h4>
            <ul className="text-sm space-y-1">
              <li>✗ Zu viele Pflichtfelder</li>
              <li>✗ Captchas, die mobil schwer lösbar sind</li>
              <li>✗ Dropdowns mit 50+ Optionen</li>
              <li>✗ Datum manuell eintippen lassen</li>
              <li>✗ Formular ohne Bestätigung absenden</li>
              <li>✗ Placeholder als einziges Label</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <p className="text-sm mb-2 font-semibold">Beispiel: Optimiertes mobiles Kontaktformular</p>
          <pre className="text-sm"><code>{`<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" 
         autocomplete="name" required 
         class="h-12 text-base" />
  
  <label for="phone">Telefon</label>
  <input type="tel" id="phone" name="phone" 
         autocomplete="tel" 
         inputmode="numeric" 
         class="h-12 text-base" />
  
  <label for="email">E-Mail</label>
  <input type="email" id="email" name="email" 
         autocomplete="email" required
         class="h-12 text-base" />
  
  <button type="submit" class="h-14 text-lg font-bold">
    Jetzt anfragen
  </button>
</form>`}</code></pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Lokale Landingpages für Mobile</h3>

        <p className="mb-4">
          Jede lokale Landingpage sollte diese <strong>mobile-optimierten Elemente</strong> enthalten:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg">
            <span className="text-2xl">📞</span>
            <div>
              <strong>Click-to-Call prominent</strong>
              <p className="text-sm text-muted-foreground">Im Header sticky, im Hero-Bereich groß</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg">
            <span className="text-2xl">📍</span>
            <div>
              <strong>Adresse mit Maps-Link</strong>
              <p className="text-sm text-muted-foreground">Ein Tap zur Wegbeschreibung</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg">
            <span className="text-2xl">🕐</span>
            <div>
              <strong>Öffnungszeiten sichtbar</strong>
              <p className="text-sm text-muted-foreground">"Jetzt geöffnet" Status anzeigen</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg">
            <span className="text-2xl">⭐</span>
            <div>
              <strong>Bewertungen einbinden</strong>
              <p className="text-sm text-muted-foreground">Google-Rating und Testimonials</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-card border rounded-lg">
            <span className="text-2xl">📝</span>
            <div>
              <strong>Kurzes Kontaktformular</strong>
              <p className="text-sm text-muted-foreground">Max. 4-5 Felder für mobile Nutzung</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMP */}
      <section id="amp" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FileCode className="h-8 w-8 text-primary" />
          AMP für lokale Websites: Noch relevant?
        </h2>
        
        <p className="mb-6">
          <strong>Accelerated Mobile Pages (AMP)</strong> war lange Zeit ein Favorit für schnelle mobile Seiten. Doch die Situation hat sich seit 2021 grundlegend geändert.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Das Wichtigste zu AMP 2026
          </h3>
          <ul className="space-y-2">
            <li>• AMP ist <strong>kein Ranking-Faktor mehr</strong> (seit Juni 2021)</li>
            <li>• Der AMP-Badge in Suchergebnissen wurde entfernt</li>
            <li>• Core Web Vitals sind der neue Standard</li>
            <li>• Google empfiehlt keine AMP-Implementierung mehr für neue Projekte</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Wann AMP noch Sinn macht</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-card border rounded-lg">
            <h4 className="font-semibold mb-2 text-green-600">✅ AMP sinnvoll für:</h4>
            <ul className="text-sm space-y-1">
              <li>• Nachrichten-Websites mit Google News</li>
              <li>• Content-Publisher mit vielen Artikeln</li>
              <li>• Bereits existierende AMP-Implementierungen</li>
              <li>• E-Mail-Marketing (AMP for Email)</li>
            </ul>
          </div>
          <div className="p-4 bg-card border rounded-lg">
            <h4 className="font-semibold mb-2 text-red-600">❌ AMP nicht nötig für:</h4>
            <ul className="text-sm space-y-1">
              <li>• Lokale Unternehmenswebsites</li>
              <li>• Restaurant-Websites</li>
              <li>• Dienstleister-Landingpages</li>
              <li>• Shops mit komplexer Funktionalität</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Die bessere Alternative: Gut optimiertes HTML</h3>

        <p className="mb-4">
          Statt AMP zu implementieren, fokussiere dich auf diese Punkte:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Core Web Vitals optimieren</strong> – LCP, INP, CLS verbessern</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Responsive Design</strong> – Eine schnelle Website für alle Geräte</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>Moderne Bildformate</strong> – WebP/AVIF statt PNG/JPG</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
            <span><strong>CDN nutzen</strong> – Schnelle Auslieferung weltweit</span>
          </li>
        </ul>
      </section>

      <BlogCTAABTest articleSlug="mobile-local-seo" position="end" />

      {/* Checkliste */}
      <section id="checkliste" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Mobile Local SEO Checkliste</h2>
        
        <p className="mb-6">
          Nutze diese Checkliste, um deine lokale Website auf Mobilfreundlichkeit zu prüfen:
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-card border rounded-lg">
            <h3 className="font-semibold mb-3">📱 Technische Grundlagen</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Responsive Design implementiert
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Viewport Meta-Tag korrekt gesetzt
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Keine horizontale Scrollbalken
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Text ohne Zoomen lesbar (min. 16px)
              </li>
            </ul>
          </div>

          <div className="p-4 bg-card border rounded-lg">
            <h3 className="font-semibold mb-3">⚡ Performance</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> LCP unter 2.5 Sekunden
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> INP unter 200ms
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> CLS unter 0.1
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Bilder optimiert und lazy loaded
              </li>
            </ul>
          </div>

          <div className="p-4 bg-card border rounded-lg">
            <h3 className="font-semibold mb-3">📞 Lokale Elemente</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Click-to-Call Button vorhanden
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Maps-Link zur Wegbeschreibung
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Öffnungszeiten sichtbar
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> NAP-Daten im Footer
              </li>
            </ul>
          </div>

          <div className="p-4 bg-card border rounded-lg">
            <h3 className="font-semibold mb-3">👆 UX & Usability</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Touch-Targets mindestens 48px
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Formulare mobilfreundlich
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Navigation thumb-friendly
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Keine störenden Pop-ups
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Warum ist Mobile SEO für lokale Unternehmen wichtig?</AccordionTrigger>
            <AccordionContent>
              Über 80% aller lokalen Suchanfragen erfolgen mobil. Mobile Nutzer haben eine hohe Kaufabsicht – 76% besuchen innerhalb von 24 Stunden ein Geschäft nach einer mobilen lokalen Suche. Wenn deine Website nicht mobilfreundlich ist, verlierst du diese potenziellen Kunden an die Konkurrenz.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Was ist Mobile-First Indexing?</AccordionTrigger>
            <AccordionContent>
              Mobile-First Indexing bedeutet, dass Google primär die mobile Version deiner Website für die Indexierung und das Ranking verwendet. Die Desktop-Version ist sekundär. Seit März 2021 gilt dies für alle Websites. Deshalb muss deine mobile Version alle wichtigen Inhalte und strukturierte Daten enthalten.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Wie schnell sollte eine mobile Seite laden?</AccordionTrigger>
            <AccordionContent>
              Google empfiehlt eine Ladezeit unter 3 Sekunden. Jede Sekunde Verzögerung reduziert die Conversion-Rate um ca. 7%. Ideal sind unter 2 Sekunden. Für die Core Web Vitals sollte LCP unter 2.5 Sekunden, INP unter 200ms und CLS unter 0.1 liegen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Was ist ein Click-to-Call Button?</AccordionTrigger>
            <AccordionContent>
              Ein Click-to-Call Button ermöglicht es mobilen Nutzern, mit einem einzigen Tippen anzurufen. Er wird mit dem tel:-Protokoll implementiert: &lt;a href="tel:+491234567890"&gt;Jetzt anrufen&lt;/a&gt;. Platziere ihn prominent im Header, Hero-Bereich und Footer deiner Website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Brauche ich noch AMP für Local SEO?</AccordionTrigger>
            <AccordionContent>
              Nein, AMP ist seit 2021 kein Ranking-Faktor mehr für lokale Unternehmen. Google hat den AMP-Badge in Suchergebnissen entfernt. Moderne, schnelle Websites mit guten Core Web Vitals sind wichtiger als AMP-Implementierung. Fokussiere dich stattdessen auf Performance-Optimierung deiner regulären Website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Wie teste ich meine mobile Website?</AccordionTrigger>
            <AccordionContent>
              Nutze diese kostenlosen Tools: Google PageSpeed Insights für Performance und Core Web Vitals, Google Search Console für Mobile Usability-Berichte, Google's Mobile-Friendly Test für grundlegende Mobilfreundlichkeit, und Chrome DevTools für Device-Simulation. Teste auch auf echten Geräten verschiedener Größen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Welche Bildformate sind für Mobile am besten?</AccordionTrigger>
            <AccordionContent>
              WebP ist das beste Format für mobile Websites – es bietet 25-35% kleinere Dateien als JPEG bei gleicher Qualität. AVIF ist noch effizienter, aber noch nicht überall unterstützt. Nutze responsive Images mit srcset, um verschiedene Größen für verschiedene Bildschirme zu liefern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Wie optimiere ich Formulare für Mobile?</AccordionTrigger>
            <AccordionContent>
              Nutze große Input-Felder (min. 44px Höhe), den richtigen Input-Type (tel, email), aktiviere Autofill, platziere Labels über den Feldern, zeige Fehler sofort an und reduziere die Anzahl der Felder auf das Minimum. Vermeide schwer lösbare Captchas und zu viele Pflichtfelder.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <SourcesSection 
        sources={[
          { title: "Google Mobile-First Indexing", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing", type: "documentation", description: "Offizielle Google-Dokumentation zu Mobile-First Indexing" },
          { title: "Web.dev Core Web Vitals", url: "https://web.dev/vitals/", type: "documentation", description: "Google's Leitfaden zu Core Web Vitals" },
          { title: "PageSpeed Insights", url: "https://pagespeed.web.dev/", type: "tool", description: "Google-Tool zur Messung der Seitengeschwindigkeit" },
          { title: "Google Search Console Mobile Usability", url: "https://support.google.com/webmasters/answer/9063469", type: "documentation", description: "Mobile Usability Bericht in der Search Console" },
          { title: "Think with Google Mobile Speed", url: "https://www.thinkwithgoogle.com/intl/de-de/marketing-strategien/app-und-mobile/mobile-page-speed-new-industry-benchmarks/", type: "article", description: "Mobile Speed Benchmarks" }
        ]}
      />

      <HelpfulnessWidget articleSlug="mobile-local-seo" />
    </ArticleLayout>
  );
};

export default MobileLocalSeo;
