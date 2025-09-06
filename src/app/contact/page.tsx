'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const contactMethods = [
  {
    method: 'Phone',
    value: '0434 719 886',
    description: '48-hour response guarantee',
    icon: '📞',
    link: 'tel:0434719886'
  },
  {
    method: 'Email',
    value: 'info@capeglass.com.au',
    description: 'Detailed inquiries & quotes',
    icon: '📧',
    link: 'mailto:info@capeglass.com.au'
  },
  {
    method: 'Website',
    value: 'www.capeglass.com.au',
    description: 'Online resources & catalog',
    icon: '🌐',
    link: 'https://www.capeglass.com.au'
  },
  {
    method: 'Address',
    value: '22 Priority Court, Edinburgh North, SA 5113',
    description: 'Adelaide showroom & warehouse',
    icon: '📍',
    link: 'https://maps.google.com/?q=22+Priority+Court+Edinburgh+North+SA+5113'
  }
]

const serviceInquiries = [
  {
    service: 'Standard Wine Bottles',
    description: 'Regular orders for 750ml, 1500ml bottles',
    minOrder: '500 units',
    leadTime: '2-3 weeks',
    icon: '🍷'
  },
  {
    service: 'Custom Bottle Design',
    description: 'Bespoke bottle shapes and sizes',
    minOrder: '500 units',
    leadTime: '12-14 weeks',
    icon: '🎨'
  },
  {
    service: 'Decorative Services',
    description: 'Screen printing, embossing, decals',
    minOrder: '500 units',
    leadTime: '2-4 weeks',
    icon: '✨'
  },
  {
    service: 'Large Format Bottles',
    description: '3L to 30L celebration bottles',
    minOrder: '50 units',
    leadTime: '6-8 weeks',
    icon: '🍾'
  },
  {
    service: 'Supply Chain Solutions',
    description: 'Inventory management & logistics',
    minOrder: 'Flexible',
    leadTime: '48 hours',
    icon: '🚚'
  },
  {
    service: 'Sample Requests',
    description: 'Product samples for evaluation',
    minOrder: '1-10 samples',
    leadTime: '3-5 days',
    icon: '📦'
  }
]

const faqs = [
  {
    question: 'What is your minimum order quantity?',
    answer: 'Our standard minimum is 500 units for most bottles and services. For large format bottles (3L+), the minimum is 50 units. Sample orders can be as low as 1-10 pieces.'
  },
  {
    question: 'How quickly can you respond to inquiries?',
    answer: 'We guarantee a 48-hour response time for all inquiries. For urgent requests, call us directly at 0434 719 886 for immediate assistance.'
  },
  {
    question: 'Do you offer custom bottle design?',
    answer: 'Yes! We specialize in custom bottle design from 500 to 100,000 units. Our design process takes 12-14 weeks from concept to delivery, including mold development.'
  },
  {
    question: 'What decorative services do you provide?',
    answer: 'We offer screen printing, embossing & debossing, decal application, and custom glass bottles. All services include design consultation and quality guarantee.'
  },
  {
    question: 'Can I visit your Adelaide showroom?',
    answer: 'Absolutely! Our showroom at 22 Priority Court, Edinburgh North showcases our complete range. Please call ahead to schedule a visit with our team.'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms based on order size and relationship. Standard terms are 30% deposit, 70% on delivery. Contact us to discuss terms for your specific needs.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    winery: '',
    serviceType: '',
    quantity: '',
    timeline: '',
    message: ''
  })

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will respond within 48 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            <h1 className="text-5xl lg:text-7xl font-serif font-light text-white mb-8">
              Contact
              <span className="block font-bold text-green-400">Cape Glass</span>
            </h1>
            <p className="text-xl lg:text-2xl font-sans text-gray-300 mb-12 leading-relaxed">
              Ready to enhance your wine brand with premium bottles? Our Adelaide team 
              provides swift 48-hour response times and competitive pricing for 
              Australia&apos;s wine industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Get Instant Quote
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

      {/* Contact Methods */}
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
              Get In <span className="font-bold text-green-600">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our Adelaide team. Choose the method 
              that works best for your needs and timeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((contact, index) => (
              <motion.a
                key={contact.method}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{contact.method}</h3>
                <p className="text-lg font-semibold text-green-600 mb-2">{contact.value}</p>
                <p className="text-slate-600 text-sm">{contact.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <p className="text-slate-600 mb-8">
                Tell us about your wine bottle needs. Our team will respond within 48 hours 
                with personalized recommendations and competitive pricing.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="john@winery.com.au"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="0412 345 678"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company/Winery Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Premium Wines Estate"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="standard-bottles">Standard Wine Bottles</option>
                    <option value="custom-design">Custom Bottle Design</option>
                    <option value="screen-printing">Screen Printing</option>
                    <option value="embossing">Embossing & Debossing</option>
                    <option value="decals">Decal Application</option>
                    <option value="large-format">Large Format Bottles</option>
                    <option value="supply-chain">Supply Chain Solutions</option>
                    <option value="samples">Sample Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-slate-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="e.g., 5,000 bottles"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-2">
                      Required Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="standard">Standard (3-6 weeks)</option>
                      <option value="planning">Planning (2-3 months)</option>
                      <option value="future">Future project (3+ months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your wine bottle requirements, design preferences, special features needed, or any specific questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  Send Message (48hr Response)
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We guarantee a response within 48 hours.
                </p>
              </form>
            </motion.div>

            {/* Location & Business Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Adelaide Location */}
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Adelaide Location</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Address</h4>
                    <p className="text-gray-300">
                      22 Priority Court<br />
                      Edinburgh North, SA 5113<br />
                      Adelaide, Australia
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Facilities</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Strategic warehousing facility
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Full-range showroom
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Quality control center
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Meeting & consultation rooms
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Business Hours</h4>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>By appointment</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="secondary"
                  className="w-full mt-6 bg-green-600 hover:bg-green-700"
                >
                  Schedule Showroom Visit
                </Button>
              </div>

              {/* Service Inquiries Quick Reference */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Quick Reference</h3>
                <div className="space-y-4">
                  {serviceInquiries.slice(0, 4).map((service) => (
                    <div key={service.service} className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center mb-1">
                        <span className="text-lg mr-2">{service.icon}</span>
                        <h4 className="font-semibold text-slate-900">{service.service}</h4>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{service.description}</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Min: {service.minOrder}</span>
                        <span>Lead: {service.leadTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="font-bold text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions from Australian wine producers. 
              Don&apos;t see your question? Contact us directly.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <div className={`text-green-600 transform transition-transform duration-200 ${activeQuestion === index ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your
              <span className="block font-bold text-green-400">Wine Bottle Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our Adelaide team is ready to help you find the perfect bottles for your wine. 
              Contact us today and experience our 48-hour response guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Get Instant Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Schedule Showroom Visit
              </Button>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>Or call us directly: <a href="tel:0434719886" className="text-green-400 hover:text-green-300">0434 719 886</a></p>
              <p>Email: <a href="mailto:info@capeglass.com.au" className="text-green-400 hover:text-green-300">info@capeglass.com.au</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}