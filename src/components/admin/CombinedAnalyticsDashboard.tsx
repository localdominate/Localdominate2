import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Users, MousePointerClick, Eye, 
  Timer, Target, Zap, AlertCircle, CheckCircle2, Clock
} from 'lucide-react';
import { analyzeABTest } from '@/lib/statisticalSignificance';

interface ABTest {
  id: string;
  test_id: string;
  name: string;
  status: string;
  variants: unknown;
  winning_variant: string | null;
  created_at: string;
}

interface EngagementData {
  test_id: string;
  variant: string;
  engagement_score: number;
  intent_score: number;
  viewed_cta: boolean;
  clicked_cta: boolean;
  started_checkout: boolean;
  completed_checkout: boolean;
  max_scroll_depth: number;
  cta_hover_duration_ms: number;
  session_duration_ms: number;
}

interface ConversionData {
  ab_test_id: string;
  ab_variant_color: string;
  conversion_type: string;
  amount: number;
  created_at: string;
}

interface SessionData {
  ab_variant_color: string;
  device: string;
  created_at: string;
}

const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(142, 76%, 36%)', 'hsl(45, 93%, 47%)'];

export const CombinedAnalyticsDashboard = () => {
  const [activeTests, setActiveTests] = useState<ABTest[]>([]);
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [conversions, setConversions] = useState<ConversionData[]>([]);
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const [testsRes, engagementRes, conversionsRes, sessionsRes] = await Promise.all([
        supabase.from('ab_tests').select('*').order('created_at', { ascending: false }),
        supabase.from('ab_test_engagement').select('*').order('created_at', { ascending: false }).limit(1000),
        supabase.from('analytics_conversions').select('*').order('created_at', { ascending: false }).limit(500),
        supabase.from('analytics_sessions').select('ab_variant_color, device, created_at').order('created_at', { ascending: false }).limit(1000),
      ]);

      if (testsRes.data) setActiveTests(testsRes.data);
      if (engagementRes.data) setEngagementData(engagementRes.data as EngagementData[]);
      if (conversionsRes.data) setConversions(conversionsRes.data as ConversionData[]);
      if (sessionsRes.data) setSessions(sessionsRes.data as SessionData[]);
      
      setLoading(false);
    };

    fetchData();
  }, []);

  // Calculate A/B Test statistics
  const testStats = useMemo(() => {
    return activeTests.map(test => {
      const testEngagement = engagementData.filter(e => e.test_id === test.test_id);
      const testConversions = conversions.filter(c => c.ab_test_id === test.test_id);
      
      const variants = ['A', 'B'];
      const variantStats = variants.map(variant => {
        const variantEngagement = testEngagement.filter(e => e.variant === variant);
        const variantConversions = testConversions.filter(c => c.ab_variant_color === variant);
        
        const views = variantEngagement.length;
        const clicks = variantEngagement.filter(e => e.clicked_cta).length;
        const checkouts = variantEngagement.filter(e => e.started_checkout).length;
        const completed = variantEngagement.filter(e => e.completed_checkout).length;
        const avgEngagement = views > 0 
          ? variantEngagement.reduce((sum, e) => sum + (e.engagement_score || 0), 0) / views 
          : 0;
        const avgIntent = views > 0 
          ? variantEngagement.reduce((sum, e) => sum + (e.intent_score || 0), 0) / views 
          : 0;
        const totalRevenue = variantConversions.reduce((sum, c) => sum + (c.amount || 0), 0);
        
        return {
          variant,
          views,
          clicks,
          checkouts,
          completed,
          avgEngagement: Math.round(avgEngagement),
          avgIntent: Math.round(avgIntent),
          ctr: views > 0 ? (clicks / views * 100) : 0,
          conversionRate: views > 0 ? (completed / views * 100) : 0,
          totalRevenue,
        };
      });

      // Calculate statistical significance
      const statsA = variantStats.find(v => v.variant === 'A')!;
      const statsB = variantStats.find(v => v.variant === 'B')!;
      
      const significance = analyzeABTest(
        statsA.completed, statsA.views,
        statsB.completed, statsB.views
      );

      const winner = significance.isSignificant 
        ? (statsA.conversionRate > statsB.conversionRate ? 'A' : 'B')
        : null;

      return {
        ...test,
        variantStats,
        significance,
        recommendedWinner: winner,
        totalViews: statsA.views + statsB.views,
        totalConversions: statsA.completed + statsB.completed,
      };
    });
  }, [activeTests, engagementData, conversions]);

  // Engagement distribution chart data
  const engagementDistribution = useMemo(() => {
    const ranges = [
      { range: '0-20', min: 0, max: 20 },
      { range: '21-40', min: 21, max: 40 },
      { range: '41-60', min: 41, max: 60 },
      { range: '61-80', min: 61, max: 80 },
      { range: '81-100', min: 81, max: 100 },
    ];

    return ranges.map(({ range, min, max }) => {
      const variantA = engagementData.filter(e => 
        e.variant === 'A' && e.engagement_score >= min && e.engagement_score <= max
      ).length;
      const variantB = engagementData.filter(e => 
        e.variant === 'B' && e.engagement_score >= min && e.engagement_score <= max
      ).length;
      
      return { range, 'Variante A': variantA, 'Variante B': variantB };
    });
  }, [engagementData]);

  // Conversion funnel data
  const funnelData = useMemo(() => {
    const variants = ['A', 'B'];
    
    return variants.map(variant => {
      const variantEngagement = engagementData.filter(e => e.variant === variant);
      const total = variantEngagement.length || 1;
      
      return {
        variant: `Variante ${variant}`,
        'Seite angesehen': 100,
        'CTA gesehen': Math.round(variantEngagement.filter(e => e.viewed_cta).length / total * 100),
        'CTA geklickt': Math.round(variantEngagement.filter(e => e.clicked_cta).length / total * 100),
        'Checkout gestartet': Math.round(variantEngagement.filter(e => e.started_checkout).length / total * 100),
        'Checkout abgeschlossen': Math.round(variantEngagement.filter(e => e.completed_checkout).length / total * 100),
      };
    });
  }, [engagementData]);

  // Sessions over time
  const sessionsOverTime = useMemo(() => {
    const last7Days: Record<string, { date: string; A: number; B: number }> = {};
    const now = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const key = date.toISOString().split('T')[0];
      last7Days[key] = { date: key, A: 0, B: 0 };
    }

    sessions.forEach(session => {
      const date = session.created_at.split('T')[0];
      if (last7Days[date]) {
        if (session.ab_variant_color === 'A') {
          last7Days[date].A++;
        } else if (session.ab_variant_color === 'B') {
          last7Days[date].B++;
        }
      }
    });

    return Object.values(last7Days);
  }, [sessions]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const runningTests = testStats.filter(t => t.status === 'running');
  const currentTest = runningTests[0];

  return (
    <div className="space-y-6">
      {/* Header Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Aktive Tests</p>
                <p className="text-2xl font-bold">{runningTests.length}</p>
              </div>
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Gesamt Sessions</p>
                <p className="text-2xl font-bold">{sessions.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Engagement Einträge</p>
                <p className="text-2xl font-bold">{engagementData.length}</p>
              </div>
              <Eye className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversions</p>
                <p className="text-2xl font-bold">{conversions.length}</p>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="funnel">Conversion Funnel</TabsTrigger>
          <TabsTrigger value="tests">A/B Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Current Test Status */}
          {currentTest && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {currentTest.name}
                      <Badge variant={currentTest.status === 'running' ? 'default' : 'secondary'}>
                        {currentTest.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription>Test-ID: {currentTest.test_id}</CardDescription>
                  </div>
                  <div className="text-right">
                    {currentTest.significance.isSignificant ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-medium">Signifikant</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-amber-600">
                        <Clock className="h-5 w-5" />
                        <span className="font-medium">Sammle Daten...</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentTest.variantStats.map((stat, index) => (
                    <div 
                      key={stat.variant}
                      className={`p-4 rounded-lg border-2 ${
                        currentTest.recommendedWinner === stat.variant 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Variante {stat.variant}</h3>
                        {currentTest.recommendedWinner === stat.variant && (
                          <Badge className="bg-green-500">Gewinner</Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Views</p>
                          <p className="text-xl font-bold">{stat.views}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Conversions</p>
                          <p className="text-xl font-bold">{stat.completed}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Conv. Rate</p>
                          <p className="text-xl font-bold flex items-center gap-1">
                            {stat.conversionRate.toFixed(2)}%
                            {index === 1 && stat.conversionRate > currentTest.variantStats[0].conversionRate && (
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            )}
                            {index === 1 && stat.conversionRate < currentTest.variantStats[0].conversionRate && (
                              <TrendingDown className="h-4 w-4 text-red-500" />
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Engagement Ø</p>
                          <p className="text-xl font-bold">{stat.avgEngagement}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Engagement Score</span>
                          <span>{stat.avgEngagement}%</span>
                        </div>
                        <Progress value={stat.avgEngagement} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Statistical Details */}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Statistische Auswertung</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">p-Value</p>
                      <p className="font-medium">{currentTest.significance.pValue.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Konfidenz</p>
                      <p className="font-medium">{(currentTest.significance.confidence * 100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Stichprobe</p>
                      <p className="font-medium">{currentTest.totalViews}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Empfehlung</p>
                      <p className="font-medium">
                        {currentTest.recommendedWinner 
                          ? `Variante ${currentTest.recommendedWinner} deployen`
                          : 'Mehr Daten sammeln'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Sessions Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Sessions pro Tag (letzte 7 Tage)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sessionsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString('de-DE', { weekday: 'short' })} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="A" name="Variante A" stackId="1" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.6} />
                    <Area type="monotone" dataKey="B" name="Variante B" stackId="1" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          {/* Engagement Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Engagement-Score Verteilung</CardTitle>
              <CardDescription>Verteilung der Engagement-Scores pro Variante</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Variante A" fill={COLORS[0]} />
                    <Bar dataKey="Variante B" fill={COLORS[1]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Metrics Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['A', 'B'].map(variant => {
              const variantData = engagementData.filter(e => e.variant === variant);
              const avgScroll = variantData.length > 0 
                ? Math.round(variantData.reduce((sum, e) => sum + (e.max_scroll_depth || 0), 0) / variantData.length)
                : 0;
              const avgHoverTime = variantData.length > 0
                ? Math.round(variantData.reduce((sum, e) => sum + (e.cta_hover_duration_ms || 0), 0) / variantData.length / 1000)
                : 0;
              const avgSessionTime = variantData.length > 0
                ? Math.round(variantData.reduce((sum, e) => sum + (e.session_duration_ms || 0), 0) / variantData.length / 1000)
                : 0;

              return (
                <Card key={variant}>
                  <CardHeader>
                    <CardTitle>Variante {variant} - Detailmetriken</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ø Scroll-Tiefe</span>
                      <div className="flex items-center gap-2">
                        <Progress value={avgScroll} className="w-24 h-2" />
                        <span className="font-medium">{avgScroll}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ø CTA Hover-Zeit</span>
                      <span className="font-medium">{avgHoverTime}s</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ø Session-Dauer</span>
                      <span className="font-medium">{Math.floor(avgSessionTime / 60)}:{(avgSessionTime % 60).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Datenpunkte</span>
                      <span className="font-medium">{variantData.length}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="funnel" className="space-y-6">
          {/* Conversion Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel nach Variante</CardTitle>
              <CardDescription>Prozentuale Verteilung der User durch den Funnel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="variant" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Seite angesehen" fill={COLORS[0]} />
                    <Bar dataKey="CTA gesehen" fill={COLORS[1]} />
                    <Bar dataKey="CTA geklickt" fill={COLORS[2]} />
                    <Bar dataKey="Checkout gestartet" fill={COLORS[3]} />
                    <Bar dataKey="Checkout abgeschlossen" fill="hsl(262, 83%, 58%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Funnel Steps Table */}
          <Card>
            <CardHeader>
              <CardTitle>Funnel-Schritte im Detail</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Schritt</th>
                      <th className="text-right py-2">Variante A</th>
                      <th className="text-right py-2">Variante B</th>
                      <th className="text-right py-2">Unterschied</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Seite angesehen', 'CTA gesehen', 'CTA geklickt', 'Checkout gestartet', 'Checkout abgeschlossen'].map(step => {
                      const stepKey = step as keyof typeof funnelData[0];
                      const aValue = (funnelData[0]?.[stepKey] as number) || 0;
                      const bValue = (funnelData[1]?.[stepKey] as number) || 0;
                      const diff = bValue - aValue;
                      
                      return (
                        <tr key={step} className="border-b">
                          <td className="py-2">{step}</td>
                          <td className="text-right py-2">{aValue}%</td>
                          <td className="text-right py-2">{bValue}%</td>
                          <td className={`text-right py-2 font-medium ${diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-600' : ''}`}>
                            {diff > 0 ? '+' : ''}{diff.toFixed(1)}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests" className="space-y-6">
          {/* All Tests List */}
          <div className="space-y-4">
            {testStats.map(test => (
              <Card key={test.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {test.name}
                        <Badge variant={test.status === 'running' ? 'default' : test.status === 'completed' ? 'secondary' : 'outline'}>
                          {test.status}
                        </Badge>
                        {test.significance.isSignificant && (
                          <Badge variant="outline" className="border-green-500 text-green-600">
                            Signifikant
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{test.test_id}</CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      {new Date(test.created_at).toLocaleDateString('de-DE')}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Views</p>
                      <p className="font-bold">{test.totalViews}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                      <p className="font-bold">{test.totalConversions}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">A Conv. Rate</p>
                      <p className="font-bold">{test.variantStats[0]?.conversionRate.toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">B Conv. Rate</p>
                      <p className="font-bold">{test.variantStats[1]?.conversionRate.toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Empfehlung</p>
                      <p className="font-bold">
                        {test.recommendedWinner ? `Variante ${test.recommendedWinner}` : 'Offen'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {testStats.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Keine A/B Tests gefunden</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CombinedAnalyticsDashboard;
