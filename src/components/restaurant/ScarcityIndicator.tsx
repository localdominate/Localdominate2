import { Users, AlertCircle } from "lucide-react";

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
        ? "bg-[hsl(0_50%_97%)] border-[hsl(0_40%_80%)]" 
        : "bg-[hsl(40_28%_96%)] border-[hsl(42_40%_82%)]"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isUrgent ? (
            <AlertCircle className="w-4 h-4 text-[hsl(0_55%_50%)]" />
          ) : (
            <Users className="w-4 h-4 text-[hsl(42_70%_45%)]" />
          )}
          <span className={`text-sm font-medium ${
            isUrgent ? "text-[hsl(0_45%_40%)]" : "text-[hsl(30_20%_35%)]"
          }`}>
            {isUrgent ? "Fast ausgebucht" : "Verfügbarkeit diesen Monat"}
          </span>
        </div>
        <span className={`text-sm font-semibold ${
          isUrgent ? "text-[hsl(0_55%_45%)]" : "text-[hsl(42_70%_45%)]"
        }`}>
          Nur noch {spotsLeft} Plätze
        </span>
      </div>

      {/* Progress Bar */}
      <div className="pricing-scarcity-bar h-2.5">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            isUrgent 
              ? "bg-gradient-to-r from-[hsl(0_50%_55%)] to-[hsl(0_55%_50%)]" 
              : "bg-gradient-to-r from-[hsl(42_60%_60%)] to-[hsl(42_76%_55%)]"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-[hsl(30_15%_50%)] mt-2 text-center">
        {spotsTaken} von {totalSpots} Plätzen für diesen Monat vergeben
      </p>
    </div>
  );
};

export default ScarcityIndicator;
