import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndDate = () => {
      const stored = sessionStorage.getItem('offer-end-date');
      if (stored) {
        return new Date(stored);
      }
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 3);
      sessionStorage.setItem('offer-end-date', endDate.toISOString());
      return endDate;
    };

    const endDate = getEndDate();

    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  const TimeBox = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="pricing-timer-box px-3 py-2 min-w-[3.25rem]">
        <span className="text-2xl md:text-3xl font-bold font-['Cormorant_Garamond',serif] text-[hsl(30_25%_18%)]">
          {value}
        </span>
      </div>
      <span className="text-[10px] mt-1.5 text-[hsl(30_12%_50%)] font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center space-y-4">
      {/* Header */}
      <div className="flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 text-[hsl(42_70%_45%)]" />
        <span className="text-sm font-medium text-[hsl(30_20%_35%)] uppercase tracking-wide">
          Angebot gültig noch
        </span>
      </div>

      {/* Timer Display */}
      <div className="flex items-center justify-center gap-1.5 md:gap-2">
        <TimeBox value={pad(timeLeft.days)} label="Tage" />
        <span className="text-xl font-light text-[hsl(42_50%_70%)] mt-[-1rem]">:</span>
        <TimeBox value={pad(timeLeft.hours)} label="Std" />
        <span className="text-xl font-light text-[hsl(42_50%_70%)] mt-[-1rem]">:</span>
        <TimeBox value={pad(timeLeft.minutes)} label="Min" />
        <span className="text-xl font-light text-[hsl(42_50%_70%)] mt-[-1rem]">:</span>
        <TimeBox value={pad(timeLeft.seconds)} label="Sek" />
      </div>

      {/* Warning Text */}
      <p className="text-xs text-[hsl(30_12%_50%)] italic">
        Danach erhöht sich der Preis auf <span className="font-semibold text-[hsl(42_70%_42%)]">79€/Monat</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
