import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import SourcesSection from "@/components/blog/SourcesSection";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import CaseStudyCard from "@/components/blog/CaseStudyCard";
import { industryCaseStudies } from "@/data/industryCaseStudies";
import { Link } from "react-router-dom";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Map, Globe, Search, BarChart3, Users, Zap, Target, ArrowRight } from "lucide-react";

const GoogleMapsSeoVsOrganicSeo = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("google-maps-seo-vs-organic-seo", language)!;

  const tocItems = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse", level: 2 },
    { id: "was-ist-was", title: "Was ist Google Maps SEO? Was ist Organic SEO?", level: 2 },
    { id: "vergleich", title: "Vergleichstabelle", level: 2 },
    { id: "ranking-faktoren", title: "Ranking-Faktoren im Detail", level: 2 },
    { id: "maps-faktoren", title: "Google Maps Ranking-Faktoren", level: 3 },
    { id: "organic-faktoren", title: "Organic Ranking-Faktoren", level: 3 },
    { id: "wann-was", title: "Wann welche Strategie?", level: 2 },
    { id: "synergie", title: "Synergieeffekte nutzen", level: 2 },
    { id: "roi-vergleich", title: "ROI-Vergleich", level: 2 },
    { id: "fehler", title: "Häufige Fehler", level: 2 },
    { id: "faq", title: "Häufig gestellte Fragen", level: 2 },
  ];

  const keyTakeaways = [
    "Google Maps SEO zeigt Ergebnisse in 2-4 Wochen, Organic SEO braucht 3-6 Monate",
    "Maps-Rankings hängen stark von Nähe, GBP-Optimierung und Bewertungen ab",
    "Organic Rankings basieren auf Content-Qualität, Backlinks und technischem SEO",
    "Das Local Pack (Maps) erhält 42% der Klicks bei lokalen Suchen",
    "Die effektivste Strategie kombiniert beides – Maps für schnelle Sichtbarkeit, Organic für Autorität",
  ];

  const faqItems = [
    {
      question: "Kann ich in Google Maps ranken ohne eigene Website?",
      answer: "Ja, grundsätzlich schon. Google Maps Rankings basieren primär auf dem Google Business Profile. Allerdings stärkt eine Website dein Ranking erheblich, da Google On-Page-Signale wie lokale Keywords und Schema Markup als Relevanzfaktor nutzt."
    },
    {
      question: "Warum ranke ich organisch gut, aber nicht in Google Maps?",
      answer: "Maps-Rankings haben andere Faktoren. Häufige Ursachen: unvollständiges Google Business Profile, fehlende oder wenige Bewertungen, NAP-Inkonsistenzen in Verzeichnissen, oder dein Standort ist zu weit vom Suchenden entfernt (Proximity-Faktor)."
    },
    {
      question: "Ist Google Maps SEO günstiger als Organic SEO?",
      answer: "In der Regel ja. Maps SEO erfordert hauptsächlich GBP-Pflege und Bewertungsmanagement. Organic SEO braucht kontinuierliche Content-Produktion und Linkbuilding, was langfristig deutlich teurer ist."
    },
    {
      question: "Wie wichtig ist der Standort für Google Maps Rankings?",
      answer: "Sehr wichtig. Proximity (Nähe zum Suchenden) macht ca. 25% des Maps-Rankings aus. Das kannst du kaum beeinflussen – aber du kannst Relevanz und Prominenz optimieren, um Standort-Nachteile auszugleichen."
    },
    {
      question: "Funktioniert Google Maps SEO auch für Online-Businesses?",
      answer: "Nein. Google Maps SEO ist nur für Unternehmen mit physischem Standort oder definiertem Einzugsgebiet relevant. Reine Online-Businesses sollten sich auf Organic SEO konzentrieren."
    },
    {
      question: "Wie oft sollte ich mein Google Business Profile aktualisieren?",
      answer: "Mindestens wöchentlich: neue Posts veröffentlichen, auf Bewertungen antworten, Fotos hochladen. Quartalsmäßig: alle Informationen prüfen (Öffnungszeiten, Attribute, Kategorien). Google bevorzugt aktive Profile."
    },
    {
      question: "Beeinflussen Google-Bewertungen auch mein organisches Ranking?",
      answer: "Indirekt. Bewertungen sind primär ein Maps-Ranking-Faktor. Aber sie beeinflussen die Klickrate (CTR) in organischen Ergebnissen durch Review-Snippets, was wiederum das organische Ranking stärken kann."
    },
    {
      question: "Was bringt mehr Kunden: Maps oder organisches Ranking?",
      answer: "Für lokale Unternehmen bringt Maps meist mehr direkte Kunden (Anrufe, Besuche). Organische Rankings bringen mehr Website-Traffic und langfristiges Vertrauen. Die Kombination ist am effektivsten."
    },
  ];

  const sources = [
    { title: "Moz Local Search Ranking Factors 2024", url: "https://moz.com/local-search-ranking-factors" },
    { title: "BrightLocal Local Consumer Review Survey", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
    { title: "Google Business Profile Help Center", url: "https://support.google.com/business" },
    { title: "Semrush Local SEO Study", url: "https://www.semrush.com/blog/local-seo/" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      {/* Intro */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
        <AutoLexikonText>
          Google Maps und die organische Suche sind zwei verschiedene Welten mit eigenen Regeln. 
          Wer beides versteht, dominiert die lokale Suche. Dieser Vergleich zeigt dir genau, 
          wie sich die Ranking-Faktoren, Strategien und der ROI unterscheiden — und wie du 
          beide Kanäle optimal kombinierst.
        </AutoLexikonText>
      </p>

      {/* Key Takeaways */}
      <section id="key-takeaways" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />
      </section>

      {/* Was ist was */}
      <section id="was-ist-was" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Was ist Google Maps SEO? Was ist Organic SEO?</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Map className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-bold text-foreground text-lg">Google Maps SEO</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Optimierung für Sichtbarkeit in <strong className="text-foreground">Google Maps</strong> und 
              im <strong className="text-foreground">Local Pack</strong> (die 3 Karten-Ergebnisse in der Google-Suche).
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /><span>Ergebnisse in 2-4 Wochen</span></div>
              <div className="flex items-center gap-2"><Target className="h-4 w-4 text-primary" /><span>Google Business Profile zentral</span></div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /><span>Proximity stark gewichtet</span></div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /><span>Bewertungen als Top-Faktor</span></div>
            </div>
          </div>

          <div className="p-6 bg-muted/50 border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                <Search className="h-5 w-5 text-foreground" />
              </span>
              <h3 className="font-bold text-foreground text-lg">Organic SEO</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Optimierung für die <strong className="text-foreground">organischen Suchergebnisse</strong> 
              (die „10 blauen Links") unterhalb des Local Packs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-muted-foreground" /><span>Ergebnisse in 3-6 Monaten</span></div>
              <div className="flex items-center gap-2"><Target className="h-4 w-4 text-muted-foreground" /><span>Website-Content zentral</span></div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground" /><span>Backlinks stark gewichtet</span></div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-muted-foreground" /><span>E-E-A-T als Top-Faktor</span></div>
            </div>
          </div>
        </div>

        <InsightCalloutBox variant="stat" statValue="42%" statLabel="aller Klicks bei lokalen Suchen gehen an das Local Pack">
          Das Local Pack dominiert die Klickverteilung. Organische Ergebnisse erhalten bei lokalen Suchen nur noch 
          ca. 29% der Klicks — der Rest geht an Ads und Maps.
        </InsightCalloutBox>
      </section>

      {/* Vergleichstabelle */}
      <section id="vergleich" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Google Maps SEO vs. Organic SEO: Der Vergleich</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">Aspekt</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">📍 Google Maps SEO</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">🔍 Organic SEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wo sichtbar?", "Google Maps App + Local Pack", "Organische Suchergebnisse"],
                ["Wichtigstes Asset", "Google Business Profile", "Website"],
                ["Top-Ranking-Faktor", "GBP-Signale (32%)", "Content + Backlinks (~45%)"],
                ["Zeit bis Ergebnis", "2-4 Wochen", "3-6 Monate"],
                ["Proximity-Einfluss", "Sehr hoch (~25%)", "Gering"],
                ["Bewertungen-Einfluss", "Sehr hoch (16%)", "Indirekt (CTR-Effekt)"],
                ["Website nötig?", "Nein (aber empfohlen)", "Ja (zwingend)"],
                ["Kosten", "Niedrig (GBP-Pflege)", "Mittel-hoch (Content + Links)"],
                ["Ergebnis-Typ", "Anrufe, Besuche, Routen", "Traffic, Conversions, Leads"],
                ["Reichweite", "Lokal (5-50 km)", "Lokal bis global"],
                ["Konkurrenz", "< 20 lokale Wettbewerber", "100-10.000+ Wettbewerber"],
                ["Mobile Relevanz", "Extrem hoch", "Hoch"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="p-3 border-b border-border font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[1]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BlogCTAABTest articleSlug="google-maps-seo-vs-organic-seo" position="middle" />

      {/* Ranking-Faktoren */}
      <section id="ranking-faktoren" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Ranking-Faktoren im Detail</h2>
        
        <p className="text-muted-foreground mb-8">
          Die Algorithmen hinter Maps- und organischen Rankings bewerten völlig unterschiedliche Signale. 
          Hier die wichtigsten Faktoren im direkten Vergleich:
        </p>

        <div id="maps-faktoren" className="mb-10">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            Google Maps Ranking-Faktoren
          </h3>
          <div className="space-y-3">
            {[
              { factor: "Google Business Profile", weight: 32, desc: "Vollständigkeit, Kategorien, Attribute, Fotos, Posts" },
              { factor: "Proximity (Nähe)", weight: 25, desc: "Entfernung zwischen Standort und Suchendem" },
              { factor: "Bewertungen", weight: 16, desc: "Anzahl, Durchschnitt, Antwortrate, Keywords in Reviews" },
              { factor: "On-Page Signale", weight: 11, desc: "NAP auf Website, lokale Keywords, Schema Markup" },
              { factor: "Citations", weight: 8, desc: "NAP-Konsistenz in Branchenverzeichnissen" },
              { factor: "Verhaltens-Signale", weight: 5, desc: "Klickrate, Anrufe, Routenanfragen" },
              { factor: "Social Signals", weight: 3, desc: "Social Media Aktivität, Shares" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="shrink-0 w-14 text-right font-bold text-primary text-sm">{item.weight}%</span>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${item.weight * 3}%` }} />
                  </div>
                </div>
                <div className="w-64 hidden md:block">
                  <span className="font-medium text-foreground text-sm">{item.factor}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-3 md:hidden">
            GBP (32%) → Proximity (25%) → Bewertungen (16%) → On-Page (11%) → Citations (8%)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Details: <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking-Faktoren erklärt</Link>
          </p>
        </div>

        <div id="organic-faktoren">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-foreground" />
            Organic Ranking-Faktoren
          </h3>
          <div className="space-y-3">
            {[
              { factor: "Content-Qualität", weight: 26, desc: "Tiefe, E-E-A-T, Aktualität, Nutzwert" },
              { factor: "Backlinks", weight: 21, desc: "Domain Authority, Relevanz, Diversität" },
              { factor: "RankBrain / AI", weight: 15, desc: "Semantisches Verständnis, Intent Matching" },
              { factor: "Technisches SEO", weight: 14, desc: "Core Web Vitals, Mobile, Crawling" },
              { factor: "On-Page Signale", weight: 12, desc: "Title, Meta, H-Tags, interne Verlinkung" },
              { factor: "User Experience", weight: 8, desc: "Dwell Time, Bounce Rate, Engagement" },
              { factor: "HTTPS / Sicherheit", weight: 4, desc: "SSL-Zertifikat, sichere Verbindung" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="shrink-0 w-14 text-right font-bold text-muted-foreground text-sm">{item.weight}%</span>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground/40 rounded-full transition-all" style={{ width: `${item.weight * 3}%` }} />
                  </div>
                </div>
                <div className="w-64 hidden md:block">
                  <span className="font-medium text-foreground text-sm">{item.factor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <InsightCalloutBox variant="important">
          <strong>Proximity ist der große Unterschied:</strong> Bei Google Maps macht die Entfernung zum 
          Suchenden ~25% des Rankings aus — ein Faktor, den du kaum beeinflussen kannst. Bei organischen 
          Rankings spielt Entfernung fast keine Rolle.
        </InsightCalloutBox>
      </section>

      {/* Wann was */}
      <section id="wann-was" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Wann welche Strategie?</h2>

        <div className="space-y-6">
          <div className="p-5 border border-primary/30 bg-primary/5 rounded-xl">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" />
              Priorisiere Google Maps SEO wenn:
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Du ein Ladenlokal oder Praxis hast (Walk-In-Geschäft)</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Deine Kunden „in meiner Nähe" suchen</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Du schnelle Ergebnisse brauchst (Budget für Content fehlt)</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Dein Business von Laufkundschaft oder Notdienst-Suchen lebt</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Deine Wettbewerber schwache GBP-Profile haben</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Branchen:</strong> Restaurants, Friseure, Ärzte, Handwerker, Fitness-Studios, Einzelhandel
            </p>
          </div>

          <div className="p-5 border border-border bg-muted/30 rounded-xl">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Search className="h-5 w-5" />
              Priorisiere Organic SEO wenn:
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><span className="mt-0.5">✓</span> Du ein Service-Area-Business ohne Ladenlokal betreibst</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✓</span> Deine Kunden informationell suchen (Recherche vor Kauf)</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✓</span> Du mehrere Städte oder eine ganze Region abdeckst</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✓</span> Du dich als Experte positionieren willst (E-E-A-T)</li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✓</span> Deine Wettbewerber bereits starke Maps-Präsenzen haben</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Branchen:</strong> Berater, Agenturen, Anwälte, Steuerberater, IT-Dienstleister
            </p>
          </div>
        </div>
      </section>

      {/* Synergieeffekte */}
      <section id="synergie" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Synergieeffekte nutzen</h2>

        <p className="text-muted-foreground mb-6">
          Die stärkste Strategie kombiniert beide Ansätze. Diese Maßnahmen stärken Maps UND organische Rankings gleichzeitig:
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Lokale Landingpages",
              maps: "Stärken GBP-Relevanz durch verlinkte Website",
              organic: "Ranken für [Keyword + Stadt] organisch",
              icon: Globe,
            },
            {
              title: "Bewertungen mit Keywords",
              maps: "Direkt 16% Ranking-Einfluss",
              organic: "Keywords in Reviews erscheinen in Rich Snippets",
              icon: Users,
            },
            {
              title: "Lokale Backlinks",
              maps: "Stärken Citation-Signale und Prominenz",
              organic: "Verbessern Domain Authority",
              icon: BarChart3,
            },
            {
              title: "Schema Markup (LocalBusiness)",
              maps: "Hilft Google, GBP mit Website zu verknüpfen",
              organic: "Ermöglicht Rich Results in organischer Suche",
              icon: Target,
            },
          ].map((item, i) => (
            <div key={i} className="p-4 border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-primary" />
                </span>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="p-2.5 bg-primary/5 rounded-lg">
                  <span className="text-xs font-medium text-primary">📍 Maps:</span>
                  <p className="text-muted-foreground mt-1">{item.maps}</p>
                </div>
                <div className="p-2.5 bg-muted/50 rounded-lg">
                  <span className="text-xs font-medium text-foreground">🔍 Organic:</span>
                  <p className="text-muted-foreground mt-1">{item.organic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <InsightCalloutBox variant="pro-tip">
          <strong>Empfohlene Aufteilung für lokale Unternehmen:</strong> 60% Google Maps SEO 
          (GBP, Bewertungen, Citations) + 40% Organic SEO (lokaler Content, Landingpages, Backlinks). 
          Starte immer mit Maps — der ROI kommt schneller.
        </InsightCalloutBox>
      </section>

      {/* ROI-Vergleich */}
      <section id="roi-vergleich" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">ROI-Vergleich</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">Metrik</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">Maps SEO</th>
                <th className="p-3 text-left font-semibold text-foreground border-b border-border">Organic SEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monatliche Kosten (DIY)", "0-50 €", "100-500 €"],
                ["Monatliche Kosten (Agentur)", "150-400 €", "500-2.000 €"],
                ["Zeit bis erste Ergebnisse", "2-4 Wochen", "3-6 Monate"],
                ["Zeit bis volle Wirkung", "2-3 Monate", "6-12 Monate"],
                ["Direkte Leads/Monat*", "10-50 Aktionen", "100-500 Besucher"],
                ["Conversion-Rate*", "15-25% (Anruf/Route)", "2-5% (Formular/Kauf)"],
                ["Nachhaltigkeit", "Mittel (regelmäßige Pflege)", "Hoch (Compound-Effekt)"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="p-3 border-b border-border font-medium text-foreground">{row[0]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[1]}</td>
                  <td className="p-3 border-b border-border text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          *Durchschnittswerte für lokale KMU. Tatsächliche Zahlen variieren nach Branche und Standort.
        </p>
      </section>

      {/* Fehler */}
      <section id="fehler" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufige Fehler</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { error: "Nur Maps SEO ohne Website-Content", fix: "Website stärkt Maps-Ranking und fängt informationelle Suchen ab" },
            { error: "Nur Organic SEO ohne GBP-Optimierung", fix: "42% der lokalen Klicks gehen an Maps — ohne GBP bist du unsichtbar" },
            { error: "Bewertungen nicht aktiv managen", fix: "16% des Maps-Rankings kommen von Reviews — systematisch sammeln" },
            { error: "NAP-Daten nicht konsistent halten", fix: "Widersprüchliche Daten schwächen beide Kanäle" },
            { error: "Gleichen Content für alle Standorte", fix: "Jeder Standort braucht eine eigene lokalisierte Landingpage" },
            { error: "Schema Markup vergessen", fix: "LocalBusiness Schema verbindet GBP mit Website und stärkt beides" },
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
          <li>→ <Link to="/blog/google-maps-ranking-verbessern" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking verbessern</Link></li>
          <li>→ <Link to="/blog/google-maps-seo-ranking-faktoren" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Ranking-Faktoren erklärt</Link></li>
          <li>→ <Link to="/blog/local-seo-vs-organisch" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO vs. Organic SEO</Link></li>
          <li>→ <Link to="/blog/local-seo-vs-maps-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Local SEO vs. Google Maps SEO</Link></li>
          <li>→ <Link to="/blog/ultimate-guide-local-seo" className="text-primary underline decoration-primary/30 hover:decoration-primary">Ultimate Guide: Local SEO komplett</Link></li>
          <li>→ <Link to="/blog/google-maps-audit-template" className="text-primary underline decoration-primary/30 hover:decoration-primary">Google Maps Audit Template (75+ Punkte)</Link></li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h2>
        <BlogFAQSection faqs={faqItems} />
      </section>

      <HelpfulnessWidget articleSlug="google-maps-seo-vs-organic-seo" />

      <SourcesSection sources={sources} />

      <BlogCTAABTest articleSlug="google-maps-seo-vs-organic-seo" position="end" />
    </ArticleLayout>
  );
};

export default GoogleMapsSeoVsOrganicSeo;
