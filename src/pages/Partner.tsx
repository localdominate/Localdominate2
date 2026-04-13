import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  ArrowRight, Check, MapPin, DollarSign, Users, Briefcase, Rocket, Phone,
  Mail, MessageSquare, ChevronDown, Star, TrendingUp, Globe, Zap, Shield, Target, Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const t = {
  de: {
    badge: "Jetzt weltweit Partner gesucht",
    heroH1Pre: "Verdiene bis zu ",
    heroH1Highlight: "120 € pro Verkauf",
    heroH1Post: " und hilf lokalen Unternehmen, Google Maps zu dominieren",
    heroSub: "LocalDominate hilft Restaurants, Friseuren, Zahnärzten, Cafés und lokalen Unternehmen, ihre Sichtbarkeit auf Google Maps zu verbessern. Wir erweitern unser globales Partnernetzwerk und suchen selbstständige Vertriebspartner auf Provisionsbasis.",
    ctaPrimary: "Jetzt als Partner bewerben",
    ctaSecondary: "So funktioniert's",
    trustBullets: ["Keine Vorabkosten", "Arbeite von überall", "40 % Provision"],
    productLabel: "Das Produkt",
    productH2: "Ein simples Produkt, das jedes Unternehmen sofort versteht",
    productSub: "Lokale Unternehmen sind stark auf Google Maps Sichtbarkeit angewiesen. Über 80 % der Kunden wählen Unternehmen aus den Top-3-Suchergebnissen.",
    productItems: [
      "Google Business Profil Optimierung",
      "Kategorie- & Keyword-Verbesserungen",
      "Unternehmensbeschreibung optimieren",
      "Bildoptimierung",
      "Lokale Suchsichtbarkeit verbessern",
      "Umsetzbare Ranking-Empfehlungen",
    ],
    clientPrice: "Kundenpreis",
    oneTime: "einmalig",
    earningsLabel: "Dein Verdienst",
    earningsH2: "Hohe Provision für jeden Verkauf",
    commissionItems: [
      { label: "Servicepreis", value: "299 €", sub: "pro Kunde" },
      { label: "Deine Provision", value: "40 %", sub: "pro Verkauf" },
      { label: "Dein Verdienst", value: "120 €", sub: "pro Kunde", highlight: true },
    ],
    earningsExamples: [
      { sales: "5 Verkäufe / Woche", earnings: "600 € wöchentlich" },
      { sales: "20 Verkäufe / Monat", earnings: "2.400 € monatlich" },
    ],
    topPartners: "Top-Partner verdienen deutlich mehr.",
    fitLabel: "Perfekter Fit",
    fitH2: "Ideal für Vertriebsprofis, die flexibel verdienen wollen",
    fitSub: "Arbeite von überall auf der Welt. Keine festen Arbeitszeiten und keine Verdienstgrenze.",
    fitItems: [
      "Freiberufliche Vertriebsmitarbeiter",
      "Kaltakquise-Spezialisten",
      "Lead-Generation-Profis",
      "Marketing-Freelancer",
      "Digitale Nomaden",
      "Berater mit lokalen Geschäftskontakten",
    ],
    toolkitLabel: "Dein Toolkit",
    toolkitH2: "Wir liefern alles, was du zum Verkaufen brauchst",
    toolkitItems: [
      { title: "Kaltakquise-Skripte", desc: "Bewährte Skripte, die Interessenten in Kunden verwandeln" },
      { title: "E-Mail- & WhatsApp-Vorlagen", desc: "Sofort einsetzbare Vorlagen für jeden Kanal" },
      { title: "Verkaufspräsentation", desc: "Ein kurzes, überzeugendes Deck für Kundengespräche" },
      { title: "Onboarding-Training", desc: "Alles, was du brauchst, um schnell loszulegen" },
      { title: "Partner-Dashboard", desc: "Verfolge deine Verkäufe und Provisionen in Echtzeit" },
      { title: "Schneller Partner-Support", desc: "Dedizierter Support, der dir zum Erfolg verhilft" },
    ],
    processLabel: "Ablauf",
    processH2: "Einfacher 3-Schritte-Prozess",
    processSteps: [
      { step: "01", title: "Unternehmen finden", desc: "Finde lokale Unternehmen, die von besserer Google Maps Sichtbarkeit profitieren." },
      { step: "02", title: "Service vorstellen", desc: "Stelle den LocalDominate Service mit unseren Skripten vor und erkläre die Vorteile." },
      { step: "03", title: "Provision verdienen", desc: "Sobald der Kunde sich anmeldet, übernimmt unser Team die Optimierung. Du verdienst deine Provision." },
    ],
    demandLabel: "Marktnachfrage",
    demandH2: "Warum Unternehmen dieses Angebot lieben",
    demandSub: "Lokale Unternehmen kämpfen ständig um Sichtbarkeit in Google Maps. Unser Service bietet klaren Mehrwert zu einem zugänglichen Preis.",
    demandItems: [
      "Verbesserte lokale Suchsichtbarkeit",
      "Mehr Kundenentdeckung",
      "Stärkere Google-Präsenz",
      "Wettbewerbsvorteil gegenüber Nachbarbetrieben",
    ],
    demandPrice: "Da der Service nur einmalig 299 € kostet, entscheiden sich viele Unternehmen schnell.",
    testimonialLabel: "Partner-Erfolg",
    testimonialQuote: "\u201ELocalDominate ist einer der einfachsten Services, die ich je verkauft habe. Lokale Unternehmen verstehen den Wert besserer Google Maps Sichtbarkeit sofort.\u201C",
    testimonialAuthor: "— Vertriebspartner",
    ctaBannerH2: "Bereit, loszulegen?",
    ctaBannerSub: "Werde Teil unseres wachsenden Partnernetzwerks weltweit.",
    ctaBannerBtn: "Jetzt bewerben",
    formLabel: "Jetzt bewerben",
    formH2: "Werde Teil des LocalDominate Partner-Netzwerks",
    formSub: "Wir nehmen derzeit motivierte Vertriebspartner weltweit auf. Fülle das Formular aus und unser Team meldet sich bei dir.",
    formName: "Vollständiger Name *",
    formNamePlaceholder: "Max Mustermann",
    formEmail: "E-Mail *",
    formEmailPlaceholder: "max@beispiel.de",
    formCountry: "Land",
    formCountryPlaceholder: "Deutschland",
    formExperience: "Vertriebserfahrung",
    formExperiencePlaceholder: "z.B. 3 Jahre B2B-Vertrieb",
    formMethod: "Bevorzugte Vertriebsmethode",
    formMethods: ["Anrufe", "Social Media", "Beides"],
    formMessage: "Nachricht (optional)",
    formMessagePlaceholder: "Erzähle uns von deiner Erfahrung und warum du ein guter Partner wärst...",
    formSubmit: "Jetzt bewerben",
    formSubmitting: "Wird gesendet...",
    formConsent: "Mit dem Absenden stimmst du zu, bezüglich des LocalDominate Partnerprogramms kontaktiert zu werden.",
    successH3: "Bewerbung eingegangen!",
    successText: "Vielen Dank für dein Interesse. Unser Team prüft deine Bewerbung und meldet sich innerhalb von 48 Stunden.",
    toastSuccess: "Bewerbung gesendet! Wir melden uns bei dir.",
    toastError: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    footerText: "LocalDominate baut ein globales Partnernetzwerk auf, das lokalen Unternehmen hilft, ihre Online-Sichtbarkeit zu verbessern. Partner arbeiten selbstständig und verdienen Provision für erfolgreiche Kundenvermittlungen.",
    footerCopy: "Alle Rechte vorbehalten.",
    priceValue: "299 €",
  },
  en: {
    badge: "Now Recruiting Partners Worldwide",
    heroH1Pre: "Earn up to ",
    heroH1Highlight: "€120 per Sale",
    heroH1Post: " Helping Local Businesses Dominate Google Maps",
    heroSub: "LocalDominate helps restaurants, salons, dentists, cafés, and local businesses improve their visibility on Google Maps. We are expanding our global partner network and are looking for independent sales partners working on commission.",
    ctaPrimary: "Apply as a Sales Partner",
    ctaSecondary: "See How It Works",
    trustBullets: ["No upfront costs", "Work from anywhere", "40% commission"],
    productLabel: "The Product",
    productH2: "A Simple Product Businesses Understand Instantly",
    productSub: "Local businesses depend heavily on Google Maps visibility. More than 80% of customers choose businesses from the top 3 search results.",
    productItems: [
      "Google Business Profile optimization",
      "Category & keyword improvements",
      "Business description optimization",
      "Image optimization",
      "Local search visibility improvements",
      "Actionable ranking recommendations",
    ],
    clientPrice: "Client price",
    oneTime: "one-time",
    earningsLabel: "Your Earnings",
    earningsH2: "High Commission for Every Sale",
    commissionItems: [
      { label: "Service Price", value: "€299", sub: "per client" },
      { label: "Your Commission", value: "40%", sub: "per sale" },
      { label: "Your Earnings", value: "€120", sub: "per client", highlight: true },
    ],
    earningsExamples: [
      { sales: "5 sales / week", earnings: "€600 weekly" },
      { sales: "20 sales / month", earnings: "€2,400 monthly" },
    ],
    topPartners: "Top partners earn significantly more.",
    fitLabel: "Perfect Fit",
    fitH2: "Ideal for Sales Professionals Who Want Flexible Income",
    fitSub: "Work from anywhere in the world. No fixed hours and no limits on earnings.",
    fitItems: [
      "Freelance sales representatives",
      "Cold calling specialists",
      "Lead generation professionals",
      "Marketing freelancers",
      "Digital nomads",
      "Consultants with local business contacts",
    ],
    toolkitLabel: "Your Toolkit",
    toolkitH2: "We Provide Everything You Need to Sell",
    toolkitItems: [
      { title: "Cold outreach scripts", desc: "Proven scripts that convert prospects into clients" },
      { title: "Email & WhatsApp templates", desc: "Ready-to-use templates for every channel" },
      { title: "Sales presentation", desc: "A short, compelling deck for client meetings" },
      { title: "Onboarding training", desc: "Everything you need to start selling fast" },
      { title: "Partner dashboard", desc: "Track your sales and commissions in real-time" },
      { title: "Fast partner support", desc: "Dedicated support to help you succeed" },
    ],
    processLabel: "Process",
    processH2: "Simple 3-Step Process",
    processSteps: [
      { step: "01", title: "Find Businesses", desc: "Find local businesses that could benefit from better Google Maps visibility." },
      { step: "02", title: "Introduce the Service", desc: "Introduce the LocalDominate service using our scripts and explain the benefits." },
      { step: "03", title: "Earn Commission", desc: "Once the client signs up, our team handles the optimization work. You earn your commission." },
    ],
    demandLabel: "Market Demand",
    demandH2: "Why Businesses Love This Offer",
    demandSub: "Local businesses constantly struggle to appear in Google Maps results. Our service offers clear value at an accessible price point.",
    demandItems: [
      "Improved local search visibility",
      "Increased customer discovery",
      "Stronger Google presence",
      "Competitive advantage against nearby businesses",
    ],
    demandPrice: "Because the service costs only €299 once, many businesses decide quickly.",
    testimonialLabel: "Partner Success",
    testimonialQuote: "\u201CLocalDominate is one of the easiest services I\u2019ve ever sold. Local businesses immediately understand the value of better Google Maps visibility.\u201D",
    testimonialAuthor: "— Sales Partner",
    ctaBannerH2: "Ready to Start Earning?",
    ctaBannerSub: "Join our growing network of sales partners worldwide.",
    ctaBannerBtn: "Apply Now",
    formLabel: "Apply Now",
    formH2: "Join the LocalDominate Partner Network",
    formSub: "We are currently onboarding motivated sales partners worldwide. Fill out the form and our team will contact you shortly.",
    formName: "Full Name *",
    formNamePlaceholder: "John Smith",
    formEmail: "Email *",
    formEmailPlaceholder: "john@example.com",
    formCountry: "Country",
    formCountryPlaceholder: "Germany",
    formExperience: "Sales Experience",
    formExperiencePlaceholder: "e.g. 3 years B2B sales",
    formMethod: "Preferred Sales Method",
    formMethods: ["Calls", "Social", "Both"],
    formMessage: "Message (optional)",
    formMessagePlaceholder: "Tell us about your experience and why you'd be a great partner...",
    formSubmit: "Apply Now",
    formSubmitting: "Submitting...",
    formConsent: "By submitting, you agree to be contacted about the LocalDominate partner program.",
    successH3: "Application Received!",
    successText: "Thank you for your interest. Our team will review your application and get back to you within 48 hours.",
    toastSuccess: "Application submitted! We'll be in touch soon.",
    toastError: "Something went wrong. Please try again.",
    footerText: "LocalDominate is building a global partner network helping local businesses improve their online visibility. Partners operate independently and earn commission for successful client referrals.",
    footerCopy: "All rights reserved.",
    priceValue: "€299",
  },
  ar: {
    badge: "نبحث عن شركاء حول العالم",
    heroH1Pre: "اكسب حتى ",
    heroH1Highlight: "120€ لكل عملية بيع",
    heroH1Post: " بمساعدة الأعمال المحلية على السيطرة على خرائط Google",
    heroSub: "LocalDominate يساعد المطاعم والصالونات وأطباء الأسنان والمقاهي والأعمال المحلية على تحسين ظهورها على خرائط Google. نحن نوسع شبكة شركائنا العالمية ونبحث عن شركاء مبيعات مستقلين يعملون بالعمولة.",
    ctaPrimary: "تقدم كشريك مبيعات",
    ctaSecondary: "كيف يعمل النظام",
    trustBullets: ["بدون تكاليف مسبقة", "اعمل من أي مكان", "عمولة 40%"],
    productLabel: "المنتج",
    productH2: "منتج بسيط تفهمه الأعمال فوراً",
    productSub: "تعتمد الأعمال المحلية بشكل كبير على الظهور في خرائط Google. أكثر من 80% من العملاء يختارون الأعمال من أفضل 3 نتائج بحث.",
    productItems: [
      "تحسين ملف Google Business",
      "تحسين الفئات والكلمات المفتاحية",
      "تحسين وصف النشاط التجاري",
      "تحسين الصور",
      "تحسين الظهور في البحث المحلي",
      "توصيات ترتيب قابلة للتنفيذ",
    ],
    clientPrice: "سعر العميل",
    oneTime: "لمرة واحدة",
    earningsLabel: "أرباحك",
    earningsH2: "عمولة عالية لكل عملية بيع",
    commissionItems: [
      { label: "سعر الخدمة", value: "299€", sub: "لكل عميل" },
      { label: "عمولتك", value: "40%", sub: "لكل بيع" },
      { label: "أرباحك", value: "120€", sub: "لكل عميل", highlight: true },
    ],
    earningsExamples: [
      { sales: "5 مبيعات / أسبوع", earnings: "600€ أسبوعياً" },
      { sales: "20 بيع / شهر", earnings: "2,400€ شهرياً" },
    ],
    topPartners: "أفضل الشركاء يكسبون أكثر بكثير.",
    fitLabel: "مناسب تماماً",
    fitH2: "مثالي لمحترفي المبيعات الباحثين عن دخل مرن",
    fitSub: "اعمل من أي مكان في العالم. بدون ساعات عمل ثابتة وبدون حدود للأرباح.",
    fitItems: [
      "ممثلو مبيعات مستقلون",
      "متخصصو الاتصال البارد",
      "محترفو توليد العملاء المحتملين",
      "مسوقون مستقلون",
      "رحّالة رقميون",
      "مستشارون لديهم علاقات تجارية محلية",
    ],
    toolkitLabel: "أدواتك",
    toolkitH2: "نوفر لك كل ما تحتاجه للبيع",
    toolkitItems: [
      { title: "سيناريوهات التواصل البارد", desc: "سيناريوهات مثبتة تحول المهتمين إلى عملاء" },
      { title: "قوالب بريد إلكتروني وواتساب", desc: "قوالب جاهزة للاستخدام لكل قناة" },
      { title: "عرض تقديمي للمبيعات", desc: "عرض قصير ومقنع لاجتماعات العملاء" },
      { title: "تدريب الانضمام", desc: "كل ما تحتاجه للبدء بسرعة" },
      { title: "لوحة تحكم الشريك", desc: "تتبع مبيعاتك وعمولاتك في الوقت الفعلي" },
      { title: "دعم سريع للشركاء", desc: "دعم مخصص لمساعدتك على النجاح" },
    ],
    processLabel: "العملية",
    processH2: "عملية بسيطة من 3 خطوات",
    processSteps: [
      { step: "01", title: "ابحث عن أعمال", desc: "ابحث عن أعمال محلية يمكنها الاستفادة من ظهور أفضل في خرائط Google." },
      { step: "02", title: "قدّم الخدمة", desc: "قدّم خدمة LocalDominate باستخدام سيناريوهاتنا واشرح الفوائد." },
      { step: "03", title: "اكسب العمولة", desc: "بمجرد تسجيل العميل، يتولى فريقنا العمل. أنت تكسب عمولتك." },
    ],
    demandLabel: "طلب السوق",
    demandH2: "لماذا تحب الأعمال هذا العرض",
    demandSub: "تكافح الأعمال المحلية باستمرار للظهور في نتائج خرائط Google. خدمتنا تقدم قيمة واضحة بسعر مناسب.",
    demandItems: [
      "تحسين الظهور في البحث المحلي",
      "زيادة اكتشاف العملاء",
      "حضور أقوى على Google",
      "ميزة تنافسية على الأعمال المجاورة",
    ],
    demandPrice: "لأن الخدمة تكلف 299€ مرة واحدة فقط، تقرر العديد من الأعمال بسرعة.",
    testimonialLabel: "نجاح الشركاء",
    testimonialQuote: "\u201CLocalDominate هي واحدة من أسهل الخدمات التي بعتها على الإطلاق. الأعمال المحلية تفهم فوراً قيمة الظهور الأفضل في خرائط Google.\u201D",
    testimonialAuthor: "— شريك مبيعات",
    ctaBannerH2: "مستعد لبدء الكسب؟",
    ctaBannerSub: "انضم إلى شبكتنا المتنامية من شركاء المبيعات حول العالم.",
    ctaBannerBtn: "تقدم الآن",
    formLabel: "تقدم الآن",
    formH2: "انضم لشبكة شركاء LocalDominate",
    formSub: "نحن حالياً نضم شركاء مبيعات متحمسين حول العالم. املأ النموذج وسيتواصل فريقنا معك قريباً.",
    formName: "الاسم الكامل *",
    formNamePlaceholder: "أحمد محمد",
    formEmail: "البريد الإلكتروني *",
    formEmailPlaceholder: "ahmed@example.com",
    formCountry: "البلد",
    formCountryPlaceholder: "السعودية",
    formExperience: "خبرة المبيعات",
    formExperiencePlaceholder: "مثال: 3 سنوات مبيعات B2B",
    formMethod: "طريقة البيع المفضلة",
    formMethods: ["مكالمات", "وسائل التواصل", "كلاهما"],
    formMessage: "رسالة (اختياري)",
    formMessagePlaceholder: "أخبرنا عن خبرتك ولماذا ستكون شريكاً رائعاً...",
    formSubmit: "تقدم الآن",
    formSubmitting: "جاري الإرسال...",
    formConsent: "بالإرسال، توافق على أن يتم التواصل معك بخصوص برنامج شركاء LocalDominate.",
    successH3: "تم استلام الطلب!",
    successText: "شكراً لاهتمامك. سيراجع فريقنا طلبك ويتواصل معك خلال 48 ساعة.",
    toastSuccess: "تم إرسال الطلب! سنتواصل معك قريباً.",
    toastError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    footerText: "LocalDominate يبني شبكة شركاء عالمية تساعد الأعمال المحلية على تحسين ظهورها على الإنترنت. يعمل الشركاء بشكل مستقل ويكسبون عمولة على إحالات العملاء الناجحة.",
    footerCopy: "جميع الحقوق محفوظة.",
    priceValue: "299€",
  },
};

const productIcons = [MapPin, Target, Zap, Star, TrendingUp, Award];
const fitIcons = [Phone, Target, TrendingUp, Briefcase, Globe, Users];
const toolkitIcons = [MessageSquare, Mail, Briefcase, Rocket, TrendingUp, Shield];

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const c = t[language] || t.de;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const formData = {
      full_name: data.get("full_name") as string,
      email: data.get("email") as string,
      country: data.get("country") as string,
      sales_experience: data.get("sales_experience") as string,
      preferred_method: data.get("preferred_method") as string,
      message: data.get("message") as string,
    };

    const { error } = await supabase.from("partner_applications").insert(formData);

    if (error) {
      setIsSubmitting(false);
      toast.error(c.toastError);
      return;
    }

    try {
      await supabase.functions.invoke("send-partner-notification", { body: formData });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    toast.success(c.toastSuccess);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.03)] via-background to-[hsl(var(--primary)/0.06)] min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="container max-w-6xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-8">
              <Globe className="w-4 h-4" />
              {c.badge}
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              {c.heroH1Pre}<span className="text-primary">{c.heroH1Highlight}</span>{c.heroH1Post}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {c.heroSub}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="ctaLarge" className="group text-lg" onClick={scrollToForm}>
                {c.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
                {c.ctaSecondary}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
              {c.trustBullets.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU WILL SELL */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.productLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{c.productH2}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">{c.productSub}</motion.p>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.productItems.map((title, i) => {
                const Icon = productIcons[i];
                return (
                  <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium">{title}</p>
                  </div>
                );
              })}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10 inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-6 py-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">{c.clientPrice}</p>
                <p className="text-2xl font-bold">{c.priceValue} <span className="text-base font-normal text-muted-foreground">{c.oneTime}</span></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YOUR COMMISSION */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.earningsLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">{c.earningsH2}</motion.h2>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {c.commissionItems.map((item) => (
                <div key={item.label} className={`rounded-2xl p-8 text-center border ${item.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
                  <p className={`text-sm font-medium mb-2 ${item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{item.label}</p>
                  <p className="text-4xl md:text-5xl font-bold mb-1">{item.value}</p>
                  <p className={`text-sm ${item.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.sub}</p>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {c.earningsExamples.map((item) => (
                <div key={item.sales} className="flex items-center justify-between p-5 rounded-xl border border-border bg-card">
                  <span className="text-muted-foreground">{item.sales}</span>
                  <span className="font-bold text-lg text-primary">{item.earnings}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-6 text-muted-foreground">{c.topPartners}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.fitLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{c.fitH2}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">{c.fitSub}</motion.p>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.fitItems.map((label, i) => {
                const Icon = fitIcons[i];
                return (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{label}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.toolkitLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">{c.toolkitH2}</motion.h2>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.toolkitItems.map((item, i) => {
                const Icon = toolkitIcons[i];
                return (
                  <div key={item.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.processLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">{c.processH2}</motion.h2>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {c.processSteps.map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-7xl md:text-8xl font-bold text-primary/10 absolute -top-6 -left-2">{item.step}</span>
                  <div className="relative pt-12">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY BUSINESSES BUY */}
      <section className="py-20 md:py-28 bg-[hsl(var(--background-alt))]">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.demandLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{c.demandH2}</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">{c.demandSub}</motion.p>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {c.demandItems.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-8 text-muted-foreground">{c.demandPrice}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center">
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{c.testimonialLabel}</motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </motion.div>
            <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed italic mb-8">
              {c.testimonialQuote}
            </motion.blockquote>
            <motion.p variants={fadeInUp} className="text-muted-foreground">{c.testimonialAuthor}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-primary">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">{c.ctaBannerH2}</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">{c.ctaBannerSub}</p>
          <Button variant="outline" size="ctaLarge" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-none text-lg font-bold" onClick={scrollToForm}>
            {c.ctaBannerBtn}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section ref={formRef} className="py-20 md:py-28 bg-background" id="apply">
        <div className="container max-w-2xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">{c.formLabel}</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">{c.formH2}</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-12 text-lg">{c.formSub}</motion.p>

            {submitted ? (
              <motion.div variants={fadeInUp} className="text-center p-12 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.successH3}</h3>
                <p className="text-muted-foreground">{c.successText}</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">{c.formName}</Label>
                    <Input id="full_name" name="full_name" required placeholder={c.formNamePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{c.formEmail}</Label>
                    <Input id="email" name="email" type="email" required placeholder={c.formEmailPlaceholder} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">{c.formCountry}</Label>
                    <Input id="country" name="country" placeholder={c.formCountryPlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sales_experience">{c.formExperience}</Label>
                    <Input id="sales_experience" name="sales_experience" placeholder={c.formExperiencePlaceholder} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferred_method">{c.formMethod}</Label>
                  <div className="flex flex-wrap gap-3">
                    {c.formMethods.map((method, i) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="preferred_method" value={method} defaultChecked={i === 2} className="w-4 h-4 text-primary" />
                        <span className="text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{c.formMessage}</Label>
                  <Textarea id="message" name="message" rows={4} placeholder={c.formMessagePlaceholder} />
                </div>
                <Button type="submit" size="ctaLarge" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? c.formSubmitting : c.formSubmit}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
                <p className="text-xs text-muted-foreground text-center">{c.formConsent}</p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border bg-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">{c.footerText}</p>
          <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} LocalDominate. {c.footerCopy}</p>
        </div>
      </footer>
    </div>
  );
};

export default Partner;
