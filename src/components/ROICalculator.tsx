import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/dataLayer";

const ROICalculator = () => {
  const { language } = useLanguage();
  const t = translations[language].roiCalculator;
  
  const [guestsPerDay, setGuestsPerDay] = useState(75);
  const [avgTicket, setAvgTicket] = useState(35);
  const [currentReviews, setCurrentReviews] = useState(25);
  
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Calculation logic
  const daysPerMonth = 30;
  const visibilityBoost = 0.15; // 15% more visibility when in Top 3
  
  const currentMonthlyRevenue = guestsPerDay * avgTicket * daysPerMonth;
  const additionalGuestsPerMonth = Math.round(guestsPerDay * visibilityBoost * daysPerMonth);
  const additionalMonthlyRevenue = additionalGuestsPerMonth * avgTicket;
  const additionalYearlyRevenue = additionalMonthlyRevenue * 12;
  const newMonthlyRevenue = currentMonthlyRevenue + additionalMonthlyRevenue;
  
  const investment = 299;
  const roiPercentage = Math.round((additionalYearlyRevenue / investment) * 100);
  const breakevenDays = Math.max(1, Math.round(investment / (additionalMonthlyRevenue / 30)));

  // Intersection observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate revenue counter
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setAnimatedRevenue(Math.round(additionalYearlyRevenue * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, additionalYearlyRevenue]);

  const handleCTAClick = () => {
    trackButtonClick("roi_calculator_cta", "roi_calculator", 299);
    window.open("https://buy.stripe.com/6oE29t8GN1vM7wAdQQ", "_blank");
  };

  const currentBarWidth = 60;
  const newBarWidth = Math.min(100, (newMonthlyRevenue / currentMonthlyRevenue) * currentBarWidth);

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            <Calculator className="h-4 w-4" />
            {t.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Section */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t.inputTitle}
            </h3>
            
            {/* Guests per day slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {t.guestsLabel}
                </label>
                <span className="text-lg font-bold text-primary">{guestsPerDay}</span>
              </div>
              <Slider
                value={[guestsPerDay]}
                onValueChange={(value) => setGuestsPerDay(value[0])}
                min={20}
                max={200}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>20</span>
                <span>200</span>
              </div>
            </div>

            {/* Average ticket slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {t.avgTicketLabel}
                </label>
                <span className="text-lg font-bold text-primary">{avgTicket}€</span>
              </div>
              <Slider
                value={[avgTicket]}
                onValueChange={(value) => setAvgTicket(value[0])}
                min={15}
                max={80}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>15€</span>
                <span>80€</span>
              </div>
            </div>

            {/* Current reviews slider */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {t.reviewsLabel}
                </label>
                <span className="text-lg font-bold text-primary">{currentReviews}</span>
              </div>
              <Slider
                value={[currentReviews]}
                onValueChange={(value) => setCurrentReviews(value[0])}
                min={0}
                max={200}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0</span>
                <span>200</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              {t.potentialTitle}
            </h3>

            {/* Revenue comparison bars */}
            <div className="mb-8 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{t.beforeLabel}</span>
                  <span className="font-medium text-foreground">
                    {currentMonthlyRevenue.toLocaleString("de-DE")}€
                  </span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-muted-foreground/40 rounded-full transition-all duration-1000"
                    style={{ width: isVisible ? `${currentBarWidth}%` : "0%" }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-primary font-medium">{t.afterLabel}</span>
                  <span className="font-bold text-primary">
                    {newMonthlyRevenue.toLocaleString("de-DE")}€
                  </span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: isVisible ? `${newBarWidth}%` : "0%" }}
                  />
                </div>
              </div>
            </div>

            {/* Additional revenue highlight */}
            <div className="bg-primary/10 rounded-xl p-4 mb-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">{t.additionalRevenue}</p>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                +{animatedRevenue.toLocaleString("de-DE")}€
              </p>
              <p className="text-xs text-muted-foreground">{t.perYear}</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.breakeven}</p>
                <p className="text-lg font-bold text-foreground">{breakevenDays} {t.days}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.roi}</p>
                <p className="text-lg font-bold text-primary animate-pulse">{roiPercentage.toLocaleString("de-DE")}%</p>
              </div>
            </div>

            {/* CTA */}
            <Button 
              onClick={handleCTAClick}
              variant="cta" 
              size="cta" 
              className="w-full cta-pulse"
            >
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
