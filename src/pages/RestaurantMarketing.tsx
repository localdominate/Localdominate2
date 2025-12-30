import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RestaurantMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium tracking-wider uppercase">
            Coming Soon
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
};

export default RestaurantMarketing;
