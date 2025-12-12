import { Skull, Star, Flame } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Skull, Star, Flame];

const PainSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-pain py-20 px-4">
      <div className="container max-w-5xl">
        {/* Section headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pain-foreground text-center mb-4">
          {t.pain.headline}
        </h2>
        <p className="text-pain-foreground/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          {t.pain.subheadline}
        </p>
        
        {/* Pain boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.pain.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="bg-pain-foreground/5 border border-pain-foreground/20 p-8 hover:border-primary/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-black text-pain-foreground mb-4">
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
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-black text-primary">
            {t.pain.bottomPunch}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
