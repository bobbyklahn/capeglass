'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Search, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const allProducts = [
  { id: 'CG0368', name: 'Bordeaux 368', image: '/images/bottles/0368.png', category: '750ml', capacity: '750 ml', specs: '279 · 79 Ø · 615 g' },
  { id: 'CG0386', name: 'Burgundy 386', image: '/images/bottles/0386.png', category: '750ml', capacity: '750 ml', specs: '330 · 84 Ø · 840 g' },
  { id: 'CG0388', name: 'Classic 388', image: '/images/bottles/0388.png', category: '750ml', capacity: '750 ml', specs: '315 · 82 Ø · 720 g' },
  { id: 'CG0391', name: 'Heritage 391', image: '/images/bottles/0391.png', category: '750ml', capacity: '750 ml', specs: '325 · 85 Ø · 890 g' },
  { id: 'CG0415', name: 'Premium 415', image: '/images/bottles/0415.png', category: '750ml', capacity: '750 ml', specs: '308 · 80 Ø · 680 g' },
  { id: 'CG0451', name: 'Elite 451', image: '/images/bottles/0451.png', category: '750ml', capacity: '750 ml', specs: '320 · 83 Ø · 750 g' },
  { id: 'CG0452', name: 'Heavy Reserve 452', image: '/images/bottles/0452.png', category: '750ml', capacity: '750 ml', specs: '295 · 95 Ø · 1200 g' },
  { id: 'CG0453', name: 'Select 453', image: '/images/bottles/0453.png', category: '750ml', capacity: '750 ml', specs: '310 · 81 Ø · 700 g' },
  { id: 'CG0457', name: 'Signature 457', image: '/images/bottles/0457.png', category: '750ml', capacity: '750 ml', specs: '318 · 84 Ø · 780 g' },
  { id: 'CG0483', name: 'Professional 483', image: '/images/bottles/0483.png', category: '750ml', capacity: '750 ml', specs: '312 · 79 Ø · 650 g' },
  { id: 'CG0504', name: 'Contemporary 504', image: '/images/bottles/0504.png', category: '750ml', capacity: '750 ml', specs: '305 · 86 Ø · 820 g' },
  { id: 'CG0506', name: 'Designer 506', image: '/images/bottles/0506.png', category: '750ml', capacity: '750 ml', specs: '328 · 82 Ø · 760 g' },
  { id: 'CG0582', name: 'Artisan 582', image: '/images/bottles/0582.png', category: '750ml', capacity: '750 ml', specs: '290 · 88 Ø · 950 g' },
  { id: 'CG0594', name: 'Magnum 594', image: '/images/bottles/0594.png', category: '1500ml', capacity: '1500 ml', specs: '345 · 100 Ø · 840 g' },
  { id: 'CG0603', name: 'Premium Magnum 603', image: '/images/bottles/0603.png', category: '1500ml', capacity: '1500 ml', specs: '360 · 116 Ø · 1170 g' },
  { id: 'CG0614', name: 'Ultra Magnum 614', image: '/images/bottles/0614.png', category: '1500ml', capacity: '1500 ml', specs: '352 · 108 Ø · 980 g' },
  { id: 'CG3000', name: 'Bordeaux 3L', image: '/images/bottles/0172.png', category: 'Large format', capacity: '3000 ml', specs: 'Made to order' },
  { id: 'CG6000', name: 'Burgundy 6L', image: '/images/bottles/0386.png', category: 'Large format', capacity: '6000 ml', specs: 'Made to order' },
  { id: 'CG15000', name: 'Premium 15L', image: '/images/bottles/0452.png', category: 'Large format', capacity: '15 L', specs: 'Made to order' },
  { id: 'CG30000', name: 'Ultra 30L', image: '/images/bottles/0614.png', category: 'Large format', capacity: '30 L', specs: 'Made to order' },
]

const categories = ['All', '750ml', '1500ml', 'Large format']

export default function ProductsPage() {
  const reduce = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-green-700">The range</span>
          <h1 className="mt-5 font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-ink text-balance max-w-3xl">
            Stock shapes, ready to decorate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600 leading-relaxed">
            Twenty-one shapes from standard 750 ml to 30L large format, all available with
            embossing, printing or your own custom mould. Dimensions are height · diameter · weight.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="pb-24 lg:pb-32 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-10 sticky top-[72px] z-30 bg-paper/90 backdrop-blur py-4 -my-4">
            <div className="relative flex-1">
              <Search size={18} strokeWidth={1.75} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search by name or code"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-stone-300 bg-white pl-11 pr-4 py-3 text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-700 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-6 text-sm text-stone-500">
            Showing {filteredProducts.length} of {allProducts.length} bottles
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.04 }}
              >
                <Link
                  href="/contact"
                  className="group block rounded-3xl overflow-hidden border border-line bg-paper transition-shadow hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  <div className={`relative h-72 flex items-center justify-center p-8 ${index % 2 === 0 ? 'bg-stone-100' : 'bg-green-50'}`}>
                    <Image
                      src={product.image}
                      alt={`${product.name}, ${product.capacity}`}
                      width={150}
                      height={300}
                      className="h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1.5"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <span className="absolute top-4 left-4 text-[11px] font-mono uppercase tracking-[0.14em] text-stone-400">{product.id}</span>
                    <span className="absolute top-4 right-4 text-[11px] font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full">{product.category}</span>
                  </div>
                  <div className="px-6 py-5 border-t border-line">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
                      <ArrowUpRight size={18} strokeWidth={2} className="text-stone-300 group-hover:text-green-700 transition-colors" />
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-sm text-stone-500">{product.capacity}</p>
                      <p className="font-mono text-xs text-stone-400 tabular-nums">{product.specs}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Search size={40} strokeWidth={1.5} className="mx-auto text-stone-300" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-stone-700">No bottles match that</h3>
              <p className="mt-2 text-stone-500">Try a different code, or clear the filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
