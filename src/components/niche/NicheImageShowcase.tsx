import salonService from "@/assets/niche/salon-service.jpg";
import salonTeam from "@/assets/niche/salon-team.jpg";
import googleResults from "@/assets/niche/google-results.jpg";
import { Star, TrendingUp, Users } from "lucide-react";

interface Props {
  service: string;
  city: string;
}

const NicheImageShowcase = ({ service, city }: Props) => (
  <section className="px-4 py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Einblick</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          So unterstützen wir Salons in {city}
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Von der Google-Sichtbarkeit bis zum professionellen Auftritt – alles aus einer Hand.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 - Google visibility */}
        <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={googleResults}
              alt={`Google Maps Ergebnisse für ${service} in ${city}`}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-bold">Google Sichtbarkeit</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Dein {service} wird in den Top-Ergebnissen angezeigt, wenn Kunden in {city} suchen.
            </p>
          </div>
        </div>

        {/* Card 2 - Service quality */}
        <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={salonService}
              alt={`Zufriedene Kundin im ${service} in ${city}`}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-bold">Zufriedene Kunden</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Mehr 5-Sterne-Bewertungen und ein professioneller erster Eindruck bringen neue Kunden.
            </p>
          </div>
        </div>

        {/* Card 3 - Team */}
        <div className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={salonTeam}
              alt={`Professionelles Team im ${service} in ${city}`}
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-bold">Starkes Team-Profil</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Zeig dein Team und dein Können – damit Kunden dich wählen, bevor sie reinkommen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NicheImageShowcase;
