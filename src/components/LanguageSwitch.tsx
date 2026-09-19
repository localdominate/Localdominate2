import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookOpen } from "lucide-react";

interface LanguageSwitchProps {
  variant?: "fixed" | "inline";
  showBlogLink?: boolean;
}

const LanguageSwitch = ({ variant = "fixed", showBlogLink = true }: LanguageSwitchProps) => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  
  // Hide blog link on blog pages
  const isOnBlogPage = location.pathname.startsWith("/blog");
  const shouldShowBlogLink = showBlogLink && !isOnBlogPage;

  const containerClass = variant === "fixed" 
    ? "fixed top-16 md:top-14 right-4 z-50"
    : "flex items-center";

  return (
    <div className={containerClass}>
      <div className="flex items-center gap-2">
        {shouldShowBlogLink && (
          <Link 
            to="/blog" 
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold bg-background/95 backdrop-blur-md border border-border rounded-full shadow-lg text-foreground/70 hover:text-foreground transition-all"
          >
            <BookOpen className="h-4 w-4" />
            Blog
          </Link>
        )}
        <div className="flex items-center bg-background/95 backdrop-blur-md border border-border rounded-full overflow-hidden shadow-lg">
          {(["de", "en", "ar"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              aria-label={lang === "de" ? "Deutsch" : lang === "en" ? "English" : "العربية"}
              aria-pressed={language === lang}
              className={`px-3 py-1.5 text-sm font-semibold transition-all ${
                language === lang
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
