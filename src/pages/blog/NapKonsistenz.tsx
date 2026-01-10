import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import napKonsistenzImg from "@/assets/blog/nap-konsistenz.jpg";
import { 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  Building2, 
  Phone, 
  MapPin,
  Search,
  RefreshCw,
  Globe,
  FileText,
  TrendingUp,
  Shield
} from "lucide-react";

const NapKonsistenz = () => {
  const article = getArticleBySlug("nap-konsistenz-local-seo");

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-nap", title: "Was ist NAP?" },
    { id: "warum-wichtig", title: "Warum NAP-Konsistenz wichtig ist" },
    { id: "wichtige-verzeichnisse", title: "Die wichtigsten Verzeichnisse" },
    { id: "nap-audit", title: "NAP-Audit durchführen" },
    { id: "tools", title: "Tools für NAP-Management" },
    { id: "fehler-vermeiden", title: "Häufige Fehler vermeiden" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Was bedeutet NAP genau?",
      answer: "NAP steht für Name, Address, Phone – also den Unternehmensnamen, die vollständige Adresse und die Telefonnummer. Diese drei Datenpunkte sind die Grundlage für lokale Suchmaschinenoptimierung und müssen überall im Internet identisch sein."
    },
    {
      question: "Wie oft sollte ich meine NAP-Daten prüfen?",
      answer: "Wir empfehlen eine monatliche Überprüfung der wichtigsten 10-15 Verzeichnisse und eine vierteljährliche vollständige Prüfung aller Einträge. Nach einem Umzug oder Telefonnummernwechsel solltest du sofort alle Einträge aktualisieren."
    },
    {
      question: "Welche Verzeichnisse sind am wichtigsten für Deutschland?",
      answer: "Die wichtigsten deutschen Verzeichnisse sind: Google Business Profile, Bing Places, Apple Maps, Das Örtliche, Gelbe Seiten, GoLocal, Yelp, 11880, Branchenbuch Deutschland und meinestadt.de. Je nach Branche kommen spezialisierte Verzeichnisse hinzu."
    },
    {
      question: "Was tun bei Duplikaten in Verzeichnissen?",
      answer: "Duplikate müssen bereinigt werden, da sie Google verwirren. Fordere die Löschung des falschen Eintrags beim Verzeichnis an oder nutze die 'Als Inhaber eintragen'-Funktion, um Kontrolle zu erlangen und den Eintrag dann zu löschen oder zusammenzuführen."
    },
    {
      question: "Beeinflusst NAP mein Google Maps Ranking direkt?",
      answer: "Ja, NAP-Konsistenz ist einer der Top-10 lokalen Ranking-Faktoren. Google nutzt Übereinstimmungen in verschiedenen Quellen, um die Vertrauenswürdigkeit deiner Unternehmensdaten zu bewerten. Inkonsistenzen führen zu schlechteren Rankings."
    },
    {
      question: "Wie korrigiere ich falsche Einträge?",
      answer: "Melde dich bei jedem Verzeichnis an und aktualisiere die Daten manuell. Bei Verzeichnissen ohne Zugang kontaktiere den Support mit einem Nachweis (z.B. Gewerbeanmeldung). Nutze bei Google die 'Änderung vorschlagen'-Funktion für fremde Einträge."
    },
    {
      question: "Brauche ich ein kostenpflichtiges NAP-Tool?",
      answer: "Für kleine Unternehmen reicht manuelle Pflege. Ab 3+ Standorten oder begrenzter Zeit lohnt sich ein Tool wie Yext, Uberall oder Semrush Local. Diese automatisieren Updates und überwachen Inkonsistenzen."
    },
    {
      question: "Was kostet professionelles NAP-Management?",
      answer: "DIY ist kostenlos aber zeitaufwändig. Tools kosten 20-500€/Monat je nach Funktionsumfang. Agenturen berechnen 100-300€ einmalig für einen Audit plus 50-150€/Monat für laufende Pflege."
    },
    {
      question: "Wie lange dauert es, bis NAP-Änderungen wirken?",
      answer: "Google Business Updates wirken oft innerhalb von Stunden. Andere Verzeichnisse brauchen 1-4 Wochen. Die Auswirkung auf dein Ranking zeigt sich typischerweise nach 4-8 Wochen, wenn Google die konsistenten Daten neu bewertet hat."
    },
    {
      question: "Gilt NAP auch für Online-Only-Businesses?",
      answer: "Für reine Online-Businesses ohne lokalen Bezug ist NAP weniger relevant. Sobald du aber lokale Kunden ansprechen willst oder ein Büro hast, wird NAP-Konsistenz wichtig – auch wenn Kunden nicht vorbeikommen."
    },
    {
      question: "Was ist eine Citation und wie unterscheidet sie sich von NAP?",
      answer: "Eine Citation ist jede Erwähnung deines Unternehmens im Internet – mit oder ohne Link. NAP sind die spezifischen Daten (Name, Adresse, Telefon) innerhalb einer Citation. Jede vollständige Citation enthält NAP-Daten."
    },
    {
      question: "Wie viele Citations brauche ich für gute Rankings?",
      answer: "Qualität schlägt Quantität. 30-50 hochwertige, konsistente Citations in relevanten Verzeichnissen sind besser als 200 inkonsistente. Konzentriere dich auf die Top-20 deutschen Verzeichnisse plus branchenspezifische Portale."
    },
    {
      question: "Sind Social Media Profile NAP-relevant?",
      answer: "Ja! Facebook, Instagram, LinkedIn und andere Profile zählen als Citations. Stelle sicher, dass Name, Adresse und Telefonnummer auch dort identisch zu deinem Google Business Profil sind."
    },
    {
      question: "Was tun bei Umzug oder Namenswechsel?",
      answer: "Erstelle eine Liste aller Verzeichnisse, in denen du eingetragen bist. Aktualisiere zuerst Google Business, dann die wichtigsten Verzeichnisse. Nutze bei Umzügen die 301-Weiterleitung auf deiner Website und aktualisiere das Schema Markup."
    },
    {
      question: "Können inkonsistente NAP-Daten zu einer Google-Strafe führen?",
      answer: "Nicht zu einer direkten Strafe, aber zu massiven Ranking-Verlusten. Google vertraut Unternehmen mit widersprüchlichen Daten weniger und zeigt sie seltener im Local Pack. Das Ergebnis: weniger Sichtbarkeit und Kunden."
    }
  ];

  // Generate FAQ Schema
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
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      {/* Einleitung */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Du investierst Zeit und Geld in dein <LexikonLink term="Google Business Profile" />, aber die Rankings bleiben aus? 
        Ein häufig übersehener Grund: <strong>Inkonsistente <LexikonLink term="NAP">NAP-Daten</LexikonLink></strong>. Wenn dein Unternehmensname, 
        deine Adresse oder Telefonnummer in verschiedenen <LexikonLink term="Citations">Verzeichnissen</LexikonLink> unterschiedlich sind, verliert 
        Google das Vertrauen in deine Daten – und dein Ranking im <LexikonLink term="Local Pack" /> leidet.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Was NAP bedeutet und warum es für lokales Ranking entscheidend ist",
          "Die 20 wichtigsten deutschen Verzeichnisse für Citations",
          "Schritt-für-Schritt NAP-Audit durchführen",
          "Tools für effizientes NAP-Management im Überblick",
          "Häufige NAP-Fehler erkennen und vermeiden"
        ]}
      />

      <BlogImage 
        src={napKonsistenzImg} 
        alt="NAP-Konsistenz über verschiedene Verzeichnisse"
        caption="Konsistente NAP-Daten sind entscheidend für lokales Ranking"
      />

      {/* Was ist NAP */}
      <section id="was-ist-nap" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          Was ist NAP?
        </h2>
        
        <p className="text-muted-foreground mb-6">
          NAP ist die Abkürzung für die drei wichtigsten Unternehmensdaten:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Name</h3>
            <p className="text-sm text-muted-foreground">
              Der exakte, offizielle Unternehmensname – ohne Zusätze oder Variationen
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Address</h3>
            <p className="text-sm text-muted-foreground">
              Die vollständige Adresse in einheitlichem Format (Str. vs. Straße)
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">
              Die Telefonnummer im gleichen Format (mit/ohne Vorwahl, Leerzeichen)
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Pro-Tipp</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Lege ein "Master-NAP-Dokument" an, das die exakte Schreibweise deiner Daten enthält. 
                Kopiere immer aus diesem Dokument, um Tippfehler zu vermeiden.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Beispiele für NAP-Inkonsistenzen</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Falsch (inkonsistent)</th>
                <th className="border border-border p-3 text-left">Richtig (konsistent)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 text-red-600">Müller GmbH</td>
                <td className="border border-border p-3 text-green-600">Müller Elektrotechnik GmbH</td>
              </tr>
              <tr>
                <td className="border border-border p-3 text-red-600">Hauptstr. 15</td>
                <td className="border border-border p-3 text-green-600">Hauptstraße 15</td>
              </tr>
              <tr>
                <td className="border border-border p-3 text-red-600">089-12345678</td>
                <td className="border border-border p-3 text-green-600">089 123 456 78</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Warum wichtig */}
      <section id="warum-wichtig" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Warum NAP-Konsistenz so wichtig ist
        </h2>

        <p className="text-muted-foreground mb-6">
          Google nutzt NAP-Daten aus hunderten Quellen, um zu verifizieren, dass dein Unternehmen 
          existiert und wo es sich befindet. Je mehr Quellen übereinstimmen, desto höher das Vertrauen.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-primary mb-2">68%</div>
            <p className="text-muted-foreground text-sm">
              der Verbraucher würden ein lokales Unternehmen nicht besuchen, wenn sie widersprüchliche Informationen finden
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-3xl font-bold text-primary mb-2">Top 5</div>
            <p className="text-muted-foreground text-sm">
              NAP-Konsistenz gehört laut Moz zu den Top 5 lokalen Ranking-Faktoren
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Achtung</p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Inkonsistente NAP-Daten können dazu führen, dass Google dein Unternehmen 
                für mehrere verschiedene Businesses hält – oder schlimmer: für nicht existent.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Die Folgen von NAP-Inkonsistenzen</h3>
        
        <ul className="space-y-3 mb-6">
          {[
            "Schlechtere Rankings im Local Pack (Google Maps)",
            "Kunden finden veraltete Adressen oder Telefonnummern",
            "Vertrauensverlust bei potenziellen Kunden",
            "Duplikate in Verzeichnissen entstehen",
            "Schwierigkeiten bei der Verifizierung neuer Einträge"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <BlogCTAABTest articleSlug="nap-konsistenz-local-seo" position="intro" />

      {/* Wichtige Verzeichnisse */}
      <section id="wichtige-verzeichnisse" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          Die 20 wichtigsten Verzeichnisse für Deutschland
        </h2>

        <p className="text-muted-foreground mb-6">
          Diese Verzeichnisse haben den größten Einfluss auf dein lokales Ranking und sollten 
          priorisiert werden:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Allgemeine Verzeichnisse (Priorität 1)</h3>
            <ul className="space-y-2">
              {[
                "Google Business Profile",
                "Bing Places",
                "Apple Maps Connect",
                "Facebook Business",
                "Das Örtliche",
                "Gelbe Seiten",
                "Yelp Deutschland",
                "11880",
                "GoLocal",
                "meinestadt.de"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Weitere wichtige Verzeichnisse</h3>
            <ul className="space-y-2">
              {[
                "Branchenbuch Deutschland",
                "Cylex",
                "Hotfrog",
                "Foursquare",
                "Tupalo",
                "Wer kennt wen",
                "Dialo",
                "Marktplatz Mittelstand",
                "Firmenwissen",
                "LinkedIn Unternehmensseite"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Branchenspezifische Verzeichnisse</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Vergiss nicht die branchenspezifischen Portale! Restaurants sollten in TripAdvisor, 
                Handwerker in MyHammer, Ärzte in Jameda eingetragen sein. Diese Nischen-Citations 
                haben oft hohes Gewicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAP Audit */}
      <section id="nap-audit" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Search className="h-6 w-6 text-primary" />
          NAP-Audit Schritt für Schritt
        </h2>

        <p className="text-muted-foreground mb-6">
          Ein systematischer NAP-Audit hilft dir, alle Inkonsistenzen zu finden und zu beheben.
        </p>

        <div className="space-y-6 mb-6">
          {[
            {
              step: 1,
              title: "Master-NAP festlegen",
              description: "Definiere die exakte Schreibweise deines Namens, deiner Adresse und Telefonnummer. Dieses Format ist ab jetzt der Standard."
            },
            {
              step: 2,
              title: "Bestehende Einträge suchen",
              description: "Suche bei Google nach deinem Unternehmensnamen + Stadt. Notiere alle gefundenen Verzeichniseinträge in einer Tabelle."
            },
            {
              step: 3,
              title: "Einträge vergleichen",
              description: "Vergleiche jeden gefundenen Eintrag mit deinem Master-NAP. Markiere Abweichungen in Name, Adresse oder Telefon."
            },
            {
              step: 4,
              title: "Zugänge sichern",
              description: "Versuche, dich bei jedem Verzeichnis als Inhaber zu verifizieren. So kannst du Daten selbst korrigieren."
            },
            {
              step: 5,
              title: "Korrekturen durchführen",
              description: "Aktualisiere alle Einträge auf dein Master-NAP. Beginne mit Google Business, dann die wichtigsten Verzeichnisse."
            },
            {
              step: 6,
              title: "Monitoring einrichten",
              description: "Richte Google Alerts für deinen Firmennamen ein und prüfe monatlich die wichtigsten Einträge."
            }
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <RefreshCw className="h-6 w-6 text-primary" />
          Tools für NAP-Management
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Tool</th>
                <th className="border border-border p-3 text-left">Preis</th>
                <th className="border border-border p-3 text-left">Funktionen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Yext</td>
                <td className="border border-border p-3">Ab 199€/Monat</td>
                <td className="border border-border p-3 text-sm">Automatische Synchronisation, 75+ Verzeichnisse, Analytics</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Uberall</td>
                <td className="border border-border p-3">Ab 99€/Monat</td>
                <td className="border border-border p-3 text-sm">Listings Management, Review Monitoring, Local Pages</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Semrush Local</td>
                <td className="border border-border p-3">Ab 40€/Monat</td>
                <td className="border border-border p-3 text-sm">Citation Tracking, Heatmap, Ranking Tracker</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">BrightLocal</td>
                <td className="border border-border p-3">Ab 29$/Monat</td>
                <td className="border border-border p-3 text-sm">Citation Builder, Audit, White-Label Reports</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Moz Local</td>
                <td className="border border-border p-3">Ab 14$/Monat</td>
                <td className="border border-border p-3 text-sm">Listing Score, Sync zu wichtigen Verzeichnissen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Fehler vermeiden */}
      <section id="fehler-vermeiden" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Shield className="h-6 w-6 text-primary" />
          Häufige NAP-Fehler vermeiden
        </h2>

        <div className="space-y-4 mb-6">
          {[
            {
              error: "Abkürzungen mischen",
              solution: "Entscheide dich für 'Straße' ODER 'Str.' und bleibe dabei"
            },
            {
              error: "Verschiedene Telefonnummern nutzen",
              solution: "Verwende überall dieselbe Hauptnummer mit einheitlichem Format"
            },
            {
              error: "Keywords im Namen hinzufügen",
              solution: "Nutze nur deinen offiziellen Firmennamen – keine 'SEO-Namen'"
            },
            {
              error: "Alte Einträge vergessen",
              solution: "Suche aktiv nach historischen Einträgen und aktualisiere sie"
            },
            {
              error: "Mobilnummern statt Festnetz",
              solution: "Festnetz mit lokaler Vorwahl signalisiert Seriosität und Lokalität"
            },
            {
              error: "Postfach als Adresse",
              solution: "Verwende immer eine echte physische Adresse, keine Postfächer"
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground mb-1">{item.error}</p>
                  <p className="text-muted-foreground text-sm flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="nap-konsistenz-local-seo" position="middle" />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu NAP-Konsistenz
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SourcesSection 
        sources={[
          { title: "MOZ Local SEO Guide", url: "https://moz.com/learn/seo/local", type: "article", description: "Umfassender Leitfaden zu Local SEO von MOZ" },
          { title: "Gelbe Seiten", url: "https://www.gelbeseiten.de/", type: "tool", description: "Deutsches Branchenverzeichnis" },
          { title: "Das Örtliche", url: "https://www.dasoertliche.de/", type: "tool", description: "Lokales Telefonbuch und Branchenbuch" },
          { title: "BrightLocal Citation Tracker", url: "https://www.brightlocal.com/", type: "tool", description: "Tool zur Citation-Verwaltung" },
          { title: "Semrush Listing Management", url: "https://www.semrush.com/local/", type: "tool", description: "NAP-Management-Tool" }
        ]}
      />

      <HelpfulnessWidget articleSlug="nap-konsistenz-local-seo" />

      <BlogCTAABTest articleSlug="nap-konsistenz-local-seo" position="end" />
    </ArticleLayout>
  );
};

export default NapKonsistenz;
