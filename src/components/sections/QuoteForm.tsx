'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BOTTLE_MODELS } from '@/lib/constants';
import { validateEmail } from '@/lib/utils';

interface FormData {
  bottleType: string;
  quantity: string;
  company: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    bottleType: '',
    quantity: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.bottleType) {
      newErrors.bottleType = 'Please select a bottle type';
    }

    if (!formData.quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (parseInt(formData.quantity) < 1000) {
      newErrors.quantity = 'Minimum quantity is 1,000 bottles';
    }

    if (!formData.company) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        bottleType: '',
        quantity: '',
        company: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const trustIndicators = [
    { icon: Shield, text: 'Quality Guaranteed' },
    { icon: Truck, text: 'Fast Delivery' },
    { icon: DollarSign, text: 'Best Prices' }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="mx-auto mb-6 text-cape-green" size={80} />
            <h2 className="text-4xl font-secondary font-bold mb-4">
              Thank You!
            </h2>
            <p className="text-xl mb-6">
              Your quote request has been submitted successfully. Our team will contact you within 24 hours with a detailed quote.
            </p>
            <p className="text-lg opacity-90">
              Quote ID: #CG{Date.now().toString().slice(-6)}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-secondary font-bold mb-6">
                Get Your Instant Quote
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 200+ Australian wineries who trust Cape Glass for their bottle needs
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-cape-green rounded-full flex items-center justify-center">
                    <indicator.icon size={24} />
                  </div>
                  <span className="text-lg font-medium">{indicator.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Why Choose Our Quote Service?</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Transparent pricing with no hidden fees</li>
                <li>• Bulk discounts available for large orders</li>
                <li>• Custom packaging options included</li>
                <li>• Free shipping quotes to major Australian cities</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-large"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Bottle Type */}
              <div>
                <label htmlFor="bottleType" className="block text-sm font-medium text-charcoal-black mb-2">
                  Bottle Type *
                </label>
                <select
                  id="bottleType"
                  name="bottleType"
                  value={formData.bottleType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cape-green transition-colors ${
                    errors.bottleType ? 'border-red-500' : 'border-platinum focus:border-cape-green'
                  }`}
                >
                  <option value="">Select bottle type</option>
                  {BOTTLE_MODELS.map((bottle) => (
                    <option key={bottle.id} value={bottle.id}>
                      {bottle.name} - {bottle.capacity}
                    </option>
                  ))}
                </select>
                {errors.bottleType && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.bottleType}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-charcoal-black mb-2">
                  Quantity *
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Minimum 1,000 bottles"
                  min="1000"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cape-green transition-colors ${
                    errors.quantity ? 'border-red-500' : 'border-platinum focus:border-cape-green'
                  }`}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.quantity}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal-black mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your winery name"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cape-green transition-colors ${
                    errors.company ? 'border-red-500' : 'border-platinum focus:border-cape-green'
                  }`}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cape-green transition-colors ${
                    errors.email ? 'border-red-500' : 'border-platinum focus:border-cape-green'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-black mb-2">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements or questions..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-cape-green focus:border-cape-green transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Instant Quote'}
              </Button>

              <p className="text-xs text-medium-grey text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}