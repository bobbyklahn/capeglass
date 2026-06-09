'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export interface ServiceDetailProps {
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  benefits: { title: string; body: string }[]
  specs: { label: string; value: string }[]
  applications: string[]
  ctaHeading: string
}

export default function ServiceDetail({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  benefits,
  specs,
  applications,
  ctaHeading,
}: ServiceDetailProps) {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-700">{eyebrow}</span>
              <h1 className="mt-5 font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-ink text-balance">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone-600 leading-relaxed">{intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact"><Button variant="primary" size="lg" className="w-full sm:w-auto">Request a quote</Button></Link>
                <Link href="/services"><Button variant="outline" size="lg" className="w-full sm:w-auto">All services</Button></Link>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[5/4] rounded-[28px] overflow-hidden shadow-soft"
            >
              <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs band */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-line">
            {specs.map((s) => (
              <div key={s.label} className="px-6 py-7">
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-stone-400">{s.label}</div>
                <div className="mt-1.5 font-display text-lg font-semibold text-ink">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance max-w-2xl">
            Why it earns its place.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-line rounded-3xl overflow-hidden border border-line">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease }}
                className="bg-paper p-7 lg:p-9"
              >
                <span className="font-mono text-sm text-green-700">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications + CTA */}
      <section className="py-24 lg:py-32 bg-green-900 text-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                {ctaHeading}
              </h2>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {applications.map((a) => (
                  <span key={a} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/85">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold">Get a price and a proof</h3>
              <p className="mt-3 text-white/75 leading-relaxed">
                Send your artwork and the bottle. We will come back within one business day
                with a quote and a digital proof, then a real sample before any full run.
              </p>
              <Link href="/contact" className="inline-block mt-7">
                <Button variant="primary" className="bg-white text-green-900 hover:bg-green-50">
                  Request a quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
