import { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  TrendingUp, 
  Clock, 
  Target,
  ArrowRight,
  Zap,
  FileText,
  Image,
  Link2,
  Users,
  Star,
  AlertCircle,
  CheckCircle2,
  Timer
} from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { getCoreWebVitalsHistory } from "@/hooks/useCoreWebVitals";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  effort: "low" | "medium" | "high";
  category: "performance" | "content" | "engagement" | "technical";
  priority: number;
  actionItems: string[];
  expectedImprovement: string;
  timeToImplement: string;
  icon: React.ReactNode;
}

interface AIRecommendationsProps {
  sessionData: any[];
  conversionData: any[];
}

const AIRecommendations = ({ sessionData, conversionData }: AIRecommendationsProps) => {
  const recommendations = useMemo((): Recommendation[] => {
    const recs: Recommendation[] = [];
    const vitalsHistory = getCoreWebVitalsHistory();
    const now = new Date();
    
    // Helper functions
    const getVitalAvg = (name: string): number | null => {
      const values = vitalsHistory.filter((v) => v.name === name).map((v) => v.value);
      if (values.length === 0) return null;
      return values.reduce((a, b) => a + b, 0) / values.length;
    };
    
    // Calculate metrics
    const avgLCP = getVitalAvg("LCP");
    const avgCLS = getVitalAvg("CLS");
    const avgFCP = getVitalAvg("FCP");
    const avgTTFB = getVitalAvg("TTFB");
    
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const outdatedArticles = blogArticles.filter((a) => {
      const updated = new Date(a.updatedAt || a.publishedAt);
      return updated < sixMonthsAgo;
    });
    
    const avgSessionDuration = sessionData.length > 0
      ? sessionData.reduce((sum, s) => {
          if (s.end_time && s.start_time) {
            return sum + (new Date(s.end_time).getTime() - new Date(s.start_time).getTime()) / 1000;
          }
          return sum;
        }, 0) / sessionData.filter((s) => s.end_time).length || 0
      : 0;
    
    const bounces = sessionData.filter((s) => (s.page_views || 1) === 1).length;
    const bounceRate = sessionData.length > 0 ? (bounces / sessionData.length) * 100 : 0;
    
    const conversionRate = sessionData.length > 0 && conversionData.length > 0
      ? (conversionData.length / sessionData.length) * 100
      : 0;
    
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const recentPosts = blogArticles.filter((a) => new Date(a.publishedAt) >= oneMonthAgo).length;
    
    // PERFORMANCE RECOMMENDATIONS
    
    // LCP Optimization
    if (avgLCP !== null && avgLCP > 2500) {
      recs.push({
        id: "lcp-optimization",
        title: "Largest Contentful Paint optimieren",
        description: `Dein LCP liegt bei ${Math.round(avgLCP)}ms – über dem empfohlenen Wert von 2500ms. Dies beeinträchtigt das Nutzererlebnis und dein Google-Ranking.`,
        impact: "high",
        effort: avgLCP > 4000 ? "high" : "medium",
        category: "performance",
        priority: avgLCP > 4000 ? 1 : 2,
        icon: <Zap className="h-5 w-5" />,
        actionItems: [
          "Hero-Bilder im WebP/AVIF-Format mit srcset bereitstellen",
          "Kritisches CSS inline laden, Rest async",
          "Server-seitiges Rendering für Above-the-Fold Content",
          "CDN mit Edge-Caching aktivieren",
          "Preload-Hints für LCP-Element setzen"
        ],
        expectedImprovement: `LCP um ${Math.round((avgLCP - 2000) * 0.6)}ms reduzieren`,
        timeToImplement: "2-4 Stunden"
      });
    }
    
    // CLS Optimization
    if (avgCLS !== null && avgCLS > 0.1) {
      recs.push({
        id: "cls-optimization",
        title: "Layout-Verschiebungen eliminieren",
        description: `Dein CLS-Wert von ${avgCLS.toFixed(3)} verursacht störende Sprünge. Nutzer brechen häufiger ab, wenn sich Inhalte unerwartet verschieben.`,
        impact: "high",
        effort: "medium",
        category: "performance",
        priority: 3,
        icon: <Image className="h-5 w-5" />,
        actionItems: [
          "Feste Dimensionen für alle Bilder und Videos definieren",
          "Skeleton-Loader für dynamische Inhalte einsetzen",
          "Font-Display: swap mit Font-Metrics-Override",
          "Ads und Embeds mit reserviertem Platz laden",
          "transform statt margin/padding für Animationen"
        ],
        expectedImprovement: "CLS auf unter 0.1 reduzieren",
        timeToImplement: "1-2 Stunden"
      });
    }
    
    // TTFB Optimization
    if (avgTTFB !== null && avgTTFB > 800) {
      recs.push({
        id: "ttfb-optimization",
        title: "Server-Antwortzeit verbessern",
        description: `TTFB von ${Math.round(avgTTFB)}ms ist zu hoch. Schnelle Server-Antworten sind die Basis für alle anderen Performance-Metriken.`,
        impact: "high",
        effort: "medium",
        category: "performance",
        priority: 2,
        icon: <Timer className="h-5 w-5" />,
        actionItems: [
          "Edge-Caching für statische Assets aktivieren",
          "Database-Queries optimieren und indizieren",
          "API-Responses cachen (Stale-While-Revalidate)",
          "HTTP/3 und Brotli-Komprimierung aktivieren",
          "Regional näheren Server/CDN-PoP nutzen"
        ],
        expectedImprovement: `TTFB auf unter 600ms senken`,
        timeToImplement: "2-3 Stunden"
      });
    }
    
    // CONTENT RECOMMENDATIONS
    
    // Outdated Content
    if (outdatedArticles.length > 0) {
      const urgentArticles = outdatedArticles.slice(0, 5).map(a => a.de.title);
      recs.push({
        id: "content-freshness",
        title: `${outdatedArticles.length} Artikel aktualisieren`,
        description: `Diese Artikel wurden seit 6+ Monaten nicht aktualisiert. Google bevorzugt frische Inhalte – besonders für YMYL-Themen.`,
        impact: "high",
        effort: "medium",
        category: "content",
        priority: 4,
        icon: <FileText className="h-5 w-5" />,
        actionItems: [
          `Priorität 1: "${urgentArticles[0]}" aktualisieren`,
          urgentArticles[1] ? `Priorität 2: "${urgentArticles[1]}" aktualisieren` : "Alle Statistiken auf 2025 aktualisieren",
          "Veraltete Screenshots und Beispiele ersetzen",
          "Neue Entwicklungen und Trends ergänzen",
          "Interne Verlinkung überprüfen und erweitern"
        ],
        expectedImprovement: "15-25% mehr organischer Traffic auf aktualisierten Seiten",
        timeToImplement: `${outdatedArticles.length * 30} Minuten gesamt`
      });
    }
    
    // Low Publishing Frequency
    if (recentPosts < 4) {
      recs.push({
        id: "publishing-frequency",
        title: "Veröffentlichungsfrequenz erhöhen",
        description: `Mit nur ${recentPosts} Posts im letzten Monat liegst du unter dem Branchendurchschnitt von 4 Posts. Regelmäßiger Content verbessert Rankings und Traffic.`,
        impact: "medium",
        effort: "high",
        category: "content",
        priority: 6,
        icon: <FileText className="h-5 w-5" />,
        actionItems: [
          "Content-Kalender für 4-8 Posts pro Monat erstellen",
          "Cornerstone-Content in kleinere Artikel aufteilen",
          "FAQ-Seiten aus häufigen Kundenfragen erstellen",
          "Lokale Case Studies und Erfolgsgeschichten publizieren",
          "Gastbeiträge und Experteninterviews einplanen"
        ],
        expectedImprovement: "2x mehr indexierte Seiten in 3 Monaten",
        timeToImplement: "Laufend, 4-8 Std/Woche"
      });
    }
    
    // ENGAGEMENT RECOMMENDATIONS
    
    // High Bounce Rate
    if (bounceRate > 50) {
      recs.push({
        id: "reduce-bounce-rate",
        title: "Bounce Rate reduzieren",
        description: `${bounceRate.toFixed(1)}% der Besucher verlassen die Seite ohne Interaktion. Ziel sollte unter 40% sein.`,
        impact: "high",
        effort: "medium",
        category: "engagement",
        priority: 5,
        icon: <Users className="h-5 w-5" />,
        actionItems: [
          "Above-the-Fold Content mit klarem Value Proposition",
          "Interaktive Elemente (Quiz, Rechner, Checklisten) einbinden",
          "Interne Links prominent in den ersten Absätzen platzieren",
          "Exit-Intent Popups mit relevantem Angebot",
          "Mobile Navigation und Touch-Targets verbessern"
        ],
        expectedImprovement: `Bounce Rate um ${Math.round((bounceRate - 35) * 0.4)}% senken`,
        timeToImplement: "3-5 Stunden"
      });
    }
    
    // Low Session Duration
    if (avgSessionDuration > 0 && avgSessionDuration < 120) {
      recs.push({
        id: "increase-session-duration",
        title: "Verweildauer steigern",
        description: `Durchschnittliche Sitzungsdauer von ${Math.round(avgSessionDuration)}s liegt unter dem Branchenschnitt von 2 Minuten.`,
        impact: "medium",
        effort: "medium",
        category: "engagement",
        priority: 7,
        icon: <Clock className="h-5 w-5" />,
        actionItems: [
          "Video-Content und Infografiken einbinden",
          "Längere, detailliertere Artikel schreiben (2000+ Wörter)",
          "Related Articles prominent am Ende anzeigen",
          "Interaktive Tools und Rechner integrieren",
          "Kommentarfunktion oder Q&A-Bereich aktivieren"
        ],
        expectedImprovement: "Verweildauer auf 2+ Minuten erhöhen",
        timeToImplement: "4-6 Stunden"
      });
    }
    
    // Low Conversion Rate
    if (conversionRate < 2) {
      recs.push({
        id: "improve-conversions",
        title: "Conversion Rate optimieren",
        description: `Deine Conversion Rate von ${conversionRate.toFixed(2)}% liegt unter dem Branchendurchschnitt von 2.5%. Hier liegt erhebliches Umsatzpotenzial.`,
        impact: "high",
        effort: "medium",
        category: "engagement",
        priority: 3,
        icon: <Target className="h-5 w-5" />,
        actionItems: [
          "CTAs prominenter und mit klarerem Nutzen gestalten",
          "Social Proof (Testimonials, Logos) nahe der CTAs",
          "Formularfelder auf das Minimum reduzieren",
          "Urgency-Elemente (begrenzte Verfügbarkeit) testen",
          "A/B-Tests für Headline und CTA-Texte durchführen"
        ],
        expectedImprovement: `${((2.5 - conversionRate) * sessionData.length / 100).toFixed(0)} zusätzliche Conversions/Monat möglich`,
        timeToImplement: "2-4 Stunden"
      });
    }
    
    // TECHNICAL RECOMMENDATIONS
    
    // Internal Linking
    const avgInternalLinks = blogArticles.reduce((sum, a) => {
      // Simple heuristic: check for links in content
      return sum + (a.de.excerpt?.match(/href/g)?.length || 0);
    }, 0) / blogArticles.length;
    
    if (avgInternalLinks < 3) {
      recs.push({
        id: "internal-linking",
        title: "Interne Verlinkung stärken",
        description: "Eine starke interne Verlinkung verteilt PageRank und hilft Google, deine Seitenstruktur zu verstehen.",
        impact: "medium",
        effort: "low",
        category: "technical",
        priority: 8,
        icon: <Link2 className="h-5 w-5" />,
        actionItems: [
          "Mindestens 3-5 interne Links pro Artikel setzen",
          "Cornerstone-Content von vielen Seiten verlinken",
          "Verwandte Artikel am Ende jedes Posts anzeigen",
          "Breadcrumb-Navigation implementieren",
          "Lexikon-Einträge in Artikeln verlinken"
        ],
        expectedImprovement: "Bessere Indexierung und PageRank-Verteilung",
        timeToImplement: "1-2 Stunden"
      });
    }
    
    // Sort by priority
    return recs.sort((a, b) => a.priority - b.priority);
  }, [sessionData, conversionData]);

  const getImpactBadge = (impact: Recommendation["impact"]) => {
    switch (impact) {
      case "high": return <Badge className="bg-red-100 text-red-800">Hoher Impact</Badge>;
      case "medium": return <Badge className="bg-yellow-100 text-yellow-800">Mittlerer Impact</Badge>;
      case "low": return <Badge className="bg-green-100 text-green-800">Niedriger Impact</Badge>;
    }
  };

  const getEffortBadge = (effort: Recommendation["effort"]) => {
    switch (effort) {
      case "low": return <Badge variant="outline" className="border-green-500 text-green-700">Wenig Aufwand</Badge>;
      case "medium": return <Badge variant="outline" className="border-yellow-500 text-yellow-700">Mittlerer Aufwand</Badge>;
      case "high": return <Badge variant="outline" className="border-red-500 text-red-700">Hoher Aufwand</Badge>;
    }
  };

  const getCategoryIcon = (category: Recommendation["category"]) => {
    switch (category) {
      case "performance": return <Zap className="h-4 w-4 text-orange-500" />;
      case "content": return <FileText className="h-4 w-4 text-blue-500" />;
      case "engagement": return <Users className="h-4 w-4 text-purple-500" />;
      case "technical": return <Link2 className="h-4 w-4 text-gray-500" />;
    }
  };

  const quickWins = recommendations.filter(r => r.impact === "high" && r.effort === "low");
  const strategicPriorities = recommendations.filter(r => r.impact === "high" && r.effort !== "low");

  if (recommendations.length === 0) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Exzellente Performance!</h3>
              <p className="text-sm text-green-700">
                Basierend auf den aktuellen Daten gibt es keine dringenden Verbesserungsempfehlungen. Weiter so!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          KI-Empfehlungen
        </h3>
        <p className="text-sm text-muted-foreground">
          Automatisch generierte Maßnahmen basierend auf deinen aktuellen Metriken
        </p>
      </div>

      {/* Quick Wins */}
      {quickWins.length > 0 && (
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Quick Wins – Hoher Impact, wenig Aufwand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {quickWins.map((rec) => (
                <div key={rec.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-100 transition-colors">
                  {rec.icon}
                  <span className="flex-1 font-medium">{rec.title}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Priority Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="pt-4 text-center">
            <Zap className="h-6 w-6 mx-auto mb-1 text-orange-500" />
            <div className="text-2xl font-bold text-orange-700">
              {recommendations.filter(r => r.category === "performance").length}
            </div>
            <div className="text-xs text-orange-600">Performance</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-4 text-center">
            <FileText className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <div className="text-2xl font-bold text-blue-700">
              {recommendations.filter(r => r.category === "content").length}
            </div>
            <div className="text-xs text-blue-600">Content</div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-4 text-center">
            <Users className="h-6 w-6 mx-auto mb-1 text-purple-500" />
            <div className="text-2xl font-bold text-purple-700">
              {recommendations.filter(r => r.category === "engagement").length}
            </div>
            <div className="text-xs text-purple-600">Engagement</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="pt-4 text-center">
            <Link2 className="h-6 w-6 mx-auto mb-1 text-gray-500" />
            <div className="text-2xl font-bold text-gray-700">
              {recommendations.filter(r => r.category === "technical").length}
            </div>
            <div className="text-xs text-gray-600">Technisch</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Recommendations */}
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <Card 
            key={rec.id} 
            className={`transition-all hover:shadow-md ${
              index === 0 ? "border-2 border-primary ring-2 ring-primary/10" : ""
            }`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    {rec.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {index === 0 && (
                        <Badge variant="default" className="text-xs">Höchste Priorität</Badge>
                      )}
                      {rec.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {rec.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {getImpactBadge(rec.impact)}
                  {getEffortBadge(rec.effort)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {/* Action Items */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Konkrete Maßnahmen
                  </h4>
                  <ul className="space-y-1.5">
                    {rec.actionItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Expected Outcome */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <h4 className="text-sm font-medium text-green-800 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Erwartete Verbesserung
                    </h4>
                    <p className="text-sm text-green-700 mt-1">{rec.expectedImprovement}</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Geschätzter Aufwand
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{rec.timeToImplement}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Summary */}
      <Card className="bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Nächste Schritte</h4>
              <p className="text-sm text-muted-foreground">
                Starte mit der höchsten Priorität für maximalen Impact
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{recommendations.length}</div>
              <div className="text-sm text-muted-foreground">Empfehlungen</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIRecommendations;
