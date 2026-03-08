import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import IndustryRankingChallenges from "@/components/blog/IndustryRankingChallenges";
import { industryRankingConfigs } from "@/data/industryRankingData";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
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
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Star, Clock, Camera, TrendingUp, Users, Wheat, Cake, Coffee } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoBackerei = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-baeckerei", language);

  if (!article) return null;

  const tocItems = [
    { id: "warum-seo", title: "Warum SEO für Bäckereien?" },
    { id: "google-business", title: "Google Business Profil" },
    { id: "keywords", title: "Bäckerei-Keywords" },
    { id: "oeffnungszeiten", title: "Öffnungszeiten & Frühaufsteher" },
    { id: "bewertungen", title: "Bewertungsmanagement" },
    { id: "fotos", title: "Food-Fotografie" },
    { id: "website", title: "Website-Optimierung" },
    { id: "lieferung", title: "Lieferservices & Online-Bestellung" },
    { id: "social-media", title: "Social Media" },
    { id: "saisonales", title: "Saisonales Marketing" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Braucht eine Bäckerei wirklich SEO?", answer: "Ja! 78% der Kunden suchen online nach 'Bäckerei in der Nähe' bevor sie ein Geschäft betreten. Ohne Local SEO verlierst du diese Kunden an Mitbewerber, die online sichtbar sind." },
    { question: "Welche Google Business Kategorie für eine Bäckerei?", answer: "Die Hauptkategorie ist 'Bäckerei'. Zusätzliche Kategorien je nach Angebot: 'Café', 'Konditorei', 'Brotladen'. Nutze maximal 3-5 Kategorien für die beste Wirkung." },
    { question: "Wie bekomme ich mehr Bewertungen für meine Bäckerei?", answer: "1. QR-Code an der Kasse/Theke, 2. Kleine Karte zum Brötchenkauf beilegen, 3. Stammkunden persönlich ansprechen, 4. Auf jede Bewertung antworten, 5. WhatsApp-Gruppe für Stammkunden nutzen." },
    { question: "Welche Keywords sind für Bäckereien wichtig?", answer: "Wichtigste Keywords: 'Bäckerei [Stadt/Stadtteil]', 'Bäcker in der Nähe', 'Brot bestellen [Stadt]', 'Sonntagsbrötchen [Stadt]', 'Torte bestellen [Stadt]', 'Frühstück Bäckerei [Stadt]'." },
    { question: "Soll ich Preise auf Google zeigen?", answer: "Ja! Preistransparenz schafft Vertrauen. Zeige zumindest deine beliebtesten Produkte mit Preisen. Kunden erwarten das und es reduziert Anrufe mit Preisfragen." },
    { question: "Wie oft soll ich Google Posts veröffentlichen?", answer: "Mindestens 1x pro Woche. Ideal: 2-3x pro Woche mit saisonalen Angeboten, Tagesbroten, Spezialitäten und Events wie Brotbackkursen." },
    { question: "Lohnt sich ein Online-Shop für eine Bäckerei?", answer: "Für Torten, Spezialbrote und Catering absolut. Für reguläres Brot eher nicht. Ein Vorbestellsystem für Sonntagsbrötchen oder Partybrötchen ist ein guter Einstieg." },
    { question: "Wie wichtig sind Fotos für Bäckereien?", answer: "Extrem wichtig! Bäckerei-Profile mit professionellen Fotos bekommen 35% mehr Website-Klicks. Zeige frisch gebackenes Brot, Kuchen, die Backstube und das Team." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <KeyTakeawaysBox items={[
        "78% der 'Bäckerei in der Nähe'-Suchen führen innerhalb von 24 Stunden zu einem Besuch",
        "Google Business Profil ist der wichtigste Kanal für lokale Bäckereien",
        "Öffnungszeiten (besonders Sonntags) sind ein entscheidender Rankingfaktor",
        "Food-Fotografie kann die Klickrate um bis zu 35% steigern",
        "Saisonales Marketing (Stollen, Osterbrote) bringt planbare Traffic-Spitzen",
      ]} />

      {/* Stats Section */}
      <section id="warum-seo" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Warum Bäckereien ohne Local SEO Kunden verlieren</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">11.000+</div>
              <div className="text-sm text-muted-foreground">Bäckereien in Deutschland</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">78%</div>
              <div className="text-sm text-muted-foreground">suchen online vor dem Besuch</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">5:30</div>
              <div className="text-sm text-muted-foreground">Uhr – Erste Suchanfragen starten</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">3 Min</div>
              <div className="text-sm text-muted-foreground">durchschnittliche Entscheidungszeit</div>
            </CardContent>
          </Card>
        </div>

        <AutoLexikonParagraph>
          Die Bäckereibranche steht unter enormem Druck: Billig-Ketten, Backshops in Supermärkten und steigende Kosten machen traditionellen Bäckereien das Leben schwer. Doch es gibt einen entscheidenden Vorteil, den Handwerksbäcker haben: <strong>Authentizität und Nähe</strong>. Und genau diese Stärken lassen sich mit Local SEO perfekt ausspielen.
        </AutoLexikonParagraph>

        <AutoLexikonParagraph>
          Wenn jemand morgens um 6 Uhr nach „Bäckerei in der Nähe" sucht, will er <strong>jetzt</strong> frische Brötchen – nicht erst recherchieren. Das Unternehmen, das im Local Pack auf Platz 1 steht, bekommt den Kunden. So einfach ist das.
        </AutoLexikonParagraph>
      </section>

      {/* Google Business Section */}
      <section id="google-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Google Business Profil für Bäckereien optimieren</h2>

        <AutoLexikonParagraph>
          Dein Google Business Profil ist dein digitales Schaufenster. Für Bäckereien sind diese Punkte besonders wichtig:
        </AutoLexikonParagraph>

        <div className="space-y-4 my-6">
          {[
            { icon: Wheat, title: "Richtige Kategorien wählen", desc: "Hauptkategorie: 'Bäckerei'. Nebenkategorien: 'Café', 'Konditorei', 'Brotladen' je nach Angebot" },
            { icon: Clock, title: "Öffnungszeiten exakt pflegen", desc: "Besonders Sonntags- und Feiertagsöffnungszeiten sind Gold wert – viele Kunden suchen genau danach" },
            { icon: Camera, title: "Professionelle Fotos", desc: "Frisches Brot aus dem Ofen, knusprige Brötchen, liebevoll dekorierte Torten – Fotos verkaufen!" },
            { icon: Star, title: "Produkte hinzufügen", desc: "Zeige deine Brote, Kuchen und Spezialitäten direkt im Google-Profil mit Preisen" },
            { icon: Coffee, title: "Attribute nutzen", desc: "'Sitzplätze vorhanden', 'Frühstück', 'WLAN', 'Barrierefrei' – jedes Attribut hilft" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
              <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keywords Section */}
      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die wichtigsten Bäckerei-Keywords</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold">Keyword-Typ</th>
                <th className="text-left p-3 font-semibold">Beispiele</th>
                <th className="text-left p-3 font-semibold">Suchintention</th>
              </tr>
            </thead>
            <tbody>
              {[
                { typ: "Lokal + Branche", beispiel: "Bäckerei München, Bäcker Schwabing", intention: "Sucht einen Bäcker in der Nähe" },
                { typ: "Produkt + Ort", beispiel: "Sonntagsbrötchen Berlin, Torte bestellen Köln", intention: "Will ein bestimmtes Produkt kaufen" },
                { typ: "Zeitbezogen", beispiel: "Bäckerei offen Sonntag, Bäcker jetzt geöffnet", intention: "Braucht sofort einen offenen Bäcker" },
                { typ: "Spezialität", beispiel: "Sauerteigbrot [Stadt], glutenfreie Bäckerei", intention: "Sucht bestimmte Backware" },
                { typ: "Service", beispiel: "Torte bestellen, Catering Bäckerei, Brot liefern", intention: "Will online bestellen" },
                { typ: "Event", beispiel: "Hochzeitstorte [Stadt], Stollen kaufen, Osterlamm", intention: "Saisonale Suche" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 font-medium">{row.typ}</td>
                  <td className="p-3 text-muted-foreground">{row.beispiel}</td>
                  <td className="p-3 text-muted-foreground">{row.intention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="oeffnungszeiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Öffnungszeiten: Der Geheimwaffen-Faktor für Bäckereien</h2>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-600" />
            Warum Öffnungszeiten bei Bäckereien besonders wichtig sind
          </h3>
          <AutoLexikonParagraph>
            Bäckereien haben die <strong>frühesten Öffnungszeiten</strong> aller lokalen Geschäfte. Das bedeutet: Deine Kunden suchen oft zwischen 5:30 und 8:00 Uhr morgens. Google zeigt bevorzugt Bäckereien, die zu dieser Zeit als „Geöffnet" markiert sind. Eine falsche oder fehlende Öffnungszeit kostet dich direkt Kunden.
          </AutoLexikonParagraph>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Sonntagsöffnungszeiten <strong>immer</strong> aktuell halten</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Feiertage mindestens 2 Wochen vorher eintragen</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Sommer-/Winterzeiten berücksichtigen</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Betriebsurlaub frühzeitig kennzeichnen</span></li>
          </ul>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="bewertungen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Bewertungsmanagement für Bäckereien</h2>
        <AutoLexikonParagraph>
          Bewertungen sind für Bäckereien besonders wertvoll, weil die Entscheidung oft emotional ist: Menschen wollen das <strong>beste Brot, die leckersten Brötchen</strong>. Eine 4,5-Sterne-Bewertung mit 200+ Rezensionen schlägt jede Werbung.
        </AutoLexikonParagraph>
        <AutoLexikonParagraph>
          <strong>Profi-Tipp:</strong> Drucke einen QR-Code auf deine Brötchentüten. „Hat's geschmeckt? Bewerte uns auf Google!" – das ist die natürlichste Art, Bewertungen zu sammeln.
        </AutoLexikonParagraph>
      </section>

      {/* Food Photography */}
      <section id="fotos" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Food-Fotografie für Bäckereien</h2>
        <AutoLexikonParagraph>
          Gute Fotos sind bei Bäckereien ein absoluter Gamechanger. Studien zeigen, dass Profile mit hochwertigen Food-Fotos <strong>35% mehr Klicks</strong> erhalten. Dabei muss es nicht einmal ein professioneller Fotograf sein:
        </AutoLexikonParagraph>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { title: "Frisch aus dem Ofen", desc: "Dampfendes Brot, knusprige Kruste – zeige den Moment" },
            { title: "Theken-Vielfalt", desc: "Die volle Auslage am Morgen wirkt einladend" },
            { title: "Backstube zeigen", desc: "Handwerk schafft Vertrauen – zeige dein Team bei der Arbeit" },
            { title: "Saisonale Highlights", desc: "Stollen, Osterhasen, Berliner – saisonale Fotos im Wechsel" },
          ].map((item, i) => (
            <Card key={i} className="border-primary/10">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Website */}
      <section id="website" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Website-Optimierung für Bäckereien</h2>
        <AutoLexikonParagraph>
          Nicht jede Bäckerei braucht eine komplexe Website. Aber die Basics müssen stimmen: NAP-Daten (Name, Adresse, Telefon), Öffnungszeiten, Sortiment und Standort auf Google Maps eingebettet.
        </AutoLexikonParagraph>
        <AutoLexikonParagraph>
          Für Bäckereien mit Café-Bereich oder Catering-Service ist eine erweiterte Website mit Online-Bestellfunktion besonders wertvoll.
        </AutoLexikonParagraph>
      </section>

      {/* Delivery */}
      <section id="lieferung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Online-Bestellung & Lieferservice</h2>
        <AutoLexikonParagraph>
          Immer mehr Bäckereien bieten Vorbestellungen an – besonders für Sonntagsbrötchen, Torten und Catering. Das ist nicht nur ein Service für Kunden, sondern auch ein <strong>starker SEO-Faktor</strong>: Google bevorzugt Unternehmen, die Online-Bestellungen ermöglichen.
        </AutoLexikonParagraph>
      </section>

      {/* Social Media */}
      <section id="social-media" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Social Media für Bäckereien</h2>
        <AutoLexikonParagraph>
          Instagram ist der ideale Kanal für Bäckereien: Food-Content performt hervorragend. Zeige den Backprozess, das fertige Produkt und glückliche Kunden. TikTok eignet sich für Behind-the-Scenes-Videos aus der Backstube.
        </AutoLexikonParagraph>
      </section>

      {/* Seasonal Marketing */}
      <section id="saisonales" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Saisonales Marketing: Der Geheimtipp für Bäckereien</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold">Saison</th>
                <th className="text-left p-3 font-semibold">Keywords</th>
                <th className="text-left p-3 font-semibold">Aktion</th>
              </tr>
            </thead>
            <tbody>
              {[
                { saison: "🐣 Ostern", keywords: "Osterbrot, Osterlamm, Osterzopf bestellen", aktion: "2-3 Wochen vorher Google Post + Website-Seite" },
                { saison: "🎄 Weihnachten", keywords: "Stollen bestellen, Christstollen, Weihnachtsbäckerei", aktion: "Ab Oktober Content erstellen, November Angebote" },
                { saison: "🎉 Karneval/Fasching", keywords: "Berliner bestellen, Krapfen, Fastnachtsküchlein", aktion: "Regionale Spezialitäten bewerben" },
                { saison: "☀️ Sommer", keywords: "Eiskaffee Bäckerei, Obstkuchen, Sommertorten", aktion: "Kühle Getränke und Sommerspezialitäten" },
                { saison: "🎒 Schulstart", keywords: "Schultüte bestellen, Einschulungstorte", aktion: "Juli/August Vorbestellungen bewerben" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 font-medium">{row.saison}</td>
                  <td className="p-3 text-muted-foreground">{row.keywords}</td>
                  <td className="p-3 text-muted-foreground">{row.aktion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {miniSuccessStories.baeckerei?.map((story, i) => (
        <MiniSuccessStory key={i} story={story} />
      ))}

      <BlogCTAABTest articleSlug="local-seo-baeckerei" position="end" />

      {industryStats.baeckerei?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.baeckerei} />

      <IndustryBenchmarkTable data={industryBenchmarkData.baeckerei} />

      <IndustryComparisonTable data={industryComparisonData.baeckerei} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufige Fragen zu SEO für Bäckereien</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Traditionsbäckerei gegen Ketten</h2>
        {industryCaseStudies.baeckerei.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-baeckerei" />
    </ArticleLayout>
  );
};

export default LocalSeoBackerei;
