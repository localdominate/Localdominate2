import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown, ChevronRight, Building2, TrendingUp, Users,
  Target, Lightbulb, Copy, Check, BarChart3, Layers,
  MapPin, Briefcase, ShoppingCart, Zap, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

interface IndustryCluster {
  name: string;
  icon: string;
  saturation: 'Niedrig' | 'Mittel' | 'Hoch' | 'Übersättigt';
  opportunity: 'Sehr hoch' | 'Hoch' | 'Mittel' | 'Niedrig';
  avgCompetitors: string;
  avgRating: string;
  avgReviews: string;
  gap: string;
  strategy: string;
}

interface EconomicFact {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  insight: string;
}

interface EcosystemConfig {
  city: string;
  population: string;
  businesses: string;
  avgSearchVolume: string;
  economicFacts: EconomicFact[];
  industryClusters: IndustryCluster[];
  underservedNiches: { niche: string; reason: string; potentialKeywords: string[] }[];
  strategicInsight: string;
}

interface Props {
  config: EcosystemConfig;
}

const saturationColor = (s: string) => {
  switch (s) {
    case 'Niedrig': return 'bg-green-500/10 text-green-700 border-green-500/20';
    case 'Mittel': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
    case 'Hoch': return 'bg-rose-500/10 text-rose-700 border-rose-500/20';
    case 'Übersättigt': return 'bg-destructive/10 text-destructive border-destructive/20';
    default: return 'bg-muted text-muted-foreground';
  }
};

const opportunityColor = (o: string) => {
  switch (o) {
    case 'Sehr hoch': return 'bg-green-500/10 text-green-700 border-green-500/20';
    case 'Hoch': return 'bg-primary/10 text-primary border-primary/20';
    case 'Mittel': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
    case 'Niedrig': return 'bg-muted text-muted-foreground border-border';
    default: return '';
  }
};

export default function LocalBusinessEcosystem({ config }: Props) {
  const [expandedClusters, setExpandedClusters] = useState<Set<string>>(new Set([config.industryClusters[0]?.name]));
  const [activeTab, setActiveTab] = useState<'overview' | 'industries' | 'opportunities'>('overview');
  const [copied, setCopied] = useState(false);

  const toggleCluster = (name: string) => {
    setExpandedClusters(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const generateTemplate = () => {
    let text = `# Business-Ökosystem Analyse: ${config.city}\n\n`;
    text += `Einwohner: ${config.population} | Unternehmen: ${config.businesses} | Ø Suchvolumen: ${config.avgSearchVolume}\n\n`;
    text += '## Wirtschaftliche Kennzahlen\n\n';
    config.economicFacts.forEach(f => text += `- ${f.label}: ${f.value} (${f.insight})\n`);
    text += '\n## Branchen-Cluster\n\n';
    config.industryClusters.forEach(c => {
      text += `### ${c.icon} ${c.name}\n`;
      text += `Sättigung: ${c.saturation} | Chance: ${c.opportunity}\n`;
      text += `Ø Konkurrenten: ${c.avgCompetitors} | Ø Rating: ${c.avgRating} | Ø Bewertungen: ${c.avgReviews}\n`;
      text += `Lücke: ${c.gap}\nStrategie: ${c.strategy}\n\n`;
    });
    text += '## Unterversorgte Nischen\n\n';
    config.underservedNiches.forEach(n => {
      text += `- ${n.niche}: ${n.reason}\n`;
      text += `  Keywords: ${n.potentialKeywords.join(', ')}\n`;
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary={`Local business ecosystem analysis for ${config.city} with industry clusters, economic data, and opportunity scoring`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Business-Ökosystem: {config.city}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {config.population} Einwohner • {config.businesses} Unternehmen • {config.industryClusters.length} Branchen-Cluster • {config.underservedNiches.length} Nischen-Chancen
            </p>
          </div>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Analyse kopieren'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['overview', 'industries', 'opportunities'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
          >
            {tab === 'overview' ? 'Marktübersicht' : tab === 'industries' ? 'Branchen-Cluster' : 'Nischen-Chancen'}
          </button>
        ))}
      </div>

      {/* Overview tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-3">
            <Card>
              <CardContent className="p-3 text-center">
                <Users className="w-4 h-4 mx-auto text-primary mb-1" />
                <div className="text-lg font-bold text-foreground">{config.population}</div>
                <div className="text-[10px] text-muted-foreground">Einwohner</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <Building2 className="w-4 h-4 mx-auto text-primary mb-1" />
                <div className="text-lg font-bold text-foreground">{config.businesses}</div>
                <div className="text-[10px] text-muted-foreground">Unternehmen</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <BarChart3 className="w-4 h-4 mx-auto text-primary mb-1" />
                <div className="text-lg font-bold text-foreground">{config.avgSearchVolume}</div>
                <div className="text-[10px] text-muted-foreground">Ø Suchvolumen/Mo</div>
              </CardContent>
            </Card>
          </div>

          {/* Economic facts */}
          <div className="space-y-2">
            {config.economicFacts.map((fact, i) => (
              <Card key={i}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {fact.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-600" />
                    ) : fact.trend === 'down' ? (
                      <ArrowDownRight className="w-4 h-4 text-destructive" />
                    ) : (
                      <Target className="w-4 h-4 text-amber-600" />
                    )}
                    <div>
                      <span className="text-sm font-medium text-foreground">{fact.label}</span>
                      <p className="text-[10px] text-muted-foreground">{fact.insight}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-foreground">{fact.value}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strategic insight */}
          <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div><strong>Strategische Einschätzung: </strong>{config.strategicInsight}</div>
          </div>
        </div>
      )}

      {/* Industries tab */}
      {activeTab === 'industries' && (
        <div className="space-y-3">
          {config.industryClusters.map(cluster => {
            const isExpanded = expandedClusters.has(cluster.name);
            return (
              <Card key={cluster.name}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleCluster(cluster.name)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <span className="text-sm">{cluster.icon}</span>
                      <span className="text-sm font-semibold text-foreground">{cluster.name}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <Badge variant="outline" className={`text-[10px] ${saturationColor(cluster.saturation)}`}>
                        Sättigung: {cluster.saturation}
                      </Badge>
                      <Badge variant="outline" className={`text-[10px] ${opportunityColor(cluster.opportunity)}`}>
                        Chance: {cluster.opportunity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-3">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border border-border rounded-lg p-2 text-center">
                        <div className="text-[10px] text-muted-foreground">Ø Konkurrenten</div>
                        <div className="text-sm font-bold text-foreground">{cluster.avgCompetitors}</div>
                      </div>
                      <div className="border border-border rounded-lg p-2 text-center">
                        <div className="text-[10px] text-muted-foreground">Ø Rating</div>
                        <div className="text-sm font-bold text-foreground">{cluster.avgRating}</div>
                      </div>
                      <div className="border border-border rounded-lg p-2 text-center">
                        <div className="text-[10px] text-muted-foreground">Ø Bewertungen</div>
                        <div className="text-sm font-bold text-foreground">{cluster.avgReviews}</div>
                      </div>
                    </div>

                    {/* Gap */}
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-2.5 text-xs">
                      <span className="font-semibold text-amber-700">Marktlücke: </span>
                      <span className="text-amber-700">{cluster.gap}</span>
                    </div>

                    {/* Strategy */}
                    <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-2.5">
                      <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <div><strong>Strategie: </strong>{cluster.strategy}</div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* Opportunities tab */}
      {activeTab === 'opportunities' && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Diese Nischen sind in {config.city} unterversorgt — wenige oder keine starken Wettbewerber im Local Pack:
          </p>
          {config.underservedNiches.map((niche, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500/10 text-green-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground">{niche.niche}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{niche.reason}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {niche.potentialKeywords.map((kw, ki) => (
                        <Badge key={ki} variant="outline" className="text-[10px] font-mono">{kw}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
