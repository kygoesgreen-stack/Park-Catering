'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Services() {
  return (
    <section id="services" className="section-padding bg-cream-50" aria-label="Services">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <p className="eyebrow mb-5">{services.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="headline-md text-forest-900 mb-6">{services.headline}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-charcoal-600">{services.intro}</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden bg-charcoal-800"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`/images/${card.imageFilename}`}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" aria-hidden="true" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-cream-50">
                  <h3 className="font-serif font-light text-2xl mb-3">{card.title}</h3>
                  <p className="body-lg text-cream-200/75 text-base leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <Link
                    href={card.cta.href}
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-ember-500 hover:text-ember-400 transition-colors duration-200 tracking-wide"
                  >
                    {card.cta.label}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}