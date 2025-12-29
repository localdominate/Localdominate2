import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Ornament Component
const Ornament = ({ className = "" }: { className?: string }) => (
  <span className={`text-menu-gold font-menu-serif ${className}`}>◆</span>
);

const RestaurantMarketing = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen menu-page text-menu-cream overflow-hidden font-menu-sans">
      
      {/* Fixed Golden Side Frames */}
      <div className="menu-frame-left">
        <div className="menu-frame-corner menu-frame-corner-tl" />
        <span className="menu-frame-ornament">◆</span>
        <div className="menu-frame-corner menu-frame-corner-bl" />
      </div>
      <div className="menu-frame-right">
        <div className="menu-frame-corner menu-frame-corner-tr" />
        <span className="menu-frame-ornament">◆</span>
        <div className="menu-frame-corner menu-frame-corner-br" />
      </div>
      
      {/* Hero Section - Elegant Welcome */}
      <section id="hero" className="relative px-4 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container max-w-3xl mx-auto text-center relative">
          
          {/* Top Divider */}
          <div className="menu-divider menu-fade-in menu-delay-1">
            <span className="menu-divider-ornament">◆</span>
          </div>
          
          {/* Brand */}
          <h1 className="font-menu-serif text-lg md:text-xl tracking-[0.4em] uppercase text-menu-gold mb-8 menu-fade-in menu-delay-2">
            Local Dominator
          </h1>
          
          {/* Second Divider */}
          <div className="menu-line mb-12 menu-fade-in menu-delay-2" />
          
          {/* Main Headline */}
          <h2 className="font-menu-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8 menu-fade-in menu-delay-3 text-menu-cream">
            „Verlieren Sie heute Abend wieder
            <span className="block mt-2 text-menu-gold italic">3–4 volle Tische</span>
            an die Konkurrenz?"
          </h2>
          
          {/* Ornament */}
          <div className="text-2xl text-menu-gold mb-8 menu-fade-in menu-delay-4">❧</div>
          
          {/* Subheadline */}
          <p className="font-menu-serif text-xl md:text-2xl italic text-menu-cream/80 mb-12 max-w-xl mx-auto menu-fade-in menu-delay-4">
            90% der Gäste entscheiden am Handy,
            <span className="block">wo sie heute Abend essen.</span>
          </p>
          
          {/* CTA Button */}
          <button className="menu-button menu-fade-in menu-delay-5 group">
            <span className="flex items-center gap-3">
              Gratis Umsatz-Analyse
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          {/* Trust Line */}
          <p className="mt-8 text-sm tracking-wider text-menu-cream/50 menu-fade-in menu-delay-6">
            Unverbindlich · Keine Kosten
          </p>
        </div>
      </section>

      {/* Comparison Section - Das Problem / Die Lösung */}
      <section id="comparison" className="px-4 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Das Problem */}
            <div 
              className={`text-center transition-all duration-1000 ${
                visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="menu-divider mb-8">
                <span className="menu-divider-ornament">◆</span>
              </div>
              <h3 className="menu-section-title text-sm mb-6">Das Problem</h3>
              <div className="menu-divider mb-8">
                <span className="menu-divider-ornament">◆</span>
              </div>
              
              <div className="menu-card menu-corner p-8 md:p-10">
                <div className="aspect-[4/3] bg-menu-dark/50 rounded mb-6 flex items-center justify-center border border-menu-line/20">
                  <div className="text-center p-4 opacity-40 blur-[1px]">
                    <div className="w-24 h-2 bg-menu-cream/30 rounded mb-3 mx-auto" />
                    <div className="w-16 h-2 bg-menu-cream/20 rounded mb-3 mx-auto" />
                    <div className="w-20 h-2 bg-menu-cream/20 rounded mx-auto" />
                  </div>
                </div>
                <p className="font-menu-serif text-lg italic text-menu-cream/70">
                  Ihre aktuelle Seite lädt nicht auf dem Handy.
                </p>
                <p className="font-menu-serif text-xl mt-4 text-menu-burgundy">
                  Gäste sind genervt.
                </p>
              </div>
            </div>

            {/* Die Lösung */}
            <div 
              className={`text-center transition-all duration-1000 ${
                visibleSections.has('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="menu-divider mb-8">
                <span className="menu-divider-ornament">◆</span>
              </div>
              <h3 className="menu-section-title text-sm mb-6">Die Lösung</h3>
              <div className="menu-divider mb-8">
                <span className="menu-divider-ornament">◆</span>
              </div>
              
              <div className="menu-card-featured menu-corner p-8 md:p-10 rounded">
                <div className="aspect-[4/3] bg-gradient-to-b from-menu-dark/30 to-menu-dark/60 rounded mb-6 flex flex-col items-center justify-center border border-menu-gold/20 p-4">
                  <div className="text-menu-gold text-3xl mb-3">✦</div>
                  <p className="font-menu-serif text-lg text-menu-cream mb-2">Ristorante Milano</p>
                  <div className="flex gap-1 text-menu-gold text-sm mb-4">★★★★★</div>
                  <div className="w-20 h-1 bg-menu-gold/30 rounded" />
                </div>
                <p className="font-menu-serif text-lg italic text-menu-cream/70">
                  Schnell. Übersichtlich.
                </p>
                <p className="font-menu-serif text-xl mt-4 text-menu-gold">
                  Auf jedem Gerät perfekt.
                </p>
              </div>
            </div>
          </div>
          
          {/* Warning */}
          <p 
            className={`text-center mt-16 font-menu-serif text-lg italic text-menu-cream/60 transition-all duration-1000 ${
              visibleSections.has('comparison') ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            ※ Ein Gast gibt Ihnen keine zweite Chance. Er klickt einfach weiter.
          </p>
        </div>
      </section>

      {/* ROI Section - Empfehlung des Hauses */}
      <section id="roi" className="px-4 py-16 md:py-24">
        <div className="container max-w-2xl mx-auto">
          <div 
            className={`text-center transition-all duration-1000 ${
              visibleSections.has('roi') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="menu-divider mb-6">
              <span className="menu-divider-ornament">◆</span>
            </div>
            <h3 className="menu-section-title text-sm mb-6">Empfehlung des Hauses</h3>
            <div className="menu-divider mb-12">
              <span className="menu-divider-ornament">◆</span>
            </div>
            
            <div className="menu-card p-8 md:p-12 rounded">
              {/* Item 1 */}
              <div className="flex items-end justify-between mb-6">
                <div className="text-left">
                  <p className="font-menu-serif text-xl text-menu-cream">1 gewonnener Tisch</p>
                  <p className="menu-subtitle text-sm">(4 Personen)</p>
                </div>
                <div className="menu-price-line" />
                <p className="menu-price text-2xl">
                  ~<AnimatedCounter target={100} suffix="€" />
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-end justify-between mb-10">
                <div className="text-left">
                  <p className="font-menu-serif text-xl text-menu-cream">Unsere Optimierung</p>
                  <p className="menu-subtitle text-sm">monatlich</p>
                </div>
                <div className="menu-price-line" />
                <p className="menu-price text-2xl">
                  <AnimatedCounter target={49} suffix="€" />
                </p>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-menu-gold/30 mb-10" />
              
              {/* Conclusion */}
              <div className="text-center">
                <p className="font-menu-serif text-2xl md:text-3xl text-menu-cream mb-2">
                  Bereits ab dem <span className="text-menu-gold italic">ersten</span>
                </p>
                <p className="font-menu-serif text-2xl md:text-3xl text-menu-cream">
                  zusätzlichen Gast: <span className="text-menu-gold">Gewinn.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Unsere Spezialitäten */}
      <section id="services" className="px-4 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="menu-divider mb-6">
            <span className="menu-divider-ornament">◆</span>
          </div>
          <h3 className={`menu-section-title text-sm mb-6 transition-all duration-700 ${
            visibleSections.has('services') ? 'opacity-100' : 'opacity-0'
          }`}>
            Unsere Spezialitäten
          </h3>
          <div className="menu-divider mb-16">
            <span className="menu-divider-ornament">◆</span>
          </div>
          
          <div className="space-y-10">
            {[
              {
                title: 'Platz 1 bei Google Maps',
                desc: 'Gefunden werden, wenn Gäste hungrig sind',
              },
              {
                title: 'Speisekarte auf jedem Handy',
                desc: 'Keine PDFs, keine Wartezeit',
              },
              {
                title: 'Technik die funktioniert',
                desc: 'Nie wieder Updates oder Hosting',
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <h4 className="font-menu-serif text-2xl md:text-3xl text-menu-cream mb-2">
                  {service.title}
                </h4>
                <p className="menu-subtitle text-lg">
                  {service.desc}
                </p>
                {index < 2 && (
                  <div className="menu-line mt-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - À la Carte */}
      <section id="pricing" className="px-4 py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="menu-divider mb-6">
              <span className="menu-divider-ornament">◆</span>
            </div>
            <h3 className={`menu-section-title text-sm tracking-[0.4em] mb-6 transition-all duration-700 ${
              visibleSections.has('pricing') ? 'opacity-100' : 'opacity-0'
            }`}>
              À la Carte
            </h3>
            <div className="menu-divider">
              <span className="menu-divider-ornament">◆</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter Paket */}
            <div 
              className={`menu-card menu-corner p-8 rounded text-center transition-all duration-700 ${
                visibleSections.has('pricing') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h4 className="menu-section-title text-xs mb-4">Starter-Paket</h4>
              <p className="menu-subtitle text-sm mb-6">Website · Speisekarte · Maps</p>
              
              <div className="my-8">
                <p className="font-menu-serif text-5xl text-menu-gold">
                  <AnimatedCounter target={250} />
                  <span className="text-2xl">€</span>
                </p>
                <p className="menu-subtitle text-sm mt-2">einmalig</p>
              </div>
              
              <ul className="space-y-3 text-left">
                {['Website-Erstellung', 'Digitale Speisekarte', 'Google Maps Optimierung'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-menu-cream/80">
                    <Check className="w-4 h-4 text-menu-gold flex-shrink-0" />
                    <span className="font-menu-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Growth Abo - Featured */}
            <div 
              className={`menu-card-featured menu-corner p-8 rounded text-center relative transition-all duration-700 ${
                visibleSections.has('pricing') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {/* Featured Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-menu-gold text-menu-dark px-4 py-1 text-xs font-menu-serif tracking-wider">
                ★ EMPFEHLUNG ★
              </div>
              
              <h4 className="menu-section-title text-xs mb-4 mt-4">Growth-Abo</h4>
              <p className="menu-subtitle text-sm mb-6">Hosting · Updates · Support</p>
              
              <div className="my-8">
                <p className="font-menu-serif text-5xl text-menu-gold">
                  <AnimatedCounter target={49} />
                  <span className="text-2xl">€</span>
                </p>
                <p className="menu-subtitle text-sm mt-2">pro Monat</p>
              </div>
              
              <ul className="space-y-3 text-left">
                {['Hosting & Wartung', 'Monatliche Updates', 'Persönlicher Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-menu-cream/80">
                    <Check className="w-4 h-4 text-menu-gold flex-shrink-0" />
                    <span className="font-menu-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Scarcity */}
              <div className="mt-8 pt-6 border-t border-menu-gold/20">
                <p className="font-menu-serif italic text-menu-gold text-sm">
                  Nur noch 3 Plätze verfügbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Ihr Gastgeber */}
      <section id="trust" className="px-4 py-16 md:py-24">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="menu-divider mb-6">
            <span className="menu-divider-ornament">◆</span>
          </div>
          <h3 className={`menu-section-title text-sm mb-6 transition-all duration-700 ${
            visibleSections.has('trust') ? 'opacity-100' : 'opacity-0'
          }`}>
            Ihr Gastgeber
          </h3>
          <div className="menu-divider mb-12">
            <span className="menu-divider-ornament">◆</span>
          </div>
          
          <div 
            className={`transition-all duration-700 ${
              visibleSections.has('trust') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Photo/Initials */}
            <div className="w-24 h-24 rounded-full border-2 border-menu-gold/50 mx-auto mb-8 flex items-center justify-center bg-menu-dark/50">
              <span className="font-menu-serif text-3xl text-menu-gold">JD</span>
            </div>
            
            <h4 className="font-menu-serif text-2xl text-menu-cream mb-2">Johannes Döring</h4>
            <p className="menu-subtitle text-lg mb-8">Ihr lokaler Partner</p>
            
            <p className="font-menu-serif text-xl italic text-menu-cream/70 max-w-md mx-auto">
              „Kein Callcenter. Persönlicher Service.
              <span className="block mt-2">Bei Fragen erreichen Sie mich direkt."</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Reservierung */}
      <section id="cta" className="px-4 py-16 md:py-24">
        <div className="container max-w-2xl mx-auto">
          <div 
            className={`menu-card-featured menu-corner p-10 md:p-16 rounded text-center transition-all duration-700 ${
              visibleSections.has('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h3 className="menu-section-title text-sm tracking-[0.4em] mb-8">Reservierung</h3>
            
            <p className="font-menu-serif text-2xl md:text-3xl text-menu-cream mb-4">
              Bereit, mehr Gäste zu gewinnen?
            </p>
            <p className="menu-subtitle text-lg mb-10">
              Fordern Sie jetzt Ihre kostenlose Analyse an.
            </p>
            
            <button className="menu-button menu-button-filled group">
              <span className="flex items-center gap-3">
                Jetzt Tisch reservieren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-menu-cream/50">
              <Phone className="w-4 h-4" />
              <span className="font-menu-serif text-sm">Oder rufen Sie uns an</span>
            </div>
          </div>
          
          <Link 
            to="/" 
            className="block mt-12 text-center text-menu-cream/40 hover:text-menu-gold transition-colors font-menu-serif text-sm tracking-wider"
          >
            ← Zurück zur Hauptseite
          </Link>
        </div>
      </section>

      {/* Mobile Sticky Bar - Elegant */}
      <div className="fixed bottom-0 left-0 right-0 bg-menu-dark/95 backdrop-blur-lg border-t border-menu-gold/30 p-4 flex gap-3 md:hidden z-50">
        <Button 
          className="flex-1 menu-button-filled font-menu-serif tracking-wider text-sm py-6"
          asChild
        >
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-menu-gold/50 text-menu-gold hover:bg-menu-gold/10 font-menu-serif tracking-wider text-sm py-6"
          asChild
        >
          <a href="tel:+491234567890">
            <Phone className="w-4 h-4 mr-2" />
            Anrufen
          </a>
        </Button>
      </div>
      
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-24 md:hidden" />
    </div>
  );
};

export default RestaurantMarketing;
