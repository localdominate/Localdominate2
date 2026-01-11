import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleCTA from "@/components/blog/ArticleCTA";
import LexikonLink from "@/components/blog/LexikonLink";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { getArticleBySlug } from "@/data/blogArticles";
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  Lightbulb, 
  Settings,
  Users,
  Globe,
  BarChart3
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocalSeoMehrstufigUnternehmen = () => {
  const article = getArticleBySlug("local-seo-mehrstufig-unternehmen");

  if (!article) return null;

  const tocItems = [
    { id: "herausforderungen", title: "Herausforderungen bei Multi-Location" },
    { id: "konsistenz", title: "NAP-Konsistenz sicherstellen" },
    { id: "gbp-verwaltung", title: "GBP-Verwaltung zentral steuern" },
    { id: "lokale-landingpages", title: "Lokale Landingpages erstellen" },
    { id: "bewertungsmanagement", title: "Bewertungen skalieren" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    {
      question: "Braucht jede Filiale ein eigenes Google Business Profil?",
      answer: "Ja, jeder physische Standort braucht ein eigenes GBP. Nur so kann jede Filiale für lokale Suchanfragen gefunden werden. Nutze den Business Manager für zentrale Verwaltung."
    },
    {
      question: "Wie vermeide ich Duplicate Content bei Standortseiten?",
      answer: "Jede Standortseite braucht einzigartige Inhalte: lokale Testimonials, spezifische Team-Infos, lokale Aktionen und individuelle Beschreibungen. Mindestens 60% sollten einzigartig sein."
    },
    {
      question: "Soll ich für jede Stadt eine eigene Domain nutzen?",
      answer: "Nein, Subfolders (beispiel.de/berlin/) sind SEO-technisch besser als separate Domains. Die Domain-Autorität wird so geteilt und die Verwaltung ist einfacher."
    },
    {
      question: "Wie skaliere ich Bewertungen für 50+ Standorte?",
      answer: "Nutze zentrale Review-Management-Tools, automatisierte Bewertungsanfragen nach Kauf, und standardisierte Antwort-Templates. Definiere klare Verantwortlichkeiten pro Standort."
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

  return (
    <ArticleLayout article={article} additionalSchema={faqSchema} tocItems={tocItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Franchise-Unternehmen und Filialisten stehen vor besonderen Herausforderungen: Wie skaliert man 
        <LexikonLink term="Local SEO" /> auf 10, 50 oder 500 Standorte? Dieser Guide zeigt dir die 
        Strategien für <strong>konsistente lokale Sichtbarkeit</strong> bei jedem einzelnen Standort.
      </p>

      <KeyTakeawaysBox 
        items={[
          "Jeder Standort braucht ein eigenes Google Business Profil",
          "NAP-Konsistenz ist bei Multi-Location besonders kritisch",
          "Lokale Landingpages mit einzigartigen Inhalten erstellen",
          "Zentrale Tools für effizientes Bewertungsmanagement nutzen",
          "Klare Verantwortlichkeiten für lokale vs. zentrale Aufgaben"
        ]}
      />

      {/* Herausforderungen */}
      <section id="herausforderungen" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Building2 className="h-6 w-6 text-primary" />
          Herausforderungen bei Multi-Location SEO
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Konsistenz", beschreibung: "Einheitliche Markeninfo über alle Standorte" },
            { title: "Skalierung", beschreibung: "Prozesse für 10-500 Standorte" },
            { title: "Lokale Relevanz", beschreibung: "Jeder Standort muss lokal relevant sein" },
            { title: "Ressourcen", beschreibung: "Effiziente Aufteilung von Aufgaben" }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.beschreibung}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAP-Konsistenz */}
      <section id="konsistenz" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-6 w-6 text-primary" />
          <LexikonLink term="NAP">NAP-Konsistenz</LexikonLink> sicherstellen
        </h2>

        <p className="text-muted-foreground mb-6">
          Bei Multi-Location ist <LexikonLink term="NAP">NAP-Konsistenz</LexikonLink> noch kritischer. 
          Kleine Abweichungen multiplizieren sich über alle Standorte und Verzeichnisse.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Best Practice</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Erstelle eine "Master-NAP-Datenbank" mit allen Standorten. Jede Änderung wird zentral gepflegt 
                und dann auf alle Plattformen ausgerollt. Nutze Citation-Management-Tools wie Yext oder Uberall.
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {[
            "Einheitliche Schreibweise des Firmennamens (GmbH vs. Gmbh)",
            "Standardisiertes Adressformat für alle Standorte",
            "Zentrale Telefonnummern-Verwaltung",
            "Regelmäßige Audits aller Online-Einträge"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* GBP-Verwaltung */}
      <section id="gbp-verwaltung" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Settings className="h-6 w-6 text-primary" />
          Google Business Profile zentral steuern
        </h2>

        <p className="text-muted-foreground mb-6">
          Der Google Business Profile Manager ermöglicht die zentrale Verwaltung aller Standorte:
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Zentrale Verwaltungsfunktionen:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Bulk-Upload:</strong> Viele Standorte gleichzeitig anlegen/aktualisieren</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Standortgruppen:</strong> Logische Gruppierung nach Region oder Typ</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Zentrale Insights:</strong> Performance aller Standorte im Überblick</span>
            </li>
          </ul>
        </div>
      </section>

      <ArticleCTA variant="inline" />

      {/* Lokale Landingpages */}
      <section id="lokale-landingpages" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Globe className="h-6 w-6 text-primary" />
          Lokale Landingpages erstellen
        </h2>

        <p className="text-muted-foreground mb-6">
          Jeder Standort braucht eine eigene Landingpage auf deiner Website:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left">Element</th>
                <th className="border border-border p-3 text-left">Zentral (Template)</th>
                <th className="border border-border p-3 text-left">Lokal (Einzigartig)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3">Layout/Design</td>
                <td className="border border-border p-3">✅</td>
                <td className="border border-border p-3">—</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Allg. Leistungen</td>
                <td className="border border-border p-3">✅</td>
                <td className="border border-border p-3">—</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Testimonials</td>
                <td className="border border-border p-3">—</td>
                <td className="border border-border p-3">✅</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Team-Infos</td>
                <td className="border border-border p-3">—</td>
                <td className="border border-border p-3">✅</td>
              </tr>
              <tr>
                <td className="border border-border p-3">Lokale Aktionen</td>
                <td className="border border-border p-3">—</td>
                <td className="border border-border p-3">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bewertungsmanagement */}
      <section id="bewertungsmanagement" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BarChart3 className="h-6 w-6 text-primary" />
          Bewertungen skalieren
        </h2>

        <p className="text-muted-foreground mb-6">
          Bei vielen Standorten brauchst du Systeme für effizientes Bewertungsmanagement:
        </p>

        <ol className="space-y-4 mb-6">
          {[
            { title: "Zentrale Überwachung", beschreibung: "Dashboard für alle Standort-Bewertungen" },
            { title: "Automatisierte Anfragen", beschreibung: "Nach Kauf/Besuch automatisch um Bewertung bitten" },
            { title: "Response-Templates", beschreibung: "Vorlagen für häufige Antwort-Szenarien" },
            { title: "Eskalationsprozess", beschreibung: "Kritische Bewertungen an zentrale Stelle melden" }
          ].map((item, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.beschreibung}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Häufig gestellte Fragen
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="local-seo-mehrstufig-unternehmen" />

      <SourcesSection sources={[
        { title: "Google: Mehrere Standorte verwalten", url: "https://support.google.com/business/answer/3038063" },
        { title: "Moz: Multi-Location SEO Guide", url: "https://moz.com/learn/seo/multi-location" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoMehrstufigUnternehmen;
