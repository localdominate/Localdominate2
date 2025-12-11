import { Skull, Star, Flame } from "lucide-react";

const painPoints = [
  {
    icon: Skull,
    title: "Platz 4 ist der Friedhof",
    description: "Wer nicht in den Top 3 (Map-Pack) ist, existiert für Kunden schlicht nicht. 92% aller Klicks gehen an die ersten drei Ergebnisse.",
  },
  {
    icon: Star,
    title: "Bewertungen sind Währung",
    description: "Dein Angebot ist völlig egal, wenn dein Nachbar 50 Sterne mehr hat. Menschen kaufen Vertrauen – nicht Produkte.",
  },
  {
    icon: Flame,
    title: "Geldverbrennung",
    description: "Warum teure Google Ads schalten, wenn du den kostenlosen organischen Traffic komplett liegen lässt? Jeden Tag.",
  },
];

const PainSection = () => {
  return (
    <section className="bg-pain py-20 px-4">
      <div className="container max-w-5xl">
        {/* Section headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-pain-foreground text-center mb-4">
          Die brutale Wahrheit über lokale Geschäfte:
        </h2>
        <p className="text-pain-foreground/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          (Die dir keiner erzählt, weil alle davon profitieren, dass du unsichtbar bleibst)
        </p>
        
        {/* Pain boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-pain-foreground/5 border border-pain-foreground/20 p-8 hover:border-primary/50 transition-colors"
            >
              <point.icon className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-xl md:text-2xl font-black text-pain-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-pain-foreground/80 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom punch */}
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-black text-primary">
            Wie viele Kunden hast du HEUTE verloren?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
