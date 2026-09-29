import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

/**
 * THE EDITORIAL INTERRUPTION — a large Instrument Serif statement breaking the
 * Geist/mono system rhythm. Static by design (DESIGN_SYSTEM_PLAN.md §B.4): the only
 * motion is a simple scroll-reveal, never removed under reduced motion since it's not
 * motion-dependent to understand.
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "font-v4-serif font-normal leading-[1.08]",
        scale === "major"
          ? "text-[length:var(--v4-text-major)]"
          : "text-[length:var(--v4-text-heading)]",
        className
      )}
    >
      {children}
    </motion.p>
  );
}
