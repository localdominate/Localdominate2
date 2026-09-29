import { cn } from "@/lib/utils";

/**
 * THE STATE CHANGE — a full-viewport-section Ivory↔Ink background shift, reserved for
 * genuine narrative meaning shifts (DESIGN_SYSTEM_PLAN.md §B.6). Not a decorative
 * alternating-stripe pattern — used sparingly by HomeV4 (2–3 times per the spec).
 */
export function StateField({
  field,
  children,
  className,
  as: Tag = "section",
  id,
  "aria-labelledby": ariaLabelledBy,
}: {
  field: "dark" | "light";
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  /** Gives the section a real landmark name from its own heading, per B1.1 §17. */
  "aria-labelledby"?: string;
}) {
  return (
    <Tag
      id={id}
      data-field={field}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "v4 w-full",
        field === "dark" ? "bg-v4-ink text-v4-ivory" : "bg-v4-ivory text-v4-ink",
        className
      )}
    >
      {children}
    </Tag>
  );
}
