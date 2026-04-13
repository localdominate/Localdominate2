import { useLanguage } from "@/i18n/LanguageContext";
import { Home, BookOpen, Star, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import { useContext } from "react";
import { AutoOptimizerContext } from "@/components/AutoOptimizerProvider";
import { CTA_COLOR_VARIANTS } from "@/lib/autoOptimizerConfig";

const MobileStickyBar = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const autoOptimizer = useContext(AutoOptimizerContext);
  const ctaColor = autoOptimizer?.getEffectiveValue?.('cta_color', 'all_ctas', 'primary') ?? 'primary';
  const buttonVariant = CTA_COLOR_VARIANTS[ctaColor] || 'cta';

  const isHome = location.pathname === "/";
  const isBlog = location.pathname.startsWith("/blog");

  const t = {
    de: { home: "Start", blog: "Blog", offer: "Angebot", cta: "Starten" },
    en: { home: "Home", blog: "Blog", offer: "Offer", cta: "Start" },
    ar: { home: "الرئيسية", blog: "المدونة", offer: "العرض", cta: "ابدأ" },
  }[language] || { home: "Start", blog: "Blog", offer: "Angebot", cta: "Starten" };

  const handleCtaClick = () => {
    trackButtonClick("mobile_bottom_nav_cta", "mobile_bottom_nav", 299);
    openStripeCheckout("standard");
  };

  const scrollToOffer = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#angebot";
      return;
    }
    const el = document.getElementById("angebot");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      icon: Home,
      label: t.home,
      action: () => {},
      to: "/",
      isActive: isHome,
    },
    {
      icon: BookOpen,
      label: t.blog,
      action: () => {},
      to: "/blog",
      isActive: isBlog,
    },
    {
      icon: Star,
      label: t.offer,
      action: scrollToOffer,
      to: undefined,
      isActive: false,
    },
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border"
      style={{ paddingBottom: "max(0.25rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center">
        {/* Nav items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors touch-target ${
                item.isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5 mb-0.5" />
              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </div>
          );

          if (item.to) {
            return (
              <Link key={item.label} to={item.to} className="flex-1 flex justify-center">
                {content}
              </Link>
            );
          }

          return (
            <button key={item.label} onClick={item.action} className="flex-1 flex justify-center">
              {content}
            </button>
          );
        })}

        {/* CTA button - prominent */}
        <div className="flex-1 px-2 py-1.5">
          <button
            onClick={handleCtaClick}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md active:scale-[0.97] transition-transform"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyBar;
