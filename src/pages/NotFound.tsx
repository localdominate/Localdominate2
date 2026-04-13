import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, BookOpen, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const t = {
    de: {
      title: "Seite nicht gefunden (404)",
      heading: "Seite nicht gefunden",
      description: "Die Seite",
      descriptionEnd: "existiert leider nicht oder wurde verschoben.",
      home: "Zur Startseite",
      back: "Zurück",
      popular: "Beliebte Seiten:",
      links: [
        { href: "/", label: "Startseite", icon: Home },
        { href: "/blog", label: "Blog", icon: BookOpen },
        { href: "/blog/google-maps-ranking-verbessern", label: "Google Maps Ranking", icon: MapPin },
        { href: "/blog/google-bewertungen-bekommen", label: "Google Bewertungen", icon: Star },
      ],
    },
    en: {
      title: "Page Not Found (404)",
      heading: "Page Not Found",
      description: "The page",
      descriptionEnd: "does not exist or has been moved.",
      home: "Go to Homepage",
      back: "Go Back",
      popular: "Popular pages:",
      links: [
        { href: "/", label: "Homepage", icon: Home },
        { href: "/blog", label: "Blog", icon: BookOpen },
        { href: "/blog/google-maps-ranking-verbessern", label: "Google Maps Ranking", icon: MapPin },
        { href: "/blog/google-bewertungen-bekommen", label: "Google Reviews", icon: Star },
      ],
    },
    ar: {
      title: "الصفحة غير موجودة (404)",
      heading: "الصفحة غير موجودة",
      description: "الصفحة",
      descriptionEnd: "غير موجودة أو تم نقلها.",
      home: "الصفحة الرئيسية",
      back: "رجوع",
      popular: "صفحات شائعة:",
      links: [
        { href: "/", label: "الصفحة الرئيسية", icon: Home },
        { href: "/blog", label: "المدونة", icon: BookOpen },
        { href: "/blog/google-maps-ranking-verbessern", label: "ترتيب خرائط Google", icon: MapPin },
        { href: "/blog/google-bewertungen-bekommen", label: "تقييمات Google", icon: Star },
      ],
    },
  };

  const c = t[language] || t.de;

  return (
    <>
      <SEOHead
        title={c.title}
        description={c.heading}
        noindex={true}
        lang={language}
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          <Link to="/" className="inline-block mb-8">
            <img 
              src="/logo.png" 
              alt="Local Dominator Logo" 
              className="h-12 mx-auto"
            />
          </Link>

          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {c.heading}
          </h2>
          <p className="text-muted-foreground mb-8">
            {c.description} <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> {c.descriptionEnd}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2" />
                {c.home}
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />
              {c.back}
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Search className="h-4 w-4" />
              {c.popular}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {c.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm text-foreground transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
