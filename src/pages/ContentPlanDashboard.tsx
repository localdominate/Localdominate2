import { useState, useMemo } from "react";
import { blogArticles, resolveArticle } from "@/data/blogArticles";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowLeft,
  Download,
  RefreshCw,
  Eye,
  ChevronLeft,
  ChevronRight,
  Users,
  BarChart3,
  Mail,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import { CustomerTable } from "@/components/admin/CustomerTable";
import { AnalyticsOverview } from "@/components/admin/AnalyticsOverview";
import { EmailTestPanel } from "@/components/admin/EmailTestPanel";
import { ScheduledPostsPanel } from "@/components/admin/ScheduledPostsPanel";
import { useScheduledPosts } from "@/hooks/useScheduledPosts";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, isAfter, isBefore, isToday } from "date-fns";
import { de } from "date-fns/locale";

type ArticleStatus = "published" | "scheduled" | "draft";

interface ArticleWithStatus {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  icon: string;
  readingTime: number;
  status: ArticleStatus;
  keywords: string[];
}

const getArticleStatus = (publishedAt: string, hasContent: boolean): ArticleStatus => {
  const publishDate = parseISO(publishedAt);
  const today = new Date();
  
  if (!hasContent) return "draft";
  if (isAfter(publishDate, today)) return "scheduled";
  return "published";
};

// Articles that have full content (not placeholders)
const articlesWithContent = [
  "local-seo-keywords-finden",
  "google-maps-ranking-verbessern",
  "google-bewertungen-bekommen",
  "local-seo-fuer-restaurants",
  "google-my-business-optimieren",
  "lokale-suchmaschinenoptimierung-2026",
  "nap-konsistenz-local-seo",
  "local-seo-handwerker",
  "local-seo-audit-checkliste",
  "local-seo-schweiz",
  "local-seo-zuerich",
  "local-seo-muenchen",
  "local-seo-aerzte-praxen",
  "local-seo-anwaelte-kanzleien",
  "negative-google-bewertungen",
  "local-seo-doener-kebab-imbiss",
  "local-seo-friseursalon-beauty",
  // New articles with full content
  "mobile-local-seo",
  "local-link-building",
  "local-content-marketing",
  "schema-markup-local-seo",
  "google-maps-seo-ranking-faktoren",
  "local-seo-hotels",
  "local-seo-case-study-baecker",
  "local-seo-fitness",
  "local-seo-fehler",
];

const ContentPlanDashboard = () => {
  const { language } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  // Fetch actual scheduled posts from database
  const { data: scheduledPosts } = useScheduledPosts();

  const articles: ArticleWithStatus[] = useMemo(() => {
    return blogArticles.map(article => {
      const resolved = resolveArticle(article, language);
      const hasContent = articlesWithContent.includes(article.slug);
      return {
        slug: article.slug,
        title: resolved.title,
        category: resolved.category,
        publishedAt: article.publishedAt,
        icon: article.icon,
        readingTime: article.readingTime,
        keywords: article.keywords,
        status: getArticleStatus(article.publishedAt, hasContent),
      };
    });
  }, [language]);

  // Calculate stats using actual database data for scheduled posts
  const stats = useMemo(() => {
    const total = articles.length;
    const published = articles.filter(a => a.status === "published").length;
    // Use actual scheduled posts count from database
    const scheduledFromDb = scheduledPosts?.filter(p => p.status === 'scheduled').length || 0;
    const publishedFromDb = scheduledPosts?.filter(p => p.status === 'published').length || 0;
    const draft = articles.filter(a => a.status === "draft").length;
    
    return { 
      total, 
      published: published + publishedFromDb,
      scheduled: scheduledFromDb,
      draft 
    };
  }, [articles, scheduledPosts]);

  const calendarDays = useMemo(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const getArticlesForDate = (date: Date) => {
    return articles.filter(article => {
      const publishDate = parseISO(article.publishedAt);
      return isSameDay(publishDate, date);
    });
  };

  const getStatusColor = (status: ArticleStatus) => {
    switch (status) {
      case "published": return "bg-green-500";
      case "scheduled": return "bg-yellow-500";
      case "draft": return "bg-gray-400";
    }
  };

  const getStatusBadge = (status: ArticleStatus) => {
    switch (status) {
      case "published": return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Live</Badge>;
      case "scheduled": return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Geplant</Badge>;
      case "draft": return <Badge className="bg-gray-500/10 text-gray-600 border-gray-500/20">Entwurf</Badge>;
    }
  };

  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const upcomingArticles = articles
    .filter(a => a.status === "scheduled" || isAfter(parseISO(a.publishedAt), subMonths(new Date(), 1)))
    .sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
    .slice(0, 10);

  const exportToCSV = () => {
    const headers = ["Titel", "Kategorie", "Status", "Veröffentlichung", "Lesezeit"];
    const rows = articles.map(a => [
      a.title,
      a.category,
      a.status === "published" ? "Veröffentlicht" : a.status === "scheduled" ? "Geplant" : "Entwurf",
      a.publishedAt,
      `${a.readingTime} Min`
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `content-plan-${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Content Plan Dashboard - Local Dominator"
        description="Internes Content Plan Dashboard"
        noindex={true}
      />
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Aktualisieren
            </Button>
            <Button variant="outline" size="sm" onClick={exportToCSV}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Gesamt</p>
                  <p className="text-3xl font-bold">{stats.total}</p>
                </div>
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Live</p>
                  <p className="text-3xl font-bold text-green-600">{stats.published}</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Geplant</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.scheduled}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Entwürfe</p>
                  <p className="text-3xl font-bold text-gray-600">{stats.draft}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="calendar" className="flex-1">
            <TabsList className="flex-wrap h-auto gap-1">
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Kalender
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Alle Artikel
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="emails" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-Mails
              </TabsTrigger>
              <TabsTrigger value="scheduled" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Geplante Posts
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Link to="/admin/kunden">
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Meine Kunden
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="calendar" className="space-y-6">

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">
                    {format(currentMonth, "MMMM yyyy", { locale: de })}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Button aria-label="Vorheriger Monat" variant="outline" size="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>
                      Heute
                    </Button>
                    <Button aria-label="Nächster Monat" variant="outline" size="icon" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map(day => (
                      <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for days before start of month */}
                    {Array.from({ length: (calendarDays[0].getDay() + 6) % 7 }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square" />
                    ))}
                    
                    {calendarDays.map(day => {
                      const dayArticles = getArticlesForDate(day);
                      const hasArticles = dayArticles.length > 0;
                      
                      return (
                        <button
                          key={day.toISOString()}
                          onClick={() => setSelectedDate(hasArticles ? day : null)}
                          className={`
                            aspect-square p-1 rounded-lg text-sm relative transition-colors
                            ${isToday(day) ? "bg-primary/10 font-bold" : "hover:bg-muted"}
                            ${selectedDate && isSameDay(selectedDate, day) ? "ring-2 ring-primary" : ""}
                          `}
                        >
                          <span className={isToday(day) ? "text-primary" : ""}>
                            {format(day, "d")}
                          </span>
                          {hasArticles && (
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                              {dayArticles.slice(0, 3).map((article, i) => (
                                <div 
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${getStatusColor(article.status)}`}
                                />
                              ))}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span>Live</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span>Geplant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400" />
                      <span>Entwurf</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Date / Upcoming */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedDate 
                      ? format(selectedDate, "d. MMMM yyyy", { locale: de })
                      : "Kommende Artikel"
                    }
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(selectedDate ? getArticlesForDate(selectedDate) : upcomingArticles).map(article => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{article.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm line-clamp-2">{article.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-muted-foreground">
                                {format(parseISO(article.publishedAt), "dd.MM.yyyy")}
                              </span>
                              {getStatusBadge(article.status)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {selectedDate && getArticlesForDate(selectedDate).length === 0 && (
                      <p className="text-muted-foreground text-sm text-center py-4">
                        Keine Artikel an diesem Tag
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Alle Artikel ({articles.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Artikel</th>
                        <th className="text-left py-3 px-4 font-medium">Kategorie</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Datum</th>
                        <th className="text-left py-3 px-4 font-medium">Lesezeit</th>
                        <th className="text-right py-3 px-4 font-medium">Aktionen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedArticles.map(article => (
                        <tr key={article.slug} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{article.icon}</span>
                              <span className="font-medium line-clamp-1 max-w-xs">{article.title}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{article.category}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            {getStatusBadge(article.status)}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {format(parseISO(article.publishedAt), "dd.MM.yyyy")}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {article.readingTime} Min
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/blog/${article.slug}`}>
                                <Eye className="w-4 h-4 mr-1" />
                                Ansehen
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          <TabsContent value="analytics">
            <AnalyticsOverview />
          </TabsContent>

          <TabsContent value="emails">
            <EmailTestPanel />
          </TabsContent>

          <TabsContent value="scheduled">
            <ScheduledPostsPanel />
          </TabsContent>
        </Tabs>

        {/* Category Distribution */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Artikel nach Kategorie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(
                articles.reduce((acc, article) => {
                  acc[article.category] = (acc[article.category] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>)
              ).sort((a, b) => b[1] - a[1]).map(([category, count]) => (
                <div key={category} className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-sm text-muted-foreground">{category}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ContentPlanDashboard;
