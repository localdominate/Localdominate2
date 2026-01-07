import { useLanguage } from "@/i18n/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Utensils, ArrowRight } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-pain py-12 px-4">
      <div className="container max-w-5xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Local Dominator Logo" className="h-12 w-auto" />
          </Link>
        </div>
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className={`border-primary/50 transition-all ${
                currentPath.startsWith('/blog') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              📚 Blog
            </Button>
          </Link>
          <Link to="/restaurant-marketing">
            <Button
              variant="outline"
              size="lg"
              className={`border-primary/50 transition-all group ${
                currentPath === '/restaurant-marketing'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Utensils className="w-5 h-5 mr-2" />
              Restaurant-Marketing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Legal Links - touch-friendly spacing */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-6">
          <Link
            to="/impressum"
            className={`transition-colors font-medium px-3 py-2 touch-target inline-flex items-center justify-center ${
              currentPath === '/impressum' ? 'text-primary' : 'text-pain-foreground/80 hover:text-primary'
            }`}
          >
            {t.footer.imprint}
          </Link>
          <Link
            to="/datenschutz"
            className={`transition-colors font-medium px-3 py-2 touch-target inline-flex items-center justify-center ${
              currentPath === '/datenschutz' ? 'text-primary' : 'text-pain-foreground/80 hover:text-primary'
            }`}
          >
            {t.footer.privacy}
          </Link>
          <Link
            to="/agb"
            className={`transition-colors font-medium px-3 py-2 touch-target inline-flex items-center justify-center ${
              currentPath === '/agb' ? 'text-primary' : 'text-pain-foreground/80 hover:text-primary'
            }`}
          >
            {t.footer.terms}
          </Link>
          <a
            href="https://www.e-recht24.de/muster-widerrufsbelehrung.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pain-foreground/80 hover:text-primary transition-colors font-medium px-3 py-2 touch-target inline-flex items-center justify-center"
          >
            {t.footer.withdrawal}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-pain-foreground/80 text-center mb-6">{t.footer.copyright}</p>

        {/* Disclaimer */}
        <p className="text-pain-foreground/50 text-xs text-center max-w-2xl mx-auto">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
