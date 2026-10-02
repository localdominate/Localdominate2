import { cn } from "@/lib/utils";
import { PORTRAIT } from "@/data/v4About";

/**
 * The owner's portrait in a container with the photo's own aspect ratio, so nothing shifts while it
 * loads. The image source lives in one place: `PORTRAIT` in src/data/v4About.ts.
 */
export function Portrait({ className, lazy = false }: { className?: string; lazy?: boolean }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-v4-ivory/10", className)}
      style={{ aspectRatio: `${PORTRAIT.width} / ${PORTRAIT.height}` }}
    >
      <img
        src={PORTRAIT.src}
        alt={PORTRAIT.alt}
        width={PORTRAIT.width}
        height={PORTRAIT.height}
        decoding="async"
        loading={lazy ? "lazy" : "eager"}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
