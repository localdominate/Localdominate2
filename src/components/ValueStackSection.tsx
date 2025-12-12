import { Rocket, QrCode, FileText, Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ValueStackSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Rocket,
      title: t.valueStack.items[0].title,
      text: t.valueStack.items[0].text,
      value: t.valueStack.items[0].value,
    },
    {
      icon: QrCode,
      title: t.valueStack.items[1].title,
      text: t.valueStack.items[1].text,
      value: t.valueStack.items[1].value,
    },
    {
      icon: FileText,
      title: t.valueStack.items[2].title,
      text: t.valueStack.items[2].text,
      value: t.valueStack.items[2].value,
    },
    {
      icon: Shield,
      title: t.valueStack.items[3].title,
      text: t.valueStack.items[3].text,
      value: t.valueStack.items[3].value,
    },
  ];

  return (
    <section className="bg-background py-20 px-4">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            {t.valueStack.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            {t.valueStack.headline}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-black text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.text}
              </p>
              <p className="text-sm text-muted-foreground/60 font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Total Value Line */}
        <div className="text-center bg-muted p-6 md:p-8 border-4 border-foreground">
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            {t.valueStack.totalLabel}{" "}
            <span className="line-through font-bold">{t.valueStack.totalValue}</span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-primary">
            {t.valueStack.todayPrice}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
