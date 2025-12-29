import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const germanNames = [
  "Thomas", "Michael", "Stefan", "Andreas", "Christian", "Markus", "Daniel", "Martin",
  "Sandra", "Julia", "Anna", "Lisa", "Laura", "Sarah", "Kathrin", "Maria"
];

const germanCities = [
  "München", "Berlin", "Hamburg", "Frankfurt", "Köln", "Düsseldorf", "Stuttgart",
  "Leipzig", "Dresden", "Nürnberg", "Hannover", "Bremen", "Dortmund", "Essen"
];

const englishNames = [
  "James", "Michael", "David", "John", "Robert", "William", "Thomas", "Daniel",
  "Emma", "Sarah", "Lisa", "Anna", "Julia", "Maria", "Sophie", "Laura"
];

const englishCities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Seattle"
];

const SocialProofToast = () => {
  const [notification, setNotification] = useState<{ name: string; city: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const names = language === "de" ? germanNames : englishNames;
  const cities = language === "de" ? germanCities : englishCities;

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth < 768) return;

    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      
      setNotification({ name: randomName, city: randomCity });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 15 seconds
    const initialTimer = setTimeout(showNotification, 15000);

    // Then show every 30-60 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 30000; // 30-60 seconds
      setTimeout(showNotification, randomDelay);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [language, names, cities]);

  const content = {
    de: {
      action: "hat gerade gekauft"
    },
    en: {
      action: "just purchased"
    }
  };

  const t = content[language];

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 transition-all duration-500 ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="glass bg-card/95 rounded-xl shadow-xl border border-border p-4 flex items-center gap-3 max-w-xs">
        <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-success" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {notification.name} {language === "de" ? "aus" : "from"} {notification.city}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.action} 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
