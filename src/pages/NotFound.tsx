import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, BookOpen, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularLinks = [
    { href: "/", label: "Startseite", icon: Home },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/blog/google-maps-ranking-verbessern", label: "Google Maps Ranking", icon: MapPin },
    { href: "/blog/google-bewertungen-bekommen", label: "Google Bewertungen", icon: Star },
  ];

  return (
    <>
      <SEOHead
        title="Seite nicht gefunden (404)"
        description="Die angeforderte Seite konnte nicht gefunden werden. Zurück zur Startseite von Local Dominator."
        noindex={true}
        lang="de"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          {/* Logo */}
          <Link to="/" className="inline-block mb-8">
            <img 
              src="/logo.png" 
              alt="Local Dominator Logo" 
              className="h-12 mx-auto"
            />
          </Link>

          {/* 404 Heading */}
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-muted-foreground mb-8">
            Die Seite <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> existiert leider nicht oder wurde verschoben.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Zur Startseite
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
              <button type="button" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück
              </button>
            </Button>
          </div>

          {/* Popular Links */}
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Search className="h-4 w-4" />
              Beliebte Seiten:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularLinks.map((link) => (
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
