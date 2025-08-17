export const cellAnimations = {
  front: {
    initial: { rotateY: 0 },
    exit: { rotateY: -90 },
    transition: { duration: 0.15, ease: 'easeIn' },
  },
  back: {
    initial: { rotateY: 90 },
    animate: { rotateY: 0, scale: [0.9, 1.05, 1] },
    transition: {
      rotateY: { duration: 0.15, ease: 'easeOut' },
      scale: { duration: 0.3, ease: 'backOut' },
    },
  },
};
