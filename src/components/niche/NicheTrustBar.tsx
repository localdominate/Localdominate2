import { Shield, Award, Clock, Users } from "lucide-react";

const NicheTrustBar = () => (
  <section className="border-y border-border/30 bg-muted/30 px-4 py-6">
    <div className="container max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { icon: Shield, label: "30 Tage Garantie", sub: "Geld zurück – ohne Fragen" },
          { icon: Award, label: "Google-zertifiziert", sub: "Offizielle Partner-Tools" },
          { icon: Users, label: "120+ Salons", sub: "Bereits betreut" },
          { icon: Clock, label: "In 48h startklar", sub: "Schnelle Einrichtung" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground leading-tight">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheTrustBar;
