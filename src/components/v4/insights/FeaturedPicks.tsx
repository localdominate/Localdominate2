import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { featuredPicks, insightPath, insightTopic } from "@/data/v4Insights";

const metaClass = "font-v4-sans text-sm tabular-nums text-v4-ink/65";

/** "Start here": guides picked by hand. Shown only while no search or topic is active. */
export function FeaturedPicks() {
  const picks = featuredPicks();
  if (picks.length === 0) return null;
  return (
    <StateField field="light" as="section" aria-labelledby="insights-featured">
      <div className="mx-auto max-w-[1200px] px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20">
        <h2 id="insights-featured" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.05] text-v4-ink">
          Start here
        </h2>
        <p className="mt-3 max-w-xl font-v4-sans text-[length:var(--v4-text-ui)] text-v4-ink/70">Picked by hand from the full list.</p>

        <ul className="mt-10 grid md:grid-cols-2 md:gap-x-12">
          {picks.map(({ article, why }) => (
            <li key={article.slug} className="relative border-t border-v4-ink/20 pb-10 pt-6">
              <SystemLabel as="p" className="text-v4-ink/65">
                {insightTopic(article.topic).label}
              </SystemLabel>
              <h3 className="mt-4 font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-[1.15] text-v4-ink [text-wrap:balance]">
                <Link
                  to={insightPath(article.slug)}
                  className="after:absolute after:inset-0 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-v4-ink"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 max-w-[34rem] font-v4-sans text-[length:var(--v4-text-ui)] leading-relaxed text-v4-ink/80 [text-wrap:pretty]">{why}</p>
              <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                <span className={metaClass}>{article.minutes} min</span>
                {article.germanOnly && <span className={metaClass}>German text</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </StateField>
  );
}
