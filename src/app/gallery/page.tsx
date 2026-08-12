import Image from 'next/image'
import type { Metadata } from 'next'
import { gallery } from '@/config/content'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FadeIn } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Our Catering Work in Northwest Montana | Park Catering',
  description: 'View our catering gallery: wedding receptions, corporate events, BBQ spreads, and more from across the Flathead Valley.',
  alternates: { canonical: new URL('/gallery/', site.url) },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${site.url}/gallery/` },
  ],
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Gallery' }]} />
      <main className="section-padding">
        <div className="section-container">
          <FadeIn><p className="eyebrow text-ember-500 mb-5">{gallery.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="headline-lg text-charcoal-800 mb-12">Our Catering Work in Northwest Montana</h1></FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.images.map((img, i) => (
              <FadeIn key={img.filename} delay={0.05 * i}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={`/images/${img.filename}`} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
