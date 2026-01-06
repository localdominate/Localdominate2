import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MotivationMessageProps {
  message?: string;
  showConfetti?: boolean;
}

export function MotivationMessage({ message, showConfetti }: MotivationMessageProps) {
  const [confettiPieces, setConfettiPieces] = useState<Array<{ id: number; x: number; color: string }>>([]);

  useEffect(() => {
    if (showConfetti) {
      const pieces = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)],
      }));
      setConfettiPieces(pieces);
      
      const timer = setTimeout(() => setConfettiPieces([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  if (!message) return null;

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          key={message}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="text-center py-4"
        >
          <span className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold text-lg">
            {message}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Confetti */}
      <AnimatePresence>
        {confettiPieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ opacity: 1, y: 0, x: `${piece.x}%` }}
            animate={{ opacity: 0, y: 200, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-0 w-3 h-3 rounded-full"
            style={{ backgroundColor: piece.color, left: `${piece.x}%` }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
