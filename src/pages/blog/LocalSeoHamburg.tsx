import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Anchor, Users, Building2, TrendingUp, MapPin, CheckCircle2, Ship, Coffee, Briefcase, Calendar, Globe, Star } from "lucide-react";

const LocalSeoHamburg = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-hamburg", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "stadtteile", title: "Hamburger Stadtteile" },
    { id: "verzeichnisse", title: "Lokale Verzeichnisse" },
    { id: "events-marketing", title: "Events & Marketing-Kalender" },
    { id: "medien-pr", title: "Hamburger Medien & PR" },
    { id: "branchen-tipps", title: "Branchen-spezifische Tipps" },
    { id: "wettbewerb", title: "Wettbewerbsanalyse" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Warum ist Local SEO in Hamburg besonders wichtig?", answer: "Hamburg ist mit 1,9 Millionen Einwohnern Deutschlands zweitgrößte Stadt. Die hohe Bevölkerungsdichte und starke Kaufkraft machen lokale Sichtbarkeit extrem wertvoll. Gleichzeitig ist der Wettbewerb in vielen Branchen intensiv." },
    { question: "Welche Hamburger Stadtteile haben das höchste Suchvolumen?", answer: "Die beliebtesten Stadtteile für lokale Suchen sind: Altona, Eimsbüttel, Winterhude, Eppendorf, St. Georg, Ottensen und die HafenCity." },
    { question: "Welche lokalen Verzeichnisse sind in Hamburg wichtig?", answer: "Neben Google Business sind hamburg.de, Hamburger Abendblatt Branchenbuch, Hamburger Morgenpost Verzeichnis und Kiekmo wichtig." },
    { question: "Wie nutze ich den Hafengeburtstag für Local SEO?", answer: "Der Hafengeburtstag ist das größte Hafenfest der Welt mit über 1 Million Besuchern. Erstellen Sie saisonalen Content und nutzen Sie lokale Keywords wie 'Hafengeburtstag [Ihr Service]'." },
    { question: "Wie unterscheidet sich SEO für Hamburg Nord und Süd?", answer: "Hamburg Nord hat höhere Kaufkraft, Hamburg Süd wächst dynamisch. Passen Sie Keywords und Content an die jeweilige Zielgruppe an." },
    { question: "Ist der Hamburger DOM relevant für Local SEO?", answer: "Ja, der DOM findet dreimal jährlich statt und zieht Millionen Besucher an. Besonders für Gastronomie und Einzelhandel in Feldstraßen-Nähe ist saisonaler Content sinnvoll." },
    { question: "Welche Keywords funktionieren in Hamburg besonders gut?", answer: "Hamburger nutzen oft lokale Begriffe wie 'an der Elbe', 'am Hafen', 'Alster'. Auch Stadtteil-spezifische Keywords wie 'Schanze' statt 'Sternschanze' werden gesucht." },
    { question: "Wie wichtig ist die Elbphilharmonie für lokales Marketing?", answer: "Die Elbphilharmonie generiert viel Suchverkehr. Unternehmen in der HafenCity können von Keywords wie 'Restaurant nähe Elbphilharmonie' profitieren." },
    { question: "Welche Hamburger Medien sind für Local PR relevant?", answer: "Hamburger Abendblatt, MOPO, NDR Hamburg Journal, Hamburg 1, SZENE Hamburg und diverse Stadtteilblogs." },
  ];


  const hamburgCitySchema = {
    "@context": "https://schema.org",
    "@type": "City",
    "name": "Hamburg",
    "alternateName": "Freie und Hansestadt Hamburg",
    "description": "Local SEO Guide für Hamburg",
    "population": "1900000",
    "containedInPlace": {
      "@type": "Country",
      "name": "Deutschland"
    }
  };

  const stadtteile = [
    { name: "Altona", suchvolumen: "Hoch", charakter: "Alternativ, kreativ", tip: "Fokus auf nachhaltige, faire Angebote" },
    { name: "Eimsbüttel", suchvolumen: "Hoch", charakter: "Familiär, grün", tip: "Familien-Keywords, Uni-Nähe nutzen" },
    { name: "Winterhude", suchvolumen: "Mittel-Hoch", charakter: "Gehoben, Alster-Lage", tip: "Premium-Positionierung" },
    { name: "Eppendorf", suchvolumen: "Mittel-Hoch", charakter: "Exklusiv, UKE-Nähe", tip: "Gesundheits-Keywords relevant" },
    { name: "St. Georg", suchvolumen: "Hoch", charakter: "Divers, Hauptbahnhof", tip: "Tourismus + LGBT-Community" },
    { name: "Ottensen", suchvolumen: "Hoch", charakter: "Hip, Gastronomie", tip: "Lifestyle, Bio, Craft" },
    { name: "HafenCity", suchvolumen: "Mittel", charakter: "Modern, Elbphilharmonie", tip: "Premium, Architektur, Events" },
    { name: "Schanzenviertel", suchvolumen: "Hoch", charakter: "Alternativ, Nachtleben", tip: "Jung, trendy, vegan" },
    { name: "Barmbek", suchvolumen: "Mittel", charakter: "Aufstrebend", tip: "Preis-Leistung betonen" },
    { name: "Harburg", suchvolumen: "Mittel", charakter: "Technologie-Campus", tip: "B2B, Startups, TUHH" }
  ];

  const hamburgEvents = [
    { name: "Hafengeburtstag", monat: "Mai", besucher: "1+ Mio.", relevanz: "Gastronomie, Tourismus, Events" },
    { name: "Hamburger DOM", monat: "März, Juli, Nov", besucher: "10+ Mio./Jahr", relevanz: "Alle Branchen, besonders Feldstraße" },
    { name: "Alstervergnügen", monat: "August", besucher: "500.000", relevanz: "Einzelhandel, Gastronomie City" },
    { name: "Hamburg Marathon", monat: "April", besucher: "750.000", relevanz: "Sport, Fitness, Hotels" },
    { name: "Weihnachtsmärkte", monat: "Nov-Dez", besucher: "5+ Mio.", relevanz: "Handel, Gastronomie, Tourismus" },
    { name: "Reeperbahn Festival", monat: "September", besucher: "50.000+", relevanz: "Musik, Kultur, Nachtleben" }
  ];

  const hamburgVerzeichnisse = [
    { name: "hamburg.de", typ: "Stadt-Portal", prioritaet: "Hoch", link: "hamburg.de/wirtschaft" },
    { name: "Hamburger Abendblatt", typ: "Branchenbuch", prioritaet: "Hoch", link: "Kleinanzeigen" },
    { name: "MOPO Branchenbuch", typ: "Verzeichnis", prioritaet: "Mittel", link: "mopo.de" },
    { name: "Kiekmo", typ: "Lifestyle", prioritaet: "Mittel", link: "kiekmo.hamburg" },
    { name: "IHK Hamburg", typ: "Firmendatenbank", prioritaet: "Hoch", link: "ihk.de" },
    { name: "Handelskammer Hamburg", typ: "B2B", prioritaet: "Hoch", link: "hk24.de" }
  ];

  return (
    <ArticleLayout 
      article={article} 
      tocItems={tocItems}
      faqItems={faqItems}
      additionalSchema={hamburgCitySchema}
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 not-prose">
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-3xl font-bold text-primary">1,9 Mio.</p>
            <p className="text-sm text-muted-foreground">Einwohner</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-3xl font-bold text-primary">104</p>
            <p className="text-sm text-muted-foreground">Stadtteile</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <Building2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
            <p className="text-3xl font-bold text-primary">120k+</p>
            <p className="text-sm text-muted-foreground">Unternehmen</p>
          </CardContent>
        </Card>
        <Card className="text-center border-primary/20">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-3xl font-bold text-primary">#2</p>
            <p className="text-sm text-muted-foreground">Wirtschaftskraft DE</p>
          </CardContent>
        </Card>
      </div>

      {/* Introduction */}
      <section id="intro" className="mb-12">
        <p className="lead text-xl text-muted-foreground mb-6">
          <strong>Hamburg – das Tor zur Welt und einer der wettbewerbsintensivsten Märkte Deutschlands.</strong> Mit 
          1,9 Millionen Einwohnern, hoher Kaufkraft und 104 Stadtteilen bietet die Hansestadt enormes Potenzial 
          für lokale Unternehmen. Aber nur, wenn Sie bei Google gefunden werden.
        </p>

        <p>
          Dieser umfassende Guide zeigt Ihnen, wie Sie Local SEO in Hamburg erfolgreich umsetzen. Von der 
          Stadtteil-Strategie über lokale Verzeichnisse bis zum Marketing-Kalender – alles, was Sie für 
          mehr lokale Sichtbarkeit in der Elbmetropole brauchen.
        </p>

        <p>
          Ob Sie ein Restaurant am Hafen betreiben, einen Handwerksbetrieb in Barmbek führen oder 
          eine Agentur in der HafenCity haben: Die Strategien in diesem Artikel helfen Ihnen, mehr 
          Hamburger Kunden zu gewinnen.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Was Sie in diesem Local SEO Hamburg Artikel lernen:
          </h4>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Die wichtigsten Hamburger Stadtteile für Local SEO</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Lokale Hamburger Verzeichnisse und Portale</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Events wie Hafengeburtstag und DOM für Marketing nutzen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>PR-Möglichkeiten in Hamburger Medien</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-600" />
              <span>Branchen-spezifische Tipps für den Hamburger Markt</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA />

      {/* Stadtteile */}
      <section id="stadtteile" className="mb-12">
        <h2 className="flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          Hamburger Stadtteile: Wo sich Local SEO lohnt
        </h2>

        <p>
          Hamburg hat 104 Stadtteile in 7 Bezirken. Für Local SEO sind nicht alle gleich relevant. 
          Die Tabelle zeigt die wichtigsten Stadtteile für Ihre Keyword-Strategie:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Stadtteil</th>
                <th className="border p-3 text-left">Suchvolumen</th>
                <th className="border p-3 text-left">Charakter</th>
                <th className="border p-3 text-left">SEO-Tipp</th>
              </tr>
            </thead>
            <tbody>
              {stadtteile.map((stadtteil, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="border p-3 font-medium">{stadtteil.name}</td>
                  <td className="border p-3">
                    <Badge className={
                      stadtteil.suchvolumen === "Hoch" ? "bg-green-100 text-green-800" :
                      stadtteil.suchvolumen === "Mittel-Hoch" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }>
                      {stadtteil.suchvolumen}
                    </Badge>
                  </td>
                  <td className="border p-3">{stadtteil.charakter}</td>
                  <td className="border p-3">{stadtteil.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Hamburg Nord vs. Hamburg Süd</h3>

        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <Anchor className="h-5 w-5" /> Hamburg Nord (nördlich der Elbe)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Charakteristik:</strong> Etabliert, höhere Kaufkraft</li>
                <li>• <strong>Stadtteile:</strong> Eppendorf, Winterhude, Alstertal</li>
                <li>• <strong>Keywords:</strong> Premium, Qualität, exklusiv</li>
                <li>• <strong>Zielgruppe:</strong> Gehobenes Bürgertum, Familien</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-4 text-green-700 dark:text-green-400 flex items-center gap-2">
                <Ship className="h-5 w-5" /> Hamburg Süd (südlich der Elbe)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Charakteristik:</strong> Aufstrebend, dynamisch</li>
                <li>• <strong>Stadtteile:</strong> Harburg, Wilhelmsburg, Finkenwerder</li>
                <li>• <strong>Keywords:</strong> Günstig, modern, innovativ</li>
                <li>• <strong>Zielgruppe:</strong> Junge Familien, Startups, Studierende</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3>Stadtteil-Keywords effektiv nutzen</h3>

        <p>
          Hamburger suchen oft nach Stadtteil statt nach "Hamburg". So nutzen Sie das:
        </p>

        <ul>
          <li><strong>Kurznamen beachten:</strong> "Schanze" statt "Sternschanzenviertel", "Poppenbüttel" statt "Hamburg-Poppenbüttel"</li>
          <li><strong>Lokale Landmarks:</strong> "am Eppendorfer Baum", "nähe Landungsbrücken"</li>
          <li><strong>Hamburger Slang:</strong> "an der Alster", "am Hafen", "in Planten un Blomen"</li>
          <li><strong>Bezirks-Ebene:</strong> Für breitere Reichweite: "Altona", "Eimsbüttel", "Hamburg-Nord"</li>
        </ul>
      </section>

      <BlogCTAABTest articleSlug="local-seo-hamburg" position="middle" />

      {/* Lokale Verzeichnisse */}
      <section id="verzeichnisse" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Globe className="h-8 w-8 text-primary" />
          Lokale Hamburger Verzeichnisse
        </h2>

        <p>
          Neben Google Business sind lokale Verzeichnisse wichtig für Ihre Sichtbarkeit und 
          NAP-Konsistenz. Hamburg hat einige spezifische Portale, die Sie nicht übersehen sollten:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Verzeichnis</th>
                <th className="border p-3 text-left">Typ</th>
                <th className="border p-3 text-left">Priorität</th>
                <th className="border p-3 text-left">Bemerkung</th>
              </tr>
            </thead>
            <tbody>
              {hamburgVerzeichnisse.map((v, index) => (
                <tr key={index}>
                  <td className="border p-3 font-medium">{v.name}</td>
                  <td className="border p-3">{v.typ}</td>
                  <td className="border p-3">
                    <Badge className={v.prioritaet === "Hoch" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {v.prioritaet}
                    </Badge>
                  </td>
                  <td className="border p-3 text-sm">{v.link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Branchen-spezifische Hamburger Verzeichnisse</h3>

        <ul>
          <li><strong>Gastronomie:</strong> hamburg.de/restaurant, SZENE Hamburg, tipps.hamburg</li>
          <li><strong>Handwerk:</strong> Handwerkskammer Hamburg, mein-handwerker-hamburg.de</li>
          <li><strong>Gesundheit:</strong> Jameda (mit Hamburg-Filter), Ärztekammer Hamburg</li>
          <li><strong>Einzelhandel:</strong> hamburg-shopping.de, hamburg-mitte.de</li>
          <li><strong>B2B/Logistik:</strong> Hafen Hamburg, Unternehmensverband Hafen Hamburg</li>
        </ul>
      </section>

      {/* Events & Marketing-Kalender */}
      <section id="events-marketing" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Calendar className="h-8 w-8 text-primary" />
          Hamburger Events für saisonales Marketing
        </h2>

        <p>
          Hamburg hat einen prall gefüllten Veranstaltungskalender. Nutzen Sie diese Events für 
          saisonales Content-Marketing und lokale Relevanz:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Event</th>
                <th className="border p-3 text-left">Monat</th>
                <th className="border p-3 text-left">Besucher</th>
                <th className="border p-3 text-left">Relevant für</th>
              </tr>
            </thead>
            <tbody>
              {hamburgEvents.map((event, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="border p-3 font-medium">{event.name}</td>
                  <td className="border p-3">{event.monat}</td>
                  <td className="border p-3">{event.besucher}</td>
                  <td className="border p-3 text-sm">{event.relevanz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Content-Ideen für Hamburger Events</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <Card>
            <CardContent className="pt-6">
              <Ship className="h-8 w-8 mb-2 text-primary" />
              <h4 className="font-bold mb-2">Hafengeburtstag</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "Hafengeburtstag 2026: Die besten Plätze"</li>
                <li>• "Öffnungszeiten zum Hafengeburtstag"</li>
                <li>• "Anfahrt & Parken Hafengeburtstag"</li>
                <li>• Spezielle Angebote bewerben</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Star className="h-8 w-8 mb-2 text-primary" />
              <h4 className="font-bold mb-2">Hamburger DOM</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "DOM Hamburg: Öffnungszeiten & Preise"</li>
                <li>• "Familientag DOM – Sparangebote"</li>
                <li>• "Die neuen Fahrgeschäfte 2026"</li>
                <li>• Standort-bezogene Angebote</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3>Jahreskalender für Hamburg-Marketing</h3>

        <ul>
          <li><strong>Januar:</strong> Neujahrsangebote, Winterschlussverkauf</li>
          <li><strong>Februar:</strong> Valentinstag, Karneval (weniger relevant in HH)</li>
          <li><strong>März:</strong> Frühjahrs-DOM Start, Frühjahrsputz</li>
          <li><strong>April:</strong> Hamburg Marathon, Ostern</li>
          <li><strong>Mai:</strong> Hafengeburtstag (DAS Event!), Muttertag</li>
          <li><strong>Juni:</strong> Altonale, Schanzenfest</li>
          <li><strong>Juli:</strong> Sommer-DOM Start, Ferienstart</li>
          <li><strong>August:</strong> Alstervergnügen, Sommer in der Stadt</li>
          <li><strong>September:</strong> Reeperbahn Festival, Herbstbeginn</li>
          <li><strong>Oktober:</strong> Tag der Deutschen Einheit</li>
          <li><strong>November:</strong> Winter-DOM Start, Black Friday</li>
          <li><strong>Dezember:</strong> Weihnachtsmärkte, Jahresendgeschäft</li>
        </ul>
      </section>

      {/* Medien & PR */}
      <section id="medien-pr" className="mb-12">
        <h2 className="flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-primary" />
          Hamburger Medien für lokale PR
        </h2>

        <p>
          Lokale Backlinks von Hamburger Medien stärken Ihre Domain Authority und Local SEO. 
          Diese Medien sollten Sie auf dem Schirm haben:
        </p>

        <h3>Tageszeitungen</h3>

        <ul>
          <li><strong>Hamburger Abendblatt:</strong> Größte Hamburger Tageszeitung, erreicht gehobenes Publikum</li>
          <li><strong>Hamburger Morgenpost (MOPO):</strong> Boulevard, jüngere Zielgruppe, online stark</li>
          <li><strong>Die Zeit:</strong> Hauptsitz Hamburg, überregional aber lokal vernetzt</li>
        </ul>

        <h3>TV & Radio</h3>

        <ul>
          <li><strong>NDR Hamburg Journal:</strong> Tägliche regionale Nachrichten, hohe Reichweite</li>
          <li><strong>Hamburg 1:</strong> Lokalsender, gute Möglichkeit für Unternehmensbeiträge</li>
          <li><strong>Radio Hamburg:</strong> Meistgehörter Sender, für Events und Aktionen</li>
          <li><strong>NDR 90,3:</strong> Kultursender, für Kulturunternehmen relevant</li>
        </ul>

        <h3>Online & Magazine</h3>

        <ul>
          <li><strong>SZENE Hamburg:</strong> Lifestyle, Gastronomie, Kultur – ideal für B2C</li>
          <li><strong>Mit Vergnügen Hamburg:</strong> Junge Zielgruppe, Gastro-Tipps</li>
          <li><strong>hamburg.de:</strong> Offizielles Stadtportal, Pressemitteilungen möglich</li>
          <li><strong>Alster Radio:</strong> Online-Radio mit lokaler Community</li>
        </ul>

        <h3>Stadtteilblogs & lokale Portale</h3>

        <ul>
          <li>Eimsbütteler Nachrichten</li>
          <li>Eppendorfer</li>
          <li>Ottensen-Blog</li>
          <li>Winterhuder Markt</li>
          <li>Barmbek-Blog</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg my-6">
          <p className="font-semibold mb-2">💡 PR-Tipp:</p>
          <p className="text-sm text-muted-foreground">
            Lokale Medien suchen ständig nach Geschichten. Positionieren Sie sich als Experte für 
            Ihren Bereich und bieten Sie Interviews oder Gastbeiträge an. Eine Erwähnung im Hamburger 
            Abendblatt ist ein starkes Vertrauenssignal und bringt wertvollen Traffic.
          </p>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-hamburg" position="end" />

      {/* Branchen-spezifische Tipps */}
      <section id="branchen-tipps" className="mb-12">
        <h2>Branchen-spezifische Local SEO Tipps für Hamburg</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
                <Coffee className="h-5 w-5 text-primary" /> Gastronomie
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Hafenblick als USP:</strong> "Restaurant mit Elbblick" ist ein starkes Keyword</li>
                <li>• <strong>Event-Catering:</strong> DOM, Hafengeburtstag – saisonale Angebote promoten</li>
                <li>• <strong>Szene-Viertel:</strong> Schanze, Ottensen, St. Pauli für junge Zielgruppen</li>
                <li>• <strong>Spezialitäten:</strong> "Fischbrötchen Hamburg", "Labskaus" – lokale Gerichte</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
                <Building2 className="h-5 w-5 text-primary" /> Handwerk
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Altbau-Expertise:</strong> Hamburg hat viel Altbau – spezialisieren Sie sich</li>
                <li>• <strong>Hafennähe:</strong> Maritime Handwerke (Bootsbau, etc.) haben Nische</li>
                <li>• <strong>Notdienst:</strong> "Schlüsseldienst Hamburg Nacht" – 24/7-Keywords</li>
                <li>• <strong>Energetische Sanierung:</strong> Förderungen der Stadt Hamburg erwähnen</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
                <Briefcase className="h-5 w-5 text-primary" /> B2B & Dienstleistungen
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Hafen & Logistik:</strong> Hamburgs Wirtschaftsschwerpunkt – spezialisieren</li>
                <li>• <strong>Medien & Kreativ:</strong> Hamburg ist Medienstadt – Agenturen, Produktion</li>
                <li>• <strong>HafenCity:</strong> Moderne Büros, Startups – Innovation betonen</li>
                <li>• <strong>Handelskammer:</strong> Mitgliedschaft für Vertrauenssignal nutzen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wettbewerbsanalyse */}
      <section id="wettbewerb" className="mb-12">
        <h2>Wettbewerbsanalyse im Hamburger Markt</h2>

        <p>
          Hamburg ist nach München der zweitkompetitivste deutsche Markt für Local SEO. So analysieren 
          Sie Ihre Konkurrenz:
        </p>

        <h3>Schritt 1: Local Pack Analyse</h3>
        <p>
          Suchen Sie nach "[Ihre Branche] + [Stadtteil]" und notieren Sie die Top-3-Ergebnisse im 
          Local Pack:
        </p>
        <ul>
          <li>Wie viele Bewertungen haben sie?</li>
          <li>Welche Kategorien nutzen sie?</li>
          <li>Wie oft posten sie Google Posts?</li>
          <li>Welche Fotos zeigen sie?</li>
        </ul>

        <h3>Schritt 2: Organische Konkurrenz</h3>
        <p>
          Analysieren Sie die Websites der Top-Rankenden:
        </p>
        <ul>
          <li>Haben sie Stadtteil-Seiten?</li>
          <li>Wie ist ihre Content-Strategie?</li>
          <li>Welche lokalen Keywords nutzen sie?</li>
          <li>Woher kommen ihre Backlinks?</li>
        </ul>

        <h3>Schritt 3: Lücken finden</h3>
        <p>
          Suchen Sie nach ungenutzten Chancen:
        </p>
        <ul>
          <li>Stadtteile ohne starke Konkurrenz?</li>
          <li>Keywords, die niemand abdeckt?</li>
          <li>Hamburger Events ohne Content?</li>
          <li>Lokale Verzeichnisse, die Konkurrenten übersehen?</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufige Fragen: Local SEO in Hamburg</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Warum ist Local SEO in Hamburg besonders wichtig?</AccordionTrigger>
            <AccordionContent>
              Hamburg ist mit 1,9 Millionen Einwohnern Deutschlands zweitgrößte Stadt. Die hohe 
              Bevölkerungsdichte und starke Kaufkraft machen lokale Sichtbarkeit extrem wertvoll. 
              Gleichzeitig ist der Wettbewerb in vielen Branchen intensiv.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Welche Hamburger Stadtteile haben das höchste Suchvolumen?</AccordionTrigger>
            <AccordionContent>
              Die beliebtesten Stadtteile für lokale Suchen sind: Altona, Eimsbüttel, Winterhude, 
              Eppendorf, St. Georg, Ottensen und die HafenCity. Diese Stadtteile sollten Sie in 
              Ihrer Local-SEO-Strategie priorisieren.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie nutze ich den Hafengeburtstag für Local SEO?</AccordionTrigger>
            <AccordionContent>
              Der Hafengeburtstag (Anfang Mai) ist das größte Hafenfest der Welt mit über 1 Million 
              Besuchern. Erstellen Sie saisonalen Content, bieten Sie Event-bezogene Services an, 
              und nutzen Sie lokale Keywords wie "Hafengeburtstag [Ihr Service]".
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Welche lokalen Verzeichnisse sind in Hamburg wichtig?</AccordionTrigger>
            <AccordionContent>
              Neben Google Business sind hamburg.de, Hamburger Abendblatt Branchenbuch, MOPO-Verzeichnis 
              und Kiekmo wichtig. Auch die IHK Hamburg und lokale Branchenverbände bieten Verzeichnisse 
              mit wertvollen Backlinks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Soll ich mich auf die Innenstadt oder Stadtteile konzentrieren?</AccordionTrigger>
            <AccordionContent>
              Beides. Die Innenstadt (Altstadt, Neustadt, St. Georg) hat hohes Suchvolumen, aber auch 
              starken Wettbewerb. Stadtteile bieten oft bessere Ranking-Chancen. Ideale Strategie: 
              Stadtweite Präsenz plus Stadtteil-Spezialisierung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Was kostet Local SEO in Hamburg?</AccordionTrigger>
            <AccordionContent>
              Hamburg ist nach München der teuerste deutsche Markt für Local SEO. Der höhere 
              Wettbewerb bedeutet mehr Aufwand. Rechnen Sie mit 20-30% höheren Kosten als im 
              Bundesdurchschnitt, aber auch höherem ROI durch die starke Kaufkraft.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Wie wichtig ist die .hamburg Domain-Endung?</AccordionTrigger>
            <AccordionContent>
              Die .hamburg-TLD (seit 2014 verfügbar) kann ein lokales Signal sein, ist aber nicht 
              entscheidend für Rankings. Wichtiger sind lokale Inhalte, Google Business Optimierung 
              und konsistente NAP-Daten. Eine gute .de-Domain schlägt eine schlechte .hamburg-Domain.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-hamburg" />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoHamburg;