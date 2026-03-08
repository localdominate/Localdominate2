import { Link } from "react-router-dom";
import { ExternalLink, Globe, Check, Star, Building2, MapPin, Stethoscope, UtensilsCrossed, Wrench, Scale, Hotel, Scissors, Dumbbell } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import DirectorySubmissionStrategy from "@/components/blog/DirectorySubmissionStrategy";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

interface Directory {
  name: string;
  url: string;
  priority: "must" | "high" | "medium" | "nice";
  free: boolean;
  da: number;
  notes: string;
}

interface IndustryDirectory {
  name: string;
  url: string;
  industries: string[];
  notes: string;
}

const GERMANY_DIRS: Directory[] = [
  { name: "Google Business Profile", url: "https://business.google.com", priority: "must", free: true, da: 100, notes: "Pflicht #1 – Basis für Local Pack & Maps" },
  { name: "Bing Places", url: "https://www.bingplaces.com", priority: "must", free: true, da: 99, notes: "Microsoft/Bing-Ökosystem, Copilot-Quelle" },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", priority: "must", free: true, da: 100, notes: "Apple Maps, Siri, iPhone-Standard" },
  { name: "Yelp", url: "https://biz.yelp.de", priority: "high", free: true, da: 94, notes: "Hohes Vertrauen, KI-Zitierquelle" },
  { name: "Gelbe Seiten", url: "https://www.gelbeseiten.de", priority: "high", free: true, da: 78, notes: "Stärkstes DE-Verzeichnis, Data-Aggregator" },
  { name: "Das Örtliche", url: "https://www.dasoertliche.de", priority: "high", free: true, da: 72, notes: "Zweitgrößtes DE-Verzeichnis" },
  { name: "11880.com", url: "https://www.11880.com", priority: "high", free: true, da: 68, notes: "Großes Verzeichnis mit Bewertungsfunktion" },
  { name: "GoLocal", url: "https://www.golocal.de", priority: "medium", free: true, da: 55, notes: "Bewertungsplattform, gute Sichtbarkeit" },
  { name: "Stadtbranchenbuch", url: "https://www.stadtbranchenbuch.com", priority: "medium", free: true, da: 52, notes: "Regionale Relevanz" },
  { name: "Cylex", url: "https://www.cylex.de", priority: "medium", free: true, da: 48, notes: "Internationales Netzwerk" },
  { name: "Branchenbuch Deutschland", url: "https://www.branchenbuch-deutschland.de", priority: "medium", free: true, da: 45, notes: "Kostenloser Basiseintrag" },
  { name: "Hotfrog", url: "https://www.hotfrog.de", priority: "nice", free: true, da: 42, notes: "Globales Verzeichnis" },
  { name: "Foursquare", url: "https://foursquare.com", priority: "nice", free: true, da: 92, notes: "Location-Daten für viele Apps" },
  { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high", free: true, da: 96, notes: "Social Signal + NAP-Quelle" },
  { name: "LinkedIn Company", url: "https://www.linkedin.com", priority: "medium", free: true, da: 98, notes: "B2B-Relevanz, Professional Trust" },
];

const AUSTRIA_DIRS: Directory[] = [
  { name: "Google Business Profile", url: "https://business.google.com", priority: "must", free: true, da: 100, notes: "Pflicht für alle Länder" },
  { name: "Herold.at", url: "https://www.herold.at", priority: "must", free: true, da: 72, notes: "Das ‚Gelbe Seiten' Österreichs" },
  { name: "Firmen ABC", url: "https://www.firmenabc.at", priority: "high", free: true, da: 58, notes: "Größtes AT-Firmenverzeichnis" },
  { name: "WKO Firmen A-Z", url: "https://firmen.wko.at", priority: "high", free: true, da: 75, notes: "Offizielles WKO-Verzeichnis, hohes Vertrauen" },
  { name: "Tupalo", url: "https://www.tupalo.com", priority: "medium", free: true, da: 45, notes: "Bewertungsplattform mit AT-Fokus" },
  { name: "Yelp Österreich", url: "https://www.yelp.at", priority: "medium", free: true, da: 94, notes: "Internationales Vertrauen" },
  { name: "Cylex Österreich", url: "https://www.cylex.at", priority: "medium", free: true, da: 42, notes: "Automatische Syndizierung" },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", priority: "must", free: true, da: 100, notes: "Apple Maps" },
  { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high", free: true, da: 99, notes: "Microsoft-Ökosystem" },
  { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high", free: true, da: 96, notes: "Starke AT-Nutzerbasis" },
];

const SWITZERLAND_DIRS: Directory[] = [
  { name: "Google Business Profile", url: "https://business.google.com", priority: "must", free: true, da: 100, notes: "Pflicht für alle Länder" },
  { name: "local.ch", url: "https://www.local.ch", priority: "must", free: true, da: 70, notes: "Das wichtigste CH-Verzeichnis" },
  { name: "search.ch", url: "https://www.search.ch", priority: "must", free: true, da: 68, notes: "Zweitgrößtes CH-Verzeichnis" },
  { name: "Swisscom Directories", url: "https://www.directories.ch", priority: "high", free: true, da: 65, notes: "Betreiber von local.ch & search.ch" },
  { name: "Yelp Schweiz", url: "https://www.yelp.ch", priority: "medium", free: true, da: 94, notes: "Internationales Vertrauen" },
  { name: "Cylex Schweiz", url: "https://www.cylex.ch", priority: "medium", free: true, da: 42, notes: "Internationales Netzwerk" },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", priority: "must", free: true, da: 100, notes: "Apple Maps, Siri" },
  { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high", free: true, da: 99, notes: "Microsoft/Bing" },
  { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high", free: true, da: 96, notes: "Social Signal" },
  { name: "LinkedIn Company", url: "https://www.linkedin.com", priority: "medium", free: true, da: 98, notes: "B2B-Relevanz" },
];

const INDUSTRY_DIRS: IndustryDirectory[] = [
  { name: "Jameda", url: "https://www.jameda.de", industries: ["Ärzte", "Zahnärzte"], notes: "DE: Größtes Arzt-Bewertungsportal" },
  { name: "Doctolib", url: "https://www.doctolib.de", industries: ["Ärzte", "Zahnärzte"], notes: "DE/AT: Online-Terminbuchung, wachsend" },
  { name: "Sanego", url: "https://www.sanego.de", industries: ["Ärzte"], notes: "DE: Medikamenten- & Arztbewertungen" },
  { name: "DocFinder", url: "https://www.docfinder.at", industries: ["Ärzte", "Zahnärzte"], notes: "AT: Größtes AT-Arztportal" },
  { name: "TripAdvisor", url: "https://www.tripadvisor.de", industries: ["Restaurants", "Hotels"], notes: "International: Reise & Gastro" },
  { name: "TheFork", url: "https://www.thefork.de", industries: ["Restaurants"], notes: "DE/AT/CH: Restaurant-Reservierung" },
  { name: "Booking.com", url: "https://www.booking.com", industries: ["Hotels", "Ferienwohnungen"], notes: "International: Unterkunft" },
  { name: "Airbnb", url: "https://www.airbnb.de", industries: ["Ferienwohnungen"], notes: "International: Ferienwohnungen" },
  { name: "MyHammer", url: "https://www.myhammer.de", industries: ["Handwerker"], notes: "DE: Handwerker-Vermittlung" },
  { name: "Anwalt.de", url: "https://www.anwalt.de", industries: ["Anwälte"], notes: "DE: Größtes Anwaltsverzeichnis" },
  { name: "Treatwell", url: "https://www.treatwell.de", industries: ["Friseure", "Beauty"], notes: "DE/AT/CH: Beauty-Buchung" },
  { name: "FitnessFinder", url: "https://www.fitnessfinder.de", industries: ["Fitness"], notes: "DE: Fitnessstudio-Verzeichnis" },
  { name: "ImmobilienScout24", url: "https://www.immobilienscout24.de", industries: ["Immobilienmakler"], notes: "DE: Größtes Immobilienportal" },
  { name: "AutoScout24", url: "https://www.autoscout24.de", industries: ["Autowerkstatt"], notes: "DE/AT/CH: Auto & Werkstatt" },
  { name: "KennstDuEinen", url: "https://www.kennstdueinen.de", industries: ["Handwerker", "Dienstleister"], notes: "DE: Empfehlungsportal" },
  { name: "WerKenntDenBesten", url: "https://www.werkenntdenbesten.de", industries: ["Dienstleister"], notes: "DE: Bewertungsportal" },
];

const getPriorityBadge = (priority: Directory["priority"]) => {
  const styles = {
    must: "bg-destructive/10 text-destructive",
    high: "bg-accent text-accent-foreground",
    medium: "bg-primary/10 text-primary",
    nice: "bg-muted text-muted-foreground",
  };
  const labels = { must: "Pflicht", high: "Hoch", medium: "Mittel", nice: "Optional" };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[priority]}`}>
      {labels[priority]}
    </span>
  );
};

const DirectoryTable = ({ directories, country }: { directories: Directory[]; country: string }) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Verzeichnis</TableHead>
          <TableHead className="font-bold">Priorität</TableHead>
          <TableHead className="font-bold text-center">DA</TableHead>
          <TableHead className="font-bold text-center">Kostenlos</TableHead>
          <TableHead className="font-bold">Hinweise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {directories.map((dir) => (
          <TableRow key={dir.name + country}>
            <TableCell>
              <a
                href={dir.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                {dir.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            </TableCell>
            <TableCell>{getPriorityBadge(dir.priority)}</TableCell>
            <TableCell className="text-center font-mono text-sm">{dir.da}</TableCell>
            <TableCell className="text-center">
              {dir.free && <Check className="w-4 h-4 text-primary mx-auto" />}
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">{dir.notes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

const CitationVerzeichnisse = () => {
  const { language } = useLanguage();
  const isDE = language === "de";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Citation-Verzeichnisse DACH – Komplette Liste 2026",
      description: "Die vollständige Liste der wichtigsten Branchenverzeichnisse für Local SEO in Deutschland, Österreich und der Schweiz.",
      url: "https://localdominate.org/citation-verzeichnisse",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wie viele Citations braucht ein lokales Unternehmen?",
          acceptedAnswer: { "@type": "Answer", text: "20–40 hochwertige Citations reichen für die meisten lokalen Unternehmen aus. Die ‚Big 4' (Google, Bing, Apple, Facebook) sind Pflicht, danach die wichtigsten länderspezifischen Verzeichnisse und 2–3 branchenspezifische Portale." },
        },
        {
          "@type": "Question",
          name: "Was ist NAP-Konsistenz?",
          acceptedAnswer: { "@type": "Answer", text: "NAP steht für Name, Address, Phone. Alle drei Angaben müssen in jedem Verzeichnis exakt identisch sein – gleiche Schreibweise, gleiche Telefonnummer, gleiche Adressformatierung. Inkonsistenzen verwirren Google und schaden dem Ranking." },
        },
        {
          "@type": "Question",
          name: "Sollte ich Citation-Services wie Yext nutzen?",
          acceptedAnswer: { "@type": "Answer", text: "Citation-Services erleichtern die Verwaltung, aber manche Einträge verschwinden nach Kündigung. Manuelle Einträge in die 15–20 wichtigsten Verzeichnisse sind nachhaltiger und kostengünstiger." },
        },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Citation-Verzeichnisse für Local SEO – DACH-Liste 2026"
        description="Die vollständige Liste der wichtigsten Branchenverzeichnisse für Local SEO in Deutschland, Österreich und der Schweiz. Mit Priorität, DA-Wert und branchenspezifischen Portalen."
        canonicalUrl="https://localdominate.org/citation-verzeichnisse"
        jsonLd={jsonLd}
      />
      <StickyHeader />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <SiteBreadcrumbs includeSchema />
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {isDE ? "Citation-Verzeichnisse für Local SEO" : "Citation Directories for Local SEO"}
                </h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                  {isDE
                    ? "Die komplette Liste aller relevanten Branchenverzeichnisse für Deutschland, Österreich und die Schweiz — mit Priorität, Domain Authority und branchenspezifischen Portalen."
                    : "The complete list of all relevant business directories for Germany, Austria and Switzerland — with priority, Domain Authority and industry-specific portals."}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> 3 {isDE ? "Länder" : "Countries"}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground">
                <Building2 className="w-3.5 h-3.5" /> 40+ {isDE ? "Verzeichnisse" : "Directories"}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-full text-muted-foreground">
                <Star className="w-3.5 h-3.5" /> 16 {isDE ? "Branchen-Portale" : "Industry Portals"}
              </span>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <nav className="border-b border-border sticky top-16 bg-background/95 backdrop-blur z-30">
          <div className="container mx-auto px-4 max-w-5xl overflow-x-auto">
            <div className="flex gap-1 py-2">
              {[
                { id: "de", label: "🇩🇪 Deutschland", count: GERMANY_DIRS.length },
                { id: "at", label: "🇦🇹 Österreich", count: AUSTRIA_DIRS.length },
                { id: "ch", label: "🇨🇭 Schweiz", count: SWITZERLAND_DIRS.length },
                { id: "branchen", label: "🏭 Branchen", count: INDUSTRY_DIRS.length },
                { id: "strategie", label: "📋 Strategie" },
                { id: "faq", label: "❓ FAQ" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="whitespace-nowrap px-3 py-1.5 text-sm rounded-full border border-border hover:bg-primary/10 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {item.label} {item.count ? `(${item.count})` : ""}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 max-w-5xl py-12 space-y-16">
          {/* Priority Legend */}
          <div className="flex flex-wrap gap-4 p-4 bg-muted/50 rounded-xl border border-border">
            <p className="text-sm font-semibold text-foreground w-full">{isDE ? "Prioritäts-Legende:" : "Priority Legend:"}</p>
            <div className="flex items-center gap-1.5">{getPriorityBadge("must")} <span className="text-xs text-muted-foreground">= Unbedingt eintragen</span></div>
            <div className="flex items-center gap-1.5">{getPriorityBadge("high")} <span className="text-xs text-muted-foreground">= Stark empfohlen</span></div>
            <div className="flex items-center gap-1.5">{getPriorityBadge("medium")} <span className="text-xs text-muted-foreground">= Empfehlenswert</span></div>
            <div className="flex items-center gap-1.5">{getPriorityBadge("nice")} <span className="text-xs text-muted-foreground">= Wenn Zeit übrig</span></div>
            <p className="text-xs text-muted-foreground w-full mt-1">DA = Domain Authority (Moz) — höher = wertvoller als Backlink-Quelle</p>
          </div>

          {/* Germany */}
          <section id="de" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
              🇩🇪 Deutschland
            </h2>
            <p className="text-muted-foreground mb-6">
              {GERMANY_DIRS.length} {isDE ? "Verzeichnisse — sortiert nach Priorität. Starte mit den Pflicht-Einträgen." : "directories — sorted by priority."}
            </p>
            <DirectoryTable directories={GERMANY_DIRS} country="DE" />
          </section>

          {/* Austria */}
          <section id="at" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
              🇦🇹 Österreich
            </h2>
            <p className="text-muted-foreground mb-6">
              {AUSTRIA_DIRS.length} {isDE ? "Verzeichnisse — Herold.at ist das wichtigste länderspezifische Verzeichnis." : "directories — Herold.at is the most important country-specific one."}
            </p>
            <DirectoryTable directories={AUSTRIA_DIRS} country="AT" />
          </section>

          {/* Switzerland */}
          <section id="ch" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
              🇨🇭 Schweiz
            </h2>
            <p className="text-muted-foreground mb-6">
              {SWITZERLAND_DIRS.length} {isDE ? "Verzeichnisse — local.ch und search.ch sind die zentralen Schweizer Plattformen." : "directories — local.ch and search.ch are the key Swiss platforms."}
            </p>
            <DirectoryTable directories={SWITZERLAND_DIRS} country="CH" />
          </section>

          {/* Industry Directories */}
          <section id="branchen" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
              🏭 {isDE ? "Branchenspezifische Verzeichnisse" : "Industry-Specific Directories"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isDE
                ? "Diese spezialisierten Portale haben oft höheren SEO-Wert als allgemeine Verzeichnisse, weil sie thematische Relevanz signalisieren."
                : "These specialized portals often have higher SEO value than general directories due to topical relevance."}
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Portal</TableHead>
                    <TableHead className="font-bold">{isDE ? "Branchen" : "Industries"}</TableHead>
                    <TableHead className="font-bold">{isDE ? "Hinweise" : "Notes"}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {INDUSTRY_DIRS.map((dir) => (
                    <TableRow key={dir.name}>
                      <TableCell>
                        <a
                          href={dir.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {dir.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {dir.industries.map((ind) => (
                            <span key={ind} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{dir.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Strategy */}
          <section id="strategie" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              📋 {isDE ? "Citation-Strategie: So gehst du vor" : "Citation Strategy: Step by Step"}
            </h2>

            <div className="space-y-4">
              {[
                { step: 1, title: isDE ? "NAP-Daten standardisieren" : "Standardize NAP data", desc: isDE ? "Lege eine Master-Version von Name, Adresse und Telefonnummer fest. Nutze exakt diese Schreibweise in allen Verzeichnissen." : "Define a master version of Name, Address, Phone." },
                { step: 2, title: isDE ? "Pflicht-Verzeichnisse eintragen" : "Register in mandatory directories", desc: isDE ? "Google Business Profile, Bing Places, Apple Business Connect — diese drei sind unverzichtbar." : "Google, Bing, Apple — these three are essential." },
                { step: 3, title: isDE ? "Länderspezifische Verzeichnisse" : "Country-specific directories", desc: isDE ? "DE: Gelbe Seiten, Das Örtliche, 11880 | AT: Herold.at, WKO | CH: local.ch, search.ch" : "Add the top directories for your country." },
                { step: 4, title: isDE ? "Branchenportale hinzufügen" : "Add industry portals", desc: isDE ? "2–3 branchenspezifische Verzeichnisse haben oft mehr SEO-Wert als 10 allgemeine." : "2–3 industry-specific directories often have more SEO value than 10 general ones." },
                { step: 5, title: isDE ? "Social-Profile anlegen" : "Create social profiles", desc: isDE ? "Facebook Business-Seite und LinkedIn-Unternehmensprofil mit korrekten NAP-Daten." : "Facebook Business page and LinkedIn company profile with correct NAP data." },
                { step: 6, title: isDE ? "Quartalsweise prüfen" : "Review quarterly", desc: isDE ? "Nutze BrightLocal oder Moz Local, um NAP-Inkonsistenzen aufzuspüren und zu korrigieren." : "Use BrightLocal or Moz Local to find and fix NAP inconsistencies." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-border pt-12">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {isDE ? "Verwandte Guides" : "Related Guides"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { to: "/blog/local-citations-2025", icon: "📚", label: "Local Citations 2026: Strategie-Guide" },
                { to: "/blog/nap-konsistenz-local-seo", icon: "📍", label: "NAP-Konsistenz: Der komplette Guide" },
                { to: "/blog/google-my-business-optimieren", icon: "🏢", label: "Google Business Profil optimieren" },
                { to: "/blog/local-link-building", icon: "🔗", label: "Local Link Building Strategien" },
                { to: "/blog/local-seo-audit-checkliste", icon: "✅", label: "Local SEO Audit Checkliste" },
                { to: "/blog/seo-toolbox-kostenlose-ressourcen", icon: "🧰", label: "Kostenlose SEO-Tools" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32 border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              ❓ {isDE ? "Häufige Fragen" : "FAQ"}
            </h2>
            <div className="space-y-4">
              {[
                { q: isDE ? "Wie viele Citations brauche ich?" : "How many citations do I need?", a: isDE ? "20–40 hochwertige Citations reichen für die meisten lokalen Unternehmen. Die ‚Big 4' (Google, Bing, Apple, Facebook) sind Pflicht, danach länderspezifische und 2–3 branchenspezifische Portale." : "20–40 quality citations are enough for most local businesses." },
                { q: isDE ? "Was ist NAP-Konsistenz und warum ist sie wichtig?" : "What is NAP consistency?", a: isDE ? "NAP = Name, Address, Phone. Alle drei Angaben müssen in jedem Verzeichnis exakt identisch sein. Inkonsistenzen verwirren Google und können dein lokales Ranking negativ beeinflussen." : "NAP = Name, Address, Phone. All three must be identical across all directories." },
                { q: isDE ? "Sollte ich Citation-Services wie Yext nutzen?" : "Should I use citation services like Yext?", a: isDE ? "Citation-Services erleichtern die Verwaltung, aber manche Einträge verschwinden bei Kündigung. Manuelle Einträge in die 15–20 wichtigsten Verzeichnisse sind nachhaltiger." : "They help with management, but manual entries in the top 15–20 are more sustainable." },
                { q: isDE ? "Wie finde ich inkonsistente Citations?" : "How do I find inconsistent citations?", a: isDE ? "Tools wie Moz Local, BrightLocal oder WhiteSpark scannen das Web nach deinen NAP-Daten und zeigen Inkonsistenzen." : "Tools like Moz Local, BrightLocal, or WhiteSpark scan the web for your NAP data." },
                { q: isDE ? "Sind Verzeichnisse 2026 noch relevant?" : "Are directories still relevant in 2026?", a: isDE ? "Ja, aber Qualität schlägt Quantität. Verzeichnisse dienen weniger als Backlink-Quelle und mehr als Vertrauenssignal und NAP-Validierung für Google." : "Yes, but quality beats quantity. They serve as trust signals and NAP validation." },
              ].map((faq, i) => (
                <details key={i} className="group border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-card hover:bg-muted/50 transition-colors font-medium text-foreground">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="p-4 pt-0 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CitationVerzeichnisse;
