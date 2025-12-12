import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.imprint}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
