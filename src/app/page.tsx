import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { Services } from '@/components/Services'
import { Story } from '@/components/Story'
import { Menu } from '@/components/Menu'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { CtaBlock } from '@/components/CtaBlock'
import type { Metadata } from 'next'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'Catering in Kalispell, MT | Park Catering',
  description: 'Full-service catering in Kalispell, MT for weddings, corporate events, and private gatherings. Family-owned since 2004. Call (406) 758-1234 for a free consultation.',
  alternates: { canonical: new URL('/', site.url) },
  openGraph: {
    title: 'Catering in Kalispell, MT | Park Catering',
    description: 'Full-service catering in Kalispell, MT for weddings, corporate events, and private gatherings.',
    url: `${site.url}/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Park Catering - Catering in Kalispell, MT' }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Story />
      <Menu />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <CtaBlock
        heading="Ready to Talk About Your Event?"
        subheading="Whether you are planning a wedding, corporate retreat, or private gathering, we are here to help."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact/' }}
        secondaryCta={{ label: 'Call (406) 758-1234', href: 'tel:+14067581234' }}
      />
    </>
  )
}
