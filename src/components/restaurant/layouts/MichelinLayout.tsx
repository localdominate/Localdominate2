import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Check, Gift, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import MenuCourse from '../michelin/MenuCourse';
import MichelinTimer from '../michelin/MichelinTimer';
import MichelinFeatureList from '../michelin/MichelinFeatureList';
import MichelinPriceBadge from '../michelin/MichelinPriceBadge';

const MichelinLayout = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 });
  const [visibleCourses, setVisibleCourses] = useState<Set<number>>(new Set());

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer for course animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-course') || '0');
            setVisibleCourses(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-course]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { name: 'Premium Website Design', value: 'inkl.' },
    { name: 'Google Maps Optimierung', value: 'inkl.' },
    { name: 'Mobile Speisekarte', value: 'inkl.' },
    { name: 'Technischer Support', value: 'inkl.' },
    { name: 'Monatliche Updates', value: 'inkl.' },
  ];

  return (
    <div className="rest-page min-h-screen">
      {/* Header */}
      <header className="py-12 text-center border-b border-[hsl(var(--rest-border))]">
        <p className="rest-title mb-4">Dégustation</p>
        <div className="rest-line" />
      </header>

      {/* Menu Introduction */}
      <section className="py-16 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <span className="rest-ornament">✦</span>
          <h1 className="rest-headline text-4xl md:text-5xl mt-8 mb-6">
            Local Dominator
          </h1>
          <p className="rest-subtitle text-lg leading-relaxed">
            Ein kuratiertes Erlebnis für Restaurants, 
            die online gefunden werden möchten.
          </p>
          <div className="rest-line mt-8" />
        </div>
      </section>

      {/* Course 1: Amuse-Bouche */}
      <div 
        data-course="1" 
        className={`transition-all duration-1000 ${visibleCourses.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title="Amuse-Bouche"
          name="Kostenlose Analyse"
          description="Ein erster Eindruck Ihrer digitalen Präsenz. Wir analysieren Ihren aktuellen Stand und zeigen Potenziale auf."
          isOffered
          price="Offert"
        >
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <span className="rest-subtitle flex items-center gap-2">
              <Clock className="w-4 h-4" /> 15 Minuten
            </span>
            <span className="rest-subtitle flex items-center gap-2">
              <Check className="w-4 h-4" /> Unverbindlich
            </span>
          </div>
        </MenuCourse>
      </div>

      {/* Course 2: Entrée */}
      <div 
        data-course="2"
        className={`transition-all duration-1000 delay-100 ${visibleCourses.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title="Entrée"
          name="Website Erstellung"
          description="Eine elegante, mobile-optimierte Präsenz. Ladezeit unter 2 Sekunden. Ihre digitale Visitenkarte."
          price="ab 250€"
        />
      </div>

      {/* Course 3: Plat Principal - THE MAIN OFFER */}
      <div 
        data-course="3"
        className={`transition-all duration-1000 delay-200 ${visibleCourses.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <section className="rest-course rest-course-main py-20 relative">
          {/* Star indicator */}
          <span className="absolute top-8 left-1/2 -translate-x-1/2 rest-ornament">★</span>
          
          <p className="rest-course-title mt-8">Plat Principal</p>
          <h2 className="rest-course-name text-3xl md:text-4xl">
            Rundum-Sorglos-Paket
          </h2>
          <p className="rest-course-description">
            Alles, was Ihr Restaurant digital braucht. 
            Website, Google Maps, Wartung und persönlicher Support.
          </p>

          {/* Timer */}
          <div className="mt-8 mb-4">
            <p className="rest-scarcity-text mb-4">Angebot endet in</p>
            <MichelinTimer 
              hours={timeLeft.hours} 
              minutes={timeLeft.minutes} 
              seconds={timeLeft.seconds} 
            />
          </div>

          {/* Price */}
          <MichelinPriceBadge price={49} anchor={99} />

          {/* Features */}
          <div className="max-w-md mx-auto px-4">
            <MichelinFeatureList features={features} />
          </div>

          {/* Chef's Recommendation */}
          <div className="rest-chef-tag mt-8">
            Empfehlung des Küchenchefs
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="rest-cta-button group">
              <span className="flex items-center gap-3">
                Jetzt reservieren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Scarcity - Subtle */}
          <p className="rest-scarcity-text mt-6">
            Nur noch 3 Plätze in diesem Monat verfügbar
          </p>
        </section>
      </div>

      {/* Course 4: Fromages - Bonuses */}
      <div 
        data-course="4"
        className={`transition-all duration-1000 delay-300 ${visibleCourses.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title="Fromages"
          name="Bonus-Kollektion"
          description="Zusätzliche Ressourcen für Ihren Erfolg. Bei Buchung des Hauptgangs inklusive."
          isOffered
          price="Offert"
        >
          <div className="max-w-sm mx-auto mt-8 space-y-4">
            {[
              { name: 'Google Ranking Guide', value: '49€' },
              { name: 'Social Media Vorlagen', value: '79€' },
              { name: 'SEO Checkliste', value: '29€' },
            ].map((bonus, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-[hsl(var(--rest-border))]">
                <span className="flex items-center gap-2 rest-subtitle">
                  <Gift className="w-4 h-4 text-[hsl(var(--rest-gold))]" />
                  {bonus.name}
                </span>
                <span className="rest-bonus-tag">{bonus.value}</span>
              </div>
            ))}
            <p className="text-center pt-4">
              <span className="rest-subtitle">Gesamtwert: </span>
              <span className="line-through rest-subtitle">157€</span>
              <span className="rest-bonus-tag ml-2">Gratis</span>
            </p>
          </div>
        </MenuCourse>
      </div>

      {/* Course 5: Dessert - Guarantee */}
      <div 
        data-course="5"
        className={`transition-all duration-1000 delay-400 ${visibleCourses.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title="Dessert"
          name="Zufriedenheitsgarantie"
          description="30 Tage Geld-zurück ohne Wenn und Aber. Kein Risiko, nur Genuss."
        >
          <div className="flex items-center justify-center gap-2 mt-6">
            <Shield className="w-5 h-5 text-[hsl(var(--rest-gold))]" />
            <span className="rest-subtitle">100% Risikofrei</span>
          </div>
        </MenuCourse>
      </div>

      {/* Final CTA Section */}
      <section className="py-20 text-center px-4 border-t border-[hsl(var(--rest-border))]">
        <div className="max-w-lg mx-auto">
          <span className="rest-ornament">◇</span>
          <h2 className="rest-headline text-2xl md:text-3xl mt-8 mb-4">
            Bereit für die Reservierung?
          </h2>
          <p className="rest-subtitle mb-10">
            Sichern Sie sich Ihren Platz in der digitalen Spitzenklasse.
          </p>
          
          <button className="rest-cta-button group mb-8">
            <span className="flex items-center gap-3">
              Tisch reservieren
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[hsl(var(--rest-text-muted))]">
            <Phone className="w-4 h-4" />
            <span className="rest-subtitle">Oder rufen Sie uns an</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[hsl(var(--rest-border))]">
        <p className="rest-footer-note">
          Service et taxes inclus
        </p>
        <div className="rest-line mt-6 mb-6" />
        <Link 
          to="/" 
          className="rest-subtitle hover:text-[hsl(var(--rest-gold))] transition-colors"
        >
          ← Zurück zur Hauptseite
        </Link>
      </footer>
    </div>
  );
};

export default MichelinLayout;
