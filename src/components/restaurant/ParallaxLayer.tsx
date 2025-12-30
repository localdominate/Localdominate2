import { ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
  disabled?: boolean;
}

const ParallaxLayer = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  disabled = false,
}: ParallaxLayerProps) => {
  const { ref, style } = useParallax({ speed, direction, disabled });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ParallaxLayer;
