import { useEffect, useState } from "react";
import { Star, MessageSquare, QrCode } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const translations: Record<string, {
  googleRating: string;
  excellent: string;
  optimizing: string;
  reviewLink: string;
  scanForStars: string;
  reviews: { name: string; text: string }[];
}> = {
  de: {
    googleRating: "Google Bewertung",
    excellent: "Exzellent!",
    optimizing: "Wird optimiert...",
    reviewLink: "Bewertungs-Link",
    scanForStars: "Scannen für 5-Sterne",
    reviews: [
      { name: "Maria S.", text: "Sehr professionell!" },
      { name: "Thomas K.", text: "Top Service! ⭐⭐⭐⭐⭐" },
      { name: "Lisa M.", text: "Absolut empfehlenswert" },
    ],
  },
  en: {
    googleRating: "Google Rating",
    excellent: "Excellent!",
    optimizing: "Optimizing...",
    reviewLink: "Review Link",
    scanForStars: "Scan for 5 Stars",
    reviews: [
      { name: "Maria S.", text: "Very professional!" },
      { name: "Thomas K.", text: "Top Service! ⭐⭐⭐⭐⭐" },
      { name: "Lisa M.", text: "Highly recommended" },
    ],
  },
  ar: {
    googleRating: "تقييم Google",
    excellent: "ممتاز!",
    optimizing: "جارٍ التحسين...",
    reviewLink: "رابط التقييم",
    scanForStars: "امسح للحصول على 5 نجوم",
    reviews: [
      { name: "سارة م.", text: "!احترافية عالية" },
      { name: "أحمد ك.", text: "خدمة ممتازة! ⭐⭐⭐⭐⭐" },
      { name: "ليلى ع.", text: "أنصح به بشدة" },
    ],
  },
};

const StarAnimation = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const isRTL = language === 'ar';
  
  const [filledStars, setFilledStars] = useState(0);
  const [rating, setRating] = useState(3.2);
  const [reviews, setReviews] = useState<number[]>([]);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    [1, 2, 3, 4, 5].forEach((star, index) => {
      timers.push(
        setTimeout(() => {
          setFilledStars(star);
          setRating(3.2 + (star * 0.36));
        }, 400 + index * 400)
      );
    });
    
    [0, 1, 2].forEach((review, index) => {
      timers.push(setTimeout(() => setReviews((prev) => [...prev, review]), 2500 + index * 300));
    });
    
    timers.push(setTimeout(() => setShowQR(true), 3500));
    timers.push(setTimeout(() => { setFilledStars(0); setRating(3.2); setReviews([]); setShowQR(false); }, 6000));

    return () => timers.forEach(clearTimeout);
  }, [filledStars === 0]);

  return (
    <div className="relative w-full max-w-sm mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="bg-card rounded-2xl border border-border shadow-lg p-4 space-y-4">
        <div className="text-center space-y-2">
          <div className="flex justify-center gap-1" dir="ltr">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 transition-all duration-300 ${
                  star <= filledStars
                    ? "text-yellow-400 fill-yellow-400 scale-110"
                    : "text-muted-foreground/30"
                }`}
                style={{
                  filter: star <= filledStars ? "drop-shadow(0 0 8px rgba(250, 204, 21, 0.5))" : "none",
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-foreground" dir="ltr">
              {rating.toFixed(1)}
            </span>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="text-xs text-muted-foreground">{t.googleRating}</div>
              <div className="text-xs text-primary font-medium">
                {filledStars === 5 ? t.excellent : t.optimizing}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 min-h-[100px]">
          {reviews.map((reviewIndex) => (
            <div
              key={reviewIndex}
              className="flex items-start gap-2 bg-muted/30 rounded-lg p-2 animate-fade-in"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-3 h-3 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-foreground">
                  {t.reviews[reviewIndex].name}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {t.reviews[reviewIndex].text}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-500 ${showQR ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl p-3">
            <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center border border-border relative overflow-hidden">
              <QrCode className="w-8 h-8 text-foreground" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-foreground">{t.reviewLink}</div>
              <div className="text-xs text-primary">{t.scanForStars}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />
    </div>
  );
};

export default StarAnimation;
