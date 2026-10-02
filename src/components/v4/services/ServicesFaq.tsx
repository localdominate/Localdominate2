import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { CHECK_REPLY_TIME } from "@/lib/check";

type Faq = { q: string; a: ReactNode };

const linkClass =
  "text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink";

/**
 * Every answer repeats a term the owner has confirmed (v4HowWeWork.ts, v4Check.ts, the free-check
 * page) or a fact from v4Offers.ts. Nothing here may add a promise. The list is always open, so it
 * reads the same with and without JavaScript. No FAQ JSON-LD: the page's JSON-LD is frozen.
 */
const FAQS: readonly Faq[] = [
  {
    q: "What happens after the free check?",
    a: `You get up to three concrete points to fix first, by email within ${CHECK_REPLY_TIME}. If one of the four offers fits, we say which one and why. You then decide whether to fix the points yourself or have us do it at a fixed price.`,
  },
  {
    q: "Are the prices final?",
    a: "Prices marked “from” are starting prices. In every case you get the exact scope and a fixed price in writing before any work starts. Nothing is billed that was not agreed.",
  },
  {
    q: "Who owns the website and the Google profile?",
    a: "You do. The website and the Google profile are yours.",
  },
  {
    q: "Can I cancel?",
    a: "Ongoing care can be cancelled monthly. The four offers on this page are single jobs with a fixed scope and a fixed price, not subscriptions.",
  },
  {
    q: "Do you promise rankings or bookings?",
    a: "No. We do not promise positions or revenue. You get a written list of what we changed and why.",
  },
  {
    q: "What if I need more than one offer?",
    a: (
      <>
        Then it becomes a full growth project: strategy, brand, website and marketing from one team,
        in the steps your business needs. Scope and price are set in writing before work starts.{" "}
        <Link to={PILLAR_BASE} className={linkClass}>
          See the seven steps
        </Link>
        .
      </>
    ),
  },
];

export function ServicesFaq() {
  return (
    <div className="border-b border-v4-ink/15">
      {FAQS.map((faq) => (
        <div key={faq.q} className="grid gap-2 border-t border-v4-ink/15 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
          <h3 className="font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink">{faq.q}</h3>
          <p className="max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/70">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}
