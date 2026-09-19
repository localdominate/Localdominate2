import { Rocket, QrCode, FileText, Shield, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import ValueComparisonBar from "@/components/ValueComparisonBar";
import { PACKAGE_VALUE_EUR, STANDARD_PRICE_EUR } from "@/lib/stripe";

const ValueStackSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const icons = [Rocket, QrCode, FileText, Shield];

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-6xl">
        {/* Section header */}
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.valueStack.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.valueStack.headline}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Featured item - spans 2 columns on large screens */}
          <div 
            className={`relative bento-item lg:col-span-2 lg:row-span-1 flex flex-col justify-between reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          >
            {/* Included Badge */}
            <div className="absolute -top-3 right-6 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Check className="w-3 h-3" />
              {t.valueStack.includedBadge}
            </div>
            
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {t.valueStack.items[0].title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                {t.valueStack.items[0].text}
              </p>
            </div>
            
            {/* Value Display */}
            <div className="flex items-center gap-3">
              <span className="text-lg text-muted-foreground line-through">
                {t.valueStack.items[0].value}
              </span>
              <span className="bg-success/20 text-success font-bold px-3 py-1 rounded-lg text-sm">
                {t.valueStack.freeLabel}
              </span>
            </div>
          </div>

          {/* Other items */}
          {t.valueStack.items.slice(1).map((item, index) => {
            const Icon = icons[index + 1];
            return (
              <div
                key={index}
                className={`relative bento-item flex flex-col justify-between reveal reveal-delay-${index + 2} ${isVisible ? 'visible' : ''}`}
              >
                {/* Included Badge */}
                <div className="absolute -top-3 right-6 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  {t.valueStack.includedBadge}
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.text}
                  </p>
                </div>
                
                {/* Value Display */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">
                    {item.value}
                  </span>
                  <span className="bg-success/20 text-success font-bold px-2 py-0.5 rounded text-xs">
                    {t.valueStack.freeLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Comparison Bar */}
        <div className={`mb-8 reveal reveal-delay-5 ${isVisible ? 'visible' : ''}`}>
          <ValueComparisonBar totalValue={PACKAGE_VALUE_EUR} yourPrice={STANDARD_PRICE_EUR} />
        </div>

        {/* Total Value Line */}
        <div className={`text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 md:p-10 rounded-3xl border border-primary/20 reveal reveal-delay-5 ${isVisible ? 'visible' : ''}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-3">
            {t.valueStack.totalLabel}{" "}
            <span className="line-through font-semibold">{t.valueStack.totalValue}</span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {t.valueStack.todayPrice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
