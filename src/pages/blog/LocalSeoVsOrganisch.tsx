import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Globe, MapPin, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

const LocalSeoVsOrganisch = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-vs-organisch", language)!;

  const tocItems = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse", level: 2 },
    { id: "definition", title: "Was ist der Unterschied?", level: 2 },
    { id: "vergleich", title: "Vergleichstabelle", level: 2 },
    { id: "ranking-faktoren", title: "Ranking-Faktoren im Vergleich", level: 2 },
    { id: "local-faktoren", title: "Local SEO Faktoren", level: 3 },
    { id: "organic-faktoren", title: "Organic SEO Faktoren", level: 3 },
    { id: "strategie", title: "Welche Strategie brauchst du?", level: 2 },
    { id: "kombination", title: "Die perfekte Kombination", level: 2 },
    { id: "fehler", title: "Häufige Fehler vermeiden", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Local SEO fokussiert auf geografische Relevanz – Organic SEO auf thematische Autorität",
    "46% aller Google-Suchen haben lokale Absicht → Local SEO ist unverzichtbar für lokale Geschäfte",
    "Im Local Pack zählen GBP, Bewertungen & NAP – organisch zählen Content & Backlinks",
    "Beide Strategien ergänzen sich: Local SEO bringt schnelle Sichtbarkeit, Organic SEO langfristige Autorität",
    "Lokale Unternehmen sollten 60-70% ihrer SEO-Ressourcen in Local SEO investieren",
  ];

  const comparisonData = {
    headers: ["Aspekt", "Local SEO", "Organic SEO (Traditional)"],
    rows: [
      ["Ziel", "Lokale Sichtbarkeit in Maps & Local Pack", "Nationale/globale Sichtbarkeit in organischer Suche"],
      ["Zielgruppe", "Kunden im Umkreis (5-50 km)", "Globale oder nationale Nutzer"],
      ["Primärer Ranking-Faktor", "Google Business Profile & Bewertungen", "Content-Qualität & Backlinks"],
      ["Wichtigste Plattform", "Google Maps + Local Pack", "Google organische Ergebnisse"],
      ["Zeit bis Ergebnisse", "2-4 Wochen für erste Sichtbarkeit", "3-6 Monate für stabile Rankings"],
      ["Investition", "Niedrig bis mittel (GBP-Pflege)", "Mittel bis hoch (Content-Produktion)"],
      ["Konkurrenz", "Lokal begrenzt (oft <20 Wettbewerber)", "National/global (oft 1000+ Wettbewerber)"],
      ["ROI-Messung", "Anrufe, Wegbeschreibungen, Besuche", "Traffic, Conversions, Rankings"],
    ],
  };

  const faqItems = [
    {
      question: "Brauche ich als lokales Unternehmen überhaupt Organic SEO?",
      answer: "Ja, aber mit anderer Priorität. Organic SEO stärkt deine Website-Autorität, was auch dem Local SEO hilft. Für lokale Unternehmen empfehlen wir 60-70% Local SEO und 30-40% Organic SEO."
    },
    {
      question: "Kann ich mit Local SEO auch überregional ranken?",
      answer: "Nein, Local SEO ist geografisch begrenzt. Für überregionale Sichtbarkeit brauchst du Organic SEO oder mehrere Standorte mit eigenem Google Business Profile."
    },
    {
      question: "Was ist das Local Pack und warum ist es wichtig?",
      answer: "Das Local Pack sind die 3 Google Maps Ergebnisse, die bei lokalen Suchen oben erscheinen. Es erhält 42% aller Klicks bei lokalen Suchen – mehr als die organischen Ergebnisse."
    },
    {
      question: "Welche SEO-Strategie bringt schneller Ergebnisse?",
      answer: "Local SEO. Ein optimiertes Google Business Profile kann in 2-4 Wochen erste Rankings bringen. Organic SEO braucht typischerweise 3-6 Monate für stabile Ergebnisse."
    },
    {
      question: "Zählen Backlinks auch für Local SEO?",
      answer: "Ja, aber anders. Lokale Backlinks (z.B. von lokalen Zeitungen, Vereinen, Branchenverzeichnissen) sind für Local SEO wichtiger als hochautoritative nationale Links."
    },
    {
      question: "Wie erkenne ich, ob eine Suche lokal gemeint ist?",
      answer: "Google erkennt lokale Absicht an Keywords wie 'in meiner Nähe', Städtenamen, oder Dienstleistungen die typisch lokal sind (Friseur, Restaurant, Handwerker). Auch ohne Ortszusatz zeigt Google oft lokale Ergebnisse."
    },
    {
      question: "Ist Local SEO günstiger als Organic SEO?",
      answer: "Ja, in der Regel. Local SEO erfordert hauptsächlich GBP-Pflege, Bewertungsmanagement und NAP-Konsistenz. Organic SEO braucht kontinuierliche Content-Produktion und Linkbuilding."
    },
    {
      question: "Kann ich Local SEO ohne Website machen?",
      answer: "Grundsätzlich ja – das Google Business Profile funktioniert auch ohne Website. Aber eine Website verbessert deine Local SEO Performance erheblich und ermöglicht Conversions auf deiner eigenen Plattform."
    }
  ];

  const sources = [
    { title: "BrightLocal Local Consumer Review Survey 2024", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
    { title: "Moz Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors" },
    { title: "Google Business Profile Help", url: "https://support.google.com/business" },
    { title: "Backlinko Google Ranking Factors Study", url: "https://backlinko.com/google-ranking-factors" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Intro */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
        <AutoLexikonText>
          „SEO ist SEO" – oder doch nicht? Für lokale Unternehmen macht es einen gewaltigen Unterschied, 
          ob sie klassisches Organic SEO betreiben oder gezielt Local SEO einsetzen. Dieser Artikel 
          erklärt die Unterschiede, zeigt wann welche Strategie sinnvoll ist, und wie du beide 
          optimal kombinierst.
        </AutoLexikonText>
      </p>

      {/* Key Takeaways */}
      <section id="key-takeaways" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />
      </section>

      {/* Definition */}
      <section id="definition" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Was ist der Unterschied?</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-bold text-foreground text-lg">Local SEO</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Optimierung für <strong className="text-foreground">geografisch begrenzte Suchen</strong>. 
              Ziel: Sichtbarkeit im Local Pack (Google Maps) und bei Suchen mit lokalem Intent.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Google Business Profile</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Bewertungen & Reputation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>NAP-Konsistenz</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Lokale Citations</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-muted/50 border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                <Globe className="h-5 w-5 text-foreground" />
              </span>
              <h3 className="font-bold text-foreground text-lg">Organic SEO (Traditional)</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Optimierung für <strong className="text-foreground">thematische Relevanz</strong> ohne 
              geografische Einschränkung. Ziel: Rankings in den organischen Suchergebnissen.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span>Content-Qualität & E-E-A-T</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span>Backlink-Profil</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span>Technisches SEO</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span>Keyword-Optimierung</span>
              </li>
            </ul>
          </div>
        </div>

        <InsightCalloutBox variant="stat">
          <strong>46% aller Google-Suchen</strong> haben lokale Absicht. Das bedeutet: Fast jede zweite Suche 
          ist potenziell relevant für Local SEO – selbst wenn kein Ortsname eingegeben wird.
        </InsightCalloutBox>
      </section>

      {/* Vergleichstabelle */}
      <section id="vergleich" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Vergleichstabelle: Local vs. Organic SEO</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted">
                {comparisonData.headers.map((h, i) => (
                  <th key={i} className="p-3 text-left font-semibold text-foreground border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-3 border-b border-border ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="local-seo-vs-organisch" position="middle" />

      {/* Ranking-Faktoren */}
      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Ranking-Faktoren im Vergleich</h2>
        
        <p className="text-muted-foreground mb-8">
          Die Ranking-Faktoren unterscheiden sich fundamental. Während bei Organic SEO Content und 
          Backlinks dominieren, sind bei Local SEO das Google Business Profile und Bewertungen entscheidend.
        </p>

        <div id="local-faktoren" className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Top Local SEO Ranking-Faktoren
          </h3>
          <div className="space-y-4">
            {[
              { factor: "Google Business Profile Signale", weight: "32%", desc: "Kategorien, Attribute, Fotos, Posts" },
              { factor: "Bewertungen", weight: "16%", desc: "Anzahl, Qualität, Antwortrate, Aktualität" },
              { factor: "On-Page Signale", weight: "15%", desc: "NAP, lokale Keywords, Schema Markup" },
              { factor: "Link Signale", weight: "13%", desc: "Lokale Backlinks, Branchenverzeichnisse" },
              { factor: "Citation Signale", weight: "11%", desc: "NAP-Konsistenz, Verzeichnisqualität" },
              { factor: "Verhaltens Signale", weight: "8%", desc: "CTR, Mobile Clicks-to-Call, Dwell Time" },
              { factor: "Personalisierung", weight: "5%", desc: "Suchhistorie, Standort des Nutzers" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <span className="shrink-0 w-12 text-center font-bold text-primary">{item.weight}</span>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{item.factor}</span>
                  <span className="text-muted-foreground text-sm ml-2">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Quelle: <a href="https://moz.com/local-search-ranking-factors" target="_blank" rel="noopener noreferrer" className="text-primary underline">Moz Local Search Ranking Factors 2024</a>
          </p>
        </div>

        <div id="organic-faktoren">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-foreground" />
            Top Organic SEO Ranking-Faktoren
          </h3>
          <div className="space-y-4">
            {[
              { factor: "Content-Qualität & Relevanz", weight: "~25%", desc: "E-E-A-T, Tiefe, Aktualität" },
              { factor: "Backlinks", weight: "~20%", desc: "Domain Authority, Relevanz, Anchor Text" },
              { factor: "RankBrain / AI", weight: "~15%", desc: "User Intent Matching, Semantik" },
              { factor: "Technisches SEO", weight: "~15%", desc: "Core Web Vitals, Mobile, Crawlability" },
              { factor: "On-Page Faktoren", weight: "~12%", desc: "Title, Meta, H-Tags, Keyword-Platzierung" },
              { factor: "User Experience", weight: "~8%", desc: "Bounce Rate, Dwell Time, Pogo-Sticking" },
              { factor: "HTTPS / Security", weight: "~5%", desc: "SSL, sichere Verbindung" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                <span className="shrink-0 w-12 text-center font-bold text-muted-foreground">{item.weight}</span>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{item.factor}</span>
                  <span className="text-muted-foreground text-sm ml-2">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategie */}
      <section id="strategie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Welche Strategie brauchst du?</h2>

        <div className="space-y-6">
          <div className="p-5 border border-primary/30 bg-primary/5 rounded-xl">
            <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Fokus auf Local SEO wenn:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Du ein physisches Geschäft oder Einzugsgebiet hast</li>
              <li>✓ Deine Kunden lokal suchen („Friseur München", „Pizza in meiner Nähe")</li>
              <li>✓ Du weniger als 3 Standorte hast</li>
              <li>✓ Du schnelle Ergebnisse brauchst (Wochen statt Monate)</li>
              <li>✓ Dein Budget begrenzt ist</li>
            </ul>
          </div>

          <div className="p-5 border border-border bg-muted/30 rounded-xl">
            <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Fokus auf Organic SEO wenn:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Du online verkaufst (E-Commerce) ohne lokalen Bezug</li>
              <li>✓ Deine Zielgruppe national oder international ist</li>
              <li>✓ Du ein SaaS-Produkt oder digitale Dienstleistung anbietest</li>
              <li>✓ Du langfristige Autorität aufbauen willst</li>
              <li>✓ Du in Content-Marketing investieren kannst</li>
            </ul>
          </div>
        </div>

        <InsightCalloutBox variant="pro-tip">
          <strong>Für die meisten lokalen Unternehmen:</strong> Investiere 60-70% deiner SEO-Ressourcen in 
          Local SEO (GBP, Bewertungen, Citations) und 30-40% in Organic SEO (Website-Content, lokale Landingpages).
        </InsightCalloutBox>
      </section>

      {/* Kombination */}
      <section id="kombination" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Die perfekte Kombination</h2>
        
        <p className="text-muted-foreground mb-6">
          Die beste Strategie kombiniert beide Ansätze. So nutzt du die Synergien:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Lokale Landingpages erstellen",
              desc: "Eine Seite pro Standort/Einzugsgebiet mit lokalen Keywords, eingebettetem Map und Kontaktdaten.",
              icon: MapPin
            },
            {
              title: "Content mit lokalem Bezug",
              desc: "Blogbeiträge über lokale Events, Partnerschaften oder branchenspezifische Tipps für deine Region.",
              icon: Users
            },
            {
              title: "Lokale Backlinks aufbauen",
              desc: "Links von lokalen Zeitungen, Vereinen, Handelskammern stärken Local UND Organic SEO.",
              icon: TrendingUp
            },
            {
              title: "GBP mit Website verbinden",
              desc: "Posts im GBP verlinken auf Blogbeiträge, Landingpages verlinken aufs Profil.",
              icon: Globe
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
              <span className="shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufige Fehler vermeiden</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { error: "Nur Organic SEO betreiben", fix: "GBP vernachlässigen = 42% der lokalen Klicks verpassen" },
            { error: "Local SEO ohne Website", fix: "Website stärkt GBP-Rankings und ermöglicht Conversions" },
            { error: "Gleiche Strategie für alle Standorte", fix: "Jeder Standort braucht lokalisierte Inhalte" },
            { error: "Bewertungen ignorieren", fix: "16% des Local Rankings – aktiv sammeln und beantworten" },
            { error: "NAP-Inkonsistenzen", fix: "Eine falsche Telefonnummer kann Rankings zerstören" },
            { error: "Zu viele Keywords auf einer Seite", fix: "Fokus auf 1-2 lokale Keywords pro Landingpage" },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
              <p className="font-medium text-foreground mb-1">❌ {item.error}</p>
              <p className="text-sm text-muted-foreground">→ {item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="mb-12 p-6 bg-muted/30 rounded-xl">
        <h3 className="font-bold text-foreground mb-4">Weiterführende Artikel</h3>
        <ul className="space-y-2 text-sm">
          <li>→ <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Ultimate Guide: Local SEO komplett</Link></li>
          <li>→ <Link to="/blog/local-seo-ranking-faktoren-erklaert" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Ranking-Faktoren erklärt</Link></li>
          <li>→ <Link to="/blog/local-seo-vs-maps-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO vs. Google Maps SEO</Link></li>
          <li>→ <Link to="/blog/google-my-business-optimieren" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Business Profile optimieren</Link></li>
          <li>→ <Link to="/blog/local-seo-strategie-kleine-unternehmen" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO Strategie für kleine Unternehmen</Link></li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <HelpfulnessWidget articleSlug="local-seo-vs-organisch" />

      <SourcesSection sources={sources} />

      <BlogCTAABTest articleSlug="local-seo-vs-organisch" position="end" />
    </ArticleLayout>
  );
};

export default LocalSeoVsOrganisch;
