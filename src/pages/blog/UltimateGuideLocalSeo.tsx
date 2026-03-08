import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import SourcesSection from "@/components/blog/SourcesSection";
import ArticleCTA from "@/components/blog/ArticleCTA";
import DefinitionBox from "@/components/blog/DefinitionBox";
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

const UltimateGuideLocalSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ultimate-guide-local-seo", language)!;

  const tocItems = [
    { id: "was-ist-local-seo", title: "Was ist Local SEO?", level: 2 },
    { id: "warum-local-seo-wichtig", title: "Warum ist Local SEO wichtig?", level: 2 },
    { id: "wie-funktioniert-local-seo", title: "Wie funktioniert Local SEO?", level: 2 },
    { id: "google-business-profil", title: "Google Business Profil optimieren", level: 2 },
    { id: "ranking-faktoren", title: "Die wichtigsten Ranking-Faktoren", level: 2 },
    { id: "on-page-local-seo", title: "On-Page Local SEO", level: 2 },
    { id: "nap-konsistenz", title: "NAP-Konsistenz & Citations", level: 2 },
    { id: "bewertungen", title: "Bewertungen als Ranking-Signal", level: 2 },
    { id: "local-content", title: "Lokaler Content & Linkbuilding", level: 2 },
    { id: "technisches-seo", title: "Technisches Local SEO", level: 2 },
    { id: "dach-besonderheiten", title: "Local SEO in DACH: Besonderheiten", level: 2 },
    { id: "local-seo-strategie", title: "Local-SEO-Strategie in 10 Schritten", level: 2 },
    { id: "tools", title: "Die besten Local-SEO-Tools", level: 2 },
    { id: "trends-2026", title: "Local SEO Trends 2026", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Local SEO steigert die Sichtbarkeit für 46 % aller Google-Suchen mit lokalem Intent",
    "Google Business Profil, NAP-Konsistenz und Bewertungen bilden die drei Säulen",
    "DACH-Märkte haben eigene Verzeichnisse und rechtliche Besonderheiten",
    "Strukturierte Daten (LocalBusiness-Schema) verbessern Rich-Snippet-Chancen um 30 %",
    "Voice Search und AI Overviews verändern Local SEO ab 2026 grundlegend",
  ];

  const faqItems = [
    {
      question: "Was kostet Local SEO?",
      answer: "Grundlegende Local-SEO-Maßnahmen wie die Optimierung des Google Business Profils sind kostenlos. Professionelle Betreuung kostet zwischen 300 und 2.000 € monatlich, je nach Umfang, Wettbewerb und Anzahl der Standorte. Für Einsteiger empfehlen wir unseren kostenlosen SEO-Guide."
    },
    {
      question: "Wie lange dauert es, bis Local SEO Ergebnisse zeigt?",
      answer: "Erste Verbesserungen im Local Pack sind oft nach 4–8 Wochen sichtbar. Bis ein neues Google Business Profil stabil rankt, vergehen typischerweise 3–6 Monate. Faktoren wie Branche, Wettbewerb und bestehende Domain-Autorität beeinflussen die Dauer erheblich."
    },
    {
      question: "Was ist der Unterschied zwischen SEO und Local SEO?",
      answer: "Klassisches SEO optimiert für organische Suchergebnisse unabhängig vom Standort. Local SEO hingegen fokussiert sich auf standortbezogene Suchanfragen und das Google Local Pack (Maps-Ergebnisse). Local SEO berücksichtigt zusätzlich Faktoren wie Entfernung, NAP-Konsistenz und Google-Bewertungen."
    },
    {
      question: "Brauche ich Local SEO, wenn ich keinen Laden habe?",
      answer: "Ja! Auch Dienstleister ohne festes Ladengeschäft (z. B. Handwerker, Berater, mobile Friseure) profitieren von Local SEO. Google Business bietet die Option 'Einzugsgebiet' für Unternehmen, die Kunden vor Ort besuchen. So erscheinst du bei relevanten Suchanfragen in deiner Region."
    },
    {
      question: "Wie wichtig sind Google-Bewertungen für Local SEO?",
      answer: "Google-Bewertungen gehören laut Studien zu den Top-3-Ranking-Faktoren im Local Pack. Die Anzahl, Durchschnittsbewertung, Aktualität und ob du auf Bewertungen antwortest, spielen alle eine Rolle. Unternehmen mit 50+ Bewertungen und 4,5+ Sternen erzielen nachweislich mehr Klicks."
    },
    {
      question: "Funktioniert Local SEO auch für Unternehmen mit mehreren Standorten?",
      answer: "Absolut. Multi-Location-SEO erfordert separate Google Business Profile pro Standort, individuelle Standortseiten auf der Website und konsistente NAP-Daten in allen Verzeichnissen. Jeder Standort muss individuell optimiert werden, um maximale Sichtbarkeit in der jeweiligen Region zu erreichen."
    },
    {
      question: "Welche Rolle spielt KI im Local SEO 2026?",
      answer: "KI verändert Local SEO auf mehreren Ebenen: Google AI Overviews generieren Zusammenfassungen lokaler Suchergebnisse, Voice Search nutzt KI für natürliche Sprachverarbeitung, und KI-gestützte Tools automatisieren Keyword-Recherche und Content-Erstellung. Wer Local SEO 2026 betreibt, muss auch für KI-Systeme optimieren."
    },
    {
      question: "Kann ich Local SEO ohne Website machen?",
      answer: "Ein Google Business Profil funktioniert auch ohne eigene Website und bringt dich ins Local Pack. Für nachhaltige Rankings empfehlen wir aber eine optimierte Website mit Standortseiten, da On-Page-Signale 34 % der organischen lokalen Ranking-Faktoren ausmachen."
    },
    {
      question: "Welche lokalen Verzeichnisse sind 2026 noch relevant?",
      answer: "Die wichtigsten sind Google Business Profil, Apple Business Connect, Bing Places, Yelp und branchenspezifische Portale (z. B. Jameda, TripAdvisor). Im DACH-Raum zusätzlich: Gelbe Seiten, Das Örtliche, local.ch (Schweiz) und Herold.at (Österreich). Qualität und NAP-Konsistenz schlagen Quantität."
    },
  ];

  const sources = [
    { title: "Google: How to improve your local ranking", url: "https://support.google.com/business/answer/7091", type: "documentation" as const },
    { title: "BrightLocal: Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey/", type: "study" as const },
    { title: "Whitespark: Local Search Ranking Factors 2024", url: "https://whitespark.ca/local-search-ranking-factors/", type: "study" as const },
    { title: "Search Engine Journal: Complete Local SEO Guide", url: "https://www.searchenginejournal.com/local-seo/", type: "article" as const },
    { title: "Google: Strukturierte Daten für lokale Unternehmen", url: "https://developers.google.com/search/docs/appearance/structured-data/local-business", type: "documentation" as const },
    { title: "Moz: The State of Local SEO Industry Report", url: "https://moz.com/local-search-ranking-factors", type: "study" as const },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <KeyTakeawaysBox items={keyTakeaways} />

      {/* Was ist Local SEO */}
      <section id="was-ist-local-seo" data-ai-summary="true">
        <h2>Was ist Local SEO? Definition und Grundlagen</h2>

        <DefinitionBox
          term="Local SEO"
          definition="Local SEO (lokale Suchmaschinenoptimierung) bezeichnet alle Maßnahmen, die die Sichtbarkeit eines Unternehmens in standortbezogenen Suchergebnissen verbessern. Es umfasst die Optimierung des Google Business Profiles, lokaler Keywords, Citations, Bewertungen und strukturierter Daten für ein definiertes geografisches Einzugsgebiet."
          examples={[
            'Suchen wie "Bäcker in meiner Nähe", "Anwalt München" oder "Friseur Basel"',
            "Sichtbarkeit im Local Pack (Top-3-Karteneinträge bei Google)",
            "Ranking in Google Maps und organischen lokalen Ergebnissen"
          ]}
        />

        <p>
          <strong>Local SEO</strong> (lokale Suchmaschinenoptimierung) umfasst alle Maßnahmen, die dazu dienen, die Sichtbarkeit eines Unternehmens in standortbezogenen Suchergebnissen zu verbessern. Wenn ein Nutzer „Bäcker in meiner Nähe", „Anwalt München" oder „Friseur Basel" bei Google eingibt, greift Local SEO.
        </p>
        <p>
          Im Kern geht es darum, in drei entscheidenden Bereichen sichtbar zu werden:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Google Local Pack (Maps-Ergebnisse):</strong> Die Top-3-Einträge mit Karte, die bei lokalen Suchen prominent angezeigt werden</li>
          <li><strong>Google Maps:</strong> Die Kartensuche, über die Nutzer direkt Unternehmen finden, Routen planen und anrufen</li>
          <li><strong>Organische lokale Ergebnisse:</strong> Die „klassischen" Suchergebnisse unterhalb des Local Packs mit lokalem Bezug</li>
        </ul>
        <p>
          Local SEO unterscheidet sich grundlegend vom allgemeinen SEO: Während klassische Suchmaschinenoptimierung auf globale oder nationale Rankings abzielt, fokussiert sich Local SEO auf ein definiertes geografisches Einzugsgebiet — ob eine Stadt, ein Bezirk oder ein Radius von 50 km.
        </p>
        <p>
          Das Google Business Profil (ehemals Google My Business) bildet dabei das Herzstück jeder Local-SEO-Strategie. Es ist der Eintrag, den Nutzer sehen, wenn dein Unternehmen im Local Pack oder auf Google Maps erscheint. In unserem <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Business Profil Guide</Link> erfährst du, wie du diesen Eintrag Schritt für Schritt optimierst.
        </p>
      </section>

      {/* Warum Local SEO wichtig */}
      <section id="warum-local-seo-wichtig" data-ai-summary="true">
        <h2>Warum ist Local SEO wichtig? Zahlen & Fakten</h2>
        <p>
          Die Bedeutung von Local SEO lässt sich in harten Zahlen belegen. Lokale Suchen sind nicht nur häufig — sie haben auch eine extrem hohe Kaufabsicht:
        </p>

        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Statistik</TableHead>
              <TableHead className="font-bold">Wert</TableHead>
              <TableHead className="font-bold">Quelle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Google-Suchen mit lokalem Intent</TableCell>
              <TableCell className="font-semibold text-primary">46 %</TableCell>
              <TableCell>Google, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nutzer, die nach lokaler Suche innerhalb 24h ein Geschäft besuchen</TableCell>
              <TableCell className="font-semibold text-primary">76 %</TableCell>
              <TableCell>Think with Google</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lokale Suchanfragen, die zu einem Kauf führen</TableCell>
              <TableCell className="font-semibold text-primary">28 %</TableCell>
              <TableCell>Google, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nutzer, die Unternehmen wegen fehlender Online-Präsenz meiden</TableCell>
              <TableCell className="font-semibold text-primary">56 %</TableCell>
              <TableCell>BrightLocal, 2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile Suchen mit „in meiner Nähe"</TableCell>
              <TableCell className="font-semibold text-primary">+500 % (5 Jahre)</TableCell>
              <TableCell>Google Trends</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Für lokale Unternehmen bedeutet das: Wer bei Google nicht sichtbar ist, verliert täglich Kunden an die Konkurrenz. Local SEO ist kein optionales Marketing-Extra — es ist die digitale Grundlage für jeden stationären Betrieb, vom <Link to="/blog/local-seo-fuer-restaurants" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Restaurant</Link> über den <Link to="/blog/local-seo-handwerker" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Handwerker</Link> bis zur <Link to="/blog/local-seo-aerzte-praxen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Arztpraxis</Link>.
        </p>
      </section>

      {/* Wie funktioniert Local SEO */}
      <section id="wie-funktioniert-local-seo" data-ai-summary="true">
        <h2>Wie funktioniert Local SEO? Die drei Säulen</h2>
        <p>
          Google bestimmt die lokale Rangfolge anhand von drei Hauptfaktoren, die das Unternehmen offiziell bestätigt hat:
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-foreground mb-2">Relevanz</h3>
            <p className="text-sm text-muted-foreground">
              Wie gut dein Eintrag zur Suchanfrage passt. Vollständige und detaillierte Geschäftsinformationen helfen Google, dein Unternehmen den richtigen Suchanfragen zuzuordnen.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="font-bold text-foreground mb-2">Entfernung</h3>
            <p className="text-sm text-muted-foreground">
              Wie nah dein Standort am Suchenden oder am gesuchten Ort liegt. Google berücksichtigt den genauen Standort des Nutzers — deshalb variieren Ergebnisse je nach Position.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-foreground mb-2">Bekanntheit</h3>
            <p className="text-sm text-muted-foreground">
              Wie bekannt und vertrauenswürdig dein Unternehmen online ist — gemessen an Bewertungen, Erwähnungen, Links, Social Signals und der gesamten Web-Präsenz.
            </p>
          </div>
        </div>
        <p>
          Diese drei Faktoren wirken zusammen. Ein Restaurant direkt neben dem Suchenden mit nur 5 Bewertungen wird möglicherweise von einem weiter entfernten Restaurant mit 300 Bewertungen und vollständigem Profil überholt. Die Kunst von Local SEO ist es, alle drei Faktoren gleichzeitig zu optimieren.
        </p>
      </section>

      {/* Google Business Profil */}
      <section id="google-business-profil" data-ai-summary="true">
        <h2>Google Business Profil optimieren: Der wichtigste Schritt</h2>
        <p>
          Das Google Business Profil (GBP) ist der zentrale Hebel im Local SEO. Über 90 % der lokalen Suchergebnisse stammen direkt aus GBP-Daten. Eine vollständige Optimierung umfasst:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Vollständige Geschäftsinformationen:</strong> Name, Adresse, Telefon, Öffnungszeiten, Website, Kategorie — lückenlos und korrekt</li>
          <li><strong>Primäre und sekundäre Kategorien:</strong> Wähle die spezifischste Hauptkategorie und ergänze bis zu 9 Nebenkategorien</li>
          <li><strong>Unternehmensbeschreibung:</strong> 750 Zeichen, die dein Alleinstellungsmerkmal und relevante Keywords natürlich integrieren</li>
          <li><strong>Hochwertige Fotos:</strong> Mindestens 10 Fotos — Außenansicht, Innenraum, Produkte, Team. Unternehmen mit 100+ Fotos erhalten 520 % mehr Anrufe (Google, 2023)</li>
          <li><strong>Google Posts:</strong> Regelmäßige Updates, Angebote und Neuigkeiten signalisieren Google Aktivität</li>
          <li><strong>Produkte und Services:</strong> Vollständige Produkt-/Dienstleistungskataloge mit Beschreibungen und Preisen</li>
          <li><strong>Fragen & Antworten:</strong> Proaktiv häufige Fragen beantworten, bevor Kunden sie stellen</li>
        </ul>
        <p>
          <strong>Praxis-Tipp:</strong> Unternehmen mit einem vollständig ausgefüllten Google Business Profil werden laut Google 2,7× häufiger als seriös wahrgenommen und erhalten 70 % mehr Besuche. Details zur Foto-Optimierung findest du in unserem Guide <Link to="/blog/gbp-fotos-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">GBP Fotos optimieren</Link>.
        </p>
      </section>

      <ArticleCTA />

      {/* Ranking-Faktoren Tabelle */}
      <section id="ranking-faktoren" data-ai-summary="true">
        <h2>Die wichtigsten Local-SEO-Ranking-Faktoren 2026</h2>
        <p>
          Die jährliche Studie von Whitespark identifiziert die entscheidenden Ranking-Faktoren. Hier sind die wichtigsten für das Local Pack und die organische lokale Suche:
        </p>

        <h3 className="font-bold text-lg mt-6 mb-3">Local Pack / Google Maps Ranking-Faktoren</h3>
        <Table className="my-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Faktor</TableHead>
              <TableHead className="font-bold">Gewichtung</TableHead>
              <TableHead className="font-bold">Was es bedeutet</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Google Business Profil Signale</TableCell>
              <TableCell className="font-semibold text-primary">32 %</TableCell>
              <TableCell>Kategorie, Keywords im Firmennamen, Nähe, Vollständigkeit</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>On-Page Signale</TableCell>
              <TableCell className="font-semibold text-primary">19 %</TableCell>
              <TableCell>NAP auf Website, lokale Keywords, Domain-Autorität</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bewertungen</TableCell>
              <TableCell className="font-semibold text-primary">16 %</TableCell>
              <TableCell>Anzahl, Score, Geschwindigkeit, Antworten, Keywords in Reviews</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Link-Signale</TableCell>
              <TableCell className="font-semibold text-primary">11 %</TableCell>
              <TableCell>Lokale Backlinks, Domain-Autorität, Ankertexte</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Citation-Signale</TableCell>
              <TableCell className="font-semibold text-primary">7 %</TableCell>
              <TableCell>NAP-Konsistenz, Verzeichniseinträge, Branchenverzeichnisse</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Verhaltens-Signale</TableCell>
              <TableCell className="font-semibold text-primary">8 %</TableCell>
              <TableCell>Click-Through-Rate, Verweildauer, Anrufe aus GBP</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Personalisierung & Social</TableCell>
              <TableCell className="font-semibold text-primary">7 %</TableCell>
              <TableCell>Social-Media-Engagement, personalisierte Ergebnisse</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          Die Tabelle zeigt: Das Google Business Profil dominiert mit fast einem Drittel der Gewichtung. Aber Local SEO ist ein Zusammenspiel — wer nur GBP optimiert und die Website vernachlässigt, verschenkt Potential. Einen detaillierten Leitfaden zur Optimierung jedes Faktors findest du im <Link to="/blog/google-maps-ranking-verbessern" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google Maps Ranking Guide</Link>.
        </p>
      </section>

      {/* On-Page Local SEO */}
      <section id="on-page-local-seo" data-ai-summary="true">
        <h2>On-Page Local SEO: Die Website als Ranking-Booster</h2>
        <p>
          Deine Website unterstützt das Google Business Profil und sendet wichtige Signale an Google. On-Page Local SEO umfasst:
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">Title Tags & Meta Descriptions</h3>
        <p>
          Integriere Stadt- und Regionsbezug in Title Tags (z. B. „Zahnarzt Zürich – Dr. Muster | Termin online buchen") und Meta Descriptions. Die Title-Länge sollte unter 60 Zeichen bleiben, die Description unter 160 Zeichen.
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">Standortseiten</h3>
        <p>
          Für jedes Einzugsgebiet eine eigene Seite erstellen mit: einzigartiger Beschreibung, lokalen Referenzen, eingebetteter Google Map, spezifischen Kundenbewertungen und lokalen Kontaktdaten. <strong>Wichtig:</strong> Keine Duplicate-Content-Fallen — jede Standortseite muss individuellen Mehrwert bieten.
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">Strukturierte Daten (Schema Markup)</h3>
        <p>
          Implementiere <Link to="/blog/schema-markup-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">LocalBusiness-Schema-Markup</Link> auf jeder Seite. Dies hilft Suchmaschinen, deine Geschäftsinformationen korrekt zu verstehen und Rich Snippets in den Suchergebnissen anzuzeigen. Dazu gehören:
        </p>
        <ul className="list-disc pl-6 space-y-1 my-3">
          <li>LocalBusiness- oder spezifischere Typen (Restaurant, Dentist, LegalService etc.)</li>
          <li>Adresse, Telefonnummer, Öffnungszeiten als strukturierte Daten</li>
          <li>AggregateRating für Bewertungssterne in der Suche</li>
          <li>FAQ-Schema für häufig gestellte Fragen</li>
        </ul>
        <p>
          In unserem <Link to="/blog/localbusiness-schema-implementierung" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Schema-Implementierungsguide</Link> zeigen wir dir Schritt für Schritt, wie du das technisch umsetzt.
        </p>
      </section>

      {/* NAP-Konsistenz */}
      <section id="nap-konsistenz" data-ai-summary="true">
        <h2>NAP-Konsistenz & Citations: Das Fundament der Vertrauenswürdigkeit</h2>
        <p>
          <strong>NAP</strong> steht für Name, Address, Phone Number — die drei grundlegenden Kontaktdaten deines Unternehmens. NAP-Konsistenz bedeutet, dass diese Daten überall im Internet exakt identisch sind:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Google Business Profil</li>
          <li>Eigene Website (Header, Footer, Kontaktseite, Impressum)</li>
          <li>Branchenverzeichnisse (Gelbe Seiten, Das Örtliche, local.ch etc.)</li>
          <li>Social-Media-Profile</li>
          <li>Bewertungsportale (Yelp, TripAdvisor, Jameda, kununu)</li>
        </ul>
        <p>
          Schon kleine Abweichungen können Google verwirren: „Str." vs. „Straße", „Tel:" vs. keine Vorwahl, verschiedene Hausnummernformate. Unser detaillierter <Link to="/blog/nap-konsistenz-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">NAP-Konsistenz-Guide</Link> zeigt dir, wie du ein NAP-Audit durchführst und Fehler behebst.
        </p>
        <p>
          <strong>Citations</strong> sind Erwähnungen deines Unternehmens auf anderen Websites — mit oder ohne Link. Je mehr hochwertige, konsistente Citations du aufbaust, desto stärker das Vertrauenssignal an Google. Mehr dazu in unserem <Link to="/blog/local-citations-2025" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Citations-Guide</Link>.
        </p>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" data-ai-summary="true">
        <h2>Google-Bewertungen: Der stärkste Conversion-Hebel</h2>
        <p>
          Bewertungen sind nicht nur ein Ranking-Faktor — sie sind der wichtigste Vertrauensindikator für potenzielle Kunden. Die Zahlen sprechen für sich:
        </p>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Bewertungs-Metrik</TableHead>
              <TableHead className="font-bold">Auswirkung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Unternehmen mit 4,5+ Sternen</TableCell>
              <TableCell>2× mehr Conversions als 3,5-Sterne-Betriebe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Auf Bewertungen antworten</TableCell>
              <TableCell>+12 % mehr neue Bewertungen, positives Ranking-Signal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Keywords in Bewertungstexten</TableCell>
              <TableCell>Direkter Einfluss auf Ranking für diese Suchbegriffe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aktualität der Bewertungen</TableCell>
              <TableCell>Bewertungen älter als 3 Monate verlieren an Gewicht</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vielfalt der Plattformen</TableCell>
              <TableCell>Bewertungen auf mehreren Portalen stärken Gesamtautorität</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Eine systematische Bewertungsstrategie ist unerlässlich. In unserem Guide <Link to="/blog/google-bewertungen-bekommen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Google-Bewertungen bekommen</Link> zeigen wir dir 15 ethische Methoden, um aktiv mehr Rezensionen zu generieren. Und wenn es mal eine negative Bewertung gibt, hilft unser <Link to="/blog/negative-google-bewertungen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Guide zu negativen Bewertungen</Link>.
        </p>
      </section>

      {/* Lokaler Content & Linkbuilding */}
      <section id="local-content" data-ai-summary="true">
        <h2>Lokaler Content & Linkbuilding: Autorität aufbauen</h2>
        <p>
          Lokaler Content ist der Treibstoff, der dein Local SEO langfristig antreibt. Es geht nicht um generische Blog-Artikel, sondern um Inhalte mit echtem Bezug zu deinem Standort und deiner Community:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Stadtteil- und Regio-Guides:</strong> „Die besten Restaurants in Zürich-Seefeld" oder „Handwerker-Tipps für Altbausanierung in München"</li>
          <li><strong>Lokale Events & News:</strong> Berichte über Veranstaltungen, Sponsorings oder Kooperationen in deiner Region</li>
          <li><strong>Case Studies:</strong> Erfolgsgeschichten lokaler Kunden (mit deren Einverständnis)</li>
          <li><strong>FAQ-Seiten:</strong> Antworten auf Fragen, die deine lokalen Kunden wirklich stellen</li>
        </ul>
        <p>
          <strong>Lokales Linkbuilding</strong> ergänzt deinen Content: Kooperationen mit lokalen Vereinen, Sponsoring-Links, Gastbeiträge in regionalen Medien, Einträge in Handwerkskammern oder IHK-Verzeichnissen. Mehr Strategien dazu in unserem <Link to="/blog/local-content-marketing" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local Content Marketing Guide</Link>.
        </p>
      </section>

      {/* Technisches SEO */}
      <section id="technisches-seo" data-ai-summary="true">
        <h2>Technisches Local SEO: Die Basis muss stimmen</h2>
        <p>
          Technische Aspekte bilden das Fundament, auf dem alle anderen Local-SEO-Maßnahmen aufbauen. Vernachlässigst du sie, verpuffen selbst die besten Inhalte:
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">Mobile-First ist Pflicht</h3>
        <p>
          Über 60 % aller lokalen Suchen erfolgen auf dem Smartphone. Deine Website muss auf Mobilgeräten perfekt funktionieren — schnelle Ladezeiten, tap-freundliche Buttons, kein horizontales Scrollen. Google bewertet die Mobile-Version als primäre Version deiner Seite. Mehr dazu im <Link to="/blog/mobile-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Mobile Local SEO Guide</Link>.
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">Core Web Vitals</h3>
        <p>
          Googles Metriken für Nutzererfahrung — <Link to="/blog/core-web-vitals-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Core Web Vitals</Link> — messen Ladegeschwindigkeit (LCP), Interaktivität (INP) und visuelle Stabilität (CLS). Lokale Unternehmen mit grünen Core Web Vitals haben einen nachweisbaren Ranking-Vorteil.
        </p>
        <h3 className="font-bold text-lg mt-4 mb-2">HTTPS & Sicherheit</h3>
        <p>
          SSL-Verschlüsselung ist seit Jahren ein Ranking-Signal. Für lokale Unternehmen, die Online-Buchungen oder Kontaktformulare anbieten, ist HTTPS nicht optional — es ist Pflicht für Vertrauen und Rankings.
        </p>
        <p>
          Einen umfassenden technischen Überblick bietet unser <Link to="/blog/technisches-local-seo-guide" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Technisches Local SEO Guide</Link> sowie die <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Audit-Checkliste</Link>.
        </p>
      </section>

      {/* DACH-Besonderheiten */}
      <section id="dach-besonderheiten" data-ai-summary="true" data-speakable="true">
        <h2>Local SEO in der DACH-Region: Besonderheiten für Deutschland, Österreich und die Schweiz</h2>
        <p>
          Der deutschsprachige Raum hat eigene Plattformen, rechtliche Rahmenbedingungen und Nutzergewohnheiten, die sich vom US-zentrierten Local SEO unterscheiden:
        </p>

        <h3 className="font-bold text-lg mt-6 mb-3">🇩🇪 Deutschland</h3>
        <Table className="my-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold">Besonderheit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Wichtigste Verzeichnisse</TableCell>
              <TableCell>Gelbe Seiten, Das Örtliche, GoLocal, Yelp DE, Cylex, Hotfrog</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Branchenspezifisch</TableCell>
              <TableCell>Jameda (Ärzte), Anwalt.de, MyHammer (Handwerker), kununu (Arbeitgeber)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rechtliches</TableCell>
              <TableCell>Impressumspflicht (§ 5 TMG), DSGVO, Bewertungsrecht (§ 824 BGB)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Besonderheit</TableCell>
              <TableCell>Handwerkskammer-Verzeichnisse als hochwertige Citations, IHK-Einträge</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Für Stadtguides zu deutschen Städten empfehlen wir unsere Guides zu <Link to="/blog/local-seo-berlin" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Berlin</Link>, <Link to="/blog/local-seo-muenchen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">München</Link>, <Link to="/blog/local-seo-hamburg" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Hamburg</Link>, <Link to="/blog/local-seo-koeln" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Köln</Link>, <Link to="/blog/local-seo-frankfurt" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Frankfurt</Link> und <Link to="/blog/local-seo-stuttgart" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Stuttgart</Link>.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-3">🇦🇹 Österreich</h3>
        <Table className="my-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold">Besonderheit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Wichtigste Verzeichnisse</TableCell>
              <TableCell>Herold.at, Gelbe Seiten AT, WKO Firmen A–Z, stadtplan.at</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Branchenspezifisch</TableCell>
              <TableCell>DocFinder (Ärzte), ÖAMTC (KFZ), Firmen.at</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rechtliches</TableCell>
              <TableCell>ECG (E-Commerce-Gesetz), DSGVO, Mediengesetz (Offenlegungspflicht)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Besonderheit</TableCell>
              <TableCell>WKO-Mitgliedschaft als Vertrauenssignal, regionale Dialekte in Suchen</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Unser <Link to="/blog/local-seo-wien" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Wien Guide</Link> geht auf die Besonderheiten der österreichischen Hauptstadt ein.
        </p>

        <h3 className="font-bold text-lg mt-6 mb-3">🇨🇭 Schweiz</h3>
        <Table className="my-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Aspekt</TableHead>
              <TableHead className="font-bold">Besonderheit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Wichtigste Verzeichnisse</TableCell>
              <TableCell>local.ch, search.ch, Gelbe Seiten CH, help.ch</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mehrsprachigkeit</TableCell>
              <TableCell>DE, FR, IT, RM — Profil in der Sprache der Zielregion pflegen</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rechtliches</TableCell>
              <TableCell>nDSG (neues Datenschutzgesetz seit 2023), OR (Handelsrecht)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Besonderheit</TableCell>
              <TableCell>Kantonale Unterschiede, .ch-Domains als Trust-Signal, hohe Google-Maps-Nutzung</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Für die Schweiz empfehlen wir unsere Guides zu <Link to="/blog/local-seo-schweiz" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Schweiz</Link>, <Link to="/blog/local-seo-zuerich" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Zürich</Link> und <Link to="/blog/local-seo-basel" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Basel</Link>.
        </p>
      </section>

      {/* 10-Schritte-Strategie */}
      <section id="local-seo-strategie" data-ai-summary="true" data-speakable="true">
        <h2>Local-SEO-Strategie in 10 Schritten: Dein Aktionsplan</h2>
        <p>
          Hier ist ein bewährter Schritt-für-Schritt-Plan, mit dem du Local SEO für dein Unternehmen systematisch aufbaust:
        </p>
        <ol className="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Google Business Profil erstellen oder beanspruchen</strong>
            <p className="text-muted-foreground mt-1">Verifiziere dein Unternehmen und fülle alle Felder vollständig aus. Wähle die spezifischste Primärkategorie.</p>
          </li>
          <li>
            <strong>NAP-Audit durchführen</strong>
            <p className="text-muted-foreground mt-1">Prüfe Name, Adresse und Telefon auf allen Plattformen auf exakte Übereinstimmung.</p>
          </li>
          <li>
            <strong>Website lokal optimieren</strong>
            <p className="text-muted-foreground mt-1">Lokale Keywords in Title, H1, Meta Description. Standortseiten für jeden Standort erstellen.</p>
          </li>
          <li>
            <strong>Schema Markup implementieren</strong>
            <p className="text-muted-foreground mt-1">LocalBusiness-Schema mit Adresse, Öffnungszeiten, Koordinaten und Bewertungen.</p>
          </li>
          <li>
            <strong>Fotos professionell aufnehmen und hochladen</strong>
            <p className="text-muted-foreground mt-1">Mindestens 10 hochwertige Fotos. Geotagging nicht vergessen.</p>
          </li>
          <li>
            <strong>Bewertungsstrategie aufsetzen</strong>
            <p className="text-muted-foreground mt-1">Systematisch Bewertungen einholen, auf jede Bewertung antworten — positiv wie negativ.</p>
          </li>
          <li>
            <strong>Citations in wichtigsten Verzeichnissen aufbauen</strong>
            <p className="text-muted-foreground mt-1">Mindestens 20 hochwertige Citations in allgemeinen und branchenspezifischen Verzeichnissen.</p>
          </li>
          <li>
            <strong>Lokalen Content erstellen</strong>
            <p className="text-muted-foreground mt-1">Blog-Artikel mit Ortsbezug, lokale Landingpages, FAQ-Seiten.</p>
          </li>
          <li>
            <strong>Lokale Backlinks aufbauen</strong>
            <p className="text-muted-foreground mt-1">Partnerschaften mit lokalen Organisationen, Sponsoring, Gastbeiträge in Regionalmedien.</p>
          </li>
          <li>
            <strong>Monitoring & Optimierung</strong>
            <p className="text-muted-foreground mt-1">GBP Insights überwachen, Rankings tracken, A/B-Tests durchführen, monatlich optimieren.</p>
          </li>
        </ol>
        <p>
          Nutze unsere <Link to="/blog/local-seo-audit-checkliste" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Local SEO Audit-Checkliste</Link> als Begleitung zu diesem Aktionsplan.
        </p>
      </section>

      <ArticleCTA />

      {/* Tools */}
      <section id="tools" data-ai-summary="true">
        <h2>Die besten Local-SEO-Tools 2026</h2>
        <p>
          Effektives Local SEO erfordert die richtigen Werkzeuge. Hier eine Übersicht der wichtigsten Tools, geordnet nach Einsatzbereich:
        </p>
        <Table className="my-6">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Einsatzbereich</TableHead>
              <TableHead className="font-bold">Tool</TableHead>
              <TableHead className="font-bold">Kosten</TableHead>
              <TableHead className="font-bold">Stärke</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>GBP-Management</TableCell>
              <TableCell>Google Business Manager</TableCell>
              <TableCell className="text-primary font-medium">Kostenlos</TableCell>
              <TableCell>Offizielles Tool, Multi-Standort-Verwaltung</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rank-Tracking</TableCell>
              <TableCell>BrightLocal / Whitespark</TableCell>
              <TableCell>Ab 29 $/Mt.</TableCell>
              <TableCell>Grid-Tracking, lokale Rankings nach Standort</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Citation-Management</TableCell>
              <TableCell>Yext / BrightLocal</TableCell>
              <TableCell>Ab 39 $/Mt.</TableCell>
              <TableCell>Automatische Citation-Verteilung, NAP-Monitoring</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Keyword-Recherche</TableCell>
              <TableCell>Google Keyword Planner / Ubersuggest</TableCell>
              <TableCell className="text-primary font-medium">Kostenlos/Freemium</TableCell>
              <TableCell>Lokale Suchvolumen, Wettbewerbsdaten</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bewertungsmanagement</TableCell>
              <TableCell>Grade.us / Podium</TableCell>
              <TableCell>Ab 80 $/Mt.</TableCell>
              <TableCell>Automatisierte Review-Anfragen, Multi-Plattform</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Technisches SEO</TableCell>
              <TableCell>Google Search Console / PageSpeed Insights</TableCell>
              <TableCell className="text-primary font-medium">Kostenlos</TableCell>
              <TableCell>Core Web Vitals, Indexierung, Fehleranalyse</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Schema-Validierung</TableCell>
              <TableCell>Google Rich Results Test / Schema.org Validator</TableCell>
              <TableCell className="text-primary font-medium">Kostenlos</TableCell>
              <TableCell>Strukturierte Daten prüfen und debuggen</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          Detaillierte Anleitungen zu kostenlosen Tools findest du in unserer <Link to="/blog/seo-toolbox-kostenlose-ressourcen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">SEO Toolbox</Link> und im <Link to="/blog/local-seo-keywords-finden" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Keyword-Recherche-Guide</Link>.
        </p>
      </section>

      {/* Trends 2026 */}
      <section id="trends-2026" data-ai-summary="true" data-speakable="true">
        <h2>Local SEO Trends 2026: Was sich verändert</h2>
        <p>
          Local SEO entwickelt sich ständig weiter. Diese Trends solltest du 2026 im Blick haben:
        </p>
        <div className="space-y-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold text-foreground mb-2">🤖 Google AI Overviews & SGE</h3>
            <p className="text-sm text-muted-foreground">
              Googles KI-generierte Antworten verändern, wie lokale Ergebnisse angezeigt werden. Unternehmen müssen für KI-Extraktion optimieren — mit klaren, strukturierten Daten und E-E-A-T-Signalen. Mehr dazu: <Link to="/blog/google-ai-overviews-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">AI Overviews Guide</Link>.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold text-foreground mb-2">🎤 Voice Search & Conversational Queries</h3>
            <p className="text-sm text-muted-foreground">
              „Hey Google, welcher Zahnarzt hat jetzt auf?" — Sprachsuchen sind natürlicher, länger und oft als Frage formuliert. FAQ-Inhalte und speakable Schema werden wichtiger denn je. Guide: <Link to="/blog/local-seo-voice-search" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Voice Search Local SEO</Link>.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold text-foreground mb-2">📱 Zero-Click-Ergebnisse</h3>
            <p className="text-sm text-muted-foreground">
              Immer mehr Suchanfragen werden direkt in den SERPs beantwortet, ohne Klick auf eine Website. Für lokale Unternehmen bedeutet das: GBP-Optimierung wird noch wichtiger, da Nutzer Öffnungszeiten, Bewertungen und Fotos direkt in Google sehen.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold text-foreground mb-2">🧠 E-E-A-T für lokale Unternehmen</h3>
            <p className="text-sm text-muted-foreground">
              Experience, Expertise, Authoritativeness, Trustworthiness — Google bewertet zunehmend, ob ein Unternehmen echte Expertise in seinem Gebiet nachweisen kann. Bewertungen, Zertifizierungen und fachliche Inhalte gewinnen an Bedeutung. Vertiefung: <Link to="/blog/e-e-a-t-lokale-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">E-E-A-T Guide</Link>.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold text-foreground mb-2">⚡ KI-Tools für Local SEO</h3>
            <p className="text-sm text-muted-foreground">
              KI-gestützte Tools automatisieren Keyword-Recherche, generieren Antworten auf Bewertungen und erstellen lokale Inhalte. Wer KI strategisch einsetzt, spart Zeit und gewinnt Wettbewerbsvorteile. Guide: <Link to="/blog/ki-tools-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">KI-Tools für Local SEO</Link>.
            </p>
          </div>
        </div>
        <p>
          Für einen umfassenden Überblick über aktuelle Entwicklungen empfehlen wir unseren Guide zur <Link to="/blog/lokale-suchmaschinenoptimierung-2026" className="text-primary underline decoration-primary/30 hover:decoration-primary font-medium">Lokalen Suchmaschinenoptimierung 2026</Link>.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>Häufig gestellte Fragen zu Local SEO</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <SourcesSection sources={sources} />
    </ArticleLayout>
  );
};

export default UltimateGuideLocalSeo;
