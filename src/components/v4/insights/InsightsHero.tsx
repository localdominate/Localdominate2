import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { INSIGHT_ARTICLES, INSIGHT_TOPICS, LATEST_UPDATE, formatUpdated, type InsightTopicId } from "@/data/v4Insights";

/** Id of the search field. Fixed on purpose: the "back to search" link looks it up (docs/V5_BASE.md, hydration). */
export const SEARCH_ID = "insights-search";
export const RESULTS_ID = "insights-results";

const ringOnDark = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal";

type Props = {
  query: string;
  topic: InsightTopicId | null;
  topicCounts: ReadonlyMap<InsightTopicId, number>;
  summary: string;
  filterActive: boolean;
  onQuery: (query: string) => void;
  onTopic: (topic: InsightTopicId) => void;
  onShowResults: () => void;
};

/** First screen: what this is, a search field and the six topics. The search and the topics drive the list below. */
export function InsightsHero({ query, topic, topicCounts, summary, filterActive, onQuery, onTopic, onShowResults }: Props) {
  return (
    <StateField field="dark" as="section" aria-labelledby="insights-title">
      <div className="mx-auto grid max-w-[1200px] gap-x-16 gap-y-10 px-6 pb-14 pt-16 md:px-10 md:pb-16 md:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <SystemLabel as="p" className="text-v4-ivory/60">
            {`${INSIGHT_ARTICLES.length} guides. Latest update ${formatUpdated(LATEST_UPDATE)}.`}
          </SystemLabel>
          <h1
            id="insights-title"
            className="mt-6 font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory [text-wrap:balance]"
          >
            Local SEO guides for hotels, rentals and trades.
          </h1>
          <p className="mt-6 max-w-[34rem] font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/75 [text-wrap:pretty]">
            Guides on Google Maps, your business profile, reviews, AI search and measurement. Titles are in English and most
            texts are in German. The search understands both.
          </p>
        </div>

        <div>
        <form
          role="search"
          className="max-w-2xl"
          onSubmit={(event) => {
            event.preventDefault();
            onShowResults();
          }}
        >
          <label htmlFor={SEARCH_ID} className="block font-v4-sans text-sm text-v4-ivory/75">
            Search the guides
          </label>
          <div className="relative mt-2">
            <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-v4-ivory/60" />
            <input
              id={SEARCH_ID}
              type="search"
              value={query}
              onChange={(event) => onQuery(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="search"
              placeholder="Try reviews or Öffnungszeiten"
              className={cn(
                "v4-ins-search h-14 w-full rounded-full border border-v4-ivory/30 bg-v4-ivory/5 pl-12 pr-14 font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory",
                "placeholder:text-v4-ivory/55",
                ringOnDark
              )}
            />
            {query && (
              <button
                type="button"
                onClick={() => onQuery("")}
                aria-label="Clear search"
                className={cn(
                  "absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-v4-ivory/75",
                  "transition-transform duration-150 hover:text-v4-ivory active:scale-[0.96]",
                  ringOnDark
                )}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            )}
          </div>
        </form>

        <p role="status" className="mt-3 min-h-6 font-v4-sans text-sm tabular-nums text-v4-ivory/75">
          {summary}
          {filterActive && (
            <>
              {" "}
              <a
                href={`#${RESULTS_ID}`}
                onClick={(event) => {
                  event.preventDefault();
                  onShowResults();
                }}
                className={cn("text-v4-ivory underline underline-offset-4", ringOnDark)}
              >
                Show results
              </a>
            </>
          )}
        </p>

        <div role="group" aria-label="Filter by topic" className="mt-5 flex flex-wrap gap-2">
          {INSIGHT_TOPICS.map((t) => {
            const pressed = topic === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => onTopic(t.id)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 font-v4-sans text-sm font-medium",
                  "transition-transform duration-150 active:scale-[0.96]",
                  pressed
                    ? "border-v4-signal bg-v4-signal text-v4-ink"
                    : "border-v4-ivory/30 text-v4-ivory/90 hover:border-v4-ivory/70",
                  ringOnDark
                )}
              >
                {t.label}
                <span className={cn("font-v4-mono text-xs tabular-nums", pressed ? "text-v4-ink/75" : "text-v4-ivory/60")}>
                  {topicCounts.get(t.id) ?? 0}
                </span>
              </button>
            );
          })}
        </div>
        </div>
      </div>
    </StateField>
  );
}
