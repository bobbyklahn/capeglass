'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { BOTTLE_MODELS } from '@/lib/constants';

export default function FeaturedProducts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 bg-white">
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
            Our Premium Bottle Collection
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto leading-relaxed">
            High-quality wine bottles directly sourced from premier Chinese manufacturers
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BOTTLE_MODELS.map((bottle) => (
            <motion.div
              key={bottle.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-warm-white rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-large hover:-translate-y-2 hover:bg-white">
                {/* Product Image */}
                <div className="mb-8 relative">
                  <div className="relative mx-auto w-48 h-64 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={bottle.image}
                      alt={bottle.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-secondary font-semibold text-charcoal-black">
                    {bottle.name}
                  </h3>
                  <p className="text-medium-grey">
                    {bottle.specs}
                  </p>
                  <div className="text-lg font-semibold text-charcoal-black">
                    Starting from{' '}
                    <span className="text-2xl text-cape-green font-bold">
                      {bottle.startingPrice}
                    </span>{' '}
                    per bottle
                  </div>
                  <p className="text-medium-grey text-sm leading-relaxed">
                    {bottle.description}
                  </p>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-cape-green group-hover:text-white group-hover:border-cape-green transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-medium-grey mb-8">
            Need help choosing the right bottle for your wine? Our experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Compare All Bottles
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}