# Home Implementation Contract — "The Business Awakens"

Date: 2026-09-30. B0.5 freeze deliverable. **Not code — the B1 specification for Home only.**
Supersedes the Home entry in `EXPERIENCE_ARCHITECTURE.md` where more detail is given here; that
document's other 7 pages are unaffected.

## What must land in the opening experience

- **WHAT** — LocalDominate connects strategy, brand, digital build and growth.
- **WHO** — primarily premium/DACH businesses and hospitality, credible internationally.
- **WHY** — disconnected agencies/channels create fragmented growth.
- **DIFFERENCE** — LocalDominate connects these functions into one operating system.
- **NEXT ACTION** — Start a Project, or explore Work.

All five must be inferable within the opening experience — not necessarily the literal first
screen (see §Above-the-fold), but before the visitor has to work for it.

---

## Home Story Arc

The requested default (Hero → Services cards → Portfolio cards → About → Blog → CTA) is rejected
— that's exactly the generic-template shape V4 is written against. The proposed 9-beat arc is
accepted with one structural refinement: beats 07 (Operating Model) and 08 (Intelligence) are
**compressed into a single beat**, because giving Approach and Insights their own full,
independent teaser sections on Home risks Home becoming a table of contents for the other 7
pages rather than its own transformation narrative — which would fail Home's own Purpose Test
("does it improve understanding/relevance/proof/trust/decision-making/conversion" — a full
Insights teaser mid-narrative does not clearly serve Home's specific job). A single combined
beat ("how it works, and what we know") keeps the throughline while still pointing to both pages.

**Final arc (8 beats):**

01 The Business → 02 The Problem → 03 The Connection → 04 The System Awakens → 05 The Evidence →
06 The Context → 07 The Operating Model + Intelligence (combined) → 08 The Invitation.

---

## Per-Section Specification

### 01 — The Business

- **Business purpose:** Establish the subject immediately — a real, single business, not an
  abstract concept — so the system built in later beats has a concrete referent.
- **Communication objective:** "This page is about a business like yours, specifically."
- **Content type:** Headline + one-line proposition + primary/secondary CTA (this section
  doubles as the above-the-fold screen — see that section for the literal contract).
- **Layout concept:** Left-aligned headline block on a dark field, generous top air (moodboard
  principle §A), Living Growth System in its State 0 (dormant) — a single unlabeled/faint node,
  not yet a diagram.
- **Visual concept:** Ink Black field, Warm Ivory headline type, one dormant Node signature
  element positioned to suggest it will become active (not centered/decorative — spatially
  "waiting").
- **Interaction:** None required to progress; scroll or an explicit "activate" affordance begins
  beat 02–04's sequence (see Signature Interaction).
- **Motion:** Minimal — the dormant node may have a very subtle idle state (slow opacity breathe)
  to read as "alive but waiting," not static wallpaper.
- **Proof:** None yet — this beat is framing, not evidence.
- **CTA:** Primary "Start a Project," secondary "Watch Showreel" (only if a real showreel exists
  — flag to Markus/Re before B1 ships this button; do not fabricate one).
- **Desktop behaviour:** Full viewport height, headline block ~40–50% of width, system space
  remaining.
- **Mobile transformation:** Headline stacks full-width; dormant node moves below the headline as
  a smaller, still-legible element rather than being cropped or hidden.
- **Reduced-motion version:** Dormant node renders static, no idle-breathe animation.
- **Approx. viewport height:** 100vh (the above-the-fold screen).
- **Intensity:** 6/10 (sets up the arc; doesn't spend the peak yet).
- **Technical complexity:** Low-medium (headline + one static/near-static node primitive).
- **Performance risk:** Low if the node is CSS/SVG-based, not a heavy canvas/WebGL element this
  early — LCP risk if the hero depends on a large deferred asset; keep the headline as real HTML
  text (never an image) so LCP isn't gated on the system graphic.
- **Accessibility risk:** Low — ensure the headline is a real `<h1>`, CTA buttons are real
  buttons/links with visible focus states, and the dormant node is marked decorative
  (`aria-hidden`) unless it conveys information text doesn't already carry.

### 02 — The Problem

- **Business purpose:** Name the fragmentation problem before proposing the solution, so the
  system in beat 04 lands as a resolution, not an unmotivated feature.
- **Communication objective:** "Disconnected agencies/channels are why growth feels fragmented."
- **Content type:** Editorial Interruption — a single large serif statement, short.
- **Layout concept:** Full-width statement, generous margins, possibly the first Ivory↔Ink State
  Change if beat 01 was Ink (or stays Ink if the "problem" reads better as the darker state —
  recommend staying Ink here, reserving the shift to Ivory for beat 04's resolution).
- **Visual concept:** Typography-led, no system diagram present — a deliberate visual "absence"
  (no connections shown) that itself communicates fragmentation.
- **Interaction:** None — this is a pause beat.
- **Motion:** None beyond a standard scroll-reveal of the statement.
- **Proof:** None — this is a problem statement, not a proof beat.
- **CTA:** None (no CTA competes with the statement).
- **Desktop behaviour:** Shorter viewport section, statement vertically centered.
- **Mobile transformation:** Identical structurally — this section is inherently mobile-friendly
  (text-only).
- **Reduced-motion version:** No change — already static by design.
- **Approx. viewport height:** 40–60vh.
- **Intensity:** 4/10 (deliberate low point — the "valley" before the climb).
- **Technical complexity:** Very low.
- **Performance risk:** Negligible.
- **Accessibility risk:** Low — ensure sufficient contrast for serif type at this size against
  the Ink field (verify against WCAG AA, not just visually).

### 03 — The Connection

- **Business purpose:** Introduce the four functions (Strategy, Brand, Build, Growth) as
  distinct-but-linkable, setting up beat 04's assembly.
- **Communication objective:** "These four things aren't separate services — they're meant to
  connect."
- **Content type:** Four labeled Node-signature elements (System Label typography) appearing with
  faint, not-yet-active connections between them.
- **Layout concept:** Four nodes in a loose arrangement (not a rigid grid — moodboard asymmetry
  principle), connections drawn faint/dormant.
- **Visual concept:** Nodes in "selected" state (per the Activation grammar, §B.8 of
  `DESIGN_SYSTEM_PLAN.md`) — outlined, not yet filled with Signal Green.
- **Interaction:** Optional hover/tap per node reveals a one-line definition (progressive
  disclosure, not required to proceed).
- **Motion:** Nodes and connections fade/draw in on scroll entry — a single, purposeful reveal,
  not a looping animation.
- **Proof:** None yet.
- **CTA:** None.
- **Desktop behaviour:** Full-width canvas, four nodes spaced across it.
- **Mobile transformation:** Four nodes stack vertically with connections drawn as simple
  vertical links between them (per the Connection signature's mobile rule).
- **Reduced-motion version:** Nodes and connections render immediately in their "selected" state,
  no draw-in animation.
- **Approx. viewport height:** 70–90vh.
- **Intensity:** 6/10 (building toward the peak).
- **Technical complexity:** Medium (first real use of the Node/Connection primitives together).
- **Performance risk:** Low-medium — keep as SVG/CSS, not canvas, at this stage; four static
  elements don't need WebGL.
- **Accessibility risk:** Medium — the four functions must be readable/navigable without relying
  on hover alone (keyboard focus must reveal the same one-line definitions; content must not be
  hover-only per the master prompt §21's explicit rule).

### 04 — The System Awakens (peak beat)

- **Business purpose:** Deliver the page's signature moment — this is the beat that makes the
  Memory Test pass or fail for the whole page.
- **Communication objective:** "Watch one business become a complete, connected system."
- **Content type:** The full Signature Interaction (see dedicated section below) — this beat
  *is* that interaction.
- **Layout concept:** Full-bleed system canvas, likely the Ivory↔Ink State Change resolving to
  Ivory here (the "clarity achieved" state) if Ink was used for beats 01–03 — a genuine narrative
  state change, not decoration (per the State Change signature's own rule).
- **Visual concept:** All four nodes activate (Signal Green) in sequence, connections light and
  strengthen, culminating in a visibly "whole" connected system.
- **Interaction:** Visitor-controlled pacing preferred (scroll-driven or an explicit "activate"
  control) over autoplay — per §11's requirement for defined user control per state.
- **Motion:** The heaviest motion budget on the page — this is where it's spent, deliberately,
  once, rather than diluted across every section.
- **Proof:** None directly here — this beat is the transformation itself; proof follows in beat
  05.
- **CTA:** None mid-sequence (let the moment land before asking for action).
- **Desktop behaviour:** Full viewport, potentially pinned/scroll-scrubbed for the sequence's
  duration.
- **Mobile transformation:** Progressive vertical activation (per
  `EXPERIENCE_ARCHITECTURE.md`) — each node activates as it scrolls into view rather than as a
  spatial canvas event.
- **Reduced-motion version:** Renders the fully-activated end-state system directly, with the
  seven/eight state labels (per §11) shown as a static numbered list beside or below it — the
  visitor still gets the *information* (what the states are), just not the animated build.
- **Approx. viewport height:** 100–150vh (may warrant extra scroll length to give the sequence
  room, if scroll-scrubbed).
- **Intensity:** 10/10 (the page's peak — matches Home's 9/10 page-level rating with this single
  beat carrying most of that weight).
- **Technical complexity:** High — this is the page's main engineering investment.
- **Performance risk:** **Highest risk on the page.** Must not block LCP/CWV for the rest of the
  page; should be code-split and lazy-mounted so it doesn't delay beat 01's render, and should
  degrade gracefully (static end-state) on low-end devices, not just on explicit
  reduced-motion preference.
- **Accessibility risk:** High if mishandled — must have a complete non-visual equivalent (the
  reduced-motion static list is also the accessibility fallback, not just a preference toggle);
  no information here may depend solely on animation, hover, or color per §21.

### 05 — The Evidence

- **Business purpose:** Ground beat 04's abstraction in something real, immediately, before
  skepticism sets in.
- **Communication objective:** "This isn't theory — here's who it's true for."
- **Content type:** Trusted-by proof strip (real client names) + 2–4 real stats (Proof Object
  signature).
- **Layout concept:** Horizontal strip, restrained (moodboard density principle — a handful of
  names/numbers, not a wall of logos).
- **Visual concept:** System Label typography for the stat labels, Editorial/display type for the
  numbers themselves.
- **Interaction:** None required; names/logos may link to relevant Work cases (light
  cross-page linking, not full cross-page *state*).
- **Motion:** Simple entrance reveal only.
- **Proof:** Layer 5 (Client Evidence) + Layer 3 (Process Evidence, via stats) — **every number
  here must be real and confirmable**; nothing carried over from the current `/preview/home-v2`
  draft's placeholder stats (4+/50+/128%/1) without verification (see §Audit below).
- **CTA:** None — proof beat, not a conversion beat.
- **Desktop behaviour:** Single-row horizontal strip.
- **Mobile transformation:** Wraps to 2 columns or a horizontally scrollable strip; never
  crushes text illegibly small.
- **Reduced-motion version:** No change — reveal animation removed, content appears directly.
- **Approx. viewport height:** 30–40vh.
- **Intensity:** 5/10 (a controlled step down from the peak, not another climb).
- **Technical complexity:** Low.
- **Performance risk:** Low.
- **Accessibility risk:** Low — ensure logo images have real alt text (client names), not decorative-only.

### 06 — The Context

- **Business purpose:** Signal breadth without diluting focus — "different businesses, same
  underlying system," bridging to Industries/Work.
- **Communication objective:** "Whatever your specific business is, this system adapts to it."
- **Content type:** A compact teaser (not a full grid) — matches the existing `/preview/home-v2`
  draft's "Different businesses. Same growth system." card concept structurally, see §Audit.
- **Layout concept:** One contained card/panel, not a multi-item grid — a single strong
  statement with one clear link out to Work, not a preview gallery competing with Work's own job.
- **Visual concept:** Warm Ivory or a contained card on Ink — a visual "pause" element, lower
  visual weight than beats 04/05.
- **Interaction:** Single link/CTA to Work ("See the Work").
- **Motion:** None beyond standard entrance reveal.
- **Proof:** None directly (defers proof-browsing to Work itself).
- **CTA:** Secondary — "See the Work" (arrow-style, not a filled button, to keep it subordinate to
  the primary CTA in beat 08).
- **Desktop behaviour:** Single contained panel, generous surrounding space.
- **Mobile transformation:** Same panel, full-width, stacked.
- **Reduced-motion version:** No change needed.
- **Approx. viewport height:** 25–35vh.
- **Intensity:** 4/10 (another controlled valley).
- **Technical complexity:** Very low.
- **Performance risk:** Negligible.
- **Accessibility risk:** Low.

### 07 — The Operating Model + Intelligence (combined)

- **Business purpose:** Reframe from "another agency" to "an operating system," and gesture at
  the depth of knowledge behind it, without duplicating Approach's or Insights' full content.
- **Communication objective:** "This runs on a real method, backed by real expertise — go deeper
  on either if you want."
- **Content type:** The existing three-pillar reframe ("You don't need another agency. You need a
  growth system" + Strategy first / AI-powered / Measurable results, per the current draft) —
  reused structurally — plus one small addition: a single link out to Insights alongside the
  existing implicit link to Approach, so both destinations are reachable from this one beat
  without either getting its own dedicated section.
- **Layout concept:** Three-column pillar grid (existing draft's structure holds up — see
  §Audit KEEP).
- **Visual concept:** Icon + System Label + one-line body per pillar; restrained, matches
  moodboard density.
- **Interaction:** None required; pillar icons may be Node-signature-styled for brand
  consistency rather than generic Lucide icons (refinement over the current draft).
- **Motion:** Standard entrance reveal only.
- **Proof:** Layer 3 (implicit — the pillars themselves are a process claim, should eventually
  link to Approach as their substantiation).
- **CTA:** Two lightweight text links ("See Our Approach", "Explore Insights") — neither
  competing with beat 08's primary CTA.
- **Desktop behaviour:** Three-column grid.
- **Mobile transformation:** Stacks to one column.
- **Reduced-motion version:** No change needed.
- **Approx. viewport height:** 40–55vh.
- **Intensity:** 5/10.
- **Technical complexity:** Low (structurally exists already in the current draft).
- **Performance risk:** Negligible.
- **Accessibility risk:** Low.

### 08 — The Invitation

- **Business purpose:** Convert. Final, unambiguous call to action.
- **Communication objective:** "Start building your system."
- **Content type:** Restated proposition (short) + primary CTA, possibly a secondary "Talk to us"
  path.
- **Layout concept:** Full-width closing statement, generous space, single clear action —
  mirrors beat 01's confidence, bookending the arc.
- **Visual concept:** Could reprise the Ivory↔Ink state one final time, or hold the resolved
  Ivory state from beat 04 through to the end — recommend holding, so the arc *resolves* into
  light rather than oscillating unnecessarily (matches the State Change signature's "sparingly,
  meaningfully" rule).
- **Interaction:** None beyond the CTA itself.
- **Motion:** Minimal.
- **Proof:** None — this is pure conversion, proof was already delivered in beat 05.
- **CTA:** Primary "Start a Project" (large, Signal Green fill — the page's final and clearest
  use of the Signal signature).
- **Desktop behaviour:** Centered or left-aligned closing block, full viewport or near it.
- **Mobile transformation:** Full-width stack, CTA remains thumb-reachable (not buried above a
  fold requiring scroll-back).
- **Reduced-motion version:** No change needed.
- **Approx. viewport height:** 50–70vh.
- **Intensity:** 7/10 (a real but controlled second peak — decisive, not spectacular).
- **Technical complexity:** Very low.
- **Performance risk:** Negligible.
- **Accessibility risk:** Low — CTA must be a real link/button, keyboard-reachable, with a
  clear focus state.

---

## Above-the-Fold Contract

Balances clarity + originality — the proposition is never hidden behind abstraction.

- **Headline:** A direct statement of the WHAT + DIFFERENCE (per the contract's opening section)
  — e.g. structurally like the current draft's "Great Ideas Build Real Businesses," but should be
  reviewed against whether it actually communicates *connected systems* specifically, or reads as
  generic agency inspiration. Recommend sharpening toward the DIFFERENCE (one connected system)
  rather than a purely aspirational line — **flag as copy to workshop with Markus/Re before B1
  finalizes it**, not to be locked from this document alone.
- **Supporting proposition direction:** One sentence naming the four connected functions
  (Strategy/Brand/Build/Growth) — the current draft's subhead already does roughly this and can
  carry forward structurally.
- **Primary CTA:** "Start a Project."
- **Secondary CTA:** "Watch Showreel" **only if a real showreel exists** — otherwise replace with
  "See the Work" or drop the secondary CTA entirely rather than ship a non-functional promise.
- **First system state:** State 0 (Dormant) — a single, quiet, waiting node. Not yet the full
  diagram — that's earned across beats 02–04.
- **Initial animation concept:** Minimal idle-breathe on the dormant node only; the real
  animation budget is reserved for beat 04.
- **Navigation behaviour:** Slim, low-chrome top bar (moodboard principle) — wordmark, the 7
  other page names, one filled-pill primary CTA; recedes rather than competing with the hero.
- **First proof/reassurance signal:** Deliberately **not** on this screen — per the arc, proof
  arrives at beat 05, after the transformation has been shown, not before. The above-the-fold
  screen's reassurance comes from clarity and craft quality itself, not from a client logo strip
  competing for attention with the headline.
- **Desktop composition:** Left-aligned headline block (~40–50% width), dormant node
  positioned in the remaining space, slim nav above, primary/secondary CTA directly under the
  headline.
- **Mobile composition:** Full-width headline stack, dormant node repositioned below (smaller,
  still legible), CTAs full-width or prominent, nav collapses to wordmark + menu affordance.

---

## Home Signature Interaction — State Definitions

Rejecting a blind copy of the suggested 8-state sequence in favor of a **6-state** version that
maps directly onto the four functions named in the master prompt's own WHAT statement (Strategy,
Brand, Build, Growth) plus a dormant start and a resolved end — this is a stronger semantic match
to what Home is actually supposed to communicate than the more granular Insight/Position/Demand/
Data breakdown, which risks over-explaining mechanics that belong to Approach, not Home.

| State | Name | Visual change | Semantic meaning | Trigger | Timing | User control | Reduced-motion | Mobile |
|---|---|---|---|---|---|---|---|---|
| 0 | Dormant | Single faint outlined node, no label active | "A business exists, unconnected" | Page load | Static until triggered | N/A | Renders as-is | Same, smaller/repositioned |
| 1 | Strategy activates | Node 1 fills Signal Green, label "STRATEGY" appears | "Direction is set" | Scroll into beat 03/04 or explicit activate control | ~400–600ms fill | Visitor can scroll past without waiting (no forced hold) | Node renders pre-filled | Activates on vertical scroll position |
| 2 | Brand connects | Node 2 fills + connection line 1→2 draws | "Identity forms, linked to strategy" | Sequential, ~200ms after state 1 or next scroll increment | Connection draw ~300ms | Same as above | Connection renders static, already drawn | Same, vertical connection |
| 3 | Build connects | Node 3 fills + connection 2→3 draws | "The work gets made, on-strategy, on-brand" | Sequential | Same pacing | Same | Same | Same |
| 4 | Growth connects | Node 4 fills + connection 3→4 draws, loop closes (4→1 faint return line) | "Growth feeds back into strategy — it's a system, not a funnel" | Sequential | Same pacing | Same | Same | Same |
| 5 | System active (outcome) | All 4 nodes + connections at full Signal Green, subtle unified "pulse" once | "One connected operating system, live" | Automatic on completing state 4 | One-time pulse, ~600ms, then settles | Visitor can revisit/replay via a small control if desired (not required) | Renders as fully-connected static end-state directly, no pulse | Same, full system visible after scrolling through all 4 |

**This must tell a business story, not a particle story:** every visual change above is tied to a
named business function (Strategy/Brand/Build/Growth) becoming real and connected — there is no
state in this table whose trigger or meaning is "an animation happens because it looks
impressive." If B1 implementation drifts toward decorative particle/node effects not tied to one
of these five named states, that is itself a Purpose Test failure per V4's own criteria.

---

## Audit: `/preview/home-v2` against V4

Reviewed ruthlessly, no protection for existing work.

### KEEP

- **Overall section order/instinct** (hero → trusted-by → stats/process → context teaser →
  three-pillar reframe) — structurally close to the accepted 8-beat arc's beats 01/05/06/07,
  reused as scaffolding, not as final content.
- **The three-pillar reframe** ("You don't need another agency. You need a growth system" +
  Strategy first / AI-powered / Measurable results) — conceptually sound, maps directly onto
  beat 07, keep the idea and restructure the visual treatment to use Node-signature icons instead
  of generic Lucide icons.
- **The restrained copy length and section pacing** — genuinely close to the moodboard's density
  principle; don't over-fill in the rebuild.

### ADAPT

- **The process-steps row** (01 Strategy / 02 Brand / 03 Build / 04 Launch / Grow) — close to
  useful but mismatched against the master prompt's own WHAT statement (Strategy/Brand/Build/
  **Growth**, not "Launch"); redefine to match the accepted Signature Interaction's four states
  exactly, and make it the *visible label track* for that interaction rather than a decorative
  static row sitting apart from it.
- **The stats row (4+/50+/128%/1)** — the *placement* (beat 05 equivalent) is right; the
  *numbers* must be verified as real before B1 ships them (per Proof Object signature — no
  fabricated stats), and the layout should use the System Label + display-number treatment
  defined in §B.5/§B.7 of `DESIGN_SYSTEM_PLAN.md` rather than plain bold text.
- **The "Different businesses, same growth system" panel** — adapt into beat 06 exactly as
  specified above (single contained panel, one link out), current version is already close.

### REJECT

- **The color values themselves** (`#0a0a0a` background, `#d4ff3d` accent, arbitrary Tailwind
  literals) — arbitrary, not V4 tokens. Reject and rebuild against the real palette (`#0A0A09` /
  `#F4F0E7` / `#B7F52A` / `#17352B` / `#315CFF` / `#FF5A3D`) once Design Foundation tokens exist.
- **The typography** (system-default sans throughout) — no Instrument Serif, no IBM Plex Mono
  distinction; reject, rebuild with the two/three-voice type system once fonts are loaded in
  Design Foundation.
- **The complete absence of the Living Growth System** — the draft has no node/connection
  primitive at all; it is, structurally, a generic dark SaaS-template hero + stats + pillars
  layout. This is the draft's central failure against V4: it would fail the Transfer Test itself
  (this exact layout could be any dark-mode SaaS product's homepage by swapping labels) and the
  Memory Test (nothing in it is memorable the next day). **Reject the file as a foundation**;
  treat it as disposable scaffolding for section order only, per the KEEP items above.
- **Generic Lucide icons for the three pillars** — reject in favor of Node-signature-consistent
  iconography once that primitive exists.

**Overall verdict: do not build forward from `/preview/home-v2`'s code.** Its section *sequence*
instinct is a reasonable starting scaffold (see KEEP), but its visual execution fails V4 on
exactly the terms V4 warns about (arbitrary color, no signature system, a template that could be
anyone's homepage). B1's real Home page should be written fresh against this contract and the
Design Foundation tokens, reusing section-order intuition only, not the file's markup or styling.
