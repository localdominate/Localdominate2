import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  Lightbulb, 
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Target,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { generateRecommendations, testIdeas, getBlogCTAAnalysis, type ABTestRecommendation } from "@/lib/abTestRecommendations";
import TestControlButtons from "@/components/admin/TestControlButtons";
import TestIdeaCard from "@/components/admin/TestIdeaCard";
import AutoOptimizerPanel from "@/components/admin/AutoOptimizerPanel";

interface ABTest {
  id: string;
  test_id: string;
  name: string;
  description: string | null;
  variants: string[];
  status: string;
  start_date: string;
  target_sample_size: number;
  is_ready?: boolean;
  config?: Record<string, any>;
}

interface TestStats {
  views: Record<string, number>;
  conversions: Record<string, number>;
  conversionRates: Record<string, number>;
  confidence: number;
  winner: string | null;
  sampleSize: number;
}

const ABTestZentrale = () => {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [stats, setStats] = useState<Record<string, TestStats>>({});
  const [recommendations, setRecommendations] = useState<ABTestRecommendation[]>([]);
  const [blogAnalysis, setBlogAnalysis] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);

    // Load tests
    const { data: testsData } = await supabase
      .from('ab_tests')
      .select('*')
      .order('created_at', { ascending: false });

    if (testsData) {
      const parsedTests = testsData.map(t => ({
        ...t,
        variants: Array.isArray(t.variants) ? t.variants : JSON.parse(t.variants as string),
        config: t.config as Record<string, any> | undefined
      })) as ABTest[];
      setTests(parsedTests);

      // Calculate stats for each test
      const newStats: Record<string, TestStats> = {};
      
      for (const test of parsedTests) {
        const { data: viewsData } = await supabase
          .from('ab_test_views')
          .select('variant')
          .eq('test_id', test.test_id);

        const { data: conversionsData } = await supabase
          .from('analytics_conversions')
          .select('ab_variant_color')
          .eq('ab_test_id', test.test_id);

        const views: Record<string, number> = {};
        const conversions: Record<string, number> = {};

        test.variants.forEach((v: string) => {
          views[v] = 0;
          conversions[v] = 0;
        });

        viewsData?.forEach(v => {
          if (v.variant && views[v.variant] !== undefined) views[v.variant]++;
        });

        conversionsData?.forEach(c => {
          if (c.ab_variant_color && conversions[c.ab_variant_color] !== undefined) {
            conversions[c.ab_variant_color]++;
          }
        });

        const conversionRates: Record<string, number> = {};
        test.variants.forEach((v: string) => {
          conversionRates[v] = views[v] > 0 ? (conversions[v] / views[v]) * 100 : 0;
        });

        const totalSamples = Object.values(views).reduce((a, b) => a + b, 0);
        const rates = Object.values(conversionRates);
        const diff = Math.max(...rates) - Math.min(...rates);
        
        let confidence = 0;
        if (totalSamples > 100 && diff > 5) confidence = 60;
        if (totalSamples > 500 && diff > 10) confidence = 80;
        if (totalSamples > 1000 && diff > 15) confidence = 95;

        const winner = confidence >= 95 
          ? Object.entries(conversionRates).reduce((a, b) => a[1] > b[1] ? a : b)[0]
          : null;

        newStats[test.test_id] = {
          views,
          conversions,
          conversionRates,
          confidence,
          winner,
          sampleSize: totalSamples
        };
      }

      setStats(newStats);
      setRecommendations(generateRecommendations(newStats));
    }

    // Load blog CTA analysis
    const { data: blogConversions } = await supabase
      .from('analytics_conversions')
      .select('blog_article_slug, blog_cta_position, blog_cta_variant')
      .eq('conversion_type', 'blog_cta_click');

    if (blogConversions) {
      setBlogAnalysis(getBlogCTAAnalysis(blogConversions));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running': return <Badge className="bg-green-500">Aktiv</Badge>;
      case 'paused': return <Badge variant="secondary">Pausiert</Badge>;
      case 'completed': return <Badge className="bg-blue-500">Abgeschlossen</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Get list of existing test IDs and their statuses for TestIdeaCard
  const existingTestIds = tests.map(t => t.test_id);
  const testStatuses = tests.reduce((acc, t) => ({ ...acc, [t.test_id]: t.status }), {} as Record<string, string>);

  // Summary stats
  const activeTests = tests.filter(t => t.status === 'running').length;
  const pausedTests = tests.filter(t => t.status === 'paused').length;
  const completedTests = tests.filter(t => t.status === 'completed').length;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="A/B Test Zentrale - Local Dominator"
        description="Interne A/B Test Verwaltung"
        noindex={true}
      />
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">A/B-Test Zentrale</h1>
              <p className="text-muted-foreground">Optimiere deine Conversion-Rate mit datengetriebenen Entscheidungen</p>
            </div>
          </div>
          <Button onClick={loadData} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Aktualisieren
          </Button>
        </div>

        <Tabs defaultValue="auto-optimizer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl">
            <TabsTrigger value="auto-optimizer" className="flex items-center gap-1">
              <Zap className="h-4 w-4" />
              Auto-Optimizer
            </TabsTrigger>
            <TabsTrigger value="overview">
              Übersicht
              {activeTests > 0 && <Badge className="ml-2 bg-green-500 text-xs">{activeTests}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="blog-cta">Blog CTAs</TabsTrigger>
            <TabsTrigger value="recommendations">
              Empfehlungen
              {recommendations.filter(r => r.priority === 'high').length > 0 && (
                <Badge className="ml-2 bg-red-500 text-xs">{recommendations.filter(r => r.priority === 'high').length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="ideas">
              Test-Ideen
            </TabsTrigger>
          </TabsList>

          {/* Auto-Optimizer Tab */}
          <TabsContent value="auto-optimizer">
            <AutoOptimizerPanel />
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Aktive Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{activeTests}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Bereit zum Start</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">{pausedTests}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Gesamt Impressionen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {Object.values(stats).reduce((sum, s) => sum + s.sampleSize, 0).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Abgeschlossen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{completedTests}</div>
                </CardContent>
              </Card>
            </div>

            {/* Active and Paused Tests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Alle Tests
                </CardTitle>
                <CardDescription>
                  Klicke auf "Starten" um einen vorbereiteten Test zu aktivieren
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {tests.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Noch keine Tests erstellt.</p>
                    <p className="text-sm">Gehe zu "Test-Ideen" um deinen ersten Test vorzubereiten.</p>
                  </div>
                ) : (
                  tests.map(test => {
                    const testStats = stats[test.test_id] || {
                      views: {},
                      conversions: {},
                      conversionRates: {},
                      confidence: 0,
                      winner: null,
                      sampleSize: 0
                    };

                    return (
                      <div key={test.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">{test.name}</h3>
                            <p className="text-sm text-muted-foreground">{test.description}</p>
                            {test.config?.component && (
                              <Badge variant="outline" className="mt-1 text-xs">
                                {test.config.component}
                              </Badge>
                            )}
                          </div>
                          {getStatusBadge(test.status)}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          {test.variants.map((variant: string) => (
                            <div key={variant} className="text-center p-3 bg-muted rounded-lg">
                              <div className="text-xs text-muted-foreground uppercase mb-1">{variant}</div>
                              <div className="text-xl font-bold">
                                {testStats.conversionRates[variant]?.toFixed(1) || '0.0'}%
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {testStats.conversions[variant] || 0} / {testStats.views[variant] || 0} Views
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Konfidenz</span>
                              <span className="font-medium">{testStats.confidence}%</span>
                            </div>
                            <Progress value={testStats.confidence} />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testStats.sampleSize} / {test.target_sample_size} Samples
                          </div>
                        </div>

                        {testStats.winner && (
                          <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span className="font-medium text-green-700">
                              Gewinner: {testStats.winner} ({testStats.conversionRates[testStats.winner]?.toFixed(1)}% CR)
                            </span>
                          </div>
                        )}

                        <TestControlButtons
                          testId={test.test_id}
                          status={test.status}
                          winner={testStats.winner}
                          confidence={testStats.confidence}
                          onUpdate={loadData}
                        />
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blog CTA Tab */}
          <TabsContent value="blog-cta" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Blog CTA Performance
                </CardTitle>
                <CardDescription>
                  Vergleich der Blau vs. Rot CTA-Buttons pro Artikel und Position
                </CardDescription>
              </CardHeader>
              <CardContent>
                {Object.keys(blogAnalysis).length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Noch keine Blog-CTA-Klicks erfasst.</p>
                    <p className="text-sm">Die Daten werden erscheinen, sobald Besucher auf CTAs klicken.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Artikel</th>
                          <th className="text-center py-3 px-2">Blau (Intro)</th>
                          <th className="text-center py-3 px-2">Blau (Mitte)</th>
                          <th className="text-center py-3 px-2">Blau (Ende)</th>
                          <th className="text-center py-3 px-2">Rot (Intro)</th>
                          <th className="text-center py-3 px-2">Rot (Mitte)</th>
                          <th className="text-center py-3 px-2">Rot (Ende)</th>
                          <th className="text-center py-3 px-2">Gewinner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(blogAnalysis).map(([slug, data]: [string, any]) => (
                          <tr key={slug} className="border-b">
                            <td className="py-3 px-2 font-medium">{slug}</td>
                            <td className="text-center py-3 px-2">{data.blue.intro}</td>
                            <td className="text-center py-3 px-2">{data.blue.middle}</td>
                            <td className="text-center py-3 px-2">{data.blue.end}</td>
                            <td className="text-center py-3 px-2">{data.red.intro}</td>
                            <td className="text-center py-3 px-2">{data.red.middle}</td>
                            <td className="text-center py-3 px-2">{data.red.end}</td>
                            <td className="text-center py-3 px-2">
                              {data.winner ? (
                                <Badge className={data.winner === 'blue' ? 'bg-blue-500' : 'bg-red-500'}>
                                  {data.winner}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Handlungsempfehlungen
                </CardTitle>
                <CardDescription>
                  Automatisch generierte Empfehlungen basierend auf deinen Test-Daten
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <p>Keine dringenden Empfehlungen.</p>
                    <p className="text-sm">Sammle mehr Daten für aussagekräftige Analysen.</p>
                  </div>
                ) : (
                  recommendations.map(rec => (
                    <div key={rec.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(rec.priority)}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{rec.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {rec.priority === 'high' ? 'Hoch' : rec.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                        <Button size="sm" variant="outline">{rec.action}</Button>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ideas Tab */}
          <TabsContent value="ideas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Test-Ideen
                </CardTitle>
                <CardDescription>
                  Klicke auf "Vorbereiten" um einen Test zu erstellen, dann auf "Starten" um ihn zu aktivieren
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testIdeas.map(idea => (
                  <TestIdeaCard
                    key={idea.id}
                    idea={idea}
                    existingTestIds={existingTestIds}
                    testStatuses={testStatuses}
                    onTestCreated={loadData}
                    getPriorityColor={getPriorityColor}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ABTestZentrale;
