import { Users, AlertTriangle } from "lucide-react";

interface ScarcityIndicatorProps {
  spotsLeft?: number;
  totalSpots?: number;
}

const ScarcityIndicator = ({ spotsLeft = 3, totalSpots = 10 }: ScarcityIndicatorProps) => {
  const spotsTaken = totalSpots - spotsLeft;
  const percentage = (spotsTaken / totalSpots) * 100;
  const isUrgent = spotsLeft <= 3;

  return (
    <div className={`p-4 rounded-xl border ${
      isUrgent 
        ? "bg-red-50/50 border-red-200" 
        : "bg-[hsl(var(--menu-cream))]/30 border-[hsl(var(--menu-gold))]/20"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isUrgent ? (
            <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
          ) : (
            <Users className="w-5 h-5 text-[hsl(var(--menu-gold))]" />
          )}
          <span className={`text-sm font-medium ${
            isUrgent ? "text-red-600" : "text-[hsl(var(--menu-brown))]"
          }`}>
            {isUrgent ? "Fast ausgebucht!" : "Verfügbarkeit diesen Monat"}
          </span>
        </div>
        <span className={`text-sm font-bold ${
          isUrgent ? "text-red-600 scarcity-pulse" : "text-[hsl(var(--menu-gold))]"
        }`}>
          Nur noch {spotsLeft} Plätze!
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-[hsl(var(--menu-cream))] rounded-full overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ${
            isUrgent 
              ? "bg-gradient-to-r from-red-400 to-red-500" 
              : "bg-gradient-to-r from-[hsl(var(--menu-gold))]/70 to-[hsl(var(--menu-gold))]"
          }`}
          style={{ width: `${percentage}%` }}
        />
        {/* Animated dots for taken spots */}
        <div className="absolute inset-0 flex items-center justify-around px-1">
          {Array.from({ length: totalSpots }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i < spotsTaken
                  ? isUrgent 
                    ? "bg-white/80" 
                    : "bg-white/60"
                  : "bg-[hsl(var(--menu-brown))]/10"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-[hsl(var(--menu-brown))]/60 mt-2 text-center">
        {spotsTaken} von {totalSpots} Plätzen bereits vergeben
      </p>
    </div>
  );
};

export default ScarcityIndicator;
