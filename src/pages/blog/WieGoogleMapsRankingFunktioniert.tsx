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
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import { MapPin, Navigation, Star, TrendingUp, Eye, Search, Globe, Building2, Users, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";

const WieGoogleMapsRankingFunktioniert = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("wie-google-maps-ranking-funktioniert", language)!;

  const tocItems = [
    { id: "drei-saulen", title: "Die 3 Saulen: Nahe, Relevanz, Bekanntheit", level: 2 },
    { id: "naehe", title: "Faktor 1: Nahe (Proximity)", level: 2 },
    { id: "relevanz", title: "Faktor 2: Relevanz (Relevance)", level: 2 },
    { id: "bekanntheit", title: "Faktor 3: Bekanntheit (Prominence)", level: 2 },
    { id: "zusammenspiel", title: "Wie die 3 Faktoren zusammenspielen", level: 2 },
    { id: "local-pack", title: "Local Pack vs. Local Finder vs. Google Maps", level: 2 },
    { id: "ranking-signale", title: "Alle Ranking-Signale im Detail", level: 2 },
    { id: "praxis-beispiele", title: "Praxis-Beispiele: Wer rankt und warum", level: 2 },
    { id: "optimierung", title: "So verbesserst du dein Maps-Ranking", level: 2 },
    { id: "mythen", title: "5 Maps-Ranking-Mythen entlarvt", level: 2 },
    { id: "faq", title: "Haufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Google Maps Rankings basieren auf 3 Hauptfaktoren: Nahe, Relevanz und Bekanntheit",
    "Nahe (Proximity) ist der starkste Faktor — du kannst ihn nicht manipulieren, aber mit Relevanz und Bekanntheit kompensieren",
    "Relevanz wird durch GBP-Kategorien, Beschreibung, Services und Website-Content bestimmt",
    "Bekanntheit (Prominence) speist sich aus Bewertungen, Backlinks, Citations und Online-Prasenz",
    "Das Local Pack zeigt nur 3 Ergebnisse — der Unterschied zwischen Platz 3 und 4 ist enorm",
    "Regelmaessige GBP-Aktivitat (Posts, Fotos, Antworten) signalisiert Google ein aktives Business",
  ];

  const faqItems = [
    { question: "Warum rankt mein Konkurrent hoher, obwohl er weiter weg ist?", answer: "Nahe ist nur einer von drei Faktoren. Wenn dein Konkurrent deutlich mehr Bewertungen, besseres Schema Markup, starkere Backlinks oder ein vollstandigeres GBP-Profil hat, kann er dich trotz grosserer Entfernung ubertreffen. Bekanntheit und Relevanz konnen Nahe kompensieren." },
    { question: "Kann ich mein Google Maps Ranking fur einen anderen Standort verbessern?", answer: "Nur begrenzt. Nahe ist der starkste Faktor. Du kannst deine Relevanz und Bekanntheit fur einen entfernteren Standort erhohen (z.B. durch eine Standortseite), aber das wird den Nahe-Nachteil selten vollstandig ausgleichen. Fur entfernte Gebiete brauchst du eine physische Prasenz oder ein Service-Area-Business-Profil." },
    { question: "Wie oft aktualisiert Google die Maps-Rankings?", answer: "Google aktualisiert Maps-Rankings kontinuierlich, aber Veranderungen brauchen typischerweise 1-4 Wochen, um sichtbar zu werden. Neue Bewertungen konnen innerhalb von Tagen wirken, wahrend technische Anderungen (Schema Markup, Website-Speed) Wochen brauchen." },
    { question: "Zahlen bezahlte Google Ads fur das organische Maps-Ranking?", answer: "Nein. Google Ads haben keinen direkten Einfluss auf organische Maps-Rankings. Allerdings kann hohere Markenbekanntheit durch Ads indirekt zu mehr Suchen nach deinem Namen fuhren, was ein Bekanntheitssignal ist." },
    { question: "Welche Rolle spielen Bewertungen fur das Maps-Ranking?", answer: "Bewertungen sind der zweitwichtigste Faktor nach Nahe. Google bewertet Anzahl, Durchschnittsbewertung, Aktualitat und Antwortrate. Ab 5 Bewertungen werden Sterne angezeigt. Unternehmen mit 50+ Bewertungen ranken signifikant besser als solche mit unter 10." },
    { question: "Was ist der Unterschied zwischen Local Pack und Google Maps?", answer: "Das Local Pack sind die 3 Ergebnisse mit Karte in der normalen Google-Suche. Google Maps ist die eigenstandige Karten-App/-Website. Die Rankings konnen sich unterscheiden, basieren aber auf denselben Faktoren. Das Local Pack ist wettbewerbsintensiver, da nur 3 Platze verfugbar sind." },
    { question: "Beeinflusst meine Website das Maps-Ranking?", answer: "Ja, erheblich. Google zieht Website-Signale heran: lokale Keywords, Schema Markup, Ladegeschwindigkeit, Mobile-Optimierung und Content-Relevanz. Eine gut optimierte Website kann den Unterschied zwischen Platz 4 und Platz 2 ausmachen." },
  ];

  const sources = [
    { title: "Google: How Google determines local ranking", url: "https://support.google.com/business/answer/7091", type: "article" as const },
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Local Consumer Review Survey 2024", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study" as const },
    { title: "Moz: Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Die 3 Saulen */}
      <section id="drei-saulen" data-ai-summary="true">
        <h2>Die 3 Saulen des Google Maps Rankings</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Google bestimmt lokale Maps-Rankings anhand von drei Hauptfaktoren:</strong> Nahe (wie weit ist das Unternehmen vom Suchenden entfernt?), Relevanz (wie gut passt das Unternehmen zur Suchanfrage?) und Bekanntheit (wie bekannt und vertrauenswurdig ist das Unternehmen?). Diese drei Faktoren zusammen entscheiden, welche Unternehmen im Local Pack und in Google Maps angezeigt werden.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          {[
            { icon: Navigation, title: "Nahe (Proximity)", pct: "~25 %", desc: "Entfernung zwischen Suchendem und Unternehmen. Starkster Einzelfaktor, aber nicht beeinflussbar.", color: "text-primary" },
            { icon: Search, title: "Relevanz (Relevance)", pct: "~25 %", desc: "Wie gut passt dein GBP-Profil und deine Website zur Suchanfrage? Kategorien, Keywords, Services.", color: "text-primary" },
            { icon: TrendingUp, title: "Bekanntheit (Prominence)", pct: "~50 %", desc: "Wie bekannt bist du? Bewertungen, Backlinks, Citations, Online-Prasenz, Markensuchen.", color: "text-primary" },
          ].map((item, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-5 text-center">
                <item.icon className={`h-8 w-8 mx-auto mb-3 ${item.color}`} />
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{item.pct}</div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">💡 Wichtig zu verstehen</p>
          <p className="text-muted-foreground text-sm">
            Google sagt selbst: <em>„Eine Kombination dieser Faktoren hilft uns, die besten Ergebnisse fur Ihre Suche zu finden."</em> Es gibt kein festes Gewicht — die Faktoren werden je nach Suchanfrage dynamisch gewichtet. Bei „Pizza in der Nahe" wiegt Nahe starker; bei „bester Zahnarzt Munchen" wiegen Bekanntheit und Relevanz starker.
          </p>
        </div>
      </section>

      {/* Nahe */}
      <section id="naehe" data-ai-summary="true">
        <h2>Faktor 1: Nahe (Proximity)</h2>
        <p data-featured-snippet="true">
          <strong>Nahe</strong> ist die Entfernung zwischen dem Standort des Suchenden und dem Unternehmen. Google nutzt GPS-Daten (mobil), IP-Adresse (Desktop) oder den in der Suchanfrage genannten Ort, um die Nahe zu berechnen. Du kannst diesen Faktor nicht direkt beeinflussen — aber du kannst seine Wirkung durch starke Relevanz und Bekanntheit abschwachen.
        </p>

        <h3>So funktioniert Nahe in der Praxis</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Szenario</TableHead>
              <TableHead className="font-bold">Nahe-Gewichtung</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["„Pizza in der Nahe"", "Sehr hoch", "Zeigt die nachsten 3 Pizzerien, unabhangig von Qualitat"],
              ["„Zahnarzt Munchen"", "Mittel", "Zeigt Zahnarzte in ganz Munchen, Qualitat wird relevanter"],
              ["„Bester Steuerberater Bayern"", "Niedrig", "Bekanntheit und Bewertungen dominieren, Entfernung sekundar"],
              ["„Notdienst Klempner"", "Hoch", "Dringlichkeit = nahester verfugbarer Anbieter"],
              ["Markensuche: „Backerei Schmidt"", "Sehr niedrig", "Google zeigt das gesuchte Unternehmen, egal wo"],
            ].map(([szenario, gewichtung, beispiel], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{szenario}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    gewichtung === "Sehr hoch" || gewichtung === "Hoch" ? "bg-primary/15 text-primary" :
                    gewichtung === "Mittel" ? "bg-accent/50 text-accent-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>{gewichtung}</span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{beispiel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h3>Was du trotzdem tun kannst</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Service-Area definieren:</strong> Bei mobilen Diensten (Handwerker, Lieferdienst) den Einzugsbereich im GBP festlegen</li>
          <li><strong>Standortseiten erstellen:</strong> Fur jeden Stadtteil/jede Stadt im Einzugsgebiet eine eigene Seite mit einzigartigem Content</li>
          <li><strong>GeoCoordinates im Schema:</strong> Exakten Standort per JSON-LD bestatigen</li>
          <li><strong>Google Maps Embed:</strong> Auf der Kontaktseite zur Standortbestatigung</li>
        </ul>
      </section>

      {/* Relevanz */}
      <section id="relevanz" data-ai-summary="true">
        <h2>Faktor 2: Relevanz (Relevance)</h2>
        <p data-featured-snippet="true">
          <strong>Relevanz</strong> misst, wie gut dein Unternehmen zur Suchanfrage passt. Google analysiert dafur dein GBP-Profil (Kategorien, Beschreibung, Services), deine Website (Keywords, Schema Markup, Content) und externe Signale (Citations, Erwahnungen). Je praziser dein Profil die Suchanfrage abdeckt, desto hoher deine Relevanz.
        </p>

        <h3>Relevanz-Signale und ihre Starke</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Signal</TableHead>
              <TableHead className="font-bold">Starke</TableHead>
              <TableHead className="font-bold">Optimierungsmassnahme</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["GBP Primarkategorie", "Sehr stark", "Die praziseste Kategorie wahlen (z.B. 'Italienisches Restaurant' statt 'Restaurant')"],
              ["GBP Sekundarkategorien", "Stark", "3-5 zusatzliche passende Kategorien hinzufugen"],
              ["GBP Unternehmensbeschreibung", "Mittel", "750 Zeichen mit naturlichen Keywords ausfullen"],
              ["GBP Produkte & Services", "Stark", "Alle Leistungen mit Beschreibung und Preisen listen"],
              ["Website Title Tags", "Stark", "Lokale Keywords + Service in jedem Title Tag"],
              ["Website H1/H2 Uberschriften", "Stark", "Lokale Keywords in Uberschriften einbauen"],
              ["LocalBusiness Schema", "Stark", "JSON-LD mit korrektem Branchentyp implementieren"],
              ["Website Content", "Mittel", "Detaillierte Service-Beschreibungen mit lokalen Bezugen"],
              ["NAP in Citations", "Mittel", "Einheitliche Daten in Branchenverzeichnissen"],
            ].map(([signal, staerke, massnahme], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{signal}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    staerke === "Sehr stark" ? "bg-primary/15 text-primary" :
                    staerke === "Stark" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>{staerke}</span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{massnahme}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Gut: Hohe Relevanz
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✅ Kategorie: „Italienisches Restaurant"</li>
                <li>✅ Beschreibung erwahnt „hausgemachte Pasta"</li>
                <li>✅ Services: Pizza, Pasta, Tiramisu gelistet</li>
                <li>✅ Website Title: „Trattoria Bella | Italienisch essen in Schwabing"</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-5">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Eye className="h-4 w-4 text-destructive" /> Schlecht: Niedrige Relevanz
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>❌ Kategorie: nur „Restaurant"</li>
                <li>❌ Beschreibung: „Wir freuen uns auf Ihren Besuch"</li>
                <li>❌ Keine Services/Produkte eingetragen</li>
                <li>❌ Website Title: „Willkommen | Trattoria Bella"</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p>
          Kategorien im Detail: <Link to="/blog/google-business-kategorien-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Kategorien Guide</Link> | GBP optimieren: <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil optimieren</Link>.
        </p>
      </section>

      <BlogCTAABTest position="intro" articleSlug="wie-google-maps-ranking-funktioniert" />

      {/* Bekanntheit */}
      <section id="bekanntheit" data-ai-summary="true">
        <h2>Faktor 3: Bekanntheit (Prominence)</h2>
        <p data-featured-snippet="true">
          <strong>Bekanntheit</strong> beschreibt, wie bekannt und vertrauenswurdig ein Unternehmen ist — sowohl online als auch offline. Google misst Bekanntheit durch Bewertungen, Backlinks, Citations, Markensuchen, Medienerwahnung und die allgemeine Online-Prasenz. Dies ist der Faktor, den du am starksten langfristig beeinflussen kannst.
        </p>

        <h3>Die 6 Saulen der Bekanntheit</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {[
            { icon: Star, title: "Bewertungen", desc: "Anzahl, Durchschnitt, Aktualitat und Antwortrate. Ab 50+ Reviews signifikanter Vorteil.", pct: "17 %" },
            { icon: Globe, title: "Backlinks", desc: "Links von lokalen Websites, Zeitungen, Verbanden. Qualitat vor Quantitat.", pct: "13 %" },
            { icon: Building2, title: "Citations", desc: "Einheitliche Erwahnungen in Branchenverzeichnissen. NAP-Konsistenz entscheidend.", pct: "7 %" },
            { icon: Users, title: "Markensuchen", desc: "Wie oft wird nach deinem Firmennamen gesucht? Signal fur Bekanntheit.", pct: "~5 %" },
            { icon: TrendingUp, title: "Online-Prasenz", desc: "Social Media, Presseartikel, Forenbeitrage, Blog-Erwahnungen.", pct: "~3 %" },
            { icon: BarChart3, title: "Nutzerverhalten", desc: "Klickrate im Local Pack, Anrufe, Routenanfragen, Website-Besuche.", pct: "~5 %" },
          ].map((item, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.pct}</span>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          Bewertungs-Strategien: <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Bewertungen bekommen</Link> | Linkbuilding: <Link to="/blog/local-link-building-blueprint" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Link Building Blueprint</Link> | Citations: <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz Guide</Link>.
        </p>
      </section>

      {/* Zusammenspiel */}
      <section id="zusammenspiel">
        <h2>Wie die 3 Faktoren zusammenspielen</h2>
        <p>
          Die drei Faktoren wirken nicht isoliert, sondern in Kombination. Hier Beispiele, wie Google abwagt:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Suchanfrage</TableHead>
              <TableHead className="font-bold text-center">Nahe</TableHead>
              <TableHead className="font-bold text-center">Relevanz</TableHead>
              <TableHead className="font-bold text-center">Bekanntheit</TableHead>
              <TableHead className="font-bold">Ergebnis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["„Doner in der Nahe"", "⬆️⬆️⬆️", "⬆️", "➡️", "Nachster Doner gewinnt, egal ob 4.2 oder 4.8 Sterne"],
              ["„Bester Zahnarzt Munchen"", "⬆️", "⬆️⬆️", "⬆️⬆️⬆️", "Top-bewerteter Zahnarzt, auch 3 km entfernt"],
              ["„Notar Koln Ehrenfeld"", "⬆️⬆️", "⬆️⬆️⬆️", "⬆️", "Notar in Ehrenfeld mit passender Kategorie"],
              ["„Pizza Margherita bestellen"", "⬆️⬆️", "⬆️⬆️⬆️", "⬆️⬆️", "Pizzeria mit Menu-Schema und Lieferservice"],
              ["„Backerei Schmidt"", "➡️", "➡️", "⬆️⬆️⬆️", "Markensuche: Google zeigt genau dieses Geschaft"],
            ].map(([anfrage, naehe, relevanz, bekanntheit, ergebnis], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{anfrage}</TableCell>
                <TableCell className="text-center">{naehe}</TableCell>
                <TableCell className="text-center">{relevanz}</TableCell>
                <TableCell className="text-center">{bekanntheit}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{ergebnis}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Local Pack vs Maps */}
      <section id="local-pack" data-ai-summary="true">
        <h2>Local Pack vs. Local Finder vs. Google Maps</h2>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold text-center">Local Pack</TableHead>
              <TableHead className="font-bold text-center">Local Finder</TableHead>
              <TableHead className="font-bold text-center">Google Maps App</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Wo sichtbar", "Google-Suche (SERP)", "Nach Klick auf 'Weitere Orte'", "Maps-App / maps.google.com"],
              ["Anzahl Ergebnisse", "3", "20+", "Unbegrenzt"],
              ["Wettbewerb", "Extrem hoch", "Hoch", "Mittel"],
              ["Traffic-Potenzial", "Sehr hoch (80 % der Klicks)", "Mittel", "Hoch (bei Navigation)"],
              ["Ranking-Faktoren", "Gleich, aber strenger", "Gleich", "Gleich, + Kartenposition"],
              ["Wichtigster Unterschied", "Nur Top 3 sichtbar", "Scrollbare Liste", "Kartenbasierte Darstellung"],
            ].map(([aspekt, pack, finder, maps], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{aspekt}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{pack}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{finder}</TableCell>
                <TableCell className="text-center text-sm text-muted-foreground">{maps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Vertiefung: <Link to="/blog/local-seo-vs-maps-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO vs. Maps SEO — was ist der Unterschied?</Link>
        </p>
      </section>

      <BlogCTAABTest position="middle" articleSlug="wie-google-maps-ranking-funktioniert" />

      {/* Alle Ranking-Signale */}
      <section id="ranking-signale">
        <h2>Alle Ranking-Signale im Detail</h2>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Kategorie</TableHead>
              <TableHead className="font-bold">Gewichtung</TableHead>
              <TableHead className="font-bold">Wichtigste Signale</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["GBP-Signale", "36 %", "Primarkategorie, Nahe, Keywords in Titel, Verifizierung"],
              ["Bewertungs-Signale", "17 %", "Anzahl, Durchschnitt, Aktualitat, Antworten, Keywords in Reviews"],
              ["On-Page-Signale", "18 %", "NAP, lokale Keywords, Schema Markup, Mobile, Domain Authority"],
              ["Link-Signale", "13 %", "Lokale Backlinks, Ankertext-Diversitat, Domain Authority der Quelle"],
              ["Citation-Signale", "7 %", "NAP-Konsistenz, Anzahl, Qualitat der Verzeichnisse"],
              ["Verhaltens-Signale", "5 %", "Klickrate, Anrufe, Routenanfragen, Verweildauer"],
              ["Personalisierung", "4 %", "Suchverlauf, Standort, Geratenyp, Tageszeit"],
            ].map(([kat, gewichtung, signale], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{kat}</TableCell>
                <TableCell className="font-bold text-primary">{gewichtung}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{signale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Alle Faktoren im Detail: <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Maps SEO Ranking-Faktoren</Link> | <Link to="/blog/local-seo-ranking-faktoren-erklaert" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Ranking-Faktoren erklart</Link>.
        </p>
      </section>

      {/* Praxis-Beispiele */}
      <section id="praxis-beispiele">
        <h2>Praxis-Beispiele: Wer rankt und warum</h2>

        <h3>Beispiel 1: Pizzeria in Munchen</h3>
        <div className="bg-muted/50 rounded-xl p-6 my-4">
          <p className="text-sm text-muted-foreground mb-3">Suchanfrage: <strong>„beste Pizza Munchen Schwabing"</strong></p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Platz</TableHead>
                <TableHead className="font-bold">Pizzeria</TableHead>
                <TableHead className="font-bold">Entfernung</TableHead>
                <TableHead className="font-bold">Bewertungen</TableHead>
                <TableHead className="font-bold">Warum dieser Platz?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-primary">1</TableCell>
                <TableCell>Pizzeria A</TableCell>
                <TableCell>800m</TableCell>
                <TableCell>4.7 ★ (340)</TableCell>
                <TableCell className="text-sm text-muted-foreground">Nah, viele Bewertungen, „Pizza" im Firmennamen, Menu-Schema</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-primary">2</TableCell>
                <TableCell>Pizzeria B</TableCell>
                <TableCell>1.5km</TableCell>
                <TableCell>4.9 ★ (580)</TableCell>
                <TableCell className="text-sm text-muted-foreground">Beste Bewertungen kompensieren grossere Entfernung</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-primary">3</TableCell>
                <TableCell>Pizzeria C</TableCell>
                <TableCell>400m</TableCell>
                <TableCell>4.3 ★ (85)</TableCell>
                <TableCell className="text-sm text-muted-foreground">Am nachsten, aber weniger Bewertungen = nur Platz 3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3>Beispiel 2: Handwerker mit Service-Area</h3>
        <div className="bg-muted/50 rounded-xl p-6 my-4">
          <p className="text-sm text-muted-foreground mb-3">Suchanfrage: <strong>„Klempner Notdienst Koln"</strong></p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Platz 1:</strong> Klempner mit GBP-Kategorie „Notdienst-Klempner", 24/7-Offnungszeiten, 120 Bewertungen. Standort: Koln-Ehrenfeld.</li>
            <li><strong>Platz 2:</strong> Allgemeiner Installateur mit „Klempner"-Kategorie, 200 Bewertungen, aber keine Notdienst-Keywords. Die spezifischere Kategorie von Platz 1 schlagt die hoheren Bewertungszahlen.</li>
            <li><strong>Nicht im Pack:</strong> Klempner mit 4.9 Sternen, aber Standort in Bonn (30 km). Trotz bester Bewertungen: Nahe zu gering.</li>
          </ul>
        </div>
      </section>

      {/* Optimierung */}
      <section id="optimierung">
        <h2>So verbesserst du dein Maps-Ranking: Aktionsplan</h2>

        <h3>Sofort-Massnahmen (Woche 1)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>GBP-Profil vollstandig aufullen: alle Felder, Fotos, Beschreibung</li>
          <li>Praziseste Primarkategorie wahlen</li>
          <li>NAP auf Website = NAP im GBP (exakt identisch)</li>
          <li>LocalBusiness Schema mit GeoCoordinates auf der Website</li>
        </ul>

        <h3>Kurzfristig (Woche 2-4)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Bewertungs-Prozess starten: nach jedem Auftrag aktiv um Bewertung bitten</li>
          <li>Top-10-Branchenverzeichnisse mit konsistenten NAP-Daten eintragen</li>
          <li>Core Web Vitals der Website optimieren (mobil unter 3 Sekunden)</li>
          <li>Auf alle bestehenden Bewertungen antworten</li>
        </ul>

        <h3>Mittelfristig (Monat 2-3)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Lokale Backlinks aufbauen (IHK, Vereine, Partner)</li>
          <li>Standortseiten fur jeden Stadtteil im Einzugsgebiet erstellen</li>
          <li>Google Posts mindestens 1x pro Woche veroffentlichen</li>
          <li>FAQ-Bereich mit Schema Markup auf der Website</li>
        </ul>

        <p>
          Kompletter Aktionsplan: <Link to="/blog/google-maps-ranking-verbessern" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Maps Ranking verbessern</Link> | Vollstandige Checkliste: <Link to="/blog/local-seo-checkliste-komplett" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Die komplette Local SEO Checkliste</Link>.
        </p>
      </section>

      {/* Mythen */}
      <section id="mythen">
        <h2>5 Maps-Ranking-Mythen entlarvt</h2>

        <div className="space-y-4 my-6">
          {[
            { mythos: "Keywords im Firmennamen verbessern das Ranking", realitaet: "Fruher ja, heute bestraft Google Keyword-Stuffing im Namen. Nur dein offizieller Geschaftsname gehort ins GBP. Falsche Keywords konnen zur Suspendierung fuhren." },
            { mythos: "Mehr Bewertungen = automatisch besser ranken", realitaet: "Anzahl allein reicht nicht. Google bewertet auch Durchschnitt, Aktualitat, Antwortrate und ob Reviews Keywords enthalten. 50 gute Reviews schlagen 200 alte ohne Antworten." },
            { mythos: "Mein Buro muss im Stadtzentrum sein", realitaet: "Nahe zum Suchenden zahlt, nicht Nahe zum Zentrum. Ein Handwerker in einem Vorort rankt fur Suchen aus diesem Vorort besser als ein Stadtzentrum-Konkurrent." },
            { mythos: "Google Ads verbessern mein organisches Maps-Ranking", realitaet: "Es gibt keinen direkten Zusammenhang. Bezahlte und organische Rankings sind getrennte Systeme. Indirekt kann Werbung aber Markenbekanntheit erhohen." },
            { mythos: "Einmal optimiert, immer gut gerankt", realitaet: "Maps-Rankings sind dynamisch. Konkurrenten optimieren, neue Bewertungen kommen, Google andert Algorithmen. Kontinuierliche Pflege ist Pflicht." },
          ].map((item, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-5">
                <p className="font-semibold text-destructive text-sm mb-1">❌ Mythos: {item.mythos}</p>
                <p className="text-muted-foreground text-sm">✅ <strong>Realitat:</strong> {item.realitaet}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          Weitere Fehler vermeiden: <Link to="/blog/local-seo-fehler" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Die haufigsten Local SEO Fehler</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      <BlogCTAABTest position="end" articleSlug="wie-google-maps-ranking-funktioniert" />

      <HelpfulnessWidget articleSlug="wie-google-maps-ranking-funktioniert" />

      {/* FAQ */}
      <section id="faq">
        <h2>Haufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default WieGoogleMapsRankingFunktioniert;
