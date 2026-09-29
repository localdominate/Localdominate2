import { cn } from "@/lib/utils";

/**
 * THE SYSTEM LABEL — IBM Plex Mono, small, wide-tracked, uppercase.
 * Metadata/stage voice, never body copy or CTA text. See DESIGN_SYSTEM_PLAN.md §B.5.
 */
export function SystemLabel({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p";
}) {
  return (
    <Tag
      className={cn(
        "font-v4-mono uppercase tracking-[0.18em]",
        "text-[length:var(--v4-text-label)] leading-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
