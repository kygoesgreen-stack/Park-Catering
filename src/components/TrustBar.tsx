'use client'

import { FadeIn } from '@/components/animations'

const items = [
  'Since 2004',
  '20 to 400 Guests',
  'Full Service',
  'Free Consultation',
]

export function TrustBar() {
  return (
    <section className="bg-forest-800 py-6">
      <div className="section-container">
        <FadeIn>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2" role="list">
            {items.map((item) => (
              <li key={item} className="text-sm font-sans font-medium text-cream-100/80 tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
