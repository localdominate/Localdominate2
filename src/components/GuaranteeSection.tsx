import { Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const GuaranteeSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-3xl">
        <div className={`flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-3xl border-2 border-success/30 bg-gradient-to-br from-success/5 to-success/10 reveal ${isVisible ? 'visible' : ''}`}>
          {/* Shield Icon with animation */}
          <div className="flex-shrink-0">
            <div className={`w-24 h-24 md:w-28 md:h-28 bg-success/20 rounded-2xl flex items-center justify-center transition-transform duration-700 ${isVisible ? 'animate-bounce-subtle' : ''}`}>
              <Shield className={`w-12 h-12 md:w-14 md:h-14 text-success transition-all duration-500 ${isVisible ? 'scale-110' : 'scale-100'}`} />
            </div>
          </div>
          
          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.guarantee.headline}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.guarantee.text} <span className="font-semibold text-foreground">{t.guarantee.textBold1}</span> {t.guarantee.textMid}{" "}
              <span className="font-semibold text-foreground">{t.guarantee.textBold2}</span>{t.guarantee.textEnd}
            </p>
            <p className="text-xl font-bold text-primary mt-4">
              {t.guarantee.onlyRisk}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
