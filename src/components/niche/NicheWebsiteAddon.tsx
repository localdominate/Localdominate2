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
      {/* Intro */}
      <div className="text-center mb-10">
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Optional Add-On</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Complete online presence – if you want it
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          We don't just bring clients. We can also make sure your {service} looks exactly how it should online.
        </p>
      </div>

      {/* Options indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
          <Monitor className="w-4 h-4" />
          Visibility system
          <span className="text-xs opacity-70">(main)</span>
        </div>
        <span className="text-muted-foreground text-sm">+</span>
        <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground">
          <Globe className="w-4 h-4" />
          Website
          <span className="text-xs opacity-70">(optional)</span>
        </div>
      </div>

      {/* Website Offer Card */}
      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-lg mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Need a modern website for your {service}?
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          We build high-quality {nicheLabel.toLowerCase()} websites – simple, fast, and ready to use.
        </p>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-sm text-muted-foreground">Starting from</span>
        </div>
        <div className="text-3xl md:text-4xl font-bold mb-6">€699</div>

        <div className="space-y-2.5 mb-6">
          {[
            "Modern, premium design",
            "Mobile optimized",
            "Fast loading",
            "Integrated booking options",
            "Ready-to-use structure",
            "Basic branding setup",
            "Built for Google visibility",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[hsl(var(--success))] flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Everything your {service} needs to look professional online – without complexity.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="lg" className="group flex-1" onClick={onRequestClick}>
            Request website
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="flex-1" onClick={onRequestClick}>
            See example website
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Delivered as a complete setup – no technical work needed from your side.
        </p>
      </div>
    </div>
  </section>
);

export default NicheWebsiteAddon;
