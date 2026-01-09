import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText, 
  RefreshCw,
  TrendingUp,
  Calendar,
  AlertCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { blogArticles } from "@/data/blogArticles";

interface SEOIssue {
  type: string;
  severity: "critical" | "warning" | "info";
  message: string;
  slug?: string;
}

interface SEOHealthData {
  healthScore: number;
  totalArticles: number;
  outdatedArticles: number;
  recentArticles: number;
  ymylArticles: number;
  issues: SEOIssue[];
  lastChecked: string | null;
}

const SEOHealthDashboard = () => {
  const [healthData, setHealthData] = useState<SEOHealthData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const calculateHealthData = (): SEOHealthData => {
    const now = new Date();
    const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    const issues: SEOIssue[] = [];
    let outdatedCount = 0;
    let recentCount = 0;
    
    // YMYL categories that need extra attention
    const ymylCategories = ["Branchen"];
    const ymylSlugs = ["local-seo-aerzte", "local-seo-anwaelte", "local-seo-steuerberater"];
    
    blogArticles.forEach(article => {
      const updatedDate = new Date(article.updatedAt);
      const isYMYL = ymylSlugs.some(s => article.slug.includes(s)) || 
                     ymylCategories.includes(article.de.category);
      
      // Check for outdated content
      if (updatedDate < sixMonthsAgo) {
        outdatedCount++;
        issues.push({
          type: "outdated",
          severity: isYMYL ? "critical" : "warning",
          message: `"${article.de.title}" nicht seit ${Math.floor((now.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24))} Tagen aktualisiert`,
          slug: article.slug
        });
      }
      
      // Check for recent updates
      if (updatedDate > oneMonthAgo) {
        recentCount++;
      }
      
      // Check for year references that might be outdated
      const currentYear = now.getFullYear();
      const title = article.de.title;
      const yearMatch = title.match(/\b(202[0-9])\b/);
      if (yearMatch && parseInt(yearMatch[1]) < currentYear) {
        issues.push({
          type: "year_reference",
          severity: "warning",
          message: `"${article.de.title}" enthält veraltete Jahresangabe (${yearMatch[1]})`,
          slug: article.slug
        });
      }
    });
    
    // Calculate health score (0-100)
    const outdatedPenalty = (outdatedCount / blogArticles.length) * 40;
    const recentBonus = (recentCount / blogArticles.length) * 20;
    const criticalPenalty = issues.filter(i => i.severity === "critical").length * 10;
    const warningPenalty = issues.filter(i => i.severity === "warning").length * 2;
    
    const healthScore = Math.max(0, Math.min(100, 
      100 - outdatedPenalty - criticalPenalty - warningPenalty + recentBonus
    ));
    
    return {
      healthScore: Math.round(healthScore),
      totalArticles: blogArticles.length,
      outdatedArticles: outdatedCount,
      recentArticles: recentCount,
      ymylArticles: blogArticles.filter(a => 
        ymylSlugs.some(s => a.slug.includes(s))
      ).length,
      issues: issues.sort((a, b) => {
        const severityOrder = { critical: 0, warning: 1, info: 2 };
        return severityOrder[a.severity] - severityOrder[b.severity];
      }),
      lastChecked: new Date().toISOString()
    };
  };

  useEffect(() => {
    setHealthData(calculateHealthData());
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Call the SEO monitoring edge function
      await supabase.functions.invoke("seo-monitoring");
      setHealthData(calculateHealthData());
    } catch (error) {
      console.error("Error refreshing SEO health:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getHealthBg = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "destructive";
      case "warning": return "secondary";
      default: return "outline";
    }
  };

  if (!healthData) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Health Score Header */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              SEO Health Score
            </CardTitle>
            <CardDescription>
              Basierend auf {healthData.totalArticles} Artikeln
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
            Aktualisieren
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className={`text-5xl font-bold ${getHealthColor(healthData.healthScore)}`}>
              {healthData.healthScore}
            </div>
            <div className="flex-1">
              <Progress 
                value={healthData.healthScore} 
                className="h-4"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Kritisch</span>
                <span>Gut</span>
                <span>Exzellent</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Gesamt Artikel</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthData.totalArticles}</div>
          </CardContent>
        </Card>
        
        <Card className={healthData.outdatedArticles > 0 ? "border-yellow-500/50" : ""}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Veraltet</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {healthData.outdatedArticles}
            </div>
            <p className="text-xs text-muted-foreground">Älter als 6 Monate</p>
          </CardContent>
        </Card>
        
        <Card className="border-green-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Kürzlich aktualisiert</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {healthData.recentArticles}
            </div>
            <p className="text-xs text-muted-foreground">In den letzten 30 Tagen</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">YMYL Artikel</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthData.ymylArticles}</div>
            <p className="text-xs text-muted-foreground">Besondere Aufmerksamkeit</p>
          </CardContent>
        </Card>
      </div>

      {/* Issues List */}
      {healthData.issues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              SEO Issues ({healthData.issues.length})
            </CardTitle>
            <CardDescription>
              Probleme die behoben werden sollten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {healthData.issues.slice(0, 10).map((issue, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                >
                  {issue.severity === "critical" ? (
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  ) : issue.severity === "warning" ? (
                    <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant={getSeverityColor(issue.severity)}>
                        {issue.type === "outdated" ? "Veraltet" : 
                         issue.type === "year_reference" ? "Jahresangabe" : issue.type}
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">{issue.message}</p>
                    {issue.slug && (
                      <a 
                        href={`/blog/${issue.slug}`}
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Artikel ansehen →
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {healthData.issues.length > 10 && (
                <p className="text-sm text-muted-foreground text-center py-2">
                  +{healthData.issues.length - 10} weitere Issues
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Last Checked */}
      {healthData.lastChecked && (
        <p className="text-xs text-muted-foreground text-center">
          <Calendar className="h-3 w-3 inline mr-1" />
          Zuletzt geprüft: {new Date(healthData.lastChecked).toLocaleString("de-DE")}
        </p>
      )}
    </div>
  );
};

export default SEOHealthDashboard;
