import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const { language } = useLanguage();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      
      const diff = midnight.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  const content = {
    de: {
      label: "Angebot endet in:"
    },
    en: {
      label: "Offer ends in:"
    },
    ar: {
      label: "ينتهي العرض خلال:"
    }
  };

  const t = content[language] || content.de;

  return (
    <div className="flex items-center justify-center gap-3 bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3">
      <Clock className="w-5 h-5 text-destructive animate-pulse" />
      <span className="text-sm font-medium text-foreground">{t.label}</span>
      <div className="flex items-center gap-1 font-mono font-bold text-lg text-destructive">
        <span className="bg-destructive/20 px-2 py-1 rounded">{pad(timeLeft.hours)}</span>
        <span>:</span>
        <span className="bg-destructive/20 px-2 py-1 rounded">{pad(timeLeft.minutes)}</span>
        <span>:</span>
        <span className="bg-destructive/20 px-2 py-1 rounded">{pad(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
