import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface CityGuide {
  slug: string;
  name: string;
  icon: string;
  country: string;
}

const allCityGuides: CityGuide[] = [
  { slug: "local-seo-koeln", name: "Köln", icon: "🏛️", country: "DE" },
  { slug: "local-seo-wien", name: "Wien", icon: "🎭", country: "AT" },
  { slug: "local-seo-stuttgart", name: "Stuttgart", icon: "🚗", country: "DE" },
  { slug: "local-seo-duesseldorf", name: "Düsseldorf", icon: "🌉", country: "DE" },
  { slug: "local-seo-basel", name: "Basel", icon: "🎨", country: "CH" },
  { slug: "local-seo-muenchen", name: "München", icon: "🥨", country: "DE" },
  { slug: "local-seo-berlin", name: "Berlin", icon: "🐻", country: "DE" },
  { slug: "local-seo-hamburg", name: "Hamburg", icon: "⚓", country: "DE" },
  { slug: "local-seo-frankfurt", name: "Frankfurt", icon: "🏦", country: "DE" },
  { slug: "local-seo-zuerich", name: "Zürich", icon: "🏔️", country: "CH" },
];

interface RelatedCityGuidesProps {
  currentSlug: string;
  maxItems?: number;
}

const RelatedCityGuides = ({ currentSlug, maxItems = 5 }: RelatedCityGuidesProps) => {
  // Filter out current city and get related cities
  const relatedCities = allCityGuides
    .filter(city => city.slug !== currentSlug)
    .slice(0, maxItems);

  if (relatedCities.length === 0) return null;

  return (
    <section className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        Weitere Städte-Guides
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Entdecke unsere Local SEO Guides für weitere Städte im DACH-Raum:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {relatedCities.map((city) => (
          <Link
            key={city.slug}
            to={`/blog/${city.slug}`}
            className="flex items-center gap-2 bg-card hover:bg-primary/10 border border-border rounded-lg p-3 transition-all duration-200 hover:border-primary/40 hover:scale-[1.02]"
          >
            <span className="text-xl">{city.icon}</span>
            <div className="flex flex-col">
              <span className="font-medium text-foreground text-sm">{city.name}</span>
              <span className="text-xs text-muted-foreground">{city.country}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedCityGuides;