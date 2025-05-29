import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://claexa.com',
      lastModified: new Date("2025-05-29"),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://claexa.com/about',
      lastModified: new Date("2025-05-29"),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://claexa.com/pricing',
      lastModified: new Date("2025-05-29"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://claexa.com/contact',
      lastModified: new Date("2025-05-29"),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    {
      url: 'https://claexa.com/features/question-paper-generator',
      lastModified: new Date("2025-05-29"), // You might want to update this date
      changeFrequency: 'weekly',
      priority: 0.8, // Adjust priority as needed
    },
  ]
}