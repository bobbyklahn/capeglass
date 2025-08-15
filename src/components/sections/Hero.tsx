'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal-black via-deep-forest to-charcoal-black"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-white"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-secondary font-bold mb-8 leading-tight"
          variants={fadeInUp}
        >
          Premium Wine Bottles from{' '}
          <span className="text-cape-green">China to Australia</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-lg"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="text-cape-green" size={24} />
            <span>Direct sourcing</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-cape-green" size={24} />
            <span>Competitive pricing</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-cape-green" size={24} />
            <span>Australia-wide delivery</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          variants={fadeInUp}
        >
          <Button variant="primary" size="lg" className="min-w-[200px]">
            Browse Our Collection
          </Button>
          <Button variant="secondary" size="lg" className="min-w-[200px]">
            Get Bulk Quote
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="animate-bounce-soft">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}