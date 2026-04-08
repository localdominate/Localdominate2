import { Check, ArrowRight, Globe, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  service: string;
  nicheLabel: string;
  onRequestClick: () => void;
}

const NicheWebsiteAddon = ({ service, nicheLabel, onRequestClick }: Props) => (
  <section className="bg-muted/50 border-t border-border/30 px-4 py-16 md:py-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-10">
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Optionales Add-On</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Kompletter Online-Auftritt – wenn du möchtest
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Wir bringen nicht nur Kunden. Wir sorgen auch dafür, dass dein {service} online genau so aussieht, wie er sollte.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
          <Monitor className="w-4 h-4" />
          Sichtbarkeits-System
          <span className="text-xs opacity-70">(Haupt)</span>
        </div>
        <span className="text-muted-foreground text-sm">+</span>
        <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
          <Globe className="w-4 h-4" />
          Website
          <span className="text-xs opacity-70">(optional)</span>
        </div>
      </div>
      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-lg mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Du brauchst auch eine moderne Website?
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Wir erstellen hochwertige {nicheLabel.toLowerCase()}-Websites – einfach, schnell und professionell.
        </p>
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-sm text-muted-foreground">Ab</span>
        </div>
        <div className="text-3xl md:text-4xl font-bold mb-6">€699</div>
        <div className="space-y-2.5 mb-6">
          {[
            "Modernes, hochwertiges Design",
            "Mobil optimiert",
            "Schnelle Ladezeiten",
            "Integrierte Buchungsmöglichkeiten",
            "Klare, fertige Struktur",
            "Basis Branding (Farben, Layout)",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[hsl(var(--success))] flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Alles, was dein {service} online braucht – ohne technischen Aufwand.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="lg" className="group flex-1" onClick={onRequestClick}>
            Website anfragen
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="flex-1" onClick={onRequestClick}>
            Beispiel ansehen
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Komplett fertig eingerichtet – kein technischer Aufwand für dich.
        </p>
      </div>
    </div>
  </section>
);

export default NicheWebsiteAddon;
