import { useSearchParams } from 'react-router-dom';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield } from 'lucide-react';

export default function Onboarding() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const isTestMode = searchParams.get('test') === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Onboarding</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Dein persönliches Setup
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Beantworte ein paar Fragen, damit wir dich optimal unterstützen können
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>Ca. 5 Minuten</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>Deine Daten sind sicher</span>
          </div>
        </motion.div>

        {/* Wizard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <OnboardingWizard sessionId={sessionId} isTestMode={isTestMode} />
        </motion.div>
      </div>
    </div>
  );
}
