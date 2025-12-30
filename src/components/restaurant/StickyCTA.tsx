import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { usePageScrollProgress } from "@/hooks/useScrollProgress";

interface StickyCTAProps {
  showAfterScroll?: number; // Show after this percentage (0-1)
  hideBeforeCTA?: boolean; // Hide when reaching main CTA section
}

const StickyCTA = ({
  showAfterScroll = 0.15,
  hideBeforeCTA = true,
}: StickyCTAProps) => {
  const progress = usePageScrollProgress();
  const [isVisible, setIsVisible] = useState(false);
  const [isNearCTA, setIsNearCTA] = useState(false);

  useEffect(() => {
    // Show after scrolling past threshold
    setIsVisible(progress > showAfterScroll);

    // Check if near the main CTA section
    if (hideBeforeCTA) {
      const ctaSection = document.getElementById("cta");
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        setIsNearCTA(rect.top < window.innerHeight * 1.2);
      }
    }
  }, [progress, showAfterScroll, hideBeforeCTA]);

  const shouldShow = isVisible && !isNearCTA;

  // Calculate glow intensity based on scroll progress
  const glowIntensity = Math.min(1, (progress - showAfterScroll) * 2);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
        ${shouldShow ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
    >
      <div
        className="flex items-center gap-3 px-4 py-2 rounded-full 
          bg-menu-dark/90 backdrop-blur-md border border-menu-gold/30
          shadow-lg"
        style={{
          boxShadow: `0 0 ${20 + glowIntensity * 20}px hsl(var(--menu-gold) / ${0.1 + glowIntensity * 0.2})`,
        }}
      >
        <span className="text-menu-cream text-sm font-menu-serif hidden sm:inline">
          Jetzt Termin sichern
        </span>
        
        <div className="flex gap-2">
          <a
            href="https://wa.me/4915678123456"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full
              bg-green-600 text-white hover:bg-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="tel:+4915678123456"
            className="flex items-center justify-center w-8 h-8 rounded-full
              bg-menu-gold text-menu-dark hover:bg-menu-gold-light transition-colors"
            aria-label="Anrufen"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
