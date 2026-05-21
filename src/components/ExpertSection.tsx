import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import expertProfile from "@/assets/expert-profile.webp";

const ExpertSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-4xl">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 reveal ${isVisible ? 'visible' : ''}`}>
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border border-primary/20 overflow-hidden shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105">
              <img 
                src={expertProfile} 
                alt="Local SEO Experte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              {t.expert.eyebrow}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t.expert.text}
            </p>
            {/* Signature */}
            <p className="text-foreground font-bold text-xl">
              {t.expert.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
