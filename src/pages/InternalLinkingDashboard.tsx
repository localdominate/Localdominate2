import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { AdminLoginScreen } from "@/components/admin/AdminLoginScreen";
import { AdminAccessDenied } from "@/components/admin/AdminAccessDenied";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft, Link2, Layers, BookOpen, AlertTriangle, CheckCircle2,
  Search, Copy, TrendingUp, ArrowUp, ArrowRight, ExternalLink,
  RefreshCw, Eye
} from "lucide-react";
import { toast } from "sonner";

import {
  getSiteLinkingHealth,
  auditAllArticles,
  auditArticleLinking,
  getAnchorText,
  getRotatedAnchor,
  getRequiredLinks,
  type LinkingAuditResult,
  type CrossLinkRecommendation,
  type AnchorTextRecommendation,
} from "@/data/internalLinkingStrategy";
import {
  HUB_DEFINITIONS,
  PILLAR_PAGES,
  getHubsForArticle,
  getPillarForArticle,
} from "@/data/internalLinkRegistry";

const InternalLinkingDashboard = () => {
  const { user, isAdmin, isLoading: authLoading, signIn, signOut, error: authError } = useAdminAuth();
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // === Computed data ===
  const health = useMemo(() => getSiteLinkingHealth(), []);
  const allAudits = useMemo(() => auditAllArticles(), []);

  const filteredAudits = useMemo(() => {
    if (!searchQuery) return allAudits;
    const q = searchQuery.toLowerCase();
    return allAudits.filter(a => a.slug.toLowerCase().includes(q));
  }, [allAudits, searchQuery]);

  const selectedAudit = useMemo(() => {
    if (!selectedArticle) return null;
    return auditArticleLinking(selectedArticle);
  }, [selectedArticle]);

  const selectedLinks = useMemo(() => {
    if (!selectedArticle) return [];
    return getRequiredLinks(selectedArticle);
  }, [selectedArticle]);

  const selectedAnchors = useMemo(() => {
    if (!selectedArticle) return null;
    return getAnchorText(selectedArticle);
  }, [selectedArticle]);

  // Hub coverage stats
  const hubStats = useMemo(() => {
    return HUB_DEFINITIONS.map(hub => {
      const articles = hub.articleSlugs;
      const audits = articles.map(s => auditArticleLinking(s));
      const avgScore = audits.length > 0 ? audits.reduce((sum, a) => sum + a.score, 0) / audits.length : 0;
      const withPillar = audits.filter(a => a.hasPillarLink).length;
      const withSiblings = audits.filter(a => a.siblingLinksCount >= 2).length;
      return {
        ...hub,
        articleCount: articles.length,
        avgScore: Math.round(avgScore),
        withPillar,
        withSiblings,
      };
    });
  }, []);

  // Anchor text catalog
  const anchorCatalog = useMemo(() => {
    const allSlugs = new Set<string>();
    HUB_DEFINITIONS.forEach(h => h.articleSlugs.forEach(s => allSlugs.add(s)));
    Object.values(PILLAR_PAGES).forEach(p => allSlugs.add(p.slug));
    HUB_DEFINITIONS.forEach(h => allSlugs.add(h.slug));

    return Array.from(allSlugs)
      .map(slug => {
        const anchor = getAnchorText(slug);
        if (!anchor) return null;
        return anchor;
      })
      .filter(Boolean) as AnchorTextRecommendation[];
  }, []);

  const copyAnchorHtml = (anchor: AnchorTextRecommendation) => {
    const html = `<a href="${anchor.path}">${anchor.primaryAnchor}</a>`;
    navigator.clipboard.writeText(html);
    toast.success("Anchor-HTML kopiert!");
  };

  const scoreColor = (score: number) =>
    score >= 80 ? "text-green-600" :
    score >= 60 ? "text-primary" :
    score >= 40 ? "text-orange-500" :
    "text-destructive";

  const scoreBadge = (score: number) =>
    score >= 80 ? "bg-green-100 text-green-700" :
    score >= 60 ? "bg-primary/10 text-primary" :
    score >= 40 ? "bg-orange-100 text-orange-700" :
    "bg-destructive/10 text-destructive";

  // Auth gates
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!user) return <AdminLoginScreen onLogin={signIn} isLoading={authLoading} error={authError} />;
  if (!isAdmin) return <AdminAccessDenied onSignOut={signOut} />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Internal Linking Strategy" description="Sitewide internal linking audit, anchor text recommendations and coverage report" noindex />

      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/analytics">
              <Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-1" /> Analytics</Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Internal Linking Strategy</h1>
              <p className="text-sm text-muted-foreground">Audit, Anchor Texts & Coverage Report</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Health Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-5 pb-4 text-center">
              <p className={`text-3xl font-bold ${scoreColor(health.overallScore)}`}>{health.overallScore}</p>
              <p className="text-xs text-muted-foreground mt-1">Gesamt-Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 pb-4 text-center">
              <p className="text-3xl font-bold text-foreground">{health.totalArticles}</p>
              <p className="text-xs text-muted-foreground mt-1">Artikel registriert</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 pb-4 text-center">
              <p className="text-3xl font-bold text-green-600">{health.articlesWithPillar}</p>
              <p className="text-xs text-muted-foreground mt-1">Mit Pillar-Link</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 pb-4 text-center">
              <p className="text-3xl font-bold text-primary">{health.articlesWithMinHubs}</p>
              <p className="text-xs text-muted-foreground mt-1">Mit Hub-Link</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 pb-4 text-center">
              <p className={`text-3xl font-bold ${health.weakArticles.length > 5 ? "text-destructive" : "text-orange-500"}`}>
                {health.weakArticles.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Schwache Artikel (&lt;60)</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="audit" className="space-y-4">
          <TabsList>
            <TabsTrigger value="audit">🔍 Linking Audit</TabsTrigger>
            <TabsTrigger value="hubs">🗂️ Hub Coverage</TabsTrigger>
            <TabsTrigger value="anchors">🔗 Anchor Text Katalog</TabsTrigger>
            <TabsTrigger value="detail">📄 Artikel-Detail</TabsTrigger>
          </TabsList>

          {/* Audit Tab */}
          <TabsContent value="audit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Link2 className="h-5 w-5 text-primary" /> Linking Audit – Alle Artikel</CardTitle>
                <CardDescription>Sortiert nach Score (schwächste zuerst). Klicke auf einen Artikel für Details.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Artikel suchen..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Artikel</TableHead>
                        <TableHead className="text-center w-16">Score</TableHead>
                        <TableHead className="text-center w-20">Pillar</TableHead>
                        <TableHead className="text-center w-16">Hubs</TableHead>
                        <TableHead className="text-center w-20">Siblings</TableHead>
                        <TableHead className="text-center w-16">Total</TableHead>
                        <TableHead className="w-20">Aktion</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAudits.map(audit => (
                        <TableRow key={audit.slug} className={audit.score < 60 ? "bg-destructive/5" : ""}>
                          <TableCell className="font-mono text-xs max-w-[250px] truncate">{audit.slug}</TableCell>
                          <TableCell className="text-center">
                            <Badge className={`text-xs ${scoreBadge(audit.score)}`}>{audit.score}</Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            {audit.hasPillarLink
                              ? <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                              : <AlertTriangle className="h-4 w-4 text-destructive mx-auto" />}
                          </TableCell>
                          <TableCell className="text-center text-sm">{audit.hubLinksCount}</TableCell>
                          <TableCell className="text-center text-sm">{audit.siblingLinksCount}</TableCell>
                          <TableCell className="text-center text-sm font-medium">{audit.totalLinks}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(audit.slug)}>
                              <Eye className="h-3 w-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hub Coverage Tab */}
          <TabsContent value="hubs" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {hubStats.map(hub => (
                <Card key={hub.slug}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span>{hub.icon}</span> {hub.title}
                    </CardTitle>
                    <CardDescription>{hub.articleCount} Artikel registriert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Ø Linking Score</span>
                        <Badge className={scoreBadge(hub.avgScore)}>{hub.avgScore}/100</Badge>
                      </div>
                      <Progress value={hub.avgScore} className="h-2" />
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          <span className="text-muted-foreground">{hub.withPillar}/{hub.articleCount} mit Pillar</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Link2 className="h-3 w-3 text-primary" />
                          <span className="text-muted-foreground">{hub.withSiblings}/{hub.articleCount} mit 2+ Siblings</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pillar Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Layers className="h-4 w-4 text-primary" /> Pillar Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.values(PILLAR_PAGES).map(pillar => {
                    const anchor = getAnchorText(pillar.slug);
                    const hubsLinked = HUB_DEFINITIONS.filter(h => h.pillarSlug === Object.keys(PILLAR_PAGES).find(k => PILLAR_PAGES[k].slug === pillar.slug));
                    return (
                      <div key={pillar.slug} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{pillar.icon}</span>
                          <div>
                            <p className="font-medium text-foreground text-sm">{pillar.title}</p>
                            <p className="text-xs text-muted-foreground font-mono">{pillar.path}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">{hubsLinked.length} Hubs</Badge>
                          {anchor && (
                            <Button variant="ghost" size="sm" onClick={() => copyAnchorHtml(anchor)}>
                              <Copy className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Anchor Text Catalog */}
          <TabsContent value="anchors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> SEO Anchor Text Katalog</CardTitle>
                <CardDescription>{anchorCatalog.length} Artikel mit optimierten Anchor Texts. Klicke auf Copy für HTML-Snippet.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-h-[600px] overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Slug</TableHead>
                        <TableHead>Primary Anchor</TableHead>
                        <TableHead>Variation 1</TableHead>
                        <TableHead>Natural Anchor</TableHead>
                        <TableHead className="w-16">Copy</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {anchorCatalog.map(a => (
                        <TableRow key={a.slug}>
                          <TableCell className="font-mono text-xs max-w-[180px] truncate">{a.slug}</TableCell>
                          <TableCell className="text-sm font-medium text-primary">{a.primaryAnchor}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{a.variations[0] || "—"}</TableCell>
                          <TableCell className="text-sm text-muted-foreground italic">{a.naturalAnchor}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => copyAnchorHtml(a)}>
                              <Copy className="h-3 w-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Article Detail Tab */}
          <TabsContent value="detail" className="space-y-4">
            {!selectedArticle ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Link2 className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Wähle einen Artikel aus dem Audit-Tab, um Details zu sehen.</p>
                </CardContent>
              </Card>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-mono">{selectedArticle}</CardTitle>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedArticle(null)}>✕ Schließen</Button>
                    </div>
                    <CardDescription>
                      Score: <Badge className={scoreBadge(selectedAudit?.score ?? 0)}>{selectedAudit?.score ?? 0}/100</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Recommendations */}
                    {selectedAudit && selectedAudit.recommendations.length > 0 && (
                      <div className="mb-6 space-y-2">
                        <h3 className="text-sm font-semibold text-foreground mb-2">Empfehlungen</h3>
                        {selectedAudit.recommendations.map((rec, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm p-2 rounded bg-destructive/5 border border-destructive/20">
                            <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{rec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Required links */}
                    <h3 className="text-sm font-semibold text-foreground mb-3">Generierte interne Links ({selectedLinks.length})</h3>
                    <div className="space-y-2">
                      {selectedLinks.map((link, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg border bg-card text-sm">
                          <div className="flex-shrink-0">
                            {link.linkType === "pillar" && <ArrowUp className="h-4 w-4 text-primary" />}
                            {link.linkType === "hub" && <Layers className="h-4 w-4 text-primary" />}
                            {link.linkType === "sibling" && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                            {link.linkType === "lateral" && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground">{link.anchor}</p>
                            <p className="text-xs text-muted-foreground">{link.reason}</p>
                          </div>
                          <Badge variant="outline" className="text-xs flex-shrink-0">{link.linkType}</Badge>
                          <Button
                            variant="ghost" size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(`<a href="${link.targetPath}">${link.anchor}</a>`);
                              toast.success("Link-HTML kopiert!");
                            }}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Anchor text for this article */}
                    {selectedAnchors && (
                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-foreground mb-3">Anchor Texts für diesen Artikel</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 rounded bg-primary/5">
                            <span><strong>Primary:</strong> {selectedAnchors.primaryAnchor}</span>
                            <Button variant="ghost" size="sm" onClick={() => copyAnchorHtml(selectedAnchors)}>
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          {selectedAnchors.variations.map((v, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/50">
                              <span><strong>Variation {i+1}:</strong> {v}</span>
                            </div>
                          ))}
                          <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                            <span><strong>Natural:</strong> <em>{selectedAnchors.naturalAnchor}</em></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InternalLinkingDashboard;
