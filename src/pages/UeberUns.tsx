import { Link } from "react-router-dom";
import { Award, Users, Target, CheckCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

/**
 * Older page, kept at its URL. Everything it says comes from the published pages /about,
 * /approach and /services (src/data/v4About.ts, v4Offers.ts); the earlier client counts, rating and
 * ranking figures were not documented and are gone (Truth first, owner brief of 2026-10-03).
 */
const translations = {
  de: {
    title: "Über Local Dominator",
    metaDesc: "Wer hinter LocalDominate steht: Markus Wimböck, über sieben Jahre in Hotellerie und digitalem Marketing, und eine Person, die Ihr Projekt verantwortet.",
    orgDesc: "LocalDominate ist ein Wachstumsstudio für Hotels, Ferienvermieter, Handwerk, Premium-Dienstleister und Creators.",
    subtitle: "LocalDominate ist ein Wachstumsstudio von Markus Wimböck. Es plant, baut und vermarktet Marke, Website und Google-Auftritt als ein Projekt.",
    mission: "Unser Ansatz",
    missionText: "Strategie, Marke, Website und Marketing als ein Projekt in sieben Schritten. Umfang und Festpreis stehen schriftlich fest, bevor die Arbeit beginnt.",
    stats: [
      { value: "7+", label: "Jahre in Hotellerie und digitalem Marketing" },
      { value: "1", label: "Person verantwortet jedes Projekt" },
      { value: "7", label: "Schritte von der Diagnose bis zur Skalierung" },
      { value: "4", label: "Angebote zum Festpreis" },
    ],
    whatSetsUsApart: "Wie wir arbeiten",
    highlights: [
      "Eine Person verantwortet Ihr Projekt vom ersten Check bis zur Übergabe",
      "Truth first: keine erfundenen Zahlen, ein Ergebnis wird nur veröffentlicht, wenn es belegt ist",
      "KI wird für Recherche und Routine genutzt, ein Mensch entscheidet und redigiert, was live geht",
      "Umfang und Festpreis schriftlich vor Arbeitsbeginn, keine Ranking-Versprechen"
    ],
    ourStory: "Der Werdegang des Gründers",
    milestones: [
      { year: "2004", event: "Ausbildung im Hotelfach an den Tourismusschulen Klessheim, Österreich" },
      { year: "2019", event: "Stellvertretender Resortleiter im VAYA Resort, Galtür, Österreich" },
      { year: "2023", event: "Assistant Manager eCommerce & Digital Strategy im Grand Hotel des Bains Kempinski, St. Moritz" },
      { year: "2025", event: "Gründer eigener Travel-Tech- und Web-Produkte, darunter LocalDominate" },
    ],
    aboutLink: "→ Mehr über Markus Wimböck",
    standards: "Unsere Standards",
    editorialGuidelines: "→ Redaktionsrichtlinien",
    researchMethodology: "→ Forschungsmethodik",
    ourBlog: "→ Unser Blog",
  },
  en: {
    title: "About Local Dominator",
    metaDesc: "Learn who is behind LocalDominate: Markus Wimböck, over seven years in hospitality and digital marketing, and one person responsible for your project.",
    orgDesc: "LocalDominate is a growth studio for hotels, holiday rentals, trades, premium local services and creators.",
    subtitle: "LocalDominate is a growth studio run by Markus Wimböck. It plans, builds and markets brand, website and Google presence as one project.",
    mission: "Our approach",
    missionText: "Strategy, brand, website and marketing as one project in seven steps. Scope and a fixed price are agreed in writing before any work starts.",
    stats: [
      { value: "7+", label: "Years in hospitality and digital marketing" },
      { value: "1", label: "Person responsible for each project" },
      { value: "7", label: "Steps from diagnosis to scale" },
      { value: "4", label: "Fixed-price offers" },
    ],
    whatSetsUsApart: "How we work",
    highlights: [
      "One person is responsible for your project from the first check to the hand-over",
      "Truth first: no invented numbers, a result is published only when it is documented",
      "AI is used for research and routine work, a person decides and edits what goes live",
      "Scope and a fixed price in writing before any work starts, no ranking promises"
    ],
    ourStory: "The founder's career",
    milestones: [
      { year: "2004", event: "Training in hotel management at Tourismusschulen Klessheim, Austria" },
      { year: "2019", event: "Deputy Resort Manager at VAYA Resort, Galtür, Austria" },
      { year: "2023", event: "Assistant Manager eCommerce & Digital Strategy at Grand Hotel des Bains Kempinski, St. Moritz" },
      { year: "2025", event: "Founder of own travel-tech and web products, including LocalDominate" },
    ],
    aboutLink: "→ More about Markus Wimböck",
    standards: "Our Standards",
    editorialGuidelines: "→ Editorial Guidelines",
    researchMethodology: "→ Research Methodology",
    ourBlog: "→ Our Blog",
  },
  ar: {
    title: "عن Local Dominator",
    metaDesc: "تعرّف على من يقف خلف LocalDominate: ماركوس فيمبوك، أكثر من سبع سنوات في الضيافة والتسويق الرقمي، وشخص واحد مسؤول عن مشروعك.",
    orgDesc: "LocalDominate استوديو نمو للفنادق وإيجارات العطلات والحِرف والخدمات المحلية المتميزة وصنّاع المحتوى.",
    subtitle: "LocalDominate استوديو نمو يديره ماركوس فيمبوك. يخطط ويبني ويسوّق العلامة التجارية والموقع والحضور على Google كمشروع واحد.",
    mission: "نهجنا",
    missionText: "الاستراتيجية والعلامة والموقع والتسويق كمشروع واحد في سبع خطوات. يُتفق على النطاق والسعر الثابت كتابةً قبل بدء أي عمل.",
    stats: [
      { value: "7+", label: "سنوات في الضيافة والتسويق الرقمي" },
      { value: "1", label: "شخص مسؤول عن كل مشروع" },
      { value: "7", label: "خطوات من التشخيص إلى التوسع" },
      { value: "4", label: "عروض بسعر ثابت" },
    ],
    whatSetsUsApart: "كيف نعمل",
    highlights: [
      "شخص واحد مسؤول عن مشروعك من الفحص الأول حتى التسليم",
      "الحقيقة أولاً: لا أرقام مختلقة، ولا تُنشر نتيجة إلا إذا كانت موثقة",
      "يُستخدم الذكاء الاصطناعي للبحث والمهام الروتينية، وشخص يقرر ويحرر ما يُنشر",
      "النطاق وسعر ثابت كتابةً قبل بدء أي عمل، ولا وعود بالترتيب"
    ],
    ourStory: "مسيرة المؤسس",
    milestones: [
      { year: "2004", event: "تدريب في إدارة الفنادق في Tourismusschulen Klessheim بالنمسا" },
      { year: "2019", event: "نائب مدير المنتجع في VAYA Resort، غالتور، النمسا" },
      { year: "2023", event: "Assistant Manager eCommerce & Digital Strategy في Grand Hotel des Bains Kempinski، سانت موريتز" },
      { year: "2025", event: "مؤسس منتجات خاصة في السياحة التقنية والويب، من بينها LocalDominate" },
    ],
    aboutLink: "→ المزيد عن ماركوس فيمبوك",
    standards: "معاييرنا",
    editorialGuidelines: "→ إرشادات التحرير",
    researchMethodology: "→ منهجية البحث",
    ourBlog: "→ مدونتنا",
  },
};

const UeberUns = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": t.title,
      "url": "https://localdominate.org/ueber-uns",
      "mainEntity": { "@id": "https://localdominate.org/#organization" },
      "description": t.orgDesc,
    }
  ];

  return (
    <>
      <SEOHead
        title={t.title}
        description={t.metaDesc}
        canonicalUrl="https://localdominate.org/ueber-uns"
        lang={language}
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
          <div className="container max-w-4xl py-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Local Dominator
            </Link>
          </div>
        </header>

        <main className="container max-w-3xl py-12 px-4">
          <SiteBreadcrumbs includeSchema />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            {t.subtitle}
          </p>

          {/* Mission */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">{t.mission}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Users, ...t.stats[0] },
              { icon: Target, ...t.stats[1] },
              { icon: MapPin, ...t.stats[2] },
              { icon: Star, ...t.stats[3] }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="card-premium p-4 text-center">
                  <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* What We Do */}
          <div className="card-premium p-6 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              {t.whatSetsUsApart}
            </h2>
            <ul className="space-y-3">
              {t.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t.ourStory}</h2>
            <div className="space-y-4">
              {t.milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-right rtl:text-left">
                    <span className="font-bold text-primary">{m.year}</span>
                  </div>
                  <div className="w-px bg-border self-stretch" />
                  <p className="text-muted-foreground pb-2">{m.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-3">{t.standards}</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="text-primary hover:underline text-sm">
                {t.aboutLink}
              </Link>
              <Link to="/redaktionsrichtlinien" className="text-primary hover:underline text-sm">
                {t.editorialGuidelines}
              </Link>
              <Link to="/forschungsmethodik" className="text-primary hover:underline text-sm">
                {t.researchMethodology}
              </Link>
              <Link to="/blog" className="text-primary hover:underline text-sm">
                {t.ourBlog}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UeberUns;
