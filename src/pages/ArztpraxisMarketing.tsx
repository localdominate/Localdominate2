import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Shield, Star, Stethoscope, Clock, MapPin, Users, Heart, Calendar, FileCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { openStripeCheckout } from "@/lib/stripe";
import { trackButtonClick } from "@/lib/dataLayer";

const ArztpraxisMarketing = () => {
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
    trackButtonClick("arztpraxis_cta", "arztpraxis_page", 399);
    openStripeCheckout("standard", "arztpraxis_page", "Praxis Pro kaufen");
  };

  const t = {
    de: {
      eyebrow: "Für Arztpraxen & Ärzte",
      headline: "Mehr Patienten.",
      headlineHighlight: "Weniger Verwaltung.",
      subheadline: "78% aller Patienten suchen ihren Arzt online. Wir sorgen dafür, dass sie IHRE Praxis finden – nicht die Konkurrenz.",
      stats: [
        { value: "78%", label: "aller Patienten suchen Ärzte online" },
        { value: "70%", label: "prüfen Bewertungen vor der Terminbuchung" },
        { value: "4x", label: "mehr Anfragen mit optimiertem Profil" },
      ],
      problems: {
        headline: "Kennen Sie das?",
        items: [
          "Ihr Jameda-Profil wird von der Konkurrenz überholt",
          "Negative Bewertungen ohne Strategie zur professionellen Reaktion",
          "Google Business Profil unvollständig oder veraltet",
          "Keine Zeit für DSGVO-konforme Online-Präsenz",
        ],
      },
      solution: {
        headline: "Ihre Lösung: Praxis Pro",
        subheadline: "Das Komplettpaket für lokale Sichtbarkeit – speziell für Arztpraxen",
        features: [
          { icon: MapPin, title: "Google Maps & Jameda Dominanz", text: "Top-Platzierung bei 'Arzt + Fachrichtung + Stadt'" },
          { icon: Star, title: "Bewertungs-Management", text: "Rechtssichere Strategie für konstante 5-Sterne Bewertungen" },
          { icon: Shield, title: "DSGVO-konform", text: "Alle Maßnahmen zu 100% patientenschutzkonform" },
          { icon: FileCheck, title: "YMYL-optimiert", text: "Erfüllt Googles medizinische Qualitätsrichtlinien" },
        ],
      },
      included: {
        headline: "Das ist im Paket enthalten",
        items: [
          "Komplette Google Business Profil-Optimierung",
          "Jameda Premium-Profil Beratung",
          "Fachgebiets-spezifische Keyword-Analyse",
          "Professionelle Praxis-Bilder Strategie",
          "QR-Code System für Patientenbewertungen (DSGVO-konform)",
          "Anleitung für MFAs zur Bewertungsanfrage",
          "60 Tage Premium E-Mail Support",
          "YMYL-Checkliste für Ihre Praxis-Website",
        ],
      },
      pricing: {
        anchor: "699",
        price: "399",
        badge: "Einführungspreis",
        savings: "300€ sparen",
        oneTime: "Einmalig • Keine versteckten Kosten",
        cta: "Jetzt Praxis Pro sichern",
        scarcity: "Nur noch 3 Plätze für Praxen diesen Monat",
        offerEnds: "Angebot endet in",
      },
      guarantee: {
        headline: "100% Zufriedenheitsgarantie",
        text: "Keine messbare Verbesserung nach 30 Tagen? Geld zurück – ohne Wenn und Aber.",
      },
      testimonials: [
        { name: "Dr. Müller", business: "Hausarztpraxis, München", quote: "Von Jameda Seite 3 auf Platz 1 in nur 4 Wochen. Seitdem kommen täglich neue Patientenanfragen.", result: "+15 Neupatienten/Monat" },
        { name: "Dr. Schmidt", business: "Zahnarztpraxis, Hamburg", quote: "Das Bewertungssystem ist Gold wert. Hatte vorher 12 Bewertungen, jetzt 89 – alle positiv.", result: "89 Bewertungen" },
        { name: "Dr. Weber", business: "Orthopädie, Berlin", quote: "Endlich finden Patienten uns online. Die beste Investition für unsere Praxis.", result: "+420% Sichtbarkeit" },
      ],
      faq: {
        headline: "Häufige Fragen",
        items: [
          { q: "Für welche Fachrichtungen funktioniert das?", a: "Für alle: Hausärzte, Zahnärzte, Orthopäden, Dermatologen, Kinderärzte, Gynäkologen, HNO und alle anderen Fachrichtungen." },
          { q: "Ist das mit dem Heilmittelwerbegesetz vereinbar?", a: "Absolut. Alle unsere Maßnahmen sind HWG-konform und wurden rechtlich geprüft. Wir arbeiten nur mit erlaubten Optimierungsmethoden." },
          { q: "Warum 399€ statt 299€?", a: "Praxis Pro enthält medizinspezifische Extras: YMYL-Checkliste, Jameda-Beratung, DSGVO-konforme Bewertungssysteme und 60 statt 30 Tage Support." },
        ],
      },
      finalCta: {
        headline: "Bereit für mehr Patienten?",
        subheadline: "Während Sie überlegen, buchen Ihre potenziellen Patienten bei der Konkurrenz.",
      },
      footer: {
        backToMain: "Zurück zur Hauptseite",
      },
    },
    en: {
      eyebrow: "For Medical Practices & Doctors",
      headline: "More Patients.",
      headlineHighlight: "Less Admin.",
      subheadline: "78% of all patients search for their doctor online. We make sure they find YOUR practice – not the competition.",
      stats: [
        { value: "78%", label: "of patients search for doctors online" },
        { value: "70%", label: "check reviews before booking" },
        { value: "4x", label: "more inquiries with optimized profile" },
      ],
      problems: {
        headline: "Sound familiar?",
        items: [
          "Your profile is being overtaken by competitors",
          "Negative reviews without a strategy for professional response",
          "Google Business profile incomplete or outdated",
          "No time for GDPR-compliant online presence",
        ],
      },
      solution: {
        headline: "Your Solution: Practice Pro",
        subheadline: "The complete package for local visibility – made for medical practices",
        features: [
          { icon: MapPin, title: "Google Maps Dominance", text: "Top placement for 'doctor + specialty + city'" },
          { icon: Star, title: "Review Management", text: "Legally compliant strategy for constant 5-star reviews" },
          { icon: Shield, title: "GDPR-Compliant", text: "All measures 100% patient privacy compliant" },
          { icon: FileCheck, title: "YMYL-Optimized", text: "Meets Google's medical quality guidelines" },
        ],
      },
      included: {
        headline: "What's Included",
        items: [
          "Complete Google Business Profile optimization",
          "Medical directory profile consultation",
          "Specialty-specific keyword analysis",
          "Professional practice image strategy",
          "QR code system for patient reviews (GDPR-compliant)",
          "Staff training for review requests",
          "60 days premium email support",
          "YMYL checklist for your practice website",
        ],
      },
      pricing: {
        anchor: "699",
        price: "399",
        badge: "Launch Price",
        savings: "Save $300",
        oneTime: "One-time • No hidden fees",
        cta: "Get Practice Pro Now",
        scarcity: "Only 3 spots left for practices this month",
        offerEnds: "Offer ends in",
      },
      guarantee: {
        headline: "100% Satisfaction Guarantee",
        text: "No measurable improvement after 30 days? Money back – no questions asked.",
      },
      testimonials: [
        { name: "Dr. Miller", business: "Family Practice, Munich", quote: "From page 3 to #1 in just 4 weeks. Now we get daily patient inquiries.", result: "+15 new patients/month" },
        { name: "Dr. Smith", business: "Dental Practice, Hamburg", quote: "The review system is gold. Had 12 reviews before, now 89 – all positive.", result: "89 reviews" },
        { name: "Dr. Weber", business: "Orthopedics, Berlin", quote: "Finally patients find us online. The best investment for our practice.", result: "+420% visibility" },
      ],
      faq: {
        headline: "FAQ",
        items: [
          { q: "What specialties does this work for?", a: "All of them: GPs, dentists, orthopedists, dermatologists, pediatricians, gynecologists, ENT and all other specialties." },
          { q: "Is this compliant with medical advertising laws?", a: "Absolutely. All our measures are legally compliant and have been reviewed. We only work with permitted optimization methods." },
          { q: "Why $399 instead of $299?", a: "Practice Pro includes medical-specific extras: YMYL checklist, directory consultation, GDPR-compliant review systems and 60 instead of 30 days support." },
        ],
      },
      finalCta: {
        headline: "Ready for more patients?",
        subheadline: "While you're thinking, your potential patients are booking with the competition.",
      },
      footer: {
        backToMain: "Back to Homepage",
      },
    },
  };

  const content = t[language];

  const arztpraxisJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Praxis Pro - Local SEO für Arztpraxen",
    "description": "Professionelles Google Maps Marketing für Arztpraxen. Mehr Patienten durch Top-Rankings in der lokalen Suche. DSGVO-konform und YMYL-optimiert.",
    "provider": {
      "@type": "Organization",
      "name": "Local Dominator"
    },
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "EUR",
      "priceValidUntil": "2026-12-31"
    },
    "serviceType": "Arztpraxis Marketing"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        title="Praxis Pro – Mehr Patienten durch Google Maps & Jameda"
        description="Professionelles Local SEO für Arztpraxen. DSGVO-konform, YMYL-optimiert. Von Jameda Seite 3 auf Platz 1 – in nur 4 Wochen."
        canonicalUrl="https://localdominator.de/arztpraxis-marketing"
        keywords="Arzt Marketing, Praxis SEO, Jameda Optimierung, Patientengewinnung, Arztpraxis Google, Arzt Bewertungen"
        lang={language}
        jsonLd={arztpraxisJsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.footer.backToMain}</span>
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-cyan-400 font-medium tracking-wide uppercase text-sm">{content.eyebrow}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {content.headline} <span className="text-cyan-400">{content.headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            {content.subheadline}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25"
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
              <div key={idx} className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-cyan-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400" />
            
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-6">
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
                    <span className="text-xl font-bold text-white">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-slate-500 text-xs ml-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button 
              onClick={handleCtaClick}
              size="lg"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg py-6 rounded-xl shadow-lg shadow-cyan-500/25 mb-4"
            >
              {content.pricing.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Scarcity */}
            <p className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              {content.pricing.scarcity}
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section 
        data-section="guarantee"
        className={`py-16 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('guarantee') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">{content.guarantee.headline}</h2>
          <p className="text-slate-400">{content.guarantee.text}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        data-section="testimonials"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.business}</p>
                  <p className="text-cyan-400 font-semibold text-sm mt-2">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section 
        data-section="faq"
        className={`py-20 px-4 bg-slate-800/30 transition-all duration-700 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{content.faq.headline}</h2>
          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        data-section="finalcta"
        className={`py-20 px-4 transition-all duration-700 ${visibleSections.has('finalcta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.finalCta.headline}</h2>
          <p className="text-slate-400 mb-8">{content.finalCta.subheadline}</p>
          <Button 
            onClick={handleCtaClick}
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg px-10 py-6 rounded-xl shadow-lg shadow-cyan-500/25"
          >
            {content.pricing.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
            {content.footer.backToMain}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ArztpraxisMarketing;
