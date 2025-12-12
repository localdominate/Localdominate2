import { Syringe, Eye, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const icons = [Syringe, Eye, Star];

const SolutionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-5xl">
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.solution.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.solution.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.solution.subheadline}
          </p>
        </div>
        
        {/* Phases */}
        <div className="space-y-6">
          {t.solution.phases.map((phase, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 p-8 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-7xl font-bold text-primary/20">
                    {phase.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
