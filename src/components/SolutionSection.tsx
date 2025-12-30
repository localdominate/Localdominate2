import { Syringe, Eye, Star, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const icons = [Syringe, Eye, Star];

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
      className={`solution-card relative p-8 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 ${isVisible ? 'visible' : ''}`}
    >
      {/* Phase Number Badge */}
      <div className="solution-badge absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
        Phase {phase.number}
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 pt-4">
        {/* Icon */}
        <div className="solution-icon flex-shrink-0">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-5">
          {/* Title & Subtitle */}
          <div className="solution-title">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {phase.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {phase.subtitle}
            </p>
          </div>
          
          {/* Hook - Bold One-Liner */}
          <p className="solution-hook text-xl md:text-2xl font-semibold text-primary">
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
                <span className="text-foreground/80 text-lg">{bullet}</span>
              </li>
            ))}
          </ul>
          
          {/* Result Badge */}
          <div className="solution-result flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-medium">{phase.result}</span>
          </div>
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
              delayOffset={index * 400}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
