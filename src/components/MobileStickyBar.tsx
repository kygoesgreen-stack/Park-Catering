'use client'

import Link from 'next/link'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden border-t border-charcoal-700 bg-charcoal-900">
      <div className="flex">
        <a
          href="tel:+14067581234"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-ember-500 text-cream-50 font-sans font-medium text-sm min-h-[44px]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call (406) 758-1234
        </a>
        <Link
          href="/contact/"
          className="flex-1 flex items-center justify-center py-4 bg-forest-700 text-cream-50 font-sans font-medium text-sm min-h-[44px]"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
}
