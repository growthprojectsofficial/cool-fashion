import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const letters = 'COOL FASHION STORE'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mb-6 md:w-[160px] md:h-[160px]">
            <motion.path d="M20 75 C20 75 25 55 35 50 C45 45 50 48 55 45 C60 42 65 38 70 38 C75 38 80 40 85 42 C90 44 95 48 98 52 C100 56 100 60 100 65 L100 75 C100 80 95 85 90 85 L30 85 C25 85 20 80 20 75Z" stroke="#C8A55C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
            <motion.path d="M35 50 C35 50 40 35 50 30 C60 25 70 28 75 30" stroke="#C8A55C" strokeWidth="2" fill="none" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }} />
            <motion.path d="M30 70 L95 70" stroke="#C8A55C" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }} />
            <motion.path d="M45 60 L55 60" stroke="#C8A55C" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.0 }} />
            <motion.path d="M65 58 L75 58" stroke="#C8A55C" strokeWidth="1.5" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.1 }} />
          </svg>
          <div className="flex">
            {letters.map((letter, i) => (
              <motion.span key={i} className="text-gold font-display text-lg md:text-xl tracking-[8px]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}>
                {letter === ' ' ? ' ' : letter}
              </motion.span>
            ))}
          </div>
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[#C8A55C]" style={{ left: `${20 + Math.random() * 60}%`, top: `${20 + Math.random() * 60}%` }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0], y: [0, -30, -60], x: [0, (Math.random() - 0.5) * 40] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeOut' }} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
