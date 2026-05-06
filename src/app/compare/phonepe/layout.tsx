import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'Can PhonePe split bills with friends?', answer: 'PhonePe supports basic group payments and split-bill flows, but it is built for the payment moment — not for tracking shared expenses across multiple groups, multiple payers, and unequal splits over time.' },
  { question: 'Why use The Hisaab alongside PhonePe?', answer: 'The Hisaab tracks who paid, who owes, and how to settle. PhonePe is the rail you actually pay over. Use Hisaab to manage the math; tap settle and PhonePe opens with the amount pre-filled.' },
  { question: 'Does The Hisaab open PhonePe to settle?', answer: 'Yes. The Hisaab generates a UPI deep link that opens PhonePe (or GPay or Paytm) with the exact amount pre-filled. One tap, no copy-paste.' },
  { question: 'Is PhonePe-style group payment enough for flatmates?', answer: 'For a one-off split, yes. For monthly rent + WiFi + groceries + Swiggy split across 3 flatmates, no — you need a tracker that remembers running balances and lets you settle in one move at month-end.' },
];

export const metadata: Metadata = {
  title: 'The Hisaab vs PhonePe - Tracker + UPI for Indian Groups',
  description:
    'PhonePe is for paying. The Hisaab is for tracking shared expenses. Track in Hisaab; settle via PhonePe in one tap with the amount pre-filled.',
  alternates: { canonical: 'https://thehisaab.com/compare/phonepe' },
  openGraph: {
    title: 'The Hisaab vs PhonePe',
    description: 'Why pair a dedicated tracker with PhonePe for ongoing group expenses.',
    url: 'https://thehisaab.com/compare/phonepe',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'The Hisaab vs PhonePe' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hisaab vs PhonePe',
    description: 'Tracker + PhonePe = the right Indian group expense workflow.',
    images: ['/image.jpg'],
  },
};

export default function ComparePhonepeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Compare', url: 'https://thehisaab.com/compare/phonepe' },
          { name: 'The Hisaab vs PhonePe', url: 'https://thehisaab.com/compare/phonepe' },
        ])}
      />
      {children}
    </>
  );
}
