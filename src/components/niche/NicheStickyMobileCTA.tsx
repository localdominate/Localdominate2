import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  ctaText: string;
  onCtaClick: () => void;
  whatsappNumber?: string;
}

const NicheStickyMobileCTA = ({ ctaText, onCtaClick, whatsappNumber = "4915678123456" }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(pct > 0.12 && pct < 0.92);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-sm border-t border-border/50 md:hidden animate-fade-in">
      <div className="flex gap-2">
        <Button variant="cta" size="lg" className="flex-1 group" onClick={onCtaClick}>
          {ctaText}
          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors flex-shrink-0"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default NicheStickyMobileCTA;
