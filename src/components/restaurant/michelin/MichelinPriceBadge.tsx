interface MichelinPriceBadgeProps {
  price: number;
  suffix?: string;
  anchor?: number;
}

const MichelinPriceBadge = ({ price, suffix = '/Monat', anchor }: MichelinPriceBadgeProps) => {
  return (
    <div className="text-center py-8">
      {anchor && (
        <p className="rest-price-anchor mb-2">{anchor}€</p>
      )}
      <div className="flex items-baseline justify-center gap-1">
        <span className="rest-price">{price}€</span>
        <span className="rest-price-suffix">{suffix}</span>
      </div>
    </div>
  );
};

export default MichelinPriceBadge;
