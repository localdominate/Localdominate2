import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

interface IndustryGuide {
  slug: string;
  name: string;
  icon: string;
}

const allIndustryGuides: IndustryGuide[] = [
  { slug: "local-seo-handwerker", name: "Handwerker", icon: "🔧" },
  { slug: "local-seo-aerzte-praxen", name: "Ärzte & Praxen", icon: "🏥" },
  { slug: "local-seo-anwaelte-kanzleien", name: "Anwälte", icon: "⚖️" },
  { slug: "local-seo-fuer-restaurants", name: "Restaurants", icon: "🍽️" },
  { slug: "local-seo-hotels", name: "Hotels", icon: "🏨" },
  { slug: "local-seo-fitness", name: "Fitnessstudios", icon: "💪" },
  { slug: "local-seo-friseursalon-beauty", name: "Friseure & Beauty", icon: "💇" },
  { slug: "local-seo-steuerberater", name: "Steuerberater", icon: "📊" },
  { slug: "local-seo-autowerkstatt", name: "Autowerkstätten", icon: "🚗" },
  { slug: "local-seo-immobilienmakler", name: "Immobilienmakler", icon: "🏠" },
  { slug: "local-seo-doener-kebab-imbiss", name: "Dönerläden", icon: "🥙" },
  { slug: "local-seo-yoga-studios", name: "Yoga-Studios", icon: "🧘" },
  { slug: "local-seo-tattoo-studios", name: "Tattoo-Studios", icon: "🎨" },
  { slug: "local-seo-apotheken", name: "Apotheken", icon: "💊" },
  { slug: "local-seo-tierarzt", name: "Tierärzte", icon: "🐾" },
];

interface RelatedIndustryGuidesProps {
  currentSlug: string;
  maxItems?: number;
}

const RelatedIndustryGuides = ({ currentSlug, maxItems = 6 }: RelatedIndustryGuidesProps) => {
  const relatedIndustries = allIndustryGuides
    .filter(industry => industry.slug !== currentSlug)
    .slice(0, maxItems);

  if (relatedIndustries.length === 0) return null;

  return (
    <section className="mb-12 bg-gradient-to-r from-secondary/50 to-secondary/30 border border-border rounded-xl p-6">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary" />
        Weitere Branchen-Guides
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        Entdecke unsere Local SEO Guides für weitere Branchen:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {relatedIndustries.map((industry) => (
          <Link
            key={industry.slug}
            to={`/blog/${industry.slug}`}
            className="flex items-center gap-2 bg-card hover:bg-primary/10 border border-border rounded-lg p-3 transition-all duration-200 hover:border-primary/40 hover:scale-[1.02]"
          >
            <span className="text-xl">{industry.icon}</span>
            <span className="font-medium text-foreground text-sm">{industry.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedIndustryGuides;