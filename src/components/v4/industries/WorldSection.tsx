import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { WorldVisual } from "@/components/v4/industries/WorldVisual";
import { OFFERS } from "@/data/v4Offers";
import type { Offer } from "@/data/v4Offers";
import { pillarById, pillarPath } from "@/data/v4PillarIndex";
import type { World, WorldOfferRef } from "@/data/v4Industries";
import { CHECK_REPLY_TIME } from "@/lib/check";

/**
 * One world of /industries. All four are rendered one after the other in the HTML (no tabs), so
 * the page reads the same without JavaScript. The frame is shared, the substance is not: situation,
 * checks, deliverables, offers, first step and visual all come from `v4Industries.ts`.
 * `children` is an optional band that belongs to this world (the commission calculator).
 */

const h3Class = "font-v4-sans text-xl font-semibold tracking-tight text-v4-ink";
const textLink =
  "font-v4-sans text-sm font-medium underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

type ResolvedOffer = { offer: Offer; why: string };

const resolveOffers = (refs: readonly WorldOfferRef[]): ResolvedOffer[] =>
  refs.flatMap((ref) => {
    const offer = OFFERS.find((o) => o.id === ref.offerId);
    return offer ? [{ offer, why: ref.why }] : [];
  });

function OfferCard({ offer, why, headingId }: ResolvedOffer & { headingId: string }) {
  return (
    <article aria-labelledby={headingId} className="flex flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-7">
      <SystemLabel as="p" className="text-v4-ink/60">
        Fixed-price offer
      </SystemLabel>
      <h4 id={headingId} className="mt-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">
        {offer.name}
      </h4>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-v4-serif text-3xl leading-none text-v4-ink">{offer.price}</span>
        {offer.priceNote && <span className="font-v4-sans text-sm text-v4-ink/70">{offer.priceNote}</span>}
      </p>
      {offer.delivery && <p className="mt-2 font-v4-sans text-sm text-v4-ink/70">Delivery: {offer.delivery}</p>}
      <p className="mt-5 border-t border-v4-ink/10 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/70">{why}</p>
      <Link to="/services" className={`${textLink} mt-auto self-start pt-6 text-v4-ink focus-visible:outline-v4-ink`}>
        Full scope on the services page
      </Link>
    </article>
  );
}

export function WorldSection({ world, children }: { world: World; children?: React.ReactNode }) {
  const titleId = `${world.id}-title`;
  const offers = resolveOffers(world.offers);
  const step = pillarById(world.step.id);

  return (
    <section id={world.id} aria-labelledby={titleId} className="scroll-mt-[114px] lg:scroll-mt-[130px]">
      <StateField field="light" as="div" className="border-t border-v4-ink/10">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-5 border-b border-v4-ink/15 pb-8 md:flex-row-reverse md:items-end md:justify-between md:gap-10 md:pb-10">
            <SystemLabel as="p" className="leading-relaxed text-v4-ink/60 md:max-w-xs md:pb-2 md:text-right">
              {world.descriptor}
            </SystemLabel>
            <h2
              id={titleId}
              className="font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1] text-v4-ink"
            >
              {world.name}
            </h2>
          </div>

          <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Tablet: text and visual side by side. Desktop: stacked in the narrow column. */}
            <div className="grid gap-10 md:grid-cols-2 md:items-start lg:block">
              <div>
                <p className="text-balance font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.12] text-v4-ink">
                  {world.claim}
                </p>
                <p className="mt-6 max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
                  {world.situation}
                </p>
              </div>
              <div className="lg:mt-10">
                <WorldVisual kind={world.visual} />
              </div>
            </div>

            <div className="flex flex-col gap-14">
              <div>
                <h3 className={h3Class}>What we look at first</h3>
                <ol className="mt-7 flex flex-col">
                  {world.checks.map((check, i) => (
                    <li key={check.where} className="relative pb-7 pl-9 last:pb-0">
                      {i < world.checks.length - 1 && (
                        <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-3 w-px bg-v4-ink/20" />
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[3px] h-[11px] w-[11px] rounded-full border-[1.5px] border-v4-ink bg-v4-ivory"
                      />
                      <SystemLabel as="p" className="leading-relaxed text-v4-ink/60">
                        {check.where}
                      </SystemLabel>
                      <p className="mt-2 max-w-xl font-v4-sans text-base leading-relaxed text-v4-ink">{check.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-v4-ink/10 bg-v4-white p-6 md:p-8">
                <h3 className={h3Class}>What we build</h3>
                <ul className="mt-5 flex flex-col">
                  {world.builds.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 border-t border-v4-ink/10 py-4 font-v4-sans text-base leading-relaxed text-v4-ink last:pb-0"
                    >
                      <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-v4-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
                {world.buildNote && (
                  <p className="mt-5 border-t border-v4-ink/10 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/70">
                    {world.buildNote}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <h3 className={h3Class}>Where to start</h3>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {offers.map(({ offer, why }) => (
                <OfferCard key={offer.id} offer={offer} why={why} headingId={`${world.id}-offer-${offer.id}`} />
              ))}
              {step && (
                <article
                  aria-labelledby={`${world.id}-step`}
                  className="flex flex-col rounded-2xl bg-v4-ink p-6 text-v4-ivory md:col-span-2 md:p-7 lg:col-span-1"
                >
                  <SystemLabel as="p" className="text-v4-ivory/60">
                    Usual first step of seven
                  </SystemLabel>
                  <h4 id={`${world.id}-step`} className="mt-4 flex items-baseline gap-3">
                    <span className="font-v4-mono text-sm tracking-[0.18em] text-v4-signal">{step.n}</span>
                    <span className="font-v4-serif text-3xl leading-none text-v4-ivory">{step.name}</span>
                  </h4>
                  <p className="mt-3 font-v4-sans text-sm font-medium leading-snug text-v4-ivory">{step.question}</p>
                  <p className="mt-5 border-t border-v4-ivory/15 pt-5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
                    {world.step.why}
                  </p>
                  <Link
                    to={pillarPath(step.id)}
                    className={`${textLink} mt-auto self-start pt-6 text-v4-ivory focus-visible:outline-v4-signal`}
                  >
                    Read step {step.n}: {step.name}
                  </Link>
                </article>
              )}
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-v4-ink/15 pt-8 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="max-w-2xl font-v4-sans text-base leading-relaxed text-v4-ink">
                {world.checkLine} You get up to three concrete points to fix first, by email within{" "}
                {CHECK_REPLY_TIME}. It is free and commits you to nothing.
              </p>
              <CheckButton className="shrink-0 self-start md:self-auto" />
            </div>
          </div>
        </div>
      </StateField>
      {children}
    </section>
  );
}
