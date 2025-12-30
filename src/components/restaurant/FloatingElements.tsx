import { useMultiLayerParallax } from "@/hooks/useParallax";

const FloatingElements = () => {
  const [layer1Style, layer2Style, layer3Style] = useMultiLayerParallax([
    { speed: 0.02, direction: "up" },
    { speed: 0.03, direction: "down" },
    { speed: 0.015, direction: "up" },
  ]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {/* Layer 1 - Slow floating ornaments */}
      <div style={layer1Style} className="absolute inset-0">
        <span className="absolute top-[15%] left-[8%] text-menu-gold/10 text-4xl font-menu-serif">
          ✦
        </span>
        <span className="absolute top-[45%] right-[12%] text-menu-gold/8 text-3xl font-menu-serif">
          ◆
        </span>
        <span className="absolute bottom-[25%] left-[15%] text-menu-gold/10 text-2xl font-menu-serif">
          ❧
        </span>
      </div>

      {/* Layer 2 - Medium speed particles */}
      <div style={layer2Style} className="absolute inset-0">
        <div className="absolute top-[20%] right-[20%] w-1 h-1 rounded-full bg-menu-gold/20" />
        <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-menu-gold/15" />
        <div className="absolute bottom-[30%] right-[30%] w-1 h-1 rounded-full bg-menu-gold/20" />
        <span className="absolute top-[70%] right-[8%] text-menu-gold/10 text-xl font-menu-serif">
          ✦
        </span>
      </div>

      {/* Layer 3 - Subtle slow ornaments */}
      <div style={layer3Style} className="absolute inset-0">
        <span className="absolute top-[35%] left-[5%] text-menu-gold/5 text-5xl font-menu-serif rotate-12">
          ❦
        </span>
        <span className="absolute bottom-[40%] right-[5%] text-menu-gold/5 text-4xl font-menu-serif -rotate-12">
          ❦
        </span>
      </div>
    </div>
  );
};

export default FloatingElements;
