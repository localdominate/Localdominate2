import { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  ExternalLink,
  Calendar,
  TrendingUp
} from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { Link } from "react-router-dom";

interface ArticleFreshness {
  slug: string;
  title: string;
  updatedAt: Date;
  daysSinceUpdate: number;
  status: "fresh" | "aging" | "stale" | "critical";
  isYMYL: boolean;
}

const ContentFreshnessAlerts = () => {
  const freshnessData = useMemo(() => {
    const now = new Date();
    const ymylSlugs = ["local-seo-aerzte", "local-seo-anwaelte", "local-seo-steuerberater"];
    
    const articles: ArticleFreshness[] = blogArticles.map(article => {
      const updatedDate = new Date(article.updatedAt);
      const daysSinceUpdate = Math.floor(
        (now.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      
      const isYMYL = ymylSlugs.some(s => article.slug.includes(s));
      
      // Determine status based on age and YMYL status
      let status: ArticleFreshness["status"];
      if (isYMYL) {
        // YMYL articles have stricter thresholds
        if (daysSinceUpdate <= 30) status = "fresh";
        else if (daysSinceUpdate <= 90) status = "aging";
        else if (daysSinceUpdate <= 180) status = "stale";
        else status = "critical";
      } else {
        if (daysSinceUpdate <= 60) status = "fresh";
        else if (daysSinceUpdate <= 180) status = "aging";
        else if (daysSinceUpdate <= 365) status = "stale";
        else status = "critical";
      }
      
      return {
        slug: article.slug,
        title: article.de.title,
        updatedAt: updatedDate,
        daysSinceUpdate,
        status,
        isYMYL
      };
    }).sort((a, b) => b.daysSinceUpdate - a.daysSinceUpdate);
    
    return {
      articles,
      critical: articles.filter(a => a.status === "critical"),
      stale: articles.filter(a => a.status === "stale"),
      aging: articles.filter(a => a.status === "aging"),
      fresh: articles.filter(a => a.status === "fresh"),
    };
  }, []);

  const getStatusColor = (status: ArticleFreshness["status"]) => {
    switch (status) {
      case "fresh": return "bg-green-100 text-green-800 border-green-200";
      case "aging": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "stale": return "bg-orange-100 text-orange-800 border-orange-200";
      case "critical": return "bg-red-100 text-red-800 border-red-200";
    }
  };

  const getStatusBadge = (status: ArticleFreshness["status"]) => {
    switch (status) {
      case "fresh": return "default";
      case "aging": return "secondary";
      case "stale": return "outline";
      case "critical": return "destructive";
    }
  };

  const getStatusLabel = (status: ArticleFreshness["status"]) => {
    switch (status) {
      case "fresh": return "Aktuell";
      case "aging": return "Wird älter";
      case "stale": return "Veraltet";
      case "critical": return "Kritisch";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aktuell</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">{freshnessData.fresh.length}</div>
            <p className="text-xs text-green-600">Keine Aktion nötig</p>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-200 bg-yellow-50/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Wird älter</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-700">{freshnessData.aging.length}</div>
            <p className="text-xs text-yellow-600">Bald überprüfen</p>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Veraltet</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">{freshnessData.stale.length}</div>
            <p className="text-xs text-orange-600">Update empfohlen</p>
          </CardContent>
        </Card>
        
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Kritisch</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-700">{freshnessData.critical.length}</div>
            <p className="text-xs text-red-600">Sofort aktualisieren</p>
          </CardContent>
        </Card>
      </div>

      {/* Critical & Stale Articles */}
      {(freshnessData.critical.length > 0 || freshnessData.stale.length > 0) && (
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Artikel die aktualisiert werden müssen
            </CardTitle>
            <CardDescription>
              Diese Artikel sollten priorisiert überarbeitet werden
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[...freshnessData.critical, ...freshnessData.stale].map((article) => (
                <div 
                  key={article.slug}
                  className={`flex items-center justify-between p-3 rounded-lg border ${getStatusColor(article.status)}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusBadge(article.status)}>
                        {getStatusLabel(article.status)}
                      </Badge>
                      {article.isYMYL && (
                        <Badge variant="outline" className="border-purple-300 text-purple-700">
                          YMYL
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-medium mt-1 line-clamp-1">{article.title}</h4>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.updatedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.daysSinceUpdate} Tage her
                      </span>
                    </div>
                  </div>
                  <Link to={`/blog/${article.slug}`} target="_blank">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Articles Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Content Freshness Timeline
          </CardTitle>
          <CardDescription>
            Alle Artikel sortiert nach letztem Update
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {freshnessData.articles.map((article) => (
              <div 
                key={article.slug}
                className="flex items-center gap-3 py-2 px-3 rounded hover:bg-muted/50 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${
                  article.status === "fresh" ? "bg-green-500" :
                  article.status === "aging" ? "bg-yellow-500" :
                  article.status === "stale" ? "bg-orange-500" : "bg-red-500"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{article.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  {article.isYMYL && (
                    <Badge variant="outline" className="text-xs">YMYL</Badge>
                  )}
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {article.daysSinceUpdate}d
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentFreshnessAlerts;
