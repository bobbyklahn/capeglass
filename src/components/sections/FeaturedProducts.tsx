'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const featuredProducts = [
  {
    id: 'CG0172',
    name: 'Classic Bordeaux',
    image: '/images/bottles/0172.png',
    description: 'Timeless elegance with clean lines',
    specifications: ['750ml capacity', 'Premium glass weight', 'Standard cork finish']
  },
  {
    id: 'CG0386',
    name: 'Burgundy Elite',
    image: '/images/bottles/0386.png',
    description: 'Distinguished profile for premium brands',
    specifications: ['750ml capacity', 'Heavy base design', 'Premium finish']
  },
  {
    id: 'CG0504',
    name: 'Contemporary Curve',
    image: '/images/bottles/0504.png',
    description: 'Modern design with sophisticated appeal',
    specifications: ['750ml capacity', 'Curved shoulders', 'Elegant proportions']
  },
  {
    id: 'CG0396',
    name: 'Heritage Collection',
    image: '/images/bottles/0396.png',
    description: 'Traditional craftsmanship meets modern quality',
    specifications: ['750ml capacity', 'Classic proportions', 'Heritage design']
  },
  {
    id: 'CG0614',
    name: 'Premium Reserve',
    image: '/images/bottles/0614.png',
    description: 'Ultra-premium bottle for exclusive brands',
    specifications: ['750ml capacity', 'Extra heavy glass', 'Luxury finish']
  },
  {
    id: 'CG0582',
    name: 'Artisan Series',
    image: '/images/bottles/0582.png',
    description: 'Handcrafted aesthetic with modern precision',
    specifications: ['750ml capacity', 'Artisan design', 'Unique silhouette']
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-light text-slate-900 mb-6">
            Featured <span className="font-bold text-green-600">Collection</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our curated selection of premium glass bottles, each designed 
            to enhance your product&apos;s market presence and brand identity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.id}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button 
                    variant="primary"
                    className="flex-1 bg-slate-900 hover:bg-slate-800"
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Quote
                  </Button>
                </div>
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
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          >
            Explore Full Collection
          </Button>
        </motion.div>
      </div>
    </section>
  )
}