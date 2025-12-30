import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const keywords = [
  "Zahnarzt",
  "Zahnarzt Notdienst",
  "Zahnarzt Notdienst Berlin",
];

const KeywordAnimation = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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
  }, [displayText, isTyping, currentKeyword]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Google Search Mockup */}
      <div className="bg-card rounded-2xl border border-border shadow-lg p-4 space-y-4">
        {/* Google Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-0.5 text-2xl font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center bg-background border border-border rounded-full px-4 py-3 shadow-sm">
            <Search className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
            <div className="flex-1 min-h-[1.5rem] flex items-center">
              <span className="text-foreground font-medium">{displayText}</span>
              <span className="typing-cursor ml-0.5 w-0.5 h-5 bg-primary animate-pulse" />
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
                <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full animate-pulse">
                  Optimiert
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
