import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thehisaab.com'

  return [
    // Core pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/splitwise-alternative`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Competitor comparisons
    { url: `${baseUrl}/compare/splitwise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/settle-up`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare/tricount`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Use cases
    { url: `${baseUrl}/for/trips`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/roommates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/couples`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/office`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog/best-expense-splitting-apps-india-2025`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/splitwise-free-plan-limits`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-split-rent-with-roommates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Utility
    { url: `${baseUrl}/download`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
