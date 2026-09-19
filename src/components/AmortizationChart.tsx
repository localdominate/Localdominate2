import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

interface AmortizationChartProps {
  dailyProfit: number;
  investment: number;
  breakevenDays: number;
}

interface ChartDataPoint {
  day: number;
  profit: number;
  investment: number;
}

const AmortizationChart = ({
  dailyProfit,
  investment,
  breakevenDays,
}: AmortizationChartProps) => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const translations = {
    de: {
      title: "Deine Investition über Zeit",
      day: "Tag",
      profit: "Kumulativer Gewinn",
      investment: "Investition",
      breakeven: "Breakeven",
      after90: "Nach 90 Tagen",
      profitLabel: "Gewinn",
    },
    en: {
      title: "Your Investment Over Time",
      day: "Day",
      profit: "Cumulative Profit",
      investment: "Investment",
      breakeven: "Breakeven",
      after90: "After 90 days",
      profitLabel: "Profit",
    },
    ar: {
      title: "استثمارك عبر الزمن",
      day: "يوم",
      profit: "الربح التراكمي",
      investment: "الاستثمار",
      breakeven: "نقطة التعادل",
      after90: "بعد 90 يوم",
      profitLabel: "الربح",
    },
  };

  const t = translations[language] || translations.de;

  // Generate chart data points
  const generateChartData = (): ChartDataPoint[] => {
    const data: ChartDataPoint[] = [];
    for (let day = 0; day <= 90; day += 3) {
      const cumulativeProfit = day * dailyProfit;
      data.push({
        day,
        profit: Math.round(cumulativeProfit),
        investment: investment,
      });
    }
    return data;
  };

  const chartData = generateChartData();
  const maxProfit = 90 * dailyProfit;
  const finalProfit = Math.round(maxProfit);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate the chart reveal
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimationProgress(easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const profit = payload[0].value;
      const isProfitable = profit >= investment;

      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-foreground">
            {t.day} {label}
          </p>
          <p
            className={`text-sm font-bold ${isProfitable ? "text-green-600" : "text-destructive"}`}
          >
            {t.profitLabel}: {profit.toLocaleString("de-DE")}€
          </p>
          {isProfitable && (
            <p className="text-xs text-green-600 mt-1">✓ Amortisiert</p>
          )}
        </div>
      );
    }
    return null;
  };

  // Calculate the gradient stop position based on breakeven
  const breakevenPercent = Math.min((breakevenDays / 90) * 100, 100);

  return (
    <div ref={chartRef} className="w-full">
      {/* Projection badge */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground">{t.title}</span>
        <div className="text-xs font-medium text-green-600 bg-green-500/10 px-2 py-1 rounded-full">
          {t.after90}: +{finalProfit.toLocaleString("de-DE")}€
        </div>
      </div>

      <div
        className="h-[180px] md:h-[200px] w-full"
        style={{
          clipPath: isVisible
            ? `inset(0 ${100 - animationProgress * 100}% 0 0)`
            : "inset(0 100% 0 0)",
          transition: "clip-path 0.1s linear",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  stopColor="hsl(0, 84%, 60%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset={`${breakevenPercent}%`}
                  stopColor="hsl(0, 84%, 60%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset={`${breakevenPercent}%`}
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.8}
                />
              </linearGradient>
              <linearGradient
                id="profitFillGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(0, 84%, 60%)"
                  stopOpacity={0.2}
                />
                <stop
                  offset={`${breakevenPercent}%`}
                  stopColor="hsl(0, 84%, 60%)"
                  stopOpacity={0.2}
                />
                <stop
                  offset={`${breakevenPercent}%`}
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickLine={false}
              tickFormatter={(value) => (value % 30 === 0 ? `${value}` : "")}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickLine={false}
              tickFormatter={(value) => `${value}€`}
              domain={[0, Math.max(investment * 1.5, maxProfit * 1.1)]}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={investment}
              stroke="hsl(var(--primary))"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{
                value: `${investment}€`,
                position: "right",
                fill: "hsl(var(--primary))",
                fontSize: 10,
              }}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="url(#profitGradient)"
              strokeWidth={3}
              fill="url(#profitFillGradient)"
              isAnimationActive={false}
            />
            {breakevenDays <= 90 && (
              <ReferenceDot
                x={breakevenDays}
                y={investment}
                r={6}
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth={2}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Breakeven marker legend */}
      <div className="flex items-center justify-center gap-4 mt-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-destructive rounded" />
          <span>{isEn ? "Before break-even" : "Vor Breakeven"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow" />
          <span>
            {t.breakeven}: {t.day} {breakevenDays}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-green-600 rounded" />
          <span>Profit</span>
        </div>
      </div>
    </div>
  );
};

export default AmortizationChart;
