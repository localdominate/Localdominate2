import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Star, TrendingUp, Users, Building, Globe, Briefcase } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoHannover = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-hannover", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "markt", title: "Der Hannoveraner Markt" },
    { id: "stadtteile", title: "SEO nach Stadtteilen" },
    { id: "keywords", title: "Hannover-spezifische Keywords" },
    { id: "verzeichnisse", title: "Lokale Verzeichnisse" },
    { id: "messe", title: "Messe-Stadt Hannover" },
    { id: "branchen", title: "Branchen-Tipps" },
    { id: "backlinks", title: "Lokale Backlinks" },
    { id: "faq", title: "FAQ" },
  ];

  const stadtteile = [
    { name: "Mitte", einwohner: "45.000", charakter: "Geschäfte, Gastronomie, Tourismus", konkurrenz: "Hoch" },
    { name: "Linden", einwohner: "48.000", charakter: "Kreativ, Alternativ, Studenten", konkurrenz: "Mittel-Hoch" },
    { name: "Südstadt", einwohner: "35.000", charakter: "Familien, Ärzte, gehobenes Wohnen", konkurrenz: "Mittel" },
    { name: "List", einwohner: "42.000", charakter: "Jung, dynamisch, Gastronomie", konkurrenz: "Mittel" },
    { name: "Nordstadt", einwohner: "20.000", charakter: "Universität, Studenten, Kultur", konkurrenz: "Niedrig-Mittel" },
    { name: "Vahrenwald-List", einwohner: "70.000", charakter: "Multikulti, Gewerbe, Wohngebiet", konkurrenz: "Mittel" },
    { name: "Döhren-Wülfel", einwohner: "35.000", charakter: "Vorstädtisch, Familien, Gewerbe", konkurrenz: "Niedrig" },
    { name: "Bothfeld-Vahrenheide", einwohner: "50.000", charakter: "Wohngebiet, Einzelhandel", konkurrenz: "Niedrig" },
  ];

  const faqItems = [
    { question: "Wie groß ist der Local SEO Markt in Hannover?", answer: "Hannover hat ca. 535.000 Einwohner und ist das wirtschaftliche Zentrum Niedersachsens. Mit der Region Hannover (1,2 Mio. Einwohner) ergibt sich ein enormes Einzugsgebiet. Die Konkurrenz ist moderat – deutlich geringer als in Berlin oder München." },
    { question: "Welche Stadtteile sind am wichtigsten für Local SEO?", answer: "Mitte, Linden und Südstadt haben die höchste Suchdichte. Aber auch List und Nordstadt (Uni-Nähe) sind wertvoll. Die Strategie hängt von deiner Branche ab." },
    { question: "Wie nutze ich die Hannover Messe für mein SEO?", answer: "Erstelle saisonalen Content rund um Messe-Events. Keywords wie 'Hotel Hannover Messe', 'Restaurant nähe Messegelände' oder 'Shuttle Messe Hannover' bringen starken saisonalen Traffic." },
    { question: "Welche lokalen Verzeichnisse sind in Hannover wichtig?", answer: "Neben den Standard-Verzeichnissen (Google, Yelp, Gelbe Seiten) sind für Hannover besonders relevant: hannover.de (Branchenbuch), HAZ-Firmenverzeichnis, IHK Hannover und die Handwerkskammer Niedersachsen." },
    { question: "Gibt es Besonderheiten bei Hannover-Keywords?", answer: "Ja! Hannoveraner suchen oft nach Stadtteilen statt PLZ. Außerdem: 'Leine' (Fluss), 'Maschsee', 'Herrenhausen' und 'Expo-Plaza' sind starke lokale Modifikatoren." },
    { question: "Wie stark ist die Konkurrenz in Hannover?", answer: "Moderat. Hannover ist groß genug für signifikantes Suchvolumen, aber die SEO-Awareness ist geringer als in Berlin oder Hamburg. Das macht es zum idealen Markt für Early Adopters." },
    { question: "Lohnt sich Local SEO für Unternehmen in der Region Hannover?", answer: "Absolut! Viele Kunden aus Langenhagen, Garbsen, Laatzen oder Barsinghausen suchen in Hannover. Mit der richtigen Keyword-Strategie erreichst du die gesamte Region." },
    { question: "Soll ich auch für englische Keywords optimieren?", answer: "Für Branchen mit Messe-Bezug ja: 'hotel near Hannover Messe', 'restaurant Hannover city center'. Sonst ist Deutsch ausreichend." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <KeyTakeawaysBox items={[
        "Hannover hat 535.000 Einwohner + 1,2 Mio. in der Region – riesiges Einzugsgebiet",
        "Die Hannover Messe bringt jährlich 200.000+ Besucher – saisonale SEO-Goldgrube",
        "Moderate Konkurrenz: Deutlich leichter als Berlin oder München zu ranken",
        "Stadtteil-Keywords (Linden, Südstadt, List) sind entscheidend",
        "Lokale Verzeichnisse wie hannover.de und HAZ-Firmenverzeichnis nutzen",
      ]} />

      {/* Intro */}
      <section id="intro" className="mb-12">
        <AutoLexikonParagraph>
          <strong>Hannover ist die unterschätzte Local SEO Goldgrube Deutschlands.</strong> Als Landeshauptstadt Niedersachsens, Messestadt und Wirtschaftszentrum bietet Hannover ein enormes Potenzial für lokale Unternehmen – bei gleichzeitig moderater Konkurrenz. Wer jetzt in Local SEO investiert, kann sich einen nachhaltigen Wettbewerbsvorteil sichern.
        </AutoLexikonParagraph>
      </section>

      {/* Market Stats */}
      <section id="markt" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Der Hannoveraner Markt in Zahlen</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">535.000</div>
              <div className="text-sm text-muted-foreground">Einwohner Stadt</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">1,2 Mio</div>
              <div className="text-sm text-muted-foreground">Region Hannover</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">200.000+</div>
              <div className="text-sm text-muted-foreground">Messe-Besucher/Jahr</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">13</div>
              <div className="text-sm text-muted-foreground">Stadtbezirke</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Districts */}
      <section id="stadtteile" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Local SEO nach Hannoveraner Stadtteilen</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold">Stadtteil</th>
                <th className="text-left p-3 font-semibold">Einwohner</th>
                <th className="text-left p-3 font-semibold">Charakter</th>
                <th className="text-left p-3 font-semibold">Konkurrenz</th>
              </tr>
            </thead>
            <tbody>
              {stadtteile.map((s, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 font-medium">{s.name}</td>
                  <td className="p-3 text-muted-foreground">{s.einwohner}</td>
                  <td className="p-3 text-muted-foreground">{s.charakter}</td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      s.konkurrenz.includes("Hoch") ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                      s.konkurrenz.includes("Mittel") ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}>{s.konkurrenz}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Keywords */}
      <section id="keywords" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Hannover-spezifische Keywords</h2>
        <AutoLexikonParagraph>
          Hannoveraner suchen anders als Berliner oder Münchner. Hier sind die Keyword-Muster, die du kennen musst:
        </AutoLexikonParagraph>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { title: "Stadtteil-Keywords", examples: "'Friseur Linden', 'Zahnarzt Südstadt', 'Restaurant List'" },
            { title: "Landmark-Keywords", examples: "'Hotel am Maschsee', 'Café Herrenhausen', 'Praxis Kröpcke'" },
            { title: "Messe-Keywords", examples: "'Hotel Hannover Messe', 'Taxi Messegelände', 'Catering Messe'" },
            { title: "Region-Keywords", examples: "'Handwerker Region Hannover', 'Arzt Langenhagen', 'Steuerberater Laatzen'" },
          ].map((item, i) => (
            <Card key={i} className="border-primary/10">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.examples}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Directories */}
      <section id="verzeichnisse" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Wichtige lokale Verzeichnisse für Hannover</h2>
        <div className="space-y-3">
          {[
            { name: "hannover.de", desc: "Offizielles Branchenbuch der Stadt", prio: "Hoch" },
            { name: "HAZ Firmenverzeichnis", desc: "Hannoversche Allgemeine Zeitung", prio: "Hoch" },
            { name: "IHK Hannover", desc: "Industrie- und Handelskammer", prio: "Hoch" },
            { name: "Handwerkskammer Niedersachsen", desc: "Für Handwerksbetriebe", prio: "Mittel" },
            { name: "Neue Presse Hannover", desc: "Lokale Tageszeitung", prio: "Mittel" },
            { name: "meinestadt.de/hannover", desc: "Allgemeines Städteportal", prio: "Mittel" },
          ].map((v, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <span className="font-medium">{v.name}</span>
                <span className="text-sm text-muted-foreground ml-2">– {v.desc}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                v.prio === "Hoch" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}>{v.prio}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Messe */}
      <section id="messe" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Messe-Stadt Hannover: Saisonale SEO-Goldgrube</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            So nutzt du Messe-Events für dein Local SEO
          </h3>
          <AutoLexikonParagraph>
            Die Hannover Messe, CeBIT (Nachfolger), IAA Nutzfahrzeuge und zahlreiche Fachmessen bringen jährlich hunderttausende Besucher. Diese suchen Hotels, Restaurants, Taxis und Services – eine perfekte Gelegenheit für Local SEO.
          </AutoLexikonParagraph>
          <ul className="space-y-2 mt-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Erstelle saisonale Landing Pages für Messe-Besucher</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Optimiere für englische Keywords (internationale Besucher)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Google Posts während der Messe-Wochen veröffentlichen</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" /><span className="text-sm">Anreise/Parken/ÖPNV-Infos bereitstellen</span></li>
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section id="branchen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Branchen-Tipps für Hannover</h2>
        <AutoLexikonParagraph>
          Hannover hat eine starke Wirtschaftsstruktur mit Schwerpunkten in Automotive (VW Nutzfahrzeuge), Versicherungen (HDI, Talanx), Medizin (MHH) und Tourismus. Passe deine Local SEO Strategie an die lokale Wirtschaft an.
        </AutoLexikonParagraph>
      </section>

      {/* Backlinks */}
      <section id="backlinks" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Lokale Backlinks in Hannover aufbauen</h2>
        <AutoLexikonParagraph>
          Hannover bietet zahlreiche Möglichkeiten für lokalen Linkaufbau: Sponsoring bei Hannover 96 oder Recken, Zusammenarbeit mit der Leibniz Universität, Partnerschaften mit dem Hannover Marketing und Tourismus, und Engagement in lokalen Vereinen.
        </AutoLexikonParagraph>
      </section>

      <BlogCTAABTest articleSlug="local-seo-hannover" position="end" />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufige Fragen zu Local SEO in Hannover</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-hannover" />
    </ArticleLayout>
  );
};

export default LocalSeoHannover;
