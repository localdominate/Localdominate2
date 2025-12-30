import { useEffect, useRef, useState } from "react";
import { Skull, Star, Flame, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useAnimatedCounter from "@/hooks/useAnimatedCounter";

const icons = [Skull, Star, Flame];

// Extract numeric value and suffix from stat string
const parseStatValue = (stat: string): { value: number; suffix: string; decimals: number } => {
  const match = stat.match(/^([\d.]+)(.*)$/);
  if (match) {
    const value = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes('.') ? 1 : 0;
    return { value, suffix, decimals };
  }
  return { value: 0, suffix: '', decimals: 0 };
};

// Individual animated counter component
const AnimatedStat = ({ stat }: { stat: string }) => {
  const { value, suffix, decimals } = parseStatValue(stat);
  const { formattedValue, ref, isVisible } = useAnimatedCounter({
    end: value,
    duration: 2000,
    decimals,
    suffix
  });

  return (
    <span 
      ref={ref} 
      className={`text-3xl md:text-4xl font-bold text-destructive ${isVisible ? 'animate-count-pulse' : ''}`}
    >
      {formattedValue}
    </span>
  );
};

// Individual pain card with its own visibility tracking
const PainCard = ({ 
  point, 
  index, 
  delayOffset = 0 
}: { 
  point: { title: string; stat: string; statLabel: string; bullets: string[] }; 
  index: number;
  delayOffset?: number;
}) => {
  const Icon = icons[index];
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add staggered delay based on card index
          setTimeout(() => {
            setIsVisible(true);
          }, delayOffset);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayOffset]);

  return (
    <div 
      ref={cardRef}
      className={`pain-card bg-pain-foreground/5 border border-pain-foreground/10 rounded-2xl p-8 
                  hover:border-destructive/30 hover:-translate-y-1 hover:bg-pain-foreground/8
                  transition-all duration-300 group ${isVisible ? 'visible' : ''}`}
    >
      {/* Icon with pop animation */}
      <div className="pain-icon mb-6">
        <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/20 
                        flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
          <Icon className="w-7 h-7 text-destructive" strokeWidth={1.5} />
        </div>
      </div>
      
      {/* Title with fade */}
      <h3 className="pain-title text-xl md:text-2xl font-bold text-pain-foreground mb-5">
        {point.title}
      </h3>
      
      {/* Statistic Badge with glow and counter */}
      <div className="pain-stat-badge inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 
                      bg-destructive/15 border border-destructive/30 rounded-xl px-5 py-3 mb-6
                      animate-glow-pulse-red">
        <AnimatedStat stat={point.stat} />
        <span className="text-sm text-pain-foreground/70 font-medium">
          {point.statLabel}
        </span>
      </div>
      
      {/* Bullets with staggered slide-in */}
      <ul className="space-y-3">
        {point.bullets.map((bullet, bulletIndex) => (
          <li 
            key={bulletIndex}
            className="pain-bullet flex items-start gap-3"
          >
            <div className="mt-1 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-3 h-3 text-destructive" />
            </div>
            <span className="text-pain-foreground/80 text-sm leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PainSection = () => {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(headerElement);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(headerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bottomElement = bottomRef.current;
    if (!bottomElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBottomVisible(true);
          observer.unobserve(bottomElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(bottomElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-pain section-padding px-4 overflow-hidden">
      <div className="container max-w-5xl">
        {/* Section headline with reveal */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pain-foreground mb-4">
            {t.pain.headline}
          </h2>
          <p 
            className={`text-pain-foreground/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            {t.pain.subheadline}
          </p>
        </div>
        
        {/* Pain cards with individual observers and staggered delays */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.pain.points.map((point, index) => (
            <PainCard 
              key={index} 
              point={point} 
              index={index}
              delayOffset={index * 200} // 200ms stagger between cards
            />
          ))}
        </div>
        
        {/* Bottom punch with dramatic entrance */}
        <div 
          ref={bottomRef}
          className={`pain-bottom-punch text-center mt-16 ${bottomVisible ? 'visible' : ''}`}
        >
          <div className="inline-block">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary animate-pulse">
              {t.pain.bottomPunch}
            </p>
            <div className="h-1 w-24 bg-primary/50 mx-auto mt-4 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
