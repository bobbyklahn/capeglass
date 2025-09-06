'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-light text-slate-900 mb-8">
              Australian Wine Industry
              <span className="block font-bold text-green-600">Excellence</span>
            </h2>
            
            <div className="space-y-6 text-lg font-sans text-slate-600 leading-relaxed">
              <p>
                Cape Glass is a leading importer of premium wine bottles for the Australian 
                wine industry, specializing in sourcing exquisite, high-quality bottles globally 
                and offering seamless supply chain solutions for wineries and related businesses.
              </p>
              
              <p>
                Our mission is to enhance your product&apos;s appeal and optimize production costs 
                through direct relationships with international suppliers, providing the most 
                competitive market pricing without compromising quality.
              </p>
              
              <p>
                With strategic warehousing in Adelaide and local showroom support, we deliver 
                reliable, on-time service with minimized lead times and simplified logistics 
                for Australia&apos;s discerning wine producers.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">48hr</div>
                <div className="font-sans text-slate-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30,000</div>
                <div className="font-sans text-slate-600">Tons Annual Output</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="font-sans text-slate-600">Custom Batch Min</div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                variant="primary"
                size="lg"
                className="bg-slate-900 hover:bg-slate-800"
              >
                Our Story
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/services/artofprecision.jpg"
                alt="Cape Glass Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl max-w-sm"
            >
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Sustainability Focus</h4>
              <p className="font-sans text-slate-600">
                Our manufacturing partners use advanced, eco-friendly technologies 
                including electric furnaces to significantly reduce carbon footprint.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}