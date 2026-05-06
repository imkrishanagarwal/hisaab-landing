import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Can Paytm be used to split bills with friends?', answer: 'Paytm supports basic group payments and bill splitting, but as a payment-first app, it is not optimized for tracking shared expenses over time across multiple groups.' },
  { question: 'Why use The Hisaab when Paytm exists?', answer: 'Paytm is for paying. The Hisaab is for tracking. For a flatmate group with monthly rent, WiFi, groceries, and Swiggy splits, you need a dedicated tracker. Paytm handles the actual UPI settlement; Hisaab handles everything before it.' },
  { question: 'Does The Hisaab work with Paytm UPI?', answer: 'Yes. When you tap settle in The Hisaab, we open Paytm (or GPay or PhonePe) with the exact amount pre-filled. One tap to pay.' },
  { question: 'Is Paytm or The Hisaab better for trip expenses?', answer: 'For a trip with multiple expenses across many days, The Hisaab is built for this exact case — including offline mode for spotty coverage. Paytm is best for the final UPI settle-up.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs Paytm - Tracker + UPI for Group Expenses',
  description:
    'Paytm is for paying. The Hisaab is for tracking. Track shared expenses in Hisaab; settle via Paytm UPI in one tap.',
  alternates: { canonical: 'https://thehisaab.com/compare/paytm' },
  openGraph: {
    title: 'The Hisaab vs Paytm',
    description: 'Pair a dedicated tracker with Paytm for ongoing group expenses.',
    url: 'https://thehisaab.com/compare/paytm',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs Paytm' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs Paytm',
    description: 'Tracker + Paytm = the right Indian group expense workflow.',
    images: ['/image.jpg'],
  },
};

export default function ComparePaytmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/paytm' },
          { name: 'The Hisaab vs Paytm', url: 'https://thehisaab.com/compare/paytm' },
        ])}
      />
      {children}
    </>
  );
}
