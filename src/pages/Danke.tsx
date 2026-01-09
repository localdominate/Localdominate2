import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Download, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';

export default function Danke() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Auto-download PDFs on page load
  useEffect(() => {
    if (sessionId) {
      // Small delay before triggering downloads
      const timer = setTimeout(() => {
        triggerDownloads();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [sessionId]);

  const triggerDownloads = async () => {
    setIsDownloading(true);
    
    try {
      // Get download URLs from storage
      const files = ['google-bewertungs-guideline.pdf', 'mitarbeiter-script.pdf'];
      
      for (const fileName of files) {
        const { data } = supabase.storage
          .from('downloads')
          .getPublicUrl(fileName);
        
        if (data?.publicUrl) {
          // Create a link and trigger download
          const link = document.createElement('a');
          link.href = data.publicUrl;
          link.download = fileName;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Small delay between downloads
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
        title="Danke - Local Dominator"
        description="Vielen Dank für deinen Kauf"
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
              x: Math.random() * window.innerWidth 
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: window.innerHeight + 100,
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
            Vielen Dank für deinen Kauf! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Dein lokales Marketing wird nie mehr dasselbe sein.
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
            <h2 className="text-2xl font-bold">Deine Downloads</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            Die folgenden Dateien werden automatisch heruntergeladen. 
            Falls nicht, klicke auf die Buttons unten.
          </p>

          <div className="space-y-4">
            {/* Guideline PDF */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Google Bewertungs-Guideline</h3>
                  <p className="text-sm text-muted-foreground">PDF • Schritt-für-Schritt Anleitung</p>
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

            {/* Script PDF */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Mitarbeiter-Script</h3>
                  <p className="text-sm text-muted-foreground">PDF • Gesprächsleitfaden für dein Team</p>
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
              Downloads werden gestartet...
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
            <h2 className="text-2xl font-bold">Nächster Schritt</h2>
          </div>

          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Um deine individuelle Bewertungskarte und deinen QR-Code zu erstellen, 
            benötigen wir noch ein paar Infos zu deinem Unternehmen.
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            ⏱️ Dauert nur ca. 5 Minuten • 🎮 Macht sogar Spaß
          </p>

          <Button 
            size="lg" 
            onClick={goToOnboarding}
            className="gap-2 text-lg px-8"
          >
            Fragebogen starten
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
          Du kannst den Fragebogen jederzeit unterbrechen und später fortsetzen.
        </motion.p>
      </div>
    </div>
  );
}
