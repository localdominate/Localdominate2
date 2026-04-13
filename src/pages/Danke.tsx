import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Download, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/i18n/LanguageContext';

const translations = {
  de: {
    seoTitle: "Danke - Local Dominator",
    seoDesc: "Vielen Dank für deinen Kauf",
    heading: "Vielen Dank für deinen Kauf! 🎉",
    subheading: "Dein lokales Marketing wird nie mehr dasselbe sein.",
    downloads: "Deine Downloads",
    downloadsDesc: "Die folgenden Dateien werden automatisch heruntergeladen. Falls nicht, klicke auf die Buttons unten.",
    guidelineTitle: "Google Bewertungs-Guideline",
    guidelineDesc: "PDF • Schritt-für-Schritt Anleitung",
    scriptTitle: "Mitarbeiter-Script",
    scriptDesc: "PDF • Gesprächsleitfaden für dein Team",
    downloading: "Downloads werden gestartet...",
    nextStep: "Nächster Schritt",
    nextStepDesc: "Um deine individuelle Bewertungskarte und deinen QR-Code zu erstellen, benötigen wir noch ein paar Infos zu deinem Unternehmen.",
    nextStepTime: "⏱️ Dauert nur ca. 5 Minuten • 🎮 Macht sogar Spaß",
    startQuestionnaire: "Fragebogen starten",
    pauseNote: "Du kannst den Fragebogen jederzeit unterbrechen und später fortsetzen.",
  },
  en: {
    seoTitle: "Thank You - Local Dominator",
    seoDesc: "Thank you for your purchase",
    heading: "Thank you for your purchase! 🎉",
    subheading: "Your local marketing will never be the same.",
    downloads: "Your Downloads",
    downloadsDesc: "The following files will be downloaded automatically. If not, click the buttons below.",
    guidelineTitle: "Google Review Guideline",
    guidelineDesc: "PDF • Step-by-step guide",
    scriptTitle: "Employee Script",
    scriptDesc: "PDF • Conversation guide for your team",
    downloading: "Downloads are starting...",
    nextStep: "Next Step",
    nextStepDesc: "To create your individual review card and QR code, we need a few more details about your business.",
    nextStepTime: "⏱️ Takes only about 5 minutes • 🎮 It's even fun",
    startQuestionnaire: "Start Questionnaire",
    pauseNote: "You can pause the questionnaire at any time and continue later.",
  },
  ar: {
    seoTitle: "شكراً لك - Local Dominator",
    seoDesc: "شكراً لك على شرائك",
    heading: "شكراً لك على شرائك! 🎉",
    subheading: "تسويقك المحلي لن يكون كما كان أبداً.",
    downloads: "التنزيلات الخاصة بك",
    downloadsDesc: "سيتم تنزيل الملفات التالية تلقائياً. إذا لم يحدث ذلك، انقر على الأزرار أدناه.",
    guidelineTitle: "دليل تقييمات Google",
    guidelineDesc: "PDF • دليل خطوة بخطوة",
    scriptTitle: "سيناريو الموظفين",
    scriptDesc: "PDF • دليل محادثة لفريقك",
    downloading: "جاري بدء التنزيلات...",
    nextStep: "الخطوة التالية",
    nextStepDesc: "لإنشاء بطاقة التقييم ورمز QR الخاص بك، نحتاج بعض المعلومات الإضافية عن نشاطك التجاري.",
    nextStepTime: "⏱️ يستغرق حوالي 5 دقائق فقط • 🎮 ممتع أيضاً",
    startQuestionnaire: "بدء الاستبيان",
    pauseNote: "يمكنك إيقاف الاستبيان في أي وقت والمتابعة لاحقاً.",
  },
};

export default function Danke() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language] || translations.de;
  const sessionId = searchParams.get('session_id');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    if (sessionId) {
      const timer = setTimeout(() => {
        triggerDownloads();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [sessionId]);

  const triggerDownloads = async () => {
    setIsDownloading(true);
    
    try {
      const files = ['google-bewertungs-guideline.pdf', 'mitarbeiter-script.pdf'];
      
      for (const fileName of files) {
        const { data } = supabase.storage
          .from('downloads')
          .getPublicUrl(fileName);
        
        if (data?.publicUrl) {
          const link = document.createElement('a');
          link.href = data.publicUrl;
          link.download = fileName;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      
      setDownloadComplete(true);
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const goToOnboarding = () => {
    navigate(`/onboarding?session_id=${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={t.seoTitle}
        description={t.seoDesc}
        noindex={true}
      />
      {/* Confetti Animation Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: -20,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) 
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              rotate: [0, 360, 720],
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][i % 5],
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-3xl mx-auto px-4 py-16 relative z-10">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-8 h-8 text-primary-foreground" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.heading}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.subheading}
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.downloads}</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            {t.downloadsDesc}
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.guidelineTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.guidelineDesc}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const { data } = supabase.storage.from('downloads').getPublicUrl('google-bewertungs-guideline.pdf');
                  window.open(data.publicUrl, '_blank');
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.scriptTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.scriptDesc}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const { data } = supabase.storage.from('downloads').getPublicUrl('mitarbeiter-script.pdf');
                  window.open(data.publicUrl, '_blank');
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          {isDownloading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-sm text-muted-foreground"
            >
              {t.downloading}
            </motion.div>
          )}
        </motion.div>

        {/* Next Step CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{t.nextStep}</h2>
          </div>

          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            {t.nextStepDesc}
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            {t.nextStepTime}
          </p>

          <Button 
            size="lg" 
            onClick={goToOnboarding}
            className="gap-2 text-lg px-8"
          >
            {t.startQuestionnaire}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          {t.pauseNote}
        </motion.p>
      </div>
    </div>
  );
}
