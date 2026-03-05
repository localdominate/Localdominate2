import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import { useLanguage } from "@/i18n/LanguageContext";

interface MobileArticleCTAProps {
  /** Show after this scroll percentage (0-1) */
  showAfter?: number;
  /** Hide when reaching this scroll percentage (0-1), e.g. near footer */
  hideAfter?: number;
  /** Article slug for tracking */
  articleSlug?: string;
}

const MobileArticleCTA = ({
  showAfter = 0.3,
  hideAfter = 0.92,
  articleSlug = "unknown",
}: MobileArticleCTAProps) => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const { scrollPercent, isScrollingUp } = useScrollDirection(5);
  const [dismissed, setDismissed] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  const t = {
    de: {
      label: "Google-Profil optimieren lassen",
      cta: "Jetzt starten – 299 €",
      ctaShort: "Jetzt starten",
    },
    en: {
      label: "Get your Google profile optimized",
      cta: "Start now – €299",
      ctaShort: "Start now",
    },
  }[language];

  useEffect(() => {
    if (scrollPercent > showAfter && !hasAppeared) {
      setHasAppeared(true);
    }
  }, [scrollPercent, showAfter, hasAppeared]);

  if (!isMobile || dismissed) return null;

  // Show when scrolled past threshold, hide near bottom, re-show when scrolling up
  const inRange = scrollPercent >= showAfter && scrollPercent <= hideAfter;
  const shouldShow = hasAppeared && inRange && (isScrollingUp || scrollPercent < showAfter + 0.1);

  const handleClick = () => {
    trackButtonClick("mobile_article_floating_cta", `blog_${articleSlug}`, 299);
    openStripeCheckout("standard", "mobile_article_cta", t.cta);
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-[70px] left-3 right-3 z-40 md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="bg-primary text-primary-foreground rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-primary-foreground/80 leading-tight truncate">
                {t.label}
              </p>
              <button
                onClick={handleClick}
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-2 decoration-primary-foreground/40 hover:decoration-primary-foreground transition-colors"
              >
                {t.ctaShort}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="shrink-0 p-1.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileArticleCTA;
