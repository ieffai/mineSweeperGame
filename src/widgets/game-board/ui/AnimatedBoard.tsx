import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedBoardProps {
  sessionId: string | null;
  children: React.ReactNode;
}
export const AnimatedBoard = ({ sessionId, children }: AnimatedBoardProps) => {
  return (
    <div style={{ perspective: 900, width: '100%' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={sessionId}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }}
          exit={{ rotateY: -90, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
