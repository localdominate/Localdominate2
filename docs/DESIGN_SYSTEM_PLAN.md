# Design System Plan — LocalDominate 2.0

Date: 2026-09-30. B0.5 freeze deliverable. Nothing here is implemented; this is the design
architecture to be frozen before B1 writes any component. Source material: the V4 palette and
typography direction given directly in the Master Initialisation Prompt §14, and the five-panel
reference composition supplied in this conversation (Home / Work / Services / Industries /
Approach), treated here as **the moodboard** per instruction — principles extracted, not copied.

---

## A. Moodboard Principles

| Observed property | What it's doing |
|---|---|
| **Typography behaviour** | A large, confident display headline carries the primary statement on every panel; a small, wide-tracked all-caps label sits directly above it as a section marker. Two type voices doing the work, not five. |
| **Scale** | The jump from label → headline is steep and deliberate — no "medium" heading tier quietly bridges them. |
| **Negative space** | Generous air above the headline; sections breathe on a dark field rather than being boxed in cards-on-white. Space itself signals premium, not content density. |
| **Editorial tension** | Headlines read as statements ("Great Ideas Build Real Businesses"), not feature labels ("Our Services") — copy voice does composition work, not just conveys information. |
| **Asymmetry** | Hero text is left-aligned, not center-balanced against a matching visual (Home); other panels use off-center card stacks (Work) instead of a symmetric grid. |
| **Grid behaviour** | An underlying grid is clearly present (cards align, stat columns align) but stays invisible — alignment is felt, not drawn with ruled lines. |
| **Image treatment** | Photography is full-bleed within its card, warm/editorial in tone (hospitality, product), never a generic stock-photo crop — contrasts deliberately against the dark UI chrome around it. |
| **Layering** | Flat, not skeuomorphic — cards sit on the dark field with minimal shadow; depth comes from z-order and contrast, not blur/elevation effects. |
| **Pacing** | Each panel opens with a question or statement, then a small number of proof points (2–4 stats), then a way forward — a consistent rhythm across otherwise different panels. |
| **Density** | Deliberately sparse per screen — a handful of large elements, not many small ones. Premium is read partly *as* restraint. |
| **Contrast** | Near-black field + a single saturated accent (lime/signal-green) + warm off-white — a three-value system, not a rainbow. Accent is used sparingly and always on the "active/important" element. |
| **Motion character** (inferred, static reference) | Nothing in the moodboard itself is animated, but the composition implies confident, singular motion — one thing moving with intent, not an ambient particle field. |
| **Navigation character** | A slim, low-chrome top bar — wordmark, a handful of text links, one filled pill CTA. Navigation recedes; content leads. |
| **Premium cues** | Real client names shown plainly (not logo-souped), specific numbers (not "amazing results"), restrained copy length, generous whitespace, one accent color used with intent. |

### WHAT WE TAKE

- The two-voice type hierarchy (small mono/label + large display statement).
- The three-value color contrast system (dark field, warm light, one signal accent) — matches
  V4's own palette almost exactly, which is why it's a legitimate "take," not a coincidence.
- Restraint as a premium signal — sparse screens, real numbers, unbragging copy.
- Invisible-grid alignment discipline.
- Slim, receding navigation chrome.

### WHAT WE DO NOT COPY

- The literal five-panel navigation model or exact panel order (LocalDominate's 8 pages have
  their own architecture, already frozen in `EXPERIENCE_ARCHITECTURE.md` — this moodboard is a
  4-nav-item generic agency site, not the source of LocalDominate's information architecture).
- The specific card layouts, photography subjects (hotels/product shots aren't LocalDominate's
  own proof — real client evidence per `CONTENT_ARCHITECTURE.md`/Work page contract replaces
  these placeholders).
- Any literal copy line, stat, or client name shown in the reference — those are the reference
  agency's real numbers, not LocalDominate's.
- The moodboard's flat "services as tiles" treatment on its Services panel — LocalDominate's
  Services page is a configurator (Investigation/Configuration mental model per
  `EXPERIENCE_ARCHITECTURE.md`), not a static selection grid.

### HOW LOCALDOMINATE REINTERPRETS IT

The moodboard's *restraint* and *two-voice typography* become the shared design DNA (§B, below).
Its *static* composition becomes LocalDominate's *systemic* one: where the reference uses cards
and stats to imply competence, LocalDominate uses the Living Growth System primitive (nodes,
connections, state changes) to *show* the same competence as a live mechanism, which is the one
thing the moodboard doesn't attempt and V4 explicitly asks for. The result should be
recognizable as "premium editorial agency" in the same family as the moodboard, while being
legible as *specifically* LocalDominate the moment the Living Growth System, the Ivory↔Ink state
change, or the mono system-labels appear — none of which exist in the reference.

---

## B. LocalDominate Design DNA

Eight recurring signatures, each defined precisely enough that two different pages using the
same signature still look like the same brand doing different jobs — not two different brands.

### 1. THE SIGNAL (Signal Green `#B7F52A`)

- **Purpose:** Marks *active, connected, selected, progressing, growing* — semantic, never
  decorative.
- **Visual behaviour:** Used on exactly one thing at a time per view where possible — an active
  node, the current stage, a selected choice, the primary CTA. Never a background wash, never a
  body-text color, never more than ~10% of any viewport's colored area.
- **Interaction behaviour:** Appears *in response to* a state change (selection, activation,
  completion) rather than being statically present — it should feel earned, not decorative
  default.
- **Where it appears:** Active nodes/connections in the Living Growth System, the primary CTA
  fill, the current step indicator in Start a Project, "you are here" markers.
- **Where it should NOT appear:** Decorative accents, dividers, generic icon fills, large
  background fields, more than one simultaneous "primary" emphasis on a screen.
- **Mobile behaviour:** Identical semantic rule; on small screens, restraint matters *more*
  since there's less space to dilute it in.
- **Reduced-motion behaviour:** Still appears on the correct element; only the transition
  *into* that state loses animation (instant color change instead of an animated flash/pulse).

### 2. THE NODE

- **Purpose:** The atomic unit of the Living Growth System — represents a business, capability,
  stage, need, or outcome.
- **Visual behaviour:** A consistent primitive shape/treatment (e.g. a labeled circle or rounded
  node with a mono-set label) reused across Home/Services/Work/Industries, never redrawn
  per-page in a different style.
- **Interaction behaviour:** Has defined states — dormant, active, connected, selected — with the
  Signal reserved for active/connected/selected states only (see §1).
- **Where it appears:** Home (business awakening), Services (growth-system builder), Industries
  (world-context nodes), Work (evidence relevance nodes, lighter use).
- **Where it should NOT appear:** As generic decoration unconnected to real data/meaning — every
  node on screen must represent something specific (a real capability, a real stage), never a
  placeholder shape.
- **Mobile behaviour:** Node primitive scales down but keeps its label legible at all times —
  never shrinks to an unlabeled dot.
- **Reduced-motion behaviour:** Renders in its resolved end-state directly; state *labels* remain
  visible even when the state *transition* animation is removed.

### 3. THE CONNECTION

- **Purpose:** A semantic relationship between two nodes (e.g. "Brand feeds Build") — never
  decorative spaghetti lines.
- **Visual behaviour:** Every connection line drawn on screen must be nameable — if you can't say
  what relationship it represents, it doesn't get drawn. Weight/opacity can indicate relationship
  strength, but existence itself is never arbitrary.
- **Interaction behaviour:** Connections can activate (per §1) when the nodes they join become
  active — the connection is what makes activation *read* as system-forming, not just as
  isolated nodes lighting up independently.
- **Where it appears:** Living Growth System instances only (Home, Services, Industries).
- **Where it should NOT appear:** Approach's seven-stage chain is explicitly requested to be
  *lighter-weight* than Home/Services (§18 of the master prompt) — connections there can be
  simpler (a plain line/arrow) rather than the full semantic-connection treatment, to preserve
  the intensity hierarchy (§F below).
- **Mobile behaviour:** Connections become vertical, not diagonal/radial — a top-to-bottom chain
  reads naturally on a narrow viewport without needing pan/zoom.
- **Reduced-motion behaviour:** Rendered as static lines in their final state; only the "energy
  traveling along the line" animation (if used) is removed.

### 4. THE EDITORIAL INTERRUPTION

- **Purpose:** Large strategic serif statements interrupting technical/system UI — the moment
  the page stops being a tool and speaks as a point of view.
- **Visual behaviour:** Instrument Serif, large scale, full-width or generously margined,
  breaking the otherwise Geist/mono rhythm of the surrounding UI.
- **Interaction behaviour:** Static — this signature is about typographic weight, not motion. It
  should not compete with the system visuals for interactive attention.
- **Where it appears:** Section transitions on Home (the story-arc beats in
  `HOME_IMPLEMENTATION_CONTRACT.md`), the "not seven services, one operating system" closing
  line on Approach, the opening statement on About.
- **Where it should NOT appear:** Inside dense UI (forms, the Services configurator's active
  working area, admin-adjacent surfaces) — it's a pacing device between sections, not a
  component to sprinkle inside them.
- **Mobile behaviour:** Scales down proportionally but keeps generous line-height; never
  compressed to fit without wrapping considered.
- **Reduced-motion behaviour:** No change — this signature is not motion-dependent by design.

### 5. THE SYSTEM LABEL

- **Purpose:** IBM Plex Mono for metadata, stages, and mechanics — signals "this is the system
  talking," distinct from editorial voice or UI copy.
- **Visual behaviour:** Small, wide letter-spacing, uppercase or numbered (e.g. "01 — DIAGNOSE",
  "STATE 3", "NODE: BRAND"). Never used for body copy or long-form text.
- **Interaction behaviour:** Static label, but can change value on state change (e.g. a stage
  counter incrementing) — the *change itself*, not the typeface, carries the interactivity.
- **Where it appears:** Stage numbers (Approach), state/node labels (Living Growth System
  instances), the small caps labels above headlines matching the moodboard's label pattern (§A),
  timestamps/metadata on Insights.
- **Where it should NOT appear:** Primary headlines, body paragraphs, CTA button text (CTAs use
  the UI/Geist voice, not the system voice — they're an instruction to the visitor, not
  system output).
- **Mobile behaviour:** Identical treatment; letter-spacing may reduce slightly if truncation
  risk appears, but the mono/uppercase identity stays.
- **Reduced-motion behaviour:** N/A — static by nature.

### 6. THE STATE CHANGE (Ivory ↔ Ink)

- **Purpose:** The environment itself (background field) changes between Warm Ivory `#F4F0E7`
  and Ink Black `#0A0A09` when the *narrative meaning* changes — not as a decorative section
  break.
- **Visual behaviour:** A full viewport-section background shift, not a small card recoloring.
  Reserved for genuine meaning shifts: e.g. Home moving from "the problem" (could be Ink — the
  fragmented/dark state) to "the system awakens" (could be Ivory — resolution/clarity), or
  About's shift between "the statement" and "the walkthrough."
- **Interaction behaviour:** Triggered by scroll position or a real state transition, not by
  arbitrary alternating-stripe section design (that would make it decorative, which V4 explicitly
  warns against for the Signal — the same discipline applies here).
- **Where it appears:** Sparingly — at most 2–3 true state changes per page; using it more than
  that dilutes its meaning back into "just alternating backgrounds."
- **Where it should NOT appear:** As a default "every other section" alternation pattern — that
  is exactly the generic-template failure mode V4 warns against.
- **Mobile behaviour:** Same full-viewport-section shift; the transition zone (where one field
  ends and the other begins) should be a deliberate compositional moment, not an abrupt cut, at
  any viewport size.
- **Reduced-motion behaviour:** The shift itself is a scroll-triggered *state*, not an animation
  in the classic sense — it should remain (it's not decorative motion, it's meaningful state),
  but any accompanying cross-fade/parallax on the transition itself should be removed in favor of
  an instant cut.

### 7. THE PROOF OBJECT

- **Purpose:** Real artefacts presented as evidence — a real screenshot, a real number, a real
  client name — never a stand-in graphic implying proof without being proof.
- **Visual behaviour:** Presented with enough specificity to be checked (a dated stat, a named
  client, an actual deliverable image) — generic "chart going up" iconography is explicitly not
  this signature.
- **Interaction behaviour:** Can be the subject of the Work page's evidence-reordering
  interaction (§Work in `EXPERIENCE_ARCHITECTURE.md`) — proof objects are data, not decoration,
  so they're filterable/sortable where that serves the page's purpose.
- **Where it appears:** Work (primary), Home (trusted-by / stats section, lightly), About (the
  example-project walkthrough).
- **Where it should NOT appear:** Fabricated anywhere (Hard Rule from the master prompt §12 —
  never invent revenue, ROAS, conversion rates, quotes, awards, logos, or permissions). If a real
  proof object isn't available for a claim, the claim doesn't ship, or ships explicitly marked
  provisional (see `HOME_IMPLEMENTATION_CONTRACT.md` §10).
- **Mobile behaviour:** Full-width, legible at small size — never a proof object so small its
  specificity (the number, the name) becomes illegible.
- **Reduced-motion behaviour:** No dependency on motion to be understood; motion (if any) is
  purely an entrance transition, removable without losing information.

### 8. THE ACTIVATION

- **Purpose:** The state-progression grammar shared by every interactive system on the site:
  Dormant → Selected → Connected → Active → Outcome.
- **Visual behaviour:** A consistent 5-state visual vocabulary (e.g. dormant = low-opacity
  outline only; selected = filled outline, no connections yet; connected = joined to at least one
  other node; active = Signal Green, full opacity; outcome = active + a result/label surfaces)
  applied identically wherever a node-based interaction exists.
- **Interaction behaviour:** This is the shared "physics" that makes Home's awakening, Services'
  configurator, and Industries' world-switch all feel like the same underlying system doing
  different jobs — per the master prompt's explicit permission to share "the underlying Living
  Growth System engine" without making pages feel templated.
- **Where it appears:** Home (business → system), Services (need → generated system), Industries
  (world selection → contextual system), lightly on Start a Project (selections → pre-filled
  configurator).
- **Where it should NOT appear:** Approach and Insights, by design (§18's restraint instruction;
  Approach's chain is deliberately lighter, Insights' network is optional/progressive, not the
  primary interaction).
- **Mobile behaviour:** All 5 states remain visually distinguishable at small size; "connected"
  and "active" in particular must not collapse into visually identical states on a small screen
  just because there's less room to differentiate them.
- **Reduced-motion behaviour:** State is shown by its resolved visual treatment (opacity/fill per
  state), never by an animation the user would otherwise watch to infer which state they're in.

### Proposed additional signature

**THE PROVISIONAL MARK.** A small, consistent visual treatment (e.g. a dotted underline + mono
"PROVISIONAL" microlabel) for any claim, stat, or proof object that doesn't yet have confirmed
backing (per §10 of the master prompt: "copy can still be marked as provisional where proof is
missing"). This isn't a V4-specified signature, but V4's own rule against fabricating evidence
creates situations where content genuinely isn't ready — this gives that situation a
deliberate, on-brand visual treatment instead of either (a) shipping an unverified claim looking
fully confident, or (b) leaving a content hole. Recommend adopting it; it directly serves §12's
"if evidence is unavailable, flag it" instruction with an actual design answer rather than a
process note.

---

## C. Experience Intensity Matrix

The requested hierarchy, reviewed against the Experience Architecture contract already frozen —
**confirmed as given**, with reasoning added per page (no changes proposed; the given numbers
already match what the per-page contracts independently imply).

| Page | Intensity | What creates it |
|---|---|---|
| **Services** | **10/10** | The heaviest signature interaction on the site — a visitor-driven configurator that generates a live system diagram from their own input (§18 explicitly names this one of the three heaviest pages, and gives it the primary persistent-state-creation role for the whole site). Intensity here is generative: the visitor's choice produces something that didn't exist before they acted. |
| **Home** | **9/10** | The Business Awakens interaction (§11) is a multi-state narrative transformation — high intensity, but one notch below Services because it's guided/observed (the visitor watches) rather than generated (the visitor builds). Also carries the highest commercial stakes (primary entry point, Hard Rule #1 sign-off required for any SEO-affecting change), which raises implementation care without raising visual intensity further. |
| **Start a Project** | **9/10** | Intensity from continuity and personalization (pre-filled state from three other pages) plus the multi-step configurator itself, not from spectacle — matches §18's "heaviest signature interaction complexity" trio alongside Home/Services, but the master prompt's own Start-a-Project brief (§17) emphasizes *quiet* intensity ("we've already built the start of your system") over visual density. |
| **Approach** | **8/10** | Intensity from typographic/compositional confidence (the Editorial Interruption signature, the closing statement) rather than interaction — §18 explicitly asks for restraint here ("do NOT turn every page into another WebGL application"), so its intensity budget is spent on storytelling clarity and the punch of "not seven services, one operating system," not on animation. |
| **About** | **8/10** | Intensity from specificity and vulnerability (naming exactly how much of the work is AI vs. human, on a real project) — a *trust* intensity rather than a visual one. The scroll-driven handoff timeline (§20) is compositionally confident but deliberately simple in mechanism. |
| **Work** | **7/10** | Intensity from relevance-matching (the evidence reorganizing around a visitor's stated need) — real interaction, but scoped to filtering/reordering existing content rather than generating new structure, which is why it sits below Services/Home/Start-a-Project. |
| **Industries** | **7/10** | Intensity from context-shift breadth (terminology, imagery, proof, and recommended capabilities all changing together) rather than mechanism complexity — §20 explicitly calls this a "lightweight contextual transition" on mobile, confirming the intended ceiling. |
| **Insights** | **6/10** | Deliberately the lowest — §20/§H are explicit that search/categories/topic-hubs are the load-bearing mechanism and the network visualization is optional, progressive enhancement. Intensity here would actively work against the page's real job (fast, reliable access to 188 real articles) if pushed higher. |

**Explicit confirmation:** the given hierarchy (Services 10, Home 9, Start a Project 9, Approach
8, Industries 7, Insights 6, About 8, Work 7) is **accepted as-is** — every page's contract in
`EXPERIENCE_ARCHITECTURE.md`, written before this matrix was requested, independently implies the
same ordering. No revision proposed. The site's peaks are Services/Home/Start-a-Project; its
valley is Insights — by design, not by neglect, since Insights' job (188 real articles findable
fast) is actively harmed by unnecessary intensity.

---

## D. Eight-Page Differentiation Matrix + Transfer Test

| Dimension | Home | Work | Services | Industries | Approach | Insights | About | Start a Project |
|---|---|---|---|---|---|---|---|---|
| **Mental model** | Transformation | Investigation | Configuration | Context Shift | Mechanics | Exploration | Transparency | Continuation |
| **Visitor question** | "Is this for a business like mine?" | "Can you prove it works?" | "What do I actually need?" | "Do you understand my world?" | "How does this work, step by step?" | "Do you actually know this stuff?" | "Who's really doing this work?" | "How do I start, without repeating myself?" |
| **Composition** | Linear narrative arc (9 beats, see `HOME_IMPLEMENTATION_CONTRACT.md`) | Question → selector → reordering evidence sequence | Question → multi-select → generated diagram → grounding grid | Tab/world selector → world-scoped sections | Framing → 7-stage chain → per-stage detail → closing line | Search/topic entry → optional network layer → article list | Statement → single example-project handoff timeline → closing | 8-step form/configurator, pre-fillable at any step |
| **Section rhythm** | Steep build (dormant → assembled system), single continuous climb | Flat-then-relevant: static question, then everything reorganizes at once on selection | Flat-then-generative: static question, then the diagram builds progressively as selections accumulate | Discrete jump on each tab switch, otherwise static within a world | Even, numbered, deliberately unhurried (restraint is the point) | Consistently flat/utility rhythm throughout — the point is reliability, not a rhythm arc | Sequential handoff beats, one per workflow step, even pacing | Sequential steps, each a discrete flat screen, no build-up across steps |
| **Signature moment** | System assembling from one node | Evidence re-sorting around a stated need | Diagram generating from a stated need | Terminology/imagery/proof shifting together on tab switch | The 7-stage chain + closing statement | (Deliberately none — utility over spectacle) | The AI/Human split laid out on one real project | Arriving to a pre-filled system already waiting |
| **Interaction model** | Scroll/activate-driven narrative | Selection reorders content | Selection generates content | Tab switch swaps content set | Tap-for-detail on an otherwise static chain | Search + filter (primary), optional graph (secondary) | None beyond scroll | Multi-step form, state-aware pre-fill |
| **Visual behaviour** | Heaviest use of Node/Connection/Activation signatures | Node signature used lightly (evidence relevance), Proof Object signature primary | Heaviest use of Node/Connection/Activation, generative not observed | Node signature used for world-context, State Change signature (per-world environment shift) plausible | Connection signature present but explicitly lighter-weight (§18) | Node/Connection signature optional/secondary; typography + Proof Object (article cards) primary | Editorial Interruption signature primary; no system-diagram signatures | Activation signature (state pre-fill) light-touch; mostly standard UI/form primitives |
| **Typography behaviour** | Editorial Interruption at each story beat | System Label (case metadata) + standard body | System Label (need/stage names) + standard body | Editorial per-world headline + System Label for capability tags | Heavy System Label use (stage numbers), Editorial Interruption on the closing line | Standard UI typography, System Label for article metadata (dates, categories) | Editorial Interruption dominant (the opening statement) | Standard UI/form typography, System Label for step indicators |
| **Motion behaviour** | High — the one page where motion *is* the argument | Medium — reorder transitions | High — generative build transitions | Low-medium — content swap, not canvas motion | Low, deliberate (§18 restraint) | Low — motion is optional enhancement only | Low — scroll-driven, simple | Low — step transitions only |
| **Imagery behaviour** | System-diagram-led, minimal photography | Photography/deliverable-led (Proof Object) | Diagram-led, minimal photography | Photography swaps per world (hospitality vs. startup vs. premium visuals) | Minimal — diagram/typography-led | Minimal — article thumbnails only | Minimal — process-diagram or photography of the real handoff, not stock | None — functional UI |
| **Proof mechanism** | Layer 3 + 5 (light) | Layer 1 + 2 (heavy, primary job) | Layer 3 | Layer 5 + 6, world-scoped | Layer 3 (the page *is* process evidence) | Layer 6 (the 188 articles themselves) | Layer 4 | None (post-proof, pre-conversion) |
| **CTA behaviour** | Start a Project / Watch Showreel | Start a Project (seeded), View Case Study per item | Start a Project (seeded with generated system) | World-appropriate Start a Project framing | Start a Project / See it in Work | Contextual, secondary to the content itself | Start a Project / See Our Approach | The page itself is the CTA; ends in submission |
| **Cross-page state** | Produces none, may consume none (entry point) | Consumes (Services selection can pre-filter), produces (selected problem feeds Start a Project) | **Produces** (primary source of visitor context, §16) | Consumes (feeds Work/Services filtering), produces (selected world) | None | None (optionally: topics explored, low-weight) | None | **Consumes** (primary sink of visitor context) |
| **Mobile transformation** | Progressive vertical activation | Problem-first filter + linear evidence sequence | Vertical connected system, tap-to-expand | Lightweight tab/segment control | Seven-stage vertical journey | Search/topic exploration, graph optional | Scroll-driven handoff timeline (already mobile-native) | Compact step flow + persistent Quick Contact |
| **Reduced-motion transformation** | Static end-state system, numbered list of stages | Selection still reorders; only transition animation removed | Static generated diagram on selection | Content substitution only, minimal motion dependency to begin with | Already near-static by design | Already near-static by design | Already near-static by design | Functionally identical; only step-transition animation removed |

### TRANSFER TEST

Run on every pair where similarity is a real risk (both use the Living Growth System primitive,
or both are "form-like," or both are "content-list-like"):

| Pair | Shared surface risk | Could it become the other by replacing content? | Verdict |
|---|---|---|---|
| Home ↔ Services | Both use Node/Connection/Activation | No — Home *observes* one pre-set transformation narratively; Services *generates* a novel diagram from visitor input. Swapping labels leaves Home's fixed narrative arc and Services' open-ended configurator irreconcilably different in mechanism, not just content. | **PASS** |
| Home ↔ Industries | Both could use a State Change (Ivory↔Ink) moment | No — Home's state changes follow a fixed narrative sequence; Industries' changes are visitor-selected and reversible (switch tabs freely). Different trigger model, not just different copy. | **PASS** |
| Services ↔ Industries | Both are "selector-driven" | No — Services' selection *generates* a new structure (the diagram); Industries' selection *swaps* a pre-built content set. Generative vs. substitutive — a real mechanism difference. | **PASS** |
| Work ↔ Insights | Both are "browse a list of things" pages | No — Work's list reorders around a stated *problem* (investigation, proof-seeking); Insights' list is searched/filtered by *topic* (reference-seeking), and Insights must degrade to plain search/list — a requirement Work doesn't share. Different failure mode, different primary mechanism. | **PASS** |
| Approach ↔ Home | Both narrate a sequence of stages | No — Approach's chain is deliberately static/light (§18) and mechanical (explains *how*); Home's sequence is the heaviest interactive build on the site and is transformational (*shows* a business becoming a system, doesn't just list stages). Explicitly different intensity tier (8 vs 9) for this reason. | **PASS** |
| About ↔ Approach | Both explain "how we work" | No — About is a single concrete example (one project, human/AI handoff) told as a trust narrative; Approach is the abstract, repeatable seven-stage system. Concrete instance vs. abstract mechanism — different mental models (Transparency vs. Mechanics) doing different jobs. | **PASS** |
| Start a Project ↔ Services | Both are "form-like" / state-consuming | No — Services *produces* the system a visitor is exploring; Start a Project *consumes* whatever was produced anywhere on the site and turns it into a submission. One is exploratory/open-ended, the other is a closing, committing flow with a literal endpoint (submission). | **PASS** |

**Conclusion: all eight experiences pass the Transfer Test as currently architected.** No
composition or interaction described in `EXPERIENCE_ARCHITECTURE.md` could become another page
by relabeling alone — each pairing that shares a surface-level similarity (a shared primitive, a
shared "list" or "form" shape) diverges on mechanism, trigger model, or mental model once
examined. No architecture change is proposed as a result of this test.
