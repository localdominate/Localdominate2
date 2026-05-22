import ArticleLayout from "@/components/blog/ArticleLayout";
import TableOfContents from "@/components/blog/TableOfContents";
import KeyTakeawaysBox from "@/components/blog/KeyTakeawaysBox";
import HelpfulnessWidget from "@/components/blog/HelpfulnessWidget";
import AnswerBlock from "@/components/ai/AnswerBlock";
import { getArticleBySlug } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mic, Speaker, MapPin, ListChecks, AlertTriangle, BarChart3, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const SLUG = "voice-search-sprachassistenten-local-seo-2026";

const VoiceSearchSprachassistenten2026 = () => {
  const { language } = useLanguage();
  const article = getArticleBySlug(SLUG, language);
  if (!article) return null;

  const tocItems = [
    { id: "warum-voice", title: "Warum Voice Search 2026 wieder wichtig wird" },
    { id: "drei-assistenten", title: "Alexa, Siri, Google Assistant im Vergleich" },
    { id: "wie-funktioniert", title: "Wie Voice Search lokale Anfragen verarbeitet" },
    { id: "ranking-signale", title: "Ranking-Signale für Voice Search" },
    { id: "strategie", title: "7-Schritte-Plan" },
    { id: "messung", title: "Voice-Sichtbarkeit messen" },
    { id: "fehler", title: "Häufige Fehler" },
    { id: "faq", title: "FAQ" },
  ];

  const faqItems = [
    {
      question: "Warum wird Voice Search 2026 wieder relevant?",
      answer:
        'Drei Entwicklungen treiben das Comeback: 1) LLM-gestützte Sprachassistenten (Alexa+, Siri mit Apple Intelligence, Google Gemini) verstehen komplexe lokale Anfragen jetzt fehlerfrei. 2) Smart-Speaker- und Auto-Integration ist 2025/2026 zum Mainstream geworden. 3) CarPlay und Android Auto leiten Voice-Anfragen direkt an lokale Empfehlungen. In DACH werden 2026 schätzungsweise 35 % aller mobilen Local-Suchen per Sprache gestartet.',
    },
    {
      question: "Wie unterscheiden sich Alexa, Siri und Google Assistant für Local Search?",
      answer:
        'Alexa nutzt Bing- und Yelp-Daten plus Amazon-Reviews — ideal für E-Commerce und Lieferdienste. Siri nutzt Apple Business Connect, Apple Maps und seit iOS 18 Apple Intelligence mit ChatGPT-Fallback. Google Assistant nutzt Google Business Profil, Maps und Gemini-Modelle. Wer in DACH alle drei abdecken will, muss Bing Places, Apple Business Connect und Google Business Profil parallel pflegen — keine Plattform ersetzt die anderen.',
    },
    {
      question: "Welche Datenquellen nutzen Sprachassistenten für lokale Empfehlungen?",
      answer:
        'Sieben Quellen: 1) Google Business Profil (Google Assistant). 2) Apple Business Connect (Siri). 3) Bing Places (Alexa, Cortana, ChatGPT-Voice). 4) Yelp und Tripadvisor (alle drei). 5) Strukturierte Daten der Website (LocalBusiness, FAQ). 6) Bewertungs-Sentiment über alle Plattformen. 7) Wikidata-Entity. Konsistente NAP über alle Quellen ist Pflicht — Inkonsistenzen führen zu „Ich habe dazu keine Information"-Antworten.',
    },
    {
      question: "Wie unterscheiden sich Voice-Queries von getippten Suchanfragen?",
      answer:
        'Voice-Queries sind länger, konversationaler und enthalten meist eine W-Frage („Wo finde ich…", „Wann hat…"). Sie liegen typisch bei 7–12 Wörtern statt 2–4. Außerdem erwartet der Nutzer eine konkrete Antwort, keine Linkliste. Das bedeutet: Inhalte müssen Antwort-Format haben (40–60 Wörter pro Antwortblock), nicht Keyword-Format. Question-H2s und FAQ-Schema sind die wichtigsten Format-Hebel.',
    },
    {
      question: "Wie optimiere ich konkret für Voice Search?",
      answer:
        'Vier Maßnahmen mit höchstem Hebel: 1) FAQ-Sektion mit natürlichen W-Fragen und 40–60-Wort-Antworten auf jeder Hauptseite. 2) Google Business Profil Q&A aktiv beantworten. 3) Apple Business Connect und Bing Places vollständig pflegen. 4) Strukturierte Daten (LocalBusiness, FAQ, Service Schema) implementieren. Erste Effekte sind in 4–8 Wochen messbar — Voice Search reagiert deutlich schneller als klassische Suche.',
    },
    {
      question: "Kann ich Voice-Search-Sichtbarkeit überhaupt messen?",
      answer:
        'Indirekt. Es gibt keine „Voice Impressions"-Metrik. Drei Proxy-Quellen: 1) Google Business Profil-Anrufe (Voice führt überproportional zu Anrufen statt Klicks). 2) Routenanfragen in Apple Maps und Google Maps. 3) Manuelle Test-Queries („Hey Siri, finde…") mit Top-10-Keywords. Steigende Anrufrate bei stabilem Website-Traffic ist ein typischer Voice-Indikator.',
    },
  ];

  return (
    <ArticleLayout article={article} tocItems={tocItems} faqItems={faqItems}>
      <TableOfContents items={tocItems} />

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Voice Search war jahrelang ein überschätzter Trend. 2026 ist sie zurück — diesmal funktionsfähig. Alexa+, Siri mit Apple Intelligence und Google Assistant auf Gemini-Basis verstehen lokale Anfragen jetzt zuverlässig, und Smart Speaker, CarPlay und Android Auto haben die Nutzung zum Mainstream gemacht. Wer in DACH heute Voice ignoriert, verliert systematisch 30–40 % der mobilen Local-Suche. Dieser Guide zeigt, wie Alexa, Siri und Google Assistant lokale Anfragen verarbeiten, welche Signale sie gewichten und wie du mit 7 Schritten systematisch in Voice-Antworten landest.
      </p>

      <KeyTakeawaysBox
        items={[
          "2026 starten ~35 % aller mobilen Local-Suchen in DACH per Sprache",
          "Alexa nutzt Bing/Yelp, Siri nutzt Apple Business Connect, Google Assistant nutzt Google Business Profil",
          "Voice-Queries sind 7–12 Wörter lang und erwarten direkte Antworten, keine Linklisten",
          "FAQ-Schema und 40–60-Wort-Antwortblöcke sind die wichtigsten Format-Hebel",
          "Konsistente NAP über Google, Apple, Bing, Yelp und Tripadvisor ist Pflicht",
          "Voice-Sichtbarkeit zeigt sich primär in steigenden Anrufen und Routenanfragen",
        ]}
      />

      <section id="warum-voice" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Mic className="w-7 h-7 text-primary" />
          Warum ist Voice Search 2026 wieder relevant?
        </h2>
        <AnswerBlock question="Was hat sich bei Voice Search seit 2023 verändert?">
          Drei Entwicklungen: 1) LLM-Integration (Apple Intelligence, Gemini in Google Assistant, GPT in Alexa+) macht Sprachassistenten konversational und kontextfähig. 2) Smart Speaker und CarPlay/Android Auto sind 2025/2026 in DACH zum Standard geworden. 3) Voice Commerce hat über Alexa+ und Apple Pay einen messbaren Anteil am lokalen Umsatz erreicht. Voice Search ist 2026 keine Spielerei mehr — sie ist primärer Eingangskanal für mobile Local-Suche.
        </AnswerBlock>
        <p className="mt-4">
          Drei strukturelle Treiber:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong>LLM-gestützte Verständlichkeit:</strong> Sprachassistenten verarbeiten 2026 komplexe DACH-Dialekte fehlerfrei.</li>
          <li><strong>Hardware-Ubiquität:</strong> Smart Speaker, AirPods, CarPlay, Android Auto.</li>
          <li><strong>Vereinheitlichte Antwortmodelle:</strong> Alle drei Anbieter generieren konversationale Antworten statt Linklisten.</li>
        </ul>
      </section>

      <section id="drei-assistenten" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-7 h-7 text-primary" />
          Alexa, Siri und Google Assistant im direkten Vergleich
        </h2>
        <AnswerBlock question="Welche Datenquellen nutzen Alexa, Siri und Google Assistant für lokale Empfehlungen?">
          Alexa nutzt Bing, Yelp und Amazon Reviews. Siri nutzt Apple Business Connect, Apple Maps und ChatGPT-Fallback. Google Assistant nutzt Google Business Profil, Google Maps und Gemini. Drittquellen (Yelp, Tripadvisor) werden von allen dreien als Sekundärsignal genutzt. Wer in DACH alle Sprachassistenten abdecken will, muss alle drei Hauptplattformen parallel pflegen — eine Quelle ersetzt die anderen nicht.
        </AnswerBlock>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Merkmal</th>
                <th className="border p-3 text-left">Alexa (Amazon)</th>
                <th className="border p-3 text-left">Siri (Apple)</th>
                <th className="border p-3 text-left">Google Assistant</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3 font-semibold">Primärquelle</td><td className="border p-3">Bing Places</td><td className="border p-3">Apple Business Connect</td><td className="border p-3">Google Business Profil</td></tr>
              <tr><td className="border p-3 font-semibold">Karten</td><td className="border p-3">HERE / Bing Maps</td><td className="border p-3">Apple Maps</td><td className="border p-3">Google Maps</td></tr>
              <tr><td className="border p-3 font-semibold">LLM-Backend</td><td className="border p-3">Eigenes + Anthropic</td><td className="border p-3">Apple Intelligence + ChatGPT</td><td className="border p-3">Gemini</td></tr>
              <tr><td className="border p-3 font-semibold">Drittportale</td><td className="border p-3">Yelp, Tripadvisor</td><td className="border p-3">Yelp, Tripadvisor</td><td className="border p-3">Yelp, Tripadvisor</td></tr>
              <tr><td className="border p-3 font-semibold">DACH-Marktanteil*</td><td className="border p-3">~15 %</td><td className="border p-3">~40 %</td><td className="border p-3">~45 %</td></tr>
              <tr><td className="border p-3 font-semibold">Pflichtsetup</td><td className="border p-3">Bing Places</td><td className="border p-3">Apple Business Connect</td><td className="border p-3">Google Business Profil</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-2">*Geschätzte Voice-Search-Anteile DACH 2026, basierend auf Smart-Speaker- und Smartphone-Marktdaten.</p>
        </div>
      </section>

      <section id="wie-funktioniert" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Speaker className="w-7 h-7 text-primary" />
          Wie verarbeitet Voice Search eine lokale Anfrage?
        </h2>
        <AnswerBlock question="Was passiert technisch, wenn ein Nutzer Siri oder Alexa nach einem lokalen Unternehmen fragt?">
          In vier Stufen: 1) Speech-to-Text wandelt Audio in Text. 2) Das LLM extrahiert Intent, Standort und Filter. 3) Parallel werden Plattform-APIs abgefragt (Apple Business Connect, Bing Places, Google Business Profil) plus Drittquellen (Yelp, Tripadvisor). 4) Ein Synthese-Schritt erstellt eine konversationale Antwort mit 1–3 Empfehlungen. Anders als klassische Suche kommt nur eine Antwort beim Nutzer an — Position 1 ist faktisch die einzige Position.
        </AnswerBlock>
        <p className="mt-4">
          Beispiel: Ein Nutzer in Köln sagt „Hey Siri, finde mir einen geöffneten Italiener in der Nähe mit guten Bewertungen". Siri zerlegt: Intent = Restaurant, Cuisine = italienisch, Status = geöffnet, Standort = aktuelle Position, Filter = ≥4 Sterne. Apple Business Connect liefert Kandidaten, Yelp/Tripadvisor ergänzen Reviews, Apple Maps ergänzt Distanz — Apple Intelligence wählt die beste Option und liest sie laut vor.
        </p>
      </section>

      <section id="ranking-signale" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-7 h-7 text-primary" />
          Welche Signale gewichtet Voice Search?
        </h2>
        <AnswerBlock question="Welche Ranking-Faktoren bestimmen, ob ich von Sprachassistenten empfohlen werde?">
          Sechs Signale: 1) Vollständigkeit der primären Plattform (GBP, Apple Business Connect, Bing Places). 2) Bewertungssentiment über alle Quellen. 3) NAP-Konsistenz über mindestens 5 Portale. 4) FAQ-Schema und LocalBusiness-Schema. 5) Geöffnet-Status in Echtzeit (Sonderöffnungszeiten gepflegt). 6) Entfernung zum Nutzer. Voice Search gibt typisch nur eine Empfehlung pro Anfrage — kleine Differenzen in diesen Signalen entscheiden über alles oder nichts.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Plattform-Vollständigkeit (~25 %):</strong> Alle Felder ausgefüllt, regelmäßige Updates, Sonderöffnungszeiten gepflegt.</li>
          <li><strong>Bewertungssentiment (~20 %):</strong> Mindestens 4,2 Sterne über alle Hauptquellen.</li>
          <li><strong>NAP-Konsistenz (~20 %):</strong> Adresse, Telefon, Öffnungszeiten identisch über mindestens 5 Portale.</li>
          <li><strong>Strukturierte Daten (~15 %):</strong> FAQ-Schema, LocalBusiness-Schema, Service-Schema.</li>
          <li><strong>Echtzeit-Status (~10 %):</strong> Aktuelle Öffnungszeiten inkl. Feiertagen.</li>
          <li><strong>Distanz (~10 %):</strong> Voice-Antworten priorisieren nahe Anbieter.</li>
        </ul>
      </section>

      <section id="strategie" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <ListChecks className="w-7 h-7 text-primary" />
          7-Schritte-Plan für Voice-Search-Sichtbarkeit
        </h2>
        <AnswerBlock question="Wie optimiere ich systematisch für Alexa, Siri und Google Assistant?">
          1) Google Business Profil zu 100 % vervollständigen. 2) Apple Business Connect einrichten und verifizieren. 3) Bing Places mit GBP-Import aufsetzen. 4) FAQ-Sektion mit W-Fragen und 40–60-Wort-Antworten auf jeder Hauptseite. 5) FAQ- und LocalBusiness-Schema implementieren. 6) Sonderöffnungszeiten und Feiertagspflege automatisieren. 7) Monatliche Test-Anfragen bei allen drei Assistenten durchführen. Erste Effekte in 4–8 Wochen messbar.
        </AnswerBlock>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li>
            <strong>Google Business Profil:</strong> Alle Felder, Q&A, Posts, Fotos monatlich pflegen, Sonderöffnungszeiten setzen.
          </li>
          <li>
            <strong>Apple Business Connect:</strong> Setup über businessconnect.apple.com — Details siehe <Link to="/blog/apple-business-connect-local-seo-2026" className="text-primary underline">ABC-Leitfaden</Link>.
          </li>
          <li>
            <strong>Bing Places:</strong> GBP-Import, Verifizierung, monatliche Updates — siehe <Link to="/blog/bing-copilot-local-seo-2026" className="text-primary underline">Bing & Copilot Guide</Link>.
          </li>
          <li>
            <strong>FAQ-Sektion:</strong> 5–8 W-Fragen pro Hauptseite mit 40–60-Wort-Antworten — exakt das Format, das Voice Search vorliest.
          </li>
          <li>
            <strong>Schema implementieren:</strong> LocalBusiness, FAQ, Service, OpeningHours-Specification — validieren via Rich Results Test.
          </li>
          <li>
            <strong>Echtzeit-Pflege:</strong> Sonderöffnungszeiten, Feiertage, Pausen — automatisiert über die GBP-API, falls möglich.
          </li>
          <li>
            <strong>Voice-Test-Audit:</strong> Monatlich je 5 Test-Anfragen bei Siri, Alexa und Google Assistant mit deinen Top-Keywords. Lücken sofort schließen.
          </li>
        </ol>
        <p className="mt-6">
          Voice ist Teil eines vollständigen Multi-Plattform-Setups. Kombiniere die Strategie mit der <Link to="/blog/ai-visibility-checklist" className="text-primary underline">AI Visibility Checklist</Link> und dem <Link to="/blog/google-ai-mode-local-seo-2026" className="text-primary underline">Google AI Mode Guide</Link>.
        </p>
      </section>

      <section id="messung" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Wie messe ich Voice-Search-Performance?
        </h2>
        <AnswerBlock question="Welche Metriken zeigen, ob meine Voice-Search-Optimierung wirkt?">
          Vier Proxy-Metriken: 1) GBP-Anrufrate — Voice führt überproportional zu Anrufen statt Klicks. 2) Routenanfragen in Google und Apple Maps. 3) Anteil mobiler Sessions ohne Suche (Direkt- oder Maps-Eingang). 4) Manuelle Voice-Tests bei Siri, Alexa und Google Assistant mit Top-10-Keywords. Steigende Anrufrate bei stabilem Website-Traffic ist der zuverlässigste Indikator für wachsende Voice-Sichtbarkeit.
        </AnswerBlock>
        <p className="mt-4">
          Trage die Daten in den <Link to="/blog/ai-visibility-index-local-seo-metrik" className="text-primary underline">AI Visibility Index</Link> ein, um Voice-Performance gegen ChatGPT Search, AI Mode und Copilot zu vergleichen.
        </p>
      </section>

      <section id="fehler" className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-primary" />
          Welche 5 Fehler verhindern Voice-Sichtbarkeit?
        </h2>
        <AnswerBlock question="Was sind die häufigsten Fehler bei der Voice-Search-Optimierung?">
          1) Nur Google Business Profil gepflegt — Siri und Alexa ignorieren das Unternehmen. 2) Sonderöffnungszeiten nicht hinterlegt — Voice-Antwort sagt „geschlossen" trotz offener Tür. 3) Keine FAQ-Sektion mit W-Fragen — Voice findet keine vorlesbare Antwort. 4) NAP-Inkonsistenz zwischen Plattformen — Assistant antwortet „Ich habe keine eindeutigen Informationen". 5) Fehlendes Schema — der Kontext für die Antwort-Synthese fehlt.
        </AnswerBlock>
        <ul className="list-disc pl-6 space-y-3 mt-6">
          <li><strong>Single-Platform-Strategie:</strong> Wer nur GBP pflegt, verliert 55 % der Voice-Sichtbarkeit (Siri + Alexa).</li>
          <li><strong>Veraltete Öffnungszeiten:</strong> Voice sagt „geschlossen" — Kunde geht zur Konkurrenz.</li>
          <li><strong>Keine W-Fragen-FAQ:</strong> Ohne Antwort-Format kein Voice-Snippet.</li>
          <li><strong>NAP-Inkonsistenz:</strong> Sprachassistenten brechen bei Widersprüchen ab.</li>
          <li><strong>Schema-Lücken:</strong> Ohne strukturierte Daten fehlt der Antwort-Kontext.</li>
        </ul>
      </section>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-12">
        <h3 className="text-xl font-bold mb-3">Voice-Search-Sichtbarkeit prüfen lassen</h3>
        <p className="mb-4">
          Unser AI-Sichtbarkeits-Audit prüft GBP, Apple Business Connect, Bing Places, Schema und NAP-Konsistenz — die Datenbasis von Alexa, Siri und Google Assistant.
        </p>
        <Link
          to="/ai-visibility-audit"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
        >
          AI-Sichtbarkeits-Audit starten →
        </Link>
      </div>

      <HelpfulnessWidget articleSlug={article.slug} />
    </ArticleLayout>
  );
};

export default VoiceSearchSprachassistenten2026;