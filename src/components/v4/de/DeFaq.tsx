import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { ANCHORS, FAQ } from "@/data/v4De";

/**
 * Fünf Fragen als offene Liste: die Antworten sind kurz, niemand muss dafür klappen, und ohne
 * JavaScript steht alles da. Derselbe Wortlaut geht als FAQPage in das JSON-LD der Seite.
 */
export function DeFaq() {
  return (
    <StateField
      field="light"
      as="section"
      id={ANCHORS.faq}
      aria-labelledby="de-faq-title"
      className="scroll-mt-16 border-t border-v4-ink/10"
    >
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {FAQ.label}
          </SystemLabel>
          <h2
            id="de-faq-title"
            className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink"
          >
            {FAQ.title}
          </h2>
        </div>
        <ol className="flex flex-col">
          {FAQ.items.map((item, i) => (
            <li key={item.question} className="grid gap-x-5 gap-y-2 border-t border-v4-ink/15 py-6 last:border-b sm:grid-cols-[2rem_1fr]">
              <SystemLabel className="pt-1.5 text-v4-ink/60">{String(i + 1).padStart(2, "0")}</SystemLabel>
              <div>
                <h3 className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{item.question}</h3>
                <p className="mt-2 max-w-2xl text-pretty font-v4-sans text-base leading-relaxed text-v4-ink/75">{item.answer}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </StateField>
  );
}
