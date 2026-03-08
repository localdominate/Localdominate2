import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GeoTargetedKeywords from "@/components/blog/GeoTargetedKeywords";
import LocalBusinessEcosystem from "@/components/blog/LocalBusinessEcosystem";
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
import { Building2, TrendingUp, Star, MapPin, Landmark, Plane, Globe, Users, Briefcase, Euro, Train, Calendar } from "lucide-react";

const LocalSeoFrankfurt = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-frankfurt", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "markt", title: "Der Frankfurter Markt" },
    { id: "stadtteile", title: "Stadtteile & Keywords" },
    { id: "branchen", title: "Wichtige Branchen" },
    { id: "verzeichnisse", title: "Lokale Verzeichnisse" },
    { id: "b2b", title: "B2B-Strategien" },
    { id: "events", title: "Events & Messen" },
    { id: "mehrsprachig", title: "Internationale Kunden" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Wie wichtig ist Local SEO in Frankfurt am Main?", answer: "Extrem wichtig. Frankfurt hat über 750.000 Einwohner, das Rhein-Main-Gebiet über 5,8 Millionen. Die Kaufkraft ist überdurchschnittlich, der Wettbewerb in vielen Branchen intensiv." },
    { question: "Welche Frankfurter Stadtteile sind für Local SEO wichtig?", answer: "Für B2C sind Sachsenhausen, Nordend, Bornheim und Bockenheim wichtig (hohe Wohndichte). Für B2B dominieren Bankenviertel, Westend, Europaviertel und Niederrad (Bürostandorte). Der Flughafen-Bereich ist für Logistik und Businesshotels entscheidend." },
    { question: "Wie wichtig ist mehrsprachiges SEO in Frankfurt?", answer: "Sehr wichtig. Frankfurt hat einen internationalen Bevölkerungsanteil von über 30%. Für viele Branchen lohnt sich neben Deutsch auch englisches SEO. Bei Finanzdienstleistungen sind teilweise weitere Sprachen relevant." },
    { question: "Welche Rolle spielen Messen für Local SEO in Frankfurt?", answer: "Die Messe Frankfurt ist weltweit führend. Vor großen Messen steigt das Suchvolumen für 'Hotel Frankfurt Messe', 'Restaurant nähe Messe Frankfurt', 'Taxi Messe Frankfurt' stark an. Messe-optimierte Landingpages können saisonalen Traffic bringen." },
    { question: "Wie optimiere ich für den Frankfurter Flughafen?", answer: "Für flughafennahe Unternehmen lohnen sich Keywords wie 'Flughafen Frankfurt [Service]', 'Airport Frankfurt Hotel', 'Parken Flughafen Frankfurt'. Diese haben hohes Suchvolumen und klare Kaufabsicht." },
    { question: "Was sind typische B2B-Keywords für Frankfurt?", answer: "Wichtige B2B-Keywords sind: 'Unternehmensberatung Frankfurt', 'Steuerberater Frankfurt Unternehmen', 'Wirtschaftskanzlei Frankfurt', 'IT-Dienstleister Frankfurt', 'Personalvermittlung Frankfurt'. Oft mit Branchen-Zusatz wie 'Finanzsektor'." },
    { question: "Welche lokalen Verzeichnisse sind in Frankfurt wichtig?", answer: "Neben Google Business sind wichtig: Frankfurt-Tipp.de, Journal Frankfurt, IHK Frankfurt Firmendatenbank, Frankfurt Business Community. Für B2B zusätzlich: WerLiefertWas, Europages, Kompass." },
    { question: "Wie nutze ich Events für Local SEO?", answer: "Erstellen Sie Event-Landingpages für große Frankfurter Events: IAA, Buchmesse, Luminale, Museumsuferfest. Optimieren Sie für Keywords wie '[Event] Frankfurt 2026'. Diese Seiten können jährlich wiederkehrenden Traffic bringen." },
    { question: "Wie wichtig ist das Bankenviertel für mein SEO?", answer: "Wenn Sie B2B-Kunden im Finanzsektor ansprechen, ist 'Bankenviertel Frankfurt' ein wichtiger Geo-Modifier. Keywords wie 'Mittagstisch Bankenviertel' oder 'Büroservice Bankenviertel' haben präzise lokale Relevanz." },
    { question: "Soll ich für 'Rhein-Main' oder nur 'Frankfurt' optimieren?", answer: "Beides. 'Frankfurt' hat höheres Suchvolumen, aber 'Rhein-Main-Gebiet' spricht die gesamte Metropolregion an (Offenbach, Wiesbaden, Mainz, Darmstadt). Für regionale Dienstleister lohnt sich beides." },
    { question: "Wie stehe ich in Frankfurt gegen große Konkurrenten?", answer: "Fokussieren Sie auf Nischen: Statt 'Steuerberater Frankfurt' optimieren Sie für 'Steuerberater Startups Frankfurt' oder 'Steuerberater Freiberufler Nordend'. Long-Tail-Keywords haben weniger Konkurrenz und höhere Relevanz." },
    { question: "Welche Rolle spielt der Hauptbahnhof für Local SEO?", answer: "Der Frankfurter Hauptbahnhof ist der größte Deutschlands mit 500.000 Reisenden täglich. 'Nähe Hauptbahnhof Frankfurt' ist ein wertvoller Geo-Modifier für Hotels, Gastronomie und Geschäfte in Bahnhofsnähe." },
    { question: "Wie optimiere ich für den EZB-Standort?", answer: "Die EZB im Ostend hat das Viertel aufgewertet. Keywords wie 'Restaurant Ostend Frankfurt', 'Café EZB-Nähe' oder 'Büro Ostend Frankfurt' sind durch die EZB-Präsenz wertvoller geworden." },
    { question: "Gibt es Frankfurter Dialekt-Keywords?", answer: "Weniger als in anderen Städten. 'Äppelwoi' statt 'Apfelwein' oder 'Handkäs' sind bekannte Begriffe. Für traditionelle Lokale und Apfelweinwirtschaften können solche Keywords Authentizität signalisieren." },
    { question: "Wie wichtig ist Sachsenhausen für Local SEO?", answer: "Sachsenhausen ist Frankfurts beliebtestes Ausgeh- und Wohnviertel. Für Gastronomie, Einzelhandel und lokale Dienstleister ist 'Sachsenhausen' ein sehr wichtiger Geo-Modifier mit hohem Suchvolumen." }
  ];


  const stadtteile = [
    { name: "Bankenviertel", typ: "B2B", keywords: ["Finanzdienstleistung", "Unternehmensberatung", "Wirtschaftskanzlei"] },
    { name: "Sachsenhausen", typ: "B2C", keywords: ["Restaurant", "Bar", "Apfelweinlokal", "Boutique"] },
    { name: "Nordend", typ: "B2C", keywords: ["Café", "Bio-Laden", "Yoga-Studio", "Kinderbetreuung"] },
    { name: "Westend", typ: "Beide", keywords: ["Arztpraxis", "Anwaltskanzlei", "Luxus-Immobilien"] },
    { name: "Bornheim", typ: "B2C", keywords: ["Einzelhandel", "Handwerk", "Gastronomie"] },
    { name: "Bockenheim", typ: "B2C", keywords: ["Student", "günstig", "alternativ", "Kultur"] },
    { name: "Europaviertel", typ: "B2B", keywords: ["Messe", "Hotel", "Konferenz", "Startup"] },
    { name: "Ostend", typ: "Beide", keywords: ["EZB", "Hafenpark", "Co-Working", "Gastronomie"] },
    { name: "Flughafen", typ: "B2B", keywords: ["Logistik", "Hotel", "Parken", "Transfer"] },
    { name: "Niederrad", typ: "B2B", keywords: ["Büro", "IT", "Sportpark", "Büroservice"] }
  ];

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4 text-center">
            <Landmark className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-3xl font-bold text-primary">750K+</div>
            <p className="text-sm text-muted-foreground">Einwohner Frankfurt</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
          <CardContent className="p-4 text-center">
            <Euro className="h-8 w-8 mx-auto mb-2 text-amber-500" />
            <div className="text-3xl font-bold text-amber-600">#1</div>
            <p className="text-sm text-muted-foreground">Finanzplatz Deutschland</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-4 text-center">
            <Plane className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <div className="text-3xl font-bold text-blue-600">70M</div>
            <p className="text-sm text-muted-foreground">Passagiere/Jahr Flughafen</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Local SEO in der Finanzmetropole Frankfurt</h2>
        <p className="text-lg mb-4">
          Frankfurt am Main ist einzigartig in Deutschland: <strong>Finanzhauptstadt</strong>, internationaler Verkehrsknotenpunkt und Messestandort von Weltrang. Diese Kombination macht Local SEO in Frankfurt zu einer besonderen Herausforderung – und Chance.
        </p>
        <p className="mb-4">
          Die Stadt vereint <strong>hochzahlende B2B-Kunden</strong> im Bankenviertel mit einer lebendigen Gastro- und Kulturszene in Sachsenhausen und dem Nordend. Wer hier erfolgreich sein will, muss seine SEO-Strategie an diese Vielfalt anpassen.
        </p>
        <p className="mb-6">
          Mit über <strong>30% internationalem Bevölkerungsanteil</strong> und der Rolle als EZB-Standort ist Frankfurt zudem die internationalste Stadt Deutschlands. Mehrsprachiges SEO ist hier keine Option, sondern oft Pflicht.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="local-seo-frankfurt" />

      {/* Der Frankfurter Markt */}
      <section id="markt">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Der Frankfurter Markt: Zahlen und Fakten</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Wirtschaftliche Stärken
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>200+ Banken</strong> mit Sitz in Frankfurt</li>
                <li>• <strong>EZB-Hauptsitz</strong> und Bundesbank</li>
                <li>• <strong>Deutsche Börse</strong> und Finanzaufsicht</li>
                <li>• <strong>Höchste Pro-Kopf-Kaufkraft</strong> in Hessen</li>
                <li>• <strong>5,8 Mio Menschen</strong> in der Metropolregion</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Internationale Bedeutung
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>70+ Mio Fluggäste</strong> jährlich am Flughafen</li>
                <li>• <strong>500.000 Reisende</strong> täglich am Hauptbahnhof</li>
                <li>• <strong>2,5 Mio Messebesucher</strong> pro Jahr</li>
                <li>• <strong>30%+ internationaler</strong> Bevölkerungsanteil</li>
                <li>• <strong>Expat-Community</strong> aus aller Welt</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Was bedeutet das für Ihr Local SEO?</h4>
            <p className="text-muted-foreground">
              Frankfurt bietet enormes Potenzial, aber auch hohe Konkurrenz. Der Schlüssel zum Erfolg liegt in der <strong>Spezialisierung</strong>: Statt gegen Großkanzleien und Konzerne anzutreten, fokussieren Sie auf spezifische Stadtteile, Branchen oder Zielgruppen.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stadtteile & Keywords */}
      <section id="stadtteile">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Frankfurter Stadtteile und ihre Keywords</h2>
        
        <p className="mb-4">
          Jeder Frankfurter Stadtteil hat seinen eigenen Charakter und seine eigene Zielgruppe. Die richtige <strong>Stadtteil-Strategie</strong> ist entscheidend für Ihren Local SEO Erfolg.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Stadtteil</th>
                <th className="border p-3 text-left">Fokus</th>
                <th className="border p-3 text-left">Top-Keywords</th>
              </tr>
            </thead>
            <tbody>
              {stadtteile.map((stadtteil, index) => (
                <tr key={stadtteil.name} className={index % 2 === 0 ? "" : "bg-muted/30"}>
                  <td className="border p-3 font-medium">{stadtteil.name}</td>
                  <td className="border p-3">
                    <Badge variant={stadtteil.typ === "B2B" ? "default" : stadtteil.typ === "B2C" ? "secondary" : "outline"}>
                      {stadtteil.typ}
                    </Badge>
                  </td>
                  <td className="border p-3 text-sm">{stadtteil.keywords.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">Stadtteil-Landingpages erstellen</h3>
        <p className="mb-4">
          Für Ihre wichtigsten Stadtteile sollten Sie <strong>eigene Landingpages</strong> erstellen:
        </p>
        <div className="bg-muted/30 rounded-lg p-4 mb-6">
          <p className="font-semibold mb-2">Beispiel-URLs:</p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• /steuerberater-sachsenhausen</li>
            <li>• /restaurant-bankenviertel-frankfurt</li>
            <li>• /zahnarzt-nordend-frankfurt</li>
            <li>• /rechtsanwalt-westend-frankfurt</li>
          </ul>
        </div>
      </section>

      {/* Wichtige Branchen */}
      <section id="branchen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Branchenspezifisches Local SEO in Frankfurt</h2>
        
        <h3 className="text-xl font-semibold mb-3">Finanzdienstleistungen</h3>
        <p className="mb-4">
          In der Finanzmetropole sind <strong>Finanz-Keywords</strong> hart umkämpft, aber lukrativ:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Vermögensberatung Frankfurt</Badge>
          <Badge>Private Banking Frankfurt</Badge>
          <Badge>Finanzberater Bankenviertel</Badge>
          <Badge>Steuerberater Finanzsektor</Badge>
          <Badge>Wirtschaftsprüfer Frankfurt</Badge>
        </div>

        <h3 className="text-xl font-semibold mb-3">Rechtsanwälte & Kanzleien</h3>
        <p className="mb-4">
          Frankfurt ist Deutschlands wichtigster Standort für <strong>Wirtschaftskanzleien</strong>:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary">M&A Anwalt Frankfurt</Badge>
          <Badge variant="secondary">Bankrecht Frankfurt</Badge>
          <Badge variant="secondary">Kapitalmarktrecht Kanzlei</Badge>
          <Badge variant="secondary">Arbeitsrecht Frankfurt</Badge>
        </div>

        <h3 className="text-xl font-semibold mb-3">Gastronomie & Hotellerie</h3>
        <p className="mb-4">
          Hohe Nachfrage durch Geschäftsreisende und Messebesucher:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline">Business Lunch Frankfurt</Badge>
          <Badge variant="outline">Restaurant Messe Frankfurt</Badge>
          <Badge variant="outline">Apfelweinlokal Sachsenhausen</Badge>
          <Badge variant="outline">Hotel Flughafen Frankfurt</Badge>
        </div>
      </section>

      <BlogCTAABTest position="middle" articleSlug="local-seo-frankfurt" />

      {/* Lokale Verzeichnisse */}
      <section id="verzeichnisse">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Wichtige Frankfurter Verzeichnisse</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Verzeichnis</th>
                <th className="border p-3 text-left">Fokus</th>
                <th className="border p-3 text-left">Wichtig für</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Google Business</td>
                <td className="border p-3">Allgemein</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Alle Branchen</Badge></td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Frankfurt-Tipp.de</td>
                <td className="border p-3">Lifestyle, Events</td>
                <td className="border p-3">Gastronomie, Freizeit</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Journal Frankfurt</td>
                <td className="border p-3">Lokalnachrichten</td>
                <td className="border p-3">Kultur, Events, Gastronomie</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">IHK Frankfurt Firmendatenbank</td>
                <td className="border p-3">B2B</td>
                <td className="border p-3">Alle Unternehmen</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">WerLiefertWas</td>
                <td className="border p-3">B2B</td>
                <td className="border p-3">Industrie, Zulieferer</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Messe Frankfurt Ausstellerverzeichnis</td>
                <td className="border p-3">Messe</td>
                <td className="border p-3">Messeaussteller</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* B2B-Strategien */}
      <section id="b2b">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">B2B Local SEO in Frankfurt</h2>
        
        <p className="mb-4">
          Frankfurt ist Deutschlands <strong>wichtigster B2B-Standort</strong>. Die Strategien unterscheiden sich deutlich von B2C:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <Briefcase className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">B2B-Keywords</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• [Dienstleistung] + Frankfurt + Unternehmen</li>
                <li>• [Branche] + Beratung + Frankfurt</li>
                <li>• [Service] + Rhein-Main-Gebiet</li>
                <li>• Enterprise + [Lösung] + Frankfurt</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Users className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Content-Strategie</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Whitepaper zu Branchenthemen</li>
                <li>• Case Studies mit Frankfurter Kunden</li>
                <li>• Marktanalysen für Rhein-Main</li>
                <li>• Veranstaltungshinweise zu Messen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events & Messen */}
      <section id="events">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Messen und Events für Local SEO nutzen</h2>
        
        <p className="mb-4">
          Die <strong>Messe Frankfurt</strong> ist einer der weltweit führenden Messeplätze. Jede große Messe bedeutet erhöhtes Suchvolumen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <Calendar className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Große Frankfurter Messen</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>IAA Mobility</strong> – Automobilindustrie</li>
                <li>• <strong>Frankfurter Buchmesse</strong> – Verlage, Medien</li>
                <li>• <strong>Ambiente</strong> – Konsumgüter</li>
                <li>• <strong>Light+Building</strong> – Licht, Gebäude</li>
                <li>• <strong>Musikmesse</strong> – Musikindustrie</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Star className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Lokale Events</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>Museumsuferfest</strong> – 3 Mio Besucher</li>
                <li>• <strong>Luminale</strong> – Lichtkunst-Biennale</li>
                <li>• <strong>Dippemess</strong> – Volksfest</li>
                <li>• <strong>Weihnachtsmarkt</strong> – Römerberg</li>
                <li>• <strong>Apfelweinfest</strong> – Sachsenhausen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Praxis-Tipp: Messe-Landingpages</h4>
            <p className="text-muted-foreground">
              Erstellen Sie Landingpages für relevante Messen: "Restaurant Buchmesse Frankfurt", "Hotel IAA 2026", "Catering Ambiente Messe". Diese Seiten können jedes Jahr aktualisiert werden und bringen wiederkehrenden saisonalen Traffic.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Internationale Kunden */}
      <section id="mehrsprachig">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Internationale Kunden erreichen</h2>
        
        <p className="mb-4">
          Mit über 30% internationalem Bevölkerungsanteil und unzähligen Geschäftsreisenden ist <strong>mehrsprachiges SEO</strong> in Frankfurt oft sinnvoll.
        </p>

        <h3 className="text-xl font-semibold mb-3">Wann lohnt sich englisches SEO?</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Finanzdienstleistungen:</strong> Viele internationale Banker und Expats</li>
          <li><strong>Relocation-Services:</strong> "Apartment Frankfurt expat"</li>
          <li><strong>Internationale Schulen:</strong> "International school Frankfurt"</li>
          <li><strong>Business-Hotels:</strong> "Hotel near Frankfurt airport"</li>
          <li><strong>Restaurants:</strong> "Best restaurants Frankfurt Sachsenhausen"</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">hreflang richtig implementieren</h3>
        <p className="mb-6">
          Wenn Sie deutsche und englische Versionen Ihrer Website haben, verwenden Sie <strong>hreflang-Tags</strong>, damit Google die richtige Version für jeden Nutzer zeigt.
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
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

      <GeoTargetedKeywords config={{
        city: 'Frankfurt',
        country: 'DE',
        districts: [
          { district: 'Sachsenhausen', keywords: ['Apfelweinlokal Sachsenhausen', 'Restaurant Sachsenhausen', 'Friseur Sachsenhausen'], competition: 'Hoch', tip: 'Kneipenmeile Alt-Sachsenhausen gezielt ansprechen' },
          { district: 'Nordend', keywords: ['Café Nordend', 'Kinderarzt Nordend', 'Yoga Nordend Frankfurt'], competition: 'Mittel', tip: 'Kreatives Viertel: nachhaltige und lokale Angebote betonen' },
          { district: 'Bornheim', keywords: ['Friseur Bornheim', 'Restaurant Berger Straße', 'Zahnarzt Bornheim'], competition: 'Mittel', tip: 'Berger Straße als eigenes Keyword-Cluster nutzen' },
          { district: 'Bockenheim', keywords: ['Uni Frankfurt Essen', 'Copyshop Bockenheim', 'WG-Zimmer Bockenheim'], competition: 'Niedrig', tip: 'Studentenviertel: günstige Angebote und junge Zielgruppe' },
          { district: 'Westend', keywords: ['Steuerberater Westend Frankfurt', 'Anwalt Westend', 'Business Lunch Westend'], competition: 'Hoch', tip: 'Bankenviertel-Nähe: B2B-Keywords und Premium-Services' },
        ],
        topIndustryKeywords: [
          { industry: 'Finanzen & Beratung', icon: '🏦', keywords: ['Steuerberater Frankfurt Expats', 'Finanzberater Frankfurt', 'Wirtschaftsprüfer Frankfurt', 'Vermögensberater Frankfurt'] },
          { industry: 'Gastronomie', icon: '🍎', keywords: ['Apfelwein Frankfurt', 'Grüne Soße Frankfurt', 'Business Lunch Frankfurt', 'Brunch Frankfurt Sachsenhausen'] },
          { industry: 'Immobilien', icon: '🏠', keywords: ['Makler Frankfurt', 'Wohnung mieten Frankfurt Nordend', 'Büro Frankfurt Innenstadt', 'Immobilienbewertung Frankfurt'] },
          { industry: 'International', icon: '🌍', keywords: ['English speaking doctor Frankfurt', 'Rechtsanwalt Englisch Frankfurt', 'International school Frankfurt', 'Relocation service Frankfurt'] },
        ],
        seasonalKeywords: [
          { event: 'Museumsuferfest', keywords: ['Museumsuferfest Frankfurt', 'Restaurant Museumsufer', 'Catering Museumsuferfest'], timing: 'Optimierung ab Juni' },
          { event: 'Frankfurter Buchmesse', keywords: ['Hotel Buchmesse Frankfurt', 'Restaurant Messe Frankfurt', 'Catering Buchmesse'], timing: 'Optimierung ab Juli' },
          { event: 'Weihnachtsmarkt Römer', keywords: ['Weihnachtsmarkt Römerberg', 'Weihnachtsfeier Frankfurt', 'Geschenke kaufen Frankfurt'], timing: 'Optimierung ab September' },
        ],
        localDirectories: ['frankfurt.de', 'journal-frankfurt.de', 'meinestadt.de/frankfurt'],
        dialektTip: '"Ebbelwoi" statt "Apfelwein" und "Bembel" haben Nischen-Suchvolumen. Frankfurt-spezifische Begriffe wie "Zeil" (Einkaufsstraße) als Geo-Modifier nutzen.',
      }} />

      <HelpfulnessWidget articleSlug="local-seo-frankfurt" />

      <BlogCTAABTest position="end" articleSlug="local-seo-frankfurt" />

      {/* Final CTA */}
      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoFrankfurt;
