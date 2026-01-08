import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, MousePointerClick, TrendingUp, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { format, subDays } from "date-fns";
import { de } from "date-fns/locale";

interface SessionData {
  session_id: string;
  entry_page: string | null;
  exit_page: string | null;
  device: string | null;
  referrer: string | null;
  page_views: number | null;
  scroll_depths: number[] | null;
  ab_variant_color: string | null;
  created_at: string;
}

interface ConversionData {
  conversion_type: string;
  page_path: string | null;
  cta_location: string | null;
  amount: number | null;
  ab_variant_color: string | null;
  created_at: string;
}

interface ABTestData {
  test_id: string;
  name: string;
  status: string | null;
  variants: any;
  start_date: string | null;
}

export const AnalyticsOverview = () => {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [conversions, setConversions] = useState<ConversionData[]>([]);
  const [abTests, setABTests] = useState<ABTestData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const sevenDaysAgo = subDays(new Date(), 7).toISOString();

    const [sessionsRes, conversionsRes, abTestsRes] = await Promise.all([
      supabase
        .from("analytics_sessions")
        .select("*")
        .gte("created_at", sevenDaysAgo)
        .order("created_at", { ascending: false }),
      supabase
        .from("analytics_conversions")
        .select("*")
        .gte("created_at", sevenDaysAgo)
        .order("created_at", { ascending: false }),
      supabase
        .from("ab_tests")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);

    if (sessionsRes.data) setSessions(sessionsRes.data);
    if (conversionsRes.data) setConversions(conversionsRes.data);
    if (abTestsRes.data) setABTests(abTestsRes.data);
    setLoading(false);
  };

  // Calculate metrics
  const totalSessions = sessions.length;
  const totalConversions = conversions.length;
  const conversionRate = totalSessions > 0 ? ((totalConversions / totalSessions) * 100).toFixed(1) : "0";
  const totalRevenue = conversions.reduce((sum, c) => sum + (c.amount || 0), 0);

  // Top entry pages
  const entryPages = sessions.reduce((acc, s) => {
    const page = s.entry_page || "/";
    acc[page] = (acc[page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const topPages = Object.entries(entryPages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Device breakdown
  const devices = sessions.reduce((acc, s) => {
    const device = s.device || "unknown";
    acc[device] = (acc[device] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // A/B Test variants
  const variantCounts = sessions.reduce((acc, s) => {
    const variant = s.ab_variant_color || "none";
    acc[variant] = (acc[variant] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const variantConversions = conversions.reduce((acc, c) => {
    const variant = c.ab_variant_color || "none";
    acc[variant] = (acc[variant] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sessions (7 Tage)</p>
                <p className="text-3xl font-bold">{totalSessions}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversions</p>
                <p className="text-3xl font-bold text-green-600">{totalConversions}</p>
              </div>
              <MousePointerClick className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conv. Rate</p>
                <p className="text-3xl font-bold text-purple-600">{conversionRate}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Umsatz</p>
                <p className="text-3xl font-bold text-amber-600">€{totalRevenue}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Eye className="w-5 h-5" />
              Top Seiten
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topPages.map(([page, count]) => (
                <div key={page} className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate max-w-[200px]">{page}</span>
                  <Badge variant="secondary">{count} Besucher</Badge>
                </div>
              ))}
              {topPages.length === 0 && (
                <p className="text-muted-foreground text-sm">Keine Daten</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="w-5 h-5" />
              Geräte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(devices).map(([device, count]) => (
                <div key={device} className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize">{device}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(count / totalSessions) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {((count / totalSessions) * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* A/B Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="w-5 h-5" />
            A/B Tests Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {abTests.map((test) => (
              <div key={test.test_id} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">ID: {test.test_id}</p>
                  </div>
                  <Badge
                    className={
                      test.status === "running"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-gray-500/10 text-gray-600"
                    }
                  >
                    {test.status === "running" ? "Aktiv" : test.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["blue", "red"].map((variant) => {
                    const sessions = variantCounts[variant] || 0;
                    const convs = variantConversions[variant] || 0;
                    const rate = sessions > 0 ? ((convs / sessions) * 100).toFixed(1) : "0";
                    const isWinning = variant === "blue" ? parseFloat(rate) > (variantConversions["red"] || 0) / (variantCounts["red"] || 1) * 100 : false;

                    return (
                      <div
                        key={variant}
                        className={`p-3 rounded-lg ${
                          variant === "blue" ? "bg-blue-50 dark:bg-blue-950/20" : "bg-red-50 dark:bg-red-950/20"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              variant === "blue" ? "bg-blue-500" : "bg-red-500"
                            }`}
                          />
                          <span className="font-medium capitalize">{variant}</span>
                          {isWinning && <ArrowUpRight className="w-4 h-4 text-green-500" />}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Sessions</p>
                            <p className="font-bold">{sessions}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Conv.</p>
                            <p className="font-bold">{convs}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Rate</p>
                            <p className="font-bold">{rate}%</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            {abTests.length === 0 && (
              <p className="text-muted-foreground text-center py-4">Keine A/B Tests vorhanden</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Conversions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MousePointerClick className="w-5 h-5" />
            Letzte Conversions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {conversions.slice(0, 10).map((conv, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{conv.conversion_type}</p>
                  <p className="text-sm text-muted-foreground">
                    {conv.page_path} • {conv.cta_location}
                  </p>
                </div>
                <div className="text-right">
                  {conv.amount && (
                    <p className="font-bold text-green-600">€{conv.amount}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(conv.created_at), "dd.MM. HH:mm", { locale: de })}
                  </p>
                </div>
              </div>
            ))}
            {conversions.length === 0 && (
              <p className="text-muted-foreground text-center py-4">Keine Conversions in den letzten 7 Tagen</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
