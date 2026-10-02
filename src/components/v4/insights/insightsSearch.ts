import type { InsightArticle, InsightTopicId } from "@/data/v4Insights";
import type { SearchIndex } from "./insightsSearchIndex";

/** Same text, but comparable: lower case, no accents, umlauts and ß folded, "ae/oe/ue" folded like "ä/ö/ü". */
export const normalise = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u");

export const tokens = (query: string): string[] => normalise(query).split(/[^a-z0-9]+/).filter(Boolean);

type SearchText = { title: string; titleDe: string; terms: string };

const searchTextCache = new Map<string, SearchText>();

/** The German title and the keywords come from the index, which is loaded after the first keystroke. */
const searchText = (article: InsightArticle, index: SearchIndex | null): SearchText => {
  const entry = index?.[article.slug];
  const key = entry ? article.slug : `${article.slug}:title-only`;
  const cached = searchTextCache.get(key);
  if (cached) return cached;
  const text = {
    title: normalise(article.title),
    titleDe: entry ? normalise(entry.titleDe) : "",
    terms: entry ? normalise(entry.terms) : "",
  };
  searchTextCache.set(key, text);
  return text;
};

const startsAWord = (haystack: string, token: string): boolean => haystack.startsWith(token) || haystack.includes(` ${token}`);

/** 0 when a token is not found anywhere. A title hit beats a German title hit beats a keyword hit. */
const scoreToken = (text: SearchText, token: string): number => {
  let score = 0;
  if (text.title.includes(token)) score += startsAWord(text.title, token) ? 5 : 3;
  if (text.titleDe.includes(token)) score += startsAWord(text.titleDe, token) ? 4 : 2;
  if (text.terms.includes(token)) score += 1;
  return score;
};

const scoreArticle = (article: InsightArticle, queryTokens: readonly string[], index: SearchIndex | null): number => {
  const text = searchText(article, index);
  let total = 0;
  for (const token of queryTokens) {
    const score = scoreToken(text, token);
    if (score === 0) return 0;
    total += score;
  }
  return total;
};

/** Newest update first, then title. Plain comparison, so the order never depends on the browser language. */
const byUpdatedThenTitle = (a: InsightArticle, b: InsightArticle): number => {
  if (a.updated !== b.updated) return a.updated < b.updated ? 1 : -1;
  if (a.title === b.title) return 0;
  return a.title < b.title ? -1 : 1;
};

export type SearchOptions = { query: string; topic: InsightTopicId | null };

/** Articles of one topic, or all, in the registry order. */
export const inTopic = (articles: readonly InsightArticle[], topic: InsightTopicId | null): readonly InsightArticle[] =>
  topic ? articles.filter((a) => a.topic === topic) : articles;

/** Best match first. Every word of the query has to match. An empty query returns nothing. Without the index only English titles are searched. */
export const searchInsights = (
  articles: readonly InsightArticle[],
  { query, topic }: SearchOptions,
  index: SearchIndex | null
): readonly InsightArticle[] => {
  const queryTokens = tokens(query);
  if (queryTokens.length === 0) return [];
  return inTopic(articles, topic)
    .map((article) => ({ article, score: scoreArticle(article, queryTokens, index) }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score || byUpdatedThenTitle(a.article, b.article))
    .map((hit) => hit.article);
};
