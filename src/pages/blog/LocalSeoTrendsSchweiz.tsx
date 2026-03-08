import { getArticleBySlug } from "@/data/blogArticles";
import ArticleLayout from "@/components/blog/ArticleLayout";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import InsightCalloutBox from "@/components/blog/InsightCalloutBox";
import CityRankingChallenges from "@/components/blog/CityRankingChallenges";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import RelatedCityGuides from "@/components/blog/RelatedCityGuides";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Shield, Zap, Clock, Target, BarChart3, Languages, Mountain, Building2 } from "lucide-react";

const LocalSeoTrendsSchweiz = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-trends-schweiz", language);

  if (!article) return null;

  const tocItems = [
    { id: "intro", title: "Überblick 2026" },
    { id: "ai-suche", title: "AI-Suche in der Schweiz" },
    { id: "mehrsprachigkeit", title: "Mehrsprachige SEO-Trends" },
    { id: "branchentrends", title: "Branchen-Trends" },
    { id: "kantone", title: "Kantonale Unterschiede" },
    { id: "technisch", title: "Technische Trends" },
    { id: "ausblick", title: "Ausblick 2027" },
    { id: "faq", title: "FAQ" }
  ];

  const faqItems = [
    { question: "Welche Local SEO Trends sind 2026 in der Schweiz am wichtigsten?", answer: "AI-gestützte Suche via Google SGE, mehrsprachige Voice Search, hyper-lokale Kantons-Optimierung und die wachsende Bedeutung von local.ch und search.ch als Citation-Quellen stehen im Fokus." },
    { question: "Wie verändert AI Search das lokale Suchverhalten in der Schweiz?", answer: "Schweizer nutzen zunehmend AI-Assistenten für lokale Empfehlungen. Da diese auf strukturierten Daten basieren, wird Schema Markup und konsistente NAP-Pflege noch wichtiger." },
    { question: "Sind die Trends in der Deutschschweiz anders als in der Romandie?", answer: "Ja. Die Romandie orientiert sich stärker an französischen Suchmustern, während die Deutschschweiz eher deutschen Trends folgt. Tessin zeigt italienische Suchcharakteristiken." },
    { question: "Welche Branchen profitieren am meisten von den neuen Trends?", answer: "Gesundheitswesen (Wahlarzt-Suchen), Gastronomie (Voice Search für Reservierungen) und Handwerk (Near-Me-Suchen) zeigen das stärkste Wachstum bei lokalen Suchanfragen." },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <p className="lead text-xl text-muted-foreground mb-8" id="intro">
        <strong>Die Schweiz ist Europas anspruchsvollster Local SEO Markt.</strong> Vier 
        Landessprachen, höchste Kaufkraft und technikaffine Konsumenten machen 2026 zu einem 
        entscheidenden Jahr. Von AI-gestützter Suche bis zu kantonaler Hyper-Lokalisierung — 
        diese Trends bestimmen, wer in der Schweiz lokal gefunden wird.
      </p>

      {/* Key Trend Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">+42%</div>
          <div className="text-sm text-muted-foreground">Voice Search Wachstum CH</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">67%</div>
          <div className="text-sm text-muted-foreground">nutzen AI-Assistenten lokal</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">4.7★</div>
          <div className="text-sm text-muted-foreground">Minimum-Erwartung CH</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary">83%</div>
          <div className="text-sm text-muted-foreground">Mobile lokale Suchen</div>
        </div>
      </div>

      <BlogCTAABTest position="start" articleSlug="local-seo-trends-schweiz" />

      {/* AI Search Section */}
      <h2 id="ai-suche" className="text-2xl font-bold mt-12 mb-6">Wie verändert AI Search das lokale Suchverhalten in der Schweiz?</h2>
      
      <AutoLexikonParagraph>
        Google SGE (Search Generative Experience) rollt in der Schweiz langsamer aus als in den USA, 
        aber die Auswirkungen sind bereits spürbar. Schweizer AI-Early-Adopters nutzen verstärkt 
        conversational queries — und erwarten präzise lokale Antworten in ihrer Sprache.
      </AutoLexikonParagraph>

      <InsightCalloutBox variant="stat" statValue="+58%" statLabel="Anstieg conversationaler lokaler Suchanfragen in der Deutschschweiz">
        Suchanfragen wie "Wo finde ich einen guten Coiffeur in Zürich Enge?" ersetzen zunehmend 
        klassische Keyword-Suchen wie "Coiffeur Zürich Enge".
      </InsightCalloutBox>

      <div className="space-y-4 my-8">
        <h3 className="text-lg font-semibold">Die 5 wichtigsten AI-Search-Trends für Schweizer KMU</h3>
        {[
          { trend: 'Conversational Local Queries', desc: 'Natürlichsprachliche Anfragen auf Schweizerdeutsch und Hochdeutsch nehmen massiv zu. FAQ-Content wird zum Ranking-Faktor.', icon: Languages },
          { trend: 'AI-Empfehlungen ersetzen Listings', desc: 'Google AI Overviews empfehlen direkt 2-3 lokale Anbieter statt 10 blaue Links. Wer hier erscheint, bekommt den Grossteil des Traffics.', icon: Zap },
          { trend: 'Strukturierte Daten als Pflicht', desc: 'Schema Markup (LocalBusiness, speakable) wird von AI-Systemen bevorzugt. Ohne strukturierte Daten keine AI-Visibilität.', icon: Target },
          { trend: 'Review Sentiment Analysis', desc: 'Google analysiert nicht mehr nur Sternebewertungen, sondern den Inhalt der Reviews. Qualitative Bewertungen wiegen schwerer.', icon: BarChart3 },
          { trend: 'Multimodale Suche', desc: 'Google Lens und visuelle Suche wachsen: Schweizer fotografieren Schaufenster, Gerichte oder Schilder und erwarten lokale Ergebnisse.', icon: Globe },
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

      {/* Multilingual Trends */}
      <h2 id="mehrsprachigkeit" className="text-2xl font-bold mt-12 mb-6">Welche mehrsprachigen SEO-Trends prägen den Schweizer Markt?</h2>

      <AutoLexikonParagraph>
        Die Mehrsprachigkeit der Schweiz wird im Local SEO zunehmend zum Wettbewerbsvorteil. 
        Unternehmen, die alle Sprachregionen korrekt abdecken, dominieren die AI-generierten Ergebnisse.
      </AutoLexikonParagraph>

      <InsightCalloutBox variant="pro-tip" title="Sprachregionen-Strategie 2026">
        <strong>Deutschschweiz:</strong> Schweizerdeutsche Begriffe in FAQ und Alt-Tags. 
        <strong> Romandie:</strong> Französische Keywords mit CH-Lokalisierung (nicht FR-Französisch). 
        <strong> Tessin:</strong> Italienische Keywords mit .ch-Signalen. 
        Jede Region braucht eigene hreflang-Tags und separate Google Business Profile.
      </InsightCalloutBox>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Languages className="w-8 h-8 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Deutschschweiz</h4>
            <p className="text-xs text-muted-foreground mt-1">"Coiffeur", "Beiz", "Velo" — Swiss-DE Keywords wachsen +35%</p>
            <Badge variant="outline" className="mt-2 text-[10px]">65% Marktanteil</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Romandie</h4>
            <p className="text-xs text-muted-foreground mt-1">FR-CH Voice Search wächst am schnellsten (+52%)</p>
            <Badge variant="outline" className="mt-2 text-[10px]">23% Marktanteil</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Mountain className="w-8 h-8 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Tessin</h4>
            <p className="text-xs text-muted-foreground mt-1">Grenzgänger-Suchen (IT→CH) werden SEO-relevant</p>
            <Badge variant="outline" className="mt-2 text-[10px]">8% Marktanteil</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Industry Trends */}
      <h2 id="branchentrends" className="text-2xl font-bold mt-12 mb-6">Welche Branchen-Trends dominieren Local SEO in der Schweiz?</h2>

      <AutoLexikonParagraph>
        Bestimmte Branchen erleben in der Schweiz überproportionales Wachstum bei lokalen Suchanfragen. 
        Die hohe Kaufkraft und das Qualitätsbewusstsein schaffen einzigartige Chancen.
      </AutoLexikonParagraph>

      <div className="space-y-4 my-8">
        {[
          { industry: '🏥 Gesundheitswesen', trend: 'Wahlarzt-Suchen +45%', detail: '"Wahlarzt [Fachgebiet] [Stadt]" wird zum dominanten Suchpattern. Patienten recherchieren intensiver und vergleichen Bewertungen.', opportunity: 'Speakable Schema für medizinische FAQs implementieren' },
          { industry: '🍽️ Gastronomie', trend: 'Reservierungs-Suchen +38%', detail: 'Voice Search für "Restaurant reservieren in der Nähe" explodiert. Google Business Reservierungs-Integration wird Pflicht.', opportunity: 'Menü als strukturierte Daten hinterlegen' },
          { industry: '🔧 Handwerk', trend: 'Notfall-Suchen +55%', detail: '"Sanitär Notfall Zürich jetzt" — zeitkritische lokale Suchen wachsen am schnellsten. Sofortige Erreichbarkeit wird zum Rankingfaktor.', opportunity: '24h-Verfügbarkeit in Google Business prominent anzeigen' },
          { industry: '💼 Finanzdienstleistungen', trend: 'Vergleichs-Suchen +30%', detail: 'Schweizer vergleichen lokale Finanzberater, Treuhänder und Versicherungen intensiver online.', opportunity: 'Kompetenz-Signale (Zertifizierungen, Auszeichnungen) in Schema aufnehmen' },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-bold text-foreground">{item.industry}</h4>
                <Badge className="text-[10px] bg-emerald-500/10 text-emerald-700 border-emerald-500/20" variant="outline">
                  <TrendingUp className="w-3 h-3 mr-1" /> {item.trend}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-2.5 mt-3">
                <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span><strong>Chance:</strong> {item.opportunity}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cantonal Differences */}
      <h2 id="kantone" className="text-2xl font-bold mt-12 mb-6">Wie unterscheiden sich die Local SEO Trends nach Kantonen?</h2>

      <AutoLexikonParagraph>
        Die kantonalen Unterschiede in der Schweiz werden im Local SEO immer relevanter. 
        Was in Zürich funktioniert, kann in Basel oder Genf völlig anders aussehen.
      </AutoLexikonParagraph>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          { canton: 'Zürich (ZH)', trend: 'AI-Adoption führend', detail: 'Höchste AI-Search-Nutzung, stärkster Wettbewerb. Hyper-lokale Kreis-Optimierung wird Standard.', difficulty: 'Sehr hoch' as const },
          { canton: 'Bern (BE)', trend: 'Zweisprachigkeits-Bonus', detail: 'DE/FR-Grenzregion: Bilinguale Unternehmen ranken überproportional gut in beiden Sprachregionen.', difficulty: 'Hoch' as const },
          { canton: 'Basel-Stadt (BS)', trend: 'Grenzgänger-SEO wächst', detail: 'Tri-nationale Region (CH/DE/FR): Grenzgänger-Keywords werden zum eigenen Suchsegment.', difficulty: 'Hoch' as const },
          { canton: 'Genf (GE)', trend: 'International + Lokal', detail: 'Höchster Expat-Anteil: EN/FR-Keywords dominieren. "International" als Qualifier wächst.', difficulty: 'Sehr hoch' as const },
          { canton: 'Luzern (LU)', trend: 'Tourismus-Lokalbalance', detail: 'Touristen vs. Einheimische: Saisonale Keyword-Strategien werden komplexer.', difficulty: 'Mittel' as const },
          { canton: 'Tessin (TI)', trend: 'IT-CH Nische', detail: 'Italienischsprachige Suchen mit .ch-Präferenz: Wenig Wettbewerb, hohe Conversion.', difficulty: 'Mittel' as const },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-bold text-foreground">{item.canton}</h4>
                <Badge variant="outline" className={`text-[10px] ${item.difficulty === 'Sehr hoch' ? 'bg-destructive/10 text-destructive border-destructive/20' : item.difficulty === 'Hoch' ? 'bg-rose-500/10 text-rose-700 border-rose-500/20' : 'bg-amber-500/10 text-amber-700 border-amber-500/20'}`}>
                  {item.difficulty}
                </Badge>
              </div>
              <p className="text-xs font-semibold text-primary mb-1">{item.trend}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Trends */}
      <h2 id="technisch" className="text-2xl font-bold mt-12 mb-6">Welche technischen SEO-Trends sind 2026 in der Schweiz entscheidend?</h2>

      <div className="space-y-4 my-8">
        <InsightCalloutBox variant="important" title="Core Web Vitals: Schweizer Standard">
          Schweizer Hosting auf .ch-Servern verbessert LCP um durchschnittlich 200ms gegenüber 
          DE-Hosting. 2026 wird Server-Standort zum messbaren Rankingfaktor für Schweizer Suchergebnisse.
        </InsightCalloutBox>

        {[
          { title: '.ch-Domain als Trust-Signal', desc: 'Google gewichtet .ch-Domains für Schweizer Suchanfragen stärker. Unternehmen mit .com oder .de verlieren bis zu 15% Visibilität.', icon: Shield },
          { title: 'Structured Data Adoption', desc: 'Nur 23% der Schweizer KMU nutzen Schema Markup — ein riesiges Differenzierungspotenzial gegenüber dem Wettbewerb.', icon: Target },
          { title: 'Mobile-First wird Mobile-Only', desc: '83% der lokalen Suchen in der Schweiz sind mobil. Desktop-Optimierung verliert zunehmend an Bedeutung für lokale Keywords.', icon: Zap },
          { title: 'Local Pack AI Integration', desc: 'Das Google Local Pack zeigt zunehmend AI-generierte Zusammenfassungen. Bewertungs-Sentiment und Business-Attribute werden wichtiger als reine Bewertungsanzahl.', icon: BarChart3 },
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
      <h2 id="ausblick" className="text-2xl font-bold mt-12 mb-6">Was erwartet Schweizer KMU im Local SEO 2027?</h2>

      <AutoLexikonParagraph>
        Der Schweizer Local SEO Markt wird sich 2027 weiter fragmentieren. AI-gestützte Suche 
        wird zum Standard, und Unternehmen ohne strukturierte Daten werden unsichtbar.
      </AutoLexikonParagraph>

      <InsightCalloutBox variant="warning" title="Jetzt handeln">
        Bis Ende 2026 sollte jedes Schweizer KMU mindestens <strong>Schema Markup</strong>, 
        <strong> mehrsprachige Google Business Profile</strong> und eine <strong>aktive Bewertungsstrategie</strong> implementiert haben. 
        Wer jetzt wartet, verliert 2027 massiv an lokaler Sichtbarkeit.
      </InsightCalloutBox>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Q1 2027</h4>
            <p className="text-xs text-muted-foreground mt-1">Google SGE vollständig in CH verfügbar</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Q2 2027</h4>
            <p className="text-xs text-muted-foreground mt-1">Local.ch AI-Integration für Bewertungen</p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <h4 className="text-sm font-bold">Q3 2027</h4>
            <p className="text-xs text-muted-foreground mt-1">Voice Search überholt Text für lokale Suchen</p>
          </CardContent>
        </Card>
      </div>

      <HelpfulnessWidget articleSlug="local-seo-trends-schweiz" />
      <RelatedCityGuides currentSlug="local-seo-trends-schweiz" />
      <BlogCTAABTest position="end" articleSlug="local-seo-trends-schweiz" />
    </ArticleLayout>
  );
};

export default LocalSeoTrendsSchweiz;
