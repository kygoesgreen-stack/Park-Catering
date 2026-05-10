'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { gallery } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-cream-50" aria-label="Photo gallery">
      <div className="section-container mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <p className="eyebrow mb-5">{gallery.eyebrow}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="headline-md text-forest-900">{gallery.headline}</h2>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-12">
          {gallery.images.map((img, i) => (
            <FadeIn key={img.filename} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden bg-cream-200 rounded-lg"
              >
                <Image
                  src={`/images/${img.filename}`}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}