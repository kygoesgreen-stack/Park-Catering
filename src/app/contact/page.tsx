import type { Metadata } from 'next'
import { site } from '@/config/site'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Park Catering | Get a Free Quote',
  description: 'Contact Park Catering in Kalispell, MT for a free catering quote. Weddings, corporate events, and private gatherings.',
  alternates: { canonical: new URL('/contact/', site.url) },
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <main>
        <Contact />
      </main>
    </>
  )
}
