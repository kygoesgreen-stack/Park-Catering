import { MetadataRoute } from 'next'
import { site } from '@/config/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    { url: `${baseUrl}/#story`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/#services`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/#menu`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/#gallery`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/#testimonials`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/#faq`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/#contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]
}