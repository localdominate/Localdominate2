import { Link } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";
import { useState, useEffect } from "react";
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
const ComingSoonPlaceholder = ({ variant }: { variant: Variant }) => (
  <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center px-4">
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium tracking-wider uppercase">
          Variante {variant} · {variantLabels[variant]}
        </span>
      </div>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
        Restaurant <span className="text-amber-400">Marketing</span>
      </h1>
      <p className="text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
        Wir arbeiten an etwas Besonderem. Bald verfügbar – exklusive Marketing-Lösungen für Gastronomen.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold rounded-lg transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Zurück zur Startseite
      </Link>
    </div>
  </div>
);

const RestaurantMarketing = () => {
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

      {/* Admin Variant Switch - bottom right, subtle */}
      <div className="fixed bottom-4 right-4 z-50">
        {showSwitch ? (
          <div className="flex items-center gap-2 bg-neutral-800/90 backdrop-blur-sm border border-neutral-700 rounded-lg p-2 shadow-lg">
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
            <button
              onClick={() => setShowSwitch(false)}
              className="ml-1 text-neutral-500 hover:text-neutral-300 text-xs px-1"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSwitch(true)}
            className="w-8 h-8 flex items-center justify-center bg-neutral-800/50 hover:bg-neutral-800/80 border border-neutral-700/50 rounded-full text-neutral-500 hover:text-neutral-300 transition-all opacity-30 hover:opacity-100"
            title="Admin: Variante wechseln"
          >
            <Settings className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantMarketing;
