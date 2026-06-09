'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Printer, Stamp, Sticker, Snowflake, PencilRuler, Wine, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const services = [
  { icon: Stamp, title: 'Embossing & debossing', body: 'Raised or recessed detail moulded into the glass itself, not printed on.', moq: '1,000', lead: 'Mould 4-6 wks', href: '/services/embossing' },
  { icon: Printer, title: 'Screen printing', body: 'Fired ceramic and organic inks for vibrant, permanent graphics.', moq: '500', lead: '2-3 wks', href: '/services/screen-printing' },
  { icon: Sticker, title: 'Decal & heat transfer', body: 'Fine multi-colour artwork with crisp registration and strong adhesion.', moq: '500', lead: '1-2 wks', href: '/services/decal-application' },
  { icon: Snowflake, title: 'Frosting & coating', body: 'Acid-look frosting and coloured coatings across the whole bottle.', moq: '1,000', lead: '2-3 wks', href: '/services' },
  { icon: PencilRuler, title: 'Custom bottles', body: 'Your own shape from a new mould, in runs from 500 to 100,000.', moq: '500', lead: '6-10 wks', href: '/services/custom-bottles' },
  { icon: Wine, title: 'Large format', body: 'Magnums, jeroboams and celebration bottles from 3L to 30L.', moq: '50', lead: '6-8 wks', href: '/products' },
]

const steps = [
  { n: '01', title: 'Send your artwork', body: 'Vector art or a rough idea, plus the bottle and quantity.' },
  { n: '02', title: 'We quote and proof', body: 'Costed within a day, with a digital proof to sign off.' },
  { n: '03', title: 'Approve a sample', body: 'A real printed or moulded sample before the full run.' },
  { n: '04', title: 'We make and ship', body: 'Produced at the plant, delivered from Adelaide stock.' },
]

export default function ServicesPage() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-700">Services</span>
              <h1 className="mt-5 font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-ink text-balance">
                Decoration and glass, one team.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone-600 leading-relaxed">
                Every finish below is run in the same plant that makes the bottle, so colour,
                registration and weight are controlled end to end. Minimums and lead times are
                a guide; tell us the job and we will be exact.
              </p>
              <Link href="/contact" className="inline-block mt-8">
                <Button variant="primary" size="lg">Request a quote</Button>
              </Link>
            </div>
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[5/4] rounded-[28px] overflow-hidden shadow-soft"
            >
              <Image src="/images/services/uv.png" alt="Printing being applied to wine bottles" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease }}
              >
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-colors hover:border-green-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start justify-between">
                    <s.icon size={26} strokeWidth={1.75} className="text-green-700" />
                    <ArrowUpRight size={18} strokeWidth={2} className="text-stone-300 group-hover:text-green-700 transition-colors" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-stone-500 leading-snug flex-1">{s.body}</p>
                  <div className="mt-6 pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-stone-500 tabular-nums">
                    <span>MOQ {s.moq}</span>
                    <span>{s.lead}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance max-w-2xl">
            From artwork to pallet, simply.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-3xl overflow-hidden border border-line">
            {steps.map((step) => (
              <motion.div
                key={step.n}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease }}
                className="bg-paper p-7 lg:p-8"
              >
                <span className="font-mono text-sm text-green-700">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-500 leading-snug">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28 bg-green-900 text-white">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-balance max-w-2xl mx-auto">
            Have a finish in mind?
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-lg text-white/75">
            Send the artwork and the bottle. We will come back within a business day with a
            price and a proof.
          </p>
          <Link href="/contact" className="inline-block mt-8">
            <Button variant="primary" size="lg" className="bg-white text-green-900 hover:bg-green-50">
              Request a quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
