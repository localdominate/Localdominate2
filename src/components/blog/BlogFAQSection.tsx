import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQSectionProps {
  faqs: FAQItem[];
}

const BlogFAQSection = ({ faqs }: BlogFAQSectionProps) => {
  return (
    <div className="my-8">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card border border-border/50 rounded-xl px-4 md:px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
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
  );
};

export default BlogFAQSection;
