'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const companyValues = [
  {
    value: 'Quality Excellence',
    description: 'Uncompromising commitment to premium glass quality that enhances wine presentation and preserves product integrity.',
    icon: '🏆'
  },
  {
    value: 'Swift Service',
    description: 'Industry-leading 48-hour response times and streamlined processes that keep your production schedules on track.',
    icon: '⚡'
  },
  {
    value: 'Cost Efficiency',
    description: 'Direct supplier relationships and strategic warehousing deliver significant cost savings without quality compromise.',
    icon: '💰'
  },
  {
    value: 'Local Support',
    description: 'Adelaide-based team with showroom facilities providing personalized service and immediate assistance.',
    icon: '🤝'
  },
  {
    value: 'Sustainability',
    description: 'Partnership with eco-friendly manufacturers using electric furnaces to minimize environmental impact.',
    icon: '🌱'
  },
  {
    value: 'Innovation',
    description: 'Continuous development of new bottle designs and decorative techniques to keep brands ahead of trends.',
    icon: '🚀'
  }
]

const milestones = [
  { year: '2020', event: 'Cape Glass Australia Founded', description: 'Established with vision to serve Australian wine industry' },
  { year: '2021', event: 'Adelaide Facility Opened', description: 'Strategic warehousing and showroom launched in Adelaide' },
  { year: '2022', event: 'Manufacturing Partnership', description: 'Exclusive partnership with Jiangsu facility established' },
  { year: '2023', event: '500+ Winery Clients', description: 'Serving boutique to large-scale wine producers across Australia' },
  { year: '2024', event: 'Custom Bottle Innovation', description: 'Launched flexible small-batch custom bottle service' },
  { year: '2025', event: 'Sustainability Leadership', description: 'Leading sustainable glass sourcing in Australian market' }
]

const manufacturingStats = [
  { stat: '20,000', unit: 'sqm facility', description: 'Advanced manufacturing facility in Jiangsu, China' },
  { stat: '30,000', unit: 'tons annually', description: 'Total glass production capacity per year' },
  { stat: '500-100K', unit: 'unit flexibility', description: 'Custom batch sizes from boutique to commercial scale' },
  { stat: '48hr', unit: 'response time', description: 'Guaranteed response for all inquiries and requests' }
]

export default function AboutPage() {
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
              <h1 className="text-5xl lg:text-7xl font-serif font-light text-white mb-8">
                About
                <span className="block font-bold text-green-400">Cape Glass</span>
              </h1>
              <p className="text-xl font-sans text-gray-300 mb-8 leading-relaxed">
                Leading importer of premium wine bottles for the Australian wine industry. 
                We specialize in sourcing exquisite, high-quality bottles globally while 
                offering seamless supply chain solutions for wineries and related businesses.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  Our Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Visit Showroom
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
                  src="/images/services/premium bottle.jpg"
                  alt="Premium Wine Bottles"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-slate-600">
                      To enhance your product&apos;s appeal and optimize production costs 
                      through premium glass solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-8">
                Australian Wine Industry
                <span className="block font-bold text-green-600">Excellence</span>
              </h2>
              
              <div className="space-y-6 text-lg font-sans text-slate-600 leading-relaxed">
                <p>
                  Cape Glass Australia emerged from a clear vision: to provide Australian 
                  wine producers with unparalleled access to premium glass bottles while 
                  solving the industry&apos;s most pressing supply chain challenges.
                </p>
                
                <p>
                  Based in Adelaide, the heart of Australia&apos;s wine country, we understand 
                  the unique needs of local wine producers. From boutique family wineries 
                  to large-scale commercial operations, we deliver tailored solutions that 
                  enhance product appeal while optimizing costs.
                </p>
                
                <p>
                  Our strategic approach combines global sourcing expertise with local 
                  market knowledge, ensuring every client receives the perfect bottles 
                  for their wine&apos;s character and market positioning.
                </p>
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
                  src="/images/services/bottlesupply.jpg"
                  alt="Wine Bottle Collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl max-w-sm"
                >
                  <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">Adelaide Advantage</h4>
                  <p className="font-sans text-slate-600 text-sm">
                    Strategic location in Australia&apos;s wine capital provides unmatched 
                    industry insight and rapid response capabilities.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Our <span className="font-bold text-green-600">Values</span>
            </h2>
            <p className="text-xl font-sans text-slate-600 max-w-3xl mx-auto">
              Six core values drive everything we do at Cape Glass, ensuring exceptional 
              service and results for every client, every project, every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.value}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Partnership */}
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
              Manufacturing <span className="font-bold text-green-600">Partnership</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our exclusive partnership with a state-of-the-art facility in Jiangsu, China 
              ensures consistent quality, innovative capabilities, and sustainable production.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/furnace.jpg"
                  alt="Glass Manufacturing Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-1">Advanced Manufacturing</h4>
                    <p className="text-slate-600 text-sm">
                      Robotic precision and electric furnace technology for consistent quality
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Jiangsu Facility Excellence</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Facility Scale</h4>
                  <p className="text-slate-600">
                    Approximately 20,000 square meters of advanced manufacturing space 
                    with 30,000 tons annual production capacity.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Specialization</h4>
                  <p className="text-slate-600">
                    Small-batch production expertise with diverse specifications, 
                    solving common industry challenges of large minimums and limited types.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Sustainability</h4>
                  <p className="text-slate-600">
                    Low-carbon electric power for glass melting significantly reduces 
                    environmental impact compared to traditional furnaces.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">R&D Center</h4>
                  <p className="text-slate-600">
                    Leading research and development focused on bottle design, aesthetics, 
                    and material innovation with major international clients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Manufacturing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 bg-slate-900 rounded-2xl p-8 text-white"
          >
            {manufacturingStats.map((item, index) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold mb-1">{item.unit}</div>
                <div className="text-gray-300 text-sm">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deep Processing Capabilities */}
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
                Deep-Processing
                <span className="block font-bold text-green-600">Capabilities</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our manufacturing partner offers integrated services from design and R&D 
                through final production, ensuring seamless quality control and innovative solutions.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">🎨</div>
                  <h4 className="font-bold text-slate-900 mb-2">Design & R&D</h4>
                  <p className="text-slate-600 text-sm">Custom bottle design and material innovation</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">🏷️</div>
                  <h4 className="font-bold text-slate-900 mb-2">Decal Application</h4>
                  <p className="text-slate-600 text-sm">Professional decal application services</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">🖨️</div>
                  <h4 className="font-bold text-slate-900 mb-2">Screen Printing</h4>
                  <p className="text-slate-600 text-sm">High-quality glass screen printing</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">🔥</div>
                  <h4 className="font-bold text-slate-900 mb-2">Heat Transfer</h4>
                  <p className="text-slate-600 text-sm">Advanced heat transfer applications</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">✨</div>
                  <h4 className="font-bold text-slate-900 mb-2">Polishing</h4>
                  <p className="text-slate-600 text-sm">Premium surface finishing techniques</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl mb-3">🎯</div>
                  <h4 className="font-bold text-slate-900 mb-2">Spraying</h4>
                  <p className="text-slate-600 text-sm">Specialized glass coating applications</p>
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
              <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/services/artofprecision.jpg"
                  alt="Precision Glass Processing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">Integration Excellence</h4>
                    <p className="text-slate-600 mb-4">
                      Seamless integration from concept through production ensures 
                      consistent quality and innovative results.
                    </p>
                    <div className="flex items-center text-sm text-green-600 font-semibold">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      ISO Certified Processes
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Our <span className="font-bold text-green-600">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From startup to industry leader, Cape Glass has consistently evolved 
              to meet the changing needs of Australia&apos;s wine industry.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    <div className="hidden md:block absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                    <div className="md:ml-16 bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mr-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{milestone.event}</h3>
                      </div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
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
                Adelaide
                <span className="block font-bold text-green-400">Headquarters</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-green-400 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Strategic Location</h4>
                    <p className="leading-relaxed">
                      Located at 22 Priority Court, Edinburgh North, SA 5113, our Adelaide facility 
                      provides strategic warehousing and showroom services in the heart of 
                      Australia&apos;s wine country.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-green-400 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c0-1.1-.9-2-2-2H7V5h12v12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Showroom Experience</h4>
                    <p className="leading-relaxed">
                      Visit our Adelaide showroom to experience our complete range of bottles 
                      and decorative services. See and feel the quality that sets Cape Glass apart.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-green-400 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Get In Touch</h4>
                    <p className="leading-relaxed">
                      Phone: 0434 719 886<br />
                      Email: info@capeglass.com.au<br />
                      Web: www.capeglass.com.au
                    </p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-6">Ready to Partner With Us?</h3>
              <p className="text-green-100 mb-8">
                Join hundreds of Australian wineries who trust Cape Glass for their 
                premium bottle needs. Experience our 48-hour response guarantee and 
                unmatched service quality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  48-hour response guarantee
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Competitive pricing guaranteed
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Local Adelaide showroom access
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-200 mr-3">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  Sustainable supply chain solutions
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white text-green-600 hover:bg-green-50"
                >
                  Schedule Showroom Visit
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-green-600"
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}