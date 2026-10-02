import { useState } from "react";
import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { CheckButton } from "@/components/v4/CheckButton";
import {
  INSIGHT_TOPICS,
  insightTopic,
  type InsightArticle,
  type InsightTopic,
  type InsightTopicId,
} from "@/data/v4Insights";
import { ArticleRow } from "./ArticleRow";
import { RESULTS_ID, SEARCH_ID } from "./InsightsHero";

const ringOnLight = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-ink";

type Mode = "all" | "topic" | "search";

type Props = {
  mode: Mode;
  topic: InsightTopicId | null;
  query: string;
  articles: readonly InsightArticle[];
  /** True once the visitor used the search or a topic. Rows enter softly only then. */
  touched: boolean;
  onClear: () => void;
};

const headingOf = (mode: Mode, topic: InsightTopicId | null): string => {
  if (mode === "search") return "Search results";
  if (mode === "topic" && topic) return insightTopic(topic).label;
  return "All guides";
};

type ListProps = { articles: readonly InsightArticle[]; animate: boolean; showTopic?: boolean };

/** Two columns on wide screens, one on phones. Reading order runs across the rows. */
function ArticleColumns({ articles, animate }: ListProps) {
  return (
    <ul className="grid md:grid-cols-2 md:gap-x-12">
      {articles.map((article, index) => (
        <ArticleRow key={article.slug} article={article} index={index} animate={animate} />
      ))}
    </ul>
  );
}

/** One topic. The industries topic is split into its groups. */
function TopicList({ topic, articles, animate, groupHeading: GroupHeading }: ListProps & { topic: InsightTopic; groupHeading: "h3" | "h4" }) {
  if (!topic.groups) return <ArticleColumns articles={articles} animate={animate} />;
  return (
    <div className="flex flex-col gap-10">
      {topic.groups.map((group) => {
        const inGroup = articles.filter((a) => a.group === group.id);
        if (inGroup.length === 0) return null;
        return (
          <div key={group.id}>
            <GroupHeading className="mb-2 font-v4-sans text-[length:var(--v4-text-body)] font-semibold text-v4-ink">
              {group.label} <span className="font-v4-mono text-xs font-normal tabular-nums text-v4-ink/65">{inGroup.length}</span>
            </GroupHeading>
            <ArticleColumns articles={inGroup} animate={animate} />
          </div>
        );
      })}
    </div>
  );
}

function AllTopics({ articles, animate }: ListProps) {
  return (
    <div className="flex flex-col gap-16">
      {INSIGHT_TOPICS.map((topic) => {
        const inTopic = articles.filter((a) => a.topic === topic.id);
        if (inTopic.length === 0) return null;
        return (
          <section key={topic.id} aria-labelledby={`insights-topic-${topic.id}`}>
            <div className="border-t border-v4-ink/30 pt-5">
              <h3
                id={`insights-topic-${topic.id}`}
                className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-[1.1] text-v4-ink"
              >
                {topic.label} <span className="font-v4-mono text-sm tabular-nums text-v4-ink/65">{inTopic.length}</span>
              </h3>
              <p className="mt-2 max-w-xl font-v4-sans text-[length:var(--v4-text-ui)] text-v4-ink/70">{topic.blurb}</p>
            </div>
            <div className="mt-4">
              <TopicList topic={topic} articles={inTopic} animate={animate} groupHeading="h4" />
            </div>
          </section>
        );
      })}
    </div>
  );
}

function NoMatch({ query, onClear }: { query: string; onClear: () => void }) {
  return (
    <div className="max-w-xl border-t border-v4-ink/20 pt-6">
      <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ink [text-wrap:balance]">
        {`No guide matches “${query.trim()}”.`}
      </p>
      <p className="mt-3 font-v4-sans text-[length:var(--v4-text-ui)] leading-relaxed text-v4-ink/75">
        Try one word instead of a phrase, or pick a topic. If your question is not covered, we can look at your own profile or website.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <CheckButton />
        <button
          type="button"
          onClick={onClear}
          className={cn("min-h-11 font-v4-sans text-sm text-v4-ink underline underline-offset-4", ringOnLight)}
        >
          Show all guides
        </button>
      </div>
    </div>
  );
}

/** The list under the hero: all topics, one topic, or ranked search results. */
export function InsightsResults({ mode, topic, query, articles, touched, onClear }: Props) {
  return (
    <StateField
      field="light"
      as="section"
      id={RESULTS_ID}
      aria-labelledby="insights-results-title"
      className="scroll-mt-16 border-t border-v4-ink/10"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <h2
              id="insights-results-title"
              className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.05] text-v4-ink [text-wrap:balance]"
            >
              {headingOf(mode, topic)}
            </h2>
            {mode === "topic" && topic && (
              <p className="mt-3 max-w-xl font-v4-sans text-[length:var(--v4-text-ui)] text-v4-ink/70">{insightTopic(topic).blurb}</p>
            )}
          </div>
          {mode !== "all" && (
            <button
              type="button"
              onClick={onClear}
              className={cn("min-h-11 font-v4-sans text-sm text-v4-ink underline underline-offset-4", ringOnLight)}
            >
              Show all guides
            </button>
          )}
        </div>

        {/* The list is rebuilt when the topic changes, so rows enter then. Typing alone does not replay it. */}
        <ResultBody key={`${mode}-${topic ?? "all"}`} mode={mode} topic={topic} query={query} articles={articles} touched={touched} onClear={onClear} />

        {mode === "all" && (
          <a
            href={`#${SEARCH_ID}`}
            className={cn("mt-14 inline-flex min-h-11 items-center font-v4-sans text-sm text-v4-ink underline underline-offset-4", ringOnLight)}
          >
            Back to search and topics
          </a>
        )}
      </div>
    </StateField>
  );
}

function ResultBody({ mode, topic, query, articles, touched, onClear }: Props) {
  // Captured once per mount: rows animate only when this body was created by a visitor action.
  const [animate] = useState(touched);

  if (mode === "search") {
    if (articles.length === 0) return <NoMatch query={query} onClear={onClear} />;
    return (
      <ul className="max-w-4xl">
        {articles.map((article, index) => (
          <ArticleRow key={article.slug} article={article} index={index} animate={animate} showTopic />
        ))}
      </ul>
    );
  }
  if (mode === "topic" && topic) {
    return <TopicList topic={insightTopic(topic)} articles={articles} animate={animate} groupHeading="h3" />;
  }
  return <AllTopics articles={articles} animate={animate} />;
}
