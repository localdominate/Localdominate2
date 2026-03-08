import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import RelatedIndustryGuides from "@/components/blog/RelatedIndustryGuides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoApothekeImg from "@/assets/blog/local-seo-apotheke.jpg";
import { Pill, Clock, Star, Users, TrendingUp, CheckCircle, Lightbulb, MapPin, Shield, Heart, Phone } from "lucide-react";

const LocalSeoApotheke = () => {
  const article = getArticleBySlug("local-seo-apotheke");
  if (!article) return null;

  const tocItems = [
    { id: "warum-apotheke", title: "Warum Apotheken Local SEO brauchen" },
    { id: "notdienst", title: "Notdienst als SEO-Chance" },
    { id: "services", title: "Zusatzservices kommunizieren" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "ymyl", title: "YMYL & Vertrauen" },
    { id: "faq", title: "FAQ" }
  ];

  const keyTakeaways = [
    "'Apotheke in der Nähe' und 'Apotheke Notdienst' sind die wichtigsten Keywords",
    "YMYL (Your Money Your Life) erfordert besondere Vertrauenssignale",
    "Zusatzservices wie Impfungen, Blutdruckmessen, Botendienst differenzieren",
    "Google Business Öffnungszeiten und Notdienste aktuell halten",
    "Lokale Gesundheitsthemen im Blog stärken die Autorität"
  ];

  const sources: { title: string; url: string }[] = [
    { title: "ABDA - Bundesvereinigung Deutscher Apothekerverbände", url: "https://www.abda.de" },
    { title: "Apothekerverband Nordrhein", url: "https://www.apotheken.de" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" }
  ];

  const faqItems = [
    { question: "Wie wichtig ist der Notdienst für Local SEO?", answer: "Sehr wichtig! 'Apotheke Notdienst [Stadt]' hat hohes Suchvolumen, besonders nachts und am Wochenende. Halten Sie Ihre Notdienst-Zeiten in Google Business immer aktuell und erstellen Sie eine Notdienst-Landingpage." },
    { question: "Darf ich Medikamente auf meiner Website bewerben?", answer: "Hier gelten strenge Regeln. Rezeptpflichtige Medikamente dürfen nicht beworben werden. OTC-Produkte können Sie nennen, aber achten Sie auf Heilmittelwerbegesetz. Fokussieren Sie sich lieber auf Services und Beratungskompetenz." },
    { question: "Wie unterscheide ich mich von Online-Apotheken?", answer: "Betonen Sie den persönlichen Kontakt, die sofortige Verfügbarkeit, die Beratung vor Ort, Zusatzservices (Impfungen, Blutdruckmessen, Medikationsanalyse) und den Botendienst. Das sind Vorteile, die Online-Apotheken nicht bieten können." },
    { question: "Welche Zusatzservices sollte ich kommunizieren?", answer: "Impfungen (Grippe, Corona, Reise), Blutdruckmessen, Blutzuckermessung, Medikationsanalyse, Kompressionsstrümpfe-Anpassung, Ernährungsberatung, Botendienst, E-Rezept-Service. Jeder Service kann eine eigene Landingpage haben." }
  ];

  const services = [
    { service: "Notdienst", keywords: ["Nacht", "Wochenende", "Feiertag"] },
    { service: "Impfungen", keywords: ["Grippe", "Corona", "Reise"] },
    { service: "Botendienst", keywords: ["Lieferung", "Zuhause", "Kostenlos"] },
    { service: "Beratung", keywords: ["Medikation", "Wechselwirkung", "Pflege"] },
    { service: "Messung", keywords: ["Blutdruck", "Blutzucker", "BMI"] },
    { service: "E-Rezept", keywords: ["Digital", "App", "QR-Code"] }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <BlogImage src={localSeoApothekeImg} alt="Local SEO für Apotheken" priority />
      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="warum-apotheke" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Pill className="h-6 w-6 text-primary" />
          Warum Apotheken Local SEO brauchen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Apotheken sind <strong>hyper-lokal</strong>. Kunden suchen die nächste Apotheke, den aktuellen 
          Notdienst, oder spezifische Services. Wer bei Google Maps nicht erscheint, verliert Laufkundschaft 
          an die Konkurrenz - oder an Online-Apotheken.
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">suchen lokal nach Apotheken</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Notdienst-Suchanfragen</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-bold text-2xl text-foreground">4.5+</div>
            <div className="text-sm text-muted-foreground">erwartete Sterne</div>
          </div>
        </div>
      </section>

      <section id="notdienst" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Clock className="h-6 w-6 text-primary" />
          Notdienst als SEO-Chance
        </h2>
        <p className="mb-4 text-muted-foreground">
          Der Notdienst ist Ihr stärkstes Local SEO Asset. So nutzen Sie ihn:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Google Business:</strong> Notdienst-Zeiten unter "Besondere Öffnungszeiten" eintragen</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Landingpage:</strong> "Apotheke Notdienst [Stadt]" mit aktuellem Kalender</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Google Posts:</strong> Am Tag vor dem Notdienst posten</span></li>
          <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span><strong>Telefonnummer:</strong> Gut sichtbar für Notfälle</span></li>
        </ul>
      </section>

      <section id="services" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Heart className="h-6 w-6 text-primary" />
          Zusatzservices kommunizieren
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{item.service}</h3>
              <div className="flex flex-wrap gap-1">
                {item.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-apotheke" position="middle" />

      <section id="google-business" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Apotheken optimieren
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Kategorie:</strong> "Apotheke" als Hauptkategorie</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Attribute:</strong> "Rollstuhlgerecht", "Parkplätze", "Kontaktlos bezahlen"</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Services:</strong> Alle Zusatzleistungen als Services anlegen</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-5 w-5 text-primary mt-0.5" /><span><strong>Fotos:</strong> Außenansicht, Innenraum, Team, Beratungssituation</span></li>
          </ul>
        </div>
      </section>

      <section id="ymyl" className="mb-12 scroll-mt-20">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
          <Shield className="h-6 w-6 text-primary" />
          YMYL & Vertrauen aufbauen
        </h2>
        <p className="mb-4 text-muted-foreground">
          Apotheken fallen unter YMYL (Your Money Your Life). Google bewertet Gesundheitsthemen strenger:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Expertise zeigen:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Apotheker-Team mit Qualifikationen vorstellen</li>
              <li>• Fortbildungen und Spezialisierungen nennen</li>
              <li>• Mitgliedschaft in Fachverbänden</li>
              <li>• Zertifizierungen (QMS, etc.)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Autorität aufbauen:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Gesundheitstipps-Blog mit Quellenangaben</li>
              <li>• Zusammenarbeit mit lokalen Ärzten erwähnen</li>
              <li>• Lokale Gesundheitsaktionen (Impfwochen)</li>
              <li>• Presseerwähnungen sammeln</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-apotheke" position="end" />

      <ImplementationRoadmap data={industryImplementationData.apotheke} />

      <section id="faq" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Häufige Fragen zu Local SEO für Apotheken</h2>
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
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Apotheke gewinnt jüngere Zielgruppe</h2>
        {industryCaseStudies.apotheke.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-apotheke" />
      <RelatedIndustryGuides currentSlug="local-seo-apotheken" />
      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoApotheke;