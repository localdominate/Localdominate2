import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLoginScreen } from "@/components/admin/AdminLoginScreen";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";
import { articleReviewDates, ArticleReviewMeta } from "@/data/articleReviewDates";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Shield,
  ArrowLeft,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScheduleEntry {
  slug: string;
  title: string;
  category: string;
  lastReviewedAt: string;
  nextReviewAt: string;
  reviewedBy: string;
  reviewCycle: string;
  status: "overdue" | "due-soon" | "ok";
  daysUntilDue: number;
  daysSinceReview: number;
}

const getNextReviewDate = (lastReviewed: string, cycle: string): Date => {
  const date = new Date(lastReviewed);
  switch (cycle) {
    case "monthly": date.setMonth(date.getMonth() + 1); break;
    case "quarterly": date.setMonth(date.getMonth() + 3); break;
    case "biannual": date.setMonth(date.getMonth() + 6); break;
    default: date.setMonth(date.getMonth() + 3);
  }
  return date;
};

const getStatus = (daysUntilDue: number): "overdue" | "due-soon" | "ok" => {
  if (daysUntilDue < 0) return "overdue";
  if (daysUntilDue <= 14) return "due-soon";
  return "ok";
};

const MONTHS_DE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"
];

const ContentUpdateCalendar = () => {
  const { user, isAdmin, isLoading: authLoading, signIn, signOut, error: authError } = useAdminAuth();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filterCycle, setFilterCycle] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  // Build schedule entries
  const scheduleEntries = useMemo((): ScheduleEntry[] => {
    const now = new Date();
    const entries: ScheduleEntry[] = [];
    
    const articleMap = new Map(blogArticles.map(a => [a.slug, a]));

    for (const [slug, meta] of Object.entries(articleReviewDates)) {
      const article = articleMap.get(slug);
      if (!article) continue;

      const nextReview = getNextReviewDate(meta.lastReviewedAt, meta.reviewCycle || "quarterly");
      const daysUntilDue = Math.floor((nextReview.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      const daysSinceReview = Math.floor((now.getTime() - new Date(meta.lastReviewedAt).getTime()) / (1000 * 60 * 60 * 24));

      entries.push({
        slug,
        title: article.de.title,
        category: article.de.category,
        lastReviewedAt: meta.lastReviewedAt,
        nextReviewAt: nextReview.toISOString().split("T")[0],
        reviewedBy: meta.lastReviewedBy,
        reviewCycle: meta.reviewCycle || "quarterly",
        status: getStatus(daysUntilDue),
        daysUntilDue,
        daysSinceReview,
      });
    }

    return entries.sort((a, b) => a.daysUntilDue - b.daysUntilDue);
  }, []);

  // Filter entries
  const filteredEntries = useMemo(() => {
    return scheduleEntries.filter(e => {
      if (filterCycle !== "all" && e.reviewCycle !== filterCycle) return false;
      if (filterStatus !== "all" && e.status !== filterStatus) return false;
      return true;
    });
  }, [scheduleEntries, filterCycle, filterStatus]);

  // Calendar grid data for current month
  const calendarData = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPad = (firstDay.getDay() + 6) % 7; // Monday start
    const totalDays = lastDay.getDate();

    const days: { date: number | null; entries: ScheduleEntry[] }[] = [];

    // Padding days
    for (let i = 0; i < startPad; i++) days.push({ date: null, entries: [] });

    // Actual days
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dayEntries = filteredEntries.filter(e => e.nextReviewAt === dateStr);
      days.push({ date: d, entries: dayEntries });
    }

    return days;
  }, [currentMonth, filteredEntries]);

  // Stats
  const stats = useMemo(() => ({
    total: scheduleEntries.length,
    overdue: scheduleEntries.filter(e => e.status === "overdue").length,
    dueSoon: scheduleEntries.filter(e => e.status === "due-soon").length,
    ok: scheduleEntries.filter(e => e.status === "ok").length,
    thisMonth: scheduleEntries.filter(e => {
      const d = new Date(e.nextReviewAt);
      const now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length,
  }), [scheduleEntries]);

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Clock className="h-8 w-8 animate-spin text-muted-foreground" /></div>;
  }
  if (!user) {
    return <AdminLoginScreen onLogin={signIn} isLoading={false} error={authError || null} />;
  }
  if (!isAdmin) {
    return <AdminAccessDenied onSignOut={signOut} userEmail={user.email} />;
  }

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Content Update Calendar" description="Scheduled content refreshes" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-7xl py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/analytics" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Calendar className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold">Content Update Calendar</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={signOut}>Abmelden</Button>
        </div>
      </header>

      <main className="container max-w-7xl py-8 px-4 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Artikel gesamt</div>
            </CardContent>
          </Card>
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-2xl font-bold text-destructive">{stats.overdue}</div>
              <div className="text-xs text-muted-foreground">Überfällig</div>
            </CardContent>
          </Card>
          <Card className="border-yellow-500/30 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.dueSoon}</div>
              <div className="text-xs text-muted-foreground">Bald fällig</div>
            </CardContent>
          </Card>
          <Card className="border-green-500/30 bg-green-50 dark:bg-green-950/20">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.ok}</div>
              <div className="text-xs text-muted-foreground">Aktuell</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-2xl font-bold text-primary">{stats.thisMonth}</div>
              <div className="text-xs text-muted-foreground">Diesen Monat</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calendar" className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="calendar">Kalender</TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
              <TabsTrigger value="overdue">Überfällig ({stats.overdue})</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Select value={filterCycle} onValueChange={setFilterCycle}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-3 w-3 mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Zyklen</SelectItem>
                  <SelectItem value="monthly">Monatlich</SelectItem>
                  <SelectItem value="quarterly">Quartalsweise</SelectItem>
                  <SelectItem value="biannual">Halbjährlich</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <CardTitle className="text-lg">
                    {MONTHS_DE[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map(d => (
                    <div key={d} className="text-xs font-medium text-muted-foreground text-center py-1">{d}</div>
                  ))}
                </div>
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarData.map((day, i) => {
                    const isToday = day.date !== null && 
                      new Date().getDate() === day.date && 
                      new Date().getMonth() === currentMonth.getMonth() && 
                      new Date().getFullYear() === currentMonth.getFullYear();
                    
                    return (
                      <div
                        key={i}
                        className={cn(
                          "min-h-[80px] md:min-h-[100px] border border-border rounded-md p-1 text-xs",
                          day.date === null && "bg-muted/30 border-transparent",
                          isToday && "border-primary/50 bg-primary/5",
                          day.entries.some(e => e.status === "overdue") && "bg-destructive/5",
                        )}
                      >
                        {day.date !== null && (
                          <>
                            <div className={cn(
                              "font-medium mb-0.5",
                              isToday && "text-primary font-bold"
                            )}>
                              {day.date}
                            </div>
                            <div className="space-y-0.5 overflow-hidden">
                              {day.entries.slice(0, 3).map(entry => (
                                <div
                                  key={entry.slug}
                                  className={cn(
                                    "text-[10px] leading-tight px-1 py-0.5 rounded truncate",
                                    entry.status === "overdue" && "bg-destructive/15 text-destructive",
                                    entry.status === "due-soon" && "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
                                    entry.status === "ok" && "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
                                  )}
                                  title={entry.title}
                                >
                                  {entry.title.slice(0, 30)}
                                </div>
                              ))}
                              {day.entries.length > 3 && (
                                <div className="text-[10px] text-muted-foreground px-1">
                                  +{day.entries.length - 3} mehr
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className="w-3 h-3 rounded bg-destructive/15 border border-destructive/30" />
                    <span className="text-muted-foreground">Überfällig</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className="w-3 h-3 rounded bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300" />
                    <span className="text-muted-foreground">Bald fällig (≤14 Tage)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className="w-3 h-3 rounded bg-green-100 dark:bg-green-900/30 border border-green-300" />
                    <span className="text-muted-foreground">Planmäßig</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* List View */}
          <TabsContent value="list">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  {filteredEntries.map(entry => (
                    <ArticleRow key={entry.slug} entry={entry} />
                  ))}
                  {filteredEntries.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">Keine Artikel mit diesen Filtern.</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Overdue View */}
          <TabsContent value="overdue">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Überfällige Artikel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {scheduleEntries.filter(e => e.status === "overdue").map(entry => (
                    <ArticleRow key={entry.slug} entry={entry} />
                  ))}
                  {scheduleEntries.filter(e => e.status === "overdue").length === 0 && (
                    <div className="text-center py-8 text-green-600 flex flex-col items-center gap-2">
                      <CheckCircle className="h-8 w-8" />
                      <span>Alle Artikel sind aktuell!</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

const ArticleRow = ({ entry }: { entry: ScheduleEntry }) => {
  const statusConfig = {
    overdue: { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10", label: `${Math.abs(entry.daysUntilDue)} Tage überfällig` },
    "due-soon": { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950/20", label: `In ${entry.daysUntilDue} Tagen fällig` },
    ok: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/20", label: `In ${entry.daysUntilDue} Tagen` },
  };

  const config = statusConfig[entry.status];
  const Icon = config.icon;

  const cycleLabelMap: Record<string, string> = {
    monthly: "Monatlich",
    quarterly: "Quartalsweise",
    biannual: "Halbjährlich",
  };

  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg border border-border", config.bg)}>
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <Icon className={cn("h-4 w-4 flex-shrink-0", config.color)} />
        <Link 
          to={`/blog/${entry.slug}`} 
          className="text-sm font-medium text-foreground hover:text-primary truncate"
          target="_blank"
        >
          {entry.title}
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs pl-6 sm:pl-0">
        <Badge variant="outline" className="text-[10px]">{entry.category}</Badge>
        <Badge variant="secondary" className="text-[10px]">{cycleLabelMap[entry.reviewCycle] || entry.reviewCycle}</Badge>
        <span className="text-muted-foreground">
          Letzte Prüfung: {new Date(entry.lastReviewedAt).toLocaleDateString("de-DE")}
        </span>
        <span className={cn("font-medium", config.color)}>{config.label}</span>
        <span className="text-muted-foreground">von {entry.reviewedBy}</span>
      </div>
    </div>
  );
};

export default ContentUpdateCalendar;
