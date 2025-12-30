import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import MichelinLayout from "@/components/restaurant/layouts/MichelinLayout";
import "../styles/restaurant-michelin.css";
import "../styles/restaurant-dark-gold.css";
import "../styles/restaurant-cream-gold.css";

type Variant = "A" | "B" | "C";

const VARIANT_STORAGE_KEY = "restaurant_admin_variant";

const variantThemeMap: Record<Variant, string> = {
  A: "theme-dark-gold",
  B: "theme-cream-gold",
  C: "theme-michelin",
};

const variantLabels: Record<Variant, string> = {
  A: "Dark Gold",
  B: "Cream Gold",
  C: "Michelin",
};

// Placeholder für A & B - Coming Soon
const ComingSoonPlaceholder = ({ variant }: { variant: Variant }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium tracking-wider uppercase">
            {t.restaurant.comingSoon.badge} {variant} · {variantLabels[variant]}
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          {t.restaurant.comingSoon.headline.split(" ")[0]} <span className="text-amber-400">{t.restaurant.comingSoon.headline.split(" ")[1]}</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
          {t.restaurant.comingSoon.description}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.restaurant.comingSoon.backButton}
        </Link>
      </div>
    </div>
  );
};

const RestaurantMarketing = () => {
  const { language, setLanguage } = useLanguage();
  const [variant, setVariant] = useState<Variant>("C");
  const [showSwitch, setShowSwitch] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(VARIANT_STORAGE_KEY) as Variant | null;
    if (stored && ["A", "B", "C"].includes(stored)) {
      setVariant(stored);
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    // Remove all theme classes
    Object.values(variantThemeMap).forEach((cls) => {
      document.documentElement.classList.remove(cls);
    });
    // Add current theme class
    document.documentElement.classList.add(variantThemeMap[variant]);

    return () => {
      Object.values(variantThemeMap).forEach((cls) => {
        document.documentElement.classList.remove(cls);
      });
    };
  }, [variant]);

  const handleVariantChange = (v: Variant) => {
    setVariant(v);
    localStorage.setItem(VARIANT_STORAGE_KEY, v);
  };

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  // Render the appropriate layout
  const renderVariant = () => {
    switch (variant) {
      case "C":
        return <MichelinLayout />;
      case "A":
      case "B":
      default:
        return <ComingSoonPlaceholder variant={variant} />;
    }
  };

  return (
    <div className="relative">
      {renderVariant()}

      {/* Admin Controls - bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        {showSwitch ? (
          <div className="flex flex-col gap-2 bg-neutral-800/95 backdrop-blur-sm border border-neutral-700 rounded-xl p-3 shadow-2xl">
            {/* Language Toggle */}
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-700">
              <span className="text-neutral-400 text-xs font-medium flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Sprache
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 bg-neutral-700 rounded-md text-xs font-medium transition-all hover:bg-neutral-600"
              >
                <span className={language === "de" ? "text-amber-400" : "text-neutral-400"}>DE</span>
                <span className="text-neutral-500">/</span>
                <span className={language === "en" ? "text-amber-400" : "text-neutral-400"}>EN</span>
              </button>
            </div>
            
            {/* Variant Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-xs font-medium mr-1">Variante:</span>
              {(["A", "B", "C"] as Variant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => handleVariantChange(v)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    variant === v
                      ? "bg-amber-500 text-neutral-900"
                      : "bg-neutral-700 text-neutral-400 hover:bg-neutral-600 hover:text-neutral-200"
                  }`}
                  title={variantLabels[v]}
                >
                  {v}
                </button>
              ))}
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowSwitch(false)}
              className="mt-1 text-neutral-500 hover:text-neutral-300 text-xs text-center py-1"
            >
              Schließen ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSwitch(true)}
            className="w-10 h-10 flex items-center justify-center bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700 rounded-full text-neutral-400 hover:text-amber-400 transition-all shadow-lg"
            title="Admin: Einstellungen"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantMarketing;
