import { Check } from 'lucide-react';

interface MichelinFeatureListProps {
  features: Array<{
    name: string;
    value?: string;
  }>;
}

const MichelinFeatureList = ({ features }: MichelinFeatureListProps) => {
  return (
    <div className="py-6 border-t border-b border-[hsl(var(--rest-border))]">
      {features.map((feature, index) => (
        <div key={index} className="rest-feature-item">
          <div className="flex items-center">
            <Check className="rest-feature-check w-4 h-4" />
            <span className="rest-feature-name">{feature.name}</span>
          </div>
          {feature.value && (
            <span className="rest-feature-value">{feature.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MichelinFeatureList;
