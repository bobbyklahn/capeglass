'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Flame, Hammer, Warehouse } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const capabilities = [
  {
    icon: Flame,
    title: 'Our own furnaces',
    body: 'Electric-melt glass run to our own spec, not bought in and rebadged.',
  },
  {
    icon: Hammer,
    title: 'Moulds in-house',
    body: 'New bottle shapes without third-party tooling fees or long queues.',
  },
  {
    icon: Warehouse,
    title: 'Stocked in Adelaide',
    body: 'R&D, decoration and local inventory, so reorders ship fast.',
  },
]

const stats = [
  { value: '20,000', unit: 'm² plant' },
  { value: '30,000', unit: 't / year' },
  { value: '500-100k', unit: 'unit runs' },
]

export default function About() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="about" className="py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
              We don&apos;t resell glass. We make it.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-stone-600 leading-relaxed max-w-xl">
              <p>
                Cape Glass is the Australian arm of our own glassworks in Jiangsu, China.
                Buying direct from the people who melt the glass is what lets us say yes to
                a 500-unit run or a one-off mould when importers can&apos;t.
              </p>
              <p>
                You deal with one team from first sketch to a pallet in Adelaide. No broker
                in the middle, no markup on someone else&apos;s bottles.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-paper p-5">
                  <cap.icon size={22} strokeWidth={1.75} className="text-green-700" />
                  <h3 className="mt-3 font-semibold text-ink">{cap.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-500 leading-snug">{cap.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link href="/about">
                <Button variant="outline">How we work</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-soft">
              <Image
                src="/images/services/furnace.jpg"
                alt="Inside the Cape Glass furnace floor in Jiangsu"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.unit}>
                    <div className="font-display text-2xl font-semibold text-white tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/75">{s.unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
