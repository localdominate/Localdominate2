import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, ThumbsDown, MessageSquare, TrendingUp, TrendingDown, BarChart3, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleFeedback {
  article_slug: string;
  helpful_count: number;
  not_helpful_count: number;
  total_votes: number;
  helpfulness_rate: number;
  feedback_messages: string[];
}

interface FeedbackEvent {
  id: string;
  created_at: string;
  event_name: string;
  event_data: {
    article_slug?: string;
    feedback?: string;
  };
}

const ArticleFeedbackDashboard = () => {
  const [feedbackData, setFeedbackData] = useState<ArticleFeedback[]>([]);
  const [recentFeedback, setRecentFeedback] = useState<FeedbackEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totals, setTotals] = useState({
    helpful: 0,
    notHelpful: 0,
    feedbackMessages: 0,
    overallRate: 0,
  });

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      // Fetch helpfulness votes
      const { data: helpfulnessVotes, error: votesError } = await supabase
        .from("analytics_events")
        .select("*")
        .eq("event_type", "article_helpfulness_vote")
        .order("created_at", { ascending: false });

      if (votesError) throw votesError;

      // Fetch feedback messages
      const { data: feedbackMessages, error: feedbackError } = await supabase
        .from("analytics_events")
        .select("*")
        .eq("event_type", "article_feedback")
        .order("created_at", { ascending: false })
        .limit(50);

      if (feedbackError) throw feedbackError;

      // Process votes by article
      const articleStats: Record<string, ArticleFeedback> = {};

      helpfulnessVotes?.forEach((vote) => {
        const slug = (vote.event_data as { article_slug?: string })?.article_slug || "unknown";
        if (!articleStats[slug]) {
          articleStats[slug] = {
            article_slug: slug,
            helpful_count: 0,
            not_helpful_count: 0,
            total_votes: 0,
            helpfulness_rate: 0,
            feedback_messages: [],
          };
        }
        if (vote.event_name === "helpful") {
          articleStats[slug].helpful_count++;
        } else {
          articleStats[slug].not_helpful_count++;
        }
        articleStats[slug].total_votes++;
      });

      // Add feedback messages to articles
      feedbackMessages?.forEach((feedback) => {
        const slug = (feedback.event_data as { article_slug?: string })?.article_slug || "unknown";
        const message = (feedback.event_data as { feedback?: string })?.feedback;
        if (articleStats[slug] && message) {
          articleStats[slug].feedback_messages.push(message);
        }
      });

      // Calculate helpfulness rates
      Object.values(articleStats).forEach((article) => {
        article.helpfulness_rate = article.total_votes > 0
          ? Math.round((article.helpful_count / article.total_votes) * 100)
          : 0;
      });

      // Sort by total votes descending
      const sortedData = Object.values(articleStats).sort(
        (a, b) => b.total_votes - a.total_votes
      );

      setFeedbackData(sortedData);
      setRecentFeedback(feedbackMessages as FeedbackEvent[] || []);

      // Calculate totals
      const totalHelpful = sortedData.reduce((sum, a) => sum + a.helpful_count, 0);
      const totalNotHelpful = sortedData.reduce((sum, a) => sum + a.not_helpful_count, 0);
      const totalFeedback = feedbackMessages?.length || 0;
      const overallRate = totalHelpful + totalNotHelpful > 0
        ? Math.round((totalHelpful / (totalHelpful + totalNotHelpful)) * 100)
        : 0;

      setTotals({
        helpful: totalHelpful,
        notHelpful: totalNotHelpful,
        feedbackMessages: totalFeedback,
        overallRate,
      });
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (rate: number) => {
    if (rate >= 80) {
      return <Badge className="bg-green-100 text-green-700">Exzellent</Badge>;
    } else if (rate >= 60) {
      return <Badge className="bg-yellow-100 text-yellow-700">Gut</Badge>;
    } else if (rate >= 40) {
      return <Badge className="bg-orange-100 text-orange-700">Verbesserungswürdig</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-700">Kritisch</Badge>;
    }
  };

  const formatSlugToTitle = (slug: string) => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 animate-pulse mx-auto text-primary mb-4" />
          <p className="text-muted-foreground">Lade Feedback-Daten...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Artikel-Feedback Dashboard
          </h1>
          <p className="text-muted-foreground">
            Übersicht aller Bewertungen des HelpfulnessWidgets
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totals.helpful}</p>
                  <p className="text-sm text-muted-foreground">Hilfreich</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <ThumbsDown className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totals.notHelpful}</p>
                  <p className="text-sm text-muted-foreground">Nicht hilfreich</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totals.feedbackMessages}</p>
                  <p className="text-sm text-muted-foreground">Feedback-Texte</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  totals.overallRate >= 70 ? "bg-green-100 dark:bg-green-900/30" : "bg-orange-100 dark:bg-orange-900/30"
                }`}>
                  {totals.overallRate >= 70 ? (
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-orange-600" />
                  )}
                </div>
                <div>
                  <p className="text-2xl font-bold">{totals.overallRate}%</p>
                  <p className="text-sm text-muted-foreground">Gesamt-Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList>
            <TabsTrigger value="articles">Artikel-Übersicht</TabsTrigger>
            <TabsTrigger value="feedback">Feedback-Texte</TabsTrigger>
            <TabsTrigger value="improvements">Verbesserungsvorschläge</TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <CardTitle>Artikel nach Helpfulness-Rate</CardTitle>
                <CardDescription>
                  Klicke auf einen Artikel um das Feedback im Detail zu sehen
                </CardDescription>
              </CardHeader>
              <CardContent>
                {feedbackData.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Noch keine Feedback-Daten vorhanden</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Das Widget sammelt Daten sobald Nutzer abstimmen
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {feedbackData.map((article) => (
                      <div
                        key={article.article_slug}
                        className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/blog/${article.article_slug}`}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {formatSlugToTitle(article.article_slug)}
                          </Link>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4 text-green-500" />
                              {article.helpful_count}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsDown className="h-4 w-4 text-red-500" />
                              {article.not_helpful_count}
                            </span>
                            {article.feedback_messages.length > 0 && (
                              <span className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4 text-blue-500" />
                                {article.feedback_messages.length} Texte
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="w-32 hidden md:block">
                          <Progress value={article.helpfulness_rate} className="h-2" />
                        </div>

                        <div className="text-right">
                          <p className="font-semibold text-lg">{article.helpfulness_rate}%</p>
                          <p className="text-xs text-muted-foreground">
                            {article.total_votes} Votes
                          </p>
                        </div>

                        {getStatusBadge(article.helpfulness_rate)}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Messages Tab */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Neueste Feedback-Texte</CardTitle>
                <CardDescription>
                  Direkte Rückmeldungen von Nutzern zu den Artikeln
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentFeedback.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Noch keine Feedback-Texte vorhanden</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentFeedback.map((feedback) => (
                      <div
                        key={feedback.id}
                        className="p-4 border rounded-lg bg-muted/30"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-foreground">
                              "{feedback.event_data?.feedback}"
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {formatSlugToTitle(feedback.event_data?.article_slug || "unknown")}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {new Date(feedback.created_at).toLocaleDateString("de-DE", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Improvements Tab */}
          <TabsContent value="improvements">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    Artikel mit Verbesserungsbedarf
                  </CardTitle>
                  <CardDescription>
                    Artikel mit einer Helpfulness-Rate unter 60%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {feedbackData.filter((a) => a.helpfulness_rate < 60 && a.total_votes >= 3).length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-10 w-10 mx-auto text-green-500 mb-2" />
                      <p className="text-muted-foreground">Alle Artikel haben gute Werte!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {feedbackData
                        .filter((a) => a.helpfulness_rate < 60 && a.total_votes >= 3)
                        .map((article) => (
                          <div
                            key={article.article_slug}
                            className="flex items-center justify-between p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/30"
                          >
                            <div>
                              <p className="font-medium text-sm">
                                {formatSlugToTitle(article.article_slug)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {article.not_helpful_count} negative Votes
                              </p>
                            </div>
                            <Badge variant="destructive">{article.helpfulness_rate}%</Badge>
                          </div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Top-Performer
                  </CardTitle>
                  <CardDescription>
                    Artikel mit einer Helpfulness-Rate über 80%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {feedbackData.filter((a) => a.helpfulness_rate >= 80 && a.total_votes >= 3).length === 0 ? (
                    <div className="text-center py-8">
                      <TrendingUp className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">Noch keine Top-Performer</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {feedbackData
                        .filter((a) => a.helpfulness_rate >= 80 && a.total_votes >= 3)
                        .map((article) => (
                          <div
                            key={article.article_slug}
                            className="flex items-center justify-between p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/30"
                          >
                            <div>
                              <p className="font-medium text-sm">
                                {formatSlugToTitle(article.article_slug)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {article.helpful_count} positive Votes
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-700">
                              {article.helpfulness_rate}%
                            </Badge>
                          </div>
                        ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArticleFeedbackDashboard;
