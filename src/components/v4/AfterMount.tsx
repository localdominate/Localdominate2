import { useEffect, useState } from "react";

/**
 * Renders its children only after the first client render. Used for lazy, invisible-on-first-paint
 * pieces (cookie banner, vitals tracker) so they never suspend while a prerendered page is being
 * hydrated, which would otherwise count as a hydration mismatch.
 */
export function AfterMount({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
