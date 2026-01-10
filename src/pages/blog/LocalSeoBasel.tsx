import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoBaselImg from "@/assets/blog/local-seo-basel.jpg";
import { MapPin, Building2, TrendingUp, Target, Pill, Lightbulb, Users, Star, CheckCircle, Globe, Languages } from "lucide-react";

const LocalSeoBasel = () => {
  const article = getArticleBySlug("local-seo-basel");
  if (!article) return null;

  const tocItems = [
    { id: "warum-basel", title: "Warum Basel besonders ist" },
    { id: "dreilaendereck", title: "Dreiländereck-Strategie" },
    { id: "pharma", title: "Pharma-Branche & Local SEO" },
    { id: "verzeichnisse", title: "Schweizer Verzeichnisse" },
    { id: "google-business", title: "Google Business für Basel" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "Basel liegt im Dreiländereck Schweiz-Deutschland-Frankreich",
    "Pharma-Hauptstadt mit Roche und Novartis - hohe Kaufkraft",
    "Mehrsprachiges SEO (DE/FR) kann Reichweite verdreifachen",
    "Schweizer Verzeichnisse wie local.ch sind essentiell",
    "Art Basel und Fasnacht bringen saisonale SEO-Chancen"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "Kanton Basel-Stadt - Statistik", url: "https://www.statistik.bs.ch" },
    { title: "Handelskammer beider Basel", url: "https://www.hkbb.ch" },
    { title: "local.ch", url: "https://www.local.ch" }
  ];

  const faqItems = [
    { question: "Soll ich auch deutsche und französische Keywords nutzen?", answer: "Ja! Das Dreiländereck bedeutet, dass Kunden aus Deutschland (Lörrach, Weil) und Frankreich (Mulhouse, Saint-Louis) nach Basler Dienstleistungen suchen. Erwägen Sie Landingpages für 'Zahnarzt Basel für Deutsche' oder bilinguale Inhalte." },
    { question: "Welche Schweizer Verzeichnisse sind wichtig?", answer: "local.ch und search.ch sind die wichtigsten Schweizer Verzeichnisse. Dazu kommen branchenspezifische Portale wie Coiffeur Suisse für Friseure, Gastrosuisse für Gastronomie und Swissfirms für B2B." },
    { question: "Wie unterscheidet sich Schweizer SEO von deutschem SEO?", answer: "Die Schweiz hat eigene TLDs (.ch), eigene Verzeichnisse und regional unterschiedliche Suchgewohnheiten. Schweizerdeutsche Begriffe können relevant sein (Coiffeur statt Friseur), und die Preisangabe in CHF ist wichtig." },
    { question: "Lohnt sich SEO für die Art Basel?", answer: "Absolut! Die Art Basel bringt über 90.000 Besucher aus aller Welt. Hotels, Restaurants, Galerien und Transportdienste sollten spezifische Landingpages und Google Posts für diese Zeit erstellen." }
  ];

  const quartiere = [
    { name: "Grossbasel", keywords: ["Altstadt", "Marktplatz", "Münster"] },
    { name: "Kleinbasel", keywords: ["Rhein", "Messe", "Claramatte"] },
    { name: "St. Alban", keywords: ["Kunst", "Papiermühle", "Kultur"] },
    { name: "Gundeldingen", keywords: ["Bahnhof", "Zentral", "Gewerbe"] },
    { name: "Riehen", keywords: ["Fondation Beyeler", "Grün", "Familie"] },
    { name: "St. Johann", keywords: ["Novartis", "Campus", "Modern"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems}>
      <BlogImage src={localSeoBaselImg} alt="Local SEO Basel - Mehr Kunden in der Pharma-Metropole" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-basel" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Building2 className="h-6 w-6 text-primary" />
          Warum Basel für Local SEO besonders ist
        </h2>
        <p className="mb-4 text-muted-foreground">
          Basel ist die drittgrößte Stadt der Schweiz und liegt einzigartig im <strong>Dreiländereck</strong> 
          Schweiz-Deutschland-Frankreich. Als Hauptsitz von Roche und Novartis ist sie die Pharma-Hauptstadt 
          Europas mit entsprechend hoher Kaufkraft.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Languages className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">3</div>
            <div className="text-sm text-muted-foreground">Länder im Einzugsgebiet</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Pill className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">2</div>
            <div className="text-sm text-muted-foreground">Pharma-Weltkonzerne</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">Top 3</div>
            <div className="text-sm text-muted-foreground">Kaufkraft Schweiz</div>
          </div>
        </div>
      </section>

      <section id="dreilaendereck" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <MapPin className="h-6 w-6 text-primary" />
          Dreiländereck-Strategie
        </h2>
        <p className="mb-4 text-muted-foreground">
          Das Dreiländereck bietet einzigartige SEO-Möglichkeiten. Kunden suchen grenzüberschreitend:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">🇨🇭 Schweiz</h4>
            <p className="text-sm text-muted-foreground">Hochdeutsch mit Schweizer Begriffen (Coiffeur, Beiz)</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">🇩🇪 Deutschland</h4>
            <p className="text-sm text-muted-foreground">Grenzgänger aus Lörrach, Weil am Rhein, Freiburg</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">🇫🇷 Frankreich</h4>
            <p className="text-sm text-muted-foreground">Elsass - Saint-Louis, Mulhouse (Französisch)</p>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-basel" position="middle" />

      <section id="pharma" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Pill className="h-6 w-6 text-primary" />
          Pharma-Branche & Local SEO
        </h2>
        <p className="mb-4 text-muted-foreground">
          Die Pharma-Industrie prägt Basel. Nutzen Sie das für Ihr Local SEO:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>B2B-Keywords:</strong> "Laborzubehör Basel", "Pharma-Dienstleister", "Life Sciences Basel"</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Expat-Services:</strong> Viele internationale Mitarbeiter - englischsprachiges SEO lohnt sich</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Premium-Positionierung:</strong> Hohe Gehälter = hohe Zahlungsbereitschaft</span></li>
        </ul>
      </section>

      <section id="verzeichnisse" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Globe className="h-6 w-6 text-primary" />
          Wichtige Schweizer Verzeichnisse
        </h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            {["Google Business Profile", "local.ch", "search.ch", "Yelp Schweiz", "Swisscom Directories", "Gelbe Seiten Schweiz", "Handelskammer beider Basel", "Basel.com Branchenbuch"].map((item, i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Basel optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Quartier in der Beschreibung erwähnen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Rhein und Münster als visuelle Ankerpunkte nutzen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Fasnacht und Art Basel für saisonale Posts nutzen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>CHF als Währung und Schweizer Telefonnummer angeben</span></li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-basel" position="end" />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO in Basel</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-basel" />
      <RelatedCityGuides currentSlug="local-seo-basel" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoBasel;