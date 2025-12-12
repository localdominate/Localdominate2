import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";

const FinalCTASection = () => {
  return (
    <section className="bg-pain py-20 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pain-foreground mb-6">
          Die Frage ist nicht <span className="text-primary">ob</span>, sondern <span className="text-primary">wann</span> du handelst.
        </h2>
        
        <p className="text-xl text-pain-foreground/80 max-w-2xl mx-auto mb-10">
          Jeden Tag, an dem du wartest, rufen Kunden bei deiner Konkurrenz an. 
          Du kannst das ändern. Heute.
        </p>
        
        <div className="flex justify-center">
          <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto max-w-md">
            <span className="hidden sm:inline">Jetzt Local Dominator starten (299€)</span>
            <span className="sm:hidden">Jetzt starten (299€)</span>
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <TrustBadges />
        
        <p className="text-pain-foreground/60 text-sm mt-4">
          30-Tage Geld-zurück-Garantie • Einmalzahlung • Sofort-Zugang
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
