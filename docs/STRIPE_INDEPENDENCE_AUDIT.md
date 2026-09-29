# Stripe Independence Audit (Section 12)

Date: 2026-09-30. Branch: `infra/lovable-exit-2026-09-30`. Source: `src/lib/stripe.ts` (full read),
`supabase/functions/stripe-webhook/index.ts` (full read), grep of every `openStripeCheckout` /
`getStripeSuccessUrl` call site. **No real payment was made. No Stripe dashboard was accessed — nothing
below required it, or is marked UNVERIFIED where it would have.**

## 12.1 The actual checkout architecture (important correction to any prior assumption)

There is **no server-side checkout-session-creation Edge Function**. Checkout is entirely client-side:
`openStripeCheckout()` in `src/lib/stripe.ts` does `window.open(STRIPE_URLS[type], "_blank")` against a
**static Stripe Payment Link** (`buy.stripe.com/...`), one URL for the €299 "standard" product and one
for the €199 "discount" product. There is no dynamic amount calculation sent to Stripe, no
`stripe.checkout.sessions.create()` call anywhere in this codebase, and no Supabase function in the
`stripe-*` family other than the webhook.

## 12.2 Trace, item by item

| Item | Finding | Classification |
|---|---|---|
| Frontend checkout trigger | `openStripeCheckout()` in `src/lib/stripe.ts`, called from 13 components/pages (CTAs, sticky bars, exit-intent popup, niche landing pages) | CODE PATH EXISTS |
| Checkout Edge Function | **Does not exist.** Checkout is a static Payment Link opened via `window.open`, not a server-created session | N/A — there is nothing to migrate here; a Payment Link is configured once, in the Stripe Dashboard, not deployed as code |
| Stripe API usage | None from this codebase at checkout time. The only Stripe API-shaped code is the webhook's own signature verification (which is a local HMAC computation, not an API call) | CODE PATH EXISTS (webhook only) |
| Price/product references | `STRIPE_URLS.standard` / `.discount` (Payment Link URLs) and `STRIPE_PRICE_IDS.standard` / `.discount` — both use real-format Stripe identifiers. Separately, `DIGITAL_PRODUCTS.diy_toolkit` (`url: "https://buy.stripe.com/diy_toolkit_49"`, `priceId: "price_diy_toolkit_49"`) and all four `ADD_ON_PRODUCTS` entries use **human-readable, non-random strings that do not match Stripe's actual identifier format** (real Stripe Payment Link slugs and price IDs are opaque random-looking strings, not `diy_toolkit_49`). `calculateTotalPrice()` computes an add-on total in the UI, but `openStripeCheckout()` never sends that total to Stripe — it always opens the flat base-product link, and stores the add-on selection in `sessionStorage` with the comment "add-ons tracked for manual processing." | Standard/discount: CODE PATH EXISTS, config looks real. DIY toolkit + add-ons: **CONFIGURATION REQUIRED at best, more likely never built** — these are not wired to charge anything through Stripe at all today; they are UI-only selections handled manually outside the app |
| Environment variables | None. No `STRIPE_PUBLISHABLE_KEY`/similar appears in `.env` or anywhere in `src/` — the frontend never talks to the Stripe API directly, only opens a static URL. Only the webhook function reads a Stripe-related secret (`STRIPE_WEBHOOK_SECRET`) | CODE PATH EXISTS (webhook side only) |
| Webhook implementation | `supabase/functions/stripe-webhook/index.ts`, 205 lines. Handles exactly one event type: `checkout.session.completed`. Looks up `customers` by email; updates if found, inserts if not; also inserts an `analytics_conversions` row | CODE PATH EXISTS — structurally complete |
| Webhook signing | Manual HMAC-SHA256 verification implemented from scratch (not the Stripe SDK's `constructEvent`) against `STRIPE_WEBHOOK_SECRET`, with a 5-minute timestamp-tolerance check. Structurally correct (matches Stripe's documented signing scheme: `t=...,v1=...`, `HMAC-SHA256(secret, "{timestamp}.{payload}")`) | CODE PATH EXISTS — looks correctly implemented, **not tested against a real Stripe-signed request this session** |
| Success URL | `getStripeSuccessUrl()` builds `/danke?session_id={CHECKOUT_SESSION_ID}` — but **this function is never called anywhere in the codebase** (grep confirms zero call sites beyond its own definition). It is dead code. The real success/cancel URLs for the Payment Links are configured entirely inside the Stripe Dashboard's Payment Link settings, invisible to this repo | **PRODUCTION STATUS UNVERIFIED** — cannot see what the live Payment Link is actually configured to redirect to without Stripe dashboard access |
| Cancel URL | No cancel-URL code anywhere — same reasoning as above, Payment Link default/dashboard-configured behavior applies | PRODUCTION STATUS UNVERIFIED |
| Database writes | `customers` table (insert or update), `analytics_conversions` table (insert) — both traced above, both structurally sound | CODE PATH EXISTS |
| Payment status updates | `payment_status: "completed"` is set unconditionally on `checkout.session.completed` — there's no handling for `checkout.session.async_payment_failed`, refunds, disputes, or any other Stripe event type. Only the success path is wired | CODE PATH EXISTS for the happy path only; **no code path exists** for failure/refund/dispute events |
| Idempotency | **No event-ID-based deduplication.** The webhook does not store or check `event.id` anywhere. A retried delivery of the same event (Stripe retries on non-2xx or timeout) would re-run the same email lookup → update-or-insert logic. For an *update* (existing customer by email) this is naturally idempotent — re-setting the same values is harmless. For an *insert* (new customer), `customers.stripe_session_id` has a `UNIQUE` constraint (`customers_stripe_session_id_key`, confirmed in `schema.sql`), so a true duplicate insert attempt for the same session would fail at the DB level rather than silently double-inserting — but the function does not catch or handle that constraint violation gracefully; it would just log `insertError` and move on without the customer record being duplicated, so the practical outcome (no duplicate customer) is safe even though it's accidental rather than designed idempotency | **Genuine documented weakness**: works by constraint accident, not by design; add an `event.id` dedup check on migration as a low-risk improvement, not required to preserve current behavior |
| Duplicate webhook handling | Covered above — protected against duplicate *inserts* by the unique constraint; not protected against, e.g., a duplicate `analytics_conversions` insert (no unique constraint on that table for `stripe_session_id`), so a retried event could double-count a conversion in analytics | CODE PATH EXISTS with a known gap (analytics double-count on retry) |
| Failure handling | Try/catch wraps the whole handler; any thrown error returns HTTP 500 with the error message in the body (not leaking secrets, just the JS error message) — reasonable | CODE PATH EXISTS |
| Authorization | None beyond the Stripe signature check — correct for a webhook; Stripe itself is the caller, not a user | CODE PATH EXISTS — correct as designed |
| Current callers | Only Stripe itself calls the webhook. The frontend never calls it | Confirmed by grep |

## 12.3 Overall classification

| Component | Classification |
|---|---|
| Static Payment Links (standard €299, discount €199) | CODE PATH EXISTS, configuration looks real (proper Stripe ID format) — **PRODUCTION STATUS UNVERIFIED** (whether the live links are still active, correctly priced, and correctly redirect is only checkable from the Stripe Dashboard) |
| `diy_toolkit` + 4 add-on products | **CONFIGURATION REQUIRED** — the price/URL values in code do not match Stripe's real identifier format, meaning either these were never actually created in Stripe, or they're stale placeholders from an earlier plan. Add-ons are explicitly handled manually outside Stripe today (per the code's own comment) |
| Webhook (`stripe-webhook`) | CODE PATH EXISTS, structurally sound for the happy path, with one real gap (no event-id idempotency) — **PRODUCTION STATUS UNVERIFIED** (whether Stripe is actually configured to call this URL, and whether real payments have flowed through it recently, requires Stripe Dashboard → Webhooks access this session does not have) |
| Failure/refund/dispute handling | **Does not exist** — not a migration gap, a pre-existing functional gap outside this migration's scope to fix |

**Explicitly, per instruction: historical documentation from earlier sessions describing "Stripe not
working" is not treated as VERIFIED BROKEN here.** Nothing in this audit found evidence the webhook is
broken — the code is structurally sound. Equally, nothing found evidence it is confirmed working in
production. Both "VERIFIED WORKING" and "VERIFIED BROKEN" require runtime evidence (a real test event
delivered and observed, or Stripe's own dashboard logs) that this session does not have access to. The
honest state is **PRODUCTION STATUS UNVERIFIED** across the board, with the code itself graded CODE PATH
EXISTS / CONFIGURATION REQUIRED per component above.

## 12.4 What migration requires

1. Re-point (or recreate) the Payment Links' underlying webhook target — this lives in Stripe's own
   dashboard configuration (Developers → Webhooks), not in this repo. Must be updated to the new
   project's function URL as part of cutover, not before.
2. Issue a fresh `STRIPE_WEBHOOK_SECRET` for the new endpoint (Stripe generates a new signing secret per
   webhook endpoint) and set it as a secret on the new Supabase project.
3. Decide, with whoever holds Stripe dashboard access, whether `diy_toolkit`/add-ons are meant to be real
   Stripe products going forward or stay a manual-processing flow — this is a product decision, not a
   migration mechanic, and out of scope for this document to resolve.
4. Test with a Stripe-signed test event (Stripe CLI `stripe trigger checkout.session.completed`, or the
   dashboard's "send test webhook") against the new project before calling this PARALLEL VERIFIED.
