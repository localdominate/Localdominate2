import { TrendingUp, MapPin, Quote } from "lucide-react";
import type { MiniSuccessStoryData } from "@/data/miniSuccessStories";

interface MiniSuccessStoryProps {
  story: MiniSuccessStoryData;
}

const MiniSuccessStory = ({ story }: MiniSuccessStoryProps) => {
  return (
    <aside
      className="bg-gradient-to-br from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-900/20 border-l-4 border-emerald-500 rounded-r-xl p-5 my-8"
      role="note"
      data-ai-summary="true"
    >
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <h4 className="font-semibold text-sm uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
          Erfolgsgeschichte
        </h4>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">{story.metric}</span>
        <span className="text-sm text-muted-foreground">{story.metricLabel}</span>
      </div>

      <div className="flex items-start gap-2 mb-3">
        <Quote className="h-4 w-4 text-emerald-500/60 shrink-0 mt-0.5" />
        <p className="text-foreground/85 text-sm italic leading-relaxed">
          „{story.quote}"
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="font-medium text-foreground/70">— {story.author}, {story.role}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {story.business}, {story.location}
        </span>
        <span>Ergebnis {story.timeframe}</span>
      </div>
    </aside>
  );
};

export default MiniSuccessStory;
