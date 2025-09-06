'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const benefits = [
  {
    title: 'Permanent Integration',
    description: 'Embossed designs are molded directly into the glass during production, ensuring they never wear off or fade.',
    icon: '🔒'
  },
  {
    title: 'Luxury Touch',
    description: 'The raised texture creates a premium tactile experience that communicates quality and sophistication.',
    icon: '✨'
  },
  {
    title: 'Brand Recognition',
    description: 'Distinctive embossed elements make your bottles instantly recognizable and memorable to consumers.',
    icon: '🏆'
  },
  {
    title: 'Customization Freedom',
    description: 'From simple text to complex logos and decorative elements, we can emboss virtually any design.',
    icon: '🎨'
  }
]

const applications = [
  'Premium wine bottles',
  'Craft spirits packaging',
  'Luxury perfume bottles',
  'High-end beverage containers',
  'Commemorative editions',
  'Corporate gifts'
]

const specifications = [
  { label: 'Minimum Order', value: '500 units' },
  { label: 'Lead Time', value: '4-6 weeks' },
  { label: 'Design Depth', value: '0.5-2.0mm' },
  { label: 'Precision Tolerance', value: '±0.1mm' },
  { label: 'Color Options', value: 'Clear, Flint, Antique' },
  { label: 'Capacity Range', value: '187ml - 1.5L' }
]

export default function EmbossingPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-6">
                Glass
                <span className="block font-bold text-green-400">Embossing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Elevate your brand with precision embossing that transforms ordinary bottles 
                into extraordinary brand statements. Our advanced molding techniques create 
                raised designs that speak luxury and quality.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  Get Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  View Gallery
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/images/services/embossing.png"
                  alt="Cape Glass Embossing"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Why Choose <span className="font-bold text-green-600">Embossing?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Embossing isn&apos;t just decoration—it&apos;s a strategic brand investment that 
              communicates premium quality and attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-slate-900 mb-8">
                Technical <span className="font-bold text-green-600">Excellence</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our state-of-the-art glass molding equipment ensures precision embossing 
                with consistent depth, sharp detail, and flawless finish quality across 
                every production run.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec) => (
                  <div key={spec.label} className="border-l-4 border-green-500 pl-4">
                    <div className="text-sm text-slate-500 font-medium">{spec.label}</div>
                    <div className="text-lg font-bold text-slate-900">{spec.value}</div>
                  </div>
                ))}
              </div>

              <Button 
                variant="primary"
                size="lg"
                className="bg-slate-900 hover:bg-slate-800"
              >
                Technical Specifications
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/artofprecision.jpg"
                  alt="Embossing Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-slate-900 mb-8">
                Perfect <span className="font-bold text-green-600">Applications</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Embossing adds value across diverse industries and product categories. 
                Here are some popular applications where embossing delivers maximum impact:
              </p>

              <ul className="space-y-4 mb-8">
                {applications.map((application, index) => (
                  <motion.li
                    key={application}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-lg text-slate-700"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0" />
                    {application}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-8">
                Transform your bottles with precision embossing. Our team will work with 
                you to create designs that elevate your brand and captivate your customers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-400 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Free design consultation
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-400 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Custom prototype samples
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-400 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Competitive pricing
                </div>
              </div>
              
              <Button 
                variant="secondary"
                size="lg"
                className="w-full mt-8 bg-green-600 hover:bg-green-700"
              >
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}