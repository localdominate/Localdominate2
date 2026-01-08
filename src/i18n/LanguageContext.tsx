import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationType = (typeof translations)["de"] | (typeof translations)["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "de";
  
  // 1. Gespeicherte Präferenz hat Vorrang
  const saved = localStorage.getItem("language") as Language;
  if (saved === "en" || saved === "de") {
    return saved;
  }
  
  // 2. Browser-Sprache erkennen (für neue Besucher)
  const browserLang = navigator.language?.toLowerCase() || "";
  if (browserLang.startsWith("en")) {
    return "en";
  }
  
  // 3. Fallback: Deutsch
  return "de";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return safe defaults when used outside provider
    return {
      language: "de",
      setLanguage: () => {},
      t: translations["de"]
    };
  }
  return context;
};
