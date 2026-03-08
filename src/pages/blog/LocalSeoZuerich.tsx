import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, Building2, TrendingUp, Wallet, CheckCircle, AlertTriangle, 
  Globe, ExternalLink, Star, MapPin, Search
} from "lucide-react";
import { Link } from "react-router-dom";
import ZurichDistrictSelector from "@/components/blog/ZurichDistrictSelector";
import ZurichEventsCalendar from "@/components/blog/ZurichEventsCalendar";
import SwissDirectoriesTable from "@/components/blog/SwissDirectoriesTable";

const LocalSeoZuerich = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-zuerich", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "zuercher-markt", title: "Der Zürcher Markt" },
    { id: "stadtteile", title: "Zürcher Stadtteile" },
    { id: "keywords", title: "Zürich-spezifische Keywords" },
    { id: "google-business", title: "Google Business für Zürich" },
    { id: "verzeichnisse", title: "Lokale Verzeichnisse" },
    { id: "events", title: "Saisonale Events" },
    { id: "case-study", title: "Erfolgsbeispiel" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was kostet Local SEO in Zürich?", answer: "Die Kosten für Local SEO in Zürich variieren je nach Branche und Wettbewerb. Rechnen Sie mit CHF 500-2'000 monatlich für professionelle Betreuung. Bei sehr wettbewerbsintensiven Branchen (Gastronomie Innenstadt, Finanzdienstleistungen) können die Kosten höher sein." },
    { question: "Wie lange dauert es, bei Google Maps in Zürich zu ranken?", answer: "In Zürich müssen Sie mit 3-6 Monaten rechnen, bis erste signifikante Ergebnisse sichtbar werden. In weniger wettbewerbsintensiven Stadtteilen (Kreis 9, 10, 12) kann es schneller gehen. Bei der Innenstadt (Kreis 1, 8) kann es 6-12 Monate dauern." },
    { question: "Sollte meine Zürcher Website auch auf Englisch sein?", answer: "Ja, unbedingt – zumindest in Expat-Quartieren wie Seefeld (Kreis 8), Zürich West (Kreis 5) oder der Innenstadt. Über 30% der Zürcher Bevölkerung sind internationale Einwohner, die oft auf Englisch suchen." },
    { question: "Welche Zürcher Stadtteile haben den geringsten SEO-Wettbewerb?", answer: "Die Stadtteile mit dem geringsten Wettbewerb sind Kreis 9 (Altstetten/Albisrieden), Kreis 10 (Höngg/Wipkingen) und Kreis 12 (Schwamendingen). Hier können Sie schneller gute Rankings erzielen." },
    { question: "Brauche ich französische Keywords für Zürich?", answer: "Nein, französische Keywords sind für Zürich nicht notwendig. Die Stadt liegt in der Deutschschweiz. Priorisieren Sie Deutsch und Englisch. Schweizerdeutsche Begriffe (Coiffeur, Velo, Natel) sollten Sie jedoch kennen und einsetzen." },
    { question: "Wie wichtig sind Google Bewertungen in Zürich?", answer: "Extrem wichtig! Zürcher Kunden sind anspruchsvoll und lesen Bewertungen genau. Streben Sie mindestens 4.5 Sterne an. Antworten Sie auf alle Bewertungen – auf Deutsch UND Englisch, je nach Sprache des Rezensenten." }
  ];

  const zurichKeywords = [
    { hochdeutsch: "Friseur", schweizerdeutsch: "Coiffeur", empfehlung: "Coiffeur verwenden", priority: "hoch" },
    { hochdeutsch: "Handy", schweizerdeutsch: "Natel / Mobile", empfehlung: "Mobile bevorzugen", priority: "mittel" },
    { hochdeutsch: "Fahrrad", schweizerdeutsch: "Velo", empfehlung: "Velo priorisieren", priority: "hoch" },
    { hochdeutsch: "Straße", schweizerdeutsch: "Strasse", empfehlung: "ss-Schreibweise (kein ß)", priority: "hoch" },
    { hochdeutsch: "Tüte", schweizerdeutsch: "Säckli / Tasche", empfehlung: "Tasche verwenden", priority: "niedrig" },
    { hochdeutsch: "Brötchen", schweizerdeutsch: "Brötli / Weggli", empfehlung: "Lokale Begriffe nutzen", priority: "mittel" },
    { hochdeutsch: "Metzger", schweizerdeutsch: "Metzger / Metzgerei", empfehlung: "Identisch, funktioniert", priority: "niedrig" },
    { hochdeutsch: "Samstag", schweizerdeutsch: "Samstag / Samschtig", empfehlung: "Samstag in Keywords", priority: "niedrig" },
    { hochdeutsch: "Januar", schweizerdeutsch: "Januar / Jänner", empfehlung: "Januar verwenden", priority: "niedrig" },
    { hochdeutsch: "Fitness-Studio", schweizerdeutsch: "Fitness / Gym", empfehlung: "Fitness Zürich", priority: "hoch" }
  ];

  const zurichDirectories = [
    { name: "zuerich.com", url: "https://www.zuerich.com", type: "Tourismus", priority: "hoch", description: "Offizielles Tourismusportal" },
    { name: "Stadt Zürich Firmenverzeichnis", url: "https://www.stadt-zuerich.ch", type: "Behörde", priority: "hoch", description: "Städtisches Verzeichnis" },
    { name: "Zürcher Handelskammer", url: "https://www.zhk.ch", type: "Wirtschaft", priority: "hoch", description: "B2B-Netzwerk" },
    { name: "NZZ Firmenverzeichnis", url: "https://www.nzz.ch", type: "Medien", priority: "mittel", description: "Neue Zürcher Zeitung" },
    { name: "Tages-Anzeiger", url: "https://www.tagesanzeiger.ch", type: "Medien", priority: "mittel", description: "Grösste Zürcher Zeitung" },
    { name: "ZKB Firmenverzeichnis", url: "https://www.zkb.ch", type: "Bank", priority: "mittel", description: "Zürcher Kantonalbank" },
    { name: "Gastrosuisse Zürich", url: "https://www.gastrosuisse.ch", type: "Verband", priority: "hoch", description: "Gastronomie-Verband" }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">1.6 Mio.</div>
            <div className="text-sm text-muted-foreground">Grossraum Zürich</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Building2 className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">432'000</div>
            <div className="text-sm text-muted-foreground">Stadt Zürich</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">Top 1</div>
            <div className="text-sm text-muted-foreground">Wirtschaftsstandort CH</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Wallet className="h-8 w-8 mx-auto text-primary mb-2" />
            <div className="text-2xl font-bold text-primary">CHF 96k</div>
            <div className="text-sm text-muted-foreground">Ø Jahreslohn</div>
          </CardContent>
        </Card>
      </div>

      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Zürich ist die grösste Stadt der Schweiz</strong> und das wirtschaftliche Zentrum 
        des Landes. Mit der höchsten Kaufkraft Europas, einem internationalen Publikum und 
        extremem Wettbewerb stellt die Limmatstadt besondere Anforderungen an Ihre Local-SEO-Strategie. 
        Dieser umfassende Guide zeigt Ihnen, wie Sie in allen 12 Zürcher Stadtkreisen 
        erfolgreich sichtbar werden.
      </p>

      <p className="mb-8">
        Als Finanzmetropole, Tech-Hub (Google, Microsoft, IBM) und kulturelles Zentrum zieht 
        Zürich täglich tausende Geschäftsreisende und Touristen an. Über <strong>30% der 
        Bevölkerung sind internationale Einwohner</strong> – ein Umstand, der Ihre 
        Keyword-Strategie massgeblich beeinflusst.
      </p>

      <BlogCTAABTest articleSlug="local-seo-zuerich" position="intro" />

      {/* Zürcher Markt */}
      <section id="zuercher-markt" className="mb-12">
        <h2>Der Zürcher Markt: Chancen und Herausforderungen</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Chancen in Zürich
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Höchste Kaufkraft:</strong> Kunden geben mehr aus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Premium-Segment:</strong> Qualität vor Preis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Internationale Kunden:</strong> Expat-Community als Zielgruppe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Geschäftsreisende:</strong> B2B-Potenzial riesig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Digital-affin:</strong> Hohe Online-Recherche-Quote</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-orange-700 dark:text-orange-400">
                <AlertTriangle className="h-5 w-5" />
                Herausforderungen
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">!</span>
                  <span><strong>Extremer Wettbewerb:</strong> Viele Anbieter, hohe Standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">!</span>
                  <span><strong>Hohe Erwartungen:</strong> Kunden erwarten Perfektion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">!</span>
                  <span><strong>Sprachvielfalt:</strong> DE + EN zwingend nötig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">!</span>
                  <span><strong>Teure Klickpreise:</strong> Google Ads kostspielig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">!</span>
                  <span><strong>Schnelllebig:</strong> Trends wechseln schnell</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3>Die Zürcher Such-Mentalität verstehen</h3>
        <p>
          Zürcher Kunden sind <strong>anspruchsvoll, informiert und qualitätsbewusst</strong>. 
          Sie vergleichen ausgiebig, lesen Bewertungen genau und erwarten schnelle, 
          professionelle Antworten. Ein 4-Sterne-Rating, das in anderen Städten 
          ausreichen würde, kann in Zürich bereits als "mittelmässig" wahrgenommen werden.
        </p>
        
        <p className="mt-4">
          Besonders wichtig: Die <strong>internationale Ausrichtung</strong>. Viele Suchanfragen 
          erfolgen auf Englisch – selbst von deutschsprachigen Nutzern, die bestimmte 
          Fachbegriffe im Englischen suchen. "Coworking Space Zurich" hat oft mehr 
          Suchvolumen als "Bürogemeinschaft Zürich".
        </p>
      </section>

      {/* Stadtteile */}
      <section id="stadtteile" className="mb-12">
        <h2>SEO-Strategien für alle 12 Zürcher Stadtkreise</h2>
        <p className="mb-4">
          Zürich ist in <strong>12 Stadtkreise</strong> unterteilt, die sich stark in 
          Wettbewerb, Zielgruppe und optimaler SEO-Strategie unterscheiden. Klicken Sie 
          auf einen Stadtteil, um massgeschneiderte Tipps zu erhalten:
        </p>
        
        <ZurichDistrictSelector />

        <Card className="bg-primary/5 border-primary/20 mt-6">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">💡 Profi-Tipp: Stadtteil-Landingpages für Zürcher Kreise</h3>
            <p className="text-sm">
              Erstellen Sie für jeden relevanten Stadtteil eine eigene Landingpage. 
              Beispiel: "Coiffeur Seefeld" oder "Restaurant Wiedikon". Dies ermöglicht 
              gezieltes Ranking für quartier-spezifische Suchanfragen und zeigt lokale Kompetenz.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Keywords */}
      <section id="keywords" className="mb-12">
        <h2>Zürich-spezifische Keywords: Schweizerdeutsch vs. Hochdeutsch</h2>
        <p className="mb-6">
          In Zürich müssen Sie die <strong>Schweizer Schreibweise und Begriffe</strong> 
          kennen. Hier die wichtigsten Unterschiede für Ihre Keyword-Strategie:
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hochdeutsch</TableHead>
                <TableHead>Schweizerdeutsch</TableHead>
                <TableHead>Empfehlung</TableHead>
                <TableHead>Priorität</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {zurichKeywords.map((keyword, index) => (
                <TableRow key={index}>
                  <TableCell>{keyword.hochdeutsch}</TableCell>
                  <TableCell className="font-medium">{keyword.schweizerdeutsch}</TableCell>
                  <TableCell>{keyword.empfehlung}</TableCell>
                  <TableCell>
                    <Badge variant={
                      keyword.priority === "hoch" ? "default" : 
                      keyword.priority === "mittel" ? "secondary" : "outline"
                    }>
                      {keyword.priority}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h3 className="mt-8">Branchenspezifische Keyword-Strategien</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-primary" />
                Finanz & Business
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Vermögensverwaltung Zürich</li>
                <li>• Private Banking Zürich</li>
                <li>• Steuerberater Zürich</li>
                <li>• Rechtsanwalt Paradeplatz</li>
                <li>• Unternehmensberatung Zürich</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                Tech & Startups
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• IT Zürich / IT Dienstleister Zürich</li>
                <li>• Softwareentwicklung Zürich</li>
                <li>• Webdesign Zürich West</li>
                <li>• Coworking Space Zurich (EN!)</li>
                <li>• App Entwicklung Zürich</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-primary" />
                Gastronomie
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Restaurant Zürich Altstadt</li>
                <li>• Café Niederdorf</li>
                <li>• Brunch Zürich Seefeld</li>
                <li>• Vegetarisches Restaurant Zürich</li>
                <li>• Bar Langstrasse</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-primary" />
                Für Expats (Englisch)
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• English speaking doctor Zurich</li>
                <li>• International school Zurich</li>
                <li>• Relocation service Zurich</li>
                <li>• Expat tax advisor Zurich</li>
                <li>• English hairdresser Zurich</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 mt-6">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">⚠️ Wichtig: Kein "ß" in der Schweiz!</h4>
            <p className="text-sm">
              In der Schweiz gibt es kein "ß" – stattdessen wird immer "ss" verwendet. 
              "Strasse" statt "Straße", "Fussball" statt "Fußball". Achten Sie darauf, 
              dass Ihre gesamte Website die Schweizer Schreibweise verwendet!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Google Business */}
      <section id="google-business" className="mb-12">
        <h2>Google Business Profil für Zürich optimieren</h2>
        <p className="mb-6">
          Ihr Google Business Profil ist in Zürich besonders wichtig. Hier die 
          Zürich-spezifischen Optimierungen:
        </p>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Standort & Adresse
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Postleitzahl:</strong> Verwenden Sie die korrekte 4-stellige PLZ (z.B. 8001 für Kreis 1)</li>
                <li>• <strong>Stadtteil:</strong> Fügen Sie den Quartier-Namen hinzu, wenn möglich</li>
                <li>• <strong>Schweizer Schreibweise:</strong> "Strasse" statt "Straße"</li>
                <li>• <strong>Einzugsgebiet:</strong> Definieren Sie Ihre Service-Gebiete (alle relevanten Kreise)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" />
                Kategorien & Attribute
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Primäre Kategorie:</strong> Die wichtigste zuerst (z.B. "Coiffeur" statt "Friseur")</li>
                <li>• <strong>Zahlungsarten:</strong> TWINT als wichtigstes Schweizer Zahlungsmittel hinzufügen</li>
                <li>• <strong>Sprachen:</strong> Deutsch UND Englisch als Servicesprachen angeben</li>
                <li>• <strong>Barrierefreiheit:</strong> Schweizer Standards berücksichtigen</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Bewertungen in Zürich
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Zielrating:</strong> Mindestens 4.5 Sterne anstreben (Zürcher sind anspruchsvoll)</li>
                <li>• <strong>Antworten:</strong> Auf Deutsch UND Englisch – je nach Sprache des Rezensenten</li>
                <li>• <strong>Geschwindigkeit:</strong> Innerhalb von 24 Stunden antworten</li>
                <li>• <strong>Professionalität:</strong> Höflich, aber nicht unterwürfig – Schweizer schätzen Sachlichkeit</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">🇨🇭 Zürcher Feiertage beachten</h3>
              <p className="text-sm mb-3">
                Passen Sie Ihre Öffnungszeiten für diese Zürcher Feiertage an:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• Sechseläuten (April)</div>
                <div>• Knabenschiessen (September)</div>
                <div>• Bundesfeiertag (1. August)</div>
                <div>• Berchtoldstag (2. Januar)</div>
                <div>• Auffahrt</div>
                <div>• Pfingstmontag</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Verzeichnisse */}
      <section id="verzeichnisse" className="mb-12">
        <h2>Lokale Verzeichnisse für Zürich</h2>
        <p className="mb-6">
          Neben den <Link to="/blog/local-seo-schweiz" className="text-primary hover:underline">
          schweizweiten Verzeichnissen</Link> gibt es Zürich-spezifische Plattformen:
        </p>

        <h3>Zürich-spezifische Verzeichnisse</h3>
        <div className="overflow-x-auto my-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Verzeichnis</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Priorität</TableHead>
                <TableHead>Beschreibung</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {zurichDirectories.map((dir, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <a 
                      href={dir.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      {dir.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell>{dir.type}</TableCell>
                  <TableCell>
                    <Badge variant={dir.priority === "hoch" ? "default" : "secondary"}>
                      {dir.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{dir.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <h3>Schweizweite Verzeichnisse (ebenfalls wichtig)</h3>
        <SwissDirectoriesTable />
      </section>

      {/* Events */}
      <section id="events" className="mb-12">
        <h2>Saisonale Events: Zürcher Event-Kalender für SEO</h2>
        <p className="mb-6">
          Zürich hat das ganze Jahr über <strong>hochfrequentierte Events</strong>, 
          die enormes SEO-Potenzial bieten. Planen Sie Ihre Content-Strategie rund 
          um diese Termine:
        </p>

        <ZurichEventsCalendar />

        <Card className="bg-primary/5 border-primary/20 mt-6">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">📅 Saisonale Content-Planung</h4>
            <p className="text-sm">
              Erstellen Sie einen <strong>Jahres-Content-Kalender</strong> für Zürich. 
              Berücksichtigen Sie dabei: Sechseläuten (Frühling), Badi-Saison (Sommer), 
              Street Parade (August), Herbstmesse und Weihnachtsmärkte (Winter). 
              Beginnen Sie mit der SEO-Optimierung jeweils 4-8 Wochen vor dem Event.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Case Study */}
      <section id="case-study" className="mb-12">
        <h2>Erfolgsbeispiel: Coiffeur im Kreis 4</h2>
        
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-green-100 text-green-800">Case Study</Badge>
              <span className="text-sm text-muted-foreground">Gastronomie & Beauty</span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Von Platz 15 auf Platz 2 in 5 Monaten</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-red-600">Platz 15</div>
                <div className="text-sm text-muted-foreground">Vorher</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">5 Monate</div>
                <div className="text-sm text-muted-foreground">Zeitraum</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600">Platz 2</div>
                <div className="text-sm text-muted-foreground">Nachher</div>
              </div>
            </div>

            <h4 className="font-semibold mb-2">Ausgangssituation:</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ein Coiffeursalon an der Langstrasse (Kreis 4) kämpfte mit der Sichtbarkeit. 
              Trotz guter Arbeit und Stammkunden wurde das Geschäft bei "Coiffeur Zürich" 
              und "Friseur Langstrasse" nicht gefunden.
            </p>

            <h4 className="font-semibold mb-2">Umgesetzte Massnahmen:</h4>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Google Business komplett neu optimiert mit Schweizer Keywords</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Quartier-Landingpage "Coiffeur Langstrasse" erstellt</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Bewertungs-Kampagne: 47 neue 5-Sterne-Bewertungen in 5 Monaten</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Englische Service-Seite für Expat-Kunden im Quartier</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Street Parade-Special (August) mit Event-Keywords</span>
              </li>
            </ul>

            <h4 className="font-semibold mb-2">Ergebnisse nach 5 Monaten:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">+180%</div>
                <div className="text-xs text-muted-foreground">Mehr Anfragen</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">4.9★</div>
                <div className="text-xs text-muted-foreground">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">Platz 2</div>
                <div className="text-xs text-muted-foreground">"Coiffeur Zürich"</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">+35%</div>
                <div className="text-xs text-muted-foreground">Expat-Kunden</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest articleSlug="local-seo-zuerich" position="middle" />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen zu Local SEO in Zürich</h2>
        
        <div className="space-y-6 mt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Was kostet Local SEO in Zürich?</h3>
              <p className="text-muted-foreground">
                Die Kosten für Local SEO in Zürich variieren je nach Branche und Wettbewerb. 
                Rechnen Sie mit <strong>CHF 500-2'000 monatlich</strong> für professionelle Betreuung. 
                Bei sehr wettbewerbsintensiven Branchen (Gastronomie Innenstadt, Finanzdienstleistungen) 
                können die Kosten höher sein.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Wie lange dauert es, bei Google Maps in Zürich zu ranken?</h3>
              <p className="text-muted-foreground">
                In Zürich müssen Sie mit <strong>3-6 Monaten</strong> rechnen, bis erste signifikante 
                Ergebnisse sichtbar werden. In weniger wettbewerbsintensiven Stadtteilen (Kreis 9, 10, 12) 
                kann es schneller gehen. Bei der Innenstadt (Kreis 1, 8) kann es 6-12 Monate dauern.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Sollte meine Zürcher Website auch auf Englisch sein?</h3>
              <p className="text-muted-foreground">
                <strong>Ja, unbedingt</strong> – zumindest in Expat-Quartieren wie Seefeld (Kreis 8), 
                Zürich West (Kreis 5) oder der Innenstadt. Über 30% der Zürcher Bevölkerung sind 
                internationale Einwohner, die oft auf Englisch suchen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Welche Zürcher Stadtteile haben den geringsten SEO-Wettbewerb?</h3>
              <p className="text-muted-foreground">
                Die Stadtteile mit dem geringsten Wettbewerb sind <strong>Kreis 9</strong> (Altstetten/Albisrieden), 
                <strong>Kreis 10</strong> (Höngg/Wipkingen) und <strong>Kreis 12</strong> (Schwamendingen). 
                Hier können Sie schneller gute Rankings erzielen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Brauche ich französische Keywords für Zürich?</h3>
              <p className="text-muted-foreground">
                Nein, französische Keywords sind für Zürich <strong>nicht notwendig</strong>. 
                Die Stadt liegt in der Deutschschweiz. Priorisieren Sie Deutsch und Englisch. 
                Schweizerdeutsche Begriffe (Coiffeur, Velo, Natel) sollten Sie jedoch kennen und einsetzen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Wie wichtig sind Google Bewertungen in Zürich?</h3>
              <p className="text-muted-foreground">
                <strong>Extrem wichtig!</strong> Zürcher Kunden sind anspruchsvoll und lesen 
                Bewertungen genau. Streben Sie mindestens 4.5 Sterne an. Antworten Sie auf alle 
                Bewertungen – auf Deutsch UND Englisch, je nach Sprache des Rezensenten.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing */}
      <section className="mb-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">🎯 Fazit: Local SEO in Zürich</h3>
            <p className="text-muted-foreground">
              Zürich ist der anspruchsvollste und wettbewerbsintensivste Markt der Schweiz – 
              aber auch der lukrativste. Mit der richtigen Strategie, <strong>stadtteil-spezifischen 
              Keywords</strong>, einer <strong>zweisprachigen Präsenz</strong> (DE/EN) und einem 
              perfekt optimierten Google Business Profil können Sie auch hier erfolgreich ranken. 
              Nutzen Sie die saisonalen Events, bauen Sie systematisch Bewertungen auf und 
              fokussieren Sie sich auf die für Ihre Branche relevanten Stadtkreise.
            </p>
          </CardContent>
        </Card>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-zuerich" />
    </ArticleLayout>
  );
};

export default LocalSeoZuerich;