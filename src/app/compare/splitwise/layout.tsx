import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Is The Hisaab better than Splitwise?', answer: 'For most users in India, yes. The Hisaab offers all the features Splitwise charges for — unlimited groups, unequal splits, multiple payers — completely free with no ads. Splitwise charges ₹999/year for premium and limits free users to 3 expenses/day.' },
  { question: 'Is Splitwise Pro worth ₹999 per year?', answer: 'Not when The Hisaab offers every Pro feature for free. Unlimited groups, unequal splits, multiple payers, offline mode, and no ads — all at zero cost.' },
  { question: 'Can I use both The Hisaab and Splitwise?', answer: 'Yes. You can use both apps simultaneously. Many users start by trying The Hisaab alongside Splitwise and eventually switch fully.' },
  { question: 'Does The Hisaab have all the features of Splitwise Pro?', answer: 'Yes. The Hisaab includes unlimited groups, unequal splits, multiple payers, full offline mode, real-time sync, and no ads — all features that require Splitwise Pro.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Splitwise - Detailed Feature Comparison 2026',
  description:
    'Compare The Hisaab and Splitwise side by side. See pricing, features, limits, and why thousands are switching to The Hisaab — the free Splitwise alternative for India.',
  alternates: {
    canonical: 'https://thehisaab.com/compare/splitwise',
  },
  openGraph: {
    title: 'The Hisaab vs Splitwise - Feature Comparison',
    description: 'Side-by-side comparison. See why The Hisaab is the better free alternative to Splitwise.',
    url: 'https://thehisaab.com/compare/splitwise',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Splitwise Comparison' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Splitwise - Which is Better?',
    description: 'Full feature comparison. The Hisaab offers everything Splitwise charges for, completely free.',
    images: ['/image.jpg'],
  },
};

export default function CompareSplitwiseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/splitwise' },
          { name: 'The Hisaab vs Splitwise', url: 'https://thehisaab.com/compare/splitwise' },
        ])}
      />
      {children}
    </>
  );
}
