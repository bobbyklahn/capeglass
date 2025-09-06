'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const allProducts = [
  // 750ml Standard Collection
  { id: 'CG0368', name: 'Bordeaux 368', image: '/images/bottles/0368.png', category: '750ml', capacity: '750ml', specs: '279.5mm H × 79mm D × 615g' },
  { id: 'CG0386', name: 'Burgundy 386', image: '/images/bottles/0386.png', category: '750ml', capacity: '750ml', specs: '330mm H × 84mm D × 840g' },
  { id: 'CG0388', name: 'Classic 388', image: '/images/bottles/0388.png', category: '750ml', capacity: '750ml', specs: '315mm H × 82mm D × 720g' },
  { id: 'CG0391', name: 'Heritage 391', image: '/images/bottles/0391.png', category: '750ml', capacity: '750ml', specs: '325mm H × 85mm D × 890g' },
  { id: 'CG0415', name: 'Premium 415', image: '/images/bottles/0415.png', category: '750ml', capacity: '750ml', specs: '308mm H × 80mm D × 680g' },
  { id: 'CG0451', name: 'Elite 451', image: '/images/bottles/0451.png', category: '750ml', capacity: '750ml', specs: '320mm H × 83mm D × 750g' },
  { id: 'CG0452', name: 'Reserve 452', image: '/images/bottles/0452.png', category: '750ml', capacity: '750ml', specs: '295mm H × 95.5mm D × 1200g' },
  { id: 'CG0453', name: 'Select 453', image: '/images/bottles/0453.png', category: '750ml', capacity: '750ml', specs: '310mm H × 81mm D × 700g' },
  { id: 'CG0457', name: 'Signature 457', image: '/images/bottles/0457.png', category: '750ml', capacity: '750ml', specs: '318mm H × 84mm D × 780g' },
  { id: 'CG0483', name: 'Professional 483', image: '/images/bottles/0483.png', category: '750ml', capacity: '750ml', specs: '312mm H × 79mm D × 650g' },
  { id: 'CG0504', name: 'Contemporary 504', image: '/images/bottles/0504.png', category: '750ml', capacity: '750ml', specs: '305mm H × 86mm D × 820g' },
  { id: 'CG0506', name: 'Designer 506', image: '/images/bottles/0506.png', category: '750ml', capacity: '750ml', specs: '328mm H × 82mm D × 760g' },
  { id: 'CG0582', name: 'Artisan 582', image: '/images/bottles/0582.png', category: '750ml', capacity: '750ml', specs: '290mm H × 88mm D × 950g' },
  
  // 1500ml Collection
  { id: 'CG0594', name: 'Magnum 594', image: '/images/bottles/0594.png', category: '1500ml', capacity: '1500ml', specs: '345mm H × 100.4mm D × 840g' },
  { id: 'CG0603', name: 'Premium Magnum 603', image: '/images/bottles/0603.png', category: '1500ml', capacity: '1500ml', specs: '360.5mm H × 115.8mm D × 1170g' },
  { id: 'CG0614', name: 'Ultra Magnum 614', image: '/images/bottles/0614.png', category: '1500ml', capacity: '1500ml', specs: '352mm H × 108mm D × 980g' },

  // Large Format Available
  { id: 'CG3000', name: 'Bordeaux 3L', image: '/images/bottles/0172.png', category: 'Large Format', capacity: '3000ml', specs: 'Custom dimensions available' },
  { id: 'CG6000', name: 'Burgundy 6L', image: '/images/bottles/0386.png', category: 'Large Format', capacity: '6000ml', specs: 'Custom dimensions available' },
  { id: 'CG15000', name: 'Premium 15L', image: '/images/bottles/0452.png', category: 'Large Format', capacity: '15000ml', specs: 'Custom dimensions available' },
  { id: 'CG30000', name: 'Ultra 30L', image: '/images/bottles/0614.png', category: 'Large Format', capacity: '30000ml', specs: 'Custom dimensions available' }
]

const categories = ['All', '750ml', '1500ml', 'Large Format']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6">
              Our <span className="font-bold text-green-400">Collection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete range of premium glass bottles, each designed with precision 
              and crafted for excellence. Every bottle carries our commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products by name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-slate-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-80 bg-gradient-to-br from-slate-50 to-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.id}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 mb-2">{product.capacity}</p>
                  <p className="text-xs text-slate-400 mb-4">{product.specs}</p>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="primary"
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-sm"
                    >
                      Details
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm px-4"
                    >
                      Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}