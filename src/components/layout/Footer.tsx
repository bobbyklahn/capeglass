import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-charcoal-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/CAPELOGO/finalcapelogo@300x.png"
              alt="Cape Glass Logo"
              width={180}
              height={60}
              className="h-15 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Premium wine bottles from China to Australia. Direct sourcing, competitive pricing, reliable delivery.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-cape-green rounded-full flex items-center justify-center hover:bg-deep-forest transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-cape-green rounded-full flex items-center justify-center hover:bg-deep-forest transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-cape-green rounded-full flex items-center justify-center hover:bg-deep-forest transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-cape-green font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/bottles" className="text-gray-300 hover:text-white transition-colors">
                  Our Bottles
                </Link>
              </li>
              <li>
                <Link href="/services/frosting" className="text-gray-300 hover:text-white transition-colors">
                  Custom Frosting
                </Link>
              </li>
              <li>
                <Link href="/services/screen-printing" className="text-gray-300 hover:text-white transition-colors">
                  Screen Printing
                </Link>
              </li>
              <li>
                <Link href="/services/embossing" className="text-gray-300 hover:text-white transition-colors">
                  Embossing
                </Link>
              </li>
              <li>
                <Link href="/services/thermal-transfer" className="text-gray-300 hover:text-white transition-colors">
                  Thermal Transfer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cape-green font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-gray-300 hover:text-white transition-colors">
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cape-green font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-cape-green" />
                <span className="text-gray-300">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-cape-green" />
                <span className="text-gray-300">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-cape-green" />
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-medium-grey mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Cape Glass. All rights reserved. |{' '}
            <Link href="/privacy" className="text-cape-green hover:text-white transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="text-cape-green hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}