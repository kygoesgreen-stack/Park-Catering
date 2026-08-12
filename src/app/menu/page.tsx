import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { menu } from '@/config/content'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBlock } from '@/components/CtaBlock'
import { FadeIn } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Catering Menus in the Flathead Valley | Park Catering',
  description: 'Explore our catering menus: BBQ and smoked, plated dinners, buffet, and hors d\'oeuvres. Custom menus for every event.',
  alternates: { canonical: new URL('/menu/', site.url) },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: `${site.url}/menu/` },
  ],
}

export default function MenuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Menu' }]} />
      <main className="section-padding">
        <div className="section-container">
          <FadeIn><p className="eyebrow text-ember-500 mb-5">{menu.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="headline-lg text-charcoal-800 mb-6">Catering Menus in the Flathead Valley</h1></FadeIn>
          <FadeIn delay={0.2}><p className="body-lg text-charcoal-700 max-w-3xl mb-16">{menu.intro}</p></FadeIn>

          <div className="space-y-20">
            {menu.categories.map((cat, i) => (
              <FadeIn key={cat.name} delay={0.1 * i}>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="headline-sm text-charcoal-800 mb-4">{cat.name}</h2>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-charcoal-700 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative aspect-[4/3] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image src={`/images/${cat.imageFilename}`} alt={cat.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
      <CtaBlock
        heading="Ready to Build Your Menu?"
        subheading="Tell us about your event and we will create a custom menu that fits your taste and budget."
        primaryCta={{ label: 'Request Full Menu', href: '/contact/' }}
        secondaryCta={{ label: 'Call (406) 555-0100', href: 'tel:+14065550100' }}
      />
    </>
  )
}
