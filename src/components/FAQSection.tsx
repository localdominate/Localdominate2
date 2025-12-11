import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Brauche ich Zugang zu meinem Google-Konto?",
    answer: "Ja, du gewährst uns temporären Zugang zu deinem Google Business Profil. Das ist 100% sicher – wir arbeiten nach DSGVO-Standards und du kannst den Zugang jederzeit widerrufen. Ohne Zugang können wir die Optimierungen nicht durchführen.",
  },
  {
    question: "Funktioniert das für meine Branche?",
    answer: "Ja, wenn du ein lokales Geschäft betreibst und Kunden aus deiner Region anziehen willst. Egal ob Handwerker, Arztpraxis, Restaurant, Friseur, Anwalt oder Fitnessstudio – das System funktioniert branchenübergreifend.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Die meisten Kunden sehen erste Ranking-Verbesserungen innerhalb von 14-21 Tagen. Die volle Wirkung entfaltet sich nach etwa 4-6 Wochen, wenn Google alle Änderungen indexiert hat.",
  },
  {
    question: "Was passiert, wenn es nicht funktioniert?",
    answer: "Dann bekommst du dein Geld zurück. Punkt. Wir haben eine 30-Tage Geld-zurück-Garantie ohne Wenn und Aber. Wenn du nicht mehr Anrufe bekommst, schreibst du uns eine E-Mail und wir erstatten dir den vollen Betrag.",
  },
  {
    question: "Ist das nicht einfach SEO?",
    answer: "Nein. Klassische SEO-Agenturen verkaufen dir monatelange Verträge für Websites. Wir fokussieren uns laser-scharf auf Google Maps – den Ort, wo 86% aller lokalen Suchanfragen enden. Unterschiedliches Spielfeld, unterschiedliche Regeln.",
  },
  {
    question: "Muss ich technisch versiert sein?",
    answer: "Überhaupt nicht. Wir machen die gesamte technische Arbeit. Du musst nur den Zugang bereitstellen und unserer Video-Anleitung für den 5-Sterne-Automatismus folgen. Das kann wirklich jeder.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="container max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Häufige Fragen (ehrlich beantwortet)
          </h2>
        </div>
        
        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
