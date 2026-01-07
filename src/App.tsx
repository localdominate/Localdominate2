import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";  
import { ABTestProvider } from "@/hooks/useABTest";
import Index from "./pages/Index";
import RestaurantMarketing from "./pages/RestaurantMarketing";
import Danke from "./pages/Danke";
import Onboarding from "./pages/Onboarding";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Blog from "./pages/Blog";
import GoogleMapsRanking from "./pages/blog/GoogleMapsRanking";
import GoogleBewertungen from "./pages/blog/GoogleBewertungen";
import LocalSeoRestaurant from "./pages/blog/LocalSeoRestaurant";
import GoogleMyBusiness from "./pages/blog/GoogleMyBusiness";
import LokaleSeo2026 from "./pages/blog/LokaleSeo2026";
import NapKonsistenz from "./pages/blog/NapKonsistenz";
import LocalSeoHandwerker from "./pages/blog/LocalSeoHandwerker";
import LocalSeoAuditCheckliste from "./pages/blog/LocalSeoAuditCheckliste";
import Analytics from "./pages/Analytics";
import ABTestDashboard from "./pages/ABTestDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ABTestProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/ab-test" element={<ABTestDashboard />} />
              <Route path="/restaurant-marketing" element={<RestaurantMarketing />} />
              <Route path="/danke" element={<Danke />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/google-maps-ranking-verbessern" element={<GoogleMapsRanking />} />
              <Route path="/blog/google-bewertungen-bekommen" element={<GoogleBewertungen />} />
              <Route path="/blog/local-seo-fuer-restaurants" element={<LocalSeoRestaurant />} />
              <Route path="/blog/google-my-business-optimieren" element={<GoogleMyBusiness />} />
              <Route path="/blog/lokale-suchmaschinenoptimierung-2026" element={<LokaleSeo2026 />} />
              <Route path="/blog/nap-konsistenz-local-seo" element={<NapKonsistenz />} />
              <Route path="/blog/local-seo-handwerker" element={<LocalSeoHandwerker />} />
              <Route path="/blog/local-seo-audit-checkliste" element={<LocalSeoAuditCheckliste />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ABTestProvider>
  </QueryClientProvider>
);

export default App;
