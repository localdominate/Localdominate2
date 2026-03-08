import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import RelatedIndustryGuides from "@/components/blog/RelatedIndustryGuides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoYogaImg from "@/assets/blog/local-seo-yoga.jpg";
import { Heart, Calendar, Star, Image, Users, TrendingUp, CheckCircle, Lightbulb, MapPin, Clock } from "lucide-react";

const LocalSeoYoga = () => {
  const article = getArticleBySlug("local-seo-yoga-pilates");
  if (!article) return null;

  const tocItems = [
    { id: "warum-yoga", title: "Warum Yoga-Studios Local SEO brauchen" },
    { id: "keywords", title: "Die richtigen Keywords finden" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "bewertungen", title: "Bewertungen strategisch nutzen" },
    { id: "content", title: "Content-Strategie für Yoga-Studios" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "Yoga und Pilates werden primär lokal gesucht - 'Yoga Studio in meiner Nähe'",
    "Kursplan und Preise müssen leicht auffindbar sein",
    "Fotos der Räumlichkeiten und Atmosphäre sind entscheidend",
    "Spezialisierung kommunizieren: Vinyasa, Yin, Hot Yoga, Prenatal...",
    "Online-Kurse können die lokale Reichweite ergänzen"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "BDY - Berufsverband der Yogalehrenden", url: "https://www.yoga.de" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" },
    { title: "Deutscher Pilates Verband", url: "https://www.pilates-verband.de" }
  ];

  const faqItems = [
    { question: "Welche Keywords sind für Yoga-Studios am wichtigsten?", answer: "Die wichtigsten Keywords sind: 'Yoga [Stadt]', 'Yoga Studio in der Nähe', 'Yoga Anfänger [Stadt]', 'Vinyasa Yoga [Stadt]', 'Hot Yoga [Stadt]', 'Pilates [Stadt]'. Dazu kommen Long-Tail-Keywords wie 'Yoga für Schwangere [Stadt]' oder 'Yoga Rückenschmerzen [Stadt]'." },
    { question: "Wie wichtig sind Fotos für ein Yoga-Studio?", answer: "Extrem wichtig! Yoga-Interessierte wollen die Atmosphäre spüren, bevor sie kommen. Zeigen Sie: Hellen, sauberen Raum, Yogamatten, Pflanzen, vielleicht Kerzen. Auch Kursfotos (mit Einverständnis) zeigen die Community." },
    { question: "Sollte ich alle Yoga-Stile auf einer Seite beschreiben?", answer: "Nein! Erstellen Sie für jeden Yoga-Stil (Vinyasa, Hatha, Yin, Kundalini, etc.) eine eigene Landingpage. So können Sie für spezifische Suchanfragen wie 'Yin Yoga München' ranken." },
    { question: "Wie gehe ich mit Online-Kursen und Local SEO um?", answer: "Online-Kurse sind eine Ergänzung, kein Ersatz. Erwähnen Sie beides: 'Vor-Ort-Kurse in [Stadt] und Online-Live-Sessions'. So sprechen Sie beide Zielgruppen an und zeigen Flexibilität." }
  ];

  const yogaStyles = [
    { style: "Vinyasa/Flow", keywords: ["dynamisch", "fließend", "sportlich"] },
    { style: "Hatha", keywords: ["klassisch", "Anfänger", "Grundlagen"] },
    { style: "Yin Yoga", keywords: ["meditativ", "Dehnung", "Entspannung"] },
    { style: "Hot Yoga", keywords: ["Hitze", "Schwitzen", "Intensiv"] },
    { style: "Pilates", keywords: ["Core", "Kraft", "Rücken"] },
    { style: "Prenatal", keywords: ["Schwanger", "Rückbildung", "Mama"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <BlogImage src={localSeoYogaImg} alt="Local SEO für Yoga und Pilates Studios" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-yoga" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Heart className="h-6 w-6 text-primary" />
          Warum Yoga-Studios Local SEO brauchen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Yoga und Pilates sind <strong>zutiefst lokale Dienstleistungen</strong>. Niemand fährt eine Stunde 
          für einen 90-Minuten-Kurs. Ihre Kunden suchen nach Studios in ihrer Nähe - und wenn Sie bei Google 
          nicht gefunden werden, gehen sie zur Konkurrenz.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">90%</div>
            <div className="text-sm text-muted-foreground">suchen "Yoga + Stadt"</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">15 Min</div>
            <div className="text-sm text-muted-foreground">max. Anfahrtszeit</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">4.5+</div>
            <div className="text-sm text-muted-foreground">erwartete Sterne</div>
          </div>
        </div>
      </section>

      <section id="keywords" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <TrendingUp className="h-6 w-6 text-primary" />
          Die richtigen Keywords für Yoga-Studios
        </h2>
        <p className="mb-4 text-muted-foreground">
          Jeder Yoga-Stil hat seine eigenen Suchbegriffe. Erstellen Sie für jeden Stil eine eigene Landingpage:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {yogaStyles.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">{item.style}</h4>
              <div className="flex flex-wrap gap-1">
                {item.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-yoga-pilates" position="middle" />

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Yoga-Studios optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3">Yoga-spezifische Optimierungen:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Kategorie:</strong> "Yoga Studio" als Hauptkategorie, "Pilates Studio" als Nebenkategorie</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Öffnungszeiten:</strong> Alle Kurszeiten als Öffnungszeiten eintragen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Attribute:</strong> "Probestunde möglich", "Anfänger willkommen", "Online-Buchung"</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Produkte:</strong> Kurspakete, 10er-Karten, Monatsabos als "Produkte" anlegen</span></li>
          </ul>
        </div>
      </section>

      <section id="bewertungen" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Users className="h-6 w-6 text-primary" />
          Bewertungen strategisch nutzen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Yoga-Studios leben von Vertrauen und Atmosphäre. Bewertungen sind entscheidend:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>Nach der ersten Stunde um Feedback bitten (wenn positiv: "Würdest du uns auf Google bewerten?")</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>QR-Code zur Google-Bewertung im Studio aushängen</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>Auf jede Bewertung persönlich und warmherzig antworten</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span>Negative Bewertungen als Chance zur Verbesserung nutzen</span></li>
        </ul>
      </section>

      <section id="content" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Image className="h-6 w-6 text-primary" />
          Content-Strategie für Yoga-Studios
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Blog-Themen:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• "Yoga für Anfänger: Der erste Schritt"</li>
              <li>• "5 Yoga-Übungen für den Rücken"</li>
              <li>• "Unterschied Vinyasa vs. Hatha"</li>
              <li>• "Yoga in der Schwangerschaft"</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Visuelle Inhalte:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Studiofotos (hell, einladend)</li>
              <li>• Kursfotos mit Teilnehmern</li>
              <li>• Lehrer-Portraits</li>
              <li>• Kurze Yoga-Videos (Instagram)</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-yoga-pilates" position="end" />

      {industryStats.yoga?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.yoga} />

      <IndustryComparisonTable data={industryComparisonData.yoga} />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO für Yoga-Studios</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Yoga-Studio steigert Kursauslastung</h2>
        {industryCaseStudies.yoga.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-yoga-pilates" />
      <RelatedIndustryGuides currentSlug="local-seo-yoga-studios" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoYoga;