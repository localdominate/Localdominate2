import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const Datenschutz = () => {
  const { language } = useLanguage();

  const seoContent = {
    de: {
      title: "Datenschutzerklärung",
      description: "Datenschutzerklärung von Local Dominator - Informationen zum Umgang mit Ihren personenbezogenen Daten."
    },
    en: {
      title: "Privacy Policy",
      description: "Privacy policy of Local Dominator - Information about how we handle your personal data."
    }
  };

  const seo = seoContent[language];

  const content = {
    de: {
      title: "Datenschutzerklärung",
      back: "Zurück zur Startseite",
      sections: [
        {
          title: "1. Datenschutz auf einen Blick",
          content: `Allgemeine Hinweise

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.

Datenerfassung auf dieser Website

Wer ist verantwortlich für die Datenerfassung auf dieser Website?
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.`
        },
        {
          title: "2. Hosting",
          content: `Wir hosten die Inhalte unserer Website bei folgendem Anbieter:

Externes Hosting

Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.`
        },
        {
          title: "3. Allgemeine Hinweise und Pflichtinformationen",
          content: `Datenschutz

Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Hinweis zur verantwortlichen Stelle

Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

[Dein Firmenname]
[Deine Adresse]
[Deine E-Mail]
[Deine Telefonnummer]`
        },
        {
          title: "4. Datenerfassung auf dieser Website",
          content: `Cookies

Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.

Server-Log-Dateien

Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.`
        },
        {
          title: "5. Analyse-Tools und Werbung",
          content: `Google Analytics

Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.

Google Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.`
        },
        {
          title: "6. Ihre Rechte",
          content: `Sie haben jederzeit das Recht:

• Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
• Berichtigung unrichtiger Daten zu verlangen
• Löschung Ihrer Daten zu verlangen
• Einschränkung der Verarbeitung zu verlangen
• Datenübertragbarkeit zu verlangen
• Widerspruch gegen die Verarbeitung einzulegen
• Eine erteilte Einwilligung zu widerrufen`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      back: "Back to Homepage",
      sections: [
        {
          title: "1. Privacy at a Glance",
          content: `General Information

The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.

Data Collection on This Website

Who is responsible for data collection on this website?
Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.`
        },
        {
          title: "2. Hosting",
          content: `We host the content of our website with the following provider:

External Hosting

This website is hosted externally. The personal data collected on this website is stored on the host's servers.`
        },
        {
          title: "3. General Information and Mandatory Information",
          content: `Data Protection

The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.

Information about the Responsible Party

The responsible party for data processing on this website is:

[Your Company Name]
[Your Address]
[Your Email]
[Your Phone Number]`
        },
        {
          title: "4. Data Collection on This Website",
          content: `Cookies

Our websites use so-called "cookies". Cookies are small data packages and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device.

Server Log Files

The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us.`
        },
        {
          title: "5. Analysis Tools and Advertising",
          content: `Google Analytics

This website uses functions of the web analytics service Google Analytics. The provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.

Google Analytics uses so-called "cookies". These are text files that are stored on your computer and enable an analysis of your use of the website.`
        },
        {
          title: "6. Your Rights",
          content: `You have the right at any time to:

• Obtain information about your data stored with us
• Request correction of incorrect data
• Request deletion of your data
• Request restriction of processing
• Request data portability
• Object to processing
• Revoke consent given`
        }
      ]
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
        canonicalUrl={`https://localdominator.de/datenschutz`}
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container max-w-3xl">
        <SiteBreadcrumbs includeSchema />

        <h1 className="text-4xl font-bold text-foreground mb-8">{t.title}</h1>

        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <div key={index} className="card-premium p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {section.title}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-12 text-center">
          ⚠️ Bitte ersetze die Platzhalter mit deinen echten Daten
        </p>
      </div>
    </main>
    </>
  );
};

export default Datenschutz;
