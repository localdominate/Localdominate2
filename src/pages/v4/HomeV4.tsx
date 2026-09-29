import SEOHead from "@/components/SEOHead";
import { V4Nav } from "@/components/v4/V4Nav";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EditorialStatement } from "@/components/v4/EditorialStatement";
import { Node } from "@/components/v4/Node";
import { Connection } from "@/components/v4/Connection";
import { SignatureSystem } from "@/components/v4/SignatureSystem";

import heroImg from "@/assets/v4/r1c1_pool_mountain_sunset.jpg";
import kempinskiImg from "@/assets/v4/r4c2_wood_building_pool.jpg";
import dadicationImg from "@/assets/v4/r2c3_concrete_plant.jpg";
import kloversImg from "@/assets/v4/r3c2_woman_smiling.jpg";
import saveSpaceImg from "@/assets/v4/r3c4_phone_app_data.jpg";
import journeyImg from "@/assets/v4/r2c2_mountain_lake_road.jpg";

const FRAGMENTED = [
  { label: "Strategy", pos: "top-0 left-4 md:left-10" },
  { label: "Brand", pos: "top-10 right-6 md:right-24" },
  { label: "Website", pos: "top-40 left-10 md:left-32" },
  { label: "Marketing", pos: "top-48 right-4 md:right-10" },
  { label: "Data", pos: "top-72 left-1/2 -translate-x-1/2" },
] as const;

const CLIENTS = ["Kempinski", "SaveSpace", "Klovers", "Dadication"] as const;

const GROWTH_STATS = [
  { value: "4+", label: "Industries" },
  { value: "50+", label: "Projects" },
  { value: "128%", label: "Ø Growth Lift" },
  { value: "1", label: "Connected System" },
] as const;

const MILESTONES = ["Strategy", "Brand", "Build", "Launch"] as const;

// Real, client-provided figures — not illustrative placeholders. Source: Re (maintainer).
// Swap or remove any figure the moment its accuracy can't be stood behind publicly.
const CASE_STUDIES = [
  {
    name: "Kempinski St. Moritz",
    category: "Hospitality",
    blurb: "From brand to direct bookings. A complete digital ecosystem for a luxury hotel.",
    metrics: [
      ["+128%", "Direct Bookings"],
      ["+42%", "Conversion Rate"],
      ["3.2x", "ROAS"],
    ],
    image: kempinskiImg,
  },
  {
    name: "Dadication",
    category: "Consumer Brand",
    blurb: "From idea to global D2C brand. Shopify store, content and launch in 10 days.",
    metrics: [
      ["+220%", "Signups"],
      ["+68%", "Returning Customers"],
      ["2.8x", "Lifetime Value"],
    ],
    image: dadicationImg,
  },
  {
    name: "Klovers Korean",
    category: "Education",
    blurb: "Brand, website and global learning platform. From concept to community.",
    metrics: [
      ["+240%", "Trial Signups"],
      ["85%", "Organic Traffic"],
      ["4.9/5", "User Rating"],
    ],
    image: kloversImg,
  },
  {
    name: "SaveSpace",
    category: "SaaS",
    blurb: "From MVP to market leader. Brand, website, acquisition and growth system.",
    metrics: [
      ["+140%", "Leads"],
      ["+52%", "Conversion Rate"],
      ["-40%", "Cost per Lead"],
    ],
    image: saveSpaceImg,
  },
] as const;

/**
 * LocalDominate V4 — Home, "The Business Awakens".
 * B1.3 visual-reference pass: rebuilt to match the owner-approved photography-driven
 * reference (real client names + real client-provided metrics — see CASE_STUDIES comment;
 * photography cropped from a set the owner supplied directly). Still Home only, still a
 * new, unlinked, noindex preview route — the live `/` is untouched (B1_SCOPE, Hard Rule #1).
 */
export default function HomeV4() {
  return (
    <div className="v4 font-v4-sans">
      <SEOHead
        title="LocalDominate V4 Preview — Home"
        description="Internal preview of the LocalDominate V4 Home redesign. Not the live site."
        noindex
        lang="en"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        Skip to content
      </a>
      <V4Nav />

      <main id="main-content">
        {/* 01 — THE BUSINESS (above the fold) */}
        <StateField field="dark" as="section" className="min-h-screen flex items-center" aria-labelledby="beat-hero">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10">
            <div className="flex flex-col gap-8">
              <SystemLabel className="text-v4-ivory/50">Better Brands. Stronger Businesses.</SystemLabel>
              <h1 id="beat-hero" className="font-v4-serif text-[length:var(--v4-text-hero)] leading-[0.98] text-v4-ivory">
                One business.
                <br />
                One connected growth system.
              </h1>
              <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
                Most growth systems fail because strategy, brand, website and marketing
                operate separately. LocalDominate connects them into one operating
                system — built for serious premium businesses, especially DACH and
                hospitality brands, credible anywhere.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-hidden="true">
                {["Strategy", "Brand", "Build", "Growth"].map((word, i) => (
                  <span key={word} className="flex items-center gap-3">
                    <SystemLabel className="text-v4-ivory/50">{word}</SystemLabel>
                    {i < 3 && <span className="h-px w-4 bg-v4-ivory/20" />}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#invitation"
                  className="rounded-full bg-v4-signal px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
                >
                  Start a Project
                </a>
                <a
                  href="#evidence"
                  className="rounded-full border border-v4-ivory/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ivory/90 transition-colors hover:border-v4-ivory/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
                >
                  See the Evidence
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-[5/6]">
              <img
                src={heroImg}
                alt="Premium hospitality property at sunset, overlooking a mountain lake"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-v4-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </StateField>

        {/* TRUSTED BY */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-trusted">
          <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10">
            <SystemLabel id="beat-trusted" as="p" className="mb-6 block text-center text-v4-ink/60">
              Trusted by ambitious businesses
            </SystemLabel>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {CLIENTS.map((c) => (
                <span key={c} className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink/70">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </StateField>

        {/* 02 — THE PROBLEM / FRAGMENTATION */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-labelledby="beat-fragmentation">
          <div className="mx-auto max-w-[1000px] px-6 py-20 md:px-10">
            <div className="relative mx-auto mb-16 h-80 max-w-md" aria-hidden="true">
              {FRAGMENTED.map((f) => (
                <span
                  key={f.label}
                  className={`absolute ${f.pos} rounded-full border border-v4-ivory/20 px-4 py-2 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory/50`}
                >
                  {f.label}
                </span>
              ))}
            </div>
            <div className="text-center">
              <EditorialStatement id="beat-fragmentation">
                Disconnected agencies make growth feel fragmented.
              </EditorialStatement>
              <p className="mx-auto mt-6 max-w-md font-v4-sans text-sm text-v4-ivory/50">
                Not broken. Not incompetent. Simply five things that were never meant to
                talk to each other.
              </p>
            </div>
          </div>
        </StateField>

        {/* 03+04 — THE CONNECTION → THE SYSTEM AWAKENS (Signature Interaction, combined) */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10" aria-labelledby="beat-signature-system">
          <div className="mx-auto max-w-[1400px] py-16">
            <div className="px-6 md:px-10">
              <SystemLabel as="p" id="beat-signature-system" className="text-v4-ivory/50">
                The Signature System — how strategy becomes one connected system
              </SystemLabel>
            </div>
            <SignatureSystem />
          </div>
        </StateField>

        {/* A COMPLETE SYSTEM. MEASURABLE IMPACT. */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-impact">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" id="beat-impact" className="mb-4 block text-v4-ink/60">
              A complete system. Measurable impact.
            </SystemLabel>
            <div className="flex items-center gap-0 overflow-x-auto pb-2" aria-hidden="true">
              {MILESTONES.map((m, i) => (
                <div key={m} className="flex shrink-0 items-center">
                  {/* Node's built-in label uses Signal Green when filled, which reads at ~1.1:1
                      against the light StateField here — fine on the dark Signature System
                      background it was designed for, not here. Render it decorative (no label
                      text of its own) and caption it separately in v4-ink, which is legible. */}
                  <Node label="" state={i === 0 ? "selected" : "outcome"} size="sm" decorative />
                  <Connection active orientation="horizontal" className="!w-14" />
                </div>
              ))}
              <SystemLabel className="ml-2 whitespace-nowrap text-v4-ink">Grow →</SystemLabel>
            </div>
            <div className="mt-2 flex items-center gap-0 overflow-x-auto" aria-hidden="true">
              {MILESTONES.map((m) => (
                <div key={m} className="flex w-[4.5rem] shrink-0 justify-center">
                  <SystemLabel className="text-v4-ink/60">{m}</SystemLabel>
                </div>
              ))}
            </div>
            <span className="sr-only">Growth milestones, in order: {MILESTONES.join(", ")}, then Grow.</span>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {GROWTH_STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-v4-serif text-3xl text-v4-ink">{s.value}</p>
                  <SystemLabel className="mt-1 block text-v4-ink/60">{s.label}</SystemLabel>
                </div>
              ))}
            </div>
          </div>
        </StateField>

        {/* 05 — THE EVIDENCE: real, named work */}
        <StateField field="light" id="evidence" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-evidence">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel as="p" id="beat-evidence" className="mb-6 block text-v4-ink/60">Real projects. Real results.</SystemLabel>
            <p className="max-w-2xl font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              We don't ask you to take the system on faith. Every number below is a
              client's own, not an industry average.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {CASE_STUDIES.map((cs) => (
                <div key={cs.name} className="overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-white">
                  <div className="relative aspect-[16/9]">
                    <img src={cs.image} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <SystemLabel className="text-v4-ink/60">{cs.category}</SystemLabel>
                    <p className="mt-2 font-v4-sans text-lg font-semibold text-v4-ink">{cs.name}</p>
                    <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{cs.blurb}</p>
                    <div className="mt-5 grid grid-cols-3 gap-3 border-t border-v4-ink/10 pt-4">
                      {cs.metrics.map(([value, label]) => (
                        <div key={label}>
                          <p className="font-v4-sans text-base font-semibold text-v4-ink">{value}</p>
                          <p className="mt-0.5 font-v4-sans text-xs text-v4-ink/60">{label}</p>
                        </div>
                      ))}
                    </div>
                    <span
                      className="mt-5 inline-block font-v4-sans text-sm text-v4-ink/60"
                      title="Work page is a later B-batch, not part of B1"
                    >
                      View Case Study →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StateField>

        {/* 06 — THE CONTEXT */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-context">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="grid gap-8 overflow-hidden rounded-2xl border border-v4-ink/10 bg-v4-white md:grid-cols-[1fr_1.2fr]">
              <div className="relative min-h-[220px]">
                <img
                  src={journeyImg}
                  alt="A road winding through a forested mountain valley toward a lake"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-8 py-10 md:pl-0 md:pr-12">
                <p id="beat-context" className="font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
                  One system. Read differently for every business.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {[
                    { title: "Hospitality", body: "A hotel needs bookings, not vanity traffic — the system optimises for occupancy, not clicks." },
                    { title: "Premium B2B", body: "A considered sale needs credibility before contact — the system builds trust before the pitch." },
                    { title: "Ambitious SMEs", body: "A growing team needs to move fast without breaking what already works." },
                    { title: "Consumer brands", body: "A challenger brand needs proof and recall, fast — not another awareness campaign." },
                  ].map((row) => (
                    <div key={row.title}>
                      <p className="font-v4-sans text-sm font-medium text-v4-ink">{row.title}</p>
                      <p className="mt-1 font-v4-sans text-sm text-v4-ink/60">{row.body}</p>
                    </div>
                  ))}
                </div>
                <span
                  className="mt-8 inline-block font-v4-sans text-sm text-v4-ink/60"
                  title="Industries page is a later B-batch, not part of B1"
                >
                  See the Work →
                </span>
              </div>
            </div>
          </div>
        </StateField>

        {/* 07 — THE OPERATING MODEL + INTELLIGENCE (combined) */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-operating-model">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <p id="beat-operating-model" className="mb-10 font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              You don't need another agency. You need a growth system.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { title: "Strategy first", body: "Every function connects back to one direction, not four separate briefs." },
                { title: "AI where it earns its place", body: "Used to spot what's working and act on it faster — not to write your homepage copy." },
                { title: "Compounding, not resetting", body: "Each campaign returns data the next one starts from, instead of starting cold." },
              ].map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-4">
                  <Node label="" state="selected" size="sm" decorative />
                  <p className="font-v4-sans text-base font-medium text-v4-ink">{pillar.title}</p>
                  <p className="font-v4-sans text-sm text-v4-ink/60">{pillar.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-6 font-v4-sans text-sm">
              <span className="text-v4-ink/60" title="Approach page is a later B-batch, not part of B1">
                See Our Approach →
              </span>
              <a href="/blog" className="text-v4-ink/70 underline-offset-4 hover:underline">
                Explore Insights →
              </a>
            </div>
          </div>
        </StateField>

        {/* 08 — THE INVITATION */}
        <StateField field="light" id="invitation" as="section" className="border-t border-v4-ink/10" aria-labelledby="beat-invitation">
          <div className="mx-auto max-w-[900px] px-6 py-28 text-center md:px-10">
            <p id="beat-invitation" className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ink">
              Start building your system.
            </p>
            <a
              href="#invitation"
              title="Wires to the real Start a Project flow in a later batch — not part of B1"
              className="mt-10 inline-block rounded-full bg-v4-signal px-9 py-4 font-v4-sans text-base font-medium text-v4-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              Start a Project
            </a>
          </div>
        </StateField>
      </main>
    </div>
  );
}
