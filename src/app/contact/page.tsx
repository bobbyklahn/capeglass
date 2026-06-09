'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const contactMethods = [
  { method: 'Email', value: 'jose.zzh@outlook.com.au', description: 'Quotes and detailed enquiries', icon: Mail, link: 'mailto:jose.zzh@outlook.com.au' },
  { method: 'Phone', value: '0434 719 886', description: 'Mon to Fri, business hours', icon: Phone, link: 'tel:0434719886' },
  { method: 'Adelaide', value: '22 Priority Court, Edinburgh North', description: 'Warehouse & showroom, by appointment', icon: MapPin, link: 'https://maps.google.com/?q=22+Priority+Court+Edinburgh+North+SA+5113' },
]

const faqs = [
  { question: 'What is your minimum order?', answer: 'Most bottles and finishes start at 500 units. Large formats (3L and up) start at 50. Samples can be just a handful of pieces.' },
  { question: 'How fast do you reply?', answer: 'We aim to come back with options and a price within one business day. For anything urgent, call 0434 719 886.' },
  { question: 'Can you make a custom shape?', answer: 'Yes. Custom moulds run from 500 to 100,000 units, and take roughly 6 to 10 weeks from sign-off, including tooling.' },
  { question: 'What decoration can you do?', answer: 'Embossing and debossing, screen printing, decals and heat transfer, frosting and coating, plus printed wine labels to match.' },
  { question: 'Can I see samples first?', answer: 'Always. Visit the Edinburgh North showroom to handle the range, and we proof and sample before any full production run.' },
  { question: 'What are your payment terms?', answer: 'Terms flex with order size and history. A common structure is 30% deposit with the balance on delivery. We will confirm in the quote.' },
]

export default function ContactPage() {
  const reduce = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', serviceType: '', quantity: '', timeline: '', message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      setSubmitStatus({ type: 'error', message: 'Please add your name and email so we can reply.' })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong')
      setSubmitStatus({ type: 'success', message: data.message || 'Thanks. We will reply within one business day.' })
      setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', quantity: '', timeline: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Could not send. Please email jose.zzh@outlook.com.au directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const inputCls =
    'w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition'
  const labelCls = 'block text-sm font-medium text-stone-700 mb-1.5'

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-700">Contact</span>
          <h1 className="mt-5 font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-ink text-balance max-w-3xl">
            Let&apos;s talk bottles.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600 leading-relaxed">
            Send a shape, a quantity, or just a rough idea. Our Adelaide team replies within
            one business day with options and a price.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {contactMethods.map((c) => (
              <a
                key={c.method}
                href={c.link}
                target={c.link.startsWith('http') ? '_blank' : undefined}
                rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl border border-line bg-paper-2 p-6 hover:border-green-700/40 transition-colors"
              >
                <c.icon size={24} strokeWidth={1.75} className="text-green-700" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{c.method}</h2>
                <p className="mt-1 font-medium text-green-700 break-words">{c.value}</p>
                <p className="mt-1 text-sm text-stone-500">{c.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 lg:py-24 bg-paper-2 border-y border-line">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-3xl bg-paper border border-line p-7 lg:p-9"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">Send a message</h2>
              <p className="mt-2 text-stone-500">Tell us what you are making and roughly how many.</p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelCls}>Full name <span className="text-green-700">*</span></label>
                    <input id="name" name="name" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Jordan Hayes" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Email <span className="text-green-700">*</span></label>
                    <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className={inputCls} placeholder="jordan@winery.com.au" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputCls} placeholder="0412 345 678" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Winery / company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} className={inputCls} placeholder="Mistwood Estate" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className={labelCls}>What can we help with?</label>
                    <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputCls}>
                      <option value="">Select one</option>
                      <option>Stock wine bottles</option>
                      <option>Custom bottle / mould</option>
                      <option>Decoration (print, emboss, decal)</option>
                      <option>Large format (3-30L)</option>
                      <option>Wine labels</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className={labelCls}>Rough quantity</label>
                    <input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className={inputCls} placeholder="e.g. 5,000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelCls}>Details</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Bottle shape, finish, timeline, anything useful." />
                </div>

                {submitStatus.type && (
                  <div role="status" className={`rounded-lg px-4 py-3 text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" loading={isSubmitting} disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending' : 'Request a quote'}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="rounded-3xl bg-stone-900 text-white p-7 lg:p-8">
                <h3 className="font-display text-xl font-semibold">Adelaide warehouse</h3>
                <p className="mt-4 text-white/75 leading-relaxed">
                  22 Priority Court<br />Edinburgh North SA 5113
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between text-white/70"><span>Mon - Fri</span><span>8:00 - 18:00</span></div>
                  <div className="flex justify-between text-white/70"><span>Saturday</span><span>9:00 - 14:00</span></div>
                  <div className="flex justify-between text-white/70"><span>Sunday</span><span>By appointment</span></div>
                </div>
              </div>
              <div className="rounded-3xl border border-line bg-paper p-7 lg:p-8">
                <h3 className="font-display text-xl font-semibold text-ink">On site</h3>
                <ul className="mt-4 space-y-3">
                  {['Full bottle range to handle', 'Decoration and label samples', 'Quality control', 'Meeting space'].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-700 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance max-w-2xl">
            Questions, answered.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-line pt-5">
                <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-stone-600 leading-relaxed max-w-prose">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
