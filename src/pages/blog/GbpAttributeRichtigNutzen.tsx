import React from 'react';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import BlogImage from '../../components/blog/BlogImage';
import gbpAttributeImage from '../../assets/blog/gbp-attribute.jpg';

const GbpAttributeRichtigNutzen: React.FC = () => {
  const articleData = {
    slug: "gbp-attribute-richtig-nutzen",
    title: "Google Business Attribute – Alle Optionen optimal nutzen (2026)",
    metaTitle: "GBP Attribute Guide: Alle Optionen für mehr Sichtbarkeit 2026",
    metaDescription: "Welche Google Business Attribute gibt es und welche sind für dein Geschäft wichtig? Der komplette Guide mit allen Kategorien und Best Practices.",
    excerpt: "Der komplette Guide zu Google Business Attributen für jede Branche.",
    category: "Grundlagen",
    readingTime: 10,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🏷️",
    keywords: ["gbp attribute", "google business attribute", "profil attribute", "business features", "google attribute setzen"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "was-sind-attribute", title: "Was sind GBP Attribute?" },
    { id: "kategorien", title: "Attribut-Kategorien im Überblick" },
    { id: "wichtige-attribute", title: "Die wichtigsten Attribute nach Branche" },
    { id: "einstellen", title: "So stellst du Attribute ein" },
    { id: "aktuell-halten", title: "Attribute aktuell halten" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Attribute beeinflussen, für welche Suchanfragen du gefunden wirst",
    "Nur relevante Attribute setzen – mehr ist nicht immer besser",
    "Manche Attribute kommen von Google-Nutzern (Crowdsourcing)",
    "Branchenspezifische Attribute variieren stark",
    "Regelmäßig auf neue Attribute-Optionen prüfen"
  ];

  const faqs = [
    {
      question: "Welche Attribute kann ich selbst setzen?",
      answer: "Du kannst 'Faktenattribute' wie Barrierefreiheit, Zahlungsmethoden und Serviceangebote selbst setzen. 'Subjektive Attribute' wie 'Gemütlich' werden von Nutzern hinzugefügt."
    },
    {
      question: "Wie oft sollte ich meine Attribute aktualisieren?",
      answer: "Prüfe Attribute mindestens vierteljährlich oder bei Änderungen im Geschäft. Neue Attribute werden von Google regelmäßig hinzugefügt."
    },
    {
      question: "Schaden falsche Attribute meinem Ranking?",
      answer: "Ja, irreführende Attribute können zu negativen Bewertungen führen und das Vertrauen in dein Profil mindern. Sei ehrlich bei der Auswahl."
    },
    {
      question: "Warum sehe ich Attribute, die ich nicht selbst gesetzt habe?",
      answer: "Google nutzt Crowdsourcing – Nutzer können Attribute vorschlagen basierend auf ihren Erfahrungen. Du kannst falsche Nutzer-Attribute korrigieren."
    },
    {
      question: "Welche Attribute sind am wichtigsten für Local SEO?",
      answer: "Barrierefreiheit, Zahlungsmethoden und branchenspezifische Services wie 'Lieferservice' oder 'Online-Termin' werden in Suchanfragen häufig gefiltert."
    }
  ];

  const sources = [
    { title: "Google - Unternehmensattribute", url: "https://support.google.com/business/answer/10515606" },
    { title: "BrightLocal - GBP Attributes Study", url: "https://www.brightlocal.com/research/google-business-profile-attributes/" },
    { title: "Sterling Sky - Attribute Guide", url: "https://sterlingsky.ca/google-business-profile-attributes/" }
  ];

  const relatedArticles = [
    "google-my-business-optimieren",
    "google-business-kategorien-guide",
    "local-seo-audit-checkliste"
  ];

  return (
    <ArticleLayout article={articleData}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Google Business Attribute sind kleine, aber mächtige Informationsbausteine. Sie sagen Kunden auf 
            einen Blick, was dein Geschäft bietet – von Barrierefreiheit bis zur Zahlungsmethode. 
            Richtig genutzt, verbessern sie dein Ranking und ziehen die richtigen Kunden an.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <h2 id="was-sind-attribute" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Was sind GBP Attribute?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Attribute sind standardisierte Eigenschaften, die dein Geschäft beschreiben. Sie erscheinen in 
            deinem Profil und helfen Google zu verstehen, was du anbietest:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-blue-700">🔧 Faktenattribute</h4>
            <p className="text-gray-700 mb-3">Objektive Eigenschaften, die du selbst setzt:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Rollstuhlgerechter Eingang</li>
              <li>• WLAN verfügbar</li>
              <li>• Kartenzahlung möglich</li>
              <li>• Außenbereich vorhanden</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-purple-700">👥 Subjektive Attribute</h4>
            <p className="text-gray-700 mb-3">Von Nutzern hinzugefügt (Crowdsourcing):</p>
            <ul className="space-y-2 text-gray-600">
              <li>• "Gemütliche Atmosphäre"</li>
              <li>• "Gut für Gruppen"</li>
              <li>• "Familienfreundlich"</li>
              <li>• "Romantisch"</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-green-800 mb-2">Warum Attribute wichtig sind</h4>
          <p className="text-green-700">
            Wenn jemand nach "Restaurant mit Außenbereich München" sucht, bevorzugt Google Geschäfte, 
            die das Attribut "Sitzplätze im Freien" gesetzt haben. Attribute sind Filter in der Suche!
          </p>
        </div>

        <h2 id="kategorien" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Attribut-Kategorien im Überblick</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Google bietet Dutzende Attribute, gruppiert in verschiedene Kategorien:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">♿ Barrierefreiheit</h4>
            <div className="flex flex-wrap gap-2">
              {["Rollstuhlgerechter Eingang", "Rollstuhlgerechte Sitzplätze", "Rollstuhlgerechte Toilette", "Rollstuhlgerechter Aufzug", "Rollstuhlgerechter Parkplatz"].map(attr => (
                <span key={attr} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{attr}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">💳 Zahlungsmethoden</h4>
            <div className="flex flex-wrap gap-2">
              {["Kreditkarten", "EC-Karte", "Barzahlung", "NFC-Zahlung", "Apple Pay", "Google Pay"].map(attr => (
                <span key={attr} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{attr}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">🍽️ Ausstattung & Service</h4>
            <div className="flex flex-wrap gap-2">
              {["WLAN", "Klimaanlage", "Parkplätze", "Toiletten", "Hunde erlaubt", "Sitzplätze im Freien", "Lieferung", "Abholung"].map(attr => (
                <span key={attr} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{attr}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">👨‍👩‍👧‍👦 Zielgruppen</h4>
            <div className="flex flex-wrap gap-2">
              {["Familienfreundlich", "LGBTQ+ freundlich", "Kinderfreundlich", "Gut für Gruppen", "Business-geeignet"].map(attr => (
                <span key={attr} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{attr}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3">🏥 Gesundheit & Sicherheit</h4>
            <div className="flex flex-wrap gap-2">
              {["Masken erforderlich", "Mitarbeiter geimpft", "Desinfektionsmittel", "Temperaturcheck", "Kontaktverfolgung"].map(attr => (
                <span key={attr} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{attr}</span>
              ))}
            </div>
          </div>
        </div>

        <h2 id="wichtige-attribute" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Attribute nach Branche</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Je nach Branche sind unterschiedliche Attribute verfügbar und relevant:
          </AutoLexikonText>
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Branche</th>
                <th className="border p-3 text-left">Must-Have Attribute</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-bold">🍽️ Restaurant</td>
                <td className="border p-3">Lieferung, Sitzplätze außen, Reservierung, Take-away, Alkohol</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🏥 Arztpraxis</td>
                <td className="border p-3">Online-Termine, Barrierefreiheit, Sprachen, Versicherungen</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🔧 Handwerker</td>
                <td className="border p-3">Notdienst, Kostenvoranschlag, Online-Buchung</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">💇 Friseur</td>
                <td className="border p-3">Online-Buchung, Rollstuhlgerecht, LGBTQ+ freundlich</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🛒 Einzelhandel</td>
                <td className="border p-3">Vor-Ort-Abholung, Lieferung, Parkplätze, Zahlungsmethoden</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">🏨 Hotel</td>
                <td className="border p-3">WLAN, Frühstück, Parken, Pool, Barrierefreiheit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="einstellen" className="text-3xl font-bold mt-10 mb-6 text-gray-800">So stellst du Attribute ein</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Das Einstellen von Attributen ist einfach, aber es gibt wichtige Details zu beachten:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Schritt-für-Schritt:</h4>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <strong>GBP öffnen und "Profil bearbeiten" wählen</strong>
                <p className="text-gray-600">Im Dashboard auf "Profil bearbeiten" klicken</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <strong>Zu "Weitere Informationen" scrollen</strong>
                <p className="text-gray-600">Hier findest du die Attribut-Sektionen</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <strong>Kategorie auswählen</strong>
                <p className="text-gray-600">Z.B. "Barrierefreiheit" oder "Angebote"</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <strong>Zutreffende Attribute aktivieren</strong>
                <p className="text-gray-600">Nur aktivieren, was wirklich zutrifft!</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
              <div>
                <strong>Speichern</strong>
                <p className="text-gray-600">Änderungen werden in 24-48h sichtbar</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-yellow-800 mb-2">⚠️ Wichtig: Ehrlich sein!</h4>
          <p className="text-yellow-700">
            Aktiviere nur Attribute, die wirklich zutreffen. Ein Rollstuhlfahrer, der einen "rollstuhlgerechten Eingang" 
            vorfindet, der keiner ist, wird eine schlechte Bewertung hinterlassen.
          </p>
        </div>

        <h2 id="aktuell-halten" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Attribute aktuell halten</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Attribute müssen gepflegt werden, da Google regelmäßig neue Optionen einführt:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📅</div>
            <h4 className="font-bold mb-2">Vierteljährlich</h4>
            <p className="text-sm text-gray-600">Alle Attribute auf Aktualität prüfen</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🔔</div>
            <h4 className="font-bold mb-2">Bei Änderungen</h4>
            <p className="text-sm text-gray-600">Sofort anpassen bei neuen Services</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">👀</div>
            <h4 className="font-bold mb-2">Nutzer-Attribute</h4>
            <p className="text-sm text-gray-600">Regelmäßig auf Korrektheit prüfen</p>
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

export default GbpAttributeRichtigNutzen;
