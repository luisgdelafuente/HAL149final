import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '../utils/ui';

/** Subtle fade/slide when a block first enters the viewport. Transforms are skipped under reduced motion (MotionConfig). */
export function Reveal({ children, delay = 0, className = '' }: {children: React.ReactNode;delay?: number;className?: string;}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.28, delay, ease: EASE_OUT }}
      className={className}>
      
      {children}
    </motion.div>);

}