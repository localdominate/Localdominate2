import { useState } from "react";
import { cn } from "@/lib/utils";

type VideoSource = { src: string; media?: string };

/**
 * Click-to-play video. Until the visitor clicks, only the poster image is loaded (`preload="none"`
 * and the <video> element is not even mounted), so the page keeps its Lighthouse score. The
 * videos on the V4 pages have no audio track, so they start muted.
 */
export function VideoPlayer({
  poster,
  sources,
  title,
  width = 1280,
  height = 720,
  className,
}: {
  poster: string;
  sources: readonly VideoSource[];
  /** Accessible name, e.g. "Dadication store, hero film". */
  title: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-v4-ink", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {playing ? (
        <video
          className="h-full w-full object-cover"
          poster={poster}
          controls
          autoPlay
          muted
          playsInline
          preload="none"
          aria-label={title}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} media={s.media} type="video/mp4" />
          ))}
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 block h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-v4-signal"
        >
          <img
            src={poster}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-v4-ink/20 transition-colors group-hover:bg-v4-ink/30" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-v4-signal text-v4-ink md:h-20 md:w-20"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 md:h-7 md:w-7" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
