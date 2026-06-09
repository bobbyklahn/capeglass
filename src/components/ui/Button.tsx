import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: ReactNode
}

/*
  Shape system (locked): buttons are full-pill, cards are rounded-2xl, inputs rounded-lg.
  Tactile press: every button dips 1px on :active to read as a physical push.
*/
export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-700 focus-visible:ring-offset-paper'

  const variants = {
    primary: 'bg-green-700 text-white hover:bg-green-800 active:bg-green-900',
    secondary: 'bg-stone-900 text-white hover:bg-stone-800 active:bg-stone-900',
    outline:
      'border border-current bg-transparent text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900',
    ghost: 'bg-transparent text-stone-700 hover:bg-stone-100',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  }

  const isDisabled = disabled || loading

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        isDisabled && 'opacity-60 cursor-not-allowed active:translate-y-0',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
