import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoKoelnImg from "@/assets/blog/local-seo-koeln.jpg";
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
  Clock
} from "lucide-react";

const LocalSeoKoeln = () => {
  const article = getArticleBySlug("local-seo-koeln");

  if (!article) return null;

  const tocItems = [
    { id: "warum-koeln", title: "Warum Köln besonders ist" },
    { id: "stadtteile", title: "Kölner Stadtteile & Keywords" },
    { id: "koelner-verzeichnisse", title: "Wichtige Kölner Verzeichnisse" },
    { id: "google-business", title: "Google Business für Köln" },
    { id: "lokale-events", title: "Kölner Events nutzen" },
    { id: "wettbewerb", title: "Wettbewerbsanalyse Köln" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie stark ist der Wettbewerb für Local SEO in Köln?",
      answer: "Köln ist nach Berlin, Hamburg und München die viertgrößte Stadt Deutschlands. Der Wettbewerb ist in beliebten Branchen wie Gastronomie, Handwerk und Dienstleistungen sehr hoch. Dennoch gibt es viele Nischen und Stadtteile, in denen du mit guter Optimierung schnell Top-Rankings erreichen kannst."
    },
    {
      question: "Welche Stadtteile in Köln haben das höchste Suchvolumen?",
      answer: "Die höchsten Suchvolumen haben die Innenstadt, Ehrenfeld, Nippes, Deutz und Lindenthal. Aber auch Stadtteile wie Sülz, Mülheim und Porz bieten gute Chancen, da dort weniger Wettbewerb herrscht."
    },
    {
      question: "Soll ich für jeden Kölner Stadtteil eine eigene Seite erstellen?",
      answer: "Wenn du in mehreren Stadtteilen aktiv bist, ja. Erstelle für die 5-10 wichtigsten Stadtteile eigene Landingpages mit einzigartigem Content, lokalen Referenzen und spezifischen Keywords wie 'Friseur Ehrenfeld' oder 'Elektriker Nippes'."
    },
    {
      question: "Welche lokalen Verzeichnisse sind für Kölner Unternehmen wichtig?",
      answer: "Neben Google Business sind koeln.de, koelner-stadtanzeiger.de (Branchenbuch), meinestadt.de/koeln, Yelp Köln und branchenbuch.koeln wichtige lokale Verzeichnisse. Auch die IHK Köln und Handwerkskammer Köln bieten Einträge an."
    },
    {
      question: "Wie nutze ich den Karneval für mein Local SEO?",
      answer: "Karneval ist die größte Veranstaltung in Köln. Erstelle saisonalen Content wie 'Geöffnet während Karneval', 'Karnevalskostüme in Köln' oder 'After-Karneval-Service'. Nutze Google Posts für Karneval-Angebote und aktualisiere deine Öffnungszeiten für die tollen Tage."
    },
    {
      question: "Lohnt sich Local SEO auch für Unternehmen außerhalb der Innenstadt?",
      answer: "Absolut! Gerade in den Außenbezirken ist der Wettbewerb geringer. Viele Kölner suchen bewusst nach Dienstleistern 'in der Nähe' oder in ihrem Veedel. Nutze diese Chance mit gezielten Stadtteil-Keywords."
    },
    {
      question: "Wie wichtig sind Kölsch-Begriffe für Local SEO?",
      answer: "Interessanterweise suchen wenige Menschen auf Kölsch bei Google. Konzentriere dich auf Hochdeutsch, aber nutze Kölner Begriffe wie 'Veedel' in deinem Content, um lokale Authentizität zu zeigen und dich abzuheben."
    },
    {
      question: "Welche Branchen haben in Köln den stärksten Wettbewerb?",
      answer: "Die stärkste Konkurrenz gibt es bei Restaurants, Cafés, Friseuren, Anwälten und Handwerkern in der Innenstadt. Weniger Wettbewerb findest du bei spezialisierten Nischen und in den äußeren Stadtteilen."
    }
  ];

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

  const koelnerStadtteile = [
    { name: "Innenstadt", population: "40.000", competition: "Sehr hoch", tip: "Nische finden" },
    { name: "Ehrenfeld", population: "110.000", competition: "Hoch", tip: "Hipster-Zielgruppe" },
    { name: "Nippes", population: "115.000", competition: "Mittel", tip: "Familien-Keywords" },
    { name: "Deutz", population: "16.000", competition: "Mittel", tip: "Messe-Besucher" },
    { name: "Lindenthal", population: "45.000", competition: "Mittel", tip: "Premium-Segment" },
    { name: "Mülheim", population: "155.000", competition: "Niedrig", tip: "Großes Potenzial" },
    { name: "Porz", population: "115.000", competition: "Niedrig", tip: "Wenig Wettbewerb" },
    { name: "Kalk", population: "125.000", competition: "Niedrig", tip: "Aufstrebend" }
  ];

  const koelnerVerzeichnisse = [
    { name: "koeln.de", type: "Stadtportal", priority: "Sehr hoch" },
    { name: "Kölner Stadt-Anzeiger", type: "Branchenbuch", priority: "Hoch" },
    { name: "IHK Köln", type: "Unternehmerverzeichnis", priority: "Hoch" },
    { name: "meinestadt.de/koeln", type: "Cityportal", priority: "Mittel" },
    { name: "Handwerkskammer Köln", type: "Handwerkersuche", priority: "Mittel" },
    { name: "Yelp Köln", type: "Bewertungsportal", priority: "Mittel" }
  ];

  const koelnerEvents = [
    { name: "Karneval", timing: "Februar/März", opportunity: "Saisonale Angebote, spezielle Öffnungszeiten" },
    { name: "Gamescom", timing: "August", opportunity: "Messe-Besucher, Hotels, Restaurants" },
    { name: "Weihnachtsmärkte", timing: "Nov-Dez", opportunity: "Touristen, Geschenkideen" },
    { name: "Kölner Lichter", timing: "Juli", opportunity: "Events, Gastronomie" },
    { name: "Pride/CSD", timing: "Juli", opportunity: "Inklusiver Content, Events" }
  ];

  const sources: { title: string; url: string; type: "article" | "documentation" | "study" | "tool" }[] = [
    { title: "Stadt Köln - Statistik", url: "https://www.stadt-koeln.de/", type: "documentation" },
    { title: "IHK Köln", url: "https://www.ihk-koeln.de/", type: "documentation" },
    { title: "Google Business Hilfe", url: "https://support.google.com/business/", type: "documentation" }
  ];

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Köln ist nicht nur die größte Stadt Nordrhein-Westfalens, sondern auch ein einzigartiger 
        Markt für lokale Unternehmen. Mit über <strong>1,1 Millionen Einwohnern</strong> und 
        einer starken Veedel-Kultur bietet die Domstadt besondere Chancen – und Herausforderungen 
        – für <LexikonLink term="Local SEO" />. Dieser Guide zeigt dir, wie du in Köln bei Google 
        ganz nach oben kommst.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Kölner Stadtteile (Veedels) gezielt für Keywords nutzen",
          "Lokale Verzeichnisse wie koeln.de und IHK Köln nutzen",
          "Saisonale Events wie Karneval für Content und Angebote nutzen",
          "Stadtteil-spezifische Landingpages für mehr Reichweite",
          "Die Kölner Mentalität in deinem Marketing widerspiegeln"
        ]}
      />

      <BlogImage 
        src={localSeoKoelnImg} 
        alt="Kölner Dom mit Google Maps Overlay für Local SEO"
        caption="Local SEO in Köln: Der Dom steht für Tradition, deine Google-Präsenz für Sichtbarkeit"
      />

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">1,1 Mio</div>
          <p className="text-xs text-muted-foreground">Einwohner</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">86</div>
          <p className="text-xs text-muted-foreground">Stadtteile (Veedels)</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">150k+</div>
          <p className="text-xs text-muted-foreground">Unternehmen</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">14 Mio</div>
          <p className="text-xs text-muted-foreground">Touristen/Jahr</p>
        </div>
      </div>

      {/* Warum Köln */}
      <section id="warum-koeln" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Building2 className="h-6 w-6 text-primary" />
          Warum Köln für Local SEO besonders ist
        </h2>

        <p className="text-muted-foreground mb-6">
          Köln unterscheidet sich von anderen deutschen Großstädten durch seine einzigartige 
          Veedel-Kultur. Kölner identifizieren sich stark mit ihrem Stadtteil und suchen 
          oft gezielt nach lokalen Anbietern "im Veedel":
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Veedel-Kultur nutzen
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Kölner kaufen bevorzugt im eigenen Stadtteil
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Starke emotionale Bindung ans Veedel
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                "Friseur Nippes" statt nur "Friseur Köln"
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Kölner Mentalität verstehen
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Offene, gesellige Kultur
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Humor und Authentizität werden geschätzt
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Mundpropaganda immer noch wichtig
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Kölner Tipp</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Nutze lokale Redewendungen wie "Et kütt wie et kütt" in deinem Content – aber 
                übertreibe es nicht. Authentizität schlägt Klischees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stadtteile */}
      <section id="stadtteile" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Kölner Stadtteile & Keywords
        </h2>

        <p className="text-muted-foreground mb-6">
          Köln hat 86 Stadtteile in 9 Bezirken. Hier sind die wichtigsten für dein Local SEO:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Stadtteil</th>
                <th className="border border-border p-3 text-left">Einwohner</th>
                <th className="border border-border p-3 text-left">Wettbewerb</th>
                <th className="border border-border p-3 text-left">Tipp</th>
              </tr>
            </thead>
            <tbody>
              {koelnerStadtteile.map((stadtteil, index) => (
                <tr key={index}>
                  <td className="border border-border p-3 font-medium">{stadtteil.name}</td>
                  <td className="border border-border p-3">{stadtteil.population}</td>
                  <td className="border border-border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      stadtteil.competition === "Sehr hoch" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                      stadtteil.competition === "Hoch" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
                      stadtteil.competition === "Mittel" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                      {stadtteil.competition}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{stadtteil.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Keyword-Beispiele für Kölner Stadtteile</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">Ehrenfeld</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Friseur Ehrenfeld</li>
              <li>• Restaurant Venloer Straße</li>
              <li>• Tattoo Studio Ehrenfeld</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">Nippes</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Kinderarzt Nippes</li>
              <li>• Bio-Laden Nippes</li>
              <li>• Yoga Neusser Straße</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium mb-2">Deutz</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Hotel Köln Messe</li>
              <li>• Restaurant Deutz</li>
              <li>• Taxi Köln Messe</li>
            </ul>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Verzeichnisse */}
      <section id="koelner-verzeichnisse" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          Wichtige Kölner Verzeichnisse
        </h2>

        <p className="text-muted-foreground mb-6">
          Neben den bundesweiten Verzeichnissen gibt es spezielle Kölner Plattformen, die deine 
          <LexikonLink term="NAP-Konsistenz" /> stärken:
        </p>

        <div className="space-y-4 mb-6">
          {koelnerVerzeichnisse.map((verzeichnis, index) => (
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
      <section id="google-business" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          Google Business für Köln optimieren
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein <LexikonLink term="Google Business Profile" /> ist der Schlüssel zum Erfolg im 
          Kölner <LexikonLink term="Local Pack" />. So optimierst du es für den Kölner Markt:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">1. Kategorie & Einzugsgebiet</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Wähle die passende Hauptkategorie + 2-3 Nebenkategorien
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Definiere dein Einzugsgebiet nach Stadtteilen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Nutze "Köln" + Stadtteil in der Beschreibung
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">2. Fotos & Bilder</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Zeige lokale Bezüge (Dom im Hintergrund, Rheinufer)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Lade mindestens 10 hochwertige Fotos hoch
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Aktualisiere Bilder bei Events wie Karneval
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">3. Google Posts nutzen</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Poste regelmäßig News und Angebote
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Nutze lokale Events als Aufhänger
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Erwähne Stadtteile in deinen Posts
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="lokale-events" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          Kölner Events für Local SEO nutzen
        </h2>

        <p className="text-muted-foreground mb-6">
          Köln ist bekannt für große Events, die du für saisonales Marketing nutzen kannst:
        </p>

        <div className="space-y-4 mb-6">
          {koelnerEvents.map((event, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{event.name}</h3>
                <span className="text-sm text-muted-foreground">{event.timing}</span>
              </div>
              <p className="text-sm text-muted-foreground">{event.opportunity}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Karneval-Strategie</p>
              <p className="text-muted-foreground text-sm">
                Karneval ist DIE Chance für Kölner Unternehmen. Erstelle 2-3 Monate vorher 
                Content zu Karneval-Themen, aktualisiere Öffnungszeiten und nutze 
                Karneval-Keywords wie "Kostüm Köln" oder "After-Karneval-Brunch".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wettbewerb */}
      <section id="wettbewerb" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Wettbewerbsanalyse in Köln
        </h2>

        <p className="text-muted-foreground mb-6">
          Um in Köln erfolgreich zu sein, musst du deine Konkurrenz kennen:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Analyse-Schritte</h3>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Suche deine Haupt-Keywords bei Google
              </li>
              <li className="flex gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                Notiere die Top 3 im Local Pack
              </li>
              <li className="flex gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                Analysiere ihre Bewertungen, Fotos, Posts
              </li>
              <li className="flex gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                Finde Lücken, die du füllen kannst
              </li>
            </ol>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Typische Schwächen nutzen</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Wenige oder alte Fotos
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Keine Google Posts
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Unbeantwortete Bewertungen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Fehlende Stadtteil-Seiten
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu Local SEO in Köln
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

      <HelpfulnessWidget articleSlug="local-seo-koeln" />

      <SourcesSection sources={sources} />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoKoeln;
