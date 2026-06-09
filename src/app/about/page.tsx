'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { PencilRuler, Printer, Sticker, Sparkles, Snowflake, Stamp, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const stats = [
  { value: '20,000', unit: 'm² plant' },
  { value: '30,000', unit: 't / year' },
  { value: '500-100k', unit: 'unit runs' },
  { value: '1 day', unit: 'to a quote' },
]

const capabilities = [
  { icon: PencilRuler, title: 'Design & moulds', body: 'In-house R&D and custom mould tooling for your own bottle shape.' },
  { icon: Stamp, title: 'Embossing', body: 'Raised and recessed detail moulded into the glass itself.' },
  { icon: Printer, title: 'Screen printing', body: 'Durable ceramic and organic inks, fired for a permanent finish.' },
  { icon: Sticker, title: 'Decal & heat transfer', body: 'Fine multi-colour graphics with crisp registration.' },
  { icon: Snowflake, title: 'Frosting & coating', body: 'Acid-look frosting and coloured coatings across the bottle.' },
  { icon: Sparkles, title: 'Polish & spray', body: 'Surface polishing and spray finishes for a premium feel.' },
]

export default function AboutPage() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-700">About Cape Glass</span>
              <h1 className="mt-5 font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-ink text-balance">
                The factory is ours.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone-600 leading-relaxed">
                Cape Glass is the Australian arm of a glassworks in Jiangsu, China. We melt,
                mould, decorate and warehouse our own bottles, so wineries here buy straight
                from the maker instead of through an importer.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact"><Button variant="primary" size="lg" className="w-full sm:w-auto">Request a quote</Button></Link>
                <Link href="/products"><Button variant="outline" size="lg" className="w-full sm:w-auto">See the bottles</Button></Link>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[5/4] rounded-[28px] overflow-hidden shadow-soft"
            >
              <Image src="/images/services/premium bottle.jpg" alt="A premium Cape Glass wine bottle" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
            {stats.map((s) => (
              <div key={s.unit} className="px-6 py-8 lg:py-10">
                <div className="font-display text-3xl lg:text-4xl font-semibold text-ink tabular-nums">{s.value}</div>
                <div className="mt-1 text-sm text-stone-500">{s.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease }}
              className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-soft order-last lg:order-first"
            >
              <Image src="/images/services/furnace.jpg" alt="The Jiangsu furnace floor with bottles on the line" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
                From the furnace to your dock.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-stone-600 leading-relaxed max-w-xl">
                <p>
                  Our Jiangsu plant runs electric-melt furnaces, which cut the carbon of
                  glassmaking and hold a steadier temperature, so weight and clarity stay
                  consistent run to run.
                </p>
                <p>
                  Because we own the line, small runs and one-off moulds are normal work, not
                  an exception we charge a premium for. Finished bottles are shipped to our
                  Adelaide warehouse, where stock and reorders sit close to your winery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
              Everything the bottle needs, in one plant.
            </h2>
            <p className="mt-5 text-lg text-stone-600 leading-relaxed">
              Design, moulding and decoration sit under one roof, so a single team owns the
              result from first sketch to finished glass.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-3xl overflow-hidden border border-line">
            {capabilities.map((c) => (
              <motion.div
                key={c.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease }}
                className="bg-paper p-7"
              >
                <c.icon size={24} strokeWidth={1.75} className="text-green-700" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-stone-500 leading-snug">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adelaide */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-300">Adelaide</span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Close to the wine country we serve.
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/70 leading-relaxed">
                Our warehouse and showroom sit in Edinburgh North, a short drive from the
                Barossa, Clare and McLaren Vale. Come and handle the glass before you commit
                to a run.
              </p>
              <div className="mt-9 space-y-4">
                <a href="https://maps.google.com/?q=22+Priority+Court+Edinburgh+North+SA+5113" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-green-200 transition-colors">
                  <MapPin size={18} strokeWidth={1.75} className="mt-1 text-green-300 shrink-0" />
                  22 Priority Court, Edinburgh North SA 5113
                </a>
                <a href="mailto:jose.zzh@outlook.com.au" className="flex items-center gap-3 text-white/80 hover:text-green-200 transition-colors">
                  <Mail size={18} strokeWidth={1.75} className="text-green-300 shrink-0" />
                  jose.zzh@outlook.com.au
                </a>
                <a href="tel:0434719886" className="flex items-center gap-3 text-white/80 hover:text-green-200 transition-colors">
                  <Phone size={18} strokeWidth={1.75} className="text-green-300 shrink-0" />
                  0434 719 886
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-semibold">What you get, working direct</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'No importer markup on the bottles',
                  'Custom moulds and runs from 500 units',
                  'Local stock, so reorders ship quickly',
                  'One team from design to delivery',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8">
                <Button variant="primary" className="w-full">Request a quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
