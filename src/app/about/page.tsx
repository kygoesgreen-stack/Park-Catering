import Image from 'next/image'
import type { Metadata } from 'next'
import { story } from '@/config/content'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FadeIn } from '@/components/animations'

export const metadata: Metadata = {
  title: 'About Park Catering | Family-Owned Catering in Kalispell, MT',
  description: 'Learn about Park Catering, a family-owned catering company in Kalispell, MT serving weddings, corporate events, and wildfire crews since 2004.',
  alternates: { canonical: new URL('/about/', site.url) },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/about/` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'About' }]} />
      <main className="section-padding">
        <div className="section-container max-w-4xl">
          <FadeIn><p className="eyebrow text-ember-500 mb-5">{story.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h1 className="headline-lg text-charcoal-800 mb-12">{story.headline}</h1></FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              {story.paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <p className="text-charcoal-700 font-sans leading-relaxed mb-6">{p}</p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="relative aspect-[4/5]">
                <Image src={`/images/${story.imageFilename}`} alt={story.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <blockquote className="border-l-4 border-ember-500 pl-6 py-4">
              <p className="pull-quote mb-3">&ldquo;{story.pullQuote.text}&rdquo;</p>
              <cite className="text-sm font-sans text-charcoal-600 not-italic">{story.pullQuote.attribution}</cite>
            </blockquote>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
