import ArticleLayout from "@/components/blog/ArticleLayout";
import { RankingFactorChart, ComparisonRadar, GradientBarChart } from "@/components/blog/PillarVisuals";
import { InternalResourceBox } from "@/components/blog/InternalResourceBox";
import AiSearchOptNote from "@/components/blog/AiSearchOptNote";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const LocalSeoRankingFaktorenErklaert = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-ranking-faktoren-erklaert", language)!;

  const tocItems = [
    { id: "ueberblick", title: "Überblick: Wie Google lokal rankt", level: 2 },
    { id: "drei-saeulen", title: "Die 3 Säulen: Relevanz, Entfernung, Bekanntheit", level: 2 },
    { id: "gbp-signale", title: "Google Business Profil Signale (36 %)", level: 2 },
    { id: "on-page-faktoren", title: "On-Page SEO Faktoren (18 %)", level: 2 },
    { id: "bewertungen", title: "Bewertungs-Signale (17 %)", level: 2 },
    { id: "links", title: "Link-Signale (13 %)", level: 2 },
    { id: "citations", title: "Citation-Signale (7 %)", level: 2 },
    { id: "behavioral", title: "Verhaltens-Signale (6 %)", level: 2 },
    { id: "personalisierung", title: "Personalisierung & Sonstiges (3 %)", level: 2 },
    { id: "vergleich-local-pack-organisch", title: "Local Pack vs. organische Faktoren", level: 2 },
    { id: "gewichtung-nach-branche", title: "Gewichtung nach Branche", level: 2 },
    { id: "dach-besonderheiten", title: "DACH-Besonderheiten", level: 2 },
    { id: "aktionsplan", title: "Priorisierter Aktionsplan", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Google Business Profil Signale sind mit 36 % der stärkste Einzelfaktor im Local Pack",
    "On-Page SEO (18 %), Bewertungen (17 %) und Links (13 %) bilden zusammen über 80 % der Ranking-Faktoren",
    "Relevanz, Entfernung und Bekanntheit sind die drei Grundprinzipien hinter jedem lokalen Ranking",
    "Die Gewichtung der Faktoren variiert je nach Branche — Gastro gewichtet Bewertungen stärker, Handwerk bevorzugt Citations",
    "Im DACH-Raum spielen regionale Verzeichnisse (Herold.at, local.ch) eine überdurchschnittliche Rolle",
  ];

  const faqItems = [
    {
      question: "Was ist der wichtigste Local SEO Ranking-Faktor?",
      answer: "Das vollständig optimierte Google Business Profil ist mit 36 % Gewichtung der stärkste Einzelfaktor. Dazu gehören: richtige Primärkategorie, vollständige Informationen, regelmäßige Google Posts und hochwertige Fotos. In Kombination mit 20+ positiven Bewertungen entsteht das stärkste lokale Ranking-Signal."
    },
    {
      question: "Wie wichtig ist die Entfernung zum Suchenden?",
      answer: "Die Entfernung (Proximity) ist ein Ranking-Faktor, den du nicht direkt beeinflussen kannst. Google zeigt bevorzugt Unternehmen in der Nähe des Suchenden. Allerdings können hervorragende GBP-Optimierung, viele Bewertungen und starke lokale Autorität dazu führen, dass du auch für entferntere Nutzer rankst."
    },
    {
      question: "Welche Ranking-Faktoren kann ich am schnellsten verbessern?",
      answer: "Die schnellsten Hebel sind: 1) GBP vollständig ausfüllen (sofortige Wirkung), 2) Bewertungen aktiv einholen (2–4 Wochen), 3) NAP-Konsistenz in Verzeichnissen herstellen (2–6 Wochen). On-Page-Optimierung und Linkbuilding wirken langsamer, dafür nachhaltiger."
    },
    {
      question: "Unterscheiden sich die Ranking-Faktoren zwischen Local Pack und organischen Ergebnissen?",
      answer: "Ja, erheblich. Im Local Pack dominieren GBP-Signale (36 %) und Bewertungen (17 %). In den organischen lokalen Ergebnissen hingegen sind On-Page-Faktoren (34 %) und Backlinks (31 %) deutlich wichtiger. Eine vollständige Strategie muss beide Bereiche abdecken."
    },
    {
      question: "Wie oft ändern sich die Local SEO Ranking-Faktoren?",
      answer: "Google aktualisiert seinen Algorithmus kontinuierlich. Die Grundpfeiler (GBP, Bewertungen, Citations, Links) bleiben stabil, aber ihre Gewichtung verschiebt sich. 2025/2026 gewinnen Verhaltens-Signale (Klickrate, Verweildauer) und AI-Relevanz an Bedeutung. Die Whitespark-Studie wird jährlich aktualisiert."
    },
    {
      question: "Spielen Social-Media-Signale eine Rolle für lokale Rankings?",
      answer: "Direkte Social-Media-Signale (Likes, Shares) sind kein bestätigter Google-Ranking-Faktor. Indirekt helfen sie jedoch durch: erhöhte Markenbekanntheit (mehr Branded Searches), Traffic-Signale und potenzielle Backlink-Generierung. Für Local SEO ist die Zeit besser in GBP-Posts und Bewertungen investiert."
    },
    {
      question: "Wie beeinflusst die Klickrate (CTR) mein lokales Ranking?",
      answer: "Die Klickrate ist ein indirekter Ranking-Faktor. Einträge mit ansprechenden Fotos, vollständigen Informationen und guten Bewertungen erhalten mehr Klicks — was Google als Relevanzsignal wertet. Optimiere Titel, Kategorie und Beschreibung deines GBP für maximale CTR."
    },
    {
      question: "Welche Ranking-Faktoren sind für das Local Pack vs. lokale organische Ergebnisse unterschiedlich?",
      answer: "Im Local Pack zählen GBP-Signale (36 %), Bewertungen (17 %) und Proximity (14 %) am stärksten. In den organischen Ergebnissen dominieren On-Page-Faktoren (34 %) und Backlinks (31 %). Eine vollständige Local-SEO-Strategie muss beide Bereiche mit unterschiedlichen Schwerpunkten abdecken."
    },
  ];

  const sources = [
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "BrightLocal: Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study" as const },
    { title: "Google: How to improve your local ranking", url: "https://support.google.com/business/answer/7091", type: "documentation" as const },
    { title: "Moz: The State of Local SEO Industry Report", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
    { title: "Search Engine Journal: Local SEO Ranking Factors", url: "https://www.searchenginejournal.com/local-seo-ranking-factors/", type: "article" as const },
    { title: "Semrush: Local SEO Study 2024", url: "https://www.semrush.com/blog/local-seo-study/", type: "study" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />
      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Überblick */}
      <section id="ueberblick" data-ai-summary="true">
        <h2>Überblick: Wie Google lokal rankt</h2>
        <p data-featured-snippet="true" data-speakable="true">
          <strong>Local SEO Ranking-Faktoren</strong> sind die Signale, anhand derer Google entscheidet, welche Unternehmen bei standortbezogenen Suchanfragen in den Top-Ergebnissen erscheinen. Google bewertet dabei über 200 Einzelfaktoren, die sich in sieben Hauptkategorien einteilen lassen: Google Business Profil (36 %), On-Page SEO (18 %), Bewertungen (17 %), Links (13 %), Citations (7 %), Verhaltens-Signale (6 %) und Personalisierung (3 %).
        </p>
        <p>
          Dieser Guide basiert auf den aktuellen Daten der <strong>Whitespark Local Search Ranking Factors Studie 2024</strong> und der <strong>Moz Local SEO Industry Report</strong> — den beiden maßgeblichen Quellen, die jährlich tausende SEO-Experten zur Gewichtung lokaler Ranking-Faktoren befragen.
        </p>
        <p>
          Für die grundlegenden Konzepte von Local SEO empfehlen wir unseren <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Ultimate Guide Local SEO</Link>. Wer direkt umsetzen will, findet den Aktionsplan in unserer <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local-SEO-Strategie für kleine Unternehmen</Link>.
        </p>
      </section>

      {/* Die 3 Säulen */}
      <section id="drei-saeulen" data-ai-summary="true">
        <h2>Die 3 Säulen: Relevanz, Entfernung, Bekanntheit</h2>
        <p>
          Bevor wir in die Detailfaktoren eintauchen: Google selbst nennt <strong>drei Grundprinzipien</strong>, die jedes lokale Ranking bestimmen:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Prinzip</TableHead>
              <TableHead className="font-bold">Definition</TableHead>
              <TableHead className="font-bold">Beeinflussbar?</TableHead>
              <TableHead className="font-bold">Wie optimieren</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold text-primary">Relevanz</TableCell>
              <TableCell>Wie gut dein Eintrag zur Suchanfrage passt</TableCell>
              <TableCell className="font-medium text-primary">✅ Ja</TableCell>
              <TableCell>Kategorien, Keywords, Beschreibung, Website-Content</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">Entfernung</TableCell>
              <TableCell>Distanz zwischen Nutzer und Unternehmen</TableCell>
              <TableCell className="font-medium text-destructive">❌ Kaum</TableCell>
              <TableCell>Einzugsgebiet definieren, lokale Landingpages</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-primary">Bekanntheit</TableCell>
              <TableCell>Wie bekannt/vertrauenswürdig dein Unternehmen ist</TableCell>
              <TableCell className="font-medium text-primary">✅ Ja</TableCell>
              <TableCell>Bewertungen, Citations, Backlinks, Markensuchen</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">💡 Strategische Erkenntnis</p>
          <p className="text-muted-foreground">
            Da du die <strong>Entfernung</strong> nicht ändern kannst, konzentriere 100 % deiner Energie auf <strong>Relevanz</strong> und <strong>Bekanntheit</strong>. Ein perfekt optimiertes Profil mit starken Bewertungen kann die Entfernung oft „überstimmen" — besonders in weniger umkämpften Branchen.
          </p>
        </div>
      </section>

      <RankingFactorChart
        title="Local Pack Ranking-Faktoren nach Gewichtung"
        data={[
          { name: "Google Business Profil", value: 36 },
          { name: "On-Page SEO", value: 18 },
          { name: "Bewertungen", value: 17 },
          { name: "Link-Signale", value: 13 },
          { name: "Citation-Signale", value: 7 },
          { name: "Verhaltens-Signale", value: 6 },
          { name: "Personalisierung", value: 3 },
        ]}
        source="Whitespark Local Search Ranking Factors 2024"
      />

      <ComparisonRadar
        title="Local Pack vs. Organische Ranking-Faktoren"
        labelA="Local Pack"
        labelB="Organisch"
        data={[
          { subject: "GBP-Signale", A: 36, B: 6 },
          { subject: "On-Page SEO", A: 18, B: 34 },
          { subject: "Bewertungen", A: 17, B: 5 },
          { subject: "Backlinks", A: 13, B: 31 },
          { subject: "Citations", A: 7, B: 8 },
          { subject: "Verhalten", A: 6, B: 11 },
          { subject: "Personalisierung", A: 3, B: 5 },
        ]}
      />

      {/* GBP Signale */}
      <section id="gbp-signale" data-ai-summary="true">
        <h2>Google Business Profil Signale (36 %)</h2>
        <p data-featured-snippet="true">
          <strong>Google Business Profil Signale</strong> machen 36 % der Local-Pack-Rankings aus und sind damit der mit Abstand stärkste Einzelfaktor. Dazu gehören die Wahl der Primärkategorie, Vollständigkeit des Profils, Keywords in der Unternehmensbeschreibung und die Regelmäßigkeit von Google Posts.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Signal</TableHead>
              <TableHead className="font-bold">Gewicht</TableHead>
              <TableHead className="font-bold">Optimierung</TableHead>
              <TableHead className="font-bold">Aufwand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Primärkategorie", "Sehr hoch", "Spezifischste Kategorie wählen", "5 Min."],
              ["Zusatzkategorien", "Hoch", "3–5 relevante Kategorien hinzufügen", "5 Min."],
              ["Unternehmensbeschreibung", "Hoch", "750 Zeichen mit Keywords + USP", "15 Min."],
              ["Fotos (Menge & Qualität)", "Hoch", "20+ Bilder: Außen, Innen, Team, Produkte", "30 Min."],
              ["Google Posts", "Mittel", "1–2 pro Woche mit CTA", "10 Min./Post"],
              ["Produkte/Services", "Mittel", "Alle Angebote mit Beschreibung listen", "20 Min."],
              ["Attribute", "Mittel", "Alle zutreffenden aktivieren", "5 Min."],
              ["Q&A-Bereich", "Niedrig", "10 häufige Fragen proaktiv beantworten", "15 Min."],
              ["Öffnungszeiten (inkl. Feiertage)", "Hoch", "Aktuell halten, Sonderzeiten pflegen", "5 Min."],
            ].map(([signal, gewicht, optimierung, aufwand], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{signal}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    gewicht === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    gewicht === "Hoch" ? "bg-primary/10 text-primary" :
                    gewicht === "Mittel" ? "bg-accent/50 text-accent-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {gewicht}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{optimierung}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{aufwand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Schritt-für-Schritt-Anleitung in unserem <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil Guide</Link>. Zur Kategoriewahl: <Link to="/blog/google-business-kategorien-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Kategorien-Guide</Link>.
        </p>
      </section>

      {/* On-Page Faktoren */}
      <section id="on-page-faktoren" data-ai-summary="true">
        <h2>On-Page SEO Faktoren (18 %)</h2>
        <p>
          On-Page-Signale stammen von deiner eigenen Website. Sie bestätigen Google die <strong>Relevanz</strong> deines Unternehmens für bestimmte lokale Suchanfragen.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Faktor</TableHead>
              <TableHead className="font-bold">Gewicht</TableHead>
              <TableHead className="font-bold">Best Practice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["NAP im Footer/Kontaktseite", "Sehr hoch", "Identisch mit GBP auf jeder Seite"],
              ["Lokale Keywords in Title Tags", "Sehr hoch", "[Service] [Stadt] | [Markenname]"],
              ["LocalBusiness Schema Markup", "Hoch", "JSON-LD mit allen Feldern"],
              ["Lokale Landingpages", "Hoch", "1 Seite pro Service + Stadt/Stadtteil"],
              ["H1 mit lokalem Bezug", "Hoch", "Ihr [Service] in [Stadt]"],
              ["Lokaler Content (Blog)", "Mittel", "Regionale Ratgeber, Case Studies"],
              ["Interne Verlinkung", "Mittel", "Hub-Spoke-Struktur mit lokalen Ankertexten"],
              ["Mobile-Optimierung", "Hoch", "Responsive, schnelle Ladezeit, Touch-optimiert"],
              ["Domain Authority", "Mittel", "Langfristiger Aufbau durch Links + Content"],
            ].map(([faktor, gewicht, practice], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{faktor}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    gewicht === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    gewicht === "Hoch" ? "bg-primary/10 text-primary" :
                    "bg-accent/50 text-accent-foreground"
                  }`}>
                    {gewicht}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{practice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Schema Markup Implementierung: <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">LocalBusiness Schema Guide</Link>. Keyword-Strategie: <Link to="/blog/local-seo-keywords-finden" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Keywords Guide</Link>.
        </p>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" data-ai-summary="true">
        <h2>Bewertungs-Signale (17 %)</h2>
        <p data-featured-snippet="true">
          <strong>Bewertungs-Signale</strong> machen 17 % der lokalen Ranking-Faktoren aus. Google bewertet fünf Dimensionen: Gesamtanzahl der Bewertungen, Durchschnittliche Sternebewertung, Aktualität (neue Bewertungen), Antwortrate des Unternehmens und Keywords in Bewertungstexten.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Bewertungs-Signal</TableHead>
              <TableHead className="font-bold">Gewicht</TableHead>
              <TableHead className="font-bold">Zielwert für KMU</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Gesamtanzahl</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">Sehr hoch</span>
              </TableCell>
              <TableCell className="text-muted-foreground">50+ Bewertungen in 6 Monaten</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Durchschnittsbewertung</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">Sehr hoch</span>
              </TableCell>
              <TableCell className="text-muted-foreground">4,5+ Sterne</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Aktualität (Velocity)</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span>
              </TableCell>
              <TableCell className="text-muted-foreground">2–4 neue Bewertungen pro Monat</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Antwortrate</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span>
              </TableCell>
              <TableCell className="text-muted-foreground">100 % — jede Bewertung beantworten</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Keywords in Bewertungstexten</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/50 text-accent-foreground">Mittel</span>
              </TableCell>
              <TableCell className="text-muted-foreground">Natürliche Erwähnung durch Kunden (nicht erzwingen)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Vielfalt der Plattformen</TableCell>
              <TableCell>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/50 text-accent-foreground">Mittel</span>
              </TableCell>
              <TableCell className="text-muted-foreground">Google + 2–3 branchenspezifische Portale</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Detaillierte Strategie: <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Bewertungen aufbauen</Link> | <Link to="/blog/negative-google-bewertungen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Negative Bewertungen managen</Link> | <Link to="/blog/bewertungs-antworten-vorlagen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Antwort-Vorlagen</Link>.
        </p>
      </section>

      {/* Links */}
      <section id="links" data-ai-summary="true">
        <h2>Link-Signale (13 %)</h2>
        <p>
          Backlinks von relevanten, lokalen Websites signalisieren Google <strong>Vertrauen und Autorität</strong>. Für lokale Rankings zählt Qualität deutlich mehr als Quantität.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Link-Typ</TableHead>
              <TableHead className="font-bold">Wert</TableHead>
              <TableHead className="font-bold">Beispiele</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Lokale Nachrichtenseiten", "Sehr hoch", "Tageszeitungen, Stadtmagazine, regionale Blogs"],
              ["Branchenverbände", "Sehr hoch", "IHK, Handwerkskammer, Ärztekammer"],
              ["Lokale Institutionen", "Hoch", "Stadtwebsite, Tourismusverband, Uni"],
              ["Komplementäre Unternehmen", "Hoch", "Gegenseitige Verlinkung mit Partnerbetrieben"],
              ["Sponsoring & Events", "Mittel", "Vereinsseiten, Charity-Events, Schulen"],
              ["Allgemeine Verzeichnisse", "Niedrig", "Branchenbücher, Webkataloge (Vorsicht: Qualität!)"],
            ].map(([typ, wert, beispiele], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{typ}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    wert === "Sehr hoch" ? "bg-primary/15 text-primary" :
                    wert === "Hoch" ? "bg-primary/10 text-primary" :
                    wert === "Mittel" ? "bg-accent/50 text-accent-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {wert}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{beispiele}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Vollständige Strategie mit Outreach-Templates: <Link to="/blog/local-link-building" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Linkbuilding Guide</Link>.
        </p>
      </section>

      {/* Citations */}
      <section id="citations" data-ai-summary="true">
        <h2>Citation-Signale (7 %)</h2>
        <p data-featured-snippet="true">
          <strong>Citations</strong> sind Erwähnungen deines Unternehmens (Name, Adresse, Telefon) in Online-Verzeichnissen und Branchenportalen. Die wichtigsten Citation-Signale sind: NAP-Konsistenz über alle Plattformen, Anzahl der Citations in relevanten Verzeichnissen, und die Qualität/Autorität der Verzeichnisse selbst.
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Citation-Signal</TableHead>
              <TableHead className="font-bold">Gewicht</TableHead>
              <TableHead className="font-bold">Empfehlung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">NAP-Konsistenz</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">Kritisch</span></TableCell>
              <TableCell className="text-muted-foreground">100 % identisch — ein Schreibfehler schadet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Anzahl in Core-Verzeichnissen</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span></TableCell>
              <TableCell className="text-muted-foreground">Top-20 DACH-Verzeichnisse = ausreichend</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Branchenspezifische Portale</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Hoch</span></TableCell>
              <TableCell className="text-muted-foreground">Jameda, TripAdvisor, etc. je nach Branche</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Verzeichnis-Autorität (DA)</TableCell>
              <TableCell><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/50 text-accent-foreground">Mittel</span></TableCell>
              <TableCell className="text-muted-foreground">DA 40+ bevorzugen</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          NAP-Grundlagen: <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz Guide</Link> | Verzeichnislisten: <Link to="/citation-verzeichnisse" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Citation-Verzeichnisse DACH</Link> | Duplikate: <Link to="/blog/duplicate-listing-entfernen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Duplicate Listings entfernen</Link>.
        </p>
      </section>

      {/* Behavioral Signals */}
      <section id="behavioral" data-ai-summary="true">
        <h2>Verhaltens-Signale (6 %)</h2>
        <p>
          Verhaltens-Signale messen, wie Nutzer mit deinem Eintrag interagieren. Google nutzt diese Daten als <strong>Qualitäts-Feedback</strong>:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Signal</TableHead>
              <TableHead className="font-bold">Was Google misst</TableHead>
              <TableHead className="font-bold">So optimierst du</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Klickrate (CTR)", "Wie oft wird dein Eintrag angeklickt vs. gesehen", "Ansprechendes Foto, gute Bewertungen, vollständiger Eintrag"],
              ["Anrufe & Routenanfragen", "Direkte Aktionen aus dem GBP", "Telefonnummer prominent, Google-Posts mit CTAs"],
              ["Website-Klicks", "Klicks auf den Website-Link im GBP", "Attraktive Beschreibung, aktuelle Angebote"],
              ["Verweildauer (Dwell Time)", "Wie lange bleiben Nutzer auf deiner Seite", "Wertvoller Content, schnelle Ladezeit, gute UX"],
              ["Branded Searches", "Wie oft wird dein Name direkt gesucht", "Offline-Marketing, Social Media, PR"],
              ["Bounce Rate", "Nutzer, die sofort zurück zur Suche gehen", "Relevanter Content, klare Navigation, Mobile-Optimierung"],
            ].map(([signal, messung, optimierung], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{signal}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{messung}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{optimierung}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Verhaltens-Signale kannst du nicht direkt „optimieren", aber indirekt verbessern — durch ein hervorragendes Nutzererlebnis. Mehr dazu: <Link to="/blog/core-web-vitals-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Core Web Vitals Guide</Link>.
        </p>
      </section>

      {/* Personalisierung */}
      <section id="personalisierung">
        <h2>Personalisierung & Sonstige Signale (3 %)</h2>
        <p>
          Die restlichen 3 % entfallen auf Faktoren, die du kaum beeinflussen kannst:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Suchhistorie:</strong> Google bevorzugt Unternehmen, die der Nutzer bereits besucht hat</li>
          <li><strong>Gerätetyp:</strong> Mobile Suchen liefern engere lokale Ergebnisse</li>
          <li><strong>Tageszeit:</strong> Geöffnete Geschäfte werden leicht bevorzugt</li>
          <li><strong>Sprach-Präferenzen:</strong> Besonders relevant im mehrsprachigen DACH-Raum (DE/FR/IT in der Schweiz)</li>
        </ul>
      </section>

      {/* Vergleich Local Pack vs. Organisch */}
      <section id="vergleich-local-pack-organisch" data-ai-summary="true">
        <h2>Local Pack vs. organische Faktoren — der Vergleich</h2>
        <p>
          Die Gewichtung der Ranking-Faktoren unterscheidet sich <strong>grundlegend</strong> zwischen Local Pack (Maps) und organischen lokalen Ergebnissen:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Faktor-Kategorie</TableHead>
              <TableHead className="font-bold text-center">Local Pack</TableHead>
              <TableHead className="font-bold text-center">Organisch lokal</TableHead>
              <TableHead className="font-bold">Bedeutung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-primary/5">
              <TableCell className="font-semibold">GBP-Signale</TableCell>
              <TableCell className="text-center font-bold text-primary">36 %</TableCell>
              <TableCell className="text-center font-medium text-muted-foreground">6 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Im Pack dominant, organisch minimal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">On-Page SEO</TableCell>
              <TableCell className="text-center font-medium">18 %</TableCell>
              <TableCell className="text-center font-bold text-primary">34 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Organisch am wichtigsten</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Bewertungen</TableCell>
              <TableCell className="text-center font-medium">17 %</TableCell>
              <TableCell className="text-center font-medium">5 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Im Pack 3× wichtiger</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Link-Signale</TableCell>
              <TableCell className="text-center font-medium">13 %</TableCell>
              <TableCell className="text-center font-bold text-primary">31 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Organisch über 2× so wichtig</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Citations</TableCell>
              <TableCell className="text-center font-medium">7 %</TableCell>
              <TableCell className="text-center font-medium">8 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Ähnlich gewichtet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Verhaltens-Signale</TableCell>
              <TableCell className="text-center font-medium">6 %</TableCell>
              <TableCell className="text-center font-medium">11 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Organisch relevanter</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Personalisierung</TableCell>
              <TableCell className="text-center font-medium">3 %</TableCell>
              <TableCell className="text-center font-medium">5 %</TableCell>
              <TableCell className="text-sm text-muted-foreground">Gering, kaum beeinflussbar</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
          <p className="font-semibold text-foreground mb-2">📊 Strategische Konsequenz</p>
          <p className="text-muted-foreground">
            Für <strong>Local Pack Rankings</strong>: Fokus auf GBP + Bewertungen (zusammen 53 %). Für <strong>organische lokale Rankings</strong>: Fokus auf On-Page + Links (zusammen 65 %). Eine vollständige Strategie muss beides abdecken.
          </p>
        </div>

        <p>
          Tiefer in die Unterschiede: <Link to="/blog/google-maps-seo-vs-organic-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Maps SEO vs. Organic SEO</Link> | <Link to="/blog/local-seo-vs-organisch" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO vs. Organic SEO</Link> | <Link to="/blog/local-seo-vs-maps-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO vs. Maps SEO</Link> | <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Maps Ranking-Faktoren</Link>.
        </p>
      </section>

      {/* Gewichtung nach Branche */}
      <section id="gewichtung-nach-branche">
        <h2>Gewichtung nach Branche</h2>
        <p>
          Die Ranking-Faktoren gewichten sich je nach Branche unterschiedlich. Hier die wichtigsten Unterschiede im DACH-Raum:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Branche</TableHead>
              <TableHead className="font-bold">Wichtigster Faktor</TableHead>
              <TableHead className="font-bold">Zweitwichtigster</TableHead>
              <TableHead className="font-bold">Besonderheit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Gastronomie", "Bewertungen (25 %+)", "GBP-Fotos", "Speisekarte, Öffnungszeiten kritisch"],
              ["Handwerk & Service", "Citations (12 %+)", "GBP-Kategorien", "Einzugsgebiet > Adresse"],
              ["Ärzte & Praxen", "Bewertungen + E-E-A-T", "On-Page (YMYL)", "Jameda als Zweit-Plattform"],
              ["Anwälte", "On-Page + E-E-A-T", "Links (Fachpublikationen)", "YMYL-Content besonders wichtig"],
              ["Einzelhandel", "GBP-Produkte", "Fotos + Bewertungen", "Produktverfügbarkeit als Signal"],
              ["Hotels", "Bewertungen (30 %+)", "OTA-Citations", "Booking.com, TripAdvisor zählen doppelt"],
              ["Fitness & Wellness", "Google Posts", "Bewertungen", "Events und Kurse als Content"],
            ].map(([branche, erster, zweiter, besonderheit], i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{branche}</TableCell>
                <TableCell className="text-sm">{erster}</TableCell>
                <TableCell className="text-sm">{zweiter}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{besonderheit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Branchenspezifische Guides: <Link to="/blog/local-seo-branchen-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Alle Branchen-Guides im Überblick</Link>.
        </p>
      </section>

      {/* DACH-Besonderheiten */}
      <section id="dach-besonderheiten">
        <h2>DACH-Besonderheiten bei Ranking-Faktoren</h2>
        <p>
          Der deutschsprachige Markt hat einige Eigenheiten, die bei der Ranking-Faktor-Optimierung berücksichtigt werden müssen:
        </p>

        <h3>🇩🇪 Deutschland</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Verzeichnisse:</strong> Gelbe Seiten, meinestadt.de, 11880, Das Örtliche haben hohe Autorität</li>
          <li><strong>DSGVO:</strong> Bewertungs-Tools müssen datenschutzkonform sein (kein automatisiertes Tracking)</li>
          <li><strong>Regionale Suchmaschinen:</strong> Ecosia und DuckDuckGo haben ~5 % Marktanteil — nutzen Bing-Daten</li>
        </ul>

        <h3>🇦🇹 Österreich</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Herold.at:</strong> Stärkstes regionales Verzeichnis mit DA 70+ — Pflichtlistung</li>
          <li><strong>WKO:</strong> Wirtschaftskammer-Einträge als Trust-Signal</li>
          <li><strong>Kleinerer Markt:</strong> Weniger Wettbewerb = schnellere Ergebnisse</li>
        </ul>

        <h3>🇨🇭 Schweiz</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Mehrsprachigkeit:</strong> DE/FR/IT erfordern separate Landingpages je Sprachregion</li>
          <li><strong>local.ch & search.ch:</strong> Die dominierenden Verzeichnisse mit DA 80+</li>
          <li><strong>Höhere Kaufkraft:</strong> Keywords mit Kaufintent konvertieren stärker</li>
        </ul>

        <p>
          Länderspezifische Guides: <Link to="/blog/local-seo-schweiz" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Schweiz</Link> | Städte: <Link to="/blog/local-seo-staedte-hub" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Städte-Hub</Link>.
        </p>
      </section>

      {/* Priorisierter Aktionsplan */}
      <section id="aktionsplan">
        <h2>Priorisierter Aktionsplan: Ranking-Faktoren nach Impact</h2>
        <p>
          Basierend auf der Faktor-Gewichtung, hier die optimale Reihenfolge für maximalen ROI:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Priorität</TableHead>
              <TableHead className="font-bold">Maßnahme</TableHead>
              <TableHead className="font-bold">Impact</TableHead>
              <TableHead className="font-bold">Zeitrahmen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["🥇 1", "GBP vollständig optimieren", "36 % der Rankings", "1–2 Tage"],
              ["🥈 2", "20+ Bewertungen aufbauen", "17 % der Rankings", "4–8 Wochen"],
              ["🥉 3", "Website On-Page optimieren", "18 % der Rankings", "1–2 Wochen"],
              ["4", "NAP in 20 Core-Verzeichnissen", "7 % der Rankings", "2–3 Wochen"],
              ["5", "5+ lokale Backlinks aufbauen", "13 % der Rankings", "2–3 Monate"],
              ["6", "Lokalen Content erstellen (4+ Seiten)", "Unterstützt On-Page", "1–2 Monate"],
              ["7", "Schema Markup implementieren", "Unterstützt alle Faktoren", "1 Tag"],
              ["8", "Technisches SEO prüfen", "Verhindert Verluste", "1 Tag"],
            ].map(([prio, massnahme, impact, zeit], i) => (
              <TableRow key={i}>
                <TableCell className="font-bold">{prio}</TableCell>
                <TableCell className="font-medium">{massnahme}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{impact}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{zeit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p>
          Den vollständigen 90-Tage-Plan findest du in unserer <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local-SEO-Strategie für kleine Unternehmen</Link>. Für einen sofortigen Audit: <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Audit Checkliste</Link>.
        </p>
      </section>

      <ArticleCTA variant="box" />

      <InternalResourceBox
        title="📚 Ressourcen zu den Ranking-Faktoren"
        variant="grid"
        resources={[
          { label: "Google Business Profil optimieren", href: "/blog/google-my-business-optimieren", type: "checklist", description: "GBP-Signale maximieren" },
          { label: "Google Bewertungen bekommen", href: "/blog/google-bewertungen-bekommen", type: "guide", description: "Bewertungs-Strategie" },
          { label: "Local Linkbuilding Blueprint", href: "/blog/local-link-building-blueprint", type: "pillar", description: "Link-Signale aufbauen" },
          { label: "NAP-Konsistenz Guide", href: "/blog/nap-konsistenz-local-seo", type: "guide", description: "Citation-Signale" },
          { label: "Schema Markup Guide", href: "/blog/schema-markup-local-seo", type: "guide", description: "Technische Signale" },
          { label: "Local SEO Audit Checkliste", href: "/blog/local-seo-audit-checkliste", type: "tool", description: "Alle Faktoren prüfen" },
        ]}
      />

      {/* FAQ */}
      <section id="faq">
        <h2>Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <AiSearchOptNote articleSlug="local-seo-ranking-faktoren-erklaert" />

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default LocalSeoRankingFaktorenErklaert;
