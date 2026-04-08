import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  text: string;
  urgency?: string;
  onClick: () => void;
}

const InlineCTA = ({ text, urgency, onClick }: Props) => (
  <div className="flex flex-col items-center gap-2 py-8">
    <Button variant="cta" size="lg" className="group" onClick={onClick}>
      {text}
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
    {urgency && (
      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        {urgency}
      </p>
    )}
  </div>
);

export default InlineCTA;
