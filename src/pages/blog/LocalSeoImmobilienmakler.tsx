import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import IndustryRankingChallenges from "@/components/blog/IndustryRankingChallenges";
import { industryRankingConfigs } from "@/data/industryRankingData";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import StatisticBox from "@/components/blog/StatisticBox";
import { industryStats, generalLocalSeoStats } from "@/data/industryStatistics";
import ImplementationRoadmap from "@/components/blog/ImplementationRoadmap";
import { industryImplementationData } from "@/data/industryImplementationData";
import IndustryComparisonTable from "@/components/blog/IndustryComparisonTable";
import { industryComparisonData } from "@/data/industryComparisonData";
import IndustryBenchmarkTable from "@/components/blog/IndustryBenchmarkTable";
import { industryBenchmarkData } from "@/data/industryBenchmarkData";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Users, Star, TrendingUp, MapPin, CheckCircle2, Building2, Search, FileText, Camera, Globe } from "lucide-react";

const LocalSeoImmobilienmakler = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-immobilienmakler", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "besonderheiten", title: "Branchenbesonderheiten" },
    { id: "google-business", title: "Google Business optimieren" },
    { id: "objekt-landingpages", title: "Objekt-Landingpages" },
    { id: "stadtteil-keywords", title: "Stadtteil-Keywords" },
    { id: "bewertungen", title: "Bewertungen sammeln" },
    { id: "schema-markup", title: "Schema Markup" },
    { id: "content-strategie", title: "Content-Strategie" },
    { id: "mehrere-standorte", title: "Mehrere Standorte" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Wie wichtig ist Local SEO für Immobilienmakler?", answer: "Extrem wichtig. 97% aller Immobiliensuchen starten online, und die Mehrheit der Käufer und Verkäufer sucht nach einem lokalen Makler. Ohne starke lokale Sichtbarkeit verlieren Sie potenzielle Kunden an die Konkurrenz." },
    { question: "Soll ich für jedes Objekt eine eigene Landingpage erstellen?", answer: "Für Premium-Objekte und exklusive Listings lohnt sich eine eigene Landingpage. Für Standard-Objekte reicht ein Eintrag auf Ihrer Objekt-Übersichtsseite. Wichtig: Entfernen Sie verkaufte Objekte nicht sofort, sondern nutzen Sie 301-Weiterleitungen." },
    { question: "Welche Google Business Kategorie ist für Makler richtig?", answer: "Die Hauptkategorie sollte 'Immobilienmakler' sein. Als Nebenkategorien können Sie 'Immobilienverwaltung', 'Hausverwaltung' oder 'Immobilienbewertung' hinzufügen, je nach Ihrem Leistungsspektrum." },
    { question: "Wie bekomme ich Bewertungen von Käufern und Verkäufern?", answer: "Bitten Sie nach erfolgreichem Notartermin um eine Bewertung. Senden Sie eine personalisierte E-Mail mit direktem Link zu Ihrem Google-Profil. Timing ist entscheidend: Die Euphorie nach dem erfolgreichen Abschluss ist der beste Moment." },
    { question: "Sollte ich Stadtteil-Seiten für jedes Viertel erstellen?", answer: "Ja, wenn Sie in diesem Stadtteil aktiv sind. Erstellen Sie detaillierte Stadtteil-Guides mit Infos zu Preisen, Infrastruktur, Schulen und Verkehrsanbindung. Diese Seiten ranken oft für wertvolle Long-Tail-Keywords." },
    { question: "Wie nutze ich Schema Markup als Immobilienmakler?", answer: "Verwenden Sie das RealEstateAgent-Schema für Ihr Unternehmen und das RealEstateListing-Schema für einzelne Objekte. Dies verbessert Ihre Darstellung in den Suchergebnissen und kann zu Rich Snippets führen." },
    { question: "Was sollte mein Marktbericht enthalten?", answer: "Ein guter Marktbericht enthält: durchschnittliche Quadratmeterpreise, Preisentwicklung der letzten 12 Monate, Verweildauer auf dem Markt, Nachfrage-Trends und einen Ausblick. Aktualisieren Sie ihn monatlich oder quartalsweise." },
    { question: "Brauche ich für jeden Standort ein eigenes Google Business Profil?", answer: "Ja, wenn Sie mehrere physische Büros haben, sollte jedes Büro ein eigenes Google Business Profil bekommen. Wichtig: Jedes Profil braucht eine eigene, lokale Telefonnummer und eindeutige Inhalte." },
    { question: "Wie oft sollte ich Google Posts veröffentlichen?", answer: "Idealerweise 2-3 mal pro Woche. Teilen Sie neue Objekte, erfolgreiche Verkäufe (mit Erlaubnis), Marktupdate-Snippets und lokale Events. Posts verfallen nach 7 Tagen, daher ist Regelmäßigkeit wichtig." },
    { question: "Welche Portale sind neben Google wichtig?", answer: "Für Immobilienmakler sind ImmobilienScout24, Immonet, Immowelt und Kleinanzeigen besonders wichtig. Pflegen Sie dort Ihr Maklerprofil sorgfältig – diese Seiten ranken oft für lokale Suchanfragen." },
    { question: "Wie optimiere ich meine Website für 'Immobilienmakler + Stadt'?", answer: "Integrieren Sie den Stadtnamen in: Title-Tag, H1-Überschrift, Meta-Description, URL-Struktur und im Content natürlich. Erstellen Sie eine dedizierte Stadtseite mit lokalen Referenzen und Expertise-Nachweisen." },
    { question: "Was ist der Unterschied zwischen Käufer- und Verkäufer-Keywords?", answer: "Käufer suchen: 'Wohnung kaufen [Stadt]', 'Haus mit Garten [Stadtteil]'. Verkäufer suchen: 'Immobilienmakler [Stadt]', 'Haus verkaufen Bewertung', 'Was ist meine Immobilie wert'. Verkäufer-Keywords sind meist lukrativer." },
    { question: "Soll ich Preise auf meiner Website nennen?", answer: "Für Objekte: Ja, Preistransparenz ist wichtig. Für Ihre Maklerprovision: Sie können Richtwerte nennen, aber verweisen Sie auf individuelle Beratung. Verstecken Sie keine Kosten – das schadet dem Vertrauen." },
    { question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?", answer: "Erste Verbesserungen im Google Business Ranking sind oft nach 4-8 Wochen sichtbar. Für organische Rankings in umkämpften Märkten rechnen Sie mit 6-12 Monaten. Kontinuierliche Optimierung ist entscheidend." },
    { question: "Was kostet Local SEO für Immobilienmakler?", answer: "DIY: Ihre Zeit + ca. 100-200€/Monat für Tools und Verzeichnisse. Agentur: 500-2.000€/Monat je nach Umfang. Der ROI ist bei einem einzigen gewonnenen Verkaufsauftrag bereits positiv." }
  ];


  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Beispiel Immobilienmakler",
    "description": "Local SEO Best Practices für Immobilienmakler",
    "areaServed": {
      "@type": "City",
      "name": "Beispielstadt"
    }
  };

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      faqItems={faqItems}
      additionalSchema={realEstateAgentSchema}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 not-prose">
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-3xl font-bold text-primary">97%</p>
            <p className="text-sm text-muted-foreground">suchen online</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-3xl font-bold text-primary">44%</p>
            <p className="text-sm text-muted-foreground">starten bei Google</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Star className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-3xl font-bold text-primary">4,7★</p>
            <p className="text-sm text-muted-foreground">Mindest-Bewertung</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <p className="text-3xl font-bold text-primary">3x</p>
            <p className="text-sm text-muted-foreground">mehr Anfragen</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Die Immobilienbranche ist digital geworden:</strong> 97% aller Immobiliensuchen 
          starten heute online. Als Immobilienmakler entscheidet Ihre lokale Sichtbarkeit bei Google 
          darüber, ob potenzielle Verkäufer und Käufer Sie finden – oder Ihre Konkurrenz.
        </p>

        <p>
          Local SEO für Immobilienmakler unterscheidet sich fundamental von anderen Branchen: Sie 
          benötigen Sichtbarkeit in mehreren Stadtteilen, müssen sowohl Käufer als auch Verkäufer 
          ansprechen, und konkurrieren mit großen Portalen wie ImmobilienScout24. Dieser Guide zeigt 
          Ihnen, wie Sie trotzdem gefunden werden.
        </p>

        <p>
          Ob Sie ein etabliertes Maklerbüro führen oder als Solo-Makler durchstarten: Die Strategien 
          in diesem Artikel helfen Ihnen, mehr qualifizierte Anfragen zu generieren und sich als 
          lokaler Experte zu positionieren.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Was Sie in diesem Artikel lernen:
          </h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Google Business Profil für Makler perfekt optimieren</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Objekt-Landingpages erstellen, die ranken</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Stadtteil-Keywords strategisch nutzen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Bewertungen von Käufern und Verkäufern sammeln</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Content-Strategie mit Marktberichten aufbauen</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA />

      {/* Branchenbesonderheiten */}
      <section id="besonderheiten" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-primary" />
          Besonderheiten der Immobilienbranche im Local SEO
        </h2>

        <p>
          Die Immobilienbranche bringt einzigartige Herausforderungen für Local SEO mit sich. Anders 
          als ein Restaurant oder Friseur bedienen Sie mehrere Kundengruppen mit völlig unterschiedlichen 
          Suchintentionen.
        </p>

        <h3>Zwei Zielgruppen – zwei Strategien</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-400">
                🏠 Verkäufer-Keywords (höherer Wert)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• "Immobilienmakler [Stadt]"</li>
                <li>• "Haus verkaufen [Stadtteil]"</li>
                <li>• "Immobilienbewertung kostenlos"</li>
                <li>• "Was ist meine Wohnung wert"</li>
                <li>• "Makler Empfehlung [Stadt]"</li>
                <li>• "Immobilie verkaufen Tipps"</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Verkäufer bringen Ihnen Listings – die Grundlage Ihres Geschäfts.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">
                🔍 Käufer-Keywords (höheres Volumen)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• "Wohnung kaufen [Stadt]"</li>
                <li>• "Haus mit Garten [Stadtteil]"</li>
                <li>• "Eigentumswohnung [Bezirk]"</li>
                <li>• "Neubau Projekt [Stadt]"</li>
                <li>• "Immobilien [Stadtteil] Preise"</li>
                <li>• "Erstbezug [Stadt]"</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Käufer können zu Verkäufern werden – langfristige Beziehungen aufbauen.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3>Die Portal-Dominanz überwinden</h3>

        <p>
          Bei vielen Immobilien-Suchanfragen dominieren große Portale die ersten Plätze. 
          <strong> Ihre Chance liegt in der lokalen Spezialisierung:</strong>
        </p>

        <ul>
          <li><strong>Hyperlokal werden:</strong> "Wohnung kaufen Berlin" ist verloren – aber "Altbauwohnung Prenzlauer Berg Helmholtzplatz" ist erreichbar</li>
          <li><strong>Expertise zeigen:</strong> Stadtteil-Guides, Marktberichte, lokale Insights</li>
          <li><strong>Persönlichkeit:</strong> Portale sind anonym – Sie haben ein Gesicht</li>
          <li><strong>Google Maps nutzen:</strong> Im Local Pack können Portale nicht erscheinen</li>
        </ul>

        <h3>Saisonalität berücksichtigen</h3>

        <p>
          Die Immobiliennachfrage schwankt im Jahresverlauf. Planen Sie Ihre Content-Strategie entsprechend:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Monat</th>
                <th className="border p-3 text-left">Nachfrage</th>
                <th className="border p-3 text-left">Content-Fokus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Januar-Februar</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge></td>
                <td className="border p-3">Jahresausblick, Marktprognosen</td>
              </tr>
              <tr>
                <td className="border p-3">März-Juni</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Hoch</Badge></td>
                <td className="border p-3">Objekt-Highlights, Besichtigungstipps</td>
              </tr>
              <tr>
                <td className="border p-3">Juli-August</td>
                <td className="border p-3"><Badge className="bg-yellow-100 text-yellow-800">Mittel</Badge></td>
                <td className="border p-3">Stadtteil-Guides, Ferienberatung</td>
              </tr>
              <tr>
                <td className="border p-3">September-November</td>
                <td className="border p-3"><Badge className="bg-green-100 text-green-800">Hoch</Badge></td>
                <td className="border p-3">Vor-Weihnachts-Push, Verkäufer-Akquise</td>
              </tr>
              <tr>
                <td className="border p-3">Dezember</td>
                <td className="border p-3"><Badge className="bg-red-100 text-red-800">Niedrig</Badge></td>
                <td className="border p-3">Jahresrückblick, Planungscontent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-immobilienmakler" position="middle" />

      {/* Google Business */}
      <section id="google-business" className="mb-12">
        <h2 className="flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Google Business Profil für Immobilienmakler optimieren
        </h2>

        <p>
          Ihr Google Business Profil ist Ihre digitale Visitenkarte. Bei lokalen Suchanfragen wie 
          "Immobilienmakler in der Nähe" erscheint das Local Pack noch vor den organischen Ergebnissen.
        </p>

        <h3>Die perfekte Kategorie-Wahl</h3>

        <div className="bg-muted p-6 rounded-lg my-6">
          <p className="font-semibold mb-3">Empfohlene Kategorien:</p>
          <ul className="space-y-2">
            <li><strong>Hauptkategorie:</strong> Immobilienmakler</li>
            <li><strong>Nebenkategorie 1:</strong> Immobilienbewertung</li>
            <li><strong>Nebenkategorie 2:</strong> Immobilienverwaltung (falls zutreffend)</li>
            <li><strong>Nebenkategorie 3:</strong> Vermietung (falls zutreffend)</li>
          </ul>
        </div>

        <h3>Profilbeschreibung optimieren</h3>

        <p>
          Sie haben 750 Zeichen, um potenzielle Kunden zu überzeugen. Strukturieren Sie Ihre Beschreibung so:
        </p>

        <ol>
          <li><strong>Einstieg mit Keyword:</strong> "Als erfahrener Immobilienmakler in [Stadt] begleiten wir..."</li>
          <li><strong>Leistungen nennen:</strong> Verkauf, Vermietung, Bewertung</li>
          <li><strong>Stadtteile erwähnen:</strong> "Spezialisiert auf [Stadtteil 1], [Stadtteil 2], [Stadtteil 3]"</li>
          <li><strong>USP hervorheben:</strong> Was macht Sie besonders?</li>
          <li><strong>Call-to-Action:</strong> "Kostenlose Erstberatung vereinbaren"</li>
        </ol>

        <h3>Fotos strategisch einsetzen</h3>

        <p>
          Profile mit mehr als 100 Fotos erhalten 520% mehr Anrufe als der Durchschnitt. Zeigen Sie:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Team & Büro</p>
              <p className="text-sm text-muted-foreground">Authentische Teamfotos, Büroräume</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Referenz-Objekte</p>
              <p className="text-sm text-muted-foreground">Verkaufte Immobilien (mit Erlaubnis)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="font-semibold">Stadtteile</p>
              <p className="text-sm text-muted-foreground">Impressionen aus Ihren Einsatzgebieten</p>
            </CardContent>
          </Card>
        </div>

        <h3>Google Posts für Immobilienmakler</h3>

        <p>
          Nutzen Sie Google Posts, um aktiv zu bleiben und Ihre Expertise zu zeigen:
        </p>

        <ul>
          <li><strong>Neue Objekte:</strong> "Neues Angebot: 3-Zimmer-Altbau in [Stadtteil]"</li>
          <li><strong>Erfolge:</strong> "Erfolgreich vermittelt: Einfamilienhaus in [Stadtteil]" (mit Erlaubnis)</li>
          <li><strong>Markt-Updates:</strong> "Immobilienpreise in [Stadt] – Quartalsbericht"</li>
          <li><strong>Tipps:</strong> "5 Fehler beim Hausverkauf vermeiden"</li>
          <li><strong>Events:</strong> "Tag der offenen Tür am Samstag"</li>
        </ul>
      </section>

      {/* Objekt-Landingpages */}
      <section id="objekt-landingpages" className="mb-12">
        <h2 className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Objekt-Landingpages, die bei Google ranken
        </h2>

        <p>
          Während Portale die generischen Suchanfragen dominieren, können Sie mit individuellen 
          Objekt-Landingpages für spezifische Suchanfragen ranken.
        </p>

        <h3>Wann lohnt sich eine eigene Landingpage?</h3>

        <ul>
          <li><strong>Premium-Objekte:</strong> Häuser über 500.000€, Luxuswohnungen</li>
          <li><strong>Exklusive Alleinaufträge:</strong> Nur bei Ihnen verfügbar</li>
          <li><strong>Besondere Immobilien:</strong> Denkmalschutz, Bauernhof, Loft</li>
          <li><strong>Neubau-Projekte:</strong> Mehrere Einheiten, längerer Verkaufszyklus</li>
        </ul>

        <h3>Optimale URL-Struktur</h3>

        <div className="bg-muted p-6 rounded-lg my-6 font-mono text-sm">
          <p className="text-green-600">✓ ihremakler.de/objekte/3-zimmer-altbau-prenzlauer-berg</p>
          <p className="text-green-600">✓ ihremakler.de/immobilien/berlin-charlottenburg/villa-grunewald</p>
          <p className="text-red-600 mt-2">✗ ihremakler.de/expose?id=12345</p>
          <p className="text-red-600">✗ ihremakler.de/objekt/obj-2024-0815</p>
        </div>

        <h3>Content-Elemente einer Objekt-Landingpage</h3>

        <ol>
          <li><strong>SEO-Titel:</strong> "[Objekttyp] in [Stadtteil] | [Stadt] | [Ihr Name]"</li>
          <li><strong>Strukturierte Daten:</strong> RealEstateListing Schema</li>
          <li><strong>Hochwertige Fotos:</strong> Mindestens 15-20 professionelle Bilder</li>
          <li><strong>Virtuelle Tour:</strong> 360°-Rundgang oder Video</li>
          <li><strong>Detaillierte Beschreibung:</strong> Mindestens 500 Wörter mit Keywords</li>
          <li><strong>Stadtteil-Info:</strong> Lage, Infrastruktur, Anbindung</li>
          <li><strong>Grundriss:</strong> Interaktiv oder als Download</li>
          <li><strong>Energieausweis:</strong> Pflichtangaben prominent platzieren</li>
          <li><strong>Kontaktformular:</strong> Sofort-Anfrage ohne Hürden</li>
        </ol>

        <h3>Was passiert nach dem Verkauf?</h3>

        <p>
          <strong>Löschen Sie verkaufte Objekte nicht sofort!</strong> Stattdessen:
        </p>

        <ol>
          <li>Markieren Sie die Seite als "Verkauft" mit Testimonial des Käufers</li>
          <li>Zeigen Sie ähnliche verfügbare Objekte</li>
          <li>Leiten Sie nach 3-6 Monaten per 301-Redirect auf die Stadtteil-Seite weiter</li>
          <li>Nutzen Sie den Traffic für Lead-Generierung</li>
        </ol>
      </section>

      {/* Stadtteil-Keywords */}
      <section id="stadtteil-keywords" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Search className="h-8 w-8 text-primary" />
          Stadtteil-Keywords strategisch nutzen
        </h2>

        <p>
          Während "Immobilienmakler Berlin" extrem umkämpft ist, haben Stadtteil-Keywords oft 
          weniger Wettbewerb und höhere Conversion-Raten – denn die Suchenden wissen bereits, 
          wo sie kaufen oder verkaufen wollen.
        </p>

        <h3>Keyword-Struktur für Stadtteile</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Keyword-Typ</th>
                <th className="border p-3 text-left">Beispiele</th>
                <th className="border p-3 text-left">Suchintention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Makler + Stadtteil</td>
                <td className="border p-3">"Makler Prenzlauer Berg", "Immobilienmakler Schwabing"</td>
                <td className="border p-3">Verkäufer sucht lokalen Experten</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Kaufen + Stadtteil</td>
                <td className="border p-3">"Wohnung kaufen Friedenau", "Haus kaufen Bogenhausen"</td>
                <td className="border p-3">Käufer mit konkretem Zielgebiet</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Preis + Stadtteil</td>
                <td className="border p-3">"Immobilienpreise Eppendorf", "Quadratmeterpreis Westend"</td>
                <td className="border p-3">Verkäufer recherchiert Marktwert</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Objekttyp + Stadtteil</td>
                <td className="border p-3">"Altbau Kreuzberg", "Villa Grunewald"</td>
                <td className="border p-3">Käufer mit Präferenz</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Stadtteil-Seiten erstellen</h3>

        <p>
          Für jeden Stadtteil, in dem Sie aktiv sind, erstellen Sie eine dedizierte Seite mit:
        </p>

        <ul>
          <li><strong>Marktüberblick:</strong> Durchschnittspreise, Preisentwicklung</li>
          <li><strong>Stadtteil-Portrait:</strong> Charakter, Geschichte, Atmosphäre</li>
          <li><strong>Infrastruktur:</strong> Schulen, Einkaufen, ÖPNV, Grünflächen</li>
          <li><strong>Zielgruppen:</strong> Für wen ist dieser Stadtteil ideal?</li>
          <li><strong>Aktuelle Objekte:</strong> Dynamisch aus Ihrem Portfolio</li>
          <li><strong>Verkaufte Referenzen:</strong> Ihre Expertise im Stadtteil belegen</li>
          <li><strong>Lokale Insights:</strong> Geheimtipps, die nur Locals kennen</li>
        </ul>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Star className="h-8 w-8 text-yellow-500" />
          Bewertungen von Käufern und Verkäufern sammeln
        </h2>

        <p>
          Immobilientransaktionen sind emotionale Erlebnisse. Zufriedene Kunden geben gerne 
          Bewertungen – wenn Sie sie richtig fragen. Die Herausforderung: Der Kaufprozess dauert 
          oft Monate, und das richtige Timing ist entscheidend.
        </p>

        <h3>Der perfekte Zeitpunkt für die Bewertungsanfrage</h3>

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200">Nach dem Notartermin (Verkäufer)</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Die Erleichterung und Freude ist am größten. Senden Sie am nächsten Tag eine persönliche E-Mail.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200">Nach der Schlüsselübergabe (Käufer)</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Der emotionale Höhepunkt für Käufer. Gratulieren Sie und bitten Sie um Feedback.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
            <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-200">Nach 3 Monaten im neuen Zuhause</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Follow-up: Wie gefällt das neue Zuhause? Perfekte Gelegenheit für Bewertung und Empfehlung.
              </p>
            </div>
          </div>
        </div>

        <h3>E-Mail-Vorlage für Bewertungsanfrage</h3>

        <div className="bg-muted p-6 rounded-lg my-6">
          <p className="font-semibold mb-3">Betreff: Herzlichen Glückwunsch zu Ihrer neuen Immobilie, [Name]!</p>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
{`Liebe/r [Name],

herzlichen Glückwunsch noch einmal zum erfolgreichen Abschluss! Es war mir eine Freude, Sie bei diesem wichtigen Schritt zu begleiten.

Wenn Sie mit meiner Beratung zufrieden waren, würde ich mich sehr über eine kurze Bewertung bei Google freuen. Das hilft anderen Käufern/Verkäufern, einen vertrauenswürdigen Makler zu finden.

➡️ [Direkter Link zu Ihrem Google-Profil]

Natürlich stehe ich Ihnen auch in Zukunft gerne zur Verfügung – sei es für Fragen zur Immobilie oder wenn Freunde und Familie einen Makler suchen.

Herzliche Grüße,
[Ihr Name]`}
          </p>
        </div>

        <h3>Bewertungen auf verschiedenen Plattformen</h3>

        <ul>
          <li><strong>Google:</strong> Wichtigste Plattform für Local SEO – Priorität #1</li>
          <li><strong>ImmobilienScout24:</strong> Maklerbewertungen beeinflussen Ihre Sichtbarkeit im Portal</li>
          <li><strong>Kununu/LinkedIn:</strong> Für B2B-Kontakte und Arbeitgebermarke</li>
          <li><strong>Facebook:</strong> Für lokale Community und ältere Zielgruppen</li>
          <li><strong>ProvenExpert:</strong> Aggregiert Bewertungen von mehreren Quellen</li>
        </ul>
      </section>

      <BlogCTAABTest articleSlug="local-seo-immobilienmakler" position="end" />

      {/* Schema Markup */}
      <section id="schema-markup" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Globe className="h-8 w-8 text-primary" />
          Schema Markup für Immobilienmakler
        </h2>

        <p>
          Strukturierte Daten helfen Google, Ihre Inhalte besser zu verstehen und können zu 
          Rich Snippets in den Suchergebnissen führen.
        </p>

        <h3>RealEstateAgent Schema</h3>

        <div className="bg-muted p-4 rounded-lg my-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Mustermann Immobilien",
  "description": "Ihr lokaler Immobilienmakler in Berlin",
  "url": "https://www.mustermann-immobilien.de",
  "telephone": "+49 30 12345678",
  "email": "info@mustermann-immobilien.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Berlin",
    "postalCode": "10115",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.5200",
    "longitude": "13.4050"
  },
  "areaServed": [
    {"@type": "City", "name": "Berlin"},
    {"@type": "AdministrativeArea", "name": "Prenzlauer Berg"},
    {"@type": "AdministrativeArea", "name": "Mitte"}
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}`}</pre>
        </div>

        <h3>RealEstateListing für Objekte</h3>

        <p>
          Für einzelne Immobilienangebote verwenden Sie das RealEstateListing-Schema:
        </p>

        <div className="bg-muted p-4 rounded-lg my-6 overflow-x-auto">
          <pre className="text-sm">{`{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "3-Zimmer-Altbau in Prenzlauer Berg",
  "description": "Charmante Altbauwohnung mit Stuck...",
  "url": "https://www.mustermann-immobilien.de/objekte/...",
  "datePosted": "2026-01-15",
  "price": "450000",
  "priceCurrency": "EUR",
  "numberOfRooms": "3",
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": "95",
    "unitCode": "MTK"
  }
}`}</pre>
        </div>
      </section>

      {/* Content-Strategie */}
      <section id="content-strategie" className="mb-12">
        <h2>Content-Strategie: Marktberichte und Stadtteil-Guides</h2>

        <p>
          Content-Marketing positioniert Sie als lokalen Experten. Potenzielle Verkäufer wollen 
          sehen, dass Sie den Markt kennen, bevor sie Ihnen ihr wichtigstes Asset anvertrauen.
        </p>

        <h3>Monatliche Marktberichte</h3>

        <p>
          Ein regelmäßiger Marktbericht zeigt Expertise und generiert organischen Traffic:
        </p>

        <ul>
          <li><strong>Durchschnittspreise:</strong> Preis pro m² für Wohnungen und Häuser</li>
          <li><strong>Preisentwicklung:</strong> Vergleich zum Vormonat und Vorjahr</li>
          <li><strong>Verweildauer:</strong> Wie lange stehen Objekte zum Verkauf?</li>
          <li><strong>Angebot vs. Nachfrage:</strong> Ist es ein Käufer- oder Verkäufermarkt?</li>
          <li><strong>Top-Transaktionen:</strong> Bemerkenswerte Verkäufe (anonymisiert)</li>
          <li><strong>Ausblick:</strong> Ihre Prognose für die kommenden Monate</li>
        </ul>

        <h3>Stadtteil-Guides</h3>

        <p>
          Umfassende Stadtteil-Portraits ranken für wertvolle Long-Tail-Keywords:
        </p>

        <ul>
          <li>"Leben in [Stadtteil]" – Atmosphäre, Kultur, Gastronomie</li>
          <li>"Immobilienpreise [Stadtteil]" – Marktdaten und Entwicklung</li>
          <li>"[Stadtteil] für Familien" – Schulen, Spielplätze, Sicherheit</li>
          <li>"Investieren in [Stadtteil]" – Rendite, Entwicklungspotenzial</li>
        </ul>

        <h3>Content-Ideen mit SEO-Potenzial</h3>

        <ul>
          <li>Checkliste: "Was kostet ein Hausverkauf wirklich?"</li>
          <li>Ratgeber: "Immobilie erben – was nun?"</li>
          <li>Vergleich: "Makler vs. Privatverkauf"</li>
          <li>FAQ: "Die 20 häufigsten Fragen beim Hauskauf"</li>
          <li>Analyse: "Lohnt sich Kaufen oder Mieten in [Stadt]?"</li>
        </ul>
      </section>

      {/* Mehrere Standorte */}
      <section id="mehrere-standorte" className="mb-12">
        <h2>Local SEO mit mehreren Standorten</h2>

        <p>
          Wenn Sie in mehreren Stadtteilen oder Städten aktiv sind, brauchen Sie eine 
          Multi-Location-Strategie.
        </p>

        <h3>Wann ein eigenes Google Business Profil?</h3>

        <ul>
          <li><strong>Physisches Büro:</strong> Jedes Büro mit eigener Adresse bekommt ein Profil</li>
          <li><strong>Service-Area:</strong> Wenn Sie ohne Büro in einem Gebiet arbeiten, nutzen Sie Service-Area-Business</li>
          <li><strong>Franchise:</strong> Jede Niederlassung braucht ein eigenes Profil</li>
        </ul>

        <h3>Website-Struktur für mehrere Gebiete</h3>

        <div className="bg-muted p-6 rounded-lg my-6 font-mono text-sm">
          <p className="text-green-600">✓ ihremakler.de/berlin/</p>
          <p className="text-green-600">✓ ihremakler.de/berlin/prenzlauer-berg/</p>
          <p className="text-green-600">✓ ihremakler.de/berlin/charlottenburg/</p>
          <p className="text-green-600">✓ ihremakler.de/potsdam/</p>
        </div>

        <p>
          Jede Standortseite braucht einzigartigen Content – kein Copy-Paste mit ausgetauschtem 
          Städtenamen!
        </p>
      </section>

      {industryStats.immobilienmakler?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.immobilienmakler} />

      <IndustryBenchmarkTable data={industryBenchmarkData.immobilienmakler} />

      <IndustryComparisonTable data={industryComparisonData.immobilienmakler} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufige Fragen: Local SEO für Immobilienmakler</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie wichtig ist Local SEO für Immobilienmakler?</AccordionTrigger>
            <AccordionContent>
              Extrem wichtig. 97% aller Immobiliensuchen starten online, und die Mehrheit der Käufer und 
              Verkäufer sucht nach einem lokalen Makler. Ohne starke lokale Sichtbarkeit verlieren Sie 
              potenzielle Kunden an die Konkurrenz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Soll ich für jedes Objekt eine eigene Landingpage erstellen?</AccordionTrigger>
            <AccordionContent>
              Für Premium-Objekte und exklusive Listings lohnt sich eine eigene Landingpage. Für 
              Standard-Objekte reicht ein Eintrag auf Ihrer Objekt-Übersichtsseite. Wichtig: Entfernen 
              Sie verkaufte Objekte nicht sofort, sondern nutzen Sie 301-Weiterleitungen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Welche Google Business Kategorie ist für Makler richtig?</AccordionTrigger>
            <AccordionContent>
              Die Hauptkategorie sollte "Immobilienmakler" sein. Als Nebenkategorien können Sie 
              "Immobilienverwaltung", "Hausverwaltung" oder "Immobilienbewertung" hinzufügen, je 
              nach Ihrem Leistungsspektrum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Wie bekomme ich Bewertungen von Käufern und Verkäufern?</AccordionTrigger>
            <AccordionContent>
              Bitten Sie nach erfolgreichem Notartermin um eine Bewertung. Senden Sie eine personalisierte 
              E-Mail mit direktem Link zu Ihrem Google-Profil. Timing ist entscheidend: Die Euphorie nach 
              dem erfolgreichen Abschluss ist der beste Moment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Sollte ich Stadtteil-Seiten für jedes Viertel erstellen?</AccordionTrigger>
            <AccordionContent>
              Ja, wenn Sie in diesem Stadtteil aktiv sind. Erstellen Sie detaillierte Stadtteil-Guides 
              mit Infos zu Preisen, Infrastruktur, Schulen und Verkehrsanbindung. Diese Seiten ranken 
              oft für wertvolle Long-Tail-Keywords.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Was kostet Local SEO für Immobilienmakler?</AccordionTrigger>
            <AccordionContent>
              DIY: Ihre Zeit + ca. 100-200€/Monat für Tools und Verzeichnisse. Agentur: 500-2.000€/Monat 
              je nach Umfang. Der ROI ist bei einem einzigen gewonnenen Verkaufsauftrag bereits positiv.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Wie lange dauert es, bis Local SEO Ergebnisse zeigt?</AccordionTrigger>
            <AccordionContent>
              Erste Verbesserungen im Google Business Ranking sind oft nach 4-8 Wochen sichtbar. Für 
              organische Rankings in umkämpften Märkten rechnen Sie mit 6-12 Monaten. Kontinuierliche 
              Optimierung ist entscheidend.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="praxisbeispiel" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Praxisbeispiel: Makler wird Stadtteil-Experte</h2>
        {industryCaseStudies.immobilienmakler.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <IndustryRankingChallenges config={industryRankingConfigs.immobilienmakler} />
      <HelpfulnessWidget articleSlug="local-seo-immobilienmakler" />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoImmobilienmakler;