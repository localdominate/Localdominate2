import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb,
  Target,
  Clock,
  Scroll,
  BarChart3,
  ExternalLink,
  RefreshCw,
  Trophy,
  XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import ContentMetricsDashboard from "@/components/admin/ContentMetricsDashboard";

interface ArticleStats {
  article_slug: string;
  article_title: string;
  total_views: number;
  unique_visitors: number;
  avg_scroll_depth: number | null;
  avg_reading_time: number | null;
  avg_engagement_score: number | null;
  completion_rate: number | null;
  finished_count: number | null;
  first_view: string;
  last_view: string;
  views_today: number;
  views_week: number;
  views_month: number;
}

interface OptimizationSuggestion {
  type: 'critical' | 'warning' | 'info';
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

interface PerformanceCategory {
  label: string;
  color: string;
  bgColor: string;
  description: string;
}

const ContentPerformanceDashboard = () => {
  const [articleStats, setArticleStats] = useState<ArticleStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('blog_article_stats')
        .select('*')
        .order('total_views', { ascending: false });

      if (error) {
        console.error('Error loading stats:', error);
      } else if (data) {
        setArticleStats(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate performance score for each article
  const calculatePerformanceScore = (article: ArticleStats): number => {
    const scrollScore = (article.avg_scroll_depth || 0) * 0.3;
    const engagementScore = (article.avg_engagement_score || 0) * 0.4;
    const completionScore = (article.completion_rate || 0) * 0.3;
    return Math.round(scrollScore + engagementScore + completionScore);
  };

  // Categorize articles by performance
  const categorizedArticles = useMemo(() => {
    const withScores = articleStats
      .filter(a => a.total_views >= 3) // Minimum views for meaningful analysis
      .map(article => ({
        ...article,
        performanceScore: calculatePerformanceScore(article)
      }));

    const sorted = [...withScores].sort((a, b) => b.performanceScore - a.performanceScore);
    
    const topPerformers = sorted.filter(a => a.performanceScore >= 60);
    const needsImprovement = sorted.filter(a => a.performanceScore >= 30 && a.performanceScore < 60);
    const underperforming = sorted.filter(a => a.performanceScore < 30);

    return { topPerformers, needsImprovement, underperforming, all: sorted };
  }, [articleStats]);

  // Generate optimization suggestions for an article
  const generateSuggestions = (article: ArticleStats & { performanceScore: number }): OptimizationSuggestion[] => {
    const suggestions: OptimizationSuggestion[] = [];
    const scrollDepth = article.avg_scroll_depth || 0;
    const readingTime = article.avg_reading_time || 0;
    const engagementScore = article.avg_engagement_score || 0;
    const completionRate = article.completion_rate || 0;

    // Low scroll depth
    if (scrollDepth < 40) {
      suggestions.push({
        type: 'critical',
        icon: <Scroll className="h-4 w-4" />,
        title: 'Niedrige Scroll-Tiefe',
        description: `Nur ${Math.round(scrollDepth)}% des Artikels werden durchschnittlich gescrollt.`,
        action: 'Füge am Anfang eine fesselnde Zusammenfassung oder Key Takeaways hinzu. Nutze visuelle Elemente wie Bilder oder Infografiken im oberen Bereich.'
      });
    } else if (scrollDepth < 60) {
      suggestions.push({
        type: 'warning',
        icon: <Scroll className="h-4 w-4" />,
        title: 'Mittlere Scroll-Tiefe',
        description: `${Math.round(scrollDepth)}% durchschnittliche Scroll-Tiefe - Raum für Verbesserung.`,
        action: 'Strukturiere den Inhalt mit mehr Zwischenüberschriften (H2/H3). Füge Call-to-Actions oder interaktive Elemente in der Mitte ein.'
      });
    }

    // Low completion rate
    if (completionRate < 20) {
      suggestions.push({
        type: 'critical',
        icon: <Target className="h-4 w-4" />,
        title: 'Sehr niedrige Abschlussrate',
        description: `Nur ${Math.round(completionRate)}% lesen den Artikel zu Ende.`,
        action: 'Kürze den Artikel oder teile ihn in mehrere Teile auf. Prüfe, ob der Inhalt die Erwartungen der Überschrift erfüllt.'
      });
    } else if (completionRate < 40) {
      suggestions.push({
        type: 'warning',
        icon: <Target className="h-4 w-4" />,
        title: 'Niedrige Abschlussrate',
        description: `${Math.round(completionRate)}% lesen bis zum Ende.`,
        action: 'Füge am Ende einen starken CTA oder weiterführende Ressourcen hinzu. Nutze Storytelling-Elemente.'
      });
    }

    // Low reading time relative to content
    if (readingTime < 60 && scrollDepth > 50) {
      suggestions.push({
        type: 'warning',
        icon: <Clock className="h-4 w-4" />,
        title: 'Schnelles Überfliegen',
        description: 'Leser scrollen schnell durch, ohne intensiv zu lesen.',
        action: 'Verbessere die Scanbarkeit mit Bullet-Points, fetten Textstellen und kürzeren Absätzen. Füge ein Inhaltsverzeichnis hinzu.'
      });
    }

    // Low engagement score
    if (engagementScore < 30) {
      suggestions.push({
        type: 'critical',
        icon: <BarChart3 className="h-4 w-4" />,
        title: 'Niedriges Engagement',
        description: `Engagement-Score von nur ${Math.round(engagementScore)}/100.`,
        action: 'Prüfe die Meta-Description und Überschrift - passen sie zum Inhalt? Füge interaktive Elemente wie Checklisten, Rechner oder Tools hinzu.'
      });
    }

    // High views but low engagement (content-market mismatch)
    if (article.total_views > 10 && engagementScore < 40) {
      suggestions.push({
        type: 'warning',
        icon: <AlertTriangle className="h-4 w-4" />,
        title: 'Content-Traffic-Mismatch',
        description: 'Viele Views, aber niedriges Engagement.',
        action: 'Die Überschrift zieht Traffic an, aber der Inhalt erfüllt nicht die Erwartungen. Überarbeite den Artikel basierend auf den Suchintentionen.'
      });
    }

    // For top performers - optimization tips
    if (article.performanceScore >= 60) {
      suggestions.push({
        type: 'info',
        icon: <Trophy className="h-4 w-4" />,
        title: 'Top-Performer!',
        description: `Dieser Artikel performt hervorragend mit einem Score von ${article.performanceScore}.`,
        action: 'Nutze diesen Artikel als Vorbild. Verlinke von anderen Artikeln hierher. Erwäge eine Erweiterung oder einen Follow-up-Artikel.'
      });
    }

    return suggestions;
  };

  const getPerformanceCategory = (score: number): PerformanceCategory => {
    if (score >= 60) return { 
      label: 'Top-Performer', 
      color: 'text-green-600', 
      bgColor: 'bg-green-100',
      description: 'Exzellentes Engagement'
    };
    if (score >= 30) return { 
      label: 'Verbesserungspotenzial', 
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-100',
      description: 'Optimierung möglich'
    };
    return { 
      label: 'Unterperformer', 
      color: 'text-red-600', 
      bgColor: 'bg-red-100',
      description: 'Dringend überarbeiten'
    };
  };

  const formatReadingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  const ArticleCard = ({ article }: { article: ArticleStats & { performanceScore: number } }) => {
    const category = getPerformanceCategory(article.performanceScore);
    const suggestions = generateSuggestions(article);
    const [expanded, setExpanded] = useState(false);

    return (
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg line-clamp-2">
                {article.article_title || article.article_slug}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Link 
                  to={`/blog/${article.article_slug}`} 
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  /{article.article_slug}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardDescription>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge className={`${category.bgColor} ${category.color} border-0`}>
                {category.label}
              </Badge>
              <span className="text-2xl font-bold">{article.performanceScore}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Views</p>
              <p className="text-lg font-bold">{article.total_views}</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Scroll-Tiefe</p>
              <p className="text-lg font-bold">{Math.round(article.avg_scroll_depth || 0)}%</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Lesezeit</p>
              <p className="text-lg font-bold">{formatReadingTime(article.avg_reading_time || 0)}</p>
            </div>
            <div className="text-center p-2 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Fertig gelesen</p>
              <p className="text-lg font-bold">{Math.round(article.completion_rate || 0)}%</p>
            </div>
          </div>

          {/* Performance Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Performance Score</span>
              <span className={category.color}>{article.performanceScore}/100</span>
            </div>
            <Progress 
              value={article.performanceScore} 
              className="h-2"
            />
          </div>

          {/* Suggestions Preview */}
          {suggestions.length > 0 && (
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setExpanded(!expanded)}
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  {suggestions.length} Optimierungsvorschläge
                </span>
                <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
              </Button>
              
              {expanded && (
                <div className="space-y-3 pt-2">
                  {suggestions.map((suggestion, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-lg border ${
                        suggestion.type === 'critical' ? 'border-red-200 bg-red-50' :
                        suggestion.type === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                        'border-green-200 bg-green-50'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`mt-0.5 ${
                          suggestion.type === 'critical' ? 'text-red-600' :
                          suggestion.type === 'warning' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {suggestion.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{suggestion.title}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{suggestion.description}</p>
                          <p className="text-sm mt-2 p-2 bg-white/50 rounded border border-current/10">
                            💡 <strong>Empfehlung:</strong> {suggestion.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const SummaryCard = ({ 
    title, 
    count, 
    icon, 
    color, 
    bgColor,
    description 
  }: { 
    title: string; 
    count: number; 
    icon: React.ReactNode; 
    color: string;
    bgColor: string;
    description: string;
  }) => (
    <Card className={`${bgColor} border-0`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`${color}`}>{icon}</div>
          <div>
            <p className={`text-2xl font-bold ${color}`}>{count}</p>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

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
            <div>
              <h1 className="text-xl font-bold">Content Performance Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Identifiziere Gewinner und Optimierungspotenziale
              </p>
            </div>
          </div>
          <Button onClick={loadStats} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Aktualisieren
          </Button>
        </div>
      </header>

      <main className="container py-8">

        {/* ── NEW: Full Metrics Dashboard with charts & SEO interpretation ── */}
        <div className="mb-10">
          <ContentMetricsDashboard />
        </div>

        <div className="border-t border-border pt-8 mb-6">
          <h2 className="text-lg font-bold mb-1">Artikel-Analyse: Optimierungspotenziale</h2>
          <p className="text-sm text-muted-foreground mb-6">Detaillierte Handlungsempfehlungen je Artikel</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SummaryCard
            title="Top-Performer"
            count={categorizedArticles.topPerformers.length}
            icon={<Trophy className="h-6 w-6" />}
            color="text-green-600"
            bgColor="bg-green-50"
            description="Exzellentes Engagement"
          />
          <SummaryCard
            title="Verbesserungspotenzial"
            count={categorizedArticles.needsImprovement.length}
            icon={<AlertTriangle className="h-6 w-6" />}
            color="text-yellow-600"
            bgColor="bg-yellow-50"
            description="Optimierung möglich"
          />
          <SummaryCard
            title="Unterperformer"
            count={categorizedArticles.underperforming.length}
            icon={<XCircle className="h-6 w-6" />}
            color="text-red-600"
            bgColor="bg-red-50"
            description="Dringend überarbeiten"
          />
        </div>

        {categorizedArticles.all.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Noch nicht genügend Daten für eine Analyse. Artikel benötigen mindestens 3 Views.
              </p>
            </CardContent>
          </Card>
        ) : (
            title="Verbesserungspotenzial"
            count={categorizedArticles.needsImprovement.length}
            icon={<AlertTriangle className="h-6 w-6" />}
            color="text-yellow-600"
            bgColor="bg-yellow-50"
            description="Optimierung möglich"
          />
          <SummaryCard
            title="Unterperformer"
            count={categorizedArticles.underperforming.length}
            icon={<XCircle className="h-6 w-6" />}
            color="text-red-600"
            bgColor="bg-red-50"
            description="Dringend überarbeiten"
          />
        </div>

        {categorizedArticles.all.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Noch nicht genügend Daten für eine Analyse. Artikel benötigen mindestens 3 Views.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="underperforming" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="underperforming" className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                <span className="hidden sm:inline">Unterperformer</span>
                <Badge variant="destructive" className="ml-1">
                  {categorizedArticles.underperforming.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="improvement" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Potenzial</span>
                <Badge variant="secondary" className="ml-1">
                  {categorizedArticles.needsImprovement.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="top" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Top-Performer</span>
                <Badge className="ml-1 bg-green-600">
                  {categorizedArticles.topPerformers.length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="underperforming" className="space-y-4">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-red-900">Dringender Handlungsbedarf</h3>
                      <p className="text-sm text-red-700">
                        Diese Artikel haben einen Performance-Score unter 30 und sollten priorisiert überarbeitet werden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {categorizedArticles.underperforming.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <p>Keine Unterperformer! Alle Artikel erreichen mindestens 30 Punkte.</p>
                  </CardContent>
                </Card>
              ) : (
                categorizedArticles.underperforming.map(article => (
                  <ArticleCard key={article.article_slug} article={article} />
                ))
              )}
            </TabsContent>

            <TabsContent value="improvement" className="space-y-4">
              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-900">Optimierungspotenzial</h3>
                      <p className="text-sm text-yellow-700">
                        Diese Artikel haben Potenzial (Score 30-60) und können mit gezielten Maßnahmen verbessert werden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {categorizedArticles.needsImprovement.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <p>Keine Artikel in dieser Kategorie.</p>
                  </CardContent>
                </Card>
              ) : (
                categorizedArticles.needsImprovement.map(article => (
                  <ArticleCard key={article.article_slug} article={article} />
                ))
              )}
            </TabsContent>

            <TabsContent value="top" className="space-y-4">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-900">Erfolgreiche Artikel</h3>
                      <p className="text-sm text-green-700">
                        Diese Artikel performen hervorragend (Score 60+). Nutze sie als Vorlage für neue Inhalte.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {categorizedArticles.topPerformers.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-muted-foreground">
                    <p>Noch keine Top-Performer. Optimiere bestehende Artikel, um diese Kategorie zu füllen.</p>
                  </CardContent>
                </Card>
              ) : (
                categorizedArticles.topPerformers.map(article => (
                  <ArticleCard key={article.article_slug} article={article} />
                ))
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default ContentPerformanceDashboard;
