import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";

const RankingComparison = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background-alt section-padding px-4 overflow-hidden">
      <div ref={ref} className="container max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            {t.ranking.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.ranking.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.ranking.tagline}
          </p>
        </div>

        {/* Before/After Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Before Card */}
          <div className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="relative bg-card border-2 border-destructive/30 rounded-2xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
              {/* Badge */}
              <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-bold">
                {t.ranking.before}
              </div>
              
              {/* Simulated Map Grid */}
              <div className="mt-4 mb-6 bg-muted/50 rounded-xl p-4 relative overflow-hidden">
                <div className="grid grid-cols-4 gap-3 relative z-10">
                  {/* Red markers for bad ranking positions */}
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-lg flex items-center justify-center ${
                        i === 6 || i === 9 || i === 10 
                          ? 'bg-destructive/20 border-2 border-destructive' 
                          : 'bg-muted/30 border border-border/50'
                      }`}
                    >
                      {(i === 6 || i === 9 || i === 10) && (
                        <MapPin className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-destructive/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.position}:</span>
                  <span className="font-bold text-destructive">{t.ranking.beforePosition}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.visibility}:</span>
                  <span className="font-bold text-destructive">{t.ranking.beforeVisibility}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.calls}:</span>
                  <span className="font-bold text-destructive">{t.ranking.beforeCalls}</span>
                </div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="relative bg-card border-2 border-success/30 rounded-2xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-shadow ring-2 ring-success/20">
              {/* Badge */}
              <div className="absolute -top-3 left-6 bg-success text-success-foreground px-4 py-1 rounded-full text-sm font-bold">
                {t.ranking.after}
              </div>
              
              {/* Simulated Map Grid */}
              <div className="mt-4 mb-6 bg-muted/50 rounded-xl p-4 relative overflow-hidden">
                <div className="grid grid-cols-4 gap-3 relative z-10">
                  {/* Green markers for top ranking positions */}
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-lg flex items-center justify-center ${
                        i === 0 || i === 1 || i === 4 
                          ? 'bg-success/20 border-2 border-success animate-pulse' 
                          : 'bg-muted/30 border border-border/50'
                      }`}
                    >
                      {(i === 0 || i === 1 || i === 4) && (
                        <MapPin className="w-5 h-5 text-success" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-success/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.position}:</span>
                  <span className="font-bold text-success flex items-center gap-1">
                    {t.ranking.afterPosition}
                    <TrendingUp className="w-4 h-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.visibility}:</span>
                  <span className="font-bold text-success">{t.ranking.afterVisibility}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t.ranking.calls}:</span>
                  <span className="font-bold text-success">{t.ranking.afterCalls}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow between cards on desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingComparison;