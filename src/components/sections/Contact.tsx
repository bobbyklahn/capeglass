'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const details = [
  { icon: Mail, label: 'Email', value: 'jose.zzh@outlook.com.au', href: 'mailto:jose.zzh@outlook.com.au' },
  { icon: Phone, label: 'Phone', value: '0434 719 886', href: 'tel:0434719886' },
  {
    icon: MapPin,
    label: 'Adelaide warehouse & showroom',
    value: '22 Priority Court, Edinburgh North SA 5113',
    href: 'https://maps.google.com/?q=22+Priority+Court+Edinburgh+North+SA+5113',
  },
]

const services = [
  'Stock wine bottles',
  'Custom bottle / mould',
  'Decoration (print, emboss, decal)',
  'Large format (3-30L)',
  'Wine labels',
  'Something else',
]

export default function Contact() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', company: '', serviceType: '', quantity: '', message: '' })
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) {
      setStatus({ type: 'error', message: 'Please add your name and email so we can reply.' })
      return
    }
    setSubmitting(true)
    setStatus({ type: null, message: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus({ type: 'success', message: data.message || 'Thanks. We will reply within one business day.' })
      setForm({ name: '', email: '', company: '', serviceType: '', quantity: '', message: '' })
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err instanceof Error ? err.message : 'Could not send. Please email jose.zzh@outlook.com.au directly.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const inputCls =
    'w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition'

  return (
    <section id="contact" className="grain relative py-24 lg:py-32 bg-green-900 text-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: pitch + details */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Tell us what you need.
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-md">
              Send a shape, a quantity, or just a rough idea. We will come back within one
              business day with options and a price.
            </p>

            <div className="mt-10 space-y-5">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith('http') ? '_blank' : undefined}
                  rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <d.icon size={18} strokeWidth={1.75} className="text-green-200" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">{d.label}</span>
                    <span className="block font-medium group-hover:text-green-200 transition-colors">
                      {d.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-paper p-7 lg:p-9"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Name <span className="text-green-700">*</span>
                  </label>
                  <input id="c-name" name="name" value={form.name} onChange={handleChange} required className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Email <span className="text-green-700">*</span>
                  </label>
                  <input id="c-email" type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-company" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Winery / company
                  </label>
                  <input id="c-company" name="company" value={form.company} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-qty" className="block text-sm font-medium text-stone-700 mb-1.5">
                    Rough quantity
                  </label>
                  <input id="c-qty" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 5,000" className={inputCls} />
                </div>
              </div>

              <div>
                <label htmlFor="c-service" className="block text-sm font-medium text-stone-700 mb-1.5">
                  What can we help with?
                </label>
                <select id="c-service" name="serviceType" value={form.serviceType} onChange={handleChange} className={inputCls}>
                  <option value="">Select one</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className="block text-sm font-medium text-stone-700 mb-1.5">
                  Details
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Bottle shape, finish, timeline, anything useful."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {status.type && (
                <div
                  role="status"
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" loading={submitting} disabled={submitting} className="w-full">
                {submitting ? 'Sending' : 'Request a quote'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
