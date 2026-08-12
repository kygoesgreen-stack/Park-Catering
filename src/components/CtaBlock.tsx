'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations'

interface CtaBlockProps {
  heading: string
  subheading: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CtaBlock({ heading, subheading, primaryCta, secondaryCta }: CtaBlockProps) {
  return (
    <section className="section-padding bg-forest-900">
      <div className="section-container text-center">
        <FadeIn>
          <h2 className="headline-md text-cream-50 mb-4">{heading}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="body-lg text-cream-200/70 max-w-2xl mx-auto mb-10">{subheading}</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
