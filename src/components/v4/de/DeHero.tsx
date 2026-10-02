import { useState } from "react";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { DeBookCallButton } from "@/components/v4/de/DeBookCallButton";
import { DeSegmentPicker } from "@/components/v4/de/DeSegmentPicker";
import { cn } from "@/lib/utils";
import { ANCHORS, HERO, OFFERS_DE, SEGMENTS } from "@/data/v4De";
import type { SegmentId } from "@/data/v4De";

/**
 * Erster Bildschirm. Oben die Weiche, darunter alles, was sie ändert: Überschrift, Unterzeile und
 * die Karte „Ihr Einstieg“. Der Startzustand steht sofort da. Erst nach einem Wechsel blenden
 * Überschrift und Karte kurz ein (nur opacity, unter prefers-reduced-motion gar nicht).
 */
export function DeHero({ segment, onSegmentChange }: { segment: SegmentId; onSegmentChange: (id: SegmentId) => void }) {
  const [swaps, setSwaps] = useState(0);
  const current = SEGMENTS.find((s) => s.id === segment) ?? SEGMENTS[0];
  const offer = OFFERS_DE[current.offer];
  const { calculation } = current.card;

  const choose = (id: SegmentId) => {
    if (id === segment) return;
    setSwaps((n) => n + 1);
    onSegmentChange(id);
  };
  const swapClass = swaps > 0 ? "motion-safe:animate-fade-in" : "";

  return (
    <StateField field="dark" as="section" aria-labelledby="de-hero-title">
      <div className="mx-auto max-w-[1300px] px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-16">
        <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
          {HERO.eyebrow}
        </SystemLabel>

        <div className="mt-8 flex flex-col gap-3 md:mt-10">
          <p id="de-choice-label" className="font-v4-sans text-sm font-medium text-v4-ivory/80">
            {HERO.choiceLabel}
          </p>
          <DeSegmentPicker segments={SEGMENTS} value={segment} onChange={choose} labelId="de-choice-label" />
          {/* Kurze Ansage beim Wechsel, damit Screenreader nicht die ganze Karte vorlesen. */}
          <p role="status" className="sr-only">
            {swaps > 0 ? HERO.status(current.shortName) : ""}
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          <div key={`intro-${segment}`} className={cn("flex flex-col gap-6 lg:col-start-1 lg:row-start-1", swapClass)}>
            <h1
              id="de-hero-title"
              className="hyphens-auto font-v4-sans text-[length:clamp(2rem,1.25rem+2.6vw,3.625rem)] font-extrabold leading-[1.02] tracking-tight text-v4-ivory [hyphenate-limit-chars:14_6_6]"
            >
              {current.h1.statement}{" "}
              <span className="mt-3 block font-v4-serif text-[0.82em] font-normal leading-[1.1] tracking-normal text-v4-ivory/75">
                {current.h1.promise}
              </span>
            </h1>
            <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{current.sub}</p>
          </div>

          <aside
            key={`card-${segment}`}
            aria-labelledby="de-hero-offer"
            className={cn(
              "self-start rounded-2xl bg-v4-ivory p-6 text-v4-ink md:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1",
              swapClass
            )}
          >
            <SystemLabel as="p" className="text-v4-ink/60">
              {HERO.cardLabel}
            </SystemLabel>
            <h2 id="de-hero-offer" className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-v4-ink/15 pt-5">
              <span className="font-v4-sans text-xl font-semibold tracking-tight">{offer.name}</span>
              <span className="sr-only">, </span>
              <span className="font-v4-serif text-[length:var(--v4-text-subhead)] font-normal leading-none">{offer.price}</span>
            </h2>
            <p className="mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/75">{current.card.text}</p>

            {calculation && (
              <div className="mt-6 border-t border-v4-ink/15 pt-5">
                <h3 className="font-v4-sans text-base font-semibold tracking-tight">{calculation.title}</h3>
                <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {calculation.factors.map((factor, i) => (
                    <span key={factor} className="flex items-center gap-2">
                      {i > 0 && <span className="font-v4-sans text-sm text-v4-ink/60">×</span>}
                      <span className="rounded-md border border-v4-ink/20 bg-v4-white px-2.5 py-1.5 font-v4-mono text-xs leading-none text-v4-ink">
                        {factor}
                      </span>
                    </span>
                  ))}
                </p>
                <p className="mt-4 font-v4-sans text-sm leading-relaxed text-v4-ink/75">{calculation.text}</p>
              </div>
            )}

            <p className="mt-6 border-t border-v4-ink/15 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/75">{current.card.hint}</p>
          </aside>

          <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <CheckButton label={HERO.checkLabel} to={`/de#${ANCHORS.check}`} className="min-h-12" />
              <DeBookCallButton label={HERO.callLabel} className="min-h-12" />
            </div>
            <p className="flex items-center gap-2 font-v4-sans text-sm text-v4-ivory/60">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-v4-signal" />
              {HERO.actionsNote}
            </p>
          </div>
        </div>
      </div>
    </StateField>
  );
}
