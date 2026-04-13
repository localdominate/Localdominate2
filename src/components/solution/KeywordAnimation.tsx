import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const keywordsByLang: Record<string, string[]> = {
  de: [
    "Zahnarzt",
    "Zahnarzt Notdienst",
    "Zahnarzt Notdienst Berlin",
  ],
  en: [
    "Dentist",
    "Emergency Dentist",
    "Emergency Dentist Berlin",
  ],
  ar: [
    "طبيب أسنان",
    "طبيب أسنان طوارئ",
    "طبيب أسنان طوارئ دبي",
  ],
};

const optimizedLabel: Record<string, string> = {
  de: "Optimiert",
  en: "Optimized",
  ar: "مُحسَّن",
};

const KeywordAnimation = () => {
  const { language } = useLanguage();
  const keywords = keywordsByLang[language] || keywordsByLang.de;
  const isRTL = language === 'ar';
  
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Reset animation when language changes
  useEffect(() => {
    setCurrentKeyword(0);
    setDisplayText("");
    setIsTyping(true);
  }, [language]);

  useEffect(() => {
    const targetText = keywords[currentKeyword];
    
    if (isTyping) {
      if (displayText.length < targetText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        setDisplayText("");
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, currentKeyword, keywords]);

  return (
    <div className="relative w-full max-w-sm mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Google Search Mockup */}
      <div className="bg-card rounded-2xl border border-border shadow-lg p-4 space-y-4">
        {/* Google Logo - always LTR */}
        <div className="flex justify-center" dir="ltr">
          <svg viewBox="0 0 272 92" className="h-7" aria-label="Google">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C119.25 34.32 129.24 25 141.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
            <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
            <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
            <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
            <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z" fill="#4285F4"/>
          </svg>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <div className={`flex items-center bg-background border border-border rounded-full px-4 py-3 shadow-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Search className={`w-5 h-5 text-muted-foreground flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <div className={`flex-1 min-h-[1.5rem] flex items-center ${isRTL ? 'justify-end' : ''}`}>
              <span className={`text-foreground font-medium ${isRTL ? 'font-arabic' : ''}`}>{displayText}</span>
              <span className={`typing-cursor ${isRTL ? 'mr-0.5' : 'ml-0.5'} w-0.5 h-5 bg-primary animate-pulse`} />
            </div>
          </div>
        </div>
        
        {/* Keyword Suggestions */}
        <div className="space-y-2 pt-2">
          {keywords.map((keyword, index) => (
            <div 
              key={keyword}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                index === currentKeyword 
                  ? "bg-primary/10 border border-primary/30" 
                  : "bg-muted/30"
              }`}
            >
              <Search className={`w-4 h-4 ${index === currentKeyword ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm ${index === currentKeyword ? "text-primary font-medium" : "text-muted-foreground"}`}>
                {keyword}
              </span>
              {index === currentKeyword && (
                <span className={`${isRTL ? 'mr-auto' : 'ml-auto'} text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full animate-pulse`}>
                  {optimizedLabel[language] || optimizedLabel.de}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
    </div>
  );
};

export default KeywordAnimation;
