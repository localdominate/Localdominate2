import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { BROWSER_SHELL, BrowserBar, PHONE_SCREEN, PHONE_SHELL, PhoneSpeaker } from "@/components/v4/creators/DeviceFrames";
import { GetPageButton } from "@/components/v4/creators/AnchorButton";
import { CREATOR_ANCHORS, DEMO, DEMO_SECTION } from "@/data/v4Creators";

type Device = "phone" | "desktop";
const DEVICES: readonly Device[] = ["phone", "desktop"];

/** The iframe and the device switch exist from this width. Below it the still links to the demo. */
const WIDE = "(min-width: 1024px)";

/** Events only a person causes. Scripted scrolling (prerender, crawlers) fires none of them. */
const INPUT_EVENTS = ["pointerdown", "pointermove", "wheel", "touchstart", "keydown"] as const;

/**
 * LIVE DEMO. The demo page of the fictional creator, to try inside a device frame.
 *
 * Three grid children: the introduction, the frame, and the things to try with the action. Phones
 * and tablets read them in that order. From 1024 px the frame stands in the second column over
 * both rows (phone frame) or below the two text blocks (browser frame).
 *
 * Render output (prerender, first client render, no JavaScript) is the same at every width: the
 * phone frame with the still, linked to the demo, with the pill "Open the live demo". After mount:
 * - Below 1024 px nothing changes. No iframe is loaded there: a phone inside a phone traps the
 *   scrolling, so the still opens the demo in a new tab instead.
 * - From 1024 px the iframe replaces the still when the frame comes into view. There is only ever
 *   one iframe; switching the device changes the frame around it and the demo keeps its state.
 * - Hydration: the prerender scrolls through the whole page by script before it takes the
 *   snapshot. If "in view" were a one-way switch, the snapshot would contain the iframe and differ
 *   from the first client render. So until a person has actually used the page (pointer, wheel,
 *   touch or key), the iframe is removed again when the frame leaves the view. For a visitor it
 *   stays once it is there. The width is read with matchMedia inside the effect, never in render.
 */
export function LiveDemo() {
  const [device, setDevice] = useState<Device>("phone");
  const [live, setLive] = useState(false);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = frame.current;
    if (!target || typeof IntersectionObserver === "undefined") return;
    const wide = window.matchMedia(WIDE);
    let usedByAPerson = false;
    const markUsed = () => {
      usedByAPerson = true;
    };
    INPUT_EVENTS.forEach((type) => window.addEventListener(type, markUsed, { passive: true, once: true }));
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        if (entry.isIntersecting) setLive(wide.matches);
        else if (!usedByAPerson) setLive(false);
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(target);
    // Narrower than 1024 px: back to the phone frame and the still. Wider again: ask the observer anew.
    const onResize = () => {
      if (!wide.matches) {
        setDevice("phone");
        setLive(false);
        return;
      }
      observer.unobserve(target);
      observer.observe(target);
    };
    wide.addEventListener("change", onResize);
    return () => {
      observer.disconnect();
      wide.removeEventListener("change", onResize);
      INPUT_EVENTS.forEach((type) => window.removeEventListener(type, markUsed));
    };
  }, []);

  const phone = device === "phone";
  const preview = phone ? DEMO.phonePreview : DEMO.desktopPreview;
  const posterClass = "absolute inset-0 h-full w-full object-cover object-top";

  return (
    <StateField field="dark" as="section" id={CREATOR_ANCHORS.demo} aria-labelledby="creators-demo" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-16 lg:gap-y-12">
        <div className={cn("lg:col-start-1 lg:row-start-1", phone ? "lg:self-end" : "lg:self-start")}>
          <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
            {DEMO_SECTION.label}
          </SystemLabel>
          <h2
            id="creators-demo"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
          >
            {DEMO_SECTION.title}
          </h2>
          <p className="mt-6 max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
            {DEMO_SECTION.text}
          </p>
          <p className="mt-4 max-w-lg font-v4-sans text-sm leading-relaxed text-v4-ivory/60">{DEMO_SECTION.scale}</p>
          <div
            role="group"
            aria-label={DEMO_SECTION.switchLabel}
            className="mt-8 hidden rounded-full border border-v4-ivory/20 p-1 lg:inline-flex"
          >
            {DEVICES.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={device === option}
                onClick={() => setDevice(option)}
                className={cn(
                  "min-h-[44px] rounded-full px-6 font-v4-sans text-sm font-medium transition-colors duration-200",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal",
                  device === option ? "bg-v4-ivory text-v4-ink" : "text-v4-ivory/70 hover:text-v4-ivory"
                )}
              >
                {DEMO_SECTION.devices[option]}
              </button>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "min-w-0",
            phone ? "lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center" : "lg:col-span-2 lg:col-start-1 lg:row-start-2"
          )}
        >
          <div ref={frame} className={cn("mx-auto", phone ? cn(PHONE_SHELL, "w-full max-w-[412px]") : BROWSER_SHELL)}>
            {phone ? <PhoneSpeaker /> : <BrowserBar address={DEMO.address} />}
            <div className={cn("relative", phone ? cn(PHONE_SCREEN, "h-[480px] lg:h-[720px]") : "h-[680px] bg-v4-ivory")}>
              {live ? (
                <>
                  <img
                    src={preview.src}
                    width={preview.width}
                    height={preview.height}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className={posterClass}
                  />
                  <iframe
                    src={DEMO.url}
                    title={DEMO.iframeTitle}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </>
              ) : (
                <a
                  href={DEMO.url}
                  target="_blank"
                  rel="noopener"
                  className="group absolute inset-0 block focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-v4-signal"
                >
                  <img
                    src={preview.src}
                    width={preview.width}
                    height={preview.height}
                    alt={phone ? DEMO.phoneAlt : DEMO.desktopAlt}
                    loading="lazy"
                    decoding="async"
                    className={posterClass}
                  />
                  <span className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-v4-ink/70 to-transparent px-4 pb-5 pt-16">
                    <span className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-v4-ivory px-6 font-v4-sans text-sm font-semibold text-v4-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] transition-transform duration-200 group-hover:scale-[1.03]">
                      {DEMO_SECTION.openShort} <span aria-hidden="true">↗</span>
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3 text-center">
            <a
              href={DEMO.url}
              target="_blank"
              rel="noopener"
              className="hidden min-h-[46px] items-center justify-center gap-2 rounded-full border border-v4-ivory/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ivory/90 transition-[opacity,border-color] hover:border-v4-ivory/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal lg:inline-flex"
            >
              {DEMO_SECTION.open} <span aria-hidden="true">↗</span>
            </a>
            <p className="font-v4-sans text-sm text-v4-ivory/60">{DEMO_SECTION.caption}</p>
          </div>
        </div>

        <div
          className={cn(
            phone ? "lg:col-start-1 lg:row-start-2 lg:self-start" : "lg:col-start-2 lg:row-start-1 lg:self-end"
          )}
        >
          <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-none tracking-[0.18em] text-v4-ivory/60">
            {DEMO_SECTION.tryLabel}
          </h3>
          <ol className="mt-4 grid border-b border-v4-ivory/15">
            {DEMO_SECTION.tries.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-t border-v4-ivory/15 py-3.5 font-v4-sans text-base leading-snug text-v4-ivory/90"
              >
                <span aria-hidden="true" className="w-5 shrink-0 font-v4-mono text-sm leading-6 text-v4-ivory/60">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <GetPageButton label={DEMO_SECTION.action} className="mt-8 w-full sm:w-auto" />
        </div>
      </div>
    </StateField>
  );
}
