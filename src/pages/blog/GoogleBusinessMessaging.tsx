import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  MessageCircle, 
  Settings, 
  CheckCircle, 
  Lightbulb, 
  Clock,
  Users,
  Bell,
  Smartphone
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GoogleBusinessMessaging = () => {
  const article = getArticleBySlug("google-business-messaging");

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-messaging", title: "Was ist Google Business Messaging?" },
    { id: "einrichten", title: "Messaging einrichten" },
    { id: "best-practices", title: "Best Practices für Antworten" },
    { id: "automatisierung", title: "Automatisierung nutzen" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Ist Google Business Messaging kostenlos?",
      answer: "Ja, die Messaging-Funktion ist komplett kostenlos. Es entstehen keine zusätzlichen Kosten für dich oder deine Kunden."
    },
    {
      question: "Wie schnell muss ich auf Nachrichten antworten?",
      answer: "Google empfiehlt eine Antwort innerhalb von 24 Stunden. Schnellere Antworten (unter 1 Stunde) verbessern die Kundenzufriedenheit erheblich."
    },
    {
      question: "Kann ich Messaging auch deaktivieren?",
      answer: "Ja, du kannst die Messaging-Funktion jederzeit in den Einstellungen deines Google Business Profils deaktivieren."
    },
    {
      question: "Werden Nachrichten in meinem Ranking berücksichtigt?",
      answer: "Indirekt ja. Schnelle Antwortzeiten und hohe Kundenzufriedenheit können positive Signale für Google sein. Ignorierte Nachrichten sind negativ."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Kunden erwarten heute <strong>sofortige Kommunikation</strong>. Mit Google Business Messaging 
        können potenzielle Kunden dich direkt über dein <LexikonLink term="Google Business Profile" /> 
        kontaktieren – ohne Anruf, ohne E-Mail. Dieser Guide zeigt dir, wie du die Funktion optimal nutzt.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Messaging ermöglicht direkte Kundenkommunikation über Google",
          "Schnelle Antwortzeiten sind entscheidend (unter 24 Stunden)",
          "Automatische Willkommensnachrichten einrichten",
          "Benachrichtigungen aktivieren für zeitnahe Antworten",
          "Komplett kostenlos für Unternehmen und Kunden"
        ]}
      />

      {/* Was ist Messaging */}
      <section id="was-ist-messaging" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MessageCircle className="h-6 w-6 text-primary" />
          Was ist Google Business Messaging?
        </h2>

        <p className="text-muted-foreground mb-6">
          Google Business Messaging ist eine Chat-Funktion, die in deinem Google Business Profil 
          erscheint. Kunden können über den "Nachricht"-Button direkt mit dir kommunizieren.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Direkter Chat</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Mobile & Desktop</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">24/7 erreichbar</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Mehr Anfragen</p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Vorteil für Kunden</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Viele Kunden bevorzugen Textnachrichten gegenüber Anrufen. Sie können Fragen stellen, 
                ohne zum Telefonieren Zeit zu haben. Das senkt die Hemmschwelle für eine erste Kontaktaufnahme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einrichten */}
      <section id="einrichten" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Settings className="h-6 w-6 text-primary" />
          Messaging einrichten
        </h2>

        <ol className="space-y-4 mb-6">
          {[
            { title: "GBP Manager öffnen", beschreibung: "Melde dich bei business.google.com an" },
            { title: "Nachrichten aktivieren", beschreibung: "Unter 'Nachrichten' → 'Chat aktivieren'" },
            { title: "Willkommensnachricht", beschreibung: "Automatische Begrüßung für neue Anfragen einrichten" },
            { title: "Benachrichtigungen", beschreibung: "Push-Benachrichtigungen auf dem Handy aktivieren" }
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

      {/* Best Practices */}
      <section id="best-practices" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-primary" />
          Best Practices für Antworten
        </h2>

        <ul className="space-y-2 mb-6">
          {[
            "Antworte innerhalb von 24 Stunden (besser: unter 1 Stunde)",
            "Sei freundlich, professionell und hilfsbereit",
            "Beantworte Fragen vollständig und präzise",
            "Biete einen konkreten nächsten Schritt an (Termin, Anruf)",
            "Nutze den Namen des Kunden für Personalisierung",
            "Vermeide zu lange Nachrichten – kurz und knapp"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">Beispiel-Antwort:</h3>
          <div className="bg-muted p-4 rounded-lg text-sm">
            <p className="text-muted-foreground">
              "Hallo [Name], vielen Dank für Ihre Nachricht! 😊<br/><br/>
              Ja, wir haben am [Datum] noch freie Termine verfügbar. 
              Möchten Sie einen Termin für [Leistung] vereinbaren?<br/><br/>
              Sie können mich auch gerne direkt unter [Telefon] anrufen.<br/><br/>
              Viele Grüße,<br/>
              [Ihr Name]"
            </p>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Automatisierung */}
      <section id="automatisierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Bell className="h-6 w-6 text-primary" />
          Automatisierung nutzen
        </h2>

        <p className="text-muted-foreground mb-6">
          Nutze automatische Nachrichten, um schneller zu reagieren:
        </p>

        <div className="space-y-4 mb-6">
          {[
            { 
              titel: "Willkommensnachricht", 
              beispiel: "Danke für Ihre Nachricht! Wir melden uns so schnell wie möglich bei Ihnen – meist innerhalb von 2 Stunden." 
            },
            { 
              titel: "Außerhalb der Öffnungszeiten", 
              beispiel: "Wir sind derzeit nicht erreichbar. Unsere Öffnungszeiten: Mo-Fr 9-18 Uhr. Wir antworten am nächsten Werktag!" 
            },
            { 
              titel: "FAQ-Antworten", 
              beispiel: "Für häufig gestellte Fragen können Schnellantworten hinterlegt werden." 
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">{item.titel}</h4>
              <p className="text-sm text-muted-foreground italic">"{item.beispiel}"</p>
            </div>
          ))}
        </div>
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

      <HelpfulnessWidget articleSlug="google-business-messaging" />

      <SourcesSection sources={[
        { title: "Google: Business Messages", url: "https://support.google.com/business/answer/9114771" },
        { title: "Google: Nachrichten verwalten", url: "https://support.google.com/business/answer/7506578" }
      ]} />
    </ArticleLayout>
  );
};

export default GoogleBusinessMessaging;
