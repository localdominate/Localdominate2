import { VideoPlayer } from "./VideoPlayer";
import poster from "@/assets/v4/showreel-poster.webp";
import posterSmall from "@/assets/v4/showreel-poster-640.webp";
import video720 from "@/assets/v4/showreel-720.mp4";
import video480 from "@/assets/v4/showreel-480.mp4";

/**
 * The LocalDominate showreel: the seven steps as a camera ride, 20 seconds, silent.
 * Made for this site. It shows abstract interface sketches only: no client logos, no figures,
 * no testimonials (Project Bible V4, Hard Rule 06).
 */
export function ShowreelFilm({ className }: { className?: string }) {
  return (
    <VideoPlayer
      className={className}
      poster={poster}
      posterSmall={posterSmall}
      title="LocalDominate showreel: the seven steps from diagnosis to scale"
      sources={[
        { src: video480, media: "(max-width: 640px)" },
        { src: video720 },
      ]}
    />
  );
}
