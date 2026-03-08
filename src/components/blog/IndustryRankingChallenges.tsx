import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle, Shield, Target, TrendingUp, ChevronDown, ChevronRight,
  Lightbulb, Zap, BarChart3, Users, Copy, Check, Building2
} from 'lucide-react';

type Difficulty = 'Niedrig' | 'Mittel' | 'Hoch' | 'Sehr hoch';

interface RankingChallenge {
  title: string;
  difficulty: Difficulty;
  description: string;
  impact: string;
  strategies: string[];
  quickWin?: string;
}

interface IndustryKPI {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
}

export interface IndustryRankingConfig {
  industry: string;
  icon: string;
  overallDifficulty: Difficulty;
  challenges: RankingChallenge[];
  kpis: IndustryKPI[];
  topStrategy: string;
  uniqueAdvantage: string;
}

const difficultyColor = (d: Difficulty) => {
  switch (d) {
    case 'Niedrig': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
    case 'Mittel': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
    case 'Hoch': return 'bg-rose-500/10 text-rose-700 border-rose-500/20';
    case 'Sehr hoch': return 'bg-destructive/10 text-destructive border-destructive/20';
  }
};

const difficultyIcon = (d: Difficulty) => {
  switch (d) {
    case 'Niedrig': return <Shield className="w-3.5 h-3.5" />;
    case 'Mittel': return <Target className="w-3.5 h-3.5" />;
    case 'Hoch': return <AlertTriangle className="w-3.5 h-3.5" />;
    case 'Sehr hoch': return <Zap className="w-3.5 h-3.5" />;
  }
};

const trendIcon = (t: 'up' | 'down' | 'stable') => {
  switch (t) {
    case 'up': return <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />;
    case 'down': return <TrendingUp className="w-3.5 h-3.5 text-rose-600 rotate-180" />;
    case 'stable': return <BarChart3 className="w-3.5 h-3.5 text-muted-foreground" />;
  }
};

export default function IndustryRankingChallenges({ config }: { config: IndustryRankingConfig }) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]));
  const [copied, setCopied] = useState(false);

  const toggle = (i: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleCopy = () => {
    let text = `# Ranking-Herausforderungen: ${config.industry}\n\n`;
    text += `Gesamt-Schwierigkeit: ${config.overallDifficulty}\n`;
    text += `Top-Strategie: ${config.topStrategy}\n\n`;
    config.challenges.forEach(c => {
      text += `## ${c.title} (${c.difficulty})\n${c.description}\nImpact: ${c.impact}\n`;
      c.strategies.forEach(s => text += `  - ${s}\n`);
      if (c.quickWin) text += `  ⚡ Quick Win: ${c.quickWin}\n`;
      text += '\n';
    });
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-5 not-prose" data-ai-summary={`Ranking challenges and strategies for ${config.industry}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500/10 via-amber-500/5 to-transparent border border-rose-500/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-5 h-5 text-rose-600" />
              {config.icon} Ranking-Herausforderungen: {config.industry}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {config.challenges.length} branchenspezifische Herausforderungen • Strategien & Quick Wins
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`text-xs ${difficultyColor(config.overallDifficulty)}`}>
              {difficultyIcon(config.overallDifficulty)}
              <span className="ml-1">Gesamt: {config.overallDifficulty}</span>
            </Badge>
            <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Kopiert!' : 'Kopieren'}
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {config.kpis.map((kpi, i) => (
            <div key={i} className="bg-background/60 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {trendIcon(kpi.trend)}
                <span className="text-lg font-bold text-foreground">{kpi.value}</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{kpi.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="space-y-3">
        {config.challenges.map((challenge, i) => {
          const isOpen = expanded.has(i);
          return (
            <Card key={i}>
              <div className="cursor-pointer select-none py-3 px-4 flex items-center justify-between" onClick={() => toggle(i)}>
                <div className="flex items-center gap-3">
                  {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                  <span className="text-sm font-semibold text-foreground">{challenge.title}</span>
                </div>
                <Badge variant="outline" className={`text-[10px] ${difficultyColor(challenge.difficulty)}`}>
                  {difficultyIcon(challenge.difficulty)}
                  <span className="ml-1">{challenge.difficulty}</span>
                </Badge>
              </div>
              {isOpen && (
                <CardContent className="pt-0 px-4 pb-4 space-y-3">
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  <div className="flex items-start gap-2 text-xs bg-amber-500/5 text-amber-700 border border-amber-500/10 rounded-lg p-2.5">
                    <BarChart3 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span><strong>Impact:</strong> {challenge.impact}</span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Strategien:</span>
                    {challenge.strategies.map((s, si) => (
                      <div key={si} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Target className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  {challenge.quickWin && (
                    <div className="flex items-start gap-2 text-xs bg-emerald-500/5 text-emerald-700 border border-emerald-500/10 rounded-lg p-2.5">
                      <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span><strong>Quick Win:</strong> {challenge.quickWin}</span>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Bottom Strategy & Advantage */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
          <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div><strong>Top-Strategie:</strong> {config.topStrategy}</div>
        </div>
        <div className="flex items-start gap-2 text-xs bg-emerald-500/5 text-emerald-700 border border-emerald-500/10 rounded-lg p-3">
          <Users className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div><strong>Branchen-Vorteil:</strong> {config.uniqueAdvantage}</div>
        </div>
      </div>
    </div>
  );
}
