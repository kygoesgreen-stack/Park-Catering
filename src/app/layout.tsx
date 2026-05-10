import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { site, nav, footer } from '@/config/content'
import { seo } from '@/config/theme'
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
        alt: `${site.name} — ${site.tagline}`,
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
  '@graph': [
    {
      '@type': 'CateringCompany',
      '@id': `${seo.url}/#organization`,
      name: site.name,
      description: seo.description,
      url: seo.url,
      telephone: seo.phone,
      email: seo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: seo.address.street,
        addressLocality: seo.address.city,
        addressRegion: seo.address.state,
        postalCode: seo.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1958,
        longitude: -114.316,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      sameAs: [site.social.instagram, site.social.facebook],
      priceRange: seo.priceRange,
      image: `${seo.url}${seo.image}`,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${seo.url}/#localbusiness`,
      name: site.name,
      description: seo.description,
      url: seo.url,
      telephone: seo.phone,
      email: seo.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: seo.address.street,
        addressLocality: seo.address.city,
        addressRegion: seo.address.state,
        postalCode: seo.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1958,
        longitude: -114.316,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      priceRange: seo.priceRange,
    },
    {
      '@type': 'Service',
      '@id': `${seo.url}/#service`,
      name: 'Catering Services',
      provider: { '@id': `${seo.url}/#organization` },
      description: 'Professional catering for weddings, corporate events, private gatherings, and wildland fire crews in the Flathead Valley and Glacier region.',
      areaServed: {
        '@type': 'Place',
        name: 'Flathead Valley, Montana',
      },
      serviceType: [
        'Wedding Catering',
        'Corporate Event Catering',
        'Private Event Catering',
        'Wildfire Crew Catering',
      ],
    },
  ],
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231a2e1a'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-size='18' fill='%23c85a1e' font-family='serif'>P</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}