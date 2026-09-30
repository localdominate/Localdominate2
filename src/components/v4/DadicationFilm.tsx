import { VideoPlayer } from "./VideoPlayer";
import poster from "@/assets/v4/dadication-hero-poster.webp";
import posterSmall from "@/assets/v4/dadication-hero-poster-640.webp";
import video720 from "@/assets/v4/dadication-hero-720.mp4";
import video480 from "@/assets/v4/dadication-hero-480.mp4";

/** The Dadication store hero film (used with the owner's confirmed consent, see v4Cases.ts). */
export function DadicationFilm({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <VideoPlayer
      className={className}
      priority={priority}
      poster={poster}
      posterSmall={posterSmall}
      title="Dadication store, hero film"
      sources={[
        { src: video480, media: "(max-width: 640px)" },
        { src: video720 },
      ]}
    />
  );
}
