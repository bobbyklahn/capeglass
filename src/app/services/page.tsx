'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'screen-printing',
    title: 'Screen Printing',
    description: 'High-quality, durable graphics applied directly to glass surfaces using specialized inks that create vibrant, long-lasting designs perfect for wine bottles.',
    image: '/images/services/customize.jpg',
    icon: '🎨',
    features: [
      'Vibrant, fade-resistant colors',
      'Durable commercial-grade inks',
      'Wine industry specialized',
      'Complex multi-color designs',
      'UV and weather resistant',
      'Food-safe certifications'
    ],
    applications: ['Wine labels', 'Brand logos', 'Decorative patterns', 'Vintage information', 'QR codes', 'Special editions'],
    specifications: {
      'Colors Available': 'Full spectrum CMYK + spot colors',
      'Minimum Order': '500 units',
      'Lead Time': '2-3 weeks',
      'Durability': '5+ years outdoor exposure'
    }
  },
  {
    id: 'embossing-debossing',
    title: 'Embossing & Debossing',
    description: 'Raised or recessed designs molded directly into the glass surface during production, creating sophisticated tactile experiences that elevate wine brand presence.',
    image: '/images/services/embossing2.png',
    icon: '⚡',
    features: [
      'Permanent raised/recessed designs',
      'Premium tactile experience',
      'Brand distinction and recognition',
      'Custom mold development',
      'Precision depth control',
      'Complex geometric patterns'
    ],
    applications: ['Premium wine brands', 'Heritage collections', 'Luxury editions', 'Commemorative bottles', 'Award recognition', 'Estate signatures'],
    specifications: {
      'Depth Range': '0.5mm - 2.0mm',
      'Minimum Order': '1,000 units',
      'Mold Development': '4-6 weeks',
      'Precision': '±0.1mm tolerance'
    }
  },
  {
    id: 'decal-application',
    title: 'Decal Application',
    description: 'Professional decal application services providing precise, detailed graphics with excellent adhesion and resistance to environmental factors for wine packaging.',
    image: '/images/services/uv.png',
    icon: '🏷️',
    features: [
      'Precise application techniques',
      'Weather and moisture resistance',
      'Complex graphic reproduction',
      'Professional finish quality',
      'Removable or permanent options',
      'Custom shapes and sizes'
    ],
    applications: ['Temporary promotions', 'Seasonal editions', 'Event bottles', 'Distributor branding', 'Compliance labels', 'Authentication marks'],
    specifications: {
      'Material Types': 'Vinyl, polyester, specialty films',
      'Minimum Order': '500 units',
      'Lead Time': '1-2 weeks',
      'Temperature Range': '-40°C to +80°C'
    }
  },
  {
    id: 'custom-bottles',
    title: 'Custom Glass Bottles',
    description: 'Bespoke bottle design and manufacturing from 500 to 100,000 units, solving industry challenges of large minimums and limited types with our flexible approach.',
    image: '/images/services/large.png',
    icon: '🏺',
    features: [
      'Small batch capabilities (500+ units)',
      'Custom mold development',
      'Diverse size specifications',
      'Unique shape creation',
      'Color customization options',
      'Integrated design consultation'
    ],
    applications: ['Boutique wineries', 'Limited releases', 'Brand differentiation', 'Signature collections', 'Corporate gifts', 'Special occasions'],
    specifications: {
      'Batch Size': '500 - 100,000 units',
      'Development Time': '6-10 weeks',
      'Color Options': 'Flint, antique, custom tints',
      'Capacity Range': '187ml - 30L'
    }
  },
  {
    id: 'large-format',
    title: 'Large Format Bottles',
    description: 'Specialized large format wine bottles from 3L to 30L, perfect for celebrations, gifts, and premium presentations with independent development capabilities.',
    image: '/images/services/largeformat.jpg',
    icon: '🍾',
    features: [
      'Sizes from 3L to 30L available',
      'Bordeaux and Burgundy styles',
      'Premium presentation quality',
      'Custom design options',
      'Celebration and gift focus',
      'Professional packaging'
    ],
    applications: ['Wedding celebrations', 'Corporate events', 'Premium gifts', 'Restaurant displays', 'Wine auctions', 'Collector editions'],
    specifications: {
      'Sizes Available': '3L, 6L, 9L, 12L, 15L, 30L',
      'Minimum Order': '50 units (large formats)',
      'Lead Time': '6-8 weeks',
      'Styles': 'Bordeaux, Burgundy, Custom'
    }
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Solutions',
    description: 'Comprehensive supply chain management with Adelaide warehousing, reliable inventory, and streamlined logistics for the Australian wine industry.',
    image: '/images/services/bottlesupply.jpg',
    icon: '🚚',
    features: [
      'Strategic Adelaide warehousing',
      'Reliable inventory management',
      'Fast, secure delivery',
      'Simplified logistics coordination',
      'Inventory forecasting',
      '48-hour response guarantee'
    ],
    applications: ['Regular wine production', 'Seasonal planning', 'Emergency orders', 'Inventory optimization', 'Distribution support', 'Cost management'],
    specifications: {
      'Response Time': '48 hours guaranteed',
      'Delivery Coverage': 'Australia-wide',
      'Inventory Capacity': '1M+ bottles ready stock',
      'Order Processing': '24-48 hours'
    }
  }
]

const valuePropositions = [
  {
    icon: '⚡',
    title: '48-Hour Response',
    description: 'Swift response times for all inquiries and sample requests, keeping your projects moving forward.'
  },
  {
    icon: '💰',
    title: 'Cost Savings',
    description: 'Direct supplier relationships deliver the most competitive pricing without compromising quality.'
  },
  {
    icon: '🇦🇺',
    title: 'Local Adelaide Support',
    description: 'Strategic warehousing and showroom in Adelaide for credible, hassle-free service.'
  },
  {
    icon: '🌱',
    title: 'Sustainability Focus',
    description: 'Eco-friendly manufacturing with electric furnaces reducing carbon footprint significantly.'
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8">
              Premium
              <span className="block font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Decorative Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Transform your wine bottles with our comprehensive range of decorative services. 
              From screen printing to custom molding, we enhance your brand with precision and style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                View All Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Get Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6">
              Why Choose <span className="font-bold text-green-600">Cape Glass</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our <span className="font-bold text-green-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive decorative and manufacturing services designed specifically 
              for the Australian wine industry's demanding quality standards.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-slate-700 font-semibold">{service.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Specifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(service.specifications).map(([key, value]) => (
                        <div key={key} className="border-l-4 border-green-500 pl-4">
                          <div className="text-sm text-slate-500 font-medium">{key}</div>
                          <div className="text-slate-900 font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href={`/services/${service.id}`}>
                      <Button 
                        variant="primary"
                        className="bg-slate-900 hover:bg-slate-800"
                      >
                        Learn More
                      </Button>
                    </Link>
                    <Button 
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your
              <span className="block font-bold text-green-400">Wine Bottles?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our Adelaide team today for your personalized consultation. 
              We guarantee a 48-hour response time and competitive pricing.
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
                Call 0434 719 886
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}