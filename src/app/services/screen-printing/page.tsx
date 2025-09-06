'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const processSteps = [
  {
    step: '01',
    title: 'Design Consultation',
    description: 'Our team works with you to optimize your artwork for screen printing, ensuring colors and details translate perfectly to glass.',
    icon: '🎨'
  },
  {
    step: '02',
    title: 'Screen Preparation',
    description: 'Custom screens are prepared with precision mesh counts and specialized glass-compatible inks for optimal adhesion.',
    icon: '🖼️'
  },
  {
    step: '03',
    title: 'Quality Printing',
    description: 'Each bottle is individually screen printed using our commercial-grade equipment with consistent pressure and ink coverage.',
    icon: '🖨️'
  },
  {
    step: '04',
    title: 'Curing & Finishing',
    description: 'Printed bottles undergo specialized curing process to ensure durability and resistance to wine storage conditions.',
    icon: '🔥'
  }
]

const colorOptions = [
  { name: 'Deep Wine Red', color: '#722F37', popular: true },
  { name: 'Classic Black', color: '#000000', popular: true },
  { name: 'Elegant Gold', color: '#FFD700', popular: true },
  { name: 'Premium Silver', color: '#C0C0C0', popular: false },
  { name: 'Forest Green', color: '#355E3B', popular: true },
  { name: 'Royal Blue', color: '#4169E1', popular: false },
  { name: 'Burgundy', color: '#800020', popular: true },
  { name: 'Copper', color: '#B87333', popular: false }
]

export default function ScreenPrintingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-8">
                Screen
                <span className="block font-bold text-green-400">Printing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your wine bottles with vibrant, durable screen printing that withstands 
                commercial use and creates lasting brand impressions. Our specialized inks and 
                techniques ensure your designs stay brilliant for years.
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
                  View Samples
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
                  src="/images/services/customize.jpg"
                  alt="Screen Printing Process"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
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
              Our <span className="font-bold text-green-600">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, our proven 4-step process ensures exceptional 
              results for every wine bottle screen printing project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Color <span className="font-bold text-green-600">Options</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our extensive color palette or create custom colors to match 
              your brand perfectly. All inks are UV-resistant and wine-storage compatible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {colorOptions.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-3">
                  <div 
                    className="w-16 h-16 rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color.color }}
                  />
                  {color.popular && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-700">{color.name}</p>
                {color.popular && (
                  <p className="text-xs text-green-600 font-semibold">Popular</p>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-6">
              Need a custom color? We can match any Pantone color or create bespoke formulations.
            </p>
            <Button 
              variant="primary"
              className="bg-slate-900 hover:bg-slate-800"
            >
              Request Custom Color
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
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
              
              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Ink Specifications</h3>
                  <p className="text-slate-600">
                    Food-safe, UV-resistant inks specifically formulated for glass adhesion. 
                    Withstand temperature variations and maintain color vibrancy for 5+ years.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Print Resolution</h3>
                  <p className="text-slate-600">
                    High-resolution printing capable of reproducing fine details, small text, 
                    and complex logos with crisp, clean edges.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Durability Testing</h3>
                  <p className="text-slate-600">
                    All printed bottles undergo rigorous testing including wash resistance, 
                    UV exposure, and temperature cycling to ensure long-term performance.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Project Specifications</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span className="text-gray-300">Minimum Order</span>
                  <span className="font-semibold">500 units</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span className="text-gray-300">Lead Time</span>
                  <span className="font-semibold">2-3 weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span className="text-gray-300">Colors per Design</span>
                  <span className="font-semibold">Up to 6 colors</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span className="text-gray-300">Print Area</span>
                  <span className="font-semibold">360° coverage</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span className="text-gray-300">Temperature Range</span>
                  <span className="font-semibold">-40°C to +150°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Warranty</span>
                  <span className="font-semibold">5 years color fade</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Download Technical Sheet
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Perfect <span className="font-bold text-green-600">Applications</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Screen printing delivers exceptional results across diverse wine packaging needs, 
              from boutique labels to large-scale commercial production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Wine Labels</h3>
              <p className="text-slate-600 mb-4">
                Elegant branding for premium wine collections with rich colors and fine detail reproduction.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Vintage information</li>
                <li>• Estate logos</li>
                <li>• Varietal descriptions</li>
                <li>• Award recognition</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Artistic Designs</h3>
              <p className="text-slate-600 mb-4">
                Complex artistic elements and patterns that showcase your wine&apos;s unique character and heritage.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Decorative borders</li>
                <li>• Landscape imagery</li>
                <li>• Abstract patterns</li>
                <li>• Cultural motifs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Special Editions</h3>
              <p className="text-slate-600 mb-4">
                Limited releases and commemorative bottles with unique designs that create collector appeal.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Anniversary editions</li>
                <li>• Event commemoratives</li>
                <li>• Seasonal releases</li>
                <li>• Collaboration bottles</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-8">
              Ready to Bring Your
              <span className="block font-bold text-green-400">Design to Life?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our screen printing specialists today. We&apos;ll help optimize your design 
              and provide samples to ensure perfect results for your wine bottles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Request Samples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}