'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'screen-printing',
    title: 'Screen Printing',
    description: 'High-quality, durable graphics applied directly to glass surfaces using specialized inks that create vibrant, long-lasting designs for wine bottles.',
    image: '/images/services/customize.jpg',
    features: ['Vibrant colors', 'Durable finish', 'Wine industry focus', 'Custom designs']
  },
  {
    id: 'embossing',
    title: 'Embossing & Debossing',
    description: 'Raised or recessed designs molded directly into the glass surface, creating sophisticated tactile experiences that elevate wine brand presence.',
    image: '/images/services/embossing.png',
    features: ['Permanent raised/recessed designs', 'Premium tactile feel', 'Brand distinction', 'Custom molding']
  },
  {
    id: 'decals',
    title: 'Decal Application',
    description: 'Professional decal application services providing precise, detailed graphics with excellent adhesion and resistance to environmental factors.',
    image: '/images/services/artofprecision.jpg',
    features: ['Precise application', 'Weather resistance', 'Complex graphics', 'Professional finish']
  },
  {
    id: 'custom-bottles',
    title: 'Custom Glass Bottles',
    description: 'Bespoke bottle design and manufacturing from 500 to 100,000 units, solving industry challenges of large minimums and limited types.',
    image: '/images/bottles/0396.png',
    features: ['Small batch capability', 'Custom molds', '500-100K units', 'Diverse specifications']
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-light text-slate-900 mb-6">
            Decorative <span className="font-bold text-green-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your wine bottles with our comprehensive decorative services. 
            From screen printing to custom molding, we enhance your brand's appeal with precision and style.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="primary"
            size="lg"
            className="bg-slate-900 hover:bg-slate-800"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}