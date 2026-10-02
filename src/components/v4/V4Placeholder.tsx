import SEOHead from "@/components/SEOHead";
import { V4Page } from "@/components/v4/V4Page";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckButton } from "@/components/v4/CheckButton";
import { BookCallButton } from "@/components/v4/BookCallButton";

/**
 * Stand-in for a V4 page that is routed but not built yet. It is `noindex`, not linked from the
 * navigation (see `ready` in src/lib/v4Routes.ts) and is replaced by the page's own package.
 */
export function V4Placeholder({ title, path, lang = "en" }: { title: string; path: string; lang?: "en" | "de" }) {
  const de = lang === "de";
  return (
    <V4Page>
      <SEOHead
        title={`${title} | LocalDominate`}
        description={de ? "Diese Seite ist in Arbeit." : "This page is being built."}
        canonicalUrl={`https://localdominate.org${path}`}
        noindex
        lang={lang}
        exactTitle
      />
      <StateField field="dark" as="section" aria-labelledby="placeholder-title">
        <div className="mx-auto flex min-h-[70vh] max-w-[1000px] flex-col justify-center gap-8 px-6 py-24 md:px-10" lang={lang}>
          <SystemLabel className="text-v4-ivory/50">{de ? "In Arbeit" : "In progress"}</SystemLabel>
          <h1
            id="placeholder-title"
            className="font-v4-sans text-[length:var(--v4-text-major)] font-extrabold leading-[1] tracking-tight text-v4-ivory"
          >
            {title}
          </h1>
          <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] text-v4-ivory/70">
            {de
              ? "Diese Seite wird gerade gebaut. Den kostenlosen Check können Sie schon jetzt anfordern."
              : "This page is being built. You can already ask for the free check."}
          </p>
          <div className="flex flex-wrap gap-4">
            <CheckButton label={de ? "Kostenlosen Check anfordern" : undefined} />
            <BookCallButton tone="outline" />
          </div>
        </div>
      </StateField>
    </V4Page>
  );
}
