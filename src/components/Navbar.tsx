'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '@/config/content'
import clsx from 'clsx'

function NavDropdown({ label, href, children }: { label: string; href: string; children: readonly { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <Link
        href={href}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm text-cream-100/80 hover:text-cream-50 font-sans font-medium tracking-wide transition-colors duration-200"
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={openMenu}
      >
        {label}
        <svg className={clsx('w-3 h-3 transition-transform duration-200', open && 'rotate-180')} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 5l3 3 3-3" />
        </svg>
      </Link>
      <div className={clsx('absolute left-0 top-full pt-2', open ? 'block' : 'hidden')}>
        <ul className="min-w-56 rounded-xl border border-charcoal-700 p-2 shadow-lg bg-forest-900/95 backdrop-blur-sm">
          {children.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-cream-100/80 hover:text-cream-50 hover:bg-charcoal-800/50 font-sans transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function NavMobileAccordion({ label, href, children, onClose }: { label: string; href: string; children: readonly { label: string; href: string }[]; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className="text-cream-100 font-sans font-medium text-lg py-2"
          onClick={onClose}
        >
          {label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 text-cream-100/60"
          aria-expanded={expanded}
          aria-label={`Toggle ${label} submenu`}
        >
          <svg className={clsx('w-4 h-4 transition-transform duration-200', expanded && 'rotate-180')} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M3 5l3 3 3-3" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-2">
              {children.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-cream-100/70 font-sans text-base py-1 hover:text-cream-50 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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
          aria-label="Park Catering, home"
        >
          Park Catering
        </Link>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {nav.items.map((item) => (
            <li key={item.href}>
              {'children' in item && item.children ? (
                <NavDropdown label={item.label} href={item.href} children={item.children} />
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-cream-100/80 hover:text-cream-50 font-sans font-medium tracking-wide transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14065550100"
            className="px-4 py-2 text-sm text-cream-100/80 hover:text-cream-50 font-sans font-medium tracking-wide border border-cream-100/20 hover:border-cream-100/40 transition-colors duration-200"
          >
            (406) 555-0100
          </a>
          <Link
            href={nav.cta.href}
            className="inline-flex items-center px-6 py-3 bg-ember-500 text-cream-50 text-sm font-sans font-medium tracking-wide hover:bg-ember-600 transition-colors duration-300"
          >
            {nav.cta.label}
          </Link>
        </div>

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
            <div className="section-container py-8 flex flex-col gap-4">
              {nav.items.map((item) => (
                'children' in item && item.children ? (
                  <NavMobileAccordion
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    children={item.children}
                    onClose={() => setMobileOpen(false)}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-cream-100 font-sans font-medium text-lg py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
            href="tel:+14065550100"
                className="text-cream-100 font-sans font-medium text-lg py-2"
                onClick={() => setMobileOpen(false)}
              >
          (406) 555-0100
              </a>
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
