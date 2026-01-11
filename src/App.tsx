import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";  
import { ABTestProvider } from "@/hooks/useABTest";
import CoreWebVitalsTracker from "@/components/CoreWebVitalsTracker";
import Index from "./pages/Index";
import RestaurantMarketing from "./pages/RestaurantMarketing";
import HandwerkerMarketing from "./pages/HandwerkerMarketing";
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
import LocalSeoKeywords from "./pages/blog/LocalSeoKeywords";
import Analytics from "./pages/Analytics";
import ABTestDashboard from "./pages/ABTestDashboard";
import ABTestZentrale from "./pages/ABTestZentrale";
import NotFound from "./pages/NotFound";
import LocalSeoSchweiz from "./pages/blog/LocalSeoSchweiz";
import LocalSeoZuerich from "./pages/blog/LocalSeoZuerich";
import LocalSeoMuenchen from "./pages/blog/LocalSeoMuenchen";
import LocalSeoAerzte from "./pages/blog/LocalSeoAerzte";
import LocalSeoAnwaelte from "./pages/blog/LocalSeoAnwaelte";
import LocalSeoHotels from "./pages/blog/LocalSeoHotels";
import LocalSeoFitness from "./pages/blog/LocalSeoFitness";
import SchemaMarkupLocalSeo from "./pages/blog/SchemaMarkupLocalSeo";
import MobileLocalSeo from "./pages/blog/MobileLocalSeo";
import GoogleMapsRankingFaktoren from "./pages/blog/GoogleMapsRankingFaktoren";
import LocalLinkBuilding from "./pages/blog/LocalLinkBuilding";
import NegativeGoogleBewertungen from "./pages/blog/NegativeGoogleBewertungen";
import LocalContentMarketing from "./pages/blog/LocalContentMarketing";
import LocalSeoCaseStudy from "./pages/blog/LocalSeoCaseStudy";
import LocalSeoFehler from "./pages/blog/LocalSeoFehler";
import LocalSeoDoenerladen from "./pages/blog/LocalSeoDoenerladen";
import LocalSeoFriseur from "./pages/blog/LocalSeoFriseur";
import LocalSeoImmobilienmakler from "./pages/blog/LocalSeoImmobilienmakler";
import LocalSeoHamburg from "./pages/blog/LocalSeoHamburg";
import LocalSeoSteuerberater from "./pages/blog/LocalSeoSteuerberater";
import LocalSeoAutowerkstatt from "./pages/blog/LocalSeoAutowerkstatt";
import LocalSeoFrankfurt from "./pages/blog/LocalSeoFrankfurt";
import CoreWebVitalsLocalSeo from "./pages/blog/CoreWebVitalsLocalSeo";
import LocalSeoBerlin from "./pages/blog/LocalSeoBerlin";
import KostenloseSeo from "./pages/blog/KostenloseSeo";
import LocalSeoKoeln from "./pages/blog/LocalSeoKoeln";
import LocalSeoWien from "./pages/blog/LocalSeoWien";
import LocalSeoTierarzt from "./pages/blog/LocalSeoTierarzt";
import KiToolsLocalSeo from "./pages/blog/KiToolsLocalSeo";
import GoogleAiOverviews from "./pages/blog/GoogleAiOverviews";
import SeoToolbox from "./pages/blog/SeoToolbox";
import LocalSeoStuttgart from "./pages/blog/LocalSeoStuttgart";
import LocalSeoDuesseldorf from "./pages/blog/LocalSeoDuesseldorf";
import LocalSeoBasel from "./pages/blog/LocalSeoBasel";
import LocalSeoYoga from "./pages/blog/LocalSeoYoga";
import LocalSeoTattoo from "./pages/blog/LocalSeoTattoo";
import LocalSeoApotheke from "./pages/blog/LocalSeoApotheke";
import ContentPlanDashboard from "./pages/ContentPlanDashboard";
import MeineKunden from "./pages/MeineKunden";
import SeoLexikon from "./pages/SeoLexikon";
import ArticleFeedbackDashboard from "./pages/ArticleFeedbackDashboard";
import ResetPassword from "./pages/admin/ResetPassword";
import UpdatePassword from "./pages/admin/UpdatePassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ABTestProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CoreWebVitalsTracker trackToDatabase={false} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/ab-test" element={<ABTestDashboard />} />
              <Route path="/ab-test-zentrale" element={<ABTestZentrale />} />
              <Route path="/admin/content-plan" element={<ContentPlanDashboard />} />
              <Route path="/admin/kunden" element={<MeineKunden />} />
              <Route path="/admin/article-feedback" element={<ArticleFeedbackDashboard />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />
              <Route path="/admin/update-password" element={<UpdatePassword />} />
              <Route path="/restaurant-marketing" element={<RestaurantMarketing />} />
              <Route path="/handwerker-marketing" element={<HandwerkerMarketing />} />
              <Route path="/danke" element={<Danke />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/seo-lexikon" element={<SeoLexikon />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/google-maps-ranking-verbessern" element={<GoogleMapsRanking />} />
              <Route path="/blog/google-bewertungen-bekommen" element={<GoogleBewertungen />} />
              <Route path="/blog/local-seo-fuer-restaurants" element={<LocalSeoRestaurant />} />
              <Route path="/blog/google-my-business-optimieren" element={<GoogleMyBusiness />} />
              <Route path="/blog/lokale-suchmaschinenoptimierung-2026" element={<LokaleSeo2026 />} />
              <Route path="/blog/nap-konsistenz-local-seo" element={<NapKonsistenz />} />
              <Route path="/blog/local-seo-handwerker" element={<LocalSeoHandwerker />} />
              <Route path="/blog/local-seo-audit-checkliste" element={<LocalSeoAuditCheckliste />} />
              <Route path="/blog/local-seo-keywords-finden" element={<LocalSeoKeywords />} />
              <Route path="/blog/local-seo-schweiz" element={<LocalSeoSchweiz />} />
              <Route path="/blog/local-seo-zuerich" element={<LocalSeoZuerich />} />
              <Route path="/blog/local-seo-muenchen" element={<LocalSeoMuenchen />} />
              <Route path="/blog/local-seo-aerzte-praxen" element={<LocalSeoAerzte />} />
              <Route path="/blog/local-seo-anwaelte-kanzleien" element={<LocalSeoAnwaelte />} />
              <Route path="/blog/local-seo-hotels" element={<LocalSeoHotels />} />
              <Route path="/blog/local-seo-fitness" element={<LocalSeoFitness />} />
              <Route path="/blog/schema-markup-local-seo" element={<SchemaMarkupLocalSeo />} />
              <Route path="/blog/mobile-local-seo" element={<MobileLocalSeo />} />
              <Route path="/blog/google-maps-seo-ranking-faktoren" element={<GoogleMapsRankingFaktoren />} />
              <Route path="/blog/local-link-building" element={<LocalLinkBuilding />} />
              <Route path="/blog/negative-google-bewertungen" element={<NegativeGoogleBewertungen />} />
              <Route path="/blog/local-content-marketing" element={<LocalContentMarketing />} />
              <Route path="/blog/local-seo-case-study-baecker" element={<LocalSeoCaseStudy />} />
              <Route path="/blog/local-seo-fehler" element={<LocalSeoFehler />} />
              <Route path="/blog/local-seo-doener-kebab-imbiss" element={<LocalSeoDoenerladen />} />
              <Route path="/blog/local-seo-friseursalon-beauty" element={<LocalSeoFriseur />} />
              <Route path="/blog/local-seo-immobilienmakler" element={<LocalSeoImmobilienmakler />} />
              <Route path="/blog/local-seo-hamburg" element={<LocalSeoHamburg />} />
              <Route path="/blog/local-seo-steuerberater" element={<LocalSeoSteuerberater />} />
              <Route path="/blog/local-seo-autowerkstatt" element={<LocalSeoAutowerkstatt />} />
              <Route path="/blog/local-seo-frankfurt" element={<LocalSeoFrankfurt />} />
              <Route path="/blog/core-web-vitals-local-seo" element={<CoreWebVitalsLocalSeo />} />
              <Route path="/blog/local-seo-berlin" element={<LocalSeoBerlin />} />
              <Route path="/blog/kostenloses-seo-guide" element={<KostenloseSeo />} />
              <Route path="/blog/local-seo-koeln" element={<LocalSeoKoeln />} />
              <Route path="/blog/local-seo-wien" element={<LocalSeoWien />} />
              <Route path="/blog/local-seo-tierarzt" element={<LocalSeoTierarzt />} />
              <Route path="/blog/ki-tools-local-seo" element={<KiToolsLocalSeo />} />
              <Route path="/blog/google-ai-overviews-local-seo" element={<GoogleAiOverviews />} />
              <Route path="/blog/seo-toolbox-kostenlose-ressourcen" element={<SeoToolbox />} />
              <Route path="/blog/local-seo-stuttgart" element={<LocalSeoStuttgart />} />
              <Route path="/blog/local-seo-duesseldorf" element={<LocalSeoDuesseldorf />} />
              <Route path="/blog/local-seo-basel" element={<LocalSeoBasel />} />
              <Route path="/blog/local-seo-yoga-studios" element={<LocalSeoYoga />} />
              <Route path="/blog/local-seo-tattoo-studios" element={<LocalSeoTattoo />} />
              <Route path="/blog/local-seo-apotheken" element={<LocalSeoApotheke />} />
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
