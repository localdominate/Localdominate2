# Campsites SEO, FAQ and GEO/AEO improvements

## Scope
Update only `/campsites`, preserving its approved design and existing sections.

## Implementation
- Add a concise, visually consistent GEO/AEO section with the supplied UK campsite website-design copy and an early semantic H2.
- Add the nine supplied FAQs before the final CTA using native accessible disclosure controls, keeping all answers in rendered HTML and easy to edit.
- Update the route title, description, canonical and social metadata using the existing SEO utility and campsite hero image.
- Expand page JSON-LD into one graph containing Organization, WebSite, WebPage, Service, FAQPage and BreadcrumbList; exactly mirror visible FAQ wording and omit Review/AggregateRating.
- Refine image alt text and preserve explicit dimensions, eager hero loading, and lazy loading below the fold.
- Verify one H1, heading hierarchy, indexability, crawlable links, structured data, and mobile/desktop layout safety.

## Files
- `src/pages/Campsites.tsx`
- `src/styles/campsites.css` only if the FAQ needs a small scoped presentation rule
