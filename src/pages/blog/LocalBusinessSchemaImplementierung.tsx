import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import LexikonLink from "@/components/blog/LexikonLink";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Code, MapPin, Clock, Phone, Globe, Star, CheckCircle2, AlertTriangle,
  FileCode, Copy, ArrowRight, Building2, Utensils, Stethoscope, Wrench,
  Scale, Scissors, ShoppingBag, Dumbbell, BookOpen, TestTube, Zap
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LocalBusinessSchemaImplementierung = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("localbusiness-schema-implementierung", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "was-ist-localbusiness", title: "Was ist LocalBusiness Schema?" },
    { id: "warum-wichtig", title: "Warum ist es wichtig?" },
    { id: "grundstruktur", title: "JSON-LD Grundstruktur" },
    { id: "branchen-typen", title: "Branchen-spezifische Typen" },
    { id: "oeffnungszeiten", title: "Öffnungszeiten & Sondertage" },
    { id: "geo-coordinates", title: "Geo-Koordinaten & Service Area" },
    { id: "bewertungen", title: "AggregateRating einbinden" },
    { id: "erweitert", title: "Erweiterte Properties" },
    { id: "mehrere-standorte", title: "Mehrere Standorte" },
    { id: "testing", title: "Testen & Validieren" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was ist LocalBusiness Schema Markup?", answer: "LocalBusiness Schema Markup ist ein strukturiertes Datenformat (JSON-LD), das Google hilft, Ihre Geschäftsinformationen wie Name, Adresse, Telefonnummer, Öffnungszeiten und Bewertungen korrekt zu verstehen. Es ermöglicht erweiterte Suchergebnisse (Rich Snippets) mit Sternen, Öffnungszeiten und Karteneinträgen." },
    { question: "Welches Format sollte ich für Schema Markup verwenden?", answer: "Google empfiehlt JSON-LD (JavaScript Object Notation for Linked Data). Es wird im <script>-Tag im Head oder Body der Seite eingebettet, ohne den sichtbaren HTML-Code zu verändern. Alternativen wie Microdata oder RDFa sind veraltet und schwieriger zu pflegen." },
    { question: "Muss ich für jede Seite ein eigenes Schema erstellen?", answer: "Idealerweise ja. Jede Standortseite sollte ein eigenes LocalBusiness-Schema mit den spezifischen Daten (Adresse, Telefon, Öffnungszeiten) haben. Die Startseite sollte das Haupt-Schema enthalten. Blogseiten brauchen kein LocalBusiness-Schema, sondern Article-Schema." },
    { question: "Welchen @type soll ich verwenden?", answer: "Verwenden Sie den spezifischsten Typ. Statt 'LocalBusiness' nutzen Sie z.B. 'Restaurant', 'Dentist', 'Plumber', 'LegalService' oder 'BeautySalon'. Je spezifischer der Typ, desto besser versteht Google Ihr Geschäft. Alle sind Untertypen von LocalBusiness." },
    { question: "Wie füge ich Öffnungszeiten korrekt ein?", answer: "Verwenden Sie das 'openingHoursSpecification'-Property mit dem ISO 8601-Format. Jeder Tag wird einzeln oder als Gruppe definiert (Mo-Fr). Sondertage wie Feiertage werden mit 'specialOpeningHoursSpecification' angegeben." },
    { question: "Kann ich Bewertungen im Schema einfügen?", answer: "Ja, mit dem 'aggregateRating'-Property. Sie müssen den Durchschnittswert (ratingValue), die Anzahl (reviewCount) und die Skala (bestRating) angeben. Wichtig: Die Werte müssen mit echten, auf der Seite sichtbaren Bewertungen übereinstimmen." },
    { question: "Wie teste ich mein LocalBusiness Schema?", answer: "Nutzen Sie Googles Rich Results Test (search.google.com/test/rich-results) für Rich-Snippet-Fähigkeit und den Schema Markup Validator (validator.schema.org) für syntaktische Korrektheit. Testen Sie nach jeder Änderung." },
    { question: "Was sind die häufigsten Schema-Fehler?", answer: "Die häufigsten Fehler: falscher oder zu allgemeiner @type, fehlende Pflichtfelder (name, address), inkonsistente NAP-Daten (anders als im GBP), ungültige Öffnungszeiten-Formate, gefälschte aggregateRating-Werte und fehlendes @id für die Entitätsverknüpfung." },
    { question: "Hilft Schema Markup direkt beim Ranking?", answer: "Schema Markup ist kein direkter Ranking-Faktor, aber es ermöglicht Rich Snippets (Sterne, Öffnungszeiten), die die Klickrate (CTR) um 20-30% steigern können. Eine höhere CTR ist wiederum ein indirekter Ranking-Faktor. Für lokale Suchen sind die visuellen Vorteile enorm." },
    { question: "Muss das Schema mit meinem Google Business Profil übereinstimmen?", answer: "Unbedingt! Name, Adresse und Telefonnummer (NAP) im Schema müssen exakt mit Ihrem Google Business Profil übereinstimmen. Abweichungen verwirren Google und können Rankings verschlechtern. Auch Öffnungszeiten und Kategorien sollten konsistent sein." },
    { question: "Wie implementiere ich Schema für mehrere Standorte?", answer: "Jeder Standort braucht eine eigene Seite mit eigenem LocalBusiness-Schema. Auf einer Übersichtsseite können Sie alle Standorte mit @type 'Organization' und 'department' oder 'branchOf' verknüpfen. Jeder Standort erhält eine eindeutige @id." },
    { question: "Kann ich Schema Markup ohne Programmierkenntnisse hinzufügen?", answer: "Ja, mit Plugins wie Yoast SEO, Rank Math (WordPress) oder Schema-Generatoren. Sie können auch unseren Generator am Ende dieses Artikels nutzen und den Code einfach in Ihre Seite kopieren. Für individuelle Anpassungen sind Grundkenntnisse hilfreich." }
  ];

  const basicSchema = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#business",
  "name": "Muster Handwerk GmbH",
  "description": "Ihr zuverlässiger Handwerker in München für Elektro, Sanitär und Heizung.",
  "url": "https://example.com",
  "telephone": "+49-89-12345678",
  "email": "info@example.com",
  "image": "https://example.com/images/storefront.jpg",
  "logo": "https://example.com/images/logo.png",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 42",
    "addressLocality": "München",
    "addressRegion": "Bayern",
    "postalCode": "80331",
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
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "reviewCount": "127"
  },
  "sameAs": [
    "https://www.facebook.com/muster-handwerk",
    "https://www.instagram.com/musterhandwerk"
  ]
}`;

  const restaurantSchema = `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://example.com/#restaurant",
  "name": "Trattoria Bella Italia",
  "servesCuisine": ["Italian", "Mediterranean"],
  "menu": "https://example.com/speisekarte",
  "acceptsReservations": "True",
  "hasMenu": {
    "@type": "Menu",
    "hasMenuSection": {
      "@type": "MenuSection",
      "name": "Hauptgerichte",
      "hasMenuItem": {
        "@type": "MenuItem",
        "name": "Pizza Margherita",
        "offers": {
          "@type": "Offer",
          "price": "12.90",
          "priceCurrency": "EUR"
        }
      }
    }
  },
  "address": { ... },
  "openingHoursSpecification": [ ... ]
}`;

  const dentistSchema = `{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://example.com/#praxis",
  "name": "Zahnarztpraxis Dr. Schmidt",
  "medicalSpecialty": "Dentistry",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Professionelle Zahnreinigung",
      "procedureType": "https://schema.org/NoninvasiveProcedure"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Zahnimplantat"
    }
  ],
  "isAcceptingNewPatients": "True",
  "address": { ... }
}`;

  const specialHoursSchema = `"specialOpeningHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2026-12-24",
    "validThrough": "2026-12-24",
    "opens": "09:00",
    "closes": "14:00",
    "description": "Heiligabend"
  },
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2026-12-25",
    "validThrough": "2026-12-26",
    "opens": "00:00",
    "closes": "00:00",
    "description": "Weihnachten (geschlossen)"
  }
]`;

  const serviceAreaSchema = `"areaServed": [
  {
    "@type": "City",
    "name": "München"
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
    "geoRadius": "30000"
  }
]`;

  const multiLocationSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://example.com/#org",
  "name": "Muster GmbH",
  "url": "https://example.com",
  "department": [
    {
      "@type": "LocalBusiness",
      "@id": "https://example.com/muenchen/#standort",
      "name": "Muster GmbH – München",
      "branchOf": { "@id": "https://example.com/#org" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstr. 1",
        "addressLocality": "München",
        "postalCode": "80331",
        "addressCountry": "DE"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://example.com/berlin/#standort",
      "name": "Muster GmbH – Berlin",
      "branchOf": { "@id": "https://example.com/#org" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beispielweg 5",
        "addressLocality": "Berlin",
        "postalCode": "10115",
        "addressCountry": "DE"
      }
    }
  ]
}`;

  const CopyButton = ({ code, label }: { code: string; label?: string }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      toast.success("Code kopiert!");
    };
    return (
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        <Copy className="h-3.5 w-3.5" /> {label || "Kopieren"}
      </Button>
    );
  };

  const branchTypes = [
    { icon: <Utensils className="h-5 w-5" />, type: "Restaurant", examples: "Restaurant, CafeOrCoffeeShop, Bakery, BarOrPub, FastFoodRestaurant, IceCreamShop" },
    { icon: <Stethoscope className="h-5 w-5" />, type: "MedicalBusiness", examples: "Dentist, Physician, Pharmacy, Optician, Veterinarian, MedicalClinic" },
    { icon: <Wrench className="h-5 w-5" />, type: "HomeAndConstructionBusiness", examples: "Electrician, Plumber, Locksmith, Painter, RoofingContractor, HVACBusiness" },
    { icon: <Scale className="h-5 w-5" />, type: "LegalService", examples: "LegalService, Notary, Attorney" },
    { icon: <Scissors className="h-5 w-5" />, type: "HealthAndBeautyBusiness", examples: "BeautySalon, HairSalon, NailSalon, TattooParlor, DaySpa" },
    { icon: <ShoppingBag className="h-5 w-5" />, type: "Store", examples: "ClothingStore, HardwareStore, JewelryStore, BookStore, Florist" },
    { icon: <Dumbbell className="h-5 w-5" />, type: "SportsActivityLocation", examples: "GymHealthFitness, YogaStudio, SportsClub, BowlingAlley" },
    { icon: <Building2 className="h-5 w-5" />, type: "ProfessionalService", examples: "AccountingService, FinancialService, InsuranceAgency, RealEstateAgent" },
  ];

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-3 text-center">
            <Code className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <div className="text-2xl font-bold text-blue-600">6+</div>
            <p className="text-xs text-muted-foreground">Code-Beispiele</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-3 text-center">
            <Star className="h-6 w-6 mx-auto mb-1 text-green-500" />
            <div className="text-2xl font-bold text-green-600">+30%</div>
            <p className="text-xs text-muted-foreground">Mehr Klicks (CTR)</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-3 text-center">
            <Building2 className="h-6 w-6 mx-auto mb-1 text-purple-500" />
            <div className="text-2xl font-bold text-purple-600">40+</div>
            <p className="text-xs text-muted-foreground">Branchen-Typen</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
          <CardContent className="p-3 text-center">
            <CheckCircle2 className="h-6 w-6 mx-auto mb-1 text-amber-500" />
            <div className="text-2xl font-bold text-amber-600">12</div>
            <p className="text-xs text-muted-foreground">FAQ beantwortet</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">LocalBusiness Schema: Ihre Visitenkarte für Suchmaschinen</h2>
        <AutoLexikonParagraph>
          <p className="text-lg mb-4" data-ai-summary="true">
            <strong><LexikonLink term="Schema Markup" /> vom Typ LocalBusiness</strong> ist der wichtigste strukturierte Datentyp für lokale Unternehmen. Es teilt Google in maschinenlesbarer Form mit, wer Sie sind, wo Sie sich befinden, wann Sie geöffnet haben und wie Kunden Sie bewerten – und ermöglicht dadurch <LexikonLink term="Rich Snippets" /> in den Suchergebnissen.
          </p>
        </AutoLexikonParagraph>
        <p className="mb-4">
          Während Ihr <LexikonLink term="Google Business Profil" /> die Daten für Google Maps liefert, ergänzt das LocalBusiness Schema die Informationen auf <strong>Ihrer eigenen Website</strong>. Zusammen bilden sie ein konsistentes Signal, das Google Vertrauen in Ihre <LexikonLink term="NAP">NAP-Daten</LexikonLink> gibt.
        </p>
        <p className="mb-6">
          In diesem Guide lernen Sie Schritt für Schritt, wie Sie LocalBusiness Schema korrekt implementieren – mit <strong>kopierfertigen Code-Beispielen</strong> für jede Branche.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="localbusiness-schema-implementierung" />

      {/* Was ist LocalBusiness Schema? */}
      <section id="was-ist-localbusiness">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Was ist LocalBusiness <LexikonLink term="Schema Markup" />?</h2>
        
        <AutoLexikonParagraph>
          <p className="mb-4">
            LocalBusiness ist ein <strong>Schema.org-Typ</strong>, der speziell für physische Geschäfte und Dienstleister entwickelt wurde. Er ist ein Untertyp von <code>Organization</code> und <code>Place</code>, was bedeutet, dass er sowohl Unternehmens- als auch Standortinformationen tragen kann.
          </p>
        </AutoLexikonParagraph>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">Schema.org Hierarchie</h4>
            <div className="font-mono text-sm space-y-1 text-muted-foreground">
              <p>Thing</p>
              <p className="pl-4">→ Organization</p>
              <p className="pl-8">→ <strong className="text-foreground">LocalBusiness</strong></p>
              <p className="pl-12">→ Restaurant</p>
              <p className="pl-12">→ MedicalBusiness → Dentist</p>
              <p className="pl-12">→ HomeAndConstructionBusiness → Electrician</p>
              <p className="pl-12">→ LegalService</p>
              <p className="pl-12">→ Store → ClothingStore</p>
              <p className="pl-12">→ HealthAndBeautyBusiness → HairSalon</p>
              <p className="pl-12">→ ... (40+ spezifische Typen)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Warum JSON-LD?
            </h4>
            <p className="text-sm text-muted-foreground">
              Google empfiehlt <strong>JSON-LD</strong> als Format für strukturierte Daten. Es wird als <code>&lt;script type="application/ld+json"&gt;</code> im HTML eingebettet und ist vollständig vom sichtbaren Content getrennt. Das macht es einfach zu implementieren, zu pflegen und zu debuggen – ohne den HTML-Code zu verändern.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Warum wichtig */}
      <section id="warum-wichtig">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Warum LocalBusiness Schema Ihre Rankings verbessert</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Rich Snippets in der Suche
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Sternebewertungen direkt in den SERPs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Öffnungszeiten unter dem Suchergebnis</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Adresse und Telefonnummer im Knowledge Panel</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Preisbereich und angebotene Services</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                Messbare Vorteile
              </h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> <strong>+20-30%</strong> höhere Klickrate (CTR)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Bessere Verständlichkeit für <LexikonLink term="Google AI Overviews">AI Overviews</LexikonLink></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Stärkeres Entity-Signal für den <LexikonLink term="Knowledge Graph" /></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> Konsistente <LexikonLink term="NAP">NAP-Daten</LexikonLink> stärken lokales Ranking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Grundstruktur */}
      <section id="grundstruktur">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">JSON-LD Grundstruktur: Ihr erstes LocalBusiness Schema</h2>
        
        <AutoLexikonParagraph>
          <p className="mb-4">
            Hier ist ein vollständiges, kopierfertiges LocalBusiness-Schema, das Sie als Grundlage verwenden können. Ersetzen Sie einfach die Beispielwerte durch Ihre eigenen Geschäftsdaten:
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <FileCode className="h-5 w-5 text-primary" />
                Komplettes LocalBusiness Schema (JSON-LD)
              </h4>
              <CopyButton code={`<script type="application/ld+json">\n${basicSchema}\n</script>`} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{basicSchema}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Pflichtfelder erklärt</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div><code className="text-primary">@type</code> – Spezifischster Geschäftstyp</div>
              <div><code className="text-primary">@id</code> – Eindeutige URI für Ihre Entität</div>
              <div><code className="text-primary">name</code> – Exakt wie im GBP</div>
              <div><code className="text-primary">address</code> – Vollständige Postadresse</div>
              <div><code className="text-primary">telephone</code> – Internationales Format (+49...)</div>
              <div><code className="text-primary">url</code> – URL Ihrer Website</div>
              <div><code className="text-primary">geo</code> – Exakte Koordinaten</div>
              <div><code className="text-primary">openingHoursSpecification</code> – Öffnungszeiten</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/30 bg-amber-500/5 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Wichtig: NAP-Konsistenz
            </h4>
            <p className="text-sm text-muted-foreground">
              Name, Adresse und Telefonnummer im Schema müssen <strong>exakt</strong> mit Ihrem Google Business Profil übereinstimmen. Jede Abweichung (z.B. "Str." vs. "Straße", "+49" vs. "089") kann Google verwirren und Ihr Ranking negativ beeinflussen. Lesen Sie mehr über <Link to="/blog/nap-konsistenz-local-seo" className="text-primary hover:underline">NAP-Konsistenz</Link>.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Branchen-spezifische Typen */}
      <section id="branchen-typen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Der richtige @type für Ihre Branche</h2>
        
        <p className="mb-4">
          Verwenden Sie immer den <strong>spezifischsten Schema-Typ</strong> für Ihr Unternehmen. Ein Zahnarzt sollte <code>Dentist</code> verwenden, nicht <code>LocalBusiness</code> oder <code>MedicalBusiness</code>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {branchTypes.map((branch, i) => (
            <Card key={i}>
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-0.5 shrink-0">{branch.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm">{branch.type}</h4>
                    <p className="text-xs text-muted-foreground">{branch.examples}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Restaurant Example */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Beispiel: Restaurant-Schema
              </h4>
              <CopyButton code={restaurantSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{restaurantSchema}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Dentist Example */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary" />
                Beispiel: Zahnarzt-Schema
              </h4>
              <CopyButton code={dentistSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{dentistSchema}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="middle" articleSlug="localbusiness-schema-implementierung" />

      {/* Öffnungszeiten */}
      <section id="oeffnungszeiten">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Öffnungszeiten & Sondertage korrekt angeben</h2>
        
        <AutoLexikonParagraph>
          <p className="mb-4">
            Öffnungszeiten sind eines der <strong>wertvollsten Signale</strong> im LocalBusiness Schema. Google zeigt sie prominent in den Suchergebnissen – fehlerhafte Angaben können Kunden abschrecken und Vertrauen kosten.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Sondertage & Feiertage
              </h4>
              <CopyButton code={specialHoursSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{specialHoursSchema}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Tipp: Geschlossen angeben
            </h4>
            <p className="text-sm text-muted-foreground">
              Um einen geschlossenen Tag anzugeben, setzen Sie <code>opens</code> und <code>closes</code> auf <code>"00:00"</code>. Vergessen Sie nicht, auch in Ihrem <Link to="/blog/gbp-oeffnungszeiten-sondertage" className="text-primary hover:underline">Google Business Profil</Link> die gleichen Sondertage zu pflegen.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Geo-Koordinaten */}
      <section id="geo-coordinates">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Geo-Koordinaten & Service Areas</h2>
        
        <p className="mb-4">
          Für Unternehmen mit festem Standort reichen die <code>geo</code>-Koordinaten. <strong>Service-Area-Businesses</strong> (z.B. Handwerker, Lieferdienste) sollten zusätzlich <code>areaServed</code> angeben:
        </p>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Service Area definieren
              </h4>
              <CopyButton code={serviceAreaSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{serviceAreaSchema}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Geo-Koordinaten finden</h4>
            <p className="text-sm text-muted-foreground">
              Öffnen Sie <strong>Google Maps</strong>, suchen Sie Ihren Standort, klicken Sie mit der rechten Maustaste auf den Pin und kopieren Sie die Koordinaten. Format: <code>"latitude": 48.1351, "longitude": 11.5820</code>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AggregateRating: Bewertungssterne in den SERPs</h2>
        
        <AutoLexikonParagraph>
          <p className="mb-4">
            Das <code>aggregateRating</code>-Property ist eines der <strong>visuell wirkungsvollsten Schema-Elemente</strong>. Gelbe Sterne in den Suchergebnissen erhöhen die Klickrate nachweislich um 20-30%.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">Korrekte Implementierung</h4>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{`"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "bestRating": "5",
  "worstRating": "1",
  "reviewCount": "127",
  "ratingCount": "127"
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="border-red-500/30 bg-red-500/5 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Warnung: Google-Richtlinien beachten
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Bewertungswerte müssen <strong>echte, verifizierbare Bewertungen</strong> widerspiegeln</li>
              <li>• Die Bewertungen müssen <strong>sichtbar auf der Seite</strong> eingebunden sein</li>
              <li>• <strong>Selbst-erstellte oder gefälschte</strong> Bewertungen im Schema können zu einer Strafe führen</li>
              <li>• Halten Sie die Werte aktuell – veraltete Zahlen sind irreführend</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Erweiterte Properties */}
      <section id="erweitert">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Erweiterte Properties für maximale Sichtbarkeit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Zahlungsmethoden</h4>
              <pre className="bg-muted rounded p-2 text-xs">
                <code>{`"paymentAccepted": "Cash, Credit Card, EC",
"currenciesAccepted": "EUR"`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Barrierefreiheit</h4>
              <pre className="bg-muted rounded p-2 text-xs">
                <code>{`"amenityFeature": {
  "@type": "LocationFeatureSpecification",
  "name": "Wheelchair accessible",
  "value": true
}`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Gründungsdatum</h4>
              <pre className="bg-muted rounded p-2 text-xs">
                <code>{`"foundingDate": "2005-03-15",
"numberOfEmployees": {
  "@type": "QuantitativeValue",
  "value": 12
}`}</code>
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Social Media & KnowledgeGraph</h4>
              <pre className="bg-muted rounded p-2 text-xs">
                <code>{`"sameAs": [
  "https://facebook.com/...",
  "https://instagram.com/...",
  "https://linkedin.com/..."
]`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mehrere Standorte */}
      <section id="mehrere-standorte">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema für mehrere Standorte</h2>
        
        <AutoLexikonParagraph>
          <p className="mb-4">
            Unternehmen mit <strong>mehreren Standorten</strong> benötigen eine hierarchische Schema-Struktur. Die Muttergesellschaft wird als <code>Organization</code> definiert, die einzelnen Standorte als <code>LocalBusiness</code> mit <code>branchOf</code>-Verknüpfung.
          </p>
        </AutoLexikonParagraph>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Multi-Location Schema
              </h4>
              <CopyButton code={multiLocationSchema} />
            </div>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
              <code>{multiLocationSchema}</code>
            </pre>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground mb-6">
          Mehr dazu in unserem <Link to="/blog/gbp-mehrere-standorte" className="text-primary hover:underline">Guide für mehrere Standorte</Link> und dem Artikel über <Link to="/blog/local-seo-mehrstufig-unternehmen" className="text-primary hover:underline">mehrstufige Unternehmen</Link>.
        </p>
      </section>

      {/* Testing */}
      <section id="testing">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Markup testen & validieren</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TestTube className="h-5 w-5 text-blue-500" />
                <h4 className="font-semibold">Google Rich Results Test</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Prüft, ob Ihr Schema Rich Snippets auslöst.</p>
              <p className="text-xs font-mono text-muted-foreground">search.google.com/test/rich-results</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <h4 className="font-semibold">Schema Markup Validator</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Validiert die syntaktische Korrektheit.</p>
              <p className="text-xs font-mono text-muted-foreground">validator.schema.org</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">Test-Workflow</h4>
            <ol className="text-sm space-y-1 text-muted-foreground list-decimal pl-5">
              <li>Schema-Code implementieren oder aktualisieren</li>
              <li>Im <strong>Schema Markup Validator</strong> auf Syntax-Fehler prüfen</li>
              <li>Im <strong>Rich Results Test</strong> die URL eingeben</li>
              <li>In der <strong>Google Search Console</strong> unter „Verbesserungen" Fehler monitoren</li>
              <li>Nach 1-2 Wochen prüfen, ob Rich Snippets erscheinen</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Häufige Fehler */}
      <section id="fehler">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">10 häufige LocalBusiness-Schema-Fehler</h2>
        
        <div className="space-y-3 mb-6">
          {[
            { error: "Zu allgemeiner @type", fix: "Statt \"LocalBusiness\" den spezifischsten Typ verwenden (z.B. \"Dentist\", \"Restaurant\")" },
            { error: "NAP-Inkonsistenz", fix: "Name, Adresse und Telefon müssen exakt mit dem Google Business Profil übereinstimmen" },
            { error: "Fehlende @id", fix: "Jede Entität braucht eine eindeutige @id (z.B. \"https://example.com/#business\")" },
            { error: "Falsches Telefon-Format", fix: "Internationales Format verwenden: \"+49-89-12345678\" statt \"089/12345678\"" },
            { error: "Ungültige Öffnungszeiten", fix: "ISO 8601-Format: \"opens\": \"08:00\", \"closes\": \"18:00\" mit korrekten dayOfWeek-Werten" },
            { error: "Gefälschte aggregateRating", fix: "Nur echte, auf der Seite sichtbare Bewertungen angeben – Google bestraft Fälschungen" },
            { error: "Fehlende Geo-Koordinaten", fix: "Immer exakte latitude/longitude angeben – aus Google Maps kopieren" },
            { error: "Schema auf falschen Seiten", fix: "LocalBusiness-Schema auf die Startseite und Standortseiten – nicht auf Blogposts" },
            { error: "Doppelte Schemas", fix: "Nur ein LocalBusiness-Schema pro Seite – mehrere erzeugen Konflikte" },
            { error: "Veraltete Daten", fix: "Schema regelmäßig aktualisieren, besonders Öffnungszeiten und Bewertungszahlen" },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-3 flex items-start gap-3">
                <Badge variant="destructive" className="shrink-0 mt-0.5">{i + 1}</Badge>
                <div>
                  <h4 className="font-semibold text-sm">{item.error}</h4>
                  <p className="text-xs text-muted-foreground">{item.fix}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <BlogCTAABTest position="end" articleSlug="localbusiness-schema-implementierung" />

      {/* Related Articles */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Weiterführende Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link to="/blog/schema-markup-local-seo" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold text-sm">Schema Markup für Local SEO</h4>
                  <p className="text-xs text-muted-foreground">Alle Schema-Typen im Überblick</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/technisches-local-seo-guide" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold text-sm">Technisches Local SEO Hub</h4>
                  <p className="text-xs text-muted-foreground">Alle Technical-SEO-Guides</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/nap-konsistenz-local-seo" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold text-sm">NAP-Konsistenz</h4>
                  <p className="text-xs text-muted-foreground">Einheitliche Daten für bessere Rankings</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/google-my-business-optimieren" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold text-sm">Google Business Profil optimieren</h4>
                  <p className="text-xs text-muted-foreground">Schritt-für-Schritt Anleitung</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <HelpfulnessWidget articleSlug="localbusiness-schema-implementierung" />
    </ArticleLayout>
  );
};

export default LocalBusinessSchemaImplementierung;
