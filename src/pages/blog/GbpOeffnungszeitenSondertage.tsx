import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import gbpOeffnungszeitenImage from '../../assets/blog/gbp-oeffnungszeiten.jpg';

const GbpOeffnungszeitenSondertage: React.FC = () => {
  const articleData = {
    slug: "gbp-oeffnungszeiten-sondertage",
    title: "Google Business Öffnungszeiten & Sondertage richtig einstellen",
    metaTitle: "GBP Öffnungszeiten & Feiertage einstellen | Guide 2025",
    metaDescription: "Öffnungszeiten, Feiertage und Sonderöffnungszeiten korrekt in Google Business eintragen. Vermeide die häufigsten Fehler die Kunden kosten.",
    excerpt: "Alles über Öffnungszeiten, Feiertage und Sonderzeiten im Google Business Profile.",
    category: "Grundlagen",
    readingTime: 9,
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-10",
    icon: "🕐",
    keywords: ["öffnungszeiten google", "gbp sondertage", "feiertage eintragen", "geschäftszeiten", "google business hours"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "warum-wichtig", title: "Warum präzise Öffnungszeiten wichtig sind" },
    { id: "regulaer", title: "Reguläre Öffnungszeiten einstellen" },
    { id: "sondertage", title: "Sonderöffnungszeiten & Feiertage" },
    { id: "mehrere-zeiten", title: "Mehrere Öffnungszeiten pro Tag" },
    { id: "fehler", title: "Die 5 häufigsten Fehler" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Falsche Öffnungszeiten sind der #1 Grund für negative Bewertungen",
    "Google erinnert dich automatisch an Feiertage – nutze das!",
    "Sonderzeiten müssen einzeln für jeden Tag eingetragen werden",
    "24/7 geöffnet braucht spezielle Einstellung, nicht 00:00-24:00",
    "Vorübergehend geschlossen ist besser als falsche Zeiten"
  ];

  const faqs = [
    {
      question: "Wie stelle ich ein, dass ich 24 Stunden geöffnet habe?",
      answer: "Wähle 'Geöffnet 24 Stunden' in der Dropdown-Auswahl. Trage NICHT '00:00 - 23:59' ein, da dies technisch als 'fast 24h' interpretiert wird."
    },
    {
      question: "Kann ich unterschiedliche Zeiten für verschiedene Services haben?",
      answer: "Ja! Unter 'Weitere Öffnungszeiten' kannst du separate Zeiten für z.B. 'Küche', 'Lieferservice' oder 'Onlineberatung' eintragen."
    },
    {
      question: "Wie früh sollte ich Feiertage eintragen?",
      answer: "Google erinnert dich 1-2 Wochen vor Feiertagen. Trage Sonderzeiten mindestens 1 Woche vorher ein, damit die Änderung rechtzeitig indexiert wird."
    },
    {
      question: "Was mache ich bei Betriebsferien?",
      answer: "Nutze 'Vorübergehend geschlossen' unter Status, oder trage für jeden Tag der Schließung 'Geschlossen' als Sonderöffnungszeit ein."
    },
    {
      question: "Mein Geschäft hat keine festen Öffnungszeiten – was tun?",
      answer: "Wähle 'Keine Öffnungszeiten' oder nutze 'Nur nach Vereinbarung'. Bei Service-Area-Businesses ohne Ladenlokal sind keine Öffnungszeiten nötig."
    }
  ];

  const sources = [
    { title: "Google - Öffnungszeiten bearbeiten", url: "https://support.google.com/business/answer/3370250" },
    { title: "Google - Sonderöffnungszeiten", url: "https://support.google.com/business/answer/6303076" },
    { title: "BrightLocal - Hours Impact Study", url: "https://www.brightlocal.com/research/business-hours-study/" }
  ];

  const relatedArticles = [
    "google-my-business-optimieren",
    "gbp-mehrere-standorte-verwalten",
    "local-seo-fehler"
  ];

  return (
    <ArticleLayout article={articleData}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Nichts frustriert Kunden mehr als vor verschlossener Tür zu stehen, obwohl Google "Geöffnet" anzeigt. 
            Präzise Öffnungszeiten sind nicht nur für Kundenzufriedenheit wichtig – sie beeinflussen auch dein 
            Local Ranking. Dieser Guide zeigt dir, wie du Öffnungszeiten perfekt einstellst.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="warum-wichtig" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Warum präzise Öffnungszeiten wichtig sind</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Die Öffnungszeiten sind eine der am häufigsten genutzten Informationen in deinem Google Business Profile:
          </AutoLexikonText>
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 my-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">54%</div>
              <p className="text-gray-700">der Nutzer prüfen Öffnungszeiten vor dem Besuch</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">33%</div>
              <p className="text-gray-700">geben schlechte Bewertung bei falschen Zeiten</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">+15%</div>
              <p className="text-gray-700">mehr Besuche bei korrekten Feiertags-Zeiten</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-red-800 mb-2">Die Kosten falscher Öffnungszeiten</h4>
          <p className="text-red-700">
            Ein Kunde, der wegen falscher Öffnungszeiten vor verschlossener Tür steht, kommt in 78% der Fälle nie wieder. 
            Oft hinterlässt er zusätzlich eine negative Bewertung.
          </p>
        </div>

        <h2 id="regulaer" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Reguläre Öffnungszeiten einstellen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            So stellst du deine Standard-Öffnungszeiten korrekt ein:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Schritt-für-Schritt:</h4>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <strong>Google Business Profile öffnen</strong>
                <p className="text-gray-600">Gehe zu business.google.com und wähle deinen Standort</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <strong>Profil bearbeiten klicken</strong>
                <p className="text-gray-600">Im Dashboard auf "Profil bearbeiten" → "Öffnungszeiten"</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <strong>Für jeden Tag eintragen</strong>
                <p className="text-gray-600">Wähle Start- und Endzeit oder "Geschlossen"</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <strong>Speichern und prüfen</strong>
                <p className="text-gray-600">Nach dem Speichern in der Vorschau kontrollieren</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-yellow-800 mb-2">💡 Tipp: 24-Stunden-Format</h4>
          <p className="text-yellow-700">
            Google verwendet das 24-Stunden-Format. "9:00 - 17:00" ist korrekt, nicht "9am - 5pm". 
            Für Mitternacht nutze "00:00", nicht "24:00".
          </p>
        </div>

        <h2 id="sondertage" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Sonderöffnungszeiten & Feiertage</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Sonderöffnungszeiten sind entscheidend für Feiertage, Events oder saisonale Änderungen:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">📅 Feiertage eintragen</h4>
            <ol className="space-y-2 text-gray-700">
              <li>1. Profil bearbeiten → Sonderöffnungszeiten</li>
              <li>2. "Datum hinzufügen" klicken</li>
              <li>3. Feiertag auswählen (z.B. Weihnachten)</li>
              <li>4. Zeiten eintragen oder "Geschlossen"</li>
              <li>5. Speichern</li>
            </ol>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">🎄 Wichtige Feiertage in DACH</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Neujahr (1. Januar)</li>
              <li>• Ostern (variabel)</li>
              <li>• Tag der Arbeit (1. Mai)</li>
              <li>• Tag der Deutschen Einheit (3. Okt)</li>
              <li>• Weihnachten (24.-26. Dezember)</li>
              <li>• Silvester (31. Dezember)</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-3">✅ Google erinnert dich!</h4>
          <p className="text-gray-700">
            Google schickt dir 1-2 Wochen vor wichtigen Feiertagen eine Benachrichtigung und fragt nach deinen 
            Sonderöffnungszeiten. Nutze diese Erinnerung und reagiere zeitnah!
          </p>
        </div>

        <h2 id="mehrere-zeiten" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Mehrere Öffnungszeiten pro Tag</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Viele Geschäfte haben eine Mittagspause oder bieten verschiedene Services zu unterschiedlichen Zeiten an:
          </AutoLexikonText>
        </p>

        <div className="bg-purple-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Beispiel: Restaurant mit Mittagspause</h4>
          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="font-mono text-sm">
              Dienstag: 11:30 - 14:00, 17:30 - 22:00
            </p>
          </div>
          <p className="text-gray-700">
            Klicke auf "+ Zeitraum hinzufügen" um einen zweiten Zeitslot für denselben Tag einzutragen. 
            Du kannst bis zu 5 Zeiträume pro Tag definieren.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Weitere Öffnungszeiten für Services</h4>
          <p className="text-gray-700 mb-4">
            Unter "Weitere Öffnungszeiten" kannst du separate Zeiten für spezielle Services eintragen:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <strong className="text-blue-600">Restaurant</strong>
              <ul className="text-sm text-gray-600 mt-2">
                <li>• Küche</li>
                <li>• Frühstück</li>
                <li>• Brunch</li>
                <li>• Happy Hour</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <strong className="text-green-600">Dienstleister</strong>
              <ul className="text-sm text-gray-600 mt-2">
                <li>• Online-Service</li>
                <li>• Terminvereinbarung</li>
                <li>• Notdienst</li>
                <li>• Abholung</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="fehler" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die 5 häufigsten Fehler</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Diese Fehler bei Öffnungszeiten sehen wir immer wieder:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Fehler 1: "00:00 - 24:00" statt "24 Stunden"</h4>
            <p className="text-gray-700">Google interpretiert dies als "fast ganztägig". Nutze die Option "Geöffnet 24 Stunden".</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Fehler 2: Feiertage nicht eintragen</h4>
            <p className="text-gray-700">Kunden verlassen sich auf Google. Fehlende Feiertags-Zeiten führen zu Frustration.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Fehler 3: Zeiten nicht aktualisieren</h4>
            <p className="text-gray-700">Nach Corona, Umzug oder Umstrukturierung werden Zeiten oft nicht angepasst.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Fehler 4: Website und GBP unterschiedlich</h4>
            <p className="text-gray-700">Inkonsistente Zeiten verwirren Kunden und können das NAP-Signal schaden.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <h4 className="font-bold text-red-700">❌ Fehler 5: Betriebsferien nicht kommunizieren</h4>
            <p className="text-gray-700">Nutze "Vorübergehend geschlossen" oder trage für jeden Tag "Geschlossen" ein.</p>
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

export default GbpOeffnungszeitenSondertage;
