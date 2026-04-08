import { MapPin, Star } from "lucide-react";

interface Props {
  serviceName: string;
  city: string;
}

const GoogleMapsMockup = ({ serviceName, city }: Props) => (
  <div className="max-w-md mx-auto mt-10">
    <div className="text-xs text-muted-foreground text-center mb-2 font-medium uppercase tracking-wider">
      Before → After
    </div>
    <div className="grid grid-cols-2 gap-3">
      {/* Before */}
      <div className="bg-card border border-border/50 rounded-xl p-4 opacity-60">
        <div className="text-xs text-muted-foreground mb-2">Google Maps</div>
        <div className="space-y-2">
          {["Competitor A", "Competitor B", "Competitor C"].map((name, i) => (
            <div key={i} className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/30">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground line-through">Your {serviceName}</span>
          </div>
        </div>
      </div>
      {/* After */}
      <div className="bg-card border-2 border-primary/30 rounded-xl p-4">
        <div className="text-xs text-primary font-semibold mb-2">Google Maps</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-primary/5 rounded-lg p-1.5 -mx-1.5">
            <MapPin className="w-3 h-3 text-primary" />
            <span className="text-xs font-bold text-primary">Your {serviceName}</span>
            <div className="flex ml-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-[hsl(var(--highlight))] text-[hsl(var(--highlight))]" />
              ))}
            </div>
          </div>
          {["Competitor A", "Competitor B"].map((name, i) => (
            <div key={i} className="flex items-center gap-2 opacity-50">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GoogleMapsMockup;
