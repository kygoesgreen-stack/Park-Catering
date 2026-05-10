'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-cream-50" aria-label="Frequently asked questions">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="eyebrow mb-5">{faq.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="headline-md text-forest-900">{faq.headline}</h2>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border-b border-charcoal-600/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif text-lg text-charcoal-800 group-hover:text-ember-500 transition-colors duration-200">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 mt-1 text-ember-500"
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="body-lg text-charcoal-600 pb-6">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}