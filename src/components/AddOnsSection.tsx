import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, FileText, BarChart3, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export interface AddOn {
  id: string;
  icon: React.ReactNode;
  price: number;
  popular?: boolean;
}

interface AddOnsSectionProps {
  selectedAddOns: string[];
  onToggleAddOn: (id: string) => void;
  showHeader?: boolean;
}

const AddOnsSection = ({ selectedAddOns, onToggleAddOn, showHeader = true }: AddOnsSectionProps) => {
  const { language, t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  
  const addOns: AddOn[] = [
    {
      id: "express",
      icon: <Clock className="w-5 h-5" />,
      price: 99,
      popular: true,
    },
    {
      id: "competitor",
      icon: <BarChart3 className="w-5 h-5" />,
      price: 79,
    },
    {
      id: "premium_texts",
      icon: <FileText className="w-5 h-5" />,
      price: 99,
    },
    {
      id: "photo_pack",
      icon: <Zap className="w-5 h-5" />,
      price: 149,
    },
  ];

  const addOnTranslations = t.addOns.items;

  const isSelected = (id: string) => selectedAddOns.includes(id);
  
  const totalAddOnPrice = selectedAddOns.reduce((sum, id) => {
    const addOn = addOns.find(a => a.id === id);
    return sum + (addOn?.price || 0);
  }, 0);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
      {showHeader && (
        <div className="text-center mb-8">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">
            {t.addOns.eyebrow}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.addOns.headline}
          </h3>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {addOns.map((addOn) => {
          const translation = addOnTranslations[addOn.id as keyof typeof addOnTranslations];
          const selected = isSelected(addOn.id);
          
          return (
            <button
              key={addOn.id}
              onClick={() => onToggleAddOn(addOn.id)}
              className={cn(
                "relative p-4 rounded-xl border-2 transition-all duration-200 text-left group",
                selected 
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/50 bg-card hover:bg-card/80"
              )}
            >
              {addOn.popular && (
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-highlight text-highlight-foreground text-xs font-semibold rounded-full">
                  {language === 'de' ? 'Beliebt' : language === 'ar' ? 'شائع' : 'Popular'}
                </span>
              )}
              
              <div className="flex items-start gap-3">
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                  selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20"
                )}>
                  {addOn.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-foreground truncate">
                      {translation?.title}
                    </h4>
                    <span className="font-bold text-primary whitespace-nowrap">
                      +{formatPrice(addOn.price, language)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {translation?.description}
                  </p>
                </div>
                
                <div className={cn(
                  "flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                  selected 
                    ? "bg-primary border-primary" 
                    : "border-muted-foreground/30"
                )}>
                  {selected && <Check className="w-3 h-3 text-primary-foreground" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedAddOns.length > 0 && (
        <div className="mt-4 p-3 bg-success/10 border border-success/30 rounded-lg flex items-center justify-between">
          <span className="text-sm text-success font-medium">
            {selectedAddOns.length} {language === 'de' ? 'Add-On(s) ausgewählt' : language === 'ar' ? 'إضافات مختارة' : 'add-on(s) selected'}
          </span>
          <span className="font-bold text-success">
            +{formatPrice(totalAddOnPrice, language)}
          </span>
        </div>
      )}
    </div>
  );
};

export default AddOnsSection;

export const ADD_ON_PRICES: Record<string, number> = {
  express: 99,
  competitor: 79,
  premium_texts: 99,
  photo_pack: 149,
};

export const calculateTotalWithAddOns = (basePrice: number, selectedAddOns: string[]): number => {
  const addOnTotal = selectedAddOns.reduce((sum, id) => sum + (ADD_ON_PRICES[id] || 0), 0);
  return basePrice + addOnTotal;
};
