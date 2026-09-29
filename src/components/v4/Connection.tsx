import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

/**
 * THE CONNECTION — a nameable relationship between two nodes, never decorative spaghetti.
 * Renders vertically on mobile (per DESIGN_SYSTEM_PLAN.md §B.3 mobile rule) and horizontally
 * on desktop when `orientation="horizontal"` is passed by the parent's own breakpoint logic.
 */
export function Connection({
  active,
  orientation = "vertical",
  className,
}: {
  /** Whether this connection has activated (energy has reached it) per the Activation grammar. */
  active: boolean;
  orientation?: "vertical" | "horizontal";
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      aria-hidden="true"
      className={cn(
        isHorizontal ? "h-px flex-1 self-center" : "w-px h-10 self-center",
        className
      )}
    >
      <motion.div
        className={cn(
          isHorizontal ? "h-px w-full origin-left" : "h-full w-px origin-top",
          active ? "bg-v4-signal" : "bg-v4-ivory/25"
        )}
        initial={prefersReducedMotion ? false : { scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
        animate={
          prefersReducedMotion
            ? undefined
            : { scaleX: 1, scaleY: 1 }
        }
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
