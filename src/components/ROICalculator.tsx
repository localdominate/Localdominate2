import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Zap, Target, Clock, AlertTriangle, BadgeCheck, ChevronDown, ChevronUp, LineChart } from "lucide-react";
import AmortizationChart from "@/components/AmortizationChart";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/lib/dataLayer";
import { openStripeCheckout } from "@/lib/stripe";
import { roiBranchConfigs, branchOrder, type ScenarioType } from "@/data/roiCalculatorConfig";
import { Database } from "@/integrations/supabase/types";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/currency";
import { STANDARD_PRICE_EUR } from "@/lib/stripe";

type BusinessCategory = Database["public"]["Enums"]["business_category"];

const ROICalculator = () => {
  const { language } = useLanguage();
  const t = translations[language].roiCalculator;
  
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory>('gastronomy');
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>('realistic');
  const [showAlternatives, setShowAlternatives] = useState(false);
  const config = roiBranchConfigs[selectedCategory];
  
  const [metric1Value, setMetric1Value] = useState(config.metric1.default);
  const [metric2Value, setMetric2Value] = useState(config.metric2.default);
  const [currentReviews, setCurrentReviews] = useState(25);
  
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Reset sliders when category changes
  useEffect(() => {
    const newConfig = roiBranchConfigs[selectedCategory];
    setMetric1Value(newConfig.metric1.default);
    setMetric2Value(newConfig.metric2.default);
  }, [selectedCategory]);

  // Get visibility boost based on scenario
  const visibilityBoost = config.visibilityBoost[selectedScenario];

  // Calculation logic with profit margins
  const currentMonthlyRevenue = metric1Value * metric2Value * config.daysMultiplier;
  const additionalUnitsPerMonth = metric1Value * visibilityBoost * config.daysMultiplier;
  const additionalMonthlyRevenue = additionalUnitsPerMonth * metric2Value;
  
  // NEW: Profit calculations
  const additionalMonthlyProfit = Math.round(additionalMonthlyRevenue * config.profitMargin);
  const additionalYearlyProfit = additionalMonthlyProfit * 12;
  
  const newMonthlyRevenue = currentMonthlyRevenue + additionalMonthlyRevenue;
  
  const investment = STANDARD_PRICE_EUR;
  
  // NEW: Breakeven based on profit (not revenue)
  const dailyProfit = additionalMonthlyProfit / 30;
  const breakevenDays = dailyProfit > 0 && Number.isFinite(dailyProfit)
    ? Math.max(1, Math.round(investment / dailyProfit))
    : null;
  
  // ROI based on yearly profit
  const roiPercentage = investment > 0
    ? Math.round(((additionalYearlyProfit - investment) / investment) * 100)
    : 0;
  
  // Cost of inaction
  const weeklyLostProfit = Math.round(additionalMonthlyProfit / 4);
  
  // Marketing alternative comparison
  const yearlyAlternativeCost = config.monthlyMarketingAlternative * 12;

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

  const handleCTAClick = () => {
    trackButtonClick("roi_calculator_cta", "roi_calculator", STANDARD_PRICE_EUR);
    openStripeCheckout("standard");
  };

  const currentBarWidth = 60;
  const newBarWidth = currentMonthlyRevenue > 0
    ? Math.min(100, (newMonthlyRevenue / currentMonthlyRevenue) * currentBarWidth)
    : 0;
  const numberLocale = language === "de" ? "de-DE" : language === "ar" ? "ar-SA" : "en-GB";
  const formatPercent = (value: number) => `${new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0)}%`;

  const scenarioLabels = {
    conservative: { de: 'Konservativ', en: 'Conservative' },
    realistic: { de: 'Realistisch', en: 'Realistic' },
    optimistic: { de: 'Optimistisch', en: 'Optimistic' },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
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

        {/* Branch Selection Tabs */}
        <div className="mb-8">
          <p className="text-center text-sm text-muted-foreground mb-4">
            {language === 'de' ? 'Wähle deine Branche' : language === 'ar' ? 'اختر مجالك' : 'Select your industry'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {branchOrder.map((categoryId) => {
              const branchConfig = roiBranchConfigs[categoryId];
              const isSelected = selectedCategory === categoryId;
              
              return (
                <button
                  key={categoryId}
                  onClick={() => setSelectedCategory(categoryId)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="text-base">{branchConfig.icon}</span>
                  <span className="hidden sm:inline">{branchConfig.name[language]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Section */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t.inputTitle}
            </h3>
            
            {/* Scenario Selector */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground mb-3 block">
                {t.scenarioLabel}
              </label>
              <div className="flex gap-2">
                {(['conservative', 'realistic', 'optimistic'] as ScenarioType[]).map((scenario) => (
                  <button
                    key={scenario}
                    onClick={() => setSelectedScenario(scenario)}
                    className={cn(
                      "flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all",
                      selectedScenario === scenario
                        ? scenario === 'conservative' 
                          ? "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                          : scenario === 'realistic'
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-green-500/20 text-green-600 border border-green-500/30"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    )}
                  >
                    {scenarioLabels[scenario][language]}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Metric 1 slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {config.metric1.label[language]}
                </label>
                <span className="text-lg font-bold text-primary">{metric1Value}</span>
              </div>
              <Slider
                value={[metric1Value]}
                onValueChange={(value) => setMetric1Value(value[0])}
                min={config.metric1.min}
                max={config.metric1.max}
                step={config.metric1.step}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{config.metric1.min}</span>
                <span>{config.metric1.max}</span>
              </div>
            </div>

            {/* Metric 2 slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  {config.metric2.label[language]}
                </label>
                <span className="text-lg font-bold text-primary">{formatPrice(metric2Value, language)}</span>
              </div>
              <Slider
                value={[metric2Value]}
                onValueChange={(value) => setMetric2Value(value[0])}
                min={config.metric2.min}
                max={config.metric2.max}
                step={config.metric2.step}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{formatPrice(config.metric2.min, language)}</span>
                <span>{formatPrice(config.metric2.max, language)}</span>
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

            {/* Conservative estimate badge */}
            <div className="flex items-center gap-2 mt-6 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <BadgeCheck className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <p className="text-xs text-blue-600">
                {t.conservativeBadge}
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              {t.potentialTitle}
            </h3>

            {/* Revenue comparison bars */}
            <div className="mb-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{t.beforeLabel}</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(currentMonthlyRevenue, language)}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
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
                    {formatPrice(newMonthlyRevenue, language)}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 delay-300"
                    style={{ width: isVisible ? `${newBarWidth}%` : "0%" }}
                  />
                </div>
              </div>
            </div>

            {/* Additional PROFIT highlight */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-5 mb-4 text-center border border-primary/20">
              <p className="text-sm text-muted-foreground mb-1">{t.additionalProfit}</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">
                +{formatPrice(additionalYearlyProfit, language)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t.perYear}</p>
            </div>

            {/* Breakeven highlight */}
            <div className={cn(
              "rounded-xl p-4 mb-4 text-center",
              breakevenDays !== null && breakevenDays <= 30
                ? "bg-green-500/10 border border-green-500/20" 
                : "bg-muted/50"
            )}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Zap className={cn("h-5 w-5", breakevenDays !== null && breakevenDays <= 30 ? "text-green-500" : "text-primary")} />
                <p className="text-sm font-medium text-foreground">{t.breakeven}</p>
              </div>
              <p className={cn(
                "text-3xl font-bold",
                breakevenDays !== null && breakevenDays <= 30 ? "text-green-600" : "text-foreground"
              )}>
                {breakevenDays === null ? "—" : `${breakevenDays} ${t.days}`}
              </p>
              {breakevenDays !== null && breakevenDays <= 30 && (
                <p className="text-xs text-green-600 mt-1">{t.breakevenFast}</p>
              )}
            </div>

            {/* Amortization Chart */}
            <div className="mb-4 p-4 bg-muted/30 rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-3">
                <LineChart className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-medium text-foreground">
                    {language === 'de' ? 'Gewinnentwicklung über 90 Tage' : language === 'ar' ? 'تطور الأرباح خلال 90 يوماً' : 'Profit development over 90 days'}
                </h4>
              </div>
              <AmortizationChart
                dailyProfit={dailyProfit}
                investment={investment}
                breakevenDays={breakevenDays ?? 91}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.roi}</p>
                <p className="text-xl font-bold text-primary">{formatPercent(roiPercentage)}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Clock className="h-4 w-4 text-primary mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{t.profitMarginLabel}</p>
                <p className="text-xl font-bold text-foreground">{Math.round(config.profitMargin * 100)}%</p>
              </div>
            </div>

            {/* Cost of inaction */}
            <div className="bg-destructive/10 rounded-xl p-4 mb-4 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <p className="text-sm font-semibold text-destructive">{t.costOfInaction}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.weeklyLoss}: <span className="font-bold text-destructive">~{formatPrice(weeklyLostProfit, language)}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t.waitingCost}</p>
            </div>

            {/* Alternatives comparison (collapsible) */}
            <button
              onClick={() => setShowAlternatives(!showAlternatives)}
              className="w-full flex items-center justify-between p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 transition-colors mb-4"
            >
              <span>{t.alternativesTitle}</span>
              {showAlternatives ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {showAlternatives && (
              <div className="bg-muted/20 rounded-lg p-4 mb-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Google Ads:</span>
                  <span className="text-foreground">{formatPrice(config.monthlyMarketingAlternative, language)} / {language === 'de' ? 'Monat' : language === 'ar' ? 'شهر' : 'month'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.yearlyAlternative}:</span>
                  <span className="text-foreground">{formatPrice(yearlyAlternativeCost, language)}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2 flex justify-between">
                  <span className="text-primary font-medium">Local Dominator:</span>
                  <span className="text-primary font-bold">{formatPrice(STANDARD_PRICE_EUR, language)} {t.oneTime}</span>
                </div>
              </div>
            )}

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