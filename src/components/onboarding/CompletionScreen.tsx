import { motion } from 'framer-motion';
import { Check, PartyPopper, ArrowRight, Mail, Palette, QrCode, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FF69B4', '#9B59B6'];

function Confetti() {
  const [pieces, setPieces] = useState<Array<{ id: number; x: number; delay: number; color: string; size: number }>>([]);
  
  useEffect(() => {
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 8 + 4,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ 
            opacity: 0, 
            y: -20,
            x: `${piece.x}vw`,
            rotate: 0,
            scale: 0
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: '100vh',
            rotate: [0, 180, 360, 540],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            delay: piece.delay,
            ease: 'easeOut',
          }}
          className="absolute rounded-sm"
          style={{ 
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            left: 0,
          }}
        />
      ))}
    </div>
  );
}

export function CompletionScreen() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { icon: Sparkles, text: 'Wir analysieren deine Angaben', delay: 0.8 },
    { icon: Palette, text: 'Designen deine individuelle Bewertungskarte', delay: 1 },
    { icon: QrCode, text: 'Erstellen deinen persönlichen QR-Code', delay: 1.2 },
    { icon: Mail, text: 'Senden dir alle Materialien per E-Mail', delay: 1.4 },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-12 relative">
      {showConfetti && <Confetti />}
      
      {/* Success Icon with Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        className="relative mb-10"
      >
        {/* Outer ring pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/20"
          style={{ width: 120, height: 120, margin: 'auto', top: 0, left: 0, right: 0, bottom: 0 }}
        />
        
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30"
          >
            <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
          </motion.div>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, delay: 1, repeat: 2 }}
          >
            <PartyPopper className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Geschafft!
          </h1>
          <motion.div
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.5, delay: 1.2, repeat: 2 }}
          >
            <PartyPopper className="w-10 h-10 text-primary transform scale-x-[-1]" />
          </motion.div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto">
          Vielen Dank für deine Angaben! Du hast alle Fragen beantwortet 🎉
        </p>
      </motion.div>

      {/* What happens next */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="bg-card border-2 border-border rounded-3xl p-8 mb-10 max-w-lg w-full shadow-xl"
      >
        <h3 className="font-bold text-xl mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">📋</span>
          Was passiert jetzt?
        </h3>
        <ul className="space-y-5">
          {steps.map((step, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay, duration: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-left text-muted-foreground text-lg pt-2">{step.text}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Timeline indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.4 }}
        className="flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-muted/50 border border-border"
      >
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          Du erhältst deine Materialien innerhalb von 24-48 Stunden
        </span>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.4 }}
      >
        <Button 
          size="lg" 
          onClick={() => navigate('/')}
          className="gap-3 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          Zurück zur Startseite
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  );
}
