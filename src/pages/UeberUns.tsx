import { Link } from "react-router-dom";
import { Award, Users, Target, TrendingUp, CheckCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const translations = {
  de: {
    title: "Über Local Dominator",
    metaDesc: "Erfahren Sie, wer hinter Local Dominator steht. Unser Team, unsere Mission und warum über 500 Unternehmen uns vertrauen.",
    orgDesc: "Local Dominator hilft lokalen Unternehmen im DACH-Raum, in Google Maps und der lokalen Suche sichtbar zu werden.",
    subtitle: "Wir machen lokale Unternehmen in der Google-Suche und auf Google Maps sichtbar – mit datengetriebenen Strategien, die nachweislich funktionieren.",
    mission: "Unsere Mission",
    missionText: "Jedes lokale Unternehmen verdient es, von den richtigen Kunden gefunden zu werden. Wir kombinieren SEO-Expertise mit lokaler Marktkenntnis, um genau das zu ermöglichen – transparent, messbar und nachhaltig.",
    clients: "Kunden",
    cities: "Städte",
    rankingImprovement: "Ranking-Verbesserung",
    whatSetsUsApart: "Was uns auszeichnet",
    highlights: [
      "Spezialisierung auf lokale Suchmaschinenoptimierung – kein Generalisten-SEO",
      "Eigene Datenbank mit Ranking-Faktoren aus über 500 Kundenprojekten",
      "Transparente Methodik: Jede Empfehlung ist quellenbasiert und praxisvalidiert",
      "DACH-Fokus: Wir verstehen die lokalen Suchgewohnheiten in Deutschland, Österreich und der Schweiz",
      "Kontinuierliche Weiterbildung: Unser Team verfolgt jedes Google-Update in Echtzeit"
    ],
    ourStory: "Unsere Geschichte",
    milestones: [
      { year: "2021", event: "Gründung mit Fokus auf Google Maps Optimierung im DACH-Raum" },
      { year: "2022", event: "100. Kundenprojekt erfolgreich abgeschlossen" },
      { year: "2023", event: "Start des Local SEO Knowledge Hubs mit 50+ Fachartikeln" },
      { year: "2024", event: "500+ betreute Unternehmen, Expansion in die Schweiz und nach Österreich" },
      { year: "2025", event: "Launch des AI-optimierten Content Frameworks für Local SEO" },
    ],
    standards: "Unsere Standards",
    editorialGuidelines: "→ Redaktionsrichtlinien",
    researchMethodology: "→ Forschungsmethodik",
    ourBlog: "→ Unser Blog",
  },
  en: {
    title: "About Local Dominator",
    metaDesc: "Learn who's behind Local Dominator. Our team, our mission, and why 500+ businesses trust us.",
    orgDesc: "Local Dominator helps local businesses in the DACH region become visible in Google Maps and local search.",
    subtitle: "We make local businesses visible in Google Search and Google Maps – with data-driven strategies that are proven to work.",
    mission: "Our Mission",
    missionText: "Every local business deserves to be found by the right customers. We combine SEO expertise with local market knowledge to make that happen – transparently, measurably, and sustainably.",
    clients: "Clients",
    cities: "Cities",
    rankingImprovement: "Ranking Improvement",
    whatSetsUsApart: "What Sets Us Apart",
    highlights: [
      "Specialization in local search engine optimization – no generalist SEO",
      "Proprietary database of ranking factors from 500+ client projects",
      "Transparent methodology: Every recommendation is source-based and practice-validated",
      "DACH focus: We understand local search behavior in Germany, Austria, and Switzerland",
      "Continuous learning: Our team monitors every Google update in real-time"
    ],
    ourStory: "Our Story",
    milestones: [
      { year: "2021", event: "Founded with focus on Google Maps optimization in the DACH region" },
      { year: "2022", event: "100th client project successfully completed" },
      { year: "2023", event: "Launch of the Local SEO Knowledge Hub with 50+ expert articles" },
      { year: "2024", event: "500+ managed businesses, expansion into Switzerland and Austria" },
      { year: "2025", event: "Launch of AI-optimized content framework for Local SEO" },
    ],
    standards: "Our Standards",
    editorialGuidelines: "→ Editorial Guidelines",
    researchMethodology: "→ Research Methodology",
    ourBlog: "→ Our Blog",
  },
  ar: {
    title: "عن Local Dominator",
    metaDesc: "تعرف على من يقف خلف Local Dominator. فريقنا ومهمتنا ولماذا يثق بنا أكثر من 500 عمل تجاري.",
    orgDesc: "يساعد Local Dominator الأعمال المحلية في منطقة DACH على الظهور في خرائط Google والبحث المحلي.",
    subtitle: "نجعل الأعمال المحلية مرئية في بحث Google وخرائط Google – باستراتيجيات مبنية على البيانات ومثبتة الفعالية.",
    mission: "مهمتنا",
    missionText: "كل عمل محلي يستحق أن يجده العملاء المناسبون. نجمع بين خبرة SEO والمعرفة بالسوق المحلي لتحقيق ذلك – بشفافية وقابلية القياس والاستدامة.",
    clients: "عملاء",
    cities: "مدن",
    rankingImprovement: "تحسين الترتيب",
    whatSetsUsApart: "ما يميزنا",
    highlights: [
      "تخصص في تحسين محركات البحث المحلية – لسنا وكالة SEO عامة",
      "قاعدة بيانات خاصة بعوامل الترتيب من أكثر من 500 مشروع عميل",
      "منهجية شفافة: كل توصية مبنية على مصادر ومُثبتة عملياً",
      "تركيز على منطقة DACH: نفهم سلوك البحث المحلي في ألمانيا والنمسا وسويسرا",
      "تعلم مستمر: فريقنا يتابع كل تحديث من Google في الوقت الفعلي"
    ],
    ourStory: "قصتنا",
    milestones: [
      { year: "2021", event: "التأسيس مع التركيز على تحسين خرائط Google في منطقة DACH" },
      { year: "2022", event: "إتمام المشروع رقم 100 بنجاح" },
      { year: "2023", event: "إطلاق مركز معرفة Local SEO مع أكثر من 50 مقالاً متخصصاً" },
      { year: "2024", event: "أكثر من 500 عمل تجاري مُدار، التوسع إلى سويسرا والنمسا" },
      { year: "2025", event: "إطلاق إطار محتوى محسّن بالذكاء الاصطناعي لـ Local SEO" },
    ],
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
      "mainEntity": {
        "@type": "Organization",
        "name": "Local Dominator",
        "url": "https://localdominate.org",
        "foundingDate": "2021",
        "description": t.orgDesc,
        "knowsAbout": ["Local SEO", "Google Business Profile", "Google Maps Optimization", "Local Search Marketing"],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 48.1351, "longitude": 11.5820 },
          "geoRadius": "500 km"
        },
        "sameAs": [
          "https://twitter.com/localdominator",
          "https://linkedin.com/company/localdominator"
        ]
      }
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
              { icon: Users, value: "500+", label: t.clients },
              { icon: MapPin, value: "50+", label: t.cities },
              { icon: Star, value: "4.9/5", label: "Rating" },
              { icon: TrendingUp, value: "92%", label: t.rankingImprovement }
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
