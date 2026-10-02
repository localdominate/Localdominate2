import { lazy, Suspense } from "react";
import { V4Nav } from "@/components/v4/V4Nav";
import { V4Footer } from "@/components/v4/V4Footer";
import { AfterMount } from "@/components/v4/AfterMount";

const CookieBanner = lazy(() => import("@/components/CookieBanner"));

/** Shared frame of the V4 pages: skip link, navigation, main landmark, footer and cookie banner. */
export function V4Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="v4 font-v4-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-v4-signal focus:px-4 focus:py-2 focus:text-v4-ink"
      >
        Skip to content
      </a>
      <V4Nav />
      <main id="main-content">{children}</main>
      <V4Footer />
      <AfterMount>
        <Suspense fallback={null}>
          <CookieBanner variant="v4" />
        </Suspense>
      </AfterMount>
    </div>
  );
}
