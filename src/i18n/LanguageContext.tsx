import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

type TranslationType = (typeof translations)["de"] | (typeof translations)["en"] | (typeof translations)["ar"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const RTL_LANGUAGES: Language[] = ["ar"];

export const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "de";
  
  const saved = localStorage.getItem("language") as Language;
  if (saved === "en" || saved === "de" || saved === "ar") {
    return saved;
  }
  
  const browserLang = navigator.language?.toLowerCase() || "";
  if (browserLang.startsWith("en")) return "en";
  if (browserLang.startsWith("ar")) return "ar";
  
  return "de";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = RTL_LANGUAGES.includes(language) ? "rtl" : "ltr";
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
