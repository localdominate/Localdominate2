import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Users, TrendingUp, Clock, ExternalLink, BarChart3, Timer, Scroll, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ArticleStats {
  article_slug: string;
  article_title: string;
  total_views: number;
  unique_visitors: number;
  first_view: string;
  last_view: string;
  views_today: number;
  views_week: number;
  views_month: number;
  avg_scroll_depth?: number;
  avg_reading_time?: number;
  avg_engagement_score?: number;
  completion_rate?: number;
  finished_count?: number;
}

interface OverallStats {
  totalViews: number;
  uniqueVisitors: number;
  viewsToday: number;
  viewsWeek: number;
  articlesTracked: number;
  avgScrollDepth: number;
  avgReadingTime: number;
  avgEngagementScore: number;
  completionRate: number;
}

const BlogAnalytics = () => {
  const [articleStats, setArticleStats] = useState<ArticleStats[]>([]);
  const [overallStats, setOverallStats] = useState<OverallStats>({
    totalViews: 0,
    uniqueVisitors: 0,
    viewsToday: 0,
    viewsWeek: 0,
    articlesTracked: 0,
    avgScrollDepth: 0,
    avgReadingTime: 0,
    avgEngagementScore: 0,
    completionRate: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month' | 'all'>('week');

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      // Load article stats from the view
      const { data: stats, error } = await supabase
        .from('blog_article_stats')
        .select('*')
        .order('total_views', { ascending: false });

      if (error) {
        console.error('Error loading stats:', error);
        // If view doesn't exist, query directly
        const { data: rawData } = await supabase
          .from('blog_article_views')
          .select('article_slug, article_title, session_id, created_at');
        
        if (rawData) {
          // Aggregate manually
          const aggregated = rawData.reduce((acc, view) => {
            if (!acc[view.article_slug]) {
              acc[view.article_slug] = {
                article_slug: view.article_slug,
                article_title: view.article_title || view.article_slug,
                total_views: 0,
                unique_visitors: new Set(),
                first_view: view.created_at,
                last_view: view.created_at,
                views_today: 0,
                views_week: 0,
                views_month: 0
              };
            }
            acc[view.article_slug].total_views++;
            acc[view.article_slug].unique_visitors.add(view.session_id);
            
            const viewDate = new Date(view.created_at);
            const now = new Date();
            const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            
            if (viewDate > dayAgo) acc[view.article_slug].views_today++;
            if (viewDate > weekAgo) acc[view.article_slug].views_week++;
            if (viewDate > monthAgo) acc[view.article_slug].views_month++;
            
            if (viewDate < new Date(acc[view.article_slug].first_view)) {
              acc[view.article_slug].first_view = view.created_at;
            }
            if (viewDate > new Date(acc[view.article_slug].last_view)) {
              acc[view.article_slug].last_view = view.created_at;
            }
            
            return acc;
          }, {} as Record<string, any>);
          
          const processedStats = Object.values(aggregated).map((s: any) => ({
            ...s,
            unique_visitors: s.unique_visitors.size
          }));
          
          setArticleStats(processedStats.sort((a, b) => b.total_views - a.total_views));
        }
      } else if (stats) {
        setArticleStats(stats);
      }

      // Calculate overall stats
      const { count: totalViews } = await supabase
        .from('blog_article_views')
        .select('*', { count: 'exact', head: true });

      const { data: uniqueData } = await supabase
        .from('blog_article_views')
        .select('session_id');

      const uniqueSessions = new Set(uniqueData?.map(d => d.session_id) || []);

      const now = new Date();
      const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

      const { count: viewsToday } = await supabase
        .from('blog_article_views')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', dayAgo);

      const { count: viewsWeek } = await supabase
        .from('blog_article_views')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', weekAgo);

      const { data: articlesData } = await supabase
        .from('blog_article_views')
        .select('article_slug');

      const uniqueArticles = new Set(articlesData?.map(d => d.article_slug) || []);

      // Calculate engagement averages
      const { data: engagementData } = await supabase
        .from('blog_article_views')
        .select('max_scroll_depth, reading_time_seconds, engagement_score, finished_reading')
        .not('max_scroll_depth', 'is', null);

      let avgScrollDepth = 0;
      let avgReadingTime = 0;
      let avgEngagementScore = 0;
      let completionRate = 0;

      if (engagementData && engagementData.length > 0) {
        const validData = engagementData.filter(d => d.max_scroll_depth !== null);
        avgScrollDepth = validData.reduce((sum, d) => sum + (d.max_scroll_depth || 0), 0) / validData.length;
        avgReadingTime = validData.reduce((sum, d) => sum + (d.reading_time_seconds || 0), 0) / validData.length;
        avgEngagementScore = validData.reduce((sum, d) => sum + (d.engagement_score || 0), 0) / validData.length;
        const finishedCount = validData.filter(d => d.finished_reading).length;
        completionRate = (finishedCount / validData.length) * 100;
      }

      setOverallStats({
        totalViews: totalViews || 0,
        uniqueVisitors: uniqueSessions.size,
        viewsToday: viewsToday || 0,
        viewsWeek: viewsWeek || 0,
        articlesTracked: uniqueArticles.size,
        avgScrollDepth: Math.round(avgScrollDepth),
        avgReadingTime: Math.round(avgReadingTime),
        avgEngagementScore: Math.round(avgEngagementScore),
        completionRate: Math.round(completionRate)
      });

    } catch (error) {
      console.error('Error loading blog analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getViewCount = (stat: ArticleStats) => {
    switch (timeRange) {
      case 'today': return stat.views_today;
      case 'week': return stat.views_week;
      case 'month': return stat.views_month;
      default: return stat.total_views;
    }
  };

  const sortedStats = [...articleStats].sort((a, b) => getViewCount(b) - getViewCount(a));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/ab-test-zentrale">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Blog Analytics</h1>
          </div>
          <Button onClick={loadStats} variant="outline" size="sm">
            Aktualisieren
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Gesamt Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.totalViews.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Unique Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.uniqueVisitors.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Heute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.viewsToday.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Diese Woche
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.viewsWeek.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Artikel getrackt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.articlesTracked}</p>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Scroll className="h-4 w-4" />
                Ø Scroll-Tiefe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.avgScrollDepth}%</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Ø Lesezeit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {Math.floor(overallStats.avgReadingTime / 60)}:{String(overallStats.avgReadingTime % 60).padStart(2, '0')}
              </p>
              <p className="text-xs text-muted-foreground">Minuten</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Ø Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.avgEngagementScore}</p>
              <p className="text-xs text-muted-foreground">Score (0-100)</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Fertig gelesen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{overallStats.completionRate}%</p>
            </CardContent>
          </Card>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-2 mb-6">
          {(['today', 'week', 'month', 'all'] as const).map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range === 'today' ? 'Heute' : 
               range === 'week' ? 'Diese Woche' : 
               range === 'month' ? 'Dieser Monat' : 'Gesamt'}
            </Button>
          ))}
        </div>

        {/* Article Stats Table */}
        <Card>
          <CardHeader>
            <CardTitle>Artikel nach Views ({timeRange === 'today' ? 'Heute' : 
              timeRange === 'week' ? 'Diese Woche' : 
              timeRange === 'month' ? 'Dieser Monat' : 'Gesamt'})</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : sortedStats.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Noch keine Artikel-Views getrackt. Besuche einige Blog-Artikel, um Daten zu sammeln.
              </p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Artikel</TableHead>
                    <TableHead className="text-right">Views</TableHead>
                    <TableHead className="text-right hidden sm:table-cell">Ø Scroll</TableHead>
                    <TableHead className="text-right hidden md:table-cell">Ø Lesezeit</TableHead>
                    <TableHead className="text-right hidden lg:table-cell">Engagement</TableHead>
                    <TableHead className="text-right hidden xl:table-cell">Fertig %</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedStats.map((stat, index) => (
                    <TableRow key={stat.article_slug}>
                      <TableCell className="font-medium">
                        {index < 3 ? (
                          <Badge variant={index === 0 ? 'default' : 'secondary'}>
                            {index + 1}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">{index + 1}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium line-clamp-1">
                            {stat.article_title || stat.article_slug}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            /{stat.article_slug}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-bold">
                        {getViewCount(stat).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right hidden sm:table-cell">
                        <span className={`font-medium ${(stat.avg_scroll_depth || 0) >= 75 ? 'text-green-600' : (stat.avg_scroll_depth || 0) >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                          {Math.round(stat.avg_scroll_depth || 0)}%
                        </span>
                      </TableCell>
                      <TableCell className="text-right hidden md:table-cell text-muted-foreground">
                        {Math.floor((stat.avg_reading_time || 0) / 60)}:{String(Math.round((stat.avg_reading_time || 0) % 60)).padStart(2, '0')}
                      </TableCell>
                      <TableCell className="text-right hidden lg:table-cell">
                        <Badge variant={(stat.avg_engagement_score || 0) >= 60 ? 'default' : 'secondary'}>
                          {Math.round(stat.avg_engagement_score || 0)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right hidden xl:table-cell text-muted-foreground">
                        {Math.round(stat.completion_rate || 0)}%
                      </TableCell>
                      <TableCell>
                        <Link to={`/blog/${stat.article_slug}`} target="_blank">
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Top 5 Visual */}
        {sortedStats.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Top 5 Artikel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sortedStats.slice(0, 5).map((stat, index) => {
                  const maxViews = getViewCount(sortedStats[0]);
                  const percentage = maxViews > 0 ? (getViewCount(stat) / maxViews) * 100 : 0;
                  
                  return (
                    <div key={stat.article_slug}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium line-clamp-1">
                          {index + 1}. {stat.article_title || stat.article_slug}
                        </span>
                        <span className="text-sm font-bold">{getViewCount(stat)}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default BlogAnalytics;