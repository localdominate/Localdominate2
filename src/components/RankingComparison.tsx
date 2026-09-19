import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { MapPin, Star, Phone, Navigation, Clock, TrendingUp, PhoneCall, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setCount(end);
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{isVisible ? count : end}{suffix}</span>;
};

const GoogleLocalPackResult = ({ 
  name, 
  rating, 
  reviews, 
  isHighlighted = false, 
  position,
  isYourBusiness = false,
  isHidden = false,
  t
}: { 
  name: string; 
  rating: number; 
  reviews: number; 
  isHighlighted?: boolean;
  position: number;
  isYourBusiness?: boolean;
  isHidden?: boolean;
  t: any;
}) => {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
      isHighlighted 
        ? 'bg-gradient-to-r from-success/20 to-success/5 border-2 border-success shadow-lg shadow-success/20 scale-[1.02]' 
        : isHidden 
          ? 'opacity-40 bg-muted/30' 
          : 'bg-card/50 hover:bg-card/80'
    }`}>
      {/* Position Badge */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isHighlighted 
          ? 'bg-success text-success-foreground' 
          : isHidden
            ? 'bg-destructive/50 text-destructive-foreground'
            : 'bg-primary/20 text-primary'
      }`}>
        {position}
      </div>
      
      {/* Business Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold truncate ${isHighlighted ? 'text-success' : isHidden ? 'text-muted-foreground' : 'text-foreground'}`}>
            {name}
          </span>
          {isYourBusiness && (
            <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
              isHighlighted 
                ? 'bg-success text-success-foreground' 
                : 'bg-destructive/20 text-destructive'
            }`}>
              {isHighlighted ? t.ranking.nowTop3 : t.ranking.notVisible}
            </span>
          )}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className={`text-sm font-medium ${isHidden ? 'text-muted-foreground' : 'text-foreground'}`}>{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        
        {/* Status */}
        <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {t.ranking.openNow}
          </span>
          <span>0.3 km</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      {isHighlighted && (
        <div className="flex gap-2 flex-shrink-0">
          <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <Navigation className="w-4 h-4 text-primary" />
          </button>
          <button className="p-2 rounded-full bg-success/10 hover:bg-success/20 transition-colors">
            <Phone className="w-4 h-4 text-success" />
          </button>
        </div>
      )}
    </div>
  );
};

const RankingComparison = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden"
      aria-labelledby="ranking-comparison-title"
    >
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t.ranking.eyebrow}
          </span>
          <h2 id="ranking-comparison-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.ranking.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.ranking.tagline}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t.ranking.sampleLabel}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto relative">
          
          {/* BEFORE Card */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded-full shadow-lg">
                <XCircle className="w-4 h-4" />
                {t.ranking.before}
              </span>
            </div>
            
            <div className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden h-full">
              {/* Google Search Header */}
              <div className="bg-muted/50 p-4 border-b border-border/50">
                <div className="flex items-center gap-3 bg-background rounded-full px-4 py-2.5 border border-border">
                  <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-muted-foreground">{t.ranking.searchQuery}</span>
                </div>
              </div>
              
              {/* Local Pack Results */}
              <div className="p-4 space-y-2">
                <GoogleLocalPackResult 
                  name={t.ranking.competitor1} 
                  rating={4.6} 
                  reviews={187} 
                  position={1}
                  t={t}
                />
                <GoogleLocalPackResult 
                  name={t.ranking.competitor2} 
                  rating={4.4} 
                  reviews={142} 
                  position={2}
                  t={t}
                />
                <GoogleLocalPackResult 
                  name={t.ranking.competitor3} 
                  rating={4.3} 
                  reviews={98} 
                  position={3}
                  t={t}
                />
                
                {/* Separator */}
                <div className="flex items-center gap-2 py-2 text-xs text-muted-foreground">
                  <div className="flex-1 h-px bg-border"></div>
                  <span>... {t.ranking.moreResults} ...</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                
                {/* Your Business - Hidden */}
                <GoogleLocalPackResult 
                  name={t.ranking.yourBusiness} 
                  rating={4.1} 
                  reviews={23} 
                  position={8}
                  isYourBusiness={true}
                  isHidden={true}
                  t={t}
                />
              </div>
              
              {/* Stats Panel */}
              <div className="bg-destructive/5 border-t border-destructive/20 p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-destructive">#8</div>
                    <div className="text-xs text-muted-foreground">{t.ranking.position}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-destructive">5%</div>
                    <div className="text-xs text-muted-foreground">{t.ranking.visibility}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-destructive">3</div>
                    <div className="text-xs text-muted-foreground">{t.ranking.calls}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow between cards - Desktop only */}
          <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg shadow-primary/30 animate-bounce">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>

          {/* AFTER Card */}
          <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-success text-success-foreground text-sm font-semibold rounded-full shadow-lg animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                {t.ranking.after}
              </span>
            </div>
            
            <div className="bg-card border-2 border-success/30 rounded-2xl shadow-xl shadow-success/10 overflow-hidden relative h-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-primary/5 pointer-events-none"></div>
              
              {/* Google Search Header */}
              <div className="bg-muted/50 p-4 border-b border-border/50 relative">
                <div className="flex items-center gap-3 bg-background rounded-full px-4 py-2.5 border border-border">
                  <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-muted-foreground">{t.ranking.searchQuery}</span>
                </div>
              </div>
              
              {/* Local Pack Results */}
              <div className="p-4 space-y-2 relative">
                {/* Your Business - TOP 1! */}
                <GoogleLocalPackResult 
                  name={t.ranking.yourBusiness} 
                  rating={4.9} 
                  reviews={156} 
                  position={1}
                  isYourBusiness={true}
                  isHighlighted={true}
                  t={t}
                />
                <GoogleLocalPackResult 
                  name={t.ranking.competitor1} 
                  rating={4.6} 
                  reviews={187} 
                  position={2}
                  t={t}
                />
                <GoogleLocalPackResult 
                  name={t.ranking.competitor3} 
                  rating={4.4} 
                  reviews={142} 
                  position={3}
                  t={t}
                />
              </div>
              
              {/* Stats Panel - Success */}
              <div className="bg-success/5 border-t border-success/20 p-4 relative">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">
                      <AnimatedCounter end={1} duration={1500} prefix="#" />
                    </div>
                    <div className="text-xs text-muted-foreground">{t.ranking.position}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">
                      <AnimatedCounter end={95} duration={2000} suffix="%" />
                    </div>
                    <div className="text-xs text-muted-foreground">{t.ranking.visibility}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">
                      <AnimatedCounter end={47} duration={2500} />
                    </div>
                    <div className="text-xs text-muted-foreground">{t.ranking.calls}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Summary */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-card border border-border/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-success/10">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t.ranking.avgImprovement}</div>
                <div className="text-2xl font-bold text-success">847% {t.ranking.moreVisibility}</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <PhoneCall className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t.ranking.avgIncrease}</div>
                <div className="text-2xl font-bold text-primary">+1.467 % {t.ranking.moreCalls}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingComparison;
