import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'charcoal-black': '#2D2D2D',
        'cape-green': '#4CAF50',
        'pure-white': '#FFFFFF',
        
        // Secondary Colors
        'wine-burgundy': '#722F37',
        'champagne-gold': '#D4AF37',
        'soft-sage': '#9CAF88',
        
        // Neutral Colors
        'light-grey': '#F5F5F5',
        'medium-grey': '#888888',
        'warm-white': '#FAFAFA',
        
        // Accent Colors
        'deep-forest': '#2E5D31',
        'platinum': '#E8E8E8',
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
        'secondary': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2D2D2D 0%, #2E5D31 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(45, 45, 45, 0.8) 0%, rgba(45, 45, 45, 0.4) 100%)',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'green': '0 4px 20px rgba(76, 175, 80, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;