import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoStuttgartImg from "@/assets/blog/local-seo-stuttgart.webp";
import { MapPin, Building2, TrendingUp, Target, Car, Lightbulb, Users, Star, CheckCircle, Globe, Calendar } from "lucide-react";

const LocalSeoStuttgart = () => {
  const article = getArticleBySlug("local-seo-stuttgart");
  if (!article) return null;

  const tocItems = [
    { id: "warum-stuttgart", title: "Warum Stuttgart besonders ist" },
    { id: "stadtteile", title: "Stuttgarter Stadtteile & Keywords" },
    { id: "automobilindustrie", title: "Automobilbranche & Local SEO" },
    { id: "verzeichnisse", title: "Wichtige Stuttgarter Verzeichnisse" },
    { id: "google-business", title: "Google Business für Stuttgart" },
    { id: "wettbewerb", title: "Wettbewerbsanalyse Stuttgart" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "Stuttgart hat über 630.000 Einwohner und ist Deutschlands Automobil-Hauptstadt",
    "23 Stadtbezirke bieten lokale Keyword-Möglichkeiten",
    "Starke B2B-Orientierung durch Automobilindustrie und Zulieferer",
    "Schwäbische Mentalität: Qualität und Verlässlichkeit kommunizieren",
    "Hohe Kaufkraft macht Stuttgart attraktiv für Premium-Dienstleister"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "Stadt Stuttgart - Statistik", url: "https://www.stuttgart.de/statistik" },
    { title: "IHK Region Stuttgart", url: "https://www.stuttgart.ihk24.de" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" }
  ];

  const faqItems = [
    { question: "Wie stark ist der Local SEO Wettbewerb in Stuttgart?", answer: "Stuttgart ist die sechstgrößte Stadt Deutschlands mit starker Wirtschaft. Der Wettbewerb ist besonders in B2B-Branchen, Automobilzulieferern und gehobenen Dienstleistungen hoch. Für lokale Handwerker und Gastronomie gibt es aber viele Chancen in den Außenbezirken." },
    { question: "Welche Stadtteile haben das höchste Suchvolumen?", answer: "Stuttgart-Mitte, Bad Cannstatt, Vaihingen, Feuerbach und Degerloch haben die höchsten Suchvolumen. Aber auch Bezirke wie Zuffenhausen, Möhringen und Stammheim bieten gute Chancen bei geringerem Wettbewerb." },
    { question: "Soll ich schwäbische Begriffe in meinen Keywords verwenden?", answer: "Ja, für bestimmte lokale Suchanfragen kann das sinnvoll sein. 'Metzger' statt 'Fleischer' oder lokale Bezeichnungen können die Relevanz erhöhen. Aber verwenden Sie primär Hochdeutsch für die Hauptkeywords." },
    { question: "Wie wichtig ist die Automobilindustrie für Local SEO in Stuttgart?", answer: "Sehr wichtig für B2B-Unternehmen. Viele Suchanfragen kommen von Mitarbeitern der Automobilbranche. Wenn Sie Dienstleistungen für diese Zielgruppe anbieten, sollten Sie das in Ihrem Content berücksichtigen." }
  ];

  const stadtteile = [
    { name: "Stuttgart-Mitte", keywords: ["Innenstadt", "Königstraße", "Schlossplatz"] },
    { name: "Bad Cannstatt", keywords: ["Kurstadt", "Neckar", "Wasen"] },
    { name: "Vaihingen", keywords: ["Uni", "Forschung", "Bühlerhöhe"] },
    { name: "Feuerbach", keywords: ["Bosch", "Industrie", "Gewerbe"] },
    { name: "Degerloch", keywords: ["Fernsehturm", "Waldau", "Premium"] },
    { name: "Zuffenhausen", keywords: ["Porsche", "Automobil", "Nord"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <BlogImage src={localSeoStuttgartImg} alt="Local SEO Stuttgart - Mehr Kunden in der Schwabenmetropole" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-stuttgart" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Building2 className="h-6 w-6 text-primary" />
          Warum Stuttgart für Local SEO besonders ist
        </h2>
        <p className="mb-4 text-muted-foreground">
          Stuttgart ist nicht nur die Landeshauptstadt Baden-Württembergs, sondern auch das wirtschaftliche Herz 
          des Südwestens. Mit <strong>über 630.000 Einwohnern</strong> und einer der höchsten Kaufkräfte Deutschlands 
          bietet die Stadt enormes Potenzial für lokale Unternehmen.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Car className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">2</div>
            <div className="text-sm text-muted-foreground">Automobilkonzerne (Daimler, Porsche)</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">2,8 Mio.</div>
            <div className="text-sm text-muted-foreground">Menschen in der Region</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">Top 5</div>
            <div className="text-sm text-muted-foreground">Kaufkraft in Deutschland</div>
          </div>
        </div>
      </section>

      <section id="stadtteile" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <MapPin className="h-6 w-6 text-primary" />
          Stuttgarter Stadtteile & Keywords
        </h2>
        <p className="mb-4 text-muted-foreground">
          Stuttgart gliedert sich in 23 Stadtbezirke. Jeder hat seine eigene Identität und spezifische Suchbegriffe:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stadtteile.map((stadtteil, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{stadtteil.name}</h3>
              <div className="flex flex-wrap gap-1">
                {stadtteil.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-stuttgart" position="middle" />

      <section id="automobilindustrie" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Car className="h-6 w-6 text-primary" />
          Automobilbranche & Local SEO
        </h2>
        <p className="mb-4 text-muted-foreground">
          Die Automobilindustrie prägt Stuttgart wie keine andere Stadt. Das bietet besondere Chancen für Local SEO:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>B2B-Keywords:</strong> "Zulieferer Stuttgart", "Automotive Dienstleister", "Ingenieurbüro Automobil"</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Mitarbeiter-Services:</strong> "Business Lunch Vaihingen", "Kantine Alternative Feuerbach"</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Premium-Positionierung:</strong> Stuttgarter erwarten Qualität - kommunizieren Sie das</span></li>
        </ul>
      </section>

      <section id="verzeichnisse" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Globe className="h-6 w-6 text-primary" />
          Wichtige Stuttgarter Verzeichnisse
        </h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            {["Google Business Profile", "Bing Places", "Gelbe Seiten", "Das Örtliche", "GoLocal", "Stadtbranchenbuch Stuttgart", "Stuttgarter Zeitung Firmenverzeichnis", "IHK Stuttgart Firmendatenbank"].map((item, i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Stuttgart optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Stuttgart-spezifische Tipps:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Erwähnen Sie Ihren Stadtbezirk in der Beschreibung</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Nutzen Sie Google Posts für lokale Events (Wasen, Weindorf)</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Antworten Sie auf Bewertungen auf Schwäbisch für lokales Flair</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Fügen Sie Fotos mit Stuttgarter Wahrzeichen hinzu</span></li>
          </ul>
        </div>
      </section>

      <section id="wettbewerb" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Target className="h-6 w-6 text-primary" />
          Wettbewerbsanalyse Stuttgart
        </h2>
        <p className="text-muted-foreground mb-4">
          Der Wettbewerb variiert stark nach Branche und Stadtteil. In der Innenstadt und bei B2B-Dienstleistungen 
          ist er am höchsten. Gute Chancen bieten sich in den Außenbezirken und bei spezialisierten Nischen.
        </p>
      </section>

      <BlogCTAABTest articleSlug="local-seo-stuttgart" position="end" />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO in Stuttgart</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-stuttgart" />
      <RelatedCityGuides currentSlug="local-seo-stuttgart" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoStuttgart;