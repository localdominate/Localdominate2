import { getArticleBySlug } from "@/data/blogArticles";
import { GradientBarChart, ProcessFlow } from "@/components/blog/PillarVisuals";
import { InternalResourceBox } from "@/components/blog/InternalResourceBox";
import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiSearchOptNote from "@/components/blog/AiSearchOptNote";
import LexikonLink from "@/components/blog/LexikonLink";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Code, Smartphone, Zap, Shield, Search, Globe, FileCode, Settings,
  ArrowRight, CheckCircle2, AlertTriangle, Gauge, Brain, Eye, Lock,
  Server, Database, Layers, Monitor, TrendingUp, BookOpen, Link as LinkIcon,
  MapPin, Clock, FileText, BarChart3
} from "lucide-react";

const TechnischesLocalSeoGuide = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("technisches-local-seo-guide", language);

  if (!article) return null;

  const tocItems = [
    { id: "warum-technical-seo", title: "Warum technisches SEO entscheidend ist", level: 2 },
    { id: "localbusiness-schema", title: "LocalBusiness Schema Markup", level: 2 },
    { id: "geo-markup", title: "Geo-Markup & standortbezogene Signale", level: 2 },
    { id: "strukturierte-daten", title: "Strukturierte Daten: Alle Schema-Typen", level: 2 },
    { id: "site-speed", title: "Site Speed & Core Web Vitals", level: 2 },
    { id: "mobile-optimierung", title: "Mobile Optimierung & Mobile-First", level: 2 },
    { id: "interne-verlinkung", title: "Interne Verlinkung fur lokale SEO", level: 2 },
    { id: "indexierung", title: "Indexierungsstrategien", level: 2 },
    { id: "https-sicherheit", title: "HTTPS & Sicherheit", level: 2 },
    { id: "checkliste", title: "Technische Checkliste (40 Punkte)", level: 2 },
    { id: "deep-dive-guides", title: "Alle Deep-Dive-Guides", level: 2 },
    { id: "faq", title: "Haufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "LocalBusiness Schema ist der starkste technische Ranking-Faktor fur lokale Suchergebnisse",
    "Core Web Vitals (LCP <2.5s, INP <200ms, CLS <0.1) sind seit 2021 offizieller Ranking-Faktor",
    "92 % der lokalen Suchen kommen vom Smartphone — Mobile-First ist Pflicht",
    "Interne Verlinkung mit lokalen Ankertexten starkt die geografische Relevanz jeder Unterseite",
    "XML-Sitemaps, robots.txt und Canonical Tags bestimmen, welche Seiten indexiert werden",
    "Geo-Markup (GeoCoordinates, serviceArea) hilft Google, den Einzugsbereich exakt zu verstehen",
  ];

  const faqItems = [
    { question: "Was ist technisches Local SEO?", answer: "Technisches Local SEO umfasst alle technischen Massnahmen, die Suchmaschinen das Crawlen, Indexieren und Verstehen Ihrer lokalen Website erleichtern. Dazu gehoren Schema Markup, Core Web Vitals, Mobile-Optimierung, interne Verlinkung, Indexierungssteuerung und Sicherheit (HTTPS)." },
    { question: "Welches Schema Markup braucht ein lokales Unternehmen?", answer: "Mindestens LocalBusiness (mit Name, Adresse, Telefon, Offnungszeiten) und FAQPage fur haufige Fragen. Zusatzlich empfohlen: AggregateRating fur Bewertungssterne, Product/Service fur Angebote, GeoCoordinates fur den Standort und BreadcrumbList fur die Navigation." },
    { question: "Wie wichtig sind Core Web Vitals fur lokale Rankings?", answer: "Core Web Vitals sind seit 2021 ein offizieller Google-Ranking-Faktor. Da 92 % der lokalen Suchen mobil erfolgen, ist besonders die mobile Performance entscheidend. Seiten mit guten CWV-Werten haben im Durchschnitt 24 % niedrigere Absprungraten." },
    { question: "Wie verbessere ich die Ladezeit meiner lokalen Website?", answer: "Die wichtigsten Massnahmen: Bilder in WebP/AVIF komprimieren, JavaScript und CSS minimieren, Lazy Loading fur Bilder unterhalb des Folds aktivieren, ein CDN nutzen, Server-Response-Zeit optimieren (TTFB <800ms) und Browser-Caching konfigurieren." },
    { question: "Was bedeutet Mobile-First-Index fur lokale Unternehmen?", answer: "Google bewertet und rankt Ihre Website basierend auf der mobilen Version. Das bedeutet: Wenn Ihre mobile Seite langsam ladt, Inhalte fehlen oder nicht responsive ist, verlieren Sie Rankings — auch in der Desktop-Suche." },
    { question: "Wie baue ich eine gute interne Verlinkung fur Local SEO auf?", answer: "Erstellen Sie Standortseiten, die untereinander und mit der Startseite verlinkt sind. Nutzen Sie lokale Ankertexte (z.B. 'Zahnarzt in Munchen Schwabing'). Erstellen Sie eine Hub-Spoke-Struktur mit einer zentralen Serviceseite und spezifischen Unterseiten pro Stadtteil." },
    { question: "Wie stelle ich sicher, dass Google meine Seiten korrekt indexiert?", answer: "Reichen Sie eine XML-Sitemap in der Search Console ein, prufen Sie Ihre robots.txt auf Crawl-Blockaden, setzen Sie Canonical Tags gegen Duplicate Content, nutzen Sie hreflang fur mehrsprachige Seiten und uberwachen Sie den Indexierungsstatus regelmaessig." },
    { question: "Brauche ich HTTPS fur meine lokale Website?", answer: "Ja, HTTPS ist seit 2014 ein Ranking-Faktor und fur E-E-A-T-Signale unerlasslich. Ausserdem warnen Browser vor unsicheren Seiten, was das Nutzervertrauen zerstort. SSL-Zertifikate sind kostenlos uber Let's Encrypt verfugbar." },
  ];

  const sources = [
    { title: "Google: Core Web Vitals & Page Experience", url: "https://developers.google.com/search/docs/appearance/core-web-vitals", type: "article" as const },
    { title: "Schema.org: LocalBusiness Documentation", url: "https://schema.org/LocalBusiness", type: "article" as const },
    { title: "Google Search Central: Structured Data", url: "https://developers.google.com/search/docs/appearance/structured-data", type: "article" as const },
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Google: Mobile-First Indexing Best Practices", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing", type: "article" as const },
  ];

  const technicalArticles = [
    { slug: "localbusiness-schema-implementierung", title: "LocalBusiness Schema implementieren", desc: "JSON-LD Code fur jede Branche, kopierfertig", icon: <Code className="h-5 w-5" />, cat: "Schema" },
    { slug: "schema-markup-local-seo", title: "Schema Markup fur Local SEO", desc: "Alle Schema-Typen fur lokale Unternehmen", icon: <FileCode className="h-5 w-5" />, cat: "Schema" },
    { slug: "review-schema-implementierung", title: "Review Schema implementieren", desc: "AggregateRating & Bewertungssterne", icon: <BarChart3 className="h-5 w-5" />, cat: "Schema" },
    { slug: "core-web-vitals-local-seo", title: "Core Web Vitals fur Local SEO", desc: "LCP, INP & CLS optimieren", icon: <Gauge className="h-5 w-5" />, cat: "Performance" },
    { slug: "mobile-local-seo", title: "Mobile Local SEO", desc: "Mobile-First, AMP & responsive Design", icon: <Smartphone className="h-5 w-5" />, cat: "Mobile" },
    { slug: "nap-konsistenz-local-seo", title: "NAP-Konsistenz", desc: "Name, Adresse, Telefon uberall einheitlich", icon: <MapPin className="h-5 w-5" />, cat: "Grundlagen" },
    { slug: "local-citations-2025", title: "Local Citations 2025", desc: "Branchenverzeichnisse & Eintraege", icon: <Globe className="h-5 w-5" />, cat: "Citations" },
    { slug: "local-seo-audit-checkliste", title: "Local SEO Audit Checkliste", desc: "50+ Punkte fur maximale Sichtbarkeit", icon: <CheckCircle2 className="h-5 w-5" />, cat: "Audit" },
  ];

  return (
    <ArticleLayout
      article={article}
      tocItems={tocItems}
      faqItems={faqItems}
    >
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-3 text-center">
            <Code className="h-6 w-6 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-primary">30+</div>
            <p className="text-xs text-muted-foreground">Code-Beispiele</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-3 text-center">
            <Layers className="h-6 w-6 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">Themencluster</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-3 text-center">
            <CheckCircle2 className="h-6 w-6 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-primary">40</div>
            <p className="text-xs text-muted-foreground">Checklisten-Punkte</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-3 text-center">
            <FileText className="h-6 w-6 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">Deep-Dive-Guides</p>
          </CardContent>
        </Card>
      </div>

      <GradientBarChart
        title="Technische SEO-Faktoren: Einfluss auf lokale Rankings"
        items={[
          { label: "Schema Markup (LocalBusiness)", value: 95 },
          { label: "Mobile Performance (CWV)", value: 88 },
          { label: "HTTPS / Sicherheit", value: 82 },
          { label: "Interne Verlinkung", value: 75 },
          { label: "Crawlability (Sitemap/robots)", value: 70 },
          { label: "Geo-Markup & Hreflang", value: 65 },
          { label: "Structured Data (FAQ, Review)", value: 60 },
        ]}
        unit=" Einfluss"
      />

      <ProcessFlow
        title="Technisches Local SEO: Implementierungs-Reihenfolge"
        steps={[
          { number: 1, title: "HTTPS & Sicherheit", description: "SSL-Zertifikat installieren, Mixed Content beheben, HSTS aktivieren.", timeframe: "Tag 1" },
          { number: 2, title: "Mobile-First Optimierung", description: "Responsive Design, Touch-Targets, Viewport, Mobile CWV optimieren.", timeframe: "Tag 1–3" },
          { number: 3, title: "Schema Markup", description: "LocalBusiness JSON-LD, FAQPage, AggregateRating implementieren.", timeframe: "Tag 3–5" },
          { number: 4, title: "Indexierungssteuerung", description: "XML-Sitemap, robots.txt, Canonical Tags, Hreflang einrichten.", timeframe: "Tag 5–7" },
          { number: 5, title: "Core Web Vitals", description: "LCP < 2.5s, INP < 200ms, CLS < 0.1 — Bilder, JS, CSS optimieren.", timeframe: "Woche 2" },
          { number: 6, title: "Interne Verlinkung", description: "Hub-Spoke-Struktur, lokale Ankertexte, Breadcrumbs implementieren.", timeframe: "Woche 2–3" },
          { number: 7, title: "Monitoring & Testing", description: "Search Console, PageSpeed Insights, Schema-Validierung einrichten.", timeframe: "Laufend" },
        ]}
      />

      {/* Warum Technical SEO */}
      <section id="warum-technical-seo" data-ai-summary="true">
        <h2>Warum technisches SEO fur lokale Unternehmen entscheidend ist</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Technisches Local SEO</strong> ist die unsichtbare Grundlage jedes lokalen Rankings. Wahrend Content und Backlinks die sichtbaren Saulen sind, entscheidet die technische Infrastruktur daruber, ob Google Ihre Website uberhaupt korrekt crawlen, indexieren und verstehen kann. Fur lokale Unternehmen ist das besonders kritisch: 92 % der lokalen Suchen kommen vom Smartphone, und fehlendes Schema Markup bedeutet fehlende Rich Snippets im <LexikonLink term="Local Pack" />.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Ranking-Vorteile</h3>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Core Web Vitals = offizieller Ranking-Faktor</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Schema Markup = Rich Snippets mit Sternen</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Mobile-First-Index priorisiert schnelle Seiten</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Interne Links starken Standortseiten-Relevanz</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold">Kosten bei Vernachlassigung</h3>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> 53 % verlassen Seiten mit &gt;3 Sek. Ladezeit</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> 1 Sek. langsamer = 7 % weniger Conversions</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Fehlende Indexierung = komplette Unsichtbarkeit</li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Ohne Schema = keine Sterne in den SERPs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Technischer Faktor</TableHead>
              <TableHead className="font-bold">Ranking-Einfluss</TableHead>
              <TableHead className="font-bold">Aufwand</TableHead>
              <TableHead className="font-bold">Prioritat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["LocalBusiness Schema", "Hoch", "Mittel", "🔴 Kritisch"],
              ["Core Web Vitals", "Hoch", "Mittel-Hoch", "🔴 Kritisch"],
              ["Mobile-Optimierung", "Sehr hoch", "Mittel", "🔴 Kritisch"],
              ["HTTPS / SSL", "Mittel", "Niedrig", "🔴 Kritisch"],
              ["XML-Sitemap", "Mittel", "Niedrig", "🟡 Hoch"],
              ["Interne Verlinkung", "Mittel-Hoch", "Mittel", "🟡 Hoch"],
              ["Canonical Tags", "Mittel", "Niedrig", "🟡 Hoch"],
              ["Geo-Markup", "Mittel", "Niedrig", "🟢 Empfohlen"],
              ["hreflang (DACH)", "Mittel", "Mittel", "🟢 Empfohlen"],
              ["Speakable / AI-Markup", "Steigend", "Niedrig", "🟢 Empfohlen"],
            ].map(([faktor, einfluss, aufwand, prio], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{faktor}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{einfluss}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{aufwand}</TableCell>
                <TableCell className="text-sm">{prio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <BlogCTAABTest position="intro" articleSlug="technisches-local-seo-guide" />

      {/* LocalBusiness Schema */}
      <section id="localbusiness-schema" data-ai-summary="true">
        <h2>LocalBusiness Schema Markup: Das Fundament</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>LocalBusiness Schema</strong> ist der wichtigste strukturierte Datentyp fur lokale Unternehmen. Es teilt Google prazise mit, wer Sie sind, wo Sie sind, wann Sie geoffnet haben und was Sie anbieten. Ohne dieses Markup entgehen Ihnen Rich Snippets mit Sternen, Offnungszeiten und Kontaktinfos in den Suchergebnissen.
        </p>

        <h3>Minimales LocalBusiness Schema (Pflicht)</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Backerei Schmidt",
  "image": "https://example.com/images/baeckerei-schmidt.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstrasse 42",
    "addressLocality": "Munchen",
    "addressRegion": "Bayern",
    "postalCode": "80331",
    "addressCountry": "DE"
  },
  "telephone": "+49-89-12345678",
  "url": "https://www.baeckerei-schmidt.de",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday",
                     "Thursday","Friday"],
      "opens": "06:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "07:00",
      "closes": "14:00"
    }
  ]
}
</script>`}
        </pre>

        <h3>Erweitertes Schema: Bewertungen, Preisspanne & Zahlungsmethoden</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`{
  "@type": "Restaurant",
  "name": "Trattoria Bella",
  "servesCuisine": "Italian",
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "284"
  },
  "paymentAccepted": "Cash, Credit Card, EC-Karte",
  "currenciesAccepted": "EUR",
  "menu": "https://trattoria-bella.de/speisekarte"
}`}
        </pre>

        <h3>Schema-Subtypen nach Branche</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Branche</TableHead>
              <TableHead className="font-bold">Schema-Typ</TableHead>
              <TableHead className="font-bold">Zusatzliche Properties</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Restaurant / Cafe", "Restaurant", "servesCuisine, menu, acceptsReservations"],
              ["Arzt / Zahnarzt", "MedicalBusiness", "medicalSpecialty, healthPlanNetworkId"],
              ["Anwalt / Steuerberater", "LegalService / AccountingService", "areaServed, knowsAbout"],
              ["Handwerker", "HomeAndConstructionBusiness", "areaServed, knowsAbout"],
              ["Friseur / Beauty", "BeautySalon / HairSalon", "priceRange, paymentAccepted"],
              ["Hotel / Ferienwohnung", "Hotel / LodgingBusiness", "starRating, checkinTime, numberOfRooms"],
              ["Fitnessstudio", "ExerciseGym / SportsActivityLocation", "openingHoursSpecification"],
              ["Einzelhandel", "Store", "paymentAccepted, currenciesAccepted"],
            ].map(([branche, typ, props], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{branche}</TableCell>
                <TableCell><code className="text-xs bg-muted px-1.5 py-0.5 rounded">{typ}</code></TableCell>
                <TableCell className="text-muted-foreground text-sm">{props}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Komplette Implementierung mit branchenspezifischen Vorlagen: <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">LocalBusiness Schema Implementierung Guide</Link>. Alle Schema-Typen im Uberblick: <Link to="/blog/schema-markup-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Schema Markup fur Local SEO</Link>.
        </p>
      </section>

      {/* Geo-Markup */}
      <section id="geo-markup" data-ai-summary="true">
        <h2>Geo-Markup & standortbezogene Signale</h2>
        <p data-featured-snippet="true">
          <strong>Geo-Markup</strong> hilft Google, den exakten Standort und Einzugsbereich Ihres Unternehmens zu verstehen. Das ist besonders wichtig fur „in der Nahe"-Suchen und das <LexikonLink term="Local Pack" />-Ranking.
        </p>

        <h3>GeoCoordinates im LocalBusiness Schema</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`{
  "@type": "LocalBusiness",
  "name": "Zahnarztpraxis Dr. Muller",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1351,
    "longitude": 11.5820
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Munchen"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Schwabing-West"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "geoRadius": "15000"
  }
}`}
        </pre>

        <h3>Weitere Geo-Signale</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Signal</TableHead>
              <TableHead className="font-bold">Umsetzung</TableHead>
              <TableHead className="font-bold">Wirkung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["GeoCoordinates", "JSON-LD im LocalBusiness Schema", "Exakte Standort-Zuordnung"],
              ["areaServed", "Stadte/Stadtteile als Schema-Property", "Einzugsgebiet fur Service-Businesses"],
              ["serviceArea + GeoCircle", "Radius um den Standort", "Fur mobile Dienste (Handwerker, Lieferdienst)"],
              ["Google Maps Embed", "iframe auf Kontaktseite", "Bestatigt den Standort visuell"],
              ["Standort in Title & H1", "z.B. 'Zahnarzt Munchen Schwabing'", "On-Page Geo-Signal"],
              ["Lokale Landingpages", "Pro Stadtteil/Stadt eine Seite", "Starkstes organisches Geo-Signal"],
              ["hreflang (DACH)", "de-DE, de-AT, de-CH Tags", "Landerspezifische Auslieferung"],
            ].map(([signal, umsetzung, wirkung], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{signal}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{umsetzung}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{wirkung}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">💡 DACH-Tipp: hreflang fur mehrsprachige Regionen</p>
          <pre className="text-sm bg-muted/50 rounded p-3 overflow-x-auto">
{`<link rel="alternate" hreflang="de-DE" href="https://example.de/zahnarzt-muenchen" />
<link rel="alternate" hreflang="de-AT" href="https://example.at/zahnarzt-wien" />
<link rel="alternate" hreflang="de-CH" href="https://example.ch/zahnarzt-zuerich" />
<link rel="alternate" hreflang="x-default" href="https://example.de/zahnarzt-muenchen" />`}
          </pre>
        </div>
      </section>

      {/* Strukturierte Daten */}
      <section id="strukturierte-daten">
        <h2>Strukturierte Daten: Alle Schema-Typen fur lokale Unternehmen</h2>
        <p>
          Neben LocalBusiness gibt es weitere <LexikonLink term="Schema Markup" />-Typen, die lokale Sichtbarkeit steigern:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Schema-Typ</TableHead>
              <TableHead className="font-bold">Rich-Snippet-Effekt</TableHead>
              <TableHead className="font-bold">Prioritat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["LocalBusiness", "Offnungszeiten, Adresse, Telefon in SERPs", "🔴 Pflicht"],
              ["FAQPage", "FAQ-Akkordeon direkt in Google", "🔴 Pflicht"],
              ["AggregateRating", "Sterne-Bewertung in den SERPs", "🔴 Pflicht"],
              ["BreadcrumbList", "Brotkrumel-Navigation in Google", "🟡 Empfohlen"],
              ["Product / Service", "Preise, Verfugbarkeit in SERPs", "🟡 Empfohlen"],
              ["HowTo", "Schritt-fur-Schritt-Anleitungen", "🟡 Empfohlen"],
              ["Event", "Veranstaltungen in Google Events", "🟢 Optional"],
              ["Speakable", "AI-Suchmaschinen-Zitate", "🟢 Zukunftssicher"],
            ].map(([typ, effekt, prio], i) => (
              <TableRow key={i}>
                <TableCell><code className="text-xs bg-muted px-1.5 py-0.5 rounded font-medium">{typ}</code></TableCell>
                <TableCell className="text-muted-foreground text-sm">{effekt}</TableCell>
                <TableCell className="text-sm">{prio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h3>FAQPage Schema — Beispiel</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet eine professionelle Zahnreinigung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine professionelle Zahnreinigung kostet in unserer
                 Praxis zwischen 80 und 120 Euro, je nach Aufwand."
      }
    }
  ]
}`}
        </pre>

        <p>
          Bewertungs-Schema im Detail: <Link to="/blog/review-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Review Schema Implementierung</Link>.
        </p>
      </section>

      <BlogCTAABTest position="middle" articleSlug="technisches-local-seo-guide" />

      {/* Site Speed */}
      <section id="site-speed" data-ai-summary="true">
        <h2>Site Speed & Core Web Vitals</h2>
        <p>
          <LexikonLink term="Core Web Vitals" /> messen drei Aspekte der Nutzererfahrung und sind seit 2021 ein offizieller Google-Ranking-Faktor:
        </p>

        <div className="grid grid-cols-3 gap-3 my-6">
          <Card className="text-center p-4 border-primary/20">
            <div className="text-2xl font-bold text-primary">&lt;2.5s</div>
            <p className="text-xs font-medium mt-1">LCP</p>
            <p className="text-xs text-muted-foreground">Largest Contentful Paint</p>
          </Card>
          <Card className="text-center p-4 border-primary/20">
            <div className="text-2xl font-bold text-primary">&lt;200ms</div>
            <p className="text-xs font-medium mt-1">INP</p>
            <p className="text-xs text-muted-foreground">Interaction to Next Paint</p>
          </Card>
          <Card className="text-center p-4 border-primary/20">
            <div className="text-2xl font-bold text-primary">&lt;0.1</div>
            <p className="text-xs font-medium mt-1">CLS</p>
            <p className="text-xs text-muted-foreground">Cumulative Layout Shift</p>
          </Card>
        </div>

        <h3>Speed-Optimierung: Die 10 wichtigsten Massnahmen</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">#</TableHead>
              <TableHead className="font-bold">Massnahme</TableHead>
              <TableHead className="font-bold">Wirkung auf</TableHead>
              <TableHead className="font-bold">Aufwand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["1", "Bilder in WebP/AVIF komprimieren", "LCP", "Niedrig"],
              ["2", "Lazy Loading fur Below-the-Fold-Bilder", "LCP", "Niedrig"],
              ["3", "CSS/JS minifizieren & bundlen", "LCP, INP", "Mittel"],
              ["4", "CDN (Content Delivery Network) nutzen", "LCP, TTFB", "Mittel"],
              ["5", "Server-Response optimieren (TTFB <800ms)", "LCP", "Hoch"],
              ["6", "Browser-Caching konfigurieren", "Wiederkehrende Besucher", "Niedrig"],
              ["7", "Kritisches CSS inline laden", "LCP", "Mittel"],
              ["8", "JavaScript deferred/async laden", "INP", "Mittel"],
              ["9", "Bild-Dimensionen explizit angeben", "CLS", "Niedrig"],
              ["10", "Schriften lokal hosten + font-display: swap", "CLS, LCP", "Niedrig"],
            ].map(([nr, mass, wirkung, aufwand], i) => (
              <TableRow key={i}>
                <TableCell className="font-bold text-primary">{nr}</TableCell>
                <TableCell className="font-medium">{mass}</TableCell>
                <TableCell><Badge variant="secondary" className="text-xs">{wirkung}</Badge></TableCell>
                <TableCell className="text-muted-foreground text-sm">{aufwand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Vollstandiger Deep-Dive: <Link to="/blog/core-web-vitals-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Core Web Vitals fur Local SEO</Link>.
        </p>
      </section>

      {/* Mobile */}
      <section id="mobile-optimierung" data-ai-summary="true">
        <h2>Mobile Optimierung & Mobile-First-Index</h2>
        <p data-featured-snippet="true">
          Google bewertet und rankt Ihre Website basierend auf der <strong>mobilen Version</strong> (Mobile-First-Index). Da 92 % der lokalen Suchen mobil erfolgen, ist perfekte mobile Performance keine Option, sondern Pflicht.
        </p>

        <h3>Mobile-Checkliste fur lokale Websites</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { icon: Smartphone, title: "Responsive Design", desc: "Alle Inhalte auf jedem Bildschirm optimal dargestellt. Viewport-Meta-Tag gesetzt." },
            { icon: Zap, title: "Schnelle mobile Ladezeit", desc: "Unter 3 Sekunden auf 4G. Bilder komprimiert, JS minimiert." },
            { icon: MapPin, title: "Click-to-Call & Maps", desc: "Telefonnummer als klickbarer Link, Google Maps Embed fur Wegbeschreibung." },
            { icon: Eye, title: "Lesbare Schriftgrosse", desc: "Minimum 16px fur Fliesstext, 48px Mindestgrosse fur Touch-Targets." },
          ].map((item, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3>Mobile vs. Desktop: Unterschiede bei lokaler Suche</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold text-center">Mobile</TableHead>
              <TableHead className="font-bold text-center">Desktop</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Anteil lokaler Suchen", "92 %", "8 %"],
              ["Suchintention", "Sofortige Aktion", "Recherche / Vergleich"],
              ["Click-to-Call nutzbar", "Ja", "Nein"],
              ["Maps-Navigation direkt", "Ja", "Nur uber Link"],
              ["Ladezeit-Toleranz", "<3 Sekunden", "<5 Sekunden"],
              ["Konversionsweg", "Anruf > Besuch", "Formular > E-Mail"],
            ].map(([aspekt, mobile, desktop], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{aspekt}</TableCell>
                <TableCell className="text-center font-semibold text-primary">{mobile}</TableCell>
                <TableCell className="text-center text-muted-foreground">{desktop}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Vollstandiger Guide: <Link to="/blog/mobile-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Mobile Local SEO Optimierung</Link>.
        </p>
      </section>

      {/* Interne Verlinkung */}
      <section id="interne-verlinkung" data-ai-summary="true">
        <h2>Interne Verlinkung fur lokale SEO</h2>
        <p data-featured-snippet="true">
          <strong>Interne Verlinkung</strong> ist einer der am meisten unterschatzten lokalen Ranking-Faktoren. Durch strategische interne Links verteilen Sie Link-Equity auf Standortseiten, starken die thematische Relevanz und helfen Google, die Seitenstruktur zu verstehen.
        </p>

        <h3>Hub-Spoke-Modell fur lokale Websites</h3>
        <div className="bg-muted/50 rounded-xl p-6 my-6">
          <div className="text-center space-y-4">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-6 py-3">
              <p className="font-bold text-primary">🏠 Startseite / Hauptservice</p>
              <p className="text-xs text-muted-foreground">"Zahnarzt Munchen"</p>
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-primary rotate-90" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Schwabing", "Maxvorstadt", "Sendling", "Bogenhausen"].map((stadtteil, i) => (
                <div key={i} className="bg-accent/30 border border-accent/50 rounded-lg px-3 py-2 text-center">
                  <p className="font-medium text-sm">📍 {stadtteil}</p>
                  <p className="text-xs text-muted-foreground">Standortseite</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-5 w-5 text-primary rotate-90" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Zahnreinigung", "Implantate", "Bleaching"].map((service, i) => (
                <div key={i} className="bg-secondary/50 border border-secondary rounded-lg px-3 py-2 text-center">
                  <p className="font-medium text-sm">{service}</p>
                  <p className="text-xs text-muted-foreground">Service-Seite</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3>Best Practices fur interne Links</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Lokale Ankertexte verwenden:</strong> "Zahnarzt in Munchen Schwabing" statt "hier klicken"</li>
          <li><strong>Breadcrumb-Navigation:</strong> Startseite → Stadt → Stadtteil → Service</li>
          <li><strong>Kontextrelevante Links im Content:</strong> Naturlich in Fliesstext eingebaut</li>
          <li><strong>Footer-Links zu Standortseiten:</strong> Alle Stadtteile/Filialen verlinken</li>
          <li><strong>Silo-Struktur:</strong> Verwandte Themen und Standorte miteinander vernetzen</li>
          <li><strong>Maximal 100 interne Links pro Seite:</strong> Fokus auf die wichtigsten Seiten</li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">💡 Praxis-Tipp: BreadcrumbList Schema</p>
          <pre className="text-sm bg-muted/50 rounded p-3 overflow-x-auto">
{`{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1,
      "name": "Startseite", "item": "https://example.de" },
    { "@type": "ListItem", "position": 2,
      "name": "Zahnarzt Munchen", "item": "https://example.de/zahnarzt-muenchen" },
    { "@type": "ListItem", "position": 3,
      "name": "Schwabing", "item": "https://example.de/zahnarzt-muenchen-schwabing" }
  ]
}`}
          </pre>
        </div>
      </section>

      {/* Indexierung */}
      <section id="indexierung" data-ai-summary="true">
        <h2>Indexierungsstrategien fur lokale Websites</h2>
        <p data-featured-snippet="true">
          <strong>Indexierungssteuerung</strong> bestimmt, welche Seiten Google in den Index aufnimmt und in den Suchergebnissen anzeigt. Fur lokale Unternehmen ist das besonders wichtig bei Standortseiten, Duplicate Content und mehrsprachigen Seiten im DACH-Raum.
        </p>

        <h3>XML-Sitemap</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://example.de/zahnarzt-muenchen</loc>
    <lastmod>2026-03-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de-AT"
                href="https://example.at/zahnarzt-wien" />
  </url>
</urlset>`}
        </pre>

        <h3>robots.txt — Best Practice</h3>
        <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /checkout/
Disallow: /danke/
Disallow: /api/

Sitemap: https://example.de/sitemap.xml`}
        </pre>

        <h3>Canonical Tags & Duplicate Content</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Problem</TableHead>
              <TableHead className="font-bold">Losung</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Gleicher Inhalt mit/ohne www", "301-Redirect + Canonical", "www.example.de → example.de"],
              ["HTTP + HTTPS parallel", "301-Redirect auf HTTPS", "http:// → https://"],
              ["URL-Parameter (Filter, Sortierung)", "Canonical auf Hauptseite", "?sort=price → Canonical ohne Parameter"],
              ["Ahnliche Standortseiten", "Einzigartigen lokalen Content erstellen", "Munchen ≠ Augsburg ≠ Nurnberg"],
              ["Paginated Inhalte", "rel=next/prev + Canonical", "Seite 1 = kanonisch"],
              ["Mehrsprachig (DACH)", "hreflang Tags", "de-DE, de-AT, de-CH"],
            ].map(([problem, loesung, beispiel], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{problem}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{loesung}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{beispiel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">⚠️ Haufiger Fehler: Standortseiten ohne einzigartigen Content</p>
          <p className="text-muted-foreground text-sm">
            Viele lokale Unternehmen erstellen Standortseiten, die sich nur in der Stadt-Nennung unterscheiden. Google erkennt das als Thin Content / Duplicate Content und indexiert solche Seiten schlecht oder gar nicht. <strong>Jede Standortseite braucht einzigartigen, lokal relevanten Content</strong> (lokale Referenzen, Teamfotos, Anfahrtsbeschreibung, lokale Bewertungen).
          </p>
        </div>
      </section>

      {/* HTTPS */}
      <section id="https-sicherheit">
        <h2>HTTPS & Sicherheit</h2>
        <p>
          HTTPS ist seit 2014 ein Google-Ranking-Faktor und fur <LexikonLink term="E-E-A-T" />-Signale unerlasslich:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>SSL-Zertifikat:</strong> Kostenlos uber Let's Encrypt, bei jedem Hoster verfugbar</li>
          <li><strong>301-Redirect:</strong> Alle HTTP-URLs auf HTTPS umleiten</li>
          <li><strong>Mixed Content vermeiden:</strong> Keine HTTP-Ressourcen (Bilder, Scripts) auf HTTPS-Seiten</li>
          <li><strong>HSTS-Header:</strong> Erzwingt HTTPS und verhindert Downgrade-Angriffe</li>
          <li><strong>Impressum & Datenschutz:</strong> Pflicht im DACH-Raum, starkes Vertrauenssignal</li>
        </ul>
      </section>

      <ArticleCTA variant="box" />

      {/* Checkliste */}
      <section id="checkliste" data-ai-summary="true">
        <h2>Technische SEO-Checkliste (40 Punkte)</h2>

        {[
          { cat: "Crawling & Indexierung", icon: Search, items: [
            "XML-Sitemap vorhanden & in Search Console eingereicht",
            "Robots.txt korrekt konfiguriert (keine wichtigen Seiten blockiert)",
            "Canonical Tags auf allen Seiten",
            "Keine verwaisten Seiten (Orphan Pages)",
            "hreflang fur mehrsprachige Seiten (DACH)",
            "Keine Soft-404-Fehler",
            "Indexierungsstatus in Search Console regelmaessig prufen",
            "Broken Links identifizieren und beheben",
          ]},
          { cat: "Strukturierte Daten", icon: Code, items: [
            "LocalBusiness Schema mit vollstandigen Geschaftsdaten",
            "GeoCoordinates im Schema",
            "FAQPage Schema auf relevanten Seiten",
            "AggregateRating / Review Schema",
            "BreadcrumbList Schema",
            "Schema-Validierung mit Google Rich Results Test",
            "Speakable Properties fur AI-Suchmaschinen",
            "Keine Schema-Fehler in der Search Console",
          ]},
          { cat: "Performance & Core Web Vitals", icon: Gauge, items: [
            "LCP unter 2,5 Sekunden (mobil)",
            "INP unter 200ms",
            "CLS unter 0,1",
            "TTFB unter 800ms",
            "Bilder in WebP/AVIF mit Lazy Loading",
            "CSS/JS minimiert und gebundelt",
            "Schriften lokal gehostet mit font-display: swap",
            "CDN fur statische Ressourcen",
          ]},
          { cat: "Mobile & UX", icon: Smartphone, items: [
            "Responsive Design auf allen Geraten",
            "Viewport Meta-Tag korrekt gesetzt",
            "Touch-Targets mindestens 48x48px",
            "Click-to-Call fur Telefonnummern",
            "Google Maps Embed auf Kontaktseite",
            "Schriftgrosse mindestens 16px",
            "Kein horizontales Scrollen",
            "Mobile Ladezeit unter 3 Sekunden",
          ]},
          { cat: "Sicherheit & Vertrauen", icon: Shield, items: [
            "HTTPS auf allen Seiten (SSL-Zertifikat aktiv)",
            "Kein Mixed Content",
            "301-Redirect von HTTP auf HTTPS",
            "Impressum & Datenschutzerklarung vorhanden",
            "Cookie-Banner DSGVO-konform",
            "HSTS-Header aktiviert",
            "Regelmaessige Sicherheits-Updates",
            "Backup-Strategie vorhanden",
          ]},
        ].map((section, i) => (
          <Card key={i} className="mb-4 border border-border/50">
            <CardContent className="p-5">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.cat}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        <p>
          Komplettes Audit: <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Audit Checkliste</Link>.
        </p>
      </section>

      <BlogCTAABTest position="end" articleSlug="technisches-local-seo-guide" />

      {/* Deep-Dive-Guides */}
      <section id="deep-dive-guides">
        <h2>Alle Deep-Dive-Guides im Uberblick</h2>
        <p className="text-muted-foreground mb-6">
          Jedes Thema wird in einem eigenen Artikel detailliert behandelt:
        </p>

        <div className="grid md:grid-cols-2 gap-3 mb-8">
          {technicalArticles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="block group">
              <Card className="hover:shadow-md transition-all group-hover:border-primary/30 h-full">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="text-primary shrink-0">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <Badge variant="secondary" className="text-xs">{a.cat}</Badge>
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{a.title}</h4>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <Link to="/blog/technisches-seo-hub" className="block">
            <Card className="hover:shadow-md transition-shadow border-primary/20 bg-primary/5">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold text-sm">Technisches SEO Hub</h4>
                  <p className="text-xs text-muted-foreground">Alle technischen Guides auf einer Seite</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/ultimate-guide-local-seo" className="block">
            <Card className="hover:shadow-md transition-shadow border-primary/20 bg-primary/5">
              <CardContent className="p-4 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold text-sm">Ultimate Guide Local SEO</h4>
                  <p className="text-xs text-muted-foreground">Die Gesamtstrategie fur lokale Sichtbarkeit</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <InternalResourceBox
        title="⚙️ Technische Ressourcen"
        variant="grid"
        resources={[
          { label: "Schema Markup Guide", href: "/blog/schema-markup-local-seo", type: "guide", description: "Alle Schema-Typen" },
          { label: "Core Web Vitals optimieren", href: "/blog/core-web-vitals-local-seo", type: "guide", description: "LCP, INP, CLS" },
          { label: "Mobile-First Local SEO", href: "/blog/mobile-first-local-seo", type: "guide", description: "Mobile Optimierung" },
          { label: "Technisches SEO Hub", href: "/blog/technisches-seo-hub", type: "hub", description: "Alle technischen Guides" },
          { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste", type: "tool", description: "Technischen Status prüfen" },
          { label: "AI-Suche Guide", href: "/blog/ai-suche-lokale-unternehmen", type: "pillar", description: "Schema für AI" },
        ]}
      />

      <AiSearchOptNote articleSlug="technisches-local-seo-guide" />

      <HelpfulnessWidget articleSlug="technisches-local-seo-guide" />

      {/* FAQ */}
      <section id="faq">
        <h2>Haufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default TechnischesLocalSeoGuide;
