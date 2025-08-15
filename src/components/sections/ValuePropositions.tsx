'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { VALUE_PROPOSITIONS } from '@/lib/constants';

export default function ValuePropositions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <section className="py-20 bg-light-grey">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-secondary font-bold text-charcoal-black mb-6">
            Why Choose Cape Glass?
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto leading-relaxed">
            We deliver unmatched value through our expertise in China-Australia trade
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {VALUE_PROPOSITIONS.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden shadow-medium group-hover:shadow-green transition-all duration-300">
                  <Image
                    src={prop.icon}
                    alt={prop.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-charcoal-black mb-4 group-hover:text-cape-green transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-medium-grey leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '200+', label: 'Australian Wineries' },
            { number: '50M+', label: 'Bottles Delivered' },
            { number: '15+', label: 'Years Experience' },
            { number: '99.8%', label: 'Quality Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cape-green mb-2">
                {stat.number}
              </div>
              <div className="text-medium-grey font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}