import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Car, Wrench, Star, TrendingUp, MapPin, CheckCircle2, Clock, Phone, Camera, AlertTriangle, Settings, Shield } from "lucide-react";

const LocalSeoAutowerkstatt = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-autowerkstatt", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "besonderheiten", title: "Branchenbesonderheiten" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "notfall-keywords", title: "Notfall-Keywords" },
    { id: "bewertungen", title: "Bewertungsstrategien" },
    { id: "website", title: "Website-Optimierung" },
    { id: "lokale-suche", title: "Lokale Suche dominieren" },
    { id: "content", title: "Content-Marketing" },
    { id: "schema-markup", title: "Schema Markup" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Wie wichtig ist Local SEO für Autowerkstätten?", answer: "Extrem wichtig. 78% der Autofahrer suchen online nach einer Werkstatt, bevor sie anrufen. Besonders bei Pannen suchen 92% über das Smartphone nach 'Autowerkstatt in der Nähe'. Ohne lokale Sichtbarkeit verlieren Sie diese Kunden." },
    { question: "Welche Keywords sind für Autowerkstätten am wichtigsten?", answer: "Die wichtigsten Keywords sind Notfall-Suchen wie 'Autowerkstatt Notdienst', 'Reifenpanne Hilfe', 'Auto springt nicht an'. Dazu Service-Keywords wie 'Ölwechsel [Stadt]', 'TÜV [Stadt]', 'Bremsen wechseln [Stadt]' und Marken-Keywords wie 'BMW Werkstatt [Stadt]'." },
    { question: "Wie bekomme ich mehr Google-Bewertungen für meine Werkstatt?", answer: "Bitten Sie nach jedem erfolgreichen Service um eine Bewertung. Drucken Sie QR-Codes auf Rechnungen und Visitenkarten. Das beste Timing: Wenn der Kunde sein repariertes Auto glücklich abholt. Vermeiden Sie Anreize, die gegen Google-Richtlinien verstoßen." },
    { question: "Soll ich für jede Automarke eine eigene Seite erstellen?", answer: "Ja, wenn Sie sich auf bestimmte Marken spezialisiert haben. Marken-Landingpages ranken für wertvolle Keywords wie 'VW Spezialist [Stadt]' oder 'Mercedes Werkstatt [Stadt]'. Zeigen Sie Ihre Expertise mit Zertifikaten und Referenzen." },
    { question: "Wie wichtig sind Fotos für meine Werkstatt?", answer: "Sehr wichtig. Google Business Profile mit vielen Fotos erhalten 42% mehr Wegbeschreibungen und 35% mehr Website-Klicks. Zeigen Sie Werkstatt-Innenansichten, moderne Geräte, Ihr Team und fertig reparierte Fahrzeuge." },
    { question: "Welche Google Business Kategorie soll ich wählen?", answer: "Hauptkategorie 'Autowerkstatt'. Nebenkategorien je nach Leistung: 'Autolackiererei', 'Reifenservice', 'Autoelektriker', 'Karosseriebau', 'Ölwechselservice'. Maximal 10 Kategorien, nur was Sie wirklich anbieten." },
    { question: "Wie nutze ich Schema Markup für meine Werkstatt?", answer: "Verwenden Sie AutoRepair-Schema für Ihr Unternehmen, Service-Schema für einzelne Leistungen und OpeningHoursSpecification für Ihre Öffnungszeiten. Besonders wichtig: Notdienst-Zeiten markieren." },
    { question: "Wie kann ich bei Notfall-Suchen gefunden werden?", answer: "Optimieren Sie für Keywords wie 'Pannenhilfe [Stadt]', 'Auto Notdienst', 'Werkstatt Samstag geöffnet'. Zeigen Sie Notdienst-Zeiten prominent auf Google Business. Erstellen Sie eine eigene Notfall-Landingpage mit Telefonnummer und Sofort-Kontakt." },
    { question: "Soll ich auch für Elektroautos optimieren?", answer: "Unbedingt. 'E-Auto Werkstatt [Stadt]' ist ein stark wachsendes Keyword mit wenig Konkurrenz. Wenn Sie E-Autos reparieren, erstellen Sie eine eigene Seite dafür. Zeigen Sie Zertifizierungen und Spezialkenntnisse." },
    { question: "Wie wichtig ist mobile Optimierung für Werkstätten?", answer: "Kritisch. 92% der Notfall-Suchen kommen vom Smartphone. Ihre Website muss in 3 Sekunden laden, Click-to-Call prominent platzieren und die wichtigsten Infos above-the-fold zeigen." },
    { question: "Wie nutze ich soziale Medien für meine Werkstatt?", answer: "Posten Sie Vorher/Nachher-Bilder von Reparaturen, Tipps zur Autopflege und Team-Vorstellungen. Facebook und Instagram sind ideal. Videos von komplexen Reparaturen performen besonders gut." },
    { question: "Wie gehe ich mit negativen Bewertungen um?", answer: "Antworten Sie professionell und schnell (binnen 24 Stunden). Zeigen Sie Verständnis, bieten Sie eine Lösung an. Negative Bewertungen mit guten Antworten können Vertrauen aufbauen, wenn Sie souverän damit umgehen." },
    { question: "Welche Rolle spielen Branchenverzeichnisse?", answer: "Einträge in relevanten Verzeichnissen stärken Ihre NAP-Konsistenz und lokale Autorität. Wichtige Portale: mobile.de, AutoScout24, KFZ-Betriebe.de, Gelbe Seiten. Achten Sie auf identische Daten überall." },
    { question: "Wie bewerbe ich meine TÜV/Dekra-Services?", answer: "Erstellen Sie eine eigene TÜV-Landingpage mit Keywords wie 'TÜV [Stadt]', 'HU [Stadt]'. Zeigen Sie Preise, Online-Terminbuchung und was bei Nicht-Bestehen passiert. Viele suchen 'TÜV günstig [Stadt]' oder 'TÜV ohne Termin'." },
    { question: "Soll ich Online-Terminbuchung anbieten?", answer: "Unbedingt. 67% der Kunden bevorzugen Online-Terminbuchung. Integrieren Sie ein Buchungssystem auf Ihrer Website und verlinken Sie es von Google Business. Einfache Termine wie Ölwechsel oder TÜV sind ideal." }
  ];


  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4 text-center">
            <Car className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-3xl font-bold text-primary">78%</div>
            <p className="text-sm text-muted-foreground">suchen Werkstatt online</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-500" />
            <div className="text-3xl font-bold text-orange-600">92%</div>
            <p className="text-sm text-muted-foreground">Notfall-Suchen vom Smartphone</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <div className="text-3xl font-bold text-green-600">4.5+</div>
            <p className="text-sm text-muted-foreground">Sterne für Top-Rankings</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Warum Local SEO für Autowerkstätten unverzichtbar ist</h2>
        <p className="text-lg mb-4">
          Die Zeiten, in denen Autofahrer einfach zur nächsten Werkstatt fuhren, sind vorbei. Heute greifen <strong>78% aller Fahrzeughalter</strong> zum Smartphone, bevor sie ihr Auto zur Reparatur bringen. Sie vergleichen Bewertungen, prüfen Öffnungszeiten und suchen nach Spezialisierungen.
        </p>
        <p className="mb-4">
          Besonders dramatisch ist die Situation bei Notfällen: Wenn das Auto liegenbleibt, der Reifen platzt oder die Batterie versagt, suchen <strong>92% der Betroffenen</strong> über ihr Smartphone nach "Autowerkstatt in der Nähe" oder "Pannenhilfe". Wer hier nicht auf Seite 1 erscheint, existiert für diese Kunden schlicht nicht.
        </p>
        <p className="mb-6">
          Die gute Nachricht: Viele Werkstätten vernachlässigen ihre Online-Präsenz noch immer. Mit den richtigen Maßnahmen können Sie sich einen entscheidenden Vorsprung sichern und zur <strong>ersten Wahl in Ihrer Region</strong> werden.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="local-seo-autowerkstatt" />

      {/* Branchenbesonderheiten */}
      <section id="besonderheiten">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Besonderheiten der KFZ-Branche für Local SEO</h2>
        
        <h3 className="text-xl font-semibold mb-3">1. Notfall-Fokus</h3>
        <p className="mb-4">
          Anders als bei geplanten Einkäufen sind viele Werkstatt-Suchen <strong>Notfälle</strong>. Das Auto springt nicht an, ein Warnlämpchen leuchtet, der TÜV läuft ab. Diese Kunden brauchen <em>sofort</em> Hilfe und entscheiden sich für die erstbeste Werkstatt, die verfügbar erscheint.
        </p>

        <h3 className="text-xl font-semibold mb-3">2. Hohe Vertrauensbarriere</h3>
        <p className="mb-4">
          Autoreparaturen sind für Laien undurchschaubar und oft teuer. Kunden haben Angst, über den Tisch gezogen zu werden. <strong>Bewertungen und Transparenz</strong> sind daher entscheidend für die Werkstattwahl.
        </p>

        <h3 className="text-xl font-semibold mb-3">3. Marken-Spezialisierung</h3>
        <p className="mb-4">
          Viele Autobesitzer suchen gezielt nach Marken-Spezialisten: "BMW Werkstatt", "VW Spezialist", "Mercedes Service". Diese Keywords haben oft <strong>höhere Conversion-Raten</strong> als generische Suchen.
        </p>

        <h3 className="text-xl font-semibold mb-3">4. Saisonalität</h3>
        <p className="mb-6">
          Das Werkstattgeschäft hat klare Saisonmuster: <strong>Reifenwechsel</strong> im Frühjahr und Herbst, <strong>Klimaanlagen-Service</strong> vor dem Sommer, <strong>Batterie-Probleme</strong> im Winter. Ihre SEO-Strategie sollte diese Muster berücksichtigen.
        </p>

        <Card className="bg-muted/50 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Typisches Suchverhalten bei Autoproblemen
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Problem tritt auf (Warnlämpchen, Geräusch, Panne)</li>
              <li>Google-Suche: "Was bedeutet [Symbol/Geräusch]?"</li>
              <li>Entscheidung: Muss ich in die Werkstatt?</li>
              <li>Google-Suche: "Autowerkstatt in der Nähe" oder "[Problem] Werkstatt [Stadt]"</li>
              <li>Vergleich der Top-3-Ergebnisse (Bewertungen, Öffnungszeiten, Entfernung)</li>
              <li>Anruf oder Online-Terminbuchung</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Google Business */}
      <section id="google-business">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Business Profil optimal einrichten</h2>
        
        <p className="mb-4">
          Ihr Google Business Profil ist das <strong>wichtigste Element</strong> Ihrer lokalen Sichtbarkeit. Bei lokalen Suchen erscheint es direkt in den Suchergebnissen – noch vor Ihrer Website.
        </p>

        <h3 className="text-xl font-semibold mb-3">Die richtige Kategoriewahl</h3>
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Empfohlene Kategorien für Autowerkstätten:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Autowerkstatt (Hauptkategorie)</Badge>
            <Badge variant="secondary">Reifenservice</Badge>
            <Badge variant="secondary">Autoelektriker</Badge>
            <Badge variant="secondary">Ölwechselservice</Badge>
            <Badge variant="secondary">Autolackiererei</Badge>
            <Badge variant="secondary">Karosseriebau</Badge>
            <Badge variant="secondary">Autoaufbereitung</Badge>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Öffnungszeiten und Notdienst</h3>
        <p className="mb-4">
          Zeigen Sie Ihre <strong>regulären Öffnungszeiten</strong> und – falls vorhanden – Ihren <strong>Notdienst</strong> separat an. Nutzen Sie "Mehr Öffnungszeiten", um z.B. "Notdienst: 24/7" oder "Samstags geöffnet" hervorzuheben.
        </p>

        <h3 className="text-xl font-semibold mb-3">Services und Attribute</h3>
        <p className="mb-4">
          Listen Sie alle angebotenen Services auf: Ölwechsel, TÜV/HU, Klimaservice, Reifenwechsel, Diagnose, etc. Je detaillierter, desto besser ranken Sie für spezifische Suchanfragen.
        </p>

        <h3 className="text-xl font-semibold mb-3">Fotos, die überzeugen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <Camera className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Must-Have Fotos</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Werkstatt-Außenansicht mit Schild</li>
                <li>• Saubere, moderne Werkstatthalle</li>
                <li>• Diagnosegeräte und Spezialwerkzeug</li>
                <li>• Ihr Team bei der Arbeit</li>
                <li>• Wartebereich/Kundenzimmer</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Star className="h-6 w-6 text-primary mb-2" />
              <h4 className="font-semibold mb-2">Bonus-Content</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Vorher/Nachher von Reparaturen</li>
                <li>• Zertifikate und Auszeichnungen</li>
                <li>• Spezialfahrzeuge (Oldtimer, Sportwagen)</li>
                <li>• Team-Fotos mit Namen</li>
                <li>• 360°-Rundgang durch die Werkstatt</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Notfall-Keywords */}
      <section id="notfall-keywords">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Notfall-Keywords: Wenn jede Sekunde zählt</h2>
        
        <p className="mb-4">
          Notfall-Suchen sind <strong>hochkonvertierend</strong>: Wer "Auto springt nicht an [Stadt]" googelt, braucht sofort Hilfe. Diese Keywords sollten Sie priorisieren:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Keyword-Typ</th>
                <th className="border p-3 text-left">Beispiele</th>
                <th className="border p-3 text-left">Conversion-Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Pannen-Keywords</td>
                <td className="border p-3 text-sm">Pannenhilfe [Stadt], Auto liegengeblieben, Abschleppdienst</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Sehr hoch</Badge></td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Akut-Probleme</td>
                <td className="border p-3 text-sm">Auto springt nicht an, Batterie leer, Reifenpanne</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Sehr hoch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Warnlämpchen</td>
                <td className="border p-3 text-sm">Motorkontrollleuchte, ABS-Warnlampe, Öllampe leuchtet</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Hoch</Badge></td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3 font-medium">Öffnungszeiten</td>
                <td className="border p-3 text-sm">Werkstatt Samstag, Werkstatt Sonntag, Werkstatt jetzt geöffnet</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Hoch</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Praxis-Tipp: Notfall-Landingpage erstellen
            </h4>
            <p className="text-muted-foreground">
              Erstellen Sie eine dedizierte Seite für Notfälle mit großer, klickbarer Telefonnummer, Ihrer Adresse mit Wegbeschreibung und den wichtigsten Notfall-Services. Diese Seite sollte in 2 Sekunden laden und sofort alle wichtigen Infos zeigen.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Bewertungsstrategien */}
      <section id="bewertungen">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bewertungen systematisch sammeln</h2>
        
        <p className="mb-4">
          Für Werkstätten sind Bewertungen <strong>besonders entscheidend</strong>, weil Kunden oft Angst vor überhöhten Rechnungen haben. Positive Bewertungen bauen dieses Misstrauen ab.
        </p>

        <h3 className="text-xl font-semibold mb-3">Der perfekte Zeitpunkt</h3>
        <p className="mb-4">
          Bitten Sie um eine Bewertung, wenn der Kunde <strong>sein repariertes Auto glücklich abholt</strong>. In diesem Moment ist die Zufriedenheit am höchsten. Nicht während der Übergabe, sondern kurz danach per SMS oder E-Mail.
        </p>

        <h3 className="text-xl font-semibold mb-3">QR-Code-Strategie</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Auf der Rechnung:</strong> "Zufrieden? Bewerten Sie uns" mit QR-Code</li>
          <li><strong>Im Wartebereich:</strong> Aufsteller mit Bewertungslink</li>
          <li><strong>Visitenkarten:</strong> Rückseite mit QR-Code zu Google</li>
          <li><strong>Auf Aufklebern:</strong> Für die Windschutzscheibe (Ölwechsel-Erinnerung + Bewertungslink)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Was Kunden in Bewertungen schätzen</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Transparenz</h4>
              <p className="text-sm text-muted-foreground">Ehrliche Diagnose, faire Preise, keine Überraschungen</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Schnelligkeit</h4>
              <p className="text-sm text-muted-foreground">Schnelle Terminvergabe, pünktliche Fertigstellung</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Wrench className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">Qualität</h4>
              <p className="text-sm text-muted-foreground">Saubere Arbeit, Problem wirklich gelöst</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BlogCTAABTest position="middle" articleSlug="local-seo-autowerkstatt" />

      {/* Website-Optimierung */}
      <section id="website">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Website-Optimierung für KFZ-Betriebe</h2>
        
        <h3 className="text-xl font-semibold mb-3">Service-Seiten erstellen</h3>
        <p className="mb-4">
          Erstellen Sie für jeden <strong>Hauptservice eine eigene Seite</strong>:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Ölwechsel [Stadt] – mit Preisen und Dauer</li>
          <li>TÜV/HU [Stadt] – mit Ablauf und was bei Mängeln passiert</li>
          <li>Klimaservice [Stadt] – saisonal optimiert</li>
          <li>Reifenservice [Stadt] – Wechsel, Einlagerung, Neuanschaffung</li>
          <li>Bremsenservice [Stadt] – Symptome, Kosten, Sicherheit</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Marken-Landingpages</h3>
        <p className="mb-4">
          Wenn Sie auf bestimmte Marken spezialisiert sind, erstellen Sie eigene Seiten:
        </p>
        <div className="bg-muted/30 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Beispiel-Struktur für Marken-Seiten:</p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• /bmw-werkstatt-[stadt] – Ihre BMW-Expertise</li>
            <li>• /vw-spezialist-[stadt] – VW-spezifische Services</li>
            <li>• /mercedes-service-[stadt] – Mercedes-Benz Kompetenz</li>
            <li>• /elektroauto-werkstatt-[stadt] – E-Fahrzeug-Spezialist</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3">Mobile-First ist Pflicht</h3>
        <p className="mb-6">
          92% der Notfall-Suchen kommen vom Smartphone. Ihre Website muss:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>In unter 3 Sekunden laden</li>
          <li>Click-to-Call-Button sofort sichtbar</li>
          <li>Adresse und Öffnungszeiten above-the-fold</li>
          <li>Große, touch-freundliche Buttons</li>
        </ul>
      </section>

      {/* Lokale Suche dominieren */}
      <section id="lokale-suche">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Lokale Suche dominieren</h2>
        
        <h3 className="text-xl font-semibold mb-3">NAP-Konsistenz</h3>
        <p className="mb-4">
          Ihr Firmenname, Adresse und Telefonnummer müssen <strong>überall identisch</strong> sein:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Google Business Profil</li>
          <li>Eigene Website (Footer, Kontaktseite, Impressum)</li>
          <li>Branchenverzeichnisse (Gelbe Seiten, Das Örtliche, etc.)</li>
          <li>Autoportale (mobile.de, AutoScout24)</li>
          <li>Soziale Medien</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Relevante Branchenverzeichnisse</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Verzeichnis</th>
                <th className="border p-3 text-left">Typ</th>
                <th className="border p-3 text-left">Priorität</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Google Business</td>
                <td className="border p-3">Allgemein</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Kritisch</Badge></td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">mobile.de/AutoScout24</td>
                <td className="border p-3">Branche</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Hoch</Badge></td>
              </tr>
              <tr>
                <td className="border p-3">KFZ-Betriebe.de</td>
                <td className="border p-3">Branche</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Hoch</Badge></td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border p-3">Gelbe Seiten</td>
                <td className="border p-3">Allgemein</td>
                <td className="border p-3"><Badge className="bg-blue-100 text-blue-800">Mittel</Badge></td>
              </tr>
              <tr>
                <td className="border p-3">Yelp</td>
                <td className="border p-3">Allgemein</td>
                <td className="border p-3"><Badge className="bg-blue-100 text-blue-800">Mittel</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Content-Marketing */}
      <section id="content">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Content-Marketing für Werkstätten</h2>
        
        <h3 className="text-xl font-semibold mb-3">Blog-Themen, die Traffic bringen</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Problem-Lösungen:</strong> "Was bedeutet die Motorkontrollleuchte?", "Auto macht Geräusche beim Bremsen"</li>
          <li><strong>Saisonale Tipps:</strong> "Auto winterfest machen", "Klimaanlage richtig pflegen"</li>
          <li><strong>Kaufberatung:</strong> "Welche Reifen für [Region]?", "Winterreifen vs. Ganzjahresreifen"</li>
          <li><strong>Kostenübersichten:</strong> "Was kostet ein Ölwechsel?", "TÜV Kosten 2026"</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Video-Content</h3>
        <p className="mb-4">
          Kurze Videos können <strong>Vertrauen aufbauen</strong> und bei YouTube/Google ranken:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Werkstatt-Rundgang (zeigt Professionalität)</li>
          <li>Reparatur-Erklärungen (baut Vertrauen auf)</li>
          <li>Tipps vom Meister (positioniert als Experte)</li>
          <li>Vorher/Nachher von Aufbereitungen</li>
        </ul>
      </section>

      {/* Schema Markup */}
      <section id="schema-markup">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Markup für Autowerkstätten</h2>
        
        <p className="mb-4">
          Mit strukturierten Daten helfen Sie Google, Ihre Werkstatt besser zu verstehen:
        </p>

        <div className="bg-muted/50 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Mustermann KFZ-Werkstatt",
  "image": "https://example.com/werkstatt.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 123",
    "addressLocality": "Musterstadt",
    "postalCode": "12345",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.1234,
    "longitude": 8.5678
  },
  "telephone": "+49-123-456789",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}
          </pre>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Freie Werkstatt gegen Vertragshändler</h2>
        {industryCaseStudies.autowerkstatt.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-autowerkstatt" />

      <BlogCTAABTest position="end" articleSlug="local-seo-autowerkstatt" />

      {/* Final CTA */}
      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoAutowerkstatt;
