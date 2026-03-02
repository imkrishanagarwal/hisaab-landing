import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createFaqSchema, createBreadcrumbSchema } from '@/lib/schema';

const faqs = [
  { question: 'How do I split rent and bills with my roommates?', answer: 'Create a group in Hisaab for your flat, add all roommates, then log every shared expense — rent, electricity, WiFi, groceries. Hisaab calculates running balances automatically.' },
  { question: 'Can I track recurring expenses like rent?', answer: 'Yes. Add rent or any recurring bill each month. Hisaab keeps a running total so you can settle up weekly or monthly — whatever works for your flat.' },
  { question: 'What if not all roommates share every expense?', answer: 'You can choose which roommates to include in each expense. If only two of you ordered Swiggy, split it between just those two.' },
  { question: 'Is Hisaab better than a shared spreadsheet?', answer: 'Much better. Spreadsheets get outdated, cause confusion, and nobody wants to maintain them. Hisaab updates in real-time and everyone can see their balance instantly.' },
];

export const metadata: Metadata = {
  title: 'Best App for Splitting Rent & Bills with Roommates',
  description:
    'Split rent, groceries, electricity, WiFi, and all shared expenses with your roommates. Hisaab tracks every rupee automatically. Free forever. No ads.',
  alternates: {
    canonical: 'https://thehisaab.com/for/roommates',
  },
  openGraph: {
    title: 'Roommate Expense Tracker - Hisaab',
    description: 'Split rent and bills with roommates. Track every shared expense automatically. Free forever.',
    url: 'https://thehisaab.com/for/roommates',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Hisaab - Roommate Bill Splitting' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roommate Expense Tracker - Hisaab',
    description: 'Split rent, groceries, bills with roommates. Free. No ads. Made for India.',
    images: ['/image.jpg'],
  },
};

export default function RoommatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFaqSchema(faqs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Use Cases', url: 'https://thehisaab.com/for/roommates' },
          { name: 'Roommates', url: 'https://thehisaab.com/for/roommates' },
        ])}
      />
      {children}
    </>
  );
}
