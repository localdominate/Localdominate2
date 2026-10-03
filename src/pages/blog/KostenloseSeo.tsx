import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import LexikonLink from "@/components/blog/LexikonLink";
import FreeToolsTable from "@/components/blog/FreeToolsTable";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiSearchOptNote from "@/components/blog/AiSearchOptNote";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  Zap,
  Search,
  Globe,
  Star,
  FileText,
  Link2,
  Gauge,
  Target,
  TrendingUp,
  Award,
  Users,
  MapPin,
  Clock,
  BarChart3,
  BookOpen,
  Sparkles,
  Shield,
  Rocket,
  Gift,
  ChevronRight
} from "lucide-react";

const KostenloseSeo = () => {
  const article = getArticleBySlug("kostenloses-seo-guide");

  if (!article) return null;

  const tocItems = [
    { id: "einfuehrung", title: "Was ist SEO und warum kostenlos starten?" },
    { id: "google-business", title: "Google Business Profile (100% kostenlos)" },
    { id: "technisches-seo", title: "Technisches SEO zum Nulltarif" },
    { id: "on-page-seo", title: "On-Page SEO kostenlos umsetzen" },
    { id: "keyword-recherche", title: "Keyword-Recherche ohne Budget" },
    { id: "local-seo", title: "Local SEO kostenlos" },
    { id: "backlinks", title: "Backlinks kostenlos aufbauen" },
    { id: "content-strategie", title: "Content-Strategie ohne Kosten" },
    { id: "kostenlose-tools", title: "50+ kostenlose SEO-Tools" },
    { id: "erfolgsmessung", title: "Erfolgsmessung kostenlos" },
    { id: "fortgeschritten", title: "Fortgeschrittene Tipps" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Ist kostenloses SEO genauso effektiv wie bezahltes?",
      answer: "Ja, die Grundlagen sind identisch! Der Unterschied liegt in der Zeit, die du investieren musst. Mit kostenlosen Tools brauchst du mehr manuelle Arbeit, aber die Ergebnisse können genauso gut sein. Viele Top-Rankings wurden mit kostenlosen Methoden erreicht."
    },
    {
      question: "Wie lange dauert SEO, bis ich Ergebnisse sehe?",
      answer: "Erste Verbesserungen zeigen sich oft nach 4-8 Wochen. Signifikante Traffic-Steigerungen erwarten wir nach 3-6 Monaten. SEO ist ein Marathon, kein Sprint – aber die Ergebnisse sind nachhaltig und kumulativ."
    },
    {
      question: "Was sollte ich zuerst tun, wenn ich mit SEO starte?",
      answer: "1. Google Business Profile anlegen und optimieren (größter Quick-Win). 2. Google Search Console einrichten. 3. Technische Basics prüfen (HTTPS, Mobile, Speed). 4. Die wichtigsten Keywords identifizieren."
    },
    {
      question: "Brauche ich Programmierkenntnisse für SEO?",
      answer: "Nein! Die meisten SEO-Maßnahmen erfordern keine Programmierung. Mit Page Buildern wie WordPress kannst du Title Tags und Meta Descriptions ohne Code ändern. Nur für fortgeschrittenes Schema Markup ist etwas technisches Verständnis hilfreich."
    },
    {
      question: "Kann ich SEO neben meinem Hauptjob machen?",
      answer: "Absolut! Mit 2-4 Stunden pro Woche kannst du bereits gute Ergebnisse erzielen. Fokussiere dich auf die wichtigsten Maßnahmen: Google Business Profil pflegen, Content erstellen, Bewertungen sammeln."
    },
    {
      question: "Was ist der größte SEO-Fehler, den Anfänger machen?",
      answer: "Zu viele Dinge gleichzeitig anfangen und nichts zu Ende bringen. Oder: Keywords wählen, die zu umkämpft sind. Starte mit Long-Tail Keywords mit niedrigem Wettbewerb und arbeite dich hoch."
    },
    {
      question: "Lohnt sich SEO für kleine lokale Unternehmen?",
      answer: "Gerade für lokale Unternehmen ist SEO extrem wertvoll! Die Konkurrenz ist oft gering, und mit einem optimierten Google Business Profil kannst du schnell im Local Pack erscheinen."
    },
    {
      question: "Wie finde ich heraus, was meine Konkurrenz macht?",
      answer: "Analysiere ihre Websites: Welche Keywords nutzen sie? Wie sind ihre Title Tags? Nutze kostenlose Tools wie Ubersuggest oder Ahrefs Webmaster Tools. Schau dir ihre Google Business Profile an."
    },
    {
      question: "Was ist wichtiger: Content oder Technik?",
      answer: "Beides ist wichtig, aber Content ist meist der größere Hebel. Eine technisch perfekte Website ohne guten Content rankt nicht. Umgekehrt kann guter Content auch mit durchschnittlicher Technik ranken."
    },
    {
      question: "Wie oft muss ich neuen Content veröffentlichen?",
      answer: "Qualität vor Quantität! Ein ausgezeichneter Artikel pro Monat ist besser als vier mittelmäßige. Aktualisiere auch bestehenden Content regelmäßig – das schätzt Google."
    }
  ];


  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "SEO kostenlos lernen und umsetzen",
    "description": "Schritt-für-Schritt Anleitung für kostenloses SEO",
    "totalTime": "PT4H",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Google Business Profile einrichten",
        "text": "Erstelle und verifiziere dein kostenloses Google Business Profil"
      },
      {
        "@type": "HowToStep",
        "name": "Google Search Console verbinden",
        "text": "Richte die Google Search Console für deine Website ein"
      },
      {
        "@type": "HowToStep",
        "name": "Technische Basics prüfen",
        "text": "Überprüfe HTTPS, Mobile-Freundlichkeit und Ladezeit"
      },
      {
        "@type": "HowToStep",
        "name": "Keywords recherchieren",
        "text": "Finde relevante Keywords mit kostenlosen Tools"
      },
      {
        "@type": "HowToStep",
        "name": "On-Page Optimierung",
        "text": "Optimiere Title Tags, Meta Descriptions und Überschriften"
      }
    ]
  };

  return (
    <ArticleLayout article={article} additionalSchema={howToSchema} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      {/* Einleitung */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Du denkst, <strong>SEO kostet ein Vermögen</strong>? Falsch gedacht! In diesem ultimativen Guide 
        zeige ich dir, wie du <strong>komplett kostenlos</strong> bei Google nach oben kommst. Mit über 
        50 Gratis-Tools, bewährten Strategien und Schritt-für-Schritt Anleitungen. Alles, was du brauchst, 
        ist Zeit und die Bereitschaft zu lernen.
      </p>

      <KeyTakeawaysBox 
        items={[
          "50+ kostenlose SEO-Tools für sofortigen Einsatz",
          "Google Business Profil optimal nutzen (100% gratis)",
          "Technisches SEO ohne Budget-Tools prüfen und optimieren",
          "Keyword-Recherche ohne teure Software durchführen",
          "Backlinks kostenlos und nachhaltig aufbauen"
        ]}
      />

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">50+</div>
          <p className="text-xs text-muted-foreground">Kostenlose Tools</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">0€</div>
          <p className="text-xs text-muted-foreground">Budget nötig</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">28 Min</div>
          <p className="text-xs text-muted-foreground">Lesezeit</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">2026</div>
          <p className="text-xs text-muted-foreground">Aktualisiert</p>
        </div>
      </div>

      {/* Einführung */}
      <section id="einfuehrung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-primary" />
          Was ist SEO und warum kostenlos starten?
        </h2>

        <p className="text-muted-foreground mb-6">
          <strong>SEO</strong> (Search Engine Optimization) bedeutet, deine Website so zu optimieren, 
          dass sie bei Google und anderen Suchmaschinen besser gefunden wird. Das Ziel: Mehr Besucher, 
          mehr Kunden, mehr Umsatz – und das <strong>ohne bezahlte Werbung</strong>.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Warum kostenloses SEO funktioniert
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Google bevorzugt keine zahlenden Kunden – guter Content gewinnt</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Die wichtigsten SEO-Tools von Google sind komplett kostenlos</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Zeit und Wissen sind deine wertvollsten Ressourcen</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Viele Top-Rankings wurden ohne Budget-Tools erreicht</span>
            </li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-4">
          In diesem Guide verlinke ich durchgehend auf unser <strong>SEO-Lexikon</strong> mit 50+ 
          Fachbegriffen. Wenn du einen Begriff nicht verstehst, klicke einfach darauf!
        </p>

        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Wichtige Begriffe in diesem Artikel:</strong>{" "}
            <LexikonLink term="Keywords" />, <LexikonLink term="Backlinks" />, <LexikonLink term="On-Page SEO" />, 
            {" "}<LexikonLink term="SERP" />, <LexikonLink term="Core Web Vitals" /> und viele mehr.
          </p>
        </div>
      </section>

      {/* Google Business Profile */}
      <section id="google-business" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Google Business Profile (100% kostenlos)
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein <LexikonLink term="Google Business Profile" /> ist der wichtigste kostenlose SEO-Hebel 
          für lokale Unternehmen. Es erscheint im <LexikonLink term="Local Pack" /> – den Top 3 
          Ergebnissen bei lokalen Suchen.
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Gift className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200 mb-1">100% kostenlos von Google</p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Google Business Profile kostet nichts und bringt oft mehr Sichtbarkeit als teure Werbung.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Schritt-für-Schritt Optimierung</h3>

        <div className="space-y-4 mb-6">
          {[
            { step: 1, title: "Profil erstellen & verifizieren", desc: "Gehe zu business.google.com und folge den Anweisungen. Die Verifizierung erfolgt per Postkarte oder Telefon." },
            { step: 2, title: "Alle Felder ausfüllen", desc: "Name, Adresse, Telefon (NAP) müssen korrekt sein. Nutze die exakt gleichen Daten wie auf deiner Website." },
            { step: 3, title: "Kategorien wählen", desc: "Wähle die passendste Hauptkategorie und bis zu 9 Nebenkategorien." },
            { step: 4, title: "Beschreibung optimieren", desc: "Nutze 750 Zeichen mit deinen wichtigsten Keywords. Beschreibe dein Angebot klar." },
            { step: 5, title: "Fotos hochladen", desc: "Mindestens 10 hochwertige Bilder: Logo, Außenansicht, Innenraum, Team, Produkte." },
            { step: 6, title: "Öffnungszeiten pflegen", desc: "Halte sie aktuell, auch an Feiertagen. Falsche Zeiten führen zu schlechten Bewertungen." },
            { step: 7, title: "Regelmäßig posten", desc: "Nutze Google Posts für Neuigkeiten, Angebote und Events (mindestens wöchentlich)." }
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Achte auf <LexikonLink term="NAP">NAP-Konsistenz</LexikonLink>
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Name, Adresse und Telefonnummer müssen überall im Internet identisch sein. 
                Unterschiede verwirren Google und schaden deinem Ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Technisches SEO */}
      <section id="technisches-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Gauge className="h-6 w-6 text-primary" />
          Technisches SEO zum Nulltarif
        </h2>

        <p className="text-muted-foreground mb-6">
          <LexikonLink term="Technical SEO" /> bildet das Fundament deiner Website. Ohne solide Technik 
          können auch die besten Inhalte nicht ranken. Die gute Nachricht: Die wichtigsten Prüfungen 
          sind kostenlos!
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Die technischen Basics</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground"><LexikonLink term="HTTPS">HTTPS/SSL</LexikonLink></span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Verschlüsselte Verbindung ist Pflicht. Ohne HTTPS zeigt Chrome eine Warnung.
            </p>
            <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Kostenlos: Let's Encrypt, bei den meisten Hostern inklusive
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Gauge className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground"><LexikonLink term="Core Web Vitals" /></span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Googles Metriken für Nutzererfahrung: LCP, INP und CLS.
            </p>
            <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Prüfen: PageSpeed Insights (kostenlos)
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground"><LexikonLink term="Mobile First Index" /></span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Google bewertet primär die mobile Version. Mobile-Freundlichkeit ist Pflicht.
            </p>
            <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Prüfen: Google Mobile-Friendly Test (kostenlos)
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground"><LexikonLink term="XML-Sitemap" /></span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Zeigt Google alle wichtigen Seiten deiner Website.
            </p>
            <p className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              Einreichen: Google Search Console (kostenlos)
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Crawling & Indexierung</h3>

        <p className="text-muted-foreground mb-4">
          Damit Google deine Seiten findet und indexiert, musst du verstehen, wie <LexikonLink term="Crawling" /> 
          {" "}und <LexikonLink term="Indexierung" /> funktionieren:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground"><LexikonLink term="Robots.txt" /></strong>
              <p className="text-sm text-muted-foreground">Steuert, welche Seiten Google crawlen darf. Prüfe, ob wichtige Seiten nicht blockiert sind.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground"><LexikonLink term="Canonical URL" /></strong>
              <p className="text-sm text-muted-foreground">Verhindert <LexikonLink term="Duplicate Content" /> durch Festlegung der bevorzugten URL.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-foreground"><LexikonLink term="URL-Struktur" /></strong>
              <p className="text-sm text-muted-foreground">Kurze, sprechende URLs mit Keywords ranken besser. Vermeide lange Parameter-URLs.</p>
            </div>
          </li>
        </ul>

        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-3">Kostenlose Technik-Checkliste</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "✅ HTTPS aktiv",
              "✅ Mobile-freundlich",
              "✅ Ladezeit unter 3 Sekunden",
              "✅ XML-Sitemap vorhanden",
              "✅ Robots.txt korrekt",
              "✅ Keine Crawling-Fehler",
              "✅ Canonical Tags gesetzt",
              "✅ 404-Fehler behoben"
            ].map((item, index) => (
              <p key={index} className="text-sm text-muted-foreground">{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* On-Page SEO */}
      <section id="on-page-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          On-Page SEO kostenlos umsetzen
        </h2>

        <p className="text-muted-foreground mb-6">
          <LexikonLink term="On-Page SEO" /> sind alle Optimierungen auf deiner Website selbst. 
          Du hast die volle Kontrolle – und es kostet nichts außer Zeit.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Title Tags & Meta Descriptions</h3>

        <p className="text-muted-foreground mb-4">
          Der <LexikonLink term="Title Tag" /> ist einer der wichtigsten Ranking-Faktoren. 
          Die <LexikonLink term="Meta-Tags">Meta Description</LexikonLink> beeinflusst die Klickrate.
        </p>

        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Perfekter Title Tag</h4>
          <div className="bg-muted rounded p-3 mb-3">
            <code className="text-sm">Kostenloses SEO: 50+ Gratis-Tools & Strategien | Guide 2026</code>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>✅ Hauptkeyword am Anfang</li>
            <li>✅ Unter 60 Zeichen</li>
            <li>✅ Ansprechend formuliert</li>
            <li>✅ Jahreszahl für Aktualität</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="Heading Tags">Überschriften-Struktur (H1-H6)</LexikonLink>
        </h3>

        <p className="text-muted-foreground mb-4">
          Eine klare Hierarchie hilft Google und Nutzern, deinen Content zu verstehen:
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6 font-mono text-sm">
          <p className="text-foreground">H1: Kostenloses SEO: Der ultimative Guide</p>
          <p className="text-muted-foreground pl-4">H2: Google Business Profile</p>
          <p className="text-muted-foreground pl-8">H3: Profil erstellen</p>
          <p className="text-muted-foreground pl-8">H3: Optimierung</p>
          <p className="text-muted-foreground pl-4">H2: Technisches SEO</p>
          <p className="text-muted-foreground pl-8">H3: Core Web Vitals</p>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Bilder optimieren</h3>

        <p className="text-muted-foreground mb-4">
          <LexikonLink term="Alt-Text">Alt-Texte</LexikonLink> sind wichtig für Barrierefreiheit 
          und Bilder-SEO. Sie beschreiben das Bild für Suchmaschinen und Screenreader.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Schlecht</p>
            <code className="text-sm text-red-700 dark:text-red-300">alt="IMG_2847.jpg"</code>
          </div>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Gut</p>
            <code className="text-sm text-green-700 dark:text-green-300">alt="SEO-Dashboard mit Keyword-Analyse"</code>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="Internal Linking">Interne Verlinkung</LexikonLink>
        </h3>

        <p className="text-muted-foreground mb-4">
          Verlinke relevante Seiten untereinander. Nutze beschreibende <LexikonLink term="Anchor Text">Anchor-Texte</LexikonLink> statt "hier klicken".
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Pro-Tipp: Content-Cluster</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Erstelle einen Hauptartikel (Pillar) und verlinke darauf von thematisch verwandten Unterartikeln. 
                Das signalisiert Google thematische Autorität.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword-Recherche */}
      <section id="keyword-recherche" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Search className="h-6 w-6 text-primary" />
          Keyword-Recherche ohne Budget
        </h2>

        <p className="text-muted-foreground mb-6">
          <LexikonLink term="Keywords" /> sind die Suchbegriffe, für die du ranken möchtest. 
          Die gute Nachricht: Die wichtigsten Recherche-Methoden sind komplett kostenlos!
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Kostenlose Keyword-Quellen</h3>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">1. Google Autosuggest</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Tippe dein Keyword bei Google ein und schau dir die Vorschläge an.
            </p>
            <div className="bg-muted rounded p-2 text-sm">
              "kostenloses seo" → "kostenloses seo tool", "kostenloses seo audit", "kostenlose seo analyse"
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">2. "Ähnliche Suchanfragen"</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Am Ende der Google-Suchergebnisse findest du verwandte Keywords.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">3. Google Search Console</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Zeigt dir, für welche Keywords du bereits rankst – kostenlos und direkt von Google.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">4. AnswerThePublic</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Visualisiert Fragen, die Nutzer zu deinem Thema stellen (begrenzte kostenlose Suchen).
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="Long-Tail Keywords" /> sind dein Freund
        </h3>

        <p className="text-muted-foreground mb-4">
          Statt auf "SEO" zu zielen (viel Konkurrenz), fokussiere dich auf spezifischere Begriffe:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Keyword</th>
                <th className="border border-border p-3 text-left">Typ</th>
                <th className="border border-border p-3 text-left">Konkurrenz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">SEO</td>
                <td className="border border-border p-3">Short-Tail</td>
                <td className="border border-border p-3 text-red-500">Extrem hoch</td>
              </tr>
              <tr>
                <td className="border border-border p-3">kostenloses SEO</td>
                <td className="border border-border p-3">Mid-Tail</td>
                <td className="border border-border p-3 text-yellow-500">Mittel</td>
              </tr>
              <tr>
                <td className="border border-border p-3">kostenloses SEO Tool für Anfänger</td>
                <td className="border border-border p-3">Long-Tail</td>
                <td className="border border-border p-3 text-green-500">Niedrig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">
            <LexikonLink term="Search Intent">Suchintention verstehen</LexikonLink>
          </h4>
          <p className="text-sm text-muted-foreground">
            Frage dich: Was will der Nutzer wirklich? Information, Navigation, Transaktion? 
            Dein Content muss zur Intention passen.
          </p>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Local SEO */}
      <section id="local-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Local SEO kostenlos
        </h2>

        <p className="text-muted-foreground mb-6">
          Für lokale Unternehmen ist <strong>Local SEO</strong> der schnellste Weg zu mehr Kunden. 
          Und das Beste: Die wichtigsten Maßnahmen kosten keinen Cent! Wie sich Local SEO vom 
          klassischen SEO unterscheidet, erfährst du in unserem <Link to="/blog/local-seo-vs-organisch" className="text-primary underline decoration-primary/30 hover:decoration-primary">Vergleich Local SEO vs. Organic SEO</Link>.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Kostenlose Local SEO Strategien</h3>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Google Business Profile optimieren</h4>
              <p className="text-sm text-muted-foreground">
                Der wichtigste Hebel für <LexikonLink term="Local Pack" />-Rankings. Siehe Abschnitt oben.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground"><LexikonLink term="Citations" /> aufbauen</h4>
              <p className="text-sm text-muted-foreground">
                Trage dein Unternehmen in lokale Verzeichnisse ein: Yelp, Gelbe Seiten, Branchenverzeichnisse.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground"><LexikonLink term="Reviews">Bewertungen</LexikonLink> sammeln</h4>
              <p className="text-sm text-muted-foreground">
                Bitte zufriedene Kunden aktiv um Google-Bewertungen. Je mehr positive Reviews, desto besser.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground"><LexikonLink term="Geo-Targeting" /> nutzen</h4>
              <p className="text-sm text-muted-foreground">
                Erstelle Landingpages für jeden Stadtteil oder jede Stadt, die du bedienst.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-3">
            <LexikonLink term="Proximity">Entfernung</LexikonLink> als Ranking-Faktor
          </h4>
          <p className="text-sm text-muted-foreground">
            Google berücksichtigt die Entfernung zwischen Nutzer und Unternehmen. Deshalb ist ein 
            korrekter Standort in deinem Google Business Profile so wichtig.
          </p>
        </div>
      </section>

      {/* Backlinks */}
      <section id="backlinks" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Link2 className="h-6 w-6 text-primary" />
          Backlinks kostenlos aufbauen
        </h2>

        <p className="text-muted-foreground mb-6">
          <LexikonLink term="Backlinks" /> sind Verlinkungen von anderen Websites auf deine Seite. 
          Sie sind einer der wichtigsten Ranking-Faktoren. <LexikonLink term="Link Building" /> ohne 
          Budget ist möglich – erfordert aber Kreativität und Ausdauer.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Kostenlose Link-Strategien</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Gastbeiträge", desc: "Schreibe Artikel für Blogs in deiner Branche. Im Gegenzug erhältst du einen Link." },
            { title: "Broken Link Building", desc: "Finde defekte Links auf anderen Seiten und biete deinen Content als Ersatz an." },
            { title: "Lokale Partnerschaften", desc: "Verlinke dich mit lokalen Partnern, Lieferanten und Vereinen." },
            { title: "HARO/Pressearbeit", desc: "Beantworte Journalistenanfragen und erhalte Links von Nachrichtenseiten." },
            { title: "Branchenverzeichnisse", desc: "Qualitativ hochwertige Verzeichnisse bringen sowohl Traffic als auch Links." },
            { title: "Social Proof", desc: "Testimonials und Case Studies für andere Unternehmen können Links bringen." }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Vorsicht: <LexikonLink term="Nofollow Link">Nofollow</LexikonLink> vs. Dofollow
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Nofollow-Links geben weniger "Link-Power" weiter, sind aber trotzdem wertvoll für Traffic 
                und natürliches Linkprofil. Ein Mix aus beiden ist ideal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content-Strategie */}
      <section id="content-strategie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          Content-Strategie ohne Kosten
        </h2>

        <p className="text-muted-foreground mb-6">
          Guter Content ist der Kern jeder SEO-Strategie. Und du brauchst kein Budget, um ihn zu erstellen – 
          nur Zeit, Expertise und die richtigen kostenlosen Tools.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="E-E-A-T" /> aufbauen
        </h3>

        <p className="text-muted-foreground mb-4">
          E-E-A-T steht für Experience, Expertise, Authoritativeness, Trustworthiness. Google bewertet, 
          ob du als vertrauenswürdige Quelle giltst.
        </p>

        <div className="space-y-3 mb-6">
          {[
            "Zeige deine Expertise: Autor-Bio, Qualifikationen, Erfahrung",
            "Zitiere Quellen und verlinke auf autoritative Seiten",
            "Halte Content aktuell (Datum der letzten Aktualisierung)",
            "Sammle positive Bewertungen und Testimonials",
            "Baue eine konsistente Online-Präsenz auf"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Kostenlose Content-Tools</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📝</div>
            <h4 className="font-semibold text-foreground">Google Docs</h4>
            <p className="text-xs text-muted-foreground">Texte schreiben & kollaborieren</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h4 className="font-semibold text-foreground">Canva</h4>
            <p className="text-xs text-muted-foreground">Grafiken & Infografiken</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">✍️</div>
            <h4 className="font-semibold text-foreground">Hemingway</h4>
            <p className="text-xs text-muted-foreground">Lesbarkeit verbessern</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">
            <LexikonLink term="Duplicate Content" /> vermeiden
          </h4>
          <p className="text-sm text-muted-foreground">
            Kopiere niemals Inhalte von anderen Websites. Selbst wenn du sie umschreibst, könnte 
            Google es als Duplicate Content werten. Erstelle immer einzigartige Inhalte.
          </p>
        </div>
      </section>

      {/* Kostenlose Tools */}
      <section id="kostenlose-tools" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Zap className="h-6 w-6 text-primary" />
          50+ kostenlose SEO-Tools
        </h2>

        <p className="text-muted-foreground mb-6">
          Hier findest du alle wichtigen kostenlosen SEO-Tools, kategorisiert nach Einsatzzweck. 
          Diese Tools nutzen auch die Profis!
        </p>

        <FreeToolsTable />

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-6">
          <div className="flex gap-3">
            <Rocket className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200 mb-1">Start-Empfehlung</p>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Beginne mit: Google Search Console + Google Business Profile + PageSpeed Insights. 
                Diese drei Tools decken 80% deiner SEO-Bedürfnisse ab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsmessung */}
      <section id="erfolgsmessung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BarChart3 className="h-6 w-6 text-primary" />
          Erfolgsmessung kostenlos
        </h2>

        <p className="text-muted-foreground mb-6">
          Wie weißt du, ob dein SEO funktioniert? Mit den kostenlosen <LexikonLink term="Webmaster Tools">Google Tools</LexikonLink> kannst du alles messen, was wichtig ist.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Wichtige Kennzahlen</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Organischer Traffic</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Besucher, die über <LexikonLink term="SERP">Suchergebnisse</LexikonLink> kommen. 
              Steigt er, funktioniert dein SEO.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Keyword-Rankings</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Auf welcher Position erscheinst du für wichtige Keywords? 
              Tracke mit der Search Console.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Click-Through-Rate (CTR)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Wie viele Nutzer klicken auf dein Suchergebnis? 
              Optimiere Title & Description.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground"><LexikonLink term="Bounce Rate" /></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Wie viele Besucher verlassen die Seite sofort? 
              Niedrig = Content trifft Erwartungen.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">
            <LexikonLink term="Featured Snippet" /> & <LexikonLink term="Zero-Click Search" />
          </h4>
          <p className="text-sm text-muted-foreground">
            Manchmal zeigt Google die Antwort direkt in den Suchergebnissen. Das bringt Sichtbarkeit, 
            aber möglicherweise weniger Klicks. Tracke beides in der Search Console.
          </p>
        </div>
      </section>

      {/* Fortgeschrittene Tipps */}
      <section id="fortgeschritten" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />
          Fortgeschrittene Tipps
        </h2>

        <p className="text-muted-foreground mb-6">
          Wenn du die Basics gemeistert hast, kannst du mit diesen fortgeschrittenen Techniken 
          noch mehr herausholen – und ja, auch das ist kostenlos!
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="Schema Markup" /> selbst implementieren
        </h3>

        <p className="text-muted-foreground mb-4">
          Mit <LexikonLink term="JSON-LD" /> kannst du Google strukturierte Daten liefern. 
          Das kann zu <LexikonLink term="Rich Snippets" /> in den Suchergebnissen führen.
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dein Unternehmen",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Berlin",
    "postalCode": "10115"
  },
  "telephone": "+49-30-123456",
  "openingHours": "Mo-Fr 09:00-18:00"
}
</script>`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="Voice Search" /> Optimierung
        </h3>

        <p className="text-muted-foreground mb-4">
          Immer mehr Suchen erfolgen per Sprache. Optimiere für natürliche Fragen:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-muted-foreground">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            Beantworte W-Fragen direkt (Wer, Was, Wo, Wann, Wie)
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            Nutze FAQ-Sektionen mit natürlicher Sprache
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            Lokale Keywords einbauen ("in meiner Nähe")
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">
          <LexikonLink term="YMYL" />-Inhalte meistern
        </h3>

        <p className="text-muted-foreground mb-4">
          "Your Money or Your Life" – Bei Themen wie Gesundheit, Finanzen oder Recht gelten 
          besonders strenge Qualitätsanforderungen. Hier ist E-E-A-T entscheidend.
        </p>

        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-3">
            <LexikonLink term="Knowledge Graph" /> verstehen
          </h4>
          <p className="text-sm text-muted-foreground">
            Googles Wissensdatenbank mit über 5 Milliarden Entitäten. Wenn dein Unternehmen 
            dort erscheint, signalisiert das höchste Autorität. Pflege konsistente Daten überall.
          </p>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-primary" />
          Häufig gestellte Fragen
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details key={index} className="group bg-card border border-border rounded-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <span className="font-medium text-foreground pr-4">{item.question}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-4 pb-4">
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Fazit */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Fazit: SEO kostet kein Geld – nur Zeit und Engagement
          </h2>
          <p className="text-muted-foreground mb-4">
            Du hast jetzt alles, was du brauchst, um <strong>komplett kostenlos</strong> bei Google 
            nach oben zu kommen. Die wichtigsten Punkte:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <strong>Google Business Profile</strong> ist dein wichtigster kostenloser Hebel
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <strong>Technische Basics</strong> sind die Grundlage für alles weitere
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <strong>Content is King</strong> – aber nur mit der richtigen Keyword-Strategie
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <strong>Geduld zahlt sich aus</strong> – SEO ist ein Marathon, kein Sprint
            </li>
          </ul>
          <p className="text-muted-foreground">
            Nutze unser <Link to="/seo-lexikon" className="text-primary underline">SEO-Lexikon</Link> mit 
            50+ Begriffen, um dein Wissen zu vertiefen. Und wenn du professionelle Unterstützung 
            möchtest, sind wir von Local Dominator für dich da!
          </p>
        </div>
      </section>

      <AiSearchOptNote articleSlug="kostenloses-seo-guide" />

      <SourcesSection 
        sources={[
          { title: "Google Search Console Hilfe", url: "https://support.google.com/webmasters", type: "documentation", description: "Offizielle Google-Dokumentation zur Search Console" },
          { title: "Google Business Profile Hilfe", url: "https://support.google.com/business", type: "documentation", description: "Offizieller Google-Leitfaden für Unternehmensprofile" },
          { title: "MOZ Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo", type: "article", description: "Umfassender Einsteiger-Guide von MOZ" },
          { title: "Web.dev - Core Web Vitals", url: "https://web.dev/vitals/", type: "documentation", description: "Google's Leitfaden zu Core Web Vitals" },
          { title: "Schema.org LocalBusiness", url: "https://schema.org/LocalBusiness", type: "documentation", description: "Strukturierte Daten für lokale Unternehmen" },
          { title: "PageSpeed Insights", url: "https://pagespeed.web.dev/", type: "tool", description: "Kostenloser Google-Test für Website-Geschwindigkeit" }
        ]}
      />

      <HelpfulnessWidget articleSlug="kostenloses-seo-guide" />
    </ArticleLayout>
  );
};

export default KostenloseSeo;
