import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoDuesseldorfImg from "@/assets/blog/local-seo-duesseldorf.jpg";
import { MapPin, Building2, TrendingUp, Target, Shirt, Lightbulb, Users, Star, CheckCircle, Globe, Sparkles } from "lucide-react";

const LocalSeoDuesseldorf = () => {
  const article = getArticleBySlug("local-seo-duesseldorf");
  if (!article) return null;

  const tocItems = [
    { id: "warum-duesseldorf", title: "Warum Düsseldorf besonders ist" },
    { id: "stadtteile", title: "Düsseldorfer Stadtteile & Keywords" },
    { id: "mode-messe", title: "Mode & Messen als SEO-Chance" },
    { id: "verzeichnisse", title: "Wichtige Düsseldorfer Verzeichnisse" },
    { id: "google-business", title: "Google Business für Düsseldorf" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "Düsseldorf hat über 620.000 Einwohner und ist Deutschlands Modehauptstadt",
    "Die Königsallee (Kö) ist einer der bekanntesten Einkaufsstraßen Europas",
    "Starke Messe- und Kongressstadt mit internationaler Reichweite",
    "Hohe japanische Community - mehrsprachiges SEO möglich",
    "Medienhafen als Tech- und Kreativstandort wächst stark"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "Stadt Düsseldorf - Statistik", url: "https://www.duesseldorf.de/statistik" },
    { title: "IHK Düsseldorf", url: "https://www.duesseldorf.ihk.de" },
    { title: "Messe Düsseldorf", url: "https://www.messe-duesseldorf.de" }
  ];

  const faqItems = [
    { question: "Wie stark ist der Wettbewerb für Local SEO in Düsseldorf?", answer: "Düsseldorf hat starken Wettbewerb in den Bereichen Mode, Beauty, Gastronomie und gehobene Dienstleistungen. Die Altstadt und die Kö-Umgebung sind besonders umkämpft. Gute Chancen bieten sich in den Außenbezirken und spezialisierten Nischen." },
    { question: "Welche Stadtteile haben das höchste Suchvolumen?", answer: "Altstadt, Stadtmitte, Oberkassel, Pempelfort und Bilk haben die höchsten Suchvolumen. Aber auch Flingern, Unterbilk und der Medienhafen bieten wachsendes Potenzial bei jüngerer Zielgruppe." },
    { question: "Sollte ich während der Messen besondere SEO-Maßnahmen ergreifen?", answer: "Unbedingt! Große Messen wie BOOT, ProWein oder Medica bringen Hunderttausende Besucher. Erstellen Sie temporäre Landingpages und Google Posts für Messebesucher mit relevanten Keywords." },
    { question: "Lohnt sich japanisches SEO in Düsseldorf?", answer: "Wenn Sie die japanische Community ansprechen wollen, definitiv. Mit über 8.000 Japanern hat Düsseldorf die größte japanische Gemeinde Deutschlands. Für Restaurants, Beauty und bestimmte Dienstleistungen kann das ein Alleinstellungsmerkmal sein." }
  ];

  const stadtteile = [
    { name: "Altstadt", keywords: ["Ausgehen", "Kneipen", "Altbier"] },
    { name: "Stadtmitte", keywords: ["Shopping", "Kö", "Business"] },
    { name: "Oberkassel", keywords: ["Premium", "Familie", "Rhein"] },
    { name: "Pempelfort", keywords: ["Jung", "Kreativ", "Trendy"] },
    { name: "Medienhafen", keywords: ["Tech", "Architektur", "Modern"] },
    { name: "Flingern", keywords: ["Szene", "Kunst", "Alternativ"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <BlogImage src={localSeoDuesseldorfImg} alt="Local SEO Düsseldorf - Mehr Kunden in der Rheinmetropole" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-duesseldorf" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Building2 className="h-6 w-6 text-primary" />
          Warum Düsseldorf für Local SEO besonders ist
        </h2>
        <p className="mb-4 text-muted-foreground">
          Düsseldorf ist nicht nur die Landeshauptstadt NRWs, sondern auch Deutschlands <strong>Modehauptstadt</strong> 
          und einer der wichtigsten Messestandorte. Die Stadt am Rhein verbindet Tradition (Altstadt, Altbier) 
          mit Moderne (Medienhafen, Tech-Szene).
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Shirt className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">#1</div>
            <div className="text-sm text-muted-foreground">Modestadt Deutschlands</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">620.000+</div>
            <div className="text-sm text-muted-foreground">Einwohner</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">23+</div>
            <div className="text-sm text-muted-foreground">Internationale Leitmessen</div>
          </div>
        </div>
      </section>

      <section id="stadtteile" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <MapPin className="h-6 w-6 text-primary" />
          Düsseldorfer Stadtteile & Keywords
        </h2>
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

      <BlogCTAABTest articleSlug="local-seo-duesseldorf" position="middle" />

      <section id="mode-messe" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Sparkles className="h-6 w-6 text-primary" />
          Mode & Messen als SEO-Chance
        </h2>
        <p className="mb-4 text-muted-foreground">
          Die großen Düsseldorfer Messen bringen Millionen von Besuchern. Das sind einmalige SEO-Chancen:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Wichtige Messen:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• BOOT Düsseldorf (Januar)</li>
              <li>• ProWein (März)</li>
              <li>• drupa (Mai)</li>
              <li>• MEDICA (November)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">SEO-Strategie:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Landingpages für Messebesucher</li>
              <li>• Google Posts während der Messe</li>
              <li>• Keywords wie "Hotel ProWein"</li>
              <li>• Mehrsprachiger Content (EN/JP)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="verzeichnisse" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Globe className="h-6 w-6 text-primary" />
          Wichtige Düsseldorfer Verzeichnisse
        </h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <ul className="grid md:grid-cols-2 gap-3">
            {["Google Business Profile", "Bing Places", "Gelbe Seiten", "Das Örtliche", "GoLocal", "RP Online Branchenbuch", "Düsseldorf.de Firmenverzeichnis", "IHK Düsseldorf Firmendatenbank"].map((item, i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Düsseldorf optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Rhein-Nähe als Standortvorteil kommunizieren</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Fotos mit Medienhafen-Architektur oder Altstadt nutzen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Karneval und Altbier-Kultur einbeziehen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span>Mehrsprachige Beschreibung für internationale Gäste</span></li>
          </ul>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-duesseldorf" position="end" />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO in Düsseldorf</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-duesseldorf" />
      <RelatedCityGuides currentSlug="local-seo-duesseldorf" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoDuesseldorf;