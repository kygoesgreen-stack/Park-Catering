import { site } from '@/config/content'

export const colors = {
  forest: {
    900: '#1a2e1a',
    800: '#243824',
    700: '#2e472e',
    600: '#3a5a3a',
    DEFAULT: '#1a2e1a',
  },
  charcoal: {
    900: '#1c1c1c',
    800: '#2a2a2a',
    700: '#3a3a3a',
    600: '#4a4a4a',
    DEFAULT: '#2a2a2a',
  },
  cream: {
    50: '#fefdfb',
    100: '#fdf9f0',
    200: '#faf0dc',
    DEFAULT: '#fdf9f0',
  },
  ember: {
    500: '#c85a1e',
    600: '#b04a14',
    700: '#8a3a10',
    DEFAULT: '#c85a1e',
  },
} as const

export const seo = {
  titleTemplate: `%s — ${site.name}`,
  defaultTitle: `${site.name} | Catering — Kalispell, MT`,
  description: site.description,
  url: site.url,
  phone: site.phone,
  email: site.email,
  address: site.address,
  openingHours: 'Mo-Fr 08:00-17:00, Sa 09:00-14:00',
  priceRange: '$$',
  image: '/og-image.jpg',
}