'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/lib/constants';

export default function Services() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
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
            Custom Services
          </h2>
          <p className="text-xl text-medium-grey max-w-3xl mx-auto leading-relaxed">
            Professional customization options to make your wine bottles truly unique
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className="flex-1 relative">
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-large group-hover:shadow-green transition-all duration-500">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-secondary font-semibold text-charcoal-black mb-4 group-hover:text-cape-green transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-lg text-medium-grey leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="text-cape-green flex-shrink-0" size={20} />
                        <span className="text-charcoal-black">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={service.href}>
                      <Button variant="primary" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                      </Button>
                    </Link>
                    <Button variant="outline">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 p-12 bg-gradient-primary rounded-3xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-secondary font-semibold mb-4">
            Need Custom Packaging Solutions?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team can combine multiple services to create unique packaging that perfectly represents your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal-black">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}