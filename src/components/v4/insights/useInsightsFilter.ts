import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { INSIGHT_ARTICLES, INSIGHT_TOPICS, insightTopic, type InsightTopicId } from "@/data/v4Insights";
import { inTopic, searchInsights } from "./insightsSearch";
import type { SearchIndex } from "./insightsSearchIndex";

export type InsightsFilter = { topic: InsightTopicId | null; query: string };

const IDLE: InsightsFilter = { topic: null, query: "" };
const MAX_QUERY_LENGTH = 80;
const URL_WRITE_DELAY_MS = 300;

const isTopicId = (value: string | null): value is InsightTopicId => INSIGHT_TOPICS.some((t) => t.id === value);

const filterFromSearch = (search: string): InsightsFilter => {
  const params = new URLSearchParams(search);
  const topic = params.get("topic");
  return { topic: isTopicId(topic) ? topic : null, query: (params.get("q") ?? "").slice(0, MAX_QUERY_LENGTH) };
};

const searchFromFilter = ({ topic, query }: InsightsFilter): string => {
  const params = new URLSearchParams();
  if (topic) params.set("topic", topic);
  if (query.trim()) params.set("q", query.trim());
  const text = params.toString();
  return text ? `?${text}` : "";
};

const sameFilter = (a: InsightsFilter, b: InsightsFilter): boolean => a.topic === b.topic && a.query === b.query;

const plural = (count: number): string => `${count} ${count === 1 ? "guide" : "guides"}`;

/** The sentence read out to screen readers and shown under the search field. */
const describeResult = ({ topic, query }: InsightsFilter, count: number): string => {
  const quoted = query.trim() ? `“${query.trim()}”` : "";
  const inTopicText = topic ? ` in ${insightTopic(topic).label}` : "";
  if (quoted && count === 0) return `No guide matches ${quoted}${inTopicText}.`;
  if (quoted) return `${plural(count)}${inTopicText} match${count === 1 ? "es" : ""} ${quoted}.`;
  return `${plural(count)}${inTopicText}.`;
};

/**
 * Search and topic filter of the hub.
 *
 * Render rule (docs/V5_BASE.md): the first render is always the idle state, the same as the
 * prerendered HTML. A link such as /insights?topic=ai is applied after mount, in an effect.
 */
export function useInsightsFilter() {
  const [filter, setFilter] = useState<InsightsFilter>(IDLE);
  const [touched, setTouched] = useState(false);
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null);
  const { search } = useLocation();
  const appliedSearch = useRef<string | null>(null);

  useEffect(() => {
    if (appliedSearch.current === search) return;
    appliedSearch.current = search;
    const fromLink = filterFromSearch(search);
    setFilter((current) => (sameFilter(current, fromLink) ? current : fromLink));
  }, [search]);

  useEffect(() => {
    if (!touched) return;
    const next = searchFromFilter(filter);
    const timer = window.setTimeout(() => {
      try {
        appliedSearch.current = next;
        window.history.replaceState(window.history.state, "", `${window.location.pathname}${next}${window.location.hash}`);
      } catch {
        /* Some browsers limit how often the address can be rewritten. The filter still works. */
      }
    }, URL_WRITE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [filter, touched]);

  const setQuery = useCallback((query: string) => {
    setTouched(true);
    setFilter((current) => ({ ...current, query: query.slice(0, MAX_QUERY_LENGTH) }));
  }, []);

  /** Picking the topic that is already active switches the filter off. */
  const toggleTopic = useCallback((topic: InsightTopicId) => {
    setTouched(true);
    setFilter((current) => ({ ...current, topic: current.topic === topic ? null : topic }));
  }, []);

  const clear = useCallback(() => {
    setTouched(true);
    setFilter(IDLE);
  }, []);

  const hasQuery = filter.query.trim().length > 0;

  // German titles and keywords are fetched when the first word is typed, not with the page.
  useEffect(() => {
    if (!hasQuery || searchIndex) return;
    let current = true;
    import("./insightsSearchIndex").then((module) => {
      if (current) setSearchIndex(module.SEARCH_INDEX);
    });
    return () => {
      current = false;
    };
  }, [hasQuery, searchIndex]);

  const mode = hasQuery ? "search" : filter.topic ? "topic" : "all";

  const articles = useMemo(
    () => (hasQuery ? searchInsights(INSIGHT_ARTICLES, filter, searchIndex) : inTopic(INSIGHT_ARTICLES, filter.topic)),
    [filter, hasQuery, searchIndex]
  );

  const topicCounts = useMemo(() => {
    const counts = new Map<InsightTopicId, number>();
    for (const a of INSIGHT_ARTICLES) counts.set(a.topic, (counts.get(a.topic) ?? 0) + 1);
    return counts;
  }, []);

  return {
    filter,
    mode,
    touched,
    articles,
    topicCounts,
    summary: describeResult(filter, articles.length),
    setQuery,
    toggleTopic,
    clear,
  } as const;
}
