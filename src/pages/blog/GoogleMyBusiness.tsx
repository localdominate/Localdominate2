import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
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
import { CheckCircle, Settings, Image, MessageSquare, BarChart3, Lightbulb } from "lucide-react";
import googleMyBusinessImg from "@/assets/blog/google-my-business.jpg";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";

const GoogleMyBusiness = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-my-business-optimieren", language)!;

  const content = {
    de: {
      tocItems: [
        { id: "grundlagen", title: "Wie richtest du dein Google Business Profil ein?" },
        { id: "vollstaendigkeit", title: "Wie maximierst du die Profil-Vollständigkeit?" },
        { id: "kategorien", title: "Wie wählst du die richtigen Kategorien?" },
        { id: "posts", title: "Wie nutzt du Google Posts strategisch?" },
        { id: "insights", title: "Was verraten dir die Google Business Insights?" },
        { id: "faq", title: "Häufig gestellte Fragen" },
      ],
      intro: "Dein <strong>Google Business Profil</strong> (früher Google My Business) ist das Schaufenster deines Unternehmens in der Google-Suche. Ein vollständig optimiertes Profil kann deine lokale Sichtbarkeit um bis zu 70% steigern. Diese Anleitung zeigt dir jeden Schritt.",
      section1: {
        title: "Wie richtest du dein Google Business Profil ein?",
        text: "Falls du noch kein Google Business Profil hast, ist der erste Schritt die Erstellung und Verifizierung.",
        stepsTitle: "Schritt-für-Schritt Erstellung:",
        steps: [
          "Gehe zu business.google.com",
          "Klicke auf \"Jetzt verwalten\"",
          "Suche nach deinem Unternehmen oder erstelle ein neues",
          "Fülle alle Grundinformationen aus",
          "Wähle eine Verifizierungsmethode (meist Postkarte)",
          "Warte auf den Verifizierungscode (5-14 Tage)",
          "Gib den Code ein und dein Profil ist live"
        ],
        tip: "Bei einigen Unternehmen ist auch eine Video-Verifizierung möglich. Das geht schneller als der Postweg."
      },
      section2: {
        title: "Wie maximierst du die Profil-Vollständigkeit?",
        text: "Google bevorzugt vollständige Profile. Je mehr Informationen du bereitstellst, desto besser dein Ranking.",
        items: [
          { title: "Unternehmensbeschreibung", desc: "750 Zeichen nutzen. Keywords natürlich einbauen. Beschreibe was dich einzigartig macht.", status: "Pflicht" },
          { title: "Öffnungszeiten", desc: "Reguläre Zeiten + Sonderzeiten für Feiertage. Wird regelmäßig von Google abgefragt.", status: "Pflicht" },
          { title: "Kontaktdaten", desc: "Telefon, Website, E-Mail. Nutze die lokale Telefonnummer, nicht 0800.", status: "Pflicht" },
          { title: "Dienstleistungen/Produkte", desc: "Liste alle Angebote mit Preisen und Beschreibungen.", status: "Wichtig" },
          { title: "Attribute", desc: "Rollstuhlgerecht, WLAN, Parkplätze etc. Jedes zutreffende Attribut hinzufügen.", status: "Wichtig" },
          { title: "Fragen & Antworten", desc: "Beantworte häufige Fragen proaktiv selbst.", status: "Empfohlen" },
        ]
      },
      section3: {
        title: "Wie wählst du die richtigen Kategorien?",
        text: "Die Kategorie-Auswahl bestimmt, für welche Suchanfragen du erscheinst. Wähle sorgfältig!",
        main: "Hauptkategorie",
        mainText: "Wähle die Kategorie, die dein Kerngeschäft am besten beschreibt. Beispiel: \"Zahnarzt\" statt \"Gesundheitswesen\".",
        secondary: "Nebenkategorien",
        secondaryText: "Du kannst bis zu 9 weitere Kategorien hinzufügen. Nutze nur relevante Kategorien, die du auch anbietest.",
        example: "Beispiel: Bäckerei",
        exampleMain: "Hauptkategorie:",
        exampleMainVal: "Bäckerei",
        exampleSec: "Nebenkategorien:",
        exampleSecVal: "Café, Konditorei, Frühstücksrestaurant"
      },
      section4: {
        title: "Wie nutzt du Google Posts strategisch?",
        text: "Google Posts sind wie Social Media Posts, die direkt in deinem Google Profil erscheinen. Sie zeigen Aktivität und können Klicks generieren.",
        types: [
          { title: "Updates", desc: "Neuigkeiten, Änderungen, allgemeine Infos" },
          { title: "Angebote", desc: "Rabatte, Aktionen mit Start- und Enddatum" },
          { title: "Events", desc: "Veranstaltungen mit Datum und Uhrzeit" },
          { title: "Produkte", desc: "Neue Produkte oder Dienstleistungen vorstellen" },
        ],
        bestPractices: "Best Practices für Posts",
        tips: [
          "Poste mindestens 1x pro Woche",
          "Nutze immer ein ansprechendes Bild (1200x900 px)",
          "Füge einen Call-to-Action Button hinzu",
          "Halte den Text kurz (150-300 Zeichen)",
          "Verlinke auf deine Website oder Buchungsseite"
        ]
      },
      section5: {
        title: "Was verraten dir die Google Business Insights?",
        text: "Google liefert wertvolle Daten darüber, wie Kunden mit deinem Profil interagieren. Nutze diese für Optimierungen.",
        items: [
          { title: "Suchanfragen", desc: "Zeigt, mit welchen Keywords Kunden dich finden. Nutze beliebte Begriffe in deiner Beschreibung und Posts." },
          { title: "Kundenaktionen", desc: "Website-Klicks, Anrufe, Routenanfragen. Zeigt, welche Aktionen Kunden am häufigsten durchführen." },
          { title: "Foto-Aufrufe", desc: "Vergleiche mit ähnlichen Unternehmen. Mehr Fotos = mehr Engagement." },
        ]
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Ist Google Business Profil kostenlos?", a: "Ja, die Erstellung und Nutzung des Profils ist komplett kostenlos. Du bezahlst nur, wenn du Google Ads schaltest." },
          { q: "Kann ich mehrere Standorte verwalten?", a: "Ja, mit einem Account kannst du mehrere Standorte verwalten. Jeder Standort braucht aber ein eigenes, verifiziertes Profil." },
          { q: "Wie oft sollte ich mein Profil aktualisieren?", a: "Mindestens monatlich neue Fotos und Posts. Öffnungszeiten und Infos sofort aktualisieren, wenn sich etwas ändert." },
          { q: "Was tun, wenn jemand falsche Infos meldet?", a: "Prüfe regelmäßig dein Profil auf \"Vorgeschlagene Änderungen\". Du kannst gemeldete Änderungen ablehnen oder den Support kontaktieren." },
        ]
      }
    },
    en: {
      tocItems: [
        { id: "grundlagen", title: "How Do You Set Up Your Google Business Profile?" },
        { id: "vollstaendigkeit", title: "How Do You Maximize Profile Completeness?" },
        { id: "kategorien", title: "How Do You Choose the Right Categories?" },
        { id: "posts", title: "How Do You Use Google Posts Strategically?" },
        { id: "insights", title: "What Do Google Business Insights Reveal?" },
        { id: "faq", title: "Frequently Asked Questions" },
      ],
      intro: "Your <strong>Google Business Profile</strong> (formerly Google My Business) is your business's storefront in Google Search. A fully optimized profile can increase your local visibility by up to 70%. This guide shows you every step.",
      section1: {
        title: "Basics: Setting Up and Verifying Your Profile",
        text: "If you don't have a Google Business Profile yet, the first step is creation and verification.",
        stepsTitle: "Step-by-Step Creation:",
        steps: [
          "Go to business.google.com",
          "Click on \"Manage now\"",
          "Search for your business or create a new one",
          "Fill in all basic information",
          "Choose a verification method (usually postcard)",
          "Wait for the verification code (5-14 days)",
          "Enter the code and your profile is live"
        ],
        tip: "Some businesses can also use video verification. This is faster than postal mail."
      },
      section2: {
        title: "Maximizing Profile Completeness",
        text: "Google favors complete profiles. The more information you provide, the better your ranking.",
        items: [
          { title: "Business Description", desc: "Use 750 characters. Include keywords naturally. Describe what makes you unique.", status: "Required" },
          { title: "Business Hours", desc: "Regular hours + special hours for holidays. Google regularly checks this.", status: "Required" },
          { title: "Contact Information", desc: "Phone, website, email. Use a local phone number, not toll-free.", status: "Required" },
          { title: "Services/Products", desc: "List all offerings with prices and descriptions.", status: "Important" },
          { title: "Attributes", desc: "Wheelchair accessible, WiFi, parking, etc. Add every applicable attribute.", status: "Important" },
          { title: "Q&A", desc: "Proactively answer frequently asked questions yourself.", status: "Recommended" },
        ]
      },
      section3: {
        title: "Choosing the Right Categories",
        text: "Category selection determines which search queries you appear for. Choose carefully!",
        main: "Primary Category",
        mainText: "Choose the category that best describes your core business. Example: \"Dentist\" instead of \"Healthcare\".",
        secondary: "Secondary Categories",
        secondaryText: "You can add up to 9 additional categories. Only use relevant categories that you actually offer.",
        example: "Example: Bakery",
        exampleMain: "Primary Category:",
        exampleMainVal: "Bakery",
        exampleSec: "Secondary Categories:",
        exampleSecVal: "Café, Pastry Shop, Breakfast Restaurant"
      },
      section4: {
        title: "Using Google Posts Strategically",
        text: "Google Posts are like social media posts that appear directly in your Google Profile. They show activity and can generate clicks.",
        types: [
          { title: "Updates", desc: "News, changes, general information" },
          { title: "Offers", desc: "Discounts, promotions with start and end dates" },
          { title: "Events", desc: "Events with date and time" },
          { title: "Products", desc: "Introduce new products or services" },
        ],
        bestPractices: "Best Practices for Posts",
        tips: [
          "Post at least once a week",
          "Always use an appealing image (1200x900 px)",
          "Add a call-to-action button",
          "Keep the text short (150-300 characters)",
          "Link to your website or booking page"
        ]
      },
      section5: {
        title: "Understanding and Using Insights",
        text: "Google provides valuable data about how customers interact with your profile. Use this for optimization.",
        items: [
          { title: "Search Queries", desc: "Shows which keywords customers use to find you. Use popular terms in your description and posts." },
          { title: "Customer Actions", desc: "Website clicks, calls, direction requests. Shows which actions customers perform most often." },
          { title: "Photo Views", desc: "Compare with similar businesses. More photos = more engagement." },
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Is Google Business Profile free?", a: "Yes, creating and using the profile is completely free. You only pay if you run Google Ads." },
          { q: "Can I manage multiple locations?", a: "Yes, you can manage multiple locations with one account. However, each location needs its own verified profile." },
          { q: "How often should I update my profile?", a: "At least monthly new photos and posts. Update hours and info immediately when something changes." },
          { q: "What to do when someone reports false info?", a: "Regularly check your profile for \"Suggested edits\". You can reject reported changes or contact support." },
        ]
      }
    }
  };

  const t = content[language];
  const postIcons = [Image, MessageSquare, CheckCircle, BarChart3];

  const faqItems = t.faq.items.map(item => ({ question: item.q, answer: item.a }));

  // HowTo Schema für Google Business Profil Optimierung
  const howToSchema = {
    "@type": "HowTo",
    "name": language === "de" 
      ? "Google Business Profil optimieren - Schritt für Schritt Anleitung"
      : "Optimize Google Business Profile - Step by Step Guide",
    "description": language === "de"
      ? "Vollständige Anleitung zur Optimierung deines Google Business Profils für bessere lokale Sichtbarkeit."
      : "Complete guide to optimizing your Google Business Profile for better local visibility.",
    "totalTime": "PT1H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Profil erstellen und verifizieren" : "Create and verify profile",
        "text": language === "de" 
          ? "Gehe zu business.google.com, erstelle dein Profil und verifiziere es per Postkarte oder Video."
          : "Go to business.google.com, create your profile and verify it via postcard or video.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Alle Informationen ausfüllen" : "Complete all information",
        "text": language === "de"
          ? "Fülle alle Felder aus: Beschreibung (750 Zeichen), Öffnungszeiten, Kontaktdaten, Attribute."
          : "Fill in all fields: description (750 characters), business hours, contact info, attributes.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Kategorien wählen" : "Choose categories",
        "text": language === "de"
          ? "Wähle eine präzise Hauptkategorie und bis zu 9 relevante Nebenkategorien."
          : "Choose a precise primary category and up to 9 relevant secondary categories.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Fotos hochladen" : "Upload photos",
        "text": language === "de"
          ? "Lade hochwertige Fotos hoch: Logo, Titelbild, Innenansichten, Team, Produkte."
          : "Upload high-quality photos: logo, cover image, interior views, team, products.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": language === "de" ? "Google Posts nutzen" : "Use Google Posts",
        "text": language === "de"
          ? "Veröffentliche regelmäßig Posts mit Neuigkeiten, Angeboten und Events."
          : "Regularly publish posts with news, offers and events.",
        "position": 5
      }
    ]
  };

  return (
    <ArticleLayout article={article} tocItems={t.tocItems} faqItems={faqItems} additionalSchema={howToSchema}>
      <TableOfContents items={t.tocItems} />

      <p className="text-xl leading-relaxed mb-4">
        Dein <LexikonLink term="Google Business Profile" /> (früher Google My Business) ist das Schaufenster deines Unternehmens in der Google-Suche. Ein vollständig optimiertes Profil kann deine lokale Sichtbarkeit im <LexikonLink term="Local Pack" /> um bis zu 70% steigern. Diese Anleitung zeigt dir jeden Schritt.
      </p>

      <p data-featured-snippet="true" data-speakable="true">
        <strong>Google Business Profil optimieren</strong> umfasst die vollständige Ausfüllung aller Profilfelder, die strategische Wahl der Geschäftskategorien, das regelmäßige Hochladen hochwertiger Fotos und die aktive Nutzung von Google Posts. Vollständig optimierte Profile erhalten 2,7-mal mehr Vertrauen und 70 % mehr Klicks als unvollständige Profile. Das Google Business Profil ist mit 36 % der wichtigste einzelne Ranking-Faktor für das Local Pack.
      </p>

      <KeyTakeawaysBox 
        items={language === "de" ? [
          "Profil einrichten und schnell verifizieren lassen",
          "100% Profil-Vollständigkeit für maximale Sichtbarkeit",
          "Kategorien strategisch wählen für mehr Relevanz",
          "Google Posts effektiv nutzen für Engagement",
          "Insights analysieren und optimieren"
        ] : [
          "Set up your profile and get verified quickly",
          "100% profile completeness for maximum visibility",
          "Choose categories strategically for more relevance",
          "Use Google Posts effectively for engagement",
          "Analyze and optimize insights"
        ]}
      />

      <BlogImage 
        src={googleMyBusinessImg} 
        alt={language === "de" ? "Google Business Profil Dashboard" : "Google Business Profile Dashboard"}
        caption={language === "de" ? "Das Google Business Profil ist dein Schaufenster in der Google-Suche" : "Your Google Business Profile is your storefront in Google Search"}
      />

      <section id="grundlagen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section1.title}</h2>
        <p className="mb-4">{t.section1.text}</p>
        
        <div className="bg-muted/50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">{t.section1.stepsTitle}</h3>
          <ol className="list-decimal pl-6 space-y-2">
            {t.section1.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        <InsightCalloutBox variant="pro-tip" title={language === "de" ? "Pro-Tipp: Schnellere Verifizierung" : "Pro Tip: Faster Verification"}>
          {t.section1.tip}
        </InsightCalloutBox>
      </section>

      <section id="vollstaendigkeit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section2.title}</h2>
        <p className="mb-4">{t.section2.text}</p>

        <div className="space-y-4">
          {t.section2.items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="text-foreground">{item.title}</strong>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.status === "Pflicht" || item.status === "Required"
                      ? "bg-destructive/10 text-destructive" 
                      : item.status === "Wichtig" || item.status === "Important"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-my-business-optimieren" position="middle" />

      <section id="kategorien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section3.title}</h2>
        <p className="mb-4">{t.section3.text}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.main}</h3>
        <p className="mb-4">{t.section3.mainText}</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section3.secondary}</h3>
        <p className="mb-4">{t.section3.secondaryText}</p>

        <div className="bg-muted/50 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            {t.section3.example}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">{t.section3.exampleMain}</span>
              <span className="text-muted-foreground">{t.section3.exampleMainVal}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-medium">{t.section3.exampleSec}</span>
              <span className="text-muted-foreground">{t.section3.exampleSecVal}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="posts" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section4.title}</h2>
        <p className="mb-4">{t.section4.text}</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {t.section4.types.map((type, index) => {
            const Icon = postIcons[index];
            return (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">{type.title}</strong>
                  <p className="text-sm text-muted-foreground mt-1">{type.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">{t.section4.bestPractices}</h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.section4.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>

      <section id="insights" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.section5.title}</h2>
        <p className="mb-4">{t.section5.text}</p>

        <div className="space-y-4">
          {t.section5.items.map((item, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t.faq.title}</h2>
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
          { title: "Google Business Profile Hilfe", url: "https://support.google.com/business", type: "documentation", description: language === "de" ? "Offizielle Google-Dokumentation" : "Official Google documentation" },
          { title: "GBP Richtlinien", url: "https://support.google.com/business/answer/3038177", type: "documentation", description: language === "de" ? "Richtlinien für die Darstellung deines Unternehmens" : "Guidelines for representing your business" },
          { title: "Google Posts Best Practices", url: "https://support.google.com/business/answer/7662907", type: "documentation", description: language === "de" ? "So nutzt du Google Posts optimal" : "How to use Google Posts optimally" },
          { title: "Schema.org LocalBusiness", url: "https://schema.org/LocalBusiness", type: "documentation", description: language === "de" ? "Strukturierte Daten für lokale Unternehmen" : "Structured data for local businesses" }
        ]}
      />

      <HelpfulnessWidget articleSlug="google-my-business-optimieren" />

      <LeadGenerationCTA articleSlug="google-my-business-optimieren" position="end" variant="full" />
    </ArticleLayout>
  );
};

export default GoogleMyBusiness;
