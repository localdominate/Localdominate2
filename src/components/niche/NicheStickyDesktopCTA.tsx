import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  ctaText: string;
  onCtaClick: () => void;
  whatsappNumber?: string;
}

const NicheStickyDesktopCTA = ({ ctaText, onCtaClick, whatsappNumber = "4915678123456" }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(pct > 0.12 && pct < 0.92);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-3 
        px-5 py-2.5 rounded-full bg-background/95 backdrop-blur-md border border-border/50 shadow-lg
        transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
    >
      <span className="text-sm font-medium text-muted-foreground">Limited spots in Munich</span>
      <Button variant="cta" size="sm" className="group" onClick={onCtaClick}>
        {ctaText}
        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </div>
  );
};

export default NicheStickyDesktopCTA;
