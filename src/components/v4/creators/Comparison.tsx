import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { COMPARE, CREATOR_ANCHORS } from "@/data/v4Creators";

const noteLink =
  "font-medium text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";
const rowLabel = "font-v4-mono text-xs uppercase leading-snug tracking-[0.12em] text-v4-ink/70";

/**
 * Grid lines of the phone card: the names stand in line 1, each question takes one line and its
 * three answers the next. Written out, because Tailwind only sees complete class names.
 */
const CARD_COLUMN = ["col-start-1", "col-start-2", "col-start-3"] as const;
const QUESTION_LINE = ["row-start-2", "row-start-4", "row-start-6", "row-start-[8]", "row-start-[10]"] as const;
const ANSWER_LINE = ["row-start-3", "row-start-5", "row-start-7", "row-start-[9]", "row-start-[11]"] as const;

const others = COMPARE.columns.filter((column) => !column.ours);
const ours = COMPARE.columns.filter((column) => column.ours);

/**
 * COMPARISON. One markup for both layouts: every option is an article with its five answers.
 *
 * From 1024 px the four articles are the columns of one grid that share their rows (subgrid), with
 * the questions once on the left and our column in ink. Below that our option comes first as its
 * own card, and the three other options share ONE white card, side by side: their articles
 * dissolve (`contents`) into a three-column grid in which each question stands once, across the
 * three answers. The questions inside the articles are kept for screen readers at every width.
 * No sideways scrolling. The other tools are described by what they are for, not judged.
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

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[0.8fr_repeat(4,1fr)] lg:gap-0">
          {/* the questions, once on the left (desktop) */}
          <div aria-hidden="true" className="hidden lg:row-span-6 lg:grid lg:grid-rows-subgrid">
            <span />
            {COMPARE.rows.map((row) => (
              <p key={row} className={cn(rowLabel, "border-t border-v4-ink/15 py-5 pr-6")}>
                {row}
              </p>
            ))}
          </div>

          {/* the three other options: one card on phones, three columns on desktop */}
          <div className="grid grid-cols-3 gap-x-3 rounded-2xl border border-v4-ink/10 bg-v4-white p-4 sm:gap-x-6 sm:p-6 lg:contents">
            {COMPARE.rows.map((row, i) => (
              <p
                key={row}
                aria-hidden="true"
                className={cn(rowLabel, "col-span-3 mt-3 border-t border-v4-ink/15 pt-3 lg:hidden", QUESTION_LINE[i])}
              >
                {row}
              </p>
            ))}
            {others.map((column, c) => (
              <article
                key={column.id}
                aria-labelledby={`compare-${column.id}`}
                className="contents text-v4-ink lg:row-span-6 lg:grid lg:grid-rows-subgrid"
              >
                <h3
                  id={`compare-${column.id}`}
                  className={cn(
                    "row-start-1 font-v4-sans text-sm font-semibold leading-snug tracking-tight sm:text-base lg:col-start-auto lg:px-5 lg:pb-5 lg:pt-6 lg:text-lg",
                    CARD_COLUMN[c]
                  )}
                >
                  {column.name}
                </h3>
                <dl className="contents lg:row-span-5 lg:grid lg:grid-rows-subgrid">
                  {column.values.map((value, i) => (
                    <div
                      key={COMPARE.rows[i]}
                      className={cn(
                        "pt-1.5 lg:col-start-auto lg:row-start-auto lg:border-t lg:border-v4-ink/15 lg:px-5 lg:py-5",
                        CARD_COLUMN[c],
                        ANSWER_LINE[i]
                      )}
                    >
                      <dt className="sr-only">{COMPARE.rows[i]}</dt>
                      <dd className="font-v4-sans text-sm leading-snug text-v4-ink/80 lg:text-[0.9375rem]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          {/* our option: first on phones, the ink column on desktop */}
          {ours.map((column) => (
            <article
              key={column.id}
              aria-labelledby={`compare-${column.id}`}
              className="order-first rounded-2xl border border-v4-ink bg-v4-ink p-6 text-v4-ivory lg:order-none lg:row-span-6 lg:grid lg:grid-rows-subgrid lg:p-0"
            >
              <h3
                id={`compare-${column.id}`}
                className="flex items-start gap-2.5 pb-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight lg:px-5 lg:pb-5 lg:pt-6"
              >
                <span aria-hidden="true" className="mt-[0.5em] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />
                {column.name}
              </h3>
              <dl className="lg:row-span-5 lg:grid lg:grid-rows-subgrid">
                {column.values.map((value, i) => (
                  <div key={COMPARE.rows[i]} className="border-t border-v4-ivory/20 py-3 lg:px-5 lg:py-5">
                    <dt className="font-v4-mono text-xs uppercase leading-snug tracking-[0.12em] text-v4-ivory/70 lg:sr-only">
                      {COMPARE.rows[i]}
                    </dt>
                    <dd className="mt-1.5 font-v4-sans text-base font-medium leading-snug text-v4-ivory lg:mt-0 lg:text-[0.9375rem]">
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
