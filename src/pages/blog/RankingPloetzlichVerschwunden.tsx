import React from 'react';
import SeoFlowDiagram from '@/components/blog/SeoFlowDiagram';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import rankingVerschwundenImage from '../../assets/blog/ranking-verschwunden.jpg';

const RankingPloetzlichVerschwunden: React.FC = () => {
  const articleData = {
    slug: "ranking-ploetzlich-verschwunden",
    title: "Google Ranking plötzlich verschwunden – 12 Ursachen & Lösungen",
    metaTitle: "Google Ranking verschwunden? 12 Ursachen & Soforthilfe 2026",
    metaDescription: "Dein Local Ranking ist über Nacht eingebrochen? Finde die Ursache mit unserem Diagnose-Guide. Von Algorithmus-Updates bis Penalty – alle Lösungen.",
    excerpt: "Schnelle Diagnose und Behebung von plötzlichen Ranking-Verlusten im Local Pack mit 12 häufigen Ursachen.",
    category: "Troubleshooting",
    readingTime: 15,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "📉",
    keywords: ["ranking verschwunden", "local pack verloren", "google ranking einbruch", "seo penalty", "ranking wiederherstellen"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "erste-schritte", title: "Erste Diagnose-Schritte" },
    { id: "algorithmus", title: "Algorithmus-Updates erkennen" },
    { id: "technische-probleme", title: "Technische Website-Probleme" },
    { id: "gbp-probleme", title: "Google Business Profile Ursachen" },
    { id: "konkurrenz", title: "Konkurrenz-Analyse" },
    { id: "penalty", title: "Manuelle Abstrafung erkennen" },
    { id: "wiederherstellung", title: "Ranking wiederherstellen" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Prüfe zuerst, ob es ein Google-Update gab (saisonale Schwankungen sind normal)",
    "Technische Probleme wie Indexierungsfehler sind die häufigste Ursache",
    "GBP-Änderungen oder Suspendierungen führen zu sofortigem Verlust",
    "Konkurrenz-Optimierung kann relative Rankings verschieben",
    "Manuelle Penalties findest du in der Search Console"
  ];

  const faqs = [
    {
      question: "Wie schnell kann ich mein Ranking wiederherstellen?",
      answer: "Das hängt von der Ursache ab. Technische Fixes können innerhalb von 1-2 Wochen wirken. Nach einem Algorithmus-Update kann die Erholung 2-6 Monate dauern."
    },
    {
      question: "Mein Ranking schwankt täglich – ist das normal?",
      answer: "Leichte tägliche Schwankungen von 1-3 Positionen sind normal, besonders bei Keywords mit viel Konkurrenz. Sprünge von 10+ Positionen sind Warnsignale."
    },
    {
      question: "Kann ein Website-Redesign das Ranking zerstören?",
      answer: "Ja, wenn Weiterleitungen fehlen, URLs geändert wurden oder die Ladezeit leidet. Plane Redesigns sorgfältig mit SEO-Fokus."
    },
    {
      question: "Wie erkenne ich, ob es an meiner Website oder an Google liegt?",
      answer: "Prüfe, ob alle deine Keywords gleichzeitig eingebrochen sind (dann eher Google-Update) oder nur bestimmte (dann eher spezifisches Problem auf deiner Seite)."
    },
    {
      question: "Was kostet es, einen SEO-Experten zur Diagnose zu engagieren?",
      answer: "Eine professionelle Ranking-Analyse kostet typischerweise 200-500€. Bei komplexen Problemen kann die Behebung weitere 500-2000€ kosten."
    },
    {
      question: "Sollte ich meine SEO-Strategie nach einem Ranking-Verlust komplett ändern?",
      answer: "Nein, nicht überstürzt. Identifiziere erst die genaue Ursache. Oft ist eine kleine gezielte Korrektur effektiver als eine komplette Strategieänderung."
    }
  ];

  const sources = [
    { title: "Google Search Status Dashboard", url: "https://status.search.google.com/" },
    { title: "Moz - Tracking Algorithm Updates", url: "https://moz.com/google-algorithm-change" },
    { title: "Search Engine Land - Ranking Fluctuations", url: "https://searchengineland.com/library/google/google-algorithm-updates" }
  ];

  const relatedArticles = [
    "local-seo-fehler",
    "google-maps-ranking-verbessern",
    "local-seo-audit-checkliste"
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plötzlichen Google Ranking-Verlust diagnostizieren und beheben",
    description: "Diagnose-Guide für lokale Unternehmen: 12 Ursachen für plötzliche Ranking-Einbrüche identifizieren und systematisch beheben.",
    totalTime: "P14D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
    step: [
      { "@type": "HowToStep", position: 1, name: "Google-Update prüfen", text: "Prüfe das Google Search Status Dashboard und SEO-News ob ein Algorithmus-Update stattfand. Bei breiten Updates sind viele Seiten betroffen." },
      { "@type": "HowToStep", position: 2, name: "Search Console auf Fehler prüfen", text: "Öffne die Google Search Console und suche nach manuellen Maßnahmen, Indexierungsfehlern oder Sicherheitsproblemen." },
      { "@type": "HowToStep", position: 3, name: "GBP-Status kontrollieren", text: "Prüfe ob dein Google Business Profil suspendiert, unvollständig oder als Duplicate markiert wurde." },
      { "@type": "HowToStep", position: 4, name: "Technische Website-Probleme ausschließen", text: "Teste Ladezeit, Mobile-Friendliness, SSL-Zertifikat und Crawlbarkeit. Prüfe ob robots.txt oder noindex-Tags den Zugriff blockieren." },
      { "@type": "HowToStep", position: 5, name: "Konkurrenz-Veränderungen analysieren", text: "Prüfe ob Konkurrenten optimiert haben oder neue starke Wettbewerber im Markt erschienen sind." },
      { "@type": "HowToStep", position: 6, name: "Gezielte Gegenmaßnahmen umsetzen", text: "Setze je nach identifizierter Ursache die passende Maßnahme um: Content-Optimierung, technische Fixes oder GBP-Reaktivierung." },
    ],
  };

  return (
    <ArticleLayout article={articleData} faqItems={faqs} additionalSchema={howToSchema}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Gestern noch auf Platz 1, heute auf Seite 3 – ein plötzlicher Ranking-Verlust kann für lokale Unternehmen 
            existenzbedrohend sein. Dieser Guide hilft dir, die Ursache schnell zu identifizieren und dein Ranking 
            systematisch wiederherzustellen. Mit Diagnose-Checkliste und Sofortmaßnahmen.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Ranking verschwunden: Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <SeoFlowDiagram
          title="Ranking-Verlust: Diagnose-Workflow"
          steps={[
            { label: "Einbruch bemerkt", icon: "📉", description: "Ranking-Monitoring prüfen" },
            { label: "Google-Update?", icon: "🔄", description: "Status Dashboard checken" },
            { label: "Search Console", icon: "🔎", description: "Penalties & Fehler prüfen" },
            { label: "GBP-Status", icon: "🏢", description: "Suspendierung ausschließen", highlight: true },
            { label: "Technik-Check", icon: "⚙️", description: "Ladezeit, SSL, Mobile" },
            { label: "Maßnahmen umsetzen", icon: "✅", description: "Gezielte Korrektur starten" },
          ]}
          caption="Systematische Diagnose bei plötzlichem Ranking-Verlust – von allgemein nach spezifisch"
        />

        <h2 id="erste-schritte" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Erste Diagnose-Schritte bei Ranking-Verlust</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Bevor du in Panik gerätst, prüfe diese grundlegenden Punkte. Oft ist die Ursache schneller gefunden als gedacht:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-lg mb-4">🔍 Ranking-Verlust Sofort-Diagnose Checkliste</h3>
          <div className="space-y-3">
            {[
              "Ist die Website erreichbar? (Serverprobleme ausschließen)",
              "Wurde kürzlich etwas an der Website geändert?",
              "Gab es ein Google-Update in den letzten 7 Tagen?",
              "Ist das Google Business Profile noch aktiv und verifiziert?",
              "Gibt es Warnungen in der Google Search Console?",
              "Sind alle Seiten noch im Google-Index?"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                <input type="checkbox" className="w-5 h-5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 id="algorithmus" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Google Algorithmus-Updates als Ranking-Ursache</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Google führt jährlich tausende kleine und mehrere große Updates durch. Große Core Updates werden 
            offiziell angekündigt, kleine nicht. So erkennst du, ob ein Update dein Ranking beeinflusst hat:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-blue-600">📊 Google Update-Indikatoren erkennen</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Alle Keywords gleichzeitig betroffen</li>
              <li>• Viele Websites berichten ähnliche Probleme</li>
              <li>• SEO-Tools zeigen hohe Volatilität</li>
              <li>• Google bestätigt Update auf Search Central Blog</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-green-600">🛠️ SEO-Tools zur Update-Erkennung</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Moz Algorithm History</li>
              <li>• Semrush Sensor</li>
              <li>• RankRanger</li>
              <li>• Google Search Central Twitter</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h3 className="font-bold text-yellow-800 mb-2">Ranking nach einem Google Core Update stabilisieren</h3>
          <p className="text-yellow-700">
            Warte mindestens 2 Wochen ab, bevor du drastische Änderungen machst. Updates "rollen" oft über mehrere Wochen aus 
            und Rankings können sich von selbst stabilisieren.
          </p>
        </div>

        <h2 id="technische-probleme" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Technische Website-Probleme als Ranking-Killer</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Technische Fehler sind die häufigste und glücklicherweise am einfachsten zu behebende Ursache:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-red-700">🚫 Indexierungsprobleme erkennen</h3>
            <p className="text-gray-700 mb-2">robots.txt blockiert Googlebot, noindex-Tags auf wichtigen Seiten, oder Seiten aus Sitemap entfernt.</p>
            <p className="text-sm text-gray-500"><strong>Lösung:</strong> Search Console → Abdeckung prüfen, robots.txt validieren</p>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-red-700">🐌 Ladezeit & Core Web Vitals Probleme</h3>
            <p className="text-gray-700 mb-2">Server langsam, große Bilder, zu viele Skripte. Core Web Vitals im roten Bereich.</p>
            <p className="text-sm text-gray-500"><strong>Lösung:</strong> PageSpeed Insights prüfen, Bilder komprimieren, Caching aktivieren</p>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-red-700">🔗 Fehlerhafte Weiterleitungen & Redirect-Chains</h3>
            <p className="text-gray-700 mb-2">Nach Website-Migration fehlen Weiterleitungen oder Redirect-Chains entstanden.</p>
            <p className="text-sm text-gray-500"><strong>Lösung:</strong> Screaming Frog Crawl, alle 301-Redirects prüfen</p>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 text-red-700">📱 Mobile-Usability Probleme</h3>
            <p className="text-gray-700 mb-2">Nach Design-Änderungen ist die mobile Version nicht mehr nutzbar.</p>
            <p className="text-sm text-gray-500"><strong>Lösung:</strong> Mobile-Friendly Test, auf echten Geräten testen</p>
          </div>
        </div>

        <h2 id="gbp-probleme" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Google Business Profil als Ursache für Ranking-Verlust</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Für lokale Rankings ist dein Google Business Profile entscheidend. Diese GBP-Probleme führen zu sofortigem Ranking-Verlust:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">⚠️ Häufige GBP-Probleme bei Ranking-Verlust</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Profil wurde suspendiert</li>
              <li>• Verifizierung abgelaufen</li>
              <li>• Kategorie geändert</li>
              <li>• NAP-Daten inkonsistent geworden</li>
              <li>• Öffnungszeiten als "dauerhaft geschlossen" markiert</li>
              <li>• Adresse nicht mehr verifizierbar</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">✅ GBP-Sofortmaßnahmen bei Ranking-Einbruch</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• GBP-Dashboard auf Warnungen prüfen</li>
              <li>• Alle Informationen auf Aktualität prüfen</li>
              <li>• Bei Suspendierung: Reaktivierungsprozess starten</li>
              <li>• NAP-Konsistenz über alle Verzeichnisse prüfen</li>
              <li>• Neue Fotos und Posts hinzufügen</li>
            </ul>
          </div>
        </div>

        <h2 id="konkurrenz" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Lokale Konkurrenz-Analyse bei Ranking-Verlust</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Manchmal hast du nichts falsch gemacht – deine Konkurrenz hat einfach aufgeholt oder dich überholt:
          </AutoLexikonText>
        </p>

        <div className="bg-purple-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-lg mb-4">SEO Konkurrenz-Check Checkliste</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">1.</span>
              <span>Haben Konkurrenten ihr GBP stark verbessert? (Mehr Bewertungen, Fotos, Posts)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">2.</span>
              <span>Gibt es neue Konkurrenten im Markt?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">3.</span>
              <span>Haben Konkurrenten mehr/bessere Backlinks aufgebaut?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 font-bold">4.</span>
              <span>Ist deren Website-Content umfangreicher geworden?</span>
            </li>
          </ul>
        </div>

        <h2 id="penalty" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Google Penalty & manuelle Abstrafung erkennen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Manuelle Penalties sind selten, aber schwerwiegend. So erkennst und behebst du sie:
          </AutoLexikonText>
        </p>

        <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
          <h3 className="font-bold text-red-800 mb-3">🔴 Google Search Console: Manuelle Maßnahmen prüfen</h3>
          <ol className="text-red-700 space-y-2">
            <li>1. Öffne Google Search Console</li>
            <li>2. Gehe zu "Sicherheit & manuelle Maßnahmen"</li>
            <li>3. Klicke auf "Manuelle Maßnahmen"</li>
            <li>4. Wenn hier etwas steht, wurde deine Seite abgestraft</li>
          </ol>
        </div>

        <h2 id="wiederherstellung" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Google Ranking Schritt für Schritt wiederherstellen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Je nach identifizierter Ursache unterscheidet sich die Wiederherstellungsstrategie:
          </AutoLexikonText>
        </p>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 my-8">
          <h3 className="font-bold text-lg mb-4">📈 Ranking-Wiederherstellung: 90-Tage-Roadmap</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold">Woche 1-2: Technische Sofortmaßnahmen</h4>
              <p className="text-gray-600">Technische Fehler beheben, GBP aktualisieren, kritische Probleme lösen</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold">Woche 3-4: SEO Content-Optimierung</h4>
              <p className="text-gray-600">Betroffene Seiten verbessern, neue Inhalte erstellen, interne Verlinkung stärken</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold">Monat 2-3: Domain-Autorität aufbauen</h4>
              <p className="text-gray-600">Backlinks aufbauen, lokale PR, mehr Bewertungen sammeln</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold">Monat 4+: SEO-Monitoring & Erfolgskontrolle</h4>
              <p className="text-gray-600">Rankings tracken, kontinuierlich optimieren, Erfolge messen</p>
            </div>
          </div>
        </div>

        <h2 id="faq" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Fragen zu Ranking-Verlusten</h2>
        <BlogFAQSection faqs={faqs} />

        <SourcesSection sources={sources} />

        <HelpfulnessWidget articleSlug={articleData.slug} />
      </div>
    </ArticleLayout>
  );
};

export default RankingPloetzlichVerschwunden;
