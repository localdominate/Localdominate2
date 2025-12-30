import { Shield, Lock, CreditCard, CheckCircle } from "lucide-react";

const TrustBadgesRestaurant = () => {
  return (
    <div className="space-y-4">
      {/* Payment Methods */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--menu-cream))]/50 rounded-lg border border-[hsl(var(--menu-gold))]/10">
          <CreditCard className="w-4 h-4 text-[hsl(var(--menu-gold))]" />
          <span className="text-xs text-[hsl(var(--menu-brown))]/70">VISA</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--menu-cream))]/50 rounded-lg border border-[hsl(var(--menu-gold))]/10">
          <CreditCard className="w-4 h-4 text-[hsl(var(--menu-gold))]" />
          <span className="text-xs text-[hsl(var(--menu-brown))]/70">Mastercard</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--menu-cream))]/50 rounded-lg border border-[hsl(var(--menu-gold))]/10">
          <span className="text-xs font-bold text-blue-600">PayPal</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[hsl(var(--menu-cream))]/50 rounded-lg border border-[hsl(var(--menu-gold))]/10">
          <Lock className="w-4 h-4 text-green-600" />
          <span className="text-xs text-[hsl(var(--menu-brown))]/70">SSL</span>
        </div>
      </div>

      {/* Trust Line */}
      <div className="flex items-center justify-center gap-6 text-sm text-[hsl(var(--menu-brown))]/60">
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4 text-[hsl(var(--menu-gold))]" />
          <span>Sichere Zahlung</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>127+ Restaurants</span>
        </div>
      </div>

      {/* Guarantee Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[hsl(var(--menu-gold))]/5 to-[hsl(var(--menu-gold))]/10 rounded-xl border border-[hsl(var(--menu-gold))]/20">
          <div className="w-12 h-12 rounded-full bg-[hsl(var(--menu-gold))]/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[hsl(var(--menu-gold))]" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-[hsl(var(--menu-brown))]">
              30 Tage Geld-zurück-Garantie
            </p>
            <p className="text-xs text-[hsl(var(--menu-brown))]/60">
              Nicht zufrieden? Volle Rückerstattung, ohne Wenn und Aber.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgesRestaurant;
