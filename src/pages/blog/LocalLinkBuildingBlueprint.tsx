import ArticleLayout from "@/components/blog/ArticleLayout";
import { RankingFactorChart, ProcessFlow } from "@/components/blog/PillarVisuals";
import { InternalResourceBox } from "@/components/blog/InternalResourceBox";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import PressOutreachTemplates from "@/components/blog/PressOutreachTemplates";
import GuestPostOutlines from "@/components/blog/GuestPostOutlines";
import EventSponsorshipStrategy from "@/components/blog/EventSponsorshipStrategy";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Building2, Newspaper, Users, Trophy, Handshake, Calendar, GraduationCap, Heart, MapPin, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import LinkBuildingOutreachTemplates from "@/components/blog/LinkBuildingOutreachTemplates";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const LocalLinkBuildingBlueprint = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-link-building-blueprint", language)!;

  const tocItems = [
    { id: "warum-lokale-links", title: "Warum lokale Links so wertvoll sind", level: 2 },
    { id: "link-wert-bewerten", title: "Lokale Links bewerten: Die Qualitätsmatrix", level: 2 },
    { id: "partnerschaften", title: "Strategie 1: Lokale Partnerschaften", level: 2 },
    { id: "sponsoring", title: "Strategie 2: Sponsoring & Vereine", level: 2 },
    { id: "lokale-pr", title: "Strategie 3: Lokale PR & Pressearbeit", level: 2 },
    { id: "events", title: "Strategie 4: Event-Links & Community", level: 2 },
    { id: "ihk-kammern", title: "Strategie 5: IHK, Kammern & Verbände", level: 2 },
    { id: "bildung-institutionen", title: "Strategie 6: Bildung & Institutionen", level: 2 },
    { id: "unlinked-mentions", title: "Strategie 7: Unlinked Brand Mentions", level: 2 },
    { id: "content-linkbait", title: "Strategie 8: Lokaler Content als Linkbait", level: 2 },
    { id: "outreach-templates", title: "Outreach-Templates zum Kopieren", level: 2 },
    { id: "dach-link-quellen", title: "DACH-spezifische Link-Quellen", level: 2 },
    { id: "linkbuilding-plan", title: "Der 90-Tage-Linkbuilding-Plan", level: 2 },
    { id: "fehler", title: "Die 10 größten Linkbuilding-Fehler", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Lokale Backlinks signalisieren Google geografische Relevanz und Community-Verankerung",
    "10-20 hochwertige lokale Links schlagen 100 minderwertige Verzeichnis-Links",
    "IHK-, Handwerkskammer- und Verbandslinks gehören zu den stärksten lokalen Trust-Signalen",
    "Sponsoring von Vereinen und Events liefert Links + PR + Community-Sichtbarkeit in einem",
    "Im DACH-Raum bieten regionale Institutionen (WKO, local.ch, Stadtportale) einzigartige Link-Möglichkeiten",
  ];

  const faqItems = [
    {
      question: "Wie viele lokale Backlinks braucht ein kleines Unternehmen?",
      answer: "Qualität schlägt Quantität. 10-20 hochwertige lokale Backlinks von relevanten Quellen (Zeitungen, Verbände, Institutionen) sind mehr wert als 100 Verzeichnis-Links. Fokussiere dich auf Diversität: verschiedene Quelltypen, verschiedene Domains."
    },
    {
      question: "Was kostet lokales Linkbuilding?",
      answer: "Viele lokale Links sind kostenlos (IHK-Eintrag, Unlinked Mentions, Kooperationen). Vereinssponsoring kostet typischerweise 200-1.000 EUR/Jahr und liefert Link + Sichtbarkeit. PR und Events erfordern vor allem Zeitinvestition. Budget: 0-500 EUR/Monat für KMU."
    },
    {
      question: "Sind gekaufte Links für Local SEO gefährlich?",
      answer: "Ja. Google erkennt gekaufte Links zunehmend und bestraft sie mit Ranking-Verlusten. Für lokale Unternehmen ist das Risiko besonders hoch, da der lokale Markt überschaubar ist. Setze stattdessen auf die organischen Strategien in diesem Guide."
    },
    {
      question: "Wie lange dauert es, bis lokale Backlinks wirken?",
      answer: "Einzelne Links können innerhalb von 2-4 Wochen Wirkung zeigen. Ein systematischer Linkbuilding-Aufbau braucht 3-6 Monate für messbare Ranking-Verbesserungen. Die stärkste Wirkung entfaltet sich in Kombination mit GBP-Optimierung und Bewertungen."
    },
    {
      question: "Was sind die besten lokalen Link-Quellen in Deutschland?",
      answer: "Die Top-5 sind: 1) IHK/Handwerkskammer-Eintrags-Seiten (DA 70+), 2) Lokale Tageszeitungen und Stadtmagazine, 3) Stadtportale und kommunale Websites, 4) Branchenverbände und Innungen, 5) Lokale Vereine und Sponsoring-Seiten."
    },
    {
      question: "Funktioniert Gastbeitrag-Linkbuilding für lokale Unternehmen?",
      answer: "Ja, aber anders als bei nationalem SEO. Schreibe für lokale Blogs, Stadtmagazine und regionale Fachportale. Ein Gastbeitrag in der lokalen Zeitung über dein Fachthema bringt mehr als 10 Gastbeiträge auf nationalen Blogs ohne lokalen Bezug."
    },
    {
      question: "Wie finde ich Unlinked Brand Mentions?",
      answer: "Nutze Google Alerts für deinen Firmennamen, Google-Suche mit 'Firmenname -site:deinewebsite.de' oder Tools wie Ahrefs Content Explorer. Kontaktiere Website-Betreiber höflich und bitte um Verlinkung - die Erfolgsquote liegt bei 30-40 %."
    },
    {
      question: "Zahlen NoFollow-Links für lokales SEO?",
      answer: "NoFollow-Links vererben keinen direkten PageRank, sind aber trotzdem wertvoll. Sie diversifizieren dein Linkprofil, bringen Traffic und Markenbekanntheit. Ein NoFollow-Link von einer lokalen Tageszeitung oder einem IHK-Portal ist oft wertvoller als ein DoFollow-Link von einem unbekannten Blog."
    },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Moz: Link Building for Local SEO", url: "https://moz.com/learn/seo/local-link-building", type: "article" as const },
    { title: "BrightLocal: Local Link Building Survey", url: "https://www.brightlocal.com/research/", type: "study" as const },
    { title: "Ahrefs: Local Link Building Strategies", url: "https://ahrefs.com/blog/local-link-building/", type: "article" as const },
    { title: "Search Engine Journal: Local Backlinks Guide", url: "https://www.searchenginejournal.com/local-link-building/", type: "article" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      <RankingFactorChart
        title="Link-Wert nach Quelltyp (Local SEO)"
        data={[
          { name: "Lokale Tageszeitungen", value: 92 },
          { name: "IHK / Kammern", value: 85 },
          { name: "Stadtportale / .de/.at/.ch", value: 78 },
          { name: "Branchenverbände", value: 72 },
          { name: "Lokale Sponsoring-Seiten", value: 65 },
          { name: "Regionale Blogs", value: 55 },
          { name: "Allgemeine Verzeichnisse", value: 30 },
        ]}
        source="Einschätzung basierend auf Moz & Whitespark Link-Studien"
      />

      <ProcessFlow
        title="90-Tage Linkbuilding-Plan: Übersicht"
        steps={[
          { number: 1, title: "Audit & Bestandsaufnahme", description: "Vorhandene Backlinks analysieren, Unlinked Mentions finden, Wettbewerber-Links prüfen.", timeframe: "Woche 1–2" },
          { number: 2, title: "Quick Wins: Verzeichnisse & IHK", description: "In alle relevanten lokalen Verzeichnisse eintragen. IHK/Kammer-Profile vervollständigen.", timeframe: "Woche 2–3" },
          { number: 3, title: "Partnerschaften & Sponsoring", description: "Lokale Kooperationspartner kontaktieren, Vereinssponsoring abschließen.", timeframe: "Woche 3–6" },
          { number: 4, title: "Lokale PR & Events", description: "Pressemitteilungen an lokale Medien, Events organisieren oder sponsern.", timeframe: "Woche 4–8" },
          { number: 5, title: "Content-Linkbait", description: "Lokale Studien, Statistiken oder Guides veröffentlichen, die natürlich verlinkt werden.", timeframe: "Woche 6–10" },
          { number: 6, title: "Outreach & Nachverfolgung", description: "Systematisches Outreach, Unlinked Mentions konvertieren, Beziehungen pflegen.", timeframe: "Woche 8–12" },
        ]}
      />

      {/* Warum lokale Links */}
      <section id="warum-lokale-links" data-ai-summary="true">
        <h2>Warum lokale Backlinks so wertvoll sind</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Lokale Backlinks</strong> sind Verlinkungen von regional relevanten Websites auf dein Unternehmen. Sie signalisieren Google zwei entscheidende Dinge: geografische Relevanz (dein Business ist in der Region verankert) und Vertrauenswürdigkeit (andere lokale Akteure bürgen für dich). Laut der Whitespark-Studie 2024 machen Link-Signale 13 % der Local-Pack-Rankings und 31 % der organischen lokalen Rankings aus.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Lokale Links vs. Allgemeine Links</TableHead>
              <TableHead className="font-bold text-center">Lokal</TableHead>
              <TableHead className="font-bold text-center">Allgemein</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Geografische Relevanz-Signal</TableCell>
              <TableCell className="text-center font-semibold text-primary">Stark</TableCell>
              <TableCell className="text-center text-muted-foreground">Keines</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Community-Trust-Signal</TableCell>
              <TableCell className="text-center font-semibold text-primary">Stark</TableCell>
              <TableCell className="text-center text-muted-foreground">Schwach</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Wirkung auf Local Pack</TableCell>
              <TableCell className="text-center font-semibold text-primary">Hoch</TableCell>
              <TableCell className="text-center text-muted-foreground">Gering</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Aufwand</TableCell>
              <TableCell className="text-center">Mittel</TableCell>
              <TableCell className="text-center">Hoch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kosten</TableCell>
              <TableCell className="text-center">Meist kostenlos</TableCell>
              <TableCell className="text-center">Oft teuer</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Referral-Traffic</TableCell>
              <TableCell className="text-center font-semibold text-primary">Relevanter</TableCell>
              <TableCell className="text-center text-muted-foreground">Weniger relevant</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Grundlagen zu allen Ranking-Faktoren: <Link to="/blog/local-seo-ranking-faktoren-erklaert" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Ranking-Faktoren erklärt</Link>. Für die Gesamtstrategie: <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Ultimate Guide Local SEO</Link>.
        </p>
      </section>

      {/* Qualitätsmatrix */}
      <section id="link-wert-bewerten" data-ai-summary="true">
        <h2>Lokale Links bewerten: Die Qualitätsmatrix</h2>
        <p>
          Nicht jeder lokale Link ist gleich wertvoll. Nutze diese Matrix, um Prioritäten zu setzen:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Link-Quelle</TableHead>
              <TableHead className="font-bold">Typ. DA</TableHead>
              <TableHead className="font-bold">Lokaler Wert</TableHead>
              <TableHead className="font-bold">Schwierigkeit</TableHead>
              <TableHead className="font-bold">Kosten</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Lokale Tageszeitung", "60-80", "Exzellent", "Hoch", "Kostenlos (PR)"],
              ["IHK / Handwerkskammer", "70-85", "Exzellent", "Niedrig", "Mitgliedschaft"],
              ["Stadtportal / Kommune", "50-70", "Sehr hoch", "Mittel", "Kostenlos"],
              ["Lokaler Verein (Sponsor)", "20-40", "Hoch", "Niedrig", "200-1.000 EUR/Jahr"],
              ["Regionale Hochschule", "60-80", "Sehr hoch", "Hoch", "Kostenlos"],
              ["Lokaler Blogger", "15-35", "Hoch", "Mittel", "Kostenlos/Produkt"],
              ["Branchenverband / Innung", "40-65", "Sehr hoch", "Niedrig", "Mitgliedschaft"],
              ["Veranstaltungs-Seite", "30-50", "Hoch", "Mittel", "Event-Kosten"],
              ["Kooperationspartner", "20-50", "Hoch", "Niedrig", "Kostenlos"],
              ["Lokale Charity / NGO", "30-50", "Hoch", "Niedrig", "Spende"],
            ].map(([quelle, da, wert, schwierigkeit, kosten], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{quelle}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{da}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    wert === "Exzellent" ? "bg-primary/15 text-primary" :
                    wert === "Sehr hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {wert}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{schwierigkeit}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{kosten}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Strategie 1: Partnerschaften */}
      <section id="partnerschaften">
        <h2>Strategie 1: Lokale Partnerschaften & Kooperationen</h2>
        <p>
          Komplementäre lokale Unternehmen sind die einfachste und nachhaltigste Quelle für lokale Links:
        </p>

        <h3>Partnerschafts-Modelle</h3>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { icon: Handshake, title: "Gegenseitige Empfehlung", desc: "Partner-Seite mit Logo + Link auf beiden Websites. Beispiel: Zahnarzt empfiehlt Kieferorthopaden, Hochzeitsfotograf empfiehlt Florist." },
            { icon: Users, title: "Gemeinsame Aktionen", desc: "Gemeinsames Angebot oder Event bewerben. Beispiel: Restaurant + Weinhandlung = 'Wine & Dine'-Abend mit gegenseitiger Verlinkung." },
            { icon: MapPin, title: "Nachbarschafts-Netzwerk", desc: "Alle Unternehmen in einer Straße oder einem Quartier verlinken sich gegenseitig. Starkes lokales Cluster-Signal." },
            { icon: Megaphone, title: "Lieferanten-Links", desc: "Lass dich als Referenzkunde auf den Websites deiner Lieferanten listen. Oft übersehen, aber sehr effektiv." },
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

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">💡 Praxis-Tipp</p>
          <p className="text-muted-foreground">
            Erstelle eine <strong>„Unsere Partner"</strong>-Seite auf deiner Website und lade Partner ein, dasselbe zu tun. Das schafft natürliche, kontextrelevante Links — genau was Google belohnt.
          </p>
        </div>
      </section>

      {/* Strategie 2: Sponsoring */}
      <section id="sponsoring">
        <h2>Strategie 2: Sponsoring & Vereine</h2>
        <p data-featured-snippet="true">
          <strong>Vereinssponsoring</strong> ist eine der effektivsten lokalen Linkbuilding-Strategien. Für 200-1.000 EUR pro Jahr erhältst du einen Backlink von der Vereinswebsite, lokale Markenbekanntheit und Community-Engagement — alles positive SEO-Signale, die zusammen stärker wirken als der Link allein.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Sponsoring-Typ</TableHead>
              <TableHead className="font-bold">Typische Kosten</TableHead>
              <TableHead className="font-bold">Link-Qualität</TableHead>
              <TableHead className="font-bold">Zusatznutzen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Lokaler Sportverein", "200-500 EUR/Jahr", "Hoch", "Trikot-Logo, Bandenwerbung, Vereinsfeste"],
              ["Jugendmannschaft", "100-300 EUR/Jahr", "Hoch", "Besonders gutes Community-Signal"],
              ["Kulturverein / Chor", "100-300 EUR/Jahr", "Mittel", "Konzert-Programme, Flyer"],
              ["Freiwillige Feuerwehr", "200-500 EUR/Jahr", "Hoch", "Hohes lokales Ansehen, DA oft 30+"],
              ["Schulförderverein", "100-300 EUR/Jahr", "Mittel-Hoch", "Schulwebsite = .edu-ähnliches Signal"],
              ["Charity / Soziales", "Spende variabel", "Hoch", "CSR-Signal, PR-Möglichkeit"],
            ].map(([typ, kosten, qualitaet, zusatz], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{typ}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{kosten}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    qualitaet === "Hoch" ? "bg-primary/10 text-primary" :
                    qualitaet === "Mittel-Hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {qualitaet}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{zusatz}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Strategie 3: PR */}
      <section id="lokale-pr">
        <h2>Strategie 3: Lokale PR & Pressearbeit</h2>
        <p>
          Lokale Medien-Links gehören zu den <strong>wertvollsten Backlinks überhaupt</strong> (DA 60-80). Die Hürde ist höher, aber der Effekt enorm:
        </p>

        <h3>PR-Anlass-Typen, die funktionieren</h3>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Anlass</TableHead>
              <TableHead className="font-bold">Medien-Interesse</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Geschäftseröffnung / Jubiläum", "Hoch", "20 Jahre Bäckerei Schmidt in Schwabing"],
              ["Auszeichnung / Award", "Sehr hoch", "Handwerkspreis, Beste Pizzeria 2026"],
              ["Soziales Engagement", "Hoch", "Freie Haarschnitte für Obdachlose"],
              ["Lokale Studie / Datenerhebung", "Sehr hoch", "Umfrage: Was Münchner über Zahnärzte denken"],
              ["Expertenmeinung zu aktuellem Thema", "Mittel", "Handwerker-Tipps: Heizung winterfest machen"],
              ["Ungewöhnliche Geschichte", "Sehr hoch", "Wie ein Dönerstand zum Google-Maps-Star wurde"],
            ].map(([anlass, interesse, beispiel], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{anlass}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    interesse === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    interesse === "Hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {interesse}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{beispiel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h3>Lokale Medien-Kontaktliste aufbauen</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Tageszeitungen:</strong> Lokalteil-Redaktion direkt kontaktieren (Name des Redakteurs recherchieren)</li>
          <li><strong>Stadtmagazine:</strong> Oft offener für ungewöhnliche Geschichten</li>
          <li><strong>Lokale Radio-Sender:</strong> Morgenshow-Teams suchen ständig lokale Stories</li>
          <li><strong>Regionale Online-Portale:</strong> Niedrigere Hürde, oft schneller verlinkt</li>
          <li><strong>Lokale Blogger & Influencer:</strong> Micro-Influencer mit 1.000-10.000 Followern in deiner Stadt</li>
        </ul>
      </section>

      {/* Strategie 4: Events */}
      <section id="events">
        <h2>Strategie 4: Event-Links & Community-Engagement</h2>
        <p>
          Events generieren natürliche Links von Veranstaltungs-Kalendern, lokalen Medien und Teilnehmer-Blogs:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            { icon: Calendar, title: "Eigene Events veranstalten", desc: "Tag der offenen Tür, Workshops, Tastings. Einträge in lokale Event-Kalender = automatische Links." },
            { icon: Trophy, title: "Wettbewerbe sponsern", desc: "Lokale Kochwettbewerbe, Schreib-Contests, Sport-Turniere. Dein Name + Link auf allen Werbematerialien." },
            { icon: Heart, title: "Charity-Events", desc: "Benefiz-Aktionen generieren PR + Links + Community-Goodwill. Dreifach-Effekt für lokales SEO." },
            { icon: GraduationCap, title: "Bildungs-Events", desc: "Kostenlose Workshops (z.B. 'Steuerberater erklärt die Steuererklärung'). Positioniert als Experte + generiert Links." },
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

        <p>
          Mehr Event-Marketing-Strategien: <Link to="/blog/lokale-events-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Lokale Events Marketing Guide</Link>.
        </p>
      </section>

      {/* Strategie 5: IHK & Kammern */}
      <section id="ihk-kammern" data-ai-summary="true">
        <h2>Strategie 5: IHK, Kammern & Verbände</h2>
        <p data-featured-snippet="true">
          <strong>Links von Industrie- und Handelskammern, Handwerkskammern und Berufsverbänden</strong> gehören zu den stärksten lokalen Trust-Signalen. Diese Websites haben typischerweise eine Domain Authority von 70-85 und gelten bei Google als besonders vertrauenswürdig. Die Eintragung ist in den meisten Fällen kostenlos über die bestehende Mitgliedschaft.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Institution</TableHead>
              <TableHead className="font-bold">Land</TableHead>
              <TableHead className="font-bold">Typ. DA</TableHead>
              <TableHead className="font-bold">Link-Art</TableHead>
              <TableHead className="font-bold">Aktion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["IHK (Industrie- und Handelskammer)", "DE", "75-85", "Mitgliederverzeichnis", "Profil vollständig ausfüllen"],
              ["HWK (Handwerkskammer)", "DE", "65-80", "Betriebsdatenbank", "Eintrag prüfen + Website-Link"],
              ["Ärztekammer / Zahnarztkammer", "DE", "60-75", "Arztsuche", "Profil mit Website verlinken"],
              ["Rechtsanwaltskammer", "DE", "65-80", "Anwaltssuche", "Kanzlei-Website eintragen"],
              ["WKO (Wirtschaftskammer)", "AT", "80-90", "Firmen A-Z", "Firmenprofil aktualisieren"],
              ["Gewerbeverein / KMU-Verband", "CH", "40-60", "Mitglieder-Seite", "Logo + Link einreichen"],
              ["Branchenverband / Innung", "DACH", "40-65", "Mitglieder-Liste", "Website-Link hinzufügen"],
            ].map(([inst, land, da, art, aktion], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{inst}</TableCell>
                <TableCell>{land}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{da}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{art}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{aktion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Strategie 6: Bildung */}
      <section id="bildung-institutionen">
        <h2>Strategie 6: Bildung & Institutionen</h2>
        <p>
          Links von Bildungseinrichtungen und öffentlichen Institutionen haben besonders hohes Vertrauen:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Hochschulen:</strong> Praktikums-Angebote, Gastvorlesungen, Forschungskooperationen</li>
          <li><strong>VHS / Volkshochschule:</strong> Dozenten-Tätigkeit mit Link auf Kursseite</li>
          <li><strong>Schulen:</strong> Berufsinformationstage, Schulpatenschaften, Schulprojekte</li>
          <li><strong>Stadtbibliothek:</strong> Lesungen, Workshops, Empfehlungslisten</li>
          <li><strong>Kommunale Websites:</strong> Gewerberegister, Neuburger-Informationen</li>
        </ul>
      </section>

      {/* Strategie 7: Unlinked Mentions */}
      <section id="unlinked-mentions">
        <h2>Strategie 7: Unlinked Brand Mentions</h2>
        <p>
          Oft wirst du bereits online erwähnt — nur ohne Link. Diese <strong>Unlinked Mentions</strong> sind die niedrig hängendsten Früchte:
        </p>

        <h3>So findest du Unlinked Mentions</h3>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Google-Suche:</strong> <code>"Firmenname" -site:deinewebsite.de</code> — zeigt alle Erwähnungen</li>
          <li><strong>Google Alerts:</strong> Richte Alerts für deinen Firmennamen + Inhabernamen ein</li>
          <li><strong>Ahrefs Content Explorer:</strong> Suche nach Marken-Erwähnungen ohne Backlink</li>
          <li><strong>Manuell:</strong> Prüfe Branchenberichte, Presseartikel, Blog-Erwähnungen</li>
        </ol>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">📊 Erfolgsquote</p>
          <p className="text-muted-foreground">
            Die Erfolgsquote bei Unlinked-Mention-Outreach liegt bei <strong>30-40 %</strong>. Besonders hoch bei Zeitungsartikeln und Blog-Posts, wo der Autor dich bereits positiv erwähnt.
          </p>
        </div>
      </section>

      {/* Strategie 8: Lokaler Content als Linkbait */}
      <section id="content-linkbait">
        <h2>Strategie 8: Lokaler Content als Linkbait</h2>
        <p>
          Erstelle Inhalte, die andere lokale Websites <strong>freiwillig verlinken wollen</strong>:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Content-Typ</TableHead>
              <TableHead className="font-bold">Beispiel</TableHead>
              <TableHead className="font-bold">Warum es verlinkt wird</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Lokale Studie / Umfrage", "Die 10 beliebtesten Restaurants in Köln (eigene Umfrage)", "Einzigartige Daten, die niemand sonst hat"],
              ["Lokaler Guide", "Ultimativer Guide: Wohnungssanierung in Wiener Altbauten", "Referenz-Resource für ein lokales Thema"],
              ["Infografik mit Lokaldaten", "Mietpreisentwicklung in Zürich nach Quartier", "Visuell teilbar, leicht zu verlinken"],
              ["Jährliche Übersicht", "Die besten Handwerker-Tipps für den Hamburger Winter", "Wiederkehrender Anlass, saisonale Links"],
              ["Kostenloser Rechner / Tool", "Renovierungskosten-Rechner für München", "Dauerhafter Nutzen = dauerhafte Links"],
            ].map(([typ, beispiel, warum], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{typ}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{beispiel}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{warum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Content-Strategien im Detail: <Link to="/blog/local-content-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Content Marketing Guide</Link>.
        </p>
      </section>

      {/* Outreach-Templates */}
      <section id="outreach-templates">
        <LinkBuildingOutreachTemplates
          title="Outreach-Templates zum Kopieren"
          description="15 kopierfertige E-Mail-Vorlagen für jede Link-Building-Strategie. Wähle eine Kategorie, passe die [Platzhalter] an und sende ab."
        />
      </section>

      {/* DACH-spezifische Quellen */}
      <section id="dach-link-quellen">
        <h2>DACH-spezifische Link-Quellen</h2>

        <h3>🇩🇪 Deutschland</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>IHK-Mitgliederverzeichnis</strong> (DA 75-85) — Pflicht für jedes Unternehmen</li>
          <li><strong>Stadtportale</strong> (muenchen.de, hamburg.de, etc.) — Gewerbeverzeichnisse</li>
          <li><strong>Regionale Tageszeitungen</strong> (Süddeutsche, Hamburger Abendblatt, Kölner Stadt-Anzeiger)</li>
          <li><strong>meinestadt.de</strong> (DA 70+) — Branchen- und Veranstaltungs-Einträge</li>
          <li><strong>Lokale Netzwerke:</strong> BNI-Gruppen, Unternehmerstammtische</li>
        </ul>

        <h3>🇦🇹 Österreich</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>WKO Firmen A-Z</strong> (DA 85+) — Stärkster österreichischer Verzeichnis-Link</li>
          <li><strong>Herold.at</strong> (DA 70+) — Pflicht-Eintrag</li>
          <li><strong>Regionale Medien:</strong> Kurier, Kleine Zeitung, OON</li>
          <li><strong>Tourismusverbände</strong> — Besonders wertvoll für Gastro und Hotels</li>
        </ul>

        <h3>🇨🇭 Schweiz</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>local.ch / search.ch</strong> (DA 80+) — Die dominierenden Verzeichnisse</li>
          <li><strong>Gewerbevereine</strong> — Kantonale und kommunale Netzwerke</li>
          <li><strong>Regionale Medien:</strong> NZZ (lokal), Tages-Anzeiger, Basler Zeitung</li>
          <li><strong>Schweiz Tourismus</strong> — Für Gastro, Hotels, Erlebnisanbieter</li>
        </ul>

        <p>
          Alle Verzeichnisse im Detail: <Link to="/citation-verzeichnisse" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Citation-Verzeichnisse DACH</Link> | <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz Guide</Link>.
        </p>
      </section>

      <EventSponsorshipStrategy compact />

      {/* 90-Tage-Plan */}
      <section id="linkbuilding-plan">
        <h2>Der 90-Tage-Linkbuilding-Plan</h2>

        <h3>Woche 1-2: Quick Wins (0 EUR)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>IHK/HWK/WKO-Profil mit Website-Link aktualisieren</li>
          <li>Branchenverband/Innung-Mitgliederprofil prüfen</li>
          <li>5 Unlinked Brand Mentions finden und Outreach starten</li>
          <li>Partner-Seite auf eigener Website erstellen</li>
          <li>3 komplementäre lokale Unternehmen für Kooperation kontaktieren</li>
        </ul>

        <h3>Woche 3-4: Sponsoring & Community (200-500 EUR)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>2-3 lokale Vereine für Sponsoring recherchieren</li>
          <li>Sponsoring-Verträge abschließen, Logo + Link auf Vereinswebsites</li>
          <li>Lokale Event-Kalender nach Teilnahme-Möglichkeiten durchsuchen</li>
          <li>Lieferanten-Websites prüfen — als Referenzkunde listen lassen</li>
        </ul>

        <h3>Woche 5-8: PR & Content (Zeitinvestition)</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Lokale Medien-Kontaktliste mit 10+ Kontakten aufbauen</li>
          <li>1 PR-würdigen Anlass planen (Jubiläum, Aktion, Studie)</li>
          <li>1 Linkbait-Content erstellen (lokaler Guide, Infografik, Rechner)</li>
          <li>Gastbeitrag für lokalen Blog oder Stadtmagazin anbieten</li>
        </ul>

        <h3>Woche 9-12: Skalieren & Pflegen</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Backlink-Profil in Search Console / Ahrefs analysieren</li>
          <li>Kaputte/verlorene Links identifizieren und wiederherstellen</li>
          <li>Neue Kooperationen und Sponsoring-Möglichkeiten evaluieren</li>
          <li>Linkbuilding-Prozess dokumentieren und monatlich wiederholen</li>
        </ul>

        <p>
          Gesamtstrategie für KMU: <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Strategie für kleine Unternehmen</Link>.
        </p>
      </section>

      {/* Fehler */}
      <section id="fehler">
        <h2>Die 10 größten Linkbuilding-Fehler</h2>
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Links kaufen</strong> — Google erkennt das zunehmend, Abstrafung droht</li>
          <li><strong>Nur auf DA achten, lokale Relevanz ignorieren</strong> — Ein DA-25-Link vom Nachbarschaftsverein schlägt einen DA-60-Link ohne Ortsbezug</li>
          <li><strong>Massen-Verzeichnis-Einträge</strong> — 20 qualitative Einträge schlagen 200 Spam-Verzeichnisse</li>
          <li><strong>Unnatürliche Ankertexte</strong> — Immer den gleichen Keyword-Ankertext verwenden ist ein Red Flag</li>
          <li><strong>Linkbuilding ohne Content</strong> — Ohne gute Landingpage verpufft der beste Link</li>
          <li><strong>IHK/Kammer-Links vergessen</strong> — Die einfachsten, stärksten lokalen Links, oft übersehen</li>
          <li><strong>Nicht auf nofollow/dofollow achten</strong> — Beides ist wertvoll, aber dofollow-Links haben stärkere Ranking-Wirkung</li>
          <li><strong>Einmalige Aktion statt Prozess</strong> — Linkbuilding ist ein Dauerläufer, kein Sprint</li>
          <li><strong>Keine Link-Pflege</strong> — Links können verschwinden (Redesigns, 404s) — regelmäßig prüfen</li>
          <li><strong>Konkurrenz ignorieren</strong> — Analysiere die Backlinks deiner Top-3-Konkurrenten und lerne daraus</li>
        </ol>

        <p>
          Alle Local-SEO-Fehler: <Link to="/blog/local-seo-fehler" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Fehler Guide</Link>. Auch hilfreich: <Link to="/blog/local-link-building" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">unser grundlegender Local Linkbuilding Guide</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      <InternalResourceBox
        title="🔗 Linkbuilding Ressourcen"
        variant="grid"
        resources={[
          { label: "NAP-Konsistenz Guide", href: "/blog/nap-konsistenz-local-seo", type: "guide", description: "Citations richtig aufbauen" },
          { label: "Citation-Verzeichnisse DACH", href: "/citation-verzeichnisse", type: "tool", description: "Alle wichtigen Verzeichnisse" },
          { label: "Lokale Events Marketing", href: "/blog/lokale-events-marketing", type: "guide", description: "Event-Links generieren" },
          { label: "E-E-A-T Guide", href: "/blog/e-e-a-t-lokale-unternehmen", type: "guide", description: "Autorität aufbauen" },
          { label: "Ranking-Faktoren erklärt", href: "/blog/local-seo-ranking-faktoren-erklaert", type: "pillar", description: "Link-Signale verstehen" },
          { label: "Content & Marketing Hub", href: "/blog/content-marketing-hub", type: "hub", description: "Content-Strategien" },
        ]}
      />

      <PressOutreachTemplates
        types={["opening", "award", "expert", "trend", "followup"]}
        title="Presse-Vorlagen: PR-gesteuerte Backlinks gewinnen"
        description="Kopierfertige E-Mail-Templates für lokale Journalisten – ideal für Pressemitteilungen mit Link-Potenzial."
      />

      <GuestPostOutlines
        categories={["general", "craft", "legal"]}
        title="Gastbeitrag-Outlines: Content-Vorlagen für Link-Kampagnen"
        description="Fertige Artikel-Gliederungen mit SEO-Hinweisen – ideal für systematisches Gastbeitrag-Linkbuilding."
      />

      <HelpfulnessWidget articleSlug="local-link-building-blueprint" />

      {/* FAQ */}
      <section id="faq">
        <h2>Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalLinkBuildingBlueprint;
