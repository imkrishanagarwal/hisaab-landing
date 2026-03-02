import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/link/', '/share'],
      },
    ],
    sitemap: 'https://thehisaab.com/sitemap.xml',
  }
}
