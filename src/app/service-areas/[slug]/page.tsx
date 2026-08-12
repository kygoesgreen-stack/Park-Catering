import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { serviceAreas, getCityBySlug } from '@/config/service-areas'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBlock } from '@/components/CtaBlock'
import { FadeIn } from '@/components/animations'

export function generateStaticParams() {
  return serviceAreas.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: new URL(`/service-areas/${slug}/`, site.url) },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${site.url}/service-areas/${slug}/`,
      images: [{ url: `/images/${city.image}`, width: 800, height: 600, alt: city.imageAlt }],
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const breadcrumbs = [
    { label: 'Service Areas', href: '/service-areas/' },
    { label: `${city.city}, ${city.state}` },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${site.url}/service-areas/` },
        { '@type': 'ListItem', position: 3, name: `${city.city}, ${city.state}` },
      ],
    },
    ...(city.faq.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: city.faq.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={breadcrumbs} />
      <main>
        <section className="relative h-[50vh] min-h-[400px]">
          <Image src={`/images/${city.image}`} alt={city.imageAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-charcoal-900/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="section-container pb-16">
              <h1 className="headline-lg text-cream-50">{city.h1}</h1>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container max-w-4xl">
            <FadeIn><p className="body-lg text-charcoal-700 mb-8">{city.intro}</p></FadeIn>
            {city.body.map((para, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-charcoal-700 font-sans mb-6 leading-relaxed">{para}</p>
              </FadeIn>
            ))}

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mt-12 mb-6">Local Areas We Serve</h2>
              <ul className="flex flex-wrap gap-3 mb-12">
                {city.localAnchors.map((anchor) => (
                  <li key={anchor} className="px-4 py-2 bg-cream-100 rounded-full text-sm font-sans text-charcoal-700">{anchor}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mb-6">Our Catering Services</h2>
              <ul className="space-y-3 mb-12">
                {city.internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-forest-700 hover:text-ember-500 font-sans font-medium transition-colors">
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {city.faq.length > 0 && (
              <FadeIn>
                <h2 className="headline-sm text-charcoal-800 mb-6">Frequently Asked Questions</h2>
                <dl className="space-y-6">
                  {city.faq.map((f) => (
                    <div key={f.question}>
                      <dt className="font-sans font-semibold text-charcoal-800 mb-2">{f.question}</dt>
                      <dd className="text-charcoal-700 font-sans pl-4 border-l-2 border-cream-200">{f.answer}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            )}
          </div>
        </section>

        <CtaBlock
          heading={`Catering in ${city.city}, ${city.state}`}
          subheading="Ready to plan your event? Tell us what you need and we will make it happen."
          primaryCta={{ label: 'Get a Free Quote', href: '/contact/' }}
          secondaryCta={{ label: 'Call (406) 555-0100', href: 'tel:+14065550100' }}
        />
      </main>
    </>
  )
}
