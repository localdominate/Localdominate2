import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronDown, ChevronRight, MapPin, Target, Search,
  Lightbulb, Clock, CheckCircle2, Copy, Check, TrendingUp,
  Globe, Building2, Users, Navigation, Layers
} from 'lucide-react';

interface DistrictKeyword {
  district: string;
  keywords: string[];
  competition: 'Niedrig' | 'Mittel' | 'Hoch' | 'Sehr hoch';
  tip: string;
}

interface SeasonalKeyword {
  event: string;
  keywords: string[];
  timing: string;
}

interface GeoKeywordConfig {
  city: string;
  country: 'DE' | 'AT' | 'CH';
  districts: DistrictKeyword[];
  topIndustryKeywords: { industry: string; icon: string; keywords: string[] }[];
  seasonalKeywords: SeasonalKeyword[];
  localDirectories: string[];
  dialektTip?: string;
}

interface Props {
  config: GeoKeywordConfig;
  compact?: boolean;
}

export default function GeoTargetedKeywords({ config, compact = false }: Props) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['districts']));
  const [activeTab, setActiveTab] = useState<'districts' | 'industries' | 'seasonal'>('districts');
  const [copied, setCopied] = useState(false);

  const displayDistricts = compact ? config.districts.slice(0, 4) : config.districts;

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const competitionColor = (c: string) => {
    switch (c) {
      case 'Niedrig': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Mittel': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
      case 'Hoch': return 'bg-rose-500/10 text-rose-700 border-rose-500/20';
      case 'Sehr hoch': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const generateTemplate = () => {
    let text = `# Geo-Targeted Keywords: ${config.city}\n\n`;
    text += '## Stadtteil-Keywords\n\n';
    config.districts.forEach(d => {
      text += `### ${d.district} (Wettbewerb: ${d.competition})\n`;
      d.keywords.forEach(k => text += `  - ${k}\n`);
      text += `  💡 ${d.tip}\n\n`;
    });
    text += '## Branchen-Keywords\n\n';
    config.topIndustryKeywords.forEach(ind => {
      text += `${ind.icon} ${ind.industry}:\n`;
      ind.keywords.forEach(k => text += `  - ${k}\n`);
      text += '\n';
    });
    text += '## Saisonale Keywords\n\n';
    config.seasonalKeywords.forEach(s => {
      text += `${s.event} (${s.timing}):\n`;
      s.keywords.forEach(k => text += `  - ${k}\n`);
      text += '\n';
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTemplate());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 space-y-6 not-prose" data-ai-summary={`Geo-targeted keyword strategies for ${config.city} with district keywords, industry examples, and seasonal opportunities`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Navigation className="w-5 h-5 text-primary" />
              Geo-Targeted Keywords: {config.city}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              {config.districts.length} Stadtteile • {config.topIndustryKeywords.length} Branchen • {config.seasonalKeywords.length} saisonale Chancen
            </p>
          </div>
          <button onClick={handleCopy} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Kopiert!' : 'Keywords kopieren'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['districts', 'industries', 'seasonal'] as const)
          .filter(t => !compact || t === 'districts')
          .map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            >
              {tab === 'districts' ? `Stadtteil-Keywords` : tab === 'industries' ? 'Branchen' : 'Saisonale Keywords'}
            </button>
          ))}
      </div>

      {/* Districts tab */}
      {activeTab === 'districts' && (
        <div className="space-y-3">
          {displayDistricts.map(district => {
            const isExpanded = expandedSections.has(district.district);
            return (
              <Card key={district.district}>
                <CardHeader className="cursor-pointer select-none py-3 px-4" onClick={() => toggleSection(district.district)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{district.district}</span>
                    </div>
                    <Badge variant="outline" className={`text-[10px] ${competitionColor(district.competition)}`}>
                      Wettbewerb: {district.competition}
                    </Badge>
                  </div>
                </CardHeader>
                {isExpanded && (
                  <CardContent className="pt-0 px-4 pb-4 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {district.keywords.map((kw, i) => (
                        <Badge key={i} variant="outline" className="text-[10px] font-mono">{kw}</Badge>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-2.5">
                      <Lightbulb className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span>{district.tip}</span>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}

          {config.dialektTip && (
            <div className="flex items-start gap-2 text-xs bg-amber-500/5 text-amber-700 border border-amber-500/10 rounded-lg p-3">
              <Globe className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div><strong>Dialekt-Tipp: </strong>{config.dialektTip}</div>
            </div>
          )}
        </div>
      )}

      {/* Industries tab */}
      {activeTab === 'industries' && !compact && (
        <div className="grid gap-3 sm:grid-cols-2">
          {config.topIndustryKeywords.map((ind, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">{ind.icon} {ind.industry}</h4>
                <div className="space-y-1.5">
                  {ind.keywords.map((kw, ki) => (
                    <div key={ki} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <code className="font-mono text-foreground">{kw}</code>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Seasonal tab */}
      {activeTab === 'seasonal' && !compact && (
        <div className="space-y-3">
          {config.seasonalKeywords.map((s, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-foreground">{s.event}</h4>
                  <Badge variant="outline" className="text-[10px]">
                    <Clock className="w-2.5 h-2.5 mr-0.5" /> {s.timing}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.keywords.map((kw, ki) => (
                    <Badge key={ki} variant="outline" className="text-[10px] font-mono">{kw}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="flex items-start gap-2 text-xs bg-primary/5 text-primary border border-primary/10 rounded-lg p-3">
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div><strong>Timing:</strong> Beginne 2–3 Monate vor dem Event mit der Optimierung. Google braucht Zeit zum Indexieren, und die Konkurrenz startet früh.</div>
          </div>
        </div>
      )}

      {compact && (
        <p className="text-sm text-muted-foreground italic text-center">
          Kurzversion. Den vollständigen Keyword-Guide findest du im{' '}
          <a href="/blog/local-seo-keywords-finden" className="text-primary underline">lokalen Keyword-Recherche Guide</a>.
        </p>
      )}
    </div>
  );
}
