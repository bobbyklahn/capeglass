'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const decalTypes = [
  {
    type: 'Vinyl Decals',
    description: 'High-quality vinyl with excellent conformability and durability',
    features: ['Weather resistant', 'Easy application', 'Clean removal', 'Custom shapes'],
    applications: ['Promotional labels', 'Event branding', 'Seasonal campaigns'],
    icon: '🏷️'
  },
  {
    type: 'Polyester Films',
    description: 'Premium polyester for permanent applications with superior clarity',
    features: ['UV stable', 'Chemical resistant', 'High clarity', 'Permanent bond'],
    applications: ['Brand logos', 'Compliance labels', 'Quality marks'],
    icon: '📑'
  },
  {
    type: 'Specialty Films',
    description: 'Advanced materials for unique effects and premium presentations',
    features: ['Metallic finishes', 'Holographic effects', 'Textured surfaces', 'Security features'],
    applications: ['Luxury editions', 'Anti-counterfeiting', 'Premium collections'],
    icon: '✨'
  }
]

const applicationMethods = [
  {
    method: 'Wet Application',
    description: 'Professional wet application for large decals and complex surfaces',
    benefits: ['Perfect positioning', 'Bubble-free finish', 'Professional appearance'],
    icon: '💧'
  },
  {
    method: 'Dry Application', 
    description: 'Precision dry application for smaller decals and detailed work',
    benefits: ['Quick turnaround', 'Clean edges', 'Immediate handling'],
    icon: '🔥'
  },
  {
    method: 'Heat Transfer',
    description: 'Heat-activated application for permanent bonding and durability',
    benefits: ['Superior adhesion', 'Long-term durability', 'Temperature resistance'],
    icon: '🌡️'
  }
]

export default function DecalApplicationPage() {
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
                Decal
                <span className="block font-bold text-green-400">Application</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional decal application services providing precise, detailed graphics 
                with excellent adhesion and resistance to environmental factors. Perfect for 
                wine bottle branding, compliance labels, and promotional campaigns.
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
                  View Portfolio
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
                  src="/images/services/uv.png"
                  alt="Decal Application Process"
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

      {/* Decal Types */}
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
              Decal <span className="font-bold text-green-600">Types</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer a comprehensive range of decal materials and finishes to meet 
              every wine packaging need, from temporary promotions to permanent branding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {decalTypes.map((decal, index) => (
              <motion.div
                key={decal.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {decal.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{decal.type}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{decal.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {decal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {decal.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Methods */}
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
              Application <span className="font-bold text-green-600">Methods</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expert technicians use industry-leading application methods to ensure 
              perfect placement, bubble-free installation, and long-lasting adhesion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applicationMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{method.method}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{method.description}</p>
                
                <div className="space-y-2">
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center text-slate-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Durability */}
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
                Quality & <span className="font-bold text-green-600">Durability</span>
              </h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Temperature Resistance</h3>
                  <p className="text-slate-600">
                    Our decals withstand extreme temperature variations from -40°C to +80°C, 
                    perfect for wine storage and transportation conditions.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">UV Protection</h3>
                  <p className="text-slate-600">
                    Advanced UV-resistant materials prevent fading and degradation, 
                    maintaining vibrant colors for years under direct sunlight.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Moisture Resistance</h3>
                  <p className="text-slate-600">
                    Waterproof adhesives and materials ensure decals remain secure in 
                    high-humidity environments like wine cellars and refrigeration.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Chemical Compatibility</h3>
                  <p className="text-slate-600">
                    Food-safe materials resistant to cleaning solutions and wine acids, 
                    ensuring safety and durability in wine applications.
                  </p>
                </div>
              </div>
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
                  alt="Quality Testing Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Quality Testing</h4>
                  <p className="text-slate-600 text-sm">
                    Every decal batch undergoes rigorous testing for adhesion, 
                    durability, and environmental resistance.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect <span className="font-bold text-green-600">Use Cases</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Decal application provides flexible solutions for various wine industry needs, 
              from promotional campaigns to regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Promotional Labels</h3>
              <p className="text-slate-600 text-sm">
                Temporary labels for special offers, events, and marketing campaigns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Labels</h3>
              <p className="text-slate-600 text-sm">
                Government-required labels for alcohol content, health warnings, and origin.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Distributor Branding</h3>
              <p className="text-slate-600 text-sm">
                Removable labels for different distributors and regional requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security Features</h3>
              <p className="text-slate-600 text-sm">
                Anti-counterfeiting decals with security features and authentication marks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-8">
                Technical <span className="font-bold text-green-400">Specifications</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Minimum Order Quantity</span>
                  <span className="font-semibold text-white">500 units</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Production Lead Time</span>
                  <span className="font-semibold text-white">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Material Thickness</span>
                  <span className="font-semibold text-white">50-200 microns</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Adhesive Strength</span>
                  <span className="font-semibold text-white">180° peel test</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                  <span>Service Temperature</span>
                  <span className="font-semibold text-white">-40°C to +80°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shelf Life</span>
                  <span className="font-semibold text-white">7+ years</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-green-100 mb-8">
                Transform your wine bottles with professional decal applications. 
                Our team will help you choose the right materials and methods for your needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Free material consultation
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Application method guidance
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Quality guaranteed results
                </div>
              </div>
              
              <Button 
                variant="secondary"
                size="lg"
                className="w-full bg-white text-green-600 hover:bg-green-50"
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