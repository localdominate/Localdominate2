import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  restaurant: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Marco R.",
    restaurant: "Ristorante Milano",
    quote: "30% mehr Reservierungen im ersten Monat!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    restaurant: "Café Central",
    quote: "Endlich finden uns die Kunden auf Google Maps.",
    rating: 5,
  },
  {
    name: "Thomas H.",
    restaurant: "Wirtshaus zum Löwen",
    quote: "Die beste Investition für unser Restaurant.",
    rating: 5,
  },
  {
    name: "Elena P.",
    restaurant: "Trattoria Bella",
    quote: "Persönlicher Service, schnelle Umsetzung!",
    rating: 5,
  },
  {
    name: "Michael B.",
    restaurant: "Gasthaus Alm",
    quote: "Mehr Laufkundschaft als je zuvor.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex-shrink-0 w-72 md:w-80 p-6 mx-3 bg-menu-dark/50 border border-menu-gold/20 rounded backdrop-blur-sm">
    {/* Stars */}
    <div className="flex gap-1 mb-3">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-menu-gold text-menu-gold" />
      ))}
    </div>
    
    {/* Quote */}
    <p className="font-menu-serif text-lg italic text-menu-cream/90 mb-4">
      „{testimonial.quote}"
    </p>
    
    {/* Author */}
    <div className="border-t border-menu-gold/20 pt-3">
      <p className="font-menu-serif text-menu-cream text-sm">{testimonial.name}</p>
      <p className="text-menu-cream/50 text-xs">{testimonial.restaurant}</p>
    </div>
  </div>
);

const TestimonialsTicker = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden py-8">
      <div className="menu-ticker">
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsTicker;
