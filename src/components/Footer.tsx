import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] py-10 px-4">
      <div className="container max-w-5xl">
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          <a 
            href="https://www.e-recht24.de/muster-impressum.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            {t.footer.imprint}
          </a>
          <a 
            href="https://www.e-recht24.de/muster-datenschutzerklaerung.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            {t.footer.privacy}
          </a>
          <a 
            href="https://www.e-recht24.de/muster-agb.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            {t.footer.terms}
          </a>
          <a 
            href="https://www.e-recht24.de/muster-widerrufsbelehrung.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            {t.footer.withdrawal}
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-white text-center mb-6">
          {t.footer.copyright}
        </p>
        
        {/* Disclaimer */}
        <p className="text-white/60 text-xs text-center max-w-2xl mx-auto">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
