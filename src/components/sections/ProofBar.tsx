'use client'

import { motion, useReducedMotion } from 'framer-motion'

const proof = [
  { value: '500', unit: 'unit minimum', note: 'Where most factories start at 50,000' },
  { value: '3-30L', unit: 'size range', note: 'Standard 750 ml through to large format' },
  { value: 'In-house', unit: 'custom moulds', note: 'Your own shape, made to order' },
  { value: '1 day', unit: 'to a quote', note: 'Costed by our Adelaide team' },
]

export default function ProofBar() {
  const reduce = useReducedMotion()

  return (
    <section className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
          {proof.map((item, i) => (
            <motion.div
              key={item.unit}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="px-5 py-7 lg:px-8 lg:py-10"
            >
              <div className="font-display text-3xl lg:text-4xl font-semibold text-ink tabular-nums tracking-tight">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-medium text-green-700">{item.unit}</div>
              <p className="mt-2 text-sm text-stone-500 leading-snug">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
