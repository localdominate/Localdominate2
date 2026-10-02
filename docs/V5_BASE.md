# v5/base: shared foundation for the eight V4 pages

Date: 2026-10-02. Base branch for all page work. Built on `series/07-showreel`.
Full work plan, package briefs and rules: project doc `claude/LocalDominate_Dev-Plan_2026-10-02.md`.

## What the base provides

| Thing | Where | Notes |
|---|---|---|
| Route registry | `src/lib/v4Routes.ts` | One entry per V4 page with `ready`. Navigation and footer link only `ready` pages. Flip the flag when a page is accepted. |
| Primary action | `src/components/v4/CheckButton.tsx`, `src/lib/check.ts` | "Get a free check", always to `/start-a-project`. |
| Second action | `src/components/v4/BookCallButton.tsx` | `tone="outline"` on dark fields, `tone="ink"` on light fields. |
| Free-check form | `src/components/v4/check/CheckForm.tsx`, texts in `src/data/v4Check.ts` | Texts are a prop, so another language reuses the component. Sends through Web3Forms when `VITE_WEB3FORMS_KEY` is set, otherwise opens a pre-filled email. |
| Commitments block | `src/components/v4/HowWeWork.tsx`, `src/data/v4HowWeWork.ts` | Wording confirmed by the owner on 2026-10-01. Do not add promises. |
| Placeholders | `src/components/v4/V4Placeholder.tsx` | `/industries`, `/insights`, `/about`, `/de` are routed, prerendered, `noindex` and not linked until built. |
| Cookie banner | `src/components/CookieBanner.tsx` | `variant="v4"` changes the look only. Consent logic is unchanged. |

## Hydration rules (learned the hard way)

The prerendered HTML is produced by a client render in headless Chromium, then hydrated in the
visitor's browser, for every browser language.

1. Nothing in the render output of a V4 page may depend on the browser language, `window`,
   `localStorage`, the time or random values. Put such things in `useEffect`, or behind
   `AfterMount`.
2. Do not use `useId()` for ids that code looks up later (`getElementById`, `htmlFor` pairs created
   after mount). The id differs between the prerender and hydration. Use a fixed prefix.
3. Shared components that pick text from `useLanguage()` (for example `CookieSettingsButton`) must
   not be rendered inside a V4 page.
4. Test with a server that maps `/path` to `dist/path/index.html` (as Vercel does). `vite preview`
   serves the home page HTML for every path and reports false hydration errors.

## Mobile headings

The old global rule that forced `h1`, `h2`, `h3` to fixed sizes below 640 px no longer applies
inside `.v4` (`src/index.css`). V4 headings follow the fluid `--v4-text-*` scale on phones.
