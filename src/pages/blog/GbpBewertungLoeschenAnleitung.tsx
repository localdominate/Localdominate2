import React from 'react';
import SeoFlowDiagram from '@/components/blog/SeoFlowDiagram';
import ArticleLayout from '../../components/blog/ArticleLayout';
import TableOfContents from '../../components/blog/TableOfContents';
import KeyTakeawaysBox from '../../components/blog/KeyTakeawaysBox';
import AutoLexikonText from '../../components/blog/AutoLexikonText';
import BlogFAQSection from '../../components/blog/BlogFAQSection';
import HelpfulnessWidget from '../../components/blog/HelpfulnessWidget';
import SourcesSection from '../../components/blog/SourcesSection';
import ReviewResponseTemplates from '@/components/blog/ReviewResponseTemplates';
import BlogImage from '../../components/blog/BlogImage';
import gbpBewertungLoeschenImage from '../../assets/blog/gbp-bewertung-loeschen.jpg';

const GbpBewertungLoeschenAnleitung: React.FC = () => {
  const articleData = {
    slug: "gbp-bewertung-loeschen-anleitung",
    title: "Google Bewertung löschen lassen – Komplette Anleitung 2026",
    metaTitle: "Google Bewertung löschen lassen | Schritt-für-Schritt 2026",
    metaDescription: "Fake-Bewertung oder Verleumdung auf Google? Lerne wie du unfaire Bewertungen melden und löschen lassen kannst. Mit Erfolgsstrategien und rechtlichen Optionen.",
    excerpt: "Der komplette Guide zum Entfernen unfairer Google Bewertungen mit Meldestrategien und rechtlichen Optionen.",
    category: "Troubleshooting",
    readingTime: 13,
    publishedAt: "2025-01-10",
    updatedAt: "2026-02-08",
    icon: "🗑️",
    keywords: ["google bewertung löschen", "fake bewertung melden", "negative bewertung entfernen", "google rezension löschen", "bewertung melden"]
  };

  const toc = [
    { id: "key-takeaways", title: "Wichtigste Erkenntnisse" },
    { id: "einfuehrung", title: "Wann kann eine Bewertung gelöscht werden?" },
    { id: "verstoesse", title: "Welche Bewertungen verstoßen gegen Richtlinien?" },
    { id: "melden", title: "Bewertung bei Google melden" },
    { id: "eskalation", title: "Eskalationswege wenn Meldung abgelehnt" },
    { id: "rechtlich", title: "Rechtliche Optionen bei Verleumdung" },
    { id: "alternativen", title: "Alternativen zum Löschen" },
    { id: "faq", title: "Häufige Fragen" }
  ];

  const keyTakeaways = [
    "Nur richtlinienwidrige Bewertungen können gelöscht werden – nicht einfach negative",
    "Spam, Fake-Bewertungen und Beleidigungen sind meldbar",
    "Der Meldeprozess kann 5-20 Werktage dauern",
    "Bei Ablehnung gibt es Eskalationswege wie Twitter Support",
    "Anwaltliche Abmahnung ist bei nachweisbarer Verleumdung möglich"
  ];

  const faqs = [
    {
      question: "Kann ich jede negative Bewertung löschen lassen?",
      answer: "Nein, Google löscht nur Bewertungen, die gegen die Richtlinien verstoßen. Eine negative aber sachliche Bewertung eines echten Kunden wird nicht entfernt."
    },
    {
      question: "Wie lange dauert es bis Google eine Bewertung löscht?",
      answer: "Nach der Meldung prüft Google die Bewertung innerhalb von 5-20 Werktagen. In dringenden Fällen kann eine Eskalation über Twitter schneller sein."
    },
    {
      question: "Was kostet eine anwaltliche Abmahnung?",
      answer: "Die Kosten für eine anwaltliche Abmahnung bei Verleumdung liegen typischerweise zwischen 500-1.500€, abhängig vom Aufwand und Anwalt."
    },
    {
      question: "Kann der Bewerter sehen, dass ich die Bewertung gemeldet habe?",
      answer: "Nein, die Meldung erfolgt anonym. Der Bewerter erfährt nicht, wer die Bewertung gemeldet hat."
    },
    {
      question: "Was wenn die Bewertung von einem Konkurrenten stammt?",
      answer: "Konkurrenten-Bewertungen verstoßen gegen Googles Richtlinien. Sammle Beweise (IP-Adressen, Timing, Formulierungen) und melde sie als 'Interessenkonflikt'."
    },
    {
      question: "Kann ich eine Bewertung löschen, die älter als 1 Jahr ist?",
      answer: "Ja, das Alter der Bewertung spielt keine Rolle. Auch Jahre alte Bewertungen können gemeldet und bei Richtlinienverstoß gelöscht werden."
    }
  ];

  const sources = [
    { title: "Google Business Profile Richtlinien", url: "https://support.google.com/business/answer/3474122" },
    { title: "Bewertungen melden - Google Support", url: "https://support.google.com/business/answer/4596773" },
    { title: "BrightLocal - Managing Negative Reviews", url: "https://www.brightlocal.com/learn/managing-negative-reviews/" }
  ];

  const relatedArticles = [
    "negative-google-bewertungen",
    "google-bewertungen-bekommen",
    "bewertungs-antworten-vorlagen"
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Unfaire Google Bewertung melden und löschen lassen",
    description: "Anleitung zum Entfernen von Fake-Bewertungen, Verleumdungen und richtlinienwidrigen Rezensionen auf Google Business Profile.",
    totalTime: "P21D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
    step: [
      { "@type": "HowToStep", position: 1, name: "Richtlinienverstoß identifizieren", text: "Prüfe ob die Bewertung gegen Google-Richtlinien verstößt: Spam, Fake, Beleidigung, Interessenkonflikt oder irrelevanter Inhalt." },
      { "@type": "HowToStep", position: 2, name: "Bewertung bei Google melden", text: "Klicke auf die drei Punkte neben der Bewertung und wähle 'Melden'. Wähle den passenden Verstoßgrund aus." },
      { "@type": "HowToStep", position: 3, name: "Beweise dokumentieren", text: "Sammle Screenshots, Kundenlisten-Abgleich und weitere Beweise, die belegen dass die Bewertung gefälscht oder richtlinienwidrig ist." },
      { "@type": "HowToStep", position: 4, name: "Auf Googles Prüfung warten", text: "Google prüft gemeldete Bewertungen innerhalb von 5-20 Werktagen. Wiederholte Meldungen beschleunigen den Prozess nicht." },
      { "@type": "HowToStep", position: 5, name: "Bei Ablehnung eskalieren", text: "Kontaktiere den Google Business Support via Twitter (@GoogleMyBiz) oder das offizielle Support-Formular mit deinen Beweisen." },
      { "@type": "HowToStep", position: 6, name: "Rechtliche Optionen prüfen", text: "Bei nachweisbarer Verleumdung kann eine anwaltliche Abmahnung (500-1.500€) oder eine einstweilige Verfügung erwirkt werden." },
    ],
  };

  return (
    <ArticleLayout article={articleData} faqItems={faqs} additionalSchema={howToSchema}>
      <div className="max-w-4xl mx-auto">
        <TableOfContents items={toc} />

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          <AutoLexikonText>
            Eine unfaire Google Bewertung kann dein Geschäft massiv schädigen. Ob Fake-Bewertung vom Konkurrenten oder 
            Verleumdung von jemandem, der nie Kunde war – dieser Guide zeigt dir alle legalen Wege, solche Bewertungen 
            zu entfernen. Mit Schritt-für-Schritt Anleitungen und Eskalationsstrategien.
          </AutoLexikonText>
        </p>

        <h2 id="key-takeaways" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Die wichtigsten Erkenntnisse</h2>
        <KeyTakeawaysBox items={keyTakeaways} />

        <SeoFlowDiagram
          title="Google Bewertung löschen: Eskalations-Workflow"
          steps={[
            { label: "Verstoß prüfen", icon: "🔍", description: "Gegen Richtlinien?" },
            { label: "Bei Google melden", icon: "🚩", description: "Passenden Grund wählen" },
            { label: "Beweise sammeln", icon: "📸", description: "Screenshots & Nachweise" },
            { label: "5–20 Tage warten", icon: "⏳", description: "Google prüft die Meldung" },
            { label: "Eskalieren", icon: "📢", description: "Twitter / Support-Formular", highlight: true },
            { label: "Rechtlich vorgehen", icon: "⚖️", description: "Anwalt bei Verleumdung" },
          ]}
          caption="Eskalationspfad: Jede Stufe nur nutzen, wenn die vorherige erfolglos war"
        />

        <h2 id="einfuehrung" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Wann kann eine Bewertung gelöscht werden?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Google löscht Bewertungen nur, wenn sie gegen die Community-Richtlinien verstoßen. Das bedeutet: Eine negative, 
            aber sachliche Kritik eines echten Kunden wird nicht entfernt – auch wenn sie ungerecht erscheint.
          </AutoLexikonText>
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-red-800 mb-2">Wichtig zu verstehen</h4>
          <p className="text-red-700">
            Google ist kein Schiedsrichter für Kundenbeschwerden. Eine 1-Stern-Bewertung mit "Service war schlecht" 
            wird nicht gelöscht, selbst wenn du der Meinung bist, dass der Kunde unrecht hat.
          </p>
        </div>

        <h2 id="verstoesse" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Welche Bewertungen verstoßen gegen Richtlinien?</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Die folgenden Kategorien von Bewertungen können erfolgreich gemeldet werden:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3 text-red-600">🚫 Spam & Fake</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Bewertungen von Personen, die nie Kunde waren</li>
              <li>• Gekaufte oder beauftragte Bewertungen</li>
              <li>• Mehrfachbewertungen derselben Person</li>
              <li>• Automatisierte Bot-Bewertungen</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3 text-red-600">⚠️ Unangemessener Inhalt</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Beleidigungen und Hassrede</li>
              <li>• Sexuell explizite Inhalte</li>
              <li>• Gewaltverherrlichung</li>
              <li>• Persönliche Angriffe auf Mitarbeiter</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3 text-orange-600">🔄 Interessenkonflikte</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Bewertungen von Konkurrenten</li>
              <li>• Bewertungen von Ex-Mitarbeitern</li>
              <li>• Selbstbewertungen des eigenen Geschäfts</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-3 text-orange-600">📍 Off-Topic</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Politische Statements ohne Bezug</li>
              <li>• Soziale Kommentare ohne Kundenerfahrung</li>
              <li>• Verwechslung mit anderem Geschäft</li>
            </ul>
          </div>
        </div>

        <h2 id="melden" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Bewertung bei Google melden</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Der offizielle Weg, eine Bewertung zu melden, führt über dein Google Business Profile:
          </AutoLexikonText>
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h4 className="font-bold text-lg mb-4">Schritt-für-Schritt Anleitung:</h4>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <strong>Google Business Profile öffnen</strong>
                <p className="text-gray-600">Melde dich bei business.google.com an und wähle deinen Standort.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <strong>Zu Bewertungen navigieren</strong>
                <p className="text-gray-600">Klicke auf "Bewertungen lesen" oder gehe zu "Bewertungen" im Menü.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <strong>Bewertung finden und melden</strong>
                <p className="text-gray-600">Klicke auf die drei Punkte neben der Bewertung und wähle "Als unangemessen melden".</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <strong>Verstoßkategorie wählen</strong>
                <p className="text-gray-600">Wähle die passende Kategorie: Spam, Off-Topic, Interessenkonflikt, etc.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
              <div>
                <strong>Warten und nachfassen</strong>
                <p className="text-gray-600">Google prüft die Meldung in 5-20 Werktagen. Notiere dir das Datum!</p>
              </div>
            </li>
          </ol>
        </div>

        <h2 id="eskalation" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Eskalationswege wenn Meldung abgelehnt</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Wenn Google deine Meldung ablehnt, gibt es weitere Optionen:
          </AutoLexikonText>
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">📱 Twitter/X Support</h4>
            <p className="text-gray-700 mb-2">Kontaktiere @GoogleMyBiz auf Twitter mit deinem Fall. Oft schneller als regulärer Support.</p>
            <p className="text-sm text-gray-500">Erfolgsrate: ca. 40% bei berechtigten Fällen</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">📧 Google Small Business Support</h4>
            <p className="text-gray-700 mb-2">Für verifizierte Profile gibt es einen direkten E-Mail-Support-Kanal.</p>
            <p className="text-sm text-gray-500">Erfolgsrate: ca. 30% bei Eskalation</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-2">👥 Google Business Profile Community</h4>
            <p className="text-gray-700 mb-2">Product Experts können Fälle an Google eskalieren.</p>
            <p className="text-sm text-gray-500">Erfolgsrate: ca. 25% bei dokumentierten Fällen</p>
          </div>
        </div>

        <h2 id="rechtlich" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Rechtliche Optionen bei Verleumdung</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Bei nachweislich falschen Tatsachenbehauptungen oder Verleumdung können rechtliche Schritte sinnvoll sein:
          </AutoLexikonText>
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h4 className="font-bold text-yellow-800 mb-2">Wann lohnt sich ein Anwalt?</h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• Nachweislich falsche Tatsachenbehauptungen (nicht Meinungen!)</li>
            <li>• Beleidigung oder üble Nachrede</li>
            <li>• Geschäftsschädigung durch nachweislich unwahre Aussagen</li>
            <li>• Wenn die Person identifizierbar ist</li>
          </ul>
        </div>

        <h2 id="alternativen" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Alternativen zum Löschen</h2>
        <p className="text-lg mb-6">
          <AutoLexikonText>
            Manchmal ist es klüger, die Bewertung stehen zu lassen und professionell zu reagieren:
          </AutoLexikonText>
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">✅ Professionell antworten</h4>
            <p className="text-gray-700">
              Eine sachliche, empathische Antwort zeigt anderen Kunden deine Professionalität. 
              Oft wirkt die negative Bewertung dann weniger schädlich.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">✅ Positive Bewertungen generieren</h4>
            <p className="text-gray-700">
              10 positive Bewertungen machen 1 negative fast unsichtbar. 
              Fokussiere dich auf mehr 5-Sterne-Bewertungen statt auf das Löschen.
            </p>
          </div>
        </div>

        <h2 id="faq" className="text-3xl font-bold mt-10 mb-6 text-gray-800">Häufige Fragen</h2>
        <BlogFAQSection faqs={faqs} />

        <SourcesSection sources={sources} />

        <ReviewResponseTemplates
          title="Vorlagen: Auf unfaire Bewertungen reagieren"
          description="Professionelle Antwortvorlagen fuer Fake-Bewertungen und Eskalationsfaelle."
          categories={["fake", "escalation"]}
        />

        <HelpfulnessWidget articleSlug={articleData.slug} />
      </div>
    </ArticleLayout>
  );
};

export default GbpBewertungLoeschenAnleitung;
