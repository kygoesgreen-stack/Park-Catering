'use client'

import Link from 'next/link'
import { footer } from '@/config/content'
import { site } from '@/config/site'
import { FadeIn } from '@/components/animations'

export function Footer() {
  return (
    <footer className="bg-charcoal-900 py-16" role="contentinfo">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FadeIn>
            <div>
              <p className="font-serif text-2xl text-cream-50 mb-3">Park Catering</p>
              <p className="text-sm text-cream-200/40 font-sans mb-4">{footer.tagline}</p>
              <div className="space-y-2 text-sm font-sans">
                <a href={`tel:${site.phone}`} className="block text-cream-200/50 hover:text-cream-50 transition-colors">
                  {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="block text-cream-200/50 hover:text-cream-50 transition-colors">
                  {site.email}
                </a>
                <p className="text-cream-200/40">{site.serviceArea}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <p className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-ember-500 mb-4">Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/wedding-catering/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Wedding Catering</Link></li>
                <li><Link href="/services/corporate-event-catering/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Corporate Event Catering</Link></li>
                <li><Link href="/services/wildfire-crew-catering/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Wildfire Crew Catering</Link></li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <p className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-ember-500 mb-4">Service Areas</p>
              <ul className="space-y-2">
                <li><Link href="/service-areas/kalispell-mt/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Kalispell, MT</Link></li>
                <li><Link href="/service-areas/whitefish-mt/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Whitefish, MT</Link></li>
                <li><Link href="/service-areas/bigfork-mt/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Bigfork, MT</Link></li>
                <li><Link href="/service-areas/columbia-falls-mt/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Columbia Falls, MT</Link></li>
                <li><Link href="/service-areas/lakeside-mt/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Lakeside, MT</Link></li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <p className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-ember-500 mb-4">Company</p>
              <ul className="space-y-2">
                <li><Link href="/about/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">About</Link></li>
                <li><Link href="/menu/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Menu</Link></li>
                <li><Link href="/gallery/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Gallery</Link></li>
                <li><Link href="/contact/" className="text-sm text-cream-200/50 hover:text-cream-50 font-sans transition-colors">Contact</Link></li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="border-t border-charcoal-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream-200/30 font-sans">{footer.copyright}</p>
            <div className="flex gap-4">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-cream-200/30 hover:text-ember-500 transition-colors" aria-label="Park Catering on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-cream-200/30 hover:text-ember-500 transition-colors" aria-label="Park Catering on Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
