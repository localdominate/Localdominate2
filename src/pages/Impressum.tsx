import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";

const Impressum = () => {
  const { language } = useLanguage();

  const seoContent = {
    de: {
      title: "Impressum",
      description: "Impressum und rechtliche Angaben von Local Dominator - Ihr Partner für Google Maps Optimierung."
    },
    en: {
      title: "Legal Notice",
      description: "Legal notice and imprint of Local Dominator - Your partner for Google Maps optimization."
    }
  };

  const seo = seoContent[language];

  const content = {
    de: {
      title: "Impressum",
      back: "Zurück zur Startseite",
      operatedBy: "Betrieben von:",
      contact: "Kontakt",
      responsibleForContent: "Verantwortlich für den Inhalt:",
      representedBy: "Vertreten durch:",
      corporateInfo: "1. Unternehmensinformationen",
      legalForm: "Rechtsform:",
      independentNote: "Diese Website wird unabhängig betrieben und ist nicht mit einer Regierungsorganisation, einem Tourismusverband oder einer staatlichen Einrichtung verbunden, sofern nicht ausdrücklich angegeben.",
      disclaimer: "2. Allgemeiner Haftungsausschluss",
      disclaimerText: "Local Dominator bietet Informationen und Dienstleistungen ausschließlich zu allgemeinen Informationszwecken an.",
      noGuarantee: "Wir garantieren nicht:",
      guaranteeItems: ["Richtigkeit", "Vollständigkeit", "Zuverlässigkeit", "Verfügbarkeit", "Eignung", "Aktualität"],
      userRisk: "Die Nutzung aller Informationen erfolgt auf eigenes Risiko des Nutzers.",
      thirdParty: "3. Websites Dritter & Externe Links",
      thirdPartyText: "Local Dominator enthält Links zu externen Websites und Plattformen Dritter. Wir haben keine Kontrolle über den Inhalt, die Richtigkeit oder die Sicherheit dieser Websites.",
      thirdPartyDisclaimer: [
        "Wir lehnen jede Verantwortung für Inhalte Dritter ab",
        "Wir lehnen jede Haftung für Transaktionen oder Handlungen auf Websites Dritter ab",
        "Wir können die Rechtmäßigkeit, Verfügbarkeit oder Sicherheit externer Links nicht garantieren"
      ],
      thirdPartyNote: "Die Betreiber verlinkter Seiten sind allein für deren Inhalt verantwortlich.",
      intellectualProperty: "4. Geistiges Eigentum & Urheberrecht",
      intellectualPropertyText: "Sofern nicht anders angegeben, sind alle Inhalte auf Local Dominator — einschließlich, aber nicht beschränkt auf Texte, Fotografien, Grafiken, Videos, Designs, Markenelemente, Logos, digitale Assets, Leitfäden und Artikel — durch internationale Urheberrechtsgesetze geschützt.",
      intellectualPropertyWarning: "Die Vervielfältigung, Verbreitung, das Kopieren, Scrapen oder Extrahieren von Inhalten ist ohne schriftliche Genehmigung strengstens untersagt. Unbefugte Nutzung kann zu rechtlichen Schritten führen.",
      limitation: "5. Haftungsbeschränkung",
      limitationText: "Im größtmöglichen gesetzlich zulässigen Umfang haften Local Dominator und seine Betreiber nicht für indirekte, zufällige oder Folgeschäden, entgangenen Gewinn, Datenverlust, Geschäftsunterbrechung, Ungenauigkeiten in Informationen Dritter oder Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung der Website entstehen.",
      availability: "6. Verfügbarkeit der Website",
      availabilityText: "Wir garantieren keine ununterbrochene Verfügbarkeit, fehlerfreie Funktion, virenfreien Betrieb oder Sicherheit der Datenübertragung. Wir können den Zugang jederzeit ohne Vorankündigung aussetzen, einschränken oder beenden.",
      jurisdiction: "7. Gerichtsstand & Anwendbares Recht",
      jurisdictionText: "Sofern nicht gesetzlich anders vorgeschrieben, unterliegen alle Streitigkeiten dem Recht von Deutschland. Die ausschließliche Zuständigkeit liegt bei den zuständigen Gerichten in München.",
      privacy: "8. Datenschutz",
      privacyText: "Informationen zur Erhebung und Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.",
      legalContact: "9. Kontakt für rechtliche Mitteilungen",
      legalContactText: "Rechtliche Anfragen können gesendet werden an:"
    },
    en: {
      title: "Legal Notice",
      back: "Back to Homepage",
      operatedBy: "Operated by:",
      contact: "Contact",
      responsibleForContent: "Responsible for Content:",
      representedBy: "Represented by:",
      corporateInfo: "1. Corporate Information",
      legalForm: "Legal Form:",
      independentNote: "This website is operated independently and is not affiliated with any governmental organization, tourism board, or state entity unless explicitly stated.",
      disclaimer: "2. General Disclaimer",
      disclaimerText: "Local Dominator provides information and services solely for general informational purposes.",
      noGuarantee: "We do not guarantee:",
      guaranteeItems: ["accuracy", "completeness", "reliability", "availability", "suitability", "timeliness"],
      userRisk: "All use of information is at the user's own risk.",
      thirdParty: "3. Third-Party Websites & External Links",
      thirdPartyText: "Local Dominator contains links to external third-party websites and platforms. We have no control over the content, accuracy, or security of those websites.",
      thirdPartyDisclaimer: [
        "We disclaim any responsibility for third-party content",
        "We disclaim any liability for transactions or actions taken on third-party sites",
        "We cannot guarantee the legality, availability, or safety of external links"
      ],
      thirdPartyNote: "The operators of linked sites are solely responsible for their content.",
      intellectualProperty: "4. Intellectual Property & Copyright",
      intellectualPropertyText: "Unless otherwise stated, all content on Local Dominator — including but not limited to text, photographs, graphics, videos, designs, branding elements, logos, digital assets, guides, and articles — is protected by international copyright laws.",
      intellectualPropertyWarning: "Reproduction, distribution, copying, scraping, or extraction of content is strictly prohibited without written permission. Unauthorized use may result in legal action.",
      limitation: "5. Limitation of Liability",
      limitationText: "To the maximum extent permitted by law, Local Dominator and its operators shall not be liable for indirect, incidental, or consequential damages, loss of profit or revenue, data loss, business interruption, inaccuracies in third-party information, or damages arising from the use or inability to use the website.",
      availability: "6. Availability of the Website",
      availabilityText: "We do not guarantee uninterrupted availability, error-free functioning, virus-free operation, or security of data transmission. We may suspend, restrict, or terminate access at any time without notice.",
      jurisdiction: "7. Jurisdiction & Applicable Law",
      jurisdictionText: "Unless legally required otherwise, all disputes shall be governed by the laws of Germany. Exclusive jurisdiction lies with the competent courts of Munich.",
      privacy: "8. Data Protection & Privacy",
      privacyText: "Information regarding the collection and processing of personal data is detailed in our Privacy Policy.",
      legalContact: "9. Contact for Legal Notices",
      legalContactText: "Legal inquiries can be sent to:"
    }
  };

  const t = content[language];

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        noindex={true}
        lang={language}
        canonicalUrl={`https://localdominator.de/impressum`}
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-3xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {t.back}
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-8">{t.title}</h1>

          <div className="space-y-8">
            {/* Company Information */}
            <div className="card-premium p-6">
              <p className="text-lg mb-4">
                <strong>Local Dominator</strong> {t.operatedBy} <strong>EXPLORE SAUDI ARABIA LTD</strong>
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold mb-2">{t.contact}</h3>
                <p className="text-muted-foreground">
                  E-Mail: <a href="mailto:info@localdominator.de" className="text-primary hover:underline">info@localdominator.de</a><br />
                  Website: <a href="https://localdominator.de" className="text-primary hover:underline">https://localdominator.de</a>
                </p>
              </div>

              <p className="text-muted-foreground mb-2">
                <strong>{t.responsibleForContent}</strong> Markus Wimböck
              </p>
              <p className="text-muted-foreground">
                <strong>{t.representedBy}</strong> Markus Wimböck
              </p>
            </div>

            {/* Corporate Information */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.corporateInfo}</h2>
              <p className="text-muted-foreground mb-2">
                <strong>{t.legalForm}</strong> Ltd.
              </p>
              <p className="text-muted-foreground">{t.independentNote}</p>
            </div>

            {/* General Disclaimer */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.disclaimer}</h2>
              <p className="text-muted-foreground mb-4">{t.disclaimerText}</p>
              <p className="text-muted-foreground mb-2"><strong>{t.noGuarantee}</strong></p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                {t.guaranteeItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground font-semibold">{t.userRisk}</p>
            </div>

            {/* Third-Party Links */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.thirdParty}</h2>
              <p className="text-muted-foreground mb-4">{t.thirdPartyText}</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4">
                {t.thirdPartyDisclaimer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{t.thirdPartyNote}</p>
            </div>

            {/* Intellectual Property */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.intellectualProperty}</h2>
              <p className="text-muted-foreground mb-4">{t.intellectualPropertyText}</p>
              <p className="text-muted-foreground font-semibold">{t.intellectualPropertyWarning}</p>
            </div>

            {/* Limitation of Liability */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.limitation}</h2>
              <p className="text-muted-foreground">{t.limitationText}</p>
            </div>

            {/* Availability */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.availability}</h2>
              <p className="text-muted-foreground">{t.availabilityText}</p>
            </div>

            {/* Jurisdiction */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.jurisdiction}</h2>
              <p className="text-muted-foreground">{t.jurisdictionText}</p>
            </div>

            {/* Privacy */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.privacy}</h2>
              <p className="text-muted-foreground">
                {t.privacyText}{" "}
                <Link to="/datenschutz" className="text-primary hover:underline">
                  {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
                </Link>
              </p>
            </div>

            {/* Legal Contact */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t.legalContact}</h2>
              <p className="text-muted-foreground mb-2">{t.legalContactText}</p>
              <p className="text-muted-foreground">
                <a href="mailto:legal@localdominator.de" className="text-primary hover:underline">legal@localdominator.de</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Impressum;