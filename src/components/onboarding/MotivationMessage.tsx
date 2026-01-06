import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface MotivationMessageProps {
  message?: string;
  showConfetti?: boolean;
}

const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FF69B4'];

export function MotivationMessage({ message, showConfetti }: MotivationMessageProps) {
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; x: number; color: string; size: number }>>([]);

  useEffect(() => {
    if (showConfetti) {
      const pieces = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: Math.random() * 6 + 4,
      }));
      setConfettiPieces(pieces);
      
      const timer = setTimeout(() => setConfettiPieces([]), 2500);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  if (!message) return null;

  return (
    <div className="relative mb-6">
      <motion.div
        key={message}
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="text-center py-4"
      >
        <motion.span 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 
                     border border-primary/20 text-primary font-bold text-xl shadow-lg shadow-primary/10"
          animate={{ 
            boxShadow: [
              '0 10px 25px -5px rgba(var(--primary), 0.1)',
              '0 15px 35px -5px rgba(var(--primary), 0.2)',
              '0 10px 25px -5px rgba(var(--primary), 0.1)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5" />
          {message}
        </motion.span>
      </motion.div>

      {/* Confetti */}
      <AnimatePresence>
        {confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ 
              opacity: 1, 
              y: 0, 
              x: `${piece.x}%`,
              scale: 0,
              rotate: 0
            }}
            animate={{ 
              opacity: [1, 1, 0], 
              y: 250, 
              rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
              scale: [0, 1, 0.5],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-0 rounded-full pointer-events-none"
            style={{ 
              backgroundColor: piece.color, 
              left: `${piece.x}%`,
              width: piece.size,
              height: piece.size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
