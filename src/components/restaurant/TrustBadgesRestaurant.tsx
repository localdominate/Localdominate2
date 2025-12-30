import { Shield, Lock, CreditCard, CheckCircle } from "lucide-react";

const TrustBadgesRestaurant = () => {
  return (
    <div className="space-y-5">
      {/* Payment Methods */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="pricing-trust-badge flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-[hsl(42_70%_45%)]" />
          <span className="text-xs font-medium text-[hsl(30_20%_35%)]">VISA</span>
        </div>
        <div className="pricing-trust-badge flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-[hsl(42_70%_45%)]" />
          <span className="text-xs font-medium text-[hsl(30_20%_35%)]">Mastercard</span>
        </div>
        <div className="pricing-trust-badge flex items-center gap-2">
          <span className="text-xs font-bold text-[hsl(210_80%_45%)]">PayPal</span>
        </div>
        <div className="pricing-trust-badge flex items-center gap-2">
          <Lock className="w-4 h-4 text-[hsl(145_50%_40%)]" />
          <span className="text-xs font-medium text-[hsl(30_20%_35%)]">SSL</span>
        </div>
      </div>

      {/* Trust Line */}
      <div className="flex items-center justify-center gap-6 text-sm text-[hsl(30_15%_45%)]">
        <div className="flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-[hsl(42_70%_45%)]" />
          <span>Sichere Zahlung</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-[hsl(145_50%_40%)]" />
          <span>127+ Restaurants</span>
        </div>
      </div>

      {/* Guarantee Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-4 px-6 py-4 bg-[hsl(40_28%_97%)] rounded-xl border-2 border-[hsl(42_50%_75%)]">
          <div className="pricing-guarantee-stamp">
            <Shield className="w-6 h-6 text-[hsl(42_70%_45%)]" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-[hsl(30_25%_20%)] font-['Cormorant_Garamond',serif]">
              30 Tage Geld-zurück-Garantie
            </p>
            <p className="text-xs text-[hsl(30_15%_50%)] mt-0.5">
              Nicht zufrieden? Volle Rückerstattung, ohne Wenn und Aber.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadgesRestaurant;
