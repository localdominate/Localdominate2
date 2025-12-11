import { Syringe, Eye, Star } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Syringe,
    title: "Die Keyword-Injektion",
    subtitle: "(Statt SEO)",
    description: "Wir erraten nicht, was deine Kunden suchen. Wir injizieren exakt die umsatzstärksten Suchbegriffe (Zahnarzt Notdienst statt nur Zahnarzt) tief in die Metadaten deines Profils, sodass Google dich als DIE Autorität erkennt.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Der Psycho-Visuelle Anker",
    subtitle: "(Statt Bilder hochladen)",
    description: "Menschen kaufen mit den Augen. Wir strukturieren deine Galerie nach verkaufspsychologischen Mustern, die Vertrauen erzwingen, noch bevor der Kunde den ersten Satz gelesen hat. Dein Profil wird zum digitalen Schaufenster, an dem niemand vorbeigeht.",
  },
  {
    number: "03",
    icon: Star,
    title: "Der 5-Sterne-Automatismus",
    subtitle: "(Statt Bewertungen sammeln)",
    description: "Betteln funktioniert nicht. Wir installieren einen simplen Prozess (QR und Link-Strategie), der zufriedene Kunden psychologisch nudged, dir sofort 5 Sterne zu geben. So baust du eine Festung aus Social Proof, die von der Konkurrenz nicht mehr einzuholen ist.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Die Lösung
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Das 3-Phasen System zur lokalen Dominanz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keine leeren Versprechungen. Keine Buzzwords. Nur ein bewährtes System, das funktioniert.
          </p>
        </div>
        
        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 bg-card border-2 border-border hover:border-primary/30 transition-colors"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl font-black text-primary/20">
                  {phase.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <phase.icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
