import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, FileCode, AlertTriangle, Zap, Target, BookOpen, Building, HelpCircle, Wrench } from "lucide-react";

const SchemaStrategieDokument = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("schema-strategie-dokument", language)!;

  const tocItems = [
    { id: "warum-schema", title: "Warum Schema Markup?" },
    { id: "article-schema", title: "Article Schema" },
    { id: "faqpage-schema", title: "FAQPage Schema" },
    { id: "howto-schema", title: "HowTo Schema" },
    { id: "localbusiness-schema", title: "LocalBusiness Schema" },
    { id: "entscheidungsmatrix", title: "Entscheidungsmatrix" },
    { id: "kombinationen", title: "Schema-Kombinationen" },
    { id: "implementierung", title: "Implementierungsleitfaden" },
    { id: "haeufige-fehler", title: "Häufige Fehler vermeiden" },
    { id: "testing", title: "Testing & Validierung" },
    { id: "faq", title: "Häufige Fragen" },
  ];

  const keyTakeaways = [
    "Article Schema gehört auf jeden Blog-Artikel — es ist die Basis für Google News und Discover",
    "FAQPage Schema nur einsetzen, wenn echte FAQ-Abschnitte auf der Seite sichtbar sind",
    "HowTo Schema für Schritt-für-Schritt-Anleitungen mit klaren, nummerierten Schritten",
    "LocalBusiness Schema auf Standortseiten und Branchenguides — nie auf generischen Ratgebern",
    "Nie mehr als 3–4 Schema-Typen pro Seite kombinieren — Qualität vor Quantität",
  ];

  const faqItems = [
    { question: "Kann ich mehrere Schema-Typen auf einer Seite kombinieren?", answer: "Ja! Google empfiehlt sogar die Kombination von komplementären Schemas. Eine typische Branchenseite könnte Article + FAQPage + LocalBusiness kombinieren. Achten Sie darauf, dass jedes Schema valide ist und der sichtbare Seiteninhalt die ausgezeichneten Daten widerspiegelt." },
    { question: "Wird meine Seite durch Schema Markup besser ranken?", answer: "Schema ist kein direkter Ranking-Faktor. Es verbessert aber die Darstellung in den Suchergebnissen (Rich Snippets), was die Klickrate (CTR) um 20–30% steigern kann. Höhere CTR kann indirekt zu besseren Rankings führen." },
    { question: "Was passiert, wenn mein Schema ungültig ist?", answer: "Google ignoriert ungültiges Schema. Im schlimmsten Fall erhalten Sie eine Manual Action in der Search Console. Testen Sie immer mit dem Rich Results Test und beheben Sie Fehler sofort." },
    { question: "Wie oft muss ich mein Schema aktualisieren?", answer: "Immer wenn sich die zugrundeliegenden Daten ändern: Öffnungszeiten, Adresse, FAQ-Inhalte, Artikeldaten. Statische Schemas wie Article brauchen nur bei Content-Updates eine Aktualisierung." },
    { question: "Brauche ich Schema für jede Unterseite?", answer: "Nicht jede Seite braucht jedes Schema. Article Schema gehört auf Blog-Artikel, LocalBusiness auf Standortseiten, FAQPage nur auf Seiten mit echten FAQs. Die Entscheidungsmatrix in diesem Dokument hilft bei der Zuordnung." },
    { question: "Soll ich JSON-LD oder Microdata verwenden?", answer: "Google empfiehlt JSON-LD. Es ist einfacher zu implementieren, unabhängig vom HTML-Markup und leichter zu warten. Microdata funktioniert zwar, ist aber fehleranfälliger und schwieriger zu debuggen." },
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Schema Markup Strategie für lokale Websites implementieren",
    "description": "Schritt-für-Schritt-Anleitung zur Implementierung einer siteweiten Schema-Strategie für lokale Unternehmen.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Seitentypen identifizieren", "text": "Kategorisieren Sie alle Seiten: Blog-Artikel, Branchenseiten, Standortseiten, Tool-Seiten, FAQ-Seiten." },
      { "@type": "HowToStep", "position": 2, "name": "Schema-Zuordnung erstellen", "text": "Nutzen Sie die Entscheidungsmatrix, um jedem Seitentyp die passenden Schema-Typen zuzuordnen." },
      { "@type": "HowToStep", "position": 3, "name": "Basis-Schemas implementieren", "text": "Implementieren Sie Article + BreadcrumbList + WebPage als Basis für alle Seiten." },
      { "@type": "HowToStep", "position": 4, "name": "Spezialisierte Schemas hinzufügen", "text": "Ergänzen Sie FAQPage, HowTo oder LocalBusiness je nach Seitentyp." },
      { "@type": "HowToStep", "position": 5, "name": "Testen und validieren", "text": "Prüfen Sie jede Seite mit dem Google Rich Results Test und der Schema.org Validierung." },
    ],
  };

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems} additionalSchema={howToSchema}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Warum Schema Markup */}
      <section id="warum-schema">
        <h2>Warum eine Schema-Strategie unverzichtbar ist</h2>
        <AutoLexikonText>
          <p>
            Schema Markup (strukturierte Daten) ist die <strong>Sprache, die Suchmaschinen verstehen</strong>.
            Während HTML den Inhalt für Menschen darstellt, erklärt Schema den Maschinen, <em>was</em> der
            Inhalt bedeutet. Ohne Schema raten Google, Bing und KI-Systeme — mit Schema wissen sie es.
          </p>
          <p>
            Für lokale Unternehmen ist Schema besonders wertvoll: Es ermöglicht Rich Snippets
            (Sterne, FAQs, Anleitungen in den Suchergebnissen), verbessert die Darstellung im
            Local Pack und hilft KI-Assistenten wie Google AI Overviews, Ihre Inhalte zu zitieren.
          </p>
          <h3>Die 4 wichtigsten Schema-Typen für Local SEO</h3>
          <p>
            Nicht jedes Schema passt auf jede Seite. Dieses Strategie-Dokument definiert,
            wann welcher Schema-Typ eingesetzt wird — mit klaren Regeln, Beispielen und
            einer Entscheidungsmatrix.
          </p>
        </AutoLexikonText>
      </section>

      {/* Article Schema */}
      <section id="article-schema">
        <h2>Article Schema: Die Basis für jeden Blog-Artikel</h2>
        <AutoLexikonText>
          <p>
            Das <strong>Article Schema</strong> ist der universelle Grundbaustein für redaktionelle Inhalte.
            Es teilt Google mit, dass eine Seite einen Artikel enthält — mit Autor, Veröffentlichungsdatum,
            Headline und Beschreibung.
          </p>
        </AutoLexikonText>

        <Card className="my-6 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-primary" />
              Wann Article Schema einsetzen?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Blog-Artikel und Ratgeber</li>
                  <li>✅ News-Beiträge und Aktualisierungen</li>
                  <li>✅ Case Studies und Erfahrungsberichte</li>
                  <li>✅ Pillar Pages und umfassende Guides</li>
                  <li>✅ Branchenguides (z.B. "Local SEO für Zahnärzte")</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Nicht einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Produkt- oder Dienstleistungsseiten</li>
                  <li>❌ Kontaktseiten oder Impressum</li>
                  <li>❌ Landing Pages ohne redaktionellen Inhalt</li>
                  <li>❌ Reine Tool-Seiten (Rechner, Generatoren)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <AutoLexikonText>
          <h3>Pflichtfelder für Article Schema</h3>
          <ul>
            <li><strong>headline:</strong> Artikeltitel (max. 110 Zeichen empfohlen)</li>
            <li><strong>author:</strong> Organisation oder Person mit Name und URL</li>
            <li><strong>datePublished:</strong> Erstveröffentlichung im ISO-8601-Format</li>
            <li><strong>dateModified:</strong> Letzte Aktualisierung — kritisch für E-E-A-T</li>
            <li><strong>image:</strong> Mindestens 1200×630px für optimale Darstellung</li>
            <li><strong>publisher:</strong> Organisation mit Logo (min. 112×112px)</li>
          </ul>
          <h3>Unsere Implementierung</h3>
          <p>
            Article Schema wird <strong>automatisch</strong> über die <code>ArticleLayout</code>-Komponente
            für jeden Blog-Artikel generiert. Es enthält zusätzlich: <code>speakable</code> für
            Sprachassistenten, <code>keywords</code>, <code>wordCount</code> und
            AI-optimierte Felder wie <code>usageInfo</code> und <code>creditText</code>.
          </p>
        </AutoLexikonText>
      </section>

      {/* FAQPage Schema */}
      <section id="faqpage-schema">
        <h2>FAQPage Schema: Rich Snippets für häufige Fragen</h2>
        <AutoLexikonText>
          <p>
            Das <strong>FAQPage Schema</strong> markiert Frage-Antwort-Paare und kann dazu führen,
            dass Google diese direkt in den Suchergebnissen anzeigt — als aufklappbare Elemente
            unter Ihrem Suchergebnis.
          </p>
        </AutoLexikonText>

        <Card className="my-6 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <HelpCircle className="h-5 w-5 text-primary" />
              Wann FAQPage Schema einsetzen?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Artikel mit dediziertem FAQ-Abschnitt</li>
                  <li>✅ Dienstleistungsseiten mit Kundenfragen</li>
                  <li>✅ Branchenseiten mit typischen Fragen</li>
                  <li>✅ Troubleshooting-Guides</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Nicht einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Seiten ohne sichtbare FAQ-Sektion</li>
                  <li>❌ Forum-Seiten (dafür QAPage nutzen)</li>
                  <li>❌ Seiten mit nur 1–2 Fragen</li>
                  <li>❌ FAQs die nicht auf der Seite sichtbar sind</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <AutoLexikonText>
          <h3>Wichtige Regeln für FAQPage Schema</h3>
          <ul>
            <li><strong>Sichtbarkeit:</strong> Jede Frage und Antwort MUSS auf der Seite sichtbar sein</li>
            <li><strong>Mindestanzahl:</strong> Mindestens 3 Fragen für sinnvolle Implementierung</li>
            <li><strong>Einzigartigkeit:</strong> Keine identischen FAQs auf mehreren Seiten</li>
            <li><strong>Qualität:</strong> Echte, hilfreiche Antworten — keine Keyword-Stuffing-Antworten</li>
          </ul>
          <h3>Unsere Implementierung</h3>
          <p>
            FAQPage Schema wird <strong>automatisch</strong> generiert, wenn die <code>faqItems</code>-Prop
            an <code>ArticleLayout</code> übergeben wird. Das stellt sicher, dass Schema-Daten und
            sichtbare FAQ-Sektion immer synchron sind.
          </p>
        </AutoLexikonText>

        <div className="bg-muted/50 border border-border rounded-lg p-4 my-6">
          <p className="text-sm font-mono text-muted-foreground">
            <strong>Code-Beispiel:</strong>
          </p>
          <pre className="text-xs overflow-x-auto mt-2 text-muted-foreground">
{`const faqItems = [
  { question: "Ihre Frage?", answer: "Ihre Antwort." },
  { question: "Weitere Frage?", answer: "Weitere Antwort." },
];

<ArticleLayout article={article} faqItems={faqItems}>
  {/* FAQ wird automatisch als Schema generiert */}
</ArticleLayout>`}
          </pre>
        </div>
      </section>

      {/* HowTo Schema */}
      <section id="howto-schema">
        <h2>HowTo Schema: Anleitungen mit Rich Results</h2>
        <AutoLexikonText>
          <p>
            Das <strong>HowTo Schema</strong> markiert Schritt-für-Schritt-Anleitungen und kann
            zu erweiterten Suchergebnissen mit nummerierten Schritten führen. Es ist besonders
            wertvoll für praktische Guides und Checklisten.
          </p>
        </AutoLexikonText>

        <Card className="my-6 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Wrench className="h-5 w-5 text-primary" />
              Wann HowTo Schema einsetzen?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Schritt-für-Schritt-Anleitungen</li>
                  <li>✅ Optimierungs-Guides (GBP, Website)</li>
                  <li>✅ Roadmaps und Strategie-Planer</li>
                  <li>✅ Checklisten mit klarer Reihenfolge</li>
                  <li>✅ Template-Seiten mit Workflow</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Nicht einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Reine Informationsartikel ohne Schritte</li>
                  <li>❌ Vergleichsartikel oder Listicles</li>
                  <li>❌ Rezepte (dafür Recipe Schema nutzen)</li>
                  <li>❌ Artikel mit ungeordneten Tipps</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <AutoLexikonText>
          <h3>Pflichtfelder für HowTo Schema</h3>
          <ul>
            <li><strong>name:</strong> Titel der Anleitung</li>
            <li><strong>step:</strong> Array von HowToStep-Objekten mit position, name und text</li>
            <li><strong>description:</strong> Kurzbeschreibung der Anleitung</li>
          </ul>
          <h3>Optionale aber empfohlene Felder</h3>
          <ul>
            <li><strong>totalTime:</strong> Geschätzte Gesamtdauer (ISO 8601, z.B. "PT2H")</li>
            <li><strong>tool:</strong> Benötigte Werkzeuge/Software</li>
            <li><strong>supply:</strong> Benötigte Materialien</li>
            <li><strong>image:</strong> Bilder pro Schritt für visuelle Rich Results</li>
          </ul>
          <h3>Unsere Implementierung</h3>
          <p>
            HowTo Schema wird über die <code>additionalSchema</code>-Prop an <code>ArticleLayout</code>
            übergeben. Derzeit implementiert auf: Google Business Optimierung, SEO Audit Checkliste,
            Kostenlose SEO, Friseur-Guide, Roadmap, Citation Tracking, Keyword Research und Strategy Planner.
          </p>
        </AutoLexikonText>
      </section>

      {/* LocalBusiness Schema */}
      <section id="localbusiness-schema">
        <h2>LocalBusiness Schema: Standort- und Branchendaten</h2>
        <AutoLexikonText>
          <p>
            Das <strong>LocalBusiness Schema</strong> ist das wichtigste Schema für lokale Unternehmen.
            Es definiert Geschäftsname, Adresse, Telefonnummer, Öffnungszeiten und Servicegebiet —
            die Kernelemente für das Local Pack und Google Maps.
          </p>
        </AutoLexikonText>

        <Card className="my-6 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building className="h-5 w-5 text-primary" />
              Wann LocalBusiness Schema einsetzen?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" /> Einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Unternehmens-Homepage und Standortseiten</li>
                  <li>✅ Branchenspezifische Guides (Zahnarzt, Friseur, etc.)</li>
                  <li>✅ Stadtspezifische Seiten (Hamburg, München, etc.)</li>
                  <li>✅ Kontakt- und Anfahrtsseiten</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4" /> Nicht einsetzen bei
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Generische SEO-Ratgeber ohne Lokalbezug</li>
                  <li>❌ Reine Tool-/Template-Seiten</li>
                  <li>❌ Blog-Startseite oder Kategorieseiten</li>
                  <li>❌ AGB, Datenschutz, Impressum</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <AutoLexikonText>
          <h3>Spezifische Untertypen nutzen</h3>
          <p>
            Verwenden Sie statt dem generischen <code>LocalBusiness</code> immer den <strong>spezifischsten
            Untertyp</strong>:
          </p>
          <ul>
            <li><strong>Zahnärzte:</strong> <code>Dentist</code></li>
            <li><strong>Ärzte:</strong> <code>Physician</code> oder <code>MedicalBusiness</code></li>
            <li><strong>Rechtsanwälte:</strong> <code>LegalService</code> oder <code>Attorney</code></li>
            <li><strong>Restaurants:</strong> <code>Restaurant</code></li>
            <li><strong>Friseure:</strong> <code>HairSalon</code> oder <code>BeautySalon</code></li>
            <li><strong>Immobilienmakler:</strong> <code>RealEstateAgent</code></li>
            <li><strong>Steuerberater:</strong> <code>AccountingService</code></li>
            <li><strong>Handwerker:</strong> <code>HomeAndConstructionBusiness</code></li>
          </ul>
          <h3>Unsere Implementierung</h3>
          <p>
            Ein allgemeines <code>LocalBusiness</code>-Referenz-Schema wird <strong>automatisch</strong> über
            <code>ArticleLayout</code> auf allen Blog-Artikeln eingebunden. Branchenspezifische Untertypen
            (z.B. <code>MedicalBusiness</code> für Ärzte, <code>AccountingService</code> für
            Steuerberater) werden über <code>additionalSchema</code> ergänzt.
          </p>
        </AutoLexikonText>
      </section>

      {/* Entscheidungsmatrix */}
      <section id="entscheidungsmatrix">
        <h2>Entscheidungsmatrix: Welches Schema für welche Seite?</h2>
        <AutoLexikonText>
          <p>
            Diese Matrix zeigt auf einen Blick, welche Schema-Typen für welchen Seitentyp
            eingesetzt werden sollten.
          </p>
        </AutoLexikonText>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border border-border p-3 text-left font-semibold">Seitentyp</th>
                <th className="border border-border p-3 text-center font-semibold">Article</th>
                <th className="border border-border p-3 text-center font-semibold">FAQPage</th>
                <th className="border border-border p-3 text-center font-semibold">HowTo</th>
                <th className="border border-border p-3 text-center font-semibold">LocalBusiness</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Blog-Artikel (allgemein)", article: "✅ Auto", faq: "✅ Wenn FAQ vorhanden", howto: "❌", local: "✅ Auto (Referenz)" },
                { type: "Branchenguide (z.B. Zahnarzt)", article: "✅ Auto", faq: "✅ Empfohlen", howto: "⚡ Optional", local: "✅ Spezifischer Typ" },
                { type: "Stadtguide (z.B. Hamburg)", article: "✅ Auto", faq: "✅ Empfohlen", howto: "❌", local: "✅ Mit Geo-Daten" },
                { type: "Anleitungs-Guide", article: "✅ Auto", faq: "✅ Wenn FAQ vorhanden", howto: "✅ Empfohlen", local: "✅ Auto (Referenz)" },
                { type: "Template/Tool-Seite", article: "✅ Auto", faq: "✅ Wenn FAQ vorhanden", howto: "✅ Empfohlen", local: "✅ Auto (Referenz)" },
                { type: "Troubleshooting-Guide", article: "✅ Auto", faq: "✅ Empfohlen", howto: "⚡ Optional", local: "✅ Auto (Referenz)" },
                { type: "Case Study", article: "✅ Auto", faq: "✅ Wenn FAQ vorhanden", howto: "❌", local: "✅ Auto (Referenz)" },
                { type: "Hub/Übersichtsseite", article: "❌", faq: "❌", howto: "❌", local: "❌" },
                { type: "Landing Page", article: "❌", faq: "⚡ Optional", howto: "❌", local: "✅ Empfohlen" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="border border-border p-3 font-medium">{row.type}</td>
                  <td className="border border-border p-3 text-center">{row.article}</td>
                  <td className="border border-border p-3 text-center">{row.faq}</td>
                  <td className="border border-border p-3 text-center">{row.howto}</td>
                  <td className="border border-border p-3 text-center">{row.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-muted/30 border border-border rounded-lg p-4 my-4 text-sm text-muted-foreground">
          <strong>Legende:</strong> ✅ Auto = wird automatisch generiert | ✅ Empfohlen = manuell hinzufügen |
          ⚡ Optional = nur wenn sinnvoll | ❌ = nicht verwenden
        </div>
      </section>

      {/* Schema-Kombinationen */}
      <section id="kombinationen">
        <h2>Empfohlene Schema-Kombinationen</h2>
        <AutoLexikonText>
          <p>
            Die folgenden Kombinationen haben sich in der Praxis bewährt und werden von Google
            als best practice empfohlen.
          </p>
        </AutoLexikonText>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              icon: BookOpen,
              title: "Standard Blog-Artikel",
              schemas: ["Article", "WebPage", "BreadcrumbList", "LocalBusiness (Ref)"],
              extra: "+ FAQPage wenn FAQ-Sektion vorhanden",
            },
            {
              icon: Target,
              title: "Branchenguide",
              schemas: ["Article", "WebPage", "BreadcrumbList", "FAQPage", "Spezifischer LocalBusiness-Typ"],
              extra: "z.B. Dentist, Restaurant, HairSalon",
            },
            {
              icon: Wrench,
              title: "Anleitung / Template",
              schemas: ["Article", "WebPage", "BreadcrumbList", "HowTo"],
              extra: "+ FAQPage wenn FAQ vorhanden",
            },
            {
              icon: Building,
              title: "Stadtguide",
              schemas: ["Article", "WebPage", "BreadcrumbList", "FAQPage", "LocalBusiness mit Geo"],
              extra: "City-spezifische Geo-Koordinaten",
            },
          ].map((combo, i) => (
            <Card key={i} className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <combo.icon className="h-5 w-5 text-primary" />
                  {combo.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {combo.schemas.map((s, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <FileCode className="h-3 w-3 text-primary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">{combo.extra}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementierungsleitfaden */}
      <section id="implementierung">
        <h2>Implementierungsleitfaden</h2>
        <AutoLexikonText>
          <h3>Schritt 1: Basis-Schemas (automatisch)</h3>
          <p>
            Die folgenden Schemas werden <strong>automatisch</strong> über <code>ArticleLayout</code>
            für jeden Blog-Artikel generiert:
          </p>
          <ul>
            <li><strong>Article Schema</strong> mit Autor, Datum, Bild, Speakable und AI-Felder</li>
            <li><strong>WebPage Schema</strong> mit Seitentyp und Breadcrumb-Referenz</li>
            <li><strong>BreadcrumbList Schema</strong> mit Home → Blog → Artikel</li>
            <li><strong>LocalBusiness Schema</strong> als allgemeine Referenz</li>
          </ul>

          <h3>Schritt 2: FAQ Schema (semi-automatisch)</h3>
          <p>
            Definieren Sie ein <code>faqItems</code>-Array und übergeben Sie es an <code>ArticleLayout</code>.
            Das FAQPage Schema wird automatisch daraus generiert.
          </p>

          <h3>Schritt 3: Spezialisierte Schemas (manuell)</h3>
          <p>
            Für HowTo, spezifische LocalBusiness-Untertypen oder andere Schemas nutzen Sie
            die <code>additionalSchema</code>-Prop. Dieser akzeptiert ein einzelnes Objekt
            oder ein Array von Schema-Objekten.
          </p>

          <h3>Schritt 4: YMYL-Artikel kennzeichnen</h3>
          <p>
            Für medizinische, rechtliche oder finanzielle Inhalte nutzen Sie zusätzlich
            <code>articleType</code> und <code>reviewedBy</code>, um E-E-A-T-Signale zu setzen.
          </p>
        </AutoLexikonText>
      </section>

      {/* Häufige Fehler */}
      <section id="haeufige-fehler">
        <h2>Häufige Schema-Fehler vermeiden</h2>

        <div className="space-y-4 my-6">
          {[
            {
              nr: 1,
              title: "FAQPage ohne sichtbare FAQs",
              desc: "Google verlangt, dass alle Schema-Daten auf der Seite sichtbar sind. Versteckte FAQs führen zu Manual Actions.",
              fix: "faqItems nur übergeben, wenn die Seite einen echten FAQ-Abschnitt hat.",
            },
            {
              nr: 2,
              title: "Doppeltes Schema durch dangerouslySetInnerHTML",
              desc: "Manuelles Einfügen von JSON-LD via Script-Tags neben dem automatischen ArticleLayout-Schema erzeugt Duplikate.",
              fix: "Immer additionalSchema-Prop nutzen, nie dangerouslySetInnerHTML für Schema.",
            },
            {
              nr: 3,
              title: "Generisches LocalBusiness statt Untertyp",
              desc: "Google bevorzugt spezifische Typen. 'LocalBusiness' ist zu allgemein für branchenspezifische Seiten.",
              fix: "Restaurant statt LocalBusiness, Dentist statt LocalBusiness, etc.",
            },
            {
              nr: 4,
              title: "Inkonsistente NAP-Daten",
              desc: "Schema-NAP (Name, Adresse, Phone) weicht von Google Business Profil ab.",
              fix: "Exakt identische Daten in Schema und GBP verwenden.",
            },
            {
              nr: 5,
              title: "HowTo Schema ohne echte Schritte",
              desc: "HowTo Schema auf Seiten anwenden, die keine sequenziellen Schritte enthalten.",
              fix: "Nur einsetzen, wenn der Content eine klare 1-2-3-Abfolge hat.",
            },
          ].map((error) => (
            <div key={error.nr} className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
              <span className="bg-destructive/10 text-destructive font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                {error.nr}
              </span>
              <div>
                <p className="font-semibold text-foreground">{error.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{error.desc}</p>
                <p className="text-sm text-primary mt-2 flex items-center gap-1">
                  <Zap className="h-3 w-3" /> <strong>Fix:</strong> {error.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testing */}
      <section id="testing">
        <h2>Testing & Validierung</h2>
        <AutoLexikonText>
          <h3>Pflicht-Tests vor dem Launch</h3>
          <ul>
            <li>
              <strong>Google Rich Results Test:</strong> Prüft, ob Ihre Schemas Rich Results auslösen können.
              URL: <code>search.google.com/test/rich-results</code>
            </li>
            <li>
              <strong>Schema.org Validator:</strong> Validiert die technische Korrektheit des JSON-LD.
              URL: <code>validator.schema.org</code>
            </li>
            <li>
              <strong>Google Search Console:</strong> Überwacht Schema-Fehler und Rich Result-Status im laufenden Betrieb.
            </li>
          </ul>

          <h3>Checkliste für jede neue Seite</h3>
          <ul>
            <li>☑️ Article Schema: headline, author, datePublished vorhanden?</li>
            <li>☑️ FAQPage Schema: Nur wenn FAQ-Sektion auf der Seite sichtbar ist?</li>
            <li>☑️ HowTo Schema: Enthält die Seite echte nummerierte Schritte?</li>
            <li>☑️ LocalBusiness Schema: Spezifischster Untertyp gewählt?</li>
            <li>☑️ Keine Duplikate: Kein manuelles JSON-LD neben automatischem Schema?</li>
            <li>☑️ NAP-Konsistenz: Schema-Daten stimmen mit GBP überein?</li>
            <li>☑️ Rich Results Test: Alle Tests bestanden?</li>
          </ul>
        </AutoLexikonText>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>Häufige Fragen zur Schema-Strategie</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <HelpfulnessWidget articleSlug="schema-strategie-dokument" />

      <SourcesSection sources={[
        { title: "Google: Structured Data Guidelines", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
        { title: "Schema.org: LocalBusiness", url: "https://schema.org/LocalBusiness" },
        { title: "Google: FAQ Schema Markup", url: "https://developers.google.com/search/docs/appearance/structured-data/faqpage" },
        { title: "Google: HowTo Schema Markup", url: "https://developers.google.com/search/docs/appearance/structured-data/how-to" },
        { title: "Google: Article Schema Markup", url: "https://developers.google.com/search/docs/appearance/structured-data/article" },
      ]} />
    </ArticleLayout>
  );
};

export default SchemaStrategieDokument;
