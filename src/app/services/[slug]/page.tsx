import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services, getServiceBySlug } from '@/config/services'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBlock } from '@/components/CtaBlock'
import { FadeIn } from '@/components/animations'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: new URL(`/services/${slug}/`, site.url) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${slug}/`,
      images: [{ url: `/images/${service.image}`, width: 800, height: 600, alt: service.imageAlt }],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const breadcrumbs = [
    { label: 'Services', href: '/services/' },
    { label: service.title },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.title,
      provider: { '@id': `${site.url}/#business` },
      description: service.intro,
      areaServed: [
        { '@type': 'City', name: 'Kalispell' },
        { '@type': 'City', name: 'Whitefish' },
        { '@type': 'City', name: 'Bigfork' },
        { '@type': 'City', name: 'Lakeside' },
        { '@type': 'City', name: 'Columbia Falls' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services/` },
        { '@type': 'ListItem', position: 3, name: service.title },
      ],
    },
    ...(service.faq.length > 0 ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faq.map(f => ({
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
          <Image src={`/images/${service.image}`} alt={service.imageAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-charcoal-900/60" />
          <div className="absolute inset-0 flex items-end">
            <div className="section-container pb-16">
              <h1 className="headline-lg text-cream-50">{service.h1}</h1>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container max-w-4xl">
            <FadeIn><p className="body-lg text-charcoal-700 mb-12">{service.intro}</p></FadeIn>

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mb-6">What is Included</h2>
              <ul className="space-y-3 mb-12">
                {service.whatIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal-700 font-sans">
                    <span className="text-ember-500 mt-1">&#10003;</span>{item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mb-6">Our Process</h2>
              <ol className="space-y-8 mb-12">
                {service.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-forest-900 text-cream-50 font-serif font-light flex items-center justify-center">{i + 1}</span>
                    <div>
                      <h3 className="font-sans font-semibold text-charcoal-800 mb-1">{step.step}</h3>
                      <p className="text-charcoal-700 font-sans">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mb-6">Why Choose Park Catering</h2>
              <p className="body-lg text-charcoal-700 mb-8">{service.whyChooseUs}</p>
            </FadeIn>

            <FadeIn>
              <blockquote className="border-l-4 border-ember-500 pl-6 py-4 mb-12">
                <p className="pull-quote mb-3">&ldquo;{service.testimonial.quote}&rdquo;</p>
                <cite className="text-sm font-sans text-charcoal-600 not-italic">{service.testimonial.attribution}, {service.testimonial.role}</cite>
              </blockquote>
            </FadeIn>

            <FadeIn>
              <h2 className="headline-sm text-charcoal-800 mb-6">Pricing</h2>
              <p className="text-charcoal-700 font-sans mb-12">{service.pricing}</p>
            </FadeIn>

            {service.faq.length > 0 && (
              <FadeIn>
                <h2 className="headline-sm text-charcoal-800 mb-6">Frequently Asked Questions</h2>
                <dl className="space-y-6 mb-12">
                  {service.faq.map((f) => (
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
          heading={`Ready to Book ${service.title}?`}
          subheading="Tell us about your event and we will build a menu that fits."
          primaryCta={{ label: 'Get a Free Quote', href: '/contact/' }}
          secondaryCta={{ label: 'Call (406) 758-1234', href: 'tel:+14067581234' }}
        />
      </main>
    </>
  )
}
