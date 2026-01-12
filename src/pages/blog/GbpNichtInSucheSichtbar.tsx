import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import gbpNichtSichtbarImage from '../../assets/blog/gbp-nicht-sichtbar.jpg';

const GbpNichtInSucheSichtbar: React.FC = () => {
  const articleData = {
    slug: "gbp-nicht-in-suche-sichtbar",
    title: "Google Business Profil nicht sichtbar – 9 Gründe & Lösungen",
    metaTitle: "GBP nicht sichtbar in Google? 9 Gründe & Soforthilfe 2025",
    metaDescription: "Dein Google Business Profil wird nicht in der Suche angezeigt? Finde heraus warum und wie du die Sichtbarkeit wiederherstellst. Mit Diagnose-Guide.",
    excerpt: "Warum dein Google Business Profil nicht in der Suche erscheint und wie du es sichtbar machst.",
    category: "Troubleshooting",
    readingTime: 11,
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-10",
    icon: "👁️",
    keywords: ["gbp nicht sichtbar", "google business nicht gefunden", "profil nicht angezeigt", "local pack fehlt", "google maps nicht sichtbar"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "einfuehrung", title: "Das Problem verstehen" },
    { id: "gruende", title: "9 häufige Gründe" },
    { id: "diagnose", title: "Schritt-für-Schritt Diagnose" },
    { id: "loesungen", title: "Lösungen für jeden Fall" },
    { id: "verbesserung", title: "Sichtbarkeit dauerhaft verbessern" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Neue Profile brauchen 1-3 Wochen für volle Indexierung",
    "Unvollständige Profile werden oft nicht angezeigt",
    "Fehlende Verifizierung ist der häufigste Grund",
    "Verstöße gegen Richtlinien führen zu Unsichtbarkeit",
    "Zu wenig Aktivität (keine Fotos, Posts, Bewertungen) schadet der Sichtbarkeit"
  ];

  const faqs = [
    {
      question: "Wie lange dauert es, bis ein neues GBP sichtbar wird?",
      answer: "Nach der Verifizierung dauert es typischerweise 1-3 Wochen, bis dein Profil vollständig in der Google-Suche und Maps indexiert ist. In manchen Fällen kann es bis zu 4 Wochen dauern."
    },
    {
      question: "Mein Profil war sichtbar und ist jetzt verschwunden – was ist passiert?",
      answer: "Mögliche Gründe: Suspendierung, Richtlinienverstoß erkannt, als Duplicate markiert, oder ein technisches Problem bei Google. Prüfe dein GBP-Dashboard auf Warnungen."
    },
    {
      question: "Kann ich die Indexierung beschleunigen?",
      answer: "Ja, indirekt: Vervollständige dein Profil zu 100%, füge 10+ Fotos hinzu, schreibe regelmäßig Posts und bitte Kunden um Bewertungen. Aktive Profile werden schneller indexiert."
    },
    {
      question: "Mein Konkurrent ist sichtbar, ich nicht – warum?",
      answer: "Dein Konkurrent hat wahrscheinlich ein vollständigeres Profil, mehr Bewertungen, länger existierendes Profil oder bessere NAP-Konsistenz. Vergleiche euer beider Profile systematisch."
    },
    {
      question: "Wird mein Home-Business in Google angezeigt?",
      answer: "Ja, aber nur wenn du die Service-Area-Business-Option wählst und deine Adresse versteckst. Zeige nur dein Einzugsgebiet, nicht deine private Adresse."
    }
  ];

  const sources = [
    { title: "Google Business Profile - Get found on Google", url: "https://support.google.com/business/answer/7091" },
    { title: "Why your business isn't showing", url: "https://support.google.com/business/answer/2721884" },
    { title: "BrightLocal - GBP Visibility Study", url: "https://www.brightlocal.com/research/google-business-profile-audit/" }
  ];

  const relatedArticles = [
    "google-my-business-optimieren",
    "gbp-verifizierung-fehlgeschlagen",
    "local-seo-fehler"
  ];

  return (
    <ArticleLayout article={articleData}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Du hast dein Google Business Profile erstellt, aber es wird nicht in der Suche angezeigt? Du suchst nach 
            deinem Firmennamen und findest nichts? Das ist frustrierend, aber lösbar. Dieser Guide zeigt dir die 9 
            häufigsten Gründe und wie du sie behebst.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="einfuehrung" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Das Problem verstehen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            "Nicht sichtbar" kann verschiedene Dinge bedeuten. Zunächst müssen wir klären, was genau bei dir der Fall ist:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-red-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-red-700">🔴 Komplett unsichtbar</h4>
            <p className="text-gray-700">
              Auch bei direkter Suche nach dem exakten Firmennamen wird das Profil nicht angezeigt.
            </p>
          </div>
          <div className="bg-orange-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-orange-700">🟠 Nur bei Keywords unsichtbar</h4>
            <p className="text-gray-700">
              Bei Suche nach dem Namen erscheint das Profil, aber nicht bei relevanten Keywords wie "Bäcker München".
            </p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-yellow-700">🟡 Nur lokal sichtbar</h4>
            <p className="text-gray-700">
              Das Profil erscheint nur bei Suchen aus der unmittelbaren Nähe, nicht stadtweit.
            </p>
          </div>
        </div>

        <h2 id="gruende" className="text-3xl font-bold mt-10 mb-6 text-gray-800">9 häufige Gründe für Unsichtbarkeit</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Basierend auf Tausenden von Fällen sind dies die häufigsten Ursachen:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">1</span>
              <h4 className="font-bold text-lg">Profil nicht verifiziert</h4>
            </div>
            <p className="text-gray-700">
              Unverifizierte Profile werden nicht oder kaum angezeigt. Die Verifizierung ist der wichtigste Schritt.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">2</span>
              <h4 className="font-bold text-lg">Profil ist neu</h4>
            </div>
            <p className="text-gray-700">
              Neue Profile brauchen Zeit für die Indexierung. Warte 1-3 Wochen nach der Verifizierung.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">3</span>
              <h4 className="font-bold text-lg">Unvollständiges Profil</h4>
            </div>
            <p className="text-gray-700">
              Profile mit weniger als 50% Vollständigkeit werden selten angezeigt. Fülle alle Felder aus!
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">4</span>
              <h4 className="font-bold text-lg">Falsche Kategorie</h4>
            </div>
            <p className="text-gray-700">
              Wenn deine Kategorie nicht zu deinem Geschäft passt, wirst du bei relevanten Suchen nicht gefunden.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold">5</span>
              <h4 className="font-bold text-lg">Profil suspendiert</h4>
            </div>
            <p className="text-gray-700">
              Suspendierte Profile sind komplett unsichtbar. Prüfe dein GBP-Dashboard auf entsprechende Hinweise.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold">6</span>
              <h4 className="font-bold text-lg">Duplicate erkannt</h4>
            </div>
            <p className="text-gray-700">
              Wenn Google ein Duplicate erkennt, kann es dein Profil unterdrücken.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-bold">7</span>
              <h4 className="font-bold text-lg">Adresse nicht lokalisierbar</h4>
            </div>
            <p className="text-gray-700">
              Wenn Google deine Adresse nicht auf der Karte finden kann, wird das Profil nicht angezeigt.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">8</span>
              <h4 className="font-bold text-lg">Zu starke Konkurrenz</h4>
            </div>
            <p className="text-gray-700">
              Bei stark umkämpften Keywords zeigt Google nur die Top 3. Du bist vielleicht auf Position 4+.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">9</span>
              <h4 className="font-bold text-lg">Keine lokalen Signale</h4>
            </div>
            <p className="text-gray-700">
              Fehlende Bewertungen, keine lokalen Backlinks und inkonsistente NAP-Daten schwächen die Sichtbarkeit.
            </p>
          </div>
        </div>

        <h2 id="diagnose" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Schritt-für-Schritt Diagnose</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Folge dieser Diagnose-Reihenfolge, um dein Problem zu identifizieren:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <strong>Prüfe den Verifizierungsstatus</strong>
                <p className="text-gray-600">Öffne business.google.com → Ist ein grüner Haken neben deinem Standort?</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <strong>Suche nach exaktem Firmennamen</strong>
                <p className="text-gray-600">Gib deinen exakten Namen + Stadt ein. Erscheint das Knowledge Panel?</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <strong>Prüfe auf Warnungen im Dashboard</strong>
                <p className="text-gray-600">Gibt es rote oder orangene Hinweise in deinem GBP-Dashboard?</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <strong>Profil-Vollständigkeit prüfen</strong>
                <p className="text-gray-600">Sind alle Felder ausgefüllt? Fotos vorhanden? Beschreibung komplett?</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
              <div>
                <strong>Duplicate-Check</strong>
                <p className="text-gray-600">Suche auf Google Maps nach deiner Adresse – gibt es ein zweites Profil?</p>
              </div>
            </li>
          </ol>
        </div>

        <h2 id="loesungen" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Lösungen für jeden Fall</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Je nach identifiziertem Problem ist dies die Lösung:
          </AutoLexikonText>
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Problem</th>
                <th className="border p-3 text-left">Lösung</th>
                <th className="border p-3 text-left">Dauer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Nicht verifiziert</td>
                <td className="border p-3">Verifizierung abschließen</td>
                <td className="border p-3">1-2 Wochen</td>
              </tr>
              <tr>
                <td className="border p-3">Neues Profil</td>
                <td className="border p-3">Profil optimieren & warten</td>
                <td className="border p-3">2-4 Wochen</td>
              </tr>
              <tr>
                <td className="border p-3">Unvollständig</td>
                <td className="border p-3">100% ausfüllen</td>
                <td className="border p-3">1-2 Wochen</td>
              </tr>
              <tr>
                <td className="border p-3">Suspendiert</td>
                <td className="border p-3">Reaktivierungsprozess</td>
                <td className="border p-3">1-4 Wochen</td>
              </tr>
              <tr>
                <td className="border p-3">Duplicate</td>
                <td className="border p-3">Duplicate melden/mergen</td>
                <td className="border p-3">2-3 Wochen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="verbesserung" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Sichtbarkeit dauerhaft verbessern</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Sobald das akute Problem gelöst ist, verbessere die Sichtbarkeit langfristig:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">📸 Visueller Content</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 10+ hochwertige Fotos</li>
              <li>• Wöchentlich neue Bilder</li>
              <li>• Videos wenn möglich</li>
              <li>• Teamfotos für Authentizität</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">⭐ Bewertungen</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Aktiv um Bewertungen bitten</li>
              <li>• Auf alle antworten</li>
              <li>• Keywords in Antworten nutzen</li>
              <li>• Regelmäßig neue Bewertungen</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">📝 Posts & Updates</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Wöchentlich Google Posts</li>
              <li>• Angebote und Events teilen</li>
              <li>• Saisonale Updates</li>
              <li>• Neuigkeiten kommunizieren</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">🔗 Lokale Signale</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• NAP-Konsistenz sicherstellen</li>
              <li>• Lokale Verzeichniseinträge</li>
              <li>• Lokale Backlinks aufbauen</li>
              <li>• Website mit GBP verknüpfen</li>
            </ul>
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

export default GbpNichtInSucheSichtbar;
