import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Check, Gift, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import MenuCourse from '../michelin/MenuCourse';
import MichelinTimer from '../michelin/MichelinTimer';
import MichelinFeatureList from '../michelin/MichelinFeatureList';
import MichelinPriceBadge from '../michelin/MichelinPriceBadge';

const MichelinLayout = () => {
  const { t } = useLanguage();
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
    { name: t.restaurant.platPrincipal.features.premiumWebsite, value: t.restaurant.platPrincipal.features.included },
    { name: t.restaurant.platPrincipal.features.googleMaps, value: t.restaurant.platPrincipal.features.included },
    { name: t.restaurant.platPrincipal.features.mobileMenu, value: t.restaurant.platPrincipal.features.included },
    { name: t.restaurant.platPrincipal.features.support, value: t.restaurant.platPrincipal.features.included },
    { name: t.restaurant.platPrincipal.features.updates, value: t.restaurant.platPrincipal.features.included },
  ];

  return (
    <div className="rest-page min-h-screen">
      {/* Header */}
      <header className="py-16 text-center">
        <p className="rest-title mb-6">{t.restaurant.degustation}</p>
        <div className="rest-hairline" />
      </header>

      {/* Section Divider */}
      <div className="rest-section-divider" />

      {/* Menu Introduction */}
      <section className="py-12 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="rest-diamond mb-10">
            <span>◇</span>
          </div>
          <h1 className="rest-headline text-3xl md:text-4xl mb-8">
            {t.restaurant.headline}
          </h1>
          <p className="rest-subtitle text-base leading-relaxed max-w-md mx-auto">
            {t.restaurant.subtitle}
          </p>
          <div className="rest-hairline mt-12" />
        </div>
      </section>

      {/* Course 1: Amuse-Bouche */}
      <div 
        data-course="1" 
        className={`transition-all duration-1000 ${visibleCourses.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title={t.restaurant.amuseBouche.title}
          name={t.restaurant.amuseBouche.name}
          description={t.restaurant.amuseBouche.description}
          isOffered
          price={t.restaurant.amuseBouche.price}
        >
          <div className="flex items-center justify-center gap-8 mt-8 text-sm">
            <span className="rest-subtitle flex items-center gap-2">
              <Clock className="w-4 h-4 text-[hsl(var(--rest-gold)_/_0.7)]" /> {t.restaurant.amuseBouche.duration}
            </span>
            <span className="rest-subtitle flex items-center gap-2">
              <Check className="w-4 h-4 text-[hsl(var(--rest-gold)_/_0.7)]" /> {t.restaurant.amuseBouche.nonBinding}
            </span>
          </div>
        </MenuCourse>
      </div>

      {/* Elegant Divider */}
      <div className="rest-text-divider">
        <span>{t.restaurant.leParcours}</span>
      </div>

      {/* Course 2: Entrée */}
      <div 
        data-course="2"
        className={`transition-all duration-1000 delay-100 ${visibleCourses.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title={t.restaurant.entree.title}
          name={t.restaurant.entree.name}
          description={t.restaurant.entree.description}
          price={t.restaurant.entree.price}
        />
      </div>

      {/* Dots Divider */}
      <div className="rest-dots-minimal">
        <span>·</span>
      </div>

      {/* Course 2.5: Intermezzo - Strategic Marketing Consultation */}
      <div 
        data-course="intermezzo"
        className={`transition-all duration-1000 delay-150 ${visibleCourses.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title={t.restaurant.intermezzo.title}
          name={t.restaurant.intermezzo.name}
          description={t.restaurant.intermezzo.description}
          price={t.restaurant.intermezzo.price}
        >
          <div className="max-w-xs mx-auto mt-8 space-y-3">
            {t.restaurant.intermezzo.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm rest-subtitle">
                <span className="text-[hsl(var(--rest-gold)_/_0.6)]">○</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs rest-subtitle opacity-70">
            {t.restaurant.intermezzo.regularPrice}
          </p>
        </MenuCourse>
      </div>

      {/* Hairline before main course */}
      <div className="py-6">
        <div className="rest-hairline-wide max-w-xs mx-auto" />
      </div>

      {/* Course 3: Plat Principal - THE MAIN OFFER */}
      <div 
        data-course="3"
        className={`transition-all duration-1000 delay-200 ${visibleCourses.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <section className="rest-course rest-course-main py-24 relative">
          {/* Subtle star indicator handled by CSS */}
          
          <p className="rest-course-title mt-4">{t.restaurant.platPrincipal.title}</p>
          <h2 className="rest-course-name text-2xl md:text-3xl">
            {t.restaurant.platPrincipal.name}
          </h2>
          <p className="rest-course-description">
            {t.restaurant.platPrincipal.description}
          </p>

          {/* Timer */}
          <div className="mt-10 mb-6">
            <p className="rest-scarcity-text mb-5">{t.restaurant.platPrincipal.offerEnds}</p>
            <MichelinTimer 
              hours={timeLeft.hours} 
              minutes={timeLeft.minutes} 
              seconds={timeLeft.seconds} 
            />
          </div>

          {/* Price */}
          <MichelinPriceBadge price={49} anchor={99} />

          {/* Features */}
          <div className="max-w-sm mx-auto px-4 mt-8">
            <MichelinFeatureList features={features} />
          </div>

          {/* Chef's Recommendation */}
          <div className="rest-chef-tag mt-10">
            {t.restaurant.platPrincipal.chefRecommendation}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button className="rest-cta-button group">
              <span className="flex items-center gap-3">
                {t.restaurant.platPrincipal.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Scarcity - Subtle */}
          <p className="rest-scarcity-text mt-8">
            {t.restaurant.platPrincipal.scarcity}
          </p>
        </section>
      </div>

      {/* Text Divider */}
      <div className="rest-text-divider">
        <span>{t.restaurant.lesExtras}</span>
      </div>

      {/* Course 4: Fromages - Bonuses */}
      <div 
        data-course="4"
        className={`transition-all duration-1000 delay-300 ${visibleCourses.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title={t.restaurant.fromages.title}
          name={t.restaurant.fromages.name}
          description={t.restaurant.fromages.description}
          isOffered
          price={t.restaurant.fromages.price}
        >
          <div className="max-w-xs mx-auto mt-10 space-y-4">
            {t.restaurant.fromages.bonuses.map((bonus, idx) => (
              <div key={idx} className="flex items-center justify-between py-2.5 border-b border-[hsl(var(--rest-border))]">
                <span className="flex items-center gap-2.5 rest-subtitle text-sm">
                  <Gift className="w-3.5 h-3.5 text-[hsl(var(--rest-gold)_/_0.6)]" />
                  {bonus.name}
                </span>
                <span className="rest-bonus-tag">{bonus.value}</span>
              </div>
            ))}
            <p className="text-center pt-5">
              <span className="rest-subtitle text-sm">{t.restaurant.fromages.totalValue} </span>
              <span className="line-through rest-subtitle text-sm">157€</span>
              <span className="rest-bonus-tag ml-2">{t.restaurant.fromages.free}</span>
            </p>
          </div>
        </MenuCourse>
      </div>

      {/* Hairline Divider */}
      <div className="py-8">
        <div className="rest-hairline-wide max-w-md mx-auto" />
      </div>

      {/* Course 5: Dessert - Guarantee */}
      <div 
        data-course="5"
        className={`transition-all duration-1000 delay-400 ${visibleCourses.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <MenuCourse
          title={t.restaurant.dessert.title}
          name={t.restaurant.dessert.name}
          description={t.restaurant.dessert.description}
        >
          <div className="flex items-center justify-center gap-2.5 mt-8">
            <Shield className="w-4 h-4 text-[hsl(var(--rest-gold)_/_0.6)]" />
            <span className="rest-subtitle text-sm">{t.restaurant.dessert.riskFree}</span>
          </div>
        </MenuCourse>
      </div>

      {/* Final CTA Section */}
      <section className="py-24 text-center px-4">
        <div className="rest-hairline-wide max-w-xs mx-auto mb-16" />
        
        <div className="max-w-md mx-auto">
          <div className="rest-diamond mb-10">
            <span>◇</span>
          </div>
          <h2 className="rest-headline text-xl md:text-2xl mb-6">
            {t.restaurant.finalCta.headline}
          </h2>
          <p className="rest-subtitle mb-12">
            {t.restaurant.finalCta.subtitle}
          </p>
          
          <button className="rest-cta-button group mb-10">
            <span className="flex items-center gap-3">
              {t.restaurant.finalCta.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <div className="flex items-center justify-center gap-2.5 text-[hsl(var(--rest-text-muted))]">
            <Phone className="w-3.5 h-3.5" />
            <span className="rest-subtitle text-sm">{t.restaurant.finalCta.callUs}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <div className="rest-hairline mb-10" />
        <p className="rest-footer-note">
          {t.restaurant.footer.taxNote}
        </p>
        <div className="rest-hairline mt-10 mb-8" />
        <Link 
          to="/" 
          className="rest-subtitle text-sm hover:text-[hsl(var(--rest-gold))] transition-colors duration-300"
        >
          ← {t.restaurant.footer.backToMain}
        </Link>
      </footer>
    </div>
  );
};

export default MichelinLayout;