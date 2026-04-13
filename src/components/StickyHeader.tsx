import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, BookOpen, Utensils, Wrench, Stethoscope, Scale, ChevronRight, Star, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const halfwayPoint = documentHeight * 0.5;
      setIsVisible(scrollY > 400 && scrollY < halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const content = {
    de: {
      brand: "Local Dominator",
      cta: "Jetzt starten",
      menu: {
        offer: "Angebot",
        blog: "Blog & Ratgeber",
        lexikon: "SEO Lexikon",
        industries: "Branchen",
        partner: "Partner werden",
        contact: "Kontakt",
      },
      industries: [
        { path: "/restaurant-marketing", label: "Restaurant", icon: Utensils },
        { path: "/handwerker-marketing", label: "Handwerker", icon: Wrench },
        { path: "/arztpraxis-marketing", label: "Arztpraxis", icon: Stethoscope },
        { path: "/anwalt-marketing", label: "Kanzlei", icon: Scale },
      ],
    },
    en: {
      brand: "Local Dominator",
      cta: "Get Started",
      menu: {
        offer: "Offer",
        blog: "Blog & Guides",
        lexikon: "SEO Lexicon",
        industries: "Industries",
        partner: "Become Partner",
        contact: "Contact",
      },
      industries: [
        { path: "/restaurant-marketing", label: "Restaurant", icon: Utensils },
        { path: "/handwerker-marketing", label: "Trades", icon: Wrench },
        { path: "/arztpraxis-marketing", label: "Medical", icon: Stethoscope },
        { path: "/anwalt-marketing", label: "Legal", icon: Scale },
      ],
    },
    ar: {
      brand: "Local Dominator",
      cta: "ابدأ الآن",
      menu: {
        offer: "العرض",
        blog: "المدونة والأدلة",
        lexikon: "معجم SEO",
        industries: "القطاعات",
        partner: "كن شريكًا",
        contact: "اتصل بنا",
      },
      industries: [
        { path: "/restaurant-marketing", label: "مطعم", icon: Utensils },
        { path: "/handwerker-marketing", label: "حرفيون", icon: Wrench },
        { path: "/arztpraxis-marketing", label: "عيادة", icon: Stethoscope },
        { path: "/anwalt-marketing", label: "محاماة", icon: Scale },
      ],
    },
  };

  const t = content[language] || content.de;

  const handleCtaClick = () => {
    trackButtonClick("sticky_header_cta", "sticky_header", 299);
    openStripeCheckout("standard", "sticky_header", t.cta);
  };

  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Hamburger - mobile only */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 -ml-2 rounded-lg hover:bg-muted transition-colors touch-target"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src="/favicon.png" alt="Local Dominator" className="w-8 h-8" width={32} height={32} />
                <span className="font-bold text-foreground text-lg hidden sm:block">
                  {t.brand}
                </span>
              </Link>

              {/* Desktop nav links */}
              <nav className="hidden md:flex items-center gap-1">
                <button
                  onClick={() => scrollToSection("angebot")}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {t.menu.offer}
                </button>
                <Link
                  to="/blog"
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {t.menu.blog}
                </Link>
                <Link
                  to="/seo-lexikon"
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {t.menu.lexikon}
                </Link>
              </nav>

              {/* CTA Button */}
              <Button
                variant="cta"
                size="sm"
                className="group"
                onClick={handleCtaClick}
              >
                {t.cta}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      {isMenuOpen && isVisible && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[55] bg-foreground/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <nav
            className="fixed top-[60px] left-0 right-0 z-[60] bg-background border-b border-border shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200"
            style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto", paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="p-4 space-y-1">
              {/* Main nav links */}
              <button
                onClick={() => scrollToSection("angebot")}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground font-medium hover:bg-muted transition-colors touch-target"
              >
                <span className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  {t.menu.offer}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>

              <Link
                to="/blog"
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground font-medium hover:bg-muted transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t.menu.blog}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Link
                to="/seo-lexikon"
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground font-medium hover:bg-muted transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t.menu.lexikon}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              {/* Industry divider */}
              <div className="pt-2 pb-1 px-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.menu.industries}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 px-2">
                {t.industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Link
                      key={ind.path}
                      to={ind.path}
                      className="flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors touch-target"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      {ind.label}
                    </Link>
                  );
                })}
              </div>

              {/* Partner */}
              <Link
                to="/partner"
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground font-medium hover:bg-muted transition-colors touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  {t.menu.partner}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              {/* CTA at bottom */}
              <div className="pt-3 px-2">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full group text-base"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleCtaClick();
                  }}
                >
                  {t.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default StickyHeader;
