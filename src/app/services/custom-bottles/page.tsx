'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const designOptions = [
  {
    category: 'Shape Variations',
    description: 'Unique bottle silhouettes that set your wine apart',
    features: ['Custom neck designs', 'Shoulder modifications', 'Base configurations', 'Ergonomic considerations'],
    examples: ['Tapered necks', 'Wide shoulders', 'Flat-bottom designs', 'Curved profiles'],
    icon: '🏺'
  },
  {
    category: 'Size Options',
    description: 'From miniatures to large format bottles for every occasion',
    features: ['Standard capacities', 'Custom volumes', 'Proportional scaling', 'Legal compliance'],
    examples: ['187ml splits', '375ml half-bottles', '750ml standard', '1.5L magnums', 'Up to 30L'],
    icon: '📏'
  },
  {
    category: 'Color Customization',
    description: 'Glass colors that enhance your wine presentation',
    features: ['Antique green', 'Dead leaf green', 'Flint clear', 'Custom tints'],
    examples: ['Deep emerald', 'Cobalt blue', 'Amber gold', 'Ruby red', 'Smoky grey'],
    icon: '🎨'
  },
  {
    category: 'Surface Textures',
    description: 'Tactile experiences that communicate premium quality',
    features: ['Frosted finish', 'Textured patterns', 'Embossed elements', 'Smooth polish'],
    examples: ['Matte surfaces', 'Raised dots', 'Linear patterns', 'Logo embossing'],
    icon: '✋'
  }
]

const developmentProcess = [
  {
    phase: '01',
    title: 'Concept Development',
    duration: '1-2 weeks',
    description: 'Work with our design team to develop your bottle concept, considering brand identity, functional requirements, and manufacturing feasibility.',
    deliverables: ['Initial sketches', 'Concept refinement', 'Technical considerations', 'Project timeline']
  },
  {
    phase: '02',
    title: 'Design & Engineering',
    duration: '2-3 weeks',
    description: 'Create detailed technical drawings and 3D models, ensuring optimal glass distribution, structural integrity, and production efficiency.',
    deliverables: ['Technical drawings', '3D renderings', 'Structural analysis', 'Material specifications']
  },
  {
    phase: '03',
    title: 'Mold Development',
    duration: '6-8 weeks',
    description: 'Precision mold manufacturing using advanced CNC machining and quality control processes to ensure consistent bottle production.',
    deliverables: ['Mold fabrication', 'Quality testing', 'First article inspection', 'Production readiness']
  },
  {
    phase: '04',
    title: 'Production & Delivery',
    duration: '3-4 weeks',
    description: 'Full-scale production with rigorous quality control, packaging, and delivery to your specifications and timeline.',
    deliverables: ['Production run', 'Quality inspection', 'Packaging', 'Delivery coordination']
  }
]

const industryAdvantages = [
  {
    challenge: 'Large Minimum Orders',
    solution: 'Small batch capability from 500 units',
    impact: 'Enables boutique wineries and limited releases',
    icon: '📦'
  },
  {
    challenge: 'Limited Bottle Types',
    solution: 'Unlimited custom design possibilities',
    impact: 'Unique brand differentiation and recognition',
    icon: '🎯'
  },
  {
    challenge: 'High Mold Costs',
    solution: 'Cost-effective mold development process',
    impact: 'Affordable custom bottles for growing brands',
    icon: '💰'
  },
  {
    challenge: 'Long Lead Times',
    solution: 'Streamlined 12-14 week total process',
    impact: 'Faster time-to-market for new products',
    icon: '⚡'
  }
]

export default function CustomBottlesPage() {
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
                Custom
                <span className="block font-bold text-green-400">Glass Bottles</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bespoke bottle design and manufacturing from 500 to 100,000 units. 
                We solve industry challenges of large minimums and limited types with 
                our flexible, innovative approach to custom glass production.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  Start Design Process
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
                  src="/images/services/large.png"
                  alt="Custom Glass Bottles"
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

      {/* Industry Advantages */}
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
              Industry <span className="font-bold text-green-600">Advantages</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We address the key challenges facing wine producers when sourcing 
              custom bottles, making premium packaging accessible to all brands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.challenge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">{advantage.challenge}</h3>
                <h4 className="text-lg font-bold text-green-600 mb-3">{advantage.solution}</h4>
                <p className="text-slate-600 text-sm">{advantage.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Options */}
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
              Design <span className="font-bold text-green-600">Possibilities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlimited customization options to create bottles that perfectly 
              represent your wine brand and enhance your market presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {designOptions.map((option, index) => (
              <motion.div
                key={option.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{option.category}</h3>
                    <p className="text-slate-600">{option.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {option.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              Development <span className="font-bold text-green-600">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined 4-phase process ensures your custom bottle vision 
              becomes reality with precision, quality, and efficiency.
            </p>
          </motion.div>

          <div className="space-y-12">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{phase.phase}</span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 pt-12">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                      <div className="text-green-600 font-semibold mb-4">{phase.duration}</div>
                      <p className="text-slate-600 leading-relaxed mb-6">{phase.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Deliverables:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center text-slate-700 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/services/furnace.jpg"
                      alt={`${phase.title} Process`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="text-slate-700 font-semibold">{phase.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
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
                Manufacturing <span className="font-bold text-green-400">Capabilities</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Facility</h3>
                  <p>
                    20,000 square meter facility in Jiangsu, China with 30,000 tons 
                    annual output capacity and electric furnace technology.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Flexible Production</h3>
                  <p>
                    Small-batch specialization with diverse specifications, 
                    from 500 units to 100,000 units per order.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
                  <p>
                    ISO certified processes with rigorous quality control at every 
                    stage from design through final delivery.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Sustainability</h3>
                  <p>
                    Low-carbon electric furnaces significantly reduce environmental 
                    impact compared to traditional glass manufacturing.
                  </p>
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
              <h3 className="text-2xl font-bold mb-6">Project Specifications</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center border-b border-green-500 pb-3">
                  <span className="text-green-100">Minimum Order</span>
                  <span className="font-semibold">500 units</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-500 pb-3">
                  <span className="text-green-100">Maximum Order</span>
                  <span className="font-semibold">100,000 units</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-500 pb-3">
                  <span className="text-green-100">Total Lead Time</span>
                  <span className="font-semibold">12-14 weeks</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-500 pb-3">
                  <span className="text-green-100">Capacity Range</span>
                  <span className="font-semibold">187ml - 30L</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-500 pb-3">
                  <span className="text-green-100">Color Options</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Design Consultation</span>
                  <span className="font-semibold">Included</span>
                </div>
              </div>
              
              <Button 
                variant="secondary"
                size="lg"
                className="w-full bg-white text-green-600 hover:bg-green-50"
              >
                Start Your Custom Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success <span className="font-bold text-green-600">Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From boutique wineries to established brands, our custom bottles 
              help wine producers stand out in competitive markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Boutique Winery</h3>
              <p className="text-slate-600 mb-4">
                &quot;Cape Glass helped us create a unique bottle shape that perfectly 
                represents our heritage brand. The 1,000-unit minimum made it affordable.&quot;
              </p>
              <div className="text-green-600 font-semibold">Barossa Valley Estate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Brand</h3>
              <p className="text-slate-600 mb-4">
                &quot;The custom embossed elements and unique color gave our reserve 
                collection the premium feel we needed. Outstanding quality.&quot;
              </p>
              <div className="text-green-600 font-semibold">Hunter Valley Reserve</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fast Growth</h3>
              <p className="text-slate-600 mb-4">
                &quot;Fast turnaround and scalable production helped us launch our 
                new wine line on schedule. Great partnership.&quot;
              </p>
              <div className="text-green-600 font-semibold">Yarra Valley Wines</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
              Create Your
              <span className="block font-bold text-green-600">Signature Bottle</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Ready to differentiate your wine with a custom bottle? Our design team 
              is ready to bring your vision to life with our flexible, cost-effective process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Start Design Process
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}