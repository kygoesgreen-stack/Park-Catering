'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.items.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="section-padding bg-cream-100" aria-label="Client testimonials">
      <div className="section-container">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="eyebrow mb-5">{testimonials.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="headline-md text-forest-900">{testimonials.headline}</h2>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto text-center relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>
                <p
                  className="font-serif font-light leading-relaxed text-charcoal-800 mb-10"
                  style={{ fontSize: 'clamp(1.25rem, 2vw + 0.75rem, 1.875rem)' }}
                >
                  &ldquo;{testimonials.items[current].quote}&rdquo;
                </p>
                <footer className="flex flex-col items-center gap-1">
                  <span className="font-sans font-medium text-forest-900 text-lg">
                    {testimonials.items[current].attribution}
                  </span>
                  <span className="text-sm text-charcoal-600 font-sans">
                    {testimonials.items[current].role}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-12" role="tablist" aria-label="Testimonial navigation">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-400 rounded-full ${
                  i === current ? 'w-8 bg-ember-500' : 'w-1 bg-charcoal-600/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}