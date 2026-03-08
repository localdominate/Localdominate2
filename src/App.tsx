import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";  
import { ABTestProvider } from "@/hooks/useABTest";

// Critical pages loaded immediately
import Index from "./pages/Index";
import TrafficSplitter from "./components/TrafficSplitter";

// Lazy load non-critical pages
const RestaurantMarketing = lazy(() => import("./pages/RestaurantMarketing"));
const HandwerkerMarketing = lazy(() => import("./pages/HandwerkerMarketing"));
const ArztpraxisMarketing = lazy(() => import("./pages/ArztpraxisMarketing"));
const AnwaltMarketing = lazy(() => import("./pages/AnwaltMarketing"));
const DIYToolkit = lazy(() => import("./pages/DIYToolkit"));
const Danke = lazy(() => import("./pages/Danke"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const Blog = lazy(() => import("./pages/Blog"));
const Analytics = lazy(() => import("./pages/Analytics"));
const ABTestDashboard = lazy(() => import("./pages/ABTestDashboard"));
const ABTestZentrale = lazy(() => import("./pages/ABTestZentrale"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TestB = lazy(() => import("./pages/TestB"));
const ContentPlanDashboard = lazy(() => import("./pages/ContentPlanDashboard"));
const MeineKunden = lazy(() => import("./pages/MeineKunden"));
const SeoLexikon = lazy(() => import("./pages/SeoLexikon"));
const ArticleFeedbackDashboard = lazy(() => import("./pages/ArticleFeedbackDashboard"));
const BlogAnalytics = lazy(() => import("./pages/BlogAnalytics"));
const ContentPerformanceDashboard = lazy(() => import("./pages/ContentPerformanceDashboard"));
const ConversionOptimizationReport = lazy(() => import("./pages/ConversionOptimizationReport"));
const InternalLinkingDashboard = lazy(() => import("./pages/InternalLinkingDashboard"));
const ResetPassword = lazy(() => import("./pages/admin/ResetPassword"));
const UpdatePassword = lazy(() => import("./pages/admin/UpdatePassword"));
const ContentUpdateCalendar = lazy(() => import("./pages/ContentUpdateCalendar"));

const GoogleMapsRanking = lazy(() => import("./pages/blog/GoogleMapsRanking"));
const GoogleBewertungen = lazy(() => import("./pages/blog/GoogleBewertungen"));
const LocalSeoRestaurant = lazy(() => import("./pages/blog/LocalSeoRestaurant"));
const LocalSeoAnwaelteKanzleien = lazy(() => import("./pages/blog/LocalSeoAnwaelteKanzleien"));
const GoogleMyBusiness = lazy(() => import("./pages/blog/GoogleMyBusiness"));
const LokaleSeo2026 = lazy(() => import("./pages/blog/LokaleSeo2026"));
const NapKonsistenz = lazy(() => import("./pages/blog/NapKonsistenz"));
const LocalSeoHandwerker = lazy(() => import("./pages/blog/LocalSeoHandwerker"));
const LocalSeoAuditCheckliste = lazy(() => import("./pages/blog/LocalSeoAuditCheckliste"));
const LocalSeoKeywords = lazy(() => import("./pages/blog/LocalSeoKeywords"));
const LocalSeoSchweiz = lazy(() => import("./pages/blog/LocalSeoSchweiz"));
const LocalSeoZuerich = lazy(() => import("./pages/blog/LocalSeoZuerich"));
const LocalSeoMuenchen = lazy(() => import("./pages/blog/LocalSeoMuenchen"));
const LocalSeoAerzte = lazy(() => import("./pages/blog/LocalSeoAerzte"));
const LocalSeoAnwaelte = lazy(() => import("./pages/blog/LocalSeoAnwaelte"));
const LocalSeoHotels = lazy(() => import("./pages/blog/LocalSeoHotels"));
const LocalSeoFitness = lazy(() => import("./pages/blog/LocalSeoFitness"));
const SchemaMarkupLocalSeo = lazy(() => import("./pages/blog/SchemaMarkupLocalSeo"));
const MobileLocalSeo = lazy(() => import("./pages/blog/MobileLocalSeo"));
const GoogleMapsRankingFaktoren = lazy(() => import("./pages/blog/GoogleMapsRankingFaktoren"));
const LocalLinkBuilding = lazy(() => import("./pages/blog/LocalLinkBuilding"));
const NegativeGoogleBewertungen = lazy(() => import("./pages/blog/NegativeGoogleBewertungen"));
const LocalContentMarketing = lazy(() => import("./pages/blog/LocalContentMarketing"));
const LocalSeoCaseStudy = lazy(() => import("./pages/blog/LocalSeoCaseStudy"));
const LocalSeoFehler = lazy(() => import("./pages/blog/LocalSeoFehler"));
const LocalSeoDoenerladen = lazy(() => import("./pages/blog/LocalSeoDoenerladen"));
const LocalSeoFriseur = lazy(() => import("./pages/blog/LocalSeoFriseur"));
const LocalSeoImmobilienmakler = lazy(() => import("./pages/blog/LocalSeoImmobilienmakler"));
const LocalSeoHamburg = lazy(() => import("./pages/blog/LocalSeoHamburg"));
const LocalSeoSteuerberater = lazy(() => import("./pages/blog/LocalSeoSteuerberater"));
const LocalSeoAutowerkstatt = lazy(() => import("./pages/blog/LocalSeoAutowerkstatt"));
const LocalSeoFrankfurt = lazy(() => import("./pages/blog/LocalSeoFrankfurt"));
const CoreWebVitalsLocalSeo = lazy(() => import("./pages/blog/CoreWebVitalsLocalSeo"));
const LocalSeoBerlin = lazy(() => import("./pages/blog/LocalSeoBerlin"));
const KostenloseSeo = lazy(() => import("./pages/blog/KostenloseSeo"));
const LocalSeoKoeln = lazy(() => import("./pages/blog/LocalSeoKoeln"));
const LocalSeoWien = lazy(() => import("./pages/blog/LocalSeoWien"));
const LocalSeoTierarzt = lazy(() => import("./pages/blog/LocalSeoTierarzt"));
const KiToolsLocalSeo = lazy(() => import("./pages/blog/KiToolsLocalSeo"));
const GoogleAiOverviews = lazy(() => import("./pages/blog/GoogleAiOverviews"));
const SeoToolbox = lazy(() => import("./pages/blog/SeoToolbox"));
const LocalSeoStuttgart = lazy(() => import("./pages/blog/LocalSeoStuttgart"));
const LocalSeoDuesseldorf = lazy(() => import("./pages/blog/LocalSeoDuesseldorf"));
const LocalSeoBasel = lazy(() => import("./pages/blog/LocalSeoBasel"));
const LocalSeoYoga = lazy(() => import("./pages/blog/LocalSeoYoga"));
const LocalSeoTattoo = lazy(() => import("./pages/blog/LocalSeoTattoo"));
const LocalSeoApotheke = lazy(() => import("./pages/blog/LocalSeoApotheke"));
const GbpFotosOptimieren = lazy(() => import("./pages/blog/GbpFotosOptimieren"));
const LocalSeoMehrstufigUnternehmen = lazy(() => import("./pages/blog/LocalSeoMehrstufigUnternehmen"));
const EEATLokaleUnternehmen = lazy(() => import("./pages/blog/EEATLokaleUnternehmen"));
const LocalSeoNeugruender = lazy(() => import("./pages/blog/LocalSeoNeugruender"));
const GoogleBusinessMessaging = lazy(() => import("./pages/blog/GoogleBusinessMessaging"));
const LocalSeoPhysiotherapie = lazy(() => import("./pages/blog/LocalSeoPhysiotherapie"));
const LocalSeoNotdienstKeywords = lazy(() => import("./pages/blog/LocalSeoNotdienstKeywords"));
const GoogleBusinessKategorienGuide = lazy(() => import("./pages/blog/GoogleBusinessKategorienGuide"));
const LocalSeoZahnarzt = lazy(() => import("./pages/blog/LocalSeoZahnarzt"));
const LocalSeoSanitaerHeizung = lazy(() => import("./pages/blog/LocalSeoSanitaerHeizung"));
const LokaleEventsMarketing = lazy(() => import("./pages/blog/LokaleEventsMarketing"));
const LokaleInfluencerKooperationen = lazy(() => import("./pages/blog/LokaleInfluencerKooperationen"));
const GoogleBusinessProdukteServices = lazy(() => import("./pages/blog/GoogleBusinessProdukteServices"));
const LocalSeoOptiker = lazy(() => import("./pages/blog/LocalSeoOptiker"));
const BewertungsAntwortenVorlagen = lazy(() => import("./pages/blog/BewertungsAntwortenVorlagen"));
const LocalSeoElektrotechnik = lazy(() => import("./pages/blog/LocalSeoElektrotechnik"));
const GoogleBusinessInsightsVerstehen = lazy(() => import("./pages/blog/GoogleBusinessInsightsVerstehen"));
const LocalSeoFotograf = lazy(() => import("./pages/blog/LocalSeoFotograf"));
const LocalSeoVoiceSearch = lazy(() => import("./pages/blog/LocalSeoVoiceSearch"));
const GooglePostsRankingFaktor = lazy(() => import("./pages/blog/GooglePostsRankingFaktor"));

// Troubleshooting & neue Artikel
const GbpSuspendiertReaktivieren = lazy(() => import("./pages/blog/GbpSuspendiertReaktivieren"));
const GbpVerifizierungFehlgeschlagen = lazy(() => import("./pages/blog/GbpVerifizierungFehlgeschlagen"));
const DuplicateListingEntfernen = lazy(() => import("./pages/blog/DuplicateListingEntfernen"));
const GbpBewertungLoeschenAnleitung = lazy(() => import("./pages/blog/GbpBewertungLoeschenAnleitung"));
const RankingPloetzlichVerschwunden = lazy(() => import("./pages/blog/RankingPloetzlichVerschwunden"));
const GbpNichtInSucheSichtbar = lazy(() => import("./pages/blog/GbpNichtInSucheSichtbar"));
const GbpMehrereStandorte = lazy(() => import("./pages/blog/GbpMehrereStandorte"));
const GbpOeffnungszeitenSondertage = lazy(() => import("./pages/blog/GbpOeffnungszeitenSondertage"));
const GbpAttributeRichtigNutzen = lazy(() => import("./pages/blog/GbpAttributeRichtigNutzen"));
const LocalSeoVsMaps = lazy(() => import("./pages/blog/LocalSeoVsMaps"));
const LocalSeoVsOrganisch = lazy(() => import("./pages/blog/LocalSeoVsOrganisch"));
const GoogleMapsSeoVsOrganicSeo = lazy(() => import("./pages/blog/GoogleMapsSeoVsOrganicSeo"));
const LocalCitations2025 = lazy(() => import("./pages/blog/LocalCitations2025"));
const LocalSeoBackerei = lazy(() => import("./pages/blog/LocalSeoBackerei"));
const LocalSeoHannover = lazy(() => import("./pages/blog/LocalSeoHannover"));
const AiSearchOptimization2026 = lazy(() => import("./pages/blog/AiSearchOptimization2026"));
const AiSearchVsTraditionalSearch = lazy(() => import("./pages/blog/AiSearchVsTraditionalSearch"));
const SeoFerienwohnungen = lazy(() => import("./pages/blog/SeoFerienwohnungen"));
const TechnischesLocalSeoGuide = lazy(() => import("./pages/blog/TechnischesLocalSeoGuide"));
const LocalBusinessSchemaImplementierung = lazy(() => import("./pages/blog/LocalBusinessSchemaImplementierung"));
const ReviewSchemaImplementierung = lazy(() => import("./pages/blog/ReviewSchemaImplementierung"));
const LocalSeoReportingTemplate = lazy(() => import("./pages/blog/LocalSeoReportingTemplate"));
const HubGoogleBusinessProfil = lazy(() => import("./pages/blog/HubGoogleBusinessProfil"));
const HubBranchen = lazy(() => import("./pages/blog/HubBranchen"));
const HubStaedte = lazy(() => import("./pages/blog/HubStaedte"));
const HubBewertungen = lazy(() => import("./pages/blog/HubBewertungen"));
const HubTechnischesSeo = lazy(() => import("./pages/blog/HubTechnischesSeo"));
const HubContentMarketing = lazy(() => import("./pages/blog/HubContentMarketing"));
const HubToolsRessourcen = lazy(() => import("./pages/blog/HubToolsRessourcen"));
const HubAiZukunft = lazy(() => import("./pages/blog/HubAiZukunft"));
const HubTroubleshooting = lazy(() => import("./pages/blog/HubTroubleshooting"));
const HubCaseStudies = lazy(() => import("./pages/blog/HubCaseStudies"));
const WebsiteContentAiSuchmaschinen = lazy(() => import("./pages/blog/WebsiteContentAiSuchmaschinen"));
const Partner = lazy(() => import("./pages/Partner"));
const Redaktionsrichtlinien = lazy(() => import("./pages/Redaktionsrichtlinien"));
const Forschungsmethodik = lazy(() => import("./pages/Forschungsmethodik"));
const UeberUns = lazy(() => import("./pages/UeberUns"));
const UltimateGuideLocalSeo = lazy(() => import("./pages/blog/UltimateGuideLocalSeo"));
const LocalSeoStrategieKleineUnternehmen = lazy(() => import("./pages/blog/LocalSeoStrategieKleineUnternehmen"));
const LocalSeoRankingFaktorenErklaert = lazy(() => import("./pages/blog/LocalSeoRankingFaktorenErklaert"));
const AiSucheLokaleUnternehmen = lazy(() => import("./pages/blog/AiSucheLokaleUnternehmen"));
const LocalLinkBuildingBlueprint = lazy(() => import("./pages/blog/LocalLinkBuildingBlueprint"));
const LocalSeoChecklisteKomplett = lazy(() => import("./pages/blog/LocalSeoChecklisteKomplett"));
const HubGoogleMapsSeo = lazy(() => import("./pages/blog/HubGoogleMapsSeo"));
const WieGoogleMapsRankingFunktioniert = lazy(() => import("./pages/blog/WieGoogleMapsRankingFunktioniert"));
const GoogleMapsSpamErkennen = lazy(() => import("./pages/blog/GoogleMapsSpamErkennen"));
const GoogleMapsKonkurrenzanalyse = lazy(() => import("./pages/blog/GoogleMapsKonkurrenzanalyse"));
const GoogleMapsRankingCaseStudies = lazy(() => import("./pages/blog/GoogleMapsRankingCaseStudies"));
const EntitySeoGuide = lazy(() => import("./pages/blog/EntitySeoGuide"));
const SemanticSeoGuide = lazy(() => import("./pages/blog/SemanticSeoGuide"));
const GoogleMapsAuditTemplate = lazy(() => import("./pages/blog/GoogleMapsAuditTemplate"));
const CitationTrackingTemplate = lazy(() => import("./pages/blog/CitationTrackingTemplate"));
const LocalKeywordResearchTemplate = lazy(() => import("./pages/blog/LocalKeywordResearchTemplate"));
const LocalSeoMonthlyChecklist = lazy(() => import("./pages/blog/LocalSeoMonthlyChecklist"));
const GoogleMapsRankingTracker = lazy(() => import("./pages/blog/GoogleMapsRankingTracker"));
const LocalSeoStrategyPlanner = lazy(() => import("./pages/blog/LocalSeoStrategyPlanner"));
const LocalSeoRoadmap = lazy(() => import("./pages/blog/LocalSeoRoadmap"));
const SchemaStrategieDokument = lazy(() => import("./pages/blog/SchemaStrategieDokument"));
const LocalSeoStatistiken = lazy(() => import("./pages/blog/LocalSeoStatistiken"));
const CitationVerzeichnisse = lazy(() => import("./pages/CitationVerzeichnisse"));
const FaqHub = lazy(() => import("./pages/blog/FaqHub"));
const FaqSubHub = lazy(() => import("./pages/blog/FaqSubHub"));

// Lazy load CoreWebVitalsTracker - not needed for initial render
const CoreWebVitalsTracker = lazy(() => import("@/components/CoreWebVitalsTracker"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ABTestProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={null}>
            <CoreWebVitalsTracker trackToDatabase={false} />
          </Suspense>
          <BrowserRouter>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/ab-test" element={<ABTestDashboard />} />
                <Route path="/ab-test-zentrale" element={<ABTestZentrale />} />
                <Route path="/admin/content-plan" element={<ContentPlanDashboard />} />
                <Route path="/admin/kunden" element={<MeineKunden />} />
                <Route path="/admin/article-feedback" element={<ArticleFeedbackDashboard />} />
                <Route path="/admin/blog-analytics" element={<BlogAnalytics />} />
                <Route path="/admin/content-performance" element={<ContentPerformanceDashboard />} />
                <Route path="/admin/conversion-report" element={<ConversionOptimizationReport />} />
                <Route path="/admin/internal-linking" element={<InternalLinkingDashboard />} />
                <Route path="/admin/ab-test-zentrale" element={<ABTestZentrale />} />
                <Route path="/admin/reset-password" element={<ResetPassword />} />
                <Route path="/admin/update-password" element={<UpdatePassword />} />
                <Route path="/admin/content-calendar" element={<ContentUpdateCalendar />} />
                <Route path="/restaurant-marketing" element={<RestaurantMarketing />} />
                <Route path="/handwerker-marketing" element={<HandwerkerMarketing />} />
                <Route path="/arztpraxis-marketing" element={<ArztpraxisMarketing />} />
                <Route path="/anwalt-marketing" element={<AnwaltMarketing />} />
                <Route path="/diy-toolkit" element={<DIYToolkit />} />
                <Route path="/danke" element={<Danke />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/redaktionsrichtlinien" element={<Redaktionsrichtlinien />} />
                <Route path="/forschungsmethodik" element={<Forschungsmethodik />} />
                <Route path="/ueber-uns" element={<UeberUns />} />
                <Route path="/seo-lexikon" element={<SeoLexikon />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/google-maps-ranking-verbessern" element={<GoogleMapsRanking />} />
                <Route path="/blog/google-bewertungen-bekommen" element={<GoogleBewertungen />} />
                <Route path="/blog/local-seo-fuer-restaurants" element={<LocalSeoRestaurant />} />
                <Route path="/blog/local-seo-anwaelte-kanzleien" element={<LocalSeoAnwaelteKanzleien />} />
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
                <Route path="/blog/gbp-fotos-optimieren" element={<GbpFotosOptimieren />} />
                <Route path="/blog/local-seo-mehrstufig-unternehmen" element={<LocalSeoMehrstufigUnternehmen />} />
                <Route path="/blog/e-e-a-t-lokale-unternehmen" element={<EEATLokaleUnternehmen />} />
                <Route path="/blog/lokale-seo-fuer-neugruender" element={<LocalSeoNeugruender />} />
                <Route path="/blog/google-business-messaging" element={<GoogleBusinessMessaging />} />
                <Route path="/blog/local-seo-physiotherapie" element={<LocalSeoPhysiotherapie />} />
                <Route path="/blog/local-seo-notdienst-keywords" element={<LocalSeoNotdienstKeywords />} />
                <Route path="/blog/google-business-kategorien-guide" element={<GoogleBusinessKategorienGuide />} />
                <Route path="/blog/local-seo-zahnarzt" element={<LocalSeoZahnarzt />} />
                <Route path="/blog/local-seo-sanitaer-heizung" element={<LocalSeoSanitaerHeizung />} />
                <Route path="/blog/lokale-events-marketing" element={<LokaleEventsMarketing />} />
                <Route path="/blog/lokale-influencer-kooperationen" element={<LokaleInfluencerKooperationen />} />
                <Route path="/blog/google-business-produkte-services" element={<GoogleBusinessProdukteServices />} />
                <Route path="/blog/local-seo-optiker" element={<LocalSeoOptiker />} />
                <Route path="/blog/bewertungs-antworten-vorlagen" element={<BewertungsAntwortenVorlagen />} />
                <Route path="/blog/local-seo-elektrotechnik" element={<LocalSeoElektrotechnik />} />
                <Route path="/blog/google-business-insights-verstehen" element={<GoogleBusinessInsightsVerstehen />} />
                <Route path="/blog/local-seo-fotograf" element={<LocalSeoFotograf />} />
                <Route path="/blog/local-seo-voice-search" element={<LocalSeoVoiceSearch />} />
                <Route path="/blog/google-posts-ranking-faktor" element={<GooglePostsRankingFaktor />} />
                <Route path="/blog/gbp-suspendiert-reaktivieren" element={<GbpSuspendiertReaktivieren />} />
                <Route path="/blog/gbp-verifizierung-fehlgeschlagen" element={<GbpVerifizierungFehlgeschlagen />} />
                <Route path="/blog/duplicate-listing-entfernen" element={<DuplicateListingEntfernen />} />
                <Route path="/blog/gbp-bewertung-loeschen-anleitung" element={<GbpBewertungLoeschenAnleitung />} />
                <Route path="/blog/ranking-ploetzlich-verschwunden" element={<RankingPloetzlichVerschwunden />} />
                <Route path="/blog/gbp-nicht-in-suche-sichtbar" element={<GbpNichtInSucheSichtbar />} />
                <Route path="/blog/gbp-mehrere-standorte" element={<GbpMehrereStandorte />} />
                <Route path="/blog/gbp-oeffnungszeiten-sondertage" element={<GbpOeffnungszeitenSondertage />} />
                <Route path="/blog/gbp-attribute-richtig-nutzen" element={<GbpAttributeRichtigNutzen />} />
                <Route path="/blog/local-seo-vs-maps-seo" element={<LocalSeoVsMaps />} />
                <Route path="/blog/local-seo-vs-organisch" element={<LocalSeoVsOrganisch />} />
                <Route path="/blog/google-maps-seo-vs-organic-seo" element={<GoogleMapsSeoVsOrganicSeo />} />
                <Route path="/blog/local-citations-2025" element={<LocalCitations2025 />} />
                <Route path="/blog/local-seo-baeckerei" element={<LocalSeoBackerei />} />
                <Route path="/blog/local-seo-hannover" element={<LocalSeoHannover />} />
                <Route path="/blog/ai-search-optimization-2026" element={<AiSearchOptimization2026 />} />
                <Route path="/blog/ai-search-vs-traditional-search" element={<AiSearchVsTraditionalSearch />} />
                <Route path="/blog/seo-ferienwohnungen" element={<SeoFerienwohnungen />} />
                <Route path="/blog/technisches-local-seo-guide" element={<TechnischesLocalSeoGuide />} />
                <Route path="/blog/localbusiness-schema-implementierung" element={<LocalBusinessSchemaImplementierung />} />
                <Route path="/blog/review-schema-implementierung" element={<ReviewSchemaImplementierung />} />
                <Route path="/blog/local-seo-reporting-template" element={<LocalSeoReportingTemplate />} />
                <Route path="/blog/google-business-profil-hub" element={<HubGoogleBusinessProfil />} />
                <Route path="/blog/local-seo-branchen-hub" element={<HubBranchen />} />
                <Route path="/blog/local-seo-staedte-hub" element={<HubStaedte />} />
                <Route path="/blog/bewertungen-reputation-hub" element={<HubBewertungen />} />
                <Route path="/blog/technisches-seo-hub" element={<HubTechnischesSeo />} />
                <Route path="/blog/content-marketing-hub" element={<HubContentMarketing />} />
                <Route path="/blog/tools-ressourcen-hub" element={<HubToolsRessourcen />} />
                <Route path="/blog/ai-zukunft-hub" element={<HubAiZukunft />} />
                <Route path="/blog/troubleshooting-hub" element={<HubTroubleshooting />} />
                <Route path="/blog/case-studies-hub" element={<HubCaseStudies />} />
                <Route path="/blog/entity-seo-guide" element={<EntitySeoGuide />} />
                <Route path="/blog/semantic-seo-topical-authority" element={<SemanticSeoGuide />} />
                <Route path="/blog/website-content-ai-suchmaschinen" element={<WebsiteContentAiSuchmaschinen />} />
                <Route path="/blog/ultimate-guide-local-seo" element={<UltimateGuideLocalSeo />} />
                <Route path="/blog/local-seo-strategie-kleine-unternehmen" element={<LocalSeoStrategieKleineUnternehmen />} />
                <Route path="/blog/local-seo-ranking-faktoren-erklaert" element={<LocalSeoRankingFaktorenErklaert />} />
                <Route path="/blog/ai-suche-lokale-unternehmen" element={<AiSucheLokaleUnternehmen />} />
                <Route path="/blog/local-link-building-blueprint" element={<LocalLinkBuildingBlueprint />} />
                <Route path="/blog/local-seo-checkliste-komplett" element={<LocalSeoChecklisteKomplett />} />
                <Route path="/blog/google-maps-seo-hub" element={<HubGoogleMapsSeo />} />
                <Route path="/blog/wie-google-maps-ranking-funktioniert" element={<WieGoogleMapsRankingFunktioniert />} />
                <Route path="/blog/google-maps-spam-erkennen" element={<GoogleMapsSpamErkennen />} />
                <Route path="/blog/google-maps-konkurrenzanalyse" element={<GoogleMapsKonkurrenzanalyse />} />
                <Route path="/blog/google-maps-ranking-case-studies" element={<GoogleMapsRankingCaseStudies />} />
                <Route path="/blog/google-maps-audit-template" element={<GoogleMapsAuditTemplate />} />
                <Route path="/blog/citation-tracking-template" element={<CitationTrackingTemplate />} />
                <Route path="/blog/local-keyword-research-template" element={<LocalKeywordResearchTemplate />} />
                <Route path="/blog/local-seo-monthly-checklist" element={<LocalSeoMonthlyChecklist />} />
                <Route path="/blog/google-maps-ranking-tracker" element={<GoogleMapsRankingTracker />} />
                <Route path="/blog/local-seo-strategy-planner" element={<LocalSeoStrategyPlanner />} />
                <Route path="/blog/local-seo-roadmap-90-tage" element={<LocalSeoRoadmap />} />
                <Route path="/blog/schema-strategie-dokument" element={<SchemaStrategieDokument />} />
                <Route path="/blog/local-seo-statistiken-daten" element={<LocalSeoStatistiken />} />
                <Route path="/citation-verzeichnisse" element={<CitationVerzeichnisse />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/test-b" element={<TestB />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ABTestProvider>
  </QueryClientProvider>
);

export default App;
