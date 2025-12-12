import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-muted py-20 px-4">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            {t.faq.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            {t.faq.headline}
          </h2>
        </div>
        
        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border-2 border-border px-6 data-[state=open]:border-primary"
            >
              <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-6">
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
