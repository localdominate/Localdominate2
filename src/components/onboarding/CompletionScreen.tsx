import { motion } from 'framer-motion';
import { Check, PartyPopper, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function CompletionScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      {/* Success Icon with Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
          >
            <Check className="w-8 h-8 text-primary-foreground" />
          </motion.div>
        </div>
        
        {/* Confetti particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 150],
              y: [0, (Math.random() - 0.5) * 150],
            }}
            transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'][i % 4] 
            }}
          />
        ))}
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <PartyPopper className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Geschafft!</h1>
          <PartyPopper className="w-8 h-8 text-primary transform scale-x-[-1]" />
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Vielen Dank für deine Angaben! Wir haben jetzt alles, was wir brauchen, 
          um dein lokales Marketing zu optimieren.
        </p>
      </motion.div>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card border rounded-xl p-6 mb-8 max-w-md w-full"
      >
        <h3 className="font-semibold mb-4">Was passiert jetzt?</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">1</span>
            </div>
            <span className="text-muted-foreground">Wir analysieren deine Angaben</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">2</span>
            </div>
            <span className="text-muted-foreground">Erstellen deinen individuellen QR-Code</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">3</span>
            </div>
            <span className="text-muted-foreground">Du erhältst alle Materialien per E-Mail</span>
          </li>
        </ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button 
          size="lg" 
          onClick={() => navigate('/')}
          className="gap-2"
        >
          Zurück zur Startseite
          <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
