import { Skull, Star, Flame } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const icons = [Skull, Star, Flame];

const PainSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-pain section-padding px-4">
      <div ref={ref} className="container max-w-5xl">
        {/* Section headline */}
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pain-foreground text-center mb-4">
            {t.pain.headline}
          </h2>
          <p className="text-pain-foreground/70 text-center text-lg mb-16 max-w-2xl mx-auto">
            {t.pain.subheadline}
          </p>
        </div>
        
        {/* Pain boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.pain.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className={`bg-pain-foreground/5 border border-pain-foreground/10 rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <Icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-bold text-pain-foreground mb-4">
                  {point.title}
                </h3>
                <p className="text-pain-foreground/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom punch */}
        <div className={`text-center mt-16 reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            {t.pain.bottomPunch}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
