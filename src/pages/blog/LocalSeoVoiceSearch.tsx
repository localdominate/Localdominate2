import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogImage from "@/components/blog/BlogImage";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import AutoLexikonText from "@/components/blog/AutoLexikonText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AiCitationStrategyBox from "@/components/blog/AiCitationStrategyBox";
import SourcesSection from "@/components/blog/SourcesSection";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MessageCircle, MapPin, Clock, Phone, Star } from "lucide-react";

const LocalSeoVoiceSearch = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug("local-seo-voice-search", language)!;

  const tocItems = [
    { id: "voice-search-verstehen", title: "Was ist Voice Search und warum ist es wichtig?" },
    { id: "conversational-keywords", title: "Wie findest du die richtigen Voice Search Keywords?" },
    { id: "featured-snippets", title: "Wie eroberst du Featured Snippets für Voice Search?" },
    { id: "google-business", title: "Wie optimierst du Google Business für Sprachsuche?" },
    { id: "technische-optimierung", title: "Welche technischen Faktoren beeinflussen Voice Search?" },
    { id: "lokale-fragen", title: "Wie beantwortest du lokale Fragen für Voice Search?" },
    { id: "zukunft", title: "Wie entwickelt sich Voice Search in Zukunft?" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "40% aller lokalen Suchen werden per Sprache durchgeführt",
    "Sprachsuchen sind länger und formuliert als Fragen",
    "Featured Snippets werden bevorzugt vorgelesen",
    "Google Business-Daten sind die Hauptquelle für Voice-Antworten",
    "Schnelle Ladezeiten sind für Voice Search entscheidend"
  ];

  const voiceSearchExamples = [
    { 
      icon: MapPin, 
      typed: "Italiener München", 
      voice: "Hey Google, wo finde ich ein gutes italienisches Restaurant in meiner Nähe?",
      optimization: "FAQ: 'Wo finde ich italienisches Essen in München?'"
    },
    { 
      icon: Clock, 
      typed: "Friseur offen Sonntag", 
      voice: "Alexa, welcher Friseur hat am Sonntag geöffnet?",
      optimization: "GBP: Sonntagsöffnungszeiten eintragen"
    },
    { 
      icon: Phone, 
      typed: "Elektriker Notdienst", 
      voice: "Siri, ruf einen Elektriker-Notdienst in Berlin an",
      optimization: "Click-to-Call prominent platzieren"
    },
    { 
      icon: Star, 
      typed: "beste Pizza", 
      voice: "Hey Google, welche Pizzeria hat die besten Bewertungen in Köln?",
      optimization: "Aktiv Bewertungen sammeln"
    }
  ];
  const faqItems = [
    { question: "Wie messe ich Voice Search Traffic?", answer: "Direkt messen ist schwierig, da Google Voice-Suchen nicht separat ausweist. Indirekte Indikatoren: Mehr Long-Tail-Traffic, Zunahme von Fragen in der Search Console, mehr Anrufe über Google Business." },
    { question: "Soll ich für alle Assistenten optimieren?", answer: "Fokussieren Sie auf Google Assistant, da er den größten Marktanteil hat. Siri nutzt Apple Maps und Yelp. Alexa hat für lokale Suchen weniger Relevanz." },
    { question: "Wie wichtig ist Dialekt für Voice Search?", answer: "Google versteht zunehmend regionale Dialekte. Für Keywords ist Hochdeutsch besser, aber regionale Begriffe können Vorteile bringen." },
    { question: "Gibt es Voice-Search-spezifische Ranking-Faktoren?", answer: "Studien zeigen, dass Voice-Ergebnisse tendenziell von Seiten mit schneller Ladezeit, hoher Domain Authority, HTTPS und Featured Snippets stammen." },
    { question: "Werden Voice-Suchen weniger durch KI-Chatbots?", answer: "KI-Chatbots und Voice Search ergänzen sich. Für lokale, aktionsbasierte Suchen bleibt Voice relevant." }
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <BlogImage
        src="/placeholder.svg"
        alt="Person nutzt Sprachassistent für lokale Suche"
        caption="Sprachsuche verändert, wie Kunden lokale Unternehmen finden"
      />

      <KeyTakeawaysBox items={keyTakeaways} />

      <section id="voice-search-verstehen">
        <h2>Was ist Voice Search und warum ist es wichtig?</h2>
        <AutoLexikonText>
          <p>
            "Hey Google, wo ist der nächste Zahnarzt?" – Sprachsuchen sind 
            keine Zukunftsmusik mehr, sondern Realität. Für lokale Unternehmen 
            bedeutet das eine fundamentale Änderung der SEO-Strategie.
          </p>
          
          <h3>Warum Voice Search anders ist</h3>
          <ul>
            <li><strong>Länger:</strong> Durchschnittlich 29 Wörter vs. 2-3 bei getippten Suchen</li>
            <li><strong>Natürlicher:</strong> Formuliert als vollständige Fragen</li>
            <li><strong>Lokaler:</strong> 40% aller Sprachsuchen haben lokale Intention</li>
            <li><strong>Aktionsorientiert:</strong> Oft mit "ruf an", "navigiere zu", "buche"</li>
          </ul>

          <h3>Die Sprachassistenten</h3>
          <ul>
            <li><strong>Google Assistant:</strong> Nutzt Google-Suchergebnisse und Knowledge Graph</li>
            <li><strong>Siri (Apple):</strong> Nutzt Apple Maps und Yelp</li>
            <li><strong>Alexa (Amazon):</strong> Nutzt Yelp und lokale Daten</li>
            <li><strong>Cortana (Microsoft):</strong> Nutzt Bing-Daten</li>
          </ul>

          <p>
            <strong>Wichtig:</strong> Google Assistant dominiert den Markt, daher 
            sollte Ihre Optimierung primär auf Google ausgerichtet sein.
          </p>
        </AutoLexikonText>
      </section>

      <section id="conversational-keywords">
        <h2>Wie findest du die richtigen Voice Search Keywords?</h2>
        <AutoLexikonText>
          <p>
            Der größte Unterschied zu klassischer Keyword-Optimierung: Bei 
            Sprachsuchen müssen Sie für natürliche Fragen optimieren.
          </p>

          <h3>Getippt vs. Gesprochen</h3>
          <div className="space-y-4 my-6">
            {voiceSearchExamples.map((example, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <example.icon className="h-4 w-4 text-primary" />
                    Beispiel {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Getippt:</strong> {example.typed}</p>
                  <p className="flex items-start gap-2">
                    <Mic className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Gesprochen:</strong> "{example.voice}"</span>
                  </p>
                  <p className="text-muted-foreground">→ {example.optimization}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3>W-Fragen für Voice Search</h3>
          <ul>
            <li><strong>Wo:</strong> "Wo ist die nächste Apotheke?"</li>
            <li><strong>Was:</strong> "Was kostet eine Autowäsche?"</li>
            <li><strong>Wann:</strong> "Wann öffnet der Supermarkt?"</li>
            <li><strong>Wie:</strong> "Wie lange dauert eine Zahnreinigung?"</li>
            <li><strong>Welcher:</strong> "Welcher Friseur ist der beste?"</li>
          </ul>

          <h3>Long-Tail Keywords nutzen</h3>
          <p>
            Statt "Friseur Berlin" optimieren Sie für:
          </p>
          <ul>
            <li>"Welcher Friseur in Berlin Mitte ist gut für Locken?"</li>
            <li>"Wo kann ich in Berlin ohne Termin Haare schneiden lassen?"</li>
            <li>"Friseur in meiner Nähe der auch abends offen hat"</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="featured-snippets">
        <h2>Wie eroberst du Featured Snippets für Voice Search?</h2>
        <AutoLexikonText>
          <p>
            Bei Sprachsuchen liest der Assistent oft nur ein Ergebnis vor – 
            das Featured Snippet (Position 0). Dieses zu erobern ist Gold wert.
          </p>

          <h3>So gewinnen Sie Featured Snippets</h3>
          <ul>
            <li><strong>Frage als H2/H3:</strong> "Was kostet ein Hochzeitsfotograf?"</li>
            <li><strong>Direkte Antwort:</strong> Im ersten Absatz (40-60 Wörter)</li>
            <li><strong>Listen:</strong> Nummerierte Schritte oder Aufzählungen</li>
            <li><strong>Tabellen:</strong> Für Vergleiche und Preise</li>
          </ul>

          <h3>Snippet-optimiertes FAQ-Format</h3>
          <p>Strukturieren Sie Ihren Content so:</p>
          <div className="bg-muted p-4 rounded-lg my-4 font-mono text-sm">
            <p>&lt;h2&gt;Was kostet ein Elektriker pro Stunde?&lt;/h2&gt;</p>
            <p>&lt;p&gt;Ein Elektriker kostet zwischen 45€ und 85€ pro Stunde. 
            Die Preise variieren je nach Region und Spezialisierung. 
            Für Notdienste außerhalb der Geschäftszeiten fallen 
            Zuschläge von 50-100% an.&lt;/p&gt;</p>
          </div>

          <h3>Lokale Featured Snippets</h3>
          <p>
            Besonders wertvoll für lokale Unternehmen:
          </p>
          <ul>
            <li>"Beste [Branche] in [Stadt]" → Listicle-Artikel</li>
            <li>"Was kostet [Service] in [Region]" → Preisübersicht</li>
            <li>"Öffnungszeiten [Ihr Unternehmen]" → Korrekte GBP-Daten</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="google-business">
        <h2>Wie optimierst du Google Business für Sprachsuche?</h2>
        <AutoLexikonText>
          <p>
            Google Assistant bezieht lokale Informationen primär aus 
            Google Business Profilen. Ihre GBP-Optimierung ist Voice-Optimierung.
          </p>

          <h3>Kritische Daten für Voice Search</h3>
          <ul>
            <li><strong>Öffnungszeiten:</strong> Präzise und aktuell (besonders Feiertage!)</li>
            <li><strong>Telefonnummer:</strong> Für "ruf an"-Befehle</li>
            <li><strong>Adresse:</strong> Für Navigation</li>
            <li><strong>Kategorien:</strong> Richtige Haupt- und Nebenkategorien</li>
            <li><strong>Attribute:</strong> Rollstuhlgerecht, WLAN, Außenbereich, etc.</li>
          </ul>

          <h3>Q&A-Bereich nutzen</h3>
          <p>
            Der Q&A-Bereich in Google Business ist perfekt für Voice Search:
          </p>
          <ul>
            <li>Stellen Sie selbst häufige Fragen und beantworten Sie sie</li>
            <li>Formulieren Sie Fragen natürlich (wie man sprechen würde)</li>
            <li>Geben Sie präzise, kurze Antworten</li>
          </ul>

          <h3>Bewertungen und Keywords</h3>
          <p>
            Wenn Kunden in Bewertungen Phrasen wie "bester Kaffee der Stadt" 
            verwenden, stärkt das Ihre Position für entsprechende Sprachsuchen.
          </p>
        </AutoLexikonText>
      </section>

      <section id="technische-optimierung">
        <h2>Welche technischen Faktoren beeinflussen Voice Search?</h2>
        <AutoLexikonText>
          <h3>Speed ist entscheidend</h3>
          <p>
            Google bevorzugt für Voice-Antworten Seiten, die schnell laden. 
            Voice-Ergebnisse laden im Durchschnitt 52% schneller als 
            normale Suchergebnisse.
          </p>
          <ul>
            <li>Ladezeit unter 3 Sekunden (ideal: unter 1,5 Sekunden)</li>
            <li>Core Web Vitals optimieren</li>
            <li>Mobile-First Design</li>
          </ul>

          <h3>Strukturierte Daten</h3>
          <p>
            Schema Markup hilft Google, Ihre Inhalte zu verstehen:
          </p>
          <ul>
            <li><strong>LocalBusiness:</strong> Grundlegende Unternehmensdaten</li>
            <li><strong>FAQPage:</strong> Für FAQ-Bereiche</li>
            <li><strong>OpeningHoursSpecification:</strong> Öffnungszeiten</li>
            <li><strong>Review:</strong> Kundenbewertungen</li>
            <li><strong>HowTo:</strong> Für Anleitungen</li>
          </ul>

          <h3>HTTPS ist Pflicht</h3>
          <p>
            70% der Sprachsuchergebnisse stammen von HTTPS-Seiten. 
            Ohne SSL-Zertifikat haben Sie bei Voice Search kaum Chancen.
          </p>
        </AutoLexikonText>
      </section>

      <section id="lokale-fragen">
        <h2>Wie beantwortest du lokale Fragen für Voice Search?</h2>
        <AutoLexikonText>
          <h3>FAQ-Seite für Voice Search</h3>
          <p>
            Erstellen Sie eine umfassende FAQ-Seite mit Fragen, die Kunden 
            tatsächlich stellen würden:
          </p>
          <ul>
            <li>"Wo kann ich in [Stadt] am Sonntag frühstücken?"</li>
            <li>"Welcher Zahnarzt in [Stadtteil] nimmt noch neue Patienten?"</li>
            <li>"Gibt es einen 24-Stunden-Schlüsseldienst in [Stadt]?"</li>
            <li>"Wie viel kostet eine Autowäsche in meiner Nähe?"</li>
          </ul>

          <h3>Content-Strategie für Voice</h3>
          <ul>
            <li><strong>Direkter Einstieg:</strong> Beantworten Sie Fragen im ersten Satz</li>
            <li><strong>Natürliche Sprache:</strong> Schreiben Sie, wie Sie sprechen</li>
            <li><strong>Kurze Absätze:</strong> Leicht zu erfassen und vorzulesen</li>
            <li><strong>Klare Struktur:</strong> Überschriften als Fragen</li>
          </ul>

          <h3>Lokale Landing Pages</h3>
          <p>
            Für Unternehmen mit mehreren Standorten: Erstellen Sie für jeden 
            Standort eine eigene Seite, die lokale Voice-Fragen beantwortet.
          </p>
        </AutoLexikonText>
      </section>

      <section id="zukunft">
        <h2>Wie entwickelt sich Voice Search in Zukunft?</h2>
        <AutoLexikonText>
          <h3>Trends 2026 und darüber hinaus</h3>
          <ul>
            <li><strong>Multimodale Suchen:</strong> Sprache + Bild ("Was ist das für eine Blume?")</li>
            <li><strong>Konversations-Suchen:</strong> Folgefragen ohne Kontext-Wiederholung</li>
            <li><strong>Proaktive Assistenten:</strong> Empfehlungen ohne explizite Frage</li>
            <li><strong>Voice Commerce:</strong> Direkte Buchungen per Sprache</li>
          </ul>

          <h3>Was das für lokale Unternehmen bedeutet</h3>
          <p>
            Die Optimierung für Voice Search ist kein "Nice-to-have" mehr. 
            Unternehmen, die jetzt optimieren, sichern sich einen Vorsprung 
            für die Zukunft.
          </p>

          <h3>Checkliste: Voice-Ready machen</h3>
          <ul>
            <li>✓ Google Business komplett und aktuell</li>
            <li>✓ FAQ-Seite mit natürlichen Fragen</li>
            <li>✓ Schnelle, mobile Website</li>
            <li>✓ Schema Markup implementiert</li>
            <li>✓ Content in natürlicher Sprache</li>
            <li>✓ Lokale Keywords als Fragen formuliert</li>
          </ul>
        </AutoLexikonText>
      </section>

      <section id="faq">
        <h2>Häufige Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wie messe ich Voice Search Traffic?</AccordionTrigger>
            <AccordionContent>
              Direkt messen ist schwierig, da Google Voice-Suchen nicht separat 
              ausweist. Indirekte Indikatoren: Mehr Long-Tail-Traffic, Zunahme 
              von Fragen in der Search Console, mehr Anrufe über Google Business. 
              Google Analytics zeigt Geräte – viele mobile Suchen sind Sprachsuchen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Soll ich für alle Assistenten optimieren?</AccordionTrigger>
            <AccordionContent>
              Fokussieren Sie auf Google Assistant, da er den größten Marktanteil 
              hat und die gleiche Optimierung auch für normale Google-Suche gilt. 
              Siri nutzt Apple Maps und Yelp – dort präsent zu sein ist ein Bonus. 
              Alexa hat für lokale Suchen weniger Relevanz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Wie wichtig ist Dialekt für Voice Search?</AccordionTrigger>
            <AccordionContent>
              Interessante Frage! Google versteht zunehmend regionale Dialekte. 
              Für Keywords ist Hochdeutsch besser, aber regionale Begriffe 
              können Vorteile bringen. "Brötchen" vs. "Semmel" vs. "Weckle" – 
              je nach Region können regionale Begriffe relevanter sein.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Gibt es Voice-Search-spezifische Ranking-Faktoren?</AccordionTrigger>
            <AccordionContent>
              Studien zeigen, dass Voice-Ergebnisse tendenziell von Seiten mit: 
              schneller Ladezeit, hoher Domain Authority, HTTPS, kurzen Antworten 
              und Featured Snippets stammen. Die Grundlagen-SEO bleibt wichtig, 
              aber prägnante, direkte Antworten werden bevorzugt.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Werden Voice-Suchen weniger durch KI-Chatbots?</AccordionTrigger>
            <AccordionContent>
              KI-Chatbots und Voice Search ergänzen sich. Google Assistant 
              integriert zunehmend generative KI. Für lokale Suchen bleibt 
              Voice relevant – "Hey Google, navigiere zum nächsten Supermarkt" 
              wird nicht durch ChatGPT ersetzt. Lokale, aktionsbasierte Suchen 
              profitieren weiter von Voice.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <AiCitationStrategyBox articleSlug="local-seo-voice-search" />
      <HelpfulnessWidget articleSlug="local-seo-voice-search" />

      <SourcesSection sources={[
        { title: "Google: Sprachsuche verstehen", url: "https://support.google.com/assistant/" },
        { title: "BrightLocal: Voice Search Study", url: "https://www.brightlocal.com/" },
        { title: "Backlinko: Voice Search SEO Study", url: "https://backlinko.com/voice-search-seo-study" }
      ]} />
    </ArticleLayout>
  );
};

export default LocalSeoVoiceSearch;
