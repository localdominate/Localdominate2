import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Calendar, TrendingUp, Building, Users, Star, Beer, Mountain, ShoppingBag } from "lucide-react";
import { useState } from "react";

const LocalSeoMuenchen = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-muenchen", language);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Einführung" },
    { id: "muenchner-markt", title: "Der Münchner Markt" },
    { id: "stadtteile", title: "Münchner Stadtteile" },
    { id: "bayerische-keywords", title: "Bayerische Keywords" },
    { id: "saisonale-events", title: "Saisonale Events" },
    { id: "verzeichnisse", title: "Lokale Verzeichnisse" },
    { id: "google-business", title: "Google Business Profil" },
    { id: "faq", title: "FAQ" }
  ];

  const districts = [
    { 
      name: "Schwabing", 
      icon: Building,
      description: "Studentenviertel mit hoher Kaufkraft, junge Zielgruppe",
      keywords: ["Schwabing Restaurant", "Café Leopoldstraße", "Bar Schwabing"],
      competition: "Sehr hoch",
      tip: "Fokus auf Instagram-taugliche Locations und Student-Angebote"
    },
    { 
      name: "Maxvorstadt", 
      icon: Building,
      description: "Museumsviertel, Bildungsbürger, Kulturinteressierte",
      keywords: ["Galerie Maxvorstadt", "Buchhandlung Universität", "Café Kunstareal"],
      competition: "Hoch",
      tip: "Kulturelle Keywords und Nähe zu Museen betonen"
    },
    { 
      name: "Giesing", 
      icon: Users,
      description: "Authentisches München, traditionell, aufstrebend",
      keywords: ["Wirtshaus Giesing", "Metzger Obergiesing", "Bäckerei Untergiesing"],
      competition: "Mittel",
      tip: "Authentizität und bayerische Tradition hervorheben"
    },
    { 
      name: "Haidhausen", 
      icon: ShoppingBag,
      description: "Französisches Viertel, gehoben, Szene-Stadtteil",
      keywords: ["Boutique Haidhausen", "Feinkost Wiener Platz", "Café Bordeauxplatz"],
      competition: "Hoch",
      tip: "Premium-Positionierung, gehobene Zielgruppe ansprechen"
    },
    { 
      name: "Sendling", 
      icon: ShoppingBag,
      description: "Familiär, Großmarkthalle, handwerklich geprägt",
      keywords: ["Handwerker Sendling", "Großmarkt München", "Bioladen Sendling"],
      competition: "Mittel",
      tip: "Familien-Keywords und Handwerk-Tradition"
    },
    { 
      name: "Bogenhausen", 
      icon: Mountain,
      description: "Nobelviertel, höchste Kaufkraft, exklusiv",
      keywords: ["Luxus Bogenhausen", "Zahnarzt Prinzregentenstraße", "Privatschule Bogenhausen"],
      competition: "Mittel-Hoch",
      tip: "Premium-Services, Diskretion und Qualität betonen"
    }
  ];

  const dialectKeywords = [
    { hochdeutsch: "Metzgerei", bayerisch: "Metzger / Fleischerei", suchvolumen: "Metzgerei 3x höher", empfehlung: "Beide verwenden" },
    { hochdeutsch: "Bäckerei", bayerisch: "Beck / Bäcker", suchvolumen: "Bäckerei dominant", empfehlung: "Bäckerei + Beck" },
    { hochdeutsch: "Gaststätte", bayerisch: "Wirtshaus / Wirtschaft", suchvolumen: "Wirtshaus beliebter", empfehlung: "Wirtshaus priorisieren" },
    { hochdeutsch: "Biergarten", bayerisch: "Biergarten (gleich)", suchvolumen: "Sehr hoch im Sommer", empfehlung: "Saisonal optimieren" },
    { hochdeutsch: "Brötchen", bayerisch: "Semmel / Semmeln", suchvolumen: "Semmel in Bayern", empfehlung: "Semmel für lokale Suchen" },
    { hochdeutsch: "Fleischkäse", bayerisch: "Leberkäs / Leberkas", suchvolumen: "Leberkäs eindeutig", empfehlung: "Leberkäs verwenden" },
    { hochdeutsch: "Schreiner", bayerisch: "Schreiner (gleich)", suchvolumen: "Ausgeglichen", empfehlung: "Beide + Tischler" },
    { hochdeutsch: "Hausmeister", bayerisch: "Hausmasta", suchvolumen: "Hausmeister dominant", empfehlung: "Hochdeutsch bevorzugen" }
  ];

  const seasonalEvents = [
    {
      event: "Oktoberfest / Wiesn",
      zeitraum: "Mitte September - Anfang Oktober",
      icon: Beer,
      keywords: ["Wiesn Tracht", "Dirndl München", "Lederhosen kaufen", "Oktoberfest Friseur", "Wiesn Taxi", "Hotelzimmer Oktoberfest"],
      strategie: "Ab Juli Keywords optimieren, Landing Pages erstellen, Google Posts ab August",
      potenzial: "Extrem hoch - 6 Mio. Besucher jährlich"
    },
    {
      event: "Christkindlmarkt",
      zeitraum: "Ende November - 24. Dezember",
      icon: Star,
      keywords: ["Christkindlmarkt München", "Glühwein Marienplatz", "Weihnachtsgeschenke München", "Adventsbrunch München"],
      strategie: "Ab Oktober vorbereiten, lokale Geschenkideen-Content erstellen",
      potenzial: "Sehr hoch - 3 Mio. Besucher"
    },
    {
      event: "Starkbierfest / Starkbierzeit",
      zeitraum: "März (nach Fasching)",
      icon: Beer,
      keywords: ["Starkbierfest München", "Salvator Paulaner", "Nockherberg", "Starkbier München"],
      strategie: "Februar-Start, traditionelle bayerische Keywords",
      potenzial: "Mittel-Hoch - lokale Tradition"
    },
    {
      event: "Auer Dult",
      zeitraum: "3x jährlich (Mai, Juli, Oktober)",
      icon: ShoppingBag,
      keywords: ["Auer Dult", "Mariahilfplatz Markt", "Antiquitäten München", "Geschirrmarkt München"],
      strategie: "Jeweils 2 Wochen vorher optimieren",
      potenzial: "Mittel - traditionelles Münchner Event"
    },
    {
      event: "FC Bayern Spieltage",
      zeitraum: "August - Mai (Saison)",
      icon: Users,
      keywords: ["Bayern München Kneipe", "Public Viewing München", "Allianz Arena Restaurant", "Fußball schauen München"],
      strategie: "Spielplan-basierte Google Posts, Match-Day Angebote",
      potenzial: "Hoch - wöchentliche Suchspitzen"
    },
    {
      event: "Sommersaison / Biergarten",
      zeitraum: "April - September",
      icon: Mountain,
      keywords: ["Biergarten München", "Englischer Garten Essen", "Isarauen Grillen", "Seeshaupt Ausflug"],
      strategie: "Ab März vorbereiten, Outdoor-Keywords stark gewichten",
      potenzial: "Sehr hoch - Hauptsaison Gastronomie"
    }
  ];

  const directories = [
    { name: "muenchen.de", kategorie: "Offizielles Portal", prioritaet: "Sehr hoch", besonderheit: "Städtisches Branchenbuch" },
    { name: "meinestadt.de/muenchen", kategorie: "Allgemein", prioritaet: "Hoch", besonderheit: "Starke lokale Domain" },
    { name: "muenchner-merkur.de", kategorie: "Zeitung", prioritaet: "Hoch", besonderheit: "Regionale Autorität" },
    { name: "sueddeutsche.de", kategorie: "Zeitung", prioritaet: "Hoch", besonderheit: "Überregionale Relevanz" },
    { name: "tz.de", kategorie: "Boulevard", prioritaet: "Mittel", besonderheit: "Hohes lokales Engagement" },
    { name: "abendzeitung-muenchen.de", kategorie: "Zeitung", prioritaet: "Mittel", besonderheit: "Traditionelle Münchner Zeitung" },
    { name: "muenchen.ihk.de", kategorie: "IHK", prioritaet: "Hoch", besonderheit: "Vertrauenswürdig für B2B" },
    { name: "hwk-muenchen.de", kategorie: "Handwerk", prioritaet: "Hoch", besonderheit: "Pflicht für Handwerker" },
    { name: "gelbeseiten.de", kategorie: "Branchenbuch", prioritaet: "Mittel", besonderheit: "Klassiker, immer noch relevant" },
    { name: "11880.com", kategorie: "Branchenbuch", prioritaet: "Mittel", besonderheit: "Gute lokale Sichtbarkeit" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie wichtig ist der Dialekt für Local SEO in München?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bayerische Dialekt-Keywords können bis zu 30% mehr lokale Suchanfragen abdecken. Begriffe wie 'Wirtshaus' statt 'Gaststätte' oder 'Leberkäs' statt 'Fleischkäse' werden von echten Münchnern häufiger gesucht. Die beste Strategie ist, beide Varianten zu verwenden."
        }
      },
      {
        "@type": "Question", 
        "name": "Wann sollte ich mit der Oktoberfest-SEO beginnen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beginnen Sie spätestens im Juli mit der Optimierung für Oktoberfest-Keywords. Google benötigt Zeit zum Indexieren, und die Konkurrenz ist enorm. Erstellen Sie dedizierte Landing Pages und starten Sie ab August mit regelmäßigen Google Posts zur Wiesn."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Münchner Stadtteile haben den höchsten SEO-Wettbewerb?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schwabing, Maxvorstadt und die Innenstadt (Altstadt-Lehel) haben den höchsten Wettbewerb. In aufstrebenden Vierteln wie Giesing, Sendling oder dem Westend ist es einfacher, gute Rankings zu erzielen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie nutze ich lokale Münchner Events für SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Erstellen Sie für jedes große Event (Oktoberfest, Christkindlmarkt, Starkbierfest) eigene Inhalte. Nutzen Sie Google Posts vor und während der Events. Aktualisieren Sie Öffnungszeiten und erstellen Sie event-spezifische Angebote in Ihrem Google Business Profil."
        }
      }
    ]
  };

  return (
    <ArticleLayout article={article} tocItems={tocItems} additionalSchema={faqSchema}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">1.5 Mio.</div>
            <div className="text-sm text-muted-foreground">Einwohner</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">6 Mio.</div>
            <div className="text-sm text-muted-foreground">Wiesn-Besucher</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">Top 3</div>
            <div className="text-sm text-muted-foreground">Kaufkraft DE</div>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">40 Mio.</div>
            <div className="text-sm text-muted-foreground">Touristen/Jahr</div>
          </CardContent>
        </Card>
      </div>

      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>München ist der heilige Gral des Local SEO in Deutschland.</strong> Mit der höchsten 
        Kaufkraft aller deutschen Großstädte, 40 Millionen Touristen jährlich und Events wie dem 
        Oktoberfest bietet die bayerische Landeshauptstadt enormes Potenzial – aber auch extremen 
        Wettbewerb. Dieser Guide zeigt Ihnen, wie Sie mit bayerischem Lokalkolorit, 
        stadtteil-spezifischen Strategien und saisonaler Event-Optimierung die Münchner 
        Google-Suche dominieren.
      </p>

      <ArticleCTA />

      {/* Münchner Markt Section */}
      <section id="muenchner-markt" className="mb-12">
        <h2 className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Der Münchner Markt: Zahlen & Besonderheiten
        </h2>
        
        <p>
          München ist nicht irgendeine deutsche Großstadt – es ist ein eigener Mikrokosmos mit 
          einzigartigen Charakteristiken, die Ihre Local-SEO-Strategie maßgeblich beeinflussen sollten:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-lg">💰 Höchste Kaufkraft Deutschlands</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Münchner geben durchschnittlich <strong>134% des Bundesdurchschnitts</strong> aus. 
                Das bedeutet: Premium-Keywords und hochpreisige Services haben hier das größte Potenzial. 
                Scheuen Sie sich nicht vor "luxuriös", "exklusiv" oder "Premium" in Ihren Keywords.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-lg">🎭 Tradition trifft Moderne</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Münchner lieben ihre Traditionen – vom Wirtshaus bis zur Tracht. Gleichzeitig ist 
                München ein Tech-Hub (Google, Microsoft, BMW). Diese Dualität sollte sich in Ihrer 
                Keyword-Strategie widerspiegeln: <strong>traditionell UND innovativ</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-lg">🌍 Internationale Metropole</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                25% der Münchner haben einen Migrationshintergrund, dazu kommen Millionen 
                internationaler Besucher. <strong>Englische Keywords</strong> können in bestimmten 
                Branchen (Tech, Tourismus, Gastronomie) sinnvoll sein.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-lg">🚗 Starke lokale Mobilität</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Münchner sind mobil und nutzen intensiv "in meiner Nähe"-Suchen. 
                <strong>71% der lokalen Suchen</strong> führen innerhalb von 24 Stunden zu einem 
                Geschäftsbesuch. Mobile Optimierung ist hier keine Option, sondern Pflicht.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold mb-4">🎯 Münchner Such-Mentalität verstehen</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>Qualitätsbewusst:</strong> Münchner zahlen gerne mehr für Qualität – "billig" ist kein gutes Keyword</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>Markenbewusst:</strong> Bekannte Namen und Auszeichnungen werden bevorzugt gesucht</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>Lokal verbunden:</strong> "Münchner" oder Stadtteil im Firmennamen ist ein Plus</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>Event-orientiert:</strong> Suchen spiken massiv rund um lokale Events</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stadtteile Section */}
      <section id="stadtteile" className="mb-12">
        <h2 className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Münchner Stadtteile: Interaktives Ranking
        </h2>
        
        <p className="mb-6">
          München besteht aus 25 Stadtbezirken mit völlig unterschiedlichen Charakteren. 
          Klicken Sie auf einen Stadtteil, um spezifische SEO-Empfehlungen zu erhalten:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {districts.map((district) => {
            const Icon = district.icon;
            return (
              <Card 
                key={district.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedDistrict === district.name 
                    ? 'ring-2 ring-primary bg-primary/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedDistrict(
                  selectedDistrict === district.name ? null : district.name
                )}
              >
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{district.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{district.description}</p>
                  <Badge variant="outline" className="mt-2">
                    Wettbewerb: {district.competition}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedDistrict && (
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 animate-in fade-in slide-in-from-top-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                SEO-Strategie für {selectedDistrict}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const district = districts.find(d => d.name === selectedDistrict);
                if (!district) return null;
                return (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">🎯 Top-Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {district.keywords.map((keyword, i) => (
                          <Badge key={i} variant="secondary">{keyword}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">💡 Profi-Tipp:</h4>
                      <p className="text-muted-foreground">{district.tip}</p>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        <div className="bg-muted/30 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-4">📍 Stadtteil-SEO Grundregeln für München</h3>
          <ol className="space-y-3 list-decimal list-inside">
            <li>
              <strong>Immer den Stadtteil in den Title Tag:</strong> "Friseur Schwabing" performt 
              besser als "Friseur München" für lokale Kunden
            </li>
            <li>
              <strong>Nachbarstadtteile einbeziehen:</strong> Wer in Schwabing sucht, akzeptiert 
              auch Maxvorstadt – erwähnen Sie angrenzende Viertel
            </li>
            <li>
              <strong>Lokale Landmarks nutzen:</strong> "Nähe Englischer Garten" oder 
              "am Viktualienmarkt" sind starke Ranking-Signale
            </li>
            <li>
              <strong>Stadtteil-spezifische Landing Pages:</strong> Bei mehreren Standorten oder 
              Service-Gebieten lohnen sich separate Seiten pro Stadtteil
            </li>
          </ol>
        </div>
      </section>

      {/* Bayerische Keywords Section */}
      <section id="bayerische-keywords" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Beer className="h-6 w-6 text-primary" />
          Bayerische Dialekt-Keywords: Der Geheimtipp
        </h2>
        
        <p className="mb-6">
          Ein oft übersehener Ranking-Faktor in München: <strong>Bayerische Dialekt-Begriffe</strong>. 
          Echte Münchner suchen anders als Zugereiste oder Touristen. Wer beide Varianten abdeckt, 
          erreicht mehr potenzielle Kunden.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Hochdeutsch</th>
                <th className="border p-3 text-left">Bayerisch</th>
                <th className="border p-3 text-left">Suchvolumen</th>
                <th className="border p-3 text-left">Empfehlung</th>
              </tr>
            </thead>
            <tbody>
              {dialectKeywords.map((keyword, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="border p-3">{keyword.hochdeutsch}</td>
                  <td className="border p-3 font-medium">{keyword.bayerisch}</td>
                  <td className="border p-3 text-sm text-muted-foreground">{keyword.suchvolumen}</td>
                  <td className="border p-3">
                    <Badge variant="outline">{keyword.empfehlung}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-500/30 bg-green-500/5">
            <CardHeader>
              <CardTitle className="text-lg text-green-700">✅ So nutzen Sie Dialekt-Keywords</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Verwenden Sie beide Varianten auf Ihrer Website</p>
              <p>• Bayerische Begriffe in H2/H3-Überschriften einbauen</p>
              <p>• FAQ-Sektion mit "Semmel" und "Brötchen" erstellen</p>
              <p>• Alt-Texte mit lokalen Begriffen versehen</p>
              <p>• Google Business Beschreibung: Hauptbegriff + Dialekt</p>
            </CardContent>
          </Card>

          <Card className="border-red-500/30 bg-red-500/5">
            <CardHeader>
              <CardTitle className="text-lg text-red-700">❌ Diese Fehler vermeiden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Nicht ausschließlich Dialekt verwenden</p>
              <p>• Keine falschen Dialektbegriffe erfinden</p>
              <p>• Keyword-Stuffing mit beiden Varianten</p>
              <p>• Dialekt in Meta-Descriptions übertreiben</p>
              <p>• Bei hochpreisigen Services zu viel Dialekt</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-3">🍺 Branchenspezifische Münchner Keywords</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">Gastronomie</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Wirtschaft / Wirtshaus</li>
                <li>• Brotzeit</li>
                <li>• Schweinshaxn</li>
                <li>• Weißwurst (vor 12 Uhr!)</li>
                <li>• Obatzda</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Handwerk</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Spengla (Klempner)</li>
                <li>• Schreiner (nicht Tischler)</li>
                <li>• Hafner (Ofenbauer)</li>
                <li>• Kaminkeherer</li>
                <li>• Gipser (Stuckateur)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Einzelhandel</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Trachtenladen</li>
                <li>• Viktualien (Lebensmittel)</li>
                <li>• Schmankerl</li>
                <li>• Dirndl / Lederhosen</li>
                <li>• Gamsbart</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Saisonale Events Section */}
      <section id="saisonale-events" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Saisonale Events: Der Münchner SEO-Kalender
        </h2>
        
        <p className="mb-6">
          München lebt von seinen Events. Das Oktoberfest allein bringt 6 Millionen Besucher – 
          wer diese saisonalen Chancen nicht nutzt, verschenkt massives Traffic-Potenzial. 
          Hier ist Ihr kompletter Event-SEO-Kalender:
        </p>

        <div className="space-y-6">
          {seasonalEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="block">{event.event}</span>
                      <span className="text-sm font-normal text-muted-foreground">{event.zeitraum}</span>
                    </div>
                    <Badge className="ml-auto" variant="outline">{event.potenzial}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">🎯 Top-Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary">{keyword}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-1">📅 Strategie:</h4>
                    <p className="text-sm text-muted-foreground">{event.strategie}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beer className="h-6 w-6 text-amber-600" />
              🎪 Oktoberfest SEO: Der Mega-Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Das Oktoberfest ist das <strong>größte Volksfest der Welt</strong> und bietet für 
              nahezu jede Branche SEO-Potenzial. So nutzen Sie die Wiesn optimal:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Timeline für Oktoberfest-SEO:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-16 font-medium">Juni</span>
                    <span className="text-muted-foreground">Landing Pages erstellen/aktualisieren</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-16 font-medium">Juli</span>
                    <span className="text-muted-foreground">Keywords optimieren, Content veröffentlichen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-16 font-medium">August</span>
                    <span className="text-muted-foreground">Google Posts starten, GMB aktualisieren</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-16 font-medium">September</span>
                    <span className="text-muted-foreground">Tägliche Posts, Öffnungszeiten anpassen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-16 font-medium">Oktober</span>
                    <span className="text-muted-foreground">Maximale Aktivität, Event-Fotos teilen</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Branchen mit Wiesn-Potenzial:</h4>
                <ul className="space-y-1 text-sm">
                  <li>✓ Trachtengeschäfte (Dirndl, Lederhosen)</li>
                  <li>✓ Friseure (Wiesn-Frisuren)</li>
                  <li>✓ Hotels & Pensionen</li>
                  <li>✓ Restaurants & Wirtshäuser</li>
                  <li>✓ Taxi & Shuttle-Services</li>
                  <li>✓ Reinigungen (Trachten-Reinigung)</li>
                  <li>✓ Schuster (Trachtenschuhe)</li>
                  <li>✓ Schneider (Änderungen)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Verzeichnisse Section */}
      <section id="verzeichnisse" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          Lokale Verzeichnisse & Citations für München
        </h2>
        
        <p className="mb-6">
          Neben den deutschlandweiten Verzeichnissen gibt es spezifische Münchner und bayerische 
          Plattformen, die für lokale Rankings besonders wichtig sind:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Verzeichnis</th>
                <th className="border p-3 text-left">Kategorie</th>
                <th className="border p-3 text-left">Priorität</th>
                <th className="border p-3 text-left">Besonderheit</th>
              </tr>
            </thead>
            <tbody>
              {directories.map((dir, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="border p-3 font-medium">{dir.name}</td>
                  <td className="border p-3">{dir.kategorie}</td>
                  <td className="border p-3">
                    <Badge variant={dir.prioritaet === "Sehr hoch" ? "default" : "outline"}>
                      {dir.prioritaet}
                    </Badge>
                  </td>
                  <td className="border p-3 text-sm text-muted-foreground">{dir.besonderheit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">🏛️ Branchenspezifische Münchner Verzeichnisse</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Gastronomie</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• muenchen.restaurant</li>
                <li>• falstaff.com (Weinführer)</li>
                <li>• restaurant-ranglisten.de</li>
                <li>• top-gastro-muenchen.de</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Handwerk</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• hwk-muenchen.de (Pflicht!)</li>
                <li>• meisterbrief.de</li>
                <li>• handwerk.de</li>
                <li>• meinhandwerker.bayern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Medizin</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• jameda.de</li>
                <li>• docinsider.de</li>
                <li>• arzt-auskunft.de</li>
                <li>• kvb.de (Kassenärzte Bayern)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Recht</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• anwalt.de</li>
                <li>• rak-muenchen.de</li>
                <li>• advocado.de</li>
                <li>• anwaltssuche.de</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Section */}
      <section id="google-business" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Star className="h-6 w-6 text-primary" />
          Google Business Profil für München optimieren
        </h2>
        
        <p className="mb-6">
          In München ist der Wettbewerb im Google Maps Pack besonders intensiv. 
          Hier sind Münchner-spezifische Tipps für Ihr Google Business Profil:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📍 Standort-Optimierung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Exakte Adresse mit Stadtteil eingeben</p>
              <p>• Service-Area für Nachbarstadtteile erweitern</p>
              <p>• Landmarks in der Beschreibung erwähnen</p>
              <p>• Parkhinweise für autofahrende Kunden</p>
              <p>• U-Bahn/S-Bahn Station angeben</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📸 Foto-Strategie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Münchner Ambiente zeigen (Biergarten, Altbau)</p>
              <p>• Saisonale Fotos (Wiesn-Deko, Christkindlmarkt)</p>
              <p>• Team in Tracht (wenn passend zur Branche)</p>
              <p>• Lokale Produkte hervorheben</p>
              <p>• Regelmäßig neue Bilder (mind. 1x/Monat)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">💬 Bewertungs-Taktik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Münchner Kunden aktiv um Bewertungen bitten</p>
              <p>• Auf Bayerisch/Dialekt-Bewertungen eingehen</p>
              <p>• Lokale Keywords in Antworten verwenden</p>
              <p>• Negative Bewertungen professionell beantworten</p>
              <p>• Stammkunden-Beziehungen pflegen</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📅 Google Posts Kalender</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Wöchentliche Posts sind Minimum</p>
              <p>• Event-Posts vor Oktoberfest, Christkindlmarkt etc.</p>
              <p>• FC Bayern Spieltag-Posts (für Gastro)</p>
              <p>• Saisonale Angebote (Biergarten-Eröffnung)</p>
              <p>• Lokale News und Engagement zeigen</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <ArticleCTA />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2>Häufig gestellte Fragen zu Local SEO in München</h2>
        
        <div className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Wie wichtig ist der Dialekt für Local SEO in München?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bayerische Dialekt-Keywords können bis zu <strong>30% mehr lokale Suchanfragen</strong> abdecken. 
                Begriffe wie "Wirtshaus" statt "Gaststätte" oder "Leberkäs" statt "Fleischkäse" werden 
                von echten Münchnern häufiger gesucht. Die beste Strategie ist, beide Varianten 
                auf Ihrer Website zu verwenden und so das gesamte Suchvolumen abzudecken.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Wann sollte ich mit der Oktoberfest-SEO beginnen?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beginnen Sie spätestens im <strong>Juli</strong> mit der Optimierung für Oktoberfest-Keywords. 
                Google benötigt Zeit zum Indexieren, und die Konkurrenz ist enorm. Erstellen Sie 
                dedizierte Landing Pages im Juni, optimieren Sie im Juli, und starten Sie ab August 
                mit regelmäßigen Google Posts zur Wiesn. Je früher, desto besser!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Welche Münchner Stadtteile haben den höchsten SEO-Wettbewerb?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>Schwabing, Maxvorstadt und die Innenstadt (Altstadt-Lehel)</strong> haben den höchsten 
                Wettbewerb. In aufstrebenden Vierteln wie Giesing, Sendling oder dem Westend ist es 
                deutlich einfacher, gute Rankings zu erzielen. Wenn Sie in einem stark umkämpften 
                Viertel sind, fokussieren Sie sich auf Nischen-Keywords und exzellente Bewertungen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Wie nutze ich lokale Münchner Events für SEO?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Erstellen Sie für jedes große Event (Oktoberfest, Christkindlmarkt, Starkbierfest) 
                eigene Inhalte und Landing Pages. Nutzen Sie Google Posts vor und während der Events. 
                Aktualisieren Sie Ihre Öffnungszeiten rechtzeitig und erstellen Sie event-spezifische 
                Angebote in Ihrem Google Business Profil. <strong>Timing ist entscheidend</strong> – 
                beginnen Sie mindestens 8 Wochen vor dem Event.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default LocalSeoMuenchen;
