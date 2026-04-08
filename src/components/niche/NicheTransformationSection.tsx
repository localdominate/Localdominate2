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

    {/* Before */}
    <div className="px-5 py-4 bg-muted/30">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
          <BeforeIcon className="w-3 h-3 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Before</span>
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

    {/* Divider */}
    <div className="flex items-center justify-center py-1.5 bg-border/20">
      <ChevronDown className="w-4 h-4 text-muted-foreground/50" />
    </div>

    {/* After */}
    <div className="px-5 py-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
          <AfterIcon className="w-3 h-3 text-primary" />
        </div>
        <span className="text-xs font-medium text-primary uppercase tracking-wider">After</span>
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
          This is how your {service} can look
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A simple example of what changes when your visibility improves
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <MockupCard
          title="Google Visibility"
          beforeIcon={Search}
          afterIcon={TrendingUp}
          beforeItems={[
            "Ranking position #12+",
            "Only 3 reviews",
            "No photos uploaded",
          ]}
          afterItems={[
            "Ranking in Top 3",
            "50+ five-star reviews",
            "Professional gallery",
          ]}
        />

        <MockupCard
          title="Salon Profile Upgrade"
          beforeIcon={User}
          afterIcon={ImageIcon}
          beforeItems={[
            "Empty business profile",
            "No clear service info",
            "Generic appearance",
          ]}
          afterItems={[
            "Clean, branded images",
            "Clear service listing",
            "Strong first impression",
          ]}
        />

        <MockupCard
          title="More Bookings"
          beforeIcon={Calendar}
          afterIcon={Star}
          beforeItems={[
            "Gaps in the calendar",
            "Quiet weekdays",
            "Inconsistent flow",
          ]}
          afterItems={[
            "Full weekly schedule",
            "Consistent new clients",
            "Predictable bookings",
          ]}
        />
      </div>

      <div className="text-center mt-10">
        <Button variant="cta" size="lg" className="group" onClick={onCtaClick}>
          See your own version
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  </section>
);

export default NicheTransformationSection;
