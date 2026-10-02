import { cn } from "@/lib/utils";

/**
 * Device frames drawn in CSS only (no bezel images): a phone and a browser window. The class
 * strings are exported so the live demo can change the frame around one and the same iframe.
 */
export const PHONE_SHELL =
  "rounded-[2.6rem] border border-v4-ivory/20 bg-[#1A1A18] p-2.5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]";
export const PHONE_SCREEN = "overflow-hidden rounded-[2rem] bg-v4-ivory";
export const BROWSER_SHELL =
  "overflow-hidden rounded-2xl border border-v4-ivory/20 bg-[#1A1A18] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]";

/** The speaker slit in the top edge of the phone. It sits in the bezel, so it never covers the page. */
export function PhoneSpeaker() {
  return (
    <div aria-hidden="true" className="flex h-4 items-start justify-center">
      <span className="mt-0.5 h-1.5 w-16 rounded-full bg-v4-ivory/15" />
    </div>
  );
}

/** Title bar of the browser window: three dots and the address. */
export function BrowserBar({ address }: { address: string }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-4 border-b border-v4-ivory/10 px-4 py-3">
      <span className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-v4-ivory/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-v4-ivory/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-v4-ivory/25" />
      </span>
      <span className="flex-1 truncate rounded-full bg-v4-ivory/10 px-4 py-1.5 font-v4-mono text-xs text-v4-ivory/70">
        {address}
      </span>
      <span className="hidden w-[3.25rem] sm:block" />
    </div>
  );
}
