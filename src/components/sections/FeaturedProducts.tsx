'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const featuredProducts = [
  { id: 'CG0386', name: 'Burgundy Elite', capacity: '750 ml', specs: '330 · 84 Ø · 840 g' },
  { id: 'CG0452', name: 'Heavy Reserve', capacity: '750 ml', specs: '295 · 95 Ø · 1200 g' },
  { id: 'CG0504', name: 'Contemporary', capacity: '750 ml', specs: '305 · 86 Ø · 820 g' },
  { id: 'CG0594', name: 'Magnum', capacity: '1500 ml', specs: '345 · 100 Ø · 840 g' },
  { id: 'CG0614', name: 'Ultra Magnum', capacity: '1500 ml', specs: '352 · 108 Ø · 980 g' },
  { id: 'CG0582', name: 'Artisan', capacity: '750 ml', specs: '290 · 88 Ø · 950 g' },
]

export default function FeaturedProducts() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="products" className="py-24 lg:py-32 bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink max-w-xl text-balance">
            A range that already fits most cellars.
          </h2>
          <Link
            href="/products"
            className="group inline-flex items-center gap-1.5 text-base font-medium text-green-700 hover:text-green-800"
          >
            All 21 bottles
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease }}
            >
              <Link
                href="/products"
                className="group block rounded-3xl overflow-hidden border border-line bg-paper transition-shadow hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-2"
              >
                <div
                  className={`relative h-72 flex items-center justify-center p-8 ${
                    i % 2 === 0 ? 'bg-stone-100' : 'bg-green-50'
                  }`}
                >
                  <Image
                    src={`/images/bottles/${p.id.replace('CG', '')}.png`}
                    alt={`${p.name} ${p.capacity} wine bottle`}
                    width={150}
                    height={300}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1.5"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 text-[11px] font-mono uppercase tracking-[0.14em] text-stone-400">
                    {p.id}
                  </span>
                </div>
                <div className="flex items-center justify-between px-6 py-5 border-t border-line">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="text-sm text-stone-500">{p.capacity}</p>
                  </div>
                  <p className="font-mono text-xs text-stone-400 tabular-nums text-right">
                    {p.specs}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
