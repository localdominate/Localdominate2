import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const FAQSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background-alt section-padding px-4">
      <div ref={ref} className="container max-w-3xl">
        {/* Section header */}
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.faq.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.faq.headline}
          </h2>
        </div>
        
        {/* Accordion - touch-optimized */}
        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className={`bg-card border border-border/50 rounded-xl px-4 md:px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all reveal reveal-delay-${Math.min(index + 1, 5)} ${isVisible ? 'visible' : ''}`}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline hover:text-primary py-4 md:py-5 min-h-[56px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
