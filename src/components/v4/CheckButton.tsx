import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CHECK_LABEL, CHECK_PATH } from "@/lib/check";

/** The primary action of the V4 pages: "Get a free check", leading to the form. */
export function CheckButton({
  className,
  label = CHECK_LABEL,
  to = CHECK_PATH,
}: {
  className?: string;
  /** Override only for another language (the German page). */
  label?: string;
  to?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-v4-signal px-7 py-3 font-v4-sans text-sm font-medium text-v4-ink",
        "transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.97]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
        className
      )}
    >
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
