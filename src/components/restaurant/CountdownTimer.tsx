import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set end date to 3 days from now (resets each session for urgency)
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

  return (
    <div className="menu-card p-4 md:p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock className="w-5 h-5 text-[hsl(var(--menu-gold))] animate-pulse" />
        <span className="text-sm font-medium text-[hsl(var(--menu-gold))] uppercase tracking-wider">
          Angebot gültig noch:
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-2 md:gap-4 font-serif">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))] bg-[hsl(var(--menu-cream))]/50 px-3 py-2 rounded-lg border border-[hsl(var(--menu-gold))]/30">
            {pad(timeLeft.days)}
          </span>
          <span className="text-xs text-[hsl(var(--menu-brown))]/70 mt-1">Tage</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))]">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))] bg-[hsl(var(--menu-cream))]/50 px-3 py-2 rounded-lg border border-[hsl(var(--menu-gold))]/30">
            {pad(timeLeft.hours)}
          </span>
          <span className="text-xs text-[hsl(var(--menu-brown))]/70 mt-1">Std</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))]">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))] bg-[hsl(var(--menu-cream))]/50 px-3 py-2 rounded-lg border border-[hsl(var(--menu-gold))]/30">
            {pad(timeLeft.minutes)}
          </span>
          <span className="text-xs text-[hsl(var(--menu-brown))]/70 mt-1">Min</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))]">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-[hsl(var(--menu-gold))] bg-[hsl(var(--menu-cream))]/50 px-3 py-2 rounded-lg border border-[hsl(var(--menu-gold))]/30 countdown-seconds">
            {pad(timeLeft.seconds)}
          </span>
          <span className="text-xs text-[hsl(var(--menu-brown))]/70 mt-1">Sek</span>
        </div>
      </div>

      <p className="text-sm text-[hsl(var(--menu-brown))]/60 mt-4 italic">
        Danach steigt der Preis auf <span className="text-[hsl(var(--menu-gold))] font-semibold">79€/Monat</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
