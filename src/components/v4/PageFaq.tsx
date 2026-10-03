import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import type { Faq } from "@/data/v4Faq";

const linkClass =
  "text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";

/**
 * The visible FAQ list of the V4 pages. Always open, so it reads the same with and without
 * JavaScript. The same array fills the FAQPage JSON-LD of the page (`faqEntries` in v4Faq.ts).
 */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="border-b border-v4-ink/15">
      {items.map((faq) => (
        <div key={faq.q} className="grid gap-2 border-t border-v4-ink/15 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
          <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{faq.q}</h3>
          <p className="max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/70">
            {faq.a}
            {faq.link && (
              <>
                {" "}
                <Link to={faq.link.to} className={linkClass}>
                  {faq.link.text}
                </Link>
                .
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

/** A "Questions" section for the pages that have no FAQ of their own yet. */
export function PageFaqSection({ id, title, items }: { id: string; title: string; items: readonly Faq[] }) {
  return (
    <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby={id}>
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          Questions
        </SystemLabel>
        <h2 id={id} className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
          {title}
        </h2>
        <div className="mt-12">
          <FaqList items={items} />
        </div>
      </div>
    </StateField>
  );
}
