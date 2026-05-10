'use client'

import Link from 'next/link'
import { footer, site } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Footer() {
  return (
    <footer className="bg-charcoal-900 py-16" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <FadeIn>
            <div>
              <p className="font-serif text-2xl text-cream-50 mb-3">Park Catering</p>
              <p className="text-sm text-cream-200/40 font-sans">{footer.tagline}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-2" role="list">
                {footer.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200/40 hover:text-ember-500 transition-colors duration-200"
                  aria-label="Park Catering on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200/40 hover:text-ember-500 transition-colors duration-200"
                  aria-label="Park Catering on Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${site.phone.replace(/\D/g, '')}`}
                  className="text-sm text-cream-200/40 hover:text-cream-50 font-sans transition-colors duration-200"
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-cream-200/40 hover:text-cream-50 font-sans transition-colors duration-200"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="border-t border-charcoal-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream-200/30 font-sans">{footer.copyright}</p>
            <p className="text-sm text-cream-200/30 font-sans">{site.serviceArea}</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}