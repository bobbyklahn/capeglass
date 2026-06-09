import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const explore = [
  { name: 'Bottles', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Wine labels', href: '/label-printing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/images/logos/whitelogo.png"
              alt="Cape Glass"
              width={180}
              height={52}
              className="h-12 w-auto mb-6"
            />
            <p className="max-w-sm text-white/65 leading-relaxed">
              The Australian arm of our own glassworks. Custom and stock wine bottles,
              decoration and labels, warehoused in Adelaide.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-mono uppercase tracking-[0.16em] text-white/45 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-green-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-mono uppercase tracking-[0.16em] text-white/45 mb-5">
              Get in touch
            </h4>
            <div className="space-y-3">
              <a href="mailto:jose.zzh@outlook.com.au" className="flex items-center gap-3 text-white/80 hover:text-green-200 transition-colors">
                <Mail size={18} strokeWidth={1.75} className="text-green-300 shrink-0" />
                jose.zzh@outlook.com.au
              </a>
              <a href="tel:0434719886" className="flex items-center gap-3 text-white/80 hover:text-green-200 transition-colors">
                <Phone size={18} strokeWidth={1.75} className="text-green-300 shrink-0" />
                0434 719 886
              </a>
              <p className="text-white/55 text-sm pt-1">
                22 Priority Court, Edinburgh North SA 5113
              </p>
            </div>
            <Link href="/contact" className="inline-block mt-6">
              <Button variant="primary" size="sm">Request a quote</Button>
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/45">
          <p>© 2026 Cape Glass. All rights reserved.</p>
          <p>Adelaide, South Australia</p>
        </div>
      </div>
    </footer>
  )
}
