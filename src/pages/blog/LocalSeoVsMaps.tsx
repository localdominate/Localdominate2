import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import DefinitionBox from '../../components/blog/DefinitionBox';
import localVsMapsImage from '../../assets/blog/local-vs-maps-seo.jpg';

const LocalSeoVsMaps: React.FC = () => {
  const articleData = {
    slug: "local-seo-vs-maps-unterschied",
    title: "Local SEO vs. Google Maps SEO – Was ist der Unterschied?",
    metaTitle: "Local SEO vs. Google Maps SEO: Der komplette Vergleich 2026",
    metaDescription: "Local SEO und Google Maps SEO werden oft verwechselt. Lerne die Unterschiede, Gemeinsamkeiten und welche Strategie du priorisieren solltest.",
    excerpt: "Die Unterschiede zwischen Local SEO und Google Maps SEO verstehen und die richtige Strategie wählen.",
    category: "Strategie",
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🗺️",
    keywords: ["local seo", "google maps seo", "unterschied local seo", "maps ranking", "lokale suche"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "definitionen", title: "Definitionen" },
    { id: "unterschiede", title: "Die wichtigsten Unterschiede" },
    { id: "gemeinsamkeiten", title: "Gemeinsamkeiten" },
    { id: "ranking-faktoren", title: "Ranking-Faktoren im Vergleich" },
    { id: "strategie", title: "Welche Strategie für wen?" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Local SEO umfasst alle Maßnahmen für lokale Sichtbarkeit – Google Maps SEO ist ein Teil davon",
    "Das Local Pack in der Google-Suche zeigt Google Maps Ergebnisse",
    "Für Maps-Ranking ist das Google Business Profile entscheidend",
    "Für organisches Local Ranking sind Website & Backlinks wichtiger",
    "Die beste Strategie kombiniert beides"
  ];

  const faqs = [
    {
      question: "Kann ich in Maps gut ranken ohne eigene Website?",
      answer: "Ja, für das Maps-Ranking ist primär das Google Business Profile wichtig. Ohne Website verpasst du aber organische Ergebnisse und Conversions auf deiner eigenen Plattform."
    },
    {
      question: "Was ist das Local Pack?",
      answer: "Das Local Pack sind die 3 Google Maps Ergebnisse, die bei lokalen Suchen oben in der Google-Suche erscheinen. Es zeigt Karte und die 3 relevantesten lokalen Geschäfte."
    },
    {
      question: "Ist Google Maps SEO einfacher als Local SEO?",
      answer: "Google Maps SEO hat weniger Faktoren und ist schneller zu beeinflussen. Für nachhaltigen Erfolg brauchst du aber auch Local SEO für deine Website."
    },
    {
      question: "Brauche ich Local SEO wenn ich nur ein lokales Geschäft bin?",
      answer: "Definitiv! Gerade lokale Geschäfte profitieren am meisten von Local SEO. Die Konkurrenz ist oft geringer als bei nationalen Keywords."
    },
    {
      question: "Welche Rolle spielen Bewertungen für Maps vs. Local SEO?",
      answer: "Bewertungen sind ein primärer Ranking-Faktor für Maps. Für Local SEO sind sie ein Vertrauenssignal, aber weniger direkt für das Ranking relevant."
    }
  ];

  const sources = [
    { title: "Moz - Local Search Ranking Factors", url: "https://moz.com/local-search-ranking-factors" },
    { title: "BrightLocal - Local SEO Industry Report", url: "https://www.brightlocal.com/research/local-seo-industry-report/" },
    { title: "Google - Local Results Ranking", url: "https://support.google.com/business/answer/7091" }
  ];

  const relatedArticles = [
    "google-maps-ranking-verbessern",
    "local-seo-audit-checkliste",
    "google-my-business-optimieren"
  ];

  return (
    <ArticleLayout article={articleData} faqItems={faqs}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            "Local SEO" und "Google Maps SEO" werden oft synonym verwendet – aber sie sind nicht identisch. 
            Dieser Artikel klärt die Unterschiede, zeigt die Gemeinsamkeiten und hilft dir zu verstehen, 
            welche Strategie für dein Unternehmen am wichtigsten ist.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="definitionen" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Definitionen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Bevor wir vergleichen, müssen wir beide Begriffe klar definieren:
          </AutoLexikonText>
        </p>

        <DefinitionBox
          term="Local SEO"
          definition="Local SEO bezeichnet alle Maßnahmen zur Verbesserung der Sichtbarkeit eines Unternehmens in standortbezogenen Suchergebnissen. Es umfasst Website-Optimierung, Google Business Profile, lokale Backlinks, Citations und Bewertungsmanagement."
          examples={[
            'On-Page-Optimierung mit lokalen Keywords (z.B. "Zahnarzt Berlin Mitte")',
            "Aufbau lokaler Backlinks von Branchenverzeichnissen und Partnern",
            "Google Business Profile vollständig einrichten und pflegen"
          ]}
        />

        <DefinitionBox
          term="Google Maps SEO"
          definition="Google Maps SEO ist ein Teilbereich von Local SEO, der sich speziell auf die Optimierung der Sichtbarkeit in Google Maps und im Local Pack (den 3 Karteneinträgen in der Google-Suche) konzentriert. Der Fokus liegt auf dem Google Business Profile, Bewertungen und NAP-Konsistenz."
          examples={[
            "Google Business Profile mit Fotos, Posts und korrekten Öffnungszeiten pflegen",
            "Positive Bewertungen aktiv einsammeln und beantworten",
            "NAP-Daten in allen Verzeichnissen konsistent halten"
          ]}
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-xl mb-3 text-blue-700">🌐 Local SEO</h4>
            <p className="text-gray-700 mb-4">
              <strong>Definition:</strong> Alle Maßnahmen zur Verbesserung der Sichtbarkeit eines 
              Unternehmens in lokalen Suchergebnissen.
            </p>
            <p className="text-gray-600 text-sm">
              Umfasst: Website-Optimierung, lokale Backlinks, Citations, Google Business Profile, 
              Bewertungen, lokaler Content und mehr.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-xl mb-3 text-green-700">📍 Google Maps SEO</h4>
            <p className="text-gray-700 mb-4">
              <strong>Definition:</strong> Optimierung speziell für besseres Ranking auf Google Maps 
              und im Local Pack (3-Pack).
            </p>
            <p className="text-gray-600 text-sm">
              Fokus: Google Business Profile, NAP-Konsistenz, Bewertungen, Fotos, Posts, 
              Entfernung zum Suchenden.
            </p>
          </div>
        </div>

        <div className="bg-purple-100 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-3">🎯 Die Kernaussage</h4>
          <p className="text-gray-700">
            <strong>Google Maps SEO ist ein Teil von Local SEO</strong> – aber Local SEO geht weit darüber hinaus. 
            Wenn du nur Maps-SEO machst, nutzt du nur einen Teil des lokalen Such-Potenzials.
          </p>
        </div>

        <h2 id="unterschiede" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Unterschiede</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Diese Tabelle zeigt die wichtigsten Unterschiede auf einen Blick:
          </AutoLexikonText>
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Aspekt</th>
                <th className="border p-3 text-left">Local SEO</th>
                <th className="border p-3 text-left">Google Maps SEO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-bold">Hauptplattform</td>
                <td className="border p-3">Google-Suche (organisch)</td>
                <td className="border p-3">Google Maps & Local Pack</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Wichtigstes Asset</td>
                <td className="border p-3">Website</td>
                <td className="border p-3">Google Business Profile</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Zeithorizont</td>
                <td className="border p-3">Langfristig (3-12 Monate)</td>
                <td className="border p-3">Mittelfristig (1-3 Monate)</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Komplexität</td>
                <td className="border p-3">Hoch</td>
                <td className="border p-3">Mittel</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Entfernungs-Relevanz</td>
                <td className="border p-3">Mittel</td>
                <td className="border p-3">Sehr hoch</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">Ohne Website möglich?</td>
                <td className="border p-3">Nein</td>
                <td className="border p-3">Ja (eingeschränkt)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="gemeinsamkeiten" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Gemeinsamkeiten</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Trotz der Unterschiede gibt es wichtige Überschneidungen:
          </AutoLexikonText>
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Was beide gemeinsam haben:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <span className="text-2xl">📋</span>
              <h5 className="font-bold mt-2">NAP-Konsistenz</h5>
              <p className="text-sm text-gray-600">Name, Adresse, Telefon müssen überall gleich sein</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="text-2xl">⭐</span>
              <h5 className="font-bold mt-2">Bewertungen</h5>
              <p className="text-sm text-gray-600">Wichtig für beide Ranking-Typen</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="text-2xl">📍</span>
              <h5 className="font-bold mt-2">Lokaler Fokus</h5>
              <p className="text-sm text-gray-600">Geografische Relevanz ist Kern beider</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="text-2xl">🔗</span>
              <h5 className="font-bold mt-2">Citations</h5>
              <p className="text-sm text-gray-600">Branchenverzeichnisse helfen bei beiden</p>
            </div>
          </div>
        </div>

        <h2 id="ranking-faktoren" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Ranking-Faktoren im Vergleich</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Die Gewichtung der Ranking-Faktoren unterscheidet sich erheblich:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 text-blue-700">Local SEO (Organisch)</h4>
            <ol className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span>On-Page SEO (Keywords, Content)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span>Backlinks (Qualität & Lokalität)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span>Domain Authority</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-300 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <span>NAP-Konsistenz</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <span>Nutzersignale</span>
              </li>
            </ol>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-4 text-green-700">Google Maps SEO</h4>
            <ol className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span>Entfernung zum Suchenden</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span>GBP-Vollständigkeit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <span>Bewertungen (Anzahl & Score)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-300 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <span>Kategorie-Relevanz</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <span>NAP-Konsistenz</span>
              </li>
            </ol>
          </div>
        </div>

        <h2 id="strategie" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Welche Strategie für wen?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Die Prioritäten hängen von deiner Situation ab:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-blue-800 mb-2">📍 Priorisiere Google Maps SEO wenn...</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Kunden primär spontan/unterwegs suchen (Restaurant, Tankstelle)</li>
              <li>• Du noch keine Website hast oder sie neu ist</li>
              <li>• Du schnelle Ergebnisse brauchst</li>
              <li>• Dein Einzugsgebiet sehr lokal ist</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-green-800 mb-2">🌐 Priorisiere Local SEO wenn...</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Kunden recherchieren bevor sie kaufen (Anwalt, Arzt)</li>
              <li>• Du Dienstleistungen anbietest, die erklärt werden müssen</li>
              <li>• Dein Einzugsgebiet eine ganze Stadt/Region umfasst</li>
              <li>• Du langfristige Autorität aufbauen willst</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-purple-800 mb-2">🎯 Die beste Strategie...</h4>
            <p className="text-purple-700">
              ...kombiniert beides! Starte mit Google Maps SEO für schnelle Sichtbarkeit und 
              baue parallel Local SEO für nachhaltigen Erfolg auf.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-3">💡 Empfohlene Reihenfolge</h4>
          <ol className="space-y-2">
            <li><strong>Monat 1-2:</strong> Google Business Profile optimieren (Maps SEO)</li>
            <li><strong>Monat 2-3:</strong> Citations aufbauen (beide profitieren)</li>
            <li><strong>Monat 3-6:</strong> Website für Local SEO optimieren</li>
            <li><strong>Monat 6+:</strong> Lokale Backlinks aufbauen</li>
          </ol>
        </div>

        <h2 id="faq" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Fragen</h2>
        <BlogFAQSection faqs={faqs} />

        <SourcesSection sources={sources} />

        <HelpfulnessWidget articleSlug={articleData.slug} />
      </div>
    </ArticleLayout>
  );
};

export default LocalSeoVsMaps;
