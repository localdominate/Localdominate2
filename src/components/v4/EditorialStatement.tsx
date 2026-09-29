import { cn } from "@/lib/utils";

/**
 * THE EDITORIAL INTERRUPTION — a large Instrument Serif statement.
 *
 * B1.1 fix: this used to gate on IntersectionObserver (`whileInView`) starting from
 * `opacity: 0`, so the text did not visually exist until scrolled into view — fragile
 * against full-page screenshots, failed JS, a delayed observer, fast scrolling, and
 * browser scroll restoration (all flagged in the B1.1 brief). Content now exists at
 * opacity: 1 unconditionally; the only motion is a CSS `animation-fill-mode: backwards`
 * fade that runs once on mount (not on scroll), so a screenshot or crawler taken even a
 * few hundred ms after paint — not after a scroll event — already sees it resolved, and
 * `prefers-reduced-motion: reduce` removes it via v4-tokens.css's global override without
 * this component needing its own reduced-motion branch.
 */
export function EditorialStatement({
  children,
  className,
  scale = "major",
}: {
  children: React.ReactNode;
  className?: string;
  scale?: "major" | "heading";
}) {
  return (
    <p
      className={cn(
        "font-v4-serif font-normal leading-[1.08] animate-fade-in",
        scale === "major"
          ? "text-[length:var(--v4-text-major)]"
          : "text-[length:var(--v4-text-heading)]",
        className
      )}
    >
      {children}
    </p>
  );
}
