import { useLanguage } from "@/i18n/LanguageContext";
import { Shield, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LastReviewedBadgeProps {
  reviewDate: string; // ISO date string
  reviewerName?: string;
  variant?: "default" | "compact" | "detailed";
}

const LastReviewedBadge = ({ 
  reviewDate, 
  reviewerName = "LocalDominate Redaktion",
  variant = "default"
}: LastReviewedBadgeProps) => {
  const isEn = useLanguage().language === "en";
  const formattedDate = new Date(reviewDate).toLocaleDateString(isEn ? 'en-GB' : 'de-DE', {
    year: 'numeric',
    month: 'long'
  });

  if (variant === "compact") {
    return (
      <Badge 
        variant="outline" 
        className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 gap-1"
      >
        <Shield className="h-3 w-3" />
        {isEn ? "Reviewed:" : "Geprüft:"} {formattedDate}
      </Badge>
    );
  }

  if (variant === "detailed") {
    return (
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 my-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-green-800 dark:text-green-200">
                Inhalt geprüft & aktuell
              </h4>
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm text-green-700 dark:text-green-300 mb-2">
              Dieser Artikel wurde am {formattedDate} von {reviewerName} auf Richtigkeit und Aktualität geprüft.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
              <Clock className="h-3 w-3" />
              <span>Nächste Überprüfung geplant für {new Date(new Date(reviewDate).setMonth(new Date(reviewDate).getMonth() + 6)).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-full px-3 py-1.5 text-sm">
      <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
      <span className="text-green-700 dark:text-green-300">
        Zuletzt geprüft: {formattedDate}
      </span>
    </div>
  );
};

export default LastReviewedBadge;
