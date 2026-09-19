import { useLanguage } from "@/i18n/LanguageContext";
import { Lightbulb, CheckCircle } from "lucide-react";

interface KeyTakeawaysBoxProps {
  title?: string;
  items: string[];
  variant?: "default" | "compact";
}

const KeyTakeawaysBox = ({ 
  title: titleProp,
  items,
  variant = "default"
}: KeyTakeawaysBoxProps) => {
  const isEn = useLanguage().language === "en";
  const title = titleProp ?? (isEn ? "What you will learn in this article:" : "Das lernst du in diesem Artikel:");
  if (variant === "compact") {
    return (
      <div 
        className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 key-takeaways"
        data-ai-summary="true"
        data-speakable="true"
      >
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-2">{title}</h3>
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8 key-takeaways"
      data-ai-summary="true"
      data-speakable="true"
    >
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeawaysBox;
