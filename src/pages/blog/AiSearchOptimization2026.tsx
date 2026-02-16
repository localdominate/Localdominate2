import ArticleLayout from "@/components/blog/ArticleLayout";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import BlogCTAABTest from "@/components/blog/BlogCTAABTest";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AutoLexikonParagraph from "@/components/blog/AutoLexikonParagraph";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertTriangle, Bot, Sparkles, Search, Target, TrendingUp, Eye, Globe, Zap, Brain } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AiSearchOptimization2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("ai-search-optimization-2026", language);

  if (!article) return null;

  const tocItems = [
    { id: "revolution", title: "Die AI-Search-Revolution" },
    { id: "plattformen", title: "AI-Suchplattformen im Vergleich" },
    { id: "local-seo-impact", title: "Auswirkungen auf Local SEO" },
    { id: "optimierung", title: "Optimierungsstrategien" },
    { id: "schema-markup", title: "Schema Markup für AI" },
    { id: "content-strategie", title: "Content-Strategie für AI-Suche" },
    { id: "zero-click", title: "Zero-Click-Suchen meistern" },
    { id: "voice-search", title: "Voice Search & AI" },
    { id: "messung", title: "Erfolg messen" },
    { id: "zukunft", title: "Ausblick 2027+" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    { question: "Wird Google durch AI-Suche ersetzt?", answer: "Nein, aber Google verändert sich fundamental. AI Overviews sind bereits in 30%+ der Suchergebnisse integriert. Google bleibt dominant, aber die Art wie Ergebnisse präsentiert werden, wandelt sich von Links zu direkten Antworten." },
    { question: "Was ist der Unterschied zwischen AI Overviews und ChatGPT-Suche?", answer: "AI Overviews sind Googles integrierte AI-Antworten direkt in den Suchergebnissen. ChatGPT-Suche ist eine eigenständige Plattform, die Web-Ergebnisse in Konversationsform liefert. Beide nutzen AI, aber die Optimierungsstrategien unterscheiden sich." },
    { question: "Verliere ich Traffic durch AI-Suche?", answer: "Für informationelle Suchanfragen ja – bis zu 40% weniger Klicks bei Fragen, die AI direkt beantwortet. Für lokale transaktionale Suchen ist der Verlust deutlich geringer (5-10%), da Nutzer zum Handeln (kaufen, buchen, besuchen) motiviert sind." },
    { question: "Wie optimiere ich für ChatGPT und Perplexity?", answer: "1. Strukturierte Daten (Schema Markup) für maschinenlesbare Informationen, 2. Klare, faktische Antworten in deinem Content, 3. E-E-A-T Signale stärken, 4. FAQ-Seiten mit präzisen Antworten, 5. llms.txt Datei für AI-Crawler bereitstellen." },
    { question: "Was ist llms.txt und brauche ich das?", answer: "llms.txt ist ein Standard für Websites, um AI-Crawlern strukturierte Informationen bereitzustellen. Es ist wie robots.txt, aber für Large Language Models. Für Local SEO empfohlen: Unternehmensdaten, Leistungen und FAQs dort aufnehmen." },
    { question: "Wie beeinflusst AI die lokale Suche?", answer: "AI verändert lokale Suchen durch: 1. Direkte Antworten statt Linklisten, 2. Konversationelle Suche ('Finde einen guten Italiener mit Terrasse in der Nähe'), 3. Multimodale Suche (Bild + Text), 4. Personalisierte Empfehlungen." },
    { question: "Soll ich meine SEO-Strategie komplett umstellen?", answer: "Nein! Die Grundlagen bleiben: Google Business Profil, Bewertungen, lokaler Content, technisches SEO. Ergänze deine Strategie um AI-spezifische Optimierungen wie strukturierte Daten, FAQ-Content und Schema Markup." },
    { question: "Wie messe ich AI-Search-Traffic?", answer: "In Google Search Console siehst du Impressionen und Klicks aus AI Overviews. Für ChatGPT/Perplexity: Überwache Referrer in deiner Analytics. Neue Metriken: 'Brand Mentions in AI', 'Citation Frequency', 'Answer Position'." },
    { question: "Welche Branchen sind am stärksten von AI-Suche betroffen?", answer: "Informationsdienstleister (Ärzte, Anwälte, Berater) sind stark betroffen, da ihre FAQ-Inhalte direkt von AI beantwortet werden. Handwerker und Restaurants weniger, da dort die Handlungsabsicht (buchen, bestellen) dominiert." },
    { question: "Was ist GEO (Generative Engine Optimization)?", answer: "GEO ist die neue Disziplin der Suchmaschinenoptimierung, die sich speziell auf die Optimierung für AI-gestützte Suchmaschinen konzentriert. Sie ergänzt traditionelles SEO um Strategien für Large Language Models." },
  ];

  const plattformen = [
    { name: "Google AI Overviews", marktanteil: "~90%", status: "Vollständig integriert", relevanz: "Kritisch", beschreibung: "Direkt in Google-Suche integriert" },
    { name: "ChatGPT Search", marktanteil: "~5%", status: "Wachsend", relevanz: "Hoch", beschreibung: "OpenAI's Suchintegration mit GPT-5" },
    { name: "Perplexity AI", marktanteil: "~2%", status: "Wachsend", relevanz: "Mittel", beschreibung: "Quellenbasierte AI-Antwortengine" },
    { name: "Bing Copilot", marktanteil: "~3%", status: "Stabil", relevanz: "Mittel", beschreibung: "Microsofts AI-integrierte Suche" },
    { name: "Apple Intelligence", marktanteil: "iOS-Nutzer", status: "Neu", relevanz: "Wachsend", beschreibung: "Siri + AI für lokale Suchen auf iPhone" },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <KeyTakeawaysBox items={[
        "30%+ aller Google-Suchen zeigen bereits AI Overviews – Tendenz steigend",
        "Zero-Click-Suchen erreichen 2026 einen Anteil von 65% bei informationellen Queries",
        "Lokale transaktionale Suchen sind weniger betroffen – Handlungsabsicht schützt",
        "Schema Markup und strukturierte Daten sind die neue SEO-Währung für AI",
        "GEO (Generative Engine Optimization) wird zur Pflichtdisziplin neben klassischem SEO",
      ]} />

      {/* Revolution Section */}
      <section id="revolution" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">2026: Die AI-Search-Revolution ist da</h2>

        <div className="bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-950/30 dark:to-blue-950/30 border border-violet-200 dark:border-violet-800 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-8 w-8 text-violet-600" />
            <div>
              <h3 className="font-bold text-lg">Das Ende der 10 blauen Links</h3>
              <p className="text-sm text-muted-foreground">Die Suche wandelt sich von Linklisten zu direkten Antworten</p>
            </div>
          </div>
          <AutoLexikonParagraph>
            2026 ist das Jahr, in dem sich die Suche grundlegend verändert hat. Google AI Overviews, ChatGPT Search, Perplexity und Apple Intelligence haben die Art verändert, wie Menschen Informationen finden. Für lokale Unternehmen bedeutet das: <strong>Wer nicht für AI-Suche optimiert, wird unsichtbar.</strong>
          </AutoLexikonParagraph>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-1">65%</div>
              <div className="text-sm text-muted-foreground">Zero-Click-Suchen 2026</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">30%+</div>
              <div className="text-sm text-muted-foreground">Suchen mit AI Overviews</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">40%</div>
              <div className="text-sm text-muted-foreground">weniger Klicks bei Info-Queries</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">5-10%</div>
              <div className="text-sm text-muted-foreground">weniger Klicks bei lokalen Suchen</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Platforms Comparison */}
      <section id="plattformen" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">AI-Suchplattformen im Vergleich</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-semibold">Plattform</th>
                <th className="text-left p-3 font-semibold">Marktanteil</th>
                <th className="text-left p-3 font-semibold">Status</th>
                <th className="text-left p-3 font-semibold">Relevanz</th>
              </tr>
            </thead>
            <tbody>
              {plattformen.map((p, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.beschreibung}</div>
                  </td>
                  <td className="p-3 text-muted-foreground">{p.marktanteil}</td>
                  <td className="p-3 text-muted-foreground">{p.status}</td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      p.relevanz === "Kritisch" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                      p.relevanz === "Hoch" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}>{p.relevanz}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Local SEO Impact */}
      <section id="local-seo-impact" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Was AI-Suche für Local SEO bedeutet</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Was sich NICHT ändert
              </h3>
              <ul className="space-y-2">
                {[
                  "Google Business Profil bleibt zentral",
                  "Bewertungen bleiben Rankingfaktor #1",
                  "NAP-Konsistenz bleibt wichtig",
                  "Lokale transaktionale Suchen bleiben stabil",
                  "Mobile-First Indexierung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Was sich ÄNDERT
              </h3>
              <ul className="space-y-2">
                {[
                  "Weniger Klicks auf organische Ergebnisse",
                  "Konversationelle Suchanfragen nehmen zu",
                  "Schema Markup wird entscheidend wichtiger",
                  "Content muss maschinenlesbar & klar strukturiert sein",
                  "Brand Mentions werden wichtiger als Links",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section id="optimierung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">10 Optimierungsstrategien für AI-Suche</h2>
        
        <div className="space-y-4">
          {[
            { nr: 1, title: "FAQ-Content ausbauen", desc: "AI-Systeme lieben klar formulierte Frage-Antwort-Paare. Erstelle umfassende FAQ-Seiten für dein Business." },
            { nr: 2, title: "Schema Markup implementieren", desc: "LocalBusiness, FAQPage, HowTo, Product Schema – je mehr strukturierte Daten, desto besser kann AI dich zitieren." },
            { nr: 3, title: "llms.txt bereitstellen", desc: "Erstelle eine /llms.txt Datei mit strukturierten Unternehmensdaten für AI-Crawler." },
            { nr: 4, title: "E-E-A-T Signale stärken", desc: "Expertise, Erfahrung, Autorität und Vertrauen – AI bevorzugt vertrauenswürdige Quellen." },
            { nr: 5, title: "Direkte Antworten formulieren", desc: "Beantworte Fragen in den ersten 2-3 Sätzen klar und präzise – das wird von AI bevorzugt zitiert." },
            { nr: 6, title: "Multimodale Inhalte erstellen", desc: "Bilder mit Alt-Text, Videos mit Transkripten – AI verarbeitet zunehmend verschiedene Medientypen." },
            { nr: 7, title: "Brand Building intensivieren", desc: "AI-Systeme zitieren bekannte Marken häufiger. Investiere in Brand Awareness." },
            { nr: 8, title: "Konversationelle Keywords nutzen", desc: "Optimiere für natürliche Sprache: 'Wo finde ich einen guten Zahnarzt mit Notdienst in der Nähe?'" },
            { nr: 9, title: "Daten aktuell halten", desc: "AI hasst veraltete Informationen. Halte Öffnungszeiten, Preise und Angebote stets aktuell." },
            { nr: 10, title: "Lokale Expertise zeigen", desc: "Schreibe über lokale Events, Stadtteile, Community – das signalisiert lokale Autorität." },
          ].map((item) => (
            <div key={item.nr} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {item.nr}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schema Markup */}
      <section id="schema-markup" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Schema Markup: Die Sprache der AI</h2>
        <AutoLexikonParagraph>
          Strukturierte Daten sind 2026 wichtiger denn je. Sie helfen AI-Systemen, dein Unternehmen zu verstehen und korrekt zu zitieren. Für lokale Unternehmen sind besonders relevant: <strong>LocalBusiness Schema, FAQPage, AggregateRating, OpeningHoursSpecification</strong> und <strong>GeoCoordinates</strong>.
        </AutoLexikonParagraph>
      </section>

      {/* Content Strategy */}
      <section id="content-strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Content-Strategie für AI-Suche</h2>
        <AutoLexikonParagraph>
          Der Schlüssel für AI-optimierten Content: <strong>Klarheit über Kreativität</strong>. AI-Systeme bevorzugen faktische, gut strukturierte Inhalte mit klaren Überschriften, Listen und präzisen Antworten. Das heißt nicht, dass dein Content langweilig sein muss – aber er muss maschinenlesbar sein.
        </AutoLexikonParagraph>
      </section>

      {/* Zero Click */}
      <section id="zero-click" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Zero-Click-Suchen meistern</h2>
        <AutoLexikonParagraph>
          65% aller Suchen enden 2026 ohne Klick auf ein Suchergebnis. Für lokale Unternehmen bedeutet das: Dein Google Business Profil muss <strong>alle relevanten Informationen direkt liefern</strong> – Öffnungszeiten, Telefon, Adresse, Fotos, Bewertungen, Produkte. Der „Klick" wird zum Anruf oder zur Navigation.
        </AutoLexikonParagraph>
      </section>

      {/* Voice Search */}
      <section id="voice-search" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Voice Search & AI: Die natürliche Suche</h2>
        <AutoLexikonParagraph>
          Mit Apple Intelligence, Google Assistant und Alexa wird Voice Search immer intelligenter. Lokale Suchen per Sprache sind besonders relevant: „Hey Google, welche Bäckerei hat jetzt geöffnet?" – Dein Business muss für diese konversationellen Anfragen optimiert sein.
        </AutoLexikonParagraph>
      </section>

      {/* Measuring */}
      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">AI-Search-Erfolg messen</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Klassische Metriken", items: ["Impressionen in Search Console", "Klicks & CTR", "Ranking-Positionen"] },
            { title: "AI-spezifische Metriken", items: ["AI Overview Impressionen", "Citation Frequency", "Brand Mentions in AI"] },
            { title: "Lokale Metriken", items: ["Google Business Aufrufe", "Anrufe & Routenplanung", "Bewertungs-Wachstum"] },
          ].map((col, i) => (
            <Card key={i} className="border-primary/10">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Future */}
      <section id="zukunft" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Ausblick 2027+: Was kommt als Nächstes?</h2>
        <AutoLexikonParagraph>
          Die AI-Suche entwickelt sich rasant weiter. Erwarte für 2027: <strong>Multimodale Suche</strong> (Bild + Text + Sprache gleichzeitig), <strong>AI-Agenten</strong> die für Nutzer direkt buchen und bestellen, und <strong>hyper-personalisierte Ergebnisse</strong> basierend auf Nutzerhistorie und Kontext.
        </AutoLexikonParagraph>
        <AutoLexikonParagraph>
          Für lokale Unternehmen bedeutet das: <strong>Die Grundlagen stimmen lassen</strong> (Google Business, Bewertungen, strukturierte Daten) und gleichzeitig <strong>early adopter</strong> für neue Technologien sein.
        </AutoLexikonParagraph>
      </section>

      <BlogCTAABTest articleSlug="ai-search-optimization-2026" position="end" />

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Häufige Fragen zu AI Search Optimization</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <HelpfulnessWidget articleSlug="ai-search-optimization-2026" />
    </ArticleLayout>
  );
};

export default AiSearchOptimization2026;
