import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { CheckButton } from "@/components/v4/CheckButton";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CaseSection } from "@/components/v4/work/CaseSection";
import { FeaturedCase } from "@/components/v4/work/FeaturedCase";
import { publishedCases } from "@/data/v4Cases";
import { PILLAR_BASE } from "@/data/v4PillarIndex";
import { CHECK_REPLY_TIME } from "@/lib/check";

const PAGE_URL = "https://localdominate.org/work";

/** Frozen (CLAUDE.md Hard Rule 1). */
const WORK_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Selected Work & Case Studies – Local Dominator",
      isPartOf: { "@id": "https://localdominate.org/#website" },
      about: { "@id": "https://localdominate.org/#organization" },
      inLanguage: "en",
    },
  ],
};

const cases = publishedCases();
const featured = cases.find((c) => c.hasVideo);
const others = cases.filter((c) => c !== featured);

const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const textLink =
  "inline-flex min-h-[44px] items-center font-v4-sans text-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4: Work. The published cases of v4Cases.ts, each labelled for what it is. The
 * first screen is the claim and the film that backs it; every further case is a full section with
 * task, scope, what was built, steps and status. No figures: none is verified yet.
 */
export default function WorkV4() {
  return (
    <V4Page>
      <SEOHead
        ogImage="https://localdominate.org/images/v4/social/ld-social-work-1200x630.jpg"
        title="Selected Work & Case Studies – Local Dominator"
        description="Selected projects from Local Dominator: a US e-commerce brand launch, an AI-native travel platform, a non-profit web platform and a hotel direct-booking concept."
        canonicalUrl={PAGE_URL}
        lang="en"
        jsonLd={WORK_JSON_LD}
      />

      {/* 01 HERO: the claim, and how to read the page */}
      <StateField field="dark" as="section" aria-labelledby="work-hero">
        <div className="mx-auto grid max-w-[1300px] gap-8 px-6 pb-12 pt-12 md:px-10 md:pb-14 md:pt-16 xl:grid-cols-[1.25fr_0.75fr] xl:items-end xl:gap-16">
          <div>
            <SystemLabel as="p" className="text-v4-ivory/60">
              Work
            </SystemLabel>
            <h1
              id="work-hero"
              className="mt-6 font-v4-sans text-[length:clamp(2.75rem,1.5rem+3vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory"
            >
              Work we can show.
              <br />
              Claims we can back.
            </h1>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12 xl:flex-col xl:items-start xl:justify-start xl:gap-6">
            <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              Each project is labelled for what it is: client work, a platform build, a role or a
              concept. You see the task, the scope and the status. Figures appear only once we can
              document them.
            </p>
            <div className="flex shrink-0 flex-wrap gap-4">
              <CheckButton />
              <BookCallButton tone="outline" />
            </div>
          </div>
        </div>
      </StateField>

      {/* 02 FEATURED: the case with the film, still inside the first screen */}
      {featured && (
        <StateField field="dark" as="section" id="featured" aria-labelledby="work-featured">
          <div className="mx-auto max-w-[1300px] px-6 pb-20 md:px-10 md:pb-28">
            <FeaturedCase c={featured} />
          </div>
        </StateField>
      )}

      {/* 03 MORE PROJECTS: one full section per case */}
      {others.length > 0 && (
        <StateField field="light" as="section" aria-labelledby="work-more">
          <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-8 pb-14 md:pb-20 lg:grid-cols-2 lg:items-end lg:gap-20">
              <div>
                <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
                  More projects
                </SystemLabel>
                <h2 id="work-more" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                  Not every project here is client work. The label says which is which.
                </h2>
              </div>
              <p className="max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">
                We publish results only when we can document them. Until then each project shows
                its task, its scope, what was built and where it stands today, and the steps of our
                system it covered.
              </p>
            </div>
            {others.map((c) => (
              <CaseSection key={c.id} c={c} />
            ))}
          </div>
        </StateField>
      )}

      {/* 04 THE INVITATION */}
      <StateField field="dark" as="section" aria-labelledby="work-cta">
        <div className="mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2 id="work-cta" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
            Have a project like one of these?
          </h2>
          <p className="mx-auto mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            Send the link to your website or Google profile. You get up to three concrete points to
            fix first, by email within {CHECK_REPLY_TIME}. No obligation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CheckButton className="px-9 py-4 text-base" />
            <BookCallButton tone="outline" className="px-9 py-4 text-base" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-1">
            <Link to="/services" className={`${textLink} text-v4-ivory/70 hover:text-v4-ivory`}>
              See services and prices →
            </Link>
            <Link to={PILLAR_BASE} className={`${textLink} text-v4-ivory/70 hover:text-v4-ivory`}>
              How the seven steps fit together →
            </Link>
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
