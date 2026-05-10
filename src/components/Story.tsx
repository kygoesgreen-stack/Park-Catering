'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { story } from '@/config/content'
import { FadeIn } from '@/components/animations'

export function Story() {
  return (
    <section id="story" className="section-padding bg-cream-100" aria-label="Our story">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right" className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={`/images/${story.imageFilename}`}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>

          <div className="flex flex-col gap-10">
            <div>
              <FadeIn>
                <p className="eyebrow mb-5">{story.eyebrow}</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="headline-md text-forest-900 mb-8">{story.headline}</h2>
              </FadeIn>
            </div>

            {story.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.08}>
                <p className="body-lg text-charcoal-700">{p}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.4}>
              <blockquote className="border-l-2 border-ember-500 pl-8 mt-4">
                <p className="pull-quote mb-4">{story.pullQuote.text}</p>
                <cite className="text-sm font-sans font-medium text-forest-700 not-italic">
                  {story.pullQuote.attribution}
                </cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}