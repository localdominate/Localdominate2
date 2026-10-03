import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Phone, Shield, Star, Wrench, Clock, MapPin, Users, TrendingUp, Zap, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openStripeCheckout } from "@/lib/stripe";
import { trackButtonClick } from "@/lib/dataLayer";

const HandwerkerMarketing = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') || '';
            setVisibleSections(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCtaClick = () => {
    trackButtonClick("handwerker_cta", "handwerker_page", 299);
    openStripeCheckout("standard", "handwerker_page", "Handwerker Pro kaufen");
  };

  const t = {
    de: {
      eyebrow: "Für Handwerksbetriebe",
      headline: "Mehr Aufträge.",
      headlineHighlight: "Weniger Kaltakquise.",
      subheadline: "Kunden suchen nach Handwerkern in deiner Region. Wir sorgen dafür, dass sie DICH finden – nicht deine Konkurrenz.",
      stats: [
        { value: "73%", label: "aller Aufträge starten mit einer Google-Suche" },
        { value: "92%", label: "wählen einen Betrieb aus den Top 3" },
        { value: "5x", label: "mehr Anfragen mit optimiertem Profil" },
      ],
      problems: {
        headline: "Kennst du das?",
        items: [
          "Kunden rufen bei der Konkurrenz an, obwohl du besser bist",
          "Du verlässt dich auf Mundpropaganda – aber das reicht nicht mehr",
          "Dein Google-Profil sieht aus wie 2015",
          "Du hast keine Zeit für Marketing-Kram",
        ],
      },
      solution: {
        headline: "Deine Lösung: Handwerker Pro",
        subheadline: "Das Komplettpaket für lokale Sichtbarkeit – speziell für Handwerksbetriebe",
        features: [
          { icon: MapPin, title: "Google Maps Dominanz", text: "Top-Platzierung in deiner Region für alle relevanten Suchbegriffe" },
          { icon: Star, title: "Bewertungs-Strategie", text: "System für konstante 5-Sterne Bewertungen von zufriedenen Kunden" },
          { icon: Zap, title: "Sofort-Optimierung", text: "In 48h ist dein Profil komplett optimiert und rankt besser" },
          { icon: Users, title: "Branchenspezifisch", text: "Keywords und Strategie speziell für Handwerker optimiert" },
        ],
      },
      included: {
        headline: "Das ist im Paket enthalten",
        items: [
          "Komplette Google Business Profil-Optimierung",
          "Branchenspezifische Keyword-Analyse (Elektriker, Sanitär, Maler, etc.)",
          "Professionelle Bilder-Strategie für Handwerksbetriebe",
          "QR-Code System für Bewertungen nach Auftragsabschluss",
          "Notdienst-Optimierung (falls relevant)",
          "Anleitungen für Mitarbeiter zur Bewertungsanfrage",
          "60 Tage Premium E-Mail Support",
          "Konkurrenzanalyse deiner Region",
        ],
      },
      pricing: {
        anchor: "599",
        price: "299",
        badge: "🎉 Einmaliges Einführungsangebot",
        savings: "300€ Rabatt",
        oneTime: "Einmalig • Keine versteckten Kosten",
        cta: "Jetzt Handwerker Pro sichern",
        scarcity: "Nur noch 5 Plätze diesen Monat",
        offerEnds: "Angebot endet in",
        discountNote: "Regulär 599€ – nur für kurze Zeit",
      },
      guarantee: {
        headline: "100% Zufriedenheitsgarantie",
        text: "Keine messbare Verbesserung nach 30 Tagen? Geld zurück – ohne Wenn und Aber.",
      },
      testimonials: [
        { name: "Klaus M.", business: "Elektro Meister, München", quote: "Von Seite 3 auf Platz 1 in 4 Wochen. Jetzt klingelt das Telefon täglich.", result: "+12 Aufträge/Woche" },
        { name: "Stefan B.", business: "SB Sanitär, Hamburg", quote: "Das Bewertungssystem ist Gold wert. Hatte vorher 8 Bewertungen, jetzt 47.", result: "47 Bewertungen" },
        { name: "Marco T.", business: "Maler Tradition, Berlin", quote: "Endlich finden mich Kunden ohne Mundpropaganda. Beste Investition.", result: "+340% Sichtbarkeit" },
      ],
      faq: {
        headline: "Häufige Fragen",
        items: [
          { q: "Für welche Gewerke funktioniert das?", a: "Für alle: Elektriker, Sanitär, Heizung, Maler, Tischler, Dachdecker, Schlosser, KFZ-Werkstätten und mehr." },
          { q: "Ich hab keine Zeit für sowas.", a: "Du brauchst 7 Minuten zum Ausfüllen des Fragebogens. Den Rest machen wir." },
          { q: "Warum 349€ statt 299€?", a: "Handwerker Pro enthält branchenspezifische Extras: Notdienst-Optimierung, Konkurrenzanalyse und 60 statt 30 Tage Support." },
        ],
      },
      finalCta: {
        headline: "Bereit für mehr Aufträge?",
        subheadline: "Während du überlegst, rufen deine potenziellen Kunden bei der Konkurrenz an.",
      },
      footer: {
        backToMain: "Zurück zur Hauptseite",
      },
    },
    en: {
      eyebrow: "For Craftsmen",
      headline: "More Jobs.",
      headlineHighlight: "Less Cold Calling.",
      subheadline: "Customers are searching for craftsmen in your area. We make sure they find YOU – not your competition.",
      stats: [
        { value: "73%", label: "of all jobs start with a Google search" },
        { value: "92%", label: "choose a business from the Top 3" },
        { value: "5x", label: "more inquiries with an optimized profile" },
      ],
      problems: {
        headline: "Sound familiar?",
        items: [
          "Customers call your competitors even though you're better",
          "You rely on word of mouth – but it's not enough anymore",
          "Your Google profile looks like it's from 2015",
          "You don't have time for marketing stuff",
        ],
      },
      solution: {
        headline: "Your Solution: Craftsman Pro",
        subheadline: "The complete package for local visibility – made for craftsmen",
        features: [
          { icon: MapPin, title: "Google Maps Dominance", text: "Top placement in your region for all relevant search terms" },
          { icon: Star, title: "Review Strategy", text: "System for constant 5-star reviews from satisfied customers" },
          { icon: Zap, title: "Instant Optimization", text: "Your profile is fully optimized and ranking better in 48h" },
          { icon: Users, title: "Industry-Specific", text: "Keywords and strategy optimized specifically for craftsmen" },
        ],
      },
      included: {
        headline: "What's Included",
        items: [
          "Complete Google Business Profile optimization",
          "Industry-specific keyword analysis (electrician, plumber, painter, etc.)",
          "Professional image strategy for craftsmen",
          "QR code system for reviews after job completion",
          "Emergency service optimization (if relevant)",
          "Staff training for review requests",
          "60 days premium email support",
          "Competitor analysis for your region",
        ],
      },
      pricing: {
        anchor: "599",
        price: "299",
        badge: "🎉 Limited Launch Offer",
        savings: "Save 300€",
        oneTime: "One-time • No hidden fees",
        cta: "Get Craftsman Pro Now",
        scarcity: "Only 5 spots left this month",
        offerEnds: "Offer ends in",
        discountNote: "Regular 599€ – limited time only",
      },
      guarantee: {
        headline: "100% Satisfaction Guarantee",
        text: "No measurable improvement after 30 days? Money back – no questions asked.",
      },
      testimonials: [
        { name: "Klaus M.", business: "Elektro Meister, Munich", quote: "From page 3 to #1 in 4 weeks. Now the phone rings daily.", result: "+12 jobs/week" },
        { name: "Stefan B.", business: "SB Plumbing, Hamburg", quote: "The review system is gold. Had 8 reviews before, now 47.", result: "47 reviews" },
        { name: "Marco T.", business: "Painter Tradition, Berlin", quote: "Finally customers find me without word of mouth. Best investment.", result: "+340% visibility" },
      ],
      faq: {
        headline: "FAQ",
        items: [
          { q: "What trades does this work for?", a: "All of them: electricians, plumbers, HVAC, painters, carpenters, roofers, locksmiths, auto shops and more." },
          { q: "I don't have time for this.", a: "You need 7 minutes to fill out a form. We do the rest." },
          { q: "Why $349 instead of $299?", a: "Craftsman Pro includes industry-specific extras: emergency service optimization, competitor analysis and 60 instead of 30 days support." },
        ],
      },
      finalCta: {
        headline: "Ready for more jobs?",
        subheadline: "While you're thinking, your potential customers are calling your competition.",
      },
      footer: {
        backToMain: "Back to Homepage",
      },
    },
  };

  const content = t[language];

  const handwerkerJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Handwerker Pro - Local SEO für Handwerksbetriebe",
      "description": "Professionelles Google Maps Marketing für Handwerker. Mehr Aufträge durch Top-Rankings in der lokalen Suche.",
      "provider": { "@type": "Organization", "name": "Local Dominator" },
      "offers": {
        "@type": "Offer",
        "price": "349",
        "priceCurrency": "EUR",
        "priceValidUntil": "2026-12-31"
      },
      "serviceType": "Handwerker Marketing"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.faq.items.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Handwerker Pro – Mehr Aufträge durch Google Maps"
        description="Professionelles Local SEO für Handwerksbetriebe. Von Seite 3 auf Platz 1 – in nur 4 Wochen. Einmalzahlung, keine Abokosten."
        canonicalUrl="https://localdominate.org/handwerker-marketing"
        keywords="Handwerker Marketing, Elektriker Google Maps, Sanitär SEO, Maler Online Marketing, Handwerker Kundengewinnung"
        lang={language}
        jsonLd={handwerkerJsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.footer.backToMain}</span>
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-amber-400 font-medium tracking-wide uppercase text-sm">{content.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {content.headline} <span className="text-amber-400">{content.headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            {content.subheadline}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-500/25"
          >
            {content.pricing.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section 
        data-section="problems"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('problems') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{content.problems.headline}</h2>
          <div className="space-y-4">
            {content.problems.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <span className="text-red-400 text-xl">✕</span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        data-section="solution"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('solution') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{content.solution.headline}</h2>
            <p className="text-slate-400">{content.solution.subheadline}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solution.features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section 
        data-section="included"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('included') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{content.included.headline}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {content.included.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        data-section="pricing"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-amber-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
            
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6">
              {content.pricing.badge} – {content.pricing.savings}
            </span>

            {/* Price */}
            <div className="mb-6">
              <p className="text-slate-400 text-lg line-through mb-1">{content.pricing.anchor}€</p>
              <p className="text-5xl md:text-6xl font-bold text-white">{content.pricing.price}€</p>
              <p className="text-slate-400 mt-2">{content.pricing.oneTime}</p>
            </div>

            {/* Timer */}
            <div className="mb-8">
              <p className="text-slate-500 text-sm mb-3">{content.pricing.offerEnds}</p>
              <div className="flex justify-center gap-3">
                {[
                  { value: timeLeft.hours, label: "Std" },
                  { value: timeLeft.minutes, label: "Min" },
                  { value: timeLeft.seconds, label: "Sek" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-mono font-bold text-amber-400">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button 
              onClick={handleCtaClick}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg py-6 rounded-xl"
            >
              {content.pricing.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Scarcity */}
            <p className="text-red-400 text-sm mt-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              {content.pricing.scarcity}
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{content.guarantee.headline}</h3>
          <p className="text-slate-400">{content.guarantee.text}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        data-section="testimonials"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.business}</p>
                  <p className="text-emerald-400 text-sm font-semibold mt-2">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        data-section="faq"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">{content.faq.headline}</h2>
          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h4 className="text-white font-medium mb-2">{item.q}</h4>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {language === 'de' ? 'Kostenlose Ressourcen für Handwerker' : 'Free Resources for Craftsmen'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/local-seo-handwerker" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Local SEO für Handwerker Guide' : 'Local SEO for Craftsmen Guide'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? 'Der komplette Leitfaden für mehr Aufträge' : 'The complete guide for more jobs'}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/blog/google-bewertungen-bekommen" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Mehr Google Bewertungen bekommen' : 'Get More Google Reviews'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? '7 bewährte Strategien' : '7 proven strategies'}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/blog/google-maps-ranking-verbessern" className="group">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                    {language === 'de' ? 'Google Maps Ranking verbessern' : 'Improve Google Maps Ranking'}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {language === 'de' ? 'Die wichtigsten Ranking-Faktoren' : 'The most important ranking factors'}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.finalCta.headline}</h2>
          <p className="text-slate-400 mb-8">{content.finalCta.subheadline}</p>
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-500/25"
          >
            {content.pricing.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="text-slate-500 hover:text-amber-400 transition-colors text-sm"
          >
            ← {content.footer.backToMain}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HandwerkerMarketing;
