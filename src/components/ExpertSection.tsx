import { useLanguage } from "@/i18n/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";

const ExpertSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-background section-padding px-4">
      <div ref={ref} className="container max-w-4xl">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 reveal ${isVisible ? 'visible' : ''}`}>
          {/* Profile Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center overflow-hidden">
              <svg 
                className="w-20 h-20 md:w-24 md:h-24 text-primary/40" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
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
