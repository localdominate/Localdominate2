import { ArrowRight, Star, Calendar, User, ImageIcon, Search, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  service: string;
  onCtaClick: () => void;
}

const MockupCard = ({
  title,
  beforeItems,
  afterItems,
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
}: {
  title: string;
  beforeItems: string[];
  afterItems: string[];
  beforeIcon: React.ElementType;
  afterIcon: React.ElementType;
}) => (
  <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300">
    <div className="px-5 py-4 border-b border-border/30">
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
    <div className="px-5 py-4 bg-muted/30">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
          <BeforeIcon className="w-3 h-3 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Vorher</span>
      </div>
      <div className="space-y-2">
        {beforeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center py-1.5 bg-border/20">
      <ChevronDown className="w-4 h-4 text-muted-foreground/50" />
    </div>
    <div className="px-5 py-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
          <AfterIcon className="w-3 h-3 text-primary" />
        </div>
        <span className="text-xs font-medium text-primary uppercase tracking-wider">Nachher</span>
      </div>
      <div className="space-y-2">
        {afterItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NicheTransformationSection = ({ service, onCtaClick }: Props) => (
  <section className="px-4 py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          So kann dein {service} online aussehen
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Ein Beispiel, wie sich dein Auftritt verändern kann
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <MockupCard
          title="Google Sichtbarkeit"
          beforeIcon={Search}
          afterIcon={TrendingUp}
          beforeItems={["Platzierung ab #12", "Nur 3 Bewertungen", "Keine Fotos hochgeladen"]}
          afterItems={["Platzierung in den Top 3", "50+ Fünf-Sterne-Bewertungen", "Professionelle Galerie"]}
        />
        <MockupCard
          title="Profil-Optimierung"
          beforeIcon={User}
          afterIcon={ImageIcon}
          beforeItems={["Leeres Geschäftsprofil", "Keine klaren Informationen", "Generischer Auftritt"]}
          afterItems={["Klare, gebrandete Bilder", "Übersichtliche Leistungen", "Starker erster Eindruck"]}
        />
        <MockupCard
          title="Buchungssituation"
          beforeIcon={Calendar}
          afterIcon={Star}
          beforeItems={["Lücken im Kalender", "Ruhige Wochentage", "Unregelmäßiger Kundenstrom"]}
          afterItems={["Voller Wochenplan", "Konstant neue Kunden", "Planbare Buchungen"]}
        />
      </div>
      <div className="text-center mt-10">
        <Button variant="cta" size="lg" className="group" onClick={onCtaClick}>
          Dein persönliches Beispiel sehen
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  </section>
);

export default NicheTransformationSection;
