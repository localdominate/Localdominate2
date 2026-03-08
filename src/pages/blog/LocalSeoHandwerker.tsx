import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogImage from "@/components/blog/BlogImage";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
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
import RelatedIndustryGuides from "@/components/blog/RelatedIndustryGuides";
import MiniSuccessStory from "@/components/blog/MiniSuccessStory";
import { miniSuccessStories } from "@/data/miniSuccessStories";
import IndustryLandingCTA from "@/components/blog/IndustryLandingCTA";
import { getArticleBySlug } from "@/data/blogArticles";
import localSeoHandwerkerImg from "@/assets/blog/local-seo-handwerker.jpg";
import { 
  CheckCircle, 
  AlertTriangle, 
  Lightbulb, 
  Wrench,
  Users,
  Star,
  Camera,
  MapPin,
  Phone,
  Clock,
  Target,
  TrendingUp,
  Award,
  Search
} from "lucide-react";

const LocalSeoHandwerker = () => {
  const article = getArticleBySlug("local-seo-handwerker");

  if (!article) return null;

  const tocItems = [
    { id: "warum-local-seo", title: "Warum Handwerker Local SEO brauchen" },
    { id: "customer-journey", title: "Die Kundenreise verstehen" },
    { id: "google-business", title: "Google Business für Handwerker" },
    { id: "bewertungen", title: "Bewertungen systematisch sammeln" },
    { id: "website-optimierung", title: "Website-Optimierung" },
    { id: "bilder-strategie", title: "Vorher-Nachher-Bilder nutzen" },
    { id: "google-garantie", title: "Google Garantie & Lokale Anzeigen" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Brauche ich als Handwerker wirklich eine eigene Website?",
      answer: "Ja, absolut. Eine Website gibt dir die volle Kontrolle über deine Online-Präsenz und verbessert dein Google Ranking. 70% der Kunden recherchieren online, bevor sie einen Handwerker beauftragen. Ohne Website verlierst du diese Kunden an die Konkurrenz."
    },
    {
      question: "Wie wichtig ist Google für Handwerker wirklich?",
      answer: "Google ist der wichtigste Kanal für Neukundengewinnung bei Handwerkern. 'Elektriker in der Nähe' oder 'Klempner Notdienst' werden tausendfach pro Tag gesucht. Wer hier nicht sichtbar ist, existiert für viele potenzielle Kunden nicht."
    },
    {
      question: "Was kostet Local SEO für einen Handwerksbetrieb?",
      answer: "DIY-Ansatz ist kostenlos, braucht aber 5-10 Stunden monatlich. Professionelle Betreuung kostet 300-800€/Monat. Der ROI ist hoch: Ein einziger Neukunde kann die Jahreskosten decken. Bei Local Dominator starten wir bei 297€ einmalig."
    },
    {
      question: "Wie schnell sehe ich Ergebnisse von Local SEO?",
      answer: "Erste Verbesserungen im Google Maps Ranking zeigen sich oft nach 4-8 Wochen. Signifikante Steigerungen der Anfragen erwarten wir nach 3-6 Monaten. Local SEO ist ein Marathon, kein Sprint – aber die Ergebnisse sind nachhaltig."
    },
    {
      question: "Welche Handwerker-Branchen profitieren am meisten von Local SEO?",
      answer: "Alle Gewerke mit Notdienst-Bedarf (Elektriker, Klempner, Schlüsseldienst) profitieren besonders. Aber auch Maler, Fliesenleger, Dachdecker und Gartenbauer gewinnen durch lokale Sichtbarkeit mehr Aufträge."
    },
    {
      question: "Soll ich für jede Stadt eine eigene Unterseite erstellen?",
      answer: "Ja, wenn du dort regelmäßig arbeitest. Erstelle für die 5-10 wichtigsten Städte in deinem Einzugsgebiet eigene Landingpages mit lokalem Content. Aber Vorsicht: Kein Duplicate Content – jede Seite braucht einzigartige Inhalte."
    },
    {
      question: "Wie bekomme ich mehr Google Bewertungen von meinen Kunden?",
      answer: "Frage aktiv nach Auftragsabschluss, am besten persönlich. Nutze QR-Codes auf Rechnungen oder Visitenkarten. Sende eine freundliche SMS/WhatsApp mit direktem Link zum Bewertungsformular. Die beste Bewertungsquote hast du innerhalb von 24 Stunden nach Abschluss."
    },
    {
      question: "Was ist die Google Garantie und lohnt sie sich?",
      answer: "Die Google Garantie ist ein Vertrauenssiegel für lokale Dienstleister. Kunden werden bei Unzufriedenheit von Google entschädigt. Das grüne Häkchen erhöht die Klickrate um 20-40%. Die Kosten: Einmalige Prüfung + Pay-per-Lead-Modell."
    },
    {
      question: "Lohnen sich Google Ads für Handwerker?",
      answer: "Ja, besonders für Notdienste und saisonale Aufträge. Das Lokale Dienstleistungs-Format zeigt dich mit Bewertungen ganz oben. Kosten: 5-50€ pro Lead je nach Branche und Region. Kombiniere Ads mit organischer SEO für maximale Sichtbarkeit."
    },
    {
      question: "Wie wichtig sind Bilder meiner Arbeit für das Ranking?",
      answer: "Sehr wichtig! Bilder erhöhen das Engagement auf deinem Google Business Profil und Website. Vorher-Nachher-Fotos zeigen deine Qualität. Google bevorzugt Profile mit vielen, aktuellen Fotos. Lade mindestens 5 neue Bilder pro Monat hoch."
    },
    {
      question: "Soll ich mein Einzugsgebiet im Google Business Profil angeben?",
      answer: "Ja, nutze die Service-Area-Funktion, wenn du zu Kunden fährst. Liste alle PLZ-Bereiche oder Städte auf, die du bedienst. So erscheinst du auch bei Suchanfragen aus benachbarten Städten. Maximales Einzugsgebiet: ca. 50km Radius."
    },
    {
      question: "Was tun bei negativen Bewertungen?",
      answer: "Antworte immer professionell und zeitnah (innerhalb von 24 Stunden). Bedanke dich für das Feedback, entschuldige dich falls angebracht, und biete eine Lösung an. Fordere den Kunden auf, dich direkt zu kontaktieren. Nie emotional werden!"
    },
    {
      question: "Wie oft sollte ich auf Google Business posten?",
      answer: "Mindestens 1x pro Woche. Poste abgeschlossene Projekte, Vorher-Nachher-Bilder, Tipps für Hausbesitzer, Team-Updates oder saisonale Angebote. Regelmäßige Posts signalisieren Google Aktivität und halten dein Profil frisch."
    },
    {
      question: "Brauche ich als Handwerker Social Media?",
      answer: "Optional, aber hilfreich. Facebook und Instagram eignen sich gut für Vorher-Nachher-Bilder. Der Zeitaufwand sollte aber begrenzt sein. Fokussiere dich zuerst auf Google Business und Website – dort suchen die Kunden aktiv."
    },
    {
      question: "Wie finde ich die richtigen Keywords für mein Handwerk?",
      answer: "Denke aus Kundensicht: 'Elektriker München', 'Wasserschaden Notdienst Berlin', 'Badezimmer renovieren Kosten'. Nutze Google Suggest (Autovervollständigung) für Ideen. Tools wie Ubersuggest zeigen Suchvolumen. Fokussiere auf Stadt + Leistung."
    }
  ];


  const handwerkerBranchen = [
    { name: "Elektriker", icon: "⚡", searches: "12.000/Monat" },
    { name: "Klempner/Sanitär", icon: "🔧", searches: "9.500/Monat" },
    { name: "Maler", icon: "🎨", searches: "8.200/Monat" },
    { name: "Dachdecker", icon: "🏠", searches: "5.400/Monat" },
    { name: "Fliesenleger", icon: "🔲", searches: "4.800/Monat" },
    { name: "Schreiner/Tischler", icon: "🪵", searches: "6.100/Monat" }
  ];

  return (
    <ArticleLayout article={article} faqItems={faqItems} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      {/* Einleitung */}
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Als Handwerker verlässt du dich auf Mundpropaganda? Das war gestern. Heute suchen <strong>85% 
        aller Kunden</strong> online nach Handwerkern – und wer bei Google nicht sichtbar ist, verliert 
        Aufträge an die Konkurrenz. Dieser Guide zeigt dir, wie du mit <LexikonLink term="Local SEO" /> mehr qualifizierte 
        Anfragen bekommst und im <LexikonLink term="Local Pack" /> erscheinst.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Warum 85% der Kunden heute online nach Handwerkern suchen",
          "Google Business Profil speziell für Handwerker optimieren",
          "Bewertungen systematisch und rechtssicher sammeln",
          "Vorher-Nachher-Bilder strategisch für mehr Aufträge einsetzen",
          "Google Garantie und lokale Dienstleistungsanzeigen nutzen"
        ]}
      />

      <BlogImage 
        src={localSeoHandwerkerImg} 
        alt="Handwerker mit Google Business Profil auf Smartphone"
        caption="Lokale Sichtbarkeit bringt Handwerkern mehr qualifizierte Anfragen"
      />

      {/* Statistik-Karten */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">85%</div>
          <p className="text-xs text-muted-foreground">suchen online nach Handwerkern</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">76%</div>
          <p className="text-xs text-muted-foreground">besuchen Betrieb innerhalb 24h</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">28%</div>
          <p className="text-xs text-muted-foreground">dieser Suchen führen zum Kauf</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">4.8★</div>
          <p className="text-xs text-muted-foreground">Mindestbewertung für Vertrauen</p>
        </div>
      </div>

      {/* Warum Local SEO */}
      <section id="warum-local-seo" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-primary" />
          Warum Handwerker Local SEO brauchen
        </h2>

        <p className="text-muted-foreground mb-6">
          Die Zeiten, in denen Handwerker nur durch Empfehlungen Aufträge bekamen, sind vorbei. 
          Heute ist Google der erste Anlaufpunkt für Kunden:
        </p>

        <div className="space-y-4 mb-6">
          {handwerkerBranchen.map((branche, index) => (
            <div key={index} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{branche.icon}</span>
                <span className="font-medium text-foreground">{branche.name} + [Stadt]</span>
              </div>
              <span className="text-primary font-semibold">{branche.searches}</span>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Das bedeutet für dich</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Jeden Tag suchen tausende Menschen in deiner Region nach genau deiner Dienstleistung. 
                Wer im <LexikonLink term="Local Pack" /> (Top 3 bei Google Maps) steht, bekommt den Großteil dieser Anfragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section id="customer-journey" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-primary" />
          Die Kundenreise verstehen
        </h2>

        <p className="text-muted-foreground mb-6">
          Um bei Google erfolgreich zu sein, musst du verstehen, wie Kunden heute Handwerker suchen:
        </p>

        <div className="space-y-6 mb-6">
          {[
            {
              step: 1,
              title: "Problem erkennen",
              description: "Wasserrohrbruch, defekte Steckdose oder Renovierungswunsch",
              keyword: "Was tun bei Wasserrohrbruch?"
            },
            {
              step: 2,
              title: "Google-Suche",
              description: "Suche nach lokalem Handwerker",
              keyword: "Klempner Notdienst München"
            },
            {
              step: 3,
              title: "Vergleich",
              description: "Prüfung von Bewertungen, Bildern, Website",
              keyword: "4,8 Sterne, 127 Bewertungen"
            },
            {
              step: 4,
              title: "Kontakt",
              description: "Anruf oder Kontaktformular",
              keyword: "Anrufen-Button, WhatsApp"
            },
            {
              step: 5,
              title: "Auftrag",
              description: "Buchung und Durchführung",
              keyword: "Terminvereinbarung"
            }
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                <span className="inline-block bg-muted px-2 py-1 rounded text-xs text-muted-foreground">
                  "{item.keyword}"
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Google Business für Handwerker */}
      <section id="google-business" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <LexikonLink term="Google Business Profile">Google Business Profil</LexikonLink> für Handwerker optimieren
        </h2>

        <p className="text-muted-foreground mb-6">
          Dein <LexikonLink term="Google Business Profile" /> ist dein wichtigstes Marketing-Tool. So optimierst du es:
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">1. Die richtige Kategorie wählen</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Gewerk</th>
                <th className="border border-border p-3 text-left">Hauptkategorie</th>
                <th className="border border-border p-3 text-left">Zusätzliche Kategorien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Elektriker</td>
                <td className="border border-border p-3">Elektriker</td>
                <td className="border border-border p-3 text-sm">Elektroinstallation, Beleuchtungsgeschäft</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Klempner</td>
                <td className="border border-border p-3">Klempner</td>
                <td className="border border-border p-3 text-sm">Sanitärinstallation, Heizungsinstallateur</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Maler</td>
                <td className="border border-border p-3">Maler</td>
                <td className="border border-border p-3 text-sm">Renovierungsunternehmen, Tapezierarbeiten</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Dachdecker</td>
                <td className="border border-border p-3">Dachdecker</td>
                <td className="border border-border p-3 text-sm">Dachrinnenservice, Bauunternehmen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">2. Einzugsgebiet definieren</h3>
        
        <p className="text-muted-foreground mb-4">
          Als Handwerker fährst du zu deinen Kunden. Nutze die Service-Area-Funktion:
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Liste alle Städte/Bezirke auf, die du bedienst",
            "Maximaler sinnvoller Radius: 30-50 km",
            "Konzentriere dich auf 10-15 Haupt-Servicegebiete",
            "Aktualisiere bei Expansion dein Gebiet"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-4">3. Öffnungszeiten & Notdienst</h3>
        
        <div className="bg-card border border-border rounded-lg p-5 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Reguläre Zeiten</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Gib realistische Zeiten an, wann du erreichbar bist. 
                Kunden rufen oft abends an!
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">24h Notdienst</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Bietest du Notdienst? Nutze "Weitere Öffnungszeiten" 
                für separate Notfall-Zeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Star className="h-6 w-6 text-primary" />
          <LexikonLink term="Reviews (Bewertungen)">Bewertungen</LexikonLink> systematisch sammeln
        </h2>

        <p className="text-muted-foreground mb-6">
          Für Handwerker sind <LexikonLink term="Reviews (Bewertungen)">Bewertungen</LexikonLink> noch wichtiger als für andere Branchen. 
          Kunden lassen fremde Menschen in ihr Zuhause – Vertrauen und <LexikonLink term="E-E-A-T" /> sind entscheidend.
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              title: "Persönlich fragen",
              description: "Nach erfolgreichem Abschluss direkt ansprechen: 'War alles zu Ihrer Zufriedenheit? Über eine Google-Bewertung würde ich mich sehr freuen.'"
            },
            {
              title: "QR-Code auf Rechnung",
              description: "Drucke einen QR-Code mit direktem Link zu deinem Bewertungsformular auf jede Rechnung."
            },
            {
              title: "WhatsApp/SMS Follow-up",
              description: "Sende 24 Stunden nach Auftragsabschluss eine freundliche Nachricht mit Bewertungslink."
            },
            {
              title: "Visitenkarte mit Bitte",
              description: "Rückseite der Visitenkarte: 'Zufrieden? Bewerten Sie uns!' + QR-Code"
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Wichtig: Authentisch bleiben</p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Kaufe niemals Bewertungen oder biete Rabatte für positive Rezensionen an. 
                Google erkennt Fake-Bewertungen und kann dein Profil sperren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Optimierung */}
      <section id="website-optimierung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Search className="h-6 w-6 text-primary" />
          Website-Optimierung für lokale Suchen
        </h2>

        <h3 className="text-xl font-semibold text-foreground mb-4">Städte-Landingpages erstellen</h3>
        
        <p className="text-muted-foreground mb-4">
          Für jede wichtige Stadt in deinem Einzugsgebiet solltest du eine eigene Seite haben:
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6 font-mono text-sm">
          <p className="text-muted-foreground">• meinefirma.de/elektriker-<span className="text-primary">muenchen</span></p>
          <p className="text-muted-foreground">• meinefirma.de/elektriker-<span className="text-primary">freising</span></p>
          <p className="text-muted-foreground">• meinefirma.de/elektriker-<span className="text-primary">erding</span></p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Unique Content ist Pflicht</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Jede Städteseite braucht einzigartigen Inhalt! Erwähne lokale Besonderheiten, 
                Referenzprojekte in der Stadt und spezifische Probleme (z.B. alte Leitungen in Altbauvierteln).
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">LocalBusiness Schema Markup</h3>
        
        <p className="text-muted-foreground mb-4">
          Hilf Google, deine Daten zu verstehen, mit strukturierten Daten:
        </p>

        <ul className="space-y-2 mb-6">
          {[
            "Name, Adresse, Telefon (NAP)",
            "Öffnungszeiten und Notdienst-Zeiten",
            "Service-Area/Einzugsgebiet",
            "Preisbereich (priceRange)",
            "Angebotene Dienstleistungen"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <ArticleCTA variant="inline" />

      {/* Bilder-Strategie */}
      <section id="bilder-strategie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Camera className="h-6 w-6 text-primary" />
          Vorher-Nachher-Bilder richtig nutzen
        </h2>

        <p className="text-muted-foreground mb-6">
          Nichts überzeugt mehr als sichtbare Ergebnisse. So nutzt du Bilder optimal:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">✅ Do's</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Vorher UND Nachher aus gleichem Winkel",
                "Bei Tageslicht fotografieren",
                "Verschiedene Projekttypen zeigen",
                "Kundenerlaubnis einholen",
                "Regelmäßig neue Bilder posten"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-3">❌ Don'ts</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Unscharfe oder dunkle Fotos",
                "Nur 'Nachher' ohne Kontext",
                "Stockfotos statt echter Arbeit",
                "Unordnung im Bildausschnitt",
                "Veraltete Projekte als neu ausgeben"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Google Garantie */}
      <section id="google-garantie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Award className="h-6 w-6 text-primary" />
          Google Garantie & Lokale Dienstleistungsanzeigen
        </h2>

        <p className="text-muted-foreground mb-6">
          Die Google Garantie ist ein spezielles Programm für lokale Dienstleister wie Handwerker:
        </p>

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Vorteile der Google Garantie
          </h3>
          <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
            <li>• Grünes Häkchen neben deinem Namen = mehr Vertrauen</li>
            <li>• Prominente Platzierung über regulären Suchergebnissen</li>
            <li>• Google übernimmt Haftung bei Kundenunzufriedenheit (bis 2.000€)</li>
            <li>• Pay-per-Lead statt Pay-per-Click = nur für echte Anfragen zahlen</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-4">Voraussetzungen</h3>
        
        <ul className="space-y-2 mb-6">
          {[
            "Gültiger Gewerbeschein/Handwerksrolleneintrag",
            "Hintergrundprüfung des Unternehmens",
            "Nachweis von Versicherungen",
            "Mindestzahl an Google-Bewertungen (typisch: 5+)",
            "Bestehen der Google-Überprüfung"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <Target className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {miniSuccessStories.handwerker?.map((story, i) => (
        <MiniSuccessStory key={i} story={story} />
      ))}

      <IndustryLandingCTA industry="handwerker" />

      {industryStats.handwerker?.map((stat, i) => <StatisticBox key={i} data={stat} variant={i === 0 ? "highlight" : "default"} />)}
      <StatisticBox data={generalLocalSeoStats} variant="compact" />

      <ImplementationRoadmap data={industryImplementationData.handwerker} />

      <IndustryBenchmarkTable data={industryBenchmarkData.handwerker} />

      <IndustryComparisonTable data={industryComparisonData.handwerker} />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufige Fragen zu Local SEO für Handwerker
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
          { title: "Google Business Profile Hilfe", url: "https://support.google.com/business", type: "documentation", description: "Offizielle Google-Dokumentation für Unternehmensprofile" },
          { title: "Google Lokale Dienstleistungen", url: "https://ads.google.com/local-services-ads/", type: "documentation", description: "Informationen zu Google Garantie und lokalen Anzeigen" },
          { title: "Handwerkskammer Digitalisierung", url: "https://www.zdh.de/", type: "article", description: "Zentralverband des Deutschen Handwerks" },
          { title: "MyHammer für Handwerker", url: "https://www.myhammer.de/", type: "tool", description: "Plattform zur Auftragsgewinnung" }
        ]}
      />

      {/* Case Studies */}
      <section id="praxisbeispiele" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Praxisbeispiele: So haben Handwerker mit Local SEO gewonnen</h2>
        <p className="text-muted-foreground mb-6">Diese anonymisierten Beispiele zeigen, was mit konsequenter Local SEO Umsetzung möglich ist:</p>
        {industryCaseStudies.handwerker.map((study, i) => (
          <CaseStudyCard key={i} study={study} />
        ))}
      </section>

      <HelpfulnessWidget articleSlug="local-seo-handwerker" />

      <RelatedIndustryGuides currentSlug="local-seo-handwerker" />

      <ArticleCTA />
    </ArticleLayout>
  );
};

export default LocalSeoHandwerker;
