'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Users, Globe, Award, Clock, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  {
    icon: '🌿',
    title: 'Eco-Friendly Frosting',
    description: 'Sustainable frosting techniques that create elegant finishes while protecting the environment',
    features: ['Chemical-free process', 'Recyclable materials', 'Zero waste production']
  },
  {
    icon: '🎨',
    title: 'Screen Printing',
    description: 'Multi-color precision printing for vibrant, lasting brand representation',
    features: ['Up to 8 colors', 'UV-resistant inks', 'Precise registration']
  },
  {
    icon: '⚡',
    title: 'Embossing',
    description: 'Premium raised and debossed designs that add luxury and tactile appeal',
    features: ['Deep embossing', 'Metallic finishes', 'Custom tooling']
  },
  {
    icon: '🔥',
    title: 'Thermal Transfer',
    description: 'Photo-quality reproduction with full-color capability and superior durability',
    features: ['Photographic quality', 'Gradient reproduction', 'Scratch resistant']
  }
];

const stats = [
  { number: '500+', label: 'Satisfied Clients' },
  { number: '15+', label: 'Years Experience' },
  { number: '99.9%', label: 'Quality Rate' },
  { number: '48hrs', label: 'Response Time' }
];

const values = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Expertise',
    description: 'Professional teams in both Australia and China ensuring seamless communication and quality control'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Quick Turnaround',
    description: 'Efficient processes and local relationships deliver faster results without compromising quality'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Premium Quality',
    description: 'Rigorous quality standards and direct manufacturer relationships ensure consistent excellence'
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Reliable Service',
    description: 'Prompt response times and dedicated support throughout your entire bottle sourcing journey'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bottles/aboutushero.png"
            alt="About Cape Glass Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              {...fadeInUp}
            >
              About <span className="text-cape-green">Cape Glass</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Premium wine bottle supplier connecting Australian wineries with world-class glass manufacturers
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Button variant="secondary" size="lg">
                Get Your Quote Today
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-cape-green/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-champagne-gold/20 rounded-full animate-bounce"></div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="relative">
                <Image
                  src="/images/CAPELOGO/finalcapelogo@300x.png"
                  alt="Cape Glass Office"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-large"
                />
                <div className="absolute -bottom-6 -right-6 bg-cape-green text-white p-6 rounded-xl shadow-lg">
                  <MapPin className="w-8 h-8 mb-2" />
                  <p className="font-semibold">Adelaide Based</p>
                  <p className="text-sm opacity-90">Serving Australia</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
                Connecting Wineries with <span className="text-cape-green">Premium Glass</span>
              </h2>
              <p className="text-lg text-medium-grey leading-relaxed">
                Cape Glass is an Adelaide-based company specializing in importing premium wine bottles 
                and distributing them throughout the Australian market. We bridge the gap between 
                Australian wineries and world-class glass manufacturers in China.
              </p>
              <p className="text-lg text-medium-grey leading-relaxed">
                Our mission is to service local wineries and wine bottlers with high-quality glass 
                solutions, backed by many success stories and satisfied customers across Australia.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4 bg-light-grey rounded-lg"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cape-green">{stat.number}</div>
                    <div className="text-sm text-medium-grey">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
              Our Premium <span className="text-cape-green">Services</span>
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto">
              We offer comprehensive bottle customization services to help your wine brand stand out 
              in the competitive Australian market.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 group hover:-translate-y-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-black mb-4">{service.title}</h3>
                <p className="text-medium-grey mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-medium-grey">
                      <CheckCircle className="w-4 h-4 text-cape-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-6">
              Why Choose <span className="text-cape-green">Cape Glass</span>
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto">
              Our professional teams in both Australia and China work together to provide the best 
              service for every aspect of your bottle needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-cape-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-cape-green group-hover:bg-cape-green group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-black mb-4">{value.title}</h3>
                <p className="text-medium-grey leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-r from-cape-green to-soft-sage">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center text-white"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Success Stories
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              We've helped hundreds of Australian wineries enhance their brand presence with 
              premium glass bottles and custom finishing services.
            </p>
            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-white/90">Satisfied Wineries</p>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-white/90">Years Experience</p>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">2</h3>
                <p className="text-white/90">Countries Connected</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Wine Brand?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact our professional team today for quick turnaround and prompt response 
              to all your premium bottle needs.
            </p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal-black">
                View Our Bottles
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}