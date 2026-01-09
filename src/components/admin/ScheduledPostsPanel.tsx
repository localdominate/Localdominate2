import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useScheduledPosts, useCreateScheduledPost, usePublishNow, useTriggerPublishCheck } from "@/hooks/useScheduledPosts";
import { supabase } from "@/integrations/supabase/client";
import { format, parseISO, addMinutes } from "date-fns";
import { de } from "date-fns/locale";
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Zap,
  Play,
  Calendar,
  AlertTriangle,
  Loader2
} from "lucide-react";
import { toast } from "sonner";

export const ScheduledPostsPanel = () => {
  const { data: posts, isLoading, refetch } = useScheduledPosts();
  const createPost = useCreateScheduledPost();
  const publishNow = usePublishNow();
  const triggerCheck = useTriggerPublishCheck();
  
  const [testSlug, setTestSlug] = useState("test-article-" + Date.now());
  const [testTitle, setTestTitle] = useState("Test Artikel für Veröffentlichung");
  const [minutesFromNow, setMinutesFromNow] = useState(1);
  const [isTestRunning, setIsTestRunning] = useState(false);

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('scheduled-posts-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'scheduled_posts'
        },
        () => {
          refetch();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  const handleCreateTestPost = async () => {
    const scheduledAt = addMinutes(new Date(), minutesFromNow);
    
    try {
      await createPost.mutateAsync({
        slug: testSlug,
        title: testTitle,
        scheduled_at: scheduledAt.toISOString()
      });
      
      toast.success(`Test-Artikel geplant für ${format(scheduledAt, "HH:mm:ss", { locale: de })}`);
      setTestSlug("test-article-" + Date.now());
      setIsTestRunning(true);
    } catch (error) {
      toast.error("Fehler beim Erstellen des Test-Artikels");
    }
  };

  const handleTriggerCheck = async () => {
    try {
      const result = await triggerCheck.mutateAsync();
      toast.success(`Veröffentlichungs-Check ausgeführt: ${result.postsProcessed} Posts verarbeitet`);
    } catch (error) {
      toast.error("Fehler beim Ausführen des Checks");
    }
  };

  const handlePublishNow = async (id: string, slug: string) => {
    try {
      await publishNow.mutateAsync(id);
      toast.success(`${slug} wurde veröffentlicht!`);
    } catch (error) {
      toast.error("Fehler beim Veröffentlichen");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Veröffentlicht
        </Badge>;
      case 'scheduled':
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20 flex items-center gap-1">
          <Clock className="w-3 h-3" /> Geplant
        </Badge>;
      case 'failed':
        return <Badge className="bg-red-500/10 text-red-600 border-red-500/20 flex items-center gap-1">
          <XCircle className="w-3 h-3" /> Fehlgeschlagen
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const scheduledPosts = posts?.filter(p => p.status === 'scheduled') || [];
  const publishedPosts = posts?.filter(p => p.status === 'published') || [];
  const failedPosts = posts?.filter(p => p.status === 'failed') || [];

  return (
    <div className="space-y-6">
      {/* Test Panel */}
      <Card className="border-2 border-dashed border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Test: Automatische Veröffentlichung
          </CardTitle>
          <CardDescription>
            Erstelle einen Test-Artikel und beobachte, wie er automatisch veröffentlicht wird.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="test-slug">Slug</Label>
              <Input 
                id="test-slug"
                value={testSlug}
                onChange={(e) => setTestSlug(e.target.value)}
                placeholder="test-artikel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="test-title">Titel</Label>
              <Input 
                id="test-title"
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="Test Artikel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minutes">Veröffentlichung in X Minuten</Label>
              <Input 
                id="minutes"
                type="number"
                min={1}
                max={60}
                value={minutesFromNow}
                onChange={(e) => setMinutesFromNow(parseInt(e.target.value) || 1)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-2">
            <Button 
              onClick={handleCreateTestPost}
              disabled={createPost.isPending}
            >
              {createPost.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Calendar className="w-4 h-4 mr-2" />
              )}
              Test-Artikel planen
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleTriggerCheck}
              disabled={triggerCheck.isPending}
            >
              {triggerCheck.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              Check jetzt ausführen
            </Button>

            <Button 
              variant="ghost"
              onClick={() => refetch()}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Aktualisieren
            </Button>
          </div>

          {isTestRunning && scheduledPosts.some(p => p.slug.startsWith('test-')) && (
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-700">Test läuft...</p>
                <p className="text-sm text-yellow-600">
                  Der Test-Artikel wird automatisch veröffentlicht, wenn die geplante Zeit erreicht ist.
                  Der Cron-Job läuft alle 1 Minute.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Geplant</p>
                <p className="text-3xl font-bold text-yellow-600">{scheduledPosts.length}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Veröffentlicht</p>
                <p className="text-3xl font-bold text-green-600">{publishedPosts.length}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Fehlgeschlagen</p>
                <p className="text-3xl font-bold text-red-600">{failedPosts.length}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Geplante Veröffentlichungen</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : posts?.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Keine geplanten Veröffentlichungen vorhanden.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Slug</th>
                    <th className="text-left py-3 px-4 font-medium">Titel</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Geplant für</th>
                    <th className="text-left py-3 px-4 font-medium">Veröffentlicht</th>
                    <th className="text-right py-3 px-4 font-medium">Aktionen</th>
                  </tr>
                </thead>
                <tbody>
                  {posts?.map(post => (
                    <tr key={post.id} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 font-mono text-sm">{post.slug}</td>
                      <td className="py-3 px-4">{post.title}</td>
                      <td className="py-3 px-4">{getStatusBadge(post.status)}</td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {format(parseISO(post.scheduled_at), "dd.MM.yyyy HH:mm:ss", { locale: de })}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {post.published_at 
                          ? format(parseISO(post.published_at), "dd.MM.yyyy HH:mm:ss", { locale: de })
                          : "-"
                        }
                      </td>
                      <td className="py-3 px-4 text-right">
                        {post.status === 'scheduled' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePublishNow(post.id, post.slug)}
                            disabled={publishNow.isPending}
                          >
                            <Zap className="w-3 h-3 mr-1" />
                            Jetzt
                          </Button>
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
    </div>
  );
};

export default ScheduledPostsPanel;
