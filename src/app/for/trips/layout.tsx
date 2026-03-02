import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How do I split trip expenses with friends?', answer: 'Download Hisaab, create a group for your trip, and add expenses as they happen. Hisaab automatically calculates who owes whom. Works offline too — perfect for remote destinations.' },
  { question: 'Can I add expenses without internet during a trip?', answer: 'Yes. Hisaab works fully offline. Add all your expenses during the trip and they sync automatically when you get internet access.' },
  { question: 'How do I handle unequal splitting on trips?', answer: 'Hisaab supports custom amounts for each person. If someone didn\'t join dinner or someone paid more, you can set exact amounts per person — all for free.' },
  { question: 'What if multiple people paid for one expense?', answer: 'Hisaab supports multiple payers. If two people split a hotel bill, you can record both as payers with their exact amounts.' },
];

export const metadata: Metadata = {
  title: 'Best App to Split Trip Expenses with Friends',
  description:
    'Split Goa trip expenses, vacation costs, and travel bills with friends easily. Hisaab makes group trip expense splitting simple. Works offline. 100% free. No ads.',
  alternates: {
    canonical: 'https://thehisaab.com/for/trips',
  },
  openGraph: {
    title: 'Split Trip Expenses - Hisaab',
    description: 'The easiest way to split group trip expenses. Works offline, supports unequal splits, 100% free.',
    url: 'https://thehisaab.com/for/trips',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Hisaab - Split Trip Expenses' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Trip Expense Splitter - Hisaab',
    description: 'Split group trip expenses easily. Works offline. Free forever.',
    images: ['/image.jpg'],
  },
};

export default function TripsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Use Cases', url: 'https://thehisaab.com/for/trips' },
          { name: 'Trip Expenses', url: 'https://thehisaab.com/for/trips' },
        ])}
      />
      {children}
    </>
  );
}
