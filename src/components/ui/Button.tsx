'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'hover:transform hover:-translate-y-0.5 hover:shadow-lg',
        'active:transform active:translate-y-0',
        // Base styles
        'rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
        // Variants
        {
          'bg-cape-green text-white hover:bg-deep-forest focus:ring-cape-green shadow-green':
            variant === 'primary',
          'bg-wine-burgundy text-white hover:bg-wine-burgundy/90 focus:ring-wine-burgundy':
            variant === 'secondary',
          'border-2 border-charcoal-black text-charcoal-black hover:bg-charcoal-black hover:text-white focus:ring-charcoal-black':
            variant === 'outline',
        },
        // Sizes
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}