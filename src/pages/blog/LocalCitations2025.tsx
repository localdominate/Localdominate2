import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import RelatedArticles from '../../components/blog/RelatedArticles';
import FAQSection from '../../components/FAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';

const LocalCitations2025: React.FC = () => {
  const articleData = {
    slug: "local-citations-2025",
    title: "Local Citations 2025: Welche Verzeichnisse sind noch wichtig?",
    metaTitle: "Local Citations 2025: Die wichtigsten Verzeichnisse | Guide",
    metaDescription: "Welche Branchenverzeichnisse sind 2025 noch relevant für Local SEO? Die aktualisierte Liste der wichtigsten Citations für DACH mit Priorisierung.",
    excerpt: "Die aktualisierte Citation-Strategie für 2025 mit den wichtigsten Verzeichnissen für Deutschland, Österreich und Schweiz.",
    category: "Strategie",
    readingTime: 13,
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-10",
    icon: "📚",
    keywords: ["local citations", "branchenverzeichnisse", "citations 2025", "nap einträge", "lokale verzeichnisse"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "was-sind-citations", title: "Was sind Local Citations?" },
    { id: "relevanz-2025", title: "Sind Citations 2025 noch relevant?" },
    { id: "top-verzeichnisse", title: "Die Top-Verzeichnisse nach Land" },
    { id: "branchen-citations", title: "Branchenspezifische Citations" },
    { id: "strategie", title: "Die optimale Citation-Strategie" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Citations sind weniger wichtig als früher, aber noch relevant",
    "Qualität > Quantität: 20 gute Citations schlagen 100 schlechte",
    "Die 'Big 4' Aggregatoren reichen oft für Grundabdeckung",
    "Branchenspezifische Citations haben den höchsten Wert",
    "NAP-Konsistenz ist wichtiger als die Anzahl der Einträge"
  ];

  const faqs = [
    {
      question: "Wie viele Citations brauche ich?",
      answer: "Für die meisten lokalen Unternehmen reichen 20-40 hochwertige Citations. Mehr ist nicht automatisch besser – Konsistenz ist wichtiger."
    },
    {
      question: "Sollte ich Citation-Services wie Yext nutzen?",
      answer: "Services wie Yext erleichtern die Verwaltung, erstellen aber keine echten Citations. Manche Einträge verschwinden, wenn du kündigst. Manuelle Einträge sind nachhaltiger."
    },
    {
      question: "Wie finde ich inkonsistente Citations?",
      answer: "Tools wie Moz Local, BrightLocal oder WhiteSpark scannen das Web nach deinen Unternehmenserwähnungen und zeigen Inkonsistenzen."
    },
    {
      question: "Schaden veraltete Citations meinem Ranking?",
      answer: "Ja, inkonsistente NAP-Daten können dein Ranking negativ beeinflussen. Google vertraut dir weniger, wenn verschiedene Quellen unterschiedliche Infos zeigen."
    },
    {
      question: "Wie lange dauert es, bis Citations wirken?",
      answer: "Es dauert 2-6 Monate, bis Google die Citation-Signale vollständig verarbeitet. Geduld ist wichtig."
    }
  ];

  const sources = [
    { title: "Moz - Local Search Ranking Factors 2024", url: "https://moz.com/local-search-ranking-factors" },
    { title: "BrightLocal - Citation Impact Study", url: "https://www.brightlocal.com/research/local-citations-trust-report/" },
    { title: "WhiteSpark - Local Citation Finder", url: "https://whitespark.ca/local-citation-finder/" }
  ];

  const relatedArticles = [
    "nap-konsistenz-local-seo",
    "local-link-building",
    "local-seo-audit-checkliste"
  ];

  return (
    <ArticleLayout article={articleData}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Die Frage kommt immer wieder: "Muss ich wirklich in 100 Verzeichnissen eingetragen sein?" 
            Die kurze Antwort: Nein. Dieser Guide zeigt dir, welche Citations 2025 noch relevant sind 
            und wie du deine Zeit effizient investierst.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="was-sind-citations" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Was sind Local Citations?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Eine Citation ist jede Online-Erwähnung deiner Unternehmensdaten (NAP: Name, Adresse, Telefon). 
            Citations helfen Google zu verifizieren, dass dein Unternehmen existiert und wo es sich befindet.
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-blue-700">📁 Strukturierte Citations</h4>
            <p className="text-gray-700 mb-3">Formale Einträge in Verzeichnissen:</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Gelbe Seiten</li>
              <li>• Yelp</li>
              <li>• Branchenverzeichnisse</li>
              <li>• Social Media Profile</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-green-700">📰 Unstrukturierte Citations</h4>
            <p className="text-gray-700 mb-3">Erwähnungen in anderen Kontexten:</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Presseartikel</li>
              <li>• Blogbeiträge</li>
              <li>• Lokale Newsseiten</li>
              <li>• Event-Kalender</li>
            </ul>
          </div>
        </div>

        <h2 id="relevanz-2025" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Sind Citations 2025 noch relevant?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Die ehrliche Antwort: Citations sind weniger wichtig als früher, aber nicht irrelevant. 
            Die Gewichtung hat sich in den letzten Jahren deutlich verschoben:
          </AutoLexikonText>
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">📊 Citation-Relevanz im Zeitverlauf</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">2015:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-blue-600 h-6 rounded-full" style={{width: '25%'}}></div>
              </div>
              <span className="text-sm">~25% der Local Ranking Faktoren</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">2020:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-blue-500 h-6 rounded-full" style={{width: '13%'}}></div>
              </div>
              <span className="text-sm">~13% der Local Ranking Faktoren</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold w-16">2025:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div className="bg-blue-400 h-6 rounded-full" style={{width: '7%'}}></div>
              </div>
              <span className="text-sm">~7% der Local Ranking Faktoren</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">Quelle: Moz Local Search Ranking Factors</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-yellow-800 mb-2">Die neue Realität</h4>
          <p className="text-yellow-700">
            Citations sind kein Ranking-Boost mehr, sondern eine Grundvoraussetzung. 
            Sie helfen vor allem bei der Validierung deiner Geschäftsdaten und können 
            Traffic direkt von den Verzeichnissen bringen.
          </p>
        </div>

        <h2 id="top-verzeichnisse" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die Top-Verzeichnisse nach Land</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Diese Verzeichnisse haben die höchste Priorität für DACH-Unternehmen:
          </AutoLexikonText>
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4">🇩🇪 Deutschland (Top 15)</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-bold text-green-600 mb-2">Priorität 1</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Google Business Profile</li>
                  <li>✓ Bing Places</li>
                  <li>✓ Apple Maps</li>
                  <li>✓ Yelp</li>
                  <li>✓ Das Örtliche</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-yellow-600 mb-2">Priorität 2</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Gelbe Seiten</li>
                  <li>✓ Golocal</li>
                  <li>✓ 11880</li>
                  <li>✓ Meinestadt.de</li>
                  <li>✓ Cylex</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-blue-600 mb-2">Priorität 3</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Hotfrog</li>
                  <li>✓ Tupalo</li>
                  <li>✓ Branchenbuch</li>
                  <li>✓ WerKenntDenBesten</li>
                  <li>✓ Foursquare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4">🇦🇹 Österreich (Top 10)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-green-600 mb-2">Priorität 1</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Google Business Profile</li>
                  <li>✓ Herold.at</li>
                  <li>✓ Yelp</li>
                  <li>✓ Unternehmenssuche WKO</li>
                  <li>✓ Firmen.at</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-yellow-600 mb-2">Priorität 2</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Firmenabc.at</li>
                  <li>✓ Gelbeseiten.at</li>
                  <li>✓ Yext Austria</li>
                  <li>✓ Cylex.at</li>
                  <li>✓ Foursquare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-4">🇨🇭 Schweiz (Top 10)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-green-600 mb-2">Priorität 1</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Google Business Profile</li>
                  <li>✓ Local.ch</li>
                  <li>✓ Search.ch</li>
                  <li>✓ Yelp</li>
                  <li>✓ Swissguide.ch</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-yellow-600 mb-2">Priorität 2</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Help.ch</li>
                  <li>✓ Cylex.ch</li>
                  <li>✓ Firmendb.ch</li>
                  <li>✓ Guidle.com</li>
                  <li>✓ Foursquare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 id="branchen-citations" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Branchenspezifische Citations</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Branchenspezifische Verzeichnisse haben oft mehr Wert als allgemeine Verzeichnisse:
          </AutoLexikonText>
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Branche</th>
                <th className="border p-3 text-left">Wichtige Verzeichnisse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-bold">🍽️ Gastronomie</td>
                <td className="border p-3">TripAdvisor, TheFork, Quandoo, Lieferando, OpenTable</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🏥 Ärzte</td>
                <td className="border p-3">Jameda, Doctolib, Arzt-Auskunft, Sanego, DocInsider</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">⚖️ Anwälte</td>
                <td className="border p-3">Anwalt.de, Advocado, Rechtsanwalt.com, 123recht</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🏨 Hotels</td>
                <td className="border p-3">Booking.com, HRS, Trivago, Hotels.com, Expedia</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🔧 Handwerker</td>
                <td className="border p-3">MyHammer, Blauarbeit, Check24, Wirsindhandwerk</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🚗 Autowerkstätten</td>
                <td className="border p-3">Autoscout24, Mobile.de Werkstatt, Vergölst, ATU</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="strategie" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die optimale Citation-Strategie</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            So gehst du 2025 am besten vor:
          </AutoLexikonText>
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">📋 Citation-Strategie in 4 Schritten</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold">Schritt 1: Audit</h5>
              <p className="text-gray-600">Finde alle bestehenden Citations und prüfe NAP-Konsistenz (BrightLocal, Moz Local)</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold">Schritt 2: Korrektur</h5>
              <p className="text-gray-600">Korrigiere inkonsistente Einträge bevor du neue erstellst</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold">Schritt 3: Priorität 1</h5>
              <p className="text-gray-600">Erstelle Einträge in allen "Priorität 1" Verzeichnissen + branchenspezifische</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-bold">Schritt 4: Erweitern</h5>
              <p className="text-gray-600">Wenn Zeit, erweitere auf Priorität 2 und 3</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-red-800 mb-2">❌ Was du NICHT tun solltest</h4>
          <ul className="text-red-700 space-y-1">
            <li>• Automatisierte Citation-Services nutzen, die Spam-Verzeichnisse einschließen</li>
            <li>• Unterschiedliche NAP-Daten für verschiedene Verzeichnisse</li>
            <li>• Keywords in den Firmennamen einfügen</li>
            <li>• Einträge erstellen und nie wieder prüfen</li>
          </ul>
        </div>

        <h2 id="faq" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Fragen</h2>
        <FAQSection faqs={faqs} />

        <SourcesSection sources={sources} />

        <RelatedArticles articles={relatedArticles} />

        <HelpfulnessWidget articleSlug={articleData.slug} />
      </div>
    </ArticleLayout>
  );
};

export default LocalCitations2025;
