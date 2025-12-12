import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 px-4">
      <div className="container max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            {t.testimonials.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.testimonials.subheadline}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border-4 border-foreground p-6 md:p-8 shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Result badge */}
              <div className="inline-block bg-success/20 text-success font-bold text-sm px-3 py-1 mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img 
                  src={images[index]} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-foreground"
                />
                <div>
                  <p className="font-black text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {images.map((img, i) => (
                <img 
                  key={i}
                  src={img} 
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold border-2 border-background">
                +97
              </div>
            </div>
            <span className="text-foreground font-bold ml-2">
              {t.testimonials.trustIndicator}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
