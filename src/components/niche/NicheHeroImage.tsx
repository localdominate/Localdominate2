import salonHero from "@/assets/niche/salon-hero.jpg";

interface Props {
  alt: string;
}

const NicheHeroImage = ({ alt }: Props) => (
  <div className="relative mt-12 max-w-3xl mx-auto">
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30">
      <img
        src={salonHero}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-cover"
        loading="eager"
        decoding="sync"
      />
    </div>
    {/* Decorative gradient overlay at bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent rounded-b-2xl" />
    {/* Floating badge */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border/50 rounded-full px-5 py-2 shadow-lg flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[hsl(var(--success))] animate-pulse" />
      <span className="text-sm font-medium text-foreground">Professioneller Salon-Auftritt</span>
    </div>
  </div>
);

export default NicheHeroImage;
