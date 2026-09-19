# Strict production QA and repair

## Scope
Repair confirmed defects only. Preserve the current pages, design, spacing, colours, typography, animation, routing, SEO strategy, claims, and integrations.

## Changes
1. **Shared language output**
   - Correct remaining shared English, German, and Arabic fallbacks in navigation, footer, CTAs, statistics, calculators, cards, testimonials, pricing, FAQ, legal links, and blog chrome.
   - Keep proper names, trademarks, schema terms, URLs, and intentional German examples unchanged.
   - Make language fallbacks explicitly support DE, EN, and AR instead of treating Arabic as English.

2. **Demo metrics**
   - Fix the animated AFTER counters so reduced motion, missed intersection events, or an interrupted animation cannot leave `#0`, `0%`, or `0` calls visible.
   - Keep the existing illustrative values, add/retain a clear sample-data label, and do not present them as verified customer results.

3. **ROI calculator and number formatting**
   - Guard every calculation against zero/non-finite inputs and derive revenue, profit, payback, 90-day result, annual result, and ROI from the same validated values.
   - Prevent `NaN`, `Infinity`, negative zero, and contradictory loading-state figures.
   - Use locale-aware EUR formatting for DE/EN and the existing USD conversion for AR.

4. **Pricing consistency**
   - Use the configured standard checkout price of **€299** as the shared source for the core offer.
   - Keep the permanently disabled €199 exit discount disabled.
   - Reconcile the package value to the existing item total of **€626**, removing the stray €649 value.
   - Format English prices as `€299`, German as `299 €`, and Arabic through the existing USD conversion logic.

5. **Small production fixes**
   - Remove duplicated punctuation caused by labels already containing colons.
   - Fix the two React ref warnings by forwarding refs through the affected components.
   - Add missing accessible names to icon-only controls, correct meaningful image alt text by locale, and fix only confirmed overflow, anchor, asset, or route defects.
   - Correct the homepage offer anchor mismatch without changing navigation structure.

## QA
- Run the existing TypeScript and lint checks plus targeted calculation assertions.
- Browser-check DE, EN, and AR at 320, 375, 390, 430, 768, 1024, and desktop widths.
- Check horizontal overflow, CTA/button wrapping, calculator/table containment, runtime console errors, key warnings, local assets, header/footer/CTA/blog links, title/description/canonical/lang/hreflang, and accidental multiple H1s.
- Re-scan rendered shared UI for German leakage in EN and non-Arabic leakage in AR; report intentionally retained proper names/examples only.
