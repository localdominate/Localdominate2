import { Rocket, QrCode, FileText, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const ValueStackSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const items = [
    {
      icon: Rocket,
      title: t.valueStack.items[0].title,
      text: t.valueStack.items[0].text,
      value: t.valueStack.items[0].value,
      featured: true,
    },
    {
      icon: QrCode,
      title: t.valueStack.items[1].title,
      text: t.valueStack.items[1].text,
      value: t.valueStack.items[1].value,
      featured: false,
    },
    {
      icon: FileText,
      title: t.valueStack.items[2].title,
      text: t.valueStack.items[2].text,
      value: t.valueStack.items[2].value,
      featured: false,
    },
    {
      icon: Shield,
      title: t.valueStack.items[3].title,
      text: t.valueStack.items[3].text,
      value: t.valueStack.items[3].value,
      featured: false,
    },
  ];

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
            className={`bento-item lg:col-span-2 lg:row-span-1 flex flex-col justify-between reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          >
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {items[0].title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                {items[0].text}
              </p>
            </div>
            <p className="text-sm text-muted-foreground/70 font-medium">
              {items[0].value}
            </p>
          </div>

          {/* Other items */}
          {items.slice(1).map((item, index) => (
            <div
              key={index}
              className={`bento-item flex flex-col justify-between reveal reveal-delay-${index + 2} ${isVisible ? 'visible' : ''}`}
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.text}
                </p>
              </div>
              <p className="text-sm text-muted-foreground/60 font-medium">
                {item.value}
              </p>
            </div>
          ))}
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
