import SEOHead from "@/components/SEOHead";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { EditorialStatement } from "@/components/v4/EditorialStatement";
import { Node } from "@/components/v4/Node";
import { Connection } from "@/components/v4/Connection";
import { LivingGrowthSystem } from "@/components/v4/LivingGrowthSystem";
import { SignatureSystem } from "@/components/v4/SignatureSystem";
import { ProvisionalMark } from "@/components/v4/ProvisionalMark";

const SWATCHES = [
  { name: "Ink", css: "bg-v4-ink", text: "text-v4-ivory" },
  { name: "Ivory", css: "bg-v4-ivory", text: "text-v4-ink" },
  { name: "White", css: "bg-v4-white border border-v4-ink/10", text: "text-v4-ink" },
  { name: "Forest", css: "bg-v4-forest", text: "text-v4-ivory" },
  { name: "Signal", css: "bg-v4-signal", text: "text-v4-ink" },
  { name: "Cobalt", css: "bg-v4-cobalt", text: "text-v4-white" },
  { name: "Coral", css: "bg-v4-coral", text: "text-v4-white" },
];

/**
 * /design-system — internal QA route, noindex, unlinked from nav/sitemap (B1_SCOPE).
 * Demonstrates every B1 primitive in isolation so tokens/motion/a11y/reduced-motion behaviour
 * can be sanity-checked without scrolling the full Home narrative.
 */
export default function DesignSystemPreview() {
  return (
    <div className="v4 font-v4-sans">
      <SEOHead title="V4 Design System (internal)" description="Internal QA route." noindex lang="en" />

      <StateField field="dark" className="px-6 py-16 md:px-10">
        <h1 className="font-v4-serif text-[length:var(--v4-text-hero)] text-v4-ivory">Design System</h1>
        <p className="mt-2 font-v4-sans text-v4-ivory/60">B1 — internal QA route, not public.</p>
      </StateField>

      <StateField field="dark" className="border-t border-v4-ivory/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ivory/50">Colour</SystemLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SWATCHES.map((s) => (
            <div key={s.name} className={`${s.css} ${s.text} flex h-24 flex-col justify-end rounded-lg p-3 font-v4-mono text-xs uppercase tracking-widest`}>
              {s.name}
            </div>
          ))}
        </div>
      </StateField>

      <StateField field="dark" className="border-t border-v4-ivory/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ivory/50">Typography</SystemLabel>
        <div className="space-y-6">
          <p className="font-v4-serif text-[length:var(--v4-text-hero)] text-v4-ivory">Hero / Instrument Serif</p>
          <EditorialStatement>Major statement / Instrument Serif</EditorialStatement>
          <p className="font-v4-sans text-[length:var(--v4-text-heading)] text-v4-ivory">Heading / Geist</p>
          <p className="font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/80">Body / Geist — the primary interface voice, used for paragraphs, navigation and buttons.</p>
          <SystemLabel className="text-v4-ivory/60">01 — System label / IBM Plex Mono</SystemLabel>
        </div>
      </StateField>

      <StateField field="dark" className="border-t border-v4-ivory/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ivory/50">Node states (Activation grammar)</SystemLabel>
        <div className="flex flex-wrap gap-10">
          <Node label="Dormant" state="dormant" idleBreathe />
          <Node label="Selected" state="selected" />
          <Node label="Connected" state="connected" />
          <Node label="Active" state="active" />
          <Node label="Outcome" state="outcome" size="lg" />
        </div>
      </StateField>

      <StateField field="dark" className="border-t border-v4-ivory/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ivory/50">Connection states</SystemLabel>
        <div className="flex items-center gap-6">
          <Node label="A" state="active" size="sm" />
          <Connection active orientation="horizontal" className="!w-24 !flex-none" />
          <Node label="B" state="dormant" size="sm" />
          <Connection active={false} orientation="horizontal" className="!w-24 !flex-none" />
          <Node label="C" state="dormant" size="sm" />
        </div>
      </StateField>

      <StateField field="light" className="border-t border-v4-ink/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ink/50">Living Growth System — 4-node primitive (design-system demo)</SystemLabel>
        <div className="rounded-2xl bg-v4-ink px-6 py-14">
          <LivingGrowthSystem endState="outcome" />
        </div>
      </StateField>

      <StateField field="dark" className="border-t border-v4-ivory/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ivory/50">
          Signature System — the real Home interaction (B1.1). Scroll through this block on
          desktop; on mobile it becomes a vertical activation spine; with reduced motion it
          renders fully resolved with no scroll dependency.
        </SystemLabel>
        <SignatureSystem />
      </StateField>

      <StateField field="light" className="border-t border-v4-ink/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ink/50">Provisional mark</SystemLabel>
        <ProvisionalMark>Unverified claims render like this, never as confident fact.</ProvisionalMark>
      </StateField>

      <StateField field="light" className="border-t border-v4-ink/10 px-6 py-16 md:px-10">
        <SystemLabel className="mb-6 block text-v4-ink/50">Buttons &amp; focus states</SystemLabel>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="rounded-full bg-v4-signal px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal">
            Primary CTA
          </a>
          <a href="#" className="rounded-full border border-v4-ink/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal">
            Secondary
          </a>
        </div>
        <p className="mt-4 font-v4-sans text-xs text-v4-ink/50">Tab to the buttons above to check the focus ring.</p>
      </StateField>
    </div>
  );
}
