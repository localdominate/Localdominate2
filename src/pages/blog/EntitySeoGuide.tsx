import { Link } from "react-router-dom";
import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  Globe,
  Link2,
  Database,
  Search,
  Target,
  CheckCircle,
  XCircle,
  Layers,
  Zap,
  Eye,
  Shield,
  BookOpen,
  Code,
} from "lucide-react";

const EntitySeoGuide = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("entity-seo-guide", language);

  if (!article) return null;

  const tocItems = [
    { id: "was-ist-entity-seo", title: "Was ist Entity SEO?" },
    { id: "knowledge-graph", title: "Google Knowledge Graph verstehen" },
    { id: "entity-typen", title: "Entity-Typen für lokale Unternehmen" },
    { id: "entity-aufbau", title: "Entity-Identität aufbauen" },
    { id: "schema-markup", title: "Schema Markup als Entity-Signal" },
    { id: "sameAs-strategie", title: "sameAs & Entitäts-Verknüpfung" },
    { id: "ai-entity", title: "Entity SEO für AI-Suchmaschinen" },
    { id: "praxis-checkliste", title: "Praxis-Checkliste" },
    { id: "fehler", title: "Häufige Entity-SEO-Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Was ist der Unterschied zwischen Entity SEO und klassischem SEO?",
      answer:
        "Klassisches SEO optimiert für Keywords (Zeichenketten). Entity SEO optimiert dafür, dass Suchmaschinen dein Unternehmen als eindeutige Entität im Knowledge Graph verstehen — mit Eigenschaften, Beziehungen und Kontext. Das ermöglicht bessere Rankings, Rich Results und AI-Zitierungen.",
    },
    {
      question: "Brauche ich einen Wikipedia-Eintrag für Entity SEO?",
      answer:
        "Nein. Wikipedia hilft bei der Entity-Erkennung, ist aber nicht zwingend erforderlich. Lokale Unternehmen können ihre Entity-Identität über Google Business Profil, konsistente NAP-Daten, Schema Markup und Branchenverzeichnisse etablieren.",
    },
    {
      question: "Wie erkenne ich, ob Google mein Unternehmen als Entität versteht?",
      answer:
        "Suche nach deinem Unternehmensnamen bei Google. Erscheint rechts ein Knowledge Panel mit Logo, Adresse und Bewertungen, hat Google dich als Entität erkannt. Alternativ prüfe den Google Knowledge Graph API Search.",
    },
    {
      question: "Wie lange dauert es, als Entität erkannt zu werden?",
      answer:
        "Mit vollständigem GBP, konsistentem NAP und Schema Markup: 4-12 Wochen für erste Signale. Ein vollständiges Knowledge Panel kann 3-6 Monate dauern, abhängig von der Datendichte und den Bestätigungssignalen.",
    },
    {
      question: "Was ist sameAs im Schema Markup?",
      answer:
        "sameAs verknüpft deine Website mit deinen Profilen auf anderen Plattformen (Google Business, LinkedIn, Handelsregister, etc.). Es sagt Suchmaschinen: 'Diese URLs gehören alle zur selben Entität.' Das stärkt deine Entity-Identität.",
    },
    {
      question: "Hilft Entity SEO bei AI-Suchmaschinen wie ChatGPT?",
      answer:
        "Ja, erheblich. AI-Systeme nutzen Entity-Daten aus dem Knowledge Graph, Schema Markup und verknüpfte Quellen, um Unternehmen zu identifizieren und in Antworten zu zitieren. Starke Entity-Signale erhöhen die Zitierhäufigkeit deutlich.",
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "5 Mrd.+", label: "Entitäten im Knowledge Graph" },
          { value: "3x", label: "mehr Rich Results mit Entity SEO" },
          { value: "+40%", label: "höhere AI-Zitierrate" },
          { value: "8", label: "Entity-Signale für lokale SEO" },
        ].map((stat, i) => (
          <Card key={i} className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AutoLexikonParagraph>
        <p className="lead text-xl text-muted-foreground mb-8" id="intro">
          <strong>Suchmaschinen denken nicht in Keywords — sie denken in Entitäten.</strong>{" "}
          Entity SEO ist der Paradigmenwechsel von der Keyword-Optimierung zur
          Identitätsoptimierung. Wer versteht, wie Google, ChatGPT und Perplexity
          Unternehmen als Entitäten erkennen, kann seine Sichtbarkeit auf ein
          völlig neues Level heben.
        </p>
      </AutoLexikonParagraph>

      <KeyTakeawaysBox
        items={[
          "Entity SEO optimiert die digitale Identität deines Unternehmens — nicht einzelne Keywords",
          "Googles Knowledge Graph enthält 5+ Milliarden Entitäten und ist die Basis für Rich Results und AI Overviews",
          "Schema Markup (JSON-LD) mit @id und sameAs ist das wichtigste technische Entity-Signal",
          "Konsistente NAP-Daten über alle Plattformen hinweg bestätigen deine Entity-Identität",
          "AI-Suchmaschinen zitieren Unternehmen mit starker Entity-Identität 3x häufiger",
        ]}
      />

      <BlogCTAABTest articleSlug="entity-seo-guide" position="intro" />

      {/* Was ist Entity SEO */}
      <section id="was-ist-entity-seo" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Was ist Entity SEO?
        </h2>

        <p data-featured-snippet="true" data-speakable="true">
          <strong>Entity SEO</strong> (auch Entity-basierte Suchmaschinenoptimierung)
          bezeichnet die Optimierung der digitalen Identität eines Unternehmens,
          einer Person oder eines Konzepts, damit Suchmaschinen es als eindeutige,
          kontextualisierte Entität im Knowledge Graph erkennen — statt nur als
          Sammlung von Keywords auf einer Webseite.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                <XCircle className="h-5 w-5" />
                Keyword-SEO (alt)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  Optimiert einzelne Seiten für bestimmte Suchbegriffe
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  Fokus auf Keyword-Dichte und Backlinks
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  Google versteht Kontext nur über Textmuster
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  Anfällig für Algorithmus-Updates
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Entity SEO (neu)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Etabliert dein Unternehmen als eindeutige Entität
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Fokus auf Identität, Beziehungen und Kontext
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Google versteht Bedeutung über den Knowledge Graph
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Resilient gegenüber Updates — Identität bleibt stabil
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            Denkmodell
          </p>
          <p className="text-muted-foreground">
            Stell dir vor, Google hat ein <strong>digitales Adressbuch</strong> mit
            Milliarden Einträgen. Jeder Eintrag ist eine Entität — mit Name,
            Eigenschaften und Beziehungen zu anderen Entitäten. Entity SEO sorgt
            dafür, dass dein Eintrag vollständig, korrekt und gut vernetzt ist.
          </p>
        </div>
      </section>

      {/* Knowledge Graph */}
      <section id="knowledge-graph" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          Google Knowledge Graph verstehen
        </h2>

        <p>
          Der <strong>Google Knowledge Graph</strong> ist eine riesige Wissensdatenbank
          mit über 5 Milliarden Entitäten und 500 Milliarden Fakten. Er speichert
          nicht nur was etwas ist, sondern auch wie es mit anderen Dingen zusammenhängt.
        </p>

        <h3>Wie der Knowledge Graph aufgebaut ist</h3>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          {[
            {
              icon: Target,
              title: "Entitäten (Knoten)",
              desc: "Personen, Orte, Unternehmen, Konzepte — alles mit einer eindeutigen ID. Dein Restaurant, deine Stadt, deine Branche sind jeweils Entitäten.",
            },
            {
              icon: Link2,
              title: "Beziehungen (Kanten)",
              desc: "'Bäckerei Müller' → 'befindet sich in' → 'Berlin-Kreuzberg'. Beziehungen verbinden Entitäten und schaffen Kontext.",
            },
            {
              icon: Layers,
              title: "Attribute (Eigenschaften)",
              desc: "Öffnungszeiten, Telefonnummer, Gründungsjahr — Fakten, die eine Entität beschreiben und eindeutig machen.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3>Woher der Knowledge Graph seine Daten bekommt</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Datenquelle</th>
                <th className="border border-border p-3 text-left">Gewichtung</th>
                <th className="border border-border p-3 text-left">Für lokale Unternehmen relevant?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wikipedia / Wikidata", "Sehr hoch", "Nur für große Marken realistisch"],
                ["Google Business Profil", "Kritisch", "Ja — primäre lokale Datenquelle"],
                ["Schema Markup (JSON-LD)", "Hoch", "Ja — direkt steuerbar"],
                ["Behördliche Register", "Hoch", "Handelsregister, IHK etc."],
                ["Branchenverzeichnisse", "Mittel", "Ja — NAP-Konsistenz wichtig"],
                ["Social Media Profile", "Mittel", "sameAs-Verknüpfung"],
                ["Nachrichtenartikel", "Mittel", "Lokale Presse & PR"],
                ["Nutzersignale & Bewertungen", "Mittel", "Bestätigen Existenz & Relevanz"],
              ].map(([quelle, gewichtung, relevant], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{quelle}</td>
                  <td className="border border-border p-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        gewichtung === "Sehr hoch" || gewichtung === "Kritisch"
                          ? "bg-primary/15 text-primary"
                          : gewichtung === "Hoch"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {gewichtung}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{relevant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Grundlagen:{" "}
          <Link
            to="/blog/google-my-business-optimieren"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Google Business Profil optimieren
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/nap-konsistenz-local-seo"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            NAP-Konsistenz Guide
          </Link>
        </p>
      </section>

      {/* Entity-Typen */}
      <section id="entity-typen" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary" />
          Entity-Typen für lokale Unternehmen
        </h2>

        <p>
          Jedes lokale Unternehmen besteht aus mehreren verknüpften Entitäten.
          Wer alle diese Entity-Ebenen optimiert, maximiert seine Sichtbarkeit:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              typ: "Organization / LocalBusiness",
              beispiel: "Dein Unternehmen als Ganzes",
              schema: "LocalBusiness, Restaurant, Dentist etc.",
              tipp: "Spezifischsten Subtyp wählen",
            },
            {
              typ: "Person",
              beispiel: "Inhaber, Ärzte, Anwälte",
              schema: "Person mit jobTitle, worksFor",
              tipp: "Stärkt E-E-A-T-Signale enorm",
            },
            {
              typ: "Place",
              beispiel: "Dein Standort, Stadtteil, Stadt",
              schema: "PostalAddress, GeoCoordinates",
              tipp: "Geo-Entität verknüpfen",
            },
            {
              typ: "Product / Service",
              beispiel: "Deine Produkte und Dienstleistungen",
              schema: "Product, Service, Offer",
              tipp: "Jedes Angebot als eigene Entität",
            },
            {
              typ: "Event",
              beispiel: "Veranstaltungen, Aktionen",
              schema: "Event mit location, performer",
              tipp: "Saisonale Sichtbarkeit",
            },
            {
              typ: "Review / Rating",
              beispiel: "Kundenbewertungen",
              schema: "AggregateRating, Review",
              tipp: "Social Proof als Entity-Signal",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
            >
              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm">{item.typ}</h4>
                <p className="text-sm text-muted-foreground">{item.beispiel}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                    Schema: {item.schema}
                  </span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                    💡 {item.tipp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Entity-Identität aufbauen */}
      <section id="entity-aufbau" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Entity-Identität aufbauen: Der 8-Schritte-Plan
        </h2>

        <p>
          Eine starke Entity-Identität entsteht durch die Summe konsistenter Signale
          aus verschiedenen Quellen. Hier der systematische Aufbauplan:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              schritt: "Google Business Profil zu 100% ausfüllen",
              details:
                "Name, Adresse, Telefon, Kategorie, Beschreibung, Öffnungszeiten, Attribute, Fotos. Das GBP ist die primäre Entity-Quelle für Google.",
              link: { text: "GBP optimieren", url: "/blog/google-my-business-optimieren" },
            },
            {
              schritt: "NAP-Konsistenz über alle Plattformen herstellen",
              details:
                "Exakt gleicher Name, Adresse und Telefonnummer überall. Jede Abweichung schwächt deine Entity-Identität.",
              link: { text: "NAP-Guide", url: "/blog/nap-konsistenz-local-seo" },
            },
            {
              schritt: "Website mit vollständigem LocalBusiness Schema ausstatten",
              details:
                "JSON-LD mit @id, @type, name, address, telephone, openingHours, sameAs, geo, aggregateRating.",
              link: { text: "Schema Guide", url: "/blog/localbusiness-schema-implementierung" },
            },
            {
              schritt: "sameAs-Links zu allen offiziellen Profilen setzen",
              details:
                "Google Business, LinkedIn, Handelsregister, Branchenverzeichnisse, Social Media — alles verknüpfen.",
            },
            {
              schritt: "Inhaber/Team als Person-Entitäten etablieren",
              details:
                "Über-uns-Seite mit Qualifikationen, Person-Schema mit sameAs zu LinkedIn. Stärkt E-E-A-T.",
              link: { text: "E-E-A-T Guide", url: "/blog/e-e-a-t-lokale-unternehmen" },
            },
            {
              schritt: "In autoritative Verzeichnisse eintragen",
              details:
                "Handelsregister, IHK, branchenspezifische Verzeichnisse, lokale Wirtschaftsvereine. Jede Erwähnung bestätigt deine Existenz.",
              link: { text: "Citations Guide", url: "/blog/local-citations-2025" },
            },
            {
              schritt: "Bewertungen als Entity-Bestätigung nutzen",
              details:
                "Jede Bewertung ist ein unabhängiges Signal, dass dein Unternehmen existiert und relevant ist.",
              link: { text: "Bewertungen Guide", url: "/blog/google-bewertungen-bekommen" },
            },
            {
              schritt: "Lokale PR und Erwähnungen aufbauen",
              details:
                "Lokale Zeitungen, Blogs und Veranstaltungskalender. Unverlinkte Erwähnungen mit korrektem Namen zählen auch.",
              link: { text: "Link Building Guide", url: "/blog/local-link-building" },
            },
          ].map((item, i) => (
            <div key={i} className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-sm">{item.schritt}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                  {item.link && (
                    <Link
                      to={item.link.url}
                      className="text-xs text-primary underline decoration-primary/30 hover:decoration-primary mt-1 inline-block"
                    >
                      → {item.link.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BlogCTAABTest articleSlug="entity-seo-guide" position="middle" />

      {/* Schema Markup */}
      <section id="schema-markup" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          Schema Markup als Entity-Signal
        </h2>

        <p>
          Schema Markup (JSON-LD) ist die wichtigste technische Methode, um
          Suchmaschinen deine Entity-Informationen strukturiert mitzuteilen.
          Der Schlüssel liegt in der <strong>Verknüpfung</strong> der Entitäten.
        </p>

        <h3>Das @id-Prinzip: Eindeutige Entity-Identifikation</h3>

        <div className="bg-muted rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-foreground">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://example.com/#organization",
  "name": "Bäckerei Müller",
  "url": "https://example.com",
  "telephone": "+49-30-1234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstraße 42",
    "addressLocality": "Berlin",
    "postalCode": "10117",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.5200,
    "longitude": 13.4050
  },
  "sameAs": [
    "https://g.co/kgs/abc123",
    "https://www.linkedin.com/company/baeckerei-mueller",
    "https://www.instagram.com/baeckereimueller"
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://example.com/#founder",
    "name": "Thomas Müller",
    "jobTitle": "Bäckermeister",
    "sameAs": "https://linkedin.com/in/thomas-mueller"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}`}
          </pre>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <p className="text-sm">
            <strong>🔑 Wichtig:</strong> Die <code>@id</code> muss auf jeder Seite identisch
            sein. Sie ist der eindeutige Identifier deiner Entität. Verwende ein
            konsistentes Format wie <code>https://domain.com/#organization</code>.
          </p>
        </div>

        <p>
          Vollständige Implementierungsanleitung:{" "}
          <Link
            to="/blog/localbusiness-schema-implementierung"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            LocalBusiness Schema Implementierung
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/schema-markup-local-seo"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Schema Markup Guide
          </Link>
        </p>
      </section>

      {/* sameAs Strategie */}
      <section id="sameAs-strategie" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Link2 className="h-6 w-6 text-primary" />
          sameAs & Entitäts-Verknüpfung
        </h2>

        <p>
          Das <code>sameAs</code>-Property ist das mächtigste Entity-Signal. Es
          verknüpft deine Website mit allen anderen digitalen Präsenzen und sagt:
          <em> "Das sind alles die gleiche Entität."</em>
        </p>

        <h3>Die wichtigsten sameAs-Links für lokale Unternehmen</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left">Plattform</th>
                <th className="border border-border p-3 text-left">Priorität</th>
                <th className="border border-border p-3 text-left">Entity-Wert</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Google Business Profil (g.co/kgs/...)", "Kritisch", "Primäre lokale Entity-Quelle"],
                ["Handelsregister / Firmenbuch", "Sehr hoch", "Offizielle Existenzbestätigung"],
                ["LinkedIn (Unternehmensseite)", "Hoch", "Professionelle Entity-Verknüpfung"],
                ["Branchenverzeichnisse (11880, Gelbe Seiten)", "Hoch", "NAP-Bestätigung"],
                ["Facebook-Seite", "Mittel", "Social Entity-Signal"],
                ["Instagram-Profil", "Mittel", "Visueller Entity-Nachweis"],
                ["Wikidata (falls vorhanden)", "Sehr hoch", "Stärkster Entity-Identifier"],
                ["Branchenspezifische Plattformen", "Hoch", "Nischen-Autorität"],
              ].map(([plattform, prio, wert], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="border border-border p-3 font-medium">{plattform}</td>
                  <td className="border border-border p-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        prio === "Kritisch" || prio === "Sehr hoch"
                          ? "bg-primary/15 text-primary"
                          : prio === "Hoch"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {prio}
                    </span>
                  </td>
                  <td className="border border-border p-3 text-muted-foreground">{wert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI & Entity SEO */}
      <section id="ai-entity" className="mb-12">
        <h2 className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          Entity SEO für AI-Suchmaschinen
        </h2>

        <p data-featured-snippet="true">
          AI-Suchmaschinen wie ChatGPT, Perplexity und Google AI Overviews
          bevorzugen Quellen mit <strong>starker Entity-Identität</strong>, weil
          sie die Vertrauenswürdigkeit und Faktentreue leichter verifizieren
          können. Unternehmen im Knowledge Graph werden bis zu 3x häufiger in
          AI-Antworten zitiert.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              icon: Search,
              title: "Google AI Overviews",
              desc: "Nutzt den Knowledge Graph direkt. Entitäten mit vollständigem GBP und Schema werden bevorzugt in AI-generierten Snippets zitiert.",
            },
            {
              icon: Globe,
              title: "ChatGPT Search",
              desc: "Crawlt das Web und bewertet E-E-A-T-Signale. Schema Markup mit Autor-Entitäten erhöht die Zitierhäufigkeit signifikant.",
            },
            {
              icon: BookOpen,
              title: "Perplexity AI",
              desc: "Nutzt Multi-Source-Verifizierung. Je mehr unabhängige Quellen deine Entity bestätigen, desto wahrscheinlicher die Zitation.",
            },
            {
              icon: Zap,
              title: "Apple Intelligence",
              desc: "Greift auf Apple Maps und strukturierte Daten zu. LocalBusiness Schema und Apple Maps Eintrag sind entscheidend.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="pt-5">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          Weiterführend:{" "}
          <Link
            to="/blog/ai-suche-lokale-unternehmen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            AI-Suche für lokale Unternehmen
          </Link>{" "}
          |{" "}
          <Link
            to="/blog/website-content-ai-suchmaschinen"
            className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium"
          >
            Content für AI strukturieren
          </Link>
        </p>
      </section>

      {/* Praxis-Checkliste */}
      <section id="praxis-checkliste" className="mb-12">
        <h2 className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-primary" />
          Entity SEO Praxis-Checkliste
        </h2>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <div className="space-y-3">
            {[
              "Google Business Profil: 100% ausgefüllt, verifiziert, korrekte Primärkategorie",
              "NAP: Identisch auf Website, GBP, allen Verzeichnissen und Social Media",
              "Schema Markup: LocalBusiness JSON-LD mit @id, sameAs, geo, aggregateRating",
              "sameAs: Mindestens 5 verknüpfte Plattformen (GBP, LinkedIn, Verzeichnisse)",
              "Person-Schema: Inhaber/Experten mit Qualifikationen und sameAs",
              "Über-uns-Seite: Team, Geschichte, Qualifikationen — menschliche Entity-Signale",
              "Bewertungen: Aktiv gesammelt und mit Review-Schema ausgezeichnet",
              "Lokale Erwähnungen: In Presse, Verzeichnissen, Branchenportalen präsent",
              "Content: Fact-first, strukturiert, mit klaren Definitionen für AI-Extraktion",
              "llms.txt: Vorhanden und aktuell für AI-Crawler-Zugriff",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded border-primary/30" />
                <span className="text-sm group-hover:text-foreground transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Häufige Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="flex items-center gap-2">
          <XCircle className="h-6 w-6 text-destructive" />
          Die 7 häufigsten Entity-SEO-Fehler
        </h2>

        <div className="space-y-4 my-6">
          {[
            {
              fehler: "Inkonsistenter Unternehmensname",
              problem: "'Müller GmbH' vs 'Bäckerei Müller' vs 'Müller's Backstube' — Google erkennt 3 verschiedene Entitäten.",
              loesung: "Einen offiziellen Namen festlegen und überall identisch verwenden.",
            },
            {
              fehler: "Fehlende @id im Schema",
              problem: "Ohne @id kann Google dein Schema nicht über Seiten hinweg als eine Entität zusammenführen.",
              loesung: "@id auf jeder Seite setzen: https://domain.com/#organization",
            },
            {
              fehler: "sameAs vergessen oder falsche URLs",
              problem: "Ohne sameAs fehlt die Verknüpfung zu anderen Plattformen. Tote Links schaden.",
              loesung: "Alle aktiven Profile verlinken, regelmäßig auf Aktualität prüfen.",
            },
            {
              fehler: "Zu generische Kategorie im GBP",
              problem: "'Dienstleistung' statt 'Sanitärinstallateur'. Google kann dich keiner spezifischen Entity-Klasse zuordnen.",
              loesung: "Spezifischste verfügbare Kategorie wählen.",
            },
            {
              fehler: "Keine Person-Entitäten aufgebaut",
              problem: "Ohne Inhaber/Experten-Entität fehlen E-E-A-T-Signale komplett.",
              loesung: "Person-Schema für Schlüsselpersonen mit Qualifikationen und sameAs.",
            },
            {
              fehler: "Entity nur auf einer Plattform präsent",
              problem: "Eine einzige Quelle reicht für Google nicht zur Entity-Bestätigung.",
              loesung: "Mindestens 5 unabhängige Quellen mit konsistenten Daten.",
            },
            {
              fehler: "Alte/tote Profile nicht bereinigt",
              problem: "Veraltete Branchenbuch-Einträge mit falscher Adresse verwirren den Knowledge Graph.",
              loesung: "Audit aller Einträge, alte Profile löschen oder aktualisieren.",
            },
          ].map((item, i) => (
            <Card key={i} className="border-l-4 border-l-destructive/50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <span className="bg-destructive/10 text-destructive w-5 h-5 rounded-full flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                  {item.fehler}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  <strong>Problem:</strong> {item.problem}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  <strong>Lösung:</strong> {item.loesung}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection
        sources={[
          {
            title: "Google Knowledge Graph Dokumentation",
            url: "https://developers.google.com/knowledge-graph",
            type: "documentation",
            description: "Offizielle API-Dokumentation zum Knowledge Graph",
          },
          {
            title: "Schema.org: LocalBusiness",
            url: "https://schema.org/LocalBusiness",
            type: "documentation",
            description: "Vollständige Schema-Spezifikation für lokale Unternehmen",
          },
          {
            title: "Google: Structured Data Guidelines",
            url: "https://developers.google.com/search/docs/appearance/structured-data",
            type: "documentation",
            description: "Offizielle Google-Richtlinien für strukturierte Daten",
          },
          {
            title: "Whitespark: Local Search Ranking Factors",
            url: "https://whitespark.ca/local-search-ranking-factors/",
            type: "study",
            description: "Jährliche Studie zu lokalen Ranking-Faktoren",
          },
        ]}
      />

      <BlogCTAABTest articleSlug="entity-seo-guide" position="end" />
      <HelpfulnessWidget articleSlug="entity-seo-guide" />
    </ArticleLayout>
  );
};

export default EntitySeoGuide;
