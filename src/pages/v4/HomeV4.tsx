import { motion, useReducedMotion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { V4Nav } from "@/components/v4/V4Nav";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EditorialStatement } from "@/components/v4/EditorialStatement";
import { Node } from "@/components/v4/Node";
import { LivingGrowthSystem } from "@/components/v4/LivingGrowthSystem";
import { ProvisionalMark } from "@/components/v4/ProvisionalMark";

const revealProps = (prefersReducedMotion: boolean | null) => ({
  initial: prefersReducedMotion ? undefined : { opacity: 0, y: 24 },
  whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
});

/**
 * LocalDominate V4 — Home, "The Business Awakens".
 * B1 implementation per docs/HOME_IMPLEMENTATION_CONTRACT.md's 8-beat arc.
 * New, unlinked, noindex preview route — the live `/` is untouched (B1_SCOPE, Hard Rule #1).
 */
export default function HomeV4() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="v4 font-v4-sans">
      <SEOHead
        title="LocalDominate V4 Preview — Home"
        description="Internal B1 preview of the LocalDominate V4 Home redesign. Not the live site."
        noindex
        lang="en"
      />
      <V4Nav />

      <main>
        {/* 01 — THE BUSINESS (above the fold) */}
        <StateField field="dark" as="section" className="min-h-screen flex items-center">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-10">
            <div className="flex flex-col gap-8">
              <SystemLabel className="text-v4-ivory/50">Better Brands. Stronger Businesses.</SystemLabel>
              <h1 className="font-v4-serif text-[length:var(--v4-text-hero)] leading-[0.98] text-v4-ivory">
                One business.
                <br />
                One connected growth system.
              </h1>
              <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
                LocalDominate connects Strategy, Brand, Build and Growth — the functions
                businesses usually buy separately — into one operating system.
              </p>
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
            <div className="flex justify-center md:justify-end" aria-hidden="true">
              <Node label="Business" state="dormant" size="lg" idleBreathe decorative />
            </div>
          </div>
        </StateField>

        {/* 02 — THE PROBLEM */}
        <StateField field="dark" as="section" className="flex min-h-[45vh] items-center border-t border-v4-ivory/10">
          <div className="mx-auto max-w-[1000px] px-6 py-20 text-center md:px-10">
            <EditorialStatement>
              Disconnected agencies make growth feel fragmented.
            </EditorialStatement>
          </div>
        </StateField>

        {/* 03 — THE CONNECTION */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
            <motion.div {...revealProps(prefersReducedMotion)}>
              <SystemLabel className="mb-10 block text-v4-ivory/50">These aren't separate services</SystemLabel>
              <LivingGrowthSystem endState="connected" />
            </motion.div>
          </div>
        </StateField>

        {/* 04 — THE SYSTEM AWAKENS (peak beat) */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-10">
            <motion.div {...revealProps(prefersReducedMotion)} className="mb-14 text-center">
              <EditorialStatement scale="major" className="text-v4-ink">
                Watch one business become a complete, connected system.
              </EditorialStatement>
            </motion.div>
            <div className="rounded-2xl bg-v4-ink px-6 py-16 md:px-10">
              <LivingGrowthSystem endState="outcome" />
            </div>
          </div>
        </StateField>

        {/* 05 — THE EVIDENCE */}
        <StateField field="light" id="evidence" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel className="mb-6 block text-v4-ink/50">Evidence</SystemLabel>
            <div className="flex flex-wrap gap-10 font-v4-serif text-[length:var(--v4-text-heading)]">
              <ProvisionalMark>Client results — coming with the Work page (later batch)</ProvisionalMark>
            </div>
            <p className="mt-6 max-w-lg font-v4-sans text-sm text-v4-ink/60">
              B1 ships no fabricated stats or client names, per the standing rule against
              inventing proof. Real evidence lands with the Work page build.
            </p>
          </div>
        </StateField>

        {/* 06 — THE CONTEXT */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10">
            <div className="rounded-2xl border border-v4-ink/10 bg-v4-white px-8 py-10 md:px-12">
              <p className="font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
                Different businesses. Same connected growth system.
              </p>
              <span
                className="mt-4 inline-block font-v4-sans text-sm text-v4-ink/40"
                title="Industries page is a later B-batch, not part of B1"
              >
                See the Work →
              </span>
            </div>
          </div>
        </StateField>

        {/* 07 — THE OPERATING MODEL + INTELLIGENCE (combined) */}
        <StateField field="light" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <p className="mb-10 font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              You don't need another agency. You need a growth system.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { title: "Strategy first", body: "Every function connects back to one direction, not four separate briefs." },
                { title: "AI-powered", body: "The system uses AI where it earns its place — never as decoration." },
                { title: "Measurable results", body: "Signals return to the system, so growth compounds instead of resetting." },
              ].map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-4">
                  <Node label="" state="selected" size="sm" decorative />
                  <p className="font-v4-sans text-base font-medium text-v4-ink">{pillar.title}</p>
                  <p className="font-v4-sans text-sm text-v4-ink/60">{pillar.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-6 font-v4-sans text-sm">
              <span className="text-v4-ink/40" title="Approach page is a later B-batch, not part of B1">
                See Our Approach →
              </span>
              <a href="/blog" className="text-v4-ink/70 underline-offset-4 hover:underline">
                Explore Insights →
              </a>
            </div>
          </div>
        </StateField>

        {/* 08 — THE INVITATION */}
        <StateField field="light" id="invitation" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[900px] px-6 py-28 text-center md:px-10">
            <p className="font-v4-serif text-[length:var(--v4-text-major)] text-v4-ink">
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
