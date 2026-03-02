export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Hisaab',
  url: 'https://thehisaab.com',
  logo: 'https://thehisaab.com/logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'admin@thehisaab.com',
    contactType: 'customer support',
  },
  sameAs: [
    'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab',
    'https://apps.apple.com/in/app/the-hisaab/id6759067047',
  ],
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'The Hisaab',
  alternateName: 'Hisaab',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  description:
    'Free expense splitting and bill tracking app for India. The best free alternative to Splitwise. Split bills with friends, track shared expenses, settle debts easily.',
  url: 'https://thehisaab.com',
  downloadUrl: [
    'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab',
    'https://apps.apple.com/in/app/the-hisaab/id6759067047',
  ],
  screenshot: 'https://thehisaab.com/ss/grouplist.webp',
  featureList: [
    'Split bills equally or unequally',
    'Multiple payers support',
    'Works offline with real-time sync',
    'Unlimited groups and expenses',
    'Real-time activity feed',
    'Smart settlement suggestions',
    'Privacy-first design',
    'Made for India with INR support',
  ],
};

export function createFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
