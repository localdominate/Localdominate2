import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import GeoTargetedKeywords from "@/components/blog/GeoTargetedKeywords";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoWienImg from "@/assets/blog/local-seo-wien.jpg";
import { 
  CheckCircle, 
  MapPin,
  Users,
  Star,
  Building2,
  TrendingUp,
  Target,
  Lightbulb,
  Globe,
  AlertTriangle
} from "lucide-react";

const LocalSeoWien = () => {
  const article = getArticleBySlug("local-seo-wien");

  if (!article) return null;

  const tocItems = [
    { id: "oesterreich-besonderheiten", title: "Österreichische Besonderheiten" },
    { id: "wiener-bezirke", title: "Wiener Bezirke & Keywords" },
    { id: "oesterreichische-verzeichnisse", title: "Österreichische Verzeichnisse" },
    { id: "google-business-at", title: "Google Business für Österreich" },
    { id: "sprachliche-unterschiede", title: "Sprachliche Unterschiede" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Gibt es Unterschiede zwischen Local SEO in Österreich und Deutschland?",
      answer: "Ja, es gibt einige wichtige Unterschiede: Andere TLD (.at statt .de), unterschiedliche lokale Verzeichnisse (herold.at statt gelbeseiten.de), österreichisches Deutsch in der Keyword-Recherche, und die Bedeutung der .gv.at-Domains für E-E-A-T."
    },
    {
      question: "Welche Wiener Bezirke haben das höchste Suchvolumen?",
      answer: "Die Bezirke 1 (Innere Stadt), 2 (Leopoldstadt), 3 (Landstraße), 6 (Mariahilf) und 7 (Neubau) haben das höchste Suchvolumen. Aber auch die äußeren Bezirke wie Favoriten (10) bieten mit über 200.000 Einwohnern großes Potenzial."
    },
    {
      question: "Soll ich für jeden Bezirk eine eigene Landingpage erstellen?",
      answer: "Wenn du mehrere Bezirke bedienst, ja. Wien hat 23 Bezirke, und Wiener suchen oft nach 'Friseur 1070' oder 'Installateur Favoriten'. Erstelle für deine Haupt-Bezirke eigene Seiten mit lokalem Content."
    },
    {
      question: "Welche lokalen Verzeichnisse sind in Wien wichtig?",
      answer: "Die wichtigsten sind herold.at, wko.at (Firmen A-Z), meinestadt.at, stadtbekannt.at, Yelp Österreich und für bestimmte Branchen arztsuche.at, arbeiterkammer.at oder spezialisierte Portale."
    },
    {
      question: "Wie wichtig ist die .at-Domain für Local SEO in Wien?",
      answer: "Eine .at-Domain sendet ein starkes lokales Signal an Google und wird von österreichischen Nutzern als vertrauenswürdiger wahrgenommen. Für rein österreichische Unternehmen ist sie definitiv empfehlenswert."
    },
    {
      question: "Muss ich österreichisches Deutsch in meinen Texten verwenden?",
      answer: "Ja, zumindest für die wichtigsten Keywords. Österreicher suchen nach 'Fleischhauer' statt 'Metzger', 'Installateur' statt 'Klempner' und 'Jänner' statt 'Januar'. Diese Unterschiede beeinflussen deine Keyword-Strategie."
    },
    {
      question: "Wie ist der Wettbewerb für Local SEO in Wien?",
      answer: "Wien ist mit 1,9 Millionen Einwohnern der größte Markt in Österreich. Der Wettbewerb ist in den Innenbezirken hoch, aber in den äußeren Bezirken gibt es viele ungenutzte Chancen. Die Google-Maps-Nutzung wächst in Österreich weiter."
    },
    {
      question: "Welche Events kann ich für saisonales Marketing in Wien nutzen?",
      answer: "Wichtige Events sind der Wiener Opernball (Februar), Wiener Festwochen (Mai-Juni), Donauinselfest (Juni), Christkindlmärkte (November-Dezember) und natürlich der laufende Heurigen-Betrieb. Nutze diese für saisonalen Content."
    }
  ];


  const wienerBezirke = [
    { nummer: "1.", name: "Innere Stadt", population: "16.000", competition: "Sehr hoch" },
    { nummer: "2.", name: "Leopoldstadt", population: "105.000", competition: "Hoch" },
    { nummer: "3.", name: "Landstraße", population: "90.000", competition: "Hoch" },
    { nummer: "6.", name: "Mariahilf", population: "31.000", competition: "Hoch" },
    { nummer: "7.", name: "Neubau", population: "32.000", competition: "Mittel" },
    { nummer: "10.", name: "Favoriten", population: "210.000", competition: "Mittel" },
    { nummer: "22.", name: "Donaustadt", population: "195.000", competition: "Niedrig" },
    { nummer: "23.", name: "Liesing", population: "110.000", competition: "Niedrig" }
  ];

  const oesterreichischeVerzeichnisse = [
    { name: "herold.at", type: "Branchenbuch", priority: "Sehr hoch" },
    { name: "WKO Firmen A-Z", type: "Wirtschaftskammer", priority: "Sehr hoch" },
    { name: "meinestadt.at", type: "Cityportal", priority: "Hoch" },
    { name: "stadtbekannt.at", type: "Wien-Portal", priority: "Hoch" },
    { name: "Yelp Österreich", type: "Bewertungen", priority: "Mittel" },
    { name: "firmenabc.at", type: "Branchenbuch", priority: "Mittel" }
  ];

  const sprachlicheUnterschiede = [
    { deutsch: "Metzger", oesterreichisch: "Fleischhauer" },
    { deutsch: "Klempner", oesterreichisch: "Installateur" },
    { deutsch: "Tischler", oesterreichisch: "Tischler" },
    { deutsch: "Januar", oesterreichisch: "Jänner" },
    { deutsch: "Aprikose", oesterreichisch: "Marille" },
    { deutsch: "Kartoffel", oesterreichisch: "Erdäpfel" },
    { deutsch: "Brötchen", oesterreichisch: "Semmel" },
    { deutsch: "Fahrrad", oesterreichisch: "Radl" }
  ];

  const sources: { title: string; url: string; type: "article" | "documentation" | "study" | "tool" }[] = [
    { title: "Stadt Wien - Statistik", url: "https://www.wien.gv.at/statistik/", type: "documentation" },
    { title: "Wirtschaftskammer Österreich", url: "https://www.wko.at/", type: "documentation" },
    { title: "Google Business Hilfe", url: "https://support.google.com/business/", type: "documentation" }
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Wien ist nicht nur die Hauptstadt Österreichs, sondern auch der mit Abstand größte Markt 
        für lokale Unternehmen im DACH-Raum außerhalb Deutschlands. Mit <strong>1,9 Millionen 
        Einwohnern</strong> und einer einzigartigen Bezirksstruktur bietet die Donaumetropole 
        besondere Chancen für <LexikonLink term="Local SEO" />. Dieser Guide zeigt dir die 
        österreichischen Besonderheiten.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Österreichisches Deutsch für Keywords nutzen (Fleischhauer statt Metzger)",
          "Die 23 Wiener Bezirke gezielt für Landingpages nutzen",
          "Österreichische Verzeichnisse wie herold.at und WKO beachten",
          "Eine .at-Domain für lokale Vertrauenswürdigkeit",
          "Wiener Kultur und Traditionen im Content widerspiegeln"
        ]}
      />

      <BlogImage 
        src={localSeoWienImg} 
        alt="Wiener Stephansdom mit Local SEO Elementen"
        caption="Local SEO in Wien: Die österreichische Hauptstadt bietet einzigartige Chancen"
      />

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">1,9 Mio</div>
          <p className="text-xs text-muted-foreground">Einwohner</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">23</div>
          <p className="text-xs text-muted-foreground">Bezirke</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">170k+</div>
          <p className="text-xs text-muted-foreground">Unternehmen</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">17 Mio</div>
          <p className="text-xs text-muted-foreground">Touristen/Jahr</p>
        </div>
      </div>

      {/* Österreichische Besonderheiten */}
      <section id="oesterreich-besonderheiten" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Building2 className="h-6 w-6 text-primary" />
          Österreichische Besonderheiten für Local SEO
        </h2>

        <p className="text-muted-foreground mb-6">
          Local SEO in Österreich unterscheidet sich in einigen wichtigen Punkten von Deutschland:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Technische Unterschiede
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                .at-Domain für lokales Signal
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                hreflang="de-AT" für Österreich-Content
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Google.at als primäre Suchmaschine
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Österreichische Verzeichnisse für <LexikonLink term="Citations" />
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Kulturelle Unterschiede
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Österreichisches Deutsch in Keywords
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Wiener Schmäh für authentischen Content
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Tradition und Qualität betonen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Titel und Qualifikationen wichtig (Ing., Mag.)
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Wichtig für deutsche Unternehmen</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Wenn du aus Deutschland nach Wien expandierst, reicht es nicht, einfach "Wien" 
                an deine Keywords anzuhängen. Du musst österreichisches Deutsch verwenden und 
                österreichische Verzeichnisse nutzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bezirke */}
      <section id="wiener-bezirke" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Wiener Bezirke & Keywords
        </h2>

        <p className="text-muted-foreground mb-6">
          Wien ist in 23 Bezirke unterteilt, die von "1." bis "23." nummeriert sind. 
          Wiener identifizieren sich stark mit ihrem Bezirk und suchen oft nach Dienstleistern 
          im eigenen Bezirk:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Bezirk</th>
                <th className="border border-border p-3 text-left">Name</th>
                <th className="border border-border p-3 text-left">Einwohner</th>
                <th className="border border-border p-3 text-left">Wettbewerb</th>
              </tr>
            </thead>
            <tbody>
              {wienerBezirke.map((bezirk, index) => (
                <tr key={index}>
                  <td className="border border-border p-3 font-medium">{bezirk.nummer}</td>
                  <td className="border border-border p-3">{bezirk.name}</td>
                  <td className="border border-border p-3">{bezirk.population}</td>
                  <td className="border border-border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      bezirk.competition === "Sehr hoch" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                      bezirk.competition === "Hoch" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
                      bezirk.competition === "Mittel" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                      {bezirk.competition}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Keyword-Beispiele für Wiener Bezirke</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">1. Bezirk (Innere Stadt)</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Restaurant 1010 Wien</li>
              <li>• Friseur Innere Stadt</li>
              <li>• Anwalt Stephansplatz</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">7. Bezirk (Neubau)</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Café Neubau</li>
              <li>• Yoga 1070</li>
              <li>• Tattoo Studio Neubau</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">10. Bezirk (Favoriten)</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Installateur Favoriten</li>
              <li>• Zahnarzt 1100</li>
              <li>• Fahrschule Favoriten</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Wiener Tipp</p>
              <p className="text-muted-foreground text-sm">
                Wiener suchen oft nach der Postleitzahl statt dem Bezirksnamen. 
                "Friseur 1070" ist genauso relevant wie "Friseur Neubau". 
                Optimiere für beides!
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Verzeichnisse */}
      <section id="oesterreichische-verzeichnisse" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          Österreichische Verzeichnisse für Citations
        </h2>

        <p className="text-muted-foreground mb-6">
          Für <LexikonLink term="NAP-Konsistenz" /> in Österreich sind andere Verzeichnisse 
          wichtig als in Deutschland:
        </p>

        <div className="space-y-4 mb-6">
          {oesterreichischeVerzeichnisse.map((verzeichnis, index) => (
            <div key={index} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <span className="font-medium text-foreground">{verzeichnis.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">({verzeichnis.type})</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                verzeichnis.priority === "Sehr hoch" ? "bg-primary/20 text-primary" :
                verzeichnis.priority === "Hoch" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                "bg-muted text-muted-foreground"
              }`}>
                {verzeichnis.priority}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Google Business */}
      <section id="google-business-at" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Österreich
        </h2>

        <p className="text-muted-foreground mb-6">
          Die Optimierung deines <LexikonLink term="Google Business Profile" /> für den 
          österreichischen Markt erfordert einige spezielle Anpassungen:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Besonderheiten für Österreich</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Verwende das österreichische Adressformat (PLZ vor Stadt)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Telefonnummer mit +43 Landesvorwahl
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Beschreibung in österreichischem Deutsch
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Österreichische Kategorien wählen (falls unterschiedlich)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sprachliche Unterschiede */}
      <section id="sprachliche-unterschiede" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="h-6 w-6 text-primary" />
          Sprachliche Unterschiede: Keywords auf Österreichisch
        </h2>

        <p className="text-muted-foreground mb-6">
          Für deine Keyword-Strategie in Wien musst du österreichische Begriffe berücksichtigen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Bundesdeutsch</th>
                <th className="border border-border p-3 text-left">Österreichisch</th>
              </tr>
            </thead>
            <tbody>
              {sprachlicheUnterschiede.map((item, index) => (
                <tr key={index}>
                  <td className="border border-border p-3">{item.deutsch}</td>
                  <td className="border border-border p-3 font-medium text-primary">{item.oesterreichisch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Keyword-Tipp</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Recherchiere für deine Branche die österreichischen Begriffe. Nutze Google Suggest 
                auf google.at und vergleiche das Suchvolumen. Oft lohnt es sich, beide Varianten 
                zu optimieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu Local SEO in Wien
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-wien" />

      <RelatedCityGuides currentSlug="local-seo-wien" />

      <SourcesSection sources={sources} />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoWien;
