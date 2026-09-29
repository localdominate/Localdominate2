import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { SystemLabel } from "./SystemLabel";

export type ActivationState = "dormant" | "selected" | "connected" | "active" | "outcome";

/**
 * THE NODE — atomic unit of the Living Growth System. One primitive, reused everywhere,
 * never redrawn per-page. States follow THE ACTIVATION grammar (DESIGN_SYSTEM_PLAN.md §B.2/§B.8):
 * dormant → selected → connected → active → outcome. Signal Green appears only on
 * active/outcome — never as decoration.
 *
 * Accessibility: the label is always real text (never hover-only), so state is legible without
 * animation, color alone, or a pointer device.
 */
export function Node({
  label,
  state,
  decorative = false,
  size = "md",
  idleBreathe = false,
  className,
}: {
  label: string;
  state: ActivationState;
  decorative?: boolean;
  size?: "sm" | "md" | "lg";
  /** Only true for the beat-01 dormant node — a subtle "alive but waiting" idle motion. */
  idleBreathe?: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const dims = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-8 w-8" : "h-11 w-11";

  const isFilled = state === "active" || state === "outcome";
  const isOutlined = state === "selected" || state === "connected";

  return (
    <div
      className={cn("inline-flex flex-col items-center gap-2", className)}
      aria-hidden={decorative || undefined}
    >
      <motion.div
        className={cn(
          "rounded-full border flex items-center justify-center transition-colors",
          dims,
          isFilled && "bg-v4-signal border-v4-signal",
          isOutlined && "border-v4-ivory/70 bg-transparent",
          state === "dormant" && "border-v4-ivory/30 bg-transparent",
          idleBreathe && !prefersReducedMotion && "animate-v4-node-breathe"
        )}
        animate={
          state === "outcome" && !prefersReducedMotion
            ? { scale: [1, 1.08, 1] }
            : undefined
        }
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {isFilled && <span className="h-2 w-2 rounded-full bg-v4-ink" />}
      </motion.div>
      {!decorative && (
        <SystemLabel
          className={cn(
            isFilled ? "text-v4-signal" : "text-current opacity-70"
          )}
        >
          {label}
        </SystemLabel>
      )}
    </div>
  );
}
