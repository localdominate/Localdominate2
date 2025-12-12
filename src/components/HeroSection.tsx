import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrustBadges from "@/components/TrustBadges";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
      <div className="container max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-6 animate-pulse">
          ⚠️ ACHTUNG AN UNTERNEHMER IN DEINER REGION ⚠️
        </p>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-6">
          Während du das liest, ruft dein nächster Kunde gerade bei{" "}
          <span className="text-primary">deiner Konkurrenz</span> an.
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Du bist auf Google Maps <span className="font-bold text-foreground">unsichtbar</span>. 
          Deine Konkurrenten stehen oben. <span className="font-bold text-foreground">Schluss damit.</span> 
          {" "}Wir katapultieren dich in die Top 3 – zum Festpreis.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto">
          <Button variant="cta" size="ctaLarge" className="group w-full sm:w-auto">
            <span className="hidden sm:inline">Jetzt Marktherrschaft sichern (299€)</span>
            <span className="sm:hidden">Jetzt starten (299€)</span>
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* Trust text */}
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
            <span className="inline-block w-4 h-4 bg-success rounded-full"></span>
            100% Geld-zurück-Garantie • Kein Risiko
          </p>
          
          {/* Trust Badges */}
          <TrustBadges />
        </div>
        
        {/* Urgency element */}
        <div className="mt-12 inline-block bg-highlight/20 border-2 border-highlight px-6 py-3">
          <p className="text-sm font-bold text-foreground">
            🔥 NUR NOCH <span className="text-primary">7 PLÄTZE</span> DIESEN MONAT VERFÜGBAR
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
