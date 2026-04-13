import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const AGB = () => {
  const { language } = useLanguage();

  const seoContent = {
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      description: "AGB von Local Dominator - Unsere allgemeinen Geschäftsbedingungen für Google Maps Optimierung."
    },
    en: {
      title: "Terms and Conditions",
      description: "Terms and conditions of Local Dominator - Our general terms for Google Maps optimization services."
    },
    ar: {
      title: "الشروط والأحكام العامة",
      description: "الشروط والأحكام العامة لـ Local Dominator - شروطنا العامة لخدمات تحسين خرائط Google."
    }
  };

  const seo = seoContent[language] || seoContent.de;

  const content = {
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      sections: [
        {
          title: "§ 1 Geltungsbereich",
          content: `(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge, die zwischen [Dein Firmenname] (nachfolgend "Anbieter") und dem Kunden (nachfolgend "Kunde") über die Website www.[deine-domain].de geschlossen werden.

(2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.`
        },
        {
          title: "§ 2 Vertragsschluss",
          content: `(1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar.

(2) Durch Anklicken des Buttons "Zahlungspflichtig bestellen" gibt der Kunde ein verbindliches Angebot ab.

(3) Der Vertrag kommt zustande, wenn der Anbieter das Angebot des Kunden durch eine Auftragsbestätigung per E-Mail annimmt.`
        },
        {
          title: "§ 3 Preise und Zahlungsbedingungen",
          content: `(1) Die angegebenen Preise sind Endpreise und enthalten die gesetzliche Mehrwertsteuer.

(2) Der Kaufpreis ist sofort bei Vertragsschluss fällig.

(3) Zahlungsmöglichkeiten werden dem Kunden im Bestellprozess angezeigt.`
        },
        {
          title: "§ 4 Lieferung / Leistungserbringung",
          content: `(1) Die Lieferung digitaler Inhalte erfolgt per Download oder E-Mail-Versand.

(2) Dienstleistungen werden innerhalb von 48 Stunden nach Zahlungseingang begonnen.

(3) Der Anbieter behält sich vor, die Leistung nicht zu erbringen, wenn dies aus wichtigem Grund nicht möglich ist.`
        },
        {
          title: "§ 5 Widerrufsrecht",
          content: `Verbraucher haben ein 14-tägiges Widerrufsrecht. Einzelheiten zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung.

Mit dem Beginn der Ausführung des Vertrages vor Ablauf der Widerrufsfrist erklärt sich der Verbraucher ausdrücklich einverstanden und bestätigt seine Kenntnis davon, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert.`
        },
        {
          title: "§ 6 Gewährleistung und Garantie",
          content: `(1) Es gelten die gesetzlichen Gewährleistungsrechte.

(2) Der Anbieter bietet eine 30-Tage Geld-zurück-Garantie unter folgenden Bedingungen:
- Der Kunde hat alle Optimierungen gemäß Anleitung umgesetzt
- Der Kunde hat dem Anbieter die Möglichkeit zur Nachbesserung gegeben
- Es ist keine messbare Steigerung der Anfragen feststellbar

(3) Die Garantie gilt nicht bei unsachgemäßer Anwendung oder eigenständigen Änderungen durch den Kunden.`
        },
        {
          title: "§ 7 Haftung",
          content: `(1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.

(2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.

(3) Der Anbieter garantiert keine bestimmten Rankingpositionen in Suchmaschinen.`
        },
        {
          title: "§ 8 Schlussbestimmungen",
          content: `(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

(2) Gerichtsstand ist der Sitz des Anbieters, sofern der Kunde Kaufmann ist.

(3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.`
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      sections: [
        {
          title: "§ 1 Scope",
          content: `(1) These General Terms and Conditions (hereinafter "GTC") apply to all contracts concluded between [Your Company Name] (hereinafter "Provider") and the customer (hereinafter "Customer") via the website www.[your-domain].com.

(2) Deviating conditions of the customer are not recognized unless the provider expressly agrees in writing to their validity.`
        },
        {
          title: "§ 2 Conclusion of Contract",
          content: `(1) The presentation of products in the online shop does not constitute a legally binding offer, but an invitation to order.

(2) By clicking the "Order with Payment Obligation" button, the customer submits a binding offer.

(3) The contract is concluded when the provider accepts the customer's offer by an order confirmation by email.`
        },
        {
          title: "§ 3 Prices and Payment Terms",
          content: `(1) The prices shown are final prices and include statutory VAT.

(2) The purchase price is due immediately upon conclusion of the contract.

(3) Payment options are displayed to the customer during the ordering process.`
        },
        {
          title: "§ 4 Delivery / Service Provision",
          content: `(1) Digital content is delivered by download or email.

(2) Services are started within 48 hours of receipt of payment.

(3) The provider reserves the right not to provide the service if this is not possible for an important reason.`
        },
        {
          title: "§ 5 Right of Withdrawal",
          content: `Consumers have a 14-day right of withdrawal. Details of the right of withdrawal can be found in the withdrawal policy.

By agreeing to the start of contract execution before the expiry of the withdrawal period, the consumer expressly agrees and confirms their knowledge that they lose their right of withdrawal upon complete contract fulfillment.`
        },
        {
          title: "§ 6 Warranty and Guarantee",
          content: `(1) Statutory warranty rights apply.

(2) The provider offers a 30-day money-back guarantee under the following conditions:
- The customer has implemented all optimizations according to the instructions
- The customer has given the provider the opportunity to make improvements
- No measurable increase in inquiries can be determined

(3) The guarantee does not apply in case of improper use or independent changes by the customer.`
        },
        {
          title: "§ 7 Liability",
          content: `(1) The provider is liable without limitation for intent and gross negligence.

(2) In case of slight negligence, the provider is only liable for breach of essential contractual obligations.

(3) The provider does not guarantee specific ranking positions in search engines.`
        },
        {
          title: "§ 8 Final Provisions",
          content: `(1) The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods.

(2) The place of jurisdiction is the provider's place of business, provided the customer is a merchant.

(3) Should individual provisions be invalid, the validity of the remaining provisions remains unaffected.`
        }
      ]
    },
    ar: {
      title: "الشروط والأحكام العامة",
      sections: [
        {
          title: "§ 1 نطاق التطبيق",
          content: `(1) تنطبق هذه الشروط والأحكام العامة (المشار إليها فيما بعد بـ "الشروط") على جميع العقود المبرمة بين [اسم شركتك] (المشار إليه فيما بعد بـ "المزود") والعميل (المشار إليه فيما بعد بـ "العميل") عبر الموقع الإلكتروني.

(2) لا يُعترف بالشروط المخالفة للعميل ما لم يوافق المزود صراحةً وكتابياً على صلاحيتها.`
        },
        {
          title: "§ 2 إبرام العقد",
          content: `(1) عرض المنتجات في المتجر الإلكتروني لا يشكل عرضاً ملزماً قانونياً، بل دعوة للطلب.

(2) بالنقر على زر "طلب مع التزام بالدفع"، يقدم العميل عرضاً ملزماً.

(3) يتم إبرام العقد عندما يقبل المزود عرض العميل من خلال تأكيد الطلب عبر البريد الإلكتروني.`
        },
        {
          title: "§ 3 الأسعار وشروط الدفع",
          content: `(1) الأسعار المعروضة هي أسعار نهائية وتشمل ضريبة القيمة المضافة القانونية.

(2) يستحق سعر الشراء فوراً عند إبرام العقد.

(3) تُعرض خيارات الدفع للعميل أثناء عملية الطلب.`
        },
        {
          title: "§ 4 التسليم / تقديم الخدمة",
          content: `(1) يتم تسليم المحتوى الرقمي عبر التنزيل أو البريد الإلكتروني.

(2) تبدأ الخدمات خلال 48 ساعة من استلام الدفع.

(3) يحتفظ المزود بالحق في عدم تقديم الخدمة إذا لم يكن ذلك ممكناً لسبب مهم.`
        },
        {
          title: "§ 5 حق الانسحاب",
          content: `يتمتع المستهلكون بحق انسحاب لمدة 14 يوماً. تفاصيل حق الانسحاب موجودة في سياسة الانسحاب.

بالموافقة على بدء تنفيذ العقد قبل انتهاء فترة الانسحاب، يوافق المستهلك صراحةً ويؤكد علمه بأنه يفقد حق الانسحاب عند الوفاء الكامل بالعقد.`
        },
        {
          title: "§ 6 الضمان والكفالة",
          content: `(1) تنطبق حقوق الضمان القانونية.

(2) يقدم المزود ضمان استرداد الأموال لمدة 30 يوماً بالشروط التالية:
- نفّذ العميل جميع التحسينات وفقاً للتعليمات
- منح العميل المزود فرصة لإجراء التحسينات
- لم تُلاحظ زيادة قابلة للقياس في الاستفسارات

(3) لا ينطبق الضمان في حالة الاستخدام غير السليم أو التغييرات المستقلة من قبل العميل.`
        },
        {
          title: "§ 7 المسؤولية",
          content: `(1) يتحمل المزود المسؤولية بدون قيود عن العمد والإهمال الجسيم.

(2) في حالة الإهمال الطفيف، يتحمل المزود المسؤولية فقط عن انتهاك الالتزامات التعاقدية الجوهرية.

(3) لا يضمن المزود مراتب ترتيب محددة في محركات البحث.`
        },
        {
          title: "§ 8 أحكام ختامية",
          content: `(1) ينطبق قانون جمهورية ألمانيا الاتحادية باستثناء اتفاقية الأمم المتحدة بشأن عقود البيع الدولي للبضائع.

(2) مكان الاختصاص القضائي هو مقر عمل المزود، بشرط أن يكون العميل تاجراً.

(3) في حالة بطلان أي من الأحكام الفردية، تظل صلاحية الأحكام المتبقية غير متأثرة.`
        }
      ]
    }
  };

  const t = content[language] || content.de;

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        noindex={true}
        lang={language}
        canonicalUrl={`https://localdominate.org/agb`}
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
      </div>
    </main>
    </>
  );
};

export default AGB;
