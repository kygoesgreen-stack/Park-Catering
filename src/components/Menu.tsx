'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { menu } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Menu() {
  return (
    <section id="menu" className="section-padding bg-forest-900" aria-label="Menu snapshot">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <p className="eyebrow text-ember-500 mb-5">{menu.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="headline-md text-cream-50 mb-6">{menu.headline}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg text-cream-200/70">{menu.intro}</p>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menu.categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.08}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden mb-5">
                  <Image
                    src={`/images/${cat.imageFilename}`}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <h3 className="font-serif text-lg text-cream-50 mb-3">{cat.name}</h3>
                <ul className="space-y-1" role="list">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-cream-200/60 font-sans">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link href="#contact" className="btn-secondary">
              {menu.cta.label}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}