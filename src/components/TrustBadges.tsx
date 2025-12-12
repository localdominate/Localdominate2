import { Lock, CreditCard, Shield } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-4 opacity-60">
      <span className="text-xs text-muted-foreground">Sichere Zahlung via:</span>
      <div className="flex items-center gap-2">
        {/* Stripe */}
        <div className="bg-muted px-2 py-1 rounded flex items-center gap-1">
          <CreditCard className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-bold text-muted-foreground">Stripe</span>
        </div>
        {/* PayPal */}
        <div className="bg-muted px-2 py-1 rounded">
          <span className="text-xs font-bold text-muted-foreground">PayPal</span>
        </div>
        {/* Visa */}
        <div className="bg-muted px-2 py-1 rounded">
          <span className="text-xs font-bold text-muted-foreground">VISA</span>
        </div>
        {/* Mastercard */}
        <div className="bg-muted px-2 py-1 rounded">
          <span className="text-xs font-bold text-muted-foreground">MC</span>
        </div>
        {/* SSL */}
        <div className="bg-muted px-2 py-1 rounded flex items-center gap-1">
          <Lock className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs font-bold text-muted-foreground">SSL</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
