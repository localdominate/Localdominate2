# Experience Architecture — Implementation Contract for the 8 Pages

Date: 2026-09-30. Turns V4 / the Master Initialisation Prompt into a build contract, not a
restatement. Written for B0.5 freeze — **nothing here is built yet.** No page in this document
exists in code except the informal `/preview/home-v2` draft built before this contract existed
(see note at the end).

> Note on this document's origin: the request that authorised this document was cut off
> mid-field (the eighth field name arrived as "DES" with nothing after it). The seven fields
> that arrived complete — Purpose, Primary Visitor Question, Unique Mental Model, Signature
> Moment, Page Composition, Interaction Model — are used for every page below, plus the fuller
> field set the master prompt's own §17/§H already specified (proof requirement, objection
> addressed, mobile equivalent, reduced-motion equivalent, CTA, persistent-state opportunity,
> SEO considerations, implementation complexity, dependencies, failure condition), so nothing
> from the original spec is lost. If "DES" was meant to introduce a different field (e.g. a
> dedicated "Design Language Notes" section), say so and this document gets a one-field pass,
> not a rewrite.

---

## 01 — HOME · "The Business Awakens"

- **Purpose:** Convert a cold visitor's attention into "this agency understands businesses like
  mine, connected end-to-end" within the first screen.
- **Primary visitor question:** "What is this, and is it for a business like mine?"
- **Unique mental model:** Transformation.
- **Signature moment:** One node labelled YOUR BUSINESS progressively grows connections and
  becomes a complete system live on scroll/interaction — the visitor watches assembly happen,
  not a static diagram.
- **Page composition:** Hero (headline + the awakening system, not a static graphic) → Trusted-by
  proof strip → "A complete system, measurable impact" (the process spine + real stats) →
  entry into Work (a taste, not the full Evidence Room) → the three-pillar reframe ("you don't
  need another agency") → primary CTA.
- **Interaction model:** The system-awakening is the one heavy interaction on this page; scroll
  or a deliberate "activate" affordance drives it forward, not passive autoplay that fights
  reading speed.
- **Proof requirement:** Layer 3 (Process Evidence) and Layer 5 (Client Evidence, logos) — no
  invented stats; every number shown must trace to something Markus/Re can substantiate.
- **Objection addressed:** "Agencies are generic / templated." Countered by watching one
  specific business become a specific system, not a slogan.
- **Mobile equivalent:** Progressive vertical activation — same node-to-system idea, but each
  connection reveals on scroll position rather than a spatial canvas.
- **Reduced-motion equivalent:** The end-state of the system (fully connected) renders directly,
  with the stages shown as a static numbered list instead of an animated build-up.
- **CTA:** Start a Project (primary), Watch Showreel (secondary, only if a real showreel exists —
  flag if not, do not fabricate one).
- **Persistent-state opportunity:** None required on Home itself; it's the entry point, not a
  context-consumer.
- **SEO considerations:** This replaces the current `/` route, which is the highest-value URL on
  the site — canonical, title, meta description, H1 and JSON-LD changes here need Markus's
  explicit sign-off per Hard Rule #1, even though the *visual* redesign is pre-approved.
- **Implementation complexity:** High (one of the three heaviest-interaction pages per §18).
- **Dependencies:** Design Foundation (tokens, Living Growth System primitive) must exist first.
  No Supabase dependency.
- **Failure condition:** If the animated system reads as decorative rather than explaining what
  the agency actually does, it fails the Purpose Test — cut it back to something legible in the
  first 3 seconds.

---

## 02 — WORK · "The Evidence Room"

- **Purpose:** Convert "I want proof this works" into specific, relevant evidence — not a
  browsable trophy case.
- **Primary visitor question:** "Can you prove this works for a business like mine?"
- **Unique mental model:** Investigation.
- **Signature moment:** Asking "What do you want proof of?" and watching the evidence
  re-sort around the answer, rather than filtering a static grid.
- **Page composition:** Opening question + selector (industry / problem type) → evidence
  sequence that reorders/re-weights per selection (case narrative, not just a logo + stat card)
  → "view all projects" escape hatch for browsing without answering the question.
- **Interaction model:** Selection state drives content re-ordering, ideally reusing the same
  cross-page context state described in §16 of the master prompt (a Services selection can
  pre-filter Work).
- **Proof requirement:** Layers 1–2 (Case + Deliverable Evidence) primarily. Every project shown
  needs confirmed publication rights — do not include Kempinski/Dadication/Klovers/SaveSpace
  content until that's verified (the rebuild plan already flags this).
- **Objection addressed:** "Case studies are generic / cherry-picked." Countered by
  visitor-directed relevance instead of an agency-curated highlight reel.
- **Mobile equivalent:** Problem-first filter (a compact selector) + linear narrative evidence
  sequence — not a re-implementation of a desktop grid at small size.
- **Reduced-motion equivalent:** Selection still re-orders content; only the transition between
  states loses animation, not the mechanism itself.
- **CTA:** "Start a Project" seeded with the problem type just selected (cross-page intelligence,
  §16), plus a per-case "View Case Study" secondary action.
- **Persistent-state opportunity:** The selected problem/industry should feed Start a Project's
  pre-fill, session-scoped only (no server write required).
- **SEO considerations:** New page/route; needs its own canonical, title, meta, and — since
  individual case studies may deserve their own indexable URLs — a decision on whether cases are
  sub-routes (`/work/<case>`) or in-page sections (affects sitemap).
- **Implementation complexity:** Medium-high (content-modelling effort for toggleable
  case data > visual complexity).
- **Dependencies:** Confirmed client publication rights (blocking for real content; the page
  shell is not blocked). Design Foundation.
- **Failure condition:** If it functions as a conventional filterable portfolio grid with a
  reskin, it fails the Transfer Test.

---

## 03 — SERVICES · "Build Your Growth System"

- **Purpose:** Turn a vague need ("we need more X") into a coherent, named growth architecture
  the visitor built themselves.
- **Primary visitor question:** "What does my business actually need, and what would that cost
  in effort/time?"
- **Unique mental model:** Configuration.
- **Signature moment:** Selecting a need (More Leads / Better Brand / New Website / …) and
  watching a growth-system diagram assemble in response — the visitor's own answer becomes a
  visible structure.
- **Page composition:** "What does your business need right now?" selector (multi-select,
  including "I'm not sure yet") → tailored growth-system visualization (reusing the Living
  Growth System primitive from Home, this time visitor-configured rather than pre-built) →
  capability grid grounding the abstraction in concrete deliverables → CTA.
- **Interaction model:** This is the heaviest interactive build on the site alongside Home and
  Start a Project (§18) — selection state directly drives a generated diagram, not a
  pre-rendered one swapped by CSS visibility.
- **Proof requirement:** Layer 3 (Process Evidence) — the generated system must map to real
  service capabilities that are actually delivered, not aspirational categories.
- **Objection addressed:** "I don't know what I need / this will turn into a generic service
  catalogue." Countered by the visitor naming their own need first.
- **Mobile equivalent:** Vertical connected system with tap-to-expand detail per node, not a
  shrunk desktop canvas.
- **Reduced-motion equivalent:** Selecting a need still produces the assembled system as a
  static, immediately-rendered diagram.
- **CTA:** "Start a Project" carrying the exact generated system into the configurator (§16's
  worked example — this is the page that produces that context).
- **Persistent-state opportunity:** The primary one on the site — this is where visitor context
  is *created*, to be consumed by Work and Start a Project. Session/local state only, visitor
  can reset.
- **SEO considerations:** New route; if goal combinations are meaningfully different search
  intents (e.g. "more leads" vs "new website" as separate landing contexts), decide now whether
  those need distinct indexable URLs or stay one page with client-side state — affects whether
  this cannibalises or complements the existing programmatic-SEO pages (city × industry
  landers), which are explicitly out of scope for this rebuild (see `LOCALDOMINATE_REBUILD_PLAN.md`).
- **Implementation complexity:** High — one of the three flagged heaviest pages.
- **Dependencies:** Design Foundation + the Living Growth System primitive built once, reused
  from Home. No Supabase dependency (state is client-side per §16's privacy requirement).
- **Failure condition:** If "I'm not sure yet" is a dead end rather than a guided fallback, it
  fails the visitor who most needs the page's help.

---

## 04 — INDUSTRIES · "Enter Your World"

- **Purpose:** Make each of the 4 primary audience segments (Hospitality, Consumer Brands,
  Startups & Scaleups, Premium Businesses) feel specifically addressed without building 4
  separate sites.
- **Primary visitor question:** "Do you understand businesses in my specific world?"
- **Unique mental model:** Context Shift.
- **Signature moment:** Switching the world-tab and having terminology, imagery, and
  recommended capabilities shift together — a context change, not a tab-swapped copy block.
- **Page composition:** World selector (4 tabs) → world-specific hero framing → world-specific
  problem/promise pairing → world-specific proof (pulled from Work, filtered) → world-specific
  capability emphasis → CTA into that world's natural Services entry point.
- **Interaction model:** Tab selection is lightweight (no heavy canvas); the "shift" is carried
  by content and imagery changing meaningfully, not by animation complexity.
- **Proof requirement:** Layer 5/6 (Client + Thought Evidence) scoped per world — do not show
  hospitality proof under Startups.
- **Objection addressed:** "This agency doesn't understand my specific industry." Countered by
  visibly different substance per world, not just a recolored template (this is the page most
  at risk of failing the Transfer Test if built carelessly — guard against it explicitly).
- **Mobile equivalent:** Lightweight contextual transition — a simple tab/segment control, full
  content re-render, no parallax/globe-style device needed.
- **Reduced-motion equivalent:** Identical to default; this page's signature is content
  substitution, not motion, so `prefers-reduced-motion` should barely change anything.
- **CTA:** World-appropriate framing of "Start a Project" / "Explore [World]".
- **Persistent-state opportunity:** Selected world feeds Services/Work filtering (§16).
- **SEO considerations:** If each world is meant to rank independently (likely, given DACH
  hospitality is the primary audience per §10), each needs its own canonical URL
  (`/industries/hospitality` etc.), not just client-side tab state — flag this as a decision
  needed before B1, since it changes routing architecture, not just UI.
- **Implementation complexity:** Medium.
- **Dependencies:** Work page's case data (for cross-filtering) ideally exists first, but can be
  stubbed.
- **Failure condition:** Fails the Transfer Test if swapping the active tab only changes a
  headline and hero image with everything else identical.

---

## 05 — APPROACH · "The Growth Engine"

- **Purpose:** Replace "seven services" positioning with "one operating system" positioning —
  make the mechanics of how work actually happens legible and credible.
- **Primary visitor question:** "How does this actually work, step by step?"
- **Unique mental model:** Mechanics.
- **Signature moment:** The seven-stage engine (Diagnose → Position → Create → Build → Launch →
  Grow → Scale) rendered as one connected mechanism, ending on the explicit statement "not
  seven services, one operating system."
- **Page composition:** Framing statement → the seven-stage connected chain (this is the least
  novel of the 8 pages by design — §18 explicitly keeps it lighter-weight than Home/Services) →
  per-stage detail on demand → closing statement.
- **Interaction model:** Tap/click a stage for detail; the chain itself can be mostly static —
  restraint is explicitly requested here (§18: "do NOT turn every page into another WebGL
  application").
- **Proof requirement:** Layer 3 (Process Evidence) — this page *is* the process evidence layer,
  made visible.
- **Objection addressed:** "How do I know this isn't just a pitch deck / that execution is
  real?" Countered by specificity per stage.
- **Mobile equivalent:** Seven-stage connected vertical journey — same chain, vertical instead
  of horizontal/radial.
- **Reduced-motion equivalent:** Chain renders fully static by default already (low-motion by
  design); no special-case needed beyond disabling any stage-to-stage transition animation.
- **CTA:** "Start a Project" or "See it in Work" (cross-link to a case that demonstrates the
  engine end-to-end).
- **Persistent-state opportunity:** None required.
- **SEO considerations:** New route, own canonical/title/meta — lower stakes than Home/Services
  since it's process-explanation content, not a primary conversion entry point.
- **Implementation complexity:** Medium-low (explicitly not one of the 3 heaviest pages, §18).
- **Dependencies:** Design Foundation only.
- **Failure condition:** Fails the Memory Test if a visitor couldn't restate the seven stages
  or the "one operating system" line the next day.

---

## 06 — INSIGHTS · "The Intelligence Network"

- **Purpose:** Make ~188 existing articles (see `CONTENT_SOURCE_MAP.md` — corrects the "230"
  figure floated in the master prompt) discoverable and credible as thought leadership, without
  touching a single existing slug, canonical, or metadata value.
- **Primary visitor question:** "Does this agency actually know what it's talking about, and can
  I find the specific thing I need?"
- **Unique mental model:** Exploration.
- **Signature moment:** A visual sense of how the agency's knowledge connects (topics,
  relationships between articles) that *augments* — never replaces — conventional search,
  categories, and topic hubs.
- **Page composition:** Search + category/topic entry points (must work with JS disabled or
  slow-loading, since this is the indexable-content backbone) → optional visual network layer as
  progressive enhancement → article list/grid honoring existing categorization
  (`contentCategorization.ts`) and internal linking (`internalLinkRegistry.ts`).
- **Interaction model:** Search and filter are the load-bearing interaction; the network
  visualization is additive and must degrade gracefully to a plain list.
- **Proof requirement:** Layer 6 (Thought Evidence) — the 188-article body itself is the proof;
  nothing to fabricate here.
- **Objection addressed:** "Agency content is thin / templated." Countered by genuine breadth
  (188 articles) made easy to navigate instead of dumped in a flat blog list.
- **Mobile equivalent:** Search/topic exploration as the primary mode; the network graph is
  explicitly optional on mobile per §20.
- **Reduced-motion equivalent:** Identical functionally — the network layer, if present, is
  already optional/progressive, so reduced-motion just removes its animation, not its data.
- **CTA:** Contextual — "Start a Project" appears as a secondary path, this page's job is
  trust-building and retention, not direct conversion.
- **Persistent-state opportunity:** None required; could log which topics a visitor explored to
  lightly weight Start a Project's context, but this is optional and must follow the same
  no-covert-profiling rule as §16.
- **SEO considerations:** **Highest-risk page in the whole rebuild for SEO** — it wraps 188
  articles whose URLs, canonicals, and sitemap entries must not change (Hard Rule #1/#2). Any
  new "Insights" landing/hub route must be *additive* (new URL that links to existing article
  URLs), never a replacement route that could shadow or redirect them.
- **Implementation complexity:** Medium for the page shell; the real work is the content
  migration discipline (zero regressions across 188 articles), not the visual design.
- **Dependencies:** `CONTENT_SOURCE_MAP.md` (this batch) as the accurate inventory; existing
  `scripts/seo-check.mjs` regression check must pass before/after.
- **Failure condition:** Any change that breaks an existing article URL, canonical, or sitemap
  entry — this is an automatic, non-negotiable fail regardless of how the new page looks.

---

## 07 — ABOUT · "Inside the Agency"

- **Purpose:** Build trust through operational transparency instead of a conventional team/about
  page.
- **Primary visitor question:** "Who actually does this work, and how much of it is real
  expertise vs. automated/outsourced?"
- **Unique mental model:** Transparency.
- **Signature moment:** Walking through one real project (e.g. "Build a New Hotel Website") as a
  Human / AI+Human / AI-Accelerated / Human QA handoff sequence — showing the actual division of
  labour, not a generic "meet the team" grid.
- **Page composition:** Opening statement ("AI doesn't replace our judgement, it expands what we
  can execute") → the example-project handoff timeline (7 steps per the master prompt) → what
  this means for outcomes (quality control framing) → CTA.
- **Interaction model:** Scroll-driven handoff sequence; no configurator-level interactivity
  needed.
- **Proof requirement:** Layer 4 (Human Evidence) — must describe how the agency *actually*
  works; do not fabricate a workflow that isn't true. Flag to Markus/Re that this page's content
  needs their direct input (it can't be inferred from the codebase).
- **Objection addressed:** "Is this just an AI-generated agency with no real expertise behind
  it?" — directly, by naming where human judgement sits.
- **Mobile equivalent:** Scroll-driven handoff timeline, already inherently mobile-friendly
  (linear sequence).
- **Reduced-motion equivalent:** Timeline steps render as a static ordered list.
- **CTA:** "Start a Project" or "See Our Approach" (cross-link to page 05).
- **Persistent-state opportunity:** None required.
- **SEO considerations:** New route, standard canonical/title/meta — moderate priority (trust
  page, not primary conversion or primary organic-traffic target).
- **Implementation complexity:** Low-medium (content-gathering is the bottleneck, not
  engineering).
- **Dependencies:** Real input from Markus/Re on the actual human/AI division of labour — this
  cannot be authored from repository inspection alone.
- **Failure condition:** Fails the Brand Test if it reads as a generic "Humans + AI" marketing
  trope rather than a specific, credible account of this agency's actual process.

---

## 08 — START A PROJECT · "Your System Is Already Here"

- **Purpose:** Convert accumulated context (from Services/Work/Industries) into a submitted,
  qualified project inquiry with minimal re-entry of information already given.
- **Primary visitor question:** "How do I actually start, and do I have to repeat everything I
  already told this site?"
- **Unique mental model:** Continuation.
- **Signature moment:** Arriving to find the configurator already pre-filled from earlier
  choices, with the explicit line "We've already built the start of your system."
- **Page composition:** Goal → Industry → Needs → Budget → Timeline → Context → Summary →
  Contact, each step editable regardless of pre-fill source; persistent Quick Contact escape
  hatch available at every step for visitors who don't want the full flow.
- **Interaction model:** Multi-step form/configurator; the "intelligence" is in what's
  pre-populated from session state set on Services/Work/Industries, not in novel per-step
  interaction design.
- **Proof requirement:** None new — this page converts, it doesn't need to persuade further.
- **Objection addressed:** "Starting feels like a cold, generic contact form." Countered by
  visible continuity from whatever the visitor already explored.
- **Mobile equivalent:** Compact step flow + persistent Quick Contact, explicitly not a
  full-canvas configurator on small screens (§20).
- **Reduced-motion equivalent:** Functionally identical; only step-transition animation is
  affected.
- **CTA:** The page's entire content *is* the CTA; final step is submission.
- **Persistent-state opportunity:** The primary consumer of state set by Services/Work/Industries
  (§16) — reads session/local state, never required for the page to function (must work
  perfectly with zero prior context, per §16).
- **SEO considerations:** Should likely be `noindex` or low-priority in the sitemap (it's a
  conversion utility, not organic-search content) — confirm intent before B1 since this differs
  from the other 7 pages.
- **Implementation complexity:** High — one of the three heaviest pages (§18), specifically
  because of the pre-fill/continuity logic and eventual Supabase write.
- **Dependencies:** **Gated on Supabase migration verification for the actual submit-to-backend
  step** (per the master prompt's own instruction, §45, and `LOVABLE_EXIT_PLAN.md`). The UI and
  client-side flow can be built and demoed without a working submit target; wiring the real
  write must wait.
- **Failure condition:** If context genuinely gathered elsewhere on the site is not reflected
  here, it fails the Purpose Test — the entire "Continuation" mental model collapses to a
  generic form.

---

## Cross-cutting notes

- **Shared primitive:** the Living Growth System visualization is built once (Design Foundation
  phase) and reused with different data/state across Home, Services, Work, and Industries — per
  the master prompt's explicit permission to share "the underlying Living Growth System engine"
  without that making the pages feel templated (each page uses it for a different job: showing,
  building, filtering, contextualizing).
- **Routing decisions still open, needed before B1:** whether Industries gets per-world URLs,
  whether Work gets per-case URLs, whether Start a Project is indexed at all. These are small
  decisions with real SEO/architecture consequences — worth Markus/Re's explicit call before
  code is written, not decided implicitly during B1.
- **Existing `/preview/home-v2`:** built informally before this contract existed, using
  hand-picked Tailwind colors rather than the V4 token palette (`#0A0A09` / `#F4F0E7` /
  `#B7F52A` / `#17352B` / `#315CFF` / `#FF5A3D`) or the specified type system (Instrument Serif /
  Geist / IBM Plex Mono). It should be treated as a throwaway sketch, not a starting point —
  B1's real Home page should be built fresh against this contract and the Design Foundation
  tokens, not by editing that file forward.
