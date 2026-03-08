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
import localSeoTattooImg from "@/assets/blog/local-seo-tattoo.jpg";
import { Palette, Image, Star, Users, TrendingUp, CheckCircle, Lightbulb, MapPin, Shield, Camera } from "lucide-react";

const LocalSeoTattoo = () => {
  const article = getArticleBySlug("local-seo-tattoo-piercing");
  if (!article) return null;

  const tocItems = [
    { id: "warum-tattoo", title: "Warum Tattoo-Studios Local SEO brauchen" },
    { id: "portfolio", title: "Portfolio als SEO-Waffe" },
    { id: "keywords", title: "Tattoo-Keywords richtig nutzen" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "vertrauen", title: "Vertrauen aufbauen" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "Tattoos sind Vertrauenssache - Bewertungen und Portfolio entscheiden",
    "Style-Keywords (Realistic, Traditional, Blackwork) bringen die richtige Zielgruppe",
    "Instagram und Google müssen zusammenarbeiten",
    "Vorher-Nachher-Fotos sind Gold für Local SEO",
    "Hygiene und Zertifikate sollten prominent kommuniziert werden"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "DOT - Deutsche Organisierte Tätowierer", url: "https://www.dot-ev.de" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" },
    { title: "Instagram for Business", url: "https://business.instagram.com" }
  ];

  const faqItems = [
    { question: "Wie wichtig ist Instagram für Tattoo-Studios?", answer: "Extrem wichtig! Instagram ist die Hauptplattform für Tattoo-Künstler. Aber: Instagram allein reicht nicht. Google bringt die lokalen Kunden, die aktiv suchen. Verlinken Sie Ihr Instagram in Google Business und umgekehrt." },
    { question: "Welche Tattoo-Styles sollte ich als Keywords nutzen?", answer: "Alle Styles, die Sie anbieten: 'Realistic Tattoo', 'Traditional Tattoo', 'Blackwork', 'Watercolor Tattoo', 'Japanese Tattoo', 'Geometric Tattoo', 'Dotwork', 'Lettering'. Erstellen Sie für jeden Style eine Portfolio-Seite." },
    { question: "Wie gehe ich mit negativen Bewertungen um?", answer: "Tattoos sind emotional. Antworten Sie professionell, nie defensiv. Bieten Sie Lösungen an (Nachbesserung, Gespräch). Wichtig: Die meisten Leser schauen, WIE Sie auf Kritik reagieren - das sagt mehr aus als die Kritik selbst." },
    { question: "Sollte ich Preise online nennen?", answer: "Mindestpreise ja, genaue Preise oft nein. 'Ab 80€ für kleine Motive' hilft bei der Vorqualifizierung. Für größere Projekte: 'Individuelle Beratung erforderlich'. Wichtig: 'Qualität hat ihren Preis' kommunizieren." }
  ];

  const tattooStyles = [
    { style: "Realistic", keywords: ["Portrait", "Foto-Realismus", "3D"] },
    { style: "Traditional", keywords: ["Old School", "Sailor", "Klassisch"] },
    { style: "Blackwork", keywords: ["Schwarz", "Tribal", "Ornamente"] },
    { style: "Watercolor", keywords: ["Farben", "Aquarell", "Abstrakt"] },
    { style: "Japanese", keywords: ["Irezumi", "Drachen", "Koi"] },
    { style: "Geometric", keywords: ["Muster", "Linien", "Mandala"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <BlogImage src={localSeoTattooImg} alt="Local SEO für Tattoo und Piercing Studios" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-tattoo" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Palette className="h-6 w-6 text-primary" />
          Warum Tattoo-Studios Local SEO brauchen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Ein Tattoo ist eine lebenslange Entscheidung. Kunden recherchieren gründlich - und die meisten 
          starten bei Google. <strong>"Tattoo Studio [Stadt]"</strong> hat in jeder größeren Stadt tausende 
          monatliche Suchanfragen. Wer nicht gefunden wird, verliert Kunden.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">85%</div>
            <div className="text-sm text-muted-foreground">suchen lokal nach Studios</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Image className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">#1</div>
            <div className="text-sm text-muted-foreground">Entscheidungsfaktor: Portfolio</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">4.8+</div>
            <div className="text-sm text-muted-foreground">erwartete Sterne</div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Camera className="h-6 w-6 text-primary" />
          Portfolio als SEO-Waffe
        </h2>
        <p className="mb-4 text-muted-foreground">
          Ihr Portfolio ist Ihr wichtigstes Marketing-Tool. So nutzen Sie es für SEO:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Alt-Texte:</strong> "Realistic Portrait Tattoo am Unterarm - Tattoo Studio [Stadt]"</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Dateinamen:</strong> "realistic-portrait-tattoo-berlin.jpg" statt "IMG_4521.jpg"</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Kategorisierung:</strong> Separate Galerien für jeden Tattoo-Style</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Google Business:</strong> Regelmäßig neue Arbeiten als Fotos hochladen</span></li>
        </ul>
      </section>

      <section id="keywords" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <TrendingUp className="h-6 w-6 text-primary" />
          Tattoo-Keywords richtig nutzen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tattooStyles.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{item.style}</h3>
              <div className="flex flex-wrap gap-1">
                {item.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-tattoo-piercing" position="middle" />

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Tattoo-Studios optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Kategorie:</strong> "Tattoo Shop" oder "Tattoo- und Piercingstudio"</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Fotos:</strong> Mindestens 20+ Arbeiten, Studio-Ambiente, Künstler-Portraits</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Beschreibung:</strong> Styles erwähnen, Erfahrung, Hygiene-Standards</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Posts:</strong> Neue Arbeiten, Walk-In-Tage, Gastartist-Ankündigungen</span></li>
          </ul>
        </div>
      </section>

      <section id="vertrauen" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Shield className="h-6 w-6 text-primary" />
          Vertrauen aufbauen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Tattoos sind dauerhaft - Vertrauen ist alles. So bauen Sie es auf:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Kommunizieren Sie:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Hygiene-Zertifikate & Gesundheitsamt</li>
              <li>• Erfahrung der Künstler (Jahre, Ausbildung)</li>
              <li>• Verwendete Materialien (vegan, hochwertig)</li>
              <li>• Beratungsprozess vor dem Termin</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Social Proof:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 5-Sterne-Bewertungen prominent zeigen</li>
              <li>• Testimonials mit Fotos</li>
              <li>• Anzahl zufriedener Kunden</li>
              <li>• Award/Convention-Auszeichnungen</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-tattoo-piercing" position="end" />

      {industryStats.tattoo?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.tattoo} />

      <IndustryComparisonTable data={industryComparisonData.tattoo} />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO für Tattoo-Studios</h2>
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
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Tattoo-Studio verdreifacht Anfragen</h2>
        {industryCaseStudies.tattoo.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-tattoo-piercing" />
      <RelatedIndustryGuides currentSlug="local-seo-tattoo-studios" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoTattoo;