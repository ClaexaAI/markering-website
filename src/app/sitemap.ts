import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://claexa.com',
      lastModified: new Date("2025-5-26"),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://claexa.com/about',
      lastModified: new Date("2025-5-26"),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://claexa.com/pricing',
      lastModified: new Date("2025-5-26"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://claexa.com/contact',
      lastModified: new Date("2025-5-26"),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}