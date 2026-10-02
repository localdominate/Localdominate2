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
    },
    ar: {
      title: "سياسة الخصوصية",
      description: "سياسة الخصوصية لـ Local Dominator - معلومات حول كيفية تعاملنا مع بياناتك الشخصية."
    }
  };

  const seo = seoContent[language] || seoContent.de;

  const content = {
    de: {
      title: "Datenschutzerklärung",
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

Local Dominator, betrieben von EXPLORE SAUDI ARABIA LTD
Vertreten durch: Markus Wimböck
E-Mail: info@localdominate.org

Weitere Angaben stehen im Impressum dieser Website.`
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
        },
        {
          title: "7. Formular „Kostenloser Check“ und Formular-Dienst Web3Forms",
          content: `Wenn Sie unser Formular „Kostenlosen Check anfordern“ („Get a free check“) nutzen, verarbeiten wir die Angaben, die Sie eingeben: Name, E-Mail-Adresse, den Link zu Ihrem Profil oder Ihrer Website, die Art Ihres Betriebs und, falls Sie es ausfüllen, Ihr Ziel. Wir verwenden diese Angaben, um Ihre Anfrage zu bearbeiten und zu beantworten.

Rechtsgrundlage

Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie vor dem Absenden durch das Setzen des Häkchens erteilen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, zum Beispiel per E-Mail an info@localdominate.org.

Formular-Dienst

Für den Versand setzen wir den Formular-Dienst Web3Forms ein (Anbieter laut dessen Datenschutzhinweisen: Web3Forms, Indien). Beim Absenden werden Ihre Eingaben an Web3Forms übertragen und von dort per E-Mail an uns weitergeleitet. Nach den Angaben des Anbieters werden Formulareingaben höchstens drei Jahre gespeichert und danach automatisch gelöscht. Der Anbieter nutzt nach eigenen Angaben Infrastruktur von Amazon Web Services, Cloudflare und Hetzner.

Da der Anbieter seinen Sitz in Indien hat, kann Ihre Anfrage in ein Land außerhalb der EU übermittelt werden. Der Anbieter stellt einen Auftragsverarbeitungsvertrag bereit, der Teil seiner Nutzungsbedingungen ist, und stützt solche Übermittlungen nach eigenen Angaben auf Standardvertragsklauseln. Weitere Informationen: https://web3forms.com/privacy

Speicherdauer bei uns

Wir speichern Ihre Anfrage, solange wir sie bearbeiten, und löschen sie spätestens sechs Monate nach dem letzten Kontakt, sofern kein Auftrag zustande kommt und keine gesetzliche Aufbewahrungspflicht besteht.

Ohne Formular-Dienst

Ohne Ihre Angaben in den Pflichtfeldern können wir Ihre Anfrage nicht bearbeiten. Wenn Sie keinen Formular-Dienst nutzen möchten, können Sie uns stattdessen direkt an info@localdominate.org schreiben.`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
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

Local Dominator, operated by EXPLORE SAUDI ARABIA LTD
Represented by: Markus Wimböck
Email: info@localdominate.org

Further details are in the legal notice of this website.`
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
        },
        {
          title: "7. Form \"Get a free check\" and the form service Web3Forms",
          content: `When you use our form "Get a free check", we process the details you enter: name, email address, the link to your profile or website, the type of your business and, if you fill it in, your goal. We use these details to handle and answer your request.

Legal basis

The legal basis is your consent under Art. 6(1)(a) GDPR, which you give by ticking the box before sending. You can withdraw your consent at any time with effect for the future, for example by email to info@localdominate.org.

Form service

To send the form we use the form service Web3Forms (provider according to its privacy notice: Web3Forms, India). When you send the form, your entries are transmitted to Web3Forms and forwarded to us by email. According to the provider, form submissions are stored for a maximum of three years and then deleted automatically. According to its own information the provider uses infrastructure from Amazon Web Services, Cloudflare and Hetzner.

As the provider is based in India, your request may be transferred to a country outside the EU. The provider offers a data processing agreement, which is part of its terms, and states that such transfers are based on Standard Contractual Clauses. More information: https://web3forms.com/privacy

How long we keep it

We keep your request for as long as we handle it and delete it no later than six months after the last contact, unless an order follows or a statutory retention period applies.

Without the form service

Without the details in the required fields we cannot handle your request. If you do not want to use a form service, you can write to us directly at info@localdominate.org instead.`
        }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      sections: [
        {
          title: "1. الخصوصية في لمحة",
          content: `معلومات عامة

توفر الملاحظات التالية نظرة عامة بسيطة على ما يحدث لبياناتك الشخصية عند زيارة هذا الموقع. البيانات الشخصية هي أي بيانات يمكن استخدامها للتعرف عليك شخصياً.

جمع البيانات على هذا الموقع

من المسؤول عن جمع البيانات على هذا الموقع؟
تتم معالجة البيانات على هذا الموقع بواسطة مشغل الموقع. يمكنك العثور على بيانات الاتصال الخاصة بهم في البيانات القانونية لهذا الموقع.`
        },
        {
          title: "2. الاستضافة",
          content: `نستضيف محتوى موقعنا لدى المزود التالي:

استضافة خارجية

يتم استضافة هذا الموقع خارجياً. يتم تخزين البيانات الشخصية المجمعة على هذا الموقع على خوادم المضيف.`
        },
        {
          title: "3. معلومات عامة وإلزامية",
          content: `حماية البيانات

يأخذ مشغلو هذا الموقع حماية بياناتك الشخصية على محمل الجد. نتعامل مع بياناتك الشخصية بسرية ووفقاً للوائح حماية البيانات القانونية وسياسة الخصوصية هذه.

معلومات عن الجهة المسؤولة

الجهة المسؤولة عن معالجة البيانات على هذا الموقع هي:

Local Dominator، تديره شركة EXPLORE SAUDI ARABIA LTD
يمثلها: Markus Wimböck
البريد الإلكتروني: info@localdominate.org

توجد بيانات إضافية في الإشعار القانوني لهذا الموقع.`
        },
        {
          title: "4. جمع البيانات على هذا الموقع",
          content: `ملفات تعريف الارتباط (Cookies)

تستخدم مواقعنا ما يُسمى "ملفات تعريف الارتباط". وهي حزم بيانات صغيرة لا تسبب أي ضرر لجهازك. يتم تخزينها إما مؤقتاً لمدة الجلسة أو بشكل دائم على جهازك.

ملفات سجل الخادم

يقوم مزود الصفحات تلقائياً بجمع وتخزين المعلومات في ما يُسمى ملفات سجل الخادم، التي يرسلها متصفحك إلينا تلقائياً.`
        },
        {
          title: "5. أدوات التحليل والإعلان",
          content: `Google Analytics

يستخدم هذا الموقع وظائف خدمة تحليل الويب Google Analytics. المزود هو Google Ireland Limited ("Google")، Gordon House, Barrow Street, Dublin 4, أيرلندا.

يستخدم Google Analytics ما يُسمى "ملفات تعريف الارتباط". وهي ملفات نصية يتم تخزينها على جهاز الكمبيوتر الخاص بك وتمكّن من تحليل استخدامك للموقع.`
        },
        {
          title: "6. حقوقك",
          content: `لديك الحق في أي وقت في:

• الحصول على معلومات حول بياناتك المخزنة لدينا
• طلب تصحيح البيانات غير الصحيحة
• طلب حذف بياناتك
• طلب تقييد المعالجة
• طلب نقل البيانات
• الاعتراض على المعالجة
• إلغاء الموافقة الممنوحة`
        },
        {
          title: "7. نموذج «الفحص المجاني» وخدمة النماذج Web3Forms",
          content: `عند استخدامك نموذج «Get a free check» نعالج البيانات التي تدخلها: الاسم، عنوان البريد الإلكتروني، رابط ملفك أو موقعك، نوع نشاطك، وهدفك إن كتبته. نستخدم هذه البيانات لمعالجة طلبك والرد عليه.

الأساس القانوني

الأساس القانوني هو موافقتك وفق المادة 6 (1) (أ) من اللائحة العامة لحماية البيانات، وتمنحها بوضع علامة في المربع قبل الإرسال. يمكنك سحب موافقتك في أي وقت بأثر مستقبلي، مثلاً عبر البريد الإلكتروني info@localdominate.org.

خدمة النماذج

نستخدم للإرسال خدمة النماذج Web3Forms (المزوّد وفق إشعار الخصوصية الخاص به: Web3Forms، الهند). عند الإرسال تُنقل بياناتك إلى Web3Forms ثم تُحوَّل إلينا بالبريد الإلكتروني. وفق المزوّد تُحفظ بيانات النماذج مدة أقصاها ثلاث سنوات ثم تُحذف تلقائياً. ويستخدم المزوّد وفق بياناته بنية تحتية من Amazon Web Services و Cloudflare و Hetzner.

لأن مقر المزوّد في الهند، قد يُنقل طلبك إلى بلد خارج الاتحاد الأوروبي. يوفّر المزوّد اتفاقية معالجة بيانات هي جزء من شروطه، ويذكر أن هذا النقل يستند إلى البنود التعاقدية القياسية. معلومات إضافية: https://web3forms.com/privacy

مدة الحفظ لدينا

نحتفظ بطلبك ما دمنا نعالجه ونحذفه في موعد أقصاه ستة أشهر بعد آخر تواصل، ما لم ينتج عنه تكليف أو توجد مدة حفظ قانونية.

بدون خدمة النماذج

بدون البيانات في الحقول الإلزامية لا يمكننا معالجة طلبك. إن لم ترغب في استخدام خدمة نماذج يمكنك مراسلتنا مباشرة على info@localdominate.org.`
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
        canonicalUrl={`https://localdominate.org/datenschutz`}
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

export default Datenschutz;
