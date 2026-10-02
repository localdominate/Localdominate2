import { cn } from "@/lib/utils";
import { CREATOR_ANCHORS, HERO } from "@/data/v4Creators";

type Tone = "signal" | "outline";

/**
 * In-page actions of /creators. Plain anchors, so they work without JavaScript and the browser
 * does the scrolling. "signal" has the look of CheckButton (the primary action of this page is
 * "Get my page", owner decision of 2 October 2026), "outline" the look of BookCallButton on a dark
 * field. Minimum height 44 px.
 */
export function AnchorButton({
  href,
  tone = "signal",
  arrow = tone === "signal",
  className,
  children,
}: {
  href: string;
  tone?: Tone;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-v4-sans text-sm font-medium sm:px-7",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        tone === "signal" &&
          "bg-v4-signal text-v4-ink transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.97]",
        tone === "outline" &&
          "border border-v4-ivory/30 text-v4-ivory/90 transition-[opacity,border-color] hover:border-v4-ivory/60",
        className
      )}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </a>
  );
}

/** The primary action of the page: "Get my page", leading to the form at the bottom. */
export function GetPageButton({ className, label = HERO.primary }: { className?: string; label?: string }) {
  return (
    <AnchorButton href={`#${CREATOR_ANCHORS.form}`} className={className}>
      {label}
    </AnchorButton>
  );
}
