import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { CheckForm } from "@/components/v4/check/CheckForm";
import { CHECK_FORM_EN } from "@/data/v4Check";
import { CHECK_PATH } from "@/lib/check";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}${CHECK_PATH}`;
const TITLE = "Get a Free Check: Start a Project";
const DESCRIPTION =
  "Request a free check of your Google profile or website. Send your link and get up to three concrete points to fix first, each with a reason. No obligation.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Free check", item: PAGE_URL },
      ],
    },
  ],
};

const WHAT_YOU_GET = [
  "We look at your Google Business Profile or your website the way a new customer would.",
  "You get up to three concrete points to fix first, each with a short explanation.",
  "If one of our fixed-price offers fits, we say which one and why. If none fits, we say that too.",
] as const;

const NEXT_STEPS = [
  { title: "You send the link", body: "Name, email, the link and the type of business. That is all we need." },
  { title: "We check by hand", body: "A person looks at the profile or page. No automated score, no generic report." },
  { title: "You get the points by email", body: "You decide whether to fix them yourself or have us do it at a fixed price." },
] as const;

/** LocalDominate V4: Start a Project. The free check is the primary action of the whole site. */
export default function StartProjectV4() {
  return (
    <V4Page>
      <SEOHead title={TITLE} description={DESCRIPTION} canonicalUrl={PAGE_URL} lang="en" jsonLd={JSON_LD} />

      <StateField field="dark" as="section" aria-labelledby="check-title">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 pb-20 pt-16 md:px-10 md:pt-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SystemLabel className="text-v4-ivory/50">Free check · No obligation</SystemLabel>
            <h1
              id="check-title"
              className="font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[0.98] tracking-tight text-v4-ivory"
            >
              Get a free check.
            </h1>
            <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
              Send us the link to your Google profile or your website. We tell you what we would fix
              first and why. You owe us nothing for it.
            </p>
            <ul className="flex max-w-lg flex-col">
              {WHAT_YOU_GET.map((point) => (
                <li key={point} className="flex gap-4 border-t border-v4-ivory/15 py-4 font-v4-sans text-sm leading-relaxed text-v4-ivory/80">
                  <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <CheckForm texts={CHECK_FORM_EN} className="self-start" />
        </div>
      </StateField>

      <StateField field="light" as="section" aria-labelledby="check-next">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            What happens next
          </SystemLabel>
          <h2 id="check-next" className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            Three steps. Two of them are ours.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {NEXT_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-v4-ink/10 bg-v4-white p-7">
                <span className="font-v4-serif text-4xl text-v4-ink/30">{i + 1}</span>
                <h3 className="mt-4 font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{step.title}</h3>
                <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="check-how">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              If you work with us
            </SystemLabel>
            <h2 id="check-how" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
              Four commitments, in writing.
            </h2>
          </div>
          <HowWeWork />
        </div>
      </StateField>

      <StateField field="dark" as="section" aria-labelledby="check-call">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 id="check-call" className="font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ivory">
              Rather talk first?
            </h2>
            <p className="mt-3 max-w-md font-v4-sans text-sm text-v4-ivory/70">
              Fifteen minutes by video. You describe where the business is stuck, we say whether we can help.
            </p>
          </div>
          <BookCallButton tone="outline" className="self-start md:self-auto" />
        </div>
      </StateField>
    </V4Page>
  );
}
