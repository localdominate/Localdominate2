import { Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const GuaranteeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 px-4">
      <div className="container max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 border-4 border-success bg-success/5">
          {/* Shield Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-success rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-success-foreground" />
            </div>
          </div>
          
          {/* Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              {t.guarantee.headline}
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.guarantee.text} <span className="font-bold">{t.guarantee.textBold1}</span> {t.guarantee.textMid}{" "}
              <span className="font-bold">{t.guarantee.textBold2}</span>{t.guarantee.textEnd}
            </p>
            <p className="text-xl font-black text-primary mt-4">
              {t.guarantee.onlyRisk}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
