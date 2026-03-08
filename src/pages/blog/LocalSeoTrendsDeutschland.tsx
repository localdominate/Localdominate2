import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Shield, Zap, Clock, Target, BarChart3, MapPin, Building2, Users } from "lucide-react";

const LocalSeoTrendsDeutschland = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-trends-deutschland", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Überblick 2026" },
    { id: "ai-suche", title: "AI Search & SGE" },
    { id: "regionale-trends", title: "Regionale Unterschiede" },
    { id: "branchentrends", title: "Branchen-Trends" },
    { id: "google-business", title: "Google Business Neuerungen" },
    { id: "technisch", title: "Technische Entwicklungen" },
    { id: "ausblick", title: "Ausblick 2027" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Was sind die wichtigsten Local SEO Trends in Deutschland 2026?", answer: "AI-gestützte Suchergebnisse (Google SGE), hyper-lokale Stadtteil-Optimierung, Voice Search auf Deutsch und die wachsende Bedeutung von Bewertungs-Sentiment-Analyse sind die Top-Trends." },
    { question: "Wie beeinflusst Google SGE lokale Suchergebnisse in Deutschland?", answer: "Google SGE zeigt AI-generierte Zusammenfassungen direkt in den Suchergebnissen. Für lokale Suchen bedeutet das: Weniger Klicks auf klassische Listings, mehr Gewicht auf strukturierte Daten und Bewertungsqualität." },
    { question: "Gibt es Unterschiede zwischen Nord- und Süddeutschland im Local SEO?", answer: "Ja, erhebliche. Süddeutschland (Bayern, BaWü) hat höhere Kaufkraft und stärkeren Wettbewerb. Norddeutschland zeigt mehr Potenzial für First-Mover. Ostdeutschland wächst am schnellsten." },
    { question: "Welche Rolle spielt Voice Search für lokale Unternehmen in Deutschland?", answer: "Voice Search wächst um 35% jährlich für lokale Anfragen. Besonders 'in der Nähe'-Suchen und Öffnungszeiten-Anfragen erfolgen zunehmend per Sprache." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Deutschland ist Europas grösster Local SEO Markt — und 2026 verändert er sich radikal.</strong> AI-generierte 
        Suchergebnisse, das Ende klassischer Zehn-blaue-Links-Seiten und eine neue Generation von 
        Voice-Search-Nutzern zwingen lokale Unternehmen zum Umdenken. Dieser Trend-Report zeigt, 
        was jetzt wichtig ist.
      </p>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">3.5 Mio</div>
          <div className="text-sm text-muted-foreground">KMU in Deutschland</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">+35%</div>
          <div className="text-sm text-muted-foreground">Voice Search Wachstum</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">72%</div>
          <div className="text-sm text-muted-foreground">besuchen nach lokaler Suche</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">81%</div>
          <div className="text-sm text-muted-foreground">Mobile lokale Suchen</div>
        </div>
      </div>

      <BlogCTAABTest position="start" articleSlug="local-seo-trends-deutschland" />

      {/* AI Search */}
      <h2 id="ai-suche" className="text-2xl font-bold mt-12 mb-6">Wie verändert AI Search die lokale Suche in Deutschland?</h2>

      <AutoLexikonParagraph>
        Google SGE ist seit Anfang 2026 in Deutschland verfügbar und verändert lokale Suchergebnisse 
        fundamental. Statt einer Liste von 10 Ergebnissen sehen Nutzer AI-generierte Empfehlungen — 
        und nur 2-3 lokale Anbieter werden prominent vorgestellt.
      </AutoLexikonParagraph>

      <InsightCalloutBox variant="stat" statValue="46%" statLabel="der lokalen Suchanfragen zeigen bereits AI Overviews">
        In Grossstädten wie Berlin, München und Hamburg sind AI Overviews für lokale Suchen bereits 
        Standard. Ländliche Regionen folgen bis Q3 2026.
      </InsightCalloutBox>

      <div className="space-y-4 my-8">
        <h3 className="text-lg font-semibold">Die 6 grössten AI-Search-Veränderungen für lokale Unternehmen</h3>
        {[
          { trend: 'AI Overviews im Local Pack', desc: 'Google zeigt AI-Zusammenfassungen über dem Local Pack. Unternehmen mit starken Bewertungen und vollständigen Profilen werden bevorzugt.', icon: Zap },
          { trend: 'Conversational Queries dominieren', desc: '"Welcher Zahnarzt in der Nähe hat gute Bewertungen und nimmt neue Patienten?" ersetzt "Zahnarzt Berlin". Längere, natürlichere Anfragen.', icon: Users },
          { trend: 'Review Mining durch Google AI', desc: 'Google AI analysiert Bewertungstexte und extrahiert Stärken/Schwächen. "Freundliches Personal" wird zum Ranking-Signal.', icon: BarChart3 },
          { trend: 'Zero-Click Local Search', desc: 'Nutzer finden Öffnungszeiten, Telefonnummer und Bewertungen direkt in der AI-Antwort — ohne auf die Website zu klicken.', icon: Target },
          { trend: 'Personalisierte lokale Ergebnisse', desc: 'Google berücksichtigt Suchhistorie und Standort immer präziser. Ergebnisse unterscheiden sich je nach Nutzer stärker.', icon: MapPin },
          { trend: 'Multi-Device Local Journey', desc: 'Suche startet auf dem Handy, wird auf dem Desktop vertieft, Besuch erfolgt physisch. Konsistenz über alle Touchpoints wird kritisch.', icon: Globe },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex items-start gap-3">
              <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.trend}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Regional Trends */}
      <h2 id="regionale-trends" className="text-2xl font-bold mt-12 mb-6">Welche regionalen Local SEO Unterschiede gibt es in Deutschland?</h2>

      <AutoLexikonParagraph>
        Deutschland ist kein einheitlicher Markt. Nord, Süd, Ost und West zeigen komplett 
        unterschiedliche Suchverhalten, Wettbewerbsniveaus und Wachstumsraten im Local SEO.
      </AutoLexikonParagraph>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          { region: '🏔️ Süddeutschland', cities: 'München, Stuttgart, Nürnberg', trend: 'Premium + Dialekt', detail: 'Höchster Wettbewerb, höchste Kaufkraft. Bayerische und schwäbische Dialekt-Keywords bieten Nischen-Chancen.', growth: '+18%', difficulty: 'Sehr hoch' as const },
          { region: '🌊 Norddeutschland', cities: 'Hamburg, Bremen, Kiel', trend: 'Maritime Nischen', detail: 'Moderater Wettbewerb, starkes Tourismus-Suchvolumen. Hafen-bezogene Keywords sind unterbedient.', growth: '+25%', difficulty: 'Hoch' as const },
          { region: '🏗️ Ostdeutschland', cities: 'Berlin, Dresden, Leipzig', trend: 'Schnellstes Wachstum', detail: 'Local SEO Adoption wächst am schnellsten. First-Mover-Vorteil in vielen Nischen noch möglich.', growth: '+38%', difficulty: 'Mittel' as const },
          { region: '🏭 Westdeutschland', cities: 'Köln, Düsseldorf, Dortmund', trend: 'Ballungsraum-SEO', detail: 'Dichte Stadtlandschaft mit überlappenden Einzugsgebieten. Abgrenzung zum Nachbar-Ort wird zum SEO-Challenge.', growth: '+22%', difficulty: 'Hoch' as const },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-foreground">{item.region}</h4>
                <Badge className="text-[10px] bg-emerald-500/10 text-emerald-700 border-emerald-500/20" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" /> {item.growth}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{item.cities}</p>
              <p className="text-xs font-semibold text-primary mb-1">{item.trend}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <Badge variant="outline" className={`mt-2 text-[10px] ${item.difficulty === 'Sehr hoch' ? 'bg-destructive/10 text-destructive border-destructive/20' : item.difficulty === 'Hoch' ? 'bg-rose-500/10 text-rose-700 border-rose-500/20' : 'bg-amber-500/10 text-amber-700 border-amber-500/20'}`}>
                Wettbewerb: {item.difficulty}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Industry Trends */}
      <h2 id="branchentrends" className="text-2xl font-bold mt-12 mb-6">Welche Branchen erleben das stärkste Local SEO Wachstum?</h2>

      <div className="space-y-4 my-8">
        {[
          { industry: '🏥 Gesundheitswesen', trend: 'YMYL-Signale entscheidend', growth: '+42%', detail: 'Google verschärft Qualitätsanforderungen für medizinische Suchergebnisse. E-E-A-T und Arztbewertungen werden zum Gatekeeper.', action: 'Arzt-Qualifikationen als Schema Markup hinterlegen' },
          { industry: '🍕 Gastronomie', trend: 'Bestell-Integration', growth: '+35%', detail: '"Bestellen in der Nähe" verschmilzt mit lokaler Suche. Google integriert Lieferdienst-Optionen direkt in Suchergebnisse.', action: 'Speisekarte als strukturierte Daten + Bestell-Link in GBP' },
          { industry: '🔧 Handwerk', trend: 'Notfall-Keywords explodieren', growth: '+55%', detail: '"Klempner Notdienst jetzt" — zeitkritische Suchen wachsen am schnellsten. Sofortige Erreichbarkeit wird zum #1 Rankingfaktor.', action: 'Google Business Messaging aktivieren + Reaktionszeit < 5 Min' },
          { industry: '🏋️ Fitness & Wellness', trend: 'Erlebnis-Suchen', growth: '+28%', detail: 'Statt "Fitnessstudio Berlin" wird "bestes Yoga Studio mit Sauna Berlin Friedrichshain" gesucht. Long-Tail dominiert.', action: 'Ausstattungsmerkmale und Erfahrungsberichte prominent platzieren' },
          { industry: '🏠 Immobilien', trend: 'Hyper-lokal + Daten', growth: '+32%', detail: 'Stadtteil-Expertise wird zum Ranking-Kriterium. Makler, die lokale Marktdaten teilen, ranken besser.', action: 'Stadtteil-Reports als Content-Strategie nutzen' },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-foreground">{item.industry}</h4>
                <Badge className="text-[10px] bg-emerald-500/10 text-emerald-700 border-emerald-500/20" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" /> {item.growth}
                </Badge>
              </div>
              <p className="text-xs font-semibold text-primary mb-1">{item.trend}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-2.5 mt-3">
                <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span><strong>Aktion:</strong> {item.action}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Google Business Updates */}
      <h2 id="google-business" className="text-2xl font-bold mt-12 mb-6">Welche Google Business Neuerungen betreffen deutsche KMU?</h2>

      <InsightCalloutBox variant="important" title="Google Business Profile 2026">
        Google hat das Business Profile massiv erweitert. Neue Features für den deutschen Markt: 
        <strong> AI-generierte Geschäftsbeschreibungen</strong>, <strong> automatische Foto-Tags</strong> 
        und <strong> Produkt-Katalog-Integration</strong>. Unternehmen, die diese Features nutzen, 
        erhalten bis zu 35% mehr Profilaufrufe.
      </InsightCalloutBox>

      <div className="space-y-3 my-8">
        {[
          { feature: 'AI Business Descriptions', status: 'Aktiv in DE', impact: 'Google schlägt automatisch Beschreibungen vor — prüfe und optimiere sie aktiv!' },
          { feature: 'Performance Insights 2.0', status: 'Rollout Q2 2026', impact: 'Detailliertere Daten zu Suchbegriffen, Nutzerverhalten und Conversion-Pfaden.' },
          { feature: 'Messaging AI-Assistent', status: 'Beta in DE', impact: 'AI beantwortet häufige Kundenfragen automatisch basierend auf GBP-Daten.' },
          { feature: 'Local Inventory Ads', status: 'Erweitert', impact: 'Produktverfügbarkeit in Google Maps: Einzelhändler zeigen Lagerbestand in Echtzeit.' },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-3 flex items-start gap-3">
              <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">{item.feature}</h4>
                  <Badge variant="outline" className="text-[10px]">{item.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{item.impact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Trends */}
      <h2 id="technisch" className="text-2xl font-bold mt-12 mb-6">Welche technischen SEO-Trends prägen 2026 den deutschen Markt?</h2>

      <div className="space-y-4 my-8">
        <InsightCalloutBox variant="warning" title="DSGVO & Local SEO 2026">
          Die verschärfte ePrivacy-Verordnung betrifft lokale Unternehmen: Cookie-Banner müssen 
          für lokale Tracking-Tools (Google Analytics, Bewertungs-Widgets) DSGVO-konform sein. 
          Server-Side-Tracking wird zur Alternative.
        </InsightCalloutBox>

        {[
          { title: 'Core Web Vitals 2.0', desc: 'INP (Interaction to Next Paint) ersetzt FID vollständig. Interaktive Elemente wie Maps und Bewertungs-Widgets müssen optimiert werden.', icon: Zap },
          { title: 'Schema Markup Expansion', desc: 'Neue Schema-Typen für lokale Dienste (Handwerker, Notdienste, Terminbuchung) werden von Google stärker gewichtet.', icon: Target },
          { title: 'Edge SEO & CDN', desc: 'Lokales Hosting auf deutschen Servern wird zum messbaren Rankingfaktor. CDN mit deutschen PoPs empfohlen.', icon: Globe },
          { title: 'Progressive Web Apps lokal', desc: 'PWAs für lokale Unternehmen (Speisekarten, Terminbuchung) verbessern Engagement und werden von Google bevorzugt indexiert.', icon: Building2 },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4 flex items-start gap-3">
              <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Outlook */}
      <h2 id="ausblick" className="text-2xl font-bold mt-12 mb-6">Was bringt 2027 für Local SEO in Deutschland?</h2>

      <InsightCalloutBox variant="pro-tip" title="Die 3 Must-Dos bis Ende 2026">
        <strong>1.</strong> Schema Markup für alle lokalen Angebote implementieren. 
        <strong> 2.</strong> Bewertungsstrategie mit Fokus auf qualitative Reviews aufbauen. 
        <strong> 3.</strong> Content auf conversational queries umstellen — FAQ-Seiten werden zu den wichtigsten Landing Pages.
      </InsightCalloutBox>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Kurzfristig</h4>
            <p className="text-xs text-muted-foreground mt-1">GBP vollständig optimieren + Schema Markup</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Mittelfristig</h4>
            <p className="text-xs text-muted-foreground mt-1">AI-optimierten Content + Voice Search Strategy</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Langfristig</h4>
            <p className="text-xs text-muted-foreground mt-1">Omnichannel Local Presence + AI-Assistenten</p>
          </CardContent>
        </Card>
      </div>

      <HelpfulnessWidget articleSlug="local-seo-trends-deutschland" />
      <RelatedCityGuides currentSlug="local-seo-trends-deutschland" />
      <BlogCTAABTest position="end" articleSlug="local-seo-trends-deutschland" />
    </ArticleLayout>
  );
};

export default LocalSeoTrendsDeutschland;
