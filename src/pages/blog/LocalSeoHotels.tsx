import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import IndustryRankingChallenges from "@/components/blog/IndustryRankingChallenges";
import { industryRankingConfigs } from "@/data/industryRankingData";
import IndustryKeywordOpportunities from "@/components/blog/IndustryKeywordOpportunities";
import { industryKeywordConfigs } from "@/data/industryKeywordData";
import SearchIntentAnalysis from "@/components/blog/SearchIntentAnalysis";
import { searchIntentConfigs } from "@/data/searchIntentData";
import ContentUpgradeSection from "@/components/blog/ContentUpgradeSection";
import { contentUpgradeConfigs } from "@/data/contentUpgradeData";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import MiniSuccessStory from "@/components/blog/MiniSuccessStory";
import { miniSuccessStories } from "@/data/miniSuccessStories";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import IndustryBenchmarkTable from "@/components/blog/IndustryBenchmarkTable";
import { industryBenchmarkData } from "@/data/industryBenchmarkData";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Star, TrendingUp, Calendar, Users, Globe, Phone, MapPin, Award, AlertTriangle, Percent, Building, Bed } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoHotels = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-hotels", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "direktbuchungen", title: "Gegen Booking.com gewinnen" },
    { id: "google-business", title: "Google Business für Hotels" },
    { id: "hotel-ads", title: "Google Hotel Ads" },
    { id: "saisonale-keywords", title: "Saisonale Keywords" },
    { id: "bewertungen", title: "Bewertungsportale" },
    { id: "schema", title: "Hotel Schema Markup" },
    { id: "content-strategie", title: "Content-Strategie" },
    { id: "lokale-seo", title: "Lokale SEO-Faktoren" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        Hotels kämpfen an zwei Fronten: gegen OTAs wie Booking.com, die bis zu <strong>25% 
        Provision</strong> verlangen, und gegen lokale Konkurrenz um die Top-Positionen bei 
        Google. Mit der richtigen Local SEO Strategie können Sie beides gewinnen – mehr 
        Direktbuchungen und bessere Sichtbarkeit in Ihrer Region.
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Building className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="font-bold text-lg">Das OTA-Problem der Hotellerie</h3>
            <p className="text-sm text-muted-foreground">Warum Local SEO Ihre Rettung ist</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="text-2xl font-bold text-red-600">15-25%</p>
            <p className="text-xs text-muted-foreground">OTA-Provision</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="text-2xl font-bold text-blue-600">65%</p>
            <p className="text-xs text-muted-foreground">Suchen vor Buchung</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="text-2xl font-bold text-green-600">+40%</p>
            <p className="text-xs text-muted-foreground">Direktbuchungs-Potenzial</p>
          </div>
          <div className="bg-white/50 dark:bg-black/20 rounded-lg p-3">
            <p className="text-2xl font-bold text-purple-600">3x</p>
            <p className="text-xs text-muted-foreground">Höherer Gewinn direkt</p>
          </div>
        </div>
      </div>

      <BlogCTAABTest articleSlug="local-seo-hotels" position="intro" />

      {/* Gegen Booking.com */}
      <section id="direktbuchungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Der Kampf gegen Booking.com – und wie Sie ihn gewinnen</h2>
        
        <p className="mb-6">
          Booking.com, Expedia und HRS dominieren die Suchergebnisse für Hotel-Suchanfragen. 
          Aber es gibt einen entscheidenden Vorteil, den Sie haben: <strong>Gäste, die 
          direkt buchen, sind 43% profitabler</strong> und buchen häufiger wieder.
        </p>

        <h3 className="text-xl font-semibold mb-4">Die OTA-Abhängigkeitsfalle</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                Probleme mit OTA-Abhängigkeit
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• 15-25% Provision pro Buchung</p>
              <p>• Kein direkter Kundenkontakt</p>
              <p>• Preisparität-Zwang</p>
              <p>• Gästedaten gehören OTA</p>
              <p>• Abhängigkeit von Algorithmus</p>
              <p>• Steigende Kosten bei Preferred Partner</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Vorteile von Direktbuchungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Volle Marge behalten</p>
              <p>• Direkter Gästekontakt vor Anreise</p>
              <p>• Eigene Preisgestaltung</p>
              <p>• Gästedaten für Marketing</p>
              <p>• Höhere Wiederbuchungsrate</p>
              <p>• Loyalitätsprogramme möglich</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">5 Strategien für mehr Direktbuchungen</h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
            <div>
              <p className="font-semibold">Best-Preis-Garantie prominent kommunizieren</p>
              <p className="text-sm text-muted-foreground">
                "Buchen Sie direkt – garantiert der beste Preis oder wir erstatten die 
                Differenz + 10% Bonus." Zeigen Sie dies auf jeder Seite und im Booking Widget.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
            <div>
              <p className="font-semibold">Exklusive Direktbucher-Vorteile</p>
              <p className="text-sm text-muted-foreground">
                Kostenloses Upgrade (nach Verfügbarkeit), spätes Check-out, Willkommensgetränk, 
                kostenlose Stornierung bis 24h vorher – Dinge, die OTAs nicht bieten können.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
            <div>
              <p className="font-semibold">Branded Search dominieren</p>
              <p className="text-sm text-muted-foreground">
                Wenn jemand "[Ihr Hotelname]" googelt, müssen SIE Position 1 sein – nicht 
                Booking.com. Optimieren Sie Ihre Website und Google Business für Ihren 
                Markennamen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
            <div>
              <p className="font-semibold">Google Free Booking Links nutzen</p>
              <p className="text-sm text-muted-foreground">
                Seit 2021 kostenlos: Ihre Direktbuchungspreise erscheinen in Google Hotel 
                Search. Kein Grund, diese Gratis-Platzierung nicht zu nutzen!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
            <div>
              <p className="font-semibold">Retargeting für OTA-Besucher</p>
              <p className="text-sm text-muted-foreground">
                Nutzer, die Sie auf Booking.com gesehen haben, suchen oft danach direkt. 
                Mit Google Ads Remarketing fangen Sie diese Gäste ab, bevor sie auf OTA 
                buchen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Praxis-Tipp:</strong> Erstellen Sie eine eigene Landingpage 
            <code>/direktbuchen</code> mit allen Vorteilen der Direktbuchung. Verlinken 
            Sie diese prominent auf Ihrer Website und in Google Business Posts.
          </p>
        </div>
      </section>

      {/* Google Business für Hotels */}
      <section id="google-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Google Business Profil für Hotels optimieren</h2>

        <p className="mb-6">
          Ihr Google Business Profil ist oft der <strong>erste Kontakt mit potenziellen 
          Gästen</strong>. Hotels haben dabei besondere Anforderungen und Möglichkeiten, 
          die Sie nutzen sollten.
        </p>

        <h3 className="text-xl font-semibold mb-4">Hotel-spezifische Kategorien</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold text-sm mb-2">Primärkategorie wählen:</p>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <span><code>Hotel</code> – Standard</span>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <span><code>Boutique Hotel</code> – Kleinere, individuelle Hotels</span>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <span><code>Wellness Hotel</code> – Mit Spa-Bereich</span>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <span><code>Resort</code> – Ferienresorts</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-2">Sekundärkategorien:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Restaurant (falls vorhanden)</li>
              <li>• Spa (falls vorhanden)</li>
              <li>• Hochzeitslocation</li>
              <li>• Veranstaltungsort</li>
              <li>• Konferenzhotel</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Hotel-Attribute vollständig nutzen</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            "Kostenloses WLAN",
            "Parkplätze vorhanden",
            "Frühstück inklusive",
            "Haustiere erlaubt",
            "Pool vorhanden",
            "Fitnesscenter",
            "Barrierefreiheit",
            "24h Rezeption",
            "Klimaanlage",
            "Nichtraucherzimmer",
            "Roomservice",
            "Flughafentransfer",
          ].map((attr) => (
            <div key={attr} className="flex items-center gap-2 p-2 bg-muted/30 rounded text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>{attr}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Foto-Strategie für Hotels</h3>

        <p className="mb-4">
          Hotels brauchen mehr Fotos als andere Branchen – Gäste wollen genau wissen, 
          was sie erwartet:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Kategorie</th>
                <th className="border p-3 text-left">Anzahl</th>
                <th className="border p-3 text-left">Tipps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Außenansicht</td>
                <td className="border p-3">5-10</td>
                <td className="border p-3">Tag, Nacht, verschiedene Jahreszeiten</td>
              </tr>
              <tr>
                <td className="border p-3">Lobby / Empfang</td>
                <td className="border p-3">3-5</td>
                <td className="border p-3">Einladend, mit freundlichem Personal</td>
              </tr>
              <tr>
                <td className="border p-3">Zimmertypen</td>
                <td className="border p-3">5-10 pro Typ</td>
                <td className="border p-3">Jede Zimmerkategorie einzeln zeigen</td>
              </tr>
              <tr>
                <td className="border p-3">Badezimmer</td>
                <td className="border p-3">2-3 pro Typ</td>
                <td className="border p-3">Sauberkeit und Ausstattung zeigen</td>
              </tr>
              <tr>
                <td className="border p-3">Restaurant / Bar</td>
                <td className="border p-3">5-10</td>
                <td className="border p-3">Frühstücksbuffet, Abendessen, Ambiente</td>
              </tr>
              <tr>
                <td className="border p-3">Wellness / Pool</td>
                <td className="border p-3">5-10</td>
                <td className="border p-3">Leere Pools wirken einladender</td>
              </tr>
              <tr>
                <td className="border p-3">Umgebung / Aussicht</td>
                <td className="border p-3">3-5</td>
                <td className="border p-3">Lage und Sehenswürdigkeiten</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>⚠️ Wichtig:</strong> Verwenden Sie KEINE Stock-Fotos. Google erkennt 
            diese und Gäste fühlen sich getäuscht. Investieren Sie in professionelle 
            Hotelfotos – sie amortisieren sich schnell.
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-hotels" position="middle" />

      {/* Google Hotel Ads */}
      <section id="hotel-ads" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Google Hotel Ads & Free Booking Links</h2>

        <p className="mb-6">
          Google Hotel Ads erscheinen prominent in der Suche, wenn Nutzer nach Hotels 
          suchen. Seit 2021 gibt es auch <strong>kostenlose Booking Links</strong> – 
          eine riesige Chance für Direktbuchungen.
        </p>

        <h3 className="text-xl font-semibold mb-4">Free Booking Links einrichten</h3>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Percent className="h-6 w-6 text-green-600" />
            <p className="font-semibold text-green-700 dark:text-green-400">
              100% kostenlos – keine Provision, keine Klickkosten
            </p>
          </div>
          <p className="text-sm mb-4">
            Google zeigt Ihre Direktbuchungspreise neben OTA-Preisen in der Hotel-Suche. 
            Gäste sehen sofort, dass Sie der günstigste oder gleichwertige Anbieter sind.
          </p>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">So richten Sie es ein:</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Google Hotel Center Konto erstellen</li>
              <li>Preis-Feed mit Ihrem Buchungssystem verbinden</li>
              <li>Landingpage-URLs für jede Zimmerkategorie hinterlegen</li>
              <li>Verifizierung abwarten (ca. 1-2 Wochen)</li>
            </ol>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Google Hotel Ads (bezahlt)</h3>

        <p className="mb-4">
          Für mehr Sichtbarkeit können Sie zusätzlich bezahlte Hotel Ads schalten:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vorteile Hotel Ads</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Prominente Platzierung vor OTAs</p>
              <p>• CPC oder Provisionsmodell wählbar</p>
              <p>• Sehr gezieltes Targeting möglich</p>
              <p>• ROI meist besser als OTA-Provision</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Typische Kosten</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• <strong>CPC:</strong> 0,50 - 3,00 € pro Klick</p>
              <p>• <strong>Provision:</strong> 10-14% (nur bei Buchung)</p>
              <p>• <strong>Empfehlung:</strong> Mit CPC starten, dann optimieren</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Tipp:</strong> Starten Sie mit Free Booking Links. Wenn diese 
            funktionieren, testen Sie bezahlte Ads mit kleinem Budget. Die Provisionskosten 
            sind fast immer niedriger als bei OTAs.
          </p>
        </div>
      </section>

      {/* Saisonale Keywords */}
      <section id="saisonale-keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Saisonale Keyword-Strategien für Hotels</h2>

        <p className="mb-6">
          Hotels haben starke saisonale Schwankungen. Mit der richtigen Keyword-Strategie 
          können Sie Nebensaison-Buchungen steigern und in der Hauptsaison maximieren.
        </p>

        <h3 className="text-xl font-semibold mb-4">Keyword-Kalender für Hotels</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Monat</th>
                <th className="border p-3 text-left">Fokus-Keywords</th>
                <th className="border p-3 text-left">Content-Ideen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Januar</td>
                <td className="border p-3">Winterurlaub, Skihotel, Wellness Winter</td>
                <td className="border p-3">Winterangebote, Spa-Packages</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Februar</td>
                <td className="border p-3">Valentinstag Hotel, Romantikwochenende</td>
                <td className="border p-3">Romantik-Packages mit Dinner</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">März-April</td>
                <td className="border p-3">Osterurlaub, Frühlingserwachen, Wanderhotel</td>
                <td className="border p-3">Osterbrunch, Frühlingsangebote</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Mai-Juni</td>
                <td className="border p-3">Hochzeitshotel, Pfingsturlaub, Kurzurlaub</td>
                <td className="border p-3">Hochzeitslocation, Pfingstpakete</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Juli-August</td>
                <td className="border p-3">Sommerurlaub, Familienhotel, Pool</td>
                <td className="border p-3">Familienpakete, Outdoor-Aktivitäten</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">September</td>
                <td className="border p-3">Herbsturlaub, Wandern, Weinlese</td>
                <td className="border p-3">Herbstangebote, Weintouren</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Oktober</td>
                <td className="border p-3">Herbstferien, Wellness Herbst, Oktoberfest</td>
                <td className="border p-3">Event-Packages, Wellness</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">November</td>
                <td className="border p-3">Wochenendtrip, Wellness, Citytrip</td>
                <td className="border p-3">Black Friday Angebote, Pre-Xmas</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Dezember</td>
                <td className="border p-3">Weihnachtsurlaub, Silvesterhotel, Advent</td>
                <td className="border p-3">Weihnachtsmenü, Silvesterparty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Event-basierte Keywords</h3>

        <p className="mb-4">
          Lokale Events sind Goldgruben für Hotel-SEO:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { event: "Oktoberfest München", keyword: "Hotel nähe Oktoberfest" },
            { event: "Kölner Karneval", keyword: "Hotel Karneval Köln" },
            { event: "Berlinale", keyword: "Hotel Berlin Filmfestival" },
            { event: "Cannstatter Wasen", keyword: "Hotel Wasen Stuttgart" },
            { event: "Lokale Messe", keyword: "Hotel [Messename] [Stadt]" },
            { event: "Konzerte/Festivals", keyword: "Hotel [Festival] [Jahr]" },
          ].map((item) => (
            <div key={item.event} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold">{item.event}</p>
                <code className="text-xs text-muted-foreground">{item.keyword}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Tipp:</strong> Erstellen Sie eigene Landingpages für große lokale 
            Events. "<code>/hotel-oktoberfest-muenchen</code>" mit spezifischem Content 
            rankt viel besser als eine generische Hotel-Seite.
          </p>
        </div>
      </section>

      {/* Bewertungsportale */}
      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bewertungen auf allen Plattformen managen</h2>

        <p className="mb-6">
          Hotels haben mehr Bewertungsplattformen als jede andere Branche. 
          Eine koordinierte Strategie ist entscheidend.
        </p>

        <h3 className="text-xl font-semibold mb-4">Die wichtigsten Plattformen</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Plattform</th>
                <th className="border p-3 text-left">Priorität</th>
                <th className="border p-3 text-left">Besonderheiten</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Google</td>
                <td className="border p-3">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Höchste</span>
                </td>
                <td className="border p-3">Direkt in Suchergebnissen, beeinflusst Rankings</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">TripAdvisor</td>
                <td className="border p-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Hoch</span>
                </td>
                <td className="border p-3">Eigenes Ranking, vertrauenswürdig für Reisende</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Booking.com</td>
                <td className="border p-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Hoch</span>
                </td>
                <td className="border p-3">Nur verifizierte Gäste, hohe Relevanz</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">HolidayCheck</td>
                <td className="border p-3">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Mittel</span>
                </td>
                <td className="border p-3">Wichtig im DACH-Raum</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Expedia</td>
                <td className="border p-3">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Mittel</span>
                </td>
                <td className="border p-3">Verifizierte Buchungen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Bewertungs-Workflow für Hotels</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
            <div className="text-sm">
              <p className="font-semibold">Beim Check-out persönlich fragen</p>
              <p className="text-muted-foreground">
                "War alles zu Ihrer Zufriedenheit? Wir freuen uns über Ihre ehrliche Meinung 
                bei Google oder TripAdvisor."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
            <div className="text-sm">
              <p className="font-semibold">Post-Stay E-Mail (48h nach Abreise)</p>
              <p className="text-muted-foreground">
                Personalisierte E-Mail mit Dank + direktem Link zur Bewertungsseite. 
                A/B-Test: Google vs. TripAdvisor.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
            <div className="text-sm">
              <p className="font-semibold">Alle Bewertungen binnen 24-48h beantworten</p>
              <p className="text-muted-foreground">
                Positive: Persönlich danken, Detail erwähnen. Negative: Empathisch, 
                Lösung anbieten, offline weiterführen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>✅ Best Practice:</strong> Führen Sie ein Review-Monitoring-Tool ein 
            (z.B. ReviewPro, TrustYou, Revinate). So verpassen Sie keine Bewertung und 
            können Trends analysieren.
          </p>
        </div>
      </section>

      {/* Hotel Schema */}
      <section id="schema" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Hotel Schema Markup implementieren</h2>

        <p className="mb-6">
          Mit dem richtigen Schema Markup verstehen Suchmaschinen Ihr Hotel besser und 
          zeigen Rich Snippets mit Preisen, Bewertungen und Verfügbarkeit.
        </p>

        <h3 className="text-xl font-semibold mb-4">Hotel Schema Beispiel</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Seehotel Alpenzauber",
  "description": "4-Sterne Wellnesshotel am Chiemsee mit eigenem Spa, Restaurant und Seezugang.",
  "image": "https://seehotel-alpenzauber.de/images/hotel-front.jpg",
  "url": "https://seehotel-alpenzauber.de",
  "telephone": "+49 8051 1234567",
  "email": "info@seehotel-alpenzauber.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Seestraße 25",
    "addressLocality": "Prien am Chiemsee",
    "postalCode": "83209",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.8567,
    "longitude": 12.3456
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "priceRange": "€€€",
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "numberOfRooms": "45",
  "petsAllowed": true,
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Kostenloses WLAN", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Pool", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Spa", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Parkplatz", "value": true}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "342"
  }
}
</script>`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Zusätzliche Schema-Typen für Hotels</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">LodgingReservation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Für Buchungsbestätigungen per E-Mail. Google zeigt diese in Gmail 
              und im Google Calendar an.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">HotelRoom</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Für einzelne Zimmertypen mit Größe, Betttyp, Ausstattung und 
              Preisen pro Kategorie.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Für Hochzeiten, Konferenzen, Silvesterpartys – alles was 
              Events in Ihrem Hotel betrifft.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Restaurant</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Separates Schema für Ihr Hotelrestaurant, falls dieses auch 
              externe Gäste bewirtet.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content-Strategie */}
      <section id="content-strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Content-Strategie für Hotel-Websites</h2>

        <p className="mb-6">
          Hotels brauchen mehr Content als nur Zimmerbeschreibungen. Eine durchdachte 
          Content-Strategie bringt organischen Traffic und positioniert Sie als 
          Experten für Ihre Region.
        </p>

        <h3 className="text-xl font-semibold mb-4">Content-Typen für Hotels</h3>

        <div className="space-y-4 mb-8">
          {[
            {
              title: "Standort-Seiten",
              examples: ["Sehenswürdigkeiten in der Nähe", "Anfahrt & Parken", "Öffentliche Verkehrsmittel"],
              seo: "Rankt für '[Stadt] Hotel' und '[Sehenswürdigkeit] Hotel in der Nähe'"
            },
            {
              title: "Aktivitäten-Guides",
              examples: ["Wanderungen ab Hotel", "Restaurants in der Umgebung", "Familienausflüge"],
              seo: "Long-Tail Keywords, zeigt lokale Expertise"
            },
            {
              title: "Saisonale Seiten",
              examples: ["Weihnachten am [Ort]", "Sommerurlaub [Region]", "Silvester Special"],
              seo: "Saisonale Buchungen, Event-Traffic"
            },
            {
              title: "Package-Seiten",
              examples: ["Romantik-Wochenende", "Wellness-Auszeit", "Golf-Package"],
              seo: "Spezifische Zielgruppen-Keywords"
            },
            {
              title: "Event-Seiten",
              examples: ["Hochzeit feiern", "Tagungen & Konferenzen", "Familienfeier"],
              seo: "'Hochzeitslocation [Stadt]', 'Tagungshotel'"
            },
          ].map((type) => (
            <Card key={type.title}>
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <p className="font-semibold">{type.title}</p>
                  </div>
                  <div className="md:w-1/3">
                    <p className="text-sm text-muted-foreground">
                      {type.examples.join(", ")}
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <p className="text-xs bg-primary/10 p-2 rounded">
                      <strong>SEO:</strong> {type.seo}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lokale SEO */}
      <section id="lokale-seo" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lokale SEO-Faktoren für Hotels</h2>

        <h3 className="text-xl font-semibold mb-4">Lokale Backlinks aufbauen</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { source: "Tourismusverband", how: "Mitgliedschaft, Eintrag mit Link" },
            { source: "Lokale Eventseiten", how: "Als empfohlene Unterkunft listen" },
            { source: "Hochzeitsportale", how: "Als Hochzeitslocation registrieren" },
            { source: "Lokale Restaurants", how: "Gegenseitige Empfehlungen" },
            { source: "Regionalzeitung", how: "PR für Events, Renovierungen" },
            { source: "Reiseblogger", how: "Einladung für Hoteltest" },
          ].map((item) => (
            <div key={item.source} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <Globe className="h-5 w-5 text-primary mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold">{item.source}</p>
                <p className="text-muted-foreground">{item.how}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Lokale Verzeichnisse für Hotels</h3>

        <p className="mb-4">Priorisieren Sie diese Einträge:</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            "Google Business",
            "TripAdvisor",
            "HolidayCheck",
            "Yelp",
            "Foursquare",
            "Tourismusverband",
            "Gelbe Seiten",
            "Branchenverband",
          ].map((dir) => (
            <div key={dir} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>{dir}</span>
            </div>
          ))}
        </div>
      </section>

      {industryStats.hotels?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.hotels} />

      <IndustryBenchmarkTable data={industryBenchmarkData.hotels} />

      <IndustryComparisonTable data={industryComparisonData.hotels} />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie wichtig sind OTA-Bewertungen für Google Rankings?</AccordionTrigger>
            <AccordionContent>
              OTA-Bewertungen (Booking.com, Expedia) fließen nicht direkt in Google Rankings 
              ein. Allerdings: Gäste lesen diese Bewertungen vor der Buchung. Indirekt 
              beeinflussen sie also Buchungsentscheidungen, auch wenn jemand Sie bei 
              Google findet. Fokussieren Sie auf Google-Bewertungen für SEO, pflegen 
              Sie OTA-Bewertungen für Conversion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Lohnen sich Google Hotel Ads für kleine Hotels?</AccordionTrigger>
            <AccordionContent>
              Ja, besonders Free Booking Links sind für alle Hotels sinnvoll – sie sind 
              kostenlos! Bezahlte Hotel Ads können auch für kleine Hotels profitabel sein, 
              wenn die Provisionen niedriger sind als bei OTAs. Starten Sie mit kleinem 
              Budget, messen Sie den ROI und skalieren Sie entsprechend.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Wie kann ich gegen große Hotelketten ranken?</AccordionTrigger>
            <AccordionContent>
              Konzentrieren Sie sich auf Nischen-Keywords, die Ketten ignorieren: 
              "Romantisches Boutique-Hotel [Stadt]", "Familienhotel mit Spielplatz", 
              "Hundefreundliches Hotel [Region]". Lokale Authentizität, persönlicher 
              Service und einzigartige Erlebnisse sind Ihr Vorteil – kommunizieren 
              Sie diese auch online.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Wie oft sollten wir Google Business Posts machen?</AccordionTrigger>
            <AccordionContent>
              Mindestens wöchentlich. Ideal: 2-3 Posts pro Woche. Inhalte: Saisonale 
              Angebote, Events, Fotos von Speisen/Zimmern, lokale Tipps, Bewertungs-Highlights. 
              Posts bleiben 7 Tage sichtbar, also ist Regelmäßigkeit wichtiger als Perfektion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Sollen wir für jeden Zimmertyp eine eigene Seite haben?</AccordionTrigger>
            <AccordionContent>
              Ja, unbedingt! Jeder Zimmertyp sollte eine eigene URL haben mit 
              einzigartigem Content, Fotos, Ausstattung und Preis. Das ermöglicht: 
              1) Besseres SEO für spezifische Suchanfragen, 2) Tiefe Links von 
              Google Hotel Ads, 3) Genauere Tracking-Möglichkeiten.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Wie gehe ich mit gefälschten Bewertungen um?</AccordionTrigger>
            <AccordionContent>
              Bei Google: Bewertung als "unangemessen" melden mit Begründung. 
              Antworten Sie öffentlich sachlich: "Wir können diese Buchung in 
              unserem System nicht verifizieren." Bei TripAdvisor: Management Response 
              nutzen und über das Portal melden. Dokumentieren Sie alles für 
              eventuelle weitere Schritte.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Direktbuchungen durch Local SEO</h2>

        <p className="mb-4">
          Hotels, die Local SEO beherrschen, haben einen entscheidenden Wettbewerbsvorteil: 
          <strong>weniger OTA-Abhängigkeit, höhere Margen und loyalere Gäste</strong>. 
          Die Investition in eine starke lokale Online-Präsenz zahlt sich langfristig aus.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Ihre Prioritätenliste:</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <span>Google Business Profil vollständig optimieren (Fotos, Attribute, Posts)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <span>Free Booking Links im Hotel Center aktivieren</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <span>Best-Preis-Garantie prominent auf Website kommunizieren</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
              <span>Bewertungs-Workflow etablieren für alle Plattformen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
              <span>Lokale Content-Strategie entwickeln (Events, Aktivitäten)</span>
            </li>
          </ol>
        </div>
      </section>

      {miniSuccessStories.hotels?.map((story, i) => (
        <MiniSuccessStory key={i} story={story} />
      ))}

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Hotel reduziert OTA-Abhängigkeit</h2>
        {industryCaseStudies.hotels.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <SearchIntentAnalysis config={searchIntentConfigs.hotels} />
      <IndustryKeywordOpportunities config={industryKeywordConfigs.hotels} />
      <IndustryRankingChallenges config={industryRankingConfigs.hotels} />
      <ContentUpgradeSection config={contentUpgradeConfigs.hotels} />
      <HelpfulnessWidget articleSlug="local-seo-hotels" />
    </ArticleLayout>
  );
};

export default LocalSeoHotels;
