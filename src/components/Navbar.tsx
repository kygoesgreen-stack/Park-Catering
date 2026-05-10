'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '@/config/content'
import clsx from 'clsx'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-forest-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav
        className="section-container flex items-center justify-between h-20 lg:h-24"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-2xl text-cream-50 tracking-wide hover:text-ember-500 transition-colors duration-300"
          aria-label="Park Catering — home"
        >
          Park Catering
        </Link>

        <ul className="hidden lg:flex items-center gap-10" role="list">
          {nav.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-cream-100/80 hover:text-cream-50 font-sans font-medium tracking-wide transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={nav.cta.href}
          className="hidden lg:inline-flex items-center px-6 py-3 bg-ember-500 text-cream-50 text-sm font-sans font-medium tracking-wide hover:bg-ember-600 transition-colors duration-300"
        >
          {nav.cta.label}
        </Link>

        <button
          className="lg:hidden text-cream-50 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-forest-900/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="section-container py-8 flex flex-col gap-6">
              {nav.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-cream-100 font-sans font-medium text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={nav.cta.href}
                className="btn-primary text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                {nav.cta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}