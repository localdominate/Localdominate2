import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  ArrowLeft,
  RefreshCw,
  Lock,
  LogOut,
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Users,
  Percent,
  Award,
  FlaskConical,
  Info
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Legend } from "recharts";
import {
  analyzeABTest,
  calculateConfidenceInterval,
  calculatePower,
  ABTestResult
} from "@/lib/statisticalSignificance";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLoginScreen } from "@/components/admin/AdminLoginScreen";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";

interface DBSession {
  id: string;
  session_id: string;
  ab_variant_color: string | null;
  ab_variant_restaurant: string | null;
  scroll_depths: number[];
  created_at: string;
  end_time: string | null;
  start_time: string;
}

interface DBConversion {
  id: string;
  ab_variant_color: string | null;
  ab_variant_restaurant: string | null;
  cta_location: string | null;
  amount: number | null;
  created_at: string;
  payment_verified: boolean | null;
  conversion_type: string | null;
}

const ABTestDashboard = () => {
  const { user, isAdmin, isLoading: authLoading, signIn, signOut, error: authError } = useAdminAuth();
  const [refreshKey, setRefreshKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Database state
  const [dbSessions, setDbSessions] = useState<DBSession[]>([]);
  const [dbConversions, setDbConversions] = useState<DBConversion[]>([]);

  // Fetch data
  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [sessionsRes, conversionsRes] = await Promise.all([
          supabase.from("analytics_sessions").select("*").order("created_at", { ascending: false }).limit(10000),
          supabase.from("analytics_conversions").select("*").order("created_at", { ascending: false }).limit(10000),
        ]);

        if (sessionsRes.data) setDbSessions(sessionsRes.data as DBSession[]);
        if (conversionsRes.data) setDbConversions(conversionsRes.data as DBConversion[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isAdmin, refreshKey]);

  // Loading state
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Lade...</p>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!user) {
    return (
      <AdminLoginScreen
        onLogin={signIn}
        isLoading={authLoading}
        error={authError}
        title="A/B Test Dashboard"
        description="Bitte melde dich mit deinem Admin-Konto an"
      />
    );
  }

  // Access denied for non-admins
  if (!isAdmin) {
    return <AdminAccessDenied onSignOut={signOut} userEmail={user.email} />;
  }

  // Color A/B Test Analysis
  const colorTestAnalysis = useMemo(() => {
    const blueVisitors = dbSessions.filter(s => s.ab_variant_color === "blue").length;
    const redVisitors = dbSessions.filter(s => s.ab_variant_color === "red").length;
    const blueConversions = dbConversions.filter(c => c.ab_variant_color === "blue").length;
    const redConversions = dbConversions.filter(c => c.ab_variant_color === "red").length;

    const result = analyzeABTest(blueConversions, blueVisitors, redConversions, redVisitors);
    
    const blueCI = calculateConfidenceInterval(blueConversions, blueVisitors);
    const redCI = calculateConfidenceInterval(redConversions, redVisitors);
    
    const power = calculatePower(
      Math.min(blueVisitors, redVisitors),
      Math.max(blueConversions / (blueVisitors || 1), 0.01),
      0.2
    );

    // Calculate avg session duration
    const getAvgDuration = (sessions: DBSession[]) => {
      const durations = sessions
        .filter(s => s.end_time && s.start_time)
        .map(s => new Date(s.end_time!).getTime() - new Date(s.start_time).getTime());
      return durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : 0;
    };

    const blueSessions = dbSessions.filter(s => s.ab_variant_color === "blue");
    const redSessions = dbSessions.filter(s => s.ab_variant_color === "red");

    // Calculate avg scroll depth
    const getAvgScrollDepth = (sessions: DBSession[]) => {
      const depths = sessions
        .filter(s => s.scroll_depths && s.scroll_depths.length > 0)
        .map(s => Math.max(...s.scroll_depths));
      return depths.length > 0 ? depths.reduce((a, b) => a + b, 0) / depths.length : 0;
    };

    // Calculate verified vs unverified revenue
    const blueVerifiedRevenue = dbConversions
      .filter(c => c.ab_variant_color === "blue" && c.payment_verified)
      .reduce((sum, c) => sum + (c.amount || 0), 0);
    const redVerifiedRevenue = dbConversions
      .filter(c => c.ab_variant_color === "red" && c.payment_verified)
      .reduce((sum, c) => sum + (c.amount || 0), 0);

    return {
      result,
      blue: {
        visitors: blueVisitors,
        conversions: blueConversions,
        conversionRate: blueVisitors > 0 ? (blueConversions / blueVisitors) * 100 : 0,
        confidenceInterval: blueCI,
        avgDuration: getAvgDuration(blueSessions),
        avgScrollDepth: getAvgScrollDepth(blueSessions),
        revenue: dbConversions
          .filter(c => c.ab_variant_color === "blue")
          .reduce((sum, c) => sum + (c.amount || 0), 0),
        verifiedRevenue: blueVerifiedRevenue,
      },
      red: {
        visitors: redVisitors,
        conversions: redConversions,
        conversionRate: redVisitors > 0 ? (redConversions / redVisitors) * 100 : 0,
        confidenceInterval: redCI,
        avgDuration: getAvgDuration(redSessions),
        avgScrollDepth: getAvgScrollDepth(redSessions),
        revenue: dbConversions
          .filter(c => c.ab_variant_color === "red")
          .reduce((sum, c) => sum + (c.amount || 0), 0),
        verifiedRevenue: redVerifiedRevenue,
      },
      power,
      // Overall stats
      totalVerifiedRevenue: blueVerifiedRevenue + redVerifiedRevenue,
      totalClickRevenue: dbConversions
        .filter(c => !c.payment_verified)
        .reduce((sum, c) => sum + (c.amount || 0), 0),
      verifiedConversions: dbConversions.filter(c => c.payment_verified).length,
      clickConversions: dbConversions.filter(c => !c.payment_verified).length,
    };
  }, [dbSessions, dbConversions]);


  const formatDuration = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getStatusIcon = (result: ABTestResult) => {
    if (result.isSignificant && result.winner !== "none") {
      return <CheckCircle2 className="h-6 w-6 text-green-600" />;
    }
    if (result.confidence > 80) {
      return <AlertTriangle className="h-6 w-6 text-yellow-600" />;
    }
    return <XCircle className="h-6 w-6 text-muted-foreground" />;
  };

  const getStatusColor = (result: ABTestResult) => {
    if (result.isSignificant && result.winner !== "none") return "border-green-500 bg-green-50";
    if (result.confidence > 80) return "border-yellow-500 bg-yellow-50";
    return "border-muted";
  };

  // Chart data
  const conversionChartData = [
    { 
      name: "Blau", 
      rate: colorTestAnalysis.blue.conversionRate,
      visitors: colorTestAnalysis.blue.visitors,
    },
    { 
      name: "Rot", 
      rate: colorTestAnalysis.red.conversionRate,
      visitors: colorTestAnalysis.red.visitors,
    },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-4 md:p-8">
        <SEOHead 
          title="A/B Test Dashboard - Local Dominator"
          description="Internes A/B Test Dashboard"
          noindex={true}
        />
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Link to="/analytics" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Analytics
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium">A/B Test</span>
            </div>
            <h1 className="flex items-center gap-3 text-3xl font-bold">
              <FlaskConical className="h-8 w-8 text-primary" />
              A/B Test Dashboard
            </h1>
            <p className="text-muted-foreground">
              Statistische Signifikanz-Analyse & automatische Winner-Deklaration
              {isLoading && " • Lade Daten..."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setRefreshKey(k => k + 1)}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Aktualisieren
            </Button>
            <Link to="/analytics">
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Vollständige Analytics
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>

        {/* Winner Declaration Card */}
        <Card className={`mb-8 ${getStatusColor(colorTestAnalysis.result)}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(colorTestAnalysis.result)}
                <div>
                  <CardTitle className="text-xl">
                    {colorTestAnalysis.result.isSignificant && colorTestAnalysis.result.winner !== "none" ? (
                      <>
                        🏆 Gewinner gefunden: {colorTestAnalysis.result.winner === "A" ? "BLAU" : "ROT"}
                      </>
                    ) : colorTestAnalysis.result.confidence > 80 ? (
                      "📊 Tendenz erkennbar"
                    ) : (
                      "🔄 Test läuft..."
                    )}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {colorTestAnalysis.result.recommendedAction}
                  </CardDescription>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">
                  {colorTestAnalysis.result.confidence.toFixed(1)}%
                </div>
                <p className="text-sm text-muted-foreground">Konfidenz</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">Signifikanz-Level</p>
                <p className="text-lg font-semibold">
                  {colorTestAnalysis.result.isSignificant ? (
                    <span className="text-green-600">✓ Signifikant (p &lt; 0.05)</span>
                  ) : (
                    <span className="text-muted-foreground">Nicht signifikant</span>
                  )}
                </p>
              </div>
              <div className="rounded-lg bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">P-Wert</p>
                <p className="text-lg font-semibold">{colorTestAnalysis.result.pValue.toFixed(4)}</p>
              </div>
              <div className="rounded-lg bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">Z-Score</p>
                <p className="text-lg font-semibold">{colorTestAnalysis.result.zScore.toFixed(2)}</p>
              </div>
              <div className="rounded-lg bg-background/80 p-4">
                <p className="text-sm text-muted-foreground">Relative Verbesserung</p>
                <p className={`text-lg font-semibold ${colorTestAnalysis.result.relativeImprovement > 0 ? "text-green-600" : colorTestAnalysis.result.relativeImprovement < 0 ? "text-red-600" : ""}`}>
                  {colorTestAnalysis.result.relativeImprovement > 0 ? "+" : ""}
                  {colorTestAnalysis.result.relativeImprovement.toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Breakdown: Verified vs Clicks */}
        <Card className="mb-8 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Umsatz-Übersicht: Echte Zahlungen vs. Checkout-Klicks
            </CardTitle>
            <CardDescription>
              Unterscheidung zwischen bestätigten Stripe-Zahlungen und CTA-Klicks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <p className="text-sm font-medium text-green-800">Bestätigte Zahlungen</p>
                </div>
                <p className="text-3xl font-bold text-green-600">
                  {colorTestAnalysis.totalVerifiedRevenue?.toFixed(0) || 0}€
                </p>
                <p className="text-xs text-green-600/70 mt-1">
                  {colorTestAnalysis.verifiedConversions || 0} Transaktionen
                </p>
              </div>
              
              <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm font-medium text-yellow-800">Checkout-Klicks</p>
                </div>
                <p className="text-3xl font-bold text-yellow-600">
                  {colorTestAnalysis.totalClickRevenue?.toFixed(0) || 0}€
                </p>
                <p className="text-xs text-yellow-600/70 mt-1">
                  {colorTestAnalysis.clickConversions || 0} Klicks (nicht verifiziert)
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600" />
                  <p className="text-sm font-medium text-blue-800">Blau - Verifiziert</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {colorTestAnalysis.blue.verifiedRevenue?.toFixed(0) || 0}€
                </p>
              </div>

              <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-red-600" />
                  <p className="text-sm font-medium text-red-800">Rot - Verifiziert</p>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  {colorTestAnalysis.red.verifiedRevenue?.toFixed(0) || 0}€
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Hinweis:</strong> "Bestätigte Zahlungen" sind via Stripe Webhook verifiziert. 
                "Checkout-Klicks" zeigen Nutzer, die den Checkout geöffnet haben, aber möglicherweise nicht bezahlt haben.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sample Size Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Stichprobengröße
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>Für statistisch signifikante Ergebnisse wird eine Mindeststichprobe pro Variante empfohlen. Die genaue Größe hängt von der erwarteten Conversion-Rate und dem zu erkennenden Unterschied ab.</p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-600" />
                      Blau (Variante A)
                    </span>
                    <span className="font-semibold">{colorTestAnalysis.blue.visitors} Besucher</span>
                  </div>
                  <Progress 
                    value={Math.min((colorTestAnalysis.blue.visitors / colorTestAnalysis.result.requiredSampleSize) * 100, 100)} 
                    className="h-3"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {Math.min(100, (colorTestAnalysis.blue.visitors / colorTestAnalysis.result.requiredSampleSize * 100)).toFixed(0)}% von empfohlenen {colorTestAnalysis.result.requiredSampleSize}
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-600" />
                      Rot (Variante B)
                    </span>
                    <span className="font-semibold">{colorTestAnalysis.red.visitors} Besucher</span>
                  </div>
                  <Progress 
                    value={Math.min((colorTestAnalysis.red.visitors / colorTestAnalysis.result.requiredSampleSize) * 100, 100)} 
                    className="h-3"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {Math.min(100, (colorTestAnalysis.red.visitors / colorTestAnalysis.result.requiredSampleSize * 100)).toFixed(0)}% von empfohlenen {colorTestAnalysis.result.requiredSampleSize}
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Statistische Power</span>
                  <span className="text-lg font-bold">{colorTestAnalysis.power.toFixed(0)}%</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Wahrscheinlichkeit, einen echten Unterschied von 20% zu erkennen. Empfohlen: &gt;80%
                </p>
                <Progress value={colorTestAnalysis.power} className="mt-2 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variant Comparison */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {/* Blue Variant */}
          <Card className={`border-2 ${colorTestAnalysis.result.winner === "A" ? "border-blue-500 ring-2 ring-blue-200" : "border-blue-200"}`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <div className="h-5 w-5 rounded-full bg-blue-600" />
                  Blau (Variante A)
                </CardTitle>
                {colorTestAnalysis.result.winner === "A" && (
                  <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                    <Award className="h-4 w-4" />
                    WINNER
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {colorTestAnalysis.blue.conversionRate.toFixed(2)}%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      95% CI: {colorTestAnalysis.blue.confidenceInterval.lower.toFixed(2)}% - {colorTestAnalysis.blue.confidenceInterval.upper.toFixed(2)}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">Conversions</p>
                    <p className="text-2xl font-bold">{colorTestAnalysis.blue.conversions}</p>
                    <p className="text-xs text-muted-foreground">von {colorTestAnalysis.blue.visitors} Besuchern</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Umsatz</p>
                    <p className="font-semibold">{colorTestAnalysis.blue.revenue.toFixed(0)}€</p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Ø Verweildauer</p>
                    <p className="font-semibold">{formatDuration(colorTestAnalysis.blue.avgDuration)}</p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Ø Scroll</p>
                    <p className="font-semibold">{colorTestAnalysis.blue.avgScrollDepth.toFixed(0)}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Red Variant */}
          <Card className={`border-2 ${colorTestAnalysis.result.winner === "B" ? "border-red-500 ring-2 ring-red-200" : "border-red-200"}`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <div className="h-5 w-5 rounded-full bg-red-600" />
                  Rot (Variante B)
                </CardTitle>
                {colorTestAnalysis.result.winner === "B" && (
                  <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                    <Award className="h-4 w-4" />
                    WINNER
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-red-50 p-3">
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    <p className="text-2xl font-bold text-red-600">
                      {colorTestAnalysis.red.conversionRate.toFixed(2)}%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      95% CI: {colorTestAnalysis.red.confidenceInterval.lower.toFixed(2)}% - {colorTestAnalysis.red.confidenceInterval.upper.toFixed(2)}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">Conversions</p>
                    <p className="text-2xl font-bold">{colorTestAnalysis.red.conversions}</p>
                    <p className="text-xs text-muted-foreground">von {colorTestAnalysis.red.visitors} Besuchern</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Umsatz</p>
                    <p className="font-semibold">{colorTestAnalysis.red.revenue.toFixed(0)}€</p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Ø Verweildauer</p>
                    <p className="font-semibold">{formatDuration(colorTestAnalysis.red.avgDuration)}</p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Ø Scroll</p>
                    <p className="font-semibold">{colorTestAnalysis.red.avgScrollDepth.toFixed(0)}%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Rate Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-5 w-5" />
              Conversion Rate Vergleich
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={conversionChartData} layout="vertical">
                <XAxis type="number" domain={[0, "auto"]} tickFormatter={(v) => `${v.toFixed(1)}%`} />
                <YAxis type="category" dataKey="name" width={60} />
                <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
                  {conversionChartData.map((entry, index) => (
                    <Cell key={index} fill={index === 0 ? "#2563eb" : "#dc2626"} />
                  ))}
                </Bar>
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Statistical Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Statistische Details
            </CardTitle>
            <CardDescription>
              Alle wichtigen Metriken im Überblick
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metrik</TableHead>
                  <TableHead className="text-center text-blue-600">Blau (A)</TableHead>
                  <TableHead className="text-center text-red-600">Rot (B)</TableHead>
                  <TableHead className="text-right">Differenz</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Besucher</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.blue.visitors}</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.red.visitors}</TableCell>
                  <TableCell className="text-right">
                    {colorTestAnalysis.blue.visitors - colorTestAnalysis.red.visitors}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Conversions</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.blue.conversions}</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.red.conversions}</TableCell>
                  <TableCell className="text-right">
                    {colorTestAnalysis.blue.conversions - colorTestAnalysis.red.conversions}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Conversion Rate</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.blue.conversionRate.toFixed(2)}%</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.red.conversionRate.toFixed(2)}%</TableCell>
                  <TableCell className={`text-right font-semibold ${colorTestAnalysis.result.relativeImprovement > 0 ? "text-green-600" : colorTestAnalysis.result.relativeImprovement < 0 ? "text-red-600" : ""}`}>
                    {colorTestAnalysis.result.relativeImprovement > 0 ? "+" : ""}
                    {colorTestAnalysis.result.relativeImprovement.toFixed(1)}%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Umsatz</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.blue.revenue.toFixed(0)}€</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.red.revenue.toFixed(0)}€</TableCell>
                  <TableCell className={`text-right font-semibold ${colorTestAnalysis.blue.revenue > colorTestAnalysis.red.revenue ? "text-green-600" : colorTestAnalysis.blue.revenue < colorTestAnalysis.red.revenue ? "text-red-600" : ""}`}>
                    {(colorTestAnalysis.blue.revenue - colorTestAnalysis.red.revenue).toFixed(0)}€
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ø Scroll-Tiefe</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.blue.avgScrollDepth.toFixed(0)}%</TableCell>
                  <TableCell className="text-center">{colorTestAnalysis.red.avgScrollDepth.toFixed(0)}%</TableCell>
                  <TableCell className="text-right">
                    {(colorTestAnalysis.blue.avgScrollDepth - colorTestAnalysis.red.avgScrollDepth).toFixed(0)}%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ø Verweildauer</TableCell>
                  <TableCell className="text-center">{formatDuration(colorTestAnalysis.blue.avgDuration)}</TableCell>
                  <TableCell className="text-center">{formatDuration(colorTestAnalysis.red.avgDuration)}</TableCell>
                  <TableCell className="text-right">
                    {formatDuration(colorTestAnalysis.blue.avgDuration - colorTestAnalysis.red.avgDuration)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Methodology Info */}
        <Card className="mt-8 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Info className="h-5 w-5" />
              Methodik
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Statistischer Test:</strong> Zwei-Proportionen Z-Test (zwei-seitig)</li>
              <li><strong>Signifikanz-Level:</strong> α = 0.05 (95% Konfidenz erforderlich)</li>
              <li><strong>Minimum Detectable Effect:</strong> 20% relative Verbesserung</li>
              <li><strong>Empfohlene Power:</strong> 80% (Wahrscheinlichkeit, echten Effekt zu erkennen)</li>
              <li><strong>Konfidenzintervall:</strong> 95% Wald-Intervall für Proportionen</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ABTestDashboard;
