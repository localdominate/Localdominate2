import SEOHead from "@/components/SEOHead";
import { V4Nav } from "@/components/v4/V4Nav";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EditorialStatement } from "@/components/v4/EditorialStatement";
import { Node } from "@/components/v4/Node";
import { SignatureSystem } from "@/components/v4/SignatureSystem";

const FRAGMENTED = [
  { label: "Strategy", pos: "top-0 left-4 md:left-10" },
  { label: "Brand", pos: "top-10 right-6 md:right-24" },
  { label: "Website", pos: "top-40 left-10 md:left-32" },
  { label: "Marketing", pos: "top-48 right-4 md:right-10" },
  { label: "Data", pos: "top-72 left-1/2 -translate-x-1/2" },
] as const;

/**
 * LocalDominate V4 — Home, "The Business Awakens".
 * B1.1 quality pass on top of B1 v1's foundation. New, unlinked, noindex preview route —
 * the live `/` is untouched (B1_SCOPE, Hard Rule #1).
 */
export default function HomeV4() {
  return (
    <div className="v4 font-v4-sans">
      <SEOHead
        title="LocalDominate V4 Preview — Home"
        description="Internal B1.1 preview of the LocalDominate V4 Home redesign. Not the live site."
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
                premium businesses and hospitality brands usually buy from four different
                places — into one operating system.
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

        {/* 02 — THE PROBLEM / FRAGMENTATION */}
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10">
          <div className="mx-auto max-w-[1000px] px-6 py-20 md:px-10">
            <div className="relative mx-auto mb-16 h-80 max-w-md" aria-hidden="true">
              {FRAGMENTED.map((f) => (
                <span
                  key={f.label}
                  className={`absolute ${f.pos} rounded-full border border-v4-ivory/20 px-4 py-2 font-v4-mono text-xs uppercase tracking-widest text-v4-ivory/40`}
                >
                  {f.label}
                </span>
              ))}
            </div>
            <div className="text-center">
              <EditorialStatement>
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
        <StateField field="dark" as="section" className="border-t border-v4-ivory/10">
          <div className="mx-auto max-w-[1400px] py-16">
            <div className="px-6 md:px-10">
              <SystemLabel className="text-v4-ivory/50">The Signature System</SystemLabel>
            </div>
            <SignatureSystem />
          </div>
        </StateField>

        {/* 05 — THE EVIDENCE */}
        <StateField field="light" id="evidence" as="section" className="border-t border-v4-ink/10">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
            <SystemLabel className="mb-6 block text-v4-ink/50">Evidence architecture</SystemLabel>
            <p className="max-w-2xl font-v4-serif text-[length:var(--v4-text-subhead)] text-v4-ink">
              Three kinds of proof will live here: real client work, real process
              artefacts, and a category benchmark.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Client Evidence", body: "Named work, on the Work page — nothing here until it's real." },
                { title: "Process Evidence", body: "Confirmable numbers from the delivery process itself." },
                { title: "Category Benchmark", body: "How this compares to the category, not invented superlatives." },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-v4-ink/10 bg-v4-white p-6">
                  <p className="font-v4-sans text-sm font-medium text-v4-ink">{card.title}</p>
                  <p className="mt-2 font-v4-sans text-sm text-v4-ink/60">{card.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-v4-mono text-xs uppercase tracking-widest text-v4-ink/40">
              Development preview — this section ships with real evidence, not before.
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
