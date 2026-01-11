import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Stethoscope, Scale } from "lucide-react";

type IndustryType = "handwerker" | "arztpraxis" | "anwalt";

interface IndustryLandingCTAProps {
  industry: IndustryType;
  className?: string;
}

const industryConfig = {
  handwerker: {
    icon: Wrench,
    title: "Du willst das professionell umsetzen lassen?",
    description: "Unser Handwerker Pro Paket nimmt dir die komplette Optimierung ab – für mehr Aufträge über Google.",
    buttonText: "Handwerker Pro entdecken",
    link: "/handwerker-marketing",
    price: "299€",
    originalPrice: "599€",
    gradient: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  arztpraxis: {
    icon: Stethoscope,
    title: "Sie möchten das professionell umsetzen lassen?",
    description: "Unser Arztpraxis Pro Paket optimiert Ihre lokale Sichtbarkeit – für mehr Patienten über Google.",
    buttonText: "Arztpraxis Pro entdecken",
    link: "/arztpraxis-marketing",
    price: "299€",
    originalPrice: "599€",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  anwalt: {
    icon: Scale,
    title: "Sie möchten das professionell umsetzen lassen?",
    description: "Unser Kanzlei Pro Paket optimiert Ihre lokale Sichtbarkeit – für mehr Mandanten über Google.",
    buttonText: "Kanzlei Pro entdecken",
    link: "/anwalt-marketing",
    price: "299€",
    originalPrice: "599€",
    gradient: "from-purple-500/20 to-violet-500/10",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
};

const IndustryLandingCTA = ({ industry, className = "" }: IndustryLandingCTAProps) => {
  const config = industryConfig[industry];
  const Icon = config.icon;

  return (
    <div className={`my-10 p-6 md:p-8 bg-gradient-to-r ${config.gradient} rounded-xl border ${config.borderColor} ${className}`}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className={`p-3 rounded-lg ${config.iconBg}`}>
          <Icon className={`h-8 w-8 ${config.iconColor}`} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {config.title}
          </h3>
          <p className="text-muted-foreground mb-1">
            {config.description}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="line-through">{config.originalPrice}</span>
            <span className="ml-2 text-primary font-bold text-lg">{config.price}</span>
            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Einführungsangebot
            </span>
          </p>
        </div>
        
        <Button asChild size="lg" className="w-full md:w-auto shrink-0">
          <Link to={config.link}>
            {config.buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default IndustryLandingCTA;
