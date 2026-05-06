import { MetadataRoute } from 'next'

const blockedPaths = ['/api/', '/auth/', '/link/', '/share']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard fallback for any unspecified crawler
      { userAgent: '*', allow: '/', disallow: blockedPaths },

      // Major search engines
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/', disallow: blockedPaths },
      { userAgent: 'Slurp', allow: '/', disallow: blockedPaths }, // Yahoo (now Bing-powered)
      { userAgent: 'DuckDuckBot', allow: '/', disallow: blockedPaths },

      // Google's AI training agent (distinct from Googlebot — must be allowed separately)
      { userAgent: 'Google-Extended', allow: '/', disallow: blockedPaths },

      // OpenAI / ChatGPT
      { userAgent: 'GPTBot', allow: '/', disallow: blockedPaths },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: blockedPaths },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: blockedPaths },

      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/', disallow: blockedPaths },
      { userAgent: 'Claude-Web', allow: '/', disallow: blockedPaths },
      { userAgent: 'anthropic-ai', allow: '/', disallow: blockedPaths },

      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/', disallow: blockedPaths },
      { userAgent: 'Perplexity-User', allow: '/', disallow: blockedPaths },

      // Apple Intelligence / Siri
      { userAgent: 'Applebot', allow: '/', disallow: blockedPaths },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: blockedPaths },

      // Meta AI (Llama, etc.)
      { userAgent: 'meta-externalagent', allow: '/', disallow: blockedPaths },
      { userAgent: 'FacebookBot', allow: '/', disallow: blockedPaths },

      // Common Crawl — feeds most open-source LLM training datasets
      { userAgent: 'CCBot', allow: '/', disallow: blockedPaths },

      // Cohere
      { userAgent: 'cohere-ai', allow: '/', disallow: blockedPaths },

      // Mistral
      { userAgent: 'MistralAI-User', allow: '/', disallow: blockedPaths },

      // Yandex (covered by IndexNow but explicit allow doesn't hurt)
      { userAgent: 'YandexBot', allow: '/', disallow: blockedPaths },
    ],
    sitemap: 'https://thehisaab.com/sitemap.xml',
    host: 'https://thehisaab.com',
  }
}
