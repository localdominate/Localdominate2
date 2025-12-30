import { Shield, RefreshCw, MessageCircle, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const icons = [RefreshCw, MessageCircle, CheckCircle];

const GuaranteeSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-4xl">
        {/* Header */}
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-success" />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {t.guarantee.headline}
          </h3>
          <p className="text-lg text-muted-foreground">
            {t.guarantee.subheadline}
          </p>
        </div>
        
        {/* Guarantee Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {t.guarantee.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className={`text-center p-6 bg-success/5 border border-success/20 rounded-2xl reveal reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-success/20 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-success" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {point.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Punch */}
        <div className={`text-center reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="text-xl md:text-2xl font-bold text-primary">
            {t.guarantee.onlyRisk}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
