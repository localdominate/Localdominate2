import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  CheckCircle2, Building2, Globe, Smartphone, Code, Star, LinkIcon,
  FileText, Search, Shield, MapPin, BarChart3, Users, Megaphone,
  Clock, Target, Zap, Eye, Brain
} from "lucide-react";

const LocalSeoChecklisteKomplett = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-checkliste-komplett", language)!;

  const tocItems = [
    { id: "ueberblick", title: "Uberblick: Alle 8 Bereiche", level: 2 },
    { id: "gbp-setup", title: "Phase 1: Google Business Profil", level: 2 },
    { id: "website-grundlagen", title: "Phase 2: Website-Grundlagen", level: 2 },
    { id: "technisches-seo", title: "Phase 3: Technisches SEO", level: 2 },
    { id: "content-onpage", title: "Phase 4: Content & On-Page SEO", level: 2 },
    { id: "citations-nap", title: "Phase 5: Citations & NAP-Konsistenz", level: 2 },
    { id: "bewertungen", title: "Phase 6: Bewertungen & Reputation", level: 2 },
    { id: "linkbuilding", title: "Phase 7: Lokales Linkbuilding", level: 2 },
    { id: "tracking-reporting", title: "Phase 8: Tracking & Reporting", level: 2 },
    { id: "zeitplan", title: "Der 90-Tage-Implementierungsplan", level: 2 },
    { id: "branchenspezifisch", title: "Branchenspezifische Prioritaten", level: 2 },
    { id: "faq", title: "Haufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Die Checkliste umfasst 80+ Punkte in 8 Phasen — von GBP-Setup bis Reporting",
    "Phase 1 (Google Business Profil) liefert die schnellsten sichtbaren Ergebnisse",
    "NAP-Konsistenz (Name, Adresse, Telefon) ist das Fundament aller lokalen Rankings",
    "Technisches SEO und Schema Markup unterscheiden Top-3 von Top-10 Rankings",
    "Regelmaessige Audits (quartalsweise) sichern langfristigen Ranking-Erfolg",
    "Die Prioritaten variieren je nach Branche — Gastro braucht anderes als Handwerk",
  ];

  const faqItems = [
    { question: "Wie lange dauert es, alle Punkte der Checkliste umzusetzen?", answer: "Mit dem 90-Tage-Plan schaffen die meisten KMU die kritischen Punkte in 4 Wochen und den Grossteil in 3 Monaten. Manche Bereiche wie Linkbuilding und Bewertungsaufbau sind Daueraufgaben, die laufend gepflegt werden." },
    { question: "Welche Punkte sind am wichtigsten, wenn ich wenig Zeit habe?", answer: "Fokussiere auf die 🔴-Punkte: Google Business Profil vollstandig einrichten, NAP-Konsistenz sicherstellen, LocalBusiness Schema implementieren, mobile Website-Performance optimieren und die ersten 5 Google-Bewertungen sammeln." },
    { question: "Brauche ich alle Punkte fur ein gutes lokales Ranking?", answer: "Nein. Die Top-3-Ergebnisse im Local Pack haben typischerweise 60-70 % der Punkte umgesetzt. Aber: je mehr Punkte, desto stabiler und wettbewerbsfester dein Ranking. In umkampften Markten zahlt jeder Punkt." },
    { question: "Wie oft sollte ich die Checkliste durchgehen?", answer: "Fuehre quartalsweise ein vollstandiges Audit durch. GBP-Daten und Bewertungen sollten monatlich geprueft werden. Technische Checks (Core Web Vitals, Broken Links) am besten monatlich automatisiert." },
    { question: "Kann ich die Checkliste als PDF herunterladen?", answer: "Nutze unsere interaktive Audit-Checkliste unter /blog/local-seo-audit-checkliste — dort kannst du Punkte abhaken und deinen Fortschritt speichern. Alternativ kannst du diese Seite als PDF drucken (Strg+P)." },
    { question: "Was unterscheidet diese Checkliste von der Audit-Checkliste?", answer: "Die Audit-Checkliste prueft den Ist-Zustand (Was fehlt?). Diese Implementierungs-Checkliste ist ein Schritt-fur-Schritt-Aktionsplan (Was tun, in welcher Reihenfolge?). Idealerweise nutzt du beide zusammen." },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Google: Business Profile Help Center", url: "https://support.google.com/business/", type: "article" as const },
    { title: "BrightLocal: Local Consumer Review Survey 2024", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study" as const },
    { title: "Moz: Local SEO Checklist", url: "https://moz.com/learn/seo/local", type: "article" as const },
  ];

  const CheckItem = ({ children, priority = "hoch" }: { children: React.ReactNode; priority?: "kritisch" | "hoch" | "empfohlen" }) => (
    <li className="flex items-start gap-2 text-sm">
      <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${
        priority === "kritisch" ? "text-destructive" :
        priority === "hoch" ? "text-primary" :
        "text-muted-foreground"
      }`} />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: CheckCircle2, num: "80+", label: "Checklisten-Punkte" },
          { icon: Target, num: "8", label: "Phasen" },
          { icon: Clock, num: "90", label: "Tage Aktionsplan" },
          { icon: BarChart3, num: "12+", label: "Verlinkte Guides" },
        ].map((s, i) => (
          <Card key={i} className="border-primary/20 bg-primary/5">
            <CardContent className="p-3 text-center">
              <s.icon className="h-6 w-6 mx-auto mb-1 text-primary" />
              <div className="text-2xl font-bold text-primary">{s.num}</div>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ueberblick */}
      <section id="ueberblick" data-ai-summary="true">
        <h2>Uberblick: Alle 8 Bereiche der Local SEO Checkliste</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Die vollstandige Local SEO Checkliste</strong> umfasst 80+ Massnahmen in 8 Phasen: Google Business Profil, Website-Grundlagen, Technisches SEO, Content & On-Page, Citations & NAP, Bewertungen, Linkbuilding und Tracking. Jede Phase baut auf der vorherigen auf — beginne mit Phase 1 und arbeite dich systematisch durch.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Phase</TableHead>
              <TableHead className="font-bold">Bereich</TableHead>
              <TableHead className="font-bold">Punkte</TableHead>
              <TableHead className="font-bold">Zeitrahmen</TableHead>
              <TableHead className="font-bold">Wirkung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["1", "Google Business Profil", "12", "Woche 1", "Sofort sichtbar"],
              ["2", "Website-Grundlagen", "10", "Woche 1-2", "Hoch"],
              ["3", "Technisches SEO", "12", "Woche 2-3", "Mittel-Hoch"],
              ["4", "Content & On-Page", "10", "Woche 3-4", "Hoch"],
              ["5", "Citations & NAP", "10", "Woche 4-6", "Hoch"],
              ["6", "Bewertungen", "8", "Laufend", "Sehr hoch"],
              ["7", "Linkbuilding", "10", "Woche 6-12", "Hoch (langfristig)"],
              ["8", "Tracking & Reporting", "8", "Einmalig + laufend", "Grundlage"],
            ].map(([phase, bereich, punkte, zeit, wirkung], i) => (
              <TableRow key={i}>
                <TableCell className="font-bold text-primary">{phase}</TableCell>
                <TableCell className="font-medium">{bereich}</TableCell>
                <TableCell className="text-center">{punkte}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{zeit}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    wirkung === "Sofort sichtbar" || wirkung === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    wirkung === "Hoch" || wirkung === "Hoch (langfristig)" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>{wirkung}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex flex-wrap gap-2 my-4">
          <Badge variant="destructive" className="text-xs">🔴 Kritisch = Muss sofort umgesetzt werden</Badge>
          <Badge variant="default" className="text-xs">🟡 Hoch = Innerhalb 4 Wochen</Badge>
          <Badge variant="secondary" className="text-xs">🟢 Empfohlen = Nice-to-have</Badge>
        </div>
      </section>

      {/* Phase 1: GBP */}
      <section id="gbp-setup" data-ai-summary="true">
        <h2>Phase 1: Google Business Profil einrichten & optimieren</h2>
        <p>
          Dein <strong>Google Business Profil (GBP)</strong> ist der wichtigste einzelne Faktor fur lokale Rankings. Es beeinflusst 36 % des Local-Pack-Rankings.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-primary" />
              <h3 className="font-bold">GBP-Setup Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">GBP erstellt und verifiziert (Postkarte, Telefon oder Video)</CheckItem>
              <CheckItem priority="kritisch">Korrekter Unternehmensname (exakt wie auf Website & Schild)</CheckItem>
              <CheckItem priority="kritisch">Adresse + Telefonnummer korrekt und identisch mit Website</CheckItem>
              <CheckItem priority="kritisch">Primarkatategorie + 2-5 Sekundarkategorien gewahlt</CheckItem>
              <CheckItem priority="kritisch">Offnungszeiten inkl. Feiertage eingetragen</CheckItem>
              <CheckItem priority="hoch">Website-URL und Terminbuchungs-Link hinterlegt</CheckItem>
              <CheckItem priority="hoch">Unternehmensbeschreibung (750 Zeichen, Keywords naturlich)</CheckItem>
              <CheckItem priority="hoch">10+ hochwertige Fotos (Aussen, Innen, Team, Produkte)</CheckItem>
              <CheckItem priority="hoch">Alle relevanten Attribute aktiviert (Barrierefreiheit, Zahlung, etc.)</CheckItem>
              <CheckItem priority="hoch">Produkte / Services mit Beschreibung und Preisen</CheckItem>
              <CheckItem priority="empfohlen">Google Posts: mindestens 1x pro Woche</CheckItem>
              <CheckItem priority="empfohlen">Q&A-Bereich mit haufigen Fragen vorausgefullt</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Detaillierte Anleitung: <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil optimieren</Link> | <Link to="/blog/google-business-kategorien-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Kategorien-Guide</Link> | <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Fotos optimieren</Link>.
        </p>
      </section>

      {/* Phase 2: Website */}
      <section id="website-grundlagen">
        <h2>Phase 2: Website-Grundlagen</h2>
        <p>
          Deine Website ist die zentrale Landingpage fur alle lokalen Suchanfragen und muss sowohl fur Nutzer als auch fur Google optimiert sein.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Website-Grundlagen Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">NAP (Name, Adresse, Telefon) im Footer auf jeder Seite</CheckItem>
              <CheckItem priority="kritisch">Kontaktseite mit vollstandigen Geschaftsdaten + Google Maps Embed</CheckItem>
              <CheckItem priority="kritisch">Stadt/Region in Title Tags und H1 der Startseite</CheckItem>
              <CheckItem priority="kritisch">Meta-Description mit lokalem Keyword + Handlungsaufforderung</CheckItem>
              <CheckItem priority="hoch">Eigenstandige Seiten fur jeden Service/jede Leistung</CheckItem>
              <CheckItem priority="hoch">Standortseiten fur jeden Stadtteil/jede Stadt im Einzugsgebiet</CheckItem>
              <CheckItem priority="hoch">Uber-uns-Seite mit Teamfotos, Geschichte, Qualifikationen</CheckItem>
              <CheckItem priority="hoch">Click-to-Call Button prominent sichtbar (mobil)</CheckItem>
              <CheckItem priority="empfohlen">Kundenbewertungen auf der Website eingebunden</CheckItem>
              <CheckItem priority="empfohlen">Blog / Ratgeber-Bereich mit lokalen Themen</CheckItem>
            </ul>
          </CardContent>
        </Card>
      </section>

      <BlogCTAABTest position="intro" articleSlug="local-seo-checkliste-komplett" />

      {/* Phase 3: Technisches SEO */}
      <section id="technisches-seo" data-ai-summary="true">
        <h2>Phase 3: Technisches SEO</h2>
        <p>
          Die technische Grundlage entscheidet, ob Google deine Seiten uberhaupt korrekt crawlen und indexieren kann.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Technisches SEO Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">LocalBusiness Schema (JSON-LD) auf der Startseite</CheckItem>
              <CheckItem priority="kritisch">HTTPS auf allen Seiten (SSL-Zertifikat aktiv)</CheckItem>
              <CheckItem priority="kritisch">Mobile-responsive Design (Viewport Meta-Tag)</CheckItem>
              <CheckItem priority="kritisch">Ladezeit unter 3 Sekunden (mobil)</CheckItem>
              <CheckItem priority="hoch">XML-Sitemap in Google Search Console eingereicht</CheckItem>
              <CheckItem priority="hoch">Robots.txt korrekt konfiguriert</CheckItem>
              <CheckItem priority="hoch">Core Web Vitals im grunen Bereich (LCP &lt;2.5s, INP &lt;200ms, CLS &lt;0.1)</CheckItem>
              <CheckItem priority="hoch">FAQPage Schema auf relevanten Seiten</CheckItem>
              <CheckItem priority="hoch">Canonical Tags gegen Duplicate Content</CheckItem>
              <CheckItem priority="empfohlen">BreadcrumbList Schema implementiert</CheckItem>
              <CheckItem priority="empfohlen">Speakable Properties fur AI-Suchmaschinen</CheckItem>
              <CheckItem priority="empfohlen">hreflang Tags fur DACH-Regionen (wenn mehrsprachig)</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Vollstandiger Guide: <Link to="/blog/technisches-local-seo-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Technisches Local SEO Guide</Link> | <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">LocalBusiness Schema implementieren</Link> | <Link to="/blog/core-web-vitals-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Core Web Vitals Guide</Link>.
        </p>
      </section>

      {/* Phase 4: Content */}
      <section id="content-onpage">
        <h2>Phase 4: Content & On-Page SEO</h2>
        <p>
          Lokaler Content signalisiert Google Relevanz fur deine Region und zieht organischen Traffic an.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Content & On-Page Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">Lokale Keywords in Title, H1, H2 und Meta-Description</CheckItem>
              <CheckItem priority="kritisch">Einzigartiger Content auf jeder Standortseite (kein Copy-Paste)</CheckItem>
              <CheckItem priority="hoch">Keyword-Recherche fur lokale Suchbegriffe durchgefuhrt</CheckItem>
              <CheckItem priority="hoch">Alt-Texte fur alle Bilder mit lokalen Keywords</CheckItem>
              <CheckItem priority="hoch">Interne Verlinkung zwischen verwandten Seiten</CheckItem>
              <CheckItem priority="hoch">FAQ-Bereich auf Serviceseiten (mit Schema Markup)</CheckItem>
              <CheckItem priority="empfohlen">Blog mit regelmaessigen lokalen Beitragen</CheckItem>
              <CheckItem priority="empfohlen">Lokale Case Studies / Erfolgsgeschichten</CheckItem>
              <CheckItem priority="empfohlen">Saisonaler Content (z.B. Wintertipps, Sommerspezial)</CheckItem>
              <CheckItem priority="empfohlen">E-E-A-T-Signale: Autorenprofile, Zertifikate, Expertise zeigen</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Keyword-Strategien: <Link to="/blog/local-seo-keywords-finden" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Lokale Keywords finden</Link> | <Link to="/blog/local-content-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Content Marketing</Link> | <Link to="/blog/e-e-a-t-lokale-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">E-E-A-T Guide</Link>.
        </p>
      </section>

      {/* Phase 5: Citations */}
      <section id="citations-nap" data-ai-summary="true">
        <h2>Phase 5: Citations & NAP-Konsistenz</h2>
        <p data-featured-snippet="true">
          <strong>NAP-Konsistenz</strong> (Name, Adresse, Telefonnummer) uber alle Online-Verzeichnisse hinweg ist ein fundamentaler Ranking-Faktor. Inkonsistente Daten verwirren Google und Kunden gleichermassen.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Citations & NAP Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">NAP auf Website = NAP in GBP = NAP in allen Verzeichnissen</CheckItem>
              <CheckItem priority="kritisch">Google Business Profil als Master-Datensatz definiert</CheckItem>
              <CheckItem priority="hoch">Top-10-Branchenverzeichnisse eingetragen (Yelp, Gelbe Seiten, etc.)</CheckItem>
              <CheckItem priority="hoch">Branchenspezifische Verzeichnisse (z.B. Jameda fur Arzte, Tripadvisor fur Gastro)</CheckItem>
              <CheckItem priority="hoch">Apple Maps, Bing Places, Facebook Business eingerichtet</CheckItem>
              <CheckItem priority="hoch">IHK / HWK / WKO Mitgliederprofil mit Website-Link</CheckItem>
              <CheckItem priority="empfohlen">Alte/doppelte Eintraege bereinigt</CheckItem>
              <CheckItem priority="empfohlen">DACH-spezifisch: local.ch, Herold.at, meinestadt.de</CheckItem>
              <CheckItem priority="empfohlen">Quartalsmaessiger NAP-Konsistenz-Check</CheckItem>
              <CheckItem priority="empfohlen">Aggregator-Dienste (Data Axle, Factual) genutzt</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Details: <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz Guide</Link> | <Link to="/blog/local-citations-2025" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Citations Guide</Link> | <Link to="/citation-verzeichnisse" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">DACH-Verzeichnisse</Link>.
        </p>
      </section>

      <BlogCTAABTest position="middle" articleSlug="local-seo-checkliste-komplett" />

      {/* Phase 6: Bewertungen */}
      <section id="bewertungen">
        <h2>Phase 6: Bewertungen & Reputation</h2>
        <p>
          Bewertungen machen 17 % des Local-Pack-Rankings aus und sind der entscheidende Vertrauensfaktor fur potenzielle Kunden.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Bewertungen Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">Mindestens 5 Google-Bewertungen (fur Sterneanzeige)</CheckItem>
              <CheckItem priority="kritisch">Auf alle Bewertungen innerhalb von 24-48h antworten</CheckItem>
              <CheckItem priority="hoch">Systematischer Bewertungs-Prozess etabliert (nach jedem Auftrag fragen)</CheckItem>
              <CheckItem priority="hoch">Negative Bewertungen professionell und losungsorientiert beantworten</CheckItem>
              <CheckItem priority="hoch">Bewertungs-Link fur Kunden leicht zuganglich (QR-Code, E-Mail)</CheckItem>
              <CheckItem priority="empfohlen">Bewertungen auf weiteren Plattformen (Yelp, Branchenportale)</CheckItem>
              <CheckItem priority="empfohlen">AggregateRating Schema auf der Website</CheckItem>
              <CheckItem priority="empfohlen">Bewertungs-Widgets auf der Website eingebunden</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Strategien: <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Bewertungen bekommen</Link> | <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Antwort-Vorlagen</Link> | <Link to="/blog/negative-google-bewertungen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Negative Bewertungen meistern</Link>.
        </p>
      </section>

      {/* Phase 7: Linkbuilding */}
      <section id="linkbuilding">
        <h2>Phase 7: Lokales Linkbuilding</h2>
        <p>
          Lokale Backlinks signalisieren Google Community-Verankerung und geografische Relevanz.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <LinkIcon className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Linkbuilding Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="hoch">IHK/HWK/WKO-Profil mit Website-Link</CheckItem>
              <CheckItem priority="hoch">Branchenverband / Innung mit Website-Link</CheckItem>
              <CheckItem priority="hoch">Partnerschaften mit komplementaren lokalen Unternehmen</CheckItem>
              <CheckItem priority="hoch">2-3 lokale Vereine sponsern (Sportverein, Feuerwehr, etc.)</CheckItem>
              <CheckItem priority="hoch">Unlinked Brand Mentions identifizieren und Link anfragen</CheckItem>
              <CheckItem priority="empfohlen">Lokale PR: Pressemitteilung bei Eroffnung, Jubilaum, Aktion</CheckItem>
              <CheckItem priority="empfohlen">Gastbeitrag fur lokalen Blog oder Stadtmagazin</CheckItem>
              <CheckItem priority="empfohlen">Lieferanten-Websites: als Referenzkunde listen lassen</CheckItem>
              <CheckItem priority="empfohlen">Lokale Events veranstalten (Workshop, Tag der offenen Tur)</CheckItem>
              <CheckItem priority="empfohlen">Linkbait-Content: Lokale Studie, Infografik, Rechner</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Kompletter Blueprint: <Link to="/blog/local-link-building-blueprint" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Link Building Blueprint</Link> | <Link to="/blog/local-link-building" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Linkbuilding Grundlagen</Link>.
        </p>
      </section>

      {/* Phase 8: Tracking */}
      <section id="tracking-reporting">
        <h2>Phase 8: Tracking & Reporting</h2>
        <p>
          Ohne Messung kein Fortschritt. Richte Tracking ein, um deine lokale SEO-Performance zu uberwachen.
        </p>

        <Card className="border border-border/50 my-6">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Tracking & Reporting Checkliste</h3>
            </div>
            <ul className="space-y-2">
              <CheckItem priority="kritisch">Google Search Console eingerichtet und verifiziert</CheckItem>
              <CheckItem priority="kritisch">Google Analytics / Web-Analytics installiert</CheckItem>
              <CheckItem priority="hoch">GBP Insights regelmaessig auswerten (Aufrufe, Aktionen, Fotos)</CheckItem>
              <CheckItem priority="hoch">Lokale Keyword-Rankings tracken (Top 10 Keywords)</CheckItem>
              <CheckItem priority="hoch">Conversion-Tracking: Anrufe, Formulare, Routenplanungen</CheckItem>
              <CheckItem priority="empfohlen">Monatliches Reporting erstellen</CheckItem>
              <CheckItem priority="empfohlen">Wettbewerber-Rankings beobachten</CheckItem>
              <CheckItem priority="empfohlen">Core Web Vitals monatlich in Search Console prufen</CheckItem>
            </ul>
          </CardContent>
        </Card>

        <p>
          Reporting-Vorlagen: <Link to="/blog/local-seo-reporting-template" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Reporting Template</Link> | <Link to="/blog/google-business-insights-verstehen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">GBP Insights verstehen</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      {/* 90-Tage-Plan */}
      <section id="zeitplan" data-ai-summary="true">
        <h2>Der 90-Tage-Implementierungsplan</h2>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Zeitraum</TableHead>
              <TableHead className="font-bold">Phase</TableHead>
              <TableHead className="font-bold">Wichtigste Aufgaben</TableHead>
              <TableHead className="font-bold">Erwartetes Ergebnis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Woche 1", "GBP + Website", "GBP verifizieren, NAP auf Website, Kontaktseite", "GBP live, erste Sichtbarkeit"],
              ["Woche 2", "GBP + Technik", "Fotos, Kategorien, SSL, Schema Markup", "Rich Snippets, Sterneanzeige"],
              ["Woche 3", "Technisches SEO", "Core Web Vitals, Sitemap, Mobile Check", "Schnelle, indexierbare Seite"],
              ["Woche 4", "Content", "Lokale Keywords, Standortseiten, FAQ", "Organische lokale Rankings"],
              ["Woche 5-6", "Citations", "Top-20 Verzeichnisse, NAP-Konsistenz", "Breitere lokale Prasenz"],
              ["Woche 7-8", "Bewertungen", "Bewertungs-Prozess starten, erste 10 Reviews", "Sterne in Google, Social Proof"],
              ["Woche 9-10", "Linkbuilding", "IHK-Link, 2 Sponsorings, Unlinked Mentions", "Erste hochwertige Backlinks"],
              ["Woche 11-12", "Tracking + Optimierung", "Analytics-Setup, erstes Reporting, Lucken schliessen", "Datenbasierte Optimierung"],
            ].map(([zeit, phase, aufgaben, ergebnis], i) => (
              <TableRow key={i}>
                <TableCell className="font-bold text-primary whitespace-nowrap">{zeit}</TableCell>
                <TableCell className="font-medium whitespace-nowrap">{phase}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{aufgaben}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{ergebnis}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Detaillierter Strategieplan: <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Strategie fur kleine Unternehmen</Link>.
        </p>
      </section>

      {/* Branchenspezifisch */}
      <section id="branchenspezifisch">
        <h2>Branchenspezifische Prioritaten</h2>
        <p>
          Nicht jede Branche muss alle Punkte gleich priorisieren. Hier die Top-3-Prioritaten nach Branche:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Branche</TableHead>
              <TableHead className="font-bold">Prioritat 1</TableHead>
              <TableHead className="font-bold">Prioritat 2</TableHead>
              <TableHead className="font-bold">Prioritat 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Restaurant / Gastro", "GBP-Fotos + Speisekarte", "Google-Bewertungen", "Menu-Schema"],
              ["Arzt / Zahnarzt", "MedicalBusiness Schema", "Bewertungen (Jameda + Google)", "E-E-A-T-Signale"],
              ["Handwerker", "serviceArea + Stadtteile", "Bewertungen nach Auftrag", "Lokales Linkbuilding"],
              ["Anwalt / Steuerberater", "E-E-A-T + Expertise zeigen", "FAQ-Schema", "IHK/Kammer-Links"],
              ["Friseur / Beauty", "GBP-Fotos (Vorher/Nachher)", "Online-Buchung integrieren", "Instagram-Verlinkung"],
              ["Hotel / Ferienwohnung", "Booking-Schema", "Multi-Plattform-Bewertungen", "Tourismus-Links"],
              ["Fitness / Yoga", "Kursplan + Events", "Google Posts regelmaessig", "Community-Engagement"],
              ["Einzelhandel", "Produkte in GBP", "Offnungszeiten aktuell", "Lokale Events"],
            ].map(([branche, p1, p2, p3], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{branche}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{p1}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{p2}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{p3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Branchenspezifische Guides: <Link to="/blog/local-seo-branchen-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Alle Branchen-Guides</Link>.
        </p>
      </section>

      <BlogCTAABTest position="end" articleSlug="local-seo-checkliste-komplett" />

      <HelpfulnessWidget articleSlug="local-seo-checkliste-komplett" />

      {/* FAQ */}
      <section id="faq">
        <h2>Haufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />

      {/* Verwandte Ressourcen */}
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="font-bold mb-4">Verwandte Ressourcen</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { slug: "/blog/local-seo-audit-checkliste", icon: "✅", title: "Interaktive Audit-Checkliste", desc: "Punkte abhaken, Fortschritt speichern" },
            { slug: "/blog/ultimate-guide-local-seo", icon: "🏆", title: "Ultimate Guide Local SEO", desc: "Die Gesamtstrategie" },
            { slug: "/blog/local-seo-ranking-faktoren-erklaert", icon: "📊", title: "Ranking-Faktoren erklart", desc: "Alle Faktoren im Detail" },
            { slug: "/blog/seo-toolbox-kostenlose-ressourcen", icon: "🧰", title: "Kostenlose SEO-Tools", desc: "Die besten Gratis-Tools" },
          ].map((r) => (
            <Link key={r.slug} to={r.slug} className="block group">
              <Card className="hover:shadow-md transition-all group-hover:border-primary/30">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{r.title}</h4>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoChecklisteKomplett;
