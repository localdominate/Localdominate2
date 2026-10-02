import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { COMPARE, CREATOR_ANCHORS } from "@/data/v4Creators";

const noteLink =
  "font-medium text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";
const rowLabel = "font-v4-mono text-[0.6875rem] uppercase leading-snug tracking-[0.14em]";

/**
 * 05 COMPARISON. One markup for both layouts: every option is an article with its five answers.
 * On a phone the four articles are stacked cards and each answer carries its question. From
 * 1024 px they are the columns of one grid that share their rows (subgrid), the questions stand
 * once on the left and the labels inside the cards are kept for screen readers only. No sideways
 * scrolling at any width. The other tools are described by what they are for, not judged.
 */
export function Comparison() {
  const { note } = COMPARE;
  return (
    <StateField
      field="light"
      as="section"
      id={CREATOR_ANCHORS.compare}
      aria-labelledby="creators-compare"
      className="scroll-mt-16 border-t border-v4-ink/10"
    >
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          {COMPARE.label}
        </SystemLabel>
        <h2
          id="creators-compare"
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
        >
          {COMPARE.title}
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-[0.8fr_repeat(4,1fr)] lg:gap-0">
          <div aria-hidden="true" className="hidden lg:row-span-6 lg:grid lg:grid-rows-subgrid">
            <span />
            {COMPARE.rows.map((row) => (
              <p key={row} className={cn(rowLabel, "border-t border-v4-ink/15 py-5 pr-6 text-v4-ink/60")}>
                {row}
              </p>
            ))}
          </div>

          {COMPARE.columns.map((column) => (
            <article
              key={column.id}
              aria-labelledby={`compare-${column.id}`}
              className={cn(
                "rounded-2xl border p-6 lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:p-0",
                column.ours
                  ? "border-v4-ink bg-v4-ink text-v4-ivory"
                  : "border-v4-ink/10 bg-v4-white text-v4-ink lg:rounded-none lg:border-0 lg:bg-transparent"
              )}
            >
              <h3
                id={`compare-${column.id}`}
                className="flex items-start gap-2.5 pb-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight lg:px-5 lg:pb-5 lg:pt-6"
              >
                {column.ours && <span aria-hidden="true" className="mt-[0.5em] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />}
                {column.name}
              </h3>
              <dl className="lg:row-span-5 lg:grid lg:grid-rows-subgrid">
                {column.values.map((value, i) => (
                  <div
                    key={COMPARE.rows[i]}
                    className={cn("border-t py-3.5 lg:px-5 lg:py-5", column.ours ? "border-v4-ivory/20" : "border-v4-ink/15")}
                  >
                    <dt className={cn(rowLabel, "lg:sr-only", column.ours ? "text-v4-ivory/60" : "text-v4-ink/60")}>
                      {COMPARE.rows[i]}
                    </dt>
                    <dd
                      className={cn(
                        "mt-1.5 font-v4-sans text-base leading-snug lg:mt-0 lg:text-[0.9375rem]",
                        column.ours ? "font-medium text-v4-ivory" : "text-v4-ink/80"
                      )}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl font-v4-sans text-sm leading-relaxed text-v4-ink/70">
          {note.intro}{" "}
          <a href={note.beacons.url} target="_blank" rel="noopener noreferrer" className={noteLink}>
            {note.beacons.name}
          </a>
          {note.beacons.rest}{" "}
          <a href={note.squarespace.url} target="_blank" rel="noopener noreferrer" className={noteLink}>
            {note.squarespace.name}
          </a>
          {note.squarespace.rest}{" "}
          <a href={note.canva.url} target="_blank" rel="noopener noreferrer" className={noteLink}>
            {note.canva.name}
          </a>
          {note.canva.rest}
        </p>
      </div>
    </StateField>
  );
}
