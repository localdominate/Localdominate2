import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import gbpMehrereStandorteImage from '../../assets/blog/gbp-mehrere-standorte.jpg';

const GbpMehrereStandorte: React.FC = () => {
  const articleData = {
    slug: "gbp-mehrere-standorte-verwalten",
    title: "Mehrere Google Business Standorte verwalten – Der komplette Guide 2026",
    metaTitle: "Mehrere GBP Standorte verwalten | Multi-Location Guide 2026",
    metaDescription: "Du hast mehrere Filialen? Lerne wie du alle Google Business Profile effizient verwaltest. Mit Bulk-Upload, Gruppenorganisation und Konsistenz-Tipps.",
    excerpt: "Der komplette Guide zur Verwaltung mehrerer Google Business Standorte für Filialunternehmen und Ketten.",
    category: "Fortgeschritten",
    readingTime: 14,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🏢",
    keywords: ["mehrere standorte", "multi location", "filialverwaltung", "bulk gbp", "google business kette"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "einfuehrung", title: "Wann Multi-Location Management?" },
    { id: "struktur", title: "Die richtige Account-Struktur" },
    { id: "bulk", title: "Bulk-Upload für viele Standorte" },
    { id: "konsistenz", title: "Konsistenz über alle Standorte" },
    { id: "reporting", title: "Standort-übergreifendes Reporting" },
    { id: "fehler", title: "Häufige Multi-Location Fehler" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Nutze Standortgruppen ab 10+ Filialen für bessere Übersicht",
    "Bulk-Upload spart Zeit bei gleichzeitiger Erstellung vieler Profile",
    "Konsistente Namenskonvention ist kritisch für Brand Recognition",
    "Jeder Standort braucht lokalisierte Beschreibung und Fotos",
    "Zentrale Verwaltung + lokale Anpassung ist die beste Strategie"
  ];

  const faqs = [
    {
      question: "Ab wie vielen Standorten lohnt sich professionelles Multi-Location-Management?",
      answer: "Ab 5 Standorten wird manuelles Management ineffizient. Ab 10+ Standorten sind Standortgruppen und Bulk-Tools unverzichtbar."
    },
    {
      question: "Können verschiedene Mitarbeiter verschiedene Standorte verwalten?",
      answer: "Ja, du kannst für jeden Standort separate Nutzer mit unterschiedlichen Berechtigungen (Inhaber, Manager, Standortmanager) hinzufügen."
    },
    {
      question: "Wie verhindere ich Duplicates bei Franchise-Standorten?",
      answer: "Nutze eine zentrale Verwaltung mit klarer Namenskonvention und verifiziere alle Standorte über den Business-Account. Prüfe regelmäßig auf Duplicates."
    },
    {
      question: "Müssen alle Standorte dieselben Öffnungszeiten haben?",
      answer: "Nein, jeder Standort kann individuelle Öffnungszeiten haben. Das ist sogar wichtig für korrekte lokale Informationen."
    },
    {
      question: "Wie manage ich Bewertungen für 50+ Standorte?",
      answer: "Nutze Third-Party-Tools wie ReviewTrackers oder Birdeye für zentrale Bewertungs-Dashboards mit Benachrichtigungen für alle Standorte."
    },
    {
      question: "Kann ich einen Standort von einer Gruppe in eine andere verschieben?",
      answer: "Ja, Standorte können zwischen Gruppen verschoben werden. Gehe zur Standortliste und wähle 'Verschieben' im Aktionsmenü."
    }
  ];

  const sources = [
    { title: "Google Business Profile - Mehrere Standorte", url: "https://support.google.com/business/answer/3038063" },
    { title: "Bulk-Verifizierung", url: "https://support.google.com/business/answer/4490296" },
    { title: "LocalU - Multi-Location Strategies", url: "https://localu.org/multi-location-local-seo/" }
  ];

  const relatedArticles = [
    "local-seo-mehrstufig-unternehmen",
    "google-my-business-optimieren",
    "nap-konsistenz-local-seo"
  ];

  return (
    <ArticleLayout article={articleData}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Ob Restaurantkette, Handwerksbetrieb mit mehreren Filialen oder Franchise-Unternehmen – die Verwaltung 
            mehrerer Google Business Profile ist komplex. Dieser Guide zeigt dir, wie du alle Standorte effizient 
            managst, ohne den Überblick zu verlieren.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="einfuehrung" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Wann Multi-Location Management?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Sobald du mehr als einen Standort hast, stehen dir erweiterte Verwaltungsoptionen zur Verfügung. 
            Die richtige Strategie hängt von der Anzahl deiner Standorte ab:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2-5</div>
            <h4 className="font-bold mb-2">Standorte</h4>
            <p className="text-sm text-gray-600">Manuelle Verwaltung möglich, ein Business-Account</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">6-20</div>
            <h4 className="font-bold mb-2">Standorte</h4>
            <p className="text-sm text-gray-600">Standortgruppen nutzen, Bulk-Actions sinnvoll</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
            <h4 className="font-bold mb-2">Standorte</h4>
            <p className="text-sm text-gray-600">Bulk-Upload, API oder Third-Party-Tools empfohlen</p>
          </div>
        </div>

        <h2 id="struktur" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die richtige Account-Struktur</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Eine durchdachte Account-Struktur ist das Fundament für effizientes Multi-Location-Management:
          </AutoLexikonText>
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">🏗️ Empfohlene Hierarchie:</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <h5 className="font-bold">Organisation</h5>
                  <p className="text-sm text-gray-600">Dachebene für dein gesamtes Unternehmen</p>
                </div>
              </div>
            </div>
            <div className="ml-8 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📁</span>
                <div>
                  <h5 className="font-bold">Standortgruppen</h5>
                  <p className="text-sm text-gray-600">Nach Region, Brand oder Typ organisiert</p>
                </div>
              </div>
            </div>
            <div className="ml-16 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h5 className="font-bold">Einzelne Standorte</h5>
                  <p className="text-sm text-gray-600">Jede Filiale mit eigenem Profil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-yellow-800 mb-2">Tipp: Namenskonvention festlegen</h4>
          <p className="text-yellow-700 mb-3">
            Nutze ein einheitliches Namensschema für alle Standorte:
          </p>
          <ul className="text-yellow-700 space-y-1">
            <li>✅ "Bäckerei Müller - München Schwabing"</li>
            <li>✅ "Bäckerei Müller - München Haidhausen"</li>
            <li>❌ "Müllers Bäckerei Schwabing"</li>
            <li>❌ "Bäcker Müller München"</li>
          </ul>
        </div>

        <h2 id="bulk" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Bulk-Upload für viele Standorte</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Bei mehr als 10 Standorten ist der Bulk-Upload via Spreadsheet die effizienteste Methode:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Schritt-für-Schritt Bulk-Upload:</h4>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <strong>Template herunterladen</strong>
                <p className="text-gray-600">In GBP → Standorte verwalten → Standorte hinzufügen → Spreadsheet importieren</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <strong>Daten sorgfältig ausfüllen</strong>
                <p className="text-gray-600">Name, Adresse, Telefon, Öffnungszeiten, Kategorie für jeden Standort</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <strong>Fehler prüfen</strong>
                <p className="text-gray-600">Google zeigt Validierungsfehler vor dem Import an</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <strong>Bulk-Verifizierung beantragen</strong>
                <p className="text-gray-600">Ab 10+ Standorten: Bulk-Verifizierung statt einzelner Postkarten</p>
              </div>
            </li>
          </ol>
        </div>

        <h2 id="konsistenz" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Konsistenz über alle Standorte</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Einheitlichkeit stärkt deine Marke und verbessert das Ranking aller Standorte:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-green-700">✅ Einheitlich halten</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Unternehmensname (Format)</li>
              <li>• Logo und Titelbild</li>
              <li>• Primäre Kategorie</li>
              <li>• Beschreibungs-Template</li>
              <li>• Attribute (Rollstuhl, Parkplatz, etc.)</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-blue-700">🔄 Individuell anpassen</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Öffnungszeiten (standortspezifisch)</li>
              <li>• Telefonnummer (lokal)</li>
              <li>• Innenfotos des Standorts</li>
              <li>• Lokale Keywords in Beschreibung</li>
              <li>• Standort-spezifische Posts</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">📝 Beschreibungs-Template Beispiel:</h4>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700 italic">
              "Die Bäckerei Müller in <strong>[Stadtteil]</strong> ist seit [Jahr] Ihr Ansprechpartner für 
              frische Backwaren in <strong>[Stadt]</strong>. In unserer Filiale <strong>[Adresse]</strong> 
              finden Sie täglich frisches Brot, Brötchen und Kuchen aus eigener Herstellung. 
              Besuchen Sie uns <strong>[spezielle Öffnungszeiten/Besonderheit dieses Standorts]</strong>."
            </p>
          </div>
        </div>

        <h2 id="reporting" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Standort-übergreifendes Reporting</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Um den Erfolg aller Standorte zu messen, brauchst du konsolidierte Reports:
          </AutoLexikonText>
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Metrik</th>
                <th className="border p-3 text-left">Warum wichtig</th>
                <th className="border p-3 text-left">Tool</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Aufrufe pro Standort</td>
                <td className="border p-3">Vergleich der Sichtbarkeit</td>
                <td className="border p-3">GBP Insights</td>
              </tr>
              <tr>
                <td className="border p-3">Aktionen (Anrufe, Routen)</td>
                <td className="border p-3">Conversion-Vergleich</td>
                <td className="border p-3">GBP Insights</td>
              </tr>
              <tr>
                <td className="border p-3">Durchschnittliche Bewertung</td>
                <td className="border p-3">Qualitätskontrolle</td>
                <td className="border p-3">GBP/Third-Party</td>
              </tr>
              <tr>
                <td className="border p-3">Neue Bewertungen/Monat</td>
                <td className="border p-3">Engagement-Tracking</td>
                <td className="border p-3">Third-Party</td>
              </tr>
              <tr>
                <td className="border p-3">Antwortrate auf Bewertungen</td>
                <td className="border p-3">Service-Qualität</td>
                <td className="border p-3">Third-Party</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="fehler" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Multi-Location Fehler</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Diese Fehler sehen wir immer wieder bei Unternehmen mit mehreren Standorten:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Alle Standorte identisch beschreiben</h4>
            <p className="text-gray-700">Google erkennt Duplicate Content. Jeder Standort braucht einzigartige Elemente.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Zentrale Telefonnummer für alle</h4>
            <p className="text-gray-700">Jeder Standort sollte seine eigene lokale Nummer haben.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Keine lokalen Fotos</h4>
            <p className="text-gray-700">Stock-Fotos für alle Standorte wirken unpersönlich und schaden dem Ranking.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Bewertungen nicht standortspezifisch beantworten</h4>
            <p className="text-gray-700">Copy-Paste-Antworten werden als unpersönlich wahrgenommen.</p>
          </div>
        </div>

        <h2 id="faq" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Fragen</h2>
        <BlogFAQSection faqs={faqs} />

        <SourcesSection sources={sources} />

        <HelpfulnessWidget articleSlug={articleData.slug} />
      </div>
    </ArticleLayout>
  );
};

export default GbpMehrereStandorte;
