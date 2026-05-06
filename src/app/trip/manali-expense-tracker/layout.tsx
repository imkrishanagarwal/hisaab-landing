import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { createBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Manali Trip Expense Tracker — Split Costs Fairly (Free, Offline)',
  description:
    'Plan and split Manali trip expenses with friends. Sample budgets for stay, food, snow activities, and transport. Free, UPI-native, fully offline for hill-area signal.',
  alternates: { canonical: 'https://thehisaab.com/trip/manali-expense-tracker' },
  openGraph: {
    title: 'Manali Trip Expense Tracker',
    description: 'Split Manali trip expenses with friends. Offline mode for the mountains.',
    url: 'https://thehisaab.com/trip/manali-expense-tracker',
    images: [{ url: '/image.jpg', width: 1200, height: 630, alt: 'Manali trip expense tracker' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manali Trip Expense Tracker',
    description: 'Split Manali trip expenses. Free. Offline. UPI-native.',
    images: ['/image.jpg'],
  },
};

export default function ManaliTripLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://thehisaab.com' },
          { name: 'Trip Expenses', url: 'https://thehisaab.com/trip/manali-expense-tracker' },
          { name: 'Manali', url: 'https://thehisaab.com/trip/manali-expense-tracker' },
        ])}
      />
      {children}
    </>
  );
}
