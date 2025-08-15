'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { NAVIGATION_ITEMS, CONTACT_INFO } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium'
          : 'bg-white shadow-soft'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/CAPELOGO/finalcapelogo@300x.png"
              alt="Cape Glass Logo"
              width={300}
              height={100}
              className="h-10 sm:h-12 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Compact Desktop Navigation for medium screens */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base">
              Home
            </Link>
            <Link href="/bottles" className="px-3 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base">
              Bottles
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-large border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/services/frosting" className="block px-4 py-3 text-base text-charcoal-black hover:text-cape-green hover:bg-light-grey transition-colors">
                  Custom Frosting
                </Link>
                <Link href="/services/screen-printing" className="block px-4 py-3 text-base text-charcoal-black hover:text-cape-green hover:bg-light-grey transition-colors">
                  Screen Printing
                </Link>
                <Link href="/services/embossing" className="block px-4 py-3 text-base text-charcoal-black hover:text-cape-green hover:bg-light-grey transition-colors">
                  Embossing
                </Link>
                <Link href="/services/thermal-transfer" className="block px-4 py-3 text-base text-charcoal-black hover:text-cape-green hover:bg-light-grey transition-colors">
                  Thermal Transfer
                </Link>
              </div>
            </div>
            <Link href="/about" className="px-3 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium text-base">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-charcoal-black hover:text-cape-green transition-colors rounded-lg hover:bg-light-grey"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2 border-t border-platinum mt-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/bottles"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium"
                >
                  Our Bottles
                </Link>
                
                <div className="space-y-1">
                  <div className="px-4 py-2 text-sm font-semibold text-medium-grey uppercase tracking-wide">
                    Services
                  </div>
                  <Link
                    href="/services/frosting"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300"
                  >
                    Custom Frosting
                  </Link>
                  <Link
                    href="/services/screen-printing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300"
                  >
                    Screen Printing
                  </Link>
                  <Link
                    href="/services/embossing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300"
                  >
                    Embossing
                  </Link>
                  <Link
                    href="/services/thermal-transfer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300"
                  >
                    Thermal Transfer
                  </Link>
                </div>
                
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-charcoal-black hover:text-cape-green hover:bg-light-grey rounded-lg transition-all duration-300 font-medium"
                >
                  Contact
                </Link>
                
                <div className="pt-4 space-y-4 border-t border-platinum mt-4">
                  <div className="flex items-center space-x-2 text-medium-grey px-4">
                    <Phone size={16} />
                    <span className="text-sm">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="px-4">
                    <Button variant="primary" className="w-full">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}