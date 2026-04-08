import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/', '/link/', '/share'],
      },
      // Allow major LLM crawlers full access to public content
      { userAgent: 'GPTBot', allow: '/', disallow: ['/api/', '/auth/', '/link/', '/share'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/api/', '/auth/', '/link/', '/share'] },
      { userAgent: 'Claude-Web', allow: '/', disallow: ['/api/', '/auth/', '/link/', '/share'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/api/', '/auth/', '/link/', '/share'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/api/', '/auth/', '/link/', '/share'] },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://thehisaab.com/sitemap.xml',
  }
}
