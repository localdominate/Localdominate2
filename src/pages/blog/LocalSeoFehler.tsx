import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { useLanguage } from "@/i18n/LanguageContext";
import FehlerDiagnoseQuiz from "@/components/blog/FehlerDiagnoseQuiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle, Zap, MapPin, Star, Globe, Smartphone, Search, FileText, MessageSquare, Clock, Users, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoFehler = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-fehler", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "technische-fehler", title: "Welche technischen SEO-Fehler kosten dich Rankings?" },
    { id: "google-business", title: "Welche Google Business Fehler schaden deiner Sichtbarkeit?" },
    { id: "content-fehler", title: "Welche Content-Fehler schwächen dein Local SEO?" },
    { id: "bewertungs-fehler", title: "Wie vermeidest du kritische Bewertungs-Fehler?" },
    { id: "quiz", title: "Fehler-Diagnose Quiz" },
    { id: "checkliste", title: "Ist dein Local SEO fehlerfrei?" },
    { id: "faq", title: "Häufig gestellte Fragen" }
  ];

  const faqItems = [
    { question: "Welcher Local SEO Fehler ist am schlimmsten?", answer: "Die größten Auswirkungen haben typischerweise: 1) NAP-Inkonsistenz, 2) Unvollständiges Google Business Profil, und 3) Keine Bewertungsstrategie. Diese drei sollten Sie zuerst beheben." },
    { question: "Wie lange dauert es, alle Fehler zu beheben?", answer: "Die technischen Fehler können oft in einem Tag behoben werden. Google Business Optimierung braucht 2-3 Tage konzentrierter Arbeit. Content und Bewertungen sind laufende Aufgaben. Rechnen Sie mit 2-4 Wochen für die Basis-Korrekturen." },
    { question: "Kann ich Local SEO Fehler alleine beheben?", answer: "Die meisten Fehler können Sie selbst beheben, besonders wenn Sie technisch nicht völlig unerfahren sind. Für Schema Markup und Website-Optimierung könnte professionelle Hilfe sinnvoll sein." },
    { question: "Was kostet die Behebung dieser Fehler?", answer: "Vieles ist kostenlos: Google Business optimieren, NAP korrigieren, auf Bewertungen antworten, Content schreiben. Kosten entstehen ggf. für besseres Hosting (ca. 10-30€/Monat) oder professionelle Fotos (einmalig 200-500€)." },
    { question: "Wann sehe ich Ergebnisse nach der Fehlerbehebung?", answer: "Einige Verbesserungen sind sofort sichtbar (vollständiges GBP, Antworten auf Bewertungen). Ranking-Verbesserungen brauchen typischerweise 4-12 Wochen. Der Compound-Effekt setzt nach 3-6 Monaten ein." },
    { question: "Was, wenn ich diese Fehler schon seit Jahren mache?", answer: "Besser spät als nie! Google bewertet Ihren aktuellen Zustand, nicht die Vergangenheit. Sobald Sie die Fehler beheben, beginnt Google, Ihre Seite neu zu bewerten." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <p className="lead text-xl text-muted-foreground mb-4" id="intro" data-featured-snippet="true" data-speakable="true">
        <strong>Die häufigsten Local SEO Fehler</strong> sind NAP-Inkonsistenz, ein unvollständiges Google Business Profil, fehlende Bewertungsstrategie, kein Schema Markup und mangelnde mobile Optimierung. 90 % aller lokalen Unternehmen machen mindestens 5 dieser Fehler – oft ohne es zu wissen. Jeder einzelne kostet Sichtbarkeit im <LexikonLink term="Local Pack" /> und damit potenzielle Kunden.
      </p>
      <p className="text-muted-foreground mb-8">
        In diesem Guide decken wir die 15 häufigsten <LexikonLink term="Local SEO" /> Fehler auf und zeigen 
        Ihnen, wie Sie sie sofort beheben können.
      </p>

      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <div>
            <h3 className="font-bold text-lg text-red-700 dark:text-red-400">
              Diese Fehler kosten Sie jeden Tag Kunden
            </h3>
            <p className="text-sm text-red-600/80">
              Prüfen Sie, welche davon auf Ihr Unternehmen zutreffen
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="font-bold text-red-700">5</p>
            <p className="text-muted-foreground">Technische Fehler</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="font-bold text-red-700">5</p>
            <p className="text-muted-foreground">Google Business</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="font-bold text-red-700">3</p>
            <p className="text-muted-foreground">Content-Fehler</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="font-bold text-red-700">2</p>
            <p className="text-muted-foreground">Bewertungen</p>
          </div>
        </div>
      </div>

      <BlogCTAABTest articleSlug="local-seo-fehler" position="intro" />

      {/* Technische Fehler */}
      <section id="technische-fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Globe className="h-8 w-8 text-primary" />
          Welche technischen SEO-Fehler kosten dich Rankings?
        </h2>

        <p className="mb-6">
          Technische Probleme sind oft unsichtbar, aber verheerend für Ihre Rankings. 
          Google kann Ihre Seite nicht richtig indexieren, wenn diese Basics nicht stimmen.
        </p>

        {/* Fehler 1 */}
        <div className="mb-8 border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#1</span>
            <h3 className="text-xl font-semibold">Keine Mobile-Optimierung</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Über 60% aller lokalen Suchen erfolgen mobil. 
              Wenn Ihre Website auf Smartphones schlecht aussieht oder langsam lädt, 
              verlieren Sie die Mehrheit Ihrer potenziellen Kunden.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Häufige Symptome:</strong> Text zu klein, Buttons nicht klickbar, 
              horizontales Scrollen nötig, Bilder werden abgeschnitten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-red-600">
                  <XCircle className="h-4 w-4" /> Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Desktop-Layout wird auf Mobile gequetscht dargestellt
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" /> Lösung
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Responsive Design mit Media Queries, Mobile-First Ansatz
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>💡 Schnell-Test:</strong> Öffnen Sie{" "}
              <a 
                href="https://search.google.com/test/mobile-friendly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Google Mobile-Friendly Test
              </a>{" "}
              und geben Sie Ihre URL ein.
            </p>
          </div>
        </div>

        {/* Fehler 2 */}
        <div className="mb-8 border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#2</span>
            <h3 className="text-xl font-semibold">Langsame Ladezeit (Page Speed)</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> 53% der mobilen Nutzer verlassen eine Seite, 
              wenn sie länger als 3 Sekunden lädt. Google nutzt Core Web Vitals als 
              Ranking-Faktor.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Häufige Ursachen:</strong> Große Bilder, zu viele Plugins, 
              schlechtes Hosting, nicht-optimierter Code.
            </p>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border p-2 text-left">Metrik</th>
                  <th className="border p-2 text-center text-green-600">Gut</th>
                  <th className="border p-2 text-center text-yellow-600">Verbesserungswürdig</th>
                  <th className="border p-2 text-center text-red-600">Schlecht</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">LCP (Largest Contentful Paint)</td>
                  <td className="border p-2 text-center">&lt; 2,5s</td>
                  <td className="border p-2 text-center">2,5 - 4s</td>
                  <td className="border p-2 text-center">&gt; 4s</td>
                </tr>
                <tr>
                  <td className="border p-2">FID (First Input Delay)</td>
                  <td className="border p-2 text-center">&lt; 100ms</td>
                  <td className="border p-2 text-center">100 - 300ms</td>
                  <td className="border p-2 text-center">&gt; 300ms</td>
                </tr>
                <tr>
                  <td className="border p-2">CLS (Cumulative Layout Shift)</td>
                  <td className="border p-2 text-center">&lt; 0,1</td>
                  <td className="border p-2 text-center">0,1 - 0,25</td>
                  <td className="border p-2 text-center">&gt; 0,25</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>💡 Schnell-Test:</strong>{" "}
              <a 
                href="https://pagespeed.web.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                PageSpeed Insights
              </a>{" "}
              zeigt detaillierte Analysen und Verbesserungsvorschläge.
            </p>
          </div>
        </div>

        {/* Fehler 3 */}
        <div className="mb-8 border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#3</span>
            <h3 className="text-xl font-semibold">Fehlendes oder falsches Schema Markup</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Ohne Schema Markup versteht Google nicht, 
              dass Sie ein lokales Unternehmen sind. Sie verpassen Rich Snippets wie 
              Sterne, Öffnungszeiten und Preise in den Suchergebnissen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-red-600">
                  <XCircle className="h-4 w-4" /> Häufige Fehler
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>• Kein LocalBusiness Schema vorhanden</p>
                <p>• Falscher @type (zu allgemein)</p>
                <p>• Schema nicht mit GBP synchron</p>
                <p>• Syntaxfehler im JSON-LD</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-4 w-4" /> Best Practice
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>• Spezifischen @type wählen</p>
                <p>• Alle Pflichtfelder ausfüllen</p>
                <p>• Schema mit Rich Results Test prüfen</p>
                <p>• NAP identisch zu Google Business</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fehler 4 */}
        <div className="mb-8 border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#4</span>
            <h3 className="text-xl font-semibold">Keine HTTPS-Verschlüsselung</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Websites ohne SSL-Zertifikat werden von 
              Chrome als "Nicht sicher" markiert. Nutzer vertrauen Ihnen nicht, und 
              Google stuft Sie ab.
            </p>
            <p className="text-sm text-muted-foreground">
              In 2025 sollte jede Website HTTPS haben – es gibt keinen Grund mehr für HTTP.
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <Shield className="h-6 w-6 text-green-600" />
            <div className="text-sm">
              <p className="font-semibold">Lösung:</p>
              <p>Kostenloses SSL mit Let's Encrypt, oder über Ihren Hoster aktivieren. 
              Dauert meist nur wenige Klicks.</p>
            </div>
          </div>
        </div>

        {/* Fehler 5 */}
        <div className="mb-8 border-l-4 border-red-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#5</span>
            <h3 className="text-xl font-semibold">NAP-Inkonsistenz im Web</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Name, Adresse und Telefonnummer (NAP) sind 
              überall im Internet unterschiedlich geschrieben. Google weiß nicht, 
              welche Version korrekt ist, und vertraut Ihren Daten weniger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-red-600 mb-2">❌ Inkonsistent</p>
              <div className="text-xs space-y-1 font-mono">
                <p>Müller GmbH, Hauptstr. 5</p>
                <p>Firma Müller, Hauptstraße 5</p>
                <p>Müller & Co., Hauptstr. 5a</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <p className="text-sm font-semibold text-green-600 mb-2">✅ Konsistent</p>
              <div className="text-xs space-y-1 font-mono">
                <p>Müller GmbH</p>
                <p>Hauptstraße 5</p>
                <p>80331 München</p>
                <p>+49 89 12345678</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>💡 Tipp:</strong> Prüfen Sie alle Verzeichnisse systematisch. 
              Erstellen Sie eine Master-Liste mit der exakten Schreibweise und 
              korrigieren Sie alle Abweichungen.
            </p>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-fehler" position="middle" />

      {/* Google Business Fehler */}
      <section id="google-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Google Business Fehler (6-10)
        </h2>

        <p className="mb-6">
          Ihr Google Business Profil ist der wichtigste Faktor für lokale Rankings. 
          Selbst kleine Fehler hier haben große Auswirkungen.
        </p>

        {/* Fehler 6 */}
        <div className="mb-8 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#6</span>
            <h3 className="text-xl font-semibold">Unvollständiges Google Business Profil</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Google bevorzugt vollständige Profile. 
              Fehlende Informationen = niedrigere Rankings und weniger Vertrauen 
              bei Suchenden.
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm font-semibold">Checkliste für vollständiges Profil:</p>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {[
                "Firmenname (exakt wie auf Schild)",
                "Primäre + sekundäre Kategorien",
                "Vollständige Adresse",
                "Servicegebiet (falls zutreffend)",
                "Öffnungszeiten (inkl. Feiertage)",
                "Telefonnummer (lokal bevorzugt)",
                "Website-URL",
                "Beschreibung (750 Zeichen)",
                "Attribute (10+ relevant)",
                "25+ Fotos in verschiedenen Kategorien",
                "Produkte/Dienstleistungen",
                "FAQ-Bereich mit Antworten"
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Fehler 7 */}
        <div className="mb-8 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#7</span>
            <h3 className="text-xl font-semibold">Falsche oder zu allgemeine Kategorie</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Die primäre Kategorie ist einer der 
              wichtigsten Ranking-Faktoren. Eine zu allgemeine Kategorie bedeutet 
              Wettbewerb mit irrelevanten Unternehmen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-red-600">❌ Zu allgemein</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>• "Restaurant" statt "Italienisches Restaurant"</p>
                <p>• "Arzt" statt "Zahnarzt"</p>
                <p>• "Geschäft" statt "Optiker"</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-600">✅ Spezifisch</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>• "Pizzeria" als primäre Kategorie</p>
                <p>• "Kieferorthopäde" statt "Zahnarzt"</p>
                <p>• "Augenoptiker" mit Spezialisierung</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>💡 Tipp:</strong> Recherchieren Sie, welche Kategorien Ihre 
              Top-Konkurrenten nutzen. Google bietet oft sehr spezifische Kategorien, 
              die Sie vielleicht nicht kennen.
            </p>
          </div>
        </div>

        {/* Fehler 8 */}
        <div className="mb-8 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#8</span>
            <h3 className="text-xl font-semibold">Keine oder veraltete Fotos</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Profile mit Fotos erhalten 42% mehr 
              Wegbeschreibungsanfragen und 35% mehr Website-Klicks. Veraltete 
              Fotos signalisieren ein inaktives Unternehmen.
            </p>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm font-semibold">Empfohlene Foto-Kategorien:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                { icon: "🏢", label: "Außenansicht", count: "3+" },
                { icon: "🪑", label: "Innenansicht", count: "5+" },
                { icon: "👥", label: "Team", count: "3+" },
                { icon: "🍽️", label: "Produkte/Arbeiten", count: "10+" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/50 p-3 rounded-lg text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-semibold mt-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.count} Fotos</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fehler 9 */}
        <div className="mb-8 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#9</span>
            <h3 className="text-xl font-semibold">Keine Google Posts</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Google Posts zeigen Aktivität und 
              erscheinen direkt in den Suchergebnissen. Unternehmen ohne Posts 
              wirken inaktiv und verpassen kostenlose Werbefläche.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { type: "Angebote", example: "20% Rabatt diese Woche" },
              { type: "Events", example: "Sonderöffnung am Sonntag" },
              { type: "Updates", example: "Neue Produkte eingetroffen" },
            ].map((post) => (
              <Card key={post.type}>
                <CardContent className="pt-4 text-sm">
                  <p className="font-semibold">{post.type}</p>
                  <p className="text-muted-foreground text-xs">{post.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>✅ Best Practice:</strong> 1-3 Posts pro Woche, immer mit Bild 
              und Call-to-Action. Posts bleiben 7 Tage sichtbar.
            </p>
          </div>
        </div>

        {/* Fehler 10 */}
        <div className="mb-8 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#10</span>
            <h3 className="text-xl font-semibold">Q&A-Bereich ignoriert</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Jeder kann Fragen stellen – und jeder 
              kann antworten! Wenn Sie nicht selbst antworten, tun es Ihre Kunden 
              (möglicherweise falsch) oder Konkurrenten (definitiv nicht hilfreich).
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
            <p className="text-sm">
              <strong>Achtung:</strong> Fragen und Antworten erscheinen prominent 
              in Ihrem Profil. Kontrollieren Sie diesen Bereich!
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>✅ Pro-Tipp:</strong> Stellen Sie sich selbst die häufigsten 
              Fragen und beantworten Sie diese offiziell. So kontrollieren Sie die 
              Narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Content-Fehler */}
      <section id="content-fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Content-Fehler (11-13)
        </h2>

        {/* Fehler 11 */}
        <div className="mb-8 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#11</span>
            <h3 className="text-xl font-semibold">Fehlende lokale Keywords</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Ihre Website erwähnt nicht einmal, 
              wo Sie sind. Google kann Sie nicht für "Friseur München" ranken, 
              wenn "München" nirgends vorkommt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-red-600">❌ Ohne lokale Keywords</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="italic">"Willkommen bei Salon Schön! Wir bieten 
                Haarschnitte, Färben und Styling."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-green-600">✅ Mit lokalen Keywords</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="italic">"Willkommen bei Salon Schön – Ihrem Friseur 
                in München-Schwabing! Wir bieten Haarschnitte, Färben und Styling 
                für die Nachbarschaft seit 2005."</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground">
            Platzieren Sie Orts-Keywords in: Title Tag, H1, Meta Description, 
            erster Absatz, Footer, Kontaktseite, About-Seite.
          </p>
        </div>

        {/* Fehler 12 */}
        <div className="mb-8 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#12</span>
            <h3 className="text-xl font-semibold">Dünner oder duplizierter Content</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Seiten mit nur 100-200 Wörtern bieten 
              keinen Mehrwert. Kopierte Inhalte (z.B. vom Hersteller) werden von 
              Google abgestraft.
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold">Startseite mit nur 3 Sätzen</p>
                <p className="text-muted-foreground">
                  "Willkommen! Wir sind da. Rufen Sie uns an."
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold">Startseite mit Substanz</p>
                <p className="text-muted-foreground">
                  500+ Wörter: Wer Sie sind, was Sie anbieten, warum Kunden 
                  Sie wählen sollten, Erfahrung, Standort-Details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fehler 13 */}
        <div className="mb-8 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#13</span>
            <h3 className="text-xl font-semibold">Keine lokalen Landingpages</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Sie bedienen mehrere Stadtteile oder 
              Städte, haben aber nur eine einzige Seite. Damit ranken Sie für 
              keine Location-Suche gut.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2">Beispiel für Handwerker:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <code>/rohrreinigung-muenchen</code>
              <code>/rohrreinigung-schwabing</code>
              <code>/rohrreinigung-sendling</code>
              <code>/rohrreinigung-pasing</code>
              <code>/rohrreinigung-freising</code>
              <code>/rohrreinigung-dachau</code>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Jede Seite mit einzigartigem Content, lokalen Referenzen und 
              spezifischen Keywords.
            </p>
          </div>
        </div>
      </section>

      {/* Bewertungs-Fehler */}
      <section id="bewertungs-fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Star className="h-8 w-8 text-primary" />
          Bewertungs-Fehler (14-15)
        </h2>

        {/* Fehler 14 */}
        <div className="mb-8 border-l-4 border-yellow-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#14</span>
            <h3 className="text-xl font-semibold">Keine aktive Bewertungsstrategie</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> Bewertungen kommen nicht von selbst – 
              zumindest nicht in ausreichender Zahl. Ohne aktive Nachfrage überwiegen 
              negative (unzufriedene Kunden schreiben eher).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { 
                title: "Nach Service fragen", 
                desc: "Direkt nach erfolgreicher Dienstleistung: 'War alles zu Ihrer Zufriedenheit? Wir würden uns über eine Bewertung freuen.'" 
              },
              { 
                title: "Follow-up E-Mail", 
                desc: "24-48h nach Kauf/Termin mit direktem Link zur Bewertungsseite." 
              },
              { 
                title: "QR-Codes nutzen", 
                desc: "Auf Kassenzettel, Visitenkarten, Aufsteller an der Theke." 
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-4">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
            <p className="text-sm">
              <strong>⚠️ Wichtig:</strong> Bieten Sie NIEMALS Anreize für Bewertungen 
              (Rabatte, Geschenke). Das verstößt gegen Google-Richtlinien und kann 
              zur Sperrung führen.
            </p>
          </div>
        </div>

        {/* Fehler 15 */}
        <div className="mb-8 border-l-4 border-yellow-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">#15</span>
            <h3 className="text-xl font-semibold">Unbeantwortete Bewertungen</h3>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="text-sm mb-3">
              <strong>Das Problem:</strong> 97% der Verbraucher lesen Antworten auf 
              Bewertungen. Keine Antwort signalisiert Desinteresse – sowohl an Lob 
              als auch an Kritik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Auf positive Bewertungen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="italic mb-2">
                  "Vielen Dank, [Name]! Es freut uns sehr, dass Sie mit 
                  [spezifisches Detail] zufrieden waren. Wir freuen uns 
                  auf Ihren nächsten Besuch!"
                </p>
                <p className="text-xs text-muted-foreground">
                  Personalisiert, erwähnt Details, lädt zum Wiederkommen ein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-red-500" />
                  Auf negative Bewertungen
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="italic mb-2">
                  "Es tut uns leid, dass Ihre Erfahrung nicht unseren 
                  Standards entsprach. Bitte kontaktieren Sie uns unter 
                  [Email], damit wir das klären können."
                </p>
                <p className="text-xs text-muted-foreground">
                  Empathisch, nicht defensiv, bietet Lösung offline an.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold">Best Practice:</p>
              <p>Antworten Sie auf JEDE Bewertung innerhalb von 24-48 Stunden. 
              Positive Antworten können Keywords enthalten ("Danke für Ihre 
              Empfehlung als bester Friseur in Schwabing").</p>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-fehler" position="middle" />

      {/* Quiz */}
      <section id="quiz" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interaktives Fehler-Diagnose Quiz</h2>

        <p className="mb-6">
          Finden Sie heraus, welche der 15 Fehler auf Ihr Unternehmen zutreffen. 
          Beantworten Sie die Fragen ehrlich und erhalten Sie personalisierte 
          Empfehlungen.
        </p>

        <FehlerDiagnoseQuiz />
      </section>

      {/* Schnell-Checkliste */}
      <section id="checkliste" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Schnell-Checkliste: Alle 15 Fehler</h2>

        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "1. Website ist mobile-optimiert",
              "2. Ladezeit unter 3 Sekunden",
              "3. Schema Markup implementiert",
              "4. HTTPS aktiv",
              "5. NAP überall konsistent",
              "6. Google Business Profil vollständig",
              "7. Spezifische Kategorie gewählt",
              "8. 25+ aktuelle Fotos",
              "9. Regelmäßige Google Posts",
              "10. Q&A-Bereich gepflegt",
              "11. Lokale Keywords vorhanden",
              "12. Substanzieller Content (500+ Wörter)",
              "13. Lokale Landingpages erstellt",
              "14. Aktive Bewertungsstrategie",
              "15. Alle Bewertungen beantwortet"
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 py-2 border-b border-muted">
                <input type="checkbox" className="rounded w-5 h-5" />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Welcher Fehler ist am schlimmsten?</AccordionTrigger>
            <AccordionContent>
              Das kommt auf Ihre Situation an, aber die größten Auswirkungen haben 
              typischerweise: 1) NAP-Inkonsistenz (Fehler #5), 2) Unvollständiges 
              Google Business Profil (Fehler #6), und 3) Keine Bewertungsstrategie 
              (Fehler #14). Diese drei sollten Sie zuerst beheben.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Wie lange dauert es, alle Fehler zu beheben?</AccordionTrigger>
            <AccordionContent>
              Die technischen Fehler (1-5) können oft in einem Tag behoben werden. 
              Google Business Optimierung (6-10) braucht 2-3 Tage konzentrierter 
              Arbeit. Content und Bewertungen (11-15) sind laufende Aufgaben. 
              Rechnen Sie mit 2-4 Wochen für die Basis-Korrekturen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Kann ich das alleine machen oder brauche ich Hilfe?</AccordionTrigger>
            <AccordionContent>
              Die meisten Fehler können Sie selbst beheben, besonders wenn Sie 
              technisch nicht völlig unerfahren sind. Für Schema Markup und 
              Website-Optimierung könnte professionelle Hilfe sinnvoll sein. 
              Für Bewertungsmanagement und Google Posts brauchen Sie keine 
              externe Unterstützung.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Was kostet die Behebung dieser Fehler?</AccordionTrigger>
            <AccordionContent>
              Vieles ist kostenlos: Google Business optimieren, NAP korrigieren, 
              auf Bewertungen antworten, Content schreiben. Kosten entstehen ggf. 
              für: besseres Hosting (ca. 10-30€/Monat), professionelle Fotos 
              (einmalig 200-500€), oder Agentur-Unterstützung (variiert stark).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Wann sehe ich Ergebnisse nach der Fehlerbehebung?</AccordionTrigger>
            <AccordionContent>
              Einige Verbesserungen sind sofort sichtbar (vollständiges GBP, 
              Antworten auf Bewertungen). Ranking-Verbesserungen brauchen 
              typischerweise 4-12 Wochen. Der Compound-Effekt setzt nach 
              3-6 Monaten ein, wenn alles zusammenwirkt.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Was, wenn ich diese Fehler schon seit Jahren mache?</AccordionTrigger>
            <AccordionContent>
              Besser spät als nie! Google bewertet Ihren aktuellen Zustand, nicht 
              die Vergangenheit. Sobald Sie die Fehler beheben, beginnt Google, 
              Ihre Seite neu zu bewerten. Langfristige Vernachlässigung bedeutet 
              allerdings, dass Sie mehr aufholen müssen als frisch gestartete 
              Konkurrenten.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Handeln Sie jetzt</h2>

        <p className="mb-4">
          Jeder dieser 15 Fehler kostet Sie täglich potenzielle Kunden. Die gute 
          Nachricht: <strong>Die meisten sind einfach zu beheben</strong>. Beginnen 
          Sie mit den Grundlagen (NAP, Google Business), arbeiten Sie sich durch 
          die Liste, und Sie werden Verbesserungen sehen.
        </p>

        <p className="mb-6">
          Local SEO ist kein Sprint, sondern ein Marathon. Aber jeder Fehler, den 
          Sie heute beheben, ist ein Schritt in Richtung bessere Rankings, mehr 
          Sichtbarkeit und mehr Kunden.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Ihre nächsten Schritte:</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span>Machen Sie das Quiz oben und identifizieren Sie Ihre Schwachstellen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span>Drucken Sie die Checkliste aus und haken Sie ab, was erledigt ist</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span>Priorisieren Sie: NAP, Google Business, dann Bewertungen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span>Setzen Sie sich wöchentliche Ziele für die Umsetzung</span>
            </li>
          </ol>
        </div>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-fehler" />
    </ArticleLayout>
  );
};

export default LocalSeoFehler;
