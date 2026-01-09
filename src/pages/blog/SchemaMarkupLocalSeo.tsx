import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { useLanguage } from "@/i18n/LanguageContext";
import LocalBusinessSchemaGenerator from "@/components/blog/LocalBusinessSchemaGenerator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, AlertTriangle, Star, Clock, MapPin, Phone, Globe, FileCode, TestTube, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SchemaMarkupLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("schema-markup-local-seo", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "was-ist-schema", title: "Was ist Schema Markup?" },
    { id: "local-business", title: "LocalBusiness Schema" },
    { id: "oeffnungszeiten", title: "Öffnungszeiten & Service-Areas" },
    { id: "faq-schema", title: "FAQ Schema" },
    { id: "review-schema", title: "Review Schema" },
    { id: "product-service", title: "Product & Service Schema" },
    { id: "event-schema", title: "Event Schema" },
    { id: "implementierung", title: "Implementierung" },
    { id: "testing", title: "Testing & Debugging" },
    { id: "generator", title: "Schema Generator" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Person",
      "name": "Local SEO Experte"
    }
  };

  return (
    <ArticleLayout article={article} tocItems={tocItems} additionalSchema={localBusinessSchema}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        Schema Markup ist der <strong>unsichtbare Turbo für Ihre lokale Sichtbarkeit</strong>. 
        Während Ihre Konkurrenz mit einfachen Suchergebnissen kämpft, können Sie mit 
        strukturierten Daten Rich Snippets, Sternebewertungen und erweiterte Suchergebnisse 
        erhalten. In diesem umfassenden Guide erfahren Sie alles über Schema Markup für 
        lokale Unternehmen – mit Code-Beispielen, die Sie sofort kopieren können.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Was Sie in diesem Guide lernen
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Alle Schema-Typen für lokale Unternehmen verstehen und anwenden</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Copy-Paste Code-Beispiele für Ihre Website</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Schema richtig testen und Fehler beheben</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Interaktiver Schema Generator für Ihr Unternehmen</span>
          </li>
        </ul>
      </div>

      <BlogCTAABTest articleSlug="schema-markup-local-seo" position="intro" />

      {/* Was ist Schema Markup */}
      <section id="was-ist-schema" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Was ist Schema Markup und warum ist es wichtig?</h2>
        
        <p className="mb-6">
          <strong>Schema Markup</strong> (auch strukturierte Daten genannt) ist ein semantisches 
          Vokabular, das Suchmaschinen hilft, den Inhalt Ihrer Website besser zu verstehen. 
          Stellen Sie sich Schema als eine Art "Übersetzer" vor: Während Menschen verstehen, 
          dass "Mo-Fr 9-18 Uhr" Öffnungszeiten bedeutet, braucht Google diese Information in 
          einem standardisierten Format.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Ohne Schema Markup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Google muss raten, was Ihre Inhalte bedeuten:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Einfaches Suchergebnis ohne Extras</li>
                <li>• Keine Sterne, keine Preise</li>
                <li>• Niedrigere Klickrate (CTR)</li>
                <li>• Weniger Vertrauen bei Suchenden</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Mit Schema Markup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Google versteht Ihre Daten perfekt:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Rich Snippets mit Sternen ⭐⭐⭐⭐⭐</li>
                <li>• Preise, Öffnungszeiten direkt sichtbar</li>
                <li>• Bis zu 30% höhere Klickrate</li>
                <li>• Mehr Vertrauen und Autorität</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">Schema.org – Der Standard</h3>
        
        <p className="mb-4">
          <strong>Schema.org</strong> wurde 2011 von Google, Microsoft, Yahoo und Yandex gegründet. 
          Es definiert über 800 verschiedene Typen von strukturierten Daten. Für lokale 
          Unternehmen sind besonders relevant:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { name: "LocalBusiness", desc: "Basis für alle lokalen Unternehmen" },
            { name: "Restaurant", desc: "Gastronomie mit Speisekarten" },
            { name: "Store", desc: "Einzelhandel mit Produkten" },
            { name: "MedicalBusiness", desc: "Ärzte, Kliniken, Praxen" },
            { name: "LegalService", desc: "Anwälte, Rechtsberatung" },
            { name: "HomeAndConstructionBusiness", desc: "Handwerker, Bau" },
          ].map((type) => (
            <div key={type.name} className="bg-muted/50 p-4 rounded-lg">
              <p className="font-mono text-sm font-semibold text-primary">{type.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{type.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Die drei Formate: JSON-LD, Microdata, RDFa</h3>

        <p className="mb-4">
          Schema Markup kann in drei verschiedenen Formaten implementiert werden:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Format</th>
                <th className="border p-3 text-left">Empfohlen</th>
                <th className="border p-3 text-left">Vorteile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-mono text-sm">JSON-LD</td>
                <td className="border p-3 text-center">✅ Ja</td>
                <td className="border p-3 text-sm">Einfach zu implementieren, von Google bevorzugt</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">Microdata</td>
                <td className="border p-3 text-center">⚠️ Möglich</td>
                <td className="border p-3 text-sm">Im HTML eingebettet, komplexer</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">RDFa</td>
                <td className="border p-3 text-center">❌ Veraltet</td>
                <td className="border p-3 text-sm">Kaum noch verwendet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Empfehlung:</strong> Verwenden Sie immer <strong>JSON-LD</strong>. 
            Google bevorzugt dieses Format, es ist einfacher zu implementieren und verursacht 
            keine Probleme mit dem HTML-Code Ihrer Seite.
          </p>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <section id="local-business" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">LocalBusiness Schema: Das Fundament</h2>
        
        <p className="mb-6">
          Das <strong>LocalBusiness Schema</strong> ist die Basis für alle lokalen Unternehmen. 
          Es enthält alle grundlegenden Informationen, die Google über Ihr Geschäft wissen muss: 
          Name, Adresse, Telefon, Öffnungszeiten und mehr.
        </p>

        <h3 className="text-xl font-semibold mb-4">Vollständiges LocalBusiness Beispiel</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bäckerei Müller",
  "image": "https://example.com/photos/baeckerei-front.jpg",
  "url": "https://www.baeckerei-mueller.de",
  "@id": "https://www.baeckerei-mueller.de/#organization",
  "telephone": "+49 89 12345678",
  "email": "info@baeckerei-mueller.de",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstraße 25",
    "addressLocality": "München",
    "postalCode": "80331",
    "addressRegion": "BY",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1351,
    "longitude": 11.5820
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/baeckereimueller",
    "https://www.instagram.com/baeckereimueller"
  ]
}
</script>`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Pflichtfelder vs. empfohlene Felder</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Pflichtfelder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <code>@type</code> – Art des Unternehmens
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <code>name</code> – Firmenname
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <code>address</code> – Vollständige Adresse
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Stark empfohlen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <code>telephone</code> – Rufnummer
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <code>openingHoursSpecification</code>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <code>geo</code> – Koordinaten
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <code>url</code>, <code>image</code>, <code>sameAs</code>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">Spezifische Business-Typen verwenden</h3>

        <p className="mb-4">
          Je spezifischer der <code>@type</code>, desto besser versteht Google Ihr Geschäft. 
          Hier die wichtigsten Untertypen von LocalBusiness:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-3 text-left">Branche</th>
                <th className="border p-3 text-left">Schema-Typ</th>
                <th className="border p-3 text-left">Besondere Felder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Restaurant</td>
                <td className="border p-3 font-mono">Restaurant</td>
                <td className="border p-3">servesCuisine, menu, acceptsReservations</td>
              </tr>
              <tr>
                <td className="border p-3">Café/Bar</td>
                <td className="border p-3 font-mono">CafeOrCoffeeShop / BarOrPub</td>
                <td className="border p-3">menu, servesCuisine</td>
              </tr>
              <tr>
                <td className="border p-3">Friseur</td>
                <td className="border p-3 font-mono">HairSalon</td>
                <td className="border p-3">priceRange, hasOfferCatalog</td>
              </tr>
              <tr>
                <td className="border p-3">Arzt</td>
                <td className="border p-3 font-mono">Physician</td>
                <td className="border p-3">medicalSpecialty, availableService</td>
              </tr>
              <tr>
                <td className="border p-3">Zahnarzt</td>
                <td className="border p-3 font-mono">Dentist</td>
                <td className="border p-3">medicalSpecialty, availableService</td>
              </tr>
              <tr>
                <td className="border p-3">Anwalt</td>
                <td className="border p-3 font-mono">Attorney</td>
                <td className="border p-3">areaServed, knowsAbout</td>
              </tr>
              <tr>
                <td className="border p-3">Handwerker</td>
                <td className="border p-3 font-mono">HomeAndConstructionBusiness</td>
                <td className="border p-3">areaServed, hasOfferCatalog</td>
              </tr>
              <tr>
                <td className="border p-3">Fitnessstudio</td>
                <td className="border p-3 font-mono">SportsActivityLocation</td>
                <td className="border p-3">amenityFeature, audience</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Restaurant-spezifisches Beispiel</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Trattoria Bella Italia",
  "servesCuisine": ["Italian", "Mediterranean"],
  "menu": "https://trattoria-bella.de/speisekarte",
  "acceptsReservations": "True",
  "hasMenu": {
    "@type": "Menu",
    "name": "Hauptmenü",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Antipasti",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Bruschetta",
            "description": "Geröstetes Brot mit Tomaten und Basilikum",
            "offers": {
              "@type": "Offer",
              "price": "8.50",
              "priceCurrency": "EUR"
            }
          }
        ]
      }
    ]
  }
  // ... weitere Standard-Felder
}`}</pre>
        </div>
      </section>

      {/* Öffnungszeiten & Service-Areas */}
      <section id="oeffnungszeiten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Öffnungszeiten & Service-Gebiete richtig definieren</h2>

        <h3 className="text-xl font-semibold mb-4">OpeningHoursSpecification im Detail</h3>

        <p className="mb-4">
          Öffnungszeiten sind für lokale Unternehmen kritisch. Google zeigt diese direkt 
          in den Suchergebnissen und im Maps Local Pack an. Hier alle Möglichkeiten:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"openingHoursSpecification": [
  // Reguläre Wochentage
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  // Samstag andere Zeiten
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "10:00",
    "closes": "14:00"
  },
  // Mittagspause (zweite Öffnungszeit am Tag)
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "14:00",
    "closes": "18:00"
  }
]`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Sonderöffnungszeiten für Feiertage</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"specialOpeningHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2025-12-24",
    "validThrough": "2025-12-24",
    "opens": "09:00",
    "closes": "14:00",
    "description": "Heiligabend"
  },
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2025-12-25",
    "validThrough": "2025-12-26",
    "opens": "00:00",
    "closes": "00:00",
    "description": "Geschlossen an Weihnachten"
  }
]`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Service-Gebiete (areaServed)</h3>

        <p className="mb-4">
          Für mobile Dienstleister wie Handwerker, Lieferdienste oder Hausbesuche ist 
          <code>areaServed</code> entscheidend:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"areaServed": [
  {
    "@type": "City",
    "name": "München"
  },
  {
    "@type": "City", 
    "name": "Freising"
  },
  {
    "@type": "AdministrativeArea",
    "name": "Landkreis München"
  },
  {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "geoRadius": "30000"  // 30km Umkreis
  }
]`}</pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>⚠️ Wichtig:</strong> Wenn Sie ein Einzugsgebiet definieren, sollten Sie 
            auch <code>hasMap</code> mit einem Link zu Ihrer Google Maps Einbettung hinzufügen. 
            Dies verstärkt die geografische Relevanz.
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="schema-markup-local-seo" position="middle" />

      {/* FAQ Schema */}
      <section id="faq-schema" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">FAQ Schema für lokale Seiten</h2>

        <p className="mb-6">
          Das <strong>FAQPage Schema</strong> ist Gold wert für lokale SEO. Es ermöglicht 
          Rich Snippets mit erweiterten FAQ-Einträgen direkt in den Suchergebnissen – 
          mehr Platz, mehr Klicks, mehr Kunden.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold mb-3">Vorteile von FAQ Schema:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Bis zu 50% mehr Platz in Suchergebnissen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Direkte Antworten auf Kundenfragen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Voice Search Optimierung</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Höhere Klickraten (CTR)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Ideale FAQ-Themen lokal:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• "Wo finde ich Parkplätze?"</li>
              <li>• "Bieten Sie Hausbesuche an?"</li>
              <li>• "Welche Zahlungsmethoden akzeptieren Sie?"</li>
              <li>• "Muss ich einen Termin vereinbaren?"</li>
              <li>• "Wie lange dauert die Anfahrt von [Stadt]?"</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">FAQPage Schema Beispiel</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wo kann ich in der Nähe Ihres Geschäfts parken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direkt vor unserem Geschäft in der Hauptstraße 25 befinden sich 5 kostenlose Kundenparkplätze. Zusätzlich gibt es das Parkhaus 'Altstadt' (200m entfernt) mit Parkticket-Vergünstigung bei Einkauf ab 20€."
      }
    },
    {
      "@type": "Question",
      "name": "Bieten Sie auch Hausbesuche in München an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wir bieten Hausbesuche im gesamten Stadtgebiet München sowie in den Landkreisen München, Dachau und Freising an. Die Anfahrt ist bei Aufträgen ab 100€ kostenlos. Terminvereinbarung unter 089-12345678."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Zahlungsmethoden akzeptieren Sie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir akzeptieren Barzahlung, EC-Karte, alle gängigen Kreditkarten (Visa, Mastercard, American Express) sowie PayPal und Klarna. Ratenzahlung ist ab 500€ möglich."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich einen Termin oder kann ich auch spontan vorbeikommen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für Beratungsgespräche empfehlen wir eine Terminvereinbarung. Kleine Reparaturen und Sofortservice sind ohne Termin möglich. Wartezeiten variieren je nach Tageszeit – am schnellsten geht es vormittags zwischen 9-11 Uhr."
      }
    }
  ]
}
</script>`}</pre>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm">
            <strong>💡 Pro-Tipp:</strong> Kombinieren Sie FAQPage mit LocalBusiness Schema 
            auf derselben Seite. Google kann beide Schemas gleichzeitig verarbeiten und 
            in den Suchergebnissen anzeigen.
          </p>
        </div>
      </section>

      {/* Review Schema */}
      <section id="review-schema" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Review & AggregateRating Schema</h2>

        <p className="mb-6">
          <strong>Sterne in den Suchergebnissen</strong> – nichts zieht mehr Aufmerksamkeit 
          auf sich. Mit dem richtigen Review Schema können Sie Ihre Bewertungen prominent 
          darstellen und die Klickrate drastisch erhöhen.
        </p>

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>🚨 Wichtige Warnung:</strong> Google hat strenge Richtlinien für Review 
            Schema. Selbstbewertungen oder gefälschte Bewertungen können zu manuellen 
            Maßnahmen führen. Nur echte Kundenbewertungen dürfen ausgezeichnet werden!
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">AggregateRating (Durchschnittsbewertung)</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "127",
  "reviewCount": "89"
}`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Einzelne Reviews einbinden</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Maria K."
    },
    "datePublished": "2025-01-05",
    "reviewBody": "Fantastischer Service! Die Beratung war kompetent und freundlich. Kann ich nur weiterempfehlen.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Thomas M."
    },
    "datePublished": "2025-01-02",
    "reviewBody": "Sehr zufrieden mit der Qualität. Preis-Leistung stimmt. Werde wiederkommen!",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
]`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Best Practices für Review Schema</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-600">✅ Erlaubt</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Echte Kundenbewertungen mit Datum</p>
              <p>• Bewertungen von Drittanbietern (Google, Trustpilot)</p>
              <p>• Aggregierte Bewertungen aus mehreren Quellen</p>
              <p>• Reviews mit verifiziertem Kauf</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">❌ Verboten</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>• Selbstverfasste Bewertungen</p>
              <p>• Gefälschte oder gekaufte Reviews</p>
              <p>• Reviews ohne echte Kundenerfahrung</p>
              <p>• Bewertungen nur für SEO-Zwecke</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product & Service Schema */}
      <section id="product-service" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Product & Service Schema für lokale Anbieter</h2>

        <p className="mb-6">
          Mit <strong>Product</strong> und <strong>Service</strong> Schema können Sie Ihre 
          Angebote detailliert auszeichnen. Google zeigt dann Preise, Verfügbarkeit und 
          mehr direkt in den Suchergebnissen.
        </p>

        <h3 className="text-xl font-semibold mb-4">Service Schema Beispiel</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Schlüsseldienst",
  "name": "Notfall Türöffnung",
  "description": "24/7 Türöffnung bei Aussperrung. Schnell, sauber, ohne Beschädigung.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Schlüsseldienst Schmidt"
  },
  "areaServed": {
    "@type": "City",
    "name": "München"
  },
  "offers": {
    "@type": "Offer",
    "price": "89.00",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock"
  },
  "termsOfService": "https://example.com/agb",
  "serviceOutput": "Geöffnete Tür ohne Beschädigung"
}`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">hasOfferCatalog für mehrere Services</h3>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Unsere Dienstleistungen",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Türöffnung Tag",
        "description": "Türöffnung werktags 8-20 Uhr"
      },
      "price": "89.00",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Türöffnung Nacht/Wochenende",
        "description": "Türöffnung nachts und am Wochenende"
      },
      "price": "149.00",
      "priceCurrency": "EUR"
    }
  ]
}`}</pre>
        </div>
      </section>

      {/* Event Schema */}
      <section id="event-schema" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Event Schema für lokale Veranstaltungen</h2>

        <p className="mb-6">
          Veranstalten Sie Workshops, Kurse oder Events? Mit dem <strong>Event Schema</strong> 
          erscheinen Ihre Veranstaltungen prominent in der Google-Suche und im Google 
          Events-Karussell.
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Barista-Workshop: Latte Art Kurs",
  "description": "Lernen Sie in 3 Stunden die Grundlagen der Latte Art. Inkl. Kaffeebohnen zum Mitnehmen.",
  "image": "https://example.com/events/barista-kurs.jpg",
  "startDate": "2025-02-15T14:00:00+01:00",
  "endDate": "2025-02-15T17:00:00+01:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Kaffeerösterei Müller",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kaffeestraße 12",
      "addressLocality": "München",
      "postalCode": "80331",
      "addressCountry": "DE"
    }
  },
  "offers": {
    "@type": "Offer",
    "name": "Standardticket",
    "price": "79.00",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01",
    "url": "https://example.com/events/barista-kurs/tickets"
  },
  "performer": {
    "@type": "Person",
    "name": "Max Müller, Barista-Champion 2024"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Kaffeerösterei Müller",
    "url": "https://example.com"
  }
}`}</pre>
        </div>
      </section>

      {/* Implementierung */}
      <section id="implementierung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Schema Markup richtig implementieren</h2>

        <h3 className="text-xl font-semibold mb-4">1. Wo platzieren Sie das Schema?</h3>

        <p className="mb-4">
          JSON-LD Schema gehört in den <code>&lt;head&gt;</code>-Bereich oder vor dem 
          schließenden <code>&lt;/body&gt;</code>-Tag. Beides funktioniert, aber der 
          head-Bereich ist bevorzugt.
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`<!DOCTYPE html>
<html>
<head>
  <title>Ihre Seite</title>
  <!-- Schema Markup hier -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // ... Ihr Schema
  }
  </script>
</head>
<body>
  <!-- Seiteninhalt -->
</body>
</html>`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">2. Mehrere Schemas kombinieren</h3>

        <p className="mb-4">
          Sie können mehrere Schema-Typen auf einer Seite verwenden. Entweder als 
          separate Blöcke oder als verschachteltes Schema:
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      // LocalBusiness Schema
    },
    {
      "@type": "FAQPage",
      // FAQ Schema
    },
    {
      "@type": "BreadcrumbList",
      // Breadcrumb Schema
    }
  ]
}
</script>`}</pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">3. WordPress Plugins</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Rank Math", desc: "Umfangreich, kostenlose Version verfügbar" },
            { name: "Yoast SEO", desc: "Beliebter Klassiker mit Schema-Support" },
            { name: "Schema Pro", desc: "Spezialisiert auf strukturierte Daten" },
          ].map((plugin) => (
            <Card key={plugin.name}>
              <CardContent className="pt-4">
                <p className="font-semibold">{plugin.name}</p>
                <p className="text-sm text-muted-foreground">{plugin.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testing & Debugging */}
      <section id="testing" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Schema Markup testen und debuggen</h2>

        <p className="mb-6">
          Bevor Sie Ihr Schema live schalten, <strong>müssen</strong> Sie es testen. 
          Google stellt dafür zwei wichtige Tools bereit:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-primary" />
                Rich Results Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Prüft, ob Ihr Schema für Rich Snippets qualifiziert ist.
              </p>
              <a 
                href="https://search.google.com/test/rich-results" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                → Rich Results Test öffnen
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                Schema Markup Validator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Validiert die technische Korrektheit Ihres Schemas.
              </p>
              <a 
                href="https://validator.schema.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                → Schema Validator öffnen
              </a>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4">Häufige Fehler beim Testen</h3>

        <div className="space-y-4">
          {[
            { 
              error: "Missing field 'image'", 
              solution: "Fügen Sie ein Bild-URL hinzu. Format: https://... .jpg/.png" 
            },
            { 
              error: "Invalid URL", 
              solution: "Überprüfen Sie alle URLs auf Tippfehler und https://" 
            },
            { 
              error: "Invalid date format", 
              solution: "Nutzen Sie ISO 8601: YYYY-MM-DD oder YYYY-MM-DDTHH:MM:SS+TZ" 
            },
            { 
              error: "Missing required field", 
              solution: "Prüfen Sie die Pflichtfelder für Ihren Schema-Typ" 
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-muted/50 p-4 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-sm text-red-600">{item.error}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="schema-markup-local-seo" position="middle" />

      {/* Schema Generator */}
      <section id="generator" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interaktiver LocalBusiness Schema Generator</h2>

        <p className="mb-6">
          Nutzen Sie unseren kostenlosen Schema Generator, um Ihr individuelles 
          LocalBusiness Markup zu erstellen. Füllen Sie einfach die Felder aus und 
          kopieren Sie den generierten Code auf Ihre Website.
        </p>

        <LocalBusinessSchemaGenerator />
      </section>

      {/* Häufige Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Die 10 häufigsten Schema Markup Fehler</h2>

        <div className="space-y-4">
          {[
            {
              nr: 1,
              title: "Falscher oder zu allgemeiner @type",
              desc: "Nutzen Sie den spezifischsten Typ (Restaurant statt LocalBusiness)."
            },
            {
              nr: 2,
              title: "Fehlende oder falsche Koordinaten",
              desc: "Lat/Long müssen exakt sein. Prüfen Sie mit Google Maps."
            },
            {
              nr: 3,
              title: "Inkonsistente NAP-Daten",
              desc: "Schema muss 100% mit Google Business Profil übereinstimmen."
            },
            {
              nr: 4,
              title: "Veraltete Öffnungszeiten",
              desc: "Aktualisieren Sie Schema bei jeder Änderung der Zeiten."
            },
            {
              nr: 5,
              title: "Selbst-Bewertungen im Review Schema",
              desc: "Nur echte, verifizierte Kundenbewertungen verwenden."
            },
            {
              nr: 6,
              title: "Fehlende Bilder",
              desc: "Mindestens ein Bild-URL ist für die meisten Typen erforderlich."
            },
            {
              nr: 7,
              title: "Relative statt absolute URLs",
              desc: "Immer vollständige URLs mit https:// verwenden."
            },
            {
              nr: 8,
              title: "Schema nur auf Startseite",
              desc: "Auch Unterseiten (Services, Standorte) brauchen Schema."
            },
            {
              nr: 9,
              title: "Keine @id für Entitäten",
              desc: "Fügen Sie @id hinzu für bessere Verknüpfung der Daten."
            },
            {
              nr: 10,
              title: "Schema nicht getestet",
              desc: "Immer mit Rich Results Test validieren vor dem Launch."
            },
          ].map((item) => (
            <div key={item.nr} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
              <span className="bg-red-100 dark:bg-red-900/30 text-red-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {item.nr}
              </span>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie lange dauert es, bis Schema in Google erscheint?</AccordionTrigger>
            <AccordionContent>
              Nach der Implementierung kann es 2-4 Wochen dauern, bis Google Ihr Schema 
              verarbeitet und Rich Snippets anzeigt. Nutzen Sie die Google Search Console, 
              um den Status zu überwachen. Beachten Sie, dass Google nicht garantiert, 
              Rich Results für jede Seite anzuzeigen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Beeinflusst Schema Markup direkt das Ranking?</AccordionTrigger>
            <AccordionContent>
              Schema ist kein direkter Ranking-Faktor. Allerdings verbessert es die 
              Klickrate (CTR) durch attraktivere Suchergebnisse, was indirekt zu 
              besseren Rankings führen kann. Außerdem hilft es Google, Ihre Inhalte 
              besser zu verstehen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Kann ich Schema für mehrere Standorte nutzen?</AccordionTrigger>
            <AccordionContent>
              Ja! Für jeden Standort erstellen Sie eine eigene Seite mit individuellem 
              LocalBusiness Schema. Wichtig: Jeder Standort braucht einen einzigartigen 
              @id-Wert. Sie können die Standorte zusätzlich mit einem übergeordneten 
              Organization-Schema verknüpfen.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Muss Schema mit Google Business übereinstimmen?</AccordionTrigger>
            <AccordionContent>
              Unbedingt! Inkonsistenzen zwischen Schema Markup und Google Business Profil 
              können Vertrauensprobleme verursachen. Name, Adresse, Telefonnummer und 
              Öffnungszeiten müssen exakt übereinstimmen. Google nutzt beide Quellen zur 
              Verifizierung.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Wie viele Schema-Typen kann ich kombinieren?</AccordionTrigger>
            <AccordionContent>
              Es gibt keine feste Grenze. Sinnvoll ist die Kombination von LocalBusiness 
              mit FAQPage, BreadcrumbList und ggf. Service oder Event Schema. Achten Sie 
              darauf, dass alle Schemas valide sind und der Seiteninhalt die ausgezeichneten 
              Informationen tatsächlich enthält.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Was ist der Unterschied zwischen JSON-LD und Microdata?</AccordionTrigger>
            <AccordionContent>
              JSON-LD wird als separater Script-Block eingefügt und ist unabhängig vom 
              HTML. Microdata wird direkt in HTML-Elemente eingebettet (mit itemscope, 
              itemtype, itemprop). Google bevorzugt JSON-LD, da es einfacher zu 
              implementieren und zu warten ist.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Kann Schema auf dynamischen Seiten verwendet werden?</AccordionTrigger>
            <AccordionContent>
              Ja, aber stellen Sie sicher, dass das Schema beim Server-Side Rendering 
              oder nach dem JavaScript-Laden im HTML-DOM vorhanden ist. Google kann 
              JavaScript-generiertes Schema lesen, aber statisches HTML ist zuverlässiger.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Fazit: Schema Markup ist unverzichtbar</h2>

        <p className="mb-4">
          Schema Markup ist keine optionale Spielerei, sondern ein <strong>Muss für 
          jedes lokale Unternehmen</strong>, das online gefunden werden will. Die 
          Investition in saubere strukturierte Daten zahlt sich durch höhere Klickraten, 
          bessere Sichtbarkeit und mehr qualifizierte Kunden aus.
        </p>

        <p className="mb-6">
          Beginnen Sie mit dem <strong>LocalBusiness Schema</strong> als Basis, fügen Sie 
          dann FAQPage und eventuell Review Schema hinzu. Testen Sie regelmäßig mit dem 
          Rich Results Test und halten Sie Ihre Daten aktuell.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-3">Ihre nächsten Schritte:</h3>
          <ol className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
              <span>Nutzen Sie den Schema Generator oben für Ihr LocalBusiness Schema</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
              <span>Testen Sie das Schema mit dem Rich Results Test</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
              <span>Implementieren Sie es im &lt;head&gt; Ihrer Website</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
              <span>Überwachen Sie die Ergebnisse in der Search Console</span>
            </li>
          </ol>
        </div>
      </section>

      <HelpfulnessWidget articleSlug="schema-markup-local-seo" />
    </ArticleLayout>
  );
};

export default SchemaMarkupLocalSeo;
