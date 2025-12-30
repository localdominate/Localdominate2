import { useEffect, useState } from "react";
import { Check, Image, Camera } from "lucide-react";

const GalleryAnimation = () => {
  const [activeImages, setActiveImages] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Staggered image reveal
    [0, 1, 2, 3, 4, 5].forEach((index) => {
      timers.push(
        setTimeout(() => {
          setActiveImages((prev) => [...prev, index]);
        }, 400 + index * 300)
      );
    });
    
    // Mark complete
    timers.push(
      setTimeout(() => {
        setIsComplete(true);
      }, 2500)
    );
    
    // Reset and loop
    timers.push(
      setTimeout(() => {
        setActiveImages([]);
        setIsComplete(false);
      }, 5000)
    );

    return () => timers.forEach(clearTimeout);
  }, [activeImages.length === 0]);

  const placeholderColors = [
    "from-blue-400/20 to-blue-600/20",
    "from-green-400/20 to-green-600/20",
    "from-purple-400/20 to-purple-600/20",
    "from-orange-400/20 to-orange-600/20",
    "from-pink-400/20 to-pink-600/20",
    "from-cyan-400/20 to-cyan-600/20",
  ];

  const imageLabels = [
    "Außenansicht",
    "Innenraum",
    "Team",
    "Produkte",
    "Ambiente",
    "Details",
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-card rounded-2xl border border-border shadow-lg p-4 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground text-sm">Foto-Galerie</span>
          </div>
          {isComplete && (
            <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full flex items-center gap-1 animate-fade-in">
              <Check className="w-3 h-3" />
              Optimiert
            </span>
          )}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg border-2 border-dashed transition-all duration-500 overflow-hidden relative ${
                activeImages.includes(index)
                  ? "border-primary/50 bg-gradient-to-br " + placeholderColors[index]
                  : "border-border/50 bg-muted/20"
              }`}
              style={{
                transform: activeImages.includes(index) ? "scale(1)" : "scale(0.9)",
                opacity: activeImages.includes(index) ? 1 : 0.4,
              }}
            >
              {activeImages.includes(index) ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-6 h-6 text-primary/60" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-1 py-0.5">
                    <span className="text-[10px] text-foreground/70 truncate block text-center">
                      {imageLabels[index]}
                    </span>
                  </div>
                  {isComplete && (
                    <div className="absolute top-1 right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center animate-scale-in">
                      <Check className="w-3 h-3 text-success-foreground" />
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground/30">+</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Optimierungsfortschritt</span>
            <span className="text-primary font-medium">
              {Math.round((activeImages.length / 6) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(activeImages.length / 6) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
    </div>
  );
};

export default GalleryAnimation;
