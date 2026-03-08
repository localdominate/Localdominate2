import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import LocalKeywordFramework from "@/components/blog/LocalKeywordFramework";
import LocalSEOOnboardingGuide from "@/components/blog/LocalSEOOnboardingGuide";
import NinetyDayImplementationPlan from "@/components/blog/NinetyDayImplementationPlan";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  Rocket, 
  MapPin, 
  CheckCircle, 
  Lightbulb, 
  Calendar,
  Target,
  Zap,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoNeugruender = () => {
  const article = getArticleBySlug("lokale-seo-fuer-neugruender");

  if (!article) return null;

  const tocItems = [
    { id: "erste-schritte", title: "Erste Schritte am Tag 1" },
    { id: "gbp-anlegen", title: "Google Business Profil anlegen" },
    { id: "website-basics", title: "Website-Grundlagen" },
    { id: "erste-bewertungen", title: "Erste Bewertungen sammeln" },
    { id: "zeitplan", title: "90-Tage-Zeitplan" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie schnell kann ich bei Google gefunden werden?",
      answer: "Ein neues Google Business Profil wird oft innerhalb von 1-2 Wochen angezeigt. Erste Rankings in der organischen Suche dauern 3-6 Monate. Mit Local SEO bist du aber im Local Pack oft schneller sichtbar."
    },
    {
      question: "Brauche ich als Neugründer sofort eine Website?",
      answer: "Ein Google Business Profil kannst du auch ohne Website anlegen. Für langfristigen Erfolg ist eine Website aber unverzichtbar. Starte mit einer einfachen One-Page-Website."
    },
    {
      question: "Wie bekomme ich als Neugründer Bewertungen?",
      answer: "Bitte Familie, Freunde und erste Kunden aktiv um ehrliche Bewertungen. Jeder zufriedene Kunde sollte gefragt werden. 10-15 Bewertungen in den ersten Monaten sind ein gutes Ziel."
    },
    {
      question: "Wie viel Budget brauche ich für Local SEO?",
      answer: "Local SEO kann komplett kostenlos gestartet werden. Google Business ist gratis, Citations in Basisverzeichnissen auch. Erst bei fortgeschrittenen Strategien oder Zeitersparnis lohnt sich ein Budget."
    }
  ];

  const zeitplan = [
    { phase: "Woche 1-2", titel: "Fundament legen", aufgaben: ["GBP anlegen & verifizieren", "Erste Fotos hochladen", "Basis-Website erstellen"] },
    { phase: "Woche 3-4", titel: "Sichtbarkeit aufbauen", aufgaben: ["Top 10 Citations anlegen", "Erste Bewertungen sammeln", "Social Media Profile"] },
    { phase: "Monat 2", titel: "Content starten", aufgaben: ["Erste Blog-Artikel", "Lokale Keywords optimieren", "GBP Posts starten"] },
    { phase: "Monat 3", titel: "Wachstum", aufgaben: ["Bewertungsroutine etablieren", "Lokale Backlinks aufbauen", "Performance analysieren"] }
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Du hast gerade gegründet und willst <strong>von Tag 1 an lokal gefunden werden</strong>? 
        Dieser Guide zeigt dir Schritt für Schritt, wie du als Neugründer mit <LexikonLink term="Local SEO" /> durchstartest – 
        kostenlos und ohne Vorkenntnisse. Von Null zur lokalen Sichtbarkeit!
      </p>

      <KeyTakeawaysBox 
        items={[
          "Google Business Profil ist der wichtigste erste Schritt",
          "Auch ohne Website kannst du lokal gefunden werden",
          "Erste 10 Bewertungen sind Gold wert für Neugründer",
          "Citations in Branchenverzeichnissen kostenlos aufbauen",
          "90-Tage-Plan für systematischen Aufbau folgen"
        ]}
      />

      {/* Statistik-Karten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">0€</div>
          <p className="text-xs text-muted-foreground">Startkosten möglich</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">1-2</div>
          <p className="text-xs text-muted-foreground">Wochen bis GBP sichtbar</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">10+</div>
          <p className="text-xs text-muted-foreground">Bewertungen als Ziel</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">90</div>
          <p className="text-xs text-muted-foreground">Tage bis erste Erfolge</p>
        </div>
      </div>

      {/* Erste Schritte */}
      <section id="erste-schritte" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Rocket className="h-6 w-6 text-primary" />
          Erste Schritte am Tag 1
        </h2>

        <p className="text-muted-foreground mb-6">
          Als Neugründer hast du einen Vorteil: Du kannst von Anfang an alles richtig machen. 
          Diese Aufgaben solltest du am ersten Tag erledigen:
        </p>

        <ol className="space-y-4 mb-6">
          {[
            { title: "Google-Konto erstellen", beschreibung: "Falls noch nicht vorhanden, ein Business-Google-Konto anlegen" },
            { title: "GBP beanspruchen", beschreibung: "Google Business Profil anlegen und Verifizierung starten" },
            { title: "NAP festlegen", beschreibung: "Name, Adresse, Telefon einheitlich definieren" },
            { title: "Erste 5 Fotos", beschreibung: "Logo, Außenansicht, Innenansicht, Team, Produkt/Service" }
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.beschreibung}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* GBP anlegen */}
      <section id="gbp-anlegen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <LexikonLink term="Google Business Profile">Google Business Profil</LexikonLink> anlegen
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein GBP ist das Fundament für lokale Sichtbarkeit. So legst du es optimal an:
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Exakten Firmennamen verwenden (keine Keywords hinzufügen!)",
            "Korrekte Hauptkategorie wählen, bis zu 9 Nebenkategorien",
            "Vollständige Adresse oder Service-Area angeben",
            "Lokale Telefonnummer (Festnetz bevorzugt)",
            "Website-URL verlinken (sobald vorhanden)",
            "Öffnungszeiten korrekt eintragen"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Verifizierung</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Die Verifizierung erfolgt meist per Postkarte (5-14 Tage). In manchen Fällen ist auch 
                Telefon- oder Video-Verifizierung möglich. Plane diese Zeit ein!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website-Basics */}
      <section id="website-basics" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="h-6 w-6 text-primary" />
          Website-Grundlagen
        </h2>

        <p className="text-muted-foreground mb-6">
          Auch als Neugründer brauchst du eine Website. So startest du schnell und günstig:
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Minimum Viable Website:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Startseite:</strong> Wer du bist, was du anbietest, für wen</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Leistungen:</strong> Deine Angebote mit lokalen Keywords</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Kontakt:</strong> NAP-Daten, Anfahrt, Kontaktformular</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Rechtliches:</strong> Impressum, Datenschutz</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Erste Bewertungen */}
      <section id="erste-bewertungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          Erste Bewertungen sammeln
        </h2>

        <p className="text-muted-foreground mb-6">
          Bewertungen sind für Neugründer besonders wichtig. So kommst du an deine ersten Rezensionen:
        </p>

        <ol className="space-y-4 mb-6">
          {[
            { title: "Persönliches Netzwerk", beschreibung: "Familie, Freunde, ehemalige Kollegen um ehrliche Bewertungen bitten" },
            { title: "Erste Kunden", beschreibung: "Nach jedem Auftrag aktiv um Feedback bitten" },
            { title: "Lieferanten & Partner", beschreibung: "Geschäftspartner können auch Bewertungen hinterlassen" },
            { title: "Bewertungslink teilen", beschreibung: "Direktlink zur Bewertung in Signatur, auf Rechnung" }
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.beschreibung}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Interaktiver Onboarding-Guide */}
      <LocalSEOOnboardingGuide />

      {/* 90-Tage-Zeitplan */}
      <section id="zeitplan" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Calendar className="h-6 w-6 text-primary" />
          90-Tage-Zeitplan
        </h2>

        <NinetyDayImplementationPlan compact />
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Keyword Framework */}
      <LocalKeywordFramework compact />

      <HelpfulnessWidget articleSlug="lokale-seo-fuer-neugruender" />

      <SourcesSection sources={[
        { title: "Google: Unternehmen bei Google anmelden", url: "https://support.google.com/business/answer/2911778" },
        { title: "Google: Erste Schritte mit Google Business", url: "https://www.google.com/intl/de_de/business/" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoNeugruender;
