import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import { getArticleBySlug } from "@/data/blogArticles";
import googleAiOverviewsImg from "@/assets/blog/google-ai-overviews.webp";
import { 
  CheckCircle, 
  Bot,
  Sparkles,
  Search,
  MapPin,
  AlertTriangle,
  TrendingUp,
  Target,
  Lightbulb,
  Eye,
  XCircle
} from "lucide-react";

const GoogleAiOverviews = () => {
  const article = getArticleBySlug("google-ai-overviews-local-seo");

  if (!article) return null;

  const tocItems = [
    { id: "was-sind-ai-overviews", title: "Was sind AI Overviews?" },
    { id: "auswirkungen-local-seo", title: "Auswirkungen auf Local SEO" },
    { id: "local-pack-integration", title: "Local Pack & AI Overviews" },
    { id: "optimierung-strategien", title: "Optimierungsstrategien" },
    { id: "zukunft-lokale-suche", title: "Die Zukunft der lokalen Suche" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Werden AI Overviews das Local Pack ersetzen?",
      answer: "Nein, Google hat betont, dass lokale Suchergebnisse und das Local Pack weiterhin wichtig bleiben. AI Overviews ergänzen die Suchergebnisse, ersetzen sie aber nicht. Für transaktionale lokale Suchen ('Friseur in der Nähe') bleibt das Local Pack dominant."
    },
    {
      question: "Wie bekomme ich mein Unternehmen in AI Overviews erwähnt?",
      answer: "Es gibt keine direkte Möglichkeit, in AI Overviews zu erscheinen. Google nutzt seine Indexdaten, um Antworten zu generieren. Beste Strategie: Hochwertiger, einzigartiger Content, starke E-E-A-T-Signale und ein optimiertes Google Business Profil."
    },
    {
      question: "Verliere ich Traffic durch AI Overviews?",
      answer: "Für informationelle Suchanfragen kann es zu weniger Klicks kommen, da Google die Antwort direkt zeigt. Für lokale, transaktionale Suchen ('Restaurant reservieren', 'Handwerker Angebot') ist der Einfluss geringer, da Nutzer handeln wollen."
    },
    {
      question: "Sind AI Overviews in Deutschland schon aktiv?",
      answer: "Stand 2026 werden AI Overviews schrittweise weltweit ausgerollt, auch im deutschsprachigen Raum. Die Verfügbarkeit variiert je nach Suchanfrage. Nicht jede Suche löst ein AI Overview aus."
    },
    {
      question: "Wie erkenne ich, ob AI Overviews mein Business beeinflussen?",
      answer: "Suche nach deinen wichtigsten Keywords und beobachte, ob AI Overviews erscheinen. Achte auf Veränderungen in Google Search Console (Impressionen, Klicks). Für lokale transaktionale Suchen ist der Einfluss meist gering."
    },
    {
      question: "Beeinflusst mein Google Business Profil die AI Overviews?",
      answer: "Indirekt ja. Google nutzt auch Daten aus Google Business für seine AI-Antworten. Ein gut gepflegtes Profil mit aktuellen Informationen erhöht die Chance, als Quelle genutzt zu werden."
    },
    {
      question: "Soll ich meine Local SEO Strategie wegen AI Overviews ändern?",
      answer: "Die Grundlagen bleiben gleich: Optimiertes Google Business Profil, lokaler Content, Bewertungen. Zusätzlich solltest du FAQ-Content und klare Antworten auf häufige Fragen bereitstellen."
    },
    {
      question: "Werden Bewertungen in AI Overviews angezeigt?",
      answer: "Google kann Bewertungsinformationen in AI Overviews integrieren, z.B. 'Dieses Restaurant hat 4,8 Sterne bei 500 Bewertungen'. Positive Bewertungen bleiben also wichtig für deine Sichtbarkeit."
    }
  ];

  const auswirkungenMatrix = [
    { 
      suchanfrageTyp: "Informationell", 
      beispiel: "Was ist Local SEO?",
      aiOverviewWahrscheinlichkeit: "Sehr hoch",
      localPackEinfluss: "Niedrig",
      empfehlung: "FAQ-Content optimieren"
    },
    { 
      suchanfrageTyp: "Navigational", 
      beispiel: "Restaurant XY Öffnungszeiten",
      aiOverviewWahrscheinlichkeit: "Mittel",
      localPackEinfluss: "Mittel",
      empfehlung: "GMB aktuell halten"
    },
    { 
      suchanfrageTyp: "Transaktional", 
      beispiel: "Friseur in der Nähe",
      aiOverviewWahrscheinlichkeit: "Niedrig",
      localPackEinfluss: "Sehr hoch",
      empfehlung: "Local Pack optimieren"
    },
    { 
      suchanfrageTyp: "Lokal-Kommerziell", 
      beispiel: "Bester Zahnarzt München",
      aiOverviewWahrscheinlichkeit: "Mittel",
      localPackEinfluss: "Hoch",
      empfehlung: "E-E-A-T + Bewertungen"
    }
  ];

  const optimierungsStrategien = [
    { icon: Search, titel: "FAQ-Content erstellen", beschreibung: "Beantworte häufige Fragen klar und strukturiert.", tipps: ["FAQ-Sektion auf jeder Landingpage", "Klare, direkte Antworten in 2-3 Sätzen", "Fragen verwenden, die Kunden wirklich stellen"] },
    { icon: Target, titel: "E-E-A-T stärken", beschreibung: "Zeige Expertise, Erfahrung, Autorität und Vertrauen.", tipps: ["Autoren-Profile mit Qualifikationen", "Kundenbewertungen prominent zeigen", "Zertifikate und Auszeichnungen nennen"] },
    { icon: MapPin, titel: "Local Pack priorisieren", beschreibung: "Das Local Pack bleibt für transaktionale Suchen dominant.", tipps: ["Google Business Profil optimieren", "Bewertungen aktiv sammeln", "NAP-Konsistenz sicherstellen"] },
    { icon: Lightbulb, titel: "Einzigartige Inhalte", beschreibung: "Biete Informationen, die KI nicht leicht zusammenfassen kann.", tipps: ["Lokale Case Studies erstellen", "Eigene Daten und Statistiken nutzen", "Persönliche Erfahrungsberichte teilen"] },
  ];

  const sources = [
    { title: "Google Blog: AI Overviews", url: "https://blog.google/products/search/generative-ai-search/", description: "Offizielle Google-Ankündigung zu AI Overviews" },
    { title: "Search Engine Land: AI Overviews Impact", url: "https://searchengineland.com/", description: "Analyse der Auswirkungen auf SEO" },
    { title: "BrightLocal: Local Search & AI", url: "https://www.brightlocal.com/", description: "Studie zu AI Overviews und Local Search" },
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Google AI Overviews verändern die Art, wie Nutzer Suchergebnisse sehen. Statt einer 
        Liste von Links erhalten sie KI-generierte Zusammenfassungen direkt in den Suchergebnissen. 
        Was bedeutet das für <LexikonLink term="Local SEO" /> und lokale Unternehmen? Dieser Guide 
        erklärt die Auswirkungen und zeigt Strategien für die neue Ära der Suche.
      </p>

      <KeyTakeawaysBox 
        items={[
          "AI Overviews erscheinen vor allem bei informationellen Suchanfragen",
          "Das Local Pack bleibt für transaktionale lokale Suchen wichtig",
          "FAQ-Content und klare Antworten werden wichtiger denn je",
          "E-E-A-T (Expertise, Experience, Authority, Trust) gewinnt an Bedeutung",
          "Google Business Profile Daten fließen in AI-Antworten ein"
        ]}
      />

      <BlogImage 
        src={googleAiOverviewsImg} 
        alt="Google AI Overviews Suchoberfläche mit lokalen Ergebnissen"
        caption="AI Overviews zeigen KI-generierte Zusammenfassungen direkt in der Suche"
      />

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">40%</div>
          <p className="text-xs text-muted-foreground">der Suchen mit AI Overview</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">-15%</div>
          <p className="text-xs text-muted-foreground">weniger Klicks informationell</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">~0%</div>
          <p className="text-xs text-muted-foreground">Einfluss auf Local Pack</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">2025+</div>
          <p className="text-xs text-muted-foreground">Rollout im DACH-Raum</p>
        </div>
      </div>

      {/* Was sind AI Overviews */}
      <section id="was-sind-ai-overviews" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Bot className="h-6 w-6 text-primary" />
          Was sind Google AI Overviews?
        </h2>

        <p className="text-muted-foreground mb-6">
          AI Overviews (früher SGE - Search Generative Experience) sind KI-generierte 
          Zusammenfassungen, die bei bestimmten Suchanfragen über den traditionellen 
          Suchergebnissen erscheinen:
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <Sparkles className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">So funktioniert es</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  Nutzer stellt eine Suchanfrage
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  Google's KI analysiert relevante Webseiten
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  Eine Zusammenfassung wird generiert
                </li>
                <li className="flex gap-2">
                  <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  Quellen werden verlinkt (mit weniger Prominenz)
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              AI Overviews erscheinen oft bei
            </h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• Fragen (Was, Wie, Warum...)</li>
              <li>• Vergleichsanfragen</li>
              <li>• Erklärungsbedürftigen Themen</li>
              <li>• Allgemeinen Informationssuchen</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              AI Overviews erscheinen selten bei
            </h3>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
              <li>• "In der Nähe"-Suchen</li>
              <li>• Direkten Transaktionen</li>
              <li>• Navigationssuchen zu Unternehmen</li>
              <li>• Lokalen Notdienst-Anfragen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Auswirkungen */}
      <section id="auswirkungen-local-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Eye className="h-6 w-6 text-primary" />
          Auswirkungen auf Local SEO
        </h2>

        <p className="text-muted-foreground mb-6">
          Die Auswirkungen von AI Overviews variieren stark je nach Suchanfrage-Typ:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Suchanfrage-Typ</th>
                <th className="border border-border p-3 text-left">Beispiel</th>
                <th className="border border-border p-3 text-left">AI Overview</th>
                <th className="border border-border p-3 text-left">Local Pack</th>
                <th className="border border-border p-3 text-left">Empfehlung</th>
              </tr>
            </thead>
            <tbody>
              {auswirkungenMatrix.map((item, index) => (
                <tr key={index}>
                  <td className="border border-border p-3 font-medium">{item.suchanfrageTyp}</td>
                  <td className="border border-border p-3 text-muted-foreground text-xs">{item.beispiel}</td>
                  <td className="border border-border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.aiOverviewWahrscheinlichkeit === "Sehr hoch" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                      item.aiOverviewWahrscheinlichkeit === "Hoch" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
                      item.aiOverviewWahrscheinlichkeit === "Mittel" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}>
                      {item.aiOverviewWahrscheinlichkeit}
                    </span>
                  </td>
                  <td className="border border-border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.localPackEinfluss === "Hoch" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                      item.localPackEinfluss === "Mittel" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    }`}>
                      {item.localPackEinfluss}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground text-xs">{item.empfehlung}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Gute Nachricht für lokale Unternehmen</p>
              <p className="text-muted-foreground text-sm">
                Die meisten wertvollen lokalen Suchanfragen (buchen, kaufen, besuchen) lösen 
                keine AI Overviews aus. Das <LexikonLink term="Local Pack" /> bleibt für 
                transaktionale Suchen zentral.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Local Pack Integration */}
      <section id="local-pack-integration" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Local Pack & AI Overviews
        </h2>

        <p className="text-muted-foreground mb-6">
          Google zeigt bei lokalen Suchen oft beides – AI Overview und Local Pack – 
          aber in unterschiedlichen Situationen:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Wenn beide erscheinen</h3>
            <p className="text-muted-foreground mb-3">
              Bei Suchanfragen wie "Beste Pizza in Berlin" kann Google sowohl ein AI Overview 
              mit Empfehlungen als auch das Local Pack mit konkreten Restaurants zeigen.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                AI Overview: Allgemeine Tipps und Kriterien
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Local Pack: Konkrete Unternehmen mit Bewertungen
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Wenn nur Local Pack erscheint</h3>
            <p className="text-muted-foreground mb-3">
              Bei klaren transaktionalen Suchen wie "Friseur in der Nähe jetzt geöffnet" 
              zeigt Google direkt das Local Pack ohne AI Overview.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Nutzer will sofort handeln
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Standort und Verfügbarkeit sind entscheidend
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optimierungsstrategien */}
      <section id="optimierung-strategien" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Optimierungsstrategien für die AI-Ära
        </h2>

        <p className="text-muted-foreground mb-6">
          So positionierst du dein lokales Unternehmen für Erfolg in der Welt mit AI Overviews:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {optimierungsStrategien.map((strategie, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <strategie.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-foreground">{strategie.titel}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{strategie.beschreibung}</p>
              <ul className="space-y-2">
                {strategie.tipps.map((tipp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {tipp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Zukunft */}
      <section id="zukunft-lokale-suche" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          Die Zukunft der lokalen Suche
        </h2>

        <p className="text-muted-foreground mb-6">
          Was erwartet uns in den nächsten Jahren?
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-2">Konversationelle Suche</h3>
            <p className="text-muted-foreground text-sm">
              Nutzer werden vermehrt natürlichsprachliche Fragen stellen. 
              Unternehmen müssen Inhalte erstellen, die diese Fragen direkt beantworten.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-2">Personalisierung</h3>
            <p className="text-muted-foreground text-sm">
              AI wird Suchergebnisse stärker personalisieren. Lokale Relevanz und 
              Nutzerverhalten werden noch wichtiger.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-2">Multimodale Suche</h3>
            <p className="text-muted-foreground text-sm">
              Bilder, Video und Text werden kombiniert. Visuelle Inhalte für dein 
              Google Business werden noch wichtiger.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Wichtig zu verstehen</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Die Grundlagen von Local SEO bleiben gleich. AI Overviews sind eine 
                Ergänzung, kein Ersatz. Konzentriere dich weiterhin auf Google Business, 
                Bewertungen und lokalen Content – und optimiere zusätzlich für AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu Google AI Overviews & Local SEO
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

      <AiCitationStrategyBox articleSlug="google-ai-overviews-local-seo" />
      <HelpfulnessWidget articleSlug="google-ai-overviews-local-seo" />

      <SourcesSection sources={sources} />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default GoogleAiOverviews;
