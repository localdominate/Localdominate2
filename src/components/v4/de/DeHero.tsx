import { useState } from "react";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { DeBookCallButton } from "@/components/v4/de/DeBookCallButton";
import { DeSegmentPicker } from "@/components/v4/de/DeSegmentPicker";
import { cn } from "@/lib/utils";
import { CHECK_ANCHOR, HERO, OFFERS_DE, SEGMENTS } from "@/data/v4De";
import type { SegmentId } from "@/data/v4De";

/**
 * Erster Bildschirm: Überschrift und Angebotskarte folgen dem gewählten Segment.
 * Die Animation läuft erst nach dem ersten Wechsel, der Startzustand ist sofort sichtbar.
 */
export function DeHero({ segment, onSegmentChange }: { segment: SegmentId; onSegmentChange: (id: SegmentId) => void }) {
  const [swaps, setSwaps] = useState(0);
  const current = SEGMENTS.find((s) => s.id === segment) ?? SEGMENTS[0];
  const offer = OFFERS_DE[current.offer];
  const alternative = OFFERS_DE[current.alternative.offer];

  const choose = (id: SegmentId) => {
    if (id === segment) return;
    setSwaps((n) => n + 1);
    onSegmentChange(id);
  };
  const swapClass = swaps > 0 ? "de-swap" : "";

  return (
    <StateField field="dark" as="section" aria-labelledby="de-hero-title">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-6 pb-20 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SystemLabel as="p" className="leading-relaxed text-v4-ivory/70">
            {HERO.eyebrow}
          </SystemLabel>
          <h1
            key={`h1-${segment}`}
            id="de-hero-title"
            style={{ hyphens: "auto" }}
            className={cn(
              "text-balance font-v4-sans text-[length:var(--v4-text-heading)] font-extrabold leading-[1.04] tracking-tight text-v4-ivory",
              swapClass
            )}
          >
            {current.h1}
          </h1>
          <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/75">{HERO.sub}</p>
          <div className="flex flex-col gap-3">
            <p id="de-choice-label" className="font-v4-sans text-sm font-medium text-v4-ivory/80">
              {HERO.choiceLabel}
            </p>
            <DeSegmentPicker segments={SEGMENTS} value={segment} onChange={choose} labelId="de-choice-label" />
          </div>
        </div>

        <div className="self-start rounded-2xl bg-v4-forest p-7 text-v4-ivory md:p-9">
          {/* Kurze Ansage beim Wechsel, damit Screenreader nicht die ganze Karte vorlesen. */}
          <p role="status" className="sr-only">
            {swaps > 0 ? `Angebot für Ihre Auswahl: ${offer.name}, ${offer.price}` : ""}
          </p>
          <div key={`card-${segment}`} className={cn("flex flex-col gap-6", swapClass, swaps > 0 && "de-swap-late")}>
            <SystemLabel as="p" className="text-v4-ivory/70">
              {HERO.cardLabel}
            </SystemLabel>
            <div>
              <h2 className="font-v4-sans text-2xl font-semibold tracking-tight">{offer.name}</h2>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-v4-serif text-5xl leading-none">{offer.price}</span>
                {offer.delivery && <span className="font-v4-sans text-sm text-v4-ivory/75">Lieferzeit: {offer.delivery}</span>}
              </p>
            </div>
            <p className="font-v4-sans text-base leading-relaxed text-v4-ivory/85">{offer.summary}</p>
            <ul className="flex flex-col">
              {offer.includes.map((item) => (
                <li key={item} className="border-t border-v4-ivory/20 py-3 font-v4-sans text-sm leading-relaxed text-v4-ivory/85">
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/75">
              {current.alternative.text} ({alternative.price})
            </p>
            <div className="flex flex-col gap-4 border-t border-v4-ivory/20 pt-6">
              <p className="font-v4-sans text-sm text-v4-ivory/85">
                {HERO.cardCheckLine} {current.checkLooksAt}
              </p>
              <div className="flex flex-wrap gap-3">
                <CheckButton label={HERO.checkLabel} to={`/de#${CHECK_ANCHOR}`} className="min-h-11" />
                <DeBookCallButton label={HERO.callLabel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StateField>
  );
}
