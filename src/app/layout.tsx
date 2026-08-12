import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { site } from '@/config/site'
import { seo } from '@/config/theme'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MobileStickyBar } from '@/components/MobileStickyBar'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [
    'catering Kalispell MT',
    'wedding catering Flathead Valley',
    'Montana catering company',
    'firefighter catering',
    'corporate catering Whitefish',
    'private event catering Glacier',
    'Park Catering',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seo.url,
    siteName: site.name,
    title: seo.defaultTitle,
    description: seo.description,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: `${site.name} - Catering in Kalispell, MT`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.description,
    images: [seo.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://en.wikipedia.org/wiki/Catering',
  '@id': `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street || undefined,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  // TODO: Remove or update business hours - during fire season everyone is on assignment
  // openingHoursSpecification: [...],
  areaServed: [
    { '@type': 'City', name: 'Kalispell', containedInPlace: { '@type': 'State', name: 'Montana' } },
    { '@type': 'City', name: 'Whitefish', containedInPlace: { '@type': 'State', name: 'Montana' } },
    { '@type': 'City', name: 'Bigfork', containedInPlace: { '@type': 'State', name: 'Montana' } },
    { '@type': 'City', name: 'Lakeside', containedInPlace: { '@type': 'State', name: 'Montana' } },
    { '@type': 'City', name: 'Columbia Falls', containedInPlace: { '@type': 'State', name: 'Montana' } },
    { '@type': 'Place', name: 'Flathead County' },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  priceRange: seo.priceRange,
  image: `${seo.url}${seo.image}`,
  // TODO: Add aggregateRating once real Google review count is provided by the owner.
  // Example: aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        {/* TODO: GSC verification meta tag */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231a2e1a'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='18' fill='%23c85a1e' font-family='serif'>P</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
