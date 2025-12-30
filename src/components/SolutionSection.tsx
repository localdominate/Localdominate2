import { Syringe, Eye, Star, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";
import KeywordAnimation from "./solution/KeywordAnimation";
import GalleryAnimation from "./solution/GalleryAnimation";
import StarAnimation from "./solution/StarAnimation";

const icons = [Syringe, Eye, Star];
const animations = [KeywordAnimation, GalleryAnimation, StarAnimation];

// Individual Phase Card with its own observer
const PhaseCard = ({ 
  phase, 
  index, 
  delayOffset = 0 
}: { 
  phase: { number: string; title: string; subtitle: string; hook: string; bullets: string[]; result: string };
  index: number;
  delayOffset: number;
}) => {
  const Icon = icons[index];
  const AnimationComponent = animations[index];
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayOffset);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delayOffset]);

  return (
    <div 
      ref={cardRef}
      className={`solution-card relative p-6 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 ${isVisible ? 'visible' : ''}`}
    >
      {/* Phase Number Badge */}
      <div className="solution-badge absolute -top-4 left-6 md:left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
        Phase {phase.number}
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-4">
        {/* Left: Content */}
        <div className="flex-1 space-y-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="solution-icon flex-shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
            
            {/* Title & Subtitle */}
            <div className="solution-title flex-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {phase.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {phase.subtitle}
              </p>
            </div>
          </div>
          
          {/* Hook - Bold One-Liner */}
          <p className="solution-hook text-lg md:text-xl lg:text-2xl font-semibold text-primary">
            "{phase.hook}"
          </p>
          
          {/* Bullet Points */}
          <ul className="space-y-3">
            {phase.bullets.map((bullet, bulletIndex) => (
              <li 
                key={bulletIndex}
                className="solution-bullet flex items-start gap-3"
                style={{ '--bullet-index': bulletIndex } as React.CSSProperties}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <span className="text-foreground/80 text-base md:text-lg">{bullet}</span>
              </li>
            ))}
          </ul>
          
          {/* Result Badge */}
          <div className="solution-result flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl p-4">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-medium text-sm md:text-base">{phase.result}</span>
          </div>
        </div>
        
        {/* Right: Animation Visual */}
        <div className={`lg:w-[340px] flex-shrink-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <AnimationComponent />
        </div>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-5xl">
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="solution-eyebrow text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.solution.eyebrow}
          </p>
          <h2 className="solution-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.solution.headline}
          </h2>
          <p className="solution-subheadline text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.solution.subheadline}
          </p>
        </div>
        
        {/* Phases */}
        <div className="space-y-8">
          {t.solution.phases.map((phase, index) => (
            <PhaseCard 
              key={index}
              phase={phase}
              index={index}
              delayOffset={index * 1200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
