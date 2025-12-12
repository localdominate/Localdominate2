import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-16 md:top-14 right-4 z-50">
      <div className="flex items-center glass rounded-full overflow-hidden shadow-lg">
        <button
          onClick={() => setLanguage("de")}
          className={`px-3 py-1.5 text-sm font-semibold transition-all ${
            language === "de"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          DE
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1.5 text-sm font-semibold transition-all ${
            language === "en"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitch;
