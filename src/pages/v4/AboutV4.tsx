import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";
import { HowWeWork } from "@/components/v4/HowWeWork";
import { Portrait } from "@/components/v4/about/Portrait";
import { CareerLegend, CareerTimeline } from "@/components/v4/about/CareerTimeline";
import {
  ABOUT_DESCRIPTION,
  ABOUT_PATH,
  ABOUT_TITLE,
  CONTACT,
  HERO_FACTS,
  HOTEL_LESSONS,
  PRINCIPLES,
  TODAY_LINKS,
} from "@/data/v4About";
import { CHECK_REPLY_TIME } from "@/lib/check";

const SITE = "https://localdominate.org";
const PAGE_URL = `${SITE}${ABOUT_PATH}`;
const PERSON_ID = `${PAGE_URL}#markus-wimboeck`;

/** Only fields the owner has confirmed. No image: the bundled asset has no absolute URL at build time. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      mainEntity: { "@id": PERSON_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "About", item: PAGE_URL },
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Markus Wimböck",
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE}/#organization` },
      sameAs: [CONTACT.linkedIn],
      knowsLanguage: ["German", "English"],
    },
  ],
};

const sectionLabel = "mb-6 block";
const h2Serif = "font-v4-serif font-normal leading-[1.08]";
const linkOnDark =
  "underline decoration-v4-ivory/40 underline-offset-4 hover:decoration-v4-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-v4-signal";

/**
 * LocalDominate V4: About. "Who is behind this": the person, the hotel background, the career as a
 * timeline, the working principles and the ways to get in touch. Content: src/data/v4About.ts.
 * The German page /ueber-uns is a separate, older page and is not touched by this one.
 */
export default function AboutV4() {
  return (
    <V4Page>
      <SEOHead title={ABOUT_TITLE} description={ABOUT_DESCRIPTION} canonicalUrl={PAGE_URL} lang="en" jsonLd={JSON_LD} />

      {/* 01 HERO: who, what background, how to start. On phones the portrait sits beside the name. */}
      <StateField field="dark" as="section" aria-labelledby="about-title">
        <div className="mx-auto max-w-[1300px] px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-14 lg:pt-20">
          <div className="grid grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] items-end gap-x-5 gap-y-8 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:gap-x-10 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-16 lg:gap-y-0">
            <header className="col-start-2 row-start-1 lg:col-start-1">
              <SystemLabel as="p" className="leading-relaxed text-v4-ivory/60">
                Founder of LocalDominate
              </SystemLabel>
              <h1
                id="about-title"
                className="mt-4 font-v4-sans text-[length:clamp(2.25rem,1.1rem+4.6vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-v4-ivory lg:mt-6"
              >
                <span className="block">Markus</span> <span className="block">Wimböck</span>
              </h1>
            </header>

            <Portrait className="col-start-1 row-start-1 w-full lg:col-start-2 lg:row-span-2 lg:max-w-[420px] lg:justify-self-end" />

            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:gap-7 lg:pt-8">
              <p className="max-w-xl font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.15] text-v4-ivory">
                One person is responsible for your project. That person is me.
              </p>
              <p className="max-w-xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
                I come from hotels: hotel management school, resort operations, then the digital and{" "}
                <span className="whitespace-nowrap">e-commerce</span> side of a grand hotel in St. Moritz. With LocalDominate I plan, build and
                market brand, website and Google presence for hotels and local businesses as one
                project.
              </p>
              <div className="flex flex-wrap gap-4">
                <CheckButton />
                <BookCallButton tone="outline" />
              </div>
            </div>
          </div>

          <dl className="mt-12 grid gap-x-10 border-t border-v4-ivory/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {HERO_FACTS.map((fact) => (
              <div key={fact.term} className="border-b border-v4-ivory/15 py-5 sm:border-b-0 sm:pb-0">
                <dt>
                  <SystemLabel className="text-v4-ivory/60">{fact.term}</SystemLabel>
                </dt>
                <dd className="mt-2.5 font-v4-sans text-base text-v4-ivory">{fact.detail}</dd>
              </div>
            ))}
            <div className="py-5 sm:pb-0">
              <dt>
                <SystemLabel className="text-v4-ivory/60">Contact</SystemLabel>
              </dt>
              <dd className="mt-1 flex flex-col font-v4-sans text-base text-v4-ivory">
                <a href={`mailto:${CONTACT.email}`} className={`${linkOnDark} inline-flex min-h-[44px] items-center self-start`}>
                  {CONTACT.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </StateField>

      {/* 02 WHAT I BRING FROM HOTELS: each point as background and consequence */}
      <StateField field="light" as="section" aria-labelledby="about-hotels">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              What I bring from hotels
            </SystemLabel>
            <h2 id="about-hotels" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ink`}>
              I worked in the business before I worked on its marketing.
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
              A hotel sells the same rooms every day and has to be found, chosen and booked again
              each time. A restaurant, a practice or a workshop is in the same position. This is what
              the hotel years changed about how I work.
            </p>
          </div>
          <ol className="flex flex-col">
            {HOTEL_LESSONS.map((lesson) => (
              <li key={lesson.title} className="border-t border-v4-ink/15 py-8 first:pt-0 max-lg:first:border-t-0 lg:first:pt-8">
                <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink md:text-2xl">{lesson.title}</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <SystemLabel as="p" className="text-v4-ink/60">
                      Background
                    </SystemLabel>
                    <p className="mt-2.5 font-v4-sans text-base leading-relaxed text-v4-ink/70">{lesson.then}</p>
                  </div>
                  <div className="border-l-2 border-v4-ink pl-5">
                    <SystemLabel as="p" className="text-v4-ink/60">
                      For you
                    </SystemLabel>
                    <p className="mt-2.5 font-v4-sans text-base leading-relaxed text-v4-ink">{lesson.now}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </StateField>

      {/* 03 CAREER: the timeline, the signature element of this page */}
      <StateField field="dark" as="section" aria-labelledby="about-career">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ivory/60`}>
                Career, newest first
              </SystemLabel>
              <h2 id="about-career" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
                From hotel school to my own studio.
              </h2>
            </div>
            <div>
              <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
                The hotel stations are marked. They are places where I worked or trained, not clients
                of LocalDominate.
              </p>
              <CareerLegend className="mt-6" />
            </div>
          </div>
          <CareerTimeline className="mt-14 border-t border-v4-ivory/15 pt-12 md:mt-16 md:pt-16" />
        </div>
      </StateField>

      {/* 04 LOCALDOMINATE TODAY: three ways into the site */}
      <StateField field="light" as="section" aria-labelledby="about-today">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
                LocalDominate today
              </SystemLabel>
              <h2 id="about-today" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
                A growth studio run by one person.
              </h2>
            </div>
            <p className="max-w-xl self-end font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">
              LocalDominate plans, builds and markets your brand, your website and your Google
              presence as one project instead of four separate jobs. You can order the full project
              or start with one fixed-price offer.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {TODAY_LINKS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col rounded-2xl border border-v4-ink/10 bg-v4-white p-7 transition-colors hover:border-v4-ink/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
                >
                  <SystemLabel className="text-v4-ink/60">{item.label}</SystemLabel>
                  <span className="mt-5 flex items-baseline justify-between gap-4">
                    <span className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-[1.1] text-v4-ink">{item.title}</span>
                    <span
                      aria-hidden="true"
                      className="text-v4-ink/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-v4-ink"
                    >
                      →
                    </span>
                  </span>
                  <span className="mt-3 block font-v4-sans text-sm leading-relaxed text-v4-ink/70">{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </StateField>

      {/* 05 WORKING PRINCIPLES: each with what it means for the customer */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="about-principles">
        <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
          <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
            How I work
          </SystemLabel>
          <h2 id="about-principles" className={`${h2Serif} max-w-3xl text-[length:var(--v4-text-heading)] text-v4-ink`}>
            Three principles, and what each one means for you.
          </h2>
          <ul className="mt-12 grid gap-x-10 md:grid-cols-3">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="flex flex-col border-t border-v4-ink/15 py-7">
                <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{principle.title}</h3>
                <p className="mb-6 mt-3 font-v4-sans text-base leading-relaxed text-v4-ink/70">{principle.body}</p>
                <div className="mt-auto border-l-2 border-v4-ink pl-5">
                  <SystemLabel as="p" className="text-v4-ink/60">
                    For you
                  </SystemLabel>
                  <p className="mt-2.5 font-v4-sans text-base leading-relaxed text-v4-ink">{principle.forYou}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </StateField>

      {/* 06 THE FOUR COMMITMENTS: shared block, wording confirmed by the owner */}
      <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="about-commitments">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SystemLabel as="p" className={`${sectionLabel} text-v4-ink/60`}>
              In every offer
            </SystemLabel>
            <h2 id="about-commitments" className={`${h2Serif} text-[length:var(--v4-text-heading)] text-v4-ink`}>
              Four commitments, in writing.
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">
              The principles above are how I work. These four points are what you get in writing
              before any work starts.
            </p>
          </div>
          <HowWeWork />
        </div>
      </StateField>

      {/* 07 CONTACT: both actions, plus the direct ways to reach him */}
      <StateField field="dark" as="section" aria-labelledby="about-contact">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <h2 id="about-contact" className={`${h2Serif} text-[length:var(--v4-text-major)] text-v4-ivory`}>
              Send me the link. I look at it myself.
            </h2>
            <p className="mt-6 max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              Send the link to your Google profile or website. You get up to three concrete points
              to fix first, by email within {CHECK_REPLY_TIME}. No obligation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CheckButton className="px-9 py-4 text-base" />
              <BookCallButton tone="outline" className="px-9 py-4 text-base" />
            </div>
          </div>
          <dl className="border-t border-v4-ivory/15">
            <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 border-b border-v4-ivory/15 py-2">
              <dt>
                <SystemLabel className="text-v4-ivory/60">Email</SystemLabel>
              </dt>
              <dd className="font-v4-sans text-base text-v4-ivory">
                <a href={`mailto:${CONTACT.email}`} className={`${linkOnDark} inline-flex min-h-[44px] items-center`}>
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 border-b border-v4-ivory/15 py-2">
              <dt>
                <SystemLabel className="text-v4-ivory/60">LinkedIn</SystemLabel>
              </dt>
              <dd className="font-v4-sans text-base text-v4-ivory">
                <a
                  href={CONTACT.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkOnDark} inline-flex min-h-[44px] items-center`}
                >
                  Markus Wimböck on LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 border-b border-v4-ivory/15 py-4">
              <dt>
                <SystemLabel className="text-v4-ivory/60">Meetings</SystemLabel>
              </dt>
              <dd className="font-v4-sans text-base text-v4-ivory">By video, in German or English</dd>
            </div>
          </dl>
        </div>
      </StateField>
    </V4Page>
  );
}
