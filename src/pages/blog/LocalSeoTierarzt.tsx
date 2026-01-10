import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import RelatedIndustryGuides from "@/components/blog/RelatedIndustryGuides";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoTierarztImg from "@/assets/blog/local-seo-tierarzt.jpg";
import { 
  CheckCircle, 
  MapPin,
  Star,
  Clock,
  Phone,
  Heart,
  AlertTriangle,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  Camera
} from "lucide-react";

const LocalSeoTierarzt = () => {
  const article = getArticleBySlug("local-seo-tierarzt");

  if (!article) return null;

  const tocItems = [
    { id: "warum-local-seo-tierarzt", title: "Warum Local SEO für Tierärzte" },
    { id: "notdienst-strategie", title: "Notdienst-Strategie" },
    { id: "google-business-tierarzt", title: "Google Business für Tierärzte" },
    { id: "bewertungen-tierbesitzer", title: "Bewertungen von Tierbesitzern" },
    { id: "website-optimierung", title: "Website-Optimierung" },
    { id: "spezialisierungen", title: "Spezialisierungen hervorheben" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Wie wichtig ist Local SEO für Tierarztpraxen?",
      answer: "Extrem wichtig. 90% der Tierbesitzer suchen online nach einem Tierarzt, besonders bei Notfällen. 'Tierarzt in der Nähe' und 'Tierarzt Notdienst' gehören zu den häufigsten lokalen Suchanfragen im Gesundheitsbereich."
    },
    {
      question: "Welche Keywords sind für Tierärzte am wichtigsten?",
      answer: "Die wichtigsten Keywords sind: Tierarzt + Stadt, Tierarzt Notdienst, Tierklinik + Stadt, sowie Spezialisierungen wie Hundezahnarzt, Katzenspezialist oder Vogel-Tierarzt. Auch 'Tierarzt geöffnet' und 'Tierarzt Wochenende' sind relevant."
    },
    {
      question: "Wie bekomme ich mehr Bewertungen von Tierbesitzern?",
      answer: "Frage nach erfolgreichen Behandlungen, wenn die Tierbesitzer erleichtert und dankbar sind. Nutze einen QR-Code an der Rezeption. Sende nach Routineuntersuchungen eine freundliche E-Mail mit Bewertungslink. Besonders emotionale Momente (gerettetes Tier) führen oft zu 5-Sterne-Bewertungen."
    },
    {
      question: "Sollte ich meinen Notdienst extra bewerben?",
      answer: "Ja, unbedingt. Notdienst-Suchanfragen sind hochrelevant und konvertieren sofort. Erstelle eine eigene Notdienst-Seite, nutze Google Posts für Notdienst-Ankündigungen und stelle sicher, dass deine Notdienst-Zeiten im Google Business Profil aktuell sind."
    },
    {
      question: "Wie wichtig sind Bilder für eine Tierarztpraxis?",
      answer: "Sehr wichtig. Zeige freundliche Bilder von deinem Team mit Tieren, deine moderne Ausstattung, den Wartebereich und geheilte Patienten (mit Einverständnis). Tierbesitzer wollen sehen, dass ihre Lieblinge gut aufgehoben sind."
    },
    {
      question: "Welche Spezialisierungen sollte ich hervorheben?",
      answer: "Alle! Ob Zahnmedizin, Chirurgie, Exoten, Verhaltenstherapie oder bestimmte Tierarten – Spezialisierungen sind wichtige Keywords und Differenzierungsmerkmale. Erstelle für jede Spezialisierung eine eigene Seite."
    },
    {
      question: "Lohnt sich eine Website für meine Praxis?",
      answer: "Absolut. Eine Website stärkt dein Google Ranking, ermöglicht Online-Terminbuchung, bietet Platz für ausführliche Informationen zu Services und baut Vertrauen auf. Sie sollte mobiloptimiert sein, da viele Notfall-Suchen vom Handy kommen."
    },
    {
      question: "Wie reagiere ich auf negative Bewertungen?",
      answer: "Bei Tierärzten sind negative Bewertungen oft emotional (Verlust eines Tieres). Antworte immer empathisch, zeige Verständnis für den Schmerz, erkläre sachlich falls nötig, aber streite nie. Biete immer ein persönliches Gespräch an."
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

  const tierarztKeywords = [
    { keyword: "Tierarzt + [Stadt]", volumen: "Sehr hoch", intent: "Allgemeine Suche" },
    { keyword: "Tierarzt Notdienst", volumen: "Hoch", intent: "Notfall" },
    { keyword: "Tierklinik + [Stadt]", volumen: "Hoch", intent: "Größere Praxis" },
    { keyword: "Tierarzt geöffnet", volumen: "Mittel", intent: "Sofort-Bedarf" },
    { keyword: "Hundezahnarzt", volumen: "Mittel", intent: "Spezialisierung" },
    { keyword: "Tierarzt Impfung Kosten", volumen: "Mittel", intent: "Information" },
    { keyword: "Katzenspezialist", volumen: "Niedrig", intent: "Spezialisierung" },
    { keyword: "Vogel Tierarzt", volumen: "Niedrig", intent: "Exoten" }
  ];

  const googleBusinessTipps = [
    {
      kategorie: "Primäre Kategorie",
      empfehlung: "Tierarzt (oder Tierklinik für größere Praxen)",
      wichtig: true
    },
    {
      kategorie: "Zusätzliche Kategorien",
      empfehlung: "Tierärztlicher Notdienst, Tierkrankenhaus, Tierheim (wenn zutreffend)",
      wichtig: true
    },
    {
      kategorie: "Öffnungszeiten",
      empfehlung: "Sprechstunden UND Notdienstzeiten angeben",
      wichtig: true
    },
    {
      kategorie: "Attribute",
      empfehlung: "Barrierefrei, Parkplätze, Online-Termine, Notdienst",
      wichtig: false
    },
    {
      kategorie: "Fotos",
      empfehlung: "Team mit Tieren, Behandlungsräume, Wartezimmer, Equipment",
      wichtig: true
    },
    {
      kategorie: "Services",
      empfehlung: "Alle Behandlungen einzeln auflisten (Impfung, Kastration, Zahnreinigung...)",
      wichtig: true
    }
  ];

  const spezialisierungen = [
    { bereich: "Zahnmedizin", keywords: ["Hundezahnarzt", "Katzenzähne", "Zahnreinigung Hund"] },
    { bereich: "Chirurgie", keywords: ["Tierchirurg", "OP Hund", "Tumorentfernung"] },
    { bereich: "Dermatologie", keywords: ["Hautarzt Hund", "Allergie Katze", "Fellprobleme"] },
    { bereich: "Exoten", keywords: ["Vogel Tierarzt", "Reptilien Tierarzt", "Kleintiere"] },
    { bereich: "Verhaltenstherapie", keywords: ["Hundetrainer", "Verhaltenstherapie Tier", "Angststörung Hund"] },
    { bereich: "Kardiologie", keywords: ["Herzultraschall Hund", "Herzspezialist Tier"] }
  ];

  const sources: { title: string; url: string; type: "article" | "documentation" | "study" | "tool" }[] = [
    { title: "Bundestierärztekammer", url: "https://www.bundestieraerztekammer.de/", type: "documentation" },
    { title: "Google Business Hilfe", url: "https://support.google.com/business/", type: "documentation" },
    { title: "Local SEO Guide von Google", url: "https://developers.google.com/search/docs/specialty/local", type: "documentation" }
  ];

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Wenn das geliebte Haustier krank ist, greifen Tierbesitzer sofort zum Smartphone. 
        <strong> "Tierarzt in der Nähe"</strong> und <strong>"Tierarzt Notdienst"</strong> 
        gehören zu den emotionalsten und dringendsten lokalen Suchanfragen überhaupt. 
        Dieser Guide zeigt, wie Tierärzte und Tierkliniken durch <LexikonLink term="Local SEO" /> 
        gefunden werden, wenn es darauf ankommt.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Notdienst-Keywords sind hochrelevant und konvertieren sofort",
          "Emotionale Tierbilder erhöhen Vertrauen und Klickrate",
          "Spezialisierungen als eigene Keywords und Seiten nutzen",
          "Öffnungszeiten und Erreichbarkeit müssen immer aktuell sein",
          "Empathische Kommunikation bei negativen Bewertungen"
        ]}
      />

      <BlogImage 
        src={localSeoTierarztImg} 
        alt="Tierärztin mit Hund und Google Bewertungen auf Smartphone"
        caption="Tierbesitzer suchen online nach Tierärzten – besonders in Notfällen"
      />

      {/* Statistiken */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">90%</div>
          <p className="text-xs text-muted-foreground">suchen online nach Tierarzt</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">65%</div>
          <p className="text-xs text-muted-foreground">der Suchen sind mobil</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">4.7★</div>
          <p className="text-xs text-muted-foreground">erwartete Mindestbewertung</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">24/7</div>
          <p className="text-xs text-muted-foreground">Notdienst-Anfragen</p>
        </div>
      </div>

      {/* Warum Local SEO */}
      <section id="warum-local-seo-tierarzt" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Heart className="h-6 w-6 text-primary" />
          Warum Local SEO für Tierärzte entscheidend ist
        </h2>

        <p className="text-muted-foreground mb-6">
          Tierarzt-Suchen sind anders als andere lokale Suchen – sie sind oft emotional 
          und dringend. Das macht sie besonders wertvoll:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Notfall-Situation
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Bei einem Tiernotfall wird nicht lange verglichen. Der erste Tierarzt im 
              <LexikonLink term="Local Pack" /> mit guten Bewertungen bekommt den Anruf.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Extrem hohe Conversion-Rate</li>
              <li>• Nutzer handeln sofort</li>
              <li>• Loyalität bei guter Erfahrung</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Langfristige Beziehung
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Ein zufriedener Tierbesitzer bleibt jahrelang Patient und empfiehlt weiter. 
              Der Customer Lifetime Value ist hoch.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Regelmäßige Impfungen und Checks</li>
              <li>• Mundpropaganda in der Community</li>
              <li>• Mehrere Tiere pro Haushalt möglich</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Die wichtigsten Keywords für Tierärzte</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Keyword</th>
                <th className="border border-border p-3 text-left">Volumen</th>
                <th className="border border-border p-3 text-left">Such-Intent</th>
              </tr>
            </thead>
            <tbody>
              {tierarztKeywords.map((item, index) => (
                <tr key={index}>
                  <td className="border border-border p-3 font-medium">{item.keyword}</td>
                  <td className="border border-border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.volumen === "Sehr hoch" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                      item.volumen === "Hoch" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                      item.volumen === "Mittel" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {item.volumen}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{item.intent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Notdienst */}
      <section id="notdienst-strategie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Clock className="h-6 w-6 text-primary" />
          Notdienst-Strategie
        </h2>

        <p className="text-muted-foreground mb-6">
          Notdienst-Anfragen sind Gold wert. So wirst du gefunden, wenn es darauf ankommt:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">1. Google Business Notdienst-Zeiten</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Nutze die "Mehr Stunden"-Option für Notdienstzeiten
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Aktualisiere bei Änderungen sofort
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Füge "Tierärztlicher Notdienst" als Kategorie hinzu
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">2. Eigene Notdienst-Seite</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                URL: /notdienst oder /tiernotfall
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Telefonnummer groß und klickbar
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Erste-Hilfe-Tipps für häufige Notfälle
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Anfahrt und Parkmöglichkeiten
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">3. Google Posts für Notdienst</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                "Notdienst heute Nacht: [Uhrzeit]"
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                "Wochenend-Notdienst: Wir sind für Sie da"
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Regelmäßig aktualisieren
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Erreichbarkeit ist alles</p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Wenn du Notdienst anbietest, muss die Telefonnummer immer erreichbar sein. 
                Nichts ist frustrierender für verzweifelte Tierbesitzer als keine Antwort. 
                Nutze Weiterleitungen oder einen Anrufbeantworter mit klaren Anweisungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Google Business */}
      <section id="google-business-tierarzt" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          Google Business für Tierärzte optimieren
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein <LexikonLink term="Google Business Profile" /> ist das Aushängeschild deiner 
          Praxis. So optimierst du es für maximale Sichtbarkeit:
        </p>

        <div className="space-y-4 mb-6">
          {googleBusinessTipps.map((tipp, index) => (
            <div key={index} className={`flex items-center justify-between rounded-lg p-4 ${
              tipp.wichtig ? 'bg-primary/5 border border-primary/20' : 'bg-card border border-border'
            }`}>
              <div className="flex items-center gap-3">
                {tipp.wichtig ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <span className="font-medium text-foreground">{tipp.kategorie}</span>
                  <p className="text-sm text-muted-foreground">{tipp.empfehlung}</p>
                </div>
              </div>
              {tipp.wichtig && (
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-medium">
                  Wichtig
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen-tierbesitzer" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          Bewertungen von Tierbesitzern gewinnen
        </h2>

        <p className="text-muted-foreground mb-6">
          Tierbesitzer schreiben oft emotionale Bewertungen – nutze das zu deinem Vorteil:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Beste Momente für Bewertungsanfragen</h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Nach erfolgreicher Notfall-Behandlung
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Wenn ein Tier gesund nach Hause geht
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Nach Welpen-Erstuntersuchung (happy moment!)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Bei jährlichen Routine-Impfungen (Follow-up E-Mail)
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Praktische Tipps</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                QR-Code an der Rezeption
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Karte mit Link im Impfpass
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Follow-up E-Mail nach 2 Tagen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                Persönliche Bitte vom Tierarzt
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Bei negativen Bewertungen</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Negative Bewertungen bei Tierärzten sind oft mit dem Verlust eines Tieres 
                verbunden. Reagiere immer empathisch, zeige Verständnis für den Schmerz 
                und vermeide jede Rechtfertigung. Ein "Es tut uns leid für Ihren Verlust" 
                ist wichtiger als jede Erklärung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spezialisierungen */}
      <section id="spezialisierungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="h-6 w-6 text-primary" />
          Spezialisierungen für SEO nutzen
        </h2>

        <p className="text-muted-foreground mb-6">
          Spezialisierungen sind wertvolle Keywords und Differenzierungsmerkmale:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {spezialisierungen.map((spec, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{spec.bereich}</h3>
              <div className="flex flex-wrap gap-2">
                {spec.keywords.map((keyword, i) => (
                  <span key={i} className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex gap-3">
            <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Eigene Seiten für Spezialisierungen</p>
              <p className="text-muted-foreground text-sm">
                Erstelle für jede wichtige Spezialisierung eine eigene Unterseite. 
                /zahnmedizin, /chirurgie, /exoten etc. Diese Seiten können für spezialisierte 
                Suchanfragen ranken und zeigen deine Expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website */}
      <section id="website-optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Camera className="h-6 w-6 text-primary" />
          Website-Optimierung für Tierarztpraxen
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Must-Haves für die Website</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Große, klickbare Telefonnummer (Click-to-Call)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Online-Terminbuchung
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Notdienst-Info prominent platziert
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Team-Vorstellung mit Qualifikationen
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Leistungsübersicht mit Details
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Fotos vom Team mit Tieren
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">Lokale Optimierung</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Stadt/Stadtteil in Title Tags und H1
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <LexikonLink term="LocalBusiness Schema" /> implementieren
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                Google Maps Einbettung
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                NAP-Daten konsistent zu Google Business
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu Local SEO für Tierärzte
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

      <HelpfulnessWidget articleSlug="local-seo-tierarzt" />

      <RelatedIndustryGuides currentSlug="local-seo-tierarzt" />

      <SourcesSection sources={sources} />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoTierarzt;
