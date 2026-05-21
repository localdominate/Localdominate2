import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LeadGenerationCTA from "@/components/blog/LeadGenerationCTA";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Star, MessageSquare, QrCode, Mail, Users, Gift, ThumbsUp, AlertTriangle } from "lucide-react";
import googleBewertungenImg from "@/assets/blog/google-bewertungen.webp";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import ReviewWorkflowChecklist from "@/components/blog/ReviewWorkflowChecklist";
import ReviewAcquisitionScripts from "@/components/blog/ReviewAcquisitionScripts";
import ReviewEmailTemplates from "@/components/blog/ReviewEmailTemplates";
import SmsReviewTemplates from "@/components/blog/SmsReviewTemplates";
import ReputationManagementStrategy from "@/components/blog/ReputationManagementStrategy";

const GoogleBewertungen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-bewertungen-bekommen", language)!;

  const content = {
    de: {
      tocItems: [
        { id: "wichtigkeit", title: "Warum sind Google Bewertungen so wichtig?" },
        { id: "strategien", title: "Wie bekommst du mehr Google Bewertungen?" },
        { id: "qr-code", title: "Wie nutzt du QR-Codes für mehr Bewertungen?" },
        { id: "workflow-checklisten", title: "Welche Workflows steigern deine Review-Rate?" },
        { id: "negativ", title: "Wie gehst du mit negativen Bewertungen um?" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ],
      intro: {
        stat: "93% der Verbraucher",
        text: "lesen Online-Bewertungen, bevor sie ein lokales Unternehmen besuchen. Google Bewertungen sind der wichtigste Vertrauensfaktor für potenzielle Kunden. Hier erfährst du, wie du mehr authentische Bewertungen bekommst – ohne gegen Googles Richtlinien zu verstoßen."
      },
      section1: {
        title: "Warum sind Google Bewertungen so wichtig?",
        text1: "Google Bewertungen beeinflussen nicht nur das Vertrauen potenzieller Kunden, sondern auch dein Ranking in den lokalen Suchergebnissen.",
        stats: [
          { stat: "88%", desc: "vertrauen Online-Bewertungen wie persönlichen Empfehlungen" },
          { stat: "4.0+", desc: "Mindest-Rating, ab dem Kunden buchen/kaufen" },
          { stat: "72%", desc: "würden erst nach dem Lesen positiver Bewertungen handeln" },
        ],
        text2: "Mehr Bewertungen bedeuten mehr Sichtbarkeit, mehr Vertrauen und letztendlich mehr Umsatz."
      },
      section2: {
        title: "Wie bekommst du mehr Google Bewertungen?",
        strategies: [
          { title: "1. Direkt nach dem Kauf fragen", desc: "Der beste Zeitpunkt ist direkt nach einer positiven Erfahrung. Sage einfach: \"Es freut mich, dass Sie zufrieden sind. Würden Sie uns mit einer Google Bewertung unterstützen?\"" },
          { title: "2. QR-Code auf Rechnungen", desc: "Platziere einen QR-Code auf deiner Rechnung, der direkt zur Bewertungsseite führt. So reduzierst du die Hürde auf ein Minimum." },
          { title: "3. Follow-up E-Mail senden", desc: "Sende 1-2 Tage nach dem Kauf eine freundliche E-Mail mit der Bitte um Feedback. Füge einen direkten Link zur Bewertung hinzu." },
          { title: "4. Team einbinden", desc: "Schulde dein Team, zufriedene Kunden freundlich um Bewertungen zu bitten. Mache es zum natürlichen Teil des Kundenkontakts." },
          { title: "5. Auf Bewertungen antworten", desc: "Antworte auf jede Bewertung persönlich. Das zeigt anderen Kunden, dass du Feedback wertschätzt und ermutigt zu weiteren Reviews." },
          { title: "6. Exzellenten Service bieten", desc: "Der beste Weg zu mehr Bewertungen: Biete Erlebnisse, über die Kunden sprechen wollen. Begeisterte Kunden bewerten von selbst." },
          { title: "7. Aufsteller und Schilder nutzen", desc: "Platziere einen kleinen Aufsteller an der Kasse oder im Eingangsbereich: \"Zufrieden? Bewerte uns auf Google!\"" },
        ]
      },
      section3: {
        title: "Wie nutzt du QR-Codes für mehr Bewertungen?",
        text1: "Der Schlüssel zu mehr Bewertungen ist die Reduzierung von Hindernissen. Mit einem direkten Link oder QR-Code muss der Kunde nicht erst nach deinem Unternehmen suchen.",
        stepsTitle: "So erstellst du deinen Bewertungslink:",
        steps: [
          "Öffne dein Google Business Profil",
          "Klicke auf \"Mehr Bewertungen erhalten\"",
          "Kopiere den generierten Link",
          "Erstelle einen QR-Code (z.B. mit qr-code-generator.com)",
        ],
        tip: "Drucke den QR-Code auf Visitenkarten, Rechnungen, Kassenzettel und Aufsteller. Je sichtbarer, desto mehr Bewertungen."
      },
      section4: {
        title: "Wie gehst du mit negativen Bewertungen um?",
        text1: "Negative Bewertungen gehören dazu – wichtig ist, wie du damit umgehst. Eine professionelle Antwort kann sogar Vertrauen aufbauen.",
        tips: [
          { title: "Schnell antworten:", desc: "Idealerweise innerhalb von 24 Stunden." },
          { title: "Sachlich bleiben:", desc: "Nie emotional oder defensiv reagieren." },
          { title: "Lösung anbieten:", desc: "Zeige Bereitschaft, das Problem zu lösen." },
          { title: "Offline gehen:", desc: "Biete an, das Gespräch persönlich fortzuführen." },
        ],
        warning: {
          title: "Wichtig:",
          text: "Kaufe niemals gefälschte positive Bewertungen oder bitte um die Löschung echter negativer Bewertungen. Google kann dein Profil dafür bestrafen."
        }
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Darf ich Kunden für Bewertungen belohnen?", a: "Nein, das verstößt gegen Googles Richtlinien. Du darfst aber allgemein um Feedback bitten, ohne eine Belohnung zu versprechen." },
          { q: "Wie viele Bewertungen brauche ich?", a: "Es gibt keine Mindestanzahl, aber je mehr desto besser. Studien zeigen, dass 50+ Bewertungen als vertrauenswürdig gelten. Wichtiger ist aber regelmäßiger Zuwachs." },
          { q: "Kann ich negative Bewertungen löschen lassen?", a: "Nur wenn sie gegen Googles Richtlinien verstoßen (Spam, Hassrede, etc.). Echte negative Erfahrungsberichte können nicht entfernt werden." },
          { q: "Warum verschwinden manche Bewertungen?", a: "Google filtert Bewertungen automatisch. Neue Accounts, VPN-Nutzung oder verdächtige Muster können zur Filterung führen. Das ist normal und betrifft alle Unternehmen." },
        ]
      }
    },
    en: {
      tocItems: [
        { id: "wichtigkeit", title: "Why Are Google Reviews So Important?" },
        { id: "strategien", title: "How Do You Get More Google Reviews?" },
        { id: "qr-code", title: "How Do You Use QR Codes for More Reviews?" },
        { id: "workflow-checklisten", title: "Which Workflows Boost Your Review Rate?" },
        { id: "negativ", title: "How Do You Handle Negative Reviews?" },
        { id: "faq", title: "Frequently Asked Questions" },
      ],
      intro: {
        stat: "93% of consumers",
        text: "read online reviews before visiting a local business. Google reviews are the most important trust factor for potential customers. Here you'll learn how to get more authentic reviews – without violating Google's guidelines."
      },
      section1: {
        title: "Why Are Google Reviews So Important?",
        text1: "Google reviews not only influence the trust of potential customers but also your ranking in local search results.",
        stats: [
          { stat: "88%", desc: "trust online reviews as much as personal recommendations" },
          { stat: "4.0+", desc: "minimum rating before customers book/buy" },
          { stat: "72%", desc: "would only act after reading positive reviews" },
        ],
        text2: "More reviews mean more visibility, more trust, and ultimately more revenue."
      },
      section2: {
        title: "How Do You Get More Google Reviews?",
        strategies: [
          { title: "1. Ask Right After Purchase", desc: "The best time is right after a positive experience. Simply say: \"I'm glad you're satisfied. Would you support us with a Google review?\"" },
          { title: "2. QR Code on Invoices", desc: "Place a QR code on your invoice that leads directly to the review page. This reduces the barrier to a minimum." },
          { title: "3. Send Follow-up Email", desc: "Send a friendly email 1-2 days after purchase asking for feedback. Include a direct link to the review." },
          { title: "4. Involve Your Team", desc: "Train your team to politely ask satisfied customers for reviews. Make it a natural part of customer contact." },
          { title: "5. Respond to Reviews", desc: "Respond personally to every review. This shows other customers that you value feedback and encourages more reviews." },
          { title: "6. Provide Excellent Service", desc: "The best way to get more reviews: Provide experiences that customers want to talk about. Delighted customers review on their own." },
          { title: "7. Use Signs and Displays", desc: "Place a small stand at the checkout or entrance: \"Satisfied? Rate us on Google!\"" },
        ]
      },
      section3: {
        title: "QR Code and Smart Link Tactics",
        text1: "The key to more reviews is reducing barriers. With a direct link or QR code, customers don't have to search for your business first.",
        stepsTitle: "How to create your review link:",
        steps: [
          "Open your Google Business Profile",
          "Click on \"Get more reviews\"",
          "Copy the generated link",
          "Create a QR code (e.g., with qr-code-generator.com)",
        ],
        tip: "Print the QR code on business cards, invoices, receipts, and displays. The more visible, the more reviews."
      },
      section4: {
        title: "Managing Negative Reviews",
        text1: "Negative reviews are part of the game – what matters is how you handle them. A professional response can even build trust.",
        tips: [
          { title: "Respond quickly:", desc: "Ideally within 24 hours." },
          { title: "Stay objective:", desc: "Never react emotionally or defensively." },
          { title: "Offer a solution:", desc: "Show willingness to resolve the issue." },
          { title: "Take it offline:", desc: "Offer to continue the conversation in person." },
        ],
        warning: {
          title: "Important:",
          text: "Never buy fake positive reviews or ask for the deletion of genuine negative reviews. Google can penalize your profile for this."
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Can I reward customers for reviews?", a: "No, this violates Google's guidelines. However, you may ask for feedback in general without promising a reward." },
          { q: "How many reviews do I need?", a: "There's no minimum number, but more is better. Studies show that 50+ reviews are considered trustworthy. More importantly is regular growth." },
          { q: "Can I have negative reviews deleted?", a: "Only if they violate Google's guidelines (spam, hate speech, etc.). Genuine negative experience reports cannot be removed." },
          { q: "Why do some reviews disappear?", a: "Google automatically filters reviews. New accounts, VPN usage, or suspicious patterns can lead to filtering. This is normal and affects all businesses." },
        ]
      }
    }
  };

  const t = content[language];
  const icons = [MessageSquare, QrCode, Mail, Users, Star, Gift, ThumbsUp];

  const faqItems = t.faq.items.map(item => ({
    question: item.q,
    answer: item.a
  }));

  // HowTo Schema für Bewertungen bekommen
  const howToSchema = {
    "@type": "HowTo",
    "name": language === "de" 
      ? "Mehr Google Bewertungen bekommen - 7 ethische Strategien"
      : "Get More Google Reviews - 7 Ethical Strategies",
    "description": language === "de"
      ? "Schritt-für-Schritt Anleitung um mehr authentische Google Bewertungen zu erhalten ohne gegen Richtlinien zu verstoßen."
      : "Step-by-step guide to get more authentic Google reviews without violating guidelines.",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Bewertungslink erstellen" : "Create review link",
        "text": language === "de"
          ? "Öffne dein Google Business Profil und kopiere den direkten Bewertungslink."
          : "Open your Google Business Profile and copy the direct review link.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "QR-Code generieren" : "Generate QR code",
        "text": language === "de"
          ? "Erstelle einen QR-Code mit dem Bewertungslink für Visitenkarten und Rechnungen."
          : "Create a QR code with the review link for business cards and invoices.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Nach dem Kauf fragen" : "Ask after purchase",
        "text": language === "de"
          ? "Bitte zufriedene Kunden direkt nach einer positiven Erfahrung um eine Bewertung."
          : "Ask satisfied customers for a review right after a positive experience.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Follow-up E-Mail senden" : "Send follow-up email",
        "text": language === "de"
          ? "Sende 1-2 Tage nach dem Kauf eine freundliche E-Mail mit Bewertungslink."
          : "Send a friendly email with review link 1-2 days after purchase.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Auf Bewertungen antworten" : "Respond to reviews",
        "text": language === "de"
          ? "Antworte persönlich auf jede Bewertung um weitere Kunden zu ermutigen."
          : "Respond personally to every review to encourage more customers.",
        "position": 5
      }
    ]
  };

  return (
    <ArticleLayout article={article} tocItems={t.tocItems} additionalSchema={howToSchema} faqItems={faqItems}>
      <TableOfContents items={t.tocItems} />

      <p className="text-xl leading-relaxed mb-8">
        <strong>{t.intro.stat}</strong> lesen Online-Bewertungen, bevor sie ein lokales Unternehmen besuchen. <LexikonLink term="Reviews (Bewertungen)">Google Bewertungen</LexikonLink> sind der wichtigste Vertrauensfaktor für potenzielle Kunden. Hier erfährst du, wie du mehr authentische Bewertungen bekommst – ohne gegen Googles Richtlinien zu verstoßen.
      </p>

      <p data-featured-snippet="true" data-speakable="true">
        <strong>Mehr Google Bewertungen bekommen</strong> gelingt durch sieben ethische Strategien: direkt nach dem Kauf fragen, QR-Codes auf Rechnungen und Visitenkarten platzieren, Follow-up-E-Mails senden, das Team einbinden, auf alle Bewertungen antworten, exzellenten Service bieten und Hinweisschilder am Eingang aufstellen. Unternehmen mit über 50 Bewertungen genießen 70 % mehr Vertrauen. Google verbietet Bewertungskauf und Gegenleistungen für Reviews.
      </p>

      <KeyTakeawaysBox 
        items={language === "de" ? [
          "Warum Bewertungen entscheidend für lokales Ranking sind",
          "7 ethische Strategien für mehr Google Reviews",
          "QR-Code Taktiken für höhere Bewertungsraten",
          "Negative Bewertungen professionell managen",
          "Tools und Templates für systematisches Bewertungsmanagement"
        ] : [
          "Why reviews are crucial for local ranking",
          "7 ethical strategies for more Google reviews",
          "QR code tactics for higher review rates",
          "Managing negative reviews professionally",
          "Tools and templates for systematic review management"
        ]}
      />

      <BlogImage 
        src={googleBewertungenImg} 
        alt={language === "de" ? "Kunden hinterlassen Google Bewertungen" : "Customers leaving Google reviews"}
        caption={language === "de" ? "Zufriedene Kunden sind der Schlüssel zu mehr Bewertungen" : "Satisfied customers are the key to more reviews"}
      />

      <InsightCalloutBox variant="warning" title={language === "de" ? "Vorsicht: Google-Richtlinien" : "Warning: Google Guidelines"}>
        {language === "de"
          ? "Kaufe niemals Bewertungen und biete keine Gegenleistung (Rabatte, Geschenke) für Reviews an. Google erkennt Muster und kann dein Profil bestrafen – bis hin zur Sperrung."
          : "Never buy reviews and don't offer incentives (discounts, gifts) for reviews. Google detects patterns and can penalize your profile – up to suspension."}
      </InsightCalloutBox>

      <section id="wichtigkeit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section1.title}
        </h2>
        <p className="mb-4">
          <LexikonLink term="Reviews (Bewertungen)">Google Bewertungen</LexikonLink> beeinflussen nicht nur das Vertrauen potenzieller Kunden, sondern auch dein Ranking im <LexikonLink term="Local Pack" />.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {t.section1.stats.map((item, index) => (
            <div key={index} className="bg-primary/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>{t.section1.text2}</p>
      </section>

      <section id="strategien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section2.title}
        </h2>

        <div className="space-y-6">
          {t.section2.strategies.map((strategy, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{strategy.title}</h3>
                  <p className="text-muted-foreground">{strategy.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-bewertungen-bekommen" position="intro" />

      <section id="qr-code" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section3.title}
        </h2>
        <p className="mb-4">{t.section3.text1}</p>
        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">{t.section3.stepsTitle}</h3>
          <ol className="list-decimal pl-6 space-y-2">
            {t.section3.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <p>
          <strong>{language === 'de' ? 'Tipp:' : 'Tip:'}</strong> {t.section3.tip}
        </p>
      </section>

      <section id="workflow-checklisten" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {language === "de" ? "Workflow-Checklisten zur Review-Generierung" : "Review Generation Workflow Checklists"}
        </h2>
        <p className="mb-4 text-muted-foreground">
          {language === "de"
            ? "Nutze diese interaktiven Checklisten, um deine Bewertungsstrategie systematisch aufzubauen und täglich, wöchentlich und monatlich umzusetzen. Dein Fortschritt wird automatisch gespeichert."
            : "Use these interactive checklists to systematically build and execute your review strategy daily, weekly, and monthly. Your progress is saved automatically."}
        </p>
        <ReviewWorkflowChecklist />
      </section>

      <section id="negativ" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          {t.section4.title}
        </h2>
        <p className="mb-4">{t.section4.text1}</p>
        <div className="space-y-4">
          {t.section4.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-500 font-bold text-sm">✓</span>
              </div>
              <div>
                <strong className="text-foreground">{tip.title}</strong>
                <span className="text-muted-foreground ml-1">{tip.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-destructive/5 border-l-4 border-destructive p-4 rounded-r-lg mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground">{t.section4.warning.title}</strong>
              <p className="text-muted-foreground mt-1">{t.section4.warning.text}</p>
            </div>
          </div>
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-bewertungen-bekommen" position="middle" />

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t.faq.title}
        </h2>
        <div className="space-y-6">
          {t.faq.items.map((item, index) => (
            <div key={index} className={index < t.faq.items.length - 1 ? "border-b border-border pb-4" : ""}>
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesSection 
        sources={[
          { title: "Google Business Profile Bewertungen", url: "https://support.google.com/business/answer/3474122", type: "documentation", description: language === "de" ? "Offizielle Google-Richtlinien für Bewertungen" : "Official Google guidelines for reviews" },
          { title: "Google Bewertungsrichtlinien", url: "https://support.google.com/contributionpolicy/answer/7400114", type: "documentation", description: language === "de" ? "Was bei Reviews erlaubt ist und was nicht" : "What is and isn't allowed in reviews" },
          { title: "BrightLocal Consumer Review Survey", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study", description: language === "de" ? "Aktuelle Studie zum Bewertungsverhalten" : "Current study on review behavior" },
          { title: "MOZ Review Management Guide", url: "https://moz.com/learn/seo/review-management", type: "article", description: language === "de" ? "Leitfaden zum Bewertungsmanagement" : "Guide to review management" }
        ]}
      />

      <ReviewAcquisitionScripts
        title="Bewertungs-Scripts: Alle Branchen & Kanaele"
        description="Kopierfertige Texte fuer E-Mail, SMS, WhatsApp, Vor-Ort-Gespraeche und mehr. Waehle deine Branche und deinen Kanal."
      />

      <ReviewEmailTemplates
        title="E-Mail-Vorlagen: Bewertungen professionell anfragen"
        description="Kopierfertige E-Mail-Templates mit Betreffzeile und Textkoerper. Waehle Branche und Zeitpunkt – anpassen und versenden."
      />

      <SmsReviewTemplates
        title="SMS-Vorlagen: Bewertungen per Kurznachricht"
        description="SMS haben 98% Oeffnungsrate – der effektivste Kanal fuer Bewertungsanfragen. Kopierfertig mit Zeichenzaehler."
      />

      <ReputationManagementStrategy
        title="Reputation Management: Dein 5-Phasen-Framework"
        description="Von der Praevention bis zum Wachstum – so baust du systematisch eine starke Online-Reputation auf."
      />

      <HelpfulnessWidget articleSlug="google-bewertungen-bekommen" />

      <LeadGenerationCTA articleSlug="google-bewertungen-bekommen" position="end" variant="compact" />
    </ArticleLayout>
  );
};

export default GoogleBewertungen;
