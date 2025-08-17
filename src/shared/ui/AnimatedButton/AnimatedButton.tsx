import React, { forwardRef } from 'react';
import { styled, useTheme } from '@mui/material';
import { motion, type TargetAndTransition, type Transition, type VariantLabels } from 'framer-motion';
import { getButtonVariantStyles } from '@shared/config';

interface AnimatedButtonProps {
  text: string;
  color: string;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  whileTap?: VariantLabels | TargetAndTransition;
  whileHover?: VariantLabels | TargetAndTransition;
  initial?: boolean | string | VariantLabels | TargetAndTransition;
  animate?: string | VariantLabels | TargetAndTransition;
  exit?: VariantLabels | TargetAndTransition;
  transition?: Transition;
}

const StyledMotionButton = styled(motion.button)<{
  resolvedColor: string;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'outline';
}>(({ theme, resolvedColor, size, variant }) => {
  const fluid = {
    small: {
      font: 'clamp(0.75rem, 2.6vw, 0.875rem)',
      py: 'clamp(6px, 2.2vw, 12px)',
      px: 'clamp(10px, 5.5vw, 24px)',
      radius: 12,
    },
    medium: {
      font: 'clamp(0.875rem, 2.8vw, 1rem)',
      py: 'clamp(10px, 2.8vw, 16px)',
      px: 'clamp(14px, 7vw, 32px)',
      radius: 16,
    },
    large: {
      font: 'clamp(1rem, 3.2vw, 1.125rem)',
      py: 'clamp(12px, 3.2vw, 20px)',
      px: 'clamp(18px, 8vw, 40px)',
      radius: 20,
    },
  }[size];

  const variantStyles = getButtonVariantStyles({ variant, resolvedColor, theme });

  return {
    appearance: 'none',
    cursor: 'pointer',
    outline: 'none',
    fontWeight: 700,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    transition: 'transform .18s ease, box-shadow .18s ease, filter .18s ease',
    WebkitTapHighlightColor: 'transparent',
    fontSize: fluid.font,
    padding: `${fluid.py} ${fluid.px}`,
    borderRadius: fluid.radius,
    minWidth: 0,
    maxWidth: '100%',
    ...variantStyles,

    '&:hover': {
      ...variantStyles?.['&:hover'],
      transform: 'translateY(-2px) scale(1.01)',
      filter: 'saturate(1.05)',
    },
    '&:active': {
      ...variantStyles?.['&:active'],
      transform: 'translateY(0) scale(0.99)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
      transform: 'none',
      filter: 'none',
    },

    '@media (max-width:360px)': {
      letterSpacing: 0.2,
    },
  };
});

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      text,
      color,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      onClick,
      type = 'button',
      className,
      whileTap = { scale: 0.97 },
      whileHover = { y: -2 },
      initial,
      animate,
      exit,
      transition,
    },
    ref,
  ) => {
    const theme = useTheme();

    let resolvedColor = color;
    if (color.includes('.')) {
      const [paletteKey, shade] = color.split('.');
      const palette = theme.palette as Record<string, any>;
      if (palette[paletteKey] && palette[paletteKey][shade]) {
        resolvedColor = palette[paletteKey][shade];
      }
    }

    return (
      <StyledMotionButton
        ref={ref}
        resolvedColor={resolvedColor}
        size={size}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={className}
        whileTap={disabled ? undefined : whileTap}
        whileHover={disabled ? undefined : whileHover}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {text}
      </StyledMotionButton>
    );
  },
);

AnimatedButton.displayName = 'AnimatedButton';
