import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Shield, 
  Clock,
  Users,
  TrendingUp,
  MapPin,
  Search,
  FileText,
  Award,
  Phone,
  Building2,
  Briefcase,
  Gavel,
  ChevronDown,
  ChevronUp,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { openStripeCheckout } from "@/lib/stripe";

const AnwaltMarketing = () => {
  const { language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [spotsLeft, setSpotsLeft] = useState(2);

  const content = {
    de: {
      eyebrow: "Für Anwälte & Kanzleien",
      headline: "Mehr Mandanten.",
      headlineAccent: "Mehr Reputation.",
      subheadline: "82% aller potenziellen Mandanten recherchieren online, bevor sie einen Anwalt kontaktieren. Wir sorgen dafür, dass sie IHRE Kanzlei finden.",
      stats: [
        { value: "82%", label: "recherchieren Anwälte online" },
        { value: "5x", label: "mehr Anfragen mit optimiertem Profil" },
        { value: "73%", label: "prüfen Bewertungen vor Kontakt" }
      ],
      problemTitle: "Kennen Sie das?",
      problems: [
        "Ihre Kanzlei erscheint bei Google Maps nicht unter den Top 3",
        "Konkurrenten auf Anwalt.de überholen Sie trotz weniger Erfahrung",
        "Negative Bewertungen schaden Ihrer Reputation – Sie wissen nicht, wie reagieren",
        "Sie verlieren potenzielle Mandate an Kanzleien mit besserer Online-Präsenz"
      ],
      solutionTitle: "Kanzlei Pro macht den Unterschied",
      solutionSubtitle: "Speziell für Rechtsanwälte entwickelt",
      features: [
        {
          icon: MapPin,
          title: "Google Maps & Portal-Dominanz",
          description: "Top-Platzierung bei 'Anwalt + Rechtsgebiet + Stadt' Suchanfragen"
        },
        {
          icon: Shield,
          title: "Reputationsmanagement",
          description: "Berufsrechtskonforme Strategie für positive Mandantenbewertungen"
        },
        {
          icon: FileText,
          title: "BRAO-konform",
          description: "Alle Maßnahmen entsprechen der Berufsordnung für Rechtsanwälte"
        },
        {
          icon: Award,
          title: "E-A-T optimiert",
          description: "Expertise, Authority, Trust – Googles Qualitätssignale für Juristen"
        }
      ],
      packageTitle: "Das ist alles dabei",
      packageSubtitle: "Kanzlei Pro Komplettpaket",
      packageItems: [
        "Komplette Google Business Profil-Optimierung für Kanzleien",
        "Anwalt.de & weitere Portale Profilberatung",
        "Rechtsgebietsspezifische Keyword-Analyse",
        "Professionelle Kanzlei-Bildstrategie",
        "Mandanten-Bewertungssystem (BRAO-konform)",
        "Anleitung für Sekretariat zur Bewertungsanfrage",
        "90 Tage Premium E-Mail Support",
        "E-A-T Checkliste für Ihre Kanzlei-Website"
      ],
      priceAnchor: "599",
      price: "499",
      priceSuffix: "€",
      priceNote: "Einmalzahlung · Keine versteckten Kosten",
      savings: "100€ Rabatt",
      badge: "🎉 Einmaliges Einführungsangebot",
      discountNote: "Regulär 599€ – nur für kurze Zeit",
      cta: "Jetzt Kanzlei Pro sichern",
      spotsText: "Nur noch {spots} Plätze für Kanzleien diesen Monat",
      testimonials: [
        {
          quote: "Nach 3 Wochen war ich bei 'Fachanwalt Arbeitsrecht München' auf Platz 1. Die Anfragen haben sich verdreifacht.",
          author: "RA Dr. Bergmann",
          role: "Arbeitsrechtskanzlei München",
          result: "+18 Mandatsanfragen/Monat"
        },
        {
          quote: "Von 8 auf 67 Google-Bewertungen in 4 Monaten. Alles berufsrechtskonform – das war mir wichtig.",
          author: "RAin Schneider",
          role: "Familienrechtskanzlei Hamburg",
          result: "8x mehr Bewertungen"
        },
        {
          quote: "Die Konkurrenz fragt sich, wie wir plötzlich alle lokalen Anfragen bekommen. Local SEO war der Schlüssel.",
          author: "RA Fischer & Partner",
          role: "Wirtschaftskanzlei Frankfurt",
          result: "+380% Sichtbarkeit"
        }
      ],
      faqTitle: "Häufige Fragen",
      faqs: [
        {
          question: "Für welche Rechtsgebiete funktioniert das?",
          answer: "Kanzlei Pro funktioniert für alle Rechtsgebiete – von Familienrecht über Strafrecht bis Wirtschaftsrecht. Die Keyword-Analyse wird auf Ihre Spezialisierung angepasst."
        },
        {
          question: "Ist das mit der BRAO vereinbar?",
          answer: "Ja, alle Maßnahmen sind berufsrechtskonform. Wir arbeiten nicht mit gekauften Bewertungen oder irreführender Werbung. Die Strategien entsprechen § 43b BRAO."
        },
        {
          question: "Warum 449€ statt 299€?",
          answer: "Anwälte haben höhere Mandatswerte (oft 2.000-50.000€+). Mit nur EINEM zusätzlichen Mandat pro Monat haben Sie die Investition bereits mehrfach zurück. Wir liefern Premium-Qualität für Premium-Dienstleister."
        }
      ],
      guarantee: "100% Zufriedenheitsgarantie",
      guaranteeText: "Falls Sie nach 30 Tagen nicht zufrieden sind, erhalten Sie Ihr Geld zurück. Ohne Wenn und Aber."
    },
    en: {
      eyebrow: "For Lawyers & Law Firms",
      headline: "More Clients.",
      headlineAccent: "More Reputation.",
      subheadline: "82% of potential clients research online before contacting a lawyer. We make sure they find YOUR firm.",
      stats: [
        { value: "82%", label: "research lawyers online" },
        { value: "5x", label: "more inquiries with optimized profile" },
        { value: "73%", label: "check reviews before contact" }
      ],
      problemTitle: "Sound Familiar?",
      problems: [
        "Your firm doesn't appear in the top 3 on Google Maps",
        "Competitors on legal directories outrank you despite less experience",
        "Negative reviews hurt your reputation – you don't know how to respond",
        "You lose potential cases to firms with better online presence"
      ],
      solutionTitle: "Law Firm Pro Makes the Difference",
      solutionSubtitle: "Specially developed for attorneys",
      features: [
        {
          icon: MapPin,
          title: "Google Maps & Portal Dominance",
          description: "Top placement for 'lawyer + practice area + city' searches"
        },
        {
          icon: Shield,
          title: "Reputation Management",
          description: "Bar-compliant strategy for positive client reviews"
        },
        {
          icon: FileText,
          title: "Bar-Compliant",
          description: "All measures comply with professional conduct rules"
        },
        {
          icon: Award,
          title: "E-A-T Optimized",
          description: "Expertise, Authority, Trust – Google's quality signals for lawyers"
        }
      ],
      packageTitle: "Everything Included",
      packageSubtitle: "Law Firm Pro Complete Package",
      packageItems: [
        "Complete Google Business Profile optimization for law firms",
        "Legal directory profile consultation",
        "Practice area-specific keyword analysis",
        "Professional law firm image strategy",
        "Client review system (bar-compliant)",
        "Guide for staff on review requests",
        "90 days premium email support",
        "E-A-T checklist for your firm website"
      ],
      priceAnchor: "599",
      price: "499",
      priceSuffix: "€",
      priceNote: "One-time payment · No hidden costs",
      savings: "Save 100€",
      badge: "🎉 Limited Launch Offer",
      discountNote: "Regular 599€ – limited time only",
      cta: "Get Law Firm Pro Now",
      spotsText: "Only {spots} spots left for law firms this month",
      testimonials: [
        {
          quote: "After 3 weeks I was #1 for 'employment lawyer Munich'. Inquiries tripled.",
          author: "Dr. Bergmann, Esq.",
          role: "Employment Law Firm Munich",
          result: "+18 case inquiries/month"
        },
        {
          quote: "From 8 to 67 Google reviews in 4 months. All bar-compliant – that was crucial.",
          author: "Attorney Schneider",
          role: "Family Law Firm Hamburg",
          result: "8x more reviews"
        },
        {
          quote: "Competitors wonder how we suddenly get all local inquiries. Local SEO was the key.",
          author: "Fischer & Partners",
          role: "Business Law Firm Frankfurt",
          result: "+380% visibility"
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Which practice areas does this work for?",
          answer: "Law Firm Pro works for all practice areas – from family law to criminal law to corporate law. Keyword analysis is customized to your specialization."
        },
        {
          question: "Is this compliant with bar rules?",
          answer: "Yes, all measures are bar-compliant. We don't use purchased reviews or misleading advertising. Strategies comply with professional conduct rules."
        },
        {
          question: "Why 449€ instead of 299€?",
          answer: "Lawyers have higher case values (often 2,000-50,000€+). With just ONE additional case per month, you've recouped the investment multiple times. We deliver premium quality for premium service providers."
        }
      ],
      guarantee: "100% Satisfaction Guarantee",
      guaranteeText: "If you're not satisfied after 30 days, you get your money back. No questions asked."
    }
  };

  const t = content[language];

  const handleCtaClick = () => {
    openStripeCheckout("standard", "anwalt_page", "Kanzlei Pro kaufen");
  };

  const trackButtonClick = (buttonId: string, location: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        button_id: buttonId,
        location: location,
        value: value
      });
    }
  };

  return (
    <>
      <SEOHead
        title={language === 'de' ? "Kanzlei Pro – Mehr Mandanten durch Local SEO | LocalDominator" : "Law Firm Pro – More Clients Through Local SEO | LocalDominator"}
        description={language === 'de' ? "Professionelles Local SEO für Anwälte und Kanzleien. BRAO-konform, E-A-T optimiert. Von Seite 3 auf Platz 1 bei Google." : "Professional Local SEO for lawyers and law firms. Bar-compliant, E-A-T optimized. From page 3 to rank 1 on Google."}
        canonicalUrl="https://localdominate.org/anwalt-marketing"
        lang={language}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 px-4 py-2 text-sm">
                  <Scale className="w-4 h-4 mr-2" />
                  {t.eyebrow}
                </Badge>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {t.headline}{" "}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  {t.headlineAccent}
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
              >
                {t.subheadline}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-10"
              >
                {t.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    trackButtonClick("hero_cta", "anwalt_hero", 449);
                    handleCtaClick();
                  }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                >
                  {t.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="mt-4 text-sm text-slate-500">
                  {t.spotsText.replace("{spots}", spotsLeft.toString())}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 lg:py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t.problemTitle}
              </h2>
              <div className="space-y-4">
                {t.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <p className="text-slate-300">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.solutionTitle}</h2>
              <p className="text-slate-400">{t.solutionSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 h-full hover:border-amber-500/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Section */}
        <section className="py-16 lg:py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
                  {t.badge}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.packageTitle}</h2>
                <p className="text-slate-400">{t.packageSubtitle}</p>
              </div>

              <Card className="bg-gradient-to-b from-slate-800 to-slate-900 border-amber-500/30 overflow-hidden">
                <CardContent className="p-8">
                  {/* Package Items */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {t.packageItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="text-center border-t border-slate-700 pt-8">
                    <div className="mb-4">
                      <span className="text-slate-500 line-through text-xl">{t.priceAnchor}€</span>
                      <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
                        {t.savings}
                      </Badge>
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-amber-400">{t.price}</span>
                      <span className="text-2xl text-amber-400">{t.priceSuffix}</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-6">{t.priceNote}</p>
                    
                    <Button
                      size="lg"
                      onClick={() => {
                        trackButtonClick("package_cta", "anwalt_package", 449);
                        handleCtaClick();
                      }}
                      className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold text-lg px-12 py-6 rounded-xl shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                    >
                      {t.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {t.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                      <div className="border-t border-slate-700 pt-4">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                        <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                          {testimonial.result}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 lg:py-20 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.guarantee}</h3>
              <p className="text-slate-400">{t.guaranteeText}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
              <div className="space-y-4">
                {t.faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 cursor-pointer hover:border-amber-500/30 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </div>
                      {openFaq === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 text-slate-400"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Content Section */}
        <section className="py-16 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === 'de' ? 'Kostenlose Ressourcen für Anwälte' : 'Free Resources for Lawyers'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/blog/local-seo-anwaelte-kanzleien" className="group">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                      {language === 'de' ? 'Local SEO für Anwälte Guide' : 'Local SEO for Lawyers Guide'}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {language === 'de' ? 'BRAO-konform mehr Mandanten gewinnen' : 'Bar-compliant client acquisition'}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/google-bewertungen-bekommen" className="group">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <Star className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                      {language === 'de' ? 'Mehr Mandanten-Bewertungen' : 'Get More Client Reviews'}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {language === 'de' ? 'Berufsrechtskonform & effektiv' : 'Professional & effective'}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/blog/e-e-a-t-local-seo" className="group">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-amber-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                      {language === 'de' ? 'E-E-A-T für Juristen' : 'E-E-A-T for Lawyers'}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {language === 'de' ? 'Expertise & Autorität zeigen' : 'Showcase expertise & authority'}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-t from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Scale className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'de' ? 'Bereit für mehr Mandanten?' : 'Ready for More Clients?'}
              </h2>
              <p className="text-slate-400 mb-8">
                {language === 'de' 
                  ? 'Starten Sie jetzt und werden Sie zur ersten Anlaufstelle in Ihrer Region.'
                  : 'Start now and become the go-to firm in your area.'}
              </p>
              <Button
                size="lg"
                onClick={() => {
                  trackButtonClick("final_cta", "anwalt_footer", 299);
                  handleCtaClick();
                }}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-bold text-lg px-10 py-6 rounded-xl shadow-2xl shadow-amber-500/25 transition-all duration-300 hover:scale-105"
              >
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="mt-4 text-sm text-slate-500">
                {t.spotsText.replace("{spots}", spotsLeft.toString())}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnwaltMarketing;
