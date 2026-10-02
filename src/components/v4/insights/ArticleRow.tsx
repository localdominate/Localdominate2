import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { formatUpdated, insightPath, insightTopic, type InsightArticle } from "@/data/v4Insights";

/** One guide in a list: the title is the link, the whole row is the click target. Styles: insights.css. */
export function ArticleRow({
  article,
  index,
  animate,
  showTopic,
}: {
  article: InsightArticle;
  index: number;
  animate: boolean;
  showTopic?: boolean;
}) {
  return (
    <li className={cn("v4-ins-row", animate && "v4-ins-enter")} style={animate ? ({ "--i": index } as React.CSSProperties) : undefined}>
      <Link to={insightPath(article.slug)} className="v4-ins-title">
        {article.title}
      </Link>
      <p className="v4-ins-meta">
        {showTopic && <span className="v4-ins-topic">{insightTopic(article.topic).label}</span>}
        {article.kind === "faq" && <span>FAQ</span>}
        {article.kind === "overview" && <span>Overview</span>}
        <span>{article.minutes} min</span>
        <span>Updated {formatUpdated(article.updated)}</span>
        {article.germanOnly && <span>German text</span>}
      </p>
      <span aria-hidden="true" className="v4-ins-arrow">
        →
      </span>
    </li>
  );
}
