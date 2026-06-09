'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navigation = [
  { name: 'Bottles', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Labels', href: '/label-printing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed top-0 w-full bg-paper/85 backdrop-blur-md border-b border-line z-50">
      <nav className="mx-auto max-w-[1400px] px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="Cape Glass home">
          <Image
            src="/images/logos/logo.png"
            alt="Cape Glass"
            width={170}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative text-[15px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 rounded-sm py-1 ${
                isActive(item.href)
                  ? 'text-green-700'
                  : 'text-stone-700 hover:text-green-700'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-green-700" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Request a quote
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-800 p-3 -mr-3 min-h-11 min-w-11 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded-md"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-paper"
          >
            <div className="px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-base font-medium border-b border-line last:border-0 ${
                    isActive(item.href) ? 'text-green-700' : 'text-stone-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-4">
                <Button variant="primary" className="w-full">
                  Request a quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
