import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

// ===== 1. Ranking Factor Bar Chart =====
export interface RankingFactorData {
  name: string;
  value: number;
  color?: string;
}

interface RankingFactorChartProps {
  data: RankingFactorData[];
  title: string;
  source?: string;
}

const COLORS = [
  "hsl(var(--primary))",
  "hsl(142 76% 36%)",
  "hsl(221 83% 53%)",
  "hsl(262 83% 58%)",
  "hsl(24 95% 53%)",
  "hsl(47 96% 53%)",
  "hsl(340 75% 55%)",
  "hsl(173 58% 39%)",
];

export const RankingFactorChart = ({ data, title, source }: RankingFactorChartProps) => {
  const isEn = useLanguage().language === "en";
  return (
  <Card className="my-8 not-prose" data-ai-summary="true">
    <CardContent className="pt-6">
      <h4 className="font-bold text-foreground text-sm mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={data.length * 48 + 20}>
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
          <XAxis type="number" domain={[0, 'auto']} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12, fill: "hsl(var(--foreground))" }} />
          <Tooltip
            formatter={(value: number) => [`${value} %`, "Gewicht"]}
            contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {source && <p className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/40">{isEn ? "Source:" : "Quelle:"} {source}</p>}
    </CardContent>
  </Card>
  );
};

// ===== 2. Comparison Radar Chart =====
export interface RadarDataPoint {
  subject: string;
  A: number;
  B: number;
}

interface ComparisonRadarProps {
  data: RadarDataPoint[];
  labelA: string;
  labelB: string;
  title: string;
}

export const ComparisonRadar = ({ data, labelA, labelB, title }: ComparisonRadarProps) => (
  <Card className="my-8 not-prose" data-ai-summary="true">
    <CardContent className="pt-6">
      <h4 className="font-bold text-foreground text-sm mb-4">{title}</h4>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
          <Radar name={labelA} dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
          <Radar name={labelB} dataKey="B" stroke="hsl(142 76% 36%)" fill="hsl(142 76% 36%)" fillOpacity={0.15} strokeWidth={2} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }} />
        </RadarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

// ===== 3. Process Flow (CSS-based) =====
export interface FlowStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  timeframe?: string;
}

interface ProcessFlowProps {
  steps: FlowStep[];
  title: string;
}

export const ProcessFlow = ({ steps, title }: ProcessFlowProps) => (
  <Card className="my-8 not-prose overflow-hidden" data-ai-summary="true">
    <CardContent className="pt-6">
      <h4 className="font-bold text-foreground text-sm mb-6">{title}</h4>
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 hidden md:block" />
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 relative">
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                {step.icon || step.number}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h5 className="font-semibold text-foreground text-sm">{step.title}</h5>
                  {step.timeframe && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{step.timeframe}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

// ===== 4. Gradient Bar (CSS-based, inline) =====
interface GradientBarProps {
  items: { label: string; value: number; maxValue?: number }[];
  title: string;
  unit?: string;
}

export const GradientBarChart = ({ items, title, unit = "%" }: GradientBarProps) => (
  <Card className="my-8 not-prose" data-ai-summary="true">
    <CardContent className="pt-6">
      <h4 className="font-bold text-foreground text-sm mb-4">{title}</h4>
      <div className="space-y-3">
        {items.map((item, i) => {
          const max = item.maxValue || Math.max(...items.map(it => it.value));
          const pct = (item.value / max) * 100;
          return (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-sm font-semibold text-primary">{item.value}{unit}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, hsl(var(--primary)), ${COLORS[i % COLORS.length]})`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  </Card>
);

// ===== 5. Donut/Pie Summary =====
interface DonutItem {
  name: string;
  value: number;
}

interface DonutChartProps {
  data: DonutItem[];
  title: string;
  centerLabel?: string;
}

export const DonutChart = ({ data, title, centerLabel }: DonutChartProps) => (
  <Card className="my-8 not-prose" data-ai-summary="true">
    <CardContent className="pt-6">
      <h4 className="font-bold text-foreground text-sm mb-4">{title}</h4>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={55} outerRadius={85} paddingAngle={3} strokeWidth={0}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value} %`]} contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-2">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
              <span className="text-sm text-foreground">{item.name}</span>
              <span className="text-sm font-semibold text-muted-foreground ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
      {centerLabel && <p className="text-xs text-muted-foreground text-center mt-2">{centerLabel}</p>}
    </CardContent>
  </Card>
);
