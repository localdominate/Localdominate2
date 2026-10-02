import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CREATOR_ANCHORS, WHY } from "@/data/v4Creators";

const externalLink =
  "underline underline-offset-4 hover:text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";

/**
 * 02 WHAT BRANDS CHECK. The page is positioned against the checklist of the person who decides on
 * a collaboration, not against other tools. The one quote and the three guides are real and
 * linked. Nothing else is attributed to anyone.
 */
export function BrandAnswers() {
  return (
    <StateField field="light" as="section" id={CREATOR_ANCHORS.why} aria-labelledby="creators-why" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {WHY.label}
            </SystemLabel>
            <h2
              id="creators-why"
              className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
            >
              {WHY.title}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
              {WHY.text}
            </p>
            <figure className="mt-10 max-w-md border-l-2 border-v4-ink pl-5">
              <blockquote
                cite={WHY.quote.url}
                className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ink"
              >
                {WHY.quote.text}
              </blockquote>
              <figcaption className="mt-3 font-v4-sans text-sm text-v4-ink/70">
                <a href={WHY.quote.url} target="_blank" rel="noopener noreferrer" className={externalLink}>
                  {WHY.quote.source}
                </a>
              </figcaption>
            </figure>
          </div>

          <div>
            <ol className="flex flex-col border-b border-v4-ink/15">
              {WHY.answers.map((answer, i) => (
                <li
                  key={answer.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-t border-v4-ink/15 py-5 sm:grid-cols-[2.5rem_13rem_1fr] sm:items-baseline sm:gap-x-5"
                >
                  <SystemLabel className="pt-1.5 text-v4-ink/60 sm:pt-0">{String(i + 1).padStart(2, "0")}</SystemLabel>
                  <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">
                    {answer.title}
                  </h3>
                  <p className="col-start-2 mt-1 font-v4-sans text-base leading-relaxed text-v4-ink/70 sm:col-start-3 sm:mt-0">
                    {answer.body}
                  </p>
                </li>
              ))}
            </ol>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY.contrasts.map((contrast) => (
                <li
                  key={contrast}
                  className="flex gap-4 rounded-2xl border border-v4-ink/10 bg-v4-white p-6 font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ink"
                >
                  <span aria-hidden="true" className="mt-[0.55em] h-px w-5 shrink-0 bg-v4-ink/40" />
                  {contrast}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
              Sources:{" "}
              {WHY.sources.map((source, i) => (
                <span key={source.name}>
                  {i > 0 && ", "}
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className={externalLink}>
                    {source.name}
                  </a>{" "}
                  ({source.date})
                </span>
              ))}
              . Links open in a new tab.
            </p>
          </div>
        </div>
      </div>
    </StateField>
  );
}
