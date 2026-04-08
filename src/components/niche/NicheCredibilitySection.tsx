import { ShieldCheck, Eye, BarChart3, Handshake } from "lucide-react";

interface Props {
  city: string;
  service: string;
}

const NicheCredibilitySection = ({ city, service }: Props) => (
  <section className="px-4 py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Warum uns vertrauen?</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Wir arbeiten so, wie du es dir wünschst
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Kein Kleingedrucktes. Keine leeren Versprechen. Nur nachvollziehbare Ergebnisse.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            icon: Eye,
            title: "Volle Transparenz",
            desc: `Du siehst jederzeit, was wir machen und welche Ergebnisse dein ${service} erzielt.`,
          },
          {
            icon: ShieldCheck,
            title: "Kein Risiko",
            desc: "30 Tage Geld-zurück-Garantie. Wenn du nicht zufrieden bist, zahlst du nichts.",
          },
          {
            icon: Handshake,
            title: "Keine Vertragsbindung",
            desc: "Du bleibst, weil es funktioniert – nicht wegen eines Vertrags.",
          },
          {
            icon: BarChart3,
            title: "Messbare Ergebnisse",
            desc: `Monatliche Berichte zeigen dir genau, wie viele neue Kunden dein ${service} in ${city} gewinnt.`,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NicheCredibilitySection;
