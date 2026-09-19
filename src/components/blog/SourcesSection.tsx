import { useLanguage } from "@/i18n/LanguageContext";
import { ExternalLink, BookOpen, FileText } from "lucide-react";

interface Source {
  title: string;
  url: string;
  description?: string;
  type?: "article" | "documentation" | "study" | "tool";
}

interface SourcesSectionProps {
  sources: Source[];
  title?: string;
}

const SourcesSection = ({ 
  const isEn = useLanguage().language === "en";
  sources, 
  title: titleProp
}: SourcesSectionProps) => {
  const title = titleProp ?? (isEn ? "Sources & Further Reading" : "Quellen & Weiterführende Links");
  const getIcon = (type?: string) => {
    switch (type) {
      case "documentation":
        return <FileText className="h-4 w-4" />;
      case "study":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section className="border-t border-border pt-8 mt-12">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        {title}
      </h2>
      
      <div className="bg-muted/30 rounded-lg p-4">
        <ul className="space-y-3">
          {sources.map((source, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary flex-shrink-0 mt-1">
                {getIcon(source.type)}
              </span>
              <div className="flex-1">
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  {source.title}
                </a>
                {source.description && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {source.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 italic">
        {isEn
          ? `All links were last checked on ${new Date().toLocaleDateString('en-GB')}.`
          : `Alle Links wurden zuletzt am ${new Date().toLocaleDateString('de-DE')} geprüft.`}
      </p>
    </section>
  );
};

export default SourcesSection;
