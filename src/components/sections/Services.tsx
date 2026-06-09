'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, PencilRuler, Wine, Tag } from 'lucide-react'

const finishes = [
  'Embossing & debossing',
  'Screen printing',
  'Decal application',
  'Frosting & coating',
  'Spray & polish',
]

const extras = [
  {
    icon: PencilRuler,
    title: 'Custom moulds',
    body: 'Your own bottle shape, from 500 units.',
    href: '/services',
  },
  {
    icon: Wine,
    title: 'Large formats',
    body: 'Magnums through to 30L celebration bottles.',
    href: '/products',
  },
  {
    icon: Tag,
    title: 'Wine labels',
    body: 'Printed labels to match, from 100.',
    href: '/label-printing',
  },
]

export default function Services() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="services" className="py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mb-12"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
            Finish it on the glass, not with a sticker.
          </h2>
          <p className="mt-5 text-lg text-stone-600 leading-relaxed">
            Embossing, printing, coating and labels run under the same roof as the bottle,
            so colour and registration stay controlled from melt to pallet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {/* Feature tile */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-4 grain relative rounded-3xl overflow-hidden bg-green-900 text-white flex flex-col"
          >
            <div className="relative h-56 sm:h-64">
              <Image
                src="/images/services/embossing2.png"
                alt="Embossed lettering raised directly into a glass bottle"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/40 to-transparent" />
            </div>
            <div className="p-7 lg:p-9 -mt-6 relative">
              <h3 className="font-display text-2xl font-semibold">In-glass decoration</h3>
              <p className="mt-3 text-white/75 leading-relaxed max-w-md">
                Raised embossing, screen print and decals applied during finishing, for a
                result that survives ice buckets and years on the shelf.
              </p>
              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-1.5 font-medium text-green-200 hover:text-white"
              >
                Explore services
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Menu list tile */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="lg:col-span-2 rounded-3xl border border-line bg-paper-2 p-7 lg:p-9"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-stone-400">
              The full menu
            </p>
            <ul className="mt-5 divide-y divide-line">
              {finishes.map((f) => (
                <li key={f} className="flex items-center gap-3 py-3.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-700 shrink-0" />
                  <span className="text-ink font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Extras */}
          {extras.map((e, i) => (
            <motion.div
              key={e.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              className="lg:col-span-2"
            >
              <Link
                href={e.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-colors hover:border-green-700/40 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <e.icon size={24} strokeWidth={1.75} className="text-green-700" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{e.title}</h3>
                <p className="mt-1.5 text-stone-500 leading-snug">{e.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-700">
                  Learn more
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
