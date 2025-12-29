import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: "Impressum",
      back: "Zurück zur Startseite",
      sections: [
        {
          title: "Angaben gemäß § 5 TMG",
          content: `[Dein Firmenname]
[Deine Straße und Hausnummer]
[PLZ Ort]
Deutschland`
        },
        {
          title: "Kontakt",
          content: `Telefon: [Deine Telefonnummer]
E-Mail: [Deine E-Mail-Adresse]`
        },
        {
          title: "Vertreten durch",
          content: "[Dein Name / Geschäftsführer]"
        },
        {
          title: "Umsatzsteuer-ID",
          content: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [Deine USt-ID]"
        },
        {
          title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
          content: `[Dein Name]
[Deine Adresse]`
        },
        {
          title: "EU-Streitschlichtung",
          content: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/"
        }
      ]
    },
    en: {
      title: "Legal Notice",
      back: "Back to Homepage",
      sections: [
        {
          title: "Information according to § 5 TMG",
          content: `[Your Company Name]
[Your Street and Number]
[ZIP City]
Germany`
        },
        {
          title: "Contact",
          content: `Phone: [Your Phone Number]
Email: [Your Email Address]`
        },
        {
          title: "Represented by",
          content: "[Your Name / Managing Director]"
        },
        {
          title: "VAT ID",
          content: "VAT identification number according to § 27a of the Value Added Tax Act: [Your VAT ID]"
        },
        {
          title: "Responsible for content according to § 55 Abs. 2 RStV",
          content: `[Your Name]
[Your Address]`
        },
        {
          title: "EU Dispute Resolution",
          content: "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/"
        }
      ]
    }
  };

  const t = content[language];

  return (
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
  );
};

export default Impressum;
