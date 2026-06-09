'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-paper pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] w-full px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
              Wine-bottle glassworks · Adelaide
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink text-balance">
              The bottle you want,{' '}
              <span className="text-green-700">from 500 units.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-stone-600 leading-relaxed">
              Custom moulds, stock shapes and large formats to 30L. Made in our own
              factory, warehoused in Adelaide, with no oversized minimums.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request a quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See the bottles
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="grain relative aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] overflow-hidden bg-gradient-to-b from-green-800 to-green-900 shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src="/images/bottles/0386.png"
                  alt="A heavy-base Burgundy wine bottle made by Cape Glass"
                  width={360}
                  height={620}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Precision spec chip */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.45 }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl bg-paper/95 backdrop-blur px-5 py-4"
              >
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-stone-500">
                  Custom mould · CG0386
                </p>
                <p className="mt-1 font-mono text-sm text-ink tabular-nums">
                  330 mm H · 84 mm Ø · 840 g
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
