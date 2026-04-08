import { MapPin, Star } from "lucide-react";

interface Props {
  city: string;
}

const MicroTrustBadge = ({ city }: Props) => (
  <div className="inline-flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
    <MapPin className="w-4 h-4 text-primary" />
    <span>Sichtbar auf Google Maps</span>
    <span className="text-border">|</span>
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[hsl(var(--highlight))] text-[hsl(var(--highlight))]" />
      ))}
    </div>
    <span>{city}</span>
  </div>
);

export default MicroTrustBadge;
