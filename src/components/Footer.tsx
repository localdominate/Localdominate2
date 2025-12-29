import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-pain py-12 px-4">
      <div className="container max-w-5xl">
        {/* Restaurant Marketing Link */}
        <div className="flex justify-center mb-10">
          <Link to="/restaurant-marketing">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <Utensils className="w-5 h-5 mr-2" />
              Restaurant-Marketing entdecken
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          <Link 
            to="/impressum"
            className="text-pain-foreground/80 hover:text-primary transition-colors font-medium"
          >
            {t.footer.imprint}
          </Link>
          <Link 
            to="/datenschutz"
            className="text-pain-foreground/80 hover:text-primary transition-colors font-medium"
          >
            {t.footer.privacy}
          </Link>
          <Link 
            to="/agb"
            className="text-pain-foreground/80 hover:text-primary transition-colors font-medium"
          >
            {t.footer.terms}
          </Link>
          <a 
            href="https://www.e-recht24.de/muster-widerrufsbelehrung.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pain-foreground/80 hover:text-primary transition-colors font-medium"
          >
            {t.footer.withdrawal}
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-pain-foreground/80 text-center mb-6">
          {t.footer.copyright}
        </p>
        
        {/* Disclaimer */}
        <p className="text-pain-foreground/50 text-xs text-center max-w-2xl mx-auto">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
