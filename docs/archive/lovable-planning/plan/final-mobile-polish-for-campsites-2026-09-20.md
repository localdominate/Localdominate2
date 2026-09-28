# Final mobile polish for `/campsites`

## Scope
Adjust only the existing campsites page at 360px, 390px, and 430px. Preserve the approved desktop layout, imagery, copy, sections, and all other routes.

## Changes
- Increase the mobile header logo’s visible size and set the header within the requested 72–84px range while keeping the arrow CTA aligned right.
- Tighten the hero eyebrow gap and retain safe CTA margins without changing headline size.
- Slightly reduce category-grid cell height while preserving its two-column order and touch spacing.
- Reduce and tighten the journey handwritten accent; constrain the mockup; slightly increase benefit-row spacing.
- Keep Before/After stacked, tighten arrow spacing, and standardize mobile testimonial and lead-form padding/margins.
- Give the tourism banner approximately 30px horizontal padding and show its decorative handwritten line below the main copy on mobile without overlap.

## Technical details
- Use narrowly scoped mobile classes and rules in `src/pages/Campsites.tsx` and `src/styles/campsites.css` only.
- Verify 360px, 390px, and 430px for horizontal overflow, clipping, collisions, off-screen controls, image overflow, and excess blank space.
- Recheck a desktop viewport to confirm no intentional desktop changes.
