import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { INDUSTRY_WORLDS } from "@/data/v4Industries";
import type { WorldId } from "@/data/v4Industries";

/**
 * The four worlds as anchor links, directly under the hero. It sticks under the main navigation.
 * On phones it is one row that scrolls sideways inside itself, so the page never overflows.
 *
 * Plain anchors: the row works without JavaScript. After mount the link of the section in view is
 * marked. That state starts empty, so the prerendered HTML matches the first client render.
 *
 * The sticky offset is the height of V4Nav minus one pixel (65 px on phones, 69 px from `lg`), so
 * the two bars always touch. It is a fixed class on purpose: measuring the header after mount would
 * write an inline style that the prerender snapshot then carries into the HTML.
 */
export function WorldNav() {
  const [active, setActive] = useState<WorldId | null>(null);
  const row = useRef<HTMLUListElement>(null);

  // Mark the world whose section crosses a line in the upper third of the window.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = INDUSTRY_WORLDS.map((w) => document.getElementById(w.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id as WorldId;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? null : current));
        }
      },
      { rootMargin: "-35% 0px -64% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // On phones, keep the marked link in sight inside the sideways-scrolling row.
  useEffect(() => {
    const list = row.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const link = active ? list.querySelector<HTMLElement>(`[data-world="${active}"]`) : null;
    list.scrollTo({ left: link ? link.offsetLeft - 24 : 0, behavior: "auto" });
  }, [active]);

  return (
    <nav
      aria-label="Kinds of business"
      className="v4 sticky top-[64px] z-30 border-y border-v4-ivory/10 bg-v4-ink/95 backdrop-blur lg:top-[68px]"
    >
      <ul
        ref={row}
        className="relative mx-auto flex scroll-smooth max-w-[1300px] gap-x-2 overflow-x-auto px-4 [scrollbar-width:none] md:px-8 lg:grid lg:grid-cols-4 lg:gap-x-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {INDUSTRY_WORLDS.map((world) => {
          const isActive = world.id === active;
          return (
            <li key={world.id} className="shrink-0 lg:min-w-0 lg:border-l lg:border-v4-ivory/10 lg:first:border-l-0">
              <a
                href={`#${world.id}`}
                data-world={world.id}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex min-h-[48px] flex-col justify-center whitespace-nowrap px-2 py-2 font-v4-sans lg:whitespace-normal lg:px-5 lg:py-3.5 lg:first:pl-2",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-v4-signal"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200",
                      isActive ? "bg-v4-signal" : "bg-v4-ivory/30 group-hover:bg-v4-ivory"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      isActive ? "text-v4-ivory" : "text-v4-ivory/80 group-hover:text-v4-ivory"
                    )}
                  >
                    {world.navLabel}
                  </span>
                </span>
                <span className="hidden pl-4 pt-1 text-xs leading-snug text-v4-ivory/60 lg:block">{world.navNote}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
